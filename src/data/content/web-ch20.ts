import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 20
// Shipping It: Docker, CI/CD, Cloud and Capstone (Sections 20.1 – 20.5)
// Master study content.
// ============================================================================

export const webCh20Content: SectionContent[] = [
  // ---------------------------------------------------------------- 20.1
  {
    sectionId: 'web-ch20-s1',
    readingTime: 8,
    intro: 'Docker turns it works on my machine into it runs the same everywhere by packaging apps with their runtimes. This section separates images from containers, orders Dockerfile layers for cache hits, and composes app plus database plus cache locally. You will build lean production images that start fast and behave like prod.',
    objectives: [
      'Distinguish images as templates from containers as running instances',
      'Order Dockerfile layers from stable to volatile for cache hits',
      'Shrink production images with multi stage builds',
      'Compose app plus database plus cache with one command'
    ],
    concepts: [
      {
        term: 'Images versus containers',
        kind: 'definition',
        statement: 'An **image** is an immutable `template` of stacked filesystem layers plus metadata, while a container is one running **instance** of that template with its own writable layer. Many containers can share one image without **interference**, because writes stay private to each instance. Registries store **images**, orchestrators run containers, and the two lifecycles stay cleanly separate.',
        detail: 'Tag releases immutably with versions plus commit hashes and keep latest for humans only. Remove stopped containers and dangling images on a schedule to reclaim disk.'
      },
      {
        term: 'Layer cache ordering',
        kind: 'method',
        statement: '**Layer caching** reuses every unchanged `layer` so rebuilds redo only what moved, which makes ordering the main performance lever. Copy dependency **manifests** and install before copying source, because manifests change rarely while code changes constantly. Stable to **volatile** top to bottom is the whole rule: base image, system packages, dependencies, then application code.',
        detail: 'A misplaced source copy before install invalidates the dependency layer on every edit. Verify cache hits in build output and reorder until dependency layers report cached.'
      },
      {
        term: 'Multi stage builds',
        kind: 'method',
        statement: '**Multi stage builds** compile in a full `build` image then copy only runtime artifacts into a slim final image. Toolchains plus dev dependencies stay **behind**, so production ships node runtime plus built assets plus production modules only. Smaller images pull **faster**, expose fewer binaries, and start with less to go wrong.',
        detail: 'Name stages like deps, build, and runner, and copy between them explicitly. Run production as a non root user created in the final stage.'
      },
      {
        term: 'Compose for app plus db plus cache',
        kind: 'method',
        statement: '**Compose** declares the app plus `postgres` plus `redis` as one versioned topology with networks and volumes in a single file. One `up` command boots the trio wired together, and healthchecks order **startup** so the app waits for the database. Environment files per **service** keep local secrets out of the shared definition.',
        detail: 'Mount named volumes for database data so restarts preserve rows. Pin minor image versions so local prod parity does not drift silently.'
      },
      {
        term: 'Ignore files, volumes, and prod parity',
        kind: 'insight',
        statement: '**Prod parity** means local runs mirror production topology, versions, and `env` shape so surprises surface on laptops instead of at midnight. Ignore files keep `node_modules` and build output out of build context, which shrinks uploads and prevents **host leakage** into images. Volumes persist **state** outside ephemeral containers, matching how managed disks behave in the cloud.',
        detail: 'Keep a dockerignore beside every Dockerfile and review it like code. Seed local databases with the same migration chain production runs.'
      }
    ],
    examples: [
      {
        title: 'Write a cache friendly production Dockerfile',
        problem: 'A Node image rebuilds dependencies on every code edit and ships dev tools to production.',
        steps: [
          { label: 'Step 1: Order stable to volatile', text: '```dockerfile\nFROM node:22-alpine AS deps\nWORKDIR /app\nCOPY package.json package-lock.json ./\nRUN npm ci --omit=dev\nCOPY src ./src\nCOPY prisma ./prisma\nRUN npx prisma generate && npm run build\n```\nManifests plus install precede source, so edits reuse the dependency layer.' },
          { label: 'Step 2: Ship a slim runner', text: '```dockerfile\nFROM node:22-alpine AS runner\nWORKDIR /app\nENV NODE_ENV=production\nCOPY --from=deps /app/dist ./dist\nCOPY --from=deps /app/node_modules ./node_modules\nUSER node\nCMD ["node", "dist/server.js"]\n```\nOnly built output plus production modules cross into the final image.' },
          { label: 'Step 3: Build and inspect', text: '```bash\ndocker build -t studyverse:1.4.0 .\ndocker images studyverse --format "table {{.Tag}}\\t{{.Size}}"\n```\nVersion tags plus size checks prove the slimming worked.' }
        ],
        result: 'Code edits rebuild in seconds through cache hits and production runs a minimal non root image.'
      },
      {
        title: 'Compose the full local stack',
        problem: 'Developers boot the app, Postgres, and Redis with mismatched versions and manual wiring.',
        steps: [
          { label: 'Step 1: Declare the topology', text: '```yaml\nservices:\n  app:\n    build: .\n    ports: ["3000:3000"]\n    depends_on:\n      db: { condition: service_healthy }\n      cache: { condition: service_started }\n  db:\n    image: postgres:16-alpine\n    volumes: ["pgdata:/var/lib/postgresql/data"]\n  cache:\n    image: redis:7-alpine\nvolumes:\n  pgdata: {}\n```\nOne file pins versions, wiring, and the health gated startup order.' },
          { label: 'Step 2: Boot and migrate', text: '```bash\ndocker compose up --build -d\ndocker compose exec app npx prisma migrate deploy\n```\nThe app waits for a healthy database before migrations run.' },
          { label: 'Step 3: Verify parity', text: '```bash\ndocker compose ps\ndocker compose logs app --tail=50\n```\nService states plus logs confirm the trio behaves like a miniature production.' }
        ],
        result: 'One command reproduces app plus database plus cache identically on every machine.'
      }
    ],
    keyTakeaways: [
      'Images are immutable templates and containers are isolated running instances sharing those layers.',
      'Order Dockerfile layers from stable base to volatile source so edits hit warm caches.',
      'Compile in a build stage and ship only runtime artifacts as a non root user.',
      'Compose app plus database plus cache with pinned versions and health gated startup.',
      'Enforce prod parity with ignore files, named volumes, and identical migration chains.'
    ],
    quiz: [
      {
        q: 'Why copy manifests and install before copying source?',
        options: [
          'Source is not needed in images',
          'Manifests change rarely so the dependency layer stays cached across code edits',
          'Installs run faster at the bottom',
          'Docker requires alphabetical order'
        ],
        answer: 1,
        explanation: 'Cache invalidation flows downward: a changed layer rebuilds everything below it. Early stable layers maximize reuse across edits.'
      },
      {
        q: 'What does a multi stage build keep out of production?',
        options: [
          'The application code itself',
          'Toolchains and dev dependencies, shipping only built output plus production modules',
          'Environment variables',
          'The runtime entirely'
        ],
        answer: 1,
        explanation: 'Build tools are needed at compile time only. The final stage copies artifacts forward, leaving compilers and dev packages behind.'
      },
      {
        q: 'What does `depends_on` with a healthy condition guarantee?',
        options: [
          'The database schema is migrated',
          'The app starts only after the database reports healthy',
          'Backups run automatically',
          'Ports never conflict'
        ],
        answer: 1,
        explanation: 'Health gating orders startup so the app never races a cold database. Migrations still run explicitly after the healthy signal.'
      },
      {
        q: 'Why keep `node_modules` in dockerignore?',
        options: [
          'Dependencies are unused in containers',
          'Host modules would inflate context uploads and leak host builds into images',
          'Ignore files speed up the app at runtime',
          'Containers cannot run JavaScript'
        ],
        answer: 1,
        explanation: 'Build context uploads everything not ignored, and host compiled modules poison Linux images. Clean installs inside the build stay correct.'
      },
      // Placement-pattern: Dockerfile layer cache ordering (original)
      {
        q: "A Dockerfile installs dependencies before copying source:\n```dockerfile\nCOPY package.json package-lock.json ./\nRUN npm ci\nCOPY . .\n```\nWhy this order instead of copying everything first?",
        options: ["It makes builds slower but tidier to read", "Layer order has no effect on caching", "Dependencies should reinstall on every source edit", "Dependency layers stay cached across source-only changes, because a layer rebuilds only when its own inputs change, so edits skip the install step"],
        answer: 3,
        explanation: "Step 1: The data given is a manifest-only copy followed by install, with the full source copied last. Step 2: The governing rule is layer caching: each instruction forms a layer keyed on its inputs, and a change invalidates only its own layer plus everything after it. Step 3: Tracing a source-only edit, the manifest layers hit the cache so the install step is skipped, while only the final copy and later stages rebuild. Step 4: The distractors fail because the order exists precisely to save rebuild time, ordering controls invalidation directly, and reinstalling on every keystroke wastes minutes per change. Step 5: Therefore the manifest-first order maximizes cache reuse."
      }
    ]
  },

  // ---------------------------------------------------------------- 20.2
  {
    sectionId: 'web-ch20-s2',
    readingTime: 9,
    intro: 'Continuous integration and delivery turn main into always shippable code through automated pipelines. This section orders pipeline stages from cheap to slow, caches aggressively, ships preview deploys per pull request, and protects main with required checks. You will design a GitHub Actions workflow that fails fast and tells the truth.',
    objectives: [
      'Order pipeline stages as lint, typecheck, test, then build',
      'Cache dependencies and split slow suites across jobs',
      'Publish preview deploys for every pull request',
      'Protect main with required checks plus required reviews'
    ],
    concepts: [
      {
        term: 'Pipeline stage order',
        kind: 'method',
        statement: '**Stage order** runs the cheapest `lint` first, then typecheck, then unit tests, then integration, then the production `build` last. Fast static stages fail in **seconds** while slow suites run only on code that deserves them. This ordering minimizes **minutes billed** and attention wasted waiting on doomed runs.',
        detail: 'Fail fast flags stop the workflow at the first red stage. Keep the build last since it proves the shippable artifact after all quality signals pass.'
      },
      {
        term: 'Triggers, jobs, and matrices',
        kind: 'definition',
        statement: '**Workflows** trigger on `push` plus pull request events and fan out into parallel `jobs` with explicit dependencies. A `matrix` multiplies a job across Node versions or shard indexes so slow suites split into concurrent slices. Shared **artifacts** pass build output between jobs without rebuilding the world twice.',
        detail: 'Trigger full suites on pull requests and lighter checks on draft pushes to balance signal with cost. Pin action versions to hashes or major tags for supply chain safety.'
      },
      {
        term: 'Caching and sharding slow suites',
        kind: 'method',
        statement: '**Caching** restores `node_modules` plus build caches keyed by lockfile hash, which turns installs from minutes into seconds. **Sharding** splits end to end specs across parallel runners that report back to one required check. Together they keep pipelines **fast** as suites grow, because speed is what keeps developers from bypassing the gate.',
        detail: 'Key caches on lockfile plus runner OS and restore with prefix fallbacks. Balance shard sizes so no single runner dominates wall clock time.'
      },
      {
        term: 'Preview deploys per pull request',
        kind: 'method',
        statement: '**Preview deploys** publish every pull request to a unique `url` with production like settings for click through review. Designers and reviewers test **real behavior** instead of imagining diffs, which catches integration surprises before merge. Previews use **sandboxed** data and credentials so experiments cannot touch production records.',
        detail: 'Post the preview URL as a pull request comment and expire previews on merge. Seed previews with anonymized fixtures rather than production snapshots.'
      },
      {
        term: 'Protected main with required checks',
        kind: 'law',
        statement: '**Branch protection** makes the pipeline the law: required `checks` plus required reviews plus no direct pushes to `main`. Red code cannot merge by **urgency** or seniority, which keeps main releasable at every commit. Administration owns the **ruleset** centrally so repository settings cannot drift per contributor mood.',
        detail: 'Require conversation resolution and up to date branches before merge. Audit bypass events monthly since every exception weakens the guarantee.'
      }
    ],
    examples: [
      {
        title: 'Build a fail fast quality workflow',
        problem: 'A repo runs only unit tests in CI, so lint errors, type drift, and broken builds reach main.',
        steps: [
          { label: 'Step 1: Order cheap to slow', text: '```yaml\njobs:\n  quality:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: 22, cache: npm }\n      - run: npm ci\n      - run: npm run lint\n      - run: npm run typecheck\n      - run: npm run test\n      - run: npm run build\n```\nLint fails in seconds, types next, then behavior, with the shippable build proving the end.' },
          { label: 'Step 2: Split the slow suite', text: '```yaml\n  e2e:\n    strategy:\n      matrix: { shard: [1, 2, 3, 4] }\n    steps:\n      - run: npx playwright test --shard=${{ matrix.shard }}/4\n```\nFour runners divide the browser suite so wall clock stays flat as coverage grows.' },
          { label: 'Step 3: Require it on main', text: '```yaml\n# Ruleset for main:\n# required_checks: [quality, e2e]\n# required_reviews: 1\n# allow_direct_pushes: false\n```\nMerges need green checks plus one human review with zero direct pushes.' }
        ],
        result: 'Every pull request proves style, types, behavior, and buildability before a human even reviews.'
      },
      {
        title: 'Add preview deploys to the review loop',
        problem: 'Reviewers approve UI changes blind because running every branch locally is impractical.',
        steps: [
          { label: 'Step 1: Deploy previews from CI', text: '```yaml\n  preview:\n    needs: [quality]\n    steps:\n      - run: npx vercel deploy --prebuilt > preview-url.txt\n      - uses: actions/upload-artifact@v4\n        with: { name: preview-url, path: preview-url.txt }\n```\nOnly green code earns a public preview URL for the pull request.' },
          { label: 'Step 2: Comment the link', text: '```ts\n// CI bot comments on the pull request:\n// Preview ready: https://studyverse-pr-412.vercel.app\n// Commit: a1b2c3d — lint plus typecheck plus tests green\n```\nOne click takes reviewers to the exact behavior under discussion.' },
          { label: 'Step 3: Sandbox the data', text: '```bash\nvercel env add DATABASE_URL preview\n# preview value points at a seeded sandbox, never production\n```\nPreview mistakes corrupt fixtures that reset nightly instead of customer rows.' }
        ],
        result: 'Reviews happen against running software with safe data, and broken visuals get caught before merge.'
      }
    ],
    keyTakeaways: [
      'Order stages lint, then typecheck, then tests, then build so cheap signals fail first.',
      'Fan out with jobs plus matrices and share artifacts instead of rebuilding.',
      'Cache by lockfile hash and shard slow browser suites across runners.',
      'Publish sandboxed preview URLs on every pull request for real behavior review.',
      'Protect main with required checks, required reviews, and no direct pushes.'
    ],
    quiz: [
      {
        q: 'Why does lint run before tests in the pipeline?',
        options: [
          'Lint is more important than correctness',
          'Cheap static failures in seconds spare slow suites on doomed code',
          'Tests cannot run after lint',
          'Builds require lint output as input'
        ],
        answer: 1,
        explanation: 'Fail fast ordering saves minutes and attention: style and pattern errors surface immediately while expensive tests run only on worthy code.'
      },
      {
        q: 'What does matrix sharding buy a growing Playwright suite?',
        options: [
          'Fewer tests to maintain',
          'Flat wall clock time by splitting specs across parallel runners',
          'No need for assertions',
          'Automatic test writing'
        ],
        answer: 1,
        explanation: 'Parallel slices divide browser time so coverage can grow without the pipeline slowing to a crawl. One required check still aggregates the verdict.'
      },
      {
        q: 'Why must previews use sandboxed data?',
        options: [
          'Sandboxes are faster to query',
          'Experiments and mistakes must never touch production records',
          'Production data is too small',
          'Sandboxes skip authentication'
        ],
        answer: 1,
        explanation: 'Previews invite clicking and breaking things by design. Isolation bounds every experiment to disposable fixtures.'
      },
      {
        q: 'What does branch protection guarantee?',
        options: [
          'Faster local development',
          'Only green reviewed code reaches main, keeping it releasable always',
          'No reviews are ever needed',
          'Direct pushes for urgent fixes'
        ],
        answer: 1,
        explanation: 'Required checks plus reviews plus no direct pushes make the gate unconditional. Main stays deployable because exceptions cannot merge.'
      }
    ]
  },

  // ---------------------------------------------------------------- 20.3
  {
    sectionId: 'web-ch20-s3',
    readingTime: 9,
    intro: 'Deploying is choosing homes for the frontend, the API, and the database, then wiring names and certificates. This section places Vercel, Railway, and Neon in one coherent topology with per environment config. You will point DNS at the right targets, prove TLS, and keep preview data safely sandboxed.',
    objectives: [
      'Place frontend, backend, and database on Vercel, Railway, and Neon',
      'Separate env per environment with preview sandboxing',
      'Configure DNS records and verify propagation',
      'Prove TLS certificates plus HTTPS redirects end to end'
    ],
    concepts: [
      {
        term: 'One topology: Vercel plus Railway plus Neon',
        kind: 'insight',
        statement: 'A clean 2026 topology hosts the Next.js **frontend** on `Vercel` for edge rendering and previews, the API plus workers on `Railway` for long lived processes, and Postgres on `Neon` for serverless branching. Each platform owns its **strength**: previews and CDN at the edge, persistent services with volumes in the middle, and branching **data** at the bottom. The app then treats every tier as **managed**, with connection strings as the only coupling.',
        detail: 'Keep the frontend stateless so any edge region can serve it. Run background workers beside the API so jobs share code and config.'
      },
      {
        term: 'Env per environment',
        kind: 'method',
        statement: '**Env per environment** gives development, preview, and production each its own `DATABASE_URL` plus keys plus feature flags. Values live in the **platform vault**, never in the repo, with previews pointed at sandboxes by construction. Promotion moves **code** between environments while config stays put, so the same artifact behaves correctly everywhere.',
        detail: 'Name variables identically across environments and differ only values. Audit who can read production vault entries quarterly.'
      },
      {
        term: 'DNS records and propagation',
        kind: 'definition',
        statement: '**DNS** maps names to targets through `A` and CNAME plus TXT records, with apex domains flattened by the provider. Changes propagate through **TTL** bounded caches, so low TTLs precede migrations and rise after stability. Verification with `dig` plus provider checks proves the world sees the **intended** targets before traffic is declared moved.',
        detail: 'Point subdomains with CNAME records at platform targets and follow provider steps for apex domains. Keep old targets warm until propagation plus cache expiry fully complete.'
      },
      {
        term: 'TLS certificates and HTTPS redirects',
        kind: 'method',
        statement: '**TLS** certificates from automated `ACME` issuance prove identity and encrypt every byte in transit. Platforms provision and **renew** automatically, while the app redirects any plain `HTTP` upward with HSTS pinned. Verification closes the loop: check the **chain** plus expiry plus redirect from multiple networks before announcing launch.',
        detail: 'Prefer full strict TLS modes at proxies so origin traffic stays encrypted too. Alert on certificate expiry with weeks of lead time even for automated renewals.'
      },
      {
        term: 'Preview per PR data safety',
        kind: 'method',
        statement: '**Preview per PR envs** pair each preview deploy with an isolated `branch` of the Neon database seeded with fixtures. Tests and reviewers exercise **real queries** against disposable data that resets on merge. Production stays **untouched** because preview connection strings cannot address it by construction.',
        detail: 'Branch the database automatically on pull request open and drop the branch on merge. Anonymize any fixture derived from real shapes so no personal data reaches previews.'
      }
    ],
    examples: [
      {
        title: 'Wire the three tier topology',
        problem: 'A team runs everything on one box and needs separate frontend, API, and database homes with clean config.',
        steps: [
          { label: 'Step 1: Place each tier', text: '```bash\nvercel link --project studyverse-web\nrailway link --project studyverse-api\nneon branches create --name preview-412\n```\nEach platform owns its tier with independent scaling and deploys.' },
          { label: 'Step 2: Separate the env', text: '```bash\nvercel env add NEXT_PUBLIC_API_URL production\nrailway variables set DATABASE_URL="$NEON_PROD_URL"\nrailway variables set DATABASE_URL="$NEON_BRANCH_URL" --env preview\n```\nIdentical names carry per environment values from each platform vault.' },
          { label: 'Step 3: Connect the tiers', text: '```ts\nconst apiUrl = process.env.NEXT_PUBLIC_API_URL\nif (!apiUrl) throw new Error("Missing NEXT_PUBLIC_API_URL")\nconst pool = new Pool({ connectionString: process.env.DATABASE_URL })\n```\nBoot fails closed when wiring is missing instead of calling the wrong tier.' }
        ],
        result: 'The edge serves pages, Railway runs API plus workers, and Neon branches data per preview with vault held wiring.'
      },
      {
        title: 'Launch DNS with verified TLS',
        problem: 'A custom domain must move to the new topology with zero downtime and proven HTTPS.',
        steps: [
          { label: 'Step 1: Lower TTL then switch', text: '```bash\ndig +short app.example.com\n# Lower TTL to 300 a day before, then point CNAME at the platform target\n```\nShort TTLs bound stale caches so the switch propagates within minutes.' },
          { label: 'Step 2: Prove issuance', text: '```bash\ncurl -sI https://app.example.com | grep -i strict\ncurl -s http://app.example.com -o /dev/null -w "%{redirect_url}"\n```\nHeaders prove HSTS while the plain request proves the upward redirect.' },
          { label: 'Step 3: Watch and raise', text: '```bash\nvercel domains verify app.example.com\nneon branches list --project studyverse\n```\nProvider verification plus branch inventory confirm the launch state before TTLs rise again.' }
        ],
        result: 'Traffic moves within the TTL window, every byte rides TLS, and old targets retire only after proof.'
      }
    ],
    keyTakeaways: [
      'Host the frontend on Vercel, services on Railway, and Postgres on Neon for matched strengths.',
      'Keep env per environment in platform vaults with previews sandboxed by construction.',
      'Move DNS with lowered TTLs and verify with dig before retiring old targets.',
      'Automate TLS issuance plus renewal and prove chain, expiry, and redirects.',
      'Branch preview databases per pull request and drop them on merge.'
    ],
    quiz: [
      {
        q: 'Why split across Vercel plus Railway plus Neon?',
        options: [
          'More vendors always means lower cost',
          'Each tier gets the platform matching its needs: edge previews, persistent services, branching data',
          'Databases run best on edge networks',
          'Frontends need persistent volumes'
        ],
        answer: 1,
        explanation: 'Matched strengths beat one size fits all: rendering at the edge, long lived processes with volumes, and serverless branched Postgres.'
      },
      {
        q: 'What does env per environment prevent?',
        options: [
          'All runtime errors',
          'Preview or development config touching production data and keys',
          'The need for version control',
          'Slow page loads'
        ],
        answer: 1,
        explanation: 'Identical names with isolated values plus vault storage mean the same artifact behaves correctly per tier. Promotion moves code, never config.'
      },
      {
        q: 'Why lower TTL before a DNS move?',
        options: [
          'It makes DNS responses larger',
          'Short caches bound propagation time so the switch completes within minutes',
          'It encrypts DNS automatically',
          'TTL affects certificate issuance'
        ],
        answer: 1,
        explanation: 'Resolvers cache for the TTL duration. Lowering first ensures stale answers expire quickly when targets change.'
      },
      {
        q: 'What must be verified after pointing the domain?',
        options: [
          'Only that the homepage loads once',
          'Certificate chain plus expiry plus HTTP to HTTPS redirect plus HSTS headers',
          'Only the DNS record syntax',
          'Only preview deploys'
        ],
        answer: 1,
        explanation: 'Launch proof covers identity, encryption, downgrade resistance, and policy headers. One successful load proves none of the failure modes are absent.'
      }
    ]
  },

  // ---------------------------------------------------------------- 20.4
  {
    sectionId: 'web-ch20-s4',
    readingTime: 8,
    intro: 'Shipping is only half the job: production must be observable, reversible, and documented for bad nights. This section builds logging plus metrics plus traces, wires error tracking with source maps, gates releases on health checks, and writes runbooks. You will roll back with confidence instead of improvising.',
    objectives: [
      'Separate logs, metrics, and traces and use each correctly',
      'Track errors with source maps plus release tags',
      'Gate releases on health checks with automatic rollback',
      'Write runbooks that turn incidents into checklists'
    ],
    concepts: [
      {
        term: 'Logs, metrics, and traces',
        kind: 'definition',
        statement: '**Logs** capture discrete `events` with context for forensic reading, metrics count **behavior** over time like latency histograms, and `traces` follow single requests across service boundaries. The three pillars answer different **questions**: what happened, how often and how slow, and where exactly time went. Dashboards alert on **metrics** while investigations start from traces and end in logs.',
        detail: 'Emit structured JSON logs with request ids so entries join across services. Keep high cardinality identifiers out of metric labels to bound cost.'
      },
      {
        term: 'Error tracking with source maps',
        kind: 'method',
        statement: '**Error tracking** groups production exceptions by fingerprint with `release` tags plus environment plus user impact counts. Uploaded `sourcemaps` translate minified frames back to real files and lines, which turns gibberish stacks into actionable **locations**. Assignment follows **ownership** rules so the team that ships the code feels the crash first.',
        detail: 'Upload maps on every deploy and keep them out of public bundles. Alert on new issue types and on regression spikes of resolved ones.'
      },
      {
        term: 'Health checks and readiness',
        kind: 'method',
        statement: '**Health checks** expose liveness plus `readiness` endpoints that platforms poll before routing traffic. Liveness proves the **process** responds while readiness proves dependencies like Postgres and Redis are **reachable**. Releases roll forward only when readiness passes, which keeps broken builds out of the **rotation** automatically.',
        detail: 'Check dependency connectivity with timeouts inside readiness probes. Fail readiness during migrations so traffic waits instead of erroring.'
      },
      {
        term: 'Rollback strategies',
        kind: 'method',
        statement: '**Rollback** restores the last known good `release` through instant platform rollbacks or blue green swaps. Database changes stay **backwards compatible** across at least one release so old code runs against new schemas. The decision rule is a **timer**: debug forward briefly, then roll back and investigate calmly.',
        detail: 'Keep deploys immutable and tagged so any version can be reactivated in one action. Expand then contract schemas over two releases instead of renaming in place.'
      },
      {
        term: 'Runbooks and incident notes',
        kind: 'method',
        statement: '**Runbooks** turn past incidents into step by step `checklists` with symptoms, queries, commands, and escalation paths. Good runbooks state **when** to roll back versus when to press on, because judgment degrades at three in the morning. Every incident ends with **notes**: timeline, root cause, and the prevention task that stops recurrence.',
        detail: 'Keep runbooks beside the code and test them in game days before real incidents. Blame systems in notes, never people, so reports stay honest.'
      }
    ],
    examples: [
      {
        title: 'Instrument an API with the three pillars',
        problem: 'A checkout slowdown is invisible: no one knows whether the API, the database, or the queue is at fault.',
        steps: [
          { label: 'Step 1: Log structured events', text: '```ts\nlogger.info({ reqId, route: "checkout", user: user.id, amount })\nlogger.error({ reqId, err, route: "checkout" })\n```\nRequest ids join every line of one checkout across services.' },
          { label: 'Step 2: Count behavior with metrics', text: '```ts\nmetrics.histogram("checkout.duration.ms", elapsed, { route: "checkout" })\nmetrics.increment("checkout.errors", { code: "PAYMENT_DECLINED" })\n```\nHistograms plus counters power latency alerts and error rate dashboards.' },
          { label: 'Step 3: Trace across tiers', text: '```ts\n// OpenTelemetry spans: edge -> api -> postgres -> queue\n// traceId propagates in headers; slow spans point at the database query\n```\nThe trace shows time per hop, ending debates about which tier is slow.' }
        ],
        result: 'Alerts fire on metrics, traces name the slow hop, and logs supply the forensic detail.'
      },
      {
        title: 'Gate a release on health and roll back cleanly',
        problem: 'A bad deploy serves errors for twenty minutes while the team debates whether to revert.',
        steps: [
          { label: 'Step 1: Expose the probes', text: '```ts\napp.get("/health/live", (req, res) => res.json({ ok: true }))\napp.get("/health/ready", async (req, res) => {\n  const db = await checkDb(2000)\n  const cache = await checkRedis(2000)\n  db && cache ? res.json({ ok: true }) : res.status(503).json({ ok: false })\n})\n```\nLiveness proves the process answers while readiness proves dependencies answer.' },
          { label: 'Step 2: Roll back on red', text: '```bash\nrailway deploy --rollback-to=stable\nvercel rollback stable\n```\nImmutable releases make reverting a single action instead of a rebuild.' },
          { label: 'Step 3: Record the runbook entry', text: '```ts\n// Runbook: checkout errors spiking\n// 1. Check error tracker for new issue types since release tag\n// 2. If older than ten minutes, roll back first, investigate second\n// 3. File prevention task: add contract test for the changed shape\n```\nThe next incident starts from a checklist instead of a blank page.' }
        ],
        result: 'Broken builds never join rotation, rollbacks take seconds, and each incident leaves the team stronger.'
      }
    ],
    keyTakeaways: [
      'Log events, count metrics, and trace requests across tiers for complementary answers.',
      'Group errors by fingerprint with release tags and actionable source mapped stacks.',
      'Split liveness from readiness and keep broken builds out of traffic rotation.',
      'Keep deploys immutable with backwards compatible migrations for instant rollback.',
      'Write runbooks with rollback criteria and close every incident with prevention tasks.'
    ],
    quiz: [
      {
        q: 'Which pillar answers where exactly did the time go for one slow request?',
        options: [
          'Logs',
          'Metrics',
          'Distributed traces across service boundaries',
          'Dashboards alone'
        ],
        answer: 2,
        explanation: 'Traces follow one request hop by hop with per span timing. Logs show events and metrics show aggregates, neither attributing one request path.'
      },
      {
        q: 'Why upload source maps with every release?',
        options: [
          'They make bundles smaller',
          'They translate minified production frames back to real files and lines',
          'They replace error tracking',
          'They speed up the app'
        ],
        answer: 1,
        explanation: 'Minified stacks are unreadable without maps. Release tagged maps turn production crashes into file plus line locations.'
      },
      {
        q: 'What is the difference between liveness and readiness?',
        options: [
          'They are synonyms',
          'Liveness proves the process responds while readiness proves dependencies are reachable',
          'Readiness replaces logging',
          'Liveness measures latency percentiles'
        ],
        answer: 1,
        explanation: 'A live process with a dead database must leave rotation. Separate probes let platforms route around unready instances without restarting healthy ones.'
      },
      {
        q: 'A release spikes errors for ten minutes with no clear cause. What now?',
        options: [
          'Keep debugging in production indefinitely',
          'Roll back to the last good release first, then investigate calmly',
          'Delete the error tracker alerts',
          'Ship another untested fix on top'
        ],
        answer: 1,
        explanation: 'The timer rule bounds user harm: revert restores service in seconds while investigation proceeds without outage pressure.'
      }
    ]
  },

  // ---------------------------------------------------------------- 20.5
  {
    sectionId: 'web-ch20-s5',
    readingTime: 10,
    intro: 'The capstone fuses the entire library into one shippable SaaS with a guarded AI feature. This section scopes a realistic slice, designs auth plus data plus API plus cache plus jobs, adds AI through a ground constrain eval review pipeline, and tells the tradeoff story. You will defend the system design like a staff engineer.',
    objectives: [
      'Scope a shippable SaaS slice with explicit non goals',
      'Design auth, data, API, cache, and jobs as one coherent system',
      'Ship one AI feature through a guarded pipeline with evaluation',
      'Narrate tradeoffs across cost, latency, and complexity'
    ],
    concepts: [
      {
        term: 'Scoping the SaaS slice',
        kind: 'method',
        statement: '**Scoping** names one billable `job` for one user type plus explicit **non goals** that wait for later releases. A study notes SaaS might ship workspaces plus notes plus sharing and defer **realtime** cursors plus offline sync deliberately. Small scope ships **monthly** while grand scope slips yearly, so constraints are the kindest feature.',
        detail: 'Write the scope as three shipped promises and five named non goals. Cut until the slice fits one database, one queue, and one AI feature.'
      },
      {
        term: 'Auth plus data plus API design',
        kind: 'method',
        statement: 'The system core combines session `auth` with workspace RBAC, relational `data` in Postgres, and a versioned REST `API` with cursor pagination. Workspaces scope every **query** by tenant id so no request can cross customer boundaries. Prisma models the **relations** while Redis sessions plus Zod contracts guard the edges.',
        detail: 'Enforce tenant scoping in a shared query helper rather than per route memory. Version the API from day one so mobile and web can upgrade independently.'
      },
      {
        term: 'Cache plus jobs for speed and scale',
        kind: 'method',
        statement: '**Cache aside** with `Redis` fronts hot reads like dashboards while write through **invalidation** keeps mutations honest. Slow work like exports and emails moves to **jobs** on a queue with retries plus idempotency keys. The request path stays **thin**: validate, enqueue, respond with accepted, then notify on completion.',
        detail: 'Set TTLs from staleness tolerance per view, not from vibes. Make every job re runnable so retries never double charge or double send.'
      },
      {
        term: 'Guarded AI feature pipeline',
        kind: 'method',
        statement: 'A **guarded AI feature** flows through ground plus constrain plus eval plus `review`: ground prompts in tenant data, constrain outputs with schemas, eval with scored **fixtures**, and require human review before sensitive **actions**. The model proposes while **code disposes**, because only validated function calls mutate state. Every generation logs its **citations** so answers stay auditable to source passages.',
        detail: 'Cap tokens plus timeouts per request and cache repeated summaries aggressively. Never let raw model text run queries or send messages without a schema gate.'
      },
      {
        term: 'Tradeoff narration',
        kind: 'insight',
        statement: '**Tradeoff narration** explains each choice as cost versus latency versus `complexity` with the road not taken named. Choosing Postgres full text over a dedicated **engine** trades recall quality for zero new infrastructure, which fits the slice and funds later migration. Reviewers trust systems whose **limits** are stated with migration triggers better than systems that claim no limits.',
        detail: 'Document each tradeoff with the metric that would reverse it. Revisit the list quarterly since growth invalidates yesterday bargains.'
      }
    ],
    examples: [
      {
        title: 'Design StudyNotes SaaS end to end',
        problem: 'Scope and design a notes SaaS for study groups with sharing, search, summaries, and exports.',
        steps: [
          { label: 'Step 1: Scope the slice', text: '```ts\n// Ship: workspaces, notes CRUD, sharing by role, search, AI summaries, PDF export\n// Non goals: realtime cursors, offline sync, mobile apps, custom domains\nconst scope = { billable: "shared study workspaces", users: "student groups" }\n```\nThree promises plus four named non goals fit the monthly ship window.' },
          { label: 'Step 2: Model auth, data, and API', text: '```ts\n// Prisma: Workspace -> Membership(role) -> Note; every query scoped by workspaceId\n// POST /v1/notes (Zod contract), GET /v1/notes?cursor=... (cursor pages)\n// Redis sessions; membership role checked by requirePermission("notes:write")\n```\nTenant scoping lives in one helper while RBAC from chapter seventeen guards mutations.' },
          { label: 'Step 3: Add cache and jobs', text: '```ts\n// Cache aside: dashboard reads setex with sixty second TTL, writes invalidate\n// Jobs: exportPdf job with idempotency key, retries with backoff, email on done\n```\nHot reads stay fast while exports and mail leave the request path thin.' }
        ],
        result: 'Auth, data, API, cache, and jobs form one coherent system with explicit boundaries and a shippable slice.'
      },
      {
        title: 'Ship the guarded AI summary feature',
        problem: 'Add summarize this workspace with citations without leaking other tenants data or hallucinating actions.',
        steps: [
          { label: 'Step 1: Ground then constrain', text: '```ts\nconst passages = await retrieveTenantPassages(workspaceId, query, 8)\nconst summary = await llm.complete({\n  system: "Summarize only the provided passages with citations.",\n  context: passages,\n  schema: summarySchema // { bullets: string[3..6], cites: docId[] }\n})\n```\nRetrieval grounds every claim in tenant scoped passages while the schema constrains the shape.' },
          { label: 'Step 2: Eval before release', text: '```ts\n// eval/fixtures: thirty workspaces with gold summaries\n// metrics: citation precision plus recall plus latency budget\n// gate: precision below threshold blocks the deploy in CI\n```\nScored fixtures turn vibes into a release gate the pipeline enforces.' },
          { label: 'Step 3: Review sensitive actions', text: '```ts\nif (summary.proposesShare) {\n  await reviewQueue.enqueue({ workspaceId, draft: summary, approver: "owner" })\n} else {\n  await publishSummary(workspaceId, summary)\n}\n```\nThe model drafts while humans approve anything that touches sharing or messaging.' }
        ],
        result: 'The AI feature ships cited, evaluated, bounded, and reviewed, with tradeoffs documented for the design review.'
      }
    ],
    keyTakeaways: [
      'Scope one billable job with named non goals so the slice ships monthly.',
      'Tenant scope every query and guard mutations with workspace RBAC plus contracts.',
      'Front hot reads with cache aside and move slow work to idempotent jobs.',
      'Route AI through ground, constrain, eval, and review with citations logged.',
      'Narrate every tradeoff as cost versus latency versus complexity with reversal triggers.'
    ],
    quiz: [
      {
        q: 'Why scope with explicit non goals?',
        options: [
          'To impress stakeholders with size',
          'Small shippable slices with deferred dreams fit monthly delivery while grand scopes slip',
          'Non goals increase infrastructure needs',
          'Scoping removes the need for testing'
        ],
        answer: 1,
        explanation: 'Constraints are the kindest feature: named non goals protect the timeline while preserving the ideas for later releases.'
      },
      {
        q: 'Where must tenant scoping live?',
        options: [
          'In each developer memory per route',
          'In one shared query helper so every query carries the workspace boundary',
          'Only in the frontend',
          'Nowhere, the database is single tenant'
        ],
        answer: 1,
        explanation: 'Central helpers make cross tenant reads structurally impossible rather than politely discouraged. Per route memory leaks under deadline pressure.'
      },
      {
        q: 'What are the four guarded AI stages in order?',
        options: [
          'Deploy, prompt, hope, retry',
          'Ground in tenant data, constrain with schemas, eval with fixtures, review before sensitive actions',
          'Train, fine tune, deploy, delete',
          'Cache, skip eval, auto send, ignore citations'
        ],
        answer: 1,
        explanation: 'Grounding bounds knowledge, schemas bound shape, evals bound quality, and review bounds consequences. Each stage catches what the last missed.'
      },
      {
        q: 'Why does the model propose while code disposes?',
        options: [
          'Models cannot generate fluent text',
          'Only validated function calls mutate state, so hallucinations cannot send or share',
          'Code is slower than models',
          'Disposal wastes tokens'
        ],
        answer: 1,
        explanation: 'The schema gate between generation and action converts hallucinations into rejected drafts. State changes require code validated calls, never raw text.'
      }
    ]
  }
]

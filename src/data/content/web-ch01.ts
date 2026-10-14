import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 1: How the Web Works & Setup
// Sections web-ch1-s1 through web-ch1-s5. Master study content.
// ============================================================================

export const webCh01Content: SectionContent[] = [
  // ---------------------------------------------------------------- web-ch1-s1
  {
    sectionId: 'web-ch1-s1',
    readingTime: 9,
    intro: 'Every page you open is the result of cooperation between clients and servers across the internet, mediated by names, addresses, and a transfer protocol. This section traces that journey from the physical internet to DNS resolution, HTTP message exchange, and the anatomy of a URL. Master these ideas and the rest of web development has a place to stand.',
    objectives: [
      'Distinguish clients from servers and explain what the internet provides beneath the web',
      'Trace DNS resolution from a hostname to an IP address through resolvers and records',
      'Describe the parts of an HTTP request and response including methods and status codes',
      'Dissect a URL into scheme, host, port, path, query, and fragment'
    ],
    concepts: [
      {
        term: 'Clients, servers, and the internet',
        kind: 'definition',
        statement: 'The **internet** is a global network of networks that routes packets between machines using the `IP` protocol, while the **web** is an application that runs on top of it using `HTTP`. A **client** such as a browser initiates requests, and a **server** listens for those requests and returns responses. The same machine can play both roles at different times, but the request always flows from client to server.',
        detail: 'Packets travel through routers and ISPs independently and are reassembled at the destination, which is why the web survives individual link failures.'
      },
      {
        term: 'DNS resolution',
        kind: 'method',
        statement: 'The **Domain Name System** translates human hostnames like `example.com` into numeric `IP addresses` that routers understand. Your browser asks a **recursive resolver**, which walks from **root** to **TLD** to **authoritative** nameservers, following `A` and `AAAA` records to the answer. Successful answers are **cached** at each level with a `TTL` so repeat visits skip the full walk.',
        detail: 'DNS caching is why a first visit can feel slower than later ones, and why DNS changes can take time to propagate worldwide.'
      },
      {
        term: 'HTTP requests and responses',
        kind: 'definition',
        statement: 'Every web exchange is a **request** carrying a `method`, a `path`, `headers`, and an optional `body`, answered by a **response** carrying a `status code`, `headers`, and a `body`. Common methods include `GET` for retrieval, `POST` for creation, and `PUT`, `PATCH`, and `DELETE` for updates and removal. Status codes are grouped by class, with `2xx` for success, `3xx` for redirection, `4xx` for client errors, and `5xx` for server errors.',
        detail: 'HTTP itself is stateless, so features like logins are layered on with cookies, tokens, and sessions that the client resends on every request.'
      },
      {
        term: 'HTTPS and TLS encryption',
        kind: 'insight',
        statement: 'Plain `HTTP` sends headers and bodies readable by anyone on the path, so the modern web uses **HTTPS**, which wraps HTTP inside a `TLS` encrypted tunnel. During the **TLS handshake** the server proves its identity with a **certificate**, the two sides agree on keys, and everything after is **confidential and tamper-evident**. Browsers warn against plain HTTP sites because logins and cookies sent over them can be intercepted directly.',
        detail: 'Certificates are issued by trusted certificate authorities and are validated against the hostname, which is why a name mismatch triggers a full-page warning.'
      },
      {
        term: 'Anatomy of a URL',
        kind: 'notation',
        statement: 'A **URL** names one resource with the shape `scheme://host:port/path?query#fragment`, for example `https://example.com:443/docs/search?q=dns#results`. The `scheme` selects the protocol, the `host` names the server, and the optional `port` selects the service on that host. The `path` locates the resource, the `query` carries `key=value` parameters, and the `fragment` scrolls to a section without ever being sent to the server.',
        detail: 'Query strings are visible in history and logs, so secrets belong in headers or bodies rather than in the URL.'
      }
    ],
    examples: [
      {
        title: 'Trace a first visit to a site',
        problem: 'Follow what happens when you type https://example.com/articles into a fresh browser and press Enter.',
        steps: [
          { label: 'Step 1: Resolve the name', text: 'The browser asks its configured resolver for `example.com`. The resolver walks root to TLD to authoritative servers, receives an `A` record with the server IP, and caches it under its `TTL`.' },
          { label: 'Step 2: Open a secure channel', text: '```bash\n# conceptually, the browser now does:\n# 1. TCP connect to the IP on port 443\n# 2. TLS handshake, verify certificate for example.com\n# 3. Send the HTTP request inside the encrypted tunnel\n```\nPort `443` is the default for HTTPS, so no port appears in the typed URL, and the certificate check ties the encryption to the hostname.' },
          { label: 'Step 3: Request and response', text: '```html\n<!-- the request line and headers the browser sends --> <!-- GET /articles HTTP/1.1 --> <!-- Host: example.com --> <!-- the server answers: HTTP/1.1 200 OK + HTML body -->\n```\nThe server returns `200 OK` with an HTML body, and the browser renders it while fetching subresources referenced by the markup.' }
        ],
        result: 'One typed address triggers DNS resolution, a TCP plus TLS connection, one HTTP exchange, and then a cascade of follow-up requests driven by the returned HTML.'
      },
      {
        title: 'Dissect a URL with query and fragment',
        problem: 'Break https://shop.example.com:443/search?q=keyboard&sort=price#top into its six parts and state what each part does.',
        steps: [
          { label: 'Step 1: Scheme, host, and port', text: '`https` selects encrypted HTTP, `shop.example.com` is the DNS hostname, and `443` is the explicit default HTTPS port. Removing the default port would leave the meaning unchanged.' },
          { label: 'Step 2: Path and query', text: '`/search` routes to the search handler on the server, while `q=keyboard&sort=price` passes two parameters the handler reads. The server may return different HTML or JSON for different query values.' },
          { label: 'Step 3: Fragment', text: '```html\n<!-- the browser never sends #top to the server -->\n<section id="top">Deals of the day</section>\n```\nAfter the response arrives, the browser scrolls to the element with `id="top"` locally, with no second request.' }
        ],
        result: 'Scheme, host, and port locate the service, path and query select and parameterize the resource, and the fragment is purely a client-side scroll target.'
      }
    ],
    keyTakeaways: [
      'The internet moves packets by IP address while the web exchanges resources by HTTP between clients and servers.',
      'DNS resolves hostnames through root, TLD, and authoritative servers, with TTL-based caching at every level.',
      'HTTP pairs a method plus path plus headers with a status code plus headers plus body on every exchange.',
      'HTTPS wraps HTTP in TLS so identities are verified and traffic is confidential and tamper-evident.',
      'URLs split into scheme, host, port, path, query, and fragment, and only the fragment stays entirely client-side.'
    ],
    quiz: [
      {
        q: 'Which order does a recursive DNS resolver follow to resolve a new hostname?',
        options: ['Authoritative, then TLD, then root', 'Root, then TLD, then authoritative', 'TLD, then root, then authoritative', 'Cache, then authoritative, then root'],
        answer: 1,
        explanation: 'The resolver walks down the hierarchy from root to TLD to the authoritative server for the domain, caching the answer for repeat visits.'
      },
      {
        q: 'A server returns status 404. What does that mean?',
        options: ['Success with no body', 'Redirect to a new location', 'Client error: the requested resource was not found', 'Server error: the handler crashed'],
        answer: 2,
        explanation: 'Codes in the 4xx range report client-side errors, and 404 specifically means the path did not match any known resource.'
      },
      {
        q: 'Which part of a URL is never sent to the server?',
        options: ['The path', 'The query string', 'The fragment after #', 'The hostname'],
        answer: 2,
        explanation: 'The fragment is resolved locally by the browser to scroll to an element id, so it never appears in the HTTP request.'
      },
      {
        q: 'Why does HTTPS protect a login form while plain HTTP does not?',
        options: ['HTTPS compresses the password so it cannot be read', 'HTTPS wraps the exchange in a TLS tunnel with a verified certificate so traffic is encrypted', 'HTTPS stores passwords on the server instead of the client', 'HTTPS blocks all third-party scripts automatically'],
        answer: 1,
        explanation: 'TLS negotiates encryption after verifying the server certificate, making headers and bodies confidential and tamper-evident in transit.'
      },
      // Placement-pattern: DNS caching and TTL behavior (original)
      {
        q: "A site first visit takes noticeably longer to start than repeat visits, and after the team moves to new hosting addresses some users keep reaching the old server for a while. Which mechanism explains both observations?",
        options: ["TCP slow start delaying every single connection", "DNS answers cached at resolvers for their TTL: the first lookup walks the hierarchy while repeats reuse the stored record, and stale copies persist until the TTL lapses", "Browsers re-download the page markup only on the first paint", "TLS certificates expiring between one visit and the next"],
        answer: 1,
        explanation: "Step 1: The data given is a slow first resolution, fast repeats, and lingering old addresses after a hosting move. Step 2: The governing rule is resolver behavior: a recursive resolver walks from root to TLD to authoritative servers for A and AAAA records, then caches the answer at each level for its TTL. Step 3: Tracing the three cases, the first visit pays the full walk, repeats reuse the cached record, and the address change stays invisible to holders of unexpired copies until their TTL lapses. Step 4: The distractors fail because transport startup affects every connection equally, markup fetching is unrelated to name resolution, and certificate lifetimes operate on a different timescale. Step 5: Therefore TTL-bounded DNS caching explains both the speedup and the slow migration."
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch1-s2
  {
    sectionId: 'web-ch1-s2',
    readingTime: 8,
    intro: 'A browser is an operating system for web pages: it fetches resources, parses HTML and CSS, runs JavaScript, and paints pixels many times per second. Understanding the critical rendering path explains why some pages feel instant and others stutter. Browser DevTools then let you watch every step and fix what is slow or broken.',
    objectives: [
      'List the stages of the critical rendering path from navigation to paint',
      'Explain how the DOM, CSSOM, render tree, layout, and paint relate',
      'Use the Elements, Console, and Network panels of DevTools for inspection',
      'Diagnose a slow or broken page by reading status codes, timing, and console errors'
    ],
    concepts: [
      {
        term: 'Critical rendering path',
        kind: 'method',
        statement: 'Loading a page follows a **pipeline**: navigation and DNS plus TLS, then fetching `HTML`, then parsing it into the `DOM` while fetching `CSS` into the `CSSOM`. The browser combines both trees into the **render tree**, runs **layout** to compute geometry, then **paints** pixels and **composites** layers. JavaScript can pause parsing or invalidate layout, which is why script placement and size dominate load performance.',
        detail: 'Anything that delays the first three stages delays everything after, so fast HTML delivery and small stylesheets matter most.'
      },
      {
        term: 'DOM, CSSOM, and the render tree',
        kind: 'definition',
        statement: 'The **DOM** is the parsed tree of `HTML elements`, the **CSSOM** is the parsed map of `style rules`, and the **render tree** contains only the boxes that will actually display. Nodes with `display: none` enter the DOM but are excluded from the render tree, while `visibility: hidden` nodes stay in the tree but paint nothing. DevTools shows the live DOM, which scripts may have already changed from the original source.',
        detail: 'View Source shows the bytes from the server while the Elements panel shows the live tree after parsing and scripting.'
      },
      {
        term: 'Layout, paint, and composite',
        kind: 'definition',
        statement: 'In the **layout** step the browser computes the `width`, `height`, and position of every render-tree box from CSS. In the **paint** step it fills in `color`, `borders`, `shadows`, and text, and in the **composite** step it draws cached `layers` in order. Animating `transform` and `opacity` is cheap because it reuses painted layers, while animating `width` or `top` forces fresh layout and paint.',
        detail: 'Jank usually means scripts or styles keep invalidating layout instead of staying on compositor-friendly properties.'
      },
      {
        term: 'DevTools panels',
        kind: 'method',
        statement: 'Browser **DevTools** expose the pipeline: the `Elements` panel inspects and edits live HTML and CSS, the `Console` runs `JavaScript` and surfaces errors, and the `Network` panel lists every request with its `status`, `size`, and `timing`. The `Performance` and `Lighthouse` tabs record frames and score loading health. Learning these four panels covers the large majority of daily debugging.',
        detail: 'Edits made in the Elements panel apply instantly but vanish on reload, which makes them ideal for experiments before touching source files.'
      },
      {
        term: 'Blocking resources and parser behavior',
        kind: 'insight',
        statement: 'A plain `<script>` tag **blocks parsing** until it downloads and executes, while `async` lets parsing continue and runs the script when ready, and `defer` waits until parsing finishes in order. Stylesheets block rendering until loaded because the browser refuses to paint without the `CSSOM`. Placing scripts at the end of `body` or marking them `defer` keeps first paint early without losing functionality.',
        detail: 'Render-blocking chains are the most common cause of blank-screen delays on otherwise simple pages.'
      }
    ],
    examples: [
      {
        title: 'Read a Network waterfall',
        problem: 'A page loads slowly. Use the Network panel to decide whether HTML, CSS, or a script is the bottleneck.',
        steps: [
          { label: 'Step 1: Open and reload', text: 'Open DevTools with `F12` or `Cmd+Option+I`, select the `Network` panel, enable `Disable cache`, and reload. Each row is one request with status, size, and a timing bar.' },
          { label: 'Step 2: Read the waterfall', text: 'A long dark bar before the first byte means slow `TTFB` on the server or network, while a long light bar means a large download. A script row that starts early but ends late is blocking everything below it.' },
          { label: 'Step 3: Act on the evidence', text: '```html\n<!-- before: blocks parsing until analytics.js arrives -->\n<script src="analytics.js"></script>\n<!-- after: parsing continues, script runs when ready -->\n<script src="analytics.js" defer></script>\n```\nAdding `defer` or moving the tag lets the render tree build earlier while preserving execution order.' }
        ],
        result: 'The waterfall turns a vague slow feeling into a named culprit and a one-line fix that can be verified by reloading and comparing timings.'
      },
      {
        title: 'Fix a broken style with the Elements panel',
        problem: 'A button should be blue but renders gray. Find the losing rule without guessing.',
        steps: [
          { label: 'Step 1: Inspect the node', text: 'Right-click the button and choose Inspect to jump to it in the `Elements` panel. The `Styles` pane lists every matching rule with losing declarations struck through.' },
          { label: 'Step 2: Toggle and edit live', text: 'Uncheck candidate declarations and edit values inline until the button turns blue. The page updates instantly because you are editing the live `CSSOM`.' },
          { label: 'Step 3: Check the Console', text: '```js\n// run in the Console to confirm which rule wins\nconst btn = document.querySelector(`button.primary`);\ngetComputedStyle(btn).backgroundColor;\n```\n`getComputedStyle` reports the winning value after the cascade, confirming the fix before it is copied back into source.' }
        ],
        result: 'Inspection replaces guesswork: the struck-through rules show exactly which selector lost, and the live edit becomes the patch.'
      }
    ],
    keyTakeaways: [
      'Navigation, HTML parsing, CSSOM building, render tree, layout, paint, and composite form the rendering pipeline.',
      'The DOM holds all parsed nodes while the render tree holds only boxes that will display.',
      'Animating transform and opacity stays on the compositor while width and position force costly relayout.',
      'DevTools Elements, Console, Network, and Performance panels expose each pipeline stage.',
      'Plain scripts block parsing while async and defer keep first paint early.'
    ],
    quiz: [
      {
        q: 'Which sequence correctly orders the rendering stages?',
        options: ['Paint, layout, DOM, composite', 'DOM and CSSOM, render tree, layout, paint, composite', 'Composite, render tree, DOM, paint', 'Layout, DOM, CSSOM, composite, paint'],
        answer: 1,
        explanation: 'Parsing produces the DOM and CSSOM, which combine into the render tree, and only then do layout, paint, and composite compute and draw pixels.'
      },
      {
        q: 'An element has display: none. Where does it appear?',
        options: ['In the DOM and the render tree', 'In the DOM but not the render tree', 'In neither tree', 'Only in the CSSOM'],
        answer: 1,
        explanation: 'The node still parses into the DOM but generates no box, so the render tree excludes it entirely.'
      },
      {
        q: 'Why is animating width slower than animating transform?',
        options: ['Width cannot be animated at all', 'Width changes force layout and paint while transform reuses composited layers', 'Transform runs on the server', 'Width animations disable the GPU'],
        answer: 1,
        explanation: 'Geometry changes invalidate layout for surrounding boxes, while transform and opacity only move already-painted layers.'
      },
      {
        q: 'What does adding defer to a classic script tag do?',
        options: ['It prevents the script from running', 'It downloads in parallel and executes after HTML parsing in order', 'It inlines the script into the HTML', 'It moves execution to a web worker'],
        answer: 1,
        explanation: 'Deferred scripts never block parsing and still execute in document order once the DOM is complete.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch1-s3
  {
    sectionId: 'web-ch1-s3',
    readingTime: 8,
    intro: 'Professional web work rests on three tools: a code editor for writing, a terminal for running, and a package manager for reusing the work of others. This section sets up VS Code, teaches the handful of shell commands behind every tutorial, and explains how Node, npm, and package.json fit together. The goal is a project folder you can run, install into, and script.',
    objectives: [
      'Configure VS Code with extensions, settings, and formatting for web files',
      'Navigate, create, and manage files from the terminal with core shell commands',
      'Explain the roles of Node, npm, npx, and package.json in a web project',
      'Add, run, and script dependencies in a fresh project folder'
    ],
    concepts: [
      {
        term: 'VS Code as a web bench',
        kind: 'method',
        statement: 'Visual Studio Code is a **file-first editor**: it opens a `folder`, previews a `live server`, and extends through **extensions** for languages, linting, and formatting. The **command palette** under `Ctrl+Shift+P` runs every command by name, and `settings.json` pins choices like `tab size` and `format on save`. A shared extension list keeps a team editing identically.',
        detail: 'Format-on-save with a single formatter ends most style debates before they start.'
      },
      {
        term: 'Terminal essentials',
        kind: 'method',
        statement: 'The **terminal** runs text commands against the file system, with the **shell** interpreting each line and the **working directory** deciding what relative paths mean. Core verbs include `pwd` to show where you are, `ls` to list, `cd` to move, `mkdir` and `touch` to create, and `rm` and `mv` to remove and rename. Flags like `ls -la` modify behavior, and the `up arrow` plus `Tab` recall and complete earlier commands.',
        detail: 'Every deploy, build, and git command in later chapters is just these same shell mechanics aimed at a new program.'
      },
      {
        term: 'Node, npm, and npx',
        kind: 'definition',
        statement: 'Node.js is a **JavaScript runtime** outside the browser built on the `V8` engine, and **npm** is its **package registry plus installer**. Running `npm install <pkg>` records the dependency in `package.json` and downloads it into `node_modules`, while `npx <pkg>` executes a package binary without a global install. Version numbers follow **semver** like `1.4.2`, where each position signals breaking, feature, or fix changes.',
        detail: 'Prefer npx for one-off tools and local installs for project tools so every machine builds with the same versions.'
      },
      {
        term: 'package.json and scripts',
        kind: 'notation',
        statement: 'The `package.json` file is the **manifest** of a project: its `name`, `version`, `dependencies`, `devDependencies`, and `scripts` table. A script like `"dev": "vite --port 3000"` turns `npm run dev` into a memorable alias for a long command. The `package-lock.json` file then **pins exact versions** so installs reproduce byte for byte on other machines.',
        detail: 'Commit the manifest and the lockfile but never hand-edit the lockfile or commit node_modules.'
      },
      {
        term: 'Anatomy of a web project',
        kind: 'definition',
        statement: 'A minimal project pairs an `index.html` entry page with `styles.css` and `app.js` assets plus `package.json` for tooling. A `.gitignore` file excludes generated output like `node_modules` and `dist` from version control. The `README.md` documents how to `install`, `run`, and `build`, so a stranger can start the project with three commands.',
        detail: 'Small, conventional layouts scale because every tool in the ecosystem already expects these filenames.'
      }
    ],
    examples: [
      {
        title: 'Start a project from zero',
        problem: 'Create a folder, turn it into an npm project, and serve a page with a dev script.',
        steps: [
          { label: 'Step 1: Scaffold the files', text: '```bash\nmkdir hello-web && cd hello-web\nnpm init -y\ntouch index.html styles.css app.js\nls -la\n```\n`npm init -y` writes a default `package.json`, and `ls -la` confirms the new files including hidden ones.' },
          { label: 'Step 2: Add a script', text: 'Add a `scripts` entry that serves the folder, then run it with `npm run dev`. The script is now the documented way to start the project on any machine.' },
          { label: 'Step 3: Verify in the browser', text: 'Open the served address, confirm the page loads, and inspect it with DevTools. The loop of edit, save, and reload is now in place.' }
        ],
        result: 'A reproducible project exists: anyone cloning it runs install plus the dev script and sees the same page.'
      },
      {
        title: 'Install and use a library',
        problem: 'Add a date library to the project and use it from a page script without a global install.',
        steps: [
          { label: 'Step 1: Install the package', text: '```bash\nnpm install date-fns\nnpm list date-fns\n```\nThe dependency lands in `dependencies` and the exact tree is pinned in `package-lock.json`.' },
          { label: 'Step 2: Run a one-off tool', text: '```bash\nnpx prettier --write .\n```\n`npx` fetches and runs the formatter without polluting the global environment, formatting every web file in place.' },
          { label: 'Step 3: Import from app.js', text: '```js\nimport { format } from `date-fns`;\nconsole.log(format(new Date(), `yyyy-MM-dd`));\n```\nBecause the package is local, bundlers and browsers resolve the same version recorded in the manifest.' }
        ],
        result: 'The library is a recorded, pinned, local dependency rather than a mystery global, so builds stay repeatable.'
      }
    ],
    keyTakeaways: [
      'VS Code plus the command palette, extensions, and format-on-save form a consistent web bench.',
      'A few shell verbs plus flags, history, and completion cover most daily terminal work.',
      'Node runs JavaScript outside the browser while npm installs and npx executes packages.',
      'package.json declares metadata, dependencies, and scripts while the lockfile pins exact versions.',
      'Conventional files plus a README let any newcomer install, run, and build the project.'
    ],
    quiz: [
      {
        q: 'What is the difference between npm and npx?',
        options: ['npm edits images while npx edits video', 'npm installs packages into a project while npx executes package binaries without a global install', 'They are identical aliases', 'npx only works inside browsers'],
        answer: 1,
        explanation: 'Install with npm so the dependency is recorded, and execute one-off or local binaries with npx to avoid global installs.'
      },
      {
        q: 'Which files should be committed to version control?',
        options: ['package.json and package-lock.json', 'node_modules', 'dist build output', 'Editor backup files'],
        answer: 0,
        explanation: 'The manifest and lockfile reproduce the exact tree, while generated folders and outputs are rebuilt and stay ignored.'
      },
      {
        q: 'What does npm run dev do?',
        options: ['It always starts a production server', 'It runs the dev entry from the scripts table of package.json', 'It installs devDependencies', 'It opens DevTools'],
        answer: 1,
        explanation: 'Scripts map short names to full commands, so dev can mean a Vite server in one project and something else in another.'
      },
      {
        q: 'Which terminal command shows the current working directory?',
        options: ['ls', 'cd', 'pwd', 'touch'],
        answer: 2,
        explanation: 'pwd prints the working directory that relative paths resolve against, while ls lists and cd changes it.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch1-s4
  {
    sectionId: 'web-ch1-s4',
    readingTime: 9,
    intro: 'Git records the history of your files so experiments are cheap and mistakes are reversible, while GitHub hosts that history for collaboration. This section builds the mental model of repositories, commits, and branches, then walks the GitHub Flow teams use daily. You will finish able to branch, commit, push, and open a pull request with confidence.',
    objectives: [
      'Explain repositories, working trees, staging, commits, and remotes',
      'Create branches, switch between them, and merge work back to main',
      'Push, pull, and clone to synchronize local and GitHub repositories',
      'Open and review a pull request following the GitHub Flow'
    ],
    concepts: [
      {
        term: 'Repositories, commits, and history',
        kind: 'definition',
        statement: 'A **repository** is a folder plus a `.git` database that records every **commit**, where each commit is a **snapshot** with a message, an author, and a parent pointer. The **working tree** holds your editable files, the **staging area** holds the exact set bound for the next snapshot, and `HEAD` names the currently checked-out commit. History is therefore a linked chain you can inspect, rewind, and share.',
        detail: 'Because commits store snapshots rather than diffs, checking out any point in history restores the complete tree instantly.'
      },
      {
        term: 'Branching and merging',
        kind: 'method',
        statement: 'A **branch** is a movable pointer to one commit, so creating a branch with `git branch` or `git switch -c` costs almost nothing. Commits advance only the current branch, and `git merge` joins two lines of history by creating a **merge commit** or fast-forwarding the pointer. **Merge conflicts** mark overlapping edits with `<<<<<<<` fences for a human to resolve and commit.',
        detail: 'Short-lived feature branches keep main releasable because half-finished work never lands there directly.'
      },
      {
        term: 'Remotes, push, pull, and clone',
        kind: 'method',
        statement: 'A **remote** like `origin` is a named URL for a hosted copy, and `git clone` copies a whole repository including history from that URL. `git push` publishes local commits upward, while `git pull` fetches remote commits and merges them into the current branch. The `main` branch on GitHub is the shared source of truth that every teammate synchronizes against.',
        detail: 'Push and pull are explicit so developers review what leaves and enters their machine instead of syncing silently.'
      },
      {
        term: 'GitHub Flow and pull requests',
        kind: 'method',
        statement: 'The **GitHub Flow** is a five-step loop: **branch** from `main`, **commit** small steps, **push** the branch, open a **pull request**, then **merge** after review and checks. A **pull request** is a proposal page showing `diffs`, `checks`, and `comments` where teammates request changes. Merging deletes the topic branch and advances `main` by exactly the reviewed commits.',
        detail: 'Small pull requests with green checks merge quickly, while giant ones stall because no reviewer can hold the whole diff in mind.'
      },
      {
        term: 'Good commits and .gitignore',
        kind: 'insight',
        statement: 'A good commit is **atomic** with an **imperative message** like `Add hero image`, so `git log` reads as instructions already carried out. The `.gitignore` file keeps generated paths such as `node_modules` and `.env` out of history before they ever get staged. Secrets committed by accident must be **rotated**, not just deleted, because history preserves every version forever.',
        detail: 'Atomic commits make reverts safe: one revert undoes one idea instead of tangling several features together.'
      }
    ],
    examples: [
      {
        title: 'Ship a feature with GitHub Flow',
        problem: 'Add a footer to the site on a branch and land it through a reviewed pull request.',
        steps: [
          { label: 'Step 1: Branch and commit', text: '```bash\ngit switch -c add-footer\ngit add index.html\ngit commit -m "Add site footer"\ngit log --oneline -3\n```\nThe branch pointer carries the new snapshot while `main` stays untouched and releasable.' },
          { label: 'Step 2: Push and open the request', text: 'Push with `git push -u origin add-footer` and open a pull request against `main`. The diff, checks, and description give reviewers everything in one page.' },
          { label: 'Step 3: Merge and clean up', text: 'After approval, merge the request on GitHub, then run `git switch main` and `git pull` locally. Deleting the topic branch leaves history with one clean merge.' }
        ],
        result: 'The footer reaches main only as a reviewed, tested, atomic unit, and the branch that carried it disappears.'
      },
      {
        title: 'Resolve a merge conflict',
        problem: 'Main and your branch both edited the same line of the page title. Merge without losing either change.',
        steps: [
          { label: 'Step 1: Attempt the merge', text: 'Run `git merge main` on your branch and read the conflict notice naming the file. Git pauses the merge instead of guessing which edit should win.' },
          { label: 'Step 2: Edit the fences', text: '```html\n<!-- Git writes both versions into the file -->\n<h1>StudyVerse</h1>\n<!-- keep the best wording, delete the fence lines, save -->\n```\nOpen the file, choose or combine the wording, and remove every fence marker so the markup parses again.' },
          { label: 'Step 3: Finish the merge', text: 'Stage with `git add` and commit to complete the merge, then verify with `git log --oneline --graph -5`. The graph now shows the join explicitly.' }
        ],
        result: 'The conflict becomes a deliberate human decision recorded as a merge commit rather than a silent overwrite.'
      }
    ],
    keyTakeaways: [
      'Repositories store snapshots as commits chained through parents with HEAD marking checkout.',
      'Branches are cheap pointers and merges join lines of history with explicit merge commits.',
      'Clone, push, and pull move history between local machines and the origin remote.',
      'GitHub Flow ships every change as a reviewed pull request merged into main.',
      'Atomic messages plus gitignore keep history readable and free of generated files and secrets.'
    ],
    quiz: [
      {
        q: 'What does the staging area do?',
        options: ['It deploys code to production', 'It holds the exact set of changes bound for the next commit', 'It deletes old branches', 'It hosts the remote repository'],
        answer: 1,
        explanation: 'Staging lets a commit contain precisely the reviewed files rather than everything touched in the working tree.'
      },
      {
        q: 'A merge reports a conflict. What should you do?',
        options: ['Delete the repository and clone again', 'Open the marked files, choose the correct content, remove fences, stage, and commit', 'Force push main immediately', 'Ignore the fences and commit anyway'],
        answer: 1,
        explanation: 'Conflicts pause the merge so a human can reconcile overlapping edits and record the decision as the merge commit.'
      },
      {
        q: 'Which sequence matches the GitHub Flow?',
        options: ['Merge, branch, push, commit', 'Branch, commit, push, pull request, merge after review', 'Push, clone, delete main', 'Commit directly to main and skip review'],
        answer: 1,
        explanation: 'Work happens on a topic branch that is pushed and proposed as a pull request before reviewed code reaches main.'
      },
      {
        q: 'A secret was committed by accident. What is the correct response?',
        options: ['Delete the line in a new commit and move on', 'Rotate the secret and purge it from history because old commits still contain it', 'Rename the repository', 'Add the secret to gitignore only'],
        answer: 1,
        explanation: 'History preserves every version, so the exposed value must be revoked even after the file is cleaned.'
      }
    ]
  },
  // ---------------------------------------------------------------- web-ch1-s5
  {
    sectionId: 'web-ch1-s5',
    readingTime: 8,
    intro: 'Some pages are fixed files while others are assembled per visitor, and knowing which you need decides your hosting and tooling. This section contrasts frontend and backend roles with static and dynamic rendering, surveys hosting options, and ends with your first deploy. You will publish a static page and learn how to update it safely.',
    objectives: [
      'Contrast frontend and backend responsibilities in a web application',
      'Compare static files, server rendering, and client rendering with tradeoffs',
      'Choose a host for a static site and explain domains, DNS, and TLS setup',
      'Deploy a static page and publish an update through a repeatable flow'
    ],
    concepts: [
      {
        term: 'Frontend versus backend',
        kind: 'definition',
        statement: 'The **frontend** is the code that runs in the browser — `HTML`, `CSS`, and `JavaScript` — and owns layout, interaction, and presentation. The **backend** is code that runs on servers, owning `databases`, `authentication`, and business rules behind an `API`. The two meet over HTTP, with the frontend requesting data and the backend answering with guarded, validated results.',
        detail: 'Keeping secrets and validation on the backend matters because every byte sent to the browser can be read and replayed.'
      },
      {
        term: 'Static sites',
        kind: 'definition',
        statement: 'A **static site** is a set of **prebuilt files** served exactly as stored, with no per-request computation. Because responses are identical for everyone, they cache on **CDNs** at the edge and load quickly under traffic spikes. Blogs, docs, and portfolios stay static until a page genuinely needs per-user or per-request data.',
        detail: 'Static does not mean motionless: shipped JavaScript can still fetch data and animate after the fixed files arrive.'
      },
      {
        term: 'Dynamic rendering: SSR versus CSR',
        kind: 'definition',
        statement: '**Server-side rendering** builds `HTML` per request on the server, so first paint arrives with content but every visit costs compute. **Client-side rendering** ships a small shell plus `JavaScript` that fetches data and builds the DOM in the browser, which delays first content but scales serving to static edges. Many frameworks **hybridize**, prerendering shared pages statically while server rendering only personalized routes.',
        detail: 'Choose per route rather than per project: marketing pages prerender well while dashboards favor client fetching behind a login.'
      },
      {
        term: 'Hosting, domains, and TLS',
        kind: 'method',
        statement: 'Static hosts like `GitHub Pages`, `Netlify`, and `Vercel` serve a folder globally and attach free `TLS certificates` automatically. Pointing a custom domain means adding a `DNS record` such as a `CNAME` or `A` record from your registrar to the host. **Propagation** plus certificate issuance can take minutes to hours, after which both the bare and `www` names should redirect to one canonical HTTPS URL.',
        detail: 'One canonical domain with forced HTTPS avoids duplicate-content and mixed-content faults from the start.'
      },
      {
        term: 'Deploy pipeline for a static page',
        kind: 'method',
        statement: 'A repeatable deploy is **commit**, **push**, and **publish**: push `main` and let the host **build** and invalidate its `cache` automatically. Preview deploys give every pull request its own `URL` for review before merging to production. Rolling back is checking out or reverting to the last good commit and pushing again, which restores the previous files exactly.',
        detail: 'If a deploy is not reproducible from a clean clone plus install plus build, it is a ritual rather than a pipeline.'
      }
    ],
    examples: [
      {
        title: 'Decide static versus dynamic',
        problem: 'Two projects arrive: a conference site and a team task board. Choose the rendering approach for each.',
        steps: [
          { label: 'Step 1: List data needs', text: 'The conference site shows the same schedule to everyone, while the board shows per-user tasks behind a login. Shared content favors prebuilt `HTML`, and per-user content needs an `API` plus identity.' },
          { label: 'Step 2: Choose per route', text: 'Ship the conference site as a **static** build on a CDN for speed and cheap scale. Build the board with **client rendering** against an authenticated API, prerendering only the public marketing route.' },
          { label: 'Step 3: Note the escape hatch', text: '```html\n<!-- static shell that hydrates with live data -->\n<main id="app">Loading schedule…</main>\n<script src="app.js" defer></script>\n```\nEven the static choice keeps a `script` slot so later dynamic widgets can mount without replatforming.' }
        ],
        result: 'Same toolbox, different split: static where content is shared and dynamic where data is personal.'
      },
      {
        title: 'Deploy a first page',
        problem: 'Publish a local index.html to a public HTTPS URL and then ship an update.',
        steps: [
          { label: 'Step 1: Prepare the folder', text: 'Confirm `index.html` loads locally with no absolute file paths and that only source files are present. A clean folder prevents broken asset links after upload.' },
          { label: 'Step 2: Publish', text: '```bash\n git init\n git add index.html styles.css app.js\n git commit -m "Launch first static page"\n git push -u origin main\n```\nPushing `main` triggers the host build, which publishes the folder to a public address and provisions its certificate.' },
          { label: 'Step 3: Update safely', text: 'Edit locally, verify in the browser, commit, and push again, then check the live URL and roll back with a revert if anything looks wrong. Every release is now one reviewed push.' }
        ],
        result: 'The page is live on HTTPS with a repeatable update path: edit, commit, push, and verify.'
      }
    ],
    keyTakeaways: [
      'Frontend owns presentation in the browser while backend owns data, identity, and rules on servers.',
      'Static files cache at the edge and scale cheaply because every visitor gets identical bytes.',
      'Server rendering paints content early at compute cost while client rendering fetches and builds late.',
      'Custom domains need a DNS record plus automatic TLS with one canonical HTTPS redirect.',
      'Repeatable deploys are commit plus push plus automatic build, with previews and reverts built in.'
    ],
    quiz: [
      {
        q: 'When is a static site the best choice?',
        options: ['Per-user dashboards behind logins', 'Content identical for every visitor such as docs or event pages', 'Apps needing per-request database writes on every view', 'Realtime collaborative editors'],
        answer: 1,
        explanation: 'Identical bytes for everyone cache perfectly on CDNs, which is exactly the static strength.'
      },
      {
        q: 'What distinguishes server-side rendering from client-side rendering?',
        options: ['SSR builds HTML per request on the server while CSR builds the DOM in the browser from fetched data', 'They are two names for the same technique', 'SSR cannot use JavaScript', 'CSR cannot call APIs'],
        answer: 0,
        explanation: 'The split is where HTML is assembled: on the server before delivery versus in the browser after fetching.'
      },
      {
        q: 'What does pointing a custom domain at a static host require?',
        options: ['Only renaming index.html', 'A DNS record toward the host plus TLS issuance with one canonical HTTPS URL', 'Deleting package.json', 'Disabling HTTPS'],
        answer: 1,
        explanation: 'DNS routes the name to the host, which then provisions and renews the certificate for that name.'
      },
      {
        q: 'How should a broken static deploy be rolled back?',
        options: ['Edit files directly on the CDN', 'Revert to the last good commit and push so the host rebuilds that snapshot', 'Delete the repository', 'Wait for caches to expire randomly'],
        answer: 1,
        explanation: 'Because deploys track git, restoring the previous snapshot and pushing republishes the known-good files.'
      }
    ]
  }
]

import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 19
// Performance, Accessibility, SEO and Web APIs (Sections 19.1 – 19.5)
// Master study content.
// ============================================================================

export const webCh19Content: SectionContent[] = [
  // ---------------------------------------------------------------- 19.1
  {
    sectionId: 'web-ch19-s1',
    readingTime: 8,
    intro: 'Users judge a site in the first seconds, and Core Web Vitals turn that judgment into measurable budgets. This section defines Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift with their 2026 thresholds. You will learn to read Lighthouse reports and to separate lab data from field reality.',
    objectives: [
      'State the LCP, INP, and CLS thresholds and what each measures',
      'Set performance budgets that fail builds before users suffer',
      'Distinguish lab data from field data and use both correctly',
      'Read a Lighthouse report and prioritize its opportunities'
    ],
    concepts: [
      {
        term: 'Largest Contentful Paint',
        kind: 'definition',
        statement: '**Largest Contentful Paint** marks when the biggest visible `content` element finishes rendering inside the viewport. A good score is two and a half seconds or less on a mid tier mobile device, because slower heroes read as **broken** rather than slow. Optimizing it means attacking **load** delay, render delay, and resource delay for that one hero element first.',
        detail: 'Typical heroes are cover images, headlines backed by web fonts, or server rendered article bodies. Measure the element, not the page average, and preload exactly that resource.'
      },
      {
        term: 'Interaction to Next Paint',
        kind: 'definition',
        statement: '**Interaction to Next Paint** measures responsiveness from a click or keypress until the next visible `paint` completes. A good score is two hundred milliseconds or less, which keeps taps feeling **connected** to outcomes. The culprits are long **main thread** tasks and heavy event handlers that delay the frame the user is waiting for.',
        detail: 'INP replaced first input delay as the responsiveness vital because it covers the whole interaction, not just the first one. Break up tasks over fifty milliseconds and defer non critical work until idle.'
      },
      {
        term: 'Cumulative Layout Shift',
        kind: 'definition',
        statement: '**Cumulative Layout Shift** sums every unexpected `shift` of visible elements weighted by distance and viewport impact. A good score is one tenth or less, because jumping buttons cause **misclicks** that destroy trust. Shifts come from unsized images, late fonts, and injected **banners** that push content after first paint.',
        detail: 'Reserve space with width and height attributes or aspect ratio boxes for every media slot. Never insert content above existing content after load without user action.'
      },
      {
        term: 'Lab versus field data',
        kind: 'insight',
        statement: '**Lab data** comes from controlled `Lighthouse` runs with fixed devices and throttling, which makes it reproducible and perfect for **regression** gates. **Field data** comes from real Chrome users through the `CrUX` dataset, which captures the device and network spread no lab can fake. Ship decisions need **both**: lab for debugging and field for truth about what users endure.',
        detail: 'Gate pull requests on lab scores and review field dashboards weekly for regressions that only appear on real hardware. A page can ace the lab on fiber while failing the field on budget phones.'
      },
      {
        term: 'Reading Lighthouse and setting budgets',
        kind: 'method',
        statement: 'A **Lighthouse report** scores performance plus accessibility plus best practices plus SEO, with an **opportunities** list ranked by estimated savings. Treat the opportunities as a **priority queue** ordered by milliseconds saved per hour of work, not as a checklist to finish blindly. **Budgets** then lock the wins in: fail builds when JavaScript exceeds its byte cap in `budgets.json` or when the hero image regresses.',
        detail: 'Configure budgets in a budgets file checked into the repo and enforced in CI. Re baseline deliberately after intentional tradeoffs rather than letting thresholds drift silently.'
      }
    ],
    examples: [
      {
        title: 'Diagnose a failing LCP with Lighthouse',
        problem: 'A landing page scores poorly on mobile and the report blames the hero image plus render blocking styles.',
        steps: [
          { label: 'Step 1: Run the lab test', text: '```bash\nnpx lighthouse https://example.com --preset=desktop --view\nnpx lighthouse https://example.com --throttling-method=devtools --view\n```\nTwo runs separate desktop reality from throttled mobile reality before changing anything.' },
          { label: 'Step 2: Read the opportunities', text: '```ts\n// Lighthouse opportunities, ranked by savings:\n// 1. Preload the hero image: saves about one second\n// 2. Defer non critical CSS: saves about half a second\n// 3. Serve modern formats: saves hundreds of kilobytes\n```\nWork starts at the top of the savings ranking, not at personal preference.' },
          { label: 'Step 3: Fix and lock with a budget', text: '```js\n// budgets.json: fail builds that regress the hero path\n[{ "resourceType": "image", "budget": 200 }, { "resourceType": "script", "budget": 170 }]\n```\nByte budgets in kilobytes keep future pull requests from reintroducing the weight.' }
        ],
        result: 'LCP drops under the threshold on mobile, and budgets prevent silent regression in later releases.'
      },
      {
        title: 'Hunt an INP and CLS pair in the field',
        problem: 'Field data shows slow taps on a filter page plus layout jumps when ads load, while lab scores look fine.',
        steps: [
          { label: 'Step 1: Split lab from field', text: '```js\n// Lab: fast device on fiber, INP passes easily\n// Field (CrUX): budget phones on slow networks, taps queue behind a 400ms filter task\n```\nThe gap proves the lab device flatters the main thread cost of the real audience.' },
          { label: 'Step 2: Break up the handler', text: '```js\nfilterButton.addEventListener("click", () => {\n  requestAnimationFrame(() => paintActiveState())\n  setTimeout(() => applyHeavyFilter(), 0)\n})\n```\nPainting feedback first keeps the interaction under budget while heavy work yields.' },
          { label: 'Step 3: Reserve the ad slot', text: '```js\n.ad-slot { aspect-ratio: 300 / 250; width: 100%; }\n```\nFixed aspect space stops late ads from shoving article text mid read.' }
        ],
        result: 'Field INP falls into budget and layout shift disappears because space was reserved before the ad arrived.'
      }
    ],
    keyTakeaways: [
      'LCP measures hero readiness with a good threshold at two and a half seconds or less.',
      'INP measures tap to paint responsiveness with a good threshold at two hundred milliseconds or less.',
      'CLS sums unexpected shifts with a good threshold at one tenth or less.',
      'Use lab runs for reproducible debugging and CrUX field data for truth about real users.',
      'Work Lighthouse opportunities by savings and lock wins with CI budgets.'
    ],
    quiz: [
      {
        q: 'What does LCP measure?',
        options: [
          'Time until the largest visible content element renders',
          'Time until the first byte arrives',
          'Total number of requests',
          'JavaScript bundle size'
        ],
        answer: 0,
        explanation: 'LCP marks the hero moment users perceive as loaded. Optimizing it means prioritizing exactly that element path over page averages.'
      },
      {
        q: 'Why did INP replace first input delay as the responsiveness vital?',
        options: [
          'It is easier to game',
          'It measures the full interaction until next paint for all interactions, not just the first input delay',
          'It ignores the main thread',
          'It only measures desktop'
        ],
        answer: 1,
        explanation: 'First input delay covered only the start of the first interaction. INP captures the complete tap to paint latency across the page lifetime.'
      },
      {
        q: 'A page aces lab scores but fails field vitals. What is the most likely cause?',
        options: [
          'Lighthouse is broken',
          'Real users on budget devices and slow networks endure costs the lab hardware hides',
          'Field data measures a different site',
          'Budgets are too strict'
        ],
        answer: 1,
        explanation: 'Lab hardware and throttling approximate but never equal the device spread. Field data reveals main thread and network costs the lab flatters.'
      },
      {
        q: 'How should Lighthouse opportunities be worked?',
        options: [
          'Alphabetically until all are done',
          'In savings order as a priority queue, then locked with budgets',
          'Only the lowest saving items first',
          'By ignoring the report entirely'
        ],
        answer: 1,
        explanation: 'Milliseconds saved per hour of work prioritizes impact. Budgets then prevent the same regressions from returning.'
      },
      // Placement-pattern: Vitals budget fixes for shift and paint (original)
      {
        q: "A product page shifts layout as hero images load and its largest image arrives late. Which pair of fixes targets the budgets directly?",
        options: ["Reserve image dimensions through aspect-ratio boxes plus preload the hero with high fetch priority, so no shift occurs and the largest paint arrives early", "Remove all images from the page", "Load images only after the user stops scrolling", "Shrink the text to compensate for the shift"],
        answer: 0,
        explanation: "Step 1: The data given is unexpected layout movement plus a late largest paint. Step 2: The governing rules are the two budgets: shift comes from boxes with unknown size resolved late, and largest-paint timing comes from discovery and priority of the hero resource. Step 3: Tracing the fixes, reserved boxes hold the layout steady from first paint while the preload with raised priority delivers the hero bytes ahead of competing work. Step 4: The distractors fail because removing media abandons the content, scroll-gating delays the paint further, and text sizing never addresses image-caused shift. Step 5: Therefore reserved dimensions plus hero preload is the targeting pair."
      }
    ]
  },

  // ---------------------------------------------------------------- 19.2
  {
    sectionId: 'web-ch19-s2',
    readingTime: 9,
    intro: 'Fast loading is engineered, not hoped for: smaller bundles, smarter images, disciplined fonts, and edge caching. This section teaches code splitting, tree shaking, modern image formats, font strategies, and cache headers with CDNs. You will leave with a loading playbook that survives real networks.',
    objectives: [
      'Split bundles by route and defer non critical code',
      'Prove tree shaking removes dead exports with bundle analysis',
      'Serve responsive modern images with explicit dimensions',
      'Cache aggressively at the edge with correct headers'
    ],
    concepts: [
      {
        term: 'Code splitting by route',
        kind: 'method',
        statement: '**Code splitting** breaks the bundle at `import` boundaries so each route loads only the code it renders. Dynamic imports with `React.lazy` or framework equivalents defer admin panels and editors until visited. The result is a small **critical** bundle for first paint plus on demand chunks that prefetch on **hover** of the link.',
        detail: 'Split at route boundaries first, then at heavy components like charts and editors. Prefetch on link hover so navigation feels instant without paying upfront.'
      },
      {
        term: 'Tree shaking and bundle analysis',
        kind: 'method',
        statement: '**Tree shaking** drops unused `exports` during production builds when modules use static import syntax. Barrel files and side effectful imports defeat the shaker, so deep **imports** from libraries beat importing the whole catalog. A `bundle` analyzer proves the win by naming the heaviest modules before and after each change.',
        detail: 'Mark side effect free packages explicitly and avoid importing entire icon or date libraries for one helper. Audit the analyzer output on every major dependency addition.'
      },
      {
        term: 'Responsive modern images',
        kind: 'method',
        statement: '**Responsive images** serve each screen only the pixels it needs through `srcset` plus sizes in `AVIF` or WebP with fallbacks. Explicit width and height reserve **space** before bytes arrive, which protects the layout shift budget. Lazy `loading` below the fold plus eager hero preload focuses the network on what the viewport shows **first**.',
        detail: 'Generate three to five widths per image and let the browser pick by density and layout. Compress heroes aggressively since they dominate the largest paint.'
      },
      {
        term: 'Fonts without the flash or the shift',
        kind: 'method',
        statement: '**Font strategy** preloads only the critical `woff2` faces and displays fallback text through `swap` while they load. Subsetting to needed **unicode ranges** plus variable fonts collapses many files into one efficient download. Self hosting with long **cache** lifetimes beats third party font chains that add DNS plus TLS round trips.',
        detail: 'Use display swap so text stays readable during loads and match fallback metrics to minimize shift. Preload at most two faces since each preload contends with the hero image.'
      },
      {
        term: 'Caching headers plus CDN edges',
        kind: 'method',
        statement: '**Caching** stamps immutable hashed assets with long lived `max-age` while HTML stays fresh with **revalidation**. A `CDN` edge network then serves those bytes from points of presence near each user instead of one origin. Versioned **filenames** make purging safe, because new deploys mint new URLs while old ones stay valid for stragglers.',
        detail: 'Hash static assets into filenames and cache them for a year with immutable directives. Keep HTML cache times short so deploys propagate within minutes.'
      }
    ],
    examples: [
      {
        title: 'Split a heavy admin route out of the main bundle',
        problem: 'A charting library bundled for every visitor adds hundreds of kilobytes to first paint.',
        steps: [
          { label: 'Step 1: Measure first', text: '```bash\nnpm run build\nnpx vite-bundle-visualizer\n```\nThe analyzer names the charting module as the dominant block before any change.' },
          { label: 'Step 2: Defer with a dynamic import', text: '```ts\nimport { lazy, Suspense } from "react"\nconst AdminCharts = lazy(() => import("./AdminCharts"))\nfunction AdminRoute() {\n  return (\n    <Suspense fallback={<p>Loading charts</p>}>\n      <AdminCharts />\n    </Suspense>\n  )\n}\n```\nVisitors who never open admin never download the charts.' },
          { label: 'Step 3: Import deeply', text: '```ts\nimport debounce from "lodash/debounce"\n// Avoid: import { debounce } from "lodash" (pulls the catalog)\n```\nDeep imports let tree shaking drop the ninety nine helpers nobody calls.' }
        ],
        result: 'First paint ships a fraction of the JavaScript and the admin chunk loads on demand with a graceful fallback.'
      },
      {
        title: 'Serve a hero image that protects LCP and CLS',
        problem: 'A two megabyte hero JPEG with no dimensions delays the largest paint and shoves text when it lands.',
        steps: [
          { label: 'Step 1: Publish modern responsive sources', text: '```js\n// picture block: AVIF first, WebP next, JPEG fallback, widths 640 to 1600\n// sizes="(max-width: 640px) 100vw, 1200px"\n// width="1200" height="630" reserves the box before bytes arrive\n```\nEach screen downloads fitting pixels in the cheapest format it supports.' },
          { label: 'Step 2: Preload the hero only', text: '```js\n// head link: rel="preload" as="image" imagesrcset="hero-1200.avif 1200w"\n// fetchpriority="high" tells the browser this is the LCP element\n```\nPreload focuses the network on the one element the vital measures.' },
          { label: 'Step 3: Cache at the edge', text: '```ts\nres.setHeader("Cache-Control", "public, max-age=31536000, immutable")\n// hero-9f2c.avif: hashed name, safe for year long edge caching\n```\nHashed filenames let the CDN serve the bytes from nearby edges for a full year.' }
        ],
        result: 'The hero arrives fast in a modern format, layout never jumps, and repeat visits serve from the edge.'
      }
    ],
    keyTakeaways: [
      'Split at route boundaries with dynamic imports and prefetch on hover.',
      'Tree shake with static imports plus deep paths and prove wins with the analyzer.',
      'Serve AVIF or WebP through srcset with explicit dimensions and lazy below fold loading.',
      'Preload at most two woff2 faces with display swap and self host with subsetting.',
      'Cache hashed assets immutably at the edge while HTML revalidates quickly.'
    ],
    quiz: [
      {
        q: 'Why split at route boundaries first?',
        options: [
          'Routes are the only code that can be lazy loaded',
          'Each visit renders one route, so per route chunks match what users actually need',
          'Splitting increases total bytes downloaded',
          'Prefetching is impossible with split bundles'
        ],
        answer: 1,
        explanation: 'Route chunks align bytes with navigation: first paint carries only the current route while other routes load on demand or on hover.'
      },
      {
        q: 'What defeats tree shaking?',
        options: [
          'Static import syntax',
          'Barrel files plus side effectful imports that prevent dead export removal',
          'Using ES modules',
          'Small bundle sizes'
        ],
        answer: 1,
        explanation: 'The shaker needs static structure plus purity signals. Barrels force whole catalog inclusion and side effects force retention.'
      },
      {
        q: 'Why do images need explicit width and height?',
        options: [
          'It makes files smaller',
          'Reserved space prevents layout shift before bytes arrive',
          'Browsers refuse images without them',
          'It replaces the need for modern formats'
        ],
        answer: 1,
        explanation: 'The box is laid out from attributes immediately while pixels stream in later. Without reservation, arrival shoves content and burns the CLS budget.'
      },
      {
        q: 'Why do hashed filenames make CDN caching safe?',
        options: [
          'Hashes encrypt the content',
          'New deploys mint new URLs so long lived cached copies never go stale',
          'Hashes make files smaller',
          'CDNs require hashes by law'
        ],
        answer: 1,
        explanation: 'Immutable year long caching works because content changes get fresh names. Old URLs stay valid for stragglers while new ones propagate instantly.'
      }
    ]
  },

  // ---------------------------------------------------------------- 19.3
  {
    sectionId: 'web-ch19-s3',
    readingTime: 8,
    intro: 'Accessible interfaces work for everyone, including keyboard only users and screen reader users. This section teaches the name role value contract, native first component choice, keyboard flows, focus management, and live regions. You will test with keyboards and assistive technology instead of sight alone.',
    objectives: [
      'Give every control an accessible name, role, and value',
      'Choose native elements before ARIA spreads',
      'Design complete keyboard flows with visible focus',
      'Announce dynamic updates through live regions'
    ],
    concepts: [
      {
        term: 'Name role value contract',
        kind: 'law',
        statement: 'Every control owes assistive technology three facts: a **name** like Submit order, a `role` like button, and a **value** like pressed or checked where stateful. Without a name the control announces as **unlabeled**, which is functionally invisible no matter how beautiful it looks. Testing by role plus **name** therefore doubles as an accessibility proof for every interactive element.',
        detail: 'Name buttons with content or aria labels, name inputs with associated labels, and expose toggle state with pressed or checked semantics. An icon alone is never a name.'
      },
      {
        term: 'Native first, ARIA second',
        kind: 'law',
        statement: '**Native elements** like `button` and `input` ship free keyboard support, focus rings, and screen reader semantics that custom `div` controls must rebuild by hand. The first rule of **ARIA** is restraint: no ARIA beats bad ARIA, because wrong roles mislead more than missing ones. Reach for ARIA only to **fill gaps** native markup cannot express, such as tab lists or live announcements.',
        detail: 'Replace clickable divs with buttons before adding any ARIA. Validate that every custom widget still works with JavaScript driven focus and keyboard events.'
      },
      {
        term: 'Keyboard flows and visible focus',
        kind: 'method',
        statement: '**Keyboard flows** require every action reachable by `Tab` in a logical order with `Enter` or Space activating and Escape dismissing. Focus must stay **visible** through strong focus rings, because sighted keyboard users navigate by the ring alone. Traps are **forbidden** except in true modals, which must cycle focus internally and return it on close.',
        detail: 'Test every journey with the mouse unplugged from landing through success. Keep tab order matching visual order and never remove outlines without a stronger replacement.'
      },
      {
        term: 'Focus management in dynamic UI',
        kind: 'method',
        statement: '**Focus management** moves focus deliberately when views change: route transitions announce through `headings`, dialogs seize focus on open, and wizards advance to the next **step** label. Leaving focus on a removed element strands keyboard users in **silence**, so every destroy or hide must land focus somewhere sensible. The rule is **continuity**: focus always rests on the content the user just caused to appear.',
        detail: 'Return focus to the triggering button when dialogs close. Move focus to error summaries on failed submit so screen reader users land on the problem list.'
      },
      {
        term: 'Live regions for async updates',
        kind: 'method',
        statement: '**Live regions** announce dynamic changes through `aria-live` polite or assertive channels without moving focus. Toasts and cart counts use **polite** so news waits for a pause, while errors blocking progress use **assertive** sparingly. Overuse trains users to **ignore** announcements, so only status changes that matter earn a voice.',
        detail: 'Prefer a single polite status region per page over scattered assertive ones. Clear and re set text for repeated identical messages so each occurrence announces.'
      }
    ],
    examples: [
      {
        title: 'Fix an unlabeled icon button and a custom toggle',
        problem: 'A cart button shows only an SVG and a div toggle announces nothing, so both fail role queries and screen readers.',
        steps: [
          { label: 'Step 1: Prove the failure', text: '```ts\nscreen.getByRole("button", { name: "Open cart" }) // throws: no such button\nscreen.getByRole("switch", { name: "Email alerts" }) // throws: no such switch\n```\nThe missing names fail tests exactly as they fail assistive technology.' },
          { label: 'Step 2: Name natively', text: '```js\n// button wraps the icon with a real name\n// <button aria-label="Open cart"><svg aria-hidden="true">...</svg></button>\n// <button aria-pressed="false">Email alerts</button>\n```\nNative buttons supply role plus keyboard plus focus while labels supply names.' },
          { label: 'Step 3: Re run the queries', text: '```ts\n expect(screen.getByRole("button", { name: "Open cart" })).toBeVisible()\nconst toggle = screen.getByRole("button", { name: "Email alerts" })\nexpect(toggle).toHaveAttribute("aria-pressed", "false")\n```\nGreen role queries now certify the contract instead of merely testing code.' }
        ],
        result: 'Both controls announce name plus role plus value and operate fully by keyboard.'
      },
      {
        title: 'Announce form errors and dialog focus correctly',
        problem: 'Failed submits show red text nobody announces, and an opening dialog leaves focus behind on the page.',
        steps: [
          { label: 'Step 1: Summarize errors in an alert', text: '```js\n// On failed submit move focus to the summary:\n// <div role="alert" ref={summaryRef} tabIndex={-1}>\n//   Two fields need attention: email and password\n// </div>\n```\nThe alert role announces immediately and focus lands where fixes begin.' },
          { label: 'Step 2: Manage dialog focus', text: '```ts\nonOpen: dialogHeading.focus()\nonClose: triggerButton.focus()\n```\nEntry lands on the dialog title and exit returns to the control that opened it.' },
          { label: 'Step 3: Verify keyboard only', text: '```ts\nawait user.tab()\nawait user.tab()\nawait user.keyboard("{Enter}")\nexpect(screen.getByRole("dialog")).toBeVisible()\n```\nThe whole journey runs through tab plus enter with no pointer at all.' }
        ],
        result: 'Errors announce with focus placed for repair, and dialogs trap and return focus like well behaved citizens.'
      }
    ],
    keyTakeaways: [
      'Give every control a name plus role plus value or it is invisible to assistive technology.',
      'Prefer native buttons, inputs, and links before any ARIA is considered.',
      'Make every journey keyboard complete with logical tab order and visible focus.',
      'Move focus deliberately on route change, dialog open, and submit failure.',
      'Announce async status through a single polite live region and reserve assertive for blockers.'
    ],
    quiz: [
      {
        q: 'A button contains only an SVG with no label. How does it announce?',
        options: [
          'As a fully described button',
          'As unlabeled, effectively invisible to screen reader users',
          'As a heading',
          'As plain text'
        ],
        answer: 1,
        explanation: 'Without a name the role announcement carries no meaning. An aria label or visible text must supply the name.'
      },
      {
        q: 'Why prefer a native `button` over a clickable `div`?',
        options: [
          'Divs cannot be styled',
          'Native buttons ship free role, keyboard, focus, and activation semantics',
          'Buttons load faster in every case',
          'ARIA is forbidden on divs'
        ],
        answer: 1,
        explanation: 'Rebuilding button behavior on a div means hand wiring focus, keys, and announcements. Native elements provide all of it by default.'
      },
      {
        q: 'Where must focus go when a dialog closes?',
        options: [
          'To the top of the document always',
          'Back to the control that opened it',
          'Nowhere, focus should be lost',
          'To a random heading'
        ],
        answer: 1,
        explanation: 'Return restores continuity for keyboard and screen reader users. Losing focus strands them with no announced context.'
      },
      {
        q: 'When is an assertive live region appropriate?',
        options: [
          'For every toast and counter update',
          'Only for blocking errors that stop progress, with polite for routine status',
          'Never, live regions are deprecated',
          'For decorative animations'
        ],
        answer: 1,
        explanation: 'Assertive interrupts speech, so overuse trains users to ignore announcements. Polite delivery suits routine news while blockers earn interruption.'
      }
    ]
  },

  // ---------------------------------------------------------------- 19.4
  {
    sectionId: 'web-ch19-s4',
    readingTime: 8,
    intro: 'Search engines reward pages that declare their meaning clearly and punish duplication and dead ends. This section covers titles and meta descriptions, Open Graph cards, canonical URLs, robots plus sitemaps, and structured data. You will measure search health instead of guessing about it.',
    objectives: [
      'Write titles and descriptions that earn clicks without truncation',
      'Ship Open Graph plus Twitter cards with absolute image URLs',
      'Control duplication with canonical tags plus redirects',
      'Publish robots rules, sitemaps, and JSON-LD structured data'
    ],
    concepts: [
      {
        term: 'Titles and meta descriptions',
        kind: 'method',
        statement: 'The **title** names the page in about sixty characters or fewer while the `description` pitches it in about one hundred fifty characters. Titles front load the **primary keyword** and brand once, because truncation in results buries clever endings. Descriptions do not boost **rankings** directly but lift click through, which is the metric that pays.',
        detail: 'Give every route a unique title plus description generated from its data. Audit truncation with a search preview tool on both desktop and mobile widths.'
      },
      {
        term: 'Open Graph and social cards',
        kind: 'definition',
        statement: '**Open Graph** tags like `og:title` plus `og:image` control how links unfurl on social platforms and chat apps. Cards need **absolute** image URLs at twelve hundred by six hundred thirty with descriptive alt text, because relative paths break off site. Missing tags fall back to **scraped** guesses, which is how launches debut with cropped logos and wrong headlines.',
        detail: 'Validate every template with the platform card debuggers before launch. Keep card images under a megabyte so unfurls render instantly in feeds.'
      },
      {
        term: 'Canonical URLs and duplicate control',
        kind: 'method',
        statement: 'A **canonical** tag names the single `url` search engines should index when filters and tracking params spawn duplicates. Pairs with **redirects**: trailing slash and HTTP variants resolve to one address permanently. Without this discipline, ranking **signals split** across twins and the wrong twin can outrank the real page.',
        detail: 'Self reference the canonical on every page including the original. Prefer server side permanent redirects over JavaScript navigation for moved content.'
      },
      {
        term: 'Robots rules and sitemaps',
        kind: 'method',
        statement: '**Robots directives** in `robots.txt` plus per page meta tags tell crawlers which paths to skip, such as admin or preview **routes**. An XML `sitemap` then lists the pages worth crawling with freshness hints, which guides limited **crawl budgets** toward money pages. The two work as a pair: robots prunes waste while the sitemap spotlights **value**.',
        detail: 'Never rely on robots exclusion for secrets since compliant crawlers obey but attackers read the file. Submit the sitemap in Search Console and keep it under fifty thousand URLs per file.'
      },
      {
        term: 'Structured data with JSON-LD',
        kind: 'method',
        statement: '**Structured data** in `JSON-LD` describes entities like articles and products in a vocabulary search engines parse reliably. Valid markup unlocks **rich results** such as ratings, prices, and FAQs that dominate plain blue links. Testing with the **rich results** tool before deploy catches schema drift that silently forfeits those enhancements.',
        detail: 'Generate JSON-LD from the same data that renders the page so markup never contradicts visible content. Monitor enhancement reports weekly since templates regress with feature work.'
      }
    ],
    examples: [
      {
        title: 'Ship complete head tags for an article page',
        problem: 'Article links unfurl with the wrong image and search results show duplicated filter URLs.',
        steps: [
          { label: 'Step 1: Write the head block', text: '```js\n// <title>Brass Lamps Guide — StudyVerse</title>\n// <meta name="description" content="Choose shades, bulbs, and placement for warm reading light." />\n// <link rel="canonical" href="https://example.com/guides/brass-lamps" />\n// <meta property="og:title" content="Brass Lamps Guide" />\n// <meta property="og:image" content="https://example.com/og/brass-lamps.png" />\n```\nTitle plus description plus canonical plus card travel as one unit per route.' },
          { label: 'Step 2: Add structured data', text: '```js\n// <script type="application/ld+json">\n// {"@context":"https://schema.org","@type":"Article",\n//  "headline":"Brass Lamps Guide","author":{"@type":"Person","name":"Ada"}} \n// </script>\n```\nJSON-LD mirrors the visible headline and author so markup and page agree.' },
          { label: 'Step 3: Validate before deploy', text: '```bash\nnpx next build\ncurl -s https://example.com/guides/brass-lamps | grep -i -E "canonical|og:|description"\n```\nThe build proves tags render server side where crawlers can read them.' }
        ],
        result: 'Links unfurl with the right card, duplicates collapse to one canonical, and the article qualifies for rich results.'
      },
      {
        title: 'Publish robots, sitemap, and search monitoring',
        problem: 'Crawlers waste budget on preview deploys while new articles take weeks to appear.',
        steps: [
          { label: 'Step 1: Gate the robots file', text: '```js\n// public/robots.txt:\n// User-agent: *\n// Disallow: /preview/ /admin/\n// Sitemap: https://example.com/sitemap.xml\n```\nPreview and admin paths leave the crawl budget for public money pages.' },
          { label: 'Step 2: Generate the sitemap', text: '```ts\n// sitemap.ts: list posts with lastmod from the CMS\n// urls: ["/", "/guides/brass-lamps", ...] with changefreq weekly\n```\nFresh lastmod dates steer recrawls toward recently updated guides.' },
          { label: 'Step 3: Measure search health', text: '```bash\n# Search Console checks: indexing coverage, Core Web Vitals,\n# enhancements, and manual actions — reviewed weekly\n```\nDashboards replace guesswork with indexing plus experience plus enhancement signals.' }
        ],
        result: 'Crawl budget concentrates on indexable pages, new content surfaces promptly, and regressions alert within days.'
      }
    ],
    keyTakeaways: [
      'Keep titles tight with the keyword first and descriptions pitched for clicks.',
      'Ship absolute Open Graph images with every route and validate cards pre launch.',
      'Collapse duplicates with self referencing canonicals plus permanent redirects.',
      'Prune crawlers with robots rules and spotlight value with fresh sitemaps.',
      'Mark up entities in JSON-LD from render data and monitor enhancement reports.'
    ],
    quiz: [
      {
        q: 'Do meta descriptions directly boost rankings?',
        options: [
          'Yes, they are the top ranking factor',
          'No, but they lift click through which earns the traffic rankings promise',
          'They replace titles entirely',
          'They are invisible to search engines'
        ],
        answer: 1,
        explanation: 'Rankings come from relevance and authority while descriptions sell the click. A compelling pitch captures the traffic the ranking earned.'
      },
      {
        q: 'Why must Open Graph image URLs be absolute?',
        options: [
          'Relative URLs load faster',
          'Off site scrapers resolve cards without page context, so relative paths break',
          'Absolute URLs improve rankings directly',
          'Social platforms forbid HTTPS'
        ],
        answer: 1,
        explanation: 'Unfurl crawlers fetch the image URL standalone. A relative path has no base off site and resolves to nothing.'
      },
      {
        q: 'Two filter URLs show identical content. What is the fix?',
        options: [
          'Delete both pages',
          'Canonicalize to one URL and redirect variants permanently',
          'Add more duplicate pages',
          'Hide both from navigation only'
        ],
        answer: 1,
        explanation: 'Canonical concentrates ranking signals on one address while redirects herd users and bots there. Duplicates left alone split authority.'
      },
      {
        q: 'What belongs in robots rules versus the sitemap?',
        options: [
          'Robots lists money pages and the sitemap lists secrets',
          'Robots prunes waste paths while the sitemap spotlights valuable pages',
          'Both list identical URLs always',
          'Neither affects crawling'
        ],
        answer: 1,
        explanation: 'Exclusion and inclusion are complementary: robots keeps crawlers out of admin and preview while the sitemap guides limited budget toward content that matters.'
      }
    ]
  },

  // ---------------------------------------------------------------- 19.5
  {
    sectionId: 'web-ch19-s5',
    readingTime: 7,
    intro: 'Modern browsers ship an operating system worth of capabilities from graphics to geolocation to notifications. This section maps canvas versus SVG, media elements, permission gated device APIs, and storage choices. You will default to privacy respecting patterns that ask for little and explain why.',
    objectives: [
      'Choose canvas for pixels and SVG for scalable scenes',
      'Build accessible audio and video with tracks and captions',
      'Gate device APIs behind permission checks with graceful fallback',
      'Pick storage tiers from session to IndexedDB by lifetime and size'
    ],
    concepts: [
      {
        term: 'Canvas versus SVG',
        kind: 'insight',
        statement: '**Canvas** paints immediate mode `pixels` through script, which excels at games and charts with thousands of moving marks. **SVG** keeps a retained `scene` of elements that scale crisply and accept clicks plus focus natively. Choose pixels for **volume** and scenes for structure: canvas for particles, SVG for diagrams users must read and operate.',
        detail: 'Canvas needs hand built accessibility fallbacks while SVG elements can carry roles and labels directly. Export static illustrations as SVG and reserve canvas for frame driven rendering.'
      },
      {
        term: 'Accessible media elements',
        kind: 'definition',
        statement: '**Media elements** in `video` and audio tags must ship **captions** plus transcripts so deaf and distracted users get the full message. The `track` element carries timed captions while attributes like controls and preload set sane **defaults** that respect data plans. Autoplay with sound is **blocked** by browsers, so design muted or user started playback from the beginning.',
        detail: 'Provide captions in the page language plus a full transcript below long videos. Never autoplay audible media since browsers block it and users resent it.'
      },
      {
        term: 'Permission first device APIs',
        kind: 'law',
        statement: '**Permission first** means checking `permissions` state before touching geolocation, camera, microphone, or notifications. Requests must fire from explicit **gestures** with a plain language why, because surprise prompts get **denied** permanently. Every denial needs a graceful **fallback**, since core flows must survive users who reasonably say no.',
        detail: 'Query permission state to tailor the button label before prompting. Explain the benefit inline next to the control rather than in the system dialog alone.'
      },
      {
        term: 'Storage tiers in the browser',
        kind: 'definition',
        statement: '**Browser storage** spans session `cookies` for auth, local storage for small preferences, and `IndexedDB` for large offline datasets. Cookies travel on **every request** so they stay tiny, while IndexedDB holds megabytes with **indexed** queries for offline first apps. Quotas and eviction differ by tier, so critical **auth** never shares a fragile large store.',
        detail: 'Keep tokens in HttpOnly cookies, theme prefs in local storage, and article caches in IndexedDB. Handle quota errors with graceful degradation to network only mode.'
      },
      {
        term: 'Privacy respecting defaults',
        kind: 'insight',
        statement: '**Privacy defaults** collect the minimum `data` needed, retain it briefly, and request powers lazily at the moment of use. Coarse location beats **precise** coordinates when a city suffices, and local processing beats **uploading** raw sensor streams. Defaults that respect users also survive **regulation**, because minimal collection is compliant by construction.',
        detail: 'Document why each permission exists in the product copy and in code comments. Offer settings that revoke and delete granted data without contacting support.'
      }
    ],
    examples: [
      {
        title: 'Pick the right graphics primitive',
        problem: 'A dashboard needs a live price chart with ten thousand points plus a static architecture diagram.',
        steps: [
          { label: 'Step 1: Chart pixels on canvas', text: '```js\nconst ctx = chartCanvas.getContext("2d")\nfunction draw(points) {\n  ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height)\n  ctx.beginPath()\n  for (const p of points) ctx.lineTo(p.x, p.y)\n  ctx.stroke()\n}\n```\nImmediate mode redraws thousands of points per frame without DOM overhead.' },
          { label: 'Step 2: Diagram structure in SVG', text: '```js\n// <svg role="img" aria-label="Deploy pipeline diagram">\n//   <rect x="10" y="10" width="120" height="40" />\n//   <text x="20" y="34">Build</text>\n// </svg>\n```\nRetained elements scale crisply and carry roles plus labels for assistive tech.' },
          { label: 'Step 3: State the rule', text: '```ts\nconst pick = (marks: number, interactive: boolean) =>\n  marks > 2000 && !interactive ? "canvas" : "svg"\n```\nVolume without semantics points to canvas while structure points to SVG.' }
        ],
        result: 'The chart stays fluid at full data density and the diagram remains sharp, clickable, and announced.'
      },
      {
        title: 'Request geolocation the permission first way',
        problem: 'A store finder prompts on page load, gets mass denials, and breaks entirely when permission is refused.',
        steps: [
          { label: 'Step 1: Check before prompting', text: '```ts\nconst status = await navigator.permissions.query({ name: "geolocation" })\nif (status.state === "denied") return renderZipFallback()\n```\nDenied users skip straight to the manual path instead of a doomed prompt.' },
          { label: 'Step 2: Prompt from a gesture with a why', text: '```ts\nfindButton.addEventListener("click", async () => {\n  explain("We use your city to sort nearby stores.")\n  const pos = await getPositionWithTimeout(8000)\n  renderStoresNear(pos.coords)\n})\n```\nThe click plus the reason plus a timeout keeps the request honest and bounded.' },
          { label: 'Step 3: Keep the fallback equal', text: '```ts\nfunction renderZipFallback() {\n  showZipInput()\n  listPopularStores()\n}\n```\nRefusal still yields a complete finder through zip search plus popular lists.' }
        ],
        result: 'Grant rates rise because the ask is contextual, and denials convert through a first class manual flow.'
      }
    ],
    keyTakeaways: [
      'Use canvas for high volume pixels and SVG for structured scalable scenes.',
      'Ship captions plus transcripts on all media and never depend on audible autoplay.',
      'Check permission state first, prompt from gestures with a reason, and honor denials.',
      'Tier storage from cookies to local storage to IndexedDB by size and lifetime.',
      'Collect minimum data lazily with clear reasons and easy revoke plus delete.'
    ],
    quiz: [
      {
        q: 'When should you choose canvas over SVG?',
        options: [
          'For structured diagrams needing clicks and focus',
          'For high volume frame driven pixels like particles or dense charts',
          'For static logos',
          'For text heavy documents'
        ],
        answer: 1,
        explanation: 'Canvas redraws thousands of marks without DOM cost. Structured, interactive, or text heavy scenes favor SVG semantics and scaling.'
      },
      {
        q: 'What must ship with every meaningful video?',
        options: [
          'Audible autoplay on load',
          'Captions plus a transcript with sane preload and controls',
          'No controls for a cleaner look',
          'Exclusively highest resolution sources'
        ],
        answer: 1,
        explanation: 'Captions serve deaf users and silent contexts while transcripts serve search and skimming. Autoplay with sound is blocked and unwelcome.'
      },
      {
        q: 'What does permission first require before a geolocation prompt?',
        options: [
          'Prompting on page load for speed',
          'Checking state, asking from an explicit gesture with a reason, and providing fallback',
          'Requesting precise coordinates always',
          'Skipping fallback to encourage grants'
        ],
        answer: 1,
        explanation: 'Context plus consent plus continuity converts better and respects refusal. Surprise prompts earn permanent denials and broken flows.'
      },
      {
        q: 'Where do auth tokens belong among browser storage tiers?',
        options: [
          'In local storage for easy script access',
          'In HttpOnly cookies kept tiny, with prefs in local storage and datasets in IndexedDB',
          'In IndexedDB alongside caches',
          'In URL parameters for sharing'
        ],
        answer: 1,
        explanation: 'Cookies travel automatically and stay script invisible with HttpOnly. Local storage suits small prefs and IndexedDB suits large offline data.'
      }
    ]
  }
]

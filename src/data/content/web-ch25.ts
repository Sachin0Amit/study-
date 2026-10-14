import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 25: Mobile Web and React Native
// Sections web-ch25-s1 through web-ch25-s4. Master study content.
// Based on Rheinwerk Full Stack Web Development Guide Chapter 11.
// ============================================================================

export const webCh25Content: SectionContent[] = [
  // ---------------------------------------------------------------- 25.1
  {
    sectionId: 'web-ch25-s1',
    readingTime: 8,
    intro: 'Phones run code from stores, browsers, and hybrids that blur the line. This section compares native, web, and hybrid routes by capability, reach, cost, and distribution. You will recommend the cheapest route that still reaches required hardware and store presence.',
    objectives: [
      'Contrast native, web, and hybrid builds by skill, cost, and reuse',
      'Weigh hardware access plus performance against reach and maintenance',
      'Choose distribution via store versus URL for the product need'
    ],
    concepts: [
      {
        term: 'Native builds',
        kind: 'definition',
        statement: 'A **native** app compiles per operating system with `Kotlin` or Swift plus platform kits. Full hardware access plus top `performance` come at the price of separate codebases plus specialized skills. Stores distribute installs with platform trust.',
        detail: 'Choose native when max fidelity plus hardware depth outweigh duplicate builds and hiring cost.'
      },
      {
        term: 'Mobile web builds',
        kind: 'definition',
        statement: 'A **web** app ships HTML plus CSS plus `JS` from a `URL` rendered in mobile browsers. One codebase plus instant updates trade against limited `hardware` reach plus browser chrome instead of install feel. Standards expand access yearly but trail native depth.',
        detail: 'Choose web for broad reach plus instant deploys when hardware needs stay within browser APIs.'
      },
      {
        term: 'Hybrid builds',
        kind: 'definition',
        statement: 'A **hybrid** app wraps web code in a native `shell` with a `view` rendering engine. Web skills ship installable apps with partial hardware bridges, landing between native and web on both power and cost. Lowest common denominator APIs may leave platform gems untapped.',
        detail: 'Choose hybrid to reuse web skills for store presence while auditing which hardware gaps truly matter.'
      },
      {
        term: 'Capability reach cost triangle',
        kind: 'insight',
        statement: 'Every route trades **capability** against `reach` against cost with no free corner. Native maximizes capability at duplicate cost, web maximizes reach at capability cost, and hybrid balances with `medium` totals. Naming the binding constraint picks the corner honestly.',
        detail: 'Write the binding constraint first since it eliminates two routes before feature debate starts.'
      },
      {
        term: 'Store versus URL distribution',
        kind: 'method',
        statement: 'Store **distribution** offers discovery plus trust plus `install` presence with review gates. URL **distribution** offers instant link sharing plus zero review with `update` speed. Product need for presence versus speed decides the channel before code does.',
        detail: 'Require store presence for trust sensitive installs and URL speed for content plus campaign reach.'
      }
    ],
    figures: [
      {
        caption: 'Capability reach cost triangle: native power, web reach, and hybrid balance with store versus URL paths.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Native web hybrid triangle" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">three mobile routes</text><polygon points="360,70 140,260 580,260" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="360" cy="70" r="46" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="332" y="64" font-size="12" font-weight="700" fill="currentColor">native</text><text x="330" y="82" font-size="10" fill="currentColor">max power</text><circle cx="140" cy="260" r="46" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="122" y="254" font-size="12" font-weight="700" fill="currentColor">web</text><text x="112" y="272" font-size="10" fill="currentColor">max reach</text><circle cx="580" cy="260" r="46" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="556" y="254" font-size="12" font-weight="700" fill="currentColor">hybrid</text><text x="548" y="272" font-size="10" fill="currentColor">balance</text><rect x="36" y="286" width="648" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="308" font-size="12" fill="currentColor">native: per OS builds, web: one URL, hybrid: web in native shell</text><text x="52" y="328" font-size="12" fill="currentColor">store gives trust + presence, URL gives speed + links</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Pick for a camera heavy workout app',
        problem: 'An app needs continuous sensor plus camera plus offline sets with store trust for payments.',
        steps: [
          { label: 'Step 1: Name the constraint', text: '```bash\nneed: sensors + camera + offline + store trust\nbinding: hardware depth + presence\n```\nDepth plus trust eliminate pure URL delivery.' },
          { label: 'Step 2: Price the routes', text: 'Native meets every hardware need at duplicate build cost while hybrid covers most at medium cost. Web trails on background capture and feel.' },
          { label: 'Step 3: Recommend with reason', text: 'Recommend native, or hybrid only if the hardware audit proves bridges suffice. Record the audit so scope growth triggers revisit.' }
        ],
        result: 'Hardware depth plus store trust justify native cost with a documented hybrid fallback test.'
      },
      {
        title: 'Pick for a content campaign site',
        problem: 'A campaign needs link sharing to millions with daily content tweaks and no hardware beyond location.',
        steps: [
          { label: 'Step 1: Name the constraint', text: '```js\nconst need = { reach: \"millions via links\", updates: \"daily\", hw: \"location only\" };\n// binding: reach + update speed\n```\nReach plus speed favor URL delivery.' },
          { label: 'Step 2: Check capability', text: 'Browser location APIs cover the need while central deploys update all viewers at once. No store review blocks the launch.' },
          { label: 'Step 3: Recommend with reason', text: 'Recommend mobile web with responsive polish and shareable URLs. Skip store cost until install presence becomes a requirement.' }
        ],
        result: 'One web codebase reaches millions instantly with updates that land centrally.'
      }
    ],
    keyTakeaways: [
      'Native buys depth and speed at duplicate builds and specialist cost.',
      'Web buys one codebase and instant updates at limited hardware depth.',
      'Hybrid reuses web skills for installs at middle power and cost.',
      'Binding constraints on hardware, presence, and speed pick the route.'
    ],
    quiz: [
      {
        q: 'When does native justify its cost?',
        options: ['Always, for every page', 'When hardware depth plus top performance plus store trust are binding', 'When no hardware is needed', 'When updates must bypass review daily'],
        answer: 1,
        explanation: 'Step 1: Native costs duplicate builds. Step 2: It returns depth plus speed. Step 3: Trust comes via stores. Step 4: Binding needs must warrant that price.'
      },
      {
        q: 'What is the core web advantage?',
        options: ['One codebase with instant central updates across platforms', 'Full sensor parity always', 'Automatic store presence', 'No need for design'],
        answer: 0,
        explanation: 'Step 1: Code lives centrally. Step 2: One version runs widely. Step 3: Edits land at once. Step 4: Reach plus speed dominate.'
      },
      {
        q: 'What limits hybrid builds?',
        options: ['They cannot use web code', 'They cannot be installed', 'Generic bridges may miss platform specific depths', 'They forbid updates'],
        answer: 2,
        explanation: 'Step 1: Hybrids bridge APIs. Step 2: Bridges target common ground. Step 3: Gems stay native only. Step 4: Audits must confirm coverage.'
      },
      // Route-pattern: capability reach cost selection (original)
      {
        q: 'A team needs store presence plus web skills but modest hardware. What fits?',
        options: ['Pure desktop software', 'No build at all', 'Paper flyers', 'Hybrid shell with web content and bridged hardware'],
        answer: 3,
        explanation: 'Step 1: Presence demands install. Step 2: Skills are web only. Step 3: Hardware is modest. Step 4: Hybrid matches all three.'
      }
    ]
  },
  // ---------------------------------------------------------------- 25.2
  {
    sectionId: 'web-ch25-s2',
    readingTime: 9,
    intro: 'One codebase must look intentional from small phones to wide monitors. This section sets the viewport, queries capabilities with media rules, and reshapes grid layouts by breakpoint. You will build mobile first so growth adds rather than amputates.',
    objectives: [
      'Set the viewport so mobile browsers size pages correctly',
      'Write media queries with features and breakpoints for real devices',
      'Reshape flexible grids mobile first across screen bands'
    ],
    concepts: [
      {
        term: 'Viewport meta',
        kind: 'definition',
        statement: 'The **viewport** tag tells mobile browsers the layout `width` plus initial `scale` to use. Without it phones shrink desktop layouts into thumbnails, while with it the page fills device width at readable scale. Every responsive page starts with this one line.',
        detail: 'Set width to device width with an initial scale of one and verify no sideways scroll on small phones.'
      },
      {
        term: 'Media rules and types',
        kind: 'definition',
        statement: 'A **media** rule wraps `CSS` that applies only when its query matches. Classic types split `screen` from print, while modern queries test width plus orientation plus resolution. Matched rules cascade normally with the rest of the sheet.',
        detail: 'Isolate print tweaks from screen tweaks so paper output never inherits phone layout hacks.'
      },
      {
        term: 'Features and breakpoints',
        kind: 'method',
        statement: 'Media **features** like `min-width` plus max width gate rules by capability. **Breakpoints** mark widths where layout must morph, often near common device bands. Content should pick breaks where it strains, not where devices happen to sit.',
        detail: 'Add a break where lines grow unreadable or cards crush, then name it by content reason.'
      },
      {
        term: 'Flexible layouts',
        kind: 'method',
        statement: 'Flexible **grids** with fractional `tracks` plus wrapping reflow across bands. Named `areas` let header plus main plus sidebar restack by simply rewriting the template per query. One markup order serves all sizes while CSS reorders visually.',
        detail: 'Define areas once then rewrite templates per band so markup stays stable while layout morphs.'
      },
      {
        term: 'Mobile first growth',
        kind: 'insight',
        statement: 'Mobile **first** ships the narrow `layout` as default then enhances upward with min width layers. Desktop first does the reverse and often amputates under pressure, while mobile first adds delight as space allows. Constraints first yield focus that survives expansion.',
        detail: 'Write base styles for narrow screens and add min width layers for larger bands only.'
      }
    ],
    figures: [
      {
        caption: 'Mobile first bands: single column base, two column mid, and three column wide from the same markup.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Responsive breakpoints and layouts" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">one markup, three layouts</text><rect x="36" y="60" width="190" height="150" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="12" font-weight="700" fill="currentColor">narrow: stack</text><rect x="52" y="96" width="158" height="24" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="52" y="124" width="158" height="24" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="52" y="152" width="158" height="24" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="52" y="196" font-size="11" fill="currentColor">base CSS</text><rect x="242" y="60" width="210" height="150" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="258" y="86" font-size="12" font-weight="700" fill="currentColor">mid: two col</text><rect x="258" y="96" width="96" height="54" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="358" y="96" width="78" height="54" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="258" y="154" width="178" height="22" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="258" y="196" font-size="11" fill="currentColor">min-width band</text><rect x="468" y="60" width="216" height="150" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="484" y="86" font-size="12" font-weight="700" fill="currentColor">wide: three col</text><rect x="484" y="96" width="64" height="54" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="552" y="96" width="64" height="54" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="620" y="96" width="48" height="54" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="484" y="154" width="184" height="22" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="484" y="196" font-size="11" fill="currentColor">larger min-width</text><rect x="36" y="226" width="648" height="106" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="252" font-size="12" fill="currentColor">viewport first, then queries by content strain</text><text x="52" y="274" font-size="12" fill="currentColor">areas restack, markup order stable</text><text x="52" y="296" font-size="12" fill="currentColor">touch targets stay generous on narrow</text><text x="52" y="316" font-size="12" fill="currentColor">test by resizing live across bands</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Fix a shrunken phone page',
        problem: 'A page looks like a tiny desktop thumbnail on phones with unreadable text and sideways scroll.',
        steps: [
          { label: 'Step 1: Declare the viewport', text: '```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n```\nDevice width plus unit scale let the layout fill phones correctly.' },
          { label: 'Step 2: Stack the base', text: 'Lay header plus main plus sidebar plus footer in one column as the default narrow style. No query is needed for the base.' },
          { label: 'Step 3: Verify by resizing', text: 'Open on a phone profile and confirm readable text with no sideways scroll. Only then add wider bands.' }
        ],
        result: 'Phones gain a readable stacked page instead of a shrunken thumbnail.'
      },
      {
        title: 'Grow a grid across bands',
        problem: 'A stacked phone layout must become two columns on tablets and three on desktops without markup forks.',
        steps: [
          { label: 'Step 1: Name the areas', text: '```css\n.grid { display: grid; }\nheader { grid-area: header; }\nmain { grid-area: main; }\n```\nNamed areas give queries stable hooks to rearrange.' },
          { label: 'Step 2: Add the bands', text: '```css\n@media screen and (min-width: 576px) {\n  .subgrid { grid-template-columns: 1fr 1fr; }\n}\n@media screen and (min-width: 992px) {\n  .grid { grid-template-columns: 1fr 1fr 1fr; }\n}\n```\nMin width layers enhance upward from the mobile base.' },
          { label: 'Step 3: Keep content led', text: 'Adjust break values where cards strain rather than copying device specs blindly. Content comfort outranks device fashion.' }
        ],
        result: 'One markup morphs from stack to columns exactly where content needs room.'
      }
    ],
    keyTakeaways: [
      'Viewport declaration makes mobile sizing intentional instead of shrunken.',
      'Media rules gate styles by type and capability with normal cascade.',
      'Breaks belong where content strains, named by reason rather than device.',
      'Mobile first base plus min width layers grow layouts without forks.'
    ],
    quiz: [
      {
        q: 'What breaks without a viewport tag on phones?',
        options: ['Colors disappear', 'Pages shrink to desktop thumbnails instead of filling width', 'Images cannot load', 'Text becomes encrypted'],
        answer: 1,
        explanation: 'Step 1: Phones default wide. Step 2: Layout scales down. Step 3: Text turns tiny. Step 4: The tag fixes width plus scale.'
      },
      {
        q: 'What do min-width queries express?',
        options: ['Enhancements that apply at and above a width band', 'Styles for print only', 'Styles that delete markup', 'Network speed tests'],
        answer: 0,
        explanation: 'Step 1: Feature tests width. Step 2: Min means at least. Step 3: Rules add upward. Step 4: Base stays mobile.'
      },
      {
        q: 'Why prefer content led breakpoints?',
        options: ['Devices never change', 'Pixels are illegal', 'Layouts morph where strain appears rather than at arbitrary device pixels', 'Grids forbid queries'],
        answer: 2,
        explanation: 'Step 1: Content varies. Step 2: Strain points differ. Step 3: Device lists age fast. Step 4: Comfort led breaks endure.'
      },
      // Responsive-pattern: mobile first viewport plus bands (original)
      {
        q: 'A layout crushes cards at mid widths. What is the disciplined fix?',
        options: ['Fork separate markup per device', 'Fix widths in pixels forever', 'Remove all styles', 'Add a min-width band that reflows the grid where strain shows'],
        answer: 3,
        explanation: 'Step 1: Strain marks the break. Step 2: Keep markup stable. Step 3: Rewrite template per band. Step 4: Test live across sizes.'
      }
    ]
  },
  // ---------------------------------------------------------------- 25.3
  {
    sectionId: 'web-ch25-s3',
    readingTime: 8,
    intro: 'Web skills can ship truly native feeling apps without learning platform languages. This section explains the learn once bridge that maps shared logic onto native widgets. You will read the entry file, respect the no HTML rule, and style with native friendly sheets.',
    objectives: [
      'Explain shared logic plus native widget mapping clearly',
      'Read the entry file with view, text, and style sheet roles',
      'Respect platform differences while reusing web thinking'
    ],
    concepts: [
      {
        term: 'Learn once principle',
        kind: 'definition',
        statement: 'Learn **once** reuse means shared `JS` logic plus idioms drive both major platforms. One mental model for state plus layout transfers while the toolchain renders truly native `widgets`. Teams ship twice the reach without twice the languages.',
        detail: 'Invest in shared state plus navigation design since those transfer most cleanly across platforms.'
      },
      {
        term: 'Native widget mapping',
        kind: 'definition',
        statement: 'A **bridge** maps shared declarations onto native `View` plus text plus image controls. Pixels are drawn by the platform, not by a browser engine, which preserves feel plus accessibility. The same declaration yields platform true controls per side.',
        detail: 'Prefer provided widgets over custom drawing so feel plus accessibility stay platform true.'
      },
      {
        term: 'Entry file roles',
        kind: 'method',
        statement: 'The **entry** file exports an `App` function returning element trees. `View` boxes contain, `Text` shows strings, and a style `Sheet` holds layout rules. Changing copy hot reloads the running device view for instant feedback.',
        detail: 'Keep the entry small with screen components separate so hot reload stays instant as the app grows.'
      },
      {
        term: 'No HTML rule',
        kind: 'definition',
        statement: 'Platform builds accept no raw **HTML** elements since output is native `code`, not pages. Familiar tag names do not exist here even though JSX `mixing` looks similar. Styling names echo web CSS while running through native layout.',
        detail: 'Translate div thinking into View plus Text plus image widgets and verify on both platforms early.'
      },
      {
        term: 'Expo assisted workflow',
        kind: 'insight',
        statement: 'Assisted **tooling** scaffolds projects plus serves `previews` to devices and emulators. Templates plus scripts hide native build pain while preserving eject paths to full control. Beginners validate ideas on hardware before owning native toolchains.',
        detail: 'Start assisted for speed and eject only when native modules or build control demand it.'
      }
    ],
    figures: [
      {
        caption: 'Shared declaration to native controls: one tree maps to platform widgets per operating system.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="React Native bridge mapping" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">one tree, native pixels</text><rect x="36" y="60" width="200" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="12" font-weight="700" fill="currentColor">shared tree</text><text x="52" y="108" font-size="11" fill="currentColor">View + Text</text><text x="52" y="128" font-size="11" fill="currentColor">Sheet styles</text><text x="52" y="148" font-size="11" fill="currentColor">JS logic</text><rect x="284" y="60" width="152" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="300" y="86" font-size="12" font-weight="700" fill="currentColor">bridge</text><text x="300" y="108" font-size="11" fill="currentColor">maps</text><text x="300" y="128" font-size="11" fill="currentColor">per OS</text><text x="300" y="148" font-size="11" fill="currentColor">no HTML</text><rect x="484" y="60" width="200" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="500" y="86" font-size="12" font-weight="700" fill="currentColor">native widgets</text><text x="500" y="108" font-size="11" fill="currentColor">true controls</text><text x="500" y="128" font-size="11" fill="currentColor">feel + access</text><text x="500" y="148" font-size="11" fill="currentColor">per platform</text><line x1="236" y1="115" x2="284" y2="115" stroke="currentColor" stroke-width="2"/><line x1="436" y1="115" x2="484" y2="115" stroke="currentColor" stroke-width="2"/><rect x="36" y="186" width="648" height="146" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="212" font-size="12" fill="currentColor">entry exports App tree, edits reload live</text><text x="52" y="234" font-size="12" fill="currentColor">View contains, Text shows, Sheet styles</text><text x="52" y="256" font-size="12" fill="currentColor">names echo CSS, engine is native</text><text x="52" y="278" font-size="12" fill="currentColor">assisted tools preview on hardware fast</text><text x="52" y="300" font-size="12" fill="currentColor">eject only for native control needs</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Read the hello world entry',
        problem: 'A newcomer opens the generated entry and must map each import to its UI job.',
        steps: [
          { label: 'Step 1: Map the imports', text: '```js\nimport { StatusBar } from \"expo-status-bar\";\nimport { StyleSheet, Text, View } from \"react-native\";\n```\nStatus plus layout plus text widgets arrive from assisted and native libraries.' },
          { label: 'Step 2: Read the tree', text: 'View centers children while Text shows the greeting and StatusBar tunes the top bar. The App function returns this tree for the runtime to mount.' },
          { label: 'Step 3: Edit and watch', text: 'Change the greeting text and see the device preview refresh without rebuilds. Instant feedback confirms the entry wiring.' }
        ],
        result: 'Entry roles click: container, text, style, and status each have one clear owner.'
      },
      {
        title: 'Translate a web card to native',
        problem: 'A web card built from divs plus headings must become native widgets without losing layout intent.',
        steps: [
          { label: 'Step 1: Swap the elements', text: '```js\n// web: div.card > h1 + p\n// native: View(style.card) > Text(style.title) + Text(style.body)\n```\nViews replace generic boxes while Text replaces all text bearing tags.' },
          { label: 'Step 2: Port the styles', text: 'Move flex plus alignment plus spacing into the style sheet with native supported props. Names feel familiar though the engine differs.' },
          { label: 'Step 3: Test both sides', text: 'Preview on both platform emulators since spacing plus fonts diverge slightly. Adjust shared styles until both feel native.' }
        ],
        result: 'The card looks platform true on both systems from one shared declaration.'
      }
    ],
    keyTakeaways: [
      'Shared logic plus idioms drive both platforms from one mental model.',
      'Bridges map declarations to true native widgets, not browser pixels.',
      'Entry trees use View plus Text plus sheets with live reload feedback.',
      'No raw HTML exists here despite similar mixing syntax.'
    ],
    quiz: [
      {
        q: 'What does learn once mean here?',
        options: ['Write once run as a web page only', 'Shared logic plus idioms ship to both platforms as native widgets', 'No learning is needed', 'Only one platform is supported'],
        answer: 1,
        explanation: 'Step 1: Logic shares. Step 2: Idioms transfer. Step 3: Toolchain maps per OS. Step 4: Reach doubles without new languages.'
      },
      {
        q: 'Why do apps feel native despite shared code?',
        options: ['The bridge renders platform true widgets per OS', 'They embed desktop browsers', 'They use larger fonts', 'They disable touch'],
        answer: 0,
        explanation: 'Step 1: Output targets widgets. Step 2: Platforms draw them. Step 3: Feel plus access inherit. Step 4: Shared code stays invisible.'
      },
      {
        q: 'What happens when you edit the entry greeting?',
        options: ['Nothing until store review', 'The database resets', 'The device preview reloads live with the new text', 'All styles delete'],
        answer: 2,
        explanation: 'Step 1: Entry mounts the tree. Step 2: Tooling watches files. Step 3: Edits push live. Step 4: Feedback is instant.'
      },
      // Bridge-pattern: shared tree to native mapping (original)
      {
        q: 'A web div hierarchy must move to native. What is the correct translation?',
        options: ['Keep div tags unchanged', 'Inline everything as pixels', 'Delete all text', 'Map boxes to View and text to Text with sheet styles'],
        answer: 3,
        explanation: 'Step 1: HTML tags lack native targets. Step 2: View boxes contain. Step 3: Text shows strings. Step 4: Sheets hold layout.'
      }
    ]
  },
  // ---------------------------------------------------------------- 25.4
  {
    sectionId: 'web-ch25-s4',
    readingTime: 7,
    intro: 'Ideas become apps when they run on hardware and pass store gates. This section initializes projects, previews on emulators and devices, and builds release bundles. You will run the script set confidently and package for publishing without mystery.',
    objectives: [
      'Initialize projects and read the generated file map',
      'Preview on emulators, browsers, and hardware efficiently',
      'Build release bundles and approach store publishing cleanly'
    ],
    concepts: [
      {
        term: 'Init and file map',
        kind: 'definition',
        statement: 'Project **init** scaffolds config plus `assets` plus entry plus package manifests. Assets hold media, entry boots the tree, and manifests pin `dependencies` plus scripts. Reading the map first prevents edits in generated corners.',
        detail: 'Inspect entry plus manifest plus config before adding screens so generated wiring stays intact.'
      },
      {
        term: 'Script set',
        kind: 'method',
        statement: 'Npm **scripts** alias `start` plus platform previews plus eject. Start serves the tool UI, platform flags open matching `emulators`, and web preview runs in a browser tab. One vocabulary drives every preview surface.',
        detail: 'Learn start plus platform flags first since they cover daily preview loops end to end.'
      },
      {
        term: 'Emulators versus hardware',
        kind: 'method',
        statement: 'An **emulator** mimics a device on the `workstation` for fast layout checks. Real `hardware` reveals touch plus sensors plus performance truth that emulation approximates. Use emulators for speed and hardware for sign off.',
        detail: 'Pass layout on emulators then confirm gestures plus load on real devices before release.'
      },
      {
        term: 'Build pipeline',
        kind: 'method',
        statement: 'Release **builds** bundle JS plus assets into signed `packages` per store. Versioned manifests plus icons plus splash plus permissions feed the packager, which outputs installable artifacts. Separate debug and release configs to avoid leaking dev settings.',
        detail: 'Bump versions per release and audit permissions plus secrets before packaging for stores.'
      },
      {
        term: 'Store publishing path',
        kind: 'insight',
        statement: 'Store **publishing** adds review plus listings plus `rollout` control beyond the binary. Screenshots plus descriptions plus categories face human gates, while staged rollouts limit blast radius. Web previews never face this gate, which explains timeline gaps.',
        detail: 'Prepare listings plus test accounts early since review queues dwarf build times.'
      }
    ],
    figures: [
      {
        caption: 'From init to store: scaffold, preview on emulator and hardware, bundle release, and publish with rollout.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mobile build and publish pipeline" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">idea to installable app</text><rect x="36" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="12" font-weight="700" fill="currentColor">1 init</text><text x="52" y="108" font-size="11" fill="currentColor">scaffold</text><text x="52" y="128" font-size="11" fill="currentColor">map files</text><rect x="200" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="216" y="86" font-size="12" font-weight="700" fill="currentColor">2 preview</text><text x="216" y="108" font-size="11" fill="currentColor">emulator</text><text x="216" y="128" font-size="11" fill="currentColor">hardware</text><rect x="364" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="380" y="86" font-size="12" font-weight="700" fill="currentColor">3 bundle</text><text x="380" y="108" font-size="11" fill="currentColor">versioned</text><text x="380" y="128" font-size="11" fill="currentColor">signed</text><rect x="528" y="60" width="156" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="544" y="86" font-size="12" font-weight="700" fill="currentColor">4 publish</text><text x="544" y="108" font-size="11" fill="currentColor">review</text><text x="544" y="128" font-size="11" fill="currentColor">rollout</text><line x1="186" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="2"/><line x1="350" y1="100" x2="364" y2="100" stroke="currentColor" stroke-width="2"/><line x1="514" y1="100" x2="528" y2="100" stroke="currentColor" stroke-width="2"/><rect x="36" y="156" width="648" height="176" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="182" font-size="12" fill="currentColor">cmds: start + platform flags drive previews</text><text x="52" y="204" font-size="12" fill="currentColor">emulators for speed, hardware for truth</text><text x="52" y="226" font-size="12" fill="currentColor">debug versus release configs stay separate</text><text x="52" y="248" font-size="12" fill="currentColor">listings + test accounts ready early</text><text x="52" y="270" font-size="12" fill="currentColor">stage rollouts to bound bad releases</text><text x="52" y="292" font-size="12" fill="currentColor">web preview instant, store review queued</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Start a project and preview it',
        problem: 'A team must scaffold an app and see it on an emulator plus a browser on day one.',
        steps: [
          { label: 'Step 1: Scaffold and inspect', text: '```bash\nnpm install --global expo-cli\nnpx expo init hello-world\n```\nGlobal tooling plus init create the mapped project with entry and manifests.' },
          { label: 'Step 2: Serve the tool UI', text: '```bash\nnpm start\n```\nStart opens the tool UI where emulator and device targets launch.' },
          { label: 'Step 3: Preview widely', text: 'Run platform flags for emulators and the web flag for a browser tab. Layout verified in three places beats hope in one.' }
        ],
        result: 'The scaffold runs on emulator, hardware, and browser from one script vocabulary.'
      },
      {
        title: 'Package a release candidate',
        problem: 'A demo must become a versioned signed bundle ready for review without dev leftovers.',
        steps: [
          { label: 'Step 1: Freeze the manifest', text: '```js\n// app config: name, version 1.0.0, icon, splash, permissions\n// scripts: start, android, ios, web, eject\n```\nVersion plus assets plus scripts declare the release contract.' },
          { label: 'Step 2: Bundle per platform', text: 'Build signed packages with release config only, confirming no dev URLs or keys ship. Install the artifacts on hardware for final checks.' },
          { label: 'Step 3: Submit staged', text: 'Upload with listings plus test accounts and roll out to a small cohort first. Monitor crashes before widening.' }
        ],
        result: 'A clean versioned bundle enters review with staged safety and complete listings.'
      }
    ],
    keyTakeaways: [
      'Init maps entry, assets, manifests, and scripts for oriented edits.',
      'One script vocabulary previews across emulators, hardware, and web.',
      'Emulators optimize speed while hardware owns truth for sign off.',
      'Versioned signed bundles plus staged rollouts make publishing safe.'
    ],
    quiz: [
      {
        q: 'What should you read right after init?',
        options: ['Random cache files', 'Entry plus manifests plus config to learn the map', 'Only image binaries', 'Nothing, start deleting'],
        answer: 1,
        explanation: 'Step 1: Scaffold creates many files. Step 2: Entry boots the app. Step 3: Manifests pin deps plus scripts. Step 4: The map guides safe edits.'
      },
      {
        q: 'Why preview on both emulator and hardware?',
        options: ['Emulators give speed while hardware reveals touch plus sensor plus perf truth', 'Emulators are slower always', 'Hardware cannot run apps', 'Emulators replace all testing'],
        answer: 0,
        explanation: 'Step 1: Emulators boot fast. Step 2: They approximate hardware. Step 3: Real devices differ. Step 4: Both together cover speed plus truth.'
      },
      {
        q: 'What separates release bundles from debug runs?',
        options: ['Bundle color', 'Larger fonts', 'Versioned signed packages with release config and no dev leftovers', 'Fewer screens'],
        answer: 2,
        explanation: 'Step 1: Debug favors speed. Step 2: Release needs identity. Step 3: Signing plus versions gate stores. Step 4: Clean configs prevent leaks.'
      },
      // Publish-pattern: scaffold preview bundle publish flow (original)
      {
        q: 'Why do store releases lag web previews?',
        options: ['Stores use slower networks', 'Bundles cannot be staged', 'Web previews need review too', 'Review queues plus listings plus staged rollouts add gates beyond the binary'],
        answer: 3,
        explanation: 'Step 1: Web deploys instantly. Step 2: Stores review content. Step 3: Listings need approval. Step 4: Staged rollouts pace exposure.'
      }
    ]
  }
]

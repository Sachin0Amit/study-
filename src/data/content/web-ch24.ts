import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 24: Web Architectures
// Sections web-ch24-s1 through web-ch24-s4. Master study content.
// Based on Rheinwerk Full Stack Web Development Guide Chapter 12.
// ============================================================================

export const webCh24Content: SectionContent[] = [
  // ---------------------------------------------------------------- 24.1
  {
    sectionId: 'web-ch24-s1',
    readingTime: 8,
    intro: 'Every web app splits work between what you see and what persists, but the lines can be drawn in many places. This section layers presentation, logic, persistence, and data so each owns one job. You will place classic server rendering and modern client rendering on the same layered map.',
    objectives: [
      'Name the four classic layers and their single responsibilities',
      'Contrast two tier client server with multi tier decompositions',
      'Place classic versus modern rendering on the layered map'
    ],
    concepts: [
      {
        term: 'Four classic layers',
        kind: 'definition',
        statement: 'A **layered** design stacks `presentation` plus logic plus persistence plus data with downward calls only. Presentation owns look plus input, logic owns calculations plus rules, persistence owns database access, and data owns `storage`. Each layer hides its internals behind a narrow contract.',
        detail: 'Enforce downward calls and mock lower layers to test upper layers in isolation.'
      },
      {
        term: 'Client server core',
        kind: 'definition',
        statement: 'The **two tier** core splits `client` frontend from central `server` backend over a network protocol. Clients ask, servers process with files or databases, and answers return to the asker. Either side may itself be layered further without breaking the contract.',
        detail: 'Keep the protocol boundary explicit so web, mobile, and script clients can share one server.'
      },
      {
        term: 'Multi tier growth',
        kind: 'method',
        statement: 'Multi **tier** growth subdivides client plus `server` into finer physical or logical units. Classic apps split the server into presentation plus business plus persistence plus data, while modern apps move much presentation to the `client`. More tiers add clarity at the cost of more hops.',
        detail: 'Add tiers only when a layer strains ownership and measure hop latency after each split.'
      },
      {
        term: 'Classic versus modern placement',
        kind: 'insight',
        statement: 'Classic **rendering** builds HTML on the `server` with templates while modern rendering builds it in the `browser` from data. The book shows presentation sliding clientward as single page apps mature, with JSON or markup crossing the wire accordingly. Architecture diagrams must state where HTML birth happens.',
        detail: 'Label who builds HTML in every diagram since caching, SEO, and interactivity all hinge on that choice.'
      },
      {
        term: 'Peer contrast',
        kind: 'definition',
        statement: 'A **peer** design gives every `node` equal client plus server duties with direct links. No central server exists, which contrasts sharply with the central `server` of client server designs. Web apps rarely choose this shape but should recognize it when integrating decentralized pieces.',
        detail: 'Reserve peer shapes for decentralized sync and keep request response discipline for classic web features.'
      }
    ],
    figures: [
      {
        caption: 'Layered map: presentation, logic, persistence, and data with classic server rendering versus modern client rendering.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Layered and client server architecture" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">layers with downward calls</text><rect x="36" y="60" width="300" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="90" font-size="12" font-weight="700" fill="currentColor">presentation: UI + input</text><rect x="36" y="116" width="300" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="146" font-size="12" font-weight="700" fill="currentColor">logic: rules + calc</text><rect x="36" y="172" width="300" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="202" font-size="12" font-weight="700" fill="currentColor">persistence: db access</text><rect x="36" y="228" width="300" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="258" font-size="12" font-weight="700" fill="currentColor">data: storage</text><rect x="372" y="60" width="312" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="388" y="86" font-size="12" font-weight="700" fill="currentColor">classic: HTML on server</text><text x="388" y="108" font-size="11" fill="currentColor">templates + data to page</text><text x="388" y="130" font-size="11" fill="currentColor">browser renders answer</text><text x="388" y="150" font-size="11" fill="currentColor">thin client</text><rect x="372" y="180" width="312" height="98" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="388" y="206" font-size="12" font-weight="700" fill="currentColor">modern: HTML in browser</text><text x="388" y="228" font-size="11" fill="currentColor">JSON data to app</text><text x="388" y="250" font-size="11" fill="currentColor">thick client builds view</text><line x1="186" y1="110" x2="186" y2="116" stroke="currentColor" stroke-width="2"/><line x1="186" y1="166" x2="186" y2="172" stroke="currentColor" stroke-width="2"/><line x1="186" y1="222" x2="186" y2="228" stroke="currentColor" stroke-width="2"/><text x="36" y="306" font-size="12" fill="currentColor">calls flow down only, peers differ: equal nodes</text><text x="36" y="328" font-size="12" fill="currentColor">state HTML birthplace on every diagram</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Layer a contacts app',
        problem: 'A contacts app mixes SQL inside button handlers and must gain testable boundaries.',
        steps: [
          { label: 'Step 1: Assign the four jobs', text: '```js\n// presentation: form + list rendering\n// logic: validateContact(contact)\n// persistence: contactStore.save(contact)\n// data: contacts table\n```\nEach job names its owner so SQL leaves the button handler.' },
          { label: 'Step 2: Enforce direction', text: 'Presentation calls logic, logic calls persistence, and persistence touches data. No layer reaches upward for shortcuts.' },
          { label: 'Step 3: Test by layer', text: 'Mock the store to test validation and mock the table to test the store. Failures point at one layer instead of the whole app.' }
        ],
        result: 'Button code renders and delegates while rules and storage evolve independently with passing tests.'
      },
      {
        title: 'Place rendering for a marketing site',
        problem: 'A marketing site debates server templates versus a client app and needs the tradeoff stated plainly.',
        steps: [
          { label: 'Step 1: Map classic flow', text: '```bash\nbrowser asks -> server templates HTML -> browser paints\n# best for content heavy, SEO sensitive pages\n```\nHTML birth on the server favors first paint and indexing.' },
          { label: 'Step 2: Map modern flow', text: '```bash\nbrowser app asks -> server sends JSON -> app builds HTML\n# best for interactive dashboards after login\n```\nHTML birth in the browser favors rich interaction after data arrives.' },
          { label: 'Step 3: Choose per surface', text: 'Render marketing pages classically and the app shell modernly behind login. One map holds both without dogma.' }
        ],
        result: 'Each surface renders where its strengths matter with the boundary drawn on purpose.'
      }
    ],
    keyTakeaways: [
      'Four layers separate interface, rules, access, and storage with downward calls.',
      'Two tier client server centers on a protocol boundary sharable by many clients.',
      'Multi tier growth clarifies ownership at the price of extra hops.',
      'Diagrams must state where HTML is born to reason about cache and SEO.'
    ],
    quiz: [
      {
        q: 'What does the persistence layer own?',
        options: ['Pixel colors and fonts', 'Database access behind a narrow contract', 'TLS certificates', 'DNS records'],
        answer: 1,
        explanation: 'Step 1: Layers split jobs. Step 2: Presentation owns UI. Step 3: Logic owns rules. Step 4: Persistence abstracts database access.'
      },
      {
        q: 'What defines the two tier core?',
        options: ['Four databases', 'Client frontend plus central server backend over a protocol', 'Only peer nodes', 'No network at all'],
        answer: 1,
        explanation: 'Step 1: Two parts exist. Step 2: Client asks. Step 3: Server processes and answers. Step 4: Protocol joins them.'
      },
      {
        q: 'How do classic and modern rendering differ?',
        options: ['Classic builds HTML on the server, modern builds it in the browser from data', 'They are identical', 'Modern forbids servers', 'Classic forbids browsers'],
        answer: 0,
        explanation: 'Step 1: Both use layers. Step 2: Classic templates on server. Step 3: Modern apps render client side. Step 4: Wire carries pages versus data accordingly.'
      },
      // Layer-pattern: layered responsibility placement (original)
      {
        q: 'SQL lives inside click handlers. What is the layered fix?',
        options: ['Add more SQL to handlers', 'Move rules to logic and access to persistence with downward calls', 'Delete the database', 'Merge all layers into one file'],
        answer: 1,
        explanation: 'Step 1: Handlers own UI only. Step 2: Rules belong to logic. Step 3: Access belongs to persistence. Step 4: Downward calls restore testability.'
      }
    ]
  },
  // ---------------------------------------------------------------- 24.2
  {
    sectionId: 'web-ch24-s2',
    readingTime: 9,
    intro: 'Small teams love one deployable while large products strain against it. This section travels from modular monoliths through service layers to microservices, reusable components, microfrontends, and message brokers. You will match team size, scale needs, and frontend reuse to the right distributed shape.',
    objectives: [
      'Contrast monolith simplicity with distributed scale and cost',
      'Separate service, microservice, component, and microfrontend ideas',
      'Choose messaging via broker versus direct calls deliberately'
    ],
    concepts: [
      {
        term: 'Modular monolith',
        kind: 'definition',
        statement: 'A **monolith** ships one `deployable` unit with layered code inside. One build plus one environment keeps early delivery fast, while growth risks tangled dependencies and single stack lock in. Modularity inside delays the pain without adding network cost.',
        detail: 'Keep internal module boundaries strict and deploy as one unit until scale or team size forces a split.'
      },
      {
        term: 'Service layer and gateway',
        kind: 'definition',
        statement: 'A **service** layer carves reusable `services` behind a `gateway` with a broker for chatter. Teams own services independently and scale hot ones separately, while the gateway routes and the broker decouples. Network plus versioning plus observability become the new price.',
        detail: 'Introduce services per bounded capability with versioned contracts and gateway routing from day one.'
      },
      {
        term: 'Microservices at scale',
        kind: 'method',
        statement: 'Micro **services** push smallness plus independent `data` ownership to the limit for extreme scale. Each unit scales out with load balancing and deploys alone, which suits streaming scale products. Dozens of units demand serious platform maturity most small apps lack.',
        detail: 'Adopt micro units only when independent scaling plus team autonomy outweigh the heavy platform cost.'
      },
      {
        term: 'Components and microfrontends',
        kind: 'definition',
        statement: 'Reusable **components** share UI widgets across apps while `microfrontends` split the interface by feature with backend mates. Component reuse via web components or frameworks cuts duplication, while feature slices enable independent `frontend` deploys. One reuses pieces, the other reuses delivery independence.',
        detail: 'Share widgets as components first and split delivery by feature only when teams collide on release trains.'
      },
      {
        term: 'Messaging versus direct calls',
        kind: 'method',
        statement: 'A **broker** routes `messages` centrally to cut direct dependencies while point to point calls couple callers to callees. Brokers ease extension with new consumers at the cost of infra plus latency, while direct calls stay simple but tangle as channels multiply. Service designs favor brokers while tiny systems favor directness.',
        detail: 'Count channels before choosing since broker overhead pays off only as direct links multiply.'
      }
    ],
    figures: [
      {
        caption: 'From one deployable to distributed fleets: monolith, services with gateway, and feature sliced microfrontends.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Monolith versus services versus microfrontends" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">scale shapes by team and load</text><rect x="36" y="60" width="200" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="12" font-weight="700" fill="currentColor">monolith: one unit</text><text x="52" y="108" font-size="11" fill="currentColor">fast early</text><text x="52" y="128" font-size="11" fill="currentColor">tangles late</text><text x="52" y="148" font-size="11" fill="currentColor">one stack</text><rect x="252" y="60" width="216" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="268" y="86" font-size="12" font-weight="700" fill="currentColor">services + gateway</text><text x="268" y="108" font-size="11" fill="currentColor">own deploys</text><text x="268" y="128" font-size="11" fill="currentColor">own data</text><text x="268" y="148" font-size="11" fill="currentColor">broker decouples</text><rect x="484" y="60" width="200" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="500" y="86" font-size="12" font-weight="700" fill="currentColor">microfrontends</text><text x="500" y="108" font-size="11" fill="currentColor">split by feature</text><text x="500" y="128" font-size="11" fill="currentColor">ship UI alone</text><text x="500" y="148" font-size="11" fill="currentColor">mates to service</text><rect x="36" y="186" width="648" height="146" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="212" font-size="12" fill="currentColor">web service: reachable over web protocols + formats</text><text x="52" y="234" font-size="12" fill="currentColor">direct calls simple, broker scales channels</text><text x="52" y="256" font-size="12" fill="currentColor">components reuse widgets, slices reuse delivery</text><text x="52" y="278" font-size="12" fill="currentColor">small team: monolith, large scale: services</text><text x="52" y="300" font-size="12" fill="currentColor">count teams + load before splitting</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Stay monolithic with discipline',
        problem: 'A five person team ships a shop and fears premature service sprawl will stall features.',
        steps: [
          { label: 'Step 1: Modularize inside', text: '```js\n// catalog module, orders module, users module\n// each with logic plus store, no cross imports\n```\nStrict module walls give service like clarity without network hops.' },
          { label: 'Step 2: Ship one unit', text: 'One build plus one deploy keeps environments and rollbacks trivial. Observability stays single pane while velocity stays high.' },
          { label: 'Step 3: Name the split trigger', text: 'Record that sustained team collision or hot catalog scaling forces extraction. Until measures trip, the monolith remains the honest choice.' }
        ],
        result: 'Features ship fast with clear internals and a written trigger for future extraction.'
      },
      {
        title: 'Split checkout for scale',
        problem: 'Checkout saturates a shop monolith on sale days while catalog idles, and teams block each other.',
        steps: [
          { label: 'Step 1: Carve the capability', text: '```bash\n# gateway routes /checkout to checkout service\n# checkout owns its data plus queue\n```\nGateway plus owned data let checkout scale and deploy alone.' },
          { label: 'Step 2: Decouple with messages', text: 'Orders emit events to a broker for mail plus analytics consumers. New consumers subscribe without touching checkout code.' },
          { label: 'Step 3: Slice the interface', text: 'Ship checkout UI as a feature slice with its service mate so interface and backend release together. Other surfaces stay untouched.' }
        ],
        result: 'Checkout scales on demand while teams release without trains and consumers extend freely.'
      }
    ],
    keyTakeaways: [
      'Monoliths optimize early speed while risking late coupling and stack lock.',
      'Services trade network and platform cost for independent scale and ownership.',
      'Components reuse widgets while microfrontends reuse independent delivery.',
      'Brokers cut direct dependencies at infrastructure cost worth paying as channels grow.'
    ],
    quiz: [
      {
        q: 'What is the main early advantage of a monolith?',
        options: ['Infinite independent scaling', 'Single build plus single environment with minimal deploy cost', 'Automatic team autonomy', 'Free message routing'],
        answer: 1,
        explanation: 'Step 1: One unit ships. Step 2: One env configures. Step 3: Deploys stay trivial. Step 4: Speed dominates early.'
      },
      {
        q: 'What new costs arrive with services?',
        options: ['Network hops plus versioning plus observability across units', 'Fewer deploys ever', 'No need for contracts', 'Smaller codebases with zero ops'],
        answer: 0,
        explanation: 'Step 1: Calls cross networks. Step 2: Contracts version. Step 3: Failures need tracing. Step 4: Platform maturity becomes mandatory.'
      },
      {
        q: 'How do microfrontends differ from shared components?',
        options: ['They are identical', 'Components share widgets while slices split interface by feature for independent delivery', 'Slices forbid reuse', 'Components forbid frameworks'],
        answer: 1,
        explanation: 'Step 1: Components are pieces. Step 2: Slices are delivery units. Step 3: Pieces cut duplication. Step 4: Slices cut release coupling.'
      },
      // Service-pattern: monolith versus service tradeoff (original)
      {
        q: 'A tiny team with modest traffic asks for dozens of microservices. What is the principled answer?',
        options: ['Build them all immediately', 'Stay modular monolithic until team or scale measures force extraction', 'Delete all tests to fund services', 'Split the frontend only'],
        answer: 1,
        explanation: 'Step 1: Count teams and load. Step 2: Weigh platform cost. Step 3: Modularity gives clarity cheaply. Step 4: Split only on tripped triggers.'
      }
    ]
  },
  // ---------------------------------------------------------------- 24.3
  {
    sectionId: 'web-ch24-s3',
    readingTime: 8,
    intro: 'Views must show data without gluing themselves to storage details. This section separates model, view, and their mediators across three classic patterns. You will trace user input through controller, presenter, and view model shapes and pick the decoupling your framework expects.',
    objectives: [
      'Separate model state from view presentation in all three patterns',
      'Trace input flow through controller, presenter, and view model',
      'Map classic server versus modern client placements correctly'
    ],
    concepts: [
      {
        term: 'Shared model and view',
        kind: 'definition',
        statement: 'The **model** holds data plus rules while the `view` renders state plus captures input. All three patterns keep this split so one model can feed many presentations. Testing and redesign both improve once storage stops dictating pixels.',
        detail: 'Model pure data plus rules with no widget imports so views can be swapped without touching state.'
      },
      {
        term: 'Controller mediation',
        kind: 'definition',
        statement: 'A **controller** coordinates via routing plus `validation` plus model updates plus view selection. Users touch the view, the controller checks input, mutates the model, and picks the next `template`. Views may still observe models directly in this looser coupling.',
        detail: 'Route to one controller per action and keep view picking plus validation inside it, not in templates.'
      },
      {
        term: 'Presenter strictness',
        kind: 'method',
        statement: 'A **presenter** enforces full separation where `view` never touches `model`. All talk flows through the presenter, which also pushes model changes back to the display. The extra rigor eases isolated testing at the cost of more mediator code.',
        detail: 'Hide the model behind presenter methods and assert view behavior through presenter doubles in tests.'
      },
      {
        term: 'View model binding',
        kind: 'definition',
        statement: 'A **view model** exposes bindable `fields` mirroring editable widgets with two way `binding`. Typing in a box updates the field while code changes to the field repaint the box automatically. One binding declaration replaces manual sync code both ways.',
        detail: 'Bind each editable widget once and keep formatting plus validation in the view model, not in handlers.'
      },
      {
        term: 'Classic versus modern homes',
        kind: 'insight',
        statement: 'Classic **placement** hosts the trio on the `server` with routing plus template engines answering requests. Modern **placement** moves the trio into the `browser` as apps fetch data and patch the document interface. The pattern travels while the network boundary shifts.',
        detail: 'State where the trio lives in each feature since data fetching plus rendering strategies follow that home.'
      }
    ],
    figures: [
      {
        caption: 'Three mediators compared: controller routing, presenter isolation, and view model two way binding.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MVC MVP MVVM comparison" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">same split, three mediators</text><rect x="36" y="60" width="200" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="12" font-weight="700" fill="currentColor">controller</text><text x="52" y="108" font-size="11" fill="currentColor">routes + checks</text><text x="52" y="128" font-size="11" fill="currentColor">view may watch</text><text x="52" y="148" font-size="11" fill="currentColor">loose link</text><rect x="252" y="60" width="216" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="268" y="86" font-size="12" font-weight="700" fill="currentColor">presenter</text><text x="268" y="108" font-size="11" fill="currentColor">all via mediator</text><text x="268" y="128" font-size="11" fill="currentColor">pushes changes</text><text x="268" y="148" font-size="11" fill="currentColor">strict split</text><rect x="484" y="60" width="200" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="500" y="86" font-size="12" font-weight="700" fill="currentColor">view model</text><text x="500" y="108" font-size="11" fill="currentColor">bindable fields</text><text x="500" y="128" font-size="11" fill="currentColor">two way sync</text><text x="500" y="148" font-size="11" fill="currentColor">declare once</text><rect x="36" y="186" width="648" height="146" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="212" font-size="12" fill="currentColor">model: data + rules, view: pixels + input</text><text x="52" y="234" font-size="12" fill="currentColor">classic home: server trio + templates</text><text x="52" y="256" font-size="12" fill="currentColor">modern home: browser trio + data fetch</text><text x="52" y="278" font-size="12" fill="currentColor">strictness rises: controller to presenter</text><text x="52" y="300" font-size="12" fill="currentColor">binding removes manual sync code</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Route a classic form submission',
        problem: 'A contact form posts to the server and must validate, store, and render the next page cleanly.',
        steps: [
          { label: 'Step 1: Route to control', text: '```js\n// router matches POST /contacts to contactController.create\n// controller validates, updates model, picks template\n```\nRouting selects the mediator from URL plus method plus headers.' },
          { label: 'Step 2: Validate and update', text: 'The controller rejects bad input with the form view plus errors and persists good input to the model. Views never write storage directly.' },
          { label: 'Step 3: Render via template', text: 'A template engine merges view markup with model data into HTML for the response. The client paints the answered page.' }
        ],
        result: 'Form flow stays ordered with validation plus storage plus rendering each in its home.'
      },
      {
        title: 'Bind an editor without sync spaghetti',
        problem: 'A profile editor copies field values back and forth manually and drifts out of sync.',
        steps: [
          { label: 'Step 1: Expose bindable fields', text: '```js\nconst profileVM = { name: \"Ada\", city: \"Berlin\" };\nbind(inputName, profileVM, \"name\");\n```\nEach widget maps once to a view model field.' },
          { label: 'Step 2: Type both ways', text: 'User edits update fields while code updates repaint widgets automatically. No handler copies values either direction.' },
          { label: 'Step 3: Validate centrally', text: 'Rules live on the view model so both typed and programmatic changes face identical checks. The view stays thin and honest.' }
        ],
        result: 'Editor state stays single sourced with sync declared once instead of copied everywhere.'
      }
    ],
    keyTakeaways: [
      'Models own data plus rules while views own pixels plus input in all variants.',
      'Controllers route and validate with looser view to model links.',
      'Presenters isolate strictly with all traffic through the mediator.',
      'View models replace manual sync with declared two way bindings.'
    ],
    quiz: [
      {
        q: 'What does the model own across all three patterns?',
        options: ['Button colors only', 'Data plus business rules independent of presentation', 'HTTP headers only', 'Image pixels only'],
        answer: 1,
        explanation: 'Step 1: Split is the goal. Step 2: State plus rules group together. Step 3: Pixels stay in views. Step 4: Hence models stay UI free.'
      },
      {
        q: 'How does a presenter differ from a classic controller?',
        options: ['It forbids direct view to model contact and pushes changes itself', 'It removes all code', 'It merges view and model', 'It deletes routing'],
        answer: 0,
        explanation: 'Step 1: Controllers allow some direct links. Step 2: Presenters close them. Step 3: All talk crosses the mediator. Step 4: Tests isolate more cleanly.'
      },
      {
        q: 'What does two way binding buy an editor?',
        options: ['Manual copying in every handler', 'No validation ever', 'Automatic sync both ways from one declaration', 'Larger image files'],
        answer: 2,
        explanation: 'Step 1: Widgets mirror fields. Step 2: Typing updates fields. Step 3: Field writes repaint widgets. Step 4: One binding replaces sync code.'
      },
      // MV-pattern: mediator selection by strictness (original)
      {
        q: 'A team needs maximal view isolation for testing. Which mediator fits?',
        options: ['Direct SQL in templates', 'Random global state', 'No mediator at all', 'Presenter with all view model traffic through it'],
        answer: 3,
        explanation: 'Step 1: Goal is isolation. Step 2: Controllers allow some links. Step 3: Presenters forbid direct contact. Step 4: Therefore presenters maximize test seams.'
      }
    ]
  },
  // ---------------------------------------------------------------- 24.4
  {
    sectionId: 'web-ch24-s4',
    readingTime: 7,
    intro: 'Good architectures are written down before they are debated. This section records decisions with context, options, consequences, and reversibility so future teams understand the why. You will write short decision records with fitness checks that warn when assumptions rot.',
    objectives: [
      'Write concise records with context, options, and consequences',
      'Judge reversibility to size process versus speed correctly',
      'Define fitness checks that signal when to revisit a choice'
    ],
    concepts: [
      {
        term: 'Decision record shape',
        kind: 'definition',
        statement: 'A **record** captures title plus `context` plus options plus decision plus `consequences` in one page. Context states forces, options weigh at least two roads, and consequences own the tradeoffs. Future readers learn why without excavating chat history.',
        detail: 'Keep each record to one page with dated status so the log stays readable as it grows.'
      },
      {
        term: 'Options with tradeoffs',
        kind: 'method',
        statement: 'Strong **options** compare at least `two` roads on cost plus latency plus `complexity`. Naming the road not taken preserves honesty about what was sacrificed. Reviewers trust choices whose downsides are stated plainly.',
        detail: 'Score each option on the same three axes so comparisons stay fair across records.'
      },
      {
        term: 'Reversibility sizing',
        kind: 'method',
        statement: 'Reversible **choices** deserve lightweight `notes` while one way doors deserve prototypes plus reviews. A library swap reverses in an afternoon while a data split does not. Sizing process to reversibility keeps speed where safe and rigor where stuck.',
        detail: 'Label each decision reversible or one way and match ceremony to that label explicitly.'
      },
      {
        term: 'Fitness checks preview',
        kind: 'definition',
        statement: 'A **fitness** check watches a `metric` that guards the decision over time. Latency budgets plus error rates plus deploy pain signal when assumptions rot. Tripped checks reopen the record instead of letting drift harden into folklore.',
        detail: 'Attach one numeric guard per record with owner plus review date for automatic revisit.'
      },
      {
        term: 'Living log discipline',
        kind: 'insight',
        statement: 'A **living** log stays beside `code` with numbered entries plus superseded links. New records link prior ones they refine or reverse, which turns history into a chain rather than a pile. Teams onboard by reading the log instead of interrogating elders.',
        detail: 'Number records sequentially and link supersedes relations so the chain tells the story.'
      }
    ],
    figures: [
      {
        caption: 'Decision record lifecycle: propose options, size by reversibility, record consequences, and guard with fitness checks.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture decision record lifecycle" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">write the why, guard the what</text><rect x="36" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="12" font-weight="700" fill="currentColor">1 context</text><text x="52" y="108" font-size="11" fill="currentColor">forces</text><text x="52" y="128" font-size="11" fill="currentColor">goals</text><rect x="200" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="216" y="86" font-size="12" font-weight="700" fill="currentColor">2 options</text><text x="216" y="108" font-size="11" fill="currentColor">roads + cost</text><text x="216" y="128" font-size="11" fill="currentColor">road not taken</text><rect x="364" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="380" y="86" font-size="12" font-weight="700" fill="currentColor">3 decision</text><text x="380" y="108" font-size="11" fill="currentColor">reversible?</text><text x="380" y="128" font-size="11" fill="currentColor">picked road</text><rect x="528" y="60" width="156" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="544" y="86" font-size="12" font-weight="700" fill="currentColor">4 guard</text><text x="544" y="108" font-size="11" fill="currentColor">metric</text><text x="544" y="128" font-size="11" fill="currentColor">revisit date</text><line x1="186" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="2"/><line x1="350" y1="100" x2="364" y2="100" stroke="currentColor" stroke-width="2"/><line x1="514" y1="100" x2="528" y2="100" stroke="currentColor" stroke-width="2"/><rect x="36" y="156" width="648" height="176" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="182" font-size="12" fill="currentColor">one page, dated status, numbered chain</text><text x="52" y="204" font-size="12" fill="currentColor">consequences own tradeoffs openly</text><text x="52" y="226" font-size="12" fill="currentColor">light notes for reversible, review for one way</text><text x="52" y="248" font-size="12" fill="currentColor">superseded links keep history honest</text><text x="52" y="270" font-size="12" fill="currentColor">tripped guard reopens the record</text><text x="52" y="292" font-size="12" fill="currentColor">log lives beside code, not in chat</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Record staying monolithic',
        problem: 'A team must defend one deployable today while keeping the door open for services later.',
        steps: [
          { label: 'Step 1: Frame context and options', text: '```bash\n# context: five devs, modest traffic, sale spikes\n# options: modular monolith vs checkout service now\n```\nForces plus roads make the debate concrete.' },
          { label: 'Step 2: Decide with consequences', text: 'Pick modular monolith for speed while owning coupling risk plus extraction cost later. Name checkout scale as the known limit.' },
          { label: 'Step 3: Guard the bet', text: 'Set fitness guards on deploy lead time plus checkout latency plus team collision count. Trips reopen the record toward extraction.' }
        ],
        result: 'The log defends today with honesty and triggers tomorrow without drama.'
      },
      {
        title: 'Revisit on tripped guard',
        problem: 'Checkout latency trips its guard during a sale and the old record must guide action, not blame.',
        steps: [
          { label: 'Step 1: Read the chain', text: '```js\n// ADR-07 modular monolith, guard: checkout p95 under 400ms\n// tripped during sale, link to ADR-12 extraction proposal\n```\nNumbers plus links replace memory and opinion.' },
          { label: 'Step 2: Propose the reversal', text: 'Draft extraction of checkout with gateway plus owned data plus broker events. Cite the tripped metric as the reason, not urgency.' },
          { label: 'Step 3: Supersede cleanly', text: 'Mark the old record superseded with a forward link and date the new guard review. History stays a chain of reasons.' }
        ],
        result: 'The team extracts with context intact and a fresh guard watching the new shape.'
      }
    ],
    keyTakeaways: [
      'One page records hold context, options, decision, and consequences.',
      'Stated tradeoffs plus the road not taken build reviewer trust.',
      'Reversibility sizes ceremony from light notes to full reviews.',
      'Numeric fitness guards reopen records before drift hardens.'
    ],
    quiz: [
      {
        q: 'What belongs in a decision record?',
        options: ['Only the final code diff', 'Context plus options plus decision plus consequences with status', 'Only meeting jokes', 'Only vendor logos'],
        answer: 1,
        explanation: 'Step 1: Future teams need why. Step 2: Context states forces. Step 3: Options show roads. Step 4: Consequences own tradeoffs.'
      },
      {
        q: 'How should reversibility shape process?',
        options: ['Light notes for reversible, rigorous review for one way doors', 'Same heavy review for everything', 'No records ever', 'Only verbal agreements'],
        answer: 0,
        explanation: 'Step 1: Reversals differ in cost. Step 2: Cheap reversals need speed. Step 3: Costly ones need rigor. Step 4: Match ceremony to label.'
      },
      {
        q: 'What is a fitness check?',
        options: ['A gym test for developers', 'A font size rule', 'A metric guard that reopens the record when assumptions rot', 'A color palette'],
        answer: 2,
        explanation: 'Step 1: Decisions age. Step 2: Metrics watch them. Step 3: Trips signal rot. Step 4: Records reopen on signal.'
      },
      // Record-pattern: living decision log discipline (original)
      {
        q: 'Why link superseded records instead of deleting them?',
        options: ['To hide mistakes', 'To confuse newcomers', 'To save disk space', 'To keep history as a chain that teaches why roads changed'],
        answer: 3,
        explanation: 'Step 1: Deletion erases why. Step 2: Links preserve chain. Step 3: Newcomers read evolution. Step 4: Trust grows with honest history.'
      }
    ]
  }
]

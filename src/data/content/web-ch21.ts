import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 21: HTTP In Depth
// Sections web-ch21-s1 through web-ch21-s4. Master study content.
// Based on Rheinwerk Full Stack Web Development Guide Chapter 5 point 1.
// ============================================================================

export const webCh21Content: SectionContent[] = [
  // ---------------------------------------------------------------- 21.1
  {
    sectionId: 'web-ch21-s1',
    readingTime: 8,
    intro: 'Every image, style sheet, and data fetch on a page starts life as a Hypertext Transfer Protocol request from client to server. This section dissects the request line, the header block, and the optional body so you can read raw traffic with confidence. You will separate retrieval from submission and recognize the headers that drive routing, identity, and content negotiation.',
    objectives: [
      'Parse the request line into method, target, and protocol version',
      'Classify general, request, and entity headers by their roles',
      'Distinguish bodiless retrieval requests from submission requests that carry a body'
    ],
    concepts: [
      {
        term: 'Request line anatomy',
        kind: 'definition',
        statement: 'The **request line** opens every request with `method` plus target plus protocol version on one line. The method names the action, the target names the path or URL, and the version names the dialect the client speaks. Servers route, authorize, and version negotiate from this single line before reading anything else.',
        detail: 'Read the line left to right in DevTools and confirm method spelling, leading slash on paths, and version token before debugging deeper layers.'
      },
      {
        term: 'Methods as intent',
        kind: 'method',
        statement: 'The **method** declares intent, with `GET` meaning retrieve without side effects and `POST` meaning submit data for processing. Safe retrieval uses `GET` for images, pages, and queries, while form posts and API creates use `POST` with a body. Choosing by intent keeps caches correct and retries safe.',
        detail: 'Use GET for idempotent reads that may be cached and POST for creates or actions where replay could duplicate work.'
      },
      {
        term: 'Request headers',
        kind: 'definition',
        statement: 'A **header** is a name plus colon plus value line of `meta information` about the request. The `Host` header selects the virtual host, `User-Agent` identifies the client, and `Accept` plus `Accept-Language` state what formats and languages the client understands. Proxies, servers, and caches all branch on these values.',
        detail: 'Inspect Host plus User-Agent plus Accept on every unfamiliar request since routing, logging, and negotiation all key off them.'
      },
      {
        term: 'Entity headers and body',
        kind: 'method',
        statement: 'The **body** carries the payload after a blank line, described by `Content-Type` and `Content-Length` entity headers. Retrieval with `GET` normally omits the body, while `POST` carries form fields or JSON whose type the server must know to parse. Length plus type let the server read exactly the right bytes with the right parser.',
        detail: 'Always pair a body with an accurate Content-Type and Content-Length so the server never guesses the format or truncates the payload.'
      },
      {
        term: 'Reading requests in DevTools',
        kind: 'insight',
        statement: 'The **Network panel** reveals each request line plus `Headers` plus timing without any extra tooling. Select a URL, open the Headers tab, and compare the raw request line against the parsed view to build intuition. This habit turns abstract protocol diagrams into concrete traffic you have actually seen.',
        detail: 'Reload with the panel open since recording starts only after opening, then filter by document, style sheet, or fetch to isolate patterns.'
      }
    ],
    figures: [
      {
        caption: 'Anatomy of an HTTP request: request line, header block, blank separator, and optional body traveling from client to server.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HTTP request structure from client to server" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">HTTP request: client to server</text><rect x="36" y="60" width="290" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="13" font-weight="700" fill="currentColor">client</text><text x="52" y="108" font-size="12" fill="currentColor">browser or app</text><text x="52" y="128" font-size="12" fill="currentColor">builds request line</text><rect x="394" y="60" width="290" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="410" y="86" font-size="13" font-weight="700" fill="currentColor">server</text><text x="410" y="108" font-size="12" fill="currentColor">routes by target</text><text x="410" y="128" font-size="12" fill="currentColor">reads headers + body</text><line x1="326" y1="105" x2="394" y2="105" stroke="currentColor" stroke-width="2"/><polygon points="384,97 394,105 384,113" fill="currentColor"/><rect x="36" y="170" width="648" height="160" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="196" font-size="12" font-weight="700" fill="currentColor">request line: METHOD target version</text><text x="52" y="218" font-size="12" fill="currentColor">headers: Host, User-Agent, Accept</text><text x="52" y="240" font-size="12" fill="currentColor">blank line separates meta from payload</text><text x="52" y="262" font-size="12" fill="currentColor">body: form fields or JSON on POST</text><text x="52" y="284" font-size="12" fill="currentColor">GET usually omits body</text><text x="52" y="306" font-size="12" fill="currentColor">POST carries typed body</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Read a raw retrieval request',
        problem: 'A page load shows a style sheet fetch and you must confirm it is a well formed retrieval without a body.',
        steps: [
          { label: 'Step 1: Inspect the request line', text: '```http\nGET /styles/main.css HTTP/1.1\nHost: www.example.com\nUser-Agent: Mozilla/5.0\nAccept: text/css\n```\nMethod plus path plus version open the exchange and Host selects the site.' },
          { label: 'Step 2: Classify the headers', text: 'Host identifies the virtual host while User-Agent and Accept describe the client and its preferences. No Content-Type appears because no body travels with a retrieval.' },
          { label: 'Step 3: Confirm bodiless shape', text: 'A blank line ends the meta block with nothing after it, which matches GET semantics. The server can answer from cache or file system without parsing a payload.' }
        ],
        result: 'The request parses as a cacheable bodiless retrieval for a style sheet on the named host.'
      },
      {
        title: 'Submit a login form with POST',
        problem: 'A login form must send credentials to the server with correct typing so the handler parses the body.',
        steps: [
          { label: 'Step 1: Build the submission line', text: '```http\nPOST /session HTTP/1.1\nHost: www.example.com\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 34\n```\nPOST signals submission while entity headers promise a typed body of known length.' },
          { label: 'Step 2: Attach the payload', text: '```bash\nuser=ada&pass=topsecretvalue\n```\nThe body follows the blank line with encoded fields that match the declared type.' },
          { label: 'Step 3: Verify server reading', text: 'The server reads exactly Content-Length bytes and selects the form parser via Content-Type. Mismatched type or length would corrupt or truncate the login.' }
        ],
        result: 'The login arrives as a typed submission the server can parse, validate, and answer with a session.'
      }
    ],
    keyTakeaways: [
      'The request line carries method plus target plus version and drives routing before anything else.',
      'GET retrieves without a body while POST submits a typed body for processing.',
      'Host, User-Agent, and Accept headers steer virtual hosting, identity, and negotiation.',
      'Content-Type plus Content-Length let the server read the exact payload with the correct parser.'
    ],
    quiz: [
      {
        q: 'What three parts make up the HTTP request line?',
        options: ['Method, target, and protocol version', 'Header, body, and trailer', 'Domain, port, and fragment', 'Status code, reason, and version'],
        answer: 0,
        explanation: 'Step 1: Recall the start line opens the request. Step 2: It holds method plus target plus version. Step 3: Headers and body follow later. Step 4: Status codes belong to responses, not requests.'
      },
      {
        q: 'Why does a GET for an image normally carry no body?',
        options: ['Bodies are forbidden by browsers', 'Retrieval semantics ask the server to return a resource rather than accept one', 'Images cannot be described in headers', 'GET always uses encryption instead'],
        answer: 1,
        explanation: 'Step 1: Identify GET as retrieval. Step 2: The target already names the resource. Step 3: No payload is needed to name it. Step 4: Bodies are reserved for submissions like POST.'
      },
      {
        q: 'What does the Host header accomplish?',
        options: ['It compresses the response body', 'It selects which virtual host on a shared server should answer', 'It encrypts the connection automatically', 'It stores the login session'],
        answer: 1,
        explanation: 'Step 1: Many sites share one address. Step 2: The address alone cannot disambiguate. Step 3: Host names the intended site. Step 4: The server routes to that virtual host.'
      },
      // Request-pattern: request line plus header classification (original)
      {
        q: 'A raw request shows POST with Content-Type and Content-Length followed by encoded fields. What does this shape tell you?',
        options: ['It is a bodiless cache check', 'It is a redirect response', 'It is a status line from the server', 'It is a typed submission whose body the server reads by length and parses by type'],
        answer: 3,
        explanation: 'Step 1: POST signals submission. Step 2: Entity headers describe a payload. Step 3: Length bounds the read and type selects the parser. Step 4: Therefore the shape is a well formed typed submission.'
      }
    ]
  },
  // ---------------------------------------------------------------- 21.2
  {
    sectionId: 'web-ch21-s2',
    readingTime: 9,
    intro: 'If the request is the question, the response is the answer plus a verdict on what happened. This section decodes the response line, the five status classes, and the headers that carry caching, typing, and length. You will read any response like a lab report and know whether to render, redirect, retry, or fix the request.',
    objectives: [
      'Parse the response line into version, status code, and reason text',
      'Apply the five status classes to decide render, redirect, or repair',
      'Use response headers for typing, length, caching, and modification time'
    ],
    concepts: [
      {
        term: 'Response line anatomy',
        kind: 'definition',
        statement: 'The **response line** opens with protocol `version` plus numeric status code plus short reason text. The version echoes the dialect, the code gives the machine verdict, and the text gives the human gloss. Everything after refines or delivers the result named here.',
        detail: 'Read version plus code first since headers and body only make sense once the verdict class is known.'
      },
      {
        term: 'Five status classes',
        kind: 'definition',
        statement: 'Each **status class** groups codes by leading digit, from `1xx` informational through `2xx` success to `5xx` server failure. Codes starting with `2` mean render, with `3` mean follow up action, with `4` mean fix the request, and with `5` mean the server stumbled. The class decides the strategy before the exact number refines it.',
        detail: 'Map the first digit to render, redirect, repair request, or repair server before memorizing individual numbers.'
      },
      {
        term: 'Key status codes',
        kind: 'notation',
        statement: 'Famous **codes** include `200` for success, `301` for permanent move, and `404` for missing resource. Client repair codes include `400` plus `401` plus `403` plus `405`, while `500` flags an internal server failure. The book pairs each code with a short text such as OK or Not Found for quick scanning.',
        detail: 'Treat 301 as update the link, 404 as check the path, 401 as authenticate, and 500 as inspect server logs.'
      },
      {
        term: 'Response headers',
        kind: 'definition',
        statement: 'Response **headers** describe the payload with `Content-Type` for format and `Content-Length` for size. The `Server` header names the software, `Last-Modified` dates the resource, and `Content-Language` names the tongue. Clients use this meta block to parse, cache, and display correctly.',
        detail: 'Trust Content-Type for parser choice and Content-Length for progress and truncation checks on every download.'
      },
      {
        term: 'Caching and validation signals',
        kind: 'insight',
        statement: 'Caching **validators** like `Last-Modified` let clients revalidate instead of redownloading. A `304` style not modified answer means reuse the cached copy, which saves bytes and time. Designing for conditional requests turns repeat views from full transfers into cheap checks.',
        detail: 'Emit accurate modification times and honor conditional headers so repeat visits cost a check rather than a full body.'
      }
    ],
    figures: [
      {
        caption: 'Response verdict ladder: five status classes from informational to server error with typical codes and client actions.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HTTP status classes and response line" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">HTTP response: verdict plus payload</text><rect x="36" y="58" width="648" height="52" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="80" font-size="12" font-weight="700" fill="currentColor">response line: version + code + reason</text><text x="52" y="100" font-size="12" fill="currentColor">example: 200 OK, 404 Not Found, 500 Internal Error</text><g font-size="12" fill="currentColor"><rect x="36" y="124" width="120" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="150" font-weight="700">1xx hold on</text><text x="52" y="170" font-size="11">received</text><rect x="164" y="124" width="120" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="180" y="150" font-weight="700">2xx render</text><text x="180" y="170" font-size="11">200 OK</text><rect x="292" y="124" width="120" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="308" y="150" font-weight="700">3xx follow</text><text x="308" y="170" font-size="11">301 moved</text><rect x="420" y="124" width="120" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="436" y="150" font-weight="700">4xx repair</text><text x="436" y="170" font-size="11">404 missing</text><rect x="548" y="124" width="120" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="564" y="150" font-weight="700">5xx server</text><text x="564" y="170" font-size="11">500 fault</text></g><text x="36" y="224" font-size="12" fill="currentColor">headers: Content-Type, Content-Length, Last-Modified, Server</text><text x="36" y="248" font-size="12" fill="currentColor">blank line then body: HTML, CSS, JS, image, or data</text><text x="36" y="272" font-size="12" fill="currentColor">validators enable cheap rechecks instead of full downloads</text><text x="36" y="296" font-size="12" fill="currentColor">class first decides action, exact code refines reason</text><text x="36" y="320" font-size="12" fill="currentColor">2 render, 3 redirect, 4 fix request, 5 fix server</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Classify a missing page',
        problem: 'A link returns a not found verdict and you must decide whether to fix the link, the server, or the network.',
        steps: [
          { label: 'Step 1: Read the verdict', text: '```http\nHTTP/1.1 404 Not Found\nContent-Type: text/html\nContent-Length: 5120\n```\nVersion plus code plus reason lead, with typing and length following.' },
          { label: 'Step 2: Map the class', text: 'Leading digit four places the fault on the client side path, not the server engine. The resource name is wrong or removed.' },
          { label: 'Step 3: Act on the class', text: 'Fix the href or add a redirect from the old path, then confirm the body explains the miss. No server restart will create a missing file.' }
        ],
        result: 'The four class verdict correctly routes effort to link repair rather than server debugging.'
      },
      {
        title: 'Follow a permanent move',
        problem: 'A resource answers with a permanent move and you must update clients without breaking bookmarks.',
        steps: [
          { label: 'Step 1: Read the move', text: '```http\nHTTP/1.1 301 Moved Permanently\nContent-Location: /guides/new-path\nContent-Type: text/html\n```\nThe three class code orders further action with the new home named.' },
          { label: 'Step 2: Follow and cache the lesson', text: '```bash\ncurl -s -o /dev/null -w "%{redirect_url}" http://www.example.com/old-path\n```\nThe redirect target prints for verification before updating stored links.' },
          { label: 'Step 3: Update the source', text: 'Replace stored href values with the new path and keep the redirect for old bookmarks. Future requests skip the extra round trip.' }
        ],
        result: 'Clients land on the new home while stored links converge to the permanent address.'
      }
    ],
    keyTakeaways: [
      'The response line verdict of version plus code plus reason governs everything after it.',
      'First digit decides strategy: render on two, follow on three, repair request on four, repair server on five.',
      'Content-Type and Content-Length select the parser and bound the read.',
      'Modification validators turn repeat fetches into cheap rechecks instead of full transfers.'
    ],
    quiz: [
      {
        q: 'A response starts HTTP/1.1 200 OK. What does the line convey?',
        options: ['Version plus success verdict plus human gloss', 'A request for authentication', 'A redirect target and cache key', 'An encrypted tunnel negotiation'],
        answer: 0,
        explanation: 'Step 1: Version names the dialect. Step 2: Code two zero zero means success. Step 3: Reason OK glosses the code. Step 4: Together they authorize rendering the body.'
      },
      {
        q: 'Which class means the request must be repaired on the client side?',
        options: ['2xx', '3xx', '4xx', '1xx'],
        answer: 2,
        explanation: 'Step 1: Recall classes by leading digit. Step 2: Two means success and three means further action. Step 3: Four groups client faults like bad path or method. Step 4: Five groups server faults instead.'
      },
      {
        q: 'Why do Content-Type and Content-Length matter together?',
        options: ['They encrypt the payload', 'They select the parser and bound the byte count for a complete read', 'They replace status codes entirely', 'They store login sessions'],
        answer: 1,
        explanation: 'Step 1: The body is opaque bytes. Step 2: Type names the format to parse. Step 3: Length states how many bytes to read. Step 4: Together they prevent misparsing and truncation.'
      },
      // Status-pattern: status class decision strategy (original)
      {
        q: 'A fetch returns 500 Internal Server Error after a deploy. What is the correct first inference?',
        options: ['The URL path has a typo', 'The browser cache is stale', 'The redirect chain is too long', 'The server logic faulted and server side logs deserve inspection'],
        answer: 3,
        explanation: 'Step 1: Leading five places fault on the server. Step 2: Path typos map to four class codes. Step 3: Cache and redirect issues map elsewhere. Step 4: Therefore inspect server logic and logs first.'
      }
    ]
  },
  // ---------------------------------------------------------------- 21.3
  {
    sectionId: 'web-ch21-s3',
    readingTime: 8,
    intro: 'Browsers hide the wire, but the command line exposes it for scripting and debugging. This section builds curl craftsmanship for verbose inspection, header control, and request replay. You will capture traffic to files, silence noise, and reproduce browser exchanges without clicking.',
    objectives: [
      'Run verbose curl transfers and read request versus response markers',
      'Control methods, headers, and bodies to replay browser traffic',
      'Save, silence, and script transfers for repeatable debugging'
    ],
    concepts: [
      {
        term: 'Verbose inspection',
        kind: 'method',
        statement: 'The **verbose** flag prints the handshake plus `request` lines prefixed one way and `response` lines the other. Lines starting with one marker show what left the machine, while the opposite marker shows what returned. Reading both directions turns a mysterious failure into a visible mismatch.',
        detail: 'Start every unknown failure with verbose output and compare sent headers against returned status before changing code.'
      },
      {
        term: 'Method and header control',
        kind: 'method',
        statement: 'Command flags set **method** plus `header` plus body explicitly for faithful replay. A method flag chooses the verb, a header flag adds authorization or typing, and a data flag attaches the payload. Explicit flags remove browser magic so the server behavior is tested in isolation.',
        detail: 'Mirror the exact method plus headers seen in DevTools when replaying, changing one flag at a time to isolate causes.'
      },
      {
        term: 'Output capture and silence',
        kind: 'method',
        statement: 'Output **capture** with `output` redirection saves bodies for later diffing while `silent` mode hides progress noise. Saved files enable byte comparison across runs, and quiet mode keeps logs parseable in scripts. Together they make transfers scriptable rather than merely watchable.',
        detail: 'Save bodies to named files per run and diff them after fixes to prove behavior changed only as intended.'
      },
      {
        term: 'DevTools to curl handoff',
        kind: 'method',
        statement: 'The **Network panel** supplies the ground truth that `curl` then replays from the terminal. Copy the request line plus headers from the Headers tab into flags, then run the same exchange outside the browser. Divergence between the two runs isolates browser state from server behavior.',
        detail: 'Copy as curl from DevTools when available, then trim to the minimal flags that still reproduce the fault.'
      },
      {
        term: 'HTTP version awareness',
        kind: 'insight',
        statement: 'The **version** line matters because `HTTP/2` fixes performance limits of earlier dialects while keeping semantics. Multiplexing plus header compression reduce round trips without changing methods or status classes. Knowing the version explains timing differences between otherwise identical exchanges.',
        detail: 'Note the version in verbose output when diagnosing speed since multiplexed versions hide per file latency that older versions expose.'
      }
    ],
    figures: [
      {
        caption: 'Command line loop: inspect in DevTools, replay with curl flags, capture output, and diff across runs.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="curl debugging loop with DevTools" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">curl craftsmanship loop</text><rect x="36" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="12" font-weight="700" fill="currentColor">1 inspect</text><text x="52" y="108" font-size="11" fill="currentColor">DevTools</text><text x="52" y="126" font-size="11" fill="currentColor">Network tab</text><rect x="200" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="216" y="86" font-size="12" font-weight="700" fill="currentColor">2 replay</text><text x="216" y="108" font-size="11" fill="currentColor">curl flags</text><text x="216" y="126" font-size="11" fill="currentColor">method + head</text><rect x="364" y="60" width="150" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="380" y="86" font-size="12" font-weight="700" fill="currentColor">3 capture</text><text x="380" y="108" font-size="11" fill="currentColor">save body</text><text x="380" y="126" font-size="11" fill="currentColor">silent mode</text><rect x="528" y="60" width="156" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="544" y="86" font-size="12" font-weight="700" fill="currentColor">4 compare</text><text x="544" y="108" font-size="11" fill="currentColor">diff runs</text><text x="544" y="126" font-size="11" fill="currentColor">prove fix</text><line x1="186" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="2"/><line x1="350" y1="100" x2="364" y2="100" stroke="currentColor" stroke-width="2"/><line x1="514" y1="100" x2="528" y2="100" stroke="currentColor" stroke-width="2"/><rect x="36" y="160" width="648" height="60" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="184" font-size="12" fill="currentColor">verbose markers: outgoing versus incoming lines</text><text x="52" y="204" font-size="12" fill="currentColor">match status plus headers before changing app code</text><rect x="36" y="236" width="648" height="88" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="260" font-size="12" fill="currentColor">automate the minimal replay so any teammate reruns it</text><text x="52" y="282" font-size="12" fill="currentColor">note protocol version when timing diverges</text><text x="52" y="304" font-size="12" fill="currentColor">browser versus terminal split isolates client state</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Inspect a secure page fetch verbosely',
        problem: 'A homepage sometimes stalls and you must see the secure handshake plus response verdict without browser clutter.',
        steps: [
          { label: 'Step 1: Run a verbose quiet fetch', text: '```bash\ncurl -s -v -o /dev/null https://www.example.com/\n```\nSilent mode hides progress while verbose prints handshake plus both directions.' },
          { label: 'Step 2: Read the markers', text: 'Outgoing lines show GET plus Host plus User-Agent while incoming lines show version plus status plus Server plus Content-Type. The prefix direction tells you who said what.' },
          { label: 'Step 3: Judge the verdict', text: 'A two class code with HTML typing and a byte length means render, while handshake errors point at transport rather than app code. Capture the output to compare slow versus fast runs.' }
        ],
        result: 'Verbose output separates transport, verdict, and payload so stalls map to the correct layer.'
      },
      {
        title: 'Replay a JSON create from the terminal',
        problem: 'A browser form creates a resource but you need a minimal terminal replay to prove the API works without browser state.',
        steps: [
          { label: 'Step 1: Mirror method and typing', text: '```bash\ncurl -s -X POST https://api.example.com/contacts -H \"Content-Type: application/json\" -d \"{\\\"name\\\": \\\"Ada\\\"}\"\n```\nMethod plus header plus data flags reproduce the browser submission exactly.' },
          { label: 'Step 2: Check the answer', text: '```http\nHTTP/1.1 201 Created\nContent-Type: application/json\n```\nA two class creation verdict with JSON typing proves the server path works.' },
          { label: 'Step 3: Minimize the replay', text: 'Trim optional headers one at a time until the fault returns or the replay stays green. The surviving flags are the true requirements for the ticket.' }
        ],
        result: 'A tiny scripted replay proves the endpoint independent of cookies, extensions, or cached state.'
      }
    ],
    keyTakeaways: [
      'Verbose output labels outgoing versus incoming lines for precise mismatch hunting.',
      'Explicit method, header, and data flags replay browser traffic without browser magic.',
      'Capture bodies to files and silence progress to make runs diffable and scriptable.',
      'DevTools truth plus terminal replay isolates browser state from server behavior.'
    ],
    quiz: [
      {
        q: 'What does verbose mode add to a curl run?',
        options: ['Automatic retries with backoff', 'A full print of handshake plus outgoing and incoming protocol lines', 'HTML rendering of the body', 'Password encryption for the URL'],
        answer: 1,
        explanation: 'Step 1: Normal runs show only the body. Step 2: Verbose adds handshake detail. Step 3: It prefixes outgoing versus incoming lines. Step 4: Together they expose mismatches hidden otherwise.'
      },
      {
        q: 'Why redirect the body to a file with an output flag?',
        options: ['To make the transfer faster', 'To save the payload for later diffing and keep terminal output readable', 'To encrypt the response automatically', 'To change the HTTP version'],
        answer: 1,
        explanation: 'Step 1: Bodies clutter terminals. Step 2: Files persist bytes across runs. Step 3: Diffs prove fixes precisely. Step 4: Therefore capture enables repeatable comparison.'
      },
      {
        q: 'When should you copy a DevTools request into curl?',
        options: ['Only for image downloads', 'When you must separate browser state from server behavior with an exact replay', 'Only for encrypted sites', 'Never, browsers cannot be replayed'],
        answer: 1,
        explanation: 'Step 1: Browsers add state like cookies. Step 2: DevTools records exact lines. Step 3: curl replays them minimally. Step 4: Divergence isolates the browser layer.'
      },
      // Curl-pattern: verbose replay and capture workflow (original)
      {
        q: 'A POST works in the browser but fails from a bare terminal call. What is the disciplined next move?',
        options: ['Rewrite the entire API', 'Disable all security checks', 'Mirror method plus headers plus body from DevTools one flag at a time until the terminal matches', 'Assume the network is down'],
        answer: 2,
        explanation: 'Step 1: The gap is likely a missing header or body. Step 2: DevTools holds the working values. Step 3: Add flags incrementally to find the required one. Step 4: The minimal matching set documents the true contract.'
      }
    ]
  },
  // ---------------------------------------------------------------- 21.4
  {
    sectionId: 'web-ch21-s4',
    readingTime: 7,
    intro: 'Hypertext Transfer Protocol forgets everything between requests, yet shops remember carts and sites remember logins. This section shows how cookies plant small state on the client that returns with every visit to the right scope. You will scope cookies by domain and path, bound their lifetime, and respect their security and size limits.',
    objectives: [
      'Explain statelessness and how cookies restore memory across requests',
      'Scope cookies with domain, path, expiry, and security flags',
      'Respect size, volume, and consent limits when choosing cookie storage'
    ],
    concepts: [
      {
        term: 'Stateless protocol',
        kind: 'definition',
        statement: 'A **stateless** exchange treats each `request` independently with no memory of prior ones. The server cannot tell a second visit from a first unless the client brings identifying state. This simplicity aids scaling but forces explicit memory for carts and logins.',
        detail: 'Assume no memory by default and add explicit state only where continuity truly matters for the feature.'
      },
      {
        term: 'Cookie round trip',
        kind: 'definition',
        statement: 'A **cookie** is a name plus value text the server sets with `Set-Cookie` and the browser returns with `Cookie`. The server plants memory, the browser stores it, and later requests carry it back automatically. The loop turns anonymous requests into recognizable visits.',
        detail: 'Set on login or cart update, then read on later requests to restore identity or basket contents.'
      },
      {
        term: 'Scope by domain and path',
        kind: 'method',
        statement: 'Cookie **scope** limits return trips with `Domain` plus `Path` matching rules. A domain scoped cookie returns only to that host, while a path scoped cookie returns only under that prefix. Tight scope reduces leakage across unrelated areas of a site.',
        detail: 'Scope login cookies to the narrowest domain and path that still covers the protected area.'
      },
      {
        term: 'Lifetime and security flags',
        kind: 'method',
        statement: 'Cookie **lifetime** ends at `Expires` or session close, while the secure flag restricts travel to encrypted channels. Missing expiry means the cookie dies with the browser session, while a dated expiry persists across restarts. Secure plus consent aware defaults keep sensitive tokens off plain channels.',
        detail: 'Give session cookies no expiry and persistent prefs a dated one, marking sensitive values for encrypted transport only.'
      },
      {
        term: 'Limits and tradeoffs',
        kind: 'insight',
        statement: 'Browser **limits** cap cookies near `four kilobytes` per entry with per domain count caps. Every in scope cookie rides every request, so chatty cookies tax bandwidth on image heavy pages. Unencrypted transport plus user blocking mean cookies suit small identifiers rather than bulk or secret data.',
        detail: 'Store identifiers in cookies and bulk records server side, fetching by identifier on each scoped request.'
      }
    ],
    figures: [
      {
        caption: 'Cookie memory loop: server sets scoped state, browser stores it, and later requests return it automatically.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cookie round trip between browser and server" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">state on a stateless wire</text><rect x="36" y="60" width="300" height="100" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="13" font-weight="700" fill="currentColor">browser</text><text x="52" y="108" font-size="12" fill="currentColor">stores name + value</text><text x="52" y="130" font-size="12" fill="currentColor">returns on scope match</text><rect x="384" y="60" width="300" height="100" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="400" y="86" font-size="13" font-weight="700" fill="currentColor">server</text><text x="400" y="108" font-size="12" fill="currentColor">sets with response</text><text x="400" y="130" font-size="12" fill="currentColor">reads on next call</text><line x1="336" y1="95" x2="384" y2="95" stroke="currentColor" stroke-width="2"/><polygon points="374,87 384,95 374,103" fill="currentColor"/><line x1="384" y1="125" x2="336" y2="125" stroke="currentColor" stroke-width="2"/><polygon points="346,117 336,125 346,133" fill="currentColor"/><text x="250" y="80" font-size="11" fill="currentColor">set</text><text x="250" y="142" font-size="11" fill="currentColor">return</text><rect x="36" y="178" width="648" height="154" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="204" font-size="12" fill="currentColor">scope: domain + path gate every return trip</text><text x="52" y="226" font-size="12" fill="currentColor">lifetime: dated expiry persists, none ends at close</text><text x="52" y="248" font-size="12" fill="currentColor">secure flag keeps tokens on encrypted channels</text><text x="52" y="270" font-size="12" fill="currentColor">small budget: about four kilobytes per entry</text><text x="52" y="292" font-size="12" fill="currentColor">in scope cookies ride every request</text><text x="52" y="314" font-size="12" fill="currentColor">store IDs client side, bulk data server side</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Remember a shopping cart overnight',
        problem: 'A store must keep cart items across visits without forcing a login on first add.',
        steps: [
          { label: 'Step 1: Plant the identifier', text: '```http\nHTTP/1.1 200 OK\nSet-Cookie: cart=abc123; Path=/shop; Expires=Wed, 21 Jun 2026 12:00:00 GMT\n```\nThe response stores a cart identifier scoped to the shop path with a dated life.' },
          { label: 'Step 2: Return it automatically', text: '```http\nGET /shop/cart HTTP/1.1\nHost: www.example.com\nCookie: cart=abc123\n```\nThe next visit carries the identifier without any app code sending it manually.' },
          { label: 'Step 3: Resolve server side', text: 'The server looks up cart abc123 in its store and renders the saved items. The cookie held only the key while bulk rows stayed in the database.' }
        ],
        result: 'Anonymous shoppers resume carts days later while the cookie stays tiny and scoped.'
      },
      {
        title: 'Scope a login token safely',
        problem: 'A login token must reach protected areas over encryption but never leak to unrelated paths or plain transport.',
        steps: [
          { label: 'Step 1: Set narrowly and securely', text: '```bash\nSet-Cookie: session=xyz789; Domain=www.example.com; Path=/account; Secure\n```\nDomain plus path plus secure flag bound where and how the token travels.' },
          { label: 'Step 2: Verify return rules', text: 'Requests to the account prefix over encryption carry the token while public pages and plain addresses do not. Scope acts as an automatic filter.' },
          { label: 'Step 3: Plan expiry and consent', text: 'Omit expiry for a session only token that dies at browser close and honor user consent before planting. Rotate the value on logout to invalidate stolen copies.' }
        ],
        result: 'The session token reaches exactly the protected surface over safe transport with user aware lifetime.'
      }
    ],
    keyTakeaways: [
      'Statelessness scales simply but requires explicit client state for continuity.',
      'Set-Cookie plants state while Cookie returns it automatically on scope matches.',
      'Domain plus path plus expiry plus secure flags bound where, how long, and how safely state travels.',
      'Tiny per cookie budgets and per request overhead favor identifiers over bulk storage.'
    ],
    quiz: [
      {
        q: 'Why does HTTP need cookies for logins?',
        options: ['HTTP forgets prior requests so identity must be re-presented each time', 'Cookies speed up DNS lookups', 'Cookies replace HTML rendering', 'HTTP cannot carry headers'],
        answer: 0,
        explanation: 'Step 1: Each request is independent. Step 2: The server holds no visit memory. Step 3: The client must bring proof. Step 4: Cookies automate that return trip.'
      },
      {
        q: 'What do Domain and Path control?',
        options: ['The cookie color and font', 'Which hosts and URL prefixes receive the cookie on later requests', 'The encryption algorithm for the body', 'The image format for the page'],
        answer: 1,
        explanation: 'Step 1: Cookies default broadly. Step 2: Domain gates the host. Step 3: Path gates the prefix. Step 4: Together they limit leakage.'
      },
      {
        q: 'A cookie has no Expires value. When does it die?',
        options: ['After one second', 'When the browser session closes', 'Never, it lasts forever', 'When the page scrolls'],
        answer: 1,
        explanation: 'Step 1: Lifetime comes from expiry. Step 2: None means session scope. Step 3: Session ends at close. Step 4: The browser then drops the value.'
      },
      // Cookie-pattern: scope plus lifetime plus limits reasoning (original)
      {
        q: 'A site stores a full product catalog in cookies and pages slow down. What is the principled fix?',
        options: ['Add more cookies for each product', 'Store only the cart identifier client side and keep catalog rows server side', 'Send cookies over plain transport always', 'Widen scope to the whole internet'],
        answer: 1,
        explanation: 'Step 1: In scope cookies ride every request. Step 2: Bulk bytes tax each transfer. Step 3: Budgets cap per entry size. Step 4: Therefore keep IDs in cookies and bulk data on the server.'
      }
    ]
  }
]

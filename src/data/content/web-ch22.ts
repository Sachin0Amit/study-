import type { SectionContent } from '../library'

// ============================================================================
// Complete Web Development Library — Chapter 22: Realtime Web
// Sections web-ch22-s1 through web-ch22-s4. Master study content.
// Based on Rheinwerk Full Stack Web Development Guide Chapter 5 point 2.
// ============================================================================

export const webCh22Content: SectionContent[] = [
  // ---------------------------------------------------------------- 22.1
  {
    sectionId: 'web-ch22-s1',
    readingTime: 7,
    intro: 'Some pages can wait for a refresh while tickers, dashboards, and queues cannot. This section measures classic polling and its longer lived cousin for freshness against request cost. You will know when a timed reask suffices and when its chatter demands a push model instead.',
    objectives: [
      'Describe interval polling and its latency versus load tradeoff',
      'Explain long polling with held connections and timeouts',
      'Decide when polling suffices despite its one way chatter'
    ],
    concepts: [
      {
        term: 'Interval polling',
        kind: 'definition',
        statement: 'Interval **polling** reasks the server on a `timer` for fresh data using ordinary requests. Each tick sends a full exchange even when nothing changed, which bounds freshness by the interval. Short intervals feel live but multiply load while long intervals save load but lag events.',
        detail: 'Pick the interval from staleness tolerance and multiply by client count to budget server hits before shipping.'
      },
      {
        term: 'Cost of empty answers',
        kind: 'insight',
        statement: 'Empty **answers** still cost headers plus `connection` setup plus server work for zero new facts. News tickers that poll every few seconds pay dozens of exchanges per client per minute. The waste grows with audience size while freshness stays capped by the tick.',
        detail: 'Log answer hit rate and abandon fixed polling when most ticks return unchanged payloads.'
      },
      {
        term: 'Long polling hold',
        kind: 'method',
        statement: 'Long **polling** holds the `request` open until data arrives or a `timeout` lapses. The server answers immediately on news and otherwise waits, which cuts empty chatter compared with fixed ticks. The client then reasks at once to reestablish the waiting slot.',
        detail: 'Set the hold timeout below proxy and server idle limits so waits end gracefully rather than with dropped sockets.'
      },
      {
        term: 'Unidirectional limit',
        kind: 'definition',
        statement: 'Both polling styles stay **unidirectional** with `client` initiation on every round. The server never speaks first since each delivery answers a prior ask. True server driven pushes and client to server streams on one channel need different protocols.',
        detail: 'Treat polling as client driven refresh and reach for streams or sockets when the server must originate messages.'
      },
      {
        term: 'When polling wins',
        kind: 'method',
        statement: 'Polling **suffices** when freshness tolerance is loose and `scale` is modest. Admin lists that refresh on the minute and small audiences with cheap queries survive fine on ticks. Simplicity plus plain HTTP tooling outweigh push complexity in those niches.',
        detail: 'Keep polling when minute level freshness passes acceptance and tick math fits headroom with margin to spare.'
      }
    ],
    figures: [
      {
        caption: 'Polling versus long polling timelines: fixed ticks with many empty answers against held waits that answer on news.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Polling and long polling timelines" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">refresh strategies on plain HTTP</text><rect x="36" y="60" width="310" height="130" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="13" font-weight="700" fill="currentColor">interval polling</text><line x1="52" y1="110" x2="330" y2="110" stroke="currentColor" stroke-width="1.4"/><circle cx="90" cy="110" r="6" fill="currentColor"/><circle cx="150" cy="110" r="6" fill="currentColor"/><circle cx="210" cy="110" r="6" fill="currentColor"/><circle cx="270" cy="110" r="6" fill="currentColor"/><text x="52" y="136" font-size="11" fill="currentColor">tick, tick, tick, tick</text><text x="52" y="156" font-size="11" fill="currentColor">many answers: no change</text><text x="52" y="176" font-size="11" fill="currentColor">freshness capped by tick</text><rect x="362" y="60" width="322" height="130" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="378" y="86" font-size="13" font-weight="700" fill="currentColor">long polling</text><line x1="378" y1="110" x2="520" y2="110" stroke="currentColor" stroke-width="2"/><circle cx="520" cy="110" r="6" fill="currentColor"/><text x="378" y="136" font-size="11" fill="currentColor">hold open until news</text><text x="378" y="156" font-size="11" fill="currentColor">or timeout, then reask</text><text x="378" y="176" font-size="11" fill="currentColor">fewer empties, still one way</text><rect x="36" y="206" width="648" height="126" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="232" font-size="12" fill="currentColor">both need client to ask first</text><text x="52" y="254" font-size="12" fill="currentColor">cost grows with clients times tick rate</text><text x="52" y="276" font-size="12" fill="currentColor">holds need timeout below idle limits</text><text x="52" y="298" font-size="12" fill="currentColor">use for loose freshness, small scale</text><text x="52" y="318" font-size="12" fill="currentColor">push models win when news is frequent</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Poll a status board every half minute',
        problem: 'An ops board tolerates half minute staleness and must stay on plain requests without new infrastructure.',
        steps: [
          { label: 'Step 1: Tick with a timer', text: '```js\nsetInterval(async () => {\n  const res = await fetch(\"/api/status\");\n  if (res.ok) render(await res.json());\n}, 30000);\n```\nA thirty second timer reasks with ordinary fetches and renders on success.' },
          { label: 'Step 2: Budget the load', text: 'Multiply client count by two asks per minute to size the endpoint. Cheap reads with cache headers keep the tick affordable.' },
          { label: 'Step 3: Accept the lag', text: 'Events land at most one interval late, which acceptance already allows. Document the lag so nobody expects instant alerts.' }
        ],
        result: 'The board stays fresh enough on trivial infrastructure with predictable load.'
      },
      {
        title: 'Stretch freshness with a held wait',
        problem: 'A queue view needs faster news than fixed ticks but cannot yet adopt streams or sockets.',
        steps: [
          { label: 'Step 1: Hold the ask', text: '```js\nasync function waitForJobs() {\n  const res = await fetch(\"/api/jobs/wait?timeout=25000\");\n  if (res.ok) render(await res.json());\n  waitForJobs();\n}\n```\nEach ask waits up to twenty five seconds for news before returning.' },
          { label: 'Step 2: Reask at once', text: 'The client loops immediately after every answer to restore the waiting slot. Timeouts prevent orphaned waits behind proxies.' },
          { label: 'Step 3: Watch server cost', text: 'Held requests occupy workers while waiting, so cap concurrent waits and keep handlers light. Move to streams when waits saturate the pool.' }
        ],
        result: 'News arrives near instantly when present while empty chatter drops sharply versus fixed ticks.'
      }
    ],
    keyTakeaways: [
      'Fixed polling bounds freshness by interval while multiplying cost per client.',
      'Long polling holds waits until news or timeout to cut empty answers.',
      'Both styles stay client initiated and unidirectional in nature.',
      'Polling suffices for loose freshness and modest scale with plain tooling.'
    ],
    quiz: [
      {
        q: 'What bounds freshness in fixed interval polling?',
        options: ['The database index size', 'The tick interval between reasks', 'The image format on the page', 'The TLS certificate brand'],
        answer: 1,
        explanation: 'Step 1: The client only learns on ticks. Step 2: Events between ticks wait. Step 3: Shorter ticks cut lag but raise load. Step 4: Therefore interval sets the freshness bound.'
      },
      {
        q: 'How does long polling reduce empty chatter?',
        options: ['By holding the request open until news or timeout instead of answering empty at once', 'By compressing images harder', 'By disabling all timeouts', 'By caching DNS longer'],
        answer: 0,
        explanation: 'Step 1: Normal ticks answer immediately. Step 2: Long waits hold the slot. Step 3: News triggers the answer early. Step 4: Fewer empty round trips result.'
      },
      {
        q: 'Why are both polling styles called unidirectional?',
        options: ['They use only one CPU core', 'They send only text, never bytes', 'The client must ask first on every round and the server never originates', 'They work only on one browser'],
        answer: 2,
        explanation: 'Step 1: Each delivery answers a prior ask. Step 2: No channel exists for server origin. Step 3: Direction stays client to server to client. Step 4: Hence the one way label.'
      },
      // Polling-pattern: interval versus hold selection (original)
      {
        q: 'A small admin list accepts minute old data. Which approach fits best?',
        options: ['Bidirectional sockets for every viewer', 'Custom video codec', 'Daily manual refresh by staff', 'Fixed interval polling with cheap cached reads'],
        answer: 3,
        explanation: 'Step 1: Freshness tolerance is loose. Step 2: Scale and query cost are small. Step 3: Plain ticks need no new infra. Step 4: Therefore simple polling is proportionate.'
      }
    ]
  },
  // ---------------------------------------------------------------- 22.2
  {
    sectionId: 'web-ch22-s2',
    readingTime: 7,
    intro: 'Many live views only need news flowing one way from server to screen. This section opens a Server Sent Events stream after a client hello and lets the server push text updates down that open channel. You will wire reconnection and event typing for tickers, timelines, and price boards.',
    objectives: [
      'Open an event stream from the client and accept server pushes',
      'Handle typed events plus automatic reconnection correctly',
      'Choose streams for one way feeds over polling or sockets'
    ],
    concepts: [
      {
        term: 'One way stream',
        kind: 'definition',
        statement: 'An **event stream** flows from `server` to client after one client hello. The server writes typed text frames down the open response while the client listens. No client to server messages travel the same channel afterward.',
        detail: 'Use streams when the browser mainly renders news rather than conversing through the same pipe.'
      },
      {
        term: 'Client hello with EventSource',
        kind: 'method',
        statement: 'The **EventSource** object opens the `stream` with one URL and exposes message plus open plus error hooks. One constructor line replaces timer code and manual reasks. The browser manages the underlying request and parsing automatically.',
        detail: 'Create one source per feed URL and close it on view teardown to avoid leaked connections.'
      },
      {
        term: 'Typed text frames',
        kind: 'definition',
        statement: 'Each **frame** carries `event` plus `data` lines in a simple text protocol. The type routes handling while data holds the payload, often JSON text. Blank lines delimit frames so parsers stay trivial and debuggable.',
        detail: 'Emit explicit event names per update kind so handlers switch on type rather than sniffing payload shape.'
      },
      {
        term: 'Automatic reconnection',
        kind: 'method',
        statement: 'Built in **reconnection** retries the `stream` after drops with last seen identifiers. The client reasks with its position so the server resumes without duplicates or gaps. Backoff plus identifiers turn flaky networks into brief pauses rather than dead feeds.',
        detail: 'Send identifiers with every frame and honor the retry interval to make resume exact after blips.'
      },
      {
        term: 'Feed fit',
        kind: 'insight',
        statement: 'Streams **fit** tickers plus timelines plus `dashboards` where many viewers read shared news. One way text over plain HTTP traverses proxies with less operational cost than sockets. Conversational features like chat still need a bidirectional channel instead.',
        detail: 'Choose streams for broadcast reads and reserve sockets for rooms where clients also publish through the pipe.'
      }
    ],
    figures: [
      {
        caption: 'Server Sent Events: one hello opens the stream, then typed frames flow one way with auto resume on drops.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Server sent events one way stream" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">one way live feed</text><rect x="36" y="60" width="200" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="13" font-weight="700" fill="currentColor">browser</text><text x="52" y="108" font-size="12" fill="currentColor">EventSource</text><text x="52" y="130" font-size="12" fill="currentColor">hello once</text><rect x="484" y="60" width="200" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="500" y="86" font-size="13" font-weight="700" fill="currentColor">server</text><text x="500" y="108" font-size="12" fill="currentColor">holds stream</text><text x="500" y="130" font-size="12" fill="currentColor">writes frames</text><line x1="236" y1="90" x2="484" y2="90" stroke="currentColor" stroke-width="2"/><polygon points="474,82 484,90 474,98" fill="currentColor"/><text x="320" y="80" font-size="11" fill="currentColor">hello</text><line x1="484" y1="120" x2="236" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="246,112 236,120 246,128" fill="currentColor"/><text x="320" y="112" font-size="11" fill="currentColor">frames</text><rect x="36" y="166" width="648" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="190" font-size="12" fill="currentColor">frame: event line + data line + blank line</text><text x="52" y="212" font-size="12" fill="currentColor">examples: price, headline, score</text><rect x="36" y="248" width="648" height="84" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="272" font-size="12" fill="currentColor">drop? client retries with last ID</text><text x="52" y="294" font-size="12" fill="currentColor">server resumes without gaps</text><text x="52" y="314" font-size="12" fill="currentColor">no client to server msgs here</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Stream headlines to a ticker',
        problem: 'A news ticker must update the moment stories publish without polling chatter or bidirectional plumbing.',
        steps: [
          { label: 'Step 1: Open the stream', text: '```js\nconst feed = new EventSource(\"/api/headlines/stream\");\nfeed.addEventListener(\"headline\", (e) => addTicker(JSON.parse(e.data)));\n```\nOne hello subscribes the ticker to typed headline frames.' },
          { label: 'Step 2: Emit typed frames server side', text: 'Headers declare an event stream while each frame names its event and data payload. Blank lines split frames for the parser.' },
          { label: 'Step 3: Survive drops', text: 'On error the browser retries with the last identifier and the server replays missed headlines. Viewers see a pause rather than a dead list.' }
        ],
        result: 'Headlines land seconds after publish with minimal overhead and automatic resume.'
      },
      {
        title: 'Push prices to a board',
        problem: 'A price board serves many readers of shared numbers and must avoid per reader polling storms.',
        steps: [
          { label: 'Step 1: Subscribe the board', text: '```js\nconst prices = new EventSource(\"/api/prices/stream\");\nprices.onmessage = (e) => paintRow(JSON.parse(e.data));\n```\nDefault message frames carry price payloads to one paint handler.' },
          { label: 'Step 2: Broadcast on change', text: 'The server writes one frame per price move to all open streams. Readers share the same cheap broadcast rather than each polling.' },
          { label: 'Step 3: Reconcile on resume', text: 'Identifiers let late joiners and dropped clients catch up from the last seen sequence. The board never double paints or skips a move.' }
        ],
        result: 'Many viewers share one efficient broadcast with exact resume after network blips.'
      }
    ],
    keyTakeaways: [
      'One client hello opens a server to client text stream.',
      'Typed frames route handling while data carries JSON payloads.',
      'Automatic retry with identifiers resumes without gaps or duplicates.',
      'Streams fit broadcast reads while chat needs bidirectional pipes.'
    ],
    quiz: [
      {
        q: 'Who speaks first and who speaks after in Server Sent Events?',
        options: ['Server speaks first, then client replies on the same pipe', 'Client hellos once, then only the server writes frames', 'Both sides alternate strictly', 'Neither side ever writes'],
        answer: 1,
        explanation: 'Step 1: The client opens the request. Step 2: The server holds the response. Step 3: Only server frames flow after. Step 4: Client sends nothing more on that pipe.'
      },
      {
        q: 'What do event plus data lines accomplish?',
        options: ['They route handling by type while carrying the payload text', 'They encrypt the payload', 'They compress images', 'They replace HTTP entirely'],
        answer: 0,
        explanation: 'Step 1: Frames are plain text. Step 2: Event names the kind. Step 3: Data holds content. Step 4: Handlers switch on type cleanly.'
      },
      {
        q: 'How do streams survive a dropped connection?',
        options: ['By asking the user to reload daily', 'By automatic retry with last seen identifier for exact resume', 'By switching to file upload', 'By deleting all prior events'],
        answer: 1,
        explanation: 'Step 1: Drops break the held response. Step 2: The client retries. Step 3: It sends its position. Step 4: The server replays from there.'
      },
      // Stream-pattern: one way feed fit versus chat (original)
      {
        q: 'A ticker needs live headlines but no user posting. Why choose streams over sockets?',
        options: ['Streams support video calls natively', 'One way broadcast over plain HTTP is simpler and cheaper for read only news', 'Streams store passwords securely', 'Sockets cannot send text'],
        answer: 1,
        explanation: 'Step 1: Need is server to screen only. Step 2: Streams match that direction. Step 3: They traverse plain infra cheaply. Step 4: Sockets add unneeded bidirectional cost.'
      }
    ]
  },
  // ---------------------------------------------------------------- 22.3
  {
    sectionId: 'web-ch22-s3',
    readingTime: 8,
    intro: 'Chat rooms, games, and collaborative editors need both sides speaking at will on one channel. This section performs the WebSocket handshake that upgrades plain HTTP into a persistent bidirectional frame pipe. You will send and receive messages from browser and server with explicit open, message, and close handling.',
    objectives: [
      'Perform the upgrade handshake from HTTP to a socket channel',
      'Exchange bidirectional text frames with browser and server handlers',
      'Manage presence, rooms, and close paths without leaking connections'
    ],
    concepts: [
      {
        term: 'Upgrade handshake',
        kind: 'definition',
        statement: 'The **handshake** starts as an `Upgrade` request asking to switch protocols on the same address. The server answers with acceptance plus a switched protocol verdict, promoting the connection. After that moment the wire no longer follows request response turns.',
        detail: 'Confirm the upgrade verdict and subprotocol match before sending app frames since rejected upgrades stay plain HTTP.'
      },
      {
        term: 'Bidirectional frames',
        kind: 'definition',
        statement: 'A **frame** is a small `message` unit either side may send at any time. Client to server and server to client frames interleave freely without reasking. Low framing overhead keeps rapid moves and keystrokes economical.',
        detail: 'Send compact JSON text frames and batch trivial updates to keep frame rate smooth under load.'
      },
      {
        term: 'Browser socket API',
        kind: 'method',
        statement: 'The browser **WebSocket** object exposes `open` plus message plus close plus error hooks. Construct with a ws or wss URL, send on open, and route incoming data in the message handler. Explicit close with code and reason frees server slots cleanly.',
        detail: 'Guard sends on open state and queue early messages until the open hook fires to avoid lost first writes.'
      },
      {
        term: 'Server socket role',
        kind: 'method',
        statement: 'A **socket server** must speak the `protocol` with rooms plus broadcast plus backpressure. It tracks which sockets joined which room and fans single publishes to many members. Load awareness and per socket queues prevent one loud room from stalling others.',
        detail: 'Shard rooms across workers and cap per socket queues so slow readers cannot exhaust server memory.'
      },
      {
        term: 'Presence and rooms',
        kind: 'insight',
        statement: 'Chat **rooms** map naturally onto `broadcast` groups with join plus leave plus member lists. Presence shows who is present while history fills what was missed. Reconnect with identity plus backlog turns drops into brief gaps rather than lost context.',
        detail: 'Persist recent history per room so resumed sockets replay missed frames in order after blips.'
      }
    ],
    figures: [
      {
        caption: 'WebSocket lifecycle: HTTP upgrade handshake, then free flowing frames both ways with explicit close.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WebSocket handshake and bidirectional frames" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">bidirectional socket pipe</text><rect x="36" y="60" width="200" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="13" font-weight="700" fill="currentColor">browser</text><text x="52" y="108" font-size="12" fill="currentColor">socket object</text><text x="52" y="130" font-size="12" fill="currentColor">open, msg, close</text><rect x="484" y="60" width="200" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="500" y="86" font-size="13" font-weight="700" fill="currentColor">socket server</text><text x="500" y="108" font-size="12" fill="currentColor">rooms</text><text x="500" y="130" font-size="12" fill="currentColor">broadcast</text><line x1="236" y1="90" x2="484" y2="90" stroke="currentColor" stroke-width="2"/><polygon points="474,82 484,90 474,98" fill="currentColor"/><text x="300" y="80" font-size="11" fill="currentColor">upgrade ask</text><line x1="484" y1="112" x2="236" y2="112" stroke="currentColor" stroke-width="2"/><polygon points="246,104 236,112 246,120" fill="currentColor"/><text x="300" y="104" font-size="11" fill="currentColor">switch OK</text><line x1="236" y1="180" x2="484" y2="180" stroke="currentColor" stroke-width="2"/><polygon points="474,172 484,180 474,188" fill="currentColor"/><line x1="484" y1="204" x2="236" y2="204" stroke="currentColor" stroke-width="2"/><polygon points="246,196 236,204 246,212" fill="currentColor"/><text x="52" y="180" font-size="11" fill="currentColor">frames either way</text><text x="52" y="204" font-size="11" fill="currentColor">any time, low cost</text><rect x="36" y="228" width="648" height="104" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="252" font-size="12" fill="currentColor">needs socket capable server, not plain file host</text><text x="52" y="274" font-size="12" fill="currentColor">rooms fan one publish to many members</text><text x="52" y="296" font-size="12" fill="currentColor">close with code frees slots cleanly</text><text x="52" y="316" font-size="12" fill="currentColor">use for chat, games, joint editing</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Build a room chat round trip',
        problem: 'A study room needs instant messages both ways with join, broadcast, and clean leave handling.',
        steps: [
          { label: 'Step 1: Connect and join', text: '```js\nconst sock = new WebSocket(\"wss://chat.example.com/room\");\nsock.addEventListener(\"open\", () => sock.send(JSON.stringify({ join: \"room-7\" })));\n```\nThe socket opens then announces room membership as its first frame.' },
          { label: 'Step 2: Receive and send', text: '```js\nsock.addEventListener(\"message\", (e) => paintLine(JSON.parse(e.data)));\nfunction post(text) { sock.send(JSON.stringify({ room: \"room-7\", text })); }\n```\nIncoming frames paint while the post helper publishes through the same pipe.' },
          { label: 'Step 3: Leave cleanly', text: 'Call close with a normal code on view teardown and remove the socket from the room map server side. Freed slots keep presence accurate.' }
        ],
        result: 'Members see each post near instantly with correct presence and no leaked waits.'
      },
      {
        title: 'Fan out game moves fairly',
        problem: 'A quiz game must broadcast each move to all players without polling delays or duplicate delivery.',
        steps: [
          { label: 'Step 1: Publish one frame', text: '```bash\n# server fans one publish to room members\n# room-7 members: 24 sockets share one move frame\n```\nOne publish fans out to the whole room in one server action.' },
          { label: 'Step 2: Order with sequence', text: 'Stamp each move with a room sequence so late joiners sort correctly. Clients ignore replays below their high water mark.' },
          { label: 'Step 3: Guard overload', text: 'Throttle move rate per socket and queue per reader to bound memory. Loud clients cannot stall the room.' }
        ],
        result: 'All players share one ordered move stream with bounded server cost.'
      }
    ],
    keyTakeaways: [
      'An Upgrade handshake promotes HTTP into a persistent frame pipe.',
      'Either side may send frames at any time with low overhead.',
      'Browser sockets need open guarded sends and explicit closes.',
      'Servers add rooms, broadcast, history, and backpressure for real rooms.'
    ],
    quiz: [
      {
        q: 'What does the WebSocket handshake accomplish?',
        options: ['It compresses all images', 'It upgrades a plain HTTP connection into a persistent bidirectional pipe', 'It deletes all cookies', 'It changes DNS records'],
        answer: 1,
        explanation: 'Step 1: It starts as HTTP. Step 2: Upgrade asks to switch. Step 3: Acceptance promotes the wire. Step 4: Frames then flow freely.'
      },
      {
        q: 'When may each side send a frame?',
        options: ['At any time after open without reasking', 'Only on Tuesdays', 'Only after a page reload', 'Only from server to client'],
        answer: 0,
        explanation: 'Step 1: The pipe stays open. Step 2: No ask precedes each write. Step 3: Both directions interleave. Step 4: Hence real time conversation works.'
      },
      {
        q: 'Why guard browser sends on open state?',
        options: ['To save battery only', 'To encrypt DNS', 'Early sends before open would be lost, so queue until ready', 'To change the URL scheme'],
        answer: 2,
        explanation: 'Step 1: Construction is async. Step 2: Open fires when ready. Step 3: Prior writes have no pipe. Step 4: Queueing preserves first messages.'
      },
      // Socket-pattern: rooms plus handshake reasoning (original)
      {
        q: 'A chat needs rooms, presence, and history across drops. What must the server add beyond raw pipes?',
        options: ['Larger fonts', 'Longer URLs', 'More image formats', 'Room maps plus broadcast plus backlog replay with identity resume'],
        answer: 3,
        explanation: 'Step 1: Pipes alone lack groups. Step 2: Room maps track members. Step 3: Broadcast fans publishes. Step 4: Backlog plus identity heal drops.'
      }
    ]
  },
  // ---------------------------------------------------------------- 22.4
  {
    sectionId: 'web-ch22-s4',
    readingTime: 8,
    intro: 'Polling, streams, and sockets all work, but they cost very different amounts at scale. This section selects by direction, latency budget, audience size, and operational appetite. You will defend the cheapest sufficient choice and know exactly what would force an upgrade.',
    objectives: [
      'Compare polling, streams, and sockets by direction and latency',
      'Size audience and frequency costs before committing to pipes',
      'State upgrade triggers that move a feed up the ladder'
    ],
    concepts: [
      {
        term: 'Direction first',
        kind: 'method',
        statement: 'Choose by **direction** first using `one way` versus two way need. Read only news fits streams while conversational rooms need `sockets`, and rare reads fit plain ticks. Direction eliminates two of three options before any tuning.',
        detail: 'Ask whether clients publish through the same channel since yes forces sockets immediately.'
      },
      {
        term: 'Latency budget',
        kind: 'method',
        statement: 'A **latency** budget names the oldest acceptable `news` in seconds. Minute tolerance admits polling, second tolerance favors streams, and sub second interaction demands `sockets`. Budgets turn taste debates into measurable thresholds.',
        detail: 'Write the budget as a number in the ticket and test worst case lag against it under load.'
      },
      {
        term: 'Audience times frequency math',
        kind: 'method',
        statement: 'Multiply **audience** by update `frequency` to size hits, streams, or frame rate. Polling cost scales with ticks times viewers while broadcast streams share one write across many readers. Math reveals when cheap per unit choices become expensive in aggregate.',
        detail: 'Estimate peak viewers times peak rate and compare polling hits against one broadcast fan out.'
      },
      {
        term: 'Operational appetite',
        kind: 'insight',
        statement: 'Each rung adds **operations** burden from plain `HTTP` to held streams to stateful socket fleets. Polling needs only endpoints, streams need held connections, and sockets need rooms plus sticky routing plus `scale` out. Appetite for on call complexity should match product need.',
        detail: 'Start on the lowest rung that meets direction plus latency and climb only on measured pain.'
      },
      {
        term: 'Server push note',
        kind: 'definition',
        statement: 'Protocol **push** for assets differs from `live` data pushes for app state. Early HTTP versions could push files the browser would soon ask for, which helped page speed but never delivered app events. Do not confuse asset push with streams or `sockets` for live features.',
        detail: 'Treat asset push as page optimization history and choose streams or sockets for live app data.'
      }
    ],
    figures: [
      {
        caption: 'Selection ladder: direction plus latency plus audience math point to ticks, streams, or sockets.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Realtime selection ladder" font-family="sans-serif"><rect x="8" y="8" width="704" height="344" rx="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="36" y="44" font-size="16" font-weight="700" fill="currentColor">cheapest sufficient realtime</text><rect x="36" y="60" width="200" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="86" font-size="12" font-weight="700" fill="currentColor">ticks</text><text x="52" y="108" font-size="11" fill="currentColor">rare reads</text><text x="52" y="128" font-size="11" fill="currentColor">plain HTTP</text><rect x="252" y="60" width="216" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="268" y="86" font-size="12" font-weight="700" fill="currentColor">streams</text><text x="268" y="108" font-size="11" fill="currentColor">one way news</text><text x="268" y="128" font-size="11" fill="currentColor">many readers</text><rect x="484" y="60" width="200" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="500" y="86" font-size="12" font-weight="700" fill="currentColor">sockets</text><text x="500" y="108" font-size="11" fill="currentColor">both ways</text><text x="500" y="128" font-size="11" fill="currentColor">rooms live</text><line x1="236" y1="105" x2="252" y2="105" stroke="currentColor" stroke-width="2"/><line x1="468" y1="105" x2="484" y2="105" stroke="currentColor" stroke-width="2"/><rect x="36" y="166" width="648" height="166" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="52" y="192" font-size="12" fill="currentColor">1 direction? read only to streams, converse to sockets</text><text x="52" y="214" font-size="12" fill="currentColor">2 latency? minute to ticks, seconds to streams</text><text x="52" y="236" font-size="12" fill="currentColor">3 math? viewers times rate sizes the bill</text><text x="52" y="258" font-size="12" fill="currentColor">4 ops? climb only on measured pain</text><text x="52" y="280" font-size="12" fill="currentColor">asset push is not app live data</text><text x="52" y="302" font-size="12" fill="currentColor">record the trigger that forces upgrade</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Keep a dashboard on ticks',
        problem: 'A fleet dashboard with hundreds of viewers tolerates thirty second data and must minimize operations.',
        steps: [
          { label: 'Step 1: Check direction and budget', text: '```js\nconst need = { direction: \"one-way-read\", maxAgeSec: 30, viewers: 400 };\nif (need.maxAgeSec >= 30) return \"poll\";\n```\nRead only plus loose budget points to plain ticks.' },
          { label: 'Step 2: Size the tick', text: 'Four hundred viewers times two asks per minute is eight hundred hits per minute of cheap cached reads. No held connections or room state is needed.' },
          { label: 'Step 3: Record the trigger', text: 'Note that sub five second alerts or tenfold audience growth would force a move to streams. Until then ticks stay cheapest.' }
        ],
        result: 'Ticks meet the contract with trivial operations and a written upgrade trigger.'
      },
      {
        title: 'Move a live scoreboard to streams',
        problem: 'A scoreboard with thousands of readers needs second level goals but no fan posting.',
        steps: [
          { label: 'Step 1: Rule out sockets', text: '```bash\n# direction: server to screen only\n# budget: about one second\n# audience: thousands of readers\n```\nOne way plus second budget plus large audience favors broadcast streams.' },
          { label: 'Step 2: Broadcast once', text: 'One server write fans to thousands of open streams instead of thousands of ticks hammering the endpoint. Frequency spikes cost one frame, not a storm.' },
          { label: 'Step 3: Keep sockets in reserve', text: 'Chat beside the scores would still need sockets, but scores alone do not pay that tax. Split features by direction rather than bundling.' }
        ],
        result: 'Streams deliver second level scores to crowds with one broadcast per event.'
      }
    ],
    keyTakeaways: [
      'Direction decides first: read only to streams or ticks, converse to sockets.',
      'Latency budgets of minutes, seconds, or instant map to ticks, streams, or sockets.',
      'Audience times frequency math exposes when cheap units turn costly.',
      'Asset push history must not be confused with live app data channels.'
    ],
    quiz: [
      {
        q: 'Which need forces sockets over streams?',
        options: ['Clients must publish through the same live channel', 'Many viewers read shared scores', 'Pages need rare admin refresh', 'Images need compression'],
        answer: 0,
        explanation: 'Step 1: Streams flow one way. Step 2: Publishing needs the reverse path. Step 3: Sockets provide both ways. Step 4: Therefore converse features force sockets.'
      },
      {
        q: 'A feed tolerates minute old data for a small team. What fits?',
        options: ['Global socket fleet with rooms', 'Simple interval polling on cached reads', 'Custom transport protocol', 'No updates at all'],
        answer: 1,
        explanation: 'Step 1: Budget is loose. Step 2: Audience is small. Step 3: Ticks meet both cheaply. Step 4: Heavier pipes add needless ops.'
      },
      {
        q: 'Why multiply audience by frequency?',
        options: ['To choose font sizes', 'To size aggregate load and compare ticks versus one broadcast', 'To set cookie expiry', 'To pick image colors'],
        answer: 1,
        explanation: 'Step 1: Unit cost misleads. Step 2: Aggregate reveals storms. Step 3: Broadcast shares writes. Step 4: Math picks the cheaper shape.'
      },
      // Selection-pattern: cheapest sufficient realtime choice (original)
      {
        q: 'What is the disciplined upgrade rule?',
        options: ['Always start on sockets', 'Start on the cheapest rung meeting direction plus latency, climb only on measured pain with a recorded trigger', 'Never use plain HTTP', 'Choose by logo color'],
        answer: 1,
        explanation: 'Step 1: Name direction plus budget. Step 2: Pick cheapest fit. Step 3: Record what breaks it. Step 4: Climb only when measures trip the trigger.'
      }
    ]
  }
]

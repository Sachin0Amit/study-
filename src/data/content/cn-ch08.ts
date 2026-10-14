import type { SectionContent } from '../library'

// ============================================================================
// Computer Networks — Chapter 8: Application Layer DNS HTTP Mail and FTP
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const cnCh08Content: SectionContent[] = [
  // ---------------------------------------------------------------- 8.1
  {
    sectionId: 'cn-ch8-s1',
    readingTime: 9,
    intro: 'Names stay stable while addresses shift with every renumbering and migration, so a lookup service must translate between them at planetary scale. The domain system spreads that mapping across a hierarchy of servers with aggressive caching. This section follows a query from root to answer and shows why most answers never leave the local cache.',
    objectives: [
      'Trace recursive versus iterative queries through root, TLD and authoritative tiers',
      'Explain caching, TTL expiry and record-type selection for each lookup',
      'Compute resolution latency from cache-hit rates and round-trip sums'
    ],
    concepts: [
      {
        term: 'Hierarchy tiers',
        kind: 'definition',
        statement: 'The **root** `ROOT` delegates to top-level **`TLD`** zones, which delegate to **authoritative** `AUTH` servers holding zone data. A resolver walks $$ROOT \\to TLD \\to AUTH$$ following **referrals** `REF` downward.',
        detail: 'Thirteen logical root identities anchor the tree, with anycast replicas behind each. No single server holds the whole namespace; each holds only pointers to its children plus its own records.'
      },
      {
        term: 'Recursive versus iterative',
        kind: 'method',
        statement: 'In **recursive** `REC` mode the local server does all walking and returns the final **answer** `ANS`; in **iterative** `ITER` mode each server returns the next **referral** `REF` and the requester walks itself. Client-to-local links use **`REC`** while server-to-server links use **`ITER`**, so $$\\text{client load} \\ll \\text{server load}.$$',
        detail: 'Stub resolvers set the recursion-desired bit and wait once. Authoritative servers never recurse for strangers, which bounds their work and contains cache-poisoning scope.'
      },
      {
        term: 'Caching and TTL',
        kind: 'law',
        statement: 'Every cached record carries **`TTL`** `TTL` seconds; hits served before expiry cost zero upstream trips. Effective latency obeys $$T = (1-h) \\times (RTT_{chain})$$ where `h` is the **hit rate** `HIT`.',
        detail: 'A $3600$-second TTL with hit rate $0.9$ cuts ten thousand daily queries to one thousand upstream. Negative answers cache too, for the smaller of the authority TTL and a cap near $300$ seconds.'
      },
      {
        term: 'Record types',
        kind: 'notation',
        statement: 'Type **`A`** `A` maps name to address, **`AAAA`** `AAAA` to next-generation address, **`CNAME`** `ALIAS` to canonical name, **`MX`** `MAIL` to mail exchanger with preference, **`NS`** `NSRV` to zone servers, and **`PTR`** `PTR` reverses address to name. Selection follows $$\\text{query type} = \\text{needed resource}.$$',
        detail: 'Mail delivery queries `MX` first and falls back to `A` when absent. Aliases chain toward one canonical `A`, with loop detection bounding the walk.'
      },
      {
        term: 'Consistency and coherence',
        kind: 'insight',
        statement: 'Copies may disagree during **`TTL`** windows after a change, giving **eventual consistency** `EVENT` with $$\\text{stale window} \\leq TTL.$$ Operators lower **`TTL`** before planned moves, then raise it after **stability** `STABLE` returns.',
        detail: 'A $86400$-second TTL changed to $300$ seconds a day ahead propagates the later move within minutes. Long TTL values favor quiet authoritative servers; short values favor agility.'
      }
    ],
    examples: [
      {
        title: 'Cold lookup of www.sample.test',
        problem: 'Resolver cache is empty. Trace lookup of www.sample.test with RTT 40 ms per server round trip.',
        steps: [
          { label: 'Step 1', text: 'Client asks local server recursively; local walks iteratively.\n```text\nlocal -> ROOT (.) : referral to test TLD\nlocal -> test TLD : referral to sample.test AUTH\nlocal -> AUTH     : A record 93.184.216.34\n```' },
          { label: 'Step 2', text: 'Three upstream trips at $40$ ms each total $120$ ms plus one local trip. Each referral narrows the suffix by one label.' },
          { label: 'Step 3', text: 'Local caches the `A` for its `TTL` and returns it. The next identical query hits locally in about $2$ ms with zero upstream trips.' }
        ],
        result: 'Cold cost 120 ms across three tiers; warm cost near 2 ms from cache.'
      },
      {
        title: 'Hit-rate latency arithmetic',
        problem: 'Chain RTT totals 120 ms cold. Hit rate is 0.9 warm with 2 ms local cost. Find mean latency.',
        steps: [
          { label: 'Step 1', text: 'Weight cold and warm paths by probability.\n```text\nT = 0.9*2 + 0.1*(2+120) = 1.8 + 12.2 = 14.0 ms\n```' },
          { label: 'Step 2', text: 'Nine of ten queries cost $2$ ms; one of ten pays $122$ ms including the local leg.' },
          { label: 'Step 3', text: 'Raising hit rate to $0.95$ drops the mean to $0.95 \\times 2 + 0.05 \\times 122 = 8.0$ ms, showing why TTL tuning matters.' }
        ],
        result: 'Mean near 14 ms at 90 percent hit rate, falling to 8 ms at 95 percent.'
      }
    ],
    keyTakeaways: [
      'Root, TLD and authoritative tiers divide the namespace by suffix.',
      'Stub clients recurse once; servers iterate through referrals.',
      'TTL caching removes the vast majority of upstream queries.',
      'Record type selects address, alias, mail or server data.'
    ],
    quiz: [
      // PYQ-pattern: recursive versus iterative walk with TTL latency math
      {
        q: 'Stub resolver to local server uses, and server-to-server uses:',
        options: ['recursive then iterative', 'iterative then recursive', 'recursive for both', 'iterative for both'],
        answer: 0,
        explanation: 'Step 1: Stub wants one answer, so it asks recursively. Step 2: Servers protect themselves by answering referrals only. Step 3: Local does the walking on behalf of the stub. Step 4: Recursive-then-iterative is therefore the standard split.'
      },
      {
        q: 'Cold chain 120 ms, hit rate 0.9, local 2 ms. Mean latency?',
        options: ['122 ms', '14 ms', '120 ms', '2 ms'],
        answer: 1,
        explanation: 'Step 1: Warm share 0.9 times 2 equals 1.8. Step 2: Cold share 0.1 times 122 equals 12.2. Step 3: Sum equals 14.0 ms. Step 4: Ignoring either leg misses the weighting.'
      },
      {
        q: 'Mail delivery for a domain first queries:',
        options: ['A', 'PTR', 'MX with fallback to A', 'AAAA only'],
        answer: 2,
        explanation: 'Step 1: Mail needs an exchanger plus preference. Step 2: MX records carry both. Step 3: Absent MX, the sender falls back to A. Step 4: PTR serves reverse mapping, not forwarding.'
      },
      {
        q: 'After changing an address, some clients see old answers because:',
        options: ['packets are lost', 'TCP failed', 'root is down', 'cached copies remain valid until TTL expiry'],
        answer: 3,
        explanation: 'Step 1: Old record cached with TTL 3600 lives up to an hour. Step 2: Queries hit cache without contacting authority. Step 3: Stale window is bounded by TTL. Step 4: Lowering TTL before moves shrinks the window.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.2
  {
    sectionId: 'cn-ch8-s2',
    readingTime: 9,
    intro: 'The web is a conversation of short text messages: a client asks for a resource with a method and headers, a server answers with a status and body. Persistent connections, cookies and cache validators keep that dialogue fast and stateful. This section reads requests and responses the way a debugger shows them.',
    objectives: [
      'Compose requests with methods and interpret status classes by first digit',
      'Compare nonpersistent, persistent and pipelined connection use',
      'Explain cookies, session tracking and conditional caching headers'
    ],
    concepts: [
      {
        term: 'Methods semantics',
        kind: 'definition',
        statement: 'Method **`GET`** `GET` retrieves, **`HEAD`** `HEAD` retrieves headers only, **`POST`** `POST` submits data, **`PUT`** `PUT` stores, **`DELETE`** `DEL` removes. Safe methods **`GET`** and **`HEAD`** never change state, with $$\\text{safe} \\in \\{GET, HEAD\\}.$$',
        detail: 'Retrievals repeat harmlessly while submissions may charge twice, so browsers warn on resubmission. Conditional variants add validators to skip unchanged bodies.'
      },
      {
        term: 'Status classes',
        kind: 'notation',
        statement: 'First digit **`2`** means success `OK`, **`3`** redirection `REDIR`, **`4`** client error `CLIENT`, **`5`** server error `SERVER`. Common members are **`200`** `OK200`, **`301`** `MOVED`, **`304`** `NOTMOD`, **`404`** `NOTFOUND`, **`500`** `SRVERR`.',
        detail: 'A $304$ answer carries no body because the cached copy is fresh. A $404$ blames the request target while $500$ blames server logic for the same failed load.'
      },
      {
        term: 'Connections and pipelining',
        kind: 'method',
        statement: 'Nonpersistent mode opens one **`TCP`** per object with $$T = N \\times 2RTT,$$ persistent mode reuses one channel with $$T = 1 \\times 2RTT + (N-1) \\times RTT,$$ and pipelining **overlaps** `PIPE` requests without waiting.',
        detail: 'Ten objects at $RTT = 50$ ms cost $1000$ ms nonpersistent against $550$ ms persistent before transfer bytes. Head-of-line blocking in strict pipelining motivated multiplexed successors.'
      },
      {
        term: 'Cookies and sessions',
        kind: 'method',
        statement: 'Server sends **`Set-Cookie`** `SET` with identifier `SID`; browser returns **`Cookie`** `BACK` on later visits. State lives server-side keyed by **`SID`** with $$\\text{user state} = \\text{table}(SID).$$',
        detail: 'Without cookies every load looks like a stranger. Attributes for scope, expiry and transport flags confine where the token travels.'
      },
      {
        term: 'Caching validators',
        kind: 'law',
        statement: 'Validators **`ETag`** `ET` and **`Last-Modified`** `LM` let clients send **`If-None-Match`** `INM` and receive **`304`** instead of **`200`** when fresh. Bandwidth saved per revalidation is $$\\text{saved} = \\text{body bytes}.$$',
        detail: 'A $2$-MB image revalidated a hundred times daily saves $200$ MB of transfer for a few header exchanges. Weak validators compare semantics while strong ones compare bytes.'
      }
    ],
    examples: [
      {
        title: 'Time ten objects over two connection styles',
        problem: 'Page has base plus nine embeds (N 10). RTT 50 ms, ignore transfer time. Compare nonpersistent with persistent.',
        steps: [
          { label: 'Step 1', text: 'Apply the round-trip formulas.\n```text\nnonpersistent: 10 * 2 * 50 = 1000 ms\npersistent:    2 * 50 + 9 * 50 = 550 ms\n```' },
          { label: 'Step 2', text: 'Nonpersistent pays two trips per object for handshake plus request. Persistent pays one handshake total then one trip per object.' },
          { label: 'Step 3', text: 'Saving is $450$ ms, about $45$ percent, before parallel channels or multiplexing narrow the gap further.' }
        ],
        result: 'Persistence halves load latency by removing repeated handshakes.'
      },
      {
        title: 'Cookie and cache exchange',
        problem: 'First visit sets session, second visit revalidates a logo. Show the header flow.',
        steps: [
          { label: 'Step 1', text: 'Server stamps the browser on first contact.\n```text\nS->C: 200 OK + Set-Cookie: sid=abc123\nC->S: GET /logo + Cookie: sid=abc123 + If-None-Match: v7\nS->C: 304 Not Modified (no body)\n```' },
          { label: 'Step 2', text: 'Cookie `sid` of value `abc123` restores cart and login on arrival. Validator `v7` matches, so no body follows.' },
          { label: 'Step 3', text: 'Transfer is a few hundred header bytes instead of tens of thousands of image bytes.' }
        ],
        result: 'Cookies restore state; validators replace full bodies with short confirmations.'
      }
    ],
    keyTakeaways: [
      'Methods separate retrieval from submission and storage.',
      'First status digit fixes the outcome class at a glance.',
      'Persistent channels remove per-object handshakes.',
      'Cookies hold identity while validators skip unchanged bodies.'
    ],
    quiz: [
      // PYQ-pattern: status-class reading with persistent-connection timing
      {
        q: 'Response 301 with Location header means:',
        options: ['success with body', 'redirection to a new address', 'client typo always', 'server crashed'],
        answer: 1,
        explanation: 'Step 1: First digit 3 marks redirection. Step 2: 301 means moved permanently. Step 3: Location names the new address. Step 4: Client reissues the request there.'
      },
      {
        q: 'N 10 objects, RTT 50 ms. Nonpersistent total handshake-plus-request time is:',
        options: ['550 ms', '100 ms', '1000 ms', '50 ms'],
        answer: 2,
        explanation: 'Step 1: Each object costs 2 trips. Step 2: 2 times 50 equals 100 ms per object. Step 3: 10 times 100 equals 1000. Step 4: 550 is the persistent total, not nonpersistent.'
      },
      {
        q: 'Server returns 304 to If-None-Match. Meaning?',
        options: ['error, retry', 'server overloaded', 'redirect login', 'cached copy is fresh; no body sent'],
        answer: 3,
        explanation: 'Step 1: 304 belongs to class 3. Step 2: Validator matched the stored entity tag. Step 3: Body would duplicate the cache. Step 4: Headers only confirm reuse.'
      },
      {
        q: 'Role of Cookie header on second visit:',
        options: ['it presents session id so server restores state', 'it deletes history', 'it encrypts DNS', 'it closes TCP'],
        answer: 0,
        explanation: 'Step 1: First response set sid abc123. Step 2: Browser stores it by scope. Step 3: Later requests attach Cookie with that value. Step 4: Server looks up table by sid.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.3
  {
    sectionId: 'cn-ch8-s3',
    readingTime: 8,
    intro: 'Mail moves by pushing messages between servers and then letting clients pull them down on demand. Simple transfer handles the push leg while two different retrieval styles handle the pull leg. Attachments ride along through a text-safe encoding that survives seven-bit relays.',
    objectives: [
      'Trace push delivery through transfer agents to the receiver mailbox',
      'Contrast download-and-delete retrieval with sync-and-keep retrieval',
      'Explain text-safe attachment encoding and header fields'
    ],
    concepts: [
      {
        term: 'Push with SMTP',
        kind: 'definition',
        statement: 'Sender agents **push** `PUSH` with commands **`HELO`**, **`MAIL FROM`**, **`RCPT TO`**, **`DATA`** over **`TCP`** port `25`. Replies are three-digit **`codes`** `CODE` with $$250 = OK, \\quad 354 = send\\ body, \\quad 550 = no\\ mailbox.$$',
        detail: 'Transfer hops queue-and-forward between relays until the receiver mailbox accepts. End-to-end confirmation is absent; each hop only promises the next.'
      },
      {
        term: 'POP3 download model',
        kind: 'definition',
        statement: 'Post-office **`POP3`** `POP` on port `110` authenticates with **`USER`** and **`PASS`**, lists with **`LIST`**, fetches with **`RETR`**, deletes with **`DELE`**. Default mode is **download-and-delete** `DEL` with $$\\text{server copy} = 0 \\text{ after pull}.$$',
        detail: 'Single-device users keep one mailbox file locally with tiny server quotas. Reading from a second device sees nothing because the first already removed everything.'
      },
      {
        term: 'IMAP sync model',
        kind: 'method',
        statement: 'Message-access **`IMAP`** `IMAP` on port `143` keeps mail on the **server** `SRV` and syncs flags like seen and answered across devices. Folders, search and partial fetch run **remotely** `REMOTE` with $$\\text{devices} \\to 1 \\text{ store}.$$',
        detail: 'Phones and laptops show identical read states because flags live beside the messages. Headers can be scanned without downloading multi-megabyte bodies.'
      },
      {
        term: 'MIME attachments',
        kind: 'notation',
        statement: 'Multipurpose extensions **`MIME`** `MIME` declare type **`Content-Type`** `TYPE` and encoding **`base64`** `B64` for binary parts. Text grows by about **one third** `OVER` with $$\\text{wire} \\approx \\frac{4}{3} \\times \\text{binary}.$$',
        detail: 'A $3$-MB photo encodes near $4$ MB of text lines that survive seven-bit relays. Each part carries its own type so players choose the right handler.'
      },
      {
        term: 'Spam and authentication aids',
        kind: 'insight',
        statement: 'Sender frameworks **`SPF`**, **`DKIM`** and **`DMARC`** `AUTH` publish which servers may use a domain and sign each body. Receivers weigh **content** `CONTENT` plus reputation with $$\\text{score} > \\text{threshold} \\to quarantine.$$',
        detail: 'Forged envelope senders fail alignment and score upward. Greylisting, throttling and user reports feed the same scoring pipeline.'
      }
    ],
    examples: [
      {
        title: 'Push from Alice to Bob across two relays',
        problem: 'Alice at a.test mails Bob at b.test. Show the push dialogue and where the message rests.',
        steps: [
          { label: 'Step 1', text: 'Client submits to its relay, which forwards to the peer relay.\n```text\nC: MAIL FROM:<alice@a.test>  S: 250 OK\nC: RCPT TO:<bob@b.test>      S: 250 OK\nC: DATA ... Hello Bob ... .  S: 250 queued\n```' },
          { label: 'Step 2', text: 'Each hop returns $250$ only for acceptance by the next queue, not for final delivery. The message waits in the receiver spool.' },
          { label: 'Step 3', text: 'Bob pulls later with `POP3` or `IMAP`; push completes at spooling, pull completes at reading.' }
        ],
        result: 'Push ends at the receiver mailbox; retrieval is a separate pull phase.'
      },
      {
        title: 'Attachment size on the wire',
        problem: 'User attaches a 3-MB photo. Estimate transfer bytes and explain the growth.',
        steps: [
          { label: 'Step 1', text: 'Binary must survive text-only relays.\n```text\nwire = 4/3 * 3 MB = 4 MB approx (plus headers)\n```' },
          { label: 'Step 2', text: 'Every $3$ binary bytes become $4$ text characters, a factor $1.33$. Three MB times $1.33$ is $4$ MB.' },
          { label: 'Step 3', text: 'Headers add kilobytes more. Chunked fetching lets slow links preview headers first.' }
        ],
        result: 'Expect near 4 MB on the wire for a 3-MB attachment.'
      }
    ],
    keyTakeaways: [
      'Transfer pushes between servers; retrieval pulls to clients.',
      'Download-and-delete suits one device; sync-and-keep suits many.',
      'Text encoding inflates binary by about one third.',
      'Domain authentication and scoring separate ham from spam.'
    ],
    quiz: [
      // PYQ-pattern: push versus pull ports with encoding-size math
      {
        q: 'Push leg between mail servers normally uses port:',
        options: ['110', '143', '25', '80'],
        answer: 2,
        explanation: 'Step 1: Retrieval uses 110 for POP3 and 143 for IMAP. Step 2: Web uses 80. Step 3: Transfer push uses 25 for server relay. Step 4: Submission variants use nearby ports but relay stays 25.'
      },
      {
        q: 'User reads mail on phone and laptop with matching flags. Protocol?',
        options: ['POP3 download-and-delete', 'FTP', 'SMTP push', 'IMAP sync-and-keep'],
        answer: 3,
        explanation: 'Step 1: Two devices need one shared store. Step 2: POP3 removes after first pull. Step 3: IMAP keeps on server with shared flags. Step 4: Matching seen states prove IMAP.'
      },
      {
        q: '6-MB binary encodes to about what text size?',
        options: ['8 MB', '6 MB', '4.5 MB', '12 MB'],
        answer: 0,
        explanation: 'Step 1: Factor is 4 divided by 3 which is 1.33. Step 2: 6 times 1.33 equals 8. Step 3: 4.5 assumes compression, not encoding. Step 4: 12 doubles, too large.'
      },
      {
        q: 'SMTP reply 550 to RCPT TO means:',
        options: ['message queued', 'no such mailbox at this host', 'send body now', 'closing channel'],
        answer: 1,
        explanation: 'Step 1: 250 means accepted. Step 2: 354 means send body. Step 3: 550 marks a permanent mailbox failure. Step 4: Sender must stop retrying that address.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.4
  {
    sectionId: 'cn-ch8-s4',
    readingTime: 6,
    intro: 'File transfer separates conversation from content: one connection carries commands while a second carries each file or listing. Whether the server or the client opens that second channel defines active and passive modes. Firewalls and address translation make the choice operational, not cosmetic.',
    objectives: [
      'Distinguish control and data connections by lifetime and content',
      'Contrast active and passive data-channel setup direction',
      'Select the mode that traverses client-side firewalls and translators'
    ],
    concepts: [
      {
        term: 'Control versus data channels',
        kind: 'definition',
        statement: 'Port `21` carries the persistent **control** `CTRL` dialogue of `USER`, `PASS`, `RETR` and `STOR`. Each transfer opens a fresh **data** `DATA` channel on ephemeral ports closed after **one file** `ONE`, so $$\\text{data channels} = \\text{files} + \\text{listings}.$$',
        detail: 'Control survives across many files while data is disposable per object. Aborting the control channel orphans the data flow, which then times out.'
      },
      {
        term: 'Active mode',
        kind: 'method',
        statement: 'Client listens on port `P` and sends **`PORT`** `PORT` with its address; server connects **server-to-client** `S2C` from port `20` to `P`. Direction obeys $$server \\to client \\text{ for data}.$$',
        detail: 'Client firewalls that block inbound connections break this mode silently. The server source port $20$ historically marked data segments on the wire.'
      },
      {
        term: 'Passive mode',
        kind: 'method',
        statement: 'Server listens on port `Q` and replies with **`227`** `PASV` carrying its address; client connects **client-to-server** `C2S` for data with $$client \\to server \\text{ for data}.$$ Translators and filters **prefer** `PASV` since all opens go outward.',
        detail: 'Both channels then originate client-side, traversing home routers without inbound rules. Busy servers allocate `Q` from a published range that perimeter filters pre-authorize.'
      },
      {
        term: 'Transfer types and resumes',
        kind: 'notation',
        statement: 'Type **`I`** `BIN` moves bytes exactly while type **`A`** `ASC` translates line endings. Offset **`REST`** `REST` restarts at byte `K` with $$\\text{remaining} = \\text{size} - K.$$',
        detail: 'Binary mode is mandatory for archives and images; text mode suits plain logs across operating systems. A dropped $100$-MB fetch resumes at $K = 60000000$ instead of restarting.'
      },
      {
        term: 'Anonymous and secure variants',
        kind: 'insight',
        statement: 'Public archives allow login **`anonymous`** `ANON` with contact as password, while protected sites wrap the same dialogue in **`TLS`** `SEC` or tunnel it over **`SFTP`** `SSH`. Credentials never ride **clear** `CLR` on secured variants with $$\\text{plaintext} = 0.$$',
        detail: 'Packet capture on plain port $21$ reveals passwords directly. Explicit security upgrades the same ports; implicit variants assign adjacent secured ports.'
      }
    ],
    examples: [
      {
        title: 'Trace active fetch behind a strict firewall',
        problem: 'Client 10.0.0.5 behind a filter that blocks inbound opens tries active mode to fetch report.pdf. Show the failure point.',
        steps: [
          { label: 'Step 1', text: 'Control succeeds outward and negotiates the data port.\n```text\nC->S control: PORT 10,0,0,5,19,136  (P = 19*256+136 = 5000)\nS->C data attempt: 20 -> 10.0.0.5:5000  BLOCKED inbound\n```' },
          { label: 'Step 2', text: 'Port math $19 \\times 256 + 136 = 5000$ checks the advertised listener. The server SYN toward port $5000$ never passes the filter.' },
          { label: 'Step 3', text: 'Control waits then times out. Switching to passive with `PASV` lets the client open outward and the fetch completes.' }
        ],
        result: 'Active fails where inbound opens are blocked; passive fixes it by reversing data direction.'
      },
      {
        title: 'Resume a broken 100-MB download',
        problem: 'Download of 100000000 bytes breaks at 60000000. Resume with offset and count remaining.',
        steps: [
          { label: 'Step 1', text: 'Client asks to continue from the break point.\n```text\nC: REST 60000000   S: 350 ready\nC: RETR big.iso    (data from byte 60000000)\n```' },
          { label: 'Step 2', text: 'Remaining bytes equal $100000000 - 60000000 = 40000000$. A fresh data channel carries only that tail.' },
          { label: 'Step 3', text: 'Binary type `I` guarantees the appended tail matches bit for bit; text mode would corrupt the join.' }
        ],
        result: 'Offset restart fetches 40 MB instead of repeating 100 MB.'
      }
    ],
    keyTakeaways: [
      'Control on port 21 persists; each data channel is single-use.',
      'Active has the server call back; passive has the client call forward.',
      'Client-side filters and translators favor passive mode.',
      'Binary type plus offsets enable exact resumes.'
    ],
    quiz: [
      // PYQ-pattern: active versus passive direction with PORT math
      {
        q: 'Control versus data channel lifetimes:',
        options: ['both persist equally', 'both close per command', 'data persists; control is per file', 'control persists across files; data is per file then closed'],
        answer: 3,
        explanation: 'Step 1: Login spans many files on one control channel. Step 2: Each listing or file opens one data channel. Step 3: Data closes after its single object. Step 4: Counts match files plus listings.'
      },
      {
        q: 'PORT 10,0,0,5,19,136 advertises data port:',
        options: ['5000', '136', '19', '21136'],
        answer: 0,
        explanation: 'Step 1: Port equals fifth times 256 plus sixth. Step 2: 19 times 256 equals 4864. Step 3: 4864 plus 136 equals 5000. Step 4: 136 alone ignores the high byte.'
      },
      {
        q: 'Client behind a filter blocking inbound opens should use:',
        options: ['active mode', 'passive mode with client opening data outward', 'no data channel', 'shorter password'],
        answer: 1,
        explanation: 'Step 1: Active needs server-to-client inbound. Step 2: Filter drops that SYN. Step 3: Passive reverses direction to client-to-server. Step 4: Outward opens pass, so passive succeeds.'
      },
      {
        q: 'Resume at byte 60000000 of 100000000-byte file fetches:',
        options: ['100000000 more', '60000000 more', '40000000 more', '0 more'],
        answer: 2,
        explanation: 'Step 1: Done equals 60000000. Step 2: Remaining equals 100000000 minus 60000000. Step 3: Difference equals 40000000. Step 4: Offset avoids repeating finished bytes.'
      }
    ]
  }
]

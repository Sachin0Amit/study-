import type { SectionContent } from '../library'

// ============================================================================
// Computer Networks — Chapter 1: Layering, OSI, TCP/IP and Switching
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const cnCh01Content: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: 'cn-ch1-s1',
    readingTime: 7,
    intro: 'A service defines what a layer offers to the layer above while a protocol defines how peer entities cooperate through message formats and timing. An interface marks the boundary where the service is invoked and encapsulation adds headers as data descends the stack. This section builds the vocabulary that makes later delay and switching analysis precise.',
    objectives: [
      'Distinguish service from protocol and interface using data flow direction',
      'Trace encapsulation as headers accumulate down the stack',
      'Classify protocol data units at each layer by name and role'
    ],
    concepts: [
      {
        term: 'Service versus protocol',
        kind: 'definition',
        statement: 'A **service** is the `vertical` support a layer offers upward, while a **protocol** is the `horizontal` rule set that peer layers use to cooperate. Services say what is provided and protocols say how peers achieve it.',
        detail: 'A file transfer module uses the transport service without knowing how transport peers retransmit. Changing the protocol implementation preserves the service contract, which is why stacks stay modular across vendors.'
      },
      {
        term: 'Interface and service access point',
        kind: 'definition',
        statement: 'The **interface** is the `SAP` boundary where an upper layer requests service through primitives such as request and indication. Each `SAP` has an address so the lower layer knows which upper user to deliver to.',
        detail: 'Sockets expose transport interfaces to applications with an address combining network address and port. Clean interfaces let one layer be replaced without rewriting its neighbors.'
      },
      {
        term: 'Encapsulation down the stack',
        kind: 'method',
        statement: 'Each layer wraps the payload it receives with its own **header** stored in `HDR`, sometimes plus a trailer, forming a larger unit for the layer below. Efficiency follows $$\\eta = \\frac{L}{L + H}$$ where `L` is payload and `H` is total header.',
        detail: 'With $L = 12000$ bits and $H = 400$ bits, $\\eta$ is about $0.968$, so overhead is near three percent. Demultiplexing strips headers in reverse order using type fields carried in each `HDR`.'
      },
      {
        term: 'Layering principles',
        kind: 'insight',
        statement: 'Good layering keeps each function in **one place** chosen by `cohesion`, so addressing, error handling and flow control live where they fit best. Each layer adds value only through its own `header` vocabulary.',
        detail: 'Duplication is avoided when one mechanism serves many users, for instance one checksum covering an entire frame. Too many layers add overhead while too few entangle unrelated duties.'
      },
      {
        term: 'Protocol data unit names',
        kind: 'notation',
        statement: 'The unit is called **message** at `APP`, **segment** at `TCP`, **datagram** at `IP`, and **frame** at `MAC` layers. Remembering `SEG` versus `DAT` versus `FRM` prevents confusion when headers nest.',
        detail: 'A segment becomes the payload of a datagram, which becomes the payload of a frame. Each name signals which header set is currently outermost.'
      }
    ],
    examples: [
      {
        title: 'Encapsulation overhead drill',
        problem: 'Application message 12000 bits gains a 160-bit transport header, an 80-bit network header and a 160-bit link header plus trailer. Find efficiency and total on wire.',
        steps: [
          { label: 'Step 1', text: 'Add headers $H = 160 + 80 + 160 = 400$ bits. Total on wire $T = 12000 + 400 = 12400$ bits.\n```text\nL=12000 H=400 T=12400 eta=L over T\n```' },
          { label: 'Step 2', text: 'Efficiency $\\eta = 12000$ divided by $12400$, about $0.968$. Overhead is $400$ divided by $12400$, about $0.032$.' },
          { label: 'Step 3', text: 'Name each stage with `SEG` after transport, `DAT` after network and `FRM` after link. Stripping reverses the same order at the receiver.' }
        ],
        result: 'Wire size 12400 bits with efficiency near 0.968 and overhead near 3 percent.'
      },
      {
        title: 'Service versus protocol sorting',
        problem: 'Sort these into service, interface or protocol: socket listen call, three-way handshake exchange, port number, retransmission timer.',
        steps: [
          { label: 'Step 1', text: 'Socket listen and port number face upward through `SAP`, so they are service and interface concepts. They are invoked locally without any peer exchange.' },
          { label: 'Step 2', text: 'Handshake messages and timer rules constrain peer behavior across `TCP` endpoints, so they belong to protocol. They define format, sequence and timing.' },
          { label: 'Step 3', text: 'Check direction: `vertical` means service and interface while `horizontal` means protocol. The timer backs off using peer acknowledgments, confirming protocol status.' }
        ],
        result: 'Service and interface are local and vertical while handshake and timer are peer rules and horizontal.'
      }
    ],
    keyTakeaways: [
      'Services face upward locally while protocols run horizontally between peers.',
      'Interfaces expose service access points addressed by port-like selectors.',
      'Encapsulation efficiency equals payload divided by total wire size.',
      'Units are named message, segment, datagram and frame from top to bottom.'
    ],
    quiz: [
      // PYQ-pattern: service versus protocol classification drill
      {
        q: 'Which pair correctly separates service from protocol?',
        options: ['Service is peer rules and protocol is local support', 'Both are identical names for headers', 'Service is upward support and protocol is peer cooperation', 'Service is a header and protocol is a port'],
        answer: 2,
        explanation: 'Step 1: Service faces the layer above locally. Step 2: Protocol coordinates two peers across the network. Step 3: Headers implement protocol while access points expose service. Step 4: Only this choice keeps vertical support apart from horizontal rules.'
      },
      {
        q: 'A 12000-bit message with 400 bits of headers has efficiency:',
        options: ['0.968', '0.500', '0.032', '1.033'],
        answer: 0,
        explanation: 'Step 1: Total equals 12000 plus 400 which is 12400 bits. Step 2: Efficiency equals 12000 divided by 12400. Step 3: The quotient is about 0.968. Step 4: The value 0.032 is overhead share and 1.033 inverts the ratio.'
      },
      {
        q: 'Correct order of data units from top to bottom is:',
        options: ['frame, datagram, segment, message', 'segment, frame, datagram, message', 'datagram, message, frame, segment', 'message, segment, datagram, frame'],
        answer: 3,
        explanation: 'Step 1: Application holds the message. Step 2: Transport wraps it as a segment. Step 3: Network wraps it as a datagram. Step 4: Link wraps it as a frame, so this choice lists the descent correctly.'
      },
      {
        q: 'An interface SAP primarily provides:',
        options: ['peer retransmission format', 'local access address for the upper layer', 'routing table entries', 'modulation choice'],
        answer: 1,
        explanation: 'Step 1: Interfaces are local boundaries. Step 2: SAP addresses select the upper user. Step 3: Ports illustrate the idea with 16-bit numbers giving 65536 values. Step 4: Peer formats belong to protocol, so this choice is correct.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.2
  {
    sectionId: 'cn-ch1-s2',
    readingTime: 8,
    intro: 'The OSI reference model names seven layers from physical through application while the TCPIP model in daily use groups duties into four practical layers. Real protocols do not always sit where textbooks first place them and tunnels blur boundaries further. This section maps names to duties so later header discussions stay anchored.',
    objectives: [
      'Place each duty in the seven-layer OSI order without gaps',
      'Collapse OSI layers into the four-layer TCPIP view used in practice',
      'Locate common protocols at their operating layer by header role'
    ],
    concepts: [
      {
        term: 'Seven-layer OSI order',
        kind: 'definition',
        statement: 'From bottom to top the layers are **physical** `L1`, data link `L2`, network `L3`, transport `L4`, session `L5`, presentation `L6` and application `L7`. Mnemonic order is preserved by `L1` through `L7` numbering.',
        detail: 'Lower three handle delivery across links and networks while upper four handle end-to-end and data representation. Each layer uses only the service below and offers service above.'
      },
      {
        term: 'Four-layer TCPIP view',
        kind: 'definition',
        statement: 'The practical stack groups duties as **link** `NETIF`, internet `IP`, transport `TCP` and application `APP`. Session and presentation duties fold into `APP` libraries such as TLS.',
        detail: 'Link covers L1 plus L2, internet equals L3, transport equals L4, and application covers L5 through L7. Fewer layers mean faster implementation with slightly less prescriptive guidance.'
      },
      {
        term: 'Where real protocols live',
        kind: 'insight',
        statement: 'Addressing by `IP` marks the **network** layer while ports in `TCP` mark transport and URLs in `HTTP` mark application. A repeater acts at `L1` and a switch at `L2`.',
        detail: 'Encryption libraries run above transport yet below the application message, showing that real systems layer by function rather than by number. Tunnels carry one stack inside another, nesting the same names twice.'
      },
      {
        term: 'Peer communication fiction',
        kind: 'method',
        statement: 'Each layer imagines a **virtual peer link** `VLINK` to its remote counterpart while bits physically descend and ascend. Headers carry the `peer` conversation without involving intermediate layers.',
        detail: 'Transport acknowledgments travel inside network datagrams inside link frames, yet logically they run endpoint to endpoint. Intermediate nodes forward lower layers without opening upper headers.'
      },
      {
        term: 'Service primitives vocabulary',
        kind: 'notation',
        statement: 'Requests use primitives named **request** `REQ`, indication `IND`, response `RSP` and confirm `CNF`. A `REQ` downward triggers an `IND` upward at the peer.',
        detail: 'Connection setup shows all four in order across two machines. Data transfer often uses only request and indication in unconfirmed service.'
      }
    ],
    examples: [
      {
        title: 'Place six duties in OSI order',
        problem: 'Order these duties: routing, framing, bit signaling, reliable ports, dialog control, syntax conversion.',
        steps: [
          { label: 'Step 1', text: 'Bit signaling uses `L1` hardware, framing uses `L2` addresses, routing uses `L3` global addresses.\n```text\nL1 signal -> L2 frame -> L3 route -> L4 ports\n```' },
          { label: 'Step 2', text: 'Reliable ports map to $L4$ transport with sequence numbers. Dialog control maps to $L5$ session with checkpoints.' },
          { label: 'Step 3', text: 'Syntax conversion maps to $L6$ presentation with encodings. Full order is signal, frame, route, ports, dialog, syntax.' }
        ],
        result: 'Bottom-up order is physical, link, network, transport, session, presentation.'
      },
      {
        title: 'Collapse OSI into TCPIP',
        problem: 'A message uses Ethernet, IP, TCP and HTTP. Show the four-group mapping and where TLS fits.',
        steps: [
          { label: 'Step 1', text: 'Ethernet covers `L1` plus `L2` as one link group. IP alone forms the internet group with global `IP` addresses.' },
          { label: 'Step 2', text: 'TCP forms transport with `PORT` multiplexing and reliability. HTTP plus TLS form application with `URL` and encryption.' },
          { label: 'Step 3', text: 'TLS sits between `TCP` bytes and `HTTP` text, proving session and presentation live inside application libraries in daily stacks.' }
        ],
        result: 'Link holds Ethernet, internet holds IP, transport holds TCP, application holds TLS plus HTTP.'
      }
    ],
    keyTakeaways: [
      'OSI runs L1 physical through L7 application in fixed order.',
      'TCPIP groups the same duties into link, internet, transport and application.',
      'Protocol layer follows header role such as IP for network and ports for transport.',
      'Peer layers converse logically while bits travel physically up and down.'
    ],
    quiz: [
      {
        q: 'Which OSI layer provides routing across networks?',
        options: ['data link', 'transport', 'presentation', 'network'],
        answer: 3,
        explanation: 'Step 1: Physical moves bits on one link. Step 2: Data link frames one hop. Step 3: Network adds global addresses and routing across hops. Step 4: Transport adds ports end to end, so network is the routing layer.'
      },
      // PYQ-pattern: OSI versus TCPIP layer mapping
      {
        q: 'TLS encryption most closely replaces which OSI layers in the TCPIP view?',
        options: ['physical and link', 'session and presentation', 'network and transport', 'only physical'],
        answer: 1,
        explanation: 'Step 1: TLS sets up sessions with handshakes. Step 2: TLS converts syntax with record encoding. Step 3: Those match L5 dialog and L6 syntax duties. Step 4: In TCPIP both fold into application libraries, so this choice is correct.'
      },
      {
        q: 'A switch forwarding by link addresses operates at:',
        options: ['L2', 'L1 only', 'L4', 'L7'],
        answer: 0,
        explanation: 'Step 1: L1 repeats bits without addresses. Step 2: L2 frames carry link addresses. Step 3: Switches learn and forward on those addresses. Step 4: L4 uses ports and L7 uses URLs, so L2 is correct.'
      },
      {
        q: 'Port numbers that separate applications belong to:',
        options: ['network', 'link', 'transport', 'application'],
        answer: 2,
        explanation: 'Step 1: Link uses hardware addresses. Step 2: Network uses global IP addresses. Step 3: Transport adds 16-bit ports giving 65536 values per address. Step 4: Applications bind those ports, so transport is the owner.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.3
  {
    sectionId: 'cn-ch1-s3',
    readingTime: 8,
    intro: 'Circuit switching reserves a path before any byte flows while packet switching lets each unit find its own way without prior reservation. Virtual circuits keep the order and setup of circuits yet still slice resources into packets. This section compares setup cost against sharing gain so the right choice is clear for voice and for bursty data.',
    objectives: [
      'Contrast reservation, addressing and failure handling across three methods',
      'Explain statistical multiplexing gain for bursty flows sharing one link',
      'Select datagram or virtual-circuit behavior from order and setup needs'
    ],
    concepts: [
      {
        term: 'Circuit switching reservation',
        kind: 'definition',
        statement: 'A **circuit** reserves `bandwidth` and switch state along a fixed path before transfer starts. No per-packet header is needed once the `path` is nailed up.',
        detail: 'Setup delay precedes data and idle capacity cannot be reused by others. Failure of any hop breaks the whole circuit until a fresh setup completes.'
      },
      {
        term: 'Packet switching and datagrams',
        kind: 'definition',
        statement: 'Each **packet** carries its full `DEST` address and is forwarded independently with no setup. Routers may send neighbors along **different paths** chosen by `NEXT` lookups.',
        detail: 'Bursty sources share well because idle gaps are instantly reusable. Reordering and variable delay are the price of that flexibility.'
      },
      {
        term: 'Virtual-circuit behavior',
        kind: 'definition',
        statement: 'A **virtual circuit** uses `VCID` labels after a setup phase so packets follow one path in order. Labels have only **local meaning** swapped by `TABLE` at each switch.',
        detail: 'Setup installs label mappings while teardown removes them. Order is preserved without per-packet global addresses, blending circuit order with packet sharing.'
      },
      {
        term: 'Statistical multiplexing gain',
        kind: 'theorem',
        statement: 'Sharing wins when bursty flows rarely peak together, measured by **gain** `GAIN` comparing peak sum against link rate. Utilization follows $$\\rho = \\frac{\\lambda}{\\mu}$$ with `LAMBDA` arrival and `MU` service rates.',
        detail: 'Ten sources at 10 megabits peak but 2 megabits average need 100 megabits circuit style yet fit near 30 megabits packet style with buffering. Queues absorb the overlap when peaks briefly coincide.'
      },
      {
        term: 'Setup versus per-packet cost',
        kind: 'insight',
        statement: 'Circuits pay **once** in `SETUP` delay while datagrams pay **per packet** in `HDR` bytes and lookup work. Short exchanges favor `zero setup` and long steady streams favor `reserved` paths.',
        detail: 'A single-packet query avoids setup entirely under datagrams. A sustained voice stream amortizes one setup over millions of packets under circuits or virtual circuits.'
      }
    ],
    examples: [
      {
        title: 'Share ten bursty sources',
        problem: 'Ten sources each peak at 10 megabits per second and average 2 megabits per second. Compare circuit capacity against packet capacity with margin.',
        steps: [
          { label: 'Step 1', text: 'Circuit sum needs $10$ times $10$ which is $100$ megabits per second of reserved rate.\n```text\ncircuit = 10 x 10 = 100 Mbps reserved\npacket avg = 10 x 2 = 20 Mbps offered\n```' },
          { label: 'Step 2', text: 'Packet average offered is $10$ times $2$ which is $20$ megabits per second. Provision $30$ megabits per second for bursts plus queue.' },
          { label: 'Step 3', text: 'Saving is $100$ minus $30$ which is $70$ megabits per second of capacity freed by `sharing`. Queues handle moments when more than three peaks overlap.' }
        ],
        result: 'Circuits need 100 megabits while packets fit near 30 megabits for the same sources.'
      },
      {
        title: 'Choose datagram or virtual circuit',
        problem: 'Flow A is one query with one reply needing no order. Flow B is a long file needing order without global addresses per packet. Assign methods.',
        steps: [
          { label: 'Step 1', text: 'Flow A has one packet each way, so `SETUP` would dominate. Datagrams with full `DEST` addresses avoid setup.' },
          { label: 'Step 2', text: 'Flow B has many packets needing order, so `VCID` labels after one setup preserve sequence. Intermediate nodes swap labels via `TABLE`.' },
          { label: 'Step 3', text: 'Failure handling differs: flow A reroutes per packet while flow B must rebuild the `path` after a hop loss.' }
        ],
        result: 'Query uses datagrams and file uses virtual circuit for order with low per-packet cost.'
      }
    ],
    keyTakeaways: [
      'Circuits reserve paths early and waste idle capacity but keep order and timing.',
      'Datagrams carry full addresses per packet and reroute independently.',
      'Virtual circuits set up once then use local labels to keep order.',
      'Bursty sharing gain grows when peaks rarely overlap in time.'
    ],
    quiz: [
      {
        q: 'Which method needs no setup before data flows?',
        options: ['datagram packet switching', 'virtual circuit', 'circuit switching', 'time-division multiplexing with reservation'],
        answer: 0,
        explanation: 'Step 1: Circuits reserve before sending. Step 2: Virtual circuits also signal setup for labels. Step 3: Datagrams carry addresses and need zero setup. Step 4: Reserved multiplexing also preassigns slots, so this choice is correct.'
      },
      {
        q: 'Ten sources peak at 10 and average 2 megabits per second. Packet provisioning near 30 megabits works because:',
        options: ['peaks never matter', 'headers vanish', 'average plus margin covers rare overlaps via queues', 'setup delay is zero for circuits'],
        answer: 2,
        explanation: 'Step 1: Average offered is 10 times 2 which is 20 megabits. Step 2: Margin to 30 absorbs bursts. Step 3: Queues hold brief overlaps beyond 30. Step 4: Headers still cost bytes, so sharing plus buffering is the reason.'
      },
      // PYQ-pattern: virtual-circuit label versus datagram address trade-off
      {
        q: 'Virtual-circuit labels differ from datagram addresses because labels are:',
        options: ['global and carried every time', 'local per hop and installed by setup', 'physical voltages', 'encryption keys'],
        answer: 1,
        explanation: 'Step 1: Datagrams carry global destination each packet. Step 2: Virtual circuits install per-hop label tables during setup. Step 3: Each switch swaps VCID locally. Step 4: Voltages and keys are unrelated, so local labels are correct.'
      },
      {
        q: 'Long steady voice historically favored circuits since:',
        options: ['queues are forbidden', 'packets cannot carry voice', 'headers are larger than voice', 'one setup amortizes over millions of packets with steady timing'],
        answer: 3,
        explanation: 'Step 1: Voice sends continuously for minutes. Step 2: One setup cost spreads thin. Step 3: Reserved slots give steady delay without per-packet lookups. Step 4: Packets can carry voice but with more jitter, so amortization plus timing is the reason.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.4
  {
    sectionId: 'cn-ch1-s4',
    depth: [
      {
        tier: 'masters',
        title: 'Delay calculus: transmission, propagation and queueing',
        blocks: [
          {
            kind: 'para',
            body: 'End-to-end delay decomposes into four additive terms with different scaling laws: **processing** per box, **queueing** behind other packets, **transmission** $L/R$ to clock bits onto the wire, and **propagation** $d/v$ to travel distance. The first two live inside routers and vary with load, the last two live on links and vary with size and medium. Graduate analysis treats the sum as a **budget** to be allocated — codec and serialization choices move transmission, placement and path choice move propagation, provisioning and scheduling move queueing — and reads every performance claim as a statement about which term dominates under the stated regime.'
          },
          {
            kind: 'derivation',
            heading: 'Nodal delay from first principles',
            body: 'For a packet of $L$ bits over a path of $H$ store-and-forward hops with rate $R$ and per-hop propagation $d/v$, ignoring queueing, total delay is $$D = H \\times \\left(\\frac{L}{R} + \\frac{d}{v}\\right) + H \\times t_{p}.$$ Transmission repeats per hop because each router must receive the full packet before forwarding, while propagation accumulates linearly with distance. Pipelining changes the picture only for streams: $N$ packets over the same path finish in $$D(N) = H \\times \\left(\\frac{L}{R} + \\frac{d}{v}\\right) + (N-1) \\times \\frac{L}{R},$$ since later packets clock out one transmission time behind the first. The derivation explains why short interactive packets care about $R$ and $H$ while bulk transfer cares about $R$ alone once the pipe fills.'
          },
          {
            kind: 'example',
            heading: 'Sizing a cross-continent file transfer',
            body: 'Take $L = 12000$ bits, $R = 10^{7}$ bits per second, $H = 10$ hops each with $d/v = 0.005$ seconds and negligible processing. Transmission per hop is $L/R = 0.0012$ seconds, so nodal delay is $0.0062$ seconds and end-to-end is $0.062$ seconds for one packet. For $N = 1000$ packets the pipelined total is $0.062 + 999 \\times 0.0012 \\approx 1.26$ seconds, dominated by clocking bits rather than distance. Doubling $R$ halves the bulk time but barely moves single-packet latency, which propagation fixes — the quantitative reason interactive and bulk tuning diverge.'
          },
          {
            kind: 'application',
            body: 'Capacity planning applies the same decomposition under queueing: model each output port as a server with arrival rate $\\lambda$ and service rate $\\mu = R/L$, then mean queueing follows $1/(\\mu - \\lambda)$ for exponential assumptions and grows sharply as utilization $\\rho = \\lambda/\\mu$ nears unity. The graduate move is reading loss and delay budgets backwards — given a tail-latency target, solve for admissible $\\rho$, then provision $R$ or split load so no port exceeds it. Content-delivery placement is propagation engineering under the same math: moving bytes closer converts $d/v$ from intercontinental to metro scale, which no transmission upgrade can match for small objects.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'Every packet pays transmission time to enter the wire plus travel time to cross distance plus waiting and processing inside boxes. Store and forward multiplies those costs across hops while pipelining can overlap them for streams. This section turns link numbers into end-to-end totals without guesswork.',
    objectives: [
      'Compute transmission, travel, queueing and processing parts separately',
      'Total store-and-forward delay across hops with and without pipelining',
      'Size bandwidth-delay product and explain its pipe-filling meaning'
    ],
    concepts: [
      {
        term: 'Transmission versus travel delay',
        kind: 'definition',
        statement: 'Pushing bits takes **transmission** time `TTR` while signals cross distance in **travel** time `TPROP`. Formulas are $$T_{trans} = \\frac{L}{R} \\qquad T_{prop} = \\frac{d}{v}$$ with length `L`, rate `R`, distance `d` and speed `v`.',
        detail: 'A $12000$-bit packet on $R = 12$ megabits per second needs $1$ millisecond to transmit. Over $d = 2400$ kilometers at $v = 240000$ kilometers per second it needs $10$ milliseconds to travel.'
      },
      {
        term: 'Nodal queueing and processing',
        kind: 'definition',
        statement: 'Routers add **queueing** `TQ` waiting for the line plus **processing** `TPROC` for lookups and checks. Load is captured by $$\\rho = \\frac{\\lambda}{\\mu}$$ using arrival `LAMBDA` and service `MU`.',
        detail: 'Light load keeps $TQ$ near zero while load near unity makes queues grow sharply. Processing is often microseconds while queueing can reach milliseconds under bursts.'
      },
      {
        term: 'Store-and-forward total',
        kind: 'theorem',
        statement: 'With identical hops the **single-packet total** `TOTAL` sums per-hop costs as $$T_{total} = N \\times (T_{trans} + T_{prop} + T_{proc} + T_{queue}).$$ Each `hop` must fully receive before forwarding.',
        detail: 'Three hops with $2$ milliseconds transmission plus $10$ milliseconds travel each total $36$ milliseconds ignoring queueing. No overlap is possible for one lone packet.'
      },
      {
        term: 'Pipelining a packet stream',
        kind: 'method',
        statement: 'A stream of `K` packets pipelines so only the first pays full depth while the rest follow every **one transmission time** `TTR`. Finish time is $$T_{stream} = T_{total} + (K-1) \\times T_{trans}.$$',
        detail: 'Five packets with $T_{total} = 36$ milliseconds and $T_{trans} = 2$ milliseconds finish in $36 + 8 = 44$ milliseconds. Links work in parallel once the pipe fills.'
      },
      {
        term: 'Bandwidth-delay product',
        kind: 'insight',
        statement: 'The pipe holds **bandwidth-delay product** `BDP` bits in flight computed as $$BDP = R \\times T_{prop}.$$ Window `WIN` must cover `BDP` to keep the `link` busy.',
        detail: 'Rate $R = 12$ megabits per second times $T_{prop} = 10$ milliseconds gives $120000$ bits in flight. Smaller windows idle the link waiting for acknowledgments.'
      }
    ],
    examples: [
      {
        title: 'Three-hop single packet total',
        problem: 'Packet 12000 bits, rate 12 megabits per second, three hops each 2400 kilometers at speed 240000 kilometers per second. Ignore queueing. Find total.',
        steps: [
          { label: 'Step 1', text: 'Transmission $T_{trans} = 12000$ divided by $12000000$ which is $0.001$ seconds or $1$ millisecond.\n```text\nTtrans = L over R = 12000 bits over 12 Mbps = 1 ms\nTprop = d over v = 2400 km over 240000 kmps = 10 ms\n```' },
          { label: 'Step 2', text: 'Travel per hop $T_{prop} = 2400$ divided by $240000$ which is $0.010$ seconds or $10$ milliseconds.' },
          { label: 'Step 3', text: 'Per hop sum $1 + 10 = 11$ milliseconds. Three hops give $33$ milliseconds with `TOTAL` equal to $N$ times per-hop sum.' }
        ],
        result: 'Single packet takes 33 milliseconds across three hops without queueing.'
      },
      {
        title: 'Pipeline five packets and size the pipe',
        problem: 'Same links as above. Send 5 packets back to back. Find finish time and bandwidth-delay product of one hop.',
        steps: [
          { label: 'Step 1', text: 'First packet total $33$ milliseconds from prior drill. Remaining $4$ packets add $4$ times $1$ millisecond.' },
          { label: 'Step 2', text: 'Stream finish $33 + 4 = 37$ milliseconds using `TTR` pipelining. Links overlap after the first packet clears hop one.' },
          { label: 'Step 3', text: 'Pipe per hop $BDP = 12000000$ times $0.010$ which is $120000$ bits. Window `WIN` needs at least that many bits to avoid idle gaps.' }
        ],
        result: 'Five packets finish in 37 milliseconds and each hop pipe holds 120000 bits.'
      }
    ],
    keyTakeaways: [
      'Transmission equals length over rate while travel equals distance over speed.',
      'Single-packet total multiplies per-hop sums by hop count under store and forward.',
      'Streams pipeline with extra packets costing one transmission time each.',
      'Bandwidth-delay product sets the window needed to fill the pipe.'
    ],
    quiz: [
      // PYQ-pattern: transmission versus travel delay arithmetic
      {
        q: 'Packet 12000 bits on 12 megabits per second needs transmission time:',
        options: ['10 ms', '1 ms', '12 ms', '0.1 ms'],
        answer: 1,
        explanation: 'Step 1: Rate is 12 million bits per second. Step 2: Divide 12000 by 12000000 giving 0.001 seconds. Step 3: Convert to milliseconds by multiplying by 1000 giving 1. Step 4: The other values shift the decimal by ten.'
      },
      {
        q: 'Distance 2400 kilometers at speed 240000 kilometers per second gives travel time:',
        options: ['1 ms', '100 ms', '24 ms', '10 ms'],
        answer: 3,
        explanation: 'Step 1: Write travel as distance over speed. Step 2: Divide 2400 by 240000 giving 0.010 seconds. Step 3: Multiply by 1000 giving 10 milliseconds. Step 4: The distractors move the decimal or mix rate units.'
      },
      {
        q: 'Three hops each 11 ms per hop give single-packet total:',
        options: ['11 ms', '22 ms', '33 ms', '44 ms'],
        answer: 2,
        explanation: 'Step 1: One packet cannot overlap hops. Step 2: Add per-hop sums three times. Step 3: Multiply 11 by 3 giving 33 milliseconds. Step 4: Smaller totals assume pipelining which needs more packets.'
      },
      {
        q: 'Rate 12 megabits per second with 10 ms travel holds in flight:',
        options: ['120000 bits', '12000 bits', '1200 bits', '12 bits'],
        answer: 0,
        explanation: 'Step 1: Product equals rate times travel. Step 2: Multiply 12000000 by 0.010 giving 120000. Step 3: Units are bits in the pipe. Step 4: Smaller answers miss zeros from mega and milli.'
      }
    ]
  }
]

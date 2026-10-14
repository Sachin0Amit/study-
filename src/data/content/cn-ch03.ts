import type { SectionContent } from '../library'

// ============================================================================
// Computer Networks — Chapter 3: Medium Access Control and Ethernet
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const cnCh03Content: SectionContent[] = [
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: 'cn-ch3-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Random access limits: ALOHA throughput and stability',
        blocks: [
          {
            kind: 'para',
            body: '**Pure and slotted ALOHA** are the minimal random-access protocols: transmit whenever ready, detect collision by missing acknowledgement, retry after random delay. Their graduate interest is that throughput collapses under its own load without any central scheduler — more attempts create more collisions, which create more retries. Analysis therefore models offered load $G$ including retransmissions and asks for carried load $S$, the rate of successful transmissions. The resulting curves $S(G)$ quantify the **price of anarchy** for uncoordinated access and motivate every later refinement from carrier sensing to reservation.'
          },
          {
            kind: 'theorem',
            body: 'Under Poisson offered load $G$, maximum throughput is $S_{max} = 1/(2e) \\approx 0.184$ for pure ALOHA and $S_{max} = 1/e \\approx 0.368$ for slotted ALOHA, attained at $G = 0.5$ and $G = 1.0$ respectively. Beyond those points throughput declines with load: the channel is **unstable** in the sense that unbounded retry populations drive $S$ toward zero unless the retransmission policy adapts $G$ downward. No fixed retransmission probability stabilizes the system at high arrival rates.'
          },
          {
            kind: 'derivation',
            heading: 'Vulnerability intervals to throughput curves',
            body: 'A pure-ALOHA frame of duration $T$ collides with any frame starting within $2T$, so vulnerability interval is $2T$. With Poisson arrivals at rate $G$ per $T$, success probability is $e^{-2G}$ and carried load is $$S = G \\times e^{-2G}.$$ Differentiating gives $dS/dG = e^{-2G} \\times (1 - 2G)$, zero at $G = 0.5$ with value $1/(2e)$. Slotting halves vulnerability to $T$, giving $$S = G \\times e^{-G}$$ with optimum $G = 1.0$ and value $1/e$. Stability analysis adds backlog dynamics: if $G$ exceeds the optimum, successes fall, backlog grows, $G$ grows further — a positive feedback loop that fixed backoff cannot break, which exponential backoff and load estimation address.'
          },
          {
            kind: 'application',
            body: 'Modern random access — wireless contention windows, RFID arbitration, satellite return links — inherits the same stability lesson with larger constants. Carrier sensing shrinks but does not remove the vulnerability window to propagation delay, so high-speed long links still exhibit ALOHA-like collapse under overload. Protocol designers therefore pair access rules with **load control**: exponential backoff that multiplies the retry interval after each failure, admission throttles that cap $G$, and reservation modes that switch to scheduling when backlog exceeds a threshold. Throughput curves tell when each mechanism must engage, turning a classroom derivation into an operating-point monitor.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'When many stations share one broadcast channel without coordination, each transmission risks overlapping another in time. Pure ALOHA lets stations send whenever ready while slotted ALOHA restricts starts to slot edges to halve the danger window. This section derives both throughput curves and their famous maxima from offered load.',
    objectives: [
      'Derive vulnerable periods for pure and slotted operation',
      'Compute throughput from offered load using exponential laws',
      'Locate maxima and compare usable capacity of both versions'
    ],
    concepts: [
      {
        term: 'Offered load and throughput',
        kind: 'definition',
        statement: 'Offered load **G** stored as `G` counts new plus retried frames per frame time while throughput **S** stored as `S` counts successes per frame time. Relation uses $$S = G \\times P_{success}$$ with success probability `PSUC`.',
        detail: 'Frame time is the time to send one fixed frame. G above unity means more than one attempt per frame time on average.'
      },
      {
        term: 'Pure ALOHA vulnerable period',
        kind: 'theorem',
        statement: 'A frame of length **T** kept in `T` collides with any start in the surrounding **two T** window. Success needs zero other arrivals in $$V = 2 \\times T$$ giving $$P_{success} = e^{-2G}.$$',
        detail: 'Starts one frame before through one frame after both overlap. Poisson arrivals with mean $2G$ in that window give the exponential term.'
      },
      {
        term: 'Pure throughput law and maximum',
        kind: 'theorem',
        statement: 'Pure throughput follows **S equals G times exponential** held in `S`, namely $$S = G e^{-2G}.$$ Maximum **0.184** occurs at $$G = \\frac{1}{2}$$ with value $$S_{max} = \\frac{1}{2e}.$$',
        detail: 'At $G = 0.5$, $S = 0.5$ times $0.368$ which is $0.184$. Heavier load collapses throughput toward zero through repeated collisions.'
      },
      {
        term: 'Slotted ALOHA improvement',
        kind: 'theorem',
        statement: 'Slots aligned by **clock** `CLK` shrink the danger window to **one T** only. Law becomes $$S = G e^{-G}$$ with maximum $$S_{max} = \\frac{1}{e} \\approx 0.368$$ at $$G = 1.$$',
        detail: 'At $G = 1$, $S = 1$ times $0.368$. Slot edges remove partial overlaps, doubling capacity from $0.184$ to $0.368$.'
      },
      {
        term: 'Stability and backoff intuition',
        kind: 'insight',
        statement: 'Beyond the peak, more retries raise **G** in `G` and lower **S** further, a spiral that needs **backoff** `BACK` control. Stable operation keeps `G` near **peak** load.',
        detail: 'Uncontrolled retransmission after collisions pushes G past 1 in slotted systems. Randomized delays spread retries and restore the sweet spot.'
      }
    ],
    derivations: [
      {
        title: 'Throughput Maxima of Pure and Slotted ALOHA',
        statement: 'Poisson load $G$ gives carried load $S = Ge^{-2G}$ pure and $S = Ge^{-G}$ slotted: $$S_{pure} = Ge^{-2G}, \\quad S_{slot} = Ge^{-G}$$',
        prerequisites: [
          'Offered load $G$ counting new plus retried frames per frame time $T$',
          'Poisson arrivals with $P(k) = G^{k}e^{-G} / k!$ over one frame time',
          'Vulnerability window $2T$ for pure and $T$ for slotted operation',
        ],
        steps: [
          {
            label: 'Step 1: Model arrivals as Poisson in the danger window',
            formula: `$$P(k) = \\frac{G^{k}e^{-G}}{k!}$$`,
            explanation: 'Many independent stations each transmitting rarely aggregate to a Poisson stream of rate $G$ per frame time $T$. Memorylessness of the model captures uncoordinated retries joining fresh arrivals indistinguishably. The single parameter $G$ therefore summarizes the entire contention level.',
          },
          {
            label: 'Step 2: Convert window size into survival probability',
            formula: `$$P_{pure} = e^{-2G} \\qquad P_{slot} = e^{-G}$$`,
            explanation: 'A pure frame survives only when zero other starts fall within $2T$ around it, an interval carrying mean $2G$ arrivals. Slotting forces starts onto edges so only the one preceding slot matters, with mean $G$ arrivals. Zero-arrival Poisson probability $e^{-\\lambda}$ at the matching mean gives each survival law.',
          },
          {
            label: 'Step 3: Multiply attempts by survival to get carried load',
            formula: `$$S = G \\cdot P_{success}$$`,
            explanation: 'Throughput counts attempts per frame time times the fraction surviving collision. Substituting each survival probability yields the two famous curves directly. The product form explains the rise-then-fall shape: linear growth in $G$ fights exponential decay in survival.',
          },
          {
            label: 'Step 4: Differentiate to locate the peaks',
            formula: `$$\\frac{dS}{dG} = 0 \\Rightarrow G^{\\ast} = \\frac{1}{2}, 1$$`,
            explanation: 'Setting the derivative of $Ge^{-2G}$ to $e^{-2G}(1 - 2G)$ gives the pure optimum at $G = 0.5$. Setting the derivative of $Ge^{-G}$ to $e^{-G}(1 - G)$ gives the slotted optimum at $G = 1$. Second derivatives are negative at both points, confirming maxima rather than minima.',
          },
          {
            label: 'Step 5: Evaluate the two capacity ceilings',
            formula: `$$S_{max} = \\frac{1}{2e} \\approx 0.184, \\quad \\frac{1}{e} \\approx 0.368$$`,
            explanation: 'Plugging $G = 0.5$ into the pure curve leaves $1$ divided by $2e$, about eighteen percent channel use. Plugging $G = 1$ into the slotted curve leaves $1$ divided by $e$, about thirty seven percent. Halving the vulnerability window therefore doubles usable capacity, which motivates slotting despite its clocking cost.',
          },
        ],
        result: 'Maximum throughput is $1/(2e) \\approx 0.184$ at $G = 0.5$ for pure ALOHA and $1/e \\approx 0.368$ at $G = 1$ for slotted ALOHA; pushing $G$ past either peak lowers $S$ and invites backlog-driven collapse.',
      },
    ],
    examples: [
      {
        title: 'Throughput at two loads for pure ALOHA',
        problem: 'Pure ALOHA with G equal 0.5 then G equal 1.0. Compute S in each case.',
        steps: [
          { label: 'Step 1', text: 'Use law $S = G$ times $e^{-2G}$ with `S` and `G`.\n```text\nG=0.5 -> S=0.5*e^-1=0.5*0.368=0.184\nG=1.0 -> S=1.0*e^-2=1.0*0.135=0.135\n```' },
          { label: 'Step 2', text: 'For $G = 0.5$, exponent is $-1$ giving $0.368$, product $0.184$. This is the peak value $\\frac{1}{2e}$.' },
          { label: 'Step 3', text: 'For $G = 1.0$, exponent is $-2$ giving $0.135$, product $0.135$ below peak. Extra load lowered success.' }
        ],
        result: 'Pure S is 0.184 at G 0.5 and falls to 0.135 at G 1.0.'
      },
      {
        title: 'Slotted gain at unit load',
        problem: 'Slotted ALOHA at G equal 1. Compare against pure at same load and name the gain.',
        steps: [
          { label: 'Step 1', text: 'Slotted law $S = G$ times $e^{-G}$ gives $1$ times $0.368$ which is $0.368$.' },
          { label: 'Step 2', text: 'Pure at same $G = 1$ gave $0.135$ in prior drill. Ratio $0.368$ divided by $0.135$ is about $2.7$.' },
          { label: 'Step 3', text: 'Gain comes from halving `V` from two slots to one via `CLK` alignment. Maxima double from $0.184$ to $0.368$.' }
        ],
        result: 'Slotted reaches 0.368 at unit load, about double the pure maximum.'
      }
    ],
    keyTakeaways: [
      'Pure danger window spans two frame times giving S equal G times exponential of minus two G.',
      'Pure peaks at G one half with value one over two e near 0.184.',
      'Slotted halves the window to one frame giving S equal G times exponential of minus G.',
      'Slotted peaks at G unity with value one over e near 0.368.'
    ],
    quiz: [
      // PYQ-pattern: pure versus slotted throughput maxima numerics
      {
        q: 'Pure ALOHA maximum throughput and load are:',
        options: ['0.368 at G 1', '1.0 at G 1', '0.184 at G 0.5', '0.5 at G 1'],
        answer: 2,
        explanation: 'Step 1: Law is S equals G times exponential of minus 2G. Step 2: Derivative zero gives G 0.5. Step 3: Value is 0.5 times 0.368 which is 0.184. Step 4: The 0.368 value belongs to slotted at G 1.'
      },
      {
        q: 'Slotted ALOHA at G 1 gives S:',
        options: ['0.368', '0.184', '0.135', '1.0'],
        answer: 0,
        explanation: 'Step 1: Law is S equals G times exponential of minus G. Step 2: Exponential of minus 1 is 0.368. Step 3: Multiply by 1 giving 0.368. Step 4: Pure at G 1 gives only 0.135.'
      },
      {
        q: 'Vulnerable period of pure ALOHA for frame time T is:',
        options: ['T', 'zero', 'half T', '2 times T'],
        answer: 3,
        explanation: 'Step 1: Overlap if another starts within T before. Step 2: Overlap if another starts within T after. Step 3: Total window is 2 times T. Step 4: Slotted shrinks this to T.'
      },
      {
        q: 'If G grows far beyond the peak without control, throughput:',
        options: ['stays at peak', 'collapses toward zero', 'rises linearly', 'becomes negative'],
        answer: 1,
        explanation: 'Step 1: More attempts raise collision chance. Step 2: Exponentials decay faster than G grows. Step 3: At G 2 slotted gives 2 times 0.135 which is 0.27 below peak. Step 4: Retries compound so control is needed.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.2
  {
    sectionId: 'cn-ch3-s2',
    readingTime: 8,
    intro: 'Carrier sensing lets stations listen before speaking yet signals still need time to reach every corner of the wire. Collision detection aborts damaged frames early on wired links while collision avoidance reserves the floor in advance on wireless links. This section contrasts the two families and the hidden-terminal problem that motivates handshakes.',
    objectives: [
      'Explain listen-before-talk and why collisions still occur',
      'Compare detection on wire with avoidance over radio',
      'Trace RTS CTS exchange for hidden terminals'
    ],
    concepts: [
      {
        term: 'Carrier sense persistence',
        kind: 'definition',
        statement: 'Stations sense **carrier** `CAR` and send when idle, retrying with **persistence** rules `PERS` after busy. Sensing is **not perfect** because travel `TPROP` hides recent starts.',
        detail: 'Two stations far apart can both see idle and start within the travel window. Persistence choices trade idle gaps against collision chance.'
      },
      {
        term: 'Collision window on wire',
        kind: 'theorem',
        statement: 'A sender is unsafe for **two travel times** `RTT` until its signal returns from the far end. Minimum detection time is $$T_{window} = 2 \\times T_{prop}$$ using `TPROP`.',
        detail: 'With $T_{prop} = 5$ microseconds, the window is $10$ microseconds. Frames shorter than the window can finish before a distant collision returns.'
      },
      {
        term: 'CSMA CD abort and retry',
        kind: 'method',
        statement: 'Wired senders compare **sent versus seen** signals in `CMP` and emit a **jam** `JAM` on mismatch. After jam they wait a **random** backoff before `RETRY`.',
        detail: 'Abort saves the rest of the frame time. Jam of 32 bits ensures all parties notice the collision.'
      },
      {
        term: 'CSMA CA reservation',
        kind: 'method',
        statement: 'Radio cannot reliably hear while sending, so it avoids through **RTS CTS** exchange `RSV` plus waiting intervals. A **NAV** timer `NAV` silences neighbors for the announced duration.',
        detail: 'Request to send proposes a duration and clear to send grants it. Neighbors hearing either frame set NAV and stay quiet.'
      },
      {
        term: 'Hidden and exposed terminals',
        kind: 'insight',
        statement: 'A **hidden** node `HID` hears the receiver but not the sender, so sensing alone fails. An **exposed** node `EXP` needlessly defers despite a harmless parallel exchange.',
        detail: 'RTS CTS solves hidden by announcing from both ends. Exposed is eased by power awareness but never fully removed.'
      }
    ],
    examples: [
      {
        title: 'Collision window versus frame length',
        problem: 'Link 2000 meters at speed 200000 kilometers per second, rate 10 megabits per second. Find window and minimum frame bits to detect.',
        steps: [
          { label: 'Step 1', text: 'Travel $T_{prop} = 2000$ divided by $200000000$ which is $10$ microseconds.\n```text\nTprop=10 us window=2xTprop=20 us minbits=rate x window\n```' },
          { label: 'Step 2', text: 'Window $2$ times $10$ is $20$ microseconds using `RTT`. Sender must still be sending when echo returns.' },
          { label: 'Step 3', text: 'Minimum bits $10000000$ times $0.000020$ which is $200$ bits. Shorter frames need padding to `200` bits.' }
        ],
        result: 'Window 20 microseconds needs at least 200-bit frames for reliable detection.'
      },
      {
        title: 'Hidden-terminal handshake trace',
        problem: 'Stations A and C both reach B but not each other. A has data for B while C may interfere. Show reservation.',
        steps: [
          { label: 'Step 1', text: 'A senses idle to B and sends `RTS` with duration. B replies `CTS` heard by both A and C.' },
          { label: 'Step 2', text: 'C sets `NAV` for the announced time despite never hearing A. A sends data protected by silence.' },
          { label: 'Step 3', text: 'B returns acknowledgment after short gap. C resumes contention only after `NAV` expiry.' }
        ],
        result: 'Receiver-side announcement silences the hidden interferer without carrier sensing between senders.'
      }
    ],
    keyTakeaways: [
      'Sensing still collides within one travel time across the span.',
      'Wired detection aborts fast with jam then random retry.',
      'Wireless avoids with RTS CTS and NAV reservation.',
      'Hidden nodes need receiver announcements while exposed nodes over-defer.'
    ],
    quiz: [
      {
        q: 'Collision window for detection equals:',
        options: ['one travel time', 'one frame time', 'zero', 'two travel times'],
        answer: 3,
        explanation: 'Step 1: Signal must reach the far end taking Tprop. Step 2: Collision echo must return taking Tprop. Step 3: Sum is 2 times Tprop. Step 4: With 10 microseconds each the window is 20.'
      },
      // PYQ-pattern: CSMA CD versus CSMA CA selection by medium
      {
        q: 'Why is collision detection impractical on radio?',
        options: ['radios lack antennas', 'a radio cannot reliably listen while sending and fades hide peers', 'frames are too long', 'addresses are missing'],
        answer: 1,
        explanation: 'Step 1: Transmit power overwhelms receive path. Step 2: Fading hides distant senders. Step 3: Sensing while sending is unreliable. Step 4: Reservation with RTS CTS works better.'
      },
      {
        q: 'RTS CTS primarily solves:',
        options: ['hidden terminal by receiver announcement', 'routing loops', 'address shortage', 'exposed terminal fully'],
        answer: 0,
        explanation: 'Step 1: Hidden sender cannot hear the other sender. Step 2: Receiver hears both. Step 3: CTS from receiver reaches the hidden node. Step 4: NAV then silences it for the duration.'
      },
      {
        q: 'After detecting a wired collision the sender first:',
        options: ['finishes the frame', 'reboots', 'sends jam then backs off randomly', 'asks the router'],
        answer: 2,
        explanation: 'Step 1: Abort further data bits. Step 2: Emit 32-bit jam to alert all. Step 3: Choose random backoff slots. Step 4: Retry sensing after the wait.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.3
  {
    sectionId: 'cn-ch3-s3',
    readingTime: 9,
    intro: 'After a collision, waiting a fixed time would collide again so stations randomize with a window that doubles after each failure. That backoff shapes both stability and the share of time spent usefully. This section connects slot choice to efficiency and to the minimum frame rule on classic shared Ethernet.',
    objectives: [
      'Run binary exponential backoff slot selection after repeated collisions',
      'Compute efficiency from travel and transmission times',
      'Derive minimum frame size that guarantees detection'
    ],
    concepts: [
      {
        term: 'Binary exponential backoff',
        kind: 'method',
        statement: 'After **i** collisions stored in `TRY`, choose uniformly among **two to the i** slots `SLOTS`. Wait follows $$\\text{slots} \\in \\{0, \\ldots, 2^{i}-1\\}$$ capped at $$i \\leq 10$$ and attempts stop at $$i = 16.$$',
        detail: 'First retry picks 0 or 1, second picks 0 through 3, third 0 through 7. Cap at 1024 slots keeps waits bounded while 16 attempts bound gives up.'
      },
      {
        term: 'Backoff slot time basis',
        kind: 'definition',
        statement: 'One slot equals the **worst round trip** `SLOT` of the span, defined as $$T_{slot} = 2 \\times T_{prop}.$$ All `stations` count down the same `SLOT` grid.',
        detail: 'With $T_{prop} = 25.6$ microseconds, slot is $51.2$ microseconds. Fixed grid keeps retransmissions aligned to detection bounds.'
      },
      {
        term: 'Efficiency under contention',
        kind: 'theorem',
        statement: 'Ideal share of useful time is **transmission over cycle** kept in `EFF`, namely $$\\eta = \\frac{T_{trans}}{T_{trans} + 2 \\times T_{prop}}.$$ Short `travel` relative to `frame` raises efficiency.',
        detail: 'With $T_{trans} = 100$ microseconds and $T_{prop} = 5$ microseconds, $\\eta = 100$ divided by $110$ which is $0.909$. Long frames amortize the contention overhead.'
      },
      {
        term: 'Minimum frame rule',
        kind: 'law',
        statement: 'Frames must satisfy **transmission at least round trip** using `MIN`, namely $$T_{trans} \\geq 2 \\times T_{prop}.$$ Minimum bits are $$L_{min} = R \\times 2 \\times T_{prop}.$$',
        detail: 'At $R = 10$ megabits per second with $25.6$ microseconds travel, $L_{min} = 512$ bits or $64$ bytes. Shorter payloads are padded to the floor.'
      },
      {
        term: 'Capture and fairness note',
        kind: 'insight',
        statement: 'Random backoff can let one station **capture** `CAP` the channel while others double repeatedly. Consecutive wins reset the winner to **zero** wait while losers hold large `windows`.',
        detail: 'Short-term unfairness averages out but delay varies widely. Modern switched links remove the shared collision domain entirely.'
      }
    ],
    examples: [
      {
        title: 'Backoff choices after three collisions',
        problem: 'Station collides three times in a row. List slot range, slot time for 10-microsecond travel, and worst wait.',
        steps: [
          { label: 'Step 1', text: 'After $i = 3$, range is $0$ through $7$ from $2^{3} = 8$ slots.\n```text\ni=3 range 0..7 slot=2x10=20 us worst=7x20=140 us\n```' },
          { label: 'Step 2', text: 'Slot $T_{slot} = 2$ times $10$ which is $20$ microseconds using `SLOT`.' },
          { label: 'Step 3', text: 'Worst wait $7$ times $20$ which is $140$ microseconds. Average is $3.5$ times $20$ which is $70$ microseconds.' }
        ],
        result: 'Range 0 to 7 with slot 20 microseconds gives worst wait 140 microseconds.'
      },
      {
        title: 'Efficiency and minimum size drill',
        problem: 'Rate 10 megabits per second, travel 25.6 microseconds, frame 512 bits. Find efficiency and check minimum.',
        steps: [
          { label: 'Step 1', text: 'Transmission $512$ divided by $10000000$ which is $51.2$ microseconds.' },
          { label: 'Step 2', text: 'Efficiency $51.2$ divided by $51.2 + 51.2$? Wait round trip is $51.2$ microseconds, so $51.2$ divided by $102.4$ which is $0.5$.' },
          { label: 'Step 3', text: 'Minimum $10000000$ times $0.0000512$ which is $512$ bits, exactly met with `MIN` padding zero.' }
        ],
        result: 'Efficiency 0.5 at the 64-byte minimum for classic 10-megabit span.'
      }
    ],
    keyTakeaways: [
      'Backoff picks 0 through 2 to the i minus 1 after i collisions with caps.',
      'Slot time equals worst round-trip travel of the span.',
      'Efficiency equals transmission over transmission plus round-trip travel.',
      'Frames must last at least one round trip, 64 bytes on classic Ethernet.'
    ],
    quiz: [
      {
        q: 'After 3 collisions the backoff range is:',
        options: ['0 to 7', '0 to 3', '0 to 1', '0 to 15'],
        answer: 0,
        explanation: 'Step 1: Slots equal 2 raised to i. Step 2: 2 raised to 3 is 8. Step 3: Range 0 through 7 holds 8 values. Step 4: Next collision widens to 0 through 15.'
      },
      // PYQ-pattern: efficiency and minimum frame-size numerics
      {
        q: 'Ttrans 100 with Tprop 5 gives efficiency:',
        options: ['0.5', '0.091', '0.909', '1.0'],
        answer: 2,
        explanation: 'Step 1: Round trip is 2 times 5 which is 10. Step 2: Cycle is 100 plus 10 which is 110. Step 3: Ratio 100 divided by 110 is 0.909. Step 4: Short travel keeps efficiency high.'
      },
      {
        q: '10 megabits per second with 25.6 microseconds travel needs minimum:',
        options: ['64 bits', '512 bits', '128 bits', '1500 bytes'],
        answer: 1,
        explanation: 'Step 1: Round trip is 51.2 microseconds. Step 2: Multiply 10 million by 0.0000512. Step 3: Product is 512 bits. Step 4: Bytes equal 512 divided by 8 which is 64.'
      },
      {
        q: 'Backoff caps and give-up are:',
        options: ['fixed 1 slot always', 'no cap ever', 'cap at 2 and stop at 3', 'cap at i 10 with 1024 slots and stop at 16'],
        answer: 3,
        explanation: 'Step 1: Exponent capped at 10 giving 1024 slots. Step 2: Larger i keeps 1024 range. Step 3: Attempt 16 failure discards the frame. Step 4: Caps bound delay while giving up avoids deadlock.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.4
  {
    sectionId: 'cn-ch3-s4',
    readingTime: 7,
    intro: 'Bridges join separate collision domains into one logical broadcast network while learning where hosts live from source addresses. Loops between bridges would flood forever so a spanning tree keeps one active path and parks the rest. This section traces learning, forwarding and loop removal on small topologies.',
    objectives: [
      'Trace self-learning table build from observed sources',
      'Decide forward versus flood versus drop for each arrival',
      'Construct spanning tree roles that break every loop'
    ],
    concepts: [
      {
        term: 'Self-learning bridge table',
        kind: 'method',
        statement: 'The bridge records **source** address `SRC` against arrival port to learn location. Entries age with **timer** `AGE` to track `moves`.',
        detail: 'Frame from A on port 1 maps A to 1. Later frames to A forward only to port 1 instead of flooding.'
      },
      {
        term: 'Forward flood and filter',
        kind: 'method',
        statement: 'Known unicast goes to the **mapped port** `PORT` while unknown goes **everywhere** `FLOOD`. Same-port source and destination is **dropped** by `FILTER`.',
        detail: 'Unknown destination floods all ports except arrival. Same-segment traffic never crosses, saving capacity.'
      },
      {
        term: 'Loop multiplication hazard',
        kind: 'insight',
        statement: 'Parallel bridges duplicate **floods** `DUP` forever because neither recognizes the other copy. Tables also **flap** as `SRC` appears on both `ports`.',
        detail: 'One broadcast circles and doubles each lap. Learning oscillates since the same source seems to move rapidly.'
      },
      {
        term: 'Spanning-tree election',
        kind: 'method',
        statement: 'Bridges elect a **root** `ROOT` by lowest identifier then each picks a **root port** `RP` with least cost. Each segment elects a **designated** port `DES` while the rest **block** `BLK`.',
        detail: 'Cost is hop or bandwidth based with lower preferred. Blocked ports listen but neither learn nor forward data.'
      },
      {
        term: 'Port states and convergence',
        kind: 'definition',
        statement: 'Ports move through **blocking** `BLK`, listening, learning and **forwarding** `FWD` stages. Timers order the change so **loops** never briefly reopen.',
        detail: 'Listening exchanges control messages without learning. Learning rebuilds tables before data resumes, taking tens of seconds on classic timers.'
      }
    ],
    examples: [
      {
        title: 'Learn then forward on two ports',
        problem: 'Bridge ports 1 and 2 start empty. A on 1 sends to B, then B on 2 replies to A. Show table and decisions.',
        steps: [
          { label: 'Step 1', text: 'First frame source `A` on port $1$ learns A to 1. Destination `B` unknown so flood to port $2$.\n```text\ntable {} -> {A:1} action flood\ntable {A:1} + {B:2} action forward\n```' },
          { label: 'Step 2', text: 'Reply source `B` on port $2$ learns B to 2. Destination `A` known on port $1$, so forward only there.' },
          { label: 'Step 3', text: 'Third A-to-B frame now forwards port $1$ to port $2$ without flood. Same-side traffic would filter.' }
        ],
        result: 'Two arrivals complete the table and end flooding between A and B.'
      },
      {
        title: 'Break a triangle with spanning tree',
        problem: 'Bridges X, Y, Z mesh in a triangle with equal costs and IDs X lowest. Assign roles.',
        steps: [
          { label: 'Step 1', text: 'Lowest `ROOT` is X by identifier. Y and Z each pick the direct port to X as `RP` with cost one.' },
          { label: 'Step 2', text: 'Segment Y-Z elects one `DES` port, lower ID Y wins. Z blocks its Y-Z port as `BLK`.' },
          { label: 'Step 3', text: 'Active edges X-Y and X-Z forward while Y-Z parks. Any single link loss reopens the parked port.' }
        ],
        result: 'One blocked port breaks the loop while keeping all stations reachable through the root.'
      }
    ],
    keyTakeaways: [
      'Learning maps source addresses to arrival ports with aging.',
      'Known targets forward singly while unknown targets flood.',
      'Loops duplicate floods and flap tables without control.',
      'Spanning tree elects root and blocks one port per loop.'
    ],
    quiz: [
      {
        q: 'First frame from A on port 1 to unknown B causes bridge to:',
        options: ['drop', 'learn A to 1 and flood', 'forward only to 1', 'ask the router'],
        answer: 1,
        explanation: 'Step 1: Source A reveals location 1. Step 2: Destination B has no entry. Step 3: Unknown means flood except arrival. Step 4: Table now holds A to 1.'
      },
      {
        q: 'Frame with source and destination on same port is:',
        options: ['flooded', 'forwarded to root', 'sent to all', 'filtered and dropped'],
        answer: 3,
        explanation: 'Step 1: Both ends share port 1. Step 2: No need to cross the bridge. Step 3: Filter drops to save capacity. Step 4: Only cross-segment frames forward.'
      },
      // PYQ-pattern: spanning-tree root and blocked-port reasoning
      {
        q: 'Spanning-tree root is chosen as:',
        options: ['highest MAC address', 'random port', 'lowest identifier', 'most hosts'],
        answer: 2,
        explanation: 'Step 1: Each bridge advertises its identifier. Step 2: Lowest value wins across 2 bytes priority plus address. Step 3: All compute paths to that root. Step 4: Host count never elects.'
      },
      {
        q: 'In a triangle with one blocked port, a single link failure:',
        options: ['reopens the blocked port after convergence', 'isolates forever', 'needs new addresses', 'deletes tables permanently'],
        answer: 0,
        explanation: 'Step 1: Blocked port still listens to control. Step 2: Loss of root port triggers recompute. Step 3: Timers move parked port to forwarding. Step 4: Connectivity restores through the spare edge.'
      }
    ]
  }
]

import type { SectionContent } from '../library'

// ============================================================================
// Computer Networks — Chapter 7: Transport Layer UDP, TCP and Congestion
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const cnCh07Content: SectionContent[] = [
  // ---------------------------------------------------------------- 7.1
  {
    sectionId: 'cn-ch7-s1',
    readingTime: 8,
    intro: 'User datagrams and transmission control segments both ride on IP, yet they promise opposite things: one offers bare multiplexing with minimal delay, the other offers ordered reliable bytes at the cost of headers and state. Reading their headers field by field shows exactly what each guarantee costs. This section compares the two wire formats before connection machinery begins.',
    objectives: [
      'Contrast header fields, overhead and service models of the two protocols',
      'Explain port-number addressing and checksum coverage in both headers',
      'Select the right protocol for voice, video, query and bulk transfer workloads'
    ],
    concepts: [
      {
        term: 'UDP header and service',
        kind: 'definition',
        statement: 'The **`UDP`** header `UH` carries only source port `SP`, destination port `DP`, length `LEN` and checksum `SUM` in eight bytes total. Delivery is **unreliable datagram** service with $$\\text{overhead} = 8 \\text{ bytes}.$$',
        detail: 'No sequence, window or options exist, so each datagram stands alone. Length covers header plus payload and redundant with IP length, kept for layering hygiene.'
      },
      {
        term: 'TCP header and sequencing',
        kind: 'definition',
        statement: 'The **`TCP`** header `TH` adds sequence `SEQ`, acknowledgement `ACK`, window `WND`, and flags `SYN` `FIN` `RST` to the same **port** `PORT` pair. Bytes are numbered so $$\\text{next SEQ} = \\text{SEQ} + \\text{segment bytes}.$$',
        detail: 'Minimum header is $20$ bytes, growing with options such as maximum segment size and window scaling. The acknowledgement field is valid only when the `ACK` flag is set, which holds for every segment after the first.'
      },
      {
        term: 'Ports and multiplexing',
        kind: 'notation',
        statement: 'Well-known ports **`0` through `1023`** `WELL` need privilege, registered ports `1024` through `49151` serve named services, and dynamic ports `49152` through `65535` source client sessions. A socket is the triple $$\\text{socket} = (IP, protocol, port).$$',
        detail: 'Server `80` for web and `53` for naming live in the well-known range. Clients pick ephemeral ports above $49151$ so concurrent sessions to one server stay distinct by full four-tuple.'
      },
      {
        term: 'Checksum with pseudo-header',
        kind: 'law',
        statement: 'Both checksums cover a **pseudo-header** `PSEUDO` of source `IP`, destination `IP`, protocol and length plus the segment, using ones-complement arithmetic with $$\\text{sum} + \\text{checksum} = 111\\ldots1_2.$$ A mismatch **discards** `DROP` the segment silently.',
        detail: 'UDP checksum is optional in older stacks but mandatory over newer address families; TCP checksum is always mandatory. Silent drop delegates recovery to loss detection rather than negative replies.'
      },
      {
        term: 'Choosing between the two',
        kind: 'insight',
        statement: 'Live media and single-query lookups prefer **`UDP`** `FAST` for low delay, while file and web transfer prefer **`TCP`** `SAFE` for ordered reliability. Custom retransmission over **`UDP`** suits control loops with $$\\text{deadline} < \\text{RTO}.$$',
        detail: 'Voice tolerates a lost sample but not a half-second stall waiting for it. Naming uses datagrams for lightness with truncation fallback to streams when answers exceed path limits.'
      }
    ],
    examples: [
      {
        title: 'Overhead on a 100-byte voice payload',
        problem: 'Compare total header bytes for one 100-byte voice sample over UDP plus IP versus TCP plus IP with no options.',
        steps: [
          { label: 'Step 1', text: 'Sum the fixed headers for each stack.\n```text\nUDP: 20 IP + 8 UDP + 100 = 128 bytes on wire\nTCP: 20 IP + 20 TCP + 100 = 140 bytes on wire\n```' },
          { label: 'Step 2', text: 'UDP overhead is $28$ bytes against $100$ payload, about $22$ percent. TCP overhead is $40$ bytes, about $29$ percent, before any retransmission or acknowledgement traffic.' },
          { label: 'Step 3', text: 'At fifty packets per second the gap is $12 \\times 50 = 600$ bytes per second per call, plus TCP acknowledgements that UDP never sends.' }
        ],
        result: 'UDP saves twelve bytes per packet plus all acknowledgement traffic, decisive for high packet-rate media.'
      },
      {
        title: 'Sequence numbers across three segments',
        problem: 'Sender with initial number 1000 transmits 500, 500 and 200 payload bytes. Give SEQ per segment and ACK from receiver.',
        steps: [
          { label: 'Step 1', text: 'Number bytes cumulatively from the start.\n```text\nseg1 SEQ=1000 len 500  covers 1000..1499\nseg2 SEQ=1500 len 500  covers 1500..1999\nseg3 SEQ=2000 len 200  covers 2000..2199\n```' },
          { label: 'Step 2', text: 'Receiver returns cumulative acknowledgement $1500$ after segment one, $2000$ after segment two, $2200$ after segment three.' },
          { label: 'Step 3', text: 'Loss of segment two stalls the acknowledgement at $1500$ while later bytes wait in the reassembly queue.' }
        ],
        result: 'SEQ marks first byte; ACK names the next missing byte, here 1500, 2000 then 2200.'
      }
    ],
    keyTakeaways: [
      'UDP header is eight bytes with no sequence or window state.',
      'TCP numbers every byte and acknowledges the next missing one.',
      'Ports plus addresses identify each session endpoint uniquely.',
      'Checksums with pseudo-headers drop corrupted segments silently.'
    ],
    quiz: [
      // PYQ-pattern: header-size overhead with sequence and ACK numerics
      {
        q: 'UDP header length versus minimum TCP header length:',
        options: ['8 vs 20 bytes', '20 vs 8 bytes', '20 vs 20 bytes', '8 vs 8 bytes'],
        answer: 0,
        explanation: 'Step 1: UDP has four 2-byte fields totaling 8. Step 2: TCP has sequence, ACK, window and flags totaling at least 20. Step 3: Options two and three swap or equalize the values. Step 4: 8 versus 20 is the correct pair.'
      },
      {
        q: 'Segment SEQ 5000 carries 1000 bytes. Next SEQ and receiver ACK are:',
        options: ['5000 and 5000', '6000 and 6000', '5001 and 5001', '6001 and 6000'],
        answer: 1,
        explanation: 'Step 1: Bytes cover 5000 through 5999 inclusive. Step 2: Next unsent byte is 5999 plus 1 which is 6000. Step 3: ACK names the next missing byte, also 6000. Step 4: Plus-one variants confuse bytes with segments.'
      },
      {
        q: 'Best fit for live voice with tight delay budget?',
        options: ['TCP with large windows', 'FTP transfer', 'UDP with application-level loss hiding', 'SMTP relay'],
        answer: 2,
        explanation: 'Step 1: Voice tolerates single losses. Step 2: Retransmission delay exceeds the playout deadline. Step 3: UDP avoids head-of-line stalls entirely. Step 4: Lightweight hiding outperforms reliable streams here.'
      },
      {
        q: 'Checksum mismatch on a TCP segment causes the receiver to:',
        options: ['request it again explicitly', 'reset the connection', 'deliver it with a warning', 'drop it silently and let timers recover'],
        answer: 3,
        explanation: 'Step 1: Checksum covers pseudo-header plus segment. Step 2: Failure proves corruption. Step 3: No negative reply exists at this layer. Step 4: Silent drop plus timeout recovery is the specified behavior.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.2
  {
    sectionId: 'cn-ch7-s2',
    readingTime: 10,
    intro: 'Reliability starts with agreeing on starting numbers and ends with agreeing that no more bytes will come. The three-way open synchronizes sequence spaces while the four-way close releases each direction independently. Between them, cumulative acknowledgements plus timers turn an unreliable packet service into an ordered byte stream.',
    objectives: [
      'Sequence the SYN, SYN-ACK and ACK open with starting numbers',
      'Sequence FIN and ACK close including half-close and TIME-WAIT',
      'Explain cumulative ACKs, duplicate ACKs and retransmission timers'
    ],
    concepts: [
      {
        term: 'Three-way handshake',
        kind: 'definition',
        statement: 'Opener sends **`SYN`** with `SEQ` equal to `x`, responder replies **`SYN-ACK`** with `SEQ` equal to `y` and `ACK` equal to `x` plus one, opener confirms **`ACK`** with `ACK` equal to `y` plus one. Each **`SYN`** consumes one **sequence number** `ONE`.',
        detail: 'Randomized starts near $2^{32}$ space block old duplicates from matching new sessions. The exchange also negotiates maximum segment size and window scaling before any data flows.'
      },
      {
        term: 'Four-way teardown',
        kind: 'definition',
        statement: 'Each side sends **`FIN`** `F` when done and the peer replies **`ACK`** `A`, so two **`FIN`** plus two **`ACK`** messages close both directions. A side may keep reading after its own **`FIN`**, called **half-close** `HALF`.',
        detail: 'TCP is full duplex, so one direction can end while the reverse still streams. Simultaneous close crosses two `FIN` messages and each side still acknowledges, reaching the same closed state.'
      },
      {
        term: 'TIME-WAIT duration',
        kind: 'law',
        statement: 'The final closer waits **`2MSL`** `WAIT` seconds, twice the maximum segment lifetime, before deleting state. With $$WAIT = 2 \\times MSL$$ late duplicates **expire** `EXPIRE` before any new session reuses the ports.',
        detail: 'Typical $MSL$ of $60$ seconds gives $120$ seconds of waiting with the four-tuple reserved. The wait also guarantees the final `ACK` can be retransmitted if lost.'
      },
      {
        term: 'Cumulative ACK and fast retransmit',
        kind: 'method',
        statement: 'Acknowledgements are **cumulative** `CUM`: `ACK n` confirms all bytes below `n`. Three **duplicate** `DUP` ACKs for the same `n` trigger **fast retransmit** `FAST` of segment `n` without waiting for **`RTO`** expiry.',
        detail: 'One duplicate follows reordering, two may follow single loss with later arrivals, three is the threshold balancing spurious against slow recovery. Selective acknowledgement blocks then pinpoint exactly which ranges arrived.'
      },
      {
        term: 'RTO estimation',
        kind: 'theorem',
        statement: 'Smoothed round-trip `SRTT` plus variance `RTTVAR` set the **timeout** `RTO` as $$RTO = SRTT + \\max(1, 4 \\times RTTVAR),$$ bounded below by **`1` second** `FLOOR` in classic stacks. Karn rule excludes **retransmitted** `RE` samples from the average.',
        detail: 'A sample $RTT = 80$ ms with $SRTT = 100$ ms and $RTTVAR = 10$ ms gives $RTO = 100 + 40 = 140$ ms before flooring. Backoff doubles the timer per consecutive loss up to a ceiling of tens of seconds.'
      }
    ],
    examples: [
      {
        title: 'Handshake with numbers x and y',
        problem: 'Client picks x 7000, server picks y 12000. List the three messages with SEQ and ACK fields.',
        steps: [
          { label: 'Step 1', text: 'Client opens with its start number.\n```text\nC->S  SYN  SEQ=7000  ACK=none\nS->C  SYN-ACK SEQ=12000 ACK=7001\nC->S  ACK  SEQ=7001  ACK=12001\n```' },
          { label: 'Step 2', text: 'Server acknowledges $7000 + 1 = 7001$ while consuming one number for its own `SYN` at $12000$.' },
          { label: 'Step 3', text: 'Client acknowledges $12000 + 1 = 12001$. Data then starts at $7001$ forward and $12001$ backward.' }
        ],
        result: 'Each SYN advances its own space by one; ACK always names the next expected number.'
      },
      {
        title: 'Loss recovered by three duplicates',
        problem: 'Sender emits segments 1..5 of 1000 bytes from SEQ 9000. Segment 2 is lost. Show ACK stream and recovery.',
        steps: [
          { label: 'Step 1', text: 'Arrival pattern drives cumulative replies.\n```text\nseg1 ok -> ACK 10000\nseg3 arrives gap -> ACK 10000 (dup 1)\nseg4 arrives gap -> ACK 10000 (dup 2)\nseg5 arrives gap -> ACK 10000 (dup 3) -> FAST resend seg2\n```' },
          { label: 'Step 2', text: 'Three duplicates at $10000$ prove segments beyond the gap survived, so loss rather than delay is likely.' },
          { label: 'Step 3', text: 'Sender retransmits bytes $10000$ through $10999$ at once; receiver then jumps ACK to $14000$ covering the buffered tail.' }
        ],
        result: 'Fast retransmit repairs the hole in one round trip instead of waiting out the full timeout.'
      }
    ],
    keyTakeaways: [
      'SYN synchronizes both starting numbers with plus-one acknowledgements.',
      'Each direction closes separately; the last closer waits twice MSL.',
      'ACKs are cumulative; three duplicates trigger immediate resend.',
      'Timeouts blend mean delay with variance and double under repeat loss.'
    ],
    quiz: [
      // PYQ-pattern: handshake ACK numbers with duplicate-ACK recovery
      {
        q: 'Client SYN SEQ 5000, server SYN-ACK SEQ 9000 ACK 5001. Client final ACK is:',
        options: ['SEQ 5000 ACK 9000', 'SEQ 5001 ACK 9001', 'SEQ 9001 ACK 5001', 'SEQ 5001 ACK 9000'],
        answer: 1,
        explanation: 'Step 1: Client SYN consumed number 5000. Step 2: Next client byte is 5000 plus 1 which is 5001. Step 3: Server SYN consumed 9000, so next is 9001. Step 4: Final segment carries SEQ 5001 with ACK 9001.'
      },
      {
        q: 'Purpose of TIME-WAIT at 2MSL is to:',
        options: ['save power', 'compress headers', 'let late duplicates expire and allow final ACK repair', 'assign ports'],
        answer: 2,
        explanation: 'Step 1: Duplicates live at most MSL seconds. Step 2: Waiting 2MSL outlives them in both directions. Step 3: Lost final ACK can be resent within the window. Step 4: New sessions then reuse ports safely.'
      },
      {
        q: 'Sender gets ACK 8000 three times while 8000..8999 missing but later bytes arrive. Action?',
        options: ['wait for timeout', 'send SYN again', 'close connection', 'fast-retransmit bytes from 8000'],
        answer: 3,
        explanation: 'Step 1: Three duplicates signal survival of later data. Step 2: Gap at 8000 is therefore loss, not reorder. Step 3: Threshold 3 balances false alarms. Step 4: Immediate resend saves one full timeout.'
      },
      {
        q: 'SRTT 200 ms and RTTVAR 25 ms give RTO (ignore floor):',
        options: ['300 ms', '200 ms', '225 ms', '100 ms'],
        answer: 0,
        explanation: 'Step 1: Formula is SRTT plus 4 times RTTVAR. Step 2: 4 times 25 equals 100. Step 3: 200 plus 100 equals 300. Step 4: Floor of 1 second does not bind here.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.3
  {
    sectionId: 'cn-ch7-s3',
    readingTime: 9,
    intro: 'A fast sender can drown a slow receiver even when the network itself is idle. Flow control paces the sender to the free buffer advertised by the peer, using windows that slide forward as bytes are acknowledged. This section sizes those windows from the stop-and-wait extreme to the bandwidth-delay product.',
    objectives: [
      'Compare stop-and-wait utilization against sliding-window pipelining',
      'Apply receiver-window limits to sender burst size',
      'Size buffers from bandwidth-delay product for full link use'
    ],
    concepts: [
      {
        term: 'Stop-and-wait utilization',
        kind: 'theorem',
        statement: 'Sending one frame of `L` bits over rate `R` with round trip `RTT` yields **utilization** `U` of $$U = \\frac{L/R}{L/R + RTT}.$$ The sender idles a full **`RTT`** `IDLE` per frame.',
        detail: 'With $L = 8000$ bits, $R = 10^{6}$ bits per second and $RTT = 0.08$ s, transmission is $0.008$ s against $0.088$ s total, so $U$ is near $9$ percent. Pipelining is mandatory on long fast paths.'
      },
      {
        term: 'Sliding window',
        kind: 'definition',
        statement: 'Up to **`W`** `WIN` unacknowledged segments may be in flight; the window **slides** `SLIDE` forward as `ACK` values advance with $$\\text{usable} = W - (\\text{sent} - \\text{acked}).$$ Go-back-N resends from the gap while selective repeat **resends only** `LOST` pieces.',
        detail: 'Window $W = 7$ segments keeps seven thousand bytes outstanding with thousand-byte segments. Sequence space must exceed window plus one to separate new from replayed frames.'
      },
      {
        term: 'Receiver window rwnd',
        kind: 'law',
        statement: 'Each `ACK` advertises free buffer **`rwnd`** `RW`, and the sender obeys $$\\text{in flight} \\leq \\min(rwnd, cwnd).$$ Zero **`rwnd`** triggers **persist probes** `PROBE` of one byte to detect reopening.',
        detail: 'A receiver with $64000$ free bytes and $30000$ already in flight grants $34000$ more. Shrinking an advertised window over received bytes risks deadlock, so stacks never retract granted credit.'
      },
      {
        term: 'Bandwidth-delay product',
        kind: 'theorem',
        statement: 'Full utilization needs in-flight bytes equal to the **bandwidth-delay product** `BDP` with $$BDP = R \\times RTT.$$ Window `W` in segments must satisfy $$W \\geq \\frac{R \\times RTT}{MSS}.$$',
        detail: 'A $100$-Mbps path with $RTT = 0.02$ s holds $250000$ bytes or about $172$ segments of $1460$ bytes. Smaller windows leave the link idle part of each round trip.'
      },
      {
        term: 'Silly-window avoidance',
        kind: 'method',
        statement: 'Nagle batches small **writes** `NAGLE` until one `ACK` or one **`MSS`** accumulates, while Clark delays **tiny window updates** `CLARK` until half the buffer or one **`MSS`** frees. Together they prevent **one-byte** `TINY` segments with $$\\text{goodput} = \\frac{\\text{payload}}{\\text{payload} + 40}.$$',
        detail: 'Telnet keystrokes without batching send $41$-byte packets for $1$ payload byte, a goodput below $3$ percent. Batching restores near-fifty-percent efficiency on interactive flows.'
      }
    ],
    examples: [
      {
        title: 'Utilization of stop-and-wait on a satellite hop',
        problem: 'Frame 8000 bits, rate 1 Mbps, RTT 540 ms. Compute utilization and the window needed for 100 percent.',
        steps: [
          { label: 'Step 1', text: 'Transmission time is $8000 / 10^{6} = 0.008$ s.\n```text\nU = 0.008 / (0.008 + 0.540) = 0.008 / 0.548 = 1.46 %\n```' },
          { label: 'Step 2', text: 'Product $R \\times RTT = 10^{6} \\times 0.54 = 540000$ bits or $67500$ bytes. Each frame holds $1000$ bytes.' },
          { label: 'Step 3', text: 'Need $67500 / 1000 = 67.5$, so $68$ frames in flight. Window below $68$ leaves the path idle.' }
        ],
        result: 'Stop-and-wait manages under 2 percent; a window near 68 frames fills the pipe.'
      },
      {
        title: 'Receiver throttles a fast sender',
        problem: 'Receiver buffer 64000 bytes, already holding 50000 unacknowledged. Sender wants to emit 30000 more. How much may go?',
        steps: [
          { label: 'Step 1', text: 'Free space is the hard ceiling.\n```text\nrwnd advertised = 64000 - 50000 = 14000 bytes\nallowed = min(14000, cwnd) = 14000 if cwnd larger\n```' },
          { label: 'Step 2', text: 'Sender emits at most $14000$ bytes now, about nine $1460$-byte segments plus a partial.' },
          { label: 'Step 3', text: 'As acknowledgements drain the buffer, `rwnd` reopens and the sender resumes. Zero `rwnd` would start one-byte persist probes.' }
        ],
        result: 'Only 14000 bytes may go; the rest waits for the receiver to drain.'
      }
    ],
    keyTakeaways: [
      'Stop-and-wait idles one RTT per frame and collapses on long paths.',
      'Sliding windows pipeline many segments bounded by unacknowledged count.',
      'Receiver window caps in-flight bytes at free buffer space.',
      'Bandwidth-delay product sets the window for full utilization.'
    ],
    quiz: [
      // PYQ-pattern: stop-and-wait utilization with bandwidth-delay sizing
      {
        q: '8000-bit frame, 1 Mbps, RTT 80 ms. Utilization is about:',
        options: ['91 percent', '50 percent', '9 percent', '100 percent'],
        answer: 2,
        explanation: 'Step 1: Transmission equals 8000 divided by 1000000 which is 0.008 s. Step 2: Total equals 0.008 plus 0.08 which is 0.088 s. Step 3: Ratio equals 0.008 divided by 0.088 which is 0.091. Step 4: As percent this is about 9.'
      },
      {
        q: '100-Mbps link with RTT 20 ms needs what BDP in bytes?',
        options: ['2500', '2000000', '25000', '250000'],
        answer: 3,
        explanation: 'Step 1: Rate times RTT equals 100M times 0.02 which is 2M bits. Step 2: Divide by 8 giving 250000 bytes. Step 3: 2500 is one hundred times small. Step 4: 2000000 is bits, not bytes.'
      },
      {
        q: 'rwnd 14000 with 50000 outstanding against 64000 buffer. Sender may send:',
        options: ['14000 more', '30000 more', '64000 more', '0 forever'],
        answer: 0,
        explanation: 'Step 1: Free equals 64000 minus 50000 which is 14000. Step 2: In-flight plus new must stay within 64000. Step 3: 30000 would overshoot by 16000. Step 4: Persist probes handle only the zero case, so 14000 is correct.'
      },
      {
        q: 'Nagle plus Clark rules prevent:',
        options: ['large bursts', 'streams of one-byte segments with 40-byte headers', 'encryption', 'routing loops'],
        answer: 1,
        explanation: 'Step 1: One payload byte plus 40 header bytes is 41 on wire. Step 2: Goodput is 1 divided by 41 near 2 percent. Step 3: Batching waits for ACK or MSS. Step 4: Tiny segments collapse into efficient ones.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.4
  {
    sectionId: 'cn-ch7-s4',
    depth: [
      {
        tier: 'masters',
        title: 'TCP congestion control: AIMD fairness and throughput laws',
        blocks: [
          {
            kind: 'para',
            body: '**Congestion control** treats loss or marking as a congestion signal and adjusts the window $w$ by **additive increase** of roughly one segment per round trip and **multiplicative decrease** halving on loss. Slow start doubles $w$ per round trip below threshold $s$, then congestion avoidance grows linearly, forming the classic sawtooth between $W/2$ and $W$. Graduate modeling asks three questions: what long-run rate does the sawtooth sustain, is the sharing across flows fair, and what replaces loss as the signal when buffers bloat. The answers connect packet dynamics to closed-form rate laws and to deployed evolutions beyond classic Reno.'
          },
          {
            kind: 'theorem',
            body: 'For periodic loss with probability $p$, TCP Reno throughput follows the **Mathis law** $$T \\approx \\frac{C \\times MSS}{RTT \\times \\sqrt{p}}$$ with constant $C \\approx 1.22$ for random drops, so rate scales inversely with round-trip time and the square root of loss. Moreover, synchronized AIMD flows with identical round trips converge to **equal-share fairness**: the difference between any two windows shrinks by half per loss epoch while total utilization stays high. Flows with different round trips share inversely with $RTT$, which is the structural source of round-trip unfairness.'
          },
          {
            kind: 'derivation',
            heading: 'Sawtooth mean and fairness dynamics',
            body: 'Model one sawtooth from $W/2$ to $W$ growing by $1$ per round trip $RTT$: the epoch lasts $W/2$ trips and carries $(3/8)W^{2}$ segments, so loss probability satisfies $p = 1/((3/8)W^{2})$ and $W = \\sqrt{8/(3p)}$. Mean window is $3W/4$, giving $$T = \\frac{3W/4 \\times MSS}{RTT} = \\frac{1.22 \\times MSS}{RTT \\times \\sqrt{p}}.$$ Fairness follows because on loss both windows halve, preserving difference $d$, while additive growth adds equally, so relative difference $d/W$ shrinks; repeated epochs drive $d$ toward zero for equal $RTT$. With unequal $RTT_1$ and $RTT_2$, growth per unit time is $1/RTT$, so equilibrium satisfies $w_1/RTT_1 = w_2/RTT_2$ only under synchronized loss — otherwise the faster round trip grabs proportionally more.'
          },
          {
            kind: 'application',
            body: 'Bufferbloat and high-speed paths exposed the limits of loss-only control: deep buffers delay the signal until latency spikes, while $W$ in the tens of thousands makes halving needlessly violent. Deployed responses keep AIMD structure but change signals and gains — explicit congestion notification marks instead of dropping, bottleneck-bandwidth and round-trip propagation time estimation paces at the fair rate rather than probing to loss, and per-flow queueing isolates fairness from $RTT$ disparity. Research frontiers analyze these as **control laws** with stability proofs under delayed feedback, turning the sawtooth derivation above into a special case of a broader congestion-control design space.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'When many senders share one bottleneck, the network itself becomes the scarce buffer and windows must sense its fill. Congestion control probes for capacity with exponential and linear growth, then cuts sharply on loss to form the classic sawtooth. Sockets expose each of these behaviors to programs through a small set of calls.',
    objectives: [
      'Trace slow start, additive increase and multiplicative decrease on loss',
      'Compute sawtooth average and loss point from window limits',
      'Map socket calls to handshake, transfer and close phases'
    ],
    concepts: [
      {
        term: 'Slow start',
        kind: 'definition',
        statement: 'Window **`cwnd`** `CW` doubles each round trip from one **`MSS`** while below threshold **`ssthresh`** `TH`, following $$cwnd_{k+1} = 2 \\times cwnd_k.$$ Each **`ACK`** adds one **`MSS`** `SEG` so growth is **exponential** `EXP`.',
        detail: 'From $1$ the sequence runs $1, 2, 4, 8$ segments per round trip, reaching $64$ in six trips. Exit occurs at threshold or on loss, never by timer alone.'
      },
      {
        term: 'AIMD sawtooth',
        kind: 'law',
        statement: 'Above threshold each **`ACK`** adds **`MSS` squared over `cwnd`** approximating plus one **`MSS`** per round trip, and loss halves the window: **additive increase, multiplicative decrease** `AIMD` with $$cwnd := cwnd + 1 \\text{ per RTT}, \\qquad cwnd := \\frac{cwnd}{2} \\text{ on loss}.$$',
        detail: 'Between $W/2$ and $W$ the average is $0.75W$ segments. With $W = 20$ the mean is $15$ segments or $21900$ bytes at $1460$ bytes each.'
      },
      {
        term: 'Fast recovery',
        kind: 'method',
        statement: 'After three duplicates set **`ssthresh`** to half of **`cwnd`** and **`cwnd`** to threshold plus three, then grow linearly: **inflation** `INF` tracks departed packets with $$cwnd = ssthresh + 3.$$ Timeout instead resets **`cwnd`** to one **`MSS`** `ONE`.',
        detail: 'Duplicate-driven loss halves but continues, while timeout-driven loss restarts slow start from one. Selective replies keep the pipe fuller during repair by naming exact holes.'
      },
      {
        term: 'Loss as congestion signal',
        kind: 'insight',
        statement: 'Drops mark **overflow** `FULL` of the bottleneck queue under drop-tail, so throughput scales as **`MSS` over `RTT` times one over root loss** `MATHIS` with $$\\text{rate} \\approx \\frac{MSS}{RTT \\times \\sqrt{p}}.$$ Random early marking **anticipates** `RED` overflow before the queue fills.',
        detail: 'Loss rate $p = 0.01$ with $MSS = 1460$ bytes and $RTT = 0.05$ s gives about $29200$ bytes per second. Halving $RTT$ doubles share, the root of round-trip unfairness.'
      },
      {
        term: 'Socket call flow',
        kind: 'notation',
        statement: 'Server runs **`socket`** `S`, **`bind`** `B`, **`listen`** `L`, **`accept`** `AC`; client runs **`socket`** plus **`connect`** `CO`; both loop **`send`** and **`recv`** `IO` then call **`close`** `CL`. Blocking **`accept`** returns a **new descriptor** `FD` per session.',
        detail: 'The three-way handshake runs inside `connect` and network arrival wakes `accept`. Iterative servers handle one descriptor at a time while concurrent servers delegate each new descriptor to a thread or process.'
      }
    ],
    derivations: [
      {
        title: 'AIMD Convergence to Fair Shares',
        statement: 'Two additive-increase multiplicative-decrease flows sharing capacity $C$ converge to equal windows: $$w_{1} = w_{2} = \\frac{C}{2}$$',
        prerequisites: [
          'Bottleneck capacity $C$ with loss signal when $w_{1} + w_{2} = C$',
          'Additive rule $w_{i} := w_{i} + a$ per round trip without loss',
          'Multiplicative rule $w_{i} := b \\cdot w_{i}$ on loss with $0 < b < 1$',
        ],
        steps: [
          {
            label: 'Step 1: Grow both windows additively between losses',
            formula: `$$w_{i} \\leftarrow w_{i} + a$$`,
            explanation: 'Each loss-free round trip adds the same $a$ to both windows, moving the rate pair along a forty-five degree line toward higher use. Equal steps preserve the absolute gap $w_{1} - w_{2}$ while shrinking its ratio to the total. This diagonal motion is what carries an unfair allocation closer to the fairness line $w_{1} = w_{2}$.',
          },
          {
            label: 'Step 2: Detect overload at the capacity line',
            formula: `$$w_{1} + w_{2} = C$$`,
            explanation: 'The bottleneck queue overflows exactly when the window sum reaches $C$, so loss arrives as a binary capacity signal. Both senders observe the same event and cut together under synchronized-drop analysis. The loss point therefore always lies on the efficiency line where total use equals capacity.',
          },
          {
            label: 'Step 3: Cut multiplicatively toward the origin',
            formula: `$$w_{i} \\leftarrow b \\cdot w_{i}, \\quad 0 < b < 1$$`,
            explanation: 'Scaling both windows by $b$ moves the rate pair along the ray to the origin, preserving the ratio $w_{1} / w_{2}$ but shrinking the absolute gap by factor $b$. The larger flow loses more window in absolute terms, which is the asymmetry that favors fairness. Halving with $b = 0.5$ is the classic choice balancing responsiveness against utilization.',
          },
          {
            label: 'Step 4: Repeat the sawtooth toward the fair point',
            formula: `$$d_{k+1} = b \\cdot d_{k}$$`,
            explanation: 'Each increase-then-decrease cycle returns the pair to the capacity line but with unfairness distance $d_{k}$ scaled down geometrically. The fixed point of the cycle is the intersection of the fairness line with the capacity line. Hence repeated sawteeth converge to $w_{1} = w_{2} = C/2$ with full yet equal use.',
          },
        ],
        result: 'Alternating equal steps up with proportional steps down drives any starting pair to $w_{1} = w_{2} = C/2$: efficiency from filling $C$ and fairness from shrinking the gap each cycle. The classic halving sawtooth averages three quarters of the peak window per flow.',
      },
    ],
    examples: [
      {
        title: 'Slow start from one to threshold twelve',
        problem: 'cwnd starts 1 MSS, ssthresh 12 MSS, no loss. List cwnd per RTT and the exit trip.',
        steps: [
          { label: 'Step 1', text: 'Double while strictly below threshold.\n```text\nRTT0 1 -> RTT1 2 -> RTT2 4 -> RTT3 8 -> RTT4 16 (exceeds 12)\n```' },
          { label: 'Step 2', text: 'After trip three $cwnd = 8$ still below $12$, so one more doubling fires. Arrival at $16$ overshoots threshold mid-trip in real stacks that check per ACK.' },
          { label: 'Step 3', text: 'Growth switches to additive increase of about one per trip from near $12$ onward, forming the sawtooth base.' }
        ],
        result: 'Exponential climb 1, 2, 4, 8 then handoff near 12 into linear probing.'
      },
      {
        title: 'Sawtooth average and loss recovery',
        problem: 'Flow oscillates between 8 and 16 MSS with 1460-byte segments and RTT 50 ms. Find average rate and post-loss windows.',
        steps: [
          { label: 'Step 1', text: 'Average window is three quarters of peak for halving AIMD.\n```text\nWavg = 0.75 * 16 = 12 MSS = 17520 bytes\nrate = 17520 / 0.05 = 350400 Bps\n```' },
          { label: 'Step 2', text: 'On loss at $16$, threshold becomes $8$ and window drops to $8$ under timeout-free fast recovery plus inflation.' },
          { label: 'Step 3', text: 'Linear climb $9, 10, 11$ through $16$ then halves again, repeating the tooth with period $8$ round trips.' }
        ],
        result: 'Mean 12 segments near 350 kBps; each loss halves 16 to 8 and climbs back.'
      }
    ],
    keyTakeaways: [
      'Slow start doubles per RTT until threshold or loss.',
      'Congestion avoidance adds one per RTT and halves on loss.',
      'Duplicate loss halves and continues; timeout loss restarts at one.',
      'Sockets map handshake, streaming and close onto a few calls.'
    ],
    quiz: [
      // PYQ-pattern: AIMD sawtooth average with ssthresh update numerics
      {
        q: 'cwnd 1, ssthresh 16, no loss. cwnd after 3 RTTs is:',
        options: ['3', '4', '16', '8'],
        answer: 3,
        explanation: 'Step 1: Start 1 doubles to 2 after trip 1. Step 2: 2 doubles to 4 after trip 2. Step 3: 4 doubles to 8 after trip 3. Step 4: 16 needs one more trip, so 8 is correct.'
      },
      {
        q: 'Loss at cwnd 24 via three duplicates. New ssthresh and cwnd are about:',
        options: ['12 and 12 plus inflation', '24 and 24', '1 and 1', '48 and 48'],
        answer: 0,
        explanation: 'Step 1: Threshold becomes half of 24 which is 12. Step 2: Window becomes threshold plus 3 for departed packets. Step 3: Growth resumes linearly, not exponentially. Step 4: Reset to 1 happens only on timeout.'
      },
      {
        q: 'Sawtooth between 10 and 20 MSS averages:',
        options: ['20', '15', '10', '12'],
        answer: 1,
        explanation: 'Step 1: AIMD averages three quarters of peak. Step 2: 0.75 times 20 equals 15. Step 3: Midpoint of 10 and 20 is also 15 for symmetric teeth. Step 4: 12 would suit a peak of 16, not 20.'
      },
      {
        q: 'Server call that yields a fresh descriptor per client is:',
        options: ['bind', 'listen', 'accept', 'socket'],
        answer: 2,
        explanation: 'Step 1: socket creates the listening endpoint. Step 2: bind attaches the port. Step 3: listen arms the queue. Step 4: accept dequeues one client into a new descriptor.'
      }
    ]
  }
]

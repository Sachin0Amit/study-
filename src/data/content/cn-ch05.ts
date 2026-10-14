import type { SectionContent } from '../library'

// ============================================================================
// Computer Networks — Chapter 5: IPv4 Addressing, Subnetting, CIDR and NAT
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const cnCh05Content: SectionContent[] = [
  // ---------------------------------------------------------------- 5.1
  {
    sectionId: 'cn-ch5-s1',
    readingTime: 9,
    intro: 'The IPv4 header carries every control field that fragmentation needs, from identification through flags to fragment offset. When a datagram meets a link with a smaller maximum transfer unit, the router slices the payload into pieces that each fit, copying the header and setting offsets so the destination can rebuild the original. This section turns those rules into arithmetic you can run on any numbers.',
    objectives: [
      'Parse the IPv4 header fields that control fragmentation and reassembly',
      'Compute fragment count, payload sizes, offsets and flag settings for any MTU',
      'Predict reassembly behavior including last-fragment detection and overlap handling'
    ],
    concepts: [
      {
        term: 'IPv4 header fields for fragmentation',
        kind: 'definition',
        statement: 'The **identification** field `ID` groups fragments of one datagram, while `DF` forbids splitting and `MF` marks more fragments to come. The **fragment offset** field `OFFSET` stores the position of each piece in units of eight bytes, so $$\\text{offset field} = \\frac{\\text{byte position}}{8}.$$',
        detail: 'Total Length counts header plus payload in bytes, Header Length counts 32-bit words, and Time To Live decrements per hop. Only the destination reassembles, keyed by source, destination, protocol and `ID`, with a reassembly timer discarding incomplete groups.'
      },
      {
        term: 'MTU rule and payload alignment',
        kind: 'law',
        statement: 'No fragment except the last may carry a payload that is not a **multiple of eight** bytes, enforced by the `MTU` limit of the outgoing link. Each fragment payload satisfies $$\\text{frag payload} \\leq \\text{MTU} - 20$$ with the header `HLEN` of twenty bytes assumed and the value rounded down to a multiple of eight.',
        detail: 'If `DF` is set and the datagram exceeds `MTU`, the router drops it and signals that fragmentation would have been needed. Otherwise the router copies the header, sets `MF` on all but the final piece, and assigns offsets $0, 185, 370$ in the classic 4000-byte into 1500-byte MTU illustration.'
      },
      {
        term: 'Offset arithmetic',
        kind: 'method',
        statement: 'Given bytes already sent `SENT`, the next offset is **offset equals sent divided by eight**, computed as $$OFFSET = \\frac{SENT}{8}.$$ The receiver rebuilds byte position as $$\\text{byte position} = OFFSET \\times 8.$$',
        detail: 'Because the offset field holds thirteen bits, the largest representable position is $8191 \\times 8$ bytes, well beyond the 65535-byte datagram limit. Offsets therefore always appear as integers such as $0$, $185$ and $370$, each times eight giving $0$, $1480$ and $2960$ bytes.'
      },
      {
        term: 'Fragment count formula',
        kind: 'theorem',
        statement: 'For payload `P` and maximum fragment payload `M`, the **fragment count** `N` is the ceiling $$N = \\left\\lceil \\frac{P}{M} \\right\\rceil.$$ All fragments but the last carry exactly `M` bytes with `MF` set to one.',
        detail: 'With $P = 3980$ bytes of payload and $M = 1480$ bytes per fragment, $N = \\lceil 3980 / 1480 \\rceil = 3$ fragments carrying $1480$, $1480$ and $1020$ bytes. Total Length values read $1500$, $1500$ and $1040$ after adding the twenty-byte header to each.'
      },
      {
        term: 'Reassembly and overlap rule',
        kind: 'insight',
        statement: 'The destination places each payload at `OFFSET` times eight and declares completion when a fragment with **`MF` equals zero** arrives covering the full span. Overlapping bytes keep the **first arrival** in most stacks, so `ID` reuse and duplicate offsets must be handled by timer and length checks.',
        detail: 'Missing pieces leave holes and the timer eventually frees the buffer. The last fragment is recognized solely by `MF` equal to zero, never by size, since a small middle fragment is legal when a later link uses an even smaller `MTU`.'
      }
    ],
    examples: [
      {
        title: 'Fragment a 4000-byte datagram over MTU 1500',
        problem: 'A host sends a 4000-byte IPv4 datagram with header 20 bytes over a link with MTU 1500 bytes. List every fragment with Total Length, MF and offset.',
        steps: [
          { label: 'Step 1', text: 'Payload is $4000 - 20 = 3980$ bytes. Maximum fragment payload is $1500 - 20 = 1480$ bytes, already a multiple of eight.\n```text\nP = 3980, M = 1480, N = ceil(3980 / 1480) = 3 fragments\n```' },
          { label: 'Step 2', text: 'First two fragments carry 1480 bytes each with `MF` set to one. Offsets are $0$ and $1480 / 8 = 185$. Total Length values are $1480 + 20 = 1500$ each.' },
          { label: 'Step 3', text: 'Last fragment carries $3980 - 2960 = 1020$ bytes with `MF` set to zero. Offset is $2960 / 8 = 370$ and Total Length is $1020 + 20 = 1040$.' }
        ],
        result: 'Fragments: (1500, MF 1, offset 0), (1500, MF 1, offset 185), (1040, MF 0, offset 370). Offsets times eight give byte positions 0, 1480 and 2960.'
      },
      {
        title: 'Two-stage fragmentation with shrinking MTU',
        problem: 'A 3000-byte datagram with 20-byte header crosses MTU 1500 then MTU 800. Show how the second fragment from stage one is split again.',
        steps: [
          { label: 'Step 1', text: 'Stage one: payload $2980$ bytes, $M = 1480$ bytes, so three pieces are not needed; two suffice with sizes 1480 and 1500? Recompute: $N = 3$? $2980 / 1480 = 2.01$ so $N = 3$? No, $1480 + 1480 = 2960$, remainder $20$ bytes, so fragments of 1480, 1480 and 20 bytes.\n```text\nStage1 offsets: 0, 185, 370 with MF 1,1,0\n```' },
          { label: 'Step 2', text: 'The middle fragment with offset $185$ and 1480 bytes now faces MTU $800$, so $M = 780$ rounded down to $776$ bytes. It splits into 776 and 704 bytes with offsets $185$ and $185 + 97 = 282$, since $776 / 8 = 97$.' },
          { label: 'Step 3', text: 'Both sub-fragments keep the same `ID` and `MF` equal to one, because the original middle piece was not last. The destination still reassembles five arrivals into one 3000-byte datagram using offset times eight.' }
        ],
        result: 'Nested fragmentation preserves ID and multiplies offsets by eight; the middle 1480-byte piece becomes (776 bytes, offset 185) plus (704 bytes, offset 282).'
      }
    ],
    keyTakeaways: [
      'Fragment offset counts eight-byte blocks: byte position equals offset times eight.',
      'All fragments except the last carry multiples of eight bytes with MF set to one.',
      'Fragment count is the ceiling of payload divided by maximum fragment payload.',
      'Only the destination reassembles, keyed by ID, and MF equal to zero marks the tail.'
    ],
    quiz: [
      // PYQ-pattern: fragment offset and MF flag numerics for 4000-byte datagram
      {
        q: 'A 4000-byte datagram (20-byte header) crosses MTU 1500. What is the offset of the third fragment?',
        options: ['370', '185', '0', '444'],
        answer: 0,
        explanation: 'Step 1: Payload equals 4000 minus 20 which is 3980 bytes. Step 2: Each full fragment carries 1500 minus 20 which is 1480 bytes. Step 3: Bytes before fragment three equal 2 times 1480 which is 2960 bytes. Step 4: Offset equals 2960 divided by 8 which is 370.'
      },
      {
        q: 'Which flag combination identifies the last fragment of a datagram?',
        options: ['MF 1 with offset 0', 'MF 0 with nonzero offset', 'DF 1 with MF 1', 'MF 1 with nonzero offset'],
        answer: 1,
        explanation: 'Step 1: MF equal to 1 means more fragments follow. Step 2: MF equal to 0 means no more follow, marking the tail. Step 3: A nonzero offset proves it is not the first piece. Step 4: Together MF 0 plus nonzero offset uniquely identifies a tail fragment.'
      },
      {
        q: 'A 1500-byte MTU link carries a datagram with DF set and Total Length 2000. What happens?',
        options: ['It is fragmented into two pieces', 'It is forwarded whole', 'It is dropped and a control message is sent', 'It is buffered until MTU grows'],
        answer: 2,
        explanation: 'Step 1: DF equal to 1 forbids any splitting. Step 2: Length 2000 exceeds MTU 1500 by 500 bytes. Step 3: The router cannot forward and cannot fragment. Step 4: It drops the packet and returns a fragmentation-needed control message.'
      },
      {
        q: 'Payload 3980 bytes with max fragment payload 1480 bytes needs how many fragments?',
        options: ['2', '4', '5', '3'],
        answer: 3,
        explanation: 'Step 1: Divide 3980 by 1480 giving about 2.69. Step 2: The ceiling of 2.69 is 3. Step 3: Check sizes 1480 plus 1480 plus 1020 equals 3980. Step 4: Two fragments hold only 2960 bytes which is short by 1020, so 3 fragments are required.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.2
  {
    sectionId: 'cn-ch5-s2',
    readingTime: 8,
    intro: 'Before CIDR, address space was carved into fixed classes that told every router where the network part ended and the host part began. Subnet masks then allowed one block to be sliced into smaller subnets by borrowing host bits. This section practices the counting that makes any mask question mechanical.',
    objectives: [
      'Classify classful blocks and state default masks and ranges',
      'Apply custom subnet masks to count subnets and usable hosts',
      'Convert fluently between dotted masks, prefix lengths and wildcard forms'
    ],
    concepts: [
      {
        term: 'Classful blocks A, B and C',
        kind: 'definition',
        statement: 'Class **A** uses first octet `0` to `127` with default mask `255.0.0.0`, class **B** uses `128` to `191` with `255.255.0.0`, class **C** uses `192` to `223` with `255.255.255.0`. Leading bits `0`, `10` and `110` identify the class.',
        detail: 'Classes D and E cover multicast starting at $224$ and reserved space starting at $240$. Classful routing ignored masks entirely and inferred the split from the first octet, which wasted millions of addresses and motivated classless addressing.'
      },
      {
        term: 'Subnet mask mechanics',
        kind: 'law',
        statement: 'A **mask** of `1` bits selects the network plus subnet portion when bitwise-ANDed with the address `IP`. The relation is $$\\text{network} = \\text{IP} \\mathbin{\\&} \\text{mask}$$ with prefix length $$n = \\text{count of one bits}.$$',
        detail: 'Mask `255.255.255.192` carries $26$ one bits, leaving $6$ host bits. Contiguous ones are mandatory; a mask such as $255.0.255.0$ with a zero byte between one bytes is invalid.'
      },
      {
        term: 'Usable host count',
        kind: 'theorem',
        statement: 'With `h` host bits, the **usable host count** is $$U = 2^{h} - 2,$$ subtracting the all-zero network and all-one broadcast addresses. A `/31` link with `h` equal to one is the special point-to-point exception with $$U = 2.$$',
        detail: 'A $26$-bit prefix leaves $h = 6$ host bits, so $U = 64 - 2 = 62$ usable hosts. A $30$-bit prefix leaves $h = 2$ bits with $U = 4 - 2 = 2$ hosts, the standard serial-link choice.'
      },
      {
        term: 'Subnet counting',
        kind: 'method',
        statement: 'Borrowing `s` bits beyond the default boundary creates **subnets** counted by `S` as $$S = 2^{s}.$$ Each subnet then holds $$U = 2^{h} - 2$$ hosts where `h` is the remaining host width.',
        detail: 'Borrowing $3$ bits from a class C block yields $S = 8$ subnets of $32$ addresses each with $30$ usable hosts. The subnet increment equals the block size $256 - 192 = 64$ in the interesting octet for mask `255.255.255.192`.'
      },
      {
        term: 'Prefix, dotted and wildcard forms',
        kind: 'notation',
        statement: 'Prefix **`/` notation** `P`, dotted mask `MASK` and wildcard `WILD` are three views with $$WILD = 255.255.255.255 - MASK.$$ A `/26` prefix equals mask `255.255.255.192` and wildcard `0.0.0.63`.',
        detail: 'Wildcard masks appear in access lists where zero means must-match and $255$ means ignore. Converting through the prefix length $n$ is fastest: host bits $h = 32 - n$, block size $2^{h}$, increment in the octet holding the boundary.'
      }
    ],
    examples: [
      {
        title: 'Subnet 192.168.10.0 with prefix 26',
        problem: 'Split block 192.168.10.0 with 26-bit prefix into subnets. Give mask, block size, first two subnets and usable hosts each.',
        steps: [
          { label: 'Step 1', text: 'Host bits $h = 32 - 26 = 6$. Block size $2^{6} = 64$ addresses.\n```text\nmask 255.255.255.192, wildcard 0.0.0.63, hosts 62 each\n```' },
          { label: 'Step 2', text: 'Subnet zero spans `192.168.10.0` through `192.168.10.63` with network `192.168.10.0` and broadcast `192.168.10.63`. Usable range is `192.168.10.1` through `192.168.10.62`.' },
          { label: 'Step 3', text: 'Subnet one spans `192.168.10.64` through `192.168.10.127` with usable `192.168.10.65` through `192.168.10.126`. Four such subnets fill the full class C block.' }
        ],
        result: 'Four subnets of 64 addresses, 62 usable hosts each; increment 64 in the last octet.'
      },
      {
        title: 'How many host bits for 500 hosts?',
        problem: 'A campus segment needs 500 usable host addresses. Find the smallest prefix length and mask.',
        steps: [
          { label: 'Step 1', text: 'Need $2^{h} - 2 \\geq 500$, so $2^{h} \\geq 502$. Since $2^{8} = 256$ is too small and $2^{9} = 512$ suffices, $h = 9$ bits.\n```text\n2^8=256 < 502, 2^9=512 >= 502, so h=9, n=23\n```' },
          { label: 'Step 2', text: 'Prefix length $n = 32 - 9 = 23$. Mask is `255.255.254.0` with block size $512$ in the third octet.' },
          { label: 'Step 3', text: 'One such block holds $512 - 2 = 510$ usable hosts, the tightest fit above 500 with only $10$ spare addresses.' }
        ],
        result: 'Prefix 23 with mask 255.255.254.0 gives 510 usable hosts, the minimum covering 500.'
      }
    ],
    keyTakeaways: [
      'Class is fixed by the first octet; the mask then refines network versus host.',
      'Usable hosts equal two raised to host bits minus two for network and broadcast.',
      'Borrowed bits double the subnet count with each extra bit.',
      'Prefix, dotted mask and wildcard are interchangeable views of one boundary.'
    ],
    quiz: [
      // PYQ-pattern: usable-host and subnet-count arithmetic from masks
      {
        q: 'Mask 255.255.255.240 leaves how many usable hosts per subnet?',
        options: ['6', '14', '30', '16'],
        answer: 1,
        explanation: 'Step 1: Last octet 240 equals 11110000 in binary with 4 host bits. Step 2: Total addresses equal 2 raised to 4 which is 16. Step 3: Subtract network and broadcast giving 16 minus 2 which is 14. Step 4: Raw 16 counts reserved addresses, so 14 is the usable answer.'
      },
      {
        q: 'Which address range belongs to class B by first octet?',
        options: ['10.0.0.5', '192.168.1.1', '172.20.5.4', '224.0.0.1'],
        answer: 2,
        explanation: 'Step 1: Class A spans first octet 0 through 127. Step 2: Class B spans 128 through 191. Step 3: Values are 10, 192, 172 and 224. Step 4: Only 172 falls in 128 through 191.'
      },
      {
        q: 'Borrowing 4 bits from a class C block yields how many subnets?',
        options: ['4', '8', '32', '16'],
        answer: 3,
        explanation: 'Step 1: Each borrowed bit doubles the count. Step 2: Subnet count equals 2 raised to 4. Step 3: 2 raised to 4 equals 16. Step 4: Each of the 16 subnets holds 14 usable hosts, confirming the split.'
      },
      {
        q: 'Prefix 30 on a point-to-point link is special because:',
        options: ['it holds exactly 2 usable hosts with no waste beyond network and broadcast', 'it holds 30 hosts', 'it disables broadcast', 'it needs no mask'],
        answer: 0,
        explanation: 'Step 1: Host bits equal 32 minus 30 which is 2. Step 2: Total addresses equal 2 squared which is 4. Step 3: Minus network and broadcast gives 4 minus 2 which is 2. Step 4: Two endpoints exactly fill the block, making it the standard serial-link choice.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.3
  {
    sectionId: 'cn-ch5-s3',
    depth: [
      {
        tier: 'masters',
        title: 'Longest-prefix match: aggregation and forwarding theory',
        blocks: [
          {
            kind: 'para',
            body: '**Classless addressing** replaces fixed class boundaries with arbitrary prefix lengths $/p$, so a block denotes $2^{32-p}$ addresses sharing the first $p$ bits. Routers forward by **longest-prefix match**: among all covering prefixes, the most specific wins, which lets a provider aggregate thousands of customer routes into one advertisement while exceptions punch narrower holes. Graduate forwarding theory treats the table as a **binary trie** where lookup cost grows with prefix length and update cost grows with aggregation overlap. The design tension is between table size, which aggregation shrinks, and routing precision, which specificity preserves.'
          },
          {
            kind: 'theorem',
            body: 'Longest-prefix match on a prefix set is **well defined**: for any destination address $d$, at most one longest covering prefix exists, and default $0.0.0.0/0$ guarantees at least one. Aggregation of sibling prefixes $P0$ and $P1$ under parent $P$ preserves forwarding correctness exactly when no longer exception inside $P$ requires distinct treatment; otherwise the aggregate must coexist with the exception, and longest match automatically prefers the exception. Any set of routes can be transformed into an equivalent **minimal cover** with no redundant prefix whose removal changes forwarding.'
          },
          {
            kind: 'proof',
            body: 'Existence follows because covering prefixes of $d$ are totally ordered by length: any two covering prefixes nest, since they share the first $\\min$ bits equal to the destination prefix, so the maximum length is unique. Correctness of aggregation follows by case analysis: traffic to addresses under the exception still matches the longer exception, while all other addresses under $P$ match the aggregate exactly as before, so behavior is unchanged. Minimality follows by greedily deleting any prefix whose covered set is already covered by a combination of others with identical next hops; the process terminates because each deletion shrinks the set, and the result is minimal by construction. The argument also shows why misconfigured aggregation that swallows an exception blackholes traffic — the proof obligation is checking exception preservation.'
          },
          {
            kind: 'application',
            body: 'Backbone engineering applies the theorem as **route summarization discipline**: aggregate at area and provider boundaries, leak specifics only for traffic-engineering exceptions, multihoming and fast failover. Forwarding hardware implements longest match as a trie walk with $O(W)$ steps for $W$-bit addresses, accelerated by compressed tries and ternary content-addressable memories that trade power for single-cycle lookup. Measurement studies use the minimal-cover size as the intrinsic routing load, separating protocol churn from addressing policy. When tables outgrow hardware, the fix suggested by theory is re-aggregation and exception hygiene, not merely larger memories.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'CIDR replaced rigid classes with arbitrary prefix lengths, letting operators carve exactly the block size they need. Neighboring blocks with a shared prefix can then be merged into one shorter advertisement. Forwarding itself reduces to a single rule: the longest matching prefix wins.',
    objectives: [
      'Read slash notation and derive address range, mask and block size',
      'Merge neighboring prefixes into the shortest covering supernet',
      'Apply longest-prefix match to any forwarding table'
    ],
    concepts: [
      {
        term: 'CIDR prefix notation',
        kind: 'notation',
        statement: 'A block written as **`IP` with prefix `n`** contains $$\\text{size} = 2^{32-n}$$ addresses from the masked base through base plus size minus one. The mask `MASK` holds `n` leading one bits.',
        detail: 'Block `192.168.4.0` with prefix $22$ spans $2^{10} = 1024$ addresses from `192.168.4.0` through `192.168.7.255`. The base must be a multiple of the block size, so `192.168.5.0` with prefix $22$ is not a valid base.'
      },
      {
        term: 'Supernetting and summarization',
        kind: 'method',
        statement: 'Two sibling blocks sharing the first **`n` minus one** bits merge into one entry with **prefix shortened by one** and size doubled. Four consecutive `/24` blocks aligned on a multiple of four merge into one `/22` with $$4 \\times 256 = 1024$$ addresses.',
        detail: 'Blocks `192.168.0.0`, `192.168.1.0`, `192.168.2.0` and `192.168.3.0` with prefix $24$ each merge into `192.168.0.0` with prefix $22$. Summarization shrinks tables from four rows to one with no loss of reachability when the merged range is fully owned.'
      },
      {
        term: 'Longest-prefix match',
        kind: 'law',
        statement: 'When several table rows cover a destination `D`, the router forwards via the **longest matching prefix** `BEST`, the row with the greatest `n` among matches. A default route `0.0.0.0` with prefix $0$ matches everything with $$n = 0.$$',
        detail: 'Rows `10.0.0.0` prefix $8$ and `10.24.0.0` prefix $16$ both cover `10.24.8.9`, but the $16$-bit row wins because $16 > 8$. Host routes with prefix $32$ always win when present.'
      },
      {
        term: 'Masking and range arithmetic',
        kind: 'method',
        statement: 'The base address equals **`IP` bitwise-AND `MASK`**, and the broadcast equals **base OR wildcard** `WILD`. Usable count for `n` below $31$ is $$U = 2^{32-n} - 2.$$',
        detail: 'For `172.16.151.35` with prefix $20$, the mask is `255.255.240.0`, base `172.16.144.0`, broadcast `172.16.159.255`, size $4096$ and usable $4094$. The third-octet increment is $256 - 240 = 16$.'
      },
      {
        term: 'Forwarding table lookup order',
        kind: 'insight',
        statement: 'Hardware tries prefixes from **longest to shortest** using a trie keyed on bits of `D`. A miss at depth `n` falls back to shorter ancestors until the **default** `0.0.0.0` entry, so $$\\text{lookup cost} \\propto \\text{prefix length}.$$',
        detail: 'Ternary content-addressable memory checks all rows in parallel and a priority encoder picks the longest hit. Software tries use binary tries with path compression to skip runs without branches.'
      }
    ],
    examples: [
      {
        title: 'Summarize four Class C blocks',
        problem: 'Merge 192.168.0.0, 192.168.1.0, 192.168.2.0 and 192.168.3.0 each with 24-bit prefixes into one advertisement.',
        steps: [
          { label: 'Step 1', text: 'All four share the first 22 bits; the third octet values 0, 1, 2, 3 are 00000000 through 00000011 in binary.\n```text\n0=00000000 1=00000001 2=00000010 3=00000011 common=000000--\n```' },
          { label: 'Step 2', text: 'Shorten the prefix from $24$ to $22$ and take the lowest base `192.168.0.0`. Size becomes $2^{10} = 1024$ addresses.' },
          { label: 'Step 3', text: 'Range runs `192.168.0.0` through `192.168.3.255` with mask `255.255.252.0`. One row replaces four with identical coverage.' }
        ],
        result: 'Single advertisement: 192.168.0.0 with 22-bit prefix covering 1024 addresses.'
      },
      {
        title: 'Longest-prefix lookup drill',
        problem: 'Table holds 10.0.0.0 prefix 8 via A, 10.24.0.0 prefix 16 via B, 10.24.8.0 prefix 21 via C. Where does 10.24.8.9 go?',
        steps: [
          { label: 'Step 1', text: 'Test each row against the destination bits.\n```text\nD=10.24.8.9 matches /8 yes, /16 yes, /21 yes\n```' },
          { label: 'Step 2', text: 'All three match, with lengths $8$, $16$ and $21$. Greatest length is $21$.' },
          { label: 'Step 3', text: 'Forward via interface C. If C were removed, B at length $16$ would win over A.' }
        ],
        result: 'Interface C wins as the longest match at 21 bits; fallback order is C then B then A.'
      }
    ],
    keyTakeaways: [
      'Prefix length sets block size as two raised to 32 minus length.',
      'Aligned siblings merge by shortening the prefix and doubling coverage.',
      'Forwarding always picks the matching row with the greatest prefix length.',
      'A zero-length default route guarantees a match when nothing longer hits.'
    ],
    quiz: [
      // PYQ-pattern: longest-prefix match over overlapping table entries
      {
        q: 'Table: 20.0.0.0 prefix 8 via X, 20.8.0.0 prefix 16 via Y. Destination 20.8.4.1 exits via:',
        options: ['X', 'both equally', 'Y', 'drop'],
        answer: 2,
        explanation: 'Step 1: Prefix 8 covers 20.0.0.0 through 20.255.255.255 including the target. Step 2: Prefix 16 covers 20.8.0.0 through 20.8.255.255 including the target. Step 3: Both match, lengths 8 and 16. Step 4: Longer 16 wins, so Y is correct.'
      },
      {
        q: 'Four 24-bit blocks 200.10.0.0 through 200.10.3.0 summarize to:',
        options: ['200.10.4.0 prefix 22', '200.10.0.0 prefix 23', '200.10.0.0 prefix 24', '200.10.0.0 prefix 22'],
        answer: 3,
        explanation: 'Step 1: Four blocks hold 4 times 256 which is 1024 addresses. Step 2: Size 1024 equals 2 raised to 10, so host bits 10. Step 3: Prefix equals 32 minus 10 which is 22. Step 4: Lowest aligned base is 200.10.0.0.'
      },
      {
        q: 'Block with 21-bit prefix holds how many addresses?',
        options: ['2048', '1024', '512', '256'],
        answer: 0,
        explanation: 'Step 1: Host bits equal 32 minus 21 which is 11. Step 2: Size equals 2 raised to 11. Step 3: 2 raised to 10 is 1024. Step 4: Twice that is 2048.'
      },
      {
        q: 'Why must a CIDR base be a multiple of its block size?',
        options: ['to allow broadcast', 'so masking the base leaves it unchanged and ranges do not straddle boundaries', 'to double throughput', 'to shorten headers'],
        answer: 1,
        explanation: 'Step 1: Base must equal base AND mask. Step 2: A misaligned base like 5 with prefix 22 masks down to 4. Step 3: The named range would then start elsewhere, straddling two aligned blocks. Step 4: Alignment guarantees one clean interval.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.4
  {
    sectionId: 'cn-ch5-s4',
    readingTime: 7,
    intro: 'Private blocks let every home and campus reuse the same addresses internally without coordination. A border device with one public address then multiplexes thousands of inside sessions by rewriting addresses and ports. This section shows how the mapping table makes that sharing work and where it breaks.',
    objectives: [
      'List the three private ranges and explain their reuse scope',
      'Trace outbound and inbound NAT with port-number mappings',
      'State NAT limits for servers, protocols and address exhaustion'
    ],
    concepts: [
      {
        term: 'Private address blocks',
        kind: 'definition',
        statement: 'Three blocks are **private**: `10.0.0.0` with 8-bit prefix, `172.16.0.0` through `172.31.255.255` with 12-bit prefix, and `192.168.0.0` with 16-bit prefix. Routers on the public Internet **drop** packets with `SRC` in these ranges.',
        detail: 'Sizes are $2^{24}$, $2^{20}$ and $2^{16}$ addresses respectively, about 16 million, 1 million and 65000 networks-worth of space. Link-local `169.254.0.0` with 16-bit prefix and loopback `127.0.0.0` with 8-bit prefix are similarly non-routed.'
      },
      {
        term: 'Basic NAT rewriting',
        kind: 'method',
        statement: 'Outbound, the device replaces inside **`SRC` plus source port** `SPORT` with its public **`PUB` plus fresh port** `PPORT` and records the binding. Inbound replies matching `PUB` and `PPORT` are rewritten back to `SRC` and `SPORT` via $$\\text{table}(PUB, PPORT) \\to (SRC, SPORT).$$',
        detail: 'Checksums over the pseudo-header for `TCP` and `UDP` are recomputed after each rewrite. The table holds protocol, timers and direction so overlapping inside ports never collide outside.'
      },
      {
        term: 'NAPT port multiplexing',
        kind: 'theorem',
        statement: 'One public address `PUB` multiplexes up to about **sixty thousand** simultaneous sessions distinguished by **`PPORT`** values. Capacity follows $$\\text{sessions} \\leq 65535 - 1024$$ reserving well-known ports below `1024`.',
        detail: 'Two laptops using inside port $5000$ toward different servers receive distinct outside ports such as $20001$ and $20002$ on the same `PUB`. Return traffic demultiplexes purely by destination port, needing no per-host public address.'
      },
      {
        term: 'Static NAT and port forwarding',
        kind: 'method',
        statement: 'A **static binding** pins one outside port `PPORT` to a fixed inside server `SRV` and port `SPORT`. Unsolicited arrivals to `PUB` and `PPORT` forward inward, enabling one reachable service per **port** with $$1 \\text{ port} \\to 1 \\text{ server}.$$',
        detail: 'Outside port $8080$ can map to `192.168.1.10` port $80$ while outside port $8081$ maps to `192.168.1.11` port $80$. Each public port serves only one inside host, so large server farms still need pools of public addresses.'
      },
      {
        term: 'NAT limits and traversal',
        kind: 'insight',
        statement: 'Protocols embedding addresses in payloads like `FTP` and `SIP` need **helpers** `ALG` that rewrite bodies, and inbound initiation fails without a **mapping**. End-to-end security and `IPsec` authentication headers **break** under rewriting since $$\\text{hash}(SRC) \\neq \\text{hash}(PUB).$$',
        detail: 'Carrier-grade NAT stacks customers behind shared pools, adding logging burden because one `PUB` plus timestamp must identify among thousands of users. Peer-to-peer protocols use hole punching and relays to rendezvous through these bindings.'
      }
    ],
    examples: [
      {
        title: 'Two hosts share one public address',
        problem: 'Inside hosts A 192.168.1.5:5000 and B 192.168.1.9:5000 both open sessions. Public address is 203.0.113.7. Show the table and a reply path.',
        steps: [
          { label: 'Step 1', text: 'Device allocates distinct outside ports for identical inside ports.\n```text\nA 192.168.1.5:5000  -> 203.0.113.7:20001 -> server S1:80\nB 192.168.1.9:5000  -> 203.0.113.7:20002 -> server S2:80\n```' },
          { label: 'Step 2', text: 'Reply to `203.0.113.7` port $20001$ looks up the table and rewrites destination to `192.168.1.5` port $5000$. Reply to port $20002$ goes to `192.168.1.9`.' },
          { label: 'Step 3', text: 'Inside hosts never see the public mapping; servers never see private addresses. Timers reclaim idle ports after tens of seconds for `UDP` and hours for `TCP`.' }
        ],
        result: 'Port numbers disambiguate sharing: one public IP serves both sessions via ports 20001 and 20002.'
      },
      {
        title: 'Expose one inside web server',
        problem: 'Inside server 192.168.1.10:80 must be reachable on public 203.0.113.7:8080. Configure the static rule and trace an arrival.',
        steps: [
          { label: 'Step 1', text: 'Install one permanent binding for the service port.\n```text\nstatic: 203.0.113.7:8080 -> 192.168.1.10:80 (TCP)\n```' },
          { label: 'Step 2', text: 'Arrival with destination `203.0.113.7` port $8080$ matches the static row before any dynamic lookup. Destination rewrites to `192.168.1.10` port $80$.' },
          { label: 'Step 3', text: 'Response reverses the mapping with source `203.0.113.7` port $8080$. A second inside server cannot reuse outside port $8080$ simultaneously.' }
        ],
        result: 'One outside port maps to exactly one inside server; further servers need further outside ports.'
      }
    ],
    keyTakeaways: [
      'Three private blocks are reusable inside but unroutable outside.',
      'NAPT shares one public address across sessions keyed by outside port.',
      'Static port forwarding exposes one service per outside port.',
      'Payload-embedded addresses and unsolicited inbound setup need helpers or relays.'
    ],
    quiz: [
      // PYQ-pattern: NAPT port-mapping and private-range identification
      {
        q: 'Which address is private and never routed on the public Internet?',
        options: ['203.0.113.5', '8.8.8.8', '198.51.100.2', '192.168.4.9'],
        answer: 3,
        explanation: 'Step 1: Private blocks are 10 with 8-bit prefix, 172.16 through 172.31, and 192.168. Step 2: 203.0.113.5 and 198.51.100.2 are documentation ranges but public. Step 3: 8.8.8.8 is a public resolver. Step 4: Only 192.168.4.9 falls in a private block.'
      },
      {
        q: 'Two inside hosts use identical source ports through one NAT. How are replies kept apart?',
        options: ['by distinct outside ports in the mapping table', 'by MAC address', 'by TTL values', 'they cannot share'],
        answer: 0,
        explanation: 'Step 1: Inside ports may collide, both using 5000. Step 2: NAT assigns distinct outside ports 20001 and 20002. Step 3: Replies arrive addressed to different outside ports. Step 4: The table maps each port back to its owner.'
      },
      {
        q: 'Roughly how many simultaneous NAPT sessions fit behind one public IPv4 address?',
        options: ['about 254', 'about 65000', 'about one million', 'unlimited'],
        answer: 1,
        explanation: 'Step 1: Ports span 0 through 65535 giving 65536 values. Step 2: Subtract reserved 0 through 1023 leaving about 64500. Step 3: Each session needs a distinct outside port per destination. Step 4: Capacity is therefore near 65000 sessions.'
      },
      {
        q: 'Why does NAT complicate running a public server inside?',
        options: ['private hosts lack CPUs', 'NAT speeds up routing', 'unsolicited inbound packets have no dynamic mapping and one outside port serves one server', 'DNS fails inside'],
        answer: 2,
        explanation: 'Step 1: Dynamic rows are created by outbound packets. Step 2: An outside client sends first, so no row exists. Step 3: Only a preinstalled static port forward can catch it. Step 4: Each outside port maps to one inside server, limiting scale.'
      }
    ]
  }
]

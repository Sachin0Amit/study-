import type { SectionContent } from '../library'

// ============================================================================
// Computer Networks — Chapter 6: Support Protocols ARP, DHCP and ICMP
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const cnCh06Content: SectionContent[] = [
  // ---------------------------------------------------------------- 6.1
  {
    sectionId: 'cn-ch6-s1',
    readingTime: 7,
    intro: 'IP addresses name the destination, but frames on a LAN travel to hardware addresses burned into each adapter. Address Resolution Protocol bridges that gap by asking the whole segment who owns an IP and caching the answer. This section traces the request and reply exchange and the hazards of stale cache entries.',
    objectives: [
      'Describe the ARP request and reply exchange on a broadcast segment',
      'Explain cache timers, gratuitous announcements and proxy behavior',
      'Diagnose resolution failures and spoofed-mapping symptoms'
    ],
    concepts: [
      {
        term: 'ARP request and reply',
        kind: 'definition',
        statement: 'A host needing the hardware address broadcasts an **ARP request** `WHO-HAS` carrying sender `IP` and `MAC` plus target `IP`. Only the owner answers with a unicast **ARP reply** `IS-AT` binding its `MAC` to the requested `IP`.',
        detail: 'Requests use destination `ff:ff:ff:ff:ff:ff` so every adapter processes them, while replies go point to point. The exchange resolves one mapping per round trip with no server involved.'
      },
      {
        term: 'ARP cache and timeout',
        kind: 'law',
        statement: 'Learned bindings live in the **`ARP cache`** `CACHE` with a lifetime of minutes governed by $$\\text{hit rate} = \\frac{\\text{cache hits}}{\\text{total lookups}}.$$ Entries refresh on use and **expire** `TIMEOUT` after idle periods of typically a few minutes.',
        detail: 'Caching avoids a broadcast per packet, raising hit rates above ninety percent on stable LANs. Stale entries after adapter replacement cause black-hole forwarding until the timer clears them or a gratuitous announcement overwrites them.'
      },
      {
        term: 'Gratuitous ARP',
        kind: 'method',
        statement: 'A host announcing its own `IP` as both sender and target sends a **gratuitous** `GARP` frame that updates every **`CACHE`** on the segment. Duplicate-address detection relies on hearing a competing **`IS-AT`** reply to the same `IP`.',
        detail: 'Failover clusters send `GARP` on takeover so switches relearn the port and peers refresh mappings within milliseconds. Absence of any reply confirms the address is unique on the segment.'
      },
      {
        term: 'Proxy ARP',
        kind: 'insight',
        statement: 'A router answering for addresses beyond the segment performs **proxy** `PARP` service, returning its own **`MAC`** for remote `IP` targets. Senders then forward off-segment traffic to the **proxy** unknowingly via $$\\text{next hop} = \\text{router MAC}.$$',
        detail: 'Proxy mode masks subnet boundaries and once allowed tiny hosts without masks to reach outward. Modern practice disables it because it hides misconfiguration and enlarges broadcast domains.'
      },
      {
        term: 'Spoofing hazard',
        kind: 'insight',
        statement: 'Because replies are trusted without authentication, a forged **`IS-AT`** `SPOOF` frame poisons the **`CACHE`** and redirects traffic through the attacker. Defenses bind `IP` to `MAC` with **snooping** `DAI` tables and static entries for critical servers.',
        detail: 'Poisoning succeeds since the cache accepts unsolicited replies and last-writer wins. Dynamic inspection filters replies against the DHCP lease database, dropping bindings that never received a legitimate lease.'
      }
    ],
    examples: [
      {
        title: 'First packet to a new neighbor',
        problem: 'Host H1 at 192.168.1.5 needs the MAC of H2 at 192.168.1.9. No cache entry exists. Trace the exchange.',
        steps: [
          { label: 'Step 1', text: 'H1 broadcasts the request to all adapters.\n```text\nWHO-HAS 192.168.1.9 ?  tell 192.168.1.5  (sender MAC aa:aa)\n-> ff:ff:ff:ff:ff:ff\n```' },
          { label: 'Step 2', text: 'Only H2 matches the target `IP` and replies unicast with its `MAC` value `bb:bb`. All other hosts drop the request after one comparison.' },
          { label: 'Step 3', text: 'H1 installs `192.168.1.9` to `bb:bb` in `CACHE` and sends the queued data frame. Later packets hit the cache with zero broadcasts.' }
        ],
        result: 'One broadcast plus one unicast resolves the mapping; every later packet reuses the cached binding.'
      },
      {
        title: 'Stale entry after adapter swap',
        problem: 'Server keeps IP 192.168.1.20 but its adapter changes from MAC m1 to m2. Clients hold m1 for ten more minutes. Restore connectivity.',
        steps: [
          { label: 'Step 1', text: 'Clients forward to `m1`, which no longer exists, so frames are dropped and upper timers retransmit.\n```text\nCACHE: 192.168.1.20 -> m1 (stale, 600 s remaining)\n```' },
          { label: 'Step 2', text: 'Server broadcasts gratuitous `GARP` with sender and target both `192.168.1.20` and sender `MAC` equal to `m2`. Switches relearn the port at once.' },
          { label: 'Step 3', text: 'Clients overwrite the entry to `m2` on receipt. Traffic resumes without waiting for `TIMEOUT` expiry.' }
        ],
        result: 'A single gratuitous announcement heals every cache; without it the outage lasts until each timer expires.'
      }
    ],
    keyTakeaways: [
      'Requests broadcast WHO-HAS; only the owner unicasts IS-AT back.',
      'Cache entries expire after minutes and refresh on use.',
      'Gratuitous announcements heal stale mappings and detect duplicates.',
      'Unsolicited replies are trusted, so spoofed bindings can divert traffic.'
    ],
    quiz: [
      // PYQ-pattern: ARP cache timeout and gratuitous-announcement behavior
      {
        q: 'Host A resolves 10.0.0.9 for the first time. What happens on the wire?',
        options: ['A broadcasts WHO-HAS and the owner unicasts IS-AT', 'A unicasts to the router only', 'A sends a DNS query', 'Nothing; IP needs no MAC'],
        answer: 0,
        explanation: 'Step 1: No cache entry exists, so resolution is required. Step 2: The request must reach the unknown owner, needing destination ff with all bits set. Step 3: Only the matching host answers, by unicast. Step 4: A caches the binding for later packets.'
      },
      {
        q: 'Why do ARP caches use timeouts of a few minutes?',
        options: ['to save disk space', 'to discard stale bindings after adapter or address changes', 'to encrypt traffic', 'to speed up DNS'],
        answer: 1,
        explanation: 'Step 1: Mappings change when adapters are replaced. Step 2: A permanent cache would point at dead hardware for hours. Step 3: A timer of a few minutes bounds the black hole to about 300 seconds. Step 4: Refresh on use keeps live entries while purging dead ones.'
      },
      {
        q: 'A server changes adapters but keeps its IP. Fastest healing comes from:',
        options: ['rebooting all clients', 'waiting for TTL expiry in DNS', 'a gratuitous announcement from the server', 'changing the IP'],
        answer: 2,
        explanation: 'Step 1: Client caches hold the old MAC m1. Step 2: A gratuitous frame carries the new MAC m2 with the same IP. Step 3: Every receiver overwrites its entry at once. Step 4: Traffic resumes in milliseconds instead of minutes.'
      },
      {
        q: 'An attacker sends forged IS-AT frames mapping the router IP to its own MAC. Effect?',
        options: ['faster routing', 'DHCP speeds up', 'no effect; replies need requests', 'poisoned caches divert traffic through the attacker'],
        answer: 3,
        explanation: 'Step 1: Caches accept replies without verification. Step 2: Last writer wins, so the forged MAC replaces the true one. Step 3: Victims address router-bound frames to the attacker. Step 4: Traffic flows through the attacker, enabling snooping.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.2
  {
    sectionId: 'cn-ch6-s2',
    readingTime: 8,
    intro: 'Manual address assignment cannot scale to campuses where thousands of devices join and leave daily. Dynamic Host Configuration Protocol leases every parameter a newcomer needs, from address through mask to router and name server. This section follows the four-message lease cycle and the relay that crosses subnet boundaries.',
    objectives: [
      'Sequence the discover, offer, request and acknowledgement handshake',
      'Explain lease timers including renew, rebind and release',
      'Describe relay agents and option fields for router and name servers'
    ],
    concepts: [
      {
        term: 'Four-message DORA cycle',
        kind: 'definition',
        statement: 'The client broadcasts **`DISCOVER`** `D`, servers answer with **`OFFER`** `O`, the client selects one with **`REQUEST`** `R`, and the winner confirms with **`ACK`** `A`. The mnemonic **`DORA`** `DORA` orders the four steps.',
        detail: 'Only `DISCOVER` and `REQUEST` are broadcasts from an address-less client using source `0.0.0.0` to destination `255.255.255.255`. Offers carry proposed `IP`, mask, lease seconds and server identifier so the client can choose among competitors.'
      },
      {
        term: 'Lease timers T1 and T2',
        kind: 'law',
        statement: 'A lease of `L` seconds renews unicast at **`T1`** equal to half of `L` and rebinds broadcast at **`T2`** equal to seven eighths of `L`, with $$T1 = 0.5 \\times L \\qquad T2 = 0.875 \\times L.$$ Expiry without renewal returns the address to the **pool** `POOL`.',
        detail: 'A $86400$-second lease renews at $43200$ seconds and rebinds at $75600$ seconds. Renewal keeps the same address with one packet while rebinding seeks any server after the original goes silent.'
      },
      {
        term: 'Relay agents',
        kind: 'method',
        statement: 'A **relay** `RELAY` on each subnet catches client broadcasts and unicasts them to the distant **`SERVER`** with its own address in the `GIADDR` field. Replies return unicast to the **relay**, which broadcasts them locally toward the **client** `C`.',
        detail: 'Without relays each subnet would need its own server scope. The `GIADDR` value also tells the server which pool to allocate from, since the relay address identifies the requesting subnet.'
      },
      {
        term: 'Options for network parameters',
        kind: 'notation',
        statement: 'Numbered **options** `OPT` deliver mask `1`, router `3`, name servers `6` and domain `15` alongside the leased **`IP`**. Renewals reuse the same **`OPTIONS`** unless the administrator renumbers the segment.',
        detail: 'Option $51$ carries the lease time itself in seconds. A missing router option strands the client on its own subnet, while a missing name-server option breaks name resolution but not numeric connectivity.'
      },
      {
        term: 'Release and decline',
        kind: 'insight',
        statement: 'A graceful shutdown sends **`RELEASE`** `REL` to free the address at once, while a conflict detected by probing sends **`DECLINE`** `DEC` to quarantine the address. The server marks declined addresses **unusable** until manual audit, with $$\\text{pool free} = \\text{total} - \\text{leased} - \\text{declined}.$$',
        detail: 'Laptops that simply close their lids hold addresses until expiry, wasting pool depth. Probing with a gratuitous announcement before accepting guards against a rogue server offering duplicates.'
      }
    ],
    examples: [
      {
        title: 'Laptop joins a new subnet',
        problem: 'A laptop with no address joins 192.168.5.0 with relay at 192.168.5.1 and server at 10.1.1.1. Trace the four messages.',
        steps: [
          { label: 'Step 1', text: 'Client broadcasts DISCOVER from 0.0.0.0.\n```text\nDISCOVER 0.0.0.0 -> 255.255.255.255  (xid 0x1a2b)\nRELAY 192.168.5.1 -> 10.1.1.1  giaddr=192.168.5.1\n```' },
          { label: 'Step 2', text: 'Server offers `192.168.5.40` with mask `255.255.255.0`, router `192.168.5.1`, lease $86400$ seconds. Relay returns the offer to the subnet broadcast.' },
          { label: 'Step 3', text: 'Client broadcasts REQUEST for `192.168.5.40` naming the chosen server. Winner replies ACK; losers withdraw their offers. Laptop configures the stack.' }
        ],
        result: 'Four messages yield address, mask, router and lease; relays make one central server serve many subnets.'
      },
      {
        title: 'Renewal timeline for a 24-hour lease',
        problem: 'Lease L is 86400 seconds. Compute T1 and T2 and state the message pattern if the original server stays silent.',
        steps: [
          { label: 'Step 1', text: 'Timers follow the halves rule directly.\n```text\nT1 = 0.5 * 86400 = 43200 s (12 h, unicast RENEW)\nT2 = 0.875 * 86400 = 75600 s (21 h, broadcast REBIND)\n```' },
          { label: 'Step 2', text: 'At $43200$ seconds the client unicasts renewal to the original server. Silence means retries with backoff until $75600$ seconds.' },
          { label: 'Step 3', text: 'At $75600$ seconds the client broadcasts rebind; any server may answer with ACK or NAK. No answer by $86400$ seconds forces shutdown of the address and a fresh DISCOVER.' }
        ],
        result: 'Renew at 12 hours, rebind at 21 hours, expire at 24 hours without any acknowledgement.'
      }
    ],
    keyTakeaways: [
      'DORA orders discover, offer, request and acknowledgement.',
      'Renewal at half lease and rebinding near seven eighths keep addresses stable.',
      'Relays forward broadcasts to central servers tagged with subnet identity.',
      'Options deliver mask, router and name servers with every lease.'
    ],
    quiz: [
      // PYQ-pattern: DORA order with renew and rebind timer numerics
      {
        q: 'Correct order of the lease handshake is:',
        options: ['REQUEST, DISCOVER, ACK, OFFER', 'DISCOVER, OFFER, REQUEST, ACK', 'OFFER, DISCOVER, ACK, REQUEST', 'DISCOVER, REQUEST, OFFER, ACK'],
        answer: 1,
        explanation: 'Step 1: Client must announce need first with DISCOVER. Step 2: Servers respond with OFFER. Step 3: Client selects one with REQUEST. Step 4: Winner confirms with ACK, so the second order is correct.'
      },
      {
        q: 'Lease is 7200 seconds. When does the client first try unicast renewal?',
        options: ['at 6300 s', 'at 7200 s', 'at 3600 s', 'at 1800 s'],
        answer: 2,
        explanation: 'Step 1: T1 equals half the lease. Step 2: Half of 7200 is 3600. Step 3: 6300 is T2 at seven eighths. Step 4: 1800 is one quarter, too early, so 3600 is correct.'
      },
      {
        q: 'Role of the relay agent is to:',
        options: ['assign DNS names', 'answer ARP', 'fragment packets', 'forward subnet broadcasts to a distant server tagged with subnet identity'],
        answer: 3,
        explanation: 'Step 1: Client broadcasts cannot cross routers. Step 2: Relay converts them to unicast toward the server. Step 3: GIADDR marks the source subnet for pool selection. Step 4: Replies reverse the path.'
      },
      {
        q: 'Client detects the offered address is already in use. It sends:',
        options: ['DECLINE to quarantine the address', 'RELEASE', 'ACK', 'OFFER'],
        answer: 0,
        explanation: 'Step 1: Probing reveals a duplicate owner. Step 2: Accepting would create a conflict. Step 3: DECLINE tells the server to mark it unusable. Step 4: RELEASE is for graceful voluntary return, so DECLINE is correct here.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.3
  {
    sectionId: 'cn-ch6-s3',
    readingTime: 8,
    intro: 'Control messages report what data packets cannot say themselves: whether a host is alive, where a path breaks, and which hop discarded a packet. Echo and time-exceeded tricks turn those reports into the familiar ping and traceroute tools. This section connects each message type to the diagnostic that uses it.',
    objectives: [
      'Explain echo request and reply as used by reachability checks',
      'Show how hop-limited probes map each router along a path',
      'Interpret unreachable and time-exceeded codes in failure analysis'
    ],
    concepts: [
      {
        term: 'Echo request and reply',
        kind: 'definition',
        statement: 'Type `8` echo **request** `EREQ` and type `0` echo **reply** `EREP` carry identifier `ID`, sequence `SEQ` and timestamp `TIME`. Round-trip delay follows $$RTT = T_{reply} - T_{send}$$ using the embedded **timestamp** `TIME`.',
        detail: 'Matching `ID` plus `SEQ` pairs replies with requests across concurrent sessions. Loss of all replies signals filtering, outage or a host that ignores echo, never conclusively a dead network alone.'
      },
      {
        term: 'Traceroute with hop limits',
        kind: 'method',
        statement: 'Probes with **`TTL`** starting at one expire one hop further each round, and each expiring router returns **time-exceeded** `TEXC` quoting its address. Plotting sources of **`TEXC`** messages reveals the **path** `PATH` hop by hop with $$\\text{hop } k \\leftrightarrow TTL = k.$$',
        detail: 'Three probes per hop smooth variance; stars mark filtered or rate-limited responses. The final destination returns port-unreachable instead of time-exceeded, terminating the trace.'
      },
      {
        term: 'Destination unreachable codes',
        kind: 'notation',
        statement: 'Type `3` messages refine failure with **codes** `CODE`: zero net, one host, two protocol, three **port**, four **fragmentation-needed** `FRAG`, thirteen administratively filtered. Each carries the offending **header** `HDR` plus eight bytes for matching.',
        detail: 'Port unreachable from a closed `UDP` port is the normal trace terminator. Fragmentation-needed with the next-hop `MTU` attached drives path-MTU learning of the next section.'
      },
      {
        term: 'Time exceeded semantics',
        kind: 'law',
        statement: 'Code `0` means **`TTL`** reached zero in transit and code `1` means **reassembly** `REASM` timed out with $$TTL_{new} = TTL_{old} - 1, \\quad \\text{drop if } 0.$$ Loops reveal themselves as **repeating** `TEXC` addresses with growing `RTT`.',
        detail: 'Every router decrements before forwarding, so a cycle returns the same sequence of time-exceeded sources indefinitely. Reassembly timeout at the destination similarly reports which fragments never arrived.'
      },
      {
        term: 'Source quench and redirects',
        kind: 'insight',
        statement: 'Historic **source quench** `QUENCH` asked senders to slow down but is now **deprecated** `DEP`, while **redirect** `REDIR` messages suggest a better first **hop** `HOP` on the same segment. Modern control relies on explicit **congestion** signals rather than quench.',
        detail: 'Redirects apply only within one subnet and only from the current first hop. Hosts that ignore redirects keep working but traverse an extra router hop permanently.'
      }
    ],
    examples: [
      {
        title: 'Read a four-hop trace',
        problem: 'Trace to 203.0.113.9 shows: hop1 2 ms, hop2 8 ms, hop3 stars, hop4 port-unreachable at target. Interpret each line.',
        steps: [
          { label: 'Step 1', text: 'Each line is one TTL value with three probes.\n```text\n1  192.168.1.1   2 ms   (TTL=1 expired here)\n2  10.5.0.1      8 ms   (TTL=2 expired here)\n3  * * *                 (filtered or rate-limited)\n4  203.0.113.9   port unreachable -> done\n```' },
          { label: 'Step 2', text: 'Hops one and two returned time-exceeded, giving addresses and delays. Jump from $2$ ms to $8$ ms locates the wide-area entry point.' },
          { label: 'Step 3', text: 'Stars at hop three mean no usable reply, commonly rate limiting rather than loss of data packets. Port-unreachable at hop four proves arrival at the target host.' }
        ],
        result: 'Trace maps two routers, one silent hop and the destination; stars alone never prove packet loss.'
      },
      {
        title: 'Distinguish host down from port closed',
        problem: 'UDP probe to 10.2.0.8 returns ICMP host-unreachable once, then later port-unreachable. Explain the change.',
        steps: [
          { label: 'Step 1', text: 'First phase shows network-layer failure.\n```text\nt=0 s: type 3 code 1 (host unreachable) from 10.2.0.1\nt=60 s: type 3 code 3 (port unreachable) from 10.2.0.8\n```' },
          { label: 'Step 2', text: 'Host-unreachable code $1$ came from the last router, meaning the target was absent or its link was down at $0$ seconds.' },
          { label: 'Step 3', text: 'Port-unreachable code $3$ came from the target itself at $60$ seconds, proving the host is now up but the probed port has no listener.' }
        ],
        result: 'Code 1 implicates the path or powered-down host; code 3 proves a live host with a closed port.'
      }
    ],
    keyTakeaways: [
      'Echo pairs measure round-trip delay and loss toward one host.',
      'Growing TTL values expire hop by hop to expose each router.',
      'Unreachable codes separate network, host, protocol and port failures.',
      'Stars and quenches need context; only endpoint codes prove arrival.'
    ],
    quiz: [
      // PYQ-pattern: traceroute TTL expiry and unreachable-code reading
      {
        q: 'Ping sends echo requests with rising sequence numbers and gets no replies. Best conclusion?',
        options: ['network is proven dead', 'DNS has failed', 'requests lost, replies filtered, or target silent; further tests needed', 'cable is cut'],
        answer: 2,
        explanation: 'Step 1: Echo needs both directions plus target cooperation. Step 2: Firewalls commonly drop echo while passing data. Step 3: Loss in either direction looks identical. Step 4: One tool cannot isolate the cause, so further tests are needed.'
      },
      {
        q: 'Traceroute probe with TTL 3 expires at router R3. R3 returns:',
        options: ['echo reply', 'redirect', 'port unreachable', 'time-exceeded quoting R3 address'],
        answer: 3,
        explanation: 'Step 1: TTL reaches zero at the third hop. Step 2: The expiring router drops the probe. Step 3: It returns time-exceeded code 0. Step 4: Source address R3 maps hop 3.'
      },
      {
        q: 'UDP traceroute ends when the target returns:',
        options: ['destination port unreachable from the target itself', 'echo reply', 'source quench', 'redirect'],
        answer: 0,
        explanation: 'Step 1: Probes aim at an unlikely high port. Step 2: Intermediate hops return time-exceeded. Step 3: The live target has no listener there. Step 4: Its port-unreachable code proves arrival, ending the trace.'
      },
      {
        q: 'Same trace repeats addresses R2, R3, R2, R3 with growing RTT. Diagnosis?',
        options: ['normal load balancing', 'a forwarding loop between R2 and R3', 'destination reached', 'DNS loop'],
        answer: 1,
        explanation: 'Step 1: TTL values 2, 3, 4, 5 expire alternately at two routers. Step 2: Repeating pair across rising TTL means a cycle. Step 3: RTT grows by 2 router visits per increment. Step 4: Pattern matches a loop, not parallel paths.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.4
  {
    sectionId: 'cn-ch6-s4',
    readingTime: 7,
    intro: 'Sending full-size packets while never fragmenting requires knowing the smallest MTU along the whole path in advance. Probing with the do-not-fragment bit set discovers that ceiling one rejection at a time. This section turns those rejections into a working path estimate and a reading of real diagnostics.',
    objectives: [
      'Run do-not-fragment probing to converge on the path ceiling',
      'Read traceroute output including stars, jumps and asymmetric delays',
      'Choose probe size policy for throughput versus loss trade-offs'
    ],
    concepts: [
      {
        term: 'Do-not-fragment probing',
        kind: 'method',
        statement: 'Send with **`DF`** set to one; any link with smaller **`MTU`** returns **fragmentation-needed** `NEED` carrying next-hop size `NEXT`. Update $$\\text{estimate} = NEXT - \\text{headers}$$ and repeat until a full-size **`ACK`** confirms the ceiling.',
        detail: 'Starting at $1500$ bytes against a $1280$-byte bottleneck returns $1280$ on the first rejection, then success at $1280$. Each round costs one round trip, so caching the estimate per destination amortizes the search.'
      },
      {
        term: 'Classic versus packetization-layer search',
        kind: 'definition',
        statement: 'Classic search trusts **`NEED`** messages `ICMP`, while packetization-layer search raises size on **`ACK`** success and lowers on **loss** `LOSS` without trusting the network, following $$\\text{up on ACK}, \\quad \\text{down on loss}.$$',
        detail: 'Filters that drop all control messages black-hole classic probing at the first rejection. Transport-layer probing survives filtering because it treats timeout as the signal and never needs the embedded `MTU` value.'
      },
      {
        term: 'Reading delay jumps',
        kind: 'insight',
        statement: 'A jump of tens of milliseconds between consecutive **`TEXC`** hops marks the **wide-area entry** `WAN`, since $$\\Delta RTT = RTT_{k+1} - RTT_{k}$$ reflects propagation across long links. Later small increments are **queuing** `Q` noise.',
        detail: 'A rise from $3$ ms to $42$ ms between hops two and three places the ocean or continent crossing there. Return-path asymmetry can inflate single samples, so three probes per hop are compared together.'
      },
      {
        term: 'Stars and name handling',
        kind: 'notation',
        statement: 'A **star** `*` means no usable reply within the **wait** `WAIT` interval, commonly rate limiting rather than loss. Names come from reverse **`PTR`** records with $$\\text{display} = PTR \\text{ or numeric IP}.$$',
        detail: 'One star among three replies is routine policing; three stars across many hops suggests systematic filtering. Numeric output mode skips reverse lookups and exposes the raw path in seconds instead of minutes.'
      },
      {
        term: 'Size policy after discovery',
        kind: 'law',
        statement: 'Throughput favors the **largest successful** `MSS` while loss favors margin below it, so stacks cache $$\\text{send size} = \\min(\\text{ceiling}, \\text{peer MSS}).$$ Ceilings **age out** after minutes to rediscover grown paths.',
        detail: 'A ceiling of $1280$ bytes with peer `MSS` $1460$ bytes sends $1280$-byte segments. Periodic re-probing upward detects replaced links with larger `MTU` values without manual tuning.'
      }
    ],
    examples: [
      {
        title: 'Converge on a 1280-byte ceiling',
        problem: 'Source tries 1500-byte probes with DF set. First rejection carries next-hop MTU 1280. Show convergence.',
        steps: [
          { label: 'Step 1', text: 'First probe is too large for the bottleneck.\n```text\nprobe 1500 DF=1 -> NEED frag, next MTU 1280\nestimate := 1280 - 20 - 20 = 1240 payload\n```' },
          { label: 'Step 2', text: 'Second probe at $1280$ bytes total passes every link and earns an acknowledgement. Payload $1240$ bytes plus $40$ bytes of headers fits exactly.' },
          { label: 'Step 3', text: 'Source caches ceiling $1280$ bytes for this destination. Later sessions start there instead of repeating the failed $1500$-byte attempt.' }
        ],
        result: 'One rejection plus one success locks the ceiling at 1280 bytes total per packet.'
      },
      {
        title: 'Diagnose a silent bottleneck',
        problem: 'Probes above 1400 bytes vanish with no NEED message, while 1400 passes. Identify the fault and the workaround.',
        steps: [
          { label: 'Step 1', text: 'Pattern points to filtered control messages.\n```text\n1400 DF=1 -> ACK ok\n1450 DF=1 -> timeout, no NEED ever\n```' },
          { label: 'Step 2', text: 'A filter drops fragmentation-needed reports, so classic probing stalls: the sender cannot learn the true $1280$ or $1400$ ceiling from the network.' },
          { label: 'Step 3', text: 'Switch to packetization-layer search that treats loss as down-signal, or clamp the advertised `MSS` to $1360$ bytes at the border so senders never exceed the bottleneck.' }
        ],
        result: 'Missing NEED messages indicate a control-message black hole; loss-driven probing or MSS clamping restores flow.'
      }
    ],
    keyTakeaways: [
      'DF probing learns the minimum MTU from successive NEED replies.',
      'Loss-driven probing survives networks that filter control messages.',
      'Delay jumps locate long-haul links; isolated stars mean policing.',
      'Senders transmit at the smaller of path ceiling and peer MSS.'
    ],
    quiz: [
      // PYQ-pattern: DF probing steps with next-hop MTU numerics
      {
        q: '1500-byte DF probe gets NEED with next MTU 1280. Next action?',
        options: ['send 1500 again', 'stop sending', 'send 9000', 'retry near 1280 total and cache success'],
        answer: 3,
        explanation: 'Step 1: 1500 exceeds the bottleneck by 220 bytes. Step 2: Next-hop value 1280 is trustworthy path data. Step 3: Retrying at 1280 tests the new ceiling directly. Step 4: Success there locks 1280 as the cached size.'
      },
      {
        q: 'No NEED ever returns but large DF probes vanish. Likely cause?',
        options: ['control-message black hole filtering NEED reports', 'destination is fast', 'cable is short', 'DNS is slow'],
        answer: 0,
        explanation: 'Step 1: Large probes consistently time out. Step 2: Small probes with same path succeed. Step 3: Missing NEED removes the learning signal. Step 4: Filtering of control messages explains the pattern exactly.'
      },
      {
        q: 'Trace jumps from 4 ms at hop 2 to 68 ms at hop 3, then small steps. Meaning?',
        options: ['hop 3 is congested forever', 'long-haul link entered at hop 3', 'packets are lost', 'TTL is broken'],
        answer: 1,
        explanation: 'Step 1: Delta equals 68 minus 4 which is 64 ms. Step 2: Queuing jitters by a few ms, not 64. Step 3: Propagation over distance adds tens of ms at once. Step 4: The jump marks the wide-area entry at hop 3.'
      },
      {
        q: 'Path ceiling 1280 with peer MSS 1460. Send size?',
        options: ['1460', '1500', '1280', '9000'],
        answer: 2,
        explanation: 'Step 1: Peer allows up to 1460 bytes. Step 2: Path allows up to 1280 bytes. Step 3: Minimum of 1460 and 1280 is 1280. Step 4: Larger would fragment or drop, so 1280 is correct.'
      }
    ]
  }
]

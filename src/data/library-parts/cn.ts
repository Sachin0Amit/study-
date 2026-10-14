// ============================================================================
// Computer Networks (GATE CS / ISRO) — chapter/section metadata (bookId
// 'cn-complete'). Layering through application protocols, GATE-weighted.
// Lab mapping: topologies/routing → graph-playground, CRC → logic-gates,
// ALOHA → probability-lab, addressing → counting-lab, TCP sawtooth → curve-lab,
// DNS hierarchy → tree-traversal. No code console.
// ============================================================================
import type { ChapterMeta, SectionMeta } from '../library'

export const CN_CHAPTERS: ChapterMeta[] = [
  { id: 'cn-ch1', bookId: 'cn-complete', number: 1, title: 'Layering: OSI, TCP/IP & Switching', shortTitle: 'Layering & Switching', description: 'Service versus protocol, OSI and TCP/IP stacks, packet/circuit/virtual-circuit switching, encapsulation.', icon: 'layers', pages: 'Unit 1', interactiveKey: 'graph-playground' },
  { id: 'cn-ch2', bookId: 'cn-complete', number: 2, title: 'Data Link: Framing & Error Detection', shortTitle: 'Framing & Errors', description: 'Framing methods, parity, checksum, CRC polynomial division, Hamming distance intuition.', icon: 'filter', pages: 'Unit 2', interactiveKey: 'logic-gates' },
  { id: 'cn-ch3', bookId: 'cn-complete', number: 3, title: 'Medium Access Control & Ethernet', shortTitle: 'MAC & Ethernet', description: 'ALOHA throughputs, CSMA/CD/CA, exponential backoff, Ethernet bridging and spanning tree.', icon: 'share', pages: 'Unit 3', interactiveKey: 'probability-lab' },
  { id: 'cn-ch4', bookId: 'cn-complete', number: 4, title: 'Network Layer: Routing Algorithms', shortTitle: 'Routing', description: 'Shortest-path routing, flooding, distance-vector with count-to-infinity, link-state Dijkstra.', icon: 'route', pages: 'Unit 4', interactiveKey: 'graph-playground' },
  { id: 'cn-ch5', bookId: 'cn-complete', number: 5, title: 'IPv4 Addressing, Subnetting, CIDR & NAT', shortTitle: 'IP Addressing', description: 'Classful versus CIDR, subnet masks, supernetting, fragmentation, NAT and private ranges.', icon: 'hash', pages: 'Unit 5', interactiveKey: 'counting-lab' },
  { id: 'cn-ch6', bookId: 'cn-complete', number: 6, title: 'Support Protocols: ARP, DHCP, ICMP', shortTitle: 'ARP/DHCP/ICMP', description: 'Address resolution, dynamic configuration, control messages: ping, traceroute and PMTU.', icon: 'plug', pages: 'Unit 6', interactiveKey: 'graph-playground' },
  { id: 'cn-ch7', bookId: 'cn-complete', number: 7, title: 'Transport Layer: UDP, TCP & Congestion Control', shortTitle: 'TCP & Congestion', description: 'UDP versus TCP headers, handshake and teardown, flow control, slow start, AIMD, sockets.', icon: 'activity', pages: 'Unit 7', interactiveKey: 'curve-lab' },
  { id: 'cn-ch8', bookId: 'cn-complete', number: 8, title: 'Application Layer: DNS, HTTP, SMTP, FTP & Email', shortTitle: 'Application Protocols', description: 'Recursive versus iterative DNS, HTTP request/response cycle, cookies, mail transfer and retrieval, FTP modes.', icon: 'globe', pages: 'Unit 8', interactiveKey: 'tree-traversal' },
]

export const CN_SECTIONS: SectionMeta[] = [
  { id: 'cn-ch1-s1', chapterId: 'cn-ch1', number: 1.1, title: 'Services, Protocols & Layering', description: 'Interfaces versus protocols, encapsulation as data descends the stack.' },
  { id: 'cn-ch1-s2', chapterId: 'cn-ch1', number: 1.2, title: 'OSI vs TCP/IP Stacks', description: 'Seven versus four layers, where real protocols actually live.' },
  { id: 'cn-ch1-s3', chapterId: 'cn-ch1', number: 1.3, title: 'Packet, Circuit & Virtual-Circuit Switching', description: 'Setup costs, statistical multiplexing, datagram versus virtual-circuit trade-offs.' },
  { id: 'cn-ch1-s4', chapterId: 'cn-ch1', number: 1.4, title: 'Delay Arithmetic: Transmission vs Propagation', description: 'Packetization delay, store-and-forward totals, bandwidth-delay product.' },
  { id: 'cn-ch2-s1', chapterId: 'cn-ch2', number: 2.1, title: 'Framing Methods', description: 'Character and bit stuffing, byte counts, physical-layer coding violations.' },
  { id: 'cn-ch2-s2', chapterId: 'cn-ch2', number: 2.2, title: 'Parity & Checksums', description: 'Single/double-bit detection limits, Internet checksum ones-complement math.' },
  { id: 'cn-ch2-s3', chapterId: 'cn-ch2', number: 2.3, title: 'CRC Polynomial Division', description: 'Generator selection, remainder computation, burst-error guarantees.' },
  { id: 'cn-ch2-s4', chapterId: 'cn-ch2', number: 2.4, title: 'Hamming Distance & Correction', description: 'd+1 detection versus d-error correction, Hamming code construction.' },
  { id: 'cn-ch3-s1', chapterId: 'cn-ch3', number: 3.1, title: 'Pure & Slotted ALOHA', description: 'Vulnerable periods, S = Ge^-2G versus Ge^-G maxima at one-half and 1/e.' },
  { id: 'cn-ch3-s2', chapterId: 'cn-ch3', number: 3.2, title: 'CSMA/CD & CSMA/CA', description: 'Carrier sensing, collision detection windows, RTS/CTS for hidden terminals.' },
  { id: 'cn-ch3-s3', chapterId: 'cn-ch3', number: 3.3, title: 'Backoff, Efficiency & LAN Timing', description: 'Binary exponential backoff, efficiency formulas, minimum frame-size reasoning.' },
  { id: 'cn-ch3-s4', chapterId: 'cn-ch3', number: 3.4, title: 'Bridging, Learning & Spanning Tree', description: 'Self-learning bridges, loop elimination, forwarding versus flooding.' },
  { id: 'cn-ch4-s1', chapterId: 'cn-ch4', number: 4.1, title: 'Shortest-Path & Flooding', description: 'Dijkstra on topology graphs, controlled flooding with hop counts.' },
  { id: 'cn-ch4-s2', chapterId: 'cn-ch4', number: 4.2, title: 'Distance Vector & Count-to-Infinity', description: 'Bellman-Ford exchanges, split horizon and poison reverse mitigations.' },
  { id: 'cn-ch4-s3', chapterId: 'cn-ch4', number: 4.3, title: 'Link-State Routing', description: 'Flooding LSPs, per-router Dijkstra, hierarchical areas.' },
  { id: 'cn-ch4-s4', chapterId: 'cn-ch4', number: 4.4, title: 'RIP, OSPF & BGP Roles', description: 'Interior versus exterior gateway protocols and policy versus performance.' },
  { id: 'cn-ch5-s1', chapterId: 'cn-ch5', number: 5.1, title: 'IPv4 Headers & Fragmentation', description: 'Identification/offset/flags arithmetic, MTU-driven fragment counts.' },
  { id: 'cn-ch5-s2', chapterId: 'cn-ch5', number: 5.2, title: 'Classful Addressing & Subnet Masks', description: 'Network/host splits, custom masks, counting usable hosts.' },
  { id: 'cn-ch5-s3', chapterId: 'cn-ch5', number: 5.3, title: 'CIDR, Supernetting & Longest-Prefix Match', description: 'Slash notation, aggregation, forwarding-table lookups.' },
  { id: 'cn-ch5-s4', chapterId: 'cn-ch5', number: 5.4, title: 'NAT & Private Addressing', description: 'Masquerading, port mapping, private ranges and their limits.' },
  { id: 'cn-ch6-s1', chapterId: 'cn-ch6', number: 6.1, title: 'ARP: Resolution & Caching', description: 'Request/reply flow, gratuitous ARP, cache timeout hazards.' },
  { id: 'cn-ch6-s2', chapterId: 'cn-ch6', number: 6.2, title: 'DHCP: Dynamic Configuration', description: 'Discover/offer/request/ack lease cycle, relay agents.' },
  { id: 'cn-ch6-s3', chapterId: 'cn-ch6', number: 6.3, title: 'ICMP: Ping, Traceroute & Errors', description: 'Echo, time-exceeded TTL tricks, destination-unreachable semantics.' },
  { id: 'cn-ch6-s4', chapterId: 'cn-ch6', number: 6.4, title: 'PMTU Discovery & Diagnostics', description: 'Donot-fragment probing, reading traceroute output.' },
  { id: 'cn-ch7-s1', chapterId: 'cn-ch7', number: 7.1, title: 'UDP vs TCP Headers', description: 'Connectionless datagrams versus sequence/acknowledgment machinery.' },
  { id: 'cn-ch7-s2', chapterId: 'cn-ch7', number: 7.2, title: 'Handshake, Teardown & Reliability', description: 'Three-way open, FIN/ACK close, cumulative ACKs and retransmission timers.' },
  { id: 'cn-ch7-s3', chapterId: 'cn-ch7', number: 7.3, title: 'Flow Control & Windowing', description: 'Stop-and-wait, sliding windows, bandwidth-delay sizing.' },
  { id: 'cn-ch7-s4', chapterId: 'cn-ch7', number: 7.4, title: 'Congestion Control & Sockets', description: 'Slow start, AIMD sawtooth, fast retransmit/recovery, socket call flow.' },
  { id: 'cn-ch8-s1', chapterId: 'cn-ch8', number: 8.1, title: 'DNS: Recursive vs Iterative', description: 'Root/TLD/authoritative hierarchy, caching TTLs, record types.' },
  { id: 'cn-ch8-s2', chapterId: 'cn-ch8', number: 8.2, title: 'HTTP Request-Response Cycle', description: 'Methods, status classes, persistent connections, cookies and caching headers.' },
  { id: 'cn-ch8-s3', chapterId: 'cn-ch8', number: 8.3, title: 'SMTP, POP3/IMAP & Email Flow', description: 'Push versus pull mail, MIME attachments, spam defences preview.' },
  { id: 'cn-ch8-s4', chapterId: 'cn-ch8', number: 8.4, title: 'FTP Modes & File Transfer', description: 'Control versus data connections, active/passive modes.' },
]

import type { SectionContent } from "../library"

// ============================================================================
// TOP-UP CONTENT — Network Security (cyber-network-defense) and
// Power Systems I (ee-e-ps1), sections 2–8.
//
// Thirteen authored sections: firewall engineering, IDS/IPS, VPN and
// segmentation, wireless security, NAC/zero trust, honeypots and traffic
// analysis, then power-station economics, line parameters, line modeling,
// corona/insulators/sag, EHV-HVDC-FACTS, generation economics and
// transmission topologies. Numbers in the worked examples are computed
// from the stated data; math is LaTeX rendered via the $...$ pipeline.
// ============================================================================

export const cybernetPowerTopupContent: SectionContent[] = [
  // ================================================================ 1 ====
  {
    sectionId: "cyber-network-defense-s1",
    readingTime: 9,
    prerequisites: ["Basic TCP/IP addressing, ports and the IP header"],
    intro: "The firewall is the oldest security appliance still doing daily work, and it earns its keep through two unglamorous disciplines: knowing how deep into the packet each generation looks, and getting the rule order right. A firewall with a technically perfect rule list but a badly ordered one will still break production traffic and still let attackers through. This section walks the generations from the stateless packet filter to the next-generation firewall, then drills the rule-design craft — first-match semantics, shadowing, default deny and hit-count tuning — with a worked ruleset repair.",
    objectives: [
      "Distinguish packet-filter, stateful, application-layer and next-generation firewalls by the decision each can make",
      "Explain why state inspection removes the need for per-service return-traffic rules",
      "Apply first-match rule evaluation to trace a packet through a ruleset",
      "Diagnose and fix shadowed rules and missing default-deny",
      "Reorder a ruleset for performance using hit counts without changing its security meaning",
    ],
    concepts: [
      {
        term: "Packet-filter firewall (first generation)",
        kind: "definition",
        statement: "A **packet filter** makes an allow or deny decision for each packet in isolation, using only layer-3 and layer-4 fields: source and destination IP, protocol, ports and flags. It holds no memory of previous packets.",
        detail: "Implemented as router ACLs or iptables chains, packet filters are extremely fast because the decision table is small and the per-packet work is a linear scan of a few fields. The price of that speed is blindness: a packet filter cannot tell whether an inbound ACK belongs to a connection that was ever opened, so allowing the outbound half of a service means hand-crafting loose inbound rules with port windows — the classic hole that early attackers walked straight through.",
      },
      {
        term: "Stateful inspection (second/third generation)",
        kind: "definition",
        statement: "A **stateful firewall** records every permitted connection in a state table — the 5-tuple, sequence tracking and timers — and automatically admits only the packets that belong to an entry in that table.",
        detail: "The outbound SYN of a staff member's browsing creates an entry; the returning packets from the web server are matched against the entry (correct addresses, ports and a plausible sequence window) and admitted without any explicit rule. This closes the 'return traffic' hole of the packet filter and enables policy to be written in terms of connections rather than packets. Statefulness costs memory and CPU: tables have strict limits, which is exactly why SYN floods aim to fill them, and why aged entries must time out aggressively.",
      },
      {
        term: "Application-layer and proxy firewalls",
        kind: "definition",
        statement: "An **application-layer firewall** terminates the connection itself — acting as a proxy — and validates the payload of the protocol it is proxying, not just the envelope that carries it.",
        detail: "Because the proxy speaks the application protocol, it can reject a malformed HTTP request, strip dangerous SQL fragments from a parameter, or confirm that what is flowing on port 443 is actually TLS. The cost is latency and protocol coverage: a classic proxy needs a module per protocol, which is why deployments put proxies only in front of the few services that matter, such as outbound HTTP and inbound email.",
      },
      {
        term: "Next-generation firewall (NGFW)",
        kind: "definition",
        statement: "A **next-generation firewall** merges stateful inspection with deep packet inspection, an application catalogue, user identity from directory integration and an inline IPS engine, so policy can be written as 'allow Finance to use the corporate SaaS app, on any port, for these users' rather than 'allow these IPs on 443'.",
        detail: "The defining capability is application awareness independent of port: an NGFW classifies a flow as a particular application even when it is tunnelled over 443 or hops to a non-standard port, which defeats the port-hopping of consumer messengers and C2 channels. User-identity mapping lets the same rule follow a person across DHCP address changes. The trade-offs are real: DPI costs throughput, encrypted traffic must be decrypted (with all the privacy and performance questions that raises), and the application catalogue needs continuous updates like an AV product.",
      },
      {
        term: "First-match rule evaluation",
        kind: "method",
        statement: "Firewall rulesets are evaluated **top to bottom, first match wins** — the packet is compared with each rule in order, and the decision of the first matching rule applies; evaluation stops there. Unmatched packets fall to the implicit default.",
        detail: "This ordering rule has a direct design consequence: **specific rules must precede broad rules** that would otherwise shadow them, and the final rule should be an explicit default deny (or the platform's implicit deny) so that anything unanticipated is dropped. In shadow analysis you walk each rule and ask which earlier rules would match the same traffic first; any rule whose entire match set is covered by an earlier rule is dead configuration — invisible to traffic but still dangerous, because it misleads the next engineer who reads the policy.",
      },
      {
        term: "Rule-set hygiene and hit-count tuning",
        kind: "insight",
        statement: "A ruleset is a living artifact: rules are added under pressure, rarely removed, and evaluation is a linear scan — so **average comparisons per packet grow with the position of the rules that actually match**, and the fix is to place the highest-volume safe rules near the top while preserving semantics.",
        detail: "Most platforms export per-rule hit counters. Periodically (a) delete rules with zero hits after a full business cycle, (b) merge duplicated rules, (c) promote rules that carry the bulk of the traffic, and (d) re-run the shadow analysis, because any reorder can silently change behaviour where rules overlap. Rule creep is not cosmetic — a multi-thousand-rule policy slows every packet and guarantees that nobody can reason about what is actually allowed.",
      },
    ],
    examples: [
      {
        title: "Repairing and tuning a three-zone edge ruleset",
        problem: "An edge firewall separates the internet, a DMZ (198.51.100.0/24, web server .10, DNS .53) and staff (10.20.0.0/16). Administrators reach the web server over SSH only from the VPN range 192.0.2.0/24. The deployed ruleset is: (1) ALLOW TCP any to 198.51.100.10:443, (2) DENY TCP any to 198.51.100.10:22, (3) ALLOW TCP 192.0.2.0/24 to 198.51.100.10:22, (4) ALLOW UDP any to 198.51.100.53:53, (5) ALLOW TCP 10.20.0.0/16 to any ports 80 and 443, (6) DENY any any. Administrators report that SSH to the web server fails, and packet counters show rule 5 answering the majority of traffic.",
        steps: [
          {
            label: "Step 1: Trace the failing packet",
            text: "Follow a packet from 192.0.2.7 to 198.51.100.10:22. Rule 1 fails (port mismatch), rule 2 matches — a broad DENY on port 22 from any source — so the packet is dropped at rule 2. Rule 3, the specific admin allow, is never reached. The specific rule is shadowed by the broad rule above it.",
          },
          {
            label: "Step 2: Reorder specific-before-broad",
            text: "Swap rules 2 and 3 so the admin allow precedes the general deny. Now 192.0.2.7 matches rule 2 (admin allow) and is permitted; an attacker from any other source falls through to rule 3 and is denied. Semantics are now what the policy intended.",
          },
          {
            label: "Step 3: Verify no new path opened",
            text: "Re-audit: rule 2 now allows only source 192.0.2.0/24 to port 22 of one host. It cannot shadow the DNS or web rules (different ports/protocol), and the final DENY any any still catches everything unmatched. The reorder is behaviour-preserving for every other flow class.",
          },
          {
            label: "Step 4: Tune with hit counts",
            text: "Counters show 55% of packets match rule 5 (staff web), 25% rule 1, 10% rule 4, 7% the default deny, 3% admin SSH. In the original order the average packet is compared against 0.25(1) + 0.03(3) + 0.10(4) + 0.55(5) + 0.07(6) = 3.9 rules. Moving staff web directly under the DMZ rules (verified non-overlapping: it targets ports 80/443 outbound, not the DMZ ingress rules) gives 0.55(1) + 0.25(2) + 0.10(3) + 0.03(4) + 0.07(5) = 1.8 comparisons — a 53% cut in per-packet work at identical security meaning.",
          },
        ],
        result: "Admin SSH works, the web server stays closed to other sources, the default deny still terminates the ruleset, and average per-packet comparisons drop from about 3.9 to 1.8 by hit-count ordering — the same decisions made roughly twice as fast.",
      },
    ],
    keyTakeaways: [
      "Each firewall generation buys decision depth at the cost of speed: stateless sees the envelope, stateful sees the connection, application-layer and NGFW see the conversation.",
      "State tables, not hand-written inbound rules, are what make return traffic safe to admit.",
      "Rulesets are first-match, top-down: specific rules before broad ones, explicit default deny last.",
      "A rule that is fully covered by an earlier rule is shadowed — dead to traffic but live as a source of confusion.",
      "Hit counters are the tuning instrument: promote high-volume rules, delete zero-hit rules, and re-verify semantics after every reorder.",
    ],
    quiz: [
      {
        q: "With the repaired ruleset — (1) ALLOW TCP any to web:443, (2) ALLOW TCP 192.0.2.0/24 to web:22, (3) DENY TCP any to web:22, (4) ALLOW UDP any to DNS:53, (5) DENY any any — a host at 198.18.7.9 sends TCP to 198.51.100.10:22. Which rule decides its fate?",
        options: [
          "Rule 1, because HTTPS is evaluated first and implicitly permits port reuse",
          "Rule 2, because the source is external and matches the admin allow",
          "Rule 3, which denies it since the source is outside 192.0.2.0/24",
          "Rule 5, because port 22 is not covered by any earlier rule",
        ],
        answer: 2,
        explanation: "The packet misses rule 1 (port 443 only) and rule 2 (source outside 192.0.2.0/24), then matches rule 3, the broad deny — and evaluation stops there, so rule 5 is never consulted for it. Option 1 invents an 'implicit permit' that first-match evaluation does not have, and option 4 misses that rule 3 already covers TCP to port 22 from any source.",
      },
      {
        q: "A stateful firewall allows staff HTTP outbound with one rule and has no inbound rule for web traffic, yet browsing works. Why do the server's return packets get through?",
        options: [
          "The firewall permits any packet with the ACK flag set, by convention",
          "The outbound SYN created a state-table entry, and return packets matching that 5-tuple and sequence window are admitted by the state engine",
          "HTTP servers initiate traffic over UDP, which the default policy allows",
          "The NAT table forwards anything addressed to the internal range",
        ],
        answer: 1,
        explanation: "Stateful inspection admits packets that belong to a tracked connection — matching 5-tuple with plausible sequence/timing — without a written rule. An ACK-flag-based rule (option 1) is the stateless-era hack: forged ACKs would pass it. Options 3 and 4 are simply wrong about how HTTP and NAT behave here.",
      },
      {
        q: "An edge ACL has grown to 900 rules and firewall CPU is saturating at peak. Hit counters show 60% of packets match one high-volume rule sitting at position 700. What is the most direct engineering fix?",
        options: [
          "Move that rule near the top of the ruleset after verifying it does not shadow any security rule",
          "Chain a second firewall in series so each evaluates half the rules",
          "Disable rule logging, which will remove most of the CPU cost",
          "Upgrade immediately to an NGFW, which evaluates all rules in parallel",
        ],
        answer: 0,
        explanation: "Evaluation is a linear scan, so packets that match a rule at position 700 pay ~700 comparisons; promoting it (after a shadow check) cuts average work massively with no semantic change. A second chained firewall (option 2) adds latency and does not reduce per-packet comparisons; logging (option 3) is rarely the dominant cost at rule-evaluation saturation; and an NGFW (option 4) does not make rule evaluation free — deep inspection costs more, not less.",
      },
      {
        q: "Security staff discover a staff member running a video-call client that tunnels its traffic over TCP 443 with rapid port changes. Which firewall technology can distinguish and control this traffic?",
        options: [
          "A stateless packet filter, by matching the port range",
          "A stateful firewall, by tracking the connection tuple",
          "An NGFW using application identification independent of port",
          "Any firewall, since tunnelling over 443 requires a non-standard TCP flag",
        ],
        answer: 2,
        explanation: "Only payload-level classification (App-ID style DPI) can tell a video client from genuine HTTPS when both ride port 443. A packet filter (option 1) and a stateful firewall (option 2) see only addresses, ports and connection state — to them 443 is 443. Option 4 is fiction; the tunnel is ordinary TCP.",
      },
      {
        q: "Why is an explicit or implicit default-deny final rule preferred over default-allow in an enterprise perimeter?",
        options: [
          "It makes the ruleset evaluate faster because most packets miss every rule",
          "New or forgotten services are dropped unless deliberately permitted, so the policy stays the source of truth",
          "Default deny prevents IP fragmentation, which default allow causes",
          "State tables cannot be built for traffic that matches no rule",
        ],
        answer: 1,
        explanation: "Default deny implements the principle that reachability must be engineered, not inherited: anything not explicitly permitted fails closed. Speed (option 1) is not the reason — a drop is a decision like any other. Options 3 and 4 confuse policy semantics with packet mechanics that have nothing to do with the default rule.",
      },
      {
        q: "During a change review you find: rule 12 = DENY TCP any to 10.20.0.0/16 any port; rule 47 = ALLOW TCP 192.0.2.0/24 to 10.20.5.9:3389. What is the state of rule 47?",
        options: [
          "Active, because rule 47 is more specific and specificity wins regardless of order",
          "Active, because the firewall merges rules by destination before evaluating",
          "Shadowed — no packet can ever reach it, since rule 12 denies all TCP into that range first",
          "Shadowed only for traffic from outside the VPN range",
        ],
        answer: 2,
        explanation: "First-match evaluation means the earlier broad deny consumes every packet that could have matched rule 47 — the rule is dead configuration. Option 1 describes how policy *should* be ordered, not how it evaluates; there is no merge pass (option 2). Option 4 is wrong because rule 12's source is 'any', so it shadows the allow for every source, including the VPN range.",
      },
    ],
  },

  // ================================================================ 2 ====
  {
    sectionId: "cyber-network-defense-s2",
    readingTime: 8,
    prerequisites: ["cyber-network-defense-s1", "Basic TCP protocol behaviour"],
    intro: "Detection is where network security meets statistics and human attention spans. A signature-based sensor is a librarian — it recognizes exactly what it has a card for, and misses the book that was never catalogued. An anomaly-based sensor is a customs officer with a baseline — it notices deviation beautifully, but the first day the company ships a new product, everything looks like smuggling. This section covers both detection philosophies, the anatomy of a Snort-style rule, the false-positive arithmetic that decides whether alerts get read, and the placement decision that separates an IDS from an IPS.",
    objectives: [
      "Contrast signature-based and anomaly-based detection on coverage, false alarms and tuning effort",
      "Parse a Snort-style rule into action, header and option components",
      "Quantify alert quality with precision and base-rate reasoning",
      "Choose between inline prevention and passive detection for a given network point",
      "Explain how sensor placement determines what a detector can and cannot see",
    ],
    concepts: [
      {
        term: "IDS versus IPS",
        kind: "definition",
        statement: "An **intrusion detection system** (IDS) observes a copy of the traffic and raises alerts; an **intrusion prevention system** (IPS) sits inline in the forwarding path and can drop, reset or rate-limit malicious flows itself.",
        detail: "The IDS copy is made with a switch SPAN port or a network TAP; a passive sensor cannot break the network if it fails, but it also cannot stop an attack — response depends on people or a downstream firewall acting on the alert. The IPS is inline: it adds latency, is a single point of failure (requiring bypass hardware), and a false positive becomes an outage, because dropping a 'suspicious' flow that was actually the payment gateway is indistinguishable from an attack on availability. Mature deployments put inline IPS only where the drop decision is worth that risk.",
      },
      {
        term: "Signature-based detection",
        kind: "definition",
        statement: "**Signature detection** matches traffic against patterns known to mark specific exploits or tools — byte sequences, protocol field combinations, or behavioural fingerprints — and reports a hit with the rule identity attached.",
        detail: "Strengths: near-zero false positives on a well-written signature, instant triage context (the rule name says exactly what fired), and no training period. Weaknesses: complete blindness to anything novel — zero-days and rewritten exploits — and a library that must be updated continuously. Signatures also age into false positives when legitimate software starts embedding the pattern, which is why rules carry revisions.",
      },
      {
        term: "Anomaly-based detection",
        kind: "definition",
        statement: "**Anomaly detection** builds a statistical or ML model of normal behaviour — traffic volumes, flow features, protocol mix, host interactions — and alerts when observation deviates beyond a tuned threshold.",
        detail: "The appeal is coverage: a worm propagating by a route no signature covers still changes the shape of traffic (new destinations, uniform intervals, port scanning patterns), so behaviour betrays it. The cost is the baseline's fragility — software rollouts, new business partners, seasonal traffic and daylight-saving shifts all look like attacks. Threshold placement is the entire engineering problem: lower the threshold and you catch more real attacks and vastly more noise; raise it and the sensor goes quiet precisely when subtlety arrives.",
      },
      {
        term: "Anatomy of a Snort-style rule",
        kind: "notation",
        statement: "A Snort rule reads `alert tcp $EXTERNAL_NET any -> $HOME_NET 445 (msg: 'SMB exploit probe'; content: '|FF|SMB|25 00|'; sid: 9000001; rev: 1;)` — an **action**, a **protocol header** (source address and port, direction, destination address and port), and an **option body** of match criteria and metadata. (Canonical Snort files quote option values; single quotes are used here for typographic safety.)",
        detail: "The header decides which conversations are inspected; the options decide what within them counts as evil. `content` matches literal bytes, `pcre` regular expressions, with modifiers like `nocase`, `offset` and `depth` bounding the search. `sid` identifies the rule uniquely and `rev` versions it — a rule edit bumps the revision so logs remain interpretable. Reading direction matters: `->` is left-to-right (external source to internal destination here), and getting it backwards is a classic authoring bug that produces a sensor watching the wrong half of the conversation.",
      },
      {
        term: "False-positive economics and alert fatigue",
        kind: "insight",
        statement: "An alert queue is a **scarce resource shared by true and false positives**: what matters is not the detection rate alone but the precision — the fraction of alerts that are real — because analysts who drown in noise learn to ignore the queue, and an ignored sensor is a stopped sensor.",
        detail: "Precision is dominated by the base rate of attacks in the traffic. If malicious flows are one in ten thousand, even a 95%-accurate detector with a 5% false-positive rate buries its 95 true alerts inside roughly 50,000 false ones — about 0.2% of the queue is real. The defences are engineering, not heroics: tune signatures to the actual environment (home-internal ranges, real server names), suppress known-benign matches with thresholds and exceptions, and reserve low-threshold anomaly alerts for high-value zones where the prior probability of attack justifies the noise.",
      },
      {
        term: "Sensor placement",
        kind: "method",
        statement: "**Placement is detection destiny**: a sensor sees only the traffic that crosses its observation point, so the placement map — perimeter, DMZ, core, east-west spine, per-segment taps — is really a map of blind spots.",
        detail: "A perimeter sensor sees inbound attacks but nothing about lateral movement; a SPAN on the core switch sees east-west traffic but oversubscription on monitor ports can silently drop packets under load (a TAP is the reliable alternative). Inline IPS belongs at the choke points where dropping is acceptable: behind the internet edge, in front of server farms — rarely on the storage or VoIP VLANs where latency and availability dominate. Each additional vantage point multiplies storage cost, so record NetFlow everywhere and full packets only where an analyst will actually look.",
      },
    ],
    examples: [
      {
        title: "Tuning a signature and pricing its false positives",
        problem: "A SOC runs an IDS at the perimeter. A signature for an SMB exploit fires 1,400 times in a day; triage confirms 42 real attempts. Separately, the team evaluates an anomaly detector on 1,000,000 daily connections, of which roughly 100 involve a genuine attacker; in evaluation it detects 95% of attacks with a 5% false-positive rate on benign traffic. The team must decide what to tune and whether the anomaly detector is deployable as-is.",
        steps: [
          {
            label: "Step 1: Price the signature's precision",
            text: "Precision = true positives / alerts = 42 / 1400 = 0.03, about 3%. One alert in thirty-four is real — workable but noisy, and the 1,358 false hits deserve a look: most are likely a legitimate file-transfer tool embedding the matched byte pattern. Refining the rule (adding depth, a second content match, or a threshold of N hits per host) trades a little detection recall for a large precision gain.",
          },
          {
            label: "Step 2: Project the anomaly detector's queue",
            text: "Of 100 attacks, 95 are detected. Of 999,900 benign connections, 5% raise alerts: about 49,995. The daily alert queue is 95 + 49,995 = 50,090 alerts, of which 95 are real — precision = 95/50,090 = 0.0019, roughly 0.2%.",
          },
          {
            label: "Step 3: Interpret the base-rate lesson",
            text: "The detector is 95% accurate and produces a queue in which only one alert in 527 is real. Deploying it as-is guarantees alert fatigue. The threshold must rise (accepting missed low-signal attacks) or the scope must narrow to where attack prevalence is high — for example a honeynet or the DMZ segment where the prior probability of an attacker is orders of magnitude above the perimeter average.",
          },
          {
            label: "Step 4: Decide the tuning action",
            text: "Keep the refined signature as the primary perimeter control; run the anomaly detector at a high threshold for drift detection (new hosts, new ports, volume spikes) rather than per-connection alerting, and route its low-threshold mode only to the high-prior zones where its maths actually pays.",
          },
        ],
        result: "Signature precision improves from 3% toward the 30-60% range after refinement; the anomaly detector is not deployed per-connection — at a 0.2% precision its 50,000 daily alerts would train the SOC to ignore it. Scope and threshold, not more model, are the fix.",
      },
    ],
    keyTakeaways: [
      "Signatures give precise, named detections with zero coverage of the novel; anomalies cover the novel with a false-positive bill that must be engineered down.",
      "IDS watches a copy and can only alert; IPS is inline and can block — at the price of latency, availability risk and false-positive outages.",
      "Precision, not detection rate, decides whether alerts survive contact with a human queue.",
      "Base rates dominate: rare attacks make even excellent classifiers look useless without scoping and thresholding.",
      "A sensor can only detect what its observation point sees — placement is the first tuning decision.",
    ],
    quiz: [
      {
        q: "In the rule `alert tcp $EXTERNAL_NET any -> $HOME_NET 445 (...)`, what does the arrow establish?",
        options: [
          "The direction of inspection: source is any external host/port, destination is any home-network host on port 445",
          "That the sensor will only inspect the server-to-client half of the session",
          "A required TCP flag combination in the packet header",
          "The order in which the rule options are evaluated",
        ],
        answer: 0,
        explanation: "The arrow is the header direction — source on the left, destination on the right — defining which half of the conversation the options inspect. Option 2 reverses it, option 3 confuses the arrow with flag tests (those are separate options), and option 4 confuses header syntax with option evaluation order.",
      },
      {
        q: "An IDS signature fires 1,400 times in a day; after triage 42 alerts are genuine attack attempts. What is the precision of this alert stream, and what does it imply?",
        options: [
          "3% — roughly one alert in 34 is real, so refinement and suppression are warranted",
          "42% — the rest are duplicates of the same attempt",
          "97% — 1,358 alerts were successfully closed, showing the rule works",
          "It cannot be computed without the number of missed attacks",
        ],
        answer: 0,
        explanation: "Precision = true positives / total alerts = 42/1400 = 3%. Option 4 confuses precision (a property of the alert queue) with recall (which needs the missed-attack count). Option 3 inverts the meaning — closed-as-benign alerts are false positives, the failure mode, not a success metric. The practical conclusion of option 1 is the correct tuning instinct.",
      },
      {
        q: "A network has 1,000,000 benign connections and 100 attack connections per day. An anomaly detector catches 95 of the attacks with a 5% false-positive rate on benign traffic. Roughly what fraction of its alert queue is real?",
        options: [
          "About 95%, because the detector is 95% accurate",
          "About 50%, because true and false alerts balance out",
          "About 0.2% — 95 real alerts inside roughly 50,000 false ones",
          "About 5% — the false-positive rate equals the queue's real fraction",
        ],
        answer: 2,
        explanation: "False positives = 5% of 999,900 = ~49,995; precision = 95/(95+49,995) = 0.19%. The trap is option 1: '95% accurate' is per-item accuracy, but the queue is dominated by the enormous benign base rate. This is exactly why anomaly systems must be scoped to high-prior zones or run at higher thresholds.",
      },
      {
        q: "A hospital network must protect a legacy patient-imaging VLAN whose protocol breaks badly under latency, and a public web DMZ. Where does inline IPS make sense?",
        options: [
          "Inline on both, for uniform protection",
          "Inline in front of the DMZ; passive monitoring (or none) on the imaging VLAN",
          "Inline only on the imaging VLAN, since it holds the most valuable data",
          "Nowhere inline — IPS should always be passive with automated firewall pushes",
        ],
        answer: 1,
        explanation: "Inline prevention pays where blocking justifies latency and availability risk: the DMZ faces hostile traffic continuously and its services tolerate inspection. The imaging VLAN is latency-sensitive, and an IPS false positive there drops clinical traffic — passive detection with rapid human/firewall response is the safer trade. Options 1 and 3 ignore the availability asymmetry; option 4 over-generalizes — many environments accept inline IPS exactly where the maths favours it.",
      },
      {
        q: "The day after a company-wide OS rollout, the anomaly IDS alert rate triples with no security incident. What is the correct engineering response?",
        options: [
          "Lower the alert threshold so the new alerts stand out from the baseline",
          "Treat it as a compromise, since traffic changed abruptly — isolate affected hosts",
          "Recognize baseline drift, verify a sample of alerts are benign, retrain/rebaseline and add change-window context so rollouts are expected",
          "Disable the anomaly sensor permanently, since it clearly misbehaves",
        ],
        answer: 2,
        explanation: "Planned change is the canonical non-malicious cause of deviation; the correct move is to confirm benignancy on a sample, fold the new behaviour into the baseline, and feed the sensor a change calendar so future rollouts do not read as attacks. Option 1 amplifies the problem, option 3 conflates drift with intrusion without evidence, and option 4 abandons the only detector class that covers novel behaviour.",
      },
    ],
  },

  // ================================================================ 3 ====
  {
    sectionId: "cyber-network-defense-s3",
    readingTime: 9,
    intro: "Tunnels and segmentation are the two halves of containment. Tunnelling extends a private network across an untrusted carrier — but choosing the wrong IPsec mode or the wrong header protection silently breaks the tunnel at the first NAT box or leaks metadata you thought was protected. Segmentation shrinks the blast radius: VLANs partition the flatLAN, and a DMZ quarantines the systems that must face the internet. This section covers IPsec's AH and ESP, tunnel versus transport mode, and the design craft of VLAN and DMZ layouts with concrete addressing.",
    objectives: [
      "Explain how encapsulation builds a private channel over an untrusted network",
      "Compare IPsec AH and ESP on confidentiality, integrity and NAT traversal",
      "Select tunnel or transport mode for site-to-site versus host-to-host scenarios",
      "Design a VLAN addressing plan and compute subnets and host counts",
      "Place services correctly across DMZ and internal segments and justify the rule set between them",
    ],
    concepts: [
      {
        term: "Tunnelling and encapsulation",
        kind: "definition",
        statement: "A **tunnel** wraps entire private packets inside new headers addressed to the tunnel endpoint: the original packet becomes the payload of a carrier packet that crosses the untrusted network, and is unwrapped at the far end.",
        detail: "Encapsulation is what lets two offices exchange RFC-1918 addresses (10.x, 192.168.x) across the public internet, or a remote worker's laptop behave as if jacked into the office switch. The carrier sees only the endpoints; the interior routing, addresses and applications are invisible to it. Every tunnelling design answers three questions: what is protected (payload only, or headers too), against what (confidentiality, integrity, replay), and who pays the overhead — answered concretely by the IPsec modes and headers below.",
      },
      {
        term: "IPsec AH (Authentication Header)",
        kind: "definition",
        statement: "**AH** provides integrity and authentication for the payload *and the immutable fields of the outer IP header*, but **no confidentiality** — it proves who sent the packet and that nothing en route altered it, while leaving the contents readable.",
        detail: "AH's coverage of IP-header fields is its honour and its undoing: any device that legitimately rewrites the header — a NAT changing the source address, a router decrementing mutable fields — invalidates the integrity check. AH therefore cannot traverse NAT in practice. It survives in textbooks and in designs where the tunnel endpoints are address-translation-free and law requires inspectable (unencrypted) traffic with tamper-proofing.",
      },
      {
        term: "IPsec ESP (Encapsulating Security Payload)",
        kind: "definition",
        statement: "**ESP** provides confidentiality (encryption) plus optional integrity and authentication for the payload, but does not authenticate the outer IP header — which is exactly why ESP, with NAT traversal, is the header that actually works across the modern internet.",
        detail: "An ESP packet carries a Security Parameters Index that selects the negotiated security association, a sequence number for anti-replay, the ciphertext (with IV and padding), and an integrity check value over the ESP fields. NAT changes only the IP header, which ESP leaves out of its integrity scope, so the packet still validates at the far end; NAT-T (encapsulating ESP in UDP on port 4500) additionally lets NAT devices handle the flow and fixes port-dependent checksums. Rule of thumb: site-to-site and remote-access VPNs today are ESP tunnel mode with NAT-T.",
      },
      {
        term: "Tunnel mode versus transport mode",
        kind: "method",
        statement: "**Tunnel mode** protects an entire original IP packet by encapsulating it under a *new* IP header between gateways; **transport mode** protects only the payload of the host's own packet, preserving the original IP header — for direct host-to-host conversations.",
        detail: "A branch router sending LAN packets for 10.10.0.0/16 to HQ uses tunnel mode: the inner packet keeps its 10.x addresses and the outer header names the two VPN gateways. A laptop running an IPsec-protected connection to a single database server can use transport mode: only the TCP payload is encrypted, saving the overhead of a second header. Gateway-to-gateway is essentially always tunnel mode; transport mode appears host-to-host inside controlled networks.",
      },
      {
        term: "VLANs and 802.1Q",
        kind: "definition",
        statement: "A **VLAN** partitions one physical switch fabric into isolated broadcast domains, tagged per frame by a 4-byte **802.1Q** header carrying a 12-bit VLAN ID (1–4094) that trunks forward between switches.",
        detail: "Isolation is the security property: frames cannot leave their VLAN except through a router or firewall that enforces policy — the point where east-west controls attach. The 4-byte tag also matters arithmetically: a 1500-byte IP frame becomes 1504 bytes on a trunk, and QinQ double-tagging 1508 — MTU planning on the trunk (and any tunnelling overlay, which adds its own headers) prevents the silent fragmentation or drop. VLAN hopping (double-tagging abuse against native VLAN 1) is the classic counter-attack: set the native VLAN to something unused or tag it explicitly, and disable it end to end.",
      },
      {
        term: "DMZ design",
        kind: "method",
        statement: "A **DMZ** is a buffer network holding the systems that must accept internet traffic; they are reachable from outside but permitted only tightly-scoped paths inward, so compromising a public server does not hand over the interior.",
        detail: "The canonical layout is three zones: internet, DMZ, internal. Web and relay servers live in the DMZ; databases never do — the web tier reaches them through a firewall rule allowing only the specific port (say 5432) from specific DMZ hosts. Inbound rules: any to DMZ:443; DMZ web to DB:5432 only; internal to DMZ for management over a bastion. Every additional path from DMZ inward multiplies the value of a DMZ compromise, so the rule count should be countable on one hand — and the database VLAN must never have a default route to the internet.",
      },
    ],
    examples: [
      {
        title: "Two-branch VPN plus a segmented DMZ — modes, headers and subnets",
        problem: "A company connects two sites whose routers hold public addresses 203.0.113.1 and 198.51.100.1; staff subnets are 10.10.0.0/16 and 10.20.0.0/16. Both sites sit behind different ISP NAT regimes in part of the path. Separately, the DMZ subnet 192.0.2.0/24 must be divided into four equal server VLANs, and a 1500-byte frame must ride the trunk.",
        steps: [
          {
            label: "Step 1: Choose the IPsec header and mode",
            text: "Site-to-site traffic between gateways needs tunnel mode — inner packets keep their 10.x addresses while the outer header names the two routers. AH would fail where NAT rewrites addresses, so choose ESP. Because parts of the path apply NAT, enable NAT-T: ESP rides inside UDP/4500, and ESP's integrity scope (which excludes the IP header) keeps the packets valid across translation.",
          },
          {
            label: "Step 2: Size the overhead",
            text: "ESP tunnel mode adds approximately: new IP header 20 bytes, ESP header 8 bytes (SPI + sequence), IV about 8-16 bytes for AES-CBC, padding to the cipher block, ESP trailer, and an integrity check value of about 12 bytes — order of 50-60 bytes per packet. A 1400-byte inner packet emerges near 1460 bytes on the wire; this is why VPN interfaces are configured with a reduced MTU (e.g. 1400) to avoid fragmentation and black-holed large frames.",
          },
          {
            label: "Step 3: Split the DMZ into four VLANs",
            text: "192.0.2.0/24 has 256 addresses. Four equal parts means borrowing two host bits: /26 each, giving 64 addresses and 62 usable hosts per VLAN — 192.0.2.0/26 (web), .64/26 (application), .128/26 (relay/mail), .192/26 (management, with access only from the bastion).",
          },
          {
            label: "Step 4: Check the trunk math",
            text: "An untagged 1500-byte IP frame crossing an 802.1Q trunk carries the 4-byte tag, becoming 1504 bytes. If the trunk MTU stays at 1500 the frame is fragmented or dropped; raise the trunk MTU to at least 1504 (and more if QinQ or the VPN overlay is stacked on top).",
          },
        ],
        result: "ESP tunnel mode with NAT-T on UDP/4500 links the sites, with the VPN MTU set to about 1400 to absorb the ~50-60 byte ESP overhead; the DMZ becomes four /26 VLANs of 62 usable hosts each; trunks carry the +4 byte tag with MTU adjusted so 1500-byte frames pass unfragmented.",
      },
    ],
    keyTakeaways: [
      "Tunnelling encapsulates private packets under carrier headers; what gets protected depends on the mode and header you choose.",
      "AH authenticates IP-header fields and therefore dies at NAT; ESP encrypts the payload, leaves the header alone, and with NAT-T is the practical choice.",
      "Tunnel mode is gateway-to-gateway and preserves inner addressing; transport mode is host-to-host and saves a header.",
      "VLANs are broadcast-domain walls with a 4-byte tag price — plan trunk MTUs and kill the native-VLAN hopping path.",
      "A DMZ's value is the narrowness of its inward rules: web in front, databases behind, one port per rule.",
    ],
    quiz: [
      {
        q: "A site-to-site IPsec VPN must traverse an ISP that performs NAT on the path. Which design works?",
        options: [
          "AH in tunnel mode, since tunnel mode hides the addresses NAT would change",
          "ESP in tunnel mode with NAT-T (UDP/4500)",
          "AH in transport mode, since it has the smallest overhead",
          "ESP with the anti-replay window disabled, which removes NAT conflicts",
        ],
        answer: 1,
        explanation: "NAT rewrites IP addresses; AH's integrity check covers those header fields and so fails after translation — tunnel mode does not help because the *outer* header is still translated (options 1 and 3 are dead on arrival). ESP excludes the header from its integrity scope and, wrapped in UDP/4500 by NAT-T, passes cleanly. Option 4 is unrelated mechanics: the anti-replay window has nothing to do with address translation.",
      },
      {
        q: "Two office routers (public IPs 203.0.113.1 and 198.51.100.1) link LANs 10.10.0.0/16 and 10.20.0.0/16. A packet from 10.10.4.7 to 10.20.9.3 crosses the VPN. Which IPsec configuration and header layout fits?",
        options: [
          "Transport mode — the payload is encrypted and the original 10.x header is preserved on the wire",
          "Tunnel mode — the inner packet keeps its 10.x source/destination; the outer header names the two routers",
          "Tunnel mode — the outer header carries 10.10.4.7 and 10.20.9.3 so the internet can route it",
          "Transport mode with AH, since routers cannot encrypt whole packets",
        ],
        answer: 1,
        explanation: "Gateway-to-gateway VPNs use tunnel mode: the original 10.x packet is encapsulated under a new header addressed router-to-router (which is the only publicly routable part). Option 1 describes host-to-host transport mode and would leave unroutable private addresses exposed on the internet; option 3 is backwards about which header carries what; option 4 invents a router limitation.",
      },
      {
        q: "You must split 192.0.2.0/24 into four equal VLANs. What are the resulting prefix and usable host count per VLAN?",
        options: [
          "/25 with 126 usable hosts",
          "/26 with 62 usable hosts",
          "/27 with 30 usable hosts",
          "/24 with 254 usable hosts, since VLANs do not require subnetting",
        ],
        answer: 1,
        explanation: "Four equal parts borrow two bits: /24 → /26, i.e. 192.0.2.0/26, .64/26, .128/26, .192/26, each with 2^6 − 2 = 62 usable hosts. /25 (option 1) gives only two halves; /27 (option 3) gives eight parts of 30; and option 4 ignores that a VLAN needs an IP subnet to route — a VLAN without a matching subnet plan cannot carry its isolation into layer 3.",
      },
      {
        q: "In a three-zone design, where should the public-facing web server and its PostgreSQL database reside?",
        options: [
          "Both in the DMZ, so they can communicate without crossing the firewall",
          "Web server in the DMZ; database on an internal segment, reachable from the DMZ only on port 5432 from the web hosts",
          "Both internal, with a firewall port-forward reaching the web tier",
          "Database in the DMZ for public backup access; web server internal",
        ],
        answer: 1,
        explanation: "The DMZ exists to absorb compromise of internet-facing systems: the web server stays there, but the database sits inside where inbound internet reachability ends, and the DMZ→internal rule is a single port from specific hosts. Options 1 and 4 hand the crown jewels to whoever owns the web server; option 3 blurs the zones and multiplies port-forwarding rules, losing the containment the DMZ buys.",
      },
      {
        q: "A 1500-byte IP frame must cross an 802.1Q trunk between two switches. What happens if the trunk MTU is left at 1500?",
        options: [
          "Nothing — the VLAN tag is carried out-of-band and does not affect frame size",
          "The frame becomes 1504 bytes on the trunk, so it must be fragmented or dropped unless the trunk MTU is raised",
          "The switch silently strips the tag to keep the frame at 1500 bytes",
          "802.1Q reduces the payload area, so the IP stack must already have sent 1496-byte packets",
        ],
        answer: 1,
        explanation: "The 4-byte tag is inserted into the frame on trunk links: 1500-byte payload → 1504-byte frame, which exceeds a 1500 MTU and leads to fragmentation or drops. Option 2's fix (raise trunk MTU, e.g. to 1504 or 1524 for headroom) is standard. Options 1 and 3 contradict how tagging works, and option 4 describes the *consequence* of a strict policy, not the automatic behaviour.",
      },
    ],
  },

  // ================================================================ 4 ====
  {
    sectionId: "cyber-network-defense-s4",
    readingTime: 10,
    intro: "Wireless is the only link layer where the attacker needs no cable, no port and no badge — just proximity and a $30 radio. The history of Wi-Fi security is a laboratory of cryptographic failure: WEP's 24-bit IV space collapsed to statistical attacks in minutes; WPA2 fixed encryption but kept a handshake that leaked password-verifiable data; WPA3 rebuilds the exchange as a password-authenticated key agreement so that guessing costs an online attempt, not an offline laptop. Around the cryptography sit the operational attacks — evil twins and deauthentication — that no cipher alone stops.",
    objectives: [
      "Explain why WEP's IV reuse and RC4 key schedule made it recoverable from captured traffic",
      "Walk the WPA2 four-way handshake and explain what each message proves",
      "Describe WPA3's SAE exchange and why it resists offline dictionary attacks",
      "Recognize evil-twin and deauthentication attacks and their countermeasures",
      "Choose appropriate protections for enterprise versus home wireless",
    ],
    concepts: [
      {
        term: "WEP and its structural failure",
        kind: "definition",
        statement: "**WEP** encrypts each frame with RC4 keyed by a static shared secret concatenated with a **24-bit IV** sent in the clear — and the IV space is so small that reuse is inevitable, which (with RC4's key-schedule biases) allows keystream recovery and forgery from passive capture alone.",
        detail: "There are only 2^24 = 16,777,216 IV values. At a busy access point pushing ~600 frames per second, the space exhausts in about 7.8 hours — but the birthday effect is far worse: after roughly 1.177·√N ≈ 4,800 frames (8 seconds at that rate) the probability of an IV *collision* already passes 50%, and each collision reuses keystream on known plaintext structures. FMS-style attacks turn these biases into key recovery with a few hundred thousand to a few million frames. The lesson is architectural, not just arithmetic: per-packet keying material must not be drawn from a tiny repeating counter, and the integrity function (CRC-32) must be a real MAC.",
      },
      {
        term: "The WPA2 four-way handshake",
        kind: "method",
        statement: "The **four-way handshake** lets an AP and station mutually prove knowledge of a shared PMK and derive a fresh session PTK, without ever transmitting the PMK, the PTK, or any value from which the password can be verified offline.",
        detail: "Message 1: AP sends a random ANonce. Message 2: station replies with its random SNonce plus a MIC computed over the frame using the PTK it derived as PTK = PRF(PMK, nonces, MACs) — a correct MIC proves it holds the PMK without revealing it. Message 3: AP verifies, sends the group key (GTK) protected by the PTK, again MIC-protected — proving the AP also holds the PMK. Message 4: station acknowledges and installs keys. Nonces from both sides guarantee freshness even on a shared medium; the exchange also defeats replay because keys are bound to this one run. (The 2017 KRACK weakness was a protocol-implementation flaw in retransmitted message 3 that reinstalled an already-used key — nonce reuse — not a break of the design's secrecy goal.)",
      },
      {
        term: "WPA3 and SAE",
        kind: "definition",
        statement: "**WPA3** replaces the PSK exchange with **SAE** (Simultaneous Authentication of Equals, the Dragonfly technique): both sides commit to values derived from the password and a per-session random element, so an eavesdropper's capture cannot be tested against password guesses offline — every guess would require a new live interaction with a real endpoint.",
        detail: "Because the exchange commits to a Diffie-Hellman-style element derived from the password plus randomness, observing the exchange reveals nothing verifiable about the password: guesses can only be checked by talking to the AP again, and rate-limiting plus lockout makes that expensive. SAE additionally yields forward secrecy — capturing a handshake today does not decrypt tomorrow's sessions even if the password later leaks. WPA3 also mandates Protected Management Frames, closing the unauthenticated-deauthentication avenue, and replaces WPA2's legacy group ciphers with GCMP-256/AES.",
      },
      {
        term: "Evil twin attacks",
        kind: "definition",
        statement: "An **evil twin** is a rogue access point broadcasting the same SSID (often with a stronger signal or free-service captive portal) so that clients associate with the attacker's network, delivering all their traffic to the attacker.",
        detail: "Because the SSID string is unauthenticated in the basic association flow, the twin is indistinguishable at the name level; the client's only structural defences are validating the network's identity cryptographically — 802.1X/EAP with server-certificate validation in enterprise deployments, or per-network credentials that fail on the twin — plus user training to distrust credential portals that appear where none existed. Cafes, airports and hotel lobbies are the classic venues: any time the portal 're-asks' for a password the user already gave, the twin hypothesis should come first.",
      },
      {
        term: "Deauthentication and management-frame attacks",
        kind: "definition",
        statement: "**Deauthentication frames** are 802.1x management messages that order a client to disconnect — and in WPA2 they are unauthenticated, so anyone can spoof them at any time: a denial-of-service lever, and the standard tool for forcing victims to re-associate (and re-handshake) where the attacker can capture the exchange.",
        detail: "The capture-plus-deauth pairing is what makes offline password cracking practical against WPA2-PSK: the handshake is the only password-bearing material an attacker can record, so kicking the client to generate one on demand is step one of every attack script. 802.11w (Protected Management Frames, mandatory in WPA3) signs deauth/disassociation frames, removing both the DoS lever and the forced re-association trick; without it, deauth is unfixable at the protocol layer — detection (repeated disconnects of one station, or broadcast deauths) is the monitoring answer.",
      },
      {
        term: "Enterprise wireless (802.1X/EAP)",
        kind: "method",
        statement: "**Enterprise mode** runs 802.1X over Wi-Fi: each user (or device) authenticates individually to a RADIUS-backed authentication server using an EAP method — ideally certificate-based EAP-TLS — instead of sharing one PSK among all holders.",
        detail: "The differences that matter operationally: credentials are per-identity, so a departing employee is one RADIUS change rather than a re-keying party for every device; the server presents a certificate the client should be *configured to validate* (the checkbox that evil twins live in fear of); and no shared secret exists whose capture enables bulk offline guessing. Home/small-office deployments that cannot run RADIUS should treat WPA3-SAE as the floor, use long non-dictionary passphrases (length beats obscurity — each extra character multiplies the search space), and disable WPS, whose PIN modes have structural weaknesses.",
      },
    ],
    examples: [
      {
        title: "Pricetag of a 24-bit IV — WEP exhaustion and handshake capture",
        problem: "A legacy warehouse AP still runs WEP at an effective 600 frames per second. (a) How long until the 24-bit IV space is exhausted? (b) After roughly how many frames does an IV collision become more-likely-than-not (birthday bound ≈ 1.177·√N)? (c) The attacker cannot wait at all — they send three spoofed deauth frames to force a station to re-run the WPA2 handshake in a neighboring WPA2 network and capture it. What have they actually obtained, and what does it cost them?",
        steps: [
          {
            label: "Step 1: Exhaustion time",
            text: "IV space N = 2^24 = 16,777,216. At 600 frames/s: 16,777,216 / 600 ≈ 27,962 s ≈ 7.8 hours. Every IV after that is a guaranteed reuse of previously seen keystream.",
          },
          {
            label: "Step 2: Birthday collision threshold",
            text: "50% collision probability arrives near 1.177·√16,777,216 ≈ 1.177 × 4096 ≈ 4,823 frames — about 8 seconds at 600 fps. The attacker does not wait hours; within the first minute of capture, reused IVs are already accumulating.",
          },
          {
            label: "Step 3: What the forced handshake is worth",
            text: "The captured four-way handshake contains ANonce, SNonce and MICs — enough for the attacker to test password guesses *offline* at dictionary speed (billions of guesses on GPU rigs against short passphrases). It contains no key material itself: a long random passphrase (or WPA3-SAE, where each guess needs a live exchange) moves the cost from laptop-hours to infeasible.",
          },
          {
            label: "Step 4: Remediation priority",
            text: "Retire WEP immediately (it is recoverable from passive capture alone); for the WPA2 network, enforce a 20+ character random passphrase or move to WPA3-SAE, enable Protected Management Frames so deauth spoofing stops working, and validate certificates if 802.1X is deployed.",
          },
        ],
        result: "WEP's IV space exhausts in ~7.8 h at 600 fps but 50% collision probability arrives after only ~4,800 frames (~8 s); deauth-forced handshakes give attackers offline password verification against WPA2-PSK, defeated by long random passphrases, WPA3-SAE and PMF.",
      },
    ],
    keyTakeaways: [
      "WEP fails structurally: a 24-bit clear-text IV over RC4 guarantees keystream reuse — collisions within seconds — enabling key recovery from passive capture.",
      "The WPA2 four-way handshake proves both sides hold the PMK and derives fresh per-session keys, sending no secret (and nothing offline-verifiable about the password).",
      "WPA3's SAE makes password guessing an online, rate-limited activity and adds forward secrecy; PMF closes unauthenticated deauthentication.",
      "Evil twins exploit unauthenticated SSIDs — certificate validation and per-user credentials are the structural answers.",
      "Deauthentication is both a DoS and a handshake-harvesting tool; monitor for it and deploy 802.11w/WPA3.",
    ],
    quiz: [
      {
        q: "A WEP access point transmits about 600 frames per second. Approximately how long until its 24-bit IV space is fully exhausted?",
        options: [
          "About 28 seconds",
          "About 7.8 hours",
          "About 33 days",
          "About 2.3 years",
        ],
        answer: 1,
        explanation: "2^24 = 16,777,216 IVs; at 600/s that is 16,777,216/600 ≈ 27,962 s ≈ 7.8 hours. Option 1 forgets that 2^24 is ~16.8 million, not ~17 thousand; option 3 and 4 scale as if the space were 2^32-ish. Worse for WEP, collisions reach 50% probability after only ~4,800 frames — the birthday effect, not exhaustion, is the killer.",
      },
      {
        q: "What does a station prove by sending a correct MIC in message 2 of the WPA2 four-way handshake?",
        options: [
          "That it knows the network SSID, which is needed to key the MIC",
          "That it holds the PMK — since the MIC is computed with the PTK derived from the PMK and both nonces — without ever transmitting the PMK or PTK",
          "That it is within radio range, which the AP measures from the signal strength",
          "That the GTK is installed, which message 2 carries",
        ],
        answer: 1,
        explanation: "The PTK is derived as PRF(PMK, both nonces, both MACs); only a station holding the PMK can compute a valid MIC over message 2. Nothing secret travels on the air — that is the design's entire point. The SSID is broadcast in the clear (option 1); signal strength proves proximity, not identity (option 3); and the GTK travels in message 3, protected by the PTK (option 4).",
      },
      {
        q: "Why is WPA3-SAE resistant to the offline dictionary attacks that menace WPA2-PSK?",
        options: [
          "It uses AES with a longer key, making each guess computationally slower",
          "It changes the passphrase every hour automatically",
          "The captured exchange commits to values derived from password plus per-session randomness, so a guess can only be tested by performing a new live exchange with a real endpoint",
          "It transmits the passphrase through a separate encrypted channel first",
        ],
        answer: 2,
        explanation: "SAE is a password-authenticated key agreement: each run binds the password into a fresh random commitment, so recordings contain nothing offline-verifiable — every guess requires interacting with the endpoint again, where rate limiting applies. Options 1, 2 and 4 describe speed bumps or mechanisms that do not exist; none addresses the offline-verifiability that makes WPA2-PSK crackable.",
      },
      {
        q: "A user in an airport connects to 'FreeAirportWiFi', and a portal asks for their email password again although they authenticated an hour ago. What is the most likely explanation?",
        options: [
          "Session timeout on the legitimate airport controller",
          "An evil-twin access point with the same SSID harvesting credentials",
          "A deauthentication flood has corrupted their session cache",
          "WPA3 key rotation on the legitimate network",
        ],
        answer: 1,
        explanation: "Duplicated credential prompts on a known network are the classic evil-twin tell — the twin cannot inherit the real network's session state, so it re-asks. Timeouts (option 1) are possible but should never be assumed first; deauth floods (option 3) disconnect clients rather than build portals; and WPA3 (option 4) has no user-visible re-authentication behaviour like this. Never re-enter credentials; verify the network identity instead.",
      },
      {
        q: "An attacker repeatedly spoofs deauthentication frames at a WPA2-PSK network. What are the two attack values of this behaviour, and what removes it?",
        options: [
          "It cracks the PMK directly and then reads all traffic; removed by longer passphrases",
          "It is a cheap denial of service, and it forces clients to re-associate so the attacker can capture fresh handshakes; removed by Protected Management Frames (802.11w, mandatory in WPA3)",
          "It resets the AP to factory defaults and copies the client list; removed by MAC filtering",
          "It downgrades the cipher to WEP and then injects frames; removed by disabling WPS",
        ],
        answer: 1,
        explanation: "In WPA2, management frames are unauthenticated, so deauths are free to spoof — yielding both a DoS lever and on-demand handshake generation for offline guessing. PMF signs those frames, removing both uses. A long passphrase (option 1) only raises the offline-guessing cost, it does not stop the DoS; options 3 and 4 describe mechanisms that deauth does not perform.",
      },
      {
        q: "A 400-person company must secure corporate Wi-Fi with individual accountability and instant revocation for departing staff. Which design fits?",
        options: [
          "WPA3-PSK with a 30-character shared passphrase changed monthly",
          "Open network behind a captive portal that checks employee numbers",
          "WPA2/WPA3-Enterprise with 802.1X and EAP-TLS certificates issued per user",
          "MAC address filtering with hidden SSID",
        ],
        answer: 2,
        explanation: "Enterprise mode gives per-identity authentication via RADIUS and certificates: revocation is one directory/certificate change, and there is no shared secret to crack or rotate company-wide. Option 1 still shares one secret among 400 people (monthly rotation is an operational nightmare and does not give accountability); option 2 authenticates nothing about the device and leaks on portal spoofing; option 4 is trivially spoofed and hides nothing that matters.",
      },
    ],
  },

  // ================================================================ 5 ====
  {
    sectionId: "cyber-network-defense-s5",
    readingTime: 9,
    prerequisites: ["cyber-network-defense-s3"],
    intro: "The perimeter model assumed a trustworthy inside — and then every major breach of the last decade walked in through a laptop, a vendor connection or a phishing click, and found a flat interior waiting. Network Access Control fixes the front door: no device joins the network without proving who and what it is. Zero Trust removes the assumption entirely: every request is authenticated, authorized and inspected regardless of which network it comes from. Between them sits microsegmentation, the discipline of making east-west traffic earn its way through explicit policy.",
    objectives: [
      "Describe the 802.1X roles and the traffic flow of a port-based authentication",
      "Explain posture checks and how failed or guest devices are handled",
      "Define microsegmentation and quantify its effect on attack blast radius",
      "State the core zero-trust tenets and how they differ from perimeter trust",
      "Apply least-privilege design to east-west traffic in a data center",
    ],
    concepts: [
      {
        term: "802.1X port-based authentication",
        kind: "definition",
        statement: "**802.1X** blocks all traffic on a switch port (or Wi-Fi association) until the connected device authenticates, using three roles: the **supplicant** (client software on the device), the **authenticator** (switch or AP that keeps the port closed), and the **authentication server** (typically RADIUS) that actually verifies credentials and tells the port to open.",
        detail: "Mechanically, the port has two virtual channels: an uncontrolled one that carries only EAPOL frames between supplicant and authenticator, and a controlled one that stays blocked until success. The switch never sees the credentials — it relays EAP messages to RADIUS, which returns accept/reject plus VLAN assignment. This moves admission from 'has a cable' to 'has an identity', which is the prerequisite for everything else in zero trust. Devices that cannot run a supplicant (printers, badge readers) fall back to MAC authentication bypass (MAB), which is identification-by-assertion and must be scoped and monitored accordingly.",
      },
      {
        term: "Posture checks and remediation",
        kind: "method",
        statement: "**Posture assessment** verifies the health state of a device before and during access — OS patch level, disk encryption, EDR/agent presence and version, screen lock — and routes non-compliant devices into remediation or quarantine rather than the production network.",
        detail: "The NAC decision is only as good as its signals: an agent reports rich posture but requires management; agentless checks (DHCP fingerprinting, TLS fingerprinting, network behaviour) cover unmanaged devices with weaker evidence. The operational design question is the failure mode — a posture service outage must fail open or closed deliberately, and quarantine networks need working paths to patch servers or the devices can never recover themselves. Continuous posture (re-evaluating during the session, not just at join time) matters because a device's state degrades mid-day, not only at boot.",
      },
      {
        term: "Microsegmentation",
        kind: "definition",
        statement: "**Microsegmentation** enforces policy between individual workloads rather than only between networks, so that a compromised host can reach only the specific services its role requires — typically enforced by per-host firewall rules distributed to hypervisors, OS firewalls or identity-aware infrastructure.",
        detail: "Contrast with VLAN segmentation: a VLAN wall stops at the router, and any two hosts in the same VLAN talk freely; microsegmentation draws the wall around each workload, with rules expressed in workload identity (labels like 'tier: web') that survive IP changes and live migration. The engineering method is: observe real flows, write policy that whitelists exactly them, alert on everything else, then tighten. The measurable output is blast radius — the number of hosts reachable from a compromised one — which drops from thousands in a flat network to tens.",
      },
      {
        term: "Zero trust principles",
        kind: "definition",
        statement: "**Zero trust** holds that no user, device or network flow is trusted by virtue of location — every access request is authenticated, authorized and encrypted per-session, with policy decided from identity, device state and context (behaviour, geolocation, sensitivity of the asset).",
        detail: "Architecturally this means: strong identity for users *and* machines (phishing-resistant MFA, workload certificates); policy engines that evaluate each request against device posture and risk signals rather than subnet membership; and internal traffic treated as hostile — encrypted and authenticated, since the 'internal' network is no longer a security boundary. The payoff is that stolen credentials alone or a foothold alone are insufficient; the cost is that identity infrastructure becomes the crown jewels and must be engineered to that standard.",
      },
      {
        term: "Least-privilege east-west traffic",
        kind: "insight",
        statement: "In a compromised data center, the attacker's power is measured in **reachable services**: least privilege on east-west flows means each workload can talk to exactly the services it needs on exactly the ports it needs — and nothing else — so a foothold in one tier buys only that tier.",
        detail: "The classic application is the three-tier web/app/database pattern: web talks to app on the app port only, app talks to database on the database port only, database initiates nothing — no default route, no internet egress, no SSH from arbitrary subnets. Observability is the enforcement partner: flow logs make violations visible, and 'allowed but never used' rules are removed, because dead rules are the future incident's path. This is also the check against over-permissive orchestration defaults, where a single broad security-group rule quietly re-flattens the network.",
      },
    ],
    examples: [
      {
        title: "From flatLAN to least privilege — admission and blast radius",
        problem: "A company's office LAN is one flat /16 where any authenticated laptop can reach every other host: roughly 4,000 endpoints and servers. The data center is the same: 6,000 VMs on one routable segment. After an incident in which one phishing-fetched credential allowed an attacker to sweep the entire interior, the team deploys 802.1X on the LAN and microsegmentation in the data center (web tier: 120 VMs; app tier: 200; database: 40). Quantify the change and design the admission flow.",
        steps: [
          {
            label: "Step 1: Admission flow",
            text: "Every port runs 802.1X: the laptop's supplicant exchanges EAPOL with the switch (authenticator), which relays to RADIUS (authentication server, backed by the directory with certificates). On success the port opens into the employee VLAN; unknown personal devices land in a guest VLAN with internet-only access; printers authenticate via MAB into a scoped VLAN that reaches only print services. Failed or non-compliant (unpatched, no EDR) machines go to quarantine, where the only reachable servers are the patch and EDR distribution hosts.",
          },
          {
            label: "Step 2: Quantify the office blast radius",
            text: "Before: any compromised laptop reaches ~4,000 hosts. After: a compromised laptop reaches its own VLAN's permitted services — file shares, the intranet, print — on specific ports, a few dozen services, none of them server-to-server paths. Lateral scanning, the standard post-phishing move, now trips alerts instead of mapping the estate.",
          },
          {
            label: "Step 3: Quantify the data-center blast radius",
            text: "Before: a compromised web VM can attempt connections to 5,999 other VMs. After microsegmentation, a compromised web VM can reach: the app tier's 200 VMs on one port (its dependency), plus its monitoring and logging services — roughly 210 targets instead of 6,000, a 96% reduction; and of those, the database tier (40 VMs) is not directly reachable at all, since only the app tier may talk to it.",
          },
          {
            label: "Step 4: Enforce and verify",
            text: "Rules are written from observed flows: web→app on the app port, app→database on the database port only, database egress: none. Flow logs alert on denied attempts (the scanning signature) and on 'allowed-but-never-used' rules, which are pruned monthly so the policy stays tight as the application evolves.",
          },
        ],
        result: "802.1X makes admission identity-based with quarantine for non-compliant devices; blast radius drops from ~4,000 reachable hosts to tens on the LAN and from ~6,000 to ~210 in the data center (databases unreachable from the web tier), turning lateral movement from free into loud.",
      },
    ],
    keyTakeaways: [
      "802.1X closes the port until the device authenticates: supplicant, authenticator, authentication server — credentials verified by RADIUS, never by the switch.",
      "Posture checks gate admission on device health; design the failure mode (open vs closed) and the quarantine path deliberately.",
      "Microsegmentation draws policy around workloads, not subnets — blast radius becomes the measurable security metric.",
      "Zero trust removes location-based trust: per-request authentication, authorization and encryption, with identity infrastructure as the new crown jewels.",
      "Least-privilege east-west means one port per dependency, databases that initiate nothing, and pruning of unused allows.",
    ],
    quiz: [
      {
        q: "In an 802.1X deployment, which device actually verifies the credentials, and what is the switch's role?",
        options: [
          "The switch verifies credentials and informs a RADIUS server of the outcome",
          "The RADIUS authentication server verifies credentials; the switch (authenticator) relays EAP frames and keeps the controlled port closed until it receives the accept",
          "The supplicant verifies the network's identity and the switch verifies the supplicant — each independently",
          "The DHCP server verifies credentials before issuing the lease that opens the port",
        ],
        answer: 1,
        explanation: "The authenticator (switch/AP) is a gate-keeper, not a judge: it passes EAP between supplicant and RADIUS and enforces the final decision on its controlled/uncontrolled port split. Option 1 inverts the roles; option 3 describes mutual authentication, which exists (server certificates) but does not make the switch the credential verifier; option 4 has nothing to do with 802.1X — the port stays closed before DHCP could even run.",
      },
      {
        q: "A company printer cannot run 802.1X supplicant software. Which mechanism admits it, and with what caveat?",
        options: [
          "It is admitted by MAC authentication bypass — identification by claimed address, spoofable, so it must be scoped to a restricted VLAN",
          "It is admitted by the guest VLAN, which has full internal access",
          "802.1X is disabled on that switch entirely",
          "It authenticates via EAP-TLS with a firmware certificate",
        ],
        answer: 0,
        explanation: "MAB admits devices that cannot supplicate, by matching their MAC address; since a MAC is trivially spoofed, MAB-authorized devices belong on a tightly-scoped segment (print services only). Option 2 gives untrusted devices far too much reach; option 3 sacrifices admission control for the whole switch; option 4 is unavailable precisely because the device cannot run a supplicant.",
      },
      {
        q: "A flat data center has 6,000 VMs on one segment: web (120), app (200), database (40), and 5,640 others. After microsegmentation enforcing web→app (one port) and app→database (one port) only, what is the blast radius of one compromised web VM?",
        options: [
          "Still 6,000, because all VMs share the segment",
          "About 360 — web plus app plus database tiers, since tiers trust each other",
          "About 210 — the 200 app VMs on the app port plus its monitoring/logging services; the database tier is not directly reachable from web",
          "Zero — microsegmentation prevents any compromise from spreading at all",
        ],
        answer: 2,
        explanation: "Least privilege grants the web tier only its actual dependency: the app tier on one port, plus operational services — ~210 targets instead of 6,000. Option 1 ignores that enforcement has moved to per-workload rules; option 2 wrongly grants web→database reach (only the app tier may talk to the databases); option 4 overclaims — microsegmentation contains spread, it does not prevent compromise of the first host.",
      },
      {
        q: "Which statement best captures the zero-trust shift from perimeter security?",
        options: [
          "Firewalls are replaced by identity providers, making the network layer irrelevant",
          "Trust is never granted by network location; every request is authenticated and authorized per-session using identity, device posture and context, and internal traffic is protected as if hostile",
          "The perimeter moves from the network edge into the cloud provider's edge",
          "All traffic is routed through a single inspection choke point for uniform policy",
        ],
        answer: 1,
        explanation: "Zero trust deletes the assumption that 'inside = trusted': verification happens per request with full context, and internal links are encrypted/authenticated because they are no longer a boundary. Option 1 discards network controls that still matter; option 3 relocates rather than removes location trust; option 4 describes perimeter consolidation — the opposite of distributing enforcement to each request.",
      },
      {
        q: "Which east-west rule set for a three-tier application is least privilege?",
        options: [
          "Web tier: any→any on ports 80, 443, 22; database: any→any on 5432",
          "Web→app on the application port; app→database on 5432 from app-tier identities only; database initiates no connections and has no internet egress",
          "All tiers may reach each other on any port, but flows are logged for audit",
          "Web→database on 5432 directly, to remove a hop and its latency",
        ],
        answer: 1,
        explanation: "Least privilege grants each tier exactly its dependency and nothing more: one port, one direction, database fully passive. Option 1 opens SSH and broad sources; option 3 is flat with logging — observability is not a control; option 4 grants the most valuable tier direct exposure to the least-defensible one and is a classic shortcut that wrecks containment.",
      },
    ],
  },

  // ================================================================ 6 ====
  {
    sectionId: "cyber-network-defense-s6",
    readingTime: 8,
    prerequisites: ["cyber-network-defense-s2"],
    intro: "Sometimes the best sensor is a system nobody legitimate has any reason to touch. A honeypot has no production function, so every connection to it is suspicious by definition — a property no traffic model can match. And sometimes the best evidence is not packets at all: flow records — who talked to whom, for how long, moving how many bytes — expose the rhythms of command-and-control beaconing and the slow bleed of exfiltration that hide in plain sight among millions of benign flows. This section covers honeypot tiers and their risks, flow analysis technique, and how indicators get extracted and used.",
    objectives: [
      "Classify honeypots by interaction level and match tier to purpose and risk",
      "Explain why any traffic to a honeypot is high-signal by construction",
      "Read a NetFlow record and reason about what flows can and cannot reveal",
      "Detect C2 beaconing and DNS tunnelling with concrete numeric criteria",
      "Extract actionable indicators from honeypot and flow evidence",
    ],
    concepts: [
      {
        term: "Honeypot interaction tiers",
        kind: "definition",
        statement: "Honeypots are graded by how much real system the attacker gets: **low-interaction** devices emulate services without an OS, **medium-interaction** systems run real but sandboxed services, and **high-interaction** honeypots are complete operating systems whose every action is logged.",
        detail: "Low-interaction (emulation frameworks answering predefined banners) are cheap, safe and shallow — they catch scanners and worm spray but cannot capture post-exploitation. Medium systems (a jailed SSH service, a deliberately weak web app) provoke richer behaviour with contained risk. High-interaction honeynets — real machines behind a honeywall that logs everything, keystrokes included — capture the full intrusion lifecycle, tool downloads and insider tradecraft, at the cost of careful containment: the machine must never be a launchpad, so egress is proxied, throttled and alerting. Tier choice = fidelity needed versus risk and effort you can carry.",
      },
      {
        term: "The honeypot's information property",
        kind: "insight",
        statement: "Because a honeypot serves **no production function**, the false-positive rate on its alerts approaches zero by construction: any packet that arrives was aimed at something that should not exist, so even a single SYN is worth an analyst's attention.",
        detail: "This is the mirror image of production monitoring, where one malicious flow hides in a million benign ones. Two uses follow. Detection: a few internal honeypots on otherwise-unused server addresses turn lateral movement into a tripwire — a scanning attacker probing an empty /24 will find them, legitimate software never will. Intelligence: capture yields fresh samples, C2 addresses and exploit patterns, feeding blocklists and detection engineering. The honest caveats: sophisticated actors fingerprint honeypots and avoid or poison them; and a honeypot is an *attractive nuisance* — it must be engineered so that compromise of it endangers nothing else.",
      },
      {
        term: "NetFlow and flow records",
        kind: "notation",
        statement: "A **flow record** summarizes a conversation without its content: source/destination IP, source/destination port, protocol, plus packet and byte counters, timestamps, interface and TCP-flag summaries — on routers and switches, exported (NetFlow/IPFIX/sFlow) at a tiny fraction of full-packet-capture cost.",
        detail: "The economics are why flows scale: a day of enterprise traffic may be millions of records and a few GB, versus terabytes of PCAP, and the collection survives at links where packet capture is impossible. The limitation is symmetric — no payload, so encryption is irrelevant but so is content: you see that host A sent host B 3.2 MB over 40,000 DNS queries, but not what. Analysis is therefore structural: top talkers, new pairs, port-mix changes, geographic anomalies, timing regularity and volume asymmetry, enriched with asset inventory and threat intelligence on the addresses involved.",
      },
      {
        term: "Beaconing detection",
        kind: "method",
        statement: "Command-and-control channels usually call home on a schedule, so they betray themselves by **interval regularity**: measure the intervals between flows to the same external destination and compute the coefficient of variation (σ/μ) — machine-driven beaconing sits near 0.01-0.05 while human and organic traffic scatter above 0.5.",
        detail: "The method: group flows by (internal host, external host, port), compute interval mean μ and standard deviation σ, and flag pairs where CV = σ/μ is small and the pair count is high (dozens of flows or more). Worked numbers: an implant phoning home every 60.0 s with σ = 1.2 s has CV = 1.2/60 = 0.02 — a signature no legitimate user activity produces. Attackers add jitter to defeat exactly this, so tier the detection: also test for low byte-count consistency (beacons carry small payloads of near-constant size) and long-lived destination persistence, and prioritize hosts that beacon to freshly-registered domains.",
      },
      {
        term: "Exfiltration and DNS tunnelling signatures",
        kind: "insight",
        statement: "Data theft shows in flow arithmetic before it shows anywhere else: **volume asymmetry** (outbound bytes far exceeding inbound on a normally balanced protocol) and, for DNS tunnelling, an explosion of **TXT/NULL queries with long labels to a single authoritative domain** — because the data itself is encoded into the queried names.",
        detail: "Worked arithmetic: an implant exfiltrating 3.2 MB over a weekend via DNS TXT records averaging 80 bytes of payload per query needs 3,200,000/80 = 40,000 queries to one domain — three orders of magnitude above a normal client's resolver behaviour, all with unusually long labels (the base32-encoded chunks). Flow-level tells: byte-count per DNS flow far above the ~100-200 byte norm, NXDOMAIN rates spiking as the encoder occasionally misses, and the persistence of the destination. Volume-based detection generalizes: for any host, compare egress against its peer group and its own history, and escalate the outliers that also fail the 'does this destination make business sense' test.",
      },
      {
        term: "Indicator extraction and use",
        kind: "method",
        statement: "Evidence from honeypots and flows becomes defence through **indicators** — external IPs, domains, URLs, file hashes, protocol signatures — extracted with full context (time, source, confidence) and pushed into blocks, detection rules and threat-intelligence platforms where they decay on a schedule.",
        detail: "A honeypot capture yields the attacker's source address, downloaded tool hashes and C2 endpoint; a beaconing analysis yields the destination, port, interval and payload-size profile. Each indicator carries a lifetime: scanner sources churn fast, C2 infrastructure lasts weeks, domains get re-registered — so automations should expire rather than accumulate, and every block should reference the evidence that justified it. The mature loop closes on itself: indicators from detection enrich honeypot alerting (known attacker arrives → fingerprint the session), and novel honeypot sessions generate the next round of indicators.",
      },
    ],
    examples: [
      {
        title: "Two detections — the beacon and the DNS bleed",
        problem: "Flow analytics on a /24 department subnet shows: (a) workstation 10.20.7.41 has 864 flows to 203.0.113.200:443 in 24 hours, intervals averaging 60 s with standard deviation 1.2 s, average payload 340 bytes each way; (b) workstation 10.20.7.55 made 40,000 DNS queries over the weekend to a single domain, TXT records, average 80 bytes payload, 3.2 MB total egress. The team must assess both and extract indicators.",
        steps: [
          {
            label: "Step 1: Test the beacon hypothesis",
            text: "For the 10.20.7.41 pair: CV = σ/μ = 1.2/60 = 0.02, i.e. 2% jitter. Count check: 864 flows ≈ 24 h × 60 min/h — exactly one flow per minute for a day. Human-driven HTTPS browsing has CV well above 0.5 and bursty, session-shaped traffic; a 2%-jitter, 60-second metronome with near-constant 340-byte payloads is the C2 beacon signature. Priority: high.",
          },
          {
            label: "Step 2: Test the exfiltration hypothesis",
            text: "For 10.20.7.55: 40,000 queries to one domain is orders of magnitude beyond a resolver's normal fan-out (a typical client contacts hundreds of distinct domains). Arithmetic: 3.2 MB at 80 bytes/query = 40,000 queries — the volume exactly accounts for the data as encoded payload. TXT records with long labels to a single authoritative zone is textbook DNS tunnelling egress. Priority: critical — assume data has left.",
          },
          {
            label: "Step 3: Extract indicators",
            text: "From (a): destination 203.0.113.200, port 443, interval ~60 s ±1.2 s, payload ~340 B — enough for a flow-analytics rule (any internal host matching this profile alerts) and an edge block. From (b): the tunnel domain and its authoritative servers, the TXT-pattern signature, and the workstation identity — feeding DNS security rules (queries-per-domain thresholds, TXT-label length limits).",
          },
          {
            label: "Step 4: Contain and loop back",
            text: "Isolate both hosts for forensics (the beacon host is compromised; the DNS host is both compromised and confirmed exfiltration). Add the indicators with expiry dates and evidence references, and place an internal honeypot pair on the subnet's unused addresses — the next scanner in that segment trips it in minutes.",
          },
        ],
        result: "10.20.7.41 is flagged as C2-beaconing (CV = 0.02, one flow per minute for 24 h, constant small payloads); 10.20.7.55 is confirmed DNS-tunnel exfiltration of 3.2 MB (40,000 × 80 B TXT queries to one domain). Both hosts contained; destination, domain, timing and payload indicators pushed to edge and DNS controls with decay dates.",
      },
    ],
    keyTakeaways: [
      "Honeypot tier is a fidelity-versus-risk dial: low for safe scanning intelligence, high for the full intrusion lifecycle under strict containment.",
      "A system with no production function yields near-zero false positives — every packet it sees is hostile by definition.",
      "Flow records give structure without content: cheap everywhere, blind to payloads, ideal for behavioural detection at scale.",
      "Beaconing is arithmetic: CV = σ/μ near 0.02 with a steady small payload is machine rhythm; organic traffic scatters above 0.5.",
      "Exfiltration shows in volume asymmetry and query-count anomalies — DNS tunnelling of 3.2 MB at 80 B/query is 40,000 queries no resolver legitimately makes.",
    ],
    quiz: [
      {
        q: "A research team wants to capture the full post-exploitation behaviour of attackers targeting their sector — tool downloads, privilege escalation, lateral attempts — accepting higher operational cost. Which honeypot tier fits?",
        options: [
          "Low-interaction honeypots emulating common service banners",
          "Medium-interaction honeypots running jailed versions of the target services",
          "High-interaction honeynets: real operating systems behind a honeywall that logs and constrains all traffic",
          "A single production server instrumented with extra logging",
        ],
        answer: 2,
        explanation: "Only a real OS exhibits (and therefore reveals) the full lifecycle — emulation cannot run the attacker's tools, and a jailed service stops at its own boundary. Options 1 and 2 capture reconnaissance and first contact only. Option 4 is the anti-pattern: instrumenting a production system gives the attacker real assets and real risk, which is exactly what a honeypot exists to avoid.",
      },
      {
        q: "What is the fundamental reason a honeypot's alerts carry near-zero false positives?",
        options: [
          "Its detection rules are more precise than production rules",
          "It runs on an isolated network segment with no other traffic",
          "It has no production function, so no legitimate traffic has any reason to reach it — anything that arrives is hostile or probing",
          "It uses machine learning trained on attacker behaviour only",
        ],
        answer: 2,
        explanation: "The honeypot's power is definitional, not algorithmic: with no legitimate purpose, every connection is suspect by construction. Options 1, 3 and 4 describe engineering choices that any sensor could have — none yields the by-construction guarantee that absence-of-function provides.",
      },
      {
        q: "Flow analysis shows a workstation made 864 connections to one external host in 24 hours, with intervals of mean 60 s and standard deviation 1.2 s. What does this indicate and why?",
        options: [
          "A file backup — 864 is a normal nightly backup count",
          "Likely C2 beaconing: the coefficient of variation is 1.2/60 = 0.02, a machine-like regularity that organic traffic does not show",
          "A human researcher refreshing a page about once a minute",
          "A routing loop, because the intervals are too regular for TCP",
        ],
        answer: 1,
        explanation: "CV = 0.02 means 2% jitter — a metronome, and 864 = exactly one flow per minute for a day. Human behaviour (option 3) scatters far wider (CV above 0.5); backups (option 1) run in bursts, not all-day minute beats; and a routing loop (option 4) produces rapid duplicates, not scheduled once-per-minute flows to one external peer.",
      },
      {
        q: "An analyst suspects DNS tunnelling exfiltration of 3.2 MB using TXT records carrying about 80 bytes of encoded data each. Roughly how many DNS queries should they expect to find to the tunnel domain?",
        options: [
          "About 400 — DNS carries data efficiently in compressed form",
          "About 4,000 — a few hours of slightly elevated queries",
          "About 40,000 — 3,200,000 bytes / 80 bytes per query",
          "About 400,000 — one query per byte plus protocol overhead",
        ],
        answer: 2,
        explanation: "Each query smuggles ~80 bytes, so 3.2 MB needs 3,200,000/80 = 40,000 queries to a single domain — a count no legitimate client produces (they fan out across hundreds of domains). Options 1 and 2 miscount the arithmetic; option 4 inflates by treating each query as carrying a single byte.",
      },
      {
        q: "Which set of indicators can be extracted from flow records and honeypot logs, and how should they be deployed?",
        options: [
          "Full packet payloads and decrypted content — deployed to the SIEM as raw archives",
          "External IPs, domains, ports, timing profiles, byte-count patterns and file hashes from dropped tools — deployed as blocks and detection rules with expiry dates and evidence references",
          "Only internal IP addresses — deployed as permanent blocks",
          "Nothing reliable, since encryption defeats flow analysis",
        ],
        answer: 1,
        explanation: "Flows yield structure (who, where, when, how much) and honeypots add content-based artifacts like tool hashes; together they support destination blocks, beaconing signatures and DNS rules — each with a decay date, because attacker infrastructure churns. Option 3 blocks victims; option 4 misunderstands flow analysis, which is payload-blind by design and therefore not 'defeated' by encryption; option 1 claims data the sources do not contain.",
      },
    ],
  },

  // ================================================================ 7 ====
  {
    sectionId: "ee-e-ps1-s2",
    readingTime: 9,
    intro: "A power station is a machine for converting fuel or falling water into kilowatt hours, and its engineering is inseparable from its economics. The load on a station is a curve, not a number — it breathes with the day and the seasons — and the entire art of station planning is matching installed capacity to that curve at least cost. The vocabulary of this art is a handful of factors: load factor tells you how flat the demand is, diversity factor tells you how much of the individual peaks cancel, and capacity and utilization factors tell you how hard your capital is actually working. This section builds each factor and then prices a kilowatt hour.",
    objectives: [
      "Read a load curve and extract energy, average load and maximum demand",
      "Define and compute load factor, diversity factor, plant capacity factor and plant utilization factor",
      "Relate diversity between consumer classes to required installed capacity",
      "Compute the cost per kWh generated from fixed and running costs",
      "Explain how each factor moves the economics of station planning",
    ],
    concepts: [
      {
        term: "Load curve and its integrals",
        kind: "definition",
        statement: "The **load curve** plots demand (kW or MW) against time over a day, month or year; its area is the **energy generated**, its peak is the **maximum demand**, and the constant level with the same area is the **average load**.",
        detail: "From a daily load curve, units generated = average load × 24 h. The curve's shape drives every downstream decision: a sharp evening peak forces capacity that idles most of the day; a flat industrial load is a station planner's dream. Two loads with identical energy can have wildly different installed-capacity requirements purely through their peakiness — which is exactly what the load factor captures next.",
      },
      {
        term: "Load factor",
        kind: "law",
        statement: "**Load factor** $= \\dfrac{\\text{average load}}{\\text{maximum demand}}$, always less than 1, is the fraction of peak demand at which the plant effectively runs on average; units generated per year $=$ average load $\\times\\ 8760$ h.",
        detail: "A high load factor spreads the plant's fixed capital over more kilowatt hours, which is why flat loads are cheap to serve and peaky loads are expensive. Worked numbers: a station with maximum demand 100 MW and average load 60 MW has a load factor of 0.60 and generates 60 × 8760 = 525,600 MWh per year. Every 1 MW of demand reduction *at the peak* (peak shaving, storage, demand response) is worth pure capital avoidance, while 1 MW of energy reduction off-peak is worth only fuel.",
      },
      {
        term: "Diversity factor",
        kind: "law",
        statement: "**Diversity factor** $= \\dfrac{\\text{sum of individual maximum demands}}{\\text{coincident (system) maximum demand}}$, always greater than 1, measures how much the individual peaks fail to coincide.",
        detail: "Consumers do not peak together — residential lighting peaks in the evening, offices at midday, industry spread over shifts. If four feeders have individual maxima of 60, 40 and 50 MW (sum 150 MW) but the system never sees more than 100 MW at once, the diversity factor is 150/100 = 1.5, and only 100 MW of capacity (plus reserve) must be installed rather than 150. Larger and more varied systems have larger diversity factors — one of the core economic arguments for interconnection. The reciprocal, 1/DF, is sometimes called the coincidence factor.",
      },
      {
        term: "Plant capacity factor",
        kind: "definition",
        statement: "**Plant capacity factor** $= \\dfrac{\\text{average load}}{\\text{plant capacity (installed)}}$ — the fraction of installed capability the plant actually delivers on average; units generated per year $=$ installed capacity $\\times\\ 8760\\ \\times$ capacity factor.",
        detail: "It measures how hard the *capital* works. A 120 MW station serving an average 60 MW load runs at a capacity factor of 0.50 — half its investment is idle capacity held for the peak (and for reserve and maintenance outages). Nuclear plants chase 0.90+ because their fuel is cheap and capital immense; solar farms are limited by night and weather; peaking gas turbines may see 0.05-0.10 and are economics only if their capital cost per kW is correspondingly small.",
      },
      {
        term: "Plant utilization (use) factor",
        kind: "definition",
        statement: "**Plant utilization factor** $= \\dfrac{\\text{maximum demand}}{\\text{plant capacity}}$ — how much of the installed capacity is ever called upon at the system peak.",
        detail: "Continuing the running example: maximum demand 100 MW against 120 MW installed gives a utilization factor of 100/120 = 0.833. The gap between utilization (0.833) and capacity factor (0.50) is the load factor in disguise — capacity factor = load factor × utilization factor. Reserve margin, the deliberately idle capacity for outages and forecast error, is the engineering reason utilization factors are designed below 1.",
      },
      {
        term: "Cost per kWh generated",
        kind: "method",
        statement: "Cost per kWh $= \\dfrac{\\text{annual fixed cost} + \\text{annual running cost}}{\\text{annual units generated}}$, where fixed (capital-driven) costs are levied per kW of installed capacity and running (fuel, O&M) costs per kWh actually generated.",
        detail: "Fixed cost items — interest, depreciation, insurance, taxes, salaries — would be paid even at zero output, so they divide over the energy the load curve actually yields: a high load factor is the direct route to a low tariff. Running cost is dominated by fuel and scales with generation. The two-part structure is also the logic of two-part tariffs: a demand charge (per kW) plus an energy charge (per kWh), mirroring the station's own cost anatomy back onto the consumers who cause it.",
      },
    ],
    examples: [
      {
        title: "Pricing the kilowatt hour of a 120 MW station",
        problem: "A thermal station has 120 MW installed capacity. Its consumers show individual maximum demands of 60, 40 and 50 MW, but the coincident system maximum demand is 100 MW; the average load is 60 MW. Annual fixed charges are $90 per kW of installed capacity; fuel and variable O&M cost $25 per MWh. Compute all four factors and the generation cost per kWh, then repeat the cost assuming no diversity between the consumer groups.",
        steps: [
          {
            label: "Step 1: Load and diversity factors",
            text: "Load factor = average/maximum = 60/100 = 0.60 — the station runs, on average, at 60% of system peak. Units per year = 60 MW × 8760 h = 525,600 MWh. Diversity factor = sum of individual maxima / coincident maximum = (60+40+50)/100 = 150/100 = 1.5.",
          },
          {
            label: "Step 2: Capacity and utilization factors",
            text: "Plant capacity factor = average load / installed capacity = 60/120 = 0.50 — half the installed capital is idle on average. Plant utilization factor = maximum demand / installed capacity = 100/120 = 0.833. Check: capacity factor = load factor × utilization factor = 0.60 × 0.833 = 0.50. Consistent.",
          },
          {
            label: "Step 3: Annual costs with diversity",
            text: "Fixed: 120,000 kW × $90/kW-yr = $10.8M. Running: 525,600 MWh × $25/MWh = $13.14M. Total = $23.94M for 525.6 million kWh.",
          },
          {
            label: "Step 4: Cost per kWh",
            text: "Cost = $23.94M / 525.6M kWh = $0.0456/kWh — about 4.6 cents per unit, of which 2.05 cents is capital and 2.50 cents is fuel.",
          },
          {
            label: "Step 5: Remove diversity",
            text: "Without diversity the coincident maximum becomes 150 MW, so installed capacity must rise to 150 MW: fixed cost = 150,000 kW × $90 = $13.5M. Energy (set by average load) is unchanged at 525,600 MWh, so running cost stays $13.14M. Total = $26.64M and cost = 26.64/525.6 = $0.0507/kWh — diversity alone is worth about 0.5 cents, a 10% tariff difference, on exactly the same energy.",
          },
        ],
        result: "Load factor 0.60, diversity factor 1.5, capacity factor 0.50, utilization factor 0.833; generation cost ≈ $0.0456/kWh (4.6 cents), rising to ≈ $0.0507/kWh if consumer diversity is lost — the non-coincidence of peaks is worth ~10% of the tariff.",
      },
    ],
    keyTakeaways: [
      "The load curve's area is energy, its peak is maximum demand; load factor = average/maximum measures peakiness.",
      "Diversity factor (>1) is cancelled peak — it converts 150 MW of individual maxima into 100 MW of installed-capacity obligation.",
      "Capacity factor measures capital utilization; utilization factor measures peak usage; their product with load factor ties all three together.",
      "Cost per kWh = (fixed per-kW charges + running per-kWh charges)/units; load factor and diversity are the levers that move it.",
      "Peak reduction buys capital, off-peak reduction buys only fuel — price demand response accordingly.",
    ],
    quiz: [
      {
        q: "A station records a maximum demand of 80 MW and an average load of 56 MW. What is its load factor, and what annual energy does it imply?",
        options: [
          "0.70, giving 490,560 MWh per year",
          "0.70, giving 700,800 MWh per year",
          "1.43, giving 490,560 MWh per year",
          "0.56, giving 393,100 MWh per year",
        ],
        answer: 0,
        explanation: "Load factor = 56/80 = 0.70; annual energy = average load × 8760 = 56 × 8760 = 490,560 MWh. Option 2 multiplies the *maximum* demand by 8760, confusing peak with average; option 3 inverts the ratio (load factor can never exceed 1); option 4 invents 0.56 and misapplies it.",
      },
      {
        q: "Three feeders have individual maximum demands of 30, 50 and 40 MW, but the system peak meter never reads above 80 MW. What is the diversity factor and what does it save?",
        options: [
          "0.73 — the system needs 73% of the individual peaks",
          "1.5 — the installed capacity obligation is 80 MW instead of 120 MW, saving 40 MW of capital plant",
          "1.5 — the system generates 50% more energy",
          "2.0 — each feeder can be served by half its own peak capacity",
        ],
        answer: 1,
        explanation: "Diversity factor = (30+50+40)/80 = 120/80 = 1.5, meaning only the coincident 80 MW must be carried (plus reserve), not the 120 MW sum. Option 1 computes the reciprocal and mislabels it; option 3 confuses capacity with energy — diversity reduces peak capacity, not the energy delivered; option 4 double-counts by applying diversity per feeder as well.",
      },
      {
        q: "A 100 MW plant serves an average load of 56 MW and a maximum demand of 80 MW. What are its capacity and utilization factors?",
        options: [
          "Capacity factor 0.80, utilization factor 0.56",
          "Capacity factor 0.56, utilization factor 0.80",
          "Capacity factor 0.56, utilization factor 0.70",
          "Capacity factor 0.70, utilization factor 0.80",
        ],
        answer: 1,
        explanation: "Capacity factor = average/installed = 56/100 = 0.56; utilization factor = maximum demand/installed = 80/100 = 0.80. Option 1 swaps the two definitions; options 3 and 4 pull the load factor (0.70) into the wrong slot — the check that capacity factor = load factor × utilization factor (0.70 × 0.80 = 0.56) confirms the correct pairing.",
      },
      {
        q: "A 50 MW installed plant carries an average load of 30 MW. Fixed charges are $80 per kW-year and running costs are $30 per MWh. What is the generation cost per kWh?",
        options: [
          "About 3.2 cents",
          "About 4.5 cents",
          "About 6.1 cents",
          "About 8.9 cents",
        ],
        answer: 1,
        explanation: "Annual energy = 30 MW × 8760 = 262,800 MWh. Fixed = 50,000 kW × $80 = $4.0M; running = 262,800 × $30 = $7.884M; total $11.884M over 262.8M kWh = $0.0452/kWh ≈ 4.5 cents. Option 3 applies the fixed charge to the average load instead of installed capacity; options 1 and 4 drop or double a cost component.",
      },
      {
        q: "A city proposes to shave its evening peak by 20 MW using storage and demand response. Which economic effect dominates, and why?",
        options: [
          "Fuel savings dominate, since 20 MW fewer is 20 MW not generated",
          "Capital avoidance dominates — peak capacity is what sizes the plant, and 20 MW of peak is 20 MW of installed plant never built, while the energy merely shifts off-peak",
          "Nothing changes, because annual energy is unchanged",
          "The load factor falls, since maximum demand changes",
        ],
        answer: 1,
        explanation: "Station sizing follows the peak: removing 20 MW at the peak removes 20 MW of capital (and raises the load factor by lowering the denominator), while the shifted energy is still generated — off-peak, on cheaper-loaded plant. Option 3 wrongly ignores the capital side of the cost structure; option 4 has the load-factor direction backwards (average/maximum rises when maximum falls).",
      },
    ],
  },

  // ================================================================ 8 ====
  {
    sectionId: "ee-e-ps1-s3",
    readingTime: 10,
    intro: "Every transmission-line calculation you will ever do rests on three distributed numbers per kilometre: resistance, inductance and capacitance. Resistance is losses; inductance sets the series reactance that limits power transfer and drops voltage; capacitance feeds charging current that is negligible at 33 kV and decisive at 400 kV. This section builds the three parameters from conductor geometry — the elegant logarithmic forms that come from flux linkage around a round wire — computes them for a real 132 kV line, and shows why engineers bundle conductors and why spacing is an economic dial.",
    objectives: [
      "Compute conductor resistance including temperature and skin-effect corrections",
      "Derive and apply the inductance formula $L = 2\\times10^{-7}\\ln(D/r')$ H/m",
      "Explain GMR as a fictitious radius accounting for internal flux",
      "Compute line capacitance and charging current for a three-phase line",
      "Analyze how bundling and spacing change the parameters and why",
    ],
    concepts: [
      {
        term: "Resistance of a conductor",
        kind: "definition",
        statement: "DC resistance $R = \\rho l / A$ for length $l$ and cross-section $A$, corrected to operating temperature by $R_t = R_0(1 + \\alpha t)$; at power frequency the **effective AC resistance is higher** than DC because current crowds toward the conductor surface (**skin effect**) and toward the neighbouring conductor (**proximity effect**).",
        detail: "For a stranded conductor the true area is less than the envelope (stranding factor), and published tables give ohms per km at 20 °C or 50 °C ready-corrected. Skin effect grows with frequency and conductor size — at 50 Hz it is a few percent for small conductors but material for the large cross-sections of EHV lines, which is one reason EHV uses bundles of smaller conductors. Resistance enters every loss calculation as $3I^2R$ for a three-phase line, and it is the parameter that the load factor of the previous section prices.",
      },
      {
        term: "Flux linkage and the logarithmic law",
        kind: "law",
        statement: "The magnetic field around a round conductor carrying current $I$ falls as $1/x$, so the flux linkage between two distances grows as the **logarithm of their ratio** — giving, for a single conductor of geometric mean radius $r'$ at spacing $D$ from the return path, an inductance $$L = 2\\times10^{-7}\\,\\ln\\!\\left(\\frac{D}{r'}\\right)\\ \\text{H/m}$$ per conductor.",
        detail: "The $2\\times10^{-7}$ is $\\mu_0/2\\pi$ in SI. The logarithm is structural, not an accident: because the field decays as $1/x$, energy and linkage accumulate logarithmically, and *ratios* of distances are what matter — double the spacing and inductance rises only by $2\\times10^{-7}\\ln 2 \\approx 0.139$ μH/m, about 13% on a typical line. For a single-phase line the loop inductance is twice the per-conductor value (go and return conductors in series); for a three-phase line with equilateral spacing $D$, the per-phase inductance is exactly this formula.",
      },
      {
        term: "GMR (geometric mean radius)",
        kind: "notation",
        statement: "The **GMR** $r' = r\\,e^{-1/4} \\approx 0.7788r$ is a fictitious reduced radius that accounts for the flux *inside* a solid round conductor, allowing the external-field formula to be used unmodified with $r'$ in place of $r$.",
        detail: "Internal flux links only part of the current, and the $e^{-1/4}$ factor folds that complication into a single number. For stranded conductors the GMR is computed from the strand layout (published in tables); for a bundled phase of $n$ sub-conductors the effective GMR becomes the geometric mean of the sub-conductor GMRs and their spacings — for two sub-conductors $d$ apart, $\\text{GMR}_{bundle} = \\sqrt{r' d}$, which is dramatically larger than $r'$ alone. That is the arithmetic engine of bundling.",
      },
      {
        term: "Capacitance of a line",
        kind: "law",
        statement: "For a three-phase line with equilateral spacing $D$ and conductor radius $r$ (the actual radius, not the GMR), the phase-to-neutral capacitance is $$C = \\frac{2\\pi\\varepsilon_0}{\\ln(D/r)} \\approx \\frac{0.0121}{\\ln(D/r)}\\ \\mu\\text{F/km},$$ with $\\varepsilon_0 = 8.854\\times10^{-12}$ F/m.",
        detail: "Capacitance uses the physical radius because electric flux exists down to the conductor surface — there is no 'internal capacitance' correction analogous to GMR. It sets the charging current $I_c = \\omega C V_{ph}$ that flows even at no load, and the charging power $3 V_{ph} I_c$ (about $Q_c = V^2 \\omega C$ per phase). At 33 kV these are rounding errors; at 400 kV a 100 km line draws tens of amps of charging current, and EHV design becomes a negotiation between series inductive drop and shunt capacitive rise.",
      },
      {
        term: "Bundled conductors",
        kind: "method",
        statement: "Replacing each phase conductor by a **bundle** of 2-4 sub-conductors spaced 30-50 cm apart raises the effective GMR (cutting inductance), raises capacitance, reduces surface voltage gradient (cutting corona) and increases thermal capacity — at the cost of heavier towers and more hardware.",
        detail: "Arithmetic for a two-conductor bundle with sub-conductor GMR $r'$ and spacing $d$: $\\text{GMR}_{bundle} = \\sqrt{r' d}$. With $r' \\approx 12$ mm and $d = 400$ mm, the bundle GMR is $\\sqrt{0.012 \\times 0.4} \\approx 69$ mm — nearly six times the single conductor's, and since $L \\propto \\ln(D/\\text{GMR})$, inductance drops markedly. Bundles are why EHV lines look like, and electrically are, fat hollow conductors.",
      },
      {
        term: "Spacing as an economic dial",
        kind: "insight",
        statement: "Inductance rises only logarithmically with spacing $D$, but tower steel and right-of-way rise roughly linearly — so spacing is chosen at the knee: far enough for electrical clearances and corona, not one metre more, with the logarithmic law guaranteeing rapidly diminishing electrical returns.",
        detail: "Doubling $D$ adds only $2\\times10^{-7}\\ln 2$ H/m to inductance while roughly doubling structure width; conversely squeezing $D$ saves steel but raises reactance (limiting transfer) and surface gradient (raising corona). Standardized tower families embody the settled compromise for each voltage class, and the engineer's freedom is mostly in bundling and conductor choice rather than spacing.",
      },
    ],
    examples: [
      {
        title: "Parameters of a 132 kV three-phase line",
        problem: "A three-phase line runs at 132 kV (line-to-line) with conductors of radius 15 mm arranged at the corners of an equilateral triangle of side 4.0 m. Compute (a) the per-phase inductance and its reactance at 50 Hz per km, (b) the per-phase capacitance per km, (c) the charging current per km of line, and (d) the inductance change if the spacing is doubled to 8 m.",
        steps: [
          {
            label: "Step 1: GMR",
            text: "For a solid round conductor, $r' = 0.7788r = 0.7788 \\times 15\\,\\text{mm} = 11.68\\,\\text{mm} = 0.01168$ m.",
          },
          {
            label: "Step 2: Inductance",
            text: "$L = 2\\times10^{-7}\\ln(D/r') = 2\\times10^{-7}\\ln(4.0/0.01168) = 2\\times10^{-7}\\ln(342.5) = 2\\times10^{-7} \\times 5.836 = 1.167\\times10^{-6}$ H/m $= 1.17$ mH/km per phase. Reactance: $X = 2\\pi f L = 2\\pi \\times 50 \\times 1.167\\times10^{-3} = 0.367\\ \\Omega$/km.",
          },
          {
            label: "Step 3: Capacitance",
            text: "$C = 2\\pi\\varepsilon_0/\\ln(D/r) = 2\\pi \\times 8.854\\times10^{-12} / \\ln(4.0/0.015) = 5.563\\times10^{-11}/5.586 = 9.96\\times10^{-12}$ F/m $\\approx 0.01\\ \\mu$F/km per phase.",
          },
          {
            label: "Step 4: Charging current",
            text: "Phase-to-neutral voltage $V_{ph} = 132/\\sqrt{3} = 76.2$ kV. $I_c = \\omega C V_{ph} = 314.16 \\times 9.96\\times10^{-9}\\ \\text{F/km} \\times 76.2\\times10^{3}\\ \\text{V} \\approx 0.24$ A per km — about 24 A of charging current on a 100 km line, flowing even at zero load.",
          },
          {
            label: "Step 5: Double the spacing",
            text: "With $D = 8$ m: $\\ln(8/0.01168) = 6.529$, so $L = 1.306\\ \\mu$H/m. The increase is $2\\times10^{-7}\\ln 2 = 0.139\\ \\mu$H/m — inductance up only ~12% while tower width doubles: the logarithmic law's diminishing returns made concrete.",
          },
        ],
        result: "L ≈ 1.17 mH/km per phase (X ≈ 0.37 Ω/km), C ≈ 0.01 μF/km, charging current ≈ 0.24 A/km (≈24 A per 100 km at no load); doubling spacing adds only 0.139 μH/m (~12%), confirming spacing's logarithmic returns.",
      },
    ],
    keyTakeaways: [
      "AC resistance exceeds DC through skin and proximity effects, growing with frequency and conductor size.",
      "Inductance per phase $L = 2\\times10^{-7}\\ln(D/r')$ H/m — logarithmic in the spacing-to-GMR ratio, with the GMR $r' = 0.7788r$ absorbing internal flux.",
      "Capacitance $C = 2\\pi\\varepsilon_0/\\ln(D/r)$ uses the true radius and sets charging current $\\omega C V_{ph}$, negligible at distribution voltages, decisive at EHV.",
      "Bundling multiplies the effective GMR ($\\sqrt{r'd}$ for two conductors), cutting inductance and corona simultaneously.",
      "Spacing buys inductance reduction at logarithmic rates but costs linear steel — the design sits at the knee of that trade.",
    ],
    quiz: [
      {
        q: "A three-phase line has equilateral spacing D = 2.5 m and conductors with GMR r' = 7.79 mm. What is the per-phase inductance?",
        options: [
          "About 0.58 μH/m",
          "About 1.15 μH/m",
          "About 2.31 μH/m",
          "About 5.8 μH/m",
        ],
        answer: 1,
        explanation: "$L = 2\\times10^{-7}\\ln(2.5/0.00779) = 2\\times10^{-7} \\times \\ln(321) = 2\\times10^{-7} \\times 5.77 = 1.15\\times10^{-6}$ H/m. Option 2 halves it (perhaps using $10^{-7}$ instead of $2\\times10^{-7}$); option 3 doubles it (that is the single-phase *loop* value); option 4 misplaces the exponent entirely.",
      },
      {
        q: "If a line's phase spacing is doubled (D → 2D) with conductor unchanged, the per-phase inductance increases by exactly:",
        options: [
          "$2\\times10^{-7}\\ln 2 \\approx 0.139\\ \\mu$H/m — about 12% on a typical line",
          "100%, since inductance is proportional to spacing",
          "It decreases, because wider spacing reduces magnetic coupling",
          "$2\\times10^{-7}/2$, halving the constant term",
        ],
        answer: 0,
        explanation: "Only the log's argument doubles: $\\Delta L = 2\\times10^{-7}[\\ln(2D) - \\ln(D)] = 2\\times10^{-7}\\ln 2 = 0.139\\ \\mu$H/m. The logarithmic law is the whole point — option 2 treats it as linear; option 3 has the sign backwards (wider spacing *increases* the loop area and linkage); option 4 misreads the formula's constant.",
      },
      {
        q: "What exactly is the geometric mean radius (GMR) of a solid round conductor?",
        options: [
          "The physical radius rounded to the nearest standard size",
          "A fictitious radius $r' = re^{-1/4} \\approx 0.7788r$ that accounts for internal flux linkage, letting the external-field inductance formula be used unchanged",
          "The mean radius of the strands in a stranded conductor, equal to the outer radius",
          "The radius at which the electric field reaches its maximum",
        ],
        answer: 1,
        explanation: "Internal flux links only part of the conductor's current; folding that into an equivalent reduced radius keeps the clean $\\ln(D/r')$ form. Option 3 confuses the stranding-based GMR definition (a geometric mean of strand positions) with the outer radius; options 1 and 4 describe nothing in the theory.",
      },
      {
        q: "Why does an EHV line use bundles of two to four sub-conductors per phase?",
        options: [
          "Only to increase current-carrying capacity for thermal reasons",
          "Bundling raises the effective GMR (for two conductors, $\\sqrt{r'd}$), reducing inductance and surface gradient — lower reactance and less corona — while also adding thermal capacity",
          "To increase inductance and therefore limit fault currents",
          "To reduce tower height by keeping phases closer together",
        ],
        answer: 1,
        explanation: "The bundle's geometric-mean GMR is far larger than a single sub-conductor's, so $\\ln(D/\\text{GMR})$ falls (less inductance) and charge spreads over more surface (lower gradient, less corona) — with thermal capacity a bonus. Option 1 misses the electrical core; option 3 reverses it; option 4 is a tower-design matter bundles do not address.",
      },
      {
        q: "A 50 Hz three-phase line has C = 0.01 μF/km per phase and operates at 220 kV line-to-line. Approximately what is its charging current per km?",
        options: [
          "About 0.24 A/km",
          "About 0.40 A/km",
          "About 0.69 A/km",
          "About 1.2 A/km",
        ],
        answer: 1,
        explanation: "$V_{ph} = 220/\\sqrt{3} = 127$ kV; $I_c = \\omega C V_{ph} = 314.16 \\times 10^{-8}\\ \\text{F} \\times 127\\times10^{3} = 0.399 \\approx 0.40$ A/km. Option 0.24 A/km is the 132 kV answer from the worked example — the same C at lower voltage; options 3 and 4 misplace the line-to-line versus phase-voltage conversion ($\\sqrt{3}$ appears once, not twice or squared).",
      },
    ],
  },

  // ================================================================ 9 ====
  {
    sectionId: "ee-e-ps1-s4",
    readingTime: 10,
    prerequisites: ["ee-e-ps1-s3"],
    intro: "Knowing a line's R, L and C per kilometre is only half the story; the other half is choosing the right circuit to connect them in — and the choice is made by length. Short lines shrug off capacitance and are a simple series impedance. Medium lines admit capacitance as lumped halves at each end. Long lines are waveguides, where the distributed parameters produce travelling waves, the Ferranti rise, and hyperbolic ABCD constants. This section builds the three models, then works a full voltage-regulation calculation and shows how power factor can drive regulation negative.",
    objectives: [
      "Select short, medium or long line models by length and voltage",
      "Write the ABCD constants for each model and explain their meaning",
      "Compute sending-end voltage and voltage regulation for a loaded line",
      "Explain the Ferranti effect and when it appears",
      "Predict how load power factor shifts regulation, including negative values",
    ],
    concepts: [
      {
        term: "Classification by length",
        kind: "definition",
        statement: "Lines are classed by how their shunt capacitance compares with the load: **short** (up to ~80 km, capacitance neglected — pure series impedance), **medium** (~80-250 km, capacitance lumped as nominal-T or nominal-π), **long** (beyond ~250 km, fully distributed parameters with wave behaviour).",
        detail: "The real criterion is whether charging current matters at the voltage in question — higher voltage makes the same capacitance significant at shorter length, so the boundaries blur by voltage class. The classification is an engineering economy: each step up the ladder buys accuracy at the cost of algebra, and the error of using a short-line model on a medium line is a few percent of regulation — acceptable at 11 kV, unforgivable at 220 kV.",
      },
      {
        term: "Short line model and its ABCD constants",
        kind: "method",
        statement: "For a short line, $V_S = V_R + I Z$ with total series impedance $Z = R + jX$: the general two-port constants are $A = 1,\\ B = Z,\\ C = 0,\\ D = 1$.",
        detail: "The two-port (ABCD) formalism writes $[V_S; I_S] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} [V_R; I_R]$ and lets any line be cascaded with transformers and other sections by matrix multiplication. For the short line, $C = 0$ says no shunt path exists — no charging current — and $A = D = 1$ says the no-load voltage ratio is unity: regulation is purely the drop across $Z$.",
      },
      {
        term: "Medium line: nominal-π",
        kind: "method",
        statement: "The **nominal-π** puts half the total shunt admittance at each end around the series impedance, giving $A = D = 1 + \\dfrac{YZ}{2},\\ B = Z,\\ C = Y\\left(1 + \\dfrac{YZ}{4}\\right)$ where $Y = j\\omega C l$ is the full-line charging admittance.",
        detail: "The half-at-each-end split is an approximation that treats the charging current as drawn at the terminals rather than continuously along the line — excellent up to ~250 km, where the error stays under a percent or two. The nominal-T alternative puts the series impedance in two halves around a central shunt; π wins in practice because it matches how equipment (and thinking about terminal voltages) is arranged. Note $A = D$ always for a symmetric passive two-port — a built-in check on your algebra.",
      },
      {
        term: "Long line: distributed parameters",
        kind: "law",
        statement: "With parameters distributed uniformly, the line equations become wave equations with propagation constant $\\gamma = \\sqrt{zy}$ and characteristic impedance $Z_c = \\sqrt{z/y}$, giving $$A = D = \\cosh(\\gamma l),\\quad B = Z_c\\sinh(\\gamma l),\\quad C = \\frac{1}{Z_c}\\sinh(\\gamma l).$$",
        detail: "Here $z$ and $y$ are the per-km series impedance and shunt admittance. For a lossless line $\\gamma = j\\beta$ with $\\beta = \\omega\\sqrt{LC}$, and the wavelength at 50 Hz is about 6,000 km — so a 300 km line is already an eighteenth of a wavelength, enough for standing-wave effects to matter. As $l \\to 0$, $\\cosh(\\gamma l) \\to 1$ and $Z_c\\sinh(\\gamma l) \\to zl = Z$: the long-line formula gracefully degenerates into the short-line one, which is the sanity check that the whole ladder is consistent.",
      },
      {
        term: "Voltage regulation",
        kind: "definition",
        statement: "**Voltage regulation** $= \\dfrac{|V_S| - |V_R|}{|V_R|} \\times 100\\%$ computed at constant sending voltage, i.e. $\\dfrac{V_{R,\\text{no-load}} - V_{R,\\text{full-load}}}{V_{R,\\text{full-load}}} \\times 100\\%$ — the receiving-end rise when the load is thrown off.",
        detail: "Regulation is the customer's voltage experience compressed into one number: positive means voltage sags under load (the usual case with lagging current), zero means flat, and negative means voltage *rises* under load or at light load — the Ferranti regime. Approximate short-line form for balanced three-phase, using phase values: $V_S \\approx V_R + I(R\\cos\\phi \\pm X\\sin\\phi)$, minus for leading power factor — the sign flip that lets a leading load cancel the reactive drop.",
      },
      {
        term: "The Ferranti effect",
        kind: "insight",
        statement: "On an unloaded (or lightly loaded) line the shunt capacitance draws a leading current through the series inductance, and the resulting voltage *rise* towards the receiving end is the **Ferranti effect**: at no load $V_R = V_S/\\cos(\\beta l) > V_S$, a few percent at 200-300 km, larger beyond.",
        detail: "Mechanism: the charging current flows *back* through the line's series reactance, and the drop across that reactance adds to (rather than subtracts from) the sending voltage because of the 90° phase relationships — the line acts as a resonant voltage divider below resonance. Worked scale: with $\\beta \\approx 1.05\\times10^{-3}$ rad/km (wavelength 6,000 km), a 300 km line gives $\\beta l = 0.314$ rad, $\\cos(\\beta l) = 0.951$, so $V_R = V_S/0.951 = 1.051 V_S$ — a 5% overvoltage at the open end. This is why long EHV lines use shunt reactors: they cancel charging Mvar and pin the open-end voltage down.",
      },
    ],
    examples: [
      {
        title: "Regulation of a 33 kV feeder at three power factors",
        problem: "A 33 kV (line-to-line) three-phase line has total series impedance $Z = 5 + j12\\ \\Omega$ per phase (short-line treatment). It delivers 10 MW at a load power factor of 0.8 lagging, with receiving-end voltage held at 33 kV line-to-line. Compute the sending-end voltage, the regulation, and the regulation if the power factor were unity, or 0.9 leading.",
        steps: [
          {
            label: "Step 1: Line current",
            text: "$I = \\dfrac{P}{\\sqrt{3}V_L\\cos\\phi} = \\dfrac{10\\times10^{6}}{\\sqrt{3}\\times 33{,}000 \\times 0.8} = 218.7$ A. Receiving-end phase voltage $V_R = 33{,}000/\\sqrt{3} = 19{,}052$ V.",
          },
          {
            label: "Step 2: Sending voltage at 0.8 lagging",
            text: "$V_S = V_R + I(R\\cos\\phi + X\\sin\\phi) = 19{,}052 + 218.7(5 \\times 0.8 + 12 \\times 0.6) = 19{,}052 + 218.7 \\times 11.2 = 21{,}502$ V per phase, i.e. $\\sqrt{3} \\times 21{,}502 = 37{,}245$ V line-to-line.",
          },
          {
            label: "Step 3: Regulation at 0.8 lagging",
            text: "Regulation $= (37{,}245 - 33{,}000)/33{,}000 = 12.9\\%$. On removing the load at constant $V_S$, the receiving end rises to 37.2 kV — a hefty sag caused mostly by the reactive drop across X (the X·sinφ term contributes 2.29 kV of the 2.45 kV per-phase rise).",
          },
          {
            label: "Step 4: Unity power factor",
            text: "With $\\cos\\phi = 1$, $\\sin\\phi = 0$: $V_S = 19{,}052 + 218.7 \\times 5 = 20{,}146$ V phase $= 34{,}896$ V line. Regulation $= (34{,}896-33{,}000)/33{,}000 = 5.7\\%$ — the reactance has vanished from the arithmetic because current is in phase with voltage.",
          },
          {
            label: "Step 5: 0.9 leading",
            text: "Now $\\sin\\phi = -0.436$: $V_S = 19{,}052 + 218.7(5\\times0.9 - 12\\times0.436) = 19{,}052 + 218.7\\times(4.5-5.23) = 18{,}893$ V phase $= 32{,}713$ V line — *below* the receiving end. Regulation $= (32{,}713-33{,}000)/33{,}000 = -0.87\\%$: leading current over-compensates the resistive drop, and the line becomes a voltage *source* rather than a sink — the Ferranti mechanism in miniature.",
          },
        ],
        result: "Sending voltage 37.2 kV and regulation +12.9% at 0.8 lagging; +5.7% at unity; −0.87% at 0.9 leading — power factor swings the same line from severe sag to slight rise, which is why utilities price reactive power.",
      },
    ],
    keyTakeaways: [
      "Model length chooses the circuit: series Z below ~80 km, nominal-π to ~250 km, distributed wave equations beyond.",
      "ABCD constants make lines cascadeable matrices; the short line is A = D = 1, B = Z, C = 0, and the long line replaces them with cosh/sinh.",
      "Regulation = (no-load − full-load receiving voltage)/full-load — positive for sag, negative for rise.",
      "The R cosφ ± X sinφ form shows why lagging loads suffer and leading loads compensate: the reactive term dominates.",
      "Ferranti rise at no load, $V_R = V_S/\\cos(\\beta l)$, is the standing-wave overvoltage that shunt reactors exist to suppress.",
    ],
    quiz: [
      {
        q: "A 50 Hz overhead line is 150 km long. Which model is appropriate, and what does it add over a series impedance?",
        options: [
          "Short-line model — capacitance never matters below 250 km",
          "Medium-line nominal-π — lumped shunt admittance, half at each end, since charging current is now significant",
          "Long-line distributed model with cosh/sinh constants",
          "A transformer-equivalent circuit, since 150 km is beyond the transmission limit",
        ],
        answer: 1,
        explanation: "150 km sits squarely in the 80-250 km medium band: charging current is worth including, but distributed wave effects are not, so the nominal-π (Y/2 at each end around Z) is the standard tool. Option 1 ignores capacitance at a length where it is percent-level; option 3 over-models — cosh/sinh is for beyond ~250 km; option 4 is category confusion.",
      },
      {
        q: "For a nominal-π medium line with total series impedance Z and total shunt admittance Y, which set of ABCD constants is correct?",
        options: [
          "A = 1, B = Z, C = 0, D = 1",
          "A = D = 1 + YZ/2, B = Z, C = Y(1 + YZ/4)",
          "A = D = cosh(γl), B = Z_c sinh(γl)",
          "A = D = 1 + YZ, B = Z/2, C = Y",
        ],
        answer: 1,
        explanation: "The nominal-π splits Y into halves at each end, which yields exactly $1 + YZ/2$ on the diagonal and $Y(1+YZ/4)$ in C. Option 1 is the short line (Y discarded); option 3 is the long line; option 4 misplaces the halves (Z is not split in a π network — it is in a T).",
      },
      {
        q: "Using the example's numbers: a 33 kV line with Z = 5+j12 Ω per phase delivers 10 MW at 0.8 lagging with V_R = 33 kV line-to-line. What is the approximate regulation?",
        options: [
          "About 5.7%",
          "About 12.9%",
          "About 18.6%",
          "About -0.9%",
        ],
        answer: 1,
        explanation: "I = 218.7 A; the R cosφ + X sinφ term is 11.2 Ω, giving V_S(phase) ≈ 21.5 kV (37.2 kV line) and regulation ≈ 12.9%. Option 5.7% is the unity-power-factor case of the same line — the X·sinφ term is the difference; option 3 double-counts the reactance; option -0.9% is the leading-pf regime.",
      },
      {
        q: "A 300 km, 50 Hz line has β ≈ 1.05×10⁻³ rad/km. At no load, by roughly what factor does receiving-end voltage exceed sending-end voltage (Ferranti effect)?",
        options: [
          "1.005 — negligible",
          "1.051 — V_R = V_S/cos(βl) with βl ≈ 0.314 rad",
          "1.314 — the radian measure of the electrical length itself",
          "0.951 — the receiving voltage is lower, not higher",
        ],
        answer: 1,
        explanation: "βl = 1.05×10⁻³ × 300 = 0.315 rad; V_R = V_S/cos(0.315) = V_S/0.951 = 1.051 V_S, a 5% rise. Option 4 quotes the cosine instead of its reciprocal — the Ferranti effect is a rise; option 3 confuses the angle with the factor; option 1 underestimates standing-wave action at 1/20 wavelength.",
      },
      {
        q: "A lightly loaded long EHV line shows excessive receiving-end voltage. What is the standard remedy and its mechanism?",
        options: [
          "Series capacitors, to cancel the line's inductance",
          "Shunt reactors at the receiving end, absorbing the line's charging Mvar and cancelling the Ferranti rise",
          "Raising the load power factor with capacitor banks",
          "Reducing conductor spacing to lower capacitance",
        ],
        answer: 1,
        explanation: "The overvoltage is capacitive: the line's charging current through its reactance lifts the far end. Shunt reactors draw inductive (lagging) Mvar that cancels the charging Mvar and pins the voltage. Option 1 addresses the *series* problem (transfer capability), not the shunt one; option 3 adds capacitance and worsens exactly the imbalance present; option 4 is a rebuild of the line to fix an operating condition — and lowering C also lowers SIL, missing the point.",
      },
      {
        q: "Why does a leading (capacitive) load current reduce, or even reverse, a line's voltage regulation?",
        options: [
          "It increases the resistive drop, which stabilizes the voltage",
          "The I·X·sinφ term becomes negative: the reactive drop across the series reactance subtracts from the resistive drop, and can over-compensate it",
          "Leading current reduces the line's capacitance, lowering charging current",
          "It raises the power factor, and high power factor always means zero regulation",
        ],
        answer: 1,
        explanation: "In $V_S = V_R + I(R\\cos\\phi + X\\sin\\phi)$, a leading load makes $\\sin\\phi < 0$, so the dominant reactive term reverses sign — the arithmetic of the worked example produced regulation of −0.87% this way. Option 3 is physically backwards; option 4 conflates two separate quantities — unity pf still left +5.7% regulation in the example.",
      },
    ],
  },

  // ================================================================ 10 ===
  {
    sectionId: "ee-e-ps1-s5",
    readingTime: 11,
    prerequisites: ["ee-e-ps1-s3"],
    intro: "Above roughly 220 kV, three quiet phenomena become loud engineering problems: air itself breaks down near the conductor surface (corona), the voltage across a string of insulator discs refuses to distribute itself evenly, and the sag of every span is a negotiation between steel, aluminium, wind, ice and temperature. None of these can be eliminated — corona is priced, string efficiency is engineered upward, and sag is calculated to the centimetre because clearance law allows nothing less. This section works all three with real numbers: a Peek-formula check on a 220 kV line, a three-disc string at 86.8% efficiency, and a 250 m span that doubles its sag under ice and wind.",
    objectives: [
      "State Peek's critical disruptive voltage and the factors that move it",
      "Analyze how corona loss varies with weather, altitude and conductor design",
      "Compute voltage distribution across a suspension string and its efficiency",
      "Explain grading and guard rings as string-efficiency remedies",
      "Calculate sag and tension for level spans, including wind and ice loading",
    ],
    concepts: [
      {
        term: "Corona and critical disruptive voltage",
        kind: "definition",
        statement: "**Corona** is local ionization of air when the conductor surface gradient exceeds air's dielectric strength (about 30 kV/cm peak, 21.1 kV/cm RMS). Peek's formula for the phase-to-neutral critical voltage is $$V_c = 21.1\\, m\\,\\delta\\, r\\,\\ln(D/r)\\ \\text{kV}$$ with $r$ the conductor radius in cm, $D$ the spacing, $m$ the surface irregularity factor and $\\delta$ the air-density factor.",
        detail: "Below $V_c$ the line is corona-free; above it, loss grows roughly with the square of the excess. The factor $m$ punishes dirty or stranded surfaces (0.85-0.95 for stranded, 1.0 for polished); $\\delta = 3.92b/(273+t)$ falls with altitude and heat, so mountain lines corona at lower voltage. Surface gradient, not voltage alone, is the physics — which is why the remedies are geometric: larger radius or bundles spread the charge over more surface.",
      },
      {
        term: "Corona loss and its factors",
        kind: "law",
        statement: "Above the critical voltage, Peek's empirical loss is $$P = 241\\times10^{-5}\\,\\frac{f+25}{\\delta}\\sqrt{\\frac{r}{D}}\\,(V - V_c)^2\\ \\text{kW/phase/km}$$ — quadratic in the over-voltage, rising with frequency, falling with air density, and multiplied by weather.",
        detail: "The controlling facts for practice: foul weather (rain, fog, snow) lowers the effective critical voltage — drops of water concentrate the field — so a line silent in clear air can lose megawatts and broadcast radio interference in a storm; loss grows with frequency (a 50 vs 60 Hz difference) and with conductor irregularity. Because $V_c \\propto r\\ln(D/r)$, increasing radius helps twice (higher $V_c$, lower gradient), while increasing spacing helps only weakly through the log and is limited by tower economics — bundling is the EHV answer, exactly as it was for inductance.",
      },
      {
        term: "Insulator strings and the uneven distribution",
        kind: "definition",
        statement: "A suspension string hangs from the tower (earthed) down to the conductor; each disc has mutual capacitance $C$ along the string, but each metal pin also has a stray capacitance to the tower, so **charging current leaks away down the string and the disc nearest the conductor takes the highest voltage**.",
        detail: "The pin-to-tower capacitance is the villain: the lowest unit carries the current charging all the units above it plus the stray paths, so its voltage is largest and it ages and flashes over first. The distribution is geometrically asymmetric — for three units with stray/self ratio $k = 0.1$, the voltages stand in the ratio $1 : 1.1 : 1.31$, the bottom disc taking ~31% more stress than the top. String efficiency $= \\dfrac{\\text{total string voltage}}{n \\times \\text{maximum unit voltage}} \\times 100\\%$ quantifies the departure from ideal sharing.",
      },
      {
        term: "Grading and guard rings",
        kind: "method",
        statement: "**Grading** restores even voltage distribution by making disc capacitances unequal (larger $C$ where current demand is larger, i.e. near the conductor), while a **guard (grading) ring** — a metal ring tied to the conductor around the string — adds capacitance *to the line* for the upper units, counteracting their leakage to earth.",
        detail: "The guard ring converts part of the stray current path from 'pin to tower' into 'ring to unit', effectively adding shunt capacitance toward line potential where it is needed; grading designs discs so that $C_j V_j$ is constant. Both push efficiency toward 100% for strings that would otherwise sit in the 80s; the practical ceiling is set by economics, since graded strings are non-standard hardware — most lines instead accept lower efficiency and simply add discs.",
      },
      {
        term: "Sag and tension — the parabolic working form",
        kind: "law",
        statement: "For a level span of length $L$ under uniform load $w$ per metre with horizontal tension $T$, the conductor hangs in a catenary, well approximated by a parabola whose mid-span **sag** is $$S = \\frac{wL^2}{8T}.$$",
        detail: "The catenary-exact and parabolic results differ by under 1% for everyday spans (sag under ~10% of span), which is why the parabola is the working formula. Two operational corollaries: sag is set at a chosen stringing temperature — cold weather tightens the conductor toward maximum tension while hot weather maximizes sag against clearance; and tension at the supports exceeds the horizontal tension by the conductor weight of the sagged length, a small correction the parabola also captures.",
      },
      {
        term: "Wind and ice loading",
        kind: "method",
        statement: "Ice adds vertical load (a radial coating on the conductor); wind adds horizontal load (pressure on the projected diameter); the effective weight is the vector sum $w_{eff} = \\sqrt{(w + w_{ice})^2 + w_{wind}^2}$, which replaces $w$ in the sag formula — and it can double or triple the sag.",
        detail: "Worked scale: a conductor weighing 1.1 kg/m with 10 mm of ice on a 20 mm diameter carries $\\pi/4\\,(D_i^2 - D^2)$ of ice volume per metre $= \\pi/4(0.04^2 - 0.02^2) \\approx 9.4\\times10^{-4}\\ \\text{m}^3$/m, about 0.86 kg/m at 915 kg/m³ — nearly doubling vertical load before wind adds its horizontal pull at $\\text{pressure} \\times \\text{iced diameter}$. Since $S \\propto w$, the sag scales linearly with this resultant. Tower design, insulator selection and clearance margins all price this storm case, not the fair-weather one.",
      },
    ],
    examples: [
      {
        title: "Three calculations for a 220 kV line",
        problem: "(a) A three-phase 220 kV line has equilateral spacing 4 m and conductor radius 1.5 cm; taking surface factor m = 0.85 and air density δ = 1, does it corona in fair weather? (b) A suspension string of three discs on this line spans 33 kV phase-to-neutral? Actually consider a disc string carrying 33 kV with stray-to-self capacitance ratio k = 0.1 — find the voltage across each disc and the string efficiency. (c) A level 250 m span of conductor weighing 1.1 kg/m is strung to 2,000 kgf horizontal tension; find the fair-weather sag and the sag with 10 mm radial ice (ice 915 kg/m³) plus 40 kg/m² wind pressure on the iced diameter.",
        steps: [
          {
            label: "Step 1: Corona check (a)",
            text: "$V_c = 21.1\\, m\\delta r \\ln(D/r) = 21.1 \\times 0.85 \\times 1 \\times 1.5 \\times \\ln(400/1.5) = 26.9 \\times 5.586 = 150.3$ kV phase-to-neutral, i.e. $\\sqrt{3} \\times 150.3 = 260$ kV line-to-line. The line's 220 kV is below 260 kV, so in fair weather the surface gradient stays subcritical — no corona. In rain, m effectively drops (water drops focus the field), pulling $V_c$ below 220 kV and switching corona on: the line is designed to be silent in fair weather and lossy in storms.",
          },
          {
            label: "Step 2: String voltages (b)",
            text: "Let $V_1, V_2, V_3$ be the top-to-bottom disc voltages and $k = 0.1$. Current balance at pin 1: $V_2 = V_1(1+k) = 1.1V_1$. At pin 2: $V_3 = V_2 + k(V_1+V_2) = 1.1V_1 + 0.1(2.1V_1) = 1.31V_1$. Sum: $V_1(1+1.1+1.31) = 3.41V_1 = 33$ kV, so $V_1 = 9.68$ kV, $V_2 = 10.65$ kV, $V_3 = 12.68$ kV.",
          },
          {
            label: "Step 3: String efficiency (b)",
            text: "$\\eta = \\dfrac{33}{3 \\times 12.68} \\times 100 = 86.8\\%$. If the discs shared ideally (11 kV each) the string would be worth its full catalogue rating; instead the bottom disc's 12.68 kV over-stress limits the string to 86.8% of it — the number a guard ring would push toward the mid-90s.",
          },
          {
            label: "Step 4: Fair-weather sag (c)",
            text: "$S = \\dfrac{wL^2}{8T} = \\dfrac{1.1 \\times (250)^2}{8 \\times 2000} = \\dfrac{68{,}750}{16{,}000} = 4.3$ m of sag under self-weight alone.",
          },
          {
            label: "Step 5: Storm sag (c)",
            text: "Ice: $w_{ice} = 915 \\times \\pi/4\\,(0.04^2-0.02^2) = 0.86$ kg/m; vertical total $= 1.1+0.86 = 1.96$ kg/m. Wind: $40 \\times 0.04 = 1.6$ kg/m horizontal. Resultant $w_{eff} = \\sqrt{1.96^2+1.6^2} = \\sqrt{6.41} = 2.53$ kg/m. Storm sag $= 4.3 \\times 2.53/1.1 = 9.9$ m — more than double the fair-weather value, which is why clearances are mandated against the loaded case.",
          },
        ],
        result: "(a) Fair-weather critical voltage ≈ 260 kV line-to-line exceeds 220 kV — corona-free until weather degrades the surface factor. (b) Disc voltages 9.68/10.65/12.68 kV, string efficiency 86.8%. (c) Sag rises from 4.3 m to 9.9 m under 10 mm ice plus 40 kg/m² wind.",
      },
    ],
    keyTakeaways: [
      "Corona begins when surface gradient exceeds ~21.1 kV RMS/cm; Peek's $V_c = 21.1m\\delta r\\ln(D/r)$ prices the threshold, and foul weather lowers it.",
      "Corona loss is quadratic in the over-voltage and worsens with frequency, altitude and surface dirt — radius and bundling are the real remedies.",
      "Stray pin-to-tower capacitance unbalances suspension strings: the disc nearest the conductor is most stressed, and efficiency $V/(nV_{max})$ falls as strings lengthen.",
      "Grading and guard rings restore balance by matching capacitance to current demand — pushing efficiency from the 80s toward unity.",
      "Sag $S = wL^2/8T$ scales linearly with the resultant of weight, ice and wind — storm loading, not fair weather, sizes clearances and towers.",
    ],
    quiz: [
      {
        q: "A three-disc suspension string carries 33 kV with stray (pin-to-tower) capacitance 20% of the disc self-capacitance (k = 0.2). Using V2 = 1.2V1 and V3 = V2 + k(V1+V2), what is the string efficiency?",
        options: [
          "About 92%",
          "About 78%",
          "About 67%",
          "About 100%",
        ],
        answer: 1,
        explanation: "V2 = 1.2V1; V3 = 1.2V1 + 0.2(2.2V1) = 1.64V1. Sum = 3.84V1 = 33 kV → V1 = 8.59 kV, V3 = 14.09 kV. Efficiency = 33/(3 × 14.09) = 78%. Option 2's mechanism note: larger k leaks more charging current to the tower and worsens the imbalance (compare 86.8% at k = 0.1). Option 1 corresponds to k ≈ 0.1; options 3 and 4 require k far from 0.2 or perfect grading.",
      },
      {
        q: "A level span of 200 m carries a conductor of 2 kg/m at a horizontal tension of 1,600 kgf. What is the mid-span sag?",
        options: [
          "3.1 m",
          "6.25 m",
          "12.5 m",
          "0.5 m",
        ],
        answer: 1,
        explanation: "S = wL²/(8T) = 2 × 40,000/(8 × 1600) = 80,000/12,800 = 6.25 m. Option 3 forgets the factor 8 (using 2T); option 1 halves correctly but mis-substitutes (it is the answer for T = 3,200); option 4 misplaces three orders of magnitude.",
      },
      {
        q: "Which change reduces corona loss on an EHV line most effectively, and why?",
        options: [
          "Reducing phase spacing, since it lowers the log term",
          "Increasing conductor radius or bundling — surface gradient falls because the same charge spreads over more surface, raising the critical voltage",
          "Stringing the line tighter to raise tension",
          "Using fewer, larger insulator discs per string",
        ],
        answer: 1,
        explanation: "Corona is a surface-gradient phenomenon: $V_c \\propto r\\ln(D/r)$ rises steeply with r, and bundles behave like a large effective conductor. Option 1 is backwards — closer spacing raises gradient; option 3 changes mechanical tension, not electric field; option 4 alters insulation, which sets flashover, not ionization at the conductor.",
      },
      {
        q: "Why does a transmission line that is corona-silent in clear air often become audible and lossy in rain?",
        options: [
          "Rain cools the conductor, raising air density past the critical value",
          "Water drops on the conductor concentrate the electric field, effectively lowering the surface irregularity factor m and hence the critical voltage below the operating voltage",
          "Rain shortens insulator strings, raising the line voltage",
          "Wet air conducts better, eliminating the need for ionization",
        ],
        answer: 1,
        explanation: "Each droplet is a field concentrator — the same physics as the irregularity factor — so the effective m drops in foul weather, V_c follows, and operation crosses above critical: audible hiss, power loss and radio interference appear. Option 1 misstates the density direction and magnitude; options 3 and 4 are not mechanisms of corona onset.",
      },
      {
        q: "A conductor weighs 1.0 kg/m. After a 10 mm radial ice coating its vertical load becomes 1.9 kg/m, and wind adds 0.8 kg/m horizontal. By what factor does the sag of a given span increase (tension unchanged)?",
        options: [
          "1.9 — the ice alone",
          "0.8 — the wind alone",
          "About 2.07 — the resultant of 1.9 vertical and 0.8 horizontal",
          "About 2.7 — the arithmetic sum of all loads",
        ],
        answer: 2,
        explanation: "Resultant $w_{eff} = \\sqrt{1.9^2+0.8^2} = \\sqrt{4.25} = 2.06$ kg/m; sag scales linearly with w, so the sag multiplies by 2.06/1.0. Loads add as vectors because the conductor deflects along the resultant — option 4's arithmetic sum overstates it, and options 1 and 2 take one component in isolation.",
      },
      {
        q: "What is the purpose of a guard (grading) ring on a suspension insulator string?",
        options: [
          "It shields the discs from rain, preventing wet-flashover",
          "It ties the string mechanically to the tower, sharing the conductor weight",
          "It adds capacitance from the line to the upper units, cancelling part of the stray pin-to-tower capacitance and equalizing the voltage distribution",
          "It reduces corona at the conductor by increasing the effective radius",
        ],
        answer: 2,
        explanation: "The ring, connected to line potential, deliberately capacitively couples the units that were losing charging current to the tower — restoring the current balance and raising string efficiency. Option 4 is the job of conductor hardware, not string rings; options 1 and 2 describe functions the ring does not perform.",
      },
    ],
  },

  // ================================================================ 11 ===
  {
    sectionId: "ee-e-ps1-s6",
    readingTime: 8,
    prerequisites: ["ee-e-ps1-s4"],
    intro: "Bulk power is a bulk commodity, and its transport obeys a brutal piece of arithmetic: for a given power, loss falls with the square of the voltage. That single fact pushed transmission from 132 kV to 220, 400 and now 765 kV and beyond, and it is why EHV lines wear bundled conductors and fight corona as a design constraint rather than a curiosity. In parallel, high-voltage DC grew from an expensive curiosity into the tool of choice for very long hauls, undersea cables and asynchronous ties — because DC terminals are costly but DC lines are cheap, and above some distance the line savings repay the converter stations. Between AC and DC sits the FACTS family — thyristor and IGBT equipment that reshapes AC line behaviour in real time. This section tours all three.",
    objectives: [
      "Quantify the loss and conductor-material benefit of raising transmission voltage",
      "Explain the roles of bundling, corona control and SIL at EHV",
      "Describe HVDC link configurations and converter technologies",
      "Compute the HVDC-versus-AC break-even distance",
      "Distinguish the compensation roles of shunt SVCs and series TCSCs",
    ],
    concepts: [
      {
        term: "Why EHV — the square-law",
        kind: "law",
        statement: "For a fixed power $P$ delivered at power factor, current $I \\propto 1/V$, so line loss $I^2R \\propto 1/V^2$ and conductor cross-section for a given loss $\\propto 1/V^2$: **raising the voltage quadruples the deliverable power for the same loss and conductor material**, or cuts loss to a quarter at the same power.",
        detail: "Worked comparison: transmitting the same power at 220 kV versus 400 kV scales the current by 220/400 = 0.55 and the loss by $(220/400)^2 = 0.3025$ — a 70% reduction for identical conductors. The same arithmetic on conductor area explains why an EHV circuit moves gigawatts on aluminum that would barely serve a city at 33 kV. The counter-forces: insulation cost, corona (which is why bundling is mandatory at EHV), taller towers, and the reactive-power problem — line charging grows with voltage until shunt reactors and switched shunts become part of the design.",
      },
      {
        term: "Bundling, corona and SIL at EHV",
        kind: "insight",
        statement: "Above ~220 kV the single conductor is no longer viable: surface gradient drives corona and audible noise, so phases are **bundled** (2-4 sub-conductors), which also lowers inductance, raises capacitance, and pushes the **surge impedance loading** $\\text{SIL} = V^2/Z_c$ to the multi-hundred-MW regime where EHV lines are happiest.",
        detail: "SIL is the load at which a line's series inductive and shunt capacitive effects cancel — the flat-voltage, natural operating point. Because $\\text{SIL} \\propto V^2$ and bundling lowers $Z_c$, a 400 kV bundled line has an SIL near 500-550 MW versus about 130 MW for a 220 kV single-conductor line. Loading below SIL charges the line (voltage rise — the Ferranti regime of the previous section); loading above it drains the line (voltage sag): EHV grid operation is largely the management of this balance with compensation.",
      },
      {
        term: "HVDC link configurations",
        kind: "definition",
        statement: "An **HVDC link** connects converter stations (AC↔DC) over a DC line or cable: **monopolar** (one conductor, earth/sea return), **bipolar** (two conductors at ±V, earth return only in emergencies — the standard long-haul form), and **homopolar** (two conductors at the same polarity with permanent earth return).",
        detail: "Bipolar is the workhorse: each pole carries half the power, so a pole outage halves capacity rather than zeroing it, and the two poles' currents nearly cancel in the earth return. Line-commutated converters (thyristor, LCC) are the mature, gigawatt-scale technology but need a strong AC grid and consume reactive power; voltage-source converters (IGBT, VSC/MMC) offer independent P/Q control, black-start capability and compact offshore footprints at somewhat higher losses — the enabling technology of offshore wind export.",
      },
      {
        term: "HVDC economics — break-even distance",
        kind: "method",
        statement: "DC lines and cables are cheaper per km than AC (fewer conductors, no reactive charging, narrower right-of-way) but converter stations cost far more than AC substations — so there is a **break-even distance** at which the line savings exactly repay the terminal penalty: $d = (C_{dc,term} - C_{ac,term})/(c_{ac,km} - c_{dc,km})$.",
        detail: "Worked numbers: if an AC line costs $250k/km against $150k/km for DC, while AC substations cost $50M against $130M for converter stations, break-even is $(130-50)/(250-150) = 0.08$ → wait — in consistent units, $(130\\text{M}-50\\text{M})/(0.25\\text{M}-0.15\\text{M})\\ \\text{per km} = 80\\text{M}/0.10\\text{M} = 800$ km: below 800 km AC is cheaper, above it DC wins. For submarine cables the break-even is far shorter — a few tens of km — because AC cable charging current consumes the cable's capacity within tens of kilometres, which is why every long sea link is DC.",
      },
      {
        term: "SVC — shunt compensation",
        kind: "definition",
        statement: "A **static var compensator** is a shunt-connected bank of thyristor-controlled reactors (TCR) and thyristor-switched capacitors (TSC) that injects or absorbs reactive power at a bus within milliseconds to hold its voltage under varying load.",
        detail: "The TCR phase-controls a reactor for continuously variable absorption; TSCs switch capacitor steps for injection; together they form a fast, loss-reasonable var tap. Mechanically switched capacitors alone are too slow for voltage dips and transients — the SVC's millisecond response is what makes it a *dynamic* voltage support, applied at weak buses, near large industrial furnaces and arcs, and along EHV corridors where rapid var swings would otherwise destabilize voltage.",
      },
      {
        term: "TCSC — series compensation",
        kind: "definition",
        statement: "A **thyristor-controlled series capacitor** inserts a controllable capacitive reactance *in series* with the line, directly reducing the effective $X$ and therefore raising the transfer capability $P = V_1V_2\\sin\\delta/X$ — and damping power oscillations by modulating that reactance.",
        detail: "Series compensation acts on the cause (line reactance) rather than the symptom (bus voltage): compensating 40% of a 100 Ω line leaves 60 Ω effective and lifts the steady-state transfer limit by 100/60 ≈ 1.67×, at a fraction of the cost of a new circuit. The thyristor control adds what fixed series capacitors lack — dynamic modulation for oscillation damping and subsynchronous-resonance mitigation — though SSR interaction with turbine shafts is the classic hazard that TCSC control laws were invented to manage.",
      },
    ],
    examples: [
      {
        title: "Voltage upgrade and a DC break-even",
        problem: "A utility transmits 500 MW over 300 km. (a) Compare the line losses at 220 kV versus 400 kV for the same conductor resistance. (b) A 1,000 km corridor is planned: the AC option costs $250k per km for lines plus $50M in substations; the DC option costs $150k per km plus $130M for converter stations. Which is cheaper, and where is the break-even? (c) A 100 Ω reactance AC corridor needs 40% series compensation — what happens to its transfer capability?",
        steps: [
          {
            label: "Step 1: Square-law losses (a)",
            text: "For the same P and power factor, current scales as 1/V: $I_{400} = (220/400)I_{220} = 0.55I_{220}$. Loss scales as $I^2R$: $(220/400)^2 = 0.3025$ — the 400 kV alternative loses 30.25% of the 220 kV losses, a 70% reduction, with identical conductor capital.",
          },
          {
            label: "Step 2: Option costs over 1,000 km (b)",
            text: "AC: $250k \\times 1000 + 50\\text{M} = 250\\text{M} + 50\\text{M} = 300\\text{M}$. DC: $150k \\times 1000 + 130\\text{M} = 150\\text{M} + 130\\text{M} = 280\\text{M}$. DC is $20M cheaper at this corridor length.",
          },
          {
            label: "Step 3: Break-even distance (b)",
            text: "Solve $250d + 50 = 150d + 130$ (in $M, with d in km ×10⁻³ — equivalently in consistent units): $100d = 80$, so $d = 800$ km. Below 800 km the AC option's cheaper terminals win; above it, DC's cheaper line dominates — and the 1,000 km corridor sits comfortably past the crossing.",
          },
          {
            label: "Step 4: Series compensation arithmetic (c)",
            text: "40% compensation of 100 Ω inserts 40 Ω capacitive, leaving $X_{eff} = 60\\ \\Omega$. Transfer capability at given voltages and angle: $P \\propto 1/X$, so capability rises by $100/60 = 1.67$ — two-thirds more power on existing conductors, towers and right-of-way, with the TCSC's control adding oscillation damping on top.",
          },
        ],
        result: "(a) 400 kV cuts losses to 30.25% of the 220 kV case for the same conductors. (b) DC wins by $20M over 1,000 km; break-even at 800 km. (c) 40% series compensation lifts the corridor's transfer capability by a factor of 1.67.",
      },
    ],
    keyTakeaways: [
      "Loss and conductor material scale as $1/V^2$ — the fundamental engine of EHV transmission.",
      "Bundling is what makes EHV buildable: it tames surface gradient (corona, noise) while lowering reactance and raising SIL.",
      "HVDC's ledger: expensive terminals, cheap line — break-even at hundreds of km on land, tens of km for submarine cables.",
      "Bipolar DC links degrade gracefully (half power per pole outage); LCC and VSC converter families serve different grid needs.",
      "SVCs support bus voltage with fast vars; TCSCs cancel series reactance and raise transfer limits directly — shunt treats symptoms, series treats cause.",
    ],
    quiz: [
      {
        q: "A corridor transmits the same power first at 132 kV, then upgraded to 220 kV with the same conductors. Roughly what happens to the line's I²R losses?",
        options: [
          "They fall to 60% of before (the voltage ratio)",
          "They fall to 36% of before — (132/220)²",
          "They are unchanged, since the conductor resistance is the same",
          "They double, because higher voltage always means higher losses",
        ],
        answer: 1,
        explanation: "Current scales as 1/V → 132/220 = 0.60; loss scales as current squared → 0.36, i.e. a 64% reduction. Option 1 applies the ratio once instead of squaring; option 3 forgets that loss depends on current, not on resistance alone; option 4 contradicts the square-law outright.",
      },
      {
        q: "An AC line option costs $260k/km with $60M of substations; a DC option costs $180k/km with $150M of converter stations. What is the break-even distance?",
        options: [
          "About 375 km",
          "About 1,125 km",
          "About 2,250 km",
          "DC is always cheaper, so there is no break-even",
        ],
        answer: 1,
        explanation: "Break-even solves $260d + 60\\text{M} = 180d + 150\\text{M}$ → $80d = 90\\text{M}$ → $d = 1{,}125$ km (with d in km and the per-km costs in $M/km$ consistently). Option 3 doubles the terminal difference; option 1 inverts the ratio of line savings; option 4 ignores that the terminal penalty makes DC *more* expensive below the crossing.",
      },
      {
        q: "Why are long submarine power links almost universally HVDC rather than AC?",
        options: [
          "Water conducts DC better than AC",
          "AC cable shunt capacitance draws charging current that consumes the cable's rating within tens of kilometres, while DC has no capacitive charging — so the cable break-even distance is very short",
          "DC cables do not require insulation",
          "AC cannot be generated at sea, so conversion is mandatory anyway",
        ],
        answer: 1,
        explanation: "A cable's close conductor spacing gives it large capacitance per km; at AC this draws charging current that both heats the cable and erodes deliverable power, limiting practical AC cable length. DC carries no steady charging current, so long sea crossings jump to DC after only tens of kilometres of break-even. Options 1, 3 and 4 are physically false.",
      },
      {
        q: "A 100 Ω line receives 40% thyristor-controlled series compensation. By what factor does its steady-state transfer capability (at the same voltages and load angle) increase?",
        options: [
          "1.25",
          "1.67",
          "2.5",
          "4.0",
        ],
        answer: 1,
        explanation: "Compensation cancels 40 Ω, leaving $X_{eff} = 60\\ \\Omega$; since $P = V_1V_2\\sin\\delta/X$, capability scales as $100/60 = 1.67$. Option 3 mistakes the reactance reduction (a 0.6 factor) for its reciprocal squared; option 4 divides by the compensated portion (40 Ω) instead of the remaining reactance.",
      },
      {
        q: "A weak bus suffers voltage sags when a nearby arc furnace starts. Which FACTS device is the textbook fit, and why?",
        options: [
          "TCSC — it lowers the series reactance feeding the furnace",
          "SVC — its millisecond TCR/TSC action injects or absorbs vars at the bus to hold voltage through fast load swings",
          "A fixed shunt capacitor — largest vars per dollar",
          "An HVDC link — isolating the bus from all disturbances",
        ],
        answer: 1,
        explanation: "The problem is fast, local reactive imbalance, which is exactly the SVC's design point: continuously variable var injection/absorption within milliseconds. A fixed capacitor (option 3) is the too-slow, uncontrolled alternative; a TCSC (option 1) acts on line transfer, not bus voltage support; an HVDC link (option 4) is a transmission corridor solution, wildly disproportionate for flicker control.",
      },
    ],
  },

  // ================================================================ 12 ===
  {
    sectionId: "ee-e-ps1-s7",
    readingTime: 9,
    prerequisites: ["ee-e-ps1-s2"],
    intro: "Power systems do not merely generate — they commit, dispatch and reserve. Which units are switched on tomorrow (unit commitment), how the running units share the load right now (economic dispatch), and how much spinning capacity stands ready for the next trip (reserve) are three distinct optimization problems with distinct costs and timescales. The central result of dispatch is beautifully simple: load the units until their incremental costs are equal. Around that result live the messy realities — start-up costs, minimum up and down times, and the crossover loads at which a second unit earns its keep.",
    objectives: [
      "Characterize base, intermediate and peak-load plant by cost structure and duty",
      "Derive and apply the equal-incremental-cost dispatch rule",
      "Compute the crossover load at which a second unit is committed",
      "Distinguish economic dispatch from unit commitment",
      "Size spinning reserve against the largest-unit contingency",
    ],
    concepts: [
      {
        term: "Base, intermediate and peak plant",
        kind: "definition",
        statement: "**Base-load stations** (nuclear, large supercritical coal, run-of-river hydro) have high capital and low incremental cost and run nearly continuously; **peak-load plant** (gas turbines, reservoir hydro) has low capital and high incremental cost and runs only at the load curve's peaks; **intermediate plant** fills the shoulder.",
        detail: "The economics follow the load-curve geometry of the earlier section: high-load-factor energy wants capital-heavy plant (the fixed charges spread over many hours), while brief peaks want plant whose cost is almost entirely fuel — cheap to own, expensive to run, and therefore run rarely. Pumped storage straddles the classes by buying energy at valley prices and selling at peaks. The generation mix is thus the load curve's cost reflection, and each plant's duty cycle is legible from where it sits on the merit order.",
      },
      {
        term: "Incremental cost and the equal-λ rule",
        kind: "law",
        statement: "For units with cost curves $C_i(P_i)$ sharing a load, total cost $\\sum C_i(P_i)$ is minimized subject to $\\sum P_i = P_D$ when every online unit runs at the same **incremental cost** $\\lambda$: $$\\frac{dC_1}{dP_1} = \\frac{dC_2}{dP_2} = \\dots = \\lambda,$$ loading each unit until the next megawatt costs the same everywhere.",
        detail: "The Lagrange-multiplier logic: if two units' incremental rates differ, move a megawatt from the dearer to the cheaper and cost falls — so the optimum is where they equalize (or a limit binds). $\\lambda$ is then the system's marginal price of energy: the cost of serving the next megawatt-hour. With quadratics $C_i = a_iP_i^2 + b_iP_i + c_i$, the incremental rates are linear, $2a_iP_i + b_i$, and the equal-λ solution is one linear system — the workhorse of every dispatch text and, at scale, of every market-clearing engine.",
      },
      {
        term: "Crossover load",
        kind: "method",
        statement: "As system load rises, the second unit is committed when the loaded first unit's incremental cost climbs to meet the second's *initial* incremental cost — the **crossover point**: below it, one unit alone is optimal; above it, both run and share at equal λ.",
        detail: "With unit 1 on IC $= 0.02P_1 + 15$ and unit 2 on IC $= 0.03P_2 + 20$, unit 1 starts cheaper (15 < 20) and loads alone until $0.02P_1 + 15 = 20$, i.e. $P_1 = 250$ MW — the crossover. Beyond 250 MW, both units run with equal λ. This is the bridge between dispatch (continuous MW) and commitment (on/off): the crossover is where the discrete decision changes, before start-up costs and minimum-run constraints complicate it further.",
      },
      {
        term: "Unit commitment",
        kind: "definition",
        statement: "**Unit commitment** is the hour-by-hour schedule of which units start and stop across the planning horizon, respecting start-up and shut-down costs, minimum up/down times, ramp limits and reserve — a mixed-integer problem, unlike the continuous dispatch it contains.",
        detail: "A peaker with a $1,200 warm start is worth starting only if the day's peak-hours savings exceed it; a base unit may be more economical left running overnight at its minimum load than cycled, once start-up fuel, thermal stress and the minimum-down window are priced. Spinning reserve — capacity online and instantly available — is a commitment constraint, not a dispatch one: typically at least the largest online unit, so its trip can be absorbed without load shed.",
      },
      {
        term: "Spinning reserve and reliability",
        kind: "insight",
        statement: "**Spinning reserve** is synchronized, headroom capacity held against contingencies; the canonical criterion is that reserve must cover the loss of the largest online unit, so systems with one 660 MW machine among 300 MW machines carry 660 MW of headroom.",
        detail: "Reserve is insurance with a running premium: headroom held online is capacity not selling energy, and beyond the largest-unit rule some systems add a fraction of forecast load for forecast error. The load curve's daily shape means reserve is cheapest to hold where part-loaded plant already exists — which feeds back into the commitment decision: peakers kept warm through the evening peak provide both energy and the reserve the largest-unit rule demands.",
      },
    ],
    examples: [
      {
        title: "Dispatching two units through a day",
        problem: "Two units serve a system: Unit 1, $C_1 = 0.01P_1^2 + 15P_1 + 100$ $/h, maximum 400 MW; Unit 2, $C_2 = 0.015P_2^2 + 20P_2 + 150$ $/h, maximum 200 MW. Find the optimal split and hourly cost at (a) a 250 MW valley load and (b) a 350 MW evening peak; find the crossover load; and (c) decide whether to commit unit 2 for a day whose load stays at 350 MW for 6 peak hours if its start-up cost is $1,200.",
        steps: [
          {
            label: "Step 1: Incremental rates",
            text: "$IC_1 = dC_1/dP_1 = 0.02P_1 + 15$ $/MWh; $IC_2 = 0.03P_2 + 20$ $/MWh. Unit 1 is cheaper at zero load (15 < 20), so it loads first.",
          },
          {
            label: "Step 2: Crossover load",
            text: "Unit 2 enters when $IC_1$ reaches $IC_2$ at $P_2 = 0$: $0.02P_1 + 15 = 20 \\Rightarrow P_1 = 250$ MW. Below 250 MW only unit 1 runs; the 250 MW valley load sits exactly at the crossover — unit 2 contributes nothing, $P_1 = 250$, $P_2 = 0$.",
          },
          {
            label: "Step 3: Valley cost (a)",
            text: "$C_1(250) = 0.01(62{,}500) + 15(250) + 100 = 625 + 3{,}750 + 100 = 4{,}475$ $/h — about $17.9/MWh averaged over the load.",
          },
          {
            label: "Step 4: Peak dispatch (b)",
            text: "At 350 MW both run: $0.02P_1 + 15 = 0.03P_2 + 20$ with $P_1 + P_2 = 350$. From the first, $P_1 = 1.5P_2 + 250$; substituting, $2.5P_2 = 100 \\Rightarrow P_2 = 40$, $P_1 = 310$ MW. Check: $IC_1 = 0.02(310)+15 = 21.2$; $IC_2 = 0.03(40)+20 = 21.2$ — equal. Costs: $C_1 = 0.01(96{,}100)+15(310)+100 = 5{,}711$ $/h; $C_2 = 0.015(1{,}600)+20(40)+150 = 974$ $/h; total $6{,}685$ $/h ($19.1/MWh).",
          },
          {
            label: "Step 5: Commitment decision (c)",
            text: "Serving 350 MW on unit 1 alone is impossible (max 400? it fits — but check the cost): $C_1(350) = 0.01(122{,}500)+15(350)+100 = 1{,}225+5{,}250+100 = 6{,}575$ $/h — *cheaper* than 6,685! Single-unit running is 6,575 < 6,685 $/h. But unit 1 alone at 350 MW leaves zero spinning reserve and violates the largest-unit rule; and per MWh it is 18.8 vs 19.1 $. The $110/h saving cannot buy the reliability: commit unit 2, absorb the $1,200 start (amortized over 6 h = 200 $/h, which the reserve benefit and lower λ justify), and note that pure-energy arithmetic alone would have kept unit 2 off — reliability constraints, not cost curves, decide it.",
          },
        ],
        result: "Crossover at 250 MW; valley 250 MW runs unit 1 alone at 4,475 $/h; peak 350 MW dispatches as $P_1 = 310$, $P_2 = 40$ MW at $\\lambda = 21.2$ $/MWh costing 6,685 $/h; unit 2 is committed despite single-unit energy being marginally cheaper, because spinning reserve against the largest-unit contingency requires it.",
      },
    ],
    keyTakeaways: [
      "Plant classes mirror the load curve: capital-heavy base units for high-load-factor energy, fuel-heavy peakers for the peaks.",
      "Equal incremental cost (equal λ) is the dispatch optimum; λ is the system's marginal energy price.",
      "Crossover load marks where commitment flips: load the cheap unit until its incremental rate meets the next unit's entry rate.",
      "Unit commitment is the discrete, start-up-cost-aware layer above dispatch; minimum up/down times make cycling expensive.",
      "Spinning reserve sized to the largest online unit is a constraint that can override pure energy economics.",
    ],
    quiz: [
      {
        q: "Two units have incremental costs $IC_1 = 0.04P_1 + 8$ and $IC_2 = 0.08P_2 + 6$ $/MWh. For a 130 MW load (both units online, no limits binding), what is the optimal dispatch?",
        options: [
          "P1 = 90, P2 = 40, λ = 11.6 $/MWh",
          "P1 = 70, P2 = 60, λ = 10.8 $/MWh",
          "P1 = 65, P2 = 65, λ = 10.6 $/MWh",
          "P1 = 130, P2 = 0, λ = 13.2 $/MWh",
        ],
        answer: 1,
        explanation: "Equal-λ plus the power balance: $0.04P_1+8 = 0.08P_2+6$ gives $P_1 = 2P_2-50$; with $P_1+P_2 = 130$, $P_2 = 60$, $P_1 = 70$, and $\\lambda = 0.04(70)+8 = 10.8$ (check: $0.08(60)+6 = 10.8$). Option 1 does not equalize λ (11.6 vs 9.2); option 3 splits evenly, which equal-λ almost never implies; option 4 ignores that unit 2 is cheaper at low output.",
      },
      {
        q: "Unit A has high capital cost and very low incremental cost; Unit B is cheap to build and expensive to run. Which roles fit?",
        options: [
          "A for peak load, B for base load",
          "A for base load, B for peak load",
          "Both for base load",
          "Both for peak load",
        ],
        answer: 1,
        explanation: "High capital is tolerable only when spread over many running hours (base), while high incremental cost is tolerable only if incurred rarely (peaks). Option 1 reverses the economics; options 3 and 4 ignore that the cost structures are complementary — the mix exists precisely because the load curve has both a fat base and thin peaks.",
      },
      {
        q: "In the worked example, why was unit 2 committed at the 350 MW peak even though running unit 1 alone cost slightly less per hour?",
        options: [
          "Because unit 1 cannot physically reach 350 MW",
          "Because spinning reserve must cover the largest online unit, and a single unit at 350 MW leaves zero headroom for its own trip",
          "Because equal-λ dispatch always requires all units online",
          "Because start-up costs are sunk and therefore irrelevant",
        ],
        answer: 1,
        explanation: "Reliability, not energy cost, decided: one unit carrying the entire load is one trip away from a system blackout, so the largest-unit reserve criterion demands a second machine online. Option 1 is false (the max is 400 MW); option 2 is the actual constraint; option 3 confuses the dispatch rule (which applies to units already online) with commitment; option 4 states why start-up cost was *not* the blocker, not why the unit was committed.",
      },
      {
        q: "With unit 1 on $IC_1 = 0.02P_1 + 15$ and unit 2 on $IC_2 = 0.03P_2 + 20$ $/MWh, at what load does the second unit enter the optimal dispatch?",
        options: [
          "At zero load — both units always share",
          "At 250 MW, where unit 1's incremental cost reaches unit 2's entry rate of 20",
          "At 500 MW, where the incremental rates are equal at equal outputs",
          "Only when unit 1 reaches its 400 MW limit",
        ],
        answer: 1,
        explanation: "Unit 1 is cheaper from the first megawatt (15 < 20) and loads alone; unit 2 becomes competitive once $0.02P_1+15$ rises to 20, i.e. at $P_1 = 250$ MW — the crossover load. Option 4 is the hard-limit case, which sits far above the economic crossover; options 1 and 3 contradict the entry-rate logic.",
      },
      {
        q: "A system consists of several 300 MW units and one 660 MW unit. What spinning reserve must be carried, and why that number?",
        options: [
          "300 MW — the size of the majority of units",
          "660 MW — the loss of the largest online unit must be absorbable without shedding load",
          "Zero — reserves are only needed when units are old",
          "Half the system load, by convention",
        ],
        answer: 1,
        explanation: "The canonical criterion sizes reserve to the single largest contingency: if the 660 MW machine trips, synchronized headroom must replace it instantly. Averaging unit sizes (option 1) under-covers the actual worst case; options 3 and 4 are neither criterion nor rationale.",
      },
    ],
  },

  // ================================================================ 13 ===
  {
    sectionId: "ee-e-ps1-s8",
    readingTime: 7,
    prerequisites: ["ee-e-ps1-s2"],
    intro: "Topology is reliability made visible. A radial network is a tree: simple, cheap, and broken by any single fault upstream of you. A ring main offers every consumer two supply paths, so one fault costs a switching operation instead of an outage. An interconnected grid multiplies the paths, and with them the dividends of diversity — peaks that do not coincide, reserves that can be shared, and frequency held by a thousand machines' inertia rather than a few. This section compares the topologies quantitatively and shows why interconnection is the closest thing grid engineering has to a free lunch.",
    objectives: [
      "Describe radial, ring-main and interconnected transmission topologies",
      "Compute parallel-path availability and expected outage hours",
      "Explain how interconnection exploits load diversity and reserve sharing",
      "Compare the topologies on cost, protection complexity and reliability",
      "Select a topology for a given load and reliability requirement",
    ],
    concepts: [
      {
        term: "Radial systems",
        kind: "definition",
        statement: "In a **radial** system each consumer is fed by exactly one path from the source — a tree with power flowing outward — making it the cheapest topology to build and the least reliable to serve, since any fault on the path interrupts every consumer downstream of it.",
        detail: "Rural distribution and sparsely loaded areas accept radial layout because the alternative (duplicate paths) doubles conductor investment for few customers. The standard mitigation is sectionalizing: fuses and reclosers partition the feeder so a fault isolates only its own segment, and a normally-open tie to an adjacent feeder can restore the healthy sections by switching — reliability is bought back in pieces rather than by duplication.",
      },
      {
        term: "Ring mains",
        kind: "definition",
        statement: "A **ring main** closes the feeder on itself so every load can be reached from either direction around the ring: under normal operation the ring may be run closed (both paths sharing load) or open at one point, and a single fault leaves every healthy section suppliable after one switching action.",
        detail: "The ring is the classic distribution-level reliability upgrade: with sectionalizing points on each arc, a faulted section is isolated and all loads are re-fed from the other side of the ring. The cost is roughly one extra path over the radial skeleton plus switchgear at each node, and protection is more demanding — directional or graded relays rather than simple fuses, because fault current can arrive from either side.",
      },
      {
        term: "Interconnected (mesh) transmission",
        kind: "definition",
        statement: "A **meshed grid** provides multiple paths between major nodes so power flows redistribute around any single line outage — N-1 security: the loss of any one element leaves all demand served, at the price of complex protection, load-flow management and stability coordination.",
        detail: "Interconnection buys four distinct dividends: reliability (parallel paths), diversity (non-coincident peaks reduce the installed capacity the interconnected system must carry), reserve sharing (one pool of spinning reserve serves all members, sized to the largest single contingency rather than each area's own), and frequency stability (more synchronized inertia means each perturbation moves the whole less). The costs are equally structural: fault levels rise with every interconnection, protection must distinguish fault direction in a mesh, and a disturbance can propagate — which is why meshed grids are deliberately operated with transfer limits and stability margins.",
      },
      {
        term: "Parallel-path availability arithmetic",
        kind: "method",
        statement: "If each of two independent paths has availability $A$, the dual-path (ring or meshed) availability is $1-(1-A)^2$ — e.g. two 0.98 paths give $1-0.02^2 = 0.9996$ — and expected outage hours fall from $(1-A)\\times 8760$ to $(1-A)^2 \\times 8760$.",
        detail: "The square-law is dramatic at scale: a single 98%-available feeder is out 175 h/year, while a two-path supply of the same elements is out $0.0004 \\times 8760 = 3.5$ h/year — fifty times better without any element being improved. The honesty clauses: the paths must fail independently (shared towers, shared substations or shared protection systems break the arithmetic), and the switching must actually work when called upon — which is why auto-reclosing and remote switching shorten not the failure rate but the exposure duration.",
      },
      {
        term: "Diversity and reserve sharing across interconnections",
        kind: "insight",
        statement: "Interconnected areas need capacity for their **coincident** peak, not the sum of their individual peaks — the diversity factor of the earlier economics section applied at system scale — and a shared reserve pool sized to the largest single contingency replaces each area's private reserve.",
        detail: "Worked numbers: two areas peak at 300 MW (at 18:00) and 240 MW (at 20:00); the sum of individual peaks is 540 MW, but the coincident system peak is 480 MW — interconnection saves 60 MW of installed capacity outright. On reserve: each area alone must carry headroom for its own largest unit (say 120 MW each); interconnected, one shared 120-150 MW pool covers both, halving the insurance premium. The tie-lines must be rated to wheel these savings, which is the engineering constraint under all the economics.",
      },
    ],
    examples: [
      {
        title: "Pricing the topology upgrade",
        problem: "An industrial estate is fed radially by a feeder with availability 0.98 (expected outage 175 h/yr, average repair 4 h per outage). The utility offers a ring-main upgrade adding a second independent 0.98 path with sectionalized switching (5 min per switching operation). Separately, the utility's two grid areas peak at 300 MW (18:00) and 240 MW (20:00) with a coincident peak of 480 MW; each area privately carries 120 MW of reserve. Quantify the ring upgrade and the interconnection dividends.",
        steps: [
          {
            label: "Step 1: Ring availability",
            text: "Two independent paths at $A = 0.98$: $A_{ring} = 1-(1-0.98)^2 = 1-0.0004 = 0.9996$. Expected outage hours fall from $0.02 \\times 8760 = 175.2$ h to $0.0004 \\times 8760 = 3.5$ h per year — a fifty-fold improvement with every element unchanged.",
          },
          {
            label: "Step 2: What the ring changes operationally",
            text: "A faulted section is isolated by its sectionalizers and all healthy loads are re-fed from the other arc: customers see minutes (the 5-minute switching), not the 4-hour repair. The 3.5 h/yr residual covers double faults and common-mode events the independence assumption ignores.",
          },
          {
            label: "Step 3: Interconnection capacity dividend",
            text: "Sum of individual peaks = 300 + 240 = 540 MW; coincident peak = 480 MW. The interconnected system installs for 480 MW (plus its own reserve), saving 60 MW of plant — pure diversity, worth the full capital cost of 60 MW of capacity for the price of tie-lines.",
          },
          {
            label: "Step 4: Reserve sharing dividend",
            text: "Isolated: each area carries 120 MW of reserve, 240 MW total across the system. Interconnected with tie-lines rated to transfer it, one shared pool of 120-150 MW (the largest single contingency plus margin) covers both areas — roughly half the insurance, with the same reliability standard.",
          },
        ],
        result: "The ring upgrade lifts availability from 0.98 to 0.9996 (175 h/yr → 3.5 h/yr expected outage, with switching minutes instead of repair hours for single faults); interconnection saves 60 MW of capacity through peak diversity and about half the reserve through sharing.",
      },
    ],
    keyTakeaways: [
      "Radial is cheapest and least reliable: every consumer inherits every upstream fault.",
      "Ring mains give each load two paths — a single fault costs a switching operation, not an outage, at modest extra cost and more complex protection.",
      "Meshed interconnection delivers N-1 security, peak diversity, shared reserve and shared inertia — at the price of fault levels and protection complexity.",
      "Two independent 0.98 paths give 0.9996 availability: reliability squares while no component improves, provided failures are truly independent.",
      "Interconnection serves the coincident peak, not the sum of peaks — diversity and reserve sharing are its permanent dividends.",
    ],
    quiz: [
      {
        q: "A radial feeder has availability 0.98. If a second independent path of the same availability is added in parallel (ring), what is the new availability and expected annual outage time?",
        options: [
          "0.98 and about 175 h — reliability is set by the worse path",
          "0.9996 and about 3.5 h",
          "1.00 — redundancy removes outages entirely",
          "0.96 and about 350 h — two paths double the failure opportunities",
        ],
        answer: 1,
        explanation: "Parallel independent paths fail together only when both fail: $1-(1-0.98)^2 = 0.9996$, and $0.0004 \\times 8760 = 3.5$ h/yr. Option 1 describes series (radial) composition; option 3 ignores common-mode and double faults; option 4 computes the series case for two elements — the direction of composition is the whole question.",
      },
      {
        q: "Two interconnected areas individually peak at 300 MW and 240 MW at different hours; the coincident system peak is 480 MW. How much installed capacity does interconnection save, and what is the mechanism?",
        options: [
          "60 MW — non-coincident peaks mean the system serves the coincident peak rather than the 540 MW sum",
          "540 MW — each area can now rely entirely on the other",
          "120 MW — the average of the two peaks",
          "Zero — capacity must still cover each area's own peak separately",
        ],
        answer: 0,
        explanation: "Diversity in action: 540 − 480 = 60 MW of plant never needs to exist because the areas lean on each other at their different peak hours — provided the tie-lines can wheel the difference. Options 2 and 3 have no mechanism; option 4 denies the diversity that interconnection exists to harvest.",
      },
      {
        q: "What is the principal drawback of upgrading a distribution network from radial to ring-main, beyond conductor cost?",
        options: [
          "Ring mains cannot supply three-phase loads",
          "Fault current can be fed from either direction, so protection needs directional/graded relaying and sectionalizing instead of simple fuses",
          "The ring must be physically circular in geography",
          "Voltage regulation becomes impossible",
        ],
        answer: 1,
        explanation: "The ring's reliability dividend is paid for in protection complexity: with sources on both sides, faults must be located and isolated directionally, and coordination across the normally-open point is a real engineering task. Options 1 and 4 are false; option 3 confuses electrical topology with map geometry — 'ring' is schematic, and most rings run open at a chosen point precisely to simplify protection.",
      },
      {
        q: "A metropolitan transmission network with multiple 400 kV corridors and inter-area ties is best described as which topology, and what operating standard does it imply?",
        options: [
          "Radial — cheap tree feeding outward from one hub",
          "Ring main — a single closed loop with one normally-open point",
          "Interconnected mesh — multiple paths per node, operated to N-1 security where any single element can be lost without load shedding",
          "Point-to-point HVDC — a dedicated link per consumer",
        ],
        answer: 2,
        explanation: "Dense multi-corridor transmission is a mesh: redundancy is intrinsic, and the operating discipline is N-1 (even N-2 in critical cores) — every line, transformer or generator must be expendable at all times within transfer limits. Options 1 and 2 describe lower tiers of the topology ladder; option 4 is a link type, not a metropolitan structure.",
      },
      {
        q: "Why must the two paths of a redundant supply be genuinely independent for the availability arithmetic (1−(1−A)²) to hold?",
        options: [
          "Independence is only a bookkeeping convention — the formula holds regardless",
          "A shared failure mode (common substation, shared tower route, one protection system) makes the paths fail together, collapsing the product term toward single-path reliability",
          "Because dependent paths carry more current",
          "Because independent paths can be maintained simultaneously",
        ],
        answer: 1,
        explanation: "The square-law comes from multiplying the *independent* probabilities of simultaneous failure; couple the paths through any common element and that element's failure now fails both at once — the 0.9996 quietly degrades toward 0.98. Option 4 is a maintenance argument that actually argues the opposite way (independence lets you take one path out for work); options 1 and 3 miss the probabilistic mechanism entirely.",
      },
    ],
  },
]

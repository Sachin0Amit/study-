import type { SectionContent } from '../library'

// ============================================================================
// Cybersecurity core top-up (Task 5-e) — authored SectionContent blocks.
// Covers: Security Foundations (cyber-foundations s1–s5) and Cryptography in
// Depth (cyber-crypto-depth s1–s6) — 11 sections, 61 quiz questions.
// Integrated by the orchestrator via source.ts + scripts/serialize-content.ts.
// ============================================================================

export const cyberCoreTopupContent: SectionContent[] = [
  // ================================================== foundations 1.1
  {
    sectionId: "cyber-foundations-s1",
    readingTime: 9,
    prerequisites: ["Basic idea of the CIA triad (confidentiality, integrity, availability)"],
    intro: "The CIA triad is where every security course starts — and where most real breaches prove it is not enough. A perfectly confidential, perfectly integral system can still be spoofed into paying the wrong vendor, or repudiated into an unusable contract dispute. This section extends the triad with authenticity, non-repudiation, availability and privacy, then shows how the AAA model turns abstract goals into deployable services.",
    objectives: [
      "Distinguish authenticity, integrity and non-repudiation, and name the cryptographic service that provides each",
      "Explain availability as a security goal under active attack, not merely an ops metric",
      "Contrast confidentiality with privacy, including aggregation-driven privacy loss",
      "Map the AAA model (authentication, authorization, accounting) to concrete security services",
      "Diagnose which security goals were violated in a given breach scenario"
    ],
    concepts: [
      {
        term: "Authenticity",
        kind: "definition",
        statement: "The assurance that a claim of identity or origin is **genuine**. Entity authentication verifies who you are talking to (login, TLS certificate path); data-origin authentication verifies who produced a particular message (MAC, digital signature). Authenticity is separate from integrity: an attacker can deliver an unmodified, truthful copy of an old message.",
        detail: "Freshness is part of the deal in practice — nonces, counters and timestamps exist because verifying the sender of a two-week-old funds transfer is not the same as verifying the sender of this one."
      },
      {
        term: "Non-repudiation",
        kind: "definition",
        statement: "The property that the **originator cannot credibly deny** having performed an action. It is provided by **digital signatures** (evidence verifiable by any third party using only public information) plus a tamper-evident audit trail.",
        detail: "A MAC cannot provide non-repudiation: the verification key is shared, so either party could have produced the tag, and a court cannot tell which. Only asymmetric, private-key material creates evidence one side cannot forge."
      },
      {
        term: "Availability as a security goal",
        kind: "insight",
        statement: "The property that **authorized users can access resources when needed**. Denial-of-service and ransomware attack it directly, and it is the goal most quietly sacrificed: a system that is perfectly confidential and perfectly correct but unreachable during business hours has still failed security.",
        detail: "Availability controls look different from confidentiality controls — redundancy, rate limiting, DDoS scrubbing, tested backups — which is why it must be named as a goal early, not discovered during the outage."
      },
      {
        term: "Privacy beyond confidentiality",
        kind: "insight",
        statement: "Confidentiality protects **content**; privacy also covers **metadata** (who, when, how often, from where), consent, purpose limitation and aggregation. End-to-end encryption of messages does not prevent traffic analysis from revealing who talks to whom — and individually harmless records aggregate into detailed profiles.",
        detail: "This is why privacy engineering has its own tooling: data minimization, k-anonymity-style releases, differential privacy in analytics. Encryption is necessary but radically insufficient."
      },
      {
        term: "The AAA model",
        kind: "method",
        statement: "**Authentication** (prove who you are: passwords, MFA, certificates), **Authorization** (decide what you may do: RBAC, ABAC, access control lists), **Accounting** (record what you did: logs, audit trails, metering). Together they operationalize the security goals in a running system.",
        detail: "The classic practical failure is conflating the first two: a user authenticates perfectly and then reads another user's records because the API trusts an ID from the request body — authentication succeeded, authorization never ran."
      },
      {
        term: "Accountability and assurance",
        kind: "definition",
        statement: "**Accountability**: actions must be traceable to a unique, identifiable principal — it is what makes punishment, forensics and deterrence possible. **Assurance**: the grounds for confidence that the other goals actually hold, earned through evaluation, testing and review rather than asserted.",
        detail: "Accountability is why shared accounts and shared service passwords are design smells: when everyone is 'admin', no action can be attributed."
      },
      {
        term: "Goals → services → mechanisms",
        kind: "notation",
        statement: "A useful layered vocabulary: a **goal** (authenticity) is realized by a **service** (peer-entity authentication, data-origin authentication, non-repudiation service) which is implemented by a **mechanism** (a protocol built on signatures or MACs). Security design means walking down this stack deliberately.",
        detail: "When an incident happens, walk it back up: which mechanism failed, which service was absent, which goal was violated — the answer dictates whether you patch code or fix architecture."
      }
    ],
    examples: [
      {
        title: "Mapping goals to mechanisms in a wire transfer",
        problem: "An online bank lets customers log in and initiate transfers, and must later settle disputes in front of arbitrators. Walk each security goal and name the control that serves it.",
        steps: [
          { label: "Step 1: Entity authenticity", text: "MFA at login establishes that the person initiating the session controls the customer's factors — not merely that somebody typed the right password." },
          { label: "Step 2: Integrity and data origin", text: "TLS with certificate validation plus an application-layer MAC or signature on the transfer message guarantees the amount and account fields are unmodified and came from the authenticated session, freshly (nonce inside the MAC)." },
          { label: "Step 3: Non-repudiation", text: "The bank signs each accepted transfer record with its signing key and binds it to the customer's confirmed action. In a dispute, the customer cannot claim the bank forged the order — only the bank holds the private key. A shared-secret MAC would leave exactly that loophole." },
          { label: "Step 4: Availability", text: "Rate limiting, DDoS scrubbing and multi-region failover protect the service. A silent hour at month-end payroll is a security failure with a dollar figure, even though nothing was decrypted or altered." },
          { label: "Step 5: Privacy", text: "Customer-service staff get need-to-know views (masked account numbers, aggregate dashboards) because thousands of individually harmless lookups aggregate into sellable behavioral profiles." }
        ],
        result: "Every control serves a named goal and every goal has at least one control. A control serving no goal is wasted money; a goal with no control is an incident waiting for a timestamp."
      }
    ],
    keyTakeaways: [
      "Authenticity, integrity and non-repudiation are distinct: integrity says data is unmodified, authenticity says the source is genuine (and fresh), non-repudiation gives third-party-verifiable evidence.",
      "Availability is a first-class security goal — DoS and ransomware attack it head-on.",
      "Privacy is broader than confidentiality: metadata, consent and aggregation matter even when content is encrypted.",
      "AAA (authentication, authorization, accounting) is the operational engine that delivers the goals in real systems.",
      "MACs give authenticity but never non-repudiation; only signatures do, because only they use key material one party alone holds."
    ],
    quiz: [
      {
        q: "An attacker cannot decrypt or alter traffic to a bank, but captures a legitimate 'transfer funds' message and replays it verbatim two days later; the bank processes it again. Which property primarily failed?",
        options: ["Confidentiality", "Integrity", "Message authenticity including freshness", "Non-repudiation"],
        answer: 2,
        explanation: "The message content was exactly as the customer signed it, so integrity held; what the bank could not verify was that the origin sent it now. Origin authentication with freshness (nonces or timestamps under the MAC/signature) is the missing service. Confidentiality is irrelevant to a replay, and non-repudiation concerns the later dispute, not the duplicate execution."
      },
      {
        q: "Two partner companies share a MAC key for authenticating purchase orders. A dispute arises and one company denies sending an order. Why can the MAC not settle it?",
        options: [
          "The MAC was computed with a weak hash, so either side could forge it given time",
          "Both companies know the key, so either could have produced the tag — there is no third-party-verifiable evidence",
          "MACs only work over short messages, so the long order could not be authenticated",
          "MACs verify integrity but never authenticate the sender, even to the peer"
        ],
        answer: 1,
        explanation: "This is the definition of why non-repudiation needs asymmetric cryptography: evidence must be verifiable by a third party and forgeable by no one. With a shared key, the plaintiff is also a possible forger. A digital signature — verifiable with the public key — is the fix. Option 4 is the tempting distractor: within the pair, a MAC does authenticate the sender (nobody else knows the key); it just cannot prove it to outsiders."
      },
      {
        q: "A messaging service is end-to-end encrypted and tamper-evident, but an attacker floods its relay infrastructure and nobody can send messages for six hours. Which security goal was violated?",
        options: ["Confidentiality", "Integrity", "Availability", "Authenticity"],
        answer: 2,
        explanation: "Nothing was read or modified — confidentiality and integrity held. Availability is a security goal in its own right, and denial-of-service attacks it directly. Treating availability as 'just an ops problem' is how organizations end up with no anti-DoS budget and no tested recovery."
      },
      {
        q: "An app encrypts message contents, but an observer of the network still learns who messages whom, at what times, and in what volume. What is the correct diagnosis?",
        options: [
          "Confidentiality failed, because the encryption is weak",
          "Confidentiality held for content, but privacy degraded via metadata and traffic analysis",
          "Authenticity failed, because senders are identifiable",
          "Non-repudiation failed, because the observer can prove who talked to whom"
        ],
        answer: 1,
        explanation: "Content confidentiality is intact — the observer reads no messages. Privacy is the broader goal covering metadata, and who-talks-to-whom is metadata. The other options mislabel the property: identifying that communication occurred is not a failure of content encryption, sender authentication, or evidence of message content."
      },
      {
        q: "A user authenticates with a perfectly valid session token, then successfully reads another user's medical records because the API takes the record owner's ID from the request body. Which component of AAA failed?",
        options: ["Authentication", "Authorization", "Accounting", "None — this is an integrity failure"],
        answer: 1,
        explanation: "Authentication worked (the user really is who they claim), and the audit log may even record it (accounting fine). The system never checked whether the authenticated user is authorized for that record — broken access control, the single most common web vulnerability class. Calling it integrity confuses protecting data from modification with controlling access."
      }
    ]
  },

  // ================================================== foundations 1.2
  {
    sectionId: "cyber-foundations-s2",
    readingTime: 10,
    prerequisites: ["Security goals (CIA and beyond)", "Basic networking vocabulary (ports, services, endpoints)"],
    intro: "Every exploit in history is the same sentence: a threat actor traversed part of your attack surface to abuse a vulnerability. Getting the vocabulary exactly right — threat, vulnerability, risk — being able to score severity with CVSS, and structuring attacks with attack trees are the day-one skills of a security analyst.",
    objectives: [
      "Define threat, vulnerability, exploit, attack surface and risk, and use them without conflation",
      "Enumerate attack surface categories: network, software, physical, human and supply chain",
      "Read and compute a CVSS v3.1 base score from a vector string",
      "Model an attack with an AND/OR attack tree and identify the cheapest path",
      "Classify threat actors by capability and motivation"
    ],
    concepts: [
      {
        term: "Threat, vulnerability, exploit, risk",
        kind: "definition",
        statement: "A **vulnerability** is a weakness (in code, config, process or people). A **threat** is a potential event or actor that could abuse a vulnerability. An **exploit** is the concrete code or procedure that realizes the abuse. **Risk** is the expected loss — likelihood combined with impact. A vulnerability with no interested threat is a latent flaw; a threat with no vulnerability is noise.",
        detail: "Patch scanners find vulnerabilities, threat intelligence describes threats, and risk analysis is the multiplication that decides your weekend. Teams that use the words interchangeably make category errors in budgeting."
      },
      {
        term: "Attack surface",
        kind: "definition",
        statement: "The sum of all points where an unauthorized actor can attempt to interact with a system: **network** (listening ports, VPN endpoints), **software** (web endpoints, file parsers, APIs, deserializers), **physical** (USB ports, badge readers, discarded hardware), **human** (phishable staff, social engineering) and **supply chain** (dependencies, build systems, vendors).",
        detail: "Attack surface reduction — closing ports, removing endpoints, deleting unused parsers — is often cheaper per unit of risk than defending what remains. You cannot firewall your way out of a parsing library nobody needed."
      },
      {
        term: "Threat actor taxonomy",
        kind: "insight",
        statement: "**Script kiddies** run other people's tools opportunistically. **Hacktivists** pursue ideology and publicity. **Cybercriminals** optimize money per hour — ransomware economics favors automated, reliable, low-skill-after-development attacks. **Insiders** already hold legitimate access. **Advanced persistent threats (state-linked groups)** bring patience, custom tooling and months-long stealth.",
        detail: "Actor type dictates defense shape: opportunists are stopped by basic hygiene, criminals by making yourself more expensive than neighbors, insiders by least privilege and monitoring, APTs by detection depth and assumption of breach."
      },
      {
        term: "CVE — the vulnerability dictionary",
        kind: "notation",
        statement: "**Common Vulnerabilities and Exposures** assigns each publicly known vulnerability a unique identifier of the form CVE-YYYY-NNNNN. Scanners report CVE IDs; the US National Vulnerability Database enriches them with CVSS scores, affected products and references — turning a prose advisory into joinable data.",
        detail: "The CVE ID is how a vendor advisory, a scanner finding and a news story get recognized as the same bug — the join key of the vulnerability-management world."
      },
      {
        term: "CVSS v3.1 base metrics",
        kind: "method",
        statement: "A base score (0–10) computed from the **vector string** $AV:AC:PR:UI:S:C:I:A$. Exploitability: Attack Vector (Network 0.85 / Adjacent 0.62 / Local 0.55 / Physical 0.2), Attack Complexity (Low 0.77 / High 0.44), Privileges Required (None 0.85 / Low 0.62 / High 0.27 for unchanged scope), User Interaction (None 0.85 / Required 0.62). Impact: Confidentiality, Integrity, Availability each High 0.56 / Low 0.22 / None 0, composed via $ISS = 1-(1-C)(1-I)(1-A)$, Impact $= 6.42 \\cdot ISS$ (scope unchanged), Exploitability $= 8.22 \\cdot AV \\cdot AC \\cdot PR \\cdot UI$, and $Base = \\lceil 10 \\cdot (Impact + Exploitability) \\rceil / 10$, capped at 10.",
        detail: "The base score assumes worst case; temporal and environmental metrics (later concepts) adjust for whether a patch exists and how exposed YOU are. The vector string, not the number, is the data."
      },
      {
        term: "Attack tree",
        kind: "method",
        statement: "Root node = attacker goal. **OR nodes**: any child suffices. **AND nodes**: all children required. Leaves carry rough cost, skill or detectability; the cheapest root-reaching branch is the attacker's best plan, and your best place to spend defense budget. Pruning any child of an AND node kills that whole branch.",
        detail: "Attack trees convert vague fear into a prioritized control list. They also expose wishful thinking: a tree whose cheapest path runs through the backup tape you never encrypted is a to-do item."
      },
      {
        term: "Zero-days and patch windows",
        kind: "insight",
        statement: "A **zero-day** is a vulnerability exploited before a patch exists. Dramatic — but breach statistics consistently show most successful intrusions use **known-but-unpatched** vulnerabilities with patches available for months. Exploitability of the average estate is dominated by patch discipline, not exotic novelty.",
        detail: "So prioritization is the real skill: rank by exposure (internet-facing?), exploit availability in the wild, and asset value — a 9.8 CVSS on an isolated admin-only host may genuinely rank below an 8.1 on your public login page."
      }
    ],
    examples: [
      {
        title: "Scoring a remote unauthenticated RCE",
        problem: "A web application flaw lets an unauthenticated remote attacker execute arbitrary code, with full confidentiality, integrity and availability impact, no user interaction, and scope unchanged. Compute the CVSS v3.1 base score from the vector AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H.",
        steps: [
          { label: "Step 1: Exploitability", text: "$8.22 \\times 0.85 \\times 0.77 \\times 0.85 \\times 0.85 \\approx 3.89$ — network-reachable, no complexity, no privileges, no clicking required." },
          { label: "Step 2: Impact sub-score", text: "$ISS = 1 - (1-0.56)^3 = 1 - 0.44^3 \\approx 0.9148$; with scope unchanged, $Impact = 6.42 \\times 0.9148 \\approx 5.87$." },
          { label: "Step 3: Combine and round up", text: "$3.89 + 5.87 = 9.76$, rounded up to one decimal $\\Rightarrow$ **9.8 Critical**." },
          { label: "Step 4: Sensitivity check", text: "Require low privileges (PR:L) and the score drops to about 8.8; require high privileges (PR:H) and it falls to about 7.2 — because $PR$ weights are 0.62 and 0.27 respectively, shrinking only the Exploitability term." },
          { label: "Step 5: Read it properly", text: "9.8 assumes worst case — the same code reachable only from an authenticated admin panel on an internal VLAN is a different risk in context, which is what environmental metrics are for." }
        ],
        result: "Base score 9.8 (Critical). The vector string encodes every assumption; the single number is just the headline."
      },
      {
        title: "An attack tree for payment-card data",
        problem: "Goal: steal stored card numbers. Build the tree and find where defense money should go first.",
        steps: [
          { label: "Step 1: Root and OR branches", text: "Root 'obtain card data' = OR of (A) breach the payment server, (B) steal the nightly backup, (C) bribe an operator with DB access." },
          { label: "Step 2: Expand the technical branch", text: "A = AND of {find an exploitable flaw, escalate privileges, reach the database subnet, dump the table}. All four are required, so hardening any single one — say, segmenting the DB subnet — defeats branch A entirely." },
          { label: "Step 3: Price the leaves", text: "A requires skill and days; B (unencrypted offsite tapes collected by a vendor) requires a Saturday and a bolt cutter; C requires one disgruntled employee. The cheapest branch is B — or C if background screening is weak." },
          { label: "Step 4: Defend the cheap cuts", text: "Encrypt backups with keys the tape vendor does not hold: branch B dies. Add two-person integrity on DB queries and monitoring: branch C is now expensive and loud. The tree re-prices after every control." },
          { label: "Step 5: Re-evaluate", text: "With B and C priced out, the attacker's best path is now the expensive technical route — exactly where your WAF, patching and segmentation spend has its leverage." }
        ],
        result: "The tree turned a vague fear into a ranked list: encrypt backups first, then insider controls, then harden the technical path. Defense = raising the price of the cheapest remaining cut."
      }
    ],
    keyTakeaways: [
      "Vocabulary precision matters: vulnerability (weakness), threat (actor/event), exploit (realized path), risk (expected loss).",
      "Attack surface = every reachable interaction point across network, software, physical, human and supply-chain layers; shrinking it is often the cheapest risk reduction.",
      "CVSS base = Exploitability + Impact with round-up; the vector string is the data, the number is the headline.",
      "Attack trees expose the attacker's cheapest path — spend defense money cutting THAT branch first.",
      "Most breaches exploit known unpatched bugs, not zero-days; patch discipline beats novelty-chasing."
    ],
    quiz: [
      {
        q: "A flaw requires the attacker to first send a phishing email and have an admin click a crafted link before exploitation. Which CVSS v3.1 metrics capture this?",
        options: [
          "AV:PH and AC:H — attack vector physical with high complexity",
          "UI:R and PR:H — user interaction required and high privileges needed",
          "S:C — scope changed because it crosses from email to the browser",
          "C:L and I:L — reduced impact because the attacker starts socially"
        ],
        answer: 1,
        explanation: "Requiring a victim to click is exactly User Interaction: Required (UI:R, weight 0.62), and targeting an admin means Privileges Required: High (PR:H, weight 0.27 for unchanged scope). Both shrink Exploitability and the base score. Attack vector describes where the attacker starts (network here, not physical), scope change is about affecting resources beyond the vulnerable component's security scope, and impact metrics rate the outcome, not the entry trick."
      },
      {
        q: "Two otherwise identical vulnerabilities: one is remotely exploitable with no authentication on an internet-facing endpoint (AV:N/PR:N), the other requires local access and an admin account (AV:L/PR:H). What does CVSS correctly tell you?",
        options: [
          "They deserve identical remediation priority because both are code flaws",
          "The first scores far higher because network reachability and no privileges multiply into much greater Exploitability",
          "The second is more dangerous because admins have more power",
          "CVSS cannot distinguish them; only a pentest can"
        ],
        answer: 1,
        explanation: "Exploitability = 8.22·AV·AC·PR·UI, and AV:L (0.55) plus PR:H (0.27) cut it to roughly a fifth of the network/no-privileges case. That is the model working as intended: severity tracks how easily an attacker reaches the flaw. The distractors each break a principle — remediation should be risk-ranked, admin power is already priced into PR, and CVSS exists precisely to make this distinction mechanically."
      },
      {
        q: "Your team adds a public REST API for third-party developers. From a security standpoint, what actually happened?",
        options: [
          "Risk decreased because the API has schema validation",
          "The software attack surface grew — new endpoints, parsers and authentication logic are all reachable by anyone on the internet",
          "Only performance changed; security posture is unaffected until a bug is found",
          "The attack surface is unchanged because the API uses HTTPS"
        ],
        answer: 1,
        explanation: "Every new internet-reachable endpoint, JSON parser and token-verifying code path is fresh attack surface — more places for bugs, more authz decisions to get wrong. Validation helps but does not un-add the surface. HTTPS is transport protection, irrelevant to counting reachable code; 'no bug found yet' is not 'no bug'."
      },
      {
        q: "An intrusion shows months of patient lateral movement, custom malware tuned to the victim's environment, and zero interest in ransomware or publicity. Which threat actor profile fits best?",
        options: ["Opportunist script kiddie", "Hacktivist collective", "Cybercriminal ransomware crew", "Advanced persistent threat (state-linked)"],
        answer: 3,
        explanation: "Patience plus custom tooling plus espionage (not extortion) objectives is the APT signature. Script kiddies reuse public tools and lack patience; hacktivists want visibility for a cause; cybercriminals monetize fast — ransomware or resale — rather than camp silently for months."
      },
      {
        q: "In an attack tree, the branch 'inject malicious update' is an AND node with children {compromise the build server, sign with the release key}. What is the strongest defensive move?",
        options: [
          "Patch the build server faster, since it is listed first",
          "Move release-key signing into an HSM with two-person control — killing any one AND child defeats the whole branch",
          "Add an OR child so attackers have more paths to compare",
          "Harden the network perimeter, since AND nodes always sit behind firewalls"
        ],
        answer: 1,
        explanation: "An AND node succeeds only if every child succeeds, so defending any single child to a high standard neutralizes the entire branch — protecting the signing key with an HGM-style control (here: HSM plus two-person control) is typically the cheapest child to make near-impossible. Option 3 is backwards: adding OR children helps the ATTACKER. Perimeters have nothing to do with tree semantics."
      },
      {
        q: "Your scanner reports CVSS 9.8 on an internal host that has no inbound routes from outside, requires admin authentication, and hosts a rarely used tool. What is the professionally correct reading?",
        options: [
          "Patch it before everything else because 9.8 is the top of the scale",
          "The base score reflects worst-case assumptions; factor exposure and authentication (environmental/context) into prioritization rather than sorting blindly by base score",
          "Ignore it — internal systems are never exploitable",
          "Re-score the vulnerability yourself and publish a lower number to the vendor"
        ],
        answer: 1,
        explanation: "CVSS base deliberately ignores your context; environmental metrics exist precisely to adjust for exposure, security controls and asset value. Blind base-score ordering is a known anti-pattern — meanwhile an 8.1 on your public login page may deserve the first maintenance window. Option 3 is how internal pivots become breaches; option 4 confuses contextual prioritization with redefining the flaw."
      }
    ]
  },

  // ================================================== foundations 1.3
  {
    sectionId: "cyber-foundations-s3",
    readingTime: 11,
    prerequisites: ["Threats and vulnerabilities (cyber-foundations-s2)", "Familiarity with client–server request flow"],
    intro: "Defense fails quietly when nobody asked what could go wrong on purpose. Threat modeling is the discipline of walking your own architecture as an attacker would: draw the data flows, mark where trust changes hands, and enumerate threats systematically. STRIDE gives you the checklist, DREAD helps you rank, and trust boundaries tell you where to look hardest.",
    objectives: [
      "Construct a data flow diagram and mark trust boundaries on it",
      "Apply STRIDE per diagram element to enumerate threats mechanically",
      "Rank threats with DREAD and recognize when the ranking should be overridden",
      "Derive concrete mitigations from each STRIDE category",
      "Place threat modeling correctly within the development lifecycle"
    ],
    concepts: [
      {
        term: "Threat modeling as a discipline",
        kind: "definition",
        statement: "A structured, repeatable exercise answering four questions (after Shostack): **What are we building? What can go wrong? What will we do about it? Did we do a good job?** It runs at design time, is updated on every architectural change, and outputs a document — not vibes: a diagram, a threat list with mitigations, and traceable follow-ups.",
        detail: "The failure mode of 'we do threat modeling' is doing it once before launch and framing it. A new service, queue or third-party integration invalidates the old model."
      },
      {
        term: "Data flow diagram elements",
        kind: "notation",
        statement: "Four shapes: **external entities** (people and systems outside your control — users, payment gateways), **processes** (code you run — services, functions), **data stores** (databases, caches, file stores, queues) and **data flows** (arrows moving data between the other three). Every threat in STRIDE attaches to one of these shapes.",
        detail: "The diagram's value is mechanical coverage: once every box and arrow is labeled, you can walk element by element and enumerate threats without relying on inspiration."
      },
      {
        term: "STRIDE",
        kind: "method",
        statement: "Six threat classes: **S**poofing (pretending to be someone), **T**ampering (unauthorized modification), **R**epudiation (denying an action), **I**nformation disclosure (leaking data), **D**enial of service (blocking legitimate use), **E**levation of privilege (gaining unauthorized authority). Per-element mapping: external entity → S, R; data flow → T, I, D; data store → T, I, R, D; **process → all six**.",
        detail: "The mapping is the trick: it converts 'think like an attacker' (hard, inspirational) into 'for each arrow, check T-I-D' (mechanical, complete). Memorize the mapping and you can threat-model any diagram."
      },
      {
        term: "Trust boundary",
        kind: "definition",
        statement: "Any place where data or execution crosses between components with **different privilege or trust levels**: user browser → your frontend, frontend → backend, backend → database, service → service over an internal network, your code → a third-party API. Threats cluster at boundaries because that is where validation, authentication and authorization decisions must happen — and where they are most often skipped.",
        detail: "On a DFD, boundaries are drawn as thick lines; the analyst's job is to verify that every crossing validates, authenticates and authorizes. 'The firewall blocks that' is not a boundary control — lateral movement after one compromise crosses it for free."
      },
      {
        term: "DREAD",
        kind: "method",
        statement: "A 1–10 scoring rubric per threat: **D**amage potential, **R**eproducibility, **E**xploitability, **A**ffected users, **D**iscoverability; the average ranks the backlog. Useful for communication, notoriously inconsistent between scorers — treat it as a triage aid, and override it when damage is catastrophic (low-probability, high-impact threats deserve outsized priority).",
        detail: "Modern practice often replaces DREAD with likelihood × impact tables or attack-tree cost analysis; keep DREAD for quick relative ordering inside one modeling session, never for cross-team comparisons."
      },
      {
        term: "STRIDE-per-element mitigations",
        kind: "insight",
        statement: "Each class has a standard control menu: **S** → strong authentication (MFA, mutual TLS, signed tokens); **T** → MACs/signatures, input validation, immutable logs; **R** → tamper-evident audit trails bound to identity; **I** → encryption in transit and at rest, strict need-to-know access control; **D** → rate limiting, quotas, redundancy; **E** → least privilege, RBAC, sandboxing, parameterized queries.",
        detail: "Notice the pattern: mitigations are mostly the classic security goals from s1 wearing work clothes. STRIDE enumerates the attack; the goals menu supplies the defense."
      },
      {
        term: "Composed escalation chains",
        kind: "insight",
        statement: "Real privilege escalation is rarely one bug: SSRF to reach an admin endpoint, admin endpoint to disable logging, disabled logging to exfiltrate unnoticed. Model composed threats across elements — walk chains through the DFD, not just single boxes.",
        detail: "Kill chains are interrupted most cheaply at the earliest link; a model that only lists standalone bugs misses that the first link (SSRF) was the one worth fixing."
      }
    ],
    examples: [
      {
        title: "STRIDE on a checkout data flow",
        problem: "A shop: the customer (external entity) submits card details over a flow to the checkout service (process), which writes orders to a database (data store) and calls a payment gateway (external process over a flow). Enumerate threats per element and propose mitigations.",
        steps: [
          { label: "Step 1: Draw and mark boundaries", text: "Elements: customer entity, checkout process, orders store, gateway entity; flows: card data (customer → checkout), order write (checkout → store), payment request (checkout → gateway). Trust boundaries: the public internet (customer → checkout) and the B2B link to the gateway. The internet boundary is the most exposed crossing." },
          { label: "Step 2: External entity (customer) → S, R", text: "Spoofing: stolen sessions ordering on someone's card — mitigate with MFA and device binding. Repudiation: 'I never placed that order' — mitigate with an immutable, timestamped order audit trail bound to the authenticated session." },
          { label: "Step 3: Data flow (card data) → T, I, D", text: "Tampering: amount modified in transit — TLS with certificate validation plus an application-layer MAC. Information disclosure: card numbers read off the wire — TLS again, and never in URLs or logs (log scrubbing is an I-control for the flow's copies). Denial of service: card-flow flooding — per-source rate limits at the edge." },
          { label: "Step 4: Process (checkout service) → all six", text: "Elevation of privilege: mass-assignment letting a request set is_admin — bind only whitelisted fields. Tampering: corrupted deploy — signed builds. Information disclosure: verbose error stack traces — safe error handling. Denial of service: queue + autoscaling. Spoofing of the service to the gateway — mutual TLS with the gateway. Repudiation of service actions — structured audit logs." },
          { label: "Step 5: Data store (orders) → T, I, D, R", text: "Tampering: SQL injection rewriting order rows — parameterized queries. Information disclosure: bulk read of stored cards — encrypt at rest, column-level access control, and do not store full PANs at all (tokenize). Denial of service: table locks / storage exhaustion — quotas. Repudiation: append-only, integrity-checked logs so history cannot be edited after the fact." },
          { label: "Step 6: Rank and sequence", text: "Quick DREAD: the SQL injection (Damage 9, Reproducibility 8, Exploitability 8, Affected 10, Discoverability 8) outranks the theoretical DNS-poisoning flow attack. Fix order: injection, mass-assignment, log scrubbing, then rate limiting." }
        ],
        result: "One page of diagram produced ~15 concrete threats, each mapped to a named control and ranked — that mechanical completeness is the entire value of the method."
      }
    ],
    keyTakeaways: [
      "STRIDE maps six threat classes onto four DFD element types — the mapping makes enumeration mechanical rather than inspirational.",
      "Trust boundaries are where threats cluster; draw them first and demand validation/authentication/authorization at every crossing.",
      "External entities carry spoofing and repudiation; flows and stores carry tampering, disclosure and DoS; processes get all six.",
      "DREAD is a triage aid within a session, not an oracle — override it for catastrophic-impact threats.",
      "Threat modeling pays off at design time when changes are cheap; re-run it on every architectural change, not once before launch."
    ],
    quiz: [
      {
        q: "Which STRIDE categories apply to an EXTERNAL ENTITY on a data flow diagram?",
        options: [
          "All six — every element type can suffer every threat",
          "Spoofing and repudiation only",
          "Tampering, information disclosure and denial of service only",
          "Elevation of privilege only"
        ],
        answer: 1,
        explanation: "External entities are outside your control — you cannot modify their internals, so tampering/disclosure/DoS on them are not your threats; what you must handle is them being spoofed (impersonated) and their actions being repudiable. Processes get all six; stores get T, I, R, D. Claiming 'all six' for every element is the common error the per-element mapping exists to prevent."
      },
      {
        q: "An API gateway validates JWTs on every request, but internal microservices accept any request arriving on the private network without re-checking. What should the threat model flag first?",
        options: [
          "Nothing — the gateway is the single point of authentication by design",
          "A missing trust-boundary enforcement inside the private network: one compromised pod allows lateral movement and privilege elevation to every service",
          "A denial-of-service risk at the gateway",
          "An information disclosure flaw in the JWT library"
        ],
        answer: 1,
        explanation: "The private network is a trust boundary that is being honored only by convention. Once any single workload is compromised, the attacker crosses it for free and hits services with zero authentication — a classic elevation-of-privilege chain. DoS at the gateway and JWT library bugs may exist, but the architectural hole is the boundary itself; 'by design' is exactly the phrase boundaries refuse to trust."
      },
      {
        q: "Under DREAD, a bug scores high on Damage but very low on Reproducibility (it triggers only under a rare cache state). Why might you still prioritize it?",
        options: [
          "You should not — DREAD's average is authoritative and settles the question",
          "Averaging hides tail risk: low-probability catastrophic threats deserve outsized priority when the worst case is unacceptable",
          "Reproducibility cannot be estimated, so it should be scored as 10 by default",
          "Damage and Reproducibility must always be summed, not averaged"
        ],
        answer: 1,
        explanation: "DREAD's arithmetic can average a 10 (damage) down to irrelevance when one dimension is rare — but expected-value logic is wrong for unacceptable worst cases (the reason we insure against rare disasters). The professional move is to treat DREAD as a triage signal and override it with impact floors for catastrophic outcomes. The other options invent rules the method does not have."
      },
      {
        q: "Which control primarily mitigates REPUDIATION on an order-processing system?",
        options: [
          "Multi-factor authentication at login",
          "TLS 1.3 on all connections",
          "Tamper-evident, append-only audit logs binding each action to an authenticated principal",
          "Rate limiting per source IP"
        ],
        answer: 2,
        explanation: "Repudiation is defeated by evidence: append-only logs with integrity protection and identity binding let you prove who did what. MFA combats spoofing, TLS combats tampering/disclosure on flows, rate limiting combats DoS — each option maps to a different STRIDE letter, which is the point of learning the mapping."
      },
      {
        q: "When in the lifecycle should threat modeling happen, and when must it be repeated?",
        options: [
          "Once, immediately before release, when the design is final",
          "At design time — and again after any architectural change, new integration or major data flow change",
          "Only after an incident proves the need",
          "Annually, synchronized with the audit calendar, regardless of system changes"
        ],
        answer: 1,
        explanation: "The economics are the argument: a threat removed at design time costs a diagram edit; the same threat in production costs an incident. And the model is perishable — every new service, queue or third-party integration creates new elements and boundaries the old diagram does not cover. Pre-release-only and audit-calendar models go stale exactly as fast as the system changes."
      }
    ]
  },

  // ================================================== foundations 1.4
  {
    sectionId: "cyber-foundations-s4",
    readingTime: 9,
    prerequisites: ["Security goals (cyber-foundations-s1)", "Basic multi-tier web architecture"],
    intro: "Patching security in after the fact is like installing seatbelts by cutting into a finished car body — expensive and structurally compromised. Security by design makes protection an architectural property instead of a late patch, and defense in depth assumes every single layer will eventually fail, then asks what catches the attacker afterwards.",
    objectives: [
      "State the classic Saltzer–Schroeder design principles and apply them to concrete designs",
      "Apply least privilege and separation of duties to a service architecture",
      "Design fail-secure behavior for realistic failure modes",
      "Justify layered controls with the economics of independent defenses",
      "Recognize security-debt patterns that violate secure design"
    ],
    concepts: [
      {
        term: "Security by design",
        kind: "definition",
        statement: "Security treated as an architectural **requirement from day one** — threat-modeled at design time, built into components, verified in tests — rather than retrofitted after deployment. The economic driver: a flaw fixed at design time costs a diagram edit; the same flaw in production costs an incident, a patch cycle under pressure and lost trust.",
        detail: "Security debt compounds like financial debt: every 'we will harden it later' raises the interest rate on the next change, because unsafe structure breeds unsafe extensions."
      },
      {
        term: "Least privilege",
        kind: "law",
        statement: "Every subject (user, service, token) receives **only the authority needed for its current task, for the shortest time possible**. A web server does not run as root; an app's database account cannot DROP tables; a CI job gets scoped, expiring credentials instead of a long-lived master key.",
        detail: "Least privilege does not prevent compromise — it bounds the blast radius. The question it answers is not 'can this be exploited?' but 'once it is, how far does the attacker get?'. Ephemeral, auto-expiring credentials make the principle self-maintaining."
      },
      {
        term: "Fail-secure defaults",
        kind: "law",
        statement: "When a component errors, times out or crashes, it must fail into the **denying** state: a firewall boots with 'deny all' and opens rules deliberately; an authentication dependency that cannot reach its server rejects the request instead of waving it through. Contrast fail-safe designs that prioritize availability.",
        detail: "The tradeoff is real — fail-secure can turn a dependency outage into an availability incident — so the design work is making the secure failure mode survivable: circuit breakers, bounded caches, graceful degradation, rather than a silent fail-open switch."
      },
      {
        term: "Complete mediation",
        kind: "law",
        statement: "**Every access to every object passes the authorization check, every time.** The classic violation is caching an authorization decision for speed: a revoked user keeps working for the cache's TTL. The 'confused deputy' problem — privileged code acting on an unprivileged request's behalf — is complete mediation failing to track whose authority is in play.",
        detail: "Performance pressure is the perpetual enemy; the honest reconciliation is short-TTL caches of decisions plus immediate invalidation channels, not blanket bypasses for 'internal' endpoints."
      },
      {
        term: "Economy of mechanism and open design",
        kind: "insight",
        statement: "**Keep designs small and simple enough to audit** (economy of mechanism), and never let security depend on the secrecy of the design or its algorithms (open design — Kerckhoffs's principle for systems): secrets live in keys, credentials and configuration, not in clever hidden logic.",
        detail: "Homegrown 'secret algorithm' obfuscation is a pattern of failure: it is unauditable, unfixable and leaks with the first departing engineer. Standard primitives with managed keys inherit decades of public scrutiny."
      },
      {
        term: "Defense in depth",
        kind: "method",
        statement: "Multiple **independent** layers — network (segmentation, firewalls), host (patching, endpoint detection), application (validation, authorization), data (encryption, tokenization), people (training), process (tested backups, incident response) — such that a single failed control is an event, not a breach. Independence is the load-bearing word: layers that share a failure mode collapse together.",
        detail: "The audit question for any layered design: what SINGLE common cause — one admin password, one cloud account, one vendor — can disable multiple layers at once? Common-mode failures are defense in depth's silent killer."
      },
      {
        term: "The economics of layering",
        kind: "insight",
        statement: "If layers fail independently with probabilities $p_1, p_2, \\ldots, p_k$, the chance an attacker defeats all of them is the product $p_1 p_2 \\cdots p_k$ — multiplicatively small — while your cost is the **sum** of the layers. Buying stops where the marginal risk reduction of the next layer falls below its cost; over-layering has real diminishing returns.",
        detail: "This is also why independence dominates count: five weakly-correlated layers beat eight layers that all assume the perimeter holds."
      },
      {
        term: "Psychological acceptability",
        kind: "insight",
        statement: "A control users do not understand, or that makes the safe path harder than the unsafe one, will be bypassed — the 'secure' door propped open with a fire extinguisher. Usability is not the opposite of security; it is a component of it.",
        detail: "Password rules that spawn sticky notes, MFA flows that make people mail each other codes, lockouts that make support hand out exceptions — all are security controls defeated by their own friction."
      }
    ],
    examples: [
      {
        title: "Hardening a three-tier web service",
        problem: "A public web app (nginx → app server → PostgreSQL) runs every component as root, uses one DB superuser account for everything, and bypasses its session service's checks whenever that service times out — 'so the site stays up'. Redesign it with secure-design principles.",
        steps: [
          { label: "Step 1: Least privilege everywhere", text: "nginx drops privileges after binding port 443; the app server runs as an unprivileged user; the database account can only SELECT and INSERT on its own tables — no DDL, no superuser. A compromise of any tier now reaches exactly what that tier needs and nothing more." },
          { label: "Step 2: Fail-secure, made survivable", text: "The session-service timeout now returns DENY. To keep availability honest, add a circuit breaker with fast failure, a bounded (30-second) local cache of session validity, and an alert — the site degrades for seconds instead of silently becoming unauthenticated-accessible forever." },
          { label: "Step 3: Complete mediation", text: "Every route re-checks session AND authorization — including the 'internal-only' debug endpoints currently unguarded because 'the firewall blocks them'. Lateral movement inside the network must not inherit trust." },
          { label: "Step 4: Defense in depth, checked for independence", text: "Edge: WAF and rate limiting. Host: prompt patching and EDR. App: input validation AND parameterized queries (either layer kills the SQL injection). Data: TLS, encryption at rest, tokenized card numbers, tested restores. Audit the common causes: per-tier credentials (no shared admin password), per-layer logging (no single erasable log)." },
          { label: "Step 5: Open design replaces obfuscation", text: "The homegrown 'proprietary scrambling' of order IDs is replaced by standard authenticated encryption with managed keys — the new scheme is auditable, testable, and survives an engineer leaving." },
          { label: "Step 6: Price the layers", text: "Estimate per-layer compromise probabilities; the product across WAF + app validation + least-privilege DB is orders of magnitude below any single layer, and each control also pays an availability or compliance dividend — so the marginal layer still clears its cost." }
        ],
        result: "Same feature set, but a single failed control is now an event to detect rather than a breach to disclose — and each layer assumes the others will fail."
      }
    ],
    keyTakeaways: [
      "Least privilege bounds the blast radius of every future compromise; complete mediation guarantees the bound is actually enforced on every request.",
      "Fail-secure (deny on error) is the safe default; design the availability fallback deliberately instead of failing open.",
      "Defense in depth works only when layers are independent — audit for common-mode failures like shared admin credentials.",
      "Open design: secrets live in keys and configuration, never in hidden algorithms.",
      "Design-time fixes cost orders of magnitude less than production fixes; security debt compounds."
    ],
    quiz: [
      {
        q: "A rules engine becomes unreachable, and to 'keep the site up' the firewall fails into allow-all mode. Which principle did the designers violate, and what is the correct pattern?",
        options: [
          "Least privilege — the firewall should run unprivileged",
          "Fail-secure defaults — failure must land in the denying state, with availability handled by redundancy, not by opening the gate",
          "Open design — firewall rules should be public so operators can debug them",
          "Economy of mechanism — the rules engine should be removed"
        ],
        answer: 1,
        explanation: "Failing open converts any outage of the policy engine into total exposure — the attacker only needs to cause a timeout. Fail-secure means the outage lands on DENY; you then engineer availability (redundant policy engine, cached last-known-good rules with bounded TTL) so the safe state is survivable. Least privilege and open design are real principles but unrelated to failure-state choice."
      },
      {
        q: "To save latency, an app caches 'is this user an admin?' for 24 hours. A demoted admin retains admin powers for a full day. Which principle was violated?",
        options: ["Economy of mechanism", "Complete mediation", "Psychological acceptability", "Separation of privilege"],
        answer: 1,
        explanation: "Complete mediation demands every access be checked; a 24-hour authorization cache is mediation with a hole in it. The fix that preserves both goals: short TTL plus an invalidation hook on role change. Separation of privilege (nearby distractor) is about requiring multiple conditions or parties for sensitive actions — not caching."
      },
      {
        q: "An organization deploys WAF, EDR, database encryption and MFA — but all four are administered through one shared domain-admin account. What is the correct assessment?",
        options: [
          "Defense in depth is solid; four layers are four layers",
          "The layers share a common-mode failure: whoever compromises the shared admin disables all four at once, so independence — the actual source of multiplied protection — is absent",
          "The design is fine because encryption protects data even against admins",
          "Only the WAF is affected, since it sits at the edge"
        ],
        answer: 1,
        explanation: "Layered defense multiplies per-layer failure probabilities only if failures are independent; a shared administrative credential couples them to a single event. Encryption against an admin is precisely the case it does not cover (admins manage keys), and 'sits at the edge' misreads how credentials, not network position, became the shared weakness."
      },
      {
        q: "Which of these database configurations best embodies least privilege for a web application?",
        options: [
          "The app connects as the database superuser so schema changes never fail",
          "The app connects as a user that can SELECT and INSERT on the orders table, with all migrations run by a separate, human-invoked account",
          "The app connects as a user that owns the schema, for convenience during deploys",
          "The app connects with a shared account used by three other services, to minimize credential sprawl"
        ],
        answer: 1,
        explanation: "Least privilege grants exactly the operations the runtime task needs (read and append orders) and pushes DDL to a separate, deliberately-invoked identity — so an SQL injection in the app cannot DROP tables or read unrelated schemas. Superuser and schema-owner both exceed the task; the shared account compounds the problem by making accountability and revocation impossible."
      },
      {
        q: "Two teams built systems with identical features. Team A's security depends on a proprietary obfuscation scheme known only to two engineers; Team B uses standard, publicly documented primitives with well-managed keys. Both design documents leak publicly. What follows?",
        options: [
          "Both are equally exposed because the documents describe everything",
          "Team B is largely unaffected — by open design its security never rested on the document's secrecy — while Team A's scheme must now be treated as broken and redesigned",
          "Team A is safer because attackers will not believe the leaked scheme is real",
          "Team B must immediately rotate all keys because the algorithm became public"
        ],
        answer: 1,
        explanation: "Kerckhoffs's principle in system form: security should depend only on key secrecy, never on design secrecy. Team B designed for exactly this day; Team A now holds unfixable exposure — the scheme cannot even be patched, only replaced. Rotating keys because an ALGORITHM became public (option 4) inverts the principle: public algorithms protect public keys' secrecy, not vice versa."
      }
    ]
  },

  // ================================================== foundations 1.5
  {
    sectionId: "cyber-foundations-s5",
    readingTime: 9,
    prerequisites: ["Threats, vulnerabilities and attack surfaces (cyber-foundations-s2)"],
    intro: "You cannot secure everything, so security is fundamentally an allocation problem: where do the next units of defense budget do the most good? Risk management supplies the arithmetic — asset value, exposure factors, annualized rates — and the decision menu: accept, mitigate, transfer or avoid. Numbers turn arguments into purchase orders.",
    objectives: [
      "Express risk as the intersection of asset, threat and vulnerability",
      "Compute SLE, ARO and ALE and use them to justify controls",
      "Choose among avoid, mitigate, transfer and accept with justification",
      "Explain residual risk and who must own acceptance decisions",
      "Describe the continual risk-management lifecycle and the risk register"
    ],
    concepts: [
      {
        term: "Risk as an intersection",
        kind: "definition",
        statement: "Risk arises only where **asset, threat and vulnerability overlap**: $R = f(T, V, A)$. An unpatched, catastrophic vulnerability with no threat actor interested is low risk today (but must be watched); a nation-state threat against an asset with no exploitable weakness is noise; a threat meeting a vulnerability on a worthless asset does not matter either.",
        detail: "The intersection view explains why the same CVE warrants emergency patching on the payment tier and scheduled patching on a lab machine — asset value and exposure differ even when the vulnerability is identical."
      },
      {
        term: "Quantitative vocabulary: AV, EF, SLE, ARO, ALE",
        kind: "notation",
        statement: "**AV** (asset value, dollars), **EF** (exposure factor, fraction of AV lost per incident), $SLE = AV \\times EF$ (single loss expectancy), **ARO** (annualized rate of occurrence, events/year), and $ALE = SLE \\times ARO$ — the expected annual loss, the common currency for comparing risks and pricing controls.",
        detail: "ALE is an expectation, not a guarantee: it says a once-in-25-years $10M flood ($400k ALE) and a weekly $8k outage ($416k ALE) compete for the same budget line. The numbers are estimates — sensitivity-test them."
      },
      {
        term: "Qualitative risk analysis",
        kind: "method",
        statement: "Rate likelihood and impact on ordinal scales (rare → almost certain; negligible → catastrophic) and plot on a **risk matrix** to rank. Fast, communicable, no dollar data needed — but coarse, prone to inconsistent calibration between assessors, and unable to arithmetic: 'high × medium' is not a number.",
        detail: "Professional practice: qualitative for triage across many assets, quantitative for the few decisions where control costs and losses both carry real money."
      },
      {
        term: "Risk response options",
        kind: "definition",
        statement: "**Avoid** — eliminate the activity or asset causing the risk (decommission the exposed system). **Mitigate/Reduce** — apply controls that lower likelihood or impact. **Transfer** — move the loss to another party (insurance, contracts, cloud shared-responsibility). **Accept** — formally acknowledge and retain the risk because treatment exceeds benefit. Real strategies combine them: mitigate the frequent losses, insure the catastrophic tail.",
        detail: "'We accept it' said by nobody in particular is the failure mode — acceptance is a decision with an owner, a date and a review trigger, not a shrug."
      },
      {
        term: "Residual risk and risk appetite",
        kind: "definition",
        statement: "**Residual risk** is what remains after controls — planned-for, never zero. **Risk appetite** defines how much the organization will tolerate, and it is the yardstick that makes acceptance legitimate: above appetite, treat; within appetite, an accountable owner signs and the risk is periodically re-reviewed.",
        detail: "Every control decision ends in residual risk; the register records it, the owner owns it, and changes in threat landscape (a new exploit in the wild) reopen it."
      },
      {
        term: "The risk-management lifecycle",
        kind: "method",
        statement: "A continuous loop: **identify** (assets, threats, vulnerabilities — inventory first), **assess** (qualitative triage, quantitative deep-dives), **treat** (avoid, mitigate, transfer, accept — with owners and dates), **monitor and review** (KRIs, incident data, control effectiveness, re-assessment on change).",
        detail: "The artifact that keeps the loop alive is the **risk register**: each risk with its owner, current and residual ratings, treatment plan, due date and review status — a living document, not an annual screenshot for auditors."
      },
      {
        term: "Control categories",
        kind: "insight",
        statement: "Controls divide along two axes: **administrative** (policy, training) / **logical-technical** (encryption, MFA, firewalls) / **physical** (locks, cameras), and **preventive** (stop the event) / **detective** (reveal it happened) / **corrective** (restore afterwards). Mature programs pair preventive with detective, because prevention eventually fails and the mean time to detect is then the metric that matters.",
        detail: "A firewall with no log review is preventive-only; attackers who get past it are invisible. Backups plus restore tests are the corrective pair for ransomware's integrity and availability impact."
      }
    ],
    examples: [
      {
        title: "Pricing a flood control with ALE",
        problem: "A warehouse's inventory-management rack represents $500,000 of asset value including downtime cost. A serious flood destroys about 40% of that value; the region floods seriously about once every four years. A raised-platform and drainage retrofit costs $15,000 per year amortized and would cut the flood rate to once every twenty years. Should the CFO sign it?",
        steps: [
          { label: "Step 1: Single loss expectancy", text: "$SLE = AV \\times EF = 500{,}000 \\times 0.40 = \\$200{,}000$ per serious flood." },
          { label: "Step 2: Annualized loss expectancy before", text: "ARO = 1/4 = 0.25 events/year; $ALE = SLE \\times ARO = 200{,}000 \\times 0.25 = \\$50{,}000$/yr." },
          { label: "Step 3: ALE after the retrofit", text: "New ARO = 1/20 = 0.05; $ALE_{new} = 200{,}000 \\times 0.05 = \\$10{,}000$/yr." },
          { label: "Step 4: Cost–benefit", text: "Risk reduction = $50{,}000 - 10{,}000 = \\$40{,}000$/yr against a $15,000/yr control — net $25,000/yr, roughly 2.7× return on the control spend." },
          { label: "Step 5: Mind the tail", text: "The retrofit lowers LIKELIHOOD, not impact: a catastrophic 100%-loss flood still carries $SLE = \\$500{,}000$ with ARO 0.05 — a $25,000/yr tail the region's CFO may not want to retain. Pair mitigation with insurance (transfer) for the tail." },
          { label: "Step 6: Book the residual", text: "Post-control residual risk ($10,000/yr expected plus the insured tail) goes in the register with the CFO as owner and a review date — accepted, not forgotten." }
        ],
        result: "Mitigate the frequent slice, transfer the catastrophic tail, accept and document the remainder — the arithmetic converted a vague worry into a signed purchase order."
      }
    ],
    keyTakeaways: [
      "Risk = threat × vulnerability × asset overlap; the same vulnerability is different risks on different assets.",
      "ALE = SLE × ARO = AV × EF × ARO — expected annual loss is the common currency that makes controls comparable to losses.",
      "Response menu: avoid, mitigate, transfer, accept — real strategies combine them (mitigate frequency, insure severity).",
      "Residual risk must have an accountable owner and a review date; silent acceptance is unmanaged risk.",
      "The register plus the lifecycle (identify → assess → treat → monitor) makes risk management continuous, not an annual photo."
    ],
    quiz: [
      {
        q: "A data center asset is valued at $2,000,000. A successful attack destroys 25% of its value, and intelligence estimates a 0.2 annualized rate of occurrence. What are the SLE and ALE?",
        options: ["SLE $500,000; ALE $100,000", "SLE $500,000; ALE $500,000", "SLE $400,000; ALE $80,000", "SLE $2,000,000; ALE $400,000"],
        answer: 0,
        explanation: "SLE = AV × EF = 2,000,000 × 0.25 = $500,000 per event; ALE = SLE × ARO = 500,000 × 0.2 = $100,000 per year. Option 2 forgets to annualize; option 3 applies the factor backwards (0.2 × 0.25); option 4 uses full loss instead of the exposure factor."
      },
      {
        q: "A company buys cyber insurance covering the loss from a warehouse fire. Which risk response is this, and what does it NOT do?",
        options: [
          "Mitigation — it reduces the likelihood of the fire",
          "Transfer — it moves financial loss to the insurer, but changes neither the likelihood nor the physical impact of the fire",
          "Avoidance — the warehouse is no longer at risk",
          "Acceptance — paying premiums is the same as self-insuring the loss"
        ],
        answer: 1,
        explanation: "Insurance is the textbook transfer: the financial consequence moves to another party while probability and physical impact stay exactly as they were — which is why transfer is usually PAIRED with mitigation (sprinklers) rather than substituted for it. Self-insurance (option 4) is a deliberate acceptance decision retaining the loss, the opposite of moving it."
      },
      {
        q: "A control costs $30,000/year to operate and reduces ALE from $80,000 to $20,000. What is the sound funding decision, and why?",
        options: [
          "Reject it — controls should cost less than the original ALE",
          "Fund it — the $60,000/yr risk reduction exceeds the $30,000/yr cost, a net $30,000/yr benefit",
          "Fund it only if the ALE drops to exactly zero",
          "Reject it — any control costing over $10,000/yr needs insurance instead"
        ],
        answer: 1,
        explanation: "Cost–benefit for controls compares annualized control cost against annualized risk reduction: $60,000 saved for $30,000 spent is a clear fund. Expecting zero ALE (option 3) misunderstands residual risk — it always exists; option 1 compares cost against the wrong quantity (pre-treatment loss); option 4 invents a rule — insurance transfers loss but does not reduce it."
      },
      {
        q: "After controls, a medium residual risk remains on a legacy system. The business owner reviews the numbers and signs a formal acceptance. Six months later a threat-intelligence report shows the vulnerability is now exploited in the wild. What does the risk-management process require?",
        options: [
          "Nothing — the acceptance was signed and remains valid until the annual review",
          "Re-open the risk: acceptance is conditioned on the assessed likelihood, and a material threat change invalidates the premise of the decision",
          "Delete the risk from the register since it was accepted",
          "Escalate directly to customers as a breach notification"
        ],
        answer: 1,
        explanation: "Acceptance is a decision made against a specific likelihood/impact assessment; monitoring is the lifecycle stage that detects when the premise rots — exploit-in-the-wild is a textbook review trigger. The register keeps the risk (with its acceptance history), and customers are notified only on actual breach, not on elevated risk."
      },
      {
        q: "A team deploys only preventive controls (firewall, MFA, encryption) with no logging, alerting or backups. What is the fundamental gap?",
        options: [
          "No gap — prevention is the goal and the rest is operations",
          "No detective or corrective controls: when prevention eventually fails, the intrusion is invisible and recovery is improvised",
          "The gap is quantitative: they never computed ALE",
          "The gap is that preventive controls are always more expensive than detective ones"
        ],
        answer: 1,
        explanation: "Mature programs assume preventive controls WILL fail and pair them with detective controls (to shrink dwell time) and corrective controls (to restore). Option 3 may also be true but is not the structural gap; option 4 is simply false — cost ordering depends entirely on the control."
      },
      {
        q: "A critical, remotely exploitable vulnerability exists on an internet-facing payment host — but no threat actor currently targets this technology and the exploit requires rare conditions. Using R = T × V × A, what is the professionally correct assessment?",
        options: [
          "Risk is zero — no threat means no risk, permanently",
          "Risk is currently low because the threat leg is weak, but the vulnerability is severe on a high-value asset — so it must be monitored and re-assessed whenever threat activity changes",
          "Risk is high because vulnerability severity alone determines risk",
          "Risk cannot be assessed until an incident occurs"
        ],
        answer: 1,
        explanation: "The intersection formula cuts both ways: today's risk is genuinely low (no interested threat), but risk is dynamic — vulnerability severity on a valuable asset is the standing hazard, and threat intelligence is the trigger that reopens the assessment. Option 1 freezes a snapshot; option 3 is the base-score fallacy (severity without threat or asset context); option 4 waits for the most expensive possible data point."
      }
    ]
  },

  // ================================================== crypto 1.1
  {
    sectionId: "cyber-crypto-depth-s1",
    readingTime: 12,
    prerequisites: ["Comfort with basic algebra and gcd", "Binary representation of integers"],
    intro: "Modern cryptography is applied algebra wearing a trench coat. Modular arithmetic builds finite worlds where every operation stays bounded and decryption is possible; Euler's totient counts the invertible elements; and the extended Euclidean algorithm finds those inverses in logarithmic time. This machinery is not adjacent to RSA — it is the inside of RSA.",
    objectives: [
      "Compute fluently in Zn: reduction, inverses, and fast exponentiation",
      "State and apply Euler's theorem and Fermat's little theorem to shrink exponents",
      "Compute the Euler totient for prime, prime-power and coprime-composite moduli",
      "Run the extended Euclidean algorithm to solve ax ≡ 1 (mod n) and ax ≡ b (mod n)",
      "Define the discrete logarithm problem and explain why it anchors Diffie–Hellman, DSA and elliptic-curve cryptography"
    ],
    concepts: [
      {
        term: "Congruence modulo n",
        kind: "definition",
        statement: "$a \\equiv b \\pmod{n}$ iff $n$ divides $a - b$. Congruence is an equivalence relation, and addition, subtraction and multiplication respect it — so $\\mathbb{Z}_n = \\{0, 1, \\ldots, n-1\\}$ is a well-defined ring where every integer has exactly one representative. Division is the delicate operation: it requires an **inverse**.",
        detail: "This is the cryptographer's finite universe: numbers never grow past n, so a message block, a key and all intermediate arithmetic live in the same bounded world — the reason hardware implementations of RSA stay manageable."
      },
      {
        term: "When multiplication has an inverse",
        kind: "theorem",
        statement: "In $\\mathbb{Z}_n$, the multiplicative inverse of $a$ exists **iff** $\\gcd(a, n) = 1$. If $n$ is prime, every nonzero element is invertible and $\\mathbb{Z}_p$ is a field. The invertible elements form the multiplicative group $\\mathbb{Z}_n^*$, of size $\\varphi(n)$.",
        detail: "Practical consequence: exponent-based schemes need bases coprime to the modulus, and key generation explicitly verifies this with a gcd — one skipped check and the math collapses."
      },
      {
        term: "Euler's totient function",
        kind: "definition",
        statement: "$\\varphi(n)$ counts integers in $1..n$ coprime to $n$ — the size of $\\mathbb{Z}_n^*$. Key formulas: $\\varphi(p) = p-1$ for prime $p$; $\\varphi(p^k) = p^k - p^{k-1}$; $\\varphi(mn) = \\varphi(m)\\varphi(n)$ when $\\gcd(m,n)=1$; and generally $\\varphi(n) = n \\prod_{p \\mid n} (1 - 1/p)$.",
        detail: "For RSA's modulus $n = pq$, this collapses to $\\varphi(n) = (p-1)(q-1)$ — computable only by whoever knows p and q, which is precisely how the private key stays private."
      },
      {
        term: "Euler's theorem and Fermat's little theorem",
        kind: "theorem",
        statement: "If $\\gcd(a, n) = 1$ then $a^{\\varphi(n)} \\equiv 1 \\pmod{n}$ (Euler); in particular for prime $p$, $a^{p-1} \\equiv 1 \\pmod{p}$ (Fermat). Consequence: exponents can be reduced modulo $\\varphi(n)$ — and in RSA, choosing $d \\cdot e \\equiv 1 \\pmod{\\varphi(n)}$ makes $m^{ed} \\equiv m \\pmod{n}$, which is the entire correctness argument.",
        detail: "Beware the boundary: reduction needs the base coprime to the modulus; sloppy textbook exercises often ignore that edge, real implementations cannot."
      },
      {
        term: "Extended Euclidean algorithm",
        kind: "method",
        statement: "The Euclidean algorithm computes $\\gcd(a, b)$ in $O(\\log \\min(a,b))$ division steps (Lamé: the worst case runs through Fibonacci numbers). The **extended** version additionally returns $x, y$ with $ax + by = \\gcd(a,b)$ — so if $\\gcd(a, n) = 1$, the coefficient $x$ from $ax + ny = 1$ is exactly $a^{-1} \\bmod n$.",
        detail: "This is how RSA computes the private exponent d from e and φ(n), and how protocols verify key candidates — millions of bits handled by an algorithm you can run by hand on small numbers."
      },
      {
        term: "Square-and-multiply exponentiation",
        kind: "method",
        statement: "To compute $a^e \\bmod n$: write $e$ in binary; repeatedly square $a$ (reducing mod $n$ every step) and multiply into the accumulator at each 1-bit. Cost: $O(\\log e)$ modular multiplications — a 2048-bit exponent costs a few thousand multiplications instead of $2^{2048}$.",
        detail: "Reducing after EVERY multiplication keeps intermediates below $n^2$; forgetting to reduce is how naive implementations overflow or leak timing."
      },
      {
        term: "The discrete logarithm problem",
        kind: "definition",
        statement: "Given a cyclic group with generator $g$ and an element $y = g^x$, find $x$. For well-chosen groups (large prime-order subgroups of $\\mathbb{Z}_p^*$, or elliptic-curve groups) no classical algorithm beats roughly $\\sqrt{|G|}$ group operations. This hardness is the foundation of Diffie–Hellman key exchange, DSA signatures and their elliptic-curve variants.",
        detail: "Exponentiation is the easy direction, discrete log the hard one — the same asymmetry that makes RSA work, but built on a different trapdoor. Index-calculus algorithms make finite-field DLP subexponential, which is why DH moduli are much larger than ECC keys."
      },
      {
        term: "Element order and cyclic subgroups",
        kind: "insight",
        statement: "The order of an element $g$ (smallest $k > 0$ with $g^k = 1$) divides the group order (Lagrange). $\\mathbb{Z}_p^*$ is cyclic of order $p-1$; protocols deliberately choose generators of large prime-order subgroups so that discrete logs cannot be split into easy factors via the Chinese remainder theorem.",
        detail: "This detail is not pedantry: working in a small or smooth-ordered subgroup (small-subgroup attacks) lets attackers peel the private key piece by piece — real ECDH implementations validate received points for exactly this reason."
      }
    ],
    examples: [
      {
        title: "Computing a modular inverse with the extended Euclidean algorithm",
        problem: "Find $7^{-1} \\bmod 31$ — the exact step RSA performs when computing a private exponent — and then solve the full congruence $7x \\equiv 3 \\pmod{31}$.",
        steps: [
          { label: "Step 1: Euclid downward", text: "$31 = 4 \\cdot 7 + 3$; $7 = 2 \\cdot 3 + 1$. The gcd is 1, so the inverse exists (as guaranteed: 31 is prime and 7 is nonzero)." },
          { label: "Step 2: Back-substitute", text: "$1 = 7 - 2 \\cdot 3 = 7 - 2(31 - 4 \\cdot 7) = 9 \\cdot 7 - 2 \\cdot 31$." },
          { label: "Step 3: Read off the inverse", text: "Modulo 31 the second term vanishes: $9 \\cdot 7 \\equiv 1$, so $7^{-1} \\equiv 9 \\pmod{31}$." },
          { label: "Step 4: Verify", text: "$7 \\times 9 = 63 = 2 \\cdot 31 + 1 \\equiv 1 \\pmod{31}$ ✓" },
          { label: "Step 5: Solve the congruence", text: "$7x \\equiv 3 \\pmod{31}$ multiplies through by the inverse: $x \\equiv 9 \\cdot 3 = 27 \\pmod{31}$. Check: $7 \\cdot 27 = 189 = 6 \\cdot 31 + 3$ ✓" }
        ],
        result: "The inverse is 9, and any congruence $7x \\equiv b \\pmod{31}$ now solves in one multiplication: $x \\equiv 9b$."
      },
      {
        title: "Shrinking a huge exponent and building a toy RSA key",
        problem: "Compute $2^{100} \\bmod 7$ without a hundred multiplications, then assemble a complete toy RSA key pair on $n = 55$ and verify encryption/decryption round-trip.",
        steps: [
          { label: "Step 1: Totient of a prime", text: "$\\varphi(7) = 6$ and $\\gcd(2,7)=1$, so Euler applies." },
          { label: "Step 2: Reduce the exponent", text: "$100 = 16 \\cdot 6 + 4$, hence $2^{100} \\equiv 2^4 = 16 \\equiv 2 \\pmod 7$ — four multiplications replace a hundred." },
          { label: "Step 3: Toy keygen", text: "$p=5, q=11 \\Rightarrow n = 55$, $\\varphi(n) = 4 \\cdot 10 = 40$. Choose $e = 3$ ($\\gcd(3,40)=1$). Extended Euclid (or inspection): $3 \\cdot 27 = 81 = 2 \\cdot 40 + 1$, so $d = 27$." },
          { label: "Step 4: Encrypt and decrypt", text: "Message $m = 2$: $c = 2^3 \\bmod 55 = 8$. Decrypt: $8^{27} \\bmod 55$. Since $ed = 81 = 1 + 2\\varphi$, Euler gives $8^{27} = 2^{81} = 2 \\cdot (2^{40})^2 \\equiv 2 \\cdot 1 = 2 \\pmod{55}$ ✓" },
          { label: "Step 5: What made it work", text: "The identity $ed \\equiv 1 \\pmod{\\varphi(n)}$ guarantees $m^{ed} = m^{1 + k\\varphi} = m \\cdot (m^{\\varphi})^k \\equiv m$ — exponent reduction is not a computational trick, it IS the correctness proof of RSA." }
        ],
        result: "$2^{100} \\equiv 2 \\pmod 7$, and the toy key $(n{=}55, e{=}3, d{=}27)$ round-trips exactly as Euler's theorem promises — real RSA is this computation with 2048-bit numbers."
      }
    ],
    keyTakeaways: [
      "Multiplicative inverses mod n exist exactly when gcd(a, n) = 1; the extended Euclidean algorithm finds them in O(log n) steps.",
      "φ(n) counts the invertible elements: p−1 for primes, multiplicative over coprime factors, computable for n = pq only by the factorer.",
      "Euler and Fermat reduce exponents mod φ(n) — the algebraic heart of RSA's correctness.",
      "Square-and-multiply turns kilobit exponents into a few thousand modular multiplications; reduce after every step.",
      "Discrete-log hardness (in prime-order subgroups, or on elliptic curves) — not algorithm secrecy — is what secures DH, DSA and ECC."
    ],
    quiz: [
      {
        q: "Does 6 have a multiplicative inverse modulo 9, and why?",
        options: [
          "Yes — every nonzero element of Zn has an inverse",
          "No — gcd(6, 9) = 3 ≠ 1, so 6 is a zero divisor and no multiple of it can reach 1 mod 9",
          "Yes — because 9 is odd",
          "No — inverses exist only modulo prime powers"
        ],
        answer: 1,
        explanation: "An inverse exists iff gcd(a, n) = 1; here gcd(6,9) = 3, and indeed 6·k mod 9 always lands in {0, 3, 6}, never 1. Option 1 ignores zero divisors (6·3 = 18 ≡ 0 mod 9 — a zero divisor); parity is irrelevant; inverses exist for the units of ANY modulus, prime or not — primality just makes 'nonzero' sufficient."
      },
      {
        q: "Compute φ(100).",
        options: ["99", "50", "40", "25"],
        answer: 2,
        explanation: "$100 = 2^2 \\cdot 5^2$, so $\\varphi(100) = 100 (1 - \\tfrac12)(1 - \\tfrac15) = 100 \\cdot \\tfrac12 \\cdot \\tfrac45 = 40$. Option 99 is φ of a prime; option 50 is half of n (true only for n = 2p with p odd prime... actually true for n = 2·odd-coprime structure — a classic mix-up); option 25 is φ(25). Counting directly: numbers in 1..100 coprime to 100 (not divisible by 2 or 5) — 40 of them."
      },
      {
        q: "What is 3⁻¹ mod 40?",
        options: ["13", "27", "17", "37"],
        answer: 1,
        explanation: "Check by multiplication: 3 · 27 = 81 = 2 · 40 + 1 ✓. The distractors are near-misses: 3 · 13 = 39 ≡ −1 (that is the inverse of −3); 3 · 17 = 51 ≡ 11; 3 · 37 = 111 ≡ 31. Run one line of extended Euclid (or just test candidates) — verification is always one multiplication."
      },
      {
        q: "Compute 5¹⁰² mod 7 using Fermat's little theorem.",
        options: ["5", "1", "2", "0"],
        answer: 1,
        explanation: "Fermat: since gcd(5,7)=1, 5⁶ ≡ 1 (mod 7). Then 102 = 17 · 6, so 5¹⁰² = (5⁶)¹⁷ ≡ 1. The trap answer 5 comes from noticing 102 ≡ 4 (mod 6) and answering 5⁴ = 625 ≡ 2 — which is option 3, wrong only if you miscount; the real lesson is that the exponent reduces mod p−1 = 6, giving 102 mod 6 = 0 and the answer 1."
      },
      {
        q: "For which modulus does Zn form a field (every nonzero element multiplicatively invertible)?",
        options: ["12", "15", "13", "9"],
        answer: 2,
        explanation: "Z_n is a field iff n is prime. 13 is prime, so Z_13 is the field GF(13). For 12, 15 and 9 the non-coprime elements (e.g., 3 with 9, 5 with 15, 4 with 12) are zero divisors with no inverse — 3 · 3 ≡ 0 (mod 9) already shows 3 cannot be invertible."
      },
      {
        q: "Over GF(11) with generator g = 2, what is the discrete logarithm of 9 (i.e., x with 2ˣ ≡ 9 mod 11)?",
        options: ["3", "5", "6", "7"],
        answer: 2,
        explanation: "Powers of 2 mod 11: 2, 4, 8, 5, 10, 9 — so 2⁶ = 64 = 5·11 + 9 ✓, giving x = 6. Option 3 gives 2³ = 8; option 5 gives 2⁵ = 32 ≡ 10; option 7 gives 2⁷ = 128 ≡ 7. Brute force is trivial at this size — which is the point: with a 256-bit group, the same table would need ~2¹²⁸ rows, and that gap is the entire security of discrete-log systems."
      }
    ]
  },

  // ================================================== crypto 1.2
  {
    sectionId: "cyber-crypto-depth-s2",
    readingTime: 11,
    prerequisites: ["Modular arithmetic and XOR (cyber-crypto-depth-s1)", "Binary data representation"],
    intro: "A block cipher is a machine for scrambling fixed-size blocks so thoroughly that flipping one input bit randomizes half the output — yet with the secret key, the chaos reverses perfectly. Shannon named the two ingredients confusion and diffusion; Feistel networks and substitution–permutation networks are the two great architectures for delivering them.",
    objectives: [
      "Explain confusion and diffusion and map each to the concrete components of AES",
      "Contrast Feistel networks and substitution–permutation networks structurally",
      "Walk one full AES round: AddRoundKey, SubBytes, ShiftRows, MixColumns",
      "Explain the role of key schedules and the attacks that target them",
      "Quantify the avalanche effect and justify round counts and key lengths"
    ],
    concepts: [
      {
        term: "Confusion and diffusion",
        kind: "definition",
        statement: "Shannon's 1949 twin requirements: **confusion** — the relation between key and ciphertext must be complex (a flipped key bit changes the ciphertext unpredictably: S-boxes and key mixing); **diffusion** — the statistical structure of the plaintext must spread out (a flipped plaintext bit changes many ciphertext bits: permutations and linear mixing). The design target: every ciphertext bit depends on every plaintext bit and every key bit.",
        detail: "Diffusion without confusion is linear algebra — solvable; confusion without diffusion leaves local statistics attackable. Every block cipher is an industrial machine for alternating the two."
      },
      {
        term: "Substitution–permutation network (SPN)",
        kind: "definition",
        statement: "The whole block passes through alternating layers of **substitution** (parallel S-boxes) and **permutation/mixing** every round, plus key addition. Because the entire state transforms each round, diffusion is uniform and fast — but every component must be **invertible**, since decryption runs the exact inverses in reverse order. AES is the canonical SPN.",
        detail: "Invertibility constrains design: the AES S-box is a bijection on bytes (built from multiplicative inverses in GF(2⁸) plus an affine map) precisely so SubBytes⁻¹ exists."
      },
      {
        term: "Feistel network",
        kind: "method",
        statement: "Split the block into halves $(L, R)$ and iterate $L_i = R_{i-1}$, $R_i = L_{i-1} \\oplus F(R_{i-1}, K_i)$. The magic: **F itself need not be invertible** — decryption runs the same circuit with round keys in reverse order, because the XOR structure cancels F on the way back. DES is the classic; roughly half the block changes per round.",
        detail: "This is why DES could use a deliberately wild round function: nobody ever needs F⁻¹. The price is slower diffusion — two-ish rounds to touch all bits versus the SPN's one-ish — hence Feistel ciphers traditionally need more rounds."
      },
      {
        term: "AES round structure",
        kind: "method",
        statement: "The 128-bit state is a 4×4 byte matrix. Per round: **AddRoundKey** (XOR the round subkey), **SubBytes** (each byte through the S-box — confusion), **ShiftRows** (rotate row r left by r bytes — transposition), **MixColumns** (each column multiplied by a fixed MDS matrix over GF(2⁸) — diffusion). The final round omits MixColumns; 10/12/14 rounds for 128/192/256-bit keys.",
        detail: "MixColumns has branch number 5: change one input byte and all four output bytes of that column change (at least 5 bytes differ counting input and output) — the arithmetic engine of AES diffusion."
      },
      {
        term: "Key schedule",
        kind: "definition",
        statement: "The routine that expands the master key into per-round round keys, ideally spreading every master-key bit across many rounds. Weak or overly structured schedules enable **related-key attacks** (differences between keys propagate predictably) and slide attacks (two rounds with identical subkeys). The AES-192/256 schedule drew criticism; AES-128's has held up in practice.",
        detail: "Design rule: an attacker should not find two master keys whose round-key streams agree on many rounds — the schedule must behave like a keyed pseudorandom generator over rounds."
      },
      {
        term: "Avalanche effect",
        kind: "law",
        statement: "Flipping one bit of plaintext or key must flip **each output bit with probability ≈ 1/2** — half the output bits change on average, with no correlation to which input bit moved. The strict avalanche criterion demands independence per output bit. Rounds are counted so full diffusion is achieved several times over, leaving margin beyond the best known attacks.",
        detail: "Empirically, AES reaches full-state diffusion after two rounds (see the worked example); best cryptanalytic attacks on AES reach far fewer rounds than the full count — the remaining rounds are the safety margin that has kept it standing for decades."
      },
      {
        term: "DES vs AES by the numbers",
        kind: "insight",
        statement: "DES: 64-bit block, 56-bit key, 16 Feistel rounds — brute-forceable since 1998 (the EFF Deep Crack machine, days per key), and 64-bit blocks now leak via birthday collisions in CBC mode at gigabyte scales. AES: 128-bit block, 128/192/256-bit keys, SPN — brute force out of reach classically; 3DES was the stopgap (with its own block-size ceiling).",
        detail: "The lesson is that BOTH parameters age: key length sets the brute-force budget, block length sets how much data you can safely encrypt before collisions and chaining effects betray structure."
      }
    ],
    examples: [
      {
        title: "Tracing one flipped bit through two AES rounds",
        problem: "Flip one bit of one plaintext byte and trace how far the difference spreads through the AES round layers — the quantitative meaning of diffusion.",
        steps: [
          { label: "Step 1: SubBytes", text: "The changed byte maps through the S-box to an uncorrelated different byte — the S-box's maximum differential probability is only 4/256, so no input difference predicts output differences usefully. One-bit input difference yields a multi-bit output difference; confusion has begun." },
          { label: "Step 2: ShiftRows", text: "The differing byte rotates into a new column. Byte-weight of the difference unchanged (still 1 byte) — but its position is now staged for mixing." },
          { label: "Step 3: MixColumns", text: "Branch number 5: that single differing input byte forces ALL FOUR output bytes of its column to change. The difference now covers a full column of the state — 4 bytes." },
          { label: "Step 4: Round 2", text: "SubBytes decorrelates the four differing bytes again; ShiftRows distributes those four bytes into four DIFFERENT columns; the second MixColumns spreads each — every one of the 16 state bytes now differs." },
          { label: "Step 5: Where the key fits", text: "AddRoundKey XORs fresh subkey material each round. Note that in XOR-differential analysis the round-key XOR cancels out — which is exactly why the S-box and the MDS layer, not the key addition, must supply the cipher's nonlinear resistance. The key schedule's job is that no two rounds reuse correlated key bits." },
          { label: "Step 6: Read the margin", text: "Two rounds already touch the whole state; AES uses 10–14. The surplus rounds are the margin standing between the design and the best known (multi-round) attacks — shrinking rounds is how margins get quietly destroyed." }
        ],
        result: "One flipped plaintext bit becomes a full-state difference within two rounds — with roughly half the output bits flipping after full encryption, exactly the 50% the avalanche criterion demands."
      },
      {
        title: "Feistel decryption for free",
        problem: "Show that a two-round Feistel cipher decrypts using the same round function — no inverse of F ever needed — and demonstrate the cancellation algebraically.",
        steps: [
          { label: "Step 1: Two encryption rounds", text: "From $(L_0, R_0)$: $(L_1, R_1) = (R_0,\\ L_0 \\oplus F(R_0, K_1))$, then $(L_2, R_2) = (R_1,\\ L_1 \\oplus F(R_1, K_2))$. The ciphertext is $(L_2, R_2)$ — F is applied twice, never inverted." },
          { label: "Step 2: Feed the swap back", text: "Decryption starts from $(R_2, L_2)$ — the ciphertext with halves exchanged — and applies the SAME round structure, but with K₂ first: the new pair becomes $(A_1, B_1) = (L_2,\\ R_2 \\oplus F(L_2, K_2))$." },
          { label: "Step 3: Watch F cancel", text: "$R_2 = L_1 \\oplus F(R_1, K_2)$ and $L_2 = R_1$, so $B_1 = L_1 \\oplus F(R_1, K_2) \\oplus F(R_1, K_2) = L_1$. The XOR of F with itself is zero — one round of encryption is undone without ever inverting F. Now $(A_1, B_1) = (R_1, L_1)$." },
          { label: "Step 4: Repeat with K₁", text: "The K₁ round cancels identically, leaving $(R_0, L_0)$ — the plaintext with halves swapped (Feistel ciphers conventionally output the swap, as DES does). Round-key order reversed, hardware identical." },
          { label: "Step 5: The design consequence", text: "DES could therefore use a round function full of bit-slicing, expansions and wild S-boxes with NO inverse specified. The structural cost: only half the block changes per round, so more rounds are needed for the diffusion an SPN gets faster." }
        ],
        result: "A Feistel cipher's decryption is its encryption with reversed round keys — the XOR symmetry does all the work, and F can be as un-invertible as the designer likes."
      }
    ],
    keyTakeaways: [
      "Confusion (S-boxes, key mixing) hides the key–ciphertext relation; diffusion (ShiftRows, MixColumns) spreads plaintext structure — both are needed, alternated.",
      "Feistel: F need not be invertible; decryption = same circuit, reversed round keys. SPN (AES): every component invertible, whole state mixed each round.",
      "MixColumns' branch number 5 gives provable per-round diffusion: one changed byte forces its whole column to change.",
      "Key schedules matter — related-key and slide attacks target key-schedule structure, not the round function.",
      "Rounds = full diffusion plus margin (AES: 2 rounds to full diffusion, 10–14 used); key length is the brute-force budget, block length the collision budget."
    ],
    quiz: [
      {
        q: "In AES, which component is the primary engine of DIFFUSION between bytes of the state?",
        options: ["SubBytes", "ShiftRows together with MixColumns", "AddRoundKey", "The key schedule"],
        answer: 1,
        explanation: "ShiftRows repositions bytes across columns and MixColumns mixes each column with an MDS matrix (branch number 5) — together they spread differences across the state. SubBytes is the confusion engine (byte-local, nonlinear); AddRoundKey mixes key material but changes no plaintext-difference pattern; the key schedule operates outside the state, generating subkeys."
      },
      {
        q: "Why can a Feistel cipher's round function F be non-invertible?",
        options: [
          "Because F is only used during encryption, and decryption uses a different function",
          "Because the XOR self-cancellation in the Feistel structure undoes F without ever computing F⁻¹ — decryption is the same circuit with reversed round keys",
          "Because F is a one-way hash function and hashes are always safe",
          "Because the halves of the block are swapped after every round"
        ],
        answer: 1,
        explanation: "In $R_i = L_{i-1} \\oplus F(R_{i-1}, K_i)$, the same F-term reappears on decryption and XORs itself away — no inverse is ever computed. Option 1 contradicts the beautiful fact that the SAME hardware serves both directions; option 3 confuses 'no inverse needed' with 'safe as a hash'; option 4 describes a real Feistel detail but is not the reason."
      },
      {
        q: "You flip exactly one bit of an AES-128 plaintext and compare the ciphertexts. Roughly how many of the 128 ciphertext bits do you expect to differ?",
        options: ["About 1 — encryption preserves the size of the change", "About 32", "About 64", "All 128"],
        answer: 2,
        explanation: "The avalanche criterion demands each output bit flip with probability 1/2 — hence ~64 of 128 bits differ, uncorrelated with WHICH input bit moved. Answer 1 is diffusion failure; answer 4 would indicate suspicious determinism (each input bit forcing every output bit); answer 32 is the number you get after only partial mixing."
      },
      {
        q: "MixColumns has branch number 5. What does that guarantee?",
        options: [
          "AES needs at least 5 rounds for security",
          "Any change to the column's input bytes forces at least 5 bytes total (input + output) to differ — so a single changed input byte changes all four output bytes of its column",
          "The S-box maps each byte to one of 5 possible outputs",
          "Each round key is 5 bytes longer than the master key"
        ],
        answer: 1,
        explanation: "Branch number = min over nonzero input differences of (changed input bytes + changed output bytes); a value of 5 means one differing input byte (count 1) forces at least 4 differing output bytes — the whole column. That is the MDS-matrix arithmetic behind AES diffusion. The distractors attach the number 5 to the wrong quantities entirely."
      },
      {
        q: "Why does the LAST AES round omit MixColumns?",
        options: [
          "To save hardware — the last round is the most frequently executed",
          "Because the S-box is not invertible in the final round",
          "Because MixColumns last would add no diffusion benefit against an attacker who directly observes the ciphertext, while its removal keeps decryption structurally symmetric (no InvMixColumns needed between the final key additions)",
          "To prevent weak-key generation in the key schedule"
        ],
        answer: 2,
        explanation: "MixColumns as the final operation would force decryption to perform InvMixColumns interleaved between round-key additions, complicating equivalent-inverse implementations — and since the attacker reads the ciphertext directly, permuting the output one last time adds no protection against them. Option 1 is backwards (all rounds execute equally per block); the AES S-box IS invertible everywhere; key schedules are unrelated to round-layer ordering."
      }
    ]
  },

  // ================================================== crypto 1.3
  {
    sectionId: "cyber-crypto-depth-s3",
    readingTime: 11,
    prerequisites: ["Block cipher basics (cyber-crypto-depth-s2)", "XOR arithmetic"],
    intro: "AES encrypts 16 bytes at a time; the world sends gigabytes. Modes of operation are the glue — and the graveyard: ECB leaks the plaintext's structure, CBC falls to padding oracles when its IV is predictable, CTR collapses catastrophically on nonce reuse. GCM finally wraps CTR in authentication so the glue fails safe.",
    objectives: [
      "Explain why ECB is essentially never acceptable, including the cut-and-paste attack",
      "Apply CBC correctly: unpredictable IVs, padding discipline, and why integrity is still needed",
      "Analyze CTR mode: parallelism, seekability, and the nonce-reuse disaster",
      "Describe GCM as CTR plus GHASH and its strict nonce rules",
      "Compare error propagation across modes for noisy-channel scenarios"
    ],
    concepts: [
      {
        term: "Why modes exist",
        kind: "definition",
        statement: "A block cipher is a keyed permutation on one fixed n-bit block. Modes chain or combine block operations to encrypt (a) messages longer than one block, (b) messages not a block multiple, while (c) achieving semantic security — which demands **randomization**: a bare deterministic block cipher leaks equality of blocks even under a perfect cipher.",
        detail: "That third requirement is the one teams forget: the mode, not the cipher, provides the randomness (IV, nonce) that makes repeated plaintexts encrypt differently."
      },
      {
        term: "ECB — electronic codebook",
        kind: "insight",
        statement: "$C_i = E_K(P_i)$, each block independent. Deterministic: **equal plaintext blocks produce equal ciphertext blocks**, so structure survives encryption — the famous ECB 'penguin' bitmap remains a penguin. Malleable via cut-and-paste: ciphertext blocks can be reordered or swapped between messages encrypted under the same key. Essentially never the right choice.",
        detail: "The one legitimate use is encrypting exactly one block of high-entropy data (e.g., wrapping a raw key) — where there is no structure to leak and no second block to splice."
      },
      {
        term: "CBC — cipher block chaining",
        kind: "method",
        statement: "$C_i = E_K(P_i \\oplus C_{i-1})$ with a random first vector IV. Randomization via the IV makes repeated plaintexts encrypt differently. Two rules: the IV must be **unpredictable at encryption time** (not merely unique — predictable IVs enable chosen-plaintext recovery of identical-prefix messages), and CBC without a MAC is padding-oracle bait. Decryption parallelizes; encryption is inherently sequential.",
        detail: "Padding oracle: when messages are padded (PKCS#7) and a decryptor leaks whether padding was valid, an attacker adjusts ciphertext blocks adaptively and decrypts ANY ciphertext without the key — the Vaudenay attack that later bit TLS deployments in practice."
      },
      {
        term: "CTR — counter mode",
        kind: "method",
        statement: "Keystream blocks $S_i = E_K(\\text{nonce} \\, || \\, i)$; ciphertext $C_i = P_i \\oplus S_i$ — the block cipher becomes a stream cipher. No padding, bit-granular, both directions fully parallel, and seekable (decrypt block 9 without touching 1–8). The absolute rule: **the (key, nonce) pair must never repeat** — reuse regenerates the same keystream and collapses into the two-time-pad break.",
        detail: "Nonces derived from resettable counters or wall clocks are the recurring production failure: a server restart or clock rollback silently replays keystream."
      },
      {
        term: "GCM — Galois/counter mode",
        kind: "method",
        statement: "CTR-mode encryption plus a **GHASH** authenticator (carry-less multiplication in GF(2¹²⁸)) over the ciphertext and associated data, producing a 128-bit tag: confidentiality AND integrity — AEAD. Rules: 96-bit nonces are standard; at most 2³² invocations per key; and **nonce reuse is fatal and permanent** — it leaks the authentication key H, after which every past and future tag under that key can be forged.",
        detail: "GCM's fragility under nonce reuse is why libraries refuse to let you manage nonces casually, and why misuse-resistant designs (SIV modes) exist for stateless or virtualized environments where replay is possible."
      },
      {
        term: "Error propagation compared",
        kind: "law",
        statement: "One ciphertext bit flip in transit: **ECB** — the containing block garbles on decryption, later blocks unaffected. **CBC** — block $j$ decrypts to garbage AND the same single bit flips in plaintext block $j{+}1$ (because $P_{j+1} = D(C_{j+1}) \\oplus C_j$); self-synchronizes after two blocks. **CTR/OFB** — exactly the corresponding plaintext bit flips, nothing else. Error tolerance and tamper resistance are opposites.",
        detail: "For a noisy radio link without retransmission, CTR's surgical error behavior is a feature; for adversarial networks, that same property is silent malleability — only a MAC/tag converts it into a detected tamper."
      },
      {
        term: "Authenticate-then-use: the AEAD discipline",
        kind: "insight",
        statement: "Malleable modes (all of them, pre-GCM) demand a separate integrity layer, and the order matters: **encrypt-then-MAC** — verify the tag BEFORE any decrypted plaintext is parsed, used or stored. MAC-then-encrypt is the historically bug-ridden alternative (padding oracles live in that gap).",
        detail: "The modern synthesis is AEAD (GCM, ChaCha20-Poly1305): one API where the tag verification is built in and the library refuses to release plaintext on a bad tag — removing the foot-gun from the application entirely."
      }
    ],
    examples: [
      {
        title: "Error propagation: CBC vs CTR on a noisy link",
        problem: "One bit of ciphertext block 5 flips in transit. Describe exactly what the receiver sees under CBC and under CTR.",
        steps: [
          { label: "Step 1: CBC — the garbled block", text: "$P_5 = D(C'_5) \\oplus C_4$. The avalanche property of the block cipher means all 16 bytes of $P_5$ decrypt to garbage." },
          { label: "Step 2: CBC — the collateral bit", text: "$P_6 = D(C_6) \\oplus C'_5$: the flipped ciphertext bit flips exactly the corresponding bit of $P_6$ — one bit, same position, everything else intact." },
          { label: "Step 3: CBC — recovery", text: "$P_7 = D(C_7) \\oplus C_6$ is untouched: CBC self-synchronizes two blocks after the error. Total damage: 1 fully garbled block + 1 flipped bit." },
          { label: "Step 4: CTR — surgical damage", text: "The keystream for block 5 depends only on (nonce, counter), not on any ciphertext — so it regenerates identically. $P'_5 = P_5 \\oplus \\text{error}$: exactly one plaintext bit flips. No spread, no desynchronization, ever." },
          { label: "Step 5: The security flip side", text: "CTR's quietness cuts both ways: an attacker flips chosen plaintext bits with the same precision (targeted edits like changing a payment amount's low bit). Nothing detects this without a tag — hence GCM/ChaCha20-Poly1305 rather than raw CTR." }
        ],
        result: "CBC amplifies one bit into two damaged blocks then self-heals; CTR damages exactly one bit forever. Noise tolerance and tamper evidence are opposing design axes — pick per environment, and always authenticate."
      },
      {
        title: "Nonce reuse turns CTR into a broken one-time pad",
        problem: "A buggy server encrypts two messages with the same key AND the same nonce/counter start: $C_1 = P_1 \\oplus S$ and $C_2 = P_2 \\oplus S$ over the shared keystream S. The attacker knows $P_1$ begins with the ASCII crib 'Authorization: Bearer '. What exactly leaks?",
        steps: [
          { label: "Step 1: The key cancels", text: "$C_1 \\oplus C_2 = (P_1 \\oplus S) \\oplus (P_2 \\oplus S) = P_1 \\oplus P_2$. The keystream — and with it the key's protection — has vanished from the equation." },
          { label: "Step 2: Apply the crib", text: "$(C_1 \\oplus C_2) \\oplus \\text{crib}$ recovers the first 22 bytes of $P_2$: wherever the crib covers, $P_1 \\oplus P_2 \\oplus P_1 = P_2$. Readable session tokens, if that is where they lived." },
          { label: "Step 3: Fragments cascade", text: "Every recovered fragment of $P_2$ becomes a crib for $P_1$ and vice versa; natural-language and protocol redundancy (headers, JSON keys) lets an attacker extend the break by hand — each byte recovered is a new lever." },
          { label: "Step 4: Known plaintext is total", text: "If $P_1$ is ever known in full (a template the attacker chose, e.g., a request they induced), then $S = C_1 \\oplus P_1$ is recovered outright — and every FUTURE message under the same nonce decrypts before it is even sent." },
          { label: "Step 5: The GCM multiplier", text: "Under GCM the same mistake additionally leaks the GHASH key H, and forgeries become possible retroactively and permanently — confidentiality was only half the loss." }
        ],
        result: "Reuse converts unbreakable-looking encryption into an algebra puzzle: the cipher was never the problem; the nonce discipline was. Treat (key, nonce) uniqueness as a hard, tested invariant — never derive nonces from resettable counters or clocks."
      }
    ],
    keyTakeaways: [
      "ECB leaks block equality and permits cut-and-paste — plaintext structure survives encryption; it is essentially never acceptable.",
      "CBC needs an unpredictable IV and, without a MAC, invites padding oracles; encrypt-then-MAC is the safe composition.",
      "CTR: parallel, seekable, no padding — but nonce reuse is the two-time pad, and in GCM it also permanently destroys authenticity (H leaks).",
      "Error propagation: ECB one block, CBC two blocks (self-sync), CTR exactly one bit — noise tolerance is silent malleability.",
      "Modern default: an AEAD mode (GCM or ChaCha20-Poly1305), unique nonces per key, tag verified before any plaintext is used."
    ],
    quiz: [
      {
        q: "A bitmap image encrypted with AES-ECB still shows a recognizable silhouette of the image. Why did encryption fail to hide it?",
        options: [
          "AES is too weak for image data",
          "ECB is deterministic per block: identical plaintext blocks yield identical ciphertext blocks, so the image's large-scale pattern of repeated (background) blocks survives",
          "The key was too short for a megabyte image",
          "Images require a stream cipher rather than a block cipher"
        ],
        answer: 1,
        explanation: "ECB maps each block independently, so frequency and adjacency structure in the plaintext reappear as ciphertext-block equality — the penguin problem. The cipher is fine; the MODE provides no randomization. Key length sets brute-force cost, not pattern-hiding; and stream ciphers used without randomization (reused keystream) leak structure just as badly."
      },
      {
        q: "A team argues: 'Our CBC implementation uses a unique IV for every message, so we are safe.' Which rule are they missing?",
        options: [
          "CBC IVs must also be unpredictable at encryption time — a unique but predictable IV still enables chosen-plaintext attacks that recover identical-prefix messages",
          "CBC IVs must be kept secret from the receiver",
          "CBC IVs must be longer than the key",
          "CBC IVs must be hashed before use"
        ],
        answer: 0,
        explanation: "If the attacker can predict the IV before choosing their plaintext, they can craft messages whose first encrypted block reveals whether a target ciphertext's prefix matches — the BEAST-class attack. Random (hence unpredictable AND unique) IVs close it. The IV is not secret (the receiver needs it), and its length is fixed at one block by the mode itself."
      },
      {
        q: "Two messages were encrypted with AES-CTR under the same key and the same nonce. The attacker knows one plaintext in full. What can they now do?",
        options: [
          "Recover the AES key and decrypt all future traffic under it",
          "Recover the keystream for that nonce, decrypt the second message immediately — and decrypt any other message that reuses the nonce, without ever learning the key",
          "Nothing, unless they also know the second plaintext",
          "Forge authentication tags for both messages"
        ],
        answer: 1,
        explanation: "$S = C_1 \\oplus P_1$ gives the keystream directly; the key itself stays hidden but no longer matters for that nonce. This is why keystream reuse is an algebraic break, not a statistical one. Option 1 overstates it (AES remains unbroken); option 3 misses that one known plaintext is sufficient; option 4 confuses CTR with GCM — raw CTR has no tags to forge."
      },
      {
        q: "Which modes allow PARALLEL encryption of multiple blocks in one message?",
        options: ["CBC only", "ECB and CTR", "CBC and CTR", "Only GCM"],
        answer: 1,
        explanation: "ECB blocks are independent, and CTR keystream blocks depend only on (nonce, counter) — both parallelize encryption. CBC's $C_i$ depends on $C_{i-1}$, so encryption is sequential (decryption does parallelize, since each block needs only its ciphertext neighbor). GCM's encryption is CTR — but 'only GCM' wrongly excludes the raw modes."
      },
      {
        q: "Under GCM, a server accidentally reuses a nonce for a handful of messages, then fixes the bug and switches to fresh nonces — same key. What is the honest security assessment?",
        options: [
          "Confidentiality was briefly weakened but the switch restored everything — new nonces mean new protection",
          "The reuse leaked the GHASH authentication key H; under that key, tags for past AND future messages can be forged — the key must be rotated, not just the nonce discipline fixed",
          "No harm: GCM detects nonce reuse and refuses to encrypt",
          "Only the messages that shared a nonce are affected, and only their confidentiality"
        ],
        answer: 1,
        explanation: "GCM nonce reuse is the documented catastrophic failure: the forgeries become possible retroactively and permanently because H is recoverable from the colliding authenticators. Fixing nonce generation stops the bleeding but does not un-leak H — the key must be retired. And no, GCM has no built-in reuse detector (option 3); option 4 understates both the scope (authenticity, not just confidentiality) and the persistence."
      },
      {
        q: "A satellite telemetry link has a 0.1% raw bit-error rate and NO retransmission capability. Which raw mode minimizes plaintext damage per corrupted ciphertext bit, and what must accompany it?",
        options: [
          "CBC — its two-block error spread averages out the noise",
          "ECB — one garbled block per error is the minimum possible damage",
          "CTR — exactly one plaintext bit flips per ciphertext bit error; pair it with an AEAD-style tag per frame so tampering and corruption are at least detected",
          "GCM is impossible here because authentication requires retransmission"
        ],
        answer: 2,
        explanation: "CTR's error behavior is bit-surgical (keystream regenerates independent of ciphertext), so corruption costs exactly the flipped bits — ideal for a noisy, unidirectional channel. But the same property makes it perfectly malleable, so per-frame tags (or frame-level CRCs plus higher-layer integrity) are mandatory. Option 3's claim about authentication needing retransmission is false — verification only needs the received frame."
      }
    ]
  },

  // ================================================== crypto 1.4
  {
    sectionId: "cyber-crypto-depth-s4",
    readingTime: 10,
    prerequisites: ["CTR mode and nonce rules (cyber-crypto-depth-s3)", "XOR arithmetic"],
    intro: "A stream cipher is a one-time pad that compromises on perfection: instead of a truly random pad as long as all messages ever sent, it stretches a short key into a pseudorandom keystream with a deterministic generator. Every disaster in stream-cipher history — WEP's IV collisions, RC4's statistical biases, reused nonces — is a violation of the one rule: the same keystream must never touch two plaintexts.",
    objectives: [
      "State the stream cipher model and its single absolute invariant",
      "Prove the two-time-pad failure algebraically and execute a crib-drag",
      "Explain why purely linear generators (LFSRs) fall to Berlekamp–Massey",
      "Recount RC4's design and the biases that forced TLS to drop it",
      "Apply modern AEAD usage rules for ChaCha20-Poly1305 and AES-GCM"
    ],
    concepts: [
      {
        term: "The stream cipher model",
        kind: "definition",
        statement: "$S = \\text{KSG}(\\text{key}, \\text{nonce})$ generates a pseudorandom keystream; $C = P \\oplus S$. Security rests entirely on (a) the keystream being computationally indistinguishable from random and (b) the **(key, nonce) pair never repeating**. Advantages: no padding, bit-granular encryption, very high speed in software and hardware.",
        detail: "There is no integrity whatsoever in this model — flipping a ciphertext bit flips exactly one plaintext bit. Stream encryption without authentication is raw malleability."
      },
      {
        term: "The one-time pad and perfect secrecy",
        kind: "theorem",
        statement: "Shannon: if the key is truly random, at least as long as the message, and used exactly once, the ciphertext is statistically independent of the plaintext — **unconditionally secure**, unbreakable even with infinite computing power. Stream ciphers trade this information-theoretic guarantee for computational security: a short key, stretched deterministically.",
        detail: "The pad's three conditions are a package deal. Drop randomness (biased generator) or reuse (two-time pad) and the proof evaporates — the theorem is a precise statement of exactly what implementations keep getting wrong."
      },
      {
        term: "Keystream reuse — the two-time pad",
        kind: "law",
        statement: "If $S$ encrypts both $P_1$ and $P_2$: $C_1 \\oplus C_2 = P_1 \\oplus P_2$ — the key cancels entirely. Known plaintext yields the keystream outright; partial plaintext yields it in fragments that cascade (crib-dragging). WEP guaranteed such collisions with a 24-bit IV space: after roughly 5,000 packets a repeat becomes more likely than not.",
        detail: "The birthday arithmetic: with $2^{24}$ possible IVs, the 50% collision threshold is about $1.18 \\sqrt{2^{24}} \\approx 4{,}800$ draws — which is minutes of traffic. The protocol's nonce was simply too small for its own usage rate."
      },
      {
        term: "LFSRs and the price of linearity",
        kind: "definition",
        statement: "A linear feedback shift register of n bits evolves by a linear recurrence over GF(2); with a primitive feedback polynomial its period is maximal, $2^n - 1$, and its output looks statistically impressive. But the output is a **linear function of the initial state**: about 2n output bits plus linear algebra (or Berlekamp–Massey, which infers the minimal LFSR of ANY linear sequence from 2n bits) recover the state completely.",
        detail: "Hence real designs combine LFSRs nonlinearly — irregular clocking (A5/1 in GSM), shrinking/generator combinations, or scrap linear structure for ARX and table-based mixing. Linearity is cryptanalytic gravity: fine as a component, fatal as the whole."
      },
      {
        term: "RC4 — design and career",
        kind: "method",
        statement: "A **KSA** (key scheduling algorithm) shuffles a 256-byte state S according to the key; a **PRGA** (pseudorandom generation algorithm) then swaps and emits bytes forever — tiny code, high throughput, no padding. RC4 dominated 1990s traffic (SSL/TLS suites, WEP, WPA-TKIP) precisely because it was so easy to deploy.",
        detail: "The same simplicity that made it ubiquitous made it analyzable: with only 1,700 bytes of state and no nonce input in the original design, decades of statistical scrutiny accumulated into an unfixable bias catalogue."
      },
      {
        term: "RC4's biases",
        kind: "insight",
        statement: "Mantin–Shamir: the **second byte** of each keystream run is zero with probability ≈ 1/128 (vs 1/256 for random) — a usable ciphertext-only distinguisher and, across millions of TLS sessions, enough bias to recover repeated plaintext headers. Fluhrer–Mantin–Shamir showed related-key IV biases that broke WEP outright. Later work found biases at bytes 253–256 and elsewhere; 'RC4-drop-256' (skipping the first bytes) mitigated byte 2 but the catalogue only grew. RFC 7465 (2015) prohibited RC4 in TLS entirely.",
        detail: "The lesson generalizes: a cipher does not get less biased over time. Statistical weaknesses are discovered monotonically — the safe engineering conclusion is migration, not mitigation."
      },
      {
        term: "Modern AEAD stream-mode practice",
        kind: "insight",
        statement: "Today the answers are **ChaCha20-Poly1305** (ARX-based — add/rotate/XOR, no tables, constant-time by construction, fast in software; 96-bit nonce + counter) and **AES-GCM** (fast with hardware AES instructions). Shared rules: unique nonce per key, verify the tag BEFORE releasing plaintext, constant-time tag comparison, re-key before counter/nonce space gets crowded.",
        detail: "ChaCha20's design motivation was the mobile CPUs of its era — no AES hardware, where table-based AES was both slow and cache-timing-leaky. That trade-off still wins on low-end and no-AES-NI hardware."
      }
    ],
    examples: [
      {
        title: "Crib-dragging a two-time pad",
        problem: "An implementation bug reuses one keystream for two ASCII messages. The attacker holds $C_1, C_2$ and knows $P_1$ = 'ATTACK AT DAWN!' in full. Show the recovery of $P_2$ = 'DEFEND THE EAST' — and what a partial crib alone would have achieved.",
        steps: [
          { label: "Step 1: Key cancellation", text: "$C_1 \\oplus C_2 = (P_1 \\oplus S) \\oplus (P_2 \\oplus S) = P_1 \\oplus P_2$. The secret keystream has left the equation entirely — this holds regardless of how strong the generator was." },
          { label: "Step 2: Full-crib recovery", text: "$(C_1 \\oplus C_2) \\oplus P_1 = P_2$: XOR the known plaintext into the difference and read out 'DEFEND THE EAST'. No key search, no statistics — one XOR per byte." },
          { label: "Step 3: A partial crib suffices", text: "Knowing only 'ATTACK' (six bytes) recovers the first six bytes of $P_2$. Readable fragments reveal structure (spaces, common words), each suggesting extensions of the crib — natural-language redundancy turns partial knowledge into a ladder." },
          { label: "Step 4: Keystream theft", text: "From the full crib, $S = C_1 \\oplus P_1$ is now known. Any future message encrypted with the same (key, nonce) — the recurring bug — decrypts instantly and in advance." },
          { label: "Step 5: Historical scale", text: "WEP made this mistake structural: 24-bit IVs collide after ~5,000 packets (birthday bound ~1.18·√2²⁴ ≈ 4,800), so every collision donated one of these equations — and the FMS related-key structure let attackers shortcut straight to keystream. The protocol died of nonce management, not of RC4's raw speed." }
        ],
        result: "Keystream reuse is not a weakening — it is an algebraic break. The cipher was never the problem; the invariant was."
      }
    ],
    keyTakeaways: [
      "The single invariant of stream ciphers: a (key, nonce) pair generates a keystream exactly once — everything else is engineering detail.",
      "C1 ⊕ C2 = P1 ⊕ P2: reuse is an algebraic break, and crib-dragging turns fragments into full recovery.",
      "Purely linear keystreams (LFSRs) fall to 2n output bits via Berlekamp–Massey — nonlinearity is not optional.",
      "RC4's bias catalogue only ever grew (byte-2 at 1/128, FMS breaking WEP) until TLS prohibited it outright in RFC 7465.",
      "Modern practice: AEAD (ChaCha20-Poly1305 or AES-GCM), unique nonces, tag verified before any plaintext use."
    ],
    quiz: [
      {
        q: "WEP used 24-bit initialization vectors with RC4. Roughly how many packets make an IV collision more likely than not?",
        options: ["About 2²⁴ (16.7 million) — half the space", "About 5,000 (birthday bound ≈ 1.18·√2²⁴)", "About 2²³ — one collision expected per pair", "Exactly 256 — RC4's state size"],
        answer: 1,
        explanation: "The birthday bound for N = 2²⁴ possibilities puts the 50% collision threshold at ≈ 1.18·√N ≈ 4,800 — not half the space, which is the intuitive-but-wrong 'wait for the second half' answer. √-scaling is the whole paradox: WEP's designers budgeted for millions of packets of safety and got minutes."
      },
      {
        q: "Why does the Berlekamp–Massey algorithm completely defeat a bare n-bit LFSR keystream generator?",
        options: [
          "It searches all 2ⁿ possible initial states in parallel",
          "The output sequence is linear in the initial state, so about 2n observed output bits determine a linear recurrence that regenerates the stream forever — no key search needed",
          "It exploits statistical biases in the output bytes",
          "It requires the feedback polynomial to be non-primitive"
        ],
        answer: 1,
        explanation: "Linearity is the death sentence: 2n bits of output pin down the recurrence (and equivalently the state), after which the attacker predicts every future bit. Berlekamp–Massey finds the minimal LFSR for any linear sequence automatically — no brute force (option 1), no statistics (option 3), and primitivity only affects period length, not linearity (option 4). This is WHY modern generators mix LFSRs nonlinearly or abandon them."
      },
      {
        q: "The Mantin–Shamir result: RC4's second keystream byte is zero with probability ≈ 1/128 instead of 1/256. What does this bias actually enable against TLS sessions using RC4?",
        options: [
          "Immediate recovery of the RC4 key from one connection",
          "A statistical distinguishing attack — and, across many sessions where a fixed plaintext header repeats, gradual recovery of that repeated plaintext",
          "Recovery of the TLS master secret by factoring",
          "Nothing practical — the bias is too small to matter statistically"
        ],
        answer: 1,
        explanation: "A 1/128-vs-1/256 bias is a distinguisher: ciphertext-only, accumulable. When the same plaintext (cookie/headers) encrypts under many keys, the byte-2 bias (plus later-discovered ones) leaks it statistically over millions of connections — the attack that finished RC4 in TLS. Key recovery never happens (option 1); factoring is unrelated (option 3); and 'too small' was disproven by exactly these attacks (option 4)."
      },
      {
        q: "Which of these does NOT reduce the practical risk from RC4's keystream biases?",
        options: [
          "Dropping the first 256 keystream bytes (RC4-drop-256) before encrypting",
          "Prohibiting RC4 cipher suites at the TLS negotiation layer (as RFC 7465 mandates)",
          "Migrating to AES-GCM or ChaCha20-Poly1305",
          "Doubling the RC4 key length from 128 to 256 bits"
        ],
        answer: 3,
        explanation: "The biases live in the KSA/PRGA state evolution — they are independent of key size, so a longer key changes nothing statistically. RC4-drop-256 removes the (worst) early-byte biases, and prohibition/migration eliminate the primitive — the two legitimate strategies. Key length answers brute force; bias is a different failure axis entirely."
      },
      {
        q: "A team must encrypt on low-power IoT CPUs with no AES hardware and strict constant-time requirements (cache-timing side channels are in scope). Which choice is best designed for this profile?",
        options: ["Table-based AES-128 in CBC mode", "RC4 with fresh keys per session", "ChaCha20-Poly1305", "AES-ECB with 256-bit keys"],
        answer: 2,
        explanation: "ChaCha20 was designed for exactly this: ARX operations (add/rotate/XOR) need no lookup tables — inherently constant-time and cache-attack-resistant — and run fast in plain software; Poly1305 supplies the authentication a stream cipher must not ship without. Table-based AES is the classic timing-leak source (option 1); RC4 is prohibited and biased (option 2); ECB is structurally wrong regardless of key size (option 4)."
      }
    ]
  },

  // ================================================== crypto 1.5
  {
    sectionId: "cyber-crypto-depth-s5",
    readingTime: 12,
    prerequisites: ["Modular arithmetic, Euler's theorem, extended Euclid (cyber-crypto-depth-s1)", "Hash functions at a working level"],
    intro: "Textbook RSA — c = m^e mod n — is mathematically correct and cryptographically broken: deterministic, multiplicatively malleable, and leaky for small messages. Real RSA is a padding scheme wrapped around the trapdoor permutation. Meanwhile, elliptic curves deliver the same asymmetric magic with a quarter of the key bits, if you respect their own sharp edges.",
    objectives: [
      "Demonstrate why textbook RSA fails: determinism, malleability, small-root attacks",
      "Explain OAEP as randomized all-or-nothing padding for encryption, and PSS for signatures",
      "Run the elliptic-curve group law at the level needed for ECDH and ECDSA",
      "Compare curve choices and key sizes: P-256, Curve25519, and the RSA equivalents",
      "Structure hybrid encryption (KEM-DEM) as the practical deployment pattern"
    ],
    concepts: [
      {
        term: "Textbook RSA — the raw trapdoor",
        kind: "notation",
        statement: "Keygen: primes $p, q$; $n = pq$; $\\varphi(n) = (p-1)(q-1)$; exponent $e$ coprime to $\\varphi$; $d = e^{-1} \\bmod \\varphi$. Public $(n, e)$, private $(d, p, q)$. Encrypt $c = m^e \\bmod n$; decrypt $m = c^d \\bmod n$; correctness follows from $ed \\equiv 1 \\pmod{\\varphi(n)}$ via Euler's theorem. Mathematically a bijection — and by itself, NOT a secure encryption scheme.",
        detail: "The key insight this section hammers: the permutation is correct, but security comes from the PADDING that randomizes and structures m before the exponentiation. The exponentiation is merely the engine."
      },
      {
        term: "Determinism and dictionary attacks",
        kind: "insight",
        statement: "Textbook RSA is deterministic: the same $m$ always yields the same $c$ under a public key. For low-entropy messages — a vote, a yes/no, a short bid — an attacker encrypts all candidate guesses (the public key lets ANYONE encrypt) and matches. This is an immediate total break of semantic security (IND-CPA).",
        detail: "The public-key setting makes this worse than in symmetric crypto: the encryption oracle is free and unlimited. No guessing-limited dictionary survives."
      },
      {
        term: "Multiplicative malleability",
        kind: "law",
        statement: "RSA is multiplicatively homomorphic: $(m_1 m_2)^e \\equiv m_1^e \\, m_2^e \\pmod n$. So multiplying a ciphertext by $r^e$ (computable from the public key) yields a ciphertext decrypting to $r \\cdot m$ — an attacker doubles a payment, or blinds values through a decryption oracle, without ever knowing $m$. Related: the small-exponent root attack — if $e = 3$ and $m < n^{1/3}$ with no padding, then $c = m^3$ over the integers and a simple cube root recovers $m$.",
        detail: "Malleability is precisely what OAEP destroys: after randomized padding, the message sits in a structured encoding whose any tampering collapses into an undecodable (invalid) block."
      },
      {
        term: "OAEP — optimal asymmetric encryption padding",
        kind: "method",
        statement: "Before exponentiation, m is encoded with random seed bits through a two-round MGF-hash structure (a Feistel-like transform) producing the padded block that fills the modulus. Effects: encryption becomes **randomized** (dictionaries die), tampering almost surely breaks the encoding's checksum (all-or-nothing), and the scheme achieves IND-CCA2 in the random-oracle model. Parameters are tied to the hash; never invent padding.",
        detail: "History's warning: even OAEP implementations had subtle flaws (the Bleichenbacher Manger attack against naive error handling) — which is why libraries give you one RSA-OAEP API and actively discourage raw exponents."
      },
      {
        term: "PSS — probabilistic signature scheme",
        kind: "method",
        statement: "Signatures need randomized padding too: RSA-PSS salts the hash before signing, making signatures non-deterministic and the scheme tightly provably secure (EU-CMA in the random-oracle model). Deterministic legacy PKCS#1 v1.5 signing survives in places but has a fragile proof and a history of forgeries on sloppy implementations — modern standards mandate PSS for new designs.",
        detail: "Randomized signatures are a feature, not a bug: two signatures on the SAME message differ, and that is exactly what the security proof requires."
      },
      {
        term: "Elliptic curves — the group",
        kind: "definition",
        statement: "Points $(x, y)$ satisfying $y^2 = x^3 + ax + b \\pmod p$ (plus the point at infinity $\\mathcal{O}$) form an abelian group under the chord–tangent law — geometrically, three collinear points sum to $\\mathcal{O}$. **Scalar multiplication** $kP$ (add P to itself k times) is computationally easy; recovering $k$ from $(P, kP)$ is the elliptic-curve discrete logarithm problem (ECDLP), with best generic attacks near $\\sqrt{q}$ — no known subexponential classical algorithm.",
        detail: "That last fact is the economic story: because index-calculus shortcuts do not transfer from finite fields to curves, a 256-bit curve matches the security of a 3072-bit RSA modulus — shorter keys, faster operations, less bandwidth."
      },
      {
        term: "ECDH and ECDSA",
        kind: "method",
        statement: "**ECDH**: Alice picks $a$, publishes $A = aG$; Bob picks $b$, publishes $B = bG$; both compute the shared point $abG$ and hash its x-coordinate into a session key. **ECDSA**: per-signature nonce $k$; signature $(r, s)$ over the message hash — and a REUSED or biased $k$ exposes the private key algebraically from two signatures (the classic console-vendor disaster; RFC 6979 deterministic nonces and EdDSA eliminate the randomness requirement entirely).",
        detail: "Validate received public points (on-curve, correct order — small-subgroup attacks otherwise), and push the shared secret through a KDF rather than using raw coordinates."
      },
      {
        term: "Curves, key sizes, and the long view",
        kind: "insight",
        statement: "P-256 (NIST) and Curve25519 (Montgomery-ladder design, constant-time-friendly, nothing-up-my-sleeve constants) both give ~128-bit security ≈ RSA-3072; Curve25519's design choices make safe implementation dramatically easier. Post-quantum note: Shor's algorithm breaks RSA AND ECC alike — serious deployments plan hybrid classical+PQ key establishment so migration does not start from zero.",
        detail: "The equivalence ladder: 128-bit symmetric ≈ ECC-256 ≈ RSA-3072; 256-bit symmetric ≈ ECC-512 ≈ RSA-15360. Whenever you see a table like this, remember it is about the best KNOWN attacks, not proven optimality."
      }
    ],
    examples: [
      {
        title: "A tiny textbook-RSA session and its undoing",
        problem: "Use $p = 61$, $q = 53$ (so $n = 3233$, $\\varphi = 3120$) with $e = 17$, giving $d = 2753$. Encrypt $m = 65$ by square-and-multiply, verify decryption, then break the scheme three ways.",
        steps: [
          { label: "Step 1: Encrypt", text: "By repeated squaring mod 3233: $65^2 \\equiv 992$, $65^4 \\equiv 1232$, $65^8 \\equiv 1547$, $65^{16} \\equiv 789$; then $65^{17} = 65^{16} \\cdot 65 \\equiv 789 \\cdot 65 = 51{,}285 \\equiv 2790$. So $c = 2790$ — four squarings and two multiplications." },
          { label: "Step 2: Verify the algebra", text: "$ed = 17 \\cdot 2753 = 46{,}801 = 15 \\cdot 3120 + 1$, so $m^{ed} = m \\cdot (m^{\\varphi})^{15} \\equiv m \\pmod n$ by Euler — decryption returns 65." },
          { label: "Step 3: Determinism attack", text: "Encrypting 65 tomorrow produces 2790 again. If m were one of a thousand plausible bids or a yes/no ballot, the attacker encrypts all candidates under the PUBLIC key and matches ciphertexts — total break with zero key material." },
          { label: "Step 4: Malleability attack", text: "The attacker computes $c' = c \\cdot 2^{17} \\bmod n$ (the factor $2^{17}$ needs only the public key). Decryption yields $2 \\cdot 65 = 130$: the payment doubled without the attacker ever learning m. The same trick blinds values through a decryption oracle." },
          { label: "Step 5: Small-exponent root attack", text: "With $e = 3$ and a short unpadded message like $m = 5$ under a huge modulus, $c = 125$ never wraps past n — the ciphertext is just the integer cube, and an ordinary cube root recovers m. Padding exists partly to guarantee wraparound." },
          { label: "Step 6: The fix", text: "OAEP: m is padded with fresh randomness through MGF hashes into a full-size structured block. Now every encryption of 65 differs, tampered blocks fail decoding, and the homomorphic algebra meets hash-function lava." }
        ],
        result: "The arithmetic is flawless; the cryptosystem is only OAEP away from being one. Textbook RSA is a correct permutation and an insecure cipher."
      },
      {
        title: "A complete ECDH exchange on a toy curve",
        problem: "Curve $E: y^2 = x^3 + 2x + 3$ over GF(97) with generator $G = (3, 6)$. Alice uses secret $a = 2$, Bob uses $b = 3$. Execute the exchange, verify both compute the same point — and see exactly why the same procedure is hopeless to attack on a real curve.",
        steps: [
          { label: "Step 1: Check the point is on the curve", text: "$6^2 = 36$ and $3^3 + 2\\cdot3 + 3 = 27 + 6 + 3 = 36$ ✓ — $(3,6)$ is a legitimate curve point." },
          { label: "Step 2: Alice's public key (point doubling)", text: "Tangent slope $\\lambda = (3x^2 + a)(2y)^{-1} = 29 \\cdot 12^{-1} \\equiv 29 \\cdot 89 \\equiv 59 \\pmod{97}$. Then $A = 2G = (\\lambda^2 - 2x, \\; \\lambda(x - x_3) - y) = (80, 10)$." },
          { label: "Step 3: Bob's public key (chord addition)", text: "$B = 3G = 2G + G$: slope $\\lambda = (6 - 10)(3 - 80)^{-1} = 4 \\cdot 77^{-1} \\equiv 4 \\cdot 63 \\equiv 58 \\pmod{97}$, giving $B = (80, 87)$." },
          { label: "Step 4: The shared secret", text: "Alice computes $2B$: doubling $(80, 87)$ gives $(3, 6)$. Bob computes $3A = 2A + A$ with $2A = (3, 91)$, and $(3,91) + (80,10) = (3, 6)$. Both arrive at the point $abG = 6G = (3, 6)$ — hash its coordinates through a KDF to get the session key." },
          { label: "Step 5: Attack it", text: "An eavesdropper sees $A = (80, 10)$ and tries $kG$ for $k = 1, 2, 3, \\ldots$ — finding $a = 2$ in two steps. This toy generator has small order (here 5), so the discrete log is a short table lookup." },
          { label: "Step 6: Scale honestly", text: "On P-256 or Curve25519 the group order is ≈ 2²⁵⁶: the same table would need ~2¹²⁸ rows at best (generic algorithms), and there is no known subexponential shortcut. Same math, infeasible ladder — which is the entire security claim of ECC." }
        ],
        result: "Both parties derived (3, 6) from public data and private scalars; the attacker's only path is the discrete log, trivial at order 5 and beyond astronomical at order 2²⁵⁶."
      }
    ],
    keyTakeaways: [
      "Textbook RSA is deterministic, multiplicatively malleable and small-root-vulnerable — the padding IS the security; the exponentiation is just the engine.",
      "OAEP (encryption) and PSS (signatures) are randomized all-or-nothing transforms; never invent your own padding and never sign raw hashes with legacy schemes.",
      "ECC: scalar multiplication easy, discrete logarithm hard — 256-bit curve ≈ 128-bit security ≈ RSA-3072.",
      "ECDH shared secret = abG (then a KDF); ECDSA lives or dies by per-signature nonce secrecy — prefer deterministic nonces or EdDSA.",
      "Deploy asymmetric crypto as hybrid (KEM-DEM): asymmetric for the session key, symmetric for the data; plan hybrid classical+post-quantum for the long term."
    ],
    quiz: [
      {
        q: "An attacker intercepts a textbook-RSA encrypted payment $c = m^e \\bmod n$, multiplies it by $2^e \\bmod n$, and forwards the result. What happens at the merchant's decryption?",
        options: [
          "Decryption fails with a padding error",
          "The merchant decrypts twice the original amount — multiplicative malleability — without the attacker ever learning m",
          "The decryption returns the original amount; the multiplication is stripped as noise",
          "The attacker has now revealed the private key d"
        ],
        answer: 1,
        explanation: "RSA's homomorphism: $(2m)^e = 2^e m^e$, so the modified ciphertext decrypts to $2m$ — a forged doubling executed blind. Option 0 describes OAEP-protected RSA, which is precisely the fix; option 3 confuses malleability with key exposure — the attacker manipulates ciphertexts but recovers no secrets; and nothing in raw RSA 'strips' modifications."
      },
      {
        q: "A voting system encrypts each ballot (a small candidate number) with textbook RSA under a public key. Why is ballot secrecy fully broken?",
        options: [
          "Because small numbers make modular reduction fail and cube roots recover them",
          "Because RSA is a public-key system, anyone can encrypt every possible ballot value and build a lookup table — determinism makes ciphertexts directly comparable",
          "Because ballot numbers lack entropy, so factorization becomes easy",
          "Because public keys cannot encrypt, only sign"
        ],
        answer: 1,
        explanation: "Determinism + public encryption oracle = dictionary attack: encrypt candidates 1..N, match the observed ciphertext, done. Option 1's root attack is a real but distinct failure (it needs small e and tiny m — possible here but not necessary); option 3 is nonsense — message entropy has nothing to do with factoring n; option 4 is backwards."
      },
      {
        q: "What is the primary cryptographic purpose of OAEP in RSA encryption?",
        options: [
          "It compresses the message so the modulus can be smaller",
          "It randomizes and structurally encodes the message, killing determinism (dictionary attacks) and making tampered ciphertexts fail cleanly — yielding IND-CCA2 security in the random-oracle model",
          "It speeds up the modular exponentiation",
          "It hides the public key from the attacker"
        ],
        answer: 1,
        explanation: "OAEP converts the raw permutation into a proper encryption scheme: fresh randomness each time (determinism dies), all-or-nothing structure (malleability and tampering collapse into decode failures), and a provable security reduction. It does the opposite of compression (it needs space), is orthogonal to exponentiation speed, and the public key is, by definition, public."
      },
      {
        q: "For a target of ~128-bit security, which key-size pairing is correct?",
        options: [
          "RSA-1024 with ECC-160",
          "RSA-2048 with ECC-256",
          "RSA-3072 with ECC-256",
          "RSA-4096 with ECC-521"
        ],
        answer: 2,
        explanation: "128-bit security ≈ ECC-256 (ECDLP's generic √q attacks) ≈ RSA-3072 (where the number field sieve sets the bar). Option 1 is the 80-bit-era pairing; option 2 under-sizes RSA (RSA-2048 ≈ 112 bits); option 4 overshoots toward 192+ bits — secure but not the stated target."
      },
      {
        q: "A device signs firmware with ECDSA and, due to a broken RNG, uses the same nonce k for two different firmware releases. What is the consequence?",
        options: [
          "The two signatures match, which is harmless because the messages differ",
          "The private signing key can be recovered algebraically from the two signatures — every past and future 'signed by this vendor' claim is forgeable",
          "Only the two affected signatures are invalid and must be regenerated",
          "The nonce leak reveals the firmware plaintext"
        ],
        answer: 1,
        explanation: "Two signatures sharing k make the private key a solution of two linear equations in d and k — the exact failure that embarrassed a game-console vendor. The signatures differing (option 1) is expected and irrelevant; and the leak goes far beyond regenerating two signatures (option 3). This is why RFC 6979 derives k deterministically from the message and key — removing the RNG from the threat model — and why EdDSA bakes that design in."
      },
      {
        q: "After an ECDH exchange, why do serious implementations hash the shared point's coordinates (via a KDF) instead of using them directly as the AES key?",
        options: [
          "To shorten the key to 128 bits for AES",
          "Because the raw x-coordinate may have structure or bias, and the KDF also neatly handles domain separation, transcript binding and validation requirements (point-on-curve and subgroup checks)",
          "Because ECC points are not actually secret",
          "To make the shared secret compatible with RSA"
        ],
        answer: 1,
        explanation: "Group elements are not uniformly random strings; a KDF extracts uniform key material and binds protocol context. Paired with public-point validation (rejecting invalid/small-subgroup points), this closes the classic ECDH pitfalls. The points ARE secret (option 3), RSA is irrelevant (option 4), and key-size trimming (option 1) is a side effect, not the reason."
      }
    ]
  },

  // ================================================== crypto 1.6
  {
    sectionId: "cyber-crypto-depth-s6",
    readingTime: 11,
    prerequisites: ["Block ciphers and modes (cyber-crypto-depth-s2, s3)", "Hash functions and birthday intuition", "Exponentials and logarithms of powers of two"],
    intro: "Cryptanalysis is the discipline of breaking ciphers with less than brute-force work: statistics for the classics, meet-in-the-middle for double encryption, the birthday paradox for anything with collisions, and careful probability for modern block ciphers. Knowing the attacks is how you understand why key sizes, block sizes and round counts are what they are.",
    objectives: [
      "Apply frequency analysis and explain why polyalphabetic ciphers resist it",
      "Execute the meet-in-the-middle attack and compute its time–memory cost",
      "Compute birthday-bound numbers for hashes and signatures",
      "Explain linear and differential cryptanalysis at the conceptual level",
      "Justify modern key lengths with brute-force economics, including the quantum caveat"
    ],
    concepts: [
      {
        term: "Kerckhoffs and the brute-force baseline",
        kind: "law",
        statement: "Security must rest on key secrecy alone. Brute force then costs, in expectation, $2^{k-1}$ trials against a k-bit key: 56-bit DES fell to dedicated hardware in 1998 (days per key); 80-bit is obsolete; 112/128-bit keys are beyond any classical budget. Quantum halving (Grover) turns k bits into ~k/2 effective — the argument for 256-bit symmetric keys in long-horizon designs.",
        detail: "The baseline disciplines everything else: an attack 'breaking' a cipher at cost $2^{100}$ is not a break worth acting on when brute force sits at $2^{128}$; a shortcut to $2^{70}$ absolutely is."
      },
      {
        term: "Frequency analysis",
        kind: "method",
        statement: "Monoalphabetic substitution preserves the plaintext's statistical fingerprint: single-letter frequencies (ETAOIN…), digram frequencies, doubled letters, word-length patterns. Roughly 25–30 ciphertext letters usually suffice to solve a simple substitution; longer texts make it nearly mechanical. The deep lesson: **any deterministic map leaks the distribution of its inputs**.",
        detail: "This is why ECB leaks structure (block-equality statistics), why deterministic RSA dies to dictionaries, and why modern modes inject randomness — frequency analysis is the ancestor of every statistical attack since."
      },
      {
        term: "Kasiski examination and the index of coincidence",
        kind: "method",
        statement: "Against Vigenère: repeated ciphertext n-grams occur when a repeated plaintext n-gram aligns with the same key positions — the spacing's GCD suggests the key length; the **index of coincidence** (sum of squared letter frequencies) separates monoalphabetic text (≈ 0.066 for English) from polyalphabetic (≈ 0.038, near-random) and, applied per column after splitting by key length, confirms the period. Then each column is solved as a Caesar shift.",
        detail: "The IoC is a general-purpose randomness detector — the same idea (compare observed coincidence rates to the random baseline) reappears whenever you test whether a generator is truly mixing."
      },
      {
        term: "Meet-in-the-middle",
        kind: "method",
        statement: "Against double encryption $C = E_{k_2}(E_{k_1}(P))$: rearrange to $E_{k_1}(P) = D_{k_2}(C)$ — the middle value must agree from both directions. Encrypt P under all $2^k$ choices of $k_1$, store the results (table of size $2^k$); decrypt C under all $2^k$ choices of $k_2$, probing the table for matches. Total work ≈ $2^{k+1}$ encryptions + $2^k$ storage — so double DES buys ONE bit of security over single DES (plus a mountain of memory).",
        detail: "Triple encryption escapes the clean split: for 3-key EDE, the best generic meet-in-the-middle still costs about $2^{112}$ — which is why the industry moved 2DES → 3DES → AES rather than ever trusting a double."
      },
      {
        term: "The birthday attack",
        kind: "theorem",
        statement: "Drawing from N equally likely values, a collision becomes more likely than not after about $1.1774\\sqrt{N}$ draws. With n-bit values, that is ≈ $1.18 \\cdot 2^{n/2}$ — so an n-bit hash offers only $n/2$ bits of collision resistance. Formula: $p(\\text{collision}) \\approx 1 - e^{-k(k-1)/2^{n+1}}$ for k draws from an n-bit space.",
        detail: "The constant $\\sqrt{2 \\ln 2} \\approx 1.1774$ is where the everyday 23-people/365-days example comes from ($1.1774\\sqrt{365} \\approx 22.5$). The halves-the-bits rule drives every hash-output-size decision ever made."
      },
      {
        term: "Birthday consequences in practice",
        kind: "insight",
        statement: "A 64-bit hash collides after ~$2^{32} \\approx 4.3$ billion draws — laptop-scale, hence structurally broken for commitments; MD5's 128 bits give $2^{64}$ (large-scale, and structural cryptanalysis beat the birthday bound anyway); SHA-256 gives $2^{128}$ — beyond any energy budget (Landauer-limit arguments put full enumeration far past planetary resources). This is exactly why hash outputs are sized at 2× the target security level.",
        detail: "The same mathematics bounds MAC truncations and GCM's per-key limits: every 'random-looking n-bit value' in a protocol carries a hidden $2^{n/2}$ birthday clause in its contract."
      },
      {
        term: "Linear and differential cryptanalysis",
        kind: "insight",
        statement: "**Differential**: feed the cipher chosen plaintext PAIRS with a fixed XOR difference Δ, track how output differences distribute — a characteristic holding with probability $\\tfrac12 + \\varepsilon$ needs about $\\varepsilon^{-2}$ chosen plaintexts to exploit. **Linear**: find a bitwise linear expression linking plaintext, ciphertext and key that holds with bias ε (again ~$\\varepsilon^{-2}$ known plaintexts). AES's wide-trail strategy is the design answer: its structure provably caps the best differential/linear characteristics per round.",
        detail: "Both attacks treat the cipher as a noisy approximation of something linear — the designer's job is making the best approximation as bad as possible, then adding rounds as margin."
      },
      {
        term: "Side-channel cryptanalysis",
        kind: "insight",
        statement: "The practical break usually skips the math: timing of RSA operations (defeated by blinding), power analysis on smartcards, cache timing on table-based AES, speculative-execution leaks. The cipher is attacked through its IMPLEMENTATION — which is why constant-time coding, blinding and table-free designs are part of the cryptanalytic threat model, not merely implementation hygiene.",
        detail: "Rule of thumb: attack surface order is implementation → protocol → primitive. Almost nobody breaks the primitive; almost everybody leaks through the first two."
      }
    ],
    examples: [
      {
        title: "Computing birthday bounds",
        problem: "A designer proposes a 64-bit hash for file fingerprints, reasoning that 2⁶⁴ is astronomically large. How many files must be fingerprinted before a collision is expected — and how do MD5 (128-bit) and SHA-256 compare?",
        steps: [
          { label: "Step 1: The paradox in miniature", text: "Among 23 people, the chance two share a birthday is ≈ 50.7% — with N = 365 possible values, the threshold sits at $1.1774\\sqrt{365} \\approx 22.5$. Intuition says half of 365; the math says the square root. That gap is the entire vulnerability class." },
          { label: "Step 2: The formula", text: "For k draws from an n-bit space, $p \\approx 1 - e^{-k(k-1)/2^{n+1}}$; setting $p = 1/2$ gives $k \\approx 1.1774 \\cdot 2^{n/2}$." },
          { label: "Step 3: The 64-bit proposal", text: "$k \\approx 1.18 \\times 2^{32} \\approx 5.1 \\times 10^9$ fingerprints — an overnight batch job on commodity hardware, and every subsequent collision is a forged 'verified' file. The design is dead on arrival." },
          { label: "Step 4: MD5 (128-bit)", text: "$k \\approx 1.18 \\times 2^{64} \\approx 2.2 \\times 10^{19}$ hashes — a serious but human-scale effort for a funded adversary; and irrelevant in practice because structural cryptanalysis already breaks MD5 collisions far faster than the bound." },
          { label: "Step 5: SHA-256", text: "$k \\approx 1.18 \\times 2^{128} \\approx 4 \\times 10^{38}$ — the birthday bound now exceeds any plausible energy budget; this is the sense in which 256-bit outputs deliver 128-bit security, exactly the 2× rule." },
          { label: "Step 6: Read the rule off the numbers", text: "Collision security = half the output bits. Want 128 bits of collision resistance? Ship 256-bit hashes. Want 64? Ship 128 — and know that is already weak against funded attackers." }
        ],
        result: "The 64-bit scheme collides after ~5 billion files — the designer sized the space, but the attack scales as its square root."
      },
      {
        title: "Why 2DES buys exactly one bit",
        problem: "Double DES with two independent 56-bit keys naively suggests 112-bit brute force. Execute the meet-in-the-middle attack and tally its cost — then explain why 3DES escapes.",
        steps: [
          { label: "Step 1: Rearrange the equation", text: "$C = E_{k_2}(E_{k_1}(P))$ implies $E_{k_1}(P) = D_{k_2}(C)$: the unknown middle value must be reachable from BOTH ends. That shared midpoint is the attack surface." },
          { label: "Step 2: Forward table", text: "Encrypt the known plaintext P under all $2^{56}$ candidate keys $k_1$, storing the 64-bit results in a hash table — $2^{56}$ entries of storage, the attack's defining cost (single-DES brute force needs none)." },
          { label: "Step 3: Backward probes", text: "Decrypt the known ciphertext C under all $2^{56}$ candidate keys $k_2$; each result is a probe into the table. A hit gives a candidate pair $(k_1, k_2)$ consistent with (P, C)." },
          { label: "Step 4: Kill the false positives", text: "With a 64-bit block, each of the $2^{112}$ key pairs matches a given (P, C) pair with probability $2^{-64}$ — about $2^{48}$ false matches expected. A second known plaintext–ciphertext pair eliminates them all (the true pair matches; impostors survive with probability $2^{-64}$)." },
          { label: "Step 5: The bill", text: "Time ≈ $2^{57}$ DES operations (two full sweeps) plus $2^{56}$ stored entries — versus $2^{56}$ operations and NO storage for single DES. Double encryption bought one bit of security and a storage requirement 70 million times the age of the universe in bytes." },
          { label: "Step 6: Why 3DES gets away", text: "With three encryptions $E_{k_3}(D_{k_2}(E_{k_1}(\\cdot)))$, the clean midpoint splits one DES from two chained DES operations: the attack now costs about $2^{112}$ time with $2^{56}$ memory — genuinely 112-bit-ish territory, which is why 3DES (and then AES, with its 128-bit keys and 128-bit blocks) is where the industry landed." }
        ],
        result: "2DES = +1 bit of security at astronomic memory cost; cascading ciphers is not a substitute for a well-designed wide-key cipher."
      }
    ],
    keyTakeaways: [
      "Brute force is the baseline: 2^{k-1} expected for a k-bit key; 56-bit is dead, 128-bit holds classically, Grover argues for 256-bit long-horizon keys.",
      "Deterministic transformations leak input distributions — frequency analysis generalizes to ECB patterns and dictionary attacks on deterministic public-key encryption.",
      "Meet-in-the-middle: double encryption costs the attacker one extra bit, not double — memory is the currency that buys the speedup.",
      "Birthday rule: collisions after ≈ 1.18·2^{n/2}; hash outputs need twice the security target (SHA-256 for 128-bit collision resistance).",
      "Differential/linear attacks need ~ε^{-2} chosen/known plaintexts; AES's wide-trail design and round margins exist to answer them — while real-world breaks usually go through implementations and protocols instead."
    ],
    quiz: [
      {
        q: "A protocol uses a 96-bit random session identifier and engineers celebrate that collisions are 'impossible'. What is the honest birthday-bound analysis?",
        options: [
          "A collision needs ~2⁹⁶ trials — truly infeasible",
          "A collision becomes likely after ≈ 1.18·2⁴⁸ ≈ 3.3×10¹⁴ draws — large but not cosmic; at high generation rates the space must be sized deliberately",
          "Collisions cannot happen because 96 is even",
          "The birthday bound does not apply to random identifiers"
        ],
        answer: 1,
        explanation: "Birthday collisions scale as the square root: ≈ 1.18·2^{96/2} ≈ 3.3×10¹⁴. Whether that is 'impossible' depends on the generation rate — a system minting millions of IDs per second approaches it on a timescale of years, which is exactly the calculation engineers skip. The bound applies to ANY sequence of draws from a finite space, identifier or hash alike."
      },
      {
        q: "Which statement correctly captures the meet-in-the-middle result against 2DES?",
        options: [
          "2DES is broken in 2⁵⁶ time with no extra memory, just like single DES",
          "2DES costs the attacker ≈ 2⁵⁷ time and 2⁵⁶ memory — one bit better than single DES, which is why triple encryption was adopted",
          "2DES achieves the full 112-bit security of the combined key length",
          "Meet-in-the-middle requires the attacker to know both keys in advance"
        ],
        answer: 1,
        explanation: "Two sweeps of 2⁵⁶ each (time ≈ 2⁵⁷) plus a 2⁵⁶-entry table reduce the effective strength to barely above single DES — the attack needs only known plaintext–ciphertext pairs, not keys. Option 1 understates the time but forgets the memory that makes it feasible; option 3 is exactly the naive claim the attack refutes."
      },
      {
        q: "You intercept a long Vigenère ciphertext. What is the correct first move, and why?",
        options: [
          "Tally single-letter frequencies of the whole ciphertext and solve as a substitution cipher",
          "Determine the key length (Kasiski repeated-n-gram spacings or index of coincidence), split the ciphertext into columns by that period, then solve each column as a Caesar shift",
          "Try the 26 possible Caesar shifts directly on the first word",
          "Compute a dictionary of digram frequencies and match the top digram to 'TH'"
        ],
        answer: 1,
        explanation: "Vigenère interleaves several shifts, so whole-text statistics blur toward random — first isolate the period, after which each column IS a monoalphabetic Caesar solvable by frequency. Option 1 fails because the aggregate frequencies are flattened; option 3 has 26 candidates per unknown column alignment; option 4 skips the necessary step of knowing which positions share a key letter."
      },
      {
        q: "A linear approximation to a cipher's round holds with probability 0.5 + 2⁻²⁰. Roughly how many known plaintext–ciphertext pairs does the attack need?",
        options: ["About 2²⁰", "About 2⁴⁰", "About 2¹⁰", "About 20"],
        answer: 1,
        explanation: "Data complexity scales as ε^{-2}: with ε = 2⁻²⁰, that is (2²⁰)² = 2⁴⁰ pairs. This quadratic is the engine of both linear and differential cryptanalysis — tiny biases demand enormous but sometimes feasible datasets, and it is the quantity round counts are chosen against. 2²⁰ (option 1) forgets the square; 2¹⁰ would correspond to ε = 2⁻¹⁰."
      },
      {
        q: "SHA-256 is called a 256-bit hash, yet it is credited with only 128-bit collision resistance. Why is that the right way to count, and why is it sufficient?",
        options: [
          "It is a rounding error in the documentation; SHA-256 really offers 256-bit collision resistance",
          "The birthday bound caps ANY n-bit hash at ~2^{n/2} collision work; 2¹²⁸ exceeds any conceivable classical computing budget, so the halving is acceptable by design — hash outputs are deliberately sized at twice the target",
          "Collision resistance is not a security property, so the number does not matter",
          "Only preimage resistance counts, and that is 2¹²⁸ too"
        ],
        answer: 1,
        explanation: "Collisions arrive after ≈ 1.18·2^{n/2} draws — an unavoidable property of finite output spaces — so 256-bit output ⇒ 2¹²⁸ collision work, which is precisely the design target (matching a 128-bit symmetric key). Option 4 undersells: preimage resistance IS the full 2²⁵⁶; the birthday rule only halves the collision game. That 2× sizing rule (256-bit hash for 128-bit security) is why SHA-256 exists at its length."
      },
      {
        q: "You are designing a system whose confidentiality must hold for 30+ years, and a capable state adversary with a future quantum computer is in the threat model. What symmetric key size does the brute-force analysis argue for?",
        options: [
          "128 bits — currently unbreakable means unbreakable",
          "256 bits — Grover's algorithm halves effective key strength (√2ᵏ queries), so a 256-bit key retains ~128-bit security against quantum brute force",
          "112 bits, matching 3DES",
          "Key size is irrelevant because quantum computers only attack public-key systems"
        ],
        answer: 1,
        explanation: "Grover searches a k-bit keyspace in ~2^{k/2} queries, so long-horizon designs double the symmetric key: 256 bits keeps ~128-bit quantum brute-force security. Option 4 is the dangerous half-truth — Shor devastates RSA/ECC specifically, but Grover still erodes symmetric margins; 'unbreakable today' (option 1) ignores that the threat model explicitly spans decades."
      }
    ]
  },
]

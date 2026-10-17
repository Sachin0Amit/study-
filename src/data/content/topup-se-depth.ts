import type { SectionContent } from '../library'

// ============================================================================
// SE-depth top-up (Task 5-d) — authored SectionContent blocks for the
// Software Engineering flagship chapters: Requirements Engineering
// (se-requirements s1–s6) and Software Architecture & Design Patterns
// (se-architecture s1–s6).
// Integrated by the orchestrator via source.ts + scripts/serialize-content.ts.
// ============================================================================

export const seDepthTopupContent: SectionContent[] = [
  // ==================================================== requirements 1.1
  {
    sectionId: "se-requirements-s1",
    readingTime: 9,
    prerequisites: ["What a requirement is (a statement of what the system must do or a property it must have)"],
    intro: "Every failed project post-mortem eventually stumbles onto the same root cause: nobody asked the right people the right questions. Elicitation is the disciplined art of extracting what stakeholders actually need — which is rarely what they first say. This section covers the core technique toolbox and the stakeholder analysis that decides where to aim it.",
    objectives: [
      "Identify the full stakeholder set of a system — including indirect stakeholders like maintainers and regulators, not just end users",
      "Classify stakeholders on a power/interest grid and choose an engagement strategy for each class",
      "Select and sequence elicitation techniques (interviews, workshops, observation, document analysis) to fit each stakeholder group",
      "Explain why observation and ethnography catch tacit knowledge that interviews systematically miss",
      "Probe past stated solutions to uncover underlying needs",
    ],
    concepts: [
      {
        term: "Stakeholder",
        kind: "definition",
        statement: "A **stakeholder** is anyone who affects the success of the system, or whom the system's operation affects. Beyond obvious users this includes customers (who pay), operators, maintainers, testers, regulators, auditors, and adjacent system owners whose data or workflows you will touch.",
        detail: "The classic elicitation failure is sampling only direct users. A medication-tracking system that forgets the night-shift nurses who do the actual barcode scanning, or the pharmacy technician who reconciles discrepancies, will be resented by exactly the people whose compliance it needs.",
      },
      {
        term: "Power/interest grid",
        kind: "method",
        statement: "Map each stakeholder by **power** (ability to influence the outcome) against **interest** (degree of involvement in day-to-day concerns). High power + high interest → **manage closely**; high power + low interest → **keep satisfied**; low power + high interest → **keep informed**; low power + low interest → **monitor**.",
        detail: "The grid drives engagement budget. A regulator has enormous power but little interest in your internals: send compliance summaries, do not drag them into weekly workshops. A nurse has high interest and modest power: involve deeply, because their goodwill determines adoption.",
      },
      {
        term: "Interviews: open vs closed questions",
        kind: "method",
        statement: "**Closed questions** (How many orders per day? Which report do you run first?) fix vocabulary and quantify, but bias the answer by pre-selecting the option space. **Open questions** (Walk me through what happens when a shipment is late.) let stakeholders reveal what you did not think to ask about. Skilled elicitors open with open questions and close with closed ones to quantify what the open ones surfaced.",
        detail: "Interviews remain the workhorse technique: cheap, one-to-one, safe for politically sensitive admissions a stakeholder would never make in a group. Their weakness is the same one-to-one isolation — contradictions between stakeholders surface only after you compare notes.",
      },
      {
        term: "Facilitated workshops",
        kind: "method",
        statement: "A **facilitated workshop** brings stakeholders — ideally from conflicting functions — into one room with a neutral facilitator, a timed agenda, and a scribe, to elicit, negotiate, and agree requirements at speed. Its great advantage is that contradictions surface immediately, in the room, instead of in month four.",
        detail: "Discipline keeps it honest: park off-agenda items in a visible parking lot, enforce round-robin turns so quiet experts speak, and record decisions with explicit owner and date. Without a neutral facilitator, workshops degenerate into dominance by whoever has the loudest voice or the best title.",
      },
      {
        term: "Observation and ethnography",
        kind: "method",
        statement: "**Observation** embeds the analyst in the workplace to watch real work as it happens; **ethnography** is its long-form version, studying the culture and informal practices of a work community. Both attack the same gap: the difference between **work-as-documented and work-as-done**.",
        detail: "People cannot articulate tacit knowledge — the post-it note on the monitor, the informal phone call that resolves a shipment problem, the workaround done in a spreadsheet because the official tool is unusable. Asking about it returns the official story; watching it reveals the truth. The cost is high analyst time, so observe a representative sample, not everyone.",
      },
      {
        term: "Document and domain analysis",
        kind: "method",
        statement: "Before meeting anyone, mine what exists: forms, spreadsheets, procedure manuals, incident reports, tickets, and the data schemas of systems you will integrate with. Documents show the **as-is vocabulary** and volumes, and often contain the exceptions list that nobody remembers in interviews.",
        detail: "Treat documents as evidence of the past, not requirements for the future. A form that must be filled in triplicate because a 1990s carbon-copy process demanded it is a candidate for elimination, not automation.",
      },
      {
        term: "Stated wants vs actual needs",
        kind: "insight",
        statement: "Stakeholders describe their problems as **solutions**: 'we need a bigger screen for the schedule' is really 'we cannot see tomorrow's schedule from across the room'. Elicitation that records demanded features verbatim ships a solution to a misdiagnosed problem. The analyst's job is to ask **why** until the underlying need — the goal the solution serves — is exposed.",
        detail: "The folk version is the customer who asks for a faster horse when the need is faster transportation. A useful probe: 'If this feature worked perfectly tomorrow, what would you be able to do that you cannot do today?'",
      },
    ],
    examples: [
      {
        title: "Choosing an elicitation mix for a hospital medication-tracking app",
        problem: "You are eliciting requirements for a tablet app that tracks medication administration at a 400-bed hospital. Stakeholders so far mentioned by the sponsor: doctors and the IT director. Devise a stakeholder analysis and a technique plan.",
        steps: [
          { label: "Step 1: Enumerate the stakeholder chain", text: "Walk the medication from prescription to patient: **doctors** (prescribe), **pharmacists** (verify, dispense), **day and night shift nurses** (administer and scan), **pharmacy technicians** (reconcile stock), **patients** (receive), plus **maintenance/IT** (device fleet), the **regulator** (controlled-substance reporting), and **billing**. Eight groups, not two." },
          { label: "Step 2: Place them on the power/interest grid", text: "Nurses: high interest, low power → keep informed and involve deeply. Regulator: high power, low interest → keep satisfied via compliance summaries. IT director and head pharmacist: high power, high interest → manage closely, sit on the steering group. Patients: low/medium on both → monitor via representative feedback." },
          { label: "Step 3: Assign techniques by group", text: "Nurses get **observation** across both shifts — tacit workarounds live there, and night shift is documented nowhere. Doctors and pharmacists get **workshops** together, because their requirements (override rules, verification windows) conflict and must be negotiated face to face. The regulator gets targeted **interviews** plus **document analysis** of the existing controlled-substance report format." },
          { label: "Step 4: Cross-validate", text: "Compare findings across techniques: the observation notes say nurses photograph the screen at shift change — an undocumented handover need that no interview mentioned. Feed it back into the workshop as a new requirement candidate." },
        ],
        result: "A single technique cannot cover an eight-group stakeholder landscape. Observation captures tacit practice, workshops force conflicting parties to converge, interviews handle the powerful-but-detached, and document analysis anchors volumes and vocabulary. The mix — and the cross-checks between them — is the method.",
      },
    ],
    keyTakeaways: [
      "Stakeholders extend far beyond end users: operators, maintainers, regulators, and adjacent system owners can each veto success.",
      "The power/interest grid converts a stakeholder list into an engagement budget: manage closely, keep satisfied, keep informed, monitor.",
      "Open questions discover; closed questions quantify — sequence open-first, closed-last inside each interview.",
      "Observation and ethnography exist because work-as-documented and work-as-done differ, and the gap is where the real requirements hide.",
      "Stakeholders speak in solutions; the analyst keeps asking why until the underlying need is exposed.",
    ],
    quiz: [
      {
        q: "Interviews with hospital pharmacists all describe the drug-reconciliation process one way, but when an analyst spends a shift on the ward, the actual process includes an informal phone call to the dispensary that nobody mentioned. Which elicitation gap does this illustrate?",
        options: [
          "Interviews are too expensive for requirements work",
          "Work-as-documented differs from work-as-done, and tacit practice is invisible to interviews but visible to observation",
          "The pharmacists were deliberately hiding information from the analyst",
          "Document analysis would have revealed the phone call in the procedure manual",
        ],
        answer: 1,
        explanation: "Tacit, informal work is exactly what observation and ethnography were invented to catch — people cannot articulate what they do on autopilot, and the official procedure manual would omit it by definition. Option (d) is backwards: the manual documents the official story. The problem was never cost or dishonesty, so (a) and (c) misdiagnose.",
      },
      {
        q: "A national drug-safety regulator has enormous influence over whether your medication app can ship, but no interest in its user interface or feature set. On the power/interest grid, what is the right engagement strategy?",
        options: [
          "Manage closely — invite them to every weekly design workshop",
          "Monitor — ignore them until the product is finished",
          "Keep satisfied — send compliance summaries and targeted updates, but do not consume their patience with UI debates",
          "Keep informed — add them to the monthly internal newsletter",
        ],
        answer: 2,
        explanation: "High power + low interest → keep satisfied: give them what they need to say yes, without burning their limited attention on details they do not care about. Dragging them into workshops (a) wastes the scarcest resource you have with them; ignoring them (b) risks a late, total veto; a passive newsletter (d) is the treatment for low-power, high-interest stakeholders.",
      },
      {
        q: "During requirements interviews, an analyst asks: 'How many medication administrations does a typical nurse handle per shift, and what fraction are urgent?' What kind of question is this, and what is its main risk?",
        options: [
          "Open question — risk of overwhelming the interviewee",
          "Closed question — risk of biasing the answer by pre-selecting the option space",
          "Hypothetical question — risk of introducing requirements the stakeholders never wanted",
          "Leading question — risk that the nurse refuses to answer",
        ],
        answer: 1,
        explanation: "It fixes the vocabulary and demands a number: closed. Closed questions quantify beautifully but can only collect answers within the frame the analyst already imagined — if the real problem is shift handover rather than urgency rates, this question never surfaces it. That is why interviews should open with open questions and close with closed ones.",
      },
      {
        q: "In a facilitated workshop about override rules, the senior consultant talks over the junior pharmacist every time she starts to disagree, and the group converges on the consultant's position. What is the correct facilitation response?",
        options: [
          "Accept the consensus — seniority usually implies better knowledge of edge cases",
          "End the workshop and switch to one-on-one interviews permanently",
          "Use round-robin turn-taking and direct questions so quieter experts speak, and record the pharmacist's concern as an open issue with an owner",
          "Escalate to the sponsor to have the consultant removed from the project",
        ],
        answer: 2,
        explanation: "Dominance and groupthink are known workshop failure modes with known fixes: enforced turn-taking, direct questions by name, and a visible parking lot that keeps disagreements alive instead of drowning them. The pharmacist's dissent is data — junior staff often own the exception cases. Abandoning workshops (b) throws away their cross-stakeholder convergence benefit; both (a) and (d) treat symptoms by destroying information.",
      },
      {
        q: "A warehouse manager tells you: 'We need a bigger monitor at the packing station.' Which response best practices need-driven elicitation?",
        options: [
          "Record the requirement: the system shall support a bigger monitor at packing stations",
          "Ask whether a curved or flat monitor would be preferred, to make the requirement testable",
          "Ask what the manager would be able to do with the bigger monitor that cannot be done today, to expose the underlying need",
          "Reject the request because solution proposals do not belong in a requirements document",
        ],
        answer: 2,
        explanation: "Stakeholders speak in solutions; the analyst's probe is why — what goal would the bigger screen serve? The real need might be reading the pick list from a distance, solvable by font size, projection, or reorderable layouts. Recording the solution verbatim (a) ships a misdiagnosis; refining the solution (b) polishes the wrong requirement; and a flat rejection (d) loses the signal instead of translating it.",
      },
    ],
  },

  // ==================================================== requirements 1.2
  {
    sectionId: "se-requirements-s2",
    readingTime: 9,
    prerequisites: ["Basic idea of a requirement as a testable statement", "The difference between a wish and a verifiable statement"],
    intro: "'The system shall be fast and user-friendly' is not a requirement — it is a horoscope. The single most valuable skill in requirements writing is separating what the system does (functional) from how well it must do it (non-functional), and then making the how-well measurable enough to fail a test. This section builds that skill.",
    objectives: [
      "Distinguish functional requirements from non-functional requirements and classify borderline cases correctly",
      "Map non-functional requirements onto a quality-attribute taxonomy covering performance, availability, security, usability and maintainability",
      "Rewrite vague quality statements as measurable requirements using the stimulus–environment–response pattern",
      "Explain why non-functional requirements, more than functional ones, drive architectural decisions",
    ],
    concepts: [
      {
        term: "Functional requirement",
        kind: "definition",
        statement: "A **functional requirement** (FR) states what the system shall do: a mapping from inputs and preconditions to outputs and postconditions. 'The system shall generate a monthly sales report grouped by region' is functional — you can verify it by performing the action and inspecting the output.",
        detail: "FRs define behavior. They are usually verifiable by direct observation: do the thing, check the result. If a statement cannot be verified by any conceivable observation of system behavior, it is not a functional requirement — it is either a non-functional property or a wish.",
      },
      {
        term: "Non-functional requirement (quality attribute)",
        kind: "definition",
        statement: "A **non-functional requirement** (NFR) constrains *how well* the system must perform its functions, or constrains its development and operation: response time, throughput, availability, security, usability, maintainability, portability. The engineering term for the measurable subset of these is **quality attribute**.",
        detail: "NFRs are often global — they apply to every feature at once — which is why they are easy to state and easy to forget. A checkout button that works and a checkout button that responds in 200 ms under Black-Friday load are two different engineering problems with one functional requirement between them.",
      },
      {
        term: "Quality attribute taxonomy",
        kind: "notation",
        statement: "A working taxonomy of product quality attributes: **performance** (latency, throughput, capacity), **availability** (uptime, recovery time), **security** (authentication, authorization, confidentiality, auditability), **usability** (learnability, error rate, task completion), **reliability** (fault tolerance, failure rate), **maintainability** (modifiability, testability), and **portability** (installability, adaptability). International software-quality standards (the ISO 25010 family) formalize this ladder.",
        detail: "The taxonomy's job is completeness pressure: walking each attribute against each feature asks 'what is the latency requirement for this? the failure mode? the audit trail?' — surfacing NFRs nobody volunteered.",
      },
      {
        term: "The stimulus–environment–response pattern",
        kind: "method",
        statement: "Make an NFR measurable by specifying three things: the **stimulus** (the operation or event), the **environment** (the conditions under load, at peak, degraded), and the **response with a measure** (a numeric threshold and how it is measured). Template: 'When [stimulus] under [environment], the system shall [response] within [measured threshold].'",
        detail: "Example rewrite: 'The system shall be fast' becomes 'When a customer submits the payment form (stimulus) while the site is serving 5,000 concurrent sessions (environment), the confirmation page shall render in at most 2 seconds at the 95th percentile, measured at the browser (response + measure).' Now it can fail a load test — which is the whole point.",
      },
      {
        term: "Unmeasurable requirements are unverifiable",
        kind: "law",
        statement: "**A requirement that cannot be verified by some defined procedure is not a requirement — it is a wish.** Every requirement must carry, explicitly or by obvious construction, a verification method: inspection, demonstration, test, or analysis. An NFR without a number and a measurement context cannot be tested, so it cannot be violated, so it silently controls nothing.",
        detail: "Wishes are not harmless. They create the illusion of agreement — marketing, engineering and the customer each privately define 'user-friendly' differently, and the disagreement detonates at acceptance time, the most expensive possible moment.",
      },
      {
        term: "NFRs drive architecture",
        kind: "insight",
        statement: "Functional requirements shape *what modules exist*; non-functional requirements shape *how they are structured and connected*. Two systems with identical features — one targeting 99.99% availability, one running on a single office server — deserve radically different architectures. When the NFRs arrive late, the architecture built for the FRs must be torn apart to absorb them.",
        detail: "This is why eliciting performance, availability and security targets *early* is cheap insurance: adding redundancy to a design is a drawing change; adding it to shipped code is an excavation. The costliest requirements to discover late are almost always non-functional ones.",
      },
    ],
    examples: [
      {
        title: "Turning horoscopes into requirements",
        problem: "A draft specification for an online pharmacy contains these three statements: (a) 'The system shall be user-friendly.' (b) 'The system shall respond quickly to searches.' (c) 'The system shall be secure.' Rewrite each as a measurable, testable requirement.",
        steps: [
          { label: "(a) Usability — define the user and the task", text: "User-friendliness must become an observable human outcome: 'A customer who has never used the site before, given only the packaging of a common medication, shall locate and add the correct 10-tablet pack to the cart within 90 seconds in moderated usability testing, with an error rate under 10% across 20 representative participants.' The stimulus is the task, the environment is a first-time user, the response measure is time plus error rate." },
          { label: "(b) Performance — add load and a percentile", text: "'Quickly' becomes: 'When a customer submits a search query while 2,000 concurrent users are active, the results page shall display the top 10 matching products within 1.5 seconds at the 95th percentile, measured server-side.' The percentile matters: an *average* of 1.5 s lets 1 user in 10 wait 10 seconds while the average still passes." },
          { label: "(c) Security — decompose into concrete controls", text: "'Secure' is a family, not a property. Decompose: 'All traffic shall be encrypted in transit (TLS 1.3 or later)'; 'Passwords shall be stored using a salted adaptive hash (bcrypt, cost factor 12 or higher)'; 'Every access to a prescription record shall be authenticated and written to an append-only audit log with user, timestamp and record id'; 'Sessions shall expire after 30 minutes of inactivity.' Each is verifiable by inspection or test." },
          { label: "Attach verification methods", text: "(a) → demonstration/usability test. (b) → load test in a staging environment at specified concurrency. (c) → configuration inspection plus penetration test plus audit-log review. Now each statement can *fail*, which is what makes it a requirement rather than decoration." },
        ],
        result: "The rewrites share one skeleton: stimulus (who does what) + environment (under which load/conditions) + response (observable outcome with a number and a measurement point). Any NFR that cannot be coaxed into this skeleton needs another round of elicitation, not a place in the specification.",
      },
    ],
    keyTakeaways: [
      "Functional requirements define what the system does; non-functional requirements constrain how well, and they are usually global across all features.",
      "Walk a quality-attribute taxonomy (performance, availability, security, usability, maintainability, portability) against every feature to surface NFRs nobody volunteered.",
      "The measurable form of an NFR is stimulus + environment + response with a numeric threshold, measurement point and percentile.",
      "If no defined procedure can verify a statement, it is a wish, not a requirement — and wishes detonate at acceptance time.",
      "NFRs drive architecture far more than functional requirements do; discovering them late is the most expensive kind of discovery.",
    ],
    quiz: [
      {
        q: "Classify this statement for a train-ticketing site: 'When the daily-sales report is requested between 06:00 and 09:00, the system shall generate it from the overnight warehouse within 60 seconds at the 95th percentile.'",
        options: [
          "Functional — it describes generating a report",
          "Non-functional — it constrains response time",
          "Both — the report generation is functional, the 60-second bound is a non-functional constraint on that function",
          "Neither — percentiles make it a statistical estimate, not a requirement",
        ],
        answer: 2,
        explanation: "The sentence bundles both: the *existence* of report generation is functional; the *time bound under stated conditions* is a performance (non-functional) constraint. This bundling is normal in practice — good specifications just keep the two kinds separately taggable so coverage and testing can be tracked per kind. (b) misses the functional half; (d) is wrong because a percentile is precisely what makes the bound measurable.",
      },
      {
        q: "Which rewrite of 'The system shall be easy to maintain' is the best measurable requirement?",
        options: [
          "The system shall be designed with clean, well-commented code that any developer can understand",
          "The system shall use industry-standard frameworks so maintenance is straightforward",
          "A developer familiar with the codebase shall be able to add support for a new payment provider by changing at most 3 modules, with no change outside the payment subsystem, within 5 working days",
          "The system shall pass a code review by the architecture board before each release",
        ],
        answer: 2,
        explanation: "Maintainability becomes measurable when expressed as a *change scenario with a bounded blast radius and effort*: stimulus (new payment provider), environment (a developer who knows the system), response (≤3 modules, none outside the payment subsystem, ≤5 days). Options (a) and (b) restate the wish with new adjectives — still nothing a test can fail; (d) measures process compliance, not maintainability of the product.",
      },
      {
        q: "A team's load test shows their search averages 800 ms while serving 1,000 concurrent users, and the requirement reads: 'Search shall respond within 1.5 seconds on average under normal load.' A stakeholder complains that users are frequently waiting 6 seconds. Which requirement-writing flaw does this expose?",
        options: [
          "The threshold is too loose and should have been 500 ms",
          "An average without a percentile hides the tail: 1-in-20 users can wait far longer while the average still passes",
          "The load level of 1,000 users was unrealistically low",
          "The requirement should have specified the server hardware",
        ],
        answer: 1,
        explanation: "Averages are a property of the *distribution*, and user pain lives in the *tail*. With heavy skew — a few multi-second outliers — the mean stays comfortable while real users suffer. The fix is a high percentile (p95 or p99) with the load and measurement point stated. (a), (c) and (d) may all be true-ish, but none addresses the actual flaw: the statistic chosen cannot see the pain the requirement exists to bound.",
      },
      {
        q: "Marketing demands 'the system must be secure' and refuses to elaborate. Engineering proceeds, ships, and six months later a breach forces an emergency redesign of session handling and logging. Which lesson is the primary takeaway?",
        options: [
          "Security cannot be specified in requirements and must be handled reactively",
          "Marketing should not talk to engineers about quality goals",
          "A monolithic NFR like 'secure' hides a family of concrete, testable requirements (encryption, authentication, audit, session management) that must be elicited and specified early — precisely because they shape architecture",
          "The breach proves the developers were not skilled enough to implement security correctly",
        ],
        answer: 2,
        explanation: "'Secure' decomposes into verifiable controls: encryption in transit and at rest, authentication and authorization rules, audit logging, session expiry, input validation. Each is testable, and each constrains architecture — retrofitting them into shipped code is an excavation, exactly what happened. The failure was in elicitation and specification, not in the concept of security requirements (a) or anyone's competence (d).",
      },
      {
        q: "Two candidate systems have identical feature lists. System A targets 99.99% monthly availability; System B targets office-hours availability on a single server. What correctly describes their requirements sets?",
        options: [
          "Their functional requirements differ, so their features cannot really be identical",
          "Their non-functional requirements differ so strongly that their appropriate architectures will likely differ — redundant deployment, failover and replication for A versus a single-node design for B",
          "Availability targets affect operations only, not architecture or design",
          "System B's requirements are incomplete because every system must target 99.99%",
        ],
        answer: 1,
        explanation: "Identical FRs plus radically different NFRs should produce different architectures: 99.99% availability is about 4.4 minutes of downtime per month and practically demands redundancy, health checking, failover and replicated state. The NFR is the architectural driver. (c) inverts the truth; (d) confuses a business decision with a universal law; (a) contradicts the premise.",
      },
    ],
  },

  // ==================================================== requirements 1.3
  {
    sectionId: "se-requirements-s3",
    readingTime: 10,
    prerequisites: ["Functional vs non-functional requirements", "The idea of a stakeholder or user role"],
    intro: "A requirements specification is a communication device before it is a contract: it must let a stakeholder confirm you understood, and let a developer build without guessing. Use cases and user stories are the two dominant modeling forms, and they are complementary rather than competing — one captures interaction detail, the other drives iteration planning. This section covers both, plus the document conventions that hold them together.",
    objectives: [
      "Write a well-formed use case with actor, preconditions, a numbered main success scenario and extension branches",
      "Write user stories in role–capability–benefit form and evaluate them with the INVEST criteria",
      "Attach concrete acceptance criteria in Given–When–Then form",
      "Choose between use cases and user stories based on audience and purpose",
      "Describe the standard structure of a software requirements specification document",
    ],
    concepts: [
      {
        term: "Use case",
        kind: "definition",
        statement: "A **use case** is a named interaction between an **actor** (a role external to the system) and the system itself, pursuing a goal. It consists of a **precondition** (state that must already hold), a numbered **main success scenario** (the happy path, actor step, system step, alternating), and **extensions** (numbered branches handling everything that can go wrong at each step), ending in a **postcondition**.",
        detail: "The discipline of extensions is where use cases earn their keep. 'Withdraw cash' with no extension for insufficient funds, wrong PIN, or a card reported stolen is a demo script, not a specification. Rule of thumb: for every step, ask what could fail here — every answer is an extension with its own outcome.",
      },
      {
        term: "Use case template",
        kind: "notation",
        statement: "Canonical field set: **Name** (verb phrase, e.g. 'Withdraw cash'), **Primary actor** (role, not job title), **Precondition**, **Main success scenario** (numbered 1..n, alternating actor/system), **Extensions** (referenced by step number: '3a. PIN incorrect: system displays error, allows 2 retries, then retains card'), **Postcondition**, optional **Trigger** and **Frequency**.",
        detail: "Numbered steps make extensions attachable — '2a' unambiguously means 'the failure of step 2'. Use one sentence per step in actor-verifies-system rhythm, and keep the main scenario at 3–10 steps; if it grows past that, you are writing several use cases.",
      },
      {
        term: "User story",
        kind: "definition",
        statement: "A **user story** is a short placeholder for a conversation, written: **As a** ⟨role⟩, **I want** ⟨capability⟩ **so that** ⟨benefit⟩. The story is not the requirement — the requirement is the story plus the conversation it provokes plus the acceptance criteria that result.",
        detail: "Stories deliberately omit interaction detail so they can be written fast, prioritized by business value, and fitted into a fixed iteration. That omission is a feature at planning time and a bug at build time — which acceptance criteria exist to repair.",
      },
      {
        term: "INVEST criteria",
        kind: "method",
        statement: "A healthy story is **I**ndependent (orderable without deadlock), **N**egotiable (states a need, not a bundled solution design), **V**aluable (delivers benefit a stakeholder cares about), **E**stimable (understood enough to size), **S**mall (completable within one iteration), **T**estable (has a clear pass/fail). Violations are diagnostic: too big → split; solution-baked → renegotiate; untestable → elicit acceptance criteria first.",
        detail: "Most INVEST failures trace to two habits: stories that are really tasks ('build the database table' — valuable to no user) and stories that are really epics ('manage inventory' — not small). Both are fixable by returning to the role-capability-benefit sentence.",
      },
      {
        term: "Acceptance criteria (Given–When–Then)",
        kind: "notation",
        statement: "Each story carries concrete pass/fail conditions, typically phrased **Given** ⟨initial context⟩, **When** ⟨action/event occurs⟩, **Then** ⟨observable outcome⟩. Example: 'Given my cart holds 3 items and I am logged out, When I proceed to checkout, Then I am asked to log in and, on success, my cart is preserved.'",
        detail: "Given–When–Then maps directly onto automated tests — which is the point: a story whose acceptance criteria cannot be written in this form is usually not yet understood, and discovering that before coding is the cheapest possible moment.",
      },
      {
        term: "Specification document structure",
        kind: "definition",
        statement: "A conventional **software requirements specification (SRS)** organizes: (1) introduction — purpose, scope, definitions; (2) overall description — product perspective, user classes, operating and constraint environment; (3) external interface requirements — UI, hardware, software, communication; (4) functional requirements, numbered for traceability (e.g. REQ-104); (5) non-functional requirements by quality attribute; (6) constraints and rationale. Standards lineage runs through IEEE 830 and its successors.",
        detail: "The numbering is not bureaucracy — REQ-104 is what a traceability matrix, a change request and a test case will all cite. Numbers turn prose into referencable engineering objects.",
      },
      {
        term: "Models are complementary, not competing",
        kind: "insight",
        statement: "Use cases capture **interaction structure** for stakeholders who must validate the flow; stories capture **planning units** for teams who deliver in iterations; acceptance criteria capture **verification** for testers. Mature teams keep all three: a story for the iteration board, the use case as its backing detail, and Given–When–Then clauses lifted from the use-case extensions as its tests.",
        detail: "Choosing one form religiously costs you its complement's strengths. Use-case extensions are literally a pre-written list of negative test cases; stories shorn of that backing are where forgotten edge cases go to live.",
      },
    ],
    examples: [
      {
        title: "One need, two forms: ATM cash withdrawal",
        problem: "Model the ATM cash-withdrawal capability twice: as a use case for the bank's operations team to validate, and as a user story with acceptance criteria for an iteration board.",
        steps: [
          { label: "Use case, header", text: "**Name:** Withdraw cash. **Primary actor:** Cardholder. **Precondition:** Card is valid and account is accessible. **Trigger:** Cardholder inserts card and requests withdrawal." },
          { label: "Use case, main success scenario", text: "1. Cardholder inserts card. 2. System prompts for PIN. 3. Cardholder enters PIN. 4. System validates PIN and prompts for amount. 5. Cardholder enters amount. 6. System checks balance, debits account, instructs dispenser, and prints receipt. 7. Cardholder takes card and cash. **Postcondition:** Account debited, dispenser log written, card returned." },
          { label: "Use case, extensions", text: "3a. PIN incorrect: system shows error and reprompts; after 3 consecutive failures system retains card and ends session. 5a. Amount not a permitted denomination multiple: system explains valid amounts and reprompts. 6a. Insufficient balance: system shows available balance, offers a lower amount or cancel. 6b. Dispenser jam: system rolls back the debit, logs the fault, and tells the cardholder to contact the bank. 0a. Card reported stolen (checked at step 2): system retains card immediately and notifies the fraud service." },
          { label: "The same need as a story", text: "As a cardholder, I want to withdraw cash from my account at an ATM so that I can pay at cash-only places without visiting a branch. Note what the story deliberately does not contain: no flows, no extensions — those live in the use case." },
          { label: "Acceptance criteria, lifted from extensions", text: "Given three consecutive wrong PINs, When the third wrong PIN is entered, Then the card is retained and the fraud service is notified. Given a balance of 40 and a request of 100, When the request is submitted, Then the system shows the available balance and offers to withdraw 40 or cancel. Given a dispenser jam after debit, When the fault is detected, Then the debit is rolled back and the cardholder sees a contact-the-bank message. Each Given–When–Then is an extension from step 3, turned into a test." },
        ],
        result: "The use case gives operations something to validate in full, including every failure branch; the story gives the board something to size and prioritize; the acceptance criteria — harvested straight from use-case extensions — give the testers their cases. Same requirement, three coordinated views.",
      },
    ],
    keyTakeaways: [
      "A use case is actor + goal + numbered main success scenario + extensions for every failure, framed by pre- and postconditions.",
      "Extensions are the specification's real content — and, rewritten as Given–When–Then clauses, they become the test list for free.",
      "A user story is a placeholder for a conversation: role, capability, benefit — negotiable by design, never a disguised task or design.",
      "INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable) is a diagnostic checklist; each violation names its own fix.",
      "Numbered requirements in a structured SRS (interfaces, FRs, NFRs by attribute, constraints) make change control and traceability possible.",
    ],
    quiz: [
      {
        q: "Review this story: 'As a user, I want the system to use a Redis cache with a 60-second TTL on the product catalogue so that pages load faster.' What is the primary INVEST violation?",
        options: [
          "Not Small — implementing a cache cannot fit in one iteration",
          "Not Negotiable — the story bakes a specific technical solution into what should be a negotiable statement of need",
          "Not Valuable — page load speed does not matter to users",
          "Not Estimable — the team cannot possibly size caching work",
        ],
        answer: 1,
        explanation: "The story dictates the solution (Redis, 60-second TTL) instead of the need (fast catalogue pages). That removes the team's ability to negotiate *how*, and couples the product backlog to an implementation detail that may change. The need form: 'As a shopper, I want product pages to load within 1.5 seconds so that I can browse quickly' — the cache becomes one possible design discussed at build time. The other three criteria are plausibly satisfiable here.",
      },
      {
        q: "In the 'Withdraw cash' use case, where should 'PIN entered incorrectly' be recorded?",
        options: [
          "In the main success scenario, as a step the actor may perform",
          "As an extension branch labeled 3a, referenced to the main-scenario step it disrupts",
          "In the precondition, which should read 'the PIN is correct'",
          "In a separate use case called 'Enter wrong PIN'",
        ],
        answer: 1,
        explanation: "Extensions attach to numbered main-scenario steps — 3a means 'step 3 failed in this specific way' — carrying their own handling and outcome. Putting failure paths in the main scenario (a) destroys the happy-path readability; moving them into preconditions (c) hides them from validation; and separate use cases (d) shatter one coherent interaction into fragments nobody can review as a whole.",
      },
      {
        q: "Your backlog contains the story: 'As a warehouse manager, I want to manage inventory.' The team cannot estimate it and it has sat unchanged for three sprints. What is the correct next action?",
        options: [
          "Force an estimate by making the team play planning poker until they converge",
          "Mark the story as blocked on the product owner and leave it in the backlog",
          "Recognize it violates Small (and likely Estimable), and split it along real user goals — e.g. receive stock, adjust counts after a cycle count, view low-stock alerts — each with its own acceptance criteria",
          "Rewrite it as a technical task so the developers can size it",
        ],
        answer: 2,
        explanation: "This is an epic wearing a story costume: 'manage inventory' is a whole capability area. The INVEST failure is Small (with Estimable as its symptom), and the cure is splitting along user goals, each slice independently valuable and testable. Forcing estimates (a) measures the symptom; (b) parks it without a fix; (d) converts it into a non-user-valuable task, which trades one violation for another.",
      },
      {
        q: "Which acceptance criterion is written well enough to automate as a test?",
        options: [
          "The search feature should be helpful and return relevant products",
          "Given the catalogue contains products A, B and C with prices 10, 20 and 30, When the user searches for a price range of 15–25, Then exactly product B is listed and A and C are not",
          "The search shall be tested by the QA team before each release",
          "Search results must load quickly even when many people use the site",
        ],
        answer: 1,
        explanation: "Only the Given–When–Then form is mechanically checkable: fixed initial state (products A, B, C with stated prices), a precise triggering action (search for range 15–25), and an exact expected outcome (B listed, A and C not) that a test can assert. The others fail as automation inputs — 'relevant' and 'helpful' (a) name qualities with no oracle, 'tested by QA' (c) describes process rather than pass/fail, and 'quickly' (d) has no number to assert against.",
      },
      {
        q: "A telecom client must formally sign off detailed interaction behavior for a billing dispute flow, including every error branch; a startup is planning the same kind of feature in two-week iterations. Which modeling choice fits each?",
        options: [
          "Both should use user stories only — detailed models are waste",
          "Both should write full use cases — stories are too informal to build from",
          "The telecom client needs use cases (validation-grade interaction detail with extensions); the startup fits user stories with acceptance criteria (planning-grade placeholders for conversation)",
          "Neither needs written requirements; prototypes replace both",
        ],
        answer: 2,
        explanation: "The choice is governed by purpose and audience: contractual validation with non-developer stakeholders demands the stepwise, extension-complete form of use cases; iteration planning inside a responsive team needs lightweight, negotiable placeholders with Given–When–Then backing. Both extremes — stories-only (a) and cases-everywhere (b) — pay one audience's cost at the other's expense, and (d) discards specification entirely.",
      },
    ],
  },

  // ==================================================== requirements 1.4
  {
    sectionId: "se-requirements-s4",
    readingTime: 9,
    prerequisites: ["Requirements specification basics (use cases, stories, acceptance criteria)"],
    intro: "A specification can be beautifully written and still be wrong — validation is how you find that out while it is still cheap to fix. Reviews put human eyes and checklists on the document; prototypes put a tangible almost-product in front of stakeholders and let their reactions do the talking. Both attack the same enemy: the gap between what was written and what was meant.",
    objectives: [
      "Distinguish validation (building the right product) from verification (building the product right)",
      "Run a requirements review or walkthrough with roles, checklists and ambiguity-detection techniques",
      "Choose between throwaway and evolutionary prototyping based on what the prototype must answer",
      "Anticipate the characteristic failure modes of prototypes: misplaced stakeholder confidence and missing non-functional coverage",
    ],
    concepts: [
      {
        term: "Validation vs verification",
        kind: "definition",
        statement: "**Validation** asks *are we building the right product?* — does this specification capture the stakeholders' real needs? **Verification** asks *are we building the product right?* — does the artifact conform to its specification? Requirements work lives almost entirely in validation; testing of code against requirements is verification.",
        detail: "The distinction matters because the two fail differently. A perfectly implemented feature that nobody needed passes verification and fails validation — and validation failures discovered at delivery are the most expensive defects in software, because everything built on top of the wrong requirement is also wrong.",
      },
      {
        term: "Requirements review",
        kind: "method",
        statement: "A **review** (or its lighter cousin, the **walkthrough**) gathers reviewers to examine the specification against explicit checklists: Is every requirement testable? Unambiguous? Consistent with the others? Traceable to a stakeholder or goal? Complete for the stated scope? A **walkthrough** is author-led and informal; an **inspection** is moderator-led, role-assigned and defect-logging, with metrics.",
        detail: "Effectiveness comes from roles and preparation: assign one reviewer to hunt ambiguity, one to hunt conflicts with other documents, one to read as a tester asking 'how would I verify this?'. Reviewers who read in advance and come with written findings beat a room improvising around a projector, every time.",
      },
      {
        term: "Independent readings for ambiguity",
        kind: "method",
        statement: "Have several reviewers read each critical requirement **independently** and write down what they believe it mandates, *before* any group discussion. Then compare the written interpretations: any divergence between competent readers is an ambiguity in the requirement — not a comprehension failure in the reviewer.",
        detail: "Group discussion synchronizes interpretation too early: the first person to voice a reading anchors everyone, and the ambiguity hides successfully. Writing first, comparing second, converts ambiguity from an argument into a detected defect. For grammar-level suspects, parse the sentence and check each plausible attachment of modifiers and conjunctions.",
      },
      {
        term: "Prototype",
        kind: "definition",
        statement: "A **prototype** is a partial representation of the system, built to answer specific open questions about requirements — not to ship. It ranges from paper sketches and clickable mockups to running code with fake data. Its value is that stakeholders react to something concrete far more honestly than they speculate about the abstract.",
        detail: "The prototype is an elicitation and validation instrument: its design should start from a list of questions it must answer (Is this checkout flow understandable? Do nurses trust this scan confirmation screen?) — a prototype without questions is a demo, and demos validate nothing.",
      },
      {
        term: "Throwaway vs evolutionary prototyping",
        kind: "method",
        statement: "**Throwaway** (rapid) prototypes are built to answer questions and then discarded — the answers inform the real specification and implementation. **Evolutionary** prototypes are built to production quality from the start and grow into the delivered system, requirement by requirement. Choose throwaway when the open questions are about *what* is needed; choose evolutionary only when the requirements are stable enough that *growing* code is not a trap.",
        detail: "Throwaway earns its discipline: because it will be discarded, it can fake everything — hard-coded results, no error handling, no performance — so it answers questions in days. Evolutionary demands real engineering up front; if you pretend a throwaway-quality build is evolutionary, you have invented the classic trap: shipping the prototype.",
      },
      {
        term: "Prototype failure modes",
        kind: "insight",
        statement: "Two systematic risks: (1) **misplaced confidence** — stakeholders see a polished mockup with three happy-path screens and read it as '90% done', or developers become emotionally unable to discard a throwaway build; (2) **surface bias** — prototypes naturally exercise look-and-feel and interaction, while performance, security, recovery and data-volume questions stay invisible, because none of them can be seen on a screen.",
        detail: "Counter-measures: label prototype fidelity explicitly (paper mockup ≠ working software), schedule the discard date for throwaway builds, and pair every prototype cycle with an explicit checklist of the non-functional questions the prototype deliberately does *not* answer. A prototype that raises false confidence is worse than no prototype.",
      },
    ],
    examples: [
      {
        title: "Validating a checkout redesign: review plus throwaway prototype",
        problem: "An online grocer's specification for a redesigned checkout is drafted. Analytics suggest customers abandon at the delivery-slot step, but nobody can explain why. Devise a validation plan.",
        steps: [
          { label: "Step 1: Review before building anything", text: "Run a moderator-led review of the draft specification. One reviewer reads as a tester ('how would I verify each requirement?'), one hunts cross-document conflicts, three perform independent written readings of the critical requirements and compare interpretations. The comparison surfaces that 'the system shall offer the customer a delivery slot' has two live readings — one slot preselected vs. a choice of slots — a defect found in an afternoon rather than in production." },
          { label: "Step 2: Define the prototype's question list", text: "The open questions are about *what* customers need at the slot step — comprehension of the slot grid? trust that the slot is held? price transparency? These are what/UX questions, not stability questions, so a **throwaway** prototype is the right instrument." },
          { label: "Step 3: Build low-fidelity, cheaply", text: "A clickable mockup with hard-coded slots — three variants of the slot-selection screen. Nothing is real: no persistence, no payment, deliberately fake data. Total build: days. Explicitly label every screen 'mockup — not working software'." },
          { label: "Step 4: Put it in front of real customers", text: "Moderated sessions with 8–10 customers who abandoned real carts. Watch them attempt to pick a slot; the reactions are the data. Variant B (price shown per slot up front) is understood instantly; variant A produces frowns and re-reading — a strong signal that slot-price surprise was the abandonment driver." },
          { label: "Step 5: Discard, and write what was learned into the specification", text: "The mockup is deleted on its scheduled date. The specification gains a measurable requirement: 'When a delivery slot carries a premium, the price delta shall be displayed beside the slot before selection' — plus acceptance criteria lifted from the observed confusions. The prototype's product was never the code; it was that sentence." },
        ],
        result: "Review caught an ambiguity in hours; the throwaway prototype converted an unexplained analytics mystery into a specific, testable requirement in days. Neither instrument shipped, and that was the plan: validation exists to change the specification while it is still cheap to change.",
      },
    ],
    keyTakeaways: [
      "Validation asks if you are building the right product; verification asks if you are building the product right — requirements defects are validation failures and cost the most when found late.",
      "Effective reviews assign roles and preparation; walkthroughs are informal, inspections are measured.",
      "Independent written readings before discussion turn ambiguity into a detectable defect instead of a silent disagreement.",
      "Choose throwaway prototyping for what-questions (needs, UX comprehension) and reserve evolutionary prototyping for stable, well-understood requirements.",
      "Prototypes systematically hide non-functional issues and breed misplaced confidence — label fidelity, schedule the discard, and state explicitly what the prototype cannot answer.",
    ],
    quiz: [
      {
        q: "A team delivers a feature that matches its specification exactly, is bug-free, and passes every acceptance test — yet customers ignore it because the underlying workflow need was misjudged. What failed, and where should it have been caught?",
        options: [
          "Verification failed; unit tests should have been stricter",
          "Validation failed; requirements validation (reviews, prototypes with real stakeholders) should have caught the misjudged need before implementation",
          "Both failed equally; the fault is shared between testers and developers",
          "Nothing failed — the process worked and the market simply changed",
        ],
        answer: 1,
        explanation: "Perfect conformance to a wrong specification is a validation failure by definition: the product was built right but is not the right product. The instruments for catching it — stakeholder reviews, prototypes in front of real users — exist precisely at the requirements stage. Stricter testing (a) polishes conformance to the same wrong target.",
      },
      {
        q: "During a specification review, five engineers read the requirement 'The system shall notify the manager and auditor of failed transactions above 500' and write down what it mandates. Three interpretations emerge: both people notified about the same events; the manager for failures above 500 and the auditor for all failures; notifications of transactions above 500 that failed, but read as failures of transactions whose *total* exceeds 500. What has the review demonstrated, and what is the fix?",
        options: [
          "The engineers need better training in reading specifications",
          "The requirement is ambiguous; rewrite it to disambiguate attachment and scope — and record the divergence as a review defect",
          "The requirement is fine; the majority interpretation (2 of 3) should be adopted and the outlier reviewers overruled",
          "The specification should drop the notification requirement entirely",
        ],
        answer: 1,
        explanation: "Diverging interpretations by competent readers *is* the definition of ambiguity, and the independent-writings-then-compare technique exists to expose exactly this. The fix is a rewrite that pins down who is notified, of what, under which threshold semantics. Majority vote (c) institutionalizes one guess; blaming readers (a) and deleting the feature (d) both discard the signal the review worked to produce.",
      },
      {
        q: "A startup's product requirements are genuinely unstable — the team is still discovering what customers want in a social scheduling tool. Which prototyping strategy fits, and why?",
        options: [
          "Evolutionary: build production-quality code and grow it as understanding improves",
          "Throwaway: build cheap fakes to answer each round of what-questions, discard, and write the answers into the specification",
          "None: unstable requirements mean prototyping is impossible until the market research finishes",
          "Evolutionary, but with the prototype built in a cheaper programming language to save money",
        ],
        answer: 1,
        explanation: "Instability is the textbook trigger for throwaway: each discovery cycle needs fast, fake answers, not production-quality structure that will be wrong in three weeks and is psychologically hard to delete. Evolutionary prototyping (a, d) invests engineering rigor into requirements that have not stabilized yet — you end up either shipping debris or paying to rebuild. (c) inverts the logic: instability is exactly when prototyping earns its keep.",
      },
      {
        q: "After a sleek clickable prototype demo, the sponsor says: 'This looks nearly finished — we can launch next month, right?' The prototype is a three-screen happy-path mockup with hard-coded data. What is the best response?",
        options: [
          "Agree to the timeline, since the screens are indeed finished",
          "Explain that the mockup answers look-and-feel questions only, walk through what is deliberately fake (data, error paths, payment, performance, security), and re-anchor scope with a fidelity statement and a non-functional question list",
          "Refuse to demo prototypes to sponsors in the future",
          "Immediately start hardening the prototype's code so it can actually ship",
        ],
        answer: 1,
        explanation: "Misplaced confidence is a known prototype failure mode with a known counter: explicit fidelity labeling plus a stated list of what the prototype does not answer — the entire non-functional space (performance, security, recovery, data volume) is invisible on screens. Option (d) is the classic trap of shipping the throwaway; (c) throws away the demo's real value; (a) converts an illusion into a project commitment.",
      },
      {
        q: "Which review technique most directly increases the chance of catching an ambiguous requirement, as opposed to merely confirming the specification is tidy?",
        options: [
          "Checking that every requirement has a unique identifier and correct formatting",
          "Confirming the document follows the standard template section order",
          "Multiple reviewers writing independent interpretations of each critical requirement and comparing them before any discussion",
          "Verifying that all reviewers attended the meeting and signed the attendance sheet",
        ],
        answer: 2,
        explanation: "Ambiguity is invisible to formatting and process checks (a, b, d) — a perfectly formatted sentence can still mandate two behaviors. Only divergence between independent readers exposes it: if two competent readers write two different interpretations, the requirement itself is defective. That is why interpretations are written *before* discussion, so anchoring cannot synchronize them into false agreement.",
      },
    ],
  },

  // ==================================================== requirements 1.5
  {
    sectionId: "se-requirements-s5",
    readingTime: 10,
    prerequisites: ["Requirements specification and numbered requirement identifiers"],
    intro: "Requirements do not end when the document is approved — they live for years, absorbing change requests while design, code and tests pile up around them. Requirements management is the machinery that keeps that from becoming chaos: baselines that define what 'approved' means, change control that gates every mutation, and traceability that lets you answer the two questions that matter — did we build everything we promised, and if this changes, what else breaks?",
    objectives: [
      "Explain what a requirements baseline is and why changes to it need formal control",
      "Walk a change request through impact analysis using traceability links",
      "Build and read a requirements traceability matrix, using it to find orphans, gaps and affected tests",
      "Choose requirement attributes (rationale, source, priority, verification method, status) that make management possible",
    ],
    concepts: [
      {
        term: "Baseline",
        kind: "definition",
        statement: "A **baseline** is a formally reviewed and agreed version of the requirements set, frozen as the reference point for further work. Once baselined, requirements change only through **change control** — never by silent editing. Baselines give the project a stable definition of 'what we are currently building' and a measurement point for scope growth.",
        detail: "Baselining too early is as harmful as too late: freeze a half-baked set and every clarification must ride the change-control machinery, breeding either bureaucracy or (worse) the quiet uncontrolled edits the process was meant to prevent. Baseline when the set is validated and stable enough to plan against.",
      },
      {
        term: "Change control",
        kind: "method",
        statement: "Every proposed change to a baselined requirement enters a defined loop: **submit** (problem, proposed change, urgency) → **impact analysis** (which design elements, code modules, tests, documents and schedule are affected, at what cost) → **decision** (approve, reject, or defer) by a change control board or the empowered owner → **implement and update** (requirement, affected artifacts, traceability links) → **notify** affected parties.",
        detail: "Impact analysis is the intellectual core of the loop and is only as good as your traceability — without links, 'what breaks if we change this?' is answered by memory and optimism. The board itself can be one product owner on a small project; what is non-negotiable is that the questions (impact, cost, alternatives) get asked before the answer.",
      },
      {
        term: "Traceability",
        kind: "definition",
        statement: "**Requirements traceability** is the ability to follow the life of a requirement, in both directions. **Forward traceability** runs from requirements to design, code and tests (was every requirement allocated and verified?). **Backward traceability** runs from artifacts back to requirements (why does this test exist? which requirement mandated this module? — exposing gold-plating).",
        detail: "Pre-traceability extends the chain further back: every requirement should link to its source — the stakeholder, goal or regulation that justifies it. A requirement with no origin story is un-defendable during prioritization: when the cut line comes, nobody knows what dying stakeholder need would die with it.",
      },
      {
        term: "Traceability matrix",
        kind: "notation",
        statement: "A **traceability matrix** is a table: rows are requirements (by id), columns are the artifacts they should connect to — design elements, code modules, test cases (and optionally source stakeholder and rationale). A filled cell asserts 'this artifact exists because of this requirement'; an empty cell in a required column is a defect: a **missing allocation** (row with no design/test) or an **orphan artifact** (test with no requirement).",
        detail: "In practice the matrix lives as links in a requirements management tool or fields in issue trackers rather than a literal spreadsheet, but the reasoning is identical: the matrix is a coverage computation over the relationship graph, and every hole is either a gap (unbuilt promise) or gold-plating (unpromised build).",
      },
      {
        term: "Requirement attributes",
        kind: "definition",
        statement: "Manage requirements by attaching structured metadata to each: unique **id**, **source** (stakeholder or regulation), **rationale** (why it exists), **priority** (e.g. MoSCoW: Must/Should/Could/Won't), **verification method** (test, inspection, demonstration, analysis), **status** (proposed, approved, implemented, verified, dropped), and **version/change history**. The id makes it referencable; the attributes make it discussable.",
        detail: "Rationale is the highest-value, most-skipped attribute: it is the only one that lets a future maintainer distinguish 'this is load-bearing' from 'this was somebody's guess in 2022'. Writing one sentence of why, at the moment of capture, costs nothing then and prevents tragic deletions later.",
      },
      {
        term: "Traceability at the right granularity",
        kind: "insight",
        statement: "Traceability is bought with maintenance effort: every link is a thing to update when either end changes, so link at the **coarsest granularity that still answers your management questions** — typically requirement to design element to test suite, not requirement to individual line of code. Fine-grained link farms are accurate for one sprint and dead weight forever after.",
        detail: "Decide what questions you must answer (audit coverage? impact of change X? regulatory evidence?) and trace exactly enough to answer them. An unused traceability graph is not free insurance; it is a slow-motion tax on every future edit.",
      },
    ],
    examples: [
      {
        title: "A traceability matrix, worked: finding the orphan and surviving the change",
        problem: "A food-delivery app has four baselined requirements: R1 (place an order), R2 (track courier on a map), R3 (rate a delivery), R4 (all payment attempts shall be logged for audit). Current artifacts: design elements D1 (ordering service), D2 (tracking service), D3 (notification service), plus tests T1, T2, T3, T5. Build the matrix, audit it, then run the change request: 'Track courier location only to the neighborhood level for privacy.'",
        steps: [
          { label: "Step 1: Lay out the matrix", text: "Rows R1–R4; columns Design and Tests. R1 → D1, T1. R2 → D2, T2. R3 → D3, T3. R4 → (design?) T5. Each cell is an assertion that the artifact exists because of the requirement." },
          { label: "Step 2: Audit the rows (forward coverage)", text: "R4 has test T5 but **no design element** — the audit log has no owning component; it is being implemented, apparently, as scattered print statements. That is a missing allocation: the row caught it. Also compare with the pre-traceability view: R4's source is the payment regulation; note it in the Source column." },
          { label: "Step 3: Audit the columns (backward coverage)", text: "Every design element maps to some requirement (D1←R1, D2←R2, D3←R3). Tests: T1←R1, T2←R2, T3←R3, T5←R4 — but **T4 maps to nothing**. T4 is an orphan test: it clicks the courier's exact coordinates on the map. Either a requirement was forgotten (R2 says 'track' — maybe precision belongs there) or T4 tests gold-plating nobody asked for. Flag it for the change board." },
          { label: "Step 4: Run the change request through impact analysis", text: "Change CR-9 (neighborhood-level tracking) touches R2. Follow the matrix: R2 → D2 (tracking service: new privacy-preserving location blur at the edge) → T2 (assertions on exact coordinates must be rewritten for neighborhood polygons) → T4 (the orphan — now definitively dies, it tested the exact behavior being removed). Also scan for conflicts: R4 is unaffected; a new NFR candidate is born — 'courier identity shall not be derivable from blurred coordinates' — submitted as R5 via the same change process." },
          { label: "Step 5: Update and re-baseline", text: "The board approves CR-9 with R5 attached. Update R2's text and version, add row R5 with source CR-9, link it to a new test T6, mark T4 retired-with-rationale. The matrix stays square: every row filled, every column justified." },
        ],
        result: "The matrix found one missing design allocation (R4), one orphan test (T4), and then converted a privacy change request into a bounded, evidence-based impact list — D2, T2, T4 — plus a new requirement the change itself exposed. That is requirements management doing its job: change with accounted consequences, never silent edits.",
      },
    ],
    keyTakeaways: [
      "A baseline is the agreed, frozen reference version of the requirements; after it exists, changes ride the change-control loop, never silent edits.",
      "Impact analysis — the heart of change control — is only as strong as the traceability links it traverses.",
      "Forward traceability proves every requirement was allocated and verified; backward traceability exposes orphans and gold-plating.",
      "Empty cells in a traceability matrix are defects: a row without tests is an unverified promise, a test without a requirement is an orphan.",
      "Capture rationale and source per requirement; link at the coarsest granularity that answers your actual management questions.",
    ],
    quiz: [
      {
        q: "In a traceability audit of a scheduling system, test T-17 exercises the drag-and-drop calendar editor, but no requirement in the baseline mentions drag-and-drop. What has the audit found, and what are the possible truths behind it?",
        options: [
          "A missing allocation — a requirement exists but was never designed",
          "An orphan test — either a requirement was never written for a genuinely wanted behavior, or the feature is gold-plating built beyond the agreed scope",
          "A forward-traceability failure — the requirement cannot be traced to its stakeholder source",
          "Proof that the test suite is complete, since extra tests cannot hurt",
        ],
        answer: 1,
        explanation: "A test with no justifying requirement is an orphan: either the team built and tested a real need without ever writing it down (a specification gap — the requirement should be added via change control) or they built unrequested scope (gold-plating). (a) describes the opposite hole — requirement present, design absent. And extra tests are not free or harmless: they must be maintained, and they silently encode requirements nobody agreed to.",
      },
      {
        q: "Mid-project, a stakeholder asks a developer to 'just tweak' the export report to include margins per region, and the developer quietly does it. Which two mechanisms existed precisely to prevent this, and what specifically went wrong?",
        options: [
          "Baselining and change control; the change bypassed impact analysis and approval, so affected design, tests, schedule and other stakeholders were never assessed",
          "Prototyping and validation; the change was implemented without a throwaway prototype first",
          "Elicitation and workshops; the need should have been discovered in the original interviews",
          "Traceability matrices and test coverage; the change broke the matrix's row-column symmetry",
        ],
        answer: 0,
        explanation: "Post-baseline, every change goes through submit → impact analysis → decision → implement → notify. The quiet tweak skipped all of it: no cost estimate, no check of which tests assert the old format, no decision by the empowered owner, no notification of downstream consumers. The deeper costs are process corrosion — once quiet edits are tolerated, the baseline stops meaning anything. The other options misidentify the violated mechanisms.",
      },
      {
        q: "A safety-critical medical device must demonstrate to auditors that every requirement was implemented and verified, and trace every design element back to a requirement that justifies it. Which traceability directions does this demand?",
        options: [
          "Forward only — requirements to tests is sufficient for auditors",
          "Backward only — tests to requirements is sufficient for auditors",
          "Both forward (every requirement allocated to design and verified by tests) and backward (every design element and test justified by a requirement) — full bidirectional coverage",
          "Neither — auditors only review the final test report",
        ],
        answer: 2,
        explanation: "The two demands are different queries over the same graph: 'everything promised was built and verified' is forward traceability; 'everything built exists because of a promise' is backward traceability, and it is what exposes gold-plating and unjustified features in regulated settings. Either direction alone answers only half the audit.",
      },
      {
        q: "During deprioritization of requirements for a release cut, the team cannot explain why requirement R-31 ('orders shall be repriceable before dispatch') exists or whom it serves. Which missing requirement attribute is responsible, and what should it have contained?",
        options: [
          "The verification method — how R-31 would be tested",
          "The priority — whether R-31 was a Must or a Could",
          "The source and rationale — which stakeholder or goal motivated R-31 and why, without which no defensible keep-or-cut decision is possible",
          "The version number — which edit created R-31",
        ],
        answer: 2,
        explanation: "Source and rationale are exactly the attributes that make prioritization defensible: with them, cutting R-31 becomes 'we are choosing to disappoint the warehouse manager's reconciliation goal, knowingly'; without them it is a coin flip that may delete a load-bearing need. Verification method, priority and version all matter for other decisions — but none explains *why R-31 exists at all*.",
      },
      {
        q: "A team maintains requirement-to-line-of-code traceability links — 40,000 of them — and spends days after each refactor repairing the graph, which nobody queries at that granularity. What is the correct adjustment?",
        options: [
          "Automate the link repair and keep all 40,000 links, since more traceability is always safer",
          "Drop traceability entirely; it has proven too expensive for the team",
          "Re-granularize to the coarsest level that answers the team's actual questions — typically requirement to design component to test suite — and delete the line-level links",
          "Freeze the codebase so refactors stop breaking the links",
        ],
        answer: 2,
        explanation: "Traceability should exist to answer named management questions (impact of change, coverage for audits, orphan detection) at the least granularity that suffices. Line-level links that nobody queries are pure carrying cost — they buy no additional answer over component-level links. (a) automates waste; (b) over-corrects, discarding the questions' answers along with the excess; (d) inverts the relationship: the process serves the product, not the reverse.",
      },
    ],
  },

  // ==================================================== requirements 1.6
  {
    sectionId: "se-requirements-s6",
    readingTime: 11,
    prerequisites: ["Requirements specification basics", "The idea of requirement verification (test, inspection, demonstration, analysis)"],
    intro: "The three silent killers of specifications are ambiguity (two readers, two systems), inconsistency (two requirements, no possible system) and incompleteness (nobody asked what happens when the disk fills). None of them shows up in a spelling check, and all of them surface as production defects months later. This section is the diagnostic toolkit: taxonomies of ambiguity, systematic conflict detection, and completeness heuristics that find the requirements you never wrote.",
    objectives: [
      "Classify ambiguity into lexical, syntactic, semantic and pragmatic layers, with a test for each",
      "Detect weak words and replace them with measurable statements",
      "Find direct and indirect conflicts between requirements — including NFR-against-FR conflicts",
      "Apply completeness heuristics (boundary analysis, error enumeration, input/output/state checks) to expose missing requirements",
      "Repair an ambiguous requirement by enumerating readings and choosing one deliberately",
    ],
    concepts: [
      {
        term: "Ambiguity",
        kind: "definition",
        statement: "A requirement is **ambiguous** when two competent readers can derive different systems from it. Ambiguity is reader-relative: the author always knows what they meant, which is precisely why authors are the worst ambiguity detectors — independent readers with written interpretations are the instrument that works.",
        detail: "The economic damage of ambiguity is deferred disagreement: the analyst, the developer and the tester each resolve it silently and differently, and the divergence is discovered at integration or acceptance — the three most expensive places in the project to have a conversation that should have cost one email in week two.",
      },
      {
        term: "Ambiguity taxonomy",
        kind: "definition",
        statement: "Four layers: **lexical** — a word with multiple dictionary senses ('file' the document vs. file the tool; 'period' the interval vs. the punctuation); **syntactic** — the grammar allows multiple attachments ('The system shall record the transaction and notify the manager and the auditor' — who exactly is notified of what?); **semantic** — inherently vague quantifiers and adjectives ('several', 'appropriate', 'efficient', 'user-friendly'); **pragmatic** — meaning depends on unstated context ('The report shall be generated daily' — which timezone's day? sent or merely created?).",
        detail: "The layers have different fixes: lexical and syntactic yield to rewriting and glossaries; semantic vagueness yields only to measurable thresholds; pragmatic gaps yield to context specification — timezone, environment, actor identity. Diagnosing the layer tells you which fix to reach for.",
      },
      {
        term: "Weak-word scan",
        kind: "method",
        statement: "Scan the specification for a standing list of vagueness markers and treat each hit as a defect to repair: *adequate, appropriate, efficient, sufficient, user-friendly, easy, fast, robust, flexible, minimal, maximal, several, some, few, generally, typically, if needed, as required, support (unquantified), enable (unquantified)*, and the notorious *etc.* Each is a placeholder for a number, a list, or a decision that someone still owes the document.",
        detail: "The scan is cheap enough to run as a checklist item in every review, and it finds a striking fraction of semantic ambiguity in minutes. Every hit gets one of two treatments: replace with a measurable bound, or add a decision task — 'who must decide what several means, by when?'",
      },
      {
        term: "Inconsistency (conflict)",
        kind: "definition",
        statement: "Two requirements are **inconsistent** when no system can satisfy both. **Direct conflicts** contradict on the same subject (R1: sessions expire after 5 minutes; R2: sessions last 8 hours). **Indirect conflicts** contradict only through an unstated assumption or a shared resource (an FR demanding all errors displayed in real time, plus an NFR that the UI thread never blocks — satisfiable together only with engineering effort nobody budgeted). **Temporal conflicts** hold at different times (a migration requirement that both preserves all history and deletes personal data after 30 days).",
        detail: "Conflicts cluster where documents never meet: NFRs written by one group contradicting FRs written by another; global constraints ('all logs shall be human-readable') colliding with local needs ('logs shall be encrypted at rest'); regulatory requirements colliding across jurisdictions. Cross-document reviews exist because conflicts do not live inside single paragraphs.",
      },
      {
        term: "Conflict detection and resolution",
        kind: "method",
        statement: "Detect by construction: maintain a **shared glossary** (kills lexical drift), cross-check every global NFR against every FR it constrains, and tabulate requirements that mention the same entity or resource. Resolve by making the trade-off explicit and routing it to the empowered owner: **prioritize** (one wins, with rationale recorded), **scope-condition** (each holds under different conditions — 5-minute expiry for admin consoles, 8 hours for warehouse terminals), or **negotiate a third requirement** that satisfies both interests.",
        detail: "The cardinal rule: never resolve a conflict by silent averaging or by letting the developer pick at build time. The resolution is a decision with a rationale, recorded as such — future maintainers will otherwise re-litigate it, wrongly.",
      },
      {
        term: "Completeness heuristics",
        kind: "method",
        statement: "You cannot prove completeness, but you can attack it from fixed directions. Per requirement: **boundary analysis** — what happens at, just inside, just outside every limit (order of 0 items? of 10,000?); **error enumeration** — for every step and every external dependency, ask what happens when it fails (payment gateway down, network lost mid-transaction, disk full). Per system: every input is used, every output is produced, every state is reachable and exitable, every user class has its requirements, every entity has create/read/update/delete/archive behavior. Per domain: legal, regulatory and environmental constraints enumerated, not assumed.",
        detail: "The single most productive question in the toolkit is the failure question: 'what should the system do when X fails?' applied to every step, every call, every human actor. Happy paths write themselves; the missing requirements hide almost exclusively in the unhappy ones.",
      },
      {
        term: "Completeness is checklist-relative",
        kind: "insight",
        statement: "No specification is provably complete — completeness can only be asserted *relative to a stated frame*: scope statement, list of user classes, list of external interfaces, failure-question checklist. The professional move is to make the frame explicit ('this specification covers the four named user classes and the eleven external interfaces; everything else is out of scope') so that gaps are detectable as violations of the frame rather than invisible omissions.",
        detail: "This reframes reviews: instead of the unanswerable 'is it complete?', ask 'against this frame — these user classes, these interfaces, these failure questions — is anything missing?'. The question becomes answerable, and the answer becomes actionable.",
      },
    ],
    examples: [
      {
        title: "Repairing an ambiguous requirement",
        problem: "A ticketing specification contains: 'The system shall allow a customer to save an order and retrieve it later.' Production incidents show three teams built three behaviors from this one sentence. Diagnose and repair it.",
        steps: [
          { label: "Step 1: Enumerate the readings", text: "Independent readings diverge: (i) *save* = persist for the current browser session only, (ii) *save* = persist to the customer's account for 30 days, (iii) *save* = persist indefinitely until deleted; and for *retrieve*: (a) only the saving customer may retrieve, (b) any agent on the account may retrieve; and *order*: complete orders only, or in-progress carts too. Crossed out, that is 3 × 2 × 2 = 12 defensible systems from one sentence." },
          { label: "Step 2: Classify the ambiguities", text: "Lexical/pragmatic: 'save' has an unstated duration and location (account vs. session) — a context gap. Semantic: 'later' is unbounded — a weak word. Pragmatic: 'customer' — which role, exactly, when accounts have multiple agents?" },
          { label: "Step 3: Choose deliberately, with the stakeholder", text: "The business decision: orders persist to the customer's account for 30 days, then auto-archive; any agent listed on the account may retrieve them; both completed orders and in-progress carts are saveable. These are product decisions, not analyst guesses — route each to the empowered owner." },
          { label: "Step 4: Rewrite measurably", text: "'REQ-207: A customer shall be able to save an in-progress cart or a completed order to their account. Saved items shall persist for 30 calendar days from last modification, computed in the account's registered timezone, then be archived and recoverable only by support request. Any agent named on the account may list and retrieve saved orders; retrieval shall restore item, quantity and pricing as of retrieval time.' Every reading that caused an incident is now pinned." },
          { label: "Step 5: Add the guardrails", text: "Push the fixed vocabulary into the shared glossary (save = persist-to-account-30-days), and add acceptance criteria at the boundary: day 29, day 30, day 31 post-modification — the three tests that fail if anyone quietly re-ambiguates the rule." },
        ],
        result: "Twelve systems hidden in one sentence, collapsed to one by enumerating readings, classifying each ambiguity layer, deciding deliberately, and rewriting with numbers, timezone and role identity. Plus boundary tests at the freshly quantified edges — because every new number creates a new edge that deserves a test.",
      },
      {
        title: "Catching an indirect conflict before it ships",
        problem: "A ride-sharing app's specification includes: R1 (FR): 'Every fare adjustment shall be displayed to the passenger within 1 second of the driver submitting it.' R2 (NFR): 'The passenger app shall consume at most 2% battery per hour of idle waiting.' No single sentence contradicts another. Is the set consistent?",
        steps: [
          { label: "Step 1: Cross-check every global NFR against every FR", text: "R1 demands a push channel that can wake the app within a second, at any time. R2 demands the idle app do almost nothing. Both are satisfiable — but only via specific mechanisms (persistent socket vs. periodic polling), and polling at a 1-second cadence blows the battery budget by an order of magnitude." },
          { label: "Step 2: Expose the hidden assumption", text: "The conflict is indirect: it lives in the *mechanism space*, not the sentences. Whoever wrote R2 assumed a low-frequency sync design; whoever wrote R1 assumed an always-on channel. The requirements do not conflict — the implied designs do, for naive implementations." },
          { label: "Step 3: Resolve by scoped conditions", text: "Resolution: R1 holds while the app is in the foreground or a ride is active (when the push channel is open anyway); during idle waiting, adjustments sync on app-open with a visible freshness indicator. Record the decision and rationale; the trade-off (immediacy vs. battery) is now a documented product choice instead of a build-time coin flip." },
        ],
        result: "Indirect conflicts are invisible to sentence-by-sentence review — only the systematic NFR×FR cross-check, plus surfacing the mechanism each requirement silently assumes, finds them. The output is not a winner but a scoped resolution with rationale: the only form of conflict resolution that survives the next maintainer.",
      },
    ],
    keyTakeaways: [
      "Ambiguity means two competent readers derive different systems; authors cannot detect it in their own text — independent written readings can.",
      "Diagnose the ambiguity layer — lexical, syntactic, semantic, pragmatic — because each layer has a different fix (glossary, rewrite, measurable threshold, context specification).",
      "Weak words (adequate, efficient, user-friendly, several, etc.) are standing defect markers; each is an unpaid decision, a missing number or an unfinished list.",
      "Conflicts can be indirect — NFR against FR through a shared mechanism or resource — so cross-check every global constraint against every affected behavior, not just sentence against sentence.",
      "Completeness is only ever checklist-relative: boundary values, failure of every step and dependency, input/output/state coverage, user classes, interfaces — make the frame explicit and audit against it.",
    ],
    quiz: [
      {
        q: "A specification states: 'The system shall record the transaction and notify the manager and the auditor.' One developer notifies both parties about every transaction; another notifies the manager about every transaction and the auditor only about failed ones. Which ambiguity layer is this, and what is the fix?",
        options: [
          "Lexical ambiguity — replace the word 'transaction' with a glossary term",
          "Syntactic ambiguity — the conjunction chain allows multiple attachments; rewrite with explicit per-recipient scope ('notify the manager of every recorded transaction; notify the auditor of every failed transaction')",
          "Semantic ambiguity — 'notify' is a vague verb needing a measurable threshold",
          "Pragmatic ambiguity — the timezone of 'record' is unspecified",
        ],
        answer: 1,
        explanation: "The sentence's grammar does not pin what each 'and' conjoins — whether the auditor joins the notify list or the failure condition — so two parses survive. The fix is a rewrite that names each recipient and their triggering condition explicitly. Lexical fixes (a) address word senses, semantic fixes (c) address unquantified vagueness, and (d) addresses context gaps — none of which is the defect here.",
      },
      {
        q: "Which of these specification fragments should a weak-word scan flag first?",
        options: [
          "The system shall reject login attempts after 5 consecutive failures within 10 minutes",
          "The report shall be generated daily at 02:00 server time and emailed to the operations list",
          "The system shall provide adequate performance under typical load conditions",
          "Every order shall carry a UTC timestamp with millisecond precision",
        ],
        answer: 2,
        explanation: "'Adequate' and 'typical' are weak words — two unquantified decisions masquerading as a requirement: no number for latency or throughput, no definition of the load environment, hence no possible test. The other three fragments are what repaired requirements look like: bounded counts, named schedules, explicit timezone and precision.",
      },
      {
        q: "Two requirements from different teams: R1 — 'All stored logs shall be encrypted at rest.' R2 — 'The audit log shall be directly human-readable by compliance staff without decryption tooling.' What is the status of this pair, and what is the appropriate resolution path?",
        options: [
          "Consistent — encryption and readability can trivially coexist",
          "A direct conflict: as written, no log can be both encrypted at rest and directly human-readable without decryption; route to the empowered owners to prioritize, scope-condition, or negotiate a third design (e.g. encrypted at rest with a compliance viewing console that decrypts on authorized access)",
          "An indirect conflict through an unstated performance assumption",
          "Not a requirements issue — developers will figure it out during implementation",
        ],
        answer: 1,
        explanation: "As stated the pair is unsatisfiable — the classic NFR-vs-NFR/FR direct conflict that appears when security and compliance requirements are written by separate groups. Resolution must be an explicit, recorded decision: one requirement wins, conditions split the cases, or a third design satisfies both interests. Deferring to implementation (d) delegates a security-and-compliance product decision to whoever writes the code that week.",
      },
      {
        q: "A specification says: 'When the payment gateway is unreachable, the system shall handle it appropriately.' Which completeness heuristic, applied here, generates the real requirement the sentence is hiding?",
        options: [
          "Boundary analysis — test the statement at gateway timeouts of exactly 30 seconds",
          "The failure-question heuristic: for every external dependency, specify detect, degrade, retry, and recover — e.g. within how long unavailability is detected, how many retries at what spacing, what the customer sees (queue vs. reject vs. retry-later), how orders persist meanwhile, and how the queue drains on recovery",
          "Input/output coverage — verify every payment input field is used somewhere",
          "User-class coverage — confirm both guests and registered customers can pay",
        ],
        answer: 1,
        explanation: "'Handle it appropriately' is an unpaid decision about failure behavior, and the failure-question heuristic — detect, degrade, retry, recover, for every dependency — is exactly the checklist that forces those decisions into explicit requirements. Boundary analysis (a) polishes numbers once they exist; (c) and (d) are other valuable heuristics that do not touch this gap.",
      },
      {
        q: "A reviewer claims a specification is complete. What is the strongest professionally defensible response?",
        options: [
          "Agree — if every requirement in it is testable and none are ambiguous, the document is complete",
          "Ask complete relative to what frame: which user classes, external interfaces, failure questions and boundary cases were enumerated — then audit the document against that explicit checklist",
          "Disagree on principle — no specification is ever complete, so the claim is always false",
          "Run a spell-check and grammar pass; completeness follows from correct prose",
        ],
        answer: 1,
        explanation: "Completeness is checklist-relative: it can only be assessed against an explicit frame — enumerated user classes, interfaces, failure questions, boundary values. With the frame stated, gaps become detectable violations; without it, 'complete' is an unfalsifiable feeling. (a) conflates testability and unambiguity (internal qualities) with completeness (a relational one); (c) is technically true but useless — it abandons the audit instead of framing it; (d) polishes prose, not coverage.",
      },
      {
        q: "During review, three independent readers interpret 'The system shall support image uploads' as: (1) any image format the browser can produce, (2) JPEG and PNG only, (3) images up to any size. What is the correct next action?",
        options: [
          "Take a vote among the readers and adopt the majority interpretation as the requirement",
          "Ask the original author what they meant and consider the ambiguity resolved",
          "Record a defect, classify the ambiguity (semantic — 'support' and implicit limits are unquantified), and drive a decision: which formats, what maximum size, at what resolution, verified how — then rewrite with the numbers",
          "Leave it as is — at implementation time the developers will choose the most reasonable interpretation",
        ],
        answer: 2,
        explanation: "Three competent readers, three systems: that is a detected ambiguity defect, and the professional response is repair, not arbitration. 'Support' is the canonical unquantified weak word — the rewrite must name formats, size bounds and failure behavior, each a stakeholder decision. Voting (a) institutionalizes a guess; the author's intent (b) does not bind the stakeholders who will use the system; and (d) delegates the product decision to build time, which is how the incident reports get written.",
      },
    ],
  },

  // ==================================================== architecture 1.1
  {
    sectionId: "se-architecture-s1",
    readingTime: 9,
    prerequisites: ["Basic familiarity with components, modules and deployment"],
    intro: "A pile of diagrams is not architecture documentation — a set of views, each answering a specific stakeholder question, is. The classic 4+1 view model and the modern C4 model both rest on the same insight: no single picture can serve a database administrator, an ops engineer and a product lead at once. And underneath the pictures sits the artifact that keeps architecture honest over time: the humble decision record.",
    objectives: [
      "Define software architecture as structures of elements, relations and properties — the set of decisions that are hard to change later",
      "Describe the 4+1 view model (logical, process, development, physical, plus scenarios) and map stakeholder questions to views",
      "Navigate a system with the C4 model's zoom levels: context, containers, components, code",
      "Write an architecture decision record capturing context, decision, consequences and status",
      "Explain why rationale is the most valuable — and most perishable — part of architectural documentation",
    ],
    concepts: [
      {
        term: "Software architecture",
        kind: "definition",
        statement: "**Software architecture** is the set of structures of a system: its **elements** (modules, components, connectors, data), the **relations** among them, and the **properties** they must maintain — together with the principal design decisions that produce them. Operationally: architecture is the collection of decisions that are expensive to change after code exists (process boundaries, data ownership, trust zones, technology choices).",
        detail: "The decisions framing is the useful one day-to-day. Choosing a message broker or drawing a service boundary is architecture; choosing a loop structure is not — not because one is more technical, but because one costs a quarter to reverse and the other costs an afternoon. Architecture is where the expensive-to-change decisions live.",
      },
      {
        term: "The 4+1 view model",
        kind: "definition",
        statement: "Kruchten's model documents a system through four coordinated views plus scenarios binding them: the **logical view** (end-user functionality; domain decomposition for engineers who own features), the **process view** (runtime: concurrent processes, their interactions, synchronization, failure behavior — for integrators and performance engineers), the **development view** (module organization, layers, build and ownership — for the programmers), and the **physical view** (deployment: processes mapped to processors, network links — for ops). The **+1 scenarios** walk through each view to verify they are consistent with real usage.",
        detail: "The model's power is stakeholder routing: the DBA's questions live in logical-plus-data views, the SRE's in the physical view, the feature team's in development and logical. A review that cannot say which view a diagram belongs to will have the wrong audience arguing about the wrong picture.",
      },
      {
        term: "The C4 model",
        kind: "method",
        statement: "C4 documents a system as four zoom levels, each a box-and-line diagram at fixed vocabulary: **Context** — the system as one box among its users and external systems; **Container** — the separately runnable things inside it (web app, API, single-page app, database, message queue); **Component** — the major building blocks inside one container; **Code** — the classes inside one component, usually left to IDEs and UML where useful at all.",
        detail: "The levels kill the two chronic documentation failures: diagrams that mix runtime boxes with build-time boxes, and diagrams with no stated zoom. Rule: every box in a given C4 diagram is the same *kind* of thing, every line means the same *kind* of interaction, and every diagram is titled with its level. Most teams need context and container diagrams maintained religiously, components for hot areas only, and code almost never.",
      },
      {
        term: "Architecture decision record (ADR)",
        kind: "method",
        statement: "An **ADR** is a short, immutable document capturing one decision: **Title** and date, **Status** (proposed, accepted, superseded by ADR-14...), **Context** — the forces in play: constraints, requirements, options considered, **Decision** — what was chosen and concretely what will be done, **Consequences** — what becomes easier, what becomes harder, what we now must live with. Superseded ADRs are never deleted; they are marked, leaving the decision's full history legible.",
        detail: "The context section is the payload: six months later, nobody remembers why Kafka was rejected — only that 'we do not use Kafka'. ADRs convert that tribal rule back into a re-evaluable decision with its original forces attached. Keep them short (a page), numbered, and stored beside the code so they survive reorganizations.",
      },
      {
        term: "Views are stakeholder routing, not redundancy",
        kind: "insight",
        statement: "Multiple views are not repeated documentation — they are **different answers to different questions asked by different people**. The question determines the view: 'Which servers talk to the payment zone?' → physical. 'What happens at runtime when the cart service times out?' → process. 'Who owns this module and what can it depend on?' → development. 'What does the customer see as features?' → logical.",
        detail: "Practical corollary: documentation effort should follow stakeholder questions, not completeness ideals. An internal tool with one team and one server needs context and container diagrams; a regulated multi-region platform needs all four views plus ADRs for every zone boundary. Write for the questions that will actually be asked.",
      },
      {
        term: "Stale diagrams and living rationale",
        kind: "insight",
        statement: "Structural diagrams rot because structure changes with every sprint; **rationale rots invisibly** because nobody edits it — it just becomes false as its context changes. The defense is pairing: keep current-structure views cheap and regenerable (close to code, ideally derived from it), and keep decisions in immutable ADRs whose supersession chain is itself the history of the architecture.",
        detail: "A wrong diagram is detectable by comparing it to reality; a wrong-but-unrecorded rationale is undetectable until someone builds on a constraint that no longer holds — which is how the next team 'fixes' a design decision that was protecting them from an outage mode nobody remembers.",
      },
    ],
    examples: [
      {
        title: "Documenting a food-delivery platform: two C4 levels and one ADR",
        problem: "You inherit a food-delivery platform with no architecture documentation. Teams keep breaking each other by changing shared contracts, and new engineers take weeks to understand what talks to what. Produce the minimum documentation set that fixes both problems.",
        steps: [
          { label: "Level 1: Context diagram", text: "One box: FoodDelivery Platform. Around it: Customer app (person), Courier app (person), Restaurant portal (person), Payment gateway (external system), Maps API (external system), SMS provider (external system). Every line is labeled with what crosses it: 'order requests', 'payment authorizations', 'location queries', 'dispatch texts'. This single diagram answers the new-engineer questions: what is this system, who uses it, what does it depend on." },
          { label: "Level 2: Container diagram", text: "Inside the platform box: Web SPA, Order API, Dispatch service, Courier location service, Notifications service, PostgreSQL (orders), Redis (live location), Message queue. Lines show real interactions: Order API → queue → Dispatch service; Courier location service → Redis; Dispatch → Notifications → SMS provider. This is the diagram that stops contract-breaking changes: the queue's message schema is visibly a shared contract between three containers." },
          { label: "Skip what you do not need yet", text: "Component-level diagrams for the Order API only — it is the hotspot everyone touches. Code-level diagrams: none; the IDE does that job. Two-and-a-half diagrams, maintained, beat twenty that are all stale." },
          { label: "The ADR for the decision the diagram cannot show", text: "**ADR-07 — Async dispatch via message queue.** Status: Accepted. Context: dispatch was initially synchronous in the Order API; a dispatch outage took down order placement entirely; peak-hour latency doubled under load; the team considered synchronous retries and a queue. Decision: dispatch becomes asynchronous — Order API publishes an OrderPlaced event to the queue and returns; Dispatch service consumes at its own pace; message schema is a versioned contract. Consequences: order placement survives dispatch outages (+); eventual consistency — couriers see orders seconds later (+/−); the message schema is now a coupling point needing versioning discipline (−); dead-letter handling and monitoring are now mandatory (−)." },
          { label: "Wire the documentation into the workflow", text: "Container diagram lives in the repo beside the code, updated in the same PR that changes a container boundary. ADRs are numbered files; the schema-change checklist includes 'update ADR-07's contract version'. Staleness is combated by proximity, not by policy memos." },
        ],
        result: "Two C4 levels answer the structural questions new engineers and change-reviewers actually ask; one ADR preserves the reason the queue exists — the outage-driven context that nobody will remember in a year. The set is small enough to maintain, which is the only documentation set that survives.",
      },
    ],
    keyTakeaways: [
      "Architecture = elements, relations, properties, and the expensive-to-change decisions that fix them; the decision framing tells you what is architectural and what is not.",
      "4+1 routes stakeholder questions to views: logical (functionality), process (runtime), development (modules), physical (deployment), with scenarios checking cross-view consistency.",
      "C4 gives four zoom levels — context, container, component, code — with fixed vocabulary per level; most systems need the first two maintained religiously.",
      "An ADR captures context, decision and consequences for exactly one choice; superseded records are marked, never deleted — the supersession chain is the architecture's memory.",
      "Diagrams rot visibly, rationale rots invisibly: keep structure views near the code and cheap to regenerate, and keep the why in immutable ADRs.",
    ],
    quiz: [
      {
        q: "The operations lead asks: 'Which physical machines can initiate connections into the payment-processing network zone?' Which architectural view answers this question directly?",
        options: [
          "The logical view — it shows user-facing functionality",
          "The process view — it shows concurrent processes and their synchronization",
          "The physical view — it maps runtime processes onto processors and network links, which is exactly where zone boundaries and connection directions live",
          "The development view — it shows module organization and build dependencies",
        ],
        answer: 2,
        explanation: "Deployment topology — which node talks to which node, across which network — is the physical view's exclusive subject. The logical view answers feature questions, the process view answers runtime-concurrency questions, and the development view answers code-organization questions. Routing the question to the right view is half of what view models teach.",
      },
      {
        q: "In a C4 container diagram of a streaming platform, which set of boxes is correct at that zoom level?",
        options: [
          "User, Session, PlaybackController, PlaylistRepository — the classes of the domain model",
          "React SPA, Edge API, Transcoder service, Kafka, PostgreSQL — the separately runnable processes and data stores that together form the system",
          "The streaming platform (one box), viewers (one box), ad exchange (one box), CDN (one box) — the system and its external actors",
          "PaymentGateway, InvoiceGenerator, TaxCalculator — one container's internal building blocks",
        ],
        answer: 1,
        explanation: "A container diagram's boxes are things you can separately run and deploy: SPAs, APIs, services, databases, queues — option (b) exactly. Option (a) is code-level, (c) is the context level (system + externals as single boxes), and (d) is component level inside one container. Mixing zoom levels in one diagram is the documentation sin C4 exists to prevent.",
      },
      {
        q: "Eighteen months after a platform was built, a new engineer proposes replacing its message queue with direct synchronous calls, believing the queue is pointless complexity. Which documentation artifact would most directly prevent this mistake, and how?",
        options: [
          "An up-to-date container diagram, showing the queue exists between the order and dispatch services",
          "An ADR recording the context — the outage that motivated the queue, the alternatives considered, and the consequences accepted — so the proposal is evaluated against the original forces rather than in ignorance of them",
          "A logical view showing the end-user functionality the queue supports",
          "A sprint-by-sprint changelog of every modification to the messaging code",
        ],
        answer: 1,
        explanation: "The diagram shows *that* the queue exists — the ADR shows *why*, including the outage and the trade-offs consciously accepted (eventual consistency, schema versioning). The engineer's proposal may still be right if the original forces have changed — but only an ADR makes that a reasoned re-decision instead of an unwitting regression. Structure documents what; rationale documents why-for.",
      },
      {
        q: "In the 4+1 view model, what role do the '+1' scenarios play with respect to the other four views?",
        options: [
          "They replace the need for any runtime documentation, since scenarios are executable",
          "They serve as integration checks — walking a concrete end-to-end usage through logical, process, development and physical views exposes inconsistencies between them",
          "They are user manuals for the testers and play no architectural role",
          "They document only the non-functional requirements, which the four views ignore",
        ],
        answer: 1,
        explanation: "A single scenario — say, 'customer places an order during a payment-gateway outage' — must be traceable through all four views: the functionality (logical), the concurrent processes and failure handling (process), the modules implementing it (development), and the machines it runs on (physical). If the walk breaks — the process view has a retry the logical view never mentions — an inconsistency between views is exposed. That cross-view glue is the '+1's entire job.",
      },
      {
        q: "A team's wiki has 30 detailed architecture diagrams, but every one is at least six months stale and engineers distrust them. What is the soundest corrective strategy?",
        options: [
          "Mandate that architects review all 30 diagrams monthly for accuracy",
          "Delete architecture documentation entirely and rely on verbal knowledge transfer",
          "Shrink to the few diagrams that answer real recurring stakeholder questions (typically C4 context + container), store them beside the code so structure changes update them in the same PR, and capture the why in ADRs",
          "Regenerate all 30 diagrams automatically from the codebase every night",
        ],
        answer: 2,
        explanation: "Documentation that is not trusted is worse than none, and 30 diagrams cannot be kept honest by review meetings. The durable fix is fewer diagrams chosen by stakeholder question, versioned with the code so they change when the code changes, plus ADRs for rationale (which diagrams never carry). (b) discards the genuine value; (a) is a maintenance treadmill that has already failed; (d) can derive structure but never rationale, and regenerates noise nobody asked about.",
      },
    ],
  },

  // ==================================================== architecture 1.2
  {
    sectionId: "se-architecture-s2",
    readingTime: 10,
    prerequisites: ["Non-functional requirements as architectural drivers", "Components and connectors at runtime"],
    intro: "An architectural style is a packaged set of structural decisions with a known quality profile — pick pipes-and-filters and you have bought incremental throughput at the price of interactivity; pick microservices and you have bought independent deployment at the price of a distributed system. This section tours the load-bearing styles and, more importantly, the trade-off discipline for choosing among them.",
    objectives: [
      "Define an architectural style as a vocabulary of components and connectors plus constraints, with a characteristic quality profile",
      "Explain layered, pipes-and-filters and event-driven styles: their strengths, and their specific failure modes",
      "Analyze the monolith vs microservices decision as a trade-off among deployment independence, data consistency and operational complexity",
      "Diagnose the distributed-monolith anti-pattern from its symptoms",
      "Select a style (or hybrid) by scoring candidates against the 2–3 dominant quality-attribute drivers",
    ],
    concepts: [
      {
        term: "Architectural style",
        kind: "definition",
        statement: "An **architectural style** is a family of structures defined by a **vocabulary** of component and connector types (filter, pipe, layer, publisher, subscriber), **constraints** on how they may be combined (no layer skipping, filters do not share state), and a resulting **quality profile** — a predictable bundle of qualities the style delivers well and delivers badly.",
        detail: "Styles are pre-made decision bundles. That is their value and their danger: value, because a style imports decades of accumulated wisdom about its sweet spots; danger, because it imports the failure modes too, and teams that adopt a style for its brochure qualities meet its fine print in production.",
      },
      {
        term: "Layered style",
        kind: "definition",
        statement: "The system is organized into an ordered stack of **layers**, each providing services to the layer above and consuming services only from the layer below — presentation, application logic, domain logic, persistence being the canonical four. Strengths: **separation of concerns**, swappable implementations behind layer interfaces, teams organized by layer. Costs: performance overhead from pass-through calls, and the chronic failure mode of **layer leakage** — bypassing the stack for convenience until every layer knows about everything.",
        detail: "Two laws of layers worth memorizing: strict layering (call only the layer immediately below) maximizes substitutability; relaxed layering (call any lower layer) trades it for fewer pass-through hops. Choose per layer boundary, explicitly — and enforce with lint rules and architecture tests, because layers decay silently one shortcut at a time.",
      },
      {
        term: "Pipes-and-filters style",
        kind: "definition",
        statement: "Computation is a pipeline of independent **filters**, each reading a stream from its input **pipe**, transforming it, and writing to its output pipe — with no shared state between filters. Strengths: **incremental, streaming throughput** (filters run concurrently as data flows), composability of transformations, easy parallelization. Costs: no natural interactivity (a data-flow model, not a request model), error handling across the chain is awkward, and filters are coupled by the data format flowing in the pipes.",
        detail: "The style dominates data processing — compilers (lexing → parsing → optimization → code generation), ETL, media transcoding, log analysis — and is wrong for interactive interfaces, where the user is not a stream. Its signature weakness is format coupling: changing the pipe schema touches every filter downstream, so schema versioning is the pipe-line's central discipline.",
      },
      {
        term: "Event-driven style (publish–subscribe)",
        kind: "definition",
        statement: "Components communicate indirectly: **publishers** emit named events without knowing who (if anyone) consumes them; a broker delivers events to **subscribers** that registered interest. Strengths: extreme **decoupling of senders from receivers**, easy extensibility (add a subscriber, touch no publisher), resilience of producers to consumer slowness or failure. Costs: **debugging is genuinely harder** — no call stack follows an event across a broker; ordering and delivery semantics (at-least-once, exactly-once) become explicit engineering obligations; consumers must be idempotent under redelivery; and **eventual consistency** replaces immediate feedback.",
        detail: "The observability tax is the price most teams under-estimate: correlation ids that propagate through every event, dead-letter queues with real runbooks, and dashboards that can answer 'did event X get processed, and if not, why'. Without that instrumentation, an event-driven system is a distributed system with the lights off.",
      },
      {
        term: "Monolith vs microservices",
        kind: "definition",
        statement: "A **monolith** packages all functionality into one deployable unit: in-process calls, one transaction boundary, one release train — simplest to develop, debug and transactionally protect, but every change redeploys everything and scaling is all-or-nothing. **Microservices** decompose by business capability into independently deployable services with private data: independent scaling, releases and technology per service — purchased with network failure modes, distributed transactions and sagas, eventual consistency, and a heavy operations platform (containers, service discovery, tracing, orchestrated deploys).",
        detail: "The honest decision rule: microservices buy **organizational scaling** (many teams shipping independently without queuing on one another) more than they buy technical elegance. A team of eight running twelve services is paying distributed-system tax without the organizational dividend. Conway's law cuts both directions: your architecture will grow to look like your communication structure, so choose the structure you can staff.",
      },
      {
        term: "The distributed monolith",
        kind: "insight",
        statement: "The worst of both worlds arrives when services are split physically but not logically: synchronous call chains where every request fans through five services (all the latency and failure coupling of distribution, none of the independent deployability), shared databases reached around the service boundary, and releases that must still be coordinated across teams. Symptoms: deploys require a synchronized rollout of multiple services; one service's outage cascades through the chain; 'temporary' shared tables age into permanence.",
        detail: "The cure is boundary hygiene: services own their data exclusively (no cross-service table reads), synchronous chains are collapsed or replaced with events where eventual consistency is tolerable, and each service is independently deployable *in practice* — verified by actually deploying them independently, not by asserting it in a diagram.",
      },
      {
        term: "Style selection by dominant drivers",
        kind: "method",
        statement: "Choose styles by enumeration and scoring, not by fashion: (1) identify the 2–3 **dominant quality-attribute drivers** from the requirements (throughput? modifiability of processing stages? independent team deployment? 99.99% availability?); (2) list candidate styles and hybrids; (3) score each candidate against each driver, noting sensitivities — where the style fights the requirement; (4) verify the fine print — the failure modes the style imports are acceptable. The style that wins on the drivers must also survive its own cost column.",
        detail: "Real systems are almost always hybrids: a pipes-and-filters core for the data path, an event bus for integration, a modular monolith for the transactional core that does not need distribution. Purity is not a quality attribute; the drivers are the drivers.",
      },
    ],
    examples: [
      {
        title: "Choosing a style for an IoT telemetry platform",
        problem: "Design the architecture for a platform ingesting telemetry from 50,000 factory sensors. Requirements: (1) ingest at 200,000 events/second; (2) new analytic jobs (rolling averages, anomaly detection, predictive maintenance) added every few weeks without touching running code; (3) raw data replayable into new analytics; (4) a configuration dashboard for engineers — interactive, low volume. Drivers and style choices?",
        steps: [
          { label: "Step 1: Identify the dominant drivers", text: "Driver one: **throughput at scale** (200k events/s). Driver two: **modifiability of the processing stages** — new analytics without redeploying the pipeline. Driver three: **replayability** — raw events retained and re-processable. The dashboard is real but minor: interactive, low volume, boring." },
          { label: "Step 2: Map drivers to styles", text: "Throughput + stage modifiability + replay is the exact quality profile of **pipes-and-filters**: ingest → decode → validate → route → per-analytic fan-out, each filter independently replaceable, run concurrently as streams. Replay is satisfied by one crucial pipe choice: an **append-only durable log** (Kafka-style) as the spine — raw events are retained, and every new analytic is a new consumer group that replays history from the beginning." },
          { label: "Step 3: Add event-driven where decoupling pays", text: "New analytics added weekly, without touching producers: consumers **subscribe** to the log's topics — publishers (the ingest filters) neither know nor care how many analytics subscribe. That is publish–subscribe semantics, and it is exactly why requirement (2) is satisfied by construction rather than by discipline." },
          { label: "Step 4: Keep the boring parts boring", text: "The configuration dashboard: an interactive request/response application. Give it a small **layered** service (presentation → application → data) with its own database, reading config changes the pipeline picks up via a control topic. No distribution where none is needed — the dashboard has no throughput driver and joins no event flow." },
          { label: "Step 5: Audit the fine print", text: "The style's costs, accepted deliberately: schema evolution on the log is a contract — every event format is versioned, old consumers tolerate new fields; ordering is per-partition, documented per analytic; dead-letter topics with runbooks for poison events; end-to-end tracing via correlation ids, because no stack trace will ever cross the broker." },
        ],
        result: "A hybrid, chosen driver by driver: pipes-and-filters on a durable log spine for throughput, replay and stage modifiability; pub-sub semantics for zero-touch extensibility; a small layered service for the interactive dashboard. Every acceptance carries its fine print — versioned schemas, per-partition ordering, dead-letter runbooks — acknowledged up front rather than discovered in an incident.",
      },
    ],
    keyTakeaways: [
      "A style is a vocabulary + constraints + a predictable quality profile: it imports decades of wisdom and its specific failure modes together.",
      "Layers buy separation and substitutability at the cost of pass-through overhead and silent layer leakage; enforce layering with tooling, not hope.",
      "Pipes-and-filters owns streaming throughput, composability and replay (especially over a durable log); it is wrong for interactivity and pays format coupling in the pipes.",
      "Event-driven buys decoupling and extensibility at the price of observability, delivery semantics, idempotent consumers and eventual consistency.",
      "Microservices primarily buy organizational scaling; a distributed monolith — synchronous chains, shared data, coordinated releases — pays the tax without the dividend.",
      "Select styles by scoring candidates against the 2–3 dominant quality drivers, then verify the imported failure modes are acceptable; real systems are deliberate hybrids.",
    ],
    quiz: [
      {
        q: "A team must process nightly clickstream dumps: read compressed logs, parse, clean, join with a product catalogue, aggregate, and emit reports. The stages change monthly as analysts experiment. Which style fits best, and why?",
        options: [
          "Layered — the cleaning, joining and aggregating map naturally to presentation, logic and persistence layers",
          "Pipes-and-filters — independent stream transformations, composable and individually replaceable as analytics evolve, running concurrently for throughput",
          "Event-driven pub-sub — publishers of click events decouple from subscriber analytics",
          "Microservices — each transformation becomes an independently deployable service with its own database",
        ],
        answer: 1,
        explanation: "This is the pipes-and-filters sweet spot verbatim: a data-flow computation through replaceable transformations — the compiler/ETL shape. Layers (a) model request/response separation of concerns, not stream composition; pub-sub (c) is about runtime decoupling of unknown consumers, while here the chain is a known, ordered pipeline; (d) pays distributed-system tax (network serialization of entire streams, cross-service joins) for a deployment independence the monthly-change requirement never asked for.",
      },
      {
        q: "A retailer's system: the web checkout synchronously calls the inventory service, which synchronously calls the pricing service, which synchronously calls the promotion service — all in the request path; all four must be deployed in a coordinated weekly release; the promotion database is read directly by the inventory service 'temporarily'. What is the diagnosis?",
        options: [
          "A well-formed microservices architecture — synchronous calls between services are standard practice",
          "A distributed monolith: physical distribution without logical independence — cascading latency and failure, coordinated releases, and boundary-violating shared data",
          "An event-driven architecture missing a message broker",
          "A layered architecture with too many layers",
        ],
        answer: 1,
        explanation: "Every symptom is the distributed-monolith signature: a synchronous chain couples availability and latency of four services; the coordinated weekly release proves there is no independent deployability; direct database access around the service boundary destroys data ownership. The system pays full distributed-systems tax for none of the benefit. (a) mistakes the symptom for the design; (c) and (d) name different styles entirely.",
      },
      {
        q: "Why is debugging characteristically harder in an event-driven architecture than in a layered monolith?",
        options: [
          "Because events are always slower than function calls",
          "Because no call stack spans the broker: control flow is scattered across asynchronous consumers, delivery may be delayed or reduplicated, and reconstructing what happened requires correlation ids and event logs rather than a debugger",
          "Because event-driven systems cannot have automated tests",
          "Because brokers do not support encryption of message payloads",
        ],
        answer: 1,
        explanation: "The monolith's stack trace is a complete causal narrative; the broker severs it — publishers cannot know consumers, delivery is asynchronous and possibly at-least-once, so causality must be reconstructed from instrumentation: correlation ids propagated in every event, consumed-offset tracking, dead-letter inspection. The difficulty is an architectural property, not a tooling gap (a) or a testing impossibility (c).",
      },
      {
        q: "A five-person startup is building its first product — a booking platform expected to reach a few thousand users in year one. The tech lead proposes twelve microservices 'to be ready to scale'. What is the soundest architectural counsel?",
        options: [
          "Agree — rewriting a monolith into microservices later is prohibitively expensive",
          "Propose a well-modularized monolith with clean internal boundaries: at this scale the dominant risks are product-market discovery and speed of iteration, and microservices' distributed-system and operational tax buys nothing the team can use — while disciplined module boundaries preserve the later extraction option",
          "Compromise on six microservices, splitting the difference",
          "Adopt microservices but outsource operations to a cloud provider, eliminating the tax",
        ],
        answer: 1,
        explanation: "Microservices buy independent deployment and team scaling — dividends that require multiple teams to pay off, which five people cannot be. At this stage the monolith's in-process simplicity maximizes iteration speed, and the real hedge for the future is internal modularity: clean seams are what make later extraction mechanical. (a) overstates rewrite cost relative to daily tax paid; (c) splits a bad decision, not the difference; (d) outsources infrastructure, not the failure-mode, consistency and design burden.",
      },
      {
        q: "In a layered system, the UI layer directly queries the persistence layer 'just for this one report', skipping the application and domain layers. Over two years this happens eleven more times. What has been lost, and what is the practical defense?",
        options: [
          "Nothing important — relaxed layering is a documented variant with no costs",
          "Substitutability and separation of concerns erode: the UI now knows the database schema, so schema changes and logic changes ripple into screens; the defense is automated enforcement — architecture tests and lint rules that fail the build on layer violations",
          "Only performance has suffered; adding caching will restore the architecture",
          "The system has become a pipes-and-filters architecture, which must be documented as such",
        ],
        answer: 1,
        explanation: "Each shortcut is locally rational and globally corrosive: layer leakage couples the top of the stack to the bottom, destroying the ability to change either independently — the exact benefit layers exist to provide. Because leakage is silent and incremental, the only effective defense is automated boundary enforcement in CI: a rule that turns 'just this once' into a build failure. Reviewer vigilance alone reliably loses this war of attrition.",
      },
      {
        q: "A team choosing an architectural style scores four candidates against their drivers: throughput (weight: high), modifiability of processing stages (weight: high), interactive responsiveness (weight: medium). Pipes-and-filters wins on the first two but scores badly on interactivity. What is the correct interpretation and action?",
        options: [
          "Reject pipes-and-filters — a style must win on every quality attribute",
          "Accept pipes-and-filters — winning the two dominant drivers is what matters, and a good score on a medium-weight attribute is optional",
          "Accept pipes-and-filters for the data path, and satisfy interactive responsiveness with a separate layered service — a deliberate hybrid that scores well on all three, acknowledging the style's known weakness rather than ignoring it",
          "Average the three scores and pick the style with the highest mean",
        ],
        answer: 2,
        explanation: "The scenario is a hybrid signature: the dominant drivers belong to the streaming data path, the medium driver belongs to a different subsystem with different needs. Splitting the architecture lets each part use the style whose profile fits it — the standard real-world outcome. (a) demands a style that does not exist; (b) ignores a real requirement; (d) lets a medium-weight driver dilute the dominant ones arithmetically — drivers are not fungible.",
      },
    ],
  },

  // ==================================================== architecture 1.3
  {
    sectionId: "se-architecture-s3",
    readingTime: 11,
    prerequisites: ["Interfaces and polymorphism", "Coupling and cohesion basics"],
    intro: "Design patterns are named, packaged micro-architectures: each one is a context-problem-solution triple with documented consequences. Their real power is as much vocabulary as mechanism — 'wrap it in an adapter' compresses a design conversation into three words. This section covers the essential catalog entries, their consequences you will actually feel, and — just as important — the discipline of not using them.",
    objectives: [
      "Define a design pattern as a named context-problem-solution triple with consequences, and explain why the vocabulary matters",
      "Apply Strategy, Observer, Factory Method and Adapter to the problems they are shaped for, and state each one's costs",
      "Diagnose the Singleton's failure modes: hidden global state, testability, and concurrent initialization",
      "Distinguish Adapter from Facade by intent (converting an interface vs. simplifying one)",
      "Recognize pattern over-application and apply the restraint tests before paying a pattern's complexity cost",
    ],
    concepts: [
      {
        term: "Design pattern",
        kind: "definition",
        statement: "A **design pattern** is a named, reusable solution template for a recurring design problem, specified as: **context** (the situation), **problem** (the forces in tension), **solution** (the structure of classes/objects and their collaboration), and — decisively — **consequences** (what the pattern costs and what it trades away). The classic Gang-of-Four catalog organizes them as **creational** (object creation: Factory Method, Abstract Factory, Builder, Singleton, Prototype), **structural** (composition: Adapter, Decorator, Facade, Composite, Proxy), and **behavioral** (interaction: Strategy, Observer, Command, Template Method, State, Iterator).",
        detail: "The name is half the value: a shared vocabulary turns a paragraph of explanation into a phrase ('make ShippingCost a Strategy'), makes reviews faster, and encodes the solution's consequences as tribal knowledge attached to the name. A team without the vocabulary rediscovers the patterns anonymously — and inherits their costs without their names.",
      },
      {
        term: "Strategy",
        kind: "definition",
        statement: "**Context:** a class needs one of several interchangeable algorithms or policies, selected at runtime. **Problem:** hard-coding the variants as conditionals (`if region == 'EU' ... else if region == 'US' ...`) scatters the algorithm families across every caller and makes adding a variant a shotgun-edit. **Solution:** define a `Strategy` interface with one method; implement one class per variant; the client holds a Strategy reference and delegates. **Consequences:** adding a variant becomes one new class, zero caller edits (+); callers must know which strategies exist to choose one (−); more classes to navigate (−); overkill when the policy is genuinely stable and singular (−).",
        detail: "The tell-tale smell is a `switch` on a type code that appears in multiple methods of the same class — the same discriminator branching again and again. Each branch cluster is a Strategy (or a State, if the branches represent object lifecycle rather than a selectable policy) waiting to be extracted.",
      },
      {
        term: "Observer",
        kind: "definition",
        statement: "**Context:** one object's state change must notify an open-ended set of dependent objects. **Problem:** the subject should not know every dependent's concrete class — that couples publisher to all subscribers and hard-codes the extension set. **Solution:** the subject holds a list of `Observer` interfaces and calls `notify()` on each; observers register and deregister themselves. **Consequences:** adding a subscriber touches no publisher code (+); publishers and subscribers stay loosely coupled (+); notification ordering is typically unspecified — order-dependent observers harbor latent bugs (−); un-registered observers leak (the **lapsed listener** problem) (−); cascading updates can ripple through observer graphs unpredictably (−).",
        detail: "Observer is the pattern behind every event system, pub-sub API and reactive framework — but in its raw form it is also a memory-leak and race-condition generator. Modern practice delegates its mechanics to framework event buses or reactive streams that handle registration lifecycle and threading, keeping the decoupling and outsourcing the sharp edges.",
      },
      {
        term: "Factory Method",
        kind: "definition",
        statement: "**Context:** a framework or client code must create objects, but the concrete type should be decided by a subclass or configuration. **Problem:** instantiating `new ConcreteProduct()` binds the client to a concrete class, defeating abstraction. **Solution:** define a creator with a factory method returning the `Product` interface; subclasses override the method to return their concrete product; client code stays written against the abstraction. **Consequences:** clients are insulated from concrete types and construction complexity (+); families of related products plug in cleanly (+); you grow parallel class hierarchies — each product extension needs a matching creator (−); for one or two stable types it is ceremony (−).",
        detail: "The modern classics shorthand: a constructor returning an interface, a registry keyed by type, or a dependency-injection container all deliver the same essential service — 'decide the concrete type somewhere other than the use site'. When a language has first-class functions, a factory is often just a function that returns the right implementation.",
      },
      {
        term: "Adapter",
        kind: "definition",
        statement: "**Context:** you must use an existing component, but its interface is not the one your code expects — a third-party library, a legacy module, an external service. **Problem:** rewriting either side couples you to code you do not own or cannot safely change. **Solution:** an **Adapter** class implements the interface the client expects and internally translates each call to the legacy interface (and each result back). **Consequences:** systems with incompatible interfaces interoperate without source changes (+); the mapping is localized and testable (+); every new operation needs adapter plumbing (−); a leaky adaptation exposes the adaptee's model anyway (−).",
        detail: "Distinguish from **Facade** by intent: an Adapter *converts* one interface into another, preserving operation-for-operation semantics; a Facade *simplifies* a complex subsystem behind a new, smaller interface. Adapter is a translator between equals; Facade is a front door over a maze. Same structural shape — object wrapping another — entirely different reasons.",
      },
      {
        term: "Singleton and its pitfalls",
        kind: "insight",
        statement: "**Context:** exactly one instance of a class must exist, globally accessible (a config store, a connection pool). **Solution:** a private constructor, a static instance, and a global access point. **Consequences, honestly:** the instance is **global mutable state** — hidden dependencies that bypass constructor signatures; **unit tests cannot isolate themselves** — one test's mutations bleed into the next, and there is no clean way to inject a fake; **initialization order and thread safety** become load-bearing concerns (lazy vs. eager init, double-checked locking subtleties); and it ** Singleton-ifies scalability away** — the single instance becomes an assumption woven through every caller.",
        detail: "The standard modern replacements: dependency injection with a single configured instance (same effect, explicit dependency), or a module-level immutable value in languages with real modules. Then 'singleton' becomes a lifecycle decision made at the composition root, testable by swapping what is composed — rather than a hard-coded property of the class reachable from anywhere.",
      },
      {
        term: "When NOT to use patterns",
        kind: "method",
        statement: "A pattern is complexity purchased for flexibility — so run the restraint tests before buying: (1) **The variability test**: is there a *second* concrete variant, or a scheduled one? Patterns solve variation; one implementation with an interface is speculative generality. (2) **The change-frequency test**: will the varying dimension actually change, or is it stable in this domain? (3) **The cost-of-change test**: if a future change would be a mechanical 20-minute edit without the pattern, the pattern's premium is not justified. Rule of thumb: **write the simple thing; extract the pattern when the second variant actually arrives** — refactoring tools make that extraction cheap precisely so you can defer it.",
        detail: "Pattern over-application ('patternitis') is the failure mode of teams who learned patterns as a syllabus rather than as responses to forces: everything becomes an Abstract Factory; simple data flow vanes behind five layers of Strategy. The mature question is never 'which pattern fits here?' but '**does this problem have the forces this pattern answers?**' — and usually the honest answer is no.",
      },
    ],
    examples: [
      {
        title: "Killing a switch statement with Strategy, and integrating a legacy tax engine with an Adapter",
        problem: "An e-commerce checkout contains: (a) a `calculateShipping(order)` method with a growing `switch` over regions — EU, US, APAC — each branch with its own formula, duplicated in `estimateDeliveryDate` with the same switch; (b) a mandatory legacy tax engine with a hostile interface (`computeTax(amountCents, regionCode, dateInt)`) the team must keep calling. Region count is about to grow from 3 to 7. Apply patterns where they pay.",
        steps: [
          { label: "Step 1: Verify the forces warrant Strategy", text: "Variability test: 7 concrete variants, real and scheduled — passes. Change-frequency test: regions change every quarter — passes. The same region discriminator branching in multiple methods is the classic smell: each branch is a policy that wants to be an object." },
          { label: "Step 2: Extract the Strategy", text: "Define `interface ShippingStrategy { calculateShipping(o: Order): Money; estimateDeliveryDate(o: Order): DateRange; }` — note both methods move behind the interface, because they vary along the same axis. Implement `EuShipping`, `UsShipping`, `ApacShipping`. The checkout class holds a `ShippingStrategy` resolved from region by a factory/registry lookup. The two switch statements collapse to one strategy resolution point." },
          { label: "Step 3: Reap and pay the consequences", text: "Reap: adding region 4 through 7 is now four new classes with zero edits to checkout code; each region's rules are unit-tested in isolation; the two-method duplication is structurally impossible. Pay: five files where there was one; a reader must now know the Strategy vocabulary; strategy selection is a new place to be wrong (a mis-registered strategy silently no-ops)." },
          { label: "Step 4: Wrap the tax engine in an Adapter", text: "The domain wants `TaxResult calculate(TaxOrder): TaxOrder` in domain terms; the legacy wants `computeTax(amountCents, regionCode, dateInt)` in its terms. `LegacyTaxEngineAdapter implements TaxCalculator`: it translates domain objects to the legacy's integers and codes, calls the engine, and converts the raw return into a `TaxResult`. All units, codes and date-format conversions live in exactly one tested place." },
          { label: "Step 5: Test at the seam", text: "The adapter is the seam: unit tests verify the translation (e.g. 19.99 → 1999 cents, round-trip, timezone of dateInt); the domain tests use a fake `TaxCalculator` and never touch the legacy engine. When the engine is eventually replaced, the adapter is deleted and its successor written against the same `TaxCalculator` interface — checkout code does not notice." },
        ],
        result: "Strategy paid for itself because the variability was real (7 variants, quarterly change) — the two switch statements collapsed into pluggable policies. The Adapter quarantined the hostile legacy interface behind a domain-shaped one, making the eventual replacement a one-file change. Both decisions passed the restraint tests before the complexity was purchased — which is the entire discipline.",
      },
    ],
    keyTakeaways: [
      "A pattern is a named context-problem-solution triple with consequences; the shared vocabulary is as valuable as the structure, and the consequences are the fine print.",
      "Strategy replaces repeated switching over a discriminator with interchangeable policy objects — worth it only when the variants are real and changing.",
      "Observer decouples publishers from an open subscriber set, at the price of ordering ambiguity, lapsed-listener leaks and cascading updates; modern event frameworks are Observer with the sharp edges managed.",
      "Factory Method (and its functional/DI descendants) moves the choice of concrete type away from the use site; Adapter converts interfaces you do not own — Facade simplifies ones you do.",
      "Singletons trade testability and explicit dependencies for convenience; dependency injection of a single configured instance achieves the goal without the global state.",
      "Before applying any pattern, run the restraint tests — variability, change frequency, cost of deferred extraction — and prefer extracting the pattern when the second variant actually arrives.",
    ],
    quiz: [
      {
        q: "A pricing module selects discount rules at runtime among five interchangeable algorithms chosen by customer tier, and marketing adds a new tier roughly monthly. Which pattern fits, and what is its most relevant consequence here?",
        options: [
          "Singleton — guarantees one pricing engine exists",
          "Strategy — interchangeable algorithms behind one interface, so the monthly tier is one new class with no edits to the pricing module; consequence: client code must still resolve which strategy applies per tier",
          "Observer — the pricing engine should publish discount events to subscribers",
          "Adapter — the discount algorithms have incompatible interfaces needing translation",
        ],
        answer: 1,
        explanation: "Interchangeable runtime-selected algorithms is Strategy verbatim, and the monthly addition lands in the pattern's sweet spot: new class, zero caller edits. The consequence named in the option is real and relevant — selection logic still lives somewhere. Observer (c) addresses notification, not selection; Adapter (d) addresses incompatible existing interfaces, not pluggable variants; Singleton (a) is unrelated to the problem.",
      },
      {
        q: "A GUI framework keeps a global `ApplicationConfig` Singleton. Tests that change config values in one test bleed into later tests, and a parallel-test runner produces order-dependent failures. What is the root cause and the sound fix?",
        options: [
          "The tests are badly written; each test should save and restore the Singleton's fields manually",
          "Root cause: Singleton is global mutable state — hidden dependencies and shared lifetime that defeat test isolation; fix: inject configuration through constructors/context, with a single configured instance created at the composition root so tests construct their own",
          "Make the Singleton thread-safe with double-checked locking",
          "Run tests strictly sequentially and alphabetically, removing the order dependence",
        ],
        answer: 1,
        explanation: "The test bleed is the Singleton's documented consequence surfacing: state with global lifetime cannot be isolated per test, because nothing owns its creation. Dependency injection restores ownership — each test builds (or fakes) its own config, and the single instance becomes a runtime decision at the composition root. (a) treats symptoms in every test forever; (c) addresses races, not isolation; (d) institutionalizes the fragility.",
      },
      {
        q: "Your payment subsystem expects a `PaymentGateway` interface, but must now use a third-party SDK whose interface is entirely different (different method names, amounts in pence rather than decimal currency, asynchronous callbacks rather than returns). Which pattern, and what exactly does it NOT do for you?",
        options: [
          "Facade — it will simplify the SDK behind a friendlier interface",
          "Adapter — a class implementing `PaymentGateway` that translates calls, units and callback style; it does NOT redesign the SDK or absorb semantic mismatches (declined vs. errored, idempotency rules) — those differences must be mapped explicitly and tested",
          "Observer — subscribe to the SDK's callbacks and republish them",
          "Strategy — select between gateways at runtime",
        ],
        answer: 1,
        explanation: "Interface conversion between a required port and a foreign API is Adapter's exact purpose — signature, units, and synchronous-to-callback bridging all live in one tested class. But adapters translate interfaces, not semantics: whether the SDK's 'declined' maps to your 'rejected' or 'error', and how idempotency keys behave, are business mappings the pattern cannot infer. Facade (a) is the wrong intent — simplification, not conversion; (c) and (d) address different problems.",
      },
      {
        q: "In an event-driven UI, a `ChartPanel` subscribes to a `StockTicker` but is never unsubscribed when the panel closes; heap profiling shows thousands of retained dead panels. What is this failure and the standard cure?",
        options: [
          "Cascading updates — throttle the notifications",
          "The lapsed-listener problem — a consequence of Observer: the subject retains references to observers that forgot to deregister; cure: unsubscribe on disposal (dispose/unmount hooks), or use weak references / a framework event bus that manages registration lifecycle",
          "Observer ordering — assign priorities to observers",
          "A Strategy leak — the wrong charting strategy was selected",
        ],
        answer: 1,
        explanation: "The subject's subscriber list is a strong reference: an observer that never deregisters is kept alive — and keeps receiving events — indefinitely. This is the Observer pattern's classic memory leak, and the cures are structural: deterministic unsubscribe in disposal paths, or delegating registration lifecycle to infrastructure that does it for you. Throttling (a) changes frequency, not retention; ordering (c) is a different Observer consequence.",
      },
      {
        q: "A developer proposes: 'Let us wrap our single, stable CSV exporter in a Strategy interface with an Abstract Factory for creating exporters, so we can add PDF and XLSX later.' What is the disciplined response?",
        options: [
          "Approve — anticipating future formats is exactly what patterns are for",
          "Challenge with the restraint tests: there is currently one variant and no scheduled second; the cost of *deferring* is one mechanical extraction when PDF actually arrives (cheap with refactoring tools) — so write the simple exporter, and extract the pattern when the second variant is real",
          "Approve, but only the Strategy interface — drop the Abstract Factory",
          "Reject permanently — CSV export will never need variants",
        ],
        answer: 1,
        explanation: "This is speculative generality: paying a pattern's complexity premium for flexibility with no confirmed demand. The restraint tests expose it — variability test fails (one variant), cost-of-change test fails (extraction later is mechanical and cheap). Note the response is defer, not never (d): when the second exporter arrives, the extraction is precisely the moment the pattern's cost starts buying something. And (c) keeps half the speculative machinery for the same failed justification.",
      },
      {
        q: "Which distinguishing question best separates Adapter from Facade when you are wrapping an existing subsystem?",
        options: [
          "Is the wrapper a class or a set of functions?",
          "Is the wrapper stateless or stateful?",
          "What is the intent: converting an existing interface to one the client already expects (Adapter), versus designing a new, simpler front-door interface over a complex subsystem (Facade)?",
          "Does the wrapped subsystem use third-party code or our own code?",
        ],
        answer: 2,
        explanation: "Structurally the two patterns are near-identical — an object delegating to wrapped collaborators — so intent is the only reliable discriminator, and GoF organize them by intent for exactly this reason. Adapter: the client's expected interface already exists and the wrapper conforms to it, operation-for-operation. Facade: the client-facing interface is newly designed to be smaller and simpler than the subsystem's real surface. Ownership (d) and shape questions (a, b) do not separate them.",
      },
    ],
  },

  // ==================================================== architecture 1.4
  {
    sectionId: "se-architecture-s4",
    readingTime: 10,
    prerequisites: ["Interfaces and polymorphism", "Basic idea of runtime components vs. build-time modules"],
    intro: "Ask an architect 'is this design good?' and the honest answer is always a question: 'good at what?' The most useful at-what is the cost of change — and coupling and cohesion are the two dials that determine it. This section makes those dials precise, then adds the principle that operationalizes them: depend on abstractions you own, and let details plug into them.",
    objectives: [
      "Distinguish component-and-connector thinking (runtime) from module thinking (build time), and identify connectors in a design",
      "Define coupling precisely, rank its forms by damage, and recognize each in code scenarios",
      "Define cohesion, rank its forms, and diagnose low-cohesion modules",
      "State and apply the dependency inversion principle, including who should own the abstraction's interface",
      "Reason about change impact — ripple size — as the practical measure of a design's quality",
    ],
    concepts: [
      {
        term: "Components and connectors",
        kind: "definition",
        statement: "In component-and-connector (runtime) thinking, a **component** is a principal unit of runtime computation or state (a service, a process, a database, an in-process object with responsibilities), and a **connector** is the interaction mechanism between components: a synchronous call, an HTTP request, a message on a queue, a database connection, a shared file. Connectors are architecture — choosing 'call' versus 'queue' changes latency, failure and concurrency semantics more than most code changes.",
        detail: "The module view (build time: which source units exist and may depend on which) and the C&C view (runtime: what talks to what, how) are different graphs that must stay consistent — every runtime interaction implies a build-time dependency somewhere, but the maps are not the same, and designs fail when one is changed without the other.",
      },
      {
        term: "Coupling",
        kind: "definition",
        statement: "**Coupling** is the degree of interdependence between two modules: how much must be known, and must change, on one side when the other changes. Ranked from most to least damaging: **content coupling** (one module reaches into another's internals — modifying another's data or jumping into its middle); **common coupling** (modules share global data — any reader breaks when the shared meaning shifts); **control coupling** (one module passes a flag that decides the other's control flow — the caller must understand the callee's decision tree); **stamp coupling** (passing a whole data structure when only part is used — reader and writer now share the structure's evolution); **data coupling** (passing exactly the data needed — the healthy baseline).",
        detail: "The ranking is a triage guide: content and common coupling are architecture-threatening; control and stamp coupling are friction worth removing opportunistically; data coupling is the target state, not a pathology. Zero coupling is neither possible nor the goal — the goal is that dependencies are narrow, explicit and point at stable things.",
      },
      {
        term: "Cohesion",
        kind: "definition",
        statement: "**Cohesion** is how strongly the elements of one module belong together — the degree to which its responsibilities form a single, nameable purpose. Ranked from weakest to strongest: **coincidental** (a 'utils' bag — parts related by nothing but the file they landed in), **logical** (one interface, unrelated implementations chosen by flag), **temporal** (grouped only by when they run — init/shutdown), **procedural** (a sequence of steps, in one module only because they follow each other), **communicational** (operations over the same data — find-by-id and update-by-id), **sequential** (each part's output feeds the next's input), **functional** (all elements contribute to one single, statable function — the target).",
        detail: "The practical cohesion test: can you complete the sentence 'the responsibility of this module is to ___' with one verb phrase that names no 'and'? A module whose purpose statement needs 'and' (and also '...') is a module with more than one reason to change — and more than one reason to be touched by more than one team.",
      },
      {
        term: "Interface and contract",
        kind: "definition",
        statement: "An **interface** is the surface a component exposes; a **contract** is the full obligation set behind it: **syntactic** (signatures and types), **semantic** (preconditions, postconditions, invariants — what the operation *means*), **quality-of-service** (latency bounds, availability, freshness guarantees) and **error behavior** (which failures are signaled how, and what state the component is left in). Two components whose connectors agree syntactically but disagree semantically compile happily and fail at 3 a.m.",
        detail: "Contract maturity is a design deliverable: undocumented contracts get re-invented by every consumer, slightly differently. Writing down even informally — 'returns within 50 ms p99; blocks never; on timeout, exactly-once side effects are NOT guaranteed' — is the difference between an interface and an accident report form.",
      },
      {
        term: "Dependency inversion principle",
        kind: "theorem",
        statement: "High-level policy modules should not depend on low-level detail modules; **both should depend on abstractions** — and the abstraction should be shaped by the high-level module's needs, i.e. **the interface belongs to the consumer's domain, not the provider's**. 'Inversion' names the reversal of the source-code arrow: instead of Policy → details, you have Policy → interface ← details (the details depend on the interface, implementing it).",
        detail: "The ownership clause is what makes the principle bite. A `PaymentService` should define the narrow `PaymentGateway` interface *it* needs (`charge(order, amount)`), and the Stripe adapter, the PayPal adapter and the test fake implement *that* — not the reverse, where the service imports the gateway vendor's sprawling SDK interface and inherits its churn. When the abstraction serves the policy, swapping or faking the detail is mechanical; when it serves the vendor, the vendor's next release is your refactor.",
      },
      {
        term: "Change impact as the master metric",
        kind: "insight",
        statement: "Coupling and cohesion are not virtues in themselves — they are the levers behind the measurable question that matters: **when a likely change arrives, how many modules must be touched, and how far does the ripple travel?** A design is good to the extent that expected changes stay local: one high-cohesion module edited, its stable interface intact, its dependents untouched. Track 'files touched per feature' and 'blast radius of the last ten changes' and you have an empirical architecture health metric, not an aesthetic.",
        detail: "This reframes the two dials: low coupling keeps strangers out of your change; high cohesion keeps the change inside one neighborhood. When a one-requirement change routinely edits seven modules (the 'shotgun surgery' smell), that is the system reporting, through its diff statistics, exactly where the architecture has failed.",
      },
    ],
    examples: [
      {
        title: "Inverting a payment dependency — and measuring the win in blast radius",
        problem: "An order service directly constructs and calls a concrete `StripeGateway` class from the vendor SDK: it imports the SDK's types, converts Money to the vendor's unit (integer pence) inline, and parses vendor error codes in six places. Tests run against Stripe's sandbox (slow, flaky, occasionally billed). A second gateway must be added next quarter. Diagnose and repair.",
        steps: [
          { label: "Step 1: Diagnose the coupling", text: "The order service is **content-coupled to vendor semantics**: it knows pence, vendor error enums, and the SDK's type vocabulary. The dependency arrow is Policy → VendorDetail, exactly what dependency inversion exists to reverse. Cohesion is also leaking — currency conversion and error translation are payment-domain concerns living inside order-placement code." },
          { label: "Step 2: Design the abstraction in the consumer's language", text: "The order service defines what it needs — `interface PaymentGateway { charge(payment: PaymentRequest): PaymentResult; refund(paymentId: PaymentId): RefundResult; }` — with `PaymentRequest` in domain types (Money, not pence; domain reason codes, not vendor enums). Note the ownership: this interface lives in the order domain's module, and says nothing about Stripe." },
          { label: "Step 3: Push details behind an adapter", text: "`StripeGatewayAdapter implements PaymentGateway`: pence conversion, SDK invocation, error-code mapping — all of it in one file, unit-tested exhaustively (19.99 → 1999; vendor 'card_declined' → domain `PaymentRejected`). A `PayPalGatewayAdapter` next quarter is a parallel file. The order service never imports either vendor again." },
          { label: "Step 4: Reap the testability dividend", text: "A `FakeGateway` implements the interface in twenty lines: programmable results, recorded calls, no network. Order-service tests become fast and deterministic — 'when payment is rejected, the order transitions to OnHold and the customer sees the saved cart' is now a millisecond unit test, not a sandbox integration roulette." },
          { label: "Step 5: Measure the blast radius, before and after", text: "Before: swap-vendor change = edits throughout the order service (six error-parsing sites, conversions, imports). After: swap-vendor = compose a different adapter at the composition root; order service diff: zero files. Adding the fake for tests: zero production files. The likely changes — new gateway, new test scenario — now land in one module each. That diff statistic *is* the proof the design works." },
        ],
        result: "The inversion moved vendor knowledge from six scattered sites into one adapter behind a consumer-owned interface. Coupling dropped from content-level to data-level (a narrow, domain-typed call), the order service regained cohesion (it now contains only order logic), and both expected future changes — new gateway, new tests — became single-file edits. Blast radius is the scoreboard.",
      },
    ],
    keyTakeaways: [
      "Runtime architecture is components (computation and state) joined by connectors (call, request, message, shared store) — connector choice is a design decision of the first rank.",
      "Coupling forms, most-to-least damaging: content, common, control, stamp, data — triage the first two architecturally, polish the rest opportunistically.",
      "Cohesion is whether a module has one nameable purpose; a purpose statement requiring 'and' predicts multiple reasons to change.",
      "Contracts go beyond syntax: semantics, quality-of-service and error behavior are what connectors actually agree on.",
      "Dependency inversion: both policy and detail depend on an abstraction shaped by — and owned by — the policy side; adapters then make details swappable and fakeable.",
      "The master metric is change impact: good designs keep expected changes local, measurable as files-touched and ripple-extent per real change.",
    ],
    quiz: [
      {
        q: "Module A passes its entire 40-field `CustomerRecord` to Module B, which uses only 3 fields (email, tier, region). Later, a new field `consentFlags` is added to the record, and Module B must be recompiled and re-reviewed even though it never reads the new field. What coupling form is this, and what is the minimal fix?",
        options: [
          "Content coupling — Module B should reach into the record through accessors",
          "Stamp coupling — pass only the 3 needed values (or a small parameter object), so B depends on exactly what it uses and nothing else",
          "Data coupling — this is already the healthy baseline; no action needed",
          "Common coupling — move the record to a global store",
        ],
        answer: 1,
        explanation: "Passing a whole structure while using a fragment is stamp coupling: B's world grows whenever the record grows, coupling it to the evolution of 37 fields it does not care about. The fix is narrowing the interface to the needed data — which reduces it to data coupling. (a) misdiagnoses (no internals are being violated), (c) mislabels the problem as health, and (d) would make things dramatically worse.",
      },
      {
        q: "A module named `Utils` contains: date formatting, a CSV parser, retry-with-backoff logic, and a helper that resizes images. Which cohesion level is this, and what is the practical consequence?",
        options: [
          "Functional cohesion — everything is a utility function",
          "Sequential cohesion — output of the parser feeds the formatter",
          "Coincidental cohesion — the parts are related by nothing but the file they share; consequence: every team with any need touches this one module, it accretes dependencies on everything, and any change risks breaking unrelated callers",
          "Communicational cohesion — all functions communicate through parameters",
        ],
        answer: 2,
        explanation: "A grab-bag module has no organizing principle: its elements are together coincidentally. The consequence is structural: Utils depends on (and is depended on by) nearly everyone, becomes a merge-conflict magnet, and its blast radius makes refactoring terrifying — which is why utils modules only ever grow. The cure is distributing each part to a module defined by its real purpose (parsing, retry policy, formatting).",
      },
      {
        q: "Applying the dependency inversion principle to a report generator that currently imports a specific PDF vendor SDK: which arrangement is the correct inversion, and why does interface ownership matter?",
        options: [
          "Keep importing the SDK but wrap every call in a try-catch — errors no longer propagate, so the dependency is managed",
          "Create a `PdfExporter` interface in the vendor's package and have the report generator depend on it, since the vendor knows PDF best",
          "Define the exporter interface in the report generator's own module — shaped around what reporting needs (render(document) → bytes) — and implement it with a vendor adapter that plugs in; the interface serves the policy, so the vendor's SDK churn stops touching report code",
          "Invert the call direction: have the vendor SDK call the report generator",
        ],
        answer: 2,
        explanation: "DIP is the arrow reversal Policy→Detail becoming Policy→Abstraction←Detail, and the ownership clause is decisive: an abstraction owned by the consumer contains only what the consumer needs and is stable when the vendor churns. Option (b) fails exactly there — a vendor-owned interface drags vendor vocabulary into policy code regardless of wrapping. (a) confuses error handling with decoupling; (d) misreads inversion as call-direction.",
      },
      {
        q: "In a runtime component-and-connector description of a web system, which of these is a *connector* rather than a component?",
        options: [
          "The authentication service",
          "The PostgreSQL database holding user profiles",
          "The message queue carrying order events from the storefront to the fulfillment service",
          "The recommendation engine",
        ],
        answer: 2,
        explanation: "Connectors are the interaction mechanisms — the queue, the HTTP call, the JDBC session — while components are the principals doing computation and holding state: services, databases, engines. Classifying the queue as a connector is what makes its architectural weight visible: swapping it, or its delivery semantics, changes interaction properties across the system rather than any one component's internals.",
      },
      {
        q: "Over ten features, a team's diffs show that adding any new product feature edits seven modules: catalog, pricing, cart, checkout, notification, reporting, and an integration layer. Which smell is this, and what does it indicate about the architecture?",
        options: [
          "Shotgun surgery — low cohesion along feature lines: the modules are organized around technical layers rather than feature responsibilities, so every change ripples across all of them; high coupling measured empirically",
          "The God class anti-pattern — one module must be doing everything",
          "Healthy layering — features are supposed to touch every layer",
          "Data coupling — parameters are being passed too narrowly",
        ],
        answer: 0,
        explanation: "One conceptual change, seven scattered edits is shotgun surgery — the empirical signature that the module boundaries do not align with change axes. The diffs are the evidence that coupling is high and cohesion is misaligned, regardless of what the architecture diagram claims. (b) would show the opposite pattern: one file growing enormous. (c) confuses touching layers with touching every module in every layer.",
      },
      {
        q: "Two components agree perfectly at the type level: the caller sends `getUser(id: UserId): UserProfile`. Yet in production the caller treats an absent user as a returned null, while the callee signals absence by throwing a typed exception. Which contract layer failed, and what is the lesson?",
        options: [
          "Syntactic — the signatures should have used a different language",
          "Semantic and error-behavior — the interface matched but the meaning of 'user not found' was never agreed; type agreement is the weakest layer of a contract, and semantic mismatches compile cleanly and fail at runtime",
          "Quality-of-service — latency must have differed between the components",
          "No failure — exceptions and null checks are interchangeable",
        ],
        answer: 1,
        explanation: "The contract's semantic and error-behavior clauses — what absence *means* and how it is *signaled* — were never specified, and the type system had nothing to say about them. This is the canonical demonstration that syntax is the floor of a contract, not its substance: two components can agree on types while agreeing on nothing else that matters at 3 a.m.",
      },
    ],
  },

  // ==================================================== architecture 1.5
  {
    sectionId: "se-architecture-s5",
    readingTime: 10,
    prerequisites: ["Quality attributes and measurable non-functional requirements", "Architectural views: components and connectors"],
    intro: "You cannot weigh an architecture on a scale — but you can interrogate it with scenarios, and that interrogation has a disciplined form. Scenario-based evaluation converts abstract qualities ('scalable', 'secure') into concrete stimulus–environment–response triples, then walks the architecture through them, exposing the points where one quality is bought with another's coin. The method's real output is not a score; it is the list of risks and trade-off points you would otherwise meet for the first time in production.",
    objectives: [
      "Express quality attributes as scenarios in stimulus–environment–response form, with a measurable response measure",
      "Build a utility tree that organizes and prioritizes scenarios by (importance, difficulty)",
      "Walk through the steps of an architecture trade-off analysis method (ATAM-style evaluation)",
      "Identify sensitivity points and trade-off points in an architecture under scenario analysis",
      "Classify findings as risks or non-risks and explain why the documented rationale is the primary deliverable",
    ],
    concepts: [
      {
        term: "Quality-attribute scenario",
        kind: "notation",
        statement: "A quality attribute becomes evaluable when written as a **scenario** with six parts: **source** (who/what initiates), **stimulus** (the event arriving), **artifact** (which part of the system is stimulated), **environment** (the conditions: normal, peak, degraded), **response** (what the system does), and **response measure** (the number that makes pass/fail decidable). Example: 'During the peak season sale (environment), a surge of 50,000 concurrent checkouts (stimulus, source: customers) hits the order service (artifact); the service shall shed non-critical load and complete 99% of checkouts within 3 seconds (response, measure).'",
        detail: "The response measure is what separates an evaluation scenario from a wish. 'Handles load gracefully' cannot be walked through an architecture; '99% within 3 seconds while degrading recommendations first' can — the design either has a load-shedding policy and a degradation hierarchy, or it does not.",
      },
      {
        term: "Utility tree",
        kind: "method",
        statement: "A **utility tree** organizes and prioritizes scenarios before analysis: root = overall utility; second level = quality attributes (performance, availability, security, modifiability, usability); third level = attribute refinements (latency vs. throughput; integrity vs. confidentiality); leaves = concrete scenarios, each labeled **(importance, difficulty)** — typically H/M/L on both. Scenarios with high importance and high difficulty form the **focus set** the evaluation actually analyzes; the tree is pruned, or the evaluation drowns.",
        detail: "The tree is the political heart of the exercise: stakeholders argue about importance *before* architecture is on the table, so the prioritization reflects business value rather than the presenter's agenda. It also bounds scope honestly — the final report must state which scenarios were analyzed and which were deferred, making the evaluation's coverage explicit rather than implied.",
      },
      {
        term: "ATAM-style evaluation steps",
        kind: "method",
        statement: "The architecture trade-off analysis method, in its essential sequence: (1) **present the method** — process, roles, outputs; (2) **present business drivers** — goals, constraints, dominant qualities; (3) **present the architecture** — views, components, connectors, decisions; (4) **elaborate and prioritize scenarios** — typically by building the utility tree; (5) **analyze the architecture** against the focus scenarios — identify architectural decisions, classify each as a **sensitivity point**, **trade-off point**, **risk**, or **non-risk**; (6) **brainstorm additional scenarios** to stress the design from angles the tree missed; (7) **present the results** — risks, non-risks, sensitivity and trade-off points, and the themes that connect them.",
        detail: "Step 5 is the engine, and it is a group reasoning exercise, not a formula: for each focus scenario, walk the architecture — which component receives the stimulus, what connectors carry it, what decisions govern the response — and record every place where a decision significantly helps or hurts the measured response. The artifacts that matter are the decision list and its classification, because those are what the method's outputs (risks, trade-offs) are made of.",
      },
      {
        term: "Sensitivity point and trade-off point",
        kind: "definition",
        statement: "A **sensitivity point** is a property of the architecture to which a quality-attribute response is significantly sensitive: a decision such that changing it moves the measured response materially (database connection-pool size materially moves peak throughput; the synchronous fraud check in the checkout path materially moves p99 latency). A **trade-off point** is a sensitivity point for *multiple attributes in opposite directions*: the decision helps one quality and hurts another (caching authorization decisions helps latency, hurts security freshness; synchronous validation helps integrity, hurts availability).",
        detail: "Trade-off points are the crown jewels of an evaluation: they are the exact coordinates where the architecture spends one stakeholder's quality to buy another's, and they mark the decisions that management — not architects alone — should ratify, because they are business decisions wearing technical clothing.",
      },
      {
        term: "Risks and non-risks",
        kind: "definition",
        statement: "A **risk** is an architectural decision that threatens a quality objective under some scenario ('the single shared database is a risk to the availability scenario requiring checkout to survive analytics failures'). A **non-risk** is a decision that, after analysis, is explicitly deemed safe — recorded with its reasoning and the assumptions it rests on ('the read-only catalogue replica suffices for the browsing-load scenario, *assuming* replica lag stays under 30 seconds'). Non-risks matter because their assumptions, written down, can later be checked — and silently rotted assumptions are how yesterday's safe decisions become tomorrow's outages.",
        detail: "Both are logged as one-line numbered findings during analysis, with the scenario and decision referenced. The numbered log is the evaluation's ledger: every claim the evaluation makes traces to a decision-scenario pair, which is what distinguishes evaluation from opinion.",
      },
      {
        term: "Evaluation's product is shared understanding",
        kind: "insight",
        statement: "The ATAM's most durable output is not the risk list — it is the **conversation**: stakeholders forced to articulate what they value, architects forced to articulate why the design is what it is, both groups discovering mismatches while the design is still a set of drawings. Teams that emerge from an evaluation knowing their own trade-off points make better decisions daily thereafter; the report is the residue, the shared model is the product.",
        detail: "This explains the method's heavyweight-versus-lightweight spectrum: a full multi-day ATAM with many stakeholders suits systems whose failure is catastrophic; a half-day scenario walkthrough by four people captures much of the value for a mid-size service. The scenarios-and-walkthrough core scales down gracefully — the parts you must never drop are measurable scenarios and decision-classified findings.",
      },
    ],
    examples: [
      {
        title: "A mini-evaluation of an e-commerce checkout",
        problem: "Evaluate a checkout architecture: a web SPA → a monolithic Order service (containing cart, pricing, and payment orchestration) → a PostgreSQL database, plus a synchronous third-party fraud-scoring API called in the payment path, and an in-memory session cache for authorization data. Focus scenarios from the utility tree: P1 (H, H) 'peak sale: 20,000 concurrent checkouts, 99% complete within 3 s p99'; A1 (H, H) 'fraud API outage: checkout remains available in degraded mode'; S1 (H, M) 'permission change takes effect for a user within 60 s'; M1 (M, H) 'add a new payment provider without touching cart or pricing code'. Walk the analysis.",
        steps: [
          { label: "Step 1: Walk P1 (peak-load latency)", text: "Trace the stimulus through the architecture: SPA → Order service → synchronous fraud API → database. Findings: the **synchronous fraud call in the request path** is a sensitivity point for P1 — p99 checkout latency is capped by the fraud API's p99 (you have coupled your latency to a network you do not control). The **single PostgreSQL instance** is a sensitivity point for P1 and A1: every scenario's throughput ceiling is its connection pool and write capacity. Classify: both logged as risks — R-1 (fraud-call latency coupling) and R-2 (single-database contention under peak)." },
          { label: "Step 2: Walk A1 (fraud-API outage)", text: "Question: what happens today when the fraud API is down? Answer in the design: the call fails, the exception propagates, checkout fails. R-1 doubles: the coupling is an availability risk too — a third party's outage is our outage. The walk also surfaces the missing decision: no degraded mode exists (no policy like 'queue orders under 200 for manual review'). Logged as R-3: no load-shedding/degradation hierarchy exists for third-party failure." },
          { label: "Step 3: Walk S1 (permission freshness)", text: "Authorization data lives in an **in-memory cache**. Trace: admin changes a role → database updated → caches still stale until expiry. Finding: the **cache TTL** is a sensitivity point for S1 — freshness improves as TTL shrinks; but the same TTL is a sensitivity point for P1 in the *opposite* direction (shorter TTL → more database reads → worse peak latency). This is a textbook **trade-off point**: T-1, cache TTL trades security freshness against performance. Trade-off points are management decisions: which stakeholder wins, and by how much, gets ratified, not assumed." },
          { label: "Step 4: Walk M1 (add payment provider)", text: "The monolith contains cart, pricing, and payment orchestration in one deployable. Adding a provider is a code change inside the same unit — no independent deployment concern at this scale (non-risk), but the analysis asks: does payment code share tables with cart code? The architect confirms a clean module boundary with a `PaymentGateway` seam. Logged as **NR-1 (non-risk)** with its assumption stated: 'modifiability of payment is safe *assuming* the module boundary rule survives future hires — enforce with an architecture test.' The assumption is now checkable." },
          { label: "Step 5: Report themes", text: "Themes connect the findings: (1) *third-party coupling* — R-1, R-3: one architectural cause (synchronous unmanaged dependency), two scenarios hurt; candidate mitigations: timeout + circuit breaker + degraded-mode policy. (2) *The shared database* — R-2: candidate mitigations: read/write split, analytics offload. (3) *The TTL trade-off* — T-1: needs a product decision (proposed: 60 s TTL matches S1 exactly; measure the P1 cost in load test). The evaluation ends with a prioritized, evidence-linked agenda — and four people now share one model of why this system is shaped as it is." },
        ],
        result: "One half-day walkthrough produced three risks, one trade-off point and one assumption-bearing non-risk — each traceable to a decision-scenario pair. The trade-off point (cache TTL) was escalated to its rightful owners as a business decision; the theme analysis collapsed five findings into three architectural causes. No score was assigned, and none was needed: the agenda is the deliverable.",
      },
    ],
    keyTakeaways: [
      "Quality attributes become evaluable only as scenarios: source, stimulus, artifact, environment, response, response measure — the measure makes pass/fail decidable.",
      "The utility tree prioritizes scenarios by (importance, difficulty) before architecture enters the room; the high-high pairs form the focus set.",
      "ATAM-style analysis walks each focus scenario through the architecture, classifying every significant decision as sensitivity point, trade-off point, risk, or non-risk.",
      "Sensitivity points move one quality materially; trade-off points move two in opposite directions — those are business decisions in technical clothing, and belong to management.",
      "Record non-risks with their assumptions so they can be checked later; rotted assumptions are how safe decisions become outages.",
      "The evaluation's durable product is the shared understanding — stakeholders who know their system's trade-off points — and the method scales down gracefully to a half-day walkthrough with four people.",
    ],
    quiz: [
      {
        q: "Which of these is a properly formed quality-attribute scenario suitable for architecture evaluation?",
        options: [
          "The system should be highly scalable to support future growth",
          "Security must be a first-class concern in the design",
          "During the annual sale (environment), 30,000 concurrent users submit orders (stimulus) against the order service (artifact); it shall accept and confirm 99.5% of them within 2 seconds at p99 (response with measure), by degrading recommendation lookups first",
          "The architecture will use microservices because they scale well",
        ],
        answer: 2,
        explanation: "Only option (c) contains the six load-bearing parts, including the decisive ones: the environment (annual sale), the numeric response measure (99.5% within 2 s at p99), and a degradation policy that can be traced through the design. (a) and (b) are aspirations — nothing in the architecture can be walked against them; (d) is a solution assertion, which scenarios exist precisely to avoid.",
      },
      {
        q: "In an evaluation, the team discovers that decreasing the session-cache TTL improves security freshness but increases database load and worsens peak latency. How should this finding be classified and handled?",
        options: [
          "A risk — the cache should simply be removed",
          "A non-risk — caches always involve this tension, so nothing need be recorded",
          "A trade-off point — one architectural decision (the TTL) is a sensitivity point for two qualities in opposite directions; it should be escalated for a deliberate, documented business decision, not left as an implementation detail",
          "A sensitivity point for security only; the latency effect is a separate, unrelated finding",
        ],
        answer: 2,
        explanation: "One decision, two qualities, opposite directions: that is the definition of a trade-off point — and the reason it belongs to management rather than to whichever developer configures the cache. Escalation means the choice is made consciously with both stakeholders present and recorded with rationale. (a) prescribes a fix before the trade-off is even decided; (b) discards the finding and its checkable assumptions; (d) artificially splits one decision into two findings, hiding the trade it embodies.",
      },
      {
        q: "In an ATAM-style evaluation, immediately after the architecture is presented and the utility tree built and prioritized, what is the next step?",
        options: [
          "Assign the architecture a final quality score",
          "Analyze the architecture against the high-priority focus scenarios — walking each scenario through components and connectors, and classifying the significant decisions as sensitivity points, trade-off points, risks and non-risks",
          "Rewrite the architecture to fix the risks found so far",
          "Brainstorm an entirely new set of stakeholders to redo the prioritization",
        ],
        answer: 1,
        explanation: "The method's engine follows prioritization: scenario-by-scenario analysis that produces classified findings. (a) is the classic category error the method exists to prevent — architectures are not scored, they are interrogated; (c) confuses evaluation with redesign (mitigation happens after, informed by the findings); (d) re-litigates the input to avoid the analysis. Scenario brainstorming does appear in the method — but as a later step that *stresses* the design from angles the tree missed, not as a redo.",
      },
      {
        q: "During analysis, the team records: 'NR-4: the read-only catalogue replica is sufficient for browsing-load scenarios, assuming replica lag remains under 5 seconds.' Why record a non-risk at all, and why phrase the assumption explicitly?",
        options: [
          "Non-risks pad the report so the findings list looks balanced",
          "Because a non-risk documents that a decision was analyzed and deemed safe *under stated assumptions* — making the assumptions explicit converts them into checkable claims; when traffic grows and lag creeps to 40 seconds, the evaluation record shows exactly which assumption rotted and what to revisit",
          "Because auditors require an equal number of risks and non-risks",
          "To protect the architect from blame if the decision later fails",
        ],
        answer: 1,
        explanation: "A non-risk is a claim with a shelf life: safe *now*, under conditions *x*. Recording the conditions makes the rot detectable — monitoring can watch replica lag against the stated 5-second bound, and when the assumption fails, the response is targeted rather than forensic. Without the record, the failure arrives as a mystery; with it, as a known broken contract. The other options describe bureaucracy or blame management, which the method does not trade in.",
      },
      {
        q: "A five-person team is deciding whether to run a full multi-day ATAM with 20 stakeholders on their new internal reporting tool. What is the soundest counsel?",
        options: [
          "Yes — every architecture deserves full-method evaluation regardless of context",
          "No — evaluation should only happen after the system has run in production for six months",
          "Scale the method to the stakes: a half-day scenario walkthrough (utility tree with a handful of scenarios, walk the focus set, log risks/trade-offs/non-risks) by the team plus one outside voice captures most of the value; reserve the full multi-stakeholder ATAM for systems whose failure is costly enough to justify it",
          "Skip evaluation entirely — small teams know their architecture and informal knowledge suffices",
        ],
        answer: 2,
        explanation: "The method's core — measurable scenarios, a walked architecture, classified findings — scales down gracefully and is where nearly all the value lives; the heavyweight ceremony (many stakeholders, multiple days, dedicated facilitation) is justified by consequence-of-failure, not by principle. (a) applies a one-size process; (b) inverts the timing — the whole point is evaluating while change is cheap; (d) abandons the cheap insurance a walkthrough provides.",
      },
      {
        q: "An evaluation of an order system finds: R-1 'the synchronous inventory call in the payment path is a risk to the checkout-availability scenario'; R-2 'the same synchronous call is a risk to peak-latency'; R-5 'no circuit breaker exists on the inventory dependency'. What analytic move does the findings-to-themes step perform on these?",
        options: [
          "It averages the risk severities into a single score for the synchronous call",
          "It deletes R-5 as a duplicate of R-1",
          "It recognizes a common architectural cause — an unmanaged synchronous third-party dependency — so one mitigation (timeout + circuit breaker + degraded mode) addresses multiple findings, converting a scattered list into a prioritized agenda",
          "It reassigns each risk to the team that wrote the relevant code",
        ],
        answer: 2,
        explanation: "Theme analysis is the synthesis step: findings that share an architectural cause are grouped, revealing that several scenario failures trace to one decision — which makes mitigation leveraged rather than piecemeal. That is how a half-day evaluation produces an agenda of three causes instead of a backlog of fifteen symptoms. (a) manufactures a false precision the method rejects; (b) discards a distinct, decision-level finding; (d) converts analysis into blame routing.",
      },
    ],
  },

  // ==================================================== architecture 1.6
  {
    sectionId: "se-architecture-s6",
    readingTime: 10,
    prerequisites: ["Coupling, cohesion and change impact", "The idea of automated regression tests as a safety net"],
    intro: "Technical debt is the most useful metaphor in software engineering and the most misused: it explains why the quick-and-dirty path costs more later, but only if you remember that interest accrues only where change passes through. This section makes the metaphor precise, catalogs the refactorings that pay debt down, and works through the strangler-fig strategy — the pattern for replacing legacy systems without betting the company on a rewrite.",
    objectives: [
      "Define technical debt precisely, with principal (rework cost) and interest (recurring drag) separated",
      "Classify debt with the quadrant: deliberate vs inadvertent, prudent vs reckless — and respond differently to each class",
      "Prioritize debt paydown by interest rate (change hotspots), not by size or aesthetics",
      "Execute named refactorings from the catalog (extract method, move method, replace conditional with polymorphism) under test protection",
      "Plan a strangler-fig migration: seams, routing, incremental cutover, parallel run, retirement",
    ],
    concepts: [
      {
        term: "Technical debt",
        kind: "definition",
        statement: "**Technical debt** is the implied future cost of choosing a quicker solution now instead of a better one that would take longer. Its **principal** is the cost of the eventual rework — rewriting the hack into the clean design. Its **interest** is the recurring drag: every change that passes through the messy area costs extra time, extra bugs, extra fear. The metaphor's discipline: debt is not 'bad code' — it is *borrowed speed that accrues cost only where future change flows through the borrowed region*.",
        detail: "That last clause is the prioritization key: a hack inside a module nobody has touched in three years charges zero interest; the same hack on the checkout path that every feature crosses charges interest weekly. Debt matters where change meets it — which is why debt lists are only useful when joined to change-frequency data (hotspot analysis).",
      },
      {
        term: "The debt quadrant",
        kind: "definition",
        statement: "Classify every debt instance along two axes — was it taken **deliberately** (a known, chosen shortcut) or **inadvertently** (we did not know better)? — and is it **prudent** (justified by circumstances, with the payoff understood) or **reckless** (unjustified or unexamined)? The four cells: *deliberate-prudent* — 'ship the demo, refactor before peak season', debt with a repayment plan; *deliberate-reckless* — 'no time for design' as an unexamined default; *inadvertent-prudent* — 'we did not know about connection pooling then; now we do' — the natural debt of learning; *inadvertent-reckless* — 'what is layering?' — the debt of not knowing what the discipline even is.",
        detail: "The quadrant's value is prescribing different responses: deliberate-prudent debt needs a *schedule* (repayment planned at the borrowing); inadvertent debt needs *education and a survey* — you cannot schedule repayment of debt you have not discovered; and reckless debt of either kind needs a *conversation about defaults*, because it will recur until the incentives change.",
      },
      {
        term: "Where the metaphor breaks",
        kind: "insight",
        statement: "Unlike financial debt, technical debt's interest rate is **uncertain and time-varying** — it jumps the moment a new feature lands on top of the hack (new dependents multiply the blast radius of the eventual cleanup), and it is *not* payable on demand: repayment requires engineer-time that competes directly with feature delivery, and repayment itself carries risk if tests are weak. Debt can also be **paid forward into disaster** — teams that refactor everything and ship nothing have confused solvency with purpose.",
        detail: "Two corollaries: first, taking debt without recording it is strictly worse than financial borrowing without records — at least a bank statement reminds you; invisible debt is discovered only when a change takes four times its estimate. Second, the repayment decision is a portfolio decision: interest rate (change frequency through the region) times the cost of repayment, weighed against features — never a moral judgment about messy code.",
      },
      {
        term: "Refactoring",
        kind: "definition",
        statement: "**Refactoring** is the discipline of changing a program's internal structure without changing its external behavior, in **small, individually verifiable steps**, each leaving the program working. It is distinct from performance optimization (changes behavior — timings — deliberately, structure incidentally), from rewriting (replaces rather than transforms), and from 'cleaning up while implementing a feature' (which mixes behavior change with structure change and proves neither). The precondition is a **safety net**: automated tests that already pass and are fast enough to run between steps.",
        detail: "The small-step discipline is the essence: rename, run tests; extract method, run tests; move method, run tests. Each step is minutes and reversible; a failing test identifies the exact step that broke behavior. When tests are absent, the first refactorings are *characterization tests* — tests that pin down current behavior, whatever it is — before any structure changes at all.",
      },
      {
        term: "The refactoring catalog",
        kind: "method",
        statement: "Named, mechanical structure changes, each triggered by a **smell**: **Extract Method** (long method / comment-marked blocks → named, intention-revealing functions); **Rename Variable/Method** (names that require decoding); **Move Method** (feature envy — a method that talks more to another class than its own); **Introduce Parameter Object** (long, growing parameter lists — a data cluster begging to be a type); **Replace Conditional with Polymorphism** (type-code switches → Strategy/State); **Replace Magic Number with Named Constant**; **Decompose Conditional** (complex boolean expressions → named predicates); **Extract Class** (a class with two jobs → two classes).",
        detail: "The smells are the diagnostic layer — long method, duplicated code, feature envy, shotgun surgery, god class, primitive obsession — and the catalog entries are their standard treatments. Working in smell-diagnosis-to-treatment pairs keeps refactoring grounded in observed problems rather than aesthetics: you refactor *because* the method is 200 lines and three features edit it, not because it looks untidy.",
      },
      {
        term: "Paydown strategy: fix-on-touch and hotspots",
        kind: "method",
        statement: "Two sustainable paydown modes: **fix-on-touch** (the boy-scout rule) — any file you are already editing for a feature, you leave measurably better; it costs little because you already hold the context — and **hotspot investment** — a ranked, small allocation of capacity (e.g. 10–20%) aimed at the few regions where change-frequency × complexity is highest, because that is where interest actually accrues. Ranking is empirical: files-by-change-count from version-control history, crossed with complexity metrics or plain review knowledge.",
        detail: "What does not work: debt 'sabbaticals' after long neglect (they produce unshippable refactors and political trauma), and refactoring as an aesthetic crusade cleaned by preference rather than by traffic. The repayment portfolio should look like an interest-rate table: hottest spots get scheduled payment, cold areas get fix-on-touch, untouched areas get left alone.",
      },
      {
        term: "Strangler fig migration",
        kind: "method",
        statement: "The pattern for replacing a legacy system incrementally: (1) identify **seams** — the interception points where requests enter or data leaves the old system; (2) place a **routing layer** (façade/proxy) at those seams that initially forwards 100% to the legacy system; (3) build the new implementation alongside; (4) **divert incrementally** — one capability, one route, one customer cohort at a time — with a kill-switch back to the old path; (5) run **parallel/verification** checks during cutover (shadow traffic, dual-write with comparison); (6) **retire** legacy routes only after a confidence interval, then remove the old system. Like the strangler fig that germinates on a host tree and gradually replaces it, the new system grows around the old until the old is unnecessary.",
        detail: "The pattern exists because big-bang rewrites fail disproportionately: they freeze the old system (all changes must be duplicated), take longer than planned, and switch over in one irreversible moment of truth. Strangler inverts every property: the old system keeps serving throughout, each diversion is small and reversible, and the team learns with real traffic at every step. Its precondition is a genuine seam — and finding or creating one (an API gateway, a message bus, a database proxy) is step zero.",
      },
    ],
    examples: [
      {
        title: "A strangler fig migration of a legacy order system",
        problem: "A 15-year-old order-management monolith (unmaintainable language, no tests, two original developers long gone) processes 40,000 orders/day. Business needs new pricing rules the old system cannot express, but the system cannot stop: it is the revenue path. Plan the migration.",
        steps: [
          { label: "Step 0: Find or create the seams", text: "Where can requests be intercepted? The good news: orders enter through exactly two channels — a web storefront API and an EDI feed from partners — and leave through a nightly export to the warehouse. The seams exist: an HTTP proxy in front of the storefront API, an EDI transformer, and the export job's output location. No in-place code changes needed to gain interception points." },
          { label: "Step 1: Install the routing layer, change nothing", text: "Deploy a gateway that forwards 100% of order traffic to the legacy system and, in shadow mode, mirrors requests into a log. Run for two weeks. Zero behavior change — but the team now has a full corpus of real order traffic to build a test oracle, and operations has confidence in the proxy layer itself. (The mirroring is the characterization test, captured from reality.)" },
          { label: "Step 2: Build and verify the first slice — read-only", text: "First capability diverted: order status lookup (read-only, lowest risk, high volume). The new service replays the shadow-log corpus: for each mirrored request, its answer must match the legacy answer exactly. Discrepancies are bugs in the new service by default (the legacy system defines current behavior, whatever the documentation claimed). When the corpus matches 100%, route 5% of lookups to the new service, comparing live answers, with automatic failback on any mismatch." },
          { label: "Step 3: Ramp and expand along risk gradient", text: "Over weeks: 5% → 50% → 100% of lookups. Then the first write path: order creation for a single partner's EDI feed — chosen because that partner is friendly, volume is small, and reversal is one routing flag. Dual-write phase: new service writes, legacy stays authoritative via comparison checks on the nightly export; every mismatch is triaged before the new service becomes authoritative for that path. Pricing rules — the actual business driver — are built into the new pricing module only, with the old system's prices locked as-is (the old system is now in maintenance freeze: bug fixes only, no new logic — the freeze is affordable *because* its retirement is scheduled and incremental)." },
          { label: "Step 4: Retire along the same gradient", text: "Each retired route stays dark but deployable for a full business cycle (peak season passes) before its legacy code is actually deleted. The monolith shrinks route by route: status, then creation, then modification, until the nightly export is the last living piece — replaced by the new event stream, compared for a final month, then switched off. Total: 18 months, revenue continuous, every step reversible, and the team that built it is the team that operates it." },
        ],
        result: "The strangler converted an impossible rewrite into a sequence of reversible, verifiable cutovers: seams first, shadow traffic as a free test oracle, reads before writes, one cohort before all, dual-write before authority, and retirement only after a full business cycle of dark-running. The legacy system was never frozen mid-air — it was de-funded gradually, which is the only way 15-year-old revenue systems ever die.",
      },
      {
        title: "Prioritizing debt: the interest-rate table",
        problem: "A team's debt backlog lists 14 items, from 'extract the 900-line calculateDiscount' to 'the 2017 notification module nobody has touched since 2019'. They can fund roughly one large paydown this quarter. Version-control history shows: calculateDiscount is edited in 22% of all feature PRs; the notification module has had 2 commits in 4 years. Choose, and justify the mechanism.",
        steps: [
          { label: "Step 1: Rank by interest, not by ugliness", text: "Interest rate = frequency of change through the region × drag per change. calculateDiscount: 22% of PRs cross it — every one paying the reading cost of 900 lines and the merge-conflict tax; it is the system's highest-rate debt. The notification module: 2 commits in 4 years — its interest rate is effectively zero. Size and ugliness of principal are irrelevant to the ranking; traffic is everything." },
          { label: "Step 2: Check the safety net before touching the hotspot", text: "calculateDiscount has no tests (of course). First move: characterization tests — capture current outputs for a spread of representative inputs, including the weird ones the sales team remembers ('education discount + bundling + end-of-quarter'). Current behavior is pinned, quirks included; the quirks are documented as questions, not silently 'fixed'." },
          { label: "Step 3: Pay down with named refactorings under the net", text: "Extract Method the commented blocks into intention-revealing steps (rule-of-three application, tier selection, bundling interaction); Replace Conditional with Polymorphism for the region/type switches; Introduce Parameter Object for the 11-parameter signature. Each step: run the characterization suite, commit. Behavior at the end: bit-identical, verified." },
          { label: "Step 4: Register the win in the interest-rate currency", text: "Measure afterwards: PRs touching the pricing area drop from an average 3.2 files to 1.4; the quarterly discount feature lands in days instead of a sprint. That diff-statistic is the paydown's ROI, in the same units the prioritization used — which is what makes next quarter's one-item decision easier." },
        ],
        result: "One quarter of capacity went to the highest-interest debt, selected by change-traffic data rather than aesthetics; the untouched 2017 module was explicitly left alone (zero interest = not debt that matters). The characterization-test-first sequence made a 900-line extraction boring — which is exactly what refactoring should feel like.",
      },
    ],
    keyTakeaways: [
      "Technical debt is borrowed speed: principal = rework cost, interest = recurring drag — and interest accrues only where future change flows through the borrowed region.",
      "The quadrant (deliberate/inadvertent × prudent/reckless) prescribes different responses: repayment schedules for deliberate-prudent, surveys and education for inadvertent, changed defaults for reckless.",
      "Prioritize paydown by interest rate — change frequency times drag from version-control hotspots — not by principal size or code aesthetics.",
      "Refactoring is behavior-preserving structure change in small verified steps, and it presupposes a test net; without tests, characterization tests come first.",
      "Fix-on-touch plus a small standing allocation against hotspots is the sustainable paydown portfolio; debt sabbaticals and aesthetic crusades are not.",
      "Strangler fig migrations replace legacy systems incrementally — seams, routing layer, read-before-write diversions, dual-write verification, retirement after a full business cycle — because big-bang rewrites freeze the old system and bet everything on one irreversible moment.",
    ],
    quiz: [
      {
        q: "Facing a deadline, a team lead says: 'We will skip the design discussion and just hack the reporting feature in — we will clean it up after launch if we ever have time.' The shortcut is taken knowingly, with no repayment plan. Which quadrant does this debt occupy, and what is the characteristic consequence?",
        options: [
          "Deliberate and reckless — the debt was chosen knowingly but without justification or a repayment mechanism; consequence: the hack becomes the foundation later features build on, and the repayment never happens because no trigger for it exists",
          "Deliberate and prudent — taking shortcuts under deadline pressure is always the professional choice",
          "Inadvertent and prudent — the team did not know the design mattered",
          "Inadvertent and reckless — the team lacked the skills to design the feature",
        ],
        answer: 0,
        explanation: "Knowing shortcut + no justification or plan = deliberate-reckless: the canonical 'no time for design' cell. Its signature consequence is that un-scheduled repayment never triggers — new code piles onto the hack, multiplying the eventual principal. Prudent deliberate debt would state the trigger ('refactor before the Q3 reporting rewrite'). The inadvertent cells require not-knowing, which the scenario explicitly rules out.",
      },
      {
        q: "A team must choose one debt item to pay down this quarter: (A) a hideous 4,000-line scheduling module last modified 3 years ago, zero commits since; (B) a moderately messy booking module edited in nearly every sprint, where each feature pays a week of extra reading and merge pain. Which choice does interest-rate reasoning demand?",
        options: [
          "(A) — larger principal means larger benefit from cleanup",
          "(B) — interest accrues where change flows: it is crossed every sprint, so its rate dwarfs the untouched module's zero; and it should be paid with characterization tests first, then small verified refactorings",
          "(A) — ugly code that is left alone rots further and will eventually be unavoidable",
          "Whichever module the newest team member finds most confusing",
        ],
        answer: 1,
        explanation: "The untouched module charges no interest — 3 years of zero commits means zero drag, whatever the principal. The booking module is crossed constantly: its small-looking messiness compounds sprint after sprint. That is the entire prioritization rule: change-frequency × drag, from version-control data, not principal size (a), aesthetics (d), or a vague eventual-rot theory (c).",
      },
      {
        q: "A developer spends a day restructuring a 600-line method into 12 well-named methods. All existing tests pass unchanged, and the system's external behavior is identical. Separately, another developer rewrites a batch job to use a faster algorithm — same outputs, but runtime drops from 4 hours to 20 minutes. Which of these was a refactoring, strictly defined?",
        options: [
          "Both — any change that improves the code is refactoring",
          "The 12-method restructuring only: refactoring changes internal structure while preserving external behavior; the algorithm swap deliberately changes a behavioral property (runtime), making it performance optimization, however welcome",
          "The algorithm swap only — measurable improvement is what distinguishes real refactoring",
          "Neither — refactoring by definition requires rewriting whole subsystems",
        ],
        answer: 1,
        explanation: "The distinction is definitional and load-bearing: refactoring preserves observable behavior and improves structure; optimization changes an observable property (speed) and may leave structure untouched. The categories matter practically because they need different safety nets — refactorings are verified by unchanged test results, optimizations by measurements. Both are good work; they are just different disciplines, and conflating them muddies both verifications.",
      },
      {
        q: "A team has a legacy billing monolith with no automated tests, and wants to refactor it safely. What must precede structural change, and why?",
        options: [
          "Nothing — refactoring tools guarantee behavior preservation",
          "Characterization tests that pin current behavior (including its quirks) — because without a net, 'small verified steps' is impossible: there is nothing to verify against, and each structural change is an uncontrolled experiment",
          "A full rewrite in a modern language, which eliminates the need for tests",
          "Documentation of the intended behavior, which then serves as the safety net",
        ],
        answer: 1,
        explanation: "Refactoring's small-steps discipline is only meaningful if each step can be *checked* — and with zero tests, behavior drift is invisible until customers report it. Characterization tests pin what the system actually does today, quirks included, converting each subsequent step into a verifiable no-change claim. (a) overstates tooling; (c) is the big-bang rewrite with a new name; (d) confuses intentions with behavior — the safety net must capture what the code *does*, not what someone remembers meaning.",
      },
      {
        q: "In a strangler fig migration, why is the first diverted capability chosen to be read-only (order status lookup) rather than the write path (order creation)?",
        options: [
          "Reads are architecturally more impressive to demonstrate",
          "Read-only paths carry no data-write risk: they cannot corrupt state, so verification is purely output comparison; diversion is reversible by one routing change, and the team learns the routing, verification and failback machinery on the lowest-stakes path before touching writes",
          "Write paths can never be migrated — they must remain in the legacy system permanently",
          "Reads generate more traffic, so they finish the migration faster",
        ],
        answer: 1,
        explanation: "The risk gradient is the method's spine: start where an error costs a wrong answer (detectable by comparison, reversible by routing) rather than wrong data (persistent, reconciliations needed). The read-only slice also exercises every part of the machinery — proxy, shadow comparison, failback — building operational confidence before dual-write complexity enters. (c) is simply false — writes migrate later, with dual-write and cutover verification; (a) and (d) are not engineering reasons.",
      },
      {
        q: "Which pairing correctly names the two axes of the technical-debt quadrant?",
        options: [
          "Expensive vs. cheap principal; high vs. low interest rate",
          "Deliberate vs. inadvertent (was the shortcut chosen knowingly?); prudent vs. reckless (was it justified and understood?)",
          "Code debt vs. design debt; test debt vs. documentation debt",
          "Intentional vs. accidental; paid vs. unpaid",
        ],
        answer: 1,
        explanation: "The quadrant's axes are epistemic and justificatory: knowledge (did we know we were taking a shortcut?) and justification (was taking it defensible, with consequences understood?). The cells then prescribe responses — schedules for the deliberate-prudent, surveys for the inadvertent, changed defaults for the reckless. Option (a) describes prioritization *within* debt (the interest-rate table), not the quadrant; (c) and (d) are plausible-sounding typologies that are not the model.",
      },
    ],
  },
]

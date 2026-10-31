/**
 * Knowledge Universe — Computer & Digital Literacy — Chapter 01: Computing Fundamentals
 * 2 lessons · ~5,046 words
 * field: Computer Science
 * legacy sources: x17-exam-syllabus.ts, x54-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Computer Science]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 cs-computing-thinking-digital-society — Computational Thinking, Algorithms and the Digital Citizen
 *   01.2 dl-internet-packets-hourglass — How the Internet Actually Works: Packets, Addresses and the Hourglass
 */
import type { KnowledgeTopic } from '../../types'

export const computerLiteracyCh01: KnowledgeTopic[] = [
  {
    id: 'cs-computing-thinking-digital-society',
    title: 'Computational Thinking, Algorithms and the Digital Citizen',
    domain: 'Computing & AI',
    field: 'Computer Science',
    branch: 'Computing Fundamentals',
    tier: 'core',
    concepts: [
      'Computational thinking: decomposition, pattern recognition, abstraction',
      'Algorithm properties: input, output, definiteness, finiteness, effectiveness',
      'Pseudocode and flowchart symbols',
      'Dry runs and trace tables',
      'Digital footprint: active and passive traces',
      'Cyber safety: phishing, malware, identity theft',
      'Passwords, two-factor authentication and patching',
      'Societal impacts: digital divide and e-waste',
      'IT Act 2000 and the DPDP Act 2023',
      'Netiquette, licensing and intellectual property',
    ],
    words: 2773,
    readMins: 14,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Two questions face every computer-science student and every phone owner, and this lesson takes both. The first is how to think like a computer scientist — the discipline called computational thinking: turning a messy problem into a form a machine can execute, through decomposition, pattern recognition and abstraction, expressed finally as an algorithm you can write as pseudocode or draw as a flowchart. The second is what life online does to you and to society — the digital footprint you leave, the attackers who phish for it, and the impacts (digital divide, e-waste, new law) that computing has stamped on the world. The two halves share a premise: computing is now a civic competence, not a vocational one, and the exam syllabus (CUET, CBSE Computer Science and Informatics Practices) treats it that way. The programming that builds on the first half continues elsewhere in this domain; this lesson is the foundation and the conscience.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The algorithm half trains the reasoning every paper tests — tracing loops, spotting off-by-one errors, judging efficiency — without which programming is guesswork. The digital-citizen half is now examined in its own right and matters more with each passing year: the footprint you are building right now is permanent, the attacks are engineered, and the law (IT Act, DPDP) assigns real penalties to both attackers and careless data-handlers.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Computational thinking', def: 'The problem-solving discipline computer science contributes to the world (Jeannette Wing\'s 2006 formulation): decompose the problem, recognise patterns to reuse, abstract away detail, and design an algorithmic solution. It is thinking like a computer scientist — not thinking like a computer.' },
          { term: 'Algorithm', def: 'A finite, ordered set of unambiguous instructions that transforms an input into an output. Knuth\'s classical properties: input, output, definiteness (each step precisely specified), finiteness (it terminates), effectiveness (each step is basic enough to be carried out).' },
          { term: 'Digital footprint', def: 'The trail of data you leave online: active traces you consciously post (uploads, comments, likes) and passive traces collected about you (browsing logs, cookies, location history, app telemetry) — persistent, searchable, and sellable long after you have forgotten it.' },
          { term: 'Phishing', def: 'Social engineering by message: a fake email, call (vishing) or SMS (smishing) impersonating a trusted party to harvest credentials or deliver malware — defeated not by antivirus but by the verify-before-you-trust habit.' },
          { term: 'Digital divide', def: 'The gap between those with meaningful access to computing (connectivity, devices, skills, language, usability) and those without — which runs inside cities as well as between regions, and is not closed by cables alone.' },
          { term: 'Data fiduciary', def: 'Under India\'s Digital Personal Data Protection Act (2023): any entity that decides how and why personal data is processed — bound to purpose limitation, consent, security safeguards, and penalties up to 250 crore rupees for breach.' },
        ],
      },
      { kind: 'heading', text: 'Part One: Thinking in Algorithms' },
      {
        kind: 'para',
        text: 'Watch what you already do computationally. Planning a wedding: you break the impossible whole into venue, catering, guests, budget — decomposition; you reuse last year\'s plan for a cousin\'s wedding — pattern recognition; you model the guest list as a count and a budget constraint rather than a mental image of every relative — abstraction; and you sequence tasks with dependencies — an algorithm. Searching a dictionary: you open it in the middle, decide which half the word is in, and repeat — binary search, centuries before computers. Computational thinking names and disciplines these moves so they can be taught and checked: a problem decomposed into subproblems that fit one pattern is half-solved; an abstraction that keeps exactly the relevant detail (the exam marks and the credit limits, not the colleges\' scenery) is a model; and the algorithm is the model set in motion. The exam will test the four steps on everyday scenarios precisely because the discipline is general.',
      },
      {
        kind: 'para',
        text: 'The algorithm itself deserves a careful definition, because "a recipe is an algorithm" is only half true. A proper algorithm has Knuth\'s five properties: it takes input (zero or more quantities given to it), produces output (at least one quantity), each step is definite (unambiguous — "add a pinch of salt" fails this test), the sequence is finite (it must stop — a recipe that says "stir until it seems right" fails), and each step is effective (basic enough to be done exactly, by a person or machine). Long division, as taught in primary school, is a perfect algorithm — input: two numbers; output: quotient and remainder; every step mechanical. Expressing algorithms has two standard school forms: pseudocode — structured English with fixed keywords (READ, SET, IF…THEN…ELSE, WHILE, FOR, PRINT) that reads like the program it will become — and the flowchart, whose symbol grammar is worth memorising: the oval terminator (START/STOP), the rectangle for process, the parallelogram for input/output, the diamond for decision (always two labeled exits, yes and no), joined by flow lines that run top to bottom and left to right. The same logic wears either costume; exams ask you to translate between them.',
      },
      {
        kind: 'para',
        text: 'Between writing an algorithm and trusting it sits the dry run — the trace table. You act as the computer: a row per step, a column per variable, recording every value as it changes, until termination. Trace tables catch the classic errors better than any amount of staring: the off-by-one loop (does the counter stop at n or n−1?), the re-initialised accumulator (a total reset to zero inside the loop), the swapped variables, the unreachable branch. They also teach the honest lesson of this discipline: the computer does exactly what you said, not what you meant — and the trace table is where the difference becomes visible. The worked example below builds one for the three-maximums problem, and the same table skill grades every debugging question the exam sets.',
      },
      {
        kind: 'para',
        text: 'Efficiency completes the thinking. Finding a name in an unsorted list of a thousand cards takes, on average, five hundred comparisons — the linear scan; doing it in a dictionary, halving the remaining range each time, takes at most ten — the binary search\'s logarithmic advantage. The exam\'s quantitative habit is simply counting steps: which algorithm makes fewer comparisons for this input, what happens to the count when the input doubles (a linear method doubles; a binary method adds one). Sorting a list before searching it is an investment that pays off over repeated lookups — the insight that underlies every database index and, at the advanced end, the hash-table lesson this domain carries for when you get there. Note what has not appeared in this part of the lesson: any programming language. Python is one notation for these ideas; the ideas are the syllabus.',
      },
      { kind: 'heading', text: 'Part Two: The Digital Citizen' },
      {
        kind: 'para',
        text: 'Turn the lens around: from what you compute to what computing does to you. Start with the footprint, because you are extending it this second. Active traces are the deliberate layer — your posts, comments, uploads, the profile you curate; passive traces are the collected layer — every site\'s cookies, the location pings, the app that read your contacts, the shopping click-stream that profiling systems splice into a surprisingly complete person. Two properties make the footprint dangerous: it is persistent (deleted is not gone — caches, screenshots and archives keep it) and it collapses audiences (the joke for friends meets the admissions officer and the fraudster in the same search). Management is hygiene, not paranoia: audit old accounts, tighten privacy settings, think in "would I sign this?" terms before posting, and understand that incognito mode hides history from your own device, not from the network or the sites themselves.',
      },
      {
        kind: 'para',
        text: 'The attacks on that footprint follow a taxonomy the exam expects. Phishing and its voice and SMS variants impersonate trustworthy senders to steal credentials — the defense is procedural: check the actual sender address, hover before clicking, never enter passwords reached from a link, and treat urgency as the tell (real institutions do not threaten accounts into expiry in four hours). Malware families differ by behaviour: viruses attach to files, worms self-propagate across networks, trojans masquerade as useful software, ransomware encrypts and extorts, spyware and keyloggers watch and exfiltrate. Identity theft assembles stolen fragments into a fake you —SIM-swap on your phone number, a loan in your name — which is why the defences are the boring ones: long unique passphrases (length beats clever symbol-swapping, and reuse is the real sin), a password manager to make uniqueness possible, two-factor authentication binding login to something you have (a device, a TOTP code) beyond something you know, prompt security patches (most breaches exploit known, unpatched holes), and 3-2-1 backups (three copies, two media, one off-site) against ransomware\'s only true weapon. Cyberbullying closes the personal list: block, report on-platform, preserve evidence (screenshots with dates), and tell someone — the national cybercrime portal (cybercrime.gov.in) and the 1930 helpline exist for exactly this, and using them early is the difference between an incident and a record.',
      },
      {
        kind: 'para',
        text: 'Zoom out to society and three impacts organise the syllabus. The digital divide is first: access (does the village have affordable broadband at all — BharatNet\'s fibre programme and the mobile revolution have moved this), skill (can the household use a browser, UPI, a form in a language it reads — the digital-literacy missions target this) and meaning (does the interface speak your language, work on your old device, respect your disability) — with gender running through all three, since women in the poorest households are the least connected Indians of all. Second, the material underside: e-waste, among the world\'s fastest-growing waste streams and one India ranks high in generating. Discarded devices travel from the formal economy to informal shredding-and-acid workshops where children and pregnant women recover copper and gold at heavy-metal cost; the policy answer is Extended Producer Responsibility under the E-Waste Rules (2022), which makes the manufacturer finance collection and recycling — the exam\'s example of closing a loop the market leaves open. Third, the legal frame: the Information Technology Act (2000) gave electronic records and digital signatures legal standing — the foundation of every UPI payment and e-signature — and its 2008 amendment criminalised the attacks above (identity theft under 66C, cheating by personation online under 66D, obscene content under 67). The Digital Personal Data Protection Act (2023) completes the frame for the individual: consent and purpose limitation for collection, duties and penalties for the data fiduciary, rights of correction and grievance for you.',
      },
      {
        kind: 'para',
        text: 'The last competency is conduct. Netiquette — the etiquette of the networked — is examined as common sense with marks attached: write as if the recipient is in the room (because screenshots are forever), respect others\' bandwidth and inboxes, disagree with the argument and not the person, and credit what you did not make. That credit has law behind it: copyright attaches to expression automatically in India (the Copyright Act, 1957), with fair dealing — the Indian doctrine, narrower than the American "fair use" — allowing limited use for study and review; licensing then tells you what you may do with what you download, from all-rights-reserved through Creative Commons\' graduated permissions to free and open-source software, whose GPL family of licenses makes this very lesson\'s ecosystem possible. Plagiarism — presenting another\'s work as your own — is the academic sin that search engines made trivial to commit and trivial to catch; the professional habit is citation as reflex. And gaming disorder\'s entry into the ICD-11 (the WHO\'s disease classification) marks the honest end of the syllabus: the attention economy is engineered, the "one more level" loop is a design decision, and the digital citizen manages the machine rather than being managed by it — screen-time budgets, notification discipline, and offline life as a primary residence. Computing, this whole lesson says, is a power tool: Part One taught you which end cuts; Part Two taught you where your fingers are.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Largest of Three Numbers: Pseudocode, Flowchart, Trace Table',
        steps: [
          'The problem: read three numbers A, B, C and print the largest. Computational thinking: decompose into compare-pairs; pattern: the maximum accumulates through comparisons; abstraction: only order relations matter, not the numbers\' meaning.',
          'Pseudocode: READ A, B, C → SET MAX = A → IF B > MAX THEN SET MAX = B → IF C > MAX THEN SET MAX = C → PRINT MAX. Each instruction is definite, effective; the sequence is finite — all five Knuth properties check.',
          'Flowchart: oval START → parallelogram READ A, B, C → rectangle MAX = A → diamond B > MAX? (yes → rectangle MAX = B; no → continue) → diamond C > MAX? (yes → rectangle MAX = C) → parallelogram PRINT MAX → oval STOP. Decision diamonds each carry both exit labels.',
          'Trace table for input 12, 7, 20: row 1 READ → A=12, B=7, C=20; row 2 → MAX=12; row 3 B>MAX? → 7>12 false, MAX unchanged; row 4 C>MAX? → 20>12 true → MAX=20; row 5 PRINT 20; STOP.',
          'Verify by adversarial thinking — the cases that break maximum-finders: all equal (12,12,12 → MAX=12, correct); descending (30, 20, 10 → second and third diamonds false, MAX=30, correct); negatives (−5, −2, −9 → MAX starts −5, becomes −2, correct because the comparison, not the value, decides). Dry run until the trace table has covered every branch — that is the testing skill in miniature.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Which pair correctly lists Knuth\'s properties of an algorithm?',
          options: ['speed and memory', 'definiteness and finiteness', 'encryption and compression', 'recursion and iteration'],
          answer: 1,
          explain: 'The classical five: input, output, definiteness, finiteness, effectiveness — "stir until it seems right" fails definiteness, and a loop that never ends fails finiteness.',
        },
        {
          q: 'In a flowchart, a decision is drawn as…',
          options: ['a rectangle', 'an oval', 'a diamond with two labelled exits', 'a parallelogram'],
          answer: 2,
          explain: 'The diamond is the decision symbol; rectangles are processes, ovals terminators, parallelograms input/output — and every diamond needs both yes and no paths.',
        },
        {
          q: 'The main limitation of "incognito mode" for privacy is that…',
          options: ['it slows the browser', 'it hides activity from your own device only — sites and the network still see you', 'it encrypts everything too well', 'it blocks cookies completely'],
          answer: 1,
          explain: 'Private mode skips local history and cookies; your ISP, school or office network and the sites themselves still log the visit — a distinction the exam loves.',
        },
        {
          q: 'Under India\'s DPDP Act (2023), a "data fiduciary" must…',
          options: ['publish all data publicly', 'process personal data only for stated purposes with consent, and safeguard it on pain of penalty', 'never store any data', 'charge users for data'],
          answer: 1,
          explain: 'Consent, purpose limitation, security and grievance redress — with penalties (up to 250 crore rupees for significant breaches) — are the Act\'s machinery.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling any set of instructions an algorithm — finiteness and definiteness are the bar. Confusing pseudocode with a specific programming language, or drawing flowcharts with unlabelled decision exits. Believing incognito means anonymous, or that a "strong" reused password is safe (reuse turns one leak into every account). Treating the digital divide as a rural-only or cables-only problem — skill, language, gender and disability divide inside the cities too. And forgetting that e-waste "away" is someone\'s workshop: the informal recycling yard is where the externality lands.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is the entry point of the Computing & AI domain. Follow-ons: the hash-tables lesson for what efficient lookup grows into, the operating-systems lesson for the machine an algorithm runs on, and the AI lessons (transformers, backpropagation) for the systems now writing and reading beside you. For the digital-citizen half, the everyday-practical domain\'s probability and credit lessons apply the same judgement offline.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Computational thinking = decomposition + pattern recognition + abstraction + algorithm design — a general discipline, not programming itself.',
        'Algorithm = finite, definite, effective input-to-output transformation; express it as pseudocode (READ/SET/IF/WHILE/PRINT) or flowcharts (oval, rectangle, parallelogram, diamond, flow lines).',
        'Dry runs and trace tables: one row per step, one column per variable — the debugging skill exams grade and programmers live by.',
        'Efficiency intuition: count the steps; linear scan of 1,000 items ≈ 1,000 comparisons, binary search ≈ 10 — sorting is an investment that pays per lookup.',
        'Digital footprint: active (posted) and passive (collected); persistent and audience-collapsed; manage with audits, settings, and think-before-post.',
        'Threats and defences: phishing/vishing/smishing (verify senders; urgency is the tell), malware families (virus, worm, trojan, ransomware, spyware), identity theft; passphrases + manager + 2FA + patches + 3-2-1 backups; bullying → block, report, preserve, tell (1930, cybercrime.gov.in).',
        'Societal impacts: the divide (access, skill, meaning — gender through all three); e-waste and EPR under the 2022 Rules; IT Act 2000 (e-records, 66C/66D) and DPDP 2023 (consent, fiduciaries, penalties).',
        'Conduct: netiquette, copyright and fair dealing, Creative Commons and GPL, plagiarism as a career risk — and attention as the resource the digital citizen budgets like any other.',
      ] },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'dl-internet-packets-hourglass',
    title: 'How the Internet Actually Works: Packets, Addresses and the Hourglass',
    domain: 'Computing & AI',
    field: 'Computer Science',
    branch: 'Networking',
    tier: 'core',
    concepts: [
      'A delivery service for bits',
      'Circuit switching versus packet switching',
      'Core and edge',
      'IP addresses and their exhaustion',
      'DNS: names into numbers',
      'The protocol hourglass',
      'TCP and UDP: two promises',
      'The internet spirit',
    ],
    words: 2273,
    readMins: 11,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "The appendix of Blown to Bits — 'The Internet as System and Spirit' — opens by clearing away the two most common wrong pictures at once. The internet is not email, web pages and photographs, any more than the postal service is magazines and parcels: it is a delivery service for bits, whatever the bits represent. And it is not a bunch of wires and cables, any more than the postal service is its trucks: it is a system — above all, a set of standards for interconnecting networks. No one is in charge of the whole thing; it works because thousands of competing, cooperating parties (telecom firms, governments, universities, your broadband provider) agree on what to expect as messages pass from one to another. The ICT lesson of this book owns the vocabulary (TCP/IP, DNS, ISP, LAN/WAN and friends); this lesson builds the machine underneath those abbreviations — the knowledge that lets you reason about speed, outages, security and every net-policy debate you will ever read.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Every troubleshooting instinct, every privacy judgement and every 'why is it slow' diagnosis depends on the model in this lesson. A user who thinks the internet is the web cannot tell a DNS failure from a broken cable; a citizen who thinks messages travel whole cannot understand what encryption protects or why interception is cheap. The designers' two big choices — packets instead of circuits, and a minimal neutral core — explain the internet's strengths, its weaknesses and its politics in one stroke.",
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "The choice that built everything: packets, not circuits. Early telephone systems were circuit-switched: to call your aunt, the exchange physically closed an electrical loop between your pair of wires and hers, held open for the whole conversation. Reliable and uninterruptible — and ruinously expensive, because the switch hardware sat idle between words, and every new call needed more switch. The internet's designers, constrained in the 1970s to connect everything with nothing idle, chose packet switching instead. The unit of travel is a packet of about 1,500 bytes or less — roughly a postcard's worth. Longer messages are broken into many packets, each stamped with serial numbers; the packets need not follow the same route, need not arrive in order, and are reassembled at the destination into the original message. The book's image is exact: a postal service that delivers only postcards, so you send War and Peace as thousands of them, or a photograph as a grid of cards each naming a row, a column and a colour. Two consequences follow. Message size is unlimited — enough postcards reach any length. And capacity is limited only by the amount of data actually flowing, not by the number of connected computers — which is why a network built for a handful of research machines absorbed billions of devices. What makes it work in practice is speed: sending computers disassemble and receiving computers reassemble messages so quickly and flawlessly that users notice nothing.",
      },
      {
        kind: 'para',
        text: "Core and edge. The postal system has an edge (your letterbox, the carrier) and a core (the sorting centres and routes behind it). The internet's edge is the machines users touch — your phone and laptop; its core is everything that passes messages along, run by internet service providers. An ISP, the book says, is any computer providing access to the internet or carrying traffic between its parts: your home telephone or cable company, a satellite provider in rural areas, while universities and big companies are their own ISPs. In the United States alone there are thousands, and the system works because they cooperate — your packet may cross a dozen providers on the way to the next continent. The appendix also lands a privacy punchline inside the architecture: you do not 'visit' a store's web page like a tourist peeking through a window — your computer makes a very specific request of the store's server, which responds and may well record exactly what you asked, adding it to what it already knows. Your 'visits' leave fingerprints (the privacy lesson's theme, enforced by the network's own design).",
      },
      {
        kind: 'para',
        text: "Addresses: four numbers, then sixteen bytes. Packets find their destinations because each carries an IP address — for the classic version of the protocol, four numbers from 0 to 255 (each one byte, so the whole address is 32 bits), written like 66.82.9.88. Blocks of addresses are assigned to ISPs, which lend them to customers — which is why your address can change and why it identifies a connection more than a person (the copyright lesson's courtroom point). Four billion possibilities sounded absurdly generous in 1970, when the entire ARPANET — Figure A.1 of the book — comprised thirteen computers at institutions from UCLA to Harvard. Miniaturisation and mobile phones broke the assumption; hundreds of millions of devices became billions, and the long-predicted exhaustion arrived. The answer already in the book: IPv6, growing the address from 32 bits to 128 — a space of about 3 followed by 38 zeroes, which the authors delight in sizing as roughly ten million addresses for every bacterium on Earth. Between the two stands a piece of architecture every user touches daily without noticing: the Domain Name System. DNS servers hold the map from human-friendly names (harvard.edu, gmail.com, yahoo.fr — the suffix a country code) to IP addresses; the translation happens before your message enters the core, because the routers inside know nothing of names — they only pass packets toward number-addressed destinations.",
      },
      {
        kind: 'para',
        text: "The hourglass. The internet's architecture is drawn as an hourglass. At the narrow neck sits IP — the Internet Protocol — defining the form of every packet. Above the neck, an ever-growing set of higher-level protocols rides on those packets: TCP, which promises reliable, ordered delivery at the cost of possible delay (web pages, email, file transfers — where a missing byte is corruption), and UDP, which promises timeliness instead (live voice and video, where a late packet is worthless); above them, application protocols — HTTP for the web, SMTP for sending mail. Below the neck, everything physical: copper wire, fibre optic light, radio. The book's metaphor is the electric outlet: one universal interface between any power source and any appliance, so a new device plugs in without rewiring the house. IP is that outlet for bits — any application can run over any physical medium because both meet at the neck. And the design virtue the authors call the internet spirit follows: the core demands as little as possible, so innovation happens at the edges — the web, streaming, voice-over-IP, social media all arrived without changing the network itself. The hourglass is why the internet swallowed every rival design: it made the network a dumb, neutral delivery service and put all the intelligence in the applications.",
      },
      {
        kind: 'para',
        text: "Why the spirit matters beyond engineering. Because the core is neutral and minimal, control concentrates at the ends: what your device runs, what the application does with the bits it receives. That is the deep structure behind three debates this book's other lessons touch. Security: packets crossing the core are readable by whatever they pass — which is why encryption (HTTPS, the padlock) is not a feature but the load-bearing wall of internet trust. Neutrality: 'it's all just bits' plus a neutral core is exactly what common-carriage arguments (the Naral-versus-Verizon case) try to extend from voice to data. And resilience: no one is in charge, so no single failure or single censor can stop the network — but a government that controls the towers, as in Myanmar 2007, controls the bits where they touch the ground. The internet's politics are its architecture, read slowly.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: trace, layer by layer, what happens when a student types a college\u2019s URL into a browser — and use the trace to explain why the page fails to load when the DNS is broken but pings by number still work.',
        'Recall the governing ideas: names translate to numbers before the core (DNS); traffic travels as ~1,500-byte packets (IP) reassembled reliably (TCP); the browser is an application above the hourglass\u2019s neck.',
        'Apply: the browser asks a DNS server for the IP address behind the college\u2019s name; the answer returns; the browser opens a TCP connection to that address and sends the HTTP request, which travels as numbered packets across multiple ISP networks; the server responds with packets that TCP reassembles in order and hands to the browser to render. If DNS fails, the name never becomes a number, so nothing loads — yet directly entering the numeric address can still work, because the neck of the hourglass never needed the name.',
        'State the result: the failure splits cleanly by layer — application (DNS name lookup) versus transport/network (packet delivery). Diagnosing at the right layer is the difference between "the internet is down" and "the phonebook is down", and it is why every network tool asks for an address, not a name, when it needs to bypass doubt.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Troubleshooting: test layers in order — can you reach a numeric address (cable/ISP fine), does a name resolve (DNS), does the application work — before blaming "the internet".',
        'Security habits: assume any unencrypted packet is a postcard every router can read; the padlock in the browser is the encryption that turns postcards into sealed envelopes.',
        'Understanding addresses: your IP address is a lent, changeable label on a connection — which is why it is weak evidence of identity and why IPv6 exists.',
        'Choosing tools: real-time calls prefer UDP-style timeliness; file transfers prefer TCP-style reliability — every app\u2019s behaviour on a bad network reveals which promise it bought.',
        'Reading policy news: net neutrality, censorship and surveillance debates are all arguments about where control should live in the hourglass — at the neutral neck or at the edges.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Conflating the web with the internet — HTTP is one protocol above the neck; email, calls and games ride the same packets. Imagining your file travels whole — it crosses as thousands of independent packets that may take different roads. Treating DNS as guaranteed — it is a lookup service above the core, and its failure or interference is a classic censor's tool. Saying 'Wi-Fi is the internet' — Wi-Fi is one physical layer below the neck, the last hop of a long journey. And reversing the hourglass: the intelligence lives at the edges, not the core — which is why the network's simplicity, not cleverness, is what made it universal.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Packet', def: 'A unit of about 1,500 bytes or less carrying part of a message plus serial and address information — the postcard of the internet.' },
        { term: 'Packet switching', def: 'Routing independent packets that may take different paths and arrive out of order, for reassembly at the destination — the design that beat circuits.' },
        { term: 'Circuit switching', def: 'Holding a dedicated end-to-end connection open for the whole conversation — the telephone model: reliable, expensive, idle-prone.' },
        { term: 'Router', def: 'A core computer that passes packets onward toward their numeric destination, knowing nothing of names or meanings.' },
        { term: 'IP address', def: 'A 32-bit number written as four values from 0 to 255, assigned in blocks to ISPs; IPv6 enlarges it to 128 bits.' },
        { term: 'DNS', def: 'The Domain Name System: servers translating human-friendly names into IP addresses before traffic enters the core.' },
        { term: 'ISP', def: 'Internet service provider — any operator providing access to the network or carrying traffic between its parts; universities and large companies are their own.' },
        { term: 'TCP / UDP', def: 'The two transport promises above IP: reliable ordered delivery (TCP) versus timely, unrepaired delivery (UDP).' },
        { term: 'Protocol hourglass', def: 'The architecture drawing: many applications and many physical media meeting at the narrow waist of IP — minimal demands at the neck, innovation at the edges.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Why did the internet\u2019s designers choose packets over circuits?',
            options: ['Packets are more secure', 'Packets allow unlimited message sizes and capacity limited only by actual traffic, not connections', 'Telephone companies refused to cooperate', 'Packets avoid needing addresses'],
            answer: 1,
            explain: 'Circuit switching wasted idle capacity and capped connections; the postcard model — thousands of self-addressed pieces, reassembled on arrival — removed both limits.',
          },
          {
            q: 'A router inside the core forwards packets based on:',
            options: ['the website\u2019s domain name', 'the destination IP address number', 'the email subject line', 'the file type'],
            answer: 1,
            explain: 'Names are translated to numbers by DNS before the message enters the core; routers handle numbers only — which is why DNS failures break browsing while numeric routes stay fine.',
          },
          {
            q: 'TCP versus UDP is best summarised as:',
            options: ['TCP is wireless, UDP is wired', 'TCP promises reliable, ordered delivery; UDP promises speed and accepts loss', 'TCP is for email only', 'UDP encrypts and TCP does not'],
            answer: 1,
            explain: 'Web pages and mail want every byte in order (TCP); live voice and video prefer the newest packet to a late one (UDP) — the hourglass carries both because the neck demands so little.',
          },
          {
            q: 'IPv6 matters because:',
            options: ['it makes the web faster', 'the 32-bit IPv4 address space (~4 billion) is exhausted, and 128 bits expands the space to about 3 followed by 38 zeroes', 'it replaces DNS', 'it removes the need for ISPs'],
            answer: 1,
            explain: 'Thirteen computers became billions of devices; the book sizes the new space as roughly ten million addresses per bacterium — expansion, not speed, was the point.',
          },
        ],
      },
      { kind: 'callout', title: 'Where next', tone: 'insight', text: 'Grounding: Abelson, Ledeen and Lewis, Blown to Bits (2008), Appendix "The Internet as System and Spirit" — Packet Switching, Core and Edge, IP Addresses, and the protocol hourglass of the Spirit section; plus the ARPANET 1970 figure. The ICT lesson owns the abbreviation set and India\u2019s digital platforms; the search and privacy lessons apply this machinery; the cryptography lesson (in the computing book) builds the security wall the appendix assumes.' },
    ],
  },
]

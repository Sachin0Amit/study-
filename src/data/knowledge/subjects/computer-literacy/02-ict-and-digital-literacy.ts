/**
 * Knowledge Universe — Computer & Digital Literacy — Chapter 02: ICT & Digital Literacy
 * 7 lessons · ~14,122 words
 * fields: Digital Literacy, ICT & Digital Literacy
 * legacy sources: x24-gap-closing-pass.ts, x31-ugc-net-paper1-pass.ts, x54-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [ICT & Digital Literacy, Digital Literacy]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 dl-bits-koans-digital-world — The Seven Koans of Bits: How the Digital World Actually Behaves
 *   02.2 dl-privacy-footprints-fingerprints — Privacy Lost, Privacy Traded: Footprints, Fingerprints and Little Brother
 *   02.3 dl-document-metadata-ghosts — Ghosts in the Machine: What You See Is Not What the Computer Knows
 *   02.4 dl-web-search-bits-bazaar — Search Engines and the Bits Bazaar: How Results Are Made and Why It Matters
 *   02.5 dl-copyright-balance-toppled — Who Owns the Bits? Copyright After Perfect Copies
 *   02.6 ict-computers-internet-digital-initiatives — ICT: From Abbreviations to India’s Digital Higher-Education Initiatives
 *   02.7 comp-office-productivity-software — Office Productivity Software: Documents, Spreadsheets, Slides and Workflows
 */
import type { KnowledgeTopic } from '../../types'

export const computerLiteracyCh02: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'dl-bits-koans-digital-world',
    title: 'The Seven Koans of Bits: How the Digital World Actually Behaves',
    domain: 'Computing & AI',
    field: 'Digital Literacy',
    branch: 'Digital Citizenship',
    tier: 'core',
    concepts: [
      "Shannon's bit: the universal unit",
      "Koan 1: It's all just bits",
      'Koan 2: Perfection is normal',
      'Koan 3: There is want in the midst of plenty',
      'Koan 4: Processing is power',
      'Koan 5: More of the same can be a whole new thing',
      'Koan 6: Nothing goes away',
      'Koan 7: Bits move faster than thought',
      'Good and ill: citizens choose',
    ],
    words: 2578,
    readMins: 13,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "In 1948 a mathematician at Bell Telephone Laboratories named Claude Shannon published 'A Mathematical Theory of Communication', the paper that established the bit — a choice between two possibilities, a 0 or a 1 — as the natural unit of information. Everything a computer has done since is that one idea compounding. Abelson, Ledeen and Lewis open their Harvard classic Blown to Bits with the consequence: the digital explosion is not really about gadgets, it is about what becomes normal once everything — letters, songs, photographs, phone calls, medical records, money — melts into the same substrate of bits. To give citizens a way of reasoning about that world, the authors offer seven truths about bits, which they call koans because, like Zen riddles, each states a paradox that rewards meditation: they are oversimplifications and over-generalisations, and yet they are already truer than we realise.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Every digital-age headline — a leaked database, a business killed by a first-page search ranking, a phone that recognises your face — is one of these seven koans playing out. The koans are the closest thing digital literacy has to a physics: laws of the medium that hold regardless of brand, app or syllabus. An imperfect metaphor can mislead as much as an apt one illuminates, the authors warn; these seven are the metaphors worth internalising precisely because they name where the old physical-world intuitions — property, erasure, distance, originality — stop working.",
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "Koan 1: It's all just bits. Your computer creates the illusion that it contains photographs, letters, songs and movies; all it really contains is bits, patterned in ways you cannot see — files and folders are programmer-made artifices. When an email carrying a photo flows across the internet, the machines handling it have no idea they are moving part text and part graphic: the network was designed to shuffle bits, not messages. That neutrality has legal teeth. Telephone companies were long ago declared common carriers — like railroads, forbidden to pick and choose their customers. In 2007 the advocacy group Naral Pro-Choice America wanted to run a text-message alert service on Verizon's network, and Verizon refused, citing 'controversial or unsavory' content — something it could never have done with an 800 number, because voice bits are regulated but text bits, though physically identical radio-wave bits, are not. The law had not caught up to Koan 1: there is no sensible engineering distinction between those streams, yet the rules differ. Whenever you hear a net-neutrality argument, you are hearing Koan 1 being litigated.",
      },
      {
        kind: 'para',
        text: "Koan 2: Perfection is normal. When monks copied books by hand, errors crept in with every copy, and copies of copies degraded further. Digital copies are perfect: email a photograph and your friend receives it identical down to details too small to see — not because computers never fail, but because networks do not just pass bits along, they check them (error detection), and correct or retransmit anything damaged. The residual risk of a corrupted character is so small the authors joke we should worry instead about a meteor strike. Perfection rewrote economics and law: in the tape era, teenagers were not prosecuted for dubbing songs because copies-of-copies were audibly worse than originals; the music industry's legal onslaught of the 2000s exists precisely because digital copies are identical to the original — so identical that the word 'original' loses meaning. The same perfection powers backup reliability, software distribution and fake-image spread: a forgery travels with zero loss.",
      },
      {
        kind: 'para',
        text: "Koan 3: There is want in the midst of plenty. Storage is astronomically abundant, yet the explosion paradoxically erases what is not online. One author's new doctor could chart his blood chemistry in fine detail but had no access to a decades-old stress test that lived in a paper file — data that 'might as well not have existed'. Information that exists digitally can still vanish when the device that reads it disappears: a modern update of the eleventh-century Domesday Book, recorded on then-current laser discs, was unreadable when it was one-sixtieth the age of its 900-year-old original. And abundance creates a new gatekeeper: search. When the web holds everything, whatever cannot be found — on the first page or two — effectively does not exist, which is why appearing in search results became life-or-death for businesses. Plenty, in other words, did not end scarcity; it moved the scarcity to visibility and readability.",
      },
      {
        kind: 'para',
        text: "Koan 4: Processing is power. The fastest computers of the early 1940s performed about five operations per second; by the book's writing, the fastest performed about a trillion. Gordon Moore, co-founder of Intel, observed in 1965 that the density of integrated circuits seemed to double every couple of years — Moore's Law, an empirical observation of engineering progress, not a law of nature like gravity, but one the industry treated as a forty-year challenge. Around 2001 raw processor clock speeds stopped following it; the response was to put multiple processors on one chip and split work in parallel, sustaining the effective growth. Processing abundance is why inventions leap from labs to toys within years — robot vacuum cleaners, self-parking cars, face and voice recognition good enough that phones unlock at a glance and cameras no longer need humans to watch them. The power comes not from the bits themselves but from what the processing can do to them.",
      },
      {
        kind: 'para',
        text: "Koan 5: More of the same can be a whole new thing. Exponential growth — doubling at a steady rate — looks like nothing for a long time and then looks like everything at once. The book's epidemic: one sick person infects two, then four, then eight; after two weeks only three people in a thousand are sick and nobody notices; one week later forty per cent are sick and society collapses. Smoothly exponential, explosively perceived. The human consequence is lead time: the point where that epidemic was half as devastating was not a week and a half earlier but the next-to-last day — so a response that takes a week to develop must be triggered while the numbers still look trivial. Kodak lived this curve in public: digital cameras existed as early as 1983; in early 1997 Kodak's stock hit a record on healthy film sales and it raised its dividend; by 2007 it was cutting its workforce to 30,000 — a fifth of its late-1980s size — at a cost of over three billion dollars. Moore's Law, the authors write, moved faster than Kodak did. The lesson is not doom but vigilance: in a bit-driven world, small quantitative signals deserve early responses.",
      },
      {
        kind: 'para',
        text: "Koan 6: Nothing goes away. By one industry estimate, 2,000,000,000,000,000,000,000 — two sextillion — bits were created and stored in 2007 alone, with disk capacity roughly doubling every two to three years. Storing everything became cheaper than deciding what to forget, so institutions keep everything: laws force financial firms to retain data for audits; Wal-Mart saves every one of its tens of millions of daily transactions; even hotel keycards log every room, gym and gift-shop visit to the second, mergeable with billions of other records, losable, stealable, subpoenaable. Supermarket loyalty cards look like gratitude but are payments — the store is buying your purchase history, a privacy tax on anyone who wants to keep their habits to themselves. And because databases are deliberately duplicated for backup and analysis, data is 'kept forever, unless there are policies to get rid of it'. Once data escapes into the network of networks, there is no getting it back — a fact every identity-theft victim rediscovers while trying to expunge records that seem never to go away.",
      },
      {
        kind: 'para',
        text: "Koan 7: Bits move faster than thought. The internet predates the personal computer: the ARPANET of around 1970 connected just thirteen computers at universities and research labs, and nobody imagined the network it became. As networking capacity exploded alongside processing and storage, distance collapsed economically: customer-service calls are answered in India not only because wages are lower — they always were — but because shipping the bits of a voice across the planet now costs almost nothing; the radiologist reading an X-ray taken in Iowa may be half a world away; a drive-through order may be keyed from another state. News outruns grief — one author watched a father receive condolences from abroad before he himself had learned of his daughter's death. Bits also outrun control: in 2007 the world watched Myanmar's monk protests through mobile-phone clips until the government simply took over the internet and phone towers and the story evaporated — proof both of the network's power and of how total information control still is. And 'cyberspace' has no borderless sovereignty: buy a book online in England and British libel law applies, which breeds libel tourism and cautious single worldwide editions. The bits move faster than the law, the grief and the censors — but not, in the end, outside them.",
      },
      {
        kind: 'para',
        text: "The koans close on a civic note the authors call Good and Ill, Promise and Peril: none of this is fated. How the technology is offered, used and regulated is decided in legislatures, corporate offices, town meetings and purchasing departments — not by technologists alone, and ordinary citizens to whom those institutions are accountable have a real say. The digital explosion threw much up for grabs; literacy in the koans is what lets you join the grab rationally rather than be grabbed. The rest of this book's lessons are applications of exactly that: the privacy trade (Koans 6 and 7), document hygiene (Koans 1 and 6), search power (Koans 3 and 4), copyright (Koans 1 and 2) and the network itself (Koan 7).",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Identify what is asked: a district health office digitises records and throws away paper after five years, keeping 'everything' on two servers. Apply the koans to find what the plan gets wrong.",
        "Recall the governing ideas: Koan 2 (copies are perfect, backups are reliable), Koan 3 (want amid plenty — unreadable formats vanish), Koan 6 (nothing goes away — data sticks unless policy deletes), Koan 4 (processing keeps growing).",
        "Apply: the copy itself is safe — error-checked duplication means the archived bits will read back perfectly (Koan 2). The real risks are Koan 3: the reader software of 2031 may not open 2026 formats, so the office must migrate formats and test restores, keeping a readable copy of the reader itself. Koan 6 cuts both ways: patient data that should expire (per policy and privacy law) will otherwise persist in backups forever, so the office needs explicit retention-and-deletion policies, not vague intentions.",
        "State the result: a correct archive plan follows three koans — perfect copies make backup trustworthy, format obsolescence makes migration mandatory, and permanence makes deletion policy a legal requirement, not an IT preference.",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Buying devices: treat capacity and speed as moving targets — whatever seems fast today will feel slow in a year or two (Koan 4), so buy for the workload, not the headline.',
        'Archiving family media: migrate formats every few years and verify old discs and drives still open — obsolescence, not decay, is the killer (Koan 3).',
        'Posting online: assume permanence (Koan 6) — the joke for friends is a record for the admissions officer, because deletion is unreliable once data escapes.',
        'Business and study: optimise for findability — first-page search placement is existence (Koan 3), and perfect copies mean leaked drafts never die (Koan 2).',
        'Reading the news: when a technology story feels sudden — a collapsed company, a banned platform — look for the unnoticed exponential behind it (Koan 5).',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Trusting the metaphors too far: bits 'explode', 'flow' and are 'stolen' only by analogy — dynamite, water and burglary metaphors each mislead somewhere, which is why the koans exist. Treating Moore's Law as physics: it was an engineering observation, and clock speed already broke it around 2001 (multicore carried the growth) — extrapolate with care. Reading exponential curves as linear ones: the epidemic is 'nothing' right up to the week it is everything. Believing 'the cloud' escapes the koans: remote storage is still disks somewhere, subject to permanence, subpoena and obsolescence — doubly so, since you neither control the copies nor the deletion policy.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Bit', def: "A single binary choice, 0 or 1 — the universal unit of information established by Claude Shannon's 1948 theory of communication." },
        { term: 'Koan', def: "The book's name for its seven paradoxical truths about bits: all just bits, perfection is normal, want amid plenty, processing is power, more of the same, nothing goes away, bits move faster than thought." },
        { term: 'Common carriage', def: "The legal duty of carriers (historically railroads and phone companies) to serve all customers without discrimination — a rule voice bits inherit but text bits, at the book's writing, did not." },
        { term: "Moore's Law", def: "Gordon Moore's 1965 observation that integrated-circuit density doubles roughly every two years — an empirical trend of engineering, not a natural law." },
        { term: 'Error detection and correction', def: 'Network mechanisms that check bits for transit damage and retransmit or fix them — the reason digital copies are perfect.' },
        { term: 'Exponential growth', def: 'Doubling at a steady rate: imperceptible for long stretches, then overwhelming — the shape of storage, processing and networking growth alike.' },
        { term: 'Non-rivalrous', def: "Property of ideas and bits: giving them to someone leaves you no poorer — Jefferson's point, and the root of the copyright struggles." },
        { term: 'Obsolescence', def: 'Loss of information through disappearance of the devices or formats needed to read it, rather than through decay of the data itself.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Why is a copy of a digital photograph identical to the original, bit for bit?',
          options: ['Because photographs are small', 'Because networks check bits for damage and correct or retransmit errors', 'Because computers never fail', 'Because photos are compressed before sending'],
          answer: 1,
          explain: 'Perfection is normal (Koan 2) not because machines are infallible but because error-detection-and-correction makes surviving copies exact — the book notes corrupted characters are rarer than meteor strikes.',
        },
        {
          q: "The Naral-versus-Verizon episode (2007) illustrates which koan?",
          options: ["It's all just bits — the law, not engineering, treats text and voice bits differently", 'Nothing goes away', 'Processing is power', 'Want amid plenty'],
          answer: 0,
          explain: 'Both are radio-wave bits, but common-carrier rules bound voice and not text messaging — Koan 1 colliding with not-yet-updated law.',
        },
        {
          q: 'A modern Domesday Book update became unreadable within decades while the 900-year-old original survives. This shows that:',
          options: ['paper lasts longer than electronics in every sense', 'information can vanish through obsolescence of the reading device, even when the data still exists', 'old data was less important', 'laser discs were defective'],
          answer: 1,
          explain: 'Koan 3 — want in the midst of plenty: the bits may survive while the means to read them disappears, so migration and readability, not just storage, preserve information.',
        },
        {
          q: "Kodak's record 1997 stock followed by its 2007 collapse teaches that exponential change:",
          options: ['arrives with clear warnings', 'is smooth in reality but appears sudden — small early signals deserve early responses', 'only affects camera companies', 'always takes exactly twenty years'],
          answer: 1,
          explain: "Koan 5: like the book's epidemic, growth looks like nothing until the final doubling — 'Moore's Law moved faster than Kodak did' — so the next-to-last day is when half the harm could still be avoided.",
        },
      ] },
      { kind: 'callout', title: 'Where next', tone: 'insight', text: 'Grounding: Abelson, Ledeen and Lewis, Blown to Bits (2008), Chapter 1 "Digital Explosion" — The Koans of Bits, and the Shannon and Moore sidebars. The privacy, document, search, copyright and network lessons of this book each develop one koan in practical depth; the computational-thinking lesson supplies the algorithmic side of what "processing is power" means.' },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'dl-privacy-footprints-fingerprints',
    title: 'Privacy Lost, Privacy Traded: Footprints, Fingerprints and Little Brother',
    domain: 'Computing & AI',
    field: 'Digital Literacy',
    branch: 'Digital Citizenship',
    tier: 'core',
    concepts: [
      'Footprints versus fingerprints',
      'Cameras plus the web changed the meaning of public',
      'EXIF: the fingerprint inside every photo',
      'GPS: knowing where you are, wanted or not',
      'The privacy-for-convenience trade',
      'The mirror: leaks, breaches and lost records',
      'Little Brother and Big Brother',
      'Technology creates options — people decide',
    ],
    words: 2166,
    readMins: 11,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "Chapter 2 of Blown to Bits ('Naked in the Sunlight') opens with a physical distinction that the digital world has industrialised. Footprints are the trails we knowingly leave — the sand marks anyone could match to our shoes. Fingerprints are the traces we shed unconsciously — on every door and glass, without a thought. Online we leave both: electronic footprints, the data trails we intend (posts, uploads, messages), and electronic fingerprints, the trails we are unaware of (logs, location pings, telemetry, metadata). The computational-thinking lesson of this book covers the defence drills — phishing, malware, passwords — that protect the trails you know about; this lesson is about the other half of the book's argument: the fingerprints we never think about, the trade we knowingly make for convenience, and why the loss of privacy has no single villain to blame.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Most privacy advice fails because it targets only footprints: think before you post. The book's deeper point is that fingerprint trails — the ones no one thinks about — are the ones that monetise, identify and testify. Understanding where they come from (cameras, sensors, cards, apps) and what they are worth to others is what turns privacy from paranoia into a set of informed daily decisions. And the book refuses the easy story: technology did not steal our privacy; we traded it, transaction by transaction, mostly for things we genuinely wanted.",
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "Cameras plus the web changed the meaning of 'public'. A place was always theoretically public — but practically, only whatever witnesses happened to be there could see it. Cheap cameras in every pocket ended that. In December 2007 a man assaulting girls on Boston's transit system was photographed by his victim on her mobile; within hours the picture was on the web and local television, and within a day he was arrested — a happy ending that simultaneously demonstrates the darker capacity the authors call ubiquitous Little-Brotherism: we can all now be detectives, judges and corrections officers, with none of the checks those roles carry. In June 2005 a Korean subway rider who let her dog foul the train and refused to clean up was photographed, posted, identified, globally shamed as 'puppy poo girl' — and quit school; her minor misdeed, once forgettable, is now permanently searchable. Meanwhile Street View lets anyone in the world inspect any public street at leisure. None of these places was private — but cameras plus the web made 'public' mean globally visible and permanently archived, and the speed of dissemination creates presumptions of guilt no court would accept.",
      },
      {
        kind: 'para',
        text: "The fingerprint inside every photo. Digital cameras do not just record pixels; they embed metadata — EXIF, the Exchangeable Image File Format — alongside the image: shutter speed, aperture, make, model, orientation, date and time, and sometimes GPS coordinates. The book's case is perfect: when the last Harry Potter book leaked before its release, a fan photographed all its pages and posted them, presumably anonymous. He was wrong. The EXIF data of the posted images named his exact camera — a Canon Rebel 350D, serial number 560151117 — and anyone who had registered that camera, bought it by card or sent it for service could be matched to it. Every photo you share is a small affidavit about when, where and with what it was taken; the phone in your pocket adds precise location. Stripping or simply knowing about EXIF is basic digital hygiene — the same instinct that checks an email's sender before trusting it.",
      },
      {
        kind: 'para',
        text: "Knowing where you are, wanted or not. GPS — twenty-four satellites orbiting about 12,500 miles up, each broadcasting precisely timed signals — lets a receiver compute its position to within about 25 feet, a feature that made navigation a birthday-gift commodity. But the same capability runs in both directions. A friend-finding app shares your location because you chose to; a rental car with a radio transmitter reports you whether you chose to or not — the book tells of Ron Lee, charged 1,400 dollars instead of 150 by Payless in 2004 for driving outside the permitted region, tracked by the car he rented. Location is the highest-value fingerprint there is: it converts a trail of clicks into a trail of life — home, work, worship, clinic, protest — which is why location permissions deserve the strictest scrutiny of any setting on a phone.",
      },
      {
        kind: 'para',
        text: "The privacy-for-convenience trade — the book's central and least comfortable argument. We gave away privacy not through ignorance alone but through millions of small sensible trades. The toll-road transponder saves time and frustration; the state learns where and when you entered and left the highway, accurate to the second — information it could trivially use to compute and bill your speeding fines (no state does, yet). What does happen: transponder records have been subpoenaed hundreds of times in divorce, custody and employment cases. One lawyer's line: a father swears he is home every evening at five — 'you subpoena his E-ZPass and you find out he's crossing that bridge every night at 8:30. Oops!' The supermarket loyalty card is the same trade with a discount attached: the store pays you for your buying history — think of the full shelf price as a privacy tax, paid by anyone who wants their purchases kept private. None of these trades is irrational; the point of the koans-and-ledger view is simply that we should know we are trading, and what.",
      },
      {
        kind: 'para',
        text: "The mirror, and the leaks we do not choose. Fingerprint data exists in quantity because institutions collect it, and collected data leaks — sometimes by theft, sometimes by carelessness. The book's roll-call: a British tax office losing records of millions of families; the TJX breach exposing data about 45 million store customers; Scott Levine's Snipermail operation stealing over a billion personal records from the data broker Acxiom in 2003. Millions of identity-theft cases a year, at a cost in the tens of billions. The uncomfortable mirror-lesson: we cannot keep our data off other people's systems entirely, so the honest privacy strategy is threefold — shed fewer fingerprints than you must, prefer institutions with serious retention and security policies, and assume breach when weighing what any single system should hold about you.",
      },
      {
        kind: 'para',
        text: "Little Brother, Big Brother, and the choice we still have. The book separates two watching crowds. Little Brother is us: peers, employers, strangers with cameras and search engines — distributed, motivated by gossip, profit or justice, impossible to regulate directly. Big Brother is the state: camera networks, subpoenas, and — abroad — outright censorship, as when Myanmar's government ended its 2007 protest coverage by seizing the phone towers. Against both, the book insists on its thesis: information technology did not cause the end of privacy, any more than cars caused teen recklessness — technology creates opportunities and risks, and people, as individuals and societies, decide how to live in the changed landscape. Look at the gadgets, yes; look at those who protect and help us; and take a good look in the mirror. Privacy loss is a messy problem with no single answer, so we reason one piece at a time: which trail, traded for what, with whom keeping it, under what retention policy.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a student shares campus life on a public account and uses a transit card, a food-court loyalty card and default phone settings. Run a fingerprint audit — what trails exist, which are controllable, what changes?',
        'Recall the governing ideas: fingerprints are the unconscious trails (EXIF, location, card logs); the trade is acceptable when informed; Little Brother means any stranger can correlate public data; deletion is unreliable (Koan 6).',
        "Apply: photos carry camera/phone model, time and often GPS — enable 'remove location' or strip EXIF before sharing anything that reveals a routine. The transit and loyalty cards log times and places — keep them (the discount or access is worth it, say), but know the logs exist and could be requested in a dispute. App permissions: grant location 'while using', not 'always'. One post audit: anything that reveals home address, class schedule or workplace pattern gets deleted — and assume copies survived anyway.",
        'State the result: the trails that remain are deliberate trades with known keepers, not accidents. The account is still public, but every fingerprint on it is one the student chose to leave — which is the entire achievable goal of personal privacy management.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Sharing media: check EXIF before posting images of documents, homes or children; most platforms strip it, direct file sharing does not.',
        'Phone hygiene: audit location, contacts, microphone and photo permissions quarterly — each is a fingerprint tap that should be off by default.',
        'Loyalty and access cards: use them knowingly — the discount is a data purchase, and the log may surface in a dispute.',
        'Family conversations: teach the permanence rule early — a fifteen-second post can be a lifelong record (puppy poo girl), because deletion never reaches the copies.',
        'Sensitive work — journalism, law, medicine, activism: strip metadata from published files, and assume every record system you touch can be subpoenaed, stolen or merged.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "'I have nothing to hide' — the fingerprint economy monetises and misidentifies the innocent (the RIAA's lawsuit era, covered in this book's copyright lesson, caught families without computers); hiding is not the only thing at stake. Deleting a post and believing the trail is gone — screenshots, caches and backups are Koan 6 in action. Assuming privacy loss needs a hacker — most trails are created by ordinary convenience features used as designed. Assuming the camera is just a camera, the card is just a card, the car is just a car — in a bit-world, every one of them is also a sensor with a database. And the reverse error: concluding privacy is dead and choices are pointless — the book's whole argument is that the trade is ours to make, piece by piece.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Footprint', def: 'A data trail left intentionally — posts, uploads, messages; the visible layer of your online presence.' },
        { term: 'Fingerprint', def: 'A data trail shed unconsciously — logs, metadata, location pings, card swipes; invisible to you, valuable to others.' },
        { term: 'EXIF', def: 'The Exchangeable Image File Format metadata embedded in photos: camera settings, timestamp, sometimes serial number and GPS coordinates.' },
        { term: 'GPS', def: 'The satellite positioning system (24 satellites, ~12,500-mile orbits, ~25-foot accuracy) behind both navigation and unasked-for location tracking.' },
        { term: 'Little Brother', def: 'Distributed peer surveillance: everyone with a camera, a search engine and a motive — no warrant required.' },
        { term: 'Big Brother', def: 'State surveillance and control, from camera networks to the seizure of phone towers seen in Myanmar, 2007.' },
        { term: 'Privacy tax', def: "The book's framing of the price paid for keeping habits private: the full price without the loyalty discount, the toll booth without the transponder." },
        { term: 'Data breach', def: 'Unintended exposure of collected data — by theft or mismanagement (TJX 45 million customers; Acxiom a billion records) — the mirror-side of collection.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A toll-transponder record of a highway trip is best classified as:',
          options: ['a footprint, because you chose to get the transponder', 'a fingerprint — a trail shed unconsciously while doing ordinary business', 'not personal data at all', 'a breach, because the state keeps it'],
          answer: 1,
          explain: "You chose the convenience, not the record-keeping: the trail is a fingerprint in the book's sense — unconscious, routine, and (as hundreds of custody cases show) later legible and subpoenaable.",
        },
        {
          q: 'How was the person who photographed the unreleased Harry Potter book identified?',
          options: ['He signed the uploads', 'EXIF metadata embedded the camera make, model and serial number', 'The publisher traced his Wi-Fi', 'He confessed'],
          answer: 1,
          explain: 'The posted images carried EXIF naming a Canon Rebel 350D with its serial number — registration, payment or service records could complete the identification. Every photo is also a document about its maker.',
        },
        {
          q: "The book's position on why privacy declined is that:",
          options: ['technology made privacy impossible', 'governments outlawed privacy', 'technology created opportunities and risks, and people and societies chose how to trade — mostly for convenience', 'only criminals lose privacy'],
          answer: 2,
          explain: "'Look in the mirror': transponders, loyalty cards and always-on phones were accepted trade by trade. Blaming the gadgets alone misses the decisions — which is why the choices are still ours to remake.",
        },
        {
          q: 'Deleting an embarrassing post from your public account:',
          options: ['removes it everywhere, since you posted it', 'removes your copy — screenshots, caches, archives and backups are outside your reach (nothing goes away)', 'is illegal for others to keep', 'works if done within 24 hours'],
          answer: 1,
          explain: 'Koan 6: once data escapes into the network of networks there is no getting it back; management is about what you release, not what you retract.',
        },
      ] },
      { kind: 'callout', title: 'Where next', tone: 'insight', text: 'Grounding: Abelson, Ledeen and Lewis, Blown to Bits (2008), Chapter 2 "Naked in the Sunlight" — Footprints and Fingerprints, Smile While We Snap!, Knowing Where You Are, Why We Lost Our Privacy, Little Brother Is Watching. The threats-and-defences taxonomy (phishing, malware, identity theft, 2FA) lives in this book\u2019s computational-thinking lesson; the copyright lesson develops how fingerprints powered a decade of lawsuits.' },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'dl-document-metadata-ghosts',
    title: 'Ghosts in the Machine: What You See Is Not What the Computer Knows',
    domain: 'Computing & AI',
    field: 'Digital Literacy',
    branch: 'Digital Citizenship',
    tier: 'core',
    concepts: [
      'The WYSIWYG illusion',
      'The Calipari report: redaction that failed',
      'Proper redaction and its trade-offs',
      'Steganography versus cryptography',
      'Representation determines what can be done',
      'Disk anatomy: blocks, chains and the index',
      'Deletion is replacement, not erasure',
      'The 158-drive lesson and disk hygiene',
    ],
    words: 2236,
    readMins: 11,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "Office workers love WYSIWYG — what you see is what you get: edit the document on the screen, print it, and it looks the same. The illusion is productive but dangerous, because what is on the screen is a rendering produced from codes — and the codes contain a great deal the rendering never shows. Chapter 3 of Blown to Bits ('Ghosts in the Machine') is devoted to what the authors call the secrets and surprises of electronic documents: the text a black bar fails to hide, the camera that tattles on its owner, the disk that remembers what its user deleted. The productivity-software lesson of this book teaches what the suite can do; this lesson teaches what the files quietly carry — the layer every exam-taker, employee and citizen needs before sharing, publishing or discarding anything digital.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Two of the most consequential security failures of the 2000s were not hacks at all: they were documents shared in good faith whose ghosts outlived their editors. Anyone who will ever redact a report, forward a draft, sell a laptop or post a photograph is one habit away from the same mistake — and the habit is learnable in an afternoon. The governing rule of this lesson is the authors\u2019 own: what you see is not what the computer knows.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "The redaction failure that made the lesson famous. On 4 March 2005 the Italian journalist Giuliana Sgrena, freed from captivity in Baghdad, was shot at by American soldiers at a checkpoint; Italian intelligence officer Nicola Calipari was killed. The American government produced a 42-page report exonerating its soldiers, and — because it contained militarily sensitive material — released it with passages blacked out. In another era the censor would have used a felt marker and a photocopier; this time the bars were drawn electronically, with a PDF 'highlighter tool' recoloured black, and the file was posted to a public website. An Italian blogger guessed that the bars were overlays and the underlying text still lived in the document; with ordinary office software he stripped them and published the full report — troop positions, rules of engagement, the lot. The same mistake had already caught two major newspapers: the New York Times in 2000 released PDFs of a secret CIA history of the 1953 Iran coup with operatives\u2019 names recoverable beneath the bars, and the Washington Post in 2002 published the Washington snipers\u2019 demand letter the same way. A black bar on the screen is a drawing; the text under it is data. If the data ships, the drawing is a poster.",
      },
      {
        kind: 'para',
        text: "Doing it right, and what it costs. Real redaction means destroying the text, not covering it: purpose-built tools (the book names Redax, used by government agencies) delete the underlying content, and Acrobat's security features can prevent alteration entirely. The clumsy but certain fallback is to print the page, black it out physically, and scan it — the result is an image of black-and-white dots with no text layer to recover. But the authors are careful about the cost of that fallback: a rasterised page can no longer be searched or copied, and — crucially — it can no longer be read aloud by the software that vocalises documents for visually impaired readers. Security, searchability and accessibility sit on one sliding scale; the professional skill is choosing the point on it deliberately, then verifying the result by attempting to copy text from under every bar.",
      },
      {
        kind: 'para',
        text: "Documents are not the only chatty files. Digital photographs embed EXIF metadata — the Harry Potter pre-release photographer was identified not by his writing but by the camera serial number his images carried (the privacy lesson develops this fully). Word-processor files carry author names, revision histories, comments and embedded objects; the 'track changes' feature that makes collaboration possible also archives every earlier draft inside the file it accompanies. And hiding can be deliberate: steganography — from the Greek for 'covered writing' — is the art of sending a secret message in imperceptible plain sight. Cryptography assumes the adversary will intercept the message and tries to make it unreadable; steganography assumes the message will look too innocent to intercept at all. The book's ancestors: a 1917 German telegram whose opening words ('PRESIDENT'S EMBARGO RULING SHOULD HAVE IMMEDIATE NOTICE...') carried the acrostic PERSHING SAILS FROM N.Y. JUNE 1; a Renaissance occult text, Trithemius's Steganographia (1462-1516), whose spirit conjurations hid messages in their initial letters; a love letter whose final paragraph is set in white font, invisible on white background; and a text whose hidden bits ride in the choice of words themselves — in the book's example, consonant-initial words encode 0 and vowel-initial words encode 1, spelling an ASCII letter across a harmless-looking sentence. Modern versions hide data in the least-significant bits of image pixels, where changes are below human perception — which is why 'an image is just an image' is exactly the wrong assumption.",
      },
      {
        kind: 'para',
        text: "Representation determines what can be done. Why did image-spam defeat every filter of the 2000s? Because the filters read character codes, and the spam was a picture of text — pixels where the filters expected ASCII. The characters look identical on screen while being utterly different underneath: one representation supports search, copy and filtering; the other supports none of them until optical character recognition (OCR) converts the picture back into codes. The principle generalises far beyond spam — it is Koan 1 (it's all just bits) applied practically: what you can do with data depends on how it is represented, and two representations that look identical on screen can differ totally underneath. When you screenshot a conversation to 'preserve' it, you are converting codes into pixels — losing searchability and gaining a format that flatters no analysis.",
      },
      {
        kind: 'para',
        text: "The disk underneath the files. A disk is divided into blocks — the pages of the book analogy, each a few hundred bytes, each addressable. Files larger than one block are stored not contiguously but as a chain: each block carries a piece of the document and the address of the next block, like a magazine article continued across non-consecutive pages. An index file records where every file's chain begins, the way a book's index sits in a known place. Deletion in this world is not erasure: 'all that ever happens is replacement of some bits by others'. Deleting a file returns its blocks to a pool of available space; the data persists in the pool until new writing overwrites it — and the operating system makes no promise about when that happens. The ghost of the file outlives the file.",
      },
      {
        kind: 'para',
        text: "The 158-drive experiment. Two MIT researchers bought 158 used disk drives on the open market and recovered what they could. Most sellers believed they had cleaned their disks: files dragged to the trash, or a Windows FORMAT command with its dire warning. Yet only 12 of the 158 drives had been truly sanitised. With methods 'well within the technical capabilities of today's teenagers', the researchers recovered credit-card numbers from 42 drives and — from a single ATM machine's disk — 2,868 bank account numbers with balances; from home machines, love letters, medical complaints, pay grievances, enough personal data to identify and contact the owners. The sellers had done what they thought was right, and still released their digital drawers onto the open market. The working defences follow directly: encrypt the whole disk (then a stolen or resold drive yields ciphertext without the key), use secure-erase utilities that overwrite every block, or — for the truly sensitive — destroy the platters. The book adds the cloud sidebar: letting a service keep your documents sidesteps disposal problems (their backups beat yours) but substitutes theirs — subpoenas reach the provider, and the provider's jurisdiction becomes your privacy's jurisdiction.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a student council has a PDF of exam-paper drafts with half the questions blacked out, to share with a school magazine. Do it so the redaction cannot be reversed.',
        'Recall the governing ideas: screen-covering is not redaction; text data survives under overlays; rasterising destroys the text layer but also search and screen-reader access.',
        'Apply: first test the dangerous way — open the file, try to select and copy text beneath the black boxes; if text copies out, the file is a Calipari report waiting to happen. Then use a true redaction tool that removes the underlying text, or print-and-rescan so the pages become images with no text layer at all. Verify by attempting to copy under every mark and searching the file for a known redacted word.',
        'State the result: the shared file carries only what it shows — with the documented trade-off that it can no longer be searched or read aloud, which is acceptable for a handout and would not be for an archival document. The verification step, not the tool, is what guarantees the outcome.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Publishing or forwarding documents: strip author fields, comments and tracked changes, or export a clean copy — the draft history is ghost text in the file.',
        'Selling or donating devices: encrypt-then-wipe or secure-erase; a factory reset is not a promise, and the 158-drive study is what good faith looks like when it fails.',
        'Sharing photographs: remember EXIF (camera, time, often place) travels with the pixels; strip it when the context matters more than the metadata.',
        'Verifying leaked or official PDFs: try selecting text under any censor bar before believing a document was properly redacted — journalists and courts now do this as routine.',
        'Everyday correspondence: treat any copy of a document as potentially carrying invisible layers — read the file, not just the render.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Drawing black boxes and believing the text is gone — the Calipari, NYT and Post failures were all one habit repeated. Trusting delete, or even format: deletion returns blocks to a pool; only overwrite or encryption truly retires data. Assuming a screenshot or scanned copy is 'cleaner' — it is different, not safer: you lose the text layer and keep everything visible. Hiding text in white font and calling it security: steganography defeats casual readers, not anyone who inspects the file. And the inverse superstition: treating every file as unknowable — the ghost-layer inventory in this lesson (render, metadata, text layer, disk blocks) is finite and checkable.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'WYSIWYG', def: "'What you see is what you get' — the screen-as-print illusion that hides the difference between a document's rendering and its underlying codes." },
        { term: 'Metadata', def: 'Data about data, carried inside files: author fields, revision history, camera settings, timestamps, coordinates.' },
        { term: 'Redaction', def: 'The permanent removal of sensitive text from a released document — distinct from covering it with a visual overlay, which leaves the text recoverable.' },
        { term: 'Steganography', def: 'Hiding a message so its very existence goes unnoticed (acrostics, white text, pixel least-significant bits) — contrast with cryptography, which protects a visible message\u2019s content.' },
        { term: 'OCR', def: 'Optical character recognition: converting images of text into character codes — the bridge between the pixel and code representations.' },
        { term: 'Disk block', def: 'The unit of disk storage (a few hundred bytes, like a book page); files live as chains of blocks linked by continuation addresses.' },
        { term: 'File index', def: 'The disk file recording where each file\u2019s chain begins — the reason the system can find a document scattered across the disk.' },
        { term: 'Secure erase', def: "Overwriting every block of a drive so no ghost data survives resale or disposal — the defence most of the 158 drives' sellers lacked." },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Why did the black bars in the Calipari report fail to hide anything?',
            options: ['The file was encrypted badly', 'The bars were visual overlays; the text beneath them remained in the document', 'The PDF was an old version', 'The blogger guessed the password'],
            answer: 1,
            explain: "A recoloured highlighter tool draws on the render; the codes still carry the words. Real redaction removes the text itself — the NYT (2000) and Washington Post (2002) repeated the identical mistake.",
          },
          {
            q: 'What actually happens when a file is deleted on a disk?',
            options: ['Its bits are zeroed immediately', 'Its blocks are returned to a pool of free space and keep their data until overwritten', 'The file moves to the cloud', 'The index grows larger'],
            answer: 1,
            explain: "The book's rule: there is no erasure on a disk, only replacement. Deletion is an accounting operation — which is why the MIT researchers recovered data from most of the 146 not-truly-sanitised drives.",
          },
          {
            q: 'Steganography differs from cryptography in that steganography aims to:',
            options: ['make a message unreadable to interceptors', 'hide the existence of the message itself', 'compress the message', 'sign the message'],
            answer: 1,
            explain: 'Crypto assumes interception and protects content; stego makes the communication look innocent (the PERSHING acrostic, white-font text, pixel-level hiding) so it is never intercepted at all.',
          },
          {
            q: 'Image-based spam defeated the text filters of its era because:',
            options: ['it used stronger encryption', 'filters read character codes while the spam was pixels — a different representation of the same visible text', 'it arrived in smaller pieces', 'email cannot filter attachments'],
            answer: 1,
            explain: 'Representation determines what can be done with data: identical on screen, opposite underneath — and OCR is the tool that eventually let filters read pictures of words.',
          },
        ],
      },
      { kind: 'callout', title: 'Where next', tone: 'insight', text: 'Grounding: Abelson, Ledeen and Lewis, Blown to Bits (2008), Chapter 3 "Ghosts in the Machine" whole — What You See Is Not What the Computer Knows, Representation Reality and Illusion, Hiding Information in Images, The Scary Secrets of Old Disks. The privacy lesson develops EXIF; the productivity lesson owns the suite features whose files carry these ghosts.' },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'dl-web-search-bits-bazaar',
    title: 'Search Engines and the Bits Bazaar: How Results Are Made and Why It Matters',
    domain: 'Computing & AI',
    field: 'ICT & Digital Literacy',
    branch: 'ICT',
    tier: 'core',
    concepts: [
      'From library to directories to bazaar',
      'The fall of hierarchy',
      'Brokers, not truth-suppliers',
      'The seven steps of a search engine',
      'Spiders, robots.txt and the index',
      'PageRank: links as votes',
      'Search is power — three kinds',
      'KinderStart: ranking as opinion with stakes',
    ],
    words: 2067,
    readMins: 10,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "In the beginning, Chapter 4 of Blown to Bits reminds us, the web was imagined as a library: a modest collection of pages, mostly from businesses and universities, that directories like printed Yellow Pages sorted by hand into categories — human editors deciding what went in, what was left out. That world died of its own success. The web grew too big and too unstructured for any outline: billions of pages, no master plan, no way to judge content from a URL. The authors' example is perfect — any sensible encyclopedia has an entry for cows and an entry for the moon, but if you have forgotten the nursery rhyme about the cow jumping over the moon, neither entry rescues you; type both words into a search engine and you have it in a blink. Hierarchy fell, and search became the paradigm — with the authors' warning attached: 'Search is a new form of control over information.' The web stopped being a library and became what they call a bits bazaar — a chaotic marketplace where producers and consumers seek each other out and morph into each other — and search engines became its brokers.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Search is the first door to knowledge for most people most of the time — and a door with a gatekeeper behind it. Understanding how results are manufactured (crawl, index, rank, monetise) converts the invisible machine into a tool you can out-manoeuvre and distrust appropriately. The exam-facing search skills — quoted phrases, site: filters, evaluating authority — live in this book's ICT lesson; this lesson supplies the machinery underneath, because knowing what ranking can and cannot measure is what separates a searcher from a server of results.",
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "The seven steps. The authors personify a generic search engine as 'Jen' to strip away the mystique. Three steps run forever in the background, whether or not anyone is searching: (1) gather information — software spiders (crawlers, a species of bot: programs that endlessly perform repetitive information-gathering) roam the web by following links, reading each page's HTML not to render it but to index its words and harvest the next URLs, skipping or obeying whatever a site's robots.txt file declares off-limits, and revisiting pages at a frequency the company treats as a trade secret — which is why a Craigslist ad may sell before any engine ever sees it, and why a deleted page can haunt results until the next visit; (2) keep copies — a duplicate of a large part of the web sits on the company's disks (Koans 2 and 6, working quietly); (3) build an index — the map of which words appear on which pages. Four steps then run in the foreground, in milliseconds: (4) understand the query — language is ambiguous ('red sox pitchers' is a puzzle if you never grew up with baseball); (5) determine relevance of each candidate page; (6) rank the relevant ones; (7) present results — in a form useful to you and, not coincidentally, to the advertising business.",
      },
      {
        kind: 'para',
        text: "The index has edges, and they matter. Speaking to advertisers in 2005, Google's CEO Eric Schmidt estimated the world held about 5,000 terabytes of information while only about 170 terabytes were indexed — roughly three per cent; other estimates put the indexed fraction far lower still. Behind logins nothing is crawled; sites can forbid crawlers; some pages vanish before any spider returns. The lesson is not that search is bad but that the index is an editorial act: whatever was skipped in step 1 cannot appear in step 7. The 'invisible web' is not a conspiracy — it is the visible boundary of a finite machine, and a skilled searcher knows when to leave the engine (databases, archives, portals, libraries) rather than conclude that nothing exists.",
      },
      {
        kind: 'para',
        text: "Ranking: the invention that won the era. Relevance alone could not order a web where thousands of pages match a query equally well. Google's founders — Sergey Brin and Larry Page, then Stanford graduate students — added a measure of importance built from the web's own structure: PageRank, 'a measure of the importance of each page that takes into account the external references to it — a World Wide Web popularity contest'. The idea borrows from scientific citation: work that many others cite tends to matter. And the recursion is the genius of it: a link from an important page counts more than a link from an unimportant one — a seemingly circular definition, resolvable, as the authors say, 'with a bit of mathematics and a lot of computing power' (the eigenvalue mathematics lives in this library's mathematics book; the patent is US 6,285,999). Two footnotes of history worth keeping: the 'Page' in PageRank is Larry Page, not a web page; and word choice shifts results wholesale — the book's test query 'schizophrenia drugs' returned a different first page than 'schizophrenia medicines', and even word order mattered. No human at the engine judges truth; the ranking is a mechanised aggregation of millions of linking opinions.",
      },
      {
        kind: 'para',
        text: "Search is power — three kinds. For the user, search is the power to find. For whoever controls the engine, it is the power to shape what is seen: use Google in one country and democracy 'finds' different results than in another; search a site for retirement plans and the competitor's plans 'do not exist'. And for the engine itself there is the power of knowing what the world wants to know: every query is logged, and the aggregate — Google's annual 'Zeitgeist' report topped its 2007 'who is' list with God, with Satan tenth and the guitarist Buckethead sixth — is a census of curiosity no society ever had. The individual version is sharper still: your queries, tied together over time, are among the most revealing fingerprints a person sheds (the privacy lesson's theme, wearing a different sensor). The broker model completes the picture: engines supply no truth and verify no claims — they succeed by making connections we like, which is exactly why ranking can quietly drift from measuring importance to manufacturing attention.",
      },
      {
        kind: 'para',
        text: "KinderStart and the stakes of an opinion. On 19 March 2005 Google zeroed the PageRank — on its 0-to-10 scale — of KinderStart, a children's-resources directory it judged to have 'little or no original content'. KinderStart's traffic fell seventy per cent, and it sued, alleging among other things that effective invisibility violated its free speech. Google's defence: ranking is opinion, the exercise of editorial judgement not for courts to second-guess. The authors give the case a full page because it crystallises the era: a number computed mechanically can decide whether a business exists (Koan 3), yet no one wrote that verdict — an algorithm aggregated the web's linking behaviour, and no human at the company read the pages. Whether you find that chilling or admirable, the practical takeaway is the same: understand what the machine rewards, diversify how audiences can find you, and never confuse a ranking with a quality judgement.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a student researching a treatment must explain, in exam language, why two equally relevant pages ranked first and ninth — and how to probe the difference.',
        'Recall the governing ideas: relevance (do the words match) and ranking (importance from link structure) are separate steps; word choice and order change the candidate set; ads occupy their own slots by auction, not relevance.',
        'Apply: run the query both ways the book suggests — swap the two nouns and note the reshuffle; check whether the top page\u2019s title carries the exact query words (step 5) and how many reputable sites link to it (step 6); scan the page for signs of links-for-hire (blog rolls, link farms). Distinguish the ad slots from the organic results before reading anything.',
        'State the result: the student can now say precisely why the first result won — title match plus strong inbound links — and treat ninth place as unproven rather than disproven, then leave the engine for a curated database when the topic is niche. That two-paragraph explanation is the level of literacy this subject examines.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Study and research: treat ranking as importance, not truth — triangulate the top results, then descend past page one for anything that matters.',
        'Building anything public: structure pages with honest titles and headings, earn links by being linkable, and know that robots.txt and login walls shape what the world can find about you.',
        'Business and careers: first-page placement is existence (Koan 3) — which is why search-engine optimisation became an industry and why a de-ranking is an emergency, not a slowdown.',
        'Privacy: query logs are fingerprints — search in ways you would be content to see explained, and remember the Zeitgeist principle: aggregates talk.',
        'Civics: when a platform, a censor or an algorithm decides visibility, the debate is about the shaping power of search — recognise it in the news.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Believing the engine searches the live web when you ask — it searches its own prebuilt index, which can be hours or weeks stale. Believing everything is indexed — the book's arithmetic says a few per cent, and logins, robots.txt and crawl budgets fence off more. Reading rank as truth — the ranking aggregates links, not accuracy; nonsense that is well linked outranks careful prose. Ignoring ads — the top of the page is often auction, not algorithm. And the optimiser's sin, chasing the formula instead of the audience: the formula is a secret, adjusted constantly, and its only public warranty is that people like the results.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Spider / crawler', def: 'The bot that roams the web following links, reading pages to index them — the engine\u2019s step 1.' },
        { term: 'robots.txt', def: 'A file by which a site declares what crawlers may not index; reputable engines honour it.' },
        { term: 'Index', def: 'The engine\u2019s map of which words appear on which pages — searched instead of the web itself.' },
        { term: 'Relevance', def: 'How well a page\u2019s content matches the query — step 5, before importance is considered.' },
        { term: 'PageRank', def: 'Google\u2019s recursive importance measure: a page is important if important pages link to it (patent US 6,285,999; named for Larry Page).' },
        { term: 'Invisible web', def: 'Everything the index never reached: logins, forbidden paths, pages that vanished between crawls.' },
        { term: 'Bits bazaar', def: "The book's image of the web as a chaotic marketplace where engines broker connections rather than certify truth." },
        { term: 'Zeitgeist', def: 'The aggregate of what the world searches — proof that engines know what everyone wants to know.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'When you press search, the engine:',
            options: ['sends crawlers across the live web in real time', 'searches its own prebuilt index of pages gathered by spiders', 'asks every website directly', 'reads the whole internet once more'],
            answer: 1,
            explain: 'The background steps (gather, copy, index) run before your query; the foreground steps work on the index. This is why results can be stale and why a fresh page may not appear for days.',
          },
          {
            q: 'PageRank treats a link as:',
            options: ['a vote whose weight depends partly on the importance of the linking page', 'a payment to the search company', 'proof the linked page is accurate', 'a random recommendation'],
            answer: 0,
            explain: 'Links are votes, and important pages\u2019 votes weigh more — the recursive definition the authors say is resolved with mathematics and computing power. It measures importance, never truth.',
          },
          {
            q: "The book's 'schizophrenia drugs' versus 'schizophrenia medicines' experiment shows that:",
            options: ['engines translate queries', 'word choice changes the entire candidate and ranking set — search for the words the sources actually use', 'medical searches are censored', 'synonyms rank identically'],
            answer: 1,
            explain: 'Relevance runs on the words present; synonyms are not silently substituted (and even word order mattered). Choosing query words is a skill, not a formality.',
          },
          {
            q: 'KinderStart\u2019s traffic collapse after its PageRank was zeroed teaches that:',
            options: ['PageRank was a myth', 'a mechanical ranking is an opinion with life-or-death commercial stakes — so never depend on one channel for findability', 'Google broke the law', 'directories always rank zero'],
            answer: 1,
            explain: "Seventy per cent of traffic vanished overnight on an algorithmic judgement of 'little or no original content' — Koan 3 (unfindable = nonexistent) applied to a real business.",
          },
        ],
      },
      { kind: 'callout', title: 'Where next', tone: 'insight', text: 'Grounding: Abelson, Ledeen and Lewis, Blown to Bits (2008), Chapter 4 "Needles in the Haystack" — The Library and the Bazaar, The Fall of Hierarchy, It Matters How It Works (steps 1-7), Search Is Power, You Searched for WHAT?, Regulating or Replacing the Brokers. The eigenvalue treatment of PageRank lives in the mathematics book; the ICT lesson owns hands-on search technique.' },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'dl-copyright-balance-toppled',
    title: 'Who Owns the Bits? Copyright After Perfect Copies',
    domain: 'Computing & AI',
    field: 'Digital Literacy',
    branch: 'Digital Citizenship',
    tier: 'core',
    concepts: [
      'What perfect copies did to the balance',
      'Non-rivalrous property',
      'The automated enforcement pipeline',
      'When justice errs: the dolphin cases',
      'The NET Act: sharing becomes a crime',
      'DRM: code as the new lock',
      'Commons and licensing as the counter-balance',
      'The limits of property',
    ],
    words: 2041,
    readMins: 10,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "Copyright law was built for a world where copying was lossy and slow, and Chapter 6 of Blown to Bits ('Balance Toppled: Who Owns the Bits?') is the story of what happened when Koan 2 — perfection is normal — collided with it. Audio-tape copies were worse than originals and copies-of-copies worse still, so a teenager's dubbed cassette was tolerated: the copy market never threatened the original. Digital copies changed the economics overnight: every copy is identical, the notion of an 'original' dissolves, and the marginal cost of distribution falls to approximately zero while the cost of creating the first copy stays exactly as high as ever. The bargain at copyright's heart — give creators a limited monopoly so the public eventually gets a commons — assumed copies were hard. Bits made them free, and the balance toppled. The computational-thinking lesson of this book carries the legal furniture (India's Copyright Act 1957, fair dealing, Creative Commons, GPL); this lesson carries the story the book tells best — what enforcement, crime and technology did with the wreckage.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Every download, upload, stream and share is a copyright event, and the machinery watching them is automated, aggressive and — as the book documents with care — sometimes wrong. Understanding the enforcement pipeline, the criminal law that closed the 'no profit' loophole, and the licensing movement that rebuilt a balance is practical citizenship for anyone who creates, studies or works with media. It is also the clearest case study in this book of a koan reshaping law in real time.",
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "Automated crimes meet automated justice. When file-sharing networks made every user a distributor, the recording industry's trade association — the RIAA, representing publishers controlling over ninety per cent of US music distribution — built an enforcement line as automated as the infringement. Since 2003 it filed more than 26,000 lawsuits against individuals. The pipeline: MediaSentry, the industry's investigative firm, logs into peer-to-peer networks and scans shared folders; suspicious files send the computer's IP address to the anti-piracy group, which verifies a few songs, then sues 'John Doe' — the person behind that IP address; a subpoena forces the internet service provider to name the subscriber; a demand letter follows, averaging about 4,000 dollars, non-negotiable, with a payment website attached. The stakes explain the settlements: US statutory damages run at a minimum of 750 dollars per infringed song — up to 150,000 if the infringement is 'willful' — so the 4,000 songs on a 20-GB iPod carry a theoretical minimum of three million dollars, a thousand times their iTunes price. As the authors put it: automated crimes meet automated justice.",
      },
      {
        kind: 'para',
        text: "When the net catches dolphins. The pipeline's premise — an IP address is a person — is weak in a bit-world: several machines share one wireless network; providers reassign addresses; nothing proves who sat at the keyboard. The industry knew ('when you fish with a net, you sometimes catch a few dolphin', a spokeswoman shrugged) and the book names the dolphins: Tanya Andersen, an Oregon single mother on disability payments, sued for a million dollars over 1,200 tracks — her computer, examined at last by the RIAA's own expert, had never been used for illegal downloading, yet the pursuit pressed on for two years, even attempting a deposition of her eight-year-old daughter, until the case collapsed for want of proof; she then sued back. A Georgia family that owned no computer. A paralysed stroke victim sued for downloads made from Michigan. An 83-year-old woman who hated computers — and was deceased. The lesson is not that enforcement is illegitimate but that automated accusation without verification industrialises error, and that the presumption of innocence is worth defending precisely when the accuser's process is cheaper than the defence.",
      },
      {
        kind: 'para',
        text: "The loophole the law closed. American copyright crime historically required commercial motive: infringement for profit had been a crime since 1897, toughened through the twentieth century, but by 1992 a defendant had to act 'for the purpose of commercial advantage or private financial gain' — no profit, no crime. In December 1993 students at MIT found a campus workstation secretly running as a file-server bulletin board, relaying games and software to the whole internet; the case against the student operating it collapsed because nothing was sold. Congress answered with the NET Act — the No Electronic Theft Act of 1997 — which criminalised wilful infringement even with no commercial motive: sharing itself, above thresholds, became a federal crime. It was, the book notes, the first time the internet had triggered a significant criminal-copyright law, and it ended the era of assuming that only sellers were criminals. For the citizen: 'I didn't charge anyone' has been no defence for a generation — the honest defences are permission (licences) and the law's limited fair-dealing exceptions, never profitlessness.",
      },
      {
        kind: 'para',
        text: "Code as the new lock. Where lawsuits failed to keep pace, industry turned to technology: digital rights management (DRM) — the book's 'forbidden technology' — builds the control into the file or device itself, so a purchased song refuses to play on a rival's player and an e-book can be revoked after sale. The authors are precise about what changed: law had always regulated what people did with copies; code now regulates what the bits can do, without a courtroom, a warning label or an exception for fair dealing. Meanwhile sharing went decentralised (no central server to shut) and the arms race settled into the industry pattern the twenty-first century knows: streaming services ultimately out-competed piracy on convenience — a reminder that the balance is rebuilt commercially as well as legally.",
      },
      {
        kind: 'para',
        text: "The counter-balance: commons, licensing and limits. The book ends the chapter where the copyright wars actually ended up: with attempts to replace the toppled bargain rather than only to police it. It highlights Lawrence Lessig's Free Culture (2004) — the case that overbroad restrictions jeopardise a vibrant public culture — and the Google Books dispute (from 2004): Google scanned library books to build an 'enhanced card catalog', publishers and authors sued, and the fight was over whether indexing-without-permission is freeloading or a new card catalogue. Beneath both runs the book's deeper point about the limits of property: when land held streams, law had to decide whether the owner owned the water; when 'both parcels are blown to clouds of bits, the clouds swirl together — the property lines that would separate them vanish in a fog of network packets'. The working balance the digital citizen meets daily is the licensing commons: Creative Commons licences let creators grant permissions in advance; free and open-source licences (the GPL family) built the software layer this very book's library runs on; paid streaming and library lending are the commercial settlements. Choosing a licence for your own work — and reading one before using someone else's — is the participation this era actually asks for.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a student film club wants background music, images and clips for a public screening. Classify every option and pick a defensible set.',
        'Recall the governing ideas: no-profit is no defence (NET Act); the licence is the permission (CC/FOSS lesson ties); enforcement is automated and can misfire, but that is not a plan; the commons is the intended path.',
        'Apply: inventory each asset — (a) a commercial pop track: needs a synchronisation licence the club cannot get; reject. (b) a Creative Commons BY track: permitted with attribution as the licence specifies; keep, with credits. (c) a ripped clip from a film: infringing even in a free event; replace with public-domain footage. (d) the club\u2019s own recording: theirs to licence — publish it under CC BY so others can reuse with credit.',
        'State the result: the screening runs entirely on licensed, attributed or owned material, and the club\u2019s own work joins the commons. The audit took twenty minutes and replaced the myth of the harmless freebie with a documented chain of permissions.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Coursework and publishing: use CC-licensed images with attribution, quote within fair dealing, and keep the licence screenshot with your notes as evidence of permission.',
        'Creators: licence deliberately — CC options publish your permissions in machine-readable form, which is how your work gets found, used and credited on your terms.',
        'Organisations: audit background media (music on hold, stock photos, fonts) — the automated-enforcement lesson applies to institutions more than to teenagers now.',
        'Policy literacy: when the news debates takedowns, DRM, streaming economics or AI training data, you are watching the balance-toppled argument continue — recognise the players.',
        'Device literacy: DRM explains why bought media can vanish when a store closes; prefer formats and sellers whose licences survive the vendor.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "'I didn't sell it, so it's legal' — the NET Act removed the profit requirement in 1997; sharing is the crime, not selling. 'Everyone does it' — ubiquity never entered the statute, and the enforcement pipeline works by example, catching a few dolphins publicly. Confusing free-of-charge with freely-licensed: a zero-price download without permission is infringement with extra steps. Believing deletion undoes distribution (Koan 6) or that anonymity holds — the EXIF and IP lessons of this book exist because those assumptions fail. And the mirror-image error: treating all copying as theft — the book's whole argument is that the balance between creator and commons is genuinely hard, which is exactly why licences, exceptions and honest attribution exist.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Copyright balance', def: 'The bargain granting creators limited exclusive rights so the public ultimately receives a commons — the equilibrium perfect copies destabilised.' },
        { term: 'Statutory damages', def: 'Fixed per-act penalties (US: 750 dollars minimum, up to 150,000 for wilful infringement) that make enforcement economics brutal regardless of actual harm.' },
        { term: 'NET Act', def: 'The No Electronic Theft Act (1997): US federal law criminalising wilful copyright infringement without any commercial motive — the internet\u2019s first criminal-copyright statute.' },
        { term: 'Peer-to-peer', def: 'File-sharing architecture where every participant both downloads and serves — making each user a distributor and enforcement a driftnet.' },
        { term: 'DRM', def: 'Digital rights management: code embedded in media or devices that controls uses after purchase — law\u2019s replacement by engineering.' },
        { term: 'Creative Commons', def: 'The licensing commons: standardised grants (attribution, share-alike, no-derivatives, non-commercial) that let creators permit uses in advance.' },
        { term: 'Public domain', def: 'Work owned by no one and usable by everyone — the commons endpoint when rights expire or are waived.' },
        { term: 'Fair dealing', def: "The limited statutory exceptions (study, review, and so on) that keep copyright from swallowing ordinary life — narrower than America's fair use." },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The RIAA lawsuit pipeline identified defendants by:',
            options: ['their email addresses', 'the IP address of the computer caught sharing, resolved to a name via the ISP', 'credit-card receipts', 'the filenames they uploaded'],
            answer: 1,
            explain: 'MediaSentry scanned shared folders, the IP address anchored the lawsuit against John Doe, and a subpoena made the ISP reveal the subscriber — a chain the book shows is unreliable (shared networks, reassigned addresses).',
          },
          {
            q: 'The NET Act (1997) mattered because it:',
            options: ['legalised file sharing', 'criminalised wilful infringement even without any commercial motive', 'raised artist royalties', 'created the RIAA'],
            answer: 1,
            explain: 'After the 1993-94 MIT bulletin-board case collapsed for want of profit, Congress removed the profit requirement — sharing itself became a federal crime for the first time.',
          },
          {
            q: 'Tanya Andersen\u2019s case is the book\u2019s evidence that the enforcement pipeline:',
            options: ['never makes mistakes', 'could pursue even a person its own expert cleared — automated accusation industrialises error', 'only sued guilty people', 'was halted by courts immediately'],
            answer: 1,
            explain: "Her drive contained no infringing downloads by the RIAA's own expert's finding, yet the suit pressed for two years — the 'dolphin' problem of fishing with a net.",
          },
          {
            q: 'The counter-balance the book sees rising alongside enforcement is:',
            options: ['cheaper lawsuits', 'commons and licensing — CC-style advance permissions and open licences that rebuild the bargain', 'stronger DRM everywhere', 'abolishing copyright'],
            answer: 1,
            explain: 'Lessig\u2019s Free Culture, the CC licensing commons and even the Google Books indexing fight all seek a new balance between creators and the public — the path the digital citizen joins by licensing and attributing honestly.',
          },
        ],
      },
      { kind: 'callout', title: 'Where next', tone: 'insight', text: 'Grounding: Abelson, Ledeen and Lewis, Blown to Bits (2008), Chapter 6 "Balance Toppled" — Automated Crimes—Automated Justice, NET Act Makes Sharing a Crime, The Peer-to-Peer Upheaval, Authorized Use Only, Forbidden Technology, Copyright Koyaanisqatsi, The Limits of Property. Licence mechanics (CC/GPL) live in this book\u2019s computational-thinking lesson; doctrine lives in the law book\u2019s intellectual-property lesson.' },
    ],
  },
  {
    id: 'ict-computers-internet-digital-initiatives',
    title: 'ICT: From Abbreviations to India\u2019s Digital Higher-Education Initiatives',
    domain: 'Computing & AI',
    field: 'ICT & Digital Literacy',
    branch: 'ICT Basics',
    tier: 'core',
    concepts: [
      'ICT versus information technology',
      'Hardware, software and storage basics',
      'Common abbreviations and terminology',
      'Internet versus intranet',
      'E-mail mechanics and etiquette',
      'Audio- and video-conferencing',
      'SWAYAM and the four-quadrant model',
      'SWAYAM PRABHA, NPTEL, DIKSHA, NDL, e-PG Pathshala, NAD',
      'E-governance models',
      'ICT in research workflow',
    ],
    words: 1428,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'The ICT unit tests operational literacy: the abbreviations a teacher meets daily, the difference between an intranet and the internet, the etiquette of e-mail and conferencing, and — India-specific — the alphabet soup of national digital-education platforms. Five or so questions per paper, most of them one-mark classification items. The risk is over-familiarity: candidates mix up SWAYAM (courses) with SWAYAM PRABHA (TV channels) or DIKSHA (school teachers) with the National Digital Library (all readers). This lesson separates the platforms, then wires the underlying computing vocabulary.',
      },
      {
        kind: 'para',
        text: 'Definition first. Information and communication technology (ICT) is the extension of information technology (IT) that stresses unified communications and the convergence of telephony, broadcast media, audio-visual systems and computer networks — IT handles information (compute and store), ICT adds the communication layer that moves it. For a teacher or researcher the practical scope is: devices and their parts, networks and protocols, the services that ride them (web, mail, conferencing, cloud), and the institutional platforms that deliver education and governance.',
      },
      { kind: 'heading', text: 'Hardware, software and the abbreviation lexicon' },
      {
        kind: 'para',
        text: 'Hardware basics the unit assumes: the CPU (central processing unit — the arithmetic and control core, with ALU and control unit inside), memory in two roles — RAM (random access memory, volatile working memory) and ROM (read-only memory, non-volatile firmware) — plus input/output devices and external storage. Storage runs HDD (magnetic) \u2192 SSD (flash) \u2192 optical and USB media; capacity units climb bit \u2192 byte (8 bits) \u2192 KB \u2192 MB \u2192 GB \u2192 TB. Software splits into system software (operating systems — Windows, Linux, Android; drivers, utilities) and application software (browsers, office suites, LMS); open-source licences make software free to use, modify and redistribute, proprietary licences do not.',
      },
      {
        kind: 'para',
        text: 'The recurring abbreviation set: HTTP/HTTPS (web transfer protocols — the S is TLS-encrypted), FTP (file transfer), TCP/IP (the internet\u2019s core transport/internetworking protocols), URL (uniform resource locator — the web address), WWW (the hypertext service on the internet), DNS (the domain-name system translating names to IP addresses), ISP (internet service provider), LAN/WAN/MAN (local, wide, metropolitan area networks), Wi-Fi (wireless LAN standard family), Bluetooth (short-range pairing), VPN (virtual private network), HTML (page markup), PDF (portable document format), OTP (one-time password), ICT\u2019s own institutional acronyms (below). File-size and speed arithmetic — a 2 GB file over a 10 Mbps link — occasionally appears as an aptitude item.',
      },
      { kind: 'heading', text: 'Internet, intranet, e-mail and conferencing' },
      {
        kind: 'para',
        text: 'The internet is the global public network of networks speaking TCP/IP; the intranet is an organisation\u2019s private version of the same technology, firewalled for members only, often carrying the institution\u2019s portals, policies and internal applications. (An extranet extends an intranet selectively to partners.) The web is not the internet — it is one service (hypertext over HTTP) among many (e-mail, DNS, file transfer). Browsers render pages; search engines index them (search tips: exact phrases in quotes, site: filters, evaluating sources — authority, currency, provenance — which doubles as the research unit\u2019s skill). Cloud computing delivers storage and computation over the network (SaaS/PaaS/IaaS in ascending flexibility); the practical teaching examples are Google Drive-type storage, shared documents and hosted LMS platforms.',
      },
      {
        kind: 'para',
        text: 'E-mail runs client-to-server-to-server via SMTP (sending) and IMAP or POP3 (retrieval). Mechanics worth marks: To (primary recipients), Cc (carbon copy — visible), Bcc (blind copy — hidden from other recipients), subject discipline, attachments (size limits, compression), and the reply/reply-all decision. Etiquette is examinable: concise subject lines, plain professional tone, no shouting in capitals, minimal reply-all, attachment named properly, and privacy — never expose others\u2019 addresses by mass-Cc. Audio- and video-conferencing are synchronous many-point communication over the network: the underlying standards (Voice over IP; H.323/SIP historically), the platform features (screen share, breakout rooms, recording, chat, mute control), and their classroom role — flipped and blended learning, remote lectures, virtual labs and viva. Asynchronous alternatives (recorded lectures, forums) trade immediacy for access across time zones and bandwidths.',
      },
      { kind: 'heading', text: 'Digital initiatives in Indian higher education' },
      {
        kind: 'para',
        text: 'The national platforms the unit names, separated by function. SWAYAM (Study Webs of Active Learning for Young Aspiring Minds, launched 2017) is the national MOOC platform delivering free courses from Class 9 to post-graduation in four quadrants — video lectures, reading material, self-assessment tests, discussion forum — with certification through proctored exams and credit transfer permitted up to 40 per cent of a programme per UGC (Credit Framework for Online Learning Courses) rules. SWAYAM PRABHA is the companion group of DTH television channels (the 34-channel network under the PM eVIDYA umbrella of one-class-one-channel) for learners without bandwidth. NPTEL (National Programme on Technology Enhanced Learning, from 2003, IITs + IISc) is the engineering-and-science content engine whose courses feed SWAYAM. DIKSHA (Digital Infrastructure for Knowledge Sharing, 2017) is the school-teacher-and-student platform of the school-education ministry — QR-coded "energised textbooks" and teacher training. e-PG Pathshala hosts postgraduate e-texts and e-content across subjects; the National Digital Library of India (NDLI, IIT Kharagpur) aggregates e-books and resources across all levels; the National Academic Depository (NAD) stores digital academic awards (degrees, marksheets); Shodhganga is the ETD repository for Indian PhD theses, Shodhgangotri for research proposals; Virtual Labs run remote experiments; e-Yantra supports embedded-systems education; and the Academic Bank of Credits (ABC) under NEP 2020 stores credit records for transfer. Memory hook: SWAYAM teaches, PRABHA broadcasts, NPTEL engineers, DIKSHA schools, e-PG postgraduates, NDLI libraries, NAD deposits, Shodhganga archives theses.',
      },
      {
        kind: 'para',
        text: 'ICT and governance (e-governance) closes the unit. The service models are G2C (government to citizen — certificates, tax filing), G2B (business — licensing, tenders), G2G (inter-agency), G2E (employee); the delivery pillars are the Digital India programme (2015), Aadhaar-based authentication, UPI payments, and portal one-stop shops (National Scholarship Portal, e-Pathshala, SWAYAM\u2019s own exam registration). Benefits the exam lists: transparency, reduced discretion and queueing, audit trails, inclusion through vernacular interfaces; risks: the digital divide (access, bandwidth, literacy, gender gap), data privacy, and cybersecurity hygiene — strong passwords, two-factor authentication, phishing awareness — which also belongs to every teacher\u2019s professional responsibility.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A university\u2019s internal portal, reachable only on campus credentials, running web technology behind a firewall, is best described as:',
            options: ['the internet', 'an intranet', 'an extranet', 'a VPN service'],
            answer: 1,
            explain: 'Private web technology restricted to an organisation\u2019s members is an intranet; an extranet would extend selected access to outside partners.',
          },
          {
            q: 'Which platform is the national MOOC system whose courses follow the four-quadrant model?',
            options: ['DIKSHA', 'SWAYAM', 'SWAYAM PRABHA', 'e-PG Pathshala'],
            answer: 1,
            explain: 'SWAYAM delivers courses in four quadrants (video, reading, self-assessment, discussion); SWAYAM PRABHA is its DTH television counterpart, DIKSHA serves school education, e-PG Pathshala hosts PG e-content.',
          },
          {
            q: 'In an e-mail, the field that hides recipients from one another is:',
            options: ['To', 'Cc', 'Bcc', 'Subject'],
            answer: 2,
            explain: 'Bcc (blind carbon copy) conceals the list; Cc recipients are visible to all.',
          },
          {
            q: 'The protocols for sending and retrieving e-mail are, respectively:',
            options: ['HTTP and HTML', 'SMTP and IMAP (or POP3)', 'FTP and TCP', 'DNS and URL'],
            answer: 1,
            explain: 'SMTP moves mail out; IMAP/POP3 retrieve it. HTTP/HTML belong to the web, FTP to file transfer.',
          },
          {
            q: 'Shodhganga is the national repository for:',
            options: ['school textbooks', 'Indian PhD theses (electronic theses and dissertations)', 'DTH lecture channels', 'vocational course credits'],
            answer: 1,
            explain: 'Shodhganga (INFLIBNET) archives Indian doctoral theses; Shodhgangotri holds research proposals; credits live in the ABC; channels are SWAYAM PRABHA.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Treating the web and the internet as synonyms — the web is one service on the internet. Swapping SWAYAM (online courses) and SWAYAM PRABHA (TV channels). Putting DIKSHA (school education) where SWAYAM (higher education) belongs. Saying intranet when an organisation-wide public-facing portal is meant, or VPN when only a firewall-protected internal network is described. Mixing RAM (volatile) and ROM (permanent). And forgetting the 40 per cent credit-transfer cap for SWAYAM courses — the number shows up in statement-style items.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — foundations level. This lesson pairs with res-research-methodology-hypothesis-sampling (the ICT-in-research workflow) and edu-higher-education-system-india (NEP 2020\u2019s ABC and digital architecture). Primary reading: Wikipedia, "Information and communication technology" (definition and convergence framing); SWAYAM official pages (swayam.gov.in — the four quadrants and credit framework); Ministry of Education digital-initiative pages (education.gov.in) for SWAYAM PRABHA, DIKSHA, NDLI, NAD and e-PG Pathshala descriptions.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'ICT = IT plus the communication layer; convergence of computing, telecom and broadcast.',
        'RAM is volatile working memory; ROM permanent; storage climbs KB \u2192 MB \u2192 GB \u2192 TB.',
        'Internet is the global TCP/IP network; intranet is private; the web is HTTP hypertext, one service among many.',
        'Mail: SMTP sends, IMAP/POP3 retrieve; Bcc hides recipients; etiquette is professional brevity.',
        'Conferencing is synchronous (VoIP, screen-share, breakout rooms); recorded media serve asynchronous learning.',
        'Platforms: SWAYAM (MOOCs, four quadrants, 40 per cent credit cap), PRABHA (TV), NPTEL (IIT content), DIKSHA (schools), NDLI (library), e-PG Pathshala (PG texts), NAD (awards), Shodhganga (theses).',
        'E-governance: G2C/G2B/G2G/G2E; benefits transparency and access; risks the digital divide and privacy.',
      ] },
    ],
  },
  {
    id: 'comp-office-productivity-software',
    title: 'Office Productivity Software: Documents, Spreadsheets, Slides and Workflows',
    domain: 'Technology & Applied Science',
    field: 'Digital Literacy',
    branch: 'Productivity Applications',
    tier: 'core',
    concepts: [
      'Word processors: styles, revision and mail merge',
      'Spreadsheets: cells, formulas and references',
      'Functions, charts and what-if recalculation',
      'Presentation software and the slide master',
      'Databases versus spreadsheets',
      'File formats, compatibility and PDF',
      'Suites, cloud collaboration and version history',
      'Templates, accessibility and keyboard efficiency',
    ],
    words: 1606,
    readMins: 8,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Productivity software is the application layer most of the working world actually touches: the programs that let office employees draft, calculate, present and share their daily work, as the standard information-systems textbooks define them. A modern office suite bundles a word processor, a spreadsheet, a presentation tool and often a database and mail client — whether branded or open-source — and the examinable knowledge is not any vendor’s menu but the concepts underneath: how a spreadsheet recalculates, why styles beat direct formatting, what a mail merge needs, when data outgrows a grid. This lesson teaches those concepts once, so that every suite you meet is a rename rather than a relearn.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Office-software questions test the model, not the brand: they ask what an absolute reference does when a formula is copied, what mail merge produces, why a CSV loses the formulas a spreadsheet keeps, and which tool suits which job. Learn the five objects — document, workbook, presentation, database, format — and the reasoning transfers to every suite and every version, which is precisely the point of teaching this layer at all.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Office suite', def: 'A bundled set of productivity applications sharing formats and a common interface: word processor, spreadsheet, presentation, database and mail/calendar components — commercial or open-source, desktop or cloud.' },
          { term: 'Cell reference', def: 'A spreadsheet cell’s address from its column and row (A1). A relative reference shifts when the formula is copied; an absolute reference, locked with dollar signs ($A$1 or A$1), stays fixed — the difference that makes one formula fill correctly down a thousand rows.' },
          { term: 'Mail merge', def: 'The word processor’s mass-personalisation feature: a main document with placeholder fields plus a data source (names, addresses) generates one personalised copy per record — letters, labels, certificates, pay slips.' },
          { term: 'Slide master', def: 'The template layer of a presentation: fonts, colours, placeholder positions and backgrounds defined once and inherited by every slide, so global restyling is one edit instead of forty.' },
          { term: 'CSV (comma-separated values)', def: 'A plain-text data format holding one table — values separated by commas, one record per line. Universally portable, but it stores no formulas, formatting, multiple sheets or types: opening it cannot break what it does not carry.' },
          { term: 'Version history', def: 'The automatic snapshot trail kept by cloud suites (and good document workflows): every save or edit is retrievable, so collaborators can compare revisions, restore earlier states and attribute changes — the database-like memory behind collaborative editing.' },
        ],
      },
      {
        kind: 'para',
        text: 'The word processor’s hidden power is structure, not typing. Direct formatting — bolding this line, resizing that heading — scatters the document’s logic across a thousand manual choices; styles attach meaning (Title, Heading 1, Caption) to text, and everything follows: a consistent look, a table of contents generated from the headings, navigation, and one-place global restyling. The collaborative layer is track changes and comments — every edit recorded, every suggestion reviewable, every decision auditable — which is how drafts move through organisations without losing their history. Mail merge closes the loop between word processor and data: a template letter plus a table of recipients produces individually addressed copies, the classic answer to “how do I personalise five hundred letters without typing five hundred letters?”.',
      },
      {
        kind: 'para',
        text: 'The spreadsheet is a grid that computes. Data lives in cells addressed by column and row; a formula, always introduced by an equals sign, computes from other cells — =B2*C2 — and here is the single most examinable fact: references are relative by default, so copying a formula down or across shifts each reference to follow the movement, while dollar-locked references stay put. That behaviour is a feature: build once, fill everywhere. Built-in functions extend the arithmetic — SUM and AVERAGE over ranges, IF for conditional outcomes, lookup functions that fetch a value from a table by matching a key — and charts turn ranges into pictures. The spreadsheet’s real revolution, though, is recalculation: change one input and every dependent formula updates instantly, which is what makes it the standard tool for what-if analysis — budgets, projections, mark sheets — where the questions are always “what happens if this number moves?”.',
      },
      {
        kind: 'para',
        text: 'Presentations and databases round out the suite, each with a discipline. A presentation is visual support for a speaker: slides carry few words at large size, consistent typography and colour from the slide master, notes for the speaker, and animation used to reveal structure rather than decorate it — reading slides aloud is the known failure mode. A database is what a spreadsheet becomes when data outgrows a grid: many records, typed fields, relationships between tables, queries that filter and join, and concurrent multi-user access with integrity rules — a contacts list lives happily in a spreadsheet, but a bank’s accounts, with millions of transactions and relations to customers, cannot. Between tools, file formats decide what survives a move: the suite’s native formats (the OOXML family .docx/.xlsx/.pptx, or OpenDocument) keep everything; CSV keeps only the values of one table; PDF keeps the appearance, fixed for sharing and printing, not for editing. Choosing a format is choosing which properties you need.',
      },
      {
        kind: 'para',
        text: 'Two workflow layers complete the picture. Cloud suites turned documents into shared surfaces: several people edit one file simultaneously, changes sync in real time, version history keeps every prior state retrievable, and sharing permissions replace emailing attachments — with the offline caveat that local files and cloud copies must be reconciled. And efficiency is a learnable skill: templates capture recurring document designs; styles, slide masters and themes capture recurring formatting; autofill, find-and-replace and keyboard shortcuts compound into hours; and accessibility practices — real heading styles, alt text on images, sufficient contrast, meaningful link text — make documents usable by screen readers as a by-product of doing the formatting correctly.',
      },
      {
        kind: 'example',
        title: 'Worked Example — A Mark Sheet That Grades Itself',
        steps: [
          'Enter names in column A and marks in column B, rows 2 to 31; put the pass mark 40 in cell D1.',
          'In C2 write =IF(B2>=$D$1,"Pass","Fail"). The $D$1 is absolute: every copied row must read the same threshold.',
          'Fill C2 down to C31. The relative references B2→B3→B4… follow the rows; the absolute $D$1 stays — one formula, thirty verdicts.',
          'Compute the class average with =AVERAGE(B2:B31) and a top score with =MAX(B2:B31); select the ranges and insert a bar chart for the distribution.',
          'Now the what-if: change D1 from 40 to 50 and watch every verdict recompute instantly — no re-editing. That instant recalculation is the spreadsheet’s defining property, and the reason the threshold lived in one absolute-referenced cell.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Cell C2 holds =B2*$D$1. Copying C2 to C4 produces…',
          options: ['=B4*$D$1', '=B4*$D$3', '=B2*$D$1', '=C2*$D$1'],
          answer: 0,
          explain: 'Relative reference B2 shifts two rows down to B4; the dollar-locked absolute reference $D$1 stays fixed. Mixed references (B$1, $B1) lock one part only.',
        },
        {
          q: 'Mail merge requires…',
          options: ['a database server and network access', 'a main document with placeholder fields and a data source of records', 'one letter per recipient typed manually', 'a presentation master'],
          answer: 1,
          explain: 'Merge = template (with fields) + data source (names, addresses…); the word processor generates one personalised copy per record. No server required.',
        },
        {
          q: 'Saving a spreadsheet with formulas as CSV loses the formulas because CSV…',
          options: ['compresses the file', 'stores only one table of plain values with no formulas, formatting or multiple sheets', 'cannot be opened again', 'converts formulas to charts'],
          answer: 1,
          explain: 'CSV is plain text for one table of values — maximum portability, minimum structure. The native format is what preserves formulas, formatting, sheets and types.',
        },
        {
          q: 'Data outgrows a spreadsheet and needs typed fields, table relationships and multi-user queries. The right tool is…',
          options: ['a word processor with styles', 'a presentation with a slide master', 'a database', 'a PDF export'],
          answer: 2,
          explain: 'Relational databases add typed fields, relations between tables, queries and concurrency — the standard answer once volume, relationships or simultaneous users exceed a grid.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Typing units or currency symbols into cells (“₹500”) — the text breaks arithmetic; keep pure numbers in cells and format the display. Ignoring absolute references until a fill-down produces a wall of #REF and wrong totals. Formatting by hand instead of by style — the table of contents then has nothing to find, and restyling takes a day. Expecting CSV to remember what it never stored: formulas, formats and sheets vanish by design, not by bug. Confusing PDF (fixed appearance for sharing) with editable formats (source of truth). And treating slides as scripts: dense text, tiny fonts and decorative animation are presentation failures — the master sets consistency, the slide carries the point, the speaker carries the sentences.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the computational-thinking lesson gives the algorithmic habits (steps, conditions, iteration) that formulas and mail merge formalise. Follow with the operating-systems and information-systems material for where these applications sit in the machine stack, and the data-reading lesson for interpreting the charts these tools produce. Primary reading: D. Bourgeois and D. T. Bourgeois, Information Systems for Business and Beyond (2019), chapter 3 “Software”, Productivity Software section (opentextbook.site, CC BY-NC) — the framing definition and feature inventory used here.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Productivity software = the office application layer: word processor, spreadsheet, presentation, database, mail — bundled as suites.',
        'Documents: styles over direct formatting; track changes and comments for collaboration; mail merge = template + data source → personalised copies.',
        'Spreadsheets: formulas start with =; references are relative by default, dollar-locked absolutes stay put; functions and charts build on ranges; recalculation powers what-if analysis.',
        'Presentations: slide master for consistency, notes for the speaker, animation to reveal structure.',
        'Databases take over when data needs typed fields, relations, queries and concurrent users; formats decide what survives transfer (OOXML keeps all, CSV values only, PDF appearance).',
        'Cloud suites add simultaneous editing, version history and permission-based sharing; templates, styles, shortcuts and accessibility practices are the compounding efficiencies.',
      ] },
    ],
  },
]

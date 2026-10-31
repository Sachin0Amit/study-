/**
 * Knowledge Universe — Media & Communication — Chapter 01: Media & Society
 * 2 lessons · ~3,717 words
 * field: Mass Media and Society
 * legacy sources: x33-ugc-net-closure-pass.ts, x46-thin-books-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Mass Media and Society]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 media-journalism-craft — Journalism Craft: News Values, the Inverted Pyramid and Verification
 *   01.2 gp-mass-media-society-responsibility — Mass Media and Society: Print, Broadcast, Platforms and Responsibility
 */
import type { KnowledgeTopic } from '../../types'

export const mediaCommunicationCh01: KnowledgeTopic[] = [
  {
    id: 'media-journalism-craft',
    title: 'Journalism Craft: News Values, the Inverted Pyramid and Verification',
    domain: 'Social Sciences',
    field: 'Mass Media and Society',
    branch: 'Journalism Practice',
    tier: 'core' as const,
    concepts: [
      'News values: what makes an event news',
      'The summary lead and the 5W1H test',
      'Inverted pyramid: lede, body, tail',
      'Attribution: on record, background, off record',
      'Verification and the two-source rule',
      'Libel and the discipline of accuracy',
    ],
    words: 1464,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The other lessons of this book study media as a social force — who owns it, how it frames reality, what it does to attention. This lesson opens the workshop door instead: how an actual news story gets made, from the judgment that something is news to the sentence that leads the page. The craft is older than the internet and sturdier than any platform, and it is teachable: news values are a decision procedure, the inverted pyramid is a structure you can practice, and verification is a habit with explicit rules. A reader who knows the machinery is also a harder reader to fool.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every feed you scroll is full of things that look like news but skip the craft: no attribution, no verification, no correction policy. Learning the real method — what journalists at wire services and city desks actually do before publishing — gives you a free lie-detector. The same skills write the clearest reports, emails and applications you will ever produce, because they are skills of ordering and evidence.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Not everything that happens is news. Editors filter events through news values — the recurring criteria that make an event publishable. The standard set, as the Ohio State open textbook Writing for Strategic Communication Industries organizes it: timeliness (it happened now or matters now), impact (how many people, how deeply), proximity (near is news), prominence (known names), conflict (opposition draws attention), and novelty (the unusual — “man bites dog”). Different desks weight them differently: a wire service leads with impact and timeliness, a city paper with proximity. The values are amoral on purpose — a bridge collapse and a scientific breakthrough compete on the same scale — which is precisely why the ethics lesson of this book exists as a counterweight.',
      },
      {
        kind: 'para',
        text: 'Once the event qualifies, the story is built on the summary lead: the first sentence that answers, as far as possible, who, what, when, where, why and how — the 5W1H — in roughly twenty-five to thirty-five words. A classic lead: “A three-alarm fire displaced forty residents from a Riverside apartment block on Tuesday night, officials said; no injuries were reported.” Note the machinery: the most newsworthy fact first (displaced forty), attribution to officials (the sourcing lesson below), and the missing details (cause, damage estimate) deferred because they are not yet known. Writing the lead is the hardest act in journalism because it forces the news-value judgment to become a single sentence.',
      },
      {
        kind: 'para',
        text: 'The rest of the story descends the inverted pyramid: facts in descending order of importance, from the lede through the supporting body (context, quotes, numbers, background) to the tail, where the least essential material — nice-to-know color, history, routine follow-up — sits. The structure is a nineteenth-century wire-service invention, built for telegraph lines that could cut mid-transmission and editors who trimmed from the bottom; it survives because readers also trim from the bottom, on paper and on phones. Its virtues are ruthless: a reader can stop after any paragraph and still hold the essentials, and the writer can cut the tail without touching the lede. Its costs are real too — no suspense, no build — which is why feature writing (the same textbook devotes a chapter to it) deliberately breaks the pyramid with anecdotal leads, delayed reveals and narrative drive when the story earns it.',
      },
      {
        kind: 'para',
        text: 'Sourcing discipline separates journalism from assertion. Attribution — “officials said”, “according to the filing” — tells the reader where every factual claim lives, and comes in graded protocols: on record (named and quotable), on background (usable, not named by title agreed in advance), deep background (shapes the story, never appears), and off record (not usable at all unless independently obtained). Professional newsrooms impose a two-source rule for contested or damaging claims — one source is a tip, two independent confirmations is a fact — and prefer documents to memory: filings, budgets, transcripts, data. The habit generalizes: any reader can ask of any claim “who says so, and how do they know?” — and any writer can make their own work un-fakeable by answering those two questions on the page.',
      },
      {
        kind: 'para',
        text: 'Two more craft commitments complete the kit. Accuracy over speed is institutionalized in the corrections policy: published errors get corrected visibly, and the corrections column is a newsroom’s honesty ledger — its absence is a red flag about any outlet. And the law draws a line the craft must respect: libel, the published defamation of a person through false statements of fact, is the classic legal risk of the trade (the same textbook’s ethics chapter pairs defamation with plagiarism as the cardinal, career-ending errors). The working defense is the method itself: verify, attribute, distinguish fact from characterization, and let the quotes carry the opinions. Beats — assigned territory like courts, city hall or education — glue it together: the beat reporter’s accumulated sources and context are why institutional reporting cannot be replaced by aggregation.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: turn a pile of raw facts into a publishable story lead. Facts: heavy rain; flooding; two schools closed; the district announced the closure at 6 a.m.; buses grounded; more rain forecast.',
          'Apply news values: impact (families, commutes), timeliness (today), proximity (local) — the lead must fuse them into one sentence.',
          'Apply it: “Sudden overnight flooding closed both district high schools and grounded school buses on Monday, officials said, with more rain forecast through Wednesday.” Count: who (district officials), what (closures, grounded buses), when (Monday), where (both high schools), why-not-yet (cause, forecast detail goes to the body).',
          'State the result: one sentence, 5W1H largely covered, attribution in place, pyramid ordered — the remaining facts (rainfall totals, safety advice, history of the drain) now queue in descending importance below it.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Media literacy: run the checklist on any suspicious story — attribution present? two sources? corrections page? pyramid order or buried lede with a late twist?',
        'Professional writing: reports, briefs and applications that front-load the news and descend in importance are using the pyramid by another name.',
        'Community journalism and newsletters: the summary lead plus attribution lets a solo writer produce credible local coverage without a legal department.',
        'Data and research communication: the lead-writing exercise is the fastest way to turn an abstract into a sentence people actually read.',
        'Crisis communication: officials who lead with the most consequential fact and attribute it (rather than burying it) are practicing inverted-pyramid ethics under pressure.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Burying the lede — opening with scene-setting and saving the actual news for paragraph five — is the beginner’s signature, and readers simply leave. Passive-voice evasion (“mistakes were made”) hides the actor that attribution requires; name who said and did. Single-source stories on contested claims violate the two-source rule and are how retractions happen. Confusing off record with background gets reporters and sources burned: agree the protocol before the conversation, not after. Finally, adjective-stuffing the lead (“shocking, devastating tragedy”) — news values carry the emotion through facts; the writer’s adjectives are not attribution and experienced editors cut every one.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'news values', def: 'The editorial criteria — timeliness, impact, proximity, prominence, conflict, novelty — that make an event publishable.' },
        { term: 'summary lead', def: 'The opening sentence answering 5W1H in about 25–35 words, with the most newsworthy fact first.' },
        { term: 'inverted pyramid', def: 'Story structure placing facts in descending importance: lede, body, tail — cuttable from the bottom without loss.' },
        { term: 'attribution', def: 'Naming the source of a claim on the page — “officials said” — so readers know where every fact lives.' },
        { term: 'off the record', def: 'Information given under an agreement not to publish it; distinct from background, which is usable but unnamed.' },
        { term: 'two-source rule', def: 'The professional standard that contested or damaging claims need two independent confirmations before publication.' },
        { term: 'libel', def: 'Published defamation — a false statement of fact damaging a person; the core legal risk of the craft.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Which is NOT one of the standard news values?',
          options: ['Timeliness', 'Impact', 'Profitability of the topic', 'Proximity'],
          answer: 2,
          explain: 'The classic values are timeliness, impact, proximity, prominence, conflict and novelty — commercial profitability is not a news value.',
        },
        {
          q: 'The inverted pyramid exists primarily so that…',
          options: ['stories feel suspenseful', 'readers can stop at any point holding the essentials', 'writers can hide weak facts', 'headlines rhyme'],
          answer: 1,
          explain: 'Descending importance serves reader triage (and editor cutting) — the opposite of narrative suspense, which features earn separately.',
        },
        {
          q: 'Information that is usable in print but must not be attributed by name is…',
          options: ['on record', 'on background', 'off record', 'plagiarism'],
          answer: 1,
          explain: 'Background is usable without naming; off record is not usable at all; on record is named and quotable.',
        },
        {
          q: 'A contested claim from a single anonymous source, by professional standards, is…',
          options: ['ready to publish', 'a tip that needs independent confirmation', 'automatically libel', 'a feature story'],
          answer: 1,
          explain: 'The two-source rule: one source is a lead to verify, not a fact to print.',
        },
      ] },
    ],
  },
  {
    id: 'gp-mass-media-society-responsibility',
    title: 'Mass Media and Society: Print, Broadcast, Platforms and Responsibility',
    domain: 'Social Sciences',
    field: 'Mass Media and Society',
    branch: 'Media and Society',
    tier: 'intermediate',
    concepts: [
      'Three ages: print, electronic, digital',
      'Disruptive technology and planned obsolescence',
      'Functions of media and narcotizing dysfunction',
      'Gatekeeping, framing and agenda-setting',
      'Homogenization, fragmentation and digital tribalism',
      'Media ethics, responsibility and regulation',
    ],
    words: 2253,
    readMins: 11,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'The unit\u2019s two lines are “role of print, electronic and digital media” and “media effects and responsibility” — and the disciplined way through both is the sociological one, where media are treated not as gadgets but as a social institution with jobs to do, effects to account for, and duties that follow. The library\u2019s film lessons teach how images are made; this lesson teaches what media do to and for a society that depends on them. OpenStax\u2019s Introduction to Sociology 3e devotes its eighth chapter to exactly this pairing, and this lesson follows its arc: evolution, then function, then effects, then the responsibility question — with the Indian framing added where the syllabus expects it.',
      },
      { kind: 'heading', text: 'The three ages: print, electronic, digital' },
      {
        kind: 'para',
        text: 'Print is the oldest mass medium and the one that made “mass” possible. OpenStax\u2019s account runs from hand-copied daily boards in ancient Rome through the printing press — which the chapter credits with feeding the Renaissance and the Enlightenment by making information cheap and portable — to the mid-nineteenth-century telegraph, which decoupled news from distance and let papers cover the world the same day. The penny press built mass readership on advertising rather than cover price, a business model whose logic (sell attention to advertisers) still runs the industry; and the same chapter records the modern turn: newspaper circulation falling as internet news sites rose, with Pew data showing a 10.6 percent drop in a single year (2009) as the migration online accelerated.',
      },
      {
        kind: 'para',
        text: 'Electronic media added simultaneity: radio brought events into homes as they happened, television made them communal. Through the 1970s American television meant three networks — ABC, CBS, NBC — a concentration the chapter contrasts with public alternatives (PBS in the United States, the BBC and CBC elsewhere) built to educate rather than to sell; film had become the era\u2019s shared cultural touchstone from the 1930s, when sound and colour arrived, and Bollywood, the chapter notes, produces more films than Hollywood. Digital or new media are defined by interactivity: social networking sites, blogs, podcasts, wikis and virtual worlds turn the audience into participants who publish, comment and remix rather than only receive — the structural change from which most of this lesson\u2019s later effects follow.',
      },
      { kind: 'heading', text: 'How media change arrives: disruption and obsolescence' },
      {
        kind: 'para',
        text: 'Technological change has a describable shape. Anderson and Tushman\u2019s evolutionary model (1990) says a breakthrough (say, the microprocessor) is followed by variation — competing prototypes and designs — and then by adjustment, as one design wins and incremental refinement takes over; the generational model adds that each improvement seeds the next (first-generation devices are crude, second-generation ones fix the obvious complaints). The sharper category is disruptive technology: an innovation that displaces an established one by changing the job to be done — digital photography killed photographic film, cloud storage is displacing physical media, streaming hollowed out the record store whose decline OpenStax uses as the economic footprint of a technological shift. Alongside disruption sits a business practice the syllabus names directly: planned obsolescence, designing products to become obsolete — nylon stockings that run, software that is only upwardly compatible, and the chapter\u2019s flagship case, Apple\u2019s software updates that slowed older iPhones, which drew class-action suits and a settlement of about 500 million dollars. For the exam, the two terms answer different questions: disruption explains industry change from below; planned obsolescence explains it from within the firm\u2019s pricing strategy.',
      },
      { kind: 'heading', text: 'What media do: functions and dysfunctions' },
      {
        kind: 'para',
        text: 'The functionalist reading lists the jobs media perform for society: information dissemination (knowledge spread at unprecedented scale and speed), socialization (media supply reference groups — the people and lifestyles viewers measure themselves against — while reinforcing norms and values; by the late 1990s the average person watched roughly two and a half to five hours of television daily), entertainment, status conferral (what media cover comes to matter), and the advertising engine that finances the rest. Functionalist analysis also names dysfunctions, and the exam\u2019s favourite is narcotizing dysfunction: so much media coverage of an issue that being informed substitutes for acting — the audience feels it has engaged because it has consumed coverage. The other classic concept is gatekeeping: in the broadcast era, editors and producers decided which stories reached the public, a selection function OpenStax treats as a necessity of scarce airtime — and whose collapse online (everyone publishes, nothing is centrally selected) is the hinge between the media worlds of the last two sections.',
      },
      { kind: 'heading', text: 'Effects: agenda-setting, framing, homogenization, fragmentation' },
      {
        kind: 'para',
        text: 'Media-effects research gives the vocabulary the unit\u2019s second line expects. Agenda-setting says media do not usually tell people what to think, but they powerfully tell people what to think about: the issues covered become the issues audiences rank important. Framing is the packaging layer — the same protest covered as “citizens demanding accountability” or as “traffic disruption” carries different implications without a false word. Cultivation theory adds the long-exposure effect: heavy television viewers slowly come to see the world as more like television than it is. Against these strong-claims theories, the minimal-effects tradition insists audiences are active: they select, interpret and argue back — and the evidence sits between the poles.',
      },
      {
        kind: 'para',
        text: 'The digital era reshaped the stage rather than retiring these concepts. OpenStax names two opposing pulls. Homogenization: research by McManus (1995) found different news outlets telling the same stories from the same sources, producing near-identical messages — commercially rational, journalistically thin. Fragmentation: audiences increasingly customise news to avoid views that conflict with their own, and the chapter\u2019s term for the result is digital tribalism (Taute and Sierra, 2014) — groups gathered and reinforced online by politics, emotion, lifestyle or brand. One audience, two failure modes: too alike when the gatekeepers converge, too divided when the algorithms personalise. Media economics drives both: attention is the product, and homogenised spectacle and personalised feeds are its two most profitable shapes.',
      },
      { kind: 'heading', text: 'Responsibility: ethics, regulation and access' },
      {
        kind: 'para',
        text: 'Because democracy needs an informed public, media carry a watchdog role — the “fourth estate” that scrutinises power between elections — and with it duties the syllabus compresses into the word responsibility: accuracy (verification before publication), fairness (right of reply, distinguishing fact from opinion), minimisation of harm (privacy, protecting the vulnerable, avoiding prejudicial trial coverage that becomes a media trial), and the refusal of paid news — the Indian pathology where editorial space is sold as coverage — and of fabricated content, whose digital forms (viral misinformation, synthetic deepfakes) spread faster than corrections and reach smaller audiences when they arrive. Regulation is the contested instrument, and three models cover the options: state regulation (licensing, statutory content rules — powerful but dangerous to press freedom, which India protects under Article 19(1)(a) subject to the constitution\u2019s listed restrictions, a polity-lesson cross-reference), self-regulation (press councils, broadcast codes, editors\u2019 guilds — the industry policing itself), and the platform-era hybrid of intermediary rules and moderation, where the state writes the liability framework and platforms implement it.',
      },
      {
        kind: 'para',
        text: 'Responsibility also has a distributional face. The digital divide — unequal access by class, geography and demographics — feeds the knowledge gap: as information grows, the connected pull further ahead of the unconnected. OpenStax\u2019s data points are quotable: about 78 percent of US households had home internet in the mid-2010s, with rural and low-income areas roughly thirteen points below the national average, and about one in four Black and Hispanic users smartphone-only — a reminder that the divide is multi-dimensional (access, skill, and meaningful use). The net-neutrality debate is the structural version of the same question — should carriers treat all traffic equally as common carriers, or may they sell fast lanes? OpenStax sets the two sociological lenses against each other: conflict theory expects paid prioritisation to entrench incumbents; the functionalist reply is that lighter regulation may let carriers fund expansion to underserved areas. And the privacy finding completes the responsibility frame: in the chapter\u2019s polling, 81 percent of Americans felt they had little control over what companies collected about them and 84 percent over government collection — the number that explains why data protection became the decade\u2019s media-policy battleground. Media, for all this, remain society\u2019s mobilisation channel too: the chapter closes with movements organised through platforms — MeToo, Black Lives Matter, a teenager\u2019s petition that forced a toy company to rethink its engineering line — proof that the same pipes that fragment can aggregate.',
      },
      {
        kind: 'example',
        title: 'Worked Example — One viral story, four concepts applied',
        steps: [
          'Step 1: a video alleging corruption in a local road contract goes viral overnight; mainstream channels pick it up by morning; by evening the contractor\u2019s response video is circulating in parallel feeds.',
          'Step 2 (agenda-setting): the story, not corruption generally, becomes the thing everyone is thinking about this week — coverage volume set the public agenda; note the distinction between agenda-setting (what to think about) and persuasion (what to conclude).',
          'Step 3 (framing): the same facts appear as “whistleblower exposes graft” on one channel and “unverified clip disrupts development works” on another; both may be literally accurate — framing is the packaging around the facts.',
          'Step 4 (homogenization vs fragmentation): the television channels converge on identical scripts and the same two guests (McManus\u2019s finding), while the platforms split audiences into camps that each see only friendly corrections — digital tribalism in a day.',
          'Step 5 (responsibility): the newsroom\u2019s duty ladder — verify the clip\u2019s provenance before airing, seek the contractor\u2019s reply, label what is unverified, correct visibly — is the practical content of “media effects and responsibility”; the regulator\u2019s and platform\u2019s duties (intermediary rules, moderation) sit one layer above, and the citizen\u2019s skill — lateral reading, source-checking — one layer below.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Narcotizing dysfunction, the classic functionalist caution, is the condition in which:',
            options: [
              'media coverage is so abundant that being informed substitutes for acting',
              'audiences become addicted to entertainment',
              'advertising makes people buy unnecessary goods',
              'gatekeepers suppress important stories',
            ],
            answer: 0,
            explain: 'The dysfunction hides inside the function: massive coverage creates the feeling of engagement while replacing it — knowing about a problem occupies the energy that acting on it would need.',
          },
          {
            q: 'Agenda-setting and framing differ in that agenda-setting concerns:',
            options: [
              'which issues audiences think about, while framing concerns how those issues are presented',
              'which facts are false, while framing concerns which are true',
              'audience income levels, while framing concerns audience education',
              'broadcast timing, while framing concerns print schedules',
            ],
            answer: 0,
            explain: 'Agenda-setting moves what the public thinks about; framing shapes the interpretive package around each issue. A story can sit high on the agenda in every outlet yet be framed oppositely in two of them.',
          },
          {
            q: 'OpenStax cites McManus (1995) for which finding about the news business?',
            options: [
              'outlets tell the same stories from the same sources, converging on similar messages',
              'audiences fragment into tribes that never share stories',
              'newspaper circulation rose through the 1990s',
              'advertising has no effect on news selection',
            ],
            answer: 0,
            explain: 'That is homogenization — commercially rational convergence on identical coverage. Fragmentation (and digital tribalism) is the opposite pull of the personalised-feed era; the two failure modes describe broadcast convergence and platform divergence respectively.',
          },
          {
            q: 'A phone maker ships software updates that measurably slow older handsets, pushing owners toward replacement. The syllabus term for the practice is:',
            options: [
              'disruptive technology',
              'planned obsolescence',
              'gatekeeping',
              'net neutrality',
            ],
            answer: 1,
            explain: 'Planned obsolescence designs obsolescence in — stockings that run, upwardly-only software, the iPhone slowdown case that cost Apple about 500 million dollars in settlement. Disruptive technology is a different mechanism: a new innovation displacing an old industry.',
          },
          {
            q: 'The digital divide and the knowledge gap are related because:',
            options: [
              'unequal access to media technology compounds into unequal knowledge as information grows',
              'both refer only to rural electrification',
              'the knowledge gap causes the digital divide in reverse',
              'both were eliminated by smartphones',
            ],
            answer: 0,
            explain: 'Access (and skill, and meaningful use) is the input; the knowledge gap is the compounding output — the connected pull ahead as information multiplies. OpenStax\u2019s data (rural and low-income households below national averages; smartphone-only users) maps the access layer.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Gatekeeping is selection under scarcity, not censorship — the two are different failures and the exam offers them as distractors. Agenda-setting is about issue salience, not about convincing — mixing it with persuasion loses the point. Homogenization (everyone alike) and fragmentation (audiences apart) are opposite poles, not synonyms; name which era produces which. “Some” people narcotize does not make media coverage harmful per se — the dysfunction claim is precise. And planned obsolescence is a design/pricing practice by firms; disruptive technology is an industry-level displacement — the iPhone-slowdown case belongs to the first, digital photography to the second.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none. Natural companions: the culture-and-society lesson (media as cultural production) and the ICT lesson (the access layer behind the digital divide). Follow with the governance lesson in this pass (open data and the information state). Primary reading: OpenStax, Introduction to Sociology 3e (openstax.org, CC BY-NC-SA), ch.8 “Media and Technology”, §8.1 and §8.2, read during this pass; the official UGC NET Paper-1 syllabus unit “Mass-media and society” (ugcnetonline.in).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Print made mass communication possible (press, telegraph, penny press); electronic added simultaneity (radio, three-network TV, film); digital added interactivity.',
        'Change arrives as breakthrough → variation → adjustment (Anderson and Tushman), and as disruptive technology (film → digital photography).',
        'Planned obsolescence: obsolescence designed in (Apple\u2019s ~$500m iPhone settlement is the case).',
        'Functions: information, socialization, entertainment, status conferral, advertising; dysfunctions: narcotizing dysfunction; gatekeeping as broadcast-era selection.',
        'Effects: agenda-setting (what to think about), framing (how presented), cultivation (long exposure); digital era: homogenization (McManus) vs fragmentation and digital tribalism (Taute and Sierra).',
        'Responsibility: watchdog role, accuracy, fairness, harm-minimisation, no paid news; regulation models: state, self, platform-era hybrid; access: digital divide → knowledge gap; net neutrality and privacy complete the frame.',
      ] },
    ],
  },
]

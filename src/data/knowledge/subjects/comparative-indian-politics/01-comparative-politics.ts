/**
 * Knowledge Universe — Comparative Politics & Indian Polity — Chapter 01: Comparative Politics
 * 2 lessons · ~3,115 words
 * field: Political Science
 * legacy sources: social-sciences.ts, x23-japan-gap-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Comparative Politics]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 pol-democratic-government-japan — Democratic Government in Action: Japan’s Parliamentary System and Contemporary Society
 *   01.2 pol-regimes-spectrum — Democracies, Autocracies and Everything in Between
 */
import type { KnowledgeTopic } from '../../types'

export const comparativeIndianPoliticsCh01: KnowledgeTopic[] = [
  {
    id: 'pol-democratic-government-japan',
    title: 'Democratic Government in Action: Japan’s Parliamentary System and Contemporary Society',
    domain: 'Social Sciences',
    field: 'Political Science',
    branch: 'Comparative Politics',
    tier: 'core',
    concepts: [
      'Popular sovereignty and the 1947 constitution',
      'The parliamentary cabinet system',
      'Bicameral Diet: powers and asymmetry',
      'Judicial review and court structure',
      'Local autonomy and the symbolic emperor',
      'Environment, labour and rights in contemporary society',
      'The information society and its citizenship',
    ],
    words: 2081,
    readMins: 10,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Constitutions promise systems; the interesting question is how the promise runs in practice. Japan’s constitution, drafted under occupation and in force since 3 May 1947, is the oldest unamended constitution in the world — and one of the cleanest case studies of parliamentary democracy because every moving part is easy to name: a sovereign people, an emperor stripped to symbolic office, a two-chamber legislature that selects and dismisses the prime minister, an independent judiciary with the power of judicial review, and prefectural governments that run schools, police and welfare locally. Around that machinery, Japanese society has had to solve the same problems every advanced democracy faces — how to clean up industrial pollution, how to protect workers in a dual labour market, how to keep citizens informed and safe in a digital society — and the legislation it produced is studied precisely because each answer is documented, dated and traceable. This lesson walks the machinery first, then the society it governs.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Comparative politics is learned by contrast: Japan shows a parliamentary system of the British type with its own asymmetries — a lower house that outranks the upper one, a prime minister who is always a Diet member, and courts that have exercised judicial review rarely. Once you can explain why a Japanese prime minister can dissolve the lower house at will but cannot survive it losing a confidence vote, you can explain any Westminster-type system, because the logic is the same and Japan’s version is unusually explicit about it.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Popular sovereignty', def: 'The doctrine that legitimate authority derives from the people, declared in the constitution’s preamble and Article 1 — the decisive break from the Meiji constitution, under which sovereignty had vested in the emperor.' },
          { term: 'National Diet', def: 'The legislature: a House of Representatives of 465 seats and a House of Councillors of 248. It enacts laws, approves the budget the cabinet compiles, designates the prime minister by resolution, and may amend the constitution with a two-thirds vote of each house followed by majority approval in a referendum.' },
          { term: 'Parliamentary cabinet system', def: 'The fusion of executive and legislature: the Diet designates the prime minister from among its members, the prime minister appoints a majority of the cabinet from Diet members, and the cabinet is collectively responsible to the Diet — losing a confidence vote means resignation or dissolution of the lower house.' },
          { term: 'Article 9', def: 'The constitution’s renunciation-of-war clause: land, sea and air forces “and other war potential” are forever renounced, and the right of belligerency is not recognised. The Self-Defense Forces exist under a government interpretation that the clause does not deny the right of self-defense.' },
          { term: 'Judicial review', def: 'The Supreme Court’s power under Article 81 to determine the constitutionality of any law, order, regulation or official act. Courts exercise it sparingly — famously striking down the 1976 apportionment of Diet seats — so unconstitutionality rulings are major political events.' },
          { term: 'Prefecture', def: 'One of Japan’s 47 upper-tier local governments (to, dō, fu, ken), each with an elected governor and assembly. Local authorities manage schools, police and welfare under a constitutionally guaranteed principle of local autonomy, though national ministries retain significant fiscal leverage.' },
        ],
      },
      {
        kind: 'para',
        text: 'The 1947 constitution reordered power around three principles: the sovereignty of the people, the renunciation of war, and the guarantee of fundamental human rights. The emperor is defined in Article 1 as “the symbol of the State and of the unity of the people, deriving his position from the will of the people with whom resides sovereign power” — he performs constitutional acts such as appointing the prime minister and chief justice, but only on the advice and approval of the cabinet, and he holds no governing power. The rights chapter is broad and litigation-ready: equality under the law, freedom of thought, conscience, religion, assembly and speech, due process, and social rights including the right to maintain minimum standards of wholesome and cultured living and the right to education. The revision threshold is deliberately steep — two-thirds of each house plus majority support in a national referendum — which is why no article has ever been amended, and why constitutional debate (most persistently over Article 9) is conducted through reinterpretation as much as through proposal.',
      },
      {
        kind: 'para',
        text: 'The legislature is where the system’s asymmetries live. The House of Representatives (lower house) holds 465 members elected for at most four-year terms through a combination of 289 single-member districts and 176 proportional-representation seats; the House of Councillors (upper house) holds 248 members serving fixed six-year terms, with half contested every three years. In most legislation the two houses are equals, but on three decisive questions the lower house prevails: budget decisions, treaty approvals and prime-minister designation can pass on a two-thirds lower-house override of an upper-house rejection, and the lower house alone can be dissolved by the prime minister. That dissolve-and-renew power is the parliamentary engine: a cabinet that anticipates defeat can call a general election and appeal to the electorate directly — a general election held after a dissolution is famously described in Japanese politics as asking the people to judge the house’s dissolution. The prime minister, designated by Diet resolution and formally appointed by the emperor, nominates a majority of the cabinet from sitting Diet members; the cabinet exercises executive power collectively and resigns en masse if a non-confidence motion passes or the lower house is dissolved.',
      },
      {
        kind: 'para',
        text: 'Below the cabinet sits an ordinary judiciary with extraordinary paper powers. The court system runs from summary and district courts through eight high courts to the Supreme Court of fifteen justices, who are appointed by the cabinet (the chief justice nominated by the cabinet, appointed by the emperor) and face the constitution’s odd but real accountability device — a first review after appointment and repeat public reviews every ten years, in which no justice has ever been voted out. Article 81 gives the Supreme Court final power to determine the constitutionality of any law or official act; in practice Japanese courts have exercised it on a handful of occasions, most consequentially against extreme malapportionment of Diet districts, and the rarity itself is the examinable puzzle — explanations run from judicial restraint and career incentives to the ease of achieving change through the legislature. Local government completes the design: 47 prefectures and hundreds of municipalities elect their own governors, mayors and assemblies, levy local taxes, and administer education, police and welfare, with direct-election chief executives written into the constitution as a guarantee of local autonomy rather than a delegation from Tokyo.',
      },
      {
        kind: 'para',
        text: 'Contemporary Japanese society is the machinery’s second half, and its policy history is best learned as four solved (or half-solved) problems. Environment: the pollution disasters of the 1960s — itai-itai disease from cadmium, Minamata disease from methylmercury, Yokkaichi asthma — produced in 1970 a legislative session so sweeping it was nicknamed the “pollution Diet”, and the Basic Environment Law of 1993 turned Japan from an industrial-safety laggard into an exporter of air- and water-quality regulation, hosting the 1997 Kyoto conference on climate change. Labour: the Labour Standards Act sets working-time floors, the 2019 work-style reform legislated overtime caps with criminal penalties for violations, and the famous lifetime-employment bargain has eroded into a dual labour market of regular employees and non-regular workers — the difference in security between the two is the single sharpest inequality line in Japanese society. Information: the Basic Act on the Formation of an Advanced Information and Telecommunications Society (2000) built the legal frame for digital governance, and public broadcasting under the Broadcast Act — NHK’s charter model — anchors the media landscape alongside a free private press whose press clubs and kisha club system are the standard examinable criticism. Rights: equal-treatment legislation after the 1985 UN convention, consumer-contract and product-liability laws, and the 2016 lowering of the voting age from 20 to 18 each mark the society’s response to a rights agenda it increasingly imports rather than invents.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Trace a Bill from Cabinet Draft to Law',
        steps: [
          'Drafting: most bills are drafted inside the relevant ministry (for example the Ministry of the Environment on a waste-measure bill), then adopted by the cabinet — legislation proposed by the cabinet vastly outnumbers member bills, a signature of the parliamentary fusion of executive and legislature.',
          'First chamber: the bill goes to the House of Representatives, is referred to a standing committee, amended if needed, and voted; committee deliberation and questioning of ministers is where public scrutiny happens.',
          'Second chamber: the bill moves to the House of Councillors for the same treatment. If it passes, it is enacted; if the upper house rejects it or fails to act within 60 days after receipt, the lower house may override with a two-thirds majority (ordinary law) — a rarely used but real engine.',
          'Failure mode: if the cabinet loses a non-confidence motion (or the bill is vital to the government), the prime minister may dissolve the lower house instead of resigning; the general election becomes the verdict on the government.',
          'Post-enactment: a law may be challenged in court; if the Supreme Court finds it unconstitutional, it ceases to bind — the judicial-review backstop that closes the loop.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Under the 1947 constitution, sovereignty rests with…',
          options: ['the emperor, as under Meiji law', 'the people', 'the Diet acting alone', 'the Supreme Court as guardian'],
          answer: 1,
          explain: 'The preamble and Article 1 vest sovereign power in the people; the emperor’s position derives from their will, and he performs only constitutional acts on cabinet advice.',
        },
        {
          q: 'On which question can the House of Representatives override the House of Councillors?',
          options: ['constitutional amendment', 'budget approval', 'cabinet censure', 'Supreme Court appointments'],
          answer: 1,
          explain: 'Budgets (and treaties and PM designation) pass on a two-thirds lower-house override; amendment requires a two-thirds vote of BOTH houses plus referendum.',
        },
        {
          q: 'A Japanese prime minister must be…',
          options: ['directly elected by the people', 'a member of the House of Councillors', 'designated by Diet resolution from among Diet members', 'an ex-judge of the Supreme Court'],
          answer: 2,
          explain: 'The parliamentary cabinet system requires the PM to sit in the Diet and be chosen by its resolution — Japan elects a legislature, not a president.',
        },
        {
          q: 'The 1970 “pollution Diet” is remembered because it…',
          options: ['created the Self-Defense Forces', 'passed a sweeping package of anti-pollution laws after Minamata and Yokkaichi', 'privatised the railways', 'lowered the voting age to 18'],
          answer: 1,
          explain: 'Fourteen environment-related laws passed in one session, turning Japan’s pollution disasters into the legal foundation of modern environmental policy; the voting age fell to 18 only in 2016.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling Japan a presidential system because the prime minister is powerful: the office is created by Diet designation and falls with the Diet’s confidence — the signature of parliamentarism, not presidentialism. Assuming the emperor still governs because “Meiji”: since 1947 the emperor’s acts require cabinet advice and approval, and sovereignty is explicit. Treating the two houses as equal everywhere: three override rules make the lower house decisive on money, treaties and the premiership, and only the lower house can be dissolved. Reading Article 9 as demilitarisation in practice rather than renunciation in law: the Self-Defense Forces exist under an interpretation of self-defense — the examinable fact is the clause, not one side of the debate. And assuming judicial review is unused because it is rare: two apportionment rulings reshaped districting; rarity is a pattern to explain, not an absence.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the international-relations theory lesson for the alliance context in which Article 9 is debated. Follow with the lessons on the post-Cold-War order (where Japan’s diplomacy sits) and on economic agents and the national economy in Japan (this system’s economic half). Primary readings: the Ministry of Foreign Affairs’ Web Japan factsheet “Governmental Structure” and Kids Web Japan “Government” pages (web-japan.org) for the institutional facts, and any standard comparative-politics survey for the parliamentary-versus-presidential frame.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'The 1947 constitution rests on popular sovereignty, pacifism (Article 9) and enforceable human rights; the emperor is a symbolic office acting on cabinet advice.',
        'Parliamentary cabinet system: the Diet designates the prime minister from its members; the cabinet is collectively responsible and falls with a confidence loss or dissolution.',
        'The Diet is asymmetric: 465-seat lower house overrides the 248-seat upper house on budgets, treaties and PM designation, and alone can be dissolved.',
        'Courts: fifteen-justice Supreme Court with Article 81 judicial review, exercised rarely — apportionment cases are the landmarks.',
        'Local autonomy: 47 prefectures with elected governors and assemblies administering schools, police and welfare.',
        'Contemporary society: the 1970 pollution Diet and 1993 Basic Environment Law; the dual labour market and 2019 overtime caps; the information-society basic act; the 2016 vote at 18.',
      ] },
    ],
  },
  {
    id: 'pol-regimes-spectrum',
    title: 'Democracies, Autocracies and Everything in Between',
    domain: 'Social Sciences',
    field: 'Political Science',
    branch: 'Comparative Politics',
    tier: 'core',
    concepts: [
      'Dahl\'s polyarchy: contestation and participation',
      'Electoral systems and their consequences',
      'Hybrid regimes and competitive authoritarianism',
      'Waves of democratization',
      'Backsliding by legal means',
      'Measuring regimes',
    ],
    words: 1034,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      { kind: 'para', text: 'In 1974 a Lisbon coup began what Samuel Huntington called democracy\'s third wave; within two decades electoral democracy reached Latin America, Eastern Europe, the Philippines, South Africa and beyond, and some declared history\'s ideological contests over. Since the mid-2000s the tide has run the other way. The lesson of both eras is the same: regime type is a spectrum, not a wall between full democracies and naked dictatorships. Classifying regimes — by their rules, their elections and their power — is comparative politics\' foundational skill, and this lesson builds it.' },
      { kind: 'callout', title: 'Why this matters', tone: 'insight', text: 'Most of the world\'s people live between the poles. Whether aid flows, sanctions bite or treaties get honored depends heavily on how a regime is classified — and the newest form of breakdown arrives not in tanks but in amendments, appointments and licensing decisions that each look lawful alone.' },
      { kind: 'heading', text: 'Core Concepts' },
      { kind: 'para', text: 'Robert Dahl\'s 1971 study of polyarchy cut regimes along two axes: public contestation — can opposition organize, speak and win? — and inclusive participation — who may vote? Cross them and the spectrum fills: closed hegemonies (neither), competitive oligarchies (contestation without inclusion), inclusive hegemonies (voting without choice) and polyarchy (both). Joseph Schumpeter supplied the minimalist floor: democracy as the competitive struggle for the people\'s vote.' },
      { kind: 'para', text: 'Electoral rules shape party systems. Maurice Duverger\'s law holds that single-member, winner-take-all districts push toward two parties, while proportional representation lets many survive. Consequences ripple outward: proportional systems elect more women and mirror vote shares but build coalition cabinets; majoritarian systems manufacture clear winners at the price of disproportionality and wasted votes. Arend Lijphart sorted the whole toolbox into majoritarian and consensus democracies; mixed systems like Germany\'s bolt the two together.' },
      { kind: 'para', text: 'Steven Levitsky and Lucan Way named the gray zone competitive authoritarianism: real elections occur, but incumbents tilt the field with state media, captured courts, selective regulation and blurred state-party lines. It differs from full autocracy, because contestation survives, and from democracy, because the tilt is decisive. The toolkit is legalistic — laws amended, agencies staffed, referees replaced — which is why observers watching for coups often miss the change.' },
      { kind: 'para', text: 'Huntington counted three long waves of democratization — the 1820s, 1945 and 1974 — each followed by a reverse wave. Seymour Martin Lipset\'s modernization finding, that wealth and democracy travel together, was sharpened by Adam Przeworski\'s team: above a certain income, no democracy in their dataset had yet fallen. Growth is no guarantee and poverty a heavy tax; the correlation is probabilistic, and oil-funded states are the standing exception.' },
      { kind: 'para', text: 'Nancy Bermeo catalogued the new coups: executive aggrandizement — sitting leaders legally weakening checks, term by term — has displaced old-style tanks and stolen election nights. Courts are packed, term limits stretched, media bought, NGOs regulated. Polarization feeds the process, because supporters accept damage to institutions when the alternative feels worse. Erosion is gradual enough that each step alone looks defensible.' },
      { kind: 'para', text: 'A measuring industry tracks it all. Freedom House scores political rights and civil liberties into Free, Partly Free and Not Free; the V-Dem project codes hundreds of indicators per country from expert judgments; Polity anchored a longer series from minus ten to plus ten. The indices disagree at the edges — and the disagreements are themselves data about what "democracy" is being defined to mean.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a country holds regular elections in which an opposition wins a third of the legislature, yet state media give the incumbent near-total coverage, the election commission is staffed by loyalists and the constitutional court was expanded to outvote its critics — what is it?',
        'Recall: Dahl\'s two dimensions, and Levitsky and Way\'s competitive authoritarianism — contestation exists but the playing field tilts.',
        'Apply: contestation is present (the opposition wins seats) and participation is broad, so it is not a closed hegemony; but media, referees and courts tilt the field decisively, so it is not a polyarchy.',
        'State the result: a hybrid — competitive authoritarian — regime: formal democracy\'s machinery, minus the level ground that makes the machinery mean anything.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Election observation: checklists now audit the playing field before polling day, not just the count on it.',
        'Constitutional drafting: designers engineer term limits and appointment rules with backsliding in mind.',
        'Democracy assistance: budget lines for independent media, parties and audit institutions, not just elections.',
        'Investment risk: regime-type indices feed sovereign ratings and political-risk premiums.',
        'News literacy: asking "which dimension is being degraded this month?" turns vague alarm into analysis.',
      ] },
      { kind: 'callout', title: 'Common Pitfalls', tone: 'warn', text: 'Beware the binary: most countries live between the poles, and hybrid regimes can hold for decades in either direction. Indices measure different things — an electoral democracy can score well on voting and poorly on rights — so read the components, not the headline. Modernization is correlation, not clockwork: growth neither guarantees democracy nor excuses its absence.' },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'polyarchy', def: 'Dahl\'s term for a regime with high public contestation and broad inclusive participation.' },
        { term: 'contestation', def: 'The extent to which opposition can organize and realistically win power.' },
        { term: 'Duverger\'s law', def: 'Single-member districts favor two-party systems; proportional rules favor many parties.' },
        { term: 'competitive authoritarianism', def: 'Regimes with real but tilted elections, per Levitsky and Way.' },
        { term: 'executive aggrandizement', def: 'Bermeo\'s term for legal, incremental weakening of checks by sitting incumbents.' },
        { term: 'third wave', def: 'Huntington\'s name for the democratization surge that began in 1974.' },
        { term: 'V-Dem', def: 'The Varieties of Democracy project, coding hundreds of indicators per country per year.' },
      ] },
      { kind: 'quiz', items: [
        {
          q: 'Dahl\'s two dimensions of polyarchy are…',
          options: ['wealth and equality', 'public contestation and inclusive participation', 'federalism and secularism', 'turnout and trust'],
          answer: 1,
          explain: 'Who may take part, and whether the contest is real — crossing the two generates the whole spectrum of regimes.',
        },
        {
          q: 'Duverger\'s law links single-member districts to…',
          options: ['multiparty fragmentation', 'coalition cabinets', 'compulsory voting', 'two-party systems'],
          answer: 3,
          explain: 'Winner-take-all districts punish third parties whose votes are wasted, squeezing the system toward two contenders.',
        },
        {
          q: 'Competitive authoritarianism, per Levitsky and Way, is defined by…',
          options: ['elections held on a tilted playing field', 'abolition of elections', 'military rule', 'monarchy with parties'],
          answer: 0,
          explain: 'Contestation survives in form while state resources, media and referees are bent toward the incumbent.',
        },
        {
          q: 'Bermeo found today\'s most common form of democratic breakdown is…',
          options: ['military coup', 'election-day fraud', 'executive aggrandizement', 'foreign invasion'],
          answer: 2,
          explain: 'Incumbents now erode checks through legal, incremental steps rather than seizing power in one stroke.',
        },
      ] },
    ],
  },
]

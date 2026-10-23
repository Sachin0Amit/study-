import type { KnowledgeTopic } from '../types'

/** Expansion pass X23 (2026-10-22): the Japan cluster + remaining single-topic
 *  holes after a full re-audit (TOTAL was 98%, eju 82% = weakest cluster).
 *  Every topic below was cross-checked against coverage/coverage.json, the
 *  full 421-topic inventory (bun dump of KNOWLEDGE_TOPICS), the dedup ledger
 *  and the master volumes (src/data/content/*) before authoring:
 *  1. pol-democratic-government-japan — Japan's parliamentary system +
 *     contemporary society. Zero overlap: pol-contemporary-world-order owns
 *     the post-Cold-War global order; pol-india-since-independence owns
 *     India; no lesson teaches comparative parliamentary government or
 *     Japan's 1947 constitution.
 *  2. econ-japan-market-national-economy — Japan's economic agents, national
 *     economy, finance and public finance, anchored in Japan's institutions
 *     (main banks, keiretsu, BOJ, consumption tax, debt trajectory). Zero
 *     overlap: the dedicated macro/micro/fiscal/monetary lessons own the
 *     generic theory; this lesson applies it to one national system.
 *  3. hist-japan-modern-industrial — Japan's economic history from Edo to the
 *     present. Zero overlap: x18's paths-to-modernisation owns the Meiji
 *     political story in the world-history frame (referenced, not repeated);
 *     hum-industrial-revolution owns Britain's industrialization.
 *  4. chem-ions-aqueous-solution — qualitative tests for aqueous ions +
 *     volumetric analysis. Zero overlap: chem-periodic-trends is excluded
 *     (master Chemistry owns periodic trends); the master chemistry drills
 *     cover permanganate-oxalate balancing but teach no qualitative scheme.
 *  5. health-behavior-medical-care — health-behavior models and medical-care
 *     context. Zero overlap: psy-stress-coping owns stress physiology;
 *     health-vaccines-how-work owns immunization science.
 *  6. fin-financial-markets-money-capital — market structure of finance.
 *     Zero overlap: econ-monetary-policy-central-banking owns central-bank
 *     mechanics; bus-compound-interest-tvm owns the TVM mathematics;
 *     ent-startup-finance-equity owns venture raising.
 *  Sources read while writing (legally open):
 *  - OpenStax, Principles of Finance, ch. 1 (1.1, 1.5 Markets and
 *    Participants, 1.7 Financial Instruments), openstax.org (CC BY-NC-SA)
 *  - OpenStax, Population Health, ch. 10 (10.2 Theories and Models of Health
 *    Behavior) and ch. 15, via openstax.org / med.libretexts.org (CC BY)
 *  - LibreTexts, General Chemistry (Petrucci et al.) 18.9 Qualitative Cation
 *    Analysis + Analytical Chemistry supplemental module "Confirmatory
 *    Tests", chem.libretexts.org (CC BY-NC-SA)
 *  - Web Japan (Ministry of Foreign Affairs), factsheet "Governmental
 *    Structure" and Kids Web Japan "Government" pages, web-japan.org
 *  - MIT Visualizing Cultures, "Visualizing Japan (1850s-1930s):
 *    Westernization, Protest, Modernity", visualizingcultures.mit.edu
 *  - JASSO, EJU Syllabus for "Japan and the World" (2026 1st session),
 *    jasso.go.jp — used to scope the civics/econ/history units. */

export const x23JapanGapPassTopics: KnowledgeTopic[] = [
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
    id: 'econ-japan-market-national-economy',
    title: 'Economic Agents and the National Economy: Japan’s Markets, Finance and Public Finances',
    domain: 'Business & Economics',
    field: 'Political Economy',
    branch: 'Japan: Economy and Society',
    tier: 'core',
    concepts: [
      'Economic agents: households, firms, government',
      'Main-bank system and keiretsu coordination',
      'The national accounts read through Japan’s GDP path',
      'Household finance and indirect finance',
      'The Bank of Japan’s mandate and toolkit',
      'Budgets, consumption tax and social security',
      'Debt dynamics: r, g and the primary balance',
    ],
    words: 2018,
    readMins: 10,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Every economy is the same three agents — households, firms and the government — trading labour, goods, money and trust. What makes a national economy a case study is the institutional plumbing through which they trade. Japan’s plumbing is distinctive in four documented ways: firms are financed mainly through banks rather than equity markets (indirect finance), banks and their corporate clients are bound into main-bank relationships and business groups called keiretsu; large employers historically offered lifetime employment and seniority wages, which conditioned the whole labour market; households save through a postal-savings-cum-bank system of enormous scale; and the government’s general-account budget is dominated, by the 2020s, by debt service and social security. This lesson reads the standard economic concepts — agents, markets, national accounts, money, taxes and debt — through that plumbing, so the theory stays connected to the system it describes.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The examinable skill is dual: state the concept correctly (what a main bank is, what GDP measures, what the central bank can do) and then apply it to evidence (why a household saving rate of ten-odd percent matters for growth, why a debt-to-GDP ratio above 200 percent has not forced default, why the consumption tax was raised in steps). Abstract answers score half marks; the Japan-anchored versions score the whole point, because the question-setters always attach a stimulus — a chart, a table, a headline — from the national system itself.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Economic agents', def: 'The decision-makers of the economy: households (consume and supply labour), firms (produce and invest) and the government (taxes, spends and regulates). Markets and money coordinate them; the circular flow of income is the accounting identity that connects their decisions.' },
          { term: 'Main-bank system', def: 'The practice by which a firm concentrates its borrowing, settlement accounts and, in distress, its rescue with one bank — which then monitors the firm on behalf of all lenders. It substitutes relationship-based monitoring for the market-based monitoring of dispersed bondholders.' },
          { term: 'Keiretsu', def: 'Postwar business groups of firms linked by cross-shareholding, main-bank ties and long-term supplier relations — descendants of the prewar zaibatsu holding companies dissolved during the occupation. Horizontal keiretsu span industries around a bank and trading company; vertical ones chain assemblers to suppliers.' },
          { term: 'Indirect finance', def: 'Raising funds through financial intermediaries — banks taking deposits and making loans — rather than by issuing securities directly to investors. Japan’s corporate funding was long dominated by it; capital-market finance has grown but bank lending remains central.' },
          { term: 'General account', def: 'The central government’s main budget. Its revenue rests on income tax, corporate tax and the consumption tax; its largest single item of expenditure is social security, with debt service second — the arithmetic fact that makes consumption-tax politics unavoidable.' },
          { term: 'Primary balance', def: 'The budget balance excluding interest payments. A government in primary deficit is adding to its debt before a single yen of interest is paid, which is why the primary balance (not the headline balance) is the standard test of whether public debt is on a sustainable path.' },
        ],
      },
      {
        kind: 'para',
        text: 'Start with the agents and the coordination they buy. Households supply labour and savings and demand goods; firms demand labour and capital and supply goods; government taxes, spends and sets the rules. In the textbook diagram the market does the coordinating — prices signal, agents respond (the supply-demand lesson owns that mechanism, and it applies unchanged in Japan). The Japanese case adds institutional detail to the diagram: firms coordinate internally through lifetime-employment cores and supplier networks, externally through keiretsu ties and main-bank monitoring, so much coordination that markets handle directly elsewhere runs, in Japan, through long-term relationships. The gain was patient capital and supply-chain depth — the postwar system could build capacity for industries with decade-long payoffs. The costs, visible since the 1990s, were rigidity: relationship finance kept weak firms alive (the “zombie firms” literature began with Japanese banks evergreening loans), and the protected core of regular employees was balanced by a growing periphery of non-regular workers with less security and lower pay, whose rise is the labour-market story of the last thirty years.',
      },
      {
        kind: 'para',
        text: 'The national economy is measured by the same national accounts every economy uses, but Japan’s numbers have a famous shape. GDP — the market value of final goods and services (the GDP-vital-signs lesson owns the measurement; here we use it) — grew near double digits through the high-growth era of the 1950s–60s, slowed to a mature four-percent-ish pace through the 1970s–80s, then collapsed to near zero after the asset bubble burst in 1991, with deflation setting in from the late 1990s. Read through the expenditure identity, output equals consumption plus investment plus government spending plus net exports, and each Japanese era is one component’s story: high-growth decades were investment-led (capacity building by firms, financed by household savings intermediated through banks); the bubble years were asset-price-led (land and equity prices outran the cash flows they were supposed to capitalise); the post-1991 decades were consumption- and confidence-constrained, with occasional net-export booms. The arithmetic to internalise: an economy with a shrinking, ageing population can grow per person even while aggregate output stagnates — Japan’s stagnation is partly demographic arithmetic, not only demand failure.',
      },
      {
        kind: 'para',
        text: 'Finance runs through the same agents twice. On the household side, Japan’s households hold more than half their financial assets in cash and deposits — a post-bubble caution (plus an ageing population’s liquidity preference) that keeps a vast pool of savings parked at near-zero rates; on the corporate side, funding historically flowed from those deposits through banks to firms: indirect finance. At the centre sits the Bank of Japan, mandated since its 1997 law to pursue price stability and thereby contribute to the sound development of the economy. Its toolkit is the central-banking lesson’s toolkit (open-market operations, the policy rate, reserve mechanics) extended at the frontier: Japan pioneered quantitative easing in 2001, adopted a 2-percent price-stability target in 2013, and spent the 2010s–20s at the negative-rate frontier and yield-curve control, making the BOJ the examinable case of a central bank testing the limits of unconventional policy. The transmission to watch: policy easing was designed to lift inflation expectations and spending; the diagnosed failure of the 1990s–2000s — banks cleaning bad loans too slowly, households expecting no inflation — is why the same toolkit produced different results in different decades.',
      },
      {
        kind: 'para',
        text: 'Public finance is the same agents’ third loop, and Japan’s fiscal facts are stark. The general account collects mainly income, corporate and consumption taxes; the consumption tax — introduced at 3 percent in 1989, raised to 5 in 1997, 8 in 2014 and 10 in 2019 — was each step a political event precisely because it taxes a politically sensitive base evenly. Spending is dominated by social security (pensions, health care, long-term care for the world’s oldest population) and then debt service. Because spending outgrew revenue for three decades, the gross debt-to-GDP ratio climbed past 200 percent — the highest in the developed world — sustained by two conditions the debt-dynamics frame makes precise: interest rates below the growth rate (r below g), so the debt ratio can stabilize even with primary deficits, and a domestic institutional investor base (household savings intermediated by banks, insurers and the public pension fund) that keeps government debt held at home. The examinable risk analysis: sustainability holds while r stays below g and the primary balance improves; ageing works in the opposite direction on both margins — more social spending and, in open-economy terms, more pressure on the savings pool — which is why every fiscal-consolidation plan is a fight over the consumption tax and the social-security formula.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Decompose a Year of Japan’s Growth into Its Agents',
        steps: [
          'Frame with the identity: GDP growth this year = contribution of household consumption + private investment + government spending + net exports. Each term is an agent’s decision aggregate.',
          'Assign the household term: consumption growth tracks wage growth and confidence; in a dual labour market, check regular versus non-regular pay separately — the average can mislead.',
          'Assign the firm term: investment responds to capacity utilisation and expected demand; post-bubble Japan shows why expectations matter — low rates did not produce an investment boom when firms were deleveraging.',
          'Assign the government term: separate discretionary stimulus (supplementary budgets) from automatic stabilisers (social security rising with unemployment and ageing).',
          'Assign the external term: net exports move with the exchange rate and global demand; a yen depreciation helps export revenues before import costs — the J-curve logic.',
          'Conclude with the accounting: the agent whose contribution is largest is the year’s policy story — a consumption-led year invites wage-policy questions; an investment-led year invites credit-condition questions.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Indirect finance means firms raise funds…',
          options: ['directly from stock markets', 'through intermediaries such as banks that pool deposits and make loans', 'from government grants', 'by reinvesting all their own profits'],
          answer: 1,
          explain: 'Banks intermediate between depositors and borrowers; Japan’s corporate funding has historically run mainly through this channel rather than through securities markets.',
        },
        {
          q: 'A main-bank relationship matters most when a borrower firm is…',
          options: ['listing shares for the first time', 'in financial distress', 'paying high dividends', 'exporting aggressively'],
          answer: 1,
          explain: 'The main bank monitors the firm on behalf of lenders and organises rescue lending or restructuring in distress — relationship-based monitoring is the system’s core function.',
        },
        {
          q: 'Japan’s gross government debt exceeds 200 percent of GDP yet has not forced a default, largely because…',
          options: ['the debt is owed in foreign currency', 'interest rates have stayed below the growth rate and the debt is domestically held', 'the constitution forbids default', 'the IMF guarantees it'],
          answer: 1,
          explain: 'With r below g the debt ratio can stabilise despite primary deficits, and Japan’s debt is overwhelmingly held domestically by banks, insurers and pension funds — the two conditions the dynamics test turns on.',
        },
        {
          q: 'The consumption tax matters to Japan’s public finances because…',
          options: ['it is the largest single tax revenue source', 'it is the most stable base as the population ages', 'it funds only the military', 'it is levied only on imports'],
          answer: 1,
          explain: 'Income and corporate taxes shrink with an ageing workforce; consumption taxation spreads the base across the whole population, which is why every consolidation plan leans on it (3→5→8→10 percent).',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Treating keiretsu as reincarnated zaibatsu: the prewar zaibatsu were holding companies centred on family control and were dissolved under the occupation; keiretsu are looser networks of cross-shareholding and main-bank ties. Reading Japan’s stagnation as pure demand failure: demographic arithmetic (a shrinking workforce) delivers stagnation in per-country terms even with healthy per-worker output. Assuming bank-dominated finance means no capital markets: equity and bond markets exist and grew, but relationship finance stayed the default for most firms. Citing the debt ratio alone as proof of crisis: the sustainability test is the primary balance and the r–g gap, not the headline ratio. And forgetting the transmission failure: the same BOJ toolkit produced deflation in the 2000s and (eventually) reflation after 2013 — the instruments did not change as much as the expectations and balance-sheets they acted on.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the supply-demand lesson for market coordination, and the GDP vital-signs lesson for the national accounts. Follow with fiscal policy and monetary policy (the generic theory this lesson applies), and the Japan economic-history lesson for how this system was built. Standard readings: the Bank of Japan’s own explainer pages (boj.or.jp) on its mandate and operations, and the Ministry of Finance budget overview for the general-account arithmetic.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Three agents — households, firms, government — coordinate through markets and through Japan’s distinctive institutions: main banks, keiretsu, lifetime-employment cores.',
        'The trade-off of relationship-based coordination: patient capital and deep supply chains, but zombie firms and a dual labour market of regular versus non-regular workers.',
        'Japan’s GDP path: investment-led high growth, asset bubble to 1991, then near-zero growth with deflation — partly demography, partly balance-sheet repair.',
        'Finance: households hold over half their assets in cash and deposits; funding flows indirectly through banks; the BOJ pioneered quantitative easing (2001) and negative rates.',
        'Public finance: general account dominated by social security and debt service; consumption tax 3→5→8→10; debt above 200 percent of GDP sustained by r below g and domestic holdings.',
        'The sustainability test is the primary balance plus the r–g gap — ageing pushes both the wrong way.',
      ] },
    ],
  },
  {
    id: 'hist-japan-modern-industrial',
    title: 'Japan’s Economic History: From Edo Commerce to the International Economy',
    domain: 'Humanities',
    field: 'History',
    branch: 'East Asian History',
    tier: 'core',
    concepts: [
      'Edo commercial economy and the 1853 opening',
      'Meiji state-led industrialisation',
      'Zaibatsu and the war economy',
      'Occupation reforms: land, labour, zaibatsu',
      'The 1955–73 high-growth miracle',
      'Industrial policy and the trading state',
      'Bubble, stagnation and reinvention',
    ],
    words: 2053,
    readMins: 10,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Japan’s economic history is the modern world’s cleanest experiment in catching up, and it ran twice. In the nineteenth century a country sealed for two centuries opened under pressure and industrialised in one generation — the first non-Western state to do so. After 1945 the same society, bombed to rubble and stripped of its empire, returned to the frontier within a generation and by 1968 stood as the world’s second-largest market economy. The two episodes used overlapping methods — state-led model building, imported technology, high savings converted to investment through banks — and ended in the same question every developing economy still asks: how much of the miracle was policy, how much was luck, and what happens when the engine stalls? This lesson follows the arc from Edo commerce through Meiji industry, war and occupation, the high-growth decades, the bubble and the long stagnation, to the industries through which Japan still plugs into the world economy.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The lesson matters twice over. Historically, it is the counter-case to colonisation: Japan modernised without losing sovereignty, and the difference between Japan’s path and China’s in the same decades is the standard comparative question. Economically, its instruments — model factories sold to private groups, an industrial-policy ministry steering credit and imports, export discipline — became the reference point for every later East Asian developer. Whichever paper you meet it on, the evidence base is the same: dated policies, measurable outcomes, and a bubble-and-stagnation coda that turns the success story into a warning.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Sankin-kōtai economy', def: 'The Tokugawa order in which daimyo lords alternated residence in Edo, their processions monetising roads, post towns and urban consumption — the fiscal glue of a realm at peace that also built the commercial economy Japan industrialised from.' },
          { term: 'Model factories', def: 'The Meiji state’s pilot plants and infrastructure — mines, shipyards, the 1872 Tokyo–Yokohama railway, Tomioka silk mill (1872) — built with state money, run with foreign experts, and sold cheaply to private firms once proven: the clearest case of the state as demonstrator rather than operator.' },
          { term: 'Zaibatsu', def: 'Prewar family-controlled holding groups (Mitsui, Mitsubishi, Sumitomo, Yasuda) combining banks, trading companies and industry. Dissolved (partially) during the occupation as obstacles to competition, they re-emerged in looser postwar form as keiretsu.' },
          { term: 'Income Doubling Plan', def: 'Prime Minister Ikeda Hayato’s 1960 plan committing Japan to double national income in a decade through public investment and export growth — a policy-as-anticipation device that shifted consumer expectations and arguably helped deliver the doubling, on schedule, by 1967–68.' },
          { term: 'Industrial policy', def: 'The Ministry of International Trade and Industry’s toolkit — foreign-exchange allocation, import licensing, “administrative guidance”, targeted credit and export promotion — steering private investment into chosen industries. MITI is the twentieth century’s most-cited case of state-led industrial upgrading.' },
          { term: 'Plaza Accord', def: 'The September 1985 agreement by which the G5 coordinated depreciation of the overvalued dollar; the yen’s sharp appreciation triggered domestic easing that inflated the late-1980s asset bubble — the proximate policy episode before the crash.' },
        ],
      },
      {
        kind: 'para',
        text: 'The Tokugawa peace (1603–1868) looks like a prologue and is in fact the base camp. Political unification, the smashing of castles’ war economies into a rice-tax fiscal order, and the sankin-kōtai hostage-residence system turned the country’s elite spending toward Edo — a city of about a million by 1700, among the largest on earth — and monetised the routes that fed it. Osaka became the rice-exchange capital, complete with warehouse receipts traded forward: the Dōjima rice market, formally organised in 1730, is among the world’s earliest licensed futures markets. Literacy spread through temple schools and printed books; merchant houses (Mitsui dates its currency exchange to 1683) accumulated scale and credit. When Commodore Perry’s “black ships” forced the treaty-port opening in 1853–54, they did not land on a subsistence economy but on a commercialised, literate, fiscally sophisticated society with an artisan-industrial base — the reason Japan could industrialise so quickly was substantially the Edo inheritance.',
      },
      {
        kind: 'para',
        text: 'The Meiji state (from 1868) then industrialised on purpose. The political story is the modernisation lesson’s; the economic mechanics deserve their own list. Fiscal consolidation: land-tax reform (1873) commuted rice payments into a stable money tax, giving the state a reliable revenue floor. Demonstrator-enterprise: the government built what private capital could not — mines, shipyards, railways (Tokyo–Yokohama, 1872), the Tomioka silk mill — staffed with hired foreign engineers, then privatised them cheaply in the 1880s to entrepreneurs who scaled them (the origin of several zaibatsu). Human capital: compulsory schooling produced, by the early twentieth century, among the world’s highest literacy rates; students and experts flowed out and in. Sector sequence: textiles first — silk and cotton, labour-intensive, export-earning (by 1900 Japan supplied a large share of the world’s raw silk to the very mills of Lyon and Lancashire it emulated) — then heavy industry once the surplus and skills allowed: steel (Yawata, 1901), shipbuilding (which boomed during the First World War when Western capacity was committed), chemicals. Victory over China (1895) and Russia (1905) came with indemnities, markets and resources; the same industrial machine, as the modernisation lesson stresses, then served empire — Manchuria’s puppet-economy and the war economy of the 1930s–45, in which the state directed allocation through “important industries” controls and the military absorbed the output. Defeat in 1945 destroyed roughly a quarter of the national wealth and the empire with it.',
      },
      {
        kind: 'para',
        text: 'The occupation (1945–52) rebuilt the platform the miracle ran on. Three reforms matter. Land reform (1946–50) transferred ownership from absentee landlords to tillers, creating the smallholder rural base that later fed cities and voted for the new order. The zaibatsu dissolution — partial, as implemented — broke the holding-company core and opened competitive space; labour law legalised unions, whose “spring offensive” wage bargaining became an institution. The postwar settlement then combined an undervalued fixed exchange rate (360 yen to the dollar, set 1949 and held until 1971), a high household savings rate intermediated through banks (the finance lesson’s indirect finance), technology imported under licence, and an industrial-policy state: the Ministry of International Trade and Industry steered foreign exchange and credit toward chosen industries and pressed firms to export. The results were extraordinary: GDP grew near ten percent a year from the mid-1950s to 1973; the 1960 Income Doubling Plan doubled national income roughly on schedule; the 1964 Tokyo Olympics symbolised re-entry; and in 1968 Japan passed West Germany to become the world’s second-largest market economy. The growth shifted gears on schedule — textiles to shipbuilding and steel to automobiles and electronics — as catch-up exhausted its easiest technologies, exactly as the model predicts.',
      },
      {
        kind: 'para',
        text: 'The bubble and its hangover are the cautionary half. The 1985 Plaza Accord’s yen appreciation threatened exporters, so policy eased; money flooded into assets, and by the late 1980s land and equity prices ran far beyond any cash-flow justification — the grounds of the Imperial Palace were famously said to be worth more than all the real estate of California, and the Nikkei index peaked at 38,915 on the last trading day of 1989. When the Bank of Japan tightened and prices turned, the balance-sheet damage (banks carrying bad collateral loans, firms carrying underwater land) produced Japan’s “lost decades”: near-zero growth, deflation from the late 1990s, zombie firms kept alive by evergreened loans, and the slowest banking clean-up of any major crisis — all of it the finance lesson’s debt-deflation case study in national form. Reinvention came slowly: the 2001 quantitative-easing pioneer (the monetary lesson’s frontier), regulatory clean-ups, and from 2013 the reflation programme remembered by its components — bold monetary easing, flexible fiscal policy, and growth strategy — which ended fifteen years of falling prices without restoring the old growth engine. The industries that carry Japan into the present are the mature heirs of the high-growth sequence: automobiles and their supply chains, machinery and precision tools, electronics components rather than consumer devices, robotics (Japan long supplied the majority of the world’s industrial robots), and a trading position woven into Asian supply chains — with the persistent weaknesses of the 2010s–20s (demographic shrinkage, digitalisation lag, a dual labour market) defining the current experiment: whether a mature, ageing economy can grow through productivity rather than catch-up.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Was the High-Growth Miracle Policy or Circumstance?',
        steps: [
          'List the candidate causes: state industrial policy (MITI), high savings financing investment, the fixed undervalued exchange rate, imported technology under licence, a young and educated workforce, postwar reconstruction catch-up, and global trade expansion.',
          'Test policy claims against counter-evidence: MITI chose losers too (it resisted Sony’s entry into transistors and tried to consolidate the car industry into fewer firms); administrative guidance worked where export discipline did — so policy mattered most as coordination and competition-tempering, not as command.',
          'Test circumstance: every late developer reaped catch-up growth, but only some sustained it — the differentiator is the conversion of savings into productive investment, which is exactly what main-bank finance and stable politics provided.',
          'Weigh demography: the miracle decades coincided with a falling dependency ratio — the dividend the demographic-transition lesson names — which mechanically flatters per-capita growth.',
          'Conclude: policy set the direction and tempered the market, but the miracle’s engine was savings converted to investment at high speed; the same machinery later amplified the bubble — the strength and the vulnerability were the same thing.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The Dōjima rice market (1730) is historically significant as…',
          options: ['Japan’s first bank', 'one of the world’s earliest licensed futures markets', 'a state monopoly on rice exports', 'the Tokugawa treasury'],
          answer: 1,
          explain: 'Osaka’s Dōjima exchange traded warehouse receipts forward under official licence — evidence that Edo Japan was already financially sophisticated before Western contact.',
        },
        {
          q: 'The Meiji state’s characteristic industrial method was…',
          options: ['perpetual nationalisation of heavy industry', 'building model enterprises and then selling them to private firms', 'banning foreign technology', 'relying on colonial tribute alone'],
          answer: 1,
          explain: 'Model factories, mines and railways were built with state funds and foreign experts, privatised cheaply in the 1880s — the state demonstrated, entrepreneurs scaled.',
        },
        {
          q: 'Japan became the world’s second-largest market economy in…',
          options: ['1955', '1964', '1968', '1985'],
          answer: 2,
          explain: '1968, passing West Germany during the high-growth era — four years after the Tokyo Olympics marked re-entry, and a year into the Income Doubling Plan’s promised horizon.',
        },
        {
          q: 'The Plaza Accord (1985) contributed to the bubble because…',
          options: ['it raised the consumption tax', 'yen appreciation triggered domestic easing that inflated asset prices', 'it imposed import quotas', 'it deregulated land sales directly'],
          answer: 1,
          explain: 'Coordinated dollar depreciation lifted the yen, policy eased to protect exporters, and the money found land and equities — the standard chain from Accord to bubble.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Starting Japan’s economy with Perry: the Edo era’s commercialisation, urbanisation and literacy were the preconditions of fast industrialisation — the black ships opened a modernising economy, not a static one. Equating MITI with command planning: firms remained private and competitive; the ministry steered credit, forex and guidance, and its failures (resisting new entrants, attempted car-industry consolidation) are as documented as its wins. Dating the zaibatsu’s end to the occupation too firmly: dissolution was partial and the networks re-formed as keiretsu. Treating the lost decades as one uniform slump: the 1990s were balance-sheet repair, the 2000s deflation, the 2010s reflation attempts — different diagnoses, different policies. And attributing the miracle to culture alone: savings behaviour, education and institutions explain the mechanism; “culture” explains nothing a policy can change.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the paths-to-modernisation material in the world-history lesson for the Meiji political frame, and the industrial-revolution lesson for the first industrialiser Japan emulated. Follow with the economic-agents-and-national-economy lesson (the system’s plumbing) and the post-Cold-War order lesson (Japan’s place in it). Primary readings: MIT Visualizing Cultures, “Visualizing Japan (1850s–1930s): Westernization, Protest, Modernity” (visualizingcultures.mit.edu), and the Ministry of Foreign Affairs’ Web Japan factsheets on economy and government (web-japan.org).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Edo inheritance: peace, rice-tax fiscal order, sankin-kōtai urbanisation, Dōjima futures (1730), high literacy — the platform Perry opened in 1853.',
        'Meiji mechanics: land-tax reform (1873), model enterprises privatised to entrepreneurs, compulsory schooling, textile-first exports, then steel and shipbuilding.',
        'War economy and defeat: state-directed industry served empire; 1945 destroyed a quarter of national wealth.',
        'Occupation platform: land reform, (partial) zaibatsu dissolution, labour rights, 360-yen fixed rate.',
        'High growth 1955–73: near-ten-percent annual growth, Income Doubling Plan (1960), Tokyo Olympics (1964), second-largest market economy (1968) — savings through banks into investment, steered by MITI.',
        'Bubble and after: Plaza Accord (1985), Nikkei peak 38,915 (1989), lost decades, QE pioneer (2001), reflation from 2013 — today’s industries: autos, machinery, robotics, precision components.',
      ] },
    ],
  },
  {
    id: 'chem-ions-aqueous-solution',
    title: 'Reactions of Ions in Aqueous Solution: Qualitative Tests and Volumetric Analysis',
    domain: 'Physical Sciences',
    field: 'Chemistry',
    branch: 'Analytical Chemistry',
    tier: 'core',
    concepts: [
      'Solubility rules and net ionic equations',
      'Flame tests and cation hydroxide precipitates',
      'Amphoteric hydroxides and ammonia complexes',
      'Anion confirmatory tests: halide, sulfate, carbonate, nitrate',
      'Standard solutions and primary standards',
      'Acid-base titration calculations and indicators',
      'Redox titrations and self-indicating permanganate',
    ],
    words: 2006,
    readMins: 10,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'An aqueous solution hides its contents — unless you know how to make them show themselves. Qualitative analysis is the craft of triggering reactions whose visible results (a colour, a precipitate, a gas) identify which ions are present; volumetric analysis is the quantitative partner, measuring how much of an ion or acid is there by reaction with a solution of exactly known concentration. Both rest on one body of theory: the solubility rules decide which pairs of ions form precipitates, acid-base and complexation equilibria decide what dissolves what, and redox chemistry drives the titrations that end with a self-colouring endpoint. This lesson assembles the working scheme — solubility logic, the cation tests, the anion tests, and the titration bench — the way it is asked: as observations to predict and equations to write.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'This is chemistry at its most examinable: every question is a two-line observation and a one-line inference, and the marks live in writing the correct net ionic equation. The scheme is also real laboratory practice — the same group separations and confirmatory tests run in teaching labs worldwide, and the titration is still the standard method for standardising reagents. Master the logic here and the wet-bench questions become the fastest marks on the paper.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Precipitate', def: 'An insoluble solid formed when two solutions are mixed — the visible product of ions exceeding the solubility product (the equilibrium lesson owns the Ksp arithmetic; here the solubility rules do the qualitative work).' },
          { term: 'Net ionic equation', def: 'The equation showing only the species that actually react: for AgNO3 + NaCl the spectator ions (Na+, NO3−) are dropped to leave Ag+ + Cl− → AgCl (s). Writing it correctly is the standard one-mark skill in every ion question.' },
          { term: 'Confirmatory test', def: 'A specific test performed on an isolated ion or precipitate whose positive result alone identifies the ion — e.g. dissolving a white precipitate in ammonia to confirm chloride (as opposed to a screening test that only narrows the possibilities).' },
          { term: 'Amphoteric hydroxide', def: 'A hydroxide precipitate that dissolves in excess strong alkali because it reacts further to form a soluble hydroxo-complex — Al(OH)3, Zn(OH)2 and Pb(OH)2 do this; Cu(OH)2 and Fe(OH)3 do not, which is precisely how the distinction is tested.' },
          { term: 'Standard solution', def: 'A solution of accurately known concentration, made either from a primary standard (stable, pure, unhygroscopic, high molar mass — anhydrous sodium carbonate or potassium hydrogenphthalate) or by standardising against one.' },
          { term: 'Equivalence point and endpoint', def: 'The equivalence point is the stoichiometric completion of the titration reaction; the endpoint is the indicator’s colour change. A good titration chooses an indicator whose endpoint brackets the equivalence point — strong acid–strong base tolerates phenolphthalein or methyl orange; weak acid–strong base needs phenolphthalein.' },
        ],
      },
      {
        kind: 'para',
        text: 'Everything begins with the solubility rules, because they predict where a precipitate can appear at all. The reliable generalisations: all nitrates and all group-1 and ammonium salts are soluble; sulfates are soluble except barium, lead and (slightly) calcium and silver; halides are soluble except silver, lead(II) and mercury(I); carbonates, hydroxides and sulfides of everything except group 1 and ammonium are insoluble. From these, every test reaction is a net ionic equation. Mixing solutions of silver nitrate and sodium chloride gives Ag+(aq) + Cl−(aq) → AgCl(s), a white curdy precipitate that darkens in light; the sodium and nitrate ions are spectators. The rules also explain selective precipitation — the analytical engine of cation group separation: add a reagent whose anion precipitates only some cations, filter, then change conditions and precipitate the next set. Classic qualitative schemes divide cations into groups exactly this way (chlorides first, then acid-sulfides, then hydroxides, then carbonates, with the alkali and ammonium ions left to flame tests), and the underlying equilibrium logic — how Ksp, pH and complexation decide which ion drops out — is the solubility-and-complex-ion chapter’s territory (see the equilibrium lesson for the Le Chatelier machinery).',
      },
      {
        kind: 'para',
        text: 'Cation identification runs on two quick screens and one systematic core. The flame test exploits electron transitions: clean a platinum or nichrome wire in concentrated hydrochloric acid, dip it in the sample, and hold it in a non-luminous Bunsen flame — sodium gives an intense golden-yellow (masking everything, so it is tested last or through cobalt glass), potassium lilac (viewed through cobalt glass to filter the sodium), calcium brick-red, strontium crimson, barium apple-green, copper(II) blue-green. The wet screen uses sodium hydroxide solution dropwise, then in excess: Mg2+, Al3+, Zn2+, Pb2+ give white precipitates; Cu2+ pale blue; Fe2+ dirty green (browning on standing as it oxidises); Fe3+ rust-brown; Ca2+ a faint white that only appears at volume. The decisive second step is the excess: Al(OH)3, Zn(OH)2 and Pb(OH)2 are amphoteric and redissolve in excess NaOH to colourless solutions (aluminate, zincate, plumbate), while Mg(OH)2, Cu(OH)2 and Fe(OH)3 persist — so “white precipitate that redissolves in excess” is already a three-cation shortlist. Ammonia solution refines it: Cu(OH)2 dissolves in excess NH3 to the deep royal-blue tetraamminecopper(II) complex ([Cu(NH3)4]2+), zinc redissolves too but colourless, while aluminium’s hydroxide — without acidic character toward the weak base in water — stays put. That trio of reagents (flame, NaOH dropwise/excess, NH3 dropwise/excess) plus the solubility rules separates the common cations with almost no ambiguity.',
      },
      {
        kind: 'para',
        text: 'Anion tests are a set of five confirmatory reactions worth memorising as equations. Halides: acidify with dilute nitric acid (to remove carbonate and hydroxide interferents), then add silver nitrate — chloride gives a white precipitate soluble in dilute ammonia, bromide a cream precipitate soluble only in concentrated ammonia, iodide a yellow precipitate effectively insoluble in ammonia; the trend follows falling solubility down the AgX series. Sulfate: acidify, then add barium chloride or barium nitrate — a dense white precipitate of BaSO4, insoluble in acid, confirming sulfate. Carbonate or hydrogencarbonate: add dilute acid — effervescence of CO2, which turns limewater milky (Ca(OH)2 + CO2 → CaCO3 + H2O). Sulfite behaves similarly (SO2, which decolourises acidified dichromate), so the gas test distinguishes them. Nitrate: the brown-ring test — freshly prepared iron(II) sulfate solution added to the sample, then concentrated sulfuric acid poured down the side forms a brown ring at the junction (the nitrosyl complex [Fe(H2O)5NO]2+); modern schemes substitute devarda’s alloy or aluminium foil in alkali, releasing ammonia. Chloride (as distinct from halide-in-general) needs none of this if the flame and silver tests are already done. As ever, sequence matters: test carbonate before halide (acid first would destroy carbonate), and never test nitrate after adding nitric acid.',
      },
      {
        kind: 'para',
        text: 'Volumetric analysis makes the qualitative quantitative. The bench grammar: a standard solution (from a primary standard weighed on a balance — stable, unhygroscopic, high molar mass so the relative weighing error is small) fills the burette; a measured volume of the unknown (delivered by pipette, hence known to ±0.05 mL) sits in the flask with an indicator; titrate to the endpoint and read the burette to 0.05 mL. The calculation is the mole bridge: n = c × V for each reactant, then scale by the stoichiometric ratio. A worked frame: 25.0 mL of hydrochloric acid of unknown concentration is neutralised by 22.30 mL of 0.100 mol/L NaOH — moles NaOH = 0.100 × 0.02230 = 2.23 × 10−3; the ratio is 1:1, so the acid contains the same moles in 0.0250 L, giving 0.0892 mol/L. Indicators are chosen by titration curve: strong acid–strong base has a steep vertical region around pH 7 wide enough for phenolphthalein (colourless→pink) or methyl orange (red→yellow); weak acid–strong base (acetic acid/NaOH) has its equivalence point above pH 7, so phenolphthalein; strong acid–weak base needs methyl orange. Redox titrations run the same arithmetic on electron stoichiometry: acidified potassium manganate(VII) needs no indicator because the intense purple MnO4− decolourises as it oxidises and the first excess drop turns the flask permanent pale pink — a self-indicating titration (the master drill volume’s permanganate–oxalate problem is exactly this chemistry). Iodine titrations use starch as the indicator: blue-black with the first excess I2.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Identify Three Unknowns from Observations',
        steps: [
          'Unknown A: flame test gives golden-yellow. Sodium is present — but sodium’s flame is so intense it masks co-cations, so A is at least Na+, possibly mixed; report the sodium and note the limitation.',
          'Unknown B: NaOH dropwise gives a white precipitate that redissolves in excess NaOH; ammonia dropwise gives the same white precipitate that does NOT redissolve in excess ammonia. Amphoteric but ammonia-insoluble: Al3+ (zinc would have redissolved in both).',
          'Unknown C: NaOH dropwise gives a pale blue precipitate insoluble in excess NaOH; excess ammonia dissolves it to a deep royal-blue solution. Cu2+ confirmed by the tetraammine complex colour.',
          'Write the equations: Al3+ + 3OH− → Al(OH)3(s), then Al(OH)3 + OH− → [Al(OH)4]−(aq); Cu2+ + 2OH− → Cu(OH)2(s), then Cu(OH)2 + 4NH3 → [Cu(NH3)4(H2O)2]2+ + 2OH−.',
          'Cross-check with the solubility rules: none of the identified products violates them, and no other common cation matches the colour set — the identification is as complete as the scheme allows.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A solution gives a cream precipitate with silver nitrate that dissolves only in concentrated ammonia. The ion is…',
          options: ['chloride', 'bromide', 'iodide', 'sulfate'],
          answer: 1,
          explain: 'AgBr is cream and needs concentrated ammonia; AgCl is white (dilute ammonia), AgI is yellow (insoluble), sulfate does not respond to silver nitrate under these conditions.',
        },
        {
          q: 'A white hydroxide precipitate redissolves in excess NaOH but NOT in excess ammonia. The cation is…',
          options: ['Zn2+', 'Cu2+', 'Al3+', 'Fe2+'],
          answer: 2,
          explain: 'Aluminium hydroxide is amphoteric (redissolves in alkali) but does not form an ammine complex; zinc redissolves in both, copper gives a blue ammine complex, iron(II) hydroxide is green.',
        },
        {
          q: 'The nitrate brown-ring test works because…',
          options: ['nitrate is coloured', 'iron(II) is oxidised to brown iron(III) hydroxide', 'concentrated H2SO4 generates nitrosyl cation that forms a brown iron complex at the junction', 'the barium nitrate precipitates'],
          answer: 2,
          explain: 'In the acid layer, nitrate is reduced to NO, which binds Fe2+ as the brown nitrosyl complex [Fe(H2O)5NO]2+ — a ring at the acid–solution interface.',
        },
        {
          q: '25.0 mL of HCl is neutralised by 22.30 mL of 0.100 mol/L NaOH. The acid concentration is…',
          options: ['0.0892 mol/L', '0.112 mol/L', '0.0223 mol/L', '0.100 mol/L'],
          answer: 0,
          explain: 'n(NaOH) = 2.23 × 10−3 mol; 1:1 ratio; c = n/V = 2.23 × 10−3 / 0.0250 = 0.0892 mol/L.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Testing halides without first acidifying with dilute nitric acid: carbonates and hydroxides give silver precipitates that mimic halides. Using hydrochloric acid as the acidifier: it adds chloride and ruins the silver test. Calling the endpoint the equivalence point: they coincide only when the indicator is chosen for the curve. Writing full equations when the question asks for ionic ones (and vice versa) — read the instruction, because the mark scheme distinguishes them. Forgetting that sodium’s flame masks other metals: test sodium last, or screen through cobalt glass for potassium. And in titration arithmetic, confusing the 1:1 ratio with the 2:1 one — write the balanced equation before touching the numbers; the dilution and washing errors (reading the meniscus at eye level, rinsing the burette with water instead of the titrant) are the classic procedural deductions.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the equilibrium lesson for the Ksp and Le Chatelier logic under selective precipitation. Follow the master Chemistry drills for titration arithmetic under exam conditions (the permanganate–oxalate and saponification problems are the standard redox and back-titration cases). Primary readings: LibreTexts, General Chemistry (Petrucci et al.), section 18.9 “Qualitative Cation Analysis”, and the Analytical Chemistry supplemental module “Confirmatory Tests” (chem.libretexts.org, CC BY-NC-SA).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Solubility rules predict precipitates; every test reduces to a net ionic equation with spectators dropped.',
        'Cation scheme: flame tests (Na yellow, K lilac, Ca brick-red, Cu blue-green), then NaOH dropwise/excess for hydroxide colours, then NH3 — amphoterism (Al, Zn, Pb redissolve in alkali) and ammine complexes (Cu deep blue) finish the job.',
        'Anion scheme: halides via AgNO3 (white/cream/yellow, ammonia solubility distinguishes), sulfate via Ba2+ white precipitate, carbonate via acid + limewater, nitrate via the brown ring.',
        'Volumetric analysis: primary-standard solutions, pipette and burette technique, n = cV with stoichiometric ratios, indicator matched to the titration curve.',
        'Redox titrations: MnO4− is self-indicating (purple → colourless → permanent pink at the endpoint); iodine uses starch.',
        'Sequence discipline: carbonate before halide, sodium flame last, endpoint read to 0.05 mL.',
      ] },
    ],
  },
  {
    id: 'health-behavior-medical-care',
    title: 'Health Behavior and Medical Care: Models of Change and the Context of Care',
    domain: 'Health & Wellness',
    field: 'Public Health',
    branch: 'Health Behavior',
    tier: 'core',
    concepts: [
      'Health behavior and its preventable burden',
      'Health Belief Model: six constructs',
      'Transtheoretical stages of change',
      'Theory of planned behavior and self-efficacy',
      'Doctor–patient interaction and adherence',
      'Access, disparities and social determinants',
    ],
    words: 1899,
    readMins: 9,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'The biggest killers are, increasingly, behaviours: smoking, diet, inactivity, alcohol — risks people choose, repeat and can change. That is why the science of health behavior exists: a body of models that predicts when people adopt protective actions (screening, vaccination, exercise, cessation) and designs interventions that actually move them. It pairs with the study of medical care itself — what happens in the consultation, why patients so often do not take the treatment they agreed to, and why access and outcomes differ so sharply across income, race and geography. This lesson covers both halves: the models that explain health behaviour change, and the care context in which advice is given, followed or ignored. The stress-and-coping lesson covers the physiology of pressure; here the subject is behaviour and the system around it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every professional that touches health — clinicians, public-health planners, insurers, policymakers — works through these models, and exams test them as named constructs: the six Health Belief Model dimensions, the six stages of change, the planned-behaviour trio of attitudes, norms and control. The skill being tested is diagnostic: given a scenario (“he thinks screening is unnecessary because he feels fine”), name the construct (low perceived susceptibility) and the intervention lever (risk communication). Scenario-to-construct-to-leverage is the whole game, and it is learnable.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Health behavior', def: 'Any action a person takes that affects health — preventive (screening, vaccination, exercise), risky (smoking, drinking) or sick-role (seeking care, taking medicine). Studied as decision-making under imperfect information, habit and social influence.' },
          { term: 'Perceived susceptibility and severity', def: 'The two threat components of the Health Belief Model: how likely a person thinks a condition is to strike them, and how serious its consequences would be. Together they set the perceived threat that motivates (or fails to motivate) action.' },
          { term: 'Perceived benefits and barriers', def: 'The two action-evaluation components: how effective the person believes the recommended behaviour would be, weighed against what it costs — money, time, pain, embarrassment, inconvenience. Action follows when benefits outweigh barriers.' },
          { term: 'Cues to action and self-efficacy', def: 'The model’s triggers and confidence terms: cues (symptoms, reminders, campaigns, a doctor’s advice) activate readiness, and self-efficacy — Bandura’s term for belief in one’s own capability — determines whether readiness becomes behaviour.' },
          { term: 'Stages of change', def: 'The Transtheoretical Model’s sequence — precontemplation, contemplation, preparation, action, maintenance (and termination) — with the practical rule that interventions must match the stage: advice pitched at someone in precontemplation bounces off.' },
          { term: 'Adherence', def: 'The degree to which a patient follows a agreed treatment plan — taking medication as prescribed, attending appointments, keeping lifestyle changes. Non-adherence is one of the largest modifiable causes of treatment failure in modern medicine.' },
          { term: 'Social determinants of health', def: 'The conditions in which people are born, live, work and age — income, education, housing, neighbourhood, employment — that systematically shape both health behaviour and access to care, producing the disparities the clinical encounter alone cannot fix.' },
        ],
      },
      {
        kind: 'para',
        text: 'The Health Belief Model is the field’s founding framework, built in the 1950s by U.S. Public Health Service researchers studying why people declined free tuberculosis screening — the founding observation being that even free, easy prevention fails when beliefs do not support it. Its logic: the likelihood of a protective action rises with perceived threat (susceptibility × severity) and perceived benefit, falls with perceived barriers, and is triggered by cues to action — with self-efficacy added later as the confidence condition. Every construct is a measurable belief and therefore an intervention target: education raises perceived susceptibility (personalised risk feedback), vividness raises perceived severity (survivor testimony), convenience lowers barriers (clinic hours, transport), reminders act as cues, and skills training builds efficacy. The model’s evidence base spans decades of vaccination and screening research — a widely cited study of HPV-vaccination uptake among college students used the constructs to identify who was at risk of non-completion and which supports (knowledge, provider recommendation, benefit-framing) moved completion — and its limits are equally examinable: it underweights habit, emotion and social norms, which is precisely what the later models supply.',
      },
      {
        kind: 'para',
        text: 'The Transtheoretical Model adds time: change is a process, not a decision. Derived from studies of smokers who quit on their own, it names the stages — precontemplation (no intention within six months), contemplation (intending within six months), preparation (intending within thirty days and already taking steps), action (behaviour changed for under six months), maintenance (over six months), and the idealised termination (no temptation, full confidence) — and insists the model is circular, not linear: relapse returns a person to an earlier stage, which is normal rather than failure. The stage-matching principle is its practical core: with a precontemplator you raise awareness and consciousness of the problem; with a contemplator you work on decisional balance and ambivalence; with a prepared actor you help set concrete plans; with a maintainer you guard against relapse triggers. The theory of planned behaviour completes the individual-level trio: intention — the immediate determinant of behaviour — is predicted by attitude toward the behaviour, subjective norms (what important others approve and do), and perceived behavioural control (which shades into Bandura’s self-efficacy). And the social-ecological frame zooms out one level: behaviour sits in nested contexts — family, workplace, community, policy — so a school’s food environment or a city’s bike lanes can shift more behaviour than any pamphlet, which is why population programmes stack individual counselling with environmental change.',
      },
      {
        kind: 'para',
        text: 'The medical-care half begins in the consultation. The doctor–patient interaction is itself a health behaviour setting: communication quality predicts understanding, trust, recall and follow-through. The classic literature contrasts paternalistic models (doctor decides), informative models (patient chooses with facts) and shared decision-making (both bring expertise — the clinician the evidence, the patient their values and life context), with shared decision-making now the standard for preference-sensitive choices. Adherence — the follow-through variable — is systematically imperfect: roughly half of patients with chronic conditions do not take medicines as prescribed, and the causes are the models’ constructs in clinical dress — beliefs about necessity and concerns about harm, perceived barriers (cost, complexity, side-effects), forgetfulness, and low self-efficacy with complex regimens. The measured interventions are correspondingly behavioural: simplifying regimens, pill organizers and reminders, teach-back to check understanding, motivational interviewing for ambivalence, and shared goal-setting rather than instruction. Non-adherence is best read not as a moral failing but as a diagnosable behaviour — the single examinable fact most often lost.',
      },
      {
        kind: 'para',
        text: 'The system around the consultation sets its ceiling. Access has three named gates: availability (is there a provider?), affordability (can the patient pay — insurance, transport, time off work?) and acceptability (will they feel respected and understood?). Health disparities are the measured output: life expectancy and disease burden vary by income, race, education and geography through mechanisms the social-determinants frame names — exposure differences, stress burden, environmental risk, health literacy, and differing quality of care received even at equal access. Health literacy — the capacity to obtain, understand and use health information — mediates much of the clinical half: low literacy predicts worse chronic-disease control and higher hospitalisation independent of insurance. The policy response ladder runs from cultural competence in the consultation (interpreters, community health workers, culturally adapted materials) through outreach and navigation programmes to the structural fixes — insurance expansion, siting clinics, food and housing policy — and the honest exam answer acknowledges which rung each intervention sits on: counselling changes individuals; navigation changes pathways; only policy changes populations.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Design a Screening Uptake Programme with the HBM',
        steps: [
          'Define the behaviour and the failure: eligible patients are not booking a free screening test; the model’s job is to locate which belief is binding.',
          'Suspect low perceived susceptibility: people who “feel fine” underestimate risk. Counter with personalised risk communication — age and family-history framing — not generic statistics.',
          'Attack perceived barriers: audit the actual frictions (appointment hours, travel, fear of the procedure) and remove the top two; a barrier removed moves more people than a message repeated.',
          'Add cues to action: GP endorsement (the provider recommendation that trials repeatedly find decisive), reminder letters, and making the booking one phone call or click.',
          'Build self-efficacy: describe the test’s simplicity, offer peer testimonials of people who completed it, and confirm understanding with teach-back.',
          'Evaluate by stage: segment non-attenders — precontemplators need awareness work, contemplators need barrier work, preparers need logistics — and re-run the audit; the programme is a cycle, not a memo.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A patient skips vaccination because “this illness is not serious.” Which HBM construct is binding?',
          options: ['perceived severity', 'perceived susceptibility', 'cue to action', 'self-efficacy'],
          answer: 0,
          explain: 'Susceptibility (“could I catch it?”) is granted; severity (“how bad would it be?”) is the belief doing the damage — the intervention lever is credible consequence information.',
        },
        {
          q: 'A smoker says he has no intention of quitting in the foreseeable future. In the Transtheoretical Model he is in…',
          options: ['preparation', 'contemplation', 'precontemplation', 'maintenance'],
          answer: 2,
          explain: 'No intention within six months defines precontemplation; contemplation means intending within six months, preparation within thirty days with steps taken.',
        },
        {
          q: 'Roughly what fraction of patients with chronic disease take medicines exactly as prescribed?',
          options: ['about half', 'about nine in ten', 'nearly all', 'about one in ten'],
          answer: 0,
          explain: 'Adherence research converges on about half for long-term regimens — the reason adherence support is a core clinical skill rather than an optional nicety.',
        },
        {
          q: 'Health literacy belongs in a lesson on medical care because it…',
          options: ['measures hospital bed capacity', 'predicts understanding, self-management and outcomes independent of insurance', 'is a synonym for intelligence', 'only matters for medical staff'],
          answer: 1,
          explain: 'The capacity to understand and use health information predicts chronic-disease control and hospitalisation independently — it is a patient-side access and outcomes factor.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Treating the Health Belief Model as a complete psychology: it underweights habit, emotion and social norms — that is why the transtheoretical and planned-behaviour models exist alongside it. Reading the stages of change as a straight ladder with relapse as failure: the model is explicitly circular, and interventions must match the stage the person is in now. Confusing self-efficacy (belief in one’s capability) with self-esteem (global self-worth) — Bandura’s construct is task-specific and trainable. Blaming non-adherence on the patient’s character: the measured causes are regimen complexity, cost, beliefs and communication — all modifiable. And treating access as a money question only: availability, affordability and acceptability are three gates, and a clinic that is free but disrespected still fails its population.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the stress-and-coping lesson for the physiology these behaviours regulate, and the vaccines lesson for a concrete preventive behaviour. Follow with the social-determinants material in any population-health reading. Primary readings: OpenStax, Population Health, chapter 10 “Socio-Ecological Perspectives and Health” (10.2 Theories and Models of Health Behavior) and chapter 15 “Health Promotion and Disease Prevention Strategies” (openstax.org / med.libretexts.org, CC BY); the National Cancer Institute’s “Theory at a Glance” for the model family in one document.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Health behaviors drive the modern disease burden; models exist to explain and change them.',
        'Health Belief Model: perceived susceptibility and severity (threat), benefits and barriers (evaluation), cues to action, self-efficacy — each a measurable intervention target.',
        'Transtheoretical Model: precontemplation → contemplation → preparation → action → maintenance, circular with relapse; match the intervention to the stage.',
        'Theory of planned behavior: intention from attitudes, subjective norms and perceived control; social-ecological frame adds environment and policy.',
        'Medical care: shared decision-making improves the consultation; about half of chronic-disease patients are non-adherent — diagnose beliefs and barriers, do not moralise.',
        'Access has three gates (availability, affordability, acceptability); disparities follow social determinants, and literacy mediates the clinical half.',
      ] },
    ],
  },
  {
    id: 'fin-financial-markets-money-capital',
    title: 'Financial Markets: How Money and Capital Markets Move Savings to Investment',
    domain: 'Business & Economics',
    field: 'Finance & Investment',
    branch: 'Markets & Instruments',
    tier: 'intermediate',
    concepts: [
      'Surplus and deficit units: why markets exist',
      'Money market versus capital market',
      'Primary versus secondary markets',
      'Dealers, brokers and intermediaries',
      'Money-market instruments: T-bills to commercial paper',
      'Capital-market instruments: bonds and stocks',
      'Risk-return trade-off and liquidity',
    ],
    words: 1920,
    readMins: 10,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'An economy always has two kinds of units at once: savers with surplus funds and borrowers with deficit funds — households putting money aside, firms and governments needing money to build and spend. Financial markets are the machinery that connects them, and the machinery has a precise taxonomy that every later finance topic assumes: markets split by maturity (money market versus capital market), by newness of the security (primary versus secondary), and by trading method (broker markets versus dealer markets). Instruments split the same way — short-term debt for parking cash, long-term debt and equity for funding growth — and participants split into dealers who trade for their own account, brokers who match others, and intermediaries such as banks and mutual funds who transform securities entirely. This lesson builds the taxonomy once, cleanly, because every pricing question in the field is answered inside one of its boxes.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Classification questions are the fastest marks in any finance paper — “is this money or capital market? primary or secondary?” — but the taxonomy earns more than marks: it is the map on which valuation (the bond and stock lessons), monetary policy (the central-banking lesson) and corporate finance all sit. Know exactly which box an instrument sits in and half of every question about who bears what risk, who earns what return, and who regulates whom is already answered.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Money market', def: 'The market for short-term debt instruments — original maturities of one year or less: Treasury bills, commercial paper, negotiable certificates of deposit, federal (interbank) funds. Its economic job is liquidity management: parking cash safely for weeks or months.' },
          { term: 'Capital market', def: 'The market for longer-term funding — bonds with multi-year maturities and stocks with unlimited lives. Its economic job is channelling savings into long-lived investment; its instruments therefore carry interest-rate, credit and market risk that money-market instruments largely avoid.' },
          { term: 'Primary market', def: 'The market for new issues: an initial public offering of stock, a seasoned equity offering, a treasury auction, a corporate bond issue. The issuer receives the funds; every subsequent resale belongs to the secondary market.' },
          { term: 'Secondary market', def: 'Trading of previously issued securities among investors — the “used securities” market. It sets prices continuously and supplies the liquidity that makes investors willing to buy primary issues at all: the two markets are one system.' },
          { term: 'Dealer versus broker', def: 'A dealer trades for its own account, quoting bid and ask prices and earning the spread; a broker executes orders for clients and earns a commission. Dealer markets quote prices continuously (most bonds trade this way); broker (exchange) markets match buyers to sellers in one pool.' },
          { term: 'Financial intermediary', def: 'An institution — commercial bank, insurer, mutual fund — that buys one kind of security (loans, deposits) and issues another (accounts, shares), transforming size, maturity and risk. Intermediaries lower transaction costs and solve information problems that direct lending cannot.' },
        ],
      },
      {
        kind: 'para',
        text: 'The taxonomy’s first cut is time. The money market trades debt with original maturities of a year or less, and its instruments share a profile: high credit quality, low return, deep liquidity — the place where treasurers park cash and where central banks conduct policy. Its workhorse instruments: Treasury bills — short-term government obligations sold at a discount from face value (buy at 9,800, receive 10,000 at maturity; the 200 difference is the interest), exempt from some taxes and effectively default-free; commercial paper — unsecured corporate promissory notes of 1 to 270 days that only highly rated issuers can place, sold at a discount and usually held to maturity; negotiable certificates of deposit — large wholesale deposits in increments of 100,000 and up, with a genuine secondary market; and the federal funds market — overnight lending among banks that the central bank targets as its policy rate, which is why an interbank interest rate is the first domino in every rate decision. The capital market, by contrast, funds the long run: government notes and bonds (2–10 years, 20–30 years) paying coupons, municipal bonds whose interest is often tax-exempt, corporate bonds priced off a credit rating, and stocks — ownership claims with no maturity, whose cash flows are dividends and whose value is therefore harder to pin down than any bond’s (the valuation lessons own that problem).',
      },
      {
        kind: 'para',
        text: 'The second cut is newness. In the primary market the issuer actually receives the money: an IPO takes a company public for the first time, a seasoned equity offering (SEO) issues more shares of an already-public company, a treasury auction issues new bills and bonds, an underwritten bond deal places new corporate debt — and in each case the investment banks arranging the sale (the underwriters) price it, buy it and distribute it. The secondary market is where everything trades afterwards, and its services are what make the primary market possible: continuous price discovery (today’s traded price is tomorrow’s issue price benchmark) and liquidity (the ability to sell without a fire-sale discount). No one would lock savings into a thirty-year bond if it could never be sold before maturity; the secondary market is why they will. The third cut is trading method: broker markets — the classic exchange model, where orders meet in one book and trade at a public price — versus dealer markets, where dealers quote bids and asks from their own inventories and most bond and currency trading happens over the counter. Dealers profit from the bid-ask spread and provide liquidity on demand; brokers profit from commission and provide access. The same security can move between models as markets evolve — but the economic distinction (who bears inventory risk?) never does.',
      },
      {
        kind: 'para',
        text: 'Participants form the third dimension. Direct finance — a saver buying a firm’s bond — is the textbook picture; the real economy runs substantially on intermediated finance: banks take deposits and make loans (transforming small, liquid, short accounts into large, illiquid, long credit), insurers pool premia and hold long bonds against predictable claims, and mutual funds bundle many savers’ money into diversified portfolios none could build alone. Intermediaries exist because they economise on exactly the frictions direct markets suffer: transaction costs (it is cheaper to lend once to a bank than to research a hundred borrowers), information asymmetry (the bank specialises in monitoring borrowers — the main-bank lesson shows this in national form), and denominational mismatch (a 1,000-unit saver cannot fund a 100-million factory). The system-level term for savers and borrowers bypassing intermediaries — moving from deposits into money-market funds, or firms issuing commercial paper instead of borrowing — is disintermediation, and its episodes are instructive: when deposit rate caps pushed savers out of banks in the 1970s–80s, the funding that had financed loans migrated to markets, reshaping banking itself. Over all of it stands the risk-return trade-off: money-market instruments buy safety and liquidity at low return; capital-market instruments pay more for bearing more — and every instrument’s place in the taxonomy is simultaneously an answer to “how much risk, what return, how liquid, who regulates?”',
      },
      {
        kind: 'example',
        title: 'Worked Example — Classify Six Instruments, Two Ways',
        steps: [
          'Treasury bill, 13-week, bought at auction by a money-market fund: money market (maturity under a year); primary market (issued at auction); then the fund’s later sale to another investor is secondary.',
          'Commercial paper, 90-day, issued by a highly rated corporation to cover inventory: money market; primary at issuance (discount from face value); almost always held to maturity, so secondary trading is thin.',
          'Corporate bond, 10-year, underwritten by a syndicate and then traded over the counter: capital market; the syndicate sale is primary; every OTC trade afterwards is secondary — and note it is a dealer market (quotes from inventory), not an exchange.',
          'Newly listed company’s shares in their IPO: capital market (equity has unlimited life); primary (issuer receives the proceeds); the next day’s exchange trading is secondary on a broker-market model.',
          'Mutual-fund shares bought by a household: none of the primary/secondary boxes directly — the household bought fund shares; the fund bought securities. The household has used an intermediary, the third dimension of the taxonomy.',
          'Municipal bond, 20-year, tax-exempt coupon: capital market (long maturity); primary when issued to finance a project; its attraction (tax-free income) shows how instrument features map to the participants who value them.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The economic function that distinguishes the money market from the capital market is…',
          options: ['who regulates it', 'maturity: liquidity management versus long-run funding', 'whether interest is paid', 'the presence of risk'],
          answer: 1,
          explain: 'Maturity is the defining cut: instruments of a year or less manage liquidity; bonds and stocks fund long-lived investment and therefore bear interest-rate, credit and market risk.',
        },
        {
          q: 'A company sells new shares to the public for the first time. That transaction is…',
          options: ['a secondary-market trade on an exchange', 'a primary-market IPO; the issuer receives the funds', 'a money-market operation', 'disintermediation'],
          answer: 1,
          explain: 'New issues are primary by definition; the issuer receives the money. The same shares trading the next day are secondary — different transaction, different market.',
        },
        {
          q: 'A dealer differs from a broker because a dealer…',
          options: ['earns commissions on client orders', 'trades from its own inventory, quoting bid and ask', 'may not hold securities', 'only works on exchanges'],
          answer: 1,
          explain: 'Dealers bear inventory risk and earn the bid-ask spread, supplying liquidity on demand; brokers match clients and earn commissions without taking positions.',
        },
        {
          q: 'Financial intermediaries such as banks exist because they…',
          options: ['eliminate all risk for savers', 'lower transaction costs and solve information problems direct markets cannot', 'guarantee higher returns than markets', 'replace the need for money markets'],
          answer: 1,
          explain: 'Pooling many savers and specialising in borrower monitoring cuts costs and manages asymmetric information — the transformation of size, maturity and risk is their product.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling any stock trade “the stock market issuing money to companies”: only the primary issue transfers funds to the issuer — the overwhelming volume of equity trading is secondary reshuffling of ownership. Confusing the maturity of the instrument with the holding period of the investor: a 30-year bond sold after one month is a secondary capital-market trade, not a money-market one. Assuming dealers and brokers are interchangeable job titles: the difference is inventory risk, and it determines which regulatory regime applies. Treating intermediaries as mere middlemen: their transformation of small liquid deposits into large illiquid loans is the service — and its fragility (maturity mismatch) is why bank runs exist. And forgetting that the secondary market feeds back into the primary one: without continuous price discovery and exit liquidity, no one would buy the new issue in the first place.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the compound-interest lesson for the discounting arithmetic that prices every instrument here. Follow with monetary policy and central banking (what the policy rate does to these markets) and the bond- and stock-valuation chapters of any standard finance text for the pricing layer. Primary reading: OpenStax, Principles of Finance, chapter 1 — sections 1.1 “What Is Finance?”, 1.5 “Markets and Participants” and 1.7 “Financial Instruments” — with chapter 10 on bonds and chapter 11 on stocks (openstax.org, CC BY-NC-SA).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Markets connect surplus units (savers) to deficit units (borrowers); the taxonomy cuts by maturity, newness and trading method.',
        'Money market: T-bills, commercial paper, negotiable CDs, federal funds — a year or less, high quality, liquidity management.',
        'Capital market: notes, bonds, municipals, corporate debt and stocks — long-run funding, higher risk and return.',
        'Primary market: issuer receives the funds (IPO, SEO, auctions); secondary market: trading among investors — price discovery and liquidity that make primary issues possible.',
        'Dealer markets trade from inventory (bid-ask spread); broker markets match orders (commission); intermediaries transform size, maturity and risk.',
        'Disintermediation = savers bypassing banks for markets; the risk-return trade-off orders the whole taxonomy.',
      ] },
    ],
  },
]

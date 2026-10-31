/**
 * Knowledge Universe — Entrepreneurship & the Business Environment — Chapter 02: Business Environment & Regulation
 * 2 lessons · ~4,054 words
 * fields: Business Environment, Business Regulation
 * legacy sources: x32-ugc-net-paper2-pass.ts, x33-ugc-net-closure-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Business Environment, Business Regulation]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 com-regulatory-framework-modern-india — The Modern Regulatory Framework: Statutes, Regulators and the Compliance Map
 *   02.2 com-business-environment-elements — The Business Environment: Reading the Forces Around the Firm
 */
import type { KnowledgeTopic } from '../../types'

export const entrepreneurshipBusinessEnvironmentCh02: KnowledgeTopic[] = [
  {
    id: 'com-regulatory-framework-modern-india',
    title: 'The Modern Regulatory Framework: Statutes, Regulators and the Compliance Map',
    domain: 'Business & Economics',
    field: 'Business Regulation',
    branch: 'Regulatory Framework',
    tier: 'intermediate',
    concepts: [
      'Market failure as the reason regulation exists',
      'IT Act 2000: electronic records, digital signatures, certifying authorities',
      'RTI Act 2005 as a transparency statute',
      'The regulator map: RBI, SEBI, IRDAI, TRAI, CCI, NCLT, IBBI, NFRA',
      'IPR regimes and the innovation bargain',
      'GST: dual design and the GST Council',
    ],
    words: 2013,
    readMins: 10,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'The commerce syllabus\u2019s unit on the modern regulatory framework lists four stations — the Information Technology Act 2000 with cyber crimes, the Right to Information Act 2005, intellectual property rights, and the goods and services tax — and the examiner\u2019s favourite question form is routing: given a one-line scenario (a leaked price-sensitive trade, a merger of two rivals, a withheld inspection report, an inter-state invoice), name the statute and the authority, and state the obligation. This lesson therefore does two jobs at once. It teaches the frame the stations sit in — why modern economies regulate, and how statute, regulator, enforcement and adjudication connect — and it wires each station into the library lesson that already owns its mechanics in depth. What is new here is the architecture; the details are cross-referenced, not repeated, per the library\u2019s no-repetition rule.',
      },
      { kind: 'heading', text: 'Why regulate at all' },
      {
        kind: 'para',
        text: 'Regulation exists because markets left alone fail in predictable ways. Externalities: a factory\u2019s effluent prices its product correctly only if the river\u2019s damage is charged to someone — environmental law exists to make the polluter carry costs the price hides. Information asymmetry: the seller knows the product, the buyer cannot; investor-protection and disclosure law exists because the manager knows the books and the shareholder cannot. Monopoly and dominance: a single supplier can restrict output and raise prices, so competition law exists to police agreements and mergers that trade away that rivalry. Public goods and network industries (roads, spectrum, payments) need allocation and interoperability rules. Add consumer protection and the macro-financial need to keep banks sound, and you have the complete case. Every regulator in the map below answers one of these failures; the exam rewards answers that can name which.',
      },
      { kind: 'heading', text: 'The IT Act 2000: making electronic life legally real' },
      {
        kind: 'para',
        text: 'The Information Technology Act 2000 was built for one central job: giving electronic records and digital signatures the same legal standing as paper and ink. Before it, an e-mailed acceptance, an e-filed return or an e-signed contract sat in legal uncertainty. The Act legalised electronic records and electronic signatures, made e-contracts enforceable, and permitted companies to file documents with government agencies electronically — the foundation on which every online tax filing, incorporation filing and e-tender now rests. Its machinery is examinable: a Controller of Certifying Authorities licenses certifying authorities, which issue the digital-signature certificates that bind a signature to a person; adjudicating officers hear claims for compensation below a threshold, with appeals upward. E-governance provisions expressly authorise agencies to accept and issue documents electronically, which is how the Act became the legal engine of digital administration.',
      },
      {
        kind: 'para',
        text: 'The 2008 amendment added the criminal side — identity theft, cheating by personation online, obscene electronic content, and the liability rules for intermediaries — and the data-protection era added a further layer: the Digital Personal Data Protection Act 2023 now governs consent and duties for personal data. The library\u2019s digital-society lesson teaches those crime sections and the 2023 Act in detail, and this lesson deliberately does not repeat them; the framework point to carry is that the IT Act is the foundational statute (is my e-record and e-signature valid?) while the amendment and later statutes handle offences and privacy on top of that foundation. Two further transparency-adjacent facts belong in one line each: the RTI Act 2005 gives citizens the right to demand information from public authorities — the governance lesson in this pass owns its mechanics in full — and businesses encounter it mainly through tender transparency and disclosure obligations of public authorities they deal with.',
      },
      { kind: 'heading', text: 'The regulator map: who watches what' },
      {
        kind: 'para',
        text: 'Each regulated sector answers to a statute that creates a regulator with three powers: rule-making (regulations under the Act), enforcement (inspection, investigation, penalties) and adjudication (orders, appeals). The Reserve Bank of India regulates banks and the payment system and conducts monetary policy. The Securities and Exchange Board of India regulates the securities markets — listed companies, brokers, mutual funds — with investor protection and market integrity (insider trading and market-manipulation rules) as its mandate. The Insurance Regulatory and Development Authority of India does the same for insurance; the Telecom Regulatory Authority of India for telecom tariffs and interconnection. The Competition Commission of India enforces the Competition Act 2002: anti-competitive agreements, abuse of dominance, and merger control — combinations above thresholds require its clearance before they take effect. The Companies Act 2013 created the National Company Law Tribunal for company-law adjudication and the National Financial Reporting Authority for audit oversight; the Insolvency and Bankruptcy Code 2016 created the Insolvency and Bankruptcy Board of India and routed insolvency proceedings through the NCLT. Memorise the pairing statute-plus-authority; scenario questions are usually asking for exactly one pairing.',
      },
      {
        kind: 'para',
        text: 'Two confusions are worth disarming now. SEBI regulates securities markets, not banks — a listed bank answers to SEBI for its share trading and to the RBI for its balance sheet; scenario answers often need both. And the CCI is not a consumer court: competition law protects the competitive process (which benefits consumers indirectly), while consumer-complaint remedies run through the consumer-protection machinery — a distinction the framework question loves.',
      },
      { kind: 'heading', text: 'The IPR station: the innovation bargain' },
      {
        kind: 'para',
        text: 'Intellectual property rights answer the information-asymmetry cousin failure: creation is expensive, copying is cheap, so unregulated copying destroys the incentive to create. The legal answer is a bargain — time-limited exclusivity in exchange for disclosure and eventual public access. Copyright protects original expression (literary, musical, artistic works and software), patents protect inventions that are new, involve an inventive step and are industrially applicable, trademarks protect signs that distinguish source, and trade secrets protect confidential business information without registration. In India the operative statutes are the Copyright Act 1957, the Patents Act 1970 and the Trade Marks Act 1999. The library\u2019s intellectual-property lesson (law-ip-copyright-patent) teaches the three regimes\u2019 rights, terms and processes in full; for this framework unit, the examinable additions are the business angles: portfolio strategy (what to patent versus what to keep secret), licensing as a revenue mode, and the point that IPR enforcement in India runs through civil courts with criminal options for piracy and trademark counterfeiting.',
      },
      { kind: 'heading', text: 'The GST station: one tax, two levels of government' },
      {
        kind: 'para',
        text: 'The goods and services tax, introduced by the Constitution\u2019s hundred and first amendment, answers a different failure: a zoo of indirect taxes (excise, service tax, state sales taxes, octroi) that cascaded — taxed tax — and fragmented the national market at state borders. GST\u2019s objectives, as the syllabus phrases them, are to replace that zoo with one tax on supply, remove cascading through a full input-tax-credit chain, apply the destination principle (the tax belongs where the good is consumed), widen the base and formalise the economy. The design is deliberately dual: intra-state supplies split into a central component (CGST) and a state component (SGST); inter-state supplies carry the integrated tax (IGST), collected by the centre and apportioned to the destination state. Rates and thresholds are set by the GST Council, the federal body of centre and state finance ministers created under Article 279A — a constitutional bargaining table, not a pure regulator. The library\u2019s taxation lesson (bus-taxation-basics) teaches the remittance arithmetic and input-credit mechanics with a worked example; this lesson claims only the objectives-and-design layer.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Route the scenario, name the authority',
        steps: [
          'Scenario 1: a senior manager sells shares the day before her company announces a loss, using information the market does not have. Routing: securities-market misconduct — insider trading. Statute and regulator: SEBI Act and SEBI\u2019s insider-trading regulations; SEBI investigates and penalises. The exchange listing obligations are also engaged.',
          'Scenario 2: two rival telecom operators propose to merge. Routing: combination above threshold — merger control. Statute and regulator: Competition Act 2002, Competition Commission of India; the combination must be notified and cleared before effect. Sector telecom licensing conditions are a parallel check.',
          'Scenario 3: a citizen asks a public authority for the inspection reports behind a factory clearance and is refused. Routing: information request. Statute: Right to Information Act 2005 — PIO, thirty-day clock, first and second appeal (the governance lesson walks the full timeline).',
          'Scenario 4: a Mumbai firm invoices a Delhi buyer; the invoice shows CGST and SGST. Routing: wrong tax split — an inter-state supply carries IGST, not CGST-plus-SGST. Correction: charge IGST; input credits flow through the destination mechanism (mechanics in the taxation lesson).',
          'Scenario 5: a startup emails a signed PDF contract and the counterparty questions its validity. Routing: electronic record and electronic signature. Statute: IT Act 2000 — with a certifying-authority-issued signature certificate, the contract is legally recognised like its paper equivalent.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The Information Technology Act 2000 was enacted principally to:',
            options: [
              'regulate telecom tariffs',
              'give legal recognition to electronic records and digital signatures and enable e-governance filings',
              'replace the Copyright Act',
              'set GST rates',
            ],
            answer: 1,
            explain: 'The 2000 Act is the foundational e-law: valid e-records, e-signatures via certifying authorities, e-contracts, and agency authority to accept electronic filings. The 2008 amendment added the cyber-crime provisions on that base.',
          },
          {
            q: 'A merger of two large rivals must be notified and cleared before it takes effect. Which authority administers this?',
            options: [
              'the Reserve Bank of India',
              'the Competition Commission of India',
              'the National Company Law Tribunal',
              'the Telecom Regulatory Authority of India',
            ],
            answer: 1,
            explain: 'Combinations above thresholds fall to the CCI under the Competition Act 2002. The NCLT adjudicates company-law matters and insolvency; sector regulators may have parallel licensing interests, but merger clearance is CCI\u2019s.',
          },
          {
            q: 'Under the dual GST design, an inter-state supply attracts:',
            options: [
              'CGST and SGST',
              'IGST only',
              'no GST, only customs duty',
              'CGST, SGST and IGST together',
            ],
            answer: 1,
            explain: 'Intra-state supplies split CGST plus SGST; inter-state supplies carry the integrated tax (IGST), collected by the centre and apportioned to the destination state — the destination principle in operation.',
          },
          {
            q: 'Which pairing of regulator and primary mandate is WRONG?',
            options: [
              'IRDAI — insurance sector',
              'SEBI — securities markets and investor protection',
              'RBI — telecom spectrum allocation',
              'IBBI — insolvency and bankruptcy',
            ],
            answer: 2,
            explain: 'The RBI regulates banks, payments and monetary policy; telecom regulation (tariffs, interconnection) belongs to TRAI, with spectrum allocation a government function. The other three pairings are correct.',
          },
          {
            q: 'The intellectual-property “bargain” is best summarised as:',
            options: [
              'the state buys all inventions outright',
              'time-limited exclusivity in exchange for disclosure and eventual public access',
              'permanent monopolies for first creators',
              'free use of everything after one year',
            ],
            answer: 1,
            explain: 'Patents and copyrights are scheduled to expire into the public domain; the temporary monopoly is the price society pays for disclosure and continued creation. Trademarks and trade secrets follow their own renewal and secrecy logics.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Do not route bank-related questions to SEBI or market questions to RBI — a listed bank answers to both, for different activities. The GST Council recommends; Parliament and the states legislate — “the Council sets law unilaterally” is a classic wrong option. The IT Act 2000 is about validity of e-records and e-signatures; the 2008 amendment and the DPDP Act 2023 cover offences and privacy — mixing these layers is a favourite distractor. Consumer courts and the CCI are different institutions with different objectives. And RTI answers rarely need anything beyond the routing: the statute\u2019s detailed machinery belongs to the governance lesson, and citing it instead of re-deriving is the efficient answer.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the business-environment lesson (the sectors regulation acts on). Cross-referenced lessons that own the stations in depth: bus-taxation-basics for GST mechanics, law-ip-copyright-patent for the IP regimes, cs-computing-thinking-digital-society for cyber-crime sections and the DPDP Act, and pol-governance-concepts-data-administration for RTI. Follow with the auditing lesson (NFRA and the audit-oversight layer). Primary reading: the statutes on India Code (indiacode.nic.in) and the official UGC NET Commerce syllabus unit “Modern regulatory framework” (ugcnetonline.in).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Regulation answers market failure: externalities, information asymmetry, monopoly, public goods.',
        'IT Act 2000: e-records and e-signatures valid; Controller and certifying authorities; 2008 amendment added cyber crimes.',
        'Regulator = statute + rule-making + enforcement + adjudication; memorise the pairs (SEBI-securities, RBI-banks, IRDAI-insurance, TRAI-telecom, CCI-competition, NCLT-company law, IBBI-insolvency, NFRA-audit).',
        'IPR bargain: time-limited exclusivity for disclosure; copyright/patent/trademark under the 1957/1970/1999 Acts.',
        'GST objectives: one tax on supply, no cascading, destination principle, formalisation; dual design CGST/SGST/IGST under Council Article 279A.',
        'RTI 2005: citizens\u2019 information right from public authorities — mechanics owned by the governance lesson.',
      ] },
    ],
  },
  {
    id: 'com-business-environment-elements',
    title: 'The Business Environment: Reading the Forces Around the Firm',
    domain: 'Business & Economics',
    field: 'Business Environment',
    branch: 'Environment, Scanning and Adaptation',
    tier: 'core',
    concepts: [
      'Internal versus external environment',
      'The seven external sectors of the business environment',
      'Micro (task) environment versus macro environment',
      'Environmental scanning with SWOT and PESTEL',
      'Liberalisation, privatisation and globalisation (LPG)',
      'Managers as adapters, not agents, of external change',
    ],
    words: 2041,
    readMins: 10,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'No firm is a closed system. Every decision a manager makes — what to produce, what price to charge, whom to hire, where to expand — is taken inside a web of forces the firm did not choose and cannot fully control. The business environment is the name for that web, and the syllabus treats it as a diagnostic skill: given a business situation, identify which environmental sectors are at work, separate what the firm controls from what it does not, and read the signals that tell a firm when to adapt. The distinction that organises everything else is internal versus external. The internal environment — employees, management structure, company culture, physical assets, the firm\u2019s own resources and capabilities — lies substantially within management\u2019s control. The external environment lies mostly outside it, and that is where the diagnostic work concentrates.',
      },
      {
        kind: 'para',
        text: 'OpenStax\u2019s Introduction to Business (§1.2) puts the point sharply: businesses operate in a dynamic external environment composed of numerous outside organisations and forces, grouped into seven key sub-environments — economic, political and legal, demographic, social, competitive, global and technological. Each sector creates its own set of challenges and opportunities. The text\u2019s memorable framing is that no single business is large or powerful enough to create major changes in the external environment; managers are primarily adapters to, rather than agents of, change. Yet adaptation is not passivity: the same section notes that large firms can sometimes nudge the environment — pharmaceutical companies lobbying the FDA to speed drug approval, or the largest technology firms spending tens of millions on lobbying to shape policy toward an open internet. The skill this lesson builds is telling the two situations apart: knowing when a force must simply be absorbed, and when it can actually be influenced.',
      },
      { kind: 'heading', text: 'The seven external sectors, and how they bite' },
      {
        kind: 'para',
        text: 'The economic sector is often the most visible: fluctuations in economic activity create business cycles that move unemployment, income levels, inflation and interest rates together. When the economy grows, unemployment falls and incomes rise, expanding markets; when it contracts, the same levers move against the firm. Through policies such as taxation and interest-rate levels, government attempts to stimulate or curb the level of economic activity, and the forces of supply and demand determine how prices and quantities behave in the market. A firm that reads the cycle early can time its investment and inventory decisions; one that reads it late buys capacity at the peak and idles it in the trough.',
      },
      {
        kind: 'para',
        text: 'The political and legal sector supplies the rules of the game: tax codes, labour law, environmental regulation, licensing regimes, and the stability of the institutions that enforce them. The demographic sector describes the people a firm sells to and hires from — population size, age structure, urbanisation, income distribution; an ageing society shifts demand toward healthcare and away from children\u2019s products almost mechanically. The social sector captures attitudes, lifestyles and cultural values, which drift more slowly than prices but no less decisively — the long-term shifts toward environmental awareness or convenience-oriented consumption redraw whole industries. The competitive sector is the set of rivals and the intensity of rivalry among them; the global sector covers exchange rates, foreign competition, trade agreements and cross-border supply chains; and the technological sector covers the production technologies and innovations that can make existing products and processes obsolete. OpenStax\u2019s account of the Deepwater Horizon disaster illustrates how external forces can also arrive as shocks: an explosion that killed eleven workers and released millions of barrels of oil severely affected environment, businesses and livelihoods along the Gulf Coast, and the responsible firm spent more than sixty billion dollars in response and cleanup — a reminder that risk assessment is part of environmental reading, not a separate subject.',
      },
      { kind: 'heading', text: 'Micro and macro: two distances of looking' },
      {
        kind: 'para',
        text: 'The syllabus also draws the environment at two distances. The micro or task environment is the near ring: customers, suppliers, competitors, distributors, regulators and creditors — the actors the firm transacts with directly and whose behaviour it can study transaction by transaction. Porter\u2019s five-forces analysis (rivalry, new entrants, substitutes, buyer power, supplier power) is the classic tool here. The macro environment is the far ring: the economy-wide and society-wide forces — growth, inflation, law, culture, technology waves — that condition every task relationship at once. PESTEL is the standard macro checklist, splitting the far ring into Political, Economic, Social, Technological, Environmental (ecological) and Legal factors. The WSU open marketing text (§6.2) uses exactly this PESTEL frame for assessing country markets, and the same checklist works for a single firm: each letter is a prompt to name one force, judge its direction (improving or deteriorating for this firm), and its speed (gradual or sudden).',
      },
      {
        kind: 'para',
        text: 'Scanning then feeds the oldest diagnostic in the toolkit: SWOT. Strengths and Weaknesses are the internal audit — what the firm controls and can fix or exploit; Opportunities and Threats are the external read — what the environment offers or menaces. The pairing is the whole point: an opportunity is only real if some internal strength can reach it, and a threat is only fatal if an internal weakness leaves the door open. A firm with strong cash reserves (strength) facing rising interest rates (economic threat) can lend its reserves at better returns; a firm with the same reserves but heavy short-term debt (weakness) faces refinancing risk from the very same force. Environment reading, done properly, always ends in this two-column judgement.',
      },
      { kind: 'heading', text: 'The Indian framing: liberalisation, privatisation, globalisation' },
      {
        kind: 'para',
        text: 'The commerce syllabus adds a specifically Indian layer to the framework: the LPG reforms of 1991. Before that year, the environment Indian firms faced was dominated by the licence raj — industrial licensing that rationed the right to expand capacity, high tariff walls, and a public sector reserved for heavy industry. The 1991 crisis (a balance-of-payments squeeze that left reserves covering barely weeks of imports) triggered liberalisation (dismantling industrial licensing for most industries), privatisation (disinvestment of public-sector undertakings and opening reserved sectors to private entry) and globalisation (tariff reduction, convertibility for trade, and admission of foreign investment). The lesson for environmental analysis is that the political-legal sector can change the whole shape of every other sector in one stroke: after 1991, the competitive sector intensified as foreign entrants arrived, the technological sector accelerated as imported know-how flowed in, and the demographic-social sectors began to matter to exporters as markets rather than only as labour. Firms that read the 1991 turn early adapted; firms that treated the old environment as permanent did not survive the transition.',
      },
      {
        kind: 'para',
        text: 'OpenStax\u2019s §1.8 closes the picture with the trends now reshaping every sector at once: the shift of employment toward services and knowledge work, the growth of the global marketplace and its competitive pressures, the spread of e-commerce and digital distribution, and the rising weight of environmental sustainability in both regulation and consumer preference. For the examiner, the testable skill is classification under time pressure: given a one-line scenario — a currency depreciation, a new data-protection statute, an ageing population, a rival\u2019s merger — name the sector, say whether it is micro or macro, and state one adaptive response available to the firm. That three-step answer pattern covers the large majority of questions asked on this unit.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Classify the forces, then build the response',
        steps: [
          'Step 1: a mid-sized apparel exporter faces a 6% currency appreciation at home, a new data-protection statute covering customer records, a rival\u2019s acquisition of its largest retail client, and an ageing workforce in its stitching plants.',
          'Step 2: classify each force. The appreciation is economic and global (macro — exchange-rate driven, firm cannot set it). The statute is political-legal (macro in origin, but it binds as a compliance obligation in the task environment). The client\u2019s acquisition is competitive and micro (a task-environment consolidation that concentrates buyer power). The workforce ageing is demographic and social (macro, slow-moving).',
          'Step 3: separate control levels. None of the four is fully controllable; the statute and the client consolidation are influenceable (lobbying, contract renegotiation), the exchange rate and demography are absorb-only.',
          'Step 4: build the adaptive portfolio: hedge or price in forward contracts for the currency; appoint a compliance owner and audit customer-data flows for the statute; diversify the client base before renewal season for the buyer-power threat; plan automation and phased hiring for the workforce.',
          'Contrast: a response like "cut prices to win new clients" addresses the threat but ignores that the same currency appreciation has just made the firm\u2019s exports dearer abroad — environmental reading must be joined-up, not piecemeal.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which of the following belongs to a firm\u2019s INTERNAL environment?',
            options: [
              'the rate of inflation in the economy',
              'the firm\u2019s employees, culture and physical assets',
              'a new environmental-protection statute',
              'the entry of a foreign competitor',
            ],
            answer: 1,
            explain: 'The internal environment covers day-to-day choices and resources management largely controls — people, structure, culture, assets. Inflation, statutes and foreign entrants are external sectors: economic, political-legal and competitive respectively.',
          },
          {
            q: 'OpenStax names seven external sub-environments. Which list is complete and correct?',
            options: [
              'economic, political and legal, demographic, social, competitive, global, technological',
              'economic, legal, marketing, financial, cultural, global, technical',
              'micro, macro, task, general, industry, market, firm',
              'demand, supply, cost, revenue, profit, price, output',
            ],
            answer: 0,
            explain: 'Introduction to Business §1.2 groups the external environment into seven: economic; political and legal; demographic; social; competitive; global; technological. Each creates its own challenges and opportunities.',
          },
          {
            q: 'PESTEL is best described as a checklist for which ring of the environment?',
            options: [
              'the micro (task) environment of immediate counterparties',
              'the macro environment of economy-wide forces',
              'the internal environment of controllable resources',
              'the balance-sheet accounts of the firm',
            ],
            answer: 1,
            explain: 'PESTEL scans Political, Economic, Social, Technological, Environmental and Legal factors — the far, macro ring. The near, task ring (customers, suppliers, rivals, regulators) is better served by five-forces analysis.',
          },
          {
            q: 'In a SWOT analysis, opportunities and threats differ from strengths and weaknesses because they are:',
            options: [
              'always larger in monetary terms',
              'external conditions, while strengths and weaknesses are internal',
              'only relevant to public-sector firms',
              'unmeasurable, while the others are measurable',
            ],
            answer: 1,
            explain: 'The O and T columns read the external environment; the S and W columns audit the internal one. The diagnostic power comes from pairing them: an internal strength must exist to reach an external opportunity.',
          },
          {
            q: 'The 1991 Indian reforms are summarised as LPG — liberalisation, privatisation, globalisation. What did liberalisation chiefly remove?',
            options: [
              'the requirement of industrial licensing for capacity expansion in most industries',
              'the corporate income tax',
              'the reserve-bank monopoly on currency issue',
              'consumer-protection regulation',
            ],
            answer: 0,
            explain: 'Liberalisation dismantled the licence-raj apparatus that rationed expansion; privatisation moved public-sector capacity toward private ownership; globalisation cut tariffs and admitted foreign investment. The political-legal sector redrawn in one stroke reshaped every other sector.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Placing customers and suppliers in the macro environment — they are the micro (task) ring; the macro ring is economy-wide forces like inflation and demography. Treating the seven sectors as independent silos: a currency move (economic) can trigger a statute (political-legal) that changes competition (competitive) — the sectors interact, and scenario questions reward answers that trace the interaction. Confusing "managers are adapters" with "managers are passive": OpenStax\u2019s own examples show lobbying can move parts of the environment; the skill is knowing which parts. And in LPG questions, do not credit 1991 with abolishing all public-sector industry — the reservation was narrowed, not erased.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is a foundation lesson. Follow with the marketing-mix lesson (the task environment in action: customers, channels and competitors) and the FDI-and-integration lesson (the global sector in depth). Primary reading: OpenStax, Introduction to Business (openstax.org, CC BY), §1.2 "Understanding the Business Environment" and §1.8 "Trends in the Business Environment and Competition"; Open Text WSU, Core Principles of International Marketing (pressbooks, CC BY-NC), §6.2 for the PESTEL checklist applied to market assessment.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Internal environment = controllable (people, structure, culture, assets); external = the seven sectors.',
        'The seven external sectors: economic, political-legal, demographic, social, competitive, global, technological.',
        'Micro (task) ring = customers, suppliers, rivals, regulators; macro ring = economy-wide forces (PESTEL).',
        'SWOT pairs the internal audit (S, W) with the external read (O, T); an opportunity needs a strength to reach it.',
        'Managers are primarily adapters to external change — but lobbying shows parts of it can be influenced.',
        'India\u2019s 1991 LPG reforms: liberalisation ended licensing, privatisation moved PSU capacity, globalisation opened trade and investment.',
      ] },
    ],
  },
]

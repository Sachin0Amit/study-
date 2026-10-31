/**
 * Knowledge Universe — International Trade — Chapter 03: Regional Integration & FDI
 * 2 lessons · ~3,317 words
 * field: International Trade
 * legacy sources: x20-foundations-pass.ts, x32-ugc-net-paper2-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [FDI and Economic Integration, Regional Integration]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 com-international-business-fdi-integration — FDI, Regional Integration and the Institutions of World Trade
 *   03.2 econ-regional-integration — Trade Protection and Regional Integration: Blocs, Trade Creation and Diversion
 */
import type { KnowledgeTopic } from '../../types'

export const internationalTradeCh03: KnowledgeTopic[] = [
  {
    id: 'com-international-business-fdi-integration',
    title: 'FDI, Regional Integration and the Institutions of World Trade',
    domain: 'Business & Economics',
    field: 'International Trade',
    branch: 'FDI and Economic Integration',
    tier: 'intermediate',
    concepts: [
      'FDI defined: controlling stake across borders',
      'Greenfield versus brownfield; horizontal versus vertical FDI',
      'The entry-modes ladder from export to wholly-owned subsidiary',
      'The regional-integration ladder from PTA to economic union',
      'Trade creation versus trade diversion',
      'WTO, IMF, World Bank and UNCTAD: who does what',
    ],
    words: 1870,
    readMins: 9,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Trade theory explains why countries exchange goods; this unit explains what happens when firms stop exporting the good and instead produce inside the foreign market itself. Foreign direct investment (FDI) exists when a firm acquires a lasting, controlling interest in an enterprise located in another country — the standard threshold being ten percent or more of voting equity, the definition the LibreTexts International Business text (§2.4) uses when it distinguishes FDI from the passive portfolio flows that buy securities without seeking control. The controlling stake is what makes the investment "direct": the investor exercises managerial voice, transfers technology and processes, and bears operational risk, not just price risk. The syllabus asks for three competencies: the taxonomy of FDI forms, the choice of entry mode, and the institutional environment — the regional agreements and multilateral bodies that govern how capital and goods cross borders.',
      },
      {
        kind: 'para',
        text: 'The two taxonomies every exam question draws on are easy to keep straight if you anchor them to verbs. By MODE of establishment: greenfield FDI builds new facilities from the ground up (new plant, new jobs, new capacity), while brownfield FDI buys or merges with an existing local firm (instant market share, existing workforce, integration risk). By DIRECTION of relationship: horizontal FDI replicates the same activity abroad (a carmaker builds the same cars in another country), vertical FDI relocates a stage of the production chain (a chipmaker opens an assembly plant where labour is cheaper — upstream toward raw materials, downstream toward distribution), and conglomerate FDI enters an unrelated business altogether. Motives follow the taxonomy: market-seeking firms go horizontal to jump tariffs or serve customers locally; efficiency-seeking firms go vertical to shave unit costs; resource- and knowledge-seeking FDI chases minerals, oil, or local know-how respectively.',
      },
      { kind: 'heading', text: 'Choosing the entry mode: the ladder of commitment' },
      {
        kind: 'para',
        text: 'Entry modes form a ladder of rising control and rising risk. Exporting through agents or distributors requires the least commitment — the firm sells across the border and keeps production at home; tariff walls, transport costs and distance from the customer are its limits. Licensing and franchising rent the firm\u2019s brand, technology or business format to a local operator for royalties — low capital exposure but weak control and the permanent risk of minting a future competitor. Contract manufacturing places production with a local firm while the investor keeps design and marketing. Joint ventures share ownership with a local partner — pooling capital, local knowledge and relationships, at the price of shared control and possible conflict over strategy. Wholly-owned subsidiaries — via greenfield build or brownfield acquisition — sit at the top: full control and full profit retention, against the largest capital commitment and the full exposure of FDI risk. The WSU open marketing text (ch.7) walks this ladder with exactly these rungs, and the standard exam question presents a scenario (heavy tariffs, strict IP, partner-lawyer availability) and asks which rung fits; the logic is always the same trade — control against commitment.',
      },
      {
        kind: 'para',
        text: 'A second standard question asks why firms internalise operations at all instead of contracting through markets. The intuition is that contracts leak: technology can be appropriated, quality is hard to specify, and negotiation across legal systems is costly. When the cost of writing enforceable contracts exceeds the cost of managing the activity inside the firm, the firm crosses the border and owns the operation — FDI rather than licensing. That internalisation logic explains why FDI clusters where intangible assets (brands, processes, know-how) are the firm\u2019s main advantage and where host-country contracts are hard to enforce.',
      },
      { kind: 'heading', text: 'Regional integration: the five-rung ladder' },
      {
        kind: 'para',
        text: 'Regional economic integration asks participating countries to remove barriers among themselves in stages, and the syllabus expects the ladder recited precisely. A preferential trade agreement lowers tariffs for members on selected goods. A free trade area abolishes internal tariffs and quotas among members while each keeps its own external tariffs — the arrangement with the famous customs-office headache of rules-of-origin checks (goods entering through the lowest-external-tariff member would otherwise funnel to all); the WSU text\u2019s §2.4 uses exactly this example. A customs union adds a common external tariff, ending the origin problem (the Southern African Customs Union is the textbook case). A common market goes further, freeing movement of the factors of production — labour and capital alongside goods and services. An economic union harmonises economic policy itself — monetary union with a single currency being its deepest form (the euro area), plus coordinated fiscal and regulatory frameworks. The European Union is the deepest real-world integration project; USMCA (the successor to NAFTA) is a deep free-trade area; ASEAN\u2019s AFTA is a developing free-trade area; RCEP is the largest trade agreement by population, spanning East and Southeast Asia and Oceania.',
      },
      {
        kind: 'para',
        text: 'Integration is not automatically welfare-improving for members, and the syllabus\u2019s favourite nuance is trade creation versus trade diversion. Integration is trade-creating when a member\u2019s efficient producer displaces a costlier domestic or partner source — real efficiency gains. It is trade-diverting when a member\u2019s producer displaces a NON-member supplier that was actually cheaper, but for the external tariff wall: production shifts to a higher-cost source behind the preferential wall, a loss for world efficiency (and often for the importing country\u2019s consumers). Whether a bloc creates or diverts net trade depends on the cost gaps and the height of the common external tariff — the honest answer to "are trade blocs good?" is: it depends, and here is the mechanism that decides.',
      },
      { kind: 'heading', text: 'The institutions: who does what' },
      {
        kind: 'para',
        text: 'Four institutions cover most exam items. The World Trade Organization (WTO, est. 1995, successor to the GATT of 1947) administers the rules of goods, services and intellectual-property trade; its two signature principles are most-favoured-nation treatment (any concession to one member extends to all) and national treatment (foreign goods, once inside, are treated like domestic ones); its dispute-settlement mechanism is compulsory, and its ministerial rounds — most famously the Doha Development Agenda launched 2001 — negotiate further liberalisation, with agriculture the standing sticking point. The International Monetary Fund (IMF, Bretton Woods 1944) guards monetary stability: it lends to countries in balance-of-payments crisis, typically with policy conditionality, and monitors exchange-rate arrangements. The World Bank (also Bretton Woods) funds long-term development — infrastructure, education, health — through the IBRD and its concessional-window affiliates, not crisis lending. UNCTAD, the UN trade-and-development body, researches FDI flows and publishes the World Investment Report — the source of the FDI statistics the syllabus quotes. The one-line sorting rule: WTO makes trade rules, IMF guards short-run monetary stability, World Bank funds long-run development, UNCTAD measures and advocates for developing countries in trade and investment.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Entry mode, then integration logic',
        steps: [
          'Step 1: a software firm wants to serve a large overseas market that imposes no tariffs on software but has weak copyright enforcement and abundant low-cost engineering talent.',
          'Step 2: apply the internalisation logic. Licensing a local distributor would rent the product while copyright enforcement is weak — high appropriation risk. Exporting avoids risk but leaves service and customisation in local hands anyway.',
          'Step 3: the fitting mode is a wholly-owned subsidiary (greenfield development centre): full control over the intellectual property, direct employment of the local talent, and no tariff obstacle since none exists.',
          'Step 4: contrast — a clothing exporter facing a 25% external tariff and strict rules of origin might instead choose contract manufacturing INSIDE the bloc to jump the wall: market-seeking horizontal FDI at the light end of the ladder.',
          'Integration check: if that clothing firm\u2019s new host country joins a customs union whose external tariff pushes sourcing from the cheapest non-member fabric supplier to a dearer member supplier, the shift is trade diversion — efficiency loss despite integration.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'FDI is distinguished from portfolio investment because FDI involves:',
            options: [
              'a controlling stake, commonly ten percent or more of voting equity',
              'only purchases of government bonds abroad',
              'any transfer of money across a border',
              'exclusively greenfield construction',
            ],
            answer: 0,
            explain: 'The defining feature is lasting managerial control — the conventional ten-percent voting-equity threshold. Portfolio flows buy securities without seeking control; FDI directs operations.',
          },
          {
            q: 'A carmaker builds a plant abroad to produce the same cars it makes at home. This is:',
            options: [
              'vertical FDI',
              'horizontal FDI',
              'brownfield FDI by definition',
              'portfolio investment',
            ],
            answer: 1,
            explain: 'Horizontal FDI replicates the same activity in another country — market-seeking. Vertical FDI relocates a production stage; greenfield/brownfield describes build-versus-buy, a separate dimension.',
          },
          {
            q: 'The defining feature distinguishing a customs union from a free trade area is:',
            options: [
              'a common external tariff',
              'abolition of internal tariffs',
              'free movement of labour',
              'a common currency',
            ],
            answer: 0,
            explain: 'Both abolish internal barriers; the customs union adds one external tariff administered jointly, which removes the rules-of-origin problem a free trade area suffers. Factor mobility is the common-market rung; common currency belongs to (monetary) economic union.',
          },
          {
            q: 'A member country switches imports of a good from a cheaper non-member to a dearer member because of the bloc\u2019s external tariff. This is:',
            options: [
              'trade creation',
              'trade diversion',
              'dumping',
              'most-favoured-nation treatment',
            ],
            answer: 1,
            explain: 'Diversion shifts sourcing from the genuinely cheapest producer to a costlier one inside the preferential wall — a world-efficiency loss. Creation is the reverse: an efficient member displacing costlier domestic or partner sources.',
          },
          {
            q: 'Which institution is the correct home for balance-of-payments crisis lending with policy conditionality?',
            options: [
              'the World Trade Organization',
              'the International Monetary Fund',
              'the World Bank',
              'UNCTAD',
            ],
            answer: 1,
            explain: 'The IMF lends to countries in payments crisis, conditions on policy adjustment, and monitors exchange arrangements. The World Bank funds long-run development; the WTO adjudicates trade rules; UNCTAD researches trade and investment for development.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Mixing the two FDI taxonomies: horizontal/vertical/conglomerate describe the RELATIONSHIP to home operations; greenfield/brownfield describe the MODE of establishment — a plant can be horizontal greenfield or horizontal brownfield at once. Placing a free trade area and a customs union on the same rung: the common external tariff is exactly the difference. Calling every regional agreement "like the EU" — the EU alone combines common market with (partial) economic and monetary union; USMCA and AFTA sit far lower on the ladder. In institution questions, swapping the IMF and World Bank roles: crisis lending with conditionality is IMF territory; long-run development finance is the Bank\u2019s. And do not credit the WTO with "free trade everywhere" — it administers agreed rules and hosts negotiation; protection remains lawful within limits.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the comparative-advantage and trade-policy lessons for why trade happens and how tariffs bite. Follow with the business-environment lesson (the global sector in scanning terms) and the corporate-finance lesson (how cross-border projects are discounted and financed). Primary reading: LibreTexts, International Business (the lardbucket open edition, CC BY-NC-SA), ch.2 §2.4 "Foreign Direct Investment" and ch.5 "Regional Economic Integration"; Open Text WSU, Core Principles of International Marketing (CC BY-NC), §2.4, §2.7 and ch.7 "Global Market Entry Modes".',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'FDI = lasting controlling stake (≥10% voting equity); portfolio flows stop short of control.',
        'Horizontal/vertical/conglomerate classify direction; greenfield/brownfield classify build-vs-buy.',
        'Entry-mode ladder: export → licensing/franchising → contract manufacturing → joint venture → wholly owned; control rises with commitment.',
        'Integration ladder: PTA → FTA → customs union → common market → economic union; each rung adds one freedom.',
        'Integration creates trade when efficient members displace costlier sources; diverts trade when the tariff wall relocates sourcing to dearer members.',
        'WTO rules trade; IMF guards payments stability; World Bank funds development; UNCTAD measures FDI for development.',
      ] },
    ],
  },
  {
    id: 'econ-regional-integration',
    title: 'Trade Protection and Regional Integration: Blocs, Trade Creation and Diversion',
    domain: 'Business & Economics',
    field: 'International Trade',
    branch: 'Regional Integration',
    tier: 'intermediate',
    concepts: [
      'The integration ladder: free trade area to economic union',
      'Customs unions and the common external tariff',
      'Trade creation versus trade diversion',
      'The single market: four freedoms',
      'Why blocs form: lock-in, scale and bargaining power',
      'GATT Article XXIV and the WTO exception',
      'Evaluating Brexit and the costs of leaving',
    ],
    words: 1447,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'The tariff lesson explains why unilateral protection usually hurts the protecting country, and the retaliation analysis shows the trap: each country\'s best tariff makes both worse off, a prisoner\'s dilemma that worldwide agreements exist to escape. Regional integration is the halfway house — a group of countries liberalises among themselves faster than the world as a whole. Economists judge the result with a famous pair of concepts due to Jacob Viner: forming a bloc can create trade, replacing costly domestic production with cheaper partner production, or divert it, replacing cheap outside production with dearer partner production. Whether a bloc helps or harms turns on which force dominates, and the answer is empirical, case by case.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Exam questions on this topic are almost always evaluative: name the level of integration, apply creation versus diversion, and weigh sovereignty against scale. The concepts also explain the decade\'s biggest trade story — a large economy renegotiating and then leaving a customs union — so the theory has a live, expensive case study attached.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Free trade area (FTA)', def: 'Members remove tariffs among themselves but keep their own external tariffs. The weakness is trade deflection: goods enter through the lowest-tariff member and flow freely onward, which is why FTAs need rules of origin documenting where a product was made.' },
          { term: 'Customs union', def: 'A free trade area plus a common external tariff, so goods circulate internally without origin paperwork on tariffs. Deeper than an FTA but still short of a single market, because non-tariff barriers — different standards, checks, licensing — remain.' },
          { term: 'Common market', def: 'A customs union whose members also allow free movement of the factors of production: labour, capital and enterprise. People and firms as well as goods cross borders without restriction, requiring mutual recognition of qualifications and coordinated regulation.' },
          { term: 'Economic (and monetary) union', def: 'Members harmonise — or in the monetary case surrender — economic policy itself: a common currency, a shared central bank, fiscal rules. The deepest rung short of full political union, and the one that makes integration irreversible enough to hurt when it unravels.' },
          { term: 'Trade creation', def: 'Integration replaces higher-cost domestic output with lower-cost output from a partner. Welfare rises: consumers pay less, the inefficient home industry releases resources, and the gain is genuine because production moves to a lower-cost source.' },
          { term: 'Trade diversion', def: 'Integration replaces lower-cost output from outside the bloc with higher-cost output from a partner, simply because the partner now faces no tariff. Welfare falls for the importing country; the outside producer\'s loss is not offset by anything except the tariff revenue forgone.' },
        ],
      },
      {
        kind: 'para',
        text: 'The World Trade Organization has a paradox at its heart: its most-favoured-nation rule demands that any tariff concession to one member be extended to all, yet it permits customs unions under Article XXIV, provided the bloc covers substantially all trade and does not raise barriers against outsiders. The rationale is political economy — deep liberalisation is easier to sell to domestic industries when it is reciprocal and regional — and the risk is that every exemption seeds a patchwork of preferential agreements, each with its own rules of origin, that quietly re-erects the maze the WTO exists to tear down.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'Creation or diversion? A three-country arithmetic',
        steps: [
          'Country A imports widgets. It can make them domestically at 12 per unit; country B (a prospective partner) produces at 8; the cheapest world producer C sells at 5.',
          'Before integration, A charges a tariff of 4: the C price lands at 9, undercutting both B (8 + 4 = 12) and domestic production (12). A imports from C and collects 4 per unit.',
          'A and B now form a customs union with the external tariff unchanged. The B price drops to 8 — imports switch from C to B.',
          'Trade creation effect: A previously paid 9 to C, now pays 8 to B — consumers gain, and production has moved toward the true low-cost available source within the union.',
          'Trade diversion effect: production moved away from the true global minimum (C at 5) to B at 8. A also loses the 4 tariff revenue it used to collect per unit.',
          'Verdict: net effect depends on the quantities. If A switches a large volume from domestic production (12) to B (8), creation dominates and welfare rises; if most imports were already coming from C, diversion dominates and A is worse off — the textbook ambiguity examiners want discussed, not resolved by assertion.',
        ],
      },
      {
        kind: 'para',
        text: 'Why do countries integrate at all, given the risks? Three motives recur. Lock-in: binding yourself to partners makes backsliding domestically unpopular or impossible — a credible commitment device for reforms governments know are right but cannot defend alone. Scale: a single market of hundreds of millions lets firms spread fixed costs, compete globally and attract investment that a national market could not support. Bargaining power: negotiating as a bloc rebalances leverage against large partners. The European project pressed all three, and its single market\'s four freedoms — goods, services, capital, people — remain the fullest real-world implementation of the common-market rung.',
      },
      {
        kind: 'para',
        text: 'The costs of exit illuminate the value of membership. An economy leaving a customs union re-acquires its own tariff schedule, its own rules of origin on every exported good, and a border whose checks the single market had abolished; studies of the Brexit divergence consistently find trade below the pre-2016 trend and firms bearing new fixed paperwork costs, while the promised independent trade deals partially offset — slowly, and on terms set by partners who know the exiting country\'s urgency. The evaluation framework is exactly Viner\'s: recreating with the world what was surrendered with the bloc, one agreement at a time, against the diversion the split creates.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'What distinguishes a customs union from a free trade area?',
            options: [
              'A customs union removes all internal tariffs; an FTA does not',
              'A customs union adds a common external tariff; an FTA keeps members\' external tariffs separate',
              'An FTA allows labour mobility; a customs union does not',
              'There is no difference in practice',
            ],
            answer: 1,
            explain: 'Both remove internal barriers; the customs union\'s common external tariff is what eliminates trade deflection and the need for tariff-based rules of origin.',
          },
          {
            q: 'Trade diversion occurs when:',
            options: [
              'a bloc member exports more after integration',
              'imports switch from a lower-cost outside producer to a higher-cost partner because of preferential treatment',
              'a country stops producing a good entirely',
              'tariff revenue replaces income tax revenue',
            ],
            answer: 1,
            explain: 'Diversion is the welfare-losing switch created by the preference itself: the partner wins the market not by efficiency but by exemption from the external tariff.',
          },
          {
            q: 'Why does the WTO permit customs unions despite the most-favoured-nation principle?',
            options: [
              'Because members of a bloc are exempt from WTO membership',
              'Because the agreements satisfy Article XXIV conditions covering substantially all trade without raising external barriers',
              'Because customs unions abolish all tariffs worldwide',
              'Because the WTO has no jurisdiction over regional agreements',
            ],
            answer: 1,
            explain: 'Article XXIV is the deliberate exception: deep regional liberalisation is allowed when it is comprehensive and non-discriminatory toward outsiders — the checked conditions, not an absence of jurisdiction.',
          },
          {
            q: 'A country joining a customs union finds its imports switch almost entirely from the cheapest world producer to a partner whose price is slightly higher. The most likely net effect is:',
            options: [
              'unambiguous welfare gain from trade creation',
              'welfare loss dominated by trade diversion',
              'no effect, since total imports are unchanged',
              'a gain equal to the tariff revenue collected',
            ],
            answer: 1,
            explain: 'When imports were already sourced from the efficient outside producer, preference-driven switching mostly destroys the price advantage and forfeits revenue — the diversion-dominated case.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Do not call trade diversion "more trade" — it is misdirected trade, and the bloc can simultaneously create and divert on different products. Do not assume deeper integration is automatically better: each rung trades policy autonomy for market access, and the optimal depth differs by country. And never evaluate a bloc only by its members\' trade volumes; the welfare test compares what was bought, from whom, at what price — including the outside world.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: Trade Policy: Tariffs, Quotas and Trade Wars — the welfare toolkit and the retaliation dilemma blocs answer.',
          'Next: Exchange Rates and the Balance of Payments — the monetary rung of the ladder and its crises.',
          'Revision cue: write the ladder from memory — FTA, customs union, common market, economic union — with one example at each rung.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Integration deepens by rungs: FTA, customs union, common market, economic union.',
          'Viner\'s test: weigh trade creation against trade diversion; the net is an empirical question.',
          'Rules of origin are the FTA\'s price for keeping separate external tariffs.',
          'Article XXIV lets blocs exist inside the WTO\'s non-discrimination rules under conditions.',
          'Lock-in, scale and bargaining power — not just prices — drive countries to integrate.',
        ],
      },
    ],
  },
]

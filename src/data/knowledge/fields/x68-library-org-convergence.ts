/* ------------------------------------------------------------------ */
/*  X68 LIBRARY-ORG CONVERGENCE PASS (2026-10-28)                      */
/*                                                                     */
/*  Convergence resolution: this session's structure audit picked six  */
/*  of the twelve 2ch/3ls books for deepening and authored pass X60     */
/*  (six lessons). A PARALLEL session ran the same Library-ORG payload  */
/*  and its already-merged X60/X64/X67 passes owned four of the same    */
/*  targets. Per the zero-repetition rule (and following this loop's    */
/*  own X67 merge-carve precedent), FOUR of this session's lessons are  */
/*  DROPPED as near-duplicates of the parallel run's ownership:         */
/*                                                                     */
/*   - bio-dev-cell-fate-stem-cells  -> parallel bio-dev-stem-cells-    */
/*     regeneration (their x60) owns the potency/niche/iPSC/organoid    */
/*     ground; the main lesson + morphogenesis own determination logic  */
/*     and cell behaviors.                                              */
/*   - bio-synbio-directed-evolution -> parallel synbio-directed-       */
/*     evolution (their x64) owns EP-PCR/shuffling/subtilisin/          */
/*     sitagliptin/phage-display/2018 Nobel — ~85% shared ground.       */
/*   - eng-foundations-ground-engineering -> parallel civ-foundations-  */
/*     geotechnical (their x60/x67) owns Terzaghi effective stress,     */
/*     bearing capacity, settlement, piles, SPT, Niigata liquefaction   */
/*     and ground improvement — ~90% shared ground.                     */
/*   - grow-pests-ipm-plant-health -> parallel grow-pests-diseases-ipm  */
/*     (their x67) owns the IPM ladder, thresholds, biological control, */
/*     Bt and resurgence — ~85% shared ground.                          */
/*                                                                     */
/*  KEPT — two lessons the parallel run never touched, uniquely owned:  */
/*                                                                     */
/*  1. hum-money-credit-financial-revolutions — Economic History Ch1,   */
/*     between the Silk Road and the Industrial Revolution. Owns the    */
/*     finance layer: bills of exchange, Medici banking, Amsterdam's    */
/*     VOC/bourse/Wisselbank, the Bank of England and the national      */
/*     debt, the 1720 bubbles, the gold standard. CARVED AGAINST:       */
/*     silk-road (overland relay exchange), industrial-revolution       */
/*     (production, "why Britain"), great-divergence (institutions      */
/*     debate), business-economics (modern money creation), x15         */
/*     accounting (bill-of-exchange as accounting instrument), and the  */
/*     Renaissance patronage lesson (Medici as art patrons). Verified   */
/*     zero live hits for 'Wisselbank', 'joint-stock', 'South Sea' at   */
/*     original write time.                                             */
/*  2. urb-informal-settlements-self-built-cities — Urban Studies Ch2,  */
/*     between agglomeration and housing. Owns the majority urban       */
/*     world: UN-Habitat criteria, why settlements form, incremental    */
/*     self-build, Orangi lane-level sanitation, tenure spectrum.       */
/*     CARVED AGAINST: soc-urbanization-cities (why cities exist),      */
/*     urb-housing-segregation (state-made segregation, filtering,      */
/*     gentrification in formal markets), the planning lesson (formal   */
/*     levers). Verified zero live hits for 'informal settlement' and   */
/*     'favela' at original write time.                                 */
/*                                                                     */
/*  Sources: de Vries & van der Woude, The First Modern Economy; Dickson,*/
/*  The Financial Revolution in England; Quinn, How a City Worked (OPP); */
/*  UN-Habitat World Cities Report 2024; Turner, Housing by People;     */
/*  de Soto, The Mystery of Capital.                                    */
/* ------------------------------------------------------------------ */

import type { KnowledgeTopic } from '../types'

export const x68LibraryOrgConvergenceTopics: KnowledgeTopic[] = [
{
    id: 'hum-money-credit-financial-revolutions',
    title: 'Money and Credit: The Financial Revolutions Behind Modern Growth',
    domain: 'Humanities',
    field: 'World History',
    branch: 'Economic History',
    tier: 'core',
    concepts: [
      'The problem of moving and trusting money across distance',
      'Bills of exchange and the medieval fairs',
      'Branch banking: the Medici',
      'Amsterdam: joint-stock, the bourse and the Wisselbank',
      'The Bank of England and the national debt',
      '1720: the South Sea and Mississippi bubbles',
      'The gold standard and its discipline',
    ],
    words: 1837,
    readMins: 9,
    addedOn: '2026-10-28',
    blocks: [
      {
        kind: 'para',
        text: 'The Industrial Revolution lesson asks why Britain produced the machines; this lesson asks where the money to build, trade and expand at scale came from — and why the institutions for mobilizing it appeared in Europe’s trading cities first. Between roughly 1250 and 1750 a series of financial inventions solved the same underlying problem: how do you move value across distance, between strangers, over time, when coin is heavy, journeys are dangerous and trust is scarce? Each invention — the bill of exchange, the branch bank, the joint-stock company, the national debt — looks technical, but together they built the machinery that lets savings become enterprise. The Industrial Revolution inherited them all.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Economic historians have argued for decades about capital’s role in industrialization. The consensus position is subtler than “banks caused growth”: what mattered was that Europe’s financial institutions became credible — contract enforcement, limited liability, transferable shares — so that strangers could pool capital at scale. Those institutions were built by merchants and states between the fairs of Champagne and the Bubble Act, centuries before the first steam engine.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Bills of Exchange: Money Without Moving Coin' },
      {
        kind: 'para',
        text: 'A merchant in London owes a merchant in Lyon, but shipping silver across a war-torn Europe is slow and robbery-prone. The bill of exchange solved it with paper and bookkeeping. The London merchant draws a bill ordering his correspondent in Lyon to pay the Lyon merchant on a fixed date; the Lyon merchant, who typically also sells goods to London, accepts the bill, and the two flows of debt cancel in the books of the international merchant-bankers. In effect, the merchants were exporting and importing debts to settle trade — coin moved rarely, and cross-border exchange rates were the price of the service. At the great Champagne fairs of the thirteenth century, bills let merchants settle large trades with almost no metal on hand, and by the fifteenth century a recognized European exchange market existed. (The accounting mechanics of bills — drawer, drawee, acceptor — are owned by the accounting lesson; here the point is their historical job: they made long-distance trade settle without couriered silver.)',
      },
      {
        kind: 'para',
        text: 'The same era perfected branch banking. The Medici bank, founded in Florence in 1397 by Giovanni di Bicci, spread branches across Europe’s commercial cities, held papal accounts, and grew rich partly by threading the usury prohibition: church law banned interest on loans, so returns were dressed as bills of exchange with favorable rates, or as “discrezioni” — discretionary gifts from grateful borrowers. The Medici are owned by the Renaissance lesson as art patrons; here they matter as financiers whose multinodal structure — a holding network of interlinked partnerships rather than a single office — was a genuine institutional innovation, and whose decline after Lorenzo showed how much that system depended on the reputation of one family.',
      },
      { kind: 'heading', text: 'Amsterdam: Capital as a Market' },
      {
        kind: 'para',
        text: 'The seventeenth-century Dutch Republic made finance impersonal. The Verenigde Oostindische Compagnie (VOC), chartered in 1602, was the first permanently capitalized joint-stock company: investors bought shares, the company’s books stayed open (capital was not returned voyage by voyage, as earlier ventures had done), and a board of directors paid dividends out of ongoing profits. The shares were transferable — and soon actively traded on the Amsterdam bourse, making 1602 the founding of a permanent securities market. This structure solved a scale problem: fitting out fleets to Asia cost more than any family or partnership could fund, but pooling thousands of investors under limited liability could. The VOC became effectively the world’s first multinational — it waged war, coined money and governed territory — and paid shareholders a famously long dividend stream (on the order of 18 percent per year across much of its two-century history, by the estimates of de Vries and van der Woude). Alongside the bourse, the Bank of Amsterdam (1609) gave merchants a trusted deposit-and-transfer currency for bills, making the city the clearinghouse of northern Europe.',
      },
      {
        kind: 'para',
        text: 'England borrowed the Dutch toolkit in a crisis. In the 1690s William III’s government was fighting France and borrowing expensively. The founding of the Bank of England in 1694 was the fix: a group of subscribers lent £1.2 million to the government at interest, in exchange for a charter giving the bank note-issuing and banking privileges. The state’s debts became permanent, transferable and deep — the national debt — and because Parliament guaranteed the interest, government borrowing became the safest asset in Europe. The consequence was what historians call a financial revolution: interest rates on government debt fell from wartime double digits to around 3 percent within decades, and that cheap, credible credit financed the navy, the wars — and, through private capital markets, the canals, turnpikes and factories of the next century.',
      },
      { kind: 'heading', text: 'Bubbles and Discipline' },
      {
        kind: 'para',
        text: 'The new markets also made the first great crashes possible. In 1719–20 John Law’s Mississippi Company in France and the South Sea Company in England both fused government debt conversion with colonial monopoly stocks, and both ran to spectacular prices before collapsing in the autumn of 1720 — the Mississippi scheme ruining thousands of French investors and discrediting Law’s paper-money experiments for a century, the South Sea Bubble ruining Isaac Newton (who reportedly lost a fortune and observed that he could “calculate the motion of heavenly bodies, but not the madness of people”) and triggering the Bubble Act and parliamentary inquiries. The instructive pattern is that the crashes did not destroy the institutions: England kept the national debt and the Bank, France fled paper finance for decades — a divergence that shaped both empires’ ability to fund war, and one reason historians treat 1720 as the boundary between experimental and mature market finance.',
      },
      {
        kind: 'para',
        text: 'The nineteenth century added one more architecture: the gold standard. By fixing national currencies to gold, states exported monetary discipline to the world market — deficits attracted gold outflows, which tightened credit automatically. Sterling, fully convertible since the 1820s (gold payments resumed 1821 after the wartime suspension), became the world’s money, and London’s bill-on-London system financed global trade much as the medieval bill had financed the fairs. The discipline was real but harsh: deflationary crises — 1873, 1893 — were the system’s tax, and the gold standard’s rigidity deepened the Great Depression after 1929, which is why the twentieth century dismantled it (Bretton Woods 1944, then full fiat after 1971 — the modern money-creation system is owned by the economics lessons). The through-line of this whole lesson is that each arrangement is a truce between trust and distance, renegotiated as trade grew.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Settling a Trade with a Bill of Exchange',
        steps: [
          'Setup: an English wool merchant in London owes 200 pounds’ worth of cloth payments to a merchant in Lyon; meanwhile a Lyon wine merchant owes a similar sum to a London vintner.',
          'Instrument: the wool merchant draws a bill on his Lyon correspondent ordering payment of 200 pounds to the Lyon cloth merchant in three months.',
          'Acceptance: the Lyon correspondent accepts (writes to pay); the bill can now be held, endorsed to another party, or discounted early at the fair’s exchange market for cash minus a small rate.',
          'Netting: the wine merchant’s mirror-image bill settles the reverse flow; only the small net difference ever needs to move in coin.',
          'Interpret: credit, netting and endorsement turned dangerous wagon-loads of silver into paper that could be bought, sold and inherited — the operational core of pre-modern trade finance.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Corporate law: the VOC’s permanent capital and transferable shares are the direct ancestors of every listed company and stock exchange today.',
          'Public finance: the Bank of England’s funded debt established the model — credible, long-term, transferable government bonds — under which modern states borrow at low rates.',
          'Central banking: the Bank of England’s evolution from war lender to note-issuer to lender of last resort (after the 19th-century crises) set the template for every modern central bank.',
          'Development policy: the historical lesson that credible institutions, not merely abundant savings, mobilize capital underlies modern debates about property rights and contract enforcement.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not tell the story as “invention then prosperity”: bubbles, defaults and frauds came with every stage, and the surviving institutions were forged by reacting to them. Do not credit the Industrial Revolution to banks alone — many early factories were funded by families and retained earnings; the financial revolution’s contribution was the machinery that let success scale. And be careful with the gold standard nostalgia: its discipline came with deflationary crises and the deepening of the 1930s depression.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'bill of exchange', def: 'A written order to pay a fixed sum at a future date, letting merchants settle distant trades without moving coin; discountable and endorsable.' },
          { term: 'joint-stock company', def: 'A firm capitalized by transferable shares held by many investors, with management separated from ownership — pioneered at scale by the VOC in 1602.' },
          { term: 'national debt', def: 'A state’s permanent, transferable debt obligations; made credible by parliamentary guarantee after the Bank of England’s founding in 1694.' },
          { term: 'bubble', def: 'A speculative price run followed by collapse; 1720’s South Sea and Mississippi schemes are the classic cases.' },
          { term: 'gold standard', def: 'A monetary system fixing currencies to gold, exporting discipline through gold flows at the cost of deflationary rigidity.' },
          { term: 'limited liability', def: 'The rule that shareholders risk only their invested capital — the legal precondition for pooling capital from strangers.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The bill of exchange’s core contribution to medieval trade was that it:',
            options: [
              'increased the supply of gold coins',
              'let distant trades settle through debt netting without shipping silver',
              'abolished usury bans',
              'standardized weights and measures',
            ],
            answer: 1,
            explain: 'Bills moved value as paper obligations that could be netted, endorsed and discounted — coin only moved for the small net balance.',
          },
          {
            q: 'What made the VOC (1602) financially novel compared with earlier trading ventures?',
            options: [
              'It was the first company to trade in Asia',
              'Its capital was permanent and its shares transferable and actively traded',
              'It banned dividends',
              'It was owned entirely by the state',
            ],
            answer: 1,
            explain: 'Permanent capital plus a permanent bourse created modern equity markets — earlier ventures liquidated after each voyage.',
          },
          {
            q: 'The Bank of England’s founding (1694) lowered the government’s borrowing costs mainly because:',
            options: [
              'it printed paper money freely',
              'Parliament guaranteed and funded the debt, making it a safe, transferable asset',
              'it taxed the colonies directly',
              'it stopped all wars',
            ],
            answer: 1,
            explain: 'Credibility, not printing, is the mechanism: funded, guaranteed debt became the safest asset in Europe, and rates fell from double digits to ~3 percent.',
          },
          {
            q: 'The key long-run consequence of the 1720 bubbles was that:',
            options: [
              'England abolished joint-stock companies forever',
              'England retained its financial institutions while France fled paper finance for decades',
              'both countries returned to barter',
              'the gold standard was adopted immediately',
            ],
            answer: 1,
            explain: 'The divergence after 1720 — institutional continuity in Britain, retrenchment in France — shaped both states’ capacity to fund wars and, later, industry.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Read after the Silk Road lesson (exchange before finance) and before the Industrial Revolution lesson (which owns production and “why Britain”). The great-divergence lesson owns the institutions debate; the accounting lesson owns bill mechanics; the economics lessons own modern money creation.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'urb-informal-settlements-self-built-cities',
    title: 'The Self-Built City: Informal Settlements and the Majority Urban World',
    domain: 'Social Sciences',
    field: 'Urban Sociology',
    branch: 'Urban Studies',
    tier: 'intermediate',
    concepts: [
      'What counts as an informal settlement: the UN-Habitat criteria',
      'Scale: one in eight urban residents and rising',
      'Why settlements form: migration, exclusion and planning failures',
      'Incremental housing: building over years, not all at once',
      'Upgrading versus eviction: the Orangi Pilot Project model',
      'Tenure: security, titles and the dead-capital debate',
    ],
    words: 1693,
    readMins: 8,
    addedOn: '2026-10-28',
    blocks: [
      {
        kind: 'para',
        text: 'The cities of the textbooks — zoned, master-planned, financed by mortgages — are a minority experience. The United Nations estimates that about one billion people, roughly one urban resident in eight, live in slums or informal settlements, and UN-Habitat projects the number approaching two billion by mid-century if current trends hold. In much of sub-Saharan Africa and South Asia, the majority of new urban housing is built outside the formal system: self-financed, self-managed, often self-built, incrementally improved over decades. Any honest study of urban life has to treat the self-built city not as a failure of the planned city but as a parallel system with its own economics, politics and engineering.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Informality is the dominant housing-production system of the global urban century. Whether the next two billion urban residents get sanitation, water and safety depends less on grand master plans than on whether governments learn to work with the settlers who are already building their own homes — upgrading in place, connecting infrastructure lane by lane, and securing tenure without evicting the builders.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Definitions and Scale' },
      {
        kind: 'para',
        text: 'UN-Habitat defines a slum household by deprivation, not by looks: a household lacking one or more of durable housing (protection from extreme weather), sufficient living space (no more than three people per room), easy access to safe water, adequate sanitation (private or reasonably shared), and secure tenure (protection from forced eviction). “Informal settlement” emphasizes the process — development outside permits, planning and title — while “slum” emphasizes the conditions. The overlap is large but not perfect: a household can hold de facto security on a self-built plot for decades, or live in a formally titled apartment without adequate sanitation. The numbers are enormous and uneven: well over half the urban population of much of South Asia and sub-Saharan Africa lives in slum-condition households, while Latin America’s share, though still large, has fallen as its cities formalized — evidence that these conditions are a policy outcome, not a permanent condition.',
      },
      { kind: 'heading', text: 'Why Settlements Form' },
      {
        kind: 'para',
        text: 'The mechanics are straightforward. People move to cities because urban labor markets offer real income gains — the same agglomeration forces this book’s earlier lesson formalized — and they arrive faster than formal housing can be produced and financed for low incomes. Formal supply is restricted by three ceilings at once: land (zoned or de facto reserved for higher-value uses), infrastructure (utilities extend only where plans say so), and finance (no collateral, no mortgage). Where the three ceilings bind, demand does not disappear — it builds. Settlers occupy peripheral or unsafe land (floodplains, steep slopes, rights-of-way), buy informal plots from entrepreneurial land brokers, or rent in dense subdivisions, and construct with whatever materials and skills are at hand, improving room by room as income arrives. The result is often a rational response to a broken market — incremental, labor-intensive, cheap — rather than disorder for its own sake.',
      },
      {
        kind: 'callout',
        title: 'Experimental note',
        text: 'Economists call this the incremental housing logic: a family pours a slab this year, adds a block room next year, rents the front room the year after. Studies across Latin America and South Asia find self-built incrementally improved housing outperforming many state-built units in cost per household and resident satisfaction — the “housing as a verb” insight of architect John F. C. Turner (1976), who argued that residents’ control over the building process is itself a major housing benefit.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Upgrading versus Eviction' },
      {
        kind: 'para',
        text: 'Policy has cycled through three generations. Demolition and relocation — clearing settlements to the urban fringe or to remote mass housing — dominated mid-twentieth-century practice and largely failed: it destroyed livelihoods tied to location (the informal worker’s customers and employers are nearby) and usually produced new informal settlements elsewhere. Forced eviction without rehousing is now condemned in international housing rights law. The modern alternative is in-situ upgrading: keep people where they live and bring the city to them — water, sewerage, drainage, paths, lighting, tenure security — designed with residents rather than for them. The canonical case is Karachi’s Orangi Pilot Project, begun in 1980 by the social scientist Akhtar Hameed Khan. Orangi’s innovation was to split the sanitation problem at the lane scale: residents financed, built and maintained the internal lane sewers themselves (organized lane committees, hiring local labor, with technical advice from the project), while government was pressed to fund only the external trunk mains and treatment. Orangi residents ended up financing the overwhelming majority of the neighborhood sanitation system’s cost themselves — over 90 percent of internal development — and the lane-by-lane method spread to hundreds of thousands of lanes across Pakistan. The model’s general lesson: infrastructure succeeds when residents’ money and maintenance are built into the design, and municipal systems stop pretending to deliver everything.',
      },
      {
        kind: 'example',
        title: 'Worked Example — The Lane-Level Cost Split',
        steps: [
          'Setup: a lane of 40 households needs sanitation. A conventional municipal connection per household costs about 10,000 rupees installed and often stalls because municipal budgets cannot cover all lanes at once.',
          'Orangi logic: the internal lane sewer (the pipes under the lane) is designed simple, built by residents’ hired labor at roughly 1,000–1,500 rupees per household.',
          'Compute: 40 households × ~1,250 rupees ≈ 50,000 rupees covers the whole lane in months — about an eighth of the formal cost, financed locally without waiting for the municipal queue.',
          'The state’s share: one trunk sewer collecting many lanes, funded publicly where unit costs are genuinely large.',
          'Interpret: matching each cost to the actor best able to bear it — residents for local works, the state for trunk infrastructure — is the arithmetic behind the project’s success.',
        ],
      },
      { kind: 'heading', text: 'Tenure: Titles, Security and the Dead-Capital Debate' },
      {
        kind: 'para',
        text: 'Should settlements be titled? Hernando de Soto’s influential argument (“The Mystery of Capital”, 2000) holds that untitled property is dead capital — an asset that cannot collateralize loans — and that mass titling would unlock investment from within. The evidence is more mixed: titles help where credit markets function and land values rise, but in many cities titling without infrastructure produced little lending (banks often will not take informal-area property as collateral regardless), while eviction threats fell for other reasons — perceived permanence, political protection, community organization. The practical consensus now treats tenure as a spectrum: no threat of eviction matters most; registered title matters most where markets and utilities reward it; intermediate instruments (certificates, occupancy licenses, collective tenure) often deliver most of the security at a fraction of the cost. The deepest finding of the upgrading literature is social: settlements where residents organize — savings groups, lane committees, federations that exchange knowledge settlement to settlement — consistently negotiate better infrastructure and resist the worst evictions.',
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Planning practice: participatory slum upgrading (Thailand’s BAAN MANKONG program, Brazil’s urban reforms) now funds community-designed infrastructure directly, treating settlements as neighborhoods to finish rather than problems to remove.',
          'Engineering: simple, maintainable, lane-level designs (small-bore sewers, community standpipes, stepped footpaths on slopes) are the default toolkit of the upgrading industry.',
          'Health: sanitation upgrades show measurable drops in diarrheal disease and infant mortality — Orangi’s lanes saw infection burdens fall as excreta left the lanes.',
          'Climate adaptation: settlements on floodplains and slopes are the front line of urban climate risk, and upgrading now bundles drainage and heat protection into the same works.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not read informality as absence of order: settlements have land markets, brokers, rules and leaders — often functioning better than the stereotype suggests. Do not romanticize them either: fire, flood, unsafe structures and disease kill real people, and self-build is a response to exclusion, not a preference. And beware single-lever thinking — titling alone, infrastructure alone, or relocation alone each fail; the cases that worked bundled security, services and resident control.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'informal settlement', def: 'Housing developed outside permits, planning and title — self-built, incremental, and typically lacking one or more UN-Habitat adequacy criteria.' },
          { term: 'slum household', def: 'A household lacking durable housing, sufficient space, safe water, adequate sanitation or secure tenure (UN-Habitat definition).' },
          { term: 'incremental housing', def: 'Building and improving a home in stages as income allows — the dominant production method of the majority urban world.' },
          { term: 'in-situ upgrading', def: 'Improving settlements where they stand — infrastructure, tenure, paths — with residents as co-designers, instead of relocating them.' },
          { term: 'Orangi model', def: 'Lane-level sanitation financed, built and maintained by residents, with the state funding only trunk infrastructure (Karachi, 1980–).' },
          { term: 'dead capital', def: "De Soto's term for untitled property that cannot collateralize credit; the concept launched the titling debate." },
          { term: 'tenure security', def: 'Confidence that a household will not be forcibly evicted — a spectrum from de facto tolerance to registered freehold.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'UN-Habitat defines a slum household by:',
            options: [
              'the building materials used',
              'deprivations in durability, space, water, sanitation or tenure',
              'the residents’ income',
              'the settlement’s age',
            ],
            answer: 1,
            explain: 'The definition is deprivation-based — any one of five lacks qualifies a household — which is why condition and process (informality) overlap but are distinct.',
          },
          {
            q: 'The Orangi Pilot Project’s central design idea was:',
            options: [
              'municipal crews installing sewers faster',
              'splitting sanitation into resident-financed lane sewers plus state-funded trunk infrastructure',
              'relocating residents to new housing',
              'privatizing all water utilities',
            ],
            answer: 1,
            explain: 'Matching costs to actors — residents fund and maintain local works (over 90% of internal cost), the state funds trunks — is what made the system affordable and maintained.',
          },
          {
            q: 'Turner’s “housing as a verb” argument says the main benefit of self-build is:',
            options: [
              'cheaper materials',
              'residents’ control over the building process itself',
              'faster completion than contractors',
              'avoidance of property tax',
            ],
            answer: 1,
            explain: 'Incremental building gives households agency, investment and satisfaction that state delivery often fails to produce — control is a housing outcome, not just a method.',
          },
          {
            q: 'The mixed evidence on mass land titling shows that:',
            options: [
              'titles automatically unlock mortgage credit everywhere',
              'security from eviction matters most, while titles help mainly where credit and utility markets reward them',
              'tenure is irrelevant to investment',
              'eviction threats encourage investment',
            ],
            answer: 1,
            explain: 'De facto security delivers most of the protection; formal title adds value when banks and utilities recognize it — hence the shift toward intermediate tenure instruments.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Read after the agglomeration lesson (why people arrive) and before the housing lesson (which owns segregation and gentrification in formally planned markets — a different failure mode than planning exclusion). The planning lesson owns the formal-side levers (zoning, parking, transit design).',
        tone: 'path',
      },
    ],
  },
]

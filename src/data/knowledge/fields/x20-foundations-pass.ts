import type { KnowledgeTopic } from '../types'

/** Expansion pass X20 (2026-10-22): the foundations gap pass — the intro
 *  units the syllabi assume and the Library had skipped. Two clusters,
 *  both verified zero-dup against coverage/COVERAGE.md, dedup.ts and a
 *  full-text grep of src/data/knowledge/fields before authoring:
 *  1. Economics foundations (a-level-economics 73%, ib-economics 80% — the
 *     two weakest exams in the audit). econ-foundations-methodology owns
 *     scarcity/choice/methodology (OpenStax Principles of Economics 3e Ch. 2;
 *     the comparative-advantage lesson only borrows opportunity cost for the
 *     Ricardian trade model and is left untouched). econ-market-efficiency-surplus
 *     owns the welfare lens — consumer/producer surplus, allocative and
 *     productive efficiency, elasticity-driven incidence (econ-market-structures
 *     merely names the two efficiencies inside its four-model comparison;
 *     bus-trade-policy-tariffs owns the TARIFF welfare accounting and is
 *     referenced, not repeated). econ-regional-integration owns the trading-
 *     bloc ladder and trade creation/diversion — zero prior coverage anywhere
 *     (Suranovic, International Trade Theory and Policy, internationalecon.com,
 *     read 2026-10-22).
 *  2. Java OOP foundations (ap-csa 82% — 6 unmapped units, all syntax-level).
 *     cs-java-objects-classes-methods, cs-java-arrays-and-arraylists and
 *     cs-java-boolean-logic-expressions own the six units; the existing
 *     computing lessons are algorithms/AI (hash tables, transformers) and own
 *     no Java syntax. Grounded in Eck, Introduction to Programming Using Java
 *     v9 (math.hws.edu/javanotes, open text): Ch. 5 Objects and Classes,
 *     Ch. 7 Arrays/ArrayLists/Records, Ch. 3 Control.
 *  12 curated aliases map the exam phrasings to these and to the two verified
 *  economics lessons that already teach their units (see topic-aliases.ts). */

export const x20FoundationsPassTopics: KnowledgeTopic[] = [
  {
    id: 'econ-foundations-methodology',
    title: 'Economic Methodology: Scarcity, Choice and How Economists Approach the World',
    domain: 'Business & Economics',
    field: 'Foundations of Economics',
    branch: 'Methodology & Scarcity',
    tier: 'core',
    concepts: [
      'Scarcity and the economic problem',
      'Opportunity cost as the real price',
      'Factors of production: land, labour, capital, enterprise',
      'The production possibilities frontier',
      'Positive versus normative statements',
      'Ceteris paribus and the role of models',
      'Marginal analysis and sunk costs',
      'Why economists disagree',
    ],
    words: 1639,
    readMins: 8,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Every economics course begins with an uncomfortable fact: wants are unlimited and the means to satisfy them are not. Land, labour, capital and entrepreneurial talent are finite, so no society — and no household — can have everything. This is the economic problem, and it forces a question that prices, politics and prudence all try to answer: what to produce, how, and for whom? Economics is the study of those choices, and its first lesson is that every choice has a cost measured not in money but in the best alternative forgone. This lesson builds the method economists use to study choice — models, assumptions and a strict distinction between what is and what ought to be — before any markets, curves or policies arrive.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Examiners treat this material as the load-bearing wall of the subject: definitions of scarcity, opportunity cost and the frontier reappear inside every later question, from elasticity to development. It is also where the discipline explains itself — why economists use models, why they hold other things equal, and why honest answers so often begin with the phrase "it depends on the assumption".',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Scarcity', def: 'The condition that resources are finite while wants are unlimited. Scarcity is not the same as shortage — a shortage is a market outcome at a given price, while scarcity is the permanent starting point of the subject.' },
          { term: 'Opportunity cost', def: 'The value of the next best alternative sacrificed when a choice is made. The cost of an extra hour of study is the hour of rest given up; the cost of a new motorway is whatever else those funds and crews could have built. Money price is only part of the story.' },
          { term: 'Factors of production', def: 'The scarce inputs every economy combines: land (natural resources, earning rent), labour (human effort and skill, earning wages), capital (produced means of production, earning interest and profit) and enterprise (the risk-bearing that organises the other three, earning profit).' },
          { term: 'Production possibilities frontier (PPF)', def: 'A diagram showing the maximum combinations of two goods an economy can produce with its current resources and technology. Points inside are feasible but wasteful, points on the curve are productively efficient, and points beyond are unreachable without growth.' },
          { term: 'Positive statement', def: 'A claim about what is, testable against evidence: "a rise in the minimum wage reduces teenage employment" can in principle be checked. Positive economics is the territory of data and models.' },
          { term: 'Normative statement', def: 'A claim about what ought to be, carrying a value judgment: "the rich should pay higher taxes" cannot be true or false in the way a fact can. Policy advice mixes both, and spotting the normative residue is a skill examiners explicitly test.' },
          { term: 'Ceteris paribus', def: '"Other things being equal" — the standing assumption that lets a model isolate one relationship at a time. Demand curves slope down, ceteris paribus; if incomes, tastes and rivals\' prices all move at once, no single curve can be read.' },
        ],
      },
      {
        kind: 'para',
        text: 'The frontier makes the economic problem visible. Moving along the PPF from, say, healthcare to education shows opportunity cost as the slope: the first thousand teachers may cost little, because the resources released are poorly suited to healthcare anyway, but each further transfer costs more as increasingly specialised staff and equipment must be reassigned. That rising cost is the law of increasing opportunity cost, and it explains why the frontier bows outward rather than running straight. A straight-line frontier means resources switch at a constant rate — a useful simplification, an unrealistic description. Economic growth appears as the whole curve shifting outward: more resources, better technology or improved institutions move the boundary itself.',
      },
      {
        kind: 'para',
        text: 'The frontier also carries two distinct meanings of efficiency. Productive efficiency means operating on the curve — no more output is possible without sacrificing something else. Allocative efficiency means being at the point on the curve that society most values, which requires information about preferences that the diagram itself does not supply. The distinction matters because an economy can be productively efficient and still produce the wrong mix — missiles and no medicine — which is why the choice question "for whom and what" never reduces to the technical question "how".',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'Reading opportunity cost off a frontier',
        steps: [
          'An economy produces only wheat and cloth. At point A it makes 100 tonnes of wheat and 0 metres of cloth; at point B, 90 tonnes of wheat and 20 metres of cloth.',
          'Moving from A to B, gaining 20 metres of cloth costs 10 tonnes of wheat. The opportunity cost of 1 metre of cloth is therefore 0.5 tonnes of wheat.',
          'Moving from B to a point C at 80 tonnes of wheat and 45 metres of cloth, the next 25 metres of cloth cost 10 tonnes of wheat — opportunity cost per metre has fallen to 0.4, so here the frontier is locally flatter.',
          'Now suppose the economy is producing at 100 wheat and 20 cloth. That bundle lies outside the frontier traced by A–B–C: it is unattainable with current resources, and only growth — immigration, investment, better looms — can reach it.',
          'Finally, a minister argues "we should produce more cloth because cloth employment is fairer". Classify: the employment claim is normative; the statement "moving from A to B costs 10 tonnes of wheat" is positive and checkable.',
        ],
      },
      {
        kind: 'para',
        text: 'Method is the quiet half of the topic. Economists cannot run laboratory trials on a whole economy, so they build models — deliberately small machines made of assumptions — and test their predictions against data. Marginal analysis is the workhorse: decisions are compared at the margin, asking whether one more unit adds more benefit than cost, and sunk costs are ignored because they are paid whatever happens. A student who abandons a useless course because the fee is already spent is applying the theory better than one who sits through two more years "to get the money\'s worth". Models are judged not by realism of assumptions but by usefulness of predictions — which is why the same profession can prize a one-factor trade model that no country fits perfectly.',
      },
      {
        kind: 'para',
        text: 'Why do economists disagree? Partly over positive questions — which model fits the data — and partly, more stubbornly, over normative weights: how much to value equality against growth, present against future. Disagreement is not a failure of the discipline but a consequence of its subject matter: human choices under scarcity, where evidence is noisy and values differ. Recognising which half of a disagreement you are watching — facts or weights — is the fastest way to improve any argument about economic policy.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A student gives up a part-time job paying 200 to attend an extra lecture. The direct cost of attending is 10 in travel. What is the opportunity cost of attending?',
            options: ['10', '200', '210', '190'],
            answer: 2,
            explain: 'Opportunity cost is the next best alternative forgone plus any direct costs: the 200 in wages given up plus the 10 in travel, totalling 210. The 200 is not "saved" — it is sacrificed.',
          },
          {
            q: 'Which statement is positive rather than normative?',
            options: [
              'Taxes on sugary drinks should be higher.',
              'A 10% rise in the price of a good reduces quantity demanded, other things equal.',
              'The government ought to spend more on railways than on roads.',
              'Inequality is too high in most economies.',
            ],
            answer: 1,
            explain: 'Only the second is testable against evidence. The others contain "should" and "ought" — value judgments that cannot be confirmed or refuted by data alone.',
          },
          {
            q: 'An economy moves along its bowed-out PPF, producing ever more of one good. Why does opportunity cost rise?',
            options: [
              'Because money wages rise as output grows',
              'Because resources are not equally suited to both goods, so progressively less suitable ones must be switched',
              'Because demand falls as more is produced',
              'Because the frontier shifts inward',
            ],
            answer: 1,
            explain: 'Increasing opportunity cost reflects heterogeneous resources: the first workers transferred to cloth may be weavers, the last may be farmers whose wheat output is very high, so each extra metre of cloth costs more wheat.',
          },
          {
            q: 'A firm has already paid a non-refundable 5,000 for a project. New information says continuing adds 3,000 of value at 4,000 of extra cost. Rational choice is to:',
            options: [
              'continue, to recover the 5,000 already spent',
              'stop, because total costs 9,000 exceed total value 3,000',
              'stop, because the 5,000 is sunk and the marginal cost 4,000 exceeds the marginal benefit 3,000',
              'continue, because stopping admits a mistake',
            ],
            answer: 2,
            explain: 'Sunk costs are irrelevant to the decision at the margin. Compare only the additional benefit (3,000) with the additional cost (4,000). Total-loss accounting, the fallacy behind option B, is exactly the error the topic tests.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Three errors dominate scripts. First, defining opportunity cost as "money paid" — it is the next best alternative forgone, whether or not money changes hands. Second, calling a point inside the PPF "efficient because it is feasible": inside means idle or misallocated resources. Third, treating "should" statements as testable: mixing normative conclusions into positive analysis is precisely the boundary this topic draws, and examiners set questions to catch it.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Next: Supply, Demand and Elasticity — how markets answer the what, how and for whom questions this lesson poses.',
          'Then: the comparative-advantage lesson, which reuses the frontier logic across countries rather than goods.',
          'For policy work: When Markets Fail — where allocative efficiency is the measuring stick applied to real-world breakdowns.',
          'Revision cue: practise converting one-sentence news claims into positive and normative parts.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Scarcity makes choice unavoidable; opportunity cost is the real price of every choice.',
          'The PPF turns those costs into geometry: slope = opportunity cost, bow = increasing cost, shift = growth.',
          'Productive efficiency is being on the frontier; allocative efficiency is being at the point society values most.',
          'Positive claims are testable, normative claims are value judgments; good analysis keeps them labelled.',
          'Models isolate with ceteris paribus, decide at the margin and ignore sunk costs.',
        ],
      },
    ],
  },
  {
    id: 'econ-market-efficiency-surplus',
    title: 'Competitive Markets: Efficiency, Surplus and Welfare',
    domain: 'Business & Economics',
    field: 'Microeconomics',
    branch: 'Welfare Economics',
    tier: 'core',
    concepts: [
      'Consumer surplus as the area under demand, above price',
      'Producer surplus as the area above supply, below price',
      'Community surplus and the maximum-welfare claim',
      'Allocative efficiency: price equals marginal cost',
      'Productive efficiency at minimum average cost',
      'Elasticity and the incidence of a tax',
      'Deadweight loss as the measuring rod',
    ],
    words: 1440,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Prices coordinate without anyone planning to, but coordination alone is a weak defence of markets. The stronger claim is about welfare: under the right conditions, a competitive equilibrium delivers the largest possible total gain to buyers and sellers combined. This lesson builds that claim from two areas on a diagram. Consumer surplus is what buyers value above what they pay; producer surplus is what sellers receive above what they would have accepted. Where supply meets demand, the sum of the two — community surplus — is maximised, and the marginal buyer values the good exactly at the marginal cost of making it. Every interference with that equilibrium redistributes surplus and usually destroys some of it, and the geometry says precisely how much.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Surplus analysis is the welfare toolkit that later topics assume. Market failure is defined as a shortfall from the community-surplus maximum; tax incidence questions are surplus-division questions; the deadweight triangles drawn around tariffs and monopoly are the same triangle computed here. Learn it once as arithmetic on a diagram and the rest of microeconomics reads as applications.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Willingness to pay', def: 'The maximum a buyer will give up for a unit — the height of the demand curve at that quantity. It encodes marginal benefit: the curve is not just a price-quantity relation but a ladder of valuations, tallest for the buyer who wants the good most.' },
          { term: 'Consumer surplus', def: 'The gap between willingness to pay and the price actually paid, summed over all units bought. On the diagram it is the area between the demand curve and the price line. A price fall raises it twice over: buyers pay less on units they already bought, and new buyers enter the market.' },
          { term: 'Marginal cost as the supply curve', def: 'Under competition each seller offers units up to the point where price equals marginal cost, so the supply curve is the ladder of marginal costs. Producer surplus — price minus marginal cost, summed — is the area between the price line and the supply curve.' },
          { term: 'Community surplus', def: 'Consumer surplus plus producer surplus. At competitive equilibrium this total is as large as it can be: every unit for which someone\'s willingness to pay exceeds the marginal cost of production gets produced, and no unit beyond that point is made.' },
          { term: 'Allocative efficiency', def: 'The condition that the last unit produced is worth exactly what it costs society to make: price equals marginal cost. Price measures the marginal buyer\'s benefit, marginal cost measures the resources absorbed; equality means the mix of goods cannot be improved by making more of one and less of another.' },
          { term: 'Deadweight loss', def: 'The community surplus destroyed when price departs from marginal cost — the triangle between demand and supply cut off by the interfering price or tax. It is not a transfer: nobody receives it. It is the value of trades that would have benefited both sides but never happen.' },
        ],
      },
      {
        kind: 'para',
        text: 'Elasticity decides who captures and who loses surplus when price moves. If demand is inelastic, buyers cannot escape a price rise, so they surrender a large slice of their surplus — the classic result that cigarette taxes land on smokers, not sellers. If demand is elastic, buyers defect and sellers absorb the blow. The same logic governs a tax: the side of the market that is relatively less elastic bears the larger share of the burden, whatever the law says about who writes the cheque. Statutory incidence and economic incidence are different animals, and elasticity is the beast that carries the burden between them.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'Surplus arithmetic on a linear market',
        steps: [
          'Demand: P = 100 − Q. Supply: P = 20 + Q. Equilibrium: 100 − Q = 20 + Q, so Q = 40 and P = 60.',
          'Consumer surplus is the triangle under demand above the price: base 40, height (100 − 60) = 40, area = ½ × 40 × 40 = 800.',
          'Producer surplus is the triangle above supply below the price: base 40, height (60 − 20) = 40, area = 800. Community surplus = 1,600.',
          'Now a 20-per-unit tax is imposed and, with symmetric elasticities here, splits evenly: buyers pay 70, sellers net 50, quantity falls to 30.',
          'New surpluses: consumers ½ × 30 × 30 = 450; producers ½ × 30 × 30 = 450; government revenue 20 × 30 = 600. Total = 1,500.',
          'Deadweight loss = 1,600 − 1,500 = 100 — the triangle on the 10 units (30 to 40) whose willingness to pay exceeded marginal cost but which the tax now prices out. Revenue is a transfer; the 100 is the destruction.',
        ],
      },
      {
        kind: 'para',
        text: 'The efficiency conditions deserve their own statement, because competitive markets deliver both. Productive efficiency: in the long run, entry and exit drive price to the minimum of average total cost, so output is produced at the lowest possible resource cost per unit — waste is competed away. Allocative efficiency: price equals marginal cost, so the value of the last unit to consumers just covers what society gives up to make it. Both conditions together say the market neither wastes resources nor misdirects them — the two trophies the perfect-competition lesson derives from the firm\'s decision, restated here from society\'s ledger.',
      },
      {
        kind: 'para',
        text: 'The claim has conditions, and the conditions are where the honest caveats live. Surplus is maximised only if prices carry all costs and benefits — an externality breaks the link between private and social marginal cost. It assumes no market power — a price setter holds price above marginal cost and parks a triangle for itself. It says nothing about the distribution of the surplus: a market can maximise community surplus while the consumer half goes hungry, which is why efficiency and equity are separate questions requiring separate instruments. The measuring rod is exact; what counts as a good reading is not the rod\'s job.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A buyer would pay 90 for a good priced at 60. What is her consumer surplus on that unit?',
            options: ['30', '90', '60', '150'],
            answer: 0,
            explain: 'Consumer surplus is willingness to pay minus price: 90 − 60 = 30. Summing such gaps over all buyers gives the triangular area on the diagram.',
          },
          {
            q: 'A tax is placed on a good with highly inelastic demand. Who bears most of the burden, and why?',
            options: [
              'Sellers, because supply curves are always more elastic',
              'Buyers, because they cannot easily reduce quantity when price rises',
              'The government, because it collects the revenue',
              'It is shared exactly equally regardless of elasticities',
            ],
            answer: 1,
            explain: 'With inelastic demand, quantity barely falls when the tax raises the price, so buyers keep buying and absorb most of the burden. Elasticity, not the legal assignment of the tax, determines economic incidence.',
          },
          {
            q: 'Deadweight loss from a tax is best described as:',
            options: [
              'revenue the government wastes on administration',
              'a transfer from consumers to producers',
              'the value of mutually beneficial trades prevented by the tax',
              'the difference between consumer and producer surplus',
            ],
            answer: 2,
            explain: 'The triangle counts units for which willingness to pay exceeded marginal cost but which are no longer traded. Government revenue is a transfer, not a loss; the DWL is the genuinely destroyed part.',
          },
          {
            q: 'Allocative efficiency requires which condition?',
            options: [
              'Price equals average total cost',
              'Price equals marginal cost',
              'Marginal revenue equals average revenue',
              'Consumer surplus equals producer surplus',
            ],
            answer: 1,
            explain: 'P = MC aligns the marginal buyer\'s valuation with the marginal resource cost of production — the social optimum. Price equal to average cost is the break-even condition, a different test.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Students routinely read the surplus triangles off the wrong curves: consumer surplus runs between demand and price, producer surplus between price and supply — never between the two curves directly. A second trap is treating tax revenue as part of the loss; it is a transfer with its own uses. The third is assuming the side that legally pays a tax bears it — incidence follows elasticity, not the statute, and the exam question is almost always built on that inversion.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: Supply, Demand and Elasticity — the curves and responsiveness measures used here as tools.',
          'Next: When Markets Fail — what happens to community surplus when prices stop telling the truth.',
          'Then: the tariff lesson, which runs this exact welfare accounting across borders.',
          'Revision cue: redraw the taxed-market diagram from memory and label all four areas plus the triangle.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Demand and supply curves are ladders of marginal benefit and marginal cost.',
          'Consumer plus producer surplus is maximised at competitive equilibrium.',
          'P = MC is allocative efficiency; minimum ATC is productive efficiency.',
          'Elasticity assigns the burden of any price intervention — the inelastic side pays.',
          'Deadweight loss is destroyed surplus, not transferred surplus; it is the cost of the interference.',
        ],
      },
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
  {
    id: 'cs-java-objects-classes-methods',
    title: 'Java Objects and Classes: Constructors, Methods and Inheritance',
    domain: 'Computing & AI',
    field: 'Programming',
    branch: 'Object-Oriented Java',
    tier: 'core',
    concepts: [
      'Objects bundle state and behaviour',
      'Instantiation with new and constructors',
      'Instance variables versus local variables',
      'Accessor and mutator conventions',
      'Overloading and signatures',
      'Subclass constructors and super references',
      'Encapsulation and private state',
      'Static versus instance members',
    ],
    words: 1472,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Java is an object-oriented language in a precise sense: every value lives either in one of eight primitive types or inside an object, and an object is a bundle of state (its instance variables) plus behaviour (its methods), described by a class. A class is the blueprint; objects are the buildings raised from it, each with its own copy of the state. Creating an object is called instantiation, performed with the new operator followed by a constructor — a special block of code whose job is to put the new object into a valid initial state. This lesson covers the lifecycle: declaring classes, writing and overloading constructors, exposing state safely through accessors and mutators, and extending classes with subclasses whose constructors reach back to their parents through super.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The object lifecycle is the single most examined strand of introductory Java: create an object, call its methods, trace what each line prints. Nearly every tracing question tests one of three mechanics — which constructor ran, what the instance variables hold after the call, and which version of an inherited method or constructor executed. Fluency here is fluency in the exam.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Class', def: 'The template describing the state (instance variables) and behaviour (methods) of a kind of object. The class itself is not the data; it is the description from which data-carrying instances are built.' },
          { term: 'Instantiation', def: 'The act of creating an object: the keyword new allocates memory on the heap, runs a constructor, and returns a reference to the finished object. A declaration like Student s; holds only a reference — no object exists until new runs.' },
          { term: 'Constructor', def: 'A block with the same name as the class and no return type, run automatically at instantiation. If a class defines no constructor, the compiler supplies a default (no-argument) one; once any constructor is defined, the default disappears — a classic trap when a subclass calls super() expecting a no-argument parent constructor.' },
          { term: 'Accessor (getter)', def: 'A method that returns the value of an instance variable, conventionally named getSomething. Accessors let a class keep its fields private while still exposing state in a controlled way — the public face of encapsulation.' },
          { term: 'Mutator (setter)', def: 'A method that changes an instance variable, conventionally named setSomething. Because the mutator is code, it can validate: a setAge that rejects negative values turns a dangerous public field into a guarded one.' },
          { term: 'Method signature and overloading', def: 'A signature is the method name plus the ordered list of parameter types. Two methods in one class may share a name if their signatures differ — overloading. The return type is not part of the signature, so two methods differing only in return type cannot coexist.' },
          { term: 'super', def: 'The reference to the parent-class part of an object. super(...) as the first statement of a constructor invokes a parent constructor; super.method() invokes the parent version of an overridden method. If omitted, the compiler inserts a no-argument super() call automatically.' },
        ],
      },
      {
        kind: 'para',
        text: 'Encapsulation is the design rule that organises all of this: keep instance variables private and reach them only through public accessors and mutators. The payoff is control — the class can change how it stores data without breaking every user, validate every mutation in one place, and maintain invariants such as "balance never goes below zero". Direct public fields offer none of this, which is why style guides and exams alike treat private fields with getters and setters as the default shape of a well-formed class, and treat a public field as a smell that must be justified.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'A BankAccount class, then a subclass',
        steps: [
          'class BankAccount { private double balance; public BankAccount(double opening) { balance = opening; } public double getBalance() { return balance; } public void deposit(double amt) { if (amt > 0) { balance += amt; } } }',
          'The field is private, so balance = 50 outside the class will not compile; the only legal mutation runs through deposit, which guards against nonsense amounts. Encapsulation is the guard, not the keyword.',
          'BankAccount a = new BankAccount(100); runs the one defined constructor. There is no no-argument constructor — new BankAccount() would be a compile error, because defining any constructor removed the default.',
          'class SavingsAccount extends BankAccount { private double rate; public SavingsAccount(double opening, double r) { super(opening); rate = r; } }',
          'The subclass constructor must initialise both parts. super(opening) as the first statement builds the parent part; without it the compiler inserts super() — which fails to compile here because BankAccount has no no-argument constructor. This exact chain is a favourite exam question.',
          'SavingsAccount s = new SavingsAccount(500, 0.02); s.getBalance() returns 500 through the inherited accessor — the subclass reuses the parent behaviour unless it overrides it.',
        ],
      },
      {
        kind: 'para',
        text: 'Static members belong to the class rather than to any instance: a static counter incremented in the constructor counts every object ever built, while an instance counter counts one. The same split applies to methods — a static utility can run without any object at all, but it cannot touch instance variables, because there is no particular object whose variables it would mean. Instance methods, by contrast, always run against an implicit object, which is why they can read and write that object\'s private state freely. Mixing the two — calling instance methods from a static context such as the main method without creating an object — produces one of the most common beginner compile errors.',
      },
      {
        kind: 'para',
        text: 'References are the other half of the mental model. A variable of object type holds a reference, not the object itself, so assigning it copies the address, not the state: two variables then point at one object, and a mutation through either is visible through both. Comparison reflects this — the equality operator tests whether two references point at the same object, while the equals method (properly overridden) tests whether two objects have the same content. Storing objects in arrays or collections stores references, which is why aliasing bugs and null-pointer exceptions dominate debugging in the first months of Java.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A class defines only the constructor Book(String t). Which statement is true?',
            options: [
              'new Book() compiles, using the default constructor',
              'new Book() does not compile, because defining a constructor removed the default',
              'new Book("M") and new Book() both compile',
              'The class cannot be instantiated at all',
            ],
            answer: 1,
            explain: 'The compiler supplies a no-argument default only when the class defines no constructors of its own. Defining Book(String t) removes it, so the no-argument call no longer exists.',
          },
          {
            q: 'Why make instance variables private and provide accessors and mutators instead of public fields?',
            options: [
              'It makes the program run faster',
              'It lets the class validate changes and later change its internal representation without breaking users',
              'Private fields use less memory',
              'Java forbids public fields',
            ],
            answer: 1,
            explain: 'Encapsulation buys control: validation in one place and freedom to redesign internals. The other options are simply false.',
          },
          {
            q: 'class B extends A { public B(int x) { /* body */ } } — given that A defines only the constructor A(int y), the situation is:',
            options: [
              'fine: the compiler inserts super(), which matches',
              'a compile error: the inserted super() finds no no-argument parent constructor',
              'fine: constructors are not inherited but also not required',
              'a runtime error only when B is instantiated',
            ],
            answer: 1,
            explain: 'With no explicit super(...) call, the compiler inserts super() as the first statement — and A has no no-argument constructor to match, so compilation fails. The fix is calling super(y) explicitly.',
          },
          {
            q: 'Which pair of method declarations is legal overloading in one class?',
            options: [
              'int f(int x) and double f(int x)',
              'int f(int x) and int f(double x)',
              'int f(int x) and the same int f(int x) written twice',
              'static int f(int x) and int f(int x)',
            ],
            answer: 1,
            explain: 'Overloading requires different parameter lists. Options differing only in return type, or only in the static keyword, share a signature and cannot coexist.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Four recurring errors: forgetting that declaring a constructor kills the default one; forgetting super(...) must be the first statement of a subclass constructor; confusing the equality operator (same object?) with equals (same content?); and mutating an object through a second reference while believing the first is unchanged. In tracing questions, draw the objects and their references — the arrow diagram answers most of the question before any code is read twice.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Next: Traversing Java Arrays, 2D Arrays and ArrayLists — storing and walking collections of these objects.',
          'Then: Equivalent Boolean Expressions in Java — the condition logic used inside mutators and validation.',
          'Reference reading: Eck, Introduction to Programming Using Java, Chapter 5 (Objects and Classes), free at math.hws.edu/javanotes.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Classes describe; objects instantiated with new hold the state.',
          'Constructors put objects into valid initial states; defining any removes the default.',
          'Private fields plus accessors and mutators implement encapsulation with validation.',
          'Overloading varies the parameter list; the return type is not part of the signature.',
          'Subclass constructors build the parent part first, via super(...), explicitly or inserted.',
        ],
      },
    ],
  },
  {
    id: 'cs-java-arrays-and-arraylists',
    title: 'Traversing Java Arrays, 2D Arrays and ArrayLists',
    domain: 'Computing & AI',
    field: 'Programming',
    branch: 'Data Handling in Java',
    tier: 'core',
    concepts: [
      'Arrays: fixed length, indexed from zero',
      'Index-based for loops versus for-each',
      'ArrayList: growable and reference-based',
      'Wrapper classes and autoboxing',
      'Insertion and removal shift elements',
      '2D arrays as arrays of arrays',
      'Row-major traversal and nested loops',
      'Off-by-one and bounds errors',
    ],
    words: 1507,
    readMins: 8,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Programs rarely process one value at a time, and Java offers two collections for the common cases. The array is the primitive: a fixed-length block of elements of one type, accessed by index from zero, whose length never changes after creation. The ArrayList is the library class: a growable, shrinkable list of object references with methods to add, remove and fetch by position, built on an array behind the scenes. Choosing between them — and traversing each correctly with index loops, for-each loops and nested loops for the two-dimensional case — is the working skill this lesson builds, together with the small catalogue of algorithms every course assumes: summing, counting, finding the maximum, and reversing in place.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Traversal questions are the most reliable points on the paper: given this loop, what does it print; given this task, which loop is legal; given this ArrayList modification, why does the loop skip an element. The rules are small, the traps are predictable — bounds, mutation during iteration, row-column confusion — and every one of them is demonstrable in a five-line fragment.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Array creation and length', def: 'int[] a = new int[10]; makes ten zeros; an initialiser list int[] b = {3, 1, 4}; makes three. The field a.length gives the fixed size — no parentheses, unlike the String method. Valid indices run from 0 to length minus 1, and touching a.length throws ArrayIndexOutOfBoundsException.' },
          { term: 'Index-based for loop', def: 'The general traversal: for (int i = 0; i < a.length; i++) { ... a[i] ... }. It is the only choice that can change positions, compare neighbours, or stop early. The classic bounds mistake is writing i <= a.length and running off the end.' },
          { term: 'For-each loop', def: 'for (int x : a) { ... } visits every element read-only. It cannot assign new values to the array slots — the loop variable x is a copy — and it hides the index, which is precisely why it is safe from bounds errors but useless for repositioning. For object arrays, the copy is of the reference, so calling mutating methods on x does affect the object.' },
          { term: 'ArrayList basics', def: 'ArrayList<String> list = new ArrayList<String>(); holds only object types, so primitive int becomes Integer via autoboxing. Core methods: add(e), get(i), set(i, e), remove(i), size(). Note the mismatch with arrays: the method is size(), not length.' },
          { term: 'Shifting on insert and remove', def: 'add(i, e) inserts at position i and slides later elements right; remove(i) slides them left into the gap. This is why removing while iterating forward skips the element after the removed one — the list renumbers as you walk — and why removal in a loop demands either walking backwards or adjusting the index after each removal.' },
          { term: '2D array', def: 'int[][] grid = new int[3][4]; is really an array of three array references, each of length four. Traversal needs nested loops: the outer loop indexes rows (grid.length), the inner indexes columns (grid[r].length). Rows can even have different lengths — jagged arrays — so always take the inner length from the row itself.' },
        ],
      },
      {
        kind: 'para',
        text: 'The standard one-pass algorithms are worth memorising as patterns, not as code to recall. Sum: initialise a total before the loop, add inside, use after. Count: same shape with a conditional increment. Maximum: initialise best to the first element, not to zero — the zero initialisation silently breaks on arrays that are all negative. Reverse in place: swap symmetric pairs from both ends, looping only to the middle; a second array is acceptable but the in-place swap is the version examiners ask for. Each pattern runs equally over arrays and ArrayLists with only the access syntax changed — a[i] versus list.get(i).',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'One array, one list, one grid — three traversals',
        steps: [
          'int[] a = {4, 1, 7, 1}; — sum with for (int i = 0; i < a.length; i++) { total += a[i]; } gives 13. The <= variant throws an exception after the last element.',
          'Maximum correctly: int best = a[0]; then for each x in a, if (x > best) best = x; gives 7. Starting best at 0 would give 7 here but fails on {-5, -2}, where the answer must be -2.',
          'ArrayList<Integer> list = new ArrayList<Integer>(); list.add(4); list.add(1); list.add(7); — remove all 1s by walking backwards: for (int i = list.size() - 1; i >= 0; i--) { if (list.get(i) == 1) { list.remove(i); } }. Walking forward would skip the second 1: after the first removal, the list renumbers and the loop index jumps past it.',
          'Autoboxing detail: list.add(4) converts the primitive 4 into an Integer object automatically; list.get(0) unboxes it back. Comparing with equality on Integers beyond 127 is reference comparison — use equals or unbox first, another classic trace trap.',
          'int[][] g = {{1, 2, 3}, {4, 5}, {6, 7, 8, 9}}; — jagged. Sum all elements with for (int r = 0; r < g.length; r++) { for (int c = 0; c < g[r].length; c++) { total += g[r][c]; } } = 45. Note g[r].length, not a fixed 3: the second row has two columns.',
          'Row-major order means row by row, left to right — the order the nested loop visits elements, and the order questions assume when they ask "what is printed".',
        ],
      },
      {
        kind: 'para',
        text: 'Choosing the structure is itself an examined judgement. Arrays win when the size is fixed and index arithmetic matters — matrices, lookup tables, the board of a game. ArrayLists win when the size changes or the algorithm is dominated by adding and removing, because shifting on remove is O(n) but the code is simple and correct; the same shift written by hand on an array is a bug farm. Neither is a map: searching an unsorted structure is linear either way, which is exactly the observation the hash-table lesson builds on — and the reason that later lesson exists.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'int[] a = {2, 4, 6}; Which loop safely prints every element?',
            options: [
              'for (int i = 0; i <= a.length; i++) { print(a[i]); }',
              'for (int i = 0; i < a.length; i++) { print(a[i]); }',
              'for (int x : a) { x = 0; } to print zeros',
              'for (int i = 1; i < a.length; i++) { print(a[i]); }',
            ],
            answer: 1,
            explain: 'Strict less-than against a.length visits indices 0..2 exactly. The <= version throws on i = 3; the for-each assigns a copy and prints nothing; the version starting at 1 silently drops the first element.',
          },
          {
            q: 'list contains [3, 1, 1, 5]. for (int i = 0; i < list.size(); i++) { if (list.get(i) == 1) { list.remove(i); } } — what is the result?',
            options: [
              '[3, 5] — both 1s removed',
              '[3, 1, 5] — the second 1 is skipped',
              'an exception is thrown',
              '[3, 1, 1, 5] — nothing removed',
            ],
            answer: 1,
            explain: 'After removing the 1 at index 1, elements shift left and the loop increments to index 2 — which now holds 5. The skipped 1 is the classic mutation-during-iteration bug; walk backwards to fix it.',
          },
          {
            q: 'A 2D array g has 3 rows and 4 columns. Which expression is the number of elements in row 1?',
            options: ['g.length', 'g[1].length', 'g.length[1]', 'g[0].length only if the grid is square'],
            answer: 1,
            explain: 'g is an array of row arrays: g.length counts rows, g[1].length counts the columns of row 1. Taking inner lengths from the row is the only version that also works for jagged arrays.',
          },
          {
            q: 'Why does a for-each loop fail to zero an int array with for (int x : a) { x = 0; }?',
            options: [
              'for-each loops cannot be used on int arrays',
              'x is a copy of the element; assigning to it cannot change the array',
              'The array must be sorted first',
              'It works, but only for arrays of length 1',
            ],
            answer: 1,
            explain: 'The loop variable receives a copy of each value; writing to the copy is invisible outside. To modify slots, use an index loop with a[i] = 0 on the left of an assignment.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The big five: <= in array bounds; removing from an ArrayList while looping forward; initialising a maximum at zero instead of the first element; hard-coding an inner width instead of using the row\'s own length; and forgetting size() versus length versus length() — three spellings for three kinds of container, and questions probe exactly this. When a trace question shows a loop plus a mutation, simulate the indices on paper: the bug is always visible in the second iteration.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: Java Objects and Classes — what the ArrayList actually stores: references.',
          'Next: Equivalent Boolean Expressions in Java — the conditions guarding every counting loop.',
          'Then: Hash Tables and Collision Resolution — what it takes to find an element without scanning.',
          'Reference reading: Eck, Introduction to Programming Using Java, Chapter 7 (Arrays, ArrayLists and Records).',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Arrays are fixed-length and primitive-fast; ArrayLists grow and shift automatically.',
          'Index loops for mutation and comparison; for-each for read-only visits.',
          'Removal during forward iteration skips elements — walk backwards instead.',
          'A 2D array is an array of arrays; take inner lengths from the row.',
          'length, length() and size() belong to arrays, Strings and ArrayLists respectively.',
        ],
      },
    ],
  },
  {
    id: 'cs-java-boolean-logic-expressions',
    title: 'Equivalent Boolean Expressions in Java',
    domain: 'Computing & AI',
    field: 'Programming',
    branch: 'Boolean Logic',
    tier: 'core',
    concepts: [
      'The boolean operators: not, and, or',
      'Truth tables as the ground truth',
      'De Morgan\u2019s laws for negating compounds',
      'Distributing and over or',
      'Double negation and simplification',
      'Short-circuit evaluation',
      'Testing equivalence by exhaustive cases',
    ],
    words: 1272,
    readMins: 6,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Two conditions written differently can be the same condition, and introductory Java exams love to test exactly that recognition: which expression is equivalent to this one, and which rewrite of it is safe. The machinery is small — three operators, not written !, and written &&, or written || — plus a set of algebraic laws inherited from logic itself. The ground truth is the truth table: enumerate every combination of the variables and check that the two expressions agree on all of them. Equivalence in Java is case-by-case identity, not plausibility, and the fastest students are the ones who verify with a table rather than by feel.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Equivalence questions are pure pattern recognition with a verifiable answer, which makes them the cheapest reliable marks in the exam. The same laws govern the conditions inside every loop and if from the other lessons — negating a loop guard correctly is De Morgan in action — and getting them wrong produces programs that run happily on the wrong cases.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Truth table', def: 'The complete list of results an expression produces for every combination of inputs. Two expressions are equivalent exactly when their columns match on every row. With n variables there are 2 to the power n rows — three variables means eight cases, always checkable in an exam if not by hand then by discipline.' },
          { term: 'De Morgan for and', def: 'Not (a && b) is equivalent to !a || !b. Refusing both conditions — not hungry and not tired — is the same as rejecting each separately. Negating an and yields an or of the negated parts; the negation distributes and flips the connective.' },
          { term: 'De Morgan for or', def: 'Not (a || b) is equivalent to !a && !b. Rejecting a or b means accepting neither: the negation of an or is an and of the negations. These two laws answer nearly every "which is equivalent" question that contains a negated compound.' },
          { term: 'Distribution', def: 'a && (b || c) expands to (a && b) || (a && c), and a || (b && c) expands to (a || b) && (a || c). The second is the one that surprises: and-or distributes both ways in logic, unlike arithmetic multiplication over addition only.' },
          { term: 'Double negation', def: 'Not not a is just a. Cancelling pairs of negations is the first simplification to look for, and skipping it is a common cause of choosing a plausible but wrong option.' },
          { term: 'Short-circuit evaluation', def: 'Java evaluates && and || lazily: if the left operand of && is false the right side is never run, and if the left operand of || is true the right side is skipped. Guard patterns such as i < a.length && a[i] > 0 depend on this order — reversed, the guard itself throws.' },
        ],
      },
      {
        kind: 'para',
        text: 'A compact procedure settles any equivalence claim. Build the truth table for both expressions over the same variables. Compare row by row; one mismatch refutes equivalence, full agreement proves it. For compound conditions, simplify first with the laws — cancel double negations, push negations inward with De Morgan, then distribute if it makes the shapes comparable. In multiple-choice settings the method doubles as a checker: rather than trusting intuition about which option looks right, test the suspicious option on the two or three rows most likely to distinguish the candidates — the rows where the variables disagree with each other.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'From negated compound to clean equivalent',
        steps: [
          'Claim to check: !(x > 0 && y > 0) is equivalent to x <= 0 || y <= 0.',
          'Apply De Morgan for and: the negation of (a && b) is !a || !b, so the expression becomes !(x > 0) || !(y > 0).',
          'Simplify each negated comparison: !(x > 0) is x <= 0, and !(y > 0) is y <= 0 — watch that the negation of strictly greater is less-than-OR-equal, not just less-than.',
          'Result: x <= 0 || y <= 0. Spot-check one boundary row: x = 0, y = 5. Original: not (false and true) is true. Rewrite: true or false is true. Match.',
          'A second claim: !(a || !b) equivalent to !a && b. De Morgan for or gives !a && !(!b), and the double negation cancels: !a && b. Match on all rows.',
          'Trap row for the road: !(x != 5) is x == 5 — negation of not-equals is equals, with no little inequality left over.',
        ],
      },
      {
        kind: 'para',
        text: 'Short-circuit evaluation is the behavioural half of the topic: equivalence of results does not always mean equivalence of side effects. The expressions x != 0 && 10 / x > 1 and 10 / x > 1 && x != 0 agree wherever both are defined, but the second divides by zero when x is 0 and the first never does — the guard is consumed before the risky operand is reached. The same asymmetry applies to calls with side effects placed after short-circuit points. An exam question can therefore be subtle in exactly one way: the two expressions are logically equivalent, yet only one is safe to execute, and the reasoning is about evaluation order, not truth.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which expression is equivalent to !(a && !b)?',
            options: ['!a && b', '!a || b', 'a || !b', 'a && b'],
            answer: 1,
            explain: 'De Morgan for and: !(a && !b) = !a || !(!b), and the double negation cancels to !a || b. Option 1 forgets to flip the connective.',
          },
          {
            q: '!(x > 3 || y == 2) is equivalent to:',
            options: [
              'x <= 3 && y != 2',
              'x < 3 && y != 2',
              'x <= 3 || y != 2',
              'x > 3 && y == 2',
            ],
            answer: 0,
            explain: 'De Morgan for or negates each part and joins with and; the negation of x > 3 is x <= 3 (boundary included) and of y == 2 is y != 2.',
          },
          {
            q: 'i < a.length && a[i] > 0 is preferred over a[i] > 0 && i < a.length because:',
            options: [
              'the two are not logically equivalent',
              'short-circuit evaluation checks the bound before the indexed access',
              'the second form does not compile',
              'and evaluates its right side first',
            ],
            answer: 1,
            explain: 'Both are equivalent as truth functions, but only the first order guarantees the array access never happens with an out-of-range index: the failed guard short-circuits before the risky operand.',
          },
          {
            q: 'How many rows does the truth table of a three-variable expression contain?',
            options: ['3', '6', '8', '9'],
            answer: 2,
            explain: 'Two possibilities per variable, three variables: two to the third power equals 8 rows. Exhaustive checking over all 8 is the definition of equivalence.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The classic errors cluster at boundaries and connectives. Negating x > 3 as x < 3 drops the equality case — it must be x <= 3. Negating an and as another and, or an or as another or, ignores the connective flip that De Morgan demands. And trusting "looks similar" over the table: two expressions can agree on five rows out of six and still be different conditions, and the exam chooses the sixth row on purpose.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: Java Objects and Classes — the conditions used inside mutators and constructors.',
          'Next: Traversing Java Arrays, 2D Arrays and ArrayLists — guards and loop conditions in context.',
          'Revision cue: rewrite every negated compound you meet this week using De Morgan, then verify one boundary row by hand.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Equivalence is truth-table identity, checked case by case, not judged by appearance.',
          'De Morgan: negating a compound flips the connective and negates each part.',
          'Negating a strict comparison includes the boundary: > becomes <=.',
          'Distribution works in both directions over the two connectives.',
          'Short-circuit order matters: guards go first, side effects go last.',
        ],
      },
    ],
  },
]

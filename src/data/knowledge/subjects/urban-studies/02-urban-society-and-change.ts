/**
 * Knowledge Universe — Urban Studies — Chapter 02: Urban Society & Change
 * 3 lessons · ~4,177 words
 * field: Urban Sociology
 * legacy sources: social-sciences.ts, x68-library-org-convergence.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Urban Sociology]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 soc-urbanization-cities — Why Cities Exist: Agglomeration and Urban Life
 *   02.2 urb-informal-settlements-self-built-cities — The Self-Built City: Informal Settlements and the Majority Urban World
 *   02.3 urb-housing-segregation — Housing, Segregation and Gentrification
 */
import type { KnowledgeTopic } from '../../types'

export const urbanStudiesCh02: KnowledgeTopic[] = [
  {
    id: 'soc-urbanization-cities',
    title: 'Why Cities Exist: Agglomeration and Urban Life',
    domain: 'Social Sciences',
    field: 'Urban Sociology',
    branch: 'Urban Studies',
    tier: 'intermediate',
    concepts: [
      'Agglomeration economies: sharing, matching, learning',
      'Increasing returns and the urban trade-off',
      'The bid-rent gradient',
      'Zipf’s law and the urban hierarchy',
      'Superlinear scaling of city life',
      'Urbanism as a way of life',
    ],
    words: 1351,
    readMins: 7,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'In 2008, humanity crossed a quiet threshold: for the first time, more than half of us lived in cities. The pull is ancient and economic at once. Cities are expensive, crowded and loud, yet they concentrate the two things nothing else produces on the same scale — opportunity and other people. Understanding why cities exist means understanding agglomeration: the strange, robust fact that clustering people and firms in one place multiplies what they can do.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Housing crises, transit investments, regional decline and the geography of innovation are all agglomeration problems in disguise. If density itself generates productivity, zoning that forbids it destroys wealth invisibly; if cities scale superlinearly, the century of urbanization ahead will be faster, richer and more eventful than countryside arithmetic suggests.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Alfred Marshall, writing in 1890, heard “the mysteries of the trade” hanging “in the air” of industrial districts. Modern economics decomposes his insight into three mechanisms. Sharing: firms pool specialised suppliers, infrastructure and a deep labour market. Matching: workers and jobs, founders and funders find each other faster where candidates are dense. Learning: ideas leak, imitate and recombine across corridors and cafés. Duranton and Puga’s formulation — sharing, matching, learning — remains the cleanest summary of why co-location pays.',
      },
      {
        kind: 'para',
        text: 'Agglomeration exhibits increasing returns: doubling a cluster more than doubles certain benefits, which is why economic geography is lumpy rather than smooth. Against this stands the price of proximity — rent, congestion, crime, disease. Cities sit where the two curves balance, which explains both skylines and sprawl: Manhattan stacks floors because land at the centre is worth stacking on, while cheap land at the edge pulls development outward. A city’s shape is the visible residue of this tug-of-war.',
      },
      {
        kind: 'para',
        text: 'The Alonso–Muth–Mills model formalises the gradient: land value falls predictably with distance from the centre, because each extra metre of travel costs more while each saved metre is worth more to whoever values centrality most. Retailers outbid residents for the core; manufacturers, needing space, take the ring beyond; agriculture holds the margin where land is cheapest. Concentric rings of land use — however disguised by history and geography — are the model’s fingerprint.',
      },
      {
        kind: 'para',
        text: 'Line up a country’s cities by population and a startling regularity appears: the second city is about half the first, the tenth about a tenth. Zipf’s law, the rank-size rule, holds roughly for many countries and centuries, and its explanation is still debated. The leading candidate, Gibrat’s law — cities grow in proportion to their size, so random shocks compound — generates Zipf distributions naturally. The deviations are informative too: a nation whose second city is far smaller than the rule predicts usually has a primate capital.',
      },
      {
        kind: 'para',
        text: 'A team led by Luís Bettencourt and Geoffrey West found that urban quantities scale as power laws of population: socioeconomic outputs — wages, patents, GDP — scale with an exponent near 1.15, so a city twice the size delivers roughly ten to fifteen per cent more per resident, while infrastructure scales sublinearly, needing less road and wire per head. The same exponent, though, amplifies crime and disease. Cities are social reactors: bigger runs hotter, in output and in trouble alike.',
      },
      {
        kind: 'para',
        text: 'Louis Wirth’s 1938 essay “Urbanism as a Way of Life” listed the sociological ingredients: size, density, heterogeneity. Georg Simmel had already described the psychic result in 1903 — the metropolis hammers the nerves until the dweller adopts a blasé attitude, a protective flatness toward strangers, exchanged for unprecedented freedom from village scrutiny. Urban ties become segmental and role-based; the neighbour is a stranger and the stranger a potential ally. Wirth’s determinism has been qualified — urban villages persist — but the tension he named is real.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Zipf’s rank-size rule',
        latex: '\\text{rank} \\times \\text{population} \\approx \\text{constant}',
        meaning: 'The tenth-largest city is roughly one-tenth the size of the largest; the product of rank and size is stable across many countries and eras.',
      },
      {
        kind: 'formula',
        name: 'Superlinear urban scaling',
        latex: 'Y = Y_0 N^{\\beta}, \\qquad \\beta \\approx 1.15',
        meaning: 'Socioeconomic outputs Y grow faster than population N; each doubling of city size raises per-capita output by roughly ten to fifteen per cent, with crime and disease scaling similarly.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: the largest city of a country holds 8 million people; its fourth-largest holds 1.1 million. Is the urban hierarchy close to Zipf’s prediction?',
        'Recall the governing idea: the rank-size rule predicts a city’s population as the largest city’s population divided by its rank.',
        'Apply: with the top city at 8 million, the expected size of the fourth city is 8,000,000 ÷ 4 = 2 million; the observed 1.1 million is barely half that.',
        'State the result: the hierarchy is steeper than Zipf predicts — a signature of primate-city dominance, where the capital monopolises political and economic functions and secondary cities are undersized.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Housing and zoning policy: if density creates agglomeration value, height limits and minimum lot sizes tax productivity as surely as they preserve character.',
        'Regional development: subsidies that scatter firms across a province fight the clustering economics; cluster-based policy works with the gradient, not against it.',
        'Transport investment: agglomeration benefits accrue to accessibility, which is why transit lines between co-located firms and workers can outperform their ridership models.',
        'Public health planning: density amplifies both innovation and epidemic spread — from nineteenth-century cholera maps to modern outbreak modelling.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Correlation is not causation: cities may select ambitious people rather than transform them, and wage premiums partly reflect sorting. Zipf’s law is an approximation, sensitive to how city boundaries are drawn, and primate-city deviations are common in politically centralised nations. Superlinear scaling is contested in its details and is an average across thousands of cities, not a law any one city obeys. And Wirth’s picture of urban alienation has aged: Herbert Gans’s urban villages showed strong local ties thriving inside the metropolis.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'agglomeration economies', def: 'Productivity gains that arise when firms and people locate near one another.' },
        { term: 'knowledge spillover', def: 'The informal spread of ideas and know-how across firms and workers in a cluster.' },
        { term: 'bid-rent curve', def: 'The decline in land value with distance from a central point of access.' },
        { term: 'rank-size rule', def: 'Zipf’s observation that a city’s population is inversely proportional to its rank.' },
        { term: 'superlinear scaling', def: 'The tendency of urban outputs to grow faster than population, with exponent above one.' },
        { term: 'primate city', def: 'A country’s dominant city, far larger than the rank-size rule predicts.' },
        { term: 'urbanism', def: 'In Wirth’s sense, the distinctive way of life produced by size, density and heterogeneity.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Marshall’s remark that “the mysteries of the trade” are “in the air” refers to which agglomeration mechanism?',
          options: ['Sharing of suppliers and infrastructure', 'Improved matching in thick labour markets', 'Learning through knowledge spillovers', 'Cheaper land at the urban core'],
          answer: 2,
          explain: 'Ideas drifting between nearby firms and workers — the learning mechanism — is what Marshall’s phrase captured.',
        },
        {
          q: 'According to the bid-rent model, land use arranges itself so that…',
          options: ['agriculture occupies the centre', 'the activities valuing accessibility most occupy the central land they outbid others for', 'residents always outbid retailers', 'land values are uniform within a city'],
          answer: 1,
          explain: 'Land goes to the highest bidder, and whoever gains most from centrality — typically commerce — pays most at the core.',
        },
        {
          q: 'The largest city of a country has 8 million residents. Zipf’s rule predicts the fifth-largest city is about…',
          options: ['4 million', '2 million', '1.6 million', '800,000'],
          answer: 2,
          explain: '8,000,000 ÷ 5 = 1.6 million — the rank-size rule divides the top city’s population by its rank.',
        },
        {
          q: 'Superlinear scaling means that when a city doubles in population, per-capita outputs such as patents and wages…',
          options: ['stay constant', 'fall by about fifteen per cent', 'rise by roughly ten to fifteen per cent', 'double exactly'],
          answer: 2,
          explain: 'With an exponent near 1.15, doubling population multiplies per-capita output by 2 raised to the power 0.15 — an increase of roughly ten to fifteen per cent.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: comfort with graphs and percentages. Pair with the collective action topic in this subject — congestion and NIMBY disputes are commons problems — and with Durkheim, whose division of labour explains why city dwellers need strangers. Then read Jane Jacobs’s The Death and Life of Great American Cities and Edward Glaeser’s Triumph of the City; Krugman’s new economic geography is the mathematical frontier.',
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
  {
    id: 'urb-housing-segregation',
    title: 'Housing, Segregation and Gentrification',
    domain: 'Social Sciences',
    field: 'Urban Sociology',
    branch: 'Urban Change',
    tier: 'intermediate',
    concepts: [
      'Measuring segregation: the dissimilarity index',
      'Redlining: segregation by decree',
      'Schelling: how mild preferences tip',
      'Filtering: housing trickles, slowly',
      'Gentrification and the rent gap',
      'Neighborhood effects',
    ],
    words: 1133,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      { kind: 'para', text: 'Cities concentrate people and then sort them. The sorting happens one lease, one loan and one moving truck at a time. Where a child grows up — which school catchment, which air, which streets — predicts earnings, health and lifespan with uncomfortable accuracy. Housing is the machinery of that sorting: mortgages, zoning, rents and moving decisions, each small, compounding into metropolitan maps of separation. This lesson measures segregation, traces how policy built it, shows why even mild preferences can produce sharp divisions, and follows neighborhoods through disinvestment, reinvestment and the debates over gentrification.' },
      { kind: 'callout', title: 'Why this matters', tone: 'insight', text: 'The why-cities-exist lesson covered agglomeration: density multiplies opportunity. Segregation decides who gets to live near the opportunity. If neighborhood quality is durable and access to it is rigged by history, then housing policy is quietly education policy, health policy and wealth policy at once.' },
      { kind: 'heading', text: 'Core Concepts' },
      { kind: 'para', text: 'Douglas Massey and Nancy Denton distilled segregation into five measurable dimensions: evenness, exposure, clustering, centralization and concentration. The workhorse is the dissimilarity index — the share of one group that would have to move for two groups to be spread evenly, running from 0 to 1. Black-white dissimilarity in large American metros stood above 0.80 mid-century and has eased to roughly 0.50, still high by world standards, with pockets of "hypersegregation" persisting in older Rust Belt cities.' },
      { kind: 'para', text: 'The sorting was manufactured. In the 1930s, the federal Home Owners\' Loan Corporation graded city neighborhoods for mortgage risk from A (green) to D (red), and its forms factored in "inharmonious racial groups". Redlined districts were denied the thirty-year mortgages that financed white suburbanization from Levittown outward, while Black families bought on exploitative contract terms. Richard Rothstein\'s The Color of Law argues this made segregation de jure; the homeownership wealth gap it seeded compounds through inheritance to this day.' },
      { kind: 'para', text: 'Thomas Schelling showed in 1971, with coins on a chessboard, that no malice is required. If each household merely prefers not to be the last of its group on the block — a threshold of a third or so — random vacancies cascade until neighborhoods are almost perfectly sorted. Real cities add steering, discrimination in showings and school-tie decisions to the mild preferences, so observed separation overshoots what anyone says they want.' },
      { kind: 'para', text: 'Affordability arguments run through filtering: new housing serves the rich, ages down-market, and eventually supplies cheap rooms — the trickle-down claim. The evidence is mixed: new market-rate construction does relieve regional rents measurably, but slowly and unevenly, while tax-credit and public programs work block by block. St. Louis\'s Pruitt-Igoe — dynamited in 1972, barely two decades after opening — stands for the lesson that building homes is not the same as maintaining neighborhoods.' },
      { kind: 'para', text: 'Ruth Glass coined gentrification in 1964 watching London\'s Islington: the "gentry" reclaiming working-class streets. Neil Smith explained the mechanics as a rent gap — the spread between a neighborhood\'s current ground rent and its potential once capital returns. The sequence runs pioneers, then developers and chains, then policy attention. On displacement the evidence is subtler than the placards: Lance Freeman found that moves happen no more often in gentrifying areas than in stable poor ones — turnover absorbs incomers — but city-wide rent rises still exclude those who would have moved in.' },
      { kind: 'para', text: 'Does place itself act? Raj Chetty\'s Opportunity Atlas linked millions of tax records to childhood zip codes: moving young children to higher-mobility neighborhoods changed their adult earnings, echoing the Moving to Opportunity experiment\'s gains for early movers. Mechanisms remain debated — networks, schools, exposure to violence — but the geography of opportunity is now measurable block by block.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: compute the dissimilarity index for a two-neighborhood city where neighborhood 1 holds 80 white and 20 Black residents, and neighborhood 2 holds 40 white and 80 Black.',
        'Recall: D equals one half times the summed absolute differences between each neighborhood\'s share of one group and its share of the other.',
        'Apply: totals are 120 white and 100 Black. Neighborhood 1 contributes |80/120 − 20/100| = 0.467; neighborhood 2 contributes |40/120 − 80/100| = 0.467. So D = 0.5 × (0.467 + 0.467) ≈ 0.47.',
        'State the result: about 47 per cent of either group would need to relocate for evenness — moderate segregation on the 0-1 scale, and a single number that still hides which dimension (evenness, clustering, exposure) drives it.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Fair-lending enforcement: audit testing and redlining settlements target the credit machinery of sorting.',
        'Inclusionary zoning and community land trusts: capturing reinvestment value rather than displacing it.',
        'Housing-mobility programs: voucher design informed by Moving to Opportunity\'s age-of-move findings.',
        'Open-data dashboards: cities publish dissimilarity and opportunity maps for planning and public scrutiny.',
        'Appraisal and insurance reform: guarding the quiet gatekeepers of who can buy where.',
      ] },
      { kind: 'callout', title: 'Common Pitfalls', tone: 'warn', text: 'The dissimilarity index is two-group and symmetric — it says where, not why. Preferences alone cannot explain observed separation, but neither do they absolve structure: audit studies keep finding discrimination. Gentrification is a process, not an event, and "displacement" spans eviction, exclusion and priced-out would-be residents. And redlining\'s causal weight is genuinely debated by historians — some HOLC maps followed private practice rather than leading it.' },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'dissimilarity index', def: 'Share of a group that would need to move for even distribution across an area.' },
        { term: 'redlining', def: 'Denying credit to neighborhoods graded risky, historically on racial grounds.' },
        { term: 'tipping', def: 'Schelling\'s cascade by which mild location preferences produce near-total sorting.' },
        { term: 'filtering', def: 'The aging of new housing into lower-price tiers over time.' },
        { term: 'rent gap', def: 'Neil Smith\'s spread between actual and potential ground rent, motivating reinvestment.' },
        { term: 'gentrification', def: 'Class-led reinvestment and demographic turnover in disinvested neighborhoods.' },
        { term: 'neighborhood effects', def: 'Influence of residential context on life outcomes, beyond family background.' },
      ] },
      { kind: 'quiz', items: [
        {
          q: 'A dissimilarity index of 0.60 means…',
          options: ['60 per cent of residents are poor', '60 per cent of one group would need to move for even distribution', 'segregation is illegal', '60 per cent of housing is rented'],
          answer: 1,
          explain: 'The index reads directly as the relocation share required for evenness — its whole interpretation in one number.',
        },
        {
          q: 'Schelling\'s segregation model shows that…',
          options: ['only bigotry produces segregation', 'zoning causes all sorting', 'mild same-group preferences can cascade into total segregation', 'cities cannot desegregate'],
          answer: 2,
          explain: 'Even a weak preference not to be isolated among strangers tips block after block — no villain required, though discrimination amplifies the cascade.',
        },
        {
          q: 'Neil Smith\'s rent gap is…',
          options: ['the spread between a neighborhood\'s current and potential ground rent', 'the gap between rich and poor tenants', 'a landlord\'s profit margin', 'rent control\'s budget shortfall'],
          answer: 0,
          explain: 'Reinvestment chases the gap between what disinvested land earns and what it could earn — the engine of gentrification.',
        },
        {
          q: 'The Moving to Opportunity experiment found its largest earnings gains for…',
          options: ['adults who moved', 'landlords', 'all movers equally', 'children who moved young'],
          answer: 3,
          explain: 'Young children absorbed the new context; adult movers gained mental health more than income — timing carried the effect.',
        },
      ] },
    ],
  },
]

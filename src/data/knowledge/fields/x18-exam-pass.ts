import type { KnowledgeTopic } from '../types'

/** Expansion pass X18 (2026-10-21): the world-history turnings + development
 *  agenda lessons — the remainder of the CUET gap cluster left honestly
 *  unmapped by the parallel X17 pass (which covered thinkers/buildings,
 *  travellers/Vijayanagara, agrarian-and-towns, world order, India since
 *  independence, and school computing). This pass owns exactly the two
 *  clusters X17 did not touch, after a full dedup audit:
 *  1. hist-nomads-indigenous-modernisation — NCERT Themes in World History
 *     Themes 3/10/11 (Nomadic Empires, Displacing Indigenous Peoples, Paths
 *     to Modernisation). Zero overlap: hum-silk-road-exchange references the
 *     Pax Mongolica only as trade context; the conquest system, the four
 *     ulus and Timur are new territory here.
 *  2. econ-india-development-challenges — NCERT Indian Economic Development
 *     (human capital, rural development, employment, infrastructure,
 *     sustainability) plus the comparative chapter (India, China, Pakistan,
 *     Sri Lanka). Zero overlap: the macro lesson owns national-income
 *     measurement and the 1951→1991 planning-and-reforms narrative; this
 *     lesson owns the development agenda and the scorecards.
 *  Sources: NCERT textbooks (ncert.nic.in, open access) as above. */

export const x18ExamPassTopics: KnowledgeTopic[] = [
  {
    id: 'hist-nomads-indigenous-modernisation',
    title: 'Nomadic Empires, Displaced Peoples and Paths to Modernisation',
    domain: 'Humanities',
    field: 'History',
    branch: 'World History',
    tier: 'core',
    concepts: [
      'The steppe economy: grass, horses and trade',
      'Temujin\'s rise and the 1206 quriltai',
      'The decimal army, the Yasa and psychological terror',
      'Four ulus: from Kublai\'s Yuan to the Golden Horde',
      'Settler colonialism in the Americas and Australia',
      'Treaties, reservations and residential schools',
      'The Meiji Restoration: modernisation from above',
      'China: from unequal treaties to revolution and reform',
    ],
    words: 2507,
    readMins: 13,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Three moments made the modern world\'s map, and none of them happened inside Europe. In the thirteenth century the largest land empire in history was assembled by nomads from the Mongolian steppe, connecting — and terrifying — the settled civilisations from Korea to Hungary. From the sixteenth century onward, European settlers expanded across the Americas and Australia, displacing the indigenous peoples whose tenure the newcomers neither understood nor accepted, creating a kind of colonialism different in kind from the revenue-extracting empires of Asia. And in the nineteenth and twentieth centuries the societies that refused to be colonies rebuilt themselves on their own terms — Japan above all — or revolutionised themselves — China — demonstrating that modernisation was not the property of any one civilisation. The Silk Road\'s older exchanges belong to their own lesson; the Roman empire\'s three continents to the classical one; the decolonisation wave after 1945 to its own. This lesson covers the three remaining turning points the world-history syllabus treats, and the evidence they rest on: a secret history, treaty documents, and the scorecards of development.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'These are the three Class 11 world-history themes the CUET history paper draws on that no other lesson in the Library covers, and they carry the paper\'s favourite comparative questions: why did the Mongols conquer so fast, how did settler colonialism differ from other colonialisms, and why did Japan modernise first. The questions are also the useful ones: each is an exercise in explaining large outcomes from economic and institutional causes rather than personalities alone.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Quriltai', def: 'The great assembly of the Mongol aristocracy that acclaimed khans and planned campaigns — the institution that made Temujin "Chinggis Khan" in 1206 and elected his successors; legitimacy ran through the assembly, with consequences every time it split.' },
          { term: 'Anda and naukar', def: 'The two bonds of steppe politics: the anda, a sworn blood-brotherhood between equals, and the naukar, a follower who pledged service to a lord. Temujin built his early power from naukars recruited across clan lines — loyalty to a person, not a lineage.' },
          { term: 'Yasa', def: 'The body of Chinggis Khan\'s commands and decrees — covering army discipline, theft, religious tolerance and the treatment of envoys — transmitted orally and enforced ruthlessly; whether it ever existed as a single written code is debated, but the obedience it names is not.' },
          { term: 'Tumen', def: 'The 10,000-strong division of the decimal army (arban 10, jaghun 100, mingghan 1,000, tumen 10,000), recruited across tribes so old loyalties dissolved; each warrior rode with several horses and a composite bow, making the whole army faster than any opponent\'s messenger.' },
          { term: 'Terra nullius', def: '"Nobody\'s land" — the legal doctrine under which British law treated Australia as uninhabited for property purposes, denying indigenous title; the High Court\'s Mabo decision of 1992 finally overturned it.' },
          { term: 'Meiji Restoration', def: 'The 1868 restoration of imperial rule that overthrew the Tokugawa shogunate and launched Japan\'s state-led transformation: abolition of the feudal domains, a conscript army, compulsory education, model industries sold to private combines, and a Prussian-style constitution in 1889.' },
        ],
      },
      {
        kind: 'para',
        text: 'The steppe explains the empire. The Mongolian grassland could not support agriculture, so its pastoralists lived by herding horses and sheep, moving with the seasons, and trading animal products for grain, cloth and metal — and when trade failed, raiding took its place, which is why steppe and sown lived in a rhythm of exchange and extortion. Out of this world came Temujin, born into a minor noble family around 1162, orphaned and abandoned in childhood, who rose by mastering precisely the steppe\'s own institutions: the anda alliance with his blood-brother Jamukha — later his rival — the loyal naukars recruited on personal merit rather than birth, and an unbeaten record in the feuds that riddled the steppe. In 1206 a quriltai at the headwaters of the Onon acclaimed him Chinggis Khan, universal ruler. What followed was not a horde but an organisation. The army was decimal, cross-tribal, and disciplined by the Yasa; every man was a mounted archer with spare horses; defeated enemies\' engineers — Chinese siege specialists, Persian administrators — were recruited rather than slaughtered, so each conquest armed the next. Campaigns against the Jin of northern China and, after the execution of a caravan and its envoys, against the Shah of Khwarizm from 1219, established the pattern: cities that surrendered were taxed and spared, cities that resisted were annihilated — terror as deliberate policy, cheapening the next siege. The Great Khan died in 1227 still campaigning against the Tanguts.',
      },
      {
        kind: 'para',
        text: 'Succession kept the empire whole for one generation. Ogedei, elected in 1229, extended the conquests — Batu\'s western campaign broke the Russian principalities (Kiev fell in 1240) and reached Hungary before the khan\'s death recalled the army; the historian\'s debate over why the Mongols stopped is a favourite exam question, and the honest answer is dynastic: elections at the centre mattered more than logistics at the Danube. The empire then divided into four ulus — the Great Khan\'s domain, where Kublai founded the Yuan dynasty in China in 1271, adopted a Chinese-style capital at Khanbaliq (Beijing), patronised Marco Polo, and failed twice to invade Japan, its fleets scattered by the typhoons the Japanese named kamikaze; the Golden Horde of the Russian steppe; the Il-Khanate of Persia, whose Hulegu sacked Baghdad in 1258 and ended the Abbasid caliphate, before the Mamluks checked the Mongols at Ain Jalut in 1260; and the Chagatai ulus of Central Asia. Across them ran the pax mongolica — the yam relay-post network, religious tolerance, protected trade — that made the thirteenth century the safest and most connected the Silk Road had ever been, and also the highway along which the Black Death travelled in the 1340s. The last act was Timur, a Turkic chief claiming Chagataid descent, who from his capital at Samarkand rebuilt a trans-continental empire of destruction in the 1370s–90s and sacked Delhi in 1398; his line produced the Mughals, whose Indian empire is the medieval-India lesson\'s subject. The Yuan were expelled by the Ming in 1368, and the steppe returned to the periphery it had briefly commanded.',
      },
      {
        kind: 'para',
        text: 'The second turning point is harder to narrate because its sources are the conquerors\' paperwork — and its silences are the point. Settler colonialism differed from the revenue empires of Asia in one decisive way: the settlers wanted the land itself, not the taxes on its people, so the indigenous population was an obstacle rather than an asset. In the Americas the catastrophe came in overlapping waves: epidemic disease — smallpox and measles ahead of armies — destroyed majorities of some populations within a generation of contact; warfare and land hunger finished the rest piecemeal. The evidence is unusually legible in the United States, where policy is documented: the Indian Removal Act of 1830 sent the Cherokee and other nations west on the Trail of Tears, on which thousands died; the plains peoples were broken by the near-extermination of the bison their economy ran on; the Ghost Dance movement was ended by the Wounded Knee massacre of 1890, with roughly 150 to 300 killed. Assimilation then replaced removal: the Dawes Act of 1887 broke communal lands into allotments, transferring most of the remainder to settlers by 1934, and the boarding schools beginning with Carlisle in 1879 — whose founder, Richard Henry Pratt, phrased the policy as "kill the Indian in him, and save the man" — took children from their families into institutions where languages and identities were systematically suppressed. Canada\'s residential schools, church-run and state-funded, took over 150,000 children into the 1990s; the Truth and Reconciliation Commission (2008–2015) found the system amounted to cultural genocide. In Australia the doctrine of terra nullius denied that indigenous peoples held land at all — no treaty was ever signed — and the "Stolen Generations" of forcibly removed mixed-descent children continued into the 1970s; the Mabo decision of 1992 finally recognised native title, and the national apology followed in 2008. What makes this history examinable is precisely that its documents survive: treaties read to chiefs in languages they did not know, school registers, commission reports — the archive of dispossession is unusually complete.',
      },
      {
        kind: 'para',
        text: 'The third turning point is the counter-case: societies that modernised without being colonised — or that took the colonial blow and answered it with revolution. Japan had been sealed under Tokugawa rule, trading only at Nagasaki through Dutch and Chinese intermediaries, when Commodore Matthew Perry\'s "black ships" arrived in 1853 and forced treaties that Japanese leaders read, correctly, as the prelude to the fate of China. The Meiji Restoration of 1868 was the response: within a generation the domains were abolished for prefectures, the samurai\'s stipends and sword monopoly ended (the Satsuma rebellion of 1877 was the armed protest), a conscript army built on French and German models, compulsory education raised literacy among the highest rates in the world by the early twentieth century, state-built model factories were sold to private combines — the zaibatsu such as Mitsui and Mitsubishi — and a Prussian-style constitution in 1889 made the emperor sovereign and the Diet advisory. The results were measured in war: victory over China in 1894–95 and, in 1905, the first defeat of a European great power by an Asian one, over Russia — the single most consequential signal of the twentieth century to colonised Asia. The same state capacity then drove empire: Korea was annexed in 1910, and the industrial machine fuelled the militarism that ended in 1945 — modernisation and imperialism were the same project, not a contradiction. China\'s path was the mirror image: the Opium Wars (1839–42, 1856–60) forced treaty ports, indemnities and the cession of Hong Kong, and the Qing could not reform fast enough to survive the Taiping catastrophe (1850–64), the failed Hundred Days, and the 1911 revolution of Sun Yat-sen, whose Three Principles — nationalism, democracy, people\'s livelihood — framed the century. The republic dissolved into warlordism; the May Fourth movement of 1919 demanded science and democracy in the vernacular; the Communist Party (1921) eventually won the civil war and founded the People\'s Republic in 1949. The Mao decades collectivised the land, broke with catastrophic cost in the Great Leap famine (1958–61), and convulsed in the Cultural Revolution (1966–76), before Deng Xiaoping\'s reforms from 1978 opened special economic zones and delivered the fastest poverty reduction in history — the "path to modernisation" that made China the second economy of the world. Japan and China together refute the nineteenth-century assumption that modernisation meant westernisation: the institutions travelled, the culture was not for export.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Why Did the Mongols Conquer So Much, So Fast?',
        steps: [
          'List the candidates: horses and mobility, the decimal organisation, terror, meritocracy, engineering recruitment, and the weakness of divided enemies.',
          'Test each against evidence: the army\'s cross-tribal decimal units (arban to tumen) dissolved old loyalties — organisation, not numbers; each warrior\'s spare horses gave strategic speed no settled army matched; siege engineers recruited from China and Persia made every walled city takeable; the Yasa disciplined plunder into a machine.',
          'Weigh the psychological factor: annihilating resisters and sparing those who surrendered was rational — it priced every future siege, and the sources show cities negotiating before armies arrived.',
          'Check the counterfactual: divided Jin, Khwarizm and Rus could not coordinate; the steppe\'s one great reversal (Ain Jalut, 1260) came against a state — Mamluk Egypt — that was itself militarised and organised.',
          'Conclude: the conquest was a system — logistics, organisation, intelligence, terror and recruitment — not an accident of one genius; when the system\'s dynastic engine stalled, so did the conquests.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'At the 1206 quriltai, Temujin was acclaimed…',
          options: ['Il-Khan', 'Chinggis Khan', 'Yuan emperor', 'Great Yasa'],
          answer: 1,
          explain: 'The assembly on the Onon gave him the title Chinggis Khan — universal ruler; Il-Khan was the title of the Persian branch, Yuan came later in China.',
        },
        {
          q: 'The Battle of Ain Jalut (1260) is remembered because…',
          options: ['Kublai founded the Yuan there', 'the Mamluks stopped the Mongol advance', 'Timur sacked Delhi', 'the Abbasid caliphate ended there'],
          answer: 1,
          explain: 'Egypt\'s Mamluks defeated Hulegu\'s forces at Ain Jalut — the first major reverse of the Mongol war machine; Baghdad\'s sack (1258) was the caliphate\'s end.',
        },
        {
          q: 'The Mabo decision (1992) is a landmark because it…',
          options: ['ended residential schools', 'overturned terra nullius and recognised native title', 'created the Dawes Act', 'began the Trail of Tears inquiry'],
          answer: 1,
          explain: 'Australia\'s High Court rejected the "nobody\'s land" doctrine; the national apology to the Stolen Generations came in 2008.',
        },
        {
          q: 'The Meiji government\'s most distinctive method was…',
          options: ['relying on foreign loans and advisers to run Japan', 'state-led model institutions later handed to private business', 'colonising Europe for markets', 'abolishing education to fund the army'],
          answer: 1,
          explain: 'Japan built model factories, schools and arsenals with state money and sold industry to zaibatsu combines — modernisation from above, financed and then privatised.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Reading the steppe through the "primitive horde" stereotype: nomadism was a sophisticated economy, and the Mongol army was more organised than most of its enemies — organisation, not savagery, explains the conquests. Dating the empire\'s end to Chinggis Khan\'s death: the four ulus ran for another century and a half, and the pax mongolica is the era\'s defining trade condition. Treating settler colonialism as just another empire: the demand for land itself, not tribute, is what made indigenous peoples obstacles — and makes the Americas and Australia different in kind from revenue empires. Assuming modernisation has one path: Japan rebuilt from above in a generation without losing a war to a coloniser, China was forced open and answered with revolution — different roads, both modern. And quoting Pratt\'s "kill the Indian" as mere rhetoric: it named policy, and the schools lasted into living memory.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the first-civilizations lesson for what the steppe world was not, and the classical Greece-and-Rome lesson for the empire across three continents that this lesson\'s comparators imitated and exceeded. Follow-ons: the Silk Road lesson for the pax mongolica\'s networks, the decolonization lesson for the twentieth-century reversal of settler empires, and the industrial-revolution lesson for the technology gap China faced and Japan closed. NCERT\'s Themes in World History, Themes 3, 10 and 11, are the primary readings.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'The steppe economy — herding, seasonal movement, exchange-or-raid — shaped Mongol politics; Temujin rose through anda and naukar bonds and was acclaimed Chinggis Khan in 1206.',
        'The conquest system: decimal cross-tribal army, the Yasa, spare-horse logistics, recruited engineers, and terror priced into every future siege.',
        'Four ulus after Ogedei: Yuan China (Kublai, Khanbaliq, Marco Polo), the Golden Horde, the Il-Khans (Baghdad 1258; stopped at Ain Jalut 1260), and Chagatai — then Timur, whose line produced the Mughals.',
        'Settler colonialism wanted land, not revenue: disease, removal (Trail of Tears), bison destruction, Wounded Knee, allotment and boarding/residential schools (Carlisle 1879; Canadian TRC 2008–15); Australia\'s terra nullius fell only in Mabo (1992).',
        'Meiji Japan (1868): domains abolished, conscription, compulsory education, model industries to zaibatsu, 1889 constitution — then wars won against China (1895) and Russia (1905), and empire.',
        'China: unequal treaties after the Opium Wars, 1911 revolution, PRC 1949, catastrophic leap, Deng\'s reforms from 1978 — modernisation as revolution rather than restoration.',
      ] },
    ],
  },
  {
    id: 'econ-india-development-challenges',
    title: 'Human Capital, Employment and Comparative Development: India\'s Agenda',
    domain: 'Business & Economics',
    field: 'Development Economics',
    branch: 'India & Comparative Development',
    tier: 'core',
    concepts: [
      'Human capital: education and health as investment',
      'Rural development: credit, marketing and diversification',
      'Employment: the formal–informal divide',
      'Infrastructure: physical and social, the binding constraint',
      'Sustainable development: growth within limits',
      'India, China and Pakistan: divergent paths',
      'Reading the scorecard: HDI and its blind spots',
    ],
    words: 2420,
    readMins: 12,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'The planning-and-reforms narrative — how India moved from the licence raj to liberalisation — belongs to the macroeconomics lesson; this one takes up the development agenda itself: what the growth was supposed to buy, where it fell short, and how to judge the result. The questions are the examinable core of NCERT\'s Indian Economic Development: how education and health function as capital, why rural credit and markets needed institutional repair, what informality means for the world\'s largest workforce, where infrastructure binds, why growth must eventually answer to the environment, and how to compare India\'s record with the two neighbours that started alongside it — China and Pakistan — without cheating on the arithmetic. The theme throughout is measurement: development economics is the discipline of choosing indicators honestly and knowing what each one hides.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'These chapters anchor the CUET economics paper\'s development section, the class-12 board paper\'s applied half, and the general-awareness papers of the banking and civil-service exams. The comparative chapter — India, China, Pakistan — is a favourite because it forces the exam skill this lesson trains most: reading tables against their own limitations. Beyond exams, these are the concepts behind every policy argument you will ever have about jobs, farmers, hospitals, and what "development" should mean.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Human capital', def: 'The stock of skills and health embodied in people, formed through education, training and medical care — capital in the economists\' sense because it raises future productivity and earnings, and unlike machines it also generates externalities: an educated, healthy population benefits neighbours, employers and the state, which is why private markets under-supply it.' },
          { term: 'Self-help group', def: 'The micro-credit institution that ties small savings circles to bank linkage and livelihood lending — the delivery mechanism that carried formal credit to women in villages whom collateral-based banking had excluded, and the syllabus\'s standard example of institutional innovation in rural finance.' },
          { term: 'Informal sector', def: 'The part of the economy outside formal employment contracts and social security — in India the overwhelming majority of workers, from farm labour to street vendors to unregistered workshops; the defining fact of Indian labour markets, and the reason headline employment statistics need careful reading.' },
          { term: 'Sustainable development', def: 'Development that meets present needs without compromising the ability of future generations to meet theirs (the Brundtland definition) — operationalised through the carrying-capacity idea, the SDGs adopted in 2015, and the Paris Agreement\'s nationally determined contributions.' },
          { term: 'Human Development Index', def: 'The UNDP composite (from 1990) of life expectancy, schooling and income per head — designed to move the scoreboard beyond GDP; its blind spots (correlation with income, silence on distribution and rights) are as examinable as its components.' },
          { term: 'Demographic dividend', def: 'The growth bonus available when the working-age share of the population peaks relative to dependents — India\'s current asset and its deadline: it pays only if education, health and jobs convert the age structure into productivity, as East Asia\'s successes (and its aging) both demonstrate.' },
        ],
      },
      {
        kind: 'para',
        text: 'Human capital comes first because everything else compounds through it. Treating education and health as investment changes the arithmetic: expenditure becomes capital formation, and its return arrives as productivity, earnings and — through externalities — social spillovers that private households cannot capture, which is the standard argument for public provision. The Indian record is a story of long lags partially corrected. Literacy rose from about 18 per cent at independence to around three-quarters, and school enrolment at the elementary level became near-universal in principle, but learning outcomes and the drop-off at secondary level have lagged; policy instruments — the mid-day meal, the RTE Act\'s right to elementary education — addressed access faster than quality. Health shows the same shape: life expectancy roughly doubled since 1951, but public health spending hovered around one to one-and-a-half per cent of GDP for decades — among the lowest for major economies — leaving out-of-pocket expenditure as the dominant financing source, with catastrophic-illness poverty as the documented result. The exam\'s comparative point: East Asian economies that invested early and heavily in basic education and public health converted their demographic windows into growth; the syllabus\'s point is that India\'s window is open now, and the conversion is the agenda.',
      },
      {
        kind: 'para',
        text: 'Rural development is the second pillar, and the NCERT organises it into three channels: credit, marketing and diversification. Credit: the moneylender\'s dominance — and the debt that drove the agrarian distress this series\' agrarian-history lesson narrates — called forth a public apparatus of cooperative banks, commercial-bank priority-sector lending after nationalisation, NABARD (founded 1982) as the apex refinancer, and the self-help-group movement that linked women\'s savings circles to formal finance; the persistent gap is between access and terms, with small farmers still paying more than the schedule intends. Marketing: the regulated wholesale mandi system was designed to protect farmers from traders\' monopsony but thickened into intermediation of its own — hence the reforms debate over direct purchase, contract farming and the electronic national agricultural market (e-NAM, from 2016) that promises price discovery across mandis. Diversification: the escape from grain monoculture into allied activities — the dairy revolution of Operation Flood and the Amul cooperative model, poultry, fisheries, horticulture — plus the shift of rural livelihoods themselves toward non-farm employment, which is where most new rural income now forms. The through-line is institutional: each channel needed an organisation, not merely a price signal, and the exam rewards naming the institution and its date as precisely as naming the problem.',
      },
      {
        kind: 'para',
        text: 'Employment is where development meets demography. The structural facts: agriculture still absorbs around two-fifths to a half of the workforce while producing a much smaller share of output — the textbook signature of underemployment, including the "disguised" kind where extra hands add almost nothing to output; the organised or formal sector employs a minority of workers, so the informal sector — without contracts, security or pensions — is not a residual but the norm; and the unemployment rate itself understates the problem because the poor cannot afford to be openly unemployed — they take low-productivity work instead. The typology of unemployment (open, disguised, seasonal, structural) is standard exam material; the deeper point is the transition the economy has failed to complete — moving workers from low-productivity farming to higher-productivity manufacturing and services — which is why growth spurts have often been called jobless, and why schemes and programmes (rural employment guarantees, skill missions) target the mismatch rather than the rate alone. The employment chapter\'s honest conclusion: India\'s labour market problem is less joblessness than the productivity of the jobs that exist.',
      },
      {
        kind: 'para',
        text: 'Infrastructure is the binding constraint on everything above, and the syllabus splits it into energy, transport, communication, and the social infrastructure of education and health already covered. The energy story is capacity versus losses: generation and transmission gaps, distribution-company finances, and the renewables build-out — solar capacity grew spectacularly in the 2010s — that the energy-transition lesson treats in depth. The analytical frame the exam wants: infrastructure is a public good with long gestation and high risk, so private markets under-supply it — the classic case for state provision or state-backed finance, and the reason the planning era\'s public investment in roads, dams, IITs and steel plants (the macro lesson\'s narrative) still structures today\'s economy. Environment and sustainable development complete the frame: growth as currently measured can liquidate the natural capital it rides on — air quality, groundwater, forests, soil — and the corrective concepts are the carrying capacity of the economy\'s resource base, the Brundtland definition of sustainability, and the instrument set from regulation to carbon pricing; India\'s position in the global negotiation — low per-capita emissions, high aggregate exposure — is the syllabus\'s standing example of the equity-versus-efficiency tension in climate policy. The development scorecard then has to be read twice: GDP per head measures market output and misses distribution, leisure, environment and health; the HDI bundles longevity, schooling and income and still correlates heavily with income; and every index is an argument about what counts as a life worth counting.',
      },
      {
        kind: 'para',
        text: 'The comparative chapter puts the three neighbours\' scorecards side by side, and the syllabus\'s table is worth internalising rather than memorising. China, Pakistan and India became organised states within two years of each other (1949, 1947, 1947) from comparable poverty; their paths diverged on the sequence of reform and the depth of social investment. China reformed first (from 1978, the household-responsibility system in agriculture, then special economic zones) and invested earliest in basic health and education, producing the fastest large-scale poverty reduction in history — though its demographic policy (the one-child policy of 1979 until 2015–16, with the two-child and three-child relaxations after) now hands it an aging population before full prosperity, the mirror image of India\'s dividend. Pakistan grew respectably through the 1980s on remittances and agriculture, then slowed through political instability and security crises; its social indicators — education, women\'s participation — lag its income position, and the syllabus\'s data show it trailing on human-development measures while leading India on some headline ratios in particular years, a reminder that snapshots flatter. Sri Lanka, the table\'s frequent third comparator, spent early on public health and education and still leads the subcontinent on life expectancy and literacy despite lower income — the cleanest demonstration that social investment, not income alone, drives human development. India\'s own scorecard: the reforms era roughly doubled the growth rate; the HDI rose steadily but slowly relative to income; and the agenda chapters of this lesson — human capital, formal jobs, infrastructure, sustainability — are precisely where the gap between growth and development lives. The exam skill: pick the right indicator for the question (income for output, HDI for lives, participation rates for inclusion), and state what it cannot see.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Comparing Three Scorecards Without Cheating',
        steps: [
          'Choose the indicators to match the question: income per head (GNI, PPP) for production capacity; life expectancy and infant mortality for health systems; mean years of schooling for education; HDI for the bundle.',
          'Read the pattern, not the rank: China leads on income and poverty reduction; Sri Lanka leads the subcontinent on health and literacy at lower income; Pakistan\'s income sits near India\'s while its social indicators trail — social investment explains more than income.',
          'Test the HDI\'s limits: it correlates with income, hides distribution (a high average can mask deep exclusion), and says nothing about rights or environment — so pair it with a distribution measure before concluding.',
          'Check the trajectory, not just the level: India\'s HDI growth per decade of growth is the honest comparison; snapshots in single years flatter whoever had a good year.',
          'Conclude with the mechanism: the comparative chapter\'s lesson is causal, not moral — early, broad investment in human capital is the variable that best separates the three paths, which is exactly what the demographic dividend argument predicts.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Education and health count as "capital" in development economics because…',
          options: ['they can be bought and sold like machines', 'they raise future productivity and generate externalities', 'they appear in the capital account of the balance sheet', 'they depreciate faster than physical capital'],
          answer: 1,
          explain: 'Human capital raises future output and its benefits spill over to others — the externality is the standard argument for public provision beyond what households would buy.',
        },
        {
          q: 'India\'s "informal sector" is best described as…',
          options: ['a small illegal fringe of the economy', 'the majority of workers, outside formal contracts and social security', 'only agricultural labour', 'the unorganised retail trade sector alone'],
          answer: 1,
          explain: 'Informality is the norm, not the residual — most workers across farm and non-farm activity lack contracts and social protection, which is why unemployment rates understate the problem.',
        },
        {
          q: 'China\'s reforms that launched its growth acceleration began in…',
          options: ['1949 with the People\'s Republic', '1978 with rural and SEZ reforms', '1991 alongside India\'s liberalisation', '2001 with WTO accession'],
          answer: 1,
          explain: 'Deng Xiaoping\'s 1978 turn — household agriculture, then special economic zones — preceded India\'s 1991 reforms by thirteen years; WTO entry (2001) came after the acceleration was established.',
        },
        {
          q: 'Sri Lanka appears in the comparative chapter mainly to show that…',
          options: ['small countries always develop faster', 'early social investment can outperform income in human development', 'island economies need no industry', 'India should adopt its political system'],
          answer: 1,
          explain: 'Sri Lanka\'s early public health and education spending left it leading the region on life expectancy and literacy despite lower income — social investment as the causal variable.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Equating growth with development: GDP per head is one indicator, and the whole comparative chapter exists to show what it misses — distribution, health, education, sustainability. Treating the informal sector as a leftover: it is the majority condition of Indian work, and any employment statistic that ignores it misleads. Reading the HDI as a pure measure of wellbeing: it correlates with income and hides distribution — cite its components and its blind spots in the same sentence. Assuming China\'s model is simply "faster India": the sequence differed — early social investment and land reform before liberalisation — and the demographic bill (aging before prosperity) is now arriving. And quoting infrastructure gaps as timeless: the planning era built the base the liberalisation era monetised; the exam wants the mechanism, not the lament.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the macroeconomics lesson for the national-income and planning-to-reforms narrative this lesson develops, and the supply-demand-elasticity lesson for the market logic the rural-markets debate assumes. Follow-ons: the renewable-transition and planetary-boundaries lessons for the environmental constraint in depth, the fiscal-policy lesson for how the state pays for human capital, and the world-politics lesson for the climate-negotiation frame India\'s position sits inside. NCERT\'s Indian Economic Development, chapters on human capital, rural development, employment, infrastructure, environment and comparative development, are the primary readings.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Human capital is investment with externalities: literacy rose from ~18% to ~three-quarters and life expectancy roughly doubled, but low public health spending left out-of-pocket costs as the dominant financing source.',
        'Rural development ran through institutions: cooperative and priority-sector credit plus NABARD (1982) and SHGs against the moneylender; APMC mandis and e-NAM (2016) in marketing; Operation Flood, allied activities and non-farm diversification in livelihoods.',
        'Employment\'s defining fact is informality — most workers outside contracts and social security; agriculture\'s output share is far below its workforce share, the signature of disguised underemployment.',
        'Infrastructure is the public-good constraint with long gestation; sustainable development (Brundtland, SDGs 2015, Paris NDCs) prices the limits growth must respect.',
        'Comparative paths: China reformed first (1978) with early social investment — and now ages before full prosperity; Pakistan grew on remittances then stalled; India doubled its growth rate after 1991 but trails on human-development conversion.',
        'Scorecards: GDP measures output, HDI (UNDP, 1990) bundles lives — every indicator needs its blind spots stated before use.',
      ] },
    ],
  },
]

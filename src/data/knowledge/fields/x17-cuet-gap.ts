import type { KnowledgeTopic } from '../types'

/** Expansion pass X17 (2026-10-21): the CUET history / political-science /
 *  development-economics gap cluster. Six lessons mapped against the
 *  official NCERT course texts that CUET's domain papers are set from —
 *  Themes in Indian History Parts I–II (monuments, travellers, agrarian
 *  society, colonial towns), Themes in World History (nomadic empires,
 *  indigenous displacement, paths to modernisation), Contemporary World
 *  Politics (Cold War, US hegemony, South Asia, environment & globalisation),
 *  Politics in India Since Independence (nation-building, one-party
 *  dominance, regional aspirations) and Indian Economic Development
 *  (human capital, rural development, employment, comparative development).
 *  Division of labour inside the Library (zero-repetition rule): the
 *  ancient/medieval/modern India lessons own political narrative; the
 *  international-relations theory lesson owns IR theory; the Indian
 *  constitution lesson owns constitutional design; the macroeconomics
 *  lesson owns national-income measurement and the 1951→1991 planning-and-
 *  reforms narrative. These six own source criticism, the agrarian-urban
 *  social order, the world-history survey, post-1945 world politics as
 *  history, political history of the republic, and the development agenda.
 *  Sources: NCERT textbooks (ncert.nic.in, open access) as above. */

export const x17CuetGapTopics: KnowledgeTopic[] = [
  {
    id: 'hist-india-through-sources',
    title: "Reading India's Past: Monuments, Travellers and an Imperial Capital",
    domain: 'Humanities',
    field: 'History',
    branch: 'Indian History',
    tier: 'core',
    concepts: [
      'How historians read sources: monuments, accounts, archaeology',
      'Sanchi: the stupa, its gateways and its donors',
      'Aniconic art: empty throne, footprints and the wheel',
      "Al-Biruni's Kitab-ul-Hind: Sanskritic learning in Arabic",
      "Ibn Battuta's Rihla and Bernier's Mughal Empire",
      'Vijayanagara: Hampi between river and ruin',
      'The amara-nayaka system and temple towns',
      'Foreign eyes on the city of victory',
    ],
    words: 2100,
    readMins: 11,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'History is a discipline of inference from evidence, and three kinds of evidence dominate the study of pre-modern India: the monuments its believers raised, the accounts written by travellers who crossed into it, and the ruins its empires left behind. Each kind answers different questions and misleads in different ways. A monument tells you what a community could afford to build and chose to depict — but not what ordinary people thought. A traveller tells you what struck an outsider — but he arrived with his own assumptions and wrote for his own audience. A ruined capital tells you where power and water actually flowed — but only after you resist reading romance into stones. This lesson works through one exemplar of each kind: the great stupa at Sanchi, the accounts of Al-Biruni, Ibn Battuta and François Bernier, and the city of Vijayanagara at Hampi. The doctrines behind the monuments live in the eastern-traditions lesson; the political narrative lives in the ancient and medieval India lessons. Here the object is the historian\'s craft itself — the skill every source-based question in the CUET history paper is actually testing.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The CUET history paper is built on NCERT\'s Themes in Indian History, and its distinctive question type is source-based: given a passage, an inscription or a description of a sculpture, infer what it can and cannot establish. That is precisely the muscle this lesson trains. Beyond the exam, source criticism is the general skill behind reading any news report, advertisement or memoir — ask who made this, for whom, and what they could not or would not see.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Stupa', def: 'A domed mound containing relics of the Buddha or a revered monk, ringed by a stone railing (vedika) and approached through carved gateways (toranas). Sanchi\'s Great Stupa began as an Ashokan brick mound in the third century BCE and was enlarged with stone casing and gateways under the later Shungas and Satavahanas.' },
          { term: 'Aniconic symbols', def: 'In early Buddhist art the Buddha was indicated, not depicted: an empty throne, a pair of footprints, a wheel, a bodhi tree. Human images of the Buddha became conventional only centuries later — a fact that itself maps the changing theology of the tradition.' },
          { term: 'Kitab-ul-Hind', def: 'Al-Biruni\'s Arabic account of India, written around 1030 in measured question-and-answer chapters covering religion, philosophy, astronomy, weights, law and more — an attempt to explain one civilisation to another in its own terms, drawn largely from Sanskrit sources.' },
          { term: 'Rihla', def: 'Ibn Battuta\'s book of travels, dictated after roughly three decades on the road, including four years as qazi (judge) of Delhi under Muhammad bin Tughlaq. Its value is the traveller\'s eye for the everyday: food, markets, roads, coins, marriage customs.' },
          { term: 'Amara-nayaka', def: 'A military chief of Vijayanagara holding an amaram — a territory whose revenues supported him and the troops he owed the king. The system resembles the Delhi Sultanate\'s iqta: devolved revenue rights in exchange for military service, with the ever-present risk of provincial power hardening into autonomy.' },
          { term: 'Mahanavami Dibba', def: 'The massive stepped platform in Vijayanagara\'s royal centre, likely the stage for the Mahanavami festival — the nine-day Dussehra celebration when the king displayed power, received tribute and reviewed the army, as Domingo Paes famously described.' },
        ],
      },
      {
        kind: 'para',
        text: 'Sanchi, on a hill near Bhopal, is the textbook case of a monument that outlived its context. The Great Stupa\'s core is Ashokan brick; under the Shunga dynasty it was sheathed in stone, doubled in size, encircled with railings and crowned with four carved gateways facing the cardinal points. The sculpture teaches in layers. The Jataka tales — the Buddha\'s previous births as king, monkey, elephant — wrap the gateways in narrative panels. Where the Buddha himself should appear, the early artists place a wheel, a tree, footprints, an empty throne: the aniconic vocabulary. The Southern Gateway carries the siege of Kushinara, the war among the prince-claimants for the Buddha\'s relics after his death, rendered as a panel of warriors fighting over a walled city while a stupa waits beyond — a scene the artists drew from the Maha-parinibbana Sutta, assuming the viewer already knew the story. And the inscriptions are the quiet revolution: they name donors by the hundreds — queens and village women, monks and nuns, artisans, merchants — evidence that support for the sangha reached far below royal courts, and that women, though often excluded from formal ritual authority, were prominent donors.',
      },
      {
        kind: 'para',
        text: 'Sanchi also preserves a nineteenth-century argument about what preservation means. The site survived partly because it was never abandoned and partly because of the Begums of Bhopal: Shahjehan Begum and her successor Sultan Jehan Begum funded the conservation of the monuments, a museum and a guesthouse, and repeatedly refused requests that would have stripped the site. When a Frenchman sought the Eastern Gateway — the finest — H.H. Cole, the first curator of ancient monuments in India, protested that removing it would be wrong; a plaster cast was made and the original stayed. Alexander Cunningham, the first head of the Archaeological Survey, had already taken away some objects, but it was the Begums\' patronage that kept Sanchi whole, and John Marshall later dedicated his great Sanchi volumes to the two women. Contrast Amaravati, the great stupa on the Krishna river in Andhra: noticed by Colin Mackenzie in 1797, then quarried by local contractors for masonry and building material until the archaeologist Walter Elliot had the remaining sculpture sent off — slabs that today sit divided between a museum in Chennai and the British Museum in London. The two sites together make the point that heritage is not simply what survives but what someone fights for.',
      },
      {
        kind: 'para',
        text: 'The sixth century BCE, the age of the stupa\'s intellectual ancestors, saw the Sramana traditions question the ritual authority of Vedic religion: the Buddha and Mahavira, and the Upanishadic thinkers before them, argued about rebirth, sacrifice, caste and liberation in a mixture of dialects that the eventual monuments, manuscripts and inscriptions preserve unevenly. The doctrines themselves belong to the eastern-traditions lesson; what the historian adds is the evidence trail — the sutta and sutra texts copied and recopied, the monastic complexes (viharas) and prayer halls (chaityas) cut into rock from Ajanta to Karle, and above all the inscriptions, which turn architecture into demography by telling us who paid. The pattern repeats across themes: a building is a claim, and donors\' names are the receipts.',
      },
      {
        kind: 'para',
        text: 'Travellers supply the other half of the evidence, and each wrote from a distinct position. Al-Biruni, born in Khwarizm in 973, came to India in the orbit of Mahmud of Ghazni\'s raids, learned Sanskrit seriously, and wrote the Kitab-ul-Hind in Arabic as a many-chaptered survey — religion, philosophy, astronomy, metrics, law — structured in question-and-answer, in the manner of a scholar systematising an alien science. He is candid about his handicaps: Sanskrit was so different from Arabic that translation distorted it; the script itself confused; and, in his view, Brahmin learning was jealously confined, so he leaned on texts plus what informants would tell him. Ibn Battuta, a Moroccan legal scholar born in Tangier in 1304, reached Delhi in the 1330s and was appointed qazi by the eccentric emperor Muhammad bin Tughlaq; his Rihla, dictated years later, records India from the ground up — the coconut and the betel leaf explained to a foreign audience, the wide bazaars of Delhi, roads and rest-houses, gifts, punishments and court politics — and his method is experience rather than books. François Bernier, a French physician who served the Mughal noble Danishmand Khan between 1656 and 1668, wrote Travels in the Mughal Empire for a European readership, and his generalisations travel with a visible agenda: he declared the Mughal king the effective owner of all land, argued that absence of private property ruined agriculture and artisans, and compared unfavourably with France. Historians now read the land thesis as partly wrong — private property, mortgages and markets demonstrably existed — but Bernier\'s descriptions of Delhi\'s wealth, of sati, and of women\'s position remain indispensable, provided the reader remembers he was arguing with Europe, not merely describing India.',
      },
      {
        kind: 'para',
        text: 'The third kind of evidence is a city: Vijayanagara, the City of Victory, founded in 1336 on the south bank of the Tungabhadra by the brothers Harihara and Bukka of the Sangama line. The site chose itself: the river, revered as the goddess Pampa, curves around a landscape of granite hills, and the sacred centre along the water — dominated by the Virupaksha temple, the city\'s patron deity — grew beside a royal centre of palaces, the Mahanavami Dibba platform, stables and a web of tanks, canals and aqueducts that irrigated gardens and fields alike. Krishna Deva Raya of the Tuluva dynasty (1509–1529) is the celebrated raya: soldier, builder of temple towers and gopurams, author of the Telugu Amuktamalyada, patron of the eight poets of his court. Government ran through the amara-nayakas, military chiefs holding revenue-bearing territories in return for troops and tribute — a bargain that worked while the centre was strong and loosened when it was not. Horse trade mattered so much that Vijayanagara and the Bahmanis alike bought war horses through Portuguese Goa after 1510, since Indian-bred horses were considered inferior. The city\'s fame reached Europe and Persia through witnesses: Nicolo Conti in the 1420s, the Persian ambassador Abdur Razzaq who wrote in the 1440s that the eye had not seen a city like it, and the Portuguese Domingo Paes, who arrived under Krishna Deva Raya and described the Mahanavami festival in detail — the king on the dais, tribute, dances, horses, elephants. In 1565 the combined Deccan sultanates broke the Vijayanagara army at Talikota; the capital was sacked and never reoccupied, a city abandoned as a statement. Robert Sewell\'s A Forgotten Empire (1900) introduced it to English readers, Alexander Greenlaw photographed the ruins as early as 1856, and in 1986 UNESCO listed the Group of Monuments at Hampi — the afterlife of a city as an archaeological problem.',
      },
      {
        kind: 'example',
        title: 'Worked Example — From Gateway Panel to the Relic War',
        steps: [
          'Observe: the Southern Gateway panel at Sanchi shows armoured fighters attacking a walled town; inside the town stands a stupa; above, a line of men rides off with something carried on their heads.',
          'Identify the story: the Maha-parinibbana Sutta records that after the Buddha\'s death at Kushinara, eight princely claimants demanded relics; war was averted only when a brahmin divided the relics into eight shares, which were then each enshrined in stupas.',
          'Cross-check: the panel depicts exactly this — the siege, the divided relics carried away, the stupa as destination. The artist assumed the viewer knew the sutta.',
          'Infer carefully: what the panel establishes is how the relic story was visualised and valued by donors in the first century BCE — not a documentary record of a sixth-century BCE war. Monuments date their makers, not their subjects.',
          'Generalise: this is the whole craft of source-based history — observe, correlate with texts, and distinguish what the evidence proves from what it merely illustrates.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In which language did Al-Biruni write the Kitab-ul-Hind?',
          options: ['Persian', 'Arabic', 'Sanskrit', 'Turkish'],
          answer: 1,
          explain: 'Al-Biruni wrote in Arabic for readers of the Islamic world, even though his sources were Sanskrit texts he had studied with Brahmin scholars.',
        },
        {
          q: 'Who appointed Ibn Battuta as qazi of Delhi?',
          options: ['Alauddin Khalji', 'Firoz Shah Tughlaq', 'Muhammad bin Tughlaq', 'Sikandar Lodi'],
          answer: 2,
          explain: 'Muhammad bin Tughlaq, ever hungry for learned men, made the Moroccan traveller the qazi of Delhi in the 1330s — experience Ibn Battuta later dictated into the Rihla.',
        },
        {
          q: 'Vijayanagara was founded in 1336 by…',
          options: ['Krishna Deva Raya', 'Harihara and Bukka', 'the Bahmani sultans', 'the Deccan sultanates'],
          answer: 1,
          explain: 'The Sangama brothers Harihara and Bukka founded the city on the Tungabhadra; the Tuluva dynasty\'s Krishna Deva Raya is its most celebrated raya, over a century later.',
        },
        {
          q: 'The empty throne, footprints and wheel in early Buddhist art are examples of…',
          options: ['Jataka illustration', 'aniconic representation of the Buddha', 'Vedic ritual symbols', 'Mughal miniature conventions'],
          answer: 1,
          explain: 'Before the human image of the Buddha became conventional, artists signified him through aniconic symbols — evidence of evolving theology read straight off the monuments.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Treating travellers as neutral cameras: every account is framed — Bernier was arguing with Europe about property, Ibn Battuta was writing marvels for a Moroccan audience, and even Al-Biruni relied on Brahmin informants who had their own exclusions. Taking Bernier\'s crown-ownership thesis literally: historians have shown private property and land markets existed; the thesis tells us about his comparison, not only about Mughal law. Reading a stupa as a mere tomb: it is a reliquary, a map of doctrine and a ledger of donors at once. And assuming Hampi\'s sack in 1565 ended a civilisation: the archaeology shows gradual abandonment and looting, and the dynasty itself limped on from another capital — ruins need dates, not drama.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the ancient and medieval India lessons for the political spine this lesson annotates. Follow-ons: the eastern-traditions lesson for the doctrines the Sanchi panels assume, the Silk Road lesson for the trade networks that moved Al-Biruni\'s predecessors and Portuguese horses alike, and the agrarian lesson in this series for the society the travellers rode through. NCERT\'s Themes in Indian History, Themes 4, 5 and 7, are the primary readings.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'History is inference from evidence; each kind of source — monument, travel account, excavation — answers different questions and fails in different ways.',
        'Sanchi: an Ashokan brick core, Shunga-and-after stone casing and gateways, Jataka panels, aniconic Buddha symbols, and inscriptions naming hundreds of ordinary donors — including women.',
        'Preservation is a choice: the Begums of Bhopal saved Sanchi whole; Amaravati, quarried and dispersed, shows what happens without one.',
        'The Kitab-ul-Hind systematised India in Arabic from Sanskrit sources; the Rihla recorded lived experience; Bernier\'s Travels compared India to Europe and got the land question partly wrong — read all three framed.',
        'Vijayanagara (founded 1336): Tungabhadra landscape, sacred and royal centres, amara-nayakas, Portuguese horse trade, and a 1565 sack at Talikota that left the greatest archaeological site in India.',
        'The craft: observe the source, correlate with texts, and claim only what the evidence can prove.',
      ] },
    ],
  },
  {
    id: 'hist-peasants-zamindars-towns',
    title: 'Peasants, Zamindars and the Remaking of Indian Towns',
    domain: 'Humanities',
    field: 'History',
    branch: 'Indian History',
    tier: 'core',
    concepts: [
      'The Mughal agrarian order: khalisa, jagir and zabti',
      'The Ain-i-Akbari as a source — and its limits',
      'Zamindars, jotedars and village panchayats',
      'The Permanent Settlement and the sunset clause',
      'Indigo, the Deccan riots and the Santhal Hul',
      'Presidency cities, black towns and cantonments',
      'De-urbanisation and the rise of hill stations',
    ],
    words: 2200,
    readMins: 11,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Land revenue paid for the Mughal empire, and it paid for the British one; almost everything else in Indian agrarian history is commentary on who stood between the state and the plough, and on what terms. This lesson follows that question across two regimes. Under the Mughals it is a story of measurement, intermediaries and village institutions recorded in the Ain-i-Akbari. Under the Company and the Crown it becomes a story of settlements fixed by law, peasants turned against moneylenders and planters, forest frontiers cleared and revolted, and a new urban geography in which old ports faded while presidency cities, cantonments and hill stations rose. The political arc — conquest, 1857, the freedom movement — lives in the modern-India lesson; here the object is the social and economic machinery, the level at which most people actually experienced both empires. The sources are the examinable core: a fiscal census, a settlement ledger, a rebellion, and a municipal map.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'CUET history questions on Themes 8, 10 and 12 are overwhelmingly source- and concept-based: interpret an Ain statistic, explain why zamindars defaulted, define a jotedar, distinguish de-urbanisation from urban growth. The same material underlies UPSC modern-history and sociology papers, because land and cities are where colonial policy visibly rebuilt Indian society. The analytical payoff is larger than the syllabus: nearly every development debate in India today — land tenancy, rural credit, urban segregation — runs on concepts forged in these two centuries.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Khalisa and jagir', def: 'The two great slices of Mughal revenue: khalisa, land whose revenue went straight to the imperial treasury, and jagir, revenue-bearing territory assigned to nobles (jagirdars) in lieu of salary, which they collected through their own agents.' },
          { term: 'Zabti', def: 'The measurement-based revenue assessment made standard in the north: annual measurement of fields and assessment by standing crop schedules — associated with Todar Mal\'s decade-based (dahsala) rates — with crops classed by price and productivity.' },
          { term: 'Zamindar', def: 'A hereditary intermediary who collected revenue and often commanded forts and armed men; neither absolute owner nor mere tax-farmer, he held transferable rights in the revenue that the state could sell, mortgage or extinguish.' },
          { term: 'Jotedar', def: 'A rich peasant of north Bengal who acquired substantial holdings, lent money and grain, and controlled local trade — powerful enough to undermine the zamindar while paying him rent, and strongest when zamindars themselves collapsed under the settlement\'s terms.' },
          { term: 'Permanent Settlement', def: 'Cornwallis\'s 1793 fix for Bengal, Bihar and Orissa: zamindars were recognised as the state\'s revenue-collectors with the demand fixed forever — if they paid on the appointed day, the land was theirs; if not, the sunset clause auctioned it.' },
          { term: 'Damin-i-Koh', def: '"The skirts of the hills" — the Rajmahal region declared Santhal land from 1832, into which the Company actively drew Santhal cultivators to clear forest and plough, until exploitation produced the Hul of 1855–56.' },
        ],
      },
      {
        kind: 'para',
        text: 'The Mughal countryside ran on a chain of intermediaries, and the state knew it in extraordinary detail. The Ain-i-Akbari — the third book of Abu\'l Fazl\'s Akbarnama, compiled in the 1590s — tabulated provinces, revenue schedules, crop prices, wages, castes, and the households of the nobility, in the conviction that an empire could be known by numbers. For the agrarian historian it is the single richest source for the sixteenth century, and it must be read with its fiscal purpose in view: the Ain records what the administration wanted to collect, so it omits the unconquered, rounds its figures, and sees villages mainly as revenue units. The machine it describes: khalisa and jagir dividing the revenue; zabti assessment by measurement where it applied, with crop-sharing (batai) and other arrangements where it did not; a hierarchy of officials from the qanungo, the hereditary village accountant, down to the patwari with his records. Peasants came in two named kinds — the khud-kashta who cultivated their own village and the pahi-kashta who worked land elsewhere, often as tenants on better terms than they could get at home. Above them stood the zamindars: hereditary, often Rajput in the north, holding revenue rights that could be bought and sold, commanding qilachas — forts — and retainers, and sometimes cultivating privileged lands of their own. The state bargained with them rather than replacing them, because only they could deliver the collections.',
      },
      {
        kind: 'para',
        text: 'At the base, the village governed itself in ways the revenue papers glimpse. The village panchayat, under a headman (muqaddam) advised by elders, kept boundaries, regulated common resources, arranged festivals, and dispensed rough justice; separate caste panchayats — jati panchayats, strong in western India — ruled on marriage, dining and ritual questions with real teeth, and their decisions were usually respected by state courts. Membership had sharp exclusions: women and the lowest castes rarely sat in either forum, though women could and did petition. Moneylenders and grain-dealers threaded the villages, advancing seed against the harvest; and the great majority of cultivators left no records at all, which is why an inscription, a panchayat case or a rebel\'s testimony counts as precious evidence rather than decoration.',
      },
      {
        kind: 'para',
        text: 'The British inherited the machinery and altered its terms. In Bengal the Company tried contract farming through its agents through the 1760s, crashed into the famine of 1770, and settled on the permanent answer: the Permanent Settlement of 1793 fixed the land revenue demand forever and made the zamindar the state\'s collector with an ownership-like interest, on pain of sale. The design misfired against its own authors. The demand, set at the peak of a boom, was crushing; the sunset clause — pay by sunset on the fixed date or be auctioned — enforced it without mercy in a monsoon economy; and between 1798 and 1819 auctions transferred vast estates, though shrewd families learned stratagems, including fictitious sales to relatives and trusts, to hold their land. The true winners were the jotedars, the rich peasants of the north Bengal districts, who had bought land cheaply, lent to their neighbours, and controlled the local grain trade: rent owed to an absentee zamindar was negotiable, but the jotedar was present, and by the 1820s the old revenue aristocracy was shrinking before its own tenantry. Francis Buchanan\'s Company-commissioned surveys of the 1800s and 1810s, and later settlement reports, document the shift — the first great demonstration that a revenue settlement is a social engineering project, not a bookkeeping one.',
      },
      {
        kind: 'para',
        text: 'Where the settlement fixed landlords, other regions saw peasants against merchants and planters. In Bengal, indigo planters had extended advances (dadni) binding ryots to grow the dye-crop on extortionate terms; in 1859–60 the Blue Rebellion swept the districts — ryots refused sowing, fought planters\' men, and were supported by village leaders such as Digambar and Bishnu Biswas and by the Bengali intelligentsia whose newspapers, like Harish Chandra Mukherjee\'s Hindoo Patriot, carried the cause to Calcutta. The Indigo Commission of 1860 obliged the planters to close ranks and the industry; synthetic dyes finished what the revolt began. In the Bombay Deccan, the end of the American Civil War crashed the cotton boom on which ryots had borrowed; sahukars — moneylenders, many of them outsiders to the village — won decrees, seized land and cattle, and in 1875 ryots across Poona and Ahmednagar rose, burning bonds and boycotting creditors in a disciplined, almost constitutional insurrection. The Deccan Riots Commission investigated, and the Deccan Agriculturists\' Relief Act of 1879 followed — the first statutory curb on moneylending, and a monument to the fact that ryotwari peasants, who faced the state directly with no zamindar in between, pressed their grievances through commissions rather than castles. The Santhal Hul of 1855–56 belongs to the same pattern with a different trigger: drawn into Damin-i-Koh to clear the Rajmahal forest after the pacification of the Paharia hill-chiefs in the 1780s, the Santhals found their promised land colonised by moneylenders, traders and officials, and under Sidhu and Kanhu proclaimed the end of Company rule. The rising was crushed, but the government created the Santhal Parganas with special laws insulating the region — the first institutional admission that clearing the forest had imported the disaster it was meant to cure.',
      },
      {
        kind: 'para',
        text: 'The same centuries rebuilt India\'s urban map. The Mughal-era towns that served inland courts and old trades declined — Surat, the great western port of the seventeenth century, faded as Bombay rose; Masulipatnam yielded to Madras; Dhaka and Murshidabad, capitals of Bengal\'s old order, contracted as Calcutta grew: de-urbanisation alongside urbanisation, a net shift of gravity toward Company ports. The presidency cities were built as statements: Madras from the Fort St. George settlement of 1639, Calcutta from the Fort William factory after 1690, Bombay ceded by Portugal in 1661 as part of Catherine of Braganza\'s dowry to Charles II and leased to the East India Company in 1668 for ten pounds a year — perhaps history\'s cheapest real-estate deal. Their internal geography encoded race and function: the "white town" of European buildings by the sea or the fort, the "black town" of Indian neighbourhoods beyond, and after 1857 the cantonment, with its civil lines, planted apart as much by strategy as by hygiene. The hill stations completed the system — Simla from 1819, Ootacamund and Darjeeling in the south and east — part sanitarium for European bodies, part garrison, and eventually summer capitals where the government of India decamped from the plains. The census, first tentative in 1872 and decennial from 1881, counted this new world and helped invent its categories; Ripon\'s 1882 resolution on local self-government gave municipalities, oldest among them Madras\'s, their constitutional charter. The town, like the village, had been redesigned as an instrument of rule.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Why the Permanent Settlement Failed Its Designers',
        steps: [
          'State the design: fix the revenue demand forever; make the zamindar a landowning collector with a secure property; let the state budget on a stable number and "improving" landlords raise productivity.',
          'Test against the monsoon economy: the demand was fixed at a boom peak, but harvests were not; the sunset clause allowed no adjustment for flood, famine or the 1770 famine\'s aftermath, so the first shocks broke families who could not pay on the appointed day.',
          'Trace the money: auctioned estates passed to Calcutta money and office-holders; established families survived through stratagems — fictitious sales, endowments, court litigation — shifting capital away from agriculture instead of into it.',
          'Identify the real victors: jotedars, already rich in land, grain and credit, absorbed the pressure from below and became the effective local power — the settlement weakened the layer it meant to strengthen.',
          'Generalise: a revenue settlement is policy about people, not paper; fixing a number in a variable economy redistributes power toward whoever can wait out a bad season — usually not the state\'s chosen partner.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The Ain-i-Akbari was compiled by…',
          options: ['Abu\'l Fazl', 'Abdur Razzaq', 'Todar Mal', 'Francis Buchanan'],
          answer: 0,
          explain: 'Abu\'l Fazl compiled it in the 1590s as the third book of the Akbarnama; Todar Mal built the revenue system it records, and Buchanan surveyed Bengal two centuries later.',
        },
        {
          q: 'The "sunset clause" of the Permanent Settlement meant that…',
          options: ['revenue was reduced every year', 'unpaid revenue by a fixed date led to auction of the estate', 'zamindars could not sell land', 'the settlement expired at the zamindar\'s death'],
          answer: 1,
          explain: 'Payment was fixed and dated; miss the deadline and the estate was auctioned — the mechanism that transferred so many Bengal estates after 1798.',
        },
        {
          q: 'The Santhal Hul of 1855–56 was led by…',
          options: ['Sidhu and Kanhu', 'Digambar and Bishnu Biswas', 'Tantia Bhil', 'the Paharia chiefs'],
          answer: 0,
          explain: 'Sidhu and Kanhu proclaimed the end of Company rule in Damin-i-Koh; the Biswas brothers led the indigo refusal, and the Paharias had resisted a generation earlier.',
        },
        {
          q: 'Bombay became British in 1661 as…',
          options: ['a purchase by the East India Company', 'part of a royal marriage dowry', 'the spoils of a war with Portugal', 'a gift from the Mughal emperor'],
          answer: 1,
          explain: 'Portugal ceded the islands as part of Catherine of Braganza\'s dowry to Charles II; the Company leased them in 1668 for ten pounds a year.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling the Mughal zamindar a "landowner" in the modern sense: he held revenue rights, not absolute property, and the state could auction or extinguish the right. Reading the Ain-i-Akbari as a neutral census: it is a fiscal document, silent on what it did not tax. Assuming the Company wanted the Permanent Settlement to fail, or the zamindars to starve: the failure was designed optimism — fixed numbers in an unfixed economy — plus the sunset clause\'s severity. Equating de-urbanisation with decay everywhere: old ports and courts faded precisely because new ports grew, a shift of gravity rather than a collapse. And treating hill stations as neutral resorts: their siting, garrisons and summer-capital status made them instruments of rule, with Indian access long restricted.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the medieval India lesson for the Mughal fiscal state this lesson watches at work, and the modern-India lesson for the conquest that produced the settlements. Follow-ons: the sources lesson in this series for how Buchanan\'s surveys and the Ain are read as evidence, and the macroeconomics lesson for how the planning era finally reorganised the countryside after 1951. NCERT Themes in Indian History, Themes 8, 10 and 12, are the primary readings.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Mughal revenue split between khalisa and jagir; zabti measured fields; zamindars — hereditary, fortified, transferable rights — were the indispensable middlemen.',
        'The Ain-i-Akbari (Abu\'l Fazl, 1590s) is the great fiscal source: rich, rounded, and blind to what it did not tax.',
        'Village and caste panchayats governed everyday life — with real exclusions of women and lower castes that their records display.',
        'The Permanent Settlement (1793) fixed revenue forever under a sunset clause; auctions followed, families manoeuvred, and jotedars became the true local power.',
        'Indigo 1859–60, Deccan 1875, Santhal Hul 1855–56: three peasant movements with three different enemies — planter, moneylender, and colonising frontier — and three different legacies.',
        'Presidency cities, black towns, cantonments and hill stations built a new urban geography as old ports and courts faded; the census (from 1872/1881) counted the new world into existence.',
      ] },
    ],
  },
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
    words: 2400,
    readMins: 12,
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
    id: 'pol-world-order-cold-war',
    title: 'The World Since 1945: Cold War, Hegemony and South Asia',
    domain: 'Social Sciences',
    field: 'Political Science',
    branch: 'International Relations',
    tier: 'core',
    concepts: [
      'Bipolarity: arenas, alliances and the Cuban Missile Crisis',
      'Non-alignment: Bandung, Belgrade and Panchsheel',
      'The Soviet collapse, shock therapy and the unipolar moment',
      'US hegemony: Gulf War, Kosovo, Afghanistan, Iraq',
      'The three faces of hegemony: hard, structural, soft',
      'Alternative centres: EU, China, Russia and the Global South',
      'Contemporary South Asia: democracy, conflict and cooperation',
      'Environment, resources and the politics of globalisation',
    ],
    words: 2400,
    readMins: 12,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'World politics since 1945 is one long argument about the distribution of power. It began with two superpowers staring each other down, continued through an unanticipated American pre-eminence after the Soviet collapse, and now runs through a debate over how many centres of power the system actually has. This lesson tells that story as history — the crises, the wars, the institutions — and then zooms into South Asia, the region where the great-power currents meet the densest concentration of unresolved borders and identities, before closing with the two agendas that cut across all borders: the global environment and globalisation itself. The analytic vocabulary — anarchy, polarity, balance — belongs to the international-relations theory lesson; here the theories are lenses, the events are the syllabus. NCERT\'s Contemporary World Politics supplies the frame and most of the dates.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The CUET political-science paper draws its international section almost entirely from this material, and its question style is diagnostic: identify the arena, name the crisis, attribute the doctrine, weigh the counterfactual. The same content anchors UPSC GS-II\'s world-affairs questions. The larger payoff is a permanent decoder for the news: every contemporary headline — sanctions, summit, alliance, dispute — is legible as a move in the game this lesson describes.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Containment', def: 'The American strategy of preventing Soviet expansion wherever it appeared — formalised in the Truman Doctrine (1947) and implemented through NATO (1949), aid programmes and alliance-building; the Soviet answer was its own bloc and, from 1955, the Warsaw Pact.' },
          { term: 'Cuban Missile Crisis', def: 'October 1962: American spy planes photographed Soviet missiles being installed in Cuba; a US naval quarantine and thirteen days of secret bargaining ended with the missiles withdrawn in exchange for a non-invasion pledge and (secretly) the removal of American missiles from Turkey — the closest the world came to nuclear war.' },
          { term: 'Non-Aligned Movement', def: 'The grouping of newly independent states, seeded at Bandung (1955) and organised at Belgrade (1961) around Nehru, Nasser, Tito, Sukarno and Nkrumah, that refused to join either bloc — an active diplomacy of staying out while playing the two superpowers against each other, grounded in the Panchsheel principles (1954).' },
          { term: 'Shock therapy', def: 'The rapid transition recipe applied to post-communist Russia in the 1990s — abrupt price liberalisation, privatisation and stabilisation — which collapsed output and created the oligarch economy; the textbook case that sequencing matters as much as direction in reform.' },
          { term: 'Common but differentiated responsibility', def: 'The climate-negotiation principle that all states share responsibility for the global environment but not equally — the industrialised North emitted the accumulated stock, so it bears heavier obligations; the constitutional doctrine of every climate treaty from Rio (1992) to Paris (2015).' },
          { term: 'SAARC', def: 'The South Asian Association for Regional Cooperation, founded at Dhaka in 1985 — seven then eight members attempting economic and social cooperation across the region\'s political fault lines, chronically stalled by the India–Pakistan relationship.' },
        ],
      },
      {
        kind: 'para',
        text: 'The Cold War began where the Second World War ended: two victorious systems, liberal-capitalist and communist, occupying the ruins, each convinced the other\'s ideology could not be allowed to spread. "Arenas" is the syllabus\'s word for where the confrontation was fought by proxy. Berlin was the first: the Soviet blockade of 1948–49 answered by the Western airlift, then the Wall in 1961 as the front line in concrete. Korea (1950–53) froze into the peninsula\'s division; Vietnam became the decade-long war that broke American confidence. The Cuban Missile Crisis of October 1962 was the moment the confrontation became existential — Soviet missiles in Cuba, an American quarantine, thirteen days of brinkmanship, and a settlement (public non-invasion pledge, secret withdrawal of US missiles from Turkey) that taught both sides to build telephone hotlines and arms-control treaties: the test-ban, non-proliferation and SALT regimes followed. Neither bloc ever fought the other directly — deterrence, the logic that nuclear war cannot be won, held — but the Third World paid the price as the superpowers armed clients from Angola to Afghanistan. Against both blocs stood the non-aligned: the Bandung conference of 1955 gave the movement its voice, Belgrade in 1961 its organisation, and Panchsheel its principles. Non-alignment was never neutrality between good and evil; it was the weak\'s strategy for keeping options in a bipolar world, and its achievements — mediating conflicts, peacekeeping, the demand for a New International Economic Order — outlived the blocs that it faced.',
      },
      {
        kind: 'para',
        text: 'The end arrived faster than anyone predicted. Gorbachev\'s reforms of the mid-1980s — perestroika restructuring the economy, glasnost opening the press — were meant to save the Soviet system and instead dismantled its legitimacy; eastern Europe slipped away in 1989 as the Berlin Wall was breached, and in December 1991 the USSR dissolved into fifteen republics. The successor Russia swallowed "shock therapy": prices freed overnight, industry privatised, stabilisation imposed — and output collapsed, savings evaporated and the privatised economy landed in the hands of well-connected insiders. The lesson every reformer draws is that transition has a sequence, and the speed of the medicine is itself a policy choice. For a decade the system was unipolar: the United States accounted for a large share of world military spending, led coalitions that no rival could veto, and expanded NATO eastward as the Warsaw Pact dissolved. The scholarly argument of the moment — Fukuyama\'s "end of history" against Huntington\'s "clash of civilisations" — is itself a syllabus item: one predicted the universal victory of liberal democracy, the other predicted that culture would organise the next conflicts. The 1990s and 2000s tested both.',
      },
      {
        kind: 'para',
        text: 'American hegemony, the syllabus insists, has three faces. Hard power is the military: the 1991 Gulf War — a UN-sanctioned coalition expelling Iraq from Kuwait — displayed it; Kosovo in 1999 strained it (NATO acted without a fresh UN mandate); Afghanistan after September 11, 2001 invoked self-defence against al-Qaeda\'s Taliban hosts; and Iraq in 2003, launched on weapons-of-mass destruction claims that proved false and without UN sanction, burned the legitimacy the first Gulf War had banked. Structural power is the economy: the dollar\'s centrality, the institutions the United States anchored at Bretton Woods (the IMF and World Bank), and the network effects of markets, standards and technology — the power to set the rules other players must accept to transact. Soft power is attraction: universities, popular culture, the dream of Silicon Valley. All three faces eroded in the 2000s — the wars cost hard power, the 2008 financial crisis dented structural confidence, and contested politics eroded the soft gloss — which is precisely what made the "alternative centres" credible. The European Union integrated trade, currency (the euro) and law across a widening membership while struggling with its democratic deficit; China converted two decades of double-digit growth into the world\'s second economy, joined the WTO in 2001, and built the infrastructure-and-loans diplomacy of its Belt and Road; Russia converted energy leverage and nuclear arsenals into a claim to its "near abroad"; and the Global South — through ASEAN, the G20, the non-aligned inheritance — moved from audience to vote. The honest syllabus answer to "is the world unipolar, bipolar or multipolar?" is that it depends on the dimension: military, economic and cultural power are now distributed differently, and that mismatch is the era\'s defining tension.',
      },
      {
        kind: 'para',
        text: 'South Asia is where the syllabus lands the plane, and the region\'s data make the point without rhetoric: the area shares a colonial history, and its democratic record is wildly uneven. India kept electoral democracy continuously after independence — the great anomaly in a region that includes Pakistan\'s alternating civilian and military regimes (Ayub Khan, Zia-ul-Haq, Musharraf\'s 1999 coup), Bangladesh, born in the 1971 war, which has alternated elected governments and emergency rule, and Nepal\'s road from monarchy through the 1990 uprising to the 2006 democratic settlement and the abolition of the monarchy itself. Sri Lanka\'s tragedy was majoritarian: the 1956 Sinhala-only language act and discriminatory policies alienated the Tamil minority, birthing a separatist war under the LTTE that ran from 1983 to 2009 and ended in a brutal finale — with Indian peacekeepers caught in the middle (the IPKF deployment of 1987–90 became its own cautionary tale). Kashmir remains the India–Pakistan core dispute: three and a half wars (1947–48, 1965, 1971, the Kargil conflict of 1999), a de facto Line of Control, and the 2019 reorganisation of Jammu and Kashmir\'s constitutional status as the latest structural change. Yet the same region trades, migrates and negotiates: SAARC survives its dysfunction, and the region\'s economies are more intertwined than its politics admit. The exam\'s lesson is analytic, not sentimental: borders are recent, identities were rearranged by partition, and cooperation is a policy choice that institutions can either enable or strangle.',
      },
      {
        kind: 'para',
        text: 'Finally, the two agendas that transcend the state system. The environment entered world politics as science became undeniable: the ozone regime (1987) proved global regulation possible; Rio (1992) set the vocabulary — sustainable development, common but differentiated responsibility; Kyoto (1997) bound the North to targets; Paris (2015) brought everyone into nationally determined contributions. The North–South fight is structural: the accumulated stock of emissions is the industrialised world\'s, the future flow is rising in the South, and every negotiation is an argument about fairness dressed as accounting. Resource geopolitics follows the same logic — oil has repeatedly drawn great powers into the Gulf, water courses across borders that treaties only partly manage, and "resource wars" remain more metaphor than fate: most disputes end in bargains. Globalisation, the syllabus\'s last theme, is not one thing: economic globalisation is trade, capital and firms moving across borders (the WTO from 1995; the MNC as the era\'s characteristic firm); political globalisation is the state sharing its stage with institutions and networks; cultural globalisation is the flow of images and tastes — resisted as Americanisation by some, embraced as connectivity by others. The anti-globalisation movement (Seattle, 1999) named the distributional cost — gains and losses are uneven, within countries as between them — and every subsequent trade debate, from Brexit to semiconductor subsidies, is that argument continued. The syllabus\'s verdict is balanced: globalisation\'s connectivity is real, its governance is incomplete, and the losers it creates are the politics of the future.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Applying the Three Faces of Hegemony to Iraq 2003',
        steps: [
          'Face one — hard power: the invasion itself (coalition forces, air supremacy, three weeks to Baghdad) proved unmatched military capability — the easiest face to demonstrate.',
          'Face two — structural: the war was fought without fresh UN sanction and on false WMD claims, yet most states continued trading, banking and basing with the hegemon — structural dependence outlived legal legitimacy.',
          'Face three — soft: world opinion, street protests on a planetary scale, and the collapse of the occupation\'s credibility showed attraction failing precisely when coercion was most visible.',
          'Weigh the net effect: victory demonstrated power while depleting all three currencies — the standard exam answer is that Iraq 2003 marked the high-water mark of hard hegemony and the beginning of its credibility discount.',
          'Generalise: hegemony is a stock of legitimacy that military action draws down; the three faces move independently, and long-term order needs all three — force alone rents the system, it does not own it.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The Cuban Missile Crisis ended with…',
          options: ['a UN invasion of Cuba', 'Soviet missiles withdrawn for a US non-invasion pledge (and a secret Turkish trade)', 'a formal Soviet–American treaty signed in Havana', 'the US lifting the blockade without conditions'],
          answer: 1,
          explain: 'The public bargain was missiles for non-invasion; the secret component was the removal of US Jupiter missiles from Turkey — classic crisis diplomacy with face-saving on both sides.',
        },
        {
          q: 'The Non-Aligned Movement was organised as a movement at…',
          options: ['Yalta in 1945', 'Bandung in 1955', 'Belgrade in 1961', 'Havana in 1979'],
          answer: 2,
          explain: 'Bandung seeded the politics and rhetoric; Belgrade 1961 constituted the movement; Havana 1979 hosted its summit amid Cold War controversy over Cuba\'s role.',
        },
        {
          q: '"Shock therapy" in post-Soviet Russia refers to…',
          options: ['the 1993 constitutional crisis', 'rapid liberalisation and privatisation that collapsed output', 'the Chechen war strategy', 'Stalin-era collectivisation'],
          answer: 1,
          explain: 'The 1990s recipe of overnight price liberalisation and privatisation produced hyperinflation, output collapse and oligarchic asset grabs — the sequencing lesson of transition economics.',
        },
        {
          q: 'Sri Lanka\'s civil war (1983–2009) grew primarily from…',
          options: ['a monarchy\'s abolition', 'majoritarian language and citizenship policies alienating Tamils', 'an Indian annexation attempt', 'a Marxist peasant uprising in the south'],
          answer: 1,
          explain: 'The 1956 Sinhala-only act and cumulative discrimination radicalised Tamil politics into separatism under the LTTE — majoritarianism as a road to civil war.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Equating non-alignment with passivity: NAM was an active diplomatic project, and its members traded, armed themselves and mediated — staying out of blocs is not staying out of politics. Dating the Cold War to Europe alone: the decisive arenas were Berlin, Korea, Cuba, Vietnam and the Third World, where the superpowers fought by proxy. Treating "shock therapy" as proof that markets fail: the lesson is about sequencing and institutions, not the direction of reform. Reading US hegemony as only military: the structural (dollar, institutions) and soft (culture, universities) faces are what make hegemony cheap — and their erosion is what makes rivals affordable. And assuming South Asia\'s story is only conflict: the region has also produced the developing world\'s most durable democracy, repeated democratic restorations, and institutions that keep cooperation possible.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the international-relations theory lesson for the analytic lenses (anarchy, polarity, institutions) this history tests, and the world-wars lesson for the 1945 baseline. Follow-ons: the India-since-independence lesson for how the biggest South Asian state managed its own post-colonial politics, the Indian constitution lesson for the domestic institutions behind Indian foreign policy, and the exchange-rates and balance-of-payments lesson for the structural face of hegemony. NCERT\'s Contemporary World Politics is the primary reading.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Bipolarity ran on arenas and deterrence: Berlin, Korea, Vietnam, Cuba (1962) — the crisis taught hotlines and arms control; NAM (Bandung 1955, Belgrade 1961) organised the third option.',
        'The USSR ended in 1989–91 (perestroika, glasnost, dissolution); Russia\'s shock therapy collapsed output and made oligarchs — sequencing is the lesson.',
        'US hegemony has three faces — military (Gulf 1991 to Iraq 2003), structural (dollar, IMF/World Bank), soft (culture, universities); the 2000s spent the stock.',
        'Alternative centres: EU integration, China\'s WTO-era rise and Belt and Road, Russia\'s energy leverage, and a Global South that moved from audience to vote — polarity now depends on the dimension.',
        'South Asia: durable Indian democracy against Pakistan\'s coups, Bangladesh\'s turbulence, Nepal\'s road to republic, Sri Lanka\'s majoritarian civil war (1956 act → LTTE → 2009), and the Kashmir core dispute — with SAARC as the stalled cooperation channel.',
        'Environment (Rio, Kyoto, Paris; common but differentiated responsibility) and globalisation (WTO 1995; uneven gains; Seattle\'s backlash) are the agendas no border contains.',
      ] },
    ],
  },
  {
    id: 'pol-india-since-independence',
    title: 'India Since Independence: Nation-Building and Regional Aspirations',
    domain: 'Social Sciences',
    field: 'Political Science',
    branch: 'Indian Polity',
    tier: 'core',
    concepts: [
      'Three challenges: partition, princely states, democracy',
      'Integrating the states: Junagadh, Hyderabad, Kashmir',
      'Linguistic reorganisation: Andhra to the 1956 Act',
      'The Congress system: dominance within a competitive order',
      '1967 and 1969: the dominance cracks',
      'Punjab, Assam and the North-East: accommodating regions',
      'The Mandal moment and coalition decades',
      'Recent developments: majorities and federal debates',
    ],
    words: 2300,
    readMins: 12,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'The republic\'s first decades solved problems that most new states of the era failed at: absorbing the violence of partition, folding over five hundred princely states into a union, and holding competitive elections on universal adult franchise in a largely poor, multilingual society. Then it had to keep solving them — as one party\'s dominance gave way to coalition, as language and region pressed for recognition, as every compromise bred the next demand. This lesson is the political history of that achievement and its unfinished business: how the union was assembled, how the Congress system worked and cracked, how regional aspirations were fought and accommodated, and how the Mandal moment and the coalition decades reshaped the competition the constitution designed. The constitutional architecture itself — rights, parliament, federalism — belongs to the Indian-constitution lesson; the partition settlement\'s diplomatic aftermath belongs to the world-politics lesson. Here the story is practice: who won, who was accommodated, and what the arrangements cost.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The CUET political-science paper\'s India section draws directly from NCERT\'s Politics in India Since Independence, and its questions reward exactly this lesson\'s distinctions: dominance versus democracy, accommodation versus suppression, movement versus party. The same material runs through UPSC GS-I and GS-II. And the concepts are the operating manual for reading Indian news: every statehood demand, caste census or federal dispute is a continuation of the arguments catalogued here.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Instrument of Accession', def: 'The legal instrument by which princely states joined the Indian Union, ceding defence, foreign affairs and communications while retaining internal autonomy — the document Kashmir\'s maharaja signed in October 1947, the basis of the state\'s special constitutional status until 2019.' },
          { term: 'States Reorganisation Act, 1956', def: 'The statute that redrew the internal map on largely linguistic lines — fourteen states and six union territories — the republic\'s grand compromise between administrative convenience and language-based identity, after Potti Sriramulu\'s death had forced Andhra\'s creation in 1953.' },
          { term: 'The Congress system', def: 'Political scientist Rajni Kothari\'s model of Indian politics in the 1950s: one party of national movement pedigree dominating elections while functioning internally as a coalition of factions, with opposition parties operating as "parties of pressure" around its margins — dominance without dictatorship.' },
          { term: 'The Syndicate', def: 'The informal collective of powerful state Congress chiefs (Kamaraj, S.K. Patil, Atulya Ghosh and others) who managed the party and initially backed Indira Gandhi as prime minister in 1966 — and whom she then defeated, splitting the party in 1969.' },
          { term: 'Assam Accord, 1985', def: 'The settlement that ended the six-year anti-foreigner agitation led by the All Assam Students\' Union: detection and deportation of post-1971 migrants, constitutional safeguards and an Accord-day history — the template for negotiated closure of a regional movement, imperfectly implemented since.' },
          { term: 'Mandal Commission', def: 'The Second Backward Classes Commission (chaired by B.P. Mandal), whose report identifying Other Backward Classes was implemented in 1990 by V.P. Singh\'s government — a 27 per cent reservation that restructured national party competition around social justice coalitions.' },
        ],
      },
      {
        kind: 'para',
        text: 'Independence delivered three problems at once, and the new state solved them in different currencies. Partition itself had displaced something like eight to ten million people across the new borders; the aftermath — refugee camps, property exchange, and the recovery of abducted women carried out under special legislation — tested the machinery of a government that had barely begun to exist. The princely states were the second problem: five hundred and sixty-odd polities whose treaties lapsed with the Raj, and whose integration Sardar Patel and V.P. Menon engineered through the Instrument of Accession, persuasion and pressure. Junagadh, whose Muslim nawab acceded to Pakistan against a Hindu-majority population, was settled by a plebiscite in 1948 after Indian forces moved in; Hyderabad, a huge interior state whose Nizam wavered, was settled by the police action of September 1948; Kashmir\'s maharaja acceded to India in October 1947 after tribal invaders crossed from Pakistan, and the resulting war froze into the Line of Control — the one integration that became an international dispute, with the state\'s special status (Article 370) its constitutional monument until 2019. Democracy was the third problem, and the solution was an act of faith: the first general election of 1951–52 enrolled a largely illiterate electorate — the largest such experiment attempted anywhere — and the machinery built for it (the Election Commission, delimitation, universal franchise) became the republic\'s spine. The constitution that structured all three solutions is the polity lesson\'s subject; what belongs here is that the men and women who wrote it expected its premises to be tested, and they were, immediately and repeatedly.',
      },
      {
        kind: 'para',
        text: 'The map itself was the first test. The congress had promised linguistic provinces; partition made planners fear that language would crack the union, and a high-powered commission in 1948 recommended delay. The demand would not wait: Potti Sriramulu\'s fatal fast for a Telugu state ended in December 1952, Andhra was created in 1953, and the States Reorganisation Act of 1956 redrew the union into fourteen states and six union territories on largely linguistic lines. Later adjustments — Bombay\'s split into Maharashtra and Gujarat in 1960, Punjab\'s reorganisation in 1966, the north-eastern reorganisations of the 1970s — followed the same logic. The verdict of history is that linguistic federalism did not divide India; it discharged the demand into constitutional channels, and the map was redrawn repeatedly without a single secession — the single strongest empirical argument that accommodation, not suppression, holds multi-lingual states together. The 2014 creation of Telangana shows the machinery still running: movement, committee, act, new state.',
      },
      {
        kind: 'para',
        text: 'Politics then ran through the Congress system. The party that won independence inherited the national movement\'s organisation, its halo and its internal factionalism — and converted all three into electoral dominance, taking three general elections (1952, 1957, 1962) with commanding majorities. Yet the system was competitive in substance: opposition parties — the Praja Socialist Party, the Jana Sangh founded in 1951, the communists who won Kerala in 1957 and demonstrated that a state government could fall to a constitutional dismissal, the Swatantra Party of 1959 on the free-market right — contested, won states, and operated on national policy as pressure parties between elections, while the Congress\'s own factions aggregated every major social cleavage. Rajni Kothari\'s phrase for it — one-party dominance within a competitive order — captures the paradox the exam tests: dominance was a result of free elections, not a substitute for them. The system strained in the 1960s: two wars, two droughts, devaluation, and Nehru\'s death in 1964. The fourth general election of 1967 was the crack — Congress retained the centre but lost power in eight states, to coalitions (the Samyukta Vidhayak Dal governments) and to the DMK in Madras, the first non-Congress dravidian government. Then Indira Gandhi, made prime minister in 1966 by the Syndicate as a compromise they expected to control, broke the party instead: the 1969 presidential election split Congress into the Organisation (Congress-O) and her Requisitionists (Congress-R), whose Garibi Hatao campaign won her the 1971 landslide on her own programme. The Emergency (1975–77) — the suspension of the normal constitution after the Allahabad judgment voided her seat — remains the republic\'s constitutional rupture, reversed by the 1977 election that threw her out; its full anatomy belongs to the constitution lesson\'s story of emergency powers, but its political meaning is simple: the electorate could remove what elections had installed, and did.',
      },
      {
        kind: 'para',
        text: 'Regional aspirations were the recurring stress test, and the syllabus\'s categories are Punjab, the North-East and Jammu and Kashmir. Punjab\'s crisis compounded demands — linguistic (Punjabi suba, achieved 1966), agricultural (the green revolution\'s prosperity), religious (the Akali Dal\'s Anandpur Sahib resolutions) — into militancy; Operation Blue Star\'s June 1984 assault on the Golden Temple complex was followed by Indira Gandhi\'s assassination and the anti-Sikh violence in Delhi, and the Rajiv–Longowal Accord of 1985 came too late to stop a decade of terrorism, only broken in the early 1990s — the republic\'s costliest lesson that military solutions to political grievances buy time, not settlement. The Assam movement (1979–85) began as students\' agitation against electoral rolls swollen with migrants and ended in the Assam Accord\'s bargain; its detection-and-deportation machinery has never worked as promised, and the issue returned as the citizenship-amendment debates of the 2010s. The North-East\'s story is the most varied: Naga insurgency from the 1950s, mediated into statehood (Nagaland, 1963) and later accords; Mizoram\'s insurgency ended by the Mizo Accord of 1986 and statehood in 1987 — now cited as India\'s most successful peace settlement; and the smaller hill states carved out through the 1970s. Jammu and Kashmir combined all three histories — accession, insurgency from 1989, and the 2019 abrogation of Article 370 with the state\'s reorganisation into two union territories. The comparative lesson the NCERT draws: where the republic negotiated (language, Mizoram, Assam\'s accord), settlements held; where it delayed or stormed, the bill came due later, with interest.',
      },
      {
        kind: 'para',
        text: 'The last four decades restructured competition twice. The Mandal moment: V.P. Singh\'s 1990 implementation of the Backward Classes report reserved 27 per cent of central jobs for OBCs and, as important, taught national parties that social-justice coalitions win; the era\'s new regional and caste-based parties — from the SP and RJD to the BSP — descend from that realignment, alongside the Babri Masjid\'s demolition in 1992 which restructured the other pole around the temple question. The coalition decades (1989–2014): no single party won a majority for a generation; national fronts, United Fronts, the NDA and the UPA governed through accommodation — with the notable exception of the 1991–96 Congress minority government, which used its stability to launch the economic reforms the macroeconomics lesson follows. In 2014, and more decisively in 2019, the BJP won outright majorities — the first single-party majorities since 1984 — re-centralising decision-making, abrogating Article 370, and reopening the exam\'s oldest question: whether one-party dominance is returning, and if so whether it carries the Congress system\'s internal pluralism. The honest syllabus answer is that the jury is out; the analytical toolkit — dominance, federal accommodation, movement-to-party conversion — is what this lesson leaves the student holding.',
      },
      {
        kind: 'example',
        title: 'Worked Example — How a State Is Created: Telangana, 2014',
        steps: [
          'Origins: the Telangana demand is as old as Andhra Pradesh itself (1956 merger of Telugu-speaking areas) — grievances about irrigation, jobs and the river districts\' revenue flowed into a dedicated movement from 1969, revived in the 2000s.',
          'Party conversion: the Telangana Rashtra Samithi (2001) converted the movement into electoral stakes; the 2009 assumption that a fast would settle it collapsed, and the Centre announced initiation — then paused.',
          'Committee and act: the Sri Krishna Committee (2010) weighed options; the UPA government moved the Andhra Pradesh Reorganisation Act, passed in 2014, carving out India\'s twenty-ninth state from 2 June 2014.',
          'Read the pattern: movement → party → committee → act → new state — the same institutional route as Andhra (1953–56) and the north-eastern states; the republic processes regionalism through procedure, slowly and at cost, but without breaking.',
          'Generalise: accommodation is the republic\'s default technology for linguistic-regional demands — which is why the exam rewards knowing the route as well as the result.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Hyderabad\'s integration in 1948 was accomplished through…',
          options: ['a plebiscite organised by the UN', 'the police action (Operation Polo)', 'the Instrument of Accession signed voluntarily', 'the States Reorganisation Act'],
          answer: 1,
          explain: 'The Nizam stalled after accession talks failed; Indian forces entered in September 1948 and the state was integrated — Junagadh was the plebiscite case, Kashmir the accession-plus-war case.',
        },
        {
          q: 'Potti Sriramulu\'s death in December 1952 directly produced…',
          options: ['the States Reorganisation Act', 'the state of Andhra in 1953', 'the creation of Bombay state', 'Article 370'],
          answer: 1,
          explain: 'His fast and death forced the creation of Andhra state in 1953 — which made the general linguistic reorganisation of 1956 unstoppable.',
        },
        {
          q: 'The 1967 election is called the "crack" in Congress dominance because…',
          options: ['the party lost the centre', 'Congress lost power in eight states, including to the DMK in Madras', 'the Syndicate left the party', 'the Emergency followed immediately'],
          answer: 1,
          explain: 'Congress held the centre narrowly but lost eight states to coalitions and the DMK — the first systemic breach; the split came in 1969, the Emergency in 1975.',
        },
        {
          q: 'The Mizo Accord (1986) is studied because it…',
          options: ['created Nagaland', 'ended insurgency and led to statehood — India\'s most successful settlement', 'abrogated Article 370', 'implemented the Mandal report'],
          answer: 1,
          explain: 'The accord with the Mizo National Front brought peace and statehood in 1987 — the standard-bearer against which other settlements (Punjab, Assam, Kashmir) are measured.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Confusing dominance with dictatorship: the Congress system was electorally competitive — dominance was the result of free elections, not their absence, and the 1977 and 1989 turnovers proved the point. Treating linguistic reorganisation as dangerous and reluctantly granted: the evidence runs the other way — the 1956 redraw and its successors discharged demands that might otherwise have cracked the union. Blaming regionalism itself for Punjab or the North-East: the crises compounded specific grievances with state responses; where negotiation came (Mizoram, Assam accord), settlements held. Reading Operation Blue Star or the Emergency as isolated events: both sit inside longer causal chains — grievance, movement, miscalculation — that the exam expects you to trace. And assuming 2014–19 settled the dominance question: it reopened it, and the syllabus wants the framework, not a verdict.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the Indian constitution lesson for the institutional skeleton (federalism, emergency powers, elections) this history stress-tests, and the modern-India lesson for the freedom-movement legacy that became the Congress\'s electoral asset. Follow-ons: the world-politics lesson in this series for the external relations of Kashmir and South Asia, the macroeconomics lesson for the 1991 reforms the coalition era enabled, and the development-challenges lesson for the social-sector side of the same decades. NCERT\'s Politics in India Since Independence is the primary reading.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Three founding problems — partition\'s refugees, 560-odd princely states, first-past-the-post universal franchise — were solved by rehabilitation, Patel–Menon integration (Junagadh plebiscite 1948, Hyderabad police action 1948, Kashmir accession 1947) and the 1951–52 election machinery.',
        'Language was discharged into federalism: Andhra 1953 (after Sriramulu), States Reorganisation Act 1956 (14 states, 6 UTs), then Bombay 1960, Punjab 1966 — the map proves accommodation works.',
        'The Congress system (Kothari): dominance within competition; 1967 cracked it (eight states, DMK), 1969 split it (Congress-O vs Congress-R), 1971 remade it — and the Emergency (1975–77) tested the electorate, which removed its author.',
        'Regional aspirations: Punjab (Blue Star 1984, Longowal accord too late), Assam (movement 1979–85, Accord 1985), the North-East (Nagaland 1963, Mizo Accord 1986 as the success standard), J&K (accession to abrogation, 2019).',
        'Mandal 1990 (27 per cent OBC reservation) and Babri 1992 restructured party competition; 1989–2014 was the coalition era; 2014/2019 restored single-party majorities and reopened the dominance question.',
        'The toolkit: dominance versus democracy, accommodation versus suppression, movement-to-party conversion — apply it to every statehood, caste and federal story since.',
      ] },
    ],
  },
]

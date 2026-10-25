import type { KnowledgeTopic } from '../types'

/** Expansion pass X17 (2026-10-21): the exam-syllabus deep-dive pass, part 2 —
 *  the CUET cluster. The coverage audit (scripts/exam-coverage-audit.ts) showed
 *  CUET at 81 per cent with 36 unmapped topics; the biggest blocks were Indian
 *  history (the NCERT "Themes in Indian History" chapters the X13 trilogy
 *  deliberately left out: sources-based themes, travellers, Vijayanagara, the
 *  agrarian world, colonial towns), contemporary world politics, India since
 *  independence, and the Class 11/12 computing fundamentals (computational
 *  thinking, algorithms, digital safety, societal impacts).
 *
 *  ZERO-DUP FENCE (checked against every lesson that could overlap):
 *  - hist-ancient-india owns the political survey to the Guptas; this pass
 *    takes only the religion-and-monuments theme (Theme 4).
 *  - hist-medieval-india owns the political survey incl. Vijayanagara's politics
 *    in one line; this pass takes the SOURCES-and-city theme (Themes 5 and 7).
 *  - hist-modern-india-freedom-struggle owns Plassey-to-partition politics;
 *    this pass takes the agrarian and urban history around it (Themes 8, 10, 12).
 *  - pol-ir-theory owns IR THEORY (anarchy, realism, liberalism); this pass
 *    takes the historical post-1945/post-1991 world order (NCERT Contemporary
 *    World Politics).
 *  - soc-indian-constitution-polity owns the constitution and institutions;
 *    this pass takes the post-1947 political HISTORY (NCERT Politics in India
 *    Since Independence).
 *  - econ-macro-ad-as-indian-economy owns planning, 1991 reforms and current
 *    challenges; the polity lesson here only sketches the political context
 *    (land reforms, linguistic states) and cross-references it.
 *  Sources: NCERT Themes in Indian History I-III, Contemporary World Politics,
 *  Politics in India Since Independence, Computer Science / Informatics
 *  Practices (CBSE), and the official CUET syllabus. */
export const x17ExamSyllabusTopics: KnowledgeTopic[] = [
  /* ---------------------------------------------------------------- */
  /* 1. Thinkers, Beliefs and Buildings (CUET History Theme 4)        */
  /* ---------------------------------------------------------------- */
  {
    id: 'hist-thinkers-beliefs-buildings',
    title: 'Thinkers, Beliefs and Buildings: The Buddha, the Sangha and the Stupa',
    domain: 'Humanities',
    field: 'History',
    branch: 'Ancient & Medieval India',
    tier: 'intermediate',
    concepts: [
      'Sramana sects and the sixth-century BCE ferment',
      'The Buddha: four noble truths and the middle path',
      'The sangha: Vinaya rules, ordination, daily life',
      'Why stupas were built: relics and circumambulation',
      'Sanchi anatomy: anda, medhi, harmika, chattra, torana',
      'Aniconic symbols, Jataka tales and shalabhanjika',
      'Theravada and Mahayana; Gandhara and Mathura images',
      'How Sanchi survived while Amaravati was lost',
    ],
    words: 1971,
    readMins: 10,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'By the sixth century BCE the Ganga plain was filling with towns, coinage and arguments. Iron tools cleared the forest, punch-marked silver coins oiled long-distance trade, and the old Vedic ritual order — hymns, sacrifices, a priesthood — found itself competing in a genuine marketplace of ideas. Buddhist texts name over sixty teachers working in this world: Mahavira, who built Jainism on radical non-violence; Makkhali Gosala, whose Ajivikas taught that everything is fixed by fate; Ajita Kesakambalin, who taught that death is simply the end. Out of this crowd one order survived its rivals by building institutions as well as ideas — a teaching, a disciplined community, and monuments that could be endowed by everyone from kings to nuns. This lesson follows the NCERT theme that carries the same name: the thinkers, the sangha they built, and the buildings — above all the great stupa at Sanchi — through which their movement still speaks.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The religion-and-monuments theme is a fixture of every Indian history syllabus (CUET, UPSC, state boards), but its real teaching is method: it shows how historians read sculpture, inscriptions and architecture as evidence — not just the Buddha\'s philosophy but the donors\' inscriptions on a railing, the absent Buddha represented by an empty throne, and the accident of patronage that preserved one stupa while another was quarried away. Learning to see buildings as documents is the skill this theme actually examines.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Sramana', def: 'The "strivers" — renouncers of the Vedic household-and-sacrifice ideal who took vows of poverty and wandering; Buddhist, Jaina and Ajivika teachers all belong to this tradition.' },
          { term: 'Four Noble Truths', def: 'The Buddha\'s diagnosis in four steps: suffering exists; it has a cause (craving); the cause can be ended; and the eightfold path — right view, intention, speech, action, livelihood, effort, mindfulness, concentration — is the way. The path is the famous "middle way" between indulgence and severe self-mortification.' },
          { term: 'Sangha', def: 'The monastic order the Buddha founded: an organisation of bhikkhus (and later bhikkhunis) governed by the Vinaya Pitaka\'s rules, living on alms, retiring to monasteries each rainy season (vassa), teaching and reciting the canon.' },
          { term: 'Stupa', def: 'A hemispherical relic mound: the central anda (dome) holding a relic of the Buddha or a saint, ringed by a vedika (railing) for pradakshina — clockwise circumambulation — and marked by gateways (toranas), with a harmika and triple chattra (umbrella) crowning the structure.' },
          { term: 'Aniconic representation', def: 'Early Buddhist art\'s habit of showing the Buddha through symbols rather than a human figure: the empty throne, footprints (paduka), the Bodhi tree, the wheel of law (for the first sermon), the stupa itself.' },
        ],
      },
      {
        kind: 'para',
        text: 'Start with the teachers, because the buildings cannot be read without the doctrine. The Buddha — Siddhartha of the Shakya clan, teaching around the fifth century BCE in the modern Bihar–Uttar Pradesh borderland — accepted the shared sramana premises (karma, rebirth, the possibility of liberation) but rejected their extremes. Liberation, he taught, comes not from ritual sacrifice (the Vedic answer) nor from fatalism (the Ajivika answer) nor from self-torture (the path he himself tried and abandoned), but from understanding how craving constructs suffering — and then dismantling it through disciplined conduct and meditation. Crucially for the history that follows, he preached in ordinary speech, Prakrit and Pali rather than Sanskrit, and insisted that the sangha admit men of any caste. The doctrine was designed to travel beyond the elite; the institutions made sure it did.',
      },
      {
        kind: 'para',
        text: 'The sangha deserves as much attention as the sermon. The Vinaya Pitaka records hundreds of rules covering everything from ordination (upasampada) to robe-wearing and eating hours; breaches were confessed and penanced, not sacrificed away. Women were admitted — the tradition remembers Mahaprajapati Gautami, the Buddha\'s foster mother, prevailing through his disciple Ananda\'s intervention — though with extra rules that reflected the society\'s assumptions more than the doctrine\'s logic. Around the monks stood the laity: merchants, artisans and kings who gave food, cloth, land and monasteries (dana), took the five lay precepts, and earned merit — the transaction that would later build every stupa in this lesson. The Buddha\'s order, in other words, was a working institution with a revenue model of voluntary generosity, which is why it outlived sects with equally good arguments.',
      },
      {
        kind: 'para',
        text: 'Now the buildings. The stupa began as a simple burial mound in an old megalithic tradition; what made it Buddhist was the relic — a portion of the Buddha\'s remains (or of a revered elder, or a holy visitor\'s gift like a bone-token) enshrined in the core. Ashoka, the Mauryan emperor whose empire the ancient-India lesson surveys, is credited by tradition with opening the original relics and distributing them into thousands of stupas across the subcontinent — imperial patronage on a scale no merchant could match. The architecture encodes the ritual: the worshipper enters through a torana, walks clockwise around the mound keeping it on the right (pradakshina), and leaves; the dome is the cosmic egg, the harmika and umbrella above it mark the axis of the universe, and the railing separates sacred from ordinary space. No congregation hall, no altar — a stupa is walked, not sat in.',
      },
      {
        kind: 'para',
        text: 'Sanchi, on a hill near Bhopal, is the textbook case because its full set survives: the Ashokan pillar at its base, the stone-cased dome enlarged under the Shungas, and the four carved gateways added around the first century BCE under the Satavahanas. Reading the gateways is the exam\'s favourite exercise. The Buddha himself appears nowhere as a figure — instead, an empty throne, footprints, a wheel, a tree. Around him teems a whole visual world: Jataka tales (the 500-plus stories of the Buddha\'s previous lives as kings, animals and merchants) told in narrative panels; the shalabhanjika — a woman causing a tree to bloom by touching it, an ancient fertility spirit repurposed as an auspicious guardian at the gateways; yakshas, elephants, horses and worshippers in contemporary dress. And cut into the railing are short donative inscriptions — hundreds of them — recording gifts by monks, nuns, guilds, village communities and one "ivory-carvers of Vidisha". The sculpture is not decoration: it is a ledger of ordinary Buddhists buying merit, which is exactly why historians can use it as social evidence.',
      },
      {
        kind: 'para',
        text: 'The tradition did not stand still. By roughly the turn of the Common Era a great divide had opened between the older strain, preserved in Pali and now called Theravada (the "way of the elders", once dismissively labelled Hinayana), and the Mahayana ("great vehicle"), which rewrote the goal: not solitary liberation but the compassion of bodhisattvas — beings who postpone their own nirvana to save others — and a Buddha who is cosmic rather than merely historical. With the Mahayana came the anthropomorphic Buddha image, produced in two great schools: Gandhara, in the far north-west, carving grey schist Buddhas with Greco-Roman drapery and realistic faces; and Mathura, in the Ganga plain, working red sandstone into a fuller, indigenous body. Monasteries carried both along the trade routes — to Sri Lanka (via Ashoka\'s son Mahinda and daughter Sanghamitra), Central Asia and China; the silk-road exchange lesson follows that traffic in detail.',
      },
      {
        kind: 'para',
        text: 'The final panel is a lesson in the politics of survival. Amaravati, in Andhra Pradesh, was arguably the richest stupa of all — its marble reliefs are masterpieces — yet it exists today mainly as fragments in London and Chennai. "Discovered" by Colin Mackenzie around 1797 and quarried for building stone by locals who had forgotten what it was, its sculptures were carted off by officials in the 1840s; the site itself was gutted before anyone thought to protect it. Sanchi escaped because the Begums of Bhopal — Shahjehan Begum and her successor Sultan Jehan Begum — funded its conservation and hosted John Marshall\'s definitive study in the 1910s, and because its remote hill attracted no quarrymen. Same religion, same century, opposite fates: heritage survives by patronage and luck, and historians inherit whichever combination the dice deliver.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Reading a Torana Panel',
        steps: [
          'The panel: a torana architrave at Sanchi shows a vast empty throne beneath a tree, surrounded by worshippers with folded hands and celestial figures scattering flowers.',
          'Identify the absence: no human figure occupies the throne — this is aniconic representation, so the scene shows the Buddha without showing him.',
          'Decode the symbols: the tree identifies the scene as the enlightenment at Bodh Gaya; the throne is the Buddha\'s presence; the worshippers in stitched turbans and waist-cloths are lay devotees, giving a snapshot of first-century BCE dress.',
          'Read the edges: a running inscription names the donor — a nun, a guild, or a village body — evidence for who paid for Buddhism.',
          'State what the panel proves: by this date the Buddha is present-but-unfigured (pre- or early-image phase), worship is circumambulatory and collective, and patronage is socially broad — three exam-ready inferences from one carving.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Which symbol specifically represents the Buddha\'s FIRST sermon at Sarnath?',
          options: ['The Bodhi tree', 'The wheel (dharmachakra)', 'The empty throne', 'The stupa dome'],
          answer: 1,
          explain: 'The tree marks enlightenment, the throne his presence generally — but the wheel of law set in motion (dharmachakra pravartana) is the fixed symbol for the first sermon.',
        },
        {
          q: 'The Buddha preached in Prakrit and Pali rather than Sanskrit mainly because…',
          options: ['Sanskrit did not exist yet', 'he wanted the teaching accessible beyond a learned elite', 'his rivals held copyright over Sanskrit', 'the sangha forbade literate members'],
          answer: 1,
          explain: 'Language choice was strategy: ordinary speech carried the message to households, merchants and women outside the Sanskrit-knowing elite — a key reason the order spread.',
        },
        {
          q: 'The Ajivikas, led by Makkhali Gosala, taught that…',
          options: ['liberation comes through extreme fasting', 'everything is predetermined by fate (niyati)', 'the soul is identical with the body', 'ritual sacrifice is the only path'],
          answer: 1,
          explain: 'Ajivika doctrine was strict determinism — no effort changes fate — the precise opposite of the Buddha\'s insistence that disciplined effort ends suffering.',
        },
        {
          q: 'Sanchi survived largely intact while Amaravati was dismantled because…',
          options: ['Amaravati was never finished', 'the Begums of Bhopal funded Sanchi\'s conservation and its hillside location protected it', 'Buddhists abandoned Amaravati first', 'British law protected Sanchi from 1797'],
          answer: 1,
          explain: 'Shahjehan and Sultan Jehan Begum bankrolled Marshall\'s work; Amaravati had no such patrons and was quarried before conservation thinking arrived.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling a stupa a temple — it is a relic shrine walked clockwise, not a congregation hall. Assuming aniconic art means "no art" or that the artists could not sculpt figures — the same gateways are full of figures, just not of the Buddha. Dating the Buddha image to the Buddha\'s lifetime — anthropomorphic images begin roughly five centuries after his death, with the Mahayana. And reading donative inscriptions as royal propaganda — most Sanchi donors were ordinary people, which is exactly what makes them valuable.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the ancient-India lesson for the Mauryan world that first patronised Buddhism. Natural follow-ons: the medieval-India lesson for Bhakti and Sufi devotional cultures (the later, Hindu-Islamic analogues of this story), and the silk-road lesson for how these monasteries became the subcontinent\'s cultural export network.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Sixth-century BCE urbanisation produced a sramana marketplace of ideas — Jains, Ajivika fatalists, materialists — out of which the Buddha\'s middle-path teaching won by institution-building.',
        'Doctrine in brief: four noble truths, eightfold path, karma as ethics rather than ritual, preaching in Prakrit/Pali, caste-open sangha.',
        'The sangha ran on Vinaya rules and lay dana — the merit economy that financed everything in this lesson.',
        'A stupa is a relic mound for pradakshina: anda, medhi, harmika, chattra, vedika, torana — each part read as symbol, not decoration.',
        'Sanchi\'s gateways: aniconic Buddha symbols + Jataka tales + shalabhanjika + hundreds of donor inscriptions = social history in stone.',
        'Theravada vs Mahayana split; Gandhara vs Mathura image schools; spread through Sri Lanka and the silk roads.',
        'Sanchi (Bhopal patronage) vs Amaravati (quarried away): preservation is political and accidental — a warning against reading survival as importance.',
      ] },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* 2. Travellers + Vijayanagara (CUET History Themes 5 and 7)       */
  /* ---------------------------------------------------------------- */
  {
    id: 'hist-travellers-vijayanagara',
    title: 'Through the Eyes of Travellers: Foreign Accounts and the Imperial Capital Vijayanagara',
    domain: 'Humanities',
    field: 'History',
    branch: 'Ancient & Medieval India',
    tier: 'intermediate',
    concepts: [
      'Al-Biruni: the comparative scientist of Kitab-ul-Hind',
      'Ibn Battuta and the Rihla\'s literature of marvels',
      'Bernier: the French physician\'s property critique',
      'Reading travellers against the grain',
      'Founding Vijayanagara, 1336: dynasty and defence',
      'Sacred centre, royal centre and the urban core',
      'Water engineering and temple economies at Hampi',
      'Krishnadeva Raya and the Mahanavami spectacle',
      'Talikota 1565 and the city that was never rebuilt',
    ],
    words: 2358,
    readMins: 12,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'A surprising share of what historians know about pre-modern India was written by visitors. Merchants, envoys, pilgrims and job-seekers crossed into the subcontinent for their own reasons and sent home books about what they saw — and because they noticed what locals took for granted (and missed what locals thought obvious), their accounts are indispensable and treacherous in equal measure. NCERT builds an entire theme around the three most famous: Al-Biruni, Ibn Battuta and François Bernier. A second theme belongs to the city that foreign observers describe best — Vijayanagara, the "city of victory" on the Tungabhadra, whose ruins at Hampi are today a World Heritage site and whose imperial politics the medieval-India lesson covers separately. This lesson takes the observers and the observed together: what each traveller saw, why he saw it that way, and the city their combined testimony reconstructs.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Source criticism is the examined skill here. Every syllabus asks the same double question: what do travellers tell us about India, and what do they tell us about themselves? Al-Biruni\'s comparisons, Ibn Battuta\'s marvels and Bernier\'s critiques are three distinct genres with three distinct blind spots — and the historian\'s method is to read each against the grain. The same method then applies to every source you will ever meet, from court chronicles to newspaper reports.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Kitab-ul-Hind', def: 'Al-Biruni\'s "Book of India" (c. 1030s): a systematic account of Indian religion, philosophy, astronomy and metrics in Arabic, built on Sanskrit sources he learned to read, organised as a neutral comparative study.' },
          { term: 'Rihla', def: '"The journey" — Ibn Battuta\'s travelogue (1350s), the classic of Arabic "marvels of the world" literature: part autobiography, part geography, part wonder-cabinet of what a fourteenth-century cosmopolitan found astonishing.' },
          { term: 'Sacred centre / royal centre', def: 'The two zones of Vijayanagara\'s urban core: a ritual landscape of temples along the river (Virupaksha, Hemakuta hill, Vitthala) and, south of it, the fortified palace zone with audience halls, the Mahanavami platform and elephant stables.' },
          { term: 'Amara-nayaka system', def: 'Vijayanagara\'s military-administrative machine: commanders (nayakas) held territories and remitted tribute and troops to the raya — a decentralised structure that worked brilliantly and, when loyalty frayed, dangerously.' },
        ],
      },
      {
        kind: 'para',
        text: 'Al-Biruni (973–1048) came from Khwarezm in Central Asia and entered India in the train of Mahmud of Ghazni\'s court — as a captive scholar, by most accounts, which makes his fairness the more striking. He devoted years to learning Sanskrit, worked with brahmin informants, and then wrote the Kitab-ul-Hind as a comparative science: Indian beliefs and practices set beside Islamic and Greek ones, with the explicit method that a fair scholar verifies before he judges. He named the barriers he faced — the difficulty of Sanskrit, mutual religious suspicion, the reluctance of learned men to share knowledge with outsiders — and then dismantled them one by one. His verdicts cut both ways: he defended Indian mathematics and astronomy against Persian condescension, and criticised caste rigidity and what he saw as scientific stagnation in the same measured tone. Historians treat him as the best pre-modern foreign observer of India precisely because he tried to check his sources.',
      },
      {
        kind: 'para',
        text: 'Ibn Battuta (1304–1368/69) was a very different animal: a Moroccan legal scholar with a traveller\'s addiction, whose Rihla narrates twenty-nine years and (by his own count) about 75,000 miles across the Islamic world and beyond. He reached Delhi in 1333, was appointed qazi (judge) by Muhammad bin Tughlaq — the sultan whose experiments the medieval-India lesson dissects — and describes both the Sultan\'s terrifying generosity (gifts then confiscations) and the infrastructure that impressed him most: the postal system, with mounted couriers relaying and barefoot runners sprinting between stations, which he judged faster than anything in the West. His India is a cabinet of marvels — the coconut tree that seems to offer "a different fruit for every meal", the paan he learned to chew, the bazaars, the sati he witnessed with a critic\'s eye. The Rihla\'s genre is the key to reading it: it existed to amaze, its marvels followed conventions, and everything in it must be filtered through what a pious fourteenth-century Moroccan expected to see.',
      },
      {
        kind: 'para',
        text: 'François Bernier (1620–1688), a French physician, served at the Mughal court from 1656 to 1668 — physician, crucially, to Dara Shikoh, the crown prince and liberal scholar who lost the succession war to Aurangzeb. His letters, published in Paris and written partly for Colbert (Louis XIV\'s minister), compare Mughal India with Europe on Europe\'s terms. His central thesis: because the Mughal king claimed ownership of all land, no private property existed; without secure property, no improvement — so the countryside was strip-mined, the "middle class" absent, and cities rose and fell like camps whenever the court moved. The thesis was influential (Voltaire and Montesquieu absorbed images of "Oriental despotism" through such accounts) and it was also wrong in a productive way: modern historians showed that Bernier forced jagirs — revenue assignments, not ownership — into a European property framework, and that he described a real fiscal instability with the wrong label. Bernier also left unmatched details of court life, harens, sati and the philosophy circles of his patron. His pages on Dara Shikoh remain a chief source for the prince\'s intellectual world.',
      },
      {
        kind: 'para',
        text: 'So how does one read a traveller? Ask five questions. Who is writing — a captive scientist (Al-Biruni), a marvel-hunting jurist (Ibn Battuta), a physician writing for a French minister (Bernier)? When, and under whose patronage? For which audience, in which genre with which conventions? What did the writer come pre-disposed to see — and what did he conspicuously not notice? And what corroboration exists — coins, inscriptions, archaeology, other accounts? The traveller is a lens, not a window: the exam question is always partly about the glass.',
      },
      { kind: 'heading', text: 'Vijayanagara: the City the Visitors Describe' },
      {
        kind: 'para',
        text: 'Turn now to the city. In 1336, two brothers of the Sangama family — Harihara and Bukka — founded a fortified city on the south bank of the Tungabhadra, in a granite landscape whose natural defences (river on the north, hills all around) the site plan exploits deliberately; tradition credits the sage Vidyaranya with blessing the venture. The name means "city of victory", and the kingdom it anchored grew, over two centuries and four dynasties (Sangama, Saluva, Tuluva, Aravidu), into the largest power of the peninsula — the southern counterweight to the Bahmani sultanate and its successor states, in the long confrontation the medieval-India lesson surveys. The ruins now called Hampi (from Pampa, the river goddess of local tradition) stretch over some twenty-five square kilometres: no other Indian site shows a whole imperial city — walls, palace platforms, aqueducts, bazaars, suburban temples — in this state of legibility.',
      },
      {
        kind: 'para',
        text: 'The foreign witnesses are precisely why the city is so well understood. The Italian Nicolo Conti described it around 1420; the Persian envoy Abdur Razzaq — whose account of his 1440s mission under Devaraya II is a masterpiece of wide-eyed diplomacy — marvelled that the city was "such that the pupil of the eye has never seen"; the Portuguese chronicler Duarte Barbosa noted its trade around 1516. The two most valuable are horse traders: Domingo Paes, who visited under Krishnadeva Raya around 1520–22 and called it "the best-provided city in the world", describing markets where rubies and diamonds were sold openly by weight; and Fernao Nuniz, who stayed in the 1530s and wrote a connected chronicle of the dynasties and wars. Add inscriptions, coins and the magnificent sculpture of the Vitthala and Virupaksha temples, and the historian can triangulate the travellers\' claims.',
      },
      {
        kind: 'para',
        text: 'What the combined testimony reconstructs is an urban plan with three nested zones. Along the river runs the sacred centre: the state temple of Virupaksha (the dynasty\'s chosen deity, still in worship), the shrine-cluttered Hemakuta hill, and south-east of it the Vitthala temple with its famous stone chariot and musical pillars. Behind the sacred centre, separated by irrigated valleys, lies the royal centre: the walled palace zone with its audience hall, the great stepped Mahanavami platform from which the king displayed himself, masonry elephant stables, and pleasure pavilions like the so-called Lotus Mahal — secular buildings in an Indo-Islamic idiom that says, stylistically, that this Hindu kingdom fought its Muslim neighbours and traded aesthetics with them simultaneously. Around both lies the greater metropolitan region: a hinterland of tank-irrigated fields (the Kamalapuram tank and stone aqueducts fed by river channels kept the whole core watered), temple towns and military colonies. Temples were the economic hubs — receiving land grants, employing weavers and smiths, running market streets — which is why "sacred centre" is an economic description, not merely a religious one.',
      },
      {
        kind: 'para',
        text: 'The city\'s zenith under Krishnadeva Raya (r. 1509–1529) — the Tuluva dynasty\'s greatest raya — is Paes\'s subject: the nine-night Mahanavami (Dussehra) festival, when the whole imperial order paraded past the platform — wrestlers, processions of caparisoned elephants, regiments of the army bought with Portuguese horses and firearms, nobles presenting tribute, ritual animal sacrifices, and illumination by night. The court was as literary as it was military: the raya himself wrote Telugu poetry, and his assembly of the Ashtadiggajas ("eight elephants" of Telugu letters) included Allasani Peddana. The amara-nayaka system moved the tribute upward; the Battle of Raichur (1520) against Bijapur demonstrated the military result — and the system\'s structural weakness, ambitious nayakas, would matter after the great king died.',
      },
      {
        kind: 'para',
        text: 'The end came with imperial overreach. By the 1560s the crafty regent Rama Raya was intervening in the succession quarrels of every Deccan sultanate at once — until the sultans, normally at each other\'s throats, combined. At Talikota (Rakkasa–Tangadi) in January 1565 the allied armies of Ahmadnagar, Bijapur, Golconda and Bidar destroyed the Vijayanagara army and killed Rama Raya. The victors occupied and sacked Hampi for months; the Aravidu dynasty carried on from Penukonda and Chandragiri for another eighty years, but the city itself was never rebuilt — perhaps deliberately, as a lesson. When the British civil servant Robert Sewell titled his 1900 reconstruction "A Forgotten Empire", he was naming how completely the city had dropped from memory; Hampi entered the UNESCO World Heritage list in 1986, and its modern rediscovery — including Alexander Greenlaw\'s calotype photographs of 1856, made before vegetation and quarrying altered the ruins — is part of the heritage-politics story this theme keeps teaching.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Comparing Two Witnesses of One City',
        steps: [
          'The problem: Paes (c. 1520) writes that Hampi is "the best-provided city in the world"; Nuniz (1530s) describes a war-scarred court in decline. Same city, fifteen years apart — which do you believe?',
          'Check the authors: Paes was a visiting horse trader under a strong king at the empire\'s peak; Nuniz a longer-resident trader writing during succession troubles after Krishnadeva Raya\'s death.',
          'Check corroboration: inscriptions and architectural phases confirm massive public works before 1529 and disruption after; both accounts fit the independent chronology.',
          'Resolve: the accounts are not contradictory but sequential — the city\'s peak and its slide. The historian\'s job is dating each claim, not choosing a winner.',
          'Generalise: whenever travellers disagree, first ask whether they describe different moments — only then whether one of them is unreliable.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Al-Biruni\'s Kitab-ul-Hind is considered exceptionally reliable among pre-modern foreign accounts mainly because he…',
          options: ['never criticised anything Indian', 'learned Sanskrit, consulted Sanskrit sources and applied a comparative, verifying method', 'wrote after consulting Ibn Battuta', 'was Hindu by birth'],
          answer: 1,
          explain: 'His method — language, direct textual study, explicit comparison without polemic — is closer to modern philology than any contemporary\'s.',
        },
        {
          q: 'The Mahanavami (Dussehra) celebrations at Vijayanagara, described in loving detail by Paes, primarily displayed…',
          options: ['the nayakas\' rebellion', 'the ritual and military supremacy of the raya before his entire political order', 'Portuguese naval power', 'the collapse of the amara-nayaka system'],
          answer: 1,
          explain: 'The nine-night festival was the annual theatre of empire: tribute, regiments, sacrifices and illumination performed the hierarchy that kept the federation intact.',
        },
        {
          q: 'Modern historians regard Bernier\'s claim that Mughal India had "no private property" as…',
          options: ['fully accurate', 'a misreading — he equated jagirs (revenue assignments) with crown ownership of all land', 'a description of Vijayanagara', 'a quote from the Ain-i-Akbari'],
          answer: 1,
          explain: 'He mapped one real institution — transferable revenue rights — onto a European property grid and drew sweeping conclusions; useful eyewitness, faulty theory.',
        },
        {
          q: 'After Talikota (1565), the city of Vijayanagara was…',
          options: ['immediately rebuilt by the Aravidus', 'sacked and never rebuilt, though the dynasty survived from new capitals', 'converted into the Bahmani capital', 'abandoned before the battle'],
          answer: 1,
          explain: 'The Aravidu dynasty continued from Penukonda and Chandragiri; Hampi stayed a ruin — the "forgotten empire" Sewell later excavated from documents.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Taking marvel literature as neutral reportage — the Rihla was written to astonish. Dating all three travellers to one era: Al-Biruni is eleventh century, Ibn Battuta fourteenth, Bernier seventeenth — their Indias are different worlds. Mixing up the city\'s zones (sacred centre along the river, royal centre south of it) or the dynasties (Sangama → Saluva → Tuluva → Aravidu). And assuming foreign observers are "objective" because they are outsiders — Bernier\'s Europe-shaped questions prove the opposite.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the medieval-India lesson for the Sultanate and Mughal frame these travellers visited. Natural companions: the historians\' methods in the ancient-India lesson (epigraphy, coins) and the Mughal agrarian world in the next lesson, where Bernier\'s property thesis meets the actual revenue records. The silk-road lesson carries the merchant networks that moved men like these.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Three great pre-modern observers: Al-Biruni (Kitab-ul-Hind, comparative method, 11th c.), Ibn Battuta (Rihla, marvels + qazi under Muhammad bin Tughlaq, 14th c.), Bernier (letters for Colbert, no-private-property thesis, 17th c.).',
        'Method: read every traveller as a lens — author, date, patron, genre, predispositions, corroboration.',
        'Bernier\'s property critique is influential but category-mistaken: jagirs are revenue assignments, not the abolition of ownership.',
        'Vijayanagara: founded 1336 by Harihara and Bukka (Sangama); four dynasties; granite-and-river defences; Hampi = the ruins today.',
        'Urban plan: sacred centre (Virupaksha, Hemakuta, Vitthala) + royal centre (Mahanavami platform, stables, Lotus Mahal) + tank-irrigated hinterland; temples as economic engines.',
        'Witnesses: Conti, Abdur Razzaq, Barbosa, and above all Paes and Nuniz — triangulated with inscriptions and architecture.',
        'Krishnadeva Raya (1509–29): Raichur 1520, Ashtadiggajas, amara-nayaka tribute machine, the Mahanavami spectacle.',
        'Talikota 1565: sultanate alliance, sack, never rebuilt; Aravidu succession; Sewell\'s "Forgotten Empire" and UNESCO 1986.',
      ] },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* 3. Peasants/Zamindars + Colonial countryside + colonial towns    */
  /*    (CUET History Themes 8, 10, 12)                               */
  /* ---------------------------------------------------------------- */
  {
    id: 'hist-indian-countryside-towns',
    title: 'Peasants, Zamindars and the Colonial City: The Indian Countryside from the Mughals to the British',
    domain: 'Humanities',
    field: 'History',
    branch: 'Colonial & Modern India',
    tier: 'intermediate',
    concepts: [
      'The Mughal village: panchayat, muqaddam, patwari',
      'Khud-kashta and pahi-kashta peasants; jins-i-kamil cash crops',
      'Zamindars as lords, brokers and agents of the state',
      'Ain-i-Akbari: jama, hasil and the zabti settlement',
      'Colonialism and the countryside: the Permanent Settlement of 1793',
      'Ryotwari and Mahalwari alternatives',
      'Deccan Riots of 1875 and the moneylender',
      'Indigo advances and the Blue Rebellion of 1859-60',
      'Colonialism and Indian towns: ports, cantonments, hill stations',
      'Municipalities, census and the segregated city',
    ],
    words: 2768,
    readMins: 14,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Almost every Indian who ever lived, lived in a village — yet states old and new were built on extracting what villages produced, and the two regimes that kept the fullest records, the Mughal and the British, therefore organised their empires around the agrarian question. NCERT pairs its Mughal agrarian theme with two colonial ones: the countryside under Company rule and the new colonial towns, and the pairing teaches a single arc — how the village was governed, measured, taxed and finally shaken by revolt; and how the city, colonialism\'s second face, grew beside it. This lesson runs that arc from the sixteenth-century village to the twentieth-century metropolis. The political conquest that frames it — Plassey to partition — belongs to the modern-India lesson; here the subject is land, revenue and urban form.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Agrarian structures explain both the strength and the brittleness of every Indian state: the Mughal fiscal machine, the Company\'s search for a "settled" revenue base, the riots and rebellions that followed when credit and extraction tightened. These chapters also train a distinctive skill — reading fiscal records (the Ain, settlement reports, crop statistics) as social history, and reading city plans as political statements. CUET, UPSC and state syllabi mine all three themes for exactly that reason.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Raiyat', def: 'A peasant cultivator — the person actually working the land and paying revenue or rent, as distinct from the intermediaries above him. Resident (khud-kashta) raiyats held hereditary claims in their village; non-resident (pahi-kashta) raiyats farmed wherever cash advances made it worth moving.' },
          { term: 'Jama vs hasil', def: 'The Mughal fiscal ledger\'s two columns: jama, the assessed revenue demand (a paper figure with huge political weight), and hasil, the amount actually collected. The gap between them is where the historian looks for drought, flight and fiscal fiction.' },
          { term: 'Permanent Settlement', def: 'Cornwallis\'s 1793 regulation for Bengal, Bihar and Orissa: zamindars recognised as landowners paying a land tax fixed forever, under a "sunset clause" — payment due by sunset of a set date or the estate auctioned.' },
          { term: 'Ryotwari / Mahalwari', def: 'The two southern and northern alternatives to Permanent Settlement: ryotwari (Munro and Read, Madras/Bombay) settled revenue directly with each individual cultivator, revised periodically; mahalwari (from Holt Mackenzie\'s 1819 regulation, North-Western Provinces) settled with the village (mahal) as a jointly liable unit.' },
        ],
      },
      { kind: 'heading', text: 'The Mughal Countryside' },
      {
        kind: 'para',
        text: 'Enter a sixteenth-century village. Its affairs were run by a panchayat — an assembly of elder male household heads, usually drawn from the dominant caste of the locality — which regulated land use and caste norms, and could fine or ostracise (the village\'s ultimate sanction: expulsion from community life, sometimes formalised by a symbolic breaking of a pot). Alongside it worked the village\'s officers: the muqaddam or headman (who helped collect revenue and organised defence, and was paid with reduced revenue or grants), and the patwari (accountant, keeper of field-by-field records). Artisan and service families — weavers, potters, smiths, washers, carpenters — were bound to the village by hereditary exchange: in many regions they took a fixed share of the harvest (the maharashtrian baluta), which made the village a single interdependent economy rather than a set of separate businesses. Historians estimate that non-cultivating groups consumed a large fraction of the produce — the village was nobody\'s idyll, but it was a system.',
      },
      {
        kind: 'para',
        text: 'Peasants came in kinds. The khud-kashta held their land in the village where they lived and were tied by generations of local claim; the pahi-kashta were mobile professionals, moving to zones of cash-crop expansion where lenders advanced seed and money against the harvest. Mobility was rational: where the state pushed cash crops — the "perfect crops", jins-i-kamil, like cotton, sugarcane and indigo that sold in markets rather than kitchens — returns were higher and so were risks. Above the peasants stood the zamindars, and the exam\'s most important correction is that "zamindar" does not mean "landlord" in the modern sense: these were hereditary revenue intermediaries who commanded armed retainers (often recruited from the peasantry itself), kept fortified houses (qilachas), and held a defined share of the revenue they collected. Some were old chieftains folded into the empire; all were, in effect, the state\'s subcontractors — and when subcontractors kept armies, the boundary between lordship and rebellion was negotiable. The Mughal system did not abolish them; it priced them.',
      },
      {
        kind: 'para',
        text: 'How the empire priced the countryside is visible in the most remarkable fiscal document of the pre-modern world: Abul Fazl\'s Ain-i-Akbari (1595), the statistical companion to Akbar\'s administration that the medieval-India lesson introduces. The Ain tabulates, province by province, the jama (assessed revenue) of each region, the schedules of the zabti settlement — Todar Mal\'s system of measuring fields, averaging prices and yields over ten years (the dahsala), and setting a cash demand per crop — and the split between khalisa (crown lands whose revenue went to the treasury) and jagirs (assignments to mansabdars, again explained in the medieval lesson). Two cautions make the reading honest. First, jama is an assessment, not reality: monsoons, flight and officials\' optimism all moved hasil below it. Second, the Ain\'s neat tables describe the regime\'s ambition more than the village\'s experience — which is exactly why historians triangulate them with village documents, petitions and travellers. Fiscal statistics are evidence of the state, and only through inference of the society.',
      },
      { kind: 'heading', text: 'Colonialism and the Countryside' },
      {
        kind: 'para',
        text: 'The Company that took over Bengal\'s diwani in 1765 (the transaction the modern-India lesson narrates) inherited a revenue system and broke it. Experiments in auctioning the revenue to five-year farmers collapsed into famine-era extraction; in 1793 Cornwallis tried permanence. The Permanent Settlement declared Bengal\'s zamindars private landowners whose tax obligation was fixed for ever — the theory being that secure ownership would turn them into improving English-style landlords, and a fixed demand would give the state a predictable income. The sunset clause supplied the discipline: each year\'s payment was due by a fixed sunset, and default meant auction of the estate. The outcome humiliated the theory. The demand was pitched so high — and the zamindars, many of them new purchasers of titles rather than old lords, so unprepared — that estates went under the hammer in the first decades, to the point where much old zamindari was simply replaced by speculators from Calcutta. Later, as prices rose through the nineteenth century, the freezing of the state\'s share converted zamindars into rentier winners — but below them the raiyats and under-raiyats, and above the cultivators the rich peasant jotedars of Bengal, actually ran the countryside: the zamindar increasingly collected rent he could not enforce, through layers of tenure the law barely mapped. In the Bengal of the Permanent Settlement, ownership and power quietly came apart.',
      },
      {
        kind: 'para',
        text: 'The rest of the subcontinent was settled differently. In the Madras and Bombay presidencies, Munro and Read built the ryotwari system: survey the fields, register the cultivator, settle the revenue directly with each ryot, and revise it periodically — in principle a state-of-the-art liberal reform that made the peasant the taxpayer. In practice the demand was set near the ceiling, revision became an instrument of rigidity, and when harvests failed the ryot owed regardless. The North-Western Provinces (later the United Provinces) got mahalwari: revenue settled with the village as a unit through its headmen, jointly liable. Three systems, one constant — the state\'s hunger for a land revenue that in good decades financed wars and in bad decades stripped the villages. The great crop reports of the nineteenth century record the consequence: not misery everywhere, always — but a countryside whose margin for error had been requisitioned.',
      },
      {
        kind: 'para',
        text: 'Credit made the margin thinner. The classic case is the Deccan Riots of 1875. The American Civil War (1861–65) had cut off Lancashire\'s cotton supply, and Bombay Deccan ryots rode a five-year cotton boom on borrowed money — the moneylender (sahukar) advancing seed and cash against the next harvest. When the war ended and prices collapsed, the sahukars called in loans and moved from mortgage to foreclosure; the ryots, many newly literate in their rights, answered with a movement that was not aimed at the British at all: village after village social-boycotted the moneylenders, and crowds seized and publicly burnt the debt bonds — the paperwork of their subjection. The government appointed the Deccan Riots Commission, whose report conceded the ryots\' case; the Deccan Agriculturists Relief Act (1879) restricted imprisonment for debt and tamed the courts\' foreclosure machinery. The episode became a template for understanding colonial rural protest: the enemy named was local, the causes structural, and the state was dragged in as adjudicator of last resort.',
      },
      {
        kind: 'para',
        text: 'The indigo system showed the same structure with a private protagonist. Bengal\'s indigo planters — European firms feeding the dye demand of European textile mills — bound ryots to cultivate indigo through advances (the dadni system): a loan at planting against delivery of the crop at a price the planter dictated. The crop exhausted the soil and the price never cleared the debt, so the advance worked as a trap that peasants could refuse only by fleeing or fighting. In 1859–60 they fought: the Blue Rebellion, in which ryots refused sowings, planters\' agents were attacked, and — decisively — the Bengali intelligentsia took up the ryots\' cause, culminating in Dinabandhu Mitra\'s play Nil Darpan ("The Indigo Mirror", 1860) and the Reverend James Long\'s fining for circulating its English translation. An Indigo Commission followed; planters began winding down indigo in Bengal, and the episode entered nationalist memory as proof that organised rural grievance plus urban publicity could move the state — a rehearsal, twenty years early, for the methods of the freedom struggle this library covers elsewhere. The pattern repeated in the jute economy of the twentieth century: a wartime price boom, an expansion of acreage on credit, and a depression collapse that the next lesson\'s macroeconomics explains.',
      },
      { kind: 'heading', text: 'Colonialism and Indian Towns' },
      {
        kind: 'para',
        text: 'Colonial urbanism was the second face of the same regime. Three fortified port cities anchored it — Madras (founded 1639, with Fort St George at its core), Bombay (seven islands passed to the English crown in 1661 as Portuguese royal dowry and leased to the Company for ten pounds a year) and Calcutta (Job Charnock\'s factory settlement of 1690, capital of British India from 1772). Around them the map filled with new town types: cantonments — military stations like Meerut and Bangalore, laid out on drill-ground geometry beside a "civil lines" for officers and officials, segregation built into the street plan; hill stations — Simla, Ootacamund, Darjeeling — which began as sanitariums where the climate theory of the day said Europeans recovered their health, and became summer capitals where the government itself migrated annually to rule from the cool; railway towns growing around junctions and workshops; and, crowning the era, New Delhi — announced at the 1911 Durbar, designed by Edwin Lutyens and Herbert Baker on the Raisina hill, and inaugurated in 1931 as an imperial capital whose axis and arches were meant to speak permanence (the same decade, as it turned out, that the freedom struggle made permanent). Old towns told the opposite story: Surat, the seventeenth century\'s great western port, declined as Bombay rose; the Mughal courts\' cities decayed as their patrons fell. Urban India was being rebuilt, not simply added to.',
      },
      {
        kind: 'para',
        text: 'Inside the cities, space itself became an argument. The "white town" — the fortified, drained, treed quarter of Europeans — faced the "black town" of native bazaars and chawls, a vocabulary of planning that decreed whose environment mattered. Late-century institutions softened the line without erasing it: municipal corporations (after Ripon\'s 1882 resolution on local self-government, still the milestone of Indian municipal history) ran drains, water and street-lighting with Indian councillors and rate-payers; the Bombay plague of 1896 produced City Improvement Trusts with powers to demolish and rebuild; and the census — decennial from 1881, its 1901 round directed by H. H. Risley — counted the cities into categories, above all caste, that politics would soon fight over. Meanwhile the cities filled with the people who would lead that fight: mill workers in Bombay\'s chawls, merchant communities — Parsi, Marwari, Chettiar — whose philanthropy built hospitals and universities, students in the new colleges, and a vernacular press whose public sphere the modern-India lesson follows. By 1901 barely one Indian in ten lived in a town; but the town, disproportionately, produced modern India.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Following a Fiscal Fiction through the Records',
        steps: [
          'The problem: a district\'s jama in the Ain-i-Akbari is 40 lakh dams, but a later Persian chronicler records hasil of 25 lakh for a famine decade. What happened — and how do you know what to believe?',
          'Source-critique the jama: it is a ten-year-price average assessment, set in cash, politically inflated by the need to show a flourishing province; it is the state\'s ambition, not a harvest report.',
          'Source-critique the hasil: collected figures understate reality in their own way — remissions, officials\' pocketing, and revenue "migrated" between years all distort the ledger.',
          'Corroborate: independent evidence — grain-price series, famine narratives, village-level documents — should agree on the scale of the crisis before you infer "the famine cut collections by a third".',
          'Conclude: neither number is "the truth"; the historian\'s finding is about the gap — and the general lesson is that fiscal documents must be read as documents of the state\'s expectations before they are used as measures of the economy.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In the Ain-i-Akbari, the difference between jama and hasil is the difference between…',
          options: ['crown lands and jagirs', 'revenue assessed and revenue actually collected', 'cash crops and food crops', 'khud-kashta and pahi-kashta peasants'],
          answer: 1,
          explain: 'Jama is the assessed demand, hasil the collection — and the historian\'s clues live in the gap between them.',
        },
        {
          q: 'The "sunset clause" of the Permanent Settlement (1793) required that…',
          options: ['revenue be revised every sunset year', 'zamindars pay the year\'s revenue by a fixed date or lose the estate at auction', 'peasants migrate after harvest', 'jagirs return to the khalisa annually'],
          answer: 1,
          explain: 'The clause was the enforcement teeth of permanence — and in the early decades it churned thousands of estates through the auction rooms.',
        },
        {
          q: 'Ryotwari settlement, associated with Munro and Read, was distinctive because revenue was settled…',
          options: ['with zamindars in perpetuity', 'directly with each individual cultivating ryot, revised periodically', 'with the village as a jointly liable unit', 'only on cash crops'],
          answer: 1,
          explain: 'The ryot, not the zamindar or the village, was the state\'s counterparty — the southern alternative to both Bengal and the North-Western systems.',
        },
        {
          q: 'The Deccan Riots of 1875 primarily targeted…',
          options: ['British officials', 'moneylenders, whose debt bonds were seized and burnt', 'indigo planters', 'the zamindars of Bengal'],
          answer: 1,
          explain: 'The movement\'s signature act was the public burning of sahukars\' bonds — a protest against the credit structure, which the 1879 Relief Act then reformed.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Equating "zamindar" with "landlord" — the Mughal zamindar was a revenue-rights holder with troops and forts, not simply an owner of fields. Believing the Permanent Settlement fixed the peasant\'s burden — only the state\'s demand was fixed; rents could and did rise. Reading the Deccan or indigo movements as anti-colonial national revolts — their named enemies were moneylenders and planters, with the colonial state as the surprised referee. And treating the Ain\'s tables or settlement statistics as transparent photographs of the village: both are fiscal documents, written by the state for the state.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the medieval-India lesson (for jagir, mansab and the Mughal frame the first half rests on) and the modern-India lesson (for the conquest and the nationalist movement these themes border). Follow-ons: the macroeconomics lesson\'s India section for the twentieth-century economy, and the urbanisation lesson for the city in the twentieth century — chawls become metropolises there.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'The Mughal village: panchayat + muqaddam + patwari, artisan families bound by harvest-shares, khud-kashta resident and pahi-kashta mobile peasants, jins-i-kamil cash crops drawing cultivation to markets.',
        'Zamindars = hereditary revenue intermediaries with forts and armed retainers — subcontractors, not modern landlords.',
        'The Ain-i-Akbari (1595): jama vs hasil, Todar Mal\'s zabti/dahsala measurement-and-pricing machine, khalisa vs jagir — read it as the state\'s self-portrait.',
        'Permanent Settlement 1793: zamindars as owners, demand fixed forever, sunset clause → early auction chaos, later rentier windfall; jotedars rule beneath the title.',
        'Ryotwari (direct with the ryot, periodic revision) and mahalwari (village-unit liability) — the regional alternatives.',
        'Deccan Riots 1875: cotton boom→crash→bond-burning against moneylenders; Relief Act 1879. Indigo: dadni advances as debt-trap; Blue Rebellion 1859–60 and Nil Darpan.',
        'Colonial towns: Madras/Bombay/Calcutta presidency ports, cantonments and civil lines, hill stations as summer capitals, New Delhi 1911–31; Surat\'s decline as the counter-story.',
        'The segregated city: white/black towns, Ripon\'s 1882 municipalities, plague-driven improvement trusts, the decennial census (Risley, 1901) — and the urban public sphere that incubated nationalism.',
      ] },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* 4. Contemporary world politics (CUET Pol Sci: 4 themes)          */
  /* ---------------------------------------------------------------- */
  {
    id: 'pol-contemporary-world-order',
    title: 'After the Cold War: Hegemony, Rival Poles and the Global Commons',
    domain: 'Social Sciences',
    field: 'Political Science',
    branch: 'International Relations',
    tier: 'intermediate',
    concepts: [
      'The Cold War era: blocs, deterrence and crises',
      'Non-alignment in a bipolar world',
      'End of bipolarity: Gorbachev, 1989 and the Soviet collapse',
      'Shock therapy and its costs',
      'Hegemony as hard, structural and soft power',
      'Alternative centres of power: the EU, China, ASEAN and Russia',
      'Contemporary South Asia: democracies, disputes, cooperation',
      'Environment and natural resources: common but differentiated responsibility',
      'Globalisation and its discontents',
    ],
    words: 2333,
    readMins: 12,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Between 1945 and 1991 world politics was organised around a single question — Washington or Moscow? — and then, in two astonishing years, the question dissolved. This lesson follows the NCERT course in Contemporary World Politics across the whole arc: the Cold War\'s logic and its end; the American "unipolar moment" that followed, analysed as hegemony; the rival poles — Europe, China, ASEAN, a resurgent Russia — that complicate it; the world\'s most dangerous neighbourhood, South Asia; and the two forces that cross every border, the environment and globalisation. The theory of why nations behave (realism, liberalism, constructivism) has its own lesson in this library; here the subject is the historical order the theory tries to explain.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every current-affairs question in every exam — Ukraine, chip wars, climate summits, SAARC\'s paralysis — sits somewhere on this map. The examinable skill is placing events in the right frame: is this deterrence logic, hegemony at work, balance against it, or the older logic of the region? Students who can name the frame write answers that read like analysis rather than news recall.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Deterrence', def: 'The Cold War\'s grim stability: each superpower held enough nuclear weapons to destroy the other even after being struck first (second-strike capability), so neither could rationally begin — "mutually assured destruction". The Cuban Missile Crisis of October 1962, thirteen days at the edge of the cliff, produced the hotline and the Limited Test Ban Treaty as safety rails.' },
          { term: 'Non-alignment', def: 'The founding doctrine of the NAM (Bandung 1955, Belgrade 1961; Nehru, Nasser, Tito): refuse membership of either bloc, judge issues one by one, keep national independence of decision — a third way that was activist, not neutral-isolationist.' },
          { term: 'Shock therapy', def: 'The rapid post-Soviet transition to markets — price liberalisation and mass privatisation at speed — prescribed for Russia and the other post-Soviet states after 1991; its decade of collapsed output, hyperinflation and oligarch formation is the standard case study in what speed costs.' },
          { term: 'Common but differentiated responsibility (CBDR)', def: 'The equity principle of global climate politics (Rio 1992, Kyoto 1997): every state owes the global environment care, but industrialised states that caused most of the stock of emissions owe more, sooner — the fault-line of every summit since.' },
        ],
      },
      {
        kind: 'para',
        text: 'First, the world that ended. The Cold War was a structural rivalry fought short of direct war: two alliances (NATO from 1949, the Warsaw Pact from 1955) facing each other across a divided Germany; ideological competition — liberal capitalism versus Soviet communism — fought through aid, propaganda, coups and proxy wars from Korea (1950–53) to Afghanistan; and a nuclear arms race that made the rivalry\'s own violence unusable. Berlin supplied the theatre — the 1948 blockade and airlift, the Wall from 1961 — and Cuba the near-miss: in October 1962, after Soviet missiles were found in Cuba and American ones were known in Turkey, Kennedy and Khrushchev stepped back in exchange for quiet mutual withdrawal. Into this division the newly independent states of Asia and Africa inserted non-alignment — mocked by both blocs at the time, it kept dozens of states out of alliance machinery and gave the "Third World" a diplomatic identity that outlived the war it refused to join.',
      },
      {
        kind: 'para',
        text: 'The end came from within. The Soviet system\'s economic stagnation, its ruinous 1979 invasion of Afghanistan, and the Chernobyl shock met a reformer: Mikhail Gorbachev (1985), whose glasnost (openness) loosened the information order and whose perestroika (restructuring) tried to reform an economy that could not be half-reformed. Crucially, Gorbachev told the East European satellite regimes they were on their own — and in 1989 the dominoes fell, mostly peacefully: Poland\'s Solidarity roundtable, the opening of the Hungarian border, the Berlin Wall breached on 9 November, the velvet and the violent (Romania) transitions. The Soviet Union itself followed: a failed hardline coup in August 1991 discredited the centre, the republics declared independence, and on 25 December 1991 Gorbachev resigned. Fifteen states emerged where one had been; the bipolar world ended not with a war but with a filing.',
      },
      {
        kind: 'para',
        text: 'What followed in Russia was "shock therapy": prices freed, industry privatised through vouchers that migrant speculators and insiders bought up, and the rouble destroyed. Output fell by amounts not seen in any major economy outside war; life expectancy for men dropped by years; a class of oligarchs captured the commanding heights. The post-Soviet states diverged — the Baltic republics aimed at Europe, Central Asia at dynastic continuity — but the 1990s taught one lesson the exam wants: rapid institutional transplants without the supporting rule of law can eat a decade. The political scientist\'s term for the bigger context is the "unipolar moment": with the USSR gone, one power stood above all others.',
      },
      {
        kind: 'para',
        text: 'That supremacy is what the NCERT course dissects as hegemony, in three registers. Hard power: the American military run — the 1991 Gulf War (a genuine UN-authorised coalition reversing an invasion), Kosovo 1999 (bypassing the Security Council), Afghanistan 2001 (after 9/11 — the only invocation of NATO\'s Article 5 in its history, made on America\'s behalf) and Iraq 2003 (invaded without UN authorisation over weapons of mass destruction that proved not to exist). Structural power: command of the systems everyone needs — the dollar\'s role, the Bretton Woods institutions and the veto, the internet\'s plumbing, the rules of trade and intellectual property. Soft power: the pull of universities, technology clusters and popular culture, the credibility that made "the American way" a default others adopted without being ordered. Hegemony, note carefully, is not merely strength; it is the ability to set the rules others must play by. And it always generates counter-movement: states hedge, balance or bandwagon — the strategic menu the exam expects you to apply to any great power today.',
      },
      {
        kind: 'para',
        text: 'The alternative centres each make one pole of the multipolar drift. The European Union is the paradox: an economic superpower built deliberately to be more than a market — from the 1950s Coal and Steel Community through Maastricht (1992) to the euro — with twenty-seven members after Brexit, but a foreign policy of committees. China is the challenger built by patience: Deng Xiaoping\'s reforms from 1978, entry to the WTO in 2001, three decades of double-digit growth converting poverty into the world\'s manufacturing floor, and now the technological and naval programme that asks whether trade converts to power. Russia, resurrected on energy income and grievance, demonstrates both the leverage and the limits of a petro-state with a UN veto — its 2022 invasion of Ukraine unified NATO, redrew Europe\'s energy map, and returned major war to the continent the Cold War never burned. ASEAN (from 1967) pioneered the quieter pole: the "ASEAN Way" of consensus and non-interference that turned South-East Asia from war-zone into one of the world\'s economic regions, and the forums (ARF, EAS) where great powers meet on Asian terms. Add Japan\'s economic weight and the BRICS grouping, and the picture is not multipolarity exactly — it is one hegemon, several poles, and a swarm of linkages.',
      },
      {
        kind: 'para',
        text: 'The same course lowers its lens to one region: contemporary South Asia — the eight states of the subcontinent and its rim, bound by a colonial cartographic inheritance and split by it. Pakistan pairs a strong military-bureaucratic establishment with recurring democratic openings, and with India fought four wars (1947–48, 1965, 1971 — which created Bangladesh — and Kargil, 1999) and low-intensity conflict over Kashmir; the two states tested nuclear weapons within weeks of each other in 1998, putting deterrence logic on the region\'s doorstep. Bangladesh, born of language and liberation war in 1971, oscillated between two party dynasties while building one of the world\'s garment export machines. Nepal\'s monarchy fell to a people\'s movement (2006) and a Maoist insurgency\'s conversion to ballots, making it a republic in 2008; Bhutan charted a monarchy-led transition to constitutional democracy in 2008 with gross national happiness as its stated index. Sri Lanka\'s civil war between the Sinhala-majority state and the Tamil LTTE ran from 1983 to the LTTE\'s destruction in 2009 — with India\'s intervention force (IPKF, 1987–90) as the cautionary episode in between — and left reconciliation unfinished. Afghanistan\'s arc ran Soviet occupation (1979–89) through civil war and Taliban rule to the post-2001 republic and the Taliban\'s 2021 return. Over all of it hangs asymmetry: India\'s neighbours are smaller than its states, and behave accordingly — which is also why the region\'s cooperation vehicle, SAARC (1985), has been frozen by the India–Pakistan fault-line while quieter cooperation (trade corridors, disaster response, energy grids) inches ahead.',
      },
      {
        kind: 'para',
        text: 'The last two forces respect no border at all. The environment entered world politics through the ozone treaty (Montreal, 1987 — the quiet success story) and then the climate regime: Rio\'s UNFCCC (1992), Kyoto\'s emission targets (1997), the Copenhagen breakdown (2009) and the Paris Agreement (2015), which traded binding targets for nationally determined contributions and a 1.5-degree aspiration. The fault-line through all of it is CBDR — who pays, given who emitted — with the developing world\'s argument (the atmosphere was spent by others\' industrialisation) meeting the developed world\'s answer (current emissions are growing elsewhere). Resource geopolitics runs the same logic underground and in rivers: oil\'s chokepoints, rare earths and lithium for the energy transition, and shared waters — the Indus Waters Treaty of 1960 surviving three wars as the standing proof that resource-sharing institutions can be tougher than they look. Globalisation is the second border-crosser: the widening web of trade, capital, people and ideas that container shipping and the internet made profitable and liberalisation made policy — celebrated as convergence, protested (Seattle 1999 and after) as a corporate charter, and analysed best as neither nirvana nor conspiracy but a transformation of sovereignty that states still manage unevenly. India\'s own bargain — the IT boom, services exports, a diaspora\'s remittances against farm distress and inequality — is the case study the macroeconomics lesson owns.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Framing One Event Three Ways',
        steps: [
          'The event: a powerful state invades a weaker neighbour without UN authorisation, citing self-defence, while most of the world\'s economies object but keep trading with it.',
          'Hegemony lens: does the attacker act as rule-setter (structural power protecting the system it built) or rule-breaker (eroding norms it can no longer afford)? Note both readings are available — hegemony\'s paradox.',
          'Balance lens: watch the neighbours — military budgets, alliance applications, hedging purchases. Rival poles do not need to fight the hegemon; arming against it suffices.',
          'Region lens: which regional institution responds (or is paralysed), and who dominates it? The veto-holder structure of the organisation predicts the outcome better than the speeches.',
          'The exam skill: name the frame, marshal the indicators each frame predicts, and you have an answer that generalises to Iraq 2003, Ukraine 2022, or the next case the paper invents.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The Cold War stayed "cold" primarily because…',
          options: ['the UN forbade superpower war', 'nuclear second-strike capability made war irrational for both sides', 'the Warsaw Pact was militarily weak', 'neither side wanted allies'],
          answer: 1,
          explain: 'Deterrence — the certainty of mutually assured destruction — is the structural answer; crises like Cuba 1962 tested exactly this logic.',
        },
        {
          q: 'Which statement captures "common but differentiated responsibility"?',
          options: ['all states must cut emissions by identical percentages', 'every state owes environmental care, but historically industrial states owe greater and earlier obligations', 'only developing states must act', 'climate is a national, not international, issue'],
          answer: 1,
          explain: 'CBDR is the equity formula of the climate regime — the developing world\'s core argument at every summit since Rio.',
        },
        {
          q: 'NATO\'s Article 5 (collective defence) has been invoked exactly once — after…',
          options: ['the Korean War', 'the Soviet invasion of Afghanistan', 'the 9/11 attacks on the United States', 'Russia\'s annexation of Crimea'],
          answer: 2,
          explain: 'The only invocation was made on America\'s behalf after September 2001 — a measure of how the alliance\'s centre of gravity had shifted.',
        },
        {
          q: '"Shock therapy" in post-Soviet Russia refers to…',
          options: ['electroconvulsive medical imports', 'the rapid freeing of prices and mass privatisation after 1991, with a decade of collapsed output', 'Gorbachev\'s glasnost laws', 'NATO\'s eastward expansion'],
          answer: 1,
          explain: 'Speed was the policy: price liberalisation and voucher privatisation at once — and the 1990s depression-plus-oligarchy is the standard critique.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Writing "the Cold War ended in 1989" — the Eastern European regimes fell then; the USSR dissolved in December 1991; the two dates mark different events. Treating non-alignment as neutrality — it was an activist third position, not abstention from world affairs. Equating hegemony with mere military size — the structural and soft faces matter as much. Reading globalisation as a single ideology — hyperglobalist, sceptic and transformationalist readings all appear in the syllabus, and the exam rewards knowing the debate rather than picking a slogan.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the IR-theory lesson for realism, liberalism and constructivism — the lenses this history is viewed through. Natural companions: the Indian-polity lesson\'s constitution for the state that practices non-alignment\'s successor ("strategic autonomy"), and the macroeconomics lesson\'s globalisation section for the economic dimension. The every-probability lesson\'s decision tools sharpen the deterrence logic.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Cold War structure: two alliances, ideological competition, proxy wars — stabilised by nuclear deterrence and tested at Berlin and Cuba (1962).',
        'Non-alignment: Bandung 1955 → Belgrade 1961; activist refusal of both blocs; outlived the war it refused.',
        'The end: Gorbachev\'s glasnost/perestroika, 1989 in Eastern Europe, the failed 1991 coup, dissolution on 25 December 1991.',
        'Shock therapy: rapid liberalisation → 1990s collapse, oligarchs; the case study in institutional speed limits.',
        'Hegemony\'s three faces: hard power (Gulf to Iraq 2003), structural (dollar, institutions, rules), soft (culture and credibility) — and the balancing it provokes.',
        'Alternative poles: EU (economic superpower, committee foreign policy), China (reforms→WTO→challenge), Russia (energy and veto, and 2022\'s consequences), ASEAN (the quiet way).',
        'Contemporary South Asia: colonial borders plus asymmetry; Pakistan\'s military-democracy cycle and the four wars; 1971 and Bangladesh; Nepal, Bhutan, Sri Lanka\'s civil war, Afghanistan\'s arc; nuclearised 1998; SAARC frozen by the India–Pakistan fault-line.',
        'Environment: Montreal\'s ozone success, Rio→Kyoto→Paris, CBDR as the standing fault-line; resources from oil to lithium to shared rivers (Indus Treaty, 1960).',
        'Globalisation: flows of capital, goods, people, ideas; the three-way debate; India\'s bargain as the standard case.',
      ] },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* 5. India since independence (CUET Pol Sci: 3 themes)             */
  /* ---------------------------------------------------------------- */
  {
    id: 'pol-india-since-independence',
    title: 'India Since Independence: Congress Dominance, Nation-Building and Regional Aspirations',
    domain: 'Social Sciences',
    field: 'Political Science',
    branch: 'Indian Polity',
    tier: 'intermediate',
    concepts: [
      'Partition refugees and princely integration',
      'Nation-building: linguistic states and the language question',
      'The Congress system and one-party dominance',
      'Opposition parties of the 1950s and 1960s',
      'The 1969 split and the 1971 restoration',
      'Land reforms and the Green Revolution settlement',
      'Regional aspirations: Punjab, Assam, Mizoram, Jammu and Kashmir',
      'The coalition era and regional kingmakers',
      'Recent developments since 1989: Mandal, Ayodhya, coalitions and majorities',
    ],
    words: 2684,
    readMins: 13,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Independent India began with a to-do list that read like a prediction of failure: millions of refugees, five hundred and sixty-odd princely states to absorb, no single language its citizens shared, an economy rebuilt around extraction, and a constitution nobody knew would survive its first decade. This lesson follows the political history NCERT tells in Politics in India Since Independence: how the Congress party converted freedom-movement prestige into two decades of one-party dominance — and what that dominance was and was not; how the republic was built as a nation (refugees, states, languages); how regional aspirations, from Punjab to Assam to Kashmir, tested and ultimately deepened the federation; and how the politics since 1989 — Mandal, Ayodhya, coalitions and the return of single-party majorities — remade the party system again. Two neighbours own parts of this story and are cross-referenced, not repeated: the constitution and its institutions belong to the Indian-polity lesson, and the economic planning-and-reforms arc to the macroeconomics lesson.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every debate about Indian politics today — one-party dominance versus coalition, Hindi versus regional languages, centre versus state, reservation — runs on tracks laid between 1947 and 1990. The examinable skill is explaining today\'s alignments as outcomes of that history rather than as timeless features, and this lesson\'s three themes are chosen because they carry that explanatory load.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Congress system', def: 'Rajni Kothari\'s name for the first two decades: Congress as a bloated, factional "party of consensus" that absorbed every social group while real opposition happened inside it — dominance, not dictatorship, because elections stayed free and the opposition survived to criticise.' },
          { term: 'States Reorganisation', def: 'The redrawing of India\'s internal map on linguistic lines: Potti Sriramulu\'s fast (1952) forced Andhra state; the Fazl Ali Commission (1955) then recommended, and the States Reorganisation Act (1956) enacted, fourteen states and six union territories — with further splits (Bombay 1960, Punjab 1966) following agitations.' },
          { term: 'Anandpur Sahib Resolution', def: 'The 1973 Akali Dal programme demanding greater Punjab autonomy and federal devolution — the document around which the Punjab crisis of the 1980s assembled, ending in Operation Blue Star (1984), the Rajiv–Longowal Accord (1985) and a decade of militancy.' },
          { term: 'Coalition era', def: 'The 1989–2014 pattern in which no single party won a Lok Sabha majority and governments were built from multi-party fronts (National Front, United Front, NDA, UPA), making regional parties kingmakers and federal bargaining ordinary.' },
        ],
      },
      {
        kind: 'para',
        text: 'Start with the birth challenges, because everything later answers them. Partition moved something like ten million people across the new border in a matter of months — history\'s largest and fastest forced migration — and the new government\'s first achievement was administrative: refugee resettlement on a scale no state had attempted, using evacuated property, camps and rehabilitation loans while the violence burned out. The second was territorial. The British announcement that princely states could accede to either dominion or stay independent left 565 loose threads, and Sardar Patel — ably served by the civil servant V. P. Menon — pulled them in with a standard Instrument of Accession plus pressure, privy purses and patience. Three holdouts made the case law: Junagadh (whose Muslim nawab opted for Pakistan; a plebiscite of its Hindu-majority population confirmed India), Hyderabad (where the Nizam\'s indecision and his Razakar militia ended in the September 1948 police action) and Jammu & Kashmir, whose Hindu maharaja hesitated over a Muslim-majority population until tribal invaders from Pakistan forced a choice; he acceded in October 1947, the first India–Pakistan war followed, and the 1949 ceasefire line froze the dispute the polity lesson\'s Article 370 story continues. The constitution itself — framed by the Constituent Assembly between 1946 and 1949, in force 26 January 1950 — is that lesson\'s subject.',
      },
      {
        kind: 'para',
        text: 'Then came the party system. The Congress of the 1950s was less a party than a weather system: freedom-movement legitimacy, an organisation reaching to every district, and factions that let rival groups fight inside the tent instead of building their own. In the first three general elections (1952, 1957, 1962) it won commanding majorities — helped by first-past-the-post magnifying its vote shares — while a fragmented opposition divided the rest. That opposition was real and diverse: the Communists (the largest single opposition bloc in 1952) and the socialists to the Congress\'s left; the Jana Sangh (1951) on the Hindu-nationalist right; the market-liberal Swatantra Party (1959, founded by C. Rajagopalachari) against planning and licensing; and the Dravida parties of Madras, born of the anti-Hindi agitation. Dominance meant Congress won; it never meant the alternation we now assume was impossible — the voters were free, and in 1957 Kerala even elected a Communist ministry, dismissed by the centre in 1959 in a decision still argued over. Kothari\'s "Congress system" captured the point: competition existed, but the Congress federated it.',
      },
      {
        kind: 'para',
        text: 'The system\'s late-life crisis is a standard exam case study. After Nehru\'s death (1964) and his successor Lal Bahadur Shastri\'s (1966), Indira Gandhi took the party as heir apparent of the old guard — the "Syndicate" of state bosses — who expected pliability. She outmanoeuvred them: the 1967 elections (which Congress barely won nationally while losing eight states to opposition fronts) showed the machine aging, and in 1969 the party split over the presidential nomination — the Syndicate\'s official candidate, Sanjiva Reddy, defeated by her supported independent, V. V. Giri. Indira Gandhi rebuilt Congress as her own, left-leaning vehicle, banked on the slogan Garibi Hatao ("remove poverty"), and swept the 1971 election; her restored dominance then ran into the economic shocks and protest wave that produced the Emergency (1975–77 — the suspension of democratic order, press censorship and mass arrests that ended with the 1977 Janata victory, the first non-Congress government at the centre, itself collapsing by 1979). The emergency-and-restoration arc belongs to NCERT\'s "crisis of democratic order" chapter; what matters here is the hinge it marks: after 1969–1977, Congress was one competitive party among others, and the space for the coalition era had opened.',
      },
      {
        kind: 'para',
        text: 'Nation-building ran on its own twin tracks. First, the map: the Congress had promised linguistic provinces since the 1920s, but after partition Nehru and the party feared balkanisation, and the JVP committee (1948) postponed the question — until Potti Sriramalu\'s fast for a Telugu-speaking Andhra ended with his death in December 1952 and an explosion of grief that forced the new state within days. The lesson was learned forward: the Fazl Ali Commission recommended accepting language as the basis of states, and the States Reorganisation Act of 1956 redrew the map into fourteen states and six union territories — not as a concession to disintegration but as its prevention, giving linguistic identity a constitutional container. The map kept refining under agitation: Bombay split into Maharashtra and Gujarat (1960), and the Punjabi Suba movement won Punjab and Haryana (1966). Second, the language question: the constitution made Hindi in Devanagari the official (not "national") language, with English continuing for fifteen years. As 1965 approached, the non-Hindi south read the switch as second-class citizenship, and the DMK\'s agitation turned violent in Madras; Nehru\'s assurances and the Official Languages Act (1963, English continuing indefinitely) settled the formula, and the two-language policy plus federal flexibility turned a potential secession issue into settled accommodation. What the episode taught — identity accommodated early is loyalty; deferred, it is fuel — is the theme of everything below.',
      },
      {
        kind: 'para',
        text: 'The economic half of nation-building, in one honest paragraph, is the macroeconomics lesson\'s territory; here take the political settlement only. Land reform — zamindari abolition first (under the constitution\'s first amendment, protecting the laws from property-rights challenge), then tenancy and ceiling legislation — varied spectacularly by state: abolition largely happened, ceilings largely leaked, and the political coalition of landholding interests saw to it. The Green Revolution of the late 1960s (the high-yielding wheat and rice programmes, procurement prices and public distribution that made India food-secure by the mid-1970s) was, politically, the stabiliser of the system — a state that could feed itself could afford democracy — and geographically the seedbed of Punjab\'s prosperity and, later, its politics of surplus and grievance. Planning, the licence raj and the 1991 reversal are the macro story; take from it only that every party till 1991 accepted the planned-economy frame, so political conflict ran on other axes — language, region, religion, caste.',
      },
      { kind: 'heading', text: 'Regional Aspirations' },
      {
        kind: 'para',
        text: 'The 1980s put that lesson to the test in four theatres, and the NCERT\'s own framing is the exam\'s framing: regional movements are not secessionist by nature — they are the federation\'s growing pains, and the test of a union is whether it can absorb them without bloodshed. Punjab: the Akali Dal\'s Anandpur Sahib Resolution (1973) demanded autonomy and river-waters redress; a decade of stalemate radicalised into Bhindranwale\'s militancy and the arming of the Golden Temple, ending in the army\'s Operation Blue Star (June 1984) — the wound that cost Indira Gandhi her life that October and fed a decade of counter-insurgency; the Rajiv–Longowal Accord (1985) sketched the settlement its signatory was assassinated for signing, and peace returned only in the mid-1990s with the exhaustion of all parties. Assam: the movement against foreign (post-1971) migrants on the electoral rolls, led by the All Assam Students Union, climaxed in the boycott-shattered 1983 election (the Nellie massacre its scar) and settled — partially — in the Assam Accord of 1985, which promised detection and deletion of illegal entrants and converted the student leadership into a governing party; the updating of the National Register of Citizens a generation later shows the accord\'s questions still open. Mizoram is the counter-case every exam loves: famine relief failure (the mautam bamboo-seeding famine of 1959) bred the Mizo National Front\'s twenty-year insurgency, which ended in the 1986 accord — Laldenga, the rebel leader, became chief minister; Mizoram became a state in 1987, and is today among India\'s most peaceful — proof that negotiated dignity outlasts suppression. Jammu & Kashmir carries the longest arc: Article 370\'s autonomy eroded by Delhi\'s interventions (Sheikh Abdullah\'s 1953 arrest, the 1975 accord that restored him as chief minister), the rigged 1987 election lighting the insurgency of the 1990s, the exodus of the Kashmiri Pandits, and the 2019 abrogation of Article 370 and bifurcation of the state into union territories — the constitutional mechanics of which the polity lesson owns. Around all four, notice, ran the same era of federal redefinition: the Sarkaria Commission on centre-state relations, the rise of state parties as national kingmakers, and the constitutional recognition that "regional aspiration" is a voice of the union, not a rebellion against it.',
      },
      {
        kind: 'para',
        text: 'The story since 1989 completes the arc. The Ninth Lok Sabha opened the coalition era — the National Front (1989), the United Front (1996–98), then the BJP-led NDA and Congress-led UPA alternating as majority-less coalitions stitched together by regional parties whose price was federal. Two decisions of that first National Front government remade Indian politics for good: the implementation of the Mandal Commission\'s recommendation of 27 per cent reservation for Other Backward Classes (1990) — upheld, with the fifty-per-cent cap, by the Indra Sawhney judgment (1992) — which made backward-caste identity the axis of a new politics in the cow belt; and the Ram Janmabhoomi movement, culminating in the demolition of the Babri Masjid (December 1992) and the long judicial-political settlement that followed, which rebuilt the Hindu-nationalist bloc that won the BJP its first single-party majorities in three decades (2014, 2019). The economic reforms of 1991 belong to the macroeconomics lesson; their politics — a new urban middle class, a new inequality, a new political entrepreneurship — cut across every camp. The through-line for this lesson\'s exam question is simpler: the Congress system died at the birth of the coalition era, and the era after 2014 is its mirror — dominance again, by a different party, in a federation that has spent seventy years learning to bend.',
      },
      {
        kind: 'example',
        title: 'Worked Example — How a Linguistic State Is Born (Andhra, 1952–53)',
        steps: [
          'The demand: Telugu-speakers scattered across the multilingual Madras Presidency want a state of their own — a promise the Congress itself made in the 1920s.',
          'The refusal: after partition, the centre fears linguistic states will dissolve the union; the JVP committee (1948) postpones the question indefinitely.',
          'The trigger: Gandhian Potti Sriramalu begins a fast in Madras city (October 1952) demanding Andhra state; the government lets it run.',
          'The rupture: Sriramalu dies on 15 December 1952 (day 58); grief and riots erupt across the Telugu districts — and on 19 December the government announces Andhra state.',
          'The generalisation — the exam\'s point: identity demands deferred become crises, conceded become loyalty. The Fazl Ali Commission applies the lesson within two years, and the 1956 reorganisation turns the map from an argument into an institution.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Sardar Patel\'s integration of the princely states relied primarily on…',
          options: ['military conquest of all 565 states', 'a standard Instrument of Accession backed by privy purses, pressure and the optics of inevitability', 'purchase of every throne', 'UN-supervised plebiscites'],
          answer: 1,
          explain: 'Menon\'s diplomacy plus the viceroy\'s prestige made accession the default; force was reserved for the three holdouts — Junagadh (plebiscite), Hyderabad (police action) and Kashmir (war).',
        },
        {
          q: 'The 1969 Congress split was triggered by…',
          options: ['the Emergency', 'the presidential election — the Syndicate\'s official candidate losing to Indira Gandhi\'s supported V. V. Giri', 'the Assam agitation', 'the Green Revolution'],
          answer: 1,
          explain: 'The nomination fight became the proxy war between the prime minister and the state bosses; defeat of Sanjiva Reddy formalised the rupture into Congress (O) and Congress (R).',
        },
        {
          q: 'Potti Sriramalu\'s fast (1952) led directly to…',
          options: ['the States Reorganisation Act', 'the creation of Andhra state — and, by demonstration, the Fazl Ali Commission and the 1956 reorganisation', 'the Official Languages Act', 'the Punjabi Suba'],
          answer: 1,
          explain: 'His death forced Andhra within days; the commission and the 1956 Act then generalised the concession into a linguistic federal map.',
        },
        {
          q: 'The Mizoram settlement (1986 accord, statehood 1987) is celebrated because…',
          options: ['the rebel leader Laldenga became chief minister after a negotiated peace', 'the army crushed the MNF', 'Mizoram merged with Assam', 'the movement was ignored'],
          answer: 0,
          explain: 'Negotiated dignity — the insurgent converted to constitutional office — is the textbook contrast with suppression-based settlements.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Equating one-party dominance with authoritarianism — elections stayed free through the Congress era, and 1957\'s Kerala and 1967\'s eight states proved it. Treating linguistic states as a concession that nearly broke India — they are why India did not break. Reading the Punjab or Assam movements as anti-national by definition — the NCERT frame is democratic accommodation of regional voice. And confusing the three Congress eras: the system (1952–67), the split-and-restoration (1969–77) and the post-Emergency party are different animals with the same name.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the Indian-polity lesson (constitution, federalism, Article 370\'s mechanics) and the modern-India lesson (the freedom struggle that made Congress credible). Follow-ons: the macroeconomics lesson for planning, the Green Revolution\'s economics and the 1991 reforms; the world-order lesson for the foreign policy running alongside this domestic story.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        '1947\'s to-do list: refugee resettlement (partition\'s ~10 million), Patel and Menon\'s integration of 565 princely states (Junagadh plebiscite, Hyderabad police action, Kashmir accession → first war → 1949 ceasefire line).',
        'The Congress system (Kothari): factional party of consensus, FPTP magnification, free elections — with a real opposition: Communists, socialists, Jana Sangh, Swatantra, Dravida parties.',
        'The hinge: 1967\'s narrow win and eight lost states; the 1969 Syndicate split (Sanjiva Reddy vs Giri); Garibi Hatao and the 1971 landslide; the Emergency (1975–77) and Janata interlude end the old dominance.',
        'Nation-building, track one — linguistic states: Sriramalu\'s death → Andhra 1953; Fazl Ali → States Reorganisation Act 1956; later Bombay 1960, Punjab 1966.',
        'Track two — language: Hindi official (not national), English\'s 15-year lease, the 1963 Act and the 1965 agitation, accommodation as policy.',
        'Track three — the political economy settlement: zamindari abolition achieved, ceilings leaked; the Green Revolution as the stabiliser (and Punjab\'s seedbed).',
        'Regional aspirations: Punjab (Anandpur Sahib 1973 → Blue Star 1984 → Longowal Accord 1985), Assam (AASU → 1985 Accord), Mizoram (1986 accord, statehood 1987 — the success), Kashmir (1953/1975/1987/2019 arc).',
        'Since 1989: the coalition era of fronts and kingmakers; Mandal (1990) and Indra Sawhney (1992); Babri (1992) and the BJP\'s rise; 2014–return of single-party majority; the federation that learned to bend.',
      ] },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* 6. Computing fundamentals + digital citizenship (CUET CS)        */
  /* ---------------------------------------------------------------- */
  {
    id: 'cs-computing-thinking-digital-society',
    title: 'Computational Thinking, Algorithms and the Digital Citizen',
    domain: 'Computing & AI',
    field: 'Computer Science',
    branch: 'Computing Fundamentals',
    tier: 'core',
    concepts: [
      'Computational thinking: decomposition, pattern recognition, abstraction',
      'Algorithm properties: input, output, definiteness, finiteness, effectiveness',
      'Pseudocode and flowchart symbols',
      'Dry runs and trace tables',
      'Digital footprint: active and passive traces',
      'Cyber safety: phishing, malware, identity theft',
      'Passwords, two-factor authentication and patching',
      'Societal impacts: digital divide and e-waste',
      'IT Act 2000 and the DPDP Act 2023',
      'Netiquette, licensing and intellectual property',
    ],
    words: 2773,
    readMins: 14,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Two questions face every computer-science student and every phone owner, and this lesson takes both. The first is how to think like a computer scientist — the discipline called computational thinking: turning a messy problem into a form a machine can execute, through decomposition, pattern recognition and abstraction, expressed finally as an algorithm you can write as pseudocode or draw as a flowchart. The second is what life online does to you and to society — the digital footprint you leave, the attackers who phish for it, and the impacts (digital divide, e-waste, new law) that computing has stamped on the world. The two halves share a premise: computing is now a civic competence, not a vocational one, and the exam syllabus (CUET, CBSE Computer Science and Informatics Practices) treats it that way. The programming that builds on the first half continues elsewhere in this domain; this lesson is the foundation and the conscience.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The algorithm half trains the reasoning every paper tests — tracing loops, spotting off-by-one errors, judging efficiency — without which programming is guesswork. The digital-citizen half is now examined in its own right and matters more with each passing year: the footprint you are building right now is permanent, the attacks are engineered, and the law (IT Act, DPDP) assigns real penalties to both attackers and careless data-handlers.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Computational thinking', def: 'The problem-solving discipline computer science contributes to the world (Jeannette Wing\'s 2006 formulation): decompose the problem, recognise patterns to reuse, abstract away detail, and design an algorithmic solution. It is thinking like a computer scientist — not thinking like a computer.' },
          { term: 'Algorithm', def: 'A finite, ordered set of unambiguous instructions that transforms an input into an output. Knuth\'s classical properties: input, output, definiteness (each step precisely specified), finiteness (it terminates), effectiveness (each step is basic enough to be carried out).' },
          { term: 'Digital footprint', def: 'The trail of data you leave online: active traces you consciously post (uploads, comments, likes) and passive traces collected about you (browsing logs, cookies, location history, app telemetry) — persistent, searchable, and sellable long after you have forgotten it.' },
          { term: 'Phishing', def: 'Social engineering by message: a fake email, call (vishing) or SMS (smishing) impersonating a trusted party to harvest credentials or deliver malware — defeated not by antivirus but by the verify-before-you-trust habit.' },
          { term: 'Digital divide', def: 'The gap between those with meaningful access to computing (connectivity, devices, skills, language, usability) and those without — which runs inside cities as well as between regions, and is not closed by cables alone.' },
          { term: 'Data fiduciary', def: 'Under India\'s Digital Personal Data Protection Act (2023): any entity that decides how and why personal data is processed — bound to purpose limitation, consent, security safeguards, and penalties up to 250 crore rupees for breach.' },
        ],
      },
      { kind: 'heading', text: 'Part One: Thinking in Algorithms' },
      {
        kind: 'para',
        text: 'Watch what you already do computationally. Planning a wedding: you break the impossible whole into venue, catering, guests, budget — decomposition; you reuse last year\'s plan for a cousin\'s wedding — pattern recognition; you model the guest list as a count and a budget constraint rather than a mental image of every relative — abstraction; and you sequence tasks with dependencies — an algorithm. Searching a dictionary: you open it in the middle, decide which half the word is in, and repeat — binary search, centuries before computers. Computational thinking names and disciplines these moves so they can be taught and checked: a problem decomposed into subproblems that fit one pattern is half-solved; an abstraction that keeps exactly the relevant detail (the exam marks and the credit limits, not the colleges\' scenery) is a model; and the algorithm is the model set in motion. The exam will test the four steps on everyday scenarios precisely because the discipline is general.',
      },
      {
        kind: 'para',
        text: 'The algorithm itself deserves a careful definition, because "a recipe is an algorithm" is only half true. A proper algorithm has Knuth\'s five properties: it takes input (zero or more quantities given to it), produces output (at least one quantity), each step is definite (unambiguous — "add a pinch of salt" fails this test), the sequence is finite (it must stop — a recipe that says "stir until it seems right" fails), and each step is effective (basic enough to be done exactly, by a person or machine). Long division, as taught in primary school, is a perfect algorithm — input: two numbers; output: quotient and remainder; every step mechanical. Expressing algorithms has two standard school forms: pseudocode — structured English with fixed keywords (READ, SET, IF…THEN…ELSE, WHILE, FOR, PRINT) that reads like the program it will become — and the flowchart, whose symbol grammar is worth memorising: the oval terminator (START/STOP), the rectangle for process, the parallelogram for input/output, the diamond for decision (always two labeled exits, yes and no), joined by flow lines that run top to bottom and left to right. The same logic wears either costume; exams ask you to translate between them.',
      },
      {
        kind: 'para',
        text: 'Between writing an algorithm and trusting it sits the dry run — the trace table. You act as the computer: a row per step, a column per variable, recording every value as it changes, until termination. Trace tables catch the classic errors better than any amount of staring: the off-by-one loop (does the counter stop at n or n−1?), the re-initialised accumulator (a total reset to zero inside the loop), the swapped variables, the unreachable branch. They also teach the honest lesson of this discipline: the computer does exactly what you said, not what you meant — and the trace table is where the difference becomes visible. The worked example below builds one for the three-maximums problem, and the same table skill grades every debugging question the exam sets.',
      },
      {
        kind: 'para',
        text: 'Efficiency completes the thinking. Finding a name in an unsorted list of a thousand cards takes, on average, five hundred comparisons — the linear scan; doing it in a dictionary, halving the remaining range each time, takes at most ten — the binary search\'s logarithmic advantage. The exam\'s quantitative habit is simply counting steps: which algorithm makes fewer comparisons for this input, what happens to the count when the input doubles (a linear method doubles; a binary method adds one). Sorting a list before searching it is an investment that pays off over repeated lookups — the insight that underlies every database index and, at the advanced end, the hash-table lesson this domain carries for when you get there. Note what has not appeared in this part of the lesson: any programming language. Python is one notation for these ideas; the ideas are the syllabus.',
      },
      { kind: 'heading', text: 'Part Two: The Digital Citizen' },
      {
        kind: 'para',
        text: 'Turn the lens around: from what you compute to what computing does to you. Start with the footprint, because you are extending it this second. Active traces are the deliberate layer — your posts, comments, uploads, the profile you curate; passive traces are the collected layer — every site\'s cookies, the location pings, the app that read your contacts, the shopping click-stream that profiling systems splice into a surprisingly complete person. Two properties make the footprint dangerous: it is persistent (deleted is not gone — caches, screenshots and archives keep it) and it collapses audiences (the joke for friends meets the admissions officer and the fraudster in the same search). Management is hygiene, not paranoia: audit old accounts, tighten privacy settings, think in "would I sign this?" terms before posting, and understand that incognito mode hides history from your own device, not from the network or the sites themselves.',
      },
      {
        kind: 'para',
        text: 'The attacks on that footprint follow a taxonomy the exam expects. Phishing and its voice and SMS variants impersonate trustworthy senders to steal credentials — the defense is procedural: check the actual sender address, hover before clicking, never enter passwords reached from a link, and treat urgency as the tell (real institutions do not threaten accounts into expiry in four hours). Malware families differ by behaviour: viruses attach to files, worms self-propagate across networks, trojans masquerade as useful software, ransomware encrypts and extorts, spyware and keyloggers watch and exfiltrate. Identity theft assembles stolen fragments into a fake you —SIM-swap on your phone number, a loan in your name — which is why the defences are the boring ones: long unique passphrases (length beats clever symbol-swapping, and reuse is the real sin), a password manager to make uniqueness possible, two-factor authentication binding login to something you have (a device, a TOTP code) beyond something you know, prompt security patches (most breaches exploit known, unpatched holes), and 3-2-1 backups (three copies, two media, one off-site) against ransomware\'s only true weapon. Cyberbullying closes the personal list: block, report on-platform, preserve evidence (screenshots with dates), and tell someone — the national cybercrime portal (cybercrime.gov.in) and the 1930 helpline exist for exactly this, and using them early is the difference between an incident and a record.',
      },
      {
        kind: 'para',
        text: 'Zoom out to society and three impacts organise the syllabus. The digital divide is first: access (does the village have affordable broadband at all — BharatNet\'s fibre programme and the mobile revolution have moved this), skill (can the household use a browser, UPI, a form in a language it reads — the digital-literacy missions target this) and meaning (does the interface speak your language, work on your old device, respect your disability) — with gender running through all three, since women in the poorest households are the least connected Indians of all. Second, the material underside: e-waste, among the world\'s fastest-growing waste streams and one India ranks high in generating. Discarded devices travel from the formal economy to informal shredding-and-acid workshops where children and pregnant women recover copper and gold at heavy-metal cost; the policy answer is Extended Producer Responsibility under the E-Waste Rules (2022), which makes the manufacturer finance collection and recycling — the exam\'s example of closing a loop the market leaves open. Third, the legal frame: the Information Technology Act (2000) gave electronic records and digital signatures legal standing — the foundation of every UPI payment and e-signature — and its 2008 amendment criminalised the attacks above (identity theft under 66C, cheating by personation online under 66D, obscene content under 67). The Digital Personal Data Protection Act (2023) completes the frame for the individual: consent and purpose limitation for collection, duties and penalties for the data fiduciary, rights of correction and grievance for you.',
      },
      {
        kind: 'para',
        text: 'The last competency is conduct. Netiquette — the etiquette of the networked — is examined as common sense with marks attached: write as if the recipient is in the room (because screenshots are forever), respect others\' bandwidth and inboxes, disagree with the argument and not the person, and credit what you did not make. That credit has law behind it: copyright attaches to expression automatically in India (the Copyright Act, 1957), with fair dealing — the Indian doctrine, narrower than the American "fair use" — allowing limited use for study and review; licensing then tells you what you may do with what you download, from all-rights-reserved through Creative Commons\' graduated permissions to free and open-source software, whose GPL family of licenses makes this very lesson\'s ecosystem possible. Plagiarism — presenting another\'s work as your own — is the academic sin that search engines made trivial to commit and trivial to catch; the professional habit is citation as reflex. And gaming disorder\'s entry into the ICD-11 (the WHO\'s disease classification) marks the honest end of the syllabus: the attention economy is engineered, the "one more level" loop is a design decision, and the digital citizen manages the machine rather than being managed by it — screen-time budgets, notification discipline, and offline life as a primary residence. Computing, this whole lesson says, is a power tool: Part One taught you which end cuts; Part Two taught you where your fingers are.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Largest of Three Numbers: Pseudocode, Flowchart, Trace Table',
        steps: [
          'The problem: read three numbers A, B, C and print the largest. Computational thinking: decompose into compare-pairs; pattern: the maximum accumulates through comparisons; abstraction: only order relations matter, not the numbers\' meaning.',
          'Pseudocode: READ A, B, C → SET MAX = A → IF B > MAX THEN SET MAX = B → IF C > MAX THEN SET MAX = C → PRINT MAX. Each instruction is definite, effective; the sequence is finite — all five Knuth properties check.',
          'Flowchart: oval START → parallelogram READ A, B, C → rectangle MAX = A → diamond B > MAX? (yes → rectangle MAX = B; no → continue) → diamond C > MAX? (yes → rectangle MAX = C) → parallelogram PRINT MAX → oval STOP. Decision diamonds each carry both exit labels.',
          'Trace table for input 12, 7, 20: row 1 READ → A=12, B=7, C=20; row 2 → MAX=12; row 3 B>MAX? → 7>12 false, MAX unchanged; row 4 C>MAX? → 20>12 true → MAX=20; row 5 PRINT 20; STOP.',
          'Verify by adversarial thinking — the cases that break maximum-finders: all equal (12,12,12 → MAX=12, correct); descending (30, 20, 10 → second and third diamonds false, MAX=30, correct); negatives (−5, −2, −9 → MAX starts −5, becomes −2, correct because the comparison, not the value, decides). Dry run until the trace table has covered every branch — that is the testing skill in miniature.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Which pair correctly lists Knuth\'s properties of an algorithm?',
          options: ['speed and memory', 'definiteness and finiteness', 'encryption and compression', 'recursion and iteration'],
          answer: 1,
          explain: 'The classical five: input, output, definiteness, finiteness, effectiveness — "stir until it seems right" fails definiteness, and a loop that never ends fails finiteness.',
        },
        {
          q: 'In a flowchart, a decision is drawn as…',
          options: ['a rectangle', 'an oval', 'a diamond with two labelled exits', 'a parallelogram'],
          answer: 2,
          explain: 'The diamond is the decision symbol; rectangles are processes, ovals terminators, parallelograms input/output — and every diamond needs both yes and no paths.',
        },
        {
          q: 'The main limitation of "incognito mode" for privacy is that…',
          options: ['it slows the browser', 'it hides activity from your own device only — sites and the network still see you', 'it encrypts everything too well', 'it blocks cookies completely'],
          answer: 1,
          explain: 'Private mode skips local history and cookies; your ISP, school or office network and the sites themselves still log the visit — a distinction the exam loves.',
        },
        {
          q: 'Under India\'s DPDP Act (2023), a "data fiduciary" must…',
          options: ['publish all data publicly', 'process personal data only for stated purposes with consent, and safeguard it on pain of penalty', 'never store any data', 'charge users for data'],
          answer: 1,
          explain: 'Consent, purpose limitation, security and grievance redress — with penalties (up to 250 crore rupees for significant breaches) — are the Act\'s machinery.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling any set of instructions an algorithm — finiteness and definiteness are the bar. Confusing pseudocode with a specific programming language, or drawing flowcharts with unlabelled decision exits. Believing incognito means anonymous, or that a "strong" reused password is safe (reuse turns one leak into every account). Treating the digital divide as a rural-only or cables-only problem — skill, language, gender and disability divide inside the cities too. And forgetting that e-waste "away" is someone\'s workshop: the informal recycling yard is where the externality lands.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is the entry point of the Computing & AI domain. Follow-ons: the hash-tables lesson for what efficient lookup grows into, the operating-systems lesson for the machine an algorithm runs on, and the AI lessons (transformers, backpropagation) for the systems now writing and reading beside you. For the digital-citizen half, the everyday-practical domain\'s probability and credit lessons apply the same judgement offline.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Computational thinking = decomposition + pattern recognition + abstraction + algorithm design — a general discipline, not programming itself.',
        'Algorithm = finite, definite, effective input-to-output transformation; express it as pseudocode (READ/SET/IF/WHILE/PRINT) or flowcharts (oval, rectangle, parallelogram, diamond, flow lines).',
        'Dry runs and trace tables: one row per step, one column per variable — the debugging skill exams grade and programmers live by.',
        'Efficiency intuition: count the steps; linear scan of 1,000 items ≈ 1,000 comparisons, binary search ≈ 10 — sorting is an investment that pays per lookup.',
        'Digital footprint: active (posted) and passive (collected); persistent and audience-collapsed; manage with audits, settings, and think-before-post.',
        'Threats and defences: phishing/vishing/smishing (verify senders; urgency is the tell), malware families (virus, worm, trojan, ransomware, spyware), identity theft; passphrases + manager + 2FA + patches + 3-2-1 backups; bullying → block, report, preserve, tell (1930, cybercrime.gov.in).',
        'Societal impacts: the divide (access, skill, meaning — gender through all three); e-waste and EPR under the 2022 Rules; IT Act 2000 (e-records, 66C/66D) and DPDP 2023 (consent, fiduciaries, penalties).',
        'Conduct: netiquette, copyright and fair dealing, Creative Commons and GPL, plagiarism as a career risk — and attention as the resource the digital citizen budgets like any other.',
      ] },
    ],
  },
]

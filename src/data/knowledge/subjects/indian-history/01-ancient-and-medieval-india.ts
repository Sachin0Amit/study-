/**
 * Knowledge Universe — Indian History — Chapter 01: Ancient & Medieval India
 * 4 lessons · ~8,563 words
 * field: History
 * legacy sources: humanities.ts, x17-exam-syllabus.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Ancient & Medieval India]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 hist-thinkers-beliefs-buildings — Thinkers, Beliefs and Buildings: The Buddha, the Sangha and the Stupa
 *   01.2 hist-travellers-vijayanagara — Through the Eyes of Travellers: Foreign Accounts and the Imperial Capital Vijayanagara
 *   01.3 hist-ancient-india — Ancient India: From the Vedic Age to the Guptas
 *   01.4 hist-medieval-india — Medieval India: Delhi Sultanate to the Mughals
 */
import type { KnowledgeTopic } from '../../types'

export const indianHistoryCh01: KnowledgeTopic[] = [
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
  {
    id: 'hist-ancient-india',
    title: 'Ancient India: From the Vedic Age to the Guptas',
    domain: 'Humanities',
    field: 'History',
    branch: 'Ancient & Medieval India',
    tier: 'core',
    concepts: [
      'Sources: epigraphy, coins, literature',
      'Vedic society and the varna order',
      'Mahajanapadas and the rise of Magadha',
      'Mauryan empire and Ashoka\'s dhamma',
      'Arthashastra statecraft',
      'Kushanas, Satavahanas and the Sangam south',
      'The Gupta classical age',
    ],
    words: 1986,
    readMins: 10,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'The Indus Valley Civilization — its grid-planned cities, seals and still-undeciphered script — is the subject of the first civilizations lesson and marks the horizon of this one. Around 1500 BCE that first urban age had faded, and a new society enters the light of readable sources: pastoral tribes composing the hymns that became the Rigveda. Over the next two thousand years their descendants and neighbours built kingdoms, pan-Indian empires and a classical civilisation whose mathematics, art and statecraft still anchor Indian identity — the Vedic age, the world of the Buddha and the sixteen Mahajanapadas, the Mauryan and Gupta empires, and the Sangam kingdoms of the far south. Half the subject is learning to read the unusually varied evidence.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Ancient India is the backbone of every history syllabus in the country (UPSC, CUET, state boards) and the seedbed of later periods: varna becomes caste, Magadha\'s geography fixes the Ganga plain as the political centre of gravity, Ashoka\'s lion capital becomes the national emblem, and the Gupta era\'s decimal mathematics is the world\'s inheritance. The structural outline here follows NCERT\'s Themes in Indian History and Upinder Singh\'s A History of Ancient and Early Medieval India.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Begin with the sources, because examiners reward them. Literary: the Vedic corpus — the Rigveda\'s hymns (c. 1500-1000 BCE) followed by the later Samhitas, Brahmanas, Aranyakas and Upanishads — the Buddhist canon (Tipitaka, including the Jataka birth-stories) and the Tamil Sangam anthologies. Epigraphic: inscriptions on rock and pillar, above all Ashoka\'s edicts, which James Prinsep deciphered in 1837, founding Indian epigraphy, and later the Allahabad Pillar inscription of Samudragupta. Numismatic: punch-marked silver coins from the Mahajanapada era onward, then the superb bilingual coinage of the Indo-Greek and Kushana kings, which names rulers forgotten by every text. Archaeology ties it to settlement: Painted Grey Ware pottery at later Vedic sites, Northern Black Polished Ware in the age of the Buddha.',
      },
      {
        kind: 'para',
        text: 'The Rigvedic world was pastoral and tribal. Society counted itself in lineages (jana), the rajan was a war-leader checked by two assemblies, the sabha and samiti, and wealth was measured in cattle. The four-varna order — Brahmin, Kshatriya, Vaishya, Shudra — appears fully formed only in the late Rigveda\'s Purusha Sukta hymn, a priestly cosmology that later hardened into birth hierarchy. In the later Vedic period (c. 1000-600 BCE) the centre of gravity shifted east into the middle Ganga plain, helped by iron tools and wet rice cultivation; sacrifice grew elaborate, Brahmin status rose, the rajan became a consecrated king celebrated by the rajasuya and ashvamedha rites, and the assemblies faded — the trajectory from tribe to territory that defines early Indian state formation. The Upanishads, which turn from ritual to knowledge of the self, begin the philosophical current followed in the Eastern traditions lesson.',
      },
      {
        kind: 'para',
        text: 'By the sixth century BCE the Ganga plain held sixteen Mahajanapadas — listed in the Buddhist Anguttara Nikaya — from Gandhara in the northwest to Anga in the east: hereditary kingdoms alongside oligarchic republics (ganasanghas) like the Vajji confederacy and the Buddha\'s own Shakya clan. It was an age of religious ferment — Mahavira reorganised the Jain order and Siddhartha Gautama taught the middle path (traditionally c. 563-483 BCE) — and the new movements\' social appeal belongs to this political world of taxed peasants and ambitious kings. Two empires brushed the northwest: the Persian king Darius annexed Gandhara around 516 BCE as an Achaemenid satrapy, and Alexander the Great reached the Hydaspes (Jhelum) in 326 BCE, defeating King Porus before his exhausted army refused to march on. Among the sixteen, Magadha won the long game — fertile alluvium, iron ore in its southern hills, war elephants, and command of Ganga river trade, advantages its capitals Rajagriha and then Pataliputra turned into the subcontinent\'s first imperial power under the Nandas.',
      },
      {
        kind: 'para',
        text: 'Chandragupta Maurya overthrew the Nandas in c. 321 BCE, guided by his minister Chanakya (Kautilya), to whom tradition attributes the Arthashastra — a manual of kingship, taxation, espionage and war that pictures the state as seven limbs and reads like the paperwork of the empire it describes, while the Seleucid ambassador Megasthenes described Pataliputra\'s administration from inside. The hinge figure is Ashoka (ruled c. 268-232 BCE): after the Kalinga war of c. 261 BCE — its carnage confessed in his own Thirteenth Rock Edict — he turned to Buddhism and to dhamma, a state ethics of tolerance, non-violence and welfare: wells and rest houses planted, medical care ordered for humans and animals, respect urged among all sects. He published this on rocks and pillars across the subcontinent in Prakrit, mostly in Brahmi script, with Kharosthi in the northwest and Greek and Aramaic at Kandahar — the first mass political communication in Indian history. Within fifty years of his death the empire had frayed; his last successor Brihadratha was assassinated by his general Pushyamitra Shunga in 185 BCE.',
      },
      {
        kind: 'para',
        text: 'The Shungas held the Ganga plain while the northwest filled with newcomers: Indo-Greek kings, most famously Menander (Milinda), remembered in the Buddhist dialogue Milindapanha, and — from the early first century CE — the Kushanas, whose greatest ruler Kanishka (accession traditionally c. 78 CE, the Saka era) patronised the Fourth Buddhist Council, the Gandhara and Mathura sculpture schools and the Silk Road commerce linking India to Rome and Han China. In the Deccan the Satavahanas, under kings like Gautamiputra Satakarni, fought the western satraps and issued the subcontinent\'s earliest lead and potin coins. The far south stayed outside imperial politics but not commerce: the Sangam age (c. 300 BCE-300 CE) of the Cheras, Cholas and Pandyas produced the Tamil anthologies — akam love poetry and puram war-and-public-life poetry — and ports like Muziris, recorded in the Roman merchant handbook Periplus of the Erythraean Sea; Roman gold coins still surface in south Indian hoards.',
      },
      {
        kind: 'para',
        text: 'The Gupta dynasty (c. 320-550 CE) presides over what textbooks call the classical age — a label that needs care. Chandragupta I founded the line with the title maharajadhiraja; Samudragupta\'s conquests are celebrated in the Allahabad Pillar inscription, a prashasti (panegyric) by his court poet Harisena; Chandragupta II Vikramaditya destroyed the western satraps and hosted the Chinese pilgrim Fa-Hien, who admired Pataliputra\'s free hospitals and noted its caste strictness. The substance: Sanskrit literature at its summit in Kalidasa; Aryabhata\'s Aryabhatiya (499 CE) with the place-value system and zero, early trigonometry and the claim that the earth turns; the beginnings of the nagara temple tradition and the Ajanta paintings; Nalanda growing into a Buddhist university. Politically it was a looser structure than the Mauryan — land grants to Brahmins and officials rather than a salaried bureaucracy, the seed of later medieval patterns — and it broke against the Hunas in the late fifth century, while the southern Vakatakas carried Gupta culture into the Deccan.',
      },
      { kind: 'example', title: 'Worked Example — Dating Ashoka Without a Calendar', steps: [
        'Identify what is asked: no ancient Indian king left a convenient regnal anchor for Ashoka, so how do historians fix his reign at c. 268-232 BCE?',
        'Gather the synchronisms: Rock Edict XIII names five contemporary foreign kings — Antiochus of Syria (Antiochus II Theos), Ptolemy (II Philadelphus) of Egypt, Antigonus (II Gonatas) of Macedonia, Magas of Cyrene and Alexander of Epirus.',
        'Cross-check Greek king-lists: those five reigns overlap around 260-255 BCE, which anchors the edict — and the Kalinga war it says was fought in Ashoka\'s eighth regnal year — to a narrow band.',
        'Corroborate independently: the edicts\' internal regnal-year counts, the Sri Lankan Buddhist chronicles (Dipavamsa, Mahavamsa) on his coronation, and the identification of "Piyadassi" in the Greek and Aramaic Kandahar texts with Ashoka named in other sources.',
        'State the result: converging, independent evidence yields c. 268-232 BCE with surprising precision — synchronism plus corroboration is how all ancient Indian chronology, from the Buddha to Kanishka\'s era, is built and defended in answers.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Exam practice: source-based questions — reading an edict, matching a coin or pottery type to a period — are stock items in UPSC and CUET history.',
        'Civic symbols: the Sarnath lion capital is India\'s national emblem and the Ashoka chakra sits on the flag — both are Mauryan artefacts explained here.',
        'Understanding caste: varna in the Rigveda versus caste as it operates today is the standard essay bridge between ancient and modern India.',
        'World history links: Ashoka and Alexander, Kanishka and the Silk Road, Sangam ports and Roman trade connect this lesson to the classical Mediterranean.',
        'Method training: epigraphy, numismatics and textual criticism feed directly into the archaeology and research-methods lessons.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not start ancient India with the Indus Valley — that ground is covered by the first civilizations lesson, and this one deliberately begins after it. The Vedic age was oral: hymns were composed, memorised and transmitted for centuries before writing, so "text dates" are not composition dates. "Golden age" is a gloss, not a fact — Gupta-era social history also shows declining women\'s status and hardening hereditary occupation. The Aryans are a linguistic, not a racial, category: migration-and-mixture models long ago replaced the old invasion story, and both misreadings remain exam traps. And treat Kanishka\'s 78 CE era as a debated tradition, not settled fact.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'varna', def: 'The fourfold order — Brahmin, Kshatriya, Vaishya, Shudra — first laid out in the late Rigveda and later hardened into birth-based caste.' },
        { term: 'sabha and samiti', def: 'Rigvedic assemblies that checked the king; marginalised as later Vedic kingship concentrated power.' },
        { term: 'Mahajanapada', def: 'One of the sixteen states — kingdoms and republics — of the sixth-century-BCE Ganga plain.' },
        { term: 'dhamma', def: 'Ashoka\'s post-Kalinga state ethics: tolerance, welfare and non-violence, published across his rock and pillar edicts.' },
        { term: 'Arthashastra', def: 'The treatise on statecraft attributed to Kautilya (Chanakya) — taxation, espionage, law and war for an imperial state.' },
        { term: 'prashasti', def: 'An inscription of praise, such as Harisena\'s Allahabad Pillar panegyric for Samudragupta.' },
        { term: 'Sangam', def: 'The Tamil academies (c. 300 BCE-300 CE) whose anthologies document the Chera, Chola and Pandya kingdoms and Roman trade.' },
        { term: 'punch-marked coins', def: 'India\'s earliest coinage — silver pieces stamped with symbols, current through the Mahajanapada and Mauryan eras.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'The four-varna order first appears fully formed in…',
          options: ['the Indus seals', 'the late Rigveda\'s Purusha Sukta hymn', 'Ashoka\'s edicts', 'the Sangam anthologies'],
          answer: 1,
          explain: 'The cosmological hymn of the Rigveda\'s tenth mandala is the earliest text to enumerate the four orders.',
        },
        {
          q: 'Ashoka\'s turn to dhamma followed…',
          options: ['the Kalinga war, confessed in his Thirteenth Rock Edict', 'the battle of the Hydaspes', 'a famine in Magadha', 'the Fourth Buddhist Council'],
          answer: 0,
          explain: 'The edict records his remorse after the carnage of Kalinga (c. 261 BCE) and his new public ethics.',
        },
        {
          q: 'James Prinsep\'s 1837 decipherment of Brahmi unlocked…',
          options: ['the Indus script', 'Ashoka\'s edicts, founding Indian epigraphy', 'the Rigveda\'s metre', 'Tamil poetry'],
          answer: 1,
          explain: 'Reading Brahmi turned anonymous pillars and rocks into dated royal proclamations — the start of ancient Indian epigraphy.',
        },
        {
          q: 'Kanishka, the greatest Kushana, is associated with…',
          options: ['the Allahabad Pillar inscription', 'the Saka era (c. 78 CE), the Fourth Buddhist Council and Gandhara art', 'the Permanent Settlement', 'the Sangam anthologies'],
          answer: 1,
          explain: 'His reign marks the traditional Saka-era start, major Buddhist patronage and the Gandhara and Mathura sculpture schools.',
        },
      ] },
      {
        kind: 'para',
        text: 'Two thousand years separate the Rigveda\'s cattle-counting herders from the Hunas who ended Gupta power, and the through-line is the making of Indian civilisation\'s institutions: varna and sacrificial kingship in the Vedic age, territorial statehood in the Mahajanapadas, pan-subcontinental empire under the Mauryas, cosmopolitan exchange under the Kushanas and Satavahanas, and classical science, literature and art under the Guptas with the Sangam south keeping its own record. The medieval kingdoms that follow inherit every one of these pieces.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: the first civilizations lesson for the Indus horizon, then this one. Follow with medieval India and modern India in this branch for the sequence, the Eastern traditions lesson for the doctrines of the Vedic and Buddhist movements, and the archaeology lesson for excavation method. Upinder Singh\'s A History of Ancient and Early Medieval India and NCERT\'s Themes in Indian History Part 1 are the standard readings.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'hist-medieval-india',
    title: 'Medieval India: Delhi Sultanate to the Mughals',
    domain: 'Humanities',
    field: 'History',
    branch: 'Ancient & Medieval India',
    tier: 'core',
    concepts: [
      'Tripartite struggle for Kannauj',
      'Five dynasties of the Delhi Sultanate',
      'Iqta, khalisa and market reform',
      'Muhammad bin Tughlaq\'s experiments',
      'Vijayanagara and the Bahmanis',
      'Bhakti and Sufi movements',
      'Mansabdari and Akbar\'s sulh-i-kul',
      'Marathas and Mughal decay',
    ],
    words: 2248,
    readMins: 11,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'Between the eighth and eighteenth centuries India was ruled from Kannauj, Delhi, Bidar, Hampi and Agra, and the period\'s institutions — the iqta and the mansab, Bhakti and Sufi devotional cultures, regional kingdoms that spoke Tamil, Telugu, Marathi and Bengali as confidently as Persian — made the society the British would later conquer. Medieval India is not a gap between ancient glory and modern arrival: it is where regional identities, fiscal systems and military technologies that still matter were forged. The story runs from the tripartite struggle for Kannauj through five dynasties of the Delhi Sultanate, the southern empires of Vijayanagara and Bahmani, the Bhakti-Sufi centuries, the Mughal imperium from Babur to Aurangzeb, and the Maratha power that inherited the Mughal decay.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Sultanate revenue experiments, Mughal administrative vocabulary — iqta, zabti, mansab, jagir — and the Bhakti-Sufi synthesis are permanent fixtures of UPSC, CUET and state-PSC syllabi, and the period explains the subcontinent\'s composite culture: languages (Urdu and modern Hindi both grow here), music (qawwali, khayal), architecture (Qutub Minar to the Taj Mahal) and foodways. The outline follows NCERT\'s Themes in Indian History Part 2 and Satish Chandra\'s History of Medieval India.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The early medieval period (c. 750-1200) had no pan-Indian power. Three dynasties fought the tripartite struggle for Kannauj — the Palas of Bengal, the Pratiharas of western India and the Rashtrakutas of the Deccan — a contest running from the late eighth into the early tenth century that exhausted all three, militarised the heartland and left it too fragmented to resist the raids that followed. Mahmud of Ghazni swept down repeatedly between 1000 and 1027 — the sack of Somnath (1025-26) the most famous — extracting wealth without holding territory; the Ghurid ruler Muhammad Ghori changed that by defeating Prithviraj Chauhan at the second battle of Tarain (1192), and his commander Qutbuddin Aibak became the first sultan of Delhi in 1206. The same centuries produced the Chola empire\'s naval reach into southeast Asia and the great temple cities of Thanjavur and Khajuraho — regional, not imperial, polities.',
      },
      {
        kind: 'para',
        text: 'Five dynasties ruled from Delhi between 1206 and 1526: the Mamluk or Slave kings — Aibak; Iltutmish, who regularised the iqta system and kept Chengiz Khan\'s Mongolia at bay by tribute when the Mongols turned from the Indus in 1221; Razia (1236-40), the only woman to sit on Delhi\'s throne; then the Khaljis, the Tughlaqs, the Sayyids and the Lodis, until Ibrahim Lodi fell to Babur at Panipat in 1526. Two reigns concentrate the exam questions. Alauddin Khalji (1296-1316), the Sultanate\'s strongest ruler, fixed the prices of grain, cloth, slaves and horses in three controlled Delhi markets enforced by a market superintendent (shahna) and a web of spies, and paired the experiment with revenue reform: measurement-based assessment of land, demand set at about half the produce, collected directly from the cultivators of the khalisa (crown) lands, funding a large standing army paid in cash. Muhammad bin Tughlaq (1325-51) was the philosopher-king of failed experiments: the transfer of the capital from Delhi to Daulatabad in 1327, cruel and reversed; token bronze-copper currency in 1329-32, ruined when counterfeiting drove coins down to their metal value; a tax hike in the Doab that coincided with famine; and abortive expeditions to Khorasan and the hills of Qarachil. The lesson examiners draw from both: administrative ambition is bounded by enforcement capacity.',
      },
      {
        kind: 'para',
        text: 'Sultanate government ran on the iqta: land assigned to nobles in lieu of cash salary on strict condition that they maintain troops for the sultan — an assignment, never ownership, and transferable at will, while the khalisa lands around Delhi paid the treasury directly. The same logic, with the same disease — assignees squeezing temporary holdings — reappears under the Mughals as the jagir. Delhi\'s grip failed in the Deccan after Muhammad bin Tughlaq, and two successor empires rose: Vijayanagara, founded by Harihara and Bukka in 1336 on the Tungabhadra river, which peaked under Krishna Deva Raya (1509-29) — general, administrator and poet, whose Telugu work Amuktamalyada doubles as a manual of statecraft — with a capital at Hampi that awed foreign visitors like the Persian ambassador Abdur Razzaq and the Portuguese horse-trader Domingo Paes; and the Bahmani kingdom (1347), its chronic rival, whose great vizier Mahmud Gawan built the Bidar madrasa before Deccani-Afaqi court factions had him executed in 1481, after which the Bahmanis dissolved into the five Deccan sultanates — Berar, Ahmednagar, Bijapur, Golconda and Bidar. A coalition of those sultanates destroyed Vijayanagara\'s armies at Talikota in 1565; the city was never rebuilt.',
      },
      {
        kind: 'para',
        text: 'Between the fourteenth and sixteenth centuries, devotional movements rewrote religious practice in the vernacular languages. The Bhakti mainstream — running from the Tamil Alvar and Nayanar saints through Basava\'s Lingayats in Karnataka — matured in the north: Kabir\'s fierce nirguna verses scorning both temple and mosque, ritual and caste; Nanak founding the Sikh community; Mirabai\'s Krishna devotion defying her Rajput widowhood; Tulsidas\'s Ramcharitmanas carrying Rama worship into Hindi-speaking homes; Chaitanya\'s ecstatic Vaishnavism in Bengal. The Sufis carried a parallel Islamic current: the Chishti order — Moinuddin Chishti\'s shrine at Ajmer, Nizamuddin Auliya\'s hospice in Delhi — embraced poverty, service and love while keeping pointedly distant from the state, its sama devotional music the root of qawwali, while the state-friendly Suhrawardi order worked through officialdom. The two currents shared vocabularies, audiences and a critique of priestcraft, and between them they seeded the composite culture and vernacular literatures — the Guru Granth Sahib among them — that modern reform would inherit. The doctrines themselves are treated in the Library\'s religion lessons.',
      },
      {
        kind: 'para',
        text: 'Babur won Panipat (1526) and Khanwa (1527) with field artillery and flanking cavalry, and his frank memoir, the Baburnama, opens the Mughal record. His son Humayun lost the empire to Sher Shah Suri (1540), whose five-year rule left durable public goods — the Grand Trunk Road revived, the rupiya standardised, sarais and land measurement — that the restored Mughals inherited. Akbar (1556-1605), crowned as a boy after the second battle of Panipat, built the empire\'s engine: the mansabdari system, ranking every noble from 10 to 10,000 — the zat rank fixing status and salary, the sawar rank the cavalry contingent he owed; a Rajput policy of marriage alliance and high office that made houses like Amber part of the ruling class; and Todar Mal\'s zabti settlement — measured assessment of land productivity averaged with ten years of prices (the dahsala of 1580) to fix cash demand. After the jizya\'s abolition in 1564, Akbar\'s religious policy matured into sulh-i-kul — peace with all — debated weekly in the Ibadat Khana at Fatehpur Sikri and honoured in practice at his court. Jahangir (1605-27) received Sir Thomas Roe\'s English embassy; Shah Jahan (1628-58) built the Taj Mahal and drained the treasury in Deccan and Central Asian wars; and Aurangzeb (1658-1707), who took the throne after a war of succession, spent forty-nine years fighting it back — reimposing the jizya in 1679, grinding through endless Maratha and Rajput wars, annexing the Deccan sultanates, dying in Ahmednagar in 1707 with the empire overextended and the treasury bare.',
      },
      {
        kind: 'para',
        text: 'Shivaji Bhonsle built a state in the western Deccan from the 1650s — hill forts, lightning cavalry, the killing of Afzal Khan (1659), raids on Surat\'s Mughal-linked wealth — and was crowned chhatrapati at Raigad in 1674 over an ashtapradhan council of eight ministers, his state collecting chauth and sardeshmukhi, a quarter and a tenth, from territory it did not rule. After his son Sambhaji\'s execution by Aurangzeb (1689), the centre of gravity moved to the Peshwas: Balaji Vishwanath (from 1713) welded the confederacy to the throne; Baji Rao I (1720-40) carried Maratha armies to the gates of Delhi; and the great houses — Scindia of Gwalior, Holkar of Indore, Gaekwad of Baroda, Bhonsle of Nagpur — became the subcontinent\'s dominant power, until the Third Battle of Panipat (1761) destroyed the main army under Sadashiv Bhau at Ahmad Shah Abdali\'s hands. Mughal decline had deeper engines than any battle: feeble later emperors, a nobility split into Turani, Irani and Hindustani factions, and the jagirdari crisis — the number of mansabdars chasing too few productive assignments, each squeezing his temporary jagir rather than investing in it (Irfan Habib\'s agrarian-crisis argument) — compounded by Nadir Shah\'s sack of Delhi in 1739, which carried off the Peacock Throne, and Abdali\'s repeated raids. The vacuum the British would fill is the subject of the next lesson.',
      },
      { kind: 'example', title: 'Worked Example — Reading a Mansab', steps: [
        'Identify what is asked: a Mughal noble holds a mansab of 3,000 zat and 2,000 sawar. What does he owe, how is he paid, and where does the system strain?',
        'Decode the ranks: the zat rank (3,000) fixes his personal status and salary scale; the sawar rank (2,000) fixes his obligation — he must present 2,000 troopers, with horses, for the emperor\'s service.',
        'Match a jagir: instead of cash, he is assigned a jagir whose assessed revenue (jama) is meant to fund that salary and troop maintenance — the land itself pays the bill.',
        'Spot the systemic risk: he does not own the jagir, expects transfer within a few years, and so has every incentive to collect beyond the official assessment — and when good assignments run short (the eighteenth-century bejagti crisis), nobles fight each other for the remainder.',
        'Set it in comparative frame: the Delhi Sultans\' iqta, the Ottoman timar and the Japanese fief all pay armies in land revenue — and all decay alike when assignments multiply faster than the land\'s productivity.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Exam practice: pairing each Sultanate reform with its ruler, and each Mughal institution with its article, is the standard short-answer format.',
        'Heritage reading: Delhi\'s Qutub complex, Hampi\'s ruins and Fatehpur Sikri are this lesson\'s architecture in stone.',
        'Understanding language and music: qawwali, khayal, Urdu and the sant-bhasha poets all date from these centuries.',
        'Current debates: temple desecration narratives and "syncretic culture" claims both need the balanced periodisation offered here.',
        'Comparative empire: iqta-timar-mansab comparisons train the institutional analysis the social-sciences lessons formalise.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not treat "the Muslim period" as one bloc: sultans fought sultans, the Mughals extinguished the Lodis and the Deccan sultanates alike, and sectarian labels mislead on every page. Iqta is not ownership and the jagir is not a fief — both are revocable salary assignments, and the difference is a classic trap. Muhammad bin Tughlaq\'s projects failed on execution, not on the logic of the ideas themselves — token currency works only with mint control and trust. Vijayanagara fell in 1565, not to the Mughals but to the Deccan sultanates. And the "golden age" frame fits no medieval century: every era here mixes institutional creativity with coercion.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'iqta', def: 'Delhi Sultanate land assignment held by a noble in lieu of salary, conditioned on maintaining troops; transferable, never owned.' },
        { term: 'khalisa', def: 'Crown lands whose revenue flowed directly to the sultan\'s treasury.' },
        { term: 'sulh-i-kul', def: 'Akbar\'s principle of universal peace — state neutrality and respect among religions.' },
        { term: 'mansab', def: 'The Mughal rank — zat for status and salary, sawar for the cavalry obligation — held by every noble and officer.' },
        { term: 'zabti', def: 'Todar Mal\'s measured land assessment with the dahsala (ten-year average) fixing cash revenue demand.' },
        { term: 'Bhakti', def: 'Vernacular devotional Hinduism — nirguna and saguna streams — from Kabir and Nanak to Tulsidas and Chaitanya.' },
        { term: 'Chishti order', def: 'Sufi lineage of Moinuddin of Ajmer and Nizamuddin of Delhi: poverty, service, sama music, distance from state power.' },
        { term: 'chauth and sardeshmukhi', def: 'The Maratha revenue claims — one quarter and one tenth — levied on neighbouring territories.' },
        { term: 'jagirdari crisis', def: 'The eighteenth-century shortage of productive assignments for a swollen Mughal nobility.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'Iltutmish is remembered chiefly for…',
          options: ['founding Vijayanagara', 'regularising the iqta system and managing the Mongol threat', 'the Delhi market reforms', 'the sulh-i-kul policy'],
          answer: 1,
          explain: 'He organised the nobility\'s assignments and kept Chengiz Khan out by tribute and diplomacy after 1221.',
        },
        {
          q: 'Muhammad bin Tughlaq\'s token currency collapsed because…',
          options: ['copper was too scarce', 'counterfeiting drove tokens down to their metal value', 'the ulema banned coinage', 'the Mongols seized the mints'],
          answer: 1,
          explain: 'Without mint control or token-for-brass exchange discipline, bronze "tanka" coins were forged wholesale and lost their premium.',
        },
        {
          q: 'The dahsala settlement of 1580 was…',
          options: ['Todar Mal\'s ten-year-average revenue assessment fixing cash demand', 'the abolition of the mansabdari system', 'Alauddin Khalji\'s price-fixing scheme', 'the iqta reform of Iltutmish'],
          answer: 0,
          explain: 'Measurement of productivity plus a ten-year price average produced a stable cash demand — the Mughal revenue engine.',
        },
        {
          q: 'Vijayanagara\'s power was broken in 1565 at…',
          options: ['Panipat, by Babur', 'Talikota, by a coalition of Deccan sultanates', 'Khanwa, by Babur', 'Plassey, by the East India Company'],
          answer: 1,
          explain: 'Bijapur, Ahmednagar and Golconda together destroyed the Vijayanagara army; Hampi was sacked and abandoned.',
        },
      ] },
      {
        kind: 'para',
        text: 'From the tripartite struggle to Panipat 1761, medieval India repeatedly solved the same problem — paying a professional army out of land revenue — and repeatedly met the same failure mode when assignees outnumbered acres. What the period added was permanent: regional political identities, a vernacular literary culture shaped by Bhakti and Sufi poets, fiscal techniques the British would copy and a memory of Mughal order against which every later state would be measured. The company that inherited that vacuum is where the next lesson begins.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: the ancient India lesson for the pre-Sultanate background. Follow with the modern India lesson for the colonial transition, the Eastern traditions and Abrahamic faiths lessons for the religions involved, and the comparative-politics lesson for how institutions channel power generally. Satish Chandra\'s History of Medieval India and NCERT\'s Themes in Indian History Part 2 are the standard readings.',
        tone: 'path',
      },
    ],
  },
]

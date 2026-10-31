/**
 * Knowledge Universe — Indian History — Chapter 02: Colonial India & the Freedom Struggle
 * 2 lessons · ~5,539 words
 * field: History
 * legacy sources: humanities.ts, x17-exam-syllabus.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Colonial & Modern India]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 hist-indian-countryside-towns — Peasants, Zamindars and the Colonial City: The Indian Countryside from the Mughals to the British
 *   02.2 hist-modern-india-freedom-struggle — Modern India and the Freedom Struggle: 1757 to 1947
 */
import type { KnowledgeTopic } from '../../types'

export const indianHistoryCh02: KnowledgeTopic[] = [
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
  {
    id: 'hist-modern-india-freedom-struggle',
    title: 'Modern India and the Freedom Struggle: 1757 to 1947',
    domain: 'Humanities',
    field: 'History',
    branch: 'Colonial & Modern India',
    tier: 'core',
    concepts: [
      'Plassey to diwani: trade becomes empire',
      'Land settlements and the colonial economy',
      'Socio-religious reform movements',
      '1857: causes, course, consequences',
      'Moderates, extremists and Swadeshi',
      'Gandhi\'s mass movements',
      'Bose, the revolutionaries and Ambedkar',
      'Muslim League, partition and transfer of power',
    ],
    words: 2771,
    readMins: 14,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'In June 1757 a small East India Company army defeated the nawab of Bengal at Plassey — a battle won by bribery, since the banker Jagat Seth and the commander Mir Jafar had been bought — and by 1765 the Company held the diwani, the right to collect Bengal\'s revenue. Trade had become territory. A hundred and ninety years later the British left, and the subcontinent they left was two countries. This lesson follows the conquest, the colonial economy, the reform movements, the revolt of 1857, the Congress\'s journey from petitions to mass struggle, Gandhi\'s campaigns, the revolutionaries and Ambedkar\'s movement, and the negotiated end that arrived wrapped in partition. The industrial machine that paid for the empire is the subject of the Industrial Revolution lesson; the global decolonization wave India opened is followed elsewhere.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'This is the highest-yield block of Indian history for every exam board — UPSC, CUET, CLAT general knowledge, state PSCs: the chain Plassey → diwani → 1857 → 1885 → 1919 → 1930 → 1942 → 1947 structures dozens of questions, and the causation questions (why Non-Cooperation was withdrawn, why partition happened) reward exactly the connected narrative below. Bipan Chandra\'s India\'s Struggle for Independence is the standard companion.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Plassey (1757) was consolidated at Buxar (1764), where the Company defeated the combined armies of the Mughal emperor, the nawab of Awadh and the deposed nawab of Bengal; the Treaty of Allahabad (1765) granted Robert Clive the diwani of Bengal, Bihar and Orissa. The Company now taxed millions while its servants plundered — the Bengal famine of 1770 killed perhaps a third of the province — and Parliament began asserting control: the Regulating Act (1773) created a governor-general at Calcutta, Pitt\'s India Act (1784) set a Board of Control over the Company. Expansion ran on two instruments: Wellesley\'s Subsidiary Alliance, by which rulers accepted Company troops at their own cost and lost their foreign relations (Hyderabad 1798, Awadh 1801), and, where that failed, war — four Anglo-Mysore wars ended with Tipu Sultan\'s death at Srirangapatnam (1799) — or annexation. Dalhousie\'s Doctrine of Lapse (1848-56) absorbed Satara, Jhansi and Nagpur when rulers died without natural heirs, and the annexation of Awadh in 1856, on grounds of misgovernment, showed every court its future.',
      },
      {
        kind: 'para',
        text: 'The land settlements built the colonial economy. The Permanent Settlement of 1793 — Cornwallis in Bengal — fixed revenue demand forever and made the zamindar a proprietor; demand was set so high that the sunset law auctioned away defaulting estates, and the survivors became a conservative rentier class. Munro\'s Ryotwari Settlement in the south settled revenue directly with each cultivator, barely gentler, and the village-based Mahalwari system covered the North-Western Provinces. Across all three came commercialised agriculture (indigo, cotton, opium), peasant indebtedness, and famines that killed millions while grain moved to ports. De-industrialisation — the collapse of artisan textiles under duty-free Lancashire imports, the other side of the story the Industrial Revolution lesson tells — pushed weavers back onto the land. The railways (Bombay to Thane, 1853), the telegraph, English education and uniform law were built to serve extraction — while carrying the ideas, networks and bilingual professionals who would organise the empire\'s end.',
      },
      {
        kind: 'para',
        text: 'The nineteenth-century response was reform on Indian terms. Raja Ram Mohan Roy founded the Brahmo Samaj (1828), argued from scripture and reason against sati — abolished 1829 under Bentinck — for women\'s property and modern education; Ishwar Chandra Vidyasagar drove the Hindu Widows\' Remarriage Act (1856) and schools for girls. In the west, Jyotiba and Savitribai Phule taught girls and the marginalised from 1848 and founded the Satyashodhak Samaj (1873), the first sustained anti-caste organisation — Ambedkar honoured Phule as a guru. Dayananda Saraswati\'s Arya Samaj (1875) preached "back to the Vedas", rejecting birth caste while embracing modern organisation through shuddhi and the DAV colleges; Syed Ahmad Khan\'s Aligarh movement (Muhammadan Anglo-Oriental College, 1875) urged Muslims toward English education and accommodation with the Raj, seeding the later divide; Vivekananda carried Vedanta to Chicago (1893) and founded the Ramakrishna Mission (1897). The pattern to notice: reformers weaponised the printing press and colonial education while contesting both missionaries and their own orthodoxy.',
      },
      {
        kind: 'para',
        text: 'The revolt of 1857 began at Meerut on 10 May — sepoys freed comrades jailed for refusing the new Enfield rifle\'s cartridges, greased (rumour said, partly truthfully) with cow and pig fat offensive to Hindu and Muslim alike — and marched to Delhi, where the last Mughal, Bahadur Shah Zafar, was proclaimed emperor. The rising swept the Gangetic plain and central India: Nana Saheb and Tantia Tope at Kanpur, Rani Lakshmibai at Jhansi, Begum Hazrat Mahal in Awadh, where taluqdars and peasants fought their own war against annexation and revenue settlement. It was shattering — Delhi and Lucknow fell to assault, atrocities ran on both sides — but not national: Punjab stayed loyal, the south was quiet, most princes backed the British, and no united command or programme existed. The consequences were decisive: the Company abolished, the Crown ruled directly through a secretary of state and viceroy (Government of India Act 1858), the army reorganised around loyal recruitment and British officers, the Queen\'s Proclamation promising non-interference in religion, and divide-and-rule hardening into open strategy.',
      },
      {
        kind: 'para',
        text: 'The Indian National Congress first met in December 1885 in Bombay — seventy-two delegates convened by the retired official A.O. Hume, which fed the "safety valve" theory of a manufactured safety outlet; the modern reading is that Hume was a useful lightning conductor for organisation Indian leaders wanted anyway. The moderate era (1885-1905) — Surendranath Banerjea, Pherozeshah Mehta, Gokhale — worked petitions, speeches and council obstruction, and built the national public sphere; critics called it "political mendicancy". Curzon\'s partition of Bengal (1905) detonated the extremist turn: Lal-Bal-Pal and Aurobindo Ghosh led Swadeshi — boycott of British goods, national education, swadeshi enterprise, Vande Mataram in the streets — until the partition was annulled in 1911. Tilak turned festivals into mass politics and declared "Swaraj is my birthright and I shall have it"; revolutionary cells (Anushilan Samiti, the Alipore case) began here. The Morley-Minto reforms (1909) answered with separate electorates for Muslims — the constitutional seed of partition, watered by every later concession.',
      },
      {
        kind: 'para',
        text: 'Mohandas K. Gandhi returned from South Africa in January 1915 with satyagraha — disciplined mass non-violence. Three local struggles built his base: Champaran (1917, indigo), the Ahmedabad mill strike and Kheda (1918, tax refusal). The Rowlatt Act (1919, detention without trial) carried him to all-India leadership on the eve of Jallianwala Bagh, where General Dyer\'s troops fired on a peaceful Amritsar gathering on 13 April 1919, killing hundreds. Non-Cooperation (1920-22) fused the Congress, the Khilafat agitation and the charkha — lawyers resigned, students walked out — and when a crowd burned policemen alive at Chauri Chaura in February 1922, Gandhi halted the movement rather than let violence capture it, a withdrawal contested ever since. The decade then accelerated: the all-white Simon Commission (1927) met black flags; the Nehru Report (1928) and Jinnah\'s Fourteen Points staked rival ground; the Lahore Congress (December 1929) declared Purna Swaraj and hoisted the tricolour on 26 January 1930 — the date the republic would later choose. Civil Disobedience opened with the Dandi March (12 March to 6 April 1930): Gandhi and seventy-eight followers walked 240 miles to the sea and picked up salt, breaking the salt law in an act every village understood; hundreds of thousands courted arrest, and the Dharasana raid after his arrest — Sarojini Naidu leading — made world news. The Gandhi-Irwin Pact (1931), the failed Second Round Table Conference, resumption, and the Government of India Act 1935 — provincial autonomy, Congress ministries from 1937 — set the frame. When the Cripps Mission offered postwar promises in a war Indians had not chosen, Congress demanded immediate withdrawal: on 8 August 1942 Bombay passed Quit India. The leadership was jailed within hours, and for two years the movement ran underground — Aruna Asaf Ali at Gowalia Tank, Usha Mehta\'s secret Congress Radio, parallel governments in Satara, Tamluk and Ballia — suppressed by a brutality that proved the Raj now ruled by force alone.',
      },
      {
        kind: 'para',
        text: 'The revolutionary stream ran alongside. Bhagat Singh and the HSRA killed the police officer Saunders to avenge Lala Lajpat Rai\'s fatal lathi blows, threw harmless bombs into the Central Legislative Assembly "to make the deaf hear", turned his trial into a classroom, and was hanged in Lahore jail on 23 March 1931, aged twenty-three; Surya Sen\'s Chittagong armoury raid (1930) sent Pritilata Waddedar and Kalpana Dutt into legend. Subhas Chandra Bose — twice Congress president — broke with Gandhi at Tripuri (1939), founded the Forward Bloc, escaped house arrest in disguise (1941), reached Germany and then Singapore, where he revived the Indian National Army from prisoners of war, proclaimed the Provisional Government of Azad Hind on 21 October 1943 with its Rani of Jhansi regiment under Lakshmi Sahgal, and marched with the Japanese to India\'s eastern gate before Imphal and Kohima broke the attempt (1944). He died in an air crash in August 1945 — but the Red Fort trials of INA officers that winter and the Royal Indian Navy mutiny of February 1946 told Britain its final instrument, Indian loyalty, had failed. The third stream was B.R. Ambedkar\'s. Born a Mahar, armed with doctorates and the bar, he led the depressed classes in their own struggle — the Mahad satyagraha for tank-water rights (1927), the Kalaram temple entry (1930), separate electorates pressed at the Round Table Conferences. Gandhi\'s fast against the Communal Award (1932) forced the Poona Pact: reserved seats within joint electorates, the design that carries Dalit representation to this day. Ambedkar\'s Independent Labour Party (1936) and his later turn to Buddhism frame a struggle for social freedom that political independence alone did not complete.',
      },
      {
        kind: 'para',
        text: 'The endgame ran fast. The Muslim League — founded at Dhaka in 1906 by notables loyal to the Raj — travelled from the Simla Deputation\'s separate electorates through the Lucknow Pact (1916) to the Lahore Resolution of 23 March 1940, demanding separate states for Muslim-majority regions: the two-nation theory made policy. The League swept the Muslim seats in 1945-46; Direct Action Day (16 August 1946) lit the Great Calcutta Killing, which spread to Bihar and Noakhali — Gandhi walking village to village, alone — and the Cabinet Mission\'s three-tier federation collapsed in distrust. Attlee announced on 20 February 1947 that Britain would quit by June 1948; Mountbatten arrived in March and moved the date up; the June 3 Plan conceded partition; the Indian Independence Act passed the British Parliament on 18 July 1947; and the Radcliffe Line — drawn in five weeks by a barrister who had never seen India — split Punjab and Bengal. On 14-15 August 1947 India and Pakistan became free; twelve to fifteen million people crossed the new line, and the killing took hundreds of thousands to a million lives. The Constituent Assembly, elected in 1946 under the Cabinet Mission and meeting since 9 December 1946, became the new state\'s parliament: Ambedkar chaired its drafting committee, Nehru\'s Objectives Resolution became the Preamble, and the constitution was adopted on 26 November 1949 to commence 26 January 1950 — machinery the Indian polity lesson dissects.',
      },
      { kind: 'example', title: 'Worked Example — Was 1857 a "Sepoy Mutiny" or the "First War of Independence"?', steps: [
        'Identify what is asked: a question with an imperial answer (Victorian "mutiny") and a nationalist one (Savarkar\'s 1909 label, now in textbooks) — the task is to weigh evidence and criteria, not choose a slogan.',
        'Assemble the mutiny case: it began among sepoys over cartridges; most of India did not join — Punjab\'s soldiers helped suppress it, the south and the princes stood aside; the rebels had no common leadership, programme or modern political aim, and Bahadur Shah Zafar was a despairing figurehead.',
        'Assemble the war-of-independence case: the spread was huge — Delhi, Awadh (where peasants and taluqdars fought annexation and the revenue settlement), Rohilkhand, Bundelkhand, central India; civilians, landlords and religious leaders joined; every target was a symbol of alien rule.',
        'Apply the criterion — what makes a movement national? Shared consciousness, united organisation, a programme beyond restoration. On all three, 1857 falls short — which is exactly why it stayed a memory rather than a movement.',
        'Conclude with the calibrated verdict (Bipan Chandra\'s): much more than a military mutiny, considerably less than a national war of independence — the largest armed challenge to British rule before 1942, fought on pre-national lines by an alliance of the dispossessed. That formulation earns marks because it explains both the scale and the limits.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Exam practice: date-chains, causation (why 1857 failed, why Non-Cooperation was withdrawn, why partition happened) and personality matching are the three standard formats here.',
        'Understanding current politics: reservations, the Poona Pact\'s design and Article 17\'s abolition of untouchability all trace to this period.',
        'Reading the constitution: the Constituent Assembly story explains the Preamble, Fundamental Rights and the republic\'s choice of 26 January.',
        'Media literacy: partition memory and two-nation debates still shape India-Pakistan coverage; knowing the actual sequence inoculates against myth.',
        'Biography as method: Gandhi, Ambedkar, Bose and Jinnah make contrasting case studies in leadership under constraint.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not date the empire from Plassey alone: the diwani (1765) is the hinge from trade to sovereignty, and full subcontinental control came only by 1849. The freedom struggle was not one seamless movement: moderates, extremists, Gandhians, revolutionaries and Ambedkarites disagreed as much with each other as with the Raj. Non-Cooperation was withdrawn over Chauri Chaura — know the date and the debate. The League\'s sweep of 1945-46 and Direct Action Day matter more for partition than any single villain theory; equally, partition was not inevitable until quite late. And do not merge this story into the global decolonization wave: India was the first and template-setting case, but its dynamics — separate electorates above all — were its own.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'diwani', def: 'The 1765 right to collect Bengal\'s land revenue, granted after Buxar — the hinge from trade to empire.' },
        { term: 'Permanent Settlement', def: 'Cornwallis\'s 1793 fixing of Bengal\'s revenue with zamindars as proprietors; the sunset law auctioned defaulters.' },
        { term: 'Doctrine of Lapse', def: 'Dalhousie\'s annexation of states (Satara, Jhansi, Nagpur) whose rulers left no natural heir — a standing 1857 grievance.' },
        { term: 'satyagraha', def: 'Gandhi\'s method: truth-force, disciplined civil disobedience, willingness to suffer rather than inflict suffering.' },
        { term: 'Purna Swaraj', def: 'Complete independence, declared at Lahore (December 1929) and first hoisted on 26 January 1930.' },
        { term: 'Poona Pact', def: 'The 1932 Gandhi-Ambedkar agreement replacing separate electorates for the depressed classes with reserved seats.' },
        { term: 'two-nation theory', def: 'The claim that Hindus and Muslims are separate nations, resolved into the Lahore Resolution (1940) and partition.' },
        { term: 'Radcliffe Line', def: 'The 1947 boundary award splitting Punjab and Bengal, drawn in five weeks and announced after independence.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'The Company\'s right to collect Bengal\'s revenue (the diwani) followed…',
          options: ['the battle of Plassey (1757)', 'the battle of Buxar and the Treaty of Allahabad (1764-65)', 'the Permanent Settlement', 'the Regulating Act'],
          answer: 1,
          explain: 'Plassey bought influence; Buxar won it. The 1765 diwani turned a trading firm into a territorial sovereign.',
        },
        {
          q: 'Gandhi withdrew the Non-Cooperation movement after…',
          options: ['Jallianwala Bagh', 'the Chauri Chaura violence of February 1922', 'the Dandi March', 'the failure of the Cripps Mission'],
          answer: 1,
          explain: 'A crowd burned alive policemen at Chauri Chaura; Gandhi halted the movement rather than let violence lead it.',
        },
        {
          q: 'The Poona Pact (1932) settled…',
          options: ['the salt tax', 'separate electorates versus reserved seats for the depressed classes', 'the partition of Bengal', 'the INA trials'],
          answer: 1,
          explain: 'Gandhi\'s fast against the Communal Award ended with Ambedkar accepting reserved seats within joint electorates.',
        },
        {
          q: 'The Lahore Resolution of March 1940 demanded…',
          options: ['dominion status', 'separate states for Muslim-majority regions — the two-nation policy', 'immediate elections', 'the Cabinet Mission plan'],
          answer: 1,
          explain: 'Passed at the Muslim League\'s Lahore session, it is the constitutional parent of Pakistan.',
        },
      ] },
      {
        kind: 'para',
        text: 'From Plassey to partition runs one arc: a trading company becomes a state, the state rebuilds the economy and society to serve extraction, and the education, railways and law it builds incubate the nationalism that expels it — through mass non-violence, revolutionary violence and constitutional negotiation all at once, with the movement\'s internal fault lines of caste, class and religion writing the map of 1947. The constitution the Assembly then wrote is the subject of the polity lesson; the economy of the new state belongs to the macroeconomics one.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: the ancient and medieval India lessons, or any equivalent survey. Follow with the Indian polity lesson for the constitution this era produced, the Industrial Revolution lesson for the British side of the imperial economy, and the decolonization lesson for the global wave India began. Bipan Chandra\'s India\'s Struggle for Independence and NCERT are the standard readings.',
        tone: 'path',
      },
    ],
  },
]

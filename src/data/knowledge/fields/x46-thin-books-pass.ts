import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X46 pass (2026-10-25): thin-subject deepening.                     */
/*                                                                     */
/*  The subject audit showed several Library books below the           */
/*  ≥3-lesson minimum: Hindi (1 lesson), Anthropology (2),             */
/*  Media & Communication (2), French (2). This pass adds one honest   */
/*  lesson to each thin book so every book carries at least three      */
/*  lessons. Sources read for grounding: OpenStax, Introduction to     */
/*  Anthropology, ch. 11 ("Reckoning Kinship across Cultures") —       */
/*  openstax.org/books/introduction-anthropology/pages/11-3;           */
/*  The Ohio State University Pressbooks, Writing for Strategic        */
/*  Communication Industries, ch. 4 "News Value" and ch. 5 "News       */
/*  Writing Basics" — ohiostate.pressbooks.pub/stratcommwriting;       */
/*  Premchand, Godaan (1936) — archive.org/details/Godan-Hindi;        */
/*  NCERT Hindi curriculum units (vyakaran, ras, alankar, chhand).     */
/*                                                                     */
/*  DEDUP CARVING (verified against EXCLUDED_TOPICS and live topics):  */
/*  - lang-hindi-literature-masters / lang-hindi-grammar-workshop      */
/*    are carved against lang-hindi-foundations, which owns            */
/*    Devanagari, matras, SOV order, gender agreement and the          */
/*    Hindi-Urdu digraphia. No existing lesson owns the literature     */
/*    periods or the sandhi/samas/ras/alankar apparatus.               */
/*  - anth-kinship-descent-marriage is carved against                  */
/*    soc-family-religion-institutions, which owns family as a social  */
/*    institution, religion typology, secularization and anomie.       */
/*    This lesson owns the comparative descent/marriage/terminology    */
/*    machinery that cultural anthropology actually uses.              */
/*  - media-journalism-craft is carved against                         */
/*    gp-mass-media-society-responsibility (media ages, functions,     */
/*    gatekeeping, framing, ethics, regulation) and                    */
/*    soc-media-communication (framing). This lesson owns the          */
/*    production craft: news values, the inverted pyramid, sourcing.   */
/*  - lang-french-reading-francophonie is carved against               */
/*    lang-french-foundations (pronunciation, articles, gender,        */
/*    être/avoir, tu/vous, survival phrases) and lang-french-verbs     */
/*    (conjugation classes, irregulars, negation, passé composé).      */
/*    This lesson owns reading strategy and the francophone world.     */
/* ------------------------------------------------------------------ */

export const x46ThinBooksPassTopics: KnowledgeTopic[] = [
  {
    id: 'lang-hindi-literature-masters',
    title: 'Hindi Literature: From Kabir’s Dohas to the Nayi Kahani',
    domain: 'Languages & World Literature',
    field: 'Hindi',
    branch: 'Hindi Literature',
    tier: 'core' as const,
    concepts: [
      'Four periods: Adikal, Bhaktikal, Ritikal, Adhunik',
      'Nirguna and Saguna: Kabir versus Tulsidas',
      'Ramcharitmanas (1574): the Awadhi Ramayana',
      'Chhayavad: the romantic flowering of poetry',
      'Premchand and Godaan (1936): rural realism',
      'Nayi Kahani: the story turns inward',
    ],
    words: 1614,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book taught you to read Devanagari and build sentences; this lesson shows what the language built with them. Hindi literature runs a little over a thousand years deep, from the ascetic verses of the Siddha poets to the quietly devastating short stories of the 1950s, and it organizes itself — the way most Indian literary traditions do — into four classical periods: Adikal (the early age), Bhaktikal (the age of devotion), Ritikal (the age of ornament and court craft) and Adhunik kal (the modern age). Knowing the map matters less than knowing why each turn happened: each period answers a different question about who poetry is for and what language is allowed to do.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'These periods are not museum shelves. Kabir’s couplets are quoted in everyday argument, Tulsidas’s lines are sung on the street, and Premchand’s peasants still explain rural India to Indians better than most statistics. A reader who can place a line — early epic, devotion, court ornament, romance, realism, inner story — holds a thousand years of conversation in one hand, and can tell instantly why a couplet sounds the way it does.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The lineage runs from Apabhramsha — the late Middle Indo-Aryan speech that followed Sanskrit and Prakrit — into the regional vernaculars of north India. Early Hindi literature is therefore not one stream but several, written in Braj, Awadhi, Khari Boli and their kin. Khari Boli, the plain western dialect of the Delhi region, eventually became the standard the modern language is built on; Braj held the court-poetry and Krishna-poetry crown for centuries before it. Historians draw the four-period map from the shape of the surviving literature itself: what was copied, sung, taught and eventually printed, since printing and the colonial-era schools fixed the canon in the nineteenth century.',
      },
      {
        kind: 'para',
        text: 'Adikal, roughly the twelfth to the fourteenth centuries, carries three strands: the Siddha and Nath verse of yogic ascetics, Jain didactic writing, and the heroic epics of the Rajput courts — the veergatha tradition. The most famous is the Prithviraj Raso, attributed to Chand Bardai, the court poet said to have accompanied Prithviraj Chauhan; whatever its historical layers, it fixed the model of the bard celebrating a warrior’s honor, and gave literary Hindi its taste for the heroic register. This is literature as lineage and courage: genealogy, battle, loyalty, death.',
      },
      {
        kind: 'para',
        text: 'Bhaktikal (roughly the fifteenth to the seventeenth centuries) is the tradition’s center of gravity, and it splits into two rivers. The Nirguna poets — Kabir above all, with Raidas and the Sant tradition — sang of a formless God beyond temples and castes, in short, punchy doha couplets that could be remembered by anyone: the famous “Guru Govind dou khade, kaake laagu paay” weighs teacher against God and tells you to bow to the one you struck first. Kabir’s language is deliberately common — the bazaar, the loom, the wheel — because his theology demanded a common audience. The Saguna river sings God with form and story: Tulsidas’s Ramcharitmanas, begun in 1574 at Ayodhya, retells the Ramayana in Awadhi so that the story belongs to households rather than priests; Surdas’s Sursagar pours the Krishna cycle into Braj Bhasha with a lyric tenderness that made Braj the poetic language for two centuries. Devotion here is not an idea but a relationship — servant, friend, parent, lover.',
      },
      {
        kind: 'para',
        text: 'Ritikal, the seventeenth and eighteenth centuries, is the court age: riti means method or convention, and its poets were professionals serving patrons who admired technical brilliance. The great exhibits are Bihari’s Satsai (1662), some seven hundred couplets of condensed wit — many on the romances of Krishna and Radha — and a whole apparatus of nakh-shikh descriptions, from the toenail to the crown of the beloved. The period gets a dry reputation in textbooks, which is unfair: its best couplets fold an entire scene into sixteen syllables, and its ornament (we meet the alankar machinery in the grammar lesson of this book) was the technology of compression. It declined when the courts that paid for it did.',
      },
      {
        kind: 'para',
        text: 'Adhunik kal, the modern age from the mid-nineteenth century, begins with prose. Bharatendu Harishchandra (1850–1885), called the father of modern Hindi, filled journals with essays, drama and social satire and argued that the language should speak to public life; the journal Saraswati (from 1900) standardized the essay and the short story for a school-going readership. Then poetry exploded. Chhayavad — the Shadow Age, roughly 1918–1936 — is Hindi romanticism: subjectivity, nature, melancholy beauty, the self as a real subject. Its four canonical figures are Jaishankar Prasad, whose long poem Kamayani (1935) reworks the great flood myth into a meditation on desire, intellect and karma; Suryakant Tripathi Nirala, the restless innovator; Sumitranandan Pant; and Mahadevi Varma, sometimes called the modern Meera. In the same decade the Progressive Writers’ movement (its manifesto era begins in 1936) demanded literature face poverty, famine and colonial injustice — and the age’s greatest prose writer had already answered.',
      },
      {
        kind: 'para',
        text: 'Premchand (1880–1936) is Hindi realism. His novels and stories put the village, the moneylender, the widow and the peasant debt cycle at the center of serious fiction; Sevasadan examined the economics of a courtesan’s life when respectable fiction would not touch it, and Godaan (1936), his last completed novel, follows Hori, a farmer whose entire horizon narrows to the dream of giving one cow-daan at his death — the novel’s title — while debt, caste and colonial taxation grind the family down. The book is freely readable in the original on the Internet Archive, and it still explains rural India with a precision most reporting cannot match. After Premchand, the Nayi Kahani (New Story) movement of the 1950s turned inward: Nirmal Verma and Mohan Rakesh wrote plotless, atmospheric stories about middle-class interiors, displacement and the things people cannot say — the short story becoming a lens for consciousness itself. Modern Hindi literature has run on both engines since: society outside, the self inside.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: place three famous lines in their periods — a doha on a formless God; a couplet describing the beloved’s eyes in sixteen syllables; a paragraph of plain prose about a farmer’s debt.',
          'Recall the map: Nirguna Bhakti sings a God without form in memorable couplets; Ritikal is the court age of ornament and compression; the modern age brought prose realism.',
          'Apply it: the doha is Kabir’s world — Bhaktikal, Nirguna stream. The ornate couplet is Ritikal craft, Bihari’s territory. The debt prose is Premchand — Adhunik kal, realism.',
          'State the result: three lines, three centuries, three answers to “who is this for?” — the devotee, the court, the reading public. The map lets you hear the audience inside the style.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Reading in the original: the Ramcharitmanas, Kabir’s Bijak and Godaan are all freely available — the Internet Archive hosts the original text of Godaan, and the manas is sung publicly wherever Ramlila is staged.',
        'Song and cinema: film lyrics consciously quote Bhakti dohas and Chhayavad imagery; recognizing the source doubles the meaning.',
        'Editorial and essay writing: the Saraswati-era essay is the direct ancestor of the Hindi opinion column; its plain-style norms still govern journalism.',
        'Translation practice: Premchand and Nirmal Verma are the standard entry points for translators, and their sentences teach more about register than any grammar book.',
        'Everyday quotation: courtroom speeches, wedding toasts and political rallies all reach for the same canonical lines this lesson maps.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, memorizing the period dates without the logic behind them: each age ends when its audience or patron does — courts fall, printing arrives, the reader becomes a citizen. Second, assuming Nirguna means anti-Saguna in hatred rather than in method; Kabir argues with ritual, not with the devotee. Third, calling Ritikal poetry shallow because it is ornate — the ornament is the engineering, not the paint. Fourth, reading Premchand as only misery; his peasants are moral agents with humor and pride, and the realism is in the accounting, not the weeping. Last, treating the Nayi Kahani as plotless trivia — the plotless story was the point: attention itself became the event.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'doha', def: 'A self-contained couplet of long and short lines — the standard unit of Nirguna Bhakti verse.' },
        { term: 'Nirguna', def: 'Devotion to a formless God, beyond image and ritual — the stream of Kabir and the Sants.' },
        { term: 'Saguna', def: 'Devotion to God with form and story — Tulsidas’s Rama, Surdas’s Krishna.' },
        { term: 'Chhayavad', def: 'Hindi romanticism (c. 1918–1936): subjectivity, nature and melancholy beauty — Prasad, Nirala, Pant, Mahadevi.' },
        { term: 'Pragativad', def: 'The Progressive Writers’ movement (manifesto era 1936): literature committed to social realism and anti-colonial critique.' },
        { term: 'Nayi Kahani', def: 'The New Story movement of the 1950s–60s: interior, atmospheric fiction — Nirmal Verma, Mohan Rakesh.' },
        { term: 'Khari Boli', def: 'The Delhi-region dialect that became the standard base of modern Hindi prose and verse.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Ramcharitmanas, begun in 1574, retells the Ramayana in which dialect?',
          options: ['Braj Bhasha', 'Khari Boli', 'Awadhi', 'Apabhramsha'],
          answer: 2,
          explain: 'Tulsidas wrote the manas in Awadhi, the eastern vernacular — the choice that carried the story into households.',
        },
        {
          q: 'Kabir belongs to which stream of the Bhakti age?',
          options: ['Saguna', 'Nirguna', 'Riti', 'Veergatha'],
          answer: 1,
          explain: 'His dohas worship a formless God and argue against ritual — the Nirguna Sant stream.',
        },
        {
          q: 'Godaan (1936), Premchand’s last completed novel, centers on…',
          options: ['a courtesan’s education', 'a peasant’s dream of giving one cow at his death', 'a poet’s flood vision', 'a court poet’s couplets'],
          answer: 1,
          explain: 'Hori’s single wish — the cow-daan of the title — lets the novel audit debt, caste and colonial taxation in one village.',
        },
        {
          q: 'Kamayani (1935) is the flagship long poem of which movement?',
          options: ['Nayi Kahani', 'Pragativad', 'Chhayavad', 'Ritikal'],
          answer: 2,
          explain: 'Jaishankar Prasad’s flood-myth poem is the peak of Chhayavad romanticism, the age of the self and the shadow.',
        },
      ] },
    ],
  },
  {
    id: 'lang-hindi-grammar-workshop',
    title: 'Hindi Grammar Workshop: Sandhi, Samas, Rasa and Alankar',
    domain: 'Languages & World Literature',
    field: 'Hindi',
    branch: 'Hindi Grammar',
    tier: 'core' as const,
    concepts: [
      'Sandhi: svar, vyanjan and visarga fusion',
      'Samas: five families of compounds',
      'Bahuvrihi: the compound that names something else',
      'Navarasa: the nine sentiments',
      'Alankar: sound figures and meaning figures',
      'Chhand: doha, chaupai and savaiya meters',
    ],
    words: 1373,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'School grammar has a bad reputation for naming things you already do without thinking. The Hindi grammatical tradition — inherited from Sanskrit analysis and sharpened by a century of textbooks — is better than that: its names are tools. Sandhi explains how two words fuse into one sound shape, samas classifies the compounds that let Hindi build enormous meanings inside a single word, rasa gives you a working vocabulary for what a poem makes you feel, alankar names the figures that make it stick, and chhand measures the beat. Together they are the difference between reading Hindi and owning it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'These five systems are the exact vocabulary Hindi poetry, journalism and exams cycle through. Split a word like विद्यार्थी into its parts and you never forget its spelling; hear a couplet’s rasa and its meter and you can memorize it in one pass; name an alankar and you can use the trick in your own writing. Grammar, done in this tradition, is not correctness policing — it is pattern literacy.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Sandhi — joining — covers the sound changes when two free words merge into one. Svar sandhi fuses vowels: विद्या + अर्थी becomes विद्यार्थी (the final आ and the initial अ merge into the long ा), देव + इन्द्र becomes देवेन्द्र, and the classic pattern where अ/आ followed by इ/ई yields ए explains देव + इश = देवेश. Vyanjan sandhi handles consonants: सत् + जन becomes सज्जन, the final t of सत् turning the j into a doubled ज्ज — consonant doubling is its signature. Visarga sandhi covers the ः ending: निः + चय becomes निश्चय, the visarga reshaping into श् before the following sound. The drill is always the same: split the word aloud, hear where the boundary is, and the fusion becomes reversible.',
      },
      {
        kind: 'para',
        text: 'Samas — composition — classifies compound words into five families. Dvandva (couple) compounds list equals: माता-पिता, mother-father, both fully weighted. Tatpurush (that-person) compounds give a case relationship: राजपुत is a king’s son, the genitive hidden inside. Karmadharaya compounds are tatpurush with an adjective inside: नीलकमल, a blue lotus, where नील describes कमल. Bahuvrihi (much-rice) compounds are the clever ones: they describe a thing by a quality it has — दशानन, ten-mouthed — but name something else, Ravana; the compound is a title, not a description of the head word. Dvigu compounds begin with a number: त्रिलोक, three-worlds, the heavens, earth and underworld. The bahuvrihi/tatpurush boundary is the classic exam trap: नीलकमल is a lotus that is blue, दशानन is not a mouth that is ten — it is Ravana.',
      },
      {
        kind: 'para',
        text: 'Rasa is the aesthetics system: the sentiment a work of art evokes in a trained reader. The classical list — the navarasa — counts nine: श्रृंगार (the erotic and the beautiful), वीर (the heroic), करुण (pathos), रौद्र (fury), हास्य (comic), भयानक (the terrible), बीभत्स (the loathsome), अद्भुत (the marvelous) and शांत (tranquility, added by later theorists). Each rasa is built from a stable underlying emotion — the sthayi bhav — fired by scene, dialogue and performance; theory says the sentiment is tasted, not just felt, the way a flavor is. The system is Indian drama’s answer to Aristotle, and it travels: a Bhakti doha of pathos and a Bollywood fight scene both run rasa machinery, just with different fuel.',
      },
      {
        kind: 'para',
        text: 'Alankar — ornament — names the devices that make language memorable, and the tradition splits them in two. Shabd-alankar play on sound itself: anupras is alliteration, the same consonant repeating for music; yamak repeats the same word in different senses inside one line; shlesh is the pun, one sound carrying two meanings at once. Arth-alankar play on meaning: upma is the explicit simile with its marker (जैसे, समान — brave like a lion); roopak is the metaphor that skips the marker and asserts identity (he is a lion); utpreksha is the fancy, a conjectured resemblance; atishayokti is hyperbole; and arthantaranyas carries a general truth from a specific example. The habit to build: when a line refuses to leave your head, name what it did — the name is the recipe.',
      },
      {
        kind: 'para',
        text: 'Chhand is meter, measured in matras (syllabic beats). The doha — the couplet Kabir and Rahim made immortal — runs thirteen matras in the first line and eleven in the second, a shape built for aphorism: state, turn, land. The chaupai, sixteen beats to the line, is the manas’s narrative workhorse, marching where the doha leaps. The savaiya adds a quarter-line asymmetry that classical poets loved for self-contained arguments. You do not need to scan verse professionally; you need to hear that a doha closes like a door and a chaupai walks like a road — that hearing is what the matra count exists to certify.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: fully analyze the word विद्यार्थी and the compound दशानन, then classify the line “वह चांद है” (she is the moon).',
          'Recall the tools: sandhi splits fusion; samas names compound families by what the parts do; alankar names figures by the trick they play.',
          'Apply it: विद्यार्थी = विद्या + अर्थी by svar sandhi (आ + अ → आ), a tatpurush compound meaning seeker of learning. दशानन is bahuvrihi: “ten-mouthed” names Ravana, not a mouth. “वह चांद है” asserts identity without a simile marker — roopak.',
          'State the result: one word unpacked into sound and sense, one title explained as a quality-transfer, one figure named. Three systems, three seconds each — the tools pay rent immediately.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Spelling and vocabulary: knowing sandhi and samas makes unfamiliar long words divisible on sight — the single fastest vocabulary skill in Hindi.',
        'Writing and rhetoric: name an alankar and you can deploy it; most effective Hindi copywriting is upma and yamak doing quiet work.',
        'Song lyrics and poetry: Bollywood lyrics are alankar-and-chhand machines; hearing the meter is why some lines stick and others do not.',
        'Editing and journalism: splitting sandhi compounds is the editor’s tool for spotting the wrong-but-common spelling before print.',
        'Teaching and learning: the five systems are the standard lesson skeleton for Hindi classes at every level — you can build a lecture from this page alone.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The first error is treating sandhi as spelling trivia; it is the reason spellings are what they are, and reversing it (विद्यार्थी → विद्या + अर्थी) is the study method. Second, confusing tatpurush with bahuvrihi: ask whether the compound’s head is meant literally (राजपुत really is a son) or as a transferred title (दशानन is Ravana). Third, mixing roopak and upma — if a comparison word (जैसे, समान) survives, it is simile; if identity is asserted, metaphor. Fourth, counting rasa as “mood” loosely — each rasa rests on one stable emotion, so classify before you label. Last, ignoring meter: reciting a doha as prose kills the turn the meter engineers, and the aphorism dies with it.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'sandhi', def: 'The sound-fusion system governing how two words merge — svar, vyanjan and visarga types.' },
        { term: 'samas', def: 'The compound system: dvandva, tatpurush, karmadharaya, bahuvrihi and dvigu.' },
        { term: 'bahuvrihi', def: 'A compound that names something by a quality it has — दशानन, “ten-mouthed”, means Ravana.' },
        { term: 'rasa', def: 'The sentiment a work evokes — the classical navarasa list of nine, built on stable underlying emotions.' },
        { term: 'alankar', def: 'Figures of speech, split into sound figures (anupras, yamak, shlesh) and meaning figures (upma, roopak, atishayokti).' },
        { term: 'chhand', def: 'Meter measured in matras — the doha (13+11) and chaupai (16) are the standards.' },
        { term: 'sthayi bhav', def: 'The stable underlying emotion from which a rasa is built and tasted.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'सत् + जन → सज्जन is an example of which sandhi?',
          options: ['Svar sandhi', 'Vyanjan sandhi', 'Visarga sandhi', 'No sandhi'],
          answer: 1,
          explain: 'The consonant fusion with doubling (t-j → jj) is the signature of vyanjan sandhi.',
        },
        {
          q: 'दशानन (“ten-mouthed”), the name of Ravana, is which compound?',
          options: ['Dvandva', 'Tatpurush', 'Karmadharaya', 'Bahuvrihi'],
          answer: 3,
          explain: 'It transfers a quality — ten mouths — to name something else entirely: the bahuvrihi family.',
        },
        {
          q: '“वह चांद है” (she is the moon) uses which alankar?',
          options: ['Upma (simile)', 'Roopak (metaphor)', 'Yamak', 'Anupras'],
          answer: 1,
          explain: 'No comparison word survives; identity is asserted directly — the roopak signature.',
        },
        {
          q: 'A doha’s matra pattern per line is…',
          options: ['11 + 13', '16 + 16', '13 + 11', '12 + 12'],
          answer: 2,
          explain: 'Thirteen beats in the first line, eleven in the second — the shape that makes the couplet land.',
        },
      ] },
    ],
  },
  {
    id: 'anth-kinship-descent-marriage',
    title: 'Kinship, Descent and Marriage: The Grammar of Relatedness',
    domain: 'Humanities',
    field: 'Anthropology',
    branch: 'Cultural Anthropology',
    tier: 'core' as const,
    concepts: [
      'Descent: unilineal versus cognatic',
      'Patrilineal and matrilineal systems',
      'Navajo and Minangkabau matriliny',
      'Bride wealth, bride service and dowry',
      'Terminology: lineal, bifurcate-merging, generational',
      'The incest taboo and exogamy',
    ],
    words: 1728,
    readMins: 9,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The sociology lesson of this Library treats the family as one institution among several; anthropology does something different. For cultural anthropology, kinship is the grammar on which many societies write almost everything — inheritance, residence, work, marriage, politics and religion ride on who counts as related to whom, and how. The comparative vocabulary anthropologists built for this — descent, residence, marriage payments, kinship terminologies — is one of the discipline’s core inventions, and it is what lets you see that the “family” you grew up inside is one solution among many, not the default shape of human life.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Kinship vocabulary is the fastest cure for the assumption that your own arrangement is natural. Some of the largest societies on earth trace inheritance through mothers, not fathers; the most common marriage payment in human history flows to the bride’s family, not from it; and the kinship words a language uses predict how households and duties are organized. Once you can read descent systems, genealogy becomes social analysis.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Descent is the rule that decides which kin group you belong to across generations. Unilineal descent traces membership through one line only. Patrilineal descent (also called agnatic) passes membership through fathers: women hold their father’s line for life but pass membership only to sons, while men pass it to all their children — the pattern of most of the classical Mediterranean, Middle Eastern, South Asian and Chinese worlds. Matrilineal descent (utrine) runs the other way: men hold their mother’s line but pass membership only through their sisters’ children, since their own children belong to the mother’s line. Cognatic systems trace through both parents: ambilineal descent lets each family choose whether to affiliate with the mother’s or the father’s line (useful where property or status can be had from either side), while bilateral descent counts relatives through both lines equally, with no formal corporate groups — the pattern of the contemporary United States, where the kindred is a personal network rather than an institution.',
      },
      {
        kind: 'para',
        text: 'Residence rules decide where a couple settles, and they follow descent logic. Patrilocal residence takes the couple to the husband’s family; matrilocal residence brings the husband to the wife’s — OpenStax’s anthropology text notes the two typically pair with the matching unilineal system; neolocal residence builds a new household apart from both; ambilocal residence lets the couple choose. Residence is where descent stops being an abstract chart and becomes the architecture you live in: in a patrilocal-patrilineal world, a woman leaves home and joins strangers; in a matrilocal one, husbands rotate into the wife’s household and women are the stable population around whom men move.',
      },
      {
        kind: 'para',
        text: 'Matriliny is the system most often caricatured, so the real examples are worth keeping. The Navajo Nation, the largest Native American reservation in the United States — over 325,000 enrolled citizens across a territory of roughly 27,000 square miles in Arizona, New Mexico and Utah — has traditionally traced descent and inheritance through mothers and grandmothers, with clan membership passing on the maternal side and traditional hogans oriented to female and male halves. The Minangkabau of West Sumatra in Indonesia form the world’s largest matrilineal society, numbering in the millions: ancestral houses and rice-property pass from mother to daughter, sons join their wives’ households, and — the part that surprises everyone — the society is Muslim and public leadership has historically been a male affair. Matriliny is not matriarchy: it is a rule about membership and property lines, not about who commands. Women’s brothers in a matrilineage often manage the very property their sisters’ children inherit, which makes the mother’s brother one of the most analyzed figures in the history of the discipline.',
      },
      {
        kind: 'para',
        text: 'Marriage everywhere is hedged by rules, and two are near-universal. The incest taboo — the prohibition of marriage within some defined circle of close kin — appears in every known society, though the circle varies; the anthropologist Claude Lévi-Strauss made it the founding fact of social life, arguing that what the taboo forbids in one household it forces into exchange between households, weaving separate families into a society. Exogamy requires marrying out of a defined group (a village, a clan, a lineage); endogamy requires marrying within one (a caste, a faith, a class). Many systems add levirate — a widow marries the deceased husband’s brother, keeping children and property inside the lineage — or sororate, its mirror, where a widower marries the deceased wife’s sister. All of them make marriage a transaction between groups, not merely a romance between individuals.',
      },
      {
        kind: 'para',
        text: 'That transactional side is documented as marriage compensations — transfers that legitimize the union and reallocate rights. Bride wealth (often called bridewealth) transfers goods or livestock from the groom’s family to the bride’s, and is the most widespread form across African and many Asian pastoral and agrarian societies; its logic is compensating the bride’s lineage for the loss of her labor and fertility. Bride service is its labor equivalent: the groom works for his in-laws for a period instead of paying. Dowry transfers wealth in the other direction — from the bride’s family toward the couple or the groom’s household — and dominates in South Asia, where it became institutionalized and, in its abusive modern excesses, criminalized. Indirect dowry re-routes bride wealth through the groom back to the couple as a newlywed fund. The exchange of sisters, documented where two families swap brides, closes the circle with no transfer at all. Same facts, different flows: the direction of payment encodes who is losing whom.',
      },
      {
        kind: 'para',
        text: 'Finally, every language encodes its kinship logic in terminology, and anthropologists classify the systems. Lineal terminology (formerly and still informally called Eskimo) — the North American and European pattern — gives precise terms to the nuclear family (mother, father, brother, sister) and recycles loose terms for everyone outside it: one word, uncle, for many kinds of kin. Bifurcate merging terminology (formerly Iroquois) merges the parent’s same-sex siblings with the parent itself (mother’s sister is “mother”) while splitting the opposite-sex ones, and accordingly distinguishes parallel cousins from cross cousins — the distinction that matters where cross-cousin marriage is preferred, as in many South Indian and tribal systems. Generational terminology (formerly Hawaiian) — widespread in Polynesia — collapses kin into gender and generation alone: all aunts are “mother”, all cousins are “siblings”, producing the large, fluid families that chiefdom societies could mobilize. Omaha and Crow systems add a skewing twist, collapsing generations up one side of the family. The rule to remember: a terminology system is not sloppy naming — it is the society’s actual map of rights, duties and marriageability.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a woman owns rice fields inherited from her mother; her husband manages public affairs but their children belong to her clan; classify the system and predict the residence rule.',
          'Recall the criteria: membership through mothers is matrilineal descent; property through daughters confirms it; the matched residence rule for matriliny is matrilocal.',
          'Apply it: the woman passes the fields to her daughters; her brother has managerial claims in his sister’s household; her sons affiliate to their wives’ lineages — precisely the Minangkabau arrangement OpenStax-style ethnography documents.',
          'State the result: matrilineal descent with matrilocal tendency — and note the discipline’s standard correction: this says nothing about women “ruling”; it is a property-line rule, not a command hierarchy.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Family law and inheritance: where personal law applies, whether property follows sons, daughters or both is exactly a descent-system question.',
        'Development and land policy: land-tenure programs that ignore matrilineal property lines quietly disinherit daughters; knowing the system is the policy skill.',
        'Genealogy and diaspora: tracing ancestry across cultures means learning which side your tradition counts — and which it skips.',
        'Fiction and film: kinship terminology is why in-laws in different societies are addressed as “mother” or as strangers — the words on screen encode the system.',
        'Fieldwork readiness: the descent/residence/marriage-payment trio is the standard first questionnaire of any ethnographic project.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, reading matriliny as matriarchy: descent lines say who inherits, not who commands — Minangkabau men and Navajo male headmen coexist with maternal property lines. Second, assuming bilateral descent is the human default because it is yours; historically, unilineal systems cover most of the ethnographic record, and bilateral corporate weakness is the unusual case. Third, treating dowry and bride wealth as the same payment in different clothes — the direction of transfer encodes which lineage is being compensated, and the social logic is opposite. Fourth, confusing terminology with biology: “mother’s sister = mother” is a rights map, not a factual error by the speakers. Last, forgetting that the incest taboo’s circle varies — the universal thing is that there is a rule, not what the rule says.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'unilineal descent', def: 'Membership traced through one line only — patrilineal (agnatic) or matrilineal (utrine).' },
        { term: 'cognatic descent', def: 'Membership traced through both sexes — ambilineal (chosen) or bilateral (both parents equally).' },
        { term: 'matrilocal residence', def: 'A couple settling with or near the wife’s family — the residence rule matching matriliny.' },
        { term: 'bride wealth', def: 'Transfer from the groom’s family to the bride’s lineage, the world’s most widespread marriage payment.' },
        { term: 'dowry', def: 'Transfer from the bride’s family toward the couple or groom’s side — the South Asian pattern.' },
        { term: 'levirate', def: 'A widow’s marriage to the deceased husband’s brother, keeping children and property in the lineage.' },
        { term: 'bifurcate merging', def: 'A terminology system (formerly Iroquois) that merges same-sex aunts/uncles with parents and splits cross from parallel cousins.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In a matrilineal system, a man’s children belong to…',
          options: ['his own lineage', 'their mother’s lineage', 'no lineage at all', 'whichever they choose'],
          answer: 1,
          explain: 'He holds his mother’s line but cannot pass it; his children affiliate through their mother — the matrilineal signature.',
        },
        {
          q: 'The Minangkabau of West Sumatra are famous as…',
          options: ['the largest matrilineal society in the world', 'a patrilineal chiefdom', 'a society without marriage', 'a bilateral foraging band'],
          answer: 0,
          explain: 'Millions of Minangkabau pass houses and rice land from mother to daughter — the discipline’s flagship matriliny case.',
        },
        {
          q: 'Bride wealth and dowry differ chiefly in…',
          options: ['the goods involved', 'the direction of the transfer', 'whether elders approve', 'nothing'],
          answer: 1,
          explain: 'Bride wealth flows to the bride’s lineage; dowry flows from it — opposite compensations for opposite losses.',
        },
        {
          q: 'Calling all aunts “mother” and all cousins “siblings” is which terminology system?',
          options: ['Lineal (Eskimo)', 'Bifurcate merging (Iroquois)', 'Generational (Hawaiian)', 'Omaha skewing'],
          answer: 2,
          explain: 'Only gender and generation distinguish kin — the generational system of Polynesia, with its large mobilizable families.',
        },
      ] },
    ],
  },
  {
    id: 'media-journalism-craft',
    title: 'Journalism Craft: News Values, the Inverted Pyramid and Verification',
    domain: 'Social Sciences',
    field: 'Mass Media and Society',
    branch: 'Journalism Practice',
    tier: 'core' as const,
    concepts: [
      'News values: what makes an event news',
      'The summary lead and the 5W1H test',
      'Inverted pyramid: lede, body, tail',
      'Attribution: on record, background, off record',
      'Verification and the two-source rule',
      'Libel and the discipline of accuracy',
    ],
    words: 1464,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The other lessons of this book study media as a social force — who owns it, how it frames reality, what it does to attention. This lesson opens the workshop door instead: how an actual news story gets made, from the judgment that something is news to the sentence that leads the page. The craft is older than the internet and sturdier than any platform, and it is teachable: news values are a decision procedure, the inverted pyramid is a structure you can practice, and verification is a habit with explicit rules. A reader who knows the machinery is also a harder reader to fool.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every feed you scroll is full of things that look like news but skip the craft: no attribution, no verification, no correction policy. Learning the real method — what journalists at wire services and city desks actually do before publishing — gives you a free lie-detector. The same skills write the clearest reports, emails and applications you will ever produce, because they are skills of ordering and evidence.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Not everything that happens is news. Editors filter events through news values — the recurring criteria that make an event publishable. The standard set, as the Ohio State open textbook Writing for Strategic Communication Industries organizes it: timeliness (it happened now or matters now), impact (how many people, how deeply), proximity (near is news), prominence (known names), conflict (opposition draws attention), and novelty (the unusual — “man bites dog”). Different desks weight them differently: a wire service leads with impact and timeliness, a city paper with proximity. The values are amoral on purpose — a bridge collapse and a scientific breakthrough compete on the same scale — which is precisely why the ethics lesson of this book exists as a counterweight.',
      },
      {
        kind: 'para',
        text: 'Once the event qualifies, the story is built on the summary lead: the first sentence that answers, as far as possible, who, what, when, where, why and how — the 5W1H — in roughly twenty-five to thirty-five words. A classic lead: “A three-alarm fire displaced forty residents from a Riverside apartment block on Tuesday night, officials said; no injuries were reported.” Note the machinery: the most newsworthy fact first (displaced forty), attribution to officials (the sourcing lesson below), and the missing details (cause, damage estimate) deferred because they are not yet known. Writing the lead is the hardest act in journalism because it forces the news-value judgment to become a single sentence.',
      },
      {
        kind: 'para',
        text: 'The rest of the story descends the inverted pyramid: facts in descending order of importance, from the lede through the supporting body (context, quotes, numbers, background) to the tail, where the least essential material — nice-to-know color, history, routine follow-up — sits. The structure is a nineteenth-century wire-service invention, built for telegraph lines that could cut mid-transmission and editors who trimmed from the bottom; it survives because readers also trim from the bottom, on paper and on phones. Its virtues are ruthless: a reader can stop after any paragraph and still hold the essentials, and the writer can cut the tail without touching the lede. Its costs are real too — no suspense, no build — which is why feature writing (the same textbook devotes a chapter to it) deliberately breaks the pyramid with anecdotal leads, delayed reveals and narrative drive when the story earns it.',
      },
      {
        kind: 'para',
        text: 'Sourcing discipline separates journalism from assertion. Attribution — “officials said”, “according to the filing” — tells the reader where every factual claim lives, and comes in graded protocols: on record (named and quotable), on background (usable, not named by title agreed in advance), deep background (shapes the story, never appears), and off record (not usable at all unless independently obtained). Professional newsrooms impose a two-source rule for contested or damaging claims — one source is a tip, two independent confirmations is a fact — and prefer documents to memory: filings, budgets, transcripts, data. The habit generalizes: any reader can ask of any claim “who says so, and how do they know?” — and any writer can make their own work un-fakeable by answering those two questions on the page.',
      },
      {
        kind: 'para',
        text: 'Two more craft commitments complete the kit. Accuracy over speed is institutionalized in the corrections policy: published errors get corrected visibly, and the corrections column is a newsroom’s honesty ledger — its absence is a red flag about any outlet. And the law draws a line the craft must respect: libel, the published defamation of a person through false statements of fact, is the classic legal risk of the trade (the same textbook’s ethics chapter pairs defamation with plagiarism as the cardinal, career-ending errors). The working defense is the method itself: verify, attribute, distinguish fact from characterization, and let the quotes carry the opinions. Beats — assigned territory like courts, city hall or education — glue it together: the beat reporter’s accumulated sources and context are why institutional reporting cannot be replaced by aggregation.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: turn a pile of raw facts into a publishable story lead. Facts: heavy rain; flooding; two schools closed; the district announced the closure at 6 a.m.; buses grounded; more rain forecast.',
          'Apply news values: impact (families, commutes), timeliness (today), proximity (local) — the lead must fuse them into one sentence.',
          'Apply it: “Sudden overnight flooding closed both district high schools and grounded school buses on Monday, officials said, with more rain forecast through Wednesday.” Count: who (district officials), what (closures, grounded buses), when (Monday), where (both high schools), why-not-yet (cause, forecast detail goes to the body).',
          'State the result: one sentence, 5W1H largely covered, attribution in place, pyramid ordered — the remaining facts (rainfall totals, safety advice, history of the drain) now queue in descending importance below it.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Media literacy: run the checklist on any suspicious story — attribution present? two sources? corrections page? pyramid order or buried lede with a late twist?',
        'Professional writing: reports, briefs and applications that front-load the news and descend in importance are using the pyramid by another name.',
        'Community journalism and newsletters: the summary lead plus attribution lets a solo writer produce credible local coverage without a legal department.',
        'Data and research communication: the lead-writing exercise is the fastest way to turn an abstract into a sentence people actually read.',
        'Crisis communication: officials who lead with the most consequential fact and attribute it (rather than burying it) are practicing inverted-pyramid ethics under pressure.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Burying the lede — opening with scene-setting and saving the actual news for paragraph five — is the beginner’s signature, and readers simply leave. Passive-voice evasion (“mistakes were made”) hides the actor that attribution requires; name who said and did. Single-source stories on contested claims violate the two-source rule and are how retractions happen. Confusing off record with background gets reporters and sources burned: agree the protocol before the conversation, not after. Finally, adjective-stuffing the lead (“shocking, devastating tragedy”) — news values carry the emotion through facts; the writer’s adjectives are not attribution and experienced editors cut every one.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'news values', def: 'The editorial criteria — timeliness, impact, proximity, prominence, conflict, novelty — that make an event publishable.' },
        { term: 'summary lead', def: 'The opening sentence answering 5W1H in about 25–35 words, with the most newsworthy fact first.' },
        { term: 'inverted pyramid', def: 'Story structure placing facts in descending importance: lede, body, tail — cuttable from the bottom without loss.' },
        { term: 'attribution', def: 'Naming the source of a claim on the page — “officials said” — so readers know where every fact lives.' },
        { term: 'off the record', def: 'Information given under an agreement not to publish it; distinct from background, which is usable but unnamed.' },
        { term: 'two-source rule', def: 'The professional standard that contested or damaging claims need two independent confirmations before publication.' },
        { term: 'libel', def: 'Published defamation — a false statement of fact damaging a person; the core legal risk of the craft.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Which is NOT one of the standard news values?',
          options: ['Timeliness', 'Impact', 'Profitability of the topic', 'Proximity'],
          answer: 2,
          explain: 'The classic values are timeliness, impact, proximity, prominence, conflict and novelty — commercial profitability is not a news value.',
        },
        {
          q: 'The inverted pyramid exists primarily so that…',
          options: ['stories feel suspenseful', 'readers can stop at any point holding the essentials', 'writers can hide weak facts', 'headlines rhyme'],
          answer: 1,
          explain: 'Descending importance serves reader triage (and editor cutting) — the opposite of narrative suspense, which features earn separately.',
        },
        {
          q: 'Information that is usable in print but must not be attributed by name is…',
          options: ['on record', 'on background', 'off record', 'plagiarism'],
          answer: 1,
          explain: 'Background is usable without naming; off record is not usable at all; on record is named and quotable.',
        },
        {
          q: 'A contested claim from a single anonymous source, by professional standards, is…',
          options: ['ready to publish', 'a tip that needs independent confirmation', 'automatically libel', 'a feature story'],
          answer: 1,
          explain: 'The two-source rule: one source is a lead to verify, not a fact to print.',
        },
      ] },
    ],
  },
  {
    id: 'lang-french-reading-francophonie',
    title: 'French Reading and the Francophone World',
    domain: 'Languages & World Literature',
    field: 'French',
    branch: 'French Reading & Culture',
    tier: 'intermediate' as const,
    concepts: [
      'Cognates: the free vocabulary of French',
      'False friends: actuellement is not “actually”',
      'Connectors as reading signposts',
      'Recognizing verbs on the page',
      'La Francophonie: 88 states and governments',
      'Africa, where French is growing',
    ],
    words: 1377,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The first two lessons of this book gave you pronunciation, the article system and the verb engine. This lesson buys the fastest possible next skill: reading real French — menus, news headlines, song lyrics, Wikipedia stubs — earlier than you think you can. Reading rewards you in a way speaking does not at this stage: the words sit still, you control the pace, and every sentence you decode deposits vocabulary and grammar into memory for free. It also opens the door to the francophone world, which is far larger and far more African than most learners picture.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'French shares the bulk of its learned vocabulary with English, so a reader can start with a working stock of thousands of words on day one — provided they know the sound-shift patterns and the handful of false friends. And French is not one country’s language: the Organisation internationale de la Francophonie counts 88 states and governments, French is official in 29 countries, and the majority of its speakers now live in Africa. Reading is the skill that lets you touch all of it with one alphabet.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Cognates are the free lunch. Centuries of shared Latin and Norman borrowing mean English and French overlap on huge vocabulary islands: nation, université, importance, situation, musique, conventionnel. The trick is recognizing them through French spelling habits. Learned words ending in English -tion are identical in French (information, nation, réaction); -ty arrives as -té (liberté, université, sécurité); -ous often arrives as -eux (dangerous → dangereux, curious → curieux); -al and -able survive almost unchanged (national, formidable, admirable — though formidable means “great” as often as “formidable”). Once the pattern is conscious, a page of French text lights up with words you already own, and the genuinely new vocabulary shrinks to a manageable residue you can mine from context.',
      },
      {
        kind: 'para',
        text: 'False friends are the tax on that free lunch, and a short list covers most accidents. Actuellement means currently, not actually — the honest translation of “actually” is en fait. Attendre is to wait (for), not to attend (that is assister à). Blesser is to wound, not to bless (bénir). Rester is to stay, not to rest (se reposer). Une librairie is a bookshop, not a library (bibliothèque); and sensible means sensitive, not sensible (the French is raisonnable). The rule: when a lookalike word is doing a key job in the sentence, suspect it first, and let the rest of the sentence audition it before you trust it.',
      },
      {
        kind: 'para',
        text: 'Connectors are the signposts that make pages readable. D’abord (first), ensuite (next), puis (then), enfin (finally) sequence an argument; cependant, pourtant and par contre signal contrast (however, yet, on the other hand); donc, alors and c’est pourquoi mark consequence (therefore, so, that is why); c’est-à-dire (that is to say) and par exemple announce restatement and illustration; en fait (in fact) and surtout (above all) flag emphasis. Spotting them converts a wall of prose into a map: every cependant tells you a claim is about to be qualified, every donc that a conclusion is landing. Headlines compress the same logic brutally — French headlines drop articles and the verb être (star française means “a French star”), and use the present tense for the recent past, so “Président démissionne” is a completed event, not a slow-motion one.',
      },
      {
        kind: 'para',
        text: 'Verb recognition turns pages from fog to text. You already own the engine from the verbs lesson; on the page it appears as -er verbs whose third-person plural ends in a silent -ent (ils parlent sounds exactly like il parle — only context and pronouns distinguish them), the passé composé as a two-part stack (a/ont + participle: il a mangé, ils ont fini), and the future often as the infinitive plus a helping ending (je partirai). Two habits finish the job: read pronouns as verb-disambiguators, and when you meet an unfamiliar verb form, subtract the endings you know rather than reaching for the dictionary — French verb tables are regular enough that recognition becomes automatic within a few reading sessions.',
      },
      {
        kind: 'para',
        text: 'Now the world the language opens. The Organisation internationale de la Francophonie — the OIF, founded in 1970 and headquartered in Paris — counts 88 states and governments as members or observers, from France, Canada (Québec is a full participating government), Switzerland and Belgium to Vietnam, Lebanon, Senegal and Côte d’Ivoire. French is an official language in 29 countries, spoken today by roughly 320 million people, and the demographic center of gravity has shifted decisively: well over half of daily French speakers now live in Africa, and demographers project that the coming decades’ growth will be almost entirely African. The Académie française, the language’s self-appointed guardian since 1635, issues rulings that ordinary speakers cheerfully ignore — the living language belongs to Dakar, Montréal and Abidjan as much as to Paris. Reading French with this map in mind changes what you read: news from Ouagadougou and Abidjan, novels from Maghrebi and sub-Saharan writers, and lyrics from Paris rap all belong to the same language you are decoding.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: decode the headline “Le président annonce des mesures contre la pollution; les industriels sont cependant sceptiques.”',
          'Recall the tools: cognates first (président, mesures, pollution, industriels), connectors second (cependant flags contrast), verb recognition last (annonce = announces, sont = are).',
          'Apply it: “The president announces measures against pollution; industry, however, is skeptical.” The headline’s dropped article and present tense read as recent news, not an ongoing ritual.',
          'State the result: one headline decoded in under a minute using pattern knowledge — no dictionary. That is the skill loop: cognates, signposts, verb shapes, repeat.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'News reading: France Info, Radio France Internationale and African outlets like Jeune Afrique run accessible French that rewards the connector-and-cognate method.',
        'Music and film: lyric sheets and subtitles become study material; francophone rap from Paris, Brussels and Kinshasa doubles as demographic and slang fieldwork.',
        'Travel: menus, signs and museum cards across 29 official-language countries decode on sight once false friends are arrested.',
        'Study and research: French remains a working language of diplomacy, law and history; the reading skill unlocks archives and scholarship English ignores.',
        'Career breadth: organizations from the UN to African development banks recruit French readers — the OIF’s 88 members are a hiring map.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Trusting every lookalike is the cardinal error — actuellement, librairie and sensible are the classics that derail comprehension. Reading word by word defeats the purpose: hunt connectors first, then verbs, then fill the frame. Translating headlines literally misleads, because dropped articles and être plus present tense carry information you must reconstruct. Assuming French means France misses the majority of the language’s future — the francophone center of gravity is African. Finally, waiting to “finish grammar” before reading: the method works precisely because reading is grammar practice with rewards attached.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'cognate', def: 'A word shared in recognizable form by two languages through common origin — French -té to English -ty, for example.' },
        { term: 'false friend', def: 'A lookalike word whose meaning has diverged — actuellement means “currently”, not “actually”.' },
        { term: 'connector', def: 'A signpost word sequencing or qualifying discourse — d’abord, cependant, donc, c’est-à-dire.' },
        { term: 'passé composé', def: 'The two-part past tense on the page: auxiliary (a/ont) plus past participle.' },
        { term: 'OIF', def: 'The Organisation internationale de la Francophonie — 88 member and observer states and governments.' },
        { term: 'francophonie', def: 'The community of French speakers worldwide, about 320 million people, with the majority in Africa.' },
        { term: 'Académie française', def: 'The French language academy, est. 1635, guardian of the official dictionary and grammar rulings.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: '“Actuellement” means…',
          options: ['actually, in truth', 'currently, at present', 'actively', 'extremely'],
          answer: 1,
          explain: 'The classic false friend: actuellement is “currently”; “actually” is en fait.',
        },
        {
          q: 'English words ending in -tion usually appear in French as…',
          options: ['-zione', '-tion (identical)', '-té', '-tude'],
          answer: 1,
          explain: 'The learned Latinate suffix survives identically — information, nation, réaction are the same words on both pages.',
        },
        {
          q: 'In a French news headline, the present tense usually signals…',
          options: ['a habitual action', 'a very recent completed event', 'a future plan', 'a command'],
          answer: 1,
          explain: 'Headline French uses the present for the news just past — “démissionne” means “has resigned”.',
        },
        {
          q: 'Today, the majority of the world’s daily French speakers live…',
          options: ['in France', 'in Canada', 'in Africa', 'in Belgium and Switzerland'],
          answer: 2,
          explain: 'The demographic center of the francophonie has shifted to Africa — and projections keep the growth there.',
        },
      ] },
    ],
  },
]

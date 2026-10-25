import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X49 pass (2026-10-25): language-book deepening.                    */
/*                                                                     */
/*  The thin-book audit left three language books at one lesson each   */
/*  — Arabic, Korean and Russian (each only its foundations lesson).   */
/*  This pass brings all three to the ≥3-lesson standard with a        */
/*  grammar workshop and a literature/culture lesson per language,     */
/*  mirroring the Hindi pattern from X46 (Foundations · Grammar ·      */
/*  Literature chapters). Sources read for grounding: Wikibooks        */
/*  Arabic / Korean / Russian language series (en.wikibooks.org);      */
/*  Carnegie Mellon OLI, "Arabic for Global Exchange" (oli.cmu.edu);   */
/*  Open Textbook Library, "Korean Through Folktales" (open.umn.edu);  */
/*  UNESCO Memory of the World register (Hunminjeongeum Haerye,        */
/*  inscribed 1997) and UNESCO Intangible Cultural Heritage (pansori); */
/*  the Nobel Prize official laureate pages (Mahfouz 1988, Han Kang    */
/*  2024, Bunin 1933, Pasternak 1958, Sholokhov 1965, Solzhenitsyn     */
/*  1970, Brodsky 1987, Alexievich 2015); Project Gutenberg and the    */
/*  Internet Archive for public-domain translations of the Russian     */
/*  and Arabic classics.                                               */
/*                                                                     */
/*  DEDUP CARVING (verified against EXCLUDED_TOPICS and live topics):  */
/*  - lang-arabic-grammar-morphology is carved against                  */
/*    lang-arabic-foundations, which OWNS the script mechanics,        */
/*    sun/moon letters, the root-pattern idea in outline, ḥarakāt as   */
/*    short vowels and diglossia. This lesson OWNS the full case       */
/*    paradigm (i'rab), tanwīn, the three plural systems, the dual,   */
/*    the verb-mood engine, derived stems II–X and kāna/inna syntax.   */
/*  - lang-arabic-literature-culture is carved against the same        */
/*    foundations lesson (which owns diglossia as a sociolinguistic    */
/*    fact) and against lang-books-authors-prizes (which owns the      */
/*    Nobel prize map as a table of laureates). This lesson OWNS the   */
/*    literary lineage itself — qasida/Mu'allaqāt, maqāma, the Nights, */
/*    the Nahḍa, Mahfouz, Salih — and the calligraphic tradition.      */
/*  - lang-korean-grammar-workshop is carved against                    */
/*    lang-korean-foundations, which OWNS Hangul's featural design,    */
/*    syllable blocks, speech levels in outline and SOV order. This    */
/*    lesson OWNS the particle contrasts (은/는 vs 이/가, 에 vs 에서),   */
/*    the -시- infix, tense/modality, irregular verb classes and the    */
/*    connective system.                                               */
/*  - lang-korean-reading-culture is carved against the same           */
/*    foundations lesson (script mechanics) and against                */
/*    lang-classical-chinese-canon (which OWNS the Chinese set-text    */
/*    canon; this lesson treats hanja only as Korea's borrowed          */
/*    literary script). It OWNS the Hunminjeongeum event, the verse    */
/*    forms (sijo, pansori) and the modern Korean canon to Han Kang.   */
/*  - lang-russian-grammar-workshop is carved against                  */
/*    lang-russian-foundations, which OWNS Cyrillic letter values,     */
/*    vowel reduction, the existence of six cases and the aspect       */
/*    idea. This lesson OWNS the full declension tables, animacy,      */
/*    motion-verb pairs, prefixed motion, verbal government, numerals  */
/*    and short-form adjectives.                                       */
/*  - lang-russian-literature-golden is carved against                  */
/*    lang-books-authors-prizes (prize map) and lang-hindi-… no        */
/*    overlap: it OWNS the Russian canon itself — Pushkin's stanza,    */
/*    Gogol, the great novels, the Silver Age, the censored century    */
/*    and the Nobel lineage read as literary history.                  */
/* ------------------------------------------------------------------ */

export const x49LanguageDeepeningPassTopics: KnowledgeTopic[] = [
  {
    id: 'lang-arabic-grammar-morphology',
    title: 'Arabic Grammar Workshop: Cases, Plurals and the Verb Engine',
    domain: 'Languages & World Literature',
    field: 'Arabic',
    branch: 'Arabic Grammar',
    tier: 'core' as const,
    concepts: [
      'I\u2018rab: three cases and the jussive mood',
      'Tanwīn and what the unwritten vowels carry',
      'Three plural systems plus the dual',
      'The verb: past stem, non-past stem, moods',
      'Derived stems II–X from one root',
      'kāna and inna: two sentence-reversing families',
    ],
    words: 1358,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book introduced the two great ideas of Arabic — the triliteral root and the pattern that moulds it — and showed how the script writes the consonants and long vowels while leaving the rest to the reader. This workshop takes those ideas to the workbench. Here you meet the full case system that the unwritten short vowels encode, the plural machinery that is really three systems at once, the dual number, and the verb engine that spins one root into ten interlocking stems. This is the layer where reading stops being decoding and becomes parsing.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Newspapers, novels and street signs are printed without the short vowels, which means the grammar they carry is invisible on the page. A reader who knows i\u2018rab does not need the dots: syntax tells the eye what the vowel would have said. Fluent Arabic reading is not faster letter-recognition — it is constant grammatical inference, and it is trainable.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Arabic marks grammatical role at the end of the word. Nouns take three cases — nominative (raf\u2018, written with a damma), accusative (naṣb, fatha) and genitive (jarr, kasra) — and a noun is definite (with al-, or as the first term of an iḍāfa chain) or indefinite. Indefiniteness adds the tanwīn, a doubled final vowel: kitābun "a book" (nominative), kitāban (accusative), kitābin (genitive). Verbs add a fourth ending-set, the jussive (majzūm), used after lam and for commands. None of this is decoration: in a sentence like kataba l-waladu risālatan "the boy wrote a letter", the -u on the subject and the -an on the object are the only reason you know who wrote what, because word order is free.',
      },
      {
        kind: 'para',
        text: 'The plural is where Arabic earns its reputation. Sound plurals simply attach an ending: sound masculine -ūna/-īna (mu\u2018allimūna "teachers"), sound feminine -āt (mu\u2018allimāt "female teachers"). Broken plurals instead reshape the word around a new pattern: kitāb → kutub "books", rajul → rijāl "men", madīna → mudun "cities". Then there is the dual, -āni (nominative) and -ayni (oblique), for exactly two: kitābāni "two books". A further trap waits in agreement: non-human plurals — cities, books, armies — take feminine singular agreement, so "the two books are long" says the books (feminine singular) is long. Human plurals agree in full.',
      },
      {
        kind: 'para',
        text: 'The verb system runs on two stems. The past stem is cited as the third-person masculine singular: kataba "he wrote". The non-past stem covers present and future: yaktubu "he writes / he will write". Around the non-past sit three moods, marked — again — only on the final short vowel: the indicative (yaktubu), the subjunctive (yaktuba, after an, lan, ḥattā, kay), and the jussive (yaktub, after lam and in negative commands). Negation is tense-sensitive: mā kataba negates the past, lan yaktuba negates the future, and lā yaktubu — with the energetic jussive in classical style — negates the habitual present.',
      },
      {
        kind: 'para',
        text: 'Derived stems are the engine room. From one root you build up to ten verb patterns with predictable meaning shifts. Form I is the plain verb (kataba "write", darasa "study"). Form II doubles the middle consonant and adds intensity or causation: darrasa "teach" (make study). Form III lengthens the first vowel and suggests aiming at someone: kātaba "correspond with". Form IV prefixes a- and is causative: \u2018alima "know" → a\u2018lama "inform". Form V and VI are the reflexive counterparts of II and III (tadarrasa "study intensively", takātaba "exchange letters"). Form VII prefixes in- and gives the middle-passive: inqata\u2018a "be cut off". Form X, istaf\u2018ala, means seeking or deeming: istalam from salima is "receive" (seek safety of), ista\u2018mala is "employ". The prefixes you saw in the dictionary entry were grammar, not decoration.',
      },
      {
        kind: 'para',
        text: 'Two small word families reverse a sentence\u2019s architecture. kāna "to be" and its sisters — aṣbaḥa "become", laysa "not be", and a dozen more — put their predicate in the accusative: kāna l-maṭaru ġazīran "the rain was heavy (accusative)". inna and its sisters — inna "indeed", anna "that", layta "would that" — do the opposite: inna l-maṭara ġazīrun flips the subject into the accusative and leaves the predicate nominative. Between them they account for a startling share of subordinate-clause errors in learner prose, and for the comma-less elegance of classical style: the case endings, not the commas, carry the logic.',
      },
      {
        kind: 'para',
        text: 'Relative clauses complete the toolkit. The relative pronoun alladhī (plural alladhīna, feminine allatī) appears only when the antecedent is definite: al-kitāb alladhī qara\u2018tuhu "the book that I read". Inside the clause a resumptive pronoun must echo the antecedent — the -hu on qara\u2018tuhu. When the antecedent is indefinite, no relative pronoun at all appears: kitābun qara\u2018tuhu "a book I read". The reader\u2019s rule: a definite noun followed immediately by a verb-without-particle is the start of a relative clause.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Parse the phrase kataba l-mu\u2018allimāni risālatin ṭawīlatayni: verb, then two nouns with case endings to recover.',
          'Read the endings: -āni marks a nominative dual (the two teachers = subject); -atin is a genitive-accusative tanwīn singular (a letter = object); -ayni is an oblique dual (long = describing the letter).',
          'Check agreement: the dual verb katabā would agree with the dual subject; non-past of the adjective ṭawīlatāni confirms the letter is the described item.',
          'State the reading: "the two teachers wrote a long letter (dual throughout)" — recovered entirely from endings, with word order doing almost no work.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Reading unvocalized text: news Arabic and street signage omit the short vowels; case knowledge substitutes for the dots.',
        'Dictionary use: Arabic dictionaries sort by triliteral root, so you must strip prefixes (a-, in-, ista-, ya-, ta-, mu-, ma-) before looking anything up.',
        'Editing and translation: agreement errors with non-human plurals are the number-one tell of machine-translated Arabic.',
        'Handwriting and typing: the tanwīn and case vowels you add for learners (fully vocalized school texts, Qur\u2019an editions) are the training wheels this workshop removes.',
        'Language aptitude tests and classical reading: the kāna/inna families and derived stems appear in every paragraph of classical prose.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, expecting one plural system: learners memorize sound plurals, then meet kutub and mudun and conclude the language is lawless — the broken plurals are patterns, and most dictionaries list them. Second, confusing mood triggers: an and lan take the subjunctive, lam takes the jussive; mixing them is the classic intermediate error. Third, assuming iḍāfa means only possession — it also marks specification, as in miṣdāq al-kalimāt "word-for-word true (scale of words)". Fourth, treating dialects as decayed case-less slang: Egyptian and Levantine are regular descendants of Old Arabic with their own consistent grammar; diglossia is a fact to manage, not a fault to fix.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'i\u2018rab', def: 'The case/mood system carried by final short vowels — the invisible grammar of Arabic text.' },
        { term: 'tanwīn', def: 'The doubled final vowel marking an indefinite noun: -un, -an, -in.' },
        { term: 'broken plural', def: 'A plural formed by reshaping the word onto a new pattern: kitāb → kutub.' },
        { term: 'dual', def: 'The -āni/-ayni ending used for exactly two of anything.' },
        { term: 'jussive', def: 'The verb mood after lam and in commands — the apocopated non-past.' },
        { term: 'derived stems', def: 'The ten verb patterns (I–X) built from one root with shifting meanings — causation, intensity, reciprocity, seeking.' },
        { term: 'kāna / inna', def: 'Two sentence-reversing families: kāna puts the predicate in the accusative; inna flips the subject into it.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In kataba l-waladu risālatan, what tells you the letter is the thing written?',
          options: ['Word order — verbs come first', 'The -an ending on risālatan', 'The al- on l-waladu', 'The number of syllables'],
          answer: 1,
          explain: 'The accusative tanwīn (-an) marks the object; Arabic word order is free, so endings, not position, carry the roles.',
        },
        {
          q: 'kutub, rijāl and mudun are examples of…',
          options: ['sound masculine plurals', 'sound feminine plurals', 'broken plurals', 'duals'],
          answer: 2,
          explain: 'They reshape the singular\u2019s pattern instead of attaching an ending — the broken-plural system.',
        },
        {
          q: 'Which particle takes the jussive mood?',
          options: ['an', 'lan', 'lam', 'kay'],
          answer: 2,
          explain: 'lam (negating the past) apocopates the non-past; an, lan and kay take the subjunctive.',
        },
        {
          q: 'darrasa "teach" is which derived stem of darasa "study"?',
          options: ['Form II — doubled middle consonant', 'Form IV — prefixed a-', 'Form VII — prefixed in-', 'Form X — prefixed ista-'],
          answer: 0,
          explain: 'Form II doubles the middle radical and adds intensive/causative meaning: make (someone) study.',
        },
      ] },
    ],
  },
  {
    id: 'lang-arabic-literature-culture',
    title: 'Arabic Literature: Odes, Nights and the Novel',
    domain: 'Languages & World Literature',
    field: 'Arabic',
    branch: 'Arabic Literature & Culture',
    tier: 'core' as const,
    concepts: [
      'The qasida and the Mu\u2018allaqāt',
      'The maqāma: rhymed-prose picaresque',
      'The Thousand and One Nights',
      'The Nahḍa and the rise of the novel',
      'Mahfouz, the Nobel and after',
      'Calligraphy: Kufic, Naskh, Thuluth, Diwani',
    ],
    words: 1466,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Arabic literature begins, by consensus, with a poem about stopping. "Halt, friends, and let us weep over a memory and a beloved" — the opening of the Mu\u2018allaqa of Imru\u2019 al-Qays, the wandering prince-poet of the sixth century, remains the most quoted line in the language. This lesson walks the tradition from those desert odes through the rhymed-prose trickster tales of the maqāma, the world-conquering frame story of the Thousand and One Nights, the nineteenth-century revival that created modern Arabic prose, and the Nobel Prize that carried the Arabic novel onto every shelf in the world — with a detour into the calligraphy that turned the language itself into an art form.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The foundations lesson showed you diglossia as a fact; literature is the reason the fact exists. Classical poetry and the Qur\u2019anic register froze a standard against which every later writer worked — or rebelled. When Naguib Mahfouz wrote Cairo alleyways into novels, he was negotiating with fifteen centuries of qasida decorum. Reading the map doubles the meaning of every modern page.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The qasida — the classical ode — is a monorhymed poem of anywhere from twenty to a hundred lines, and its architecture stayed stable for over a thousand years. It opens with the naṣb, an elegy at the abandoned campsite of the beloved; moves through the raḥīl, the desert journey with camel or horse; and climaxes in the madiḥ, the praise of a patron, or in boast, satire or wisdom. One rhyme, set in the first two lines, runs to the end. The seven (in some counts ten) greatest pre-Islamic odes were later called the Mu\u2018allaqāt — "the hanging ones" — from a legend that they were embroidered in gold and hung on the Kaaba; the anthology tradition credits the eighth-century transmitter Ḥammād al-Rāwiya with collecting them. The legend is late; the poems are not.',
      },
      {
        kind: 'para',
        text: 'Within living memory of that poetry came the Qur\u2019an, and its register became the second anchor of the language. Its rhythmic, partially rhymed prose (saj\u2018) and its audibly oral structures were heard as inimitable by the tradition, and the language of revelation thereafter defined the high register against which all writing measured itself. Classical prose flowered in adab — the refined general culture of the educated, geography and wine-songs and statecraft and anecdote — and its most dazzling vehicle was the maqāma, invented by al-Hamadhānī (died 1008) and perfected by al-Ḥarīrī (died 1122): rhymed-prose episodes in which the narrator repeatedly runs into the same brilliant rogue, Abū l-Fatḥ al-Iskandarī, who earns his dinner by eloquence and vanishes. It is Arabic at its most ornate, deliberately so — a virtuoso form for connoisseurs.',
      },
      {
        kind: 'para',
        text: 'The Thousand and One Nights grew in the opposite direction — not connoisseur literature but night entertainment, layered over centuries from Persian and Indian frame-tales through Baghdad and Cairo strata. Its engine is the frame: Shahrazad, sentenced to die the morning after her wedding night, tells the king a story and stops at dawn on a cliffhanger, night after night, until the sentence dissolves into marriage. Classical critics disdained the collection as popular fare; Europe discovered it through Antoine Galland\u2019s French adaptation (from 1704), which gave world literature Aladdin and Ali Baba — tales Galland heard from a Syrian storyteller — and left fingerprints on Poe, Borges, Puccini and Rushdie. Public-domain translations of the major English versions are freely readable online.',
      },
      {
        kind: 'para',
        text: 'The Nahḍa — the "reawakening" of the long nineteenth century — created modern Arabic prose. Printing presses, newspapers in Cairo and Beirut, translation movements and the travel account of al-Taṭāwī (a scholar sent to Paris who came home writing about it) rebuilt the written language for science, journalism and the novel. Jurjī Zaydān\u2019s historical novels carried history into fiction; by the twentieth century the novel was naturalized. Naguib Mahfouz then did for Cairo what Balzac did for Paris: the Cairo Trilogy — Palace Walk, Palace of Desire and Sugar Street (1956–57) — follows one family across the political decades, alley-life realism at novelistic scale. In 1988 Mahfouz became the first — and so far the only — Arabic-language writer awarded the Nobel Prize in Literature. Alongside him, the Sudanese Tayeb Salih\u2019s Season of Migration to the North (1966) inverted the colonial journey: its narrator goes to London and returns to a Sudanese village, and the village is never innocent again. It is routinely named the most important Arabic novel of its century.',
      },
      {
        kind: 'para',
        text: 'Calligraphy is the tradition\u2019s visual art. Where representational images were restrained in religious contexts, the word itself became ornament. Kufic — angular, square, monumental — carries the earliest Qur\u2019anic codices and mosque inscriptions. Naskh — the round, quick book hand — became the ancestor of modern Arabic print type. Thuluth — tall, interlaced, dramatic — is the style of monumental titles and dome inscriptions. Diwani, the Ottoman chancery script, curls its words into sealed compositions almost impossible to forge. To read a mosque or a manuscript is to date and place it by letterform before reading a single word — the letterforms are the metadata.',
      },
      {
        kind: 'para',
        text: 'And the reading strategy this book has been building pays off on every page of this literature. Meet an unfamiliar word: strip the prefixes (al-, wa-, fa-, bi-, li- and the verb prefixes ya-, ta-, a-, in-, ista-) and the final vowels; find the three consonants of the root; recall the pattern\u2019s meaning (a doubled middle letter means intensity or causation; an m- prefix often makes a doer or a place). Ḥammām is recognizable as "bath-house" the moment you see the root of "heat". The dictionary is arranged this way — not alphabetically by first letter of the word, but by root consonants. Literature is where the root-pattern habit becomes instinct.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Take an unseen word from a news headline: mustashfan "hospital".',
          'Strip the m- prefix and the case ending: the root sh-f-a? No — carry the tall consonants through: the skeleton reads m-s-t-sh-f-ān.',
          'Recognize the istaf\u2018ala (Form X) signature in the skeleton — a place built on "seeking healing" (the root sh-f-y, to heal).',
          'Conclude: a mustashfān is "a place where one seeks healing" — a hospital. The morphology told you the meaning before the dictionary did.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Reading path: start with the Nights in translation, then Mahfouz\u2019s Trilogy in the original with a reader\u2019s dictionary — the prose is deliberately ordinary.',
        'Museums and manuscripts: identifying Kufic versus Naskh versus Thuluth dates and locates any Islamic manuscript you meet.',
        'News Arabic: modern journalism is the direct descendant of the Nahḍa press — its formulas (opening with time and place, heavy iḍāfa chains) are learnable.',
        'Poetry in daily life: lines of the Mu\u2018allaqāt and of the modern poet are quoted in speeches, songs and football commentary across the Arab world.',
        'Translation careers: Mahfouz and Salih are the standard entry points for Arabic-to-English literary translation work.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, treating the Nights as "the" Arabic literature: it was the popular counter-tradition, disdained by the critics who preserved the qasida. Second, reading the Mu\u2018allaqāt as history: the hanging-on-the-Kaaba story is a later legend, and much of the dating is contested. Third, assuming the Nahḍa invented Arabic prose — the maqāma was prose virtuosity a thousand years earlier; the Nahḍa retooled it for print. Fourth, expecting dialect on the page: novels code-switch between standard narration and dialect dialogue, and that switch is meaning, not noise.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'qasida', def: 'The classical monorhymed ode: elegy, desert journey, praise — architecture stable for a millennium.' },
        { term: 'Mu\u2018allaqāt', def: 'The "hanging" pre-Islamic odes, led by Imru\u2019 al-Qays — the fountainhead anthology.' },
        { term: 'maqāma', def: 'Rhymed-prose picaresque of the eloquent rogue — al-Hamadhānī\u2019s invention, al-Ḥarīrī\u2019s perfection.' },
        { term: 'saj\u2018', def: 'Rhythmic, partially rhymed prose — the Qur\u2019anic sound-texture.' },
        { term: 'adab', def: 'The refined general culture of the educated — conduct and belles-lettres in one word.' },
        { term: 'Nahḍa', def: 'The nineteenth-century reawakening: print, journalism, translation — the making of modern prose.' },
        { term: 'Kufic / Naskh / Thuluth / Diwani', def: 'The four great scripts: angular codex, round book hand, monumental interlace, Ottoman chancery curl.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A classical qasida typically moves from elegy at the campsite, through a desert journey, to…',
          options: ['a mystical union', 'praise of a patron', 'a wedding song', 'a riddle contest'],
          answer: 1,
          explain: 'Naṣb → raḥīl → madiḥ: the ode\u2019s three-part architecture, climaxing in praise.',
        },
        {
          q: 'The maqāma, the great classical prose form, features…',
          options: ['a rogue surviving by eloquence in rhymed prose', 'frame-tales told to postpone an execution', 'letters between two cities', 'versified history'],
          answer: 0,
          explain: 'Al-Hamadhānī\u2019s Abū l-Fatḥ al-Iskandarī earns dinners with virtuoso language and disappears — rhymed-prose picaresque.',
        },
        {
          q: 'Who was the first Arabic-language Nobel laureate in Literature?',
          options: ['Tayeb Salih', 'Adonis', 'Naguib Mahfouz', 'Taha Hussein'],
          answer: 2,
          explain: 'Mahfouz, 1988 — and still the only Arabic-language laureate.',
        },
        {
          q: 'Which script would you expect in the earliest Qur\u2019anic codices?',
          options: ['Naskh', 'Diwani', 'Thuluth', 'Kufic'],
          answer: 3,
          explain: 'Kufic — the angular, monumental script of the earliest codices and mosque inscriptions.',
        },
      ] },
    ],
  },
  {
    id: 'lang-korean-grammar-workshop',
    title: 'Korean Grammar Workshop: Particles, Endings and Irregular Verbs',
    domain: 'Languages & World Literature',
    field: 'Korean',
    branch: 'Korean Grammar',
    tier: 'core' as const,
    concepts: [
      '은/는 versus 이/가: topic versus subject',
      'The case particle set: 에, 에서, 에게, 도, 의, (으)로',
      'The -시- honorific infix',
      'Tense and modality: 았/었, -(으)ㄹ 것, 겠',
      'Five irregular verb classes',
      'Connectives: -고, -지만, -아서/어서, -(으)면, -(으)니까',
    ],
    words: 1298,
    readMins: 6,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book gave you the frame: Hangul blocks, the verb parked at the end, particles gluing each noun to its job. This workshop installs the machinery inside that frame. Korean does almost nothing with word order and almost everything with endings — so the language lives in the difference between 은 and 이, in the infix that makes a verb polite about a third person, in the five phonological rules that bend stems, and in the connectives that chain clauses without a single conjunction word. Learn the endings and the sentences assemble themselves.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The single most diagnostic error in learner Korean is 은/는 versus 이/가 — even after years of study. It is not politeness, not vocabulary, not speed: it is information structure, and once you hear the difference — given versus new, frame versus focus — both the grammar and the drama of Korean sentences snap into place.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: '은 (는 after a vowel) marks the topic: what the sentence is about, often already known, often contrastive. 이/가 marks the subject: the new information, the answer to an implicit question, the thing being focused. "제가 학생이에요" answers "who here is a student?"; "저는 학생이에요" says "as for me (unlike that other person), I am a student". Both can appear: "그 책은 제가 읽었어요" — "that book, as for it, I (focus) am the one who read it". Topics also chain: start a paragraph with a topic and every following sentence inherits it silently. This is why Korean conversations feel continuous rather than episodic: the frame, once set, holds.',
      },
      {
        kind: 'para',
        text: 'The case set is small and merciless. 을/를 marks the object. 에 marks destination ("to school") and static time points ("at three o\u2019clock"); 에서 marks where an action actually happens ("at the library, studying") and the source ("from Korea"). The difference is the difference between being somewhere and doing something somewhere — 에 있다 (exist at) versus 에서 공부하다 (study at). 에게/한테/께 mark "to" a person, with 께 the honorific. 도 means "also" and often displaces the case particle entirely. 의 is the genitive ("of"). (으)로 means "by means of, with, as, toward" — 버스로 "by bus", 의사로 "as a doctor". And 와/과 (colloquial 하고) is both "and" and "with".',
      },
      {
        kind: 'para',
        text: 'Politeness lives inside the verb, and the crown jewel is the -시- infix: inserting -시- (으시- after a consonant) before the ending honors the subject of the verb. 가다 "go" → 가세요 "goes (honorific)"; 잡수시다 is "eat" honoring the eater. Combined with the ending ladder — 합니다체 (formal), 해요체 (polite, the default of adult strangers), 해체 (intimate) — the verb tells the listener exactly where the speaker locates the relationship. The system is not optional: choosing the wrong level is a grammatical error in Korean in a way choosing an informal register is not in English.',
      },
      {
        kind: 'para',
        text: 'Tense and modality are also endings. 았/었 inserts past: 하다 → 했어요, 가다 → 갔어요, 먹다 → 먹었어요. The future-flavoured -(으)ㄹ 것이다 ("will probably") is literally the future participle of "thing": 갈 거예요 "will go". 겠 adds inference, intention or conditionality: 비가 오겠어요 "it looks like rain". Negation runs through 안 (short form: 안 갔어요 "didn\u2019t go") or -지 않다 (long form: 가지 않았어요), with 못 marking inability ("couldn\u2019t") where 안 marks plain not-doing. The copula 이다 ("to be a…") conjugates like an adjective and, unlike every other verb, attaches directly to its noun: 학생이에요 "am a student".',
      },
      {
        kind: 'para',
        text: 'Five stem-final consonants and vowels bend predictably, and the bending is the irregular system. The ㅂ-irregular softens before vowels: 춥다 "cold" → 추워요, but 곱다 "beautiful" stays regular (고와요 is literary — the point is some ㅂ-stems are regular). The ㄷ-irregular turns to ㄹ before a vowel: 듣다 "listen" → 들어요. The 르-irregular splits into ㄹㄹ: 모르다 "not know" → 몰라요. The ㅡ-irregular drops ㅡ and takes 았/었 on the new final vowel: 바쁘다 "busy" → 바빠요, 쓰다 → 써요. The ㅅ-irregular drops the ㅅ: 짓다 "build" → 지어요. None of this is chaos: each is a phonological rule with a closed class of exceptions, and the exceptions (듣다, 걷다, 묻다 for ㄷ; 낫다, 짓다, 잇다 for ㅅ) are few enough to memorize as lists.',
      },
      {
        kind: 'para',
        text: 'Connectives chain clauses without conjunction words. -고 is plain "and then/and also" (facts in sequence). -지만 is "but". -아서/어서 is "because" with states and "and then" with actions — and it may never carry a command or suggestion: you cannot say "because it\u2019s late, go home" with -아서. -(으)니까 is the "because" that can: commands, suggestions and invitations wait for it. -(으)면 is "if/when", the foundation of every conditional. Master these five and you can say nearly everything a paragraph needs, with the verb still parked firmly at the end of each clause.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Build: "Because it was cold, I stayed home and read a book." Choose connectives first: reason → -(으)니까 (it can chain any clause), then -고 for the action sequence.',
          'Conjugate the reason: 춥다 is ㅂ-irregular → past → 추웠으니까.',
          'Assemble with particles: 집에 있으면서 책을 읽었어요 — destination 에 on 집, object 을 on 책, past tense on both verbs.',
          'Full sentence: 추웠으니까 집에 있으면서 책을 읽었어요 — three endings, zero conjunction words, verb-final throughout.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Texting: the intimate 해체 endings plus 은/는 chains are how group chats actually read.',
        'K-drama and film listening: 해요체 is the default adult register — train your ear by tracking -시- whenever a character is discussed.',
        'News and essays: written Korean (한다체) drops politeness for compression; the same endings carry tense and aspect without the ladder.',
        'Job and visa paperwork: forms use -(으)로 "as/in the capacity of" and plain infinitive stems — the particle set is compliance-critical.',
        'Language exchange: getting 은/는 versus 이/가 right in your self-introduction is the fastest credibility signal you can send.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, mapping 은/는 onto "the" and 이/가 onto "a" — the real contrast is given-versus-new, not definiteness. Second, using 에 for actions: things exist 에 but happen 에서. Third, the -아서 trap: reason with -아서 cannot precede a command; switch to -(으)니까. Fourth, expecting irregulars to be irregular everywhere — they only bend before vowel-initial endings, so 추위 (the noun) and 춥다 (the dictionary form) both keep the ㅂ. Fifth, over-honoring: -시- honors the subject, not the listener; saying 할머니가 께서... 가세요 is right, but you yourself never get -시-.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'topic particle (은/는)', def: 'Marks the sentence\u2019s frame — given, contrastive, chained across sentences.' },
        { term: 'subject particle (이/가)', def: 'Marks new or focused information — the answer to an implicit question.' },
        { term: '-시- infix', def: 'The honorific inserted in verbs to honor the subject — the core of Korean politeness.' },
        { term: 'irregular verb', def: 'A stem class that bends before vowel endings: ㅂ, ㄷ, 르, ㅡ, ㅅ — rules, not exceptions.' },
        { term: 'connective ending', def: 'A verb ending that chains clauses (-고, -지만, -아서/어서, -(으)면, -(으)니까) with no conjunction word.' },
        { term: 'speech level', def: 'The politeness register encoded in every finite verb: 합니다체, 해요체, 해체.' },
        { term: '이다', def: 'The copula "to be a…" — attaches directly to its noun and conjugates like an adjective.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In "그 책은 제가 읽었어요", what does 은 mark on 그 책?',
          options: ['New information', 'The topic — the frame of the sentence', 'The object', 'The destination'],
          answer: 1,
          explain: '은 sets "that book" as the topic; 이/가 on 제가 focuses who did the reading — frame plus focus.',
        },
        {
          q: 'Where does the studying happen — which particle?',
          options: ['도서관에 공부해요', '도서관에서 공부해요', '도서관을 공부해요', '도서관에게 공부해요'],
          answer: 1,
          explain: 'Actions happen 에서; 에 is for destination and static existence.',
        },
        {
          q: 'Which "because" can carry a command or suggestion?',
          options: ['-아서/어서', '-(으)니까', '-고', '-지만'],
          answer: 1,
          explain: 'Only -(으)니까 licenses commands and suggestions in its result clause — the classic -아서 trap.',
        },
        {
          q: '춥다 "be cold" becomes 추워요 because it belongs to which irregular class?',
          options: ['ㄷ-irregular', 'ㅅ-irregular', 'ㅂ-irregular', 'ㅡ-irregular'],
          answer: 2,
          explain: 'The ㅂ softens to 우/오 before vowel endings: 춥다 → 추워요.',
        },
      ] },
    ],
  },
  {
    id: 'lang-korean-reading-culture',
    title: 'Korean Reading and Culture: From Hunminjeongeum to the Nobel',
    domain: 'Languages & World Literature',
    field: 'Korean',
    branch: 'Korean Literature & Culture',
    tier: 'core' as const,
    concepts: [
      'Hunminjeongeum: the 1446 script event',
      'Featural design: consonants from articulators',
      'Before Hangul: hyangga, hanmun, sijo, pansori',
      'The modern novel from The Heartless onward',
      'Han Kang and the 2024 Nobel Prize',
      'Reading by particles, not word order',
    ],
    words: 1368,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Every other alphabet in this book accreted over centuries. Hangul was designed — decreed, explained, and promulgated in 1446 by King Sejong\u2019s court under the name Hunminjeongeum, "The Correct Sounds for the Instruction of the People". This lesson follows the script from that documented birth through the verse and song that carried Korean literature when writing meant Classical Chinese, into the modern novel, and up to the October evening in 2024 when the Swedish Academy awarded the Nobel Prize in Literature to Han Kang — the first Korean-language writer and the first Asian woman to receive it. The through-line is the workshop\u2019s grammar: Korean literature rewards particle-readers.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Hangul is the world\u2019s best-documented script invention, and its design is the reason the workshop\u2019s endings are writable at all: one block = one syllable, every ending visible. Knowing the story is knowing why Korean literacy campaigns actually work — and why the 1997 UNESCO inscription of the Haerye, the explanatory edition lost for centuries, mattered to a whole country\u2019s self-image.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The event is precisely datable. The script was created in 1443 and promulgated in 1446 with the Hunminjeongeum — a preface and a set of verses in the new letters — plus, in the full Haerye edition, explanations of each letter\u2019s design. That Haerye was lost for centuries and only resurfaced in 1940; UNESCO entered it in the Memory of the World register in 1997. The explanations describe the system this lesson now teaches: five basic consonant letters modeled on the shapes the speech organs make — the tongue root closing the back of the mouth (ㄱ), the tongue tip at the ridge (ㄴ), the lips (ㅁ), the teeth (ㅅ), the open throat (ㅇ) — with extra strokes adding aspiration (ㅋ, ㅌ, ㅍ, ㅊ) and compounding building the rest. Vowels were drawn from three elements: a dot for heaven (the sun), a horizontal line for earth, a vertical line for the human standing between them. A script you can see into your own mouth.',
      },
      {
        kind: 'para',
        text: 'Before Hangul — and long after — the prestige written language of Korea was hanmun: Classical Chinese, read in Korean order with Korean pronunciation. The vernacular record survives anyway: fourteenth-century hyangga songs from Silla preserved in the Samguk Yusa; the sijo, a three-breath lyric of roughly forty-five syllables that aristocrats and commoners both wrote, still written today; and pansori, the hours-long sung storytelling performed by a voice and a drum — whose Chunhyangga, the tale of a groomsman\u2019s son and a magistrate\u2019s daughter, is recognized on UNESCO\u2019s intangible heritage lists. Hangul itself was briefly banned under one fifteenth-century king and confined for centuries to women\u2019s letters, diaries and popular fiction — which is exactly why those genres preserved it. The mixed-script era (hanja roots inside Hangul sentences) lasted into the twentieth century, and hanja still disambiguates legalese and academic prose.',
      },
      {
        kind: 'para',
        text: 'Modern Korean prose is usually dated from Yi Kwang-su\u2019s The Heartless (1917), the first modern novel in the language, written in a Japan-annexed country arguing about what a modern Korea was. The twentieth century then ran the full arc: colonial censorship, division, war, and a postwar generation that wrote the national trauma into form — Ch\u2019oe In-hun\u2019s The Square (1960) sending its torn protagonist across the 38th parallel, Hwang Sok-yong\u2019s epic chronicles of the marginalized, Park Wan-suh\u2019s wartime family novels, and the poets who proved the language survived everything. Translation into English grew steadily through the late twentieth century, setting the stage for the current moment.',
      },
      {
        kind: 'para',
        text: 'That moment has a date and a name. Han Kang, daughter of the novelist Han Seung-won, built her reputation on The Vegetarian (2007; English 2015), which won the 2016 Man Booker International Prize — the story of a woman who stops eating meat and stops complying, told entirely through the family\u2019s bewildered eyes. Human Acts (2014) reconstructed the 1980 Gwangju uprising through the bodies it left behind. In October 2024 the Swedish Academy awarded her the Nobel Prize in Literature — the first laureate writing in Korean, and the first Asian woman laureate in the category — citing her "intense poetic prose that confronts historical traumas and exposes the fragility of human life". Her acceptance lecture, on light and snow and the first thing her brother read to her, became required reading overnight.',
      },
      {
        kind: 'para',
        text: 'The reading strategy this book teaches is particle-first parsing, and it is exactly how fluent readers process Korean. Because verbs end their clauses and particles label every noun, you do not read word-by-word the way English demands: you read phrase-final particle by phrase-final particle, letting each 에서, 을, 은/는 tell you what to do with the pile of words that preceded it. Topic chains mean the first sentence of a paragraph sets a frame the rest inherits. A two-line news item in 한자-free modern Hangul is therefore a closed exercise: find the topic, find the focus, find the final verb, and the sentence has told you everything it knows.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Parse a news-style line: 한강 작가는 2024년에 노벨 문학상을 받았습니다.',
          'Find the topic: 작가는 — "the author (as topic)", with 한강 her name before it.',
          'Find the time particle (에 on 2024년), the object particle (을 on the prize), and the final verb 받았습니다 — formal past of "receive".',
          'Assemble by roles, not order: "As for author Han Kang, in 2024, the Nobel Prize in Literature — received." No word order was harmed; the particles did all the work.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Hangul Day (October 9, the promulgation\u2019s commemoration) — Korea\u2019s only script holiday; the origin story is a national festival of literacy.',
        'Reading path: sijo collections in translation, then The Vegetarian, then Human Acts — the particle-first habit survives translation loss best.',
        'Webtoons and K-drama subtitles: the fastest volume reading you can get in the informal register.',
        'UNESCO listings as a study resource: the Haerye and pansori entries are short, free and dense with exactly the vocabulary of this lesson.',
        'Hanja spotting: legal and academic texts still gloss terms with Chinese characters — treat each one as free etymology.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, confusing Hangul (the script, 1446) with Korean (the language, millennia older) — the script event did not create the language. Second, assuming featural means simplistic: the design is brilliant precisely because it is systematic, and the grammar it encodes is as complex as any in this book. Third, declaring hanja dead: it lives in disambiguation, names and scholarship. Fourth, reading Korean in English word-order: your eye must land on the particles, not the first noun — parsing training beats vocabulary drilling at this stage. Fifth, treating 2024 as Korean literature\u2019s beginning: the Nobel crowned a century of the modern novel and a thousand years of verse.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Hunminjeongeum', def: 'The Correct Sounds for the Instruction of the People — the 1446 promulgation of Hangul.' },
        { term: 'Haerye', def: 'The explanatory edition of Hunminjeongeum documenting each letter\u2019s design; lost until 1940, UNESCO-listed 1997.' },
        { term: 'featural script', def: 'A writing system whose letter shapes encode where in the mouth the sound is made — Hangul\u2019s signature idea.' },
        { term: 'hanmun', def: 'Classical Chinese as Korea\u2019s prestige written language — the literature Hangul lived beside for centuries.' },
        { term: 'sijo', def: 'The three-breath lyric of roughly forty-five syllables — Korea\u2019s vernacular verse form, still alive.' },
        { term: 'pansori', def: 'Hours-long sung storytelling with drum — UNESCO-recognized; Chunhyangga is the beloved classic.' },
        { term: 'topic chain', def: 'The paragraph-level mechanism by which one 은/는 topic frames every sentence that follows.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The Hunminjeongeum was promulgated in which year?',
          options: ['1443', '1446', '1504', '1940'],
          answer: 1,
          explain: 'Created 1443, promulgated 1446 — and 1940 is the year the lost Haerye edition resurfaced.',
        },
        {
          q: 'In Hangul\u2019s design, the letter ㅁ derives its shape from…',
          options: ['the sun', 'the teeth', 'the lips', 'a horse\u2019s bridle'],
          answer: 2,
          explain: 'The five basic consonants model the speech organs: ㅁ is the two lips meeting.',
        },
        {
          q: 'Which work is regarded as the first modern Korean novel?',
          options: ['The Vegetarian', 'The Square', 'The Heartless', 'Chunhyangga'],
          answer: 2,
          explain: 'Yi Kwang-su\u2019s The Heartless (1917) — Chunhyangga is pansori, centuries older.',
        },
        {
          q: 'Han Kang\u2019s 2024 Nobel is historic because she is…',
          options: ['the first woman laureate ever', 'the first laureate writing in Korean and first Asian woman in Literature', 'the youngest laureate', 'the first laureate from Asia of any kind'],
          answer: 1,
          explain: 'First Korean-language laureate and the first Asian woman laureate in Literature.',
        },
      ] },
    ],
  },
  {
    id: 'lang-russian-grammar-workshop',
    title: 'Russian Grammar Workshop: Declension, Motion and Government',
    domain: 'Languages & World Literature',
    field: 'Russian',
    branch: 'Russian Grammar',
    tier: 'core' as const,
    concepts: [
      'Three declensions, six cases, full tables',
      'Animacy: why the accusative splits',
      'Motion verbs: unidirectional versus multidirectional',
      'Prefixed motion: по-, при-, у-, вы-, за-',
      'Verbal government: verbs that choose cases',
      'Numerals, one rule for 1 / 2–4 / 5+',
    ],
    words: 1401,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book taught you that Russian has six cases and two aspects, that word order is free because the endings carry the grammar, and that Cyrillic lies about a few letters. This workshop fills in the tables. Full declension patterns for all three genders, the animacy rule that bends the accusative, the celebrated double set of motion verbs, the prefixes that turn "go" into "set off / arrive / leave / drop in", the verbs that choose unexpected cases for their objects, and the numeral rule every headline obeys. The case engine is the language; this lesson is the owner\u2019s manual.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Russian word order is not free because Russians are casual — it is free because every noun wears its role on its ending. That makes the endings the meaning, and makes word order pure emphasis: what you put last is what you stress. Learn the tables and you stop reading Russian as scrambled English and start reading it as music with a grammar score.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The declension system has three patterns. The first declines most feminines in -а/-я: книга "book" runs книга (nominative), книги (genitive), книге (dative), книгу (accusative), книгой (instrumental), книге (prepositional). The second declines masculines and neuters: hard-stem стол "table" runs стол, стола, столу, стол, столом, столе; neuter окно "window" follows with -о/-а endings (окно, окна, окну…); soft stems like словарь "dictionary" run словаря, словарю, словарём, словаре. The third is the small, ancient soft feminine class in -ь: ночь "night" runs ночь, ночи, ночи, ночь, ночью, ночи, and its two members with mobile stress, мать and дочь, hide a syllable in the plural (дочери, дочерей). Two spelling rules prune the tables: after ж, ш, ч, щ, ц an unstressed о writes е, and ы never follows к, г, х or the hushes — which is why книга has книги but душа has души.',
      },
      {
        kind: 'para',
        text: 'Animacy is a rule hiding inside the accusative. For inanimate masculines, the accusative simply copies the nominative: я вижу стол "I see the table". For animate masculines — people and animals — the accusative copies the genitive: я вижу брата "I see the brother", я вижу студента "the student". In the plural the rule extends to everything: animate plurals take genitive-form accusatives (я вижу студентов), inanimates copy the nominative (я вижу столы). First-declension feminines like книгу were already distinct, so the rule is invisible there — which is exactly why learners forget it exists until a masculine animate object appears and the sentence seems to put a possessive where the object should be.',
      },
      {
        kind: 'para',
        text: 'Russian famously has two verbs for each mode of motion. The unidirectional (also called determinate) verb describes motion in one direction, in progress: идти "be walking (one way)", ехать "be riding (one way)", бежать "be running", лететь "be flying", плыть "be swimming". The multidirectional (indeterminate) pair describes motion with no single direction — habit, repetition, round trips, wandering: ходить, ездить, бегать, летать, плавать. "Я иду в библиотеку" is "I am (right now, one-way) walking to the library"; "я хожу в библиотеку" is "I (regularly) go to the library". Multiply-directed wandering also takes the indeterminate: мы ходили по городу "we walked around the town". Choose the verb and you have already said when and whether.',
      },
      {
        kind: 'para',
        text: 'Prefixes then multiply the pairs. Adding по- to an indeterminate stem makes a perfective "set off": пойти, поехать. при- gives "arrive": прийти, приехать. у- gives "depart": уйти, уехать. вы- gives "exit": выйти, выехать. за- gives "drop in on the way": зайти, заехать; до- gives "reach as far as": дойти, доехать. The prefixes carry meaning across the whole family — arrive at a conclusion, depart from a plan, go out of fashion — which is why motion verbs are the best investment in the Russian lexicon: learn five prefixes and ten stems and you own a hundred verbs.',
      },
      {
        kind: 'para',
        text: 'Government (upravlenie) is the phenomenon of verbs and adjectives choosing cases the way English verbs choose prepositions. ждать takes the genitive (ждать письма, "await a letter"); достигать takes the genitive (достигнуть цели, "reach the goal"); верить, помогать and мешать take the dative (верить другу, помогать маме); заниматься, гордиться and интересоваться take the instrumental (заниматься спортом, "go in for sport"); следить takes за plus instrumental. Prepositions distribute too: к and по govern the dative; с, за, над, под and перед govern the instrumental; о governs the prepositional; без, до, для, из, от, у and ради govern the genitive; and в/на govern the accusative when motion is meant (в библиотеку "into the library") but the prepositional when location is meant (в библиотеке "in the library") — the same pair of words carrying go-versus-be.',
      },
      {
        kind: 'para',
        text: 'Numerals obey one headline-shaped rule. One takes the nominative singular: двадцать одна книга "twenty-one books (lit. one book)". Two, three and four take the genitive singular: две книги, три книги, четыре книги. Five and above take the genitive plural: пять книг, двадцать пять книг. Adjectives have a compressed predicate form — the short form — used when the adjective itself is the verb: он болен "he is ill", она готова "she is ready", город красив "the city is beautiful" — and comparatives add -ее: быстрее "faster", интереснее "more interesting".',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Build: "On Wednesday I went to the library, read a whole book and waited for a friend." Choose motion first: a completed one-way trip by unspecified means → поехал or пошёл; walking is default → пошёл.',
          'Aspect the actions: completed, sequenced events → perfective прочитать; the waiting, backgrounded → imperfective ждать.',
          'Government check: ждать + genitive → друга; the object книга takes accusative книгу (feminine first declension).',
          'Assemble: В среду я пошёл в библиотеку, прочитать книгу и ждал друга — motion prefix, aspect pair, and genitive government all correct; word order could now be shuffled at will.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Reading literature: case endings let you untie Tolstoy\u2019s long sentences — find the nominative, and you have found the subject.',
        'Forms and bureaucracy: Russian paperwork loves the genitive — dates of birth, "from / of" phrases, passport data.',
        'Texting: aspect choice is how you signal promise versus process — сделаю "I\u2019ll get it done" versus делаю "I\u2019m on it".',
        'Song lyrics and subtitles: motion-verb prefixes are the plot of half of Russian popular song (ушла, вернись).',
        'Headline reading: the 1 / 2–4 / 5+ numeral rule is why "22 человека" and "два человека" look nothing alike.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, memorizing endings without animacy — the masculine animate accusative will ambush every second sentence. Second, using ехать/идти for habitual motion: one-way verbs describe one-way trips; habits take ходить/ездить. Third, putting perfectives after начать, продолжить, кончить — "began to read (imperfective) and finished reading (perfective)" — the aspect of beginning continues, not completes. Fourth, ignoring government: helping + accusative is wrong (помогать + dative), and the error is glaring to every native ear. Fifth, translating numeral phrases word-for-word: две книги "two books" is genitive singular, not plural — the agreement is the rule.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'declension', def: 'One of three noun patterns (first, second, third) that generate all six case forms.' },
        { term: 'animacy', def: 'The split in the accusative: animates copy the genitive, inanimates copy the nominative.' },
        { term: 'motion verb pair', def: 'Unidirectional versus multidirectional: идти/ходить, ехать/ездить — direction versus habit.' },
        { term: 'prefixed motion', def: 'по- set off, при- arrive, у- depart, вы- exit, за- drop in — perfectives built on motion stems.' },
        { term: 'government', def: 'A verb or preposition\u2019s fixed choice of case for its object — ждать + genitive, помогать + dative, гордиться + instrumental.' },
        { term: 'short-form adjective', def: 'The predicate form of an adjective: он болен, город красив.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Why does я вижу брата use an -а ending on the object?',
          options: ['It is genitive — animate masculine accusatives copy the genitive', 'It is dative', 'It is a plural', 'It is vocative'],
          answer: 0,
          explain: 'Animacy: брата is accusative with genitive form — "I see the brother".',
        },
        {
          q: 'Which pair expresses habitual "going to the library"?',
          options: ['идти / ехать', 'ходить / ездить', 'пойти / поехать', 'прийти / приехать'],
          answer: 1,
          explain: 'Multidirectional (indeterminate) stems express habit and round trips; the others are one-way or prefixed perfectives.',
        },
        {
          q: 'В библиотеку versus в библиотеке differs in…',
          options: ['tense', 'case — accusative for motion, prepositional for location', 'register', 'number'],
          answer: 1,
          explain: 'в/на take the accusative when you are going there, the prepositional when you are there.',
        },
        {
          q: 'пять книг uses the genitive plural because…',
          options: ['книга is irregular', 'numerals 5 and above take genitive plural nouns', 'it is negative', 'it is possessive'],
          answer: 1,
          explain: 'The 1 / 2–4 / 5+ rule: nominative singular, genitive singular, genitive plural.',
        },
      ] },
    ],
  },
  {
    id: 'lang-russian-literature-golden',
    title: 'Russian Literature: The Golden Age and After',
    domain: 'Languages & World Literature',
    field: 'Russian',
    branch: 'Russian Literature',
    tier: 'core' as const,
    concepts: [
      'Pushkin and the Onegin stanza',
      'Gogol\u2019s overcoat and Dead Souls',
      'The great novels: Tolstoy and Dostoevsky',
      'Chekhov and the Silver Age',
      'The censored century: Bulgakov, Akhmatova, Solzhenitsyn',
      'The Nobel lineage, 1933–2015',
    ],
    words: 1570,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Russian literature did a strange thing: it started late and finished first. A vernacular prose tradition barely a century old when Pushkin picked up his pen produced, within two generations, the novels the world agrees are the summit of the form. This lesson walks that arc — the Golden Age verse-novel and the great novels, the Silver Age stage and the censored masterpieces that waited decades for print, and the line of Nobel laureates from Bunin in 1933 to Alexievich in 2015 that stitches it all into literary history. The workshop\u2019s grammar rides along: case endings are how these sentences mean, and aspect is how they breathe.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The Russian classics are not museum pieces — they are the country\u2019s working vocabulary. Politicians quote Pushkin, arguments about the state cite Tolstoy, and every public fight about memory runs through Solzhenitsyn. Read the canon and you can read the news; read the news alone and you will keep missing the second half of every sentence.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The Golden Age begins with a language war. The Karamzin camp wanted Russian prose light, French-inflected and contemporary; the Shishkov camp wanted it heavy with Church Slavonic gravity. Pushkin ended the argument by writing as intelligent people spoke, and then proving the idiom could carry anything. Eugene Onegin (published in full in 1833) is a novel in verse: 14-line stanzas of iambic tetrameter — the Onegin stanza, with its signature feminine rhymes — telling of a bored Petersburg dandy, a country girl he coldly rejects, and a duel he lives to regret. Belinsky called it an encyclopedia of Russian life, and into it went the superfluous man — the clever, useless, self-aware hero Russian fiction would keep reinventing from Onegin to Pechorin to Oblomov. Pushkin also wrote the stories, the drama, and the fairy tales every Russian child knows; his 1837 death in a duel made him the culture\u2019s founding myth.',
      },
      {
        kind: 'para',
        text: 'Gogol took the colloquial victory and pointed it at the absurd. The Overcoat (1842) — the story of Akaky Akakievich, the copying clerk whose whole life is calligraphy until he saves for a new coat, briefly owns happiness, and is robbed of it — became the tradition\u2019s compassionate-comic register; a famous quip, attributed to Dostoevsky, says "we all came out of Gogol\u2019s overcoat". Dead Souls (1842) is a picaresque in which the hero travels buying up dead serfs still on the census rolls — property that exists only on paper — a satire precise enough that "dead souls" entered the language for bureaucratic phantom anything. Between them Gogol invented the Petersburg tale and proved that Russian prose could be funny the way tragedy is funny.',
      },
      {
        kind: 'para',
        text: 'Then come the novels the world means by "Russian novel". Turgenev\u2019s Fathers and Sons (1862) put the generation war on stage and gave the language nihilism via Bazarov, the scientist who believes in nothing not provable. Tolstoy\u2019s War and Peace (1869) braids four families through Napoleon\u2019s invasion while arguing, in essayistic asides, against great-man history; Anna Karenina (1877) runs two marriages in counterpoint — the doomed passion of Anna and Vronsky, the slow moral education of Levin, the novel\u2019s true seeker. Dostoevsky\u2019s Crime and Punishment (1866) compresses the argument into one murderer\u2019s head: Raskolnikov tests his theory that extraordinary men may step over, and the novel is the fever of the experiment failing; the critic Bakhtin later called Dostoevsky\u2019s method polyphonic — every character a full voice, no narrator\u2019s thumb on the scale. The Brothers Karamazov (1880) scales the method to a family murder and a courtroom of ideas.',
      },
      {
        kind: 'para',
        text: 'The Silver Age — roughly 1890 to the 1920s — belongs to the stage and the poem. Chekhov wrote the stories that made brevity a philosophy and the late plays — The Seagull (1896), Uncle Vanya, Three Sisters, The Cherry Orchard (1904) — where nothing is decided and everything is meant: drama of subtext, built with Stanislavsky\u2019s Moscow Art Theatre into the modern theatre itself. The Symbolist Blok brought the revolution\u2019s twelve storming through his best-known long poem; the Acmeists answered with cooler craft, and among them Anna Akhmatova became the century\u2019s witness. Requiem — composed across 1935–1943 in the queues outside Leningrad\u2019s prisons, its prose preface recording a woman who asks "Can you describe this?" and receives the answer "I can" — circulated in samizdat for decades and was published abroad only in 1963. Quatrains, not manifestos: the terror documented in the most disciplined metre in the language.',
      },
      {
        kind: 'para',
        text: 'The Soviet century\u2019s masterpiece had to wait for the thaw and then for a generation. Bulgakov\u2019s The Master and Margarita — the devil arrives in atheistic Moscow, a suppressed novel about Pilate burns inside the frame — was written 1928–1940 and published, censored, only in 1966–67 in the journal Moskva. Solzhenitsyn\u2019s One Day in the Life of Ivan Denisovich, one ordinary day of an ordinary prisoner in a labour camp, appeared in Novy Mir in 1962 with Khrushchev\u2019s sanction and made the Gulag undeniable in print; it opened the decade in which samizdat and tamizdat (publication abroad) became the system\u2019s shadow library. Pasternak\u2019s Doctor Zhivago could not appear at home at all; its 1958 Nobel Prize became an international scandal, and the author was forced to decline it.',
      },
      {
        kind: 'para',
        text: 'The Nobel roll reads like a syllabus of the tradition\u2019s twentieth century: Ivan Bunin, 1933, the first laureate writing in Russian; Boris Pasternak, 1958, forced to decline; Mikhail Sholokhov, 1965, for the Don epics; Alexander Solzhenitsyn, 1970, "for the ethical force"; Joseph Brodsky, 1987, exile-turned-Poet-Laureate-of-the-language; Svetlana Alexievich, 2015, whose "novels of voices" — oral history assembled into literature, from the Soviet-Afghan war\u2019s Zinky Boys to Chernobyl\u2019s Voices from the Big Utopia — proved the tradition could document the century in its own spoken words. Six of the century\u2019s laureates, one continuous argument between literature and power.',
      },
      {
        kind: 'para',
        text: 'And the reading strategy from the workshop is exactly how to meet these books in the original. Find the nominative and you have the subject, whatever the word order; watch the aspect and you have the tempo — perfectives snapping events shut, imperfectives holding scenes open. Long Tolstoyan sentences breathe at their participial phrases; Chekhov\u2019s dialogue hides its meaning in what is not said, but the case endings still tell you who wants what from whom. Public-domain translations of Pushkin, Gogol, Tolstoy, Dostoevsky and Turgenev are freely available, so the parallel-reading method — original on one side, translation on the other — costs nothing but attention.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Take a Tolstoy-style opening: "Воскресенье, гости уходили, и Левин остался…" — Sunday, guests leaving, Levin remained.',
          'Locate the subject by case: гости is nominative plural — "the guests" is one subject; Левин is nominative singular — the other.',
          'Read the aspects: уходили is imperfective — the leaving in progress, scene held open; остался is perfective — Levin\u2019s remaining is a settled fact.',
          'Hear the music: open imperfective, closed perfective, word order putting Levin last — the grammar has performed the sentence\u2019s whole emotional choreography.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Parallel reading: public-domain translations (Gutenberg, Internet Archive) beside the original — the fastest honest route into Tolstoy.',
        'Theatre: The Seagull and The Cherry Orchard are staged constantly; subtext-watching trains literary reading everywhere.',
        'The Nobel list as a curriculum: Bunin to Alexievich is a ready-made twentieth-century Russian reading course.',
        'News and essays: today\u2019s public arguments quote this canon the way English argument quotes Shakespeare — the references are load-bearing.',
        'Film and opera: Eugene Onegin and The Queen of Spades in Tchaikovsky\u2019s operas, War and Peace in Bondarchuk\u2019s film — adaptation as study.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, reading for plot only: in this tradition the form — the stanza, the aspect, the silence — is the argument. Second, assuming "Russian novel" means a thousand pages: Chekhov\u2019s stories are minutes long and carry more per page. Third, dating the Silver Age as merely decorative: Akhmatova\u2019s Requiem is among the century\u2019s central documents. Fourth, treating the Nobel refusals and delays as trivia — the censorship story is part of the works\u2019 meaning. Fifth, giving up on patronymics before the case system kicks in: once endings identify roles, the long names stop being an obstacle and start being a map.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Golden Age', def: 'The Pushkin-centered classical era (roughly 1820–1880) of verse-novel, tale and the great novels.' },
        { term: 'Onegin stanza', def: 'Pushkin\u2019s 14-line iambic-tetrameter stanza with feminine rhymes — the unit of Eugene Onegin.' },
        { term: 'superfluous man', def: 'The clever, self-aware, useless hero from Onegin through Pechorin to Oblomov.' },
        { term: 'polyphony', def: 'Bakhtin\u2019s name for Dostoevsky\u2019s multi-voiced method — characters as full voices, no narrator\u2019s verdict.' },
        { term: 'Silver Age', def: 'Roughly 1890–1920s: Symbolists and Acmeists, Chekhov\u2019s theatre of subtext.' },
        { term: 'samizdat / tamizdat', def: 'Underground self-publication / publication abroad — the shadow library of the censored century.' },
        { term: 'thaw', def: 'The post-1960 loosening under Khrushchev that briefly legalized Ivan Denisovich.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Belinsky\u2019s "encyclopedia of Russian life" refers to…',
          options: ['Dead Souls', 'War and Peace', 'Eugene Onegin', 'The Cherry Orchard'],
          answer: 2,
          explain: 'Pushkin\u2019s verse-novel, in its 14-line Onegin stanzas.',
        },
        {
          q: '"We all came out of Gogol\u2019s overcoat" — the quip, attributed to Dostoevsky, honors which work?',
          options: ['The Nose', 'The Overcoat', 'The Government Inspector', 'Dead Souls'],
          answer: 1,
          explain: 'The 1842 tale of Akaky Akakievich and the coat that briefly made him happy.',
        },
        {
          q: 'Akhmatova\u2019s Requiem could be published abroad only in…',
          options: ['1943', '1956', '1963', '1987'],
          answer: 2,
          explain: 'Composed 1935–43 in the prison queues; samizdat until a Munich edition in 1963.',
        },
        {
          q: 'Who was forced to decline the 1958 Nobel Prize?',
          options: ['Bunin', 'Pasternak', 'Sholokhov', 'Brodsky'],
          answer: 1,
          explain: 'Pasternak — Doctor Zhivago\u2019s publication abroad made the prize a state scandal.',
        },
      ] },
    ],
  },
]

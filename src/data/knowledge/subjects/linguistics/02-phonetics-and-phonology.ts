/**
 * Knowledge Universe — Linguistics — Chapter 02: Phonetics & Phonology
 * 3 lessons · ~3,875 words
 * field: Phonetics & Phonology
 * legacy sources: languages-literature.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Phonetics & Phonology]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 lang-tonal-languages — Tonal Languages: Meaning in Melody
 *   02.2 lang-prosody — Prosody: The Melody of Speech
 *   02.3 lang-phonetics — The Sounds of Speech: Phonetics and the IPA
 */
import type { KnowledgeTopic } from '../../types'

export const linguisticsCh02: KnowledgeTopic[] = [
  {
    id: 'lang-tonal-languages',
    title: 'Tonal Languages: Meaning in Melody',
    domain: 'Languages & World Literature',
    field: 'Phonetics & Phonology',
    branch: 'Linguistics',
    tier: 'intermediate',
    concepts: [
      'Tone as contrastive pitch',
      'Register tones versus contour tones',
      'The syllable as tone’s vehicle',
      'Tone sandhi: tones in context',
      'Pitch range and normalisation',
      'Writing tone: diacritics and numbers',
      'Tone versus intonation',
    ],
    words: 1357,
    readMins: 7,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Roughly half of humanity grows up speaking a language where pitch is a building block of words rather than decoration. In Mandarin, the syllable ma can mean mother, hemp, horse or scold depending entirely on its melody — high and level, rising, dipping, or falling. To a native listener these are as distinct as “bat” and “pat” are to an English speaker. Tone is not emotion, not singing and not accent: it is phonology, contrast carved out of the pitch dimension.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Tonal languages demolish the assumption that melody belongs only to music, and they carry real stakes: for the more than a billion speakers of Sinitic languages alone, pitch errors are word errors. Learners who train their ears for tone early report breakthroughs; those who treat tone as optional fossilise their mistakes. Tone is also a window on the brain, showing the same acoustic cue carrying dictionary meaning in one language and emotional shading in another.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A tone is a pitch pattern used to distinguish word meanings, exactly as vowels and consonants do. Mandarin “mā” (mother, high and level) versus “mǎ” (horse, dipping) differ only in fundamental frequency — the rate of vocal-fold vibration — yet no native speaker confuses them. Linguists call this lexical tone because the pitch is stored as part of the word itself, sitting in the mental lexicon beside its consonants and vowels like any other ingredient of identity.',
      },
      {
        kind: 'para',
        text: 'Register (or level) tones are steady targets — high, mid, low — and dominate many African tone languages, such as Yoruba and Hausa. Contour tones move within the syllable: rising, falling, or the low dipping–rising curve of Mandarin’s third tone. The distinction matters for learners because the tasks differ — with registers you must hit the right pitch level; with contours you must execute the right pitch glide before the syllable expires. Many languages, including Thai and Cantonese, mix both types.',
      },
      {
        kind: 'para',
        text: 'Tone anchors to the syllable — more precisely, to its voiced, sonorant material, the part where the larynx can actually be heard. In Mandarin each full syllable carries one tone; Cantonese and Vietnamese work the same way with richer inventories. Languages divide the labour differently: some require every syllable to be specified for tone, while others concentrate contrast on stressed or prominent syllables. The grammar counts tone-bearing units, not letters or words.',
      },
      {
        kind: 'para',
        text: 'Tones change shape in the stream of speech, and the changes are rule-governed. Mandarin’s famous third-tone sandhi turns a dipping tone into a rising one whenever another third tone follows, so “nǐ hǎo” is actually pronounced “ní hǎo”. Taiwanese and many Wu varieties have far richer systems, some shifting tone across word boundaries like dominoes. Sandhi is why drilling isolated syllables prepares only half the skill: tones must be learned in context, the way they are actually spoken.',
      },
      {
        kind: 'para',
        text: 'Absolute pitch is speaker-relative: a man’s high tone may sit below a child’s low tone. Listeners cope by normalising — mapping what they hear onto the speaker’s personal range — which is why a tonal language works across voices of every size. For analysis, the clean way to compare pitches across speakers is to convert frequencies to a logarithmic scale such as semitones, which matches both hearing and the arithmetic of musical intervals: equal ratios, equal steps.',
      },
      {
        kind: 'para',
        text: 'Writing systems mark tone with mixed enthusiasm. Hanyu Pinyin uses diacritics — mā, má, mǎ, mà — perched on the main vowel; Vietnamese piles diacritics onto vowels for tone and vowel quality alike; Cantonese romanisations often use numbers (maa1 through maa6); Somali, which is tonal, barely marks tone at all. Every system trades precision against clutter, and learners should treat the markings as training wheels for the ear, never as the thing itself.',
      },
      {
        kind: 'para',
        text: 'Every language uses pitch for intonation — questions rising, sarcasm drooping — but in English that melody floats above the words, while in Mandarin it must weave through them. A Mandarin question can lift the overall pitch envelope while each syllable keeps its lexical identity: the two systems layer rather than compete. Non-tonal speakers already own a miniature of the skill — English “REcord” versus “reCORD” — and tone simply scales it up to every syllable.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      { kind: 'formula', name: 'Semitone interval', latex: 'n = 12\\,\\log_{2}\\!\\left(\\dfrac{f_2}{f_1}\\right)', meaning: 'The perceptual distance between two pitches; a doubling of frequency is 12 semitones (one octave), and because hearing tracks ratios, equal ratios sound like equal steps.' },
      { kind: 'formula', name: 'Tone-target normalisation', latex: 'T = \\dfrac{f_0 - L}{H - L}', meaning: 'A speaker’s pitch f0 rescaled as a position between their lowest tone (L) and highest (H), so the same tone category yields comparable values across very different voices.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: how far apart in pitch are Mandarin’s high level tone and its dipping tone for a speaker whose first tone sits near 300 hertz and whose third tone bottoms out near 200 — and is the gap perceptually safe?',
        'Recall the governing idea: pitch distances must be compared on the logarithmic semitone scale, because hearing tracks frequency ratios rather than raw differences.',
        'Apply: with f2 = 300 and f1 = 200 hertz, n = 12 × log2(1.5) ≈ 12 × 0.585 ≈ 7 semitones — about a musical fifth, comfortably above the one-to-two-semitone differences listeners can reliably notice.',
        'State the result: the contrast spans roughly seven semitones, giving the tone categories a wide perceptual margin — the same arithmetic that lets Cantonese run six tones inside a modest speaking range.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Language learning: paired-association and minimal-pair listening drills build tone categories far better than silent flashcards.',
        'Speech technology: recognisers must model tone and synthesizers must produce it, or Mandarin output goes quietly, comically wrong.',
        'Clinical work: tone perception offers sensitive probes of pitch processing, hearing aids and cochlear implants.',
        'Historical linguistics: tone systems are born (Vietnamese) and lost (some Korean dialects), letting researchers watch phonological change in real time.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The learner’s first mistake is treating tone as optional garnish — in a tonal language, a wrong tone is a wrong word. The second is laying English intonation habits on top of lexical tone, flattening distinctions in the process. Beware the textbook myth that contour tones always glide dramatically: in connected speech they are often realised as plain high or low targets. And never compare raw hertz across speakers — a deep-voiced man’s high tone can sit below a child’s low, which is why normalisation exists.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'lexical tone', def: 'Pitch stored as part of a word’s identity, distinguishing meaning.' },
        { term: 'register tone', def: 'A relatively level pitch target — high, mid or low.' },
        { term: 'contour tone', def: 'A pitch pattern that moves within the syllable, such as rising or falling.' },
        { term: 'tone sandhi', def: 'Rule-governed change in a tone’s realisation caused by neighbouring tones.' },
        { term: 'fundamental frequency', def: 'The rate of vocal-fold vibration, the acoustic basis of pitch.' },
        { term: 'normalisation', def: 'Rescaling a speaker’s pitches onto their personal range so tone categories compare across voices.' },
        { term: 'semitone', def: 'The twelfth part of an octave; the logarithmic unit of pitch distance.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In Mandarin, mā, má, mǎ and mà differ in…',
          options: ['vowel quality', 'the initial consonant', 'tone', 'word stress'],
          answer: 2,
          explain: 'The segmental string is constant; only the pitch pattern changes — and it changes the word.',
        },
        {
          q: 'When two third tones meet in Mandarin, the first is pronounced…',
          options: ['unchanged', 'as a rising tone', 'as a falling tone', 'silently'],
          answer: 1,
          explain: 'Third-tone sandhi converts the first dipping tone into a rising tone — “nǐ hǎo” becomes “ní hǎo”.',
        },
        {
          q: 'A language with three steady pitch levels — high, mid, low — has…',
          options: ['contour tones', 'register tones', 'tone sandhi', 'no tone'],
          answer: 1,
          explain: 'Level targets are register tones, the dominant type across African tone languages.',
        },
        {
          q: 'Why convert hertz values to semitones when comparing speakers?',
          options: ['to make the numbers smaller', 'because hearing is roughly logarithmic', 'because hertz is a metric unit', 'to match sheet music exactly'],
          answer: 1,
          explain: 'Equal frequency ratios sound like equal intervals, so the logarithmic scale matches perception.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: basic phonetics — vowels, consonants and the notion of a minimal pair. Follow with the phonology of whichever language you are learning, then prosody and intonation in non-tonal languages for contrast. Learners of Mandarin, Cantonese, Vietnamese or Thai should drill tone pairs aloud from day one: the ear learns to hear what it is asked to listen for.',
      },
    ],
  },
  {
    id: 'lang-prosody',
    title: 'Prosody: The Melody of Speech',
    domain: 'Languages & World Literature',
    field: 'Phonetics & Phonology',
    branch: 'Prosody',
    tier: 'intermediate',
    concepts: [
      'Prosody: the music above the segments',
      'Word stress and contrastive pairs',
      'Stress-timed versus syllable-timed rhythm',
      'Intonation: tunes that carry meaning',
      'Focus: highlighting the new information',
      'Tone and pitch accent across languages',
    ],
    words: 1274,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Say “REcord”, then “reCORD” — same segments, different word, and the difference is pure melody. Prosody is the layer of speech that operates above vowels and consonants: pitch, loudness, length and rhythm, stretched across syllables and phrases. It is why you can hear a question without catching its words, why sarcasm survives when the joke does not, and why a foreign accent sounds foreign even when every individual sound is correct. The segments carry the dictionary; prosody carries everything else.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Prosody is the most audible and least taught layer of language. A learner with perfect vowels but wrong stress still sounds — and sometimes means — wrong, because listeners gauge questions, irony and emphasis almost entirely from the tune. It is also where meaning lives without words: caregivers understand infants, and friends understand a flat “fine.”, from melody alone. If you have ever misread the tone of a text message, you know exactly how much rides on this layer.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Prosodic properties are suprasegmental: they belong to stretches larger than a single sound. A syllable can be high or low, long or short, heavy or light, and these settings pattern over whole words and phrases. Phoneticians bundle them as stress (prominence), rhythm (timing) and intonation (the tune of the phrase). The layers are separable in the laboratory and in performance: hum a sentence\'s melody while discarding its consonants and vowels, and listeners can still recognise the phrase\'s shape.',
      },
      {
        kind: 'para',
        text: 'In English, word stress is contrastive: REcord is a noun, reCORD a verb; PERmit is a document, perMIT is to allow. Stress arrives as a bundle — higher pitch, greater length and a full vowel — while unstressed vowels reduce toward the schwa of “about”. Some languages fix stress on a predictable syllable, Czech on the first, Polish on the next-to-last; English and Russian place it unpredictably, which is why learners must memorise the stress of every new word along with its spelling.',
      },
      {
        kind: 'para',
        text: 'Languages also divide time differently. In stress-timed English, German or Russian, stressed syllables recur at roughly even intervals and unstressed syllables compress between them — English speakers swallow syllables wholesale, which is why “I wanna go” is natural speech. In syllable-timed Spanish, Italian or French, syllables take roughly equal time — the machine-gun impression English ears report. Japanese runs on morae, equal beats smaller than syllables. The categories are tendencies, not laws, but they explain most of what “sounding fluent” means.',
      },
      {
        kind: 'para',
        text: 'Intonation assigns tunes to phrases, and tunes carry speech-act meaning. English yes-no questions typically end rising (“You\'re coming?”); statements fall; lists rise on every item except the last, which falls to close. A statement delivered with a final rise sounds uncertain or asks for confirmation — uptalk. And sarcasm is intonation\'s proof of power: “Well, that went GREAT”, flat, low and stretched, means precisely its opposite. No word changed; the tune flipped the sentence.',
      },
      {
        kind: 'para',
        text: 'Nuclear stress marks the new information. “MARY baked the cake” answers who; “Mary baked the CAKE” answers what. Given, old information is deaccented — the melody drops it — because the listener already holds it. Misplaced stress confuses: stressing “baked” implies someone doubts the baking happened. Languages differ in machinery — some mark focus with particles or word order — but every language must tell the listener where the news is, and English does it with the tune.',
      },
      {
        kind: 'para',
        text: 'Where prosody and phonology fully merge, pitch becomes part of the word. In tone languages — the subject of the Tonal Languages lesson in this section — every syllable carries a stored pitch pattern. Pitch-accent languages are the middle case: Japanese allows roughly one accent per word, a pitch drop separating háshi “chopsticks” from hashí “bridge”. English stress is a feeble cousin built mostly of loudness and vowel quality. The continuum runs from melody decorating words to melody being the words.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: the sentence “She said she\'d call” — what changes as stress moves through it, and what does the tune add?',
        'Recall the governing ideas: nuclear stress selects the new information; intonation supplies stance — sarcasm uses flat, stretched, low contours.',
        'Apply: “SHE said...” contradicts doubts about who; “she SAID...” implies she only said it; “she said she\'d CALL” marks calling, not texting, as the issue. Delivered as “Well, she CALLed...” with lengthened fall-rise pitch, the speaker implies the call somehow fell short.',
        'State the result: one string of words, at least four messages — stress selects the news, the tune supplies the attitude. Those are the two jobs prosody performs in every sentence you speak.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Language teaching: stress-placement and compression drills fix the “perfect vowels, foreign accent” plateau faster than more segment work.',
        'Speech technology: synthetic voices sound natural or robotic almost entirely on prosody — tune, timing and pauses, not segments.',
        'Texting and email: stripped of melody, writing borrows punctuation, emoji and a flat “fine.” to reconstruct the tune readers cannot hear.',
        'Public speaking: deliberate pitch variation and pausing are what keep monotone delivery from losing an audience.',
        'Accent coaching: “sounds foreign” judgments are usually prosodic — wrong stress and rhythm with flawless consonants still reads as accent.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The first error is equating stress with loudness — it is a bundle of pitch, length and vowel quality, so shouting an unstressed syllable fixes nothing. Second, treating intonation as pure emotion: tunes carry grammar — questionhood, closure, focus — not just feeling. Third, over-generalising English: wh-questions in English fall rather than rise, and many languages mark questions with particles instead of tunes. Finally, refusing the schwa — unreduced unstressed vowels are the most durable accent habit English learners fossilise.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'prosody', def: 'The melodic layer of speech — pitch, length, loudness and rhythm — operating above segments.' },
        { term: 'suprasegmental', def: 'A property belonging to stretches larger than one sound, such as stress or intonation.' },
        { term: 'word stress', def: 'The relative prominence of one syllable, marked by pitch, length and full vowel quality.' },
        { term: 'schwa', def: 'The reduced neutral vowel of unstressed syllables, the first sound of “about”.' },
        { term: 'stress-timed rhythm', def: 'A timing pattern in which stressed syllables recur at roughly equal intervals.' },
        { term: 'nuclear stress', def: 'The most prominent stress in a phrase, placed on the new information.' },
        { term: 'pitch accent', def: 'A system in which one accentual pitch drop per word distinguishes meanings, as in Japanese.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'REcord versus reCORD demonstrates that English word stress is…',
          options: ['fixed on the first syllable', 'contrastive — it can distinguish words', 'purely a matter of loudness', 'the same thing as tone'],
          answer: 1,
          explain: 'The noun and verb differ only in stress placement — a minimal pair in the prosodic dimension.',
        },
        {
          q: 'In “Mary baked the CAKE”, the capitals mark…',
          options: ['the given information', 'the nuclear stress on the new information', 'a question contour', 'syllable-timed rhythm'],
          answer: 1,
          explain: 'Nuclear stress lands on the news of the sentence; old information is deaccented because the listener already has it.',
        },
        {
          q: 'Sarcasm — “Well, that went GREAT” — is evidence that…',
          options: ['intonation can reverse meaning on its own', 'sarcasm is a written phenomenon', 'stress only marks grammar', 'questions always rise'],
          answer: 0,
          explain: 'The words stay identical; a flat, stretched, low contour flips the sentence to its opposite.',
        },
        {
          q: 'Japanese háshi versus hashí illustrates…',
          options: ['syllable timing', 'pitch accent — one pitch drop distinguishing words', 'free stress placement', 'schwa reduction'],
          answer: 1,
          explain: 'A single accentual pitch drop, moving between syllables, separates “chopsticks” from “bridge”.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: basic phonetics — vowels, consonants and the notion of a minimal pair. Pair this with the Tonal Languages lesson, which treats pitch inside words in depth; this topic covers the melody above them. Follow with the phonology of whichever language you are learning, and train your ear by humming sentences before repeating their segments.',
      },
    ],
  },
  {
    id: "lang-phonetics",
    title: "The Sounds of Speech: Phonetics and the IPA",
    domain: "Languages & World Literature",
    field: "Phonetics & Phonology",
    branch: "Phonetics",
    tier: "core",
    concepts: [
      "The vocal tract as instrument",
      "Consonants: voicing, place, manner",
      "Vowels: height, backness, rounding",
      "The International Phonetic Alphabet",
      "Minimal pairs and contrast",
      "Sounds English does not own",
    ],
    words: 1210,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Every human language is built from the same raw material: air from the lungs, shaped by a tube of muscle and cartilage. Phonetics is the anatomy of that shaping — the study of how speech sounds are made, travel and land. Its twin, phonology, asks how languages organise sounds into contrasts; the tonal-languages and prosody lessons in this section live on that side of the border. This lesson is the foundation both of them assume: the sounds themselves.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Your accent in any new language is decided here, and so is your ability to hear one. The International Phonetic Alphabet — one symbol per sound for every language on Earth — turns pronunciation from guesswork into data: dictionaries, textbooks and wiktionaries all speak it. And the vocal tract you own is the same instrument every speaker owns; the “impossible” sounds of other languages are mostly unmapped, not unavailable.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Trace the airflow. The lungs push; the larynx holds the vocal folds, which can buzz — voicing — or rest. Feel it: put a fingertip to your throat and alternate ssss and zzzz. Same mouth, same breath; only the buzz differs. Above the larynx the tube bends through the pharynx into the mouth, roofed by the hard and soft palate — the velum, which opens the nose for m, n and ng or seals it for everything else. The tongue is the main mover, with tip, blade, body and root; the lips and teeth finish the toolkit.",
      },
      {
        kind: "para",
        text: "A consonant is a cell in a three-way grid: voicing, place, manner. Place is where the narrowing happens — bilabial (p, b, m), labiodental (f, v), dental and interdental (the th of think), alveolar (t, d, s, n, l), postalveolar (sh), palatal (y), velar (k, g) and glottal (h). Manner is how narrow — stops (p, t, k) close the airway completely; fricatives (s, f, th) leave a turbulent gap; affricates (ch) do stop-then-fricative; nasals lower the velum; liquids (l, r) and glides (w, y) barely narrow at all. Name any consonant in three words: ʃ, the sh of ship, is a voiceless postalveolar fricative; ŋ, the ng of sing, is a velar nasal — which English allows only at the end of syllables.",
      },
      {
        kind: "para",
        text: "Vowels narrow nothing; the tongue body sculpts the resonating tube instead, along three axes. Height: close vowels like i and u lift the tongue; open a drops it. Backness: i and e sit front; u and o back. Rounding: u rounds the lips; i does not. The IPA vowel chart is this space drawn as a trapezium. Languages sample it differently — Spanish and Japanese run on five vowels, a e i o u; English stocks a dozen-plus, including the schwa ə of “about”, its most common vowel of all, and gliding diphthongs like the “ai” of “price”.",
      },
      {
        kind: "para",
        text: "The International Phonetic Association published its alphabet in 1888 on one principle: one symbol, one sound, cross-linguistically, forever. Transcription sits in slashes: “sin” is /sɪn/, “sing” /sɪŋ/. The symbols are not English letters in costume — ʃ, θ, ɣ and ʁ are citizens of their own — and ː marks length while ˈ marks stress. The payoff: with the chart and this lesson’s grid, you can pronounce a word of any language from its dictionary entry on sight, including languages you have never heard spoken. English “colonel” and “kernel” meet as /ˈkɜːrnəl/; the spelling was never the sound.",
      },
      {
        kind: "para",
        text: "What makes two sounds different in a language? The minimal pair: two words differing in exactly one sound — pin versus bin, ship versus sip, bat versus bet. Pairs prove the contrast is real; everything else is physics without meaning. The p of English “pin” carries a puff of air that the p of “spin” lacks; English treats them as one phoneme, and speakers barely hear the difference. In Hindi, Thai, Korean and Mandarin, that puff separates words — the Hindi and Korean lessons of this section trade on exactly this line. And beyond any one inventory: clicks in Xhosa and Zulu, ejectives in Georgian and Quechua, the pharyngeal ʿayn of Arabic — all producible, with practice, by the standard-issue vocal tract.",
      },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: name three sounds precisely by their coordinates, and transcribe one English word fully.",
        "Recall the toolkit: for a consonant, voicing, place, manner; for a vowel, height, backness, rounding; for a word, symbol by symbol.",
        "Apply it: ð — the th of “this” — is a voiced dental fricative; x — the ch of German Bach — a voiceless velar fricative; ʁ, the French r, a voiced uvular fricative. And “phonetics” comes out /fəˈnɛtɪks/: f, schwa, stressed ɛ, t, ɪ, k, s.",
        "State the result: three coordinates plus a chart named any sound asked of you — the working method of every phonetician and every good pronunciation dictionary.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Language learning: minimal-pair listening drills build the categories an accent actually depends on.",
        "Pronunciation dictionaries and wiktionaries: IPA entries for any word in any language, free to read.",
        "Speech-language pathology: assessment and therapy run on articulatory description.",
        "Accent coaching and dialect description: actors and linguists map accents with the same grid.",
        "Speech technology and fieldwork: recognisers, synthesizers and the documentation of endangered languages all begin with transcription.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "The first error is believing your language’s inventory is the universal one — it is a dialect of the mouth, not its constitution. The second is trusting spelling: English orthography records the sound of Chaucer’s England, which is why “ghoti” can be argued to spell “fish”. The third is confusing phonetics with phonology — physical description versus a language’s contrast system; aspiration is phonetics in English, phonology in Hindi. And the vowel chart is a map, not a menu: cardinal vowels are reference points, not a claim that your accent sits exactly on them.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "articulatory phonetics", def: "The study of how speech sounds are produced by the vocal tract." },
        { term: "voicing", def: "Vocal-fold buzzing — the s–z difference felt at the throat." },
        { term: "place of articulation", def: "Where the airflow is narrowed — bilabial, alveolar, velar, glottal." },
        { term: "manner of articulation", def: "How the airflow is narrowed — stop, fricative, nasal, liquid, glide." },
        { term: "minimal pair", def: "Two words differing in exactly one sound, proving the contrast is meaningful." },
        { term: "International Phonetic Alphabet", def: "The one-symbol-one-sound notation for every language’s sounds, born 1888." },
        { term: "schwa", def: "The neutral reduced vowel ə, the most common vowel in English." },
      ] },
      { kind: "heading", text: "Check Yourself" },
      { kind: "quiz", items: [
        {
          q: "The difference between ssss and zzzz is…",
          options: ["place", "manner", "voicing", "nasality"],
          answer: 2,
          explain: "The mouth shape is identical; the vocal folds buzz for z and rest for s.",
        },
        {
          q: "ŋ, the final sound of “sing”, is a…",
          options: ["velar nasal", "palatal glide", "uvular trill", "glottal stop"],
          answer: 0,
          explain: "Tongue back against the soft palate, velum lowered — and never syllable-initial in English.",
        },
        {
          q: "A minimal pair, like ship and sip, demonstrates…",
          options: ["free variation", "that the two sounds contrast meanings in that language", "a spelling error", "a dialect difference"],
          answer: 1,
          explain: "One sound of difference, one word of difference: the cleanest proof of contrast.",
        },
        {
          q: "The most common vowel in English speech is…",
          options: ["i", "a", "u", "schwa, ə"],
          answer: 3,
          explain: "Unstressed syllables reduce to ə — the first vowel of “about” and the last of “sofa”.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none — this is the entry point of the Phonetics & Phonology subject. Follow with the prosody lesson, the melody above these segments, and the tonal-languages lesson, pitch inside words — both assume exactly this toolkit. For any language you study next, find its vowel chart and consonant grid first.",
      },
    ],
  },
]

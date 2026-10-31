/**
 * Knowledge Universe — Linguistics — Chapter 01: The Science of Language
 * 6 lessons · ~7,703 words
 * field: Linguistics
 * legacy sources: languages-literature.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Linguistics]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 lang-etymology-word-origins — Where Words Come From: Etymology in Action
 *   01.2 lang-morphology — Morphology: How Languages Build Words
 *   01.3 lang-syntax-sentence-structure — Syntax: How Sentences Are Built
 *   01.4 lang-semantics-pragmatics — Meaning: Semantics and Pragmatics
 *   01.5 lang-historical-linguistics — How Languages Change: Sound, Grammar and Family Trees
 *   01.6 lang-writing-systems-world — Writing Systems of the World: Alphabets, Abjads and Beyond
 */
import type { KnowledgeTopic } from '../../types'

export const linguisticsCh01: KnowledgeTopic[] = [
  {
    id: 'lang-etymology-word-origins',
    title: 'Where Words Come From: Etymology in Action',
    domain: 'Languages & World Literature',
    field: 'Linguistics',
    branch: 'Historical Linguistics',
    tier: 'core',
    concepts: [
      'Borrowing: the loanword traffic',
      'Regular sound change',
      'Word-building: compounding, clipping and blending',
      'Semantic shift and drift',
      'Cognates and the comparative method',
      'Folk etymology and false origins',
      'Reading an etymology entry critically',
    ],
    words: 1291,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Every word is a fossil with a pulse. “Companion” hides Latin panis, bread — literally someone you share bread with; “salary” walks back to Roman salt money; “nice” began life as Latin nescius, ignorant, and needed seven centuries to drift into praise. Etymology is the science of these journeys: it traces how sounds erode, meanings slide and languages trade words across borders. Read it well and the dictionary stops being a list of spellings and becomes an archive of human history.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Etymology is memory work that pays daily interest. A learner who sees that “photograph” means “light-writing” unlocks a family — telephone, telegraph, photosynthesis — without memorising anything twice. It explains why English spelling looks like a crime scene (words preserve old pronunciations as fossils), why Spanish and French resemble each other, and why “decimate” once meant to kill one man in ten.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'No language is self-sufficient. English took “sugar” by way of Arabic from Sanskrit, “algebra” from Arabic, “shampoo” from Hindi and “restaurant” from French; Japanese rebuilt thousands of English words into its own sound system, producing “sararīman”, the salaryman. Borrowing follows contact — trade, conquest, religion, technology — and its direction can date the meeting: Germanic tribes had “wine” from Rome while Rome still ruled. Loanwords are archaeological strata: dig through them and you find who met whom, and roughly when.',
      },
      {
        kind: 'para',
        text: 'Sound change is not chaos; it is law-like. Grimm’s law showed that Latin and Greek p, t, k became English f, th, h across the board — pater and father, tres and three, cornu and horn — a shift inherited from the moment Germanic branched away. Because the correspondences are regular, they are predictable in both directions: one confirmed pairing licenses hundreds of predictions, which is how linguists separate genuine cognates from coincidence. Apparent exceptions usually hide later changes layered on top, waiting to be peeled back.',
      },
      {
        kind: 'para',
        text: 'Languages mint new words from old material. Compounding glues free words together (“mousepad”, or German’s railway-scale monsters); clipping shortens (“advertisement” to “ad”); blending splices two words into one (“breakfast” plus “lunch” gives “brunch”, “motor” plus “hotel” gives “motel”); acronyms freeze initial letters into pronounceable words (laser, from light amplification by stimulated emission of radiation). These processes are productive, meaning they still run: “to google” went from proper noun to everyday verb in about a decade.',
      },
      {
        kind: 'para',
        text: 'Meanings slide along well-mapped rails. Broadening: “dog” once named one breed, now all of them. Narrowing: “meat” once meant food in general. Elevation: “knight” climbed from servant boy to noble warrior. Degradation: “silly” fell from blessed to foolish. Metaphor drives much of the traffic — the “eye” of a needle, the “foot” of a mountain — and euphemism drives more, as each polite word acquires the stain of what it replaced and needs replacing in turn. No academy legislates this; it accumulates in millions of small choices.',
      },
      {
        kind: 'para',
        text: 'Line up regular correspondences across sister languages and you can reconstruct words nobody ever wrote down. English “three”, German “drei”, Latin “tres”, Greek “treis” and Sanskrit “tráyas” all point back to a Proto-Indo-European ancestor spoken perhaps six thousand years ago. The comparative method, applied to such patterns, has reconstructed Proto-Germanic, Proto-Semitic and the vast family trees that organise the world’s languages — all inferred from regularities alive in the present day.',
      },
      {
        kind: 'para',
        text: 'When a word grows opaque, speakers reshape it into something meaningful. “Bridegroom” absorbed a worn-out Old English word into the familiar “groom”; English forced Spanish cucaracha into “cockroach”; “sparrowgrass” was a folk rewrite of “asparagus”. The mirror-image trap is the false cognate: English “much” and Spanish “mucho” look like siblings and are complete strangers, and “have” and Latin habere, despite textbook resemblance, descend from different roots. Resemblance is cheap; systematic correspondence is proof.',
      },
      {
        kind: 'para',
        text: 'A dictionary’s etymology is an argument, not a verdict. Read it for the chain of forms — Middle English, Old French, Latin — for the attested dates, and for the hedge words: “probably” and “of uncertain origin” mark honest ignorance. Good entries separate lineage from legend, because popular origins are often beautiful and false: “posh” does not come from “port out, starboard home”, however perfect the story sounds. Learning to read the hedges is learning to read the limits of the evidence.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: how did “nice” travel from a Latin word for ignorant to a term of pure praise — and can the route be traced rather than guessed?',
        'Recall the governing idea: semantic shift proceeds by small, documented increments, so dated citations century by century should reveal a ladder, not a leap.',
        'Apply: Latin nescius, “not knowing”, passed through Old French nice into English around 1300 meaning foolish or simple; by the 1400s it meant fussy and fastidious; by the 1700s, daintily precise — hence agreeable, pleasant. Jane Austen still plays on the fussy sense when her characters call things “very nice”.',
        'State the result: each generation nudged the word one rung, no decree required, and the itinerary survives in quotations — semantic drift with a paper trail, the etymologist’s ideal case.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Vocabulary building: one root unlocks dozens of relatives — the Latin root spect, “look”, links inspect, spectator, spectacle and suspect.',
        'Language learning: borrowed words predict cognates across the languages you already speak, cutting memorisation dramatically.',
        'Translation and editing: a word’s history explains registers and connotations that definitions only hint at.',
        'Historical research: loanword strata document contact, trade and conquest where written records fall silent.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The seductive trap is the folk etymology — a vivid story repeated until it feels like fact (“posh”, “golf” and “rule of thumb” all attract them, all false). The subtler error is treating resemblance as kinship: with thousands of words per language, chance lookalikes are statistically guaranteed. And remember the rule that outrages purists: etymology explains a word’s origin, not its current meaning — “decimate” today means to destroy a large share, because meaning lives with speakers, not with ancestors.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'etymology', def: 'The documented history of a word’s form and meaning through time.' },
        { term: 'loanword', def: 'A word adopted from another language, usually reshaped to native sound patterns.' },
        { term: 'cognate', def: 'A word sharing an ancestor with a word in another language, shown by regular correspondences.' },
        { term: 'sound law', def: 'A regular correspondence characterising a language branch, such as Grimm’s law p, t, k to f, th, h.' },
        { term: 'semantic shift', def: 'Change in meaning — broadening, narrowing, elevation or degradation.' },
        { term: 'folk etymology', def: 'Reshaping an opaque word into meaningful parts, or a popular false origin story.' },
        { term: 'comparative method', def: 'Reconstructing an ancestor language by comparing regular correspondences across descendants.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Which pair is a true cognate pair?',
          options: ['English “much” and Spanish “mucho”', 'English “father” and Latin “pater”', 'English “day” and Latin “deus”', 'English “have” and Latin “habere”'],
          answer: 1,
          explain: 'Father and pater show the regular p-to-f correspondence of Grimm’s law; the other pairs are famous chance lookalikes.',
        },
        {
          q: 'The word “brunch” illustrates which word-building process?',
          options: ['compounding', 'clipping', 'blending', 'back-formation'],
          answer: 2,
          explain: 'Blending splices recognisable parts of two words — breakfast and lunch — into a single new one.',
        },
        {
          q: 'A word that climbs in status, like “knight” from servant to noble warrior, has undergone…',
          options: ['semantic broadening', 'elevation', 'degradation', 'folk etymology'],
          answer: 1,
          explain: 'Elevation, or amelioration, is the upward slide of a word’s social standing over time.',
        },
        {
          q: 'Grimm’s law predicts that Latin “tres” corresponds to English…',
          options: ['two', 'three', 'ten', 'tree'],
          answer: 1,
          explain: 'The sound law turns Latin t into Germanic th — tres/three and tenuis/thin are the textbook pairings.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is core-tier linguistics requiring only curiosity. Follow with sound change in depth, the Indo-European family tree, and morphology, the study of how words are built from roots and affixes. The real teacher is an etymological dictionary browsed at random: ten minutes a day compounds into an instinct for where words have been.',
      },
    ],
  },
  {
    id: 'lang-morphology',
    title: 'Morphology: How Languages Build Words',
    domain: 'Languages & World Literature',
    field: 'Linguistics',
    branch: 'Morphology',
    tier: 'core',
    concepts: [
      'The morpheme: the smallest unit of meaning',
      'Free and bound morphemes',
      'Inflection: grammar without new words',
      'Derivation: building new words',
      'Compounding and word structure',
      'Language types: isolating to fusional',
    ],
    words: 1171,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Words look atomic but are assembled. Cats contains two pieces — cat, a meaning, and -s, “more than one”. Unbelievable contains three: un- “not”, believe and -able “capable of being”. Morphology is the study of this hidden assembly line: the units languages build words from and the rules that order them. Etymology, elsewhere in this section, traces where words came from over the centuries; morphology studies the machinery that is still running today — and every fluent speaker already owns one.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every plural noun, tensed verb and derived adjective you have ever produced was computed by these rules, not stored one by one — which is why you can make sense of words you have never met, like unfriendable or decaffeinate. Morphology also explains why a single Turkish word can translate an English phrase. For learners it is the difference between memorising a thousand forms and learning a stem plus a system.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The morpheme is the smallest unit of language that carries meaning or grammatical function — smallest, because cat cannot be cut further without leaving sounds that mean nothing, and a unit, because cat and -s each contribute. The counting test is not syllables: crocodile is three syllables but one morpheme, while cats is one syllable but two morphemes. Silent and unstressed material misleads English eyes; the structural cut, not the sound, is what counts.',
      },
      {
        kind: 'para',
        text: 'Free morphemes stand alone as words: book, run, green. Bound morphemes must attach: plural -s, past -ed, -ness, re-, un-. Some bound items are roots that never surface independently — Latin -ceive in receive and perceive has no life of its own in English. Speakers feel the difference instantly, and morphology names it: green is a word; the -en of greenen is not, and cannot be. Function words like the and of are free but grammatical — same toolkit, different shelf.',
      },
      {
        kind: 'para',
        text: 'Inflection adjusts a word\'s grammar without changing what it is: cat and cats, walk and walked, she and her. Number, case, tense, aspect and person — the bookkeeping categories — arrive as inflections, and each language has only a small, closed set of them. Inflected forms share one dictionary entry: walks is still walk. English is inflection-poor; Spanish verb tables and Turkish case endings run the same machinery at far higher volume.',
      },
      {
        kind: 'para',
        text: 'Derivation builds different words, often changing word class: happy the adjective becomes happiness the noun; modern becomes modernise; read becomes readable; agree becomes disagree. Derivational affixes form an open, productive set — -gate caught on after Watergate — and they stack in a fixed order: un-believ-ab-ly works, belie-un-ably does not. Where inflection changes grammar, derivation changes identity, and the derived word earns its own dictionary entry.',
      },
      {
        kind: 'para',
        text: 'Compounding welds free morphemes into single words: blackboard, laptop, smartphone. English marks the seam with stress — a BLACKbird is a species, a black BIRD is any dark bird — and compounds drift toward meanings no sum of parts predicts. German industrialises the process, Mandarin builds nearly its whole vocabulary this way, and blending, clipping and back-formation add further word-formation routes whose histories the etymology lesson covers.',
      },
      {
        kind: 'para',
        text: 'Languages distribute the work differently. Isolating Mandarin runs close to one morpheme per word and leans on compounding. Agglutinative Turkish, Finnish and Swahili chain long strings of clearly separated affixes: ev-ler-im-de means “in my houses” — four morphemes, each visible. Fusional Latin, Russian and Spanish compress several meanings into single endings — Latin -rum marks feminine, plural and genitive at once. English sits mid-spectrum: nearly isolating in inflection, exuberant in derivation and compounding.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: parse the English word unbelievably and the Turkish word evlerimde completely — every morpheme, its type and its contribution.',
        'Recall the toolkit: free versus bound; inflection versus derivation; in agglutination, one affix does exactly one job.',
        'Apply: un- (bound, derivational, negation) + believe (free root) + -able (bound, derivational, verb to adjective) + -ly (bound, derivational, adjective to adverb). Turkish: ev “house” + -ler plural + -im “my” + -de “in” — three bound suffixes in a row, each with one job.',
        'State the result: four morphemes in each word, but the English ones layer into class-shifting derivation while the Turkish ones snap together like bricks — derivation versus agglutination in a single comparison.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Language teaching: the tense endings and plural markers drilled first in every course are morphology, organised into a syllabus.',
        'Search and machine translation: lemmatisation reduces walked and walking to walk so that queries and documents match.',
        'Lexicography: one dictionary entry per word forces editors to rule on inflection versus derivation case by case.',
        'Translation practice: a single Turkish or Inuktitut word often equals an English phrase, and morpheme counts drive the work.',
        'Word games: Scrabble legality, crosswords and spelling bees all turn on which derived forms count as real words.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Three confusions cause most errors. Morpheme is not syllable: chased is one syllable, two morphemes; crocodile the reverse. Inflection is not derivation: a new dictionary entry means derivation; the same word in a different grammatical setting means inflection. And English is not the norm: it is unusually morpheme-light, so learners of Spanish, Finnish or Turkish must deliberately rebuild the habit of hearing endings as meaningful.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'morpheme', def: 'The smallest unit of language carrying meaning or grammatical function.' },
        { term: 'free morpheme', def: 'A morpheme that can stand alone as a word, like book or green.' },
        { term: 'bound morpheme', def: 'A morpheme that must attach to another, like plural -s or negative un-.' },
        { term: 'inflection', def: 'Variation of a word\'s form for grammar — number, tense, case — without creating a new word.' },
        { term: 'derivation', def: 'Word-building with affixes that changes meaning or class, producing a new dictionary entry.' },
        { term: 'compound', def: 'A word formed by joining two free morphemes, as blackboard joins black and board.' },
        { term: 'agglutination', def: 'Chaining clearly separable affixes, one meaning each, as Turkish ev-ler-im-de, “in my houses”.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'How many morphemes are in unbelievably?',
          options: ['One', 'Two', 'Three', 'Four'],
          answer: 3,
          explain: 'un- + believe + -able + -ly: negation, root, “capable of being”, and the adverbial ending.',
        },
        {
          q: 'Which of these is inflection rather than derivation?',
          options: ['modernise from modern', 'happiness from happy', 'walked from walk', 'reader from read'],
          answer: 2,
          explain: 'Walked is the same verb marked for tense; the others are new words with their own dictionary entries.',
        },
        {
          q: 'A language that chains long strings of clearly separated affixes, one meaning each, is…',
          options: ['isolating', 'agglutinative', 'fusional', 'analytic'],
          answer: 1,
          explain: 'Agglutination: Turkish ev-ler-im-de assembles “in my houses” like bricks, every seam visible.',
        },
        {
          q: 'Cats versus crocodile shows that…',
          options: ['syllable count equals morpheme count', 'morphemes can outnumber syllables and vice versa', 'compounds always contain two morphemes', 'bound morphemes must be syllables'],
          answer: 1,
          explain: 'Cats is one syllable but two morphemes; crocodile is three syllables but one morpheme.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is core-tier linguistics and pairs directly with the etymology lesson, which covers word origins and word-formation history. Follow with the phonology of whichever language you are learning, and with typology across language families. The habit to build: meet a long word, cut it into morphemes before reaching for the dictionary.',
      },
    ],
  },
  {
    id: "lang-syntax-sentence-structure",
    title: "Syntax: How Sentences Are Built",
    domain: "Languages & World Literature",
    field: "Linguistics",
    branch: "The Science of Language",
    tier: "intermediate",
    concepts: [
      "Constituency: words that travel together",
      "Tree diagrams and structural ambiguity",
      "Recursion: sentences without a ceiling",
      "Agreement and government",
      "Movement: questions and passives",
      "Word-order typology",
      "Case and particles versus position",
    ],
    words: 1240,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Consider two strings of words. “Colorless green ideas sleep furiously” means nothing at all, yet every English speaker recognises it as a flawless sentence. Rearrange the same words — “Ideas sleep colorless green furiously” — and the sentence vanishes while the words survive. The difference is syntax: the rule system that builds sentences out of words, running independently of whether the result makes sense. Every fluent speaker executes it thousands of times a day without stating a rule.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Syntax is what lets a finite brain produce sentences it has never heard: there is no longest sentence, and no dictionary of sentences is needed. It is also where languages differ most visibly — German parks the verb second, Japanese saves it for last, Russian lets endings free the order. Learn constituents, trees and movement once, and every language’s grammar becomes describable.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Sentences are not strings but hierarchies. [The little dog] [buried [a bone] [in the garden]] groups words into constituents — phrases behaving as single units — and three tests prove the grouping. Substitution: a pronoun replaces a whole phrase and nothing else — “it” stands in for “a bone”, never for “buried a”. Movement: constituents travel as blocks — “A bone, the little dog buried in the garden”. Standalone answer: asked what the dog buried, a speaker answers “A bone”. Words that move, shrink and answer together belong together.",
      },
      {
        kind: "para",
        text: "The hierarchy is drawn as a tree: the sentence splits into a noun phrase and a verb phrase, each splits again, and the words hang as leaves. Trees explain what word order cannot: structural ambiguity. “Old men and women” has two trees — old [men and women], only the men are old, against [old men] and [women], where the women need not be. “I saw the man with the telescope” toggles between seeing through the telescope and seeing a man who carries one — only the brackets decide.",
      },
      {
        kind: "para",
        text: "The engine of the system is recursion: rules whose output can contain their own input. A noun phrase may hold a prepositional phrase, and a prepositional phrase must hold a noun phrase — so the loop can run forever: “the dog [in the yard [behind the house [at the end of the lane]]]”. A finite rule set therefore generates sentences of unbounded length; every speaker can parse “This is the dog that worried the cat that killed the rat that ate the malt” on first hearing. But centre-embed the same recursion — “The rat the cat the dog chased killed ate the malt” — and grammar stays legal while working memory collapses: grammaticality and parsability are different things.",
      },
      { kind: "formula", name: "A recursive phrase-structure rule", latex: "NP \\rightarrow Det\\;N\\;(PP), \\qquad PP \\rightarrow P\\;NP", meaning: "A noun phrase may contain a prepositional phrase, which must contain a noun phrase — the loop makes the system unbounded: finite rules, infinitely many sentences." },
      {
        kind: "para",
        text: "Words inside a sentence must coordinate. Agreement copies features between connected words: English verbs agree with their subjects — “she walks” versus “they walk” — while German determiners and adjectives agree with their nouns in gender, case and number, as the German lesson tracks in full. Government runs the other way: a verb or preposition demands a case form from its dependents, as Russian verbs rule their objects. Together they are the wiring that holds distant parts of a tree together.",
      },
      {
        kind: "para",
        text: "Constituents also move. English questions are statements with one phrase promoted to the front and a gap left behind: “What did the dog bury __?” moves the object from its slot. The passive runs the machinery in the other direction: “A bone was buried __ by the dog” promotes the object to subject and demotes the agent to a by-phrase. Movement explains why question order and statement order feel like one grammar — and supplies a long-distance constituency test: what moves as a block is a constituent.",
      },
      {
        kind: "para",
        text: "Languages divide the labour between order and marking. English encodes who does what to whom almost entirely by position — swap “dog” and “man” and the bite reverses. Verb-final Japanese marks roles with particles, and case-rich Russian lets the endings carry them — exactly why the Russian lesson’s книга can wander the sentence while the meaning stands still: when endings do the work, order is freed for emphasis. Verb-final is the most common order worldwide, with verb-second German and free-order Latin filling out the typology. Syntax is universal; its strategies are not.",
      },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: give “The dog buried a bone in the garden” its hierarchical structure, then interrogate and passivise it.",
        "Recall the governing ideas: find the verb; group its arguments; test the groups; then move the object.",
        "Apply it: the verb buried splits the sentence into subject [the dog] and verb phrase [buried a bone in the garden]; “a bone” substitutes with it and fronts alone, so it is a constituent; “in the garden” fronts too and attaches inside the verb phrase.",
        "State the result: S → [NP the dog] [VP buried [NP a bone] [PP in [NP the garden]]]. Question: “What did the dog bury in the garden?” Passive: “A bone was buried in the garden by the dog.” One tree, three sentences.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Language learning: transfer errors — verb-second ignored, verb-final anticipated — are syntax errors, and typology predicts them.",
        "Translation: interpreters re-bracket and re-order, because trees, not strings, correspond.",
        "Computing: compiler parse trees descend from this tradition — the Theory of Computation lessons formalise it.",
        "Clinical linguistics: agrammatic aphasia prunes the tree, sparing words while wrecking structure.",
        "Editing: rhythm, subordination and clarity are tree management under another name.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "The first error is equating syntax with word order: order is the surface; the hierarchy is the grammar. The second is treating tree diagrams as reality — they are models, useful and revisable, not photographs of the brain. Third, assuming every language owns English’s categories: many manage without articles. Fourth, confusing grammaticality with sense — “colorless green ideas” is the standing reminder that the two are independent. And length is not complexity: right-branching sentences grow easily, but centre-embed three clauses and native speakers stall.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "constituent", def: "A word or group of words functioning as a single unit." },
        { term: "syntactic tree", def: "A diagram of a sentence’s hierarchy, from sentence to word." },
        { term: "recursion", def: "A rule whose output can contain its own input." },
        { term: "structural ambiguity", def: "One string, two trees, two meanings — as in “old men and women”." },
        { term: "agreement", def: "The copying of features like number or gender between words." },
        { term: "movement", def: "Relocating a constituent, as in questions and passives." },
        { term: "word-order typology", def: "How languages encode grammatical roles: position, particles or case." },
      ] },
      { kind: "heading", text: "Check Yourself" },
      { kind: "quiz", items: [
        {
          q: "“Colorless green ideas sleep furiously” demonstrates that…",
          options: ["nonsense cannot be a sentence", "syntax is independent of meaning — well-formed nonsense", "English word order is free", "adverbs end sentences"],
          answer: 1,
          explain: "Every rule of English syntax is satisfied while sense is entirely absent.",
        },
        {
          q: "“A bone, the dog buried in the garden” shows that “a bone” is…",
          options: ["a constituent — it moves as one block", "the subject", "a prepositional phrase", "the verb’s modifier"],
          answer: 0,
          explain: "Movement is a constituency test: only constituents front as units.",
        },
        {
          q: "“I saw the man with the telescope” is ambiguous because…",
          options: ["telescope has two meanings", "the prepositional phrase can attach to the verb phrase or the noun phrase", "see can mean visit", "there is no subject"],
          answer: 1,
          explain: "Two trees, one string: the telescope belongs to the seeing or to the man.",
        },
        {
          q: "Russian word order floats free largely because…",
          options: ["Russian has no verbs", "Russian is tonal", "case endings, not positions, mark who does what to whom", "speakers dislike order"],
          answer: 2,
          explain: "When endings carry the roles, order is released for emphasis.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: the morphology lesson — syntax assembles what morphology manufactures. Follow with the semantics and pragmatics lesson, and read the German, Japanese and Russian foundations lessons to watch verb-second, particle-marking and case-freed order in daily use.",
      },
    ],
  },
  {
    id: "lang-semantics-pragmatics",
    title: "Meaning: Semantics and Pragmatics",
    domain: "Languages & World Literature",
    field: "Linguistics",
    branch: "The Science of Language",
    tier: "intermediate",
    concepts: [
      "Reference versus sense",
      "Lexical relations: antonymy, hyponymy",
      "Compositionality",
      "Grice’s maxims and implicature",
      "Speech acts and felicity conditions",
      "Deixis and presupposition",
      "Politeness and indirectness",
    ],
    words: 1250,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "“Can you pass the salt?” is, literally, a question about the capabilities of your arm. Nobody answers “Yes” and continues eating — everyone passes the salt. Human utterances carry two layers at once: semantics, the meaning encoded in words and sentences, and pragmatics, the meaning a speaker produces with those words in a context. The first is a property of the language; the second is an act of communication. Drawing the border between them is one of linguistics’ liveliest enterprises.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Every conversation runs two computations simultaneously: what the sentence means, and what the speaker means by uttering it here and now. The machinery is invisible until it misfires — in cross-cultural encounters, in text messages sent without a tune (the prosody lesson’s complaint), and above all in translation, where semantics usually survives crossing but pragmatics must be rebuilt by hand.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Frege’s founding distinction: an expression’s reference is what it points at; its sense is the way it presents that thing. “The morning star” and “the evening star” both refer to Venus, but by different routes — and the Babylonian astronomers who discovered that the two names share one planet made an astronomical discovery, not a linguistic one. Sense is why two expressions can denote one thing yet differ in what they reveal — and why learning a language means learning senses, not just references.",
      },
      {
        kind: "para",
        text: "Word meanings live in webs. Perfect synonyms barely exist: big and large overlap until you meet a large number and a big brother. Antonyms come in two kinds — gradable pairs like hot and cold, which permit lukewarm and let “not hot” fall short of cold, and complementary pairs like dead and alive, which allow no middle. Hyponymy is containment: tulip and rose are hyponyms of flower. Meronymy is part-hood: wheel is a meronym of car. These relations power thesauruses and the vocabulary webs good learners build.",
      },
      {
        kind: "para",
        text: "The meaning of a whole is computed from the meanings of its parts plus the syntax that assembles them — Frege’s principle of compositionality, and the reason productivity works. “The dog bit the man” and “The man bit the dog” draw on identical vocabulary; only the structure differs, and so does the news. You have never heard “The ostrich apologised to the dentist”, yet you understand it instantly. Idioms are the famous leaks — “kick the bucket” is stored whole, not computed.",
      },
      { kind: "formula", name: "The principle of compositionality", latex: "\\mathrm{meaning}(S) = f\\big(\\mathrm{meaning}(w_1), \\ldots, \\mathrm{meaning}(w_n),\\ \\mathrm{structure}(S)\\big)", meaning: "A sentence’s meaning is a function of its words’ meanings plus the structure that assembles them — why “dog bites man” and “man bites dog” differ in news from the same vocabulary." },
      {
        kind: "para",
        text: "Grice noticed that conversation runs on cooperation: speakers try to be informative (Quantity), truthful (Quality), relevant (Relation) and clear (Manner). Because hearers assume the maxims hold, flouting them generates meaning beyond the words — implicature. “Some students passed” implicates that not all did: a cooperative speaker with better news would have given it. The laboratory test is cancellation: “Some students passed — in fact, all of them” remains coherent, so “not all” was implicature, not entailment; an entailment cannot be cancelled at all. Implicature is where understatement, sarcasm and tact live.",
      },
      {
        kind: "para",
        text: "Austin observed that utterances do things. “I promise”, “I apologise”, “I now pronounce you married” do not describe — they perform. A speech act has three faces: the locution (the words uttered), the illocutionary force (what is done in saying them — a request, a warning) and the perlocutionary effect (what the saying achieves — frightening, persuading). Performatives can misfire when felicity conditions fail: only the right person with the right authority can launch a ship by name, which is why strangers cannot marry you.",
      },
      {
        kind: "para",
        text: "Context is not scenery; it is wiring. Deictics — I, you, here, now, tomorrow, come — anchor their meaning to the speaker, place and moment of utterance: a note reading “Meet me here tomorrow” is nearly uninterpretable when found later. Presupposition smuggles assumptions aboard: “Have you stopped drinking coffee?” takes for granted that you drank it, which is why cross-examining lawyers love the question. Indirectness scales with imposition — “Would you mind possibly…?” — and cultures divide the labour differently: the Korean and Hindi lessons show politeness grammaticised as speech levels and graded “you”s.",
      },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: analyse “It’s cold in here”, said to a roommate sitting beside an open window, on both layers.",
        "Recall the governing ideas: semantics fixes the literal, truth-evaluable content; pragmatics asks what the speaker is doing, via the maxims and speech-act force.",
        "Apply it: literally, the sentence reports the room’s temperature — true or false as it stands. But relevance rules out a weather bulletin: the roommate controls the window, so the utterance flouts Relation and implicates a request — close the window.",
        "State the result: cancel it — “It’s cold in here, but don’t shut the window; I want the air” — and the request evaporates while the temperature report stands. Two layers, computed in order and separable on demand.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Translation: the words cross easily; the politeness, indirectness and deixis must be rebuilt for the target culture.",
        "Language teaching: textbook “How are you?” is a greeting, not a question — learners need pragmatics, not just grammar.",
        "Computing: the NLP lessons cover machine meaning for words; computing implicature is the frontier.",
        "Law: contracts are speech acts — offer, acceptance, warranty — whose felicity conditions courts police.",
        "Daily diplomacy: requests, refusals and sarcasm repair are pragmatics under pressure.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "Literalism is the standing trap: answering “Can you…?” about ability instead of acting, or sending “fine.” without a tune. Second, the dictionary fallacy: definitions approximate a word’s use; sense lives in contexts and collocations. Third, exporting the maxims wholesale — cultures weigh informativeness, directness and politeness differently, and German directness is efficiency, not insult. Fourth, confusing entailment with implicature: only implicatures cancel. And resist over-reading: sometimes “it’s cold” is a weather report, and cold is just cold.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "reference", def: "What an expression denotes — the thing it points at." },
        { term: "sense", def: "The way an expression presents its reference; morning star and evening star differ here." },
        { term: "compositionality", def: "The principle that the meaning of the whole is computed from parts plus structure." },
        { term: "entailment", def: "What a sentence guarantees to be true if it is; uncancellable." },
        { term: "implicature", def: "Meaning generated beyond the words by flouting a maxim; cancellable under test." },
        { term: "speech act", def: "An utterance viewed as an action — promising, requesting, warning." },
        { term: "deixis", def: "Meaning anchored to speaker, place and time, as in here, now, tomorrow." },
      ] },
      { kind: "heading", text: "Check Yourself" },
      { kind: "quiz", items: [
        {
          q: "“The morning star” and “the evening star” have…",
          options: ["different references", "the same reference but different senses", "the same sense", "no reference"],
          answer: 1,
          explain: "Both denote Venus; the routes differ — Frege’s founding case.",
        },
        {
          q: "“Some students passed — in fact, all of them” is coherent, which shows “not all” was…",
          options: ["an entailment", "a presupposition", "ungrammatical", "an implicature — cancellable, hence not literal"],
          answer: 3,
          explain: "Cancellation is the laboratory: what cancels cleanly was never entailed.",
        },
        {
          q: "“I now pronounce you husband and wife” fails when said by a stranger because…",
          options: ["it is false", "felicity conditions — authority and circumstances — are unmet", "pronounce has two senses", "it lacks deixis"],
          answer: 1,
          explain: "Performatives succeed only under the right conditions; the wrong speaker misfires.",
        },
        {
          q: "A note reading “Meet me here tomorrow” frustrates a later finder because of…",
          options: ["ambiguous vocabulary", "deixis — anchors to an unknown speaker, place and day", "presupposition failure", "its implicatures"],
          answer: 1,
          explain: "Deictics point from a moment of utterance that has gone missing.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: the syntax lesson, whose structures feed the compositional machine. Follow with the sociolinguistics lesson — meaning in society — and reread the Spanish ser versus estar lesson to watch predication semantics doing daily work. Grice’s “Logic and Conversation” is among the field’s most readable papers.",
      },
    ],
  },
  {
    id: "lang-historical-linguistics",
    title: "How Languages Change: Sound, Grammar and Family Trees",
    domain: "Languages & World Literature",
    field: "Linguistics",
    branch: "Historical Linguistics",
    tier: "intermediate",
    concepts: [
      "Sound change and the Great Vowel Shift",
      "Analogy: taming the irregular",
      "Grammaticalization: words into endings",
      "The comparative method, step by step",
      "The world’s language families",
      "Tree versus wave: inheritance and diffusion",
      "Pidgins and creoles",
    ],
    words: 1250,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "An English speaker of the year 1000 is unintelligible today; Chaucer, six centuries back, needs footnotes; Beowulf, ten, is a foreign language. Yet a Spanish, an Italian and a Portuguese speaker at one table can half-follow each other’s sentences. Languages change constantly — in sound, grammar and vocabulary — and the changes are regular enough that the unwritten past can be reconstructed from living speech. The etymology lesson followed single words; this one follows whole systems — and the method that builds family trees.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Language change is not decay — every generation’s speech is a complete system — and its regularity is the closest thing historical linguistics has to laws of motion. From regular correspondences, linguists have reconstructed languages no one ever wrote down, predicted sounds later dug out of clay tablets, and mapped the migrations behind half of humanity’s languages.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Sound change is regular: it sweeps the vocabulary, consulting no word’s meaning or dignity. The clearest demonstration is the Great Vowel Shift, roughly 1400 to 1700, when English long vowels rotated like queue-jumpers, each dragging the next: Middle English “meece” [meːs] became mice and “hoos” [hoːs] became house. Spelling had been fixed by the new printing presses while the rotation was still under way — which is why English letters still point at vowel positions their sounds abandoned centuries ago. Grimm’s law — Latin pater matching English father — is the same lawfulness across branches; the etymology lesson shows it at work.",
      },
      {
        kind: "para",
        text: "Sound change is blind and regular; speakers are pattern-hungry, and analogy tames the wreckage. Old English had hundreds of strong verbs building their pasts by vowel change; the bulk were levelled to -ed — holp became helped, kine became cows — while the seventy-odd survivors live on by sheer frequency. Children saying “goed” are not erring; they are running the analogical engine that has always pruned the language. The same force drags opaque words toward transparent shapes, re-cutting “a napron” into “an apron”.",
      },
      {
        kind: "para",
        text: "Grammar itself is congealed vocabulary. Words worn down in frequency and force become function words, then affixes, then vanish into endings. English “going to”, a verb of motion, is now the future marker gonna. The French future je chanterai fuses an infinitive with Latin habere, “to have” — literally “sing-have”. French negation pas began as the noun “step”, in “he doesn’t walk a step”, and has shouldered ne aside entirely. English -ly descends from a word meaning “body, form”. The cycle — content word, function word, affix — runs in every language.",
      },
      {
        kind: "para",
        text: "The discipline’s engine is a procedure. First, assemble candidate cognates across related languages from stable vocabulary — kinship, numbers, body parts. Second, align correspondences sound by sound: what matters is not resemblance but systematic matching, the etymology lesson’s much/mucho trap. Third, reconstruct the ancestral sound for each correspondence set, judging direction by where the innovations cluster. Fourth, demand regularity: the reconstruction must hold across the whole lexicon or be abandoned. The trophy: Saussure, young in the 1870s, deduced that Proto-Indo-European needed consonants no one had seen — and when Hittite was deciphered decades later, there they were.",
      },
      {
        kind: "para",
        text: "Run the method worldwide and the seven thousand living languages sort into families. Indo-European — some 450 languages and nearly half of humanity — spans Germanic, Romance, Slavic, Indo-Iranian, Celtic, Hellenic, Baltic, Armenian and Albanian, plus the extinct Anatolian and Tocharian branches. Sino-Tibetan, Afro-Asiatic (Arabic, Hebrew, Hausa, Amharic), Niger-Congo — some fifteen hundred mostly tonal languages spread by the Bantu expansions — and Austronesian, from Taiwan to Madagascar to Easter Island, the widest pre-modern spread on Earth, are the other giants. Turkic, Dravidian, Japonic and Koreanic follow; Basque stands alone, an isolate older than the Indo-European arrival in Europe.",
      },
      {
        kind: "para",
        text: "The family tree models inheritance — a parent language splitting into daughters. The wave model models diffusion: features spreading neighbour to neighbour across family lines, as in the Balkans, where Greek, Albanian, Bulgarian and Romanian share postposed articles despite belonging to different branches. Both are true; neither suffices alone. Contact can even ignite new languages: a pidgin born of trade is spare by design, but children raised on one grammaticise it into a creole — Haitian Creole and Tok Pisin are full languages with French and English parents respectively.",
      },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: run the comparative method on words that survive in one modern family, and let it recover their common source.",
        "Assemble the set — “horse”: Spanish caballo, Portuguese cavalo, Italian cavallo, French cheval, Romanian cal.",
        "Align and check the correspondences: Latin ca- repeatedly pairs with French cha- (campus → champ, cantare → chanter, castellum → château) while Spanish keeps ca-; Latin -ll- yields Italian -ll-, Spanish -ll-, French and Romanian -l. Each branch owns its own sound law.",
        "Reconstruct and verify: the correspondences converge on *caballu — and Latin, attested in texts, confirms it: caballus, the everyday “horse” that shouldered classical equus aside. One ancestor, five branch-specific laws; run on dead ends with no texts, the same procedure reconstructs Proto-Indo-European.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Reading the past: the distance from Beowulf to Chaucer to Shakespeare is measured in these changes.",
        "Learning arithmetic: know one Romance or Germanic language and the next arrives pre-discounted — cognates follow sound laws.",
        "Heritage: the family tree tells you which branch your home language sits on, and who its cousins are.",
        "Prehistory: Proto-Indo-European words for wheels and wool date the family after those inventions.",
        "Classification: surveys and translation pipelines begin from the family tree.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "Resemblance is still not kinship — across seven thousand languages, chance lookalikes are guaranteed (the etymology lesson’s much/mucho rule stands). Do not read decay into change: every stage of every language was complete. Do not trust the tree alone — English is Germanic by inheritance yet half Romance by borrowing. Do not accept shortcut comparisons: lumping languages by surface similarity, without regular correspondences, built castles that fell on inspection. And date proto-languages with humility — the honest error bars span millennia.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "proto-language", def: "A reconstructed ancestor, marked with an asterisk because it is inferred, never attested." },
        { term: "language family", def: "Languages shown by regular correspondences to descend from one proto-language." },
        { term: "Great Vowel Shift", def: "The rotation of English long vowels, roughly 1400–1700, fossilised in spelling." },
        { term: "analogy", def: "Remodelling irregular forms on productive patterns, as holp gave way to helped." },
        { term: "grammaticalization", def: "The drift by which content words become function words and affixes." },
        { term: "wave model", def: "Change spreading area by area across family lines, as in the Balkans." },
        { term: "creole", def: "A full language nativised from a pidgin by a generation of children." },
      ] },
      { kind: "heading", text: "Check Yourself" },
      { kind: "quiz", items: [
        {
          q: "English spelling and pronunciation disagree largely because…",
          options: ["printers made errors", "the Great Vowel Shift rotated the long vowels after spelling standardised", "Latin letters were misapplied", "English borrowed French spelling"],
          answer: 1,
          explain: "The presses froze the letters while the vowels moved.",
        },
        {
          q: "French je chanterai (“I will sing”) preserves a fossil of…",
          options: ["Latin cantare alone", "a Renaissance coinage", "a Celtic substrate", "Latin habere, “to have”"],
          answer: 3,
          explain: "The future ending grew from “sing-have”: grammaticalization in an ending.",
        },
        {
          q: "Saussure’s reconstructed consonants for Proto-Indo-European were vindicated when…",
          options: ["Sanskrit was rediscovered", "Hittite was deciphered and showed them", "the Rosetta Stone was found", "Grimm published his law"],
          answer: 1,
          explain: "The laryngeals he inferred from vowels alone turned up in Hittite clay.",
        },
        {
          q: "The Balkan sharing of postposed articles illustrates…",
          options: ["the family tree model", "a creole in formation", "the wave model — diffusion across family lines", "the comparative method"],
          answer: 2,
          explain: "Greek, Albanian, Bulgarian and Romanian are not one family, yet share the feature.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: the etymology lesson, which follows words; this lesson follows systems. Follow with sociolinguistics — change from below is where the laboratory meets the street — and the writing-systems lesson for what carries the families on the page. The foundations lessons for German, Russian, Hindi and Arabic put cognates and family membership in your mouth.",
      },
    ],
  },
  {
    id: "lang-writing-systems-world",
    title: "Writing Systems of the World: Alphabets, Abjads and Beyond",
    domain: "Languages & World Literature",
    field: "Linguistics",
    branch: "The Science of Language",
    tier: "core",
    concepts: [
      "The typology: what a character encodes",
      "Logographic systems: morphemes on the page",
      "Syllabaries: one character, one syllable",
      "Alphabets: the Greek vowel invention",
      "Abjads and abugidas",
      "Hangul: the one featural script",
      "A language is not its script",
    ],
    words: 1250,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Speech is ancient; writing is an invention so difficult that humans managed it independently only a handful of times — Mesopotamia by about 3200 BCE, Egypt, China, Mesoamerica. Nearly every script in use descends from those few sparks (the Humanities lessons trace cuneiform’s birth in the account office). What differs dramatically is what a single character encodes: a morpheme, a syllable, or one lone sound. That choice — the typology — turns every unfamiliar script from a wall of decoration into a finite, learnable system.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Know the typology and you can budget: an alphabet yields in days, a syllabary in weeks, a logographic system in years. It also settles the deepest confusion — a script is not a language. Hindi and Urdu are one speech written two ways; Latin serves hundreds of tongues from Vietnamese to Finnish. Script is the clothing; language is the body.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Classify by the unit. Logographic systems write morphemes: Chinese characters (hanzi) each carry a morpheme of sound-plus-meaning — 日 rì, sun; 木 mù, tree; 林 lín, two trees, forest; 明 míng, sun beside moon, bright. Japanese borrowed them as kanji — the Japanese writing lesson covers the aftermath. But characters are not pictures of ideas: the great majority are phono-semantic compounds pairing a meaning component with a sound component — 妈 mā, mother, is woman plus horse, the horse contributing only its pronunciation ma. Morphemic writing suits Mandarin, whose one-syllable morphemes by the thousand would drown an alphabet in homographs.",
      },
      {
        kind: "para",
        text: "A syllabary writes whole syllables, one character each. Japanese kana — forty-six base signs — is the textbook case, matched to a language of simple beats. Sequoyah, a Cherokee monolingual who saw alphabetic writing’s power without being able to read it, invented a Cherokee syllabary in 1821; literacy in the nation leapt within years. Linear B wrote Greek in syllables three thousand years before anyone could read them again. Syllabaries fit languages with a few hundred syllable types; English, with clusters like strengths, would need a warehouse of signs.",
      },
      {
        kind: "para",
        text: "Alphabets segment the syllable and award consonants and vowels separate letters. The step happened essentially once: around the eighth century BCE, Greeks took the Phoenician abjad and repurposed letters for vowels — alpha and beta are aleph, “ox”, and beth, “house”, fossils of older pictographs. Latin descends through Etruscan; Cyrillic was built from Greek for the Slavs, and the Russian lesson unwraps it. The ideal is a few dozen letters mapping transparently to sound; reality runs from shallow Spanish and Finnish to deep English and French — the phonetics lesson explains why spelling became a museum.",
      },
      {
        kind: "para",
        text: "An abjad writes the consonant skeleton and leaves vowels to the reader: Arabic كتب may read kataba, “he wrote”, or kutiba, “it was written” — the Arabic lesson shows the harakāt diacritics that supply vowels where they matter, and why the system suits a language whose word families live in consonant roots like K-T-B. Hebrew belongs here too, and so did Phoenician, the ancestor of the whole Western tradition. Abjads look under-specified to alphabet readers and run beautifully once grammar fills the gaps.",
      },
      {
        kind: "para",
        text: "An abugida writes consonants with a built-in vowel and modifies it with diacritics. Devanagari, the Hindi lesson’s subject, is the model: क is ka by default, a matra makes कि ki, and the virama kills the vowel to क् k. Thai, Burmese, Khmer and Tibetan descend from ancient Brahmi on this plan; Ethiopic runs on the same principle independently.",
      },
      {
        kind: "para",
        text: "One script encodes more than sound identity: Hangul’s letters draw the speech organs themselves — the Korean lesson presents the world’s one featural script, whose jamo pack into square blocks, 한 han. Systems also mix: a Japanese sentence runs kanji for stems, hiragana for grammar, katakana for the foreign — three scripts, six jobs. English, an alphabet, still keeps logograms in service: 2, 8, &, %, read as words. Direction is convention — left to right for most, right to left for Arabic and Hebrew, vertical columns for traditional Chinese and Japanese, and early Greek boustrophedon, turning like an ox ploughing.",
      },
      {
        kind: "para",
        text: "The principle that organises it all: a script is a technology, not the language itself. One language may wear many scripts — Hindi–Urdu is the consequential case, one spoken core dressed in Devanagari and Nastaliq; Serbo-Croatian wrote itself Latin and Cyrillic; Turkey switched scripts by a single 1928 law. One script may dress many languages — Latin carries Vietnamese, an Austroasiatic language, and Finnish, a Uralic one; Arabic dresses Persian and Urdu with extra letters for sounds it lacks. Decipherment proves the point from the far side: Ventris showed Linear B was Greek; Knorozov cracked the Maya mix of word-signs and syllables; the Humanities lessons carry the Rosetta Stone story.",
      },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: classify five scripts on sight — Arabic كتب, Devanagari नमस्ते, Korean 한글, Japanese 食べます, Chinese 森林 — with the diagnostic for each.",
        "Recall the diagnostic ladder: what does the smallest character encode — morpheme, syllable, or single sound? If sound: are vowels full letters, absent, or inherent but modifiable?",
        "Apply it: كتب writes consonants with vowels unwritten — an abjad. नमस्ते shows consonant letters fused with vowel signs — an abugida. 한글 decomposes into featural jamo packed per syllable. 食べます mixes a meaning-character with syllabic kana. 森林 packs one morpheme per character.",
        "State the result: five systems, five answers to one question — how much language does a character carry? None of the five tells you what family its users speak.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Study budgeting: alphabet weekend, kana fortnight, characters years — the typology sets the calendar.",
        "Typing: Korean jamo keyboards, Chinese pinyin input and Japanese IME conversion all solve typology problems.",
        "Romanisation: pinyin versus Wade-Giles gave the world Beijing and Peking for one city.",
        "Literacy policy: Turkey’s 1928 switch and Japan’s jōyō list show states steering scripts.",
        "Archaeology: decipherment — Linear B, Maya — turns writing back into history.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "Stop calling characters pictures: most are phonetic compounds, and 妈 contains a horse for its sound alone. Retire the ladder myth — no script is more “advanced”; each suits its language’s structure, and Mandarin’s homophones make characters earn their keep. Do not read family trees off scripts: Vietnamese writes Latin but speaks Austroasiatic. Do not assume your reading direction is natural. And no alphabet maps sound perfectly — English orthography is an archive, read for fossils in the phonetics lesson.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "logogram", def: "A written sign carrying a morpheme — sound and meaning together." },
        { term: "syllabary", def: "A script with one character per syllable, like Japanese kana or Cherokee." },
        { term: "alphabet", def: "A script granting consonants and vowels separate letters — the Greek innovation." },
        { term: "abjad", def: "A consonantal script whose vowels are mostly left to the reader." },
        { term: "abugida", def: "A script whose consonants carry an inherent vowel altered by diacritics." },
        { term: "featural script", def: "A script whose letter shapes depict articulation — Hangul, uniquely." },
        { term: "decipherment", def: "Recovering the language and system of an unread script, as Ventris did for Linear B." },
      ] },
      { kind: "heading", text: "Check Yourself" },
      { kind: "quiz", items: [
        {
          q: "Arabic, which writes كتب with the vowels unwritten, is…",
          options: ["an alphabet", "an abjad", "a syllabary", "an abugida"],
          answer: 1,
          explain: "The consonant skeleton carries the root; grammar and context supply the vowels.",
        },
        {
          q: "Devanagari क versus कि shows…",
          options: ["a featural design", "logographic compounding", "an abugida: an inherent vowel replaced by diacritics", "random variation"],
          answer: 2,
          explain: "Each consonant owns a default “a” until a matra swaps it or a virama kills it.",
        },
        {
          q: "The horse in 妈 mā, “mother”, is there…",
          options: ["because mothers love horses", "to supply the sound ma — most characters are phono-semantic compounds", "as a tonal marker", "to indicate plurality"],
          answer: 1,
          explain: "The woman carries meaning; the horse carries pronunciation.",
        },
        {
          q: "Hindi and Urdu demonstrate that…",
          options: ["scripts evolve from pictures", "abjads become alphabets", "writing precedes speech", "a language is not its script — one speech, two scripts"],
          answer: 3,
          explain: "One spoken core dresses in Devanagari and Nastaliq: clothing, not body.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none. The Japanese writing, Hindi, Arabic, Korean and Russian lessons each open one system in depth; this lesson is the map that files them. Follow with the historical-linguistics lesson to see how scripts ride — and sometimes outlive — the families that carry them.",
      },
    ],
  },
]

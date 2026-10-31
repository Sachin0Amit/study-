/**
 * Knowledge Universe — German — Chapter 01: German Foundations
 * 3 lessons · ~4,379 words
 * field: German
 * legacy sources: languages-literature.ts, x59-library-org-pass.ts, x61-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [German Foundations]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 lang-german-foundations — German Foundations: Cases, Word Order and Cognates
 *   01.2 lang-german-adjective-endings — German Adjective Endings: The Table That Runs the Noun Phrase
 *   01.3 lang-german-word-formation — German Word Formation: Compounds, Prefixes and the Vocabulary Engine
 */
import type { KnowledgeTopic } from '../../types'

export const germanCh01: KnowledgeTopic[] = [
  {
    id: "lang-german-foundations",
    title: "German Foundations: Cases, Word Order and Cognates",
    domain: "Languages & World Literature",
    field: "German",
    branch: "German Foundations",
    tier: "core",
    concepts: [
      "Pronunciation you can trust",
      "Gender: der, die, das",
      "Four cases on the articles",
      "Verb-second word order",
      "Verb-final subordinate clauses",
      "Cognates and false friends",
    ],
    words: 1270,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Open a German newspaper and meet the family: Haus, Wasser, Mutter, Buch, trinken — English and German descend from the same Germanic ancestor, so hundreds of words sit side by side wearing slightly different clothes. The grammar that frightens beginners is largely English grammar before it wore smooth: Old English carried cases too, and German still wears them openly. Learn the four cases, the verb-second rule and a page of pronunciation laws, and German stops being a wall of capitalised Nouns and becomes the most approachable major language an English speaker can study.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "German has the most native speakers in the European Union and remains a working language of science, engineering and philosophy. For English speakers it offers the biggest cognate harvest of any major language, while its cases and word order teach — better than any textbook — how inflection can carry the meaning that English assigns to position.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "German spelling keeps its promises. The famous clusters have fixed values: ei sounds like the “i” of “ice” (nein, mein); ie like “ee” (vier, Bier); eu and äu like “oy” (heute, Häuser). Of the consonants, w is English v (Wasser), v is f (Vater), z is “ts” (Zeit), sch is “sh”, j is English y (ja), and ß is simply a sharp double s (Straße). The umlauts pull vowels forward: ü is “ee” said with lips rounded for “oo” — the same trick as the French u — while ö rounds an “eh”. The ch after a, o and u is a throaty rasp (Buch); after i and e, a hiss (ich).",
      },
      {
        kind: "para",
        text: "Every noun is der (masculine), die (feminine) or das (neuter), and the article is the handle you actually use — so learn nouns with their article from the first day, never bare. Gender is grammatical, not natural: das Mädchen, “the girl”, is neuter, because the suffix -chen makes any noun neuter. The suffixes are your friends: -ung, -heit, -keit, -schaft and -tion are reliably feminine (die Zeitung, die Freiheit); -chen and -lein are neuter. Plurals are less tidy than in Spanish or Italian — umlauts, -e, -er, -en or -s, chosen noun by noun — but the plural article is always die.",
      },
      {
        kind: "para",
        text: "Four cases mark who does what to whom, and they ride on the articles: nominative for subjects, accusative for direct objects, dative for indirect objects, genitive for possession. In Der Mann gibt dem Kind das Buch — “the man gives the child the book” — dem marks the recipient and das the thing given; because endings carry the roles, the phrases can be shuffled for emphasis and the sentence survives. Only the masculine article changes between nominative and accusative (der → den); dative and genitive demand memorisation, and dative plurals add an -n (mit den Kindern).",
      },
      { kind: "list", items: [
        "Nominative: der Mann, die Frau, das Kind — subjects.",
        "Accusative: den Mann, die Frau, das Kind — direct objects.",
        "Dative: dem Mann, der Frau, dem Kind — recipients; den Kindern in the plural.",
        "Genitive: des Mannes, der Frau, des Kindes — possession, “of the man”.",
      ] },
      {
        kind: "para",
        text: "German main clauses are verb-second. The finite verb claims the second slot no matter what opens the sentence: Heute regnet es, “today it rains”; Morgen fahre ich nach Berlin, “tomorrow travel I to Berlin”. Time phrases, places and even objects can be fronted for emphasis — but whichever element leads, the verb stays second and the subject slides to third. English speakers must practise this actively, because their instinct puts the subject first; behind the verb, the middlefield follows tendencies like time before manner before place.",
      },
      {
        kind: "para",
        text: "Subordinators — weil (because), dass (that), wenn (if, when) — change the grammar: the finite verb drops to the very end. Ich weiß, dass er morgen kommt is literally “I know that he tomorrow comes”. Infinitives and past participles also collect at the end (Ich möchte ein Buch kaufen, “I want to buy a book”), so a German sentence often delays its resolution like a suspense novel. Fluent German is largely the management of these two orders: verb-second in main clauses, verb-final in subordinate ones.",
      },
      {
        kind: "para",
        text: "The cognate harvest is enormous: Hand, Land, Wasser, Apfel, Vater, Haus, trinken, schlafen. But harvest carefully — the false friends bite. Also means “so, thus”, not “also”; bekommen means “get, receive” (Ich bekomme ein Geschenk, “I receive a present”); Gift means poison; brav means well-behaved; Chef means boss. Germans capitalise every noun, which at least makes the traps easy to spot.",
      },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: assemble — in correct German order — “Tomorrow my sister gives her friend a watch”, then embed the same statement under dass.",
        "Recall the governing ideas: verb-second in the main clause; dative for the recipient (ihrem Freund), accusative for the thing given (eine Uhr); a time phrase may lead.",
        "Apply it: front the time phrase — Morgen; the verb takes slot two — schenkt; subject third — meine Schwester; then dative before accusative — ihrem Freund eine Uhr.",
        "State the result: “Morgen schenkt meine Schwester ihrem Freund eine Uhr.” Embedded: “Ich freue mich, dass meine Schwester ihrem Freund morgen eine Uhr schenkt” — the verb now falls to the very end.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Business and science in the EU’s largest economy: German is the most widely spoken native language of Europe.",
        "The academic tradition: psychology, physics and philosophy were written in German for two centuries.",
        "Cognate-powered vocabulary growth: thousands of transparent relatives bring reading speed early.",
        "Music and literature: lieder, Goethe, Kafka and Mann in the original.",
        "Grammar transfer: German cases train the reflexes that Russian, Latin and Greek will later demand.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "The first trap is treating German as English with capital nouns: the word order is engineered, and ignoring verb-second marks a speaker instantly. The second is guessing gender from meaning — das Mädchen breaks the rule that seems obvious. Third, forgetting the dative plural -n (mit den Kindern, not mit die Kinder). Fourth, trusting false friends — ordering confidently with bekommen and praising the Gift. And keep the vowels honest: ei is not “ee”, however tired you are.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "grammatical gender", def: "The der/die/das classification of every German noun, signalled by its article." },
        { term: "case", def: "An ending-set marking a noun phrase’s role — nominative, accusative, dative or genitive." },
        { term: "verb-second (V2)", def: "The main-clause rule that the finite verb occupies the second position, whatever leads." },
        { term: "subordinate clause", def: "A clause introduced by weil, dass, wenn and their kin, where the verb falls to the end." },
        { term: "umlaut", def: "The fronted, rounded vowels ä, ö and ü, and the diacritic that writes them." },
        { term: "false friend", def: "A look-alike word with a different meaning, like bekommen, “receive”." },
        { term: "cognate", def: "A word shared by descent, like Haus and house." },
      ] },
      { kind: "heading", text: "Check Yourself" },
      { kind: "quiz", items: [
        {
          q: "In “Heute gehe ich ins Kino”, why does ich come after gehe?",
          options: ["German has no subject pronouns", "The verb-second rule puts the finite verb in slot two, pushing the subject to third", "gehe is a question form", "ich is the object here"],
          answer: 1,
          explain: "Whatever opens the clause — here heute — the finite verb claims the second position and the subject follows.",
        },
        {
          q: "In “Der Mann gibt dem Kind das Buch”, dem Kind is…",
          options: ["the subject", "the direct object", "the dative recipient of the book", "a possessive"],
          answer: 2,
          explain: "Dem marks dative — the child receives; das Buch is the accusative thing given.",
        },
        {
          q: "“Ich bekomme ein Geschenk” means…",
          options: ["I become a present", "I receive a present", "I bring a present", "I buy a present"],
          answer: 1,
          explain: "Bekommen is the classic false friend: it means get or receive, not become.",
        },
        {
          q: "Das Mädchen, “the girl”, is grammatically…",
          options: ["feminine, naturally", "masculine by the -chen rule", "neuter, because -chen makes nouns neuter", "plural"],
          answer: 2,
          explain: "Suffix beats meaning: -chen and -lein are always neuter — gender is grammatical, not natural.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none — this is the first German lesson. Follow with present-tense conjugation and adjective endings, which extend the case system you just met. The Spanish and French foundations lessons sit beside this one; for a second case-marking language, continue to the Russian foundations lesson in this section.",
      },
    ],
  },
  {
    id: 'lang-german-adjective-endings',
    title: 'German Adjective Endings: The Table That Runs the Noun Phrase',
    domain: 'Languages & World Literature',
    field: 'German',
    branch: 'German Foundations',
    tier: 'core',
    concepts: [
      'attributive versus predicative: only attributive adjectives inflect',
      'the weak (der-word) endings: -e and -en carry everything',
      'the mixed (ein-word) endings and the compensation principle',
      'the three cells where ein hides the case, so the adjective must show it',
      'the strong (no-determiner) declension',
      'the plural dative -n that never forgives',
      'learning the pattern, not the 48-cell grid',
    ],
    words: 1377,
    readMins: 7,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book gave you the case system on the ARTICLES — der, die, das marching through nominative, accusative, dative and genitive — and its study path promised one follow-up: adjective endings, which extend that case system to the words between article and noun. This lesson is that promise, and it is the step that separates beginners who can order coffee from intermediates who can build sentences. The good news, stated up front: German adjective declension looks like a 48-cell monster but is governed by ONE principle with a short exception list. Learners who internalize the principle decline correctly in forms they have never seen; learners who memorize the grid always look it up.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Adjective endings are the single most visible grammar marker in written German — get them wrong and every sentence announces itself. Get them right and cases, gender and number are all signalled redundantly, which is precisely what makes German readable despite its flexible word order. Certificate-level speaking and writing tests check this table, in effect, every time an adjective appears.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'First the scope rule, which halves the problem before it starts: German adjectives inflect ONLY when they stand BEFORE their noun (attributive position). A predicate adjective — after sein or werden — takes no ending at all: Der Mann ist groß, die Kinder werden müde. Compare the attributive form in der große Mann, die müden Kinder. Everything that follows concerns only the attributive case. Note also the word order rule: the adjective sits between determiner and noun, and its ending attaches to the ADJECTIVE, not the noun — das neue Auto, never anything else.',
      },
      {
        kind: 'para',
        text: 'The core system is the WEAK declension, and its job description is simple: when the determiner (der, die, das, dieser, jener, jeder, welcher...) already SHOWS case-gender-number clearly, the adjective relaxes. The weak endings are just two: -e or -en. Nominative singular (all three genders) and accusative singular feminine/neuter take -e; everything else — accusative masculine, ALL dative, ALL genitive, and every plural — takes -en. Read a column: der gute Mann, den guten Mann, dem guten Mann, des guten Mannes; die gute Frau, die gute Frau, der guten Frau, der guten Frau; das gute Kind, das gute Kind, dem guten Kind, des guten Kindes. The article does the case work; the adjective just echoes -e or -en. That is the whole weak table, and it covers most real sentences.',
      },
      {
        kind: 'para',
        text: 'The MIXED declension (after ein-words: ein, kein, mein, dein, sein, ihr, unser...) exists because ein is a deficient show-off: it displays its case ending in some cells and hides it in exactly THREE. Ein in nominative masculine (ein Mann) and nominative/accusative neuter (ein Kind) looks identical — you cannot tell from the article alone whether the phrase is masculine or neuter, nominative or accusative. So the adjective takes over the article\'s job: STRONG endings in precisely those three cells. The compensation principle: the adjective carries whichever ending the determiner failed to show. Everywhere else the mixed table is the weak table: ein guter Mann (nom. masc., article hid it), einen guten Mann (acc. masc. — einen shows -en, adjective relaxes to weak), ein gutes Kind (nom./acc. neut., article hid it), eine gute Frau (article shows it), einem guten Kind (dative shows it). Three cells to remember beyond weak — that is the entire difference between the two tables.',
      },
      {
        kind: 'para',
        text: 'With NO determiner at all — after zero-article phrases like guter Wein, frisches Wasser, or plurals in general statements — the adjective must do everything alone: the STRONG declension, whose endings mirror the definite-article paradigm: guter Wein, guten Weins? (genitive: guten Weines), gutem Wein; große Städte, großer Städte, großen Städten. The strong table is the article table reborn on the adjective. And one rule rides above all three tables: in the DATIVE PLURAL, the NOUN adds -n wherever it can (mit guten Freunden, den kleinen Kindern) — the plural dative -n is German\'s most reliable marker and the most commonly forgotten.',
      },
      {
        kind: 'para',
        text: 'How to actually learn it: never drill 48 cells. Learn (1) the weak two-ending system — the default; (2) the compensation principle; (3) the three deficient ein-cells (nom. masc. -er, nom./acc. neut. -es); (4) the zero-article strong table as "the article endings, moved"; (5) the plural dative -n. Practise by reading aloud with attention — der alte Baum, einen alten Baum, einem alten Baum — until the echo pattern is auditory rather than visual. The classic production errors all follow from skipping the principle: -en everywhere (overcorrection), -e everywhere (undercorrection), forgetting that mein/sein are ein-words (mein guter Freund — masculine nominative hides), and attaching endings to nouns instead of adjectives.',
      },
      {
        kind: 'para',
        text: 'Two refinements complete the picture. Comparatives and superlatives inflect like any adjective: der größere Wagen, ein größeres Auto, am größten (predicative — no ending). And fixed phrases preserve older strong forms worth knowing on sight: mit guter Laune, durch dick und dünn. Neither changes the system; both reward the learner who treats endings as pattern, not exception.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'The weak system',
        latex: '-e \\text{ (nom. sg. all; acc. sg. f/n)} \\quad | \\quad -en \\text{ (everything else)}',
        meaning: 'After a showing determiner, the adjective needs only these two endings — the base camp for the whole table.',
      },
      {
        kind: 'formula',
        name: 'The compensation principle',
        latex: '\\text{ending shown} = \\text{(determiner\'s job)} - \\text{(what the determiner hides)}',
        meaning: 'The adjective carries exactly the case-gender information the determiner fails to display — three cells after ein, all cells with no determiner.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: decline "neu" with "das Auto" through all four cases, then with "ein Auto".',
          'Das-words show everything → weak endings: das neue Auto (nom.), das neue Auto (acc.), dem neuen Auto (dat.), des neuen Autos (gen.).',
          'Ein-words hide nominative neuter → mixed: ein neues Auto (nom.), ein neues Auto (acc. — ein also hides acc. neut.), einem neuen Auto (dat. — article shows, adjective relaxes), eines neuen Autos (gen. — article shows).',
          'State the pattern: same word, same case system, endings shift only where the article went quiet. The learner who asks "what does the ARTICLE hide?" answers every cell without the grid.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Reading speed: instantly parsing case from endings unlocks German\'s flexible word order',
          'Graded proficiency writing tasks, where attributive endings are checked on every line',
          'Emails and applications in German-speaking workplaces: correct declension signals education',
          'Menu, signage and product-description parsing (ein kühles Bier, die beste Wahl)',
          'Aural comprehension: endings disambiguate who does what to whom when word order is poetic',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The -en-everywhere reflex fails exactly in the three ein-cells — ein guter Mann, not ein guten Mann. The -e-everywhere reflex fails in every dative and plural. Do not forget that possessives are ein-words (mein neues Handy), that predicate adjectives take NOTHING (die Suppe ist heiß), and that plural dative nouns take -n (mit alten Freunden). And resist the grid: every learner who memorizes cells instead of the principle re-memorizes them after every holiday.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Attributive adjective', def: 'One standing before its noun — the only kind that inflects.' },
          { term: 'Weak declension', def: 'The -e/-en system used after der-words that already show case and gender.' },
          { term: 'Mixed declension', def: 'Weak endings plus strong ones in the three cells where ein-words hide the case.' },
          { term: 'Strong declension', def: 'Full article-style endings on the adjective when no determiner stands before the noun.' },
          { term: 'Compensation principle', def: 'The adjective shows exactly what the determiner fails to show.' },
          { term: 'Plural dative -n', def: 'The obligatory -n on plural nouns in the dative — den alten Büchern.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Choose the correct form: "Ich kaufe ___ Fahrrad" (ein, neu):',
            options: [
              'ein neues Fahrrad',
              'einen neuen Fahrrad',
              'ein neuer Fahrrad',
              'einem neuen Fahrrad',
            ],
            answer: 0,
            explain: 'Fahrrad is neuter and accusative; ein hides the accusative neuter, so the adjective compensates with -es.',
          },
          {
            q: 'After der-words like dieser, the adjective endings are:',
            options: [
              'a different table for each gender',
              'just -e and -en: weak, because the determiner already shows everything',
              'always -er',
              'identical to the noun endings',
            ],
            answer: 1,
            explain: 'The weak system has exactly two endings — the determiner does the case work.',
          },
          {
            q: '"Mit ___ Freunden" (gut, plural) requires:',
            options: [
              'mit gute Freunden',
              'mit guten Freunden — and the noun takes dative plural -n',
              'mit guter Freunden',
              'mit gutes Freunden',
            ],
            answer: 1,
            explain: 'Dative plural: adjective -en plus the noun\'s -n — the most reliable and most forgotten marker.',
          },
          {
            q: '"Die Suppe ist heiß" shows that predicate adjectives:',
            options: [
              'take -e',
              'take no ending at all — only attributive adjectives inflect',
              'take -en',
              'become nouns',
            ],
            answer: 1,
            explain: 'Inflection happens only before the noun; after sein/werden the adjective stays bare.',
          },
        ],
      },
    ],
  },
  {
    id: 'lang-german-word-formation',
    title: 'German Word Formation: Compounds, Prefixes and the Vocabulary Engine',
    domain: 'Languages & World Literature',
    field: 'German',
    branch: 'German Foundations',
    tier: 'core' as const,
    concepts: [
      'Compounds and the head rule: reading right to left',
      'Fugen elements: the seams inside long words',
      'Prefixes as meaning-builders: be-, er-, ent-, ver-, zer-',
      'The stress pairs: UMfahren versus umFAHren',
      'Suffix families: what -ung, -schaft, -bar actually build',
      'The decompounding workflow: vocabulary as engineering',
    ],
    words: 1667,
    readMins: 8,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book taught you to carry every noun with its article and warned that the suffix predicts the gender; the verbs lesson taught the prefix machinery that moves participles around. This lesson teaches the machine that builds the words themselves. German does not primarily borrow or abbreviate its way to new vocabulary — it CONSTRUCTS words in public, from visible parts, and a learner who knows the construction rules reads words they have never seen. That is the difference between a 3,000-word vocabulary and an unlimited one: the machine, once learned, keeps minting words on demand.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'German compounds are the language\u2019s most visible feature and its most misunderstood. The legendary Donaudampfschifffahrtsgesellschaft is not a curiosity — it is the system running at full throttle, and headlines mint equivalents daily: Klimawandel, Rentenreform, Arbeitslosengeld. Learners who treat each long word as an entry to memorize carry a dictionary; learners who parse the parts carry a decoder. Word formation is also the highest-leverage reading skill for technical German, where half the terminology is compound-built and transparently translatable once the seams are found.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'German compounds obey the head rule: the RIGHTMOST element governs everything grammatical. The last noun fixes the compound\u2019s word class, its gender and its core meaning — der Schriftstellerroman is a novel (der Roman) about writers, not a writer; die Wörterbuchaktion is an action (die Aktion) involving dictionaries. Because the head sits at the right, German compounds are read right to left: start at the end, name the category, then accumulate modifiers backward. This is the exact mirror of English, which nests to the right (steam-shipping-company head-order differs), and it is why German sentence rhythm feels like the reveal coming first. Stress reinforces the structure: the primary accent lands on the FIRST element, so the language itself marks where the word begins its buildup.',
      },
      {
        kind: 'para',
        text: 'Between the parts sit the Fugen elements — the seams that make compounds pronounceable and sometimes semantically loaded: -s-, -es-, -en-, -n-, -(e)s. Das Arbeitsamt joins Arbeit + s + Amt; die Lebensmittel are life + s + means; die Straßenbahn rides street + en + track. But the seam is NOT predictable: der Geburtstag has no Fuge, das Geburtsdatum takes -s, and the same noun pairs differently with different partners — usage has fixed each combination, and dictionaries record the compound whole. Learners should treat Fugen as spelling fossils to recognize, not rules to generate: the parse is Arbeit|s|Amt, but the lookup key is Arbeitsamt. The famous compounding freedom remains real, however — German viewers laughed at the Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz (the beef-labeling supervision task delegation law) because it was legal prose, not because the machine had jammed: sixty-three letters of perfectly regular right-to-left parsing.',
      },
      {
        kind: 'para',
        text: 'The derivational prefixes are the second mint. The verbs lesson taught them as grammar — which take ge-, which separate; this lesson teaches them as MEANING. be- transitivizes or envelops: bestellen is to order (something), besuchen to visit, bebauen to build upon. er- marks achievement: erreichen is to reach, erlernen to learn to mastery, erfinden to invent (find out). ent- removes or undoes: entfernen take away, entdecken uncover (discover), entwickeln un-wind (develop). ver- transforms or goes wrong: verbessern improve, verändern change — but verlieren lose, verbrennen burn up, verlaufen get lost; ver- is the largest family and the most double-faced. zer- destroys: zerbrechen shatter, zerstören annihilate. miss- negates: missverstehen misunderstand. Learning a verb therefore means learning its family: stehen (stand) → verstehen (understand) → missverstehen (misunderstand) → aufstehen (get up) → and so on — one stem, a constellation of verbs, each prefix a shift in meaning you can now predict rather than memorize.',
      },
      {
        kind: 'para',
        text: 'The stress pairs are where prefix grammar and prefix meaning collide audibly. Adding a prefix can change which syllable carries the stress, and with it the word: UMfahren (stress on the prefix — separable) means to tip something over; umFAHren (stress on the stem — inseparable) means to run something over. The same accent split works through the language: DURCHbrechen (separable) is to break through; durchBRECHen (inseparable) is to refract, as light through a prism — one spelling, two verbs, separated by an accent. The verbs lesson owned the grammatical consequence — separable prefixes take ge- and fly to the bracket\u2019s end; inseparable ones weld shut. Here the lesson is lexical: the accent IS the word. Learners who drill the stress at the same moment they learn the verb never confuse the pair; learners who postpone stress learn two words that differ only where their ear is not listening.',
      },
      {
        kind: 'para',
        text: 'The suffix families build the word classes. Nouns from verbs: -ung nominalizes action (bedeuten → die Bedeutung, verordnen → die Verordnung — foundations lesson already flagged them as reliably feminine; the meaning here is the verbal noun), -er makes agents (lehren → der Lehrer, arbeiten → der Arbeiter), -nis makes results (das Ergebnis, die Kenntnis). Nouns from nouns: -schaft collects (das Wissen → die Wissenschaft, knowledge become science), -chen and -lein diminish (das Brötchen little bread, das Mädchen — foundations owned their neuter gender; the meaning is small/endearing). Adjectives: -bar marks possibility (essbar edible, lesbar legible), -ig and -lich mark characterful properties (windig, freundlich), -isch marks belonging or character (kindisch childlike with a sneer). Each suffix is a machine tool: recognize it and the dictionary entry you need is the STEM you already know, not the derived word staring at you from the page.',
      },
      {
        kind: 'para',
        text: 'The workflow is the payoff. Reading: parse right to left, find the head, strip the Fugen, split the stem from its prefix, then reconstruct. Lookup: search for the stem, not the compound — dictionaries list compounds under heads or not at all. Learning: build families, not lists — Wissen (knowledge) yields Wissenschaft, wissenschaftlich, Wissenschaftler in one branch; Zeit (time) yields Zeitung, zeitgenössisch, die Zeitungsanzeige. And borrow critically: modern German absorbs English through its own machinery — downloaden conjugates like a German verb, das Handy is a pseudo-anglicism (from "handy" the adjective, not the noun phone), der Beamer projects (English "beamer" means something else entirely). False friends live inside word formation too; the foundations lesson\u2019s borrowed-vocabulary warning extends here.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Parse Donaudampfschifffahrtsgesellschaft',
        steps: [
          'Find the head (rightmost): Gesellschaft — society/company, feminine, die. The whole word is a company of some kind.',
          'Strip left: schifffahrt = Schifffahrt (shipping, itself Schiff + Fahrt); before it dampf = Dampf (steam); before that Donau = Danube.',
          'Reconstruct right to left: company of shipping, powered by steam, on the Danube — the Danube Steam Navigation Company, the 1829 enterprise that made the word famous.',
          'Generalize: the same four moves parse Arbeitslosengeld (unemployment benefit: arbeits + los + Geld — money for being without work), Klimawandel (climate change) and tomorrow\u2019s headline coinage; the head rule told you the category in one second.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Newspaper reading: headline vocabulary is compound-heavy and minted daily; the parser converts unknown headlines into known parts without a dictionary.',
        'Technical German: engineering, legal and medical prose stack compounds four deep; decompounding is the core reading skill for Fachsprache.',
        'Vocabulary efficiency: learning stems plus the prefix/suffix machinery multiplies coverage — one stem yields a family, not one entry.',
        'Exams and certificates: Goethe-Zertifikat and DSD reading sections reward candidates who parse compounds rather than skip them.',
        'Translation and localization: compound splitting is the first step of German-to-anything machine translation — and the skill that lets you check the machine\u2019s work.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, assuming Fugen are predictable: Arbeit+s+amt is regular, Geburtstag has no seam — each compound\u2019s spelling is conventional, and the dictionary is the referee. Second, reading compounds left to right like English: the head is at the RIGHT, and the meaning can invert (Holzhaus is a wood house, but Hausboot is a boat that is a house — boot is head). Third, treating ver- as one meaning: it transforms some verbs and ruins others; the family must be learned per stem. Fourth, ignoring stress: UMfahren and umFAHren are different words, and mis-stressing produces confusion your partner will politely translate wrong. Fifth, over-trusting transparency: a compound\u2019s parts suggest, but idiomatic drift is real — Handschuh is "hand shoe" for glove, and the semantic leap from parts to whole must sometimes simply be learned.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Kompositum', def: 'A compound word built from independent stems; the rightmost stem is the head that fixes class, gender and meaning.' },
        { term: 'Fugenelement', def: 'The linking element (-s-, -en-, -n-, -(e)s) between compound parts — conventional, not predictable.' },
        { term: 'Head rule', def: 'The principle that compound grammar and core meaning live in the final element; read right to left.' },
        { term: 'Derivational prefix', def: 'A meaning-building prefix (be-, er-, ent-, ver-, zer-, miss-) that turns one stem into a family of verbs.' },
        { term: '-ung nominalization', def: 'The verb-to-noun suffix producing reliably feminine action nouns: bedeuten → die Bedeutung.' },
        { term: 'Stress pair', def: 'Words distinguished only by accent placement: UMfahren (tip over, separable) versus umFAHren (run over, inseparable).' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'What determines the gender of a German compound like das Wörterbuch?',
          options: ['The first element (Wörter)', 'The head — the last element (Buch, neuter)', 'The Fugen element', 'The word\u2019s length'],
          answer: 1,
          explain: 'The head rule: the rightmost stem governs gender, class and core meaning — das Wörterbuch is a kind of Buch.',
        },
        {
          q: 'UMfahren and umFAHren differ in meaning because…',
          options: ['one is plural', 'stress placement selects the separable or inseparable reading — tip over versus run over', 'they come from different stems', 'one is Swiss usage'],
          answer: 1,
          explain: 'The accent IS the word: stressed prefix pairs with the separable verb, stressed stem with the inseparable — one spelling, two verbs.',
        },
        {
          q: 'entdecken (discover) belongs to which prefix family by MEANING?',
          options: ['destruction (zer-)', 'removal or uncovering (ent-)', 'achievement (er-)', 'negation (miss-)'],
          answer: 1,
          explain: 'ent- strips or undoes: entdecken uncovers, entfernen removes, entwickeln unwinds — the discovery sense is "de-covering".',
        },
        {
          q: 'die Bedeutung is formed how?',
          options: ['-er agent from bedeuten', '-ung verbal noun from bedeuten — an action made into a noun', 'compound with die Deutung only', 'borrowed from Latin'],
          answer: 1,
          explain: '-ung nominalizes the verb bedeuten (to mean); the foundations lesson\u2019s gender rule (-ung → feminine) applies to every word the machine builds this way.',
        },
      ] },
    ],
  },
]

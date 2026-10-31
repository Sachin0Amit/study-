/**
 * Knowledge Universe — French — Chapter 01: French Foundations
 * 1 lesson · ~1,340 words
 * field: French
 * legacy sources: languages-literature.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [French Foundations]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 lang-french-foundations — French Foundations: Pronunciation, Articles and First Phrases
 */
import type { KnowledgeTopic } from '../../types'

export const frenchCh01: KnowledgeTopic[] = [
  {
    id: 'lang-french-foundations',
    title: 'French Foundations: Pronunciation, Articles and First Phrases',
    domain: 'Languages & World Literature',
    field: 'French',
    branch: 'French Foundations',
    tier: 'core',
    concepts: [
      'The sound world: pure vowels and nasals',
      'Silent finals, liaison and elision',
      'Gender and the article system',
      'être and avoir: the first two verbs',
      'tu, vous and the bonjour ritual',
      'Survival phrases for the first week',
    ],
    words: 1340,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'French looks intimidating on the page and is mostly rules in disguise. Final consonants usually fall silent — petit sounds like “puh-tee” — and three vowels travel through the nose: the endings of bon, vin and un are pure nasal sounds with no n pronounced at all. Add one gender system, two verbs, and a politeness register, and the first week of French is genuinely survivable. Bonus for anyone who has wrestled Spanish: where Spanish splits “to be” into ser and estar, French collapsed the pair into a single verb — the hardest choice in Romance grammar simply does not exist.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'French is spoken natively on five continents, works as an official language of the UN, the EU and the African Union, and supplied roughly a third of English vocabulary. That last fact makes it the highest-yield second language for English speakers: gouvernement, bibliothèque and animal are already in your head, waiting only for pronunciation rules to unlock them. Learn the sound system once and thousands of words arrive free.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Keep French vowels pure and tense: never let café glide into “kay-ay”. The nasal vowels have no English equivalent — an (as in the first syllable of “an encore” minus the n), on (rounded, like “song” without the ng), in/un (fronted and tight) — made by sending the vowel through the nose while the tongue stays in vowel position. The French r is a soft gargle at the back of the mouth. And u differs from ou by lip-shape alone: say “ee” with lips rounded as for “oo” — that is tu; tout is plain “too”.',
      },
      {
        kind: 'para',
        text: 'Final consonants are usually silent, with a short list of usually-pronounced exceptions — c, r, f, l, memorised as CaReFuL. Liaison revives a silent consonant before a vowel: les amis runs together as “lay-zah-mee”, vous avez as “voo-zah-vay”. Elision shrinks je and la before vowels — j\'aime, l\'ami — and the h of l\'hôtel is silent, which is why it elides. Adopt these two habits and spoken French stops sounding like one long unbreakable word.',
      },
      {
        kind: 'para',
        text: 'Every French noun is masculine or feminine, and the article is its handle: le livre, la table, les livres, with the plural -s heard only through liaison. Gender is not reliably predictable from meaning — la moustache is a feminine moustache, le problème a masculine problem — so learn each noun with its article, never bare, and the problem dissolves. Some pairs genuinely contrast: un tour is a stroll, une tour a tower; un mode is a mode, une mode a fashion.',
      },
      {
        kind: 'para',
        text: 'Two verbs do most of the load-bearing. être, to be: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont. avoir, to have: j\'ai, tu as, il a, nous avons, vous avez, ils ont. Both are irregular — learn them as chants, not tables. The pronoun set is je, tu, il, elle, on (the everyday “we”), nous, vous, ils, elles; identity runs through c\'est — “c\'est Marie” — and possession through de: le livre de Marie. With these two verbs you can already say who you are, what you have and how you feel.',
      },
      {
        kind: 'para',
        text: 'Politeness runs on one choice and one ritual. Vous is the formal and plural “you”; tu is intimate. Default to vous with strangers, shopkeepers and elders, and accept the invitation “on peut se tutoyer” when it comes. The ritual is bonjour: entering a shop or arriving at a counter without it reads as genuinely rude in France, while with it, almost anything is forgivable. Bonsoir replaces it in the evening; merci, s\'il vous plaît and excusez-moi oil every exchange.',
      },
      {
        kind: 'para',
        text: 'The survival kit: bonjour, merci, s\'il vous plaît, au revoir. Je m\'appelle... introduces you, with enchanté as the reply. Je voudrais un café, s\'il vous plaît orders; l\'addition, s\'il vous plaît closes the meal. Où est la gare? asks the way; combien ça coûte? asks the price. Je ne parle pas français — parlez-vous anglais? buys honesty and help, and je ne comprends pas, répétez s\'il vous plaît repairs the line when it breaks.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: order breakfast politely in a Paris café, entirely in French, and understand what comes back.',
        'Recall the governing ideas: bonjour opens; je voudrais + article + noun orders; un and une must match gender; s\'il vous plaît closes the request; tunes rise on questions.',
        'Apply: enter with “Bonjour!”; order “Je voudrais un café au lait et un croissant, s\'il vous plaît” — checking that un, not une, agrees with masculine croissant; the server\'s rising-tune “Autre chose ?” is audible as a question before the words are parsed; close with “Non, merci — l\'addition, s\'il vous plaît”.',
        'State the result: the whole exchange ran on greeting, voudrais, article agreement and please/thank-you — the four moves of first-week French, with liaison in s\'il and silent finals in croissant doing their quiet work.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Travel: greetings, ordering and asking prices cover cafés, stations and hotels in every French-speaking country.',
        'Menus: quiche, croissant, café au lait, hors d\'oeuvre — English borrowed the vocabulary already; pronunciation is the only new skill.',
        'Etiquette: bonjour on entry and merci on exit is the French social contract; visitors who keep it are forgiven nearly everything else.',
        'Cognate harvest: government, restaurant, important, animal — a third of English vocabulary turns out to be French with an accent.',
        'Media: films, chansons and slow-news broadcasts (RFI, for example) turn passive vocabulary into listening comprehension within weeks.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The classic English accent keeps three habits: letting vowels glide (a pure “eh” in café, never “ay-ee”), pronouncing final consonants (petit ends in “tee”), and skipping the nasals by saying a real n (bon is one nasalised sound, not “bon-n”). Grammar-wise, the durable error is learning nouns bare and guessing gender later — always memorise le or la with the word. And mind the registers: tutoyer a stranger or a functionary reads as presumptuous; vous is never wrong.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'nasal vowel', def: 'A vowel produced with airflow through the nose, as in bon, vin and un — no n consonant is pronounced.' },
        { term: 'liaison', def: 'Sounding a normally silent final consonant before a following vowel, as in les amis.' },
        { term: 'elision', def: 'Dropping a final vowel before another vowel, marked by an apostrophe: je + aime → j\'aime.' },
        { term: 'grammatical gender', def: 'The classification of every French noun as masculine or feminine, signalled by its article.' },
        { term: 'article', def: 'The little word that carries gender and number: le, la, les, un, une, des.' },
        { term: 'politeness register', def: 'The tu versus vous choice that indexes social distance and formality.' },
        { term: 'cognate', def: 'A word shared between languages by descent or borrowing, like government and gouvernement.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The nasal vowel at the end of bon is produced by…',
          options: ['pronouncing a clear n after the vowel', 'sending the vowel through the nose with no n consonant', 'rounding the lips alone', 'raising the tongue to the palate'],
          answer: 1,
          explain: 'The vowel itself is nasalised; the letter n signals the nasal quality and is never released as a consonant.',
        },
        {
          q: 'Les amis is pronounced with a z sound because of…',
          options: ['elision', 'liaison — the silent s sounds before a vowel', 'the uvular r', 'plural -s being pronounced everywhere'],
          answer: 1,
          explain: 'Liaison revives the silent final consonant when the next word begins with a vowel.',
        },
        {
          q: 'The correct way to order one croissant is…',
          options: ['une croissant', 'un croissant', 'des croissant', 'la croissant'],
          answer: 1,
          explain: 'Croissant is masculine, and the article must agree — the reason nouns are always learned with their articles.',
        },
        {
          q: 'Spanish has ser and estar; French…',
          options: ['uses être for both — one verb covers essence and state', 'splits them into être and avoir', 'keeps three copulas', 'uses estar for states only'],
          answer: 0,
          explain: 'French collapsed the Latin pair into a single être, removing the choice that defines early Spanish.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is the first French lesson. Follow with present-tense conjugation (-er verbs run on one template), then adjective agreement. The ser versus estar lesson in this section explains what French collapsed; ten minutes of daily slow-French listening tunes the nasals faster than any table can.',
      },
    ],
  },
]

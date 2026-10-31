/**
 * Knowledge Universe — Ancient & Early Modern History — Chapter 01: The Ancient World
 * 2 lessons · ~2,347 words
 * field: World History
 * legacy sources: humanities.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [The Ancient World]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 hist-first-civilizations — The First Civilizations: Mesopotamia, Egypt and the Indus
 *   01.2 hist-classical-greco-roman — Greece and Rome: The Classical Inheritance
 */
import type { KnowledgeTopic } from '../../types'

export const ancientEarlyModernHistoryCh01: KnowledgeTopic[] = [
  {
    id: 'hist-first-civilizations',
    title: 'The First Civilizations: Mesopotamia, Egypt and the Indus',
    domain: 'Humanities',
    field: 'World History',
    branch: 'The Ancient World',
    tier: 'core',
    concepts: [
      'Cities, surplus and the first states',
      'Cuneiform: writing born in the account office',
      'Hammurabi and the rule of published law',
      'Egypt: stability along the Nile',
      'The Indus enigma: cities without kings?',
      'What the word civilization hides',
    ],
    words: 1177,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Between roughly 3500 and 3000 BCE, along a handful of great rivers, humans crossed a threshold: villages grew into cities, kinship yielded to states, and memory hardened into writing. In the plain between the Tigris and Euphrates, along the dependable Nile, and in the Indus valley, the first civilisations invented nearly everything organised society requires — law, literacy, taxation, planned streets, monumental building — and left evidence that archaeologists still argue over. This lesson surveys the three founding experiments and meets the standing mystery of the set: a civilisation whose writing nobody can read.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The first states invented the toolkit every later society used: the account book, the law code, the tax, the planned city and the monument. When a modern government publishes legislation, audits grain stocks or grids a new suburb, it runs Mesopotamian and Egyptian software. And the Indus reminds us how much of history depends on one fragile technology — readable writing — that can simply refuse to yield.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Uruk, in southern Mesopotamia, held perhaps forty thousand people by around 3200 BCE — a concentration unknown since farming began. Irrigation canals turned dry plain into grain surplus, and surplus freed specialists: priests, scribes, smiths, soldiers. Temples became the first great institutions, measuring, storing and redistributing the harvest, and around them social hierarchy hardened into something new: a state able to command labour beyond the family.',
      },
      {
        kind: 'para',
        text: 'Writing began as bookkeeping. Clay tokens sealed in envelopes evolved, by about 3200 BCE, into signs pressed into clay tablets: so many measures of barley, so many jars of oil, so many sheep. Cuneiform — wedge-shaped script — climbed from accounts to contracts to hymns and king lists, and by around 2100 BCE scribes were copying the Epic of Gilgamesh, humanity\'s oldest surviving epic. The tablet-rooms of temple and palace were the first archives; the scribe was the first bureaucrat.',
      },
      {
        kind: 'para',
        text: 'Around 1754 BCE, King Hammurabi of Babylon had 282 laws carved on a black diorite stele and set up in public: tariffs, wages, marriage, theft, professional negligence. The code is remembered for lex talionis — an eye for an eye — though penalties slid by rank, an aristocrat\'s eye costing more than a commoner\'s. The principle mattered more than the fairness: law published in advance, claiming authority over everyone who could see the stone.',
      },
      {
        kind: 'para',
        text: 'Egypt\'s gift was predictability. The Nile flooded on schedule, and a state that measured, stored and redistributed its grain could run the same system for three millennia. Upper and Lower Egypt unified around 3100 BCE under the first pharaohs; the Great Pyramid of Khufu (c. 2560 BCE) stacked some 2.3 million blocks to 146 metres and remained the tallest structure on Earth until 1311 CE. Hieroglyphs served administration and eternity alike until Champollion deciphered them with the Rosetta Stone, announced in 1822.',
      },
      {
        kind: 'para',
        text: 'The Indus, or Harappan, civilisation — mature phase 2600 to 1900 BCE — built Mohenjo-daro and Harappa with grid-planned streets, covered drains, standardised bricks and uniform weights, and apparently without royal tombs, palace reliefs or boastful inscriptions. Its script, preserved in short seal inscriptions, remains undeciphered, so its politics are pure inference. Around 1900 BCE the cities emptied, most likely as monsoon-fed rivers shifted and agriculture collapsed; the unreadable script is the discipline\'s standing frustration.',
      },
      {
        kind: 'para',
        text: 'Historians now handle the word civilisation with tongs: it implies a ladder with some societies on the upper rungs. The checklist version — cities, writing, states, monuments — was assembled from these cases, then misused as a ranking. The same package appeared independently in China and Mesoamerica on different timetables, and each river society traded with, borrowed from and eventually yielded to neighbours the centres dismissed as barbarians. "First" here means first preserved, not first in value.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: how can historians claim the Indus cities were centrally organised when nobody can read their script?',
        'Recall the method: archaeological inference — reading organisation from material standardisation rather than from texts.',
        'Apply it: uniform brick ratios imply a regulating authority; uniform weights imply enforced trade standards; city-wide drainage implies public works beyond any single household\'s means; the street grid implies planning before building.',
        'State the result: organisation is inferred from standardisation itself — the same method used for every pre-literate society, and the honest limit of what can be claimed about Harappan politics.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Museum policy: the Hammurabi stele, excavated in 1901 and displayed in the Louvre, anchors restitution debates over who owns ancient heritage.',
        'Water politics: modern dam and irrigation disputes on the Tigris and Euphrates replay the control problems of the first states.',
        'Decipherment research: computational studies now attack undeciphered scripts, testing whether pattern alone can break a language.',
        'Sanitation planning: Mohenjo-daro\'s covered drains still appear in comparisons of urban infrastructure across South Asian cities.',
        'Heritage protection: Mesopotamian and Indus sites face looting, dam flooding and climate stress, making site documentation a race.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not picture a relay race of progress with one baton: the three societies were contemporaries in contact, and the Indus traded with both Mesopotamia and the Gulf. Avoid reading later empires backwards — pyramid-age Egypt was not imperial Egypt. The word civilisation itself ranks where it should describe, and the checklist defining it was reverse-engineered from these very cases. Above all, resist imagining answers for the Indus: every claim about its government is inference, and honest writing says so.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'cuneiform', def: 'Wedge-shaped script pressed into wet clay, developed in Mesopotamia from accounting signs by about 3200 BCE.' },
        { term: 'ziggurat', def: 'Mesopotamian stepped temple platform, the administrative and religious centre of the city.' },
        { term: 'Hammurabi\'s Code', def: '282 laws publicly displayed at Babylon, c. 1754 BCE — an early claim of general, published law.' },
        { term: 'lex talionis', def: 'Retaliation in kind, "an eye for an eye", governing parts of Hammurabi\'s penalties.' },
        { term: 'pharaoh', def: 'Egyptian king, guarantor of cosmic and Nile order; the office unified Egypt around 3100 BCE.' },
        { term: 'hieroglyphs', def: 'Egyptian script, deciphered by Champollion in 1822 using the trilingual Rosetta Stone.' },
        { term: 'Harappan civilisation', def: 'Indus-valley urban culture, 2600-1900 BCE, with planned cities and an undeciphered script.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'The earliest cuneiform tablets record mostly…',
          options: ['religious hymns', 'accounts: barley, oil, sheep', 'astronomical omens', 'king lists'],
          answer: 1,
          explain: 'Writing grew from temple bookkeeping; literature such as Gilgamesh came centuries later.',
        },
        {
          q: 'The Great Pyramid of Khufu ceased to be the tallest structure on Earth in…',
          options: ['antiquity, to the Colossus of Rhodes', '1311 CE, to Lincoln Cathedral\'s spire', '1889, to the Eiffel Tower', 'never — it still is'],
          answer: 1,
          explain: 'Lincoln Cathedral\'s completed spire finally exceeded the pyramid\'s 146 metres in 1311.',
        },
        {
          q: 'Why are Harappan politics known only by inference?',
          options: ['their cities were burned and records destroyed', 'their script remains undeciphered', 'they left no cities to study', 'their records are all in Sumerian'],
          answer: 1,
          explain: 'Short seal inscriptions survive but resist decipherment, so political claims rest on archaeology alone.',
        },
        {
          q: 'The historical significance of Hammurabi\'s stele lies chiefly in…',
          options: ['being the oldest writing on Earth', 'publishing law publicly, in advance, claiming general authority', 'abolishing class distinctions in law', 'ending retaliation in kind'],
          answer: 1,
          explain: 'The innovation was general, visible, published law — however unequal its penalties by rank.',
        },
      ] },
    ],
  },
  {
    id: 'hist-classical-greco-roman',
    title: 'Greece and Rome: The Classical Inheritance',
    domain: 'Humanities',
    field: 'World History',
    branch: 'The Ancient World',
    tier: 'core',
    concepts: [
      'The polis: a city of citizens',
      'Athenian democracy in practice',
      'The Roman Republic and its collapse',
      'Philosophy as civic activity',
      'An empire of law, roads and citizenship',
      'The fall of the west, the survival of the inheritance',
    ],
    words: 1170,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Between the eighth century BCE and the fifth century CE, the Mediterranean basin ran a two-part experiment in self-government that the modern world still raids for parts. The Greek city-state invented citizenship and the democratic assembly; Rome scaled the idea into a republic, then an empire governing tens of millions. Their institutions, arguments, art and law became the classical inheritance — a vocabulary of political possibility revived at the Renaissance, the Enlightenment and every constitutional convention since. This lesson follows the arc from the Athenian assembly to the fall of the western empire, and asks why the inheritance outlived the collapse.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Senates, republics, vetoes, juries, vetting of power by term limits — the operating vocabulary of modern government is Greek and Roman salvage. When founders in Philadelphia or Paris wanted arguments against kings, they cited Athens and Rome; when critics wanted warnings against mob or Caesar, they cited the same cities. The classical past is less a period than a permanently consulted precedent.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A polis was not just a city but a community of citizens who made its laws in person. The Greek world held over a thousand such states, each with a few thousand citizens and its own calendar, cults and coinage. From them emerged a fierce ideal: that free men govern themselves by persuasion in assembly and law court rather than by a king\'s decree — and colonists spread the model from Spain to the Black Sea.',
      },
      {
        kind: 'para',
        text: 'After the tyrants fell, Cleisthenes\' reforms of 508 BCE rebuilt Athens as a democracy: an assembly open to all citizens, a Council of 500 chosen by lot, and juries of hundreds, paid for service. Selection by lottery — sortition — was democracy\'s signature, elections being judged aristocratic. The franchise excluded women, enslaved people and resident foreigners, and an assembly majority voted to execute Socrates: it was direct, noisy and unapologetically narrow.',
      },
      {
        kind: 'para',
        text: 'Rome expelled its kings in 509 BCE and built a republic — SPQR, the senate and people — with annually elected consuls, a published law code (the Twelve Tables, c. 451 BCE) and offices designed so that no man could rule alone. Conquest then broke the balance: commanders such as Caesar held armies loyal to themselves, and after his assassination in 44 BCE his heir won the civil wars and, as Augustus from 27 BCE, ruled as emperor in all but name.',
      },
      {
        kind: 'para',
        text: 'Greek philosophy was civic combat, not a seminar. Socrates cross-examined Athenians in the agora until the city executed him for impiety in 399 BCE; Plato founded the Academy; Aristotle tutored Alexander. Later schools — Stoic, Epicurean, Skeptic — taught ordinary people how to live and die. The arguments themselves have their own lessons in this Library; what matters here is the stage: a public square that made thinking dangerous.',
      },
      {
        kind: 'para',
        text: 'The emperors governed through engineering and law as much as through legions. Some 400,000 kilometres of road stitched the provinces together; aqueducts watered the cities; Roman law, codified under Justinian in the 530s CE, became the ancestor of most European legal systems. In 212 CE Caracalla extended citizenship to nearly all free inhabitants, and Virgil\'s Latin slowly dissolved into the Romance languages while Greek carried the empire\'s eastern half.',
      },
      {
        kind: 'para',
        text: 'The west fell not in a day but in a century: Rome was sacked in 410, the last western emperor deposed in 476, tax base and legions withering together. Yet the inheritance walked away from the wreck. The Byzantine east endured to 1453; the Church kept Latin literacy alive; Islamic scholars translated and debated Aristotle; and the word "republic" returned to power in the eighteenth century. "Fall" and "transformation" remain rival names for the same evidence.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: why do political theorists call sortition, rather than elections, the most democratic device the Athenians used?',
        'Recall the governing idea: elections select the distinguished and well-funded; the lot gives every eligible citizen an equal chance — which is what demokratia, people-power, names.',
        'Apply it: Athens filled its Council of 500 and its large juries by lot and paid for service so the poor could attend; generals and treasurers, needing skill, were elected — the modern dilemma reversed.',
        'State the result: modern systems elect nearly everything, Athens lotted nearly everything; "democracy" has named different machines in different centuries, and the choice is live again in citizens\' assemblies.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Constitutional design: separation of powers, vetoes and term limits descend from Roman fear of concentrated office.',
        'Citizens\' assemblies: Ireland, France and others now use randomly selected panels — sortition revived — for contested questions such as abortion and climate policy.',
        'Legal systems: civil codes from France to Latin America descend from Justinian\'s sixth-century compilation of Roman law.',
        'Vocabulary: senate, republic, politics, tyrant and democracy itself are Greek and Latin loans still structuring political speech.',
        'Heritage disputes: the Parthenon marbles controversy turns on what modern states owe the classical heritage they hold.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not Greek-read the Romans or Roman-read the Greeks: Athens was a direct democracy of a few thousand; Rome an aristocratic republic that distrusted democracy. Avoid golden-age pictures — both societies ran on enslaved labour and both collapsed into civil war more than once. The "fall" of 476 is a bookkeeping date; the east ran another thousand years. And keep philosophy in context here: this lesson gives the political stage on which Socrates died — the arguments themselves are separate lessons.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'polis', def: 'The Greek city-state: a community of citizens legislating in person.' },
        { term: 'sortition', def: 'Selection of officials by random lot, the Athenian signature of democracy.' },
        { term: 'Cleisthenes (508 BCE)', def: 'The reformer whose tribal reorganisation founded Athenian democracy.' },
        { term: 'SPQR', def: 'Senatus Populusque Romanus — "the senate and people of Rome", the republic\'s name for itself.' },
        { term: 'Twelve Tables', def: 'Rome\'s first written law code, c. 451 BCE, displayed publicly.' },
        { term: 'Augustus', def: 'Octavian after 27 BCE; first emperor, holding supreme power under republican forms.' },
        { term: 'Byzantine Empire', def: 'The eastern Roman empire, surviving until the fall of Constantinople in 1453.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'In the Athenian view, elections were…',
          options: ['the essence of democracy', 'aristocratic, favouring the notable and well-funded', 'reserved for juries alone', 'a Persian import'],
          answer: 1,
          explain: 'Sortition was the democratic device; elections were seen as selecting the distinguished few.',
        },
        {
          q: 'The Roman Republic gave way to empire chiefly because…',
          options: ['the Twelve Tables were lost', 'commanders gained armies more loyal to themselves than to the state', 'Athens invaded Italy', 'the senate abolished the consulship'],
          answer: 1,
          explain: 'Career generals with private loyalty from their troops — Caesar above all — outmatched republican institutions.',
        },
        {
          q: 'The year 476 CE conventionally marks…',
          options: ['the fall of Constantinople', 'the deposition of the last western Roman emperor', 'the founding of the Byzantine empire', 'Caracalla\'s citizenship edict'],
          answer: 1,
          explain: 'Odoacer deposed Romulus Augustulus; the eastern empire continued until 1453.',
        },
        {
          q: 'Justinian\'s codification of Roman law matters today because…',
          options: ['it abolished slavery', 'it is the ancestor of most continental European legal systems', 'it was the first written law anywhere', 'it created the papacy'],
          answer: 1,
          explain: 'The Corpus Juris Civilis (529-534 CE) was received by medieval and modern Europe as the model of a civil code.',
        },
      ] },
    ],
  },
]

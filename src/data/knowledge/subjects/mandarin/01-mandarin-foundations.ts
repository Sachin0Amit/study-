/**
 * Knowledge Universe — Mandarin Chinese — Chapter 01: Mandarin Foundations
 * 3 lessons · ~4,833 words
 * field: Mandarin Chinese
 * legacy sources: languages-literature.ts, x59-library-org-pass.ts, x61-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Mandarin Foundations]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 lang-mandarin-foundations — Mandarin Foundations: Tones, Characters and First Phrases
 *   01.2 lang-mandarin-writing-strokes — Writing Chinese: Stroke Order, Radical Lookup and Character Memory
 *   01.3 lang-mandarin-topolects — Mandarin’s Family: Topolects, Putonghua and the Standard
 */
import type { KnowledgeTopic } from '../../types'

export const mandarinCh01: KnowledgeTopic[] = [
  {
    id: 'lang-mandarin-foundations',
    title: 'Mandarin Foundations: Tones, Characters and First Phrases',
    domain: 'Languages & World Literature',
    field: 'Mandarin Chinese',
    branch: 'Mandarin Foundations',
    tier: 'core',
    concepts: [
      'Four tones and a neutral one',
      'Pinyin: read the rules, not the letters',
      'Radicals: the meaning inside characters',
      'Phonetic components: sound hints in the square',
      'Simplified versus traditional scripts',
      'Compounding and the first phrases',
    ],
    words: 1343,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Mandarin looks uncrackable from outside — an alphabet-free wall of squares — but it opens with three keys. First, tones: every syllable carries one of four pitch shapes, and the shape is part of the word. Second, characters: they are not pictures but assemblies, built from a few hundred recurring parts, most hinting at meaning or sound. Third, pinyin: the romanisation on every sign, keyboard and textbook — read by rules, never by English instincts. One lesson cannot teach Mandarin, but it can teach you how the system is put together, which changes everything about learning it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Mandarin has more native speakers than any other language, and its difficulty is front-loaded: the first month is steeper than Spanish\'s and the fifth year flatter. Knowing the architecture — tones as part of words, characters as component assemblies, pinyin as a tool rather than a spelling — replaces intimidation with a map. Learners who drill tone pairs aloud from day one and learn characters through components consistently outpace those who memorise strokes and hope.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Every full Mandarin syllable carries a tone: mā, high and level; má, rising; mǎ, dipping; mà, falling — mother, hemp, horse, scold. Unstressed syllables take a light neutral tone, as in the second half of xièxie, thanks. Tones are not emotion and not optional: to a native listener, mà is as distant from mā as “bat” is from “pat”. The Tonal Languages lesson in this section treats the phonology in depth; for foundations, the work is minimal pairs spoken aloud — má against mǎ — until the pitch shapes attach themselves to words.',
      },
      {
        kind: 'para',
        text: 'Pinyin looks like English and is not. Its letters obey Mandarin rules: q is a soft “ch” (qī, seven), x a whispery “sh” (xǐ, wash), c is “ts” (cài, vegetable), zh a richer “j”. The vowel of shi, si and ci is a buzzed retroflex nothing like the i of “see”. Aspiration is flipped: p, t and k are puffy with breath, while b, d and g are plain. The diacritics carry the tones — mā má mǎ mà — so a syllable\'s melody is written into its spelling. Master these rules once, or every word you read aloud will be wrong in a predictable way.',
      },
      {
        kind: 'para',
        text: 'Characters assemble from components, and the most meaningful one is called the radical. 氵 marks water: hǎi 海, sea; xǐ 洗, wash; lèi 泪, tears. 木 is wood and trees; 口 is mouth — eat, drink, call; 心 is heart — feeling, memory, thinking. Roughly two hundred radicals organise the dictionary and chunk the 3,000-plus characters of genuine literacy into families. Nobody memorises three thousand arbitrary symbols; learners read wholes the way you read “unbelievably” — as assembled parts.',
      },
      {
        kind: 'para',
        text: 'Most characters — perhaps four in five — are phono-semantic compounds: one component hints at meaning, another at sound. 妈 mā, mother, is 女, woman (meaning), plus 马 mǎ, horse (sound). 青 qīng helps spell 清 qīng, clear water, 请 qǐng, request, and 情 qíng, feeling. The hints are weather forecasts, not guarantees — sounds drifted across centuries and dialects — but they cut the memorisation load enormously. Character logic is exactly this: meaning part plus sound part, guessed before confirmed.',
      },
      {
        kind: 'para',
        text: 'One language, two scripts. The simplified characters used in mainland China and Singapore were standardised in the 1950s and 60s to speed literacy: 爱 drops strokes from 愛, 门 from 門. Taiwan, Hong Kong, Macau and many overseas communities keep traditional forms. Readers of one recognise much of the other; writers must commit to a target. Choose by where you will use the language, and check which script a textbook, app or dictionary uses before buying it.',
      },
      {
        kind: 'para',
        text: 'Mandarin builds words by compounding, transparently: 电 diàn, electricity, plus 脑 nǎo, brain, gives 电脑, computer; 电话 is “electric speech”, a telephone; 火车 is “fire vehicle”, a train. Each morpheme keeps its meaning across words, so vocabulary compounds — learn fifty characters and hundreds of words unlock. First phrases run on the same logic: nǐ hǎo 你好, “you good”, hello; xièxie 谢谢, thanks; duìbuqǐ 对不起, sorry; wǒ jiào... 我叫, “I am called”; duōshao qián? 多少钱, how much; wǒ bù míngbái 我不明白, I do not understand.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: given 电 diàn, “electricity”, the radical 火, “fire”, and 话 huà, “speech”, infer the meanings of 电话, 火车 and 电灯.',
        'Recall the governing ideas: characters compound meaning with meaning, and most real words are two-character compounds of stable morphemes.',
        'Apply: 电话 = diàn + huà = “electric speech” → telephone. 火车 = huǒ + chē = “fire vehicle” → train, named for steam. 灯 dēng pairs the fire radical with a sound component and means lamp, so 电灯 is an electric lamp — and 电脑, “electric brain”, confirms the pattern.',
        'State the result: five characters and one radical produced five real words — the arithmetic that makes Mandarin vocabulary accelerate instead of accumulate.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Travel: signage, station names and menus are bilingual with pinyin, so reading rules plus survival phrases carry a trip.',
        'Typing: every phone keyboard converts typed pinyin into characters, so writing Mandarin is choosing among candidates, not drawing strokes.',
        'Study paths: the HSK proficiency exams sequence characters and vocabulary by level, and graded readers pace the climb to real texts.',
        'Business: name cards, script choice and simplified-versus-traditional materials are regional decisions with real stakes.',
        'Heritage learning: background speakers often read well but type better — pinyin fluency is their bridge back into the characters.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Reading pinyin as English is the first and worst error — “xiè” is not “zee” and “qī” is not “key”. The second is treating tones as decoration to add later: fossilised toneless Mandarin is the hardest accent to repair. Third, memorising characters stroke by stroke instead of as component assemblies — the difference between three thousand passwords and two hundred puzzle pieces. Fourth, buying materials in the wrong script for your target region. And remember that pinyin is a learning and typing tool, not the language: fluency lives in characters and ears.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'tone', def: 'A pitch pattern stored as part of a word\'s identity; Mandarin has four tones plus a neutral one.' },
        { term: 'pinyin', def: 'The standard romanisation of Mandarin — rule-governed, but never to be read with English letter values.' },
        { term: 'radical', def: 'The meaning-bearing component of a character, used to organise dictionaries: 氵 water, 口 mouth.' },
        { term: 'phono-semantic compound', def: 'A character combining a meaning component with a sound-hinting component, like 妈 mā, mother.' },
        { term: 'simplified characters', def: 'The stroke-reduced standard script of mainland China and Singapore, introduced from the 1950s.' },
        { term: 'traditional characters', def: 'The older full-stroke script retained in Taiwan, Hong Kong, Macau and many diaspora communities.' },
        { term: 'compounding', def: 'Word-formation by joining morphemes — Mandarin\'s main strategy, as in 电 + 话, “electric speech”.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In pinyin, the letter q represents a sound closest to…',
          options: ['k', 'a soft “ch”', 'kw', 'a guttural r'],
          answer: 1,
          explain: 'qī, “seven”, begins like “chee”; pinyin letters follow Mandarin rules, not English values.',
        },
        {
          q: 'The 氵 component in 海 (sea) and 洗 (wash) is a…',
          options: ['tone marker', 'radical signalling water', 'phonetic hint for the sound hǎi', 'purely decorative flourish'],
          answer: 1,
          explain: 'Radicals carry the meaning family — water in this case — and organise dictionaries around it.',
        },
        {
          q: 'Mandarin builds most of its vocabulary by…',
          options: ['inflecting verbs for tense', 'compounding morphemes, as in 电 + 话, telephone', 'borrowing from English', 'adding plural endings'],
          answer: 1,
          explain: 'Stable morphemes compound into transparent words: electricity plus speech gives telephone.',
        },
        {
          q: 'The four tones of Mandarin are best described as…',
          options: ['four emotional registers', 'four pitch patterns stored as part of each word', 'four regional accents', 'optional melody added by poets'],
          answer: 1,
          explain: 'Tone is lexical, not expressive: mā, má, mǎ and mà are four different words to a native ear.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is the first Mandarin lesson. Follow with the Tonal Languages lesson for the phonology of tone, then character study proper: the two to three thousand characters of real literacy, learned through components and spaced repetition. Drill tone pairs aloud from the first day; the ear will not learn what the mouth never attempts.',
      },
    ],
  },
  {
    id: 'lang-mandarin-writing-strokes',
    title: 'Writing Chinese: Stroke Order, Radical Lookup and Character Memory',
    domain: 'Languages & World Literature',
    field: 'Mandarin Chinese',
    branch: 'Mandarin Foundations',
    tier: 'core',
    concepts: [
      'the eight basic strokes and Yong\'s eight principles',
      'the seven stroke-order rules and why they hold',
      'the 214 Kangxi radicals as a lookup system',
      'Xu Shen\'s six categories (六书) of character formation',
      'one-to-many traps in simplified/traditional conversion',
      'component simplification patterns (言→讠, 金→钅)',
      'the component-story method for memory',
    ],
    words: 1650,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book explained what characters ARE — tones above, phono-semantic logic inside, radicals carrying meaning, and the simplified-versus-traditional choice. This lesson teaches the craft those facts presuppose: how to WRITE a character so it is legible and findable, how to LOOK UP an unfamiliar one, and how to REMEMBER thousands of them without drowning. The skills are distinct from recognition: a learner can read 五 hundred characters and still freeze when asked to write 中文 by hand, because writing recruits stroke sequence, proportion and muscle memory that the eye alone never builds. Handwriting still matters — exam halls, forms, and every input method built on components quietly assume it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Stroke order is not pedantry: it determines whether handwriting is readable, whether character-recognition software accepts your input, and how fast you can find a character in a paper dictionary. Component awareness is the difference between memorizing 3,000 arbitrary drawings and combining 200 reusable parts — the load difference between four years and a lifetime.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Characters decompose into strokes, and the strokes are a small closed set. Calligraphy canonized the essential eight through the character 永 (yǒng, "forever"), which contains one of each — the "eight principles of Yong": dot (点), horizontal (横), vertical (竖), hook (钩), rising (提), left-falling (撇), short left-falling, and right-falling (捺); modern standards count eight basic stroke types including the turning stroke (折). Every one of the tens of thousands of characters is a SEQUENCE of these strokes — and the count is itself information: stroke count indexes dictionaries, grades school spelling lists, and separates 手 (4 strokes) from 我 (7). Writing is motor learning: the sequence, drilled until automatic, is what makes handwriting fast, and a character written in the wrong order looks wrong to literate eyes even when each stroke lands correctly.',
      },
      {
        kind: 'para',
        text: 'The order follows rules, and the rules are few. (1) Top before bottom: 三 writes its three horizontals downward. (2) Left before right: 你, 川. (3) Horizontal before vertical: 十 crosses its horizontal first. (4) Outside before inside: 月 boxes its frame before filling. (5) But close the frame LAST: 日 draws left wall, top-and-right turn, the inner horizontal, then the bottom seal. (6) Centre before symmetric wings: 小 takes the central hook first. (7) For the ambidextrous edge cases, the standard sequence is fixed by convention and worth memorizing per-character (为 is the famous offender). The rules exist because they minimize the hand\'s travel and ambiguity — the same reasons cursive traditions arrived at them a millennium earlier — and because every Chinese schoolchild learns the same sequence, making handwriting mutually predictable: shorthand, forms and recognition software all ride on the convention.',
      },
      {
        kind: 'para',
        text: 'Lookup: the radical is the index. Chinese dictionaries organize the character stock under 214 traditional section heads — the Kangxi radicals (the count is from the 1716 dictionary; modern lists vary slightly) — the 氵water family, the 心 heart family, the 手 hand family. To find an unknown character: identify the radical (usually the semantic component, often on the left or top), count ITS strokes (氵 = 3), locate that section of the index, then count the REMAINING strokes (海: minus 氵, seven more) and scan that sub-list. The foundations lesson introduced radicals as meaning clues; here they are a filing system — the reason a character you have never met is findable in under a minute. Digital input methods inherit the logic: radical-based and component-based keyboard schemes type by structure, and handwriting recognition on phones grades your strokes against the standard sequence.',
      },
      {
        kind: 'para',
        text: 'The classical taxonomy of character formation comes from Xu Shen\'s Shuowen Jiezi (c. 100 CE) — the six categories (六书). Pictographs (象形) draw the thing: 日 sun, 月 moon, 山 mountain. Indicatives (指事) mark abstractions: 上 and 下 place a stroke above or below a reference line; 本 adds a stroke at a tree\'s root (木) to mean "root/origin". Compound ideograms (会意) fuse meanings: 休 is a person (人) beside a tree (木) — resting; 从 is one person following another; 森 stacks three trees into "forest". Phono-semantic compounds (形声) pair a meaning component with a sound component — the foundations lesson\'s "four in five" category; fresh examples: 想 (xiǎng, think) = 相 (xiāng, sound) over 心 (heart, meaning); 河 (hé, river) = 氵(water) plus 可 (kě, sound). The last two categories — 转注 and 假借 — concern characters borrowed for homophones (来 lái was a wheat pictogram before it meant "come") and matter to historians more than learners. The practical upshot: over 80% of the writing system is phono-semantic, so the ear gets a hint AND the eye gets a category — two hooks per character, not one.',
      },
      {
        kind: 'para',
        text: 'Simplified and traditional scripts (the choice the foundations lesson explained) hide one-to-MANY traps for writers. Several traditional characters collapse into one simplified form: 发 covers both 發 (emit) and 髮 (hair); 后 covers both 後 (behind) and 后 (empress); 干 covers 乾 (dry), 幹 (trunk) and 干 (shield). Going traditional, then, is a translation task needing context — a dictionary with character history, or careful checking — not a symbol swap. Simplification also follows systematic component patterns worth learning once: 言 becomes 讠 (说话 → 说话), 金 becomes 钅 (银 → 银), 糸 becomes 纟 (红 → 红), 門 becomes 门. Learn the component correspondences and thousands of characters convert at a stroke — the difference between "two scripts" and "one script, two typefaces with attitude".',
      },
      {
        kind: 'para',
        text: 'Memory: the component-story method. Instead of copying a character fifty times (rote copies fade within days), decompose it into components and bind them with a vivid scene: 想 "think" is "a HEART (心) looking at one another with the EYE (目) under a TREE (木)" — a little drama the hand can re-run. Bind the sound with the same scene where the phonetic helps (xiǎng ≈ 相 xiāng). Then schedule the reviews: the spacing effect is the study-skills book\'s territory — the application here is that a character reviewed at expanding intervals in BOTH directions (meaning→writing, form→reading) consolidates in a fraction of the total pen time of blind copying. Writing BY HAND during practice recruits stroke-order motor memory that typing never builds — the production skill stays production, not recognition.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Dictionary lookup path',
        latex: '\\text{radical} \\rightarrow \\text{radical strokes} \\rightarrow \\text{section} \\rightarrow \\text{remaining strokes} \\rightarrow \\text{entry}',
        meaning: 'The two-number address (radical strokes + remaining strokes) finds any character in the 214-radical system.',
      },
      {
        kind: 'formula',
        name: 'Memory load',
        latex: '3{,}000 \\text{ characters} \\;\\approx\\; 214 \\text{ radicals} + 100 \\text{ phonetic families}',
        meaning: 'Component analysis converts thousands of arbitrary drawings into a couple hundred reusable parts.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: write and look up 想 (xiǎng, "to think").',
          'Analyze: top component 相 (xiāng — itself 木 + 目, left before right) provides the sound; bottom component 心 (heart) provides the meaning.',
          'Write in sequence: 木 first (horizontal, vertical, left-falling, right-falling... within its own order), then 目 (frame rules: left wall, top-right turn, fill, close bottom), then 心 (dot, hook, dots — centre before wings).',
          'Look up: radical 心 (4 strokes) → remaining strokes 9 (13 total minus 4) → the 4-stroke radical section, 9-stroke sublist → 想.',
          'Memorize: "the heart watches the trees and thinks of home" — one scene binds shape, sound and sense.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'School dictation practice (听写) across the Chinese-speaking world drills exactly this craft',
          'Component-based and handwriting input methods on phones ride on stroke-order conventions',
          'Paper dictionary navigation — still the offline skill exams and travel quietly assume',
          'Calligraphy as living practice: the eight principles are its first lesson',
          'Graded vocabulary lists for proficiency certificates, ordered partly by stroke count',
          'Deciphering shop signs and place names from radicals when pinyin is absent',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not learn characters as pure pictures — without components, 3,000 characters are 3,000 debts; with them, an inventory. Do not ignore stroke order: it breaks lookup, handwriting recognition and legibility all at once. Do not mix scripts in one text — simplified 发 has two traditional ancestors, so converting casually manufactures errors. And do not substitute typing for writing practice entirely: recognition without production is a half-skill that collapses the first time a form demands your signature character.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Stroke (笔画)', def: 'One pen movement; eight basic types compose every character.' },
          { term: 'Stroke order', def: 'The conventional sequence of strokes — top-to-bottom, left-to-right, frames closed last.' },
          { term: 'Kangxi radicals', def: 'The 214 traditional section heads under which dictionaries file characters.' },
          { term: 'Six categories (六书)', def: 'Xu Shen\'s classical classification: pictographs, indicatives, compound ideograms, phono-semantic compounds, and two borrow categories.' },
          { term: 'Phono-semantic compound (形声)', def: 'Meaning component plus sound component — the majority pattern of the writing system.' },
          { term: 'Component story', def: 'A mnemonic scene binding a character\'s components to its meaning and sound.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The character 日 writes its frame in the order:',
            options: [
              'all four walls, then the middle',
              'left wall, top-right turn, inner horizontal, then the bottom stroke closes the frame',
              'middle stroke first, then walls',
              'any order, since the result looks identical',
            ],
            answer: 1,
            explain: 'Outside-before-inside with closure LAST — rule 4 plus rule 5 — and the sequence matters for speed, legibility and recognition software.',
          },
          {
            q: 'To look up 海 in a radical-organized dictionary you:',
            options: [
              'count all strokes and browse alphabetically',
              'find the 氵 radical (3 strokes), then the 7-stroke remainder under that section',
              'trace the pinyin hǎi only',
              'count the dots',
            ],
            answer: 1,
            explain: 'The two-number address — radical strokes then remaining strokes — is the paper dictionary\'s filing system.',
          },
          {
            q: '想 (think) is a phono-semantic compound in which:',
            options: [
              '心 provides the sound and 相 the meaning',
              '相 (xiāng) hints the sound and 心 (heart) carries the meaning',
              'both parts are purely decorative',
              'the character is a pictograph of a head',
            ],
            answer: 1,
            explain: 'The pattern is sound-top, meaning-bottom — the "four in five" formation from the foundations lesson, here with fresh components.',
          },
          {
            q: 'Converting simplified 发 back to traditional is tricky because:',
            options: [
              'no traditional form exists',
              'it maps to two different characters — 發 (emit) or 髮 (hair) — needing context to choose',
              'it is only used in names',
              'the conversion is always 發',
            ],
            answer: 1,
            explain: 'Simplification merged distinct characters; the reverse direction is context-dependent translation, not symbol substitution.',
          },
        ],
      },
    ],
  },
  {
    id: 'lang-mandarin-topolects',
    title: 'Mandarin\u2019s Family: Topolects, Putonghua and the Standard',
    domain: 'Languages & World Literature',
    field: 'Mandarin Chinese',
    branch: 'Mandarin Foundations',
    tier: 'core' as const,
    concepts: [
      'One family, many voices: the Sinitic map',
      'Mutually unintelligible "dialects": the Romance-language yardstick',
      'What unites them: the shared script and the shared canon',
      'From guānhuā to Guoyu to Putonghua: building a standard',
      'The 1956 definition and the promotion machinery',
      'The living landscape and the learner\u2019s choice',
    ],
    words: 1840,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The foundations lesson of this book taught the tones and pinyin of one standard; the grammar lesson taught its particles; the canon lesson recited its classical lines. This lesson zooms out to the family that standard sits inside — and the story of how one spoken variety was deliberately engineered into a national standard over the twentieth century. "Chinese" is not one spoken language with accents. It is a family of related varieties, several of them as different from each other as French from Italian, sharing a script, a classical canon and a name — and the relationship between the standard you are learning and the languages spoken in Guangzhou or Xiamen is the first thing any honest course should explain.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The variety question is where learner expectations meet reality. A Putonghua speaker landing in Hong Kong or rural Fujian will understand nothing spoken around them — yet can read every street sign. A heritage learner of Cantonese finds Mandarin tones transfer imperfectly. Media, emigration and family history all route through particular members of the family, not through the abstract "Chinese" of course catalogs. Knowing the map turns confusion into navigation: which variety to learn for which purpose, what transfers between them, and why the standard itself is a century-old political achievement rather than a neutral default.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The family map runs roughly like this. The Mandarin group — 官话 guānhuā, literally "officials\u2019 speech" — covers the north, the southwest and well over half the population of China proper; Beijing speech belongs here, and so do the varieties of Sichuan and Nanjing. To the south and east live the great non-Mandarin groups: Wu (吴语, Shanghainese and the Yangtze delta, tens of millions of speakers), Yue (粤语, Cantonese of Guangzhou and Hong Kong), Min (闽语, Hokkien, Teochew and Fuzhou varieties of Fujian and Taiwan — often split into subgroups as different from each other as Spanish from Portuguese), Hakka (客家话, the migrants\u2019 language scattered across the south and the diaspora), Xiang (Hunan) and Gan (Jiangxi). Linguists count seven to ten top-level groups depending on how the boundaries are drawn; each holds varieties a speaker of another group cannot follow by ear.',
      },
      {
        kind: 'para',
        text: 'The word "dialect" misleads badly here, and sociolinguists prefer "topolect" — a calque of 方言 fāngyán, "regional speech" — precisely to escape the European image of a dialect as a farmers\u2019 variant of one standard. Beijing speech and Cantonese are not variants of one spoken language: their sound systems, vocabularies and grammars diverged over roughly two millennia, and mutual intelligibility between a Beijing and a Guangzhou speaker is near zero — linguists\u2019 standard comparison is the distance between Spanish and Italian, or French and Romanian, languages that get separate names and separate dictionaries. The Chinese case keeps one name because ONE thing is genuinely shared: the writing system. The characters are read by every literate member of the family, each in their own spoken variety — the same newspaper pronounced entirely differently in Beijing, Shanghai and Hong Kong, yet understood identically on the page.',
      },
      {
        kind: 'para',
        text: 'That shared script — plus the classical written language, which stayed uniform while speech diverged — is the historical glue. But spoken unity was a modern project. Imperial officials used a koiné based on northern speech (the guānhuā of the name), but it reached a thin elite. The twentieth century rebuilt it as national policy: the Republic proclaimed a Guoyu (国语, "national language") standard in the 1910s-20s, fixed by 1932 on Beijing pronunciation; the People\u2019s Republic renamed and redefined it as Putonghua (普通话, "common speech") in 1955-56, with the definition still quoted today: Beijing pronunciation as the standard sound, the northern dialects as the base dialect, and model modern vernacular writing (the báihuà of the May Fourth generation) as the grammatical norm. Hanyu Pinyin, the romanization this book\u2019s foundations lesson taught, was promulgated in 1958 as the standard\u2019s teaching alphabet. Taiwan kept the name Guoyu for the same Beijing-based standard; Singapore and much of the overseas diaspora call it Huayu (华语).',
      },
      {
        kind: 'para',
        text: 'The 1956 definition repays a close read, because it is a compromise written into a sentence. Beijing pronunciation as the SOUND — but northern dialects as the BASE: the vocabulary and grammar draw on the wider Mandarin family, not on Beijing street talk, which is why the standard\u2019s word for "he" is tā wherever northerners say it, and why Beijing\u2019s own rhotacized flavor — erhua, the 儿 ending in huār, ménr — marks a Beijinger inside the standard rather than being required by it. The promotion machinery followed: Putonghua became the school medium nationwide, and the Putonghua Proficiency Test (普通话水平测试, PSC) grades speakers from 3C up to 1A on a 100-point scale — 1A (97 and above) is the broadcaster grade, and teaching credentials require roughly 2A or 2B depending on subject and region. Six decades of schooling plus the largest internal migration in history have made Putonghua the default public register of urban China: most young Chinese are diglossic, standard at school and work, topolect at home — the same home-standard split that defines Arabic\u2019s diglossia, transposed to a family with a unified script.',
      },
      {
        kind: 'para',
        text: 'The living landscape is uneven, and worth knowing without caricature. Cantonese retains extraordinary vitality through Hong Kong\u2019s media, cinema and pop music, and remains the daily language of Guangdong\u2019s streets; it also has its own written conventions for representing speech. Hokkien and Teochew survive robustly across Southeast Asia\u2019s diasporas. Shanghainese has thinned sharply among the young — children who understand Wu but answer in Putonghua are common — and sociolinguists now file several smaller varieties among the world\u2019s endangered languages, with UNESCO-style documentation projects running alongside official promotion of the standard. The state\u2019s position, formalized in language law, is both-and: Putonghua for national integration, topolects as cultural heritage to preserve. The honest summary is generational shift, not extinction: the family\u2019s diversity is contracting toward the standard faster in some cities than in others.',
      },
      {
        kind: 'para',
        text: 'For the learner, the map turns into decisions. Putonghua is the default: it opens the mainland, Taiwan (as Guoyu, with soft but real accent differences — and fewer erhua), and Singapore (as Huayu), and it is what every textbook, exam and app teaches. Cantonese is the right choice for Hong Kong, much of Guangdong family life and a century of cinema. Hokkien or Hakka may be the right choice for heritage reasons no market logic overrides. What transfers between members of the family is real but partial: character knowledge moves wholesale; the grammar of the standard\u2019s particles maps imperfectly (Cantonese\u2019s particle system is richer); tones do NOT transfer — a new tone system must be rebuilt from zero, and the Tonal Languages lesson\u2019s typology applies per variety. The practical protocol: learn one standard deeply, then treat the others as the related languages they are — cognate-rich, script-sharing, tonally foreign.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Route Three Cities to the Right Variety',
        steps: [
          'Chengdu (Sichuan): the local speech is Southwest Mandarin — inside the guānhuā family, so a Putonghua speaker follows much of it slowly and adapts in days; tone values differ, structure barely.',
          'Guangzhou (Guangdong): Yue territory — no mutual intelligibility with the standard; the learner must treat it as a new language that happens to share the script.',
          'Xiamen (Fujian): Min (Hokkien) — famously far even from other southern groups; Min subgroups like Hokkien and Fuzhounese strain mutual intelligibility among themselves.',
          'The routing rule: family membership predicts how much grammar and vocabulary transfer, but ONLY script and canon are guaranteed shared. Tone systems never transfer between top-level groups.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Travel and relocation: knowing which group a city belongs to predicts how far your Putonghua will carry — and whether a topolect phrasebook is worth packing.',
        'Media strategy: Cantonese cinema and Hong Kong news remain gateways to Yue; mainland streaming is Putonghua-first; heritage streaming serves Min and Hakka communities.',
        'Family heritage: diaspora families often speak a topolect at home — the heritage learner\u2019s first task is identifying WHICH member of the family the grandparents speak.',
        'Linguistics and teaching: the Sinitic family is the world\u2019s great natural experiment in tonogenesis and language standardization — every claim in a phonology course has a Chinese test case.',
        'Professional credentials: the PSC grading system (3C to 1A) gates broadcasting, teaching and interpretation careers inside China.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, calling Cantonese "a dialect of Mandarin": the dependency runs backward through the standard — both are sisters in the Sinitic family, and the "dialect" framing is political inheritance, not linguistic description. Second, assuming the standard is old: Putonghua as codified is younger than aviation; what is old is the script and the canon, not the sound system\u2019s official status. Third, believing character literacy implies speech comprehension across the family: a Shanghai reader navigates a Hong Kong newspaper and understands none of its spoken counterpart. Fourth, overstating Beijing\u2019s role: the definition takes Beijing PRONUNCIATION only; vocabulary and grammar are northern-family-wide, and native Beijing erhua is a local flavor the standard does not require. Fifth, treating topolects as doomed: shift is real, but Cantonese media, diaspora vitality and official heritage policy make "preservation versus promotion" a live negotiation, not a settled verdict.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Topolect', def: 'The calque of 方言 fāngyán preferred by linguists — a regional Sinitic variety, not a "dialect" of one standard.' },
        { term: 'Guānhuā (官话)', def: 'The Mandarin group — "officials\u2019 speech" — the northern and southwestern family that supplies the standard\u2019s base.' },
        { term: 'Putonghua (普通话)', def: 'The PRC standard: Beijing pronunciation, northern base, model vernacular grammar — defined 1955-56, taught nationwide since.' },
        { term: 'Guoyu / Huayu', def: 'Taiwan\u2019s and Singapore/diaspora names respectively for the same Beijing-based standard.' },
        { term: 'PSC', def: 'Putonghua Proficiency Test — the 100-point, six-grade credentialing system (3C to 1A) for broadcasters and teachers.' },
        { term: 'Erhua (儿化)', def: 'Beijing\u2019s rhotacized syllable endings — a local flavor inside the standard, not a requirement of it.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A Putonghua speaker hears everyday speech in Guangzhou. What should they expect?',
          options: ['Full understanding with accent adaptation', 'Near-zero spoken intelligibility — Yue is a different top-level group sharing the script', 'Understanding of grammar but not vocabulary', 'Understanding only of numbers'],
          answer: 1,
          explain: 'Yue and Mandarin diverged for millennia; the standard comparison is Spanish-versus-Italian distance. The script, not the speech, is shared.',
        },
        {
          q: 'The 1956 Putonghua definition takes what as the standard sound?',
          options: ['Nanjing pronunciation', 'Beijing pronunciation', 'An artificial compromise accent', 'Cantonese pronunciation'],
          answer: 1,
          explain: 'Beijing pronunciation is the sound; the NORTHERN DIALECTS are the vocabulary base; model modern vernacular writing is the grammar norm — three different sources in one sentence.',
        },
        {
          q: 'Why can a Cantonese and a Beijing reader share one newspaper?',
          options: ['They both speak Putonghua', 'The characters are read aloud in each reader\u2019s own variety while meaning stays constant', 'Newspapers are bilingual', 'Classical Chinese is universal'],
          answer: 1,
          explain: 'The script is morpheme-based, not sound-based: each literate member of the family voices the same text in their own speech — the family\u2019s true glue.',
        },
        {
          q: 'The PSC grade a national broadcaster must reach is…',
          options: ['3C', '2B', '1A (97+ points)', 'no grade is required'],
          answer: 2,
          explain: '1A is the broadcaster grade; teaching credentials typically require 2A/2B depending on subject and region — the standard enforced by credential, not by law alone.',
        },
      ] },
    ],
  },
]

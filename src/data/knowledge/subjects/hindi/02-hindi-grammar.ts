/**
 * Knowledge Universe — Hindi — Chapter 02: Hindi Grammar
 * 1 lesson · ~1,373 words
 * field: Hindi
 * legacy sources: x46-thin-books-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Hindi Grammar]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 lang-hindi-grammar-workshop — Hindi Grammar Workshop: Sandhi, Samas, Rasa and Alankar
 */
import type { KnowledgeTopic } from '../../types'

export const hindiCh02: KnowledgeTopic[] = [
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
]

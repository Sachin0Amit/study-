import type { KnowledgeTopic } from '../types'

/** Expansion pass X28 (2026-10-24): the language-skills and foundations sweep.
 *  After X27 closed the AP-Calculus and modern-China clusters, the exam-coverage
 *  audit stood at 99% (2406/2427) with one weak exam left (the Chinese national
 *  curriculum track at 87%, 9 unmapped) plus single orphan gaps in IELTS/TOEFL
 *  listening. Each candidate below was cross-checked against the dedup ledger,
 *  coverage.json and the field files before authoring:
 *  1. eng-academic-listening-comprehension — the five-stage listening process,
 *     gist/detail/inference question families, attitude & organization tracking,
 *     answer transcription discipline. Zero overlap: grep for 'listening' across
 *     all field files shows only passing mentions (input methods, French drills)
 *     — no lesson teaches listening itself.
 *  2. eng-seven-choice-gap-filling — restoring removed sentences via cohesion
 *     devices (reference, substitution/ellipsis, conjunction, lexical chains)
 *     and an elimination procedure. Zero overlap: eng-cohesion-lexical-accuracy
 *     (x16) teaches cohesion as a WRITING skill (band descriptors, editing);
 *     this lesson reads cohesion as a decoding tool for discourse reconstruction.
 *  3. eng-argumentative-practical-texts — argument anatomy (claim/reason/
 *     evidence, Toulmin frame), expository organization patterns, practical
 *     documents (news, reports, popular science), charts, multi-document
 *     comparison. Zero overlap: eng-verbal-reasoning-passage-claims teaches
 *     claim/assumption logic drills; eng-skimming-scanning teaches speed
 *     techniques; neither teaches text-structure patterns or practical-document
 *     reading (verified grep for 'pattern of organization', 'news report').
 *  4. math-sets-logic-foundations — roster/set-builder notation, subsets, Venn
 *     diagrams, union/intersection/complement, statements & quantifiers,
 *     conditionals and their variants, necessary/sufficient conditions, De
 *     Morgan's laws. Zero overlap: the only set-theory lesson in the Library is
 *     the Cantor/cardinality/infinity topic in mathematics.ts (grep 'set theory'
 *     hits diagonalization context only); no lesson teaches elementary sets or
 *     propositional logic terms.
 *  5. geo-regional-development-sustainability — regional analysis, resource
 *     exploitation and transformation, land management, environmental
 *     governance, resource security, GIS. Zero overlap: grep 'sustainab'/
 *     'regional' across fields shows no human-geography development lesson;
 *     env-climate-feedbacks-sensitivity is climate physics, econ-india- is
 *     India-specific economics.
 *  6. soc-culture-society-cultural-life — what culture is (material/
 *     nonmaterial), values-beliefs-norms-language-symbols, culture vs society,
 *     high/pop/sub/counter-culture, cultural change & exchange, heritage and
 *     innovation, ethnocentrism vs relativism, theoretical lenses. Zero overlap:
 *     arts-culture.ts teaches visual composition, harmony, film montage — no
 *     sociology-of-culture lesson exists (grep 'ethnocentr', 'cultural change').
 *  Sources read while writing (legally open):
 *  - LibreTexts, Communication in the Real World: An Introduction to
 *    Communication Studies, ch.5 'Listening' §5.1-5.2 (CC BY-NC-SA) — hearing
 *    versus listening, the five stages (receiving, interpreting, recalling,
 *    evaluating, responding), environmental vs psychological noise, schemata,
 *    Hargie's recall statistics (half forgotten immediately, 35% after eight
 *    hours, 20% after a day).
 *  - OpenStax, Contemporary Mathematics (openstax.org, CC BY-NC-SA) — ch.1
 *    'Sets' (1.1 Basic Set Concepts, 1.2 Subsets, 1.3 Venn Diagrams, 1.4 Set
 *    Operations with Two Sets, 1.5 Set Operations with Three Sets) and ch.2
 *    'Logic' (2.1 Statements and Quantifiers, 2.2 Compound Statements, 2.3-2.4
 *    Truth Tables, 2.5 Equivalent Statements, 2.6 De Morgan's Laws, 2.7 Logical
 *    Arguments).
 *  - OpenStax, Introduction to Sociology 3e, ch.3 'Culture' (CC BY) — culture
 *    as shared values, beliefs, norms, language, symbols, arts and artifacts;
 *    culture versus society; 3.1 What Is Culture, 3.2 Elements of Culture, 3.3
 *    High, Low, Pop, Sub, Counter-culture and Cultural Change, 3.4 Theoretical
 *    Perspectives on Culture.
 *  - LibreTexts, Cultural Geography (C-ID GEOG 120) ch.13.5 'Sustainable
 *    Development Overview' (CC licensed) — the Brundtland definition, the
 *    environmental-social-economic integration, resource management strategies
 *    (reforestation, sustainable agriculture, water management, renewables),
 *    developed versus developing consumption patterns, the Paris Agreement.
 *  - LibreTexts, Basic Reading and Writing (Lumen) §5.23 'Text Structures' and
 *    Academic Writing for ESL Students §6.3 'Recognizing Patterns of
 *    Organization' (CC licensed) — description, sequence, compare/contrast,
 *    problem/solution, cause/effect and their signal words; the Toulmin model
 *    as taught in LibreTexts rhetoric collections.
 *  - Halliday & Hasan, Cohesion in English (1976) — the reference,
 *    substitution/ellipsis, conjunction and lexical-cohesion taxonomy, as
 *    summarized in the LibreTexts writing collections.
 */

export const x28GaokaoSkillsPassTopics: KnowledgeTopic[] = [
  {
    id: 'eng-academic-listening-comprehension',
    title: 'Academic Listening: From Hearing to Answering',
    domain: 'Languages & World Literature',
    field: 'Academic English Skills',
    branch: 'Listening Comprehension',
    tier: 'core',
    concepts: [
      'Hearing versus listening',
      'The five-stage listening process',
      'Gist, detail and inference question families',
      'Predictive listening: read questions first',
      'Tracking speaker attitude and tone',
      'Discourse organization signposts',
      'Answer transcription: spelling, plurals, word limits',
      'Noise, attention and memory barriers',
    ],
    words: 1674,
    readMins: 8,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Of the four language skills, listening is the only one you cannot slow down. A reading passage waits; a speaker does not. That asymmetry is why listening comprehension has its own section in every major English assessment, and why it responds to training far more than to talent: the ear learns to parse streams of speech the way the eye learns to parse lines of text. This lesson treats listening as a trainable process with named stages, question families and answer-discipline rules, rather than as a gift that some students happen to possess.',
      },
      {
        kind: 'para',
        text: 'Communication scholars draw a sharp distinction that explains most early failures: hearing is physiological, listening is cognitive. You can hear every word of a talk and still not be listening, because listening means constructing meaning from sound — filtering it, interpreting it, holding it in memory, evaluating it. The research compiled in open communication textbooks makes the stakes plain: people forget roughly half of what they hear almost immediately, recall about 35 per cent after eight hours, and only 20 per cent a day later (Hargie, as summarized in Communication in the Real World). Training exists precisely because raw memory cannot be trusted to carry a spoken message to the moment you must answer a question about it.',
      },
      { kind: 'heading', text: 'The five-stage process' },
      {
        kind: 'para',
        text: 'The most widely taught model divides listening into five overlapping stages: receiving, interpreting, recalling, evaluating and responding. Receiving is attending to the auditory signal while fighting noise — and noise is a technical term here: environmental noise such as a fan, traffic or side conversation interferes with hearing itself, while psychological noise such as anxiety about the next question interferes with the cognitive work of listening. Interpreting is meaning-building: the listener lays incoming phrases over existing schemata, the mental frameworks built from prior knowledge. This is why a listener who already knows something about tides understands a harbour announcement faster than one who does not — the words land on prepared ground.',
      },
      {
        kind: 'para',
        text: 'Recalling drags information from a fragile short-term buffer toward long-term memory, and it is the stage where disciplined note-taking earns its keep: brief notation of names, numbers and key nouns offloads memory rather than replacing attention. Evaluating means judging the message — separating fact from opinion, noticing a hedge or a contradiction. Responding, in an assessment setting, is the option you select or the answer you write. The stages loop and overlap rather than run in a straight line, but naming them gives you a diagnostic vocabulary: when practice goes badly you can usually name the broken stage — you never caught the name (receiving), you missed what a pronoun pointed to (interpreting), or you knew the detail and still wrote it wrong (recalling and responding).',
      },
      { kind: 'heading', text: 'Gist, detail and inference: the three question families' },
      {
        kind: 'para',
        text: 'Assessment listening questions cluster into three families, and each rewards a different mode of attention. Gist questions ask what the recording is about or why the speakers are talking — the main idea or the purpose. They reward a relaxed, forward-leaning attention that refuses to panic over unknown words; a single obscure noun in the first sentence has almost never changed the answer to a gist question. Detail questions ask for specific facts: a time, a price, a room number, a course requirement. They reward selective attention, which starts before the audio does — deciding in the pause what kind of word you are hunting, so your ear snaps to it when it arrives.',
      },
      {
        kind: 'para',
        text: 'Inference questions ask what the speaker means without saying it directly: how a speaker probably feels, what will most likely happen next, what the relationship between the speakers is. They reward attention to tone and implication rather than vocabulary. The sentence \u201cWell, that was another productive meeting\u201d can mean exactly what it says or its precise opposite, depending entirely on delivery. Across all three families one professional habit dominates: read the questions first, predict the kind of answer — a number, a place, a feeling — and listen with a target. Listeners without a target hear everything and retain nothing.',
      },
      { kind: 'heading', text: 'Attitude and organization: the advanced layer' },
      {
        kind: 'para',
        text: 'Two harder skills separate strong candidates from average ones: tracking a speaker\u2019s attitude and tracking a talk\u2019s organization. Attitude leaks through prosody — stress, pitch movement, pacing — and through loaded word choice: \u201cfortunately\u201d, \u201csupposedly\u201d, \u201cof course\u201d. Hearing \u201cin theory\u201d tells you a caveat is on its way; hearing \u201canother brilliant idea\u201d may tell you sarcasm is. Organization signals are the structural signposts: \u201cto begin with\u201d, \u201ca second factor\u201d, \u201cto sum up\u201d, \u201cdespite this\u201d. Extended talks follow movable templates — problem then solution, claim then evidence then qualification, chronology, comparison — and knowing the template lets you predict what the next thirty seconds will do. When a digression starts (\u201cThat reminds me of...\u201d), mark it mentally as a detour and hold the main road; questions about structure ask for the road, not the detour.',
      },
      { kind: 'heading', text: 'Answer transcription: spelling, plurals, word limits' },
      {
        kind: 'para',
        text: 'Many listening formats end with writing an answer, and an answer is marked wrong for form even when its content is right. Three disciplines cover most losses. Spelling: a correctly heard \u201caccommodation\u201d still scores zero as \u201caccomodation\u201d, so rehearse the spelling of high-frequency answer words — months, professions, nationalities, equipment. Grammar fit: if the gapped sentence demands a plural (\u201ctwo ___\u201d), a singular noun is wrong no matter how clearly it was spoken; read the printed sentence and decide the grammatical shape of the answer before the audio reaches the gap. Word limits: a three-word answer written as four words is marked wrong without being read; count answer words the way you count money. Numbers need special care, because near-pairs differ by stress alone — \u201cfifteen\u201d ends strong, \u201cfifty\u201d starts strong — and prices or years spoken at speed are the most re-checked items in the whole paper.',
      },
      {
        kind: 'example',
        title: 'Worked Example — One conversation, three question families',
        steps: [
          'Before the audio, read the questions: \u201cWhy does the student visit the office?\u201d, \u201cWhat must she bring on Thursday?\u201d, \u201cHow does the clerk seem about the new rule?\u201d Predictions: a purpose, a noun phrase, an attitude.',
          'The audio opens: \u201cHi, I came to ask about renewing my parking permit.\u201d Gist answered in the first breath — no panic needed at the later unknown term \u201cvalidation sticker\u201d.',
          'Midway: \u201cYou will need your student card and the confirmation email — printed, not on your phone — by Thursday.\u201d Detail locked: two items, one condition, one deadline.',
          'The clerk sighs: \u201cThe new system is, let us say, an adventure.\u201d The attitude is exasperation delivered as understatement; \u201can adventure\u201d here is irony, not praise.',
          'Answer discipline: for the Thursday gap the student writes \u201cprinted confirmation email\u201d — exactly three words, correct plural form, within the stated word limit. Prediction, selective attention, tone-reading and transcription discipline all fired in one conversation.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A question asks \u201cWhat are the speakers mainly discussing?\u201d Which mode of attention does it reward?',
            options: [
              'catching every individual word',
              'relaxed attention to overall purpose, tolerating unknown words',
              'writing everything down word for word',
              'focusing only on numbers and names',
            ],
            answer: 1,
            explain: 'Gist questions reward forward-leaning attention to the whole; single unknown nouns almost never decide them. Word-by-word listening actually damages gist by crowding out the flow.',
          },
          {
            q: 'According to the recall research cited in open communication textbooks, roughly how much of what we hear is remembered after eight hours?',
            options: ['about 90 per cent', 'about 65 per cent', 'about 35 per cent', 'about 5 per cent'],
            answer: 2,
            explain: 'Hargie\u2019s figures: about half is lost immediately, about 35 per cent survives eight hours, about 20 per cent survives a day — which is why note-taking exists.',
          },
          {
            q: 'Mid-lecture, the speaker says \u201cIn theory, this method works well.\u201d What should a trained listener expect next?',
            options: [
              'a restatement of the same point',
              'a caveat or limitation of the method',
              'a change of topic entirely',
              'the conclusion of the lecture',
            ],
            answer: 1,
            explain: '\u201cIn theory\u201d signals that practice differs — a hedge announcing a qualification. Attitude and stance often live in exactly such loaded phrases.',
          },
          {
            q: 'A completion item says \u201cBring two ___ to the office\u201d and the audio clearly says \u201cform\u201d. What must the written answer be?',
            options: ['form', 'forms', 'a form', 'either form or forms is accepted'],
            answer: 1,
            explain: 'The printed sentence fixes the grammar: \u201ctwo\u201d demands a plural noun. Answer fit is checked against the printed sentence, not just the audio.',
          },
          {
            q: 'During a listening test in an echoing hall, a student worries so much about the next question that she misses the current answer. Which classification fits?',
            options: [
              'environmental noise interfering with hearing',
              'psychological noise interfering with listening',
              'a receiving-stage failure caused by bad acoustics',
              'an evaluating-stage failure',
            ],
            answer: 1,
            explain: 'Anxiety is psychological noise — it disrupts the cognitive processing of listening, not the ears. Managing attention and stress is part of receiving, and it is trainable.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Listening word-by-word instead of in thought-chunks, which guarantees gist questions fail. Answering from memory without re-reading the printed sentence, so plurals and word limits break silently. Panicking at an unknown word during a gist question — unknown words are almost always decoration. Confusing \u201cfifteen\u201d and \u201cfifty\u201d by ignoring stress. Writing the first plausible fact heard instead of the one the question asked for. Treating note-taking as dictation: if notes outrun understanding, they are transcription, not support.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this lesson pairs naturally with the skimming-and-scanning reading lesson, its silent twin. Follow with the speaking-fluency lesson to close the loop between hearing and producing. Daily practice: one short recording per day with pre-read questions, then a second listen checking only your errors. Primary reading: Communication in the Real World, ch.5 \u201cListening\u201d (LibreTexts, CC BY-NC-SA) for the five-stage model, and its listening-barriers section for the noise taxonomy.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Hearing is physiology; listening is cognition — only one of them scores.',
        'Five stages: receiving, interpreting, recalling, evaluating, responding.',
        'Gist wants relaxed attention; detail wants prediction; inference wants tone.',
        'Read questions first and predict the answer\u2019s kind before audio starts.',
        'Attitude hides in stress and loaded words; organization hides in signposts.',
        'Answers die on form: spelling, plurals and word limits are part of the question.',
      ] },
    ],
  },
  {
    id: 'eng-seven-choice-gap-filling',
    title: 'Restoring Removed Sentences: Gap-Filling as Discourse Reconstruction',
    domain: 'Languages & World Literature',
    field: 'Academic Reading',
    branch: 'Discourse Reconstruction',
    tier: 'core',
    concepts: [
      'Sentence-gap tasks test cohesion, not vocabulary',
      'Reference: pronouns and demonstratives need antecedents',
      'Substitution and ellipsis as compression',
      'Conjunctions announce the logical move',
      'Lexical chains keep the topic on the table',
      'Specify each gap before scanning candidates',
      'Elimination and the one-use rule',
      'The whole-passage reread as the final check',
    ],
    words: 1480,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Some reading tasks remove sentences from a passage and ask you to put them back — five candidates for five gaps, with two decoys left over. The format looks like a puzzle, but it tests one deep skill: whether you can read the invisible connective tissue of a text. Every well-built passage is sewn together by cohesion — pronouns that point backwards, connectors that announce logic, repeated and related words that keep the topic on the table. Fluent readers feel these stitches without naming them; this lesson makes you see them, because when the stitches are the question, feeling is not enough.',
      },
      {
        kind: 'para',
        text: 'The theory behind the task goes back to Halliday and Hasan\u2019s classic Cohesion in English (1976), which catalogues the devices that tie one sentence to another: reference, substitution and ellipsis, conjunction, and lexical cohesion. Gap-filling questions are precisely those devices with the middle cut out. The right sentence for a gap is the one whose pronouns find antecedents in the neighbouring sentences, whose conjunctions match the logic across the break, and whose vocabulary continues the lexical chain. The two decoys fail at least one obligation — often deliberately, by echoing a passage word while ignoring its logic.',
      },
      { kind: 'heading', text: 'Reference: every pronoun needs a home' },
      {
        kind: 'para',
        text: 'Reference is the pointing system of a text: he, she, it, they; this, that, these, those; such; the former and the latter. A candidate sentence that begins \u201cThis approach, however, proved expensive\u201d needs a previous sentence that actually named an approach. Hunt backwards for the antecedent; if none exists, the sentence is homeless and wrong however attractive its vocabulary. Watch number and gender with personal pronouns — \u201cit\u201d cannot quietly refer to \u201cpolicies\u201d — and treat demonstratives as stricter still: \u201cthis argument\u201d requires that an argument was made, not merely that a topic was mentioned.',
      },
      {
        kind: 'para',
        text: 'Substitution and ellipsis are compression devices. \u201cOne\u201d can stand for a whole noun phrase (\u201ca larger one\u201d), \u201cdo\u201d or \u201cdoes\u201d can stand for a verb, and sometimes a clause is simply left out because the reader can rebuild it. When the sentences around a gap are compressed — \u201cNeither did the second team.\u201d — the missing sentence must contain exactly the thing the second team failed to do. Ellipsis is the device students notice least, yet it quietly decides several gaps per passage, because a compressed sentence is an open demand on its neighbour.',
      },
      { kind: 'heading', text: 'Conjunction and lexical chains' },
      {
        kind: 'para',
        text: 'Conjunctions are logic worn openly. \u201cHowever\u201d promises contrast; \u201ctherefore\u201d promises consequence; \u201cfor example\u201d promises a case of what preceded; \u201cmeanwhile\u201d promises a parallel storyline; \u201cin fact\u201d often promises a correction of what came before. The core discipline is to read the sentence before and after the gap and ask what logical move between them the missing sentence must perform. If the before-sentence says \u201cSales collapsed in the third quarter\u201d and the after-sentence says \u201cThe lesson cost the company a board seat\u201d, the missing sentence must bridge — most plausibly a consequence, or a failed remedy worth a lesson.',
      },
      {
        kind: 'para',
        text: 'Lexical cohesion is the quieter device: texts keep their topic on the table through repetition and through chains of related words — ship, vessel, cargo, harbour form a lexical set for sea trade. A candidate sentence built from an unrelated lexical set usually belongs to a different paragraph, no matter how grammatically it fits. But run the check in the right order: word-match alone never proves a fit, because the strongest decoy sentences repeat a passage word while violating its logic. Logic first, words second — that ordering alone defeats most decoys.',
      },
      { kind: 'heading', text: 'The working procedure' },
      {
        kind: 'para',
        text: 'Treat the task as a five-step mechanical procedure. First, read the passage once ignoring the gaps, to hold the gist in mind. Second, for each gap underline the pronouns, connectors and topic words in the sentences on both sides, then write a one-line specification: \u201cgap 3 needs a contrast about cost, subject = the new bridge\u201d. Third, fill the gaps whose specifications are clearest first — the easiest gap, not necessarily the first gap — and cross out each candidate the moment it is used, because a sentence used twice is always an error somewhere.',
      },
      {
        kind: 'para',
        text: 'Fourth, deploy elimination actively: when two candidates fit one gap, park both, move on, and let a later gap evict one of them. Fifth comes the step students skip and should not: after all five are placed, reread the fully restored passage top to bottom, checking that every pronoun still lands, every connector still tells the truth, and each paragraph\u2019s lexical set stays coherent. The two leftover sentences should now look obviously wrong — and if either still looks plausible, at least one placement is defective. Decoys are engineered to survive a hasty fit and die under a whole-passage reread.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Specify, then eliminate',
        steps: [
          'The passage: \u201cThe city planned a tram line along the river. ___ Commuters, however, greeted the news coldly. Shopkeepers feared two years of digging outside their doors.\u201d',
          'Specification: the gap must introduce the tram plan\u2019s cost or disruption (a \u201chowever\u201d contrast is coming), with a subject that commuters and shopkeepers can both react against.',
          'Candidate A: \u201cThe project promised to cut journey times by a third.\u201d Pure benefit; it cannot feed the \u201chowever\u201d. Rejected.',
          'Candidate B: \u201cConstruction, the report admitted, would block the riverside road for two years.\u201d It supplies the disruption; \u201cCommuters ... however\u201d now lands. Placed.',
          'Candidate C, a decoy, repeats \u201criver\u201d and \u201ctwo years\u201d from the passage but describes a flood-control scheme — word echo, broken logic. It survives a glance and dies under the reread.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'At its core, a sentence-restoration task is testing which ability?',
            options: [
              'recalling advanced vocabulary',
              'reading the cohesive links that hold a text together',
              'writing grammatically correct sentences',
              'remembering facts stated in the passage',
            ],
            answer: 1,
            explain: 'The removed sentences are stitches; the task is discourse reconstruction. Vocabulary helps, but cohesion — reference, conjunction, lexical chains — is what is actually examined.',
          },
          {
            q: 'A candidate sentence begins \u201cThis method, however, was soon abandoned.\u201d What must the preceding text contain?',
            options: [
              'a mention of a method that \u201cthis\u201d can point to',
              'a contrasting opinion from another author',
              'a conclusion summarizing the paragraph',
              'nothing in particular — \u201cthis\u201d works anywhere',
            ],
            answer: 0,
            explain: 'Demonstrative reference is strict: \u201cthis method\u201d needs an antecedent, and \u201chowever\u201d additionally needs a positive statement to contrast with. Both obligations point backwards.',
          },
          {
            q: 'The sentence before a gap reads \u201cBook sales fell sharply last year.\u201d The sentence after reads \u201cPublishers have since cut print runs by a fifth.\u201d What must the missing sentence do?',
            options: [
              'introduce a new unrelated topic',
              'state a contrast between the two years',
              'bridge cause to effect — a consequence of falling sales',
              'restate the first sentence in other words',
            ],
            answer: 2,
            explain: 'Falling sales followed by cut print runs demands a consequence in between — \u201ctherefore\u201d-logic. A bridge sentence stating that consequence restores the logic.',
          },
          {
            q: 'Which is the classic design of a decoy sentence?',
            options: [
              'it uses grammar never seen in the passage',
              'it repeats a passage word while breaking the passage\u2019s logic',
              'it is longer than every true candidate',
              'it contains a factual error',
            ],
            answer: 1,
            explain: 'Decoys exploit the word-matching instinct: a familiar word masks broken cohesion. This is exactly why the discipline is logic first, words second.',
          },
          {
            q: 'All five gaps are filled. What is the correct final step?',
            options: [
              'move on — placements are final once made',
              'check only the gaps that felt hard',
              'reread the whole restored passage to confirm every link',
              'verify that the two unused sentences contain errors',
            ],
            answer: 2,
            explain: 'The whole-passage reread certifies the restoration: every pronoun lands, every connector tells the truth, every lexical set stays coherent. It is also what exposes a decoy that briefly looked plausible.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Matching words instead of logic — the decoys are built to harvest exactly this habit. Leaving a used candidate un-crossed, so it gets placed twice. Filling gaps strictly left to right even when a later gap is far easier; specifications, not positions, set the order. Letting \u201cit\u201d or \u201cthey\u201d point at the nearest plural noun without checking the real antecedent. Skipping the final reread, which is the only step that certifies the passage as a coherent whole rather than five local decisions.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none, though the cohesion-as-writing lesson sharpens the same instinct from the other side — writers who can stitch can also read stitches. Follow with the argumentative-and-practical-texts lesson, which applies structure-reading to full documents. Primary reading: Halliday and Hasan, Cohesion in English (1976), as summarized in the LibreTexts writing collections, for the full taxonomy of reference, substitution, ellipsis, conjunction and lexical cohesion.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'The task tests cohesion: reference, substitution/ellipsis, conjunction, lexical chains.',
        'Every pronoun and demonstrative must find its antecedent in the passage.',
        'Conjunctions announce the move: however, therefore, for example, meanwhile.',
        'Write a one-line specification per gap before scanning candidates.',
        'Fill the clearest gap first; cross out used candidates; logic before words.',
        'Certify with the whole-passage reread — decoys die there or not at all.',
      ] },
    ],
  },
  {
    id: 'eng-argumentative-practical-texts',
    title: 'Reading Arguments and Practical Texts: Structure First, Details Second',
    domain: 'Languages & World Literature',
    field: 'Academic Reading',
    branch: 'Informational and Argumentative Reading',
    tier: 'core',
    concepts: [
      'The anatomy of an argument: claim, reasons, evidence',
      'The Toulmin frame: claim, data, warrant, qualifier',
      'Locating the thesis, stated or implied',
      'Expository organization patterns and their signals',
      'News reports and the inverted pyramid',
      'Reports, headings and summary passages',
      'Reading charts, tables and units',
      'Comparing and evaluating across documents',
    ],
    words: 1697,
    readMins: 8,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Two kinds of text dominate academic reading beyond literature: argumentative-expository texts, whose business is to persuade or explain, and practical texts — news reports, official documents, popular-science features — whose business is to transfer information efficiently. They demand different reading postures. An argument must be interrogated: what exactly is claimed, on what grounds, with what concessions? A report must be mined: where is the fact, which document says it, does the chart actually support the statement? Questions on both kinds reward readers who process structure first and details second, because structure tells you where the answer lives before you know its words.',
      },
      {
        kind: 'para',
        text: 'The failure mode of untrained readers is linear consuming: eyes over every word in order, memory holding a soup of half-facts. Trained readers instead take a structural pass — title, first paragraph, topic sentences, final paragraph — that builds a map of the text\u2019s moves in under a minute. On argumentative passages the map lists the claim and its pillars; on practical passages it lists what information sits where. Questions then become lookups on a map rather than treasure hunts through prose. This lesson builds the map-reading habit for both text kinds and adds the multi-document skills of comparison and evidence evaluation.',
      },
      { kind: 'heading', text: 'The anatomy of an argument' },
      {
        kind: 'para',
        text: 'Every argument has the same skeleton: a claim — the proposition the author wants accepted; reasons — the main supports; and evidence — facts, statistics, examples or expert testimony that back the reasons. A useful refinement comes from the Toulmin model, taught across the open rhetoric textbooks: claims rest on data through a warrant (the unstated principle connecting them), and they often carry qualifiers (\u201cprobably\u201d, \u201cin most cases\u201d) and acknowledge rebuttals. Reading with the model in mind changes what you notice: a qualifier weakens the claim\u2019s reach, and a stated rebuttal usually marks the author as careful rather than confused.',
      },
      {
        kind: 'para',
        text: 'Locating the claim is a skill of its own. Stated theses cluster in predictable positions: the final sentence of the opening paragraph, the opening of the second, or — in argument essays that build through objections — near the end, just before the conclusion. An implied thesis must be assembled from repeated assertions; the test is whether one sentence could be written that all the paragraphs jointly support. Then classify every paragraph as claim, support, concession, rebuttal or digression — margins labels are enough — and comprehension questions begin answering themselves, because most of them ask you to identify or apply one of those five moves.',
      },
      { kind: 'heading', text: 'Patterns of organization' },
      {
        kind: 'para',
        text: 'Expository texts recycle a handful of structures, and each has signature signal words, as the open reading-and-writing textbooks catalogue: description lists features (\u201cfor instance\u201d, \u201cin addition\u201d); sequence orders steps or time (\u201cfirst\u201d, \u201cthen\u201d, \u201ceventually\u201d); compare/contrast weighs similarities and differences (\u201cwhereas\u201d, \u201csimilarly\u201d, \u201con the other hand\u201d); cause/effect traces consequence (\u201cbecause\u201d, \u201ctherefore\u201d, \u201cas a result\u201d); problem/solution poses a difficulty then remedies (\u201cthe challenge\u201d, \u201cone remedy\u201d). Spotting the pattern within the first two paragraphs pays twice: it predicts what questions will ask (contrast passages breed difference questions), and it predicts where facts sit — the problem in paragraph two, the remedies in paragraphs four and five.',
      },
      {
        kind: 'para',
        text: 'The patterns also discipline summary. A cause/effect passage summarized without its causal chain is wrong even if every fact in it is true; a compare/contrast passage summarized as a list of attributes has lost its axis. When a question asks for the best title or the writer\u2019s purpose, the answer is usually a compression of the pattern plus the topic — not any single sentence. That is why inference questions on these texts feel slippery to untrained readers: they ask for the structure you skipped.',
      },
      { kind: 'heading', text: 'Practical texts: news, reports, popular science' },
      {
        kind: 'para',
        text: 'News reports are built on the inverted pyramid: the lead sentence carries who, what, when and where; the body adds how and why in descending order of importance; the tail holds trimming material. Consequences for reading are direct — the lead answers most gist questions, attribution matters (\u201caccording to\u201d phrases mark whose claim each sentence really is), and reported speech is the reporter\u2019s stance, not the fact itself. Official reports and documents organize information structurally: headings, numbered sections, an executive summary that states findings before evidence. Reading the summary first, then jumping by heading, beats linear reading at least as well as skimming does — headings are the author\u2019s own map, offered free.',
      },
      {
        kind: 'para',
        text: 'Popular-science features explain mechanisms through analogy and narrative — an experiment recounted as a small story — so the explanation usually hides inside the anecdote, and questions about purpose (\u201cwhy does the author describe the failed trial?\u201d) look for the mechanism the story dramatizes. Charts and tables demand their own ritual: read the title, the axis labels, the units and the legend BEFORE the data, because a chart misread by one unit — thousands versus millions — inverts every conclusion drawn from it. Statement-verification questions about charts are won by locating exact numbers, and lost by trend-reading from memory of a glance.',
      },
      { kind: 'heading', text: 'Comparing and evaluating across documents' },
      {
        kind: 'para',
        text: 'The hardest practical-text tasks hand you two or three short documents on one topic and ask where they agree, where they diverge, and which source says what. The tool is a comparison matrix: one row per document, recording its claim, its evidence type and its stance. Divergence usually traces to purpose — a news brief informs, an advocacy piece persuades, a review evaluates — so asking \u201cwhat is this text for?\u201d explains most disagreements between sources. The matrix also feeds the marking scheme directly: questions of the form \u201cwhich document would support X?\u201d are cell lookups, and the synthesis question is a walk across the rows.',
      },
      {
        kind: 'para',
        text: 'Evidence evaluation rides on the same matrix. Not all support is equal, and the rough ladder runs: controlled experiment, then large observational study, then expert consensus, then single expert opinion, then anecdote. Hedged language — \u201cmay\u201d, \u201csuggests\u201d, \u201cis associated with\u201d — signals weaker claims; absolute language — \u201calways\u201d, \u201cproves\u201d, \u201cguarantees\u201d — signals either a strong claim or an overreach, and overreach is the safer bet in verification questions. Correlation phrased as causation (\u201cX happened, so Y rose\u201d) is the classic flaw to name when a question asks what is wrong with an inference.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Structural pass on an argument',
        steps: [
          'Text: \u201cCities should convert more streets to pedestrian zones. Retail studies from three capitals show footfall rises of 15-30 per cent after conversion. Admittedly, delivery logistics need redesign; but trial zones in Oslo and Barcelona resolved this with timed loading windows.\u201d',
          'Structural pass: claim = cities should convert more streets (final-ish position, first sentence); support = retail studies (statistical evidence); concession = delivery logistics; rebuttal = Oslo/Barcelona precedents.',
          'Question \u201cThe author concedes that ___.\u201d — answered by the map: delivery logistics need redesign. No rereading required.',
          'Question \u201cThe evidence for the claim is ___.\u201d — cell lookup: statistical studies from three cities; note the hedge-free phrasing makes it relatively strong but observational, not experimental.',
          'Question \u201cWhich weakens the argument most?\u201d — attack the support or the warrant: evidence that footfall gains came from tourists, not conversion, breaks the data-warrant link. Absolute-word options (\u201cproves\u201d, \u201cnever\u201d) are decoys.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In an argument passage, the sentence \u201cCritics note that such schemes displace parking problems elsewhere\u201d functions as what?',
            options: ['a claim', 'a concession', 'a piece of statistical evidence', 'the thesis'],
            answer: 1,
            explain: 'It acknowledges an opposing point — a concession. Concessions mark fair-minded argument and usually set up a rebuttal in the next sentence.',
          },
          {
            q: 'A passage opens: \u201cFor centuries the island\u2019s harbour silted up every spring. Engineers tried dredging, then breakwaters, then a new channel.\u201d Which organization pattern is this?',
            options: ['compare/contrast', 'problem/solution', 'description', 'cause/effect'],
            answer: 1,
            explain: 'A difficulty (silting) followed by a sequence of remedies (dredging, breakwaters, channel) is the problem/solution template; \u201ctried\u201d is its signature.',
          },
          {
            q: 'A chart shows electricity use rising as average temperature falls. A report claims \u201cheating systems drive the increase\u201d. What is the safest reading?',
            options: [
              'the chart proves the claim',
              'the chart is inconsistent with the claim',
              'the chart supports a correlation; the causal reading needs more evidence',
              'charts cannot support any statement',
            ],
            answer: 2,
            explain: 'Charts establish numbers, not mechanisms. The correlation-consistent claim is the safe reading; \u201cproves\u201d overreaches, which is exactly what verification questions test.',
          },
          {
            q: 'Two documents on a city project disagree. Document A (a news brief) reports costs; Document B (a chamber-of-commerce column) argues the project is unaffordable. What best explains the difference?',
            options: [
              'one document must be lying',
              'different purposes: informing versus persuading',
              'news briefs cannot contain opinions',
              'the documents are about different projects',
            ],
            answer: 1,
            explain: 'Purpose explains stance. A brief transfers information; a chamber column advocates a position. The disagreement follows from genre, not necessarily from error.',
          },
          {
            q: 'Which option wording in a statement-verification question most often signals an overreach?',
            options: [
              '\u201cmay reduce\u201d',
              '\u201cis associated with\u201d',
              '\u201calways and in every case\u201d',
              '\u201csome researchers suggest\u201d',
            ],
            answer: 2,
            explain: 'Absolutes invite a single counterexample to destroy them; hedges track how evidence is actually phrased. Verification questions lean on this asymmetry constantly.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Reading practical texts linearly instead of map-first — headings and leads are the author\u2019s own index, ignored at your cost. Treating reported speech as the reporter\u2019s own claim. Reading chart data before reading axes and units, which is how thousands become millions. Summarizing a compare/contrast passage as a list, losing the axis the questions ask about. Treating a concession as the author\u2019s real position — concessions are acknowledged to be answered. Accepting absolute-word statements in verification questions without hunting for the hedge in the source.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the skimming-and-scanning lesson supplies the speed tools this lesson\u2019s structural pass uses. Follow with the gap-filling lesson for cohesion-level reading, and the critical-reasoning lesson to drill the claim-assumption logic this lesson surveys. Primary reading: LibreTexts, Basic Reading and Writing (Lumen) \u00a75.23 \u201cText Structures\u201d; Academic Writing for ESL Students \u00a76.3 \u201cRecognizing Patterns of Organization\u201d; and any LibreTexts rhetoric collection\u2019s Toulmin-model chapter (all CC licensed).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Arguments: claim, reasons, evidence — label every paragraph with its move.',
        'Toulmin adds warrant, qualifier, rebuttal; hedges shrink a claim\u2019s reach.',
        'Five expository patterns, each with signature signal words.',
        'News leads answer gist; \u201caccording to\u201d marks whose claim it is.',
        'Charts: title, axes, units, legend — before the data, every time.',
        'Across documents, build a matrix; purpose explains most disagreements.',
      ] },
    ],
  },
  {
    id: 'math-sets-logic-foundations',
    title: 'Sets and Logical Terms: The Grammar of Precise Mathematics',
    domain: 'Mathematics',
    field: 'Foundations',
    branch: 'Sets and Logic',
    tier: 'core',
    concepts: [
      'Roster and set-builder forms',
      'Membership, subsets and set equality',
      'Venn diagrams and two-set regions',
      'Union, intersection and complement',
      'Counting with the inclusion-exclusion formula',
      'Statements, negation and quantifiers',
      'And, or, not: compound statements',
      'Conditionals: converse, inverse, contrapositive',
      'Necessary and sufficient conditions',
      "De Morgan's laws in logic and in sets",
    ],
    words: 2051,
    readMins: 10,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Sets are the containers of mathematics and logic is its grammar; both supply the precise vocabulary every later subject borrows — functions map between sets, probability measures them, proofs argue in logical forms. Yet the vocabulary itself is often assumed rather than taught, which is why phrases like \u201cif and only if\u201d or \u201cat least one\u201d trip otherwise strong students. This lesson fixes the vocabulary in place: what a set is and how to draw one, what the five connectives mean, how conditionals split into converse, inverse and contrapositive, and how the two languages — sets and statements — mirror each other through De Morgan\u2019s laws.',
      },
      {
        kind: 'para',
        text: 'The treatment follows the open textbook Contemporary Mathematics (OpenStax), whose first two chapters give exactly this ground floor: Chapter 1 runs from basic set concepts through subsets and Venn diagrams to set operations with two and three sets; Chapter 2 runs from statements and quantifiers through compound statements and truth tables to equivalent statements, De Morgan\u2019s laws and logical arguments. Everything below is that material in exam-ready form, with the notation compressed to what assessments actually use.',
      },
      { kind: 'heading', text: 'Sets: notation and membership' },
      {
        kind: 'para',
        text: 'A set is a well-defined collection of distinct objects — well-defined meaning membership is decidable: either 3 belongs to the set of odd numbers or it does not, with no arguing. Two notations define sets. Roster form lists elements between braces: A = {1, 2, 3, 4}. Set-builder form states the membership condition: A = {x | x is a natural number less than 5}. Membership uses \u2208 (3 \u2208 A) and non-membership \u2209 (7 \u2209 A). The empty set \u2205 has no elements; the cardinality n(A) counts them, so n(A) = 4 and n(\u2205) = 0. One caution the assessments love: order and repetition do not matter in roster form — {1, 2, 2, 3} is just {1, 2, 3} — and the empty set is not the same as the set containing zero.',
      },
      {
        kind: 'para',
        text: 'A is a subset of B, written A \u2286 B, when every element of A is also an element of B; it is a proper subset, A \u2282 B, when B additionally has elements A lacks. Every set is a subset of itself, and the empty set is a subset of every set — two conventions worth memorizing because true/false questions target them directly. Equality of sets is mutual containment: A = B exactly when A \u2286 B and B \u2286 A. Fixing a universal set U — the universe of discourse for the problem, say all students in a school — lets you define the complement A\u2032: everything in U outside A. n(A\u2032) = n(U) \u2212 n(A), the single most-used counting fact in this topic.',
      },
      { kind: 'heading', text: 'Venn diagrams and set operations' },
      {
        kind: 'para',
        text: 'The union A \u222a B is everything in A or B (or both); the intersection A \u2229 B is everything in both; two sets are disjoint when A \u2229 B = \u2205. Venn diagrams turn these definitions into pictures: two overlapping circles inside the universal-set rectangle carve the plane into four regions — A only, B only, both, neither — and every counting problem is a matter of filling those regions from the inside out: intersection first, then the \u201conly\u201d regions by subtraction. The inclusion-exclusion formula compresses the picture: n(A \u222a B) = n(A) + n(B) \u2212 n(A \u2229 B); the subtraction corrects the double-count of the overlap. With three sets the diagram has eight regions and the principle is unchanged — fill the innermost overlap first — though the full formula adds and subtracts three more terms.',
      },
      {
        kind: 'para',
        text: 'The set operations mirror the logical connectives, which is no accident: \u201cin A \u222a B\u201d means \u201cin A or in B\u201d, and \u201cin A \u2229 B\u201d means \u201cin A and in B\u201d. Keep that dictionary in your pocket — every logic law below has a set twin, and exam questions exploit the translation in both directions, most often through the complement laws (A \u222a A\u2032 = U, A \u2229 A\u2032 = \u2205) and through De Morgan\u2019s set form.',
      },
      { kind: 'heading', text: 'Statements and quantifiers' },
      {
        kind: 'para',
        text: 'A logical statement is a declarative sentence that is definitively true or false — questions (\u201cis it raining?\u201d), commands (\u201cclose the door\u201d) and opinions without a truth condition do not qualify. Negation flips the truth value: the negation of \u201cthe door is open\u201d is \u201cthe door is not open\u201d, and negation of a negation restores the original. Quantified statements bring generality: \u201call A are B\u201d, \u201cno A are B\u201d, \u201csome A are B\u201d (where \u201csome\u201d means at least one). Their negations are the exam\u2019s favourite trap, so memorize the pair: the negation of \u201call are\u201d is \u201csome are not\u201d — NOT \u201cnone are\u201d; the negation of \u201csome are\u201d is \u201cnone are\u201d; the negation of \u201cno A are B\u201d is \u201csome A are B\u201d. One bird that is not a raven kills \u201call birds are ravens\u201d, but does not touch \u201cno birds are ravens\u201d — it proves that one false.',
      },
      {
        kind: 'para',
        text: 'Compound statements join simpler ones with \u201cand\u201d (\u2227, the conjunction — true only when both parts are true), \u201cor\u201d (\u2228, the disjunction — true when at least one part is true, the inclusive reading that formal logic always takes), and \u201cnot\u201d (\u00ac). Truth tables list every case, and their four-line tables for two statements are the ground truth from which every equivalence below is verified. The conditional \u201cif p then q\u201d (p \u2192 q) gets its own table: it is false only when p is true and q is false — the one case where the promise was broken. When the hypothesis is false the conditional is vacuously true, a convention that feels strange and is tested constantly.',
      },
      { kind: 'heading', text: 'Converse, inverse, contrapositive — and the two conditions' },
      {
        kind: 'para',
        text: 'From a conditional p \u2192 q, three variants are formed by juggling p and q with negation: the converse q \u2192 p (conditions swapped), the inverse \u00acp \u2192 \u00acq (both negated), and the contrapositive \u00acq \u2192 \u00acp (swapped and negated). Exactly one variant is logically equivalent to the original: the contrapositive. \u201cIf it is a swan then it is a bird\u201d is the same claim as \u201cIf it is not a bird then it is not a swan\u201d — but NOT the same as \u201cIf it is a bird then it is a swan\u201d (the converse), the single most common logic error in student writing and in option lists. To disprove a conditional, exhibit a case with p true and q false; to prove it, assume p and derive q — the contrapositive route counts as a proof because of the equivalence.',
      },
      {
        kind: 'para',
        text: 'The same conditional carries the language of conditions: p is a sufficient condition for q when p \u2192 q (p alone guarantees q), and q is a necessary condition for p under the same arrow (q must hold for p to have any chance). So \u201cbeing in A \u2229 B is sufficient for being in A\u201d, while \u201cbeing in A is necessary for being in A \u2229 B\u201d. The biconditional p \u2194 q — \u201cp if and only if q\u201d — holds when both arrows hold, making each condition both necessary and sufficient; set-wise it is equality, A = B.',
      },
      {
        kind: 'para',
        text: 'De Morgan\u2019s laws close the mirror between the two languages: \u00ac(p \u2227 q) \u2261 \u00acp \u2228 \u00acq and \u00ac(p \u2228 q) \u2261 \u00acp \u2227 \u00acq — negation flips and with ors and ors with ands. The set twins: (A \u2229 B)\u2032 = A\u2032 \u222a B\u2032 and (A \u222a B)\u2032 = A\u2032 \u2229 B\u2032. Finally, an argument is a chain of conditionals, and validity means the conclusion follows from the premises by form alone. The two workhorse forms: modus ponens (p \u2192 q, p, therefore q) and modus tollens (p \u2192 q, \u00acq, therefore \u00acp — contrapositive reasoning in action). The classic invalid look-alike, affirming the consequent (p \u2192 q, q, therefore p) is just the converse error wearing a suit.',
      },
      {
        kind: 'example',
        title: 'Worked Example — A survey counted by regions, a claim tested by contrapositive',
        steps: [
          'Survey: in a class of 40, n(Maths) = 22, n(Physics) = 18, and 8 students take both. How many take neither?',
          'Fill the Venn regions from the inside: both = 8; Maths only = 22 \u2212 8 = 14; Physics only = 18 \u2212 8 = 10.',
          'Union: n(Maths \u222a Physics) = 14 + 8 + 10 = 32 — check against the formula: 22 + 18 \u2212 8 = 32.',
          'Neither = complement of the union: 40 \u2212 32 = 8 students. Every survey question is this recipe with different costumes.',
          'Logic check: the claim \u201cif a student takes Maths then she takes Physics\u201d is false — the 14 Maths-only students are counterexamples. Its contrapositive \u201cif she does not take Physics then she does not take Maths\u201d is equally false; its converse is a different (also false) claim. Same diagram, two languages.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which statement about subsets is true by convention?',
            options: [
              'the empty set is a subset of no set',
              'every set is a proper subset of itself',
              'the empty set is a subset of every set',
              '{1, 2, 2, 3} has four elements',
            ],
            answer: 2,
            explain: 'Vacuously, \u2205 has no element outside any set, so \u2205 \u2286 B for every B. Repetition never increases cardinality: {1, 2, 2, 3} = {1, 2, 3}, n = 3.',
          },
          {
            q: 'In a group, n(A) = 15, n(B) = 12 and n(A \u2229 B) = 5. How many are in at least one of A, B?',
            options: ['27', '22', '32', '17'],
            answer: 1,
            explain: 'Inclusion-exclusion: n(A \u222a B) = 15 + 12 \u2212 5 = 22. Forgetting the subtraction — answer 27 — double-counts the five in both.',
          },
          {
            q: 'What is the negation of \u201call smartphone cameras have wide lenses\u201d?',
            options: [
              'no smartphone cameras have wide lenses',
              'all smartphone cameras lack wide lenses',
              'some smartphone cameras do not have wide lenses',
              'some smartphone cameras have wide lenses',
            ],
            answer: 2,
            explain: '\u201cAll are\u201d dies on a single counterexample, so its negation is \u201csome are not\u201d. Answer 3 states something the original already implies — the classic decoy.',
          },
          {
            q: 'The statement \u201cif a number is divisible by 6, then it is divisible by 3\u201d is true. Which variant is guaranteed true as well?',
            options: [
              'if divisible by 3, then divisible by 6 (converse)',
              'if not divisible by 6, then not divisible by 3 (inverse)',
              'if not divisible by 3, then not divisible by 6 (contrapositive)',
              'none of them',
            ],
            answer: 2,
            explain: 'Only the contrapositive is logically equivalent to the original. The converse is false (6 does not divide 3), and the inverse is its equivalent — equally false here.',
          },
          {
            q: 'In the sentence \u201cpassing the practical exam is necessary for certification\u201d, which logical form is stated?',
            options: [
              'certification \u2192 passing the practical',
              'passing the practical \u2192 certification',
              'passing the practical \u2194 certification',
              'no conditional is present',
            ],
            answer: 0,
            explain: '\u201cq is necessary for p\u201d writes as p \u2192 q — no certificate can exist unless the practical is passed. \u201cPassing implies certification\u201d would additionally make it sufficient — that stronger reading is the biconditional error.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Forgetting the subtraction in inclusion-exclusion — the overlap gets counted twice. Reading \u201csome\u201d as \u201cnot all\u201d in formal logic; it means at least one, possibly all. Swapping in the converse when the contrapositive is called for. Misnegating quantified statements: \u201cnot all\u201d is \u201csome are not\u201d, never \u201cnone are\u201d. Treating a false-hypothesis conditional as false — it is vacuously true, the only false row being p true with q false. Filling Venn diagrams from the outside in, which garbles the \u201conly\u201d regions; always start from the innermost overlap.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is a foundations lesson. Follow with the probability topics (events are sets, and \u201cor\u201d/\u201cand\u201d become union/intersection with rules attached) and the critical-reasoning lesson for arguments in natural language. Primary reading: OpenStax, Contemporary Mathematics, ch.1 \u201cSets\u201d and ch.2 \u201cLogic\u201d (openstax.org, CC BY-NC-SA) — sections 1.1-1.5 and 2.1-2.7 cover everything here with fuller truth tables.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Sets: roster or set-builder; \u2208 membership; n(A) counts; \u2205 is a subset of everything.',
        'Venn regions fill from the overlap out; n(A \u222a B) = n(A) + n(B) \u2212 n(A \u2229 B).',
        '\u201cAnd\u201d is true only jointly; \u201cor\u201d is inclusive; \u2192 fails only when p true, q false.',
        'Negate \u201call are\u201d as \u201csome are not\u201d; negate \u201csome are\u201d as \u201cnone are\u201d.',
        'Only the contrapositive is equivalent; the converse is the classic decoy.',
        'Sufficient writes p \u2192 q; necessary is q under the same arrow; both = biconditional.',
      ] },
    ],
  },
  {
    id: 'geo-regional-development-sustainability',
    title: 'Regional Development and Sustainability: Places, Resources and the Long Term',
    domain: 'Social Sciences',
    field: 'Human Geography',
    branch: 'Development and Sustainability',
    tier: 'intermediate',
    concepts: [
      'The regional analysis toolkit',
      'Core-periphery patterns and industrial transfer',
      'Resource regions: boom, depletion and transformation',
      'Land management and environmental governance',
      'National resource security',
      'The Brundtland definition of sustainable development',
      'The three pillars: environmental, social, economic',
      'Sustainability indicators and composite measures',
      'GIS and remote sensing for regional planning',
    ],
    words: 1757,
    readMins: 9,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Regions are not equal: one sits on coal and iron, another on a deep harbour, a third on nothing but skilled people and good roads. Development geography asks why these differences matter, how places convert endowments into wellbeing, and — the modern constraint — how they do so without consuming the base that makes it possible. The classic definition comes from the 1987 Brundtland Report, quoted across the open geography texts: sustainable development \u201cseeks to meet the needs of the present without compromising the ability of future generations to meet their own needs\u201d. Every regional question in this topic is that definition applied to a place.',
      },
      {
        kind: 'para',
        text: 'The topic\u2019s exam questions cluster into four moves: analyse a region (what advantages and constraints does it have?), explain a change (why did industry move, decline or transform?), evaluate a strategy (does this plan balance the three pillars?), and read the tools (maps, GIS layers, indicator tables). This lesson builds each move in turn, with the vocabulary — carrying capacity, resource security, industrial structure, environmental governance — fixed precisely, because half the marks in this topic are vocabulary deployed accurately.',
      },
      { kind: 'heading', text: 'The regional analysis toolkit' },
      {
        kind: 'para',
        text: 'Analysing a region starts with four inventories. Physical base: relief, climate, water, soils, minerals — the given cards. Location and accessibility: distance to markets and ports, transport links, proximity to growth centres; a mediocre resource near a motorway beats a rich one beyond mountains. Human factors: population (size, skills, age structure), capital, technology and institutions. Economic structure: the share of primary (extraction and farming), secondary (manufacturing) and tertiary (services) activity, and the direction of travel — development classically shifts employment from primary through secondary into tertiary, and a region stuck in raw-material export has a structural problem, not a temporary one.',
      },
      {
        kind: 'para',
        text: 'Two patterns organize the map. Core-periphery: development concentrates where capital, labour and infrastructure pool, leaving peripheral regions supplying raw materials and labour — and policy tries to shift this with transport investment, tax incentives and relocated institutions. Industrial transfer: as core regions grow expensive, labour-intensive manufacturing migrates toward cheaper peripheries, which gain jobs but inherit pollution — the classic trade-off question. When a question shows a region\u2019s employment data across decades, the expected answer names the structural shift, the driving costs or technologies, and the social consequences on both sides of the move.',
      },
      { kind: 'heading', text: 'Resource regions: boom, depletion, transformation' },
      {
        kind: 'para',
        text: 'Resource endowments are gifts with strings. The boom phase concentrates investment and population fast; the depletion phase exposes the region\u2019s dependence as grades fall and costs rise; and the transformation phase decides the region\u2019s fate — diversify or decline. The classic transformation playbook, visible in old industrial regions worldwide, runs: extend the resource\u2019s value chain (refine and manufacture locally rather than ship raw ore), develop substitute industries (equipment manufacture, services, tourism on industrial heritage), retrain the workforce, and repair the environment (subsidence zones into wetlands, headframes into museums) so the place can attract the people the new industries need.',
      },
      {
        kind: 'para',
        text: 'The evaluation questions live in the trade-offs. Extending the value chain raises income but deepens dependence if the resource still dominates; environmental repair costs money now and repays in attractiveness and health later; retraining works only if the new industries actually exist nearby. A strong answer names at least two pillars affected by each measure — an economic gain with a social cost, an environmental cost deferred — and that pillar-habit is exactly what the three-pillars section below formalizes.',
      },
      { kind: 'heading', text: 'Land management and environmental governance' },
      {
        kind: 'para',
        text: 'Land management is the deliberate matching of use to capability: farming on fertile plains, grazing on steppe with rotation to prevent desertification, terracing and afforestation on erodible slopes, wetland protection where floods buffer. Mismanagement has signatures the questions expect you to read — overgrazing and over-cultivation leading to soil loss and dust, over-extraction draining aquifers, encroaching construction eating farmland. Environmental governance then supplies the institutions: regulation and emission standards, protected areas, payment for ecosystem services, and cross-boundary coordination, since rivers and airsheds ignore administrative lines. International governance follows the same logic at scale — the Paris Agreement, cited in the open geography texts as the emblem of negotiated global resource responsibility, shows the same architecture of targets, reporting and review.',
      },
      {
        kind: 'para',
        text: 'National resource security frames the strategic layer: reliable access to the food, energy, water and minerals a country cannot safely depend on importing under stress. The instruments are strategic reserves, diversification of suppliers and energy mix, efficiency standards that stretch domestic supply, and — for food — maintaining arable-land floors and agricultural technology. Resource security questions usually ask you to weigh self-sufficiency against cost: full autarky is expensive; full dependence is fragile; the defensible answer is diversified sources plus reserves plus efficiency, argued with the region\u2019s actual constraints.',
      },
      { kind: 'heading', text: 'Three pillars, indicators and GIS' },
      {
        kind: 'para',
        text: 'Sustainability evaluation uses the three-pillar frame the open texts call the integration of environmental, social and economic considerations — sometimes drawn as a three-legged stool, where shortening any leg topples the seat. Environmental: emissions, water quality, forest and wetland cover, biodiversity. Social: health, education, equity, housing. Economic: income levels and diversity, employment quality, fiscal capacity. Composite frameworks such as the Sustainable Development Goals bundle indicators across all three, and a plan is judged sustainable only when its indicators move in the right directions together — growth funded by an aquifer drawn down fails the frame even though the economic leg looks splendid.',
      },
      {
        kind: 'para',
        text: 'The modern toolkit is geographic information technology. GIS layers maps — relief, land use, population, transport, pollution — in one coordinate frame, so planners can overlay a proposed road on farmland grades and flood zones and see conflicts before concrete pours; it powers site selection, service-area analysis and change detection. Remote sensing (satellite imagery) monitors the variables GIS stores — urban expansion, deforestation, crop health, glacier retreat — repeatedly and cheaply. Questions present this layer pair and ask what a planner could detect: the answer is the intersection — the data sees the change, the analysis attributes it.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Evaluating a coal region\u2019s transition plan',
        steps: [
          'Scenario: a region with two centuries of coal mining faces depleted seams. The plan: a coal-equipment manufacturing park, a logistics hub on a new rail link, retraining subsidies, and conversion of subsided land into a wetland park.',
          'Structure analysis: the plan attacks the depletion phase with diversification (equipment manufacture reuses existing engineering skills), connectivity (the rail hub recruits the tertiary sector), and human capital (retraining).',
          'Pillar check — economic: income source broadens from one commodity to manufacture plus logistics; risk falls. Social: retraining cushions miners; the wetland park improves health amenity. Environmental: mining pressure ends; land is remediated rather than abandoned.',
          'Trade-offs to name: equipment manufacturing still depends on the very industry that is shrinking — a second-order exposure; retraining fails wherever the new employers are distant; remediation funds compete with pensions.',
          'Verdict discipline: the plan is sustainable in direction, not guaranteed in outcome — state which indicators to watch over five years (employment mix, air and water quality, population trend) and the evaluation becomes evidence-based rather than rhetorical.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The Brundtland Report defines sustainable development as development that',
            options: [
              'maximizes present output regardless of future cost',
              'meets present needs without compromising future generations\u2019 ability to meet theirs',
              'preserves resources unused so future generations have more',
              'balances imports and exports across regions',
            ],
            answer: 1,
            explain: 'The 1987 definition balances present and future — neither exhausting the base (answer 1) nor freezing it (answer 3). It is the sentence every marker looks for.',
          },
          {
            q: 'A region\u2019s employment shifts from 60 per cent mining to 45 per cent services in two decades. What does this indicate?',
            options: [
              'the region is deindustrializing and failing',
              'a structural transition typical of development, though its cause (depletion versus diversification) needs checking',
              'statistical error in the census',
              'that services cannot count as real economic activity',
            ],
            answer: 1,
            explain: 'Primary-to-tertiary shift is the classic development trajectory. Whether it is healthy depends on the driver — planned diversification or forced depletion — which data on output and employment quality reveal.',
          },
          {
            q: 'As a core region\u2019s wages rise, labour-intensive factories relocate to the periphery. Which pairing of consequence is most defensible?',
            options: [
              'jobs leave the core entirely; the periphery gains nothing',
              'the core sheds routine jobs but retains design and finance; the periphery gains employment but inherits pollution',
              'both regions lose employment overall',
              'pollution always falls in both regions',
            ],
            answer: 1,
            explain: 'Industrial transfer splits the value chain: the core keeps high-value functions while routine production — and its emissions — move outward. Both standard gains and the standard externality travel together.',
          },
          {
            q: 'Which measure best illustrates strategic resource security policy?',
            options: [
              'exporting more raw materials for revenue',
              'holding strategic reserves while diversifying suppliers and raising efficiency standards',
              'banning all imports of every resource',
              'privatizing all water sources without regulation',
            ],
            answer: 1,
            explain: 'Security combines buffers (reserves), redundancy (diversified sources) and demand reduction (efficiency). Autarky is too rigid; dependence without buffers is too fragile.',
          },
          {
            q: 'A planner overlays satellite-derived urban expansion on farmland-grade maps in GIS. What is this procedure\u2019s purpose?',
            options: [
              'decorating maps for presentations',
              'detecting where growth conflicts with protected farmland so plans can be adjusted',
              'replacing the need for any field survey forever',
              'measuring only the population total',
            ],
            answer: 1,
            explain: 'Layer overlay is GIS\u2019s core operation: remote sensing detects the change, GIS attributes it against other layers, and the conflict zones enter the planning process.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Analysing a region by one factor alone — answers need physical, locational, human and structural inventories together. Treating resource endowment as destiny; institutions and location routinely beat geology. Judging a plan by its economic pillar only — sustainability questions exist to test the three-legged stool. Confusing industrial transfer (production moves) with deindustrialization (industry disappears) — the core usually keeps the high-value head functions. Naming GIS as if it were a single sensor: GIS stores and analyses layers; remote sensing observes. Forgetting that \u201csome\u201d in resource-security answers means diversified buffers, never autarky or naked dependence.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none, though the climate-feedbacks lesson deepens the environmental pillar. Follow with the economics lessons on market efficiency (resource pricing) and the environment-domain topics for planetary-scale sustainability. Primary reading: LibreTexts, Cultural Geography ch.13.5 \u201cSustainable Development Overview\u201d (Brundtland definition, pillars, resource-management strategies, Paris Agreement) and LibreTexts, Sustainability: A Comprehensive Foundation for the three-legged-stool framing and indicator design (both CC licensed).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Analyse a region on four inventories: physical, locational, human, structural.',
        'Core-periphery and industrial transfer explain most maps of uneven development.',
        'Resource regions live or die by transformation: value chains, substitutes, retraining, repair.',
        'Brundtland: meet present needs without stealing from future ones.',
        'Three pillars — environmental, social, economic — must move together.',
        'GIS layers the evidence; remote sensing watches the change; security needs buffers plus diversity.',
      ] },
    ],
  },
  {
    id: 'soc-culture-society-cultural-life',
    title: 'Culture and Society: How Shared Meanings Shape Us',
    domain: 'Social Sciences',
    field: 'Sociology',
    branch: 'Culture',
    tier: 'core',
    concepts: [
      'Culture: shared values, beliefs, norms, language, symbols',
      'Material versus nonmaterial culture',
      'Culture versus society',
      'Norms: folkways, mores, laws',
      'High, pop, sub- and counter-culture',
      'Cultural change: innovation, diffusion, contact',
      'Heritage preservation and creative transformation',
      'Ethnocentrism versus cultural relativism',
      'Three lenses: functionalism, conflict, interactionism',
    ],
    words: 1538,
    readMins: 8,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Everything human that is not biology is culture: the languages you think in, the holidays you keep, the foods you call food, the respect you show an elder, the songs that make a crowd one body. OpenStax\u2019s Introduction to Sociology (3e, ch.3) defines the territory precisely: culture consists of shared values (ideals), beliefs (which strengthen the values), norms and rules (that maintain them), language (that teaches them), symbols (that carry language), arts and artifacts, and collective identities and memories. Questions in this topic test whether you can take that everyday invisibility apart — name the elements, explain how culture changes, and argue both sides of its great debates.',
      },
      {
        kind: 'para',
        text: 'Two distinctions organize everything. First, culture versus society: culture is what the group shares — meanings, practices, things; society is the people who share them. The two are interdependent but not identical, and questions that hinge on the difference reward precise answers. Second, material versus nonmaterial culture: artifacts, buildings, tools and dress on one side; values, beliefs, norms and language on the other. The classic analytic question — why does the material change faster than the nonmaterial? — explains most phenomena labelled \u201cculture shock\u201d: the phone updates in a year, the etiquette around phones lags a decade behind.',
      },
      { kind: 'heading', text: 'The elements of culture' },
      {
        kind: 'para',
        text: 'Values are the culture\u2019s ideals — what a group holds good — and beliefs are the shared convictions that prop them up. Norms translate both into expectations, in ascending severity: folkways are everyday manners (queue or don\u2019t), mores carry moral weight (honesty obligations), and laws are norms a state enforces. Symbols are anything that carries shared meaning — a flag, a colour, a gesture — and language is the symbol system so powerful that it shapes what its speakers habitually notice: each language carves the world into named categories and hands the next generation the carving ready-made. Rituals — repeated, patterned actions from morning greetings to national days — stage the values so each generation rehearses them.',
      },
      {
        kind: 'para',
        text: 'Notice what the elements explain together: a single object can connect them all. A national flag is a material artifact (cloth), a symbol (the nation), a prop of beliefs (shared history), a site of norms (when it may touch the ground) and a ritual centre (ceremonies around it). Exam questions love exactly this layering — \u201cidentify the nonmaterial elements in this scenario\u201d — and the winning habit is to sort every detail of a scenario into the element it instantiates before answering.',
      },
      { kind: 'heading', text: 'Diversity within and between societies' },
      {
        kind: 'para',
        text: 'No society carries one culture cleanly. The standard taxonomy distinguishes high culture (the elite arts and their institutions), popular culture (the mass-market mainstream), subcultures (cohorts with their own styles inside the mainstream — skaters, programmers, regional cuisines) and countercultures (groups whose norms deliberately reject dominant ones). Between societies, diversity is the norm and contact is the engine of change. Diffusion carries practices outward — foods, scripts, technologies, sports — and has done since the silk roads; globalization accelerates it to near-instant, raising the homogenization debate: do global brands flatten local difference, or do local cultures absorb and localize the global (the same chain, different menu)? The open texts treat this as an open empirical question, which is exactly how an evaluation answer should frame it.',
      },
      {
        kind: 'para',
        text: 'Cultural change has three standard sources: innovation (a new practice invented inside), diffusion (borrowed from outside) and internal evolution (meanings shifting under new conditions — what \u201cfamily\u201d or \u201cwork\u201d publicly means). Preservation is the counter-force: societies designate heritage — monuments, crafts, performances, festivals — and protect it through archives, museums, listing and subsidy. The sophisticated position, and the one assessment questions reward, is that preservation and innovation are not enemies: a craft survives by finding new makers and markets; a tradition stays alive by being performed in ways each generation can enter. Inheritance without innovation embalms; innovation without inheritance forgets.',
      },
      { kind: 'heading', text: 'The great debates: relativity and lenses' },
      {
        kind: 'para',
        text: 'Ethnocentrism judges other cultures by one\u2019s own standards — comfortable, universal and the root of most cross-cultural misjudgement. Cultural relativism is the corrective discipline: understand a practice within its own cultural context before evaluating it. The assessment version of the debate is careful: relativism is a method for understanding, not a proof that every practice is beyond criticism, and strong answers hold both — explain first, evaluate second, and name the standard you are evaluating by. Questions supply a scenario (a visitor misreads a local custom) and ask what error was made: the expected answer names ethnocentrism and gives the practice\u2019s internal logic.',
      },
      {
        kind: 'para',
        text: 'Theory supplies the three standard lenses. Functionalism reads culture as machinery meeting needs: shared norms coordinate action, rituals renew solidarity, education transmits the code. Conflict theory reads the same culture suspiciously: whose values do the \u201cshared\u201d ones encode, who benefits from calling them universal, how do dominant narratives muffle subaltern experience? Symbolic interactionism works at street level: culture is remade constantly in face-to-face interaction as people negotiate what symbols mean. The exam move is matching lens to claim — a claim about solidarity is functionalist, about domination is conflict, about everyday meaning-making is interactionist — and the strongest answers can re-read the same festival through all three.',
      },
      {
        kind: 'example',
        title: 'Worked Example — One festival, three lenses and a debate',
        steps: [
          'Scenario: a city\u2019s autumn lantern festival, once a village rite, now draws a million visitors; the parade route is sponsored, the crafts are taught in weekend workshops, and diaspora communities fly in to march.',
          'Sort the elements: lanterns are material artifacts and symbols; the reunion duty they mark is a value carried by belief in family continuity; queueing rules and fire codes are norms; workshop teaching is transmission through language and demonstration.',
          'Functionalist reading: the festival renews solidarity across generations and regions — it manufactures the shared identity a city of migrants needs.',
          'Conflict reading: sponsorship sets the programme — whose heritage headlines, whose stalls pay fees, which neighbourhoods get routed past? Cultural performance and commercial interest are entangled.',
          'Interactionist reading: meaning is renegotiated on the street — a child asking why the lanterns are red is culture being rebuilt in one conversation. Change verdict: diffusion (tourism, diaspora) plus innovation (workshops) doing what heritage protection intends — keeping a tradition performed rather than preserved.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which pair correctly matches elements of culture?',
            options: [
              'laws are folkways enforced by the state',
              'beliefs are the ideals; values support the beliefs',
              'values are ideals; beliefs are convictions that support them; laws are enforced norms',
              'symbols are the same thing as artifacts',
            ],
            answer: 2,
            explain: 'The ladder runs ideals (values) up top, supporting convictions (beliefs), enforced expectations (laws) below. Swapping values and beliefs — answer 3 — inverts the standard definitions.',
          },
          {
            q: 'A society adopts smartphones everywhere, but etiquette about phone use in ceremonies lags for years. What does this illustrate?',
            options: [
              'material culture changing faster than nonmaterial culture',
              'nonmaterial culture changing faster than material culture',
              'cultural relativism in action',
              'a counterculture forming',
            ],
            answer: 0,
            explain: 'The artifact (material) spreads in months; the norms governing it (nonmaterial) lag. The gap is the standard anatomy of culture shock and of every etiquette panic.',
          },
          {
            q: 'A group whose norms deliberately reject the dominant culture\u2019s core values is called',
            options: ['a subculture', 'a counterculture', 'high culture', 'popular culture'],
            answer: 1,
            explain: 'Subcultures differ within the mainstream; countercultures oppose its core (deliberate rejection). High and popular culture classify prestige and reach, not opposition.',
          },
          {
            q: 'A visitor calls a local practice \u201cbackward\u201d without learning its context. The corrective discipline the visitor failed to apply is',
            options: ['ethnocentrism', 'xenophobia', 'cultural relativism', 'functionalism'],
            answer: 2,
            explain: 'Relativism requires understanding a practice within its own context before judging; the visitor\u2019s reflex judgement is textbook ethnocentrism.',
          },
          {
            q: '\u201cThe national curriculum teaches a single heroic story while regional histories go unrecorded — whose interests does the shared story serve?\u201d Which lens is asking?',
            options: ['functionalism', 'conflict theory', 'symbolic interactionism', 'demography'],
            answer: 1,
            explain: 'Asking whom the shared culture serves and whose experience it mutes is the conflict lens. Functionalism would ask what the story coordinates; interactionism, how it is transmitted in classrooms.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Conflating culture with society — one is the shared content, the other the people sharing it. Treating relativism as the claim that no practice can ever be criticized; it is first a method of understanding. Reading subculture and counterculture as synonyms; only the counterculture rejects the core. Assuming preservation and innovation oppose each other — living traditions do both. Forgetting that \u201cshared\u201d values can encode interests: the functionalist harmony story and the conflict suspicion story are complements, not rivals. Describing diffusion as a modern invention; it is as old as trade routes.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none. Follow with the socialization and stratification topics in the sociology set, and the globalization debates in the economics lessons, for how culture meets market power. Primary reading: OpenStax, Introduction to Sociology 3e, ch.3 \u201cCulture\u201d (openstax.org, CC BY) — sections 3.1 What Is Culture, 3.2 Elements of Culture, 3.3 High, Low, Pop, Sub, Counter-culture and Cultural Change, and 3.4 Theoretical Perspectives on Culture.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Culture = shared values, beliefs, norms, language, symbols, arts, memories; society = the sharers.',
        'Material changes fast, nonmaterial lags — the gap is culture shock.',
        'Norms escalate: folkways, mores, laws.',
        'High, pop, sub — and counterculture alone rejects the core.',
        'Change flows from innovation, diffusion, evolution; heritage lives by being re-performed.',
        'Explain relativistically, then evaluate by a named standard; match lens to claim.',
      ] },
    ],
  },
]

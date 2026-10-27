import type { SectionContent } from '../library'

// ============================================================================
// Digital SAT Reading & Writing — master lesson content (all 10 skill sections)
// Full SectionContent lessons for the ten official College Board skills of the
// adaptive digital SAT R&W section (bookId 'english-complete'): Words in Context,
// Text Structure and Purpose, Cross-Text Connections, Central Ideas and
// Details, Command of Evidence (textual + quantitative), Inferences,
// Boundaries, Form/Structure/Sense, Transitions and Rhetorical Synthesis.
// Each lesson carries strategy notes, authentic-style SAT items, elimination
// walkthroughs and 4-question quizzes. Verbal analogue of exam-sat-math.ts.
// ============================================================================

export const satRwContent: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: 'eng-r1-s1',
    readingTime: 8,
    prerequisites: [
      'Comfortable reading of 25–150 word passages on science, humanities and social science',
      'High-school vocabulary bank',
    ],
    intro: 'The assessment no longer tests obscure words — it tests whether you can judge which ordinary-sounding word fits a specific context. Every **Words in Context** item gives you a short passage with a blank (or an underlined word) and four plausible choices; only one survives contact with the text. The skill is precision reading: tone, logic and the exact meaning the author intends.',
    objectives: [
      'Predict a candidate word from context BEFORE reading the choices',
      'Eliminate answer choices that are too broad, too narrow, or wrong in connotation',
      'Handle "as used in the text, most nearly means" items for familiar words with multiple senses',
      'Recognise the distractor patterns: synonym traps, register mismatches, and partial-fit words',
    ],
    concepts: [
      {
        term: 'Predict-then-match strategy',
        kind: 'method',
        statement: 'Cover the choices, read the sentence with a pause where the blank sits, and whisper your own filler word; then pick the choice closest to your prediction.',
        detail: 'This blocks the most dangerous enemy: answer choices that sound beautiful but belong to a different sentence. Your prediction is a filter, not a verdict — if no choice matches, re-read the context for a nuance you missed, but never abandon the prediction method itself.'
      },
      {
        term: 'Connotation and register',
        kind: 'definition',
        statement: '**Connotation** is the emotional colouring of a word (thrifty vs stingy); **register** is the formality level (purchase vs buy). The correct the assessment answer matches both the denotation AND the connotation the passage carries.',
        detail: 'A science passage reporting a discovery uses neutral or positive words; a passage criticising a policy will not accept a neutral answer for a blank that follows a criticism. Watch intensifiers ("remarkably", "merely") around the blank — they telegraph the required connotation.'
      },
      {
        term: 'Secondary-meaning items',
        kind: 'insight',
        statement: 'When a common word is underlined ("currency", "check", "season"), the assessment is almost always testing a LESS common sense of it — let the surrounding syntax and topic decide.',
        detail: '"The currency of the idea" means prevalence, not money; "seasoned timber" means aged, not flavoured. If the everyday meaning produces nonsense in the sentence, hunt for the secondary sense. Classic tested words: exact, discriminate, address, novel, minute, flag.'
      },
      {
        term: 'Distractor taxonomy',
        kind: 'method',
        statement: 'Wrong answers typically fail by one of four faults: (1) wrong denotation, (2) right denotation, wrong connotation, (3) right idea, wrong part-of-speech fit, (4) true of the topic generally but not supported by this sentence.',
        detail: 'Fault (4) is the deadliest — the choice describes the passage accurately but does not fit the blank grammatically and logically. Test each survivor by substitution: read the full sentence aloud in your head with the choice inserted; any friction eliminates.'
      }
    ],
    examples: [
      {
        title: 'A science-context blank',
        problem: 'Passage: "Marine biologist Ana Castillo was _____ in her fieldwork: she logged water chemistry at the same five reef sites at dawn every single day for three years, regardless of weather." Which choice completes the text so it conforms to standard usage and matches the passage\u2019s portrayal? Choices: (A) sporadic (B) opportunistic (C) unwavering (D) ambivalent',
        steps: [
          { label: 'Step 1', text: 'Predict: "every single day for three years, regardless of weather" — my word: consistent / relentless.' },
          { label: 'Step 2', text: 'Screen choices: sporadic = occasional (opposite); opportunistic = exploiting chances (wrong connotation for disciplined work); ambivalent = conflicted (irrelevant); unwavering = steady, persistent.' },
          { label: 'Step 3', text: 'Substitute "unwavering": "unwavering in her fieldwork... every single day" — semantic and tonal fit.' },
          { label: 'Step 4', text: 'Elimination audit: (A) is the direct antonym trap; (B) misreads discipline as luck; (D) imports an emotion the passage never shows. Answer: unwavering.' }
        ],
        result: '(C) unwavering — the prediction "consistent" maps to it exactly.'
      },
      {
        title: '"Most nearly means" with a familiar word',
        problem: 'Passage: "Supporters touted the desalination plant as a panacea for the region\u2019s water woes, but ecologists cautioned that brine discharge could devastate coastal ecosystems." As used in the text, "panacea" most nearly means: (A) a profitable investment (B) a cure-all (C) a temporary measure (D) a controversial experiment',
        steps: [
          { label: 'Step 1', text: 'Syntax check: "touted X as a panacea FOR the woes" — the word names something that would solve all the problems.' },
          { label: 'Step 2', text: 'Predict: miracle solution / universal fix.' },
          { label: 'Step 3', text: 'Screen: (A) money is never mentioned; (C) "temporary" contradicts the hopeful framing of supporters; (D) "controversial" belongs to the ecologists\u2019 side, not the supporters\u2019 claim; (B) cure-all = universal remedy.' },
          { label: 'Step 4', text: 'The contrast pivot "but" confirms the setup: an over-optimistic label followed by a caution. Answer: a cure-all.' }
        ],
        result: '(B) a cure-all.'
      }
    ],
    keyTakeaways: [
      'Predict your own word before looking at choices — then match, don\u2019t browse.',
      'Match connotation and register, not just dictionary meaning.',
      'Underlined everyday words usually test their secondary sense.',
      'Substitute survivors into the sentence; friction kills choices.'
    ],
    quiz: [
      {
        q: 'The best FIRST move on a Words in Context item is to',
        options: ['read all four choices first', 'cover the choices and predict a word from context', 'choose the most advanced-sounding word', 'pick the word you have seen in other practice tests'],
        answer: 1,
        explanation: 'Step 1: Reading choices first anchors you to the test writers\u2019 phrasing. Step 2: Predicting from context builds an independent filter. Step 3: Advanced-sounding words are classic distractors. Step 4: Familiarity is not evidence — only the passage is.'
      },
      {
        q: 'In "the team\u2019s victory was hardly a foregone conclusion," the word "foregone" most nearly means',
        options: ['abandoned', 'premature', 'predetermined', 'celebrated'],
        answer: 2,
        explanation: 'Step 1: Parse: a victory that was "hardly a ___ conclusion" — something it was NOT. Step 2: The idiom "foregone conclusion" means an inevitable result. Step 3: So the sentence says the win was not predetermined. Step 4: "Abandoned" is the everyday sense of forgo, deployed as a trap.'
      },
      {
        q: 'A choice that accurately describes the passage\u2019s topic but does not fit the blank grammatically should be',
        options: ['chosen because it is true', 'eliminated immediately', 'kept as a backup answer', 'chosen if it sounds formal'],
        answer: 1,
        explanation: 'Step 1: Truth about the topic is not the test — fit in THIS sentence is. Step 2: Grammatical friction means the choice cannot complete the text correctly. Step 3: This is the deadliest distractor category precisely because it feels earned. Step 4: Eliminate and move on.'
      },
      {
        q: 'Which pair differs only by connotation?',
        options: ['big / large', 'thrifty / stingy', 'walk / stroll', 'begin / commence'],
        answer: 1,
        explanation: 'Step 1: Connotation is emotional colouring at the same denotation. Step 2: Thrifty (positive: careful) and stingy (negative: mean) both denote reluctance to spend. Step 3: Big/large are neutral synonyms; walk/stroll differ in manner; begin/commence differ in register. Step 4: the assessment blanks near criticism or praise demand this connotation radar.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.2
  {
    sectionId: 'eng-r1-s2',
    readingTime: 8,
    prerequisites: [
      'Words in Context reading habits (section 1.1)',
      'Basic paragraph anatomy: topic sentence, support, conclusion',
    ],
    intro: 'Why did the author write THIS paragraph instead of any other? **Text Structure and Purpose** items ask exactly that — sometimes about the whole passage ("main purpose"), sometimes about one underlined sentence ("what function does this sentence serve?"). Answer with the author\u2019s rhetorical goal, never with the topic alone.',
    objectives: [
      'Distinguish the main purpose question types: inform, argue, criticise, illustrate, introduce',
      'Analyse a sentence\u2019s function: evidence, concession, counterexample, transition, elaboration',
      'Map a passage\u2019s organisational pattern: problem–solution, compare–contrast, chronology, claim–support',
      'Avoid the "topic trap" answer that names the subject but not the purpose',
    ],
    concepts: [
      {
        term: 'Purpose verbs',
        kind: 'method',
        statement: 'Every correct main-purpose answer begins with an accurate verb: to present, to argue, to criticise, to describe, to illustrate, to reconcile, to speculate. The verb IS the answer — check it against the passage\u2019s rhetorical stance first.',
        detail: '"To present research on X" fits a neutral science report; "to argue that X is misunderstood" fits an advocacy piece. The stem "The main purpose of the text is to ___" rewards classifying the passage\u2019s stance before reading the options: is the author neutral, celebrating, attacking, or mediating?'
      },
      {
        term: 'Function-of-a-sentence items',
        kind: 'definition',
        statement: 'Function questions ask what an underlined sentence DOES — offers support, concedes a point, qualifies a claim, anticipates an objection, provides context — and the answer must name the sentence\u2019s job relative to the surrounding argument.',
        detail: 'Read the sentence BEFORE and AFTER the underlined one; the function lives in that relationship. A sentence that admits a weakness before the rebuttal is a concession; one that gives data following a claim is evidence; one that narrows a broad claim ("in most cases") is a qualification. The test\u2019s phrasing: "Which choice best describes the function of the underlined sentence?"'
      },
      {
        term: 'Organisational patterns',
        kind: 'notation',
        statement: 'Common the assessment structures: **problem–solution**, **compare–contrast**, **chronology/cause–effect**, **claim–evidence–counter–rebuttal**, and **introduce–illustrate** (general statement then examples).',
        detail: 'Signal words map the pattern: "however/whereas" \u2192 contrast; "consequently" \u2192 cause–effect; "for instance" \u2192 illustration; "although critics argue" \u2192 counterargument. Structure questions ask how a paragraph relates to the whole (e.g., "the second paragraph mainly serves to...") — answer with the paragraph\u2019s rhetorical job, not its content summary.'
      },
      {
        term: 'The topic trap',
        kind: 'insight',
        statement: 'A purpose answer that only names the subject ("to discuss coral reefs") is always wrong or incomplete; a correct answer couples subject + rhetorical action ("to explain why coral recovery is slower than expected").',
        detail: 'The trap works because it feels true. Test each choice by asking: could another article on the same topic have a different purpose? If yes, then the choice is a topic statement, not THE purpose of this text. Precision about the author\u2019s specific angle is the discriminator.'
      }
    ],
    examples: [
      {
        title: 'Main purpose of a science passage',
        problem: 'Passage (abridged): "Historians long credited a single 1712 inventor for the first steam engine patent. But archival work by Dr. Ifeoma Nwosu shows that at least three earlier mechanics had built working pressure devices, and that the celebrated patent merely recombined their designs. Nwosu\u2019s finding reframes the engine as a collective, incremental achievement." The main purpose of the text is to: (A) celebrate the 1712 patent (B) describe how new archival evidence revises a long-held attribution (C) explain how steam engines work (D) criticise historians for neglecting mechanics\u2019 biographies',
        steps: [
          { label: 'Step 1', text: 'Classify stance: the author reports a revision, not an attack or a celebration — "reframes" is the key verb.' },
          { label: 'Step 2', text: 'Test verbs: (A) celebrates — no; (C) explains mechanism — no engineering appears; (D) criticises historians — tone too hostile for "historians long credited".' },
          { label: 'Step 3', text: '(B) "describes how new evidence revises an attribution" matches the structure: old belief \u2192 new archives \u2192 revision.' },
          { label: 'Step 4', text: 'Topic trap check: (C) shares the topic (steam engines) but not the purpose. Answer: (B).' }
        ],
        result: '(B) — the passage exists to reassign credit based on new evidence.'
      },
      {
        title: 'Function of an underlined sentence',
        problem: 'Passage: "The valley\u2019s microclimate is unusually stable. [Underlined: True, a few frost events were recorded in 2019.] Still, no vineyard in the region has suffered crop loss in four decades." The underlined sentence mainly serves to: (A) undermine the claim of stability (B) concede an apparent exception before reinforcing the claim (C) introduce a new argument about 2019 (D) provide statistical proof of crop safety',
        steps: [
          { label: 'Step 1', text: 'Locate the neighbours: a stability claim before; a reinforcing "Still, no crop loss" after.' },
          { label: 'Step 2', text: 'The underlined sentence admits contrary data — that is a concession by structure (True... Still...).' },
          { label: 'Step 3', text: '(A) is wrong because the passage ultimately defends stability; (C) invents an argument the sentence does not make; (D) overstates — one datum is not statistical proof.' },
          { label: 'Step 4', text: '(B) names the concession-then-reinforcement job exactly.' }
        ],
        result: '(B) — a textbook concession.'
      }
    ],
    keyTakeaways: [
      'Classify the author\u2019s stance first; the purpose verb must match it.',
      'Function items: read the sentences on BOTH sides of the underlined one.',
      'Know the standard patterns and their signal words.',
      'Reject topic-only answers — purpose = subject + rhetorical action.'
    ],
    quiz: [
      {
        q: 'A "main purpose" choice that reads "to discuss Renaissance painting" is most likely wrong because it',
        options: ['is factually false', 'names the topic without stating a rhetorical goal', 'is too informal', 'uses the passive voice'],
        answer: 1,
        explanation: 'Step 1: The choice may be true about the passage\u2019s subject. Step 2: But purpose requires an action verb describing what the author DOES with the subject. Step 3: "To discuss" is the emptiest verb in the set. Step 4: This is the classic topic trap.'
      },
      {
        q: 'The phrase "although some researchers disagree" most often signals',
        options: ['a concession or counterargument', 'the main thesis', 'a statistical result', 'a definition'],
        answer: 0,
        explanation: 'Step 1: "Although" flags a contrast with the main line. Step 2: Citing dissenting researchers admits another view — a concession. Step 3: Expect the NEXT sentence to rebut or qualify. Step 4: Recognising the marker saves a full re-read.'
      },
      {
        q: 'In a problem–solution passage, the first paragraph typically',
        options: ['presents the solution', 'establishes the problem needing remedy', 'refutes the author\u2019s own claim', 'summarises all research to date'],
        answer: 1,
        explanation: 'Step 1: The pattern requires a problem before a remedy. Step 2: Paragraph one therefore stakes out the difficulty. Step 3: Solutions arrive after the stakes are set. Step 4: Knowing the template lets you predict where you are in the argument.'
      },
      {
        q: 'For a function question about an underlined sentence, you should FIRST',
        options: ['read the four choices', 'read the sentences immediately before and after the underline', 'check the sentence for grammar errors', 'count the paragraphs'],
        answer: 1,
        explanation: 'Step 1: Function is a relationship property, not a sentence property. Step 2: The neighbouring sentences reveal the rhetorical job. Step 3: Choices then get tested against that job. Step 4: Grammar checking belongs to the Conventions domain, not this one.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.3
  {
    sectionId: 'eng-r1-s3',
    readingTime: 8,
    prerequisites: [
      'Main-purpose and function skills (section 1.2)',
      'Comfort with argument vocabulary: claim, evidence, concession',
    ],
    intro: 'Paired passages on the assessment share a topic but never a lens. **Cross-Text Connections** items hand you two short texts (often a scientist and a historian, or two researchers with rival interpretations) and ask where they agree — or how one author would respond to the other\u2019s claim. The secret is mapping each author\u2019s exact position before touching the questions.',
    objectives: [
      'Summarise each text\u2019s central claim in a margin note before answering',
      'Identify genuine points of agreement versus superficial topic overlap',
      'Predict Author A\u2019s response to Author B using A\u2019s stated reasoning, not your opinion',
      'Detect perspective differences: emphasis, interpretation, methodology, values',
    ],
    concepts: [
      {
        term: 'Two-line summaries',
        kind: 'method',
        statement: 'After reading each text, write (mentally or on scratch paper) "T1 says ___; T2 says ___" in under ten words each — the discipline that makes every cross-text question tractable.',
        detail: 'Most errors come from blending the two authors into one averaged view. The summaries force separation. Pin the VERB of each claim: "demonstrates", "doubts", "reframes" — agreement questions test whether the claims\u2019 verbs and scopes match, not just their nouns.'
      },
      {
        term: 'Agreement vs overlap',
        kind: 'definition',
        statement: 'A genuine **point of agreement** is a statement BOTH authors would endorse as written; mere topic overlap (both mention wolves) is the standard distractor.',
        detail: 'Test each choice as a standalone claim: would Author 1 sign it? Would Author 2? Both signatures required. The strongest agreements are often methodological ("both treat earlier estimates as unreliable") rather than substantive — scope matters as much as subject.'
      },
      {
        term: 'Response prediction',
        kind: 'method',
        statement: 'For "how would Author 1 respond to Text 2\u2019s claim", locate the claim, find Author 1\u2019s closest statement on that issue, and infer the response from the LOGIC of Author 1\u2019s position — agreement, polite doubt, or direct rebuttal.',
        detail: 'Wrong answers quote Author 1 on an unrelated issue or borrow YOUR opinion. The correct response must be consistent with Author 1\u2019s evidence and attitude. If Text 1 shows the author trusts field data over models, then to a modelling claim the response is sceptical acceptance of limits, not endorsement.'
      },
      {
        term: 'Perspective axes',
        kind: 'insight',
        statement: 'Paired texts differ along identifiable axes: **emphasis** (what each thinks matters most), **interpretation** (same data, different meaning), **methodology** (lab vs field, model vs measurement), and **values** (what outcome each cares about).',
        detail: 'Name the axis and the answer choices sort themselves: a scientist and a poet on auroras disagree mainly in emphasis (mechanism vs experience); two economists on the same dataset disagree in interpretation. The "how do the texts differ" question is really asking WHICH axis.'
      }
    ],
    examples: [
      {
        title: 'Finding the agreement point',
        problem: 'Text 1: "Urban noise is a health hazard; stricter sound ordinances would yield measurable public-health benefits." Text 2: "Quiet zones are lovely, but enforcement costs fall on small businesses — any ordinance must be phased in with subsidies." Which statement would BOTH authors most likely agree with? (A) Noise ordinances should be rejected (B) The question of urban noise management involves trade-offs (C) Small businesses cause urban noise (D) Public health is unaffected by noise',
        steps: [
          { label: 'Step 1', text: 'Summaries: T1 = noise harms health, regulate it; T2 = regulation has costs, phase it in carefully.' },
          { label: 'Step 2', text: 'Both authors treat noise management as a live policy question with consequences on multiple sides — that is the shared ground.' },
          { label: 'Step 3', text: 'Screen: (A) T1 would never sign; (D) T1 explicitly denies; (C) neither text asserts; (B) both implicitly endorse — T1 by proposing policy despite objections, T2 by naming the costs.' },
          { label: 'Step 4', text: '(B) is a methodological agreement — the safest kind in paired passages.' }
        ],
        result: '(B) both authors see trade-offs in noise policy.'
      },
      {
        title: 'Predicting a response',
        problem: 'Text 1 (Dr. Alvarez): "Machine translation will never capture literary nuance because it lacks lived experience of culture." Text 2 (Engineer Rowe): "Our 2024 model passed blind literary-review tests; sceptics underestimate iterative improvement." Question: How would Alvarez most likely respond to Rowe\u2019s claim? (A) She would concede that translation is solved (B) She would argue that passing tests is not the same as possessing cultural understanding (C) She would cite the model\u2019s processing speed (D) She would deny that blind tests exist',
        steps: [
          { label: 'Step 1', text: 'Alvarez\u2019s principle: lived experience \u2260 algorithmic performance. Her summary verb: "never capture".' },
          { label: 'Step 2', text: 'Rowe\u2019s evidence is test performance. The clash is between two DIFFERENT yardsticks of success.' },
          { label: 'Step 3', text: 'The response consistent with Alvarez\u2019s yardstick: tests measure output similarity, not understanding — choice (B).' },
          { label: 'Step 4', text: '(A) abandons her thesis; (C) imports an irrelevant criterion (speed); (D) is factually extreme.' }
        ],
        result: '(B) — she would distinguish passing tests from genuine cultural understanding.'
      }
    ],
    keyTakeaways: [
      'Write two separate ten-word summaries before answering anything.',
      'Agreement requires BOTH signatures on the exact statement — watch scope.',
      'Predict responses from the author\u2019s own logic, never from your view.',
      'Diagnose the axis of difference: emphasis, interpretation, method, values.'
    ],
    quiz: [
      {
        q: 'The most common wrong-answer type on agreement questions is',
        options: ['a claim only one author would endorse', 'a claim phrased as a question', 'a claim about the reading passage\u2019s grammar', 'a claim with two clauses'],
        answer: 0,
        explanation: 'Step 1: Agreement demands both authors\u2019 endorsement. Step 2: Half-agreements feel familiar because one text did say something like it. Step 3: The other author\u2019s silence or opposition breaks the deal. Step 4: Always run the two-signature test.'
      },
      {
        q: 'Two texts use the same dataset but draw opposite conclusions. They differ in',
        options: ['topic', 'methodology of data collection', 'interpretation', 'register'],
        answer: 2,
        explanation: 'Step 1: Same data means collection method is shared. Step 2: Opposite conclusions from shared data = interpretation difference. Step 3: Topic is identical by construction. Step 4: Register is a style property, irrelevant to the clash.'
      },
      {
        q: 'Before answering "Author 1 would most likely respond to Text 2 by...", you must first',
        options: ['read the choices carefully', 'identify Author 1\u2019s position and reasoning on that specific issue', 'decide which author you personally agree with', 'count how many paragraphs each text has'],
        answer: 1,
        explanation: 'Step 1: The response must be consistent with Author 1\u2019s logic. Step 2: So locate Author 1\u2019s relevant claim and evidence first. Step 3: Personal opinion contaminates the inference. Step 4: Structure trivia never predicts rhetorical response.'
      },
      {
        q: 'A scientist and a poet both write about auroras, the scientist explaining solar particles, the poet describing wonder. They primarily differ in',
        options: ['factual accuracy', 'emphasis', 'reading level', 'publication date'],
        answer: 1,
        explanation: 'Step 1: Neither text need be inaccurate. Step 2: One foregrounds mechanism; the other foregrounds experience. Step 3: That selective attention is emphasis, the classic humanities–science pairing axis. Step 4: Difficulty and dating are non-issues here.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: 'eng-r2-s1',
    readingTime: 8,
    prerequisites: [
      'Skimming discipline for 25–150 word passages',
      'Distinguishing main idea from supporting detail',
    ],
    intro: 'Every passage has a spine — the **central idea** — and ribs: details that support it. the assessment items in this skill either ask for the spine ("Which choice best states the main idea?"), for a specific rib ("According to the text, ...?"), or for the best one-line summary of the whole skeleton. Nothing here requires outside knowledge; everything requires faithful reading.',
    objectives: [
      'Locate the central idea by weighing first/last sentences and repeated concepts',
      'Answer detail items by line-referencing the exact supporting sentence',
      'Select summaries that are accurate, complete and appropriately scoped',
      'Resist over-inference — the answer is IN the text, not beyond it',
    ],
    concepts: [
      {
        term: 'Finding the spine',
        kind: 'method',
        statement: 'The main idea usually lives in the first or final sentence, or is built from the concept repeated across the passage; test your candidate by asking whether every sentence in the text serves it.',
        detail: 'A good central idea has the right SCOPE: broad enough to cover all paragraphs, narrow enough to be this author\u2019s specific point. Too-broad choices ("science is important") and too-narrow choices (a single example) flank the correct middle. Science passages: the finding + its significance; humanities: the interpretation + its basis.'
      },
      {
        term: 'Detail triangulation',
        kind: 'method',
        statement: 'For "According to the text" items, match the question\u2019s key noun to its sentence in the passage, and treat that sentence as the sole evidence — no outside facts, no memory-based answers.',
        detail: 'Detail distractors are TRUE in the real world but absent from the passage, or present in the passage but answering a different question (the swapped-detail trap). Physically locate the line before choosing; the assessment orders these items roughly in passage order, which speeds the hunt.'
      },
      {
        term: 'Summary quality',
        kind: 'definition',
        statement: 'A correct summary is (1) accurate to the text, (2) complete — covering beginning AND end of the passage — and (3) proportional, giving no single example more weight than the passage does.',
        detail: 'Summaries that cover only paragraph one fail completeness; summaries that add a claim the passage never makes fail accuracy; summaries that inflate a minor aside fail proportion. Mentally fuse first-and-last-sentence content, then match that composite against the choices.'
      },
      {
        term: 'Over-inference guard',
        kind: 'insight',
        statement: 'Central-idea and detail answers never require knowledge beyond the text; if a choice needs an assumption the passage never states — however reasonable — it is wrong.',
        detail: 'The digital the assessment deliberately writes choices that are tempting to a knowledgeable student: a biology passage about one reef study may include a choice stating a textbook fact about reefs that THIS study never established. The passage is a closed universe; read like a lawyer, not a fan.'
      }
    ],
    examples: [
      {
        title: 'Selecting the best summary',
        problem: 'Passage: "Bees navigate by polarised light — a fact long established. New research adds a wrinkle: on overcast days, foraging bees switch to a landmark-based strategy, recalling the geometry of meadow edges. The discovery suggests cognitive flexibility rather than a single hard-wired system." Which choice most accurately summarises the text? (A) Bees are poor navigators when skies are cloudy (B) Recent findings show bees deploy multiple navigation strategies depending on conditions (C) Polarised light is the only reliable navigation cue in nature (D) Researchers disagree about bee intelligence',
        steps: [
          { label: 'Step 1', text: 'Composite of first + last sentences: known mechanism (polarised light) + new finding (landmark backup) + significance (flexibility).' },
          { label: 'Step 2', text: 'Test scope: (A) distorts — switching strategy is not poor navigation; (C) contradicts the new evidence; (D) invents a disagreement — the study builds on, not against, prior work.' },
          { label: 'Step 3', text: '(B) captures mechanism plural + condition-dependence + the newness ("recent findings").' },
          { label: 'Step 4', text: 'Proportion check: (B) does not over-credit the overcast detail nor omit the classical polarised-light fact. Answer: (B).' }
        ],
        result: '(B) bees flexibly combine navigation strategies as conditions demand.'
      },
      {
        title: 'Swapped-detail trap',
        problem: 'Passage: "The 1889 census undercounted river villages because enumerators travelled by rail; the 1901 census used local guides and added 12,000 residents." Question: According to the text, why did the 1901 count succeed? (A) Enumerators travelled by rail (B) Local guides improved coverage (C) The population grew by 12,000 (D) River villages were relocated',
        steps: [
          { label: 'Step 1', text: 'Locate the 1901 sentence: "used local guides and added 12,000 residents".' },
          { label: 'Step 2', text: 'The causal element for success is the method change: local guides.' },
          { label: 'Step 3', text: '(A) is the 1889 REASON for failure — swapped detail; (C) is the result, not the cause; (D) is fabricated.' },
          { label: 'Step 4', text: 'Answer: (B) — method, not outcome.' }
        ],
        result: '(B) local guides improved coverage.'
      }
    ],
    keyTakeaways: [
      'Main idea = spine with correct scope; test it against every paragraph.',
      'Detail answers come from the located line only — outside truth is a trap.',
      'Summaries must be accurate, complete, proportional.',
      'If a choice needs an unstated assumption, eliminate it.'
    ],
    quiz: [
      {
        q: 'A main-idea choice that covers only the first paragraph is wrong because it is',
        options: ['grammatically flawed', 'incomplete in scope', 'too informal', 'a contradiction'],
        answer: 1,
        explanation: 'Step 1: The main idea must govern the WHOLE text. Step 2: First-paragraph-only choices are the too-narrow flank. Step 3: Grammar and register are not at issue here. Step 4: Scope is the criterion being tested.'
      },
      {
        q: 'A detail choice that states something true in reality but never mentioned in the passage must be',
        options: ['chosen if plausible', 'eliminated', 'chosen if scientifically correct', 'kept if it matches the topic'],
        answer: 1,
        explanation: 'Step 1: the assessment reading is a closed-book, closed-universe exercise. Step 2: The passage is the only admissible evidence. Step 3: Real-world truth without textual support fails the "according to the text" standard. Step 4: Eliminate without regret.'
      },
      {
        q: 'The fastest reliable way to find a passage\u2019s central idea is usually to',
        options: ['read only the middle sentence', 'weigh the first and last sentences plus repeated concepts', 'count the paragraphs', 'look for the longest sentence'],
        answer: 1,
        explanation: 'Step 1: Authors open with the thesis or close with the takeaway. Step 2: Repeated concepts mark sustained emphasis. Step 3: Paragraph count and sentence length are structural noise. Step 4: First + last + repetition triangulates the spine efficiently.'
      },
      {
        q: 'In summary items, giving a minor example the prominence of the thesis makes an answer wrong by failing',
        options: ['accuracy', 'proportion', 'grammar', 'originality'],
        answer: 1,
        explanation: 'Step 1: A summary must mirror the passage\u2019s weight distribution. Step 2: Inflating an aside distorts the text\u2019s shape even if every word is accurate. Step 3: That is a proportion failure, distinct from factual inaccuracy. Step 4: Correct summaries respect the author\u2019s emphasis ratios.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.2
  {
    sectionId: 'eng-r2-s2',
    readingTime: 9,
    prerequisites: [
      'Central-idea reading (section 2.1)',
      'Basic chart, table and line-graph literacy',
    ],
    intro: 'The digital the assessment quietly handed R&W students a lab instrument: informational graphics. **Command of Evidence** comes in two flavours — textual (which quotation or finding best supports a conclusion?) and quantitative (which table cell, bar or trend supports the claim — or completes the table consistently?). Both are about the marriage of claims and their proof.',
    objectives: [
      'Test each answer choice as a mini-premise for the stated conclusion',
      'Read tables and bar graphs for exact values, trends and comparisons',
      'Distinguish results that support a claim from results merely consistent with it',
      'Complete tables so every row follows the stated rule',
    ],
    concepts: [
      {
        term: 'The premise test',
        kind: 'method',
        statement: 'For "which finding, if true, would best support the conclusion" items, place each choice as a premise before the conclusion and ask: does the conclusion now FOLLOW more forcefully? Only one choice adds genuine support; the others are unrelated or weakly consistent.',
        detail: 'Support is directional: the finding must make the conclusion MORE LIKELY, not merely coexist with it. Strong support closes an alternative explanation or quantifies the claimed pattern. Distractors typically support a DIFFERENT conclusion the passage also mentions — the borrowed-evidence trap.'
      },
      {
        term: 'Quantitative evidence reading',
        kind: 'method',
        statement: 'Read the graphic\u2019s title, axes and units FIRST; then answer exactly what the stem asks — a value, a comparison, a trend direction, or a difference — citing specific cells or bars.',
        detail: 'Most quantitative errors are question-misreads: the stem asks for the LARGEST INCREASE and the student picks the LARGEST VALUE. Underline the comparison words in the stem. For line graphs, trend = direction over the labelled interval; for bar charts, watch legend order before declaring "taller means more of what".'
      },
      {
        term: 'Consistency completion',
        kind: 'definition',
        statement: 'Table-completion items give a rule (each row\u2019s quantities follow a stated relationship) and a partially filled table; the correct completion preserves the rule across every row, not just the visible ones.',
        detail: 'Strategy: express the rule as an arithmetic sentence (e.g., total = restored + lost), compute the missing quantity from any complete row to calibrate, then test each choice against the incomplete row. The wrong choices satisfy the table\u2019s surface pattern while breaking the stated rule — or vice versa.'
      },
      {
        term: 'Claim–data marriage',
        kind: 'insight',
        statement: 'A claim is supported only by data that would be DIFFERENT if the claim were false — data that discriminates between the claim and its rivals; data consistent with every rival explanation is not evidence.',
        detail: 'This is the deep logic the assessment tests: a study finding "bees visited both flower types" does not support "bees prefer red flowers" — the finding fits preference for blue too. Look for the asymmetry: the right answer should be surprising under the negation of the claim.'
      }
    ],
    examples: [
      {
        title: 'Textual evidence selection',
        problem: 'Claim to support: "The restoration programme has been effective." Which finding, if true, would most directly support the claim? (A) The river\u2019s history of pollution is long documented (B) Native fish abundance in restored stretches rose 40% while unmanaged stretches stayed flat (C) Volunteers enjoyed participating (D) Restoration programmes are popular worldwide',
        steps: [
          { label: 'Step 1', text: 'Identify the claim\u2019s key term: "effective" — effective at WHAT? Restoration implies ecological recovery.' },
          { label: 'Step 2', text: 'The discriminating evidence must show recovery AND attribute it to the programme — a comparison group does exactly that: restored vs unmanaged stretches.' },
          { label: 'Step 3', text: '(B) provides a 40% rise with a control comparison; the flat control rules out "the river recovered anyway".' },
          { label: 'Step 4', text: '(A) is background, (C) testimonial, (D) general praise — all consistent with failure. Answer: (B).' }
        ],
        result: '(B) — differential recovery with a control directly supports effectiveness.'
      },
      {
        title: 'Quantitative support from a graph',
        problem: 'A line graph shows Arctic sea-ice extent (million km\u00b2) for 1980–2020, declining from ~7.5 to ~4.5 with year-to-year wiggles. Claim: "Sea-ice extent has steadily declined since 1980." Which statement about the graph best supports the claim? (A) The 2012 point is the lowest shown (B) The overall trend slopes downward across the four decades despite annual fluctuations (C) The y-axis begins at zero (D) Sea ice reflects sunlight',
        steps: [
          { label: 'Step 1', text: 'The claim has two parts: downward direction + persistence ("steadily... since 1980").' },
          { label: 'Step 2', text: 'Support must address the TREND across the full interval, absorbing the fluctuations.' },
          { label: 'Step 3', text: '(B) states exactly that; (A) is a single-year fact that fits a noisy plateau too; (C) is graph hygiene; (D) is outside science.' },
          { label: 'Step 4', text: 'Answer: (B) — trend with fluctuation acknowledged.' }
        ],
        result: '(B) the downward four-decade trend, fluctuations included.'
      }
    ],
    keyTakeaways: [
      'Support = makes the conclusion follow; consistency alone is not evidence.',
      'Read title, axes, units first; underline the stem\u2019s comparison words.',
      'Table completions must satisfy the stated rule for every row.',
      'The best evidence discriminates the claim from its rivals (control groups, trends).'
    ],
    quiz: [
      {
        q: 'A finding that is consistent with a claim whether the claim is true OR false is',
        options: ['strong support', 'weak or no support', 'a counterexample', 'proof by contradiction'],
        answer: 1,
        explanation: 'Step 1: Evidence must be asymmetric — expected if the claim holds, surprising if it fails. Step 2: A finding compatible with both outcomes discriminates nothing. Step 3: That is precisely weak/no support. Step 4: Counterexamples point the OTHER way, against the claim.'
      },
      {
        q: 'The stem asks which city had the largest INCREASE in ridership. You should look for',
        options: ['the tallest bar', 'the difference between the two years for each city', 'the city with the largest population', 'the steepest axis'],
        answer: 1,
        explanation: 'Step 1: "Increase" is a change quantity, not a level. Step 2: Compute year-2 minus year-1 per city. Step 3: The tallest bar may belong to a city that was already high and flat. Step 4: Question-word discipline prevents the classic value/change swap.'
      },
      {
        q: 'In a textual-evidence item, a quotation that supports a DIFFERENT claim made in the passage is',
        options: ['correct if accurately quoted', 'a borrowed-evidence distractor', 'correct if well written', 'irrelevant to the task and automatically ungrammatical'],
        answer: 1,
        explanation: 'Step 1: The stem names one specific conclusion. Step 2: Evidence for another conclusion, however accurately quoted, misses the target. Step 3: This is the borrowed-evidence trap, the most popular wrong-answer design in this skill. Step 4: Accuracy of quotation is necessary, never sufficient.'
      },
      {
        q: 'For a table-completion item, the safest procedure is to',
        options: ['choose the roundest number', 'express the stated rule arithmetically and test each choice against it', 'average all visible cells', 'pick the row with the fewest blanks'],
        answer: 1,
        explanation: 'Step 1: The item defines a rule binding the columns. Step 2: Translate it into an equation (e.g., total = a + b). Step 3: Only the choice satisfying the equation for the incomplete row (and consistent with complete rows) survives. Step 4: Esthetics like round numbers are noise.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.3
  {
    sectionId: 'eng-r2-s3',
    readingTime: 8,
    prerequisites: [
      'Central-idea and evidence skills (2.1, 2.2)',
      'Conditional logic: if A then B, contrapositive reasoning',
    ],
    intro: '"Which choice most logically completes the text?" — the **Inferences** stem. You are handed an argument with the last step missing and must supply the ONLY conclusion the evidence licenses. Not the most interesting conclusion, not the one you believe: the one that must follow if the passage is true.',
    objectives: [
      'Treat the passage as a set of premises; derive what must follow',
      'Keep inference scope inside the passage\u2019s qualifiers ("most", "in this region")',
      'Eliminate choices that add new information or overgeneralise',
      'Apply contrapositive logic to conditional statements',
    ],
    concepts: [
      {
        term: 'Licensed conclusions',
        kind: 'definition',
        statement: 'An inference is correct when it MUST be true given the passage — the strongest statement supported without adding any assumption; the assessment rewards logical necessity, not creativity.',
        detail: 'Think of each passage as two or three premises with a slot after them. The correct answer is the least controversial sentence that could occupy the slot. If you can say "well, not necessarily" about a choice, it is out — that phrase is your elimination trigger.'
      },
      {
        term: 'Qualifiers are load-bearing',
        kind: 'insight',
        statement: 'Words like "most", "typically", "in this sample", "between 1850 and 1870" shrink claims; a correct inference respects every qualifier, while an overgeneralising choice quietly drops them.',
        detail: '"Most respondents preferred tea" licenses "more than half of respondents preferred tea" — nothing about the population, nothing about coffee haters. Watch for choices that upgrade "most" to "all", stretch "this sample" to "the species", or extend a time window. The expansion may be millimetres — but millimetres decide answers.'
      },
      {
        term: 'The contrapositive move',
        kind: 'method',
        statement: 'From "if P then Q" you may validly infer "if not-Q then not-P"; you may NOT infer "if Q then P" (converse) or "if not-P then not-Q" (inverse) — the assessment builds distractors from exactly these two fallacies.',
        detail: 'Passage: "If a manuscript used the iron-gall ink, it predates 1600." Correct inference: a manuscript dated 1700 did not use iron-gall ink. Wrong: a pre-1600 manuscript used iron-gall (converse — other inks existed); wrong: post-1600 manuscripts never used iron gall elsewhere (inverse + scope stretch).'
      },
      {
        term: 'Numerical inference discipline',
        kind: 'method',
        statement: 'When premises carry numbers, correct inferences respect interval logic: "more than 30" excludes exactly 30; "at least half" includes exactly half; combined premises bound, never pinpoint, unless arithmetic forces it.',
        detail: 'Classic the assessment pattern: "The archive holds 2,400 letters; more than half were catalogued before 1990; exactly 1,100 are from artists." From these: at least 1,201 catalogued early, so at most 1,199 late; letters from non-artists = 1,300 exactly. Choices offering "exactly 1,250 early" or "most letters are from artists" fail the arithmetic. Translate statements into inequalities on scratch paper.'
      }
    ],
    examples: [
      {
        title: 'Completing a research argument',
        problem: 'Passage: "A theatre troupe\u2019s 1597 ledger lists payments for costumes, scenery and a \'pyrotechnist\u2019 — yet the play performed that season is a quiet domestic comedy. Archivists therefore concluded that the troupe\'s records include expenditures for a SECOND production whose text is now lost. Therefore, ___" Which completion is best supported? (A) all Elizabethan theatres staged lost plays (B) the troupe staged at least one additional play that season beyond the comedy (C) pyrotechnics were common in domestic comedies (D) the ledger is unreliable',
        steps: [
          { label: 'Step 1', text: 'Premises: fireworks-related staff + scenery costs exist; the known play needs neither; archivists posit a lost second production.' },
          { label: 'Step 2', text: 'The licensed conclusion keeps the troupe\u2019s scope and the "at least one" quantity: another production happened.' },
          { label: 'Step 3', text: '(A) inflates one troupe to all theatres; (C) contradicts the "quiet comedy" framing; (D) attacks the evidence the argument uses.' },
          { label: 'Step 4', text: 'Answer: (B) — the minimal necessary conclusion.' }
        ],
        result: '(B) the troupe mounted at least one more production that season.'
      },
      {
        title: 'Numerical inference',
        problem: 'Passage: "Of the 400 survey respondents, at least 70% commute by bike at least once a week, and exactly 150 respondents commute ONLY by bike." Which statement must be true? (A) Exactly 280 respondents bike weekly (B) At most 250 respondents sometimes use another mode (C) 150 respondents never bike (D) A majority commute only by bike',
        steps: [
          { label: 'Step 1', text: 'Bike-weekly $\\geq 280$ (not exactly — "at least"). Only-bike = 150 exactly.' },
          { label: 'Step 2', text: 'Sometimes-other = weekly-bikers minus only-bikers $\\geq 280 - 150 = 130$; non-weekly-bikers $\\leq 120$. Careful: "at most 250 sometimes use another mode" — the 400 total includes non-bikers who use other modes: non-weekly $\\leq 120$ plus sometimes-other $\\geq 130$ gives other-mode users between 130 and 250. At most 250 is forced by 400 \u2212 150 only-bikers.' },
          { label: 'Step 3', text: '(A) upgrades "at least" to "exactly"; (C) non-bikers $\\leq 120$, not 150; (D) 150 < half of 400 — a minority, so false.' },
          { label: 'Step 4', text: 'Answer: (B) — since 150 ride only by bike, at most 250 can involve another mode.' }
        ],
        result: '(B) at most 250 respondents use any other mode.'
      }
    ],
    keyTakeaways: [
      'Correct = must be true, no added assumptions; "not necessarily" eliminates.',
      'Qualifiers carry the answer — never let choices drop or upgrade them.',
      'Contrapositive valid; converse and inverse are the assessment bait.',
      'Translate numeric premises into inequalities before comparing choices.'
    ],
    quiz: [
      {
        q: '"If the comet is visible tonight, the sky is clear." Which inference is valid?',
        options: ['The sky is clear, so the comet is visible', 'The sky is not clear, so the comet is not visible tonight', 'The comet is not visible, so the sky is not clear', 'The sky is clear, so it will rain'],
        answer: 1,
        explanation: 'Step 1: The premise is "visible \u2192 clear". Step 2: Its contrapositive is "not clear \u2192 not visible" — valid. Step 3: Choice (A) is the converse fallacy; choice (C) is the inverse fallacy. Step 4: Only the contrapositive preserves truth.'
      },
      {
        q: 'A passage states "most of the gallery\u2019s paintings are landscapes." A choice reading "all of the gallery\u2019s paintings are landscapes" should be',
        options: ['chosen as a stronger version', 'eliminated for overgeneralisation', 'chosen if the gallery is small', 'kept if no other choice fits'],
        answer: 1,
        explanation: 'Step 1: "Most" means more than half, possibly not all. Step 2: "All" claims universality the passage never grants. Step 3: That upgrade is the standard overgeneralisation trap. Step 4: Eliminate — strength beyond the evidence is a fault, not a virtue.'
      },
      {
        q: 'The best mental test for an inference choice is',
        options: ['"Could this be interesting?"', '"Must this be true if the passage is true?"', '"Would a friend agree?"', '"Is this the longest choice?"'],
        answer: 1,
        explanation: 'Step 1: Inference = logical necessity from premises. Step 2: The necessity test catches every over-reach. Step 3: Interest and popularity are rhetorical, not logical criteria. Step 4: Length correlates with distractor design, not truth.'
      },
      {
        q: '"Fewer than 12 volunteers attended each session." Which must be true?',
        options: ['Exactly 11 attended some session', 'No session reached 12 volunteers', 'Attendance was declining', 'At least 12 volunteered in total'],
        answer: 1,
        explanation: 'Step 1: "Fewer than 12 per session" bounds every session below 12. Step 2: So no session reached 12 — the direct restatement. Step 3: Exactly 11 is possible but not forced; decline is a trend claim the data does not make; total volunteers is unconstrained. Step 4: Restatements of bounds are the safest licensed inferences.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: 'eng-r3-s1',
    readingTime: 9,
    prerequisites: [
      'Recognising independent versus dependent clauses',
      'The comma, semicolon and period as boundary tools',
    ],
    intro: 'Sentence boundaries are the traffic rules of Standard English. **Boundaries** items hand you a text with a blank at a clause junction and four options that splice the same clauses together with different punctuation and conjunctions. Your job: identify whether each side is a full sentence, then choose the legal join — and only one is legal.',
    objectives: [
      'Test any clause for independence: subject + finite verb + complete thought',
      'Join independent clauses correctly: comma + FANBOYS, semicolon, or period',
      'Punctuate supplements — nonessential phrases, appositives, interrupters — with comma pairs or dashes',
      'Spot and fix fragments, run-ons, comma splices, and unwanted boundary punctuation',
    ],
    concepts: [
      {
        term: 'The independence test',
        kind: 'method',
        statement: 'Cover one side of the junction and read the other alone: if it could stand as a sentence (subject + conjugated verb + complete thought), it is an **independent clause**; if it leans ("because...", "which...", "walking to school"), it is a fragment on its own.',
        detail: 'Everything in Boundaries flows from this test. IC + IC requires a real join (,FANBOYS / ; / .). IC + fragment tolerates no boundary punctuation between them. Run-ons and comma splices are simply the two illegal ways of refusing this rule — the two most tested errors on the assessment.'
      },
      {
        term: 'FANBOYS and semicolons',
        kind: 'law',
        statement: 'Two independent clauses may be joined by a **comma followed by a coordinating conjunction** (for, and, nor, but, or, yet, so) or by a **semicolon alone**; a comma alone is a splice, nothing is a run-on.',
        detail: 'The semicolon implies close logical connection — a fine stylistic choice the assessment tests directly. Colons may also join ICs when the second explains the first, but only after a complete sentence. Watch for the "comma + conjunctive adverb" trap: "however, therefore, moreover" are NOT FANBOYS — they need a semicolon before them ("...; however, ...").'
      },
      {
        term: 'Supplements and interrupters',
        kind: 'definition',
        statement: 'Nonessential material — appositives ("my mentor, Dr. Chen,"), participial phrases, and interrupters — must be **bracketed symmetrically**: comma-comma, dash-dash, or parentheses; a single comma of a pair is an error.',
        detail: 'Test essential vs nonessential by deletion: if the sentence survives without the material, cut it out mentally and check the remaining punctuation — pairs must close. Names after proper nouns, "such as" examples, and "which" clauses are usually nonessential; "that" clauses usually essential (no commas).'
      },
      {
        term: 'Unwanted punctuation',
        kind: 'insight',
        statement: 'A correct boundary answer sometimes adds NOTHING: subject-verb-object needs no comma between subject and verb, no comma before a direct object, and no punctuation splitting verb from its required complement.',
        detail: 'The assessment loves a comma between a long subject and its verb ("The biologist who spent decades in Antarctica, discovered...") — always wrong. Equally beloved: a comma cordoning off a necessary "that" clause. When in doubt, read the sentence aloud: breath needs are not punctuation rules, but friction usually marks a boundary error.'
      }
    ],
    examples: [
      {
        title: 'Choosing the legal join',
        problem: 'Text: "The lighthouse was automated in 1987 ___ the last keeper retired to the village below." Choices: (A) 1987, the (B) 1987; the (C) 1987 the (D) 1987, therefore the',
        steps: [
          { label: 'Step 1', text: 'Test both sides: "The lighthouse was automated in 1987" — independent. "The last keeper retired to the village below" — independent.' },
          { label: 'Step 2', text: 'IC + IC demands a real join. (A) comma alone = splice. (C) nothing = run-on. (D) comma + "therefore" = still a splice (however/therefore need a semicolon).' },
          { label: 'Step 3', text: '(B) semicolon: a legal, stylistically apt join for two closely related statements.' },
          { label: 'Step 4', text: 'Answer: (B).' }
        ],
        result: '(B) "1987; the" — semicolon correctly joins two independent clauses.'
      },
      {
        title: 'Appositive punctuation',
        problem: 'Text: "The festival honours Ada Lovelace ___ the first programmer ___ whose analytical engine notes anticipated modern computing." Choices for blank 1: (A) Lovelace, the ... (B) Lovelace the ... For blank 2: (C) programmer, whose (D) programmer whose',
        steps: [
          { label: 'Step 1', text: '"the first programmer" renames Ada Lovelace — a nonessential appositive needing paired punctuation.' },
          { label: 'Step 2', text: 'Blank 1 must open the comma: (A). Then "whose..." continues the supplement; the pair must close after "programmer": choose (C) with the closing comma.' },
          { label: 'Step 3', text: 'Deletion test: "The festival honours Ada Lovelace whose... computing" still works — the supplement is truly nonessential, commas legal.' },
          { label: 'Step 4', text: 'Combined answer: (A) + (C): "Ada Lovelace, the first programmer, whose..."' }
        ],
        result: 'Paired commas around the appositive: "Ada Lovelace, the first programmer, whose..."'
      }
    ],
    keyTakeaways: [
      'Run the independence test on each side of every boundary blank.',
      'IC + IC: comma+FANBOYS, semicolon, or period — never a bare comma or nothing.',
      'Nonessential material gets symmetrical bracketing; one open comma without its partner is an error.',
      'Sometimes the right answer adds no punctuation at all — never punctuate subject-verb or verb-object.'
    ],
    quiz: [
      {
        q: 'Which is a comma splice?',
        options: ['The rain stopped, and we left', 'The rain stopped; we left', 'The rain stopped, we left', 'The rain stopped. We left'],
        answer: 2,
        explanation: 'Step 1: Both clauses are independent. Step 2: A comma alone between ICs is a splice — choice (C). Step 3: (A) has comma + FANBOYS "and" — legal. (B) semicolon — legal. (D) period — legal. Step 4: Spotting the missing conjunction is the whole game.'
      },
      {
        q: '"However", "therefore" and "moreover" join two independent clauses only when preceded by',
        options: ['a comma', 'a semicolon (or period)', 'a colon', 'no punctuation'],
        answer: 1,
        explanation: 'Step 1: These are conjunctive adverbs, not conjunctions. Step 2: They cannot legally follow a bare comma between ICs. Step 3: The rule: "...; however, ..." or "... . Therefore, ...". Step 4: A comma before "however" mid-splice is the assessment\u2019s most-planted trap.'
      },
      {
        q: 'A long subject must never be separated from its verb by',
        options: ['a semicolon', 'a comma', 'a dash', 'any punctuation is fine'],
        answer: 1,
        explanation: 'Step 1: Subject and verb form one grammatical unit. Step 2: Length tempts writers to breathe with a comma — Standard English forbids it. Step 3: Semicolons and dashes equally cannot intrude there. Step 4: The correct boundary answer often simply omits punctuation.'
      },
      {
        q: 'Nonessential phrases should be set off with',
        options: ['a single comma before them', 'symmetrical pairs (comma-comma or dash-dash)', 'a semicolon before', 'quotation marks'],
        answer: 1,
        explanation: 'Step 1: Supplements are grammatically removable islands. Step 2: Islands need matching shores: open and close with the same mark. Step 3: A lone comma leaves the sentence structurally open. Step 4: Deletion test first, then check BOTH brackets.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.2
  {
    sectionId: 'eng-r3-s2',
    readingTime: 9,
    prerequisites: [
      'Subject–verb identification under intervening phrases',
      'Pronoun basics: antecedent, case, agreement',
    ],
    intro: 'The second Conventions skill polishes the inside of sentences: **Form, Structure, and Sense**. The assessment plants agreement, tense, pronoun and modifier traps inside otherwise fluent prose, then asks which choice makes the text conform. Because the errors hide between the subject you see and the verb you reach, the discipline is structural: find the true grammatical core before judging any form.',
    objectives: [
      'Match verbs to true subjects across intervening phrases and indefinite pronouns',
      'Keep tense, mood and voice consistent with the passage\u2019s temporal frame',
      'Resolve pronoun–antecedent agreement and case (I/me, who/whom) errors',
      'Place modifiers beside what they modify and fix possessive/plural/contraction confusions',
    ],
    concepts: [
      {
        term: 'Cross-out the prepositional phrase',
        kind: 'method',
        statement: 'To find the true subject, mentally delete every phrase between subject and verb: "The collection of rare stamps (was/were) sold" — cross out "of rare stamps" — the subject is "collection", singular: **was**.',
        detail: 'Intervening plural nouns are the assessment\u2019s favourite camouflage. Also immune to camouflage: indefinite pronouns — each, every, either, neither, anyone, everyone, somebody, nobody — are ALWAYS singular; "none" and "some" match their noun of reference. "Either of the routes is passable." Memorise the singular list cold.'
      },
      {
        term: 'Tense and consistency logic',
        kind: 'law',
        statement: 'Verb tense must fit the passage\u2019s time frame and stay consistent unless a genuine time shift occurs; historical commentary uses present tense ("the author argues"), while narrated events follow their own sequence (past perfect for the earlier of two past events).',
        detail: 'The digital the assessment tests tense mainly through consistency and logic: a paragraph in past tense suddenly offering "will" needs cause. Watch perfect forms: "had painted" only when another past event follows as a reference point. Conditional pairs: "If the funding were approved, the dig would proceed" — hypothetical = were + would.'
      },
      {
        term: 'Pronoun agreement and case',
        kind: 'law',
        statement: 'A pronoun agrees with its antecedent in number (the committee ... it, NOT they) and person; case follows function — subjects take I/we/who, objects take me/us/whom; possessives (its, their) never carry apostrophes.',
        detail: 'Ambiguity is also tested: a pronoun with two possible antecedents is wrong even when agreeable. Case shortcut for compound objects: strip the other person — "gave tickets to (Asha and) me" survives; "to I" collapses. Who/whom: he-answer \u2192 who, him-answer \u2192 whom ("Who called? He did." / "Whom did you call? ... him.").'
      },
      {
        term: 'Modifiers and frequently confused forms',
        kind: 'definition',
        statement: 'A modifier sits next to what it describes — a dangling or misplaced modifier describes the wrong noun; and the assessment\u2019s lexical traps: its/it\u2019s, their/there/they\u2019re, your/you\u2019re, whose/who\u2019s, fewer (countable) vs less (uncountable), comparative vs superlative.',
        detail: 'Dangling test: the noun after the opening participle must be its doer — "Walking through the museum, the paintings amazed her" fails (paintings don\u2019t walk). Comparative vs superlative: two items \u2192 -er/more; three or more \u2192 -est/most. "Between the two routes, the shorter one..." — never "shortest" of two. Countability: fewer delays, less traffic.'
      }
    ],
    examples: [
      {
        title: 'Intervening phrase trap',
        problem: 'Text: "The array of sensors ___ the bridge\u2019s vibration in real time." Choices: (A) monitors (B) monitor (C) have monitored (D) are monitoring',
        steps: [
          { label: 'Step 1', text: 'Find the core: "The array ___ the vibration." Cross out "of sensors".' },
          { label: 'Step 2', text: 'Subject = "array" (singular), despite the plural noun beside it.' },
          { label: 'Step 3', text: 'Present-tense context ("in real time") wants (A) monitors; (B) and (D) agree with "sensors" — the camouflage; (C) adds a perfect form nothing in the passage licenses.' },
          { label: 'Step 4', text: 'Answer: (A) monitors.' }
        ],
        result: '(A) "The array of sensors monitors..."'
      },
      {
        title: 'Pronoun case in a compound',
        problem: 'Text: "The director awarded the fellowship to Priya and ___." Choices: (A) I (B) me (C) myself (D) mine',
        steps: [
          { label: 'Step 1', text: 'The pronoun is the object of "awarded to" — an object slot.' },
          { label: 'Step 2', text: 'Strip trick: "awarded the fellowship to me" — correct; "to I" collapses.' },
          { label: 'Step 3', text: '"Myself" is reflexive — legal only when subject and object are the same person; "mine" is possessive.' },
          { label: 'Step 4', text: 'Answer: (B) me.' }
        ],
        result: '(B) "to Priya and me" — object case throughout.'
      }
    ],
    keyTakeaways: [
      'Delete intervening phrases to expose the true subject; each/every/neither/everyone are singular.',
      'Tense must be consistent and logically sequenced; hypotheticals use were + would.',
      'Pronouns: agree with the antecedent, take the right case, and refer unambiguously.',
      'Modifiers hug their nouns; know the confusion pairs and countability rules.'
    ],
    quiz: [
      {
        q: '"Neither of the essays ___ the required sources." The correct verb is',
        options: ['cite', 'cites', 'are citing', 'have cited'],
        answer: 1,
        explanation: 'Step 1: "Neither" is an indefinite pronoun — always singular. Step 2: Cross out "of the essays": the subject is "neither". Step 3: Singular subject needs "cites". Step 4: The plural noun in the phrase is pure camouflage.'
      },
      {
        q: 'Which sentence contains a dangling modifier?',
        options: ['Rushing to finish, Maya left her notes on the tram', 'Rushing to finish, the notes were left on the tram', 'Maya, rushing to finish, left her notes on the tram', 'Left on the tram, the notes were reprinted'],
        answer: 1,
        explanation: 'Step 1: An opening participle must describe the subject that follows. Step 2: In (B), the subject is "the notes" — notes cannot rush. Step 3: (A) and (C) put the rusher (Maya) as subject; (D) reassigns logically (notes were left). Step 4: (B) dangles.'
      },
      {
        q: 'Correct: "The data show that the eruption was ___ of the two events."',
        options: ['the most violent', 'the more violent', 'most violent', 'violenter'],
        answer: 1,
        explanation: 'Step 1: Two events are compared. Step 2: Two-item comparisons take the comparative: "the more violent". Step 3: Superlative "most" needs three or more. Step 4: "Violenter" is not a word — data never licenced it.'
      },
      {
        q: 'In "its/it\u2019s careful design", the correct choice for the possessive sense is',
        options: ['it\u2019s (apostrophe)', 'its (no apostrophe)', 'its\u2019', 'either spelling works'],
        answer: 1,
        explanation: 'Step 1: Possessive "its" is one of the pronoun family (his, hers, its) that never takes an apostrophe. Step 2: "It\u2019s" is exclusively the contraction of "it is/it has". Step 3: "Its\u2019" does not exist in Standard English. Step 4: Substitution test — "it is careful design" fails, so possessive "its" stands.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: 'eng-r4-s1',
    readingTime: 8,
    prerequisites: [
      'Clause relationships: addition, contrast, cause–effect (Boundaries helps here)',
      'Transition vocabulary bank',
    ],
    intro: 'Transitions are logical hinges: one blank, and the whole sentence must swing the right way. **Transitions** items give two statements and four candidate connectors — "however", "therefore", "in other words", "for example" — and exactly one matches the TRUE relationship between the statements. The discipline: name the relationship before shopping for the word.',
    objectives: [
      'Classify the statement pair\u2019s logical relationship before reading choices',
      'Master the assessment\u2019s transition families: addition, contrast, cause–effect, exemplification, emphasis, sequence, restatement',
      'Detect scope mismatches: contrast words before agreeing statements, additions between opposites',
      'Distinguish near-synonymous transitions by their exact logical contracts',
    ],
    concepts: [
      {
        term: 'Relationship-first method',
        kind: 'method',
        statement: 'Cover the choices, read statement 1, read statement 2, and say the relationship aloud in plain words ("same idea continued", "opposite", "consequence", "example of") — only then uncover and match.',
        detail: 'This reverses the fatal habit of plugging choices in one by one and nodding at whatever sounds smooth. Every wrong transition sounds smooth read aloud; only the pre-named relationship discriminates. Two minutes of relationship taxonomy saves the whole item family.'
      },
      {
        term: 'The transition families',
        kind: 'notation',
        statement: '**Addition** (moreover, furthermore, in addition, also); **contrast** (however, nevertheless, on the contrary, in contrast, still); **cause–effect** (therefore, thus, consequently, as a result, hence); **exemplification** (for example, for instance, specifically); **restatement** (in other words, that is, namely); **sequence** (first, then, finally, subsequently); **emphasis** (indeed, in fact).',
        detail: 'The assessment\u2019s favourite confusions sit INSIDE families: "on the contrary" contradicts a negative statement and substitutes the truth — stronger than "however"\u2019s mere contrast; "for instance" introduces an example while "namely" introduces a specification of something already named. Learn the contracts, not just the vibes.'
      },
      {
        term: 'Contrast versus concession',
        kind: 'insight',
        statement: '"However" signals that statement 2 pushes back on statement 1; "admittedly"/"granted" signal that statement 2 CONCEDES before an implied rebuttal — the assessment tests this directionality by placing the pivot word mid-argument.',
        detail: 'Read the pair with the pivot blanked: "The evidence is voluminous. ___ , it is circumstantial." The second statement LIMITS the first — that is concession-contrast: "However"/"Nevertheless"/"Granted" all fit; "Moreover" (addition) and "Therefore" (consequence) break the logic. Direction is decided by which statement is the point and which is the pressure.'
      },
      {
        term: 'Example versus cause',
        kind: 'method',
        statement: 'If statement 2 could begin "for instance" — it instantiates statement 1 (exemplification); if it could begin "as a result" — it follows from statement 1 (cause–effect); mixing these two families is the most common two-way elimination on the test.',
        detail: 'Test by reordering: an example can be swapped for a different instance without breaking the logic; a consequence cannot be swapped at will because it is CAUSED. "The storm damaged the pier. ___ , the ferry route closed." — the closure results from the damage: therefore/consequently. "The museum bans flash. ___ , guards patrol the galleries" — patrol illustrates enforcement: for example.'
      }
    ],
    examples: [
      {
        title: 'Naming before matching',
        problem: 'Text: "The startup\u2019s app reached a million downloads in its first year. ___ , the company struggled to convert users into paying subscribers." Choices: (A) Moreover (B) However (C) For instance (D) In other words',
        steps: [
          { label: 'Step 1', text: 'Name the relationship: downloads boomed — but revenue lagged. Statement 2 pressures statement 1: contrast.' },
          { label: 'Step 2', text: 'Match: (A) moreover = addition (logic runs same way — no); (C) for instance = example (no instance follows); (D) in other words = restatement (different claim, not a paraphrase).' },
          { label: 'Step 3', text: '(B) however = contrast — the only word honouring the push-back.' },
          { label: 'Step 4', text: 'Answer: (B) However.' }
        ],
        result: '(B) "However" — popularity versus monetisation is a contrast.'
      },
      {
        title: 'Inside-family discrimination',
        problem: 'Text: "Cephalopods edit their own RNA. ___ , an octopus can retune its neurons to temperature changes within hours." Choices: (A) Therefore (B) For example (C) On the contrary (D) Meanwhile',
        steps: [
          { label: 'Step 1', text: 'Relationship: the octopus sentence INSTANTIATES the general claim — exemplification.' },
          { label: 'Step 2', text: 'Screen: (A) therefore = consequence — the octopus is not caused by the general fact; (C) on the contrary = contradiction — the example agrees; (D) meanwhile = simultaneous contrast — no time conflict exists.' },
          { label: 'Step 3', text: '(B) for example: one species illustrating the class claim.' },
          { label: 'Step 4', text: 'Swap test: a squid example would work equally well — confirming exemplification over consequence. Answer: (B).' }
        ],
        result: '(B) "For example" — species-level instance of the class claim.'
      }
    ],
    keyTakeaways: [
      'Name the relationship BEFORE reading any choice — plug-in-and-nod is the trap.',
      'Know all seven families and their exact contracts.',
      'Contrast pushes back; concession yields before rebutting — direction matters.',
      'Swap test distinguishes example (swappable) from consequence (caused).'
    ],
    quiz: [
      {
        q: 'Statement 2 restates statement 1 in simpler words. The blank needs',
        options: ['however', 'in other words', 'for instance', 'consequently'],
        answer: 1,
        explanation: 'Step 1: Restatement is its own family. Step 2: "In other words" (or "that is", "namely") signals a paraphrase. Step 3: However contrasts; for instance exemplifies; consequently concludes. Step 4: Same proposition, new phrasing — restatement only.'
      },
      {
        q: '"The bridge was reinforced in 2018. ___ , inspectors still flagged corrosion in 2023." The best transition is',
        options: ['therefore', 'moreover', 'nevertheless', 'namely'],
        answer: 2,
        explanation: 'Step 1: Repair happened — yet problems persisted: contrast with concession flavour. Step 2: "Nevertheless" honours the push against expectation. Step 3: "Therefore" makes corrosion a result of reinforcement — absurd; "moreover" runs the same direction; "namely" specifies a name. Step 4: Answer: nevertheless.'
      },
      {
        q: 'A transition choice that is grammatically smooth but reverses the logical direction should be',
        options: ['chosen for flow', 'eliminated on logic', 'chosen if shorter', 'kept as a tiebreaker'],
        answer: 1,
        explanation: 'Step 1: Transition items test logic, not music. Step 2: Smoothness is universal among distractors. Step 3: Only the pre-named relationship discriminates. Step 4: Logic-first, always.'
      },
      {
        q: 'Which pair belongs to the SAME logical family?',
        options: ['however / therefore', 'for example / specifically', 'in contrast / consequently', 'first / moreover'],
        answer: 1,
        explanation: 'Step 1: Families: contrast (however, in contrast), cause–effect (therefore, consequently), exemplification (for example, specifically), addition/sequence (moreover, first). Step 2: (B) pairs two exemplifiers. Step 3: Every other option crosses family lines. Step 4: Answer: for example / specifically.'
      }
    ]
  },
  // ---------------------------------------------------------------- 4.2
  {
    sectionId: 'eng-r4-s2',
    readingTime: 8,
    prerequisites: [
      'Sentence-combining practice from Boundaries (3.1)',
      'Concision instinct: spotting redundancy',
    ],
    intro: 'The final R&W skill is the most practical: you receive a student\u2019s bullet-point notes and a rhetorical goal — "emphasise the contrast", "present the finding and its limitation", "introduce the artist with her signature technique" — and must craft the ONE sentence that uses the right notes, in the right order, with no fluff. It is writing under orders, the assessment\u2019s miniature editorship.',
    objectives: [
      'Parse the rhetorical goal before reading the notes or choices',
      'Select only the note content the goal requires — no more, no less',
      'Order information to serve the goal (emphasis first, context first, or contrast-second)',
      'Cut redundancy and wordiness; prefer the shortest choice that fully achieves the goal',
    ],
    concepts: [
      {
        term: 'Goal-first reading',
        kind: 'method',
        statement: 'Read the goal sentence twice ("Which choice most effectively accomplishes the goal of ___?"), underline its requirement verbs, and only then skim the notes — the goal is the rubric against which every choice is graded.',
        detail: 'The goal names the deliverable: to compare, to introduce, to emphasise a contrast, to state a cause. Choices fail by missing the target relationship, including irrelevant notes, or burying the required emphasis. Underlining goal verbs turns a fuzzy writing task into a checklist.'
      },
      {
        term: 'Note economy',
        kind: 'law',
        statement: 'Every bullet is optional inventory: correct answers deploy exactly the notes the goal needs; distractors smuggle in irrelevant detail or drop a load-bearing fact.',
        detail: 'If the goal is "explain why the dig was delayed", the notes about the site\u2019s discovery year are cargo — attractive, tested, wrong. Conversely, a delay goal answered without the flood note fails completeness. For each choice, audit: which notes does it use? Which does the goal demand? Set equality or elimination.'
      },
      {
        term: 'Emphasis placement',
        kind: 'insight',
        statement: 'English grants end-position and main-clause status the greatest emphasis; goals like "highlight the surprise" are met by putting the surprising content in the main clause (or at the end), not in a subordinate "although..." pocket.',
        detail: 'Compare: "Although the manuscript was unsigned, scholars attribute it to the monastery\u2019s best scribe" (emphasis on attribution) versus "Although scholars attribute it to the monastery\u2019s best scribe, the manuscript is unsigned" (emphasis on anonymity). Same facts, opposite spotlights — the assessment grades the spotlight, not the facts.'
      },
      {
        term: 'Concision and redundancy',
        kind: 'method',
        statement: 'Among choices that achieve the goal, the shortest complete one wins; redundancy patterns include doubled synonyms ("end result", "plan ahead for the future"), restated ideas, and empty openers ("It is a fact that...").',
        detail: 'Concision is not brevity at all costs — a choice that is shorter but drops a goal-required note loses to a longer complete one. The rule: shortest among ADEQUATE options. Common the assessment redundancies: "annual per-year", "past history", "combine together", "basic fundamentals". Also eliminate meta-language ("this essay will discuss...") in favour of direct statement.'
      }
    ],
    examples: [
      {
        title: 'Synthesis with a contrast goal',
        problem: 'Notes: • Rani manufacturers\u2019 guild funded the 1521 bridge • bridge rebuilt in stone in 1589 • wooden original survived only 30 years. Goal: "emphasise how briefly the original bridge served." (A) The Rani manufacturers\u2019 guild funded the bridge, which was rebuilt in stone in 1589. (B) Though the stone bridge dates to 1589, the wooden original served for just three decades. (C) Bridges in the region were often wooden before 1600. (D) The guild funded the 1521 bridge, and builders used wood.',
        steps: [
          { label: 'Step 1', text: 'Goal keywords: "briefly", "original". Required notes: wooden original\u2019s short life; stone rebuild as the contrast frame.' },
          { label: 'Step 2', text: '(A) mentions the rebuild but never the brevity — goal miss. (C) is off-notes generalisation. (D) has no dates, no duration, no contrast.' },
          { label: 'Step 3', text: '(B) frames stone as the concession and the wooden lifespan as the main point — emphasis exactly where the goal demands.' },
          { label: 'Step 4', text: 'Concision audit: (B) is also the tightest. Answer: (B).' }
        ],
        result: '(B) "Though the stone bridge dates to 1589, the wooden original served for just three decades."'
      },
      {
        title: 'Redundancy elimination',
        problem: 'Goal: "state the finding concisely." Notes: • study observed bees for two summers • bees visited blue flowers 60% more often than red. (A) Over the course of two consecutive summer seasons, researchers observed and witnessed bees visiting blue flowers 60% more often. (B) Bees visited blue flowers 60% more often than red. (C) Blue flowers were visited more often, 60% more, by bees, in the study. (D) The two-summer study found that bees visited blue flowers 60% more often than red flowers.',
        steps: [
          { label: 'Step 1', text: 'Goal needs: the finding (60% preference) — the study duration is optional context, not emphasised.' },
          { label: 'Step 2', text: '(A) doubles verbs ("observed and witnessed") and inflates duration — redundant. (C) is tangled and splits the statistic awkwardly. (B) is shortest but drops the red-flower comparison target and any study framing — arguably adequate, but (D) keeps the comparative basis AND stays clean.' },
          { label: 'Step 3', text: 'Between (B) and (D): "60% more often" needs a "than" — (B) supplies it, but (D) does too, plus attribution. The goal "state the finding" is fully met by (D) with minimal extra weight; (B)\u2019s missing comparison object makes it less precise.' },
          { label: 'Step 4', text: 'Answer: (D) — complete, attributed, concise.' }
        ],
        result: '(D) "The two-summer study found that bees visited blue flowers 60% more often than red flowers."'
      }
    ],
    keyTakeaways: [
      'Read the goal first; its verbs are the grading rubric.',
      'Audit which notes each choice uses — relevance beats completeness of inventory.',
      'Emphasis lives in main clauses and end position; match it to the goal.',
      'Shortest ADEQUATE choice wins; redundancy patterns are drilled answers.'
    ],
    quiz: [
      {
        q: 'The first thing to read in a Rhetorical Synthesis item is',
        options: ['the answer choices', 'the rhetorical goal', 'the longest note', 'the passage title'],
        answer: 1,
        explanation: 'Step 1: The goal defines success for the sentence. Step 2: Reading choices first invites being charmed by fluent but off-target options. Step 3: Notes are inventory; the goal is the order form. Step 4: Goal-first, always.'
      },
      {
        q: 'A choice that uses an irrelevant note from the list should be',
        options: ['chosen for completeness', 'eliminated for cargo', 'chosen if grammatically perfect', 'kept if it is the longest'],
        answer: 1,
        explanation: 'Step 1: Synthesis grades relevance to the goal. Step 2: Every note is optional inventory, not a checklist. Step 3: Irrelevant detail dilutes the requested emphasis. Step 4: Grammar cannot redeem off-goal content.'
      },
      {
        q: '"The end result was a final completion of the finished project" fails mainly by',
        options: ['fragmentation', 'redundancy', 'comma splice', 'pronoun error'],
        answer: 1,
        explanation: 'Step 1: "End result", "final completion", "finished project" each double their noun. Step 2: The sentence says "result" three times. Step 3: That layered restatement is textbook redundancy. Step 4: No boundary or agreement error exists — it is wordiness, not grammar.'
      },
      {
        q: 'To emphasise a surprising fact, place it',
        options: ['in a subordinate clause starting with "although"', 'in the main clause, ideally at the end', 'in parentheses', 'at the start of a "because" clause'],
        answer: 1,
        explanation: 'Step 1: Main clauses carry the assertion; end position carries the punch. Step 2: "Although" pockets content as concession — de-emphasis. Step 3: Parentheses signal afterthought. Step 4: "Because" clauses give reasons, not spotlight. Answer: main clause, end position.'
      }
    ]
  },
]

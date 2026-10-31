/**
 * Knowledge Universe — English & Comprehension — Chapter 01: Reading Skills & Strategies
 * 8 lessons · ~11,682 words
 * fields: Academic Reading, Reading & Literacy, Reading Skills, Reading Strategy
 * legacy sources: foundation-learning.ts, languages-literature.ts, x16-exam-skills.ts, x21-skills-pass.ts, x28-gaokao-skills-pass.ts, x35-nsw-hsc-pass.ts, x36-learning-science-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Reading & Literacy, Reading Strategy, Academic Reading, Reading Skills]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 fnd-reading-scientific-papers — Reading Scientific Papers Without Drowning
 *   01.2 fnd-sq3r-reading — Active Reading with SQ3R
 *   01.3 eng-critical-response-literature — The Critical Response: Analysing Texts and Writing About Literature
 *   01.4 eng-seven-choice-gap-filling — Restoring Removed Sentences: Gap-Filling as Discourse Reconstruction
 *   01.5 eng-argumentative-practical-texts — Reading Arguments and Practical Texts: Structure First, Details Second
 *   01.6 eng-paired-passages-authorial-choices — Paired Passages and Authorial Choices: Reading Two Texts at Once
 *   01.7 eng-skimming-scanning-timed-reading — Skimming and Scanning: Reading Strategy for Timed Exams
 *   01.8 eng-literary-narrative-passages — Reading Narrative Passages: Plot, Narrator and Inference in Literary Fiction
 */
import type { KnowledgeTopic } from '../../types'

export const englishUnifiedCh01: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'fnd-reading-scientific-papers',
    title: 'Reading Scientific Papers Without Drowning',
    domain: 'Foundation Learning',
    field: 'Reading & Literacy',
    branch: 'Reading Strategies',
    tier: 'intermediate',
    concepts: [
      'Papers are not textbooks',
      'The IMRaD skeleton',
      'The three-pass method',
      'The six questions to ask',
      'Figures first: unpacking the data',
      'Peer review, preprints and retraction',
      'Building a literature trail',
    ],
    words: 1461,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The first scientific paper a student reads usually goes badly, and the reason is a category error: papers are not textbooks. A textbook is engineered for a learner — sequenced, explained, merciful. A paper is a compressed report written for working peers who already hold the field\u2019s context: it assumes the background, compresses the methods into terse technical prose, and buries its reasoning in a discussion that argues as much as it reports. Reading it front to back at textbook speed produces exhaustion by page three and understanding by page none. The skill has its own techniques, and they are teachable.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Primary literature is where knowledge actually lives: every course, textbook and encyclopedia is downstream of papers. A student who can triage a paper in ten minutes, unpack a figure honestly, and judge how much the conclusions can bear has opened the one door that never closes — reading the frontier directly, in any subject, for life.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Almost all empirical papers share one skeleton: IMRaD — Introduction, Methods, Results and Discussion — bracketed by an abstract that condenses the whole, and a reference list that trails back into the field\u2019s history. The Introduction sells the question and previews the answer. Methods describes exactly what was done, in reproducible detail. Results presents the data — the figures and tables are the paper\u2019s actual payload. Discussion interprets, concedes limits, and claims significance. Knowing the skeleton converts the paper from a wall of prose into a set of drawers you can open in any order — and the order is never page one to page last.',
      },
      {
        kind: 'para',
        text: 'The canonical triage is Keshav\u2019s three-pass method. Pass one, five to ten minutes: read the title, abstract and introduction; read the section and sub-section headings only; read the conclusions; glance over the references, ticking off any you know. Then answer five quick checks — category (what type of paper is this?), context (which related work does it build on?), correctness (do the assumptions look valid?), contributions (what is new here?), clarity (is it well written?) — and decide: discard, skim, or deep-read. Most papers deserve the first outcome, and pass one is designed to tell you that cheaply.',
      },
      {
        kind: 'para',
        text: 'Pass two, up to an hour: read with care but skip the heavy proofs and derivations; look hard at every figure, diagram and table — axes, units, error bars, and whether the patterns shown actually support the sentences that cite them; jot which unread references matter for your background. Pass three, four or five hours for a beginner: the reviewer\u2019s pass — virtually re-implement the work, assuming the same starting point and trying to recreate both its steps and its conclusions, then judge the strong and weak assumptions. Nobody runs pass three on every paper; the discipline is knowing which of the three passes your current goal needs.',
      },
      {
        kind: 'para',
        text: 'The PLOS "Ten Simple Rules" paper distills a compatible checklist, and three of its rules belong in every reader\u2019s hands. Pick your reading goal first — a methods shopper, a skeptic and a surveying student read the same paper differently. Understand the author\u2019s goal — identify the article type (research, review, methods, commentary) before grading it. And ask the six questions of any study: what did the authors want to know; what did they do; why was it done that way; what do the results show; how did they interpret them; and what should come next — asked of the whole paper and of each figure within it. Rule nine of that same paper — talk about it — is the peer-instruction lesson in disguise: discussing a paper in a journal club forces the active reading that silent skimming evades.',
      },
      {
        kind: 'para',
        text: 'Credibility needs its own layer, because "it was published" is weaker evidence than most people assume. Peer review screens papers for competence and fit before publication — it does not certify truth; errata, debates and failed replications are part of the normal life of any finding. Preprints circulate before any review and should be read as drafts. And retraction exists: papers are withdrawn for error or misconduct, so a citation is worth checking at the source rather than trusting downstream. None of this is cynicism — it is the same calibration this library teaches for self-assessment, pointed outward at claims.',
      },
      {
        kind: 'para',
        text: 'Finally, build the literature trail. A paper is a node in a network: its introduction points backward to the work it stands on, and forward searches — who cited it — point to where the conversation went. The standard survey technique: find three to five recent papers in the area, run pass one on each, mine their reference sections for the repeated names and shared citations — those clusters are the field\u2019s load-bearing work. Read those next. The boundary against other lessons: research-methods topics own how studies are designed, and the comprehension lessons own general reading strategy; this lesson owns the genre — primary sources, read on purpose.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a student needs one research paper on spaced practice for an essay by Friday, from a search that returns forty candidates.',
          'Recall the governing idea: triage cheaply — pass one on many, pass two on few, pass three almost never.',
          'Apply: run ten-minute pass ones on five recent candidates: title, abstract, headings, conclusions, reference glance; answer category, context, correctness, contributions, clarity for each.',
          'State the result: three are discarded (commentary pieces, one barely related), one is kept as background (a review article — read pass two for its figures), and one empirical study earns a full pass two: every figure unpacked against its caption, methods skimmed for sample size, its two repeated references queued for next. Friday\u2019s essay now stands on papers actually read, not abstracts alone.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Undergraduates triage assigned readings with pass one before committing deep hours to the two that matter.',
          'Clinicians screen new studies for practice relevance, checking sample and outcome measures in the figures before trusting headlines.',
          'Engineers and data scientists run pass three on methods papers whose algorithms they are about to implement.',
          'Journal clubs run the six questions on one paper per session, distributing figures among members to unpack.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The first pitfall is linear reading — starting at page one, word by word, until morale dies; the skeleton exists to be raided. The second is trusting the abstract alone: it is an advertisement written by the authors, and the figures are where the receipts live. The third is confusing peer review with proof, or treating a preprint as settled — publication is a floor, not a ceiling. The fourth is collecting PDFs without a trail: a folder of unread papers is not a literature survey; repeated citations are.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'IMRaD', def: 'The standard paper skeleton — Introduction, Methods, Results and Discussion.' },
          { term: 'Three-pass method', def: 'Triage (5–10 min), careful skim with figures (≤1 h), then deep re-implementation (hours) — matched to your goal.' },
          { term: 'The five Cs', def: 'Category, context, correctness, contributions, clarity — the pass-one checks.' },
          { term: 'The six questions', def: 'Motivation, approach, rationale, results, interpretation, next steps — asked of paper and figures alike.' },
          { term: 'Peer review', def: 'Pre-publication screening by experts; a quality floor, not a certificate of truth.' },
          { term: 'Preprint', def: 'A manuscript circulated before peer review — read as a draft, cite with care.' },
          { term: 'Retraction', def: 'Formal withdrawal of a published paper — the reason citations are checked at the source.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Reading a research paper like a textbook fails because papers:',
            options: ['Are too short', 'Are compressed reports written for peers who already hold the context', 'Contain no useful information', 'Use simpler vocabulary than textbooks'],
            answer: 1,
            explain: 'Papers assume background and compress methods — front-to-back reading at textbook speed drowns before understanding.',
          },
          {
            q: 'Keshav\u2019s pass one is designed to:',
            options: ['Master the mathematics', 'Decide cheaply — in five to ten minutes — whether to discard, skim or deep-read', 'Memorize the references', 'Rewrite the abstract'],
            answer: 1,
            explain: 'Pass one buys the 5 Cs — category, context, correctness, contributions, clarity — before any real hours are spent.',
          },
          {
            q: 'The paper\u2019s actual data payload lives mostly in:',
            options: ['The abstract', 'The introduction', 'The figures, tables and their captions', 'The acknowledgments'],
            answer: 2,
            explain: 'Results figures and tables are the evidence; unpacking them — axes, units, error bars — is pass two\u2019s core work.',
          },
          {
            q: 'Peer review guarantees that a published paper is:',
            options: ['True and final', 'Free of all error', 'Merely screened for competence and fit — not certified as truth', 'Written by the journal editor'],
            answer: 2,
            explain: 'Errata, replication debates and retractions are normal science; publication is a floor, not a certificate.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Discuss what you read with the protégé-effect lesson — journal clubs are its native habitat — and grade your own paper-reading predictions with the metacognition lesson. The SQ3R lesson remains the right tool for textbooks; research-methods topics own how the studies you now read were designed.',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'fnd-sq3r-reading',
    title: 'Active Reading with SQ3R',
    domain: 'Foundation Learning',
    field: 'Reading & Literacy',
    branch: 'Reading Strategies',
    tier: 'core',
    concepts: [
      'Survey the text structure first',
      'Question headings into goals',
      'Read with a purpose',
      'Recite from memory',
      'Review to consolidate',
      'Metacognitive monitoring',
    ],
    words: 853,
    readMins: 4,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'SQ3R — Survey, Question, Read, Recite, Review — is a reading strategy published by Francis P. Robinson in 1946 to make textbook study active instead of passive. Within Reading Strategies it works because each stage gives the mind a specific job: the survey builds a map, questions set goals, reading hunts for answers, reciting checks memory, and reviewing repairs it. Together the five steps convert pages into recall you can use.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Readers with a purpose consistently outperform readers who merely scan, because a question in mind turns every paragraph into a search. SQ3R remains the backbone of most university study-skills courses taught today.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Before touching the body text, spend two minutes building the chapter map: title, headings, bold terms, diagrams, and the end-of-chapter summary and questions. This preview creates the mental scaffolding onto which new details can be hung.',
      },
      {
        kind: 'para',
        text: 'Rewrite each heading as a question before reading the section beneath it — asking how a cell makes ATP gives that section a target. Questions convert passive exposure into an information hunt with a built-in success test.',
      },
      {
        kind: 'para',
        text: 'Read only to answer your question, marking sparingly rather than painting the page yellow. Because attention has a target, mind-wandering drops and comprehension of the relevant material deepens.',
      },
      {
        kind: 'para',
        text: 'Close the book and say or write the answer in your own words, checking against the text only afterward. Recitation is where SQ3R overlaps with spaced repetition — recall, not recognition, is what gets stored.',
      },
      {
        kind: 'para',
        text: 'Within a day, answer each heading-question again from memory and repair the gaps you find. Distributed reviews of the same questions are what turn a chapter from visited into known.',
      },
      {
        kind: 'para',
        text: 'Throughout, the method forces you to notice what you do and do not understand — the essence of metacognition. Accurate self-monitoring is what lets you spend limited study time where it is actually needed.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: master a 25-page chapter on the Industrial Revolution for a class discussion two days away, within about 90 minutes.',
          'Recall the governing idea: SQ3R sequences preview, questioning, purposeful reading, recitation, and delayed review.',
          'Apply: survey the maps and headings (5 min); write 12 heading-questions (5 min); read to answer them with light marking (45 min); recite each answer from memory into notes (25 min); review the weak answers the next evening (10 min).',
          'State the result: the chapter is processed twice through active recall, and the question-answer notes double as ready material for the discussion and for later revision.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Textbook study in any subject becomes recall practice when chapters are attacked through heading-questions.',
          'Technical documentation becomes navigable when engineers survey structure first and read sections on demand.',
          'Exam preparation compresses when chapter questions become self-tests instead of triggers for re-reading.',
          'Professional reading — reports, papers, manuals — gets faster because the survey reveals which sections deserve deep attention.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The classic failure is skipping recitation because the reading felt clear, which leaves recognition instead of recall. Another is letting the survey expand into full reading — the preview must stay quick, or the method collapses into an ordinary single pass.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Survey', def: 'A quick structural preview of headings, figures, and summaries before reading.' },
          { term: 'Question', def: 'A heading rewritten as an interrogative goal that directs the reading.' },
          { term: 'Recite', def: 'Restating the key points of a section from memory with the book closed.' },
          { term: 'Review', def: 'Re-testing the recited material after a delay to repair gaps.' },
          { term: 'Metacognition', def: 'Awareness and control of your own understanding while learning.' },
          { term: 'Active reading', def: 'Reading with tasks — predicting, questioning, summarizing — rather than passive scanning.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'What is the correct order of the SQ3R steps?',
            options: ['Survey, Question, Read, Recite, Review', 'Skim, Quote, Rest, Reread, Reflect', 'Survey, Read, Question, Review, Recite', 'Question, Survey, Recite, Read, Review'],
            answer: 0,
            explain: 'The name is the sequence: Survey, Question, Read, Recite, Review, as Robinson defined it in 1946.',
          },
          {
            q: 'Which SQ3R step most directly builds durable memory?',
            options: ['Surveying the chapter map', 'Reciting answers from memory with the book closed', 'Highlighting while reading', 'Reading quickly the first time'],
            answer: 1,
            explain: 'Recitation is retrieval practice, and retrieval is what strengthens storage; the other steps merely prepare or check it.',
          },
          {
            q: 'A student spends fifteen minutes reading every figure caption in detail during the survey step. What went wrong?',
            options: ['Nothing — surveys should be thorough reads', 'The survey became a second reading pass instead of a quick preview', 'Figures should never be looked at before reading', 'The student should have skipped the questioning step'],
            answer: 1,
            explain: 'A survey is a two-minute map of structure, not detailed reading; dwelling on captions defeats the pacing the method depends on.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisite: comfortable reading fluency. Combine with spaced repetition so that recited answers are re-reviewed on expanding intervals, then advance to note-taking systems such as Cornell notes and to argument-mapping for analytical reading.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Survey builds the map; questions set the goals; reading hunts the answers.',
          'Reciting from closed-book memory is the retention engine of SQ3R.',
          'Delayed review of the same questions converts chapters into durable recall.',
          'Questions written from headings give every section a success test.',
          'The method works because it makes reading metacognitive rather than passive.',
        ],
      },
    ],
  },
  {
    id: 'eng-critical-response-literature',
    title: 'The Critical Response: Analysing Texts and Writing About Literature',
    domain: 'Languages & World Literature',
    field: 'Reading Strategy',
    branch: 'Critical Response & Close Study',
    tier: 'intermediate',
    concepts: [
      'Unseen texts: rapid comprehension and technique capture',
      'Short-answer discipline: question terms and mark budgeting',
      'Thesis as point of view, not plot summary',
      'Integrating quotations into your own sentences',
      'The paragraph engine: claim, evidence, analysis, link',
      'Close critical study of a single text: construction, context, evaluation',
    ],
    words: 1712,
    readMins: 9,
    addedOn: '2026-10-25',
    blocks: [
      { kind: 'heading', text: 'Why the response is its own craft' },
      {
        kind: 'para',
        text:
          "Reading a text well and responding to it well are two different skills, and examinations assess the second through the first. A reader can understand a passage perfectly and still lose marks by answering the wrong question, quoting the wrong lines, or narrating instead of analysing. The critical response is a genre with its own conventions — a defensible thesis, evidence woven into your own sentences, analysis that always lands on effect — and learning those conventions is not cheating; it is learning to write the way the discipline writes. This lesson treats the two places those conventions are tested hardest: the unseen texts you meet for the first time in the room, and the single text you have studied for a year and must still read freshly.",
      },
      {
        kind: 'para',
        text:
          "The craft divides by time available. With an unseen text you have minutes: comprehension first, technique capture second, and a compact answer built on the question's own terms. With a studied text you have months of knowledge and the opposite trap — writing everything you know instead of what the question asks. Both situations reward the same underlying engine, so this lesson builds the engine first, then tunes it for each situation.",
      },
      { kind: 'heading', text: 'Unseen texts: the short-answer toolkit' },
      {
        kind: 'para',
        text:
          "Read the question before the text. The question terms — how, to what extent, in what ways — tell you whether the answer needs a technique catalogue, a judgement, or a causal account, and the marks tell you how many moves to make: roughly one developed point per mark in short answers, with the final question usually demanding a mini-thesis and two or three evidence pairs. Reading the text with the question in hand turns a passive read into a search, and the search is where marks come from.",
      },
      {
        kind: 'para',
        text:
          "On the first pass, read for the situation: who is present, what changes, what the emotional weather is. On the second pass, hunt craft decisions — a shift in sentence length, an image where plain language would do, a structural surprise like a late reversal — and mark the two or three that best serve the question. Under examination pressure, breadth loses to depth: three quotations analysed to effect beat eight techniques named. And answer the question set, not a favourite one rehearsed beforehand; examiners can tell, and the question terms are the contract.",
      },
      {
        kind: 'example',
        title: 'A five-mark unseen question, budgeted',
        steps: [
          'Diagnose the question terms: if it asks how a setting shapes mood, the answer is causal, not descriptive.',
          'Budget: five marks means one strong opening claim plus three evidence-effect pairs, or claim plus two pairs and a link to the whole.',
          'Open with the claim in one sentence: the setting does something specific to the mood, named precisely.',
          'For each pair: quote briefly, name the craft decision, land on the effect for the reader.',
          'Close only if the question spans the whole text — one sentence tying the pairs to the text\'s larger purpose.',
        ],
      },
      { kind: 'heading', text: 'The thesis: a point of view, not a summary' },
      {
        kind: 'para',
        text:
          "Every extended response stands on a thesis: a sentence that makes a disputable claim about what the text does and how. The commonest failure is the summary thesis — a plot restatement with the verb suggests stapled on. The test is disagreement: could a competent reader hold a different view? If the claim is that the text uses imagery, no one disagrees; if the claim is that the text ultimately refuses the comfort its imagery keeps offering, a case must be made — and the making of it is the essay. Strong theses often stake a position on proportion or priority: which experience dominates, which value finally wins, what the text's closing note really withholds.",
      },
      {
        kind: 'para',
        text:
          "A thesis earns its keep by steering selection. Once the claim exists, everything quoted and analysed must serve it, and much of what you know must be left out — the hardest discipline for a well-prepared student. Plan for five minutes before writing: the thesis, the two or four moves that prove it, and the quotations that anchor each move. An essay with a weak thesis and excellent execution still reads as effortful and aimless; the one-sentence claim is the cheapest upgrade in the whole genre.",
      },
      {
        kind: 'callout',
        title: 'The evidence sandwich',
        tone: 'path',
        text:
          "Never end a sentence with a dropped quotation. Introduce the evidence in your own words, quote the few decisive words, and analyse what those words do — the bread of your sentence wraps the quotation so the voice stays yours throughout. If you cannot say what the quotation is evidence of, it does not belong in the paragraph.",
      },
      { kind: 'heading', text: 'The paragraph engine' },
      {
        kind: 'para',
        text:
          "A working analysis paragraph has four beats. The claim states the paragraph's move in support of the thesis — one idea, not two. The evidence is a short quotation, introduced so it reads as part of your sentence. The analysis is the longest beat: what the craft decision does, why the writer chose it, what a reader comes to feel or understand that paraphrase would lose. The link closes by returning to the thesis — not by repeating it verbatim, but by showing how this move advanced the claim. Markers reward paragraphs they can see the joints of; four-beat paragraphs have visible joints.",
      },
      {
        kind: 'para',
        text:
          "The chronic diseases are named and cured the same way. Waffle — sentences about how the composer skilfully uses techniques — says nothing and is deleted on sight. Plot-telling — narration standing in for analysis — is cured by refusing to quote any word that merely reports events. Technique-listing is cured by the effect test: every named device must be followed by what it achieves. And drifting off the question is cured in planning: write the question's key terms at the top of the page and check each planned paragraph against them before writing anything.",
      },
      { kind: 'heading', text: 'The close critical study' },
      {
        kind: 'para',
        text:
          "A year-long study of one text ends in a peculiar examination challenge: proving you can read a familiar work freshly. The close critical study rewards responses that treat the text as a made thing — how it is constructed, what its language repeatedly does, which scenes carry its argument — rather than as a story to be retold. Construction includes the large decisions: where the narrative begins and ends, who is permitted a voice, what is withheld. Language includes the small ones: the text's recurring images, its rhythm, its register shifts. The best answers trace a pattern across the whole text instead of hiking through it chapter by chapter.",
      },
      {
        kind: 'para',
        text:
          "Context in this module is not a biography dump; it is the story of value. Texts are argued over because different audiences at different times have prized different things in them — and the module explicitly asks for a personal, informed evaluation, which means you are allowed, after the evidence, to judge: what the text offers a reader now, and where it shows its age. The phrase informed is doing real work — evaluation follows analysis, never replaces it. A response that says what the text means to you without showing how the text works is an opinion; one that shows the machinery and then weighs it is criticism.",
      },
      { kind: 'heading', text: 'The reflective commentary' },
      {
        kind: 'para',
        text:
          "Where a course asks you to write creatively and then explain yourself, the commentary is a short critical mirror: it names the choices you made as a writer — form, voice, the stylistic features borrowed or refused — and ties each to the purpose the piece serves. It is written analytically, in the same technique-effect vocabulary as any other response, but its evidence is your own composition. The commentary rewards honesty about intent and restraint in length; it is a justification, not a second story.",
      },
      {
        kind: 'terms',
        items: [
          { term: 'thesis', def: "The one-sentence, disputable claim an extended response exists to prove." },
          { term: 'unseen text', def: "A passage read for the first time in the examination room; assessed through short-answer analysis." },
          { term: 'integrated quotation', def: "Evidence woven into your own sentence so the voice remains yours, rather than dropped in as a standalone block." },
          { term: 'effect', def: "The specific consequence of a craft decision on a reader's understanding or feeling; the landing point of all analysis." },
          { term: 'close critical study', def: "Sustained engagement with a single text's construction, language and contested value across contexts." },
          { term: 'reflective commentary', def: "A short analytical account of your own compositional choices and the purpose they serve." },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In a five-mark short answer on an unseen text, the best allocation of effort is:',
            options: [
              'name as many techniques as possible',
              'one claim plus three quotation-and-effect pairs, developed to a consistent depth',
              'a detailed plot summary followed by one quotation',
              'a personal opinion about whether the text is enjoyable',
            ],
            answer: 1,
            explain:
              'Short answers reward depth over breadth: roughly one developed evidence-effect pair per mark, all serving the question asked.',
          },
          {
            q: 'Which opening sentence is a thesis?',
            options: [
              'The novel tells the story of a family across three generations.',
              'The poem uses many images of nature.',
              'The play ultimately refuses the reconciliation its final scene seems to stage.',
              'The composer skilfully uses a variety of techniques.',
            ],
            answer: 2,
            explain:
              'Only the third makes a disputable claim a reader could argue with; the others are summary, inventory and filler.',
          },
          {
            q: 'The evidence sandwich requires that a quotation:',
            options: [
              'be at least one full sentence long',
              'be introduced and then analysed in your own words',
              'appear in every paragraph exactly once',
              'be the first sentence of each paragraph',
            ],
            answer: 1,
            explain:
              'Integration means your voice introduces the evidence and your voice analyses it; the quotation is the filling, not the meal.',
          },
          {
            q: 'In a close critical study, the strongest use of context is:',
            options: [
              'a paragraph on the author\'s biography',
              'showing how different audiences have valued or contested the text over time',
              'listing the year of publication and the literary movement',
              'avoiding context entirely because it is irrelevant',
            ],
            answer: 1,
            explain:
              'Context as the story of value — how reception and judgement shifted — feeds directly into the module\'s demand for an informed personal evaluation.',
          },
        ],
      },
      { kind: 'heading', text: 'Key takeaways' },
      {
        kind: 'list',
        items: [
          'Read the question before the text; the question terms are the contract your answer signs.',
          'Depth beats breadth everywhere: three analysed quotations outrank eight named techniques.',
          'Write from a disputable thesis and let it select your evidence — leaving things out is the discipline.',
          'Run the four-beat paragraph engine — claim, evidence, analysis, link — and let the joints show.',
          'Treat a studied text as a made thing: trace construction and language patterns, then evaluate informedly and personally.',
        ],
      },
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
    id: 'eng-paired-passages-authorial-choices',
    title: 'Paired Passages and Authorial Choices: Reading Two Texts at Once',
    domain: 'Languages & World Literature',
    field: 'Reading Strategy',
    branch: 'Paired Passages',
    tier: 'core',
    concepts: [
      'Per-passage reading: view, evidence, purpose',
      'Relationship classes: agree, qualify, oppose, extend',
      'Point-of-view attribution in paired texts',
      'Authorial choices: structure, diction, tone',
      'Purpose questions and the evidence behind them',
      'Cross-passage traps: similarity is not agreement',
      'Annotating for the questions, not the content',
    ],
    words: 1291,
    readMins: 6,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Paired-passage sets hand you two texts on the same question and then ask about each of them — and, more treacherously, about their relationship. The skill is bookkeeping under time pressure: for each passage separately, hold the author\u2019s view, the evidence offered, and the tone; only then model the relationship — do they agree, disagree, address different questions, or one qualify the other? Reading tests also probe the craft beneath the content: why this structural choice, why that word, what is the author doing by opening with an anecdote. Those authorial-choice questions reward the same habit from the other direction: treating every textual feature as a decision with a purpose.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Paired sets carry double the questions of a single passage, and the cross-passage items are where reading sections are designed to separate scores: the wrong answers are built from true statements about the wrong text. The authorial-choice items, meanwhile, reward a reusable lens — every paragraph you read anywhere can be asked what it is doing, not just what it says.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Per-passage summary line', def: 'After reading Passage 1, one sentence in your own words: "P1: author believes X, because Y, tone Z." Do the same for Passage 2 before touching the cross-passage questions. Every relationship item is answered from these two lines, not by rereading both texts in a panic.' },
          { term: 'Relationship classes', def: 'The standard taxonomy of paired texts: agreement (same conclusion), opposition (direct conflict), qualification (P2 accepts P1 in part, limits it in part), extension (P2 develops P1\u2019s point further), independence (different questions, no real contact). Most wrong options mislabel the class — an extension misread as disagreement, a qualification misread as full agreement.' },
          { term: 'Viewpoint attribution', def: 'In paired sets, knowing WHO holds a view is half the marks. Both authors quote experts and cite critics; an option that credits P2\u2019s author with P1\u2019s cited scientist\u2019s claim is a classic trap. Anchor every claim to its holder: the author, the author\u2019s source, or the author\u2019s opponents.' },
          { term: 'Authorial choice', def: 'A deliberate craft decision: opening with a scene, repeating a phrase, choosing "claimed" over "showed", structuring as problem-then-response. The testable claim is function — what the choice does to the reader\u2019s understanding or attitude — never just a description of the feature itself.' },
          { term: 'Tone and diction evidence', def: 'Tone answers must be provable from word choice: "measured" because the author hedges with might and some, "admiring" because the adjectives are uniformly positive. If you cannot point to two or three words that create the tone, the answer is an inference too far.' },
          { term: 'Similarity is not agreement', def: 'Two passages can share facts, cite the same study, even share values, and still disagree about the conclusion those facts support. The relationship question is about claims, not topics: agreement requires the same bottom line, not the same subject matter.' },
        ],
      },
      {
        kind: 'para',
        text: 'The workflow that survives time pressure is strict passage-first ordering. Read Passage 1 and its own questions before starting Passage 2 — most formats allow this and it halves the working-memory load. When the cross-passage questions arrive, answer them from the two summary lines: the relationship class first, then verify with one line-location per passage. For authorial-choice items, translate the question into function language before looking at options — "why does the author list three failed attempts?" becomes "what does the list establish?" — and then reject any option that merely restates content ("to describe three attempts") rather than naming the function ("to show the problem resisted easy solutions, setting up the breakthrough").',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'Mapping a disagreement set',
        steps: [
          'Passage 1 argues rewilding projects succeed when they restore a single keystone species; evidence: two reserves where reintroduced predators rebalanced ecosystems. Tone: confident, promotional.',
          'Passage 2 argues the same projects fail when exported carelessly; evidence: one reserve where a reintroduced predator devastated naive prey. Tone: cautious, corrective.',
          'Summary lines: P1 keystone restoration works; P2 keystone restoration is fragile and context-bound. Both accept keystone importance — the disagreement is about generalising.',
          'Relationship class: qualification, not opposition. P2 does not claim keystone restoration is wrong; it limits the scope of P1\u2019s success claim.',
          'Trap option: "P2 rejects the scientific basis of P1" — no: P2 cites the same mechanism. Another: "Both agree rewilding is always beneficial" — no: P2\u2019s existence is a caveat.',
          'Authorial-choice item on P2\u2019s single-example structure: the function is to undercut generalisation — one vivid failure counts as evidence about the danger of exporting results, which is exactly the passage\u2019s thesis.',
        ],
      },
      {
        kind: 'para',
        text: 'The same machinery powers per-passage analysis in argument-heavy sets. "Analyzing each passage in the pair" items ask what each text is doing at a given point — conceding, pivoting, dismissing a rival reading — and reward labelling paragraphs by function as you read: background, evidence, counterargument, rebuttal. A pair read this way yields the relationship for free: two texts whose final paragraphs are rebuttal-shaped are usually in opposition; one that ends by granting the other\u2019s strongest point before narrowing its claim is a qualification. Structure is the fastest honest signal of relationship, faster than hunting for vocabulary of agreement and disagreement.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Passage 1: social media harms teen attention. Passage 2: the evidence is weaker than claimed, but heavy use correlates with worse sleep. What is the relationship?',
            options: [
              'full agreement — both criticise social media',
              'qualification — P2 partly accepts, partly limits P1\u2019s claim',
              'opposition — P2 defends social media',
              'independence — the passages address different topics',
            ],
            answer: 1,
            explain: 'P2 accepts that some harm exists (sleep pathway) but rejects the strength of the general claim — the signature of qualification. Shared topic is not agreement; scepticism is not defence.',
          },
          {
            q: 'An authorial-choice question asks why the author opens Passage 1 with a farmer\u2019s anecdote. The best answer will:',
            options: [
              'describe what happens in the anecdote',
              'name the function: grounding an abstract claim in a concrete stakeholder',
              'state whether the anecdote is literally true',
              'summarise the passage\u2019s conclusion',
            ],
            answer: 1,
            explain: 'Choice questions test function. Content restatement is the built-in distractor; truth-value is irrelevant; the conclusion is a different question.',
          },
          {
            q: 'In a paired set, an option says "P2\u2019s author would agree that reserve reintroductions are risk-free." The summary lines say P2: reintroductions are fragile. The option is:',
            options: [
              'correct — P2 discusses risks so it must accept the opposite',
              'correct — both passages cite the same scientists',
              'wrong — it contradicts P2\u2019s stated position',
              'undeterminable — the passages never mention risk',
            ],
            answer: 2,
            explain: 'The summary line settles it: fragility is the opposite of risk-free. Shared citations do not transfer agreement, and the passages plainly do discuss risk.',
          },
          {
            q: 'The fastest honest signal for a relationship question under time pressure is:',
            options: [
              'whether the passages share vocabulary',
              'the structural shape of each text\u2019s ending — rebuttal, concession, extension',
              'which passage is longer',
              'how many sources each author cites',
            ],
            answer: 1,
            explain: 'Endings carry the claim: a rebuttal ending signals opposition, a conceding-then-narrowing ending signals qualification. Shared vocabulary is topical, not logical.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Three recurring losses: reading both passages together from the start and blending the views into one hybrid author; answering cross-passage items from memory instead of the summary lines, which is exactly how true-statements-about-the-wrong-text get chosen; and answering choice questions with content restatement — "the author mentions X" is never the function of mentioning X. A fourth, quieter one: treating a shared topic as shared ground.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: Skimming and Scanning for Timed Reading — the locating skills this lesson builds on.',
          'Next: Applying Principles — the reasoning half of the same verbal sections.',
          'Revision cue: take any two editorials on one question and write the two summary lines plus the relationship class.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Summarise each passage separately before modelling any relationship.',
          'Relationship classes: agree, oppose, qualify, extend, independent.',
          'Anchor every claim to its holder — author, source or opponent.',
          'Authorial-choice answers name functions, not content.',
          'Structure, especially the endings, is the fastest relationship signal.',
        ],
      },
    ],
  },
  {
    id: 'eng-skimming-scanning-timed-reading',
    title: 'Skimming and Scanning: Reading Strategy for Timed Exams',
    domain: 'Languages & World Literature',
    field: 'Reading Skills',
    branch: 'Timed Strategy',
    tier: 'core',
    concepts: [
      'Skim: building a thirty-second map of a passage',
      'Main idea: titles, bookends and repetition',
      'Scan: anchoring on names, numbers and keywords',
      'Question-first or passage-first: matching strategy to task',
      'Paraphrase radar: questions rarely reuse the text\'s words',
      'Negative-factual items: EXCEPT and NOT questions',
      'Summary and table completion: facts into frames',
      'Pacing protocol and the error budget',
    ],
    words: 1779,
    readMins: 9,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'IELTS Academic Reading gives you three long passages, forty questions and sixty minutes — no time to read every word twice, and no marks for elegant comprehension. TOEFL reading items similarly test whether you can locate stated facts fast, spot the negative-factual question ("All of the following are true EXCEPT..."), and compress a passage into a summary or table. The ACT Reading section runs forty questions in thirty-five minutes across four passages, and its main-idea questions reward the same first-minute survey. The exam boards themselves prescribe the technique in their official materials: skimming for gist and scanning for detail, two different eye-movements doing two different jobs. This lesson trains both as deliberate procedures — when to survey, when to hunt, how questions disguise the words you scanned for, and how to spend the error budget a timed section really is.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'On every one of these exams, timing — not difficulty — is the reported cause of lost marks: candidates who comprehend perfectly run out of clock because they read everything at the same speed. Reading at adjustable speed is also the everyday skill: a researcher triaging thirty papers, a lawyer finding the clause that matters, a doctor scanning a chart all run the same two gears. The exam just makes the cost of staying in first gear visible.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Skimming', def: 'Reading for structure and gist at high speed — title, first sentences of paragraphs, the final paragraph — producing a mental map: what the passage is about, its stance, and where each part sits. Used once, before questions.' },
          { term: 'Scanning', def: 'Reading for location, not meaning: eyes sweep for specific anchors — names, dates, numbers, capitalized terms — and stop only when the anchor appears. Used per question.' },
          { term: 'Anchor', def: 'The concrete token a question hands you to search with. Proper nouns, numbers and technical terms are ideal anchors because the passage cannot paraphrase them away; abstract phrases are poor ones.' },
          { term: 'Negative-factual item', def: 'A question asking which option is NOT stated or is EXCEPT-ed. All three true options are in the passage — the exam is testing whether you can verify each option against the text instead of pattern-matching the first plausible one.' },
        ],
      },
      {
        kind: 'para',
        text: 'Skimming has a definite anatomy, and practising it as anatomy is what makes it fast. First the title and any subheading — they set the topic frame. Then the opening paragraph, read at near-full speed: writers state their subject and intent there. Then the first sentence of every body paragraph, where academic and journalistic English puts its topic sentence; the rest of each paragraph is skipped entirely on the first pass. Then the closing paragraph, where the conclusion or implication lives. Done in under a minute for a typical exam passage, this produces a skeleton — topic, stance, the three or four supporting movements — that you spend the rest of the section hanging details onto. Two habits spoil it: sliding into full reading ("just this one paragraph..."), which destroys the time advantage, and skipping the survey entirely to go question-first on a hard passage, which forces re-reading later. Main-idea questions, the staple of the ACT and TOEFL, are answered almost directly by the survey: the main idea lives in the title, the bookends and the repeated concern of the topic sentences — never in one dramatic sentence buried mid-passage.',
      },
      {
        kind: 'para',
        text: 'Scanning is the other gear, and it works only when you let the question do the aiming. Each question supplies anchors; the procedure is to fix them in mind — especially numbers, names and capitalized or technical terms, which the passage usually prints identically — and sweep the relevant paragraph region until they light up. Then, and only then, do you switch to normal reading for the two or three lines around the hit, because the answer almost always sits in the sentence containing the anchor or the one after it. Where scanning goes wrong is in the gap between the question\'s words and the passage\'s words: exam boards deliberately paraphrase. The question says "the introduction of the policy"; the passage said "when the scheme came into force". Only the anchor survives paraphrase — "policy" became "scheme", but a date or a name cannot be swapped. This is why anchor-first works and keyword-literalism fails, and it is the single most trainable micro-skill in timed reading: expecting the paraphrase instead of being defeated by it.',
      },
      {
        kind: 'para',
        text: 'Question-first or passage-first is the strategy fork, and the right branch depends on the item type. Fact-location items (TOEFL factual information, IELTS matching information) are question-first: the question hands you the anchor, so survey briefly, then hunt. Summary-completion and fill-in-a-table items are passage-structure tasks: they compress the whole passage or one section into gaps, so build the skim map first, then scan per gap — the table\'s own headings and row labels are additional anchors that tell you where each fact must have come from. Global items (main idea, author\'s purpose, best title) come last and cost almost nothing: the survey already answered them. Leaving global questions for the end also exploits a property of these sections — by the time you have located ten facts, the passage\'s shape is twice as clear as it was after the first skim.',
      },
      {
        kind: 'para',
        text: 'The negative-factual item deserves special drill because it inverts reflexes. "The author mentions the 1994 survey for all of the following reasons EXCEPT" — now every option must be verified against the passage, and three verifications are as much work as one. The efficient protocol: scan to the anchor region, then check options one at a time against that region only; the three supported ones cluster near the anchor, and the intruder is the option whose content you cannot find anywhere near it. The classic trap is the option that is true in real life or true elsewhere in the passage but not connected to the asked-about anchor — the exam is testing whether "true" and "mentioned for this reason" are different claims. Marking the three confirmed options as you verify them turns a chaotic memory task into a checklist.',
      },
      {
        kind: 'para',
        text: 'Pacing closes the system. IELTS\'s official advice is roughly twenty minutes per passage-set; a workable error budget is to refuse any single question more than ninety seconds — at the limit, mark, guess and move, because one stubborn question can cost two answerable ones later. Answer sheets and transfer time, where they exist, are part of the budget, not an afterthought. And the section-level habit that separates consistent scorers from streaky ones: never leave blanks (these exams do not subtract for wrong answers on reading), because a scanned guess at an anchored question is right far more often than chance. Practise the whole loop under the clock from the first week — untimed skimming practice builds the wrong reflexes — and keep an error log distinguishing "did not know the word" from "never found the line": the second category is what this lesson eliminates, and it is usually the larger one.',
      },
      {
        kind: 'example',
        title: 'Worked Example — One Passage-Set Under the Clock',
        steps: [
          'Passage: "The revived tradition of street-food night markets in Taiwanese cities" — 850 words, 13 questions, 20 minutes.',
          'Minute 0-1 — skim: title sets topic; opening paragraph says the markets revived after 2000s municipal promotion; topic sentences track economy, tourism policy, and a debate about authenticity; final paragraph predicts consolidation.',
          'Q1-6 fact-location, question-first: "In which year did Kaohsiung open its first regulated night market?" — anchors "Kaohsiung", "regulated"; scan hits line 22; read two lines; answer found in 35 seconds.',
          'Q7-9 summary completion: the frame\'s own row labels ("economic role", "government policy") route the scans; paraphrase radar required — passage said "municipal subsidies", gap asked about "official financial support".',
          'Q10-12 negative-factual: anchor "tourism campaign" region; verify options a-b-d confirmed in two sentences, option c found nowhere nearby — marked NOT-mentioned after a checklist sweep.',
          'Q13 main idea, zero new reading: the survey already answered it — municipal revival policy reshaped an inherited tradition. Total: 17 minutes, 2 minutes review, no blanks.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Skimming a passage for structure means reading…',
          options: ['every word faster', 'title, opening paragraph, first sentences of body paragraphs, and the closing paragraph', 'only the questions', 'the middle of each paragraph'],
          answer: 1,
          explain: 'The skeleton lives in the bookends and topic sentences; mid-paragraph detail is skipped on the first pass.',
        },
        {
          q: 'Proper nouns, dates and numbers are the best scanning anchors because…',
          options: ['they appear in the title', 'the passage rarely paraphrases them, while abstract phrases get reworded', 'they are always in the final paragraph', 'they are printed in bold'],
          answer: 1,
          explain: 'Questions paraphrase concepts but cannot swap a name or a date — anchors survive the paraphrase.',
        },
        {
          q: 'In a negative-factual (EXCEPT) item, the efficient protocol is to…',
          options: ['pick the option that sounds least likely', 'verify each option against the anchor region, confirming the three supported ones', 'read the whole passage again', 'choose the longest option'],
          answer: 1,
          explain: 'Three options are stated and one is not; a checklist sweep near the anchor exposes the intruder.',
        },
        {
          q: 'The recommended error budget in a timed reading section says…',
          options: ['spend unlimited time on hard questions to be sure', 'cap any single question near ninety seconds, then mark, guess and move', 'skip all paraphrased questions', 'answer only questions you are certain about'],
          answer: 1,
          explain: 'One stubborn question can cost two answerable ones; there is no penalty for wrong answers on these reading sections, so never leave blanks.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Reading everything at one speed — the defining timing failure. Keyword-literalism: scanning for the question\'s exact words when the passage reworded them. Going question-first on hard passages without any survey, then re-reading three times. Missing the paraphrase and concluding the information is not there. In EXCEPT items, choosing an option that is true-but-irrelevant to the anchor. Ignoring the clock until minute fifteen. And practising untimed: the skills are speed skills and only transfer under the clock.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is an entry-level strategy lesson, though comfortable grammar speed helps. Follow-ons: the true-false-can\'t-tell lesson in this field for the judgement layer on top of located facts, the long-turn speaking lesson for the listening-and-speaking half of the same exams, and the argument-essay lesson for the writing half.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Skim once per passage: title, opening, first sentences, closing — a skeleton under a minute.',
        'Main-idea questions are answered by the survey: title, bookends, repeated concern of topic sentences.',
        'Scan per question with concrete anchors — names, dates, numbers survive paraphrase; abstract phrases do not.',
        'Expect the paraphrase: the answer sits where the anchor is, in reworded language.',
        'Fact-location items are question-first; summary and table items are structure-first.',
        'EXCEPT/NOT items: verify each option against the anchor region as a checklist.',
        'Cap any question near ninety seconds; never leave blanks; practise only under the clock.',
      ] },
    ],
  },
  {
    id: 'eng-literary-narrative-passages',
    title: 'Reading Narrative Passages: Plot, Narrator and Inference in Literary Fiction',
    domain: 'Languages & World Literature',
    field: 'Reading Strategy',
    branch: 'Narrative Reading',
    tier: 'core',
    concepts: [
      'What literary passages ask: experience, not argument',
      'Plot structure: exposition, rising action, climax, resolution',
      'Narrator and point of view: first person, limited, omniscient',
      'Characterisation: speech, thought, action and contrast',
      'Setting, imagery and mood',
      'Theme versus topic',
      'Inference: reading beyond the stated',
    ],
    words: 1409,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'A literary passage is a different machine from the news article or the argument excerpt. It does not advance a claim you can underline; it builds an experience — a stretch of invented time peopled by characters whose motives you must read between the lines. The questions that follow such passages therefore probe different skills: not "what is the main argument" but "what does the narrator reveal despite himself", "why does the author place the revelation here", "what does the image of the locked door mean". This lesson covers the moving parts of fiction and the reading habits that answer those questions reliably.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Reading-comprehension sections increasingly draw on literary and narrative extracts, and readers trained only on expository text misread them predictably — hunting for a thesis that is not there. The devices behind the prose have their own lesson; this one is about the reading: tracking who tells the story, what changes, and what the text implies without saying.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Every narrative has a skeleton. The exposition opens the world — who, where, what is ordinary. Rising action introduces and complicates a conflict (against another person, against nature, against society, or against oneself), building tension through choices and setbacks. The climax is the turn: the moment the conflict is decided. The resolution settles the aftermath, sometimes in a deliberate final image. Long passages are rarely complete stories; they are slices of this skeleton, and identifying which slice — before the turn, at the turn, after it — immediately tells you what the questions can ask: motivation before, decision at, consequence after.',
      },
      {
        kind: 'para',
        text: 'Who tells the story decides what anyone in it can know. A first-person narrator lives inside the text as "I": everything is filtered through one limited, biased consciousness, which is a feature — readers weigh what that narrator admits, hides and misunderstands. A third-person limited narrator rides beside one character, reporting that mind\'s perceptions while keeping outsiders opaque. A third-person omniscient narrator sees all minds and can editorialise. An unreliable narrator — one whose account the text quietly undermines, by contradictions, by gaps, by other characters\' reactions — is the special case that examination passages love, and the antidote is always the same: ask what the text shows that the narrator does not notice.',
      },
      {
        kind: 'para',
        text: 'Character is built from evidence, and the evidence has categories: what characters do (the strongest signal), what they say and how they speak, what they think, how others react to them, and — rarely — what the narrator flatly asserts. Flat characters are built from one or two traits; round characters hold contradictions and change. A foil exists to throw another character into relief by contrast, and a static character who refuses the change everyone else undergoes is often the passage\'s quiet argument. Questions about motive are answered from the action-thought-reaction evidence, never from adjectives alone.',
      },
      {
        kind: 'para',
        text: 'Setting is not scenery. Time and place constrain what the characters can want (a harvest, an escape, a marriage) and how fast the conflict can move; weather and light carry mood — the Emotional weather of the scene — and recurring objects gather symbolic weight: the locked door, the untended garden, the river crossing. When a question asks what an image contributes, the honest answers come from the same small set: it establishes mood, characterises a person, foreshadows a turn, or condenses the theme.',
      },
      {
        kind: 'para',
        text: 'Theme is the story\'s claim about life — ambition hollows, kindness compounds, the past is never past — while topic is merely its subject (love, war, sailing). A theme must be stated as a sentence, and it is inferred from the pattern of the whole: what the conflict costs, what the ending rewards or punishes, what the title points at. Tone is the narrator\'s attitude toward the material (ironic, wistful, bitter), and mood is the atmosphere raised in the reader; both ride on diction — the specific word choices — which is why vocabulary questions in literary passages are really tone questions in disguise.',
      },
      {
        kind: 'para',
        text: 'Inference is the engine of all the above. Literary texts imply far more than they state, and legitimate inference is disciplined: it moves from textual evidence (a word, a gesture, a silence) plus normal background knowledge (how people usually behave) to the least strong conclusion that explains the evidence. The moment an inference requires inventing facts the text never suggests — a backstory, a country, a motive with no cue — it has stopped being inference and become fan fiction. Answer options in inference questions are built to exploit exactly this gap; the safest option is the modest one fully supported by cues.',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Exposition', def: 'The opening that establishes characters, setting and the ordinary state of affairs before conflict disturbs it.' },
          { term: 'Point of view', def: 'Who tells the story and from where: first person, third limited, third omniscient — each fixing what can be known.' },
          { term: 'Unreliable narrator', def: 'A narrator whose account the text undermines; read what is shown against what is claimed.' },
          { term: 'Foil', def: 'A character placed in contrast to another so that qualities become visible by difference.' },
          { term: 'Mood', def: 'The atmosphere a passage raises in the reader, built from setting, imagery and diction.' },
          { term: 'Theme', def: 'The claim about life the story argues through its pattern — always a sentence, never a single word.' },
          { term: 'Inference', def: 'A conclusion drawn from textual cues plus ordinary background knowledge — the least strong explanation that fits.' },
        ],
      },
      {
        kind: 'example',
        title: 'Inferring attitude from diction',
        steps: [
          'Excerpt: "The ceremony, naturally, was prolonged; the mayor enjoyed, as ever, the sound of his own benevolence."',
          'Mark the diction: "naturally" (weary expectation), "prolonged" (excess), "as ever" (repetition), "the sound of his own benevolence" (hollow performance).',
          'Add the mechanics: two commas isolate "naturally" — a spoken aside; "benevolence" is abstract where a sincere writer would be concrete.',
          'Infer, minimally: the narrator is ironic — outwardly describing a civic ritual, inwardly mocking the mayor\'s self-regard.',
          'Check the rival options: "neutral observation" ignores the word choices; "anger" overstates — mockery is cooler than anger. The modest, cue-anchored reading wins.',
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A passage opens: "Everyone agreed the ship was seaworthy; Meera counted the lifeboats twice." The narration is…',
            options: ['first person and trusting', 'third person, using Meera\'s contrary action to seed doubt about the collective claim', 'omniscient and neutral', 'a frame narrative'],
            answer: 1,
            explain: 'The narrator is outside the story but shows Meera\'s counting — a gesture the group does not see. The text implies doubt through action while the stated view says the opposite: the classic gap a careful reader tracks.',
          },
          {
            q: 'The climax of a narrative is best described as…',
            options: ['the opening that sets the scene', 'the turn where the central conflict is decided', 'the final image after everything is over', 'the moment a new character enters'],
            answer: 1,
            explain: 'The climax is the decisive turn of the conflict; exposition precedes it and the resolution follows. Entries of new characters usually belong to rising action.',
          },
          {
            q: 'In a story, a careless older brother is constantly paired with a meticulous younger one. The younger brother chiefly functions as…',
            options: ['the antagonist', 'a foil whose contrast sharpens the elder\'s portrait', 'an unreliable narrator', 'the theme of the story'],
            answer: 1,
            explain: 'A foil exists for contrast: the pairing makes each brother\'s trait legible. Antagonist would require the younger brother to actively oppose the elder\'s goals.',
          },
          {
            q: 'A question asks what the recurring image of the dried-up well "suggests". The best-grounded answer will…',
            options: ['invent a backstory for the well', 'connect the image to cues about decline and memory elsewhere in the passage', 'state that wells always symbolise death', 'complain that the image is decorative'],
            answer: 1,
            explain: 'Legitimate inference runs from textual cues (what the well touches — scenes of memory, drought, abandonment) to the least strong reading. Universal symbol dictionaries and invented backstories both outrun the evidence.',
          },
        ],
      },
      {
        kind: 'para',
        text: 'Narrative reading compresses to a checklist: locate the slice of the arc, fix the point of view and its limits, gather character evidence from action, weigh setting and recurring images for mood and meaning, then infer modestly from cues. Run the checklist twice on any literary passage — once for the story, once for the telling — and the questions have nowhere left to hide.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Pair this lesson with the literary-devices lesson for the technique vocabulary (irony, symbolism, imagery) these passages deploy, the paired-passages lesson for reading two texts against each other, and the verbal-reasoning lesson for claims-and-evidence reading on argumentative text. Background reading: the "How to Analyze Fiction — Elements of Literature" chapter in LibreTexts\' Approaches to Literature collection, and any open anthology\'s introductions to plot and point of view.',
        tone: 'path',
      },
    ],
  },
]

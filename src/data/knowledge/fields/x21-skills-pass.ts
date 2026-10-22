import type { KnowledgeTopic } from '../types'

/** Expansion pass X21 (2026-10-22): the verbal, judgement & inquiry skills
 *  pass — the weakest reasoning clusters in the fresh audit (LSAT 82%,
 *  ACT 83%, UCAT 85%, ap-statistics 97% single gap, BITSAT logical-reasoning
 *  pair). All six topics verified absent before authoring (grep of fields +
 *  coverage registry + dedup.ts):
 *  1. eng-punctuation-mechanics — ACT English punctuation unit. Zero prior
 *     punctuation ownership (languages-literature hits are incidental:
 *     French elision apostrophe, texting prose).
 *  2. eng-paired-passages-authorial-choices — ACT Reading comparing
 *     perspectives + authorial choices; LSAT RC paired-passage units. The
 *     literary-theory lesson owns authorial INTENTION (intentional fallacy),
 *     not exam reading strategy; scoped apart.
 *  3. eng-principle-application — LSAT Logical Reasoning principle-
 *     application unit. Zero prior coverage; the critical-reasoning lesson
 *     owns argument anatomy/strengthen/weaken, not normative rule matching.
 *  4. sci-experimental-design-hypotheses — ACT Science experimental design +
 *     hypotheses/theories; AP Statistics experimental-design unit (blocking,
 *     matched pairs, blinding, placebo — none owned elsewhere). Scoped
 *     against the social-sciences causal-inference lesson, which owns
 *     Fisher randomization history, counterfactuals and DiD; the lab-design
 *     and hypothesis-ladder material here is new. Grounded in OpenStax
 *     Introductory Statistics Ch. 1 (Sampling and Data) and official ACT /
 *     AP Statistics course descriptions.
 *  5. sj-situational-judgement — UCAT SJT integrity/perspective-taking/
 *     teamwork units via the official UCAT SJT framework. Zero prior
 *     coverage.
 *  6. fnd-visual-pattern-rules — UCAT abstract-reasoning shape attributes +
 *     BITSAT pattern perception/figure formation + rule detection. Zero
 *     prior coverage of nonverbal figural logic.
 *  14 curated aliases map the exam phrasings (single-token topics like
 *  'punctuation' and 'teamwork' can never pass the two-token matcher). */

export const x21SkillsPassTopics: KnowledgeTopic[] = [
  {
    id: 'eng-punctuation-mechanics',
    title: 'Punctuation Mechanics: Commas, Semicolons, Apostrophes and Dashes',
    domain: 'Languages & World Literature',
    field: 'Grammar & Mechanics',
    branch: 'Punctuation',
    tier: 'core',
    concepts: [
      'Commas: lists, clauses, appositives',
      'Comma splices and how to fix them',
      'Semicolons join independent clauses',
      'Colons announce what follows',
      'Apostrophes: possession versus contraction',
      'Its versus it\u2019s, whose versus who\u2019s',
      'Dashes for interruption, parentheses for aside',
      'Unnecessary punctuation as an error class',
    ],
    words: 1326,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Punctuation is not decoration; it is the traffic system of a sentence. Every mark either separates things that must not blur together — items in a list, clauses with different jobs — or signals the relationship between them: cause, aside, possession, omission. Standardised English tests treat the marks as a closed set of rules with predictable distractors, which makes mechanics one of the highest-yield skills on the paper: a handful of distinctions, tested over and over, with no ambiguity once the underlying grammar is visible. This lesson builds that grammar-first view: find the clause boundary or the possessor first, then choose the mark.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Mechanics questions are the most mechanical points on an English or writing section — literally. The tested rules are finite, the wrong options recur (the comma splice, the possessive its, the colon after an incomplete clause), and every rule here transfers to every essay you will ever write. There is no other topic with this ratio of learnable rules to marks available.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Independent clause', def: 'A group of words with a subject and a verb that can stand alone as a sentence. Every comma and semicolon rule is stated against this unit: what separates two of them, what cannot, and what a comma is allowed to do inside one.' },
          { term: 'Comma splice', def: 'Two independent clauses joined by only a comma — "The results were clear, the study ended early." Fix by period, semicolon, or a coordinating conjunction after the comma. Tests present this constantly, dressed as style; it is a grammar error with three legal repairs.' },
          { term: 'Semicolon', def: 'Joins two closely related independent clauses without a conjunction, or separates complex list items that already contain commas. Neither side may be a fragment: if what follows the semicolon cannot stand alone, the mark is wrong.' },
          { term: 'Colon', def: 'Announces: a list, an explanation, a quotation — but only after a complete independent clause. "The trial had one flaw: no control group." Compare the wrong "The flaw was: no control group", where the clause before the colon is incomplete.' },
          { term: 'Apostrophe', def: 'Marks possession (the study\u2019s findings) or omission in a contraction (doesn\u2019t). Never marks a simple plural. Pronouns have their own possessive forms without apostrophes — its, whose, their — so "the team lost it\u2019s lead" doubles an error: wrong word and wrong logic.' },
          { term: 'Parenthesis and dash', def: 'Parentheses tuck away an aside the sentence survives without; dashes punch it into view and can also set off an abrupt turn. On tests the choice between dash pair and parenthesis pair usually turns on emphasis, but both marks must come in pairs when both sides are removable.' },
          { term: 'Unnecessary punctuation', def: 'A tested error class of its own: a comma between subject and verb, between verb and object, or after a coordinating conjunction joining clauses. The mark is wrong because no grammatical boundary exists at that point — no rule licenses inserting one.' },
        ],
      },
      {
        kind: 'para',
        text: 'The comma rules compress into four questions. Is it a list? Use commas between items, and note that a comma before the final and is the serial comma — a house-style choice, not a tested error either way, unless the list items themselves would blur. Is it two independent clauses? Then a comma alone is illegal; it needs a conjunction or must yield to a semicolon. Does the clause open the sentence? An introductory phrase or subordinate clause takes a comma before the main clause begins. Is it extra information? An appositive or non-essential modifier takes a comma pair — and the pair is the test: if the sentence loses nothing when the between-commas material is lifted out, the commas belong there; if lifting it breaks the meaning, the clause is essential and takes no commas.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'Four sentences, four decisions',
        steps: [
          '"The experiment failed the sample was contaminated." Two independent clauses, no mark: a fused sentence. Legal repairs — semicolon ("failed; the sample"), comma plus conjunction ("failed, because the sample..." making the second part subordinate), or a period. A bare comma remains illegal.',
          '"The study which took three years was published." The modifier is non-essential — the study is identified without it — so it needs a comma pair: "The study, which took three years, was published." No commas would only be right if the clause were essential: "Any study which takes three years deserves funding."',
          '"The lab published its findings; it\u2019s clear the samples were its\u2019." First its: correct possessive pronoun. Second it\u2019s: contraction of it is, correct in place. Third: wrong — possessive pronouns never take apostrophes.',
          '"The report had one recommendation: retrain every analyst." Colon legal — a complete clause precedes it. Compare "The recommendation was: retrain..." — the preceding verb phrase is not an independent clause, so the colon fails.',
        ],
      },
      {
        kind: 'para',
        text: 'Test strategy leans on one habit: locate the grammatical joints before reading the options. Find the subjects and verbs; mark the clause boundaries; decide whether a modifier is essential. With the joints mapped, most mechanics questions collapse — three of four options violate a rule you can name, and the correct answer follows from the boundary, not from ear. Read-aloud checks catch rhythm but not rules: tests deliberately include options that sound smooth and violate a boundary, and options that sound stiff and are correct.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which sentence is punctuated correctly?',
            options: [
              'The trial ended early, the data was inconclusive.',
              'The trial ended early; the data was inconclusive.',
              'The trial ended early; and the data was inconclusive.',
              'The trial, ended early; the data was inconclusive.',
            ],
            answer: 1,
            explain: 'Two independent clauses: the semicolon joins them legally. Option 1 is a comma splice; option 3 puts a conjunction after a semicolon with no second list item to justify it; option 4 splits a subject from its verb.',
          },
          {
            q: 'Where does a colon belong: "The design had one weakness ( ) no control group."?',
            options: [
              'after "design", replacing "had"',
              'between "weakness" and "no control group"',
              'after "one" only',
              'nowhere — this sentence cannot take a colon',
            ],
            answer: 1,
            explain: 'The clause "The design had one weakness" is complete, so a colon can announce the appositive explanation. No other position follows a complete clause.',
          },
          {
            q: 'Which pair uses apostrophes correctly?',
            options: [
              "The committee published it's report; who's responsible is unclear.",
              "The committee published its report; who's responsible is unclear.",
              "The committee published its' report; whose responsible is unclear.",
              "The committee published it's report; whose responsible is unclear.",
            ],
            answer: 1,
            explain: 'Its is the possessive pronoun; who\u2019s is the contraction of who is. The possessive forms its and whose never take apostrophes.',
          },
          {
            q: '"My supervisor who studied in Nairobi reviewed the draft." The error is:',
            options: [
              'a missing pair of commas, if the clause is non-essential',
              'a missing semicolon before "reviewed"',
              'a missing colon after "supervisor"',
              'no error — the sentence is correct as written',
            ],
            answer: 0,
            explain: 'If the writer has only one supervisor, the clause is extra information and needs a comma pair. With several supervisors, the clause identifies which one and takes no commas — the essential/non-essential test decides.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The recurring traps: trusting rhythm over clause structure — splice-heavy prose sounds natural in speech; apostrophising every plural ending in s; using a colon after an incomplete clause; and deleting only one dash or parenthesis of a pair, leaving an unbalanced aside. Also beware the "correct but unnecessary" distractor: a mark can be wrong not because it breaks a rule but because no boundary exists for it to mark.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: any reading-strategy lesson — mechanics questions reward the same slow, structural reading.',
          'Next: Paired Passages and Authorial Choices — the reading half of the same sections.',
          'Revision cue: take any paragraph and name the job of every mark; the ones you cannot justify are your gap list.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Find the clause boundaries first; the marks follow from the grammar.',
          'Comma splices are illegal — repair with semicolon, conjunction or period.',
          'Colons need a complete clause before them; semicolons need one on each side.',
          'Apostrophes mark possession or omission, never plain plurals; its and whose are already possessive.',
          'Unnecessary punctuation is an error class: no boundary, no mark.',
        ],
      },
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
    id: 'eng-principle-application',
    title: 'Applying Principles: From Rule to Case',
    domain: 'Languages & World Literature',
    field: 'Verbal Reasoning',
    branch: 'Principle Application',
    tier: 'intermediate',
    concepts: [
      'Principles: general norms stated in words',
      'Matching scope: what the principle covers',
      'Justify-the-action and conform-to questions',
      'The most-principled-action standard',
      'Underlying-principle extraction',
      'Scope traps: too broad, too narrow, wrong domain',
      'Counterexample testing',
    ],
    words: 1274,
    readMins: 6,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Some reasoning questions hand you a rule instead of a fact-pattern to evaluate: a principle — "public resources should go where they do the most good" — and a set of cases, asking which case the principle justifies, or which principle best explains a decision already made. The skill is neither arithmetic nor reading comprehension but structured matching: extract exactly what the principle requires, permits and excludes, then test each case against that scope. It is the everyday grammar of policy, law and professional ethics — the same operation, at tiny scale, that courts and regulators perform when they fit a rule to a situation.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Principle questions are where strong readers still lose marks, because the wrong options are attractive sentences — humane, sensible, plausible — that simply fall outside the principle\u2019s scope. Learning to test scope mechanically converts a vibes exercise into a checklist, and the same checklist is the core of professional judgement in every field that runs on written rules.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Principle', def: 'A general normative statement — what ought to be done, valued or prioritised — not a fact. "Libraries should be free at the point of use" prescribes; "libraries cost cities money" describes. Principle questions test movement between the general norm and particular cases.' },
          { term: 'Justify-the-action questions', def: 'The principle is given; the task is to find the case it genuinely supports. The winning option must be covered by the principle\u2019s terms — the right actor, the right kind of resource, the right kind of benefit — not merely made more attractive by it.' },
          { term: 'Underlying-principle questions', def: 'The case is given; the task is to name the principle that best explains it. The correct principle must fit the decision\u2019s actual hinge, not a peripheral feature: if the decision turned on avoiding harm, a principle about efficiency is wrong even if efficiency was present.' },
          { term: 'Scope', def: 'The range of cases a principle covers, fixed by its words. "Children should be vaccinated" covers children, not adults; "public libraries should be free" covers public libraries, not museums. Most wrong options fail here — either stretching the scope (too broad) or shrinking it by importing conditions the principle never stated (too narrow).' },
          { term: 'Most-principled-action standard', def: 'When several options are defensible, the question is comparative: which action is most justified by the principle\u2019s terms. A tie means you have misread scope — usually one option fits a further element of the principle the others ignore.' },
          { term: 'Counterexample test', def: 'The quickest scope check: try to construct a case inside the option\u2019s wording that the principle would not cover, or a case the principle clearly covers that the option excludes. If the option survives both directions, it matches.' },
        ],
      },
      {
        kind: 'para',
        text: 'The mechanical procedure has four steps. One: restate the principle as actor + action + beneficiary + condition, marking every qualifier — only, always, public, direct. Two: do the same for each candidate case. Three: align element by element; a mismatch on any marked qualifier disqualifies. Four: when two options survive, prefer the one that accounts for more of the principle\u2019s content — the residual difference is usually the test-maker\u2019s intended discriminator. Throughout, resist importing your own principles: the question is what THIS principle commits you to, and the answer may be a policy you personally dislike.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'Scope alignment on a funding principle',
        steps: [
          'Principle: "A city should fund preventive health programmes only when they reach populations that lack alternatives." Marked elements: city (actor); fund preventive health (action); only (exclusive condition); lack alternatives (condition on recipients).',
          'Case A: funding a rural mobile clinic serving villages with no pharmacy. Actor: city — assume a city-run programme counts. Recipients lack alternatives. Covered.',
          'Case B: funding a downtown gym subsidy for office workers with three nearby gyms. Action fits (preventive health) but "lack alternatives" fails. Not covered.',
          'Case C: a private charity funding night clinics. The action and condition fit, but the actor is not the city — the principle says nothing about what charities should do. Not covered.',
          'Case D: funding an ambulance service — emergency care, not prevention. Wrong action class. Not covered.',
          'Answer: A alone. Note how each rejection names one failed element — that named-element habit is what makes the method fast under exam conditions.',
        ],
      },
      {
        kind: 'para',
        text: 'Reverse-direction questions — extracting the principle a decision rests on — reward the same ledger read backwards. Ask: what general rule, if accepted, would make THIS choice the right one and neighbouring choices wrong? A hospital that triages by survivability rather than by queue position acts on the principle that scarce treatment should maximise lives saved — not on principles about seniority, payment or compassion that might also be present in the scene. The distractors in these items are principles that are true, even admirable, but orthogonal to the decision\u2019s hinge; the counterexample test exposes them, because you can vary the orthogonal factor and watch the decision stay fixed.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Principle: "Schools should teach coding only with tools students can use at home." Which action does it justify?',
            options: [
              'A school teaching coding with licensed classroom-only software',
              'A school teaching coding with free browser-based tools',
              'A library running evening coding classes for adults',
              'A school banning coding entirely',
            ],
            answer: 1,
            explain: 'The browser tools are usable at home — the only condition is satisfied, and the actor and action fit. Classroom-only software violates the condition; the library changes the actor; the ban acts on nothing the principle permits.',
          },
          {
            q: 'A council reroutes buses to serve a new hospital despite longer average commutes. The underlying principle is best captured as:',
            options: [
              'public transport should minimise total travel time',
              'transport should prioritise access to essential services',
              'buses should follow the shortest physical routes',
              'hospitals should be built near city centres',
            ],
            answer: 1,
            explain: 'The decision accepts longer commutes to reach an essential service — the hinge is access priority, not efficiency (A and B\u2019s rival), route mechanics or planning advice.',
          },
          {
            q: 'The fastest test for whether an option is covered by a principle is:',
            options: [
              'whether it sounds morally admirable',
              'whether you can build a counterexample at either boundary of its wording',
              'whether the principle is popular',
              'whether the option restates the principle verbatim',
            ],
            answer: 1,
            explain: 'Boundary counterexamples expose scope mismatches — a case the option covers but the principle excludes, or vice versa. Attractiveness and popularity are precisely what distractors trade on.',
          },
          {
            q: 'Two options both fit the principle. The tie-breaking habit is:',
            options: [
              'pick the shorter option',
              'pick the one that satisfies more of the principle\u2019s stated elements',
              'pick the first one you read',
              'pick the one with more conditions added',
            ],
            answer: 1,
            explain: 'When a true tie seems to occur, one option usually honours an extra marked element (only, direct, public) that the other ignores — the intended discriminator.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The big four: importing your own values and answering what should be rather than what this principle licenses; ignoring single-word qualifiers like only and always that carry the entire scope; letting the actor slide — a principle about what governments should do says nothing about private firms; and mistaking a true-but-irrelevant principle for the underlying one in reverse-direction items. Name the failed element in every rejection and the method stays honest.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: the critical-reasoning lesson — argument anatomy is the substrate principles live in.',
          'Next: Paired Passages and Authorial Choices — the same sections\u2019 reading half.',
          'Then: Situational Judgement — principle application applied to professional dilemmas.',
          'Revision cue: take one household rule and map its scope: actor, action, conditions, boundaries.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Restate principles as actor + action + beneficiary + conditions.',
          'Mark qualifiers — only, always, public — they are the scope.',
          'Justify questions: the case must be covered, not flattered.',
          'Underlying-principle questions: match the decision\u2019s hinge.',
          'Counterexample tests at both boundaries expose wrong options fast.',
        ],
      },
    ],
  },
  {
    id: 'sci-experimental-design-hypotheses',
    title: 'Experimental Design: Hypotheses, Controls and the Theory Ladder',
    domain: 'Foundation Learning',
    field: 'Science & Inquiry Skills',
    branch: 'Experimental Method',
    tier: 'core',
    concepts: [
      'Hypothesis: testable prediction from a question',
      'Hypothesis versus theory versus law',
      'Independent, dependent and controlled variables',
      'Control groups and the placebo effect',
      'Blinding: single, double and why it matters',
      'Randomisation, replication and blocking',
      'Reliability, validity and sources of error',
      'Falsifiability as the line around science',
    ],
    words: 1422,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'A science experiment is an argument arranged as apparatus. The question becomes a hypothesis — a specific, testable prediction — and the apparatus is designed so that the world itself can say no: one factor is varied, everything else is held fixed or distributed evenly, and a comparison group absorbs every influence except the one under test. This lesson builds that argument from its vocabulary out: the three kinds of variable, the control group and the placebo it receives, the blinding that keeps expectation out of the data, and the statistical backbone — randomisation, replication and blocking — that lets a difference in means count as evidence rather than luck. It closes with the ladder every result climbs: hypothesis, theory, law, and the falsifiability that makes the whole structure scientific.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Science sections test design literacy more than content: given an experiment, identify the variable that was manipulated, the group that was cheated of treatment, the flaw that lets a confounder in. The vocabulary is small, the questions are predictable, and the same words — control, blind, replicate — carry through biology, chemistry, physics and statistics alike.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Hypothesis', def: 'A specific, testable prediction stating an expected relationship between variables — "plants receiving fertiliser X grow taller in four weeks than unfertilised plants." Testable means an observation could in principle prove it wrong; "plants grow best" is too vague to fail, which is exactly its defect.' },
          { term: 'Hypothesis vs theory vs law', def: 'A hypothesis is a single testable prediction. A theory is a broad explanatory framework supported by many independent lines of evidence — it explains why patterns occur. A law describes a pattern, usually mathematically, without explaining its mechanism. Theories do not "graduate" into laws; they do different jobs. Everyday "just a theory" inverts the scientific usage.' },
          { term: 'Independent variable', def: 'The factor the experimenter deliberately varies — the dose, the temperature, the light level. Plotted on the horizontal axis. An experiment with two independently varied factors is factorial; most introductory questions keep one.' },
          { term: 'Dependent variable', def: 'The measured outcome expected to respond to the independent variable — height, reaction time, yield. Everything that could affect it but is not being studied must be controlled or randomised, or it becomes a confounder.' },
          { term: 'Control group', def: 'The comparison group that receives no active treatment — or an inert placebo where expectation itself could act. It anchors the counterfactual: without it, improvement cannot be attributed to the treatment, because untreated groups improve too, sometimes dramatically (regression to the mean).' },
          { term: 'Blinding and placebo', def: 'Single-blind: participants do not know their assignment, killing expectation effects. Double-blind: the experimenters interacting with participants do not know either, killing measurement and treatment bias. The placebo effect is genuine physiology — expectation changes outcomes — which is why the inert comparison is not cruelty but calibration.' },
          { term: 'Randomisation, replication, blocking', def: 'Random assignment distributes every known and unknown nuisance factor evenly between groups. Replication — enough experimental units — lets chance differences average out and gives errors a measurable size. Blocking groups similar units (same soil plot, same litter) so comparisons happen within blocks, removing a known nuisance factor from the noise. A matched-pairs design blocks by pairing each subject with itself: before-and-after, or two treatments in random order.' },
        ],
      },
      {
        kind: 'para',
        text: 'Reliability and validity name the two ways a measurement can disappoint. Reliability is repeatability: the same procedure on the same subject gives the same reading — unreliability shows up as scatter and is fought with replication and better instruments. Validity is truthfulness: the measurement measures the concept it claims to — a questionnaire on "screen time" that forgets phones under-measures, and a study whose only subjects are volunteers of one age has narrow external validity, whatever its internal logic. A result can be perfectly reliable and invalid — a precise reading of the wrong thing — which is why exam questions asking "what is the flaw here?" are usually pointing at a validity hole, not noise.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'Auditing a plant-growth experiment',
        steps: [
          'Claim: fertiliser X increases tomato yield. Design so far: 20 plants in a sunny window get X; 20 plants in a dim corridor get nothing; all watered daily.',
          'Independent variable: fertiliser X. Dependent variable: yield. Confounder spotted immediately: light differs between groups — the design cannot attribute any difference to X.',
          'Repair 1 — control group: 20 plants in the SAME sunny window, no fertiliser. Now the comparison isolates X.',
          'Repair 2 — randomisation: assign the 40 window positions to treated/untreated plants by coin flip, so position-in-window, pot history and plant vigour distribute evenly.',
          'Repair 3 — replication and blocking: several trays (blocks) each containing treated and untreated plants, so a tray-level quirk (draft, heater) becomes a between-block difference, not a treatment effect. More plants per group narrows the error bars.',
          'Repair 4 — blinding where possible: whoever measures height records readings for pots labelled only with codes. Measurement stays blind even though gardeners know the assignment.',
          'Falsifiability check: the hypothesis names a direction and a timeframe — if treated plants show no excess yield after four weeks, it is disconfirmed. A hypothesis that accommodates any result was never scientific.',
        ],
      },
      {
        kind: 'para',
        text: 'The theory ladder deserves its honest restatement, because it is the most misused vocabulary in science. Hypotheses are tested; a hypothesis that survives many independent, risky tests becomes part of a theory — an integrated explanation with scope far beyond any single experiment, like germ theory or evolution. Laws summarise what happens under stated conditions — ideal gas behaviour at low pressure — without supplying mechanism. A theory explaining why gas laws hold (molecular motion) is not on a path to become a law; explanation and description are different products. And the boundary of the whole enterprise is falsifiability: a claim arranged so no observation could refute it has left the territory where experiments can adjudicate.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In a drug trial, Group A receives the drug, Group B an identical-looking tablet with no drug. Group B is:',
            options: [
              'the dependent variable',
              'the placebo control group',
              'a confounding variable',
              'the blocking variable',
            ],
            answer: 1,
            explain: 'The inert tablet makes B the placebo control — the anchor for what would happen without treatment, including expectation effects. The dependent variable is the measured outcome, not a group.',
          },
          {
            q: 'A study finds students given a new app score higher — but the app group knew they were receiving the "innovation". The missing safeguard is:',
            options: [
              'replication',
              'blinding (or a placebo-like control condition)',
              'a larger sample',
              'a hypothesis',
            ],
            answer: 1,
            explain: 'Knowledge of assignment is an expectation effect; blinding participants — or giving the comparison group a plausible inert alternative — is the designed remedy. More subjects do not remove expectation bias.',
          },
          {
            q: 'Which statement about theories and laws is correct?',
            options: [
              'A theory becomes a law once enough evidence accumulates',
              'A law explains mechanisms; a theory merely describes',
              'A theory is a broad explanation; a law describes a pattern without explaining it',
              'Laws are hypotheses that survived testing',
            ],
            answer: 2,
            explain: 'The two do different jobs and do not convert into each other. Option 3 is the inverted, incorrect folk version; the rest swap the definitions.',
          },
          {
            q: 'Field plots differ in soil quality across a slope. The design that removes this nuisance factor is:',
            options: [
              'increase the number of plots',
              'block by soil zone — compare treatments only within each zone',
              'use a placebo fertiliser',
              'double-blind the measurements',
            ],
            answer: 1,
            explain: 'Blocking groups similar units so treatment comparisons occur within a soil zone; the zone effect cancels. Replication alone leaves the confounder in place, and blinding addresses bias, not field heterogeneity.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The exam staples: confusing the independent variable (varied) with the dependent one (measured); calling any second group a "control" when it also differs in conditions — the control must differ ONLY in the treatment; reading "failed to reject" as "proved the hypothesis"; and treating correlation between two measured variables as an experiment at all — with no assignment and no manipulation, design vocabulary does not apply. And never say a theory is "just" a hypothesis: the ladder misreading is itself a tested item.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Next: the social-sciences evidence lesson — how causal inference works when experiments are impossible.',
          'Then: Nonverbal Reasoning — the same controlled-comparison instinct applied to figures.',
          'Reference reading: OpenStax Introductory Statistics, Ch. 1 (Sampling and Data — experimental design and ethics).',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'A hypothesis is specific and falsifiable; theories explain, laws describe.',
          'One independent variable, one measured outcome, everything else controlled or randomised.',
          'The control group anchors the counterfactual; placebos calibrate expectation.',
          'Blinding removes bias; randomisation, replication and blocking remove noise and known nuisances.',
          'Reliable is not valid: precise measurement of the wrong thing is the classic flaw.',
        ],
      },
    ],
  },
  {
    id: 'sj-situational-judgement',
    title: 'Situational Judgement: Integrity, Perspective Taking and Teamwork',
    domain: 'Foundation Learning',
    field: 'Professional & Interpersonal Skills',
    branch: 'Situational Judgement',
    tier: 'intermediate',
    concepts: [
      'Integrity and probity: honesty under pressure',
      'Escalation: when and to whom to raise concerns',
      'Perspective taking: stakes for each party',
      'Patient-centred and client-centred reasoning',
      'Teamwork: roles, handover, communication',
      'Confidentiality and disclosure boundaries',
      'Rating scales: appropriateness versus effectiveness',
      'The accountability-first framework',
    ],
    words: 1466,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Situational judgement tests put you inside a workplace dilemma — a colleague cutting a corner, a distressed client, a task outside your competence — and score the quality of your response. The scenarios change per profession; the tested structure does not. Three values recur: integrity (honesty and probity even when silence is easier), perspective taking (reading the stakes of every party, especially the most vulnerable), and teamwork (clear communication inside the role hierarchy). Across every marking scheme, one pattern sorts good answers from brilliant ones: do what you can at your own level, then escalate through the proper channel — and never let a patient, client or public interest be quietly sacrificed to colleague comfort or your own convenience.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'These items are scored against consensus judgements of experienced professionals, which makes them learnable: the professional consensus follows visible principles, not hidden taste. The same principles govern real workplaces — whether to report a mistake, how to correct a senior colleague, when to say no — so the practice transfers to reference requests, interviews and the first year of any job.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Integrity and probity', def: 'Truthfulness as a default: record events accurately, admit your own errors promptly, never falsify or sign for what you did not verify, and refuse instructions to mislead — even small ones, even from seniors. The marker\u2019s intuition: a small dishonesty tolerated is a large one rehearsed.' },
          { term: 'Escalation ladder', def: 'The canonical best response to a problem beyond your authority: address what is safe at your level, then raise it with the appropriate senior or responsible body, and follow through. Skipping levels, going straight to anonymous public complaint while private channels remain, or doing nothing are all marked down — the ladder has a middle and the middle is where the best answers live.' },
          { term: 'Perspective taking', def: 'Before rating any action, inventory the stakeholders and their stakes: the person affected, their family, colleagues, the institution, the public. The best responses protect the most vulnerable stake first; the worst dismiss someone\u2019s distress as overreaction or trade a client\u2019s interest for team harmony.' },
          { term: 'Patient/client-centred reasoning', def: 'In care-flavoured scenarios, the service user\u2019s welfare and autonomy outrank staff convenience. Explain rather than do unto, check understanding, respect refusals from a competent adult, and never let embarrassment or busyness decide what the person is told.' },
          { term: 'Teamwork and communication', def: 'Good answers communicate early, through the right channel, in the right tone: ask before assuming, delegate to competence rather than convenience, hand over fully (what, status, next step), and correct colleagues privately where possible — publicly only when the risk is immediate.' },
          { term: 'Confidentiality and disclosure', def: 'Information gained in a professional role is not gossip. Share it within the team on a need-to-know basis, with consent where possible, and break it only for defined reasons — imminent serious harm, legal duty, or safety of others — and then through the proper channel, not the group chat.' },
          { term: 'Appropriateness vs effectiveness', def: 'Many schemes rate actions on two axes: appropriateness (is it the right thing — ethics, policy) and effectiveness (does it achieve the aim). Asking a distracted senior for an urgent decision may be effective but inappropriate; documenting a concern and waiting may be appropriate but ineffective at that moment. Top-rated actions usually pair both: act at your level AND escalate, honestly AND kindly.' },
        ],
      },
      {
        kind: 'para',
        text: 'The fastest marking heuristic, confirmed across schemes: look for the option that combines honesty with action. Doing nothing, "staying out of it", and handling it alone beyond your competence are near-universal bottom ratings. Confrontation without proportion, and whistleblowing that skips every internal channel, are near-universal partial marks. Full marks typically belong to responses that protect the affected person now, record the facts accurately, and route the problem to the person whose job it is — in that order.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'One scenario, four responses, four ratings',
        steps: [
          'Scenario: during a busy shift you notice a senior colleague documenting a safety check that you did not see performed. Nothing has gone wrong yet.',
          'Response A: say nothing — the colleague is senior and nothing bad happened. Bottom rating: integrity failure; an unrecorded check is a live risk, and silence leaves no accurate record.',
          'Response B: publicly accuse the colleague of falsifying records in front of the team. Partial: the concern is right, the channel is wrong — disproportionate, damages team function, no accurate account gathered first.',
          'Response C: check the facts (was the check perhaps done before you arrived?), then speak to the colleague privately: "I could not see the check logged as done — can we make sure it is completed and recorded?" If it is resolved and recorded, no further step may be needed. Top rating: honest, proportionate, direct, preserves the team.',
          'Response D: the colleague dismisses the question and the record remains uncompleted. Now escalate to the shift lead, stating facts only. Also top rating — C was correct at its level, and this is correct at the next level: the ladder continues.',
          'The pattern: A fails on integrity, B fails on proportion and channel, C and D pair honesty with the right channel at the right level — the consensus-rated best actions.',
        ],
      },
      {
        kind: 'para',
        text: 'Perspective-taking items reward the same inventory stated as a habit. Before judging any action in a scenario, name the parties and the stakes: the user or client (safety, dignity, information), you (competence, honesty, workload), colleagues (fairness, morale), institution (rules, reputation, risk). Watch for the built-in asymmetry markers: scenarios are written so the cheapest convenient option is usually the one that sacrifices the least powerful party — the tired colleague\u2019s shortcut lands on the patient; the skipped explanation lands on the family. When an option\u2019s cost is borne by someone absent from the conversation, treat that as a flag, and let the response that informs and involves them rise.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'You realise you made a small error in a submitted report. Nobody has noticed. The best-rated action is:',
            options: [
              'wait — if no one notices, no harm done',
              'correct it quietly in the next revision without mention',
              'report the error promptly, state its impact, and propose the correction',
              'mention it casually weeks later in conversation',
            ],
            answer: 2,
            explain: 'Integrity plus action: prompt, honest disclosure with an impact statement and a fix. Silent correction (B) hides a process failure; waiting (A) leaves stakeholders acting on wrong information.',
          },
          {
            q: 'A distressed client asks a question you cannot answer and you are mid-shift alone at the desk. The most appropriate FIRST action:',
            options: [
              'guess an answer to be helpful',
              'acknowledge the question, say you will find out, and contact the responsible colleague or source',
              'tell them no one can help today',
              'research it yourself after your shift',
            ],
            answer: 1,
            explain: 'Honesty about limits plus immediate routing through the proper channel. Guessing violates integrity; deferral without acknowledgment abandons the client.',
          },
          {
            q: 'A colleague consistently misses handover information. Your team\u2019s work is slipping. Best-rated sequence:',
            options: [
              'raise it privately with the colleague, agree a fix, and if it continues, involve the supervisor',
              'report them to the supervisor immediately',
              'compensate silently by doing their part yourself',
              'mention it in the group chat so everyone knows',
            ],
            answer: 0,
            explain: 'The ladder in order: lowest appropriate level first, proportionate and private; escalation only if the problem persists. Immediate reporting is disproportionate; silent compensation conceals a team risk; public shaming damages the team.',
          },
          {
            q: 'An action is rated "appropriate but ineffective" most likely because it:',
            options: [
              'is honest but does not actually resolve or route the problem',
              'breaks a rule to solve the problem',
              'involves the supervisor too early',
              'protects the client at staff expense',
            ],
            answer: 0,
            explain: 'Appropriateness tracks ethics and policy; effectiveness tracks outcome. Documenting-and-waiting is the classic honest-but-inert option — the fix is pairing it with action at your level or the next one.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Five reliable traps: choosing loyalty to colleagues over the affected person — consensus always ranks the vulnerable party first; confusing "not my job" with professional boundaries (boundaries say whom to route to, not whether to care); skipping the private-first conversation; treating confidentiality as absolute when defined safety exceptions exist — and its mirror, breaking it casually; and answering as yourself under exam-day anxiety rather than as the trained professional the scheme assumes. When torn between two options, the one that both protects the person AND keeps an accurate record is nearly always the better rating.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: Applying Principles — the same rule-to-case logic in normative form.',
          'Next: the stress and coping lesson — managing your own state is part of professional judgement.',
          'Reference reading: the official situational-judgement test framework and good-medical-practice style guidance published by admissions and regulator bodies.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Integrity first: honest records, prompt disclosure, no small falsities.',
          'Escalate through the ladder: act at your level, then route upward with facts.',
          'Inventory stakeholders; protect the most vulnerable stake first.',
          'Communicate early, privately where possible, completely when handing over.',
          'Pair appropriateness with effectiveness — the top rating does both.',
        ],
      },
    ],
  },
  {
    id: 'fnd-visual-pattern-rules',
    title: 'Nonverbal Reasoning: Shape Attributes, Series and Rule Detection',
    domain: 'Foundation Learning',
    field: 'Nonverbal Reasoning',
    branch: 'Figural Patterns',
    tier: 'intermediate',
    concepts: [
      'The attribute inventory: shape, count, rotation, shading, size, position',
      'Series: what changes, what stays',
      'Analogies: A is to B as C is to —',
      'Odd-one-out and rule detection',
      'Figure formation and decomposition',
      'Tracking two features at once',
      'Systematic elimination over intuition',
    ],
    words: 1367,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Nonverbal reasoning strips language out of logic and leaves pure pattern: a row of figures obeying a hidden rule, one figure breaking it, or a matrix whose missing cell the rule determines. The method that beats these items is not an eye for patterns but a checklist: inventory the attributes each figure can vary — shape family, element count, rotation, shading, size, position — then track which attribute changes and how between consecutive frames. Every rule a test uses is some combination of those six attributes changing, staying, or trading off, so a systematic scan finds in seconds what intuition finds by luck. This lesson builds the inventory, the three item formats, and the two-feature tracking habit that separates fast solvers from flatterers.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Figural items are the purest measure of controlled comparison on any reasoning paper: no vocabulary, no prior knowledge, just rule-finding under time. The inventory method also generalises — it is the same disciplined attribute-scanning that powers debugging, diagram reading and data checking in every technical job.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Attribute inventory', def: 'The six axes every figure can vary along: shape family (which forms appear), count (how many of each), rotation (orientation and its step), shading (filled, empty, hatched, colour), size (large, small, growing), position (arrangement, overlap, distance). Scan in this fixed order every time — a fixed order beats a smart glance because it cannot be skipped by panic.' },
          { term: 'Series items', def: 'Four or five frames evolve; find the next. The rule is a per-attribute schedule: count increases by one, rotation advances 45 degrees clockwise, shading alternates. Read each attribute across the row separately — series rules are almost always one or two attributes changing while the rest stay fixed.' },
          { term: 'Analogy items', def: 'A is to B as C is to —: the first pair demonstrates the transformation; apply the SAME transformation to C. The discipline is naming the transformation explicitly ("rotate 90 degrees, add a dot") before looking at options; options are built to contain each single-step half of the transformation, so partial matches abound.' },
          { term: 'Rule detection and odd-one-out', def: 'One frame violates the rule the others share. Find the rule first from the majority — what four frames hold constant — then test the fifth against it. Scanning for the constant is faster than scanning for the difference: violations hide, constants advertise.' },
          { term: 'Figure formation', def: 'Which combination of pieces assembles into the target shape — mentally decompose the target (a notch here, a diagonal there) and match parts, watching for mirrored pieces that look right but fit wrong. Dissect the target\u2019s outline first; the outline\u2019s corners tell you which candidate edges must meet.' },
          { term: 'Two-feature tracking', def: 'Most medium and hard items vary two attributes at once, often in opposite directions (count rises while size falls). Holding two schedules in mind is the trained skill: name both aloud ("plus one arrow, minus one square"), and check the answer satisfies BOTH, because every option satisfies one.' },
        ],
      },
      {
        kind: 'para',
        text: 'Time discipline is part of the method. First pass on any item: one full inventory scan, then commit to the best-supported rule; if no rule emerges within the scan, eliminate options that fail the strongest single attribute (count is usually decisive) and choose among survivors. Marking a hard item and moving on is correct strategy — figural sets are dense and evenly weighted, so three easy items beat one stubborn matrix. The trained habit is trusting the inventory over the impression: an option that "looks right" but violates one named attribute is wrong, and an option that looks odd but satisfies every schedule is right.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'A two-feature series, decoded',
        steps: [
          'Frames: (1) one large filled triangle pointing up; (2) two medium filled triangles, the leading one pointing up; (3) three small filled triangles, the leading one pointing up; (4) four small empty triangles, leading one pointing up.',
          'Inventory scan — count: 1, 2, 3, 4 → next has five. Size: large, medium, small, small → suspects: size stopped mattering; not the rule. Shading: filled, filled, filled, empty → suspect a switch at the end.',
          'Re-scan shading against count: the number of EMPTY triangles is 0, 0, 1, 2 → next has three empty (and two filled, since five total). The size anomaly was a distractor; the real second feature is cumulative emptying.',
          'Rotation: leading triangle points up in every frame → constant, ignore.',
          'Answer requirement: five small triangles, three empty and two filled, leading triangle up. Options that show five filled triangles fail the empty-count schedule; options with four fail the count schedule.',
          'The habit generalises: when one schedule seems to break, re-scan the odd attribute as a CUMULATIVE quantity rather than a per-frame state — that single reinterpretation unlocks most "impossible" series.',
        ],
      },
      {
        kind: 'para',
        text: 'Odd-one-out items reward the same inventory run against the majority. Four frames share a rule — interior cross present, rotation multiples of 60 degrees, two elements — and the fifth breaks exactly one attribute. Find the constant set first, and prefer the simplest rule that fits all four: with count, rotation and shading all available, the common rule is usually one attribute, and the violation is one attribute. When two frames both look odd, widen the rule: a rule covering four frames that brands two as violators is mis-stated — recheck rotation steps and cumulative counts before trusting either candidate.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A series shows a square rotating 90 degrees clockwise each frame. The fifth frame\u2019s orientation is:',
            options: [
              'same as the first — the cycle resets after four',
              'rotated 450 degrees — continue past the cycle',
              'rotated 90 degrees counter-clockwise',
              'depends on shading',
            ],
            answer: 0,
            explain: 'Rotation is modular: 90-degree steps over four frames return to the start, so frame five matches frame one. Options built on linear rotation past 360 ignore the cycle.',
          },
          {
            q: 'In an analogy item, A to B adds one circle and doubles the shading stripes. C has two circles. The correct D must:',
            options: [
              'add one circle only',
              'double the stripes only',
              'have three circles AND doubled stripes',
              'match whichever option looks most like B',
            ],
            answer: 2,
            explain: 'The transformation has two components; the analogy applies BOTH to C: two circles become three, and the stripe count doubles. Options honouring one component are the standard distractors.',
          },
          {
            q: 'Five frames share: even element count, top-right rotation, no shading. A candidate odd-one-out differs in shading but fits count and rotation. You should:',
            options: [
              'confirm it as the odd one — any single violation suffices',
              'recheck: a rule violation must also be consistent with the others being regular',
              'reject it — shading is not in the inventory',
              'pick the largest frame instead',
            ],
            answer: 0,
            explain: 'Odd-one-out needs exactly one attribute violating the majority rule; the shading frame fits every other attribute, so it is the violator. Option 2\u2019s worry applies when TWO frames look odd.',
          },
          {
            q: 'The core reason for scanning attributes in a fixed order is:',
            options: [
              'fixed order is faster for easy items only',
              'it prevents attribute-blindness under time pressure — every axis gets checked',
              'test-setters order rules by difficulty',
              'it avoids the need to track two features',
            ],
            answer: 1,
            explain: 'Panic narrows attention to one salient attribute; a fixed scan guarantees the second feature is seen — and hard items hide in exactly that second feature.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The classic losses: fixing on the first attribute that changes and ignoring the second schedule — the standard hard-item trap; treating rotation as linear past a completed cycle; reading mirrored pieces as fitting in formation items; and impression-based elimination, where an option "looks right" while violating one named attribute. Against all of these the defence is the same: name the schedules out loud, check the answer against BOTH, and never let appearance overrule an attribute you have explicitly tracked.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: Experimental Design — the same controlled-comparison instinct in scientific form.',
          'Next: mathematics sequences and series — the numeric twin of figural series.',
          'Revision cue: invent a five-frame series varying two attributes, then solve it a day later from cold.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Inventory six attributes in a fixed order: shape, count, rotation, shading, size, position.',
          'Series rules are per-attribute schedules; re-scan breaking attributes as cumulative counts.',
          'Analogies require naming the full transformation and applying every component.',
          'Odd-one-out: find the majority rule first, then the single violating attribute.',
          'Hard items hide in the second feature — track two schedules and check both.',
        ],
      },
    ],
  },
]

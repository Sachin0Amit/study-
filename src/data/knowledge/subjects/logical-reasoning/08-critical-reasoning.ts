/**
 * Knowledge Universe — Logical Reasoning — Chapter 08: Critical Reasoning
 * 3 lessons · ~5,483 words
 * field: Verbal Reasoning
 * legacy sources: languages-literature.ts, x16-exam-skills.ts, x21-skills-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Critical Reasoning, Passage Judgements, Principle Application]
 *
 * Lessons (snapshot at reorganization):
 *   08.1 eng-principle-application — Applying Principles: From Rule to Case
 *   08.2 eng-verbal-reasoning-passage-claims — True, False, Can’t Tell: Judging Claims Against the Passage
 *   08.3 eng-critical-reasoning-arguments — Critical Reasoning: Breaking Down Arguments for Exams
 */
import type { KnowledgeTopic } from '../../types'

export const logicalReasoningCh08: KnowledgeTopic[] = [
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
    id: 'eng-verbal-reasoning-passage-claims',
    title: 'True, False, Can\u2019t Tell: Judging Claims Against the Passage',
    domain: 'Languages & World Literature',
    field: 'Verbal Reasoning',
    branch: 'Passage Judgements',
    tier: 'core',
    concepts: [
      'The three-verdict rule: the text is the only witness',
      'True: explicitly supported, not merely plausible',
      'False: explicitly contradicted by the text',
      'Can\u2019t tell: neither — and outside knowledge is the trap',
      'Fact, opinion and inference on the page',
      'Tone and attitude markers: the author between the lines',
      'Drawing conclusions without overreaching',
      'Scope qualifiers: all, some, only, tend to',
    ],
    words: 1876,
    readMins: 9,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'UCAT Verbal Reasoning compresses a hard discipline into a brutal format: a passage of a few hundred words, four statements, and three possible verdicts on each — True, False, or Can\'t Tell — at roughly two minutes for the set. CLAT\'s English section asks the same skill in gentler dress (what is the author\'s tone, which conclusion is best supported), and LSAT Reading Comprehension\'s author-attitude questions are the same judgement at leisure. The discipline itself is textual epistemology: separate what the passage says from what is plausible, and decide verdicts on textual evidence alone. This lesson builds the three-verdict logic from the ground up, then adds the judgement layer that rides on it — fact versus opinion, tone and attitude markers, and how far a conclusion can run before it overreaches the page.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'These judgements are the daily work of any profession that consumes documents: the clinician reading a trial report, the lawyer reading a witness statement, the analyst reading a claim in a filing, the citizen reading a claim on social media. UCAT tests it because medicine drowns in literature where "the study did not say that" is a patient-safety skill. The exam\'s three-verdict format is just the cleanest training rig ever built for asking one question: how do you know?',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'True (verdict)', def: 'The passage explicitly supports the statement — its information is stated or follows by a small, safe step from what is stated. Plausibility alone never earns a True.' },
          { term: 'False (verdict)', def: 'The passage explicitly contradicts the statement — some textual detail runs directly against it. A statement that merely cannot be confirmed is NOT False; see Can\u2019t tell.' },
          { term: 'Can\u2019t tell (verdict)', def: 'The passage neither states nor contradicts the claim. The information gap, not your ignorance, is the verdict — the passage itself does not settle it. Bringing in outside knowledge to break the tie is the format\'s signature error.' },
          { term: 'Scope qualifier', def: 'Words that set claim size: all, some, most, only, always, tends to, may. Verdicts hinge on them — a passage supporting "some cities" does not support "most cities", and "only" is almost always a trap.' },
        ],
      },
      {
        kind: 'para',
        text: 'The three-verdict rule begins with a boundary decision that feels alien to well-read candidates: the passage is the only witness. Everything you know from elsewhere — the real-world fact, the textbook answer, the sensible prior — is inadmissible. UCAT\'s own materials are explicit that the passages are self-contained, and several of its published trap statements are true-in-reality but unmentioned-in-text, engineered precisely to catch candidates answering from memory instead of from the page. The practical procedure for every statement is therefore fixed: locate the relevant text region (the skimming-and-scanning lesson\'s anchoring does this job), read it properly, and only then compare statement against text. Never read the statement first and then go looking for confirmation — that is how outside knowledge sneaks in, dressed as recognition.',
      },
      {
        kind: 'para',
        text: 'True is a higher bar than it looks. The statement is True when the passage explicitly says it, or when it follows from the text by a step so small the passage clearly owns it — converting "sales doubled between 2010 and 2012" into "sales were higher in 2012 than in 2010" is safe. The bar breaks when the step needs new information: "sales doubled, so the product must have improved" imports a causal story the passage never supplied, and that verdict is Can\'t tell, however plausible the story feels. Candidates fail this in one direction more than any other — they reward statements for being likely. The corrective question is mechanical: which words in the passage, exactly, support this? If no words can be pointed at, the answer is not True.',
      },
      {
        kind: 'para',
        text: 'False requires a contradiction, not an absence. If the statement says "the scheme was popular with residents" and the passage says "protests followed the launch", you may infer tension but not unpopularity — that is Can\'t tell. The False verdict is earned only when some textual detail runs against the statement: the passage says the scheme launched in 2019 while the statement claims 2018; the passage says most users preferred option A while the statement says option B won. A clean test: for a candidate False, you should be able to name the conflicting detail. For a candidate Can\'t tell, the honest report is "the passage is silent here" — and silence is a verdict, not a failure of comprehension. Practised under time pressure, the discipline compresses to a pair of checks: can I point at support, or can I point at conflict? If neither pointer exists, the middle verdict is not a guess — it is the answer.',
      },
      {
        kind: 'para',
        text: 'Underneath verdicts sits the fact-opinion-inference distinction, because statements and questions constantly blur the three. A fact on the page is verifiable within the text ("the clinic treated 4,000 patients"). An opinion is the author\'s evaluation, signalled by judgement words ("remarkable", "badly designed", "unfortunately") and by hedged verbs ("seems", "arguably"). An inference is content the author implies without stating. Exams test the boundaries: "the author believes the policy failed" is answerable even when "the policy failed" is not — belief-statements are facts about the author\'s stance, and the stance is on the page. This is also where tone and attitude live. Authors signal stance through evaluative vocabulary, through what they choose to mention first and last, through irony and contrast, and through concessive markers ("of course, supporters claim... but the numbers tell another story"). Tone questions in CLAT and author-attitude questions on the LSAT are read off exactly these signals: critical but fair, sympathetic yet cautious, openly dismissive. The method is to collect the evaluative words in one sweep and let them vote — tone is rarely stated, but it is always signalled.',
      },
      {
        kind: 'para',
        text: 'Drawing conclusions — the "best supported" judgement — is the same discipline aimed forward. A safe conclusion stays inside the text\'s scope qualifiers: if the passage discusses one hospital, the conclusion is about that hospital, not healthcare; if the data covers two years, the conclusion resists forecasting a decade. Strong exams build wrong options from three recipes, and recognizing the recipes is most of the defence. Overreach: true for the specific case, extended to the general ("this survey of commuters found..." becomes "commuters everywhere..."). Causal leap: two things co-occur in the text, the option marries them ("enrolment rose after the campaign, therefore the campaign caused it" — the text never said so). And the reintroduced outside fact: an option that fits the world but not the passage. The winning habit on best-supported questions is elimination by scope — cross out every option that travels beyond the text\'s own qualifiers, and the survivor is usually clean.',
      },
      {
        kind: 'para',
        text: 'Finally, the pacing frame for the strictest format. UCAT Verbal Reasoning runs at roughly two minutes per passage-plus-four-statements, which means about half a minute per verdict — too little for leisure and too much to waste on any single statement. The working protocol: skim the passage for structure (the scanning lesson\'s survey, faster), work statements in order but flag any that stalls past thirty seconds, and return only if seconds remain at the end. Because the format scores no penalty for wrong answers, a flagged statement gets its best guess rather than a blank. Above all, keep the three-verdict reflex intact under speed: verdicts come from pointers — point at support (True), point at conflict (False), point at silence (Can\'t tell) — and a candidate who can name the pointer is never guessing.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Four Statements, One Passage',
        steps: [
          'Passage: "When the city introduced free bicycle loans in 2019, ridership on the riverside route rose 40% within a year. Councillor Alvarez, who opposed the scheme, called it a costly gimmick. A follow-up survey found most users already owned bicycles."',
          'Statement 1: "Riverside cycling increased after the scheme launched." — supported directly by the ridership sentence. Verdict: True (pointer: the 40% sentence).',
          'Statement 2: "The scheme cost the city more than it recovered in revenue." — the passage never discusses costs or revenue; Alvarez\'s opinion is not a budget. Verdict: Can\'t tell (pointer: silence).',
          'Statement 3: "Councillor Alvarez supported the scheme from the outset." — directly contradicted ("opposed the scheme"). Verdict: False (pointer: the Alvarez sentence).',
          'Statement 4: "Most users of the scheme did not need it to obtain a bicycle." — the survey found most users already owned bicycles; a safe small step. Verdict: True (pointer: the survey sentence).',
          'Note the shape: True-Can\'t tell-False-True, each verdict earned by a pointable line — no verdict came from plausibility, and none from outside knowledge.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A statement is factually true in the real world but never mentioned in the passage. Its verdict is…',
          options: ['True — the statement is true', 'False — the passage omitted it', 'Can\'t tell — the passage neither states nor contradicts it', 'invalid — such statements do not appear'],
          answer: 2,
          explain: 'Verdicts are about the text, not the world; a true-but-unmentioned statement is the format\'s classic Can\'t-tell trap.',
        },
        {
          q: 'A False verdict requires…',
          options: ['the statement to seem unlikely', 'no supporting line to be findable', 'a textual detail that directly runs against the statement', 'the author\'s opinion to differ'],
          answer: 2,
          explain: 'Absence of support is Can\'t tell; False needs a pointable conflict.',
        },
        {
          q: '"The author unfortunately had to conclude the trial was inconclusive." The evaluative signal in this sentence is…',
          options: ['"trial"', '"unfortunately"', '"conclude"', 'there is none'],
          answer: 1,
          explain: 'Judgement words like "unfortunately" carry the author\'s attitude — the raw material of tone questions.',
        },
        {
          q: 'A passage describes one survey of commuters in one city. The best-supported conclusion may lawfully extend to…',
          options: ['commuters everywhere', 'that survey\'s respondents in that city', 'all transport policy', 'future decades of commuting'],
          answer: 1,
          explain: 'Conclusions stay inside the text\'s scope qualifiers; crossing the survey\'s population or timeframe is overreach.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Answering from outside knowledge — the single deadliest habit in this format. Treating Can\'t tell as failure and forcing a True or False to avoid it. Rewarding plausibility: likely is not supported. Reading statements before the text and hunting for confirmation. Missing scope qualifiers ("some" graded as "all"; "only" smuggled in). Confusing the author\'s stance with the truth of the claim — "the author believes X" can be True even when X is not. And ignoring opinion markers, which empties every tone and attitude question of its evidence.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the skimming-and-scanning lesson — verdicts begin by locating the right lines fast. Companion: the Library\'s critical-reasoning lesson, which owns the argument-anatomy layer (premises, assumptions, strengthen and weaken) that UCAT Decision Making and LSAT Logical Reasoning add on top of these passage judgements — this lesson deliberately leaves that layer to it. Follow-ons: the long-turn speaking lesson for the same exams\' speaking half and the argument-essay lesson for the writing half.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'The passage is the only witness; outside knowledge is inadmissible by design.',
        'True = pointable support (stated, or a step so small the text owns it).',
        'False = pointable conflict; absence of support is never False.',
        'Can\'t tell = pointable silence — a verdict, not a failure.',
        'Separate fact, opinion and inference; stance-statements are facts about the author.',
        'Tone and attitude are read from evaluative words, ordering and concessive markers.',
        'Conclusions obey scope qualifiers; eliminate overreach, causal leaps and reintroduced outside facts.',
        'Under time: half a minute per verdict, flag and guess on stall — pointers, not hunches.',
      ] },
    ],
  },
  {
    id: 'eng-critical-reasoning-arguments',
    title: 'Critical Reasoning: Breaking Down Arguments for Exams',
    domain: 'Languages & World Literature',
    field: 'Verbal Reasoning',
    branch: 'Critical Reasoning',
    tier: 'core',
    concepts: [
      'Premise-conclusion-assumption anatomy',
      'Indicator words and argument mapping',
      'The negation test for assumptions',
      'Strengthen and weaken: the evidence gap',
      'Inference: must be true',
      'Flaws and the classic fallacies',
      'Paradox and resolution',
      'Method and role-of-statement questions',
    ],
    words: 2333,
    readMins: 12,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'A short paragraph, five options, ninety seconds: that is the critical reasoning question, and it decides large slices of the LSAT (logical reasoning is half the scored test since Logic Games were dropped in August 2024), CLAT\'s Logical Reasoning section, GMAT verbal and CAT\'s VARC paper. The skill is constant across all of them: read a compact argument, find its load-bearing parts, and judge what would make it stronger, weaker or untenable. This lesson builds that skill as a system — argument anatomy first, then the assumption test that powers it, then each question family with its own method — following the question-type taxonomy of LSAC and GMAC official prep materials. It is a different discipline from reading comprehension, which the Library\'s reading lessons cover on long passages, and from formal symbolic logic, which belongs to the aptitude reasoning chapters.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Critical reasoning is the most trainable section on any aptitude test — scores move tens of percentiles with method, not genius — and the same anatomy (claim, support, unstated bridge) is the backbone of legal reasoning, editorial reading and business cases. CLAT passages, LSAT prompts and GMAT arguments are built from the same dozen patterns; learn the patterns and the questions become recognisable rather than mysterious.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Every argument has three parts. The conclusion is the claim being pushed — the point the arguer wants you to accept. The premises are the stated reasons offered for it. The assumptions are the unstated links: statements that must be true for the premises to actually support the conclusion. Train yourself to find the conclusion first, using indicator words: therefore, thus, so, consequently, it follows that, clearly, the answer is. Premise indicators: because, since, given that, as shown by, after all, for. Assumptions never appear in the text — that is what makes them the exam\'s favourite target, because an argument can look airtight and still stand on a hidden plank that one new fact can kick away.',
      },
      {
        kind: 'para',
        text: 'The single most powerful technique in the section is the negation test for assumptions. Take a candidate assumption, negate it, and ask whether the argument still stands. If the negation destroys the conclusion, the candidate is a genuine assumption — a necessary condition. If the argument survives the negation, the candidate was merely a nice-to-have, and it is the wrong answer. Example: "The new expressway must be causing the town\'s traffic surge — average journey times through town rose 12 per cent in the year since the expressway opened, and expressway users are exempt from the town\'s congestion charge." Candidate: "The expressway did not merely replace a faster route that closed the same year." Negate it — suppose the old ring road did close the same year — and the whole inference collapses: that is the assumption. Candidate: "The congestion charge is unpopular." Negate it: the argument does not care. One negation kills, the other does not — the test tells you which is load-bearing, and answer options for assumption questions are designed so that two or three survive everything except the negation test.',
      },
      {
        kind: 'para',
        text: 'Strengthen and weaken questions run on the evidence gap: the space between what the premises establish and what the conclusion needs. The method is to state the gap as a question — "the argument assumes WHAT about the link between the data and the claim?" — and then find the option that closes (strengthen) or widens (weaken) that exact gap. Two disciplines matter. Attack the reasoning, not the topic: an option that merely expresses dislike of the conclusion, or adds an unrelated fact, is out of scope. And direction matters: a weaken answer supplies new information that makes the conclusion less likely — typically an alternative explanation, a sampling flaw, or a reversal of the causal arrow. The six classic weaken moves: alternative cause (something else did it), reverse causation (the effect produces the supposed cause), sampling bias (the data come from an unrepresentative slice), confounder (a third factor drives both), timing (the correlation predates nothing useful), and threshold (the change is too small to matter). Every correct weaken answer on these tests is one of those six wearing a story.',
      },
      {
        kind: 'para',
        text: 'Inference questions invert the relationship: instead of a conclusion to attack, you get premises and must find what must be true — the answer is the one statement that cannot be false if the passage is true. The discipline is closure: no outside knowledge, no probability talk, nothing about the future beyond what the text guarantees. Wrong answers are usually could-be-true statements — plausible, consistent with the passage, but not forced by it — or exaggerations that upgrade "some" to "most". If the passage says "every participant who improved had slept more than seven hours", it does not follow that sleep caused improvement (that would be a causal trap), nor that most participants improved (scope creep), only that no improver slept seven hours or fewer. Method-of-argument and role-of-statement questions ask you to describe the structure instead of evaluating it — "the argument proceeds by" or the boldfaced-statement format of the GMAT, where you classify each highlighted sentence as premise, conclusion, counterpoint, evidence against a rival view, or concession before attack. For those, the map you drew while finding the conclusion is already the answer key.',
      },
      {
        kind: 'para',
        text: 'Flaw questions name the gap, and the same fallacies recur so often they should be recognised on sight. Ad hominem: attacking the person (a scientist funded by industry, so wrong — perhaps suspect, not thereby wrong). Straw man: restating an opponent\'s claim in a weaker form and demolishing that. False dilemma: presenting two options as exhaustive when others exist. Post hoc ergo propter hoc: after it, therefore because of it — the rooster crows before dawn. Correlation-as-causation, the parent fallacy of the last two, with its third-variable and reverse-causal children. Hasty generalisation: three data points to a universal claim. Slippery slope: one modest step presented as inevitably ending in catastrophe. Circular reasoning: the conclusion smuggled in as a premise. Equivocation: a key word shifting meaning mid-argument. Appeals to authority, popularity and tradition fill out the list. LSAT answer choices rarely name them; they say "takes for granted that..." (an assumption) or "fails to consider that..." (an overlooked possibility) — you still need the pattern to spot which one.',
      },
      {
        kind: 'para',
        text: 'Paradox and resolution questions present two facts that seem not to fit together — "the pharmacy\'s generic sales rose after a price rise, though generics are supposed to be price-sensitive" — and ask for the fact that reconciles both. The answer must make both statements true, not explain one away; typically it introduces a changed constraint (a branded rival rose faster, the price rise funded wider availability). Timing strategy is the last pillar: budget roughly ninety seconds to two minutes per question, read the question stem before the stimulus so you know the task, predict an answer before reading options, and treat elimination as the method — four wrong answers, each wrong for a nameable reason (out of scope, wrong direction, too strong, wrong comparison), leave one standing. When a question passes your budget, flag it and move; the section rewards the disciplined more than the heroic, and flagged questions answered in the last minutes are answered with fresh eyes.',
      },
      { kind: 'example', title: 'Worked Example — Weaken with Full Elimination', steps: [
        'Read the stem first — it says weaken. Stimulus: "The city\'s new bike-share scheme must be reducing traffic congestion. Since the scheme launched in April, average commute times have fallen 9 per cent, and bike-share trips now exceed 20,000 a day. The council should therefore double the fleet to cut congestion further."',
        'Map the argument: conclusion — the scheme is reducing congestion (and should be doubled). Premises — commute times fell since April; ridership is 20,000 trips a day. The gap — did the scheme cause the fall, and would more bikes mean less congestion? Note the argument rides entirely on a post hoc correlation.',
        'Predict before looking: a weaken answer shows something else caused the fall, or shows the correlation does not mean what it claims. Keep that prediction in mind as the standard.',
        'Eliminate by name: (A) commute times also fell 8 per cent in comparable cities with no bike-share — supplies an alternative cause; keep, it hits the exact gap. (B) most riders previously walked or took the bus, not cars — attacks the mechanism, tempting; hold. (C) the scheme costs the council 40 lakh a year — irrelevant to causation; eliminate, out of scope. (D) bike-share membership grew every month — strengthens; wrong direction; eliminate. (E) the city also resynchronised its traffic signals in May — another alternative cause; hold.',
        'Choose between survivors by directness: (B) says riders were not drivers, so substitution is limited — but 20,000 trips could still include enough car-switchers, and the conclusion could survive with reduced effect. (E) is an alternative cause but only one corridor\'s worth. (A) is the strongest: a matched comparison group showing the same fall without any scheme makes the causal claim close to unsupportable. Answer (A) — and note that if the question had said strengthen, the answer would have been a fact making (A)-style explanations impossible, such as times holding steady in cities without schemes while the city\'s fell 9 per cent.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Exam practice: do official LSAT and GMAT questions untimed first to install the method, then timed sets of ten to install the pace.',
        'Legal reasoning: CLAT\'s rule-application passages are assumptions and strengthen questions wearing robes — identify the rule, the fact gap and the inference.',
        'Editorial literacy: the fallacy list turns op-ed pages and cable news into drills — find the conclusion, find the gap, name the move.',
        'Business writing: the strengthen test is a pre-mortem for your own proposals — attack your argument the way a weaken question would.',
        'Interviews and case studies: "what would change your mind?" is the negation test in conversational form.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Reading the stimulus before the stem wastes your first pass — always know the task first. Choosing an answer because it is true of the world rather than true of the argument: outside knowledge is out of scope even when correct in reality. Confusing weaken with refute: the right answer makes the conclusion less likely, not impossible. Falling for causal language in inference questions — correlation in the premises never licenses causation in the answer. Missing direction reversals ("most" versus "some", "could" versus "must") planted in the options. And spending four minutes on one heroic question: the section is a points-per-minute game, and the flag-and-return discipline is worth more marks than any single battle.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'conclusion', def: 'The claim an argument exists to establish — find it first, using therefore, thus, so, clearly.' },
        { term: 'assumption', def: 'An unstated statement that must be true for the premises to support the conclusion; the exam\'s favourite target.' },
        { term: 'negation test', def: 'Negate a candidate assumption; if the argument collapses, it is the assumption. The section\'s sharpest tool.' },
        { term: 'evidence gap', def: 'The space between what premises show and what the conclusion needs; strengthen closes it, weaken widens it.' },
        { term: 'must-be-true', def: 'Inference standard: the only answer that cannot be false if the passage is true — no probability, no outside knowledge.' },
        { term: 'alternative cause', def: 'The classic weaken move: a second explanation for the same correlation.' },
        { term: 'post hoc fallacy', def: 'Assuming that because B followed A, A caused B — after it, therefore because of it.' },
        { term: 'straw man', def: 'Refuting a weakened restatement of an opponent\'s position instead of the position itself.' },
        { term: 'out of scope', def: 'The most common wrong-answer crime: true or plausible material that the argument never depends on.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: '"Sales rose every quarter since the new logo launched, so the logo drove the growth." The argument assumes…',
          options: ['the logo is attractive', 'nothing else changed that could plausibly drive sales over the same period', 'customers noticed the logo', 'competitors kept their logos'],
          answer: 1,
          explain: 'Negate it — suppose a tariff cut or a rival\'s exit happened the same quarter — and the inference collapses. That is the assumption by the negation test.',
        },
        {
          q: 'Which fact most weakens: "Our town\'s recycling rate doubled after the awareness drive, so the drive worked"?',
          options: ['the drive cost 2 lakh rupees', 'neighbouring towns without any drive saw recycling rates double the same year', 'the town has a young population', 'recycling is good for the environment'],
          answer: 1,
          explain: 'A matched comparison group with the same change and no treatment is the strongest possible alternative-cause evidence.',
        },
        {
          q: '"Every student who scored above 90 attended all the revision sessions." It must follow that…',
          options: ['attending revision sessions raises scores', 'some who attended all sessions scored above 90', 'no student who scored above 90 missed a revision session', 'most revision attendees scored above 90'],
          answer: 2,
          explain: 'Only the restatement is forced. The causal reading (sessions raise scores) and the scope exaggerations (that any attendee scored above 90, or that most did) go beyond what "every high scorer attended" guarantees.',
        },
        {
          q: 'Restating an opponent\'s position in a deliberately weaker form and attacking that is called…',
          options: ['ad hominem', 'straw man', 'false dilemma', 'post hoc ergo propter hoc'],
          answer: 1,
          explain: 'The straw man refutes something nobody claimed; ad hominem attacks the person, false dilemma forces two options, post hoc confuses sequence with cause.',
        },
      ] },
      {
        kind: 'para',
        text: 'Critical reasoning reduces to four moves, drilled until they are reflexes: find the conclusion, expose the assumption, measure the gap, eliminate by name. Everything else — the fallacy labels, the question families, the timing discipline — is scaffolding around those moves. Ten questions a day with full written elimination reasons, for two weeks, is the standard preparation arc; the students who write why each wrong option is wrong are the ones who stop falling for the same trap twice.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: none — this is core-tier reasoning. Pair it with the reading-and-literacy lessons for comprehension of long passages (the other half of CLAT and CAT verbal) and the aptitude reasoning chapters for formal logic, syllogisms and coding patterns. Official LSAC and GMAC prep materials are the source of the most exam-faithful practice questions; editorial pages are the best free gymnasium.',
        tone: 'path',
      },
    ],
  },
]

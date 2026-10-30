import type { KnowledgeTopic } from '../types'

/** CROSS-VERIFY PASS X52 (2026-10-26): Study Skills & Learning Science (book 1,
 *  ku-study-skills) cross-verified against the world's most popular study-skills
 *  book — Stella Cottrell, "The Study Skills Handbook", 5th edition (2019,
 *  Red Globe Press). The official publisher/retailer preview PDF (45 pages,
 *  ISBN 9781137610898, via api.pageplace.de) was downloaded, text-extracted and
 *  read in full: complete Table of Contents (18 chapters in sections A–B),
 *  Foreword, Introducing, Chapter 1 "Success as a student" (complete) and
 *  Chapter 2 "Gaining the most from your course" (through p. 36).
 *
 *  CROSS-VERIFY RESULT — no factual corrections were needed in our ten existing
 *  lessons: Ebbinghaus 1885, Pauk's Cornell (1949), Mueller & Oppenheimer 2014,
 *  Bjork's desirable difficulties, Luhmann's slip-box, Yerkes-Dodson and the
 *  testing effect all agree with Cottrell's account and with the chapter map of
 *  Brown/Roediger/McDaniel's "Make It Stick" (2014) read via
 *  retrievalpractice.org's chapter-by-chapter guide and summaries:
 *  1 Learning is Misunderstood (rereading myth), 2 To Learn, Retrieve,
 *  3 Mix Up Your Practice (spacing + interleaving), 4 Embrace Difficulties,
 *  5 Avoid Illusions of Knowing (calibration), 6 Get Beyond Learning Styles,
 *  7 Increase Your Abilities (growth mindset), 8 Make It Stick.
 *
 *  THREE GAPS against Cottrell's structure were identified and are filled here
 *  (each new lesson is a whole-subject-scope chapter she covers that we did not):
 *
 *  1. study-self-efficacy-mindset — her Chapter 1's core ("Take charge of your
 *     success": active agency, vision of success, the ten self-efficacy skills,
 *     C·R·E·A·M) plus Make It Stick chs 6–7 (learning-styles myth, growth
 *     mindset). Carved against fnd-metacognition-calibration (owns calibration
 *     of judgments), fnd-habits-behavior-design (owns automaticity) and
 *     fnd-deliberate-practice (owns the hours-to-expertise mechanics): this
 *     lesson owns the BELIEFS that drive strategy choice.
 *  2. study-time-management — her Chapter 6 "Time management as a student"
 *     (TOC), plus Ch 1's study-week/independent-study content read in the
 *     preview (a full-time course ≈ a 35–40-hour working week; the risks table:
 *     "underestimating how long study tasks take", "missing deadlines",
 *     "spending all your time in study"), plus Oakley's handout "Ten Rules of
 *     Good and Bad Studying" (A Mind for Numbers; downloaded from
 *     advising.nd.edu, image PDF read against the widely mirrored text: task
 *     lists, "eat your frogs first" — hardest work first). Carved against
 *     every-time-management-productivity (career book — owns general personal
 *     productivity systems), fnd-habits-behavior-design (owns automation) and
 *     study-exam-strategy (owns exam-DAY minute budgets): this lesson owns the
 *     ACADEMIC calendar layer — term to week to day.
 *  3. study-stress-wellbeing — her Chapter 7 "Managing stress and well-being"
 *     (TOC) plus Ch 1's self-efficacy skill 8 ("balancing study, work and life;
 *     managing stress"), the self-evaluation items ("identify and manage
 *     anxieties", "ask for help if I really need it") and the independent-study
 *     risk "put time aside to relax, rest, socialise". Carved against
 *     psy-stress-coping (owns appraisal theory and clinical coping),
 *     ku-mental-health cortisol physiology, study-exam-strategy (owns exam-day
 *     arousal) and fnd-spaced-repetition (owns sleep's consolidation role):
 *     this lesson owns the STUDENT'S term-level workload and recovery system.
 *
 *  Sources read while writing (legally open):
 *  - Cottrell, The Study Skills Handbook, 5th ed., Red Globe Press 2019 —
 *    official 45-page publisher preview PDF (api.pageplace.de, ISBN
 *    9781137610898): TOC, Foreword, Ch 1 complete, Ch 2 to p. 36. Read this pass.
 *  - Brown, Roediger & McDaniel, Make It Stick (Harvard UP, 2014) — chapter
 *    map via retrievalpractice.org/make-it-stick (Agarwal) and published
 *    summaries; strategies: retrieval practice, spacing, interleaving,
 *    elaboration, generation, reflection, calibration, growth mindset,
 *    learning-styles myth. Read this pass.
 *  - Oakley, "Ten Rules of Good and Bad Studying" (A Mind for Numbers
 *    handout, advising.nd.edu PDF, image-only — text read against the widely
 *    mirrored list): use recall, test yourself, chunk your problems, task
 *    lists, eat your frogs first. Read this pass.
 *
 *  SUBJECTDEPTH enrichment (2026-10-30, study-stress-wellbeing only) —
 *  sources read for the added concept paras (effort–recovery / recovery
 *  experiences / load–output curve):
 *  - Sonnentag & Fritz 2007, "The Recovery Experience Questionnaire" (J Occup
 *    Health Psychol 12(3):204, DOI 10.1037/1076-8998.12.3.204, PubMed
 *    17638488) — the four recovery experiences: psychological detachment,
 *    relaxation, mastery, control; detachment the strongest predictor of
 *    next-day well-being. Read this pass.
 *  - Sonnentag & Fritz 2015, the recovery paradox (most-strained recover
 *    least; depleted self-regulation fuels rumination) — via the recovery-
 *    science literature. Read this pass.
 *  - Meijman & Mulder 1998, "Psychological aspects of workload" (in Drenth,
 *    Thierry & de Wolff eds, Handbook of Work and Organizational Psychology,
 *    2nd ed., vol 2 Work Psychology) — effort produces acute load reactions;
 *    recovery reverses them; incomplete recovery leaves residual strain that
 *    accumulates across effort episodes. Read this pass.
 *  - Carving: allostatic load / McEwen's physiological wear is owned by
 *    health-stress-cortisol (health-wellness.ts) — this lesson crosses to it
 *    and owns the behavioral cycle only; Lazarus appraisal, eustress and
 *    problem-vs-emotion-focused coping are owned by psy-stress-coping
 *    (social-sciences.ts) — not re-taught here; day-scale arousal belongs to
 *    study-exam-strategy — this lesson owns the term-scale curve.
 */

export const x52CrossverifyPassTopics: KnowledgeTopic[] = [
    // ------------------------------------------------------------------
    {
      id: 'study-self-efficacy-mindset',
      title: 'Self-Efficacy and Mindset: Taking Charge of Your Learning',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Learning Science',
      tier: 'core',
      concepts: [
        'Active agency and a vision of success',
        'Self-efficacy and its four sources',
        'Building the four sources: mastery ladders and coping models',
        'Efficacy versus self-esteem: a task judgment, not a worth judgment',
        'Growth mindset versus fixed mindset',
        'Attribution: how you explain results',
        'The learning-styles myth',
        'Personalising learning: strategy fit, not style labels',
        'Cottrell’s ten self-efficacy skills and C·R·E·A·M',
        'The arithmetic of attempting versus avoiding',
      ],
      words: 3000,
      readMins: 15,
      addedOn: '2026-10-26',
      blocks: [
        {
          kind: 'para',
          text: 'Stella Cottrell opens the world\'s best-selling study skills handbook — The Study Skills Handbook, now in its fifth edition — not with note-taking or memory tricks but with a stranger-sounding claim: the decisive study skill is believing you are the agent of your own success. "Be an active agent on behalf of your own success," she writes in the opening chapter: don\'t wait to be told, don\'t wait to be asked, don\'t wait to be inspired — inspire yourself. Every technique in this book — retrieval, spacing, interleaving, note systems — is switched on or switched off by what you believe about whether your effort changes anything. This lesson is about those beliefs: what the research actually says about self-efficacy, mindset and the myths students carry about their own brains.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'Beliefs are not decoration on top of study strategy — they select it. A student who believes ability is fixed avoids hard courses, interprets a low grade as a verdict and abandons retrieval practice because it feels like failure. A student who believes ability is built chooses harder practice, reads feedback as data and persists. Same hours, same intelligence, opposite trajectories — the difference is what each believes about the machine they are running.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Active agency starts with a vision. Cottrell asks students to decide, concretely, what success would look like — a qualification that feeds a career, skills that found a job, a transformed sense of self, friendships, intellectual stretch — and then to check how current choices serve that picture. Her exercise "think forward" asks you to picture yourself ten years ahead and ask whether the present week\'s choices would impress that future self. The mechanism is practical, not mystical: a written vision converts vague ambition into selection criteria for how you spend the 35–40 hours a study week offers. The same chapter is blunt about what lecturers consistently report: the students who stand out are determined, plan how they will succeed, keep plans under review — and, as one lecturer put it, "the key factor is time; if they put in the hours, and use the time well, they tend to do well."',
        },
        {
          kind: 'para',
          text: 'Self-efficacy is the psychologist Albert Bandura\'s name for belief in your own capacity to execute what a task demands — and four decades of research tie it to academic performance. Bandura identified four sources, and each is buildable. Mastery experiences are the strongest: nothing persuades like watching yourself succeed at something hard, which is why starting with achievable-but-stretching tasks and banking wins compounds. Vicarious models come second: seeing a peer like you succeed ("if they can, so can I") — the exact reason peer study works as more than logistics. Social persuasion — specific, credible encouragement from a tutor who knows your work — moves the needle less but measurably. And physiological state matters: the racing heart before a presentation can be read as "I\'m competent and alert" or "I\'m about to fail" — the same arousal, opposite efficacy. The exam-strategy lesson owns that relabeling trick for test day; here it powers your belief in ordinary study.',
        },
        {
          kind: 'para',
          text: 'Belief is not enough — Bandura\'s four sources are buildable, and each can be built. Mastery responds to design: lay a ladder of achievable-but-stretching rungs and bank each rung in a visible log — your own execution is the strongest efficacy currency. Vicarious modelling can be chosen: Zimmerman and Ringle (1981) found that a coping model — a peer who persists through difficulty before cracking it — builds more self-efficacy than a flawless performance. Social persuasion works when it is specific and credible: "your setup was right, the limit step needs work" moves belief; generic praise does not. The physiological channel trains too: the racing heart before a hard problem is one arousal — practise reading it as readiness.',
        },
        {
          kind: 'figure',
          caption:
            'The four sources feeding the central belief: mastery experience (banked wins — strongest), vicarious models (a peer who copes), social persuasion (specific, credible), physiological state (readiness, not threat).',
          sketchImage: '/diagrams/study-self-efficacy-mindset-sketch.jpg',
          sketchCaption:
            'Notebook sketch: SELF-EFFICACY centre, four feeder boxes, converging arrows — Mastery experience (bank a small win), Vicarious models (a peer copes then succeeds), Social persuasion (specific feedback), Physiological state (readiness, not threat).',
          afterConcept: 3,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="The four sources of self-efficacy feeding a central belief">
  <!-- central belief box: hand-drawn double-stroke -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
    <path d="M336 178 Q438 168 542 176 Q552 232 546 284 Q440 296 338 288 Q328 232 336 178"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.5" stroke-linecap="round">
    <path d="M342 186 Q438 176 536 184 Q544 232 540 278 Q440 288 344 282 Q338 232 342 186"/>
  </g>
  <text x="440" y="224" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="21" fill="currentColor" letter-spacing="1">SELF-EFFICACY</text>
  <text x="440" y="254" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#8a8a93">your effort changes the outcome</text>
  <!-- source boxes -->
  <g fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round">
    <path d="M64 56 Q176 46 286 54 Q294 90 288 126 Q176 134 66 128 Q56 92 64 56"/>
  </g>
  <text x="175" y="42" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#059669">strongest source</text>
  <text x="175" y="86" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16.5" fill="#059669">Mastery experience</text>
  <text x="175" y="110" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="currentColor" opacity="0.85">bank a small win</text>
  <g fill="none" stroke="#e11d48" stroke-width="2.2" stroke-linecap="round">
    <path d="M594 56 Q706 46 816 54 Q824 90 818 126 Q706 134 596 128 Q586 92 594 56"/>
  </g>
  <text x="706" y="86" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16.5" fill="#e11d48">Vicarious models</text>
  <text x="706" y="110" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="currentColor" opacity="0.85">watch a similar peer cope and succeed</text>
  <g fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round">
    <path d="M64 344 Q176 334 286 342 Q294 378 288 414 Q176 422 66 416 Q56 380 64 344"/>
  </g>
  <text x="175" y="374" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16.5" fill="#d97706">Social persuasion</text>
  <text x="175" y="398" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="currentColor" opacity="0.85">specific, credible feedback</text>
  <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round">
    <path d="M594 344 Q706 334 816 342 Q824 378 818 414 Q706 422 596 416 Q586 380 594 344"/>
  </g>
  <text x="706" y="374" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16.5" fill="currentColor">Physiological state</text>
  <text x="706" y="398" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="currentColor" opacity="0.85">readiness, not threat</text>
  <!-- converging arrows with hand-drawn heads -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round">
    <path d="M258 132 Q300 160 342 177"/>
    <path d="M622 132 Q580 160 538 177"/>
    <path d="M258 338 Q300 310 342 293"/>
    <path d="M622 338 Q580 310 538 293"/>
    <path d="M331 176 L344 179 L335 168"/>
    <path d="M549 168 L536 179 L545 176"/>
    <path d="M331 294 L344 291 L335 302"/>
    <path d="M549 302 L536 291 L545 294"/>
  </g>
</svg>`,
        },
        {
          kind: 'para',
          text: 'Two distinctions keep this lesson honest. Self-efficacy is not self-esteem: esteem is a judgment of worth ("I matter"), efficacy a judgment of capability for a defined task ("I can execute what this task demands"). Pumping esteem without competence is fragile at the first hard feedback; earned efficacy survives it — praise the strategy, build the win, let the feeling follow the evidence. Efficacy is also domain-specific: high for essays, low for integration by parts, on the same Tuesday — and both can be accurate, because efficacy is a fact-check on a task, not a personality trait. So a global verdict ("I\'m bad at maths") offers nothing to act on, while "I haven\'t got integration by parts yet" points at the next practice task.',
        },
        {
          kind: 'para',
          text: 'Mindset is Carol Dweck\'s term for beliefs about whether ability is fixed or growable. Make It Stick devotes its "Increase Your Abilities" chapter to the finding: students who believe learning and intelligence are malleable focus on learning and growing with increasing challenges rather than defending a performance snapshot, and the payoff is more learning and more persistence over time. The practical signature shows up in how each mindset explains a result. Fixed mindset reads a disappointing grade as talent evidence — "I\'m just not a maths person" — and responds by avoiding. Growth mindset reads it as strategy evidence — "my approach didn\'t work yet" — and responds by adjusting. Dweck\'s own later work adds an honesty note: mindset interventions are modest, not magic; they help most when paired with actual better strategies. That is exactly how this book is arranged — the belief opens the door, the retrieval and spacing lessons walk through it. The National Study of Learning Mindsets (Yeager and colleagues, Nature, 2019) — a preregistered randomised trial across 65 US high schools, 12,490 students — found a sub-hour online session on how ability grows with practice raised lower-achievers\' core-course GPA by 0.10 grade points. Two meta-analyses by Sisk and colleagues (Psychological Science, 2018; 273 studies plus 43 trials, N = 423,070 combined) price it honestly: d ≈ 0.08 overall, ≈ 0.19 for at-risk students — small, targeted, cheap at scale.',
        },
        {
          kind: 'para',
          text: 'Attribution theory explains where the two mindsets come from — how a raw result becomes a belief. Bernard Weiner\'s account (1985) sorts explanations for success and failure along three dimensions: locus (is the cause inside me or outside?), stability (permanent or changeable?) and controllability (could I have changed it?). Attribute a failure to low ability and you have picked internal, stable and uncontrollable — the most demoralising combination, because it suggests no next move. Attribute it to strategy and effort and you have picked internal, unstable and controllable — the combination that predicts trying again, differently. Diener and Dweck (1978) recorded it live: helpless-oriented children defaulted to ability talk and deteriorated after failure; mastery-oriented children issued self-instructions — "check the steps, work harder" — and recovered. The lineage runs back through Seligman\'s learned-helplessness work.',
        },
        {
          kind: 'figure',
          caption:
            'One result, two attributions. The 41% test as a fixed verdict ("I\'m not a maths person" — internal, stable, uncontrollable) routes into avoidance; as strategy evidence ("my approach didn\'t work yet" — internal, unstable, controllable) it routes into adjustment for the next attempt.',
          afterConcept: 6,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="One result branching into a fixed attribution leading to avoidance and a growth attribution leading to adjustment">
  <!-- top result box: hand-drawn double-stroke -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
    <path d="M304 42 Q440 34 576 40 Q584 66 578 90 Q440 98 306 92 Q296 66 304 42"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.5" stroke-linecap="round">
    <path d="M310 48 Q440 42 570 46 Q576 66 572 86 Q440 92 312 86 Q304 66 310 48"/>
  </g>
  <text x="440" y="72" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor">Result: 41% on the calculus test</text>
  <!-- branch arrows -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round">
    <path d="M400 100 Q330 136 258 172"/>
    <path d="M480 100 Q550 136 622 172"/>
    <path d="M252 160 L258 173 L268 162"/>
    <path d="M612 162 L622 173 L628 160"/>
  </g>
  <!-- fixed branch (rose) -->
  <g fill="none" stroke="#e11d48" stroke-width="2.2" stroke-linecap="round">
    <path d="M94 184 Q250 174 406 182 Q414 236 408 292 Q250 300 96 294 Q86 238 94 184"/>
  </g>
  <text x="250" y="214" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="#e11d48">Fixed attribution</text>
  <text x="250" y="240" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="14" font-style="italic" fill="currentColor">\u2018I\'m not a maths person\u2019</text>
  <text x="250" y="270" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#e11d48">internal · stable · uncontrollable</text>
  <!-- growth branch (emerald) -->
  <g fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round">
    <path d="M474 184 Q630 174 786 182 Q794 236 788 292 Q630 300 476 294 Q466 238 474 184"/>
  </g>
  <text x="630" y="214" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="#059669">Growth attribution</text>
  <text x="630" y="240" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="14" font-style="italic" fill="currentColor">\u2018my strategy didn\'t work yet\u2019</text>
  <text x="630" y="270" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#059669">internal · unstable · controllable</text>
  <!-- descent arrows -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round">
    <path d="M250 302 Q248 328 250 352"/>
    <path d="M630 302 Q632 328 630 352"/>
    <path d="M244 342 L250 354 L256 342"/>
    <path d="M624 342 L630 354 L636 342"/>
  </g>
  <!-- terminals -->
  <g fill="none" stroke="#e11d48" stroke-width="2" stroke-dasharray="7 6" stroke-linecap="round">
    <path d="M134 364 Q250 356 366 362 Q372 392 368 420 Q250 428 136 422 Q128 392 134 364"/>
  </g>
  <text x="250" y="398" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="15" fill="#e11d48">avoid → no new data</text>
  <g fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round">
    <path d="M514 364 Q630 356 746 362 Q752 392 748 420 Q630 428 516 422 Q508 392 514 364"/>
  </g>
  <text x="630" y="398" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="15" fill="#059669">adjust → new data → next attempt</text>
</svg>`,
        },
        {
          kind: 'para',
          text: 'The learning-styles myth deserves its own paragraph because it is the most popular wrong belief in education. The claim — that each person learns best in a particular format, visual, auditory or kinaesthetic, and should be taught that way — feels obvious and is repeated everywhere. Make It Stick\'s "Get Beyond Learning Styles" chapter states the finding plainly: there is no empirical evidence that teaching students in their preferred style improves learning. What matters is matching the format to the material, not to the label: maps for geography, sound for pronunciation, hands for circuits — for everyone. The claim received its most careful test in Pashler, McDaniel, Rohrer and Bjork\'s 2008 review "Learning Styles: Concepts and Evidence" (Psychological Science in the Public Interest): to justify styles-matched teaching — the meshing hypothesis — a study must find a crossover: visual learners doing best from visual teaching while verbal learners do best from verbal. Almost no studies meet that design bar, and the few that do come out against matching; later tests (Massa and Mayer 2006; Rogowsky, Calhoun and Tallal 2015) agree. The verdict: no adequate evidence base for styles-matched teaching — hours diagnosing styles are hours not spent on retrieval and spacing. Cottrell\'s "personalising learning" means something sharper than style labels: identifying, by experiment and reflection, which approaches work best for you on which tasks — the same idea the note-taking lesson applies when it matches Cornell, outlines, maps or a slip-box to the task at hand. Personalise your strategies; do not diagnose your soul.',
        },
        {
          kind: 'para',
          text: 'Personalising learning, done properly, replaces the label with an experiment loop. Push one topic this week through two candidate approaches — a recall sheet from memory, a diagram from scratch — then judge by evidence: which produced the fewest stalls on a cold self-test. The honest answer differs by task — maps for geography, sound for pronunciation, hands for circuits — so fit the strategy to the task, never to a fixed portrait of yourself.',
        },
        {
          kind: 'para',
          text: 'Cottrell compresses the whole self-management layer into ten self-efficacy skills worth keeping as a checklist: engagement (shaping your own learning), autonomy (thinking and choosing for yourself), managing your mindset, enhancing personal performance (using feedback, data and reflection to keep improving), personalising learning, applying strategies — creative, reflective, effective, active and motivated, her C·R·E·A·M acronym — time management, well-being and self-care, managing your learning environment, and self-reflection. Three of those ten have their own lessons here (time, well-being, reflection through metacognition); the rest are the operating attitude this lesson owns. Notice what the list implies: none of it is talent. All of it is trainable — which is the growth-mindset claim turned into a table of contents.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: a first-year fails their first calculus test (41%), wants to drop the course, and says "I\'m just not a maths person." Rebuild the response with this lesson\'s tools.',
            'Recall the governing ideas: attribution first (verdict or data?), then efficacy sources (bank a mastery win, borrow a peer model), then strategy (the test measured untrained retrieval, not talent).',
            'Apply: reframe the 41% as a calibration reading — the metacognition lesson\'s predict-then-check ritual will tighten it. Join one peer problem group weekly (vicarious model). Book one concrete win: retake the hardest missed problem cold and score it (mastery experience). Book the tutor\'s feedback hour with two specific questions (social persuasion). Run the growth loop: what strategy changes this week — daily blank-page recall of worked examples — and what evidence next week will judge it.',
            'State the result: the same grade now carries an action plan instead of an identity; efficacy is rebuilt from four directions at once, and the decision to drop waits until the plan has actually been run.',
          ],
        },
        {
          kind: 'para',
          text: 'The worked example ends in a plan; this concept prices it. Beliefs act through choices, and the choice a mindset controls is stark: attempt the problem, or route around it. Expected-value arithmetic makes the stakes visible — and shows that avoidance is only rational if failure carries no information, the exact claim the attribution evidence refutes.',
        },
        {
          kind: 'derivation',
          title: 'The arithmetic of attempting: pricing the mindset choice',
          statement:
            'A stretching problem is attempted — success probability $p$, skill gain $G$ — or avoided; a failed attempt still purchases feedback worth $F$. Show that attempting dominates avoiding whenever feedback has value.',
          prerequisites: ['Expected value as a probability-weighted sum', 'The attribution distinction: strategy (changeable) vs trait (fixed)'],
          steps: [
            {
              label: 'Step 1: Price the attempt',
              formula: '$$\\mathrm{EV}_{\\text{attempt}} = p\\,G + (1-p)\\,F$$',
              explanation:
                'A success locks in the skill (G); a failure converts into a strategy adjustment worth F — both branches pay.',
            },
            {
              label: 'Step 2: Price the avoidance',
              formula: '$$\\mathrm{EV}_{\\text{avoid}} = 0$$',
              explanation:
                'Nothing attempted, nothing learned, no data collected — skill freezes where it is.',
            },
            {
              label: 'Step 3: Insert honest numbers',
              formula: '$$\\mathrm{EV}_{\\text{attempt}} = 0.30 \\times 4 + 0.70 \\times 1.5 = 1.20 + 1.05 = 2.25$$',
              explanation:
                'A 30% chance at a 4-unit problem, feedback worth 1.5 on failure: one attempt buys 2.25 units against zero.',
            },
            {
              label: 'Step 4: Scale over a term',
              formula: '$$20 \\times 2.25 = 45\\ \\text{units}$$',
              explanation:
                'Twenty attempts compound to 45 units in a term — all forgone by avoidance.',
            },
            {
              label: 'Step 5: Ask when avoidance could ever win',
              formula: '$$\\mathrm{EV}_{\\text{attempt}} - \\mathrm{EV}_{\\text{avoid}} = p\\,G + (1-p)\\,F > 0 \\quad \\text{whenever}\\ F > 0$$',
              explanation:
                'The attempt dominates unless F = 0 — failure teaches nothing — exactly the fixed-mindset premise that attribution research refutes.',
            },
          ],
          result:
            'Attempting dominates avoiding for every positive p; the only escape hatch is the claim that failure carries zero information — precisely what the attribution evidence rejects. A failure with feedback is the cheapest coaching a student receives — the growth mindset, in this arithmetic, is not optimism but correct bookkeeping.',
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Course selection: growth-mindset students treat a hard prerequisite as trainable and schedule for it; fixed-mindset students route around it and inherit the constraint for years.',
            'Feedback intake: reading marker comments as strategy data (what to change) rather than talent verdicts (what you are) converts every assignment into free coaching.',
            'Group formation: working beside peers who model effort and method — Bandura\'s vicarious channel — is why study groups raise efficacy even before they raise grades.',
            'Returning learners: adults restarting study after years away rebuild mastery experience fastest with a ladder of small, real wins — one completed problem set beats one perfect timetable.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'Three failure modes recur. The style-label escape: "I\'m a visual learner" used to excuse skipping the recall practice that actually works — diagnosis dressed as self-knowledge. The inspiration wait: treating motivation as a precondition for starting, when Cottrell\'s advice is the reverse — start, and let progress manufacture the motivation. And the toxic-positivity trap: growth mindset doesn\'t mean believing everything is possible; it means believing better strategies and more practice change outcomes, then doing the unglamorous work of finding out which.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Self-efficacy', def: 'Bandura’s term for belief in your capacity to execute the actions a task requires — built from mastery, models, persuasion and state.' },
            { term: 'Mastery experience', def: 'A direct personal success at a stretching task; the strongest source of self-efficacy.' },
            { term: 'Growth mindset', def: 'The belief that ability is developable through effort and strategy, associated with greater persistence and learning.' },
            { term: 'Fixed mindset', def: 'The belief that ability is a static trait, which turns setbacks into identity verdicts and avoidance.' },
            { term: 'Attribution', def: 'The explanation you give for a result — strategy-and-effort explanations feed adjustment; trait explanations feed avoidance.' },
            { term: 'Learning-styles myth', def: 'The unsupported claim that teaching to a personal style (visual, auditory, kinaesthetic) improves learning; format should match the material instead.' },
            { term: 'C·R·E·A·M', def: 'Cottrell’s strategy acronym: Creative, Reflective, Effective, Active, Motivated approaches to learning.' },
            { term: 'Coping model', def: 'A peer model shown struggling and then succeeding; observing coping builds more self-efficacy than observing a flawless performance (Zimmerman & Ringle, 1981).' },
            { term: 'Domain-specific efficacy', def: 'Bandura\'s finding that self-efficacy is a task-bound judgment — high for one subject, low for another — not a global trait.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'In Bandura’s framework, the strongest source of self-efficacy is:',
              options: ['General encouragement', 'Watching yourself succeed at a stretching task', 'Reading motivational quotes', 'Being born confident'],
              answer: 1,
              explain: 'Mastery experiences — direct, personal wins at demanding tasks — carry the most weight; encouragement and models help but less.',
            },
            {
              q: 'A growth-mindset response to a disappointing grade is to read it as:',
              options: ['A verdict on your talent', 'Proof the subject is wrong for you', 'Information that current strategy needs adjusting', 'Something sleep will fix'],
              answer: 2,
              explain: 'Growth mindset explains results by strategy and effort, which are changeable — so the response is adjustment, not avoidance.',
            },
            {
              q: 'What does the research say about teaching to a student’s learning style?',
              options: ['It doubles retention', 'It works for visual learners only', 'There is no empirical evidence it improves learning', 'It works but is expensive'],
              answer: 2,
              explain: 'Make It Stick’s review is blunt: no empirical support — match the format to the material, not to a label.',
            },
            {
              q: 'Cottrell’s C·R·E·A·M stands for study approaches that are:',
              options: ['Calm, rapid, easy, automatic, minimal', 'Creative, Reflective, Effective, Active, Motivated', 'Critical, Repetitive, Examined, Assessed, Marked', 'Curious, Realistic, Efficient, Applied, Measured'],
              answer: 1,
              explain: 'Her acronym names the posture she wants applied to every task: creative, reflective, effective, active, well-motivated.',
            },
            {
              q: 'Weiner\'s attribution dimensions: explaining a failed test by "low ability" places the cause at:',
              options: ['Internal, stable, uncontrollable', 'External, unstable, controllable', 'Internal, unstable, controllable', 'External, stable, controllable'],
              answer: 0,
              explain: 'Ability is internal, stable and uncontrollable in the attributor\'s eyes — no next move suggested; strategy and effort invite another attempt.',
            },
            {
              q: 'Self-efficacy differs from self-esteem because efficacy is:',
              options: ['A judgment of your worth as a person', 'A judgment of your capability for a specific task', 'A fixed personality trait', 'Just confidence by another name'],
              answer: 1,
              explain: 'Efficacy asks "can I execute what this task demands?" — task-bound and evidence-sensitive; inflated worth without competence is fragile, earned wins are durable.',
            },
            {
              q: 'In the decision model, a problem has success probability 0.3, gain G = 4, feedback F = 1.5. The expected value of attempting is:',
              options: ['0 units', '1.2 units', '2.25 units', '4 units'],
              answer: 2,
              explain: 'EV = p·G + (1−p)·F = 0.3 × 4 + 0.7 × 1.5 = 2.25 per attempt, against 0 for avoiding — failure still pays via feedback.',
            },
            {
              q: 'What do the strongest large-scale studies conclude about mindset interventions?',
              options: ['They transform grades for everyone', 'They show real but modest effects, largest for lower-achieving students', 'They do nothing at all', 'They only work in primary school'],
              answer: 1,
              explain: 'Yeager 2019 (Nature; 65 schools): +0.10 GPA for lower-achievers; Sisk 2018 (273 studies): d ≈ 0.08 overall, ≈ 0.19 at-risk — modest, targeted, cheap.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'Pair this lesson with metacognition and calibration — beliefs set strategy, calibration tells you whether the strategy is actually working. The habits lesson automates whatever you decide to do, and the time-management lesson turns your vision into a week that can hold it.',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'study-time-management',
      title: 'Time Management for Students: Owning the Study Week',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Study Systems',
      tier: 'core',
      concepts: [
        'The study week is a working week',
        'Planning backwards from deadlines',
        'Timeboxing the week',
        'The planning-fallacy numbers',
        'Estimation error and buffers',
        'Prioritising: important before urgent',
        'Procrastination and getting started',
        'The weekly review',
      ],
      words: 2719,
      readMins: 14,
      addedOn: '2026-10-26',
      blocks: [
        {
          kind: 'para',
          text: 'Ask university lecturers what separates the students who do well and the answers converge on one word. "The key factor is time," one tells Cottrell in the opening chapter of The Study Skills Handbook: "if they put in the hours, and use the time well, they tend to do well." Higher education quietly converts every student into a knowledge worker: a full-time course is the equivalent of a 35–40-hour working week, most of it self-directed, with no supervisor watching the clock. Time management as a student is therefore not an administrative nicety — it is the operating system on which every other technique in this book runs. This lesson builds that system: the term map, the weekly plan, the daily list, honest estimation, prioritisation, and the war against procrastination.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'Cottrell\'s independent-study audit lists the recurring risks in plain language: underestimating how long study tasks take, forgetting deadlines, wasting study time, and — the mirror image — spending all your time in study with no rest at all. Every one of those is a planning failure, not a character flaw. The students who "just seem organised" are running a small, repeatable planning loop; this lesson is that loop.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'First, accept the arithmetic: the study week is a working week. Higher-level study differs from school in exactly this respect — the assumption is that you have the maturity to manage your own time, and as Cottrell notes, time itself seems to operate differently: nothing is organized for you. A full-time course demands around 35–40 hours between classes, labs and independent study; a part-time or distance course demands the same discipline across fewer, more fragile hours. The first planning act is therefore budgeting, not scheduling: deciding what your week can actually hold, including the non-study life that must also live there. Cottrell\'s phrase for the target is a balanced menu of activity — study, rest, social life, work — because a week that ignores rest fails in week three, not week one.',
        },
        {
          kind: 'para',
          text: 'Second, plan backwards from deadlines. The unit of academic time is the term, and its hard edges are the deadlines and exam dates printed in course handbooks on day one. Backward planning converts them into workable pieces: take the deadline, list the stages a task really needs (understand the brief, gather sources, plan, draft, revise, proofread), give each stage its own earlier deadline, and subtract. A 3,000-word essay due Friday of week 8 becomes a source-gathering deadline in week 6, a plan in week 7, a draft early week 8. The term map is the one-page calendar where all these backward chains live; the weekly plan distributes the current week\'s segments across known free hours; the daily task list names today\'s two or three concrete moves. Barbara Oakley\'s study rules make the daily version blunt: keep a task list, and eat your frogs first — do the hardest, most avoided item first, while willpower is fresh, instead of reorganising your notes all morning to avoid it.',
        },
        {
          kind: 'para',
          text: 'The weekly plan earns its keep through timeboxing — giving each block of the week a named job before the week starts. Cal Newport’s Deep Work (2016) runs the professional version: every minute of the day is assigned a block, and when reality breaks the plan, the plan is re-cut, not abandoned — a broken block is estimation data, not a verdict on the system. Students run the same loop at term scale with the three instruments this lesson already owns: the term map holds the deadlines, the weekly plan assigns them to real hours, and the daily list names today’s blocks. The measurable payoff sits in perception as much as in hours: Macan and colleagues (1990) found that students’ perceived control of time — not raw hours studied — predicted both academic performance and lower stress, and Britton and Tesser (1991) found that time-management attitudes predicted students’ cumulative grades.',
        },
        {
          kind: 'para',
          text: 'Third, estimate honestly — then add a buffer. Human beings are systematically optimistic about task duration; psychologists call it the planning fallacy, and Cottrell\'s risk table names the student version: underestimating how long study tasks take. Reading that "should" take an hour takes three once you actually engage with it; the problem set budgeted for an evening eats the weekend. Two fixes compound. Track actuals: note, for a fortnight, how long common tasks really took you, and use those numbers, not your intentions, for future plans. And budget buffers at the plan level — no week scheduled to 100% survives contact with reality; aim for roughly 70–80% committed time so that overruns, illness and opportunities have somewhere to land without wrecking everything downstream.',
        },
        {
          kind: 'para',
          text: 'The planning fallacy has a canonical number. Buehler, Griffin and Ross (1994) asked 37 honors students to predict when they would finish their theses: best guesses averaged 33.9 days and worst-case guesses 48.6 — yet the actual average was 55.5 days, worse than their own worst cases, and fewer than a third (29.7 percent) finished by even their best-guess date. The mechanism is the inside view: a plan is a description of things going right, so a scenario-based estimate contains no surprises. The repair is the outside view: ignore the story of this task and consult the record of how long tasks like it actually took — which is exactly what tracking actuals builds. The same authors found that merely knowing about the fallacy did not fix it; only the discipline of consulting the record moved the estimate.',
        },
        {
          kind: 'para',
          text: 'Fourth, prioritise by importance, not by noise. Coursework divides into work that builds your grade and understanding over the term (the important: understanding this week\'s core concepts, starting assignments early, keeping up with problem sets) and work that merely shouts loudest (the urgent-but-trivial: formatting, inbox zero, colour-coding). The student-specific rule is simple: before starting anything, ask "does this move a deadline, an exam topic, or my understanding — and by how much?" then let the answer order the day. Protect your best hours for the important: most people get one or two windows a day of genuinely fresh cognition, and spending them on email is a quiet catastrophe. Frogs first is also a priority rule: the task you keep avoiding is usually either the most valuable or the most feared, and both deserve the morning.',
        },
        {
          kind: 'figure',
          caption:
            'The planning stack. The term map holds every deadline with its backward-planned stages; the weekly plan distributes this week’s segments across known free hours at roughly 70–80% committed time; the daily task list names today’s two or three concrete moves, frog first. Arrows run down (decompose) and up (the weekly review returns actuals to the map).',
          sketchImage: '/diagrams/time-management-planning-stack-sketch.jpg',
          sketchCaption:
            'Student Laboratory Notebook: hand-drawn three-tier planning stack — term map on top, weekly plan in the middle, daily task list at the bottom, a down arrow labeled decompose and an up arrow labeled review actuals, margin note: “frog first.”',
          afterConcept: 4,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Planning stack: term map with backward-planned deadlines on top, weekly plan at 70 to 80 percent committed in the middle, daily task list with frog first at the bottom; a decompose arrow runs down and a review actuals arrow runs up.">
  <!-- tier 1: term map -->
  <path d="M210 62 Q208 92 214 122 L670 122 Q676 92 672 60 Q440 54 210 62" fill="#e11d48" opacity="0.10"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="440" y="90" text-anchor="middle" font-size="16.5" fill="currentColor" font-weight="bold">term map</text>
    <text x="440" y="112" text-anchor="middle" font-size="12.5" fill="#8a8a93">every deadline + backward-planned stages, one page</text>
  </g>
  <!-- tier 2: weekly plan -->
  <path d="M240 196 Q238 226 244 256 L640 256 Q646 226 642 194 Q440 188 240 196" fill="#d97706" opacity="0.10"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="440" y="224" text-anchor="middle" font-size="16.5" fill="currentColor" font-weight="bold">weekly plan</text>
    <text x="440" y="246" text-anchor="middle" font-size="12.5" fill="#8a8a93">this week’s segments on known free hours — 70–80% committed</text>
  </g>
  <!-- tier 3: daily task list -->
  <path d="M270 330 Q268 360 274 390 L610 390 Q616 360 612 328 Q440 322 270 330" fill="#059669" opacity="0.10"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="440" y="358" text-anchor="middle" font-size="16.5" fill="currentColor" font-weight="bold">daily task list</text>
    <text x="440" y="380" text-anchor="middle" font-size="12.5" fill="#8a8a93">today’s two or three concrete moves — frog first</text>
  </g>
  <!-- decompose arrows down -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round">
    <path d="M242 132 Q210 158 236 186"/>
    <path d="M272 266 Q240 292 266 320"/>
  </g>
  <path d="M236 186 l-2 -12 M236 186 l11 5" fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M266 320 l-2 -12 M266 320 l11 5" fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#8a8a93">
    <text x="168" y="164">decompose</text>
    <text x="196" y="298">decompose</text>
  </g>
  <!-- review arrows up -->
  <g fill="none" stroke="#d97706" stroke-width="2.2" stroke-dasharray="7 6" stroke-linecap="round">
    <path d="M650 320 Q682 294 656 266"/>
    <path d="M620 186 Q652 160 626 132"/>
  </g>
  <path d="M626 132 l2 12 M626 132 l-11 -5" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M656 266 l2 12 M656 266 l-11 -5" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#d97706">
    <text x="688" y="298">review actuals</text>
    <text x="660" y="164">weekly review</text>
  </g>
  <text x="440" y="438" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93">plans flow down; records flow back up — the loop that keeps estimates honest</text>
</svg>`,
        },
        {
          kind: 'para',
          text: 'Fifth, understand procrastination for what it is: not laziness but emotion regulation — the task triggers aversion (boredom, confusion, fear of doing it badly), and escaping the feeling feels better than doing the work. Every trick that helps follows from that diagnosis. Shrink the start: commit to five minutes on the smallest concrete piece, because starting, not finishing, is the hard part — the "Swiss cheese" trick of poking holes in a feared task. Separate deciding from doing: planning when you\'ll start (right after lunch, at the library) beats deciding while sitting. Lower the stakes of the first attempt: a bad first draft is the plan. And for the recurring version — the same avoidance every week — the habits lesson owns the machinery: implementation intentions ("if it\'s 9am, I open the problem set") and context design turn starting into the default. What this lesson refuses to do is moralise: procrastination is a design problem, and design is fixable.',
        },
        {
          kind: 'para',
          text: 'Sixth, close the loop with a weekly review. Twenty minutes each week — Sunday evening works — to check plan against actual: what got done, what slipped and why, what deadlines moved closer, what next week actually holds. The review is where estimation gets calibrated (those tracked actuals feed forward), where the term map gets corrected, and where the small slips get caught before they compound into the crisis Cottrell calls "letting things slip: falling behind, losing a sense of what you are supposed to do." It is also the natural home of the metacognition lesson\'s predict-then-check habit, applied to time instead of test scores.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: a lab report worth 25% is due in 21 days; your week holds 20 study hours across five days, and you have been avoiding it for a week.',
            'Recall the governing ideas: plan backwards from the deadline with real stages; estimate from actuals plus buffer; frog first; start small.',
            'Apply: stages — re-read the brief and rubric (1h), skim two model reports (1h), analyse the data (4h), draft results and discussion (5h), intro and methods (3h), revise against the rubric (2h), proofread and format (2h). Place them on the term map with each stage\'s own deadline, then load this week\'s plan at ~75%: the data analysis gets two protected morning sessions (frogs first), and today\'s list starts with "open the dataset and produce one graph" — a five-minute entry point.',
            'State the result: a 21-day fear has become seven small, scheduled, buffered moves; the review next Sunday will compare hours planned to hours spent and correct the next task\'s estimate.',
          ],
        },
        {
          kind: 'derivation',
          title: 'Why plans break: the buffer arithmetic',
          statement:
            'The 70–80% rule is not a style tip — it falls out of the planning-fallacy multiplier. A page of algebra shows how much of a week can honestly be scheduled.',
          prerequisites: ['Percentages and ratios', 'Buehler’s thesis study: predicted 33.9 days, actual 55.5'],
          steps: [
            {
              label: 'Step 1: Name the optimism multiplier',
              formula: '$$m = \\frac{\\text{actual}}{\\text{estimated}} = \\frac{55.5}{33.9} \\approx 1.64$$',
              explanation:
                'For the untracked thesis tasks, reality took about 1.64 times the best-guess estimate. Every untracked task in the plan carries a version of this multiplier.',
            },
            {
              label: 'Step 2: Apply it to a scheduled week',
              formula: '$$\\text{required} = m \\times f \\times A \\le A \\quad\\Rightarrow\\quad f \\le \\frac{1}{m} \\approx 0.61$$',
              explanation:
                'A week of available hours A, scheduled at fraction f, overruns the moment the multiplied requirement exceeds A. Filled entirely with 1.64-times tasks, the survivable schedule is f ≤ 0.61 — scheduling 100% guarantees failure.',
            },
            {
              label: 'Step 3: Tracking shrinks the multiplier',
              formula: '$$m_{\\text{tracked}} \\approx 1.1$$',
              explanation:
                'Tasks repeated weekly with recorded actuals converge toward their estimate: the scenario error was the unknown, and the record removed it.',
            },
            {
              label: 'Step 4: Blend and schedule',
              formula: '$$\\bar{m} \\approx 1.3 \\quad\\Rightarrow\\quad f^{*} = \\frac{1}{\\bar{m}} \\approx 0.75$$',
              explanation:
                'A realistic week mixes tracked (m ≈ 1.1) and untracked (m ≈ 1.6) work. At a blended m ≈ 1.3 the survivable schedule is about 0.75 — the lesson’s 70–80% band, now with its derivation.',
            },
          ],
          result:
            'Schedule every hour and a 1.3-average multiplier breaks the plan by midweek; schedule 70–80% and the buffer absorbs the error. Slack is not softness — it is the expected value of your estimation error, paid forward.',
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Coursework seasons: a one-page term map with every deadline, backward-planned stage by stage, replaces the end-of-term emergency that used to consume reading week.',
            'Revision periods: the same loop schedules spaced review sessions across weeks — the spaced-repetition lesson owns the intervals; this lesson owns finding room for them.',
            'Placement and job years: backward planning from application deadlines, with tracked actuals, is precisely the project management employers later pay for.',
            'Distance and part-time study: with no timetable imposed, the weekly plan is the whole structure — budget first, then protect the hours like meetings.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'The big three. Over-scheduling: a plan with zero slack collapses at its first surprise — schedule 70–80% and let the buffer absorb life. Planning as procrastination: rebuilding the task list, the app and the colour scheme is avoidance in a productivity costume; if the plan is good enough, start. And ignoring rest: a "disciplined" week with no exercise, social time or sleep is borrowing from week three at compound interest — the well-being lesson explains why the loan always comes due.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Term map', def: 'A one-page calendar of all deadlines and exams for the term, each with backward-planned stage deadlines.' },
            { term: 'Backward planning', def: 'Starting from the deadline and assigning each required stage its own earlier date.' },
            { term: 'Planning fallacy', def: 'The systematic underestimation of how long tasks will take; countered with tracked actuals and buffers.' },
            { term: 'Task list', def: 'The daily list of concrete moves; Oakley’s rule — do the hardest item first.' },
            { term: 'Frog first', def: 'Doing the most avoided, usually most valuable task at the start of the day while willpower is fresh.' },
            { term: 'Weekly review', def: 'A fixed weekly session checking plan against actual, recalibrating estimates and updating the term map.' },
            { term: 'Timeboxing', def: 'Assigning every block of the week a named job in advance; broken blocks are re-cut, not abandoned.' },
            { term: 'Outside view', def: 'Estimating from the record of similar tasks — your tracked actuals — instead of the story of this one.' },
            { term: 'Perceived control of time', def: 'The felt sense that your hours are yours to direct; Macan’s 1990 finding tied it to grades and lower stress.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A full-time course demands roughly:',
              options: ['20 hours a week, all in class', '35–40 hours across classes and independent study', '60 hours of lectures only', 'Whatever mood allows'],
              answer: 1,
              explain: 'Cottrell’s benchmark: a full-time course is the equivalent of a working week, with independent study as its core.',
            },
            {
              q: 'Backward planning from a deadline means:',
              options: ['Starting with the easiest task', 'Listing the stages, giving each its own earlier deadline, and subtracting from the due date', 'Working only the night before', 'Copying a friend\'s schedule'],
              answer: 1,
              explain: 'Deadlines become workable when every stage — gather, plan, draft, revise — gets its own earlier date on the term map.',
            },
            {
              q: 'The planning fallacy shows up in student life as:',
              options: ['Finishing everything early', 'Systematically underestimating how long study tasks take', 'Preferring exams to coursework', 'Scheduling too much rest'],
              answer: 1,
              explain: 'Cottrell names it in her risk table; the fixes are tracked actuals and a 20–30% buffer of unscheduled time.',
            },
            {
              q: 'The most evidence-aligned first move against a task you keep avoiding is:',
              options: ['Wait for motivation', 'Commit five minutes to its smallest concrete piece', 'Reorganise your entire note system', 'Do easier tasks until it disappears'],
              answer: 1,
              explain: 'Procrastination is emotion regulation; shrinking the start past the aversion threshold gets you into the task, where motivation follows progress.',
            },
            {
              q: 'In Buehler, Griffin and Ross’s thesis study, best-guess estimates averaged 33.9 days and worst-case guesses 48.6. The actual average completion was:',
              options: ['30.1 days — better than predicted', '33.9 days — right on the best guess', '48.6 days — exactly the worst case', '55.5 days — worse than their own worst-case estimates'],
              answer: 3,
              explain: 'Reality beat the worst case: 55.5 days, with only 29.7 percent finishing by their best-guess date. A plan describes things going right — so plan from tracked actuals, not scenarios.',
            },
            {
              q: 'Macan and colleagues (1990) found the time-management factor that best predicted student outcomes was:',
              options: ['Total hours spent studying', 'Perceived control of time', 'Number of planning apps used', 'Earliest waking hour'],
              answer: 1,
              explain: 'Perceived control of time — not raw hours — tracked grades and lower stress, which is why the weekly plan and its review matter more than marathon sessions.',
            },
            {
              q: 'Your week holds 20 study hours, all scheduled with untracked tasks running a 1.64× optimism multiplier. The arithmetic says:',
              options: ['The plan survives if you concentrate', 'You finish 12 hours in and coast', 'Required hours are 1.64 × 20 ≈ 33 — about a third of the plan dies', 'The multiplier only applies to essays'],
              answer: 2,
              explain: 'Required = m × f × A = 1.64 × 20 ≈ 33 hours against 20 available. Survivable scheduling for untracked work is f ≤ 1/m ≈ 0.61 — hence the 70–80% band for blended weeks.',
            },
            {
              q: 'In the weekly timeboxing system, when reality breaks a planned block the correct move is:',
              options: ['Abandon the plan for the week', 'Re-cut the remaining blocks — the break is estimation data, not a verdict', 'Double tomorrow’s load as punishment', 'Switch to cramming'],
              answer: 1,
              explain: 'Newport’s rule: every minute is a block and broken blocks are re-drawn; the weekly review then feeds the corrected estimates forward.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'The habits lesson turns whatever you plan into an automatic default; the exam-strategy lesson owns the exam-day half of time — minutes per mark. For general productivity systems beyond study, the career book\'s time-management lesson picks up where this one hands off.',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'study-stress-wellbeing',
      title: 'Stress, Well-being and Sustainable Study',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Study Systems',
      tier: 'core',
      concepts: [
        'Stress as load versus resources',
        'The balanced menu of activity',
        'Burnout signals and early response',
        'Recovery assets: exercise, sleep, people, pauses',
        'Help-seeking as a study skill',
        'Incomplete recovery: the effort–recovery model',
        'The four recovery experiences',
        'The term-scale load–output curve',
      ],
      words: 2918,
      readMins: 15,
      addedOn: '2026-10-26',
      blocks: [
        {
          kind: 'para',
          text: 'Cottrell gives stress and well-being a full chapter in a study skills handbook — between time management and collaborative study — and the placement is the argument: managing your energy across a term is a success skill of the same rank as managing your time. Her self-evaluation asks students directly whether they can "identify and manage anxieties" and recognises "the importance of well-being and stress management to my overall success." The reasoning is mechanical, not sentimental: memory consolidates in sleep, attention collapses under overload, and the retrieval machinery this book trains everywhere else runs on a body that has to be kept in working order. This lesson is the maintenance manual: what study stress actually is, how to design a workload that survives a term, how to spot burnout early, and how to recover.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'Stress mismanagement is the silent tax on every technique in this book. Spaced repetition scheduled into a three-week sprint with no rest fails on week two; the sharpest exam playbook collapses if panic owns the room; a perfect weekly plan dies when the planner burns out. Well-being is not a soft add-on to study strategy — it is the hardware the strategy runs on.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Stress, in the working definition, is what happens when the load a term places on you exceeds the resources you have to meet it — and both sides of that ratio are movable. The load side includes deadlines, difficulty, uncertainty and conflict; the resource side includes time, skills, sleep, money, social support and the belief (the self-efficacy lesson\'s territory) that your effort changes outcomes. Some arousal is useful: the sharpened focus before a presentation or test is the fuel the exam-strategy lesson teaches you to relabel. The problem is chronic overload — weeks of unremitting demand with no recovery — and that is a design problem, which means it yields to design. Cottrell\'s opening chapter names the risk precisely: "spending all your time in study, rather than in a balanced menu of activity" is listed as a failure mode, not a virtue.',
        },
        {
          kind: 'para',
          text: 'The balanced menu of activity is the design answer. A sustainable student week mixes four food groups — study, rest, social life and (for many) paid work — and the planning lesson\'s 70–80% rule is partly a well-being rule: unscheduled time is not waste, it is the shock absorber that stops one bad deadline from cascading. Work-rest cycles matter at every scale. Within a day, focused blocks with real pauses between them (the pause is when consolidation finishes — the spaced-repetition lesson owns that science) beat one grey marathon. Across a week, at least one genuinely off-duty day keeps the system from ratcheting tighter. Across a term, alternating push weeks with recovery weeks matches how workload actually arrives. None of this is self-indulgence; it is interval training for cognition.',
        },
        {
          kind: 'para',
          text: 'Burnout — the endpoint of chronic overload — announces itself early if you listen. The classic triad is exhaustion that sleep doesn\'t fix, cynicism or detachment from work you used to care about, and falling output despite rising effort: assignments taking longer, reading not landing, small tasks feeling enormous. In students it also wears disguises: scroll-marathons that masquerade as rest, "I\'ll rest after exams" deferrals that never arrive, and the quiet dropout from friends and exercise exactly when both are most needed. The early response is triage, not heroics: cut scope (negotiate extensions before deadlines collapse, not after), restore the non-negotiables first (sleep, food, movement), and shrink the horizon — plan only this week. If two weeks of triage don\'t move the needle, that is information, which brings us to the last concept.',
        },
        {
          kind: 'para',
          text: 'The recovery assets are boringly consistent across the research and Cottrell\'s chapter alike. Exercise is the most reliable mood and anxiety regulator available without prescription — even a brisk walk between sessions measurably lowers arousal. Sleep is the memory system\'s write-to-disk window (its consolidation role is owned by the spaced-repetition lesson; here it is simply non-negotiable infrastructure, and the exam-strategy lesson\'s ban on all-nighters applies all term). Social contact is not a luxury: talking with friends is one of the best-evidenced buffers against study stress, which is why the independent-study risk table lists "put time aside to relax, rest, socialise and enjoy yourself" as a task, not a reward. And small pauses — a few minutes of walking, stretching or daylight between sessions — return more focus than they cost. Caffeine and all-nighters belong on the liabilities page.',
        },
        {
          kind: 'para',
          text: 'Help-seeking is a skill, and Cottrell\'s self-evaluation treats it as one: "I ask for help if I really need it." The failure pattern is well documented — students wait until crisis, then present a problem six weeks old that was solvable in week one. The repair is mechanical: know your routes before you need them (tutor office hours, student services, counselling, academic skills centres, peer groups), and treat early contact as cheap maintenance rather than admission of failure. Universities, Cottrell notes, provide the opportunities and the services; using them is part of being an active agent of your own success — the same principle that opens this book, applied to your own operating condition. A ten-minute conversation with a tutor about an overload that is still manageable beats a formal appeal about one that wasn\'t.',
        },
        {
          kind: 'para',
          text: 'Why does the load–resources ratio move the wrong way under pressure? The effort–recovery model of Meijman and Mulder (1998) gives the mechanism: effort consumes capacity and produces acute load reactions — fatigue, narrowed attention, low mood; recovery, any episode when the demands drop, reverses them. The model\'s warning is about residue: when recovery is incomplete, the leftover strain — the unfinished worry, the sleep debt, the unspent energy — carries into the next effort block, so each week starts from a lower floor. The behavioral cycle has a physiological twin, the cumulative wear of a stress response that never fully switches off; the health book\'s cortisol lesson owns that machinery. For a student the takeaway is scheduling-shaped: rest is not the absence of work, it is the half of the cycle that makes the other half work — and "I\'ll rest after exams" is a plan to run the first half only, for twelve consecutive weeks.',
        },
        {
          kind: 'figure',
          caption:
            'The effort–recovery cycle drawn across three weeks. Each effort block consumes capacity; each recovery block restores it. Week one: recovery completes the cycle. Week two: incomplete recovery leaves residue — the next week starts lower. Week three: recovery is skipped, and the floor keeps dropping — accumulated strain, the behavioral road to the burnout triad.',
          afterConcept: 6,
          sketchImage: '/diagrams/effort-recovery-strain-sketch.jpg',
          sketchCaption: 'notebook plate — effort, recovery, and the strain that stacks when recovery is skipped',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 440" role="img" aria-label="Effort and recovery across three weeks: full recovery restores capacity, incomplete recovery leaves residue, skipped recovery lets accumulated strain stack">
  <g font-family="Georgia, 'Times New Roman', serif">
    <!-- full-capacity baseline -->
    <path d="M84 108 Q450 104 828 109" fill="none" stroke="#8a8a93" stroke-width="1.6" stroke-dasharray="7 6" stroke-linecap="round" opacity="0.8"/>
    <text x="120" y="96" font-size="12.5" fill="#8a8a93" font-style="italic">full capacity</text>
    <!-- capacity line: effort drops, recovery restores -->
    <g fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round" opacity="0.97">
      <path d="M90 112 C 140 180 170 240 202 296 C 250 260 292 180 330 124 C 360 180 400 250 438 302 C 474 280 522 220 566 176 C 596 220 636 280 672 322 C 710 316 762 300 812 288"/>
    </g>
    <g fill="none" stroke="#059669" stroke-width="1" stroke-linecap="round" opacity="0.4">
      <path d="M94 116 C 144 184 174 244 206 300 C 254 264 296 184 334 128 C 364 184 404 254 442 306 C 478 284 526 224 570 180 C 600 224 640 284 676 326 C 714 320 766 304 816 292"/>
    </g>
    <!-- week separators -->
    <g stroke="#8a8a93" stroke-width="1.3" stroke-dasharray="3 5" opacity="0.55" fill="none" stroke-linecap="round">
      <path d="M330 118 Q332 220 330 372"/>
      <path d="M566 172 Q568 260 566 372"/>
    </g>
    <!-- effort / recovery brackets -->
    <g fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round">
      <path d="M96 356 L96 364 L198 364 L198 356"/>
      <path d="M362 356 L362 364 L434 364 L434 356"/>
      <path d="M598 356 L598 364 L668 364 L668 356"/>
    </g>
    <g font-size="12.5" fill="#e11d48" text-anchor="middle">
      <text x="147" y="384">effort</text>
      <text x="398" y="384">effort</text>
      <text x="633" y="384">effort</text>
    </g>
    <g fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round">
      <path d="M246 356 L246 364 L322 364 L322 356"/>
      <path d="M482 356 L482 364 L558 364 L558 356"/>
    </g>
    <g font-size="12.5" fill="#d97706" text-anchor="middle">
      <text x="284" y="384">recovery</text>
      <text x="520" y="384">recovery</text>
    </g>
    <!-- annotations -->
    <text x="212" y="140" font-size="13" font-style="italic" fill="#059669">recovery completes the cycle</text>
    <text x="560" y="242" font-size="13" font-style="italic" fill="#d97706" text-anchor="end">incomplete recovery — residue</text>
    <g fill="none" stroke="#e11d48" stroke-width="1.6" stroke-linecap="round">
      <path d="M742 250 Q760 262 778 282"/>
      <path d="M766 278 L778 282 L772 270"/>
    </g>
    <text x="744" y="240" font-size="13" font-style="italic" fill="#e11d48" text-anchor="middle">accumulated strain</text>
    <!-- x label -->
    <text x="828" y="420" font-size="14" font-style="italic" text-anchor="end" fill="currentColor">three weeks of the term</text>
  </g>
</svg>`
        },
        {
          kind: 'para',
          text: 'What counts as recovery, precisely? Sonnentag and Fritz\'s Recovery Experience Questionnaire (2007) gives the design vocabulary: four recovery experiences. Psychological detachment — mentally switching off, not thinking about study during off-hours — is the strongest single predictor of next-day well-being in the diary studies: evening detachment predicts next-morning mood and energy, and low detachment predicts next-morning fatigue. Relaxation: low-activation pleasant states — walks, music, unhurried meals. Mastery: challenging, absorbing activity outside study — an instrument, a language, a climbing route — builds competence and positive affect in a world with no grades, which is exactly why it works. Control: deciding for yourself how the free time goes. The awkward finding is the recovery paradox (Sonnentag and Fritz, 2015): the people who most need recovery are least able to detach, because depleted self-regulation fuels rumination — and a student in deadline pressure is the textbook case. That is precisely why recovery gets scheduled like deadlines instead of hoped for after them.',
        },
        {
          kind: 'para',
          text: 'Put the two models together and the weekly load–output curve appears: an inverted-U at term scale. On the left is under-load: drift — too few effective hours, material uncovered, guilt accruing faster than learning. In the middle is the sustainable zone: the planning lesson\'s 70–80% rule is this zone expressed as a budget, and a calm 30-hour week can tie a frantic 50-hour one. On the right is chronic overload: each extra hour buys less and costs more, because it is spent out of the recovery budget — output falls even as hours rise, the curve that ends at the burnout triad. The day-scale version of the same shape — arousal and performance on exam morning — is owned by the exam-strategy lesson, relabeled racing heart included; this lesson owns the week. The derivation below prices the right side of the curve in output points, and the figure draws it.',
        },
        {
          kind: 'figure',
          caption:
            'The term-scale load–output curve. Weekly output peaks inside the sustainable zone — the 70–80% rule drawn as a curve; the left slope is under-load: drift, the right slope is chronic overload: falling output as hours rise. Dashed markers show the derivation\'s symmetry — 30 and 50 effective hours tie at 96 — while the 70-hour push lands at 64.',
          afterConcept: 8,
          sketchImage: '/diagrams/load-output-curve-sketch.jpg',
          sketchCaption: 'notebook plate — the weekly load–output curve and its sustainable zone',
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 450" role="img" aria-label="The load-output curve: output peaks at the sustainable load, drift on the left, falling output under chronic overload">
  <g font-family="Georgia, 'Times New Roman', serif">
    <!-- axes -->
    <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
      <path d="M96 60 Q92 240 96 386"/>
      <path d="M94 382 Q470 385 842 381"/>
    </g>
    <!-- zone tints -->
    <rect x="100" y="66" width="274" height="312" fill="#d97706" opacity="0.06"/>
    <rect x="374" y="66" width="182" height="312" fill="#059669" opacity="0.08"/>
    <rect x="556" y="66" width="284" height="312" fill="#e11d48" opacity="0.06"/>
    <g font-size="12.5" text-anchor="middle">
      <text x="234" y="86" fill="#d97706" font-style="italic">under-load: drift</text>
      <text x="465" y="86" fill="#059669" font-style="italic">the sustainable zone</text>
      <text x="700" y="86" fill="#e11d48" font-style="italic">chronic overload: falling output</text>
    </g>
    <!-- the curve P(h)=100-0.04(h-40)^2, h in [10,70] -->
    <g fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round" opacity="0.97">
      <path d="M187 350 C 260 250 330 130 465 92 C 600 130 668 250 741 350"/>
    </g>
    <g fill="none" stroke="#059669" stroke-width="1" stroke-linecap="round" opacity="0.4">
      <path d="M191 354 C 264 254 334 134 465 96 C 604 134 672 254 745 354"/>
    </g>
    <!-- symmetry markers 30 & 50 -->
    <g stroke="#8a8a93" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.8" fill="none" stroke-linecap="round">
      <path d="M374 121 L374 378"/>
      <path d="M556 121 L556 378"/>
    </g>
    <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
      <circle cx="374" cy="121" r="5"/>
      <circle cx="556" cy="121" r="5"/>
    </g>
    <text x="465" y="150" font-size="13" font-style="italic" fill="currentColor" text-anchor="middle">P(30) = P(50) = 96 — symmetry about h*</text>
    <!-- 70-hour marker -->
    <g fill="none" stroke="#e11d48" stroke-width="2.4" stroke-linecap="round">
      <circle cx="739" cy="350" r="5"/>
    </g>
    <text x="700" y="330" font-size="13" font-style="italic" fill="#e11d48" text-anchor="end">the 70-hour push: P = 64</text>
    <!-- h* marker -->
    <g stroke="#059669" stroke-width="1.6" stroke-dasharray="6 5" opacity="0.85" fill="none" stroke-linecap="round">
      <path d="M465 96 L465 378"/>
    </g>
    <text x="465" y="404" font-size="13" fill="#059669" text-anchor="middle" font-style="italic">h* — the sustainable load (the 70–80% rule)</text>
    <!-- axis labels -->
    <text x="842" y="430" font-size="14" font-style="italic" text-anchor="end" fill="currentColor">weekly study load (effective hours)</text>
    <text x="40" y="230" font-size="14" font-style="italic" text-anchor="middle" fill="currentColor" transform="rotate(-90 40 230)">weekly output</text>
  </g>
</svg>`
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: four weeks into revision season, a student is sleeping 5 hours, has stopped exercising, works 12-hour days with falling output, and has declined two invitations from friends.',
            'Recall the governing ideas: load versus resources; the menu has four food groups; burnout triad = exhaustion + cynicism + falling output; restore non-negotiables first.',
            'Apply: diagnose — this is the triad forming, not laziness. Triage the load: cut the bottom-value revision topics (calibration data says two are already solid), negotiate one extension, cancel the 1am finish. Restore the floor: sleep 7+ hours (alarm on bedtime, not just waking), one 20-minute walk daily, one social meal this week. Shrink the horizon: plan only the coming week at 75% load, with spaced short sessions instead of 12-hour blocks. Book one check-in: tutor or student services, framed as load management, not crisis.',
            'State the result: the same revision content now runs on a body that can consolidate it; output typically recovers within a week, and the weekly review now includes a standing well-being line: sleep, movement, people — checked like deadlines.',
          ],
        },
        {
          kind: 'derivation',
          title: 'Why more hours can mean less output: the load–output curve',
          statement:
            'A quadratic model of weekly output P as a function of weekly study load h — the term-scale curve drawn as an equation — locates the optimum and prices the overload in output points.',
          prerequisites: ['Quadratics and their vertex', 'Symmetry about a maximum'],
          steps: [
            {
              label: 'Step 1: Model the curve',
              formula: '$$P(h) = P_{\\max} - k\\,(h - h^{*})^{2}$$',
              explanation:
                'Output peaks at the sustainable load h* and falls on both sides: fewer hours leave material uncovered, more hours begin to eat the recovery that output runs on. The constant k sets how sharply overload bites.',
            },
            {
              label: 'Step 2: Locate the optimum',
              formula: '$$\\frac{dP}{dh} = -2k\\,(h - h^{*}) = 0 \\;\\Rightarrow\\; h = h^{*}$$',
              explanation:
                'The vertex is the optimum: at h* one more hour gains nothing on the left side and begins to cost recovery on the right. This is the model home of the planning lesson\'s 70–80% rule.',
            },
            {
              label: 'Step 3: Worked numbers',
              formula: '$$P(h) = 100 - 0.04\\,(h-40)^{2} \\;\\Rightarrow\\; P(40)=100,\\ P(50)=96,\\ P(60)=84,\\ P(70)=64$$',
              explanation:
                'Take h* = 40 effective hours and k = 0.04. Pushing from 40 to 70 hours — a 75% load increase — yields P = 100 − 0.04·(30)² = 64: thirty-six output points below the peak.',
            },
            {
              label: 'Step 4: Same output, two loads',
              formula: '$$P(30) = 100 - 0.04\\,(10)^{2} = 96 = P(50)$$',
              explanation:
                'The curve is symmetric about h*: a calm 30-hour week can tie a frantic 50-hour week — and banks twenty extra hours of recovery on the side. Only one of them leaves the effort–recovery cycle paid up.',
            },
            {
              label: 'Step 5: Read the right side honestly',
              explanation:
                'Beyond h*, every extra hour subtracts output — effort without recovery is the incomplete-recovery loop drawn as a line. The planner\'s job is not to maximize hours but to sit just inside the sustainable zone: h*, or a little below it.',
            },
          ],
          result:
            'With P(h) = 100 − 0.04(h − 40)², output peaks at the sustainable 40-hour load; a 70-hour push produces 64 (−36 points), and a 30-hour week ties a 50-hour week at 96 — the arithmetic behind planning to the sustainable zone instead of to exhaustion.',
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Exam seasons: the well-being floor (sleep, food, movement, one social contact daily) is scheduled into the revision plan first; content fills the space that remains.',
            'Thesis and project years: the long, unsupervised middle is burnout country — fixed weekly reviews, a standing exercise slot and regular supervisor contact act as guardrails.',
            'Part-time workers: combining a job with study doubles the load side of the ratio; the menu design and early help-seeking become the difference between surviving and sinking.',
            'Group projects: workload renegotiation ("I can\'t take the extra section this week") is help-seeking applied early, before resentment and missed deadlines do the talking.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'Wearing exhaustion as a badge: "I\'ll sleep after finals" is the exact arithmetic the exam-strategy lesson already ruled against, run for a whole term. All-or-nothing rest: an evening of doom-scrolling is not recovery, and a total collapse is not a schedule — real rest is scheduled, active and short. And isolating under pressure: dropping friends and exercise in exam season removes the two cheapest stress buffers precisely when the load is highest.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Load–resources model', def: 'Stress as the gap between a term’s demands and the time, skills, sleep and support available to meet them.' },
            { term: 'Balanced menu of activity', def: 'Cottrell’s term for a week that mixes study with rest, social life and work — sustainability by design.' },
            { term: 'Burnout', def: 'Chronic-overload endpoint: exhaustion sleep doesn’t fix, detachment from work, and falling output despite rising effort.' },
            { term: 'Recovery asset', def: 'A reliable restorer of capacity — exercise, sleep, social contact, pauses between sessions.' },
            { term: 'Help-seeking', def: 'Using tutors, services and peers early, while problems are still cheap to solve; a skill, not a confession.' },
            { term: 'Effort–recovery model', def: 'Meijman and Mulder’s cycle: effort consumes capacity, recovery restores it; incomplete recovery lets residue stack across weeks.' },
            { term: 'Psychological detachment', def: 'Mentally switching off during off-hours — no study thoughts; the strongest single predictor of next-day well-being.' },
            { term: 'Recovery experiences', def: 'Sonnentag and Fritz’s four: psychological detachment, relaxation, mastery, control — the design vocabulary for off-hours.' },
            { term: 'Load–output curve', def: 'The term-scale inverted-U: weekly output peaks at the sustainable load and falls on both sides; overloading ends at the burnout triad.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'In the working model this lesson uses, stress is best described as:',
              options: ['A fixed personality trait', 'The gap when a term’s load exceeds your resources to meet it', 'Always harmful and to be eliminated', 'A sign of low intelligence'],
              answer: 1,
              explain: 'Both sides are movable — design the load down and build resources up; moderate arousal is even useful.',
            },
            {
              q: 'Which combination best describes the burnout warning triad?',
              options: ['Energy, focus, steady output', 'Exhaustion that rest doesn’t fix, detachment, falling output', 'Nervousness before one exam', 'Temporary boredom with one course'],
              answer: 1,
              explain: 'The classic triad — plus student disguises like scroll-marathons and dropped friendships — signals chronic overload, not laziness.',
            },
            {
              q: 'The best-evidenced recovery assets for a stressed student are:',
              options: ['All-nighters and energy drinks', 'Exercise, sleep, social contact and real pauses', 'Total isolation until exams end', 'Increasing study hours to regain control'],
              answer: 1,
              explain: 'Boring but robust: movement, sleep, people and pauses restore the capacity the work runs on.',
            },
            {
              q: 'Cottrell’s self-evaluation treats asking for help as:',
              options: ['A last resort after failure', 'A skill to use early, before problems become crises', 'Only for academic probation cases', 'A sign you should change courses'],
              answer: 1,
              explain: 'Early contact is cheap maintenance — the active-agent principle applied to your own operating condition.',
            },
            {
              q: 'In Sonnentag and Fritz’s four recovery experiences, which one means doing something challenging and absorbing that is NOT study — an instrument, a language, a climbing route?',
              options: ['Psychological detachment', 'Relaxation', 'Mastery', 'Control'],
              answer: 2,
              explain: 'Mastery builds competence and positive affect outside the grade world; detachment means not thinking about study, relaxation means low activation, control means choosing for yourself.',
            },
            {
              q: 'In the effort–recovery model, strain accumulates across weeks when:',
              options: ['Effort is high for a single day', 'Recovery between effort episodes is incomplete, so residue carries into the next block', 'The material is intellectually difficult', 'Every week is perfectly balanced'],
              answer: 1,
              explain: 'Incomplete recovery leaves residue — sleep debt, unfinished worry — that lowers the floor of the next week; the health book’s cortisol lesson owns the physiological twin.',
            },
            {
              q: 'With P(h) = 100 − 0.04(h − 40)², a student at the 40-hour optimum considers pushing to 70 hours. The model prices that push at:',
              options: ['P = 96 — barely a loss', 'P = 84', 'P = 64 — thirty-six points below the peak', 'P = 100 — no loss, more hours always help'],
              answer: 2,
              explain: 'P(70) = 100 − 0.04·(30)² = 64: the 75% load increase costs a third of the output, because the extra hours are spent out of the recovery budget.',
            },
            {
              q: 'The load–output curve shows two weeks tying at 96. Which pair — and what is the honest difference between them?',
              options: ['20 and 60 hours — no difference at all', '30 and 50 hours — equal output, but the 30-hour week banks twenty hours of recovery', '40 and 70 hours — the 70-hour week wins', '10 and 70 hours — both minimal'],
              answer: 1,
              explain: 'Symmetry about h* = 40: P(30) = P(50) = 96. Same output, very different recovery bills — the quiet argument for the left side of the sustainable zone.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'The exam-strategy lesson owns arousal on the day itself; the time-management lesson designs the week so overload never accumulates; the habits lesson automates the floor — sleep, movement, pauses — so well-being stops depending on daily willpower. For stress theory and clinical coping, the psychology book’s stress lesson picks up where this practical manual ends.',
        },
      ],
    },
]

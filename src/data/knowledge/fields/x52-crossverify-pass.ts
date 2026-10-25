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
        'Growth mindset versus fixed mindset',
        'Attribution: how you explain results',
        'The learning-styles myth',
        'Personalising learning: strategy fit, not style labels',
        'Cottrell’s ten self-efficacy skills and C·R·E·A·M',
      ],
      words: 1676,
      readMins: 8,
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
          text: 'Mindset is Carol Dweck\'s term for beliefs about whether ability is fixed or growable. Make It Stick devotes its "Increase Your Abilities" chapter to the finding: students who believe learning and intelligence are malleable focus on learning and growing with increasing challenges rather than defending a performance snapshot, and the payoff is more learning and more persistence over time. The practical signature shows up in how each mindset explains a result. Fixed mindset reads a disappointing grade as talent evidence — "I\'m just not a maths person" — and responds by avoiding. Growth mindset reads it as strategy evidence — "my approach didn\'t work yet" — and responds by adjusting. Dweck\'s own later work adds an honesty note: mindset interventions are modest, not magic; they help most when paired with actual better strategies. That is exactly how this book is arranged — the belief opens the door, the retrieval and spacing lessons walk through it.',
        },
        {
          kind: 'para',
          text: 'The learning-styles myth deserves its own paragraph because it is the most popular wrong belief in education. The claim — that each person learns best in a particular format, visual, auditory or kinaesthetic, and should be taught that way — feels obvious and is repeated everywhere. Make It Stick\'s "Get Beyond Learning Styles" chapter states the finding plainly: there is no empirical evidence that teaching students in their preferred style improves learning. What matters is matching the format to the material, not to the label: maps for geography, sound for pronunciation, hands for circuits — for everyone. Cottrell\'s "personalising learning" means something sharper than style labels: identifying, by experiment and reflection, which approaches work best for you on which tasks — the same idea the note-taking lesson applies when it matches Cornell, outlines, maps or a slip-box to the task at hand. Personalise your strategies; do not diagnose your soul.',
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
        'Estimation error and buffers',
        'Prioritising: important before urgent',
        'Procrastination and getting started',
        'The weekly review',
      ],
      words: 1723,
      readMins: 9,
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
          text: 'Third, estimate honestly — then add a buffer. Human beings are systematically optimistic about task duration; psychologists call it the planning fallacy, and Cottrell\'s risk table names the student version: underestimating how long study tasks take. Reading that "should" take an hour takes three once you actually engage with it; the problem set budgeted for an evening eats the weekend. Two fixes compound. Track actuals: note, for a fortnight, how long common tasks really took you, and use those numbers, not your intentions, for future plans. And budget buffers at the plan level — no week scheduled to 100% survives contact with reality; aim for roughly 70–80% committed time so that overruns, illness and opportunities have somewhere to land without wrecking everything downstream.',
        },
        {
          kind: 'para',
          text: 'Fourth, prioritise by importance, not by noise. Coursework divides into work that builds your grade and understanding over the term (the important: understanding this week\'s core concepts, starting assignments early, keeping up with problem sets) and work that merely shouts loudest (the urgent-but-trivial: formatting, inbox zero, colour-coding). The student-specific rule is simple: before starting anything, ask "does this move a deadline, an exam topic, or my understanding — and by how much?" then let the answer order the day. Protect your best hours for the important: most people get one or two windows a day of genuinely fresh cognition, and spending them on email is a quiet catastrophe. Frogs first is also a priority rule: the task you keep avoiding is usually either the most valuable or the most feared, and both deserve the morning.',
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
      ],
      words: 1596,
      readMins: 8,
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
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: four weeks into revision season, a student is sleeping 5 hours, has stopped exercising, works 12-hour days with falling output, and has declined two invitations from friends.',
            'Recall the governing ideas: load versus resources; the menu has four food groups; burnout triad = exhaustion + cynicism + falling output; restore non-negotiables first.',
            'Apply: diagnose — this is the triad forming, not laziness. Triage the load: cut the bottom-value revision topics (calibration data says two are already solid), negotiate one extension, cancel the 1am finish. Restore the floor: sleep 7+ hours (alarm on bedtime, not just waking), one 20-minute walk daily, one social meal this week. Shrink the horizon: plan only the coming week at 75% load, with spaced short sessions instead of 12-hour blocks. Book one check-in: tutor or student services, framed as load management, not crisis.',
            'State the result: the same revision content now runs on a body that can consolidate it; output typically recovers within a week, and the weekly review now includes a standing well-being line: sleep, movement, people — checked like deadlines.',
          ],
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

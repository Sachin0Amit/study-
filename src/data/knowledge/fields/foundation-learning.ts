/**
 * Knowledge Universe — domain file: Foundation Learning
 *
 * Study skills, reading strategies, and practical numeracy. Written as
 * complete lessons; future expansion passes append new topics below.
 */

import type { KnowledgeDomainFile } from '../types'

export const foundationLearning: KnowledgeDomainFile = {
  domain: 'Foundation Learning',
  blurb:
    'Study skills, reading strategy, and practical numeracy — the bedrock abilities that make every other domain easier to learn.',
  topics: [
    // ------------------------------------------------------------------
    {
      id: 'fnd-spaced-repetition',
      title: 'Spaced Repetition and the Forgetting Curve',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Learning Science',
      tier: 'core',
      concepts: [
        'The Ebbinghaus forgetting curve',
        'The spacing effect',
        'Retrieval practice and the testing effect',
        'Expanding review intervals',
        'Active recall versus passive re-reading',
        'Interference and sleep in consolidation',
      ],
      words: 894,
      readMins: 4,
      addedOn: '2026-10-16',
      blocks: [
        {
          kind: 'para',
          text: 'Every memory starts fading the moment you stop using it. Learning Science captured this decay in the forgetting curve, traced experimentally by Hermann Ebbinghaus in 1885, and its antidote is spaced repetition: reviews scheduled at growing intervals so each retrieval lands just as the memory weakens. This topic explains why the curve dips steeply at first and how retrieval practice turns cramming into durable knowledge.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Spaced repetition powers every serious memorization system, from language apps that resurface flashcards at the predicted moment of forgetting to medical platforms that keep drug dosages fresh for years. A schedule that respects the curve cuts study time while multiplying recall.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Ebbinghaus taught himself nonsense syllables and tested recall after delays from minutes to days, finding memory drops steeply within the first day before flattening. Most forgetting happens early — exactly when the first review should arrive.',
        },
        {
          kind: 'para',
          text: 'The spacing effect is the robust finding that identical total study time produces stronger memory when split across separate sessions rather than massed together. Two short encounters a day apart beat one double-length session.',
        },
        {
          kind: 'para',
          text: 'Retrieval practice — pulling an answer from memory instead of looking at it again — is what actually strengthens the trace. Researchers call this the testing effect, and it holds even when the attempt is failed and corrected.',
        },
        {
          kind: 'para',
          text: 'Because each successful review slows the next round of decay, sensible schedules expand their gaps: one day, then three, then a week, then a month. The interval stretches as the memory stabilizes.',
        },
        {
          kind: 'para',
          text: 'Re-reading feels productive because the page grows familiar, but fluency is not learning. Active recall with feedback forces the reconstruction that builds knowledge you can use anywhere.',
        },
        {
          kind: 'para',
          text: 'New learning competes with old: similar facts interfere, and sleep helps the brain consolidate what you studied. Spacing reviews across days gives consolidation the time it needs.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Retention decay model',
          latex: 'R = e^{-t/S}',
          meaning:
            'Retention R falls exponentially with elapsed time t; the stability constant S grows with each successful review, flattening the curve.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: a plan to memorize 40 anatomy terms for an exam six weeks away, using spaced repetition instead of cramming.',
            'Recall the governing idea: reviews sit at expanding intervals, and every session uses active recall rather than re-reading.',
            'Apply: split the 40 terms into four sets of ten; learn set one on day one, test yourself on days 2, 5, 12, and 28, and start a new set each day on the same pattern.',
            'State the result: every term is retrieved four to five times over six weeks, about two and a half hours total, and recall at the exam far exceeds any single three-hour cram.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Language apps resurface each card at its predicted moment of forgetting, keeping daily review loads small.',
            'Medical platforms drill drug dosages on expanding schedules so knowledge survives years of training.',
            'Musicians space practice of hard passages across days, beating marathon repetition for security.',
            'Compliance training schedules quarterly refreshers to fight the early decay of procedural rules.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The commonest mistake is trusting fluency: re-reading feels easy, so students stop too soon and mistake recognition for recall. Another is cramming before every deadline, which carries you through a quiz while leaving almost nothing a month later.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Forgetting curve', def: 'The graph of retention against time since learning, steep at first then flattening.' },
            { term: 'Spacing effect', def: 'The gain in long-term memory when study is distributed rather than massed.' },
            { term: 'Retrieval practice', def: 'Actively recalling information from memory, which strengthens it more than restudy.' },
            { term: 'Testing effect', def: 'Testing yourself on material improves later retention more than extra review.' },
            { term: 'Expanding interval', def: 'A review schedule whose gaps grow after each successful retrieval.' },
            { term: 'Consolidation', def: 'The post-study process, aided by sleep, that stabilizes memory.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'According to the forgetting curve, when is most forgetting likely to occur?',
              options: ['Evenly across a month', 'Within the first hours and days', 'Only after a full night of sleep', 'After about six weeks'],
              answer: 1,
              explain: 'Retention drops steeply soon after learning, then levels off, so early reviews matter most.',
            },
            {
              q: 'Which study method exploits the spacing effect most directly?',
              options: ['Re-reading notes the night before an exam', 'Highlighting key passages', 'Testing yourself today, in three days, and in a week', 'Studying one topic in a single long session'],
              answer: 2,
              explain: 'Distributing retrievals across expanding gaps is the essence of spaced repetition.',
            },
            {
              q: 'Why does re-reading often produce weak learning despite feeling productive?',
              options: ['It creates familiarity that is mistaken for knowledge', 'It takes too much time', 'It works only for numbers', 'It prevents sleep'],
              answer: 0,
              explain: 'Fluency is recognition, not recall — the material feels known but cannot be reproduced.',
            },
            {
              q: 'In an expanding schedule, when should the next review be scheduled after a successful retrieval?',
              options: ['At the same interval as before', 'At a shorter interval than before', 'At a longer interval than before', 'Only after a failed test'],
              answer: 2,
              explain: 'Each successful recall raises memory stability, so the safe interval can lengthen.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisite: nothing beyond everyday study habits. Pair it with SQ3R-style active reading, then move to intermediate topics like interleaving and elaborative interrogation.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Memory decays fast at first, then flattens — the forgetting curve of 1885.',
            'The same study time works harder when spread across separate days.',
            'Retrieval practice, not re-reading, is the active ingredient of durable memory.',
            'Good schedules expand the interval after each successful recall.',
            'Sleep and low interference between similar topics let consolidation finish.',
          ],
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
    // ------------------------------------------------------------------
    {
      id: 'fnd-percentage-ratio-mental-math',
      title: 'Percentage, Ratio and Mental Math Shortcuts',
      domain: 'Foundation Learning',
      field: 'Everyday Math & Numeracy',
      branch: 'Practical Arithmetic',
      tier: 'core',
      concepts: [
        'Percent as parts per hundred',
        'The x-percent of y equals y-percent of x trick',
        'Percentage change versus percentage points',
        'Ratios and the unitary method',
        'Double-and-halve and distributive shortcuts',
        'Estimation and sanity checks',
      ],
      words: 883,
      readMins: 4,
      addedOn: '2026-10-16',
      blocks: [
        {
          kind: 'para',
          text: 'Percentages, ratios, and a toolkit of mental shortcuts power the arithmetic behind prices, tips, discounts, taxes, and news statistics. Practical Arithmetic treats a percent as a fraction with denominator 100, a ratio as a comparison of quantities, and mental math as reorderings — swapping, halving, doubling — that make awkward numbers friendly.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Numerate adults catch markup disguised as a discount, recompute a bill in seconds, and read a five percent headline with an accurate sense of scale — fluency that pays daily dividends.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'A percent is literally per hundred — 8 percent means 8/100 — and the word of means multiply: 8 percent of 250 is 20. Fluency among percent, fraction, and decimal is the gateway skill.',
        },
        {
          kind: 'para',
          text: 'Multiplication commutes, so x percent of y equals y percent of x. Four percent of 75 sounds awkward, but 75 percent of 4 — three quarters of 4 — is instantly 3; when one arrangement is friendly, use it.',
        },
        {
          kind: 'para',
          text: 'A percentage change is measured against the original: rising from 40 to 50 is a 25 percent increase, yet falling from 50 to 40 is only 20 percent. Percentage points are plain differences — a rate moving from 4 to 6 percent rose two points, a 50 percent relative jump.',
        },
        {
          kind: 'para',
          text: 'Find the value of one unit first: if 7 notebooks cost 42, one costs 6, so 12 cost 72 — this unitary method solves nearly every proportion problem without algebra.',
        },
        {
          kind: 'para',
          text: 'Reorder products to your advantage: 25 times 16 is 25 times 4, times 4, giving 400; double-and-halve turns 15 times 22 into 30 times 11, or 330; the distributive law gives 7 times 98 as 700 minus 14, or 686.',
        },
        {
          kind: 'para',
          text: 'Round to one or two significant figures and bracket: a 17.5 percent tip on 84.60 is near 13 to 15. Estimation turns wrong answers into visibly wrong ones.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Percentage change',
          latex: '\\%\\,\\Delta = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100',
          meaning: 'Change is measured against the original value, which is why up and down by the same percent are asymmetric.',
        },
        {
          kind: 'formula',
          name: 'Successive percentage changes',
          latex: '\\text{net}\\% = a + b + \\frac{ab}{100}',
          meaning: 'Two successive changes of a and b percent net a + b + ab/100 — a 20 percent rise then fall nets minus 4 percent.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: the final price of a jacket marked 120 with a 30 percent discount plus 8 percent tax.',
            'Recall the governing idea: each percentage applies to the current value — the discount on the marked price, the tax on the sale price.',
            'Apply: 30 percent of 120 is 36, so the sale price is 84; 8 percent of 84 is 6.72, giving 90.72 with tax — or directly, 84 times 1.08.',
            'State the result: the jacket costs 90.72 — 75.6 percent of the marked price, an overall reduction of 24.4 percent, not 22.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Tips: a 15 percent tip on 64 is 10 percent (6.40) plus half again (3.20), so 9.60.',
            'Loans: 1 percent monthly compounds to about 12.7 percent a year.',
            'News: a 3 point rise in a 10 percent rate is a 30 percent relative increase — very different claims.',
            'Cooking: ratios stretch a four-person recipe to six by scaling by 1.5.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The most common error is adding percentages from different bases — a 30 percent discount plus 8 percent tax is not 22 percent off, since tax applies to the sale price. Watch also the percent versus percentage-point confusion, which quietly triples or halves reported statistics.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Percent', def: 'A fraction expressed with denominator 100.' },
            { term: 'Percentage point', def: 'The plain difference between two percentages, distinct from relative change.' },
            { term: 'Ratio', def: 'A comparison of two quantities by division, such as 3:2.' },
            { term: 'Unitary method', def: 'Finding the value of one unit, then scaling to the required units.' },
            { term: 'Commutativity', def: 'The property that a times b equals b times a.' },
            { term: 'Distributive law', def: 'a times (b + c) equals ab plus ac — splitting hard multiplications.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'What is 8 percent of 25, using the commutative trick?',
              options: ['2', '1.5', '2.5', '0.2'],
              answer: 0,
              explain: '8 percent of 25 equals 25 percent of 8, and a quarter of 8 is 2.',
            },
            {
              q: 'A price rises from 80 to 100. What is the percentage increase?',
              options: ['20 percent', '25 percent', '80 percent', 'It depends on the currency'],
              answer: 1,
              explain: 'The change is 20, measured against the original 80 — always divide by where you started.',
            },
            {
              q: 'An interest rate rises from 4 percent to 7 percent. Which statement is correct?',
              options: ['A 3 percent increase', 'A 3 percentage point rise — a 75 percent relative increase', 'A 7 percent rise', 'A 43 percent point rise'],
              answer: 1,
              explain: 'The difference is 3 points; relative to 4 percent that is 75 percent.',
            },
            {
              q: 'After a 20 percent rise and then a 20 percent fall, a price is:',
              options: ['Back where it started', '4 percent lower', '4 percent higher', '20 percent lower'],
              answer: 1,
              explain: '1.2 times 0.8 is 0.96, a net 4 percent decrease.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisite: multiplication tables and basic fractions. Next come algebraic proportions, simple and compound interest, and estimation habits for statistics literacy.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Percent means per hundred, and the word of means multiply.',
            'Swap when it helps: x percent of y equals y percent of x.',
            'Percentage change divides by the original; percentage points are plain differences.',
            'The unitary method — value of one, then scale — cracks proportion problems.',
            'Double-and-halve, split with distribution, and always bracket with an estimate.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fnd-active-recall',
      title: 'Active Recall: Why Testing Yourself Beats Rereading',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Learning Science',
      tier: 'core',
      concepts: [
        'The testing effect',
        'Why rereading feels good and does little',
        'Desirable difficulties',
        'Formats: free recall, flashcards, questions, teaching',
        'Feedback closes the loop',
        'Pretesting: guessing before knowing',
        'Designing a recall-first session',
      ],
      words: 1073,
      readMins: 5,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'The most effective study technique ever measured feels harder and works worse in the moment — that is not a paradox, it is the finding. Active recall means closing the book and pulling information out of memory instead of pushing it in again, and a century of learning science shows it beats rereading, highlighting, and summarizing for durable knowledge. This Foundation Learning topic explains the mechanism, the formats that make it practical, and how to build a recall-first study session from nothing.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Retrieval practice reliably outperforms restudy for long-term retention, and it works across every subject tested — formulas, vocabulary, history, procedures. Since the strategy is free and takes the same hour, the gap between students who test themselves and students who review is one of the cheapest advantages in education.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The defining experiment still stings to read. Students studied a passage either by rereading it repeatedly or by reading once and then recalling it; a week later, the recall group remembered far more — while confidently predicting the rereading group would win. Researchers call this the testing effect, and it has replicated across ages, subjects, and laboratories for decades. Practicing retrieval is not preparation for learning; it is the learning.',
        },
        {
          kind: 'para',
          text: 'Rereading exploits a perceptual illusion: each pass makes the page more familiar, and the brain mistakes fluency for knowledge. The feeling of "I know this" tracks how easily information comes in, not whether it can come out — and only the outgoing path is ever graded. Highlighting and verbatim summarizing share the flaw: they polish the input while leaving retrieval untrained.',
        },
        {
          kind: 'para',
          text: 'Psychologist Robert Bjork framed the principle as desirable difficulties: practice conditions that slow visible progress during training often improve durable learning. Retrieval is the paradigm case — effortful now, consolidating later. The flip side warns against difficulty that merely frustrates: retrieval works best when it succeeds after effort, which is why feedback and hints matter as much as the attempt itself.',
        },
        {
          kind: 'para',
          text: 'The method scales from notebook to software. Free recall — blank page, write everything you can — is the bluntest and most powerful format. Flashcards automate the question-answer loop and pair naturally with scheduling apps. Answering why-questions builds understanding rather than lists, and teaching the material aloud forces the same reconstruction with an audience. All four share one rule: retrieval before review.',
        },
        {
          kind: 'para',
          text: 'Retrieval without correction is half a technique: the brain must learn not just to produce answers but to tell right ones from confident errors. Checking each attempt against the source converts it into a targeted restudy list, and the marked gaps become the curriculum. The most valuable failures are the ones caught on a practice retrieval rather than on the real thing.',
        },
        {
          kind: 'para',
          text: 'A strange but robust finding: attempting questions on material you have never studied improves later learning of it, even when the guesses are wrong. Wrong guesses create curiosity and prime the correct answers, so the subsequent reading lands on prepared ground. A pretest costs minutes — skim the headings and guess the content — and buys attention for the whole chapter.',
        },
        {
          kind: 'para',
          text: 'The assembly is simple. Close the notes; on a blank page, dump everything on the topic; check and mark the gaps in a second color; reread only the gaps; then retrieve again tomorrow. Each cycle shortens as the material stabilizes. The blank page is the engine, and rereading becomes the maintenance crew instead of the whole show.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: convert a 60-minute rereading session on the nervous system into a recall-first session on the same clock.',
            'Recall the governing idea: retrieval with feedback outperforms restudy, and reviewing only the failed gaps concentrates effort where it pays.',
            'Apply: spend ten minutes reading the section cold for structure; twenty-five minutes writing everything recallable from memory with the book closed; ten minutes checking against the source and marking gaps; ten minutes rereading only the marked gaps; five minutes on a final gap-only retrieval.',
            'State the result: the same hour produces one full retrieval pass, a color-coded gap map, and a second pass over the weak half — versus an hour of fluent rereading that leaves recall completely untested.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Flashcard apps wrap retrieval in scheduling, automating the recall-first loop for languages and medicine.',
            'Learners pretest before reading, priming chapters with wrong-then-corrected guesses.',
            'Study groups quiz each other instead of comparing notes — retrieval with social feedback.',
            'Teachers replace review days with low-stakes practice quizzes that count for participation.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The trap is trusting the feeling: rereading feels smooth and productive, recall feels bumpy and discouraging — but the effort is the mechanism, not a sign of failure. Retrieving with the notes open is not retrieval; it is rereading in disguise. And practicing only what you already retrieve easily is comfortable rigging — the gaps are the curriculum.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Active recall', def: 'Retrieving information from memory rather than re-experiencing it on the page.' },
            { term: 'Testing effect', def: 'The finding that practicing retrieval improves later memory more than restudy.' },
            { term: 'Fluency illusion', def: 'Mistaking ease of processing for mastery of content.' },
            { term: 'Desirable difficulty', def: 'A practice condition that slows acquisition but strengthens retention.' },
            { term: 'Free recall', def: 'Writing or saying everything remembered about a topic with the source closed.' },
            { term: 'Feedback', def: 'Checking retrieved answers against the source to mark and repair gaps.' },
            { term: 'Pretesting', def: 'Answering questions before studying, which primes later learning.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The testing effect says that:',
              options: ['Taking tests damages memory', 'Practicing retrieval improves later retention more than restudying', 'Testing should only be used for grading', 'Rereading is superior for facts'],
              answer: 1,
              explain: 'Retrieval practice itself strengthens memory — among the strongest single findings in learning science.',
            },
            {
              q: 'Rereading feels productive mainly because:',
              options: ['It rebuilds memory traces each time', 'Familiarity is mistaken for knowledge', 'It is slower than other methods', 'The eyes absorb more when relaxed'],
              answer: 1,
              explain: 'The fluency illusion: ease of processing masquerades as learning.',
            },
            {
              q: 'A "desirable difficulty" is one that:',
              options: ['Feels pleasant throughout', 'Slows practice but improves durable learning', 'Makes the material easier', 'Should always be avoided'],
              answer: 1,
              explain: 'Effortful retrieval consolidates more — the struggle is the active ingredient.',
            },
            {
              q: 'Pretesting — attempting questions before studying:',
              options: ['Confuses learners permanently', 'Improves later learning even when guesses are wrong', 'Only works with immediate feedback', 'Is a form of rereading'],
              answer: 1,
              explain: 'Wrong guesses prime attention and curiosity, so the correct answers stick better afterward.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Natural pair: the spaced-repetition topic, which schedules retrievals over time. Then interleaving for mixing what you retrieve, and elaborative interrogation for asking why.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fnd-interleaving',
      title: 'Interleaving: Why Mixed Practice Beats Blocked Practice',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Learning Science',
      tier: 'intermediate',
      concepts: [
        'Blocked practice and the illusion of mastery',
        'Interleaving: shuffling the categories',
        'Why it works: discrimination and spaced retrieval',
        'The performance-learning paradox',
        'Where interleaving helps most',
        'Designing an interleaved schedule',
        'Spacing is the partner, not the rival',
      ],
      words: 1073,
      readMins: 5,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Most people practice the way textbooks lay out chapters: one skill until it feels easy, then the next. Interleaving scrambles that order — A B C B A C instead of A A A B B B — and learners reliably dislike it while learning more. Learning science has documented the pattern across motor skills, mathematics, and category learning: blocked practice polishes the session, interleaved practice polishes the month. This Foundation Learning topic explains why mixing works and how to sequence it without drowning.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Interleaving improves delayed-test performance by wide margins while making practice feel worse — and that gap between feeling and result is exactly why it is underused. For any skill where you must choose a technique before applying it, mixing during practice is close to free performance.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Blocked practice repeats one thing until it flows — twenty serves, twenty problems of the same type — and it works briefly: performance climbs fast within the block. But the block quietly solves the hard part for you: the method stays loaded in working memory, so you execute rather than select. Mastery of a routine is not mastery of choosing it, and only the choosing transfers to the test.',
        },
        {
          kind: 'para',
          text: 'Interleaving mixes problem types within a session: a volume problem, then a slope problem, then back. Each new item forces a fresh diagnosis — which technique does this call for? — and that discrimination practice is the hidden curriculum. Random or semi-random order both work; the essential feature is that consecutive items usually differ.',
        },
        {
          kind: 'para',
          text: 'Two engines run under the mix. First, discrimination: interleaving trains the front half of expertise — recognizing which knowledge applies — which blocked practice skips entirely. Second, each return to a category after an absence is a spaced retrieval, and spaced retrieval is the strongest known memory tool. Interleaving is spaced repetition wearing practice clothes.',
        },
        {
          kind: 'para',
          text: 'The uncomfortable finding: blocked groups look better during practice and worse on the delayed test; interleaved groups stumble in practice and win later. Learners judge methods by the session, so they keep choosing the worse one — and instructors who teach to session evaluations make the same mistake. The rule that emerges: trust the delayed test, not the day\'s feel.',
        },
        {
          kind: 'para',
          text: 'The effect is largest for confusable categories: bird species, drug names, painting styles, problem types that share surface features. If the difficulty is telling things apart, mixing is the medicine. Skills with dissimilar demands benefit less, and complete novices may need a short blocked warm-up first — you cannot discriminate categories you have not yet formed.',
        },
        {
          kind: 'para',
          text: 'Start by listing the categories to mix, then build sequences where no two consecutive items match — shuffling a deck of problem cards is the low-tech version. Interleave within a theme, such as four kinds of statistics problems, before interleaving across themes. Keep a running tally so every category gets its share, and accept that error rates will rise before results do.',
        },
        {
          kind: 'para',
          text: 'Interleaving across a single afternoon and interleaving across days are different doses of the same medicine. The strongest schedules do both: today\'s mixed set includes material from last week, which is itself spacing. A practical stack assembles three techniques — retrieval practice for the content, spaced scheduling for the calendar, interleaving for the selection — into one session.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: a student has 12 practice problems — four on area, four on volume, four on slope — and one hour. Blocked or interleaved, and what does each order train?',
            'Recall the governing idea: blocked order keeps one method loaded, while interleaved order forces diagnosis of the problem type before solving — which is what tests demand.',
            'Apply: shuffle the twelve into a mixed order such as area–slope–volume–slope–area–volume and cycle through, expecting slower going and more errors because every problem begins with selection rather than execution.',
            'State the result: the same hour trains selection twelve times instead of twice, and each category is retrieved on three separate occasions — the delayed-test advantage that makes the rougher session worth it.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Mathematics learners shuffle mixed problem sets instead of finishing each exercise block in order.',
            'Medical trainees drill confusable diagnoses and drug names in mixed review decks.',
            'Athletes randomize drills — serves, volleys, footwork — to match the random demands of real play.',
            'Language learners mix vocabulary, grammar, and listening tasks within each sitting.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The predictable failure is quitting early: interleaving feels worse immediately, and the learner reasonably concludes it is working worse — the paradox is the price. Interleaving brand-new material before anything is encoded produces noise, not learning. And mixing everything with no structure forfeits the benefit, because confusable relatives should be interleaved together to train the telling apart.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Blocked practice', def: 'Repeating one skill or problem type consecutively before moving on.' },
            { term: 'Interleaving', def: 'Mixing categories within a session so consecutive items differ.' },
            { term: 'Discrimination learning', def: 'Training the ability to tell confusable items apart and select the right response.' },
            { term: 'Contextual interference', def: 'The disruption mixing causes during practice, which enhances retention.' },
            { term: 'Performance-learning paradox', def: 'Practice conditions that look worse in-session but test better later.' },
            { term: 'Spaced retrieval', def: 'Recalling an item after a delay, strengthened by interleaving\'s returns.' },
            { term: 'Transfer', def: 'Applying a practiced skill to new problems and contexts.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'In interleaved practice, consecutive items:',
              options: ['Repeat the same type for fluency', 'Usually differ, forcing re-diagnosis of the problem type', 'Are always easier', 'Come from unrelated subjects only'],
              answer: 1,
              explain: 'The mix forces selection before execution — the discrimination training that blocks skip.',
            },
            {
              q: 'Why do learners often prefer blocked practice?',
              options: ['It produces better delayed retention', 'It feels smoother because performance rises within the block', 'It takes less total time', 'It requires no materials'],
              answer: 1,
              explain: 'The method stays loaded in working memory, so sessions feel good while selection goes untrained.',
            },
            {
              q: 'Interleaving helps most when the categories are:',
              options: ['Radically dissimilar', 'Confusable — sharing surface features', 'Brand new to the learner', 'Very few in number'],
              answer: 1,
              explain: 'Mixing trains discrimination, which matters exactly when items are hard to tell apart.',
            },
            {
              q: 'The performance-learning paradox predicts that the interleaved group will:',
              options: ['Score better in practice and on the delayed test', 'Score worse in practice but better on the delayed test', 'Score worse in both', 'Show no difference either way'],
              answer: 1,
              explain: 'Mixing depresses in-session performance while strengthening retention and transfer.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Stack it with the spaced-repetition and active-recall topics — the three compose into one session. Then: elaborative interrogation and self-explanation for deeper understanding, and transfer-focused practice.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fnd-deliberate-practice',
      title: 'Deliberate Practice: The Anatomy of Getting Good',
      domain: 'Foundation Learning',
      field: 'Skill Acquisition',
      branch: 'Expertise Science',
      tier: 'intermediate',
      concepts: [
        'Not all hours count: mere repetition plateaus',
        'Well-defined, sub-skill-sized goals',
        'Operating at the edge: full concentration',
        'Immediate feedback and error correction',
        'Mental representations: the expert\'s advantage',
        'The ten-year rule and the 10,000-hour folklore',
        'Designing your own deliberate practice',
      ],
      words: 1097,
      readMins: 5,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Twenty years of driving does not make a race driver, and ten thousand casual rounds of golf does not make a champion. Expertise science, built on psychologist Anders Ericsson\'s studies of violinists, chess masters, and memory athletes, calls the difference deliberate practice: effortful, targeted work at the edge of current ability with immediate feedback. This Foundation Learning topic dissects what makes practice improve performance — and why the hours nearly everyone logs are maintenance, not improvement.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'The deliberate-practice finding reframes talent: across domains, elite performers accumulated vastly more solitary, corrective, uncomfortable practice — not just more total time. The recipe is learnable by anyone, which makes improvement less about being chosen and more about designing the training.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Skill rises quickly with any repetition, then flatlines: after a few years, a driver, teacher, or typist is coasting on automaticity. Ericsson\'s key insight is that experience and expertise are different variables — once a skill runs without conscious attention, repetition merely maintains it. Improvement requires working where the automatic solution fails, which is by definition uncomfortable and unwelcome to the resting brain.',
        },
        {
          kind: 'para',
          text: 'Deliberate sessions pursue targets a notch below "get better at violin": land the shift cleanly in bar twelve, hold the opening line of the difficult conversation. A well-defined goal names the sub-skill, makes success observable, and shrinks the feedback loop to minutes. "Practice more" produces hours; "fix the third-bridge shift" produces change.',
        },
        {
          kind: 'para',
          text: 'The defining sensation of deliberate practice is strain — it runs at the boundary of current ability, where failure is frequent and attention is total. That boundary also caps the dose: even elite performers rarely sustain more than three to five focused hours a day, and they schedule rest like training. Flow differs precisely here: flow feels effortless, while deliberate practice feels like work.',
        },
        {
          kind: 'para',
          text: 'Without feedback, practice stabilizes errors as confidently as it stabilizes skills. Coaches, recordings, and measurable outcomes close the loop by making each attempt informative: what happened, against what was intended, and what to adjust. Self-monitored experts build the loop internally — comparing each attempt to a detailed mental model of the ideal — which is why feedback quality separates good training from mere activity.',
        },
        {
          kind: 'para',
          text: 'What grows with expertise is not speed but structure: chess masters perceive boards as meaningful patterns, firefighters read smoke as scenarios, radiologists see lesions that novices sketch straight past. Ericsson calls these mental representations, and deliberate practice is best understood as building them — training perception and anticipation, not just motion. The representations then guide the next round of practice, a compounding loop.',
        },
        {
          kind: 'para',
          text: 'The famous round number came from averaging top performers\' accumulated practice — and it is a center, not a threshold. Some experts reach world class in far less time by training efficiently; others accumulate many more hours without improving at all. The rule\'s surviving core: expertise takes years of deliberate work rather than exposure, and the composition of the hours matters more than their count.',
        },
        {
          kind: 'para',
          text: 'The recipe assembles from everything above. Diagnose: find the specific failure — record yourself, get critiqued, measure. Isolate: reduce it to a repeatable drill with an observable outcome. Repeat at the edge with fast feedback, then reintegrate into full performance. Cycle weekly, and log the work — the training diary is how amateurs start practicing like professionals.',
        },
        { kind: 'heading', text: 'The Mathematics' },
        {
          kind: 'formula',
          name: 'Power law of practice',
          latex: 'T = a\\,P^{-b}',
          meaning: 'Time per trial T falls with accumulated practice P: gains are steep early and progressively more expensive — why volume alone plateaus and design must take over.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: a club tennis player whose backhand keeps losing points wants a week of practice that actually fixes it, not another friendly hour.',
            'Recall the governing idea: improvement requires a diagnosed sub-skill, edge-difficulty drills with immediate feedback, and reintegration into full play.',
            'Apply: video three matches to locate the specific fault — late preparation on high balls; drill 40 fed high backhands daily against a coach or wall, resetting immediately whenever the preparation is late; play two sets where opponents deliberately target the drill ball.',
            'State the result: roughly 200 targeted repetitions with feedback inside a week — the steep early region of the practice curve for this sub-skill — and a measurable outcome: high-backhand points won in the following weekend\'s match.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Music conservatories structure lessons as diagnosis, drill, and reintegration.',
            'Surgeons train on simulators with recorded metrics for rare, high-stakes procedures.',
            'Sales and speaking practice uses recorded role-play reviewed against rubrics.',
            'Chess and language learners drill known weaknesses rather than replaying comfort zones.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The seductive trap is accumulating comfortable hours — playing the rounds, teaching the familiar class — and calling it practice; experience without edge-difficulty is maintenance. Challenging practice without feedback is worse, because errors get grooved. And the famous 10,000-hour number became folklore precisely because it drops the adjective "deliberate" — the count is nothing without the composition.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Deliberate practice', def: 'Effortful, targeted practice at the edge of ability with immediate feedback.' },
            { term: 'Automaticity', def: 'Performance that runs without conscious attention — and stops improving.' },
            { term: 'Mental representation', def: 'The organized knowledge structure that lets experts perceive meaningful patterns.' },
            { term: 'Feedback loop', def: 'The comparison of attempt against intention that makes practice informative.' },
            { term: 'Power law of practice', def: 'The empirical curve in which gains per hour shrink as skill rises.' },
            { term: 'Plateau', def: 'The flat region where repetition maintains but no longer improves skill.' },
            { term: 'Training diary', def: 'A log of drills, outcomes, and adjustments that professionalizes practice.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Why does ordinary experience stop producing improvement?',
              options: ['The brain loses plasticity in adulthood', 'Automaticity lets performance run without correction or attention', 'Skills are capped by talent', 'Repetition erodes memory'],
              answer: 1,
              explain: 'Once a skill is automatic, repetition maintains it; improvement demands edge-difficulty work.',
            },
            {
              q: 'A deliberate-practice goal is best described as:',
              options: ['"Practice two hours daily"', '"Win more matches this season"', '"Fix the late preparation on high backhands"', '"Stay motivated"'],
              answer: 2,
              explain: 'Sub-skill-sized, observable, and feedback-ready — the unit of real improvement.',
            },
            {
              q: 'Mental representations explain expertise mainly by:',
              options: ['Speeding up muscle contractions', 'Letting experts perceive meaningful patterns and anticipate', 'Reducing the need for sleep', 'Improving eyesight'],
              answer: 1,
              explain: 'Chess masters see positions and firefighters see scenarios — structure, not just speed.',
            },
            {
              q: 'The power law of practice implies that:',
              options: ['Every additional hour yields equal gains', 'Gains per hour shrink as skill accumulates', 'Practice becomes easier over time', 'Feedback matters only for beginners'],
              answer: 1,
              explain: 'Early hours buy steep gains; later improvement requires designed, deliberate training.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Combine with active recall and interleaving for the cognitive side of the same idea. Natural next steps: feedback and coaching science, motor-learning research, and the expertise literature\'s ongoing debate about talent.',
          tone: 'path',
        },
      ],
    },
    {
      id: 'study-note-taking-systems',
      title: 'Note-Taking Systems Compared: Cornell, Outlines and Zettelkasten',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Study Systems',
      tier: 'core',
      concepts: [
        'Notes encode; they do not just record',
        'Cornell: the page as a testing machine',
        'Outlines: hierarchy in real time',
        'Mind maps: structure you can see',
        'Zettelkasten: notes that network',
        'Matching the system to the task',
      ],
      words: 1294,
      readMins: 6,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'Note-taking feels like transcription and is actually manufacturing. The evidence is blunt: students who rephrase ideas in their own words while writing them learn more than students who copy the lecturer\'s phrasing verbatim, even when the copiers\' notes are more complete. Notes serve two masters — encoding, the thinking you do while writing, and storage, the record you review later — and every system trades between them. Cornell notes, outlines, mind maps and the Zettelkasten aim that trade differently; knowing when each wins is the skill.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'The format of your notes decides, before you ever revise, whether revision will be re-reading (weak) or self-testing (strong). A well-built page generates its own practice questions; a poorly built one generates highlighting, which is re-reading in costume. Ten minutes spent choosing a system deliberately repays itself across every course, job and project you will ever take.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The encoding hypothesis says the benefit of notes is largely written during the lecture, not after it: selecting, compressing and rephrasing force the brain to process meaning. Mueller and Oppenheimer\'s 2014 experiments found longhand note-takers outperforming laptop users on conceptual questions — keyboards invite transcription, and transcription bypasses summarisation. Storage matters too, but it is the servant: notes you never revisit are paper with ink on it. The review side — spacing and retrieval — has its own lessons in this section; this topic builds the asset worth reviewing.',
        },
        {
          kind: 'para',
          text: 'Walter Pauk\'s Cornell method, published in 1949, turns one page into a testing machine. Rule the page into three zones: a narrow cue column on the left, a wide note area on the right, a summary strip along the bottom. During the lecture, notes go right, in your own words, abbreviated. Within a day, distil the cue column — the questions and keywords those notes answer. Then cover the notes and answer your own cues; the summary strip forces one-sentence synthesis. The page is a deck of flashcards that wrote itself.',
        },
        {
          kind: 'para',
          text: 'Outlining records hierarchy: main point, sub-point, evidence, indented beneath. It suits material that arrives already structured — textbook chapters, well-signposted lectures, legal judgments — and it trains a single powerful question of every sentence: at what level does this live? Its weakness is speed under fire: a fast lecturer outruns tidy indentation, and relationships that are not trees — two causes feeding one effect — get flattened. Outlines excel as the format for reorganising material you already partly understand.',
        },
        {
          kind: 'para',
          text: 'Mind maps put the topic in the centre and radiate branches outward, refusing linearity. They surface connections and gaps, which makes them strong for brainstorming, revision overviews and subjects whose structure you do not yet know — the map discovers it. They are weak for dense sequential argument and anything you must quote precisely, and they scale badly on paper: past a few dozen nodes the picture becomes soup. Best used as the frontispiece to a denser system, not the system.',
        },
        {
          kind: 'para',
          text: 'The Zettelkasten is a personal wiki on paper slips. Sociologist Niklas Luhmann filled his with about ninety thousand index cards and credited it for some seventy books: each card holds one atomic idea, written in his own words, linked to the cards it touches. Notes stop being filed documents and become a network that generates arguments — follow the links and find structure you did not plan. Modern tools digitise the principle: atomic notes, own words, dense linking. The cost is overhead; the payoff compounds only after a few hundred notes.',
        },
        {
          kind: 'para',
          text: 'Choose by task. Live lectures with exams ahead: Cornell, because the cue column converts notes into retrieval practice. Well-structured reading or meetings: outlines, which mirror the source\'s architecture. New, tangled territory: a mind map to discover the shape. A research project or thesis: a Zettelkasten, which accumulates rather than archives. And the rule that outranks all systems: notes are commitments to future retrieval — any format that makes you revisit and self-test beats a more beautiful format that does not.',
        },
        { kind: 'example', title: 'Worked Example', steps: [
          'Identify what is asked: a fifty-minute lecture on the Marshall Plan with an exam six weeks away — which system, applied how, produces exam-ready material?',
          'Recall the governing ideas: encoding favours rephrasing; Cornell\'s cue column converts notes into self-tests; spaced repetition schedules the reviews.',
          'Apply: take notes live in the right column — causes, mechanisms, objections, compressed into your own words. That evening, write six cue questions (“Why did Stalin refuse participation?”). Weekly until the exam, cover the notes, answer cues from memory, check, and mark failures for spaced re-testing.',
          'State the result: the page became a self-testing instrument — revision was retrieval practice all along, and the six-week gap worked for you instead of against you.',
        ] },
        { kind: 'heading', text: 'Applications in the Real World' },
        { kind: 'list', items: [
          'Lecture courses: Cornell pages with cue questions written within 24 hours, converted to weekly cover-and-test practice.',
          'Textbook study: outline while reading, then fold each level into the summary strip of a Cornell-style master page.',
          'Research and thesis writing: Zettelkasten notes accumulate linked arguments, so chapters assemble from clusters rather than blank pages.',
          'Meetings and podcasts: Cornell-lite — decisions on the left, reasons on the right, a one-line summary as the action list.',
          'Software: Obsidian and Logseq implement the Zettelkasten; Anki imports your cue questions directly into spaced repetition.',
        ] },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'Trap one is transcription — writing everything down and processing nothing; if your notes read like the lecturer\'s script, the learning did not happen. Trap two is decoration: colour-coding, highlighting and elaborate headings that feel like work but are re-reading in costume. Trap three is Zettelkasten procrastination — configuring the tool instead of writing notes, which is a hobby, not a system. And the quiet killer is never reviewing: one summary strip written and one cue column answered weekly is worth ten unused notebooks.',
        },
        { kind: 'heading', text: 'Key Terms' },
        { kind: 'terms', items: [
          { term: 'encoding effect', def: 'The learning that occurs while rephrasing and compressing material into notes.' },
          { term: 'external memory', def: 'The storage function of notes — the record consulted after the fact.' },
          { term: 'cue column', def: 'The Cornell left margin holding the questions and keywords the notes answer.' },
          { term: 'outline', def: 'A hierarchical note format recording levels: main point, support, detail.' },
          { term: 'mind map', def: 'A radial diagram placing a central topic in the middle with branches for sub-ideas.' },
          { term: 'Zettelkasten', def: 'A slip-box or digital system of atomic, densely linked notes in one\'s own words.' },
          { term: 'atomic note', def: 'A Zettelkasten unit: one idea per note, phrased for reuse and linking.' },
        ] },
        { kind: 'heading', text: 'Check Yourself' },
        { kind: 'quiz', items: [
          {
            q: 'Longhand note-takers outperformed laptop users on conceptual questions mainly because…',
            options: ['handwriting is slower, forcing selection and summarisation', 'laptops distract with notifications', 'typed notes cannot be printed', 'handwriting improves spelling'],
            answer: 0,
            explain: 'Transcription is easy on a keyboard; the constraint of pen and paper enforces rephrasing — the encoding effect.',
          },
          {
            q: 'The immediate purpose of the Cornell cue column is…',
            options: ['storing fuller lecture phrasing', 'generating self-test questions answerable with the notes covered', 'recording attendance', 'grading the notes'],
            answer: 1,
            explain: 'Cover the note area, answer the cues from memory — the page doubles as retrieval practice.',
          },
          {
            q: 'A Zettelkasten differs from ordinary files chiefly in that its notes are…',
            options: ['longer and more complete', 'sorted by subject into folders', 'atomic, in your own words, and densely linked', 'shared publicly as they are written'],
            answer: 2,
            explain: 'One idea per slip, self-written, cross-linked — the network, not the filing, generates arguments.',
          },
          {
            q: 'For a fast, well-structured textbook chapter, the best-fit default is…',
            options: ['a mind map', 'an outline mirroring the source hierarchy', 'verbatim transcription', 'no notes — just re-reading three times'],
            answer: 1,
            explain: 'Structured sources arrive as trees, and outlines are tree-shaped; maps suit unknown structure, not known structure.',
          },
        ] },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'Prerequisites: the study-skills base built by the spaced repetition, active recall and SQ3R lessons — this system is built to feed them, so read those first if you are new. Natural next steps: argument mapping for analytical reading, and deliberate practice for skills whose “notes” are drills rather than sentences.',
        },
      ],
    },
    {
      id: 'study-exam-strategy',
      title: 'Exam-Day Strategy: How Tests Are Actually Won',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Performing',
      tier: 'core',
      concepts: [
        'Sleep is study time',
        'The retrieval warm-up',
        'Reading the paper before answering it',
        'Point arithmetic: budgeting minutes',
        'Error triage: three passes',
        'Anxiety as fuel, not fog',
      ],
      words: 1297,
      readMins: 6,
      addedOn: '2026-10-18',
      blocks: [
        {
          kind: 'para',
          text: 'Two students with identical knowledge can sit the same paper and score thirty points apart, because exams are performances, and performance has a technique. The technique is not mysterious: sleep so the retrieval machinery works, warm it up before the doors open, read the whole paper before committing ink, budget minutes against marks, triage errors in passes, and manage arousal like an athlete manages a start line. None of it replaces study — all of it stops study from being wasted.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'Exams are the highest-stakes retrieval events most people ever face, and they are winnable on process alone more often than anyone admits: students routinely lose ten to twenty per cent of available marks to time mismanagement, unanswered easy questions and panic — not to ignorance. That margin is the difference between grades, offers and licences. Treat this topic as the game-day playbook your studying has earned.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Sleep is when memory consolidates — the filing-and-stabilising stage the spaced repetition lesson describes. An all-nighter trades a night of consolidation for a few extra hours of shallow exposure, and the arithmetic is terrible: sleep-deprived test-takers recall less of what they studied and solve problems more slowly. The right final evening is boring: a light pass over a one-page summary sheet, materials packed, alarm set, normal bedtime. The exam is partly won the night before, in bed.',
        },
        {
          kind: 'para',
          text: 'Retrieval is a state, not just a store: memory performs better when it has recently been used. A pre-exam warm-up — five easy practice questions solved on scrap paper, key formulas written from memory — primes the exact machinery the paper will demand. What does not work: comparing answers with panicking classmates in the corridor, which raises anxiety and teaches nothing, and cramming new material, which is too late to consolidate and remarkably effective at undermining confidence.',
        },
        {
          kind: 'para',
          text: 'If the format permits, spend the first five to ten minutes reading the entire paper before writing. You are pricing the market: where the marks are concentrated, which questions are cheap for you, which will be expensive, and what the essay actually asks. Note the command words — define, compare, evaluate — because answering the question asked is the cheapest source of marks on any paper. Then start with your best-value question, not the first one printed.',
        },
        {
          kind: 'para',
          text: 'Budget minutes in proportion to marks: a 100-point paper in 120 minutes pays roughly one minute per point, leaving a twenty-minute buffer for checking and emergencies. The hard rule: when a question exhausts its budget, mark it and move — every minute over budget on a hard question is a minute stolen from an easier one elsewhere. For multi-step problems, show the setup even if the arithmetic dies: method marks are paid for visible reasoning, not for lucky answers.',
        },
        {
          kind: 'para',
          text: 'Work in passes. Pass one: every question you can answer cleanly and fast — banking marks and building momentum. Pass two: the mediums, which get their full budgets. Pass three: the hard and uncertain, attacked with the remaining time and the confidence of a mostly-finished paper. Multiple choice: never leave blanks — eliminate and choose, unless wrong answers are penalised. Essays: outline before writing, because a two-minute skeleton earns more than a page of early drift. Final pass: signs, units, skipped sub-parts, your name.',
        },
        {
          kind: 'para',
          text: 'Arousal is not the enemy; misread arousal is. The Yerkes-Dodson law puts performance highest at moderate arousal, and the racing heart that feels like fear is physiologically near-identical to excitement — relabel it. Control what can be controlled: long, slow exhales calm the nervous system, a first easy question gets ink flowing, and a deliberate pause resets a frozen moment. If panic rises, skip and return; working memory comes back when the alarm stops owning it. You trained retrieval all term — the exam is just retrieval with a stopwatch.',
        },
        { kind: 'example', title: 'Worked Example', steps: [
          'Identify what is asked: a 120-minute, 100-point paper — twenty multiple-choice questions worth 1 point each, three short answers worth 10 each, one essay worth 30. Build the plan.',
          'Recall the governing ideas: budget minutes in proportion to points, hold a buffer, triage in passes, outline the essay before writing it.',
          'Apply: multiple choice gets 20 minutes (one per point), short answers 36 minutes (12 each), the essay 40 minutes — eight for the outline, thirty-two for prose — leaving 24 minutes of buffer. Order: bank the multiple choice first, outline the essay before writing it, keep the hardest short answer for last.',
          'State the result: every section has a budget and every hard question a ceiling; the buffer absorbs shocks, and you finish with time to check instead of expiring mid-essay.',
        ] },
        { kind: 'heading', text: 'Applications in the Real World' },
        { kind: 'list', items: [
          'University finals: past papers plus point arithmetic turn a three-hour paper into a series of budgeted sprints.',
          'Standardised tests (SAT, GRE, MCAT): section timings are published in advance, so budgets and triage rules can be rehearsed to the minute.',
          'Professional exams (bar essays, medical boards): partial-credit strategy — visible reasoning, outlined answers — is worth more than extra facts.',
          'Technical interviews: thinking aloud converts whiteboard panic into a demonstration of method, and pausing to structure is expected.',
          'Any timed performance: the same arousal-control toolkit serves auditions, thesis defences and driving tests.',
        ] },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'The classic losses: the all-nighter that trades consolidation for exposure; the sunk-cost question that eats forty minutes of a five-point item; blanks left unfilled; essays written without outlines. Two subtler ones: changing answers for no reason is neutral at best, but changing them with a specific reason improves scores — know the difference. And do not let the corridor crowd set your arousal level; arrive warmed up, not wound up.',
        },
        { kind: 'heading', text: 'Key Terms' },
        { kind: 'terms', items: [
          { term: 'consolidation', def: 'The sleep-dependent stabilisation of memory after study.' },
          { term: 'retrieval warm-up', def: 'Brief practice questions before an exam that prime the memory system about to be used.' },
          { term: 'point budget', def: 'Allocating exam minutes in proportion to the marks each question offers.' },
          { term: 'error triage', def: 'Answering in passes — sure things, then mediums, then hard items — rather than in paper order.' },
          { term: 'partial credit', def: 'Marks awarded for visible method and setup, even when the final answer is wrong.' },
          { term: 'Yerkes-Dodson law', def: 'The finding that performance peaks at moderate arousal and falls when arousal is too low or too high.' },
          { term: 'reappraisal', def: 'Relabelling a racing heart as excitement rather than fear, exploiting their physiological similarity.' },
        ] },
        { kind: 'heading', text: 'Check Yourself' },
        { kind: 'quiz', items: [
          {
            q: 'The best final evening before a morning exam is…',
            options: ['an all-nighter covering weak topics', 'a light summary-sheet review, materials packed, normal bedtime', 'a fresh practice exam at midnight', 'group quizzing until two in the morning'],
            answer: 1,
            explain: 'Sleep consolidates; all-nighters trade it for shallow exposure and slower recall the next day.',
          },
          {
            q: 'On a 100-point, 120-minute paper, a 10-point short answer deserves about…',
            options: ['five minutes', 'twelve minutes, inside a buffered budget', 'thirty minutes, because short answers are dense', 'as long as it takes'],
            answer: 1,
            explain: 'Minutes follow marks — one minute per point here — with the global buffer absorbing overruns and checking.',
          },
          {
            q: 'The three-pass triage order is…',
            options: ['hardest first, while you are fresh', 'paper order, no exceptions', 'sure things, then mediums, then hard items', 'essays last, always'],
            answer: 2,
            explain: 'Bank the cheap marks first, spend full budgets on mediums, then attack the hard items with what remains.',
          },
          {
            q: 'Following the Yerkes-Dodson logic, exam anxiety is best handled by…',
            options: ['suppressing all arousal', 'relabelling and regulating it toward moderate levels', 'caffeine, to convert it into focus', 'answering the hardest question first to burn it off'],
            answer: 1,
            explain: 'Moderate arousal is optimal, and reappraisal plus slow exhales steer toward it — the racing heart is fuel if labelled correctly.',
          },
        ] },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'Prerequisites: having studied — this playbook amplifies preparation, it does not replace it. Read the spaced repetition and active recall lessons for the months before, and note-taking systems for building the assets this topic assumes. Follow with deliberate practice for skill-based assessments, from labs to language orals.',
        },
      ],
    },
  ],
}

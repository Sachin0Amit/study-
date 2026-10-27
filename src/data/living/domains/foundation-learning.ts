/**
 * Living Library — domain file: Foundation Learning
 *
 * Study skills, reading strategies, and practical numeracy. Written as
 * complete lessons; future expansion passes append new topics below.
 */

import type { LivingDomainFile } from '../types'

export const foundationLearning: LivingDomainFile = {
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
      words: 897,
      readMins: 5,
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
      readMins: 5,
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
      words: 897,
      readMins: 5,
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
      id: 'fnd-metacognition-self-regulated-learning',
      title: 'Metacognition and Self-Regulated Learning',
      domain: 'Foundation Learning',
      field: 'Learning Science',
      branch: 'Metacognition',
      tier: 'intermediate',
      concepts: [
        'Thinking about your own thinking',
        'Flavell’s person, task, and strategy knowledge',
        'Zimmerman’s forethought–performance–reflection loop',
        'Judgments of learning and their cues',
        'Calibration: confidence versus accuracy',
        'Turning monitoring into plan changes',
      ],
      words: 1180,
      readMins: 6,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'You can know a subject well and still study it badly, because studying is itself a skill with its own knowledge — when to reread, when to test, when to stop. Metacognition, a term coined by developmental psychologist John Flavell in 1976, is cognition turned on itself: knowing how your memory and attention actually behave, and steering them deliberately. This intermediate topic in Learning Science covers the machinery of self-regulated learning — planning, monitoring, and evaluating — and the calibration techniques that expose when your confidence is lying to you. The payoff is study time spent on what you genuinely fail to know.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Most study failures are monitoring failures: the learner keeps rehearsing what is strong because it feels mastered, and abandons what is weak because it feels hopeless. Metacognitive training is among the cheapest known interventions — a week of prediction logging routinely redirects hours toward real gaps, and the skill transfers to every subject you will ever learn.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Flavell split metacognition into knowledge and regulation. Metacognitive knowledge comes in three varieties: person (beliefs about how your own memory and attention behave — that you fade after forty minutes, that diagrams stick better than prose), task (predictions about what a kind of material demands — that statistics problems need worked examples, not memorization), and strategy (knowing which tool fits which job — retrieval for facts, spacing for retention, self-explanation for mechanisms). A learner with accurate models of all three chooses sensible tactics before touching the material; a learner without them defaults to rereading, the most familiar and least effective habit.',
        },
        {
          kind: 'para',
          text: 'Barry Zimmerman modeled the self-regulated learner as a loop of three phases. Forethought: before starting, set a concrete goal, choose a strategy, and fix the criteria that will count as success. Performance: enact the strategy while monitoring — noticing comprehension break down mid-page, marking a problem step that felt shaky. Self-reflection: afterward, compare outcome against goal, attribute the gap to the strategy rather than to fixed ability, and feed the verdict into the next round of forethought. The loop itself, not any single phase, is what distinguishes self-regulated learners: every study session trains the next one.',
        },
        {
          kind: 'para',
          text: 'The raw signal of monitoring is the judgment of learning, or JOL — a prediction, made during or just after study, that you will recall an item later. JOLs are only as good as the cues they rest on. Predictions made immediately lean on fluency: the item feels easy now, so you predict you will still know it later, and the forecast overshoots. Thomas Nelson and Katherine Dunlosky showed in 1991 that delaying the judgment by even a few minutes forces a covert retrieval attempt, and delayed JOLs track eventual test performance dramatically better — a free upgrade in self-knowledge.',
        },
        {
          kind: 'para',
          text: 'Calibration measures the gap between confidence and correctness. In the standard setup you predict recall for each item as a percentage, take the test later, and compare. Bias is the average of predictions minus performance — positive means overconfident. Absolute accuracy is the average unsigned gap. Untrained learners, especially weaker ones, run large positive bias: they predict 90 percent and score 60. The pattern echoes the Dunning–Kruger finding that the least skilled overestimate most, partly because judging performance well requires the very knowledge being judged.',
        },
        {
          kind: 'para',
          text: 'Comprehension of connected text is even harder to monitor — researchers call it metacomprehension, and measured correlations between predicted and actual understanding typically hover near 0.3, only modestly better than chance. The culprit again is cue substitution: familiarity with the prose impersonates understanding of the ideas. That is why rereading feels like learning while leaving little behind, and why the honest probes — explaining the idea aloud from memory, drawing the mechanism, solving a transfer problem — are worth more than any feeling of clarity gathered during reading.',
        },
        {
          kind: 'para',
          text: 'Self-regulation also governs time. People systematically underestimate how long tasks will take — the planning fallacy, documented by Daniel Kahneman and Amos Tversky — and students budget exam preparation the same way. The remedy is reference-class forecasting applied to yourself: instead of imagining the ideal session, look up how long similar tasks actually took you last time and budget that. A one-line log — task, predicted hours, actual hours — turns the fallacy into a measured personal constant within about a month of entries.',
        },
        {
          kind: 'para',
          text: 'Monitoring is worthless without control — the step where you actually change what you are doing. Suppose quiz results show definitions recalled at 85 percent but transfer problems solved at 40 percent: the metacognitively skilled response is to reallocate, retiring flashcards that have matured and moving to problem practice with self-explanation. Weaker learners register the same numbers and change nothing. The practical rule: every study session ends with one concrete adjustment written down before the next one begins.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Calibration bias',
          latex: 'B = \\frac{1}{N} \\sum_{i=1}^{N} \\left( \\text{JOL}_i - \\text{score}_i \\right)',
          meaning:
            'Average predicted recall minus average actual score across N items; positive bias means overconfidence, negative means underconfidence.',
        },
        {
          kind: 'formula',
          name: 'Absolute calibration accuracy',
          latex: 'A = \\frac{1}{N} \\sum_{i=1}^{N} \\left| \\text{JOL}_i - \\text{score}_i \\right|',
          meaning:
            'The average unsigned gap between prediction and outcome — the number that practice and feedback should drive toward zero.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: build a calibration log for one week of exam preparation across three subjects and turn it into a study-plan correction.',
            'Recall the governing idea: predict, test, then compare — bias and absolute accuracy summarize how far confidence sits from reality.',
            'Apply: before each session, write a JOL from 0 to 100 for each of ten items; test yourself the next morning without notes; log the scores. Suppose the averages come out at biology predicted 85 versus actual 62, history 70 versus 71, and statistics 60 versus 78.',
            'Interpret: biology shows a bias of +23 — familiarity from rereading is inflating predictions, so switch biology sessions to closed-book retrieval; history is calibrated; statistics is underconfident, a sign that problem practice is working better than it feels.',
            'State the result: the next week’s plan shifts hours from history (calibrated, stable) to biology retrieval practice, keeps statistics on schedule, and predicts the new round from last round’s actuals — the feedback loop now runs on data instead of mood.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Exam preparation: JOL-tagged flashcards surface the overconfident stack for one more retrieval pass.',
            'Professional training: pilots and surgeons use checklists and debriefs — institutionalized self-reflection — for exactly the reason students should.',
            'Reading technical material: a delayed self-explanation after each section replaces the false comfort of fluent prose.',
            'Project planning: predicted-versus-actual time logs correct the planning fallacy with personal data.',
            'Tutoring: asking a tutee to predict their quiz score before taking it trains calibration faster than grading alone.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The classic trap is monitoring without controlling — collecting quiz scores and never changing the plan. The second is trusting immediate confidence: predictions made while the material is still open are systematically inflated, which is exactly why delayed judgments and closed-book probes exist. And beware wholesale underconfidence: the goal is accuracy, not humility, because a learner who predicts 40 percent while scoring 80 will abandon strategies that are quietly working.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Metacognition', def: 'Thinking about your own thinking; knowledge and regulation of cognition.' },
            { term: 'Metacognitive knowledge', def: 'Beliefs about persons, tasks, and strategies that guide tactic choice.' },
            { term: 'Self-regulated learning', def: 'The forethought–performance–reflection cycle by which learners steer themselves.' },
            { term: 'Judgment of learning (JOL)', def: 'A prediction, made during or after study, of later recall success.' },
            { term: 'Delayed JOL', def: 'A prediction made minutes after study, which forces retrieval and improves accuracy.' },
            { term: 'Calibration', def: 'The alignment between confidence and actual performance.' },
            { term: 'Planning fallacy', def: 'The systematic underestimation of how long a task will take.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Flavell divided metacognitive knowledge into which three categories?',
              options: ['Person, task, and strategy', 'Short-term, long-term, and sensory', 'Planning, monitoring, and evaluating', 'Speed, accuracy, and confidence'],
              answer: 0,
              explain: 'Person, task, and strategy variables — knowledge about learners, materials, and tactics — form the knowledge half of metacognition.',
            },
            {
              q: 'Why are delayed judgments of learning more accurate than immediate ones?',
              options: ['Waiting gives memory time to strengthen', 'The delay forces a covert retrieval attempt instead of a fluency read', 'Immediate judgments are always underconfident', 'Delay removes the need for testing'],
              answer: 1,
              explain: 'Nelson and Dunlosky found that minutes-later JOLs rest on whether you can still retrieve the item — the very skill being predicted.',
            },
            {
              q: 'A student predicts 90 percent recall and scores 60 percent. Their bias is:',
              options: ['+30 points, overconfident', '−30 points, underconfident', '30 percent absolute accuracy', 'Zero, because both are percentages'],
              answer: 0,
              explain: 'Bias is average prediction minus average performance; +30 signals confidence outrunning knowledge.',
            },
            {
              q: 'Metacomprehension research shows that readers predicting their understanding of a text:',
              options: ['Are almost perfectly accurate', 'Track it barely better than chance', 'Always underestimate it', 'Cannot predict it at all'],
              answer: 1,
              explain: 'Correlations between predicted and actual text comprehension hover near 0.3 — familiarity keeps impersonating understanding.',
            },
            {
              q: 'Monitoring converts into learning only when:',
              options: ['Predictions are recorded in an app', 'Confidence stays high throughout', 'The learner changes the plan based on the data', 'Testing happens before studying'],
              answer: 2,
              explain: 'Control — acting on what monitoring reveals — is the step that turns accurate self-knowledge into redistributed effort.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisites: the study mechanics of spaced repetition and SQ3R-style reading, which generate the performance data that calibration needs. Next: the evidence ratings for learning techniques compiled by John Dunlosky and colleagues, self-explanation research, and the motivational science of expectancy and value, which explains why even well-monitored plans get abandoned.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Metacognition = knowledge (person, task, strategy) plus regulation (plan, monitor, evaluate).',
            'Zimmerman’s loop — forethought, performance, self-reflection — makes each session train the next.',
            'Delayed JOLs beat immediate ones by forcing retrieval before predicting.',
            'Calibration gap = prediction − performance; watch for positive bias.',
            'Monitoring matters only when it changes the next study decision.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fnd-cornell-notes-elaborative-encoding',
      title: 'Note-Taking That Sticks: Cornell Notes and Elaborative Encoding',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Note-Taking & Encoding',
      tier: 'core',
      concepts: [
        'The three-zone Cornell page',
        'Record, reduce, recite, reflect, review',
        'Levels of processing: depth beats repetition',
        'Elaborative interrogation: ask why it works',
        'Generative learning: summarize, map, draw, teach',
        'Dual coding words with diagrams',
      ],
      words: 1210,
      readMins: 6,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'A page of notes is a storage device for a future self who has forgotten almost everything — and most notes fail that future reader, because they were written to feel complete rather than to support retrieval. This core topic in Learning Science pairs the classic Cornell note system, laid out by Walter Pauk at Cornell University in the 1940s, with the encoding research that explains when note-taking actually builds memory: depth of processing, elaboration, and generation. The result is a page engineered like a flashcard deck — cue on one side, reconstruction on the other.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Notes sit at the center of every course, yet the default pattern — transcribe everything, reread before the exam — is among the weakest known ways to study. A structured page with cues, diagrams, and summaries converts the same lecture hours into retrieval material that later sessions can actually use.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The Cornell system divides a page into three zones: a wide note-taking column on the right for lecture content, a narrow cue column on the left, and a summary strip across the bottom. During class, everything lands in the note column — fast, telegraphic, abbreviated. As soon as possible afterward, the left column is filled with cues: questions the notes answer, key terms, small prompts. Finally, the bottom strip gets two or three sentences of summary in your own words. Three zones, three cognitive jobs: capture, condense, integrate.',
        },
        {
          kind: 'para',
          text: 'Pauk framed the workflow as five Rs. Record during the lecture, in the note column. Reduce afterwards by distilling the cue column — choosing the question that a block of notes answers is itself deep processing. Recite by covering the note column and answering the cues aloud. Reflect by connecting the material to what you already know and asking why it holds. Review on a spaced schedule, days later, using the cues as a self-test. Only the first R happens in class; the other four are where the memory is manufactured.',
        },
        {
          kind: 'para',
          text: 'The research backbone is the levels-of-processing framework of Fergus Craik and Robert Lockhart from 1972. Memory traces are stronger when encoding engages meaning rather than surface form: judging whether a word fits a sentence — a deep, semantic judgment — leaves far better recall than counting its letters, a shallow, structural one. Writing cues that restate an idea as a question, and summaries that re-express a lecture in your own words, both force semantic processing. The notes stop being a copy of the material and become a transformation of it.',
        },
        {
          kind: 'para',
          text: 'Elaborative interrogation is the simplest deep-processing move: ask why. Why does raising the temperature speed the reaction? Why did the treaty collapse? Answering forces the new fact to integrate with prior knowledge, and every added connection becomes another retrieval route to the same memory. The technique reliably beats rereading in controlled studies — reviewers rate it moderately effective — and it slots straight into the cue column, where a note that merely names a mechanism becomes the question of why that mechanism works the way it does.',
        },
        {
          kind: 'para',
          text: 'Fiorella and Mayer call the family of techniques that make the learner produce the structure generative learning: summarizing, concept mapping, drawing the mechanism, imagining the process, self-testing, and teaching the material to someone else. All convert passive input into constructed output. Dual coding — Allan Paivio’s 1971 observation that verbal and visual information travel through partially separate channels — doubles the payoff, because a diagram you drew yourself, with labeled arrows and cause-and-effect chains, is stored both as an image and as the sentences that describe it.',
        },
        {
          kind: 'para',
          text: 'The medium matters through the same mechanism. Pam Mueller and Daniel Oppenheimer’s 2014 experiments found that students taking notes longhand — too slow to transcribe — summarized and rephrased, and outperformed laptop note-takers on conceptual questions; the laptop groups produced more words and more verbatim overlap with the lecture. The honest caveat: replications have been mixed, and the advantage shrinks or vanishes when laptop users are told to write generatively rather than transcribe. The lesson survives either way — the pen is not magic, the processing is.',
        },
        {
          kind: 'para',
          text: 'The system only pays if the notes are revisited on a spacing schedule, which is why Cornell practice pairs naturally with spaced repetition: every cue in the left column is a ready-made flashcard front. A workable rhythm: reduce cues within a day of the lecture, recite through the full page the following evening, then again at expanding gaps — three days, a week, a month. Pages that survive three or four successful recitations can be archived; their summary strips alone can carry an entire term of revision.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Effect size (Cohen’s d)',
          latex: 'd = \\frac{M_{1} - M_{2}}{s_{\\text{pooled}}}, \\qquad s_{\\text{pooled}} = \\sqrt{\\frac{s_{1}^{2} + s_{2}^{2}}{2}}',
          meaning:
            'How researchers quantify a note-taking difference in units of standard deviation: Mueller and Oppenheimer’s conceptual-recall advantages were small to moderate, roughly 0.2 to 0.4 — real, but smaller than the gain from replacing rereading with retrieval practice.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: convert a 50-minute lecture on enzyme kinetics into a Cornell page that can carry the whole topic through exam week.',
            'Recall the governing idea: the page is built in three passes — record everything fast, reduce to cues, summarize the idea — then recited and reviewed on a spacing schedule.',
            'Apply: during the lecture, telegraphic notes fill the right column — rate definitions, a sketch of the saturation curve, inhibitors, one worked problem. That evening the left column gains cues such as why the curve plateaus and what a competitive inhibitor shifts. The bottom strip ties rate, affinity, and saturation together in three sentences.',
            'Recite the next evening with the note column covered, answering each cue aloud; mark the two cues answered badly and write an extra why-question for each.',
            'State the result: after recitations on days one, three, and ten, the page has done more work than a week of rereading — and the marked cues say exactly what to rehearse the night before the exam.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Lecture courses: the cue column doubles as a question bank for spaced review.',
            'Reading: the same three-zone page works on book chapters, with marginal notes becoming cues.',
            'Meetings and training: summary strips make minutes searchable and reviewable in seconds.',
            'Online video learning: pause-and-reduce turns passive watching into an active loop.',
            'Language learning: cue cards built from class notes feed directly into spaced-repetition decks.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The most common failure is skipping the reduction pass — notes remain an unstructured transcript with no cues, a page that can only be reread, never recited. The second is copying slides verbatim, which records the material without processing it. And beware the highlighting reflex: marking text changes nothing about how deeply it is encoded; it decorates the page while leaving the trace shallow.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Cue column', def: 'The left zone of a Cornell page holding questions and prompts that the notes answer.' },
            { term: 'Reduce', def: 'Distilling lecture notes into cues and key terms shortly after class.' },
            { term: 'Levels of processing', def: 'Craik and Lockhart’s finding that semantic encoding yields far stronger memory than surface encoding.' },
            { term: 'Elaborative interrogation', def: 'Asking why a fact is true in order to connect it with prior knowledge.' },
            { term: 'Generative learning', def: 'Techniques that have the learner construct the material — summarize, map, draw, teach.' },
            { term: 'Dual coding', def: 'Storing information in both verbal and visual channels.' },
            { term: 'Verbatim overlap', def: 'How much note text matches the source word for word — a hallmark of shallow processing.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'In the Cornell layout, the cue column is used to:',
              options: ['Record the lecture verbatim', 'Hold questions and prompts distilled from the notes', 'Store the instructor’s slides', 'Track dates and deadlines'],
              answer: 1,
              explain: 'Cues are written after class by reducing the note column; covering the notes and answering cues is the recitation step.',
            },
            {
              q: 'According to Craik and Lockhart, which encoding task produces the best recall?',
              options: ['Counting the letters in a word', 'Judging the font a word is printed in', 'Judging whether a word fits a sentence', 'Rereading the word five times'],
              answer: 2,
              explain: 'Semantic, meaning-level processing leaves deeper traces than structural or surface processing.',
            },
            {
              q: 'Why did longhand note-takers outperform laptop note-takers on conceptual questions in the 2014 experiments?',
              options: ['Laptops were slower for typing', 'Handwriting is neurologically special', 'Slower writing forced summarizing and rephrasing rather than transcription', 'Laptop users took no notes at all'],
              answer: 2,
              explain: 'The processing, not the pen: verbatim overlap — copying the lecture word for word — predicted worse conceptual performance.',
            },
            {
              q: 'Elaborative interrogation strengthens memory mainly by:',
              options: ['Repeating facts until familiar', 'Connecting new facts to existing knowledge through why-questions', 'Reading faster', 'Isolating facts from context to avoid interference'],
              answer: 1,
              explain: 'Each added connection becomes an extra retrieval route to the target memory.',
            },
            {
              q: 'Which of the five Rs happens during the lecture itself?',
              options: ['Reduce', 'Recite', 'Reflect', 'Record'],
              answer: 3,
              explain: 'Record is the live step; reduce, recite, reflect, and review all happen afterward — which is where the learning is built.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisites: none — this is a core topic, and the earlier the habit forms, the longer it compounds. Pair it with spaced repetition, which schedules the reviews the system assumes, and with SQ3R for the reading side of the same problem. Next: concept-mapping research, argument mapping for analytical reading, and self-explanation as a standalone technique.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Three zones — notes, cues, summary — do three different cognitive jobs.',
            'Only record happens in class; the other four Rs manufacture the memory.',
            'Deep, semantic processing beats surface copying every time.',
            'Ask why: elaborative interrogation builds extra retrieval routes.',
            'A Cornell page plus a spacing schedule is a self-testing system.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fnd-cognitive-load-working-memory',
      title: 'Cognitive Load: Working Memory as the Learning Bottleneck',
      domain: 'Foundation Learning',
      field: 'Learning Science',
      branch: 'Cognitive Architecture',
      tier: 'intermediate',
      concepts: [
        'Working memory’s tiny capacity',
        'Baddeley’s loop, sketchpad, and executive',
        'Chunking: expertise compresses',
        'Intrinsic, extraneous, and germane load',
        'Element interactivity',
        'Worked examples and the expertise reversal',
      ],
      words: 1230,
      readMins: 6,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Some pages are hard because the subject is hard; others are hard because they are badly designed — and learners usually cannot tell the difference, so they blame their own aptitude. Cognitive load theory, developed by educational psychologist John Sweller from 1988, explains both cases with a single fact: thinking runs through working memory, a workspace that holds only a handful of new items at once. This intermediate topic in Learning Science covers the architecture of that bottleneck, the three kinds of load that fill it, and the design moves — worked examples, integrated diagrams, sequenced complexity — that keep learning inside the budget.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Cognitive load theory is the rare learning-science framework that directly reshapes textbooks, slides, and software. Once you can name what is choking your working memory — the material itself, or the presentation — you can fix the right one instead of concluding that the subject is beyond you.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The backbone model, from Richard Atkinson and Richard Shiffrin in 1968, routes information from a fleeting sensory register through a short-term workspace into long-term memory. Alan Baddeley and Graham Hitch rebuilt that workspace in 1974 as working memory: a central executive that directs attention, a phonological loop that rehearses speech for about two seconds, and a visuospatial sketchpad for images and layout, with an episodic buffer added in 2000 to bind the streams together. The executive is the bottleneck inside the bottleneck: while it is busy hunting for a formula on another page, it cannot simultaneously build understanding.',
        },
        {
          kind: 'para',
          text: 'How much fits? George Miller’s 1956 classic put immediate memory span at seven, plus or minus two items; modern estimates by Nelson Cowan cut that to about four chunks. The operative word is chunks. A chess master glancing for a few seconds at a real mid-game position reproduces it almost perfectly, yet performs barely better than a novice when the pieces are scattered at random, because boards are stored as meaningful patterns, not as individual squares. Capacity counts chunks, and expertise compresses the world into fewer, richer chunks.',
        },
        {
          kind: 'para',
          text: 'Sweller’s theory splits the demand on working memory into three sources. Intrinsic load is the natural complexity of the material — the number of elements that must be held in mind simultaneously. Extraneous load is demand added by the presentation: hunting for the symbol legend on the facing page, decoding a rambling explanation, filtering decorative clutter. Germane load is the productive effort of constructing schemas — the knowledge structures that let future encounters run on long-term memory instead of the workspace. The design rule follows directly: minimize extraneous, manage intrinsic, protect germane.',
        },
        {
          kind: 'para',
          text: 'Intrinsic load is formalized as element interactivity: how many elements must be processed together for any step to make sense. Vocabulary can be learned one item at a time — low interactivity — but a proof, a chemical equation, or a circuit diagram is wrong unless every element is simultaneously consistent with the others, so load grows with the number of interacting elements, roughly with the number of pairs among them. That quadratic growth is why splitting a procedure into sub-steps that can be mastered separately and then recombined is not dumbing it down — it is queue management for the mind.',
        },
        {
          kind: 'para',
          text: 'The best-documented consequence is the worked-example effect: for novices, studying fully worked solutions produces better learning than solving the equivalent problems unaided. Unguided problem solving burns the workspace on means–end search — hunting for any operator that shrinks the gap to the goal — leaving nothing for schema construction. The advantage reverses as expertise grows, a result called the expertise reversal effect: practiced learners benefit more from solving problems themselves, and redundant guidance actively slows them. Instruction should therefore fade — full examples first, then completion problems with steps left to finish, then independent work.',
        },
        {
          kind: 'para',
          text: 'A catalog of named effects captures the presentation sins. Split-attention: text over here, diagram over there forces the mind to hold and match across the gap; integrate them and load drops. Redundancy: repeating the diagram in prose, or narrating slides word for word, adds processing without adding content. Modality: pictures with spoken narration use the auditory and visual channels in parallel, while the same words printed compete with the picture for the visual channel. Each fix is a speedup that costs no extra study time.',
        },
        {
          kind: 'para',
          text: 'For a self-directed learner, the theory converts into checklist habits. Pre-study the vocabulary so definitions live in long-term memory before the reasoning starts. Work one source at a time rather than hopping between three. Redraw separated text-and-figure pages into one integrated, annotated drawing. Sequence hard topics by element interactivity, mastering components before compositions. And when a page refuses to make sense on the third careful pass, suspect the page — find a differently structured explanation before concluding the subject is beyond you.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'The load budget',
          latex: 'L_{\\text{intrinsic}} + L_{\\text{extraneous}} \\; \\le \\; W',
          meaning:
            'Total demand on working memory — the material’s own complexity plus what the presentation adds — must stay within capacity W, roughly four chunks for novel material. Above budget, nothing is learned, however long you sit there.',
        },
        {
          kind: 'formula',
          name: 'Element interactivity growth',
          latex: 'I \\approx \\frac{n(n-1)}{2}',
          meaning:
            'When every pair among n elements must be checked against the others, interactions grow quadratically: five interacting elements imply ten pairwise checks, ten imply forty-five — which is why whole-problem instruction overwhelms novices.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: a learner keeps stalling on a textbook section introducing statistical hypothesis testing — dense notation, a table of symbols on the facing page, and end-of-section problems with no solutions.',
            'Recall the governing idea: total load must fit the budget, so attack extraneous load first, then manage intrinsic load by sequencing, then restore germane effort with worked examples.',
            'Apply: copy the symbol legend into the margins beside each equation, killing the split-attention search; pre-learn the five Greek letters as flashcards until each definition arrives in under a second; find one fully worked test example and study it line by line before attempting any problem.',
            'Fade the guidance: attempt a completion problem with the first steps given, and only afterwards a full problem — matching the level of support to growing expertise.',
            'State the result: the same section, previously unreadable in three passes, yields to one structured pass plus one practice session — the material did not change, the load profile did.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Textbook and slide design: integrated labels, flagged sequences, no decorative clutter.',
            'Self-study: vocabulary front-loading moves language load into long-term memory before hard reasoning.',
            'Instructional video: narration plus minimal on-screen text beats walls of bullet points.',
            'Coding tutorials: complete annotated examples before open-ended projects for newcomers.',
            'Curriculum sequencing: components first, compositions second, complexity last.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'The recurring mistake is treating any struggle as the sign of learning. Desirable difficulty means retrieval and transfer effort, not visual clutter or unexplained notation. The opposite error is over-scaffolding: permanent training wheels trigger the expertise reversal, and guidance that helped in week one actively harms in week ten. Finally, do not confuse cutting extraneous load with cutting germane load — a slick video you never pause to self-test is low-load and low-learning.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Working memory', def: 'The small workspace where thinking happens; the bottleneck all learning passes through.' },
            { term: 'Central executive', def: 'The attention-directing component of working memory that coordinates the loop and sketchpad.' },
            { term: 'Chunk', def: 'A meaningful pattern stored in long-term memory and recalled as a single working-memory item.' },
            { term: 'Intrinsic load', def: 'The inherent complexity of material, driven by element interactivity.' },
            { term: 'Extraneous load', def: 'Working-memory demand added by poor presentation rather than by the content.' },
            { term: 'Germane load', def: 'Effort devoted to building schemas — the productive part of the load.' },
            { term: 'Expertise reversal', def: 'The finding that instructional guidance helps novices but hinders advanced learners.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Cowan’s modern estimate of working-memory capacity is about:',
              options: ['Seven plus or minus two chunks', 'Four chunks', 'Twenty items', 'Unlimited with practice'],
              answer: 1,
              explain: 'Miller’s 7±2 counted items; Cowan’s reanalysis put the limit near four meaningful chunks.',
            },
            {
              q: 'A page puts its symbol legend on the side opposite the equations. This is an example of:',
              options: ['Intrinsic load', 'Germane load', 'Extraneous load via the split-attention effect', 'The expertise reversal effect'],
              answer: 2,
              explain: 'Split-attention forces learners to hold and match across a distance — presentation-imposed load that integration removes.',
            },
            {
              q: 'For novices, studying worked examples beats unaided problem solving because:',
              options: ['Examples are shorter to read', 'Unguided means–end search consumes the working memory needed for schema construction', 'Problem solving damages memory', 'Examples remove all load from the task'],
              answer: 1,
              explain: 'Unguided search taxes the workspace; with a full example, the freed capacity goes to understanding the steps and why they work.',
            },
            {
              q: 'The expertise reversal effect says that:',
              options: ['Experts should always use worked examples', 'Novices learn best from pure discovery', 'Load increases with expertise', 'Guidance that helps novices can impair advanced learners'],
              answer: 3,
              explain: 'As schemas form, redundant scaffolding wastes capacity — instruction should fade from full examples to independent problems.',
            },
            {
              q: 'A chess master reproduces a real game position far better than a random position because:',
              options: ['Masters have superior visual memory for squares', 'Random positions have fewer pieces', 'Real positions are stored as familiar chunks in long-term memory', 'Masters use the phonological loop'],
              answer: 2,
              explain: 'Chase and Simon’s classic result: capacity counts chunks, and expertise builds the patterns that let many pieces load as one item.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Study Path',
          text: 'Prerequisites: the study mechanics from spaced repetition and note-taking, which assume attention to spare. Next: schema theory and expertise research, the multimedia-learning principles of Richard Mayer, and the desirable-difficulties framework of Robert Bjork, which explains when harder is genuinely better.',
          tone: 'path',
        },
        { kind: 'heading', text: 'Five-Minute Recap' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Thinking runs through a workspace that holds roughly four chunks.',
            'Intrinsic complexity, extraneous presentation, germane construction — three loads, one budget.',
            'Element interactivity grows roughly quadratically; sequence accordingly.',
            'Worked examples win for novices; fade guidance as expertise grows.',
            'Fix the page before blaming the learner — including yourself.',
          ],
        },
      ],
    },
  ],
}

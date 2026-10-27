/**
 * Knowledge Universe — domain file: Foundation Learning
 *
 * Study skills, reading strategies, and practical numeracy. Written as
 * complete lessons; future expansion passes append new topics below.
 */

import type { UniverseDomainFile } from '../types'

export const foundationLearning: UniverseDomainFile = {
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
      id: 'fnd-deliberate-practice',
      title: 'Deliberate Practice: The Science of Getting Good',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Learning Science',
      tier: 'intermediate',
      concepts: [
        'Practice aimed at the edge of ability',
        'Focused, effortful repetition under full attention',
        'Immediate feedback as the engine of improvement',
        'Mental representations and chunking',
        'The ten-thousand-hour rule, corrected',
        'Escaping the comfort-zone plateau',
        'Coaches, drills, and decomposed sub-skills',
      ],
      words: 1261,
      readMins: 5,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'In 1993, psychologist Anders Ericsson and his colleagues reported a finding from a Berlin music academy that reshaped how we think about talent: the best young violinists had not merely practiced more hours — they had practiced differently. Learning Science calls that difference deliberate practice: focused, feedback-rich work aimed precisely at what you cannot yet do. This topic unpacks why one hour of the right kind of struggle beats many hours of comfortable repetition, and how to arrange the conditions that make improvement nearly inevitable.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Most people plateau years before their potential because they keep rehearsing what they already do well. Deliberate practice is the difference between twenty years of growing expertise and one year of experience repeated twenty times — on stage, in sport, in medicine, and in every subject you study.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Ericsson’s Berlin study followed violinists from admission into their careers. By age twenty, the top students had accumulated roughly ten thousand hours of solitary practice, while the least accomplished group had logged well under half as much — and those hours predicted skill better than any other measured factor. What counted was the character of the time: alone, effortful, and aimed at specific weaknesses.',
        },
        {
          kind: 'para',
          text: 'Deliberate practice has a recognizable anatomy. Each session targets a small, well-defined sub-skill; attention is total rather than autopilot; feedback arrives immediately after each attempt; and the loop repeats with corrections folded in. None of it is accidental — the structure, not the hours, is what separates it from mere repetition.',
        },
        {
          kind: 'para',
          text: 'Feedback is the engine. A correction that lands seconds after an error shapes the next attempt; one that arrives a month later shapes almost nothing. Coaches compress this loop for athletes and musicians, but students can manufacture it: check against worked solutions the same evening, record and replay a performance, or trade graded attempts with a partner. The shorter the gap between attempt and correction, the steeper the climb.',
        },
        {
          kind: 'para',
          text: 'Underneath visible skill sits a lattice of mental representations. Chess masters do not calculate faster than amateurs; they perceive board patterns in meaningful chunks, built from thousands of reviewed positions. Practice does more than tune movements — it builds richer internal models, and those models are what let experts monitor their own performance mid-flight and know, without a coach, that something just went wrong.',
        },
        {
          kind: 'para',
          text: 'The enemy of growth is comfort. Skills become automatic — driving, typing, solving familiar problems — and automaticity is efficient but static, which is why performance curves flatten into plateaus. The escape is calibrated difficulty: keep success rates near 80 percent, hard enough to stretch and achievable enough to sustain, then raise the bar the moment it stabilizes. Plateaus persist because practice stopped being deliberate, not because capacity ran out.',
        },
        {
          kind: 'para',
          text: 'Domains also differ in how cooperative they are. Chess and music are kind environments: stable rules, fast and honest feedback. Business, history, and self-taught skills are often wicked environments, where feedback is delayed, noisy, or misleading. There the practitioner must deliberately manufacture feedback — error logs, blind predictions, measurable baselines — or risk practicing confidently in the wrong direction.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Power law of practice',
          latex: 'T(N) = a\\,N^{-b}',
          meaning:
            'The time to complete a task falls as a power of the number of repetitions N, with b typically between 0.2 and 0.5: gains compress as practice accumulates, so difficulty must keep rising for practice to stay deliberate.',
        },
        {
          kind: 'formula',
          name: 'Quality-weighted practice hours',
          latex: 'H_{\\text{eff}} = \\sum_{i} q_i\\, h_i, \\quad 0 \\le q_i \\le 1',
          meaning:
            'Effective hours are a quality-weighted sum over sessions: an hour of attentive, feedback-rich work (q near 1) counts many times an hour on autopilot (q near 0). Raw logged hours are a poor proxy for learning.',
        },
        { kind: 'heading', text: 'Worked Example' },
        {
          kind: 'example',
          title: 'Rebuilding a Weak Sub-Skill in Six Weeks',
          steps: [
            'Identify: a student answers multi-step mechanics problems correctly only about half the time and wants 80 percent accuracy within six weeks.',
            'Diagnose: an error log over the last forty attempts shows that roughly 60 percent of failures trace to one sub-skill — setting up the free-body diagram — rather than to algebra or arithmetic.',
            'Design: each week, attempt twenty problems that isolate exactly that sub-skill; predict success before starting each one; check every attempt against worked solutions the same evening.',
            'Track: weekly success rates climb 52, 63, 71, 78, then 84 percent. Whenever a week clears 80 percent, the next week mixes in harder, disguised versions so comfort cannot creep back.',
            'State the result: about twenty-four targeted hours outperform the roughly sixty unfocused hours classmates spend redoing familiar problems, because every repetition lands at the edge of ability with same-day feedback.',
          ],
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Deliberate practice', def: 'Effortful, structured practice targeting current weaknesses with immediate feedback.' },
            { term: 'Mental representation', def: 'The internal model experts use to perceive situations in chunks and evaluate their own performance.' },
            { term: 'Automaticity', def: 'The shift of a skill to effortless autopilot — efficient for execution, fatal for further growth.' },
            { term: 'Plateau', def: 'A flat stretch on the performance curve caused by practice drifting below the edge of ability.' },
            { term: 'Feedback loop', def: 'The cycle of attempt, correction, and revised attempt; the shorter the loop, the faster the learning.' },
            { term: 'Kind versus wicked environment', def: 'Whether feedback is fast and honest, or delayed, noisy, and misleading — which decides how hard practice is to structure.' },
            { term: 'Purposeful practice', def: 'Ericsson’s label for structured, goal-directed practice when no coach or curriculum is available.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'What most distinguishes deliberate practice from ordinary repetition?',
              options: ['Sessions are much longer', 'It targets specific weaknesses with full attention and immediate feedback', 'It happens at the same time every day', 'It focuses on skills you already enjoy'],
              answer: 1,
              explain: 'Structure — goals, attention, feedback, correction — is the active ingredient; hours are only the raw material.',
            },
            {
              q: 'Performance plateaus mostly because:',
              options: ['The brain loses the ability to change after adolescence', 'The skill becomes automatic and stops being consciously improved', 'Practice hours stop being recorded', 'Feedback becomes too frequent'],
              answer: 1,
              explain: 'Automaticity freezes performance; raising difficulty restores the stretch that drives change.',
            },
            {
              q: 'In Ericsson’s Berlin study, the strongest predictor of the violinists’ eventual skill was:',
              options: ['Age at the first lesson', 'Accumulated hours of solitary, targeted practice', 'The size of the music school', 'Hours spent playing in orchestras'],
              answer: 1,
              explain: 'Solitary practice — effortful, self-monitored, aimed at weaknesses — separated the groups.',
            },
            {
              q: 'A "wicked" learning environment is one where:',
              options: ['Feedback is delayed, noisy, or misleading', 'Rules change every week', 'Only prodigies improve', 'No practice is possible'],
              answer: 0,
              explain: 'Chess and music are kind; business and self-taught skills are often wicked, so feedback must be engineered.',
            },
            {
              q: 'The power law of practice implies that:',
              options: ['Every practice hour buys the same gain', 'Gains compress over repetitions, so difficulty must keep rising', 'Practice eventually becomes effortless', 'Feedback matters only at the beginning'],
              answer: 1,
              explain: 'Each additional repetition buys less than the last; staying at the edge of ability keeps the curve steep.',
            },
          ],
        },
        { kind: 'heading', text: 'Common Pitfalls' },
        {
          kind: 'list',
          items: [
            'Equating hours logged with hours of deliberate work — unfocused time barely counts.',
            'Practicing strengths because they feel good; weaknesses are the actual curriculum.',
            'Letting feedback arrive so late it can no longer shape the next attempt.',
            'Treating ten thousand hours as a guarantee rather than a description of one field’s top performers.',
            'Ignoring recovery: deliberate practice is mentally taxing, and consolidation happens between sessions.',
            'Staying in drill mode forever — eventually mix disguised, varied problems so skills transfer.',
          ],
        },
        { kind: 'heading', text: 'Study Path' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Read Spaced Repetition and the Forgetting Curve first — memory is the substrate practice writes on.',
            'Keep an error log for two weeks to locate your weakest sub-skill.',
            'Design drills with same-day feedback, and raise difficulty whenever success stabilizes above 80 percent.',
            'Read Metacognition: Plan, Monitor, Evaluate to self-coach when no coach is available.',
            'Review your tracking sheet weekly; a plateau lasting two weeks calls for redesigned drills, not more hours.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fnd-note-taking-systems',
      title: 'Note-Taking Systems: Cornell and Zettelkasten',
      domain: 'Foundation Learning',
      field: 'Reading & Literacy',
      branch: 'Note Systems',
      tier: 'core',
      concepts: [
        'The Cornell page: cues, notes, summary',
        'Recall driven by the cue column',
        'Atomic notes: one idea per note',
        'Links over folders: notes as a network',
        'Writing notes in your own words',
        'Emergent structure and future writing',
        'Review workflows that keep notes alive',
      ],
      words: 1332,
      readMins: 5,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'Two systems bookend the modern history of notes. In 1949, the educator Walter Pauk designed the Cornell system so lecture halls could produce review-ready pages; decades on, the sociologist Niklas Luhmann’s slip-box — the Zettelkasten — grew to about ninety thousand linked cards and powered some seventy books. One system optimizes capture and recall for courses; the other optimizes long-term thinking and writing. Between them they cover the two jobs notes must do: help you remember, and help you think.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Notes are the only study tool whose value compounds. A page that hides questions in its margins becomes a self-quizzing machine; a box of linked notes becomes a research partner that suggests your next argument. The system you choose quietly decides which of those you own.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The Cornell page is geometry, not technology. Divide each sheet into a narrow cue column on the left — about 30 percent of the width — a wide note area on the right, and a summary strip along the bottom. During the lecture, record only in the note area: fragments, abbreviations, diagrams, and questions, never a transcript. The layout reserves space for the steps that happen after class.',
        },
        {
          kind: 'para',
          text: 'Within twenty-four hours, complete the page. Write cue questions or keywords in the left column — questions the notes should answer — and a two- or three-sentence summary of the whole page in your own words. This short pass is where learning actually happens: it forces selection, reorganization, and re-expression while the material is still retrievable.',
        },
        {
          kind: 'para',
          text: 'The cue column then turns any page into a deck of flashcards. Cover the notes, read a cue, answer aloud, and check. That is retrieval practice arranged by paper geometry, and the summary strip is its comprehension test: if you cannot compress the page, you did not understand it well enough to compress.',
        },
        {
          kind: 'para',
          text: 'The Zettelkasten solves a different problem: what notes become after years. Its unit is the atomic note — exactly one idea, written in complete sentences, in your own words, under a title, with the source recorded. Reading produces fleeting notes; a day later, the ones that matter are rewritten as permanent notes and the rest are discarded.',
        },
        {
          kind: 'para',
          text: 'Permanent notes connect. Each new note links to one or more existing notes, with a sentence explaining why the connection matters, and nothing is buried in a folder where alternatives cannot find it. Links make the collection a network rather than a pile, and the network is generative: following a thread re-enacts your reasoning, and unexpected neighbors become the raw material of new arguments. Luhmann called his box a communication partner.',
        },
        {
          kind: 'para',
          text: 'The two systems are complements, not rivals. Cornell excels at high-volume course content on a deadline; the Zettelkasten excels at research and long-horizon projects. Both decay without review — cue questions should ride a spaced schedule, and permanent notes should be revisited, revised, and pruned, because a note you will never meet again is storage, not knowledge.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Cornell page ratio',
          latex: '\\frac{w_{cue}}{w_{notes}} \\approx \\frac{2.5}{6} \\approx \\frac{5}{12}',
          meaning:
            'On a standard sheet, the cue column takes about 30 percent of the writing width and the note area 70 percent: cues stay terse enough to prompt full recall, while the note area can still absorb a live lecture.',
        },
        {
          kind: 'formula',
          name: 'Link potential of n atomic notes',
          latex: 'L_{max} = \\frac{n\\,(n-1)}{2}',
          meaning:
            'The number of possible pairwise links grows quadratically with note count: at ninety thousand notes the theoretical maximum is about four billion connections — the combinatorial soil from which new ideas grow.',
        },
        { kind: 'heading', text: 'Worked Example' },
        {
          kind: 'example',
          title: 'One Cornell Page, Start to Finish',
          steps: [
            'During a fifty-minute lecture on enzymes, capture only what is new — definitions, the diagram, the three worked examples — as fragments and abbreviations, never a transcript.',
            'That evening, write six cue questions in the left column (for example "What does an enzyme lower?" for activation energy) and a three-sentence summary across the bottom.',
            'Cover the note area and answer each cue aloud; mark the two you miss and re-read only those sections.',
            'Re-answer all six cues on days 2, 5, and 12; each pass takes about three minutes because the cues, not the pages, are the unit.',
            'State the result: by exam week the page is a six-question quiz you have already passed three times, instead of four pages of handwriting you barely recognize.',
          ],
        },
        {
          kind: 'example',
          title: 'Growing a Networked Note',
          steps: [
            'While reading about city buses, capture a fleeting note: "late buses get later — a reinforcing loop."',
            'Rewrite it the next day as a permanent note in complete sentences, in your own words, titled and sourced.',
            'Link it to existing notes on reinforcing loops and on delays, adding one sentence to each link explaining the connection.',
            'Weeks later, a note on inventory swings links to the same loop — and the collision suggests the essay neither note could have written alone.',
            'State the result: writing starts from a walk through the network rather than a search through folders, and arguments assemble themselves.',
          ],
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Cue column', def: 'The narrow left column of a Cornell page, filled after the lecture with questions the notes answer.' },
            { term: 'Summary strip', def: 'The bottom band of a Cornell page holding a short restatement in the note-taker’s own words.' },
            { term: 'Atomic note', def: 'A permanent note holding exactly one idea, written in full sentences in your own words.' },
            { term: 'Fleeting note', def: 'A quick capture made while reading or thinking, processed or discarded within a day.' },
            { term: 'Link', def: 'An explicit connection between two notes, ideally annotated with a sentence explaining why it exists.' },
            { term: 'Slip-box', def: 'A numbered, linked collection of atomic notes — the Zettelkasten Luhmann grew into a research partner.' },
            { term: 'Collector’s fallacy', def: 'Mistaking the gathering of highlights and quotes for the processing that turns them into knowledge.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'When should the cue column be written?',
              options: ['During the lecture, as questions occur to you', 'Within about a day after the lecture, working from the notes', 'Only right before the exam', 'Never — cues are supplied by the instructor'],
              answer: 1,
              explain: 'Writing cues after class forces a first recall pass while keeping lecture attention on capturing; same-day is the ideal window.',
            },
            {
              q: 'Covering the note area and answering cue questions aloud is an application of:',
              options: ['Massed practice', 'Retrieval practice', 'Speed reading', 'Highlighting'],
              answer: 1,
              explain: 'Answering from the cue alone is active recall — the same mechanism that powers spaced repetition.',
            },
            {
              q: 'An atomic note is best described as:',
              options: ['A note short enough to fit one line', 'One idea in complete sentences, in your own words, with its source', 'A folder containing a single file', 'A quote copied exactly from a book'],
              answer: 1,
              explain: 'Atomicity limits scope so links stay meaningful and notes can combine freely.',
            },
            {
              q: 'Why do Zettelkasten systems prefer links over folder hierarchies?',
              options: ['Links are faster to type', 'A note can join many links, so structure stays flexible and connections drive recall', 'Folders cannot be searched', 'Links require no titles'],
              answer: 1,
              explain: 'Folders force one home per note; links allow many, and the network’s structure grows with your thinking.',
            },
            {
              q: 'The collector’s fallacy refers to:',
              options: ['Losing notes across too many apps', 'Mistaking collected highlights for processed knowledge', 'Filing notes by author rather than topic', 'Writing notes too briefly'],
              answer: 1,
              explain: 'Saving is not learning; only rewriting in your own words converts capture into knowledge.',
            },
          ],
        },
        { kind: 'heading', text: 'Common Pitfalls' },
        {
          kind: 'list',
          items: [
            'Transcribing lectures verbatim — processing, not speed, is the point.',
            'Writing cues during the lecture, which splits attention exactly when content is densest.',
            'Collecting highlights that are never rewritten; storage is not learning.',
            'Cramming several ideas into one note, which breaks atomicity and makes links meaningless.',
            'Never reviewing: notes without retrieval become a diary, not a knowledge base.',
            'Blaming the tool — switching apps is easier than maintaining the habit, and matters far less.',
          ],
        },
        { kind: 'heading', text: 'Study Path' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Read Active Reading with SQ3R first — heading questions convert naturally into cue questions.',
            'Run the full Cornell cycle — capture, cue, summarize, cover-test — on your next three lectures.',
            'Move recurring cue questions onto a spaced schedule, as in Spaced Repetition and the Forgetting Curve.',
            'For research and long projects, start atomic notes with explicit links; review and prune monthly.',
            'Then read Metacognition: Plan, Monitor, Evaluate to govern the whole workflow deliberately.',
          ],
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fnd-metacognition',
      title: 'Metacognition: Plan, Monitor, Evaluate',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Learning Science',
      tier: 'advanced',
      concepts: [
        'Thinking about your own thinking',
        'Metacognitive knowledge: person, task, strategy',
        'The regulation loop: plan, monitor, evaluate',
        'Calibration between confidence and accuracy',
        'Judgments of learning and the fluency illusion',
        'Self-questioning and think-alouds',
        'Why experts self-monitor differently',
      ],
      words: 1205,
      readMins: 5,
      addedOn: '2026-10-17',
      blocks: [
        {
          kind: 'para',
          text: 'In the late 1970s, the developmental psychologist John Flavell needed a name for a skill he watched children acquire: knowing what they knew, and noticing when they did not. He coined metacognition — thinking about your own thinking — and started a research program that now sits underneath most of what this domain calls study skills. Its practical core is a regulation loop: plan before you begin, monitor while you work, evaluate after you finish. Run the loop deliberately and every study hour gets smarter; skip it and effort quietly misses the target.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Metacognition is the master skill of learning: it chooses what to study, notices the moment understanding breaks, and repairs strategy before grades do. Strong self-monitors catch confusion in seconds; weak ones meet it weeks later, when it costs the most.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Flavell split the territory in two. Metacognitive knowledge is what you believe about yourself as a learner, about tasks, and about strategies — "I drift when reading late at night", "proofs need worked examples for me". Metacognitive regulation is the control you exert on top of that knowledge: planning, monitoring, evaluating. Beliefs steer the loop, so a false self-assessment — "I am simply bad at math" — quietly forecloses strategies before they are ever tried.',
        },
        {
          kind: 'para',
          text: 'Planning happens before the work: define the goal, choose a strategy, and budget time realistically. Sixty seconds of asking "what kind of problem is this, which tools fit, how long will it honestly take?" routinely saves an hour of misdirected effort, because most failed study sessions fail at this step rather than during it.',
        },
        {
          kind: 'para',
          text: 'Monitoring is awareness while the work runs. Readers monitor comprehension by pausing to restate a paragraph; problem-solvers monitor by sanity-checking intermediate results — "should momentum decrease here?" The skill is catching confusion at the moment it begins, the only moment it is cheap to fix. A minute later it has become a wrong method; a week later, a wrong grade.',
        },
        {
          kind: 'para',
          text: 'Evaluating closes the loop: after the task, ask whether the strategy worked, which error types recurred, and what changes next time. Evaluation feeds the next planning step, which is what makes the loop compound rather than repeat. A study log of one line per session is enough to start the flywheel.',
        },
        {
          kind: 'para',
          text: 'Calibration measures the match between confidence and accuracy. Re-reading creates fluency, fluency feels like knowing, and confidence inflates faster than ability — the illusion that sinks students who "knew it cold" the night before. Judgments of learning are honest only when based on retrieval: predict, then test closed-book, and the gap between the two numbers is your calibration.',
        },
        {
          kind: 'para',
          text: 'Metacognition is trainable, and it transfers. Think-alouds, self-questioning, and prediction practice measurably improve problem solving across subjects and follow learners into new domains. Experts differ from novices less in raw capacity than in monitoring quality: experts notice anomalies — a step that feels wrong, a result too large — earlier, because richer internal representations give them something to monitor against.',
        },
        { kind: 'heading', text: 'Key Formulas' },
        {
          kind: 'formula',
          name: 'Metacognitive error signal',
          latex: 'e_t = G_t - M_t',
          meaning:
            'The regulator compares the goal state G with the monitored state M at time t; a persistent nonzero error e is the trigger to switch strategy — the same negative-feedback logic as a thermostat, running on your own cognition.',
        },
        {
          kind: 'formula',
          name: 'Calibration bias',
          latex: 'C = \\bar{c} - \\bar{a}',
          meaning:
            'Mean confidence minus mean accuracy, each on a 0-to-1 scale: values above zero indicate overconfidence, below zero underconfidence. The sign tells you which way your self-assessment skews.',
        },
        { kind: 'heading', text: 'Worked Example' },
        {
          kind: 'example',
          title: 'Closing a Thirty-Point Confidence Gap',
          steps: [
            'Identify: a student predicts 90 percent on a problem set and scores 60 percent — measure the miscalibration, then repair it.',
            'Measure: mean confidence 0.90 against mean accuracy 0.60 gives C = +0.30 — strong overconfidence, anchored on recognition rather than production.',
            'Diagnose: the 90 came from re-watching worked solutions, which builds familiarity, not the ability to produce answers cold.',
            'Intervene: predict a score before every problem, solve it closed-book, and compare. During each solution, pause at every step and ask "can I justify this line without notes?"',
            'Track: over three weeks, predicted scores drift down to 0.70 while actual scores climb to 0.75; the gap narrows to almost nothing, and low predictions now point study time at genuine gaps.',
            'State the result: calibration practice converts vague confidence into a number, and the number directs effort precisely.',
          ],
        },
        {
          kind: 'example',
          title: 'A Three-Line Loop for Any Assignment',
          steps: [
            'Plan (one line, before): "Ten integration problems; substitution first, integration by parts for products; 50 minutes."',
            'Monitor (a tick every ten minutes): "Problem four; on pace; stuck twice on trig products."',
            'Evaluate (one line, after): "Substitution failed on trig products — review integration by parts tomorrow."',
            'Tomorrow’s plan reads that line first, so the loop inherits yesterday’s lesson instead of repeating it.',
          ],
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Metacognition', def: 'Awareness and control of your own thinking and learning.' },
            { term: 'Metacognitive knowledge', def: 'Beliefs about yourself, tasks, and strategies that steer planning.' },
            { term: 'Regulation loop', def: 'The plan–monitor–evaluate cycle that governs a learning session.' },
            { term: 'Calibration', def: 'The statistical match between confidence and actual accuracy.' },
            { term: 'Judgment of learning', def: 'A prediction of future performance on material just studied; reliable only when based on retrieval.' },
            { term: 'Fluency illusion', def: 'Mistaking ease of processing, built by re-reading, for durable knowledge.' },
            { term: 'Self-explanation', def: 'Explaining a step or sentence to yourself as you study, exposing gaps in real time.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Flavell’s term for beliefs about yourself, tasks, and strategies — the knowledge that steers planning — is:',
              options: ['Metacognitive knowledge', 'Working memory', 'Episodic memory', 'Cognitive load'],
              answer: 0,
              explain: 'Metacognitive knowledge is the belief layer; regulation is the action layer built on top of it.',
            },
            {
              q: '"Is this strategy actually working right now?" belongs to which phase of the regulation loop?',
              options: ['Planning', 'Monitoring', 'Evaluating', 'Rehearsing'],
              answer: 1,
              explain: 'Monitoring is the during-the-task check that catches trouble while it is still cheap to fix.',
            },
            {
              q: 'A student is 85 percent confident and scores 55 percent. The calibration bias C is:',
              options: ['+0.30, overconfident', '−0.30, underconfident', '+1.40, overconfident', '0.64, well calibrated'],
              answer: 0,
              explain: 'C = 0.85 − 0.55 = +0.30; the positive sign means confidence outruns accuracy.',
            },
            {
              q: 'Re-reading inflates confidence faster than accuracy because:',
              options: ['Memory decays during re-reading', 'Familiarity and fluency are mistaken for knowing', 'Re-reading adds no new facts', 'Confidence is unrelated to accuracy'],
              answer: 1,
              explain: 'Exposure builds processing ease, and processing ease feels like mastery until a closed-book test disagrees.',
            },
            {
              q: 'Which habit most improves calibration?',
              options: ['Highlighting while reading', 'Predicting performance before each attempt, then testing closed-book', 'Studying in longer sessions', 'Re-reading immediately after a test'],
              answer: 1,
              explain: 'Predictions scored against reality are the feedback loop that trains accurate self-assessment.',
            },
          ],
        },
        { kind: 'heading', text: 'Common Pitfalls' },
        {
          kind: 'list',
          items: [
            'Mistaking fluency for mastery — familiarity grows with exposure while ability lags behind.',
            'Skipping the planning minute, then discovering at midnight that the task was misread.',
            'Monitoring without acting: noticing confusion and pressing on anyway is surveillance, not regulation.',
            'Evaluating only the grade and never the process that produced it.',
            'Building confidence on easy practice sets that guarantee success.',
            'Treating metacognition as a fixed trait rather than a trainable loop.',
          ],
        },
        { kind: 'heading', text: 'Study Path' },
        {
          kind: 'list',
          ordered: true,
          items: [
            'Read Spaced Repetition and Active Reading with SQ3R first — both are metacognition applied to memory and to text.',
            'Add one prediction line — expected score — above every practice set you attempt.',
            'Close each session with a one-line evaluation: what worked, what to change.',
            'Use Deliberate Practice to turn those evaluations into redesigned drills.',
            'Reread your log weekly; recurring failure modes are the real curriculum.',
          ],
        },
      ],
    },
  ],
}

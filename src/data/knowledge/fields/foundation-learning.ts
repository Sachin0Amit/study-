/**
 * Knowledge Universe — domain file: Foundation Learning
 *
 * Study skills, reading strategies, and practical numeracy. Written as
 * complete lessons; future expansion passes append new topics below.
 */

import type { KnowledgeDomainFile } from '../types'
import { x21SkillsPassTopics } from './x21-skills-pass'
import { x25TournamentReasoningCivicsPassTopics } from './x25-tournament-reasoning-civics-pass'
import { x36LearningSciencePassTopics } from './x36-learning-science-pass'
import { x52CrossverifyPassTopics } from './x52-crossverify-pass'
import { x53CrossverifyPassTopics } from './x53-crossverify-pass'
import { x75SubjectDepthPassTopics } from './x75-subjectdepth-pass'

export const foundationLearning: KnowledgeDomainFile = {
  domain: 'Foundation Learning',
  blurb:
    'Study skills, reading strategy, and practical numeracy — the bedrock abilities that make every other domain easier to learn.',
  topics: [
    // X21 skills pass (2026-10-22): experimental design & hypothesis ladder,
    // situational judgement, nonverbal reasoning (inquiry/judgement gaps).
    ...x21SkillsPassTopics.filter((t) => t.domain === 'Foundation Learning'),
    // X25 pass (2026-10-23): coded inequalities — order-reasoning under
    // symbol substitution; no reasoning lesson owns the coded format.
    ...x25TournamentReasoningCivicsPassTopics.filter((t) => t.domain === 'Foundation Learning'),
    // X36 pass (2026-10-25): learning-science expansion — mnemonic encoding,
    // habit automation, metacognitive calibration, peer teaching, and
    // primary-literature reading. Layers the existing scheduling/practice
    // lessons did not own.
    ...x36LearningSciencePassTopics,
    // X52 crossverify pass (2026-10-26): Study Skills & Learning Science
    // cross-verified against Cottrell, The Study Skills Handbook (5th ed,
    // 2019) publisher preview — self-efficacy/mindset, student time
    // management and stress/well-being chapters added; carved against
    // every-time-management-productivity, psy-stress-coping, the habits
    // and metacognition lessons (carving documented in the x52 header).
    ...x52CrossverifyPassTopics,
    // X53 crossverify pass (2026-10-26): second popular book for the same
    // subject — Barbara Oakley, A Mind for Numbers (full text, archive.org):
    // focused/diffuse modes + procrastination zombie anatomy lessons added;
    // overlearning refinement in the interleaving lesson and hard-start-
    // jump-to-easy refinement in the exam-strategy lesson (carving in the
    // x53 header — zombies lesson carved against habits/time-management).
    ...x53CrossverifyPassTopics,
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
        'The savings method',
        'The spacing effect',
        'Retrieval practice and the testing effect',
        'Expanding review intervals',
        'Active recall versus passive re-reading',
        'Interference and sleep in consolidation',
        'Consolidation across nights',
      ],
      words: 1582,
      readMins: 8,
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
          text: 'His instrument was the savings method: after a delay he relearned each list and compared the time needed with the original effort. A list that took twenty minutes to learn and five minutes to relearn a week later showed 75 percent savings — a precise, continuous measure of a memory that pure recall would score as simply gone. Later work, including a 2006 meta-analysis by Cepeda and colleagues pooling more than two hundred experiments, confirmed the curve’s signature across ages, materials and delays: steep loss within the first day, then a long shallow tail.',
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
        {
          kind: 'para',
          text: 'Consolidation is not instant: during slow-wave sleep the hippocampus replays the day’s activity to the cortex, and each replay acts like a spaced review at neural scale. Reviews separated by nights therefore ride the consolidation machinery, while massed same-day study leaves it no time to act — one mechanistic reason the spacing effect appears across every kind of material.',
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
          kind: 'figure',
          caption:
            'The forgetting curve with and without spaced reviews. Retention $R = e^{-t/S}$ decays steeply in the first days (Ebbinghaus, 1885, measured by the savings method). Each review fired at the threshold $R^* \\approx 60\\%$ restores retention and raises stability $S$, so the safe gaps grow — 3, 7, then 16 days — exactly the expanding schedule of the worked example (days 2, 5, 12, 28).',
          sketchImage: '/diagrams/forgetting-curve-sketch.jpg',
          sketchCaption:
            'Student Laboratory Notebook: the Ebbinghaus forgetting curve sinking toward ~20% within a week with no review; four spaced reviews at days 2, 5, 12 and 28 each restore retention to ~95% while stability S doubles, stretching the gaps 3 → 7 → 16 days; review threshold R* drawn at 60%.',
          afterConcept: 5,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Forgetting curve with and without spaced reviews, retention versus time since learning">
  <!-- hand-drawn axes (double-stroked, gently wobbly) -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
    <path d="M84 52 Q82 220 86 392"/>
    <path d="M80 388 Q300 392 540 387 Q700 391 836 386"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.5" stroke-linecap="round">
    <path d="M89 55 Q87 220 91 390"/>
    <path d="M77 393 Q300 397 540 392 Q700 396 833 391"/>
  </g>
  <!-- axis titles + ticks -->
  <g font-family="Georgia, 'Times New Roman', serif" fill="currentColor">
    <text x="30" y="224" font-size="15" font-style="italic" text-anchor="middle" transform="rotate(-90 30 224)">Retention R (%)</text>
    <text x="836" y="448" font-size="15" font-style="italic" text-anchor="end">Time since learning (days)</text>
    <g font-size="11.5" fill="#8a8a93" text-anchor="end">
      <text x="76" y="64">100</text><text x="76" y="146">75</text><text x="76" y="228">50</text><text x="76" y="310">25</text><text x="76" y="392">0</text>
    </g>
    <g font-size="11.5" fill="#8a8a93" text-anchor="middle">
      <text x="84" y="380">0</text><text x="209" y="380">7</text><text x="335" y="380">14</text><text x="460" y="380">21</text><text x="585" y="380">28</text><text x="710" y="380">35</text><text x="836" y="380">42</text>
    </g>
  </g>
  <!-- review threshold -->
  <line x1="84" y1="191" x2="836" y2="191" stroke="#d97706" stroke-width="2" stroke-dasharray="7 6" opacity="0.85"/>
  <text x="330" y="182" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#d97706">review threshold R* ≈ 60%</text>
  <!-- forgetting curve: no review (rose) -->
  <path d="M84 60 C 92 95 97 118 102 135 C 109 158 113 176 120 191 C 130 213 142 230 156 244 C 172 259 190 277 209 293 C 238 316 268 323 299 329 C 350 340 396 345 442 349 C 492 353 540 356 585 359 C 672 363 760 365 836 368" fill="none" stroke="#e11d48" stroke-width="3" stroke-linecap="round" opacity="0.95"/>
  <text x="628" y="343" font-family="Georgia, 'Times New Roman', serif" font-size="13.5" font-style="italic" fill="#e11d48">forgetting curve (no review)</text>
  <!-- spaced-repetition staircase (emerald) -->
  <g fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round" opacity="0.97">
    <path d="M86 60 C 94 95 99 118 104 135 C 111 158 115 176 122 191"/>
    <path d="M122 191 L120 78" stroke-width="2.2"/>
    <path d="M120 76 C 130 96 136 108 138 119 C 146 137 150 148 156 158 C 162 173 168 183 174 191"/>
    <path d="M174 191 L174 78" stroke-width="2.2"/>
    <path d="M174 76 C 190 94 200 108 209 119 C 226 134 236 144 245 152 C 264 167 282 181 299 191"/>
    <path d="M299 191 L299 78" stroke-width="2.2"/>
    <path d="M299 76 C 330 95 360 108 388 119 C 422 133 450 144 478 152 C 513 164 552 181 585 191"/>
    <path d="M585 191 L585 78" stroke-width="2.2"/>
    <path d="M585 76 C 630 86 672 93 710 99 C 755 106 800 113 836 119"/>
  </g>
  <!-- review markers -->
  <g fill="#059669">
    <circle cx="120" cy="76" r="5.5"/><circle cx="174" cy="76" r="5.5"/><circle cx="299" cy="76" r="5.5"/><circle cx="585" cy="76" r="5.5"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="currentColor" text-anchor="middle">
    <text x="120" y="46">Review 1 · day 2</text>
    <text x="174" y="62">Review 2 · day 5</text>
    <text x="299" y="46">Review 3 · day 12</text>
    <text x="585" y="62">Review 4 · day 28</text>
  </g>
  <!-- in-plot annotations -->
  <text x="420" y="72" font-family="Georgia, 'Times New Roman', serif" font-size="15" font-style="italic" fill="currentColor">R = e<tspan dy="-6" font-size="10.5">−t/S</tspan></text>
  <path d="M640 138 L658 104" stroke="#059669" stroke-width="1.3" stroke-dasharray="3 4" fill="none"/>
  <text x="624" y="152" font-family="Georgia, 'Times New Roman', serif" font-size="13.5" font-style="italic" fill="#059669">with spaced reviews (R restored)</text>
  <!-- expanding-interval brackets under the axis -->
  <g fill="none" stroke="#8a8a93" stroke-width="1.6" stroke-linecap="round">
    <path d="M120 398 L120 404 L174 404 L174 398"/>
    <path d="M174 398 L174 404 L299 404 L299 398"/>
    <path d="M299 398 L299 404 L585 404 L585 398"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93" text-anchor="middle">
    <text x="147" y="421">3 days</text><text x="236" y="421">7 days</text><text x="442" y="421">16 days</text>
  </g>
  <text x="442" y="441" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#d97706" text-anchor="middle">expanding intervals</text>
</svg>`,
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
        {
          kind: 'derivation',
          title: 'Why intervals expand: the stability-doubling derivation',
          statement:
            'Derivation of the expanding-interval law from the retention decay model $R = e^{-t/S}$ — if each successful review multiplies the stability constant $S$ by a factor $\\alpha > 1$, the review intervals must grow geometrically.',
          prerequisites: ['The retention decay model', 'Natural logarithms'],
          steps: [
            {
              label: 'Step 1: Fix the review threshold',
              formula: '$$R^* = e^{-t/S}$$',
              explanation:
                'Choose the retention level at which each review should fire — for example R* = 0.6, the dashed line in the figure. Every review lands exactly when the curve sinks to this threshold.',
            },
            {
              label: 'Step 2: Solve for the safe interval',
              formula: '$$t = S\\,\\ln\\left(1/R^*\\right)$$',
              explanation:
                'Taking natural logarithms of the threshold condition: the time you can safely wait is proportional to the stability S — stabler memories buy longer gaps.',
            },
            {
              label: 'Step 3: Let each successful review scale stability',
              formula: '$$S_n = \\alpha S_{n-1},\\quad \\alpha \\approx 2$$',
              explanation:
                'A successful retrieval is not a neutral readout: it raises the memory’s stability by a factor α (empirically near 2 for well-formed material).',
            },
            {
              label: 'Step 4: The intervals inherit the factor',
              formula: '$$t_n = \\alpha\\, t_{n-1}$$',
              explanation:
                'Substituting the scaled stability into Step 2 multiplies every interval by the same α: gaps of 3, 7 and 16 days grow almost geometrically, exactly as in the worked example.',
            },
            {
              label: 'Step 5: Count the reviews to a horizon',
              formula: '$$n = \\left\\lceil \\frac{\\ln(T/t_1)}{\\ln \\alpha} \\right\\rceil$$',
              explanation:
                'Keeping recall above the threshold for a horizon of T days costs only logarithmically many reviews — with t₁ = 2 days and α = 2, a full year needs about eight retrievals per fact.',
            },
          ],
          result:
            'Expanding intervals are a mathematical consequence, not a stylistic choice: holding retention at a fixed threshold while each review multiplies stability by α forces the gaps to multiply by α too. That is why serious schedules read “one day, then three, then a week, then a month” — and why a year of recall costs fewer than ten retrievals per fact.',
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
            {
              q: 'Using the interval law t = S·ln(1/R*): if the review threshold is fixed and a successful review doubles stability S, the next safe interval…',
              options: ['stays the same', 'doubles', 'halves', 'depends only on the material'],
              answer: 1,
              explain: 'The interval is proportional to stability, so doubling S doubles the safe gap — the geometric growth behind expanding schedules.',
            },
            {
              q: 'Ebbinghaus traced the forgetting curve chiefly by which method?',
              options: ['Brain imaging during recall', 'Savings — comparing relearning time with original learning time', 'Multiple-choice quizzes', 'Interviewing learners about confidence'],
              answer: 1,
              explain: 'The savings method measures how much faster a list is relearned — a continuous gauge of a memory that pure recall would score as gone.',
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
        'The evidence: a century of retrievals',
        'The century before the labs: recitation and savings',
        'Why rereading feels good and does little',
        'Desirable difficulties',
        'Formats: free recall, flashcards, questions, teaching',
        'Feedback closes the loop',
        'Effort is the active ingredient',
        'The strategy gap: what students actually do',
        'Retrieval goes to school',
        'Pretesting: guessing before knowing',
        'Past papers as retrieval practice',
        'Designing a recall-first session',
      ],
      words: 2998,
      readMins: 15,
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
          text: 'The canonical numbers come from an experiment now taught in every learning-science course. Roediger and Karpicke (2006) had students study prose passages and either restudy them four times (SSSS) or study once and take three free-recall tests (STTT) — the same four exposures, only their direction different. On a test five minutes later, restudying actually won: 83% versus 71%. But the payoff lived in the delay: one week later the ranking had flipped hard, 61% for the test-takers against 40% for the re-readers — repeated reading took the best score early and the worst score late. The finding is not a one-off. Karpicke and Blunt reported in Science (2011) that retrieval practice beat even concept mapping on a week-later short-answer test (0.67 versus 0.45 correct — a 50% improvement — with 84% of students doing better after retrieval), and the advantage held on inference questions requiring ideas to be connected, not just repeated. Karpicke and Roediger (2008) added the warning label with Swahili vocabulary: dropping items from retrieval after their first correct recall — a natural, time-saving habit — cut week-later recall roughly in half, because the dropping removes exactly the retrieval that consolidates. Modern syntheses bracket the whole literature: Rowland (2014) found g \u2248 0.50 across 61 studies, Adesope and colleagues (2017) g \u2248 0.61 across 272 effect sizes, and Yang and colleagues (2021) confirmed g \u2248 0.50 in real classrooms with 48,478 students — with the advantage growing as the delay grows. A finding documented since the early 1900s and this broad is about as close to a law as learning science gets.',
        },
        {
          kind: 'figure',
          caption:
            'The crossover that made the testing effect famous (Roediger & Karpicke, 2006, Experiment 2). After five minutes, repeated study (SSSS) leads repeated testing (STTT), 83% to 71% — the fluency illusion wearing a lab coat. One week later the ranking flips: 61% versus 40%, for the same four exposures spent in opposite directions. The advantage of retrieval grows exactly where it matters — at the delay.',
          sketchImage: '/diagrams/testing-effect-crossover-sketch.jpg',
          sketchCaption:
            'Student Laboratory Notebook: hand-drawn bar chart of the testing-effect crossover — study SSSS versus test STTT bars at \u201c5 min\u201d (83 vs 71) and \u201c1 week\u201d (40 vs 61), a wobbly arrow marking the flip, margin note: \u201cretrieval wins at the delay.\u201d',
          afterConcept: 2,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Bar chart: repeated study versus repeated testing at five minutes and one week — study leads at five minutes (83 vs 71), testing leads at one week (61 vs 40)">
  <!-- hand-drawn axes (double-stroked, gently wobbly) -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
    <path d="M92 54 Q90 230 94 396"/>
    <path d="M88 392 Q340 396 620 391 Q740 394 838 390"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.5" stroke-linecap="round">
    <path d="M97 57 Q95 230 99 394"/>
    <path d="M84 397 Q340 401 620 396 Q740 399 835 395"/>
  </g>
  <!-- axis titles + ticks -->
  <g font-family="Georgia, 'Times New Roman', serif" fill="currentColor">
    <text x="34" y="228" font-size="15" font-style="italic" text-anchor="middle" transform="rotate(-90 34 228)">Recall of the passage (%)</text>
    <text x="838" y="446" font-size="15" font-style="italic" text-anchor="end">Time since study</text>
    <g font-size="11.5" fill="#8a8a93" text-anchor="end">
      <text x="84" y="68">100</text><text x="84" y="148">75</text><text x="84" y="228">50</text><text x="84" y="308">25</text><text x="84" y="392">0</text>
    </g>
  </g>
  <!-- gridline at 100/75/50/25 -->
  <g stroke="#8a8a93" stroke-width="0.8" opacity="0.3" stroke-dasharray="4 5">
    <line x1="92" y1="64" x2="830" y2="64"/>
    <line x1="92" y1="144" x2="830" y2="144"/>
    <line x1="92" y1="224" x2="830" y2="224"/>
    <line x1="92" y1="304" x2="830" y2="304"/>
  </g>
  <!-- cluster 1: 5 minutes (baseline y=392, scale 3.2 px/%) -->
  <!-- SSSS 83% -> h=266, y=126; STTT 71% -> h=227, y=165 -->
  <path d="M172 128 Q170 260 174 392 L242 392 Q244 260 242 128 Q208 124 172 128" fill="#e11d48" opacity="0.16"/>
  <path d="M176 130 Q174 260 178 392 M238 392 Q240 260 238 130" fill="none" stroke="#e11d48" stroke-width="3" stroke-linecap="round"/>
  <path d="M330 167 Q328 280 332 392 L400 392 Q402 280 400 167 Q366 163 330 167" fill="#059669" opacity="0.16"/>
  <path d="M334 169 Q332 280 336 392 M396 392 Q398 280 396 169" fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="14" text-anchor="middle">
    <text x="208" y="118" fill="#e11d48">83%</text>
    <text x="366" y="157" fill="#059669">71%</text>
  </g>
  <text x="288" y="424" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="14.5" font-style="italic" fill="currentColor">5 minutes later</text>
  <!-- cluster 2: 1 week -->
  <!-- SSSS 40% -> h=128, y=264; STTT 61% -> h=195, y=197 -->
  <path d="M536 266 Q534 330 538 392 L606 392 Q608 330 606 266 Q572 262 536 266" fill="#e11d48" opacity="0.16"/>
  <path d="M540 268 Q538 330 542 392 M602 392 Q604 330 602 268" fill="none" stroke="#e11d48" stroke-width="3" stroke-linecap="round"/>
  <path d="M694 199 Q692 296 696 392 L764 392 Q766 296 764 199 Q730 195 694 199" fill="#059669" opacity="0.16"/>
  <path d="M698 201 Q696 296 700 392 M760 392 Q762 296 760 201" fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="14" text-anchor="middle">
    <text x="572" y="256" fill="#e11d48">40%</text>
    <text x="730" y="189" fill="#059669">61%</text>
  </g>
  <text x="652" y="424" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="14.5" font-style="italic" fill="currentColor">1 week later</text>
  <!-- legend -->
  <g font-family="Georgia, 'Times New Roman', serif" font-size="13">
    <rect x="118" y="20" width="16" height="10" fill="#e11d48" opacity="0.35"/>
    <text x="140" y="29" fill="currentColor">repeated study (SSSS)</text>
    <rect x="330" y="20" width="16" height="10" fill="#059669" opacity="0.35"/>
    <text x="352" y="29" fill="currentColor">repeated testing (STTT)</text>
  </g>
  <!-- crossover annotation -->
  <path d="M300 96 Q420 66 560 118" fill="none" stroke="#d97706" stroke-width="2.2" stroke-dasharray="7 6" stroke-linecap="round"/>
  <path d="M560 118 l-11 -2 M560 118 l-4 -10" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round"/>
  <text x="430" y="58" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#d97706">the crossover: study wins now, testing wins later</text>
  <!-- condition note -->
  <text x="452" y="452" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93">same four exposures — SSSS reads four times, STTT reads once and recalls three times</text>
</svg>`,
        },
        {
          kind: 'para',
          text: 'The testing effect was old news before anyone named it. Ebbinghaus, who mapped forgetting from syllables in 1885, built his measurements on relearning — the savings method asks how much faster material relearns, and his savings were the shadow of retrieval at work. Katzaroff (1908) and Abbott (1909) hinted first; then Arthur Gates ran the first large classroom experiment in 1917: schoolchildren studied biographies and syllable lists while reading time ranged from all-reading down to twenty percent, and recall peaked when recitation took roughly sixty to eighty percent — about a third better on prose, two to four times better on the lists. Gates\u2019s advice was then neglected for decades. One honest caution: recitation alone has not consistently helped adult learners, hence the modern form adds feedback.',
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
          text: 'Why should the harder route leave a stronger trace? Pyc and Rawson\u2019s 2009 work on retrieval effort suggests the effort is informative: a difficult-but-successful retrieval forces deeper, more elaborate processing of the answer, and that extra processing is what supports recall later. Errors have a role too — when a retrieval fails and feedback then supplies the answer, the correction lands on a hole you have just personally mapped, which makes it memorable. This is why the recall-first cycle refuses to grade itself gently: a session in which every pull succeeds is a session that taught you nothing new. The practical translation is uncomfortable but simple — if practice never feels effortful, it is probably not retrieval; it is review wearing retrieval\u2019s clothes.',
        },
        {
          kind: 'para',
          text: 'If retrieval works this well, why does anyone reread? Because most students never hear the news. When Karpicke, Butler and Roediger (2009) asked 177 college students how they actually study, 84 percent named rereading their number-one strategy and only 11 percent mentioned practicing retrieval. Dunlosky and colleagues (2013), grading ten common techniques on years of classroom data, left exactly two rated high utility: practice testing and distributed practice. Interleaving, self-explanation and elaborative interrogation sat in the moderate tier; rereading, summarization and highlighting — the strategies that fill most study hours — rated low. The gap is the fluency illusion at work: smooth today, billed at exam week.',
        },
        {
          kind: 'figure',
          caption:
            'The strategy gap (Karpicke, Butler & Roediger, 2009; Dunlosky et al., 2013). Left: of 177 students, 84% named rereading their #1 strategy; 11% named practice testing. Right: the evidence grades them oppositely — only practice testing and distributed practice rate high utility; rereading, summarization and highlighting rate low.',
          sketchImage: '/diagrams/strategy-gap-utility-sketch.jpg',
          sketchCaption:
            'Student Laboratory Notebook: hand-drawn two-panel comparison — survey bars 84% versus 11% labeled \u201crereading\u201d and \u201cpractice testing\u201d, and a utility tier table with HIGH holding \u201cpractice testing\u201d and \u201cdistributed practice\u201d, MODERATE holding \u201cinterleaving\u201d, LOW holding \u201crereading\u201d, \u201csummarization\u201d and \u201chighlighting\u201d — margin note: \u201cthe smooth methods lose.\u201d',
          afterConcept: 9,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Left: survey bars showing 84 percent of students name rereading their top strategy versus 11 percent practice testing. Right: utility tiers from Dunlosky 2013 — practice testing and distributed practice high, interleaving moderate, rereading summarization and highlighting low.">
  <!-- panel divider -->
  <g fill="none" stroke="#8a8a93" stroke-width="1.2" stroke-linecap="round" opacity="0.55">
    <path d="M438 46 Q434 235 440 424"/>
    <path d="M444 48 Q440 235 446 422"/>
  </g>
  <!-- LEFT: the survey -->
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="64" y="52" font-size="15.5" fill="currentColor" font-style="italic">how 177 students study</text>
    <text x="64" y="72" font-size="12" fill="#8a8a93">(Karpicke, Butler &amp; Roediger, 2009)</text>
  </g>
  <!-- rereading bar: 84% -> w=252 (3 px per %) -->
  <path d="M96 108 Q95 128 98 148 L348 148 Q350 128 348 106 Q220 103 96 108" fill="#e11d48" opacity="0.16"/>
  <path d="M98 110 Q96 128 99 146 M348 146 Q350 128 348 108" fill="none" stroke="#e11d48" stroke-width="3" stroke-linecap="round"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="112" y="134" font-size="15" fill="currentColor">rereading</text>
    <text x="392" y="134" font-size="17" fill="#e11d48" text-anchor="middle">84%</text>
  </g>
  <!-- practice testing bar: 11% -> w=33 -->
  <path d="M96 190 Q95 210 98 230 L129 230 Q131 210 129 188 Q112 186 96 190" fill="#059669" opacity="0.16"/>
  <path d="M98 192 Q96 210 99 228 M129 228 Q131 210 129 190" fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="112" y="216" font-size="15" fill="currentColor">practice testing</text>
    <text x="172" y="254" font-size="17" fill="#059669">11%</text>
  </g>
  <text x="64" y="306" font-size="12.5" fill="#8a8a93" font-family="Georgia, 'Times New Roman', serif" font-style="italic">the #1 named strategy, by share of students</text>
  <!-- RIGHT: the utility grades -->
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="486" y="52" font-size="15.5" fill="currentColor" font-style="italic">the evidence\u2019s verdict</text>
    <text x="486" y="72" font-size="12" fill="#8a8a93">(Dunlosky et al., 2013 — ten techniques graded)</text>
  </g>
  <!-- HIGH shelf -->
  <path d="M486 106 Q484 124 488 142 L822 142 Q824 124 822 104 Q654 101 486 106" fill="#059669" opacity="0.12"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="500" y="131" font-size="13.5" fill="#059669" font-weight="bold">HIGH</text>
    <text x="560" y="131" font-size="14" fill="currentColor">practice testing \u00b7 distributed practice</text>
  </g>
  <!-- MODERATE shelf -->
  <path d="M486 180 Q484 198 488 216 L822 216 Q824 198 822 178 Q654 175 486 180" fill="#d97706" opacity="0.12"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="500" y="205" font-size="13.5" fill="#d97706" font-weight="bold">MODERATE</text>
    <text x="598" y="205" font-size="14" fill="currentColor">interleaving \u00b7 self-explanation \u00b7 elaborative interrogation</text>
  </g>
  <!-- LOW shelf -->
  <path d="M486 254 Q484 272 488 290 L822 290 Q824 272 822 252 Q654 249 486 254" fill="#e11d48" opacity="0.12"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="500" y="279" font-size="13.5" fill="#e11d48" font-weight="bold">LOW</text>
    <text x="560" y="279" font-size="14" fill="currentColor">rereading \u00b7 summarization \u00b7 highlighting</text>
  </g>
  <!-- the honest arrow -->
  <path d="M520 330 Q620 300 716 322" fill="none" stroke="#d97706" stroke-width="2.2" stroke-dasharray="7 6" stroke-linecap="round"/>
  <path d="M716 322 l-11 -3 M716 322 l-3 -10" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round"/>
  <text x="618" y="354" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#d97706">move the hours up the shelves</text>
  <!-- shared footnote -->
  <text x="452" y="438" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93">what students choose (left) versus what survives the exam week (right)</text>
</svg>`,
        },
        {
          kind: 'para',
          text: 'None of this stayed in the laboratory. Roediger, Agarwal, McDaniel and McDermott (2011) ran three experiments inside 6th-grade social studies classrooms: material quizzed on brief in-class quizzes was answered better on the real chapter exams and end-of-semester exams, and in the one experiment with a restudy comparison, quizzing beat restudying on the chapter exam (.91 versus lower). McDaniel and colleagues (2011) replicated the pattern in 8th-grade science, and McDermott and colleagues (2013) found in 7th-grade science that quizzed questions beat non-quizzed ones by 18 percentage points on later exams whether the quizzes were multiple-choice or short-answer — the format mattered far less than the retrieval. The objection that testing must mean more stress failed its own test: across Agarwal and colleagues\u2019 2014 classroom programs, students who practiced retrieval reported less test anxiety, not more.',
        },
        {
          kind: 'para',
          text: 'A strange but robust finding: attempting questions on material you have never studied improves later learning of it, even when the guesses are wrong. Wrong guesses create curiosity and prime the correct answers, so the subsequent reading lands on prepared ground. A pretest costs minutes — skim the headings and guess the content — and buys attention for the whole chapter.',
        },
        {
          kind: 'para',
          text: 'The highest-value retrieval format is usually already in the drawer: old exams and problem sets. A past paper is a professionally balanced battery of retrieval prompts, calibrated for the exact mix of recall, method selection and transfer the real assessment will demand — no homemade flashcard deck matches that balance. The discipline is the ritual above, pointed at the real target: sit the paper closed-book on the clock, mark it honestly against the solutions, and let the error list write next week\u2019s study plan. Students who skip the attempt and read the solutions directly are running the fluency illusion on expert output — solutions read smoothly precisely because someone else did the retrieving.',
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
        {
          kind: 'derivation',
          title: 'What one hour of retrieval buys: the retention exchange rate',
          statement:
            'Three published numbers from the Roediger–Karpicke design turn the testing effect into an exchange rate: how much week-later memory does a unit of study time buy when it is spent on retrieval instead of restudy?',
          prerequisites: ['Fractions and percentages', 'The equal-exposures design (SSSS vs STTT)'],
          steps: [
            {
              label: 'Step 1: Count exposures, not minutes',
              formula: '$$\\text{SSSS} = 4\\ \\text{passes}, \\qquad \\text{STTT} = 1 + 3 = 4\\ \\text{passes}$$',
              explanation:
                'Both conditions processed the passage four times; the only difference is direction — passes two through four were inputs (study) for one group and outputs (retrievals) for the other. Any retention gap is therefore bought with zero extra time.',
            },
            {
              label: 'Step 2: Read the five-minute score',
              formula: '$$R_{5\\min}^{\\text{study}} = 83\\% \\;>\\; R_{5\\min}^{\\text{test}} = 71\\%$$',
              explanation:
                'Immediately after study, restudying leads by 12 points. This is the fluency illusion wearing a lab coat — and it is precisely the feeling students use to choose their methods.',
            },
            {
              label: 'Step 3: Read the one-week score',
              formula: '$$R_{1\\,\\text{wk}}^{\\text{test}} = 61\\% \\;>\\; R_{1\\,\\text{wk}}^{\\text{study}} = 40\\%$$',
              explanation:
                'At the delay that matters, the ranking has flipped and testing leads by 21 points — the crossover the figure shows.',
            },
            {
              label: 'Step 4: Convert to an exchange rate',
              formula: '$$g = \\frac{61 - 40}{40} = 0.525$$',
              explanation:
                'The test group\u2019s week-later memory is 52.5% larger than the restudy group\u2019s — for identical time on task. The crossover is what makes the late advantage free.',
            },
            {
              label: 'Step 5: Generalize beyond one experiment',
              formula: '$$g_{\\text{Rowland}} \\approx 0.50, \\qquad g_{\\text{Adesope}} \\approx 0.51\\ (\\text{vs restudy})$$',
              explanation:
                'Independent meta-analyses land near half a standard deviation over restudy (Rowland 2014; Adesope et al. 2017), with the margin growing as the delay grows — the exchange rate is a property of the method, not of one passage.',
            },
          ],
          result:
            'One passage-pass exchanged from input to output buys about 52% more week-later recall in the canonical experiment and roughly half a standard deviation across the literature — a return that grows with delay. The most expensive minute in studying is the one spent re-reading a page you could have retrieved.',
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
            { term: 'Retrieval effort', def: 'Pyc and Rawson\u2019s principle that difficult-but-successful retrievals produce the deepest learning.' },
            { term: 'Crossover', def: 'The flip by which restudy wins at five minutes but retrieval wins at the delayed test.' },
            { term: 'Recitation', def: 'Gates\u2019s term for studying aloud from memory — retrieval practice\u2019s classroom ancestor.' },
            { term: 'Savings method', def: 'Ebbinghaus\u2019s memory measure: how much faster material is relearned than first learned.' },
            { term: 'Practice testing', def: 'Dunlosky\u2019s high-utility label for the retrieval family used as study, not as grading.' },
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
            {
              q: 'In Roediger and Karpicke\u2019s one-week test, repeated testing (STTT) versus repeated studying (SSSS) scored roughly:',
              options: ['61% vs 40% — testing led by 21 points', '40% vs 61% — study led', '83% vs 71% — the five-minute result', 'Exactly equal at the delay'],
              answer: 0,
              explain: 'One week later: 61% versus 40%. The 83-vs-71 figure was only the five-minute score, where restudy still led — the crossover is the whole point.',
            },
            {
              q: 'Karpicke and Blunt (2011) showed that retrieval practice outperformed:',
              options: ['Only verbatim fact recall', 'Concept mapping on a week-later test, including inference questions (0.67 vs 0.45 correct)', 'Nothing — concept mapping won', 'Only methods with unlimited study time'],
              answer: 1,
              explain: 'Retrieval beat even an elaborative technique built for understanding — a ~50% improvement, with 84% of students doing better after retrieval.',
            },
            {
              q: 'In Karpicke and Roediger\u2019s 2008 vocabulary study, dropping an item from retrieval after its first correct recall:',
              options: ['Saved time with no cost to memory', 'Cut week-later recall roughly in half versus continuing to retrieve it', 'Improved retention through spacing', 'Only hurt the easiest items'],
              answer: 1,
              explain: 'The dropped retrievals are exactly the ones that consolidate — the time-saving habit removes the mechanism.',
            },
            {
              q: 'In the recall-first hour, the minutes spent checking your free-recall page against the source exist to:',
              options: ['Reread the whole chapter once more', 'Mark the gaps — the targeted restudy list the final gap-only retrieval then attacks', 'Make the page presentable', 'Preview the next chapter'],
              answer: 1,
              explain: 'Feedback converts the retrieval attempt into a located curriculum: the marked gaps, and only the gaps, get the remaining minutes.',
            },
            {
              q: 'In Gates\u2019s 1917 classroom experiment, recall peaked when recitation took roughly:',
              options: ['10\u201320% of the study time', '60\u201380% of the study time', 'Exactly 100% of the study time', 'No consistent fraction of time'],
              answer: 1,
              explain: 'Reading time ranged from 100% down to 20%; recall peaked at 60\u201380% recitation — and pushing further backfired. Recitation\u2019s adult-replication record is mixed, hence the modern form adds feedback.',
            },
            {
              q: 'Karpicke, Butler and Roediger (2009) surveyed 177 college students: the shares naming rereading versus practicing retrieval as their #1 strategy were:',
              options: ['84% rereading vs 11% retrieval', '11% rereading vs 84% retrieval', '50% each', '84% retrieval vs 11% rereading'],
              answer: 0,
              explain: '84% named rereading first, 11% self-testing — the strategy gap. Dunlosky\u2019s 2013 review grades it the opposite way: practice testing and distributed practice are the only two rated high utility.',
            },
            {
              q: 'In McDermott and colleagues\u2019 2013 7th-grade science classroom study, quizzed questions beat non-quizzed ones on later exams by 18 percentage points:',
              options: ['Only for short-answer quizzes', 'Only for multiple-choice quizzes', 'Whether the quizzes were multiple-choice or short-answer', 'Only when quizzes were graded'],
              answer: 2,
              explain: 'The format mattered far less than the retrieval itself — both formats enhanced later exams, consistent with the classroom programs in Roediger et al. (2011) and McDaniel et al. (2011).',
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
        'The numbers: three times the score for the same hour',
        'Desirable difficulties: Bjork\u2019s umbrella',
        'Why it works: discrimination and spaced retrieval',
        'Two theories of the mix: variability versus contrast',
        'The performance-learning paradox',
        'Where interleaving helps most',
        'Building mixed problem sets: the one-back rule',
        'Designing an interleaved schedule',
        'Spacing is the partner, not the rival',
        'Overlearning: the blocked-practice exception',
      ],
      words: 2999,
      readMins: 15,
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
          text: 'The pattern has been documented with almost uncomfortable consistency. Rohrer and Taylor (2007) gave university students the same twenty mathematics problems, blocked or shuffled: the blocked group solved 89% during practice yet scored 20% on the test a week later, while the shuffled group — visibly clumsier at 65% in practice — scored 63%, roughly three times the delayed score for identical problems and identical minutes. Rohrer, Dedrick and Stershic\u2019s 2015 randomized classroom trial took it into real 9th-grade algebra across twelve problem types: one day after practice the groups were close, but one month later the interleaved group scored 72% against 38%. Kornell and Bjork (2008) found the same flip outside mathematics — students who studied paintings interleaved became far better at recognizing the styles of painters they had never seen — and Shea and Morgan (1979) had already found it in motor skills in the 1970s, where the disruption earned its name: contextual interference. Brunmair and Richter\u2019s 2019 meta-analysis of 59 studies put the average benefit at g \u2248 0.42, strongest for mathematics — the subject whose textbooks are most stubbornly blocked.',
        },
        {
          kind: 'figure',
          caption:
            'Two schedules for the same nine problems. Blocked practice (A A A B B B C C C) keeps one method loaded in working memory, so every item after the first is execution only. Interleaved practice (A B C B C A C A B) forces a fresh diagnosis on almost every item — which technique does this call for? — and each category is now retrieved on three separate occasions. Same problems, same minutes; only the order differs (Rohrer & Taylor, 2007).',
          sketchImage: '/diagrams/interleaving-schedule-sketch.jpg',
          sketchCaption:
            'Student Laboratory Notebook: two hand-lettered rows of practice squares — blocked A A A B B B C C C above, interleaved A B C B C A C A B below — with a margin note: \u201csame problems, same minutes, only the order differs.\u201d',
          afterConcept: 3,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Blocked schedule A A A B B B C C C versus interleaved schedule A B C B C A C A B, with diagnosis annotations">
  <!-- blocked row -->
  <text x="52" y="84" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor">Blocked practice</text>
  <text x="52" y="104" font-family="Georgia, 'Times New Roman', serif" font-size="12" font-style="italic" fill="#8a8a93">one method loaded — execution only</text>
  <g stroke-linecap="round">
    <rect x="250" y="56" width="56" height="56" rx="10" fill="#e11d48" opacity="0.14"/><rect x="252" y="58" width="52" height="52" rx="9" fill="none" stroke="#e11d48" stroke-width="2.4"/>
    <rect x="316" y="56" width="56" height="56" rx="10" fill="#e11d48" opacity="0.14"/><rect x="318" y="58" width="52" height="52" rx="9" fill="none" stroke="#e11d48" stroke-width="2.4" transform="rotate(0.8 344 84)"/>
    <rect x="382" y="56" width="56" height="56" rx="10" fill="#e11d48" opacity="0.14"/><rect x="384" y="58" width="52" height="52" rx="9" fill="none" stroke="#e11d48" stroke-width="2.4" transform="rotate(-0.7 410 84)"/>
    <rect x="448" y="56" width="56" height="56" rx="10" fill="#d97706" opacity="0.14"/><rect x="450" y="58" width="52" height="52" rx="9" fill="none" stroke="#d97706" stroke-width="2.4"/>
    <rect x="514" y="56" width="56" height="56" rx="10" fill="#d97706" opacity="0.14"/><rect x="516" y="58" width="52" height="52" rx="9" fill="none" stroke="#d97706" stroke-width="2.4" transform="rotate(0.6 542 84)"/>
    <rect x="580" y="56" width="56" height="56" rx="10" fill="#d97706" opacity="0.14"/><rect x="582" y="58" width="52" height="52" rx="9" fill="none" stroke="#d97706" stroke-width="2.4" transform="rotate(-0.5 608 84)"/>
    <rect x="646" y="56" width="56" height="56" rx="10" fill="#059669" opacity="0.14"/><rect x="648" y="58" width="52" height="52" rx="9" fill="none" stroke="#059669" stroke-width="2.4"/>
    <rect x="712" y="56" width="56" height="56" rx="10" fill="#059669" opacity="0.14"/><rect x="714" y="58" width="52" height="52" rx="9" fill="none" stroke="#059669" stroke-width="2.4" transform="rotate(0.7 740 84)"/>
    <rect x="778" y="56" width="56" height="56" rx="10" fill="#059669" opacity="0.14"/><rect x="780" y="58" width="52" height="52" rx="9" fill="none" stroke="#059669" stroke-width="2.4" transform="rotate(-0.8 806 84)"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="20" font-weight="bold" text-anchor="middle">
    <text x="278" y="92" fill="#e11d48">A</text><text x="344" y="92" fill="#e11d48">A</text><text x="410" y="92" fill="#e11d48">A</text>
    <text x="476" y="92" fill="#d97706">B</text><text x="542" y="92" fill="#d97706">B</text><text x="608" y="92" fill="#d97706">B</text>
    <text x="674" y="92" fill="#059669">C</text><text x="740" y="92" fill="#059669">C</text><text x="806" y="92" fill="#059669">C</text>
  </g>
  <text x="566" y="136" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#8a8a93">selection happens twice — items 1 and 4</text>
  <!-- interleaved row -->
  <text x="52" y="248" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor">Interleaved practice</text>
  <text x="52" y="268" font-family="Georgia, 'Times New Roman', serif" font-size="12" font-style="italic" fill="#8a8a93">fresh diagnosis almost every item</text>
  <g stroke-linecap="round">
    <rect x="250" y="220" width="56" height="56" rx="10" fill="#e11d48" opacity="0.14"/><rect x="252" y="222" width="52" height="52" rx="9" fill="none" stroke="#e11d48" stroke-width="2.4"/>
    <rect x="316" y="220" width="56" height="56" rx="10" fill="#d97706" opacity="0.14"/><rect x="318" y="222" width="52" height="52" rx="9" fill="none" stroke="#d97706" stroke-width="2.4" transform="rotate(-0.7 344 248)"/>
    <rect x="382" y="220" width="56" height="56" rx="10" fill="#059669" opacity="0.14"/><rect x="384" y="222" width="52" height="52" rx="9" fill="none" stroke="#059669" stroke-width="2.4" transform="rotate(0.6 410 248)"/>
    <rect x="448" y="220" width="56" height="56" rx="10" fill="#d97706" opacity="0.14"/><rect x="450" y="222" width="52" height="52" rx="9" fill="none" stroke="#d97706" stroke-width="2.4" transform="rotate(0.8 476 248)"/>
    <rect x="514" y="220" width="56" height="56" rx="10" fill="#059669" opacity="0.14"/><rect x="516" y="222" width="52" height="52" rx="9" fill="none" stroke="#059669" stroke-width="2.4"/>
    <rect x="580" y="220" width="56" height="56" rx="10" fill="#e11d48" opacity="0.14"/><rect x="582" y="222" width="52" height="52" rx="9" fill="none" stroke="#e11d48" stroke-width="2.4" transform="rotate(-0.6 608 248)"/>
    <rect x="646" y="220" width="56" height="56" rx="10" fill="#059669" opacity="0.14"/><rect x="648" y="222" width="52" height="52" rx="9" fill="none" stroke="#059669" stroke-width="2.4" transform="rotate(0.7 674 248)"/>
    <rect x="712" y="220" width="56" height="56" rx="10" fill="#e11d48" opacity="0.14"/><rect x="714" y="222" width="52" height="52" rx="9" fill="none" stroke="#e11d48" stroke-width="2.4" transform="rotate(-0.5 740 248)"/>
    <rect x="778" y="220" width="56" height="56" rx="10" fill="#d97706" opacity="0.14"/><rect x="780" y="222" width="52" height="52" rx="9" fill="none" stroke="#d97706" stroke-width="2.4" transform="rotate(0.8 806 248)"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="20" font-weight="bold" text-anchor="middle">
    <text x="278" y="256" fill="#e11d48">A</text><text x="344" y="256" fill="#d97706">B</text><text x="410" y="256" fill="#059669">C</text>
    <text x="476" y="256" fill="#d97706">B</text><text x="542" y="256" fill="#059669">C</text><text x="608" y="256" fill="#e11d48">A</text>
    <text x="674" y="256" fill="#059669">C</text><text x="740" y="256" fill="#e11d48">A</text><text x="806" y="256" fill="#d97706">B</text>
  </g>
  <text x="566" y="300" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#059669">selection happens eight times — and each category is retrieved three times</text>
  <!-- what the student must answer -->
  <rect x="120" y="352" width="640" height="64" rx="12" fill="none" stroke="#8a8a93" stroke-width="2.2" transform="rotate(-0.4 440 384)"/>
  <text x="440" y="378" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="15" font-style="italic" fill="currentColor">the question blocked practice never asks: which kind of problem is this?</text>
  <text x="440" y="400" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93">same problems · same minutes · only the order differs (Rohrer &amp; Taylor, 2007)</text>
  <text x="440" y="446" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#d97706">A = rose · B = amber · C = emerald</text>
</svg>`,
        },
        {
          kind: 'para',
          text: 'The idea has a lineage. William Battig spent the 1960s and 1970s arguing that random presentation would cost performance yet pay in retention and transfer; Shea and Morgan\u2019s 1979 experiments confirmed his conceptualization: 72 college students learned three motor tasks in blocked or random order, and the random groups led on delayed retention and complex transfer. They gave the disruption its name: contextual interference. Fifteen years later Robert Bjork folded the finding into a wider umbrella, coining desirable difficulties in a 1994 chapter titled \u201cMemory and metamemory considerations in the training of human beings\u201d: conditions that slow practice \u2014 spacing, testing, interleaving \u2014 often produce the most durable learning because, in the new theory of disuse he developed with Elizabeth Bjork, a retrieval made while the answer feels furthest away builds the most storage strength. The paradox running through this topic is a named, general law.',
        },
        {
          kind: 'para',
          text: 'Two engines run under the mix. First, discrimination: interleaving trains the front half of expertise — recognizing which knowledge applies — which blocked practice skips entirely. Second, each return to a category after an absence is a spaced retrieval, and spaced retrieval is the strongest known memory tool. Interleaving is spaced repetition wearing practice clothes.',
        },
        {
          kind: 'para',
          text: 'Why does the mix work? Two theories compete for the credit; both leave the prescription unchanged. Encoding variability holds that a category met again in a new context collects another set of retrieval routes, so the skill is callable from more angles. Discriminative contrast holds that interleaving parks confusable neighbours side by side in time, making their differences \u2014 the features that decide which technique applies \u2014 impossible to ignore, while blocked practice smooths those contrasts away and trains the similarities. The painting study adds a third thread: interleaved viewers improved at induction, inferring the style of painters they had never seen, suggesting the mix teaches the category itself. Brunmair and Richter\u2019s meta-analysis found the benefit weakest where categories barely resemble each other \u2014 precisely what the contrast account predicts.',
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
          text: 'A usable mixed set obeys three design rules. First, the one-back rule: no two consecutive items of the same type, which forces a fresh selection on nearly every problem — ABCBCA, never AAB. Second, keep the family together: interleave the kinds that are confusable (volume against surface area, not volume against verb conjugation), because the discrimination being trained is between near neighbours. Third, dose evenly — a running tally keeps every category from quietly vanishing, and three to five categories cycled twice is a good opening mix. Textbook exercise blocks fail all three rules at once, which is why shuffling the end-of-chapter problems is the cheapest curriculum upgrade a student can make.',
        },
        {
          kind: 'para',
          text: 'Start by listing the categories to mix, then build sequences where no two consecutive items match — shuffling a deck of problem cards is the low-tech version. Interleave within a theme, such as four kinds of statistics problems, before interleaving across themes. Keep a running tally so every category gets its share, and accept that error rates will rise before results do.',
        },
        {
          kind: 'para',
          text: 'Interleaving across a single afternoon and interleaving across days are different doses of the same medicine. The strongest schedules do both: today\'s mixed set includes material from last week, which is itself spacing. A practical stack assembles three techniques — retrieval practice for the content, spaced scheduling for the calendar, interleaving for the selection — into one session. The long arc holds at scale: in a pre-registered cluster randomized trial, Rohrer, Dedrick, Hartwig and Cheung gave 54 seventh-grade classes periodic interleaved or blocked assignments across four months, both groups finishing on the same interleaved review; one month later, on an unannounced test, the interleaved group scored 61% against 38% (d = 0.83). Teachers ran it without special training and, surveyed before the results were known, said they would keep it.',
        },
        {
          kind: 'figure',
          caption:
            'One week of mixed practice. Each session is a mixed set obeying the one-back rule — no two consecutive items alike — cycling the same three categories twice. Wednesday carries material from last week — which is itself spacing — and the running tally (A × 6 · B × 6 · C × 6) keeps every category in view. Inside each session the mix trains discrimination; across the week, widening gaps make every return a spaced retrieval (Rohrer, Dedrick, Hartwig & Cheung, 2020).',
          sketchImage: '/diagrams/interleaving-week-sketch.jpg',
          sketchCaption:
            'Student Laboratory Notebook: a weekly practice planner with three mixed sets — Monday A B C B A C, Wednesday C A B A C B, Friday B C A C B A — one square circled \u201cfrom last week,\u201d margin tally A\u00d76 \u00b7 B\u00d76 \u00b7 C\u00d76.',
          afterConcept: 11,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 500" role="img" aria-label="A week of interleaved practice: three mixed sets on Monday, Wednesday and Friday, each obeying the one-back rule, with a running tally of six returns per category">
  <text x="440" y="42" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="17" fill="currentColor">one week of interleaved practice — three mixed sets</text>
  <text x="440" y="64" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12" font-style="italic" fill="#8a8a93">the one-back rule inside every session: no two consecutive items alike</text>
  <!-- Monday -->
  <text x="36" y="116" font-family="Georgia, 'Times New Roman', serif" font-size="15" fill="currentColor">Monday</text>
  <text x="36" y="134" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">mixed set · six items</text>
  <g stroke-linecap="round">
    <rect x="250" y="100" width="48" height="48" rx="9" fill="#e11d48" opacity="0.14"/><rect x="252" y="102" width="44" height="44" rx="8" fill="none" stroke="#e11d48" stroke-width="2.4"/>
    <rect x="308" y="100" width="48" height="48" rx="9" fill="#d97706" opacity="0.14"/><rect x="310" y="102" width="44" height="44" rx="8" fill="none" stroke="#d97706" stroke-width="2.4" transform="rotate(0.7 332 124)"/>
    <rect x="366" y="100" width="48" height="48" rx="9" fill="#059669" opacity="0.14"/><rect x="368" y="102" width="44" height="44" rx="8" fill="none" stroke="#059669" stroke-width="2.4" transform="rotate(-0.6 390 124)"/>
    <rect x="424" y="100" width="48" height="48" rx="9" fill="#d97706" opacity="0.14"/><rect x="426" y="102" width="44" height="44" rx="8" fill="none" stroke="#d97706" stroke-width="2.4"/>
    <rect x="482" y="100" width="48" height="48" rx="9" fill="#e11d48" opacity="0.14"/><rect x="484" y="102" width="44" height="44" rx="8" fill="none" stroke="#e11d48" stroke-width="2.4" transform="rotate(0.6 506 124)"/>
    <rect x="540" y="100" width="48" height="48" rx="9" fill="#059669" opacity="0.14"/><rect x="542" y="102" width="44" height="44" rx="8" fill="none" stroke="#059669" stroke-width="2.4" transform="rotate(-0.7 564 124)"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="18" font-weight="bold" text-anchor="middle">
    <text x="274" y="131" fill="#e11d48">A</text><text x="332" y="131" fill="#d97706">B</text><text x="390" y="131" fill="#059669">C</text>
    <text x="448" y="131" fill="#d97706">B</text><text x="506" y="131" fill="#e11d48">A</text><text x="564" y="131" fill="#059669">C</text>
  </g>
  <text x="250" y="172" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">no two consecutive alike — a fresh diagnosis almost every item</text>
  <!-- Wednesday -->
  <text x="36" y="212" font-family="Georgia, 'Times New Roman', serif" font-size="15" fill="currentColor">Wednesday</text>
  <text x="36" y="230" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">mixed set · six items</text>
  <text x="274" y="186" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="10.5" font-style="italic" fill="#8a8a93">from last week</text>
  <g stroke-linecap="round">
    <rect x="244" y="190" width="60" height="60" rx="11" fill="none" stroke="#8a8a93" stroke-width="1.6" stroke-dasharray="4 3"/>
    <rect x="250" y="196" width="48" height="48" rx="9" fill="#059669" opacity="0.14"/><rect x="252" y="198" width="44" height="44" rx="8" fill="none" stroke="#059669" stroke-width="2.4"/>
    <rect x="308" y="196" width="48" height="48" rx="9" fill="#e11d48" opacity="0.14"/><rect x="310" y="198" width="44" height="44" rx="8" fill="none" stroke="#e11d48" stroke-width="2.4" transform="rotate(-0.7 332 220)"/>
    <rect x="366" y="196" width="48" height="48" rx="9" fill="#d97706" opacity="0.14"/><rect x="368" y="198" width="44" height="44" rx="8" fill="none" stroke="#d97706" stroke-width="2.4" transform="rotate(0.6 390 220)"/>
    <rect x="424" y="196" width="48" height="48" rx="9" fill="#e11d48" opacity="0.14"/><rect x="426" y="198" width="44" height="44" rx="8" fill="none" stroke="#e11d48" stroke-width="2.4"/>
    <rect x="482" y="196" width="48" height="48" rx="9" fill="#059669" opacity="0.14"/><rect x="484" y="198" width="44" height="44" rx="8" fill="none" stroke="#059669" stroke-width="2.4" transform="rotate(0.7 506 220)"/>
    <rect x="540" y="196" width="48" height="48" rx="9" fill="#d97706" opacity="0.14"/><rect x="542" y="198" width="44" height="44" rx="8" fill="none" stroke="#d97706" stroke-width="2.4" transform="rotate(-0.6 564 220)"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="18" font-weight="bold" text-anchor="middle">
    <text x="274" y="227" fill="#059669">C</text><text x="332" y="227" fill="#e11d48">A</text><text x="390" y="227" fill="#d97706">B</text>
    <text x="448" y="227" fill="#e11d48">A</text><text x="506" y="227" fill="#059669">C</text><text x="564" y="227" fill="#d97706">B</text>
  </g>
  <text x="250" y="268" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">carries material from last week — which is itself spacing</text>
  <!-- Friday -->
  <text x="36" y="308" font-family="Georgia, 'Times New Roman', serif" font-size="15" fill="currentColor">Friday</text>
  <text x="36" y="326" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">mixed set · six items</text>
  <g stroke-linecap="round">
    <rect x="250" y="292" width="48" height="48" rx="9" fill="#d97706" opacity="0.14"/><rect x="252" y="294" width="44" height="44" rx="8" fill="none" stroke="#d97706" stroke-width="2.4"/>
    <rect x="308" y="292" width="48" height="48" rx="9" fill="#059669" opacity="0.14"/><rect x="310" y="294" width="44" height="44" rx="8" fill="none" stroke="#059669" stroke-width="2.4" transform="rotate(0.6 332 316)"/>
    <rect x="366" y="292" width="48" height="48" rx="9" fill="#e11d48" opacity="0.14"/><rect x="368" y="294" width="44" height="44" rx="8" fill="none" stroke="#e11d48" stroke-width="2.4" transform="rotate(-0.7 390 316)"/>
    <rect x="424" y="292" width="48" height="48" rx="9" fill="#059669" opacity="0.14"/><rect x="426" y="294" width="44" height="44" rx="8" fill="none" stroke="#059669" stroke-width="2.4"/>
    <rect x="482" y="292" width="48" height="48" rx="9" fill="#d97706" opacity="0.14"/><rect x="484" y="294" width="44" height="44" rx="8" fill="none" stroke="#d97706" stroke-width="2.4" transform="rotate(-0.6 506 316)"/>
    <rect x="540" y="292" width="48" height="48" rx="9" fill="#e11d48" opacity="0.14"/><rect x="542" y="294" width="44" height="44" rx="8" fill="none" stroke="#e11d48" stroke-width="2.4" transform="rotate(0.7 564 316)"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="18" font-weight="bold" text-anchor="middle">
    <text x="274" y="323" fill="#d97706">B</text><text x="332" y="323" fill="#059669">C</text><text x="390" y="323" fill="#e11d48">A</text>
    <text x="448" y="323" fill="#059669">C</text><text x="506" y="323" fill="#d97706">B</text><text x="564" y="323" fill="#e11d48">A</text>
  </g>
  <text x="250" y="364" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">the running tally keeps every category in view</text>
  <!-- running tally box -->
  <rect x="660" y="196" width="180" height="128" rx="12" fill="none" stroke="#8a8a93" stroke-width="2" transform="rotate(0.5 750 260)"/>
  <text x="750" y="224" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13.5" fill="currentColor">running tally</text>
  <text x="750" y="242" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11" font-style="italic" fill="#8a8a93">for the week</text>
  <text x="750" y="280" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold"><tspan fill="#e11d48">A × 6</tspan><tspan fill="#8a8a93"> · </tspan><tspan fill="#d97706">B × 6</tspan><tspan fill="#8a8a93"> · </tspan><tspan fill="#059669">C × 6</tspan></text>
  <text x="750" y="308" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11" font-style="italic" fill="#059669">dose evenly — nothing vanishes</text>
  <text x="440" y="394" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#059669">each return to a category is a spaced retrieval — and the gaps widen across the week</text>
  <rect x="120" y="412" width="640" height="58" rx="12" fill="none" stroke="#8a8a93" stroke-width="2.2" transform="rotate(-0.4 440 441)"/>
  <text x="440" y="436" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="15" font-style="italic" fill="currentColor">inside each session: discrimination — which technique does this call for?</text>
  <text x="440" y="458" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93">across sessions: spacing — every category returns before it fades</text>
  <text x="440" y="492" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#d97706">A = rose · B = amber · C = emerald</text>
</svg>`,
        },
        {
          kind: 'para',
          text: 'The blocked cousin of this failure has its own name. Overlearning means continuing to study or practice immediately after you have already reached the criterion — solving one more, and then five more, of the same problem type in the same session. Research summarized by Doug Rohrer and highlighted in Barbara Oakley\'s A Mind for Numbers finds same-session overlearning buys diminishing returns: the first correct repetitions consolidate, the rest mostly polish comfort. One exception earns its keep — when a skill must become automatic for performance, as with a tennis serve or a piano concerto, overlearning is exactly the tool. But for learning that must survive to a delayed test, the honest move after reaching criterion is to switch to mixed practice or to a different topic, returning to this one in a later session — which is spacing in disguise.',
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
        {
          kind: 'derivation',
          title: 'The interleaving exchange rate: three times the test for zero extra minutes',
          statement:
            'Rohrer and Taylor\u2019s 2007 design isolates order as the only variable — the same twenty problems, the same sitting — so the delayed-test gap is a pure exchange rate for reordering practice.',
          prerequisites: ['Percentages and ratios', 'The blocked-vs-shuffled design'],
          steps: [
            {
              label: 'Step 1: Hold everything constant but the order',
              formula: '$$n_{\\text{problems}} = 20, \\qquad t_{\\text{blocked}} = t_{\\text{shuffled}}$$',
              explanation:
                'Both groups solved the same twenty problems in the same session; the sequence was the only difference. Any delayed-test gap is therefore purchased at zero extra cost in problems or minutes.',
            },
            {
              label: 'Step 2: Price the in-session cost',
              formula: '$$89\\% - 65\\% = 24\\ \\text{points}$$',
              explanation:
                'Shuffling cost 24 points of practice accuracy — the selection tax. Students felt it immediately and judged the method worse, which is exactly why it stays underused.',
            },
            {
              label: 'Step 3: Price the delayed payoff',
              formula: '$$63\\% - 20\\% = 43\\ \\text{points}$$',
              explanation:
                'One week later the shuffled group led by 43 points — the discrimination dividend, earned on the front half of expertise (which method applies?) that blocked practice never trains.',
            },
            {
              label: 'Step 4: Compute the exchange rate',
              formula: '$$\\frac{63}{20} \\approx 3.2$$',
              explanation:
                'For identical problems and identical minutes, the shuffled group\u2019s week-later score was roughly three times higher — the selection tax repaid at better than 3-to-1.',
            },
            {
              label: 'Step 5: Check it outside the laboratory',
              formula: '$$72\\%\\ \\text{vs}\\ 38\\%\\ \\text{at 30 days}$$',
              explanation:
                'Rohrer, Dedrick and Stershic\u2019s 2015 classroom trial found the same flip in real 9th-grade algebra across twelve problem types: the interleaved group\u2019s month-later score was nearly double (72/38 \u2248 1.9), and Brunmair and Richter\u2019s 2019 meta-analysis (g \u2248 0.42) confirms the average across 59 studies.',
            },
          ],
          result:
            'Reordering identical practice buys about 3\u00d7 the week-later score in the laboratory and nearly 2\u00d7 the month-later score in real classrooms — for zero extra minutes — paid for with a 24-point drop in how good practice feels. The feeling is the currency being exchanged.',
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
            { term: 'Overlearning', def: 'Continuing to practice past the criterion within the same session; useful for performance automaticity, wasteful for durable learning.' },
            { term: 'One-back rule', def: 'Mixed-set design rule: no two consecutive items of the same type.' },
            { term: 'Selection tax', def: 'The drop in practice accuracy interleaving charges — repaid with interest on the delayed test.' },
            { term: 'Desirable difficulty', def: 'A condition that slows practice but strengthens retention and transfer — Bjork\u2019s umbrella for spacing, testing and interleaving.' },
            { term: 'Encoding variability', def: 'The theory that a category met in varied contexts gains extra retrieval routes, making the skill more flexible.' },
            { term: 'Discriminative contrast', def: 'The theory that interleaving helps by parking confusable neighbours side by side, making their decisive differences hard to miss.' },
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
            {
              q: 'Rohrer and Taylor (2007): same twenty problems, test one week later. Blocked versus shuffled scores were about:',
              options: ['89% vs 65% — the practice scores', '20% vs 63% — the shuffled group won by 43 points', '63% vs 20% — the blocked group won', 'Equal — order made no difference'],
              answer: 1,
              explain: 'The blocked group\u2019s 89% practice accuracy collapsed to 20% on the delayed test; the clumsier-feeling shuffled group scored 63% — three times higher for the same hour.',
            },
            {
              q: 'The 2015 randomized classroom trial (twelve algebra problem types) found one month after practice:',
              options: ['The blocked group ahead, 72% vs 38%', 'The interleaved group ahead, 72% vs 38%', 'No difference at any delay', 'An advantage only for the strongest students'],
              answer: 1,
              explain: 'In real 9th-grade classrooms the interleaved group nearly doubled the blocked group\u2019s month-later score — the lab result survived contact with schools.',
            },
            {
              q: 'The one-back rule for building a mixed set says:',
              options: ['Repeat a type once before switching', 'No two consecutive items of the same type', 'Never return to a category once left', 'Alternate exactly two categories forever'],
              answer: 1,
              explain: 'Consecutive items should usually differ — ABCBCA, never AAB — so nearly every problem begins with a fresh selection.',
            },
            {
              q: 'The selection tax means the interleaved group pays for its delayed-test advantage with:',
              options: ['More total minutes', 'Lower in-session accuracy — practice that feels worse', 'More practice problems to buy', 'Extra instruction or tutoring'],
              answer: 1,
              explain: 'Same problems, same minutes: the price is a 24-point drop in how competent practice feels (89% to 65% in the 2007 study) — the paradox is the price.',
            },
            {
              q: 'The name contextual interference was attached to the effect by:',
              options: ['Battig, in his 1960s theorizing', 'Shea and Morgan (1979), whose random-practice groups stumbled in practice yet led on the delayed test', 'Rohrer and Taylor (2007)', 'Brunmair and Richter (2019)'],
              answer: 1,
              explain: 'The 1979 motor-skill experiments demonstrated and named the effect; their results supported Battig\u2019s earlier conceptualization. Bjork\u2019s 1994 \u201cdesirable difficulties\u201d later became the umbrella term.',
            },
            {
              q: 'In Bjork\u2019s new theory of disuse, a successful retrieval builds the most storage strength when:',
              options: ['The answer was rehearsed a minute earlier', 'Practice is blocked inside one session', 'Retrieval strength is low — the answer feels furthest away', 'The material has never been studied before'],
              answer: 2,
              explain: 'Low-retrieval-strength recalls are the potent ones — the theoretical engine behind spacing, testing and interleaving, the three classic desirable difficulties.',
            },
            {
              q: 'In the four-month cluster randomized trial with 54 seventh-grade classes, the unannounced test one month after review ended:',
              options: ['61% interleaved vs 38% blocked (d = 0.83)', '38% interleaved vs 61% blocked', 'Dead even — only the small 2015 study found a gap', 'Interleaved ahead, but only with trained teachers'],
              answer: 0,
              explain: 'The four-month trial with 54 classes put the interleaved group 23 points ahead; teachers ran it without training and supported it in a survey taken before results were known.',
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
      words: 2516,
      readMins: 13,
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
          text: 'The founding evidence is the 1993 Berlin violin study. Ericsson, Krampe and Tesch-Römer interviewed students at the Berlin University of the Arts, divided them by their professors into future international soloists, merely good players, and future music teachers, then reconstructed every hour of practice from age eight onward. The biographies separated cleanly: by age eighteen the best violinists had banked an average of about 7,410 hours of solitary practice, the good players about 5,301, and the future teachers about 3,420 — and the gap was carried almost entirely by effortful practice alone in the practice room, not by lessons, ensemble hours or performances. Two details complete the picture. The best players structured the work in sessions of at most eighty to ninety minutes with real breaks, capping deliberate practice near three and a half hours a day. And they slept more — about 8.6 hours a night including naps, roughly an hour more than the weaker groups — treating recovery as part of the training. Practice history predicted the groups better than any early-talent rating; nobody had reached the top on thin hours.',
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
          text: 'The laboratory version of this story is extreme. In the classic Chase and Ericsson digit-span experiments, a college student identified only as SF — a keen long-distance runner — trained his digit span session after session, chunking runs of digits into race times he knew cold (3,492 became "3 minutes 49 point 2, near world-record mile pace") and building retrieval links between chunks. After months of this single-minded drilling he could repeat back 82 digits in order — against a normal span of seven — yet his letter span stayed ordinary, because what he had built was not a bigger memory but a domain-specific system of chunks and cues. Ericsson and Kintsch later named the general mechanism long-term working memory: experts use familiar structures to park and re-address information in long-term storage almost as if it were held in mind. That is what a mental representation buys, and it only grows under practice that keeps outrunning the current structure.',
        },
        {
          kind: 'para',
          text: 'The famous round number came from averaging top performers\' accumulated practice — and it is a center, not a threshold. Some experts reach world class in far less time by training efficiently; others accumulate many more hours without improving at all. The rule\'s surviving core: expertise takes years of deliberate work rather than exposure, and the composition of the hours matters more than their count.',
        },
        {
          kind: 'para',
          text: 'That round number had a famous career. Malcolm Gladwell\'s Outliers (2008) distilled the Berlin numbers into a "10,000-hour rule" — and Ericsson spent years politely correcting the translation: 10,000 was the average accumulated by the best violinists around age twenty, not a threshold anyone crosses, and dropping the word "deliberate" turned a finding about designed, effortful, feedback-rich practice into a folk theorem about mere seat time. The correction matters because the wider evidence says composition dominates volume. Macnamara, Hambrick and Oswald\'s 2014 meta-analysis of 88 studies measured how much performance variance deliberate practice actually explains: about 26 per cent in games, 21 per cent in music, 18 per cent in sports — but only 4 per cent in education and under 1 per cent in established professions. Deliberate practice is the most controllable lever anyone has found, not the only variable: starting age, coaching quality, and how predictable the domain is all pull their own weight. The honest reading is liberating rather than deflating — hours you can design and audit are worth more than hours you can merely count.',
        },
        {
          kind: 'para',
          text: 'Where does the ten-year figure come from? Arithmetic, mostly. Herbert Simon and William Chase\'s 1973 chess work found no player reaching international master strength with less than about a decade of intense involvement — the origin of the "ten-year rule" — and the Berlin math reproduces it: three deliberate hours a day, roughly 350 serious days a year, sustained for ten years, accumulates about 10,500 hours. The number is what falls out of a sustainable daily dose held for the time it takes the representations to deepen; it is a by-product of the recipe, never a substitute for it.',
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
          kind: 'figure',
          caption:
            'The power law of practice. Time per trial $T = a\\,P^{-b}$ falls steeply over the first hours of practice, then flattens into the plateau of automaticity — repetition maintains but no longer improves. When deliberate practice begins (edge-difficulty drills with a feedback loop), the curve re-steepens as mental representations grow. Inset: the Berlin violin study (Ericsson, Krampe & Tesch-Römer, 1993) — by age 18 the best violinists had banked ≈ 7,410 hours of solitary practice against ≈ 3,420 for the future music teachers.',
          sketchImage: '/diagrams/deliberate-practice-sketch.jpg',
          sketchCaption:
            'Student Laboratory Notebook: practice curve with time per trial on the vertical axis and accumulated practice hours on the horizontal; the power law T = aP^-b dropping steeply then flattening into a labelled plateau of automaticity; a dashed vertical line marked "deliberate practice begins: edge-difficulty + feedback" where the curve bends downward again; corner box listing Berlin 1993 hours — best ≈ 7,410, good ≈ 5,301, teachers ≈ 3,420 by age 18.',
          afterConcept: 1,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Power law of practice: time per trial falls with accumulated practice, plateaus under automaticity, and drops again when deliberate practice re-steepens the curve">
  <!-- hand-drawn axes (double-stroked, gently wobbly) -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
    <path d="M84 52 Q82 220 86 392"/>
    <path d="M80 388 Q300 392 540 387 Q700 391 836 386"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.5" stroke-linecap="round">
    <path d="M89 55 Q87 220 91 390"/>
    <path d="M77 393 Q300 397 540 392 Q700 396 833 391"/>
  </g>
  <!-- axis titles + ticks -->
  <g font-family="Georgia, 'Times New Roman', serif" fill="currentColor">
    <text x="30" y="224" font-size="15" font-style="italic" text-anchor="middle" transform="rotate(-90 30 224)">Time per trial T</text>
    <text x="836" y="448" font-size="15" font-style="italic" text-anchor="end">Accumulated practice P (hours)</text>
    <g font-size="11.5" fill="#8a8a93" text-anchor="end">
      <text x="76" y="64">100</text><text x="76" y="146">75</text><text x="76" y="228">50</text><text x="76" y="310">25</text><text x="76" y="392">0</text>
    </g>
    <g font-size="11.5" fill="#8a8a93" text-anchor="middle">
      <text x="84" y="380">0</text><text x="209" y="380">500</text><text x="335" y="380">1,000</text><text x="460" y="380">1,500</text><text x="585" y="380">2,000</text><text x="710" y="380">2,500</text><text x="836" y="380">3,000</text>
    </g>
  </g>
  <!-- maintenance curve: power law flattening into plateau (rose) -->
  <path d="M84 60 C 100 130 118 178 140 214 C 170 258 205 288 245 308 C 300 332 360 344 430 350 C 520 356 620 358 836 359" fill="none" stroke="#e11d48" stroke-width="3" stroke-linecap="round" opacity="0.95"/>
  <text x="620" y="334" font-family="Georgia, 'Times New Roman', serif" font-size="13.5" font-style="italic" fill="#e11d48">plateau — automaticity: repetition maintains</text>
  <!-- deliberate-practice intervention -->
  <line x1="470" y1="84" x2="470" y2="352" stroke="#d97706" stroke-width="2" stroke-dasharray="7 6" opacity="0.9"/>
  <path d="M470 82 L464 94 L476 94 Z" fill="#d97706"/>
  <text x="482" y="100" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#d97706">deliberate practice begins: edge-difficulty drills + feedback loop</text>
  <!-- re-steepened curve (emerald) -->
  <path d="M470 352 C 500 340 530 300 560 262 C 600 214 660 176 730 158 C 770 148 806 144 836 141" fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round" opacity="0.97"/>
  <text x="592" y="132" font-family="Georgia, 'Times New Roman', serif" font-size="13.5" font-style="italic" fill="#059669">re-steepened: mental representations grow</text>
  <!-- formula annotation -->
  <text x="140" y="92" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-style="italic" fill="currentColor">power law of practice: T = aP<tspan dy="-7" font-size="11">−b</tspan></text>
  <!-- Berlin study box -->
  <g>
    <path d="M560 52 Q560 46 566 46 L712 46 Q718 46 718 52 L718 110 Q718 116 712 116 L566 116 Q560 116 560 110 Z" fill="none" stroke="#8a8a93" stroke-width="1.4" opacity="0.6"/>
    <text x="639" y="66" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="currentColor">Berlin violin study (1993):</text>
    <text x="639" y="84" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="currentColor">best ≈ 7,410 h · good ≈ 5,301 h</text>
    <text x="639" y="102" font-family="Georgia, 'Times New Roman', serif" font-size="12" text-anchor="middle" fill="currentColor">future teachers ≈ 3,420 h by age 18</text>
  </g>
</svg>`,
        },
        {
          kind: 'derivation',
          title: 'How expensive is the next halving? The power-law arithmetic',
          statement:
            'Derivation from the power law of practice $T = a\\,P^{-b}$ — why each halving of trial time costs a constant multiple of ALL previous practice, and why deliberate practice must change the curve rather than move along it.',
          prerequisites: ['The power law of practice', 'Logarithms and exponents'],
          steps: [
            {
              label: 'Step 1: State the law',
              formula: '$$T = a\\,P^{-b}$$',
              explanation:
                'Time per trial T decays as a power of accumulated practice P: the constant a sets the starting level, the exponent b the steepness of improvement.',
            },
            {
              label: 'Step 2: Linearise on log-log axes',
              formula: '$$\\ln T = \\ln a - b\\,\\ln P$$',
              explanation:
                "Taking logarithms turns the curve into a straight line of slope −b — exactly how practice curves are fitted empirically, and why b is the natural summary of a domain's rate of improvement.",
            },
            {
              label: 'Step 3: Price a halving of trial time',
              formula: '$$\\frac{T_2}{T_1} = \\tfrac{1}{2} \\;\\Rightarrow\\; \\frac{P_2}{P_1} = 2^{1/b}$$',
              explanation:
                'Because T depends on P through the power −b, making the skill twice as fast requires multiplying accumulated practice by 2^(1/b) — regardless of where you start.',
            },
            {
              label: 'Step 4: Insert the empirical exponent',
              formula: '$$b \\approx 0.3 \\;\\Rightarrow\\; 2^{1/b} \\approx 10$$',
              explanation:
                'For cognitive skills b typically sits between 0.2 and 0.4; at b = 0.3 every halving of trial time demands roughly TEN times the practice already banked — the mathematical form of the plateau.',
            },
            {
              label: 'Step 5: The escape route changes the constants',
              formula: "$$a \\to a' < a, \\quad b \\to b' > b$$",
              explanation:
                'Moving along the curve buys geometrically less each time. Deliberate practice works by shifting the curve itself — a smaller a (better method, better coaching) and a steeper b (edge-difficulty drills with feedback) — which is why redesign, not volume, is what ends plateaus.',
            },
          ],
          result:
            "Volume alone obeys brutal arithmetic: at b ≈ 0.3, the next halving of trial time costs ten times all the practice already banked. Deliberate practice is the design intervention that changes the constants themselves — the only mathematically honest way off the plateau, and the reason the Berlin violinists' hours were solitary, targeted and feedback-rich rather than merely many.",
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
            {
              q: 'In the 1993 Berlin violin study, what best separated the future soloists from the future music teachers by age 18?',
              options: ['Hours of lessons and ensemble playing', 'Accumulated solitary deliberate practice (about 7,410 h vs about 3,420 h)', 'Teachers\' early ratings of talent', 'Faster sight-reading at admission'],
              answer: 1,
              explain: 'The biographies separated on banked solitary practice — its structure (60-90 minute sessions, more sleep) carrying the gap, not lessons or talent ratings.',
            },
            {
              q: 'Using the power law with b = 0.3, roughly how much MORE accumulated practice does the NEXT halving of trial time require?',
              options: ['Twice the current total', 'About ten times the current total', 'A constant 100 extra hours regardless of level', 'Half the current total'],
              answer: 1,
              explain: 'P₂/P₁ = 2^(1/0.3) ≈ 2^3.33 ≈ 10 — each halving costs ten times everything already banked, the arithmetic behind the plateau.',
            },
            {
              q: 'The Macnamara, Hambrick and Oswald (2014) meta-analysis found deliberate practice explains about 26% of performance variance in games but under 1% in professions. The honest conclusion is:',
              options: ['Deliberate practice is a myth outside games', 'It is the most controllable lever but not the only variable — starting age, coaching and domain predictability also matter', 'Professionals should stop training', 'The meta-analysis disproved the Berlin study'],
              answer: 1,
              explain: 'A powerful, designable lever — never the whole story; that is why the recipe audits the composition of hours, not just their count.',
            },
            {
              q: 'Why do elite performers cap deliberate practice at about three to five focused hours a day?',
              options: ['They run out of material', 'Edge-difficulty work is exhausting and needs consolidation — beyond the cap, quality decays into comfortable volume', 'Coaches forbid longer sessions', 'Muscle growth stops after two hours'],
              answer: 1,
              explain: 'The Berlin violinists stopped near 3.5 hours a day and slept MORE than the weaker groups — rest is part of the training, and strain defines the dose.',
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
      words: 1826,
      readMins: 9,
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
          kind: 'figure',
          caption:
            'The Cornell page as Pauk designed it: a narrow cue column on the left, a wide note area on the right, a summary strip along the bottom. Live notes go right, in your own words and abbreviated; within 24 hours the cues are distilled — the questions those notes answer; then cover the note area and answer the cues from memory, and let the summary strip force a one-sentence synthesis. Every zone is a working part: the page is a self-test that wrote itself.',
          afterConcept: 2,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="The Cornell page: cue column left, note area right, summary strip bottom">
  <rect x="120" y="60" width="640" height="330" fill="#059669" opacity="0.04"/>
  <rect x="120" y="60" width="640" height="330" fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round"/>
  <rect x="116" y="56" width="648" height="338" fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.5"/>
  <!-- dividers -->
  <g stroke="#8a8a93" stroke-width="2" stroke-linecap="round">
    <path d="M320 62 Q318 220 322 386"/>
    <path d="M122 320 Q440 316 756 322"/>
  </g>
  <g stroke="#8a8a93" stroke-width="1" opacity="0.5">
    <path d="M324 64 Q322 220 326 384"/>
    <path d="M124 324 Q440 320 754 326"/>
  </g>
  <!-- cue column tint + scribbles -->
  <rect x="122" y="62" width="196" height="256" fill="#d97706" opacity="0.07"/>
  <g stroke="#d97706" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.85">
    <path d="M140 92 L296 90"/>
    <path d="M140 122 L270 121"/>
    <path d="M140 152 L292 154"/>
    <path d="M140 182 L252 181"/>
    <path d="M140 212 L286 184"/>
    <path d="M140 242 L276 241"/>
    <path d="M140 272 L298 273"/>
  </g>
  <!-- note area scribbles -->
  <g stroke="#8a8a93" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.8">
    <path d="M342 92 L736 90"/>
    <path d="M342 112 L700 111"/>
    <path d="M342 132 L742 133"/>
    <path d="M342 162 L664 161"/>
    <path d="M366 172 L690 171"/>
    <path d="M342 202 L724 203"/>
    <path d="M342 222 L596 221"/>
    <path d="M342 252 L738 253"/>
    <path d="M342 272 L640 271"/>
    <path d="M342 292 L706 293"/>
  </g>
  <!-- summary strip tint -->
  <rect x="122" y="324" width="636" height="64" fill="#e11d48" opacity="0.05"/>
  <g stroke="#8a8a93" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.8">
    <path d="M140 352 L600 350"/>
  </g>
  <!-- labels -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="220" y="412" font-size="14" fill="#d97706" text-anchor="middle">cue column</text>
    <text x="220" y="432" font-size="12" fill="#8a8a93" text-anchor="middle">questions the notes answer</text>
    <text x="540" y="412" font-size="14" fill="currentColor" text-anchor="middle">note area</text>
    <text x="540" y="432" font-size="12" fill="#8a8a93" text-anchor="middle">your own words, abbreviated — live</text>
    <text x="770" y="356" font-size="13" fill="#e11d48" text-anchor="start">summary strip —</text>
    <text x="770" y="376" font-size="12" fill="#8a8a93" text-anchor="start">one-sentence</text>
    <text x="770" y="394" font-size="12" fill="#8a8a93" text-anchor="start">synthesis</text>
  </g>
  <!-- workflow arrows -->
  <g fill="none" stroke="#059669" stroke-width="1.6" stroke-dasharray="4 4" stroke-linecap="round">
    <path d="M320 96 C 300 80 260 76 232 84"/>
    <path d="M540 300 C 520 296 500 292 486 288"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#059669">
    <text x="60" y="76">within 24 hours:</text>
    <text x="60" y="94">distill the cues</text>
    <text x="356" y="286">cover the notes, answer the cues</text>
  </g>
</svg>`
        },
        {
          kind: 'para',
          text: 'Cornell earns its keep only after the lecture, and the conversion has a clock on it. Within twenty-four hours — while the lecture still has shape in memory — distill the cue column: the questions those notes answer, written as questions, because cues drafted a week later are guesses. From there the page plugs into the scheduling machinery the spaced repetition lesson owns: first cover-and-test within a day, again inside the week, then at expanding intervals, with every missed cue marked for the next round. The exam-facing version maps cues against the syllabus and past papers: a cue the question style never asks can wait; a cue that keeps failing is a drill target. The note page becomes one station in a retrieval pipeline rather than a static archive.',
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
          text: 'Live lectures add a triage problem the systems above assume away: a lecturer speaks at roughly three hundred words a minute and you write at about seventy-five. The fix is to write structure, not sentences — the skeleton of the argument, abbreviations, arrows — and to leave deliberate gaps whenever attention falls behind, marking a “?” where something was missed instead of inventing plausible filler. The gap is an honest debt the post-lecture pass collects: the textbook, a classmate or the recording settles it within the day, and the cue conversion doubles as the checklist that nothing was left unsettled. Students who fabricate during the lecture encode the fabrication; the blank-with-a-question-mark costs one moment of honesty and buys a correctable note.',
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
          { term: 'cue conversion', def: 'Distilling the day\'s notes into cue questions within 24 hours so the page becomes a self-test.' },
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
          {
            q: 'When should the Cornell cue column be written, and why?',
            options: ['A week later, once the material has settled', 'Within 24 hours, while the lecture still has shape in memory', 'Never — the lecturer provides the cues', 'Only during the final revision week'],
            answer: 1,
            explain: 'Cues drafted a week later are guesses; the conversion has a clock on it, and only after it does the page plug into the spaced schedule.',
          },
          {
            q: 'When the lecturer outruns your pen, the tactic is to:',
            options: ['write faster in full sentences', 'invent plausible filler so the page stays complete', 'leave a marked “?” gap and settle it from the textbook or recording the same day', 'stop taking notes entirely'],
            answer: 2,
            explain: 'Fabricated notes encode fabrication; the marked gap is honest debt the post-lecture pass collects — and the cue conversion checks nothing was left unsettled.',
          },
          {
            q: 'For revising unknown, tangled territory, the best-fit format is:',
            options: ['a mind map, to discover the shape', 'verbatim transcription', 'a Zettelkasten from day one', 'highlighting only'],
            answer: 0,
            explain: 'Maps surface connections and gaps when structure is unknown — the map discovers it; outlines mirror structure you already know.',
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
        'Hard-start, jump-to-easy',
        'Anxiety as fuel, not fog',
      ],
      words: 2082,
      readMins: 10,
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
          text: 'Punished wrong answers change the arithmetic, so run it honestly. Under the common fractional penalty (+1 for correct, −¼ for wrong, four options), a blind guess has expected value 0.25 × 1 − 0.75 × 0.25 = +0.0625 — still positive, and eliminating even one option pushes it to 0.5 × 1 − 0.5 × 0.25 = +0.375. Even a five-option paper with −¼ penalties lands a blind guess at exactly zero, so any elimination tips the balance toward answering. Only a full penalty (−1 for a wrong answer, four options) makes the blank rational — expected value exactly zero with no information. The rule of thumb that survives every regime: never leave a blank you could narrow, and never answer purely at random under a full penalty. The evidence on revisiting answers is just as settled: Benjamin, Cavell and Shallenberger\'s 1984 review of thirty-three answer-changing studies found that changes go wrong-to-right roughly twice as often as right-to-wrong — the "always keep your first instinct" folklore is simply false. What separates the good changer from the bad is the reason: a specific correction (misread question, recalled a fact, spotted a units error) pays; naked second-guessing does not.',
        },
        {
          kind: 'para',
          text: 'Work in passes. Pass one: every question you can answer cleanly and fast — banking marks and building momentum. Pass two: the mediums, which get their full budgets. Pass three: the hard and uncertain, attacked with the remaining time and the confidence of a mostly-finished paper. Multiple choice: never leave blanks — eliminate and choose, unless wrong answers are penalised. Essays: outline before writing, because a two-minute skeleton earns more than a page of early drift. Final pass: signs, units, skipped sub-parts, your name.',
        },
        {
          kind: 'para',
          text: 'The three-pass order has one principled rival worth knowing. Barbara Oakley\'s hard-start, jump-to-easy technique — from A Mind for Numbers, and backed by the same reasoning as Sian Beilock\'s choking research — says that when the format allows free movement between questions, begin with the hardest one, and the instant you feel stuck, jump to easy ones and bank marks. While your focused mode works the easy questions, the diffuse mode keeps incubating the hard one in the background, so a fresh approach is often waiting when you return. The deeper logic: the standard order stacks your maximum stress with your maximum difficulty in the final minutes — exactly the collision that produces paralysis by analysis. If you run the hard start, commit to jumping early rather than sinking five minutes into one stuck problem; if you know your triage discipline is shaky, the bank-marks-first order remains the safer default.',
        },
        {
          kind: 'para',
          text: 'Arousal is not the enemy; misread arousal is. The Yerkes-Dodson law puts performance highest at moderate arousal, and the racing heart that feels like fear is physiologically near-identical to excitement — relabel it. Control what can be controlled: long, slow exhales calm the nervous system, a first easy question gets ink flowing, and a deliberate pause resets a frozen moment. If panic rises, skip and return; working memory comes back when the alarm stops owning it. You trained retrieval all term — the exam is just retrieval with a stopwatch.',
        },
        {
          kind: 'para',
          text: 'The modern choking literature explains exactly why the freeze happens. Sian Beilock\'s experiments — golf putters under video cameras, students doing arithmetic for money — showed that pressure hurts skilled performers when attention turns inward: experts run on compiled procedures, and consciously monitoring the mechanics ("keep the elbow in, watch the clubface") re-inserts the step-by-step control the skill has outgrown. Among students, it was the HIGH working-memory ones who fell furthest under pressure — the very resource pressure floods is the one their strategies lean on. The practical defences follow from the mechanism: practise under mild, staged pressure so the exam feels familiar rather than novel; use pre-performance routines to park attention on one controllable cue; and reappraise the symptoms as readiness, because a body mobilised for action is only mislabelled as disaster.',
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
          { term: 'hard-start, jump-to-easy', def: 'Attempting the hardest question first when the format allows, then switching to easier ones so the diffuse mode keeps incubating it.' },
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
            {
              q: 'A paper scores +1 for a correct multiple choice and −0.25 for a wrong one (4 options). You can eliminate two options. The expected value of guessing is:',
              options: ['negative — leave it blank', 'exactly zero — it makes no difference', 'positive: 0.5 × 1 − 0.5 × 0.25 = +0.375, so answer', 'impossible to compute without knowing the topic'],
              answer: 2,
              explain: 'With two options eliminated the guess is a coin flip that pays 1 against 0.25 — expected value +0.375. Under fractional penalties, narrowing always beats blanking.',
            },
            {
              q: 'The Benjamin, Cavell and Shallenberger (1984) review of answer-changing found that:',
              options: ['changes go wrong-to-right about twice as often as right-to-wrong — the first-instinct folklore is false', 'first answers are almost always best — never change', 'changes make no difference on average', 'only top students benefit from changing answers'],
              answer: 0,
              explain: 'Across 33 studies, changes improved scores about two-to-one — provided the change is made for a specific reason (misread, recalled, units error).',
            },
            {
              q: 'Beilock\'s choking experiments showed pressure hurts skilled performers mainly because:',
              options: ['adrenaline damages muscle memory', 'attention turns inward to step-by-step mechanics the skill has outgrown', 'working memory expands and overwhelms the checker', 'the brain runs out of glucose'],
              answer: 1,
              explain: 'Experts run on compiled procedures; consciously monitoring mechanics re-inserts novice-level control — which is why practising under mild pressure and parking attention on one cue defends the skill.',
            },
            {
              q: 'A 90-point paper allows 180 minutes and you reserve 20 minutes for checking. The per-point budget is about:',
              options: ['1 minute per point', '1.8 minutes per point', '2.5 minutes per point', '3 minutes per point'],
              answer: 1,
              explain: '(180 − 20) / 90 ≈ 1.78 — reserve the buffer first, then divide what remains by the marks; every question gets a ceiling in the same currency.',
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
    // X75 subject-depth pass (2026-10-29, loop 483894 run 1): Make It Stick Ch6
    // structural mirroring — the learning-styles myth anatomy; carved against
    // x52's quiz-item fact, metacognition-calibration and mnemonics (carving in
    // the x75 header). Registered LAST so it lands as Study Skills Ch1 §1.9.
    ...x75SubjectDepthPassTopics,
  ],
}

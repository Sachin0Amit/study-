/**
 * X75 — SUBJECT-DEPTH pass (2026-10-29, loop job 483894, run 1):
 * "The Learning-Styles Myth: Why Teaching to Your Style Fails"
 *
 * SOURCE: structural mirroring of Brown, Roediger & McDaniel, Make It Stick
 * (Harvard University Press, 2014) Chapter 6 "Get Beyond Learning Styles",
 * cross-verified against Pashler, McDaniel, Rohrer & Bjork (2008, PSPI 9(3),
 * "Learning Styles: Concepts and Evidence"), Coffield et al. (2004, 71-model
 * review), Massa & Mayer (2006), Rogowsky, Calhoun & Tallal (2015) — via the
 * publisher TOC + companion-site chapter summaries (internet-research-only;
 * no PDF downloaded this run).
 *
 * CARVING (zero-repetition): x52's self-efficacy quiz item already states the
 * one-line fact ("no empirical evidence for teaching to learning styles") —
 * this lesson owns the FULL anatomy of the myth (models, meshing hypothesis,
 * the methodological bar, the failed proper tests, why it persists, what to
 * do instead). Carved against fnd-metacognition-calibration (owns monitoring
 * accuracy), fnd-mnemonics-memory-palace (owns encoding strategies), and the
 * education book's pedagogy lessons (instruction design, not learner myths).
 * Registered at the END of foundation-learning.ts topics so it lands as
 * Study Skills Ch1 §1.9 without renumbering any existing section.
 */

import type { KnowledgeTopic } from '../types'

export const x75SubjectDepthPassTopics: KnowledgeTopic[] = [
  {
    id: 'fnd-learning-styles-myth',
    title: 'The Learning-Styles Myth: Why Teaching to Your Style Fails',
    domain: 'Foundation Learning',
    field: 'Study Skills & Memory',
    branch: 'Learning Science',
    tier: 'intermediate',
    concepts: [
      'The appeal of learning styles',
      'VARK, VAK and the Dunn and Dunn model',
      'The meshing hypothesis',
      'Coffield\'s 71-model review',
      'Pashler\'s verdict: the missing experiments',
      'Massa and Mayer: a proper test that failed',
      'Why the myth persists',
      'What works instead: match the material, encode multiply',
    ],
    words: 1808,
    readMins: 9,
    addedOn: '2026-10-29',
    blocks: [
      {
        kind: 'para',
        text: 'Ask a study group how they learn and you will hear it within minutes: "I\'m a visual learner", "I\'m auditory — I need to hear it", "kinesthetic, I have to do it". The learning-styles idea says every person has a preferred sensory channel, that this style can be measured with a questionnaire, and — the load-bearing claim — that instruction MATCHED to the style produces better learning. The first two claims are partly real: preferences exist, and questionnaires can catalogue them. The third is the myth. Decades of research have failed to find the matched benefit, and the properly designed experiments that could have found it came back empty. Make It Stick devotes a whole chapter to escaping this idea, and the escape is worth more than the myth ever gave: study time is too scarce to spend on channel-matching that does nothing.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The styles myth is not a harmless label — it quietly misdirects effort. The "auditory learner" who avoids diagrams is avoiding the best representation of circuits and anatomy; the "visual learner" who skips practice problems is skipping the retrieval that would actually build the skill. Knowing the myth protects you from bad study advice at exactly the moment you are most vulnerable to it: when learning feels hard and any reorganisation feels like progress.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The catalogue is large. The VARK questionnaire (Fleming, 1992) sorts learners into Visual, Aural, Read/write and Kinesthetic; its three-channel ancestor VAK is the version most schools meet. The Dunn and Dunn model, built from the 1970s on, rates learners on around twenty-one elements spanning environment, emotion, sociology and physiology. Kolb\'s experiential cycle and Honey and Mumford\'s activist-reflector-theorist-pragmatist styles dominate management training. When Coffield and colleagues surveyed the field in 2004 for the Learning and Skills Research Centre, they counted seventy-one such models — and found that only a minority had even adequate evidence for their own reliability and validity, before any question of practical benefit. A taxonomy that cannot measure itself consistently cannot prescribe teaching.',
      },
      {
        kind: 'para',
        text: 'The prescription the whole industry rests on has a name: the meshing hypothesis. It claims that a visual learner learns better from visual instruction, an auditory learner from spoken instruction, and so on — that the channel of delivery must mesh with the channel of the learner. Pashler, McDaniel, Rohrer and Bjork put the hypothesis to the test of logic in their 2008 review for Psychological Science in the Public Interest, and their analysis remains the definitive frame. To PROVE meshing, a study needs a specific design: classify learners into styles, teach each style-group through both matched and mismatched formats, and look for the crossover interaction — visual learners beating auditory learners under visual teaching AND losing under auditory teaching. Anything less cannot distinguish meshing from ordinary format effects. After sweeping the literature, their verdict was withering: virtually no studies had used the proper design, and the handful that did found no meshing effect at all.',
      },
      {
        kind: 'para',
        text: 'The proper tests, when run, failed on cue. Massa and Mayer (2006) took verbalizers and visualizers and taught them with verbal and pictorial multimedia lessons — the crossover design the hypothesis demands. Nothing meshed: the format effects were the same for both kinds of learners, and where one format won, it won for everyone. Rogowsky, Calhoun and Tallal (2015) did it for the most popular pairing of all — self-declared auditory learners with audiobooks, visual learners with e-text — and comprehension showed no interaction. Preferences were real; the benefit of honouring them was not. Meanwhile the genuinely robust format findings point the other way: words plus relevant pictures beat words alone for nearly everyone (Mayer\'s multimedia principle, built on Paivio\'s dual-coding theory), because two memory codes are better than one — which is the opposite of committing to a single channel.',
      },
      {
        kind: 'para',
        text: 'Why does the myth survive its own evidence? Partly Barnum psychology: style labels are flattering, vague enough to fit anyone, and confirmation bias collects every hit ("I did enjoy that video") while forgetting the misses. Partly the industry: questionnaires, in-service workshops and branded programmes create careers and invoices around the idea. Partly a kernel of truth that gets stretched: people genuinely differ — in spatial ability, in prior knowledge, in reading fluency — and ability differences are real. But "I have a preference" and "I learn better when taught to my preference" are different claims wearing the same clothes, and only the first survives testing.',
      },
      {
        kind: 'para',
        text: 'What works instead is almost boringly materialist: the modality should match the MATERIAL, not the learner. Circuits, anatomy and geography are spatial — draw them; arguments and poetry are verbal — read and hear them; music is aural — listen; laboratory procedures are kinesthetic — do them. Then encode important content multiply: read it, sketch it, say it aloud, explain it to a friend, because every extra code is another retrieval route. And when learning feels wrong for your "style", that difficulty is usually the desirable kind — the feeling of effort that predicts durable learning, not a signal to switch channels. The lessons this library has already built carry the real load here: retrieval practice, spacing and interleaving improve learning for every style ever measured, which is exactly why they are the recommendations that survive.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a student labelled "auditory learner" by a VARK questionnaire is preparing for a circuit-analysis test and has been avoiding the circuit diagrams, planning to re-listen to lecture recordings instead. Evaluate the plan.',
        'Recall the governing ideas: the meshing hypothesis has no experimental support; modality should match the material; encoding in multiple codes beats single-channel study.',
        'Apply: circuits are spatial content, so the diagrams ARE the material — she redraws every circuit from memory, annotates current directions, and narrates the analysis aloud (verbal code) while checking against the worked solutions; recordings become background for the verbal layer, not the main meal.',
        'State the result: the "style" label is retired as a study-planning tool; the plan follows the content\'s structure and adds retrieval (redrawing from memory) plus dual coding (diagram + narration) — the interventions with actual evidence.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Exam preparation: choose formats by question type — past papers for problem-solving subjects, sketch-and-explain for anatomy and geography, aloud-recitation for law and literature.',
        'Classroom study: teachers who dropped style-matching and switched the freed minutes to retrieval practice and spacing report the gains the styles programme never delivered.',
        'Self-directed learning: when a course offers only one format, self-generate the missing code — turn a text chapter into a diagram, or a diagram into a spoken explanation.',
        'Training design at work: budget decisions between "style-matched modules" and "practice-and-feedback modules" should follow the evidence every time — the second one.',
        'Tutoring: a tutor\'s first diagnostic question is not "what is your style?" but "what does this material look like on the exam?"',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Pitfall one: using the myth to avoid necessary formats — the auditory learner dodging diagrams, the visual learner dodging algebra\'s symbols. Pitfall two: confusing preference with performance — enjoying a format predicts nothing about learning from it. Pitfall three: overcorrecting into format-anarchy — abandoning a working method because it "isn\'t my style" mid-course, when consistency and retrieval matter more. And pitfall four: the marketing version — paying for a styles assessment; seventy-one competing models cannot even agree on your style, let alone prove it helps.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Learning styles', def: 'The claim that each learner has a preferred sensory channel and learns best through it — preferences real, benefits unproven.' },
        { term: 'VARK', def: 'Fleming\'s 1992 questionnaire sorting learners into Visual, Aural, Read/write and Kinesthetic preferences.' },
        { term: 'Meshing hypothesis', def: 'The load-bearing claim: instruction matched to the learner\'s style produces better learning — the part that failed testing.' },
        { term: 'Crossover interaction', def: 'The experimental signature meshing requires: each style-group winning under its matched format and losing under the mismatched one.' },
        { term: 'Dual coding', def: 'Paivio\'s principle that verbal and visual memory codes together beat either alone.' },
        { term: 'Multimedia principle', def: 'Mayer\'s finding that words plus relevant pictures outperform words alone — for every learner, not one style.' },
        { term: 'Modality-material match', def: 'The evidence-based alternative: choose the channel the CONTENT demands, then add more codes.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The meshing hypothesis claims that:',
          options: ['everyone learns best with pictures', 'a learner\'s preferred sensory channel is the fastest route to mastery', 'instruction matched to a learner\'s style produces better learning than mismatched instruction', 'learning speed is fixed at birth'],
          answer: 2,
          explain: 'Matched instruction, better outcomes — the specific, testable claim, and the one that failed the proper experiments.',
        },
        {
          q: 'Pashler, McDaniel, Rohrer and Bjork (2008) concluded that:',
          options: ['the meshing hypothesis is proven for VAK but not VARK', 'virtually no studies used the proper crossover design, and the few that did found no meshing effect', 'learning styles exist but cannot be measured', 'visual learners slightly outperform auditory ones'],
          answer: 1,
          explain: 'The review\'s core finding: the methodological bar was almost never met, and where it was, the interaction did not appear.',
        },
        {
          q: 'Massa and Mayer (2006) taught verbalizers and visualizers with verbal and pictorial lessons. The result was:',
          options: ['a clean crossover — each group won with its matched format', 'visual formats won for everyone, with no style-by-format interaction', 'verbal formats won for everyone', 'the study failed to recruit enough participants'],
          answer: 1,
          explain: 'Format effects were main effects, not interactions — the same format helped both kinds of learner, which is the opposite of meshing.',
        },
        {
          q: 'A student avoids sketching anatomy diagrams because her questionnaire says "auditory learner". The evidence-based correction is:',
          options: ['respect her preference — audio lectures will work as well', 'the modality should match the material: anatomy is spatial, so the diagrams stay', 'alternate: diagrams one week, recordings the next', 'she should take a different questionnaire'],
          answer: 1,
          explain: 'Match the channel to the CONTENT — spatial material needs spatial encoding regardless of the learner\'s stated preference.',
        },
        {
          q: 'Coffield and colleagues\' 2004 review of learning-styles models found:',
          options: ['strong support for the top five models', 'seventy-one models, with only a minority showing even adequate psychometric evidence for themselves', 'that styles are stable across the lifespan', 'that styles predict job performance'],
          answer: 1,
          explain: 'Before any question of teaching benefit, most models could not even reliably measure what they claimed to measure.',
        },
        {
          q: 'According to the multimedia principle and dual coding, the best single study adjustment for difficult new material is:',
          options: ['study it only in your preferred channel', 'study it in silence to avoid interference', 'encode it in both words and pictures, then practise retrieving it', 'read it faster to build fluency'],
          answer: 2,
          explain: 'Two memory codes beat one for nearly every learner, and retrieval is what converts codes into durable learning — the evidence-backed pair.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'With the styles myth cleared away, the interventions with real evidence are already in this chapter: start with active recall and spaced repetition, add interleaving for discrimination, and use metacognitive calibration to check the plan is working. For the design of instruction itself, the education book\'s pedagogy lessons carry the constructive side of this argument.',
      },
    ],
  },
]

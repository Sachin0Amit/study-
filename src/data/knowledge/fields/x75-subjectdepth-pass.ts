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
      'Why the idea appeals',
      'VARK, VAK and the Dunn and Dunn model',
      'From clinic to classroom: how the belief spread',
      'The meshing hypothesis',
      'Pashler\'s verdict: the missing experiments',
      'Massa and Mayer: a proper test that failed',
      'Why the myth persists',
      'One brain, many routes: why multisensory wins',
      'What works instead: match the material, encode multiply',
    ],
    words: 2996,
    readMins: 15,
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
        text: 'Part of the appeal is structural: the story sells a diagnosis and a remedy in one breath. Learning is hard and effort is invisible, and "I\'m a visual learner" turns a vague struggle into a fixed trait with a ready-made plan. It gives teachers an orderly rule for differentiation, and it flatters: the problem sits in the match, never the method. Its authority is borrowed from an obvious truth — vision and hearing differ — stretched one step past the evidence into "learning itself is channel-bound". A real observation, a plausible mechanism, a practical promise — the classic shape of a myth.',
      },
      {
        kind: 'para',
        text: 'The catalogue is large. The VARK questionnaire (Fleming, 1992) sorts learners into Visual, Aural, Read/write and Kinesthetic; its three-channel ancestor VAK is the version most schools meet. The Dunn and Dunn model, built from the 1970s on, rates learners on around twenty-one elements spanning environment, emotion, sociology and physiology. Kolb\'s experiential cycle and Honey and Mumford\'s activist-reflector-theorist-pragmatist styles dominate management training. When Coffield and colleagues surveyed the field in 2004 for the Learning and Skills Research Centre, they counted seventy-one such models — and found that only a minority had even adequate evidence for their own reliability and validity, before any question of practical benefit. A taxonomy that cannot measure itself consistently cannot prescribe teaching.',
      },
      {
        kind: 'para',
        text: 'The idea has a long pedigree, and its history explains its grip. In the 1920s and 1930s remedial clinics taught delayed readers by VAKT — visual, auditory, kinesthetic, tactile — Grace Fernald\'s method, published in 1943: the extra channels were scaffolding, faded as normal reading took over. From the 1970s the Dunn and Dunn model carried styles into classrooms; Kolb\'s 1984 cycle into management training; Fleming\'s 1992 VARK questionnaire made self-diagnosis a five-minute exercise. Belief hardened into orthodoxy. Dekker and colleagues (2012) found 93% of surveyed UK and Dutch teachers endorsing the claim — the most believed neuromyth on their list. Newton and Salvi\'s 2020 review pooled 15,045 educators (2009 to early 2020): 89.1% believed teaching should match styles, no decline across the decade — trainees as firm as veterans: acquired during teacher training.',
      },
      {
        kind: 'para',
        text: 'The prescription the whole industry rests on has a name: the meshing hypothesis. It claims that a visual learner learns better from visual instruction, an auditory learner from spoken instruction, and so on — that the channel of delivery must mesh with the channel of the learner. Pashler, McDaniel, Rohrer and Bjork put the hypothesis to the test of logic in their 2008 review for Psychological Science in the Public Interest, and their analysis remains the definitive frame. To PROVE meshing, a study needs a specific design: classify learners into styles, teach each style-group through both matched and mismatched formats, and look for the crossover interaction — visual learners beating auditory learners under visual teaching AND losing under auditory teaching. Anything less cannot distinguish meshing from ordinary format effects. After sweeping the literature, their verdict was withering: virtually no studies had used the proper design, and the handful that did found no meshing effect at all.',
      },
      {
        kind: 'para',
        text: 'Pashler\'s review turned the vague enthusiasm into a scored experiment. The design: classify learners with a credible instrument, assign each style-group to matched and mismatched formats, measure learning — not enjoyment. The prediction is sharp and symmetric: visual learners must gain more from visual teaching than auditory teaching, auditory learners must do the opposite, both format gaps of the same order. Anything less is a main effect of format, not meshing. Sweeping the literature, the review found the bar almost never met — most studies never used the crossover design, and the few that did found no interaction. The null replicated: Rogowsky\'s audiobook-versus-e-text trial (2015) and the same team\'s 2020 follow-up.',
      },
      {
        kind: 'figure',
        caption:
          'The crossover design Pashler\'s verdict demands, and its two outcomes. Left: both learner groups meet both formats — the rose cells are where meshing must win. Right: meshing predicts crossing lines; a main effect of format draws parallel lines — one format wins for everyone. Massa and Mayer (2006) and Rogowsky et al. (2015) measured parallel lines.',
        sketchImage: '/diagrams/learning-styles-crossover-sketch.jpg',
        sketchCaption:
          'Student Laboratory Notebook: a 2×2 crossover grid with rose circles on the matched cells; beside it, meshing\'s crossing lines versus the experiments\' parallel lines.',
        afterConcept: 5,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="The crossover design and its two possible outcomes: meshing predicts crossing lines, the data show parallel lines">
  <text x="230" y="40" font-family="Georgia, 'Times New Roman', serif" font-size="17" fill="currentColor" text-anchor="middle" font-style="italic">the crossover design</text>
  <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round">
    <path d="M120 118 Q270 115 420 119"/>
    <path d="M121 208 Q270 205 419 209"/>
    <path d="M120 298 Q270 295 420 299"/>
    <path d="M120 118 Q117 208 121 298"/>
    <path d="M270 118 Q267 208 271 298"/>
    <path d="M420 118 Q417 208 421 298"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="0.9" opacity="0.45" stroke-linecap="round">
    <path d="M123 121 Q270 118 417 122"/>
    <path d="M124 211 Q270 208 416 212"/>
    <path d="M123 301 Q270 298 417 302"/>
    <path d="M117 121 Q114 208 118 295"/>
    <path d="M267 121 Q264 208 268 295"/>
    <path d="M417 121 Q414 208 418 295"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" fill="currentColor">
    <text x="195" y="104" font-size="14" text-anchor="middle" font-style="italic">visual teaching</text>
    <text x="345" y="104" font-size="14" text-anchor="middle" font-style="italic">auditory teaching</text>
    <text x="108" y="168" font-size="14" text-anchor="end">visual learners</text>
    <text x="108" y="258" font-size="14" text-anchor="end">auditory learners</text>
  </g>
  <g fill="none" stroke="#e11d48" stroke-width="2.4" stroke-linecap="round">
    <circle cx="195" cy="163" r="17"/>
    <circle cx="345" cy="253" r="17"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" text-anchor="middle">
    <text x="195" y="169" font-size="15" fill="#e11d48">+</text>
    <text x="345" y="259" font-size="15" fill="#e11d48">+</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" fill="#8a8a93" font-size="12.5">
    <text x="230" y="330" text-anchor="middle">the rose cells must win — or meshing fails</text>
    <text x="230" y="350" text-anchor="middle">random assignment · learning measured, not enjoyment</text>
  </g>
  <text x="670" y="40" font-family="Georgia, 'Times New Roman', serif" font-size="17" fill="currentColor" text-anchor="middle" font-style="italic">the two possible outcomes</text>
  <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round">
    <path d="M502 100 Q499 218 503 330"/>
    <path d="M502 332 Q600 336 700 331 Q790 336 856 331"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="0.9" opacity="0.5" stroke-linecap="round">
    <path d="M506 103 Q503 218 507 327"/>
    <path d="M502 336 Q600 340 700 335 Q790 340 853 335"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" fill="currentColor">
    <text x="478" y="215" font-size="14" font-style="italic" text-anchor="middle" transform="rotate(-90 478 215)">learning outcome</text>
    <text x="856" y="356" font-size="14" font-style="italic" text-anchor="end">instruction format</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" fill="#8a8a93" font-size="12.5" text-anchor="middle">
    <text x="590" y="352">visual</text>
    <text x="770" y="352">auditory</text>
  </g>
  <g fill="none" stroke="#e11d48" stroke-width="2.6" stroke-linecap="round">
    <path d="M590 152 Q680 212 770 274"/>
    <path d="M590 274 Q680 214 770 152"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" fill="#e11d48" font-size="12.5">
    <text x="583" y="148" text-anchor="end">visual learners</text>
    <text x="583" y="290" text-anchor="end">auditory learners</text>
    <text x="680" y="92" text-anchor="middle" font-size="14.5">meshing predicts — crossing lines</text>
  </g>
  <g fill="none" stroke="#059669" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="9 7">
    <path d="M590 190 Q680 214 770 236"/>
    <path d="M590 240 Q680 264 770 286"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" fill="#059669" font-size="14.5" text-anchor="middle">
    <text x="680" y="392">the data show — parallel lines</text>
  </g>
  <text x="680" y="412" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93" text-anchor="middle">a main effect of format: one format wins for everyone</text>
</svg>`,
      },
      {
        kind: 'derivation',
        title: 'Scoring the crossover: why parallel lines refute meshing',
        statement:
          'Why parallel lines refute meshing: the experiment\'s single interaction contrast equals the sum of the two format gaps — meshing predicts it large and positive with crossing lines; a main effect gives zero.',
        prerequisites: ['The meshing hypothesis', 'The crossover design'],
        steps: [
          {
            label: 'Step 1: Write the outcome table',
            formula: '$$x_{VV},\\;x_{VA},\\;x_{AV},\\;x_{AA}$$',
            explanation:
              'Each x is a style-group\'s mean score under one format (learners × teaching): credible instrument, random assignment, learning measured.',
          },
          {
            label: 'Step 2: Score each group\'s matched-format gap',
            formula: '$$g_{\\text{vis}} = x_{VV} - x_{VA}, \\qquad g_{\\text{aud}} = x_{AA} - x_{AV}$$',
            explanation:
              'How much better each group learns under its matched format — meshing asserts both gaps positive.',
          },
          {
            label: 'Step 3: Read the slopes',
            formula: '$$\\text{slope}_{\\text{vis}} = -g_{\\text{vis}}, \\qquad \\text{slope}_{\\text{aud}} = +g_{\\text{aud}}$$',
            explanation:
              'Outcome against format: the visual learners\' line falls, the auditory learners\' rises — opposite-signed slopes, the rose crossing lines.',
          },
          {
            label: 'Step 4: The interaction contrast',
            formula: '$$D = (x_{VV} - x_{VA}) - (x_{AV} - x_{AA}) = g_{\\text{vis}} + g_{\\text{aud}}$$',
            explanation:
              'A difference of differences: a main effect of format shifts both rows equally and cancels — D = 0, parallel lines.',
          },
          {
            label: 'Step 5: Score the Massa–Mayer pattern (illustrative)',
            formula: '$$D = (72 - 58) - (71 - 57) = 14 - 14 = 0$$',
            explanation:
              'Illustrative Massa–Mayer means: the visual format won for both groups equally — D = 0, parallel lines. Meshing would need the auditory row to slope the other way: D = 28.',
          },
        ],
        result:
          'Meshing requires D > 0 with opposite-signed slopes — crossing lines. The proper tests returned D ≈ 0: parallel lines, a format main effect helping everyone equally — the interaction the industry sells, absent where the design could detect it.',
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
        text: 'The brain-level story points the same way. Meaning is not warehoused in one sensory silo: visual and auditory cortices feed convergent, amodal representations, and memory builds on that convergence. Shams and Seitz (2008) drew the conclusion: multisensory learning generally beats unisensory — information through two channels is remembered better than through either alone. That cuts against the prescription: if two codes beat one for everyone, restricting a learner to their "best" channel removes the redundancy that helps. The differences that survive measurement are ability differences — spatial ability, verbal fluency, prior knowledge — they change how much support a learner needs, not which channel wins: the spatially weak need more visual scaffolding, not less.',
      },
      {
        kind: 'para',
        text: 'What works instead is almost boringly materialist: the modality should match the MATERIAL, not the learner. Circuits, anatomy and geography are spatial — draw them; arguments and poetry are verbal — read and hear them; music is aural — listen; laboratory procedures are kinesthetic — do them. Then encode important content multiply: read it, sketch it, say it aloud, explain it to a friend, because every extra code is another retrieval route. And when learning feels wrong for your "style", that difficulty is usually the desirable kind — the feeling of effort that predicts durable learning, not a signal to switch channels. The lessons this library has already built carry the real load here: retrieval practice, spacing and interleaving improve learning for every style ever measured, which is exactly why they are the recommendations that survive.',
      },
      {
        kind: 'figure',
        caption:
          'Match the material, then encode multiply. Circuits, anatomy and geography are spatial — draw them; arguments and poetry are verbal — read and hear them; music is aural — listen; laboratory procedures are kinesthetic — do them. Every extra code is another retrieval route, and two codes beat one for every learner (dual coding; the multimedia principle).',
        sketchImage: '/diagrams/match-material-encode-multiply-sketch.jpg',
        sketchCaption:
          'Student Laboratory Notebook: material cards mapped to "draw them", "read and hear them", "listen" and "do them"; beside it a four-station loop — read it, sketch it, say it aloud, explain it to a friend — around the badge "another retrieval route".',
        afterConcept: 9,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Match the material: four material types mapped to their best channel, then an encode-multiply loop of read it, sketch it, say it aloud, explain it to a friend">
  <text x="235" y="40" font-family="Georgia, 'Times New Roman', serif" font-size="17" fill="currentColor" text-anchor="middle" font-style="italic">match the material</text>
  <g font-family="Georgia, 'Times New Roman', serif" fill="currentColor" font-size="13.5">
    <text x="44" y="92">circuits, anatomy, geography — spatial</text>
    <text x="44" y="178">arguments and poetry — verbal</text>
    <text x="44" y="264">music — aural</text>
    <text x="44" y="350">laboratory procedures — kinesthetic</text>
  </g>
  <g fill="none" stroke-width="2.4" stroke-linecap="round">
    <path d="M310 88 Q330 86 352 88" stroke="#e11d48"/>
    <path d="M310 174 Q330 172 352 174" stroke="#059669"/>
    <path d="M310 260 Q330 258 352 260" stroke="#d97706"/>
    <path d="M310 346 Q330 344 352 346" stroke="#8a8a93"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="13.5" text-anchor="middle" font-style="italic">
    <text x="392" y="93" fill="#e11d48">draw them</text>
    <text x="400" y="179" fill="#059669">read and hear them</text>
    <text x="392" y="265" fill="#d97706">listen</text>
    <text x="392" y="351" fill="#8a8a93">do them</text>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.45" stroke-linecap="round">
    <path d="M313 91 Q332 89 349 91"/>
    <path d="M313 177 Q332 175 349 177"/>
    <path d="M313 263 Q332 261 349 263"/>
    <path d="M313 349 Q332 347 349 349"/>
  </g>
  <text x="235" y="404" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93" text-anchor="middle">the channel follows the content — not the questionnaire</text>
  <text x="672" y="40" font-family="Georgia, 'Times New Roman', serif" font-size="17" fill="currentColor" text-anchor="middle" font-style="italic">encode multiply</text>
  <g fill="none" stroke="#8a8a93" stroke-width="2" stroke-linecap="round">
    <path d="M672 96 Q760 108 786 196"/>
    <path d="M782 258 Q748 330 664 340"/>
    <path d="M586 326 Q546 262 560 190"/>
    <path d="M582 128 Q614 96 660 94"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.45" stroke-linecap="round">
    <path d="M672 100 Q755 112 781 194"/>
    <path d="M778 256 Q746 326 664 336"/>
    <path d="M590 322 Q552 262 564 192"/>
    <path d="M586 132 Q616 100 658 98"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" fill="none" stroke-width="2.3" stroke-linecap="round">
    <circle cx="672" cy="92" r="26" stroke="#e11d48"/>
    <circle cx="790" cy="226" r="26" stroke="#059669"/>
    <circle cx="672" cy="344" r="26" stroke="#d97706"/>
    <circle cx="560" cy="164" r="26" stroke="#8a8a93"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" text-anchor="middle" fill="currentColor">
    <text x="672" y="97">read it</text>
    <text x="790" y="231">sketch it</text>
    <text x="672" y="349">say it aloud</text>
    <text x="560" y="151">explain it</text>
    <text x="560" y="169">to a friend</text>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" text-anchor="middle">
    <text x="672" y="212" font-size="14" fill="#059669" font-style="italic">another retrieval route</text>
    <text x="672" y="236" font-size="12.5" fill="#8a8a93">with every extra code</text>
  </g>
  <text x="672" y="404" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93" text-anchor="middle">two codes beat one — for every learner</text>
</svg>`,
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
        { term: 'Neuromyth', def: 'A popular belief about the brain that outlives the evidence — Dekker (2012) found learning styles the most believed: 93% of surveyed teachers.' },
        { term: 'Interaction contrast', def: 'The difference-of-differences isolating a style-by-format interaction; meshing needs D > 0 with crossing lines, and the proper tests found D ≈ 0.' },
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
        {
          q: 'Newton and Salvi\'s 2020 review pooled surveys of 15,045 educators from 2009 to early 2020. Belief that teaching should match learning styles was found in about:',
          options: ['89% — nearly nine in ten', '12% — a fringe minority', '41% — roughly a third', '100% of teachers'],
          answer: 2,
          explain: '89.1% — trainees believed it as firmly as veterans, so training was not eroding the belief.',
        },
        {
          q: 'In a crossover design, visual learners average 72 under visual teaching and 58 under auditory; auditory learners average 71 and 57. The contrast D and verdict are:',
          options: ['D = 28 — meshing confirmed', 'D = 0 — a main effect of format, no meshing', 'D = 14 — weak support for styles', 'D cannot be computed without a styles questionnaire'],
          answer: 1,
          explain: 'The gaps cancel: (72 − 58) − (71 − 57) = 14 − 14 = 0 — parallel lines, the visual format helping both groups equally, the opposite of meshing.',
        },
        {
          q: 'Shams and Seitz (2008) concluded multisensory learning generally beats unisensory. That cuts against the styles prescription because:',
          options: ['it shows each learner should train their weakest sense', 'restricting a learner to one preferred channel removes the multi-code redundancy that helps everyone', 'senses cannot be combined in real classrooms', 'it applies only to visual learners'],
          answer: 1,
          explain: 'If two channels beat one for everyone, honouring a single "style" removes the redundancy that builds durable memory — add codes, do not ration them.',
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

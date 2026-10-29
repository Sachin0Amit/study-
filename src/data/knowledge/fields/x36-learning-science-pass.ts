import type { KnowledgeTopic } from '../types'

/** Expansion pass X36 (2026-10-25): the learning-science onboarding pass.
 *  Domain thinness audit: Foundation Learning owned only 8 authored topics —
 *  the thinnest true KU domain (spaced repetition, active recall, interleaving,
 *  SQ3R, deliberate practice, note-taking, exam-day strategy, mental math).
 *  Those lessons own the SCHEDULING and PRACTICE layer. This pass adds the
 *  missing ENCODING / AUTOMATION / SELF-MONITORING / SOCIAL / SCHOLARLY layers:
 *
 *  1. fnd-mnemonics-memory-palace — mnemonic ENCODING devices (acronym,
 *     acrostic, chunking, method of loci, keyword method). Carved against
 *     fnd-spaced-repetition (scheduling reviews) and fnd-active-recall
 *     (retrieval practice): mnemonics are how material is encoded FIRST,
 *     not how it is reviewed.
 *  2. fnd-habits-behavior-design — the AUTOMATION layer (cue-triggered
 *     automaticity, implementation intentions, context design, lapse
 *     recovery). Carved against every-time-management-productivity (planning
 *     days) and fnd-deliberate-practice (quality of practice): this lesson
 *     owns why showing up stops requiring willpower.
 *  3. fnd-metacognition-calibration — the SELF-MONITORING layer (the
 *     five-step self-regulation cycle, fluency illusions, calibration via
 *     predict-then-test). Carved against soc cognitive-biases (judgment
 *     biases generally) and fnd-active-recall (testing-effect mechanics):
 *     this lesson owns judging your OWN learning, not other people's claims.
 *  4. fnd-peer-learning-teaching — the SOCIAL layer (protégé effect,
 *     peer instruction, teach-back ritual). Carved against
 *     every-public-speaking (delivery skills) and fnd-active-recall: this
 *     lesson owns learning FROM explaining, not speaking technique.
 *  5. fnd-reading-scientific-papers — the SCHOLARLY layer (IMRaD
 *     navigation, three-pass reading, evidence credibility). Carved against
 *     research-methodology lessons (designing studies) and
 *     eng-literary-narrative-passages / comprehension lessons (generic
 *     reading strategy): this lesson owns reading PRIMARY literature.
 *
 *  Sources read while writing (legally open):
 *  - OpenStax, Psychology 2e (openstax.org, CC BY 4.0) — §8.4 "Ways to
 *    Enhance Memory": mnemonic devices as aids that organize information for
 *    encoding; acronym (HOMES), acrostic ("Please Excuse My Dear Aunt
 *    Sally"), jingles, chunking, method of loci via Joshua Foer's "Feats of
 *    Memory Anyone Can Do", elaborative rehearsal, the self-reference
 *    effect, and saying words aloud for distinctiveness. Read this pass.
 *  - Dunlosky et al. 2013, "Improving Students' Learning With Effective
 *    Learning Techniques" (Psychological Science in the Public Interest) —
 *    read via the APS summary and PubMed abstract (PMID 26173288): the ten
 *    techniques; practice testing and distributed practice as HIGH utility;
 *    rereading, highlighting and the keyword mnemonic as "surprisingly low
 *    utility" for broad course learning. Cited for the honest limits of
 *    mnemonics and the fluency-illusion argument.
 *  - Gardner, Lally & Wardle 2012, "Making health habitual: the psychology
 *    of 'habit-formation' and general practice" (Br J Gen Pract, PMC3505409,
 *    open access) — habit definition ("actions that are triggered
 *    automatically in response to contextual cues"), the initiation /
 *    learning / stability phases, the ~66-day automaticity plateau from
 *    Lally et al. 2010, and why habits persist after motivation fades.
 *    Read this pass.
 *  - Wieber, Thürmer & Gollwitzer 2015, "Promoting the translation of
 *    intentions into action by implementation intentions" (Front Hum
 *    Neurosci, PMC4500900, CC BY) — the intention–behaviour gap, if–then
 *    plans ("If I encounter situation Y, then I will initiate action Z"),
 *    and reduced activity in effortful-control brain areas. Read this pass.
 *  - The Behavioral Scientist summary of Lally et al. 2010 ("How Long Does
 *    It Take to Form a Habit?") — the 66-day figure is a median of 39
 *    modelled participants, range 18–254 days; a single missed opportunity
 *    moved automaticity by under half a point on the 0–42 Self-Report Habit
 *    Index. Read this pass.
 *  - LibreTexts, Legal Writing Manual (Mangan) §1.6 "Metacognition and
 *    Study Skills" (human.libretexts.org, CC licensed) — metacognition as
 *    "thinking about thinking"; the five steps (assess the task, evaluate
 *    strengths and weaknesses, plan, apply strategies and monitor, reflect
 *    and adjust); beginners overestimating their abilities; retrieval
 *    practice as the calibration instrument. Read this pass.
 *  - Carey, Blackwell & Igel 2020, "Ten simple rules for reading a
 *    scientific paper" (PLOS Comput Biol, PMC7392212, CC BY) — all ten
 *    rules and the six questions, read this pass.
 *  - Keshav 2007, "How to Read a Paper" (ACM SIGCOMM CCR) — the three-pass
 *    approach (5–10 min / up to an hour / 4–5 hours), the five Cs, and the
 *    literature-survey trail. Read via the paper's published summary this
 *    pass.
 *  - Mazur's Peer Instruction (peerinstruction methodology pages and
 *    physport.org method summaries; Lasry 2007, arXiv:physics/0702186,
 *    open access) — the Force Concept Inventory origin story, the
 *    think–vote–discuss cycle, and the finding that clickers confer no
 *    learning advantage over flashcards (the discussion does the work).
 *    Read this pass.
 *  - Fiorella & Mayer 2013, "The relative benefits of learning by teaching
 *    and teaching expectancy" (Contemp Educ Psychol) — expecting-to-teach
 *    versus expecting-to-be-tested, read via the publisher abstract this
 *    pass; Chase et al. 2009, "Teachable Agents and the Protégé Effect"
 *    (open PDF via the Stanford AAA lab) — greater effort for a student one
 *    is responsible for, strongest for lower achievers.
 */

export const x36LearningSciencePassTopics: KnowledgeTopic[] = [
    // ------------------------------------------------------------------
    {
      id: 'fnd-mnemonics-memory-palace',
      title: 'Mnemonics and the Memory Palace: Encoding That Sticks',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Learning Science',
      tier: 'core',
      concepts: [
        'Mnemonics organize information for encoding',
        'Acronyms and acrostics',
        'Chunking: bits within reach',
        'The method of loci',
        'The keyword method and its honest limits',
        'Elaborative rehearsal and the self-reference effect',
        'Encoding first, retrieving second',
      ],
      words: 2792,
      readMins: 14,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Some facts are simply arbitrary: the names of the Great Lakes, the order of operations, the ranks of biological taxonomy, which way to turn a valve. No amount of understanding will generate them — they must be memorized, and the oldest toolkit for that is the mnemonic: any device that organizes information so it encodes cleanly and gives your future self a handle for pulling it back out. OpenStax defines them as memory aids that help organize information for encoding, especially useful for steps, stages, phases and parts of a system. This lesson covers the classic devices, the science of why they work, and — just as important — where they stop working.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'Mnemonics are the difference between a fact you own and a fact you look up forever. They cost minutes to build and pay out for years — but they are also the most misused study tool there is: applied to material that needs understanding, they waste hours creating decorations instead of knowledge. Knowing which jobs they do well is the skill.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'An acronym packs a list into one pronounceable word: HOMES for Huron, Ontario, Michigan, Erie and Superior. An acrostic does the same job with a sentence: "Please Excuse My Dear Aunt Sally" hands you Parentheses, Exponents, Multiplication, Division, Addition, Subtraction in order. Musicians read the treble stave through "Every Good Boy Deserves Fudge", and physics students keep the visible spectrum ordered with Roy G. Biv. Both work by the same mechanism — the arbitrary first-letters become a single meaningful item, and meaning is what memory holds best. The mechanism is measurable, too: first-letter cues reliably boost recall of a list you thought you had lost, because the cue does the searching and the memory only has to match. A jingle adds rhythm and rhyme: "i before e except after c" survives decades after school because sound patterns are themselves retrieval cues.',
        },
        {
          kind: 'para',
          text: 'Chunking attacks the other bottleneck: capacity. George Miller measured the span of working memory at seven items, plus or minus two, in his famous 1956 paper The Magical Number Seven; Nelson Cowan re-analyzed a century of span studies in 2001 and put the practical modern estimate nearer four. Organizing information into manageable bits or chunks lets those few slots hold packages instead of details — a phone number read as 987 654 3210 is three chunks rather than ten loose digits, and a chess master sees one defended king-side pattern where a novice sees thirty-two separate pieces (Chase and Simon filmed exactly this difference at Carnegie Mellon in 1973). Every mnemonic is secretly a chunking machine: ten unrelated facts collapse into one image, one route, or one sentence.',
        },
        {
          kind: 'para',
          text: 'The heavyweight has the best origin story in psychology. Cicero tells it in De Oratore (55 BCE): the poet Simonides of Ceos stepped outside a banquet hall in Thessaly moments before its roof collapsed, and when the grieving families could not tell one crushed body from another, he identified each guest by remembering where they had been sitting. From that grim inventory the Greeks drew a general law — place and order carry information better than effort alone — and the method of loci was born. Roman rhetoricians turned it into standard training equipment: Quintilian describes orators walking an imaginary building, nailing each part of a speech to a column or a niche so nothing could come out of order. Twenty-four centuries later, every finalist at the World Memory Championship is still using a version of the Simonides dining room.',
        },
        {
          kind: 'para',
          text: 'The method of loci — the memory palace — is the heavyweight. You take a route you know by heart, your childhood home say, and place vivid images of each item at a fixed spot along it: laundry detergent foaming in the hallway, eggs nested in the umbrella stand. At recall you walk the route mentally and collect the images. The technique is ancient — classical orators delivered speeches this way — and it works because spatial memory is enormous and automatic: you never practiced remembering where your kitchen is. Joshua Foer, who documented his year of memory training culminating in winning the U.S. Memory Championship, built his entire competitive repertoire on this single idea, and OpenStax points to his talks as the modern popularization. And what the athletes claim, brain imaging has now measured: Eleanor Maguire and colleagues scanned eight superior memorizers for Nature Neuroscience in 2002 and found structurally ordinary brains — no enlarged hippocampus, nothing exotic — but during recall their equipment lit up the same spatial-navigation circuitry the rest of us use to find our way around a city. The athletes were not born different; they had deliberately recruited the oldest memory technology there is.',
        },
        {
          kind: 'para',
          text: 'Building a palace that survives contact with an exam takes five deliberate moves. Pick a route of ten to twenty fixed spots you could walk blindfolded — your front door to your kitchen is ideal, because the order of rooms is knowledge you already own. Number the spots the same way every time: one, the doormat; two, the coat hook; three, the hallway; four, the umbrella stand; five, the kitchen counter; six, the kitchen sink. Walk the empty route twice before storing anything in it, so the addresses themselves are solid. Then park exactly one vivid image at each spot — exaggerated, moving, interacting with its location, ideally absurd: detergent foaming over the hallway, not merely standing in it. Finally, test the walk: an hour later, then again the next day, stroll the route on your commute and read the images back. One image per spot is the rule — a crowded scene blurs into a single vague memory, which is precisely what you were trying to avoid.',
        },
        {
          kind: 'figure',
          caption: 'The method of loci: one walk through the palace. Six fixed spots from the worked example, in route order — front door, coat hook, hallway, umbrella stand, kitchen counter, kitchen sink — each holding exactly one vivid image: soap on the doormat, mangoes swinging from the coat hook, laundry detergent foaming in the hallway, eggs nested in the umbrella stand, bananas marching on the counter, a milk carton diving into the sink. The emerald line is the encoding walk (store one image per locus); the rose line is the recall walk — same automatic route, images collected as you pass.',
          sketchImage: '/diagrams/memory-palace-sketch.jpg',
          sketchCaption: 'Student Laboratory Notebook: floor plan of a memory palace — a corridor walk from the front door to the kitchen sink with six numbered loci; a bar of soap oozing foam on the doormat, mangoes swinging from the coat hook, laundry detergent foaming in the hallway, eggs nested in the umbrella stand, bananas marching on the kitchen counter, a milk carton diving into the sink; dashed arrows marking the encode and recall walks; labels in neat handwriting: method of loci, one vivid image per locus.',
          afterConcept: 4,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="The memory palace: method of loci — a corridor walk from the front door to the kitchen sink with six numbered loci, one vivid image each">
  <!-- title + legend -->
  <text x="74" y="84" font-family="Georgia, 'Times New Roman', serif" font-size="15.5" font-style="italic" fill="currentColor">the memory palace — method of loci</text>
  <line x1="718" y1="64" x2="758" y2="64" stroke="#059669" stroke-width="2.4" stroke-dasharray="7 5" stroke-linecap="round"/>
  <text x="752" y="68" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#059669" text-anchor="end">encode: store one image per locus</text>
  <line x1="718" y1="86" x2="758" y2="86" stroke="#e11d48" stroke-width="2.4" stroke-dasharray="7 5" stroke-linecap="round"/>
  <text x="752" y="90" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#e11d48" text-anchor="end">recall: walk and collect</text>
  <!-- hand-drawn corridor walls (double-stroked, gently wobbly) -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
    <path d="M66 120 Q 300 116 540 119 Q 690 121 814 118"/>
    <path d="M70 352 Q 300 356 540 353 Q 690 355 812 352"/>
    <path d="M68 122 Q 65 168 67 210"/>
    <path d="M67 272 Q 65 312 68 350"/>
    <path d="M812 120 Q 809 166 810 212"/>
    <path d="M810 270 Q 808 312 812 350"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.5" stroke-linecap="round">
    <path d="M71 126 Q 300 122 540 125 Q 690 127 806 124"/>
    <path d="M75 346 Q 300 350 540 347 Q 690 349 804 346"/>
  </g>
  <!-- open front door (left end) -->
  <path d="M67 212 Q 99 222 94 254" fill="none" stroke="#8a8a93" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="92" cy="250" r="2.2" fill="#8a8a93"/>
  <!-- kitchen door (right end) -->
  <text x="822" y="245" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="currentColor">kitchen</text>
  <!-- encode route: emerald, through the six loci -->
  <path d="M92 252 Q 116 246 140 240 Q 200 232 255 236 Q 314 240 370 236 Q 430 232 485 238 Q 544 243 600 236 Q 660 230 715 238 Q 754 244 784 246" fill="none" stroke="#059669" stroke-width="2.6" stroke-dasharray="8 6" stroke-linecap="round"/>
  <g fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M244 228 L258 236 L244 243"/>
    <path d="M474 229 L488 237 L474 244"/>
    <path d="M766 237 L780 245 L765 252"/>
  </g>
  <text x="98" y="224" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#059669">the mental walk</text>
  <!-- recall route: rose, returning -->
  <path d="M782 302 Q 660 306 540 302 Q 420 298 300 303 Q 190 307 100 300" fill="none" stroke="#e11d48" stroke-width="2" stroke-dasharray="6 6" stroke-linecap="round"/>
  <g fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M116 293 L102 300 L117 308"/>
    <path d="M414 295 L400 302 L415 310"/>
  </g>
  <!-- locus 1: front door — soap on the doormat -->
  <ellipse cx="140" cy="196" rx="30" ry="8" fill="none" stroke="#8a8a93" stroke-width="1.8"/>
  <rect x="127" y="174" width="26" height="13" rx="5" fill="none" stroke="#e11d48" stroke-width="2.2"/>
  <g fill="none" stroke="#e11d48" stroke-width="1.8">
    <circle cx="131" cy="169" r="3.6"/><circle cx="140" cy="166" r="4"/><circle cx="149" cy="170" r="3.2"/>
    <path d="M133 187 Q 132 191 134 194"/><path d="M147 187 Q 148 191 146 194"/>
  </g>
  <!-- locus 2: coat hook — mangoes swinging -->
  <path d="M247 142 L265 142" stroke="#8a8a93" stroke-width="2" stroke-linecap="round" fill="none"/>
  <path d="M255 142 Q 254 148 256 151" fill="none" stroke="#8a8a93" stroke-width="1.8" stroke-linecap="round"/>
  <g fill="none" stroke="#d97706" stroke-width="2">
    <path d="M248 152 Q 245 164 249 174"/>
    <path d="M262 152 Q 266 163 262 173"/>
    <ellipse cx="247" cy="180" rx="7" ry="10" transform="rotate(-14 247 180)"/>
    <ellipse cx="264" cy="179" rx="7" ry="10" transform="rotate(12 264 179)"/>
  </g>
  <!-- locus 3: hallway — laundry detergent foaming -->
  <rect x="360" y="152" width="22" height="38" rx="4" fill="none" stroke="#059669" stroke-width="2.2"/>
  <rect x="366" y="144" width="10" height="8" rx="2" fill="none" stroke="#059669" stroke-width="1.8"/>
  <g fill="none" stroke="#059669" stroke-width="1.6">
    <circle cx="353" cy="152" r="4"/><circle cx="349" cy="161" r="3"/><circle cx="356" cy="170" r="2.4"/>
    <circle cx="389" cy="148" r="3.4"/><circle cx="392" cy="158" r="2.6"/>
  </g>
  <!-- locus 4: umbrella stand — eggs nested -->
  <path d="M476 160 L494 160 L490 198 L480 198 Z" fill="none" stroke="#8a8a93" stroke-width="2" stroke-linejoin="round"/>
  <path d="M485 160 Q 483 142 481 132 M481 132 Q 486 128 491 133" fill="none" stroke="#8a8a93" stroke-width="1.8" stroke-linecap="round"/>
  <g fill="none" stroke="#d97706" stroke-width="2">
    <ellipse cx="482" cy="189" rx="6" ry="8" transform="rotate(-10 482 189)"/>
    <ellipse cx="490" cy="187" rx="6" ry="8" transform="rotate(9 490 187)"/>
  </g>
  <!-- locus 5: kitchen counter — bananas marching -->
  <path d="M584 198 L646 198" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  <path d="M596 192 Q 598 168 612 164 M596 192 Q 610 190 616 194" fill="none" stroke="#e11d48" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M612 192 Q 616 172 628 170 M612 192 Q 624 191 630 194" fill="none" stroke="#e11d48" stroke-width="2.4" stroke-linecap="round"/>
  <!-- locus 6: kitchen sink — milk carton diving -->
  <path d="M688 180 L688 198 L744 198 L744 180" fill="none" stroke="#8a8a93" stroke-width="2" stroke-linecap="round"/>
  <path d="M700 178 L700 196 M732 178 L732 196" stroke="#8a8a93" stroke-width="1" opacity="0.5" fill="none"/>
  <g fill="none" stroke="#059669" stroke-width="2.2">
    <path d="M707 154 L707 178 L725 178 L725 154"/>
    <path d="M707 154 L716 146 L725 154"/>
  </g>
  <g fill="none" stroke="#059669" stroke-width="1.4">
    <path d="M699 170 Q 696 174 698 178"/><path d="M733 168 Q 736 172 734 177"/>
  </g>
  <!-- locus badges on the route -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.2">
    <circle cx="140" cy="238" r="13"/><circle cx="255" cy="238" r="13"/><circle cx="370" cy="238" r="13"/>
    <circle cx="485" cy="238" r="13"/><circle cx="600" cy="238" r="13"/><circle cx="715" cy="238" r="13"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">
    <text x="140" y="243">1</text><text x="255" y="243">2</text><text x="370" y="243">3</text>
    <text x="485" y="243">4</text><text x="600" y="243">5</text><text x="715" y="243">6</text>
  </g>
  <!-- labels under each locus -->
  <g font-family="Georgia, 'Times New Roman', serif" text-anchor="middle">
    <g font-size="12" fill="currentColor">
      <text x="140" y="266">front door</text><text x="255" y="266">coat hook</text><text x="370" y="266">hallway</text>
      <text x="485" y="266">umbrella stand</text><text x="600" y="266">kitchen counter</text><text x="715" y="266">kitchen sink</text>
    </g>
    <g font-size="10.5" font-style="italic">
      <text x="140" y="281" fill="#e11d48">soap on the doormat</text><text x="255" y="281" fill="#d97706">mangoes swinging</text><text x="370" y="281" fill="#059669">laundry detergent</text>
      <text x="485" y="281" fill="#d97706">eggs nested</text><text x="600" y="281" fill="#e11d48">bananas marching</text><text x="715" y="281" fill="#059669">milk carton diving</text>
    </g>
  </g>
  <!-- footer note -->
  <text x="440" y="338" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="currentColor" text-anchor="middle" opacity="0.75">one vivid image per fixed spot — exaggerate it, let it interact with its place</text>
</svg>`},
        {
          kind: 'para',
          text: 'For paired associations — foreign vocabulary, symbol-to-name mappings in anatomy or chemistry — the keyword method links the new sound to a familiar word and then welds the pair into one image: Spanish "caber" (to fit) heard as "cab bear" — a bear fitting into a taxi. It is quick and it sticks. The method itself is a two-step ritual first systematized by Richard Atkinson in 1975 — choose the familiar sound-alike keyword, then build the interactive image — and in the Stanford Russian-vocabulary experiments the keyword groups recalled substantially more words than rote-learning groups, both immediately and days later. But here the honest limit arrives: the largest systematic review of learning techniques, Dunlosky and colleagues in 2013, rated the keyword mnemonic surprisingly low utility for broad course learning — inconsistent gains, hard to generalize, irrelevant to concepts. Mnemonics are a scalpel for arbitrary mappings, not a substitute for comprehension: no acrostic will teach you why demand curves slope downward, and pretending otherwise is how students end up decorating ignorance.',
        },
        {
          kind: 'para',
          text: 'Two quieter techniques deserve the same billing. Elaborative rehearsal means thinking about the meaning of new information and relating it to what you already know — asking why it is true, connecting it to another course, finding the exception — and it reliably beats plain repetition. The self-reference effect is its personal branch: rewrite definitions in your own words and relate concepts to your own life, because you are thereby building a web of retrieval cues anchored in the richest material you own. The effect has a classic measurement behind it: Rogers, Kuiper and Kirker showed in 1977 that words judged against yourself are recalled better than words judged against anyone else, because self-material is the densest cue web a brain carries. Saying words aloud helps too — it makes a word distinctive, and distinctiveness is memorable.',
        },
        {
          kind: 'para',
          text: 'The division of labor matters. Mnemonics handle encoding: getting arbitrary material into memory in the first place, organized and cued. Retrieval practice handles retention: pulling it out again on schedule so it consolidates. The spaced-repetition and active-recall lessons own that second half; this lesson owns the first. Stack them — encode with a palace or an acrostic, then review by testing yourself on the schedule — and the arbitrary finally behaves like the learned.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: memorize the biological taxonomy ranks in order — Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species — plus six items on a shopping list, tonight.',
            'Recall the governing idea: first-letters compress lists into meaning; spatial routes carry arbitrary items; choose the device that matches the material.',
            'Apply: build the acrostic "Dear King Philip Came Over For Good Soup" and rehearse it aloud twice; then peg the six shopping items as vivid, exaggerated images at six fixed spots on a walk from your front door to the kitchen — soap oozing over the doormat, mangoes swinging from the coat hook, laundry detergent foaming in the hallway, eggs nested in the umbrella stand, bananas marching across the kitchen counter, a milk carton diving into the sink.',
            'State the result: the acrostic survives because a sentence is one chunk with eight ordered slots; the list survives because walking a known route is automatic. Follow up tomorrow with a blank-page recall of both — encoding done, now retrieval.',
          ],
        },
        {
          kind: 'derivation',
          title: 'How much does one palace hold? The capacity arithmetic',
          statement:
            'A planning derivation for the method of loci — from the chunk limit of working memory to the number of palaces a real course needs. Nothing here is deep mathematics; the value is that every input is a number you can count for yourself.',
          prerequisites: ['Chunking and the working-memory span', 'The method of loci: one locus, one image'],
          steps: [
            {
              label: 'Step 1: One locus holds one chunk',
              formula: '$$N = R \\times L$$',
              explanation:
                'Encoding capacity is additive over loci: a palace with R rooms and L loci per room stores N items, because each locus carries exactly one vivid image — one chunk, not a crowd. Overloading a locus is the classic error the Common Pitfalls section warns about.',
            },
            {
              label: 'Step 2: Count your own loci',
              formula: '$$N = 12 \\times 5 = 60 \\text{ items}$$',
              explanation:
                'A twelve-room apartment route with five honest loci per room — doormat, coat hook, shelf, window, lamp — yields sixty storage spots. The worked route above, front door to kitchen, is the six-locus miniature of the same arithmetic.',
            },
            {
              label: 'Step 3: Scale to a real course',
              formula: '$$P = \\left\\lceil \\frac{V}{N} \\right\\rceil = \\left\\lceil \\frac{200}{60} \\right\\rceil = 4 \\text{ palaces}$$',
              explanation:
                'The applications section budgets the first two hundred high-frequency words of a language to keyword images. At sixty items per palace, a ceiling division says four palaces cover the course — a number small enough to change the plan from impossible to an afternoon of route-building.',
            },
            {
              label: 'Step 4: Price the recall walk',
              formula: '$$t_{\\text{walk}} = N \\times s = 60 \\times 3\\,\\text{s} = 180\\,\\text{s} = 3\\,\\text{min}$$',
              explanation:
                'Retrieval costs one mental stop per locus. Walking all sixty images at a deliberate three seconds each takes three minutes — the whole course reviewed before the kettle boils.',
            },
            {
              label: 'Step 5: The general law',
              formula: '$$P = \\left\\lceil \\frac{V}{R \\times L} \\right\\rceil, \\qquad t_{\\text{walk}} \\approx R \\times L \\times s$$',
              explanation:
                'Capacity multiplies with the routes you know, and each palace costs one walk to sweep. The arithmetic never maintains a memory, though — encoding sets the system up; the review schedule belongs to spaced repetition.',
            },
          ],
          result:
            'One palace of R rooms and L loci holds R × L items, a course of V items needs the ceiling of V divided by R × L palaces, and a full recall walk costs about N × s seconds. The arithmetic turns memorize two hundred words from one impossible pile into four three-minute walks — but it only moves material into memory; keeping it there is the spacing-repetition lesson to handle.',
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Medicine students park cranial nerves, carpal bones and drug classes along familiar routes and acrostics.',
            'Language learners run keyword images for the first two hundred high-frequency words, then lean on reading for the rest.',
            'Pilots and sailors keep checklist mnemonics — flow patterns and memory items — for procedures that must be instant.',
            'Musicians chunk score passages into labelled fingers and phrases, turning a page of notes into a handful of chunks.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'The classic failure is mnemonic inflation: building devices for everything, spending the study hour on artwork instead of understanding. Mnemonics earn their keep on arbitrary material — lists, labels, orders, pairs — and waste it on concepts. The second failure is skipping rehearsal: a palace walked once is a house of cards; the imagery needs one or two retrieval passes the next day before it belongs to you. The third is overloading images: one vivid image per item beats a crowded scene where details blur together.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Mnemonic device', def: 'A memory aid that organizes information for encoding, especially steps, stages and systems.' },
            { term: 'Acronym', def: 'A word formed from the first letters of the items to remember, such as HOMES for the Great Lakes.' },
            { term: 'Acrostic', def: 'A sentence whose first letters stand for the ordered items, such as Please Excuse My Dear Aunt Sally.' },
            { term: 'Chunking', def: 'Grouping details into manageable bits so working memory holds packages, not parts.' },
            { term: 'Method of loci', def: 'Placing vivid images of items at fixed points along a familiar mental route, then walking it to recall.' },
            { term: 'Keyword method', def: 'Linking a foreign word to a familiar sound-alike and welding the pair into one image.' },
            { term: 'Self-reference effect', def: 'Better memory for material rewritten in your own words and tied to your own life.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Mnemonics are most valuable for material that is:',
              options: ['Deeply conceptual', 'Arbitrary — lists, labels, orders and pairs', 'Already automatic', 'Best learned by rereading'],
              answer: 1,
              explain: 'Understanding generates concepts; mnemonics carry what understanding cannot generate — arbitrary mappings.',
            },
            {
              q: 'The method of loci works chiefly because:',
              options: ['Images are colorful', 'Spatial memory for familiar routes is huge, automatic and unpracticed', 'It replaces the need for sleep', 'Walking improves blood flow during recall'],
              answer: 1,
              explain: 'You never practiced learning where your kitchen is — borrowing that automatic spatial memory is the whole trick.',
            },
            {
              q: 'Dunlosky and colleagues rated the keyword mnemonic low utility for broad course learning because:',
              options: ['It takes too long to build images', 'Its gains are narrow, inconsistent and do not generalize to concepts', 'It only works for children', 'It interferes with sleep'],
              answer: 1,
              explain: 'The method excels at paired associations but neither scales across a course nor teaches understanding.',
            },
            {
              q: 'The clean division of labor is:',
              options: ['Mnemonics encode material first; retrieval practice retains it on schedule', 'Mnemonics replace review entirely', 'Retrieval practice replaces encoding', 'Both are only for exam cramming'],
              answer: 0,
              explain: 'Encode with a device, retain by self-testing on a schedule — the two halves compose, they do not compete.',
            },
            {
              q: 'A ten-digit phone number overloads a working memory span of about four chunks; reading it as 987 654 3210 makes it holdable because grouping turns it into:',
              options: ['Ten separate items', 'Three chunks', 'One sensory memory', 'A long-term memory'],
              answer: 1,
              explain: 'Chunking packages digits into larger bits: three groups fit inside a four-chunk span (Cowan 2001), ten loose digits do not — Miller measured the original seven-plus-or-minus-two span in 1956.',
            },
            {
              q: 'A palace has 12 rooms with 5 loci per room, and a course needs 200 items. How many palaces, and how long is one full recall walk at 3 seconds per locus?',
              options: ['17 palaces; 10 minutes', '4 palaces; 3 minutes', '60 palaces; 1 minute', '4 palaces; 10 minutes'],
              answer: 1,
              explain: 'N = 12 × 5 = 60 items per palace, so the ceiling of 200 ÷ 60 is 4 palaces; the walk costs 60 × 3 s = 180 s, about three minutes — the capacity arithmetic of the derivation.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'Pair this topic with active recall and spaced repetition — encode here, retain there. The SQ3R lesson owns how to read textbook chapters before you decide what is worth a mnemonic, and the metacognition lesson will tell you whether your palace actually held.',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fnd-habits-behavior-design',
      title: 'Habits and Behavior Design: Automating the Studying',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Study Systems',
      tier: 'core',
      concepts: [
        'The intention–behavior gap',
        'Habits: cue-triggered automaticity',
        'Initiation, learning and stability phases',
        'The 66-day median and the 18–254 range',
        'Implementation intentions: if–then plans',
        'Friction and context design',
        'Lapse recovery: never miss twice',
      ],
      words: 1983,
      readMins: 10,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Every learner has met the intention–behavior gap: you decide on Sunday to review notes daily, and by Thursday the plan is a guilt archive. The research language for it is blunt — even strong intentions are a weak predictor of what people actually do, because deciding and doing are run by different machinery. Behavior design closes the gap not by wanting harder but by outsourcing the starting: choosing cues, contexts and if–then plans so the right action begins before motivation is consulted.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'Every technique in this library — spaced repetition, active recall, interleaving — presumes you actually show up, again and again, for months. The showing up is its own skill, and it has its own science. A study habit that runs on cues rather than willpower is the infrastructure under everything else in this domain.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'A habit, in the research definition, is an action triggered automatically in response to contextual cues that have been associated with its performance. Automaticity is the point: once initiation transfers to external cues — the time, the place, the preceding event — the behavior no longer depends on conscious attention or motivational states. That is the strategic prize, and it is why habits persist even after the motivation that started them has long dissipated: the cue fires and the routine runs, the way you reach for a seatbelt without a debate.',
        },
        {
          kind: 'para',
          text: 'How much of daily life runs on this machinery? Diary research by Wendy Wood and colleagues put the share at roughly forty per cent: about 43% of everyday actions were performed almost daily and usually in the same context — repeated, cue-triggered, barely thought about. That share is the strategic point for a student: whichever study system you run, most of its showings-up will be habit-driven whether you designed them or not. Behavior design is the decision to author that forty per cent deliberately — choosing which actions become automatic — instead of inheriting whatever the environment happened to train.',
        },
        {
          kind: 'para',
          text: 'Habit formation has three phases. Initiation: select one small behavior and one consistent context — the when-and-where decision, which is itself the design act. Learning: repeat the behavior in that same context; through associative learning the context and the action fuse, each repetition strengthening the link. Stability: the habit is formed and now maintains itself with minimal effort — the behavior has become, as participants in the classic study put it, second nature, something they felt strange not doing.',
        },
        {
          kind: 'para',
          text: 'How long does the learning phase take? The best-known real-world study — Lally and colleagues, volunteers installing one new daily behavior each — measured daily self-reported automaticity and watched it rise fast, then decelerate, then plateau. The average plateau arrived around 66 days. The honest fine print: that figure is a median over the subset of participants whose data fit the model, and individual estimates ranged from 18 to 254 days — a fourteenfold spread. Behavior type mattered too: drinking a glass of water plateaued near 59 days, eating behaviors near 65, exercise near 91. So treat "66 days" as a planning midpoint, not a deadline — and as a reason to distrust any product promising a habit in a week.',
        },
        {
          kind: 'figure',
          caption:
            'The automaticity curve the Lally study actually measured: daily repetitions in the same context drive self-rated automaticity up steeply at first, then decelerating, until the behavior plateaus — the stability phase where the habit runs itself. The median plateau arrived near 66 days, but individual estimates ranged from 18 to 254 days, and behavior type shifted the midpoint (drinking water near 59, exercise near 91). Read it as a planning curve, not a countdown: the question is never “am I at day 66?” but “which phase am I in?”',
          afterConcept: 4,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Automaticity rises fast then plateaus: median 66 days, individual range 18 to 254 days">
  <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
    <path d="M84 54 Q82 220 86 392"/>
    <path d="M82 388 Q300 392 540 387 Q700 391 834 386"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.5" stroke-linecap="round">
    <path d="M89 56 Q87 220 91 390"/>
    <path d="M79 393 Q300 397 540 392 Q700 396 831 391"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" fill="currentColor">
    <text x="32" y="224" font-size="15" font-style="italic" text-anchor="middle" transform="rotate(-90 32 224)">Automaticity (self-rated)</text>
    <text x="836" y="448" font-size="15" font-style="italic" text-anchor="end">Days of daily repetitions in the same context</text>
    <g font-size="11.5" fill="#8a8a93" text-anchor="middle">
      <text x="86" y="380">0</text><text x="237" y="380">62</text><text x="388" y="380">125</text><text x="539" y="380">188</text><text x="690" y="380">250</text>
    </g>
  </g>
  <!-- individual-range band 18..254 days -->
  <rect x="112" y="70" width="578" height="316" fill="#059669" opacity="0.05"/>
  <g stroke="#8a8a93" stroke-width="1.4" stroke-dasharray="5 5" opacity="0.75">
    <line x1="112" y1="62" x2="112" y2="388"/>
    <line x1="690" y1="62" x2="690" y2="388"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93" text-anchor="middle">
    <text x="112" y="52">18 days — fastest</text>
    <text x="664" y="52">254 days — slowest</text>
  </g>
  <!-- median marker -->
  <line x1="229" y1="62" x2="229" y2="388" stroke="#d97706" stroke-width="2" stroke-dasharray="7 6" opacity="0.9"/>
  <text x="237" y="86" font-family="Georgia, 'Times New Roman', serif" font-size="13.5" font-style="italic" fill="#d97706">~66-day median plateau</text>
  <!-- the automaticity curve: steep rise, decelerate, plateau -->
  <g fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round" opacity="0.97">
    <path d="M88 396 C 110 330 128 258 148 214 C 166 176 186 152 210 140 C 250 121 300 118 360 116 C 470 113 600 112 700 112 C 740 112 780 112 812 113"/>
  </g>
  <g fill="none" stroke="#059669" stroke-width="1" opacity="0.45" stroke-linecap="round">
    <path d="M92 399 C 114 333 132 261 152 218 C 170 180 190 156 214 144 C 254 125 304 122 364 120 C 474 117 604 116 704 116 C 744 116 782 116 810 117"/>
  </g>
  <!-- phase brackets -->
  <g fill="none" stroke="#8a8a93" stroke-width="1.6" stroke-linecap="round">
    <path d="M90 404 L90 412 L150 412 L150 404"/>
    <path d="M150 404 L150 412 L228 412 L228 404"/>
    <path d="M228 404 L228 412 L700 412 L700 404"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="currentColor" text-anchor="middle">
    <text x="120" y="430">initiation</text>
    <text x="189" y="430">learning</text>
    <text x="464" y="430">stability — the habit runs itself</text>
  </g>
  <!-- curve label -->
  <text x="470" y="170" font-family="Georgia, 'Times New Roman', serif" font-size="14" font-style="italic" fill="currentColor">rise, decelerate, plateau</text>
</svg>`
        },
        {
          kind: 'para',
          text: 'What cements the link during the learning phase is the reward that follows the routine. Habits consolidate when performance is followed by something the brain registers as worth repeating — the checked box, the streak, the small relief of a finished set. The research caution is on extrinsic payoffs: the meta-analysis by Deci, Koestner and Ryan found tangible rewards can undermine intrinsic motivation for interesting tasks, and when the payment stops the behavior often collapses with it. Keep the reward small, immediate and attached to the act — the calendar cross from the worked example — and let the growing automaticity itself become the payoff: the habit that costs nothing to start is its own best reward.',
        },
        {
          kind: 'para',
          text: 'The sharpest tool in behavior design is the implementation intention — a plan in the literal form: if situation Y arises, then I will do action Z. "If I pour my morning coffee, then I will work through ten flashcards at the kitchen table." The meta-analytic evidence summarized by Gollwitzer and Sheeran shows these plans reliably raise goal attainment, and the mechanism is exactly the habit mechanism: the plan forges a strong associative link between a concrete cue and a concrete action, so that encountering the cue triggers the action strategically rather than leaving it to deliberation. Physiological studies even find reduced activity in brain regions for effortful control — the if–then plan hands the start of the action to the environment.',
        },
        {
          kind: 'para',
          text: 'Around that core, design the field. Friction: make the desired behavior the path of least resistance — bag packed the night before, flashcard app on the home screen, textbook already open on the desk; and add friction to rivals by putting the phone in another room. Context consistency: the same time and place is the training signal, and the Lally study found participants who skipped repetitions showed poorer automaticity growth. Cue stacking: bolt the new behavior onto an existing stable one — after I close my laptop at lunch, I do one mixed problem set — so an already-automatic routine becomes the cue for the new one.',
        },
        {
          kind: 'para',
          text: 'Lapses are data, not verdicts. In the Lally study a single missed opportunity barely registered — automaticity dipped by less than half a point on a 0–42 scale and recovered quickly. What kills habits is not the missed day but the cascade after it: one skip becomes a week, and the context link decays. The practical rule is never miss twice. A second miss in the same slot is the signal to shrink the behavior until it fits the worst day — ten flashcards become two — because protecting the cue–context link matters more than the session volume. Deliberate practice owns the quality of what you do in the session; this lesson only owns the automation of arriving.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: build a durable daily review habit for a student who already has good materials but studies only when motivated.',
            'Recall the governing idea: pick one small behavior, one consistent context, and bind them with an if–then plan; design friction; expect a plateau in weeks-to-months, not days.',
            'Apply: set "If I finish dinner and clear my plate, then I will sit at the desk and run ten active-recall cards." Deck opens on the tablet that lives on the desk; phone charges in the hallway overnight; a wall calendar gets one cross per completed evening.',
            'State the result: the cue (dinner cleanup), the context (desk, evening) and the tiny first action are now one associative unit. Automaticity builds on its own curve — expect it to feel effortful for weeks, easier by two months, strange to skip by three. One missed night changes nothing; two in a row triggers the shrink-to-two-cards rule.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Clinicians use habit-based advice — one behavior, one context, repeated — because it survives after motivation fades.',
            'Language learners bind daily deck reviews to breakfast or a commute segment, the same seat or carriage every day.',
            'Writers and coders stack a fixed opening ritual — same desk, same playlist — so starting costs nothing.',
            'Athletes build recovery habits (stretching, sleep windows) onto existing cues like showering or packing the bag.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'The first failure is vague plans: "study more" binds to no cue and therefore to nothing. If–then means if a concrete situation, then a concrete action. The second is starting too big — an hour of review per evening is a project, not a habit; automate the smallest version first and scale after the plateau. The third is context drift: six different times and places in a week is six habits worth of learning with none finished. And the fourth is catastrophizing lapses — one miss is noise; the rule is never miss twice, not never miss.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Intention–behavior gap', def: 'The substantial gap between even strong intentions and what people actually do.' },
            { term: 'Habit', def: 'An action triggered automatically in response to contextual cues previously associated with it.' },
            { term: 'Automaticity', def: 'The quality of running without conscious attention or motivational effort.' },
            { term: 'Implementation intention', def: 'A pre-made if–then plan linking a concrete situation to a concrete action.' },
            { term: 'Context consistency', def: 'Repeating the behavior in the same time and place so the cue–action link strengthens.' },
            { term: 'Friction design', def: 'Lowering steps and effort for the desired behavior while raising them for rivals.' },
            { term: 'Never miss twice', def: 'The lapse rule: one miss is noise; two consecutive misses trigger shrinking the behavior.' },
            { term: 'Cue stacking', def: 'Bolting a new behavior onto an existing stable habit so the old routine becomes the new cue.' },
            { term: 'Stability phase', def: 'The plateau region where the habit maintains itself with minimal effort — strange not to do.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The defining feature of a habit, in the research definition, is that the action is:',
              options: ['Enjoyable every time', 'Triggered automatically by contextual cues', 'Planned the night before', 'Rewarding to others'],
              answer: 1,
              explain: 'Habits are cue-triggered automaticity — initiation has been handed to the environment, not to motivation.',
            },
            {
              q: 'The famous 66-day figure from the Lally study is best read as:',
              options: ['A universal deadline for every habit', 'A median plateau with enormous individual range, 18 to 254 days', 'The time motivation lasts', 'A marketing claim with no data behind it'],
              answer: 1,
              explain: 'It is a median over modeled participants; behavior type and individual spread make it a midpoint, not a promise.',
            },
            {
              q: 'An implementation intention works because it:',
              options: ['Increases willpower through repetition', 'Forges a direct associative link between a concrete cue and a concrete action', 'Makes goals more ambitious', 'Replaces the need for sleep'],
              answer: 1,
              explain: 'The if–then format hands triggering to the situation, which is exactly how habits form — studies even show reduced effortful-control activity.',
            },
            {
              q: 'According to the study, a single missed day:',
              options: ['Resets the habit formation clock', 'Barely dented automaticity and recovered quickly', 'Destroyed the habit permanently', 'Improved automaticity'],
              answer: 1,
              explain: 'One omission moved the automaticity rating by under half a point; cascades of misses, not single lapses, are what kill habits.',
            },
            {
              q: 'Roughly what share of everyday actions runs on habit-like automaticity, per the diary research?',
              options: ['About 5%', 'About 20%', 'About 43%', 'About 90%'],
              answer: 2,
              explain: 'Wood and colleagues\' diaries: about 43% of daily actions were performed almost daily in the same context — behavior design means authoring that share deliberately.',
            },
            {
              q: 'The research caution on extrinsic rewards for a study habit is that:',
              options: ['They always speed habit formation', 'Tangible payoffs can undermine intrinsic motivation, so the behavior may collapse when they stop', 'Rewards are irrelevant to habits', 'Only punishments build durable habits'],
              answer: 1,
              explain: 'The Deci, Koestner and Ryan meta-analysis is the caution; keep rewards small, immediate and attached to the act — the calendar cross, not a payment scheme.',
            },
            {
              q: 'After missing two evenings in a row, the lesson\'s rule says:',
              options: ['Double the next session to catch up', 'Shrink the behavior until it fits the worst day — ten cards become two', 'Restart the habit from day one', 'Switch to a different habit'],
              answer: 1,
              explain: 'Protect the cue–context link; volume is recoverable, the link is what decays — exactly the worked example\'s shrink-to-two-cards rule.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'With arrival automated, point the session at the real engines: active recall and spaced repetition for content, interleaving for the mix. Deliberate practice owns raising the quality of what the habit repeats, and the time-management lesson handles planning the day around it.',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fnd-metacognition-calibration',
      title: 'Metacognition and Calibration: Knowing What You Know',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Learning Science',
      tier: 'intermediate',
      concepts: [
        'Thinking about thinking',
        'The five-step self-regulation cycle',
        'Fluency illusions: why rereading lies',
        'Calibration: predicted versus actual',
        'Retrieval as a measuring instrument',
        'Beginners overestimate',
        'Close the loop: reflect and adjust',
        'Judgments of learning, delayed',
        'The Brier score and bias arithmetic',
      ],
      words: 2951,
      readMins: 15,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Two students leave the same lecture equally certain they have learned the material. On the exam one scores 85, the other 60. The difference is rarely effort and rarely intelligence — it is the accuracy of the instrument each used to judge their own learning. Metacognition, in the working definition, is thinking about thinking: studying how you think and learn so that you can improve how you think and learn. It has two halves — knowledge of cognition (what strategies exist, what a task demands, what you personally are good at) and regulation of cognition (running those strategies, monitoring them, correcting course). This lesson is about the regulation half, because that is where most study hours are lost.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'Every study technique presumes a monitoring layer deciding when it has worked. Without calibration you reread a chapter until it feels familiar and stop — the feeling arrives long before the learning does. Accurate self-assessment is what lets you spend scarce hours where they pay, and it is trainable like any skill in this library.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The self-regulation cycle runs in five steps, and it is worth memorizing as a loop rather than a list. First, assess the task: be sure you understand what you are actually being asked to do — the end goal, the format, the standard — because strategy choice depends on it. Second, evaluate strengths and weaknesses: given the task, what can you already do and where will you need support? Third, plan: which strategies, which resources, how many sessions, what order. Fourth, apply and monitor: work the plan while checking in on what you are actually learning, not what you are merely touching. Fifth, reflect and adjust: after the task, judge whether the plan worked, and replace the strategies that did not. Then the loop runs again on the next task, a little better.',
        },
        {
          kind: 'figure',
          caption:
            'The five-step self-regulation cycle drawn as the loop it is: assess the task, evaluate strengths and weaknesses, plan, apply and monitor, reflect and adjust — then the loop runs again on the next task, a little better. In Nelson and Narens\' two-level picture, the upward strokes are monitoring (information rising from the object level of study to the meta level) and the downward strokes are control (commands falling back on the study itself).',
          afterConcept: 2,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 440" role="img" aria-label="The five-step self-regulation cycle as a loop: assess the task, evaluate strengths and weaknesses, plan, apply and monitor, reflect and adjust">
  <g font-family="Georgia, 'Times New Roman', serif">
    <!-- wobbly step nodes -->
    <g fill="none" stroke-width="2.4" stroke-linecap="round">
      <path d="M330 56 Q440 49 550 55 Q557 72 551 89 Q440 97 331 90 Q323 72 330 56 Z" stroke="#059669"/>
      <path d="M553 152 Q668 144 783 151 Q790 170 784 189 Q668 198 554 191 Q546 170 553 152 Z" stroke="#d97706"/>
      <path d="M502 324 Q582 317 662 323 Q669 340 663 357 Q582 365 503 358 Q495 340 502 324 Z" stroke="#e11d48"/>
      <path d="M183 324 Q298 317 413 323 Q420 340 414 357 Q298 365 184 358 Q176 340 183 324 Z" stroke="#059669"/>
      <path d="M107 154 Q212 147 317 153 Q324 170 318 187 Q212 195 108 188 Q100 170 107 154 Z" stroke="#d97706"/>
    </g>
    <!-- step numbers -->
    <g fill="none" stroke-width="2" stroke-linecap="round">
      <circle cx="322" cy="50" r="12" stroke="#059669"/>
      <circle cx="545" cy="146" r="12" stroke="#d97706"/>
      <circle cx="494" cy="318" r="12" stroke="#e11d48"/>
      <circle cx="175" cy="318" r="12" stroke="#059669"/>
      <circle cx="99" cy="148" r="12" stroke="#d97706"/>
    </g>
    <g font-size="12.5" fill="currentColor" text-anchor="middle">
      <text x="322" y="54.5">1</text><text x="545" y="150.5">2</text><text x="494" y="322.5">3</text><text x="175" y="322.5">4</text><text x="99" y="152.5">5</text>
    </g>
    <!-- step labels (same names as the prose) -->
    <g font-size="15" fill="currentColor" text-anchor="middle">
      <text x="440" y="77">Assess the task</text>
      <text x="668" y="166">Evaluate strengths</text>
      <text x="668" y="186">&amp; weaknesses</text>
      <text x="582" y="345">Plan</text>
      <text x="298" y="345">Apply &amp; monitor</text>
      <text x="212" y="175">Reflect &amp; adjust</text>
    </g>
    <!-- hand-drawn clockwise arrows -->
    <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round">
      <path d="M545 92 Q612 88 638 124"/>
      <path d="M626 118 L638 124 L636 111"/>
      <path d="M676 210 Q692 274 650 312"/>
      <path d="M655 300 L650 312 L663 308"/>
      <path d="M500 348 Q440 372 410 352"/>
      <path d="M423 354 L410 352 L417 364"/>
      <path d="M184 306 Q162 252 200 210"/>
      <path d="M196 223 L200 210 L188 215"/>
      <path d="M234 134 Q272 82 320 64"/>
      <path d="M311 74 L320 64 L307 63"/>
    </g>
    <!-- center + footnote -->
    <text x="440" y="222" font-size="17" font-style="italic" fill="currentColor" text-anchor="middle">the self-regulation cycle</text>
    <text x="440" y="246" font-size="12.5" fill="#8a8a93" text-anchor="middle">monitoring up, control down</text>
    <text x="440" y="424" font-size="13" font-style="italic" fill="#8a8a93" text-anchor="middle">then the loop runs again on the next task — a little better</text>
  </g>
</svg>`,
        },
        {
          kind: 'para',
          text: 'Where does this machinery come from? The word itself is young: the developmental psychologist John Flavell coined "metacognition" in 1979 to name the growing evidence that children — and adults — can think about their own thinking. His papers pose the question every learner still asks: if you read a page, feel confused, and notice the confusion, who exactly noticed? A decade later, Thomas Nelson and Louis Narens (1990) gave the field its working diagram by splitting the mind into two levels. The object level holds the learning itself — the pages, the problems, the memories. The meta level holds your model of that learning. Monitoring carries information upward (how is it going?), and control carries commands downward (keep going, switch strategy, stop). The five-step cycle above is that loop in student clothing, and every ritual in this lesson is a monitoring measurement put to work by a control decision.',
        },
        {
          kind: 'para',
          text: 'The reason the monitoring step cannot be skipped is the fluency illusion. Familiarity is not knowledge, but the brain reports both as "this feels smooth." Rereading a chapter is the classic trap: the pages grow familiar, recognition hums along, and the learner concludes mastery — while the exam, which demands generation rather than recognition, finds nothing to grab. Highlighting behaves the same way, marking material as handled without ever processing it. In the large 2013 review by Dunlosky and colleagues, rereading and highlighting rated surprisingly low utility: popular, easy, and inconsistently effective, largely because they produce smooth feelings that are poor evidence of anything.',
        },
        {
          kind: 'para',
          text: 'Monitoring also comes in grades, and naming them sharpens your own measurements. Ease-of-learning judgments run before study, predicting how hard an item will be to learn. Judgments of learning — JOLs — run during or just after study, estimating what has just stuck. Feelings of knowing answer a different question: for something you cannot retrieve right now, would you recognize it if shown? And confidence judgments grade answers already given. Asher Koriat\'s cue-utilization account (1997) explains why these gauges mislead: a judgment of learning is built from cues, and the most available cue is not what you know but how smoothly the material is flowing right now — processing fluency again. Rereading feeds the cue without feeding the knowledge, which is exactly why fluency-based judgments inflate while retrieval-based judgments stay honest.',
        },
        {
          kind: 'para',
          text: 'The fix is to swap instruments. Retrieval practice is the honest measuring device: close the book and try to produce the answer. As the metacognition teaching literature puts it, when you quiz yourself it is not important to get the answer right — the critical part is requiring yourself to actively recall and use the information rather than letting yourself be told. What the blank page hands back is calibration data: the gap between what you thought you knew and what you can actually produce. The active-recall lesson owns the mechanics of testing; this lesson owns reading the test results as a measurement of your own confidence.',
        },
        {
          kind: 'para',
          text: 'Timing changes how honest the gauge is, too. Nelson and Dunlosky (1991) had students judge their learning immediately after studying paired associates, or a few minutes later, and the delayed judgments were dramatically more accurate — a predictive correlation around .90 versus about .50 for the immediate ones. The mechanism is Koriat\'s own cue logic: seconds after study, fluency still rides the study episode, but a delay forces a short memory search that samples retrieval itself, so the honest move is a quick self-test before committing to a prediction. The working rule: finish a section, look away for a few minutes, then ask "will I still know this on Friday?" and let the answer, not the mood, book the review. Errors close the loop from the other side — the hypercorrection effect (Butterfield and Metcalfe) shows that high-confidence mistakes, once exposed by feedback, are the most likely of all to be corrected. Confident errors, caught honestly, are gifts.',
        },
        {
          kind: 'para',
          text: 'Calibration has a concrete ritual: predict, then check, then adjust. Before a practice set, write your expected score — per topic, not just overall. Take the test. Compare. Where you overestimated, your judgment of learning is inflated and the topic needs real hours; where you underestimated, you are wasting anxiety on mastered material. Over several rounds the predictions tighten, and the skill generalizes: calibrated learners can walk out of any lecture with a realistic map of what they own. A warning label belongs here — beginners in a subject tend to overestimate their abilities, so until your predictions have a track record, budget more support than feels necessary.',
        },
        {
          kind: 'figure',
          caption:
            'The calibration plot. Confidence — the predicted performance you would declare before a test — runs across; actual performance runs up. The dashed diagonal is perfect calibration (predicted = actual). The beginner curve sits below it: at 70% confidence the real score is nearer 52%, and that vertical distance is the prediction gap. Points below the line are overestimated topics that need real hours; the lone point above the line is underestimated material wasting anxiety. The worked example below reads this chart topic by topic and spends hours where the gap is widest.',
          sketchImage: '/diagrams/fnd-metacognition-calibration-sketch.jpg',
          sketchCaption:
            'Student Laboratory Notebook: calibration plot hand-drawn with confidence (predicted performance) on the horizontal axis and actual performance on the vertical; dashed identity line labelled perfect calibration; overconfidence curve sagging below it; arrow marking the prediction gap at 70% confidence (predicted 70, actual near 52); one point above the line labelled underestimated.',
          afterConcept: 4,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Calibration plot: confidence versus actual performance, perfect calibration diagonal, beginner overconfidence curve below it, prediction gap arrowed at 70 percent confidence">
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
    <text x="30" y="224" font-size="15" font-style="italic" text-anchor="middle" transform="rotate(-90 30 224)">Actual performance (%)</text>
    <text x="836" y="448" font-size="15" font-style="italic" text-anchor="end">Confidence — predicted performance (%)</text>
    <g font-size="11.5" fill="#8a8a93" text-anchor="end">
      <text x="76" y="64">100</text><text x="76" y="146">75</text><text x="76" y="228">50</text><text x="76" y="310">25</text><text x="76" y="392">0</text>
    </g>
    <g font-size="11.5" fill="#8a8a93" text-anchor="middle">
      <text x="84" y="380">0</text><text x="272" y="380">25</text><text x="460" y="380">50</text><text x="648" y="380">75</text><text x="836" y="380">100</text>
    </g>
  </g>
  <!-- perfect calibration diagonal (emerald, dashed) -->
  <line x1="84" y1="392" x2="836" y2="60" stroke="#059669" stroke-width="2" stroke-dasharray="7 6" opacity="0.9" stroke-linecap="round"/>
  <text x="300" y="268" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#059669" text-anchor="middle" transform="rotate(-24 300 268)">perfect calibration (predicted = actual)</text>
  <!-- overconfidence curve (rose) -->
  <path d="M90 386 C 140 372 240 345 310 326 C 380 305 430 283 460 266 C 500 247 560 231 610 219 C 660 207 700 197 723 193 C 760 186 800 178 836 173" fill="none" stroke="#e11d48" stroke-width="3" stroke-linecap="round" opacity="0.95"/>
  <text x="628" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="13.5" font-style="italic" fill="#e11d48" text-anchor="middle">typical overconfidence (beginners)</text>
  <text x="628" y="320" font-family="Georgia, 'Times New Roman', serif" font-size="12" fill="#d97706" text-anchor="middle">overestimated: needs real hours</text>
  <!-- prediction gap arrow at 70% confidence -->
  <g fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round">
    <path d="M610 212 L610 168"/>
    <path d="M604 180 L610 168 L616 180"/>
  </g>
  <text x="622" y="196" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#d97706">prediction gap</text>
  <!-- underestimated point above the line -->
  <circle cx="761" cy="78" r="5.5" fill="#059669"/>
  <text x="748" y="54" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#059669" text-anchor="end">underestimated: wasted anxiety</text>
</svg>`,
        },
        {
          kind: 'para',
          text: 'The overconfidence tilt is not a folk suspicion; it has numbers. In Kruger and Dunning\'s tests (1999), students in the bottom quartile estimated their percentile rank near the 62nd while actually scoring near the 12th — the least skilled were off by half the scale, while the top performers predicted themselves almost exactly. Dunning\'s group traced part of the gap to a humbling source: the weakest students had never clearly experienced the contrast between their own answer and a correct one, so they possessed no evidence with which to discount their confidence. And the cost is not just a distorted self-image. Dunlosky and Rawson (2012) followed students through repeated study-test cycles and found that inflated judgments of learning made learners quit practice early — overconfidence produced underachievement, mechanically, through sessions that ended too soon. That is the price tag on the fluency illusion: not a philosophical worry, but hours silently misallocated.',
        },
        {
          kind: 'para',
          text: 'Calibration also has a quantitative form, worth learning because it turns "how accurate am I?" into one gradeable number. Score each practice item twice: your confidence p, from 0 to 1, and the outcome o — 1 if correct, 0 if wrong. The bias is mean confidence minus mean accuracy: positive means overconfident, negative means underconfident, and zero alone is not yet perfect, because a student who says 50% on everything and half-succeeds also averages zero. The Brier score closes that hole by squaring the gap on every item, so big misses cost far more than small ones — and it sets up the short derivation below, which shows why confident errors are the expensive kind.',
        },
        {
          kind: 'derivation',
          title: 'Why confident errors hurt doubly: the Brier-score derivation',
          statement:
            'Derivation of the two asymmetries inside the Brier score $B = \\frac{1}{N}\\sum_{i=1}^{N}(p_i-o_i)^2$ — why it bills confident errors at the square, and why the only long-run optimal policy is to declare your honest probability.',
          prerequisites: ['Confidence p as a probability from 0 to 1', 'The outcome o: 1 for correct, 0 for wrong', 'Squares of numbers between 0 and 1'],
          steps: [
            {
              label: 'Step 1: Score one item',
              formula: '$$B_{\\text{item}} = (p-o)^2$$',
              explanation:
                'Each practice answer contributes the squared gap between the confidence you declared and the outcome you got. Perfectly honest and perfectly right scores 0; the worst miss — 100% confidence on a wrong answer — scores 1.',
            },
            {
              label: 'Step 2: Split by outcome',
              formula: '$$o=1:\\; B=(1-p)^2 \\qquad o=0:\\; B=p^2$$',
              explanation:
                'If you were right, only your underconfidence is taxed: a 90%-confident correct answer costs just 0.01. If you were wrong, the whole confidence becomes the error: 90% confident and wrong costs 0.81.',
            },
            {
              label: 'Step 3: Compare two wrong answers',
              formula: '$$\\frac{B_{0.9,\\,\\text{wrong}}}{B_{0.6,\\,\\text{wrong}}} = \\frac{0.9^2}{0.6^2} = \\left(\\frac{0.9}{0.6}\\right)^{2} = 2.25$$',
              explanation:
                'A student who is 90% sure and wrong pays more than twice what a doubting 60%-sure student pays for the same wrong answer. Confidence compounds the cost of error — this is the arithmetic behind "confident errors are the expensive kind."',
            },
            {
              label: 'Step 4: Average over a set',
              formula: '$$B = \\frac{1}{N}\\sum_{i=1}^{N}(p_i-o_i)^2$$',
              explanation:
                'A whole practice set collapses to one Brier score. A coin-flipper who always declares 50% on 50/50 items averages (0.5)² = 0.25 — the chance baseline that any serious predictor must beat.',
            },
            {
              label: 'Step 5: Why honesty is the optimum',
              formula: '$$p_{\\text{reported}} = p_{\\text{true}}$$',
              explanation:
                'The Brier score is a strictly proper scoring rule: whatever your true probability of being right, the squared penalty is minimized by declaring exactly that number. Inflating to feel good raises the expected penalty; understating to be safe does too.',
            },
          ],
          result:
            'The Brier score makes the calibration ritual auditable: bias tells you the direction of your error, and B tells you its size — with confident errors billed at the square. The student\'s operating rule falls straight out: after each practice set, mark the items you got wrong while feeling sure. Those are the 0.81s, and they are exactly where the next hour of study belongs.',
        },
        {
          kind: 'para',
          text: 'One carve keeps this lesson honest. Overconfidence also appears as a general judgment bias — anchoring, availability, the whole catalog — and the cognitive-biases lesson in the social sciences owns that machinery. Here we are narrower: the self-assessment of your own learning during study, where the countermeasure is procedural rather than rhetorical. You cannot out-argue a fluency illusion; you can only run a better experiment on yourself.',
        },
        {
          kind: 'para',
          text: 'The exam-strategy lesson owns test-day tactics; this lesson owns the term-long feedback loop that makes test day boring. Its quiet payoff is efficiency: students who calibrate stop polishing what is already solid and stop ignoring what is quietly failing, which is where the recovered hours come from. None of this requires extra study time — it redirects time that was already being spent, using measurements that were already available.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: a student has covered five topics for a midterm and has one 20-question practice set and three evenings left. Allocate the evenings honestly.',
            'Recall the governing idea: predict before testing, compare predicted to actual per topic, and spend where calibration shows the largest gap.',
            'Apply: on Tuesday she writes predicted scores per topic (thermodynamics 90%, kinetics 75%, equilibrium 85%, bonding 80%, organic 70%), takes the 20-question set, and scores 55% overall — organic 40% against a predicted 70%, equilibrium 85% as predicted.',
            'State the result: the two evenings go to organic first and bonding second, not to the topics that felt best to review. Next Friday she predicts again before the second set; the prediction gap itself is the progress metric.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Students run predict-then-test cycles on practice exams and spend revision where the gap is widest.',
            'Programmers keep a bug journal and predict whether they can re-solve old problems cold before re-reading solutions.',
            'Language learners spot-check comprehension by translating a paragraph cold instead of nodding along with subtitles.',
            'Professionals rehearse presentations by explaining slides from a blank screen, exposing which points are recognition-only.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'The first pitfall is monitoring by feeling: stopping when the material looks familiar. Feelings of fluency are the noise this whole lesson exists to filter out. The second is grading leniently at recall — half-remembered counts as lost in practice; the rubric is produce-it-cold or it does not count. The third is running the loop once: a single predict-test round is a snapshot, and calibration only improves with repeated cycles where predictions are written down beforehand, honestly, and in ink.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Metacognition', def: 'Thinking about thinking — studying how you learn so you can improve how you learn.' },
            { term: 'Self-regulation cycle', def: 'Assess the task, evaluate strengths, plan, apply and monitor, reflect and adjust.' },
            { term: 'Fluency illusion', def: 'Mistaking smooth familiarity from rereading or highlighting for actual knowledge.' },
            { term: 'Calibration', def: 'The match between predicted performance and actual performance, measured and tightened over rounds.' },
            { term: 'Retrieval practice', def: 'Producing answers from memory; the honest instrument for judging what you know.' },
            { term: 'Judgment of learning', def: 'Your moment-to-moment estimate of what you have just learned — accurate only when grounded in testing.' },
            { term: 'Knowledge of cognition', def: 'What you know about strategies, task demands and your own strengths and weaknesses.' },
            { term: 'Brier score', def: 'The mean squared gap between stated confidence and being correct; confident errors are billed at the square.' },
            { term: 'Delayed JOL', def: 'A judgment of learning made minutes after study — ideally after a quick self-test; far more accurate than an immediate judgment.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Why do rereading and highlighting rate low utility for real learning?',
              options: ['They are too slow', 'They create fluency that feels like mastery without testing generation', 'They only work for young children', 'They damage the eyes'],
              answer: 1,
              explain: 'Familiarity hums before learning arrives; smoothness is a feeling, not evidence.',
            },
            {
              q: 'The five-step self-regulation cycle begins with:',
              options: ['Planning the schedule', 'Assessing what the task actually asks for', 'Rewarding yourself', 'Highlighting the key passages'],
              answer: 1,
              explain: 'Strategy choice is downstream of task assessment — misread the task and every later step optimizes the wrong thing.',
            },
            {
              q: 'In a calibration ritual, the crucial comparison is:',
              options: ['Study hours versus grades', 'Predicted performance versus actual performance, per topic', 'Notebooks versus flashcards', 'This week versus last week in pages read'],
              answer: 1,
              explain: 'The prediction gap per topic is the data that tells you where hours will actually pay.',
            },
            {
              q: 'When quizzing yourself, the review literature says the critical part is:',
              options: ['Getting every answer right', 'Actively recalling and using the information rather than being told it', 'Finishing quickly', 'Using only official past papers'],
              answer: 1,
              explain: 'Retrieval attempts — even failed ones — are the measurement and the training effect; correctness polishing comes after.',
            },
            {
              q: 'The word "metacognition" entered the literature in 1979 through the work of:',
              options: ['Hermann Ebbinghaus', 'John Flavell', 'Benjamin Bloom', 'Tony Buzan'],
              answer: 1,
              explain: 'Flavell named the field; Nelson and Narens (1990) later supplied the meta-level/object-level monitoring-and-control diagram the lesson uses.',
            },
            {
              q: 'Judgments of learning become far more accurate when they are made:',
              options: ['Immediately, while the material is fresh', 'A few minutes after study, after a brief self-test, when fluency has faded', 'After rereading the passage one more time', 'Only at the end of the course'],
              answer: 1,
              explain: 'Nelson and Dunlosky (1991): delayed JOLs correlated about .90 with later recall versus about .50 immediate — the delay strips out study-side fluency and samples retrieval itself.',
            },
            {
              q: 'You are 90% confident on one item and wrong; 60% confident on another and also wrong. The Brier contributions are:',
              options: ['0.9 and 0.6', '0.81 and 0.36 — the confident error costs 2.25 times more', '0.09 and 0.06 — the same for both', 'Zero, since both were honest attempts'],
              answer: 1,
              explain: 'Wrong answers contribute p²: 0.9² = 0.81 and 0.6² = 0.36, a ratio of (0.9/0.6)² = 2.25 — confidence is billed at the square.',
            },
            {
              q: 'In the worked example, where do the two remaining evenings go?',
              options: ['To thermodynamics and kinetics — the highest predicted scores', 'To organic first, bonding second — the widest predicted-versus-actual gaps', 'Split evenly across all five topics', 'To equilibrium, because its prediction was met exactly'],
              answer: 1,
              explain: 'Calibration spends where the prediction gap is widest: organic predicted 70% against 40% actual, bonding next — polishing solid topics adds nothing.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'The instrument this lesson tunes is built in active recall, scheduled by spaced repetition, and sharpened by interleaving. For judgment biases beyond self-assessment, the cognitive-biases lesson owns the wider catalog; for exam-day deployment, see the exam-strategy lesson.',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fnd-peer-learning-teaching',
      title: 'The Protégé Effect: Learning by Teaching',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Learning Science',
      tier: 'intermediate',
      concepts: [
        'Explaining is generative',
        'The protégé effect',
        'Expecting to teach already helps',
        'Peer instruction: think, vote, discuss',
        'The teach-back ritual',
        'Study groups that work — and ones that do not',
        'Teaching exposes your gaps',
      ],
      words: 2935,
      readMins: 15,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'The most famous accident in education research happened in a Harvard lecture hall. Eric Mazur, a physics professor with excellent student evaluations, gave his class the Force Concept Inventory — a test of conceptual understanding of Newtonian mechanics — and discovered to his horror that his students could execute algebra flawlessly yet had learned almost nothing about what forces actually do. Then, half by accident, after half an hour of failed explanation he told them to discuss a question among themselves: the room erupted into arguing clusters, and minutes later a student announced they had it. The method born that day — peer instruction — now carries a simple finding with enormous reach: the person who explains the most learns the most.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'Explaining is not the delivery vehicle for finished learning — it is the engine of it. Structuring knowledge well enough to hand it to someone else forces the exact operations passive study skips: organizing, connecting, simplifying, and discovering the places where your own understanding is a bluff. One honest teach-back session outscores hours of nodding.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Why does teaching teach? Because explanation is generative: the explainer must retrieve from memory, reorganize it for a different mind, translate jargon into plain words, and answer the follow-up question that no lecturer anticipated. Those are the operations that build connections between new material and old — precisely what rereading never triggers. The effect also has a motivational face. The protégé effect, documented with teachable agents by Chase and colleagues, shows students make greater effort to learn when responsible for someone or something else than when learning for themselves — and the boost was most pronounced for lower-achieving children, the students whose motivation usually needs the most help.',
        },
        {
          kind: 'para',
          text: 'The protégé effect has been tested most cleanly with teachable agents — computer characters designed to be taught, not to teach. Biswas, Schwartz and colleagues at Vanderbilt built Betty\u2019s Brain, a cartoon agent whose mastery of a science topic depends entirely on the concept map the student teaches her; children who believed they were responsible for Betty\u2019s quiz scores studied harder, consulted more sources and outperformed children who were simply taught the same material by the agent — and the gap was widest, again, for the weakest students. The same logic powers the oldest large-scale classroom version: Jean-Pol Martin\u2019s Lernen durch Lehren (learning by teaching), running in German language classrooms since the 1980s, hands regular lesson content to rotating student teachers while the class interrogates them. Responsibility, not talent, is the variable doing the work — the learner stops asking \u201cwill this be on the test?\u201d and starts asking \u201chow will I survive the explanation?\u201d.',
        },
        {
          kind: 'para',
          text: 'The surprise in the experimental work of Fiorella and Mayer is that anticipation alone already does part of the job: students who merely expected to teach a passage afterward retained more than students who expected a test on it — the expectation itself changes how you process material, hunting for structure that can survive transmission. Actually teaching then added further gains on delayed comprehension tests. So the practice works twice: prepare-to-teach processes deeply, and teach-back consolidates what processing found. The lineage is longer than one study: Linda Annis\u2019s 1983 experiment found students who expected to teach a passage afterward outperformed those who expected a test on it; Nestojko, Bui, Kornell and Bjork extended the point in 2014 by showing the expectancy benefit arrives even when the teaching never happens — expecters organized the material better and recalled more; and Koh, Lee and Lim traced the mechanism toward retrieval, finding the benefit survives comparison against pure retrieval practice. Expectation, in short, is free: it costs nothing to sit down at your desk already rehearsing how you will explain.',
        },
        {
          kind: 'para',
          text: 'Peer instruction is the classroom-scale version, and its cycle is worth stealing wholesale for group study: everyone reads the material before the session; the leader poses a conceptual multiple-choice question — not a calculation, a concept with plausible wrong answers; everyone commits to an answer individually first; then peers convince each other; then everyone votes again. The two-vote structure is the engine: the second vote reveals how many minds actually moved, and the persuasion in between is where the learning happens. A finding worth knowing: when clickers — the electronic voting gadgets — were compared against plain colored flashcards, students learned equally well with either; the hardware was never the mechanism, the discussion was. A group of four with paper cards has everything that matters. The numbers made the method famous. The Force Concept Inventory that exposed Mazur\u2019s class was Hestenes, Wells and Swackhamer\u2019s 1992 instrument — some thirty conceptual questions on Newtonian mechanics, each wrong option built from a documented misconception — and Mazur\u2019s own course had shown superb problem-set scores sitting on near-standstill concept gains. He published Peer Instruction as a book in 1997 and said farewell to pure lecturing in Science in 2009. Richard Hake\u2019s 1998 survey supplied the aggregate verdict: across 6,542 students in 62 courses, traditional lecture moved concept-test scores by an average normalized gain of 0.23, while interactive-engagement courses built around peer discussion averaged 0.48 — twice the movement per hour of the same content.',
        },
        {
          kind: 'figure',
          caption:
            'The peer-instruction cycle. Pre-read before class; a ConcepTest is posed; every student commits to an individual vote; peer discussion follows, where each side must convince the other; then the second vote measures how many minds actually moved. The discussion between the two votes — not the voting hardware — is the mechanism, and Hake\u2019s 6,542-student survey found such interactive courses close twice the fraction of the conceptual gap that lecture does (normalized gain 0.48 vs 0.23).',
          sketchImage: '/diagrams/peer-instruction-cycle-sketch.jpg',
          sketchCaption:
            'Student Laboratory Notebook: the peer-instruction cycle hand-drawn as five stations — pre-read, ConcepTest posed, individual vote, peer discussion, second vote — with curved arrows looping back to the leader and a margin note: \u201cthe discussion is the mechanism.\u201d',
          afterConcept: 4,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="The peer-instruction cycle: pre-read, ConcepTest posed, individual vote, peer discussion, second vote, then the next ConcepTest">
  <!-- station 1: pre-read (ink) -->
  <rect x="52" y="70" width="180" height="76" rx="14" fill="none" stroke="#8a8a93" stroke-width="2.6" stroke-linecap="round" transform="rotate(-0.8 142 108)"/>
  <rect x="55" y="73" width="174" height="70" rx="12" fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.45" transform="rotate(0.6 142 108)"/>
  <circle cx="80" cy="70" r="11" fill="#8a8a93"/>
  <text x="80" y="74.5" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" fill="#ffffff">1</text>
  <text x="146" y="102" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor">Pre-read</text>
  <text x="146" y="126" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">before the session</text>
  <!-- station 2: ConcepTest posed (rose) -->
  <rect x="350" y="66" width="192" height="84" rx="14" fill="none" stroke="#e11d48" stroke-width="2.6" stroke-linecap="round" transform="rotate(0.7 446 108)"/>
  <rect x="353" y="69" width="186" height="78" rx="12" fill="none" stroke="#e11d48" stroke-width="1" opacity="0.45" transform="rotate(-0.5 446 108)"/>
  <circle cx="378" cy="66" r="11" fill="#e11d48"/>
  <text x="378" y="70.5" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" fill="#ffffff">2</text>
  <text x="448" y="100" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor">ConcepTest posed</text>
  <text x="448" y="122" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">a concept, with plausible</text>
  <text x="448" y="138" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">wrong answers</text>
  <!-- station 3: individual vote (amber) -->
  <rect x="648" y="70" width="180" height="76" rx="14" fill="none" stroke="#d97706" stroke-width="2.6" stroke-linecap="round" transform="rotate(0.6 738 108)"/>
  <rect x="651" y="73" width="174" height="70" rx="12" fill="none" stroke="#d97706" stroke-width="1" opacity="0.45" transform="rotate(-0.7 738 108)"/>
  <circle cx="676" cy="70" r="11" fill="#d97706"/>
  <text x="676" y="74.5" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" fill="#ffffff">3</text>
  <text x="742" y="102" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor">Individual vote</text>
  <text x="742" y="126" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">commit before comparing</text>
  <!-- station 4: peer discussion (emerald, the mechanism) -->
  <rect x="240" y="298" width="242" height="86" rx="14" fill="none" stroke="#059669" stroke-width="2.6" stroke-linecap="round" transform="rotate(-0.7 361 341)"/>
  <rect x="243" y="301" width="236" height="80" rx="12" fill="none" stroke="#059669" stroke-width="1" opacity="0.45" transform="rotate(0.5 361 341)"/>
  <circle cx="268" cy="298" r="11" fill="#059669"/>
  <text x="268" y="302.5" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" fill="#ffffff">4</text>
  <text x="365" y="332" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor">Peer discussion</text>
  <text x="365" y="354" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">convince each other</text>
  <rect x="306" y="364" width="112" height="17" rx="8.5" fill="#059669" opacity="0.14"/>
  <text x="362" y="376.5" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#059669">the mechanism</text>
  <!-- station 5: second vote (amber) -->
  <rect x="648" y="298" width="180" height="86" rx="14" fill="none" stroke="#d97706" stroke-width="2.6" stroke-linecap="round" transform="rotate(0.8 738 341)"/>
  <rect x="651" y="301" width="174" height="80" rx="12" fill="none" stroke="#d97706" stroke-width="1" opacity="0.45" transform="rotate(-0.6 738 341)"/>
  <circle cx="676" cy="298" r="11" fill="#d97706"/>
  <text x="676" y="302.5" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" fill="#ffffff">5</text>
  <text x="742" y="332" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor">Second vote</text>
  <text x="742" y="354" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">measures the movement</text>
  <!-- arrows: 1→2, 2→3, 3→4, 4→5, loop 5→2 -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
    <path d="M238 106 Q292 96 340 104"/>
    <path d="M340 104 l-11 -4 M340 104 l-10 5"/>
    <path d="M548 104 Q596 96 640 104"/>
    <path d="M640 104 l-11 -4 M640 104 l-10 5"/>
    <path d="M726 152 Q748 236 494 294"/>
    <path d="M494 294 l12 1 M494 294 l8 -8"/>
    <path d="M488 340 Q566 334 640 340"/>
    <path d="M640 340 l-11 -4 M640 340 l-10 5"/>
  </g>
  <path d="M716 294 Q600 226 470 158" fill="none" stroke="#e11d48" stroke-width="2.2" stroke-dasharray="7 6" stroke-linecap="round"/>
  <path d="M470 158 l12 0 M470 158 l7 9" fill="none" stroke="#e11d48" stroke-width="2.2" stroke-linecap="round"/>
  <text x="598" y="216" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#e11d48">next ConcepTest</text>
</svg>`,
        },
        {
          kind: 'para',
          text: 'Solo learners get the same engine through the teach-back ritual, best known as the Feynman technique: study the concept, then explain it aloud, from memory, in plain words, to an imagined novice — no jargon to hide behind, because the novice would not understand it anyway. Every stall, every circular sentence, every "um, well, basically" marks a gap. You return to the source only for the stalled points, repair them, and explain again, simpler. The ritual is honest in a way rereading cannot be: air does not lie, and silence where an explanation should be is the exact location of the hole in your knowledge. Software engineers built the same ritual into their trade and named it rubber-duck debugging: Hunt and Thomas\u2019s The Pragmatic Programmer (1999) tells of explaining code, line by line, to a rubber duck on the desk, because verbalizing surfaces the bug without the duck needing to say a word. The duck never answers — and that is precisely why the method works: the explainer cannot lean on the listener\u2019s half-nods.',
        },
        {
          kind: 'figure',
          caption:
            'The teach-back ritual as a repair loop. Study the concept, then explain aloud from memory in plain words — no source, no jargon. A stall is not failure; it is the exact location of a gap. Repair only the stalled point from the source, then explain again, simpler; a clean run closes the loop. Rubber-duck debugging runs the identical loop on code, with a listener who never answers.',
          afterConcept: 5,
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="The teach-back repair loop: study, explain aloud from memory, stall check, repair only the stalled point, explain again simpler, or a clean run closes the loop">
  <!-- station: study the concept (ink) -->
  <rect x="330" y="40" width="222" height="66" rx="14" fill="none" stroke="#8a8a93" stroke-width="2.6" stroke-linecap="round" transform="rotate(-0.7 441 73)"/>
  <rect x="333" y="43" width="216" height="60" rx="12" fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.45" transform="rotate(0.5 441 73)"/>
  <text x="443" y="80" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor">Study the concept</text>
  <!-- station: explain aloud (rose) -->
  <rect x="600" y="150" width="252" height="90" rx="14" fill="none" stroke="#e11d48" stroke-width="2.6" stroke-linecap="round" transform="rotate(0.7 726 195)"/>
  <rect x="603" y="153" width="246" height="84" rx="12" fill="none" stroke="#e11d48" stroke-width="1" opacity="0.45" transform="rotate(-0.5 726 195)"/>
  <text x="728" y="184" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="16" fill="currentColor">Explain aloud</text>
  <text x="728" y="206" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">from memory — plain words,</text>
  <text x="728" y="224" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">no source, no jargon to hide behind</text>
  <!-- decision: stall? -->
  <path d="M640 272 Q642 296 640 292 L734 318 Q738 320 734 322 L642 344 Q640 346 638 344 L546 322 Q542 320 546 318 Z" fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round"/>
  <text x="641" y="312" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="15" font-style="italic" fill="currentColor">Stall?</text>
  <text x="641" y="332" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" fill="#8a8a93">a circular sentence, a gap</text>
  <!-- terminal: clean run (emerald) -->
  <rect x="58" y="150" width="196" height="72" rx="14" fill="none" stroke="#059669" stroke-width="2.6" stroke-linecap="round" transform="rotate(0.7 156 186)"/>
  <rect x="61" y="153" width="190" height="66" rx="12" fill="none" stroke="#059669" stroke-width="1" opacity="0.45" transform="rotate(-0.5 156 186)"/>
  <text x="158" y="180" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="15.5" fill="currentColor">Clean run</text>
  <text x="158" y="202" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#059669">loop closed — move on</text>
  <!-- station: repair (amber) -->
  <rect x="150" y="346" width="250" height="76" rx="14" fill="none" stroke="#d97706" stroke-width="2.6" stroke-linecap="round" transform="rotate(-0.6 275 384)"/>
  <rect x="153" y="349" width="244" height="70" rx="12" fill="none" stroke="#d97706" stroke-width="1" opacity="0.45" transform="rotate(0.5 275 384)"/>
  <text x="277" y="376" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="15.5" fill="currentColor">Repair the stalled point</text>
  <text x="277" y="398" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="11.5" font-style="italic" fill="#8a8a93">reread only that — not the whole chapter</text>
  <!-- arrows -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
    <path d="M512 82 Q580 92 614 146"/>
    <path d="M614 146 l-1 -12 M614 146 l9 -7"/>
    <path d="M700 244 Q712 258 690 276"/>
    <path d="M690 276 l2 -12 M690 276 l10 -6"/>
  </g>
  <!-- yes → repair -->
  <path d="M544 328 Q486 356 408 372" fill="none" stroke="#d97706" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M408 372 l12 2 M408 372 l9 -8" fill="none" stroke="#d97706" stroke-width="2.4" stroke-linecap="round"/>
  <text x="492" y="340" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#d97706">yes — a gap, mapped</text>
  <!-- no → clean run -->
  <path d="M544 314 Q400 300 260 216" fill="none" stroke="#059669" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M260 216 l12 3 M260 216 l6 10" fill="none" stroke="#059669" stroke-width="2.4" stroke-linecap="round"/>
  <text x="400" y="276" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#059669">no</text>
  <!-- repair → explain again (loop) -->
  <path d="M398 352 Q478 250 596 206" fill="none" stroke="#e11d48" stroke-width="2.2" stroke-dasharray="7 6" stroke-linecap="round"/>
  <path d="M596 206 l-12 -2 M596 206 l-8 9" fill="none" stroke="#e11d48" stroke-width="2.2" stroke-linecap="round"/>
  <text x="500" y="262" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#e11d48">explain again, simpler</text>
</svg>`,
        },
        {
          kind: 'para',
          text: 'Study groups earn their reputation only when they run on this engine. The good version rotates an explainer role each session, members who commit to individual answers before comparing, and a norm of challenging claims rather than collecting them — a journal-club culture, where discussing a paper or problem set forces active engagement. The bad version is a comfort ritual: one person explaining to polite nods, or worse, a pool of confidently shared misconceptions — because peers, unlike sources, do not fact-check each other. The rule: groups should multiply explainers, not audiences. And a boundary keeps this lesson honest: delivery skills — posture, projection, stage fright — live in the public-speaking topic; here it is always the explanation, never the performance, that pays. The tutor gains too, often as much as the tutee: Topping\u2019s 1996 review of peer tutoring in further and higher education found tutors repeatedly matching or exceeding their students\u2019 gains — because the tutor does the retrieving, the reorganizing and the answering. If you cannot find a group, be the tutor: volunteer in a homework clinic, mentor a junior year, or teach the topic to an empty room with more conviction than it will ever return.',
        },
        {
          kind: 'para',
          text: 'Teaching is also the sharpest gap-detector in the study toolkit, and it earns that role honestly. A gap found by teaching announces itself — the sentence dies mid-clause, the example refuses to come, the \u201cwhy\u201d question hangs in the air — while a gap found by rereading hides behind the smooth familiarity of the page. That announcement is exactly the feedback calibration needs: a stall during your teach-back is a graded, located judgment of your own understanding, more honest than any confidence rating, and it arrives attached to a repair plan — reread the stalled point only. Run the metacognition lesson\u2019s advice through this lesson\u2019s engine: predict, explain, compare, repair. The student who teaches weekly is running a full diagnostic cycle on their own knowledge every seven days, and their map of what they do not yet know is the most current document in their study system.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: two students must master the immune system chapter — one plans to reread it twice; the other runs a 25-minute teach-back. Whose Friday is better spent?',
            'Recall the governing idea: explanation is generative — retrieval plus reorganization plus translation — while rereading only rehearses recognition.',
            'Apply: the second student studies once, closes the book, and explains B-cell activation aloud to an imaginary class. The explanation sails until antibody class-switching, where it stalls twice.',
            'State the result: the stall map is the study plan — one targeted reread of class-switching, then a second, simpler teach-back that runs clean. Twenty-five minutes produced a ranked map of what is known and a repair, where rereading twice produces only the feeling of coverage.',
          ],
        },
        {
          kind: 'derivation',
          title: 'How far did the room move? Deriving Hake\u2019s normalized gain',
          statement:
            'A raw improvement between the two votes flatters weak rooms and buries the gains of already-strong ones. Hake\u2019s normalized gain $g$ rescales the movement by the improvement that was actually possible — and gives peer-instruction courses a number comparable across classrooms.',
          prerequisites: ['Class votes as fractions of the room', 'Elementary algebra'],
          steps: [
            {
              label: 'Step 1: Fix the starting point',
              formula: '$$s_i = \\frac{\\text{correct on the first vote}}{N}$$',
              explanation:
                'Let the class size be $N$ and let $s_i$ be the fraction answering the ConcepTest correctly on the individual vote — the knowledge the room walked in with (or gained from pre-reading).',
            },
            {
              label: 'Step 2: Write the ceiling',
              formula: '$$1 - s_i$$',
              explanation:
                'No discussion can create more than the fraction that was missing. The largest possible movement is the gap $1 - s_i$: a strong room with $s_i = 0.8$ has only $0.2$ of headroom left, so a raw score alone cannot say how well the session worked.',
            },
            {
              label: 'Step 3: Measure the actual movement',
              formula: '$$s_f - s_i$$',
              explanation:
                'After peer discussion, the second vote lands at $s_f$. The raw movement is the difference — but identical discussions should not earn identical credit in a room that started at 0.8 and one that started at 0.3.',
            },
            {
              label: 'Step 4: Normalize by what was possible',
              formula: '$$g = \\frac{s_f - s_i}{1 - s_i}$$',
              explanation:
                'Dividing by the headroom converts the raw gain into a fraction of what was achievable: $g = 0$ means the discussion moved nobody, $g = 1$ means every wrong first vote was persuaded.',
            },
            {
              label: 'Step 5: Run the classroom arithmetic',
              formula: '$$g = \\frac{0.65 - 0.35}{1 - 0.35} = \\frac{0.30}{0.65} \\approx 0.46$$',
              explanation:
                'A room voting 35% correct before discussion and 65% after moved 0.30 of a possible 0.65 — a normalized gain of about 0.46, right in the interactive-engagement band.',
            },
          ],
          result:
            'Hake\u2019s survey of 6,542 students across 62 courses gives the reference bands: traditional lecture averages $\\langle g \\rangle \\approx 0.23$, interactive-engagement teaching built around peer discussion averages $\\langle g \\rangle \\approx 0.48$. Same content, same concept tests — the discussion roughly doubles the fraction of the gap that closes. A teach-back of one is harder to count, but the stall map is $g$ written by hand.',
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Classrooms run think–vote–discuss cycles on conceptual questions, with the second vote measuring the room\u2019s movement.',
            'Workplaces use rubber-duck debugging and design reviews — explaining code to a colleague exposes the flaw before the test does.',
            'Medical teams run case teach-backs where the junior presents and the room interrogates the reasoning.',
            'Families and study partners use "explain it to me, I\u2019m new" sessions where the listener asks the obvious questions.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'The first pitfall is teaching from the open page — reading aloud with the source visible is recitation, not generation; close the book first. The second is explaining to an audience of nods: pick listeners who ask questions, or ask the questions yourself. The third is letting a group drift into misconception-pooling — agree that any claim anyone finds convincing gets checked against a source before the session ends. And the fourth is polishing the performance instead of the explanation: this is not public speaking, and clarity beats charisma every time.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Generative processing', def: 'Learning operations that build and reorganize knowledge — retrieving, connecting, translating, simplifying.' },
            { term: 'Protégé effect', def: 'Greater effort to learn when responsible for teaching someone or something else.' },
            { term: 'Teaching expectancy', def: 'The finding that merely expecting to teach already deepens how material is processed.' },
            { term: 'Peer instruction', def: 'Mazur\u2019s cycle: pre-read, individual vote, peer discussion, second vote on conceptual questions.' },
            { term: 'ConcepTest', def: 'A multiple-choice question targeting a concept, with wrong options built from known misconceptions.' },
            { term: 'Teach-back ritual', def: 'Explain from memory in plain words to an imagined novice; repair only the stalled points.' },
            { term: 'Journal club', def: 'A group norm of discussing and challenging material — active engagement over passive collection.' },
            { term: 'Teachable agent', def: 'A computer character designed to be taught by the student — the protégé effect\u2019s cleanest laboratory (Betty\u2019s Brain).' },
            { term: 'Normalized gain (Hake\u2019s g)', def: 'The fraction of the available improvement actually gained: g = (s_f − s_i)/(1 − s_i).' },
            { term: 'Lernen durch Lehren', def: 'Jean-Pol Martin\u2019s learning-by-teaching method, running in German classrooms since the 1980s.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The Force Concept Inventory revealed to Mazur that his students:',
              options: ['Could not do algebra', 'Solved problems procedurally but lacked conceptual understanding of forces', 'Preferred lectures to discussions', 'Were unprepared for exams'],
              answer: 1,
              explain: 'Fluent execution masked hollow concepts — the discovery that reorganized physics teaching worldwide.',
            },
            {
              q: 'Fiorella and Mayer found that students who expected to teach a passage:',
              options: ['Skimmed it faster', 'Retained more than students who expected to be tested on it', 'Learned less because they felt pressure', 'Needed no further review'],
              answer: 1,
              explain: 'Expecting to teach changes processing — the hunt for transmittable structure is itself generative.',
            },
            {
              q: 'The clicker-versus-flashcard study showed that:',
              options: ['Clickers double learning gains', 'The technology is irrelevant — the peer discussion is the mechanism', 'Flashcards suppress discussion', 'Voting harms retention'],
              answer: 1,
              explain: 'Learning was equal with either device; commitment plus convincing each other is what moves minds.',
            },
            {
              q: 'In the teach-back ritual, a stall during your explanation means:',
              options: ['You should switch topics', 'The exact location of a gap — reread only that point and explain again', 'You need to memorize more jargon', 'The listener should explain instead'],
              answer: 1,
              explain: 'Silence where an explanation should be maps the hole precisely — that economy is the method\u2019s advantage.',
            },
            {
              q: 'In the Betty\u2019s Brain studies, the protégé effect appeared because students who believed they were responsible for the agent\u2019s learning:',
              options: ['Were graded more harshly by the researchers', 'Studied harder and used more sources than students taught by the same agent', 'Found the agent easier to fool than a human teacher', 'Spent less time on the material but memorized more jargon'],
              answer: 1,
              explain: 'Chase and colleagues\u2019 teachable-agent studies: responsibility for the pupil — not talent or grading pressure — drives the extra effort, and the effect is strongest in lower-achieving students.',
            },
            {
              q: 'Nestojko, Bui, Kornell and Bjork (2014) sharpened the expectancy finding: students who merely expected to teach later — but were never asked to —',
              options: ['Learned nothing beyond the control group', 'Did worse because the expectation was violated', 'Still organized the material better and recalled more', 'Outperformed everyone only on reading speed'],
              answer: 2,
              explain: 'The benefit is encoded during study, not delivered at the teach-back — expecting to explain forces the hunt for transmittable structure even if the explanation never happens.',
            },
            {
              q: 'A class votes 40% correct before peer discussion and 60% after. Hake\u2019s normalized gain g is:',
              options: ['0.20 — the raw movement', '\u2248 0.33 — a third of the gap closed', '0.50 — half the room moved', '1.5 — the votes multiplied'],
              answer: 1,
              explain: 'g = (0.60 \u2212 0.40)/(1 \u2212 0.40) = 0.20/0.60 \u2248 0.33: the headroom after the first vote was 0.60 and the discussion closed 0.20 of it — below Hake\u2019s interactive-engagement band of \u2248 0.48.',
            },
            {
              q: 'Your study group has just agreed on a neat explanation everyone finds convincing. The lesson\u2019s rule for the next step is:',
              options: ['Record it and move on — consensus is the goal', 'Check the claim against a source before the session ends, because peers do not fact-check each other', 'Vote on it — the majority settles what is true', 'Have the quietest member repeat it back'],
              answer: 1,
              explain: 'A group can pool misconceptions as efficiently as insights; the journal-club norm is challenge-and-check, not agreement-collection.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'Teach-backs pair naturally with the metacognition lesson — a stall map is calibration data. The reading-scientific-papers lesson builds the journal-club skill of surviving a real paper, and the public-speaking topic owns delivery when explaining stops being private.',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'fnd-reading-scientific-papers',
      title: 'Reading Scientific Papers Without Drowning',
      domain: 'Foundation Learning',
      field: 'Reading & Literacy',
      branch: 'Reading Strategies',
      tier: 'intermediate',
      concepts: [
        'Papers are not textbooks',
        'The IMRaD skeleton',
        'The three-pass method',
        'The six questions to ask',
        'Figures first: unpacking the data',
        'Peer review, preprints and retraction',
        'Building a literature trail',
      ],
      words: 1461,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'The first scientific paper a student reads usually goes badly, and the reason is a category error: papers are not textbooks. A textbook is engineered for a learner — sequenced, explained, merciful. A paper is a compressed report written for working peers who already hold the field\u2019s context: it assumes the background, compresses the methods into terse technical prose, and buries its reasoning in a discussion that argues as much as it reports. Reading it front to back at textbook speed produces exhaustion by page three and understanding by page none. The skill has its own techniques, and they are teachable.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'Primary literature is where knowledge actually lives: every course, textbook and encyclopedia is downstream of papers. A student who can triage a paper in ten minutes, unpack a figure honestly, and judge how much the conclusions can bear has opened the one door that never closes — reading the frontier directly, in any subject, for life.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Almost all empirical papers share one skeleton: IMRaD — Introduction, Methods, Results and Discussion — bracketed by an abstract that condenses the whole, and a reference list that trails back into the field\u2019s history. The Introduction sells the question and previews the answer. Methods describes exactly what was done, in reproducible detail. Results presents the data — the figures and tables are the paper\u2019s actual payload. Discussion interprets, concedes limits, and claims significance. Knowing the skeleton converts the paper from a wall of prose into a set of drawers you can open in any order — and the order is never page one to page last.',
        },
        {
          kind: 'para',
          text: 'The canonical triage is Keshav\u2019s three-pass method. Pass one, five to ten minutes: read the title, abstract and introduction; read the section and sub-section headings only; read the conclusions; glance over the references, ticking off any you know. Then answer five quick checks — category (what type of paper is this?), context (which related work does it build on?), correctness (do the assumptions look valid?), contributions (what is new here?), clarity (is it well written?) — and decide: discard, skim, or deep-read. Most papers deserve the first outcome, and pass one is designed to tell you that cheaply.',
        },
        {
          kind: 'para',
          text: 'Pass two, up to an hour: read with care but skip the heavy proofs and derivations; look hard at every figure, diagram and table — axes, units, error bars, and whether the patterns shown actually support the sentences that cite them; jot which unread references matter for your background. Pass three, four or five hours for a beginner: the reviewer\u2019s pass — virtually re-implement the work, assuming the same starting point and trying to recreate both its steps and its conclusions, then judge the strong and weak assumptions. Nobody runs pass three on every paper; the discipline is knowing which of the three passes your current goal needs.',
        },
        {
          kind: 'para',
          text: 'The PLOS "Ten Simple Rules" paper distills a compatible checklist, and three of its rules belong in every reader\u2019s hands. Pick your reading goal first — a methods shopper, a skeptic and a surveying student read the same paper differently. Understand the author\u2019s goal — identify the article type (research, review, methods, commentary) before grading it. And ask the six questions of any study: what did the authors want to know; what did they do; why was it done that way; what do the results show; how did they interpret them; and what should come next — asked of the whole paper and of each figure within it. Rule nine of that same paper — talk about it — is the peer-instruction lesson in disguise: discussing a paper in a journal club forces the active reading that silent skimming evades.',
        },
        {
          kind: 'para',
          text: 'Credibility needs its own layer, because "it was published" is weaker evidence than most people assume. Peer review screens papers for competence and fit before publication — it does not certify truth; errata, debates and failed replications are part of the normal life of any finding. Preprints circulate before any review and should be read as drafts. And retraction exists: papers are withdrawn for error or misconduct, so a citation is worth checking at the source rather than trusting downstream. None of this is cynicism — it is the same calibration this library teaches for self-assessment, pointed outward at claims.',
        },
        {
          kind: 'para',
          text: 'Finally, build the literature trail. A paper is a node in a network: its introduction points backward to the work it stands on, and forward searches — who cited it — point to where the conversation went. The standard survey technique: find three to five recent papers in the area, run pass one on each, mine their reference sections for the repeated names and shared citations — those clusters are the field\u2019s load-bearing work. Read those next. The boundary against other lessons: research-methods topics own how studies are designed, and the comprehension lessons own general reading strategy; this lesson owns the genre — primary sources, read on purpose.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: a student needs one research paper on spaced practice for an essay by Friday, from a search that returns forty candidates.',
            'Recall the governing idea: triage cheaply — pass one on many, pass two on few, pass three almost never.',
            'Apply: run ten-minute pass ones on five recent candidates: title, abstract, headings, conclusions, reference glance; answer category, context, correctness, contributions, clarity for each.',
            'State the result: three are discarded (commentary pieces, one barely related), one is kept as background (a review article — read pass two for its figures), and one empirical study earns a full pass two: every figure unpacked against its caption, methods skimmed for sample size, its two repeated references queued for next. Friday\u2019s essay now stands on papers actually read, not abstracts alone.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Undergraduates triage assigned readings with pass one before committing deep hours to the two that matter.',
            'Clinicians screen new studies for practice relevance, checking sample and outcome measures in the figures before trusting headlines.',
            'Engineers and data scientists run pass three on methods papers whose algorithms they are about to implement.',
            'Journal clubs run the six questions on one paper per session, distributing figures among members to unpack.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'The first pitfall is linear reading — starting at page one, word by word, until morale dies; the skeleton exists to be raided. The second is trusting the abstract alone: it is an advertisement written by the authors, and the figures are where the receipts live. The third is confusing peer review with proof, or treating a preprint as settled — publication is a floor, not a ceiling. The fourth is collecting PDFs without a trail: a folder of unread papers is not a literature survey; repeated citations are.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'IMRaD', def: 'The standard paper skeleton — Introduction, Methods, Results and Discussion.' },
            { term: 'Three-pass method', def: 'Triage (5–10 min), careful skim with figures (≤1 h), then deep re-implementation (hours) — matched to your goal.' },
            { term: 'The five Cs', def: 'Category, context, correctness, contributions, clarity — the pass-one checks.' },
            { term: 'The six questions', def: 'Motivation, approach, rationale, results, interpretation, next steps — asked of paper and figures alike.' },
            { term: 'Peer review', def: 'Pre-publication screening by experts; a quality floor, not a certificate of truth.' },
            { term: 'Preprint', def: 'A manuscript circulated before peer review — read as a draft, cite with care.' },
            { term: 'Retraction', def: 'Formal withdrawal of a published paper — the reason citations are checked at the source.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Reading a research paper like a textbook fails because papers:',
              options: ['Are too short', 'Are compressed reports written for peers who already hold the context', 'Contain no useful information', 'Use simpler vocabulary than textbooks'],
              answer: 1,
              explain: 'Papers assume background and compress methods — front-to-back reading at textbook speed drowns before understanding.',
            },
            {
              q: 'Keshav\u2019s pass one is designed to:',
              options: ['Master the mathematics', 'Decide cheaply — in five to ten minutes — whether to discard, skim or deep-read', 'Memorize the references', 'Rewrite the abstract'],
              answer: 1,
              explain: 'Pass one buys the 5 Cs — category, context, correctness, contributions, clarity — before any real hours are spent.',
            },
            {
              q: 'The paper\u2019s actual data payload lives mostly in:',
              options: ['The abstract', 'The introduction', 'The figures, tables and their captions', 'The acknowledgments'],
              answer: 2,
              explain: 'Results figures and tables are the evidence; unpacking them — axes, units, error bars — is pass two\u2019s core work.',
            },
            {
              q: 'Peer review guarantees that a published paper is:',
              options: ['True and final', 'Free of all error', 'Merely screened for competence and fit — not certified as truth', 'Written by the journal editor'],
              answer: 2,
              explain: 'Errata, replication debates and retractions are normal science; publication is a floor, not a certificate.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'Discuss what you read with the protégé-effect lesson — journal clubs are its native habitat — and grade your own paper-reading predictions with the metacognition lesson. The SQ3R lesson remains the right tool for textbooks; research-methods topics own how the studies you now read were designed.',
        },
      ],
    },
  ];

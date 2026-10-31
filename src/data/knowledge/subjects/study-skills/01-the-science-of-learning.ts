/**
 * Knowledge Universe — Study Skills & Learning Science — Chapter 01: The Science of Learning
 * 9 lessons · ~25,253 words
 * field: Study Skills & Memory
 * legacy sources: foundation-learning.ts, x36-learning-science-pass.ts, x52-crossverify-pass.ts, x53-crossverify-pass.ts, x75-subjectdepth-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Learning Science]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 fnd-mnemonics-memory-palace — Mnemonics and the Memory Palace: Encoding That Sticks
 *   01.2 fnd-metacognition-calibration — Metacognition and Calibration: Knowing What You Know
 *   01.3 fnd-peer-learning-teaching — The Protégé Effect: Learning by Teaching
 *   01.4 study-self-efficacy-mindset — Self-Efficacy and Mindset: Taking Charge of Your Learning
 *   01.5 study-focused-diffuse-modes — Focused and Diffuse Modes: The Brain's Two Gears
 *   01.6 fnd-spaced-repetition — Spaced Repetition and the Forgetting Curve
 *   01.7 fnd-active-recall — Active Recall: Why Testing Yourself Beats Rereading
 *   01.8 fnd-interleaving — Interleaving: Why Mixed Practice Beats Blocked Practice
 *   01.9 fnd-learning-styles-myth — The Learning-Styles Myth: Why Teaching to Your Style Fails
 */
import type { KnowledgeTopic } from '../../types'

export const studySkillsCh01: KnowledgeTopic[] = [
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
    id: 'study-focused-diffuse-modes',
    title: 'Focused and Diffuse Modes: The Brain\'s Two Gears',
    domain: 'Foundation Learning',
    field: 'Study Skills & Memory',
    branch: 'Learning Science',
    tier: 'core',
    concepts: [
      'Two networks, two modes',
      'Focused mode: the tight pinball machine',
      'Diffuse mode: the spread-out machine',
      'One gear at a time',
      'The Einstellung effect',
      'Why math and science feel harder',
      'Priming the diffuse mode: Dali, Edison and Poincaré',
      'The Pomodoro as mode training',
      'Hard-start, jump-to-easy on exams',
    ],
    words: 3000,
    readMins: 15,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'Every student knows two experiences that seem to contradict each other. Grind at a hard problem for an hour and nothing comes; step away to wash dishes and the answer walks in uninvited. The contradiction dissolves once you know the brain runs on two different gears. Since the early 2000s neuroscientists have mapped two families of networks the brain switches between: highly attentive states, and relaxed, spread-out resting-state networks. Barbara Oakley — whose companion course became the most popular online course in the world — built the opening chapters of A Mind for Numbers on this distinction, calling the two thinking processes the focused mode and the diffuse mode. Understanding when each gear engages, and how to shift deliberately, is a genuine study technique, not a metaphor.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Most study advice trains only the focused mode: concentrate harder, sit longer, push through. But new learning and stubborn problems are precisely where the focused gear performs worst — it can only run along pathways you already own. Knowing how to step away at the right moment, and how to set the diffuse mode to work on the problem overnight, converts wasted frustration into solved problems. It is the difference between effort and traction.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The scanner evidence is exactly this tidy. In 2001 Marcus Raichle\'s group at Washington University described a default mode of brain function: regions — midline frontal and parietal among them — burning MORE oxygen at rest than during outward concentration. Mid-2000s imaging led by Michael Fox and colleagues showed the two families behave like a seesaw — anticorrelated signatures: task-positive up means default-mode down, and the seesaw tipping is the mode switch itself. Oakley\'s terms name this machinery: the focused mode is the engaged, task-positive side; the diffuse mode, the released, default-mode side. The mapping is an analogy, not a wiring diagram, but the direction is solid: releasing attention is a measurable brain state with a job to do.',
      },
      {
        kind: 'para',
        text: 'The focused mode is the brain\'s tight beam. It runs on the concentrating abilities of the prefrontal cortex, right behind your forehead, and it works sequentially and analytically: turn attention onto something and the focused mode is on. Oakley\'s picture is a pinball machine with its rubber bumpers packed close together: a thought launches and bounces rapidly along a well-worn path. That is the mode\'s strength and its limit — it travels familiar routes. Multiplying numbers you already know, rehearsing verb conjugations you learned last week, analysing a swim stroke you can already do: focused mode territory. It is also, in her second image, an attentional octopus sitting over the four-or-so slots of working memory, sending tentacles to different brain areas — which is why interruptions are so costly: each distraction grabs a tentacle.',
      },
      {
        kind: 'para',
        text: 'The diffuse mode is the spread-out machine: bumpers far apart, so a thought travels a long way before hitting anything. It is what runs when you relax your attention and let your mind wander — in the shower, on a walk, in sleep. You cannot command it on, it is not located in one brain area, and it cannot do precise, complex thinking. What it can do is range widely and hook distant ideas together, which is exactly what a genuinely new problem requires. The mathematician Henri Poincaré cracked a problem he had hammered at for weeks only as he stepped onto a holiday bus; the solution arrived complete, from a part of his brain that had kept working while he stopped. One rule comes with the gift: the diffuse mode must have clay to make bricks. It works on what focused effort has already loaded. Relaxing without having studied produces relaxation, not insight.',
      },
      {
        kind: 'figure',
        caption:
          'The two pinball machines, side by side. Left — the focused mode: bumpers packed close under the prefrontal cortex\'s tight beam, so a thought bounces along a well-worn pathway. Right — the diffuse mode: bumpers far apart, so the thought travels long, free-ranging arcs that can hook distant ideas together. One machine at a time.',
        sketchImage: '/diagrams/focused-diffuse-pinball-sketch.jpg',
        sketchCaption:
          'Student Laboratory Notebook: two hand-drawn pinball tables — FOCUSED MODE with bumpers packed close, DIFFUSE MODE with bumpers far apart and long arcs between distant ideas; margin note: one gear at a time.',
        afterConcept: 3,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Two pinball machines: focused mode with closely packed bumpers and a tight well-worn path, diffuse mode with far-apart bumpers and long free-ranging arcs">
  <!-- hand-drawn frames, wobbly double strokes -->
  <rect x="60" y="80" width="330" height="340" rx="18" fill="none" stroke="#8a8a93" stroke-width="3" stroke-linecap="round" transform="rotate(-1 225 250)"/>
  <rect x="64" y="84" width="322" height="332" rx="16" fill="none" stroke="#8a8a93" stroke-width="1.2" opacity="0.55" transform="rotate(0.8 225 250)"/>
  <rect x="490" y="80" width="330" height="340" rx="18" fill="none" stroke="#8a8a93" stroke-width="3" stroke-linecap="round" transform="rotate(1 655 250)"/>
  <rect x="486" y="84" width="338" height="332" rx="16" fill="none" stroke="#8a8a93" stroke-width="1.2" opacity="0.55" transform="rotate(-0.8 655 250)"/>

  <text x="225" y="58" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="#e11d48" text-anchor="middle">Focused mode</text>
  <text x="655" y="58" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="#059669" text-anchor="middle">Diffuse mode</text>

  <!-- focused machine: bumpers packed close -->
  <g stroke="#e11d48" stroke-width="2.4" fill="none" stroke-linecap="round">
    <circle cx="120" cy="140" r="16"/><circle cx="185" cy="130" r="16"/><circle cx="250" cy="140" r="16"/>
    <circle cx="315" cy="135" r="16"/><circle cx="150" cy="205" r="16"/><circle cx="215" cy="200" r="16"/>
    <circle cx="280" cy="205" r="16"/><circle cx="120" cy="270" r="16"/><circle cx="185" cy="265" r="16"/>
    <circle cx="250" cy="270" r="16"/><circle cx="315" cy="265" r="16"/><circle cx="155" cy="330" r="16"/>
    <circle cx="225" cy="330" r="16"/><circle cx="295" cy="330" r="16"/>
  </g>
  <!-- tight well-worn path -->
  <path d="M 225 400 C 235 370, 190 355, 185 330 C 178 300, 215 290, 215 265 C 216 240, 190 225, 185 205 C 180 180, 205 150, 185 135"
        fill="none" stroke="#d97706" stroke-width="3.4" stroke-linecap="round" stroke-dasharray="11 7"/>
  <circle cx="225" cy="400" r="8" fill="#d97706" stroke="#8a8a93" stroke-width="1.5"/>
  <text x="225" y="105" font-family="Georgia, serif" font-size="15" fill="#e11d48" text-anchor="middle">prefrontal cortex — the tight beam</text>
  <text x="225" y="443" font-family="Georgia, serif" font-size="15" fill="#8a8a93" text-anchor="middle">bumpers packed close — a well-worn pathway</text>

  <!-- diffuse machine: bumpers far apart, long arcs -->
  <g stroke="#059669" stroke-width="2.4" fill="none" stroke-linecap="round">
    <circle cx="535" cy="145" r="16"/><circle cx="775" cy="140" r="16"/><circle cx="590" cy="255" r="16"/>
    <circle cx="720" cy="250" r="16"/><circle cx="545" cy="360" r="16"/><circle cx="770" cy="355" r="16"/>
  </g>
  <path d="M 540 400 C 500 340, 640 330, 590 255 C 545 185, 720 220, 775 140"
        fill="none" stroke="#d97706" stroke-width="3.4" stroke-linecap="round" stroke-dasharray="11 7"/>
  <path d="M 775 140 C 800 230, 660 300, 720 250" fill="none" stroke="#d97706" stroke-width="2.2" opacity="0.6" stroke-linecap="round" stroke-dasharray="7 7"/>
  <path d="M 590 255 C 560 320, 620 380, 545 360" fill="none" stroke="#d97706" stroke-width="2.2" opacity="0.6" stroke-linecap="round" stroke-dasharray="7 7"/>
  <circle cx="540" cy="400" r="8" fill="#d97706" stroke="#8a8a93" stroke-width="1.5"/>
  <text x="655" y="118" font-family="Georgia, serif" font-size="15" fill="#059669" text-anchor="middle">hooks distant ideas together</text>
  <text x="655" y="443" font-family="Georgia, serif" font-size="15" fill="#8a8a93" text-anchor="middle">bumpers far apart — long, free-ranging arcs</text>

  <!-- seesaw note between machines -->
  <g transform="translate(440 46) rotate(-2)">
    <rect x="-88" y="-20" width="176" height="36" rx="9" fill="none" stroke="#8a8a93" stroke-width="1.8" stroke-linecap="round"/>
    <text x="0" y="4" font-family="Georgia, serif" font-size="14.5" fill="#8a8a93" text-anchor="middle">one gear at a time</text>
  </g>
  <line x1="440" y1="240" x2="440" y2="300" stroke="#8a8a93" stroke-width="1.6" stroke-dasharray="5 6" stroke-linecap="round"/>
  <text x="440" y="230" font-family="Georgia, serif" font-size="13.5" fill="#8a8a93" text-anchor="middle">seesaw networks:</text>
  <text x="440" y="322" font-family="Georgia, serif" font-size="13.5" fill="#8a8a93" text-anchor="middle">task-positive up, default down</text>
</svg>`},
      {
        kind: 'para',
        text: 'The two modes are exclusive — you are in one or the other, never both at once — but problem solving is a volley between them. Focused mode loads the problem, strains on it, and hands it off; diffuse mode ranges and returns a candidate; focused mode checks and develops it. This explains two familiar failures. Grinding without release: staying in focused mode past the point of diminishing returns blocks the very mode that could help. And diving into homework before reading the textbook or attending the lecture: you launch focused-mode thoughts with no maps at all, so they rattle in the wrong neighbourhood. Struggle first, then step away — in that order.',
      },
      {
        kind: 'para',
        text: 'The focused mode has a specific failure mode so common it earned a name. The Einstellung effect — German for "installation" — is when an idea you already have in mind, or your first approach, prevents a better one from being found. In the pinball picture, your thought bounces around a comfortable upper region while the solution pattern sits elsewhere in the machine, unreached. Everyone who has re-reads a problem using the same broken setup for twenty minutes has met Einstellung; the cure is not more effort in the same groove but a deliberate mode switch — walk, nap, sleep — so the pinball can land somewhere new. Beware, too, the folk version of hemispheric psychology: people are not "left-brained" or "right-brained" — both hemispheres contribute to both modes. The modes are real; the personality quiz is not.',
      },
      {
        kind: 'figure',
        caption:
          'The Einstellung trap, and the way out. The thought keeps bouncing inside the comfortable upper region — your first approach, the groove — while the better solution pattern sits elsewhere, unreached. More laps in the groove change nothing; the release is a deliberate mode switch — walk, nap, sleep — letting the pinball land somewhere new.',
        afterConcept: 5,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Einstellung effect: a pinball trapped bouncing in the region of the first approach while the better solution pattern sits unreached elsewhere; a mode switch releases it to the new region">
  <!-- machine frame -->
  <rect x="80" y="70" width="720" height="350" rx="20" fill="none" stroke="#8a8a93" stroke-width="3" stroke-linecap="round" transform="rotate(-0.6 440 245)"/>
  <rect x="84" y="74" width="712" height="342" rx="18" fill="none" stroke="#8a8a93" stroke-width="1.2" opacity="0.5" transform="rotate(0.7 440 245)"/>

  <!-- title -->
  <text x="440" y="48" font-family="Georgia, serif" font-size="23" font-weight="bold" fill="#8a8a93" text-anchor="middle">The Einstellung effect</text>

  <!-- the groove: upper region with tight bumper cluster -->
  <ellipse cx="300" cy="165" rx="180" ry="80" fill="none" stroke="#e11d48" stroke-width="2" stroke-dasharray="9 7" stroke-linecap="round" transform="rotate(-2 300 165)"/>
  <g stroke="#e11d48" stroke-width="2.2" fill="none" stroke-linecap="round">
    <circle cx="235" cy="135" r="14"/><circle cx="300" cy="125" r="14"/><circle cx="365" cy="135" r="14"/>
    <circle cx="265" cy="190" r="14"/><circle cx="335" cy="190" r="14"/>
  </g>
  <!-- trapped bouncing path -->
  <path d="M 300 218 C 250 200, 262 150, 300 138 C 340 126, 352 176, 318 192 C 292 204, 306 160, 300 148"
        fill="none" stroke="#e11d48" stroke-width="3" stroke-linecap="round" stroke-dasharray="10 7"/>
  <circle cx="300" cy="218" r="8" fill="#d97706" stroke="#8a8a93" stroke-width="1.5"/>
  <text x="300" y="105" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#e11d48" text-anchor="middle">your first approach — the groove</text>
  <text x="300" y="278" font-family="Georgia, serif" font-size="14.5" fill="#8a8a93" text-anchor="middle">more laps here change nothing</text>

  <!-- the better solution pattern, elsewhere -->
  <ellipse cx="655" cy="310" rx="120" ry="62" fill="none" stroke="#059669" stroke-width="2" stroke-dasharray="9 7" stroke-linecap="round" transform="rotate(1.5 655 310)"/>
  <g stroke="#059669" stroke-width="2.2" fill="none" stroke-linecap="round">
    <circle cx="610" cy="290" r="13"/><circle cx="668" cy="282" r="13"/><circle cx="700" cy="322" r="13"/>
    <circle cx="632" cy="340" r="13"/>
  </g>
  <text x="655" y="255" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">the better solution pattern — unreached</text>

  <!-- grinding arrows cycling back -->
  <path d="M 415 190 C 470 170, 500 150, 452 135" fill="none" stroke="#e11d48" stroke-width="2" opacity="0.55" stroke-linecap="round" stroke-dasharray="6 6"/>
  <path d="M 452 135 l 10 -2 m -10 2 l 2 10" stroke="#e11d48" stroke-width="2" opacity="0.55" stroke-linecap="round" fill="none"/>

  <!-- mode switch release arc -->
  <path d="M 316 240 C 420 340, 480 380, 528 342" fill="none" stroke="#d97706" stroke-width="3.4" stroke-linecap="round" stroke-dasharray="12 8"/>
  <path d="M 528 342 l -12 -2 m 12 2 l -6 10" stroke="#d97706" stroke-width="3" stroke-linecap="round" fill="none"/>
  <g transform="translate(430 385) rotate(-1)">
    <rect x="-150" y="-19" width="300" height="38" rx="10" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>
    <text x="0" y="5" font-family="Georgia, serif" font-size="15.5" font-weight="bold" fill="#d97706" text-anchor="middle">mode switch: walk, nap, sleep</text>
  </g>
  <text x="700" y="405" font-family="Georgia, serif" font-size="14.5" fill="#059669" text-anchor="middle">a new approach lands</text>
</svg>`},
      {
        kind: 'derivation',
        title: 'The cost of grinding: why a switch beats another hour in the groove',
        statement:
          'A toy model with honest dials. A stuck problem is solved only when a genuinely NEW approach arrives — the escape event. Compare grinding against load-then-switch cycles using just the geometric wait, E = 1/p.',
        prerequisites: ['Expected value of a geometric random variable', 'The Einstellung effect and the two-modes picture'],
        steps: [
          {
            label: 'Step 1: reduce solving to escape',
            formula: '$$T_{\\text{solve}} = T_{\\text{escape}} + T_{\\text{execute}}$$',
            explanation:
              'Writing out the solution once a fresh approach exists takes the same time either way, so the comparison lives entirely in the time-to-escape.',
          },
          {
            label: 'Step 2: grinding is correlated retries',
            formula: '$$\\mathbb{E}[T_{\\text{grind}}] = \\frac{1}{q}\\ \\text{hours}, \\qquad q = 0.1 \\;\\Rightarrow\\; \\mathbb{E}[T_{\\text{grind}}] = 10\\ \\text{hours}$$',
            explanation:
              'If each focused hour independently offered probability q of surfacing a new approach, the expectation would be 1/q — ten hours at q = 0.1. Einstellung makes even that optimistic: hours re-run the same groove, so retries correlate and effective q keeps falling.',
          },
          {
            label: 'Step 3: the load-then-switch cycle',
            formula: '$$c = 25 + 15 = 40\\ \\text{minutes}, \\qquad P(\\text{escape per cycle}) = p = 0.5$$',
            explanation:
              'One cycle: 25 minutes of honest focused loading, then a 15-minute low-demand break — walk, nap. Each cycle is an independent trial with p = 0.5; that independence is the structural difference: the diffuse mode does not inherit the groove.',
          },
          {
            label: 'Step 4: the geometric wait',
            formula: '$$\\mathbb{E}[n] = \\frac{1}{p} = 2 \\quad\\Longrightarrow\\quad \\mathbb{E}[T_{\\text{switch}}] = c \\cdot \\frac{1}{p} = 40 \\times 2 = 80\\ \\text{minutes}$$',
            explanation:
              'Success probability p gives an expected wait of 1/p trials — two cycles, eighty minutes.',
          },
          {
            label: 'Step 5: compare, then caveat',
            formula: '$$\\frac{\\mathbb{E}[T_{\\text{grind}}]}{\\mathbb{E}[T_{\\text{switch}}]} \\;\\gtrsim\\; \\frac{600}{80} = 7.5$$',
            explanation:
              'Even against generous independent-retry grinding, switching wins several times over; a pessimistic p = 0.1 gives E = 400 minutes, still under ten grinding hours. The constants are illustrative dials, not measurements — what transfers is the structure: switches decorrelate attempts.',
          },
        ],
        result:
          'Load-then-switch beats grinding by roughly an order of magnitude in expected time-to-escape: each switch draws independently from a fresh distribution, each grinding hour re-samples the same Einstellung groove. When stuck: load honestly, switch deliberately, let the geometry work.',
      },
      {
        kind: 'para',
        text: 'Why do mathematics and science punish bad study habits so quickly? Oakley\'s answer is that their ideas are abstract and encrypted. You can point at a cow and the word c-o-w; you cannot point at a live plus-sign, and one symbol like the multiplication sign stands for a whole buried operation. In the pinball analogy, abstractness makes the bumpers spongier — they need extra practice to harden. That is also why these subjects make procrastination so expensive, a link the procrastination lesson develops: language study survives cramming better than a subject whose every idea sits several levels of abstraction deep.',
      },
      {
        kind: 'para',
        text: 'The historical masters used the diffuse mode quite deliberately. Salvador Dalí would fall asleep in a chair holding a key over a plate; as sleep arrived, the key dropped, the clatter woke him, and he carried the diffuse-mode images straight into focused work. Thomas Edison used ball bearings the same way. Their trick was sleeping at the edge of waking, catching the diffuse mode\'s output as it formed. You do not need a plate: a walk without a phone, a run, a nap, a night of sleep primed with the problem — each hands the loaded material to the diffuse gear. The priming matters, which is also why the night before an exam deserves only a light review: you are resting both muscles for the morning, like not running ten miles the day before a marathon. The lab confirms the folklore: a 2009 Psychological Bulletin meta-analysis — Uschi Sio and Thomas Ormerod sweeping the usable incubation experiments from 1964 to 2007 — found the effect real but conditional. Breaks pay out when genuinely low-demand and the problem needs a new idea, not more grind; a demanding break buys almost nothing. And quality beats intensity: Marily Oppezzo and Daniel Schwartz at Stanford (2014) measured creative output rising about 60 percent while walking — even on a treadmill facing a blank wall, which rules out fitness and scenery. A walk without a phone is not a break from the problem; it is the second half of working on it.',
      },
      {
        kind: 'para',
        text: 'The Pomodoro technique is the mode-shifting protocol for people who find neither gear easy to enter. Set a timer for twenty-five minutes, kill every interrupting beep and notification, and work intently at one task — not to finish it, just to work on it. When the timer ends, take a real reward: web, coffee, a walk. The technique works because it matches the machinery: a bounded block of focused mode, a deliberate release that lets the diffuse mode process, and a reward that makes the next block easier to start. Three or four honest blocks in a day move serious work. It is also, as the procrastination lesson shows, a cue-rewriting tool in disguise. The kill-the-notifications step has numbers behind it: Gloria Mark\'s team at the University of California, Irvine, shadowed workers with stopwatches and found refocusing after an interruption took an average of 23 minutes and 15 seconds. So one mid-block quick check costs not thirty seconds but roughly a whole Pomodoro: the attentional octopus loses every tentacle at once.',
      },
      {
        kind: 'para',
        text: 'The modes even have an exam-day application. The hard-start, jump-to-easy technique: when the format allows moving between questions, begin with the hardest one — and the moment you feel stuck, jump to easy questions and bank marks. While you work the easy ones with your focused mode, the diffuse mode keeps chewing the hard one in the background; when you return, a fresh approach is often waiting. The technique also dodges the nastiest stacking in test-taking: hitting your hardest question exactly when the clock makes you most stressed. The exam-strategy lesson owns the full triage system; this is the mode-level reason one variant exists.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a student has spent forty-five focused minutes on one proof with nothing but frustration. Design the next ninety minutes using the two modes.',
        'Recall the governing ideas: focused effort loads the diffuse mode; Einstellung means repeating the same approach blocks better ones; the diffuse gear needs time and quiet.',
        'Apply: spend five minutes writing one sentence naming exactly where the proof stalls — the priming note. Take a thirty-minute walk with the phone left behind (no podcast). On return, attempt the proof once from a blank page. If it still stalls, switch to one hour of routine problems due anyway, then sleep on it and re-attack first thing in the morning before checking any messages.',
        'State the result: the problem has now had two diffuse-mode shifts and an overnight pass after honest focused loading — the standard conditions under which stuck problems come loose — while the routine hour still banks needed marks.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Programmers park a bug before lunch and find the fix while eating — primed diffuse mode, not luck.',
        'Writers end each session mid-sentence in a known scene, so the diffuse mode keeps drafting overnight and the next start is warm.',
        'Language learners trust overnight gains: words practiced before bed are measurably easier to recall the next evening than same-day re-study.',
        'Mathematicians and engineers schedule hard problems early in the day and save routine work for the tired hours.',
        'Exam takers use hard-start, jump-to-easy on papers that permit question order, letting banked easy marks fund incubation on the hard ones.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Grinding: staying focused-mode on a stuck approach past the point of sense is Einstellung with a stopwatch. Vacating without loading: relaxing on material you never actually studied yields no insights — the diffuse mode has no clay. Multitasking: flipping between the modes every few seconds means running neither; the gears need whole minutes, not fragments. And do not romanticize the diffuse mode into an excuse to avoid focused work — insight is a dividend paid on concentrated minutes.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Focused mode', def: 'The attentive, sequential, analytical gear associated with prefrontal concentration, running along familiar neural pathways.' },
        { term: 'Diffuse mode', def: 'The relaxed, spread-out resting-state gear that ranges widely and works on problems in the background; cannot be commanded on.' },
        { term: 'Einstellung effect', def: 'When an initial idea or approach blocks the discovery of a better one; cured by deliberately switching modes.' },
        { term: 'Attentional octopus', def: 'Oakley\'s image of focused attention reaching through the four-or-so slots of working memory.' },
        { term: 'Working memory', def: 'The handful of items the mind holds at once; interruptions steal its tentacles.' },
        { term: 'Incubation', def: 'The diffuse mode\'s background processing of a problem loaded by prior focused effort.' },
        { term: 'Default mode network', def: 'Regions more active at quiet rest than during outward concentration (Raichle, 2001); the diffuse mode\'s hardware cousin.' },
        { term: 'Refocusing cost', def: 'The price of an interruption — about 23 minutes on average to return to the task (Mark et al., UC Irvine).' },
        { term: 'Pomodoro technique', def: 'A twenty-five minute distraction-free focused block followed by a deliberate reward.' },
        { term: 'Hard-start, jump-to-easy', def: 'Exam tactic: attempt the hardest question first, then move to easier ones so the diffuse mode keeps incubating it.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'You can solve a stuck problem by grinding in focused mode alone.',
          options: ['True — effort eventually wins', 'False — focused mode only runs familiar pathways; a mode switch is often required', 'True, but only for mathematics', 'False — you should avoid focused mode entirely'],
          answer: 1,
          explain: 'Focused mode travels well-worn routes; when the solution lies elsewhere, only the diffuse gear\'s wide ranging can reach it.',
        },
        {
          q: 'The Einstellung effect is best described as:',
          options: ['Forgetting material after a delay', 'An initial approach blocking a better solution', 'The pain of anticipating study', 'Confusing two similar concepts'],
          answer: 1,
          explain: 'Like installing a roadblock: your first idea keeps the pinball bouncing in the wrong neighbourhood — switch modes to escape.',
        },
        {
          q: 'The diffuse mode "must have clay to make bricks" means:',
          options: ['Relaxation works only after focused effort has loaded the problem', 'You should study pottery first', 'Sleep is unnecessary', 'Insight requires physical materials'],
          answer: 0,
          explain: 'Background processing operates on what focused work supplied; skipping the loading step produces calm, not solutions.',
        },
        {
          q: 'In the Pomodoro technique, the reward after the timer:',
          options: ['Is optional decoration', 'Wastes study time', 'Is part of the mechanism — it closes the loop and makes the next focused block easier', 'Should be another study block'],
          answer: 2,
          explain: 'The deliberate release lets the diffuse mode process, and the reward trains the cue — Oakley is explicit that the reward matters as much as the work.',
        },
        {
          q: 'What does the Sio and Ormerod (2009) incubation meta-analysis say about breaks?',
          options: ['Breaks help equally however they are spent', 'Breaks pay off most when genuinely low-demand and the problem was loaded by focused effort', 'Breaks help only for physical tasks', 'Breaks reliably harm problem solving'],
          answer: 1,
          explain: 'Sweeping the 1964-2007 experiments, the effect came out real but conditional: low-demand breaks on loaded problems gained the most; a demanding break bought almost nothing.',
        },
        {
          q: 'Ten minutes into a Pomodoro you take one quick phone check. Per Gloria Mark\'s research, the realistic cost is:',
          options: ['About thirty seconds', 'About five minutes of mild distraction', 'Roughly the rest of the block — refocusing averaged about 23 minutes', 'Nothing if it was study-related'],
          answer: 2,
          explain: 'Mark\'s team at UC Irvine measured an average of 23 minutes and 15 seconds to return fully to the interrupted task — one mid-block check destroys the block twice over.',
        },
        {
          q: 'A stuck problem gets cycles of 25 focused minutes plus a 15-minute walk, each independently offering p = 0.5 of a fresh approach. Expected cycles to escape — and expected minutes?',
          options: ['2 cycles; 80 minutes', '4 cycles; 160 minutes', '1 cycle; 40 minutes', '0.5 cycles; 20 minutes'],
          answer: 0,
          explain: 'Geometric expectation: E[n] = 1/p = 2 cycles, so E[time] = 40 × 2 = 80 minutes — the core comparison against grinding.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'This lesson owns the attention layer. The chunking and encoding side belongs to the mnemonics lesson; what fills the focused blocks belongs to active recall and spaced repetition; and the reason blocks feel hard to start at all — procrastination — is the next lesson. Pair it with the exam-strategy lesson, whose hard-start refinement this topic explains.',
      },
    ],
  },
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

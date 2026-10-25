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
      words: 1418,
      readMins: 7,
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
          text: 'An acronym packs a list into one pronounceable word: HOMES for Huron, Ontario, Michigan, Erie and Superior. An acrostic does the same job with a sentence: "Please Excuse My Dear Aunt Sally" hands you Parentheses, Exponents, Multiplication, Division, Addition, Subtraction in order. Both work by the same mechanism — the arbitrary first-letters become a single meaningful item, and meaning is what memory holds best. A jingle adds rhythm and rhyme: "i before e except after c" survives decades after school because sound patterns are themselves retrieval cues.',
        },
        {
          kind: 'para',
          text: 'Chunking attacks the other bottleneck: capacity. Organizing information into manageable bits or chunks lets a working memory that holds perhaps four items hold four packages instead of forty details — a phone number becomes one melody rather than ten digits. Every mnemonic is secretly a chunking machine: ten unrelated facts collapse into one image, one route, or one sentence.',
        },
        {
          kind: 'para',
          text: 'The method of loci — the memory palace — is the heavyweight. You take a route you know by heart, your childhood home say, and place vivid images of each item at a fixed spot along it: laundry detergent foaming in the hallway, eggs nested in the umbrella stand. At recall you walk the route mentally and collect the images. The technique is ancient — classical orators delivered speeches this way — and it works because spatial memory is enormous and automatic: you never practiced remembering where your kitchen is. Joshua Foer, who documented his year of memory training culminating in winning the U.S. Memory Championship, built his entire competitive repertoire on this single idea, and OpenStax points to his talks as the modern popularization.',
        },
        {
          kind: 'para',
          text: 'For paired associations — foreign vocabulary, symbol-to-name mappings in anatomy or chemistry — the keyword method links the new sound to a familiar word and then welds the pair into one image: Spanish "caber" (to fit) heard as "cab bear" — a bear fitting into a taxi. It is quick and it sticks. But here the honest limit arrives: the largest systematic review of learning techniques, Dunlosky and colleagues in 2013, rated the keyword mnemonic surprisingly low utility for broad course learning — inconsistent gains, hard to generalize, irrelevant to concepts. Mnemonics are a scalpel for arbitrary mappings, not a substitute for comprehension: no acrostic will teach you why demand curves slope downward, and pretending otherwise is how students end up decorating ignorance.',
        },
        {
          kind: 'para',
          text: 'Two quieter techniques deserve the same billing. Elaborative rehearsal means thinking about the meaning of new information and relating it to what you already know — asking why it is true, connecting it to another course, finding the exception — and it reliably beats plain repetition. The self-reference effect is its personal branch: rewrite definitions in your own words and relate concepts to your own life, because you are thereby building a web of retrieval cues anchored in the richest material you own. Saying words aloud helps too — it makes a word distinctive, and distinctiveness is memorable.',
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
            'Apply: build the acrostic "Dear King Philip Came Over For Good Soup" and rehearse it aloud twice; then peg the six shopping items as vivid, exaggerated images at six fixed spots on a walk from your front door to the kitchen — soap oozing over the doormat, mangoes swinging from the coat hook.',
            'State the result: the acrostic survives because a sentence is one chunk with eight ordered slots; the list survives because walking a known route is automatic. Follow up tomorrow with a blank-page recall of both — encoding done, now retrieval.',
          ],
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
      words: 1464,
      readMins: 7,
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
          text: 'Habit formation has three phases. Initiation: select one small behavior and one consistent context — the when-and-where decision, which is itself the design act. Learning: repeat the behavior in that same context; through associative learning the context and the action fuse, each repetition strengthening the link. Stability: the habit is formed and now maintains itself with minimal effort — the behavior has become, as participants in the classic study put it, second nature, something they felt strange not doing.',
        },
        {
          kind: 'para',
          text: 'How long does the learning phase take? The best-known real-world study — Lally and colleagues, volunteers installing one new daily behavior each — measured daily self-reported automaticity and watched it rise fast, then decelerate, then plateau. The average plateau arrived around 66 days. The honest fine print: that figure is a median over the subset of participants whose data fit the model, and individual estimates ranged from 18 to 254 days — a fourteenfold spread. Behavior type mattered too: drinking a glass of water plateaued near 59 days, eating behaviors near 65, exercise near 91. So treat "66 days" as a planning midpoint, not a deadline — and as a reason to distrust any product promising a habit in a week.',
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
      ],
      words: 1376,
      readMins: 7,
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
          kind: 'para',
          text: 'The reason the monitoring step cannot be skipped is the fluency illusion. Familiarity is not knowledge, but the brain reports both as "this feels smooth." Rereading a chapter is the classic trap: the pages grow familiar, recognition hums along, and the learner concludes mastery — while the exam, which demands generation rather than recognition, finds nothing to grab. Highlighting behaves the same way, marking material as handled without ever processing it. In the large 2013 review by Dunlosky and colleagues, rereading and highlighting rated surprisingly low utility: popular, easy, and inconsistently effective, largely because they produce smooth feelings that are poor evidence of anything.',
        },
        {
          kind: 'para',
          text: 'The fix is to swap instruments. Retrieval practice is the honest measuring device: close the book and try to produce the answer. As the metacognition teaching literature puts it, when you quiz yourself it is not important to get the answer right — the critical part is requiring yourself to actively recall and use the information rather than letting yourself be told. What the blank page hands back is calibration data: the gap between what you thought you knew and what you can actually produce. The active-recall lesson owns the mechanics of testing; this lesson owns reading the test results as a measurement of your own confidence.',
        },
        {
          kind: 'para',
          text: 'Calibration has a concrete ritual: predict, then check, then adjust. Before a practice set, write your expected score — per topic, not just overall. Take the test. Compare. Where you overestimated, your judgment of learning is inflated and the topic needs real hours; where you underestimated, you are wasting anxiety on mastered material. Over several rounds the predictions tighten, and the skill generalizes: calibrated learners can walk out of any lecture with a realistic map of what they own. A warning label belongs here — beginners in a subject tend to overestimate their abilities, so until your predictions have a track record, budget more support than feels necessary.',
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
      words: 1354,
      readMins: 7,
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
          text: 'The surprise in the experimental work of Fiorella and Mayer is that anticipation alone already does part of the job: students who merely expected to teach a passage afterward retained more than students who expected a test on it — the expectation itself changes how you process material, hunting for structure that can survive transmission. Actually teaching then added further gains on delayed comprehension tests. So the practice works twice: prepare-to-teach processes deeply, and teach-back consolidates what processing found.',
        },
        {
          kind: 'para',
          text: 'Peer instruction is the classroom-scale version, and its cycle is worth stealing wholesale for group study: everyone reads the material before the session; the leader poses a conceptual multiple-choice question — not a calculation, a concept with plausible wrong answers; everyone commits to an answer individually first; then peers convince each other; then everyone votes again. The two-vote structure is the engine: the second vote reveals how many minds actually moved, and the persuasion in between is where the learning happens. A finding worth knowing: when clickers — the electronic voting gadgets — were compared against plain colored flashcards, students learned equally well with either; the hardware was never the mechanism, the discussion was. A group of four with paper cards has everything that matters.',
        },
        {
          kind: 'para',
          text: 'Solo learners get the same engine through the teach-back ritual, best known as the Feynman technique: study the concept, then explain it aloud, from memory, in plain words, to an imagined novice — no jargon to hide behind, because the novice would not understand it anyway. Every stall, every circular sentence, every "um, well, basically" marks a gap. You return to the source only for the stalled points, repair them, and explain again, simpler. The ritual is honest in a way rereading cannot be: air does not lie, and silence where an explanation should be is the exact location of the hole in your knowledge.',
        },
        {
          kind: 'para',
          text: 'Study groups earn their reputation only when they run on this engine. The good version rotates an explainer role each session, members who commit to individual answers before comparing, and a norm of challenging claims rather than collecting them — a journal-club culture, where discussing a paper or problem set forces active engagement. The bad version is a comfort ritual: one person explaining to polite nods, or worse, a pool of confidently shared misconceptions — because peers, unlike sources, do not fact-check each other. The rule: groups should multiply explainers, not audiences. And a boundary keeps this lesson honest: delivery skills — posture, projection, stage fright — live in the public-speaking topic; here it is always the explanation, never the performance, that pays.',
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

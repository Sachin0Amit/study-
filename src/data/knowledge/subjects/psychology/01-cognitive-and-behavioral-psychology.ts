/**
 * Knowledge Universe — Psychology — Chapter 01: Cognitive & Behavioral Psychology
 * 3 lessons · ~4,367 words
 * field: Psychology
 * legacy sources: social-sciences.ts, x56-vce-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Cognitive Psychology, Behavioral Science]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 psy-memory-multistore-brain — The Multi-Store Model and the Brain's Memory Systems
 *   01.2 soc-cognitive-biases — Cognitive Biases: The Bugs in Human Judgment
 *   01.3 psy-cognitive-architecture — Memory, Attention and Thinking: Cognitive Psychology
 */
import type { KnowledgeTopic } from '../../types'

export const psychologyCh01: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'psy-memory-multistore-brain',
    title: 'The Multi-Store Model and the Brain\'s Memory Systems',
    domain: 'Social Sciences',
    field: 'Psychology',
    branch: 'Cognitive Psychology',
    tier: 'core',
    concepts: [
      'Atkinson-Shiffrin multi-store model of memory',
      'Sensory, short-term and long-term stores with control processes',
      'Hippocampus, amygdala, neocortex, basal ganglia and cerebellum',
      'Explicit and implicit memory systems',
      'Episodic and semantic memory in autobiographical events and imagined futures',
      'Alzheimer\'s lesion evidence and aphantasia as individual differences',
    ],
    words: 1837,
    readMins: 9,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "The cognitive-psychology lesson in this field covers working memory's bandwidth and the schemas that bias it; this one steps back and asks the structural question: what ARE the stores, how does information move between them, and which brain systems run each? The answer that organised the field — and the one the VCE Psychology study design examines — is the multi-store model proposed by Richard Atkinson and Richard Shiffrin in 1968. It treats memory not as one faculty but as a pipeline of structurally distinct stores connected by control processes, and its vocabulary — encoding, storage, retrieval; sensory, short-term, long-term — is still the filing system every syllabus uses.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "The model earns its place by surviving fifty years of correction. Its boxes have been subdivided (sensory store into iconic and echoic; short-term into the working-memory buffers) and its linearity qualified — but as a first map of where information lives and what moves it, it remains the skeleton on which clinical observations, brain-lesion evidence and study techniques all hang. The learning-science lessons on spaced practice and retrieval are, in this vocabulary, engineering recipes for the transfer from short-term to long-term store; the mnemonics lesson is a recipe for encoding. Knowing the architecture tells you WHY the recipes work.",
      },
      { kind: 'heading', text: 'The Multi-Store Architecture' },
      {
        kind: 'para',
        text: "The model's first store is sensory memory: a raw, high-capacity, fraction-of-a-second buffer for everything the senses deliver, held just long enough for attention to make a selection. Iconic memory is the visual version — a sparkler's trail is the classic demonstration, the afterimage persisting about a quarter to half a second; echoic memory is the auditory version, lasting a few seconds, which is why you can sometimes 'play back' a sentence you did not consciously hear. Selective attention is the gatekeeper: whatever it selects moves onward; the rest decays irretrievably.",
      },
      {
        kind: 'para',
        text: "The second store, which Atkinson and Shiffrin called short-term memory, holds what you are consciously working with — capacity famously around seven plus-or-minus two unrelated items, duration up to roughly half a minute without rehearsal. Its control processes are the model's real contribution: REHEARSAL (silent repetition) keeps an item alive and, when elaborated, transfers it to long-term store; encoding strategies organise material as it enters. The third store, long-term memory, is effectively unlimited in capacity and duration — a permanent archive whose contents are reconstructed, not replayed, at retrieval. The model's flow is strict: information enters through the senses, attention moves it into short-term, and only elaborative transfer writes it into long-term; retrieval brings long-term contents back into conscious short-term work. Damage the pipeline at any joint and a characteristic amnesia appears — which is exactly the evidence that motivated the model.",
      },
      { kind: 'heading', text: 'The Brain Systems Beneath the Boxes' },
      {
        kind: 'para',
        text: "Long-term memory is not one system. The modern division — confirmed by lesion studies, brain imaging and post-mortem work — separates EXPLICIT (declarative) memory, the consciously retrievable facts and episodes, from IMPLICIT (non-declarative) memory, the skills, habits and conditioned associations expressed through performance rather than recollection. Each has its own hardware. The HIPPOCAMPUS is the consolidation gateway for explicit memory: it binds the cortical fragments of an episode into a retrievable trace and, over time, hands the trace to the cortex — the reason the famous patient H.M., whose hippocampi were surgically removed, could never form a new conscious memory yet still improved at mirror-drawing across days he could not remember. The AMYGDALA tags the emotional weight of memories, strengthening consolidation under arousal — the same machinery the trauma lesson describes going wrong in PTSD. The NEOCORTEX is where consolidated memories ultimately live, distributed across the sensory and association areas that originally processed the experience.",
      },
      {
        kind: 'para',
        text: "The implicit systems have their own map. The BASAL GANGLIA underlie habits and skills — the stimulus-response routines that let you drive a familiar route while planning your day; their dopamine signal is the reinforcement mechanism the conditioning lesson describes at the behavioural level. The CEREBELLUM stores precisely timed motor adaptations and simple conditioned responses — the classical-conditioning workhorse for eyeblink preparation. And the sleep lesson adds the fourth station: consolidation continues OFFLINE, with hippocampal replay during slow-wave sleep progressively corticalising the day's episodes. The multi-store model's boxes turn out to be processes distributed across this circuitry — but the model remains the honest first approximation, and the exam-ready one.",
      },
      { kind: 'heading', text: 'Autobiographical Memory and Imagined Futures' },
      {
        kind: 'para',
        text: "Two long-term stores dominate autobiographical experience. EPISODIC memory holds personally experienced events located in time and place — your last birthday, this morning's commute. SEMANTIC memory holds context-free knowledge — that Paris is the capital of France, that whales are mammals. The two cooperate in remembering a life: retrieving a birthday dinner calls the episodic trace and semantic frames (what birthdays are, who attends them) simultaneously. What examiners increasingly add is the constructive twist discovered in imaging studies: the very hippocampal-cortical network that rebuilds the past is engaged when people CONSTRUCT POSSIBLE FUTURES. Episodic memory is a simulation engine, not a video archive; patients with hippocampal damage are impoverished not only in recalling events but in imagining novel ones. Alzheimer's disease supplies the pathological version of the same lesson — its earliest and heaviest damage to hippocampal and temporal-lobe circuitry produces exactly the profile the store model predicts: recent episodic memory collapses first, while overlearned semantic and procedural knowledge survives longest.",
      },
      {
        kind: 'para',
        text: "Individual differences close the loop between memory and experience. Aphantasia — the absence of voluntary visual imagery, present in roughly two to four per cent of people — shows that the 'mind's eye' used in autobiographical recall and future simulation is a variable capacity, not a universal: aphantasic individuals report knowing rather than seeing their past, yet perform normally on most memory tasks. Mental imagery, mnemonics and memory performance are separable, a fact the mnemonics lesson turns into technique advice: method-of-loci imagery is a skill that helps most people, but the architecture it trains — association, organisation, retrieval structure — does not depend on vivid imagery alone.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Trace one exam-relevant event through the full architecture: you hear a phone number, repeat it, and later — after studying it — recall it a week on.",
        "Sensory store: the spoken digits enter echoic memory, lasting seconds; attention selects them into short-term store (everything else decays).",
        "Short-term store: capacity pressure is immediate — seven to ten digits crowd the buffer; silent REHEARSAL keeps them alive past the roughly 30-second decay window.",
        "Transfer: elaborative rehearsal (chunking 0413 as a unit, linking digits to a familiar date) encodes the number into LONG-TERM store — unelaborated maintenance rehearsal transfers poorly, which is exactly why cramming decays.",
        "Retrieval a week later: a cue (the phone screen) reconstructs the trace from long-term store into conscious short-term work. The hippocampus bound the trace at encoding; sleep consolidated it; the cortex stores it. Every store, control process and brain system in this lesson appears in one everyday act.",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Study technique is pipeline engineering: attention management protects the sensory-to-short-term gate, elaboration and spacing drive the short-to-long transfer, and retrieval practice strengthens the long-term trace itself.',
        'Clinical neurology reads memory complaints against the store model: hippocampal injury produces anterograde amnesia for new explicit memories while implicit skill-learning survives — the H.M. profile.',
        'Alzheimer\'s care plans follow the lesion map: recent episodic memory fails first, so orientation aids anchor to surviving semantic and procedural strengths.',
        'Eyewitness practice respects reconstruction: episodic retrieval rebuilds from fragments and schemas, which is why unbiased questioning procedures exist.',
        'Understanding aphantasia prevents over-prescribing imagery-based mnemonics: association and organisation work for imagers and non-imagers alike.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Three confusions recur in exams. Treating short-term and working memory as the same thing: the multi-store model's short-term store is a passive buffer, while working memory (the cognitive lesson's topic) is the active workspace that manipulates contents — related, not identical. Assigning all memory to the hippocampus: it is the consolidation gateway for EXPLICIT memory; habits live in the basal ganglia and timed motor adaptation in the cerebellum, which is why H.M. could learn skills he never remembered practising. And saying Alzheimer's destroys 'memory' wholesale: the profile is graded — recent episodic first, semantic and procedural last — and that grading is itself evidence for distinct systems.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Multi-store model', def: 'Atkinson and Shiffrin\'s 1968 architecture: sensory, short-term and long-term stores linked by attention, rehearsal and retrieval control processes.' },
        { term: 'Sensory memory', def: 'The sub-second raw buffer for each sense — iconic for vision, echoic for sound — from which attention selects.' },
        { term: 'Rehearsal', def: 'The control process that maintains items in short-term store; elaborative rehearsal additionally encodes them into long-term store.' },
        { term: 'Explicit (declarative) memory', def: 'Consciously retrievable memory for facts (semantic) and events (episodic), consolidated via the hippocampus.' },
        { term: 'Implicit (non-declarative) memory', def: 'Memory expressed through performance — skills, habits and conditioned responses — carried by basal ganglia and cerebellar systems.' },
        { term: 'Consolidation', def: 'The progressive stabilisation of memory traces, hippocampus-to-cortex during wakefulness and sleep.' },
        { term: 'Episodic future thinking', def: 'Constructing imagined future events using the same hippocampal-cortical network that reconstructs past episodes.' },
        { term: 'Aphantasia', def: 'The absence of voluntary visual imagery in roughly 2-4 per cent of people, dissociating imagery vividness from memory capability.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In the multi-store model, what moves information from sensory memory into short-term store?',
          options: ['elaborative rehearsal', 'selective attention', 'consolidation', 'retrieval cues'],
          answer: 1,
          explain: 'Sensory capacity is vast but duration is sub-second; attention selects what proceeds to the short-term store, and the unselected remainder decays irretrievably.',
        },
        {
          q: 'Patient H.M. lost both hippocampi yet improved at mirror-drawing across days he could not remember practising. This dissociation shows:',
          options: ['all memory lives in the hippocampus', 'implicit motor memory does not require the hippocampal explicit-memory system', 'short-term memory is unlimited', 'the cerebellum stores semantic facts'],
          answer: 1,
          explain: 'Skill improvement without recollection is the classic explicit/implicit dissociation — basal ganglia and cerebellar systems learn normally without hippocampal consolidation.',
        },
        {
          q: 'Imaging studies find that imagining a future beach holiday activates much of the network used to recall a real one. This supports the view that episodic memory is:',
          options: ['a video archive replayed on demand', 'a constructive simulation system', 'stored only in semantic form', 'independent of the hippocampus'],
          answer: 1,
          explain: 'Episodic memory rebuilds events from fragments — the same constructive machinery simulates possible futures, which hippocampal patients struggle to do.',
        },
        {
          q: 'Which memory profile is typical of early Alzheimer\'s disease?',
          options: ['procedural skills fail first, episodic last', 'recent episodic memory fails first while overlearned semantic and procedural knowledge survives longest', 'all stores fail simultaneously', 'sensory memory alone is affected'],
          answer: 1,
          explain: 'The disease attacks hippocampal and temporal-lobe consolidation circuitry first — recent episodic memory collapses early, while overlearned knowledge and skills persist longest.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'insight',
        text: 'Grounding: Atkinson and Shiffrin (1968), "Human memory: A proposed system"; OpenStax Psychology 2e, chapter 8 (Memory); Squire and Zola\'s explicit/implicit taxonomy — read against the VCE Psychology Study Design 2023-2027, Unit 3 Area of Study 2 ("the explanatory power of the Atkinson-Shiffrin multi-store model... the roles of the hippocampus, amygdala, neocortex, basal ganglia and cerebellum... episodic and semantic memory... aphantasia"). The cognitive-architecture lesson owns working memory and attention in depth; the mnemonics lesson owns encoding technique; the sleep lesson owns consolidation offline; the behaviourist lesson owns how rehearsal practice becomes habit.',
      },
    ],
  },
  {
    id: 'soc-cognitive-biases',
    title: 'Cognitive Biases: The Bugs in Human Judgment',
    domain: 'Social Sciences',
    field: 'Psychology',
    branch: 'Behavioral Science',
    tier: 'core',
    concepts: [
      'Heuristics and two systems of thinking',
      'Anchoring and insufficient adjustment',
      'Availability and vividness',
      'Representativeness and base-rate neglect',
      'Framing effects and loss aversion',
      'Confirmation bias and motivated reasoning',
      'Debiasing and decision hygiene',
    ],
    words: 1442,
    readMins: 7,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'The human mind is a marvel that errs in patterns. In the early 1970s Daniel Kahneman and Amos Tversky began studying how people judge probabilities, and found not random mistakes but systematic ones — predictable errors they traced to mental shortcuts called heuristics. Judgments were made as if by rough rules of thumb: start from a number and adjust, recall whatever comes easily, judge by resemblance. Their research programme, later the foundation of behavioural economics, reframed rationality itself as a scarce resource the mind budgets carefully.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Biases are not curiosities; they move markets, medicine and negotiation. Doctors over-reading screening tests, investors holding losers too lovingly, negotiators anchored by the first offer — all are documented, priced and sometimes exploited. Because the errors are systematic, they can be anticipated, measured and designed around, which makes the study of bias one of the few directly profitable branches of psychology.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Kahneman later popularised a two-system picture of the mind: System 1 fires instantly, effortlessly and intuitively, while System 2 is slow, deliberate and lazy. Heuristics are System 1’s tools — brilliant frugality when stakes are small and worlds are familiar, misleading when a problem demands arithmetic. The crucial claim is that biases are byproducts of otherwise adaptive machinery: a shortcut honed for foraging and social life meets casino odds or Bayesian inference and stumbles in characteristic ways.',
      },
      {
        kind: 'para',
        text: 'In the 1974 wheel-of-fortune experiment, a rigged spin left participants staring at the number ten or sixty-five before they estimated the percentage of African nations in the United Nations. The high-anchor group guessed around forty-five; the low-anchor group around twenty-five — dragged toward a number both knew was random. Anchoring survives money, expertise and explicit warnings: even a fabricated list price changes what later offers feel reasonable, because adjustment away from the anchor is habitually too small.',
      },
      {
        kind: 'para',
        text: 'Frequency is judged by ease of recall, and ease is not neutral. Plane crashes are filmable; asthma deaths are not, and studies of perceived lethality find tornadoes rated deadlier than asthma while strokes are wildly underrated. News coverage acts as a distortion field: after heavy reporting of a rare event, probability estimates climb regardless of the true base rate. Vividness, recency and emotion — not frequency — decide what springs to mind, and what springs to mind decides what seems likely.',
      },
      {
        kind: 'para',
        text: 'Asked whether a quiet, poetry-loving woman is a librarian or a nurse, most people answer by resemblance — how librarian-like she is — and ignore how many more nurses exist. In Kahneman and Tversky’s engineer-and-lawyer study, personality sketches moved predictions even when participants were told the person came from a group that was ninety per cent engineers. Judged by fit rather than by prior odds, resemblance functions as an automatic substitute for Bayes’ rule, and the bigger picture — the base rate — quietly drops out.',
      },
      {
        kind: 'para',
        text: 'Tversky and Kahneman’s Asian disease problem offered identical outcomes in two costumes: a plan that “saves 200 of 600 lives” versus one under which “400 will die”. Majorities chose the certain saving in the gain frame but gambled in the loss frame. Prospect theory formalised the asymmetry: losses hurt roughly twice as much as equal gains please, so the description of a choice — not merely its content — steers the decision. Framing is why ninety-per-cent-lean meat outsells ten-per-cent-fat.',
      },
      {
        kind: 'para',
        text: 'In Wason’s 2-4-6 task, people given a hidden rule to discover usually proposed number triples that confirmed their first guess and almost never tested cases that could refute it. Confirmation bias is the search for support rather than diagnosis, and motivated reasoning sharpens it when identity is at stake — the smarter you are, the better you argue for your own side. This is why partisan debates rarely converge: both camps are running confirmation searches on opposite evidence pools.',
      },
      {
        kind: 'para',
        text: 'Awareness alone is weak medicine — the bias blind spot means people spot biases in others more readily than in themselves. What works is procedure: premortems that legitimise doubt before decisions lock, checklists, outside views that replace gut forecasts with reference-class base rates, and choice architecture that sets helpful defaults. Kahneman called this decision hygiene — you cannot disinfect intuition, but you can build institutions that quarantine its most predictable failures.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Bayes’ theorem',
        latex: 'P(H \\mid E) = \\frac{P(E \\mid H)\\,P(H)}{P(E)}',
        meaning: 'The probability of a hypothesis after seeing evidence equals the prior, P(H), times how expected the evidence is if the hypothesis holds, divided by the total probability of the evidence.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a condition affects 1 woman in 1,000; a screening test detects every true case but falsely flags 5% of healthy women. Given a positive result, how likely is the condition?',
        'Recall the governing idea: Bayes’ theorem — the answer depends on the prior (1 in 1,000) as much as on the test; a positive result is evidence, not a verdict.',
        'Apply: in 1,000 women, about 1 true case tests positive, while 5% of the 999 healthy women — roughly 50 — also test positive. So 51 positives arrive, only 1 of them real.',
        'State the result: the probability is about 1 in 51, just under 2% — yet most laypeople and many clinicians guess near 95%, the signature error of base-rate neglect.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Medicine: natural-frequency formats for screening results, decision aids and second opinions counter base-rate neglect and availability-driven overdiagnosis.',
        'Finance: the disposition effect — selling winners too early and losers too late — traced to loss aversion, and tamed by disciplined rebalancing rules.',
        'Negotiation and pricing: first offers work as anchors, so list prices, pre-sale discounts and “regular prices” are engineered artefacts rather than facts.',
        'Policy design: defaults in pension enrolment and organ-donation registries exploit inertia benevolently — choice architecture that outperforms persuasion.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The commonest error is treating every heuristic as a defect: in many real environments fast-and-frugal rules match or beat complex models, a point Gerd Gigerenzer presses against the biases school. A second is overconfidence in the catalogue itself — several famous effects, from ego depletion to some priming results, have failed replication, so check before you cite. Third, knowing the names confers no immunity: the bias blind spot persists in experts, and debiasing works through procedures, not lectures.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'heuristic', def: 'A fast, effort-saving rule of thumb that substitutes an easy question for a hard one.' },
        { term: 'anchoring', def: 'Estimates dragged toward an initial value, even when that value is known to be arbitrary.' },
        { term: 'availability heuristic', def: 'Judging frequency or probability by how easily instances come to mind.' },
        { term: 'base-rate neglect', def: 'Ignoring prior probabilities when judging how well evidence fits a category.' },
        { term: 'framing effect', def: 'A reversal of preference produced by describing the same outcomes as gains or as losses.' },
        { term: 'loss aversion', def: 'The asymmetry by which losses loom roughly twice as large as equivalent gains.' },
        { term: 'bias blind spot', def: 'Readily detecting biases in others while remaining blind to the same biases in oneself.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In the wheel-of-fortune experiment, participants who saw the spin land on 65 rather than 10 subsequently…',
          options: ['refused to give numerical estimates', 'estimated higher numbers of African nations in the UN', 'adjusted fully away from the random number', 'guessed identically to a no-spin control group'],
          answer: 1,
          explain: 'Even a visibly random anchor pulls estimates toward itself, because adjustment away from the anchor is systematically insufficient.',
        },
        {
          q: 'A disease affects 1 in 1,000 people; a test with no missed cases and a 5% false-positive rate comes back positive. The best estimate of the disease probability is…',
          options: ['about 2%', 'about 25%', 'about 50%', '95%'],
          answer: 0,
          explain: 'Of roughly 51 positive results per 1,000 people, only 1 is a true case — about 1 in 51, just under 2%.',
        },
        {
          q: 'The Asian disease problem shows that preference reversals occur when…',
          options: ['probabilities are very small', 'identical outcomes are described as gains versus losses', 'options are presented sequentially', 'more than two alternatives exist'],
          answer: 1,
          explain: 'People become risk-averse for gains and risk-seeking for losses, so equivalent framings of the same outcome produce opposite choices.',
        },
        {
          q: 'Which practice is the clearest example of debiasing through procedure rather than awareness?',
          options: ['Reading a list of named biases before a meeting', 'Running a premortem that asks the team to write why the plan failed', 'Choosing a more optimistic forecaster', 'Repeating the decision until it feels right'],
          answer: 1,
          explain: 'Premortems institutionalise the search for disconfirming evidence — a structural counter to confirmation bias — whereas mere awareness does not immunise.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is the core-tier entry to judgment under uncertainty. Pair it with cognitive dissonance in this subject to see motivated reasoning from the inside, then read Kahneman’s Thinking, Fast and Slow at a chapter a sitting. Follow with prospect theory’s formal curves, Gigerenzer’s ecological rationality as the loyal opposition, and the nudge literature for institutional design.',
      },
    ],
  },
  {
    id: 'psy-cognitive-architecture',
    title: 'Memory, Attention and Thinking: Cognitive Psychology',
    domain: 'Social Sciences',
    field: 'Psychology',
    branch: 'Cognitive Psychology',
    tier: 'intermediate',
    concepts: [
      'Working memory: the mind\'s small workbench',
      'Long-term memory: episodic, semantic, procedural',
      'Depth of processing at encoding',
      'Attention as a bottleneck',
      'Inattentional and change blindness',
      'Schemas: memory with priors',
    ],
    words: 1088,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      { kind: 'para', text: 'In 1956 psychology changed its subject: from rats and levers to people and information. George Miller measured the mind\'s holding capacity at seven items, plus or minus two; Allen Newell and Herbert Simon programmed a computer to prove logic theorems; Noam Chomsky\'s review of B. F. Skinner dismantled behaviorism\'s account of language. The cognitive revolution that followed studies the mind as a system that attends, stores, retrieves and thinks, testing each piece with reaction times, errors and recall. This lesson tours that architecture: the small workbench of working memory, the vast warehouse beneath it, and the narrow door between them.' },
      { kind: 'callout', title: 'Why this matters', tone: 'insight', text: 'Every interface, syllabus, checklist and courtroom procedure implicitly prices the mind\'s limits. Designers who respect a four-chunk workbench and a single-channel attention system build things people can actually use; those who do not build expensive mistakes and confident eyewitnesses who are wrong.' },
      { kind: 'heading', text: 'Core Concepts' },
      { kind: 'para', text: 'Alan Baddeley and Graham Hitch proposed in 1974 that short-term memory is not a shelf but a workbench. Working memory couples a silent supervisor — the central executive — with subordinate stores: the phonological loop rehearses speech (why long words are harder to keep) and the visuospatial sketchpad holds images; an episodic buffer was added in 2000 to bind content into episodes. Capacity is a handful of chunks — Nelson Cowan estimates four — and chunking stretches it: chess masters recall real positions brilliantly and random ones poorly.' },
      { kind: 'para', text: 'Endel Tulving divided long-term memory into episodic (dated, autobiographical events) and semantic (facts stripped of occasion), alongside procedural memory for skills. The split is written into Henry Molaison\'s tragedy: surgery in 1953 removed his hippocampi to stop seizures and erased his ability to form new episodic memories — yet he slowly learned mirror-drawing, improving day after day while insisting he had never seen the task. Memory is several systems, and they fail separately.' },
      { kind: 'para', text: 'Fergus Craik and Robert Lockhart showed in 1972 that memory is fixed at encoding by depth, not repetition alone. Judging whether a word is printed in capitals barely leaves a trace; judging whether "chicken" fits "the cook served the ___" produces far better recall. Meaning is the glue. How to convert this into study schedules is the business of the Study Skills lessons on spaced repetition and retrieval practice; here the finding stands on its own.' },
      { kind: 'para', text: 'Colin Cherry demonstrated the cocktail-party problem in 1953 with dichotic listening: repeat one ear\'s speech aloud and the other ear\'s content vanishes, though your own name may break through. Donald Broadbent modeled a filter admitting one channel; Anne Treisman softened it into attenuation; late-selection theorists moved the filter past meaning. Nilli Lavie\'s load theory reconciled the camps: perception runs wide and automatic until capacity fills, then narrows to one stream.' },
      { kind: 'para', text: 'Daniel Simons and Christopher Chabris asked viewers to count basketball passes in a 1999 video; roughly half never saw a person in a gorilla suit stroll through the scene. Inattentional blindness is not laziness — attention is a budget, and unattended stimuli do not reach awareness. Its cousin, change blindness, left people failing to notice a swapped conversation partner in a doorway experiment. The felt richness of vision is a confidence trick memory plays.' },
      { kind: 'para', text: 'Frederic Bartlett had shown the way in 1932: British students retold a Native American tale, "The War of the Ghosts", and each retelling rationalized the strange parts toward the storyteller\'s own schemas — organized packages of expectation. Perception and memory are inference from priors: fast and efficient, and systematically bent toward the familiar. A predicting brain is a slightly distorting one.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: why can a receptionist reliably take a seven-digit phone number but not a sixteen-digit tracking code, and what should she do about the code?',
        'Recall: working memory holds about four chunks in the phonological loop, maintained by rehearsal; longer strings overflow within seconds.',
        'Apply: split the code into meaningful groups — dates, repeated pairs, triplets like area codes — rehearse each group aloud, and write it down immediately to offload storage.',
        'State the result: chunking plus immediate offloading turns an impossible string into a manageable one; without them, overflow is guaranteed no matter how hard she concentrates.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Interface design: menus, forms and dashboards chunked to respect a four-chunk limit before anything else.',
        'Eyewitness practice: interviews built around reconstructive memory — open questions first, no leading details.',
        'Aviation and medicine: checklists and alarms engineered around attention\'s single-channel limits.',
        'Education: cognitive-load theory sequences worked examples before problem solving for novices.',
        'Clinical assessment: working-memory tests help distinguish attention disorders from motivation problems.',
      ] },
      { kind: 'callout', title: 'Common Pitfalls', tone: 'warn', text: 'Working memory span is not intelligence — it predicts, but loosely. "Seven plus or minus two" described 1950s digit recall, not everything; the modern chunk estimate is nearer four. Attention is not one spotlight: practiced skills run with little budget at all. And memory is not a recording — it is rebuilt on retrieval, which is why confident recollections can be wrong in detail while feeling perfect.' },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'working memory', def: 'The limited workbench that holds and manipulates information in the moment.' },
        { term: 'phonological loop', def: 'The speech-and-sound store of working memory, kept alive by inner rehearsal.' },
        { term: 'episodic buffer', def: 'Baddeley\'s later addition that binds working-memory content into integrated episodes.' },
        { term: 'episodic memory', def: 'Tulving\'s system for dated, personally experienced events.' },
        { term: 'procedural memory', def: 'Memory for skills; survives hippocampal damage that erases episodes.' },
        { term: 'levels of processing', def: 'Craik and Lockhart\'s finding that deeper, meaning-based encoding yields stronger memory.' },
        { term: 'inattentional blindness', def: 'Failure to perceive a visible, unexpected stimulus while attention is engaged elsewhere.' },
      ] },
      { kind: 'quiz', items: [
        {
          q: 'Molaison (H.M.) improved at mirror-drawing across days while denying any memory of practicing. Which system kept working?',
          options: ['The phonological loop', 'Procedural memory', 'Episodic memory', 'The visuospatial sketchpad'],
          answer: 1,
          explain: 'Skill learning rides on procedural memory and survived his hippocampal loss, while episodic memory of the practice sessions did not.',
        },
        {
          q: 'People remember fewer long words than short words. This word-length effect implicates…',
          options: ['the phonological loop', 'the visuospatial sketchpad', 'the episodic buffer', 'the central executive'],
          answer: 0,
          explain: 'Rehearsal takes time: longer words take longer to say, so fewer fit within the loop\'s fading window.',
        },
        {
          q: 'Half of viewers miss a gorilla suit while counting basketball passes. This is…',
          options: ['change blindness', 'the cocktail-party effect', 'word-length effect', 'inattentional blindness'],
          answer: 3,
          explain: 'Attention was budgeted to the counting task; the unexpected visitor never reached awareness — perception requires attention, not just eyes.',
        },
        {
          q: 'Bartlett\'s "War of the Ghosts" retellings demonstrated that…',
          options: ['memory is a verbatim recording', 'nonsense syllables are remembered best', 'recall drifts toward personal schemas', 'rehearsal prevents all forgetting'],
          answer: 2,
          explain: 'Each retelling rationalized the unfamiliar toward the teller\'s expectations — memory as reconstruction, not playback.',
        },
      ] },
    ],
  },
]

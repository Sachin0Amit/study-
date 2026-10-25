import type { KnowledgeTopic } from '../types'

/** EXAM-GAP PASS X56 (2026-10-26): VCE launch + gap closure.
 *
 * This pass added the Victorian Certificate of Education (VCE) as the 55th
 * curated exam (src/data/exams/victoria.ts, 8 studies / 67 topics, curated
 * at Units 3 and 4 from the official VCAA study-design DOCX files: English
 * and EAL 2024-2027, Mathematics 2023-2027, Biology 2022-2026, Chemistry
 * 2023-2027, Physics 2023-2027, Psychology 2023-2027 — each downloaded from
 * the VCAA document host and its Units 3-4 areas of study, outcomes and key
 * knowledge read in full). Running the exam matcher against the new syllabus
 * exposed exactly four topics the Library could not honestly serve, and the
 * audit's false-positive layer (the scoped matcher's 0.40 confidence floor
 * landing VCE statistics topics on physics chapters) was cleared by naming.
 *
 * The four lessons below close those gaps. Each was carved against its
 * neighbours so the Library stays repetition-free:
 *
 *  1. psy-behaviourist-learning — Pavlov's three-phase classical
 *     conditioning, Skinner's ABC operant model with the four consequences,
 *     Bandura's observational-learning pentad, and the carvings that make
 *     it safe: x44's fear-conditioning lesson owns the AMYGDALA/PTSD
 *     pathway (emotional association, not behaviourist learning theory);
 *     the life-sciences animal-cognition aside owns habituation and insight
 *     in animals; the x31 teaching-methods lesson only cites the trio as
 *     one sentence of justification. This lesson owns the LEARNING THEORY
 *     machinery itself. Source-grounded in OpenStax Psychology 2e, ch. 6
 *     (Learning) — the cleanest open treatment of the trio.
 *  2. psy-memory-multistore-brain — Atkinson and Shiffrin's 1968 multi-store
 *     model (sensory store, short-term store, long-term store, control
 *     processes), the brain-system map of memory (hippocampus, amygdala,
 *     neocortex, basal ganglia, cerebellum across explicit/implicit
 *     systems), episodic future thinking, Alzheimer's-lesion evidence and
 *     aphantasia. Carved against psy-cognitive-architecture (owns working
 *     memory's bandwidth, attention bottlenecks and schemas), fnd-mnemonics
 *     (owns mnemonic TECHNIQUE), health-sleep-stages-memory (owns
 *     consolidation DURING sleep), x44 (owns emotional memory disorders).
 *  3. mind-specific-phobia-biopsychosocial — mental wellbeing as a
 *     multidimensional continuum, then specific phobia as the worked
 *     example of the biopsychosocial model: GABA dysfunction and LTP,
 *     conditioning-based precipitation and perpetuation, cognitive biases,
 *     triggers and stigma, and the intervention ladder (benzodiazepines,
 *     breathing retraining, CBT, systematic desensitisation,
 *     psychoeducation). Carved against ku-mind-anxiety-depression (owns
 *     anxiety and depression generally and CBT's thought-testing core) and
 *     x44's gut-brain lesson (owns microbiome mood science).
 *  4. stats-time-series-trend-seasonality — time series as data ordered in
 *     time: trend, seasonality, cycles and noise; seasonal indices and
 *     deseasonalising; moving-mean and moving-median smoothing; forecasting
 *     from fitted trends and the extrapolation trap. Carved against
 *     stats-correlation-regression (owns cross-sectional two-variable
 *     fitting), stats-descriptive-distributions (owns distribution shape),
 *     and the control-engineering signal-processing sections (own
 *     continuous-time filters, not statistical time series).
 *
 *  All four topics are exam-facing but written as evergreen lessons: the
 *  VCE syllabus points they serve (Units 3-4 Psychology areas of study 1-2,
 *  General Mathematics data analysis) are named in the grounding callouts.
 */

export const x56VcePassTopics: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'psy-behaviourist-learning',
    title: 'Classical and Operant Conditioning: How Experience Teaches Behaviour',
    domain: 'Social Sciences',
    field: 'Psychology',
    branch: 'Learning and Behaviour',
    tier: 'core',
    concepts: [
      'Classical conditioning: neutral stimulus becomes the signal',
      'The three phases: before, during and after conditioning',
      'Operant conditioning: antecedent, behaviour, consequence',
      'Reinforcement and punishment, each positive or negative',
      'Observational learning: attention, retention, reproduction, motivation, reinforcement',
      'Acquisition, extinction, spontaneous recovery, generalisation',
    ],
    words: 2188,
    readMins: 11,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "Every animal arrives with reflexes and appetites, but almost nothing it actually does on a Tuesday — greeting a friend, flinching at a dentist's drill, checking a phone — is built in. The behaviourist programme of the twentieth century set out to explain how experience writes that repertoire, and it produced two complementary machines. Classical conditioning explains how the world's signals acquire meaning: a neutral cue becomes a predictor of something that matters. Operant conditioning explains how consequences shape voluntary action: behaviours that pay off get repeated, behaviours that cost get dropped. Add the social-cognitive correction that humans also learn by watching each other, and you have the three pillars every introductory psychology syllabus — including VCE Psychology Units 3 and 4 — organises under the heading of learning.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Learning theory is the load-bearing wall of applied psychology. Exposure therapy for phobias is extinction of a classically conditioned association; token economies in classrooms are operant reinforcement schedules; every habit-tracking app is an attempt to engineer antecedents and consequences. The trauma lesson in this library covers what happens when the amygdala learns fear too well — this lesson supplies the general theory that treatment programmes are built to reverse. If you understand these two conditioning engines, a startling share of everyday behaviour, marketing, parenting advice and clinical technique becomes legible.",
      },
      { kind: 'heading', text: 'Classical Conditioning: Making Signals' },
      {
        kind: 'para',
        text: "Ivan Pavlov, a physiologist studying digestion, noticed that his dogs salivated before food arrived — at the sight of the bucket, at the footsteps of the technician. Food powder in the mouth reliably triggers salivation; that is a reflex, requiring no learning. The stimulus that reliably produces the reflex is the unconditioned stimulus (UCS), and the reflex it produces is the unconditioned response (UCR). A footstep produces nothing. But pair the footstep with food, again and again, and the footstep itself begins to draw saliva. The once-neutral stimulus (NS) has become a conditioned stimulus (CS), and the salivation it now produces is a conditioned response (CR). The learning is not about food or dogs; it is about any nervous system that can detect a correlation and use one event as a signal for another.",
      },
      {
        kind: 'para',
        text: "The three-phase structure is how syllabuses and exam questions organise the story, and it is worth rehearsing exactly. Before conditioning: the UCS produces the UCR, while the NS produces nothing relevant. During conditioning: the NS is presented in close temporal contiguity with the UCS — ideally the NS slightly before it, because forward pairing is what makes a signal of it — across repeated trials. After conditioning: the CS alone now produces the CR. In Pavlov's terms: bell (NS) plus food (UCS) across trials, then bell alone produces salivation, a response measured in drops. The same grammar decodes advertising that pairs products with attractive faces, anxiety that attaches to the smell of a hospital, and the way a phone's notification tone alone can lift your heart rate.",
      },
      {
        kind: 'para',
        text: "Four phenomena complete the classical picture. Acquisition is the initial phase of learning itself — the CR strengthens as pairings accumulate. Extinction follows when the CS is presented repeatedly WITHOUT the UCS: the signal is revealed as false, and the CR gradually fades. Extinction is not erasure — after a rest, the extinguished CR can reappear briefly, a phenomenon called spontaneous recovery, which is why relapse-avoidance matters in therapy. Stimulus generalisation is the tendency for stimuli resembling the CS to trigger the CR too: a dog trained to one tone will salivate to a slightly different pitch; a person bitten by one dog may flinch at all dogs. Stimulus discrimination is the trained opposite — responding to the CS but not to similar stimuli — established when only one cue is consistently followed by the UCS.",
      },
      { kind: 'heading', text: 'Operant Conditioning: Shaping Consequences' },
      {
        kind: 'para',
        text: "Where classical conditioning handles involuntary, reflex-like responses to signals, operant conditioning — the programme of Edward Thorndike and B. F. Skinner — handles voluntary behaviour emitted by the organism and selected by its consequences. Thorndike's cats in puzzle boxes learned to escape faster over trials, and the learning curve produced his law of effect: responses followed by satisfaction are strengthened, responses followed by discomfort are weakened. Skinner formalised the idea with the three-phase contingency that gives the model its ABC structure: an antecedent (the discriminative stimulus that sets the occasion — the presence of a vending machine signals that pressing buttons pays off), the behaviour itself, and the consequence that follows. Consequences do their work by changing the FUTURE FREQUENCY of the behaviour; nothing is 'learned' in the moment so much as selected, the way selection acts on variation.",
      },
      {
        kind: 'para',
        text: "The four consequences form a two-by-two that students routinely tangle, and the untangling rule is simple: positive and negative mean ADDING or REMOVING a stimulus, never good and bad. Reinforcement (either kind) increases behaviour; punishment (either kind) decreases it. Positive reinforcement adds an appetitive stimulus — praise for finished homework makes homework more likely. Negative reinforcement removes an aversive one — buckling the seatbelt silences the alarm, so buckling up increases; note that the behaviour being strengthened is whatever REMOVED the nuisance. Positive punishment adds an aversive stimulus — a speeding fine. Negative punishment removes an appetitive one — a confiscated phone, a revoked licence. Exam questions love the trap: a child's tantrums increasing because they reliably end a chore is NEGATIVE REINFORCEMENT of tantrums, not punishment of anything.",
      },
      {
        kind: 'para',
        text: "Two further operant ideas carry most of the practical weight. Shaping is the reinforcement of successive approximations toward a target behaviour — you cannot wait for a pigeon to peck a tiny disc by chance, so you reinforce approaching the disc, then touching it, then pecking it; every complex skill from classroom participation to animal training is assembled this way. Schedules of reinforcement control how often the consequence arrives: continuous reinforcement produces fast learning but fast extinction, while partial schedules — fixed or variable, ratio or interval — produce stubborn persistence, with the VARIABLE-RATIO schedule (payment after an unpredictable number of responses) the most extinction-resistant pattern there is, which is precisely the schedule slot machines run on.",
      },
      { kind: 'heading', text: 'Observational Learning: The Social-Cognitive Correction' },
      {
        kind: 'para',
        text: "Pure conditioning theory has a blind spot: people acquire enormous repertoires of behaviour they have never personally been reinforced for — and never been punished for. Albert Bandura's social-cognitive programme supplied the correction with observational learning: we learn by watching models, and we can acquire a behaviour without performing it. The classic demonstration is the Bobo doll experiment of 1961: children who watched an adult punch and shout at the inflatable doll reproduced the same specific acts when later frustrated, often inventing novel combinations on the pattern they had seen — learning that no reinforcement of the child had shaped. Observational learning, in Bandura's analysis, runs on four processes, and syllabuses list them in order: attention (you must notice what the model does), retention (you must store a memory of it), reproduction (you must be physically and cognitively able to enact it), and motivation (you must have a reason to). The fifth element in most syllabus formulations is reinforcement — which may be direct, or vicarious (watching the model be rewarded), or self-administered — and it decides whether acquisition becomes performance.",
      },
      {
        kind: 'para',
        text: "Vicarious reinforcement is the hinge between the behaviourist and cognitive pictures: watching a sibling praised for a behaviour raises the observer's expectation that the same behaviour will pay, and expectations are cognitive states. Bandura's later work on self-efficacy — the belief that one can execute the behaviour — is treated fully in this library's learning-science lesson on self-efficacy and mindset; the carving is deliberate. Aboriginal and Torres Strait Islander ways of knowing add a further dimension that the VCE syllabus explicitly requires: learning viewed as embedded in relationships, story and Country — multimodal, sung, situated — rather than as isolated stimulus-response bonds or solo observation. The syllabus point is a reminder that every theory of learning is also a cultural claim about where knowledge lives.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Classify this scenario: a student who was once laughed at during a presentation now feels anxiety when the teacher announces presentations, and skips class on those days.",
        "Split it by mechanism. The announcement of presentations is a neutral stimulus paired with the aversive experience of ridicule (the UCS producing the UCR of shame). After pairing, the announcement alone elicits anxiety — that is classical conditioning: CS = announcement, CR = anxiety.",
        "Now the operant layer. Skipping class on presentation days is VOLUNTARY behaviour followed by the removal of the aversive anxiety — the relief functions as negative reinforcement, making future skipping MORE likely.",
        "Note the generalisation: anxiety may spread to other announcement cues (email reminders, the classroom itself) — stimulus generalisation — and note what an intervention must do: extinction requires presenting the CS without the UCS (presenting without ridicule), while the operant escape must be blocked so it cannot be reinforced.",
        "General rule for exam problems: involuntary responses to signals are classical (identify UCS, UCR, NS, CS, CR); voluntary behaviour changed by what follows it is operant (identify antecedent, behaviour, and which of the four consequences — naming WHY it increases or decreases); behaviour copied from models is observational (name the five processes you can point to).",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Exposure therapies for phobias and PTSD are engineered extinction: repeated CS-without-UCS presentation until the conditioned fear fades — the phobia lesson in this library applies the whole model.',
        'Classroom practice is consequence design: immediate, specific praise (positive reinforcement), loss-of-privilege systems (negative punishment) and shaping of successive approximations for complex skills.',
        'Variable-ratio reinforcement explains the durability of gambling, notification-checking and social feeds — the most compulsive schedule ever engineered.',
        'Advertising is classical conditioning by design: neutral brands repeatedly paired with music, faces and stories that already elicit warm responses.',
        'Skills demonstrations, sports coaching and video tutorials run on observational learning — which is why modelling plus guided practice beats instruction alone.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Four tangles account for most lost marks. Confusing negative reinforcement with punishment: NEGATIVE means removing a stimulus, and REINFORCEMENT always means the behaviour increased — only punishment decreases it. Reversing CS and UCS: the UCS (food) needs no learning; the CS (bell) is the formerly neutral cue. Treating extinction as forgetting: spontaneous recovery after a break shows the association was suppressed, not erased. And padding observational learning with only 'watching and copying' — the five named processes (attention, retention, reproduction, motivation, reinforcement) are what answers require, each linked to what happens when it fails.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Unconditioned stimulus (UCS)', def: 'The stimulus that reliably triggers a reflex without learning — food powder in Pavlov\'s studies.' },
        { term: 'Conditioned stimulus (CS)', def: 'The formerly neutral stimulus that, after pairing with the UCS, elicits a learned response.' },
        { term: 'Conditioned response (CR)', def: 'The learned response the CS now elicits — salivation to the bell, anxiety to the announcement.' },
        { term: 'Extinction and spontaneous recovery', def: 'The fading of the CR when the CS is presented without the UCS, and its brief reappearance after a rest.' },
        { term: 'Antecedent–behaviour–consequence', def: 'Skinner\'s three-term operant contingency: the discriminative stimulus that sets the occasion, the behaviour, and the consequence that changes its future frequency.' },
        { term: 'Negative reinforcement', def: 'Strengthening a behaviour by REMOVING an aversive stimulus when it occurs — seatbelt silencing the alarm.' },
        { term: 'Negative punishment', def: 'Weakening a behaviour by REMOVING an appetitive stimulus — confiscating the phone.' },
        { term: 'Variable-ratio schedule', def: 'Reinforcement after an unpredictable number of responses — the most extinction-resistant schedule, and the slot machine\'s design.' },
        { term: 'Observational learning', def: 'Bandura\'s social-cognitive process of acquiring behaviour from models via attention, retention, reproduction, motivation and reinforcement.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'In Pavlov\'s three-phase account, what happens DURING conditioning?',
          options: ['The bell produces salivation on its own', 'The neutral stimulus is presented in close pairing with the unconditioned stimulus', 'The unconditioned response disappears', 'The conditioned stimulus becomes inhibitory'],
          answer: 1,
          explain: 'During conditioning the NS and UCS are paired trial after trial; only AFTER conditioning does the CS (bell) alone elicit the CR (salivation).',
        },
        {
          q: 'A driver\'s habit of buckling up quickly is strengthened because the annoying alarm stops when they do. This is:',
          options: ['positive reinforcement', 'negative reinforcement', 'positive punishment', 'negative punishment'],
          answer: 1,
          explain: 'The aversive stimulus (alarm) is REMOVED contingent on the behaviour, increasing it — negative reinforcement. Punishment would require the behaviour to decrease.',
        },
        {
          q: 'Which schedule of reinforcement produces behaviour most resistant to extinction?',
          options: ['continuous reinforcement', 'fixed-interval', 'variable-ratio', 'fixed-ratio'],
          answer: 2,
          explain: 'Variable-ratio schedules pay off after an unpredictable number of responses; the learner cannot predict which response pays, so extinction is slowest — the slot-machine schedule.',
        },
        {
          q: 'In Bandura\'s analysis, which process decides whether an ACQUIRED behaviour is actually PERFORMED?',
          options: ['attention', 'retention', 'reproduction', 'motivation and reinforcement'],
          answer: 3,
          explain: 'Children in the Bobo doll studies acquired many acts they never performed; motivation — direct, vicarious or self-reinforcement — converts acquisition into performance.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'insight',
        text: 'Grounding: OpenStax Psychology 2e, chapter 6 "Learning" (classical and operant conditioning, observational learning), read against the VCE Psychology Study Design 2023-2027, Unit 3 Area of Study 2 key knowledge ("behaviourist approaches to learning... classical conditioning as a three-phase process... operant conditioning as a three-phase process... observational learning"). The anxiety-and-depression lesson owns what clinical anxiety and depression are; the specific-phobia lesson applies this page\'s conditioning machinery to one disorder end-to-end; the memory lesson owns the storage side of what practice consolidates.',
      },
    ],
  },
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
  // ------------------------------------------------------------------
  {
    id: 'mind-specific-phobia-biopsychosocial',
    title: 'Mental Wellbeing and Specific Phobia: The Biopsychosocial Model at Work',
    domain: 'Health & Wellness',
    field: 'Mental Health',
    branch: 'Mood and Anxiety',
    tier: 'intermediate',
    concepts: [
      'Mental wellbeing: functioning, resilience and the continuum',
      'Social and emotional wellbeing as a holistic framework',
      'Specific phobia through biological, psychological and social lenses',
      'GABA dysfunction, long-term potentiation and conditioning paths',
      'Cognitive biases: memory bias and catastrophic thinking',
      'Benzodiazepines, breathing retraining, CBT and systematic desensitisation',
    ],
    words: 1931,
    readMins: 10,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "The anxiety-and-depression lesson in this field draws the line between normal emotion and disorder in general; this lesson takes one specific disorder and dissects it with the full biopsychosocial toolkit. The VCE Psychology study design — the syllabus this page is anchored to — asks for exactly that move twice over: first a framework for thinking about mental wellbeing itself, then specific phobia as the worked example of how biological, psychological and social factors interact to produce and relieve one disorder. The choice of phobia is pedagogically shrewd: it is the disorder where each layer is individually visible, and the treatment ladder from benzodiazepines to systematic desensitisation demonstrates how each layer becomes a therapeutic handle.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Single-cause thinking about mental illness — 'it's just brain chemistry', 'it's just your upbringing' — remains the most common lay error and the most expensive one clinically, because it hides half the treatment options. The biopsychosocial model is the professional corrective, and phobia is its clearest classroom demonstration: one person, one unreasonable fear, three interacting layers, four kinds of intervention. Read this way, the lesson is also a general template: the same three-lens analysis applies to depression, addiction and psychosis with the specifics swapped.",
      },
      { kind: 'heading', text: 'Mental Wellbeing as a Multidimensional Construct' },
      {
        kind: 'para',
        text: "Mental wellbeing is not the mere absence of illness. Three complementary framings matter. LEVELS OF FUNCTIONING asks how well a person manages the ordinary work of living — self-care, relationships, study or work, independent decision-making — and wellbeing moves as functioning moves. RESILIENCE is the ability to cope with and manage change and uncertainty: not the absence of stress but the capacity to absorb it, recover and adapt, built from internal resources (self-efficacy, cognitive flexibility) and external ones (support networks, stable circumstances). Both framings share a key property: they are CONTINUOUS, not categorical. Hence the third framing, the mental wellbeing continuum — an axis from high wellbeing through fluctuating states to severe disorder, on which every individual sits somewhere at every moment, moving in response to internal and external factors. Ordinary stress sits near the healthy end, diagnosable anxiety and phobia toward the other; the same person can occupy different positions across months, weeks or days.",
      },
      {
        kind: 'para',
        text: "The continuum has a culturally specific extension that the syllabus requires and that genuinely enriches the model: social and emotional wellbeing (SEWB) as understood for Aboriginal and Torres Strait Islander peoples — a multidimensional and holistic framework in which wellbeing is the balance of body, mind and emotions, family and kinship, community, culture, Country and spirituality and ancestors. Distress is understood as disharmony across those connections rather than as pathology inside one skull, and restoration involves restoring connection. The practical corollary the syllabus draws: CULTURAL DETERMINANTS — cultural continuity and self-determination — are integral to maintaining wellbeing, and programmes that respect community control outperform those that do not.",
      },
      { kind: 'heading', text: 'Specific Phobia: One Disorder, Three Lenses' },
      {
        kind: 'para',
        text: "A specific phobia is a persistent, excessive and irrational fear of a particular object or situation — heights, spiders, injections, flying — that the person recognises as disproportionate yet cannot suppress, and that is avoided at significant life cost. The biological lens starts with the fear circuitry: the amygdala's fast conditioning pathway (the trauma lesson covers its pathology) is regulated in part by inhibitory signalling through GABA, the brain's main inhibitory transmitter. Individuals with chronic GABA dysfunction — lower inhibitory tone — are proposed to have a lower threshold for acquiring and maintaining fear associations, and the synaptic mechanism of that maintenance is LONG-TERM POTENTIATION: the repeated co-activation of threat-detecting and fear-response circuits strengthens their synapses, making the association durable and resistant to extinction. Fear itself is normal and adaptive; the phobic difference is the ease with which the circuit learns, over-learns and refuses to unlearn.",
      },
      {
        kind: 'para',
        text: "The psychological lens explains how the disorder is ACQUIRED and PERPETUATED behaviourally and cognitively. The classical behavioural account (precipitation): a neutral stimulus — one spider, one turbulence event — is paired with a fright, and through classical conditioning becomes a conditioned stimulus triggering fear; the conditioning lesson in this library gives the three-phase machinery. Perpetuation then runs on operant conditioning: AVOIDANCE of the feared object reduces anxiety immediately, and that relief negatively reinforces avoidance — so the person never re-encounters the stimulus, never disconfirms the fear, and the phobia self-sustains. The cognitive layer adds two biases: MEMORY BIAS (distorted recall that inflates the danger — remembering every turbulence and no smooth flights) and CATASTROPHIC THINKING (the automatic prediction that the worst plausible outcome will occur). The social lens completes the triangle: specific ENVIRONMENTAL TRIGGERS — a dog attack, a frightening flight, a parent's visible panic — supply the conditioning events, and STIGMA around seeking treatment keeps sufferers quiet, delaying intervention while the avoidance habit consolidates.",
      },
      { kind: 'heading', text: 'The Intervention Ladder' },
      {
        kind: 'para',
        text: "Each lens supplies its own evidence-based interventions, and the syllabus pairs them lens-for-lens. Biological: SHORT-ACTING BENZODIAZEPINE AGENTS manage acute phobic anxiety by enhancing GABA's inhibitory action at GABA-A receptors — they are GABA agonists — useful for a single feared event such as a dental procedure or flight, but inappropriate for long-term management because tolerance and dependence develop; BREATHING RETRAINING is the non-drug biological tool, controlling hyperventilation's feedback loop so the physiological symptoms that fuel panic are damped. Psychological: COGNITIVE BEHAVIOURAL THERAPY tests the catastrophic predictions and memory distortions against evidence, building more accurate appraisals; SYSTEMATIC DESENSITISATION combines the two behavioural mechanisms — the phobic stimulus is approached in a graded hierarchy (imagined, pictured, then real, weakest to strongest) while the patient maintains a relaxed state, so that each step pairs the CS with a relaxation response instead of fear: counterconditioning plus extinction. Social: PSYCHOEDUCATION for families and supporters — challenging unrealistic anxious thoughts rather than accommodating them, and crucially NOT encouraging avoidance, since well-meant accommodation is negative reinforcement in disguise.",
      },
      {
        kind: 'para',
        text: "Protective factors complete the biopsychosocial circle as the syllabus frames it. Biological: adequate nutritional intake, hydration and sleep — the sleep lesson's architecture matters because sleep deprivation amplifies amygdala reactivity. Psychological: cognitive behavioural strategies practised before crisis, and mindfulness meditation, which trains attentional control over catastrophic loops. Social: support from family, friends and community that is authentic and energising rather than anxious and engulfing. Wellbeing, on this account, is not the absence of risk factors but the active presence of these protections — and every one of them is modifiable, which is the model's fundamentally hopeful claim.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Case: a university student with a flight phobia books trains that take three days, dropped an overseas exchange, and keeps her rescue inhaler unused 'in case'. Design the biopsychosocial analysis and the intervention plan.",
        "Biological: note the acute anxiety physiology (sympathetic surge, hyperventilation). Plan: breathing-retraining practice daily so the technique is fluent; short-acting benzodiazepine only as a one-off adjunct for the flight itself, prescribed and time-limited, given dependence risk.",
        "Psychological — perpetuation first: her avoidance is negatively reinforced (relief on booking the train), so the plan must block avoidance. Graded hierarchy: pictures of aircraft; airport visit; parked aircraft boarding; a short domestic flight with a support person. Pair each step with relaxed breathing — systematic desensitisation in the CS-plus-relaxation configuration.",
        "Psychological — cognition: CBT log of catastrophic predictions ('we will crash in any turbulence') with base-rate evidence and memory-bias audit (list every smooth flight she has taken).",
        "Social: brief the family with psychoeducation — no reassuring 'we will turn around if you are scared' promises (that accommodates and reinforces), no booking her flights for her (that rescues); stigma check: name the disorder, normalise treatment. Expected trajectory: avoidance broken, extinction allowed to proceed, exchange programme back on the table.",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Needle and injection phobias are among the most consequential: graded exposure plus breathing retraining measurably improves vaccine and blood-donation uptake.',
        'Flying-phobia programmes at major airlines pair desensitisation hierarchies with CBT — a commercial proof that the model scales.',
        'Parenting guidance for childhood fears is psychoeducation in miniature: model calm, do not rescue from every feared situation, praise approach behaviour.',
        'Workplace first-aid for panic focuses on the biological handle — slow breathing — because it is the only layer trainable in minutes.',
        'Public-health framing reduces stigma: phobia is a learned, treatable conditioning disorder, not weakness — the sentence that gets people into treatment.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Three slips recur. Mislabelling benzodiazepines as long-term treatment: they are short-acting management of acute anxiety — tolerance and dependence make them the wrong maintenance tool, and the syllabus wording ('short-acting... in the management of phobic anxiety') is precise for that reason. Reversing the conditioning roles: classical conditioning ACQUIRED the fear; operant conditioning (avoidance relief) PERPETUATES it — answers that say 'operant caused it' or 'classical maintains it' lose the marks. And 'supporting' a sufferer by helping them avoid: accommodation is negative reinforcement wearing a kind face — the psychoeducation lens exists precisely to warn families about it.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Mental wellbeing continuum', def: 'The axis from high wellbeing through fluctuating states to disorder on which everyone sits and moves; wellbeing is continuous, not categorical.' },
        { term: 'Resilience', def: 'The ability to cope with and manage change and uncertainty — recoverable capacity, not invulnerability.' },
        { term: 'Social and emotional wellbeing (SEWB)', def: 'The holistic Aboriginal and Torres Strait Islander framing of wellbeing across body, mind, family, community, culture, Country and ancestors.' },
        { term: 'Specific phobia', def: 'A persistent, excessive fear of a particular object or situation, recognised as irrational, avoided at significant cost.' },
        { term: 'GABA dysfunction', def: 'Reduced inhibitory signalling proposed as a biological contributor to easy acquisition and maintenance of fear associations.' },
        { term: 'Long-term potentiation (LTP)', def: 'Activity-dependent strengthening of synapses — the mechanism making rehearsed fear circuits durable and extinction-resistant.' },
        { term: 'Systematic desensitisation', def: 'Gradated exposure to the feared stimulus while maintaining relaxation — counterconditioning plus extinction along a hierarchy.' },
        { term: 'Psychoeducation', def: 'Structured teaching for families and supporters: challenge anxious thoughts, never encourage avoidance.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A student with a lift phobia always takes the stairs, feeling intense relief each time. The relief functions as:',
          options: ['positive punishment of lift use', 'negative reinforcement of stair-taking and avoidance', 'extinction of the phobia', 'systematic desensitisation'],
          answer: 1,
          explain: 'Avoidance removes the aversive anxiety, so avoidance is strengthened — negative reinforcement is the operant engine that PERPETUATES the phobia.',
        },
        {
          q: 'In the biological lens of the VCE syllabus, which pairing is correct?',
          options: ['serotonin dysfunction and memory bias', 'GABA dysfunction and long-term potentiation', 'dopamine agonists and breathing retraining', 'noradrenaline and systematic desensitisation'],
          answer: 1,
          explain: 'The syllabus names GABA dysfunction and LTP as the biological contributors — lower inhibitory tone plus synaptic strengthening of fear circuits.',
        },
        {
          q: 'Why are benzodiazepines confined to short-acting, one-off management of phobic anxiety?',
          options: ['they extinguish the conditioned response too fast', 'they enhance GABA and tolerance and dependence develop with regular use', 'they are ineffective for anxiety', 'they strengthen avoidance'],
          answer: 1,
          explain: 'As GABA agonists they reliably damp acute anxiety, but regular use produces tolerance and dependence — hence short-acting management, not maintenance.',
        },
        {
          q: 'A family member promises a flying-phobic relative "we will get off the plane the moment you panic". According to the psychoeducation lens this is:',
          options: ['protective and calming', 'a social protective factor', 'encouraging avoidance behaviour and should be avoided', 'an example of breathing retraining'],
          answer: 2,
          explain: 'Well-meant escape plans accommodate and reinforce avoidance — the family must not encourage avoidance, however kindly intended.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'insight',
        text: 'Grounding: VCE Psychology Study Design 2023-2027, Unit 4 Area of Study 2 (mental wellbeing levels, resilience and SEWB; specific phobia through GABA dysfunction and LTP, conditioning models, cognitive biases, triggers and stigma; interventions — benzodiazepines, breathing retraining, CBT, systematic desensitisation, psychoeducation), read with OpenStax Psychology 2e, chapter 15 (Psychological Disorders). The anxiety-and-depression lesson owns the general anxiety/depression picture and CBT\'s core; the trauma lesson owns the amygdala pathway phobia borrows; the behaviourist lesson owns the conditioning machinery; the sleep lesson owns the protective-factor science.',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'stats-time-series-trend-seasonality',
    title: 'Time Series: Trend, Seasonality and Forecasting from Data Ordered in Time',
    domain: 'Mathematics',
    field: 'Probability & Statistics',
    branch: 'Applied Statistics',
    tier: 'core',
    concepts: [
      'Time series: observations ordered and equally spaced in time',
      'Trend, seasonal, cyclical and irregular components',
      'Seasonal indices and deseasonalising a series',
      'Moving means and moving medians for smoothing',
      'Forecasting from fitted trends and seasonally adjusted values',
      'Extrapolation risk: when the past stops predicting',
    ],
    words: 1767,
    readMins: 9,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "Almost every dataset a business, a hospital or a government owns is ordered in time: monthly sales, daily emergency presentations, quarterly inflation. Such data breaks the usual statistical assumption of independent observations — this month's sales resemble last month's — and so it needs its own toolkit. A time series is a set of observations recorded at successive, usually equally spaced points in time, and its analysis asks three questions: what is the series' long-run DIRECTION (trend), what regular WITHIN-YEAR pattern repeats (seasonality), and what can legitimately be predicted about the next period? The VCE General Mathematics data-analysis strand examines exactly this toolkit — plots, trends, seasonal indices, smoothing, forecasting — and this lesson builds it from first principles.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "The regression lesson in this field fits lines through scattered POINTS; time series analysis fits structure through ORDERED history, and the difference in care required is enormous. Read any news story about 'record temperatures', 'seasonal hiring' or 'deseasonalised inflation' and you are watching this toolkit in use: the figure quoted is almost always a deseasonalised or smoothed value, not the raw one, because raw monthly numbers mislead systematically. Learning to see trend, seasonality and noise as SEPARATE components — and to recombine them honestly for forecasts — is one of the most immediately practical skills in applied statistics.",
      },
      { kind: 'heading', text: 'Reading the Series: Components and Plots' },
      {
        kind: 'para',
        text: "A time series plot puts TIME on the horizontal axis — always time, and the axis must be labelled with its units — and the observed value on the vertical, joining successive points with line segments so the sequence reads left to right. Four components hide inside the wiggle. The TREND is the long-run direction and rate: steady growth, decline or plateau, estimated by fitting a least-squares line to the whole series (or a segment of it). SEASONALITY is a regular pattern completed WITHIN each year — ice-cream sales peaking every January, electricity demand every evening — named 'seasonal' for the calendar even when the cycle is daily or weekly. CYCLES are longer multi-year swings without a fixed period, like economic booms and recessions. IRREGULAR variation is the residual noise — strikes, weather, chance. The classical decomposition expresses each observation as trend x seasonal x irregular (multiplicative model, appropriate when seasonal swings grow with the level of the series, as in most sales data) or trend + seasonal + irregular (additive model, when swings stay constant in size).",
      },
      {
        kind: 'para',
        text: "Two descriptive statistics pin down seasonality before any modelling. The seasonal INDEX for, say, March is the average level of March expressed as a fraction of the average level of the whole series — computed by taking each March's value, averaging them (in the simple version, over two or more years), and dividing by the series' overall mean. An index of 1.18 says March typically runs 18 per cent ABOVE average; 0.82 says 18 per cent below. Indices are usually normalised to average exactly 1 across the year. DESEASONALISING then divides each actual observation by its month's index, producing a seasonally adjusted series in which the calendar pattern has been removed — the number news reports quote precisely so that a strong June is not mistaken for a change in trend.",
      },
      { kind: 'heading', text: 'Smoothing: Moving Averages and Medians' },
      {
        kind: 'para',
        text: "Smoothing strips irregular variation so the eye can see trend and seasonality underneath. The moving MEAN of order k replaces each value with the average of itself and its neighbours — a 3-point moving mean averages each observation with the one before and after; a 7-point moving mean of DAILY data averages exactly one full week, which conveniently cancels day-of-week effects. Because each averaged value sits at the centre of its window, the smoothed series loses half a window at each end (a 3-point smoothing drops the first and last plotting positions). The moving MEDIAN does the same with the median and has one honest advantage: a single wild outlier drags a mean but barely moves a median, so median smoothing is the robust choice for series with spikes. In exam practice, smoothed values are tabulated against their centred plotting positions and the residual — actual minus smoothed — is the irregular component estimate.",
      },
      {
        kind: 'para',
        text: "Choosing the window length is a modelling decision: short windows track the series closely (less smoothing), long windows flatten aggressively and can distort genuine turning points. The convention worth remembering: to eliminate a KNOWN seasonal cycle, smooth over exactly one full cycle — 12 points for monthly data with annual seasonality, 4 for quarterly, 7 for daily-with-weekly. Smoothing over a shorter window leaves seasonal ripples in the smoothed series; smoothing over an unmatched window shifts peaks sideways.",
      },
      { kind: 'heading', text: 'Forecasting — and Its Limits' },
      {
        kind: 'para',
        text: "A forecast recombines the components forward in time. Fit a least-squares trend line t = a + bx to the (usually deseasonalised or smoothed) series, where x counts periods from the start; evaluate it at a future x; then reseasonalise by MULTIPLYING by the future month's seasonal index (in the multiplicative model the deseasonalised value = actual/index, so the forecast = trend x index). Worked example below. The honest closing chapter is extrapolation risk: a trend line is a description of PAST behaviour, and forecasts assume the trend and the seasonal pattern persist. Structural breaks — a pandemic, a new competitor, a policy change — violate that assumption instantly; the further ahead the forecast, the wider the honest uncertainty; and no time-series method can see a turning point before the data do. Professional practice therefore reports forecasts WITH their assumption and refreshes them as each new observation arrives.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Problem: monthly seafood revenue (in $1000s) shows a least-squares trend (deseasonalised) t = 42.0 + 0.5x, where x = number of months since January Year 1. February's seasonal index is 0.85. Forecast February of Year 3 and interpret.",
        "Count the period: February Year 3 is x = 25 (Jan Year 1 is x = 1, so Feb Year 3 is the 25th month).",
        "Trend value: t = 42.0 + 0.5 x 25 = 54.5 (thousand dollars), deseasonalised.",
        "Reseasonalise: forecast = 54.5 x 0.85 = 46.3, i.e. about $46,300.",
        "Interpret: February's index of 0.85 says the month typically runs 15 per cent below the annual average, so the trend's 54.5 is scaled DOWN — and note the two assumptions printed on any honest forecast: the linear trend persists and the seasonal pattern repeats.",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Statistical agencies publish GDP, employment and inflation seasonally adjusted — the headline numbers are this lesson\'s deseasonalised series.',
        'Retail and utilities plan inventory and generation on seasonal indices: staffing for the December index, not the annual average.',
        'Epidemiology reads disease surveillance as time series — seasonal indices for influenza, smoothed curves to reveal outbreaks underneath weekly noise.',
        'Financial reporting distinguishes smoothed trend from raw volatility, and the moving median is the analyst\'s defence against one-off spikes.',
        'Every forecasting dashboard carries this lesson\'s caveat: the model extends the past; it does not predict breaks.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Four slips recur. Plotting the WRONG axis: time belongs on the horizontal axis, and segments join the points — a scatter without joining lines hides the sequence. Deseasonalising by MULTIPLYING by the index instead of dividing: adjustment divides (actual/index); only the forecast reseasonalises by multiplying. Off-centre smoothing: a 3-point moving mean loses the first and last plotting positions, and a 7-point daily window exists to cancel day-of-week effects — smoothing monthly data over 7 months leaves seasonal ripples behind. And quoting a forecast without its assumptions: trend persistence and seasonal stability are assumptions, not facts — the extrapolation caveat is part of the answer, not an apology.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Time series', def: 'Observations recorded at successive, equally spaced points in time and analysed in their order.' },
        { term: 'Trend', def: 'The long-run direction and rate of change of a series, estimated by a fitted line over time.' },
        { term: 'Seasonal index', def: 'A value expressing a particular month or quarter as a fraction of the overall average level; indices average to 1 across the year.' },
        { term: 'Deseasonalising', def: 'Dividing each observation by its seasonal index to remove the within-year pattern and reveal the underlying trend.' },
        { term: 'Moving mean / moving median', def: 'Smoothing by replacing each value with the mean (or robust median) of itself and its neighbours across a window of order k.' },
        { term: 'Two-sided moving average', def: 'A symmetric window centred on each plotting position — the reason smoothed series are shorter at both ends.' },
        { term: 'Forecast', def: 'A trend-line value evaluated at a future period, then reseasonalised by multiplying by that period\'s seasonal index.' },
        { term: 'Extrapolation risk', def: 'The assumption-laden nature of forecasting: trends and seasonal patterns describe the past and may break without warning.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A month has seasonal index 1.15. What does that mean?',
          options: ['the month is 15 per cent of the year', 'the month typically runs 15 per cent above the series average', 'the trend rose 15 per cent that month', '15 per cent of observations are outliers'],
          answer: 1,
          explain: 'A seasonal index expresses the month\'s average level as a fraction of the overall mean — 1.15 means 15 per cent above average, from the calendar pattern alone.',
        },
        {
          q: 'To deseasonalise an observation in a multiplicative model you:',
          options: ['subtract the index', 'divide the actual value by its seasonal index', 'multiply the actual value by its index', 'smooth it with a 12-point median'],
          answer: 1,
          explain: 'Actual = deseasonalised x index, so deseasonalising DIVIDES by the index; multiplication is the forecasting (reseasonalising) step.',
        },
        {
          q: 'Why smooth DAILY data with a 7-point moving mean?',
          options: ['seven is a convenient odd number', 'one full weekly cycle cancels day-of-week seasonality', 'it removes the trend entirely', 'it centres the data on weekends'],
          answer: 1,
          explain: 'A window equal to one full seasonal cycle cancels that seasonality — 7 points for weekly cycles, 12 for monthly-with-annual, 4 for quarterly.',
        },
        {
          q: 'A fitted trend line is used to forecast revenue for a period five years ahead. The most important caveat is:',
          options: ['the seasonal index may be computed wrongly', 'the forecast assumes the past trend and seasonal pattern persist — structural breaks break it', 'moving medians are always better', 'the intercept should be zero'],
          answer: 1,
          explain: 'Forecasting is extrapolation: the trend line describes past behaviour, and any structural change — new competitor, pandemic, policy — invalidates it. State the assumption.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'insight',
        text: 'Grounding: VCE General Mathematics Study Design 2023-2027, Unit 3 Area of Study 1, topic "Investigating and modelling time series" (time series plots and trend; seasonality, seasonal indices and deseasonalising; smoothing with moving means and medians; forecasting) — read against OpenStax Introductory Statistics, the time-series sections of any applied statistics text. The correlation-and-regression lesson owns the least-squares fitting this lesson borrows; the descriptive-distributions lesson owns the centre-and-spread vocabulary; the confidence-and-hypothesis lesson owns the inference layer that full time-series modelling adds.',
      },
    ],
  },
  // ------------------------------------------------------------------
]

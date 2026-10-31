/**
 * Knowledge Universe — Psychology — Chapter 06: Learning and Behaviour
 * 1 lesson · ~2,188 words
 * field: Psychology
 * legacy sources: x56-vce-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Lessons (snapshot at reorganization):
 *   06.1 psy-behaviourist-learning — Classical and Operant Conditioning: How Experience Teaches Behaviour
 */
import type { KnowledgeTopic } from '../../types'

export const psychologyCh06: KnowledgeTopic[] = [
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
]

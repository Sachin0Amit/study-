import type { KnowledgeTopic } from '../types'

/** CROSS-VERIFY PASS X53 (2026-10-26): Study Skills & Learning Science (book 1,
 *  ku-study-skills) cross-verified against Barbara Oakley, "A Mind for Numbers:
 *  How to Excel at Math and Science (Even If You Flunked Algebra)" (Jeremy
 *  P. Tarcher/Penguin, 2014; foreword by Terrence Sejnowski, preface by
 *  Jeffrey Karpicke). Full text PDF (294 pages, ISBN 978-1-101-62161-5,
 *  archive.org copy, publicly accessible) downloaded, text-extracted and read
 *  this pass: TOC, foreword, preface, chapters 1-2 (focused/diffuse modes,
 *  Einstellung, pinball and octopus models) COMPLETE, chapter 3-4 (chunking,
 *  illusions of competence, Solomon Shereshevsky) COMPLETE, chapters 5-6 + 9
 *  (procrastination zombies, cue-routine-reward-belief, process-not-product,
 *  mental contrasting) COMPLETE, chapter 7 (chunking vs choking), the
 *  interleaving/overlearning section (Doug Rohrer), chapter 15 (mind's eye,
 *  Feynman technique, transfer), chapter 17 (test taking, hard-start-
 *  jump-to-easy, Beilock's choking advice) and the book's closing "Ten Rules
 *  of Good and Bad Studying".
 *
 *  CROSS-VERIFY RESULT — our existing lessons agree with the book on every
 *  shared claim: retrieval practice beats rereading (Karpicke's preface),
 *  highlighting/rereading illusions (matches our active-recall and
 *  metacognition lessons), chunking and the ~4-slot working memory (matches
 *  our mnemonics lesson), memory palace (matches), interleaving as
 *  discrimination training (matches our interleaving lesson), sleep and
 *  spaced practice (matches), Feynman-style teach-back (matches our
 *  peer-learning lesson), Yerkes-Dodson-style arousal reappraisal (matches
 *  our exam-strategy lesson). TWO existing lessons gained one refinement
 *  paragraph each (documented below); ZERO corrections were needed.
 *
 *  TWO SUBTOPICS the book centres on that no live topic owned (grep-verified:
 *  zero occurrences of "focused mode", "diffuse mode", "Einstellung",
 *  "Pomodoro" anywhere in the fields) are added here:
 *
 *  1. study-focused-diffuse-modes — the book's opening and signature idea:
 *     two brain gears, the pinball metaphor, the attentional octopus, the
 *     Einstellung effect, why math/science is abstract and "encrypted",
 *     Dali/Edison diffuse-mode tricks, the Pomodoro as mode training, and
 *     the exam-day hard-start-jump-to-easy application.
 *  2. study-procrastination-zombies — the book's three-chapter core:
 *     procrastination as anticipation-avoidance (the mathphobe imaging
 *     findings), bricks-and-mortar learning, the zombie habit anatomy
 *     (cue-routine-reward-belief), process-not-product, willpower economics,
 *     mental contrasting, and the Pomodoro as cue-rewiring.
 *
 *  REFINEMENTS to existing lessons (in foundation-learning.ts, this pass):
 *  - fnd-interleaving gains the OVERLEARNING paragraph (Oakley ch4 + Doug
 *    Rohrer's research: continuing same-session repetition past criterion
 *    gives diminishing returns; the automaticity exception for performance
 *    skills like a tennis serve or piano concerto).
 *  - study-exam-strategy gains the HARD-START-JUMP-TO-EASY paragraph
 *    (Oakley ch17: begin with the hardest problem when format allows, jump
 *    to easy ones the moment you stall — the diffuse mode keeps incubating
 *    the hard one; avoids stacking peak stress with peak difficulty at the
 *    end of the paper). Ids, titles and existing text untouched.
 *
 *  CARVING (zero-repetition rule):
 *  - fnd-habits-behavior-design owns habit-FORMATION science (Lally 66-day
 *    curve, implementation intentions, automaticity, never-miss-twice);
 *    the zombies lesson owns the PROCRASTINATION mechanism and the four-part
 *    habit REWRITE, referencing the formation science rather than repeating it.
 *  - study-time-management (x52) owns the academic calendar layer and the
 *    emotion-regulation diagnosis of avoidance; the zombies lesson owns the
 *    cue-level machinery, process-vs-product and the Pomodoro protocol, and
 *    cross-references the calendar layer instead of restating it.
 *  - fnd-spaced-repetition owns sleep's consolidation role; bricks-and-mortar
 *    appears here only as the anti-cramming argument.
 *  - study-exam-strategy owns full triage/budgeting; hard-start appears there
 *    as one refinement paragraph and here only as a mode-application bullet.
 *  - x36 mnemonics owns imagery as an ENCODING technique; the attentional
 *    octopus here is working-memory structure, not a memory device.
 */

export const x53CrossverifyPassTopics: KnowledgeTopic[] = [
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
      words: 1965,
      readMins: 10,
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
          text: 'The focused mode is the brain\'s tight beam. It runs on the concentrating abilities of the prefrontal cortex, right behind your forehead, and it works sequentially and analytically: turn attention onto something and the focused mode is on. Oakley\'s picture is a pinball machine with its rubber bumpers packed close together: a thought launches and bounces rapidly along a well-worn path. That is the mode\'s strength and its limit — it travels familiar routes. Multiplying numbers you already know, rehearsing verb conjugations you learned last week, analysing a swim stroke you can already do: focused mode territory. It is also, in her second image, an attentional octopus sitting over the four-or-so slots of working memory, sending tentacles to different brain areas — which is why interruptions are so costly: each distraction grabs a tentacle.',
        },
        {
          kind: 'para',
          text: 'The diffuse mode is the spread-out machine: bumpers far apart, so a thought travels a long way before hitting anything. It is what runs when you relax your attention and let your mind wander — in the shower, on a walk, in sleep. You cannot command it on, it is not located in one brain area, and it cannot do precise, complex thinking. What it can do is range widely and hook distant ideas together, which is exactly what a genuinely new problem requires. The mathematician Henri Poincaré cracked a problem he had hammered at for weeks only as he stepped onto a holiday bus; the solution arrived complete, from a part of his brain that had kept working while he stopped. One rule comes with the gift: the diffuse mode must have clay to make bricks. It works on what focused effort has already loaded. Relaxing without having studied produces relaxation, not insight.',
        },
        {
          kind: 'para',
          text: 'The two modes are exclusive — you are in one or the other, never both at once — but problem solving is a volley between them. Focused mode loads the problem, strains on it, and hands it off; diffuse mode ranges and returns a candidate; focused mode checks and develops it. This explains two familiar failures. Grinding without release: staying in focused mode past the point of diminishing returns blocks the very mode that could help. And diving into homework before reading the textbook or attending the lecture: you launch focused-mode thoughts with no maps at all, so they rattle in the wrong neighbourhood. Struggle first, then step away — in that order.',
        },
        {
          kind: 'para',
          text: 'The focused mode has a specific failure mode so common it earned a name. The Einstellung effect — German for "installation" — is when an idea you already have in mind, or your first approach, prevents a better one from being found. In the pinball picture, your thought bounces around a comfortable upper region while the solution pattern sits elsewhere in the machine, unreached. Everyone who has re-reads a problem using the same broken setup for twenty minutes has met Einstellung; the cure is not more effort in the same groove but a deliberate mode switch — walk, nap, sleep — so the pinball can land somewhere new. Beware, too, the folk version of hemispheric psychology: people are not "left-brained" or "right-brained" — both hemispheres contribute to both modes. The modes are real; the personality quiz is not.',
        },
        {
          kind: 'para',
          text: 'Why do mathematics and science punish bad study habits so quickly? Oakley\'s answer is that their ideas are abstract and encrypted. You can point at a cow and the word c-o-w; you cannot point at a live plus-sign, and one symbol like the multiplication sign stands for a whole buried operation. In the pinball analogy, abstractness makes the bumpers spongier — they need extra practice to harden. That is also why these subjects make procrastination so expensive, a link the procrastination lesson develops: language study survives cramming better than a subject whose every idea sits several levels of abstraction deep.',
        },
        {
          kind: 'para',
          text: 'The historical masters used the diffuse mode quite deliberately. Salvador Dalí would fall asleep in a chair holding a key over a plate; as sleep arrived, the key dropped, the clatter woke him, and he carried the diffuse-mode images straight into focused work. Thomas Edison used ball bearings the same way. Their trick was sleeping at the edge of waking, catching the diffuse mode\'s output as it formed. You do not need a plate: a walk without a phone, a run, a nap, a night of sleep primed with the problem — each hands the loaded material to the diffuse gear. The priming matters, which is also why the night before an exam deserves only a light review: you are resting both muscles for the morning, like not running ten miles the day before a marathon.',
        },
        {
          kind: 'para',
          text: 'The Pomodoro technique is the mode-shifting protocol for people who find neither gear easy to enter. Set a timer for twenty-five minutes, kill every interrupting beep and notification, and work intently at one task — not to finish it, just to work on it. When the timer ends, take a real reward: web, coffee, a walk. The technique works because it matches the machinery: a bounded block of focused mode, a deliberate release that lets the diffuse mode process, and a reward that makes the next block easier to start. Three or four honest blocks in a day move serious work. It is also, as the procrastination lesson shows, a cue-rewriting tool in disguise.',
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
      id: 'study-procrastination-zombies',
      title: 'Procrastination and the Zombie Habits: Rewriting the Cue',
      domain: 'Foundation Learning',
      field: 'Study Skills & Memory',
      branch: 'Study Systems',
      tier: 'core',
      concepts: [
        'Procrastination is anticipation-avoidance',
        'Bricks and mortar: why cramming fails',
        'The keystone habit',
        'Zombie anatomy: cue, routine, reward, belief',
        'Process, not product',
        'Willpower economics',
        'Mental contrasting',
        'The Pomodoro as cue-rewiring',
      ],
      words: 1802,
      readMins: 9,
      addedOn: '2026-10-26',
      blocks: [
        {
          kind: 'para',
          text: 'A student sits down at ten on a Saturday morning, coffee in hand, meaning to spend a solid day on mathematics. She looks at the textbook. A subtle ouch — the brain\'s pain centers light up at the graphs and the strange symbols. She shifts her eyes to the laptop instead, where a little dollop of pleasure waits, and two hours later the mathematics has not started. A Mind for Numbers devotes three chapters to this pattern, and its starting point is medical, not moral: brain-imaging studies of people who fear mathematics show the pain activating when they merely contemplate working on it — and disappearing once they actually begin. Procrastination is not a character flaw. It is the avoidance of anticipated discomfort, and it has a known anatomy that can be rewritten.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'Learning mathematics and science works like laying bricks: brief study sessions place the bricks, and time in between lets the mortar dry. Cramming stacks wet bricks in one night and produces the faint, fragmented neural patterns that dissolve within days. Procrastination is therefore not a scheduling quirk but a direct attack on the learning mechanism itself — and because it degrades everything downstream, Oakley calls it the single "keystone" bad habit: change this one, and a cascade of other improvements follows.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'The mechanism deserves precision. The discomfort that triggers avoidance is anticipatory: dread of the task, not the task. Rita Emmett\'s line is the field\'s honest summary — the dread of doing a task uses up more time and energy than doing the task itself. Each escape delivers a small relief, and relief is reinforcing: the brain learns that looking away feels better, so the looking-away becomes automatic. Meanwhile the avoided subject grows more frightening, confidence drains, and procrastinators end up reporting higher stress, worse health and lower grades — the habit feeding the very discomfort that launched it. Some students even convert it into identity or pride ("I crammed it in one night"), which is the loop wearing a costume.',
        },
        {
          kind: 'para',
          text: 'Why not simply try harder? Because willpower is expensive. Oakley\'s rule is blunt: do not spray willpower around like cheap air freshener. Willpower uses heavy neural resources and runs out; the entire strategy of this lesson is to spend it at exactly one place — the moment of reaction to a cue — and let redesigned habit machinery carry everything after. Habits, her friendly "zombies", are the routine, cue-triggered responses your brain falls into. You do not fight the zombie. You rewrite its programming.',
        },
        {
          kind: 'para',
          text: 'Every habit, procrastination included, has four parts, and the rewrite targets each. The cue is what launches the zombie: location, time of day, how you feel, a reaction to other people, or the thing that just happened — the laptop opening, the phone buzzing, the textbook on the desk at the wrong hour. The routine is what the zombie does once launched; this is the pressure point, the only place where active effort is applied — have a plan and rehearse it: phone in another room, library seat, timer on. The reward is what the habit actually pays out; procrastination pays in relief and small pleasures, so the rewrite must supply its own — a latte, guilt-free web time after the timer, the felt pride of a crossed-off block. Only when the brain starts expecting the new reward does rewiring take hold, a process sometimes called learned industriousness: work itself gradually becomes rewarding. And the belief is the fourth part — the conviction that the new system will carry you on the bad days. Belief is fed by community (classmates who run the same system) and by evidence (a wall calendar of finished blocks).',
        },
        {
          kind: 'para',
          text: 'One reframing makes the whole machine easier to operate: focus on process, not product. Product is the outcome — five finished problems, the completed essay — and product is precisely what triggers the anticipatory pain. Process is the flow of time and the habits attached to it: twenty-five minutes on problem sets after dinner, in the same chair, every day. The zombie brain loves a process, because it can march mindlessly along a time commitment; it panics at a product, because products demand judgment. So the commitment you make is "I will sit and work for twenty-five minutes", never "I will finish the assignment". Finishing happens to people who reliably sit.',
        },
        {
          kind: 'para',
          text: 'The Pomodoro technique — twenty-five distraction-free minutes, then a genuine reward — is the default tool because it bundles the whole rewrite: it removes the damaging cues for half an hour, supplies a tiny process goal, and pays the reward that rewires the expectation. Two practical notes from the book: eat something before starting hard tasks (the willpower moment at the cue is easier with fuel on board), and make the first block the easiest task of the day (an early win makes the second block cheaper). For the recurring, calendar-level version of avoidance — which tasks to delay and which to attack in what order across a whole term — the time-management lesson owns that layer; this lesson owns the moment the hand reaches for the phone.',
        },
        {
          kind: 'para',
          text: 'When motivation itself is the missing ingredient, Oakley prescribes mental contrasting: picture concretely where you want this studying to take you — the degree, the job, the life you can actually afford — and deliberately contrast it with where you sit now. Not as punishment, but as directional signal: the gap between image and reality is the fuel. Students who post one picture of the target in the workspace and look at it when motivation lags are running this technique. It pairs naturally with the belief component: the picture is the promise, the wall calendar of completed blocks is the evidence, and together they keep the system alive after the novelty dies.',
        },
        { kind: 'example', title: 'Worked Example', steps: [
          'Identify what is asked: the Saturday-morning student from the intro — laptop, couch, two hours lost to surfing before mathematics starts. Diagnose the zombie and rewrite it.',
          'Recall the governing ideas: the cue launches the routine; willpower is spent only at the reaction to the cue; the new routine needs its own reward and a belief to survive setbacks.',
          'Apply: change the cue first — Saturday study happens at the library after breakfast, phone in the bag, laptop opened only to the problem set. The routine: one Pomodoro on the easiest pending problem (an early win), then a second on the confusing section, notes taken on exactly where confusion sits. The reward: the good coffee from the place next door plus twenty minutes of guilt-free browsing. The belief: a study partner meets at the same hour, and each finished block gets a cross on a visible calendar.',
          'State the result: the zombie is not fought head-on — its cue (couch + open laptop + morning boredom) is removed, its routine replaced at the single point willpower was needed, and the new loop pays its own reward while the calendar and the partner hold the belief.',
        ] },
        { kind: 'heading', text: 'Applications in the Real World' },
        { kind: 'list', items: [
          'Programmers rewire the after-lunch cue: opening the code editor before the feed, instead of the feed before the editor.',
          'Writers commit to a process — thirty minutes each morning at the same desk — and let word counts take care of themselves.',
          'Athletes and coaches build pre-session rituals so that starting practice never requires a motivation debate.',
          'Clinicians give habit-based advice — one behaviour, one context, repeated — precisely because it survives after motivation fades.',
          'Returning learners use mental contrasting to convert a mid-career identity ("not a maths person") into a destination picture worth sitting for.',
        ] },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'Spending willpower everywhere except the cue — fighting urges all day instead of removing the phone from the room. Running the routine with no reward, then concluding the method failed when the rewiring never started. Changing everything at once, which collapses at the first bad week — rewrite one zombie at a time. And the planning trap: reorganising the task list, the app and the colour scheme is avoidance in a productivity costume. The final pitfall is moral: one missed day is noise (the habits lesson\'s never-miss-twice rule applies); treating it as proof you are "a procrastinator" hands the identity back to the zombie.',
        },
        { kind: 'heading', text: 'Key Terms' },
        { kind: 'terms', items: [
          { term: 'Procrastination', def: 'Avoidance of anticipated discomfort — dread of the task rather than the task itself.' },
          { term: 'Anticipatory aversion', def: 'The pain-centre response to contemplating a task, which typically vanishes once work begins.' },
          { term: 'Keystone habit', def: 'A habit that influences many other areas of life; Oakley names procrastination the keystone bad habit.' },
          { term: 'Cue', def: 'The trigger that launches a habitual routine: location, time, feeling, people, or a preceding event.' },
          { term: 'Routine', def: 'The habitual response itself; the one place willpower is productively spent — on the reaction to the cue.' },
          { term: 'Reward', def: 'The payoff a habit pays out; a new reward is required before the brain rewires an old loop.' },
          { term: 'Learned industriousness', def: 'The process by which work itself, reliably rewarded, becomes satisfying.' },
          { term: 'Process versus product', def: 'Committing to flows of time and habit rather than outcomes, because outcomes trigger the pain.' },
          { term: 'Mental contrasting', def: 'Deliberately contrasting a vivid picture of the target with the current reality to fuel effort.' },
        ] },
        { kind: 'heading', text: 'Check Yourself' },
        { kind: 'quiz', items: [
          {
            q: 'Brain imaging of people who fear mathematics found that the pain response:',
            options: ['Occurs throughout the work', 'Appears when contemplating the task and fades once they begin', 'Never occurs', 'Is caused by the teacher, not the task'],
            answer: 1,
            explain: 'The discomfort is anticipatory — which is why starting, not sustaining, is the hard part, and why five-minute starts work.',
          },
          {
            q: 'According to the lesson, willpower should be spent:',
            options: ['Continuously, to build it like a muscle', 'Only at the moment of reaction to the cue', 'Never — willpower is useless', 'On rewards only'],
            answer: 1,
            explain: 'Willpower is a costly resource; the rewrite strategy spends it at exactly one point — the routine\'s launch — and lets design carry the rest.',
          },
          {
            q: 'Focusing on process rather than product works because:',
            options: ['Products are unimportant', 'The brain readily marches along time-and-habit commitments while outcomes trigger anticipatory pain', 'Processes require no attention', 'Products take longer than processes'],
            answer: 1,
            explain: '"Twenty-five minutes on problem sets" recruits the zombie machinery; "finish all five problems" triggers the pain that starts the avoidance loop.',
          },
          {
            q: 'Mental contrasting involves:',
            options: ['Imagining only your future success in detail', 'Contrasting a vivid image of your target with your current reality', 'Comparing yourself with classmates', 'Memorising your grades across terms'],
            answer: 1,
            explain: 'The contrast — target picture against present situation — is the fuel; the image alone is daydreaming, and the gap is the point.',
          },
        ] },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'This lesson owns the procrastination mechanism and the four-part rewrite. The habit-formation science underneath — automaticity curves, implementation intentions, never-miss-twice — is the habits lesson; the term-level calendar that decides what deserves your blocks is the time-management lesson; and what to actually do inside a focused block is the active-recall and focused/diffuse-modes material. For the stress that avoidance manufactures at scale, continue to the well-being lesson.',
        },
      ],
    },
  ]

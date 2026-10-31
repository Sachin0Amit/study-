/**
 * Knowledge Universe — Mental Health — Chapter 01: Mood & Anxiety
 * 3 lessons · ~4,847 words
 * field: Mental Health
 * legacy sources: health-wellness.ts, x44-health-mind-pass.ts, x56-vce-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Mood and Anxiety]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 mind-specific-phobia-biopsychosocial — Mental Wellbeing and Specific Phobia: The Biopsychosocial Model at Work
 *   01.2 mind-trauma-ptsd-recovery — Trauma and PTSD: How Wounds Become Symptoms and How Recovery Works
 *   01.3 mind-anxiety-depression — Anxiety and Depression: What They Actually Are
 */
import type { KnowledgeTopic } from '../../types'

export const mentalHealthCh01: KnowledgeTopic[] = [
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
  {
    id: 'mind-trauma-ptsd-recovery',
    title: 'Trauma and PTSD: How Wounds Become Symptoms and How Recovery Works',
    domain: 'Health & Wellness',
    field: 'Mental Health',
    branch: 'Mood and Anxiety',
    tier: 'core',
    concepts: [
      'Trauma exposure versus the stress of ordinary life',
      'The four DSM-5 symptom clusters',
      'The one-month duration rule and acute stress disorder',
      'Fear conditioning, generalization and the amygdala',
      'Avoidance as the engine that keeps symptoms alive',
      'Trauma-focused therapies: CBT, prolonged exposure, EMDR',
    ],
    words: 1600,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Most people who live through something terrifying do not develop a psychiatric disorder. This is the first fact about trauma, and the most neglected one: the human alarm system, tested by accidents, assaults, disasters and loss, usually completes its work — the memories sore for a while, then file themselves away as the past. Post-traumatic stress disorder is what happens when that filing fails, when the memory refuses to stay in the past and keeps arriving as the present. Understanding PTSD therefore means understanding two things at once: how the brain files frightening experience, and what jams the mechanism.',
      },
      {
        kind: 'para',
        text: 'The lesson runs in that order. It defines what clinicians mean by trauma — a stricter word than the everyday one — and how the diagnostic manual carves PTSD into four symptom clusters. It then explains the machinery: the learning systems that make trauma memories different, why avoidance feels protective but feeds the disorder, and which treatments have the evidence to claim they reopen the filing system. The general anatomy of anxiety and mood disorders — panic, generalized anxiety, depression — is taught in the lesson Anxiety and Depression: What They Actually Are; this lesson stays on the trauma-specific road.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Large surveys suggest most adults will meet at least one traumatic event in their lives, while roughly three to four percent experience PTSD in a given year. That gap is the recovery majority — and knowing that recovery is the norm changes how survivors, families and clinicians respond. It also matters practically: trauma-focused therapies have among the strongest evidence bases in psychotherapy, yet most people with PTSD never receive them — usually because avoidance keeps them out of the office.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'What Counts as Trauma — and What Makes It PTSD' },
      {
        kind: 'para',
        text: 'In the diagnostic manual DSM-5, PTSD sits in its own family, the trauma-and-stressor-related disorders, and entry is gated by an exposure criterion: actual or threatened death, serious injury, or sexual violence — experienced directly, witnessed in person, learned about happening to a close relative or friend, or encountered repeatedly in the course of work, as emergency workers do. A stressful divorce or a financial setback, however painful, does not meet the gate. The word trauma is used loosely in conversation; here it keeps its technical edge, because the gate exists for a reason — the events that pass it share a quality that stresses the memory system itself.',
      },
      {
        kind: 'para',
        text: 'Once through the gate, the syndrome is organized into four clusters. Intrusion: the event returns unbidden — flashbacks, nightmares, intense distress at reminders. Avoidance: steering away from memories, feelings, places, people and conversations connected to the event. Negative alterations in cognition and mood: blankets of guilt or shame, an inability to remember key features of the event, loss of interest, feeling cut off from others, a dimmed view of the world and oneself. Alterations in arousal and reactivity: a body stuck on high alert — startle, hypervigilance, sleep disruption, irritability, poor concentration. For the PTSD diagnosis, symptoms from the clusters must persist for more than a month and cause real impairment. Inside the first month the same picture is called acute stress disorder, and in some cases the full syndrome surfaces only months or years later — the delayed-expression pattern.',
      },
      { kind: 'heading', text: 'The Machinery: Why Trauma Memories Stick' },
      {
        kind: 'para',
        text: 'The brain learns danger through fear conditioning: when a neutral cue — a smell, a sound, a street corner — is present during an overwhelming event, the amygdala bonds the cue to the fear, fast and permanently, without the slow, deliberate hippocampal route. That speed saved your ancestors\' lives. The system\'s ordinary follow-up is extinction, in which a safe re-exposure teaches the amygdala that the cue no longer predicts harm. In PTSD something interferes with that update. The fear response generalizes — the alarm fires not only for the original cue but for anything resembling it — and the prefrontal brake that normally restrains the amygdala runs weak, while stress hormones at the moment of the event make the memory unusually vivid and strong. The hippocampus, which normally timestamps memories as past, is blunted by the same flood, so recollections arrive without their this-is-over label. A flashback is a memory playing without its frame.',
      },
      {
        kind: 'para',
        text: 'Avoidance is the disorder\'s engine. Every time a reminder is dodged, anxiety drops immediately — a perfect, instant reinforcement of the dodging. But the drop means the brain never receives the safe re-exposure that extinction requires; the alarm is never given its evidence. Avoidance also generalizes: the restaurant becomes the street, then leaving the house. What began as self-protection builds the prison. This one mechanism explains why PTSD is both so understandable — who would not dodge what hurts? — and so persistent.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Take a case: eight months ago, a survivor was rear-ended at a traffic light; the car was totaled, the airbag burned, but injuries were minor. Since then she has not driven, and the following symptoms need sorting into the four clusters.',
          'Nightmares of the crash and sudden images when a car brakes hard ahead — intrusion: unbidden re-experiencing through sleep and flashback.',
          'She now walks two extra blocks to avoid the intersection, mutes news clips of accidents, and deflects every conversation about the crash — avoidance, the engine keeping the alarm untested.',
          'She believes she should have seen it coming, feels like a bad driver and a worse judge of people, and has stopped visiting friends — negative alterations in cognition and mood, with social withdrawal.',
          'She startles at horn sounds, sleeps five broken hours, and snaps at colleagues — alterations in arousal and reactivity.',
          'Check the calendar and the impairment: more than a month has passed, and the symptoms cost her work and relationships — the duration and impairment gates are met, and the clinical picture is PTSD, best answered with a trauma-focused therapy rather than watchful waiting.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'trauma (clinical)', def: 'Actual or threatened death, serious injury or sexual violence, as defined by the DSM-5 exposure criterion — stricter than everyday usage.' },
          { term: 'intrusion', def: 'The symptom cluster of unbidden re-experiencing: flashbacks, nightmares, and intense distress at reminders.' },
          { term: 'avoidance', def: 'Steering away from trauma-related memories, feelings and situations; instantly relieving, and the mechanism that starves extinction of evidence.' },
          { term: 'hypervigilance', def: 'A persistent state of high alert and exaggerated startle, belonging to the arousal-and-reactivity cluster.' },
          { term: 'fear conditioning', def: 'The amygdala\'s rapid bonding of a neutral cue to fear during a frightening event — fast, durable, and slow to extinguish.' },
          { term: 'extinction', def: 'The learning process by which safe, repeated exposure to a cue teaches the alarm system that the threat is over.' },
        ],
      },
      { kind: 'heading', text: 'How Recovery Actually Works' },
      {
        kind: 'para',
        text: 'For most people the filing system completes on its own: symptoms ease over weeks to months with safety, sleep and social support, and no treatment is needed. When PTSD has taken hold, though, it rarely burns out by itself, and the effective treatments share a strategy in direct opposition to the disorder\'s engine: they reintroduce the evidence avoidance has been suppressing. Trauma-focused cognitive behavioral therapy reworks the meanings burned into the event — the guilt, the mistrust, the changed view of self. Prolonged exposure, a structured CBT protocol, revisits memories and avoided situations step by step until the alarm learns they are over. Cognitive processing therapy targets the stuck beliefs about why it happened. EMDR pairs recalled memory with guided bilateral attention — eye movements or taps — and, whatever the final verdict on its mechanism, lands in the same evidence tier as the exposure therapies. These are the front line, endorsed across clinical guidelines worldwide.',
      },
      {
        kind: 'para',
        text: 'Medication has a real but supporting role. Two SSRIs, sertraline and paroxetine, are approved for PTSD and take the edge off arousal, sleep and mood symptoms; they are the standard pharmacological option. What does not help is the folk pharmacology of avoidance — alcohol and sedatives mute tonight\'s symptoms while feeding tomorrow\'s, and they are the most common self-treatment, often entangling PTSD with substance problems. Recovery rates with trauma-focused therapy are substantial though not universal, and dropping avoidance — with a guide, at a survivable pace — remains the common denominator of every road out.',
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In the DSM-5, PTSD is classified under…',
            options: ['the anxiety disorders', 'the trauma-and-stressor-related disorders', 'the dissociative disorders', 'the personality disorders'],
            answer: 1,
            explain: 'DSM-5 gave PTSD its own family — trauma-and-stressor-related disorders — reflecting its distinct exposure criterion and mechanism.',
          },
          {
            q: 'A survivor refuses to drive again and never talks about the crash. This symptom belongs to which cluster?',
            options: ['intrusion', 'avoidance', 'negative alterations in cognition and mood', 'alterations in arousal and reactivity'],
            answer: 1,
            explain: 'Dodging places, feelings and conversations connected to the event is the avoidance cluster — the engine that blocks extinction.',
          },
          {
            q: 'Why does avoidance make PTSD persist?',
            options: ['it strengthens the trauma memory chemically', 'it prevents the safe re-exposure that extinction learning requires', 'it damages the hippocampus', 'it converts acute stress disorder into delayed expression'],
            answer: 1,
            explain: 'Each dodge delivers instant relief — negative reinforcement — while denying the alarm system the evidence that the threat is over.',
          },
          {
            q: 'Which medication pairing is correct for PTSD?',
            options: ['benzodiazepines are first-line', 'sertraline and paroxetine are the approved SSRIs', 'no medication has any effect', 'antipsychotics are mandatory'],
            answer: 1,
            explain: 'Two SSRIs — sertraline and paroxetine — hold approval for PTSD; sedatives are widely used by patients but not a treatment.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read Anxiety and Depression: What They Actually Are to place PTSD inside the wider family of internalizing disorders, and Stress, Cortisol and the Body\'s Alarm System for the hormonal storm that makes trauma memories so strong. How Psychotherapy Works gives the school-by-school map behind the trauma-focused treatments named here, and the addiction lesson traces the self-medication road this lesson warned about.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'mind-anxiety-depression',
    title: 'Anxiety and Depression: What They Actually Are',
    domain: 'Health & Wellness',
    field: 'Mental Health',
    branch: 'Mood and Anxiety',
    tier: 'intermediate',
    concepts: [
      'Normal emotion versus disorder: where the line sits',
      'Anxiety: an alarm that will not switch off',
      'Depression: an illness, not a mood',
      'What changes in the brain and body',
      'How CBT works: testing thoughts against evidence',
      'Treatment, help-seeking and stigma',
    ],
    words: 1316,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Everyone worries and everyone grieves; that is the machinery working as designed. Mood and anxiety disorders are what happens when the machinery sticks: fear that fires with no threat present, or low mood that stays for weeks and dims everything it touches. They are among the most common health conditions on earth — hundreds of millions of people live with one — and among the most treatable. This lesson explains the mechanisms, what therapy actually does to them, and when and how to seek help. It is education, not diagnosis.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Misunderstanding is the main barrier to care: people fear that anxiety means weakness and depression means ingratitude, so they wait years before telling anyone. Knowing what these conditions actually are — predictable, biological, treatable — is itself protective, and knowing the help-seeking paths saves lives.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The line between emotion and disorder is drawn on duration and impairment, not intensity. Worry before an exam is proportionate and passes; an anxiety disorder is persistent, excessive fear that interferes with living — avoiding the job because the interview is unbearable. Clinicians typically look for depressive symptoms most of the day, nearly every day, for two weeks or more, including low mood or the loss of pleasure in nearly everything. Suffering that loops, spreads and shrinks your world is a health problem, whatever caused it.',
      },
      {
        kind: 'para',
        text: 'Anxiety is the threat system failing to switch off. The brain\'s alarm circuitry, centred on the amygdala, evolved to fire at snakes and strangers; in an anxiety disorder it fires at exams, conversations or nothing identifiable. Panic attacks are the full alarm going off at once — racing heart, breathlessness, a surge of doom. The cruel engine is avoidance: escaping the feared situation brings instant relief, and relief teaches the brain that the fear was right, so it grows. Agoraphobia and social anxiety are built one avoided situation at a time.',
      },
      {
        kind: 'para',
        text: 'Depression is a syndrome, not sadness with the volume up. Alongside low mood or anhedonia — the flatness where pleasure used to be — come changes in sleep, appetite, energy, concentration and self-worth, often with irritability instead of visible sadness, especially in men and teenagers. Its cruelest feature is motivational: the condition attacks exactly the resources — energy, hope, initiative — needed to fight it. Telling a depressed person to try harder is like telling a broken leg to walk.',
      },
      {
        kind: 'para',
        text: 'The biology is real but not the old slogan. The "chemical imbalance" story — too little serotonin, full stop — was always a simplification; modern evidence involves stress-system sensitisation (the cortisol machinery unpacked in the stress lesson), changes in neural plasticity, inherited risk (depression is roughly 35-40 per cent heritable, meaning environment still writes most of it) and life events that recalibrate the system. What matters practically: effective treatments — therapy, medication, exercise — seem to converge on restoring plasticity and circuit recovery, which is why combinations often work better than any single tool.',
      },
      {
        kind: 'para',
        text: 'Cognitive behavioral therapy works like supervised debugging of the alarm and the verdicts. For anxiety, graded exposure: approach the feared thing in small steps, stay, and let the alarm quiet on its own — the single most effective known ingredient. For depression, behavioral activation: schedule small, doable, rewarding actions before motivation returns, because action precedes motivation, not the reverse; rate mood before and after and let the data argue with the hopelessness. The cognitive piece examines automatic thoughts — "I will fail everything" — against actual evidence, like a scientist auditing a claim.',
      },
      {
        kind: 'para',
        text: 'Treatment and help-seeking deserve plain words. A family doctor or campus counsellor is a legitimate first stop; therapy and medication are both evidence-based options, and combining them outperforms either alone for moderate-to-severe depression. Emergency care is warranted immediately when there are thoughts of self-harm or suicide — crisis lines and emergency services exist for exactly that, and using them is good judgment. And stigma is the enemy: these are common, treatable health conditions, and most people who get appropriate care improve. Reaching out is a sign of management, not weakness.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a student has skipped classes for three weeks, sleeps badly, calls themselves a failure and cannot start anything. What would a CBT-informed self-help plan look like for the coming week?',
        'Recall: depression attacks motivation first, so the order is action before motivation; steps must be small enough to be almost trivially achievable; automatic thoughts are tested against evidence rather than obeyed; two weeks without improvement escalates to professional support.',
        'Apply: choose one ten-minute morning anchor — a walk, a shower, one paragraph — and schedule it the night before; rate mood 1-10 before and after; write the automatic thought "I will fail everything" and list the actual evidence for and against it; if mood has not lifted after two weeks, book a doctor or campus counsellor appointment.',
        'State the result: the plan converts a global verdict into testable pieces and small wins, which measurably lift mood for many people — and it carries a built-in escalation rule, so self-help cannot quietly become self-neglect.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Campus counselling services offer structured CBT programmes, often free and often underused.',
          'Primary-care doctors screen for depression at ordinary appointments and can refer or prescribe.',
          'Crisis lines and text services provide trained listeners for moments when waiting feels unsafe.',
          'Workplace assistance programmes offer confidential therapy sessions as a standard benefit.',
          'Peer-support groups cut isolation by pairing people who have been through the same machinery.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Internet checklists cannot diagnose; only a proper assessment can. "Just think positive" misreads the mechanism — motivation is downstream of the illness, not the cure. Assuming medication is either the only option or a lifelong sentence are both wrong: it is one evidence-based tool among several, and decisions belong with a clinician. Alcohol self-medication deepens both conditions. And the deadliest error is waiting for a crisis before asking for help — earlier is easier, and asking is a skill, not a defeat.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'anxiety disorder', def: 'Persistent, excessive fear that impairs daily life, outlasting any real threat.' },
          { term: 'major depression', def: 'A syndrome of low mood or anhedonia with sleep, appetite, energy and self-worth changes.' },
          { term: 'anhedonia', def: 'The loss of ability to feel pleasure in activities that used to matter.' },
          { term: 'panic attack', def: 'A sudden surge of intense fear with strong physical symptoms, peaking within minutes.' },
          { term: 'cognitive behavioral therapy', def: 'A structured therapy testing thoughts against evidence and changing behaviour in steps.' },
          { term: 'behavioral activation', def: 'Scheduling small rewarding actions before motivation returns, action preceding mood.' },
          { term: 'graded exposure', def: 'Approaching feared situations in small steps until the alarm habituates.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The clinical line between ordinary emotion and a disorder is mainly drawn on…',
            options: ['how dramatic the feelings are', 'duration and impairment in daily life', 'whether a cause can be named', 'age at first symptoms'],
            answer: 1,
            explain: 'Disorders are persistent, excessive and impairing — the machinery stuck on, not simply loud.',
          },
          {
            q: 'Avoidance makes anxiety worse because…',
            options: ['it tires the body', 'the relief from escaping reinforces the fear', 'it lowers serotonin directly', 'other people notice'],
            answer: 1,
            explain: 'Escape feels like proof the danger was real — negative reinforcement grows the fear one avoided situation at a time.',
          },
          {
            q: 'Behavioral activation treats low mood by scheduling…',
            options: ['rest until motivation returns', 'small actions first, expecting motivation to follow', 'intense exercise only', 'confrontations with the past'],
            answer: 1,
            explain: 'In depression, action precedes motivation — the doing comes first and the wanting follows.',
          },
          {
            q: 'Someone mentions thoughts of self-harm. The right immediate response is…',
            options: ['wait a week and see', 'seek emergency or crisis-line help right away', 'change the subject', 'recommend a hobby'],
            answer: 1,
            explain: 'Suicidal thoughts are an emergency, not a test of willpower — crisis services exist precisely for this call.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Pairs naturally with the stress-and-cortisol lesson for the alarm-system biology. Then: sleep and mood, exercise as treatment evidence, and how therapy outcomes are measured. This lesson is education, not a diagnosis — assessment and treatment belong with qualified professionals.',
        tone: 'path',
      },
    ],
  },
]

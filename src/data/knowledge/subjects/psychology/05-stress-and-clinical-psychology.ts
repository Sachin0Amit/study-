/**
 * Knowledge Universe — Psychology — Chapter 05: Stress & Clinical Psychology
 * 2 lessons · ~2,651 words
 * field: Psychology
 * legacy sources: social-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Stress and Clinical Psychology]
 *
 * Lessons (snapshot at reorganization):
 *   05.1 psy-stress-coping — Coping with Stress: Appraisal, Strategies and Resilience
 *   05.2 psy-psychological-disorders — Psychological Disorders: Classification and the Major Categories
 */
import type { KnowledgeTopic } from '../../types'

export const psychologyCh05: KnowledgeTopic[] = [
  {
    id: 'psy-stress-coping',
    title: 'Coping with Stress: Appraisal, Strategies and Resilience',
    domain: 'Social Sciences',
    field: 'Psychology',
    branch: 'Stress and Clinical Psychology',
    tier: 'core',
    concepts: [
      'Stress as stimulus, response and process',
      'Primary and secondary appraisal',
      'Eustress versus distress',
      'The general adaptation syndrome: alarm, resistance, exhaustion',
      'Chronic and acute stressors',
      'Problem-focused versus emotion-focused coping',
      'Perceived control, social support and resilience',
    ],
    words: 1340,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Everyone knows stress from the inside — the racing pulse before results, the flat dread of an unfinished task list — but psychology treats it as something that can be defined, measured and managed. This lesson follows that arc: what counts as stress, how the mind appraises a situation before the body ever reacts, why short bursts of stress can help while long ones corrode, and which coping strategies actually change outcomes. It pairs with a sibling lesson on the physiology of the alarm system; here the emphasis is psychological — what people think, choose and do under pressure.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Stress is a hinge between mental life and physical health: the same exam season can sharpen one student and sicken another, and the difference is largely appraisal and coping. Knowing the vocabulary — stressor, appraisal, eustress, adaptation syndrome — turns a vague complaint into something analysable, and analysable problems are the ones people can actually act on.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Psychologists use the word stress in three registers. As a stimulus, stress is the demanding event itself — the stressor. As a response, it is the body and mind\'s reaction — arousal, worry, a knotted stomach. As a process, it is the ongoing transaction between person and environment, and this process view is the most useful: what matters is not the event alone but how the person reads it. Richard Lazarus called that reading appraisal. Primary appraisal asks whether the situation is irrelevant, benign or threatening; secondary appraisal asks what resources I have for meeting it. A storm warning is a nuisance to a sailor with a safe harbour and a catastrophe to one without — same stimulus, different appraisal, different stress.',
      },
      {
        kind: 'para',
        text: 'Appraisal also explains the counterintuitive finding that stress is not always harmful. Challenges that stretch us but sit within reach produce eustress — the focused energy of a competition, a first day in a new job. When demands overwhelm resources, the same arousal becomes distress, and its effects turn corrosive. The dose and the appraisal decide which one you get, which is why resilience training aims not at removing stressors but at rebuilding appraisals and resources.',
      },
      {
        kind: 'para',
        text: 'Hans Selye mapped the body\'s side of the process as the general adaptation syndrome, a three-stage pattern. In the alarm stage the sympathetic nervous system and the hormonal axis fire together: heart rate climbs, glucose mobilises, attention narrows. In the resistance stage the body adapts and seems to cope, but it is running hot — arousal stays above baseline and reserves drain. Prolonged demand drags the system into exhaustion, where tissue damage, weakened immunity and burnout appear. The stages explain a clinical observation students meet again in the physiology lesson: chronic stress is not one long alarm but a different, quieter and more damaging regime.',
      },
      {
        kind: 'para',
        text: 'Stressors come in shapes that matter for coping. Acute stressors are brief, focal events — a collision, a viva, a bolt of lightning — and their effects usually fade once the event ends. Chronic stressors persist: a long illness in the family, sustained unemployment, a hostile workplace, discrimination endured daily. Between them sit major life changes and the small repeated frictions researchers call daily hassles, which accumulate with surprising weight. Cataclysmic events that touch whole communities — floods, wars, epidemics — add a layer where everyone\'s resources are depleted at once.',
      },
      {
        kind: 'para',
        text: 'Coping is the umbrella term for the mental and behavioural efforts people use to manage stress — its causes and its feelings. Two broad families dominate the research. Problem-focused coping attacks the stressor itself: gathering information, making a plan, practising, negotiating, time-blocking. Emotion-focused coping regulates the feeling instead: reappraisal, acceptance, distraction, seeking comfort, sometimes avoidance. Neither is superior in the abstract; problem-focused strategies pay off when the situation is controllable, emotion-focused ones when it is not. Skilled copers diagnose controllability first, then pick the tool.',
      },
      {
        kind: 'para',
        text: 'Around that core, three moderators decide how much stress lands. Perceived control is the strongest: people who believe their actions matter show smaller reactions and recover faster, even when objective control is unchanged. Social support buffers like shock absorbers — confidants provide information, perspective and practical help, and loneliness removes the cushion. And a toolkit of reliable regulators — regular aerobic exercise, relaxation training, meditation and good sleep — lowers the resting level from which every stressor strikes. Resilience, the capacity to bend and recover, is best understood not as a trait some are born with but as the joint product of these moderators, trainable over a lifetime.',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Stressor', def: 'The event or condition that makes demands on a person — acute (brief, focal) or chronic (persisting for months).' },
          { term: 'Primary appraisal', def: 'Lazarus\'s first reading of an event: irrelevant, benign-positive, or threatening.' },
          { term: 'Secondary appraisal', def: 'The assessment of one\'s resources and options for meeting the demand.' },
          { term: 'Eustress', def: 'Positive, motivating stress produced by challenge within reach — the opposite pole from distress.' },
          { term: 'General adaptation syndrome', def: 'Selye\'s three-stage bodily response: alarm, resistance, exhaustion.' },
          { term: 'Problem-focused coping', def: 'Efforts directed at changing the stressor itself — planning, information-gathering, practice.' },
          { term: 'Emotion-focused coping', def: 'Efforts directed at regulating the feelings the stressor produces — reappraisal, acceptance, support-seeking.' },
        ],
      },
      {
        kind: 'example',
        title: 'Reading a stressful week like a psychologist',
        steps: [
          'Situation: board results arrive in nine days; a grandmother is hospitalised in the same week.',
          'Classify the stressors: the results deadline is a chronic, anticipatory stressor; the hospitalisation is an acute shock with a chronic tail.',
          'Apply the appraisals: primary — both events threaten goals that matter; secondary — study time is squeezed but a sibling can share hospital shifts, so resources are partly adequate.',
          'Choose the tools: problem-focused for the controllable part — a revised revision timetable, past-paper drills; emotion-focused for the uncontrollable part — daily check-in calls, brief breathing practice before sleep.',
          'Check the moderators: perceived control restored by the plan, social support mobilised by the shared rota — the week stays at eustress instead of sliding into exhaustion.',
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Two students face the same difficult paper. One treats it as a challenge she can prepare for; the other as proof he will fail. The difference in their stress levels is best explained by…',
            options: ['different doses of the stress hormone', 'different appraisals of the same stimulus', 'different general adaptation syndromes', 'different daily hassles'],
            answer: 1,
            explain: 'The transactional view: primary and secondary appraisal turn one stimulus into different stress processes. Biology differs downstream of the appraisal, not instead of it.',
          },
          {
            q: 'A caretaker has spent months looking after a relative with dementia and now falls ill easily and feels drained. In the general adaptation syndrome this is the…',
            options: ['alarm stage', 'resistance stage', 'exhaustion stage', 'eustress stage'],
            answer: 2,
            explain: 'Months of sustained demand with drained reserves and falling immunity mark the exhaustion stage — the cost of resistance that never ends.',
          },
          {
            q: 'Your exam date cannot be moved, but your preparation can. Which coping family fits best first?',
            options: ['emotion-focused coping', 'problem-focused coping', 'avoidance coping', 'defense mechanisms'],
            answer: 1,
            explain: 'Problem-focused coping wins when the stressor is controllable. Here the schedule, the practice and the plan are all controllable; feelings-regulation alone would leave the demand intact.',
          },
          {
            q: 'Which factor most reliably shrinks the impact of a chronic stressor, according to stress research?',
            options: ['removing every stressor from life', 'perceived control and social support', 'switching to pure emotion-focused coping', 'raising arousal to alarm level'],
            answer: 1,
            explain: 'Control beliefs and support networks are the two strongest buffers; removing all stressors is impossible, and heightened arousal is the problem, not the cure.',
          },
        ],
      },
      {
        kind: 'para',
        text: 'The examinable core is small and worth memorising: stress is a transaction; appraisal decides its size; the adaptation syndrome describes its bodily arc; stressors divide into acute and chronic; and coping divides by target — problem or feeling. Everything else, from exercise to social support, is a lever on those five ideas.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read the sibling lesson on stress physiology for the hormonal machinery beneath this psychology, and the anxiety-and-depression lesson for what happens when coping fails and states become disorders. The lifespan-development lesson shows how appraisal capacity itself matures from childhood to old age. Standard readings: OpenStax Psychology 2e, chapter 14 "Stress, Lifestyle, and Health" (sections 14.1-14.4) and the NCERT Class 12 Psychology chapter "Meeting Life Challenges".',
        tone: 'path',
      },
    ],
  },
  {
    id: 'psy-psychological-disorders',
    title: 'Psychological Disorders: Classification and the Major Categories',
    domain: 'Social Sciences',
    field: 'Psychology',
    branch: 'Stress and Clinical Psychology',
    tier: 'core',
    concepts: [
      'Psychological disorder: dysfunctional thoughts, feelings and behaviour',
      'The four Ds: deviance, distress, dysfunction, danger',
      'DSM classification and diagnosis',
      'Supernatural, biological and diathesis-stress perspectives',
      'Anxiety, obsessive-compulsive and trauma-related disorders',
      'Schizophrenia: positive and negative symptoms',
      'Dissociative, personality and childhood disorders',
    ],
    words: 1311,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Where does unusual end and disordered begin? Every culture marks some behaviour as beyond the ordinary; clinical psychology draws the line with explicit criteria rather than instinct. This lesson builds the diagnostic map: how psychological disorders are defined, why a shared classification manual exists, which theories explain how disorders arise, and a guided tour of the major categories. Anxiety and depression — the two most common families — get their own full lesson in the health library; here they appear as stations on the map, while the deeper treatment goes to the categories a general reader knows least well.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Diagnostic language is load-bearing: it lets a teacher, a clinician and a researcher mean the same thing by one word, and it routes people to effective treatment. It is also easily misused as an insult. Knowing what the categories do and do not claim — description first, cause later, never a verdict on a person\'s worth — is the difference between using the map and being used by it.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A psychological disorder is a condition marked by abnormal thoughts, feelings and behaviours — but abnormal needs anchors. Clinicians use four overlapping tests, the four Ds. Deviance: the pattern is rare or violates norms. Distress: it hurts the person. Dysfunction: it interferes with daily roles — study, work, relationships. Danger: it risks harm to self or others. No single D is sufficient — genius is deviant but healthy, grief is distressing but normal — and the line is crossed when the pattern is persistently maladaptive: a biological or psychological function is not doing what it was designed to do. Culture and context set the threshold, which is why handbooks require clinicians to judge impairment within the person\'s own setting.',
      },
      {
        kind: 'para',
        text: 'Classification exists because description must come before treatment. The dominant manual, the Diagnostic and Statistical Manual now in its fifth edition, specifies symptom clusters, durations and exclusions for each category — a diagnosis of a specific phobia, for instance, needs marked fear, immediate anxiety on exposure, avoidance or endurance with distress, and six months of persistence. The system is descriptive, not explanatory: it says what co-occurs, not why. Critics answer that categories can reify human variation and inflate diagnosis; defenders answer that reliable labels are what make research, insurance and treatment planning possible. Both are right, which is why the manual keeps revising.',
      },
      {
        kind: 'para',
        text: 'Explanations have a history with three acts. Supernatural theories read disorder as possession or sin — the model behind asylums and exorcism, and largely retired. Biological theories, rebuilt after the discovery that general paresis had a syphilitic cause, look to genes, neurotransmitters and brain structure, and drive the medical treatments a later lesson covers. The current synthesis is the diathesis-stress model: a vulnerability (diathesis) — partly genetic, partly early experience — combines with life stress to produce disorder. The model explains the family patterns that frighten people and the fact that most relatives of people with schizophrenia never develop it: a diathesis is a loaded dice cup, not a sentence.',
      },
      {
        kind: 'para',
        text: 'The anxiety family gathers disorders in which fear fires without proportionate threat: generalised anxiety (free-floating worry most days for months), panic disorder (surges of terror with bodily alarms), and specific and social phobias (fear pinned to objects or scrutiny). Obsessive-compulsive and related disorders add intrusive thoughts (obsessions) and ritualised actions (compulsions) that briefly quiet them. Trauma-related disorders, post-traumatic stress disorder first among them, follow exposure to events that threaten life or safety: re-experiencing through flashbacks and nightmares, avoidance of reminders, hypervigilance and emotional numbing lasting beyond a month.',
      },
      {
        kind: 'para',
        text: 'Schizophrenia is the psychotic family\'s centre: a loss of contact with reality lasting at least six months. Positive symptoms — things added to experience — include hallucinations, most often auditory voices, and delusions, fixed false beliefs such as persecution or grandeur; disorganised speech and behaviour join them. Negative symptoms — things subtracted — include flat affect, avolition and social withdrawal, and they respond less well to the dopamine-blocking drugs that quiet the positive ones. Genetics, prenatal complications and stress interact under the diathesis-stress umbrella, and outcome improves sharply with early, sustained treatment.',
      },
      {
        kind: 'para',
        text: 'The remaining map is broad. Dissociative disorders split consciousness: dissociative amnesia, sometimes with wandering (fugue), and the contested identity disorder in which more than one self-state takes turns. Personality disorders are enduring, inflexible styles that impair functioning — clustered as odd-eccentric (paranoid, schizoid, schizotypal), dramatic-emotional (antisocial, borderline, histrionic, narcissistic) and anxious-fearful (avoidant, dependent, obsessive-compulsive). Childhood disorders include attention-deficit/hyperactivity disorder — inattention plus impulsivity or hyperactivity across settings — and autism spectrum condition, marked by differences in social communication and restricted, repetitive interests. Each category, like every other, is a description of a pattern, not a name for a person.',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Four Ds', def: 'Deviance, distress, dysfunction, danger — the overlapping tests used to flag a disorder.' },
          { term: 'DSM', def: 'The Diagnostic and Statistical Manual of Mental Disorders — the descriptive classification standard for diagnosis.' },
          { term: 'Diathesis-stress model', def: 'Disorder results from a predisposition interacting with environmental stress; neither alone is sufficient.' },
          { term: 'Delusion', def: 'A fixed false belief held against evidence — persecution and grandeur are classic contents.' },
          { term: 'Hallucination', def: 'A perception without stimulus; hearing voices is the most common form in schizophrenia.' },
          { term: 'Comorbidity', def: 'Two or more disorders present in the same person at once — common, and expected from shared vulnerabilities.' },
          { term: 'Personality disorder', def: 'An enduring, inflexible inner style and behaviour pattern that deviates from culture and impairs functioning.' },
        ],
      },
      {
        kind: 'example',
        title: 'Applying the four Ds to a case',
        steps: [
          'Case: a student washes his hands forty times a day, is late to class, and calls the rituals exhausting but "impossible to stop".',
          'Deviance: the frequency and rigidity are far outside the peer norm.',
          'Distress: he reports the rituals as exhausting and humiliating.',
          'Dysfunction: hours are lost daily; classes and friendships are slipping.',
          'Danger: skin damage adds physical risk. Verdict: all four Ds are present and persistent — the pattern warrants clinical assessment for obsessive-compulsive disorder rather than a casual label.',
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A woman grieves intensely for two weeks after a bereavement but keeps working and eating. Why is this NOT a disorder?',
            options: ['grief never counts as disorder', 'no persistent dysfunction and the response fits the context', 'distress is absent', 'the four Ds require danger'],
            answer: 1,
            explain: 'The four Ds work together: distressing but proportionate, time-limited responses that leave daily roles intact fall within normal range. Persistence and maladaptiveness are what tip the line.',
          },
          {
            q: 'Hearing voices that are not there and holding a fixed belief of persecution are, in order…',
            options: ['a delusion and a hallucination', 'a hallucination and a delusion', 'both hallucinations', 'both negative symptoms'],
            answer: 1,
            explain: 'Hallucination is false perception (voices); delusion is false belief (persecution). Both are positive symptoms of schizophrenia.',
          },
          {
            q: 'A person inherits heightened vulnerability to a condition but never develops it despite stresses. Which model predicts this?',
            options: ['supernatural model', 'pure biological determinism', 'diathesis-stress model', 'asylum model'],
            answer: 2,
            explain: 'Diathesis-stress requires vulnerability AND stress to interact; a diathesis without sufficient stress, or with good coping buffers, need never become disorder.',
          },
          {
            q: 'Flat affect, social withdrawal and loss of motivation in schizophrenia are classified as…',
            options: ['positive symptoms', 'negative symptoms', 'obsessions', 'dissociative symptoms'],
            answer: 1,
            explain: 'Negative symptoms are subtractions from normal functioning. Hallucinations and delusions — additions — are the positive symptoms, and they respond better to dopamine-blocking drugs.',
          },
        ],
      },
      {
        kind: 'para',
        text: 'Hold the map in three layers: the definition (four Ds plus persistence in context), the classifier (a descriptive manual), and the explanation (diathesis meeting stress). The categories hang off those layers — anxiety-family, trauma, psychosis, dissociative, personality, developmental — and the honest reader remembers that each describes a pattern to treat, never a person to dismiss.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The anxiety-and-depression lesson covers the two most common families in depth, including how cognitive-behavioural therapy works; the stress-and-coping lesson explains the pressures that feed the diathesis. For treatment itself, follow the therapy reading noted there. Standard readings: OpenStax Psychology 2e, chapter 15 "Psychological Disorders" (sections 15.1-15.3, 15.5, 15.8-15.11) and the NCERT Class 12 Psychology chapter "Psychological Disorders".',
        tone: 'path',
      },
    ],
  },
]

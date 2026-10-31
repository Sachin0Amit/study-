/**
 * Knowledge Universe — Mental Health — Chapter 02: Mind & Therapy
 * 2 lessons · ~2,988 words
 * field: Mental Health
 * legacy sources: health-wellness.ts, x44-health-mind-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Mind & Therapy]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 mind-addiction-reward-cycle — Addiction: The Reward Cycle and the Way Out
 *   02.2 health-psychotherapy-approaches — How Psychotherapy Works: The Major Approaches
 */
import type { KnowledgeTopic } from '../../types'

export const mentalHealthCh02: KnowledgeTopic[] = [
  {
    id: 'mind-addiction-reward-cycle',
    title: 'Addiction: The Reward Cycle and the Way Out',
    domain: 'Health & Wellness',
    field: 'Mental Health',
    branch: 'Mind & Therapy',
    tier: 'intermediate',
    concepts: [
      'The mesolimbic dopamine pathway: VTA to nucleus accumbens',
      'Why drugs outshout natural rewards',
      'The three-stage cycle: binge, withdrawal, preoccupation',
      'Tolerance, dependence and the allostasis spiral',
      'Relapse rates comparable to other chronic diseases',
      'What treatment evidence supports: medications plus behavioral care',
    ],
    words: 1561,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Addiction is the brain\'s learning system working perfectly on the wrong lesson. The circuits that were built to make food, water, friendship and achievement feel worth pursuing can be commandeered by chemicals and behaviors that press the reward button harder and faster than anything evolution prepared for. The result, in the words of the US National Institute on Drug Abuse, is a chronic, treatable disorder — not a character verdict, and not a simple choice. People continue using despite obvious harm not because they enjoy it in any simple sense, but because the machinery of wanting, learning and expectation has been reshaped around the drug.',
      },
      {
        kind: 'para',
        text: 'This lesson follows that reshaping in three passes. First the hijack: the reward circuitry, what drugs do to it, and why the surge they produce cannot be matched by dinner or applause. Then the cycle: the three-stage loop — binge and intoxication, withdrawal and negative mood, craving and preoccupation — that turns occasional use into a self-feeding spiral. Finally the way out: what decades of treatment research actually support, and why relapse is a prediction of the disease model rather than a scandal of willpower. The therapy schools behind the behavioral treatments are mapped in How Psychotherapy Works: The Major Approaches; here we stay on addiction-specific ground.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The National Institute on Drug Abuse estimates that relapse rates for substance use disorders run around forty to sixty percent — the same range as type 2 diabetes, hypertension and asthma. Nobody reads a diabetic\'s second admission as proof that diabetes is a myth or a choice, and the same standard applies here. The framing is not charity: it is the model under which the effective treatments — medications, behavioral therapies, long-term management — actually make sense.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Reward Circuit and the Hijack' },
      {
        kind: 'para',
        text: 'The core of the system is small and ancient: a bundle of neurons in the ventral tegmental area of the midbrain that projects dopamine to the nucleus accumbens, the hippocampus and the prefrontal cortex — the mesolimbic pathway. For decades dopamine was popularly called the pleasure chemical; the correction matters. Dopamine is better described as teaching want: it fires strongest not at the reward itself but at the prediction of reward, and hardest of all when the reward beats the prediction — the reward prediction error that makes an unexpected win unforgettable. It is the chemistry of this is worth doing again, stamping in the sequences of behavior that led to the payoff.',
      },
      {
        kind: 'para',
        text: 'Drugs of abuse win because they cheat the timing and the magnitude. Where a meal releases dopamine in modest, delayed amounts, stimulants and opioids deliver surges that the National Institute on Drug Abuse summarizes as two to ten times the amplitude of natural rewards, arriving in seconds. The learning system, evolved for the modest payoffs of real life, records an error of prediction so vast that ordinary rewards are repriced as worthless by comparison — the clinical term is incentive salience gone wrong, and users describe it exactly that way: nothing else feels worth doing. Repeated surges trigger the counter-adaptations of tolerance: receptors downregulate, signaling dulls, and the same dose delivers less. Dependence follows as the brain recalibrates around the drug\'s presence, so that its absence produces the storm of withdrawal rather than plain neutrality.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Map an intervention onto the cycle: a person with alcohol use disorder gets a prescription for naltrexone plus weekly cognitive behavioral therapy. Where does each piece bite?',
          'Naltrexone works at the binge stage: it blocks opioid receptors that mediate alcohol\'s rewarding release, blunting the surge so drinking a little pays less — and paying less weakens the learning that keeps the loop alive.',
          'Cognitive behavioral therapy works at the preoccupation stage: it trains recognition of personal high-risk cues — paydays, arguments, the route home past the bar — and rehearses alternative responses before craving fires.',
          'Withdrawal and negative affect are managed medically where needed and by scheduling: sleep, food, activity and connection blunt the low mood that pulls use back.',
          'Relapse planning is part of treatment, not its failure: the plan names early warning signs, sets a rapid re-contact route, and treats a slip as data for the next iteration of the plan.',
        ],
      },
      { kind: 'heading', text: 'The Three-Stage Cycle' },
      {
        kind: 'para',
        text: 'Researchers describe addiction as a loop with three repeating stages. Binge and intoxication: the drug is taken, the surge lands, and habit sequences stamp in. Withdrawal and negative affect: as the drug clears, the brain\'s recalibrated reward system underperforms while stress systems overshoot — dysphoria, anxiety, irritability, anhedonia — and use resumes less for pleasure than for relief. Preoccupation and anticipation: in the hours and days before the next use, craving builds, triggered by cues, stress and small doses alike, while the prefrontal systems that weigh consequences run weakest. The stages feed each other in a spiral: each pass, the reward available from the drug declines as the anti-reward pressure rises, a drift researchers call allostasis — the set point moving to defend a new, worse equilibrium.',
      },
      {
        kind: 'para',
        text: 'This architecture explains clinical observations that moral models cannot. Why use continues after pleasure fades: stage two is driven by relief, not reward. Why long-abstinent users relapse on a cue years later: cue-triggered craving lives in circuits that extinguish slowly and never fully. Why adolescents are disproportionately vulnerable: the reward circuitry matures years before the prefrontal control circuitry, so the accelerator arrives before the brakes. And why stress is the classic relapse trigger: it feeds precisely the stage-two dysphoria the drug has learned to relieve.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'mesolimbic pathway', def: 'The dopamine projection from the ventral tegmental area to the nucleus accumbens and cortex — the core of reward learning.' },
          { term: 'reward prediction error', def: 'The difference between the dopamine fired for an expected and an actual reward; unexpectedly large payoffs drive the strongest learning.' },
          { term: 'tolerance', def: 'The brain\'s counter-adaptation to repeated drug exposure, so the same dose produces less effect.' },
          { term: 'dependence', def: 'The recalibrated state in which the absence of the substance produces withdrawal — physical or psychological — rather than neutrality.' },
          { term: 'craving', def: 'The cue- and stress-triggered urge of the preoccupation stage, mediated by circuits that extinguish slowly.' },
          { term: 'contingency management', def: 'A behavioral treatment that pays tangible, immediate rewards for verified abstinence — one of the best-evidenced tools in the field.' },
        ],
      },
      { kind: 'heading', text: 'What Treatment Evidence Says' },
      {
        kind: 'para',
        text: 'The management model that fits the evidence is chronic-disease care: assessment, a menu of effective options matched to the person, medication where one exists, behavioral treatment alongside, and monitoring over years. Medications with solid evidence include nicotine replacement, bupropion and varenicline for tobacco; methadone and buprenorphine, which stabilize opioid receptor dynamics and cut mortality, and naltrexone, which blocks opioid reward, for opioid use disorder; and naltrexone, acamprosate and disulfiram for alcohol. For stimulants there is no approved medication, which raises the value of behavioral tools — contingency management has the strongest trial record, followed by cognitive behavioral therapy and motivational interviewing. Mutual-aid groups help many people sustain recovery, and they work best as companions to clinical care rather than substitutes for it.',
      },
      {
        kind: 'para',
        text: 'Language is part of the treatment environment. The field\'s own guidance — the National Institute on Drug Abuse among its sources — asks for person-first phrasing: a person with a substance use disorder, not an addict; testing dirty retired in favor of testing positive. The reason is not politeness but mechanism: stigma measurably delays help-seeking, and the earlier treatment starts, the better it works. Recovery is common in the population — most people who meet criteria for a substance use disorder at some point eventually reach sustained remission — and the practical takeaway matches the disease model: expect course management rather than a one-time cure, and treat every return of use as a signal to adjust the plan, not a verdict on the person.',
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Dopamine in the mesolimbic pathway is best described as signaling…',
            options: ['pleasure itself', 'reward prediction and worth-doing-again learning', 'pain suppression', 'muscle coordination during drug use'],
            answer: 1,
            explain: 'Dopamine fires strongest at predicted and better-than-expected rewards — it is the teaching signal of wanting, not the sensation of liking.',
          },
          {
            q: 'The withdrawal-and-negative-affect stage is best characterized by…',
            options: ['an even stronger drug high', 'dysphoria and stress-system overshoot that drive use for relief', 'improved executive function', 'permanent loss of craving'],
            answer: 1,
            explain: 'Counter-adaptation leaves reward dulled and stress systems overactive — the drug resumes less for pleasure than to turn the storm down.',
          },
          {
            q: 'Naltrexone helps alcohol and opioid use disorder mainly by…',
            options: ['speeding up tolerance', 'blocking reward signaling so use pays less', 'replacing the drug safely', 'curing withdrawal instantly'],
            answer: 1,
            explain: 'As an opioid receptor antagonist it blunts the reward surge at the binge stage, weakening the learning that maintains the loop.',
          },
          {
            q: 'Why is relapse not counted as treatment failure?',
            options: ['because relapse is impossible with good treatment', 'because its population rate resembles other chronic diseases, making course management the right model', 'because relapse only happens to people who stop treatment', 'because addiction is considered untreatable'],
            answer: 1,
            explain: 'At roughly forty to sixty percent, relapse rates match diabetes and hypertension — diseases managed, not cured, with treatment adjusted after each flare.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read How Psychotherapy Works: The Major Approaches for the school-by-school map behind the behavioral treatments named here, and Trauma and PTSD to see why self-medication with sedatives so often entangles untreated trauma. Stress, Cortisol and the Body\'s Alarm System supplies the stress physiology feeding stage two, and Pharmacology: How Medicines Work explains the receptor logic behind methadone, buprenorphine and naltrexone.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'health-psychotherapy-approaches',
    title: 'How Psychotherapy Works: The Major Approaches',
    domain: 'Health & Wellness',
    field: 'Mental Health',
    branch: 'Mind & Therapy',
    tier: 'intermediate',
    concepts: [
      'Modern therapy: structured, measured, collaborative',
      'Cognitive behavioral therapy deepened',
      'Exposure therapy as new learning, not bravery',
      'Psychodynamic therapy: patterns from the past',
      'Person-centered therapy: the Rogers conditions',
      'Third wave: ACT, DBT and mindfulness-based care',
      'Common factors: why the alliance predicts outcome',
    ],
    words: 1427,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'The anxiety-and-depression lesson introduced cognitive behavioral therapy\'s core moves — graded exposure, behavioral activation, testing thoughts against evidence. This Mental Health topic zooms out to the whole landscape: the major schools of psychotherapy, what each assumes about people, and the surprising research on what they share. A hundred brand names reduce to a handful of engines, and knowing them turns "maybe I should talk to someone" into an informed choice about which conversation, with whom, for how long.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Roughly a quarter of adults meet criteria for a mental disorder in a given year, and talk therapy stands among medicine\'s most effective treatments — comparable to medication for many conditions, with lower relapse after it ends. Yet most people could not name two schools of therapy or say what actually happens session to session. Informed clients get better care: they can match method to problem and ask for progress to be measured.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Forget the couch stereotype. Modern therapy is a structured collaboration: typically fifty-minute weekly sessions, a jointly agreed formulation of the problem, goals with progress tracked on standard scales, and — in most approaches — homework between sessions, because a hour a week cannot outvote the other 167. None of it is advice-giving or passive venting; it is supervised practice at thinking, feeling and behaving differently, and the evidence standards are the same as any other medicine: randomized trials, published outcomes, measured doses.',
      },
      {
        kind: 'para',
        text: 'Cognitive behavioral therapy remains the most widely tested school. Its model is a triangle: thoughts, feelings and behaviors interact, so changing any corner moves the others. The cognitive arm catches automatic thoughts — "I\'ll fail everything" — and treats them as hypotheses to test against evidence, not facts to obey; the behavioral arm runs experiments: schedule the activity mood insists is pointless, then let the data argue. It is deliberately time-limited, often twelve to twenty sessions, and it teaches a method the client keeps — which is why relapse after CBT runs lower than after medication alone.',
      },
      {
        kind: 'para',
        text: 'Exposure therapy, CBT\'s most powerful single ingredient for anxiety, deserves its own paragraph because its logic is misunderstood. The modern reading is inhibitory learning: the fear memory is activated, the expected catastrophe fails to arrive, and a competing safety memory is written alongside the fear — so the goal is not white-knuckle bravery but staying long enough for the alarm to quiet and the new learning to consolidate. That is why escape halves the benefit and why therapists now deliberately vary contexts. For obsessive-compulsive disorder the variant is exposure and response prevention: trigger the obsession, refuse the ritual, and let the anxiety decay on its own.',
      },
      {
        kind: 'para',
        text: 'Psychodynamic therapy — the modern descendant of Freud — targets patterns rather than symptoms: ways of relating, defending and feeling that were learned early and now replay unnoticed, including toward the therapist (transference), where they can be observed live. Where CBT asks "what is the thought," psychodynamic asks "what is the pattern, and where did it start." The stereotype of years of aimless analysis is outdated: short-term formats run to sixteen or thirty sessions, and trials show respectable effects for depression, anxiety and relational difficulties that hold after treatment ends.',
      },
      {
        kind: 'para',
        text: 'Person-centered therapy, built by Carl Rogers in the 1950s, made a radical bet: given the right conditions, people direct their own growth. The therapist\'s job is to supply those conditions — accurate empathy, unconditional positive regard, and genuineness — and then stay out of the way. As a standalone treatment it has a thinner evidence base than its descendants, but its DNA is everywhere: the non-judgmental stance, the reflective listening, the alliance itself. Half of what every modern therapist does well, Rogers invented.',
      },
      {
        kind: 'para',
        text: 'The third wave adapts mindfulness rather than arguing with thoughts. Acceptance and commitment therapy teaches clients to notice thoughts without obeying them — defusion — while committing action to chosen values; dialectical behavior therapy, designed for self-harm and borderline personality disorder, bundles distress tolerance, emotion regulation and interpersonal effectiveness skills, and is the standard of care there; mindfulness-based cognitive therapy roughly halves relapse in people with three or more depressive episodes. The shared move: change the relationship to inner experience, not just its content.',
      },
      {
        kind: 'para',
        text: 'So which therapy wins? Decades of comparative trials produced the famous "Dodo bird verdict" — everybody has won, and all must have prizes — with an asterisk: specific methods do beat generic support for specific problems (exposure for anxiety disorders, response prevention for OCD, DBT for self-harm), and the most robust predictor of outcome across all schools is the therapeutic alliance: the bond plus agreement on goals and tasks. For moderate-to-severe depression, combining therapy with medication outperforms either alone. Choice, then, is a two-step match: method to problem, then person to person.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Number needed to treat',
        latex: 'NNT = \\frac{1}{ARR} = \\frac{1}{C_{control} - C_{treated}}',
        meaning: 'How many patients must receive a treatment for one extra good outcome; the inverse of the absolute risk reduction between a control and treated group.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: in a trial, 50 percent of patients receiving CBT for depression respond, versus 28 percent on a waiting list. How effective is that in NNT terms?',
          'Recall the governing idea: the absolute risk reduction is the difference in response rates, and NNT is its reciprocal.',
          'Apply: ARR = 50 − 28 = 22 percentage points, so NNT = 1/0.22 ≈ 4.5 — call it five patients.',
          'State the result: for roughly every five patients treated, one additional person recovers who otherwise would not have — comparable to much of general medicine, and better than it first sounds, since the "side effects" are skills the other four keep too.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'National stepped-care programs deliver guided CBT at scale, with session-by-session outcome measurement now routine.',
          'Digital and blended programs extend evidence-based CBT to people waitlisted, rural, or reluctant to attend in person.',
          'Measurement-based care — brief questionnaires each session — flags stuck cases early enough to adjust.',
          'Schools and workplaces teach third-wave skills outright: mindfulness curricula and stress-inoculation programs.',
          'Trauma services pair exposure-based therapies with phased safety planning for complex presentations.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Brand loyalty is the first trap: choosing a therapy by school rather than by problem-method match. The second is expecting insight alone to do the work — understanding why you are anxious changes little without behavioral practice, which is why homework exists. Endless unstructured therapy without goals or review is a third; progress should be measurable. And the gravest: treating self-help as a substitute for care when symptoms are severe — books and apps are supplements, not treatment for an illness that impairs daily life.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Therapeutic alliance', def: 'The bond plus agreement on goals and tasks; the most robust predictor of therapy outcome.' },
          { term: 'Cognitive restructuring', def: 'Treating automatic thoughts as hypotheses and testing them against evidence.' },
          { term: 'Exposure and response prevention', def: 'Facing triggers while refusing rituals, letting anxiety decay and new learning consolidate.' },
          { term: 'Psychodynamic therapy', def: 'Treatment of unconscious relational patterns, including their live appearance toward the therapist.' },
          { term: 'Person-centered therapy', def: 'Rogers\' growth-oriented approach built on empathy, regard and genuineness.' },
          { term: 'Acceptance and commitment therapy', def: 'A third-wave method of defusing from thoughts and acting on values.' },
          { term: 'Number needed to treat', def: 'Patients treated per one additional good outcome; the inverse of absolute risk reduction.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Across therapy schools, the most robust predictor of a good outcome is:',
            options: ['the therapist\'s years of experience alone', 'the strength of the therapeutic alliance', 'the length of treatment', 'the brand of therapy'],
            answer: 1,
            explain: 'Bond plus agreement on goals and tasks predicts outcomes across CBT, psychodynamic and other approaches.',
          },
          {
            q: 'In the modern reading, exposure therapy works mainly by:',
            options: ['proving the patient is brave', 'writing a competing safety memory alongside the fear', 'exhausting the nervous system', 'removing the trigger from life'],
            answer: 1,
            explain: 'Activating the fear while the catastrophe fails to arrive creates inhibitory learning — a new memory, not a deleted one.',
          },
          {
            q: 'A trial shows response rates of 50 percent with therapy versus 30 percent without. The NNT is about:',
            options: ['2', '5', '10', '20'],
            answer: 1,
            explain: 'ARR = 20 percentage points, and 1/0.20 = 5 patients per additional responder.',
          },
          {
            q: 'Which therapy is the established standard for self-harm and borderline personality disorder?',
            options: ['Person-centered therapy', 'Dialectical behavior therapy', 'Classical psychoanalysis', 'Bibliotherapy'],
            answer: 1,
            explain: 'DBT\'s skills modules — distress tolerance, emotion regulation, interpersonal effectiveness — were built for exactly these presentations.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read after the anxiety-and-depression lesson, which covers the conditions this topic treats. Natural next steps: how therapy outcomes are measured, the pharmacology lesson for the medication side of combination treatment, and the stress lesson for the biology both approaches must respect. Educational — therapy choices belong with a qualified professional.',
        tone: 'path',
      },
    ],
  },
]

/**
 * Knowledge Universe — Public Health — Chapter 02: Immunization & Health Behavior
 * 2 lessons · ~2,939 words
 * field: Public Health
 * legacy sources: health-wellness.ts, x23-japan-gap-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Immunization Science, Health Behavior]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 health-behavior-medical-care — Health Behavior and Medical Care: Models of Change and the Context of Care
 *   02.2 health-vaccines-how-work — How Vaccines Train the Immune System
 */
import type { KnowledgeTopic } from '../../types'

export const publicHealthCh02: KnowledgeTopic[] = [
  {
    id: 'health-behavior-medical-care',
    title: 'Health Behavior and Medical Care: Models of Change and the Context of Care',
    domain: 'Health & Wellness',
    field: 'Public Health',
    branch: 'Health Behavior',
    tier: 'core',
    concepts: [
      'Health behavior and its preventable burden',
      'Health Belief Model: six constructs',
      'Transtheoretical stages of change',
      'Theory of planned behavior and self-efficacy',
      'Doctor–patient interaction and adherence',
      'Access, disparities and social determinants',
    ],
    words: 1899,
    readMins: 9,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'The biggest killers are, increasingly, behaviours: smoking, diet, inactivity, alcohol — risks people choose, repeat and can change. That is why the science of health behavior exists: a body of models that predicts when people adopt protective actions (screening, vaccination, exercise, cessation) and designs interventions that actually move them. It pairs with the study of medical care itself — what happens in the consultation, why patients so often do not take the treatment they agreed to, and why access and outcomes differ so sharply across income, race and geography. This lesson covers both halves: the models that explain health behaviour change, and the care context in which advice is given, followed or ignored. The stress-and-coping lesson covers the physiology of pressure; here the subject is behaviour and the system around it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every professional that touches health — clinicians, public-health planners, insurers, policymakers — works through these models, and exams test them as named constructs: the six Health Belief Model dimensions, the six stages of change, the planned-behaviour trio of attitudes, norms and control. The skill being tested is diagnostic: given a scenario (“he thinks screening is unnecessary because he feels fine”), name the construct (low perceived susceptibility) and the intervention lever (risk communication). Scenario-to-construct-to-leverage is the whole game, and it is learnable.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Health behavior', def: 'Any action a person takes that affects health — preventive (screening, vaccination, exercise), risky (smoking, drinking) or sick-role (seeking care, taking medicine). Studied as decision-making under imperfect information, habit and social influence.' },
          { term: 'Perceived susceptibility and severity', def: 'The two threat components of the Health Belief Model: how likely a person thinks a condition is to strike them, and how serious its consequences would be. Together they set the perceived threat that motivates (or fails to motivate) action.' },
          { term: 'Perceived benefits and barriers', def: 'The two action-evaluation components: how effective the person believes the recommended behaviour would be, weighed against what it costs — money, time, pain, embarrassment, inconvenience. Action follows when benefits outweigh barriers.' },
          { term: 'Cues to action and self-efficacy', def: 'The model’s triggers and confidence terms: cues (symptoms, reminders, campaigns, a doctor’s advice) activate readiness, and self-efficacy — Bandura’s term for belief in one’s own capability — determines whether readiness becomes behaviour.' },
          { term: 'Stages of change', def: 'The Transtheoretical Model’s sequence — precontemplation, contemplation, preparation, action, maintenance (and termination) — with the practical rule that interventions must match the stage: advice pitched at someone in precontemplation bounces off.' },
          { term: 'Adherence', def: 'The degree to which a patient follows a agreed treatment plan — taking medication as prescribed, attending appointments, keeping lifestyle changes. Non-adherence is one of the largest modifiable causes of treatment failure in modern medicine.' },
          { term: 'Social determinants of health', def: 'The conditions in which people are born, live, work and age — income, education, housing, neighbourhood, employment — that systematically shape both health behaviour and access to care, producing the disparities the clinical encounter alone cannot fix.' },
        ],
      },
      {
        kind: 'para',
        text: 'The Health Belief Model is the field’s founding framework, built in the 1950s by U.S. Public Health Service researchers studying why people declined free tuberculosis screening — the founding observation being that even free, easy prevention fails when beliefs do not support it. Its logic: the likelihood of a protective action rises with perceived threat (susceptibility × severity) and perceived benefit, falls with perceived barriers, and is triggered by cues to action — with self-efficacy added later as the confidence condition. Every construct is a measurable belief and therefore an intervention target: education raises perceived susceptibility (personalised risk feedback), vividness raises perceived severity (survivor testimony), convenience lowers barriers (clinic hours, transport), reminders act as cues, and skills training builds efficacy. The model’s evidence base spans decades of vaccination and screening research — a widely cited study of HPV-vaccination uptake among college students used the constructs to identify who was at risk of non-completion and which supports (knowledge, provider recommendation, benefit-framing) moved completion — and its limits are equally examinable: it underweights habit, emotion and social norms, which is precisely what the later models supply.',
      },
      {
        kind: 'para',
        text: 'The Transtheoretical Model adds time: change is a process, not a decision. Derived from studies of smokers who quit on their own, it names the stages — precontemplation (no intention within six months), contemplation (intending within six months), preparation (intending within thirty days and already taking steps), action (behaviour changed for under six months), maintenance (over six months), and the idealised termination (no temptation, full confidence) — and insists the model is circular, not linear: relapse returns a person to an earlier stage, which is normal rather than failure. The stage-matching principle is its practical core: with a precontemplator you raise awareness and consciousness of the problem; with a contemplator you work on decisional balance and ambivalence; with a prepared actor you help set concrete plans; with a maintainer you guard against relapse triggers. The theory of planned behaviour completes the individual-level trio: intention — the immediate determinant of behaviour — is predicted by attitude toward the behaviour, subjective norms (what important others approve and do), and perceived behavioural control (which shades into Bandura’s self-efficacy). And the social-ecological frame zooms out one level: behaviour sits in nested contexts — family, workplace, community, policy — so a school’s food environment or a city’s bike lanes can shift more behaviour than any pamphlet, which is why population programmes stack individual counselling with environmental change.',
      },
      {
        kind: 'para',
        text: 'The medical-care half begins in the consultation. The doctor–patient interaction is itself a health behaviour setting: communication quality predicts understanding, trust, recall and follow-through. The classic literature contrasts paternalistic models (doctor decides), informative models (patient chooses with facts) and shared decision-making (both bring expertise — the clinician the evidence, the patient their values and life context), with shared decision-making now the standard for preference-sensitive choices. Adherence — the follow-through variable — is systematically imperfect: roughly half of patients with chronic conditions do not take medicines as prescribed, and the causes are the models’ constructs in clinical dress — beliefs about necessity and concerns about harm, perceived barriers (cost, complexity, side-effects), forgetfulness, and low self-efficacy with complex regimens. The measured interventions are correspondingly behavioural: simplifying regimens, pill organizers and reminders, teach-back to check understanding, motivational interviewing for ambivalence, and shared goal-setting rather than instruction. Non-adherence is best read not as a moral failing but as a diagnosable behaviour — the single examinable fact most often lost.',
      },
      {
        kind: 'para',
        text: 'The system around the consultation sets its ceiling. Access has three named gates: availability (is there a provider?), affordability (can the patient pay — insurance, transport, time off work?) and acceptability (will they feel respected and understood?). Health disparities are the measured output: life expectancy and disease burden vary by income, race, education and geography through mechanisms the social-determinants frame names — exposure differences, stress burden, environmental risk, health literacy, and differing quality of care received even at equal access. Health literacy — the capacity to obtain, understand and use health information — mediates much of the clinical half: low literacy predicts worse chronic-disease control and higher hospitalisation independent of insurance. The policy response ladder runs from cultural competence in the consultation (interpreters, community health workers, culturally adapted materials) through outreach and navigation programmes to the structural fixes — insurance expansion, siting clinics, food and housing policy — and the honest exam answer acknowledges which rung each intervention sits on: counselling changes individuals; navigation changes pathways; only policy changes populations.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Design a Screening Uptake Programme with the HBM',
        steps: [
          'Define the behaviour and the failure: eligible patients are not booking a free screening test; the model’s job is to locate which belief is binding.',
          'Suspect low perceived susceptibility: people who “feel fine” underestimate risk. Counter with personalised risk communication — age and family-history framing — not generic statistics.',
          'Attack perceived barriers: audit the actual frictions (appointment hours, travel, fear of the procedure) and remove the top two; a barrier removed moves more people than a message repeated.',
          'Add cues to action: GP endorsement (the provider recommendation that trials repeatedly find decisive), reminder letters, and making the booking one phone call or click.',
          'Build self-efficacy: describe the test’s simplicity, offer peer testimonials of people who completed it, and confirm understanding with teach-back.',
          'Evaluate by stage: segment non-attenders — precontemplators need awareness work, contemplators need barrier work, preparers need logistics — and re-run the audit; the programme is a cycle, not a memo.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A patient skips vaccination because “this illness is not serious.” Which HBM construct is binding?',
          options: ['perceived severity', 'perceived susceptibility', 'cue to action', 'self-efficacy'],
          answer: 0,
          explain: 'Susceptibility (“could I catch it?”) is granted; severity (“how bad would it be?”) is the belief doing the damage — the intervention lever is credible consequence information.',
        },
        {
          q: 'A smoker says he has no intention of quitting in the foreseeable future. In the Transtheoretical Model he is in…',
          options: ['preparation', 'contemplation', 'precontemplation', 'maintenance'],
          answer: 2,
          explain: 'No intention within six months defines precontemplation; contemplation means intending within six months, preparation within thirty days with steps taken.',
        },
        {
          q: 'Roughly what fraction of patients with chronic disease take medicines exactly as prescribed?',
          options: ['about half', 'about nine in ten', 'nearly all', 'about one in ten'],
          answer: 0,
          explain: 'Adherence research converges on about half for long-term regimens — the reason adherence support is a core clinical skill rather than an optional nicety.',
        },
        {
          q: 'Health literacy belongs in a lesson on medical care because it…',
          options: ['measures hospital bed capacity', 'predicts understanding, self-management and outcomes independent of insurance', 'is a synonym for intelligence', 'only matters for medical staff'],
          answer: 1,
          explain: 'The capacity to understand and use health information predicts chronic-disease control and hospitalisation independently — it is a patient-side access and outcomes factor.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Treating the Health Belief Model as a complete psychology: it underweights habit, emotion and social norms — that is why the transtheoretical and planned-behaviour models exist alongside it. Reading the stages of change as a straight ladder with relapse as failure: the model is explicitly circular, and interventions must match the stage the person is in now. Confusing self-efficacy (belief in one’s capability) with self-esteem (global self-worth) — Bandura’s construct is task-specific and trainable. Blaming non-adherence on the patient’s character: the measured causes are regimen complexity, cost, beliefs and communication — all modifiable. And treating access as a money question only: availability, affordability and acceptability are three gates, and a clinic that is free but disrespected still fails its population.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the stress-and-coping lesson for the physiology these behaviours regulate, and the vaccines lesson for a concrete preventive behaviour. Follow with the social-determinants material in any population-health reading. Primary readings: OpenStax, Population Health, chapter 10 “Socio-Ecological Perspectives and Health” (10.2 Theories and Models of Health Behavior) and chapter 15 “Health Promotion and Disease Prevention Strategies” (openstax.org / med.libretexts.org, CC BY); the National Cancer Institute’s “Theory at a Glance” for the model family in one document.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Health behaviors drive the modern disease burden; models exist to explain and change them.',
        'Health Belief Model: perceived susceptibility and severity (threat), benefits and barriers (evaluation), cues to action, self-efficacy — each a measurable intervention target.',
        'Transtheoretical Model: precontemplation → contemplation → preparation → action → maintenance, circular with relapse; match the intervention to the stage.',
        'Theory of planned behavior: intention from attitudes, subjective norms and perceived control; social-ecological frame adds environment and policy.',
        'Medical care: shared decision-making improves the consultation; about half of chronic-disease patients are non-adherent — diagnose beliefs and barriers, do not moralise.',
        'Access has three gates (availability, affordability, acceptability); disparities follow social determinants, and literacy mediates the clinical half.',
      ] },
    ],
  },
  {
    id: 'health-vaccines-how-work',
    title: 'How Vaccines Train the Immune System',
    domain: 'Health & Wellness',
    field: 'Public Health',
    branch: 'Immunization Science',
    tier: 'core',
    concepts: [
      'Innate immunity: the fast, generic defense',
      'Adaptive immunity: slow to meet, never to forget',
      'Antigens: the molecular mugshots',
      'B cells, antibodies, and neutralization',
      'T cells: assassins and coordinators',
      'Immunological memory and the second encounter',
      'From live-attenuated to mRNA: the platform menu',
    ],
    words: 1040,
    readMins: 5,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'A vaccine is a rehearsal. It presents the immune system with a harmless preview of a pathogen — a fragment, a disabled copy, or the blueprint for one — so that the first real encounter is fought like a second one. Immunization science, the Public Health discipline behind this Health & Wellness topic, explains the remarkable trick: teaching a defense system that normally learns through dangerous infection how to learn safely. The result is a memory that can last decades, sometimes a lifetime.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Vaccination is the highest-leverage intervention in public health history — smallpox eradicated, polio nearly gone, millions of child deaths prevented every year. Understanding the mechanism also explains boosters, herd effects, and why mild diseases are still worth preventing.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The innate system answers within minutes: inflammation, fever, phagocyte cells that swallow anything flagged as foreign. It is generic — the same response to any invader — and it holds the line but cannot improve with experience. Its alarm signals, though, are what wake the slower system that can.',
      },
      {
        kind: 'para',
        text: 'The adaptive system takes days to mount a first response, but it is specific and it learns. Lymphocytes carry receptors that recognize particular molecular shapes, and the system maintains a standing library of them. Meeting a pathogen for the first time means expanding the right clones — slow. Meeting it again means the library answers immediately — the principle every vaccine exploits.',
      },
      {
        kind: 'para',
        text: 'An antigen is any molecular fragment the adaptive system can recognize — the tip of a spike protein, a capsule\'s sugar coat. Antigens are the mugshots vaccines deliver: enough shape for recognition, with none of the pathogen\'s machinery to cause disease. The immune system does not catch diseases; it catches shapes.',
      },
      {
        kind: 'para',
        text: 'B cells secrete antibodies, Y-shaped proteins that grab their antigen with the two tips of the Y. Coating a virus in antibodies can block its docking sites outright — neutralization — while flagging it for destruction by other cells. Each B cell makes one antibody shape; the best-fitting ones are selected and mass-produced in a process of Darwinian refinement.',
      },
      {
        kind: 'para',
        text: 'Killer T cells patrol for body cells displaying foreign fragments on their surface and kill the compromised cell before the virus factory opens. Helper T cells are the coordinators, licensing B cells and rallying macrophages. Vaccines that generate strong T-cell memory, not just antibodies, are the ones that handle intracellular threats.',
      },
      {
        kind: 'para',
        text: 'After the response subsides, long-lived memory B and T cells remain on patrol while antibody levels settle to a low simmer. When the real pathogen arrives, these cells proliferate within hours: antibody titers jump and symptoms never get a foothold. That speed difference — days versus hours — is the entire payoff of vaccination.',
      },
      {
        kind: 'para',
        text: 'Platforms differ in how they deliver the mugshot. Live-attenuated vaccines carry a weakened virus and give strong, durable immunity — at the cost of being unsuitable for the immunocompromised. Inactivated and subunit vaccines deliver killed whole pathogens or purified fragments, safer but often needing adjuvants and boosters. mRNA vaccines hand cells temporary instructions to build a single antigen, then dissolve.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Vaccine efficacy',
        latex: 'VE = \\frac{AR_u - AR_v}{AR_u} \\times 100\\%',
        meaning: 'Compare the attack rate among unvaccinated (ARu) and vaccinated (ARv) groups; the relative reduction is the efficacy.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: in a 20,000-person trial split evenly, 162 infections occur in the placebo arm and 9 in the vaccine arm — what is the vaccine\'s efficacy?',
          'Recall the governing idea: efficacy is the relative reduction in attack rate attributable to the vaccine.',
          'Apply: attack rates are 162/10,000 = 1.62 percent unvaccinated and 9/10,000 = 0.09 percent vaccinated, so VE = (1.62 − 0.09)/1.62 × 100 ≈ 94 percent.',
          'State the result: about 94 percent efficacy — a vaccinated person faced roughly one-eighteenth of the placebo group\'s risk, not a guarantee of never being infected.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Childhood schedules sequence doses to catch the immune system\'s most receptive windows.',
          'Travel medicine matches regional disease risks — yellow fever, typhoid, hepatitis — to itineraries.',
          'Outbreak control rings vaccinations around detected cases, exploiting the speed of memory responses.',
          'Cancer prevention rides the same machinery, immunizing against cancer-causing viruses.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The seductive error is reading "94 percent efficacy" as "94 percent chance I cannot be infected" — it is a relative risk reduction across a population, and some vaccinated people still catch the disease, usually more mildly. Another is judging a vaccine by antibody levels alone, which wane naturally while memory cells persist. And a sore arm or brief fever is the immune system working, not the disease itself.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Antigen', def: 'A molecular fragment the adaptive immune system recognizes and responds to.' },
          { term: 'Antibody', def: 'A Y-shaped B-cell protein that binds a specific antigen, often neutralizing it.' },
          { term: 'Neutralization', def: 'Blocking a pathogen\'s ability to infect by covering its docking structures.' },
          { term: 'Memory B cell', def: 'A long-lived cell that enables the rapid, strong secondary response.' },
          { term: 'Killer T cell', def: 'A lymphocyte that destroys body cells displaying foreign fragments.' },
          { term: 'Live-attenuated vaccine', def: 'A vaccine built from a weakened pathogen that replicates mildly and trains durably.' },
          { term: 'Attack rate', def: 'The proportion of a defined population infected over a specified period.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which arm of the immune system responds within minutes with a generic defense?',
            options: ['Adaptive immunity', 'Innate immunity', 'Memory B cells', 'Plasma cells'],
            answer: 1,
            explain: 'Innate defenses — inflammation, phagocytes — are immediate but do not improve with experience.',
          },
          {
            q: 'Vaccines primarily exploit which property of the adaptive immune system?',
            options: ['Fever production', 'Immunological memory after a safe first encounter', 'Skin barrier maintenance', 'Red blood cell turnover'],
            answer: 1,
            explain: 'A harmless preview primes memory cells so the real pathogen meets a second-exposure response.',
          },
          {
            q: 'In a trial, the unvaccinated attack rate is 2.0 percent and the vaccinated rate 0.5 percent. Efficacy is:',
            options: ['25 percent', '50 percent', '75 percent', '95 percent'],
            answer: 2,
            explain: '(2.0 − 0.5)/2.0 = 0.75, a 75 percent relative reduction.',
          },
          {
            q: 'Why do subunit vaccines often need boosters?',
            options: ['They contain live virus that must weaken over time', 'Purified fragments are safer but less stimulatory, so doses repeat the training', 'They target only T cells', 'They bypass the bloodstream'],
            answer: 1,
            explain: 'Without a replicating pathogen the immune signal is weaker; adjuvants and repeat doses compensate.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Pair with the herd-immunity topic for the population-level picture. Then: how immune memory wanes, adjuvant science, and reading vaccine trial results critically.',
        tone: 'path',
      },
    ],
  },
]

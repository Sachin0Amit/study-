/**
 * Knowledge Universe — Medicines, First Aid & Reproductive Health — Chapter 01: Pharmacology & Clinical Reasoning
 * 2 lessons · ~2,916 words
 * field: Medicine & Pharmacology
 * legacy sources: health-wellness.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Medicine & Pharmacology]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 health-pharmacology-how-medicines-work — Pharmacology: How Medicines Work
 *   01.2 health-how-doctors-diagnose — How Doctors Diagnose: History, Exam and the Differential
 */
import type { KnowledgeTopic } from '../../types'

export const medicinesEmergencyCareCh01: KnowledgeTopic[] = [
  {
    id: 'health-pharmacology-how-medicines-work',
    title: 'Pharmacology: How Medicines Work',
    domain: 'Health & Wellness',
    field: 'Medicine & Pharmacology',
    branch: 'How Medicines Work',
    tier: 'intermediate',
    concepts: [
      'Pharmacokinetics: what the body does to a drug',
      'Pharmacodynamics: what a drug does to the body',
      'ADME: absorption, distribution, metabolism, excretion',
      'First-pass metabolism and bioavailability',
      'Half-life, steady state and washout',
      'Agonists and antagonists at receptors',
      'Why drug interactions happen',
    ],
    words: 1514,
    readMins: 8,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Swallow a tablet and a precisely timed journey begins: through the stomach, across the gut wall, past the liver\'s chemical filters, out to every tissue, and finally to the kidneys for disposal. Pharmacology, the science of drugs behind this Medicine & Pharmacology topic, divides that journey into two clean questions — pharmacokinetics, what the body does to the drug, and pharmacodynamics, what the drug does to the body. Get those two straight and dosing schedules, pharmacy labels, and the grapefruit-juice warning all turn from folklore into readable engineering.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Most adults will take prescription medicines for decades of their lives, yet the instructions read like opaque rules. Pharmacokinetics explains why "every eight hours" is not a suggestion, why some drugs take weeks to reach full effect while others act in minutes, and why stopping suddenly can matter as much as starting.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Pharmacokinetics is spelled ADME. Absorption gets the drug into the bloodstream; distribution carries it to its targets; metabolism chemically transforms it, mostly in the liver; excretion clears it, mostly through the kidneys into urine. Every dosing decision — how much, how often, by which route — is an attempt to keep the amount of drug at its site of action inside a useful window: enough to work, never quite enough to poison.',
      },
      {
        kind: 'para',
        text: 'Absorption depends on the route. Intravenous injection places the drug directly into the blood — 100 percent available by definition. Everything else must cross barriers, and the gut is a gauntlet: stomach acid, digestive enzymes, and the wall of the intestine itself. Bioavailability measures the survivors — the fraction of a swallowed dose that reaches the circulation intact, compared with the same dose injected. Some drugs survive the trip nearly whole; others are mostly destroyed on arrival, which is why doses differ so much between routes.',
      },
      {
        kind: 'para',
        text: 'The gut\'s blood supply drains straight into the liver before reaching the rest of the body, and the liver takes a cut of everything passing through — the first-pass effect. A drug heavily extracted on that first pass must be swallowed at many times its effective dose, or not swallowed at all: insulin, being a protein, is simply digested like food, which is why it is injected. Tablets dissolved under the tongue and patches stuck on skin exist largely to slip past the liver\'s toll booth.',
      },
      {
        kind: 'para',
        text: 'Distribution decides where a drug goes once it circulates. Much of it hitches a ride on plasma proteins, and only the unattached fraction is free to act, so anything competing for the same ride can abruptly raise the free portion. Chemistry draws the map: fat-soluble drugs settle into body fat and leak out slowly for days, while the blood-brain barrier excludes all but the smallest, slipperiest molecules from the brain.',
      },
      {
        kind: 'para',
        text: 'The single most useful number in pharmacology is the half-life: the time it takes the body to clear half of whatever remains. Each half-life halves the leftovers — 100 becomes 50, 25, 12.5, 6.25 percent — a tidy exponential decline. Ibuprofen\'s half-life is about two hours; caffeine\'s is roughly five, the number behind the sleep lesson\'s warning about late-afternoon coffee; fluoxetine\'s stretches for days, which is why it lingers long after the last capsule. Half-life sets the dosing rhythm, the time to full effect, and the time to wash a drug back out.',
      },
      {
        kind: 'para',
        text: 'Pharmacodynamics is the drug meeting its target. Most drugs work by binding receptors or enzymes the body already owns, and they come in two temperaments: agonists switch the receptor on, antagonists occupy it without switching anything on. Salbutamol is an agonist at the airways\' beta-2 receptors, relaxing smooth muscle to open constricted airways; beta blockers are antagonists at related receptors in the heart, muting adrenaline\'s pace-setting. Selectivity is everything — a drug that fits one receptor cleanly has few side effects; one that fits several has a longer warning label.',
      },
      {
        kind: 'para',
        text: 'Bodies differ, and so do outcomes. The liver\'s CYP enzyme family metabolizes most drugs on the market, and anything that revs or jams those enzymes changes every drug riding the same lane: grapefruit juice inhibits one of them, quietly raising blood levels of certain statins; some antibiotics induce them, weakening contraceptive steroids. Age, kidney function, and genetics move the same dials. And the distance between a helpful dose and a harmful one — the therapeutic index — ranges from generous, as with ibuprofen, to razor-thin, as with warfarin, which is why some drugs demand laboratory monitoring while others sit on supermarket shelves.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Drug half-life',
        latex: 't_{1/2} = \\frac{\\ln 2}{k_e} \\approx \\frac{0.693}{k_e}',
        meaning: 'The half-life is the natural log of 2 divided by the elimination rate constant ke — roughly 70 percent of one over the clearance rate.',
      },
      {
        kind: 'formula',
        name: 'Fraction remaining after n half-lives',
        latex: '\\frac{C_n}{C_0} = \\left(\\frac{1}{2}\\right)^{n}',
        meaning: 'Concentration halves each half-life: 50 percent after one, 25 after two, 12.5 after three, 6.25 after four.',
      },
      {
        kind: 'formula',
        name: 'Time to steady state',
        latex: 't_{ss} \\approx (4\\text{ to }5) \\times t_{1/2}',
        meaning: 'With repeated dosing, levels climb toward a plateau that is effectively reached after four to five half-lives — the same span a full washout takes after stopping.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a once-daily blood-pressure medicine has a half-life of 12 hours. When does it reach full effect after starting, and how long after stopping is it effectively gone?',
          'Recall the governing idea: repeated dosing builds toward a steady state reached after four to five half-lives, and after the last dose the same halving arithmetic runs in reverse.',
          'Apply: four to five half-lives of 12 hours is 48 to 60 hours — about two days of once-daily doses to reach the plateau. After the final dose, 50 percent remains at 12 hours, 25 at 24, 12.5 at 36, and 6.25 at 48 hours: more than 97 percent is gone within roughly two and a half days.',
          'State the result: the medicine reaches full steady effect in about two days and clears almost completely within two to three days of stopping — which is also why a couple of missed doses can drop levels meaningfully, and why some drugs are tapered rather than stopped cold.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Dosing schedules are half-life engineering: amoxicillin, with a half-life near one hour, is prescribed three or four times daily, while once-daily drugs are simply slow to leave.',
          'Hospital loading doses jump straight to steady-state levels when waiting four half-lives is too slow — routine for anticoagulants and anti-seizure medicines.',
          'Kidney-dose adjustments cut or stretch doses when impaired clearance lengthens a half-life, preventing drugs from accumulating to toxic plateaus.',
          'Deprescribing plans sequence washouts: switching between certain antidepressants requires a clearance interval to avoid excess serotonin.',
          'Pharmacy labels carry grapefruit and alcohol warnings precisely because CYP interference is predictable enough to print.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The classic error is doubling up after a missed dose — with a long-half-life drug that is a straight overdose. The second is assuming herbal means inert: St John\'s wort is a powerful liver-enzyme inducer that weakens contraceptives, blood thinners, and antivirals alike. And pain-reliever stacking matters: paracetamol hides in many combined cold remedies, so doubling products can double the dose of the one ingredient with a narrow liver-safety margin.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Pharmacokinetics', def: 'What the body does to a drug: absorption, distribution, metabolism, excretion.' },
          { term: 'Pharmacodynamics', def: 'What a drug does to the body, chiefly through receptors and enzymes.' },
          { term: 'Bioavailability', def: 'The fraction of a dose reaching circulation intact, measured against intravenous injection.' },
          { term: 'First-pass metabolism', def: 'The liver\'s extraction of orally absorbed drug before it reaches the rest of the body.' },
          { term: 'Half-life', def: 'The time for the body to eliminate half of the remaining drug.' },
          { term: 'Agonist and antagonist', def: 'A drug that switches a receptor on versus one that merely occupies and blocks it.' },
          { term: 'Therapeutic index', def: 'The gap between an effective dose and a toxic one; narrow gaps demand monitoring.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A drug has a half-life of 6 hours. Twenty-four hours after a single dose, roughly what fraction remains?',
            options: ['50 percent', '25 percent', '12.5 percent', '6.25 percent'],
            answer: 3,
            explain: 'Four half-lives pass in 24 hours, and (1/2)^4 leaves 6.25 percent of the dose behind.',
          },
          {
            q: 'With repeated dosing, drug levels effectively reach their plateau after about:',
            options: ['one or two doses', 'four to five half-lives', 'exactly ten doses', 'a fixed 24 hours regardless of the drug'],
            answer: 1,
            explain: 'Accumulation and clearance balance out to a steady state after roughly four to five half-lives of regular dosing.',
          },
          {
            q: 'Insulin is injected rather than swallowed mainly because:',
            options: ['it is too large a molecule for the stomach to hold', 'as a protein it is digested like food before reaching the blood', 'the liver destroys every trace of it', 'it would raise stomach acid dangerously'],
            answer: 1,
            explain: 'Digestive enzymes dismantle proteins — injection bypasses both the gut and the first pass through the liver.',
          },
          {
            q: 'A beta blocker slows the heart by acting as:',
            options: ['an agonist at adrenaline receptors', 'an antagonist occupying adrenaline receptors', 'a fuel for adrenaline synthesis', 'a chelator that removes adrenaline'],
            answer: 1,
            explain: 'It occupies the receptor without activating it, so adrenaline\'s signal cannot get through at full strength.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Pairs naturally with the antibiotic-resistance lesson in Life Sciences for how antimicrobial drugs target bacteria specifically. Next steps: how new drugs are tested in clinical trials, how pain medicines work, and the everyday pharmacology of caffeine and alcohol.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'health-how-doctors-diagnose',
    title: 'How Doctors Diagnose: History, Exam and the Differential',
    domain: 'Health & Wellness',
    field: 'Medicine & Pharmacology',
    branch: 'Clinical Reasoning',
    tier: 'core',
    concepts: [
      'The history: the most powerful diagnostic test',
      'Characterizing a symptom systematically',
      'The physical exam as hypothesis testing',
      'Differential diagnosis: rank likelihood and danger',
      'Sensitivity and specificity of tests',
      'Bayesian updating at the bedside',
      'Cognitive traps and safety nets',
    ],
    words: 1402,
    readMins: 7,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'A good clinician listens for fifteen minutes, orders two tests, and names a condition that a search engine drowned in possibilities could not. The clinical method — the subject of this Medicine & Pharmacology topic — is not a checklist but a loop: gather evidence, generate hypotheses, test them, and update. Arthur Conan Doyle, a doctor before he was a novelist, modeled Sherlock Holmes on his surgeon teacher Joseph Bell; the deduction is no coincidence. Diagnosis is applied reasoning under uncertainty, and its steps are learnable.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Patients who understand the method become better partners in it: they bring a structured story instead of a symptom dump, know why a test was chosen, and can ask the single most useful question — "what are you trying to rule out?" It also explains why "just test everything" backfires: every test has false positives, and untargeted testing produces cascades of follow-up, cost and worry.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Everything begins with the history, and the classic teaching is blunt: it alone yields the diagnosis in most encounters. The patient\'s opening line is recorded verbatim as the chief complaint, then interrogated systematically — pain is characterized by its Onset, what Provokes or relieves it, its Quality (sharp, burning, pressure), its Region and radiation, its Severity, and its Timing. Then the context: past illnesses, medications, allergies, family history, and the social fabric of smoking, alcohol, work and living situation. What looks like small talk is data collection.',
      },
      {
        kind: 'para',
        text: 'The physical examination follows the same discipline in miniature — inspect, touch, percuss, listen — but it is not a routine lap: it is targeted experiment. The clinician who presses the right lower abdomen is testing a hypothesis about appendicitis, watching the face, not just the belly. Vital signs are the dashboard — temperature, pulse, breathing rate, blood pressure, oxygen saturation — and any single finding is a data point, interpreted against the story already gathered rather than in isolation.',
      },
      {
        kind: 'para',
        text: 'Before any test is ordered, a good clinician builds the differential diagnosis: a list of plausible explanations ranked by two separate logics — how likely, and how dangerous. A healthy 24-year-old with chest pain probably has a muscle strain, but the list is topped by the must-not-miss causes anyway: the heart attack that is unlikely but lethal outranks the strain that is likely and harmless. Every subsequent test exists to move items up or down that list; "let\'s just run a panel" is not a differential, it is a coin flip with an invoice.',
      },
      {
        kind: 'para',
        text: 'Tests earn their place through two statistics. Sensitivity is the share of people with the disease who test positive — highly sensitive tests, when negative, reliably rule disease out. Specificity is the share of healthy people who test negative — highly specific tests, when positive, confirm. Cutoffs trade the two against each other: lower the threshold and catch more cases at the price of more false alarms; raise it and the reverse. There is no perfect test, only tests matched to a question.',
      },
      {
        kind: 'para',
        text: 'The interpretation step is Bayes\' theorem wearing a white coat — the same probability update covered abstractly in the Mathematics library, here deciding who gets sick. A test result does not speak for itself: it must be weighed against the probability before the test, which comes from the history, the exam, and how common the disease is in that population. The same positive result in a symptomatic high-risk patient and in an asymptomatic walk-in means entirely different things, because predictive value rises and falls with prevalence.',
      },
      {
        kind: 'para',
        text: 'Diagnosis also bends around human minds, and medicine has catalogued its own failure modes. Anchoring freezes on the first impression; availability ranks whatever was seen last week too high — the availability heuristic dissected in the Social Sciences lessons, wearing scrubs. The countermeasures are structural: "what else could this be?" asked out loud, second opinions for consequential calls, and safety-netting — explicit instructions to return if things change, plus the decision to re-examine in 48 hours, which turns time itself into a diagnostic test for the self-limiting versus the sinister.',
      },
      {
        kind: 'para',
        text: 'The final discipline is knowing what each result will trigger before ordering. The rule taught to trainees: never order a test unless every possible answer changes the plan. Incidental findings — the scan that shows something unrelated — are the tax on unfocused testing, paid in anxiety, further procedures, and occasional harm. The clinical method closes its loop deliberately: hypothesis, test, update, and a plan for what happens next under each outcome.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Positive predictive value',
        latex: 'PPV = \\frac{Se \\times P}{Se \\times P + (1 - Sp)(1 - P)}',
        meaning: 'The probability that a positive result is truly positive — sensitivity Se and specificity Sp folded with the pre-test probability P of disease in this patient.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a screening test with 99 percent sensitivity and 95 percent specificity is used in a population where 1 percent has the disease. A person tests positive — what is the chance they actually have it?',
          'Recall the governing idea: predictive value weighs the test\'s performance against how rare the disease is; sensitivity and specificity belong to the test, predictive values belong to the patient.',
          'Apply: in 10,000 people, 100 have the disease and 99 of them test positive; of the 9,900 healthy, 5 percent — about 495 — also test positive. PPV = 99/(99 + 495) ≈ 17 percent.',
          'State the result: roughly five of every six positives are false — which is why screening programs confirm before diagnosing, and why the same positive test in a symptomatic patient (pre-test probability 50 percent) would carry a PPV above 95 percent.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Screening programs sequence a sensitive first test with a specific confirmatory one, exploiting exactly the arithmetic above.',
          'Emergency-department triage scores convert history and exam items into tested probability bands.',
          'Hospital handovers and checklists exist to defeat anchoring and attention failure between shifts.',
          'Discharge instructions with explicit safety-netting turn patients into sensors for the evolving diagnosis.',
          'Clinical-decision support embeds pre-test probabilities in the ordering screen itself.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The reflex error is demanding every test "to be thorough" — in a low-risk person that mostly manufactures false positives and their follow-up cascades. The mirror error is dismissing a normal test: taken too early, troponin and some infections test negative while the disease brews, which is why timing and repeat testing exist. And self-diagnosis by search engine reverses the method — it has no differential, no examination, and no way to weigh likelihood against danger.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Differential diagnosis', def: 'The ranked list of plausible explanations for a clinical picture.' },
          { term: 'Sensitivity', def: 'Share of diseased people who test positive; high sensitivity makes a negative result reassuring.' },
          { term: 'Specificity', def: 'Share of healthy people who test negative; high specificity makes a positive result convincing.' },
          { term: 'Pre-test probability', def: 'The chance of disease before testing, estimated from history, exam and prevalence.' },
          { term: 'Positive predictive value', def: 'The probability that a positive result reflects true disease in this patient.' },
          { term: 'Anchoring bias', def: 'Sticking with the first impression despite new evidence.' },
          { term: 'Safety-netting', def: 'Explicit instructions to return or re-test if the picture changes.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A test with very high sensitivity and mediocre specificity is most useful for:',
            options: ['confirming a diagnosis', 'ruling a disease out when negative', 'measuring disease severity', 'replacing the history'],
            answer: 1,
            explain: 'High sensitivity means the diseased rarely test negative — a negative result effectively excludes the disease.',
          },
          {
            q: 'In the worked example, the biggest driver of false positives was:',
            options: ['the test being poorly calibrated', 'the low 1 percent prevalence of disease', 'the examiner anchoring', 'too many symptoms'],
            answer: 1,
            explain: 'With rare disease, even excellent specificity leaves many healthy people testing positive — prevalence rules predictive value.',
          },
          {
            q: 'Ranking "unlikely but lethal" causes above "likely but harmless" ones on a differential is the principle of:',
            options: ['worst first', 'Occam\'s razor', 'cost minimization', 'patient preference only'],
            answer: 0,
            explain: 'Must-not-miss diagnoses get tested early because the cost of missing them dwarfs the cost of checking.',
          },
          {
            q: 'The question a clinician should answer before ordering any test is:',
            options: ['what will I do with each possible result', 'will the patient be pleased', 'is the test covered by insurance', 'how fast is the lab'],
            answer: 0,
            explain: 'A test without a decision attached produces data without value — and incidental findings with consequences.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Pairs with the probability lessons in Mathematics for the underlying updating rule, and with the heuristics lessons in Social Sciences for the biases. Next: how specific tests work — blood counts, ECGs, imaging — and the design of screening programs. Educational, not a license to diagnose.',
        tone: 'path',
      },
    ],
  },
]

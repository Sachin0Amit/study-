/**
 * Knowledge Universe — Public Health — Chapter 01: Epidemiology
 * 2 lessons · ~2,479 words
 * field: Public Health
 * legacy sources: health-wellness.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Epidemiology]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 health-herd-immunity-r0 — Herd Immunity and R₀
 *   01.2 epidem-outbreak-investigation — How Outbreaks Are Investigated: Field Epidemiology
 */
import type { KnowledgeTopic } from '../../types'

export const publicHealthCh01: KnowledgeTopic[] = [
  {
    id: 'health-herd-immunity-r0',
    title: 'Herd Immunity and R₀',
    domain: 'Health & Wellness',
    field: 'Public Health',
    branch: 'Epidemiology',
    tier: 'intermediate',
    concepts: [
      'R₀, the basic reproduction number',
      'R_t, the effective reproduction number',
      'The herd immunity threshold',
      'The SIR model of epidemics',
      'What sets R₀: contacts, transmission probability, duration',
      'Vaccine efficacy versus coverage',
      'Waning immunity keeps the target moving',
    ],
    words: 1082,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'An epidemic is a chain reaction, and epidemiology\'s most useful number — R₀ — tells you exactly how flammable that chain is. In this Public Health topic from Health & Wellness, you will see how one case\'s average secondary infections are estimated, why the herd immunity threshold is the immune fraction needed to break the chain, and how vaccines, behavior, and waning immunity move the real-time number R_t. The SIR model underneath is three lines of arithmetic that explain outbreaks, lockdowns, and booster campaigns alike.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Measles outbreaks restart the moment vaccination dips a few percent below its threshold — real communities, real hospitalizations. Understanding R₀ and R_t turns outbreak news from noise into arithmetic you can check.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'R₀ is the average number of secondary infections one case generates in a fully susceptible population with no interventions. Below 1, chains of transmission fizzle out; at 1, an infection hovers; above 1, cases multiply. Influenza sits near 1.3, ancestral SARS-CoV-2 near 3, and measles between 12 and 18 — the most contagious common pathogen we know.',
      },
      {
        kind: 'para',
        text: 'Once people become immune or change behavior, the effective reproduction number R_t replaces R₀. It is the number dashboards tracked in real time during the 2020–22 pandemic and the number policy tries to push below 1. R₀ is the ceiling; R_t is the current reading.',
      },
      {
        kind: 'para',
        text: 'If a fraction H of the population is immune, each case reaches fewer susceptible people. Setting average transmission to exactly one gives H = 1 − 1/R₀: about 60% for R₀ = 2.5, 75% for R₀ = 4, and roughly 93–95% for measles. The threshold is a population average, not a personal shield.',
      },
      {
        kind: 'para',
        text: 'The classic SIR model sorts people into Susceptible, Infectious, and Recovered compartments and moves them with two parameters: β, the effective transmission rate, and γ, the recovery rate, whose inverse is the average infectious period. R₀ is simply β/γ — which is why every intervention is an attack on one of those two symbols.',
      },
      {
        kind: 'para',
        text: 'R₀ decomposes into contacts × transmission probability per contact × duration of infectiousness. Lockdowns cut contacts, masks and ventilation cut per-contact probability, and isolation or antivirals cut duration. A pathogen\'s R₀ also depends on the population: dense cities and large households raise it.',
      },
      {
        kind: 'para',
        text: 'A vaccine\'s efficacy E and the coverage C multiply, so the immune fraction they deliver is C × E. Because E never reaches 100%, hitting a threshold H demands C = H/E — measles\' 93% threshold with 97% two-dose efficacy requires about 96% coverage, which is why school-entry requirements exist.',
      },
      {
        kind: 'para',
        text: 'Protection fades — months for some respiratory viruses, decades for measles after two doses. As immunity wanes, the immune fraction sinks back below threshold and boosters or new campaigns must top it up. Thresholds are maintenance targets, not finish lines.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Basic reproduction number (SIR)',
        latex: 'R_0 = \\frac{\\beta}{\\gamma}',
        meaning: 'β is the transmission rate and γ the recovery rate; 1/γ is the average infectious period.',
      },
      {
        kind: 'formula',
        name: 'Herd immunity threshold',
        latex: 'H = 1 - \\frac{1}{R_0}',
        meaning: 'The immune fraction at which each case causes, on average, exactly one further case — the edge of decline.',
      },
      {
        kind: 'formula',
        name: 'Coverage needed at efficacy E',
        latex: 'C = \\frac{H}{E} = \\frac{1 - 1/R_0}{E}',
        meaning: 'Because efficacy is below 100%, required coverage always exceeds the threshold itself.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: a novel respiratory virus has R₀ = 4 and a two-dose vaccine of 80% efficacy against infection — what coverage stops sustained spread?',
          'Recall the governing ideas: the threshold is H = 1 − 1/R₀, and delivered immunity equals coverage × efficacy.',
          'Apply: H = 1 − 1/4 = 0.75, so the required coverage is C = 0.75 / 0.8 = 0.9375.',
          'State the result: about 94% of the population needs both doses — and if immunity wanes within a year, coverage must be sustained or boosted, or R_t climbs back above 1.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'National immunization schedules and school-entry requirements exist to hold communities above thresholds for measles and its neighbors.',
          'Real-time R_t estimation guides when restrictions tighten or relax.',
          'Outbreak response uses ring vaccination to build a local immune wall around detected cases.',
          'Travel medicine: proof-of-vaccination and screening slow importation of infections across borders.',
          'Pandemic planning uses threshold math to set coverage targets before a virus arrives.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Treating R₀ as a fixed property of the pathogen alone is wrong — it is a pathogen-population pair that varies with density, contact patterns, and season. Believing natural infection will neatly stop an epidemic at the threshold ignores both the overshoot (epidemics burn past the threshold while declining) and the human cost of getting there. And thresholds are population averages: a highly vaccinated country can still harbor pockets where the local immune fraction is far lower.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'R₀', def: 'Average secondary cases from one infection in a fully susceptible, unmitigated population.' },
          { term: 'R_t', def: 'The current effective reproduction number, adjusted for immunity and behavior.' },
          { term: 'Herd immunity threshold', def: 'Immune fraction at which average transmission drops below one.' },
          { term: 'SIR model', def: 'Compartmental epidemic model with Susceptible, Infectious, and Recovered states.' },
          { term: 'β (beta)', def: 'Effective transmission rate combining contacts and per-contact infection probability.' },
          { term: 'γ (gamma)', def: 'Recovery rate; its inverse is the average infectious period.' },
          { term: 'Waning immunity', def: 'The decline of protection over time, countered by boosters.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'R₀ is best defined as:',
            options: ['The average number of secondary cases in a fully susceptible population', 'The fatality rate of a disease', 'The probability one contact transmits infection', 'The duration of infectiousness'],
            answer: 0,
            explain: 'R₀ averages secondary infections assuming no immunity and no interventions.',
          },
          {
            q: 'With R₀ = 4, the herd immunity threshold is:',
            options: ['25%', '50%', '75%', '100%'],
            answer: 2,
            explain: 'H = 1 − 1/4 = 0.75 — three-quarters of the population must be immune.',
          },
          {
            q: 'If R_t falls below 1, it means:',
            options: ['Herd immunity is now permanent', 'The epidemic is shrinking — each case causes fewer than one new case', 'The virus has mutated to be weaker', 'No new infections can occur'],
            answer: 1,
            explain: 'R_t below 1 means incidence declines; it says nothing about permanence or virulence.',
          },
          {
            q: 'A vaccine is 80% effective and the threshold is 60%. Required coverage is:',
            options: ['48%', '60%', '75%', '80%'],
            answer: 2,
            explain: 'C = H/E = 0.6 / 0.8 = 75% of the population.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Comfortable with percentages and basic growth rates? Start here. Natural next steps: SIR dynamics in depth, how vaccine trials measure efficacy, and reading outbreak reports critically.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'R₀ = average secondary cases in a fully susceptible population.',
          'R_t is today\'s version; policy lives or dies at the R_t = 1 line.',
          'Herd immunity threshold: H = 1 − 1/R₀.',
          'R₀ = β/γ — contacts, transmission probability, and duration.',
          'Coverage must reach H/E because efficacy is below 100%.',
        ],
      },
    ],
  },
  {
    id: 'epidem-outbreak-investigation',
    title: 'How Outbreaks Are Investigated: Field Epidemiology',
    domain: 'Health & Wellness',
    field: 'Public Health',
    branch: 'Epidemiology',
    tier: 'intermediate',
    concepts: [
      'Epidemiology: who, what, where, and when of disease',
      'The case definition and its traps',
      'Line listing: the database of an outbreak',
      'Epidemic curves and what their shapes confess',
      'Attack rates and the question of the culprit food',
      'Descriptive then analytic: cohort versus case-control',
      'The thirteen steps, from suspicion to surveillance',
    ],
    words: 1397,
    readMins: 7,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'When cases of some illness cluster — diners at the same restaurant, workers on the same floor, patients sharing a hospital ward — someone must answer four questions fast: What is the disease? Who is getting it? Where and when are they getting it? Field epidemiology is the discipline that turns scattered sick people into a controlled scientific investigation, and it is the operational core of every health department on Earth. Its founding ancestor is John Snow, who in 1854 mapped cholera deaths around London\'s Broad Street pump, took the handle off the pump, and watched the epidemic collapse — decades before anyone had seen a vibrio.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The methods in this lesson decided everything from the 1854 Broad Street pump to COVID-era contact tracing. The same thirteen-step playbook runs a romaine-lettuce recall, a measles response, and a hospital\'s fight against a resistant superbug. Knowing how outbreak evidence works is also self-defense: it tells you which headlines describe real inference and which describe a coincidence with a chart.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Epidemiology studies the distribution and determinants of health-related states in populations — the what (the disease), who (person), where (place), and when (time). The vocabulary of scale matters: endemic disease is the baseline level always present, an epidemic is a clear excess over that baseline, and a pandemic is an epidemic spanning continents. Confirming that an outbreak exists at all is step two of the discipline for a reason — baseline noise, reporting delays, and surveillance artifacts all masquerade as clusters until you compare against the expected.',
      },
      {
        kind: 'para',
        text: 'Everything downstream depends on knowing who counts as a case, so the investigation begins by drafting a case definition: a standard set of criteria for classifying someone as having the condition of interest. It combines clinical criteria — objective and simple, like fever at or above 38.5 °C plus vomiting — with restrictions by time (onset within a window), place (a defined setting), and person (the affected group). One rule is absolute: the case definition must not mention the exposure you plan to investigate, or you will have presumed your conclusion. Because certainty varies, investigators tier cases into confirmed (laboratory-verified), probable (meeting clinical criteria), and possible or suspect (fewer criteria met).',
      },
      {
        kind: 'para',
        text: 'Cases become data through line listing: a spreadsheet in which every row is a case and every column a variable — name or identifier, age, sex, symptoms, onset date, what they ate, where they went. Interviewers hunt cases systematically (menus, guest lists, lab reports, media pleas), collect the same fields from each, and the line list becomes the living database of the outbreak. Descriptive epidemiology then mines it three ways — time, place, and person — producing the epidemic curve: cases plotted by onset date. Curve shapes confess their story. A tight spike that falls quickly suggests a point source, one poisoned meal at one sitting; a plateau suggests a continuous common source, like a contaminated water supply that keeps exposing; a series of widening waves, each taller, is propagated spread, person to person, the signature behind the flattened-curve debates of respiratory epidemics.',
      },
      {
        kind: 'para',
        text: 'With the pattern described, the investigation turns analytic: testing hypotheses about the source. The workhorse statistic is the attack rate — cases divided by the population at risk, usually times 100 — and the classic foodborne showdown compares attack rates among those who ate a suspect item against those who did not. A big gap points at the culprit; the ratio of the two rates is the relative risk. When cases are rare or the population unknown — think a rare cancer cluster — investigators flip to case-control studies, comparing the exposed fraction among cases against controls, and compute an odds ratio instead. Cohort designs follow exposure forward; case-control designs reason backward from outcome; both exist because field conditions rarely permit experiments on people.',
      },
      {
        kind: 'para',
        text: 'The full CDC playbook orders the work into thirteen steps: prepare for field work; establish the existence of an outbreak; verify the diagnosis; construct a working case definition; find cases systematically and record information; perform descriptive epidemiology; develop hypotheses; evaluate hypotheses epidemiologically; as necessary, reconsider and refine; compare with laboratory and environmental studies; implement control and prevention measures; initiate or maintain surveillance; and communicate findings. Two insights hide in the ordering. The steps are not a queue — control measures start the moment evidence warrants, often before any hypothesis is settled. And the loop from hypothesis back to refinement is the scientific method compressed into public-health time pressure.',
      },
      { kind: 'heading', text: 'Key Formula' },
      {
        kind: 'formula',
        name: 'Attack rate and relative risk',
        latex: 'AR_{exp} = \\frac{cases_{exp}}{n_{exp}} \\times 100, \\quad RR = \\frac{AR_{exp}}{AR_{unexp}}',
        meaning: 'AR is the proportion of an exposed group that becomes cases; RR above 1 means exposure raises risk — the larger the RR, the stronger the suspect.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: after a wedding banquet, 60 guests report gastroenteritis. Interviews reach 120 attendees; the line list shows 50 of the 75 who ate the shrimp appetizer became ill, versus 10 of the 45 who skipped it.',
          'Compute attack rates: shrimp eaters AR = 50/75 × 100 ≈ 66.7%; non-eaters AR = 10/45 × 100 ≈ 22.2%.',
          'Compute relative risk: RR = 66.7 / 22.2 ≈ 3.0 — shrimp eaters were three times as likely to fall ill.',
          'Interpret: an RR of 3.0 makes the shrimp the leading suspect, pending laboratory confirmation from stool samples and food testing — and control begins now: the kitchen is inspected and the dish pulled while the analysis continues.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Foodborne investigations: state and federal teams trace contaminated produce and restaurant outbreaks to specific fields and suppliers.',
          'Hospital infection control: ward-level line lists and epidemic curves expose transmission chains of resistant organisms.',
          'Pandemic response: contact tracing, case definitions, and propagated-curve forecasting ran the global response to respiratory pandemics.',
          'Vaccine-preventable disease: measles clusters trigger the same playbook, with case isolation and exposure ring-vaccination.',
          'Non-infectious clusters: the same methods probe cancer clusters and vaping lung injuries, where the "agent" is chemical rather than microbial.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'A case definition that smuggles in the suspected exposure guarantees a circular investigation. Attack-rate tables flatter small denominators — a 100% rate among three people is weaker evidence than 60% among fifty. The epidemic curve is about time, not geography, so it never replaces mapping. And clusters are easy to find by chance once you decide where to look: the comparison group is what turns an anecdote into epidemiology.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Case definition', def: 'Clinical plus time-place-person criteria deciding who counts as a case; never names the exposure.' },
          { term: 'Line listing', def: 'One row per case, one column per variable — the outbreak\'s database.' },
          { term: 'Epidemic curve', def: 'Cases by onset time; its shape suggests point-source, continuous, or propagated transmission.' },
          { term: 'Attack rate', def: 'Cases divided by population at risk, as a percentage.' },
          { term: 'Relative risk', def: 'Attack rate in exposed over attack rate in unexposed.' },
          { term: 'Index case', def: 'The case that first brings the outbreak to attention — not necessarily the first infected.' },
          { term: 'Case-control study', def: 'Backward design comparing exposure history of cases against controls; yields odds ratios.' },
          { term: 'Cohort study', def: 'Forward design comparing outcomes among exposed and unexposed groups; yields relative risk.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which item must NOT appear in a case definition?',
            options: ['A fever threshold', 'A time window of onset', 'The suspected food or exposure under investigation', 'The geographic setting'],
            answer: 2,
            explain: 'Baking the exposure into the definition presumes the answer and forces every "case" to have been exposed.',
          },
          {
            q: 'An epidemic curve with a single sharp spike that falls away quickly suggests:',
            options: ['Propagated person-to-person spread', 'A point source — one shared exposure at one time', 'Ongoing continuous contamination', 'A reporting artifact'],
            answer: 1,
            explain: 'Everyone exposed at once falls ill within one incubation period, producing a compact spike.',
          },
          {
            q: '30 of 60 people who ate the salad became ill; 5 of 60 who did not also became ill. The relative risk is:',
            options: ['6.0', '3.0', '0.5', '2.5'],
            answer: 0,
            explain: 'AR exposed = 50%, AR unexposed ≈ 8.3%; RR = 50/8.3 = 6.',
          },
          {
            q: 'A rare cancer cluster appears in one zip code with no defined population to follow. The appropriate design is:',
            options: ['A cohort study', 'A case-control study comparing prior exposures of cases and controls', 'A randomized trial', 'A line listing'],
            answer: 1,
            explain: 'With few cases and an undefined at-risk population, reasoning backward from outcome to exposure via odds ratios is the practical design.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'The herd-immunity lesson supplies R₀ and the mathematics of spread; the disease-and-treatment lessons cover the pathogens themselves; the research-methods lesson generalizes the cohort and case-control logic beyond outbreaks. Next: public-health surveillance systems, assay interpretation, and outbreak modeling.',
        tone: 'path',
      },
    ],
  },
]

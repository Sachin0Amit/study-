/**
 * Knowledge Universe — Public Health — Chapter 03: Health Equity & Systems
 * 2 lessons · ~2,801 words
 * field: Public Health
 * legacy sources: x44-health-mind-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Health Equity, Health Systems]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 health-social-determinants — Social Determinants of Health: Where Lives Depend on Where They Are Lived
 *   03.2 health-systems-how-care-organized — Health Systems: How Care Gets Organized and Paid For
 */
import type { KnowledgeTopic } from '../../types'

export const publicHealthCh03: KnowledgeTopic[] = [
  {
    id: 'health-social-determinants',
    title: 'Social Determinants of Health: Where Lives Depend on Where They Are Lived',
    domain: 'Health & Wellness',
    field: 'Public Health',
    branch: 'Health Equity',
    tier: 'core',
    concepts: [
      'The WHO definition: the conditions of daily life',
      'The social gradient: health sliding stepwise with status',
      'The Whitehall studies and the control hypothesis',
      'Structural versus intermediate determinants',
      'Eighteen-year life-expectancy gaps between countries',
      'The Commission on Social Determinants of Health\'s three actions',
    ],
    words: 1380,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'A cardiologist sees one failing heart at a time; a public-health map of the same city sees the hearts arrange themselves by neighborhood. The World Health Organization\'s term for the pattern is the social determinants of health: the conditions in which people are born, grow, live, work and age, and the systems put in place to deal with illness — all of it shaped by the distribution of money, power and resources. These circumstances are not a soft backdrop to the biology of disease; they are among its strongest drivers, so much so that the pattern repeats across countries, centuries and causes of death.',
      },
      {
        kind: 'para',
        text: 'This lesson builds the deterministic lens in four steps. It states the headline numbers, which are large enough to reorganize how anyone thinks about medicine. It then traces the social gradient — the finding that health does not merely fail at the bottom but slides stepwise all the way up the social ladder. Next it sorts the causes into structural determinants, the deep arrangements of power and policy, and intermediate determinants, the housing, work and food circumstances they generate. It closes with what the evidence says can actually be done. The behavior-change models that operate at the individual level — the ones a health coach might use — are taught in the lesson Health Behavior and Medical Care; this lesson supplies the population context those models sit inside.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The World Health Organization reports an eighteen-year gap in life expectancy between high- and low-income countries, and the same gradient compresses into single cities: some urban neighborhoods live two decades longer than others a few metro stops away. Clinical care, whatever its miracles, arrives late in the causal chain — most of a person\'s health odds were set by their circumstances long before any clinician saw them. Anyone who wants to improve health, rather than only treat disease, has to work upstream.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Gradient: Not Poverty Versus Wealth, but Steps All the Way Up' },
      {
        kind: 'para',
        text: 'The decisive evidence came from an unexpected workforce. In 1967, epidemiologist Michael Marmot\'s team began studying British civil servants — salaried, insured, literate, all with access to the same National Health Service — sorted into administrative grades. If access to doctors were the whole story, their health should have been roughly equal. It was not. Mortality fell with every step up the hierarchy: the lowest employment grades died at rates several times those of the highest, and the same stepwise pattern ran through heart disease, most cancers, diabetes and self-rated health. Because even the lowest-grade civil servants were not poor in any absolute sense, something beyond poverty and beyond healthcare was producing the difference.',
      },
      {
        kind: 'para',
        text: 'The leading explanation is the control hypothesis: lower in a hierarchy means less control over what you do and when, more demands made on you by others, thinner buffers when things go wrong — and chronic activation of the stress physiology that the lesson Stress, Cortisol and the Body\'s Alarm System describes. The gradient has since been replicated in dozens of countries and administrative systems, which is what makes the finding structural rather than anecdotal. Its policy bite is uncomfortable: gains and losses do not concentrate only at the extremes, so interventions aimed solely at the worst-off miss most of the population\'s preventable disease, which lives in the middle of the distribution.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Trace one outcome upstream: a seven-year-old keeps arriving at the emergency department with asthma attacks. Start, as a clinician does, at the level of the individual: inflamed airways, a prescription, an inhaler.',
          'One step out: the home. She lives above a damp basement; mold spores and dust mites are known asthma triggers, and the attacks cluster after rain.',
          'Another step: the housing market. The family\'s income caps its options, and landlords in that bracket face little enforcement pressure to fix damp — the living condition is a product of conditions.',
          'Another: the neighborhood. The nearest affordable supermarket is two buses away, so meals lean on cheap processed food; the local roadway adds particulate load to the air she breathes daily.',
          'The structural layer: the wage level of her parents\' jobs, the availability of housing inspection, transit and clean-air rules — policy choices, made or unmade, that she never voted on.',
          'The lesson of the trace: the inhaler treats the attack, but the attacks are manufactured several floors up. Effective answers exist at every level — the clinician keeps prescribing, while the public-health answer works on the damp, the diet, the road and the rules.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'social determinants of health', def: 'The conditions in which people are born, grow, live, work and age, shaped by the distribution of money, power and resources.' },
          { term: 'social gradient', def: 'The stepwise decline in health and lifespan as socioeconomic position falls — present at every level, not only at poverty.' },
          { term: 'structural determinants', def: 'The deep layer: governance, policy, and the distribution of income and power that shapes all circumstances below it.' },
          { term: 'intermediate determinants', def: 'The circumstances structural forces generate: housing, work, food environments, neighborhoods and social support.' },
          { term: 'health inequity', def: 'A health difference that is systematic, avoidable and unfair — the moral category behind unequal life expectancy.' },
          { term: 'upstream intervention', def: 'Action taken at the causes of the causes — policy, housing, income — rather than at the resulting disease.' },
        ],
      },
      { kind: 'heading', text: 'Structural and Intermediate Layers — and What Can Be Done' },
      {
        kind: 'para',
        text: 'The most widely used visual model is the rainbow diagram drawn by Dahlgren and Whitehead in 1991: the individual at the center, then layers of personal lifestyle, then social and community networks, then living and working conditions, and outermost the broad economy and environment. The WHO\'s Commission on Social Determinants of Health sharpened it into a causal split: intermediate determinants — housing quality, occupational safety, food environments — do the daily damage, while structural determinants — governance, macroeconomic policy, the distribution of power and resources — set how those intermediates are handed out. That is why health follows status in rich and poor countries alike while the specific mechanisms differ: the outer layer redraws the inner ones wherever it operates.',
      },
      {
        kind: 'para',
        text: 'The Commission\'s final report organized action into three headings. Improve daily living conditions: housing, sanitation, education, early childhood, working conditions — the levers with the sturdiest evidence, from clean water and schooling to housing repair programs that measurably reduce asthma. Tackle the inequitable distribution of power, money and resources: progressive protection, fair labor rules, and the design of public services so that spending is proportionate to need. Measure and understand the problem: systems that track health by social group — because averages hide gradients, and unmeasured inequity never gets addressed. None of this demotes medicine; it repositions it. Clinical care is one ring of the rainbow, and the population\'s health is written largely in the rings around it.',
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The Whitehall studies mattered chiefly because they showed…',
            options: ['poverty always causes disease', 'a stepwise health gradient among people with equal healthcare access', 'that civil servants are unusually healthy', 'that hierarchy improves health'],
            answer: 1,
            explain: 'All participants had the same national health service, yet mortality fell with every employment grade — status and control, not access alone, drive the gradient.',
          },
          {
            q: 'In the determinants framework, housing quality and food environments are classified as…',
            options: ['structural determinants', 'intermediate determinants', 'genetic determinants', 'downstream clinical care'],
            answer: 1,
            explain: 'They are the intermediate layer — daily-life circumstances that structural forces like policy and income distribution generate and hand out.',
          },
          {
            q: 'The WHO\'s headline gap in life expectancy between high- and low-income countries is about…',
            options: ['two years', 'five years', 'ten years', 'eighteen years'],
            answer: 3,
            explain: 'The Commission-era figure is an eighteen-year gap — the largest single number in the social-determinants literature.',
          },
          {
            q: 'The Commission on Social Determinants of Health\'s third recommendation was to…',
            options: ['build more hospitals', 'measure and understand the problem, tracking health by social group', 'focus spending on the worst-off only', 'leave distribution to the market'],
            answer: 1,
            explain: 'Measurement is the third action area: averages hide gradients, and inequities that are never counted are never addressed.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read Health Systems: How Care Gets Organized and Paid For next to see how the one clinical ring of the rainbow is itself structured — who gets care, and who pays. Health Behavior and Medical Care shows the individual-level change models this lesson set in population context, and Herd Immunity and R0 opens the epidemiology toolkit for the patterns described here.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'health-systems-how-care-organized',
    title: 'Health Systems: How Care Gets Organized and Paid For',
    domain: 'Health & Wellness',
    field: 'Public Health',
    branch: 'Health Systems',
    tier: 'core',
    concepts: [
      'The WHO health system definition and its six building blocks',
      'Primary, secondary and tertiary care as a pyramid',
      'Financing: revenue collection, pooling, purchasing',
      'Beveridge, Bismarck, national health insurance and out-of-pocket models',
      'Fee-for-service versus capitation incentives',
      'Universal health coverage as coverage plus financial protection',
    ],
    words: 1421,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Two people with the same broken leg, the same cancer and the same doctor\'s competence can face wildly different fates depending on one invisible variable: the design of the health system around them. A health system, in the World Health Organization\'s definition, is everything whose primary purpose is to promote, restore or maintain health — hospitals and clinics, certainly, but also the workforce that staffs them, the information that guides them, the medicines that supply them, the money that flows through them, and the governance that steers them all. Whether a chest pain becomes a quick diagnosis or a bankrupting delay is usually decided by these arrangements, not by biology.',
      },
      {
        kind: 'para',
        text: 'This lesson makes that machinery visible in three passes. First the structure: the WHO\'s six building blocks and the care pyramid that sorts a sprained ankle from open-heart surgery. Then the money: where health financing comes from, how it is pooled, and how the payment method quietly shapes every clinician\'s incentives. Finally the trade-offs: the access-versus-quality-versus-cost triangle every real system navigates, and what universal health coverage does and does not promise. The math of risk pooling itself — premiums priced against pooled risk — is taught in the Finance book\'s lesson Insurance: Pooling Risk and Pricing It; this lesson keeps to the health side.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'In 2005 every World Health Organization member state signed on to universal health coverage — the goal that all people obtain the health services they need without suffering financial hardship. Two decades on, the WHO still reports that hundreds of millions are pushed into extreme poverty each year by health spending, and that roughly half the world lacks full coverage of essential services. Anyone who will ever choose an insurance plan, argue about a bill, or vote on health policy is operating this machinery — usually without a diagram.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Building Blocks and the Care Pyramid' },
      {
        kind: 'para',
        text: 'The WHO\'s framework names six building blocks a working system must have: service delivery; a health workforce in sufficient numbers and skill; health information systems that count births, deaths, outbreaks and outcomes; access to essential medicines and technologies; financing; and leadership and governance — the stewardship that sets rules and quality standards. Remove any block and the others underperform: brilliant surgeons are dangerous without reliable supply chains, and free clinics without staff or information are storefronts. Analysts use the blocks as a checklist for diagnosing why a system fails: a country with well-staffed facilities but no disease surveillance will miss its epidemics at the import stage.',
      },
      {
        kind: 'para',
        text: 'Within service delivery, care is arranged as a pyramid. At the wide base sits primary care — the generalist front door that handles the bulk of everyday need, continuity and prevention. The middle tier is secondary care: specialist services, usually on referral — a cardiologist, an imaging center. The apex is tertiary care: highly specialized, resource-hungry services such as neurosurgery, burns units and transplant centers. The design logic is triage by frequency: common problems should be resolvable cheaply at the base, and the scarce apex capacity should go to the rare problems that truly need it. Systems with strong primary care — gatekeeping, in the jargon — consistently show better outcomes per unit of spending; systems that let patients self-refer to the apex pay specialist prices for generalist problems.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Follow one visit through the machine: a teenager fractures a wrist on a Saturday. Trace every block it touches.',
          'Entry: the family starts at an urgent-care clinic — the primary tier — where a general practitioner examines and orders an X-ray: service delivery plus essential technology.',
          'Diagnosis and referral: the fracture is displaced, so the GP refers to a hospital orthopedist — the secondary tier — where a surgeon reduces and pins the wrist: workforce and referral pyramid in action.',
          'The money trail: the clinic and hospital submit claims to a payer — an insurance fund or a tax-financed agency — which reimburses them from pooled revenue collected through premiums or taxes: financing, the fifth block.',
          'The information trail: the visit enters records that feed the registry tracking fractures by age, place and mechanism — the surveillance data that later justifies a schoolyard safety program: information systems feeding governance.',
          'The failure contrast: in an out-of-pocket system, the same Saturday ends with a choice between unpayable bills and untreated wrist — the building blocks identical in principle, absent in financing. The difference between systems is not the medicine; it is the plumbing around it.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'primary care', def: 'The generalist front door of a system: first contact, continuity, prevention and the resolution of most everyday need.' },
          { term: 'referral', def: 'The managed step up the care pyramid from generalist to specialist services, keeping apex capacity for those who need it.' },
          { term: 'pooling', def: 'Collecting many people\'s contributions into one fund so that the healthy subsidize the sick and costs are not borne at the moment of illness.' },
          { term: 'fee-for-service', def: 'Payment per item of care delivered — an incentive to do more, which raises volume and cost.' },
          { term: 'capitation', def: 'Payment of a fixed sum per person per period regardless of use — an incentive to prevent and to economize, with a risk of undertreatment.' },
          { term: 'universal health coverage', def: 'The WHO-endorsed goal that everyone obtains needed health services without financial hardship from paying for them.' },
        ],
      },
      { kind: 'heading', text: 'Money: Where It Comes From and How It Pays' },
      {
        kind: 'para',
        text: 'Every rich-country system answers the same three financing questions — how money is raised, how it is pooled, and how it is spent — with a different accent. Beveridge systems, after Britain\'s postwar architect, raise healthcare from general taxation and deliver it largely free at use. Bismarck systems, after Germany\'s nineteenth-century chancellor, run on social insurance: mandatory contributions from employers and employees into nonprofit sickness funds. National health insurance systems, like Canada\'s, split the difference — public single-payer insurance covering medically necessary care, private delivery beneath it. The United States runs a mixed model of private employer insurance plus public programs, and much of the world\'s poorer half runs on out-of-pocket payment, the model in which a family\'s illness is financed from its pocket at the moment of catastrophe — the least protective arrangement, and the one universal coverage campaigns to retire.',
      },
      {
        kind: 'para',
        text: 'How providers are paid turns out to matter as much as who pays. Fee-for-service pays per activity, rewarding volume — more tests, more procedures — and is the classic engine of cost inflation. Capitation pays per enrolled patient per period, rewarding prevention and efficiency but risking undertreatment unless quality is monitored. Salary removes the volume incentive outright. Real systems blend these — a family doctor may be capitated with performance bonuses while the hospital is paid per case bundle — precisely because each method leaks. The World Health Organization\'s 2010 World Health Report framed the policy challenge as closing three gaps: more revenue for health, better pooling against risk, and purchasing that rewards outcomes rather than inputs. That is universal health coverage in operational form: not merely insurance cards, but services actually available and a guarantee that using them does not bankrupt the user.',
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The WHO\'s six building blocks include all of the following except…',
            options: ['health workforce', 'service delivery', 'pharmaceutical advertising', 'governance'],
            answer: 2,
            explain: 'The blocks are service delivery, workforce, information, essential medicines, financing and governance — advertising is not among them.',
          },
          {
            q: 'A German-style system of mandatory employer-and-employee contributions to nonprofit funds is called…',
            options: ['the Beveridge model', 'the Bismarck model', 'national health insurance', 'the out-of-pocket model'],
            answer: 1,
            explain: 'Bismarck systems pool risk through mandatory social insurance tied to employment; Beveridge systems pool through general taxation instead.',
          },
          {
            q: 'Under capitation, a clinic receives a fixed sum per patient per year. Its strongest built-in risk is…',
            options: ['overprescribing tests', 'undertreating to save cost', 'attracting too many healthy patients', 'inflating drug prices'],
            answer: 1,
            explain: 'Fixed payment rewards prevention and efficiency — and, unmonitored, invites skimping; that is why quality oversight accompanies it.',
          },
          {
            q: 'Universal health coverage, as WHO defines it, requires…',
            options: ['free hospitals for every citizen', 'coverage of every drug ever marketed', 'needed services plus protection from financial hardship', 'identical private insurance plans everywhere'],
            answer: 2,
            explain: 'UHC pairs actual availability of needed services with financial protection — coverage without hardship, not everything-for-free.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Read Social Determinants of Health next for why the same system delivers different outcomes to different neighborhoods, and Insurance: Pooling Risk and Pricing It in the Finance book for the mathematics beneath every premium. How Doctors Diagnose: History, Exam and the Differential shows the clinical craft this machinery exists to deliver, and Herd Immunity and R0 shows what happens when the population side of the ledger is left to run itself.',
        tone: 'path',
      },
    ],
  },
]

/**
 * Knowledge Universe — Medicines, First Aid & Reproductive Health — Chapter 03: Sexual & Reproductive Health
 * 2 lessons · ~2,806 words
 * field: Sexual & Reproductive Health
 * legacy sources: health-wellness.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Sexual & Reproductive Health]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 health-sexual-reproductive-health — Sexual and Reproductive Health: Cycles, Contraception and STIs
 *   03.2 repro-pregnancy-childbirth — Pregnancy and Childbirth: The Biology of Building a Baby
 */
import type { KnowledgeTopic } from '../../types'

export const medicinesEmergencyCareCh03: KnowledgeTopic[] = [
  {
    id: 'health-sexual-reproductive-health',
    title: 'Sexual and Reproductive Health: Cycles, Contraception and STIs',
    domain: 'Health & Wellness',
    field: 'Sexual & Reproductive Health',
    branch: 'Reproductive Health',
    tier: 'core',
    concepts: [
      'The menstrual cycle and its fixed anchor',
      'The fertility window and age-related decline',
      'How each contraception method works',
      'Typical versus perfect use effectiveness',
      'STIs: often silent, mostly treatable',
      'Testing windows and screening',
      'HIV today: treatment, prevention and U=U',
    ],
    words: 1511,
    readMins: 8,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'The World Health Organization defines sexual and reproductive health not as the absence of disease but as complete physical, emotional and social well-being in matters of reproduction and sexuality. This Sexual & Reproductive Health topic takes that definition seriously and sticks to the science: how the menstrual cycle actually runs, how each contraceptive method works and fails, what sexually transmitted infections do while nobody is looking, and when fertility deserves medical attention. Clinical, evidence-first, and free of both embarrassment and myth.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Contraception is used by most people for decades of their lives; STIs are among the most common infections on earth and frequently silent; and fertility questions dominate the health decisions of a typical adulthood. Yet these topics are learned from folklore more often than from evidence — with predictable consequences in unintended pregnancies, undiagnosed infections, and avoidable infertility.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The menstrual cycle runs 21 to 35 days in adults, orchestrated by the hormone feedback loops the endocrine anatomy lesson introduced. Its counterintuitive feature is which half varies: the follicular phase before ovulation can lengthen or shorten, but the luteal phase after it is close to fixed at fourteen days. Ovulation therefore lands about fourteen days before the next period, not fourteen after the last one — the detail every cycle-tracking misunderstanding flows from. No fertilized egg means the corpus luteum retires, progesterone falls, and the lining sheds: menstruation is the hormone system resetting, not the body "cleansing".',
      },
      {
        kind: 'para',
        text: 'Fertility is a window, not a switch. An egg survives twelve to twenty-four hours after ovulation; sperm remain viable in the reproductive tract for up to five days. Together they make roughly six fertile days per cycle, ending on ovulation day. For a healthy couple in their mid-twenties the chance of conception per cycle is about one in four — a number that drifts down with age, roughly halving from the twenties to the late thirties, which is why evaluation is suggested after twelve months of trying under 35, and after six months at 35 or older. Smoking, significant over- or underweight, and untreated conditions move the same dial.',
      },
      {
        kind: 'para',
        text: 'Contraception works by three mechanisms, alone or combined: preventing ovulation (hormonal methods), blocking sperm from reaching the egg (barriers and the copper intrauterine device, which also disables sperm chemically), and thinning the uterine lining or thickening cervical mucus so implantation or passage fails. Emergency contraception is not an abortifacient: its main mechanism is delaying ovulation, so it works before fertilization and does nothing to an established pregnancy. Sterilization — blocking or cutting the tubes — is permanent. The method menu is genuinely a menu: effectiveness, side effects and reversibility trade off differently for every user.',
      },
      {
        kind: 'para',
        text: 'Effectiveness comes in two honest versions. Perfect use assumes flawless, consistent use; typical use includes real humans. First-year pregnancy rates tell the story: implant and intrauterine devices under 1 percent either way, the pill about 7 percent in typical use versus near 0.3 in perfect use, condoms about 13 percent typically, withdrawal about 20, and no method about 85. The gap between the columns is a pure measure of adherence — and why long-acting reversible contraception, set once and forgotten, dominates real-world effectiveness rankings.',
      },
      {
        kind: 'para',
        text: 'Sexually transmitted infections share a dangerous talent: silence. Chlamydia, the most reported bacterial infection in many countries, produces no symptoms in most women and about half of men, while quietly inflaming the upper genital tract into pelvic inflammatory disease and infertility — yet it cures with a short antibiotic course (the antibiotics lesson explains why completing it matters). Gonorrhea follows the same pattern and is steadily outgunning drugs, as the antibiotic-resistance lesson documents. Syphilis, resurging after decades of decline, is easily treated early and devastating late. Testing, not symptoms, is the gateway to all three.',
      },
      {
        kind: 'para',
        text: 'The viral infections run on different rules. Human papillomavirus is so common that most sexually active people meet it; most clear it within two years, but persistent high-risk strains cause nearly all cervical cancer and a rising share of throat cancers — which is why the HPV vaccine, covered in the vaccines lesson, is genuinely a cancer vaccine. Herpes is common and manageable with antivirals. HIV has been transformed: antiretroviral therapy restores near-normal life expectancy, and a person on treatment with an undetectable viral load does not transmit the virus — the U=U finding, one of the strongest results in prevention science. Pre-exposure prophylaxis, a daily tablet, prevents over 99 percent of sexual acquisition when taken as prescribed.',
      },
      {
        kind: 'para',
        text: 'Screening ties it together. Guidelines typically recommend annual chlamydia and gonorrhea testing for sexually active people under 25 and risk-based testing after; HIV testing at least once for every adult, and more often with new partners; and cervical screening on the schedule local guidelines set. Modern tests close the window between infection and detection to weeks, and at-home kits have removed most of the remaining excuses. Two clinical footnotes worth knowing: disabling period pain is a treatable condition, not a rite of passage, and new erectile dysfunction can be an early vascular warning — the same endothelium the heart lesson discusses.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Pearl index',
        latex: 'PI = \\frac{\\text{pregnancies} \\times 12 \\times 100}{\\text{women} \\times \\text{months of exposure}}',
        meaning: 'Pregnancies per 100 women-years of use — the classic measure of contraceptive effectiveness, with lower numbers better.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a couple uses the pill with its typical-use failure of 7 percent per year. What is the chance of at least one pregnancy over ten years — and how does the implant compare at 0.1 percent?',
          'Recall the governing idea: yearly failure compounds across years, so the cumulative probability is one minus the survival probability raised to the number of years.',
          'Apply: for the pill, survival is 0.93 per year, and 0.93 to the tenth power is about 0.48 — so cumulative risk = 1 − 0.48 ≈ 52 percent. For the implant, 0.999 to the tenth is about 0.99, for a cumulative risk near 1 percent.',
          'State the result: over a decade, typical-use pill users face roughly a coin-flip chance of pregnancy while implant users face one in a hundred — the entire argument for long-acting methods compressed into two numbers.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Long-acting contraception access programs have sharply cut unintended pregnancy and abortion rates where deployed.',
          'HPV vaccination is driving cervical cancer toward projected elimination in countries with high coverage.',
          'PrEP rollouts concentrate prevention in the communities carrying the highest HIV incidence.',
          'At-home STI test kits and pharmacy screening normalize testing that clinics historically discouraged.',
          'Comprehensive relationship and sexuality education measurably delays initiation and reduces risk — the evidence runs opposite to common fear.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Using a cycle app as contraception is the modern classic: ovulation shifts cycle to cycle, and apps predict the past. Assuming "no symptoms" means "no infection" fails silently with chlamydia and HIV alike — testing is the only honest signal. Douching harms the vaginal microbiome the Life Sciences microbiome lesson describes, and does not prevent anything. Emergency contraception neither harms future fertility nor ends a pregnancy. And the STI conversation before a new relationship is a health tool, not an accusation.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Ovulation', def: 'Release of an egg, occurring about fourteen days before the next period, not after the last one.' },
          { term: 'Fertility window', def: 'The roughly six days per cycle when intercourse can conceive, ending on ovulation day.' },
          { term: 'Typical versus perfect use', def: 'Real-world versus flawless effectiveness of a contraceptive method.' },
          { term: 'LARC', def: 'Long-acting reversible contraception — implants and intrauterine devices — set once and effective for years.' },
          { term: 'Emergency contraception', def: 'A post-intercourse method that works mainly by delaying ovulation before fertilization.' },
          { term: 'U=U', def: 'Undetectable equals untransmittable: treated HIV with an undetectable viral load does not transmit sexually.' },
          { term: 'PrEP', def: 'Pre-exposure prophylaxis: daily medicine preventing over 99 percent of sexual HIV acquisition when taken as prescribed.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In a typical cycle, ovulation occurs:',
            options: ['always on day 14 of the cycle', 'about fourteen days before the NEXT period', 'exactly at the midpoint between periods', 'only during menstruation'],
            answer: 1,
            explain: 'The luteal phase is close to fixed at fourteen days, so ovulation is anchored backward — the detail cycle apps routinely get wrong.',
          },
          {
            q: 'The typical-use first-year failure rate of condoms is closest to:',
            options: ['2 percent', '13 percent', '35 percent', '60 percent'],
            answer: 1,
            explain: 'About 13 percent with typical use versus about 2 percent with perfect use — the gap is human, not latex.',
          },
          {
            q: 'Emergency contraception primarily works by:',
            options: ['ending an established pregnancy', 'delaying ovulation before fertilization', 'killing sperm already in the tract', 'thinning the uterine lining permanently'],
            answer: 1,
            explain: 'Its main mechanism is postponing the egg\'s release, so it acts before fertilization — which is why timing matters so much.',
          },
          {
            q: 'U=U means that a person with HIV who maintains an undetectable viral load on treatment:',
            options: ['is cured of HIV', 'cannot transmit the virus sexually', 'no longer needs medication', 'cannot be reinfected'],
            answer: 1,
            explain: 'Treatment to undetectable stops sexual transmission — prevention grounded in one of the field\'s strongest findings.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Pairs with the endocrine anatomy lesson for the cycle\'s hormones, the vaccines lesson for HPV, and the antibiotic-resistance lesson for gonorrhea\'s trajectory. Next: pregnancy and childbirth basics, fertility treatment science, and the public-health design of screening programs. Educational, not medical advice.',
        tone: 'path',
      },
    ],
  },
  {
    id: "repro-pregnancy-childbirth",
    title: "Pregnancy and Childbirth: The Biology of Building a Baby",
    domain: "Health & Wellness",
    field: "Sexual & Reproductive Health",
    branch: "Making People",
    tier: "core",
    concepts: [
      "From fertilization to implantation",
      "hCG and the pregnancy test",
      "Trimesters and the teratogen window",
      "The placenta as a fetal organ",
      "Maternal physiology in overdrive",
      "The three stages of labor",
      "Newborn transition and lactation",
    ],
    words: 1295,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "In about forty weeks a single cell becomes a crying, breathing, trillion-celled human, and the mother's body — blood volume, heart output, lungs, kidneys, joints — is rebuilt to sustain it. Pregnancy is not a disease; it is physiology pushed to its design limits, which is why it can go wrong in specific, recognizable ways. This lesson covers gestation and birth — the cycle machinery that precedes it belongs to the reproductive-health lesson, the embryo's patterning logic to developmental biology.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Roughly 140 million babies are born each year, and about 800 women die daily from pregnancy and childbirth — almost all preventably, making maternal mortality the starkest inequity in global health. Knowing the normal timeline is how the abnormal gets caught early: pre-eclampsia before it seizes, gestational diabetes before the infant grows too large.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Fertilization happens in the fallopian tube's widest reach, where one sperm fuses with the egg. The zygote divides as it travels — two cells, four, a mulberry-shaped morula, then a hollow blastocyst — and about five to six days after fertilization it embeds in the prepared lining of the uterus. Its first endocrine act: the cells destined to become placenta secrete human chorionic gonadotropin, hCG, rescuing the ovary's corpus luteum so progesterone keeps the lining alive. Pregnancy tests are hCG detectors; the hormone doubles roughly every 48 hours in early healthy pregnancies — a rise clinicians read.",
      },
      {
        kind: "para",
        text: "The first trimester is assembly. Weeks three to eight — organogenesis — lay down every organ system, and it is the window of maximal vulnerability: the neural tube closes by about day 28, usually before a positive test, which is why folic acid must precede conception; rubella, alcohol and thalidomide did their historic damage here. The second is growth: movement felt between 16 and 22 weeks, viability under intensive care from about 22 to 24. The third is maturation: the brain triples in weight and the lungs ready their surfactant, the molecule premature infants lack and medicine supplies.",
      },
      {
        kind: "para",
        text: "The placenta is a fetal organ masquerading as afterbirth: its microscopic villi present roughly ten square meters where maternal and fetal blood exchange without ever mixing. It delivers oxygen and nutrients, removes waste, and doubles as an endocrine gland — progesterone, estrogen, and human placental lactogen, which induces maternal insulin resistance to divert glucose to the fetus. Gestational diabetes is what happens when the mother's beta cells cannot compensate; and the whole half-foreign graft is immune-tolerated — immunology's daily miracle.",
      },
      {
        kind: "para",
        text: "Maternal physiology runs hot. Blood volume expands 40 to 50 percent, cardiac output rises by a third, and heart rate climbs ten to twenty beats, while red cells lag plasma — the dilutional physiological anemia of normal pregnancy. Kidneys filter 50 percent more blood; progesterone makes breathing deeper, not faster, blowing off carbon dioxide for the fetus. Relaxin loosens ligaments for passage. Most pregnancy symptoms are these adaptations felt from inside.",
      },
      {
        kind: "para",
        text: "Labor opens with contractions that efface and dilate the cervix — the first stage, the longest: latent for hours to days, then active dilation at roughly a centimeter an hour. The second stage is delivery: the fetal head rotates to negotiate the pelvis's curve; pushing runs minutes to hours. The third delivers the placenta, usually within half an hour. What initiates labor remains partly unknown — a fetal lung signal and uterine inflammation lead the candidates — but the toolkit is old: oxytocin induces, prostaglandins ripen the cervix, epidurals blunt the pain lesson's transmission at its root.",
      },
      {
        kind: "para",
        text: "Birth is the newborn's fireworks of transitions. The first breath inflates the alveoli and surfactant keeps them open; pressure shifts close the heart's fetal shunts, rerouting blood to the new lungs; brown fat begins burning heat within hours. Lactation then couples mother to infant by demand: prolactin makes milk, oxytocin ejects it — the same hormone that drove labor. Colostrum comes first, antibody-rich; mature milk by day three to five, its supply set by removal, so feeding frequency is the dial. The Apgar score at one and five minutes summarizes the transition.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Naegele's rule",
        latex: "\\mathrm{EDD} = \\mathrm{LMP} - 3\\ \\mathrm{months} + 7\\ \\mathrm{days} + 1\\ \\mathrm{year}",
        meaning: "The estimated due date from the last menstrual period — an estimate the first ultrasound then corrects, since ovulation drifts.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: a woman with textbook 28-day cycles reports her last period began April 10, 2026 — when is the baby due, and why might ultrasound disagree?",
          "Recall the governing idea: Naegele's rule adds 280 days to the last period, assuming ovulation on day 14 — the cycle lesson's variable follicular phase in reverse.",
          "Apply: April 10 minus three months is January 10, 2027; plus seven days gives January 17, 2027. If her cycles run 35 days, ovulation was about a week later, and the first-trimester scan will nudge the date toward January 24.",
          "State the result: January 17 is a center of probability, not a deadline — roughly four in a hundred babies arrive on the date itself, and the median is a few days after it.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Prenatal schedules time the screening: aneuploidy tests in the first trimester, glucose tolerance at 24 to 28 weeks.",
          "Folic-acid fortification of flour cut neural tube defects by a third or more wherever it was adopted.",
          "Antenatal corticosteroids for preterm birth mature fetal lungs — among the cheapest lifesavers in medicine.",
          "Labor analgesia ranges from nitrous oxide to epidurals, trading some pushing efficiency for pain control.",
          "Skin-to-skin contact and early breastfeeding improve newborn temperature, glucose and feeding success.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The folklore: eating for two (the third-trimester extra is roughly 450 calories — a peanut-butter sandwich and milk, not a second dinner); morning sickness signals a healthy pregnancy (weakly true at best — its severe form is dangerous); a due date is a deadline (it is a center of probability); small amounts of alcohol are fine (no safe threshold has ever been established). The deepest pitfall is romanticizing unassisted birth — childbirth before modern care killed about one percent of mothers per birth, a cumulative risk traditional societies organized themselves around.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "hCG", def: "Human chorionic gonadotropin — the corpus-luteum-rescuing hormone every pregnancy test detects." },
          { term: "Organogenesis", def: "Weeks three to eight, when organs form and vulnerability to teratogens peaks." },
          { term: "Placenta", def: "The fetal organ of exchange and hormone production; maternal and fetal blood never mix." },
          { term: "Gestational diabetes", def: "Pregnancy-induced insulin resistance outpacing the mother's insulin supply." },
          { term: "Physiological anemia", def: "The dilutional anemia of normal pregnancy as plasma outpaces red cells." },
          { term: "Oxytocin", def: "The contraction-and-letdown hormone, inducible as a drug." },
          { term: "Colostrum", def: "The first, antibody-dense milk preceding the mature supply." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "hCG's job in early pregnancy is to:",
            options: ["mature the fetal lungs", "rescue the corpus luteum so progesterone continues", "induce labor at term", "suppress the mother's appetite"],
            answer: 1,
            explain: "The blastocyst's hormone keeps the ovary's corpus luteum alive until the placenta makes its own progesterone.",
          },
          {
            q: "Folic acid must start before conception because:",
            options: ["the neural tube closes by about day 28", "taste aversions begin later", "iron blocks absorption in the third trimester", "it stores poorly in the body"],
            answer: 0,
            explain: "The tube closes before most tests turn positive — later supplementation misses the window.",
          },
          {
            q: "Gestational diabetes follows directly from:",
            options: ["the mother eating sugar", "placental lactogen inducing insulin resistance", "fetal insulin production", "excess amniotic fluid"],
            answer: 1,
            explain: "The placenta's hormone diverts glucose to the fetus; diabetes appears when the mother's beta cells cannot keep up.",
          },
          {
            q: "The third stage of labor is:",
            options: ["cervical dilation", "the delivery of the baby", "delivery of the placenta", "the first breastfeed"],
            answer: 2,
            explain: "Dilation, then delivery, then the placenta — usually within half an hour of the baby.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Pairs with the reproductive-health lesson for cycles and contraception, and developmental biology for embryo patterning. Follow with the diabetes lesson for the gestational branch and the pain lesson for labor analgesia. Next: pre-eclampsia, the microbiome of birth, and infertility and IVF.",
        tone: "path",
      },
    ],
  },
]

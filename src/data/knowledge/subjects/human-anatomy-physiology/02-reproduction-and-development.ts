/**
 * Knowledge Universe — Human Anatomy & Physiology — Chapter 02: Reproduction & Development
 * 1 lesson · ~2,019 words
 * field: Human Physiology
 * legacy sources: life-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Reproductive Biology]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 bio-human-reproduction-system — Human Reproduction: Systems, Gametes and the Menstrual Cycle
 */
import type { KnowledgeTopic } from '../../types'

export const humanAnatomyPhysiologyCh02: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'bio-human-reproduction-system',
    title: 'Human Reproduction: Systems, Gametes and the Menstrual Cycle',
    domain: 'Life Sciences',
    field: 'Human Physiology',
    branch: 'Reproductive Biology',
    tier: 'core',
    concepts: [
      'The male tract and its hormones',
      'Spermatogenesis to spermiohistology',
      'Oogenesis: meiosis on hold twice',
      'The four phases of the menstrual cycle',
      'Fertilization to implantation',
      'Pregnancy and parturition basics',
      'Contraception classes',
      'STIs and assisted reproduction',
    ],
    words: 2019,
    readMins: 9,
    addedOn: '2026-10-20',
    blocks: [
      {
        kind: 'para',
        text: 'Human reproduction is the syllabus’s most hormonal chapter: a monthly clock in the female, a continuous pipeline in the male, and a health layer — contraception, infections, assisted reproduction. NCERT devotes Class 12 chapters 3 and 4 to exactly this ground. The anatomy lesson in this library walks the organs and builds the embryo; this companion pass covers what that one defers: gametogenesis, the cycle’s endocrine choreography, fertilization to implantation, pregnancy and birth, and reproductive health.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Cycle-hormone questions, contraception classes and ART abbreviations are near-guaranteed NEET and CUET items — and clinical daily life: family planning, infertility workups, cervical-cancer vaccination.',
        tone: 'insight',
      },
      {
        kind: 'callout',
        title: 'How to read this pair',
        text: '“Reproduction and the Making of a Human” covers organ anatomy, embryology and fetal circulation; this lesson covers the hormone interplay of gametogenesis and the cycle, plus the reproductive-health toolkit — contraception, STIs, ART.',
        tone: 'path',
      },
      { kind: 'heading', text: 'The Male System and Spermatogenesis' },
      {
        kind: 'para',
        text: 'The male system is a factory line. Paired testes descend into the scrotum, running sperm production a couple of degrees below core temperature; inside, coiled seminiferous tubules are the production floor, Sertoli cells nursing developing sperm behind the blood–testis barrier while interstitial Leydig cells secrete testosterone outside the tubules. Sperm mature in the epididymis, travel the ductus deferens, and gather fructose-rich seminal-vesicle fluid, alkaline prostatic secretion and bulbourethral mucus — the anatomical lesson details it all.',
      },
      {
        kind: 'para',
        text: 'Spermatogenesis is a division pipeline. Diploid spermatogonia renew by mitosis at the tubule wall; a committed cell grows into a primary spermatocyte, whose meiosis I yields two secondary spermatocytes and whose meiosis II yields four haploid spermatids. Spermiogenesis then reshapes each spermatid without further division — compact acrosome-capped head, neck, mitochondria-helixed middle piece, flagellum — the whole run about 64 days. The throttle is hormonal: hypothalamic GnRH drives pituitary FSH onto Sertoli cells and LH onto Leydig cells; testosterone and Sertoli-cell inhibin close the loop by negative feedback. A normal ejaculate delivers 200–300 million sperm in a few milliliters; counts below about 20 million per milliliter impair fertility.',
      },
      { kind: 'heading', text: 'The Female System and Oogenesis' },
      {
        kind: 'para',
        text: 'Female anatomy is an itinerary: paired ovaries holding the lifetime stock of follicles; fallopian tubes whose funnel-shaped infundibulum and fimbriae sweep the released oocyte and whose ampulla is the usual fertilization site; the thick-walled uterus with endometrium, myometrium and cervix; the vagina and external genitalia; and the milk-producing mammary glands.',
      },
      {
        kind: 'para',
        text: 'Oogenesis begins astonishingly early. In fetal life, oogonia multiply and commit to meiosis as primary oocytes, arresting in prophase I inside primordial follicles — one to two million at birth, of which only some 400 will ever ovulate. From puberty, one dominant follicle per cycle takes the story forward: just before ovulation the LH surge completes meiosis I asymmetrically, casting nearly all cytoplasm to the secondary oocyte and almost none to the first polar body. The secondary oocyte arrests again in metaphase II — that is what ovulation releases. Meiosis II finishes only if a sperm penetrates, producing the ovum and a second polar body. One gamete per cycle, every cycle: the female budget is spent in fetal life, never renewed.',
      },
      { kind: 'heading', text: 'The Menstrual Cycle: A Hormone Opera in Four Acts' },
      {
        kind: 'para',
        text: 'One cycle averages 28 days (21–35 is clinically normal), counted from day 1 of bleeding. The ovaries run follicular and luteal phases; the uterus runs a parallel menstrual, proliferative and secretory script; four hormones conduct — FSH, LH, estrogen and progesterone — with the pituitary listening to the ovaries the whole time.',
      },
      {
        kind: 'para',
        text: 'Act one, the menstrual phase, days 1–5. With no embryo to rescue it, the previous cycle’s corpus luteum has regressed, progesterone and estrogen have collapsed, spiral arteries clamp shut, and the endometrium’s functional layer sheds over three to five days, with prostaglandin-driven cramps. Low hormone levels now release FSH from negative feedback — quietly starting the next cycle inside this one.',
      },
      {
        kind: 'para',
        text: 'Act two, the follicular (proliferative) phase, days 1–13. Rising FSH recruits a cohort of follicles; the dominant one builds the machinery of estrogen production — theca cells under LH supply androgens, granulosa cells under FSH aromatize them to estrogen. Estrogen rebuilds the endometrium: glands, stroma and spiral arteries proliferate.',
      },
      {
        kind: 'para',
        text: 'Act three, ovulation, about day 14 of a textbook cycle. Sustained high estrogen crosses a threshold and flips the pituitary from negative to positive feedback — the LH surge erupts about 24–36 hours before ovulation. It completes meiosis I, loosens follicle-wall collagen, and the follicle bursts: the secondary oocyte, wrapped in corona radiata cells, is swept into the tube. Clear stretchy cervical mucus and a small rise in basal temperature are the visible signatures.',
      },
      {
        kind: 'para',
        text: 'Act four, the luteal (secretory) phase, days 15–28. The spent follicle becomes the corpus luteum, maintained by LH, pumping progesterone (peaking near day 21) plus estrogen. The endometrium turns secretory — glycogen-rich glands ready to feed an implanting embryo; basal temperature stays up about half a degree; cervical mucus thickens; progesterone’s negative feedback keeps FSH, LH and new follicles suppressed. If no blastocyst implants, human chorionic gonadotropin never arrives to rescue the luteum: it degenerates, hormones crash, and act one returns. The luteal phase is the fixed half of the cycle — almost always 14 days — the practical formula for predicting ovulation.',
      },
      {
        kind: 'formula',
        name: 'Predicting ovulation day',
        latex: '\\text{ovulation day} \\approx \\text{cycle length} - 14',
        meaning: 'The follicular phase varies with cycle length; the luteal phase barely does — so a 32-day cycle ovulates near day 18 and a 26-day cycle near day 12.',
      },
      { kind: 'heading', text: 'From Fertilization to Implantation' },
      {
        kind: 'para',
        text: 'The anatomy lesson’s account, compressed: sperm remain viable three to five days, the oocyte less than one, so the fertile window opens days before ovulation. In the ampulla, capacitated sperm digest through corona and zona (the acrosomal reaction); one fuses, the cortical reaction hardens the zona against polyspermy — and that fusion completes meiosis II. Pronuclei merge into the zygote; cleavage yields morula then blastocyst, which implants around day 6–7, its trophoblast announcing itself with human chorionic gonadotropin — the hormone every pregnancy test reads — rescuing the corpus luteum until the placenta takes over.',
      },
      { kind: 'heading', text: 'Pregnancy and Parturition' },
      {
        kind: 'para',
        text: 'Pregnancy averages 38 weeks from fertilization (about 280 from the last period). The first trimester is organogenesis — the neural tube closes by about day 28, usually before a test turns positive, which is why folate must precede conception; the second brings growth and, by weeks 16–20, felt movement; the third matures lung surfactant and adds most fetal weight. The placenta is exchange organ and endocrine gland in one — hCG, human placental lactogen, estrogens, progesterone, relaxin. Labor is positive feedback’s final job: fetal cortisol and rising estrogen sensitize the uterus, oxytocin drives contractions, cervical stretch calls for more oxytocin, and the cascade runs through dilation, delivery and placental expulsion — parturition. The anatomy lesson carries the fetal side.',
      },
      { kind: 'heading', text: 'Reproductive Health' },
      {
        kind: 'para',
        text: 'Contraception is tiered by mechanism. Natural methods work with the cycle: periodic abstinence banks on the ovulation formula and the sperm window; lactational amenorrhea works only in the first six months of exclusive breastfeeding. Barriers block the meeting — condoms, diaphragms, cervical caps, spermicides — and condoms alone also block sexually transmitted infections. Intrauterine devices sit in the uterus: copper IUDs such as Cu-T release spermicidal copper ions and are the most effective long-acting reversible option; hormonal IUDs thicken cervical mucus. Hormonal methods mimic pregnancy’s profile — combined pills, progestin-only pills, injections, implants; India’s Saheli is the non-steroidal once-a-week oral contraceptive. Sterilization is permanent: vasectomy interrupts the ductus deferens; tubectomy seals the fallopian tubes.',
      },
      {
        kind: 'para',
        text: 'Sexually transmitted infections split by agent: bacterial — gonorrhea, syphilis, chlamydia; viral — HIV/AIDS, genital herpes, hepatitis B; protozoan — trichomoniasis. Many are asymptomatic in one partner yet transmissible, which is why screening matters; condoms are the only mechanical barrier; and two are vaccine-preventable — hepatitis B and HPV, whose persistent infection causes most cervical cancer. HIV travels through blood, sexual contact and the placenta.',
      },
      {
        kind: 'para',
        text: 'Assisted reproduction, one line each. IVF-ET fertilizes oocytes with sperm in the dish and transfers the early embryo to the uterus — the “test-tube baby” protocol that began with Louise Brown in 1978. ZIFT moves the laboratory zygote into the fallopian tube; GIFT places washed gametes, oocyte and sperm, into the tube for in-vivo fertilization when at least one tube is healthy. ICSI injects a single sperm for severe male-factor infertility; IUI delivers washed semen past the cervix. Success tops 40 percent per cycle under age 35 and falls steeply after 40.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Dating the Fertile Window',
        steps: [
          'Identify what is asked: a woman with reliably regular 32-day cycles, last period starting March 1 — when does she ovulate, and when is the fertile window?',
          'Recall the fixed half: the luteal phase runs about 14 days in nearly every cycle; the follicular phase absorbs cycle-length differences.',
          'Compute: ovulation day ≈ 32 − 14 = day 18, around March 18–19.',
          'Build the window: sperm survive three to five days and the oocyte under a day — so roughly March 14 through March 19 is fertile.',
          'Caveat: the arithmetic assumes regular cycles; stress and illness shift the follicular phase — why rhythm methods fail in real use and clinics track LH surges or follicle ultrasound for precision.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Combined pills discipline the cycle by holding hormones steady — the same logic used against endometriosis and severe acne.',
          'Labor is induced or augmented with oxytocin and prostaglandins; ectopic pregnancy (implantation in the tube) is the emergency behind first-trimester pain with bleeding.',
          'Home LH tests time ovulation for fertility treatment, and hCG is monitored as an early-pregnancy and tumor marker.',
          'HPV vaccination programs aim to push cervical cancer toward elimination.',
          'IVF success rates by age drive counseling and family timing choices.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The exam traps: the LH surge precedes ovulation by about a day — the surge is not ovulation. Meiosis II of the oocyte completes at fertilization, not at ovulation. Fertilization happens in the ampulla; implantation follows about a week later in the uterus. The corpus luteum’s product is progesterone — no luteum, no early pregnancy. And only barrier contraception, condoms, protects against STIs.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Spermiogenesis', def: 'The division-free remodeling of round spermatids into headed, tailed sperm.' },
          { term: 'LH surge', def: 'The mid-cycle burst of luteinizing hormone, triggered by high estrogen, that completes meiosis I and causes ovulation.' },
          { term: 'Corpus luteum', def: 'The progesterone-secreting gland formed from the ovulated follicle, rescued by hCG if pregnancy begins.' },
          { term: 'Endometrium', def: 'The uterine lining that proliferates and turns secretory each cycle and sheds as menses.' },
          { term: 'Luteal phase', def: 'The post-ovulatory, progesterone-dominated fortnight — the fixed half of the cycle.' },
          { term: 'Vasectomy', def: 'Surgical sterilization by interrupting the ductus deferens — sperm made, never delivered.' },
          { term: 'Cu-T', def: 'The copper intrauterine device: spermicidal copper ions, long-acting and hormone-free.' },
          { term: 'ZIFT', def: 'Zygote intrafallopian transfer — the lab zygote placed into the tube for the journey it would normally make.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The mid-cycle LH surge causes all of these EXCEPT:',
            options: ['completion of oocyte meiosis I', 'rupture of the follicle (ovulation)', 'immediate shedding of the endometrium', 'luteinization of the follicle remnant'],
            answer: 2,
            explain: 'Shedding is the low-hormone event two weeks away; the surge completes meiosis I, ovulates the follicle and founds the corpus luteum.',
          },
          {
            q: 'Meiosis II of the human oocyte is completed:',
            options: ['just before ovulation', 'only when a sperm penetrates the cell', 'during fetal life', 'at menopause'],
            answer: 1,
            explain: 'The secondary oocyte leaves the ovary arrested in metaphase II; sperm entry triggers the finishing division and the second polar body.',
          },
          {
            q: 'In a regular 35-day cycle with a 14-day luteal phase, ovulation is expected near day:',
            options: ['14', '17', '21', '28'],
            answer: 2,
            explain: 'Ovulation day ≈ cycle length − 14, so 35 − 14 = day 21: the variable follicular phase takes the extra week.',
          },
          {
            q: 'Which technique places a laboratory zygote into the fallopian tube?',
            options: ['GIFT', 'ZIFT', 'IUI', 'ICSI'],
            answer: 1,
            explain: 'ZIFT transfers the zygote; GIFT transfers unfertilized gametes; IUI delivers washed semen into the uterus; ICSI injects one sperm into the oocyte.',
          },
        ],
      },
      {
        kind: 'para',
        text: 'The reproductive system is the only one whose product is a different organism, and its physiology reads like a script: FSH opens, estrogen builds, the LH surge breaks, progesterone holds, and either hCG extends the show or the curtain falls. Add the health layer — contraception matched to mechanism, infection prevention, the ART ladder — and the chapter is exam-complete. Continue to the anatomy lesson for embryology and the endocrine lesson for the full hormonal axis.',
      },
    ],
  },
]

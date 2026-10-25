import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X48 pass (2026-10-25): the all-subjects discipline split.          */
/*                                                                     */
/*  USER RULE (verbatim intent): "do such type of things all           */
/*  subjects." Every remaining multi-discipline volume is split into   */
/*  discipline books (see subject-taxonomy.ts USER RULE 4): Law (7),   */
/*  Economics (5), History (5), Political Science (4), Business &     */
/*  Management (4), Environmental Science (3) + Urban Studies,         */
/*  Everyday Life Skills (6), Civil Engineering (4), Accounting (2),  */
/*  Medicine & Treatment (3). This pass authors the lessons the thin  */
/*  new books need to meet the ≥2 chapters / ≥3 lessons minimum:      */
/*                                                                     */
/*    International Law (+1)       courts, organizations & sea law     */
/*    Economic History (+1)        the great divergence                */
/*    Transportation Eng. (+1)     traffic flow theory                 */
/*    Garden & Growing (+1)        plant propagation                   */
/*                                                                     */
/*  Sources read for grounding:                                        */
/*  - Charter of the United Nations (1945) and the Statute of the      */
/*    International Court of Justice, Article 38 — un.org              */
/*  - Rome Statute of the International Criminal Court (1998, in      */
/*    force 2002): jurisdiction and complementarity — icc-cpi.int     */
/*  - United Nations Convention on the Law of the Sea (1982, in force  */
/*    1994): territorial sea, contiguous zone, EEZ, continental shelf  */
/*    — un.org/depts/los                                               */
/*  - ICRC, "The Geneva Conventions of 1949 and their Additional      */
/*    Protocols" — icrc.org                                            */
/*  - Kenneth Pomeranz, "The Great Divergence" (Princeton UP, 2000);  */
/*    the Maddison Project database of historical GDP estimates;      */
/*    EH.net Encyclopedia (economic history survey articles)           */
/*  - Bruce Greenshields (1935), the linear speed–density model;      */
/*    Lighthill & Whitham (1955) and Richards (1956), kinematic wave  */
/*    theory; F. V. Webster (1958), optimal signal cycle time;        */
/*    Highway Capacity Manual level-of-service concept (A–F)          */
/*  - Royal Horticultural Society, propagation advice (cuttings,      */
/*    layering, division, grafting) — rhs.org.uk; LibreTexts          */
/*    Horticulture, propagation chapter; NCERT biology for tissue     */
/*    culture context — ncert.nic.in                                   */
/*                                                                     */
/*  DEDUP CARVING (verified against dedup.ts and live topics):         */
/*  - law-international-order-courts: the treaty lifecycle and VCLT    */
/*    regime are owned by law-vienna-convention-treaties; human rights */
/*    machinery by the human-rights lesson; countermeasures and       */
/*    compliance are owned there too. This lesson owns the INSTITUTIONS */
/*    (ICJ structure/jurisdiction, ICC vs ICJ, UNCLOS zones, Geneva   */
/*    Conventions/IHL) — verified by grep: no existing lesson covers   */
/*    UNCLOS maritime zones, the Rome Statute or the ICJ's Article 38. */
/*  - hist-great-divergence: the British Industrial Revolution         */
/*    narrative is owned by hum-industrial-revolution; the Silk Roads  */
/*    by hum-silk-road-exchange; Malthusian population dynamics by the */
/*    demographic-transition lesson (one pitfall mention only). This   */
/*    lesson owns the comparative WHY-EUROPE-FIRST debate (Pomeranz,   */
/*    coal-and-colonies, institutional explanations, reversal).        */
/*  - eng-traffic-flow-theory: highway geometric design (sight         */
/*    distance, superelevation, pavement) is owned by the highway     */
/*    engineering lesson in x19-civil-core; cant/superelevation on     */
/*    railways by the railway lesson in engineering.ts. This lesson    */
/*    owns traffic flow theory (fundamental diagram, shockwaves, LOS,  */
/*    signal timing) — verified by grep: Greenshields/fundamental      */
/*    diagram/shockwave appear nowhere else.                           */
/*  - grow-plant-propagation: composting and soil blends are owned by  */
/*    every-composting; photosynthesis and plant physiology by the     */
/*    Botany subject; agricultural soil health and crop breeding by    */
/*    the Agriculture & Food Systems subject. This lesson owns the     */
/*    propagation crafts (seed dormancy, cuttings, layering, division, */
/*    grafting, tissue culture) — verified by grep.                    */
/* ------------------------------------------------------------------ */

export const x48AllSubjectsSplitPassTopics: KnowledgeTopic[] = [
  {
    id: 'law-international-order-courts',
    title: 'Courts, Organizations and the Law of the Sea: How International Order Is Built',
    domain: 'Law & Governance',
    field: 'International Law',
    branch: 'Institutions & Dispute Settlement',
    tier: 'intermediate',
    concepts: [
      'The United Nations Charter system and its principal organs',
      'The International Court of Justice: composition, contentious and advisory jurisdiction',
      'Article 38 of the ICJ Statute: the classic list of sources',
      'The International Criminal Court vs the ICJ: individuals, not states',
      'The Rome Statute crimes and the complementarity principle',
      'UNCLOS maritime zones: territorial sea, contiguous zone, EEZ, continental shelf, high seas',
      'The Geneva Conventions and international humanitarian law',
    ],
    words: 1698,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'International law has no world government, no global police and no legislature that can bind an unwilling great power. What it has instead is an architecture of courts, organizations and conventions — a system built mostly since 1945 in which states consent, in advance and in writing, to rules and to the bodies that interpret them. This lesson walks through that architecture: the United Nations system, the two great courts at The Hague, the law of the sea, and the humanitarian law of armed conflict. Knowing how these pieces fit together is what turns a list of treaties into a mental map of world order.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Headline events — a maritime standoff, a war-crimes warrant, a judgment on a border dispute — are unreadable without this machinery. Every dispute between states that reaches a courtroom passes through one of the institutions in this lesson, and their jurisdictional tricks (consent, complementarity, zone boundaries) decide who can sue whom, and win.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Charter System' },
      {
        kind: 'para',
        text: 'The United Nations was founded by the Charter of 1945, a treaty that functions as the constitution of the organized world order. Its six principal organs include the General Assembly, where every member state has one vote; the Security Council, whose fifteen members include five permanent ones wielding the veto and whose decisions on peace and security are the only UN outputs that are formally binding on all members; the Secretariat; the Economic and Social Council; the Trusteeship Council, now dormant; and the International Court of Justice, the principal judicial organ. The Charter\'s core principles — sovereign equality of members, prohibition on the use of force except in self-defence or with Council authorization, and non-intervention — are the background rules against which everything else in this lesson is read.',
      },
      {
        kind: 'para',
        text: 'Around the principal organs orbits a wider family: specialized agencies like the World Health Organization and the International Labour Organization, treaty bodies that monitor compliance with human-rights conventions, and the international financial institutions. None of these can legislate for the world. What they can do is pool state consent into standing institutions, so that cooperation does not have to be reinvented for every crisis.',
      },
      { kind: 'heading', text: 'The International Court of Justice' },
      {
        kind: 'para',
        text: 'The ICJ sits at the Peace Palace in The Hague, with fifteen judges elected for nine-year terms by the General Assembly and Security Council voting separately. Its jurisdiction is the part everyone trips over: the court is not a supreme court of the world, because states must consent to be sued. Consent can be given in advance, by a declaration under Article 36(2) of the ICJ Statute accepting the court\'s compulsory jurisdiction — dozens of states have made such declarations, many with sweeping reservations — or case by case through a special agreement, or through a compromissory clause in a treaty. Once jurisdiction attaches, the judgment is final and binding on the parties, and Article 94 of the Charter says the Security Council may step in if a party fails to comply — which is why compliance, in practice, runs on reciprocity and reputation more than enforcement.',
      },
      {
        kind: 'para',
        text: 'The court also issues advisory opinions when authorized UN organs ask — the General Assembly and the specialized agencies, never private parties. Advisory opinions are formally non-binding yet often settle the law\'s direction on questions from the legality of nuclear weapons to the consequences of separation walls.',
      },
      {
        kind: 'para',
        text: 'What law does the ICJ apply? Article 38 of its Statute gives the classic formulation: international conventions; international custom, as evidence of a general practice accepted as law; the general principles of law recognized by civilized nations; and, as subsidiary means, judicial decisions and the teachings of the most highly qualified publicists. Generations of students have memorized this list because it is the working definition of international law itself.',
      },
      { kind: 'heading', text: 'The International Criminal Court' },
      {
        kind: 'para',
        text: 'The ICC answers a different question. The ICJ adjudicates disputes between states; the ICC, created by the Rome Statute of 1998 and in force since 2002, prosecutes individuals for the gravest international crimes: genocide, war crimes, crimes against humanity and the crime of aggression. Its jurisdiction is not universal — it covers crimes committed on the territory or by nationals of states parties, or situations referred by the Security Council, or by a state accepting jurisdiction ad hoc — and it is governed by complementarity: the court may act only when national courts are unwilling or genuinely unable to prosecute. That principle makes the ICC a court of last resort, designed to complement, not replace, national systems.',
      },
      {
        kind: 'para',
        text: 'Keep the two Hagues apart with one sentence: the ICJ is states versus states about legal rights; the ICC is prosecutors versus individuals about criminal guilt. Mixing them up is the single most common error in introductions to international law.',
      },
      { kind: 'heading', text: 'The Law of the Sea' },
      {
        kind: 'para',
        text: 'The United Nations Convention on the Law of the Sea, adopted in 1982 and in force since 1994, is the constitution of the oceans, and it divides the sea into zones with surgical precision. The territorial sea extends up to twelve nautical miles from the baselines: there the coastal state exercises sovereignty, subject only to the right of innocent passage for foreign ships. Beyond it, the contiguous zone runs to twenty-four nautical miles, where the state may enforce customs, fiscal, immigration and sanitary laws. The exclusive economic zone reaches two hundred nautical miles, giving the state sovereign rights over living and non-living resources — fisheries, oil, gas — but not full sovereignty; navigation and overflight remain free. The continental shelf, the natural prolongation of the landmass, may extend beyond the economic zone up to defined limits, carrying seabed resource rights. Everything beyond national jurisdiction is the high seas, open to all; the mineral riches of the international seabed are managed as the common heritage of humankind by the International Seabed Authority, and disputes find a dedicated tribunal, ITLOS, in Hamburg alongside the ICJ.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Three slips recur. First, treating the EEZ as territory: a coastal state owns the fish and the oil, not the water column\'s ships and aircraft. Second, assuming the ICC can prosecute any atrocity anywhere: jurisdiction needs a state-party link or a Security Council referral. Third, expecting ICJ judgments to be self-executing: enforcement runs through the Security Council, where a veto can stop it cold.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'International Humanitarian Law' },
      {
        kind: 'para',
        text: 'The oldest layer of the modern system is the law of war. The Geneva Conventions of 1949 — four treaties ratified by every state on Earth — protect the wounded and sick in land and sea warfare, prisoners of war, and civilians in occupied and enemy territory. Their Additional Protocols of 1977 extended protection to wars of national liberation and to civilian objects, and tightened the rules on means and methods of warfare. The guardian of this body of law is the International Committee of the Red Cross, the Swiss-based organization whose mandate to visit detainees and protect victims is written into the conventions themselves. The distinction between Hague law — the conduct of hostilities, targeting, weapons — and Geneva law — the protection of victims — organizes the whole field.',
      },
      {
        kind: 'example',
        title: 'Worked Example — A Maritime Incident, Zoned',
        steps: [
          'Set up: a foreign fishing fleet is arrested 150 nautical miles off a coastal state, and its flag state protests.',
          'Locate the zone: 150 nm from baselines is inside the 200-nm exclusive economic zone but outside the 12-nm territorial sea.',
          'Apply the regime: in the EEZ the coastal state has sovereign rights over living resources and may board, inspect and arrest vessels violating its fisheries laws.',
          'Check the counter-argument: had the arrest occurred beyond 200 nm, on the high seas, the default rule is exclusive flag-state jurisdiction and the arrest would be unlawful.',
          'Conclude: the zone map decides the case before any court is seized of it — which is why maritime disputes are argued in nautical miles first and legal principles second.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'International Court of Justice', def: 'The UN\'s principal judicial organ; decides disputes between consenting states and issues advisory opinions.' },
          { term: 'Article 38, ICJ Statute', def: 'The classic enumeration of the sources of international law: treaties, custom, general principles, and subsidiary means.' },
          { term: 'complementarity', def: 'The Rome Statute principle that the ICC prosecutes only where national courts are unwilling or unable to do so genuinely.' },
          { term: 'exclusive economic zone', def: 'The 200-nm zone in which a coastal state holds sovereign rights over resources but not sovereignty over shipping and flight.' },
          { term: 'Geneva Conventions', def: 'The four 1949 treaties protecting war victims — wounded, shipwrecked, prisoners of war and civilians.' },
          { term: 'kinship of the system', def: 'A memory hook: Charter (rules), ICJ (states), ICC (individuals), UNCLOS (zones), Geneva (war) — five pillars of order.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A state is sued before the ICJ without ever having consented to its jurisdiction. What is the likely outcome?',
            options: [
              'The court proceeds because UN membership implies consent',
              'The court dismisses the case for want of jurisdiction',
              'The Security Council must first vote to compel the state',
              'The case is transferred automatically to the ICC',
            ],
            answer: 1,
            explain: 'The ICJ\'s jurisdiction rests on state consent — by declaration, special agreement or treaty clause. No consent, no case.',
          },
          {
            q: 'Which institution prosecutes an individual commander for crimes against humanity?',
            options: ['The ICJ', 'The Security Council', 'The ICC', 'The International Seabed Authority'],
            answer: 2,
            explain: 'The ICC, under the Rome Statute, holds individuals criminally responsible; the ICJ handles only disputes between states.',
          },
          {
            q: 'At 180 nautical miles from a coastal state\'s baselines, a foreign warship is sailing. The coastal state may:',
            options: [
              'Expel it, since the area is sovereign territory',
              'Regulate its fisheries but not stop its passage',
              'Do nothing — the area is high seas',
              'Try its captain before the ICC',
            ],
            answer: 1,
            explain: 'Inside the EEZ the state holds resource rights only; navigation, including warships, remains free beyond the twelve-mile territorial sea.',
          },
          {
            q: 'The complementarity principle means that the ICC:',
            options: [
              'shares cases with the ICJ',
              'acts only when national courts are unwilling or unable',
              'needs a unanimous Security Council vote',
              'applies only to non-member states',
            ],
            answer: 1,
            explain: 'Complementarity makes the ICC a court of last resort: genuine national proceedings foreclose ICC action on the same conduct.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the treaty-law lesson, for the lifecycle of the conventions this lesson\'s institutions administer. Follow with human rights law for the treaty-body machinery, and with the international relations lessons for the political science of why states comply.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'hist-great-divergence',
    title: 'The Great Divergence: Why Europe Got Rich First',
    domain: 'Humanities',
    field: 'World History',
    branch: 'Global Divergence',
    tier: 'intermediate',
    concepts: [
      'The question: why industrial modernity began in northwestern Europe',
      'The Malthusian world economy before 1800',
      'The California School and Pomeranz\'s coal-and-colonies argument',
      'Institutional explanations: property rights, states and inclusive institutions',
      'High wages, cheap energy and the demand for machines',
      'The timing and measurement of divergence (Maddison estimates)',
      'Reversals: Japan after 1868 and the modern re-convergence',
    ],
    words: 1457,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Around 1750, a traveler comparing the advanced regions of the world would have found no obvious winner. The Yangzi delta in China was as commercialized, as urbanized and roughly as wealthy per person as the richest parts of Europe; Mughal and then post-Mughal India dominated world textile production; and the Atlantic economies were still largely peripheral. Within a century the picture had inverted so completely that Europeans came to treat their dominance as natural. Economic historians call the widening gap the Great Divergence, and explaining it is one of the genuinely hard problems of history — a problem on which the evidence keeps disciplining the easy answers.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every big debate about global inequality — why some nations are rich, whether geography or institutions or exploitation explains it — is a descendant of this one. And the answers matter practically: if divergence came from coal and colonies, the lesson for development is about resources and global position; if it came from institutions and knowledge, the lesson is about law, states and science.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Malthusian Baseline' },
      {
        kind: 'para',
        text: 'Before about 1800, almost every economy on Earth was caught in the same trap. Improvements in productivity translated mainly into more people, not richer people: land was the fixed factor, and populations expanded until wages fell back to subsistence. In this Malthusian world, the differences in income per person between regions were modest — perhaps a factor of two, not the factor of ten or more that would open in the nineteenth century. England around 1700 was richer than Bengal, but not spectacularly so, and the richest parts of China stood at or near the top of the league tables. The divergence, when it came, was not the continuation of an ancient hierarchy; it was a break in a long-standing equilibrium.',
      },
      {
        kind: 'para',
        text: 'The break happened in one place first: Britain, in the decades after 1780, where mechanized spinning, steam power and factory organization began the process treated in the Industrial Revolution lesson. The question this lesson owns is comparative: what made that breakthrough possible there, and not in the Yangzi delta or Bengal, where markets were sophisticated and artisans skilled?',
      },
      { kind: 'heading', text: 'Coal and Colonies: The California School' },
      {
        kind: 'para',
        text: 'The most influential recent answer comes from the so-called California School, especially Kenneth Pomeranz\'s "The Great Divergence" (2000). Pomeranz argued that as late as 1750 the Yangzi delta and England faced comparable constraints: both were running into the limits of organic energy — wood, fodder, muscle — and both needed to relieve pressure on land. Britain escaped for two contingent reasons. First, coal: its coalfields sat conveniently near the centers of demand, and once mines had to be drained, the steam engine evolved as a pumping technology that could then be applied to everything else. Second, colonies: the New World supplied Britain with land-intensive products — sugar, cotton, timber — that Europe could never have grown at home, effectively importing tens of millions of ghost acres. China had no equivalent frontier. On this reading, divergence owed as much to geology and global position as to virtue or institutions — it was luck, compounded.',
      },
      {
        kind: 'para',
        text: 'The California School also dismantled the older assumption that Chinese markets and institutions were inherently backward: Qing-era markets in land, labor and grain moved resources at least as efficiently as European ones. If markets were comparable and outcomes diverged, the explanation cannot be markets alone.',
      },
      { kind: 'heading', text: 'Institutions, Wages and Enlightenment' },
      {
        kind: 'para',
        text: 'The counter-case is that Europe, and Britain specifically, had structural advantages that coal merely amplified. One family of arguments emphasizes institutions: secure property rights, patent systems, limited royal power after 1688, and eventually states that could tax and borrow at low rates. Economists have generalized this into the distinction between inclusive institutions, which spread economic rights broadly, and extractive ones, which concentrate them — and have linked colonial-era institutional legacies to the "reversal of fortune," the finding that the richest colonized regions in 1500 became the poorest by 1900 where European settlement and extractive institutions took hold.',
      },
      {
        kind: 'para',
        text: 'A second argument runs through wages and the demand for machines. Britain\'s labor was expensive relative to its energy and capital; high wages made it profitable to invent and deploy machinery that substituted coal-fired power for hands. In low-wage, high-energy-cost economies the same machines were simply not worth building — the spinning jenny had to pay for itself against the wage it replaced.',
      },
      {
        kind: 'para',
        text: 'A third emphasizes knowledge: a culture of improvement — scientific societies, engineering profession, the industrial enlightenment — that turned scientific curiosity into commercially useful technique. On this view the divergence was born in libraries, lecture halls and workshops as much as in mines and sugar islands.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Three errors recur in student answers. First, single-cause confidence: the scholarship is a debate among reinforcing factors — coal, colonies, wages, institutions, ideas — and an honest answer weighs them, not one. Second, treating China or India as static: both were dynamic commercial economies whose trajectories changed in the nineteenth century, not timeless traditions. Third, confusing the divergence with empire: empire transmitted and amplified the gap, but the gap had to open first.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'How Big, How Fast?' },
      {
        kind: 'para',
        text: 'The quantitative record, reconstructed in the Maddison Project\'s historical GDP estimates, dates the sharp divergence to the decades around 1820-1870. Before then, growth in the leading regions ran in fractions of a percent per year per person; British and then European and settler-economy growth accelerated to unprecedented rates while Qing China, disrupted by war and internal rebellion, and colonized India, reoriented toward raw-material export, stagnated or declined. By 1900 income gaps of roughly six- to ten-fold separated the industrial core from much of Asia and Africa — a novelty in world history.',
      },
      {
        kind: 'para',
        text: 'Divergence was not destiny. Japan\'s Meiji state, after 1868, imported institutions, industry and schooling deliberately and became the first non-Western economy to industrialize — a reversal demonstrating that the gap was closable with state-led change. The twentieth century\'s decolonization and the late-twentieth-century rise of East Asia began the Great Convergence that continues today; the divergence this lesson explains is now a chapter of history rather than a permanent condition.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Weighing the Arguments',
        steps: [
          'Set up: an essay question asks whether geography or institutions better explain the Great Divergence.',
          'Define each briefly: geography — coal location, frontier land, disease environments; institutions — property rights, patent law, fiscal states, markets for ideas.',
          'Test against the comparable-cases evidence: markets and commercial sophistication did NOT diverge before 1800, which weakens pure market explanations.',
          'Test against the reversal evidence: former rich colonies fell behind under extractive institutions, which strengthens institutional arguments.',
          'Conclude with an interaction: coal and colonies mattered through institutions — Britain\'s gains from New World resources were realized because property rights and capital markets let them be financed — and say so; the exam-grade answer names the interaction, not a winner.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Great Divergence', def: 'The widening gap in income and industrial capability between northwestern Europe and the rest of the world, c. 1750-1900.' },
          { term: 'Malthusian economy', def: 'A regime where productivity gains translate into population growth rather than rising incomes per person.' },
          { term: 'California School', def: 'Economic historians, notably Pomeranz, who locate divergence in contingency — coal, colonies — rather than European uniqueness.' },
          { term: 'ghost acres', def: 'Pomeranz\'s term for the land-intensive resources supplied by the New World that relieved European land constraints.' },
          { term: 'reversal of fortune', def: 'The finding that the wealthiest colonized regions in 1500 became relatively poorest where extractive institutions took root.' },
          { term: 'high-wage economy', def: 'Robert Allen\'s argument that expensive labor and cheap energy in Britain made labor-saving machinery profitable.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Pomeranz argues that Britain\'s escape from the organic-energy economy depended chiefly on:',
            options: ['superior European science alone', 'accessible coal and New World land imports', 'a larger population', 'absence of warfare'],
            answer: 1,
            explain: 'The coal-and-colonies argument: coal near demand centers plus ghost acres from the New World relieved the land constraint that bound the Yangzi delta.',
          },
          {
            q: 'The "reversal of fortune" evidence supports which explanation of divergence?',
            options: ['Geographic determinism', 'Institutional arguments', 'Culturalist arguments', 'The Malthusian trap'],
            answer: 1,
            explain: 'Regions rich in 1500 that received extractive colonial institutions ended up poor — institutions, not initial endowments, drove the outcome.',
          },
          {
            q: 'In the Malthusian economy, a bumper harvest mainly produced:',
            options: ['permanently richer peasants', 'earlier marriages and more people', 'industrial investment', 'state-driven reform'],
            answer: 1,
            explain: 'Extra output lowered the age of marriage and raised births until population again pressed on land, restoring subsistence wages.',
          },
          {
            q: 'Which episode demonstrates that the divergence was reversible?',
            options: ['The Opium Wars', 'Meiji Japan\'s industrialization', 'The Scramble for Africa', 'The Irish famine'],
            answer: 1,
            explain: 'After 1868 Japan deliberately imported institutions and industry, becoming the first non-Western industrial economy.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the Industrial Revolution lesson for the British mechanics of the break, and the Silk Road lesson for the pre-modern Eurasian economy this lesson takes as its baseline. Follow with the decolonization lesson for how the divergence\'s world order came apart.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'eng-traffic-flow-theory',
    title: 'Traffic Flow Theory: The Fundamental Diagram, Shockwaves and Level of Service',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Transportation Engineering',
    tier: 'intermediate',
    concepts: [
      'Traffic as a continuum: flow, density and speed',
      'The fundamental relation q = k · v',
      'Greenshields\' linear model and the parabolic flow-density curve',
      'Capacity and critical density',
      'Shockwaves: how queues form and dissolve (kinematic wave theory)',
      'Level of service A-F and the volume-capacity ratio',
      'Signal timing fundamentals: Webster\'s cycle',
    ],
    words: 1435,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'A road is a machine for converting space into movement, and traffic engineering is the discipline that keeps the machine from choking on itself. Its central insight is that a stream of vehicles can be treated like a fluid: not car by car, but as a continuum with measurable flow, density and speed. From that single abstraction — formalized in the 1950s by Lighthill and Whitham and, independently, Richards — comes everything in this lesson: why capacity exists, why jams appear from nowhere, and how engineers grade a road\'s performance with letter grades a motorist can feel.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Flow, capacity and level-of-service computations are the standard currency of every transport-planning report, highway appraisal and intersection redesign. The geometric side of road design — curves, sight distances, superelevation — is a separate craft covered in the highway engineering lesson; this lesson owns what happens once the geometry is built and the vehicles arrive.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Three Variables and the Fundamental Relation' },
      {
        kind: 'para',
        text: 'Traffic flow q is the number of vehicles passing a point per unit time, in vehicles per hour. Density k is the number of vehicles per unit length of road, in vehicles per kilometer. Space mean speed v is the average speed of those vehicles. The three are locked together by one identity:',
      },
      {
        kind: 'formula',
        name: 'Fundamental relation of traffic flow',
        latex: 'q = k \\, v',
        meaning:
          'Flow (veh/h) equals density (veh/km) times space mean speed (km/h). Two of the three variables determine the third; every traffic measurement is a way of fixing two and reading off the third.',
      },
      {
        kind: 'para',
        text: 'The identity is exact; the science lives in how v falls as k rises. Bruce Greenshields\' 1935 measurements suggested the simplest workable model: speed declines linearly with density, from free-flow speed v_f at zero density to zero at jam density k_j, where bumper sits against bumper. Substitute that line into the identity and flow becomes a downward-opening parabola in density: zero at both empty gridlock ends and maximal in between. The peak of the parabola is the road\'s capacity q_max, reached at the critical density k_c — roughly half the jam density in the linear model, with speed half the free-flow speed. Real measured curves are not perfectly symmetric — drivers leave longer gaps at high speed than the linear model predicts — but the parabola remains the mental model every traffic engineer carries.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Finding Capacity from Greenshields',
        steps: [
          'Set up: a freeway lane has free-flow speed 100 km/h and jam density 100 veh/km.',
          'Write the linear speed-density relation: v = 100 (1 - k/100).',
          'Substitute into q = k v: q = 100k - k² (veh/h, with k in veh/km).',
          'Maximize: dq/dk = 100 - 2k = 0, so critical density k_c = 50 veh/km.',
          'Compute capacity: q_max = 100(50) - 50² = 2,500 veh/h, at speed v = 50 km/h — the lane carries the most vehicles not when cars go fastest, but when they cruise at half speed halfway to gridlock.',
        ],
      },
      { kind: 'heading', text: 'Shockwaves: Where Jams Come From' },
      {
        kind: 'para',
        text: 'The parabola has two sides, and that is the root of all congestion. Below critical density, flow rises with density: more cars, more throughput. Above it, adding cars reduces flow — the road is congested, and each additional vehicle makes everyone slower. When demand pushes a segment past capacity, the excess must wait, and the boundary between flowing and queued traffic travels backward through the stream as a shockwave, visible as the brake-light wave that sweeps backward through a motorway queue. Kinematic wave theory computes the wave\'s speed from the slope of the line connecting the before and after states on the flow-density curve: states on the upper branch send waves forward, states past the peak send them backward, and a queue discharging at a green signal sends a recovery wave forward at its own characteristic speed.',
      },
      {
        kind: 'para',
        text: 'The everyday applications are direct. A red signal at an intersection creates a queue whose length grows at the difference between arrival and discharge flows; the green interval must discharge it plus serve new arrivals. A lane drop on a freeway acts as a bottleneck whose shockwave can propagate upstream for kilometers at around 15-20 km/h backward. An incident does the same, and removing it does not instantly heal the queue — the discharge wave must unwind through the stored vehicles, which is why jams persist after their cause is gone.',
      },
      {
        kind: 'formula',
        name: 'Shockwave speed (two states on the flow-density curve)',
        latex: 'w = \\frac{q_2 - q_1}{k_2 - k_1}',
        meaning:
          'The speed of the boundary between traffic states 1 and 2 is the slope of the chord joining them on the fundamental diagram. Negative w means the wave travels upstream against the traffic; positive w means downstream.',
      },
      { kind: 'heading', text: 'Capacity and Level of Service' },
      {
        kind: 'para',
        text: 'Capacity is a number; level of service translates it into experience. The Highway Capacity Manual grades a facility from LOS A — free flow, drivers unaffected by others — through the familiar stop-and-go of LOS E at capacity, to LOS F, forced breakdown with queues and unpredictable travel times. The grading differs by facility: on freeways it rides on density, at signalized intersections on average control delay per vehicle. The practical dial is the volume-capacity ratio v/c: at 0.5 the facility breathes; at 0.85 it is near saturation, with small incidents cascading; above 1.0 it is over capacity and breakdown is certain at peak. Planners therefore design not for the average day but for the design hour — typically the thirtieth-busiest hour of the year — accepting a few days of congestion rather than gold-plating the network.',
      },
      { kind: 'heading', text: 'Signals and the Cycle' },
      {
        kind: 'para',
        text: 'At intersections the capacity question becomes timing. A signal cycle splits time among conflicting movements, and each movement\'s capacity is its green share times the saturation flow — the rate at which queued vehicles discharge, roughly one car every two seconds per lane. F. V. Webster\'s classical analysis found the cycle length that minimizes total delay to be proportional to the square root of the lost time and flow terms, and — the counterintuitive result — quite short: long cycles make individual pedestrians and side-street users wait disproportionately, so the optimum balances main-street efficiency against everyone\'s worst wait. Pedestrian crossing time sets a hard minimum, and coordinated signal corridors let platoons ride a green wave at the design speed.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Three traps. First, reading capacity off the wrong branch: maximum flow occurs at critical density, not at free-flow speed — a road "flowing freely" at 100 km/h may be carrying far less than its 2,500 veh/h best. Second, treating demand as a fixed number: induced demand means added capacity attracts new trips, which is why widening alone rarely cures congestion. Third, averaging the wrong speed: the fundamental relation needs space mean speed (harmonic-style average over distance), not the arithmetic time mean speed — the two differ exactly when speeds vary.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'fundamental diagram', def: 'The empirical relation between flow and density (and speed); the defining curve of traffic science.' },
          { term: 'Greenshields model', def: 'The linear speed-density assumption that makes the flow-density curve a parabola.' },
          { term: 'capacity (q_max)', def: 'The maximum flow a facility can sustain, at critical density and intermediate speed.' },
          { term: 'shockwave', def: 'The moving boundary between traffic states; its speed is the chord slope on the fundamental diagram.' },
          { term: 'level of service (LOS)', def: 'The A-F grading of operating quality — from free flow to forced breakdown.' },
          { term: 'saturation flow', def: 'The discharge rate of a queue through a green signal, about 1,800 veh/h per lane.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A lane carries its maximum flow when traffic moves at:',
            options: ['Free-flow speed', 'Half the free-flow speed', 'Walking pace', 'Speed is irrelevant to flow'],
            answer: 1,
            explain: 'In the Greenshields parabola the peak sits at critical density, where speed is half of free-flow — maximum throughput is a mid-speed phenomenon.',
          },
          {
            q: 'A queue\'s shockwave is observed moving upstream. Its states satisfy:',
            options: [
              'Both are on the free-flow branch',
              'The downstream state is past critical density',
              'Density decreased downstream',
              'Flow increased downstream',
            ],
            answer: 1,
            explain: 'Congested (over-critical) downstream states produce negative wave speeds — the boundary sweeps backward through oncoming traffic.',
          },
          {
            q: 'An intersection approach has v/c = 1.1 at peak. Its LOS is:',
            options: ['C or better', 'D', 'E', 'F'],
            answer: 3,
            explain: 'Demand exceeds capacity: breakdown with growing queues is LOS F, regardless of how well the signal is timed.',
          },
          {
            q: 'Doubling a signal\'s cycle length will:',
            options: [
              'always halve total delay',
              'increase the worst individual waits',
              'double saturation flow',
              'eliminate the queue',
            ],
            answer: 1,
            explain: 'Longer cycles make minor movements and pedestrians wait disproportionately; Webster\'s optimum balances total delay against the worst wait, and it is shorter than intuition suggests.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the highway engineering lesson for geometric design and the railway lesson for rail-side cant and capacity. Follow with the water resources lessons for the shared fluid-mechanics intuition, and operations management for queueing theory in business settings.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'grow-plant-propagation',
    title: 'Plant Propagation: Seeds, Cuttings, Grafts and Clones',
    domain: 'Everyday Knowledge',
    field: 'Garden & Growing',
    branch: 'Propagation',
    tier: 'core',
    concepts: [
      'Sexual vs asexual propagation and why gardeners choose between them',
      'Seed germination: water, oxygen, temperature and light',
      'Dormancy and how to break it: scarification and stratification',
      'Cuttings: hardwood, softwood and root cuttings; auxin rooting hormones',
      'Layering and division: multiplying what already grows',
      'Grafting: scion and rootstock, whip-and-tongue and bud grafting',
      'Micropropagation: tissue culture at commercial scale',
    ],
    words: 1502,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Every plant in a garden is either a child or a clone. Grown from seed, it is a sexual individual — a new shuffle of its parents\' genes, similar to but never identical with either. Grown from a cutting, a layer, a division or a graft, it is a piece of one parent made into a whole new plant, genetically identical to the original. The entire craft of propagation is choosing between these two routes: seeds for diversity, vigor and cheapness; vegetative methods for exactness, because a Granny Smith seed will not grow a Granny Smith tree — only a graft of Granny Smith wood will.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Propagation is the difference between buying plants and making them. One healthy mother plant can populate a whole hedge by cuttings; one mature clump of daylilies becomes ten by division; a single favored tomato can be carried into next season. It is also how the world\'s fruit varieties have stayed true for centuries — every named apple, grape and rose you can buy is a clone maintained by human hands.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Seeds: The Sexual Route' },
      {
        kind: 'para',
        text: 'A seed is an embryo packaged with a food store and a protective coat, waiting for three signals that spring has come: water, oxygen and the right temperature. Imbibed water swells the embryo and releases enzymes that digest the stored food; oxygen fuels respiration for growth; most temperate seeds germinate best between roughly 15 and 25 degrees Celsius. Some seeds — lettuce, many herbs — also want light and should be surface-sown; others insist on darkness. The practical craft is matching each seed\'s needs: sowing depth about twice the seed\'s diameter, moisture steady but never waterlogged, because a drowned seed dies of oxygen starvation faster than a dry one retreats into waiting.',
      },
      {
        kind: 'para',
        text: 'Many seeds refuse to sprout even in perfect conditions, because dormancy — a delay built by evolution to keep the seed asleep until a real spring, or until its coat has been weathered, or its embryo chilled — has not been broken. Two classic treatments undo it. Scarification physically breaks or thins a hard coat (nicking a sweet-pea seed with a knife, or rubbing it on sandpaper) so water can enter. Stratification chills a moist seed for weeks in a refrigerator, mimicking winter; many trees, perennials and spring ephemerals will not germinate without it. The rule of thumb: hard coat, scarify; hardy species that overwinter, stratify.',
      },
      { kind: 'heading', text: 'Cuttings and Layering: Cloning with Pruners' },
      {
        kind: 'para',
        text: 'A stem cutting is a severed piece of shoot persuaded to grow roots, and the whole trick is polarity and patience: cuttings are inserted base-down, kept humid to stop wilting, and shaded while roots form. Timing decides the method. Softwood cuttings — new spring growth that snaps when bent — root fastest but wilt easiest. Semi-hardwood cuttings from midsummer wood and hardwood cuttings from dormant winter stems root slowly but survive neglect; a pencil-thick hardwood cutting of willow, currant or grape can be pushed straight into winter soil. Rooting is sped by auxin rooting hormones — indole-3-butyric acid, sold as dipping powders or gels — which concentrate at the cut end and trigger root initiation. Some plants root from a leaf (African violets, snake plants), others from root pieces (horseradish, raspberries\' suckering roots), and a few, like begonias, from a single slashed leaf laid on soil.',
      },
      {
        kind: 'para',
        text: 'Layering is a cutting that is not cut loose until it has rooted: a stem still attached to the mother plant is bent to the ground, wounded or bent at a joint, buried a few centimeters deep, and kept moist. Roots form at the wound within a season, and the new plant is then severed. Air layering does the same in the sky for woody plants that will not root from cuttings — a wound on the branch is packed with moist moss and wrapped — and is the classic way to multiply difficult figs, magnolias and rubber plants. Division is simpler still: clump-forming perennials — daylilies, hostas, ornamental grasses — are lifted, split into sections each carrying roots and shoots, and replanted; it is the only propagation that thins the parent while multiplying it.',
      },
      { kind: 'heading', text: 'Grafting: Two Plants Made One' },
      {
        kind: 'para',
        text: 'Grafting joins a scion — a piece of the variety you want — to a rootstock — a plant with the roots you want — so their cambia, the thin growth layers just under the bark, knit into one continuous vascular system. The craft demands three things: sharp tools for clean cuts, matching cambium layers on at least one side, and wax or tape excluding air from the join until it heals. The whip-and-tongue graft, with interlocking sloped cuts, is the standard for matching-size winter wood; bud grafting (T-budding) slips a single bud under a T-shaped flap of bark in summer and is how nurseries produce fruit trees by the million. Chip budding is its late-summer variant for tight-barked species.',
      },
      {
        kind: 'para',
        text: 'Why graft rather than root a cutting? Because many prize varieties are poor rooters, and because the rootstock is half the point: it can dwarf the tree (the basis of modern high-density orchards), resist soil pests and diseases — the classic solution to phylloxera in wine grapes — or tolerate wet, dry or alkaline soils the variety itself would hate. The clone you eat is a marriage of two genotypes, chosen separately for top and bottom.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Four slips. Planting cuttings upside-down — a stem always knows its top, and polarity is not negotiable. Expecting seed from a named fruit to reproduce it — apples in particular are extreme heterozygotes, and every seedling is a new variety. Overwatering seedlings: damping-off fungi thrive in soggy, crowded trays; ventilation and sparse watering are the cure. And letting a graft dry out: an unwaxed join is a dead join.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Tissue Culture: Propagation at Industrial Scale' },
      {
        kind: 'para',
        text: 'The laboratory version of a cutting is micropropagation: a few millimeters of shoot tip, surface-sterilized, sealed in a jar of gel with sugars, vitamins and the right balance of the plant hormones cytokinin and auxin, and multiplied into dozens of plantlets that are then rooted and hardened off. The technique produces virus-free stock (meristem tips often outgrow infections), clones plants that refuse conventional rooting — orchids, bananas, many houseplants — and ships sterile cultures across borders. Almost every commercial banana you have eaten is a tissue-culture Meristem clone, and the technique underpins the conservation of rare species in gene banks.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Choosing a Method',
        steps: [
          'Set up: you want twelve more plants of a favorite double-flowered rose, an old variety no longer sold.',
          'Rule out seed: doubled flowers are often sterile, and seedlings would not come true anyway — seed is wrong for exactness.',
          'Try cuttings first: rose hardwood cuttings root at reasonable rates in a cold frame over winter — cheap enough for twelve tries.',
          'If cuttings fail, graft: bud the variety onto hardy rootstock in summer, the nursery method for exactly this case.',
          'Note the parallel choice in the vegetable patch: for a new variety trial, buy seed (diversity, cheapness); to preserve an heirloom exactly, take cuttings or save true-to-type seed only if the variety is open-pollinated.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'sexual vs asexual propagation', def: 'Seeds recombine genes and vary; vegetative methods clone the parent exactly.' },
          { term: 'scarification', def: 'Breaking or thinning a hard seed coat so water can enter and germination begin.' },
          { term: 'stratification', def: 'Chilling moist seed to mimic winter and break embryo dormancy.' },
          { term: 'auxin (IBA)', def: 'Rooting hormone applied to cuttings to trigger root initiation at the wound.' },
          { term: 'scion and rootstock', def: 'The grafted top (variety) and bottom (roots) of one composite plant.' },
          { term: 'micropropagation', def: 'Cloning plants from sterile explants in nutrient gel under controlled hormones.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Why won\'t a seed from a supermarket apple grow the same fruit?',
            options: [
              'Seeds are always sterile',
              'Apples are extreme heterozygotes; every seedling is a new genetic combination',
              'Commercial apples are GMOs',
              'Seed needs scarification first',
            ],
            answer: 1,
            explain: 'Named apple varieties are clones; sexual reproduction reshuffles their highly heterozygous genomes, so the seedling is a brand-new variety — which is why grafting exists.',
          },
          {
            q: 'A hard-coated sweet-pea seed that refuses to sprout needs:',
            options: ['Stratification', 'Scarification', 'Darkness', 'Gibberellic acid always'],
            answer: 1,
            explain: 'Physical dormancy from an impermeable coat is broken by nicking or abrasion — scarification — letting water in.',
          },
          {
            q: 'Dwarfing rootstock in an orchard is chosen to:',
            options: [
              'change the fruit\'s flavor genes',
              'control tree size for high-density planting',
              'make the scion seed-bearing',
              'replace pollination',
            ],
            answer: 1,
            explain: 'The rootstock governs vigor and size while the scion keeps the variety; dwarfed trees permit productive, pickable orchard densities.',
          },
          {
            q: 'In micropropagation, the balance of cytokinin to auxin in the medium controls:',
            options: [
              'sterility only',
              'whether explants form shoots or roots',
              'the plant\'s flower color',
              'cold hardiness',
            ],
            answer: 1,
            explain: 'High cytokinin pushes shoot multiplication; high auxin pushes rooting — the hormone dial tissue culturists turn at each stage.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the composting lesson for the soil your new plants will grow in, and the Botany subject\'s plant-physiology lessons for the hormones and vascular anatomy used here. Follow with the crop-science lessons for how propagation scales to agriculture: seed certification, hybrids and cloning in staple crops.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'eng-structural-analysis-methods',
    title: 'Structural Analysis: Determinacy, Trusses and Shear-and-Moment Diagrams',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Structural Engineering',
    tier: 'intermediate',
    concepts: [
      'Equilibrium as the whole game: reactions from statics',
      'Static determinacy and indeterminacy: counting equations and unknowns',
      'Trusses: assumptions, method of joints, method of sections',
      'Zero-force members and why they exist',
      'Beam analysis: shear force and bending moment diagrams',
      'Point loads, distributed loads and the differential relations',
      'Influence lines: analysis for moving loads',
    ],
    words: 1687,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Before any structure is designed, it must be analyzed: given the loads, what forces travel through the members? Structural analysis answers that question, and its first half — the statically determinate half covered here — rests on nothing more than Newton\'s laws written three times: the sums of horizontal forces, vertical forces and moments must each equal zero. Every method in this lesson is a bookkeeping scheme for those three equations, applied to joints, to whole members, or to a cut piece of a structure. Master the bookkeeping and the analysis of trusses and beams becomes arithmetic rather than memory.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Determinacy checks, truss member forces, and shear-and-moment diagrams are the opening moves of nearly every structural problem set and design calculation in the world. The companion lessons own the neighboring territory: the bridges lesson owns the physical picture of loads, stress and buckling; the concrete lesson owns reinforced-concrete design. This lesson owns the analysis machinery that feeds both.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Reactions and Determinacy' },
      {
        kind: 'para',
        text: 'A structure rests on supports, and supports supply unknown reaction forces: a roller gives one unknown (perpendicular to its plane), a pin or hinge gives two (horizontal and vertical), a fixed support gives three (two forces plus a moment). With three equations of equilibrium available for a planar body, the count decides the character of the structure. If the unknowns equal the available equations, the structure is statically determinate — the reactions, and then every internal force, can be found by statics alone. If the unknowns exceed the equations, it is indeterminate: consistent equations still bind the structure, but extra information — member stiffnesses, deflection compatibility — is needed to solve them, which is the business of the force and displacement methods treated in advanced courses. If the unknowns fall short, or the equations are dependent while the structure can move, it is a mechanism, not a structure at all.',
      },
      {
        kind: 'para',
        text: 'For trusses the classic count compares members m, reactions r and joints j: with two equations per joint, determinacy requires m + r = 2j. Fewer members than that means the truss can change shape; more means redundant members that cannot be resolved by statics. The count is a first screening, not a proof — a truss can have the right count yet be internally unstable — but as a sanity check it settles most examination questions in one line.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Reactions of a Simple Beam',
        steps: [
          'Set up: a beam of length 10 m rests on a pin at A (left) and a roller at B (right); a point load of 20 kN acts 3 m from A, and a uniformly distributed load of 2 kN/m covers the right 5 m.',
          'Replace the distributed load by its resultant: 2 kN/m × 5 m = 10 kN at the centroid, 2.5 m from B.',
          'Sum moments about A to get the vertical reaction at B: ΣM_A = 0 gives (20 × 3) + (10 × 7.5) − (R_B × 10) = 0, so R_B = (60 + 75)/10 = 13.5 kN.',
          'Sum vertical forces: R_A + 13.5 − 20 − 10 = 0, so R_A = 16.5 kN.',
          'Check: sum of moments about B — (16.5 × 10) − (20 × 7) − (10 × 2.5) = 165 − 140 − 25 = 0 ✓. The check is not decoration; in practice it catches most arithmetic slips.',
        ],
      },
      { kind: 'heading', text: 'Trusses: Joints and Sections' },
      {
        kind: 'para',
        text: 'A truss is an assembly of straight two-force members joined at pinned connections, loaded only at the joints. Under those assumptions every member carries pure axial tension or compression — no bending — which is why trusses turn long spans into lightweight cages of push and pull. The method of joints works joint by joint: draw the free body of one joint with at most two unknown member forces, apply the two force-equilibrium equations, and march across the truss, each solved joint exposing the next. Tension is conventionally positive — the member pulls on the joint — and a negative answer simply means the member is in compression.',
      },
      {
        kind: 'para',
        text: 'The method of sections is the shortcut when a single member\'s force is wanted: cut the truss completely through that member (and at most two others), keep whichever half is simpler, and apply all three equilibrium equations to the piece. The moment equation taken about the point where two cut members intersect isolates the third force immediately — the deliberate choice of such moment centers is the craft of the method. Two reading skills complete the toolkit. Zero-force members — found at joints with no external load where two non-collinear members meet, or three members where two are collinear — carry no force under that loading but exist for stability, bracing slender compression members against buckling; spotting them first simplifies everything downstream. And symmetric trusses under symmetric loading answer in half the work.',
      },
      { kind: 'heading', text: 'Beams: Shear and Moment Diagrams' },
      {
        kind: 'para',
        text: 'A beam resists loads perpendicular to its axis by bending, and the two diagrams that describe that bending are drawn everywhere in structural engineering. The shear force V at a section is the algebraic sum of transverse forces on one side; the bending moment M is the sum of their moments about that section. Between disturbances the two obey differential relations that make the diagrams nearly self-drawing: the slope of the moment diagram equals the shear, and the slope of the shear diagram equals minus the load intensity. A point load drops the shear diagram by the load\'s value; a uniformly distributed load shears the diagram linearly and bends the moment diagram into a parabola; a couple jumps the moment diagram without touching shear. Maximum moment occurs where shear crosses zero — the rule that locates the design section of every floor beam.',
      },
      {
        kind: 'para',
        text: 'The diagram pair also explains structural shape. Where moment is large and single-signed, the beam wants depth; where it reverses sign, the same top and bottom flanges alternate between tension and compression. Reading a shear-moment pair fluently — sketching both by hand for a loaded beam in a few minutes — is the single most transferable skill of this lesson, because reinforced-concrete design begins by multiplying these internal forces by material properties.',
      },
      { kind: 'heading', text: 'Influence Lines: Loads That Move' },
      {
        kind: 'para',
        text: 'When a load crosses a structure — a truck on a bridge, a crane on a gantry — the question changes from "what is the force?" to "where should the load stand for worst effect?" The influence line for a response (a reaction, a shear, a member force) is the graph of that response against the load\'s position: place a unit load at a point, record the response, and plot. Once the line is drawn, any load train is evaluated by superposition — multiply each load by the line\'s ordinate beneath it and sum. For determinate structures the influence lines are straight segments, and two theorems make them quick: the line for a reaction of a simple beam is the straight line rising from zero at the far support to one at the reaction\'s own support; the line for shear just inside a section is the reaction line shifted down by one over the span to the section. The worst position of a set of wheel loads places the average load on either side of the diagram peak equal — the criterion that governs bridge rating to this day.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Four slips. Assuming tension and "correcting" the sign twice — fix a convention and trust it. Forgetting that the method of sections may cut at most three unknown members for a planar truss. Drawing moment diagrams whose slopes contradict the shear diagram — the differential relations are a free check. And treating determinacy counts as a verdict: the m + r = 2j test can pass for a truss that still collapses by its geometry, so a quick shape check always accompanies the count.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'static determinacy', def: 'The condition that unknown forces can be found from equilibrium equations alone (planar truss: m + r = 2j).' },
          { term: 'two-force member', def: 'A member loaded only at its ends, carrying pure axial force along its line.' },
          { term: 'method of joints', def: 'Joint-by-joint free bodies with two equilibrium equations each, exposing member forces progressively.' },
          { term: 'method of sections', def: 'Cutting through the truss to a member of interest and applying three equilibrium equations to one half.' },
          { term: 'shear force / bending moment diagrams', def: 'Graphs of internal V and M along a beam; their slopes interlock by dM/dx = V.' },
          { term: 'influence line', def: 'A response plotted against a moving unit load\'s position, used to find the worst loading case.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A planar truss has m = 21 members, r = 3 reactions and j = 12 joints. The determinacy count says:',
            options: ['determinate — 21 + 3 = 24 = 2 × 12', 'indeterminate by one degree', 'a mechanism — too few members', 'the count cannot be applied'],
            answer: 0,
            explain: 'm + r = 24 equals 2j = 24, so statics suffices — but the count only screens; a quick geometry check must still confirm the truss cannot change shape.',
          },
          {
            q: 'At an unloaded truss joint, two non-collinear members meet. Their forces are:',
            options: ['both zero', 'equal and opposite', 'each half the joint load', 'undetermined'],
            answer: 0,
            explain: 'With no external load, two non-collinear forces can balance only if both vanish — the zero-force-member rule.',
          },
          {
            q: 'The shear diagram of a beam crosses zero at midspan under a uniformly distributed load. There:',
            options: ['shear is maximum', 'moment is maximum', 'deflection is zero', 'the slope of the beam is zero'],
            answer: 1,
            explain: 'Since dM/dx = V, the moment is stationary (maximum for sagging) exactly where V = 0 — the design section.',
          },
          {
            q: 'An influence line differs from a shear or moment diagram because it is plotted against:',
            options: ['position along the beam of a fixed load', 'the position of a moving unit load', 'time', 'material strength'],
            answer: 1,
            explain: 'Influence lines graph a chosen response as the load\'s location varies — the tool for bridges, cranes and moving trains.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the bridges lesson for loads, stress and the physical vocabulary this lesson computes with. Follow with the concrete design lesson, which consumes these internal forces, and the seismic lesson for how analysis changes when the load becomes dynamic.',
        tone: 'path',
      },
    ],
  },
]

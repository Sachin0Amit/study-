/**
 * Knowledge Universe — Modern World History — Chapter 01: Democracy, Rights & Revolution
 * 4 lessons · ~7,565 words
 * field: World History
 * legacy sources: humanities.ts, x60-enem-brazil-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Democracy & Rights]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 hist-american-revolution-founding — The American Revolution and the Founding of the Republic
 *   01.2 hist-civil-war-reconstruction — The Civil War and Reconstruction
 *   01.3 hist-civil-rights-movement — The Civil Rights Movement
 *   01.4 hist-french-revolution-napoleonic-era — The French Revolution and the Napoleonic Era
 */
import type { KnowledgeTopic } from '../../types'

export const modernWorldHistoryCh01: KnowledgeTopic[] = [
  // -----------------------------------------------------------------
  // US History batch (Task FMHY-1-b) — grounded in OpenStax U.S.
  // History (CC BY-NC-SA): ch. 5-8 for the Revolution and founding,
  // ch. 14-16 for the Civil War and Reconstruction, ch. 28-29 for the
  // civil rights movement.
  // -----------------------------------------------------------------
  {
    id: 'hist-american-revolution-founding',
    title: 'The American Revolution and the Founding of the Republic',
    domain: 'Humanities',
    field: 'World History',
    branch: 'Democracy & Rights',
    tier: 'core',
    concepts: [
      'Empire, debt and the Proclamation Line',
      'No taxation without representation',
      'From Lexington to Yorktown',
      'Saratoga and the French alliance',
      'A republic, not a democracy',
      'The Articles\' failed experiment',
      'Compromise and the Constitution of 1787',
      'Federalists against Democratic-Republicans',
    ],
    words: 1591,
    readMins: 8,
    addedOn: '2026-10-19',
    blocks: [
      {
        kind: 'para',
        text: 'In 1763, Britons on both sides of the Atlantic sang \'Rule, Britannia!\' to celebrate victory over France — American colonists among them. A generation later those same colonies had beaten Britain and invented something new: a large republic with no king, governed by a written constitution still in force today. The road between ran through a tax dispute that hardened into a constitutional crisis, a war that became a revolution, and a failed first constitution whose failure produced the frame of 1787.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every argument about American power today — presidential authority, states\' rights, the Electoral College — is an argument about founding-era design. The Revolution was the Atlantic world\'s first successful settler independence movement, a template studied by the independence leaders we meet in Decolonization and the Making of the Global South. And its central contradiction — a republic of liberty built with enslaved labour — led straight to our Civil War and Reconstruction topic.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Story' },
      {
        kind: 'para',
        text: 'The revolution began as an accounting problem. Victory in the French and Indian War nearly doubled Britain\'s national debt, from £75 million in 1756 to £133 million in 1763, and ten thousand troops stayed to garrison the enlarged empire. Prime Minister Grenville decided the colonies should help pay. The Proclamation Line of 1763 barred settlement west of the Appalachians, infuriating land-hungry Virginians; the Sugar Act of 1764 sent smugglers to juryless vice-admiralty courts. Colonists protested as Britons, not rebels: under the unwritten constitution, only representatives they voted for could tax them.',
      },
      {
        kind: 'para',
        text: 'The Stamp Act of 1765 crossed that line: a direct internal tax on printed paper. Nine colonies convened a Stamp Act Congress; Sons of Liberty rioted while Daughters of Liberty spun homespun; \'taxation without representation\' became the cry. Parliament retreated in 1766 but asserted total authority in the Declaratory Act, and the Townshend duties of 1767 paid royal governors\' salaries, freeing them from colonial control. After the Boston Massacre (March 5, 1770) — soldiers killed five Bostonians, Crispus Attucks first — Parliament kept only the tea duty. The Tea Act of 1773 granted the East India Company a monopoly; Boston destroyed a fortune in tea; the Coercive Acts closed the port and gutted Massachusetts\'s charter; and twelve colonies, still hailing George III as \'Most Gracious Sovereign\', met in the First Continental Congress (1774) behind a total boycott: a rival government in all but name.',
      },
      {
        kind: 'para',
        text: 'War began on April 19, 1775, at Lexington and Concord — the \'shot heard round the world\'. Washington took command of the Continental Army that June; in January 1776 Paine\'s Common Sense, scorning the king as a \'royal brute\', sold a kingless republic to a mass audience; the Declaration followed in July. The war nearly failed: Britain took New York in 1776 and Philadelphia in 1777, and twenty-five hundred of Washington\'s eleven thousand died at Valley Forge before Baron von Steuben drilled the rest into an army. The hinge was Saratoga: in October 1777 Burgoyne surrendered over five thousand men, and France allied with the new nation. At Yorktown, de Grasse\'s fleet and a Franco-American army of sixteen thousand cornered Cornwallis, who surrendered on October 19, 1781. The Treaty of Paris (1783) recognized independence, borders at the Mississippi.',
      },
      {
        kind: 'para',
        text: 'It was a revolution with sharp limits. Of 2.5 million colonists, roughly a third supported independence, a third stayed loyal, a third kept their heads down; perhaps 100,000 Loyalists left afterward. Lord Dunmore\'s 1775 offer of freedom to enslaved people who joined the British drew some twenty thousand — arguably the largest slave uprising and greatest emancipation before the Civil War. Yet the republic hardened racial lines: whiteness became the badge of freedom, Native allies of Britain lost lands the treaty casually handed away, and coverture kept married women legal non-persons — even as Abigail Adams\'s plea to \'remember the ladies\' opened arguments that would not close.',
      },
      {
        kind: 'para',
        text: 'Independence\'s first constitution, the Articles of Confederation (ratified 1781), created a \'league of friendship\' with no president, no judiciary and a Congress that could not tax — the states supplied less than half of the money requested during the war. Its triumph was western policy: the Land Ordinance of 1785 surveyed the public domain into a grid, and the Northwest Ordinance of 1787 barred slavery north of the Ohio while scripting territory-to-statehood. Its failure was fiscal: by 1784 the debt stood in the tens of millions, and a 5 percent import tax died when Rhode Island refused. Then Shays\' Rebellion (1786–87) — indebted farmers closing courthouses and marching on the Springfield armory — convinced men of property the republic was sliding into anarchy. Washington came out of retirement.',
      },
      {
        kind: 'para',
        text: 'Fifty-five delegates met secretly in Philadelphia in May 1787, ostensibly to amend the Articles; instead they wrote a new frame of government. Madison\'s Virginia Plan wanted a strong national government with representation by population; the New Jersey Plan defended state equality; Sherman\'s Connecticut Compromise gave each state two senators and the people a population-based House. Slavery\'s fingerprints are on the result: three of every five enslaved people were counted for representation, and the Atlantic slave trade was protected until 1808. The people were kept at arm\'s length — senators chosen by legislatures, presidents by an Electoral College — because the founders feared democracy as much as monarchy: Federalist No. 10 called democracies \'spectacles of turbulence and contention\'. Ratification was a near-run fight; Anti-Federalists demanded a bill of rights, and the first ten amendments followed in 1791. Under Washington, Hamilton\'s program — funding the debt, a national bank, whiskey taxes — split the victors into the first parties: Federalists against Jefferson\'s Democratic-Republicans.',
      },
      { kind: 'example', title: 'Working Through the Evidence: Why Did a Tax Dispute Become a Revolution?', steps: [
        'Pose the question: nobody in 1763 wanted independence — the protests spoke the language of British rights. What changed?',
        'Gather the documents: the Stamp Act Congress (1765) affirmed loyalty; the First Continental Congress (1774) still addressed the king as \'Most Gracious Sovereign\'; yet Common Sense (1776) calls him a \'royal brute\'. Track the shift.',
        'Trace the mechanism: each parliamentary measure met protest; each protest drew a harder response — troops to Boston in 1768, the port closed in 1774 — and each crackdown radicalised moderates.',
        'Weigh the counter-evidence: Parliament repealed the Stamp Act in 1766 and most Townshend duties in 1770, so taxes alone cannot explain the rupture; the sticking point was constitutional — who consented to what.',
        'Conclude: independence emerged from an escalating spiral over principle, not a plan — the loyal petition of 1774 and the republic of 1776 were one movement at two temperatures.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Constitutional law: originalist judges decide live cases by asking what the founding text meant — every gun or search-and-seizure ruling is a founding-history argument.',
        'Federalism: fights between Washington and the states over immigration or health care replay the Articles-versus-Constitution question of how much central power a republic can bear.',
        'Representation: \'taxation without representation\' still rides on Washington, DC license plates — the capital lacks a voting representative in Congress.',
        'Memory politics: monuments, museums and the 1619-versus-1776 debate are active battles over which Revolution gets commemorated.',
        'Global echoes: independence leaders from India to Ghana studied and argued with the first colonial-settler break with empire.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not read independence back into 1765: the Stamp Act Congress and even the First Continental Congress were loyal protests by British subjects demanding British rights. Do not call the founders democrats: they built a republic with property qualifications, fearing majority rule. Do not recite universal liberty: the author of \'all men are created equal\' enslaved over a hundred people, and the war\'s largest freedom movement ran toward the British lines. And Paul Revere never finished his midnight ride — he was captured; Longfellow\'s 1860 poem made the legend.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'no taxation without representation', def: 'The colonial creed that only elected representatives could tax a free people.' },
        { term: 'Stamp Act Congress', def: 'Nine colonies in New York (1765): the first unified response to parliamentary taxation.' },
        { term: 'Common Sense', def: 'Thomas Paine\'s January 1776 pamphlet arguing for independence and a kingless republic.' },
        { term: 'republicanism', def: 'The founding creed: elected representatives, civic virtue, no monarch — deliberately not democracy.' },
        { term: 'Articles of Confederation', def: 'America\'s first constitution (1781): a league of states with no power to tax or coerce.' },
        { term: 'Northwest Ordinance', def: 'The 1787 law barring slavery north of the Ohio and scripting territory-to-statehood.' },
        { term: 'three-fifths compromise', def: 'The constitutional bargain counting three of every five enslaved people toward a state\'s representation.' },
        { term: 'The Federalist Papers', def: 'Hamilton, Madison and Jay\'s ratification essays; No. 10 on factions is the most famous.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'The Stamp Act (1765) provoked unprecedented protest because it…',
          options: ['raised the price of tea', 'was a direct internal tax imposed without representation', 'closed the port of Boston', 'stationed soldiers in homes'],
          answer: 1,
          explain: 'Colonists accepted trade regulation but denied Parliament\'s right to tax them directly while unrepresented.',
        },
        {
          q: 'The American victory at Saratoga in 1777 was decisive chiefly because it…',
          options: ['it freed the enslaved', 'it convinced France to ally with the United States', 'it captured Cornwallis', 'it ended the southern campaign'],
          answer: 1,
          explain: 'Saratoga proved the rebels could win, unlocking French money, troops and naval power — decisive at Yorktown.',
        },
        {
          q: 'Under the Articles of Confederation, Congress…',
          options: ['could tax imports directly', 'could not levy taxes or compel the states', 'elected the president', 'appointed all state governors'],
          answer: 1,
          explain: 'Requisitions were voluntary, and the states supplied less than half.',
        },
        {
          q: 'Anti-Federalists\' central objection to the 1787 Constitution was that it…',
          options: ['abolished the states entirely', 'concentrated power without a bill of rights', 'made Washington a king', 'taxed whiskey'],
          answer: 1,
          explain: 'They feared a distant consolidated government like Britain\'s — and won the first ten amendments in 1791.',
        },
      ] },
    ],
  },
  {
    id: 'hist-civil-war-reconstruction',
    title: 'The Civil War and Reconstruction',
    domain: 'Humanities',
    field: 'World History',
    branch: 'Democracy & Rights',
    tier: 'core',
    concepts: [
      'A house divided over slavery\'s expansion',
      'Bleeding Kansas and Dred Scott',
      'Secession and the Confederate republic',
      'Total war: Grant, Vicksburg, Gettysburg',
      'Emancipation transforms the war',
      'The Reconstruction amendments',
      'Black politics and white terror',
      'Redemption and the Compromise of 1877',
    ],
    words: 1830,
    readMins: 9,
    addedOn: '2026-10-19',
    blocks: [
      {
        kind: 'para',
        text: 'In 1858 Abraham Lincoln warned that \'a house divided against itself cannot stand\' — the republic could not endure half slave and half free. Seven years of blood later the house stood and slavery was destroyed, at the cost of more than 600,000 soldiers — the deadliest war in American history. Then came the twelve-year attempt to rebuild the South on new foundations, Reconstruction — realized for a moment, then overthrown by terror and bargain. This lesson follows the war over the contradiction embedded at the founding (see The American Revolution and the Founding of the Republic) and the revolution that followed it, resurrected a century later in The Civil Rights Movement.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The Thirteenth, Fourteenth and Fifteenth Amendments are the legal spine of modern American equality — birthright citizenship, equal protection and the guarantee of the vote all date from Reconstruction, and every modern civil rights claim runs through them. The war\'s unfinished business — voting rights, racial wealth, public memory — is still the raw material of American politics.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Story' },
      {
        kind: 'para',
        text: 'Victory in the Mexican-American War (1846–48) forced the question the founders had deferred: would slavery expand westward? The Wilmot Proviso, barring slavery from the conquered lands, never passed but it defined the sections. The Compromise of 1850 admitted California free and left the rest of the Mexican Cession to \'popular sovereignty\', but its Fugitive Slave Act conscripted the North: commissioners earned ten dollars for returning a suspected freedom-seeker and five for ruling him free, with no jury. Uncle Tom\'s Cabin (1852), the century\'s best-selling novel, humanized slavery\'s cruelties, and the Kansas-Nebraska Act of 1854 — repealing the Missouri Compromise line, leaving slavery to local vote — broke the old party system: from northern Whigs, Free-Soilers and antislavery Democrats rose the Republican Party.',
      },
      {
        kind: 'para',
        text: 'Kansas voted with guns. Proslavery \'border ruffians\' and northern migrants fought a guerrilla war — \'Bleeding Kansas\' — and in May 1856, after a proslavery posse sacked the free-soil town of Lawrence, John Brown hacked five settlers to death at Pottawatomie Creek; weeks later a congressman caned Senator Charles Sumner senseless on the Senate floor. In Dred Scott v. Sandford (1857), Taney\'s Court ruled that Black people could never be citizens and Congress could not bar slavery from any territory. Lincoln\'s 1858 debates with Douglas made him famous; Brown\'s 1859 raid on Harpers Ferry — he was hanged that December, a martyr to many northerners — convinced white southerners the North meant war. In 1860 the Democrats split, and Lincoln won with 40 percent of the popular vote, every northern state, and not one southern one.',
      },
      {
        kind: 'para',
        text: 'South Carolina seceded on December 20, 1860, six more states by February, and the Confederate constitution drafted at Montgomery made the purpose unmistakable: no law \'impairing or denying the right of property in negro slaves\' would ever pass. After Confederate guns bombarded Fort Sumter on April 12, 1861, and Lincoln called for volunteers, the Upper South seceded too — Virginia splitting, its western counties becoming West Virginia (1863). Both sides expected one battle; Bull Run (July 1861), watched by Washington picnickers, cured them. The Union held the deep advantages — twenty million people against the South\'s nine, four million of them enslaved, plus industry, railroads and food — but it had to conquer half a million square miles; the South fought defensively on home ground, and through 1862 the Union bled under cautious generals, with Antietam the war\'s deadliest single day.',
      },
      {
        kind: 'para',
        text: 'The hinge was 1863. Vicksburg surrendered to Grant\'s siege in early July, splitting the Confederacy along the Mississippi; at Gettysburg (July 1–3) Lee\'s last invasion died on Cemetery Ridge — Pickett\'s Charge lost more than half of fifteen thousand men — and Lincoln\'s two-minute address recast the war as a \'new birth of freedom\'. That had begun on January 1, 1863: the Emancipation Proclamation, a war measure under Lincoln\'s powers as commander in chief, declared free all enslaved people in rebelling areas — border states exempt — and opened the army to Black men: nearly 190,000 served by 1865, 85 percent formerly enslaved, like the Fifty-Fourth Massachusetts at Fort Wagner. The war became total war — the draft (which sparked New York\'s murderous 1863 riots, over a hundred dead), paper \'greenbacks\', national banks — and finally Sherman\'s march: Atlanta fell in September 1864, Savannah was Lincoln\'s \'Christmas gift\', and on April 9, 1865, Lee surrendered to Grant at Appomattox Court House.',
      },
      {
        kind: 'para',
        text: 'Reconstruction began before the guns cooled — and immediately became a second war. Lincoln\'s \'ten percent plan\' offered lenient readmission; his assassination on April 14, 1865 handed the task to Andrew Johnson, whose amnesty restored planters to power within a year. Southern \'Black Codes\' answered emancipation with vagrancy laws and labor contracts binding freed workers to a single employer — slavery\'s economics without the name. Congress answered: the Freedmen\'s Bureau (1865) fed and schooled the freed; the Civil Rights Act of 1866 established Black citizenship over Johnson\'s veto; the Fourteenth Amendment (1868) wrote birthright citizenship and equal protection into the Constitution, burying Dred Scott. When Johnson defied Congress, the House impeached him — the Senate fell one vote short — and the Military Reconstruction Acts of 1867 put the South under army rule in five districts, conditioning readmission on Black male suffrage, sealed in the Fifteenth Amendment (1870). A political revolution followed: Hiram Revels and Blanche K. Bruce reached the Senate, fifteen Black men served in the House, and Reconstruction statehouses built the South\'s first public schools and hospitals.',
      },
      {
        kind: 'para',
        text: 'The counterattack was economic and terroristic. With no land reform — Johnson returned confiscated lands — freed families fell into sharecropping and crop-lien debt, while the Ku Klux Klan, founded in 1866, burned schools and murdered voters; at Colfax, Louisiana (1873), white militiamen killed as many as 150 Black Republicans. The Enforcement Acts let Grant crush the Klan in South Carolina, but northern will was fading. \'Redeemer\' Democrats took state after state; the Court gutted the 1875 Civil Rights Act in 1883; and after the deadlocked 1876 election — Hayes versus Tilden, twenty disputed electoral votes, an 8-to-7 commission — the Compromise of 1877 traded the last federal troops for the presidency. Reconstruction ended where Jim Crow began: a \'Solid South\' built on the Fifteenth Amendment\'s deliberate loopholes — poll taxes and literacy tests left standing.',
      },
      { kind: 'example', title: 'Working Through the Evidence: Was the War About Slavery?', steps: [
        'Pose the claim to test: \'the Civil War was about states\' rights, not slavery.\' Check it against the documents rather than the slogans.',
        'Read the secession record: the Confederate constitution (1861) guaranteed property in \'negro slaves\' in any future territory and barred any law denying it; South Carolina acted weeks after an election won by a party pledged only against slavery\'s expansion.',
        'Read the other side honestly: Lincoln\'s first inaugural promised not to interfere with slavery where it existed, and his 1862 letter to Greeley ranked saving the Union above freeing slaves — the North\'s initial war aim was union, not abolition.',
        'Reconcile the asymmetry: the South seceded explicitly to protect slavery; the North fought at first to preserve the Union; emancipation came as strategy and became purpose, sealed by the Thirteenth Amendment.',
        'Conclude: \'states\' rights\' names the instrument, not the aim — the Confederacy itself conscripted soldiers and suspended habeas corpus when slavery demanded central power. The documents say slavery was the cause.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Civil rights law: the Reconstruction amendments underwrite every modern equality claim — the direct legal ancestor of our Civil Rights Movement topic.',
        'Voting rights: the poll taxes and literacy tests that hollowed out the Fifteenth Amendment are exactly what the 1965 Voting Rights Act was written to destroy.',
        'Public memory: fights over Confederate monuments, base names and school curricula are arguments about how this war should be remembered.',
        'Juneteenth: the June 19, 1865 order announcing freedom in Texas is now a national holiday.',
        'Federal power: every debate over when Washington may override the states descends from Reconstruction\'s constitutional revolution.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The evidence does not permit \'the war wasn\'t about slavery\': the Confederacy\'s own constitution guaranteed property in \'negro slaves\' forever, and secession followed an election won purely on halting slavery\'s expansion. But avoid the opposite cartoon: the North fought first for the Union, and its racism was real — the 1863 draft riots killed over a hundred Black New Yorkers. \'States\' rights\' was the instrument, not the motive. And Reconstruction was no simple failure: its amendments, officeholders and schools were real achievements; the \'corrupt carpetbagger\' legend was redeemer propaganda.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'popular sovereignty', def: 'Douglas\'s formula letting territory voters decide on slavery — the engine of Bleeding Kansas.' },
        { term: 'Fugitive Slave Act', def: 'The 1850 law compelling northern help in capturing freedom-seekers: ten dollars for a return, five for freedom.' },
        { term: 'Dred Scott decision', def: 'The 1857 ruling that Black people could not be citizens and Congress could not bar slavery from the territories.' },
        { term: 'Emancipation Proclamation', def: 'Lincoln\'s January 1, 1863 war measure freeing enslaved people in rebelling areas and admitting Black soldiers.' },
        { term: 'Fourteenth Amendment', def: 'Birthright citizenship and equal protection (1868), overturning Dred Scott.' },
        { term: 'Freedmen\'s Bureau', def: 'The 1865 federal agency that fed and schooled the formerly enslaved.' },
        { term: 'sharecropping', def: 'The crop-lien farming system — rent paid in crops, credit at ruinous interest — that trapped freed families in debt.' },
        { term: 'Compromise of 1877', def: 'The bargain resolving the deadlocked 1876 election by withdrawing federal troops — ending Reconstruction.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'The Fugitive Slave Act of 1850 enraged northerners because it…',
          options: ['abolished the slave trade in Washington, DC', 'compelled their help in capturing freedom-seekers, with commissioners paid more for returns', 'admitted California as a slave state', 'raised the tariff on cotton'],
          answer: 1,
          explain: 'Juryless commissioners earned ten dollars for a return, five for freedom — federal law conscripting the North.',
        },
        {
          q: 'Dred Scott v. Sandford (1857) held that…',
          options: ['slavery must end in the territories', 'Black people could never be citizens and Congress could not bar slavery from territories', 'states could nullify federal laws', 'the Fugitive Slave Act was unconstitutional'],
          answer: 1,
          explain: 'Taney\'s ruling went beyond Scott to protect slavery everywhere — and voided the Missouri Compromise.',
        },
        {
          q: 'The Emancipation Proclamation declared free…',
          options: ['all enslaved people everywhere', 'enslaved people in states and areas in rebellion — not the loyal border states', 'only enslaved children', 'enslaved people in Union-occupied New Orleans'],
          answer: 1,
          explain: 'A war measure, enforceable only where Union armies advanced — yet it transformed the war\'s purpose.',
        },
        {
          q: 'The twin Union turning-point victories of July 1863 were…',
          options: ['Antietam and Bull Run', 'Vicksburg and Gettysburg', 'Atlanta and Savannah', 'Shiloh and New Orleans'],
          answer: 1,
          explain: 'Vicksburg split the Confederacy; Gettysburg ended Lee\'s last invasion.',
        },
        {
          q: 'The Fifteenth Amendment (1870)…',
          options: ['abolished slavery', 'barred racial denial of the vote but left poll taxes and literacy tests untouched', 'guaranteed women suffrage', 'readmitted the southern states'],
          answer: 1,
          explain: 'Race could no longer bar the ballot — but the loopholes became Jim Crow\'s toolkit.',
        },
        {
          q: 'Reconstruction effectively ended when…',
          options: ['Johnson was impeached', 'the Compromise of 1877 withdrew the last federal troops from the South', 'Atlanta fell to Sherman', 'the Fourteenth Amendment was ratified'],
          answer: 1,
          explain: 'The Hayes-Tilden bargain traded troop withdrawal for the presidency.',
        },
      ] },
    ],
  },
  {
    id: 'hist-civil-rights-movement',
    title: 'The Civil Rights Movement',
    domain: 'Humanities',
    field: 'World History',
    branch: 'Democracy & Rights',
    tier: 'core',
    concepts: [
      'The Double V generation',
      'Brown v. Board and massive resistance',
      'Montgomery and the boycott weapon',
      'Sit-ins, Freedom Rides and SNCC',
      'Birmingham to Selma: crisis into law',
      'The great statutes of 1964–65',
      'Black Power and the urban North',
      'The unfinished struggle',
    ],
    words: 1706,
    readMins: 9,
    addedOn: '2026-10-19',
    blocks: [
      {
        kind: 'para',
        text: 'On December 1, 1955, Rosa Parks refused to give up her bus seat in Montgomery, Alabama. She was a trained NAACP activist who had decided her arrest would become a test case — not a tired seamstress — and the 381-day boycott her arrest triggered announced a new era. Within a decade, a movement built by students, ministers, sharecroppers and organizers had dismantled the legal architecture of American segregation. This lesson follows the civil rights movement from its postwar origins through the great statutes of 1964–65 to Black Power — and to the unfinished struggles it named into existence.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Integrated schools and lunch counters, a Black electorate in the South, workplace anti-discrimination rules — the ordinary facts of American life today were made in this decade, mostly by people without official power. The movement also became the template for nearly every later campaign for rights (see our lesson Social Movements: How Change Happens), and the statutes it won still structure hiring, firing and voting law.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Story' },
      {
        kind: 'para',
        text: 'World War II created the pressure. Black Americans fought a \'Double V\' campaign — victory over fascism abroad, over racism at home — and a war against Nazi race ideology (see our World Wars topic) made segregation harder to defend; yet returning veterans found GI Bill mortgages and jobs blocked by discrimination and racial covenants. The counterattack began in court: Morgan v. Virginia (1946) desegregated interstate buses; Shelley v. Kraemer (1948) voided racial covenants; Sweatt v. Painter (1950) chipped at \'separate but equal\'; Jackie Robinson integrated baseball in 1947. Then, in August 1955, the torture-murder of fourteen-year-old Emmett Till in Mississippi — his mother\'s open-casket funeral forced the nation to look — and his killers\' acquittal galvanized a generation.',
      },
      {
        kind: 'para',
        text: 'In Brown v. Board of Education (1954), Thurgood Marshall convinced the Warren Court that segregated schools violated the Constitution even with equal facilities: separation itself stamped Black children inferior. Brown overturned Plessy v. Ferguson (1896) and ordered desegregation \'with all deliberate speed\' — speed that rarely came. In 1956, 101 members of Congress signed the Southern Manifesto; districts closed schools rather than integrate. When Governor Faubus barricaded Little Rock\'s Central High against nine Black students in 1957, Eisenhower federalized the Arkansas Guard and sent the 101st Airborne to walk the Little Rock Nine to class — the first federal troops protecting Black rights in the South since Reconstruction.',
      },
      {
        kind: 'para',
        text: 'Montgomery showed the second weapon. Black residents boycotted the buses for 381 days — carpooling, walking, organizing under a young Martin Luther King Jr. — until the Supreme Court affirmed that bus segregation was unconstitutional. The tactic scaled: in February 1960, four college sophomores sat down at a segregated Woolworth\'s counter in Greensboro and stayed until served; within two months sit-ins had spread to fifty-four cities. Ella Baker convened the students into the Student Nonviolent Coordinating Committee (SNCC). In 1961, integrated Freedom Rides tested a ruling on interstate travel: riders were firebombed at Anniston, beaten in Birmingham, jailed in Jackson — and kept riding.',
      },
      {
        kind: 'para',
        text: 'The masterstroke was Birmingham in 1963: police dogs and fire hoses turned on demonstrators, children among them, filled television screens, while King\'s \'Letter from a Birmingham Jail\' answered the plea to wait — Black Americans had waited patiently for more than three hundred years. After Governor Wallace stood in the schoolhouse door at the University of Alabama, Kennedy proposed the civil rights bill; his assassination that November left it to Lyndon Johnson, who broke a Senate filibuster and signed the Civil Rights Act of 1964 — banning discrimination in public accommodations and employment by race, color, religion, national origin and, through a segregationist\'s poison-pill amendment, sex — and creating the EEOC. The Twenty-Fourth Amendment killed poll taxes in federal elections; Freedom Summer registered Mississippi voters and buried three murdered workers. Then, on \'Bloody Sunday\' (March 7, 1965), state troopers assaulted marchers at Selma\'s Edmund Pettus Bridge — and the Voting Rights Act followed within months, outlawing literacy tests. A quarter million Black southerners registered soon after; a majority of African Americans by 1967.',
      },
      {
        kind: 'para',
        text: 'Victory in law was not victory in life. Watts burned in 1965 — thirty-four dead — and 329 riots shook 257 cities between 1964 and 1968, exposing segregation without statutes: poverty, housing, policing. A new mood answered: Stokely Carmichael\'s Black Power; Malcolm X preaching freedom \'by any means necessary\' until his assassination in February 1965; and in Oakland (1966) the Black Panther Party, whose Ten Point Program demanded jobs, housing, education and an end to police brutality. Black Pride made \'Black Is Beautiful\' a cultural force. King, pivoting toward poverty and war, was assassinated in Memphis on April 4, 1968, supporting striking sanitation workers. The movement\'s energy spilled into parallel struggles — the Mexican American fight that had won Hernandez v. Texas (1954), and, through Title VII\'s sex clause, second-wave feminism.',
      },
      {
        kind: 'para',
        text: 'The ledger is double. Between 1964 and 1968 the movement\'s legal agenda — the 1964 Act, the Voting Rights Act, the 1968 fair-housing law — dismantled Jim Crow, and Johnson\'s Great Society cut the poverty rate nearly in half. But Vietnam drained the money, the draft fell unfairly — nearly two-thirds of eligible Black men drafted against under a third of white men — and de facto segregation outlived the legal kind. The debates the movement opened, over policing, voter access and public symbols, are today\'s politics; the tools it built are the ones still contested in court. The movement did not end the struggle; it supplied its law, tactics and memory.',
      },
      { kind: 'example', title: 'Working Through the Evidence: Why Did Nonviolent Direct Action Work?', steps: [
        'Pose the puzzle: Brown was the law of the land by 1954, yet in 1960 fewer than 10 percent of southern Black students attended integrated schools. Why did confrontation succeed where court orders stalled?',
        'Gather the cases: Montgomery\'s boycott (381 days) struck the bus company\'s revenue; Greensboro\'s students targeted a national chain \'especially vulnerable to negative publicity\'; Birmingham\'s dogs and hoses ran on television screens nationwide.',
        'Identify the mechanism: disciplined nonviolence provoked violent response, exposing Jim Crow\'s brutality to national audiences — while Cold War optics raised the stakes, since segregation was costing the United States allies abroad.',
        'Test against counter-evidence: Watts burned a year after the 1964 Act, and northern poverty outlived legal victory — limits that fed the Black Power turn.',
        'Conclude: the tactic converted local injustice into national crisis, and federal law followed crisis — the 1964 Act after Birmingham, the 1965 Act after Selma. Nonviolence was engineered confrontation, not passivity.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Voting law: the Voting Rights Act\'s federal oversight provisions and modern court challenges to them structure today\'s election-law battles.',
        'Workplace law: Title VII and the EEOC still govern discrimination claims — see our Employment and Labor Law lesson.',
        'Protest playbooks: from sit-ins and freedom rides to boycotts and hashtags, later movements copy the civil rights toolkit (see Social Movements: How Change Happens).',
        'Schools: desegregation orders, busing controversies and resegregation still shape district lines and education policy.',
        'Public memory: the King holiday, Juneteenth\'s rise as a federal holiday, and fights over monuments and curricula keep this history politically alive.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Rosa Parks was not \'just tired\': she was an NAACP-trained activist who chose arrest deliberately, and a Black women\'s organization launched the boycott. The movement was never one man: King was one leader among thousands — Ella Baker, SNCC students and local organizers did the grinding work. Nonviolence was not passivity; it engineered crises that forced federal action. \'Racism was a southern problem\' misreads Watts and the northern ghettos that burned after 1964. And \'the law solved it\' is premature: the statutes won in 1964–65 are precisely what modern litigation contests.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Jim Crow', def: 'The state and local regime of legal segregation built after Reconstruction\'s collapse.' },
        { term: 'Brown v. Board of Education', def: 'The 1954 ruling that school segregation is unconstitutional even with equal facilities — Plessy overturned.' },
        { term: 'sit-in', def: 'The student tactic of occupying a segregated counter until served; Greensboro, 1960.' },
        { term: 'SNCC', def: 'The Student Nonviolent Coordinating Committee (1960), the movement\'s grassroots organizing arm.' },
        { term: 'Civil Rights Act of 1964', def: 'Banned discrimination in public accommodations and employment; created the Equal Employment Opportunity Commission.' },
        { term: 'Voting Rights Act of 1965', def: 'Outlawed literacy tests and empowered federal oversight of registration — the movement\'s electoral crown.' },
        { term: 'Black Power', def: 'The late-1960s turn toward Black political and economic self-determination, from Carmichael to the Panthers.' },
        { term: 'Great Society', def: 'Johnson\'s 1964–65 program: war on poverty, Medicare and Medicaid, education funding and civil rights law.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'Brown v. Board of Education (1954) overturned…',
          options: ['the Fifteenth Amendment', 'Plessy v. Ferguson\'s \'separate but equal\' doctrine', 'the Civil Rights Act of 1875', 'Dred Scott v. Sandford'],
          answer: 1,
          explain: 'The Warren Court held that separation itself made Black children inferior — unconstitutional even with equal facilities.',
        },
        {
          q: 'The Montgomery Bus Boycott ended after 381 days when…',
          options: ['the bus company went bankrupt', 'the Supreme Court upheld a ruling that bus segregation was unconstitutional', 'Governor Wallace ordered integration', 'King was elected to the city council'],
          answer: 1,
          explain: 'A federal court found the ordinance unconstitutional in 1956; the Supreme Court affirmed, and the buses were desegregated.',
        },
        {
          q: 'The immediate catalyst for the Voting Rights Act of 1965 was…',
          options: ['the March on Washington', 'the assault on marchers at Selma\'s Edmund Pettus Bridge — \'Bloody Sunday\'', 'the Greensboro sit-in', 'the Brown decision'],
          answer: 1,
          explain: 'Televised police violence on March 7, 1965 turned national opinion; Johnson\'s bill became law that August.',
        },
        {
          q: 'The ban on sex discrimination in Title VII was originally added…',
          options: ['at NOW\'s insistence', 'by a segregationist congressman hoping women\'s equality would sink the bill', 'by the EEOC', 'during the 1968 amendments'],
          answer: 1,
          explain: 'The poison pill failed: the act passed with sex included — a founding text of workplace equality law.',
        },
        {
          q: 'The Black Panther Party\'s Ten Point Program demanded…',
          options: ['a separate Black nation in the South', 'jobs, housing, education and an end to police brutality', 'reparations paid in land', 'abolition of the military draft'],
          answer: 1,
          explain: 'Founded in Oakland (1966) by Newton and Seale, the Panthers read Black oppression as capitalist as well as racial.',
        },
        {
          q: 'Martin Luther King Jr. was in Memphis in April 1968 to…',
          options: ['run for office', 'support striking sanitation workers', 'protest the Vietnam War draft', 'open a freedom school'],
          answer: 1,
          explain: 'King had gone to Memphis to back the sanitation workers\' union drive when he was assassinated on April 4.',
        },
      ] },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'hist-french-revolution-napoleonic-era',
    title: 'The French Revolution and the Napoleonic Era',
    domain: 'Humanities',
    field: 'World History',
    branch: 'Democracy & Rights',
    tier: 'core',
    concepts: [
      'The Old Regime: three estates and absolute monarchy',
      '1789: Estates-General, Bastille and the August decrees',
      'The Declaration of the Rights of Man and of the Citizen',
      'Radicalization: war, Republic, the Terror and Thermidor',
      'Napoleon: the Consulate, the Empire and the Civil Code',
      'The Congress of Vienna and the revolutionary legacy',
    ],
    words: 2438,
    readMins: 12,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: "In 1788 France was the most powerful kingdom in Europe — the cultural capital of the continent, the leader of the Enlightenment, the ally without which American independence would have failed. Within ten years its king was dead, its monarchy abolished, and its language of rights had been carried by French armies from Madrid to Moscow. The French Revolution is therefore not one event but a chain reaction: a fiscal crisis that forced a king to call a parliament, a parliament that declared itself a nation, a nation at war that devoured its own children, and a general who turned revolutionary energy into a European empire. Understanding how each stage produced the next — and why the world's first great rights declaration emerged from the same decade as the first state-orchestrated Terror — is the work of this lesson.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "The Revolution created the political vocabulary the modern world still argues in: left and right (seating positions in the National Assembly of 1789), citizen, nation, constitution, terror, counter-revolution. Every later revolution — 1848, 1917, and the independence movements of Latin America, including Brazil's very different path — measured itself against or against-against the French model. Examinations worldwide, from national boards to university-entrance syllabuses, treat the events of 1789 to 1815 as the hinge between the early modern and modern worlds: absolute monarchy giving way to mass politics, feudal privilege to legal equality, and dynastic war to nations in arms.",
      },
      { kind: 'heading', text: 'The Old Regime: A Society Built on Privilege' },
      {
        kind: 'para',
        text: "France before 1789 was an 'absolute' monarchy in theory — Louis XIV's injunction that the state was himself — but in practice a negotiation among privileged corporations. Society was legally divided into three estates: the First Estate, the clergy, owning perhaps a tenth of the land and levying its own tax (the tithe); the Second Estate, the nobility, exempt from the main direct tax (the taille) and monopolizing army and church offices; and the Third Estate, everyone else — roughly 97 percent of the population, from peasants and urban workers to the bourgeoisie of lawyers, merchants and doctors. The countryside still carried feudal dues: payments and obligations owed to lords for land held 'of' them, relics of medieval tenure that survived into an age of expanding commerce. The great contradiction of the century was that the most dynamic, literate and wealthy group — the bourgeoisie — was locked out of the rank that mattered, while the state's finances collapsed under the debts of the Seven Years' War and the American war.",
      },
      {
        kind: 'para',
        text: "The intellectual weather had changed as well. Enlightenment writers — Montesquieu dissecting constitutions into separation of powers, Voltaire skewering clerical privilege, Rousseau grounding legitimacy in the general will, the physiocrats and the Encyclopédie cataloguing a rational world — had not written revolution, but they had written a language in which privilege looked absurd and sovereignty looked transferable. After the Reformation's wars of religion had broken the idea of one unified Christendom, and as maritime expansion poured colonial sugar and slave-produced wealth through Atlantic ports like Bordeaux and Nantes, the Old Regime's justifications looked older every year. Two attempted tax reforms failed when privileged courts refused to register them; by 1787 the state was effectively bankrupt, and the only institution that could legitimize new taxes had not met since 1614. Louis XVI summoned the Estates-General for May 1789.",
      },
      { kind: 'heading', text: '1789: From Estates-General to Rights of Man' },
      {
        kind: 'para',
        text: "The crisis turned constitutional within weeks. Voting in the Estates-General was by order — one vote per estate — which would have let the two privileged estates outvote the Third two to one. The Third Estate's delegates, doubles representing commoners, demanded vote by head; refused, they declared themselves (June 17) a National Assembly, the sole representative of the nation, and when the king locked their hall they withdrew to a nearby indoor tennis court and swore not to disperse until France had a constitution — the Tennis Court Oath. On July 14 a Parisian crowd, seeking gunpowder and a symbol, stormed the Bastille, a royal fortress-prison holding seven prisoners; the garrison surrendered, and the date became the revolution's founding festival. In the countryside peasants burned châteaux records — the 'Great Fear' — and in August the Assembly abolished feudalism wholesale in the August decrees, ending seigneurial dues, venal office and tax exemption in a single night.",
      },
      {
        kind: 'para',
        text: "The philosophical core arrived on August 26: the Declaration of the Rights of Man and of the Citizen. Its seventeen articles asserted that men are born and remain free and equal in rights; that sovereignty resides in the nation, not in a person; that law is the expression of the general will and must be the same for all; and that liberty, property, security and resistance to oppression are natural rights the state exists to protect. Note what the document did not do — it said nothing about women (Olympe de Gouges' Declaration of the Rights of Woman followed in 1791 and cost her her life), nothing about slavery (the Convention abolished it in the colonies only in 1794, under pressure from the Haitian Revolution; Napoleon restored it in 1802), and it made property sacred even as economic crisis sharpened. The October Women's March on Versailles forced the king to Paris; the Assembly reorganized France into departments, nationalized church lands in assignats, and in July 1790 the Civil Constitution of the Clergy split the nation down the middle — oath-taking 'constitutional' priests versus 'refractory' ones — turning a fiscal revolution into a religious schism that whole provinces would not forgive.",
      },
      { kind: 'heading', text: 'Radicalization: War, Republic and the Terror' },
      {
        kind: 'para',
        text: "War made the Terror. The Declaration of Pillnitz (1791), in which Austria and Prussia threatened intervention, and the flight of the royal family to Varennes the same year — recaptured at the border — convinced Paris that the king was a traitor in alliance with foreign arms. France declared war on Austria in April 1792; the war went badly, Prussian armies advanced, and a Paris insurrection stormed the Tuileries in August. The September massacres of prison inmates foreshadowed what mobilized fear could do; in the same month the new National Convention abolished the monarchy, and in January 1793 Louis Capet — citizen, not king — was guillotined. Now the Republic fought Britain, Spain, the Netherlands, Austria and Prussia at once, faced a royalist peasant war in the Vendée that killed hundreds of thousands, and saw federalist cities revolt against Paris. The Committee of Public Safety answered with the Terror: revolutionary tribunals, the levée en masse drafting the whole nation, the Law of Suspects, and some 17,000 official executions — Vendée atrocities aside — with Marie Antoinette, the scientist Lavoisier and the journalist Camille Desmoulins among them. Robespierre's cult of the Supreme Being and his equation of virtue with terror alienated the very deputies who feared being next; on 9 Thermidor (July 1794) they arrested and guillotined him within a day. The Terror killed perhaps a tenth of the rate the civil war and foreign invasion killed, but it fixed the Revolution's image forever.",
      },
      { kind: 'heading', text: 'Napoleon: The Revolution in Uniform' },
      {
        kind: 'para',
        text: "The Directory (1795-99) swung between Jacobin revival and royalist coup attempts while young generals — not least the artillery officer Napoleon Bonaparte, whose Italian campaigns had turned a defensive war into conquest — accumulated the popularity the civilian regime lacked. In November 1799 Napoleon's coup of 18 Brumaire ended the Republic; the Consulate, then the Empire (1804), stabilized the revolution's gains and extinguished its politics. The Civil Code of 1804 — the Napoleonic Code — confirmed legal equality, property rights, religious toleration and the abolition of feudalism in one readable statute, and became the model for civil law across Europe and Latin America; a separate branch of legal study in this library follows the Code's worldwide codification career. Napoleon also centralized administration (prefects), settled relations with the Pope (Concordat of 1801), created the lycée and the Bank of France, and — with the Code — made his empire export the Revolution at bayonet-point: wherever his armies went, guilds, serfdom and aristocratic privilege fell. His two failures were the same war twice: the Continental System strangled trade without breaking Britain, and the 1812 invasion of Russia destroyed the Grande Armée in snow and distance. At Leipzig (1813) and inside France (1814) the coalitions closed in; abdication, the Hundred Days, and final defeat at Waterloo (1815) ended the adventure.",
      },
      {
        kind: 'para',
        text: "The Congress of Vienna (1814-15), guided by Metternich, redrew Europe to prevent another hegemon — a balance of power, buffer states, a restored but chastened France — and tried to restore legitimacy. It could restore thrones but not the world the Revolution had made. Feudal privilege returned nowhere durably; peasants kept their land; the Code survived in most of the territories that had received it; and the idea that sovereignty belongs to the nation, that careers should be open to talent, and that law should be equal and written, was now the standard against which every European regime would be measured. The century after Vienna — its 1830 and 1848 revolutions, its unifications, its simmering contests between liberal constitutions and conservative order — was, in one way or another, an argument over the Revolution's unfinished business.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Exam task: explain in three steps why the summoning of the Estates-General in 1789 triggered a constitutional revolution rather than a tax settlement.",
        "Step 1 — structure: vote by order meant the Third Estate's doubles (twice as many delegates) could still be outvoted 2-to-1 by clergy and nobility, so procedural fairness was impossible from the start.",
        "Step 2 — move: the Third Estate reconstituted itself as the National Assembly and claimed to speak for the sovereign nation — a claim the Tennis Court Oath made irrevocable ('until the constitution is established').",
        "Step 3 — force: the Bastille gave Paris street power that protected the Assembly, and the Great Fear + August decrees destroyed feudalism before the king could rally supporters; the king lost the monopoly of force that had made royal absolutism work.",
        "General rule: in revolution essays, separate the PROCEDURAL crisis (who votes, who counts), the IDEOLOGICAL claim (nation as sovereign) and the PHYSICAL shift (crowds and garrisons) — the revolution succeeded because all three moved together in the summer of 1789.",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Constitutional design: the Declaration\'s articles are ancestor text for the Universal Declaration of Human Rights (1948) and most modern bills of rights — reading them side by side shows what each era added.',
        'The metric system, commissioned by the Revolutionary assemblies to be "for all people, for all time", is the Revolution\'s quietest and most durable export.',
        'The Code Napoléon still governs civil law in France, Belgium, much of Latin America and Louisiana\'s private law — a legal-geography exercise maps the empire that fell.',
        'The Terror remains the standard case study in how emergency powers expand: each decree (suspects, tribunals) normalized the last — a pattern any emergency-powers debate today echoes.',
        'Left/right seating from 1789 still labels the political spectrum in parliaments worldwide — an etymology of the room politics happens in.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Five confusions cost marks. Dating: the Storming of the Bastille (July 14, 1789) is not the Declaration of Rights (August 26) and not the September massacres of 1792. Agents: the Terror was the Committee of Public Safety under Robespierre, not Napoleon — Napoleon ends the revolution, he does not lead its radical phase. Estates: the Third Estate is everyone unprivileged — bourgeois included — not 'the poor'; its deputies were mostly lawyers. The Code: it codified civil law (property, contract, family), it is not a constitution. And Vienna: the Congress restored balance and legitimacy, but it could not and did not restore feudalism — the social revolution stuck even where the political one was reversed.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Estates-General', def: 'The kingdom\'s assembly of the three estates, summoned in 1789 for the first time since 1614 to approve new taxes.' },
        { term: 'Tennis Court Oath', def: 'The Third Estate\'s June 1789 vow not to disperse until France had a constitution, taken on an indoor tennis court after their hall was locked.' },
        { term: 'Declaration of the Rights of Man and of the Citizen', def: 'August 1789 charter asserting natural rights, national sovereignty and legal equality — the Revolution\'s ideological core.' },
        { term: 'Great Fear', def: 'The summer-1789 rural panic in which peasants burned manorial records, prompting the August decrees abolishing feudal dues.' },
        { term: 'Committee of Public Safety', def: 'The emergency executive of 1793-94 whose tribunals and Law of Suspects conducted the Terror.' },
        { term: 'Thermidor', def: 'The July 1794 coup that overthrew and executed Robespierre, ending the Terror.' },
        { term: 'Napoleonic Code (Civil Code 1804)', def: 'The unified civil statute confirming legal equality, property and secular marriage — the Revolution\'s social gains written into law.' },
        { term: 'Congress of Vienna', def: 'The 1814-15 settlement restoring a balance of power in Europe after Napoleon\'s defeat.' },
        { term: 'Levée en masse', def: 'The 1793 mass conscription mobilizing the entire nation for war — the first modern total-war measure.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Why did the Third Estate declare itself the National Assembly in June 1789?',
          options: ['The king had dissolved the Estates-General', 'Voting by order would permanently outvote the Third Estate regardless of its size', 'The clergy refused to attend the meetings', 'The nobility had joined the king’s new council'],
          answer: 1,
          explain: 'Vote by ORDER meant one vote per estate: clergy and nobility could always outvote the Third 2-to-1. The Declaration of Pillnitz and the Bastille came at other moments, and dissolution happened later.',
        },
        {
          q: 'Which body conducted the Terror of 1793-94?',
          options: ['The Directory', 'The Committee of Public Safety', 'The Consulate', 'The National Assembly of 1789'],
          answer: 1,
          explain: 'The Committee of Public Safety — dominated by Robespierre — ran the revolutionary tribunals and the Law of Suspects. The Directory followed Thermidor; the Consulate is Napoleon\'s regime.',
        },
        {
          q: 'The Napoleonic Code of 1804 is best described as:',
          options: ['A constitutional charter restoring the monarchy', 'A unified civil code confirming legal equality, property rights and the abolition of feudalism', 'A treaty partitioning Europe after Waterloo', 'A criminal code establishing revolutionary tribunals'],
          answer: 1,
          explain: 'The Civil Code consolidated the Revolution\'s social achievements in private law. The Congress of Vienna made the treaties; the tribunals belong to the Terror; the monarchy returned in 1814 by coalition victory, not by code.',
        },
        {
          q: 'What did the Congress of Vienna (1814-15) achieve and fail to achieve?',
          options: [
            'It abolished feudalism across Europe but failed to restore peace',
            'It restored a balance of power and legitimacy, but could not undo the social and legal changes the Revolution had made',
            'It unified Germany and Italy immediately',
            'It reinstated voting rights for the Third Estate across Europe',
          ],
          answer: 1,
          explain: 'Metternich\'s settlement rebalanced power and restored thrones, yet the Code survived, peasants kept land, and national sovereignty remained the standard — the social revolution was irreversible even where politics was reversed.',
        },
      ] },
    ],
  },
]

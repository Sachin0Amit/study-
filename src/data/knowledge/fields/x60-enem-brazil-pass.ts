import type { KnowledgeTopic } from '../types'

/** EXAM-GAP PASS X60 (2026-10-27): ENEM launch (57th curated exam) + gap closure.
 *
 * This pass added Brazil's ENEM (Exame Nacional do Ensino Médio) as the
 * 57th curated exam (src/data/exams/brazil.ts — four knowledge areas × 45
 * questions + the dissertative-argumentative essay, per the official INEP
 * ENEM page, Edital INEP nº 64/21-05-2026 and the INEP Matriz de
 * Referência). Probing the new syllabus against the matchers exposed the
 * topics the Library could not honestly serve; the five lessons below
 * close those gaps. Each was carved against its neighbours so the Library
 * stays repetition-free:
 *
 *  1. hist-french-revolution-napoleonic-era — the Old Regime (estates,
 *     absolutism, fiscal crisis, Enlightenment critique), 1789, the
 *     radical phase and Terror, Napoleon and the Congress of Vienna.
 *     Carved: hist-american-revolution-founding owns the American founding
 *     and constitutional design; hum-political-philosophy owns contract
 *     THEORY (this lesson uses it as historical context only);
 *     hist-twentieth-century begins in 1914; the law-governance
 *     codification lesson cites the Napoleonic Code once as comparative
 *     law — this lesson owns the REVOLUTIONARY HISTORY itself.
 *  2. hist-brazil-colonial-slavery-empire — colonial Brazil (sugar,
 *     slavery, bandeirantes, gold, Inconfidência), independence 1822 in
 *     its Spanish-American context (Bolívar/San Martín/caudillismo), the
 *     Empire and abolition. Carved: hist-decolonization owns twentieth-
 *     century Global-South decolonization; the Spanish-American
 *     independence paragraph here is the Library's ONLY Latin American
 *     independence coverage (grep-verified zero hits for Bolívar).
 *  3. hist-brazil-republic-vargas-dictatorship — Old Republic, Vargas,
 *     the 1964-85 military regime, redemocratization and the 1988
 *     Constitution. Carved against hist-twentieth-century (global Cold
 *     War frame; this lesson owns the Brazilian national narrative) and
 *     hist-koreas-division (owns Korean development-state comparison).
 *  4. lit-brazilian-literature-modernism — Trovadorismo to contemporary
 *     Brazilian letters (Barroco, Arcadismo, Romanticism, Machado de
 *     Assis, Semana de 1922, modernism, 1930-45 generation). Carved:
 *     lang-literary-devices owns figurative-language TECHNIQUE; lang-epic-
 *     tradition owns the European epic canon; this lesson owns the
 *     BRAZILIAN tradition, including modernism's intertextual parody and
 *     colloquial register revolution (which also serves ENEM's linguistic-
 *     variation topic).
 *  5. env-brazil-biomes-geography — the six Brazilian biomes, drivers and
 *     data of Amazon/Cerrado deforestation, the Forest Code and policy
 *     architecture. Carved: env-biodiversity-loss owns extinction drivers
 *     globally; env-measuring-biodiversity owns measurement METHODS
 *     (Simpson/Shannon/Lincoln); env-carbon-sinks owns the global carbon
 *     budget; env-restoration-rewilding owns restoration practice — this
 *     lesson owns the BRAZILIAN national geography and its policy.
 *
 * All five are exam-facing but written as evergreen lessons; the ENEM
 * matrix areas they serve are named in the grounding callouts. Sources:
 * Britannica (France, Brazil, Literature of Brazil), Library of Congress
 * Country Study Brazil, INEP essay rubric, INPE/PRODES deforestation
 * data, ICMBio/conservation-unit system, primary texts in translation.
 */

export const x60EnemBrazilPassTopics: KnowledgeTopic[] = [
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
  // ------------------------------------------------------------------
  {
    id: 'hist-brazil-colonial-slavery-empire',
    title: 'Colonial Brazil, Slavery and the Empire: 1500-1889',
    domain: 'Humanities',
    field: 'World History',
    branch: 'Brazilian History',
    tier: 'core',
    concepts: [
      'Captaincies, sugar and the plantation-slavery complex',
      'Bandeirantes, the gold cycle and Minas Gerais',
      'The Inconfidência Mineira: first independence conspiracy',
      'Independence 1822 in its Spanish-American context',
      'Pedro II, coffee and the Paraguayan War',
      'Abolition: Lei Eusébio de Queirós to the Lei Áurea',
    ],
    words: 2082,
    readMins: 10,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: "Brazil's first three centuries made it the one Portuguese-speaking, monarchy-born, slave-society giant of the Americas — and its differences from Spanish America are the point of every comparison an examination will ask. Portugal claimed the coast in 1500 under Pedro Álvares Cabral, but a treaty with Spain (Tordesillas, 1494) had already divided the Atlantic world along a line that generously ceded eastern South America to Lisbon. What followed was not the silver-and-viceroyalty structure Spain built in Mexico and Peru but a commercial colony: a string of coastal factory-towns feeding one export crop after another — brazilwood dye, sugar, gold, coffee — each wave pulling in more enslaved Africans than any other colony in the hemisphere would ever receive. By independence in 1822 roughly half of Brazil's population was of African descent, the elite had been educated inside the empire rather than against it, and the result was a peaceful transfer that kept the whole territory intact — the largest contiguous state in Latin America, with its monarchy attached.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "Brazil is the case that tests every generalization about Latin American history. Where Spanish colonies fragmented into a dozen republics after independence, Brazil did not; where the Enlightenment-republic template produced constitutions and caudillos, Brazil produced an emperor who reigned sixty years; and nowhere in the Americas did slavery last longer — abolished only in 1888, a generation after the United States — or shape the national economy and demographics more deeply. University-entrance syllabuses in Brazil examine this period as the origin of the country's structural questions: land concentration (latifúndio), racial inequality, the state-led economy. The Library's global lessons on empire and decolonization cover the general mechanics; this lesson owns the Brazilian national narrative.",
      },
      { kind: 'heading', text: 'Sugar and Slavery: The First Atlantic Economy' },
      {
        kind: 'para',
        text: "Early colonization ran on a cheap institutional technology: the captaincy system (1530s), which carved the coast into fifteen hereditary lots granted to donatários who financed settlement themselves. Most failed; the Crown then installed a royal governor at Salvador da Bahia (1549) and built the colony around sugar. Sugar was the perfect settler crop — Europe's sweetness craving was bottomless, the tropical coast was ideal, and processing demanded capital, mills (engenhos) and armies of workers. Indigenous labour collapsed under disease and flight, and from the 1570s the colony turned to the Atlantic slave trade, which Portugal dominated from its Angolan and Congo ports. Bahia and then Pernambuco became the richest slave societies of the seventeenth-century Atlantic, exporting sugar in Portuguese ships to a European market Portugal then re-imported through Dutch distributors — until the Dutch West India Company, having seized parts of Pernambuco (1630-54), taught the English, French and Caribbean competitors the whole business model. Sugar's descent in value pushed the colony's economic center of gravity onward — first to the mining frontier.",
      },
      {
        kind: 'para',
        text: "Into the interior went the bandeirantes — mixed-race and Indian-descended expeditions from São Paulo that combined slave-raiding against indigenous villages with prospecting. Their place in Brazilian memory is double: pathfinders who quadrupled the territory's effective reach (finding gold in Minas Gerais in the 1690s, and pushing to the Amazon's far west), and destroyers whose slaving depopulated entire regions. The gold cycle made Rio de Janeiro the capital (1763) and briefly made Brazil the world's largest gold producer; it also built the first genuinely internal Brazilian society in Minas Gerais — towns, craftsmen, musicians and a Creole elite taxed to the bone. That taxation produced the Revolution's first Brazilian echo: the Inconfidência Mineira (1789), a clique of mine-owners, poets and officers led by Tiradentes, protesting the derrama (a confiscatory tax arrears levy) and inspired by the American example and Minas' own Enlightenment poets. The plot was betrayed before it fired a shot; Tiradentes was executed and quartered, and became the republic's martyr-hero two centuries later.",
      },
      { kind: 'heading', text: 'Independence 1822: The Monarchy That Stayed' },
      {
        kind: 'para',
        text: "The Napoleonic Wars made the colony the metropolis: in 1808, fleeing French armies, the Portuguese court itself moved to Rio de Janeiro — the only time a European royal house governed its empire FROM the colony. Ports opened, manufactures were permitted, academies founded; Brazil became a kingdom united to Portugal (1815). When the king returned to Lisbon in 1821, the Cortes tried to roll Brazil back to colonial status; his son Dom Pedro declared Independence on September 7, 1822 (his 'Fico' — 'I stay' — had preceded it), was crowned Emperor Pedro I, and defeated the few Portuguese garrisons that resisted. Compare the Spanish American route: there, Napoleon's capture of the king created JUNTAS that slid into wars of independence fought army against army for fifteen years — Simón Bolívar's campaigns through Venezuela, Colombia, Ecuador, Peru and Bolivia, José de San Martín's from Argentina across the Andes to Chile and Lima — producing a dozen republics governed by creole officers, many ruled for decades by caudillos, personalist military chiefs (Rosas in Argentina, Santa Cruz in the Andes). Brazil skipped the war, the fragmentation and the republic: no mass mobilization, no junta politics, one state, one monarch — the son of the Portuguese king. The price was continuity: independence was negotiated by the same landowning class, and slavery arrived at 1822 untouched.",
      },
      { kind: 'heading', text: 'The Empire: Coffee, Slavery and the Monarchy\'s End' },
      {
        kind: 'para',
        text: "Pedro I abdicated in 1831 (to fight Portugal's throne struggle), leaving a nine-year-old heir and a regency decade of provincial revolts (Cabanagem in Pará, Balaiada in Maranhão, the Farrapos republic in Rio Grande do Sul, Sabinada in Bahia) that the adult Pedro II's coronation (1840) and a centralized, election-managed parliamentary monarchy gradually pacified. The economy shifted to coffee — first the Paraíba Valley near Rio, then western São Paulo — financed by British capital and run on slave labour even as the trade itself was choked off: the Lei Eusébio de Queirós (1850) banned the Atlantic slave trade under British pressure, which turned the planter class toward the internal slave market and, eventually, toward immigrant labour. The Paraguayan War (1864-70) — Brazil, Argentina and Uruguay against López's Paraguay, the deadliest inter-state war in the hemisphere's history — enlarged the army's self-regard, and its officers, plus an officer-oligarch movement (positivist-influenced, abolitionist), became the monarchy's gravediggers as the slave question finally broke.",
      },
      {
        kind: 'para',
        text: "Abolition came in stages exactly as pressure demanded: the free womb law (Lei do Ventre Livre, 1871) freed children of enslaved mothers; the Sexagenarian Law (1885) freed the over-sixty; and on May 13, 1888 the Lei Áurea abolished slavery outright, without compensation or land reform — leaving roughly 700,000 freed people to a 'post-emancipation' of sharecropping, vagrancy laws and imported Italian and Japanese colonato labour on the same latifúndia. The planter elite, feeling betrayed by the monarchy's abolitionist court, joined the republicans and the army; in November 1889 a military coup under Marshal Deodoro da Fonseca proclaimed the Republic and sent the Emperor into exile. The Empire fell for doing its last great duty — but it fell having held the country together, ended slavery last in the hemisphere, and handed the Old Republic a nation-sized state whose institutions, borders and racial-demographic profile were the direct legacy of the colonial and imperial centuries.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Exam task: in four steps, explain why Brazil's independence produced one unified monarchy while Spanish America produced a dozen warring republics.",
        "Step 1 — metropolis intact: Napoleon's invasion installed Joseph Bonaparte in MADRID, decapitating Spanish authority; in Lisbon the court itself FLED to Rio, so legitimate Portuguese sovereignty relocated intact to the colony.",
        "Step 2 — location of legitimacy: Brazilian elites had spent 1808-1821 inside the empire's capital, gaining ministries, ports and a kingdom title — they negotiated independence WITH a prince; Spanish creoles had built juntas in the king's absence and fought each other over who owned the revolution.",
        "Step 3 — military geography: Spanish American independence required continental campaigns (Bolívar from the north, San Martín from the south) that raised creole armies — the embryos of caudillo politics; Brazil's garrisons were small and switched sides.",
        "Step 4 — the settlement: Pedro I accepted a constitution (1824) granting a moderate monarchy with the moderating power (poder moderador) reserved to the emperor — no elective republic meant no presidential succession wars. Latin America's fragmentations map exactly onto where each mechanism failed.",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'The Atlantic-slave-trade dataset (the Voyages project, built from Portuguese and Brazilian shipping records) is the statistical backbone of this lesson — Brazil received roughly 4.9 million enslaved Africans, about forty percent of all crossings, more than any other destination in the Americas.',
        'Quilombo dos Palmares — the fugitive-slave state of Zumbi, destroyed 1695 — is the reference case of maroon resistance and a national symbol; Brazil\'s 1988 Constitution formally recognizes surviving quilombo communities\' land rights.',
        'The Paraguayan War\'s casualty ratios (Paraguay may have lost the majority of its male population) make it the standard case in demographic-cost-of-war analysis.',
        'The latifúndio-colonato land structure born in the coffee era underlies present-day debates on agrarian reform and the MST landless-workers\' movement.',
        'November 20 (Zumbi\'s death) is Brazil\'s Black Consciousness Day — the calendar itself records the abolition history this lesson narrates.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Four traps. Dates: independence is 1822 (not 1889 — that is the Republic's proclamation); the Lei Áurea is 1888, one year BEFORE the Republic. Attribution: Bolívar and San Martín liberated Spanish America — do not attach them to Brazil, whose independence was dynastic. The Inconfidência Mineira (1789) is a TAX revolt inspired by the American example — it did not involve the French Revolution and failed before fighting. And the captaincies: the hereditary lots are CAPTAINCIES (capitanias), a proprietary grant system — not the naval title; and they are distinct from the 1808 move of the court, which made Brazil the seat of empire rather than a mere colony.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Captaincy system (capitanias hereditárias)', def: 'The 1530s division of the Brazilian coast into fifteen hereditary grants whose donatários financed their own settlement.' },
        { term: 'Engenho', def: 'A sugar mill-and-estate complex — the institutional core of the plantation-slavery economy.' },
        { term: 'Bandeirantes', def: 'São Paulo-based interior expeditions (17th-18th centuries) that enslaved indigenous people and located the Minas Gerais goldfields.' },
        { term: 'Inconfidência Mineira', def: 'The 1789 Minas Gerais conspiracy against the derrama tax, led by Tiradentes — Brazil\'s first independence movement.' },
        { term: 'Caudillo', def: 'A Spanish-American personalist military ruler of the post-independence decades — Rosas, Santa Cruz — the political type Brazil\'s monarchy bypassed.' },
        { term: 'Lei Eusébio de Queirós (1850)', def: 'The statute banning the Atlantic slave trade, turning Brazil\'s slavery system toward internal markets.' },
        { term: 'Lei do Ventre Livre (1871)', def: 'The free-womb law freeing children born to enslaved mothers — the first abolition statute.' },
        { term: 'Lei Áurea (1888)', def: 'The Golden Law abolishing slavery outright, signed by Princess Isabel — without compensation or land distribution.' },
        { term: 'Latifúndio', def: 'The large estate structure characteristic of Brazilian landholding from the colonial sesmarias to the coffee fazendas.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Why did the Portuguese court move to Rio de Janeiro in 1808?',
          options: ['To administer the gold mines directly', 'Fleeing Napoleon\'s invasion of Portugal, escorted by the British navy', 'To escape a republican revolution in Lisbon', 'To command the suppression of the Inconfidência Mineira'],
          answer: 1,
          explain: 'The royal family sailed under British protection ahead of Junot\'s invading army — making Rio the seat of a European empire, ports open, and Brazil a united kingdom in 1815.',
        },
        {
          q: 'The key structural difference between Brazilian and Spanish American independence was:',
          options: [
            'Brazil fought a fifteen-year continental war; Spanish America did not',
            'Brazil’s independence was dynastic and negotiated, preserving one state under a monarch',
            'Spanish America kept its monarch; Brazil became republics immediately',
            'Brazil abolished slavery at independence; Spanish America did not',
          ],
          answer: 1,
          explain: 'Pedro I — the king\'s own son — declared and led Brazilian independence; Spanish America\'s juntas and campaigns (Bolívar, San Martín) fragmented into republics and caudillo politics. Brazil abolished slavery only in 1888, the last in the hemisphere.',
        },
        {
          q: 'Which sequence of abolition statutes is correct?',
          options: [
            'Lei Áurea 1888 → Ventre Livre 1871 → Eusébio de Queirós 1850',
            'Eusébio de Queirós 1850 → Ventre Livre 1871 → Lei Áurea 1888',
            'Ventre Livre 1850 → Eusébio de Queirós 1871 → Lei Áurea 1888',
            'Eusébio de Queirós 1888 → Lei Áurea 1889 → Republic 1891',
          ],
          answer: 1,
          explain: 'First the TRADE (1850), then the free womb (1871), then slavery itself (1888) — the staged abolition the planter class resisted at each step.',
        },
        {
          q: 'The Inconfidência Mineira (1789) was chiefly a response to:',
          options: ['The French Revolution\'s terror', 'A confiscatory tax levy (derrama) on the Minas Gerais mining region', 'The abolition of the slave trade', 'The Paraguayan War'],
          answer: 1,
          explain: 'The conspiracy of Tiradentes and the mine-owning elite reacted to tax arrears collection and Enlightenment/American influence — a generation before Vargas, the trade ban or the Paraguayan War.',
        },
      ] },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'hist-brazil-republic-vargas-dictatorship',
    title: 'The Brazilian Republic: Old Republic, Vargas and the Military Dictatorship',
    domain: 'Humanities',
    field: 'World History',
    branch: 'Brazilian History',
    tier: 'core',
    concepts: [
      'Old Republic: café com leite and coronelismo',
      'Canudos, Contestado and tenentismo revolts',
      'Vargas: CLT labour laws, Estado Novo, industrialization',
      'The 1964 coup and the AI-5 hardening',
      'Diretas Já and the 1988 Constitution',
      'Plano Real and the stabilization of 1994',
    ],
    words: 1745,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: "Brazil's republic (1889 to the present) has run through four political systems — oligarchic, populist-authoritarian, military and democratic — while the country beneath them urbanized, industrialized and tripled its population. The Old Republic (1889-1930) was a federated oligarchy: the 'coffee with milk' presidency, alternating São Paulo's coffee planters with Minas Gerais' dairy interests, run through coronelismo — the local boss (coronel) who delivered votes for state autonomy. Elections were rituals of fraud, the urban middle class and tenentes (junior officers) chafed, and the millenarian peasant community of Canudos in Bahia (Antônio Conselheiro's settlement, destroyed by army expeditions in 1897 after Euclides da Cunha made it a national epic, Os Sertões) showed how far the republic was from its people. The 1929 world depression broke the coffee economy, and in 1930 the liberal alliance's candidate, Getúlio Vargas — defeated in a rigged election — took power in a military coup. Four decades of Brazilian politics would carry his name.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "The twentieth-century sequence — oligarchic republic, Vargas' labour state, the 1964-85 military regime, the 1988 citizen constitution — is Brazil's answer to the same question every Latin American polity faced: who industrializes the country and who pays. Vargas built the CLT labour code, the state oil company Petrobras and the steel city of Volta Redonda while ruling as dictator (Estado Novo 1937-45); the generals built highways and the 'economic miracle' while censoring and disappearing opponents; the 1988 Constitution answered with social rights and an interventionist state — and Plano Real finally killed inflation in 1994. National examinations treat this arc as the direct origin of today's institutions: CLT, SUS, Petrobras, the electoral court system all date from these four regimes.",
      },
      { kind: 'heading', text: 'Vargas: The Engineer of the Labour State' },
      {
        kind: 'para',
        text: "Vargas ruled 1930-45, and again 1951-54, in three registers. The Provisional Government (1930-34) centralised power, broke the São Paulo oligarchy in the 1932 constitutionalist revolt, and wrote the 1934 Constitution with votes for women and labour rights. The constitutional years saw him absorb the pressure of two mass movements — the green-shirted integralist fascists and the communist-backed ANL of Luís Carlos Prestes — and the fake 'Cohen Plan' served to justify the Estado Novo (1937-45): a corporatist dictatorship with a DIP propaganda-censorship department, no parties, no elections, and a labour compact that made the state the worker's patron — minimum wage, union recognition under state tutelage, courts. Industrialization was the strategy: CSN steel (1941), Volta Redonda, national resources codified (minerals, later oil under Petrobras 1953). Deposed in 1945 by his own generals who feared a plebiscitary comeback, Vargas returned elected in 1950, created Petrobras ('o petróleo é nosso'), and — besieged by an opposition scandal (the Rua Tonelero shooting: his bodyguard had tried to kill journalist Carlos Lacerda) and a military ultimatum — shot himself in the Catete Palace in August 1954. His testament letter ('sigo a história') made him a martyr of the poor and poisoned the 1950s for his successors.",
      },
      { kind: 'heading', text: 'Democratic Interlude and the 1964 Coup' },
      {
        kind: 'para',
        text: "Juscelino Kubitschek (1956-61) ran on 'fifty years of progress in five': Brasília raised from the cerrado plateau in three years, automobile plants (Volkswagen, then the others) installed under foreign-capital rules, the developmentalist optimism that inflation financed. João Goulart (Jango) inherited a balance-of-payments crisis and a radicalising base — land reform ('reformas de base'), profit remittance limits, literacy votes for enlisted men — with the Cold War as backdrop. On March 31, 1964 the military deposed him with middle-class and press support, a month before Lyndon Johnson's administration recognised the new order — the first of Latin America's Cold War coups. What followed was not a brief intervention but twenty-one years of rule. Castelo Branco initially kept institutions; the hardliners' response to guerrilla risings and mass marches was the Institutional Act No. 5 (AI-5, December 1968) — Congress closed indefinitely, habeas corpus suspended, censorship (prior restraint on press, theatre, music; exiles for Caetano Veloso and Gilberto Gil), and the DOI-CODI system of detention — the 2014 National Truth Commission documented 434 political killings and 210 disappearances, alongside torture practices shared with other Southern Cone regimes. The 'economic miracle' (1968-73, double-digit growth under Delfim Netto) bought consent until the oil shock, wage squeezes (the 1973 'systematic wage policy') and debt turned the story; Geisel's slow 'decompression' (distensão) and Figueiredo's amnesty (1979 — reciprocal: torturers as well as exiles) let the regime exit on its own timetable, defeated by the very election it allowed in 1982.",
      },
      { kind: 'heading', text: 'Redemocratization: Diretas Já to Plano Real' },
      {
        kind: 'para',
        text: "The transition ran on the streets. The Diretas Já movement (1983-84) — a million-strong rallies demanding direct presidential elections (Dante de Oliveira amendment) — failed in Congress by 22 votes but made the electors' veto unmistakable; the electoral college chose the civilian Tancredo Neves, who died before taking office, leaving the elected vice-president José Sarney to inherit the regime's hyperinflation and the debts of the miracle. The 1988 Constitution — the 'Constituição Cidadã' — rewrote the social contract: universal suffrage from 16, an independent judiciary and electoral court, the SUS universal health system, land-reform and indigenous-rights clauses, and the strict accountability instruments (mandate losses, the Clean Record Act came later) that would later topple a president. Hyperinflation defeated Sarney's Cruzado and Collor's confiscation (Collor, the first directly elected president in 29 years, was impeached in 1992 for corruption); the answer came in July 1994, when Itamar Franco's finance minister Fernando Henrique Cardoso launched the Plano Real — a new indexing unit (URV) that converted prices painlessly to a new currency, ended indexation inertia, and collapsed inflation from ~46% a month to under 2% a year. FHC's two terms privatised and stabilised; Lula's 2002 election — a former metalworker and union leader — completed the cycle the lesson began: the social movements Vargas tutored, the crowds the dictatorship repressed, and the ballot box the 1988 Constitution armed had, by the century's end, put the political system back into the voters' hands.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Exam task: in three steps, explain how the 1964 coup differed from Vargas' 1937 takeover despite both suspending democracy.",
        "Step 1 — agent: 1937 was a presidential self-coup by the incumbent (Vargas using the fake Cohen Plan as pretext); 1964 removed the incumbent (Goulart) by armed force with military, business and press support — a classic Cold War intervention pattern.",
        "Step 2 — legality: Vargas kept plebiscitary forms (a 1938 plebiscite ratified the Estado Novo) and built a party (the PTB) for post-dictatorship competition; the generals ruled through Institutional Acts ABOVE the constitution, ending with the amnesty and a transition they timed.",
        "Step 3 — economic model: Vargas built the STATE (CSN, Petrobras, CLT unions); the regime of 1964 opened to foreign capital, repressed wages, and globalised debt — the 'miracle' was private-led, the crisis was public.",
        "General rule: compare authoritarianisms along AGENT (who seizes power), LEGALITY (what happens to the constitution) and MODEL (whose economy) — the same three axes separate every Latin American case an examination will set.",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'The CLT (Consolidação das Leis do Trabalho, 1943) still governs Brazilian employment law — the 13th salary, FGTS and paid holidays are its descendants.',
        'The National Truth Commission report (2014) is the reference document for the dictatorship\'s human-rights accounting and for comparative transitional-justice teaching.',
        'Diretas Já is the standard case study in movement-led constitutional change — analysed alongside People Power and the Cape Town demos.',
        'Plano Real\'s URV transition is taught worldwide in monetary economics as the textbook indexation-kill.',
        'Canudos and Euclides da Cunha\'s Os Sertões anchor the Brazilian literary tradition\'s regionalist line — the literature lesson in this library picks the thread up.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Five confusions. Dates: Vargas' Estado Novo is 1937-45, not the whole 1930-45 period; the coup of 1964 ends Goulart's term, not Kubitschek's. AI-5 (1968) is the FIFTH Institutional Act, not the first — the soft period was 1964-68. The amnesty (1979) was reciprocal and preceded the 1988 Constitution — do not attach it to the transition's end. Plano Real (1994) is Cardoso's plan under Itamar Franco — not a Collor or Lula measure; and Lula's election is 2002, a generation after the Diretas Já movement of 1984.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Café com leite politics', def: 'The Old Republic\'s alternating presidential hegemony of São Paulo (coffee) and Minas Gerais (dairy) oligarchies.' },
        { term: 'Coronelismo', def: 'Local boss rule delivering votes for autonomy — the Old Republic\'s electoral machine.' },
        { term: 'Tenentismo', def: 'The junior-officer reform movement of the 1920s (Prestes\' column among its actions) that fed the 1930 revolution.' },
        { term: 'Estado Novo', def: 'Vargas\' corporatist dictatorship (1937-45) — censorship, no parties, the DIP, and the labour-compact state.' },
        { term: 'CLT', def: 'The Consolidation of Labour Laws (1943) — Vargas\' labour code, still Brazil\'s employment-law foundation.' },
        { term: 'AI-5', def: 'Institutional Act No. 5 (December 1968) — Congress closed, habeas corpus suspended, the dictatorship\'s hard turn.' },
        { term: 'Diretas Já', def: 'The 1983-84 campaign for direct presidential elections — a million-strong movement that failed by 22 votes and won the future.' },
        { term: 'Constituição Cidadã (1988)', def: 'The Citizen Constitution: SUS, universal suffrage at 16, an independent electoral court and social rights.' },
        { term: 'Plano Real (1994)', def: 'The URV-based stabilisation that ended Brazilian hyperinflation by killing indexation inertia.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The Old Republic\'s "café com leite" politics refers to:',
          options: [
            'A consumer price agreement on coffee exports',
            'The alternating presidential dominance of São Paulo and Minas Gerais oligarchies',
            'The state monopoly on coffee processing',
            'Vargas’ labour compact with factory workers',
          ],
          answer: 1,
          explain: 'Coffee (São Paulo) with milk (Minas Gerais): the two states\' governors alternated in the presidency under coronelismo\'s vote-delivery machine.',
        },
        {
          q: 'Which measure marks the military regime\'s hard turn in 1968?',
          options: ['The 1964 coup itself', 'Institutional Act No. 5 (AI-5)', 'The 1979 amnesty', 'The Plano Real'],
          answer: 1,
          explain: 'AI-5 closed Congress and suspended habeas corpus — the December 1968 escalation. The coup was 1964; the amnesty came in 1979; Plano Real belongs to 1994.',
        },
        {
          q: 'Vargas\' Estado Novo (1937-45) is best characterised as:',
          options: [
            'A liberal democracy with universal suffrage',
            'A corporatist dictatorship with censorship and a state-tutored labour system',
            'A military junta of the 1964 type',
            'A socialist planned economy',
          ],
          answer: 1,
          explain: 'The Estado Novo combined the DIP\'s censorship, no-party rule and the CLT\'s state-patron unions — corporatist, industrialising, anti-communist, and distinct from the later military regime.',
        },
        {
          q: 'The Plano Real (1994) ended hyperinflation mainly by:',
          options: [
            'Freezing all bank accounts as Collor had done',
            'Introducing a transitional unit of account (URV) that dismantled indexation inertia before launching the real',
            'Dollarising the economy outright',
            'Raising import tariffs to protect industry',
          ],
          answer: 1,
          explain: 'The URV converted prices gradually to the new currency, breaking the indexation mechanism that reproduced inflation — the textbook contrast with Collor\'s confiscation.',
        },
      ] },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'lit-brazilian-literature-modernism',
    title: 'Brazilian Literature: From Barroco to Modernism',
    domain: 'Languages & World Literature',
    field: 'World Literature',
    branch: 'Reading the World',
    tier: 'core',
    concepts: [
      'Trovadorismo to Barroco: Gregório de Matos and Vieira',
      'Arcadismo: neoclassical shepherds in a mining colony',
      'Romanticism: Indianism and nation-building (Alencar, Dias)',
      'Realism: Machado de Assis and the ironic novel',
      'Semana de Arte Moderna 1922 and the modernist phases',
      'Anthropophagy, colloquial registers and the 1930-45 generation',
    ],
    words: 1798,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: "Brazilian literature is the story of a colony growing a language of its own. It begins with what colonial examination syllabuses call Trovadorismo — the Galician-Portuguese troubadour lyric carried across the Atlantic — but the first distinctly Brazilian movements arrive with the Barroco of the seventeenth century: Gregório de Matos in Bahia, the colony's first great satirical and erotic poet ('Boca do Inferno', Hell's Mouth, for his invective), and Padre Antônio Vieira, whose baroque sermons turned Portuguese prose into an instrument of pulpits from Maranhão to Rome and whose denunciations of colonist cruelty toward indigenous people made him a prosecuted enemy of the settlers. In Minas Gerais' gold towns the eighteenth century brought Arcadismo — Cláudio Manuel da Costa, Tomás Antônio Gonzaga (whose Marília de Dirceu love lyrics addressed his betrothed from exile after the Inconfidência trial) and Basílio da Gama writing under neoclassical shepherd names — the interesting twist being that Arcadian pastoral became the vehicle for the first Brazilian civic poetry, Gonzaga's Cartas Chilenas satirizing the colonial governor in coded arcadian fable.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "This tradition is the cultural spine of Brazil's national examinations: the Matriz de Referência expects students to place a passage in its movement (Barroco's paradox, Romanticism's nationalism, Realism's irony, Modernism's rupture), and the Semana de Arte Moderna is one of the most-tested single events in the whole syllabus. The Library's craft lesson on literary devices owns the TECHNIQUE of figurative language; the epic-tradition lesson owns the European canon; this lesson owns the Brazilian sequence — how a slave society's writers negotiated European forms until 1922 turned dependence into deliberate cannibalization, a move (anthropophagy) that has since become a global metaphor for postcolonial culture-making.",
      },
      { kind: 'heading', text: 'Romanticism: Writing the Nation' },
      {
        kind: 'para',
        text: "Independence (1822) needed a literature, and Brazilian Romanticism supplied one in a single generation. Gonçalves Dias built the Indianist canon — the 'Canção do Exílio' (My land has palm trees...) became the most quoted poem in Portuguese — casting the indigenous past as the new nation's antiquity, an antique Brazil could own without owing Europe. José de Alencar did the same in prose: O Guarani (1857) and Iracema made the Indian a romantic hero while the planter class was still buying Africans, a beautiful evasion examination questions love to unpack; his urban novels (Senhora, Diva) and regionalist O Sertanejo mapped the country's types. Around them: Castro Alves' abolitionist verse (Os Escravos, the 'Navio Negreiro' slave-ship poem — Romanticism weaponized against the trade), Álvares de Azevedo's ultra-romantic morbidity, and the first women's voices. Brazilian Romanticism runs roughly 1836 (Gonçalves de Magalhães' Suspiros Poéticos) to the 1870s — parallel to the French models but with the nationalist job description visible in every line.",
      },
      { kind: 'heading', text: 'Realism: Machado de Assis and the Ironic Novel' },
      {
        kind: 'para',
        text: "The 1880s turned the novel inside out. Machado de Assis — grandson of freed slaves, epileptic, self-taught, founder and first president of the Brazilian Academy of Letters — abandoned romantic sentiment for a prose of controlled irony that made him the first great modern novelist in the Portuguese language. Memórias Póstumas de Brás Cubas (1881) is narrated by a dead man with 'a minimal dosage of melancholy'; Dom Casmurro (1899) is the confession of a husband who may or may not have been betrayed — the narrator's jealousy constructs the novel's 'facts', and a century of criticism has never settled the question, which is the point: Machado invented the unreliable narrator as a social instrument, exposing a slaveholding patriarchy's self-justifications through the very voice that performs them. Quincas Borba's philosophy of Humanitism satirizes scientistic optimism; the short stories (Miss Dollar, A Cartomante) sharpen the method. Realism in Brazil is essentially Machado (plus Aluísio Azevedo's naturalist O Cortiço, the tenement as social organism), and the Parnassian formalism (Olavo Bilac's perfect verses) and Symbolist mysticism (Cruz e Sousa — the first great Black Brazilian poet, whose 'Voragem' and musical symbolism cross the century) fill the poetry lanes until the next rupture.",
      },
      { kind: 'heading', text: 'Modernism: 1922 and the Anthropophagic Turn' },
      {
        kind: 'para',
        text: "Euclides da Cunha's Os Sertões (1902) — a geologist-engineer's epic of Canudos that reframes the backlands as Brazil's hidden reality — stands between centuries as Pré-Modernismo; Lima Barreto's novels (Recordações do Escrivão Isaías Caminha) add a Black clerk's furious urban satire. The explosion came in February 1922, when the Semana de Arte Moderna took São Paulo's Theatro Municipal for three evenings of 'scandal': Mário de Andrade, Oswald de Andrade, Manuel Bandeira, with Di Cavalcanti's programmes and Villa-Lobos appearing in one shoe and one slipper — the crowd's jeer being the evening's mildest — while a poetry that deliberately broke meter, rhyme and decorum was booed through. Modernism's first phase (1922-30) is Mário's Macunaíma (1928), the 'hero with no character' who absorbs every regional myth in a collage of registers — the search for a Brazilian identity as anti-epic — and Oswald's Manifesto Antropófago (1928): 'Tupi or not tupi', the anthropophagic programme in which Brazil DEVOURS European culture, digests it and turns it into something native — parody and intertextuality elevated from technique to national strategy, the exact move postcolonial theory later theorized. Manuel Bandeira's 'Poema de Sete Faces' and 'Libertinagem' made the colloquial line — everyday speech, free verse, the ordinary voice — permanent poetry.",
      },
      {
        kind: 'para',
        text: "The second phase (1930-45) brought the tradition's mature masters: Carlos Drummond de Andrade ('No meio do caminho tinha uma pedra' — the stone in the middle of the road that scandalized critics into immortality), the Minas provincial modernizing himself into universal elegy; Cecília Meireles' musical meditations; Jorge Amado's Bahian novels of cacao and dockworkers (though his politics age faster than his plots); Rachel de Queiroz; Graciliano Ramos' Vidas Secas (Barren Lives), the drought's family and dog rendered in clipped, merciless prose; and Vinicius de Moraes, whose poetry would feed bossa nova. The third phase (1945-60) is the interior turn: João Guimarães Rosa's Grande Sertão: Veredas (1956) — a jagunço's monologue reinventing Portuguese from the inside, the river of the sertão as moral universe ('o sertão é do tamanho do mundo') — and Clarice Lispector's A Hora da Estrela and Paixão Segundo G.H., fiction as metaphysical X-ray of the ordinary (a typist's death, a cockroach's gaze). Together they end the story this lesson traces: a literature that began by importing Europe's forms and ended by teaching the language new places to live — which is why contemporary Brazilian letters (Caio Fernando Abreu, Conceição Evaristo's 'escrevivência') still argue in the modernists' terms.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Exam task: given a passage, decide its movement — apply the four diagnostic tests in order.",
        "Test 1 — ROLE OF EUROPE: Barroco imitates and surpasses European manner (Vieira's periods); Arcadismo copies it under pastoral masks; Romanticism ADAPTS it to nation-building; Modernism ATTACKS and digests it (anthropophagy).",
        "Test 2 — FORM: fixed meter and rhyme (Parnassianism/Barroco) vs free or colloquial verse (Bandeira, Drummond); prose with an intrusive ironic narrator (Machado) vs sentimental omniscience (Alencar) vs collage registers (Macunaíma).",
        "Test 3 — SUBJECT: the Indian as antiquity (Dias/Alencar) vs the Indian as mythic everyman (Macunaíma) vs the sertão as metaphysics (Rosa) — the same 'national substance' reworked per movement.",
        "Test 4 — TOWARD THE READER: seduction (Romanticism), exposure (Realism), provocation (1922), interrogation (Lispector). Combined, the four tests place any exam passage within one or two candidates — then date and authorship details settle it.",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'The Semana de Arte Moderna\'s centenary (2022) was a national commemoration — the event\'s programmes and press jeers are archived and examinable.',
        'Anthropophagy is now a standard concept in global postcolonial and advertising studies — Brazilian modernism quoted worldwide.',
        'Grande Sertão: Veredas and Vidas Secas anchor university syllabuses in Portuguese everywhere; Clarice Lispector\'s New Directions translations made her a contemporary cult author in English.',
        'Bossa nova (Jobim, Vinicius\' "Garota de Ipanema") is the modernist colloquial project carried into song — the lyric tradition exam questions cite.',
        'Machado de Assis\' unreliable-narrator method is the standard classroom example in narrative theory courses in any language.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Five mix-ups cost marks. Machado is REALISM (1881 on), not Romanticism — the Indianist novels belong to Alencar, a generation earlier. The Semana de Arte Moderna is February 1922 in São Paulo's Theatro Municipal — not a 1928 event, not Rio. Anthropophagy is Oswald de Andrade's 1928 MANIFESTO ('Tupi or not tupi') — a phase-two programme, not the Semana's slogan. Vidas Secas is Graciliano Ramos; Grande Sertão: Veredas is Guimarães Rosa — and neither is Clarice Lispector, whose fiction is interior, not regionalist. And Cruz e Sousa is a SYMBOLIST (1890s), three decades before Modernism — misplacing him is the classic trap.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Trovadorismo', def: 'The medieval Galician-Portuguese troubadour lyric — the tradition\'s starting point in Brazil\'s examination canon.' },
        { term: 'Barroco', def: 'The 17th-century style of paradox and rhetoric: Gregório de Matos\' satire, Vieira\'s sermons.' },
        { term: 'Arcadismo', def: 'The 18th-century neoclassical pastoral (Cláudio Manuel da Costa, Gonzaga\'s Marília de Dirceu), carrying the first civic dissent.' },
        { term: 'Indianism', def: 'Romanticism\'s use of the indigenous past as national antiquity — Gonçalves Dias\' poetry, Alencar\'s O Guarani and Iracema.' },
        { term: 'Unreliable narrator', def: 'Machado de Assis\' signature: a narrator whose interests distort the account (Brás Cubas, Bentinho in Dom Casmurro).' },
        { term: 'Semana de Arte Moderna (1922)', def: 'The three-evening São Paulo festival that launched Brazilian Modernism.' },
        { term: 'Anthropophagy (Manifesto Antropófago, 1928)', def: 'Oswald de Andrade\'s programme of devouring European culture to make it Brazilian — "Tupi or not tupi".' },
        { term: 'Macunaíma', def: 'Mário de Andrade\'s 1928 "hero with no character" — the national anti-epic in collage registers.' },
        { term: 'Escrevivência', def: 'Conceição Evaristo\'s term for writing from lived Black experience — contemporary letters\' link to the tradition.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Which author and work define the Realist turn in Brazilian prose?',
          options: ['José de Alencar — O Guarani', 'Machado de Assis — Memórias Póstumas de Brás Cubas', 'Euclides da Cunha — Os Sertões', 'Mário de Andrade — Macunaíma'],
          answer: 1,
          explain: 'Brás Cubas (1881) — narrated by a dead man — inaugurated the ironic, unreliable-narrator novel. Alencar is Romanticism, Cunha Pré-Modernism, Macunaíma is 1928 modernism.',
        },
        {
          q: 'The Semana de Arte Moderna took place:',
          options: ['In Rio de Janeiro in 1928', 'In São Paulo\'s Theatro Municipal in February 1922', 'In Salvador in 1930', 'In Minas Gerais in 1919'],
          answer: 1,
          explain: 'Three evenings in February 1922 at the Theatro Municipal de São Paulo — the scandal that launched Modernism. The 1928 Manifesto Antropófago came later, in the movement\'s second phase.',
        },
        {
          q: '"Tupi or not tupi" is the slogan of:',
          options: ['The Arcadian movement', 'Oswald de Andrade\'s Anthropophagic Manifesto', 'Castro Alves\' abolitionist poetry', 'The Parnassian school'],
          answer: 1,
          explain: 'The pun fuses Shakespeare with the Tupi language to state the anthropophagic programme: devour European culture, digest it, make it Brazilian.',
        },
        {
          q: 'Which pairing of author and work is correct?',
          options: [
            'Graciliano Ramos — Grande Sertão: Veredas',
            'Guimarães Rosa — Vidas Secas',
            'Graciliano Ramos — Vidas Secas',
            'Clarice Lispector — Vidas Secas',
          ],
          answer: 2,
          explain: 'Vidas Secas (Barren Lives) is Graciliano Ramos\' 1938 drought novel; Grande Sertão: Veredas is Guimarães Rosa\'s 1956 monologue-epic; Clarice wrote A Hora da Estrela and Paixão Segundo G.H.',
        },
      ] },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'env-brazil-biomes-geography',
    title: 'Brazilian Biomes and the Geography of Deforestation',
    domain: 'Environment & Sustainability',
    field: 'Conservation Biology',
    branch: 'Ecology',
    tier: 'core',
    concepts: [
      'The six biomes: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa, Pantanal',
      'Why tropical South America built these systems',
      'Deforestation drivers: cattle, soy and the arc of destruction',
      'INPE/PRODES monitoring and the annual clearing data',
      'The Forest Code 2012, conservation units and IBAMA',
      'Tipping points: the Amazon dieback question',
    ],
    words: 1755,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: "Brazil is the only country on Earth that contains, within its borders, sizeable examples of the rainforest, the savanna, the semi-arid thorn scrub, the Atlantic rainforest, the temperate grassland and the world's largest tropical wetland — six officially mapped biomes (biomas) that IBAMA and the national vegetation map treat as the country's ecological provinces. Amazônia holds the largest tropical forest on the planet, roughly 4.2 million km² of Brazil's share of the basin, with rainfall the forest itself largely recycles by transpiration. The Cerrado — about two million km² of savanna woodland across the central plateau — is the planet's most biodiverse savanna, its deep-rooted trees tapping a giant aquifer (the Guarani system's recharge zones), and it is simultaneously the agricultural frontier's main victim. The Caatinga, the semi-arid northeast's white-thorn scrub, is the only biome entirely Brazilian and the one whose climate (rainfall concentrated, erratic, 300-800 mm/year) has produced the classic drought-and-cattle-backlands culture. The Mata Atlântica once ran the whole coast; five centuries of sugar, cities and coffee reduced it to roughly a quarter of its original extent — yet it holds more endemic species per hectare than the Amazon and survives in Brazil's most populated belt. The Pampa is the southern grassland shared with Uruguay and Argentina; the Pantanal, the world's largest tropical wetland (~150,000 km²), floods and drains on a rhythm that concentrates caimans, capybaras and jabiru storks at densities nowhere else matches.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "National examinations in Brazil treat the biome map as basic literacy — every year's test asks candidates to read climate graphs, vegetation profiles or land-use data against the six biomes — and the global climate conversation treats the same map as planetary infrastructure: the Amazon's recycled rainfall feeds agriculture from São Paulo to the Plata basin, and its carbon stock (~120 billion tonnes in biomass) is the difference between manageable warming and the modeled dieback threshold. The Library's global lessons own the general machinery — this lesson's neighbours teach extinction drivers (env-biodiversity-loss), measurement methods (env-measuring-biodiversity), the carbon budget (env-carbon-sinks) and restoration practice (env-restoration-rewilding). Here the question is national and specific: which biome, which driver, which policy instrument, which data series.",
      },
      { kind: 'heading', text: 'Why These Six: The Physical Backdrop' },
      {
        kind: 'para',
        text: "The biome map is climate plus geology. The Inter-Tropical Convergence Zone and the South Atlantic's anticyclones give the north and centre-west abundant, seasonal rain; the Brazilian Shield's ancient, leached soils (latossolos) underlie both the rainforest and the savanna — the difference is rainfall seasonality and fire history, not fertility (which is why the Cerrado, once limed and phosphated, converted to soy so easily). The northeast sits partly in the subtropical high's rain shadow with ocean-cooled (Benguela-fed) currents offshore: semi-aridity inside the tropics, hence the Caatinga's drought-deciduous, water-storing vegetation. The coast's Serra do Mar escarpment forces Atlantic air upward — orographic rain that grew the Mata Atlântica's hyper-humidity on a thin coastal strip. The Pantanal is a tectonic sedimentary basin whose rivers (fed by the Planalto's runoff) spill annually across flat ground; the Pampa rides the subtropical grassland-forest boundary where frost, fire and grazing hold trees back. Six biomes, one logic: rainfall amount and season, soil age, fire and relief.",
      },
      { kind: 'heading', text: 'Deforestation: Drivers and the Data' },
      {
        kind: 'para',
        text: "Tropical deforestation has a documented Brazilian signature. The 'arc of destruction' swept from Belém westward along the highways cut after 1970 (the Transamazônica's promise of land without people), driven by a stable chain: land speculation and cattle pasture (low-productivity ranching occupies the overwhelming majority of cleared land), timber extraction, then — as infrastructure arrived — mechanised soy, which now pushes through the Cerrado's MATOPIBA frontier (Maranhão, Tocantins, Piauí, Bahia). The monitoring is world-class: INPE's PRODES project measures annual clear-cut rates in the Legal Amazon from satellite imagery (August-July year), and DETER provides near-real-time alerts. The numbers tell a policy story: annual Amazon clearing fell from ~27,700 km² (2004) to ~4,600-5,000 km² by 2012 as enforcement, the Soy Moratorium (2006) and protected-area creation bit; rose again to ~13,000 km² by 2021 as enforcement lapsed; and fell sharply once more after 2023. The Cerrado lacks the same legal protection — clearing there (native-vegetation loss of ~8,000+ km²/yr) now rivals the Amazon's, which is why the biome is called the 'forgotten' half of Brazil's land-use problem.",
      },
      { kind: 'heading', text: 'Policy Architecture: Code, Units, Enforcement' },
      {
        kind: 'para',
        text: "Brazil's legal instruments are the classroom set. The Forest Code (Código Florestal, 2012 revision) requires rural properties in the Amazon to keep 80 percent of land as Legal Reserve (Reserva Legal) — 35 percent in the Cerrado's Amazon-side portion, 20 percent elsewhere — plus Permanent Protection Areas (APPs) along rivers and slopes; compliance is tracked by the CAR (Cadastro Ambiental Rural) land registry. The conservation-unit system (SNUC, 2000) distinguishes strictly protected parks (full protection) from sustainable-use reserves — extractive reserves (ResEx, born from the rubber-tapper movement of Chico Mendes), sustainable-development reserves and national forests — administered federally by ICMBio and the states; roughly a quarter to a third of the Amazon now sits inside some protected category, with indigenous territories (homologated by FUNAI) adding the most effectively conserved layer of all — deforestation inside recognized indigenous land runs far below surrounding private land. Enforcement runs through IBAMA's fines, embargoes and seizures; market instruments add the Soy Moratorium (soy buyers refuse Amazon-deforested land), the cattle TAC agreements, and REDD+ carbon finance under the UNFCCC. The 2012 Code's amnesty for past clearing and its reduction of APP obligations remain the environmental community's standing criticism — examination questions present both sides.",
      },
      {
        kind: 'para',
        text: "The scientific frontier is the tipping-point question. Amazon rainfall recycles an estimated 25-50 percent of its own precipitation; models (Nobre, Lovejoy and colleagues) argue that continued clearing past an estimated 20-25 percent deforested threshold — the southeastern basin is already there regionally — could flip large areas toward seasonally dry, fire-maintained savanna ('dieback'), releasing stored carbon and drying the continent's agricultural south. Recent droughts (2023-24's record lows on the Rio Negro) and fire counts have made the hypothesis a live monitoring exercise. The counterfactual is also data: where enforcement, protected areas and supply-chain rules aligned (2004-2012, 2023 onward), clearing fell within years — evidence that the deforestation curve is a policy variable, not destiny.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Exam task: a climate graph shows 1,350 mm annual rainfall concentrated November-April, deep leached oxisols, scattered fire-tolerant trees over grasses. Which biome, and why not its neighbours?",
        "Step 1 — total and season: 1,350 mm with a 5-6 month dry season is too little and too seasonal for Amazônia (2,000+ mm, short dry season) and too wet for Caatinga (300-800 mm).",
        "Step 2 — vegetation cue: fire-tolerant scattered trees over grass = savanna structure, not closed forest canopy (Amazônia) nor thorn scrub (Caatinga) nor treeless grass (Pampa).",
        "Step 3 — soil: deep leached latossolos fit the Shield's old surfaces — also the Cerrado's agricultural key once lime and phosphate are added.",
        "Answer: Cerrado — and the reasoning chain (rainfall amount → seasonality → vegetation form → soil) is exactly the four-step identification an examination expects for any biome question.",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'INPE\'s PRODES and DETER portals publish the clearing data used in this lesson — the same series journalists and policy analysts quote each year.',
        'The Soy Moratorium (2006) is the standard case study in supply-chain governance — extended and renewed ever since, it decoupled the soy trade from new Amazon clearing.',
        'Extractive reserves descend from Chico Mendes\' rubber-tapper unions — the classic case of conservation aligned with livelihood rather than against it.',
        'The Forest Code\'s Reserva Legal percentages (80/35/20 by biome) are the numbers most frequently examined in Brazilian environmental-education questions.',
        'The dieback threshold debate (Nobre-Lovejoy) appears in IPCC-linked teaching as the flagship tropical-tipping-point case.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Four confusions. The Mata Atlântica is not the Amazon's smaller twin — it is a different, more diverse, coastal-orographic forest reduced to roughly a quarter of its extent; 'most destroyed' and 'most species per hectare' both belong to it. The Cerrado is a SAVANA with deep-rooted trees, not a steppe — and it is currently the fastest-clearing biome. The Pantanal is a WETLAND (flood-pulse), not a swamp of standing water year-round. And PRODES measures clear-cut in the LEGAL Amazon on an August-July year with a 6.25-hectare detection floor — quoting it as 'all Brazil, all degradation' mixes the series with DETER alerts and Cerrado data.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Bioma', def: 'Brazil\'s official ecological province — the six mapped in the national vegetation series: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa, Pantanal.' },
        { term: 'Cerrado', def: 'The central-plateau savanna (~2 million km²) — Earth\'s most biodiverse savanna and the agricultural frontier\'s main target.' },
        { term: 'Mata Atlântica', def: 'The coastal Atlantic rainforest reduced to ~a quarter of its extent, with exceptional endemism per hectare.' },
        { term: 'Arc of destruction', def: 'The crescent of clearing sweeping from the southeast of the Amazon basin westward along roads and pastures.' },
        { term: 'PRODES / DETER', def: 'INPE\'s satellite systems: annual clear-cut accounting (PRODES) and near-real-time alerts (DETER).' },
        { term: 'Reserva Legal', def: 'The Forest Code\'s on-farm conservation share: 80% (Amazon), 35% (Cerrado in the Legal Amazon), 20% (other biomes).' },
        { term: 'ResEx (extrative reserve)', def: 'A sustainable-use conservation unit whose communities live from the forest — the rubber-tappers\' institutional legacy.' },
        { term: 'MATOPIBA', def: 'The Cerrado agricultural frontier across Maranhão, Tocantins, Piauí and Bahia.' },
        { term: 'Amazon dieback', def: 'The modeled transition of cleared, drying forest toward savanna past a regional threshold (~20-25% deforested).' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Which biome is entirely confined to Brazil?',
          options: ['Pampa', 'Caatinga', 'Pantanal', 'Mata Atlântica'],
          answer: 1,
          explain: 'The Caatinga exists only within Brazil\'s northeast. The Pampa is shared with Uruguay/Argentina, the Pantanal spills into Bolivia/Paraguay, and the Amazon basin spans nine countries.',
        },
        {
          q: 'The Forest Code\'s Legal Reserve requirement for Amazonian rural properties is:',
          options: ['20 percent', '35 percent', '50 percent', '80 percent'],
          answer: 3,
          explain: '80 percent inside the Amazon biome (35 percent for Cerrado land inside the Legal Amazon, 20 percent elsewhere) — the exam\'s favourite statutory number.',
        },
        {
          q: 'PRODES and DETER are best described as:',
          options: [
            'Reforestation subsidy programmes',
            'INPE\'s satellite monitoring systems for Amazon clearing — annual rates and real-time alerts',
            'The conservation-unit categories of SNUC',
            'Carbon-market registries under REDD+',
          ],
          answer: 1,
          explain: 'PRODES tallies annual clear-cut; DETER issues near-real-time alerts. SNUC is the conservation-unit law; REDD+ registries are separate instruments.',
        },
        {
          q: 'Why is the Cerrado called the "forgotten" half of Brazil\'s land-use problem?',
          options: [
            'Because it has no biodiversity worth protecting',
            'Because clearing there now rivals the Amazon\'s while its legal protections are far weaker (20% reserve, no soy moratorium)',
            'Because it is too dry for agriculture',
            'Because it lies entirely inside protected areas',
          ],
          answer: 1,
          explain: 'The Cerrado converts at ~thousands of km² per year for soy and cattle, its Legal Reserve share is only 20 percent, and no equivalent of the Soy Moratorium covers it — the enforcement asymmetry with the Amazon.',
        },
      ] },
    ],
  },
]

import type { KnowledgeTopic } from '../types'

/** Expansion pass X37 (2026-10-25): the Alberta Diploma Exams onboarding
 *  pass. This pass grew the curated-exam registry: a new canada.ts region
 *  file added the Alberta Diploma Examinations — the six highest-enrolment
 *  30-1 courses (ELA 30-1, Mathematics 30-1, Biology 30, Chemistry 30,
 *  Physics 30, Social Studies 30-1), curated from the Alberta Programs of
 *  Study and diploma-exam pages on alberta.ca / curriculum.learnalberta.ca,
 *  all read this pass. 43 topics. The new exam mapped 32/43 = 74%
 *  immediately; the eleven unmapped topics were resolved honestly:
 *
 *  1. Three new Political-Science lessons below own the Social Studies 30-1
 *     ideology territory (RI1, RI2, RI4 — RI3 remapped by coverage to
 *     pol-regimes-spectrum, which owns regime classification, hybrid
 *     regimes and illiberal backsliding; the economic-systems dimension of
 *     RI3 is owned by the economics lessons). Zero overlap: the
 *     western-political-thought-canon lesson owns the PHILOSOPHERS' canon
 *     (Hobbes, Locke, Rousseau, Mill as thinkers and arguments — referenced,
 *     not re-taught); pol-regimes-spectrum owns institutional regime
 *     classification; hist-twentieth-century owns the EVENTS of communism,
 *     fascism and the Cold War (this pass owns the IDEOLOGICAL systems as
 *     value systems); law-* lessons own legal doctrine; the Indian
 *     constitution lesson owns India-specific governance.
 *  2. One new Literary-Craft lesson owns the ELA 30-1 visual/multimedia
 *     outcome (media literacy for the READER of visual texts). Carved
 *     against cine-cinematography (production craft), art-montage (editing
 *     effects — referenced), art-rule-of-thirds (composition) and
 *     gp-mass-media-society-responsibility (media institutions and
 *     responsibility).
 *  3. REMAPPED-BY-COVERAGE-ONLY (no new content, aliases appended):
 *     ELA "Discovering and exploring ideas through language" →
 *     eng-texts-human-experiences; ELA "Inquiry, research and source
 *     evaluation" → res-research-methodology-hypothesis-sampling (source
 *     credibility deepened by fnd-reading-scientific-papers); ELA "The
 *     personal response and the critical/analytical essay" →
 *     eng-critical-response-literature; ELA "Collaboration, peer feedback
 *     and group inquiry" → fnd-peer-learning-teaching; Biology 30
 *     "Development: fertilization, embryogenesis and reproductive
 *     technologies" → bio-human-reproduction-system (embryonic pattern
 *     formation deepened by the developmental-biology KU).
 *
 *  Sources read while writing (legally open):
 *  - Alberta Education, "Diploma exams overview" (alberta.ca) — course list,
 *    30% weighting since September 2023, central teacher marking, digital
 *    platform, double-time policy; read this pass.
 *  - Alberta Programs of Study, new LearnAlberta
 *    (curriculum.learnalberta.ca): Social Studies 30-1 (SST3771) — the key
 *    issue "To what extent should we embrace an ideology?" and all four
 *    Related Issues with their outcomes, read in full; Biology 30 (SCN3230)
 *    and Chemistry 30 (SCN3796) — unit structures read; English Language
 *    Arts (10-12) — the five general outcomes structure.
 *  - OpenStax, Introduction to Political Science (openstax.org, CC BY) —
 *    ch.3 "Political Ideology": the definition of political ideologies as
 *    "consciously held ideas about both how political life is structured and
 *    how it should be structured"; §3.2 the social contract (Hobbes vs
 *    Locke on the state of nature, natural rights, property; Smith on free
 *    trade; Rousseau's general will); §3.3 varieties of liberalism (classical
 *    liberals defend individual rights, limited government and free trade;
 *    Mill's harm principle; the Great Depression-era turn to government
 *    regulation; Hayek's dissent); §3.4 nationalism, communism (Marx and
 *    Engels; Gramsci, Lenin, Stalin), fascism and Nazism as heightened
 *    nationalism tied to racial exclusivism, totalitarianism as extreme
 *    authoritarianism; §3.5 contemporary democratic liberalism as the
 *    predominant ideology with centre-left and centre-right subgroups;
 *    ch.4 introduction — when the individual is free to act without
 *    government interference and how governments react to the exercise of
 *    individual freedoms. Read this pass.
 *  - Mark Poepsel, "Media, Society, Culture and You" (Open Textbook Library;
 *    press.rebus.community/mscy, CC BY-SA) — ch.3: the definition of media
 *    literacy as understanding "where different types of information can be
 *    found, how best to evaluate information, who owns the major mass media
 *    platforms, how messages are produced, and how they are framed"; the
 *    five-corporation ownership finding; "critical thinking is media
 *    literacy put into action"; framing theory as purposeful, meaningful
 *    selection of sources, facts and tone. Read this pass.
 */

export const x37AlbertaPassTopics: KnowledgeTopic[] = [
    // ------------------------------------------------------------------
    {
      id: 'pol-ideologies-individualism-collectivism',
      title: 'Political Ideologies: Individualism and Collectivism',
      domain: 'Social Sciences',
      field: 'Political Science',
      branch: 'Political Ideologies',
      tier: 'core',
      concepts: [
        'What an ideology is',
        'The characteristics of ideologies',
        'Principles of individualism',
        'Principles of collectivism',
        'Where beliefs come from',
        'The individualism-collectivism spectrum',
        'Common good versus self-interest today',
      ],
      words: 1395,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'OpenStax defines political ideologies as consciously held ideas about both how political life is structured and how it should be structured — a definition worth slowing down for, because both halves matter. An ideology describes the world (how it is organized) and prescribes it (how it ought to be), and it does so as a package: a connected set of beliefs about freedom, equality, property, authority and the common good that hangs together well enough to guide action. Venezuela\'s crisis in the OpenStax chapter opening is the textbook case: decades of socialist ideology shaped what Chávez and Maduro did with the oil industry, and rival ideologies shaped what their opponents propose instead. Politics is usually arguments between such packages, not between isolated opinions.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'The individualism-collectivism axis is the load-bearing wall of modern political thought: nearly every debate about markets, welfare, taxation, speech or public health is ultimately a negotiation between the self-reliant individual and the shared collective. Anyone who can name the principles on each side stops arguing from vibes and starts arguing from structure — and can locate their own convictions honestly on the map.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Ideologies share a recognizable anatomy. They explain (why is the world like this — God, class, markets, blood and soil?), they evaluate (which arrangements are just?), they orient (who are we — a nation, a class, individuals bound by contract?), and they program (what should be done — revolution, reform, laissez-faire?). They recruit identity: people do not merely hold ideologies, they belong to them, which is why ideological disagreement so often feels like a threat to selfhood rather than a difference of opinion. And they travel in traditions — each ideology is an argument with its own history, which is why tracing one to its origins dissolves so many confusions.',
        },
        {
          kind: 'para',
          text: 'Where do these belief systems come from? The Alberta curriculum asks students to explore the factors that shape individual and collective beliefs, and the honest list is layered: family and upbringing, culture and religion, historical memory, economic position, education, and formative experience. Two people can read the same evidence and weigh it differently because the scales themselves were calibrated by different lives. This is not a counsel of despair — it is the reason self-awareness about one\'s own filters is the entry price of genuine political thinking.',
        },
        {
          kind: 'para',
          text: 'Individualism, as a foundation of ideology, holds that the individual person is the basic unit of political life. Its characteristic principles, in the curriculum\'s phrasing: private property, competition, the rule of law, and self-interest rightly understood. The rule of law is the subtle one — individualism needs it because equal rules protect each person\'s sphere from everyone else\'s ambitions, including the state\'s. Locke\'s version grounds it in natural rights and property; the social-contract logic — that government is legitimate only by consent of free individuals — belongs to the western-thought-canon lesson, which owns the philosophers and their arguments in detail.',
        },
        {
          kind: 'para',
          text: 'Collectivism holds that groups — classes, nations, communities — are the basic unit, and that individual flourishing is bound up with the group\'s. Its characteristic principles: the common good, collective responsibility, cooperation, and shared property or interest. The accent differs by tradition: in some forms the group serves its members (a union, a mutual-aid society); in others the individual is subsumed and the state speaks for the whole — the difference between voluntary association and enforced conformity, which is the most important line on the whole map.',
        },
        {
          kind: 'para',
          text: 'The spectrum matters more than the poles. Real political positions are mixes: a market economy funded by collective taxation; a welfare state that pools risk while protecting private property; a commune with strict internal rules. OpenStax\'s treatment of contemporary democratic liberalism makes the mixing explicit — the predominant ideology of the industrialized world blends individual rights and capitalism with collectively provided services, and splits into centre-left and centre-right over the proportion. The honest skill is placing claims, not camps: "we should cut tariffs" is individualism-leaning, "we should cap insulin prices" is collectivism-leaning, and the same voter may hold both.',
        },
        {
          kind: 'para',
          text: 'The dynamic between individualism and the common good is the curriculum\'s closing demand for this Related Issue, and it is a live question, not a history lesson: pandemic mandates, carbon pricing, platform regulation and emergency powers all price one value against the other. A workable rule of thumb from the tradition itself: individual liberty is the default and collective restriction needs a public justification — but some collective goods (clean air, disease control, courts themselves) are the preconditions of any liberty worth having. Where that line sits is the permanent argument; knowing the vocabulary of both sides is how you join it.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: classify three policy claims by their ideological foundation — (a) abolish the inheritance tax, (b) make transit free citywide, (c) require a license to protest near parliament.',
            'Recall the governing idea: private property, competition, rule of law and self-interest mark individualism; common good, collective responsibility and cooperation mark collectivism.',
            'Apply: (a) defends private property against collective claims — individualism; (b) funds a shared good from the common purse — collectivism; (c) restricts an individual right for asserted public order — a collectivist restriction whose illiberality depends on how much protest freedom survives.',
            'State the result: the claims sort cleanly once the unit of concern is named — whose interest, whose property, whose decision. Most exam questions are this test with the labels removed.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Election analysts place parties and platforms on the individualism-collectivism axis before reading their rhetoric.',
            'Policy debates are mapped by which side bears the burden of justification — the individual claim or the collective one.',
            'Editors and advertisers segment audiences by ideological identity, which is why media literacy starts with self-knowledge.',
            'Constitutional courts weigh individual rights against collective goods in every emergency-powers case.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'The first pitfall is equating collectivism with communism and individualism with selfishness — both are slurs, not analysis; a neighbourhood watch is collectivist, a guild was individualist. The second is treating the spectrum as a single dimension where every question must resolve the same way; real ideologies are bundles. The third is judging one\'s own position exempt from explanation — every position on the spectrum, including yours, is a product of the same formative forces, and naming them is the discipline that keeps ideology analysis honest.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Political ideology', def: 'Consciously held ideas about how political life is structured and how it should be structured.' },
            { term: 'Individualism', def: 'The view that the individual is the basic political unit — private property, competition, rule of law, self-interest.' },
            { term: 'Collectivism', def: 'The view that the group is basic — common good, collective responsibility, cooperation, shared interest.' },
            { term: 'Rule of law', def: 'Equal, predictable rules binding rulers and ruled alike; the framework individualism needs to protect each person\'s sphere.' },
            { term: 'Common good', def: 'The shared benefit a collective provides that individuals cannot reliably secure alone.' },
            { term: 'Voluntary association', def: 'Collective action entered freely — the line separating benign collectivism from enforced conformity.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The definition of a political ideology includes both:',
              options: ['History and prophecy', 'How political life is structured and how it should be structured', 'Economics and religion', 'Left-wing and right-wing'],
              answer: 1,
              explain: 'The descriptive and the normative halves travel together — that packaging is what makes an ideology coherent and action-guiding.',
            },
            {
              q: 'Which set of principles belongs to individualism as the curriculum lists them?',
              options: ['Common good, cooperation, sharing', 'Private property, competition, rule of law, self-interest', 'Class struggle, revolution, planning', 'Tradition, hierarchy, glory'],
              answer: 1,
              explain: 'These are the characteristic marks — the rule of law being the framework that makes the rest of the sphere enforceable.',
            },
            {
              q: 'The most important line on the collectivist map separates:',
              options: ['Rich from poor', 'Voluntary association from enforced conformity', 'Cities from countryside', 'Old from young'],
              answer: 1,
              explain: 'Whether the group serves its members or subsumes them decides whether a collectivism is benign or total.',
            },
            {
              q: 'Contemporary democratic liberalism, as OpenStax describes it, is best understood as:',
              options: ['Pure individualism with no collective element', 'A blend of individual rights, capitalism and collectively provided services', 'A rejection of both individualism and collectivism', 'An ideology without subgroups'],
              answer: 1,
              explain: 'Centre-left and centre-right argue over the proportion — the blend itself is the mainstream of the industrialized world.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'Follow with the liberalism lesson for the tradition that dominates this spectrum, and the western-political-thought-canon lesson for the philosophers behind it. The regimes-spectrum lesson owns how these ideas crystallize into institutional forms.',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'pol-liberalism-classical-modern',
      title: 'Liberalism: Classical Origins, Modern Reform and Its Rejections',
      domain: 'Social Sciences',
      field: 'Political Science',
      branch: 'Political Ideologies',
      tier: 'core',
      concepts: [
        'Classical liberalism\'s commitments',
        'Nineteenth-century impacts and discontents',
        'The modern-liberal turn',
        'Marxism and communism as rejection',
        'Fascism as rejection',
        'Totalitarianism and the Cold War divide',
        'Challenges to modern liberalism today',
      ],
      words: 1444,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'No ideology has shaped the modern world more than liberalism, and none has been contested more violently. In two centuries it went from a radical doctrine of limited government to the default grammar of the industrialized democracies — while generating, along the way, the two great counter-ideologies that tried to bury it. The Alberta curriculum compresses this into three questions: what classical liberalism was, what modern liberalism became, and what rejected the whole project. This lesson walks that arc, keeping the systems distinct from the events — the wars and revolutions themselves belong to the world-history lessons.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'Liberalism is the water the modern west swims in, which is exactly why its assumptions go unexamined — and why its critics, from Marx to the present, are the fastest way to see what those assumptions cost. Understanding the classical-modern split also decodes half of contemporary political argument: most democratic disputes today are fights inside liberalism about its economic dial, not fights about liberalism itself.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Classical liberalism, in OpenStax\'s summary, defends individual rights, limited government and free trade, and favors capitalism — the system where owners deploy assets as they see fit and those without assets contract to sell their labor. The philosophical engine belongs to the social-contract tradition: Locke saw individuals as bearing inherent natural rights and rationally discernible moral law, so that government exists by consent to protect rights — property first among them; Adam Smith then applied those property rights and free markets to the defense of global free trade. The curriculum also names the tradition\'s debt to Aboriginal contributions to the development of liberalism — a line of influence the program of studies asks students to explore explicitly.',
        },
        {
          kind: 'para',
          text: 'John Stuart Mill enlarged the program: personal freedom extends to all endeavors that do not directly harm other individuals — the harm principle, still the sharpest short definition of liberal tolerance. The nineteenth century then stress-tested the doctrine at scale: laissez-faire capitalism and industrialization produced staggering growth and staggering discontents — child labor, urban squalor, boom-and-bust cycles — which is precisely how the curriculum frames the "impacts" study. The lesson for analysis: a principle tested by industry generates its own resistance, and the resistance has a name.',
        },
        {
          kind: 'para',
          text: 'Modern liberalism is the reform that kept the name. In response to the Great Depression, leaders advocated including in the liberal tradition a more robust role for governmental regulation of the economy — protecting individuals not only from the state but also from the market\'s casualties: social insurance, labor standards, countercyclical spending, later the welfare state. The turn is a genuine evolution, not a betrayal: the underlying commitment to individual flourishing stayed constant while the diagnosis changed — the threat to the individual now included economic forces no individual could bargain with. Not everyone followed: writers such as Hayek dissented, arguing for reduced economic regulation and against government planning — the classical-modern argument that still structures centre-right versus centre-left politics inside every liberal democracy.',
        },
        {
          kind: 'para',
          text: 'The rejections are the curriculum\'s third strand, and OpenStax\'s chapter organizes them cleanly. Marxism: Marx and Engels argued capitalism was both inherently inhumane and inherently unstable — laden with internal tensions that made it vulnerable to, even destined for, replacement by coordinated revolutionary action of the working class; nationalism, they thought, divided workers who should have cooperated across borders. Later thinkers took the doctrine in new directions — Gramsci on cultural hegemony, Lenin and Stalin on party and state — each adapting Marx to circumstances he never saw.',
        },
        {
          kind: 'para',
          text: 'Fascism arose partly catalyzed by the growth of communism: new European movements sought to resist communist expansion with a heightened nationalism — pride in a national identity of shared blood, history and soil, elevated in its Nazi form into beliefs of Aryan racial superiority tied to hateful exclusivism and anti-Semitism. Where communism claimed to transcend the nation in the name of class, fascism sacralized the nation against both liberal individualism and communist internationalism. Both the Soviet system and the Nazi regime became, in OpenStax\'s term, totalitarianism — the extreme authoritarian form that reaches into private life itself; more moderate authoritarian regimes seek instead to keep some individual freedom while consolidating unaccountable power.',
        },
        {
          kind: 'para',
          text: 'The Cold War then organized the century: ideological conflict between liberal capitalism and communism shaped international relations after the Second World War, from blocs and proxy wars to the space race. The world-history lesson owns that narrative in detail — here the point is structural: the conflict was a contest between totalizing systems and the liberal synthesis, and the liberal synthesis outlasted both. Which is not the same as an ending: the curriculum closes the arc by asking how modern liberalism is challenged by alternative thought today — populism\'s majoritarian impulses, religious and traditionalist revival, ecological critiques of growth, and renewed arguments over how much economic regulation liberalism should carry. Modern liberalism\'s story is still being written by the same tension that produced it.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: a government introduces unemployment insurance, and critics call it both "the softening of capitalism" and "the road to serfdom." Place both critiques.',
            'Recall the governing idea: modern liberalism added economic regulation to the liberal tradition after the Great Depression; the classical wing dissenting from that addition is Hayek\'s.',
            'Apply: "softening of capitalism" is the Marxist-inflected critique — regulation manages capitalism rather than replacing it, precisely what Marx predicted would not work; "the road to serfdom" is the Hayekian classical-liberal critique — regulation is the seedbed of planning and lost liberty.',
            'State the result: the two critiques come from opposite ends — one wants the market gone, the other wants the state out — and both target the same middle position. Identifying the camp behind a criticism is the analytic skill this lesson trains.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Political analysts read party disputes as classical-versus-modern fights inside liberalism before treating them as left-versus-right.',
            'Historians classify interwar movements by which liberal commitment they rejected — property, pluralism or the nation.',
            'Debates over welfare, minimum wages and bank regulation replay the Depression-era turn with new instruments.',
            'Media literacy depends on recognizing ideological framing — which liberalism its critics see as the real target.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'The first pitfall is the Americanism trap: in the United States "liberal" means the modern, regulation-friendly wing, while elsewhere "liberal" often means the classical, market-friendly one — check which decade and which country a text means. The second is judging ideologies by their worst adherents alone or their best self-descriptions alone; both are marketing. The third is collapsing the rejections into one blob: communism and fascism were enemies of each other as much as of liberalism, and they rejected different liberal commitments — property and pluralism versus the very idea of individual worth.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Classical liberalism', def: 'Individual rights, limited government, free trade and capitalism as the default economic order.' },
            { term: 'Harm principle', def: 'Mill\'s rule that personal freedom extends to all endeavors not directly harming other individuals.' },
            { term: 'Modern liberalism', def: 'The post-Depression evolution adding government regulation and social provision to the liberal tradition.' },
            { term: 'Laissez-faire', def: 'The doctrine that the economy runs best with minimal state interference.' },
            { term: 'Totalitarianism', def: 'Extreme authoritarianism reaching into private life — the shared form of the Soviet and Nazi systems.' },
            { term: 'Hegemony', def: 'Gramsci\'s term for rule secured through culture and consent rather than force alone.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Classical liberalism\'s three headline commitments are:',
              options: ['Planning, equality, revolution', 'Individual rights, limited government, free trade', 'Nation, blood, soil', 'Collectivization, party rule, class struggle'],
              answer: 1,
              explain: 'Capitalism follows from the package: owners deploy assets freely, workers contract their labor.',
            },
            {
              q: 'The modern-liberal turn was catalyzed by:',
              options: ['The Reformation', 'The Great Depression and its demand for economic regulation', 'The Cold War', 'The printing press'],
              answer: 1,
              explain: 'The Depression made the market\'s casualties a state problem — Hayek\'s dissent defines the classical wing that refused the turn.',
            },
            {
              q: 'Marx and Engels argued capitalism would fall because:',
              options: ['It was militarily weak', 'Its internal tensions made it vulnerable to coordinated revolutionary action by the working class', 'Religion would replace it', 'Nationalists would outlaw it'],
              answer: 1,
              explain: 'The internal-tensions thesis is the engine of Marxist prediction — and nationalism, they thought, was what divided the workers who should have cooperated.',
            },
            {
              q: 'Fascism is best characterized as:',
              options: ['An economic program for workers', 'Heightened nationalism, in its Nazi form tied to racial superiority and exclusivism, partly opposing communism', 'A continuation of Mill\'s liberalism', 'A religious movement'],
              answer: 1,
              explain: 'It sacralized the nation against liberal individualism and communist internationalism alike — culminating in totalitarianism.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'The western-political-thought-canon lesson owns Hobbes, Locke, Rousseau and Mill in their own words; hist-twentieth-century owns the wars and the Cold War narrative; the regimes-spectrum lesson owns how these ideologies crystallize into institutions. The citizenship lesson completes the arc with rights and responsibility.',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'pol-citizenship-collective-rights',
      title: 'Citizenship: Rights, Roles and Responsible Action',
      domain: 'Social Sciences',
      field: 'Political Science',
      branch: 'Political Ideologies',
      tier: 'intermediate',
      concepts: [
        'Rights as limits on government',
        'Individual and collective rights',
        'Rights in tension: the balancing act',
        'When practice falls short of principle',
        'Roles and responsibilities of citizens',
        'Active citizenship and leadership',
        'Ideology and civic action',
      ],
      words: 1396,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Liberalism promises rights; citizenship is where the promise meets administration. OpenStax frames its civil-liberties chapter with exactly that tension — when the individual is free to act without government interference, when government may restrain expression, and how different systems react to the exercise of individual freedoms. The Alberta curriculum then adds the layer most treatments skip: some rights are held by persons, some by groups, and citizens must reason about both — plus the question the whole course ends on: to what extent should your actions as a citizen be shaped by an ideology?',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'Rights are not self-executing. They cost money to enforce, collide with each other in real cases, and can be quietly hollowed out by practice even while loudly honored in principle. A citizen who understands rights as infrastructure — something maintained by use, argument and vigilance — reads the news differently from one who treats them as decoration on a constitution.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'A right, in the liberal frame, is a protected sphere of action that government may not invade without justification — the negative liberty of "hands off": conscience, speech, assembly, due process. The vocabulary extends in two directions worth knowing. Positive rights claim provisions rather than restraints — education, health care, a fair hearing — and cost resources rather than forbearance. And collective rights attach to groups rather than persons: a union\'s right to bargain as a body, a linguistic community\'s right to its schools, Indigenous peoples\' rights held by nations rather than by individuals alone. The individualist instinct reads rights downward from persons; the collectivist reading aggregates upward; real constitutional orders recognize both, which is precisely why the two lessons of this pass belong together.',
        },
        {
          kind: 'para',
          text: 'Rights collide. My assembly is your traffic; my speech is your reputation; my religious practice is someone else\'s public square. The liberal answer is justification on demand: restrictions are legitimate only when they pursue a pressing public purpose, are prescribed by clear rules, and impair the right no more than necessary — proportionality, in one word. Emergencies are the stress test. OpenStax opens its chapter with the pandemic: mask mandates and protest restrictions produced court fights in which the same citizens demanded both protection and freedom. The workable rule: emergency powers should be extraordinary, transparent and temporary — the moment a "temporary" measure develops a permanent lobby, the balancing has tipped.',
        },
        {
          kind: 'para',
          text: 'Then the harder truth the curriculum insists on: liberal democracies themselves can reflect illiberal thought and practice. History\'s ledger includes democracies that interned minorities in wartime, disenfranchised whole populations at home while preaching liberty abroad, and ran empires under a rights-talking flag. The structural reasons are built in — majorities can be tyrannical, security bureaucracies hoard secrets, and practice drifts from principle wherever oversight is weak. The regimes lesson owns the taxonomy of backsliding; the citizenship-level skill is simpler and sharper: judge governments by what they do to their least-favored members, not by what their founding documents say.',
        },
        {
          kind: 'para',
          text: 'What follows for the citizen? Rights come attached to roles and responsibilities — the curriculum\'s triad. Voting is the floor, not the ceiling: the role includes paying attention between elections, serving on juries, paying taxes honestly, obeying legitimate law and contesting illegitimate law through the channels that exist. Responsibilities are the maintenance budget: without informed participation, rights decay into paper. And the curriculum\'s distinctive emphasis — citizenship in times of conflict — deserves its own line: wars and emergencies are exactly when rights-rationing temptation is highest and when the citizen\'s vigilance is worth the most.',
        },
        {
          kind: 'para',
          text: 'Active citizenship then scales upward: individual action (informing yourself, speaking, voting, petitioning), collective action (associations, unions, movements, parties — the voluntary collectivism of the ideologies lesson) and leadership, which the curriculum defines across three circles at once — local, national and global. A citizen addressing a pothole and one addressing climate change are running the same skill at different scales: identify the issue, gather evidence, build coalitions, use the legitimate channels, persist. The exam version of this topic is usually a scenario — read it as a scale-and-channel problem and it answers itself.',
        },
        {
          kind: 'para',
          text: 'And the ideology question the course closes with? The honest answer is: inevitably, partially. Your ideology — the package of beliefs from the earlier lessons — will shape which issues register as urgent and which solutions look fair. The danger is not having an ideology but being had by one: the responsible citizen tests ideological commitments against evidence and against the rights of those who hold different ones. The curriculum\'s phrase "to what extent" is the license to answer with a proportion, not a slogan — and "enough to act, never enough to stop thinking" is a defensible exam answer.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: a city bans gatherings over fifty people during an epidemic; a group defies the ban for a protest. Evaluate both sides with the tools of this lesson.',
            'Recall the governing idea: restrictions are legitimate with pressing purpose, clear rules and minimal impairment; assembly is a fundamental right whose exercise can be regulated but not abolished.',
            'Apply: the city has a pressing purpose (epidemic control) and should pass the clear-rules test; the protest group\'s claim weakens if alternatives exist (petitions, remote rallies) but the ban fails proportionality if it outlives the emergency or ignores case-by-case exceptions.',
            'State the result: the balancing frame converts a shouting match into checkable criteria — purpose, rule, proportion, duration. The exam expects exactly these criteria and a stated conclusion, not a verdict by vibes.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Courts apply the proportionality test to emergency orders, protest zones and speech limits case by case.',
            'Collective-rights frameworks govern union bargaining, language-of-schooling and Indigenous treaty rights.',
            'Civic groups run know-your-rights campaigns — the maintenance model of rights in action.',
            'Global-citizenship programs treat one issue at three scales — local action, national policy, international coordination.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'The first pitfall is rights absolutism — treating any restriction as tyranny; every right is already bounded by everyone else\'s. The opposite pitfall is balancing everything away — "public order" can justify anything if never checked against purpose, rule and proportion. The third is the paperwork fallacy: judging a democracy by its founding documents rather than its treatment of the least protected. And the fourth is cynicism — concluding that because practice falls short of principle, the principles are worthless; the gap is precisely what civic action exists to police.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Civil liberty', def: 'A protected sphere of individual action the government may not invade without justification.' },
            { term: 'Negative and positive rights', def: 'Rights against interference (speech, conscience) versus rights to provision (education, a fair hearing).' },
            { term: 'Collective rights', def: 'Rights held by groups — unions, language communities, Indigenous nations — rather than persons alone.' },
            { term: 'Proportionality', def: 'Restrictions must serve a pressing purpose, follow clear rules and impair the right no more than necessary.' },
            { term: 'Illiberal practice', def: 'A democracy acting against its own declared principles — internment, disenfranchisement, emergency powers that never end.' },
            { term: 'Active citizenship', def: 'Informed individual and collective action — voting, associating, petitioning, leading — across local, national and global scales.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A collective right differs from an individual right in that it:',
              options: ['Applies only during emergencies', 'Is held by a group as a group — a union, a linguistic community, a nation', 'Cannot be limited by government', 'Was invented in the twentieth century'],
              answer: 1,
              explain: 'The holder differs, not the force — collective rights can be constitutional and justiciable like any other.',
            },
            {
              q: 'The proportionality test asks whether a restriction:',
              options: ['Is popular', 'Serves a pressing purpose through clear rules with minimal impairment of the right', 'Was passed unanimously', 'Is permanent'],
              answer: 1,
              explain: 'Purpose, prescription and minimal impairment — the balancing framework courts actually use.',
            },
            {
              q: '"Liberal democracies reflecting illiberal practice" refers to:',
              options: ['Countries without constitutions', 'Democracies acting against their own declared principles — internment, disenfranchisement, endless emergencies', 'Any one-party state', 'Monarchies'],
              answer: 1,
              explain: 'The gap between paper and practice is the point — and the reason citizens, not documents, maintain rights.',
            },
            {
              q: 'The curriculum\'s three circles of citizenship leadership are:',
              options: ['Family, school, work', 'Local, national, global', 'Executive, legislative, judicial', 'Rich, middle, poor'],
              answer: 1,
              explain: 'The same civic skill runs at three scales — the exam scenarios usually test whether you can identify which circle a question lives in.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'The ideologies and liberalism lessons own the belief systems this lesson operationalizes; pol-regimes-spectrum owns the institutional taxonomy of backsliding; the mass-media lesson owns how citizens get the information their vigilance runs on.',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'lang-visual-multimedia-texts',
      title: 'Reading Visual and Multimedia Texts',
      domain: 'Languages & World Literature',
      field: 'Literary Craft',
      branch: 'Representation & Response',
      tier: 'intermediate',
      concepts: [
        'A text is any constructed message',
        'Media literacy: the working definition',
        'Framing: selection is argument',
        'Ownership and the skeptical default',
        'Reading a sequence: shot, cut, sound',
        'Authorial intent and audience positioning',
        'Critical thinking as media literacy in action',
      ],
      words: 1401,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Literacy used to stop at the page; it cannot any longer. A film, an advertisement, a photo essay, a news broadcast and a social feed are all texts — constructed messages with authors, techniques, audiences and intents — and the senior English classroom now expects you to read them with the same rigor you bring to a novel. The difference is the grammar: where print deploys sentences, visual texts deploy framing, light, cut and sound. This lesson gives you that grammar from the reader\'s side of the screen — not how to shoot a film, but how to see one.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          tone: 'insight',
          text: 'Visual media outnumbers print in everyone\'s day by orders of magnitude, and it is engineered to be read quickly and felt immediately — which makes fluency in it the modern definition of being well-read. Every persuasion that matters to your life now arrives partly as an image with a soundtrack; the reader who cannot name its techniques is being argued at without noticing.',
        },
        { kind: 'heading', text: 'Core Concepts' },
        {
          kind: 'para',
          text: 'Media literacy, in Mark Poepsel\'s working definition, is the media consumer\'s understanding of how mass media work: knowing where different types of information can be found, how best to evaluate information, who owns the major mass media platforms, how messages are produced, and how they are framed to suit various interests. Notice that half of that definition is institutional — ownership and production — because visual texts are made by organizations with interests, not by impartial lenses. Scholars have found more than half of the mass-media channels available to mass audiences in America owned by just five corporations; Poepsel\'s point is that this fact alone justifies a skeptical default. You do not need to believe every message is manipulated — only that every message was made, and made by someone.',
        },
        {
          kind: 'para',
          text: 'Framing is the most transferable concept in the whole toolkit. In communication theory, a frame is the way a story is presented — which sources and facts are selected, what tone is taken — and the selection is purposeful and meaningful: it can influence how people think about the topic. Poepsel\'s own example: as a television reporter during the buildup to the Iraq war, his station framed the issue as patriotism — patriots and protestors, plus a "Wall of Heroes" display — a choice of frame, not of fact. The reader\'s counter-habit is the two-column test: what does this text show me, and what does it systematically NOT show? Selection is argument even when no argument is spoken.',
        },
        {
          kind: 'para',
          text: 'Then the film grammar itself — the reader-side version, cross-referencing the craft lessons this library already owns. A shot is a choice of what we see: distance (intimate close-up, detached wide), angle (power from below, vulnerability from above), and focus (who is sharp, who is blurred) — the cinematography lesson owns how filmmakers make those choices; your job is to ask what the choice does to a viewer. The cut is the sentence break: continuity cutting hides itself, while montage makes meaning by collision — the Kuleshov effect, owned by the montage lesson, shows the same face reading as grief or appetite depending on the adjacent shot. Sound completes the frame: music tells you what to feel a beat before the image does, and a soundtrack can quietly reroute a scene\'s meaning.',
        },
        {
          kind: 'para',
          text: 'Authorial intent and audience positioning close the loop. Every visual text positions its audience: an ad invites you to become the person in the picture, a news package invites you to feel the frame\'s emotion, a documentary invites you to trust its narrator\'s map. The analytic move is to name the position you are being invited into — desirable customer, alarmed citizen, admiring fan — and then decide, deliberately, whether to take it. And when intent matters, reconstruct it from evidence: who made this, for whom, with what funding, and what would each plausible answer change about the message\'s meaning? "What underlies each claim" is Poepsel\'s phrase for the habit; it applies to an advertisement and a documentary alike.',
        },
        {
          kind: 'para',
          text: '"Critical thinking is media literacy put into action" — Poepsel\'s sentence is the bridge to practice. In the exam and in the classroom, the skill is the same three-step: describe the techniques (what is literally on screen — shots, cuts, words, sound), analyze the effect (what the techniques do to a viewer and why the maker chose them), and evaluate the intent (whose interest the text serves and what it leaves out). Grounded in evidence, named with the vocabulary, connected to audience: that is a visual-text analysis that reads as writing about writing — even when the text never prints a word.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify what is asked: analyze a 30-second public-service advertisement about smartphone addiction for technique, effect and intent.',
            'Recall the governing idea: describe the construction, analyze its effect on the positioned audience, evaluate the interest it serves.',
            'Apply: the ad opens with a child\'s face in shallow focus (intimacy, vulnerability), cuts from a glowing screen to a darkening dinner table (collision montage — the phone reads as the intruder), and lays a minor-key piano line under both (music assigns the feeling before any words arrive); the final frame hands the viewer a slogan and a website.',
            'State the result: the technique analysis writes itself from three named choices; the effect is guilt-and-protect positioning aimed at parents; the intent is advocacy — the sponsoring organization\'s interest is behind every frame. One paragraph per layer, evidence quoted from the text, and the analysis is done.',
          ],
        },
        { kind: 'heading', text: 'Applications in the Real World' },
        {
          kind: 'list',
          items: [
            'Students write visual-text analyses for diploma exams using describe-analyze-evaluate as the paragraph spine.',
            'News readers run the two-column test — shown and withheld — on every major story\'s video coverage.',
            'Campaign teams and advertisers design by the same grammar, which is why fluency matters equally on both sides.',
            'Researchers apply media-literacy questions to social feeds where five corporations own the platforms the messages travel on.',
          ],
        },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          tone: 'warn',
          text: 'The first pitfall is plot summary — retelling what happens in the advertisement or scene instead of analyzing how it is constructed; the exam marks technique, not plot. The second is the cynicism spiral: once you see framing everywhere, the lazy conclusion is that all media lie equally — but the disciplined reader distinguishes frames within facts from fabrication, and keeps evaluating rather than abandoning the effort. The third is vocabulary without evidence: naming "low-angle shot" proves nothing until you say what it does to the viewer in THIS text.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Media literacy', def: 'Understanding how mass media work — where information is found, how to evaluate it, who owns the platforms, how messages are produced and framed.' },
            { term: 'Framing', def: 'The purposeful selection of sources, facts and tone in presenting a story — selection that shapes how audiences think.' },
            { term: 'Shot grammar', def: 'The meaning-carrying choices within a single image — distance, angle, focus.' },
            { term: 'Montage', def: 'Meaning created by the collision of adjacent shots — the Kuleshov effect.' },
            { term: 'Audience positioning', def: 'The role a text invites its viewer to occupy — customer, citizen, fan.' },
            { term: 'Critical thinking', def: 'Media literacy put into action: asking what underlies each claim.' },
          ],
        },
        { kind: 'heading', text: 'Check Yourself' },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Poepsel\'s definition of media literacy includes all of the following EXCEPT:',
              options: ['Who owns the major media platforms', 'How messages are framed to suit interests', 'How to produce viral content', 'How best to evaluate information'],
              answer: 2,
              explain: 'The definition is reader-side: finding, evaluating, ownership, production and framing — not making content go viral.',
            },
            {
              q: 'Framing theory says a story\'s presentation is:',
              options: ['Neutral by professional ethics', 'Purposeful and meaningful — selection of sources, facts and tone that shapes thinking', 'Random', 'Determined only by the facts'],
              answer: 1,
              explain: 'Selection is argument — the two-column test (shown versus withheld) is the reader\'s counter-move.',
            },
            {
              q: 'The Kuleshov effect, applied from the reader\'s side, explains why:',
              options: ['Close-ups are emotional', 'The same face reads as grief or appetite depending on the adjacent shot', 'Music is unnecessary', 'Wide shots feel intimate'],
              answer: 1,
              explain: 'Montage makes meaning by collision — meaning lives between the shots, not only inside them.',
            },
            {
              q: 'The three-step spine of visual-text analysis is:',
              options: ['Summarize, praise, conclude', 'Describe the techniques, analyze the effect, evaluate the intent', 'Quote, list, submit', 'Watch, feel, guess'],
              answer: 1,
              explain: 'Construction, effect, interest — each step grounded in named evidence from the text itself.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          tone: 'path',
          text: 'The cinematography and montage lessons own the production craft this lesson reads; gp-mass-media-society-responsibility owns media institutions and accountability; fnd-reading-scientific-papers extends source evaluation to research literature, and the human-experiences lesson owns how written texts do the same representational work.',
        },
      ],
    },
  ]

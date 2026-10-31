/**
 * Knowledge Universe — Psychology — Chapter 03: Social & Interpersonal Psychology
 * 3 lessons · ~3,907 words
 * field: Psychology
 * legacy sources: social-sciences.ts, x29-orphan-closure-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Social Psychology, Interpersonal Relations]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 soc-interpersonal-behavior — Interpersonal Behavior: Attraction, Aggression and Helping
 *   03.2 soc-cognitive-dissonance — Cognitive Dissonance and Attitude Change
 *   03.3 psych-conformity-obedience-crowd — Conformity, Obedience and the Power of the Situation
 */
import type { KnowledgeTopic } from '../../types'

export const psychologyCh03: KnowledgeTopic[] = [
  {
    id: 'soc-interpersonal-behavior',
    title: 'Interpersonal Behavior: Attraction, Aggression and Helping',
    domain: 'Social Sciences',
    field: 'Psychology',
    branch: 'Interpersonal Relations',
    tier: 'core',
    concepts: [
      'Proximity and the mere-exposure effect',
      'Similarity, reciprocity and physical attractiveness',
      'Hostile versus instrumental aggression',
      'The frustration-aggression hypothesis',
      'Bullying and cyberbullying dynamics',
      'Prosocial behavior and the altruism debate',
      'The bystander effect',
      'Diffusion of responsibility',
      'Designing situations that increase helping',
    ],
    words: 1427,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Between the person and the crowd lies the pair: how two people come to like each other, why they sometimes hurt each other, and when they help each other. Social psychology treats these three behaviors with the same toolkit — situations shape behavior more than character does — and the results are among the most useful findings in the discipline. They explain who becomes friends, why tempers flare, and why a crowd watched while someone needed help. Exam questions in this territory are scenario questions: given a situation, name the effect and the mechanism behind it.',
      },
      {
        kind: 'para',
        text: 'Scope note: the situational-influence territory of conformity, obedience and deindividuation belongs to the conformity lesson, and workplace applications (motivation, leadership) belong to the management lessons. This lesson owns the pairwise behaviors — forming relationships, harming, helping — where the classic effects have clean names and cleaner experiments.',
      },
      { kind: 'heading', text: 'Attraction: who ends up liking whom' },
      {
        kind: 'para',
        text: 'The strongest predictor of who becomes close to whom is embarrassingly mundane: proximity. Friendships and romances form among people who are physically near each other — neighbours, classmates, colleagues — because nearness supplies the opportunity for interaction. Its cognitive engine is the mere-exposure effect: repeated encounter with a stimulus by itself increases liking for it. Familiarity breeds contentment, not contempt — up to a point, and the experiments manipulating exposure frequency showed the curve cleanly.',
      },
      {
        kind: 'para',
        text: 'Three more factors complete the standard set. Similarity: we like people who share our attitudes, values and backgrounds — validation of our own views and fewer friction points; the classic studies found attitude similarity predicted liking far better than complementarity. Reciprocity: we like people who like us — knowing someone approves of us is one of the strongest rewards social life offers. Physical attractiveness: appearance strongly shapes first impressions and early liking — with the near-universal halo of assuming attractive people also possess other virtues. The exam framing: four factors, each with a one-line mechanism — opportunity, validation, reward, halo — and scenario questions that ask which is operating.',
      },
      { kind: 'heading', text: 'Aggression: hurting on purpose' },
      {
        kind: 'para',
        text: 'Aggression is behavior intended to harm another person, and the intention is what splits its two types. Hostile aggression springs from anger and aims at pain — the barroom brawl, the vengeful outburst. Instrumental aggression causes harm as a means to an end — the contract killer, the calculated intimidation — without anger as the engine. The distinction decides both diagnosis and remedy: hostile aggression needs the anger cooled; instrumental aggression needs the payoff removed.',
      },
      {
        kind: 'para',
        text: 'Why does it happen? The classic hypothesis is frustration-aggression: being blocked from an important goal produces frustration, which can discharge as aggression — a traffic jam, a queue, a blocked ambition. Evolutionary accounts add function: aggression defends status, mates and resources, with males on average more physically aggressive across cultures. Modern extensions note the biology of threat systems and the environment\u2019s role — heat, crowding and provocation all raise the floor. None of these is a full theory; each names a lever, and questions usually ask which lever a scenario is pulling.',
      },
      {
        kind: 'para',
        text: 'The systematic, repeated form gets its own names. Bullying is repeated negative treatment over time with a power imbalance — boys more often direct physical aggression, girls more often indirect social aggression (exclusion, rumor); victims carry elevated risks of depression, academic decline and worse. Cyberbullying imports the same structure online, where covert and anonymous channels let harm scale — roughly a third of middle and high schoolers report experiencing it, with rumor-spreading more common among girls and direct threats among boys. The defining features to name in answers: repetition, intention, power imbalance.',
      },
      { kind: 'heading', text: 'Helping: prosocial behavior and the bystander' },
      {
        kind: 'para',
        text: 'Prosocial behavior is any act that helps others, and its hardest case is altruism — helping with no expected benefit to the helper. Whether pure altruism exists is the field\u2019s standing debate: helping can be egoistic (escaping distress, earning approval, reciprocity) or genuinely other-focused (empathic concern), and experiments that separate the two motives are how the question is pursued. For exams, the vocabulary matters: prosocial is the umbrella; altruism is the contested pure end of it.',
      },
      {
        kind: 'para',
        text: 'The headline finding is the bystander effect: the more witnesses to an emergency, the less likely any one of them helps. Its mechanism is diffusion of responsibility — with many present, each person\u2019s share of the obligation shrinks, and each assumes someone else will act; pluralistic ignorance compounds it (everyone reads everyone else\u2019s calm as evidence nothing is wrong). The antidote is design, not hope: make one person responsible by name, make the need explicit, and reduce ambiguity — the intervention questions write themselves once the mechanism is clear. Note the crossover with aggression\u2019s bullying section: an audience can inhibit action as easily as it can film it.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Scenario to effect to mechanism',
        steps: [
          'Scenario: \u201cMei joined a gym and, after three weeks of seeing the same faces at the same hour, finds two of them quite likeable.\u201d Effect: mere exposure via proximity — repeated encounter raised liking with no information exchanged.',
          'Scenario: \u201cA new colleague shares your exact stance on the project dispute; you warm to him within days.\u201d Effect: similarity — agreement validates your view; reciprocity would require his liking you first.',
          'Scenario: \u201cAfter failing her driving test for the third time, Lena slams the door and shouts at her brother.\u201d Effect: hostile aggression riding the frustration-aggression bridge — blocked goal, anger, misdirected harm.',
          'Scenario: \u201cA shopper collapses in a busy mall; eleven people watch; no one moves.\u201d Effect: bystander effect via diffusion of responsibility — each onlooker\u2019s share of duty shrank as the crowd grew.',
          'Design twist: \u201cthe mall guard points at one bystander: \u2018You in the green jacket — call emergency services now.\u2019\u201d The fix targets the mechanism — one named person, explicit need, responsibility no longer divisible.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Repeatedly encountering a stimulus by itself increases liking for it. This is',
            options: ['reciprocity', 'the mere-exposure effect', 'the halo effect', 'instrumental liking'],
            answer: 1,
            explain: 'Mere exposure is the cognitive engine behind proximity\u2019s power: familiarity alone raises liking — which is why seat neighbours become friends.',
          },
          {
            q: 'A hired thief poisons a business rival to collect a payment. Which type of aggression?',
            options: ['hostile — anger-driven', 'instrumental — a means to an end', 'frustration-aggression', 'prosocial harm'],
            answer: 1,
            explain: 'The harm serves an external goal without anger as the engine — instrumental aggression. Hostile aggression aims at pain for its own emotional sake.',
          },
          {
            q: 'Which three features define bullying?',
            options: [
              'anger, revenge, secrecy',
              'repetition, intention to harm, power imbalance',
              'proximity, similarity, reciprocity',
              'frustration, anonymity, audience',
            ],
            answer: 1,
            explain: 'Bullying is repeated negative treatment over time with an imbalance of power — the trio distinguishes it from one-off conflict.',
          },
          {
            q: 'In an emergency with many onlookers, each person helps less because',
            options: [
              'strangers cannot communicate',
              'responsibility is diffused across the crowd',
              'people enjoy watching emergencies',
              'helping is always altruistic',
            ],
            answer: 1,
            explain: 'Diffusion of responsibility: the obligation splits among witnesses, each share shrinking as numbers grow — the engine of the bystander effect.',
          },
          {
            q: 'Which intervention most directly counteracts the bystander effect?',
            options: [
              'asking the crowd in general to help',
              'selecting one person by name and giving one explicit task',
              'waiting for someone to volunteer naturally',
              'increasing the number of witnesses',
            ],
            answer: 1,
            explain: 'Named assignment makes responsibility non-divisible and removes ambiguity — it reverses the exact mechanism that suppressed helping.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Reading \u201cfamiliarity breeds contempt\u201d as psychology\u2019s verdict — the data say the opposite: exposure raises liking. Calling all harm \u201cviolence\u201d and skipping the intention test that separates hostile from instrumental. Treating frustration-aggression as automatic — frustration raises the probability of aggression, it does not guarantee it. Confusing prosocial behavior with altruism: altruism is the contested no-benefit end of a broad umbrella. Explaining the bystander effect with \u201cindifference\u201d — the mechanism is responsibility diffusion and ambiguity, not coldness. And forgetting the design implication in scenario questions: examiners ask for the fix, not just the label.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none. Follow with the conformity-and-obedience lesson for the crowd-level sibling of these pairwise effects, the stress lesson for how conflict feeds the endocrine channel, and the management lessons for these findings at work. Primary reading: OpenStax, Psychology 2e \u00a712.6 \u201cAggression\u201d and \u00a712.7 \u201cProsocial Behavior\u201d (openstax.org, CC BY-NC-SA); LibreTexts, Principles of Social Psychology ch.8 \u201cLiking and Loving\u201d, \u00a78.1 \u201cInitial Attraction\u201d (CC licensed).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Attraction\u2019s four levers: proximity (opportunity), similarity (validation), reciprocity (reward), attractiveness (halo).',
        'Mere exposure: repetition alone raises liking — the engine inside proximity.',
        'Aggression splits by intention: hostile burns with anger, instrumental serves a goal.',
        'Frustration-aggression: blocked goals raise aggression\u2019s probability.',
        'Bullying = repetition + intention + power imbalance; cyberbullying scales it.',
        'Bystander effect rides diffusion of responsibility; named assignment is the fix.',
      ] },
    ],
  },
  {
    id: 'soc-cognitive-dissonance',
    title: 'Cognitive Dissonance and Attitude Change',
    domain: 'Social Sciences',
    field: 'Psychology',
    branch: 'Social Psychology',
    tier: 'intermediate',
    concepts: [
      'Dissonance as aversive arousal',
      'Insufficient justification and induced compliance',
      'Effort justification',
      'Post-decision dissonance',
      'Belief disconfirmation and failed prophecies',
      'Self-affirmation as an indirect exit',
    ],
    words: 1206,
    readMins: 6,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Cognitive dissonance is the mental discomfort that arises when two cognitions — a belief, an attitude, or an awareness of one’s own behaviour — clash with one another. Leon Festinger’s 1957 theory gave social psychology one of its most powerful explanations of attitude change: because inconsistency is aversive, people revise beliefs, recruit new justifications, or trivialise the conflict until harmony returns. The theory predicts counterintuitive effects, such as people liking a dull task more when they were paid almost nothing to praise it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Dissonance theory explains why changing behaviour often changes minds, rather than the reverse. Anyone who designs health campaigns, sells products, or belongs to a group that demands sacrifice is, knowingly or not, engineering dissonance — and choosing which exit from it people will take.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Festinger insisted that dissonance is not a dry logical puzzle but a motivated state, closer to hunger than to arithmetic. People are driven to reduce it, and they take whichever exit is cheapest. Later research using brain imaging and skin-conductance measures supports the claim: inconsistency recruits the same conflict-monitoring circuitry the brain uses for errors generally, which is why clashes between action and belief genuinely feel like something.',
      },
      {
        kind: 'para',
        text: 'In the classic 1959 experiment by Leon Festinger and James Carlsmith, participants did a dull peg-turning task, then told a waiting student it was enjoyable, for either one dollar or twenty. The one-dollar group later rated the task as genuinely more fun. With too little reward to justify the lie, the only available explanation was that the task really had been interesting — so that is what they came to believe.',
      },
      {
        kind: 'para',
        text: 'In 1959 Elliot Aronson and Judson Mills showed that women who endured an embarrassing initiation to join a discussion group later valued that dull group more highly than those who joined easily. The logic — I suffered for this, so it must be worth it — reappears wherever initiation is costly: hazing rituals, military training and gruelling degree programmes all convert pain into value.',
      },
      {
        kind: 'para',
        text: 'Choosing between close alternatives creates dissonance because each option has virtues the other lacks. The classic remedy is to spread the alternatives apart: after deciding, people upgrade the chosen option and downgrade the rejected one. The same mechanism powers post-purchase rationalisation among consumers, and explains why letting buyers finalise a deal themselves, rather than being pushed, increases later satisfaction.',
      },
      {
        kind: 'para',
        text: 'Festinger, Henry Riecken and Stanley Schachter observed a small group whose leader had prophesied a flood that would end the world on a specific date. When the date passed uneventfully, most members did not abandon the belief; they proselytised harder, reinterpreting the failure as divine mercy earned by their faith. When evidence against a committed belief is total, social support for the belief can grow rather than shrink.',
      },
      {
        kind: 'para',
        text: 'Claude Steele’s 1988 work showed a gentler exit: people can reduce dissonance without touching the conflicted belief at all, by affirming an unrelated valued identity. Participants reminded of an important personal value before a dissonant choice showed little attitude change. A person whose self-worth is secure in one domain, it turns out, has less need to rationalise in another.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: predict the private attitude of a student who, for no payment and no coercion, records a public video praising a campus rule she privately dislikes.',
        'Recall the governing idea: with insufficient external justification for a counter-attitudinal act, the clash between “I said this” and “I don’t believe it” must be resolved internally.',
        'Apply it: she cannot undo the speech, so the cheapest available route is to drag her private attitude toward the public one — exactly the one-dollar condition of the 1959 experiment.',
        'State the result: her post-video rating of the rule should move toward neutral or mild approval — attitude change produced by action, not by argument.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Health campaigns that ask people to advocate safe behaviour publicly, making them “hypocrites” if they then ignore their own advice.',
        'Consumer research on post-purchase rationalisation, where satisfaction ratings track how irreversible the purchase feels.',
        'Cults and ideological groups, where costly commitments deepen loyalty even after prophecies or predictions fail.',
        'Education design, where appropriately demanding but well-supported challenges convert effort into perceived value.',
        'Negotiation and sales, where small voluntary commitments set up later pressure toward consistency.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Students often assume dissonance always produces attitude change; in reality people also add justifications, deny responsibility, or trivialise the inconsistency, and they do so more when the act feels coerced, revocable or irrelevant to self-image. The effect is also moderated by culture: several East Asian studies find dissonance strongest when a choice is observed by others rather than made alone. And dissonance requires freely chosen, self-relevant inconsistency — contradiction in the abstract produces no drive at all.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'cognitive dissonance', def: 'The aversive state arising when cognitions relevant to oneself contradict one another.' },
        { term: 'induced compliance', def: 'Getting someone to argue against their private attitude, typically for a small incentive.' },
        { term: 'insufficient justification', def: 'A counter-attitudinal act with too small a reward to explain itself, forcing internal attitude change.' },
        { term: 'effort justification', def: 'Inflating the value of an outcome to justify the pain spent reaching it.' },
        { term: 'post-decision dissonance', def: 'Discomfort after a choice, reduced by upgrading the chosen option.' },
        { term: 'self-affirmation', def: 'Restoring global self-worth through an unrelated valued identity, defusing dissonance.' },
        { term: 'selective exposure', def: 'Seeking belief-consistent information and avoiding dissonant information.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'In the 1959 Festinger and Carlsmith study, which participants later rated the boring task as most enjoyable?',
          options: ['Those paid one dollar', 'Those paid twenty dollars', 'Those who refused to lie', 'The confederates themselves'],
          answer: 0,
          explain: 'The tiny reward was insufficient justification for lying, so participants resolved the dissonance by upgrading their opinion of the task itself.',
        },
        {
          q: 'Which factor most weakens dissonance-driven attitude change?',
          options: ['The behaviour was freely chosen', 'A large reward or explicit threat justified the act', 'The person expects to repeat the act', 'The attitude concerns everyday objects'],
          answer: 1,
          explain: 'External justification removes the need for internal change; freedom of choice and self-relevance instead strengthen the dissonance.',
        },
        {
          q: 'Effort justification best explains which observation?',
          options: ['Gym memberships lapse in winter', 'Initiates to a harsh club rate it more valuable than outsiders do', 'Paid jobs are liked more than hobbies', 'Easy tasks are remembered as hard'],
          answer: 1,
          explain: 'Having suffered to join, members inflate the group’s worth — the suffering must have been for something.',
        },
        {
          q: 'According to self-affirmation theory, dissonance can be reduced by…',
          options: ['denying that the behaviour occurred', 'affirming an unrelated valued aspect of oneself', 'paying people more for the same act', 'repeating the behaviour until it feels normal'],
          answer: 1,
          explain: 'A secure, unrelated source of self-worth satisfies the need the dissonance was threatening, so the belief needs no revision.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Study Path',
        tone: 'path',
        text: 'Prerequisites: basic familiarity with attitudes and with experimental method. Pair this topic with persuasion and social influence, then move on to self-perception theory and the modern neuroscience of conflict monitoring. The 1957 book and the 1959 experiment are short, readable classics that repay a slow read at the intermediate tier.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Dissonance is an aversive drive triggered by inconsistent, self-relevant cognitions.',
        'Insufficient justification: the smaller the external reward, the larger the internal attitude change.',
        'Effort justification converts suffering into perceived value.',
        'After decisions, we spread the alternatives apart to reassure ourselves.',
        'Self-affirmation and cultural context tune how strongly dissonance bites.',
      ] },
    ],
  },
  {
    id: "psych-conformity-obedience-crowd",
    title: "Conformity, Obedience and the Power of the Situation",
    domain: "Social Sciences",
    field: "Psychology",
    branch: "Social Psychology",
    tier: "core",
    concepts: [
      "Informational versus normative influence",
      "Asch: unanimity and the power of one ally",
      "Milgram's variations: what actually moves obedience",
      "Groupthink: symptoms and antidotes",
      "Crowds as shared identity, not lost selves",
      "Diffusion of responsibility and the bystander effect",
      "Situations can be designed",
    ],
    words: 1274,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      { kind: "para", text: "In 1951 an experiment asked people to judge which line matched a sample — a task a child gets right alone — and a third of the answers bent toward a unanimous group. The classic social-influence studies, from Asch through Milgram to the bystander experiments, are pop culture's favorite horror stories, and they are genuinely important once their real finding is extracted: situations have reliable power over behavior, more than the people inside them predict. This lesson is that extraction — the sibling of the dissonance lesson's attitude-change program, and its frequent partner." },
      { kind: "callout", title: "Why this matters", tone: "insight", text: "From boardrooms to emergencies, the situational lens is applied psychology's best tool: if behavior follows the shape of the room, redesign the room. The one-ally and speak-last procedures that tame conformity are cheap, tested, and almost never used." },
      { kind: "heading", text: "Core Concepts" },
      { kind: "para", text: "Solomon Asch's line judgments: facing a unanimous majority giving an obviously wrong answer, about 75 percent of participants conformed at least once, and roughly a third of all critical trials bent. The decomposition is the point — informational influence, taking others as evidence when unsure, versus normative influence, the cost of standing out even when sure. And the finding's best half: one dissenting ally, even a stranger giving a different wrong answer, collapses conformity to near five percent. Unanimity, not group size, was doing almost all the work." },
      { kind: "para", text: "Stanley Milgram's obedience studies asked teachers to deliver shocks for wrong answers: 65 percent went to the maximum 450 volts. The variations matter more than the headline — obedience fell to 30 percent when the teacher had to force the learner's hand, and to under 10 percent with two peers who refused first, shifting as well with proximity and setting. Interpretation has evolved from blind obedience to engaged followership: most participants were distressed, and most complied while trying to do the job well. The critiques — demand characteristics, sampling, and the ethics debates that followed — reshaped research ethics itself." },
      { kind: "para", text: "The Stanford Prison Experiment ended after six days when guards turned cruel, and it became the textbooks' exhibit on the power of roles. It has since aged badly as evidence: archival work shows guards were coached toward toughness, and volunteers for a prison study scored higher on aggression than average. A 2006 BBC partial replication inverted it — the guards failed to identify with their role and the prisoners won. The durable lesson inverted with it: roles shape behavior when people identify with the role, which makes identity, not loss of self, the mechanism." },
      { kind: "para", text: "Irving Janis extracted groupthink from the Bay of Pigs fiasco: cohesive groups seeking unanimity suppress dissent and outperform nothing. The symptoms — illusion of invulnerability, self-censorship, mindguards shielding the leader from bad news, illusion of unanimity — map onto Asch's mechanism, and the antidotes are procedural because the cause is structural: the leader states preferences last, a devil's advocate is assigned and rotated, outside review is mandatory. Same fix as the one ally." },
      { kind: "para", text: "Gustave Le Bon's 1895 mob — humans losing themselves in crowds — dominated a century, but the evidence refined it. Anonymous Halloween trick-or-treaters took more candy when alone, yet Stephen Reicher's crowd work shows crowds enforcing their own shared norms: sports crowds police themselves when treated as communities, and confrontational policing manufactures the disorder it fears. The bystander story parallels: after the Kitty Genovese murder — whose famous thirty-eight-witnesses account was substantially wrong — Darley and Latané showed helping collapses as perceived bystanders multiply, with 75 percent of people alone reporting smoke within two minutes against 10 percent who believed four others were present. Responsibility diffuses; naming a helper undoes it." },
      { kind: "para", text: "The synthesis is neither cynicism nor exoneration. Situations do have main effects — but the effects respond to design: unanimity broken, responsibility assigned, leaders speaking last, norms made visible. The errors live at the extremes — people are sheep (a single ally flattened Asch's effect) and I would never, the fundamental attribution error the biases lesson owns, applied to yourself first. The studies' replication record is honestly mixed; the situational principle it supports has survived every test." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: a leadership team keeps approving flawed launches — meetings where everyone senses trouble and nobody says it. Apply the conformity toolkit concretely.",
        "Recall the governing idea: normative influence and groupthink suppress dissent under unanimity; procedures, not courage campaigns, break it.",
        "Apply: the CEO now speaks last on any proposal; a rotating devil's advocate must argue the strongest case against; anonymous pre-reads collect objections before the room converges; and one member is named the obligated dissenter per decision — Asch's ally, institutionalized.",
        "State the result: dissent stops being a character trait of the brave and becomes a role in the process — the finding of 1951, deployed as calendar policy.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Intelligence agencies institutionalized red teams and devil's advocates after analytic failures.",
        "Bystander-training programs teach designation — you, in the red jacket, call for help — to defeat diffusion.",
        "Dialogue-based crowd policing at football matches measurably reduced disorder in European field trials.",
        "Jury research finds a single dissenting juror transforms deliberation from verdict-confirmation to evidence-testing.",
        "Whistleblower channels and speak-up training are groupthink insurance with compliance teeth.",
      ] },
      { kind: "callout", title: "Common Pitfalls", tone: "warn", text: "The standard misuses: quoting headline numbers as constants (Milgram's variations ran from 10 to 65 percent; the Genovese account was wrong; Zimbardo's guards were coached); concluding people are sheep (one ally flattens conformity — the sheep finding is about unanimity); skipping the ethics lesson these studies forced into existence; and deploying the cynicism version — everyone conforms — as an excuse for rooms where nobody was ever asked. The deepest misuse is reading these as verdicts on humanity rather than instructions for design." },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "normative influence", def: "Conforming to be liked and accepted, even against one's own perception." },
        { term: "informational influence", def: "Taking others' behavior as evidence about reality." },
        { term: "groupthink", def: "Janis's mode of cohesive decision-making that suppresses dissent for unanimity." },
        { term: "diffusion of responsibility", def: "Each bystander's felt obligation shrinking with their number." },
        { term: "engaged followership", def: "The modern reading of Milgram: complying while trying to serve a legitimate-seeming goal." },
        { term: "shared identity", def: "The crowd's organizing principle in Reicher's account — behavior follows the group one identifies with." },
        { term: "moral panic", def: "Society's overreaction to a deviance episode — Durkheim's boundary ritual at full volume." },
      ] },
      { kind: "heading", text: "Check Yourself" },
      { kind: "quiz", items: [
        {
          q: "In Asch's studies, the single most powerful reducer of conformity was:",
          options: ["larger groups", "one dissenting ally breaking unanimity", "the task being harder", "payment for accuracy"],
          answer: 1,
          explain: "Conformity collapsed from about a third of trials to near five percent — the room only had to stop being unanimous.",
        },
        {
          q: "Milgram's variations showed obedience fell most when:",
          options: ["the learner sat in another room", "peers refused first and the teacher had to force the learner's hand", "the authority wore plain clothes", "the shocks were labeled mild"],
          answer: 1,
          explain: "Peer disobedience plus physical proximity pushed full obedience under 10 percent — the situation, not the person's character, carried the result.",
        },
        {
          q: "The bystander effect is primarily an effect of:",
          options: ["urban apathy", "fear of legal liability", "diffusion of responsibility across witnesses", "weak personal morals"],
          answer: 2,
          explain: "Darley and Latané: each additional perceived bystander shrinks any one person's felt obligation to act.",
        },
        {
          q: "Reicher's crowd findings suggest that crowds:",
          options: ["lose individual identity and rationality", "act on shared identity and enforce group norms", "are inherently violent", "behave randomly"],
          answer: 1,
          explain: "Crowds are not melted individuals; they are groups with identities — which is why respectful policing produces peaceful ones.",
        },
      ] },
      { kind: "callout", title: "Where to go next", tone: "path", text: "Pairs with the cognitive-dissonance lesson — attitude change is its sibling program — and the biases lesson for the fundamental attribution error. The research-methods toolkit covers the ethics regime these studies created. Next: persuasion science, leadership psychology, and the crowd-safety engineering of mass events." },
    ],
  },
]

/**
 * Knowledge Universe — Philosophy — Chapter 03: Philosophy of Mind
 * 3 lessons · ~3,521 words
 * field: Philosophy
 * legacy sources: humanities.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Philosophy of Mind, Mind & Existence]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 phil-mind-consciousness — The Philosophy of Mind: Consciousness and Its Puzzles
 *   03.2 hum-eastern-philosophy-systems — Eastern Philosophy: The Great Systems
 *   03.3 hum-existentialism-freedom-meaning — Existentialism: Freedom, Anxiety, Meaning
 */
import type { KnowledgeTopic } from '../../types'

export const philosophyCh03: KnowledgeTopic[] = [
  {
    id: 'phil-mind-consciousness',
    title: 'The Philosophy of Mind: Consciousness and Its Puzzles',
    domain: 'Humanities',
    field: 'Philosophy',
    branch: 'Philosophy of Mind',
    tier: 'advanced',
    concepts: [
      'The mind-body problem and Cartesian dualism',
      'Ryle\'s ghost and the identity theory',
      'Functionalism: mind as what the mind does',
      'The hard problem and qualia',
      'Intentionality and the Chinese Room',
      'Consciousness theories today',
    ],
    words: 1144,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Nothing is closer to you than your own experience — the taste of coffee, the ache of a tooth, the felt redness of red — and nothing is harder to explain. The philosophy of mind asks how mental life fits into the physical world: whether the mind is a substance, a program, a brain process or something else entirely. This advanced lesson runs the main theories — dualism, behaviourism, identity theory, functionalism — and then the problem that has dominated the field since the 1990s: why all this processing should feel like anything at all.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The questions are no longer seminar games. Whether an artificial system could suffer, what makes a patient in a coma a person, whether octopuses deserve welfare protection, and whether free will survives neuroscience are all philosophy-of-mind questions with law, medicine and engineering budgets attached. The vocabulary you need to argue about them — dualism, functionalism, qualia — is exactly what this lesson supplies.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Descartes divided reality into thinking substance and extended substance, and immediately met the objection Princess Elisabeth of Bohemia pressed on him in 1643: how can an unextended mind move an extended body? Causal interaction across categories is mysterious, and dualism\'s mechanism never recovered. Yet the intuition driving it — that experience is not obviously a physical thing — survives every attempt at burial.',
      },
      {
        kind: 'para',
        text: 'Gilbert Ryle\'s The Concept of Mind (1949) mocked dualism as "the ghost in the machine", a category mistake: the mind is not a second thing inside the body but a pattern in what people do. Behaviourism ruled psychology for a generation; then U. T. Place and J. J. C. Smart proposed the identity theory: mental states just are brain states, as water is H2O. The analogy held until multiple realizability raised its head.',
      },
      {
        kind: 'para',
        text: 'Hilary Putnam\'s move was to define mental states by role rather than material: pain is whatever state is typically caused by tissue damage and causes avoidance, distress and belief — an organisational job description. Minds are multiply realizable, so a functional duplicate should have the same mental life whatever it is made of, neuron or silicon. Functionalism became cognitive science\'s philosophical backbone, and the default answer to "what is a mind?"',
      },
      {
        kind: 'para',
        text: 'In 1995 David Chalmers named the residue every functional account leaves: the hard problem of consciousness. Explaining discrimination, report and integration — the "easy" problems, hard but tractable — still does not explain why there is something it is like to undergo them. The redness of red — qualia — seems left over however complete the mechanistic story. Chalmers\' thought experiment of a zombie twin, molecule-for-molecule identical yet dark inside, argues that consciousness does not logically follow from the physical facts.',
      },
      {
        kind: 'para',
        text: 'John Searle\'s Chinese Room (1980) targeted functionalism\'s favourite case: a man in a room follows rules for manipulating Chinese symbols and passes for a fluent correspondent, yet understands nothing. Syntax, however elaborate, is not semantics — the mind\'s aboutness, its intentionality, is not symbol-shuffling. The argument is contested at every joint, but it fixed the burden of proof: show me where the understanding would be.',
      },
      {
        kind: 'para',
        text: 'The present field is a bazaar. Global workspace theory (Baars, Dehaene) treats consciousness as information broadcast across the brain; integrated information theory (Tononi) assigns it a mathematical quantity, phi; Crick and Koch hunted its neural correlates; panpsychism, respectable again, treats experience as fundamental to matter, while illusionists reply that consciousness as classically conceived is the brain\'s user-illusion. No result is settled, and every camp claims the evidence.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: evaluate multiple realizability as an objection to identity theory.',
        'Recall the claim: mental states are identical to brain states as water is identical to H2O — and identities hold necessarily, in every possible case.',
        'Apply it: if an octopus, a hypothetical silicon system and a human can all realise pain while differing grossly in physical make-up, pain cannot be identical to any one physical state type; the identity would have to be claimed per species or per instance.',
        'State the result: type identity fails as a general theory, and functionalism inherits the field by defining mental states by role — though whether roles capture experience is precisely the hard problem.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'AI ethics: whether machine systems could deserve moral consideration turns on functionalism versus the hard problem.',
        'Medicine: theories of consciousness inform diagnostic standards for coma, vegetative and minimally conscious states.',
        'Animal welfare: the 2012 Cambridge Declaration on Consciousness drew on this literature to extend moral concern across species.',
        'Neurolaw: assessments of responsibility and conscious intent increasingly cite findings about will and awareness.',
        'Meditation research: first-person reports are being formalised as data, reviving introspection under experimental discipline.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not confuse the easy problems (functions, reports, access) with the hard problem — solving all the easy ones would not obviously touch the hard one. "Conceivable" does not straightforwardly mean "possible"; the zombie argument leans hard on that bridge. Functionalism explains cognition, not yet phenomenology — treat claims otherwise with suspicion. And beware false certainty in both directions: neither "science has explained consciousness" nor "it never can" is a report from the frontier.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'dualism', def: 'Descartes\' thesis that mind and body are distinct substances; strained by the interaction problem.' },
        { term: 'identity theory', def: 'The view that mental states are identical to brain states, as water is identical to H2O.' },
        { term: 'multiple realizability', def: 'The thesis that the same mental state can be realised in very different physical substrates.' },
        { term: 'functionalism', def: 'The view that mental states are defined by causal role — what they do — not by their composition.' },
        { term: 'hard problem', def: 'Chalmers\' name for explaining why physical processing is accompanied by subjective experience at all.' },
        { term: 'qualia', def: 'The felt qualities of experience — what red looks like, what pain feels like.' },
        { term: 'Chinese Room', def: 'Searle\'s 1980 argument that symbol manipulation alone is not understanding.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'Elisabeth of Bohemia\'s objection to Descartes concerned…',
          options: ['the existence of other minds', 'how an immaterial mind could causally move a body', 'whether God is a deceiver', 'the reliability of the senses'],
          answer: 1,
          explain: 'The interaction problem: causal commerce between unextended and extended substances is inexplicable.',
        },
        {
          q: 'Multiple realizability embarrasses identity theory because…',
          options: ['brain states cannot be observed', 'the same mental state seems realisable in very different physical systems', 'identities are contingent', 'functionalism was proven first'],
          answer: 1,
          explain: 'If octopus, silicon and human pains share nothing physical, pain cannot be identical to one physical state type.',
        },
        {
          q: 'The "hard problem" of consciousness is…',
          options: ['explaining memory retrieval', 'explaining why processing is accompanied by subjective experience at all', 'building a conscious robot', 'defining the word consciousness'],
          answer: 1,
          explain: 'Chalmers\' distinction: functions are hard but tractable; the existence of experience is the residue.',
        },
        {
          q: 'Searle\'s Chinese Room concludes that…',
          options: ['computers can never compute quickly', 'running the right program is not sufficient for understanding', 'Chinese is untranslatable', 'rooms can think'],
          answer: 1,
          explain: 'Syntax is not semantics: symbol manipulation, however fluent, lacks the aboutness of genuine understanding.',
        },
      ] },
    ],
  },
  {
    id: "hum-eastern-philosophy-systems",
    title: "Eastern Philosophy: The Great Systems",
    domain: "Humanities",
    field: "Philosophy",
    branch: "Mind & Existence",
    tier: "intermediate",
    concepts: [
      "Brahman and atman in the Upanishads",
      "Shankara's Advaita non-dualism",
      "The Buddha's argument against a self",
      "Nagarjuna and emptiness",
      "Confucian role ethics and rectified names",
      "Daoist wu wei and perspectivism",
    ],
    words: 1204,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Western philosophy is not the only tradition to have argued systematically about reality, self and knowledge. Between roughly 800 BCE and 500 CE, India and China produced systems of extraordinary rigor — debates over whether the self exists, what language can capture, and how to live, conducted through arguments rather than revelation. This lesson treats them as philosophy: claims defended with reasons. It focuses on metaphysics and argument; the practices and social history of the same traditions are covered in the lesson on Eastern religions.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "These systems are not museum pieces. Advaita's analysis of consciousness, Madhyamaka arguments against essences and Confucian role ethics are active participants in contemporary philosophy of mind, ethics and cognitive science — and they reopen questions you thought were settled, such as whether there is a self to be found at all.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The Upanishads (c. 800-200 BCE), dialogues appended to the Vedic ritual texts, ask what underlies world and self. Their central claim: Brahman, ultimate reality, is identical with atman, the innermost self — the formula tat tvam asi, you are that, spoken by the sage Uddalaka to his son Svetaketu in the Chandogya Upanishad. Yajnavalkya in the Brihadaranyaka Upanishad locates the self in consciousness itself, present through waking, dream and deep sleep, and teaches by subtraction: neti, neti — not this, not this.",
      },
      {
        kind: "para",
        text: "Shankara (eighth century CE) systematized this inheritance into Advaita Vedanta: reality is non-dual, and the appearance of many things is the work of ignorance, avidya. His argument is one of adequacy: a changing world can be experienced only against an unchanging witness of awareness, and that witness cannot itself become an object. Rivals inside Vedanta dissented — Ramanuja's eleventh-century Vishishtadvaita held that selves and world are real, though inseparable from God: a structured unity, not a featureless one.",
      },
      {
        kind: "para",
        text: "The Buddha (fifth century BCE) turned the analysis against the self. In the anatta doctrine a person is only five aggregates — body, feeling, perception, formations, consciousness — and none is a permanent owner. The argument runs from control and impermanence: anything genuinely self would be stable and obedient, and nothing observed is. The Milindapanha adds the chariot: no single part is the chariot, nor the parts apart from their arrangement — a person is a name for a process, not a substance hidden inside it. Nagarjuna (c. 150 CE) radicalized this into emptiness, sunyata: in the Mulamadhyamakakarika he argues that whatever arises dependently lacks intrinsic essence — emptiness means absence of independent existence, not a void.",
      },
      {
        kind: "para",
        text: "Confucian philosophy, from the Analects (fifth century BCE), is an ethics without a metaphysical self: what you are is constituted by your roles and relations. Its doctrine of the rectification of names, zhengming, is a logic of social reality — government fails when a father does not act as a father, a ruler as a ruler. Two heirs split on human nature: Mencius (372-289 BCE) argued we have inborn sprouts of compassion that ritual cultivation grows into virtue; Xunzi (c. 310-235 BCE) countered that nature is unruly and ritual is deliberate artifice — the debate that organized Chinese ethics for two millennia.",
      },
      {
        kind: "para",
        text: "The Daoist classics argue in the opposite direction. The Daodejing opens by surrendering language: a Dao that can be spoken is not the constant Dao, since naming carves what is intrinsically whole. Zhuangzi (fourth century BCE) dramatizes perspectivism — the butterfly dream asks what grounds your certainty of being a man who dreamed he was a butterfly rather than the reverse — and the butcher Cook Ding embodies wu wei: skill so aligned with the grain of things that effort disappears, a proto-analysis of expert coping.",
      },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: does the person have a soul — a permanent, independent self?",
        "Recall the framework: the Buddhist analysis of the five aggregates and the Milindapanha's chariot argument.",
        "Apply it: search each aggregate in turn — body, feeling, perception, formations, consciousness. None is permanent, none fully controllable, none findable apart from the process; the self cannot be located as a part, and apart from the parts there is no person left over, just as no chariot exists over and above its wheels and axle.",
        "State the result: 'I' names a dependently arisen process, not a substance. Nagarjuna would add that emptiness applies to the aggregates too — dissolving the substance-view without denying that conventions work; they simply do not point to essences.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Philosophy of mind: no-self arguments are engaged seriously in consciousness studies, including structured dialogues between neuroscientists and Buddhist scholars.",
        "Psychotherapy: mindfulness-based therapies secularize a practice whose philosophical rationale is exactly this de-centering of the narrative self.",
        "Ethics and organizations: Confucian role ethics challenges methodological individualism, reading identity as relational rather than pre-social.",
        "Cognitive science: wu wei informs accounts of flow and embodied skill, following Hubert Dreyfus's anti-representational reading of expertise.",
        "Logic: Madhyamaka's tetralemma — a claim, its negation, both, neither — is studied as a formal challenge to bivalent logic.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Do not file these as timeless wisdom rather than arguments — Shankara and Nagarjuna are as analytically demanding as any scholastic. Emptiness is not nothingness: denying essences is not denying tables. Advaita is one school of Vedanta, not Hindu philosophy as a whole, which also contains fierce dualists and theists. And Eastern philosophy is a surveyor's convenience — the Kyoto school in Japan and Islamic falsafa lie east of these systems and belong to none of them. Keep this lesson's arguments and the religions lesson's practices in view together: two lenses, not rivals.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "Brahman", def: "Ultimate reality in the Upanishads — the one existence and consciousness underlying plurality." },
        { term: "atman", def: "The innermost self; Upanishadic non-dualism identifies it with Brahman (tat tvam asi)." },
        { term: "anatta", def: "The Buddha's no-self doctrine: persons are processes of five aggregates, not owners of a soul." },
        { term: "sunyata", def: "Nagarjuna's emptiness — absence of intrinsic, independent existence; things arise dependently." },
        { term: "zhengming", def: "Confucian rectification of names: social order requires that names and conduct match." },
        { term: "wu wei", def: "Daoist unforced action: effective doing aligned with how things naturally move." },
        { term: "sprouts", def: "Mencius's innate tendencies — compassion, shame, deference, discernment — that cultivation grows into virtue." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "The Upanishadic formula tat tvam asi asserts…",
          options: ["the self is an illusion to be destroyed", "the innermost self and ultimate reality are identical", "ritual is the highest duty", "names must match conduct"],
          answer: 1,
          explain: "You are that: atman and Brahman are one — the thesis Shankara's Advaita systematized.",
        },
        {
          q: "Nagarjuna's emptiness claims that…",
          options: ["nothing exists at all", "nothing has intrinsic, independent existence because all things arise dependently", "only Brahman exists", "ritual surpasses argument"],
          answer: 1,
          explain: "Emptiness is dependent origination read metaphysically: no essences, but not a void — conventions remain functional.",
        },
        {
          q: "Mencius and Xunzi disagreed about…",
          options: ["whether the Dao can be named", "whether human nature is good and cultivated, or unruly and civilized by ritual", "whether Brahman is personal", "whether the self survives death"],
          answer: 1,
          explain: "Mencius taught inborn sprouts of goodness; Xunzi taught that ritual artifice disciplines a recalcitrant nature.",
        },
        {
          q: "Cook Ding in the Zhuangzi illustrates…",
          options: ["the value of rectified names", "wu wei — skill so absorbed it follows the grain of things without strain", "the chariot argument", "compassion as a sprout"],
          answer: 1,
          explain: "The butcher's blade never dulls because he cuts through the joints — effortless, responsive mastery.",
        },
      ] },
    ],
  },
  {
    id: "hum-existentialism-freedom-meaning",
    title: "Existentialism: Freedom, Anxiety, Meaning",
    domain: "Humanities",
    field: "Philosophy",
    branch: "Mind & Existence",
    tier: "intermediate",
    concepts: [
      "Kierkegaard's leap and the stages of life",
      "Anxiety as the dizziness of freedom",
      "Heidegger's being-toward-death and the They",
      "Sartre: existence precedes essence",
      "Bad faith and the waiter",
      "Camus and the absurd",
      "Beauvoir's ethics of ambiguity",
    ],
    words: 1173,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "In 1882 Friedrich Nietzsche put a startling speech into a madman's mouth: God is dead, and we have killed him — meaning that the old foundations of value had collapsed, and humanity now had to answer for itself. Existentialism is the philosophy that took the obituary seriously: if no divine or rational order underwrites human purposes, what grounds meaning, morality and identity? Its answer, worked out from Kierkegaard to Beauvoir, was to stop evading that freedom — and it produced some of the most vivid, readable philosophy ever written.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Anxiety, choice-paralysis and the hunt for authentic work are not, on this analysis, modern pathologies to be medicated away — they are structural features of being the kind of creature that chooses what to become. Existentialism gives that condition a vocabulary, and its concepts now run through psychotherapy, literature and everyday speech.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Soren Kierkegaard (1813-1855), the movement's forerunner, wrote against Hegel's system: existence is lived by this individual, not subsumed in a dialectic. Fear and Trembling (1843) retells the binding of Isaac: Abraham's faith cannot be justified by universal ethics — the teleological suspension of the ethical — and must be leapt into, not argued through. The Concept of Anxiety (1844) defines anxiety as the dizziness of freedom: unlike fear, it has no object; it is the awareness that you could become anything, including the wrong thing. His ladder of stages — aesthetic, ethical, religious — measures depth of commitment, not proof.",
      },
      {
        kind: "para",
        text: "Martin Heidegger's Being and Time (1927) supplied the ontology. Dasein, being-there, names the human kind of being: we do not merely exist but have our being to achieve, thrown into a world and a past we never chose. Much of life is lived as das Man, the They — the anonymous public self that does what one does. Authenticity becomes possible when anxiety unhouses the familiar, and being-toward-death — owning your finitude — individualizes: no one can die your death for you.",
      },
      {
        kind: "para",
        text: "Jean-Paul Sartre supplied the slogan: existence precedes essence (Existentialism Is a Humanism, 1945). A knife is made to a design; a human first exists, then defines itself through choices. Being and Nothingness (1943) grounds this in consciousness as a nothingness that negates every fact — so we are, in his notorious phrase, condemned to be free. Bad faith, mauvaise foi, is the evasion: his waiter who plays at being a waiter, all mechanical flourish, flees freedom by dissolving into a role. Even refusing to choose is a choice.",
      },
      {
        kind: "para",
        text: "Albert Camus rejected the label but perfected the mood. The Myth of Sisyphus (1942) opens by declaring there is but one truly serious philosophical problem, suicide: judging whether life is worth living. The absurd is the confrontation between our demand for meaning and the world's silence. Camus rejects both suicide and philosophical suicide — the leap to faith — and prescribes revolt: live without appeal, in lucid defiance. One must imagine Sisyphus happy; The Plague (1947) adds the social form, solidarity without consolation.",
      },
      {
        kind: "para",
        text: "Simone de Beauvoir supplied the ethics the movement was accused of lacking. The Ethics of Ambiguity (1947) accepts that values are not given, then argues that this ambiguity obligates: freedom succeeds only by willing the freedom of others — a serious correction to Sartrean subjectivism. The Second Sex (1949) applied the analysis to gender: one is not born, but rather becomes, a woman — femininity is a becoming, imposed and internalized, with woman constructed as the Other. Existentialism thereby became an instrument of liberation, not just diagnosis.",
      },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: a graduate must choose between a secure family-approved career and a risky vocation, and keeps insisting there is no real choice.",
        "Diagnose the bad faith: 'I have no option' and 'this is just who I am' treat existence as essence — a fixed nature that forbids rather than enables.",
        "Apply the lenses: Kierkegaard asks what you can commit to with passion, not what you can prove; Heidegger's test is being-toward-death — which project could you own from your deathbed rather than from the They's salary rankings; Beauvoir adds whose freedom each path serves, including the freedom of those pressuring you.",
        "State the result: the anxiety is not a malfunction but the phenomenology of freedom — evidence the choice is real and yours. The existentialist prescribes no particular option, only a changed relation to choosing: own the project, and keep owning it.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Psychotherapy: existential and humanistic therapies — Irvin Yalom's death, freedom, isolation and meaninglessness; Viktor Frankl's logotherapy — treat meaning-loss as the presenting problem.",
        "End-of-life care: dignity therapy asks patients to narrate what their life stood for, an explicitly existential intervention.",
        "Management: purpose-and-authenticity debates in the workplace inherit, often unknowingly, Sartre's bad faith and Heidegger's They.",
        "Media literacy: authenticity as marketed by brands is a study in manufactured individuality — the They selling you your escape from it.",
        "Education: advising that treats undecidedness as failure mistakes the dizziness of freedom for a disorder.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Existentialism is not despair-merchandising: Sartre's 1945 lecture is titled a humanism, and Beauvoir's whole project is solidarity. Do not file Heidegger as a simple existentialist — he rejected the label, and his 1933 Nazi party membership remains the standing case study in philosophy's collision with biography. Kierkegaard's leap is not irrationalism but the admission that some commitments exceed evidence. And 'existence precedes essence' concerns humans, not a general metaphysics to apply to artifacts or algorithms.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "angst", def: "Objectless dread disclosing possibility — Kierkegaard's dizziness of freedom." },
        { term: "being-toward-death", def: "Heidegger's term for owning one's finitude, which individualizes existence." },
        { term: "bad faith", def: "Sartre's self-deception: fleeing freedom by pretending to be a fixed thing or role." },
        { term: "the absurd", def: "Camus's name for the gap between the demand for meaning and the world's silence." },
        { term: "existence precedes essence", def: "Sartre's slogan: humans first exist, then define themselves through choices." },
        { term: "authenticity", def: "Owning one's possibilities as one's own, rather than drifting as the They." },
        { term: "the Other", def: "The other consciousness through which one appears as an object — central to Beauvoir's analysis of woman." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "Kierkegaard called anxiety…",
          options: ["fear of death", "the dizziness of freedom", "a symptom of illness", "the hatred of the They"],
          answer: 1,
          explain: "Anxiety has no object: it is the awareness that any of one's possibilities might be realized.",
        },
        {
          q: "Sartre's waiter example illustrates…",
          options: ["service as a virtue", "bad faith — playing at being a thing to evade freedom", "the absurd", "being-toward-death"],
          answer: 1,
          explain: "The waiter's over-fluid routine is a performance of role-as-destiny: freedom dodged by mimicry of mechanism.",
        },
        {
          q: "The Myth of Sisyphus opens by declaring…",
          options: ["meaning is guaranteed by God", "suicide is the one truly serious philosophical problem", "hell is other people", "virtue is knowledge"],
          answer: 1,
          explain: "Judging whether life is worth living precedes all other questions for Camus.",
        },
        {
          q: "Beauvoir's 'one is not born, but rather becomes, a woman' argues that…",
          options: ["biology is destiny", "femininity is an imposed and internalized project, not an essence", "gender is chosen in a single leap", "the absurd explains oppression"],
          answer: 1,
          explain: "The Second Sex analyzes woman as the Other — a social construction lived as nature, and therefore contestable.",
        },
      ] },
    ],
  },
]

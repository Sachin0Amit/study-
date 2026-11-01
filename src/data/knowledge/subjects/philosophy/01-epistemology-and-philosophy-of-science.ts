/**
 * Knowledge Universe — Philosophy — Chapter 01: Epistemology & Philosophy of Science
 * 3 lessons · ~3,967 words (includes the 2026-11-01 salvage increment)
 * field: Philosophy
 * legacy sources: humanities.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Epistemology, Knowledge & Science]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 phil-epistemology — Epistemology: What Can We Know?
 *   01.2 hum-philosophy-of-science — Philosophy of Science: How We Know What We Know
 *   01.3 phil-pramana-means-of-knowledge — Pramanas: The Means of Knowledge in Indian Logic (~1,634w, salvaged)
 */
import type { KnowledgeTopic } from '../../types'

export const philosophyCh01: KnowledgeTopic[] = [
  {
    id: 'phil-epistemology',
    title: 'Epistemology: What Can We Know?',
    domain: 'Humanities',
    field: 'Philosophy',
    branch: 'Epistemology',
    tier: 'intermediate',
    concepts: [
      'Knowledge as justified true belief',
      'Gettier\'s counterexamples',
      'Rationalism: reason as the source',
      'Empiricism: experience as the source',
      'Kant\'s two-source synthesis',
      'Justification after Gettier',
    ],
    words: 1167,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Philosophy\'s second-oldest question, after what there is, is how we know it. Epistemology — from episteme, knowledge — asks what knowledge is, where it comes from and how much of it we can have. For two millennia the standard answer was tidy: knowledge is justified true belief. Then in 1963 a three-page paper demolished the tidy answer, and the discipline has been rebuilding ever since. This lesson runs the main line from Plato\'s definition through the rationalist-empiricist wars to Kant\'s synthesis and today\'s debates about reliability, testimony and doubt.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every practice that claims to produce knowledge — science, courts, journalism, medicine, machine learning — runs on an implicit epistemology: rules for what counts as evidence, how much justification is enough and who is entitled to testify. When those rules fail, the failure is epistemological: the cold-case conviction built on a lab\'s false positive, the study that replicated on nobody. Studying the theory makes the practice visible.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Plato\'s dialogues entertain and reject several definitions of knowledge, but the analysis that stuck is the triad: to know that p, you must believe p, p must be true, and you must be justified in believing it. A lucky guess hits truth without knowledge; a well-evidenced falsehood is belief without truth; a prejudice is belief without justification. Each condition excludes something, and for twenty centuries the trio looked jointly sufficient.',
      },
      {
        kind: 'para',
        text: 'In 1963 Edmund Gettier published, in the journal Analysis, two terse counterexamples. In the classic case, Smith has strong evidence that Jones owns a Ford and will get the job; he infers "the man who will get the job owns a Ford". Jones does not get the job — Smith does — and Smith, by coincidence, happens to own a Ford. The belief is true and justified, yet the justification is disconnected from what makes it true. Nobody wants to call it knowledge; the literature has been proposing fourth conditions ever since.',
      },
      {
        kind: 'para',
        text: 'The rationalists — Descartes, Spinoza, Leibniz — held that the mind\'s own resources supply substantive knowledge. Descartes\' Meditations (1641) doubted everything doubtable until it hit bedrock: cogito, ergo sum, the one belief that cannot be false while believed. From such certainties, plus proofs of a non-deceiving God, rationalism hoped to derive the world\'s basic structure — extension, motion, mathematics — a priori, before and independent of experience.',
      },
      {
        kind: 'para',
        text: 'The empiricists answered that nothing is in the intellect that was not first in the senses. Locke\'s Essay Concerning Human Understanding (1690) modelled the mind as white paper written on by experience; Hume, sharpest of the three, pushed empiricism to its crisis: observation gives us habits, not necessities, so even causation and induction — the machinery of science — lack rational foundation. His Enquiry Concerning Human Understanding (1748) is still the sceptic\'s manual.',
      },
      {
        kind: 'para',
        text: 'Kant reported that Hume woke him from "dogmatic slumber". The Critique of Pure Reason (1781) split the difference: experience supplies the matter of knowledge, but the mind supplies the form — space, time and causality are the a priori frame through which any experience must arrive. Synthetic a priori truths, like mathematics, hold necessarily of experience without deriving from it. The rebuild preserved science while denying that reason can know things as they are in themselves.',
      },
      {
        kind: 'para',
        text: 'Twentieth-century epistemology multiplied strategies. Reliabilism (Alvin Goldman) counts a belief as knowledge when produced by a reliable process, whatever the believer can inspect; internalists insist justification must be accessible from inside. The regress argument — what justifies the justifiers? — bottoms out in Agrippa\'s trilemma: infinite regress, circle, or foundations. Testimony, once an embarrassment, is now central: most of what anyone knows — history, geography, physics — is taken on other people\'s word, structured by trust.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: test a belief against the justified-true-belief analysis, then show why Gettier breaks it.',
        'Recall the three conditions — belief, truth, justification — and Gettier\'s addition: the justification must be appropriately connected to the truth.',
        'Apply it: a farmer reads a reliable almanac forecasting early rain, believes it, and the rain does come early — because of a stalled storm system the almanac knew nothing about. Justified, believed, true; but the forecast\'s method is not why it rained.',
        'State the result: by the classical criteria the farmer "knows"; by any post-Gettier standard he does not — exactly the kind of case the missing fourth condition is meant to exclude.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Machine learning: classifiers are judged by reliability, applying reliabilist thinking to artificial knowers.',
        'Law: standards of proof, from "beyond reasonable doubt" to "preponderance of evidence", are institutional thresholds of justification.',
        'Journalism: source verification and correction policies are applied epistemology under deadline.',
        'Science: peer review and replication exist because testimony must be structured before it can carry knowledge.',
        'Medicine: evidence hierarchies, from expert opinion to randomised trials, are a working theory of justification.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not confuse knowledge with certainty — the first is a status requiring truth, the second a feeling. Gettier cases refute the three-condition analysis, not the concept of knowledge. Keep rationalism and empiricism as ideal types: Kant, Hume and Descartes each cross the lines. And resist treating scepticism as an enemy to be beaten: brains in vats and dreaming arguments are diagnostic tools, stress-testing what any theory of knowledge must assume.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'justified true belief', def: 'The classical analysis: knowledge requires belief, truth and adequate justification.' },
        { term: 'Gettier problem', def: 'Cases where a belief is justified and true yet not knowledge, because justification is unconnected to the truth-maker.' },
        { term: 'a priori / a posteriori', def: 'Knowledge independent of experience, versus knowledge derived from it.' },
        { term: 'tabula rasa', def: 'Locke\'s "white paper" model of the mind before experience writes on it.' },
        { term: 'synthetic a priori', def: 'Kant\'s category: necessary truths that extend knowledge, such as mathematics and the framework of experience.' },
        { term: 'reliabilism', def: 'The view that a belief counts as knowledge when formed by a reliable process, whether or not the believer can cite it.' },
        { term: 'Agrippa\'s trilemma', def: 'Justification chains must end in dogmatic foundations, circularity or infinite regress.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: 'The classical analysis defines knowledge as…',
          options: ['certain belief', 'justified true belief', 'useful belief', 'universally agreed belief'],
          answer: 1,
          explain: 'Belief, truth and justification — each excluding guesses, falsehoods and mere conviction.',
        },
        {
          q: 'Gettier cases show that…',
          options: ['knowledge is impossible', 'justified true belief is not sufficient for knowledge', 'truth is relative', 'justification must always be internal'],
          answer: 1,
          explain: 'A belief can be justified and true by luck, the justification unconnected to what makes it true — so a fourth condition is needed.',
        },
        {
          q: 'Kant\'s answer to Hume holds that…',
          options: ['all knowledge comes from experience', 'the mind supplies the a priori forms through which experience arrives', 'causation is an illusion', 'reason alone knows things in themselves'],
          answer: 1,
          explain: 'Space, time and causality are the mind\'s contribution — which is why science is possible and metaphysics is fenced in.',
        },
        {
          q: 'Agrippa\'s trilemma says chains of justification must end in…',
          options: ['self-evident foundations, circularity or infinite regress', 'God', 'empirical data', 'consensus'],
          answer: 0,
          explain: 'Every attempt to justify the justifiers runs into one of the three dead ends — hence competing theories of where to stop.',
        },
      ] },
    ],
  },
  {
    id: "hum-philosophy-of-science",
    title: "Philosophy of Science: How We Know What We Know",
    domain: "Humanities",
    field: "Philosophy",
    branch: "Knowledge & Science",
    tier: "advanced",
    concepts: [
      "Hume's problem of induction",
      "Popper's falsifiability demarcation",
      "Kuhn's paradigms and revolutions",
      "Lakatos's research programmes",
      "The Bayesian turn in confirmation",
      "Realism versus anti-realism",
    ],
    words: 1166,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Science is our civilization's great knowledge success story, yet philosophers keep asking awkward questions about it. What distinguishes science from non-science? Can any amount of evidence prove a general law? Do theories describe reality itself, or merely save the appearances? From Hume's skepticism to today's Bayesian methods, the philosophy of science examines how we know what we know — and why that question is harder than it looks.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "The demarcation question decides courtrooms (what counts as forensic science), policy (which climate and medical evidence deserve weight) and funding (is string theory science?). The logic of confirmation is now practical: machine learning, replication crises and evidence hierarchies in medicine are philosophy of science happening to you.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "David Hume's problem of induction (Treatise 1739; Enquiry 1748) is the founding wound. All empirical inference generalizes from observed to unobserved — the sun has risen every day so far, therefore tomorrow. But that step presupposes the uniformity of nature, which can be justified neither logically (its negation is perfectly conceivable) nor empirically (appealing to induction's past success is circular). Nelson Goodman's new riddle of induction (1955) sharpened the wound: which regularities in the data deserve projection onto the future is underdetermined by the data.",
      },
      {
        kind: "para",
        text: "Karl Popper's The Logic of Scientific Discovery (1934; English 1959) responded by relocating science's virtue. Theories can never be verified by finite confirmation — no run of white swans proves all swans white — but one counterexample falsifies. Falsifiability thus becomes the demarcation criterion: Einstein's relativity risked refutation, whereas Popper argued psychoanalysis and Marxism could accommodate any outcome. Science proceeds by conjectures and refutations — bold hypotheses, severe tests, no induction required. Critics raised the Duhem-Quine problem: tests confront bundles of theory plus auxiliary assumptions, so blame for failure is never automatic.",
      },
      {
        kind: "para",
        text: "Thomas Kuhn's The Structure of Scientific Revolutions (1962) replied that falsification describes science only in crisis. Normal science works inside a paradigm — theory, methods and exemplars such as Ptolemaic astronomy or post-Lavoisier chemistry. Anomalies accumulate, crisis follows, revolution replaces the paradigm along with its standards of success: incommensurability. The book became one of the most cited works of twentieth-century scholarship, and the relativist reading — truth changes with paradigms — provoked decades of debate Kuhn himself resisted.",
      },
      {
        kind: "para",
        text: "Imre Lakatos (1970) split the difference: science runs in research programmes with a hard core of commitments (Newton's laws) protected by a belt of auxiliary hypotheses. A programme is progressive while it predicts novel facts, degenerating once it merely patches failures ad hoc — Popperian falsification, he said, is rational reconstruction after the fact. Paul Feyerabend's Against Method (1975) then dissolved the project: no single method has governed science's actual history — anything goes.",
      },
      {
        kind: "para",
        text: "The Bayesian turn reframed confirmation as probability. Bayes's theorem: a hypothesis's posterior probability is proportional to its likelihood times its prior, so evidence confirms a theory when the evidence is more probable given the theory than otherwise. This elegantly handles gradation and competing hypotheses, and it powers modern statistics and machine learning. The cost is the prior — where initial probabilities come from remains disputed between subjectivists and objectivists.",
      },
      {
        kind: "para",
        text: "Does successful theory get reality right? Realists urge the no-miracles argument (Hilary Putnam): science's empirical success would be miraculous unless theories were at least approximately true. Bas van Fraassen's constructive empiricism (The Scientific Image, 1980) replies that science aims only at empirical adequacy — saving the observable phenomena — so belief in unobservables is optional. Ian Hacking's entity realism flips the axis: if you can spray electrons and build instruments that work, they are real. Underdetermination — rival theories fitting all possible data — keeps the dispute alive.",
      },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: what made the 1919 eclipse expedition a model case of scientific testing?",
        "The case: Einstein's general relativity (1915) predicted starlight bends twice as much near the sun as Newtonian gravity implied; Arthur Eddington's expeditions to Sobral and Principe measured star positions during the 1919 solar eclipse.",
        "The Popperian reading: a bold, risky prediction — the observation could have refuted the theory outright, which is why the confirmation mattered.",
        "The Bayesian reading: the measured deflection was far likelier under general relativity than under Newtonian gravity, so the posterior shifted sharply — a likelihood ratio in the wild.",
        "The residual question: is curved spacetime really out there, or an empirically adequate instrument? The eclipse cannot decide — exactly van Fraassen's point.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Evidence-based medicine: trial hierarchies encode Popperian severity; p-hacking and publication bias are induction problems restated.",
        "Machine learning: overfitting is ad hoc accommodation, and cross-validation is a severity test — model evaluation shares the replication crisis's logic.",
        "Climate science: model ensembles and out-of-skill tests are debated in falsificationist and Bayesian terms.",
        "Courts: Daubert-style standards for expert evidence are applied demarcation criteria.",
        "Research policy: whether string theory and multiverse arguments are science is a live demarcation dispute.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Falsifiability is a demarcation criterion, not a rule scientists mechanically obey — and it is misused as a club against young fields. Paradigms do not license 'truth is relative': Kuhn insisted a resistant world constrains theory change. The problem of induction is not solved by probability — priors can transmit the same circularity. Anti-realism is not denial of observations; it is restraint about unobservables. And no one here 'won': contemporary philosophy of science is deliberately pluralist.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "problem of induction", def: "Hume's finding that generalizing from past to future cannot be justified without circularity." },
        { term: "falsifiability", def: "Popper's demarcation: a theory is scientific only if some possible observation could refute it." },
        { term: "paradigm", def: "Kuhn's constellation of theory, methods and exemplars that structures normal science." },
        { term: "incommensurability", def: "The lack of a common measure between rival paradigms, including their standards of success." },
        { term: "research programme", def: "Lakatos's unit of appraisal: a protected hard core, an auxiliary belt, a record of novel predictions." },
        { term: "Bayes's theorem", def: "The rule for updating probability on evidence: posterior proportional to likelihood times prior." },
        { term: "no-miracles argument", def: "The realist claim that science's success would be miraculous unless theories are approximately true." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "Hume's problem of induction is that…",
          options: ["deduction is unreliable", "inferring the future from the past presupposes the uniformity of nature, which cannot be justified without circularity", "science uses mathematics", "theories cannot be translated"],
          answer: 1,
          explain: "Neither logic nor experience validates the extrapolation, and appeals to induction's past success are circular.",
        },
        {
          q: "Popper's demarcation criterion holds that a theory is scientific if…",
          options: ["it is confirmed by many observations", "some possible observation could refute it", "it is useful for engineering", "a paradigm accepts it"],
          answer: 1,
          explain: "No finite data verifies a universal claim, but a counterexample can falsify — hence conjectures and refutations.",
        },
        {
          q: "For Kuhn, normal science is…",
          options: ["permanent revolution", "puzzle-solving within a paradigm's rules and exemplars", "the period before mathematics", "degenerate problem-shifting"],
          answer: 1,
          explain: "Normal science articulates and extends the paradigm; accumulating anomalies and crisis interrupt it.",
        },
        {
          q: "Van Fraassen's constructive empiricism holds that science aims at…",
          options: ["metaphysical truth about unobservables", "empirical adequacy — saving the observable phenomena", "Kuhnian revolutions", "maximizing priors"],
          answer: 1,
          explain: "Acceptance involves belief only in empirical adequacy; unobservables are not its target.",
        },
      ] },
    ],
  },
  // Salvaged 2026-11-01 from the diverged local line (pass x62-pramana-pass, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.
  {
    id: 'phil-pramana-means-of-knowledge',
    title: 'Pramanas: The Means of Knowledge in Indian Logic',
    domain: 'Humanities',
    field: 'Philosophy',
    branch: 'Epistemology',
    tier: 'intermediate',
    concepts: [
      'Pramana, prameya, prama: the vocabulary of Indian epistemology',
      'The four classical pramanas: perception, inference, comparison, testimony',
      'Postulation (arthapatti) and non-apprehension (anupalabdhi): the disputed fifth and sixth',
      'Who accepts how many: the school-by-school count',
      'The five-membered inference (avayava) of Nyaya',
      'Vyapti: the invariable concomitance that powers inference',
      'The Buddhist reduction: two pramanas, two realities',
      'Carvaka: the one-pramana sceptics',
    ],
    words: 1634,
    readMins: 8,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Western epistemology asks what knowledge is and famously struggled to define it — the justified-true-belief formula and its Gettier cracks are the Philosophy book\u2019s next lesson but one. Classical Indian philosophy asked a different first question, and asked it earlier: through what instruments does knowledge arrive at all? The answer framework is the theory of pramanas — literally "means of knowledge" or "sources of valid cognition". Where a Western course organises around scepticism and justification, an Indian course organises around a census: how many reliable channels connect mind to world, and what exactly does each one deliver? Every major school of Indian thought declared its count, and the counts became identity badges: to accept or reject a pramana was to accept or reject a whole picture of reality.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The pramana framework is the operating system of two thousand years of Indian argument — court debate (katha), disputation (vada), and the commentarial tradition all run on it. For the exam syllabus that lists this topic, the school-by-school pramana table and the five-membered inference are the two most-tested items.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The vocabulary first' },
      {
        kind: 'terms',
        items: [
          { term: 'Pramana', def: 'The means or instrument of valid knowledge — the channel, not the content.' },
          { term: 'Prameya', def: 'The object of valid knowledge — that which is known.' },
          { term: 'Prama', def: 'Valid knowledge itself — the true cognition produced by a pramana.' },
          { term: 'Aprama', def: 'Invalid cognition — error, doubt, or misapprehension, each with its own analysis.' },
        ],
      },
      {
        kind: 'para',
        text: 'Keep the grammar straight and half the confusion dissolves: perception is a pramana; the pot you see is a prameya; your seeing of the pot is prama. When a school "accepts perception and inference only", it is making a claim about instruments — that testimony, say, reduces to one of the other two rather than being an independent channel.',
      },
      { kind: 'heading', text: 'The six candidate pramanas' },
      {
        kind: 'para',
        text: 'The classical list, consolidated by the Nyaya school from Gautama\u2019s Nyaya-sutra onward, presents up to six candidates. Every school then prunes. Perception (pratyaksha) is knowledge arising from the contact of sense faculty and object — sight of the pot, touch of the fire. Inference (anumana) is knowledge that follows from a mark: smoke on the hill, fire inferred. Comparison (upamana) is knowing a thing by being told it resembles a known thing — the person who learns "a gavaya is like a cow" and then recognises the wild animal. Testimony (shabda) is the word of a trustworthy source, spoken or scriptural. Postulation (arthapatti) is the presupposition required to make an observed fact coherent: the fat man who does not eat by day must eat by night — the observed facts force an unseen explanation. Non-apprehension (anupalabdhi) is knowledge of an absence through the absence of perception: the pot is not on the mat because, being visible and not seen there, its non-perception is itself informative.',
      },
      {
        kind: 'list',
        ordered: false,
        items: [
          'Pratyaksha — perception: faculty–object contact.',
          'Anumana — inference: knowledge "after measurement", from a mark.',
          'Upamana — comparison: knowledge via told resemblance.',
          'Shabda — testimony: reliable word.',
          'Arthapatti — postulation: the unseen assumption that makes the seen coherent.',
          'Anupalabdhi — non-apprehension: absence known through failed perception.',
        ],
      },
      { kind: 'heading', text: 'The school-by-school count' },
      {
        kind: 'para',
        text: 'The counts are the classic examination grid. Carvaka, the materialist sceptics, accepted perception alone — inference, they argued, depends on universals and invariable connections that no one has ever perceived, so the syllogism is a confidence trick. The Buddhist schools (following Dignaga and Dharmakirti) accepted perception and inference, and paired the two with a metaphysics: perception reaches the particular (svalakshana), inference reaches the general concept (samanyalakshana); a pramana per reality. Nyaya and Vaisesika accepted four — perception, inference, comparison, testimony — treating postulation and non-apprehension as reducible to inference and perception respectively. Mimamsa, the ritual-hermeneutic school, is the maximalist: Kumarila\u2019s faction defended all six, insisting postulation and non-apprehension do independent work that the other four cannot do. Vedanta (Advaita) follows Mimamsa in accepting six. Samkhya accepts three — perception, inference, testimony — as does Yoga with its distinctive trusted-source rider. The joint is where the philosophy lives: every reduction claim ("testimony is just inference about the speaker\u2019s reliability") provoked a counter-treatise, and the pramana literature is that argument, institution by institution.',
      },
      {
        kind: 'formula',
        name: 'The pramana census (classical positions)',
        latex: '\\text{Carvaka } 1 \\;<\\; \\text{Buddhist } 2 \\;<\\; \\text{Samkhya/Yoga } 3 \\;<\\; \\text{Nyaya/Vaisesika } 4 \\;<\\; \\text{Mimamsa/Vedanta } 6',
        meaning: 'Six candidate pramanas, five canonical counts: each school\u2019s number encodes its theory of what channels genuinely connect mind to world.',
      },
      { kind: 'heading', text: 'Anatomy of an inference: the five members' },
      {
        kind: 'para',
        text: 'Nyaya\u2019s contribution that travelled furthest is the explicit statement form of inference, the five-membered avayava. To prove "the hill has fire" from its smoke, the full Nyaya statement runs: (1) the thesis (pratijna) — "the hill has fire"; (2) the reason (hetu) — "for it has smoke"; (3) the universal rule (udaharana) — "whatever has smoke has fire, like a kitchen"; (4) the application (upanaya) — "this hill has smoke"; (5) the conclusion (nigamana) — "therefore this hill has fire". The Western categorical syllogism, taught with its Venn-diagram test in the reasoning lesson, compresses members 3–5 into its minor premise and conclusion; what the Indian form keeps explicit is the example-with-instance (the kitchen) — the concrete witness that grounds the universal rule. Later Navya-Nyaya, from Gangesa\u2019s Tattvacintamani on, industrialised the theory: the reason must be free of the three formal faults, the rule must be a genuine vyapti — an invariable concomitance, smoke-where-fire, certified by repeated observation and the failure of counterexamples — and the inference fails if the mark occurs where the probandum is absent.',
      },
      {
        kind: 'example',
        title: 'State an inference in the five-membered form',
        steps: [
          'Pratijna (thesis): "The hill has fire."',
          'Hetu (reason): "Because it has smoke."',
          'Udaharana (rule + example): "Wherever there is smoke, there is fire — as in a kitchen."',
          'Upanaya (application): "This hill has smoke (of that kind)."',
          'Nigamana (conclusion): "Therefore this hill has fire."',
        ],
      },
      {
        kind: 'para',
        text: 'The design is dialectical, not just deductive: members 1 and 2 stake the claim, member 3 shoulders the burden of proof with an instance anyone can check, member 4 ties the instance-rule to the case at hand, and member 5 registers agreement. In formal debate (vada) a respondent could attack member 3 — deny the vyapti, or produce a place with smoke and no fire (a red-hot iron ball\u2019s heated air, say) — and the debate turned on exactly the moves a modern logician would call challenging the major premise for a hidden defeater.',
      },
      { kind: 'heading', text: 'The philosophical engine room' },
      {
        kind: 'para',
        text: 'Three debates define the literature. First, the reduction wars: is testimony its own pramana (Mimamsa: words from a reliable speaker generate knowledge directly) or disguised inference (a Carvaka-adjacent line Nyaya rejects — you would have to verify the speaker\u2019s reliability before every sentence, which nobody does and children could not do)? Second, the perception wars: Buddhists built a two-level theory — indeterminate perception of pure particulars, then determined judgement that already mixes in concepts — so that "the pot" as a recognisable, nameable item is already construction; Nyaya answered with a compound theory of perception that includes classification from the start. Third, the absence wars: is non-apprehension an independent instrument (you know the absent pot precisely because a seeable thing is not seen), or is absence just another perceivable qualified object? Kumarila\u2019s examples — the fat man who must eat by night, the missing pot on the mat — remain the standard illustrations precisely because they are hard to reduce away.',
      },
      {
        kind: 'callout',
        title: 'The bridge to the Western table',
        text: 'Set the pramana question beside the Western one and the systems light each other up: rationalism and empiricism are arguing about pramana priority among sources the Indian schools had already separated; the Gettier problem presupposes a definition of prama that Indian theorists stated as the requirement that valid cognition be uncontradicted (abhadhita) and novel (anadhigata); and vyapti is the classical ancestor of what modern logic calls a strict implication or lawlike regularity.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Common traps' },
      {
        kind: 'list',
        ordered: false,
        items: [
          'Confusing pramana (instrument) with prama (the resulting knowledge) — the classic one-mark loss.',
          'Assigning six pramanas to Nyaya — Nyaya\u2019s canonical count is four; the maximalist six belongs to Mimamsa and Vedanta.',
          'Translating anumana as "guessing" or "intuition" — it is strictly inference from a mark through a rule.',
          'Forgetting arthapatti\u2019s signature structure: the observed facts must be otherwise inexplicable (the day-fasting fat man).',
          'Stating the five members without the example (kitchen) — the udaharana with its instance is what distinguishes the Nyaya form from the bare Western syllogism.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A school accepts perception and inference as the only pramanas, pairing perception with particulars and inference with generalities. Which school is it?',
            options: ['Nyaya', 'Buddhist (Dignaga–Dharmakirti tradition)', 'Mimamsa', 'Carvaka'],
            answer: 1,
            explain: 'The Buddhist two-pramana reduction ties each pramana to one kind of reality: perception reaches the particular (svalakshana), inference the general (samanyalakshana). Nyaya accepts four, Mimamsa up to six, Carvaka only perception.',
          },
          {
            q: 'You know a visibly fat man does not eat during the day, and conclude he eats at night. Which pramana is at work?',
            options: ['Anumana (inference)', 'Upamana (comparison)', 'Arthapatti (postulation)', 'Anupalabdhi (non-apprehension)'],
            answer: 2,
            explain: 'This is Kumarila\u2019s stock example of arthapatti: the observed facts (fatness plus day-fasting) cannot be made coherent without presupposing the unseen fact (night eating). No mark-to-rule inference produces it; the data force it.',
          },
          {
            q: 'In the five-membered Nyaya proof that the hill has fire, which member states "whatever has smoke has fire, like a kitchen"?',
            options: ['Pratijna', 'Hetu', 'Udaharana', 'Nigamana'],
            answer: 2,
            explain: 'The udaharana (universal rule with example) is member 3 — the burden-bearing step that grounds the vyapti with a checkable instance, which is exactly what distinguishes the Nyaya form from the compressed Western syllogism.',
          },
          {
            q: 'The Carvaka rejection of inference argues that:',
            options: [
              'inference is valid but too slow to be a pramana',
              'the invariable concomitances inference needs are themselves never perceived',
              'perception is fallible, so only inference is trustworthy',
              'testimony is more fundamental than either perception or inference',
            ],
            answer: 1,
            explain: 'Carvaka accepts only pratyaksha and attacks anumana at its foundation: a vyapti (all-smoke-has-fire) is a universal connection that could only be certified by perceiving every instance — which no one has. Without perceivable universals, the syllogism borrows from what it cannot deliver.',
          },
        ],
      },
    ],
  },

]

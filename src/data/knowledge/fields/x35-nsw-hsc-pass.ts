import type { KnowledgeTopic } from '../types'

/** Expansion pass X35 (2026-10-25): the NSW HSC onboarding pass. With the
 *  audit at 2530/2530 after X34, this pass grew the curated-exam registry:
 *  a new australia.ts region file added the NSW Higher School Certificate
 *  (six highest-enrolment ATAR courses, curated focus-area by focus-area
 *  from the official NESA syllabus pages, read this pass). The new exam
 *  mapped 77/83 = 93% immediately; the six unmapped topics were resolved
 *  honestly:
 *  1. Two new English-craft lessons below own the three English Advanced
 *     topics (one lesson honestly spans the two response topics, the X33
 *     one-lesson-two-units pattern). Zero overlap: lang-literary-devices
 *     owns the device TAXONOMY (metaphor, irony — referenced, not
 *     re-taught); eng-literary-narrative-passages owns comprehension
 *     strategy for narrative fiction (plot, narrator, inference); x16's
 *     argument-essay lesson owns generic persuasive essays; the
 *     creative-writing lesson in arts-culture owns fiction compositional
 *     craft. These lessons own REPRESENTATION ANALYSIS and the CRITICAL
 *     RESPONSE layer (thesis, integrated evidence, effect analysis,
 *     single-text critical study).
 *  2. bio-population-inheritance-frequencies owns the population-scale
 *     inheritance layer (allele frequencies from data, population
 *     modelling, polyallelic/polygenic population patterns). Carved
 *     against bio-genetics-mendel (individual crosses, Punnett, pedigrees),
 *     bio-beyond-mendel-extensions (epistasis/sex-linkage/multiple-allele
 *     series — cross-referenced, not re-taught) and
 *     bio-evolution-natural-selection (selection mechanics — this lesson
 *     owns the genetics-MODELLING skill).
 *  3. bio-sensory-organ-technologies owns the disorder-technology layer
 *     (hearing aids vs cochlear implants, vision correction, dialysis vs
 *     transplant). Carved against bio-anatomy-senses-perception and
 *     bio-anatomy-kidneys-endocrine (which own the PHYSIOLOGY and mention
 *     devices only in passing), tech-mri-machines (imaging) and
 *     health-understanding-pain (pain neuroscience).
 *  4. REMAPPED-BY-COVERAGE-ONLY (left unmapped deliberately): Chemistry
 *     "Using Brønsted-Lowry Theory" — masters chem-ch5-s2 "Acids, Bases &
 *     pH" teaches the Arrhenius/Brønsted/Lewis views verbatim; authoring a
 *     KU lesson would duplicate it and no alias can point at a masters
 *     chapter. Documented as a known matcher miss with content present.
 *  Aliases appended to topic-aliases.ts for the five authored mappings.
 *
 *  Sources read while writing (legally open):
 *  - NESA (nsw.gov.au) — Physics, Chemistry, Biology, Mathematics Advanced
 *    and Mathematics Standard Stage 6 Syllabuses (2017): module/focus-area
 *    structures verified this pass; English Advanced Paper 2 module
 *    structure verified via NESA's HSC Standards pages.
 *  - OpenStax, Biology 2e (openstax.org, CC BY 4.0) — ch.19 'The Evolution
 *    of Populations' (population genetics, allele-frequency arithmetic,
 *    Hardy-Weinberg equilibrium as the null model) and ch.10/11 sensory
 *    context, read during this pass for the population-inheritance lesson.
 *  - OpenStax, Anatomy and Physiology 2e (openstax.org, CC BY 4.0) —
 *    hearing/vision and kidney chapters, read for the disorder-technology
 *    lesson's failure-mode framing (the physiology itself is NOT re-taught
 *    here; the owning lessons are cross-referenced).
 *  - National Institute on Deafness and Other Communication Disorders
 *    (nidcd.nih.gov, public domain) — hearing aids and cochlear implant
 *    fact pages, read this pass for the device-comparison content.
 *  - National Kidney Foundation (kidney.org, publicly accessible) —
 *    haemodialysis, peritoneal dialysis and transplant overview pages,
 *    read this pass.
 */

export const x35NswHscPassTopics: KnowledgeTopic[] = [
  {
    id: 'eng-texts-human-experiences',
    title: 'How Texts Represent Human Experiences',
    domain: 'Languages & World Literature',
    field: 'Literary Craft',
    branch: 'Representation & Response',
    tier: 'core',
    concepts: [
      'Individual and collective human experiences',
      'Emotions, attitudes and ideas in texts',
      'Human qualities, anomalies and paradoxes',
      'Language forms and features shape meaning',
      'How texts invite responder responses',
      'From quotation to analysis: naming the effect',
    ],
    words: 1498,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      { kind: 'heading', text: 'Why representation is the starting point' },
      {
        kind: 'para',
        text:
          "Every story is a claim about what being human feels like, and senior secondary literature courses organise their first common module around exactly that claim. A text does not simply contain a character who grieves, celebrates or rebels; it selects, arranges and stylises those experiences so that a reader feels them in a particular way. Representation is the word for this act of shaping: which experiences get the page, which get a line, which are left off it altogether. When an exam asks how a text represents human experiences, it is really asking what the text's choices are and what they achieve — not whether the story is nice.",
      },
      {
        kind: 'para',
        text:
          "The experiences texts represent come in two broad kinds worth separating cleanly in your mind. Individual experiences belong to a single person inside the text: one character's fear of failing, one narrator's joy at a homecoming. Collective experiences belong to groups: a community's grief after a flood, a generation's restlessness, a family's unspoken rules. Strong analytical answers watch where the two kinds meet, because texts most often argue about experience at the seam — a crowd scene seen through one character's eyes, a public event refracted through private memory. Naming which experiences a text centres, and which it pushes to the margins, is the first honest observation any response can make.",
      },
      { kind: 'heading', text: 'The anatomy of experience in a text' },
      {
        kind: 'para',
        text:
          "Three layers carry the human content of any text. The first is emotion — the feelings the text depicts and the feelings it tries to produce in you, which are related but not identical. The second is attitude: the stances characters and narrators take toward events, and the stance the text itself seems to endorse through what it rewards and punishes. The third is ideas: the bigger claims about human nature the text keeps making whether or not it states them — that memory is unreliable, that belonging costs something, that courage is quiet. A well-built response names a specific emotion, attitude or idea and then shows the machinery that delivers it.",
      },
      {
        kind: 'para',
        text:
          "Texts also trade in what is odd about being human. An anomaly is something that breaks the expected pattern: a character who reacts wrongly to good news, a ritual that comforts and imprisons at once. A paradox is a claim that holds only in two directions: a character most free when everything is taken, a community drawn closer by the thing that divides it. Inconsistent behaviour in a character is not a flaw in the writing to be explained away; it is usually the text's most valuable evidence, because the places where people behave unpredictably are the places writing says the most about what humans are. Watch for these moments deliberately — underline them, and ask what they are doing.",
      },
      { kind: 'heading', text: 'How language does the representing' },
      {
        kind: 'para',
        text:
          "Experiences arrive in a text only through craft, and the craft is what you analyse. Narrative voice decides whose head the reader lives in and how far the reader is trusted to see beyond it. Imagery hands the reader sensations — the smell of a hospital, the heat of bitumen — and with them the emotional temperature of a scene. Structure paces experience: a paragraph that runs for a page enacts panic; a one-line paragraph enacts shock. Genre sets the deal with the reader — an elegy promises consolation shaped like loss, a satire promises judgement wearing jokes. None of these devices is obscure in itself; the skill is connecting each one to the experience it builds.",
      },
      {
        kind: 'para',
        text:
          "The shortcut to avoid is device-spotting. A sentence that names a metaphor earns nothing by itself; the marks come from saying what the metaphor makes the reader feel or understand that literal language could not. The working pattern is technique, evidence, effect: name the craft, quote the moment, state the consequence for meaning. Effects are strongest when they are specific — not that imagery creates vividness, but that the image of the mother still setting a fourth place at the table makes absence physical, letting the reader enact the family's grief rather than observe it. That sentence does three jobs at once, which is exactly what an analysis paragraph should learn to do.",
      },
      {
        kind: 'callout',
        title: 'Name the device, then chase the effect',
        tone: 'insight',
        text:
          "Identification is the first ten per cent of the job. For every device you find, force yourself to finish the sentence: and so the reader comes to understand or feel that — with something specific after the dash. If nothing specific comes, the device is decoration in this text; move to one that carries weight.",
      },
      {
        kind: 'example',
        title: 'From quotation to analysis in three moves',
        steps: [
          'Gather: a short quotation with an obvious craft decision — repetition, an unexpected image, a shift in sentence length.',
          'Name the decision precisely: not figurative language, but the specific figure and its placement inside the sentence.',
          'State the experience it builds: what the reader now feels or understands about the human situation that plain summary could not deliver.',
          'Connect outward: link that moment to the wider experience the text keeps returning to — the individual emotion feeding a collective one, or the anomaly that quietly states the text\'s idea.',
        ],
      },
      { kind: 'heading', text: 'The response: writing about experience' },
      {
        kind: 'para',
        text:
          "Written responses to these questions succeed on concept, not coverage. A conceptual thesis makes a claim about the text's view of experience — that the text presents resilience as communal rather than personal, that it frames memory as both refuge and trap — and every paragraph then serves that claim. A topical summary dressed as an essay (first this happens, then this happens) earns little, because it repeats what any reader already knows. The test of a thesis is whether someone could disagree with it; if no reasonable reader could, it is an observation, not an argument.",
      },
      {
        kind: 'para',
        text:
          "Evidence discipline separates good responses from middling ones regardless of the ideas behind them. Quotations should be short — a few words with a decision inside them, not a whole sentence of plot. Every quotation is followed by analysis in your own words, and the analysis always names the effect on a reader, because experience is something a text does to someone. Avoid the two chronic habits: commenting on techniques the quotation does not actually show, and wandering into the story's events as if events were evidence. The marker is watching the machinery, not the plot.",
      },
      {
        kind: 'terms',
        items: [
          { term: 'representation', def: "The act of selecting and shaping experience in a text — what is shown, how, and what is left out." },
          { term: 'individual experience', def: "Experience belonging to one person inside the text; often the lens through which collective realities are viewed." },
          { term: 'collective experience', def: "Experience shared by a group or community — grief, celebration, upheaval — which texts stage through crowd, family or generation." },
          { term: 'anomaly', def: "A break in the expected pattern of behaviour or event, usually the text's richest evidence about human nature." },
          { term: 'paradox', def: "A claim that holds in two directions at once, such as a freedom that arrives only with loss." },
          { term: 'responder', def: "The reader or audience the text addresses; analysis names what a responder is invited to feel, see or judge." },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A text shows a whole town mourning through one child\'s confused eyes. Which pairing does this most directly exemplify?',
            options: [
              'Individual experience framing collective experience',
              'Anomaly overriding paradox',
              'Genre expectation defeating narrative voice',
              'Structure replacing imagery',
            ],
            answer: 0,
            explain:
              'The collective event (the town\'s mourning) is delivered through an individual lens (the child), the seam where texts most often do their arguing about experience.',
          },
          {
            q: 'The strongest analysis of a device finishes by stating:',
            options: [
              'the device\'s technical name and its Greek origin',
              'what the device makes a reader feel or understand that literal language could not',
              'that the author used many devices in this text',
              'where the device appears in the quotation',
            ],
            answer: 1,
            explain:
              'Identification is the first step only; marks live in the effect — the specific consequence for meaning and feeling.',
          },
          {
            q: 'Which of these is best treated as evidence of an anomaly?',
            options: [
              'A character weeping at a funeral',
              'A character laughing during the service',
              'The town gathering for the service',
              'The service beginning at noon',
            ],
            answer: 1,
            explain:
              'The laughter breaks the expected pattern; anomalies like this are where texts say the most about what humans are, provided you analyse rather than judge.',
          },
          {
            q: 'A thesis earns marks in an experience-focused response primarily when it:',
            options: [
              'retells the plot accurately',
              'lists every technique the text uses',
              'makes a claim about the text\'s view of experience that a reader could dispute',
              'quotes the widest possible range of scenes',
            ],
            answer: 2,
            explain:
              'Concept drives the response: a disputable claim about representation organises evidence; summary and coverage do not.',
          },
        ],
      },
      { kind: 'heading', text: 'Key takeaways' },
      {
        kind: 'list',
        items: [
          'Representation means shaping: watch what a text centres, what it marginalises, and how the shaping works.',
          'Separate individual from collective experience — the seam between them is where most arguments live.',
          'Chase anomalies and paradoxes deliberately; unexpected behaviour is evidence, not error.',
          'Work technique, evidence, effect — name the craft, quote the moment, state the consequence for a responder.',
          'Write from a disputable thesis and keep quotations short; the marker is watching the machinery, not the plot.',
        ],
      },
    ],
  },
  {
    id: 'eng-critical-response-literature',
    title: 'The Critical Response: Analysing Texts and Writing About Literature',
    domain: 'Languages & World Literature',
    field: 'Reading Strategy',
    branch: 'Critical Response & Close Study',
    tier: 'intermediate',
    concepts: [
      'Unseen texts: rapid comprehension and technique capture',
      'Short-answer discipline: question terms and mark budgeting',
      'Thesis as point of view, not plot summary',
      'Integrating quotations into your own sentences',
      'The paragraph engine: claim, evidence, analysis, link',
      'Close critical study of a single text: construction, context, evaluation',
    ],
    words: 1712,
    readMins: 9,
    addedOn: '2026-10-25',
    blocks: [
      { kind: 'heading', text: 'Why the response is its own craft' },
      {
        kind: 'para',
        text:
          "Reading a text well and responding to it well are two different skills, and examinations assess the second through the first. A reader can understand a passage perfectly and still lose marks by answering the wrong question, quoting the wrong lines, or narrating instead of analysing. The critical response is a genre with its own conventions — a defensible thesis, evidence woven into your own sentences, analysis that always lands on effect — and learning those conventions is not cheating; it is learning to write the way the discipline writes. This lesson treats the two places those conventions are tested hardest: the unseen texts you meet for the first time in the room, and the single text you have studied for a year and must still read freshly.",
      },
      {
        kind: 'para',
        text:
          "The craft divides by time available. With an unseen text you have minutes: comprehension first, technique capture second, and a compact answer built on the question's own terms. With a studied text you have months of knowledge and the opposite trap — writing everything you know instead of what the question asks. Both situations reward the same underlying engine, so this lesson builds the engine first, then tunes it for each situation.",
      },
      { kind: 'heading', text: 'Unseen texts: the short-answer toolkit' },
      {
        kind: 'para',
        text:
          "Read the question before the text. The question terms — how, to what extent, in what ways — tell you whether the answer needs a technique catalogue, a judgement, or a causal account, and the marks tell you how many moves to make: roughly one developed point per mark in short answers, with the final question usually demanding a mini-thesis and two or three evidence pairs. Reading the text with the question in hand turns a passive read into a search, and the search is where marks come from.",
      },
      {
        kind: 'para',
        text:
          "On the first pass, read for the situation: who is present, what changes, what the emotional weather is. On the second pass, hunt craft decisions — a shift in sentence length, an image where plain language would do, a structural surprise like a late reversal — and mark the two or three that best serve the question. Under examination pressure, breadth loses to depth: three quotations analysed to effect beat eight techniques named. And answer the question set, not a favourite one rehearsed beforehand; examiners can tell, and the question terms are the contract.",
      },
      {
        kind: 'example',
        title: 'A five-mark unseen question, budgeted',
        steps: [
          'Diagnose the question terms: if it asks how a setting shapes mood, the answer is causal, not descriptive.',
          'Budget: five marks means one strong opening claim plus three evidence-effect pairs, or claim plus two pairs and a link to the whole.',
          'Open with the claim in one sentence: the setting does something specific to the mood, named precisely.',
          'For each pair: quote briefly, name the craft decision, land on the effect for the reader.',
          'Close only if the question spans the whole text — one sentence tying the pairs to the text\'s larger purpose.',
        ],
      },
      { kind: 'heading', text: 'The thesis: a point of view, not a summary' },
      {
        kind: 'para',
        text:
          "Every extended response stands on a thesis: a sentence that makes a disputable claim about what the text does and how. The commonest failure is the summary thesis — a plot restatement with the verb suggests stapled on. The test is disagreement: could a competent reader hold a different view? If the claim is that the text uses imagery, no one disagrees; if the claim is that the text ultimately refuses the comfort its imagery keeps offering, a case must be made — and the making of it is the essay. Strong theses often stake a position on proportion or priority: which experience dominates, which value finally wins, what the text's closing note really withholds.",
      },
      {
        kind: 'para',
        text:
          "A thesis earns its keep by steering selection. Once the claim exists, everything quoted and analysed must serve it, and much of what you know must be left out — the hardest discipline for a well-prepared student. Plan for five minutes before writing: the thesis, the two or four moves that prove it, and the quotations that anchor each move. An essay with a weak thesis and excellent execution still reads as effortful and aimless; the one-sentence claim is the cheapest upgrade in the whole genre.",
      },
      {
        kind: 'callout',
        title: 'The evidence sandwich',
        tone: 'path',
        text:
          "Never end a sentence with a dropped quotation. Introduce the evidence in your own words, quote the few decisive words, and analyse what those words do — the bread of your sentence wraps the quotation so the voice stays yours throughout. If you cannot say what the quotation is evidence of, it does not belong in the paragraph.",
      },
      { kind: 'heading', text: 'The paragraph engine' },
      {
        kind: 'para',
        text:
          "A working analysis paragraph has four beats. The claim states the paragraph's move in support of the thesis — one idea, not two. The evidence is a short quotation, introduced so it reads as part of your sentence. The analysis is the longest beat: what the craft decision does, why the writer chose it, what a reader comes to feel or understand that paraphrase would lose. The link closes by returning to the thesis — not by repeating it verbatim, but by showing how this move advanced the claim. Markers reward paragraphs they can see the joints of; four-beat paragraphs have visible joints.",
      },
      {
        kind: 'para',
        text:
          "The chronic diseases are named and cured the same way. Waffle — sentences about how the composer skilfully uses techniques — says nothing and is deleted on sight. Plot-telling — narration standing in for analysis — is cured by refusing to quote any word that merely reports events. Technique-listing is cured by the effect test: every named device must be followed by what it achieves. And drifting off the question is cured in planning: write the question's key terms at the top of the page and check each planned paragraph against them before writing anything.",
      },
      { kind: 'heading', text: 'The close critical study' },
      {
        kind: 'para',
        text:
          "A year-long study of one text ends in a peculiar examination challenge: proving you can read a familiar work freshly. The close critical study rewards responses that treat the text as a made thing — how it is constructed, what its language repeatedly does, which scenes carry its argument — rather than as a story to be retold. Construction includes the large decisions: where the narrative begins and ends, who is permitted a voice, what is withheld. Language includes the small ones: the text's recurring images, its rhythm, its register shifts. The best answers trace a pattern across the whole text instead of hiking through it chapter by chapter.",
      },
      {
        kind: 'para',
        text:
          "Context in this module is not a biography dump; it is the story of value. Texts are argued over because different audiences at different times have prized different things in them — and the module explicitly asks for a personal, informed evaluation, which means you are allowed, after the evidence, to judge: what the text offers a reader now, and where it shows its age. The phrase informed is doing real work — evaluation follows analysis, never replaces it. A response that says what the text means to you without showing how the text works is an opinion; one that shows the machinery and then weighs it is criticism.",
      },
      { kind: 'heading', text: 'The reflective commentary' },
      {
        kind: 'para',
        text:
          "Where a course asks you to write creatively and then explain yourself, the commentary is a short critical mirror: it names the choices you made as a writer — form, voice, the stylistic features borrowed or refused — and ties each to the purpose the piece serves. It is written analytically, in the same technique-effect vocabulary as any other response, but its evidence is your own composition. The commentary rewards honesty about intent and restraint in length; it is a justification, not a second story.",
      },
      {
        kind: 'terms',
        items: [
          { term: 'thesis', def: "The one-sentence, disputable claim an extended response exists to prove." },
          { term: 'unseen text', def: "A passage read for the first time in the examination room; assessed through short-answer analysis." },
          { term: 'integrated quotation', def: "Evidence woven into your own sentence so the voice remains yours, rather than dropped in as a standalone block." },
          { term: 'effect', def: "The specific consequence of a craft decision on a reader's understanding or feeling; the landing point of all analysis." },
          { term: 'close critical study', def: "Sustained engagement with a single text's construction, language and contested value across contexts." },
          { term: 'reflective commentary', def: "A short analytical account of your own compositional choices and the purpose they serve." },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In a five-mark short answer on an unseen text, the best allocation of effort is:',
            options: [
              'name as many techniques as possible',
              'one claim plus three quotation-and-effect pairs, developed to a consistent depth',
              'a detailed plot summary followed by one quotation',
              'a personal opinion about whether the text is enjoyable',
            ],
            answer: 1,
            explain:
              'Short answers reward depth over breadth: roughly one developed evidence-effect pair per mark, all serving the question asked.',
          },
          {
            q: 'Which opening sentence is a thesis?',
            options: [
              'The novel tells the story of a family across three generations.',
              'The poem uses many images of nature.',
              'The play ultimately refuses the reconciliation its final scene seems to stage.',
              'The composer skilfully uses a variety of techniques.',
            ],
            answer: 2,
            explain:
              'Only the third makes a disputable claim a reader could argue with; the others are summary, inventory and filler.',
          },
          {
            q: 'The evidence sandwich requires that a quotation:',
            options: [
              'be at least one full sentence long',
              'be introduced and then analysed in your own words',
              'appear in every paragraph exactly once',
              'be the first sentence of each paragraph',
            ],
            answer: 1,
            explain:
              'Integration means your voice introduces the evidence and your voice analyses it; the quotation is the filling, not the meal.',
          },
          {
            q: 'In a close critical study, the strongest use of context is:',
            options: [
              'a paragraph on the author\'s biography',
              'showing how different audiences have valued or contested the text over time',
              'listing the year of publication and the literary movement',
              'avoiding context entirely because it is irrelevant',
            ],
            answer: 1,
            explain:
              'Context as the story of value — how reception and judgement shifted — feeds directly into the module\'s demand for an informed personal evaluation.',
          },
        ],
      },
      { kind: 'heading', text: 'Key takeaways' },
      {
        kind: 'list',
        items: [
          'Read the question before the text; the question terms are the contract your answer signs.',
          'Depth beats breadth everywhere: three analysed quotations outrank eight named techniques.',
          'Write from a disputable thesis and let it select your evidence — leaving things out is the discipline.',
          'Run the four-beat paragraph engine — claim, evidence, analysis, link — and let the joints show.',
          'Treat a studied text as a made thing: trace construction and language patterns, then evaluate informedly and personally.',
        ],
      },
    ],
  },
  {
    id: 'bio-population-inheritance-frequencies',
    title: 'Inheritance in Populations: Allele Frequencies and Population Patterns',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Population Genetics',
    tier: 'intermediate',
    concepts: [
      'From individual crosses to population-scale inheritance',
      'Counting alleles: gene-pool arithmetic from genotype data',
      'Random mating and the population model',
      'Polyallelic traits across a population (the ABO example)',
      'Polygenic variation as a population distribution',
      'Environmental effects on population-wide expression',
    ],
    words: 1422,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      { kind: 'heading', text: 'From crosses to populations' },
      {
        kind: 'para',
        text:
          "Mendelian genetics answers a question about families: given these two parents, what can their children inherit? Punnett squares, test crosses and pedigree charts — the machinery of individual inheritance — are the right tools for that question, and the earlier lessons in this library teach them in full. But a second question sits one level up, and it is the one population genetics exists to answer: given this whole group of interbreeding organisms, what is the state of its gene pool, and how do the proportions in that pool behave over generations? The shift sounds small and is enormous. A Punnett square tracks probabilities for one mating; a population model tracks frequencies across hundreds of matings, where the rules are different and the surprises are bigger.",
      },
      {
        kind: 'para',
        text:
          "The key conceptual move is this: a population does not inherit anything. Individuals inherit alleles from their parents; the population merely holds them, and the collection of alleles across all individuals — the gene pool — is where patterns become visible. A trait can vanish from every individual pedigree in the group while its allele sits quietly in heterozygotes, unseen and unharmmed, waiting. Frequency, not presence, is the property that matters at this scale, and frequency is something you can count, model and predict — which makes population inheritance the most quantitative corner of the genetics course.",
      },
      { kind: 'heading', text: 'Counting alleles: the gene-pool arithmetic' },
      {
        kind: 'para',
        text:
          "Everything begins with the count. In a diploid population of N individuals there are 2N allele copies for a given gene, and the frequency of an allele is simply the number of copies of it divided by 2N. Genotype data converts directly: each homozygote for the allele contributes two copies, each heterozygote contributes one. So if 40 individuals are AA, 40 are Aa and 20 are aa, the a-frequency is (40 + 40) / 200 = 0.4, and the A-frequency must be 0.6, because the two frequencies sum to one. Notice what the arithmetic quietly assumes: you can only do it if you can see the genotypes. A dominant phenotype hides a heterozygote, which is why frequency work usually leans on traits where the genotypes show, or on estimates from the population model below.",
      },
      {
        kind: 'para',
        text:
          "Once frequencies exist, the model question follows: what should the next generation look like? If mating is random, every individual is equally likely to pair with every other, and allele frequencies — not genotype frequencies — are what pass through the shuffle. Imagine the gene pool as a barrel of beans: every gamete produced is one bean drawn at random, and a new individual is two draws. The population model predicts offspring genotype proportions from parent allele frequencies by exactly that draw logic: p squared, two p q, q squared for a two-allele gene. When a real population's counts match the prediction, the shuffle is behaving; when they diverge, something in the shuffle — selection, migration, drift, non-random mating — has intervened, and the gap between predicted and observed is the clue.",
      },
      {
        kind: 'example',
        title: 'Allele frequencies from classroom data',
        steps: [
          'Collect a single-gene dataset where genotypes are visible — for example, a two-allele trait scored in 100 students: 49 AA, 42 Aa, 9 aa.',
          'Count the a-alleles: heterozygotes contribute 42, homozygotes 18, total 60 copies out of 200 — a-frequency = 0.3, A-frequency = 0.7.',
          'Predict the next generation under random mating: A A = 0.49, A a = 0.42, a a = 0.09 — compare with the observed 0.49, 0.42, 0.09.',
          'Interpret: near-equality says the class is behaving like a random-mating population for this gene; a real divergence would send you hunting for the mechanism.',
        ],
      },
      {
        kind: 'callout',
        title: 'Frequency is a property of populations, not people',
        tone: 'insight',
        text:
          "No individual is 0.3 albino or 0.6 resistant — an allele frequency describes the pool, not any member of it. Exam questions exploit this constantly: a statement about one organism's genotype can never confirm or refute a statement about the population's frequencies. Always check which level the question is really on.",
      },
      { kind: 'heading', text: 'Polyallelic and polygenic patterns in populations' },
      {
        kind: 'para',
        text:
          "Most textbook genetics uses two alleles because two is teachable, but real genes often run to whole allelic series — and the population is where the full series shows. The classic case is the ABO blood-group system: three alleles, one dominant pair and one recessive, producing four phenotypes across the population. From a population's phenotype counts and a knowledge of the mating rules, the frequencies of all three alleles can be estimated — a direct extension of the two-allele arithmetic, and a standard examination exercise. The earlier transmission-genetics lesson owns the individual-cross consequences of multiple-allele series; this lesson owns reading the series across a whole population, where each phenotype's share is a window into its alleles' frequencies.",
      },
      {
        kind: 'para',
        text:
          "Polygenic traits behave differently again: instead of a handful of discrete categories, they yield a continuous spread. Height, skin tone, blood pressure — each is the summed output of several genes plus environmental contribution, and across a population the phenotypes pile into the familiar bell shape: most people near the middle, fewer at each extreme. The bell is itself information — its width reflects how many genes contribute and how much variation the environment injects, and its shape is why no single Punnett square could ever predict a population's heights. When an examination shows a frequency histogram of a quantitative trait, it is showing polygenic inheritance at population scale, and the reading skill is distributional, not categorical.",
      },
      { kind: 'heading', text: 'Environment and expression' },
      {
        kind: 'para',
        text:
          "Populations also expose what individual crosses hide: the environment's hand in expression. The same genotype can reach different heights, colours or yields in different conditions, and at population scale those differences assemble into patterned variation — sun-exposed versus shaded slopes, well-fed versus underfed cohorts. The exam-level skill is to attribute variation honestly: a phenotype distribution usually carries both genetic and environmental components, and questions ask you to reason about which portion of the observed pattern a genotype model could explain. Where the earlier lessons own the mechanics of inheritance, this one closes the loop: genotype frequencies set what is possible, environment sets what is realised, and a population is where the two meet.",
      },
      {
        kind: 'terms',
        items: [
          { term: 'gene pool', def: "The total collection of alleles across all individuals in an interbreeding population — the pool that frequencies describe." },
          { term: 'allele frequency', def: "The share of a given allele among all copies of its gene in the population; each homozygote contributes two copies, each heterozygote one." },
          { term: 'random mating', def: "The model condition in which pairings form without regard to the trait; the null assumption against which real populations are compared." },
          { term: 'polyallelic', def: "A gene with more than two allelic forms in the population, such as the three-allele ABO series." },
          { term: 'polygenic', def: "A trait controlled by several genes acting together, producing continuous population-wide variation." },
          { term: 'genetic drift', def: "Random change in allele frequencies, strongest in small populations — one mechanism that breaks the random-mating prediction." },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A population of 100 individuals has 49 AA, 42 Aa and 9 aa. The frequency of allele a is:',
            options: ['0.09', '0.30', '0.42', '0.60'],
            answer: 1,
            explain:
              'a-copies = one per heterozygote (42) plus two per homozygote (18) = 60 of 200 copies = 0.30; the A-frequency is the complement, 0.70.',
          },
          {
            q: 'Under random mating with a-frequency 0.3, the predicted proportion of homozygous aa individuals in the next generation is:',
            options: ['0.09', '0.30', '0.42', '0.21'],
            answer: 0,
            explain:
              'Two independent draws each with probability 0.3: 0.3 × 0.3 = 0.09 — the draw logic behind the population model.',
          },
          {
            q: 'A population histogram of adult height shows a smooth bell curve. This pattern is best explained by:',
            options: [
              'a single gene with two alleles',
              'polygenic inheritance plus environmental contribution',
              'a sex-linked trait',
              'complete dominance',
            ],
            answer: 1,
            explain:
              'Continuous population-wide variation arises when several genes sum their effects and the environment contributes — the polygenic signature.',
          },
          {
            q: 'Which observation could NOT, by itself, tell you an allele\'s frequency in the population?',
            options: [
              'genotype counts from a visible-polymorphism survey',
              'one individual\'s genotype',
              'phenotype counts of a polyallelic system like ABO',
              'the full genotype distribution of a sample',
            ],
            answer: 1,
            explain:
              'Frequencies are population-level properties; a single genotype is one data point and can neither establish nor refute a frequency claim.',
          },
        ],
      },
      { kind: 'heading', text: 'Key takeaways' },
      {
        kind: 'list',
        items: [
          'Population inheritance asks about frequencies in the gene pool, not genotypes in families — check which level the question is on.',
          'Allele frequency is copy-counting: two per homozygote, one per heterozygote, over 2N total copies.',
          'The random-mating model predicts genotype proportions from allele frequencies; observed gaps point to selection, migration, drift or non-random mating.',
          'Polyallelic series (ABO) and polygenic traits (bell curves) are population-scale signatures — read distributions, not single crosses.',
          'Genotype sets what is possible; environment sets what is realised — populations are where the two become visible together.',
        ],
      },
    ],
  },
  {
    id: 'bio-sensory-organ-technologies',
    title: 'When Organs Fail: Hearing, Vision and Kidney Technologies',
    domain: 'Life Sciences',
    field: 'Anatomy & Physiology',
    branch: 'Disorder Technologies',
    tier: 'intermediate',
    concepts: [
      'Failure modes: conductive versus sensorineural hearing loss',
      'Hearing aids versus cochlear implants',
      'Refractive errors, cataract and vision correction',
      'Kidney failure: dialysis versus transplantation',
      'Matching the device to the failure',
      'Evaluating technologies: effectiveness, access, ethics',
    ],
    words: 1728,
    readMins: 9,
    addedOn: '2026-10-25',
    blocks: [
      { kind: 'heading', text: 'Why replacement technologies matter' },
      {
        kind: 'para',
        text:
          "The body's sensory and filtering organs fail more often than any other systems, and modern medicine's answer is a family of devices that either assist the failing part or substitute for it outright. These technologies are examined not as engineering curiosities but as applied physiology: every device encodes a claim about how the organ worked before it failed, and the surest way to understand a device is to ask which part of the physiology it replaces. The physiology itself — hair cells, photoreceptors, nephrons — is taught in the body-systems lessons of this library; this lesson builds on that ground and focuses on the technology layer: what each device does, what kind of failure it answers, and what trade-offs come with it.",
      },
      {
        kind: 'para',
        text:
          "A recurring theme across all three organs is the division between assist and replace. Some failures leave tissue alive but underperforming — a lens that has lost focus, hair cells that need louder input — and the technology assists. Other failures leave tissue dead or absent — cataract behind an intact nerve, hair cells destroyed by noise or drugs, kidneys gone to chronic disease — and the technology must substitute, wholly or partly, for the lost function. Diagnostic questions at examination level almost always begin by asking you to classify the failure, because the classification determines the treatment: the wrong device for the failure does nothing, which is why the matching logic matters more than any specification sheet.",
      },
      { kind: 'heading', text: 'Hearing: from amplification to substitution' },
      {
        kind: 'para',
        text:
          "Hearing losses divide into two classes with different answers. Conductive loss means sound is not reaching the inner ear efficiently — outer or middle ear blockage, ossicle damage, fluid — and the cochlea itself is fine. Sensorineural loss means the cochlea's hair cells or the auditory nerve are damaged, so the signal either is never generated or never travels. The distinction is testable and decisive: pure-tone tests, tuning-fork comparisons between bone and air conduction, and tympanometry all exist to sort one from the other before any device is chosen.",
      },
      {
        kind: 'para',
        text:
          "The two main technologies map onto the two classes. A hearing aid is an amplifier: microphone, processor, and a speaker that delivers more sound energy to whatever pathway remains. It answers conductive and mild-to-moderate sensorineural losses, where enough hair cells survive to transmit an enlarged signal — but it cannot help where no working pathway exists, because amplifying sound that nothing can receive just delivers louder silence. A cochlear implant bypasses the hair cells altogether: an external processor converts sound to electrical patterns, and an array of electrodes threaded into the cochlea stimulates the auditory nerve directly. It answers severe-to-profound sensorineural loss, where hair cells are gone but the nerve lives — substitution, not amplification. The trade-offs follow: an implant gives electrical rather than natural hearing, requires surgery and long rehabilitation, and its outcomes depend heavily on age at implantation and duration of deafness, which is why candidate selection is a whole field of its own.",
      },
      {
        kind: 'callout',
        title: 'Match the device to the failure',
        tone: 'warn',
        text:
          "Amplification helps a weak signal; substitution helps a dead pathway. A hearing aid on a profound sensorineural loss delivers louder sound to nothing; an implant on a purely conductive loss is major surgery to bypass a problem a simpler device fixes. Every examination question about devices is secretly a question about the failure mode first.",
      },
      { kind: 'heading', text: 'Vision: optics you can wear or zap' },
      {
        kind: 'para',
        text:
          "Most vision problems are optical, not neural: the eye's focusing machinery puts the image in the wrong place. Myopia — too much focusing power or too long an eye — lands the image in front of the retina; hyperopia lands it behind; with age the lens stiffens and near focus fails. Because the retina and nerve are intact, the fixes are optical and range from trivial to surgical: external lenses (glasses, contact lenses) that add or subtract converging power, and refractive surgery that reshapes the cornea with a laser so the eye itself focuses correctly. These are pure assist technologies — they change the optics and leave the physiology untouched.",
      },
      {
        kind: 'para',
        text:
          "Cataract is the instructive contrast: the lens clouds, usually with age, and no amount of external optics can focus through a fogged window. The answer is substitution — remove the clouded lens surgically and implant a clear artificial intraocular lens in its place. The implanted lens restores the eye's optics with the retina still doing the real work, which is why cataract surgery is among the highest-success operations in medicine. At the other extreme, where the retina or nerve has failed, optical devices of any kind reach their limit — the signal has nowhere to land — and research-level substitutes (retinal implants) try to drive the remaining nerve directly, the visual analogue of the cochlear implant.",
      },
      {
        kind: 'example',
        title: 'Choosing the device: three cases',
        steps: [
          'Case one: a child with trouble hearing the teacher; tests show normal bone conduction but reduced air conduction, with fluid behind the eardrum — a conductive loss; the answer is treatment of the cause plus amplification if needed, not implantation.',
          'Case two: an adult who cannot read print without glasses after forty — the lens has stiffened (presbyopia); reading glasses add the lost converging power, an optical assist with no surgery.',
          'Case three: progressive clouding of the lens with glare and faded colours — cataract; optical aids only delay the decision, and the definitive answer is lens substitution.',
        ],
      },
      { kind: 'heading', text: 'Kidneys: filtering by machine or by graft' },
      {
        kind: 'para',
        text:
          "Kidney failure is different in kind: the organ does chemical work — filtering nitrogenous waste, balancing water and salts, contributing to blood pressure and red-cell production — and no wearable optical trick can do any of it. When kidneys fail chronically, the two real options are dialysis and transplantation. Haemodialysis pumps the patient's blood through an artificial membrane: waste diffuses out down a concentration gradient into dialysate fluid whose composition is engineered so that needed solutes stay and wastes leave. Peritoneal dialysis uses the patient's own abdominal membrane as the filter, with dialysate cycled through the body cavity. Both are substitution technologies, life-sustaining but intermittent — they clean the blood on a schedule rather than continuously, and the patient carries the burden of diet, time and access care.",
      },
      {
        kind: 'para',
        text:
          "Transplantation is the single technology that restores continuous, physiological kidney function — a working graft filters all day without appointments. Its costs are different: a lifetime of immunosuppressive drugs to stop rejection, surgical risk, and above all scarcity, because the waiting list depends on donors. The examination framing is evaluative, not just descriptive: effectiveness (dialysis sustains but does not cure; transplant restores), access (dialysis is available wherever machines and trained staff exist; transplants are rationed by supply), and the ethics that follow (allocation rules, living donation, equity). A complete answer names the trade-off rather than declaring a winner, because the ranking changes with the patient's circumstances — which is exactly the point of asking.",
      },
      { kind: 'heading', text: 'Evaluating a technology' },
      {
        kind: 'para',
        text:
          "Across all three organs, the same four questions evaluate any device well. Effectiveness: how completely does it restore function, and for whom? Invasiveness: what surgery, training or daily burden does it demand? Access: what does it cost, and who can get it — a device that works but is unavailable to most of the affected population has limited public-health value. Ethics: whose decisions count in choosing it, and what do allocation and consent look like? Strong examination answers move through all four rather than lingering on how the device works, because the syllabus context is health decision-making, not engineering.",
      },
      {
        kind: 'terms',
        items: [
          { term: 'conductive hearing loss', def: "Failure of sound transmission through the outer or middle ear, with the cochlea intact — amplification's territory." },
          { term: 'sensorineural hearing loss', def: "Damage to cochlear hair cells or the auditory nerve — the territory of cochlear implants once loss is severe." },
          { term: 'cochlear implant', def: "A device that converts sound to electrical stimulation of the auditory nerve, bypassing destroyed hair cells." },
          { term: 'intraocular lens', def: "The artificial lens implanted after cataract removal, substituting for the eye's clouded natural lens." },
          { term: 'dialysate', def: "The engineered fluid in dialysis whose gradient pulls wastes from the blood while preserving needed solutes." },
          { term: 'immunosuppression', def: "The drug regimen that prevents graft rejection after transplantation — the standing cost of a working transplant." },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Bone conduction is normal but air conduction is reduced, with fluid behind the eardrum. The failure class and the appropriate first response are:',
            options: [
              'sensorineural loss — refer for cochlear implant assessment',
              'conductive loss — treat the cause; amplify if needed',
              'central processing disorder — hearing aids in both ears',
              'sensorineural loss — hearing aid set to maximum gain',
            ],
            answer: 1,
            explain:
              'The inner-ear pathway is intact (normal bone conduction), so the loss is conductive: treat the middle-ear cause and amplify if needed — implantation bypasses a problem that is not the problem.',
          },
          {
            q: 'Why does a hearing aid not help profound sensorineural loss?',
            options: [
              'its speaker is not loud enough',
              'there are no working hair cells to receive and transmit the amplified signal',
              'it damages the auditory nerve further',
              'it only corrects conductive losses',
            ],
            answer: 1,
            explain:
              'Amplification delivers more energy to whatever pathway remains; where the pathway itself is destroyed, the answer is nerve-level substitution by implant.',
          },
          {
            q: 'Cataract is treated by lens substitution rather than stronger glasses because:',
            options: [
              'glasses cannot be made thick enough',
              'the clouded lens physically blocks light, so no external optics can focus through it',
              'surgery is always cheaper than glasses',
              'the retina has also failed',
            ],
            answer: 1,
            explain:
              'Cataract is an optical blockage inside the eye; the fix is removing the obstruction and substituting a clear intraocular lens, with the retina still doing the real work.',
          },
          {
            q: 'Which statement best captures the dialysis-versus-transplant trade-off?',
            options: [
              'dialysis restores full continuous function; transplant is temporary',
              'transplant restores continuous physiological function but requires immunosuppression and donor supply; dialysis sustains life intermittently',
              'dialysis is always the ethical choice',
              'transplantation requires no follow-up care',
            ],
            answer: 1,
            explain:
              'Dialysis substitutes on a schedule; transplant restores continuous function at the price of a lifetime of immunosuppression and rationing by donor availability — an evaluation, not a slogan.',
          },
        ],
      },
      { kind: 'heading', text: 'Key takeaways' },
      {
        kind: 'list',
        items: [
          'Classify the failure first — assist technologies answer weak pathways, substitution technologies answer dead ones.',
          'Hearing: aids amplify for conductive and mild sensorineural losses; implants substitute for destroyed hair cells when the nerve lives.',
          'Vision: most defects are optical and answer to external lenses or laser reshaping; cataract needs lens substitution.',
          'Kidneys: dialysis substitutes intermittently by diffusion; transplant restores continuous function at the cost of immunosuppression and scarcity.',
          'Evaluate any technology on effectiveness, invasiveness, access and ethics — the ranking changes with the patient.',
        ],
      },
    ],
  },
]

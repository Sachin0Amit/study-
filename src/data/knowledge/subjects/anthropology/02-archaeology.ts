/**
 * Knowledge Universe — Anthropology — Chapter 02: Archaeology
 * 2 lessons · ~2,631 words
 * field: Anthropology
 * legacy sources: social-sciences.ts, x64-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Archaeology]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 anth-archaeology-methods — Archaeology: Reading the Past from Its Remains
 *   02.2 anth-bioarchaeology-bones — Reading Bones: Bioarchaeology and the Lives of Past People
 */
import type { KnowledgeTopic } from '../../types'

export const anthropologyCh02: KnowledgeTopic[] = [
  {
    id: 'anth-archaeology-methods',
    title: 'Archaeology: Reading the Past from Its Remains',
    domain: 'Social Sciences',
    field: 'Anthropology',
    branch: 'Archaeology',
    tier: 'core',
    concepts: [
      'Provenience: position is information',
      'Stratigraphy and the Harris matrix',
      'Relative dating: typology, seriation, coins',
      'Absolute dating: radiocarbon and dendro',
      'Formation processes and taphonomy',
      'Survey and remote sensing',
    ],
    words: 1099,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      { kind: 'para', text: 'For all but the last five thousand years, humanity left no writing: the past must be read from what survives — stone tools, bones, seeds, ashes, garbage. Archaeology is that reading, and its cardinal rule is that an object alone is nearly worthless while an object in context is evidence. A spearhead looted from a site has a shape; the same spearhead excavated from a sealed layer beside a hearth and a burial has a date, a function and a society. This lesson covers how archaeologists extract that context — and what the remains, even the garbage, reveal.' },
      { kind: 'callout', title: 'Why this matters', tone: 'insight', text: 'Looting and unrecorded excavation destroy information that cannot be re-collected — context, once stripped, is gone forever. That is why museum provenance disputes, heritage law and excavation licensing all turn on the same principle this lesson teaches: position, association and layering are the data.' },
      { kind: 'heading', text: 'Core Concepts' },
      { kind: 'para', text: 'Provenience is an object\'s exact position and its associations — what lies with it, above it, below it. (Provenance, its cousin, means the object\'s later history of ownership.) Context is what turns things into evidence: grave goods with a skeleton speak of belief; tools on a floor speak of activity. The moment looters pull an object from the ground, those associations are destroyed — which is why unprovenanced antiquities carry a permanent asterisk.' },
      { kind: 'para', text: 'Superposition — deeper layers are older, all else equal — is stratigraphy\'s first law, borrowed from geology (the deep-time lesson in Physical Sciences treats its rocky version). Archaeological deposits complicate it with cuts: a pit dug through a floor is younger than the floor, though its fill may hold objects far older than the pit. Edward Harris\'s 1973 matrix diagrams these relationships — each unit above, below or cutting another — into a stratigraphic grammar every modern excavation writes.' },
      { kind: 'para', text: 'Before absolute dates, sequences. Typology arranges artifacts into styles that appear, flourish and fade; Flinders Petrie\'s sequence dating ordered prehistoric Egyptian graves by their assemblages in the 1890s. Seriation graphs the frequencies of styles across assemblages into "battleship curves" — rising, cresting, declining. Coins bearing emperors\' faces give spot dates, and imported pottery cross-dates one region\'s sequence against another\'s calendar.' },
      { kind: 'para', text: 'Willard Libby\'s radiocarbon method (1949, Nobel 1960) put numbers on organic remains up to about fifty thousand years old. The deep-time lesson covers the half-life physics; archaeology adds the fine print: results are statistical and must be calibrated against tree rings — Andrew Douglass\'s dendrochronology built the master curves — because atmospheric carbon-14 has wobbled over the centuries. Beware "old wood": charcoal from an ancient beam can predate the fire that burned it.' },
      { kind: 'para', text: 'Michael Schiffer distinguished the formation processes standing between past behavior and the record: cultural ones (discard, curation, reuse, ritual deposition) and natural ones (burrowing, flooding, erosion). Taphonomy — what happens to remains after death — separates a scattered bone from a burial. And the richest archive is the least glamorous: middens, ancient and modern. William Rathje\'s Tucson Garbage Project, begun in 1973, excavated landfills and found households\' claims bore little relation to their discards — including the alcohol they denied buying.' },
      { kind: 'para', text: 'Excavation destroys its subject, so modern archaeology digs last. Pedestrian survey walks fields counting surface finds; aerial photography, O. G. S. Crawford\'s 1920s innovation, reads cropmarks above buried walls; ground-penetrating radar and magnetometry map them without a spade. LiDAR has been the revolution of recent decades: laser pulses through forest canopy have mapped tens of thousands of ancient structures across the Maya lowlands, invisible from the ground for a century of exploration.' },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: date a storage pit found cutting through a mosaic floor, its fill containing eleven coins whose latest was minted in 340 CE.',
        'Recall: stratigraphy says the pit is later than the floor it cuts; terminus post quem says a deposit cannot be older than its latest dated contents.',
        'Apply: the floor was laid before the pit was dug; the pit was filled after 340 CE, since a 340 coin must exist before it can be dropped in.',
        'State the result: a bracket — floor earlier than pit, pit filled after 340 CE. To close the other end, find a layer sealing the pit and take its terminus ante quem.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Cultural resource management: construction law across much of the world funds rescue archaeology before the bulldozers.',
        'Museum ethics: provenance research and repatriation rest on excavation records — and their absence.',
        'Forensic archaeology: taphonomy and search techniques applied to crime scenes and mass graves.',
        'Paleoenvironmental reconstruction: pollen cores and animal bones track ancient fields, diets and climates.',
        'Heritage tourism: sites interpreted without destroying the context that makes them meaningful.',
      ] },
      { kind: 'callout', title: 'Common Pitfalls', tone: 'warn', text: 'Carbon dating is not a universal clock — beyond about fifty millennia, or on inorganic material, it is mute, and uncalibrated lab dates mislead. Style change is not population change: "pots are not people". Preservation biases the record toward durable, dry, sealed deposits, so we see the atypical. And a single spectacular find tempts narrative; archaeology\'s strength is assemblage against assemblage, context against context.' },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'provenience', def: 'An object\'s recorded position and associations in the ground.' },
        { term: 'superposition', def: 'The principle that undisturbed deeper layers were laid down earlier.' },
        { term: 'Harris matrix', def: 'A diagram of stratigraphic units recording what overlies, underlies or cuts what.' },
        { term: 'seriation', def: 'Ordering assemblages by the rise and fall of artifact style frequencies.' },
        { term: 'terminus post quem', def: 'The earliest possible date of a deposit, given by its latest contents.' },
        { term: 'taphonomy', def: 'The study of processes altering remains between deposition and discovery.' },
        { term: 'midden', def: 'A refuse accumulation — garbage — doubling as an archaeological archive.' },
      ] },
      { kind: 'quiz', items: [
        {
          q: 'A pit cuts a floor and its fill\'s latest coin dates to 340 CE. The pit was filled…',
          options: ['before 340 CE', 'after 340 CE', 'exactly in 340 CE', 'no earlier than the floor'],
          answer: 1,
          explain: 'The coin is a terminus post quem: it must be minted before it can be dropped in, so the fill is later than 340.',
        },
        {
          q: 'Seriation\'s "battleship curves" chart…',
          options: ['the rise and fall of artifact style frequencies', 'shipwreck locations', 'stratigraphic depth', 'ancient population size'],
          answer: 0,
          explain: 'Styles wax and wane across assemblages; stacking the curves orders the assemblages relatively in time.',
        },
        {
          q: 'Rathje\'s Tucson Garbage Project demonstrated that…',
          options: ['landfills are mostly empty', 'recycling began around 1900', 'households\' self-reports diverge from their actual discards', 'middens are rare in the record'],
          answer: 2,
          explain: 'Sorting real garbage against surveys showed people misreport what they consume — material evidence over testimony.',
        },
        {
          q: 'LiDAR\'s archaeological superpower is…',
          options: ['reading buried inscriptions', 'dating organic material', 'restoring pottery', 'mapping structures beneath forest canopy without excavation'],
          answer: 3,
          explain: 'Laser pulses thread gaps in the canopy and return a ground surface littered with ancient architecture — no digging required.',
        },
      ] },
    ],
  },
  {
    id: 'anth-bioarchaeology-bones',
    title: 'Reading Bones: Bioarchaeology and the Lives of Past People',
    domain: 'Social Sciences',
    field: 'Anthropology',
    branch: 'Archaeology',
    tier: 'intermediate',
    concepts: [
      'The skeleton as a biological archive',
      'Estimating age and sex from the bones',
      'Stress markers: enamel hypoplasia, cribra orbitalia, Harris lines',
      'Diet reconstructed from δ13C and δ15N',
      'Mobility from strontium and oxygen isotopes',
      'The transition to farming, read in teeth and bones',
      'NAGPRA and the ethics of studying the dead',
    ],
    words: 1532,
    readMins: 8,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The methods lesson in this chapter treated artifacts: potsherds, middens, radiocarbon and the formation processes that scramble them. But the richest artifact on any site is a person. Bioarchaeology reads human skeletal remains as biological archives — a femur can record a childhood fever, a row of teeth can testify to a maize harvest, a strontium signature can prove its owner grew up two hundred kilometres from where they were buried. Where the archaeologist asks what people made and where they traded, the bioarchaeologist asks what they ate, what hurt, how hard they worked, how long they lived, and where they came from. It is the discipline where the statistical and the intimate meet: every data point was somebody\'s body.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Bioarchaeology is where "ancient people" become people. Populations stop being arrowheads and start being communities with hungry children, healed fractures, and widows buried with someone else\'s heirlooms. It is also where archaeology meets its hardest ethics: the people in the datasets have descendants, and several countries now have laws — the US Native American Graves Protection and Repatriation Act of 1990 foremost — that return ancestors and grave goods to their communities. The Ancient One (Kennewick Man), contested in court for two decades, was repatriated and reburied in 2017 after genomic evidence confirmed Native American affiliation: the science and the ethics are inseparable.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Every analysis starts with the biological profile. Age at death is estimated from wear sequences and epiphyseal fusion in the young — teeth erupt on a schedule, bone ends fuse in a known order — and from degenerative wear, pelvic surface remodeling and suture closure in adults. Sex is read mainly from the pelvis, whose childbirth-adapted shape differs visibly (the subpubic angle, the sciatic notch), with the skull as secondary evidence; DNA now supplements both where preservation allows. Population-level patterns emerge from assembling hundreds of such profiles: a cemetery with many deaths at ages 35-45 tells a different story of survival than one full of adolescents. The demographic reading is the foundation on which every richer inference stacks.',
      },
      {
        kind: 'para',
        text: 'Hardship leaves signatures, and enamel is the most legible. Linear enamel hypoplasia — horizontal grooves in tooth enamel — forms when childhood illness or malnutrition interrupts enamel production; unlike bone, enamel never remodels, so the groove is a permanent timestamp of a stress episode at a known age of childhood. Cribra orbitalia (porous lesions in the eye-socket roof) and porotic hyperostosis (same on the cranial vault) are associated with childhood anemia — often linked to iron deficiency, parasitic load or both. Harris lines, the fainter cousins, are dense striations in long-bone X-rays marking growth arrest and recovery. None of these names its cause — that is their standing limitation — but their frequencies map a population\'s childhood adversity: in cemetery after cemetery, the shift to settled village life raises the stress-marker frequency before the diet improves, an early lesson that "progress" is unevenly worn.',
      },
      {
        kind: 'para',
        text: 'Diet is the isotope story, and it rests on the old principle: you are what you eat — down to the isotope ratios in your tissues. Carbon has two stable isotopes worth archaeology\'s attention, and plants split by photosynthetic pathway: C3 plants (wheat, rice, most temperate flora) carry δ13C near −26‰, while C4 plants (maize, millet, tropical grasses) sit near −12‰ — a gap large enough that the carbon in your bone collagen betrays which bundle your staples came from. The maize signature is the classic: human collagen in pre-maize North American burials reads C3; after maize agriculture takes hold, it shifts dramatically C4-ward. Nitrogen tells the trophic story: δ15N rises by roughly 3-5‰ with each step up the food chain, so vegetarians read low, meat-eaters higher, marine-food eaters higher still — and nursing infants highest of all, which lets bioarchaeologists time WEANING from children\'s bones, one of the most poignant variables the method recovers.',
      },
      {
        kind: 'para',
        text: 'Mobility uses the same logic with a geological twist. Strontium isotopes (the 87Sr/86Sr ratio) vary with bedrock age, and strontium substitutes for calcium in teeth as they form — so tooth enamel carries a permanent signature of the GEOLOGY where someone grew up. Compare that signature with the local geology of the burial site: match means native, mismatch means an immigrant, and a map of the mismatch points toward home. The Iceman — Ötzi, dead in the Alps around 3300 BCE and found in 1991 — had his lifetime traced this way: tooth strontium places his childhood in one valley system, bone (which remodels through life) places his last decades in another, giving a biography in isotopes. Oxygen isotopes in tooth enamel do the same work through drinking water and are the standard tool for tracing migration in cemeteries — the "outsider grave" hypothesis gets tested rather than guessed from grave goods.',
      },
      {
        kind: 'formula',
        name: 'The trophic step in nitrogen',
        latex: '\\delta^{15}N_{consumer} \\approx \\delta^{15}N_{diet} + (3 \\text{ to } 5)\\permil',
        meaning: 'Each step up the food chain enriches tissue nitrogen by roughly 3-5‰. Plants read ~0-3‰ relative to air, herbivores ~3-7‰, carnivores ~6-12‰; nursing infants sit a further step above their mothers — the signature that lets weaning be timed.',
      },
      {
        kind: 'example',
        title: 'Reading a diet shift from one cemetery',
        steps: [
          'Early phase (hunter-gatherer): adult bone collagen δ13C ≈ −21‰, δ15N ≈ +9‰ — a C3 plant-and-terrestrial-meat diet.',
          'Later phase (farming village): δ13C rises toward −13‰ (C4 maize in the diet) while δ15N falls toward +6‰ (less meat, more plant protein).',
          'Children\'s bones in the later phase show enamel hypoplasia at weaning ages — the isotope data and the stress markers point the same direction: the farming transition moved diet composition faster than it secured childhood nutrition.',
          'Interpretation discipline: the numbers say WHAT changed; the archaeological context (storage pits, grinding stones, settlement density) says WHY — the two lines of evidence are read together or not at all.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'The farming-transition debate: skeletal evidence worldwide shows rising caries (fermentable carbohydrates), rising stress markers and often declining stature in early farming populations — the empirical core of the "agriculture was bad for your health" argument.',
          'Migration histories: isotope-mapped cemeteries have rewritten Roman, Viking-Age and medieval mobility narratives, showing women moving hundreds of kilometres while men stayed local in several regions.',
          'Forensic anthropology: the same profiling, isotope and trauma methods identify conflict victims and undocumented migrants — the archaeological application this book\'s methods lesson deferred.',
          'Public-health history: plague cemeteries (East Smithfield, London 1348-49) yield ancient DNA and demographic data that reshaped understanding of the Black Death\'s mortality and selection.',
          'Repatriation practice: NAGPRA inventories, cultural-affiliation determinations and consultation protocols are now standard professional training — the discipline\'s ethics is part of its method.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Five cautions govern the craft. Stress markers are nonspecific: enamel hypoplasia records THAT a child was stressed, not whether the stressor was measles, famine or weaning — confounding claims of cause with claims of occurrence ruins the inference. Caries does not mean sugar: any fermentable carbohydrate works, so early-farming caries rises reflect maize and wheat, not confectionery. Grave goods do not equal ethnicity — isotope evidence has repeatedly contradicted artifact-based identity assignments. One skeleton is a biography; claims about populations need the cemetery, not the specimen. And the dead are stakeholders: destructive sampling (DNA, isotopes) requires consent frameworks with descendant communities — a legal requirement under NAGPRA in the US and increasingly professional practice everywhere.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'bioarchaeology', def: 'The study of human skeletal remains from archaeological contexts to reconstruct health, diet, activity and identity in past populations.' },
          { term: 'enamel hypoplasia', def: 'Enamel grooves from childhood growth disruption — a permanent, dated record of physiological stress.' },
          { term: 'cribra orbitalia', def: 'Porous lesions in the eye-socket roof, associated in childhood with anemia and infection load.' },
          { term: 'δ13C', def: 'The carbon isotope ratio distinguishing C3 from C4 plant consumption — the maize detector.' },
          { term: 'δ15N', def: 'The nitrogen isotope ratio rising ~3-5‰ per trophic level — the meat, fish and weaning detector.' },
          { term: '87Sr/86Sr', def: 'The strontium isotope ratio fingerprinting local geology, archived in tooth enamel — the mobility detector.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Enamel hypoplasia is prized as a stress marker because enamel:',
            options: [
              'grows continuously like bone',
              'never remodels, so it preserves a permanent record of the childhood episode',
              'contains DNA',
              'is the hardest tissue in the body',
            ],
            answer: 1,
            explain: 'The non-remodeling property is the whole point: bone reworks itself, enamel does not — the groove is a timestamp that survives a lifetime.',
          },
          {
            q: 'A pre-Columbian burial shows bone collagen δ13C shifted from −21‰ to −13‰. The most likely dietary change is:',
            options: [
              'more fish',
              'the adoption of maize (a C4 plant) as a staple',
              'more wheat',
              'complete fasting',
            ],
            answer: 1,
            explain: 'C3 plants sit near −26‰ and C4 near −12‰; a C4-ward shift in human collagen is the classic maize-adoption signature.',
          },
          {
            q: 'Nursing infants show the HIGHEST δ15N values because:',
            options: [
              'they eat plants',
              'they sit one trophic step above their mothers, consuming her milk',
              'their bones are smaller',
              'oxygen isotope fractionation',
            ],
            answer: 1,
            explain: 'Each trophic step adds ~3-5‰; milk is a consumer tissue — the infant is effectively a carnivore on its mother, which is how weaning ages are reconstructed.',
          },
          {
            q: 'Mismatch between tooth-enamel strontium and local burial-site geology indicates:',
            options: [
              'poor preservation',
              'the individual grew up elsewhere and moved — an immigrant to the site',
              'a vegetarian diet',
              'high childhood stress',
            ],
            answer: 1,
            explain: 'Enamel archives childhood geology; bone remodels to the adult location — the mismatch is the mobility signal Ötzi\'s biography was built on.',
          },
        ],
      },
    ],
  },
]

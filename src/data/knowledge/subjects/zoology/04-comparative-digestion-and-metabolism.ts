/**
 * Knowledge Universe — Zoology — Chapter 04: Comparative Digestion & Metabolism
 * 2 lessons · ~3,496 words (salvaged increment)
 * fields: Zoology
 * legacy sources: x62-zoology-pass.ts
 *
 * Salvaged 2026-11-01 from the diverged local line (branch
 * backup-loop-20261101, pass X62). Carved against the Human A&P book
 * (human digestive depth stays there) and the Cell & Molecular Biology
 * bioenergetics lessons (cellular metabolism stays there) — this chapter
 * is the whole-animal, cross-phylum view.
 *
 * Taxonomy match: branches [Comparative Digestion, Comparative Metabolism]
 *
 * Lessons:
 *   04.1 bio-zoology-digestive-strategies — Digestive Strategies Across the Animal Kingdom
 *   04.2 bio-zoology-metabolic-scaling — Metabolic Scaling: Kleiber's Law, Q10 & the Economics of Endothermy
 */
import type { KnowledgeTopic } from '../../types'

/**
 * Knowledge Universe — Zoology — Chapter 04: Comparative Digestion & Metabolism
 * 2 lessons · ~3,496 words (salvaged increment)
 * fields: Zoology
 * legacy sources: x62-zoology-pass.ts
 *
 * Salvaged 2026-11-01 from the diverged local line (branch
 * backup-loop-20261101, pass X62). Carved against the Human A&P book
 * (human digestive depth stays there) and the Cell & Molecular Biology
 * bioenergetics lessons (cellular metabolism stays there) — this chapter
 * is the whole-animal, cross-phylum view.
 *
 * Taxonomy match: branches [Comparative Digestion, Comparative Metabolism]
 *
 * Lessons:
 *   04.1 bio-zoology-digestive-strategies — Digestive Strategies Across the Animal Kingdom
 *   04.2 bio-zoology-metabolic-scaling — Metabolic Scaling: Kleiber's Law, Q10 & the Economics of Endothermy
 */
import type { KnowledgeTopic } from '../../types'

export const zoologyCh04: KnowledgeTopic[] = [
  // Salvaged 2026-11-01 from the diverged local line (pass x62-zoology-pass, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.
  {
    id: 'bio-zoology-digestive-strategies',
    title: 'How Animals Eat: Digestive Strategies Across the Kingdom',
    domain: 'Life Sciences',
    field: 'Zoology',
    branch: 'Comparative Digestion',
    tier: 'intermediate',
    concepts: [
      'Feeding mechanisms: from filter feeding to pursuit predation',
      'The gastrovascular cavity: digestion without a gut',
      'The alimentary canal: one-way traffic and regional specialisation',
      'Gut length tracks diet: carnivore versus herbivore ratios',
      'Foregut versus hindgut fermentation',
      'The rumen: a fermentation vat with a microbiome',
      'Coprophagy and the caecal bargain',
    ],
    words: 1795,
    readMins: 9,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Every animal faces the same problem — energy and carbon locked inside other organisms — but the kingdom has solved it in a staggering number of ways. The human digestive system (the anatomy book\u2019s meal-to-molecule lesson) is just one design point in a space that runs from sponges filtering soup to owls swallowing prey whole to cattle running fifty-litre fermentation vats in their chests. This lesson tours that space, and the tour has a plot: digestion tracks diet, and diet tracks lifestyle, so a digestive tract read carefully enough tells you what an animal does for a living.',
      },
      { kind: 'heading', text: 'Feeding mechanisms: the front end' },
      {
        kind: 'para',
        text: 'Sponges are filter feeders of the purest kind: collar cells beat flagella to draw water through pores, and bacteria-sized particles are engulfed by the cell itself — intracellular digestion, the protozoan inheritance, still running in a multicellular body. Bivalves industrialise the same idea: a mussel pumps litres of water over ciliated gills that sort particles by size into mouth or rejection stream. Whale sharks and baleen whales scale filter feeding to tonnes of water per mouthful — the largest animals that ever lived eat some of the smallest food there is. At the other extreme, pursuit predators evolved jaws, teeth and venom; ambush predators evolved lures and traps (the anglerfish\u2019s rod, the antlion\u2019s pit); parasites evolved the ultimate simplification — a gut-and-absorption surface only, living in the digested food of their host.',
      },
      { kind: 'heading', text: 'Two architectures: cavity versus canal' },
      {
        kind: 'para',
        text: 'Cnidarians and flatworms run a gastrovascular cavity: one opening doubles as mouth and anus, and the sac doubles as a body-cavity fluid pump. Food is partly digested extracellularly in the cavity, then finished inside cells lining it — a genuine halfway house between intracellular digestion and the full extracellular pipeline. The evolutionary breakthrough that follows is the alimentary canal: a tube with two openings, mouth to anus, through which food moves one way. One-way traffic changes everything. Regions can specialise in sequence — storage, mechanical grinding, chemical attack, absorption, water reclamation — because downstream stages never have to share space with upstream ones. Earthworms already show the full regional logic: crop for storage, gizzard for grinding, intestine for absorption and its typhlosole fold that multiplies absorptive surface.',
      },
      {
        kind: 'callout',
        title: 'The design rule',
        text: 'One-way flow converts a digestion chamber into a production line. Every later complexity — stomachs, caeca, spiral valves — is regional specialisation stacked on the same tube.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Gut length tracks diet' },
      {
        kind: 'para',
        text: 'Herbivores eat walls; carnivores eat contents. Plant tissue is wrapped in cellulose cell walls that no vertebrate enzyme can break, so the herbivore strategy is to hold food long enough for symbiotic microbes to ferment it — and length is the cheapest holding capacity there is. Measured as multiples of body length, typical carnivore guts run 3–6×, omnivores around 6–8×, and grazing herbivores 10–25× and beyond; the intestine of a horse is roughly 30 metres in an animal under two metres tall. Carnivore guts stay short and fast because meat is nutrient-dense and easy to attack, and because slow meat is rotten meat — the trade-off runs the other way.',
      },
      { kind: 'heading', text: 'Where to ferment: foregut versus hindgut' },
      {
        kind: 'para',
        text: 'Microbial fermentation can be housed at two ends of the tube, and the choice has cascading consequences. Foregut fermenters — ruminants chiefly — expand the stomach region before the small intestine. The cow\u2019s rumen is a 50–100 litre vat at about pH 6, warm and anaerobic, holding perhaps 10¹¹ microbes per millilitre: bacteria, protozoa and fungi that hydrolyse cellulose to short-chain fatty acids the animal absorbs directly through the rumen wall. Foregut placement buys protein recycling (the microbes themselves are digested later, upgrading poor protein to high-quality microbial protein) at the price of losing nothing — even urea is recycled to saliva to feed the vat again. Hindgut fermenters — horses, rabbits, elephants — keep fermentation in the enlarged caecum and colon after the small intestine. They get the cellulose energy without a multi-chamber stomach, but the protein-recycling trick is out of reach: the microbes are downstream of the absorptive small intestine. Rabbits close the loophole with coprophagy — reingesting specialised soft faeces (caecotrophs) so the microbial protein passes through the small intestine a second time. The caecum is the hindgut fermenter\u2019s rumen, and its size relative to body tracks diet exactly as gut length does.',
      },
      {
        kind: 'formula',
        name: 'Retention-time budget of a ruminant',
        latex: 't_{\\text{rumen}} \\approx 20\\text{–}60\\ \\text{h} \\;\\gg\\; t_{\\text{small intestine}} \\approx 3\\ \\text{h}',
        meaning: 'A grass meal spends one to three days fermenting in the rumen before hours of enzymatic digestion — the time budget IS the digestion strategy, and it explains why ruminants chew cud: recharging surface area for the vat between grazing bouts.',
      },
      {
        kind: 'example',
        title: 'Read a gut like a resume: three mystery animals',
        steps: [
          'Animal A: short simple gut, no caecum, sharp recurved teeth, stomach pH near 1 — high-acid sterilising chemistry and fast throughput say meat-eater that swallows in chunks (a snake or large cat).',
          'Animal B: enormous caecum, hindgut massively enlarged, gut length ~12× body — hindgut fermenter on fibrous forage (a horse or rabbit; coprophagy would add the rabbit signature).',
          'Animal C: four-chambered stomach, cud-chewing jaw motion, long small intestine — foregut fermenter, protein-upgrading ruminant (cow, deer, antelope).',
        ],
      },
      { kind: 'heading', text: 'Chemical and mechanical arsenals' },
      {
        kind: 'para',
        text: 'Snakes and birds swallow prey whole and shift the mechanical work inward — the bird gizzard grinds with swallowed grit and pebbles, a mill inside the body. Ruminants regurgitate and re-chew instead. Venomous predators outsource killing AND pre-digestion to injected toxins: snake venoms are digestive enzyme cocktails (proteases, phospholipases) that begin dismantling prey before swallowing. The stomach acid barrier — pH 1.5–2 in carnivores — sterilises rot-prone meals, and scavengers push the trick furthest: vultures tolerate carcass loads that would kill most vertebrates. Herbivore saliva is bicarbonate-rich to buffer the rumen; carnivore saliva is thin and enzymatic. Even dental formulae are digestive equipment: the horse\u2019s perpetually growing molars are grinding stones for silica-laden grass.',
      },
      { kind: 'heading', text: 'Fluid feeders and the dilution problem' },
      {
        kind: 'para',
        text: 'A whole guild of animals drinks its dinner, and each has engineered around the fact that fluids are mostly water. Nectar is only 15–40% sugar, so a hovering hummingbird processes a daily volume that would drown a similarly sized grain-eater — its gut absorbs glucose within minutes of ingestion and its kidneys excrete the excess water load continuously; the water flux of a nectar-feeding bird can exceed its total body water several times per day. Blood-feeders invert the problem: concentrated protein but no vitamins and a flood of iron and water; the vampire bat and the tsetse fly run expanded excretory systems and iron-management chemistry. Sap-feeders — aphids, scale insects — must pass enormous volumes to harvest dilute phloem sugar, excreting the surplus as honeydew (which ants then ranch). Xylem feeders like spittlebugs face the emptiest fluid of all — barely a millimole of nutrients per litre — and pump hundreds of body volumes a day to make a living. The general rule: the thinner the food, the more the animal is plumbing.',
      },
      { kind: 'heading', text: 'Nitrogen: the recycled element' },
      {
        kind: 'para',
        text: 'Herbivore protein is scarce, and every successful plant-eater runs a nitrogen-conservation circuit. The ruminant returns urea from blood to the rumen via saliva and the rumen wall, where microbes split it back to ammonia and rebuild it into their own proteins — the animal effectively eats its own waste nitrogen twice. Hindgut fermenters recover less but still hold nitrogen longer when dietary protein is scarce. Termites, the cellulose-eating champions, host gut flagellates and bacteria that can even fix atmospheric nitrogen, letting a dead log feed a colony for decades. Marine herbivores on nitrogen-poor tropical algae show the same retention pattern: gut passage slows, urinary losses fall, and assimilation efficiency climbs. Nitrogen budgets explain behaviour too — the geese that graze quality grass swards rather than bulk roughage are optimising the same currency the rumen recycles.',
      },
      { kind: 'heading', text: 'Timing the pipeline' },
      {
        kind: 'para',
        text: 'Digestion has a tempo set by the food and the animal\u2019s thermal strategy. A python at 30 °C digests a meal in days; the same meal at 20 °C can rot faster than it digests, which is why cold-stressed snakes regurgitate. Ruminant passage is a two-speed system: fluid and small particles leave the rumen fastest (hours), while long fibres are retained and re-chewed for a day or more — measured with marker dyes, the discrimination is dramatic and tracks the fibrousness of the natural diet almost perfectly. Carnivore gastric emptying paces whole-meal processing: a big cat\u2019s stomach releases chyme to the intestine only as the acid load is neutralised, so a large kill digests over a day while a snack clears in hours. Eating rate, meal size and passage time are the three dials, and every feeding strategy in this lesson is some setting of them.',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Gastrovascular cavity', def: 'Single-opening digestive sac (cnidarians, flatworms) doing extracellular-then-intracellular digestion; doubles as a fluid skeleton.' },
          { term: 'Alimentary canal', def: 'Two-opening, one-way digestive tube allowing sequential regional specialisation from mouth to anus.' },
          { term: 'Rumen', def: 'The largest foregut fermentation chamber of ruminants — a 50–100 L microbial vat digesting cellulose into absorbable fatty acids.' },
          { term: 'Caecum', def: 'Blind diverticulum at the junction of small and large intestine; the hindgut fermenter\u2019s principal fermentation vessel.' },
          { term: 'Coprophagy', def: 'Reingestion of specialised faeces to recover microbial protein and B vitamins; the rabbit\u2019s answer to hindgut placement.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A rabbit reingests soft night faeces primarily to:',
            options: ['reabsorb water from the caecum', 'recover microbial protein and B vitamins upstream in the small intestine', 're-trace hindgut fermentation a second time', 'maintain gut flora after antibiotic doses'],
            answer: 1,
            explain: 'Hindgut fermentation sits downstream of the small intestine, so the microbial protein it produces cannot be enzymatically digested where absorption happens. Caecotrophs reroute that protein back through the small intestine — coprophagy is the fix for a plumbing decision.',
          },
          {
            q: 'Compared with a carnivore of equal size, a grazing herbivore\u2019s intestine is typically:',
            options: ['shorter, for faster throughput', 'similar in length but wider', 'several times longer, to extend fermentation residence time', 'looped into a gizzard for grinding'],
            answer: 2,
            explain: 'Cellulose digestion is slow microbial work; herbivore guts reach 10–25× body length versus 3–6× for carnivores, buying residence time for the symbionts — the very trade carnivores avoid because meat spoils.',
          },
          {
            q: 'The key advantage foregut fermentation has over hindgut fermentation is:',
            options: ['faster gut transit', 'microbial protein can be digested and absorbed in the downstream small intestine', 'no need for saliva', 'fermentation without microbes'],
            answer: 1,
            explain: 'In ruminants the vat sits before the small intestine, so the microbial cells themselves — high-quality protein — are later digested. Hindgut fermenters lose that protein in the faeces unless they are coprophagous.',
          },
          {
            q: 'A gastrovascular cavity differs from an alimentary canal in that it:',
            options: ['has two openings allowing one-way flow', 'combines mouth and anus in one opening and serves also as a hydrostatic chamber', 'secretes bile through ducts', 'houses symbiotic cellulose-digesting microbes'],
            answer: 1,
            explain: 'The cavity (cnidarians, flatworms) is a blind sac with one opening — which is also why it doubles as a body-cavity fluid pump. The canal\u2019s two openings are what make a specialised production line possible.',
          },
        ],
      },
    ],
  },

  // Salvaged 2026-11-01 from the diverged local line (pass x62-zoology-pass, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.
  {
    id: 'bio-zoology-metabolic-scaling',
    title: 'Size, Heat and Hunger: The Mathematics of Metabolism',
    domain: 'Life Sciences',
    field: 'Zoology',
    branch: 'Comparative Metabolism',
    tier: 'intermediate',
    concepts: [
      'Metabolic rate: the currency of energy budgets',
      'Kleiber\u2019s law: the three-quarter power rule',
      'Why big animals run cheaper per gram',
      'Surface-area, distance, and network explanations of ¾',
      'Basal metabolic rate and its measurement conditions',
      'Q10: the temperature sensitivity of life',
      'Endothermy, ectothermy and the energy bill',
      'Torpor and hibernation: turning the thermostat down',
    ],
    words: 1701,
    readMins: 9,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'A shrew must eat its own body weight every day or starve to death in hours; a python can go a year between meals. Both are metabolisms, running the same chemistry at wildly different intensities — and the differences follow rules so regular you can graph them. Metabolic scaling is where zoology becomes quantitative: body size sets the pace of life, and once you know an animal\u2019s mass and strategy, you can predict how much it eats, how fast its heart beats, how long it lives, and how it must behave to balance its energy books.',
      },
      { kind: 'heading', text: 'Metabolic rate and how it is measured' },
      {
        kind: 'para',
        text: 'Metabolic rate is the pace of energy use, and nearly every cellular process ends in heat and oxygen consumption, so the laboratory measures it as oxygen consumed per unit time (with a conversion factor near 20 joules per millilitre for a mixed diet) or as heat produced directly in a calorimeter. To compare fairly between animals the conditions must be standardised: for an endotherm, the basal metabolic rate (BMR) is measured at rest, fasting, in the thermoneutral zone — the temperature band where the animal spends no extra energy on heating or cooling. The equivalent for an ectotherm is the standard metabolic rate (SMR), necessarily quoted at a stated temperature, because an ectotherm\u2019s metabolism tracks the environment.',
      },
      { kind: 'heading', text: 'Kleiber\u2019s law: the three-quarter surprise' },
      {
        kind: 'para',
        text: 'If every gram of tissue burned energy at the same rate, metabolic rate would scale linearly with mass — proportionality to M¹. If what mattered were heat loss through skin, it would scale with surface area, as M^{2/3}. In 1932 Max Kleiber plotted mammals from mice to steers and found neither: whole-organism metabolic rate scales very close to M^{3/4}, across eight orders of magnitude and, with loosened fit, from bacteria to whales. Per gram, a small animal burns hot and a large one cool: gram for gram, a mouse runs roughly ten times the metabolic rate of a human. Almost every physiological pace follows the same drumbeat — heart rate, breathing rate and kidney filtration scale with negative fractional powers of mass, while lifespans and aortic radii climb as mass grows.',
      },
      {
        kind: 'formula',
        name: 'Kleiber\u2019s law',
        latex: 'B = B_{0}\\,M^{3/4} \\quad\\Longrightarrow\\quad \\frac{B}{M} = B_{0}\\,M^{-1/4}',
        meaning: 'Whole-body metabolic rate B (watts) rises as the three-quarter power of body mass M (kg); per-gram metabolism therefore falls as M^{-1/4} — the mouse pays more per gram than the elephant, by a factor set by the quarter-power.',
      },
      {
        kind: 'example',
        title: 'Use the law: from mouse to elephant',
        steps: [
          'A 20 g mouse has a resting metabolic rate of about 0.3 W. Predict the rate for a 3,000 kg elephant using quarter-power scaling.',
          'Mass ratio: 3,000 kg / 0.02 kg = 150,000. Metabolic ratio: 150,000^{3/4} = 10^{(5.176 × 0.75)} ≈ 8,000.',
          'Predicted elephant rate: 0.3 W × 8,000 ≈ 2,400 W.',
          'Measured values land near this (with scatter and a gentle correction for body temperature and composition) — and the per-gram ratio, 150,000^{1/4} ≈ 20, says each mouse gram really does burn ~20× faster.',
        ],
      },
      { kind: 'heading', text: 'BMR is the floor, not the day' },
      {
        kind: 'para',
        text: 'Basal rate is the idle, and daily life runs well above it. The field metabolic rate (FMR) — total daily energy spent by a free-living animal — is measured with doubly labelled water: the animal drinks water labelled with stable heavy isotopes of both hydrogen and oxygen; the hydrogen isotope washes out of the body only with water loss, while the oxygen isotope washes out with water AND carbon dioxide, so the two washout curves subtract to reveal CO\u2082 production — a direct meter of metabolism carried on the animal\u2019s back. The results map behaviour onto physiology: FMR runs roughly 2–3× BMR for sedentary animals, 3–5× during breeding season for birds feeding young, and 6–8× and beyond for hunting predators — a lactating seal or a foraging honeybee day sits near the top of the register. Scaling pervades FMR too, which is why a day of hunting costs a shrew several times its body mass in food while a lion\u2019s day costs a few kilograms.',
      },
      {
        kind: 'example',
        title: 'Balance one daily budget',
        steps: [
          'A 25 g nectar-feeding marsupial has BMR ≈ 0.35 W. Breeding-season field metabolism runs about 4× BMR ≈ 1.4 W.',
          'Daily energy: 1.4 W × 86,400 s ≈ 121 kJ.',
          'Nectar yields ≈ 16 kJ per gram of sugar — but nectar is only ~20% sugars, so ≈ 3.2 kJ per gram drunk.',
          'Required intake: 121 / 3.2 ≈ 38 g of nectar — over 1.5× body mass of fluid per day, which is exactly why nectar-feeders are continuous-feeders with high-throughput kidneys.',
        ],
      },
      { kind: 'heading', text: 'Why three-quarters? Three answers stacked' },
      {
        kind: 'para',
        text: 'The first answer is geometric but insufficient: heat leaves through surfaces, which grow as M^{2/3}, and surface-area limits alone predict the wrong exponent. The second answer is internal architecture: exchange surfaces inside the body — intestinal villi, alveolar surfaces, capillary beds — are fractal-like, area-filling networks whose geometry pushes the effective exponent toward ¾. The third answer is network economics: a beating heart drives blood through a branching network that must reach every cell while minimising pumping work; such networks, argued by West, Brown and Enquist in the late 1990s, have terminal units (capillaries) of fixed size across all mammals — only their number changes — and the mathematics of the optimal network delivers quarter-power scaling for flow, time and much else. The debate over the "why" continues; the "what" has been solid for ninety years.',
      },
      { kind: 'heading', text: 'Q10: temperature turns the dial' },
      {
        kind: 'para',
        text: 'Cool an ectotherm by 10 °C and nearly everything slows to a third or a quarter of its former rate. The factor of change over a 10-degree interval is the Q10, and for most biological rates it sits between 2 and 3 — chemistry\u2019s Arrhenius sensitivity showing through the biology. This is why a lizard is a different animal at noon and midnight, why insects must warm flight muscles before take-off, and why fish in cold water live slow, long, cheap lives. Endotherms decouple from the curve internally: body temperature is held near 37 °C regardless of weather, at a price developed next.',
      },
      {
        kind: 'formula',
        name: 'Q10 temperature coefficient',
        latex: 'Q_{10} = \\frac{R_{(T+10^\\circ\\mathrm{C})}}{R_{(T)}} \\approx 2\\text{–}3 \\ \\text{for metabolic rates}',
        meaning: 'The ratio of a biological rate R at two temperatures 10 °C apart; a Q10 of 2.5 means a 10-degree cooling slows metabolism to 40% — the lizard\u2019s day in one number.',
      },
      { kind: 'heading', text: 'Endothermy: the expensive luxury' },
      {
        kind: 'para',
        text: 'Endotherms — birds and mammals chiefly, with tuna, sharks and some insects achieving regional or part-time versions — pay five to fifteen times the ectotherm bill for the same lifestyle. The return on that bill is thermal independence: sustained aerobic power, nerves that never slow, activity in cold nights, winters and oceans. The machinery is unglamorous: brown fat that burns fuel purely for heat (a tissue the hibernation specialists among mammals keep in bulk), shivering as emergency muscle-turned-heater, insulation by fur, fat and feather — and a permanently high idle, which is why endotherms must eat daily what many reptiles eat monthly. The thermoneutral zone marks the comfortable band where neither shivering nor evaporative cooling adds to the bill; outside it, metabolic rate climbs linearly with the cold gap.',
      },
      {
        kind: 'callout',
        title: 'Small endotherm, brutal arithmetic',
        text: 'A shrew\u2019s grams of tissue burn at the hottest rate in the class, while its insulation is thinnest against the cold — so it must hunt almost without pause. Being small and warm-blooded means living on the cliff-edge of the energy budget; torpor is the safety rope.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Torpor and hibernation: scheduled austerity' },
      {
        kind: 'para',
        text: 'Torpor is a controlled, reversible depression of metabolism and temperature — an endotherm deliberately visiting the ectotherm condition. A hummingbird at night lets its 40 °C body fall toward 15 °C, cutting energy use by more than half over the fast; a garden dormouse in winter hibernation drops near 5 °C and breathes a few times a minute, burning fat at a twentieth of its active rate. Deep hibernation is not simple cold-collapse: it is cyclic, with periodic rewarming (arousals) that cost most of the winter\u2019s total budget, is timed by internal calendars rather than outside temperature alone, and is primed by brown-fat heating that restarts the heart and brain first. Bears, famously, are shallow hibernators — their body temperature falls only a few degrees, but they fast for months on fat while recycling nitrogen into protein.',
      },
      {
        kind: 'terms',
        items: [
          { term: 'BMR', def: 'Basal metabolic rate — the endotherm\u2019s resting, fasting, thermoneutral energy expenditure; the physiological idle.' },
          { term: 'SMR', def: 'Standard metabolic rate — the ectotherm equivalent, meaningless without a stated temperature.' },
          { term: 'Q10', def: 'Factor by which a rate changes over a 10 °C temperature change; ~2–3 for metabolism.' },
          { term: 'Torpor', def: 'Controlled drop of body temperature and metabolism, from overnight hummingbird economy to seasonal hibernation.' },
          { term: 'Thermoneutral zone', def: 'Ambient-temperature band where an endotherm spends no extra energy on thermoregulation.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Using Kleiber\u2019s law, if animal X is 16 times heavier than animal Y, X\u2019s whole-body metabolic rate is about:',
            options: ['16× Y\u2019s', '8× Y\u2019s', '4× Y\u2019s', '2× Y\u2019s'],
            answer: 1,
            explain: '16^{3/4} = (2^4)^{3/4} = 2^3 = 8. Whole-body rate rises eightfold — while per-gram rate falls to 16^{-1/4} = 1/2 of Y\u2019s: the heavy body runs cheaper per gram but costs more in total.',
          },
          {
            q: 'A lizard\u2019s metabolic rate falls from 40 units at 30 °C to 14 units at 20 °C. Its Q10 is approximately:',
            options: ['0.35', '1.4', '2.9', '26'],
            answer: 2,
            explain: 'Q10 = rate at the warmer temperature ÷ rate 10 °C cooler = 40/14 ≈ 2.9 — squarely in the standard 2–3 band, and the reason ectotherm life visibly changes pace with the weather.',
          },
          {
            q: 'Which statement about torpor is correct?',
            options: [
              'It is uncontrolled hypothermia, dangerous and accidental',
              'It is a regulated state, entered and reversed by physiology, that cuts energy costs during scarcity',
              'It occurs only in ectotherms',
              'It eliminates the need for brown fat',
            ],
            answer: 1,
            explain: 'Torpor is scheduled, regulated austerity — hummingbirds enter it nightly on cue, hibernators re-warm themselves periodically using brown fat. It is an endotherm borrowing the ectotherm\u2019s economy on purpose.',
          },
          {
            q: 'The surface-area explanation alone fails to account for Kleiber\u2019s ¾ exponent because:',
            options: [
              'surface area scales as M^1',
              'pure geometry predicts M^{2/3}, and internal fractal exchange surfaces and network constraints push the exponent further, toward ¾',
              'metabolic rate does not depend on heat loss',
              'big animals have proportionally more surface than small ones',
            ],
            answer: 1,
            explain: 'Heat-loss geometry gives 2/3 — measurably shallower than the observed ¾. The full story needs internal architecture: area-filling, fractal-like exchange networks and near-size-invariant terminal units (capillaries), which is the West–Brown–Enquist argument.',
          },
        ],
      },
    ],
  },

]

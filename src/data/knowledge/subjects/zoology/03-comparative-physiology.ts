/**
 * Knowledge Universe — Zoology — Chapter 03: Comparative Physiology
 * 2 lessons · ~3,243 words (salvaged increment)
 * fields: Zoology
 * legacy sources: x62-zoology-pass.ts
 *
 * Salvaged 2026-11-01 from the diverged local line (branch
 * backup-loop-20261101, pass X62) and placed per MASTER-SYLLABUS §6.6 —
 * this chapter is the tree's slot 3.1/3.2; slot 3.3 (Osmoregulation &
 * Excretion) remains on the standing queue.
 *
 * Taxonomy match: branches [Comparative Physiology]
 *
 * Lessons:
 *   03.1 bio-zoology-gas-exchange-designs — Gas Exchange Across Phyla: Gills, Tracheae, Lungs & Fick's Law
 *   03.2 bio-zoology-circulatory-designs — Circulation: Open, Closed & the Two-to-Four-Chamber Ladder
 */
import type { KnowledgeTopic } from '../../types'

/**
 * Knowledge Universe — Zoology — Chapter 03: Comparative Physiology
 * 2 lessons · ~3,243 words (salvaged increment)
 * fields: Zoology
 * legacy sources: x62-zoology-pass.ts
 *
 * Salvaged 2026-11-01 from the diverged local line (branch
 * backup-loop-20261101, pass X62) and placed per MASTER-SYLLABUS §6.6 —
 * this chapter is the tree's slot 3.1/3.2; slot 3.3 (Osmoregulation &
 * Excretion) remains on the standing queue.
 *
 * Taxonomy match: branches [Comparative Physiology]
 *
 * Lessons:
 *   03.1 bio-zoology-gas-exchange-designs — Gas Exchange Across Phyla: Gills, Tracheae, Lungs & Fick's Law
 *   03.2 bio-zoology-circulatory-designs — Circulation: Open, Closed & the Two-to-Four-Chamber Ladder
 */
export const zoologyCh03: KnowledgeTopic[] = [
  // Salvaged 2026-11-01 from the diverged local line (pass x62-zoology-pass, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.
  {
    id: 'bio-zoology-gas-exchange-designs',
    title: 'Breathing Underwater, Underground and at Altitude: Gas Exchange Designs',
    domain: 'Life Sciences',
    field: 'Zoology',
    branch: 'Comparative Physiology',
    tier: 'intermediate',
    concepts: [
      'Fick\u2019s law: the four levers of diffusion design',
      'Water versus air as a respiratory medium',
      'Gills, tracheae, book lungs and alveolar lungs',
      'The avian parabronchus: a one-way lung',
      'Respiratory pigments: haemoglobin and haemocyanin',
      'The oxygen dissociation curve and P50',
      'The Bohr shift and its exercise payoff',
      'Altitude champions: the bar-headed goose',
    ],
    words: 1724,
    readMins: 9,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Oxygen supply is a diffusion problem with a delivery budget, and the animal kingdom has engineered it in four completely different workshops — water-breathers with gills, air-breathers with lungs, insects with internal pipes that never use blood at all, and a few specialists with books, skins and even rear ends. The physics is one law; the designs that obey it are wildly various. This lesson owns that design space and its pigment chemistry; the human lung\u2019s breathing mechanics live in the anatomy book, and the fish gill\u2019s countercurrent story is told in full in the marine-biology lesson — both are cited here, not retold.',
      },
      { kind: 'heading', text: 'Fick\u2019s law: the designer\u2019s brief' },
      {
        kind: 'para',
        text: 'Every gas-exchange surface answers to the same equation: diffusion flux rises with the surface area and the concentration difference across the membrane, and falls with the diffusion distance. That gives evolution exactly four levers: make the area enormous, the membrane thin, the gradient steep, and the exchange cleverly arranged in space. Human alveoli deliver 70 square metres of surface behind a membrane 0.5 micrometres thick — a tennis court folded into a chest, wrapped in a tissue thinner than a soap bubble. Every design that follows is the same four levers, pulled in different proportions.',
      },
      {
        kind: 'formula',
        name: 'Fick\u2019s diffusion law (applied)',
        latex: '\\dot{V}_{O_2} \\;\\propto\\; \\frac{A \\cdot \\Delta P}{d}',
        meaning: 'Oxygen uptake scales with exchange area A, the partial-pressure difference ΔP across the membrane, and inversely with diffusion distance d — area up, distance down, gradient held high: the whole of respiratory design in one line.',
      },
      { kind: 'heading', text: 'Water is hard, air is easy' },
      {
        kind: 'para',
        text: 'Water holds about 30 times less oxygen than the same volume of air, is 50 times more viscous, and gives up that oxygen slowly — so water-breathers must move enormous volumes past their exchange surfaces and extract a high fraction of what passes. A trout at rest pumps roughly 20 litres of water per gram of oxygen extracted; a mammal moves a fraction of a litre of air for the same gain. This asymmetry shapes everything: gills are necessarily high-area, necessarily wet, and necessarily energy-hungry — and they collapse in air, their lamellae sticking together like wet tissue paper, which is why a fish on a dock suffocates in an ocean of oxygen. Air-breathing was the great vertebrate liberation: cheap ventilation, small exchange surfaces, and independence from flowing water — bought at the cost of keeping the exchange membrane wet in a drying world.',
      },
      { kind: 'heading', text: 'Three classic designs' },
      {
        kind: 'para',
        text: 'Gills stack thousands of lamellae into filaments, multiplying area while blood flows opposite to the water current — the countercurrent arrangement that lets fish strip 80% of the dissolved oxygen (the fish lesson owns that story). Insects took the plumbing direct: the tracheal system pipes air to every cell through spiracles and branching tubes, so that gas exchange needs no blood at all, and diffusion (assisted by active ventilation pumps in flying insects) does the delivery — an elegant system that nonetheless helps cap insect size at the scale where tube lengths still work. Arachnids book their lungs in pages: book lungs are stacked sheets of haemolymph-filled tissue with air between, a design old enough to have breathed before oxygen\u2019s great rises. Vertebrate lungs went inward and tidal: dead-end sacs (alveoli) ventilated in and out, with the residual volume keeping the surface never quite dry and never quite still.',
      },
      { kind: 'heading', text: 'The bird lung: airflow that never turns around' },
      {
        kind: 'para',
        text: 'Mammalian breathing is tidal — air in, air out along the same path — so fresh and stale air mix, and the last third of every breath never reaches exchange surface. Birds abandoned tides. Their lungs are tubes (parabronchi) with air forced one-way through them by a bellows system of nine air sacs: in flight, the sacs are squeezed by the wingbeat cycle itself, pushing a nearly continuous, single-direction stream through the lung, with blood crossing the flow at right angles. A bar-headed goose crossing the Himalaya at altitudes where a mammal would black out extracts oxygen with a machine that has no reverse gear. The design costs space (the sacs honeycomb the body) and returns extraction efficiency at partial pressures where tidal lungs fail.',
      },
      {
        kind: 'callout',
        title: 'Same law, four blueprints',
        text: 'Gill: thin + counterflow + huge area, in water. Trachea: distance-to-cell ≈ diffusion distance, no carrier. Book lung: stacked sheets, slow metabolism. Parabronchus: one-way flow + cross-current blood — each design is Fick\u2019s law solved for a different body plan.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Pigments: loading the freight' },
      {
        kind: 'para',
        text: 'Dissolved oxygen alone would carry almost nothing — blood plasma moves only about 0.3 mL O₂ per 100 mL. Respiratory pigments are metal-protein chelators that reversibly bind oxygen and multiply carrying capacity sixty-fold. Haemoglobin packs four haem groups, each an iron atom held in a porphyrin ring; the fourth binding event is easier than the first (cooperative binding), which is why the oxygen-loading curve is sigmoid — flat at low oxygen, steep in the middle, saturating at the top. Haemocyanin, the arthropod-and-mollusc answer, uses copper instead of iron and floats free in haemolymph rather than riding in cells — colourless when empty, blue when loaded, which is why lobster blood runs pale blue. A few specialists skip pigments almost entirely (antarctic icefish live in cold, oxygen-saturated water and make do with plasma — a fact that doubles as evidence of how cheap their cold lifestyle is).',
      },
      {
        kind: 'formula',
        name: 'P50 — the half-saturation pressure',
        latex: 'P_{50} = P_{O_2} \\ \\text{at which haemoglobin is 50% saturated}',
        meaning: 'The curve\u2019s anchor point: a low P50 means high oxygen affinity (loads easily, unloads reluctantly — the fetus, the high-altitude native); a high P50 means easy unloading where tissues run hot and acidic.',
      },
      {
        kind: 'example',
        title: 'Read the Bohr shift off the curve',
        steps: [
          'At resting tissue pH, your haemoglobin half-saturates near 27 mmHg — a left-shifted position that holds oxygen for delivery where capillary PO2 still sits around 40 mmHg.',
          'Working muscle produces CO2 and lactic acid: local pH falls by 0.3–0.5 units.',
          'The curve shifts right — P50 rises toward 35 mmHg — so at the SAME tissue PO2 the haemoglobin now unloads an extra 15–20% of its cargo.',
          'The Bohr shift is thus a built-in delivery valve: acidity (the signature of working tissue) is itself the signal that releases oxygen exactly where it is needed most.',
        ],
      },
      { kind: 'heading', text: 'The return freight: carbon dioxide' },
      {
        kind: 'para',
        text: 'Oxygen rides pigment inbound, but the outbound cargo is carbon dioxide, and it travels in three holds. A small fraction dissolves directly in plasma. A larger fraction binds to the amino ends of haemoglobin chains as carbaminohaemoglobin — which is why deoxygenated blood carries CO\u2082 better than oxygenated blood (the Haldane effect: unloading oxygen at the tissues primes the pigment to pick up CO\u2082, and loading oxygen in the lungs pushes CO\u2082 off). The overwhelming majority — about 70% — rides as bicarbonate: plasma CO\u2082 diffuses into the red cell, where carbonic anhydrase hydrates it to carbonic acid at a rate a million times faster than the uncatalysed reaction, and the acid dissociates to bicarbonate and protons. Bicarbonate then leaves the cell in exchange for chloride (the chloride shift), the protons are buffered by haemoglobin, and in the lungs the whole shuttle runs backwards. The CO\u2082 system is why blood pH is a breathing variable: hyperventilation blows off CO\u2082 and shifts the carbonate equilibrium alkaline, hypoventilation accumulates it and tips acidic — the respiratory compensation loop that works the same in a fish and a philosopher.',
      },
      {
        kind: 'formula',
        name: 'The bicarbonate shuttle',
        latex: '\\mathrm{CO_2 + H_2O} \\;\\xrightarrow{\\ \\text{carbonic anhydrase}\\ }\\; \\mathrm{HCO_3^- + H^+}',
        meaning: 'The red-cell reaction carrying ~70% of metabolic CO\u2082 as bicarbonate; chloride exchanges for bicarbonate across the cell membrane, and the whole equilibrium reverses in the lung — the Haldane effect couples the two directions to oxygen loading state.',
      },
      { kind: 'heading', text: 'Living at altitude' },
      {
        kind: 'para',
        text: 'At 6,000 metres the barometer reads half its sea-level value; at 9,000 — the cruising height of bar-headed geese over the Himalaya — a third. High-altitude designs stack the levers: more and finer alveoli, lungs ventilated harder (the geese hyperventilate in flight), haemoglobin with genetically shifted affinity (their beta-haemoglobin mutations move the curve left where it counts), denser capillary beds, and hearts that push a bigger stroke volume into thinner air. Human acclimatisation follows the same checklist over weeks — erythropoietin raises haematocrit, breathing resets its chemical set-point, muscle mitochondria multiply — which is why climbers stage their ascents and why the goose, doing it twice a year on inherited hardware, remains the altitude animal to beat.',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Parabronchus', def: 'The one-way gas-exchange tube of the bird lung, ventilated continuously by air-sac bellows.' },
          { term: 'Tracheal system', def: 'Insect internal air plumbing — spiracles to branching tubes — delivering O2 directly to tissues without blood.' },
          { term: 'Haemocyanin', def: 'Copper-based, haemolymph-dissolved respiratory pigment of arthropods and molluscs; blue when oxygenated.' },
          { term: 'P50', def: 'Oxygen partial pressure at 50% pigment saturation — the summary statistic of affinity.' },
          { term: 'Bohr shift', def: 'Rightward shift of the dissociation curve with falling pH/rising CO2 — automatic oxygen unloading in acid, working tissue.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which change would NOT increase diffusive oxygen uptake at a gas-exchange surface?',
            options: ['Thinning the exchange membrane', 'Increasing the surface area', 'Reducing the partial-pressure difference across the membrane', 'Arranging blood and water to flow in opposite directions'],
            answer: 2,
            explain: 'Flux is proportional to the gradient ΔP, so flattening the partial-pressure difference slows uptake — the other three (thin, wide, countercurrent) are exactly the levers Fick\u2019s law rewards.',
          },
          {
            q: 'Insects can deliver oxygen without any respiratory pigment because:',
            options: ['their metabolism is anaerobic', 'the tracheal system brings air directly to within diffusion distance of every cell', 'haemolymph carries oxygen dissolved at high concentration', 'their exoskeleton conducts oxygen'],
            answer: 1,
            explain: 'Tracheae pipe air inward to fine tracheoles that end on or inside tissues — the diffusion distance is managed in air, at the tissue, so no circulatory carrier is needed. It also ties achievable body size to tube physics.',
          },
          {
            q: 'A rightward shift of the oxygen-haemoglobin dissociation curve means:',
            options: ['higher affinity — oxygen is held more tightly', 'lower affinity — oxygen unloads at higher tissue PO2', 'the pigment cannot reach full saturation', 'more bicarbonate is formed in plasma'],
            answer: 1,
            explain: 'Right-shift = raised P50 = lowered affinity: pigment lets go sooner. In the Bohr shift this is exactly the point — acidic, CO2-rich working muscle gets the cargo first.',
          },
          {
            q: 'Water-breathers must move so much more respiratory medium than air-breathers because water:',
            options: ['is denser, so it stores more oxygen per litre', 'holds far less oxygen per unit volume and yields it slowly', 'cannot cross gill membranes', 'contains nitrogen that blocks binding sites'],
            answer: 1,
            explain: 'Water carries roughly 30× less oxygen than air by volume and releases it sluggishly — so gills must ventilate huge flows and extract a high fraction, which the countercurrent arrangement supplies.',
          },
        ],
      },
    ],
  },

  // Salvaged 2026-11-01 from the diverged local line (pass x62-zoology-pass, branch backup-loop-20261101) — ported verbatim into the subjects/ tree.
  {
    id: 'bio-zoology-circulatory-designs',
    title: 'Pumps and Pipework: Circulatory Designs Across the Animal Kingdom',
    domain: 'Life Sciences',
    field: 'Zoology',
    branch: 'Comparative Physiology',
    tier: 'intermediate',
    concepts: [
      'Open versus closed systems: the plumbing decision',
      'Why every animal above a millimetre needs a pump',
      'The heart\u2019s evolutionary ladder: two, three, four chambers',
      'Single and double circulation in fish and tetrapods',
      'The amphibian and reptile compromises',
      'The crocodilian shunt: a four-chambered heart with a bypass',
      'What complete separation bought birds and mammals',
    ],
    words: 1519,
    readMins: 8,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'Diffusion feeds only thin tissue — beyond roughly a millimetre, interior cells starve waiting for it. Every animal larger than that runs a pump, and the pump\u2019s architecture is a running commentary on what the animal needs oxygen FOR. The human heart and its cardiac cycle belong to the anatomy book; this lesson owns the comparative tree — open versus closed, two-chambered through four, single versus double circulation — and the engineering logic that strings those designs into an evolutionary series.',
      },
      { kind: 'heading', text: 'Open or closed: the first fork' },
      {
        kind: 'para',
        text: 'In an open circulatory system — arthropods and most molluscs — the heart pushes haemolymph into body cavities where it washes organs directly, sloshing through tissue spaces before draining back to the heart through openings (ostia) that valve shut on contraction. It is low-pressure, low-cost plumbing: no capillary network to maintain, haemolymph doing double duty as the fluid that fills the body cavity, and perfectly adequate for animals whose oxygen arrives by trachea anyway. A closed system — annelids, cephalopods, all vertebrates — seals blood in continuous endothelial tubes: heart → arteries → capillaries → veins → heart. The seal buys pressure, directional control, and an exchange surface where flow can be metered tissue-by-tissue; it costs vessel-building and a higher-maintenance pump. Cephalopods are the telling case: the only molluscs that closed their circulation, and also the only ones whose activity rivals fish — the fastest, sharpest snail-relatives in the sea needed vertebrate-grade plumbing to do it.',
      },
      { kind: 'heading', text: 'The heart ladder' },
      {
        kind: 'para',
        text: 'Fish run a two-chambered heart — atrium then ventricle — in single circulation: blood picks up oxygen at the gills, then travels the body in one unbroken loop, so the whole systemic network sees whatever pressure survives the gill capillary beds. It works, with the gills acting as a pressure-eating middleman, and it caps the delivery pressure available to tissues. Air-breathing vertebrates broke the loop into two circuits and invented pulmonary circulation: the lungs get low-pressure blood, the body gets a fresh pump. The amphibian three-chambered heart — two atria, one ventricle — accepts mixing of oxygenated and deoxygenated blood, but the mixing is less than a naive reading suggests: internal ridges and spiral flow in the single ventricle send the more oxygenated stream preferentially to the body, the less to the lungs. Most reptiles keep the same plan with a better wall: the ventricle is partially divided, and in crocodilians the septum completes — a true four-chambered heart — yet retains one more trick, the foramen of Panizza and right-aortic bypass, a shunt that can send deoxygenated blood around the lungs during long dives. Birds and mammals threw the shunt away: complete separation, two circuits, no mixing ever — the machinery that funds endothermy\u2019s enormous oxygen bills.',
      },
      {
        kind: 'formula',
        name: 'The cardiac series',
        latex: '\\text{fish } (2) \\;\\to\\; \\text{amphibian } (3) \\;\\to\\; \\text{reptile } (3\\tfrac{1}{2}) \\;\\to\\; \\text{crocodile/bird/mammal } (4)',
        meaning: 'Chamber counts climb with circulatory division: 2 = one loop through gills; 3+3½ = partial separation, mixing tolerated; 4 = full separation into pulmonary and systemic circuits at different pressures.',
      },
      {
        kind: 'example',
        title: 'Why four chambers is about pressure, not purity',
        steps: [
          'A fish ventricle pumps once per circuit — after the gills, pressure has already dropped through a capillary bed.',
          'Split the circuit and you can run two pressure regimes: a gentle pulmonary pump that must not burst delicate lung capillaries, and a powerful systemic pump behind thick walls.',
          'Complete septation means the systemic ventricle can reach high pressure WITHOUT leaking that pressure into the lungs — the wall IS the separation.',
          'Endothermy\u2019s five-to-fifteenfold oxygen demand rides on that high-pressure systemic delivery — which is why birds and mammals are, without exception, four-chambered.',
        ],
      },
      { kind: 'heading', text: 'The vessel tree: where the pressure goes' },
      {
        kind: 'para',
        text: 'Follow one pulse from the heart and watch the currency change. The aorta is low-area, high-velocity pipe where pressure is highest; branching multiplies total cross-sectional area at each generation until, in the capillaries, the bed\u2019s combined area is hundreds of times the aorta\u2019s and velocity drops to under a millimetre per second — slow enough for exchange. Elastic arteries smooth the pulse itself: their stretched walls store stroke volume in systole and release it in diastole (the Windkessel effect, the fire-hose trick that converts a beat into near-continuous flow), which is why blood still moves between heartbeats and why stiff aging arteries read as hypertension. On the venous side, the same area arithmetic runs in reverse — velocity climbs again — while pressure is at its floor, so veins are low-pressure, high-capacity reservoirs (over half the blood volume sits there) that need help getting home: valves plus skeletal-muscle squeeze in the legs, the respiratory pump of negative thoracic pressure, and smooth-muscle tone that can mobilise the reserve when demand spikes.',
      },
      { kind: 'heading', text: 'Exchange at the capillary: the Starling balance' },
      {
        kind: 'para',
        text: 'Capillaries are one-cell-thorough tubes where everything the body trades must cross, and the trading rule was written by Ernest Starling: fluid is pushed OUT by blood pressure (hydrostatic, highest at the arteriolar end) and pulled IN by the osmotic suction of plasma proteins — mainly albumin — that cannot leave the vessel (colloid osmotic pressure, constant along the length). At the arteriolar end hydrostatic force exceeds protein suction and fluid filters into the tissue; at the venular end the pressures cross and fluid returns. The balance is deliberately imperfect — slightly more leaves than returns — and the surplus, with escaped proteins, is collected by the lymphatic system, a one-way valved network running its own slow journey back to the great veins. When the balance breaks, the tissue swells: blocked lymphatics give elephantiasis, falling albumin gives the oedema of malnutrition, and capillary pressure overload gives the failing-heart swellings — the same arithmetic failing three different ways.',
      },
      {
        kind: 'formula',
        name: 'Starling filtration balance',
        latex: 'J_v = L_p\\,\\bigl[(P_c - P_i) - \\sigma(\\pi_p - \\pi_i)\\bigr]',
        meaning: 'Net fluid flux J_v across the capillary wall: hydraulic conductance L_p times the gap between hydrostatic pressures (P) and the oncotic pressures (π) held by proteins; positive at the arteriolar end (filtration), negative at the venular end (reabsorption).',
      },
      { kind: 'heading', text: 'Accessories and oddities' },
      {
        kind: 'para',
        text: 'Hearts come in series as well as in kinds. Earthworms run five contractile aortic arches — a row of pumps along the dorsal vessel. The systemic giants need help against gravity: a giraffe\u2019s heart is over half a metre thick-walled to push blood two metres up the neck, with valves and tight skin sleeves keeping the legs from pooling it all again. Cephalopods run two gill hearts beside each gill, pushing blood through the respiratory beds, ahead of the single systemic heart — the molluscan answer to double circulation. Fish themselves add accessory hearts: the sinus venosus and bulbous arteriosus smooth the pulse, and some species pump lymph with auxiliary chambers. Even the mammal keeps accessory pumps in miniature — the lymphatic system moves its cargo by skeletal-muscle squeeze and valve, because the heart\u2019s pressure never reaches the lymphatics.',
      },
      {
        kind: 'callout',
        title: 'One rule, many pumps',
        text: 'Every heart on this page solves the same problem — move fluid against resistance, in one direction, repeatedly without rest — with valves enforcing the direction and muscle enforcing the motion. Chamber number just answers a second question: how many pressure regimes does this animal\u2019s body need to run?',
        tone: 'insight',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Haemolymph', def: 'The combined blood-and-interstitial fluid of open systems, filling body cavities and washing organs directly.' },
          { term: 'Single circulation', def: 'One circuit per lap: heart → gills → body → heart, with the gill capillary bed eating delivery pressure.' },
          { term: 'Double circulation', def: 'Two circuits in series — pulmonary and systemic — allowing separate (gentle and forceful) pressure regimes.' },
          { term: 'Foramen of Panizza', def: 'The crocodilian opening between the aortic roots that, with the right-aortic shunt, routes blood around the lungs during dives.' },
          { term: 'Ostia', def: 'Valved inlets through which haemolymph re-enters an open-system heart when it relaxes.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The chief advantage of a closed over an open circulatory system is:',
            options: ['faster clotting', 'higher, controllable pressure with tissue-specific flow regulation through capillaries', 'less need for a heart', 'oxygen transport without pigments'],
            answer: 1,
            explain: 'Sealing blood in endothelium lets the pump build real pressure and meter it organ by organ — the control open systems lack. Cephalopods, the only closed-system molluscs, are also the only ones with fish-grade stamina.',
          },
          {
            q: 'In fish single circulation, blood passes through capillary beds:',
            options: ['once, at the gills', 'twice, gills then body', 'only in the body', 'only when swimming'],
            answer: 1,
            explain: 'Gill capillaries then systemic capillaries — two beds in series with one pump. The second bed therefore receives already-diminished pressure, the key constraint double circulation later removes.',
          },
          {
            q: 'Crocodilians can shunt blood away from the lungs during a dive using:',
            options: ['the sinus venosus', 'the foramen of Panizza and a right-aortic bypass', 'reversing the ventricle\u2019s contractions', 'their lymph hearts'],
            answer: 1,
            explain: 'The crocodile has a fully four-chambered heart BUT retains the foramen of Panizza plus a pulmonary-artery bypass — the diving shunt. It is the exception that shows what birds and mammals gave up by sealing the septum completely.',
          },
          {
            q: 'A giraffe\u2019s exceptionally thick-walled heart is an adaptation mainly for:',
            options: ['pumping blood up a two-metre neck against gravity', 'surviving rapid blood-pressure drops when it lowers its head to drink', 'both of these', 'neither — it is a scaling artifact of body mass'],
            answer: 2,
            explain: 'The systemic pump must push a hydrostatic column up the neck, and a retia-and-valve system must cushion the pressure surge when the head swings down two metres to drink — tall animals live at the extremes of circulatory plumbing.',
          },
        ],
      },
    ],
  },

]

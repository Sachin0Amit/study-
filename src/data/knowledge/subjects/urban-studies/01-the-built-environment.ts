/**
 * Knowledge Universe — Urban Studies — Chapter 01: The Built Environment
 * 3 lessons · ~4,373 words
 * field: Urban Planning
 * legacy sources: environment.ts, x60-library-org-pass.ts, x64-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Urban Planning]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 env-urban-planning-design — Urban Planning: Designing Cities That Work
 *   01.2 urb-urban-mobility-transit — Getting Around: Streets, Transit and the Contested Mobility of Cities
 *   01.3 urb-heat-island-design — The Urban Heat Island: Cities That Make Their Own Weather
 */
import type { KnowledgeTopic } from '../../types'

export const urbanStudiesCh01: KnowledgeTopic[] = [
  {
    id: "env-urban-planning-design",
    title: "Urban Planning: Designing Cities That Work",
    domain: "Environment & Sustainability",
    field: "Urban Planning",
    branch: "The Built Environment",
    tier: "core",
    concepts: [
      "zoning and its critique",
      "land use-transport feedback loop",
      "induced demand",
      "15-minute city and complete streets",
      "parking minimums and their cost",
      "NIMBY, YIMBY and participation",
    ],
    words: 1141,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Cities mostly feel like they happened by accident, yet almost every street you walk was shaped by deliberate decisions — a zoning map, a road width, a parking rule, a transit line someone fought over in a council chamber. Urban planning is the design practice behind those choices: the discipline that decides where homes, shops and factories may go, how people move among them, and what the public realm between buildings feels like. Why cities exist at all — the economics of agglomeration — belongs to urban sociology; this lesson is about the designer's toolkit.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Planning's core insight is that land use and transport form one feedback loop. Build a highway and development spreads to fill it; add a metro line and density crowds around the stations. Cities do not stay put when you plan them — they respond.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Zoning — dividing a city into districts by permitted use — is planning's sharpest instrument and its most criticized. American zoning traces to Euclid v. Ambler (1926), where the Supreme Court upheld separating uses; the aftermath was decades of single-use districts, apartment bans and minimum lot sizes that priced out all but detached houses. The critique is now mainstream: single-use zoning produces car-dependent sprawl, strips street life and functions as exclusion by other means. Reform responds by legalizing mixed use and the 'missing middle' of small apartment buildings.",
      },
      {
        kind: "para",
        text: "The loop runs both ways. New roads briefly relieve congestion — then cheaper car travel invites longer trips, further-out development and abandoned alternatives until congestion returns: induced demand, the finding that traffic grows to fill the capacity built for it. The same logic reversed explains transit-oriented development: put rail stations where you want density, and the density arrives. Planning is less about predicting this loop than about deciding which future you want it to produce.",
      },
      {
        kind: "para",
        text: "Contemporary urbanism has a direction: proximity. The 15-minute city, championed by Carlos Moreno and applied across Paris, aims for daily needs — home, work, school, food, care — within a short walk or cycle. Complete-street design gives every mode a safe place, replacing the car-only section with sidewalks, protected bike lanes and crossings. Barcelona's superblocks push the same logic: through traffic is routed around clusters of blocks whose interior streets become plazas and play space.",
      },
      {
        kind: "para",
        text: "The humblest lever may be parking. Cities across North America long required each building to provide set amounts of off-street parking; the cost — tens of thousands of dollars per structured space — was quietly bundled into rents, subsidizing driving and hollowing out walkable form. Cities from Buffalo to Minneapolis have abolished their minimums outright, discovering that when parking is no longer forced, less of it is built and land goes to homes instead. Prices, it turns out, work better than mandates.",
      },
      {
        kind: "para",
        text: "Plans collide with politics. Public hearings let those who dislike change — often existing homeowners — block it, the dynamic behind NIMBY obstruction of new housing; the YIMBY counter-movement argues abundance is the cure. Done well, participation is not a veto but co-design: charrettes where residents shape projects early, and participatory budgeting where neighborhoods spend real money. The planner's craft is telling the difference between hearing everyone and being captured by the loudest.",
      },
      {
        kind: "para",
        text: "The everyday toolkit is quieter than the debates. Comprehensive plans set long-term direction; codes translate it into rules — use-based Euclidean codes versus form-based codes that regulate building shape, frontage and street relationship instead of activity. Floor-area limits, setbacks, height districts and design guidelines together decide, long before an architect appears, whether a street becomes a wall of garage doors or a line of shopfronts.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Floor area ratio",
        latex: "\\text{FAR} = \\frac{A_{\\text{floors}}}{A_{\\text{lot}}}",
        meaning: "Total buildable floor area as a multiple of the lot area — the single number that most determines urban density.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: what a 2,000 square-metre lot can hold under FAR 3.0, and how much land a common parking requirement of one space per 100 square metres of floor area would consume.",
          "Recall: allowed floor area = FAR x lot area; spaces required = floor area / 100; each space with aisles occupies about 30 square metres.",
          "Apply: floor area = 3.0 x 2,000 = 6,000 m², requiring 60 spaces = 1,800 m² of parking — nearly the whole site.",
          "State the result: the parking requirement effectively consumes the lot, forcing an underground level or structured podium costing far more than the land — the arithmetic behind parking reform.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Paris rolling out 15-minute-city service geography school by school",
          "Barcelona superblocks reclaiming interior streets as public space",
          "Minneapolis and Buffalo eliminating parking minimums citywide",
          "Transit-oriented development crowding density around new metro stations",
          "Road diets converting four-lane arterials into safer three-lane complete streets",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Treat no plan as neutral: a technical-sounding rule — setback, parking count, height cap — encodes a choice about who can live there. Do not copy solutions across cultures; what works in Copenhagen may fail in Karachi. Beware participation that hears only the loudest, and master plans that assume the city will not respond to what is built. Planning errors are durable — a road width outlives the meeting that chose it by a century.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Zoning", def: "Legal division of land into districts with permitted uses and development rules." },
          { term: "Induced demand", def: "New road capacity generating new traffic until congestion returns." },
          { term: "15-minute city", def: "Proximity planning: daily needs reachable within a short walk or cycle of home." },
          { term: "Complete streets", def: "Streets designed for safe use by pedestrians, cyclists and transit, not just cars." },
          { term: "Parking minimum", def: "Mandated quantity of off-street parking per building type — now being abolished in many cities." },
          { term: "Floor area ratio", def: "Floor area permitted as a multiple of lot area." },
          { term: "Form-based code", def: "Regulation by building form and street relationship rather than land use." },
        ],
      },
      {
        kind: "quiz",
        items: [
          {
            q: "Induced demand means that:",
            options: [
              "roads become cheaper over time",
              "added road capacity tends to fill with new traffic",
              "public transit causes congestion",
              "city populations always fall",
            ],
            answer: 1,
            explain: "Cheaper travel invites longer trips and further-out development, so congestion returns — capacity is not a cure.",
          },
          {
            q: "The 15-minute city aims to:",
            options: [
              "cap city speed limits at 15 km/h",
              "place daily needs within a short walk or cycle of home",
              "shrink cities by 15 percent",
              "limit commutes to 15 minutes by car",
            ],
            answer: 1,
            explain: "Proximity is the goal — bringing services and work to neighborhoods rather than moving people across the city.",
          },
          {
            q: "A 2,000 m² lot under FAR 3.0 may contain at most:",
            options: ["2,000 m² of floor area", "3,000 m²", "6,000 m²", "20,000 m²"],
            answer: 2,
            explain: "FAR multiplies lot area by the ratio: 3.0 x 2,000 = 6,000 m² across all floors.",
          },
          {
            q: "Critics argue single-use zoning mainly produces:",
            options: [
              "too much mixing of activities",
              "car-dependent sprawl and exclusionary low density",
              "too many shopfronts on residential streets",
              "high-rise towers everywhere",
            ],
            answer: 1,
            explain: "Separating homes from everything else forces driving for every errand and bans affordable building types — sprawl by design.",
          },
        ],
      },
    ],
  },
  {
    id: 'urb-urban-mobility-transit',
    title: 'Getting Around: Streets, Transit and the Contested Mobility of Cities',
    domain: 'Environment & Sustainability',
    field: 'Urban Planning',
    branch: 'Mobility & Transit',
    tier: 'intermediate',
    concepts: [
      'The mode ladder: person-throughput per lane',
      'Frequency as freedom and the ridership-coverage tradeoff',
      'BRT: Curitiba\u2019s proof and Bogot\u00e1\u2019s scale',
      'Freeways, displacement and the revolts',
      'Congestion pricing: Singapore, London, Stockholm, New York',
      'Transit deserts and the equity of access',
      'Vision Zero and street design hierarchy',
    ],
    words: 1621,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'A city is a machine for putting people near each other, and every morning it must move them home again by evening. The design lesson earlier in this chapter owned the planning toolkit — zoning, complete streets, parking minimums and the demand effects of building roads — and the Transportation Engineering book owns traffic-flow theory and highway geometry. What remains, and what this lesson owns, is the mobility SYSTEM itself: which vehicles fit which streets, why some transit succeeds and most fails, how the street became contested ground, and how a handful of cities taught the world to price a road.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Mobility is the largest household expense after housing in car-dependent cities, road crashes kill about 1.19 million people a year worldwide (WHO, 2023), and the jobs a resident can reach in thirty minutes often predicts their income better than their diploma. Streets are also the largest public space a city owns — how they are allocated decides what kind of public life it has.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Every mode lives on a ladder measured in people per hour per direction of corridor. A single 3.5-metre lane of mixed car traffic delivers roughly 2,000-2,500 people per hour at practical saturation — generous by the standards of 1955, puny for a metropolis. The same lane handed to buses on dedicated right-of-way moves five to ten times that; Bogot\u00e1\u2019s TransMilenio has been measured moving over 45,000 people per hour per direction at peak, on rubber wheels. Fully segregated rail climbs past 40,000 routinely in the densest systems. Protected bicycle lanes, the surprise of the ladder, comfortably exceed a car lane\u2019s person-throughput at high volumes, and walking needs no lane at all. The ladder is why the land-use question the planning lesson raised is inseparable from mode choice: density pays for rail, rail earns density.',
      },
      {
        kind: 'para',
        text: 'What separates transit that people choose from transit that fails? Not technology — frequency, reliability and legibility. Jarrett Walker\u2019s planning rule is the field\u2019s clearest sentence: frequency is freedom. A bus every ten minutes needs no timetable; a bus every hour owns your day. The ridership-coverage tradeoff explains most network design arguments: service spread thin to cover every corner (coverage) serves politics, while concentration on dense corridors (ridership) serves the ladder — mature networks deliberately do both, and say so. The engineering of reliability is equally unglamorous: level boarding and off-board payment (each bus stop dwell of 20-30 seconds compounds into schedule death), dedicated lanes, and signal priority. Curitiba\u2019s 1974 bus rapid transit — tube stations with prepayment, boarding at platform level, dedicated ways — proved that a poor city could buy metro-grade throughput for bus-grade capital cost, and Bogot\u00e1 scaled the proof in 2000 into a system carrying over two million daily riders at its peak.',
      },
      {
        kind: 'para',
        text: 'The American twentieth century tells the opposite story: the Federal-Aid Highway Act of 1956 promised 41,000 miles of Interstate, and the routes ran disproportionately through the neighborhoods with least political power. Miami\u2019s Overtown — once called the Harlem of the South — lost tens of thousands of residents to I-95\u2019s right-of-way; Robert Moses\u2019 Cross-Bronx Expressway displaced similar numbers a generation earlier. The reaction became a planning classic in itself: San Francisco\u2019s Board of Supervisors canceled most planned freeways in 1959, and the Lower Manhattan Expressway died in the late 1960s under opposition led in part by Jane Jacobs, whose 1961 Death and Life of Great American Cities reframed the street as a social instrument. The finale nobody predicted: cities began subtracting. Seoul buried the Cheonggyecheon expressway in 2005 and daylighted the stream beneath it; San Francisco demolished the earthquake-damaged Embarcadero in 1991 and liked what replaced it. The induced-demand mechanics — why new lanes fill up — belong to the planning lesson; the history\u2019s verdict belongs here.',
      },
      {
        kind: 'para',
        text: 'Then the pricing revolution. Singapore charged a paper-licensing area fee in 1975 and replaced it in 1998 with Electronic Road Pricing — gantries that deduct per trip, variable by time. London charged five pounds to enter the center in February 2003, cutting traffic entering the zone by double-digit percentages and shifting trips to buses so visibly that the city\u2019s red buses became the policy\u2019s mascot (the charge now stands at fifteen). Stockholm ran a seven-month trial in 2006, watched traffic across the cordon fall by roughly a fifth, put it to a referendum — and won, because public opinion flipped only after residents experienced the emptier streets; the system became permanent in 2007. New York City, after fifteen years of legislation, began charging nine dollars at peak below 60th Street in January 2025 — the American first. The political science is consistent: road pricing is efficient, unpopular in advance, and grudgingly accepted once it visibly works.',
      },
      {
        kind: 'para',
        text: 'Equity runs through all of it. Transit deserts — neighborhoods dense enough to deserve service that lack it — convert into measurable job-access penalties; fare-free schemes from Tallinn to Kansas City raise ridership only modestly, while reinvesting the same money in frequency moves far more people. Street design now carries its own safety doctrine: Vision Zero, legislated first in Sweden in 1997, treats road deaths as a design failure rather than an operator error, and its flagship result — Oslo recording zero pedestrian deaths in 2019 — came from exactly the hierarchy the mode ladder implies: people walking first, then cycling and transit, private cars last. Electrification will clean the fleet; it does nothing for congestion, space or sprawl. The ladder still stands.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Person-throughput of a lane',
        latex: 'C_{people} = C_{vehicles} \\times \\bar{n}',
        meaning: 'Corridor capacity in people equals vehicles per hour times occupancy: a car lane at 2,000 veh/h × 1.2 ≈ 2,400 people, while the same pavement as a busway at 90 buses/h × 80 ≈ 7,200, and as heavy rail past 40,000. Mode choice is pavement allocation.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how many people an hour a city can move on one three-and-a-half-metre corridor under three allocations.',
          'As mixed traffic: ~2,000 vehicles/hour × 1.2 average occupancy ≈ 2,400 people.',
          'As a BRT busway: 60 buses/hour × 80 passengers ≈ 4,800 people; at TransMilenio\u2019s best-measured peaks, multiples of this.',
          'As protected cycling: at typical high-volume flows, more people per hour than the car lane — and walkers need none of it.',
          'Interpret: the same pavement differs by an order of magnitude in person-throughput. This one comparison, repeated street by street, is why cities that reallocate lanes to transit and bikes do not gridlock — they move more people.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'BRT as the developing-city workhorse: dedicated ways, level boarding, off-board fares — Lagos, Dar es Salaam and Guangzhou variants of the Curitiba template',
          'Congestion-pricing revenue earmarked for transit improvements — the Stockholm compact that flipped public opinion',
          'Shenzhen electrifying its entire bus fleet of roughly 16,000 vehicles by the end of 2017 — the air-quality dividend of the ladder',
          'Vision Zero street redesigns: protected intersections, raised crossings, speed humps — engineering the failures out',
          'Job-access maps (time to 100,000 jobs by transit) used by Chicago and Minneapolis to route service investments',
          'Curb management: pricing loading zones and bike-share docks as the mobility frontier moves to the last fifty metres',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not buy vehicles when the problem is frequency — a shiny bus hourly is a promise broken 59 minutes an hour. Do not price roads without offering alternatives: the equity backlash is real and earned. Do not confuse coverage (spreading service everywhere, thinly) with ridership (concentrating it where demand lives) — networks need both, declared honestly. And never treat walking and cycling trips as too small to count; in most cities they are a quarter or more of all trips and nearly invisible in traffic models built by drivers.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Person-throughput', def: 'People (not vehicles) moved past a point per hour per direction — the honest currency of corridor capacity.' },
          { term: 'Frequency as freedom', def: 'Walker\u2019s principle: service often enough to need no timetable converts transit from constraint to choice.' },
          { term: 'Ridership-coverage tradeoff', def: 'The network-design choice between concentrating service on dense corridors and spreading it for coverage; good systems declare their split.' },
          { term: 'BRT', def: 'Bus rapid transit: dedicated right-of-way, level boarding and off-board fares delivering rail-grade throughput at bus-grade cost.' },
          { term: 'Congestion pricing', def: 'Charging vehicles for entering a zone (Singapore ERP, London, Stockholm, NYC) to ration scarce road space by price.' },
          { term: 'Transit desert', def: 'A neighborhood whose density deserves frequent service that it lacks, translating directly into lost job access.' },
          { term: 'Vision Zero', def: 'The safety doctrine (Sweden 1997) that treats traffic deaths as preventable design failures, not accidents.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The person-throughput ladder matters because it shows that:',
            options: [
              'cars are always fastest',
              'the same pavement moves an order of magnitude more people as transit or bike lanes than as mixed car traffic',
              'walking has the highest capacity',
              'wider roads are the only answer',
            ],
            answer: 1,
            explain: 'Corridor arithmetic — vehicles × occupancy — is why lane reallocation increases total people moved.',
          },
          {
            q: 'Stockholm\u2019s congestion charge became permanent because:',
            options: [
              'the public loved it from the start',
              'opinion flipped after the 2006 trial let residents experience the emptied streets and funded improvements',
              'the EU required it',
              'cars got cheaper',
            ],
            answer: 1,
            explain: 'The referendum passed only after the trial; road pricing is unpopular in anticipation and grudgingly accepted in use.',
          },
          {
            q: 'Curitiba\u2019s BRT innovation was to deliver:',
            options: [
              'metro-grade throughput using bus technology — dedicated ways, tube stations, level boarding and prepayment',
              'the world\u2019s first subway',
              'free taxis',
              'magnetic levitation buses',
            ],
            answer: 0,
            explain: 'The 1974 system\u2019s engineering (off-board fare, platform-level doors, dedicated lanes) is what Bogot\u00e1 scaled to 45,000 people/hour.',
          },
          {
            q: 'The freeway revolts of the 1950s-60s were, at core, a fight over:',
            options: [
              'fuel taxes',
              'whose neighborhoods the highway system would cut through, and whether streets serve traffic or city life',
              'speed limits',
              'bus fares',
            ],
            answer: 1,
            explain: 'From San Francisco 1959 to the Lower Manhattan Expressway, the revolts named the displacement costs — Jacobs\u2019 street-as-social-instrument against the trip-counters.',
          },
        ],
      },
    ],
  },
  {
    id: 'urb-heat-island-design',
    title: 'The Urban Heat Island: Cities That Make Their Own Weather',
    domain: 'Social Sciences',
    field: 'Urban Planning',
    branch: 'Urban Climate & Design',
    tier: 'intermediate',
    concepts: [
      'Surface and canopy-layer heat islands',
      'Albedo, thermal mass and the absorption arithmetic',
      'Loss of evapotranspiration: latent versus sensible heat',
      'Canyon geometry, sky-view factors and warm nights',
      'Anthropogenic heat: air-conditioning feeding itself',
      'The design menu: cool roofs, trees, corridors, permeables',
      'Heat equity: the thermal legacy of redlining',
    ],
    words: 1611,
    readMins: 8,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'A city is a machine for concentrating people, capital and — as every July demonstrates — heat. On a summer evening, a leafy suburb may sit at 28°C while a downtown core twenty minutes away still reads 35°C, both under the same regional weather. That systematic difference is the urban heat island: cities manufacturing their own microclimate out of the materials they are built from and the energy they spend. The planning lesson in this book treated cities as designed artifacts — streets, zoning, density. This lesson treats them as thermal artifacts, because once you read a city as a heat machine, the remedies stop being vague greenery and become an engineering menu with measured numbers attached.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Heat kills more people in a typical year than floods, storms and lightning combined in most countries, and the heat island multiplies the exposure exactly where people are densest. The 1995 Chicago heat wave left roughly 700 excess deaths; the 2003 European summer is credited with tens of thousands. The effect compounds a warming climate rather than replacing it: every fraction of a degree the urban fabric adds is a fraction the hospital system pays for at peak.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Two heat islands are measured, and they peak at different hours. The surface heat island is the difference between the land-surface temperatures satellites record — a sunlit dark roof can run 20°C hotter than a treed park at noon, and surface differences are largest by day. The canopy-layer heat island is the air temperature a person actually feels, measured between street level and the rooftops; it peaks in the evening, hours after sunset, because that is when the city\'s stored daytime heat is still radiating out while the countryside has already cooled. The EPA\'s summary numbers for a city of a million or more: annual mean air temperature 1-3°C warmer than surroundings, with clear calm evenings differing by as much as 12°C. The evening number is the one that shortens sleeps and strains hearts — warm nights are the urban climate\'s signature health burden.',
      },
      {
        kind: 'para',
        text: 'The physics is a budget of gains and losses, and the city loses the important ones. First, albedo: fresh asphalt reflects only 5-15 percent of sunlight, dark roofing similar, so the built surface absorbs most of the solar input — a property the materials lesson in engineering would call a deliberate design choice repeated a million times. Second, thermal mass: concrete and masonry store heat all day and release it all night, flattening the diurnal cycle the countryside enjoys. Third, and most consequential, evapotranspiration: vegetation converts incoming energy into the latent heat of evaporating water instead of sensible warmth — a tree is a solar-powered air conditioner; replace it with pavement and that same energy becomes measurable temperature. Fourth, canyon geometry: tall walls on narrow streets give each surface a small view of the cold sky, so longwave radiation bounces between facades instead of escaping — the sky-view factor is the geometric knob, and it is why dense high-rise cores stay warm at night. Fifth, anthropogenic heat: vehicles, industry and, in a self-defeating loop, air conditioners pumping indoor heat outdoors — on hot afternoons the AC exhaust itself can add measurably to the canyon air.',
      },
      {
        kind: 'para',
        text: 'The consequences run through energy, air and bodies. Peak electricity demand rises steeply with temperature as cooling loads climb, and the heat island sharpens the peak — the grid\'s most expensive and most polluting hours. Higher temperatures also accelerate ozone chemistry: ground-level ozone, the irritant of summer smog, forms faster in heat, so a hotter city is a harder-to-breathe city even with unchanged emissions. And the health burden is not distributed equally. A 2020 study of 108 US cities (Hoffman, Shandas and Pendleton) found that 94 percent showed formerly redlined neighborhoods running hotter than their non-redlined counterparts — in the worst cases by up to 7°C at the surface — a thermal echo of the disinvestment the housing lesson covers historically: those neighborhoods got the highways, the industry and the fewest trees. The heat island is thus a case study in how yesterday\'s maps draw today\'s microclimates.',
      },
      {
        kind: 'para',
        text: 'The design menu attacks each mechanism with a number attached. Reflective surfaces: raising roof albedo from 0.10-0.15 to 0.60 or more — the "cool roof" — cuts absorbed solar power by more than half, which is why California\'s building code has required cool roofs on new flat commercial roofs since 2005. Vegetation: shade intercepts sunlight before the pavement sees it (shaded surfaces can run 10-20°C cooler than peak-exposed asphalt), while evapotranspiration cools the air itself; a mature street tree is estimated to deliver cooling comparable to several room air conditioners running all afternoon. Urban geometry: ventilation corridors — Stuttgart\'s planning code protects the paths that let Alpine downdrafts flush the valley basin — and mid-rise street sections that open sky views. Water and permeability: permeable pavements and retention ponds evaporate like vegetation. None of these is exotic; the discipline is composing them where the exposure map says they matter.',
      },
      {
        kind: 'formula',
        name: 'Absorbed solar power per unit area',
        latex: 'P_{abs} = (1 - \\alpha) \\times S',
        meaning: 'With reflectivity α and solar irradiance S. A dark roof (α ≈ 0.10) absorbs 90% of ~1,000 W/m² at noon — 900 W/m²; a cool roof (α ≈ 0.70) absorbs 300 W/m². The 600 W/m² difference is the design margin.',
      },
      {
        kind: 'example',
        title: 'One roof, scaled to a school',
        steps: [
          'A school has a 100 m² dark flat roof, α ≈ 0.10. At noon irradiance 1,000 W/m² it absorbs (1 − 0.10) × 1,000 = 900 W/m², i.e. 90 kW of heat loading the classrooms below.',
          'A cool-roof retrofit at α ≈ 0.70 absorbs 300 W/m² — 30 kW. The difference is 60 kW, comparable to twenty window AC units running at full load.',
          'That 60 kW is heat that never enters the classrooms, never needs an electricity purchase, and never leaves a condenser into the street — mitigation beats compensation because it acts before the energy is converted.',
          'Scaled to a district of a thousand such roofs, midday surface heat loading drops by ~60 MW-equivalent, and the evening canopy temperature that followed from it drops with a lag — the evening heat island is yesterday noon\'s energy arriving on schedule.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Building codes: California Title 24 requires aged-reflectance cool roofs on new flat roofs; Ahmedabad\'s 2013 Heat Action Plan — South Asia\'s first — pairs cool-roof programs with warning systems and cut all-cause mortality in its pilot years.',
          'Heat officers and action plans: cities from Athens to Miami to Melbourne now appoint chief heat officers; early-warning plus cooling-center protocols follow the epidemiology, not the thermometer.',
          'Street-tree equity programs: planting budgets increasingly follow the exposure maps — former redlined districts first — turning the Hoffman finding into an allocation rule.',
          'Ventilation-corridor planning: Stuttgart and Hong Kong zone for wind paths in their master plans, treating moving air as infrastructure.',
          'Resilience engineering: cooling centers, white-roof school programs and permeable schoolyards double as flood infrastructure — one intervention, two climates.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Five confusions recur. The heat island is not global warming — it is a local, built superposition, and it can be reversed by design while the climate trend continues (and vice versa: mitigation menus differ). "Just plant trees" ignores water budgets, species selection and placement — a tree shading a west-facing wall outperforms three on the east lawn; the skill is targeted canopy, not total canopy. High-albedo pavements trade glare and pedestrian radiant comfort for surface cooling; the win is real but condition-specific. The canopy heat island peaks in the EVENING — measuring at noon understates the health-relevant difference. And surface-temperature maps from satellites are not air-temperature maps: the exposure map that matters for people is built from air measurements and thermal comfort modeling, not the prettiest satellite image.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'urban heat island', def: 'The systematic warmth of a built-up area relative to its rural surroundings, largest in the evening air of dense cores.' },
          { term: 'albedo', def: 'The fraction of incident sunlight a surface reflects; fresh asphalt ~0.10, cool roof coatings 0.60-0.85.' },
          { term: 'evapotranspiration', def: 'The combined evaporation and plant transpiration that converts solar energy into latent heat instead of sensible warmth.' },
          { term: 'sky-view factor', def: 'The fraction of open sky visible from a point; small in street canyons, which traps longwave radiation at night.' },
          { term: 'cool roof', def: 'A high-reflectance, high-emittance roofing assembly that cuts absorbed solar power and indoor heat gain.' },
          { term: 'Heat Action Plan', def: 'A city protocol coupling heat-wave forecasting, public warning, cooling centers and outreach to the vulnerable.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The canopy-layer urban heat island typically peaks:',
            options: [
              'at solar noon',
              'several hours after sunset, as stored heat radiates out',
              'at dawn',
              'during rain',
            ],
            answer: 1,
            explain: 'Thermal mass releases the day\'s absorption through the evening while rural ground has already cooled — the warm night is the urban signature.',
          },
          {
            q: 'A dark roof with albedo 0.10 versus a cool roof at 0.70 under 1,000 W/m² noon sun differs in absorbed power by:',
            options: ['100 W/m²', '300 W/m²', '600 W/m²', '900 W/m²'],
            answer: 2,
            explain: '(1−0.10)×1000 = 900 versus (1−0.70)×1000 = 300: a 600 W/m² margin — the arithmetic behind cool-roof codes.',
          },
          {
            q: 'Trees cool a street through TWO mechanisms, which are:',
            options: [
              'shading surfaces and evapotranspiration into latent heat',
              'wind speed-up and albedo increase',
              'carbon sequestration and nitrogen fixation',
              'condensation and cloud seeding',
            ],
            answer: 0,
            explain: 'Canopy intercepts sunlight before it strikes pavement, and leaf-level evaporation converts incoming energy to latent heat — interception plus phase change.',
          },
          {
            q: 'The Hoffman et al. (2020) redlining study found formerly redlined neighborhoods in US cities:',
            options: [
              'cooler, because of denser housing',
              'hotter in 94 percent of 108 cities, up to 7°C at the surface',
              'exactly the same temperature',
              'hotter only in coastal cities',
            ],
            answer: 1,
            explain: 'Disinvestment left those districts with more pavement, more industry and fewer trees — yesterday\'s housing maps survive as today\'s microclimates.',
          },
        ],
      },
    ],
  },
]

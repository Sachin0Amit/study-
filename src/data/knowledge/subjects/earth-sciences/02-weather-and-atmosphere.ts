/**
 * Knowledge Universe — Earth & Atmospheric Sciences — Chapter 02: Weather & Atmosphere
 * 2 lessons · ~2,052 words
 * field: Meteorology
 * legacy sources: physical-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Meteorology]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 met-atmosphere-weather — Why Weather Happens: The Atmosphere at Work
 *   02.2 met-storms-forecasting — Storms, Fronts and How Forecasts Are Made
 */
import type { KnowledgeTopic } from '../../types'

export const earthSciencesCh02: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'met-atmosphere-weather',
    title: 'Why Weather Happens: The Atmosphere at Work',
    domain: 'Physical Sciences',
    field: 'Meteorology',
    branch: 'Weather and Atmosphere',
    tier: 'core',
    concepts: [
      'The layered atmosphere and where weather lives',
      'Pressure differences make wind',
      'Convection and rising air',
      'Humidity and the dew point',
      'Condensation, clouds and fog',
      'Global circulation and the desert belts',
    ],
    words: 1015,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Weather is the atmosphere rearranging heat. Sunlight lands unevenly — tropics versus poles, land versus sea — and the working fluid of air responds: it expands, rises, slides sideways, and dumps its water on the way. Every gust, cloud and downpour you will ever experience traces back to a few governing ideas: pressure, density, convection and the stubborn physics of water vapor. This core Meteorology lesson assembles those ideas into a working picture of why the sky behaves as it does, with one useful number — the lapse rate — doing most of the math.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Weather drives decisions from aviation to agriculture, and its basic vocabulary — pressure, fronts, dew point — is what every forecast assumes you know. The same ideas also explain why storms intensify and why deserts sit where they do.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Nearly all weather lives in the troposphere, the lowest layer, holding about 80 percent of the air and nearly all its water vapor. It is roughly 8 kilometers deep at the poles and 17 at the equator, and it cools with height at about 6.5 degrees Celsius per kilometer — climb a mountain and you walk into the freezer.',
      },
      {
        kind: 'para',
        text: 'Air pressure — about 1,013 hectopascals at sea level, and anything from ~870 in a super-typhoon to ~1,084 in a Siberian high — falls and rises with heating and density. Nature flattens the differences: the pressure-gradient force pushes air from high toward low pressure, and once Earth\'s rotation bends the flow through the Coriolis effect, winds blow along the isobars of a weather map rather than straight across them.',
      },
      {
        kind: 'para',
        text: 'Sunlight warms the ground, the ground warms the air, and warm air — being less dense — rises. Convection is the atmosphere\'s elevator. A rising parcel expands into lower pressure and cools about 10 degrees Celsius per kilometer; sink it back down and it warms the same way. A layer of warm air aloft that blocks this elevator makes a stable, hazy day; release it and afternoon cumulus boil up.',
      },
      {
        kind: 'para',
        text: 'Water vapor is weather\'s fuel. Warm air carries more of it — roughly 7 percent more per degree Celsius of warming, a fact with consequences for downpours in a warmer world. Relative humidity compares what air holds with what it could hold; the dew point — the temperature at which it saturates — measures the moisture itself. A dew point of 20 degrees Celsius feels muggy anywhere on Earth.',
      },
      {
        kind: 'para',
        text: 'Cool air to its dew point and water condenses onto microscopic nuclei — dust, salt, smoke. Clouds are that process made visible, and fog is a cloud with its base on the ground. Crucially, condensation releases latent heat, warming the parcel and boosting its buoyancy — the feedback that lets a small cloud grow into a thunderhead.',
      },
      {
        kind: 'para',
        text: 'Scale the same physics planet-wide and you get the general circulation. Overheated equatorial air rises, rains itself out, dries, and sinks near 30 degrees latitude — the belt where the Sahara, Arabian and Australian deserts cluster. The trade winds, the mid-latitude westerlies and the high-altitude jet streams are all cogs in the same heat engine.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the base height of a cumulus cloud when the surface air is 30 degrees Celsius with a dew point of 18.',
          'Recall: rising unsaturated air cools about 10 degrees per kilometer, and condensation begins when temperature meets the dew point.',
          'Apply: the gap is 30 − 18 = 12 degrees, and at 10 degrees per kilometer that requires 1.2 kilometers of ascent.',
          'State the result: expect flat-bottomed cumulus with bases near 1,200 meters — the altitude where gliders circle and fair-weather clouds live.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Pilots compute cloud base from temperature and dew point before every flight',
          'Meteorologists read isobar spacing on surface maps to gauge wind strength',
          'Building engineers manage indoor dew point to prevent condensation and mold',
          'Farmers watch dew point and pressure trends to time planting, spraying and harvest',
          'City heat planners map afternoon convection to design parks and cooling corridors',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Wind is named for where it comes FROM — a west wind blows from the west toward you. High relative humidity at cold temperatures is not "humid" air: 90 percent humidity at 5 degrees carries less water than 40 percent at 30. And clouds are liquid droplets or ice, not visible vapor — the vapor itself is always invisible.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Troposphere', def: 'The lowest atmospheric layer, holding most air and water vapor, where weather happens.' },
          { term: 'Lapse rate', def: 'How fast temperature falls with height — about 6.5 degrees Celsius per km on average.' },
          { term: 'Pressure-gradient force', def: 'The push from high toward low pressure that starts the wind.' },
          { term: 'Coriolis effect', def: 'The apparent deflection of moving air caused by Earth\'s rotation — right in the Northern Hemisphere.' },
          { term: 'Dew point', def: 'The temperature at which air becomes saturated — an absolute measure of moisture.' },
          { term: 'Condensation nuclei', def: 'Tiny particles on which water vapor condenses to form droplets.' },
          { term: 'General circulation', def: 'The planet-wide pattern of cells and winds that moves heat from tropics toward poles.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Deserts cluster near 30 degrees latitude because:',
            options: ['The ocean there is too cold for rain', 'Dry air sunk from the equatorial circulation returns to the surface there', 'Mountains block every storm track', 'The Coriolis effect cancels rainfall'],
            answer: 1,
            explain: 'Air that rose and rained out at the equator descends, warms and dries near 30 degrees — the subtropical highs.',
          },
          {
            q: 'Surface air is 30 degrees with a dew point of 18. Cumulus bases form near:',
            options: ['180 meters', '1,200 meters', '3,000 meters', '5,500 meters'],
            answer: 1,
            explain: 'The 12-degree spread at 10 degrees per kilometer of dry cooling puts the lifting condensation level at 1.2 km.',
          },
          {
            q: 'Rising air cools primarily because:',
            options: ['It moves away from the Sun', 'It expands as pressure falls with altitude', 'Clouds shade it', 'It mixes with cold air above'],
            answer: 1,
            explain: 'Expansion against lower pressure does the work — the adiabatic cooling that sets the ~10 degrees/km rate.',
          },
          {
            q: 'Which measurement best tells you how muggy the air feels?',
            options: ['Relative humidity', 'Barometric pressure', 'Dew point', 'Wind chill'],
            answer: 2,
            explain: 'Dew point tracks actual moisture; relative humidity swings with temperature even when moisture is unchanged.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'met-storms-forecasting',
    title: 'Storms, Fronts and How Forecasts Are Made',
    domain: 'Physical Sciences',
    field: 'Meteorology',
    branch: 'Weather and Atmosphere',
    tier: 'intermediate',
    concepts: [
      'Air masses and fronts',
      'The mid-latitude cyclone life cycle',
      'Thunderstorms and supercells',
      'Hurricanes: heat engines of the tropics',
      'From observation to forecast model',
      'Chaos and the limits of prediction',
    ],
    words: 1037,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'In 1918 the Norwegian school of meteorologists — Vilhelm Bjerknes and his son Jacob — gave weather its first genuinely scientific working model: battles of air masses along fronts. A century later those same fronts still decorate every weather map, but the forecast itself comes from another world: satellites, radar and supercomputer models that digest millions of observations to simulate the atmosphere days ahead. This intermediate lesson connects the classic picture of storms — fronts, cyclones, supercells, hurricanes — with the modern machinery of numerical weather forecasting and the chaos that sets its limits.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Weather forecasts are among the most valuable public services ever built: agriculture, aviation, energy trading and emergency response all run on them. Knowing how a forecast is made — and why it comes with a probability — turns it from folklore into a decision tool.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'An air mass takes the character of its birthplace: continental polar air is cold and dry, maritime tropical air warm and humid. Where they meet, the boundary — a front — organizes the weather. A cold front, steep and fast, forces moist air up violently: a line of heavy squalls, then clearing. A warm front, sloping roughly 1 in 200, lifts air gently: broad sheets of steady rain for hours.',
      },
      {
        kind: 'para',
        text: 'The mid-latitude cyclone is a wave on the polar front. Over two to five days it deepens, wraps its warm and cold fronts around a falling central pressure, then occludes and dies as it drifts northeast. It is the everyday storm of Europe and North America — the comma shape on every satellite loop.',
      },
      {
        kind: 'para',
        text: 'A thunderstorm needs moisture, instability and a lifting trigger. Ordinary cells die within an hour on their own cool outflow; add wind shear — wind changing speed or direction with height — and the storm tilts, separating updraft from rain, becoming a supercell. Its rotating updraft can then spin up tornadoes, rated EF0 to EF5 on the Enhanced Fujita scale.',
      },
      {
        kind: 'para',
        text: 'A hurricane is not a front but an engine. Over sea water warmer than about 26.5 degrees Celsius, clusters of thunderstorms organize around a calm eye, releasing latent heat that drops the pressure and tightens the winds — categories 1 to 5 on the Saffir-Simpson scale. Cut off the warm water and the engine dies within days over land, which is why water — surge, rain, flooding — usually does the killing, not wind alone.',
      },
      {
        kind: 'para',
        text: 'A forecast starts from a snapshot: tens of thousands of surface stations, ships and aircraft, radiosonde balloons launched twice daily worldwide, radar, and satellites watching the whole planet. Data assimilation folds those millions of numbers into a simulated atmosphere, and the model — fluid dynamics plus radiation and cloud physics — marches it forward in steps of minutes.',
      },
      {
        kind: 'para',
        text: 'Edward Lorenz discovered in 1963 that tiny differences in starting conditions grow exponentially — the butterfly effect — so no single run can be trusted far out. Forecast centers therefore run ensembles of 20 to 50 perturbed runs; the spread between them measures confidence. Skill keeps climbing — today\'s 5-day hurricane track error is about a third of its 1990s value — but roughly two weeks remains the ceiling for any specific forecast.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the Saffir-Simpson category of a tropical cyclone with sustained winds of 145 miles per hour, and its fate at landfall.',
          'Recall: the scale runs Cat 1 (74-95 mph), 2 (96-110), 3 (111-129), 4 (130-156), 5 (157+); hurricanes feed on warm ocean water.',
          'Apply: 145 mph falls inside the 130-156 band — category 4. Crossing the coast cuts the fuel supply and adds friction.',
          'State the result: winds decay quickly after landfall, but category-4 storm surge and inland rainfall remain the deadliest hazards — evacuation decisions are made for water, not wind.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Phone-app rain percentages are read straight off ensemble model output and its spread',
          'Airlines reroute around forecast cyclones and jet-stream headwinds to save fuel',
          'Emergency managers order evacuations days ahead using cone-of-uncertainty graphics',
          'Doppler radar detects rotation inside supercells, sounding tornado sirens with minutes of lead time',
          'Energy traders price electricity and natural gas from ensemble temperature forecasts',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not confuse weather prediction with climate projection: weather is an initial-value problem valid for days, climate a boundary-value question of decades and averages — a separate StudyVerse lesson covers climate models. Also, the forecast cone shows where the storm center may go, not the storm\'s width; and "30 percent chance of rain" means three in ten equivalent forecasts produce rain at your spot.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Front', def: 'The boundary between two air masses — cold fronts bring violent short weather, warm fronts long gentle rain.' },
          { term: 'Occlusion', def: 'The late stage of a cyclone where the cold front catches the warm front.' },
          { term: 'Supercell', def: 'A long-lived thunderstorm with a rotating updraft, the parent of most strong tornadoes.' },
          { term: 'Storm surge', def: 'Seawater piled ashore by a hurricane\'s winds and low pressure — often the deadliest hazard.' },
          { term: 'Ensemble forecast', def: 'Many parallel model runs with perturbed starting conditions; spread indicates uncertainty.' },
          { term: 'Data assimilation', def: 'Blending millions of observations into the model\'s starting state.' },
          { term: 'Butterfly effect', def: 'Lorenz\'s finding that tiny initial differences grow exponentially, limiting deterministic prediction.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A fast-moving cold front typically brings:',
            options: ['Hours of gentle drizzle', 'A brief line of violent storms, then clearing', 'Clear skies and light winds', 'Fog'],
            answer: 1,
            explain: 'The steep frontal surface slams moist air upward in a narrow band — squalls first, cool clear air behind.',
          },
          {
            q: 'Hurricanes weaken over land mainly because:',
            options: ['Friction from forests', 'The warm-ocean energy source is cut off', 'They run out of air', 'Mountain ranges reflect them'],
            answer: 1,
            explain: 'The engine runs on latent heat from warm seawater; without it, the storm spins down within days.',
          },
          {
            q: 'Forecast centers run ensemble models mainly to:',
            options: ['Make the forecast run faster', 'Quantify uncertainty from chaotic sensitivity to starting conditions', 'Average out instrument errors only', 'Satisfy television graphics'],
            answer: 1,
            explain: 'Since Lorenz, we know small starting errors grow — the ensemble spread is the honesty in the forecast.',
          },
          {
            q: 'Since the 1990s, 5-day hurricane track forecasts have become roughly:',
            options: ['Three times more accurate', 'Unchanged', 'Twice as uncertain', 'Only possible for category 5 storms'],
            answer: 0,
            explain: 'Better models, satellites and assimilation cut the 5-day track error to about a third of its 1990s value.',
          },
        ],
      },
    ],
  },
]

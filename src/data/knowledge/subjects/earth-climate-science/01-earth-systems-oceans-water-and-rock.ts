/**
 * Knowledge Universe — Earth & Climate Science — Chapter 01: Earth Systems: Oceans, Water & Rock
 * 2 lessons · ~2,169 words
 * field: Earth Systems
 * legacy sources: environment.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Earth Systems]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 env-water-cycle — The Water Cycle and Freshwater Scarcity
 *   01.2 env-ocean-currents-chemistry — The Global Ocean: Currents, Chemistry and Life
 */
import type { KnowledgeTopic } from '../../types'

export const earthClimateScienceCh01: KnowledgeTopic[] = [
  {
    id: 'env-water-cycle',
    title: 'The Water Cycle and Freshwater Scarcity',
    domain: 'Environment & Sustainability',
    field: 'Earth Systems',
    branch: 'Hydrology',
    tier: 'core',
    concepts: [
      'Reservoirs and residence times',
      'Evaporation, condensation and precipitation',
      'Runoff and infiltration',
      'Groundwater and aquifers',
      'Watersheds and the water balance',
      'Physical and economic water scarcity',
    ],
    words: 1154,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: "The water cycle is Earth's endlessly repeating distillery: the sun evaporates about 500,000 cubic kilometres of water each year, mostly from the oceans, and rain and snow return nearly all of it. Of the planet's water, 97 percent is salty; of the fresh remainder, two-thirds is locked in ice and nearly all the rest is groundwater. Rivers, lakes and soil moisture — the pools civilisation actually drinks from — hold a sliver of one percent.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'More than two billion people face high water stress for part of every year, and agriculture claims roughly 70 percent of all withdrawals. Every drought response, irrigation plan and river treaty is applied hydrology.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: "Every pool of water, from the ocean to a leaf, is a reservoir linked to the others by fluxes of evaporation, rain, rivers and groundwater. Residence time — how long a molecule stays put — is stock divided by throughflow: about 3,000 years in the deep ocean, centuries to millennia in aquifers, but only nine days in the atmosphere, which holds barely a week and a half of the world's rain.",
      },
      {
        kind: 'para',
        text: 'Solar energy drives the engine. Evaporation from the oceans supplies about 86 percent of the total, and the vapour releases its latent heat when it condenses into clouds — a planetary heat pump moving energy toward the poles. Globally, precipitation balances evaporation almost exactly, but the two are offset in space and time: the sea loses more than it gains, and the land runs a surplus that rivers carry back.',
      },
      {
        kind: 'para',
        text: 'Where rain strikes the ground it either infiltrates into soil or runs off across the surface, and that split decides everything downstream. Infiltration depends on texture, plant cover and how wet the profile already is; intense rain on baked or paved ground becomes overland flow that carves gullies and floods rivers. Hydrologists call soil moisture and the water plants transpire green water, and the rivers, lakes and aquifers feeding taps blue water.',
      },
      {
        kind: 'para',
        text: "Below the water table every crack and pore is saturated, and geology organises this hidden ocean into aquifers — unconfined ones recharged quickly from above, confined ones sealed between impermeable layers. Half the world's drinking water comes from underground. Some, such as the Ogallala beneath the American Great Plains, hold fossil water recharged thousands of years ago; pumping them is mining, because what is withdrawn will not return on any human timescale.",
      },
      {
        kind: 'para',
        text: 'A watershed is the entire land area draining to one outlet, and the natural accounting unit for water: for any catchment, precipitation equals evapotranspiration plus streamflow plus the change in storage. The equation looks trivial, but each term is hard to measure — evapotranspiration cannot be observed directly over large areas, and storage shifts silently underground. Closing the balance is the everyday craft of hydrology.',
      },
      {
        kind: 'para',
        text: "Scarcity comes in two kinds. Physical scarcity means a basin's renewable water is already over-allocated — the Colorado, the Indus and the rivers feeding the Aral Sea no longer arrive in most years. Economic scarcity means water exists but money, infrastructure or institutions cannot deliver it, the situation across much of sub-Saharan Africa. The Falkenmark index flags stress below 1,700 cubic metres per person per year, absolute scarcity below 500.",
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Catchment water balance',
        latex: 'P = ET + Q + \\Delta S',
        meaning: 'Precipitation equals evapotranspiration plus runoff plus storage change; averaged over years, the storage term shrinks toward zero.',
      },
      {
        kind: 'formula',
        name: 'Residence time',
        latex: 'T_r = \\frac{S}{\\bar{Q}}',
        meaning: 'Time a molecule spends in a reservoir: stock divided by mean throughflow — days in the atmosphere, millennia in the deep ocean.',
      },
      {
        kind: 'formula',
        name: 'Falkenmark water-stress index',
        latex: 'F = \\frac{R}{N}',
        meaning: 'Renewable water per person per year; below 1,700 cubic metres signals stress, below 500 absolute scarcity.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the annual runoff of a 2,000 square-kilometre catchment with 1,100 mm of rain, 600 mm of evapotranspiration and negligible storage change, plus per-capita supply for its 3 million residents.',
          'Recall the governing idea: the water balance Q = P − ET, and the Falkenmark index, renewable supply divided by population.',
          'Apply: Q = 1,100 − 600 = 500 mm of runoff, or 0.5 m over 2.0 billion square metres, giving 1.0 billion cubic metres a year; shared among 3 million people that is about 333 cubic metres each.',
          'State the result: the basin yields about one cubic kilometre of blue water a year, and at 333 cubic metres per person it sits deep in absolute scarcity, below the 500 line.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Reservoir and hydropower scheduling that turns snowpack forecasts into release plans',
          'Irrigation design and crop choice in basins where every cubic metre is allocated',
          'City water-supply planning blending rivers, groundwater and desalination',
          'Transboundary treaties, from the Nile to the Mekong, dividing shared river flows',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Water withdrawn is not water consumed — most irrigation and cooling water returns to the cycle, warmer or saltier but not gone. Averages mislead: a basin can be wet on paper yet run short every summer, because timing and storage decide scarcity. And groundwater depletion stays invisible until wells fail.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Evapotranspiration', def: 'The return of water to the atmosphere by evaporation and transpiration through plants.' },
          { term: 'Infiltration', def: 'Passage of water from the surface into the soil; its rate sets the runoff-infiltration split.' },
          { term: 'Aquifer', def: 'A water-bearing layer of rock or sediment; fossil aquifers are not recharged on human timescales.' },
          { term: 'Water table', def: 'The depth below which soil and rock pores are saturated.' },
          { term: 'Blue and green water', def: 'Blue water flows in rivers, lakes and aquifers; green water sits in soil and passes through plants.' },
          { term: 'Falkenmark index', def: 'Renewable water per person per year; 1,700 cubic metres marks stress, 500 scarcity.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The atmosphere holds about 13,000 cubic kilometres of water and precipitation removes 505,000 each year. Average residence time is closest to:',
            options: ['9 days', '9 weeks', '9 months', '9 years'],
            answer: 0,
            explain: 'Stock over throughflow: 13,000 ÷ 505,000 of a year is about nine days.',
          },
          {
            q: 'A catchment receives 900 mm of rain and loses 650 mm to evapotranspiration. Annual streamflow is about:',
            options: ['150 mm', '250 mm', '650 mm', '900 mm'],
            answer: 1,
            explain: 'With storage steady, Q = P − ET = 900 − 650 = 250 mm.',
          },
          {
            q: 'Economic water scarcity describes a situation where:',
            options: [
              'rivers have run completely dry across the region',
              'groundwater is being pumped faster than rain recharges it',
              'water is present but money, infrastructure or institutions fail to deliver it',
              'per-capita supply exceeds 1,700 cubic metres per year',
            ],
            answer: 2,
            explain: 'Physical scarcity is over-allocation of supply; economic scarcity is a delivery failure.',
          },
          {
            q: 'Pumping the Ogallala aquifer faster than it recharges is best described as:',
            options: [
              'sustainable yield management',
              'raising the water table by reducing pressure',
              'a closed loop returning every pumped litre',
              'water mining of fossil groundwater that cannot return on human timescales',
            ],
            answer: 3,
            explain: 'Fossil aquifers recharge over millennia; overdraft is mining, like extracting ore.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: "Within this domain, follow with soil health — organic matter is the catchment's hidden sponge — and planetary boundaries, which counts freshwater among the transgressed limits. Climate modelling explains why a warmer atmosphere intensifies floods and droughts.",
        tone: 'path',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'env-ocean-currents-chemistry',
    title: 'The Global Ocean: Currents, Chemistry and Life',
    domain: 'Environment & Sustainability',
    field: 'Earth Systems',
    branch: 'Oceanography',
    tier: 'intermediate',
    concepts: [
      'One ocean, wind-driven gyres',
      'Thermohaline circulation: the conveyor',
      'Upwelling: the ocean fertilizer pumps',
      'Salinity and the carbonate buffer',
      'Acidification under way',
      'Vertical zones of life',
    ],
    words: 1015,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'The ocean is one connected body of water covering 71 percent of the planet and holding 97 percent of its water — and it is never still. Winds drag its surface into great circular gyres, while differences in temperature and salinity drive a slow overturning that carries water on thousand-year journeys from the North Atlantic to the Pacific. The same water quietly absorbs roughly a quarter of each year\'s carbon emissions, changing its own chemistry as it does. This intermediate Earth Systems lesson covers the currents, the chemistry and the life they support — and why what happens in the ocean never stays in the ocean.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The ocean sets Earth\'s climate thermostat, feeds over three billion people who rely on seafood for a major protein source, and is acidifying as it absorbs our CO2. Fisheries, storms and coastlines all answer to how the water moves.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Surface currents are the wind\'s work. Persistent trade winds and westerlies drag water into five great subtropical gyres — clockwise in the Northern Hemisphere, counterclockwise in the south. Their western edges run fast, narrow and deep: the Gulf Stream off Florida moves some 30 million cubic meters of water per second, over a hundred Amazon rivers, carrying tropical heat that keeps Western Europe milder than its latitude suggests.',
      },
      {
        kind: 'para',
        text: 'The deep circulation is driven by density. In the Greenland and Labrador seas, cold water chilled and salted by winter ice formation sinks and creeps south along the ocean floor; the loop resurfaces in the Pacific and Indian oceans centuries later. This thermohaline conveyor redistributes heat planet-wide, and its Atlantic arm — the AMOC — is watched closely because meltwater freshening the North Atlantic could weaken it.',
      },
      {
        kind: 'para',
        text: 'Where wind blows surface water away, cold, nutrient-rich water rises to replace it: upwelling. The coasts off Peru, California and Namibia are upwelling engines — nitrate and phosphate from the deep fertilize plankton blooms that feed the world\'s richest fisheries, including the Peruvian anchoveta. A few percent of ocean area supplies roughly a fifth of the marine fish catch. When trade winds slacken in an El Nino, the pump stalls and the anchoveta fishery collapses.',
      },
      {
        kind: 'para',
        text: 'Seawater is a broth of dissolved ions averaging 35 grams of salt per kilogram — mostly sodium and chloride — wrapped in a self-regulating buffer. Added CO2 reacts with water and carbonate to form bicarbonate, which is why the ocean can absorb about a quarter of human emissions. The buffer is not free: the reaction consumes the carbonate ions that shelled life needs.',
      },
      {
        kind: 'para',
        text: 'Since pre-industrial times the surface ocean\'s pH has slipped from about 8.2 to 8.1 — a 0.1-unit drop meaning roughly 30 percent more hydrogen ions. Oyster hatcheries on the U.S. West Coast have already lost broods to corrosive upwelled water, and corals build more slowly as carbonate declines. High-emission projections reach 0.3 units by 2100, a near-doubling of acidity.',
      },
      {
        kind: 'para',
        text: 'Life sorts by depth. Phytoplankton, the base of nearly every marine food web, live in the sunlit top 100 to 200 meters; below, the twilight zone runs on the rain of debris from above — the biological pump detailed in our carbon-budget lesson. Even the sunless floor surprises: hydrothermal vents discovered in 1977 host tube worms and shrimp farmed by chemosynthesis, no sunlight required.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: what a further 0.3-unit drop in ocean pH by 2100 would mean for acidity.',
          'Recall: pH is logarithmic — a shift of n units multiplies the hydrogen-ion concentration by 10 to the power n.',
          'Apply: 10^0.3 ≈ 2.0, so the hydrogen-ion concentration very nearly doubles.',
          'State the result: a "mere" 0.3-unit fall is a near-doubling of acidity — which is why shell-building organisms track CO2 emission scenarios so closely.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Fisheries agencies watch El Nino and upwelling indices to set anchoveta and sardine quotas',
          'Oyster and clam hatcheries on the Pacific coast now monitor pH and carbonate daily',
          'Climate scientists track AMOC indicators because a weaker conveyor would reshape European weather',
          'Coral-reef managers pair local pollution control with global CO2 projections for reef survival',
          'Shippers and sailors still ride the Gulf Stream and Agulhas currents to save fuel and days',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The ocean absorbing CO2 is not a harmless free service — the buffering that protects pH consumes carbonate. Surface gyres (wind-driven, fast) and the thermohaline conveyor (density-driven, millennium-slow) are different machines. And the pH change from 8.2 to 8.1 looks tiny because the scale is logarithmic — each 0.1 is about a 30 percent jump in acidity.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Gyre', def: 'A large wind-driven circular surface current around an ocean basin.' },
          { term: 'Thermohaline circulation', def: 'The global overturning driven by density — sinking cold, salty water and slow deep return flows.' },
          { term: 'AMOC', def: 'The Atlantic Meridional Overturning Circulation — the conveyor\'s Atlantic arm, a key climate knob.' },
          { term: 'Upwelling', def: 'Wind-driven rise of cold, nutrient-rich water that fertilizes surface life.' },
          { term: 'Ocean acidification', def: 'The pH decline caused by absorbed CO2 reacting to form carbonic acid and bicarbonate.' },
          { term: 'Photic zone', def: 'The sunlit upper 100-200 meters where photosynthesis powers marine food webs.' },
          { term: 'Chemosynthesis', def: 'Building biomass from chemical energy, as at hydrothermal vents, with no sunlight.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Western Europe is milder than its latitude suggests largely because:',
            options: ['It is closer to the equator', 'The Gulf Stream carries tropical heat northward', 'Its mountains block cold air', 'Its winds blow only from the south'],
            answer: 1,
            explain: 'The Gulf Stream and its extension release enormous amounts of tropical heat to the North Atlantic atmosphere.',
          },
          {
            q: 'Upwelling zones support huge fisheries because rising water brings:',
            options: ['Warm water', 'Dissolved oxygen from the air', 'Nitrate and phosphate nutrients', 'Freshwater'],
            answer: 2,
            explain: 'Deep water is cold but nutrient-rich; fertilized phytoplankton feed everything above them.',
          },
          {
            q: 'The pH drop from 8.2 to 8.1 means the ocean is now about:',
            options: ['1 percent more acidic', '10 percent more acidic', '30 percent more acidic', 'Twice as acidic'],
            answer: 2,
            explain: 'The scale is logarithmic: 0.1 units is roughly a 30 percent increase in hydrogen-ion concentration.',
          },
          {
            q: 'Hydrothermal-vent communities are powered by:',
            options: ['Sunlight filtering down', 'Chemosynthesis from chemical energy', 'Whale falls only', 'Photosynthesis by vent bacteria'],
            answer: 1,
            explain: 'Bacteria oxidize hydrogen sulfide from the vents, feeding ecosystems that never see the Sun.',
          },
        ],
      },
    ],
  },
]

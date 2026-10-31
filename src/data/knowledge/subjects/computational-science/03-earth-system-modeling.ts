/**
 * Knowledge Universe — Computational Science & Simulation — Chapter 03: Earth System Modeling
 * 1 lesson · ~1,244 words
 * field: Computational Science
 * legacy sources: emerging-interdisciplinary.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Earth System Modeling]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 emer-climate-models — How Climate Models Predict the Future
 */
import type { KnowledgeTopic } from '../../types'

export const computationalScienceCh03: KnowledgeTopic[] = [
  {
    id: 'emer-climate-models',
    title: 'How Climate Models Predict the Future',
    domain: 'Emerging & Interdisciplinary',
    field: 'Computational Science',
    branch: 'Earth System Modeling',
    tier: 'advanced',
    concepts: [
      'Weather versus climate',
      'Dividing the planet into grid cells',
      'The equations the cells solve',
      'Parameterizations: the unresolvable small stuff',
      'Forcing, feedback and sensitivity',
      'Ensembles, scenarios and testing',
    ],
    words: 1244,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Predicting climate is not predicting weather with more patience — it is a different question answered by different mathematics. Weather is an initial-value problem: chaotic, doubling its errors every few days no matter how fine the measurement. Climate is a boundary-value problem: given more greenhouse gas in the atmosphere, how does the average machinery of atmosphere, ocean and ice respond? Climate models — descendants of forecast codes that grew oceans, ice sheets and carbon cycles — answer by simulating the planet cell by cell, step by step, on the world\u2019s largest computers.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every national climate assessment, every warming target, every insurer\u2019s flood projection traces back to these models. Understanding what they compute — and what they honestly cannot — is the prerequisite for arguing about any of it.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Chaos caps weather forecasts at about ten days: minuscule errors in today\u2019s state grow exponentially, a discovery made by Lorenz in 1963. Climate questions sidestep chaos the way an insurer sidesteps any single dice roll: you cannot say whether it will rain on 17 June 2050, but you can ask how often June rains in the 2050s — the statistics of the distribution, not the trajectory. Climate is the rules of the game; weather is one play.',
      },
      {
        kind: 'para',
        text: 'A model wraps the planet in a three-dimensional lattice — cells tens to a hundred kilometres on a side, stacked dozens of layers deep — and marches forward in timesteps of minutes to hours. Within each cell it tracks temperature, pressure, humidity, wind and tracers, exchanging heat, moisture and momentum with its neighbours. Smaller cells buy finer detail at a brutal price: halving the grid means roughly an order of magnitude more computation.',
      },
      {
        kind: 'para',
        text: 'Every cell obeys the same physics: Newton\u2019s laws for air motion on a rotating sphere, with Coriolis terms doing the twisting; conservation of energy, mass and water vapour; and radiative transfer through absorbing gases, line by spectral line. There is no dial labelled global temperature anywhere in the code — planetary behaviour emerges from millions of local calculations, which is exactly why the models count as physics rather than curve-fitting.',
      },
      {
        kind: 'para',
        text: 'Clouds form, turbulence churns and rain coalesces on scales far below any feasible grid cell, so their net effects must be approximated from the resolvable variables — a parameterization. Each is a sub-model with constants tuned against observations and field campaigns, and each is a place where exact physics becomes educated approximation. Most of the disagreement between different models traces to different parameterization choices — clouds above all.',
      },
      {
        kind: 'para',
        text: 'Doubling atmospheric CO₂ adds about 3.7 watts per square metre of heating to the planet\u2019s energy budget — the forcing. The direct warming is modest; feedbacks then multiply it: warmer air holds more water vapour, itself a greenhouse gas; melting snow exposes dark, absorbing ocean; clouds shift in ways still being pinned down. The end-to-end amplification is the equilibrium climate sensitivity — about 3 °C per doubling, best estimates agree, within a still-uncomfortable range.',
      },
      {
        kind: 'para',
        text: 'A single simulation is one roll of a chaotic die, so results are averaged across ensembles and across independent models. The tests are unforgiving by design: simulate the twentieth century and check against the instrument record, reproduce the cooling after a great volcanic eruption, hold up against ice-age climates far outside modern experience. Future runs follow standardised emission scenarios — pathways, not prophecies — because the model computes climate given emissions, not emissions themselves.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'CO₂ radiative forcing',
        latex: '\\Delta F = 5.35\\,\\ln\\left(\\frac{C}{C_0}\\right)',
        meaning: 'Forcing in watts per square metre grows logarithmically with concentration — each doubling adds the same ≈3.7 W/m².',
      },
      {
        kind: 'formula',
        name: 'Equilibrium warming',
        latex: '\\Delta T_{eq} = \\lambda\\,\\Delta F',
        meaning: 'Warming at equilibrium is the feedback factor λ times the forcing; λ ≈ 0.8 °C per W/m² for a 3 °C sensitivity.',
      },
      {
        kind: 'formula',
        name: 'CFL stability condition',
        latex: '\\Delta t < \\frac{\\Delta x}{U}',
        meaning: 'The timestep must be short enough that no wind carries air across a whole grid cell — or the numerical scheme blows up.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the forcing from raising CO₂ from its pre-industrial 280 ppm to today\u2019s roughly 420 ppm, and the equilibrium warming implied by a 3 °C climate sensitivity.',
          'Recall the governing idea: forcing grows logarithmically as ΔF = 5.35·ln(C/C₀), and equilibrium warming scales as sensitivity × ΔF / 3.7 W/m².',
          'Apply: ln(420/280) = ln(1.5) ≈ 0.405, so ΔF ≈ 5.35 × 0.405 ≈ 2.2 W/m². A full doubling gives 5.35 × ln 2 ≈ 3.7 W/m², which pairs with 3 °C of equilibrium warming.',
          'State the result: current CO₂ implies about 2.2 W/m² of forcing — roughly 60% of a doubling — and therefore about 1.8 °C at equilibrium, of which most has already emerged, with the rest in the pipeline as the ocean catches up.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'International climate assessments translating model ensembles into policy-relevant ranges',
          'Sea-level and flood-risk projections used by cities, ports and insurers',
          'Wind and solar resource planning, where model climatology sizes the grid\u2019s future mix',
          'Attribution science — asking whether a given heatwave was made more likely by emissions',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'A model projection is conditional: 4 °C by 2100 always silently ends with if emissions follow this pathway. Local and regional projections are harder than global means — averages over chaos behave, specific places are noisy. Models disagree most exactly where stakes are highest, in cloud feedbacks. And quoting a single run of a single model as evidence is the cardinal error; the ensemble spread is the actual product.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'General circulation model', def: 'A physics-based simulation of atmosphere and ocean circulation, cell by cell.' },
          { term: 'Grid cell', def: 'One brick of the model lattice, typically tens of kilometres across.' },
          { term: 'Parameterization', def: 'An approximate stand-in for processes too small for the grid, such as clouds.' },
          { term: 'Radiative forcing', def: 'A change in Earth\u2019s energy balance, in watts per square metre, from an external driver.' },
          { term: 'Climate sensitivity', def: 'Equilibrium warming for doubled CO₂ — about 3 °C, within a range.' },
          { term: 'Ensemble', def: 'Many runs whose spread measures internal variability and model disagreement.' },
          { term: 'Scenario', def: 'A standardised emissions pathway a model is asked to simulate — not a prediction.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Climate models can project the statistics of future temperature but not the weather on a given date because:',
            options: [
              'computers are still too slow',
              'weather is chaotic while climate statistics respond to boundary conditions',
              'the grid has no calendar',
              'radiation physics changes with time',
            ],
            answer: 1,
            explain: 'Initial-condition chaos caps trajectories; the statistics of the system follow the imposed boundary conditions.',
          },
          {
            q: 'Parameterizations exist because:',
            options: [
              'the full equations are proprietary',
              'clouds and turbulence occur below the grid scale and must be approximated',
              'models are written in old programming languages',
              'satellites cannot measure temperature',
            ],
            answer: 1,
            explain: 'No affordable grid resolves cloud formation or turbulence, so their net effects are inferred from resolved variables.',
          },
          {
            q: 'The CFL condition limits:',
            options: [
              'the number of ensemble members',
              'how large the timestep can be relative to grid size and wind speed',
              'spatial resolution alone',
              'sea-level rise rates',
            ],
            answer: 1,
            explain: 'Air must not cross a whole cell within one step, or the numerics become unstable and explode.',
          },
          {
            q: 'A doubling of CO₂ from pre-industrial levels adds roughly:',
            options: [
              'no forcing, due to absorption saturation',
              'about 0.37 watts per square metre',
              'about 3.7 watts per square metre of forcing',
              'about 37 watts per square metre',
            ],
            answer: 2,
            explain: '5.35 × ln 2 ≈ 3.7 W/m² — logarithmic growth means each doubling adds the same increment.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Comfort with logarithms and conservation laws suffices; everything else builds here. Follow with the carbon cycle — where the emissions actually go — then paleoclimate as the out-of-sample test, and attribution science, which connects simulated worlds to the heatwave outside your window.',
        tone: 'path',
      },
    ],
  },
]

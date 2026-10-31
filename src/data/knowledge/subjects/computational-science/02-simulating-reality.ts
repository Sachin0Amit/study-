/**
 * Knowledge Universe — Computational Science & Simulation — Chapter 02: Simulating Reality
 * 1 lesson · ~1,264 words
 * field: Computational Science
 * legacy sources: emerging-interdisciplinary.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Simulating Reality]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 em-digital-twins-mirror-worlds — Digital Twins: Building the Mirror World
 */
import type { KnowledgeTopic } from '../../types'

export const computationalScienceCh02: KnowledgeTopic[] = [
  {
    id: "em-digital-twins-mirror-worlds",
    title: "Digital Twins: Building the Mirror World",
    domain: "Emerging & Interdisciplinary",
    field: "Computational Science",
    branch: "Simulating Reality",
    tier: "intermediate",
    concepts: [
      "Live sensor-model coupling, not one-off simulation",
      "Component, asset, system, and process twins",
      "Physics-based models versus learned surrogates",
      "Physics-informed machine learning",
      "Drift, residuals, and data assimilation",
      "Uncertainty as a first-class output",
      "Where twins fail",
    ],
    words: 1270,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A simulation is a dress rehearsal: you build a model, run it, and file it away. A digital twin is a shadow that lives with the thing it mirrors — fed by sensor streams, corrected by real data, consulted before every decision, and updated until the physical counterpart is retired. The difference sounds subtle; it changes engineering the way live navigation changed driving.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Twins already schedule jet-engine maintenance, tune factories, and stress-test infrastructure before it is built. The stack behind them — sensors, models, machine learning — is migrating into medicine and climate adaptation, and 'digital twin' is rapidly becoming the most abused term in corporate software, which makes a precise definition valuable.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "A twin has four parts: the physical asset, instrumented with sensors; a virtual model of that asset; the data pipeline binding them; and the decision loop, in which actions on the real thing are informed by the virtual one. The defining property is live coupling — a model without incoming data is a model, a simulation run once and archived is a simulation, and only a model continuously synchronized with its physical twin earns the name. Twins also nest: a component twin for one turbine blade, an asset twin for the engine, a system twin for the aircraft, a process twin for the airline's whole operation.",
      },
      {
        kind: "para",
        text: "The virtual side blends three ingredients. Physics-based models — finite elements, fluid dynamics, multibody dynamics — encode known laws but run slowly. Data-driven models, usually neural surrogates trained on simulation or sensor data, run thousands of times faster but learn nothing outside their training envelope. And a useful twin must typically run faster than real time — a mirror that lags the world cannot warn it — which is why surrogates matter despite their blind spots.",
      },
      {
        kind: "para",
        text: "The reconciliation is physics-informed machine learning: networks whose training loss contains the equations of motion alongside the data. Pure black boxes interpolate beautifully and extrapolate catastrophically — a surrogate asked about temperatures it never saw will answer confidently and wrongly. Embedding conservation laws, boundary conditions, and constraints in the loss acts as guardrails: the network can bend the physics but not break it, inheriting some of the speed of learning and some of the trustworthiness of equations.",
      },
      {
        kind: "para",
        text: "A twin's enemy is time. Sensors drift and fail, unmodeled physics accumulates error, and the asset itself changes — blades erode, bearings wear, filters clog — so yesterday's calibrated model becomes today's approximate one. The discipline is continuous state estimation: comparing predicted against measured signals, computing the residual, and updating model parameters, the same data-assimilation mathematics the climate-models lesson explains at planetary scale. Honest twins carry uncertainty bands, not just answers: vibration at 3.2 millimeters plus or minus 0.4 changes decisions; a naked number hides them.",
      },
      {
        kind: "para",
        text: "The flagship uses are industrial. Jet engines stream telemetry to twins that estimate remaining useful life, turning scheduled maintenance into predictive maintenance. Formula 1 teams run thousands of race simulations per weekend; factories twin their lines to test retooling in software; buildings twin their HVAC for energy; utilities twin grids to rehearse failures. Cities are the frontier — Virtual Singapore being the famous attempt — and medicine is arriving, with personalized heart twins for surgical planning and in-silico trials of devices across digital populations.",
      },
      {
        kind: "para",
        text: "Twins fail in instructable ways. Garbage sensors yield confident garbage. A model cannot capture physics nobody encoded, so unknown unknowns pass through untouched. Dashboards breed over-trust, and operators stop questioning the mirror. The twin is also an attack surface — a detailed, networked replica of critical infrastructure. And parity costs money forever, because the asset ages and the twin must be maintained as long; a chaotic system adds a hard ceiling, as the chaos lesson shows, beyond which no mirror helps.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Physics-informed loss",
        latex: "L = L_{\\text{data}} + \\lambda\\, L_{\\text{physics}}",
        meaning: "Training error plus a weighted penalty for violating the governing equations; lambda sets the trade between fitting noisy data and obeying known physics.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: whether a pump twin's warning is actionable — predicted vibration rising from 0.8 to 1.4 millimeters over three weeks, uncertainty 0.3, alarm threshold 1.5.",
          "Recall the twin logic: residual trends indicate real state change, and decisions compare signal plus uncertainty against the threshold.",
          "Apply: the 0.6-millimeter growth is twice the noise, so the trend is real; 1.4 plus 0.3 already crosses 1.5, and the degradation rate projects two to three weeks to the hard limit.",
          "State the result: schedule a planned replacement in the next maintenance window — the economics being the point, since a planned swap costs hours while an unplanned outage costs the line.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Predictive maintenance: engine and turbine twins forecast failures, converting downtime from surprise to schedule.",
          "Factory and process twins test line changes and new products virtually before physical retooling.",
          "Grid and infrastructure twins rehearse storms, surges, and attacks without touching the real system.",
          "Personalized medicine twins — hearts, lungs, drug trials in silico — support surgical planning and device testing.",
          "City twins model traffic, energy, and construction impacts before breaking ground.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Most 'digital twins' in marketing are dashboards with a story: no live model, no coupling, no twin. A twin is not a copy but a purpose-built simplification — right where you need it, wrong where you don't — and knowing which is which is the engineering. Precision is not accuracy: a confidently wrong mirror is worse than an uncertain one. And the real asset drifts, so an unmaintained twin decays into a simulation with delusions.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Digital twin", def: "A virtual model kept continuously synchronized with a physical asset through sensor data and feedback." },
          { term: "Surrogate model", def: "A fast learned approximation of a slow physics simulation, valid within its training envelope." },
          { term: "Physics-informed ML", def: "Machine learning whose loss penalizes violations of known equations, blending speed with law." },
          { term: "Data assimilation", def: "Continually folding measurements into a running model to correct its state — the twin's heartbeat." },
          { term: "Remaining useful life", def: "A twin's estimate of time to failure, with uncertainty, driving maintenance timing." },
          { term: "Fidelity", def: "How finely a model represents the asset; more fidelity costs speed and data." },
          { term: "Model drift", def: "Growing mismatch as the real asset changes while the model stands still." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "What most separates a digital twin from an ordinary simulation?",
            options: ["better graphics", "continuous, sensor-fed coupling to a live physical counterpart", "it runs in the cloud", "it uses no equations"],
            answer: 1,
            explain: "The name is earned by the live data loop and the decision feedback — run-once models are just simulations.",
          },
          {
            q: "The lambda term in a physics-informed loss exists to:",
            options: ["speed up training", "penalize predictions that violate known physical laws", "encrypt the model", "eliminate the need for sensors"],
            answer: 1,
            explain: "It weights the physics penalty against data fit, keeping the surrogate from breaking conservation laws to chase noise.",
          },
          {
            q: "Model drift in a twin chiefly reflects:",
            options: ["software version changes", "the real asset aging and sensors drifting while the model stands still", "a weak internet connection", "having too much training data"],
            answer: 1,
            explain: "Wear changes the machine; without continual re-estimation, yesterday's calibrated mirror grows wrong.",
          },
          {
            q: "A surrogate model's characteristic failure is:",
            options: ["it is too slow to use", "confident extrapolation beyond its training data", "it cannot store results", "it ignores geometry entirely"],
            answer: 1,
            explain: "Outside the envelope there is nothing to interpolate from, yet the network still answers — smoothly, confidently, wrongly.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Prerequisites: the systems-thinking lesson for feedback loops and the climate-models lesson for data assimilation at planetary scale. Continue with control systems in Engineering Science for the closed-loop half, sensor and IoT topics in Technology & Applied Science, and the chaos lesson for the horizon beyond which no mirror helps.",
        tone: "path",
      },
    ],
  },
]

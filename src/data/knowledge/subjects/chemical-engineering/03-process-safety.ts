/**
 * Knowledge Universe — Chemical Engineering — Chapter 03: Process Safety
 * 1 lesson · ~1,622 words
 * field: Chemical Engineering
 * legacy sources: x58-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Process Safety]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 eng-process-safety-layers — Process Safety: Engineering Against Catastrophe
 */
import type { KnowledgeTopic } from '../../types'

export const chemicalEngineeringCh03: KnowledgeTopic[] = [
  {
    id: 'eng-process-safety-layers',
    title: 'Process Safety: Engineering Against Catastrophe',
    domain: 'Engineering',
    field: 'Chemical Engineering',
    branch: 'Process Safety',
    tier: 'core' as const,
    concepts: [
      'Process safety versus occupational safety: low frequency, high consequence',
      'Inherently safer design: minimize, substitute, moderate, simplify',
      'HAZOP: guide words meet process parameters',
      'Layers of protection and LOPA arithmetic',
      'Relief systems sized for the runaway, not the routine',
      'Management of change: the Flixborough lesson',
      'Case studies: Bhopal, Texas City and the dust pentagon',
    ],
    words: 1622,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'A chemical plant can post years of perfect personal-safety statistics — no slips, no falls — and still, in one afternoon, kill a town. Process safety is the discipline that separates those two worlds: not the high-frequency, low-severity events of occupational safety, but the rare, catastrophic losses of containment that end careers, companies and cities. The reactors lesson of this book covered runaway chemistry as kinetics; this lesson covers everything humans wrap around the chemistry — the design philosophy, the analysis methods, the protective layers and the management systems — that decide whether a deviation becomes an incident report or a casualty list.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Bhopal (1984) killed thousands in a night; Texas City (2005) killed fifteen on a startup; Flixborough (1974) flattened a plant over a temporary pipe. None of these was bad luck — each was a known failure pattern (inventory too large, a layer removed, a change unreviewed) repeating on schedule. Process safety’s entire toolkit exists because these patterns are learnable, and the professional standard is set by the case files the US Chemical Safety Board and the UK HSE publish for free. An engineer who cannot read those files is unarmed.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The philosophy: what you don’t have can’t leak. Trevor Kletz’s dictum names the first and best layer — inherently safer design. Minimize the hazardous inventory (make the intermediate as needed instead of storing it); substitute (water-based for solvent-based); moderate (refrigerate the ammonia so it boils at low pressure; dilute the acid); simplify (every extra valve, line and instrument is another way to fail — and if a valve can be installed backwards, eventually it will be). Inherent safety removes the hazard rather than controlling it, which is why it sits ahead of every engineered safeguard in the hierarchy — a safeguard can fail, a removed hazard cannot.',
      },
      {
        kind: 'para',
        text: 'The analysis: HAZOP. The Hazard and Operability study is the process industries’ systematic imagination exercise: divide the plant into nodes (a line, a vessel), then for each parameter — flow, pressure, temperature, level, composition — interrogate with guide words: NO flow, MORE pressure, REVERSE flow, AS WELL AS contamination. Each deviation gets causes, consequences, existing safeguards and required actions, recorded in a team register. The method’s power is its refusal to rely on intuition: the team that asks "what could make flow reverse here?" finds the check valve missing before the process finds out. It is slow, bureaucratic and has saved more lives than any single invention in the field.',
      },
      {
        kind: 'para',
        text: 'The arithmetic: layers of protection. Around the hazard sit independent protection layers, drawn as an onion: process design, then the basic control system, then alarms and operator response, then the safety instrumented system (an independent trip with a defined integrity level — SIL 2, say, meaning a probability of failure on demand between 10⁻² and 10⁻³), then relief devices, then containment and dikes, then plant and community emergency response. Layer of Protection Analysis (LOPA) makes it arithmetic: take the initiating-event frequency (say 0.1 per year), multiply by each layer’s failure probability, and demand the product sits below the tolerable target (often 10⁻⁵ per year for on-site fatality risk). Two rules govern the arithmetic: layers must be truly independent (a shared power supply is not two layers), and credit only audited, tested layers — a trip that has never been proof-tested is a rumor, not an IPL.',
      },
      {
        kind: 'para',
        text: 'The last mechanical line: relief. Relief valves and rupture discs are sized for the worst credible case — the runaway reaction’s heat release, the blocked outlet with full pump head, the external fire — not for normal operation. The reactors lesson’s T2 Laboratories failure is the canonical example: a relief system sized for routine cooling loss, overwhelmed by a runaway the hazard review had not imagined, with four deaths. Two-phase flow (liquid carried out with the vapor) can demand several times single-phase vent area — the reason specialized methods (DIERS) exist. Relief headers, flares and catch drums complete the path: the design intent is that even with every control layer failed, the energy leaves through a pipe aimed at the sky, not through the wall.',
      },
      {
        kind: 'para',
        text: 'The management layer: change. The Flixborough disaster (Nypro oxidation plant, 1974) is process safety’s parable of unreviewed change. Reactor 5 was removed for repair; a temporary 20-inch bypass was sketched between reactors 4 and 6 as a dog-leg assembly, no engineering calculation done on it (the plant had lost its mechanical engineer). The bellows failed under pressure; some thirty tonnes of hot cyclohexane flashed into a vapor cloud that exploded with the force of tens of tonnes of TNT, killing 28 and destroying the plant. The UK investigation produced the modern discipline: Management of Change — every modification, temporary or permanent, organizational included, gets engineering review, hazard re-analysis and documentation before implementation. The parallel case files add the rest: Bhopal (1984) — a methyl isocyanate tank with its refrigeration shut down and scrubber and flare out of service, water ingress beginning a runaway that vented the poison cloud; Texas City (2005) — a raffinate splitter overfilled at startup, its relief discharging to a legacy blowdown drum venting at atmosphere, vapor cloud igniting near occupied trailers: fifteen dead, and the investigation’s verdict was process-safety culture, not a single failed valve. And the dust pentagon — fuel, dispersion, confinement, oxygen, ignition — explains why sugar, flour and metal powders explode (Imperial Sugar, 2008: fourteen dead), the same energy-release physics at powder scale.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Scenario: a reactor’s uncontrolled-runaway initiating frequency is 0.1 per year; the company’s tolerable frequency for an on-site fatality event is 10⁻⁵ per year. How many independent layers?',
          'Compute the gap: 10⁻¹ to 10⁻⁵ is four orders of magnitude — the protection layers must multiply to at least 10⁻⁴.',
          'Assemble audited IPLs: a basic-control trip (PFD 10⁻¹), an independent SIL-2 safety instrumented system (PFD ~10⁻³), and a relief system sized for the runaway case (PFD ~10⁻²).',
          'Multiply: 10⁻¹ × 10⁻³ × 10⁻² = 10⁻⁶ per year — one order below target, acceptable. Then audit independence: if the SIL trip and the control trip share a sensor, the arithmetic is fiction — that shared failure is exactly what the Flixborough and Texas City reports teach.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Regulatory frame: OSHA’s Process Safety Management (14 elements) and the EU’s COMAH regime make HAZOP, MOC, mechanical integrity and emergency planning legal duties for defined hazard inventories.',
        'Metrics: API 754’s Tier 1–4 event ladder gives industry a lagging indicator of process safety distinct from injury rates — the number boards actually track.',
        'Investigations: the US Chemical Safety Board’s case studies (T2, Texas City, Imperial Sugar) are public teaching files — read one before designing anything with stored energy.',
        'Design practice: PHA/HAZOP revalidation cycles, SIL verification calculations and proof-test schedules are the working documents of every process-safety engineer.',
        'Culture: the Baker Panel’s Texas City finding — safety campaigns aimed at slips while process risk went unmanaged — is the standing warning that culture is measured by what leadership audits, not what it posters.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, confusing the two safety disciplines: a perfect lost-time record says nothing about process risk — Texas City’s plant was winning occupational awards the year it exploded. Second, trusting safeguards that have never been tested: an unproof-tested trip is not a layer; LOPA arithmetic is only as honest as the audit trail. Third, treating change as exempt because it is temporary — Flixborough’s bypass was "temporary". Fourth, letting inventories grow by accretion: every tank added quietly undoes the inherent-safety margin nobody re-examined. Fifth, sizing relief for the routine: the worst credible case, not the average day, defines the vent. The discipline’s habit of mind is pre-mortem: assume the layer will fail, and design for what remains.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'inherently safer design', def: 'Kletz’s hierarchy — minimize, substitute, moderate, simplify: remove the hazard instead of fencing it.' },
        { term: 'HAZOP', def: 'Guide-word × parameter interrogation of each node — no/more/less/reverse flow, pressure, level — recorded with causes and safeguards.' },
        { term: 'layer of protection analysis (LOPA)', def: 'Frequency × independent-layer failure probabilities, checked against a tolerable target.' },
        { term: 'SIL', def: 'Safety integrity level — the safety instrumented function’s probability of failure on demand (SIL 2 ≈ 10⁻²–10⁻³).' },
        { term: 'management of change', def: 'Mandatory engineering review of any modification — Flixborough’s legacy and PSM’s backbone.' },
        { term: 'two-phase relief', def: 'Vapor carrying liquid foam — vent areas several times single-phase; the DIERS methods exist for it.' },
        { term: 'dust explosion pentagon', def: 'Fuel, dispersion, confinement, oxygen, ignition — why powders from sugar to aluminum detonate.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Kletz’s "what you don’t have can’t leak" argues first for…',
          options: ['more relief valves', 'inherently safer design — minimizing and substituting the hazard itself', 'longer operator shifts', 'thicker pipe walls'],
          answer: 1,
          explain: 'Inherent safety removes or shrinks the hazard before any engineered safeguard is discussed — safeguards can fail; an absent inventory cannot leak.',
        },
        {
          q: 'In HAZOP, "REVERSE flow" in a reactor feed line is an example of…',
          options: ['a parameter', 'a guide word applied to a parameter', 'a consequence', 'a safety integrity level'],
          answer: 1,
          explain: 'Guide words (no, more, less, reverse…) are applied systematically to each parameter (flow, pressure, level…) to force deviation thinking.',
        },
        {
          q: 'Flixborough’s central management lesson is…',
          options: ['never use bellows', 'every change — especially temporary ones — needs engineering review (Management of Change)', 'reactors must be identical', 'nitrogen always prevents explosions'],
          answer: 1,
          explain: 'The unreviewed temporary bypass failed and destroyed the plant — MOC became law and standard practice because of it.',
        },
        {
          q: 'A LOPA shows initiating frequency 10⁻¹/yr, target 10⁻⁵/yr, with three IPLs of 10⁻¹, 10⁻³ and 10⁻². The design is…',
          options: ['inadequate — two orders short', 'acceptable: 10⁻⁶/yr, one order below target, provided the layers are independent and tested', 'excessive — remove a layer', 'invalid because SIL 3 is required'],
          answer: 1,
          explain: '10⁻¹×10⁻³×10⁻² = 10⁻⁶ meets the 10⁻⁵ target with margin — the catch is auditing that the layers truly are independent.',
        },
      ] },
    ],
  },
]

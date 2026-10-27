import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 45: Engineering Chemistry (chem-engg-s1 … s5)
// Applied engineering-chemistry curriculum of advanced national
// engineering-entrance and first-year engineering programmes: water
// treatment and corrosion (s1), polymers/fuels/lubricants (s2),
// nanomaterials and green chemistry (s3), a numerical workshop on water
// and corrosion control (s4) and a materials case-study synthesis (s5).
// Provenance: standard engineering-chemistry syllabi; product rule: no
// exam, agency, institution or publisher names in UI strings — neutral
// phrasing only (engineering selection assessments, university papers).
//
// ZERO-REPETITION CARVING (greps run before writing):
//  · rg -i "lime-soda|zeolite|boiler" src/data/knowledge/fields/*.ts → the
//    civil-engineering water lesson (x19-civil-core.ts) owns the MUNICIPAL
//    PROCESS-TRAIN framing (coagulation→sedimentation→filtration→
//    disinfection) with ONE summary paragraph naming lime-soda and zeolite.
//    This file owns the REACTION-LEVEL chemistry: full softening equations,
//    stoichiometric doses, boiler-specific troubles (caustic embrittlement
//    — zero hits anywhere in the corpus), electrochemical corrosion
//    mechanisms and protection chemistry. Coagulation, sedimentation and
//    disinfection are NOT re-taught here.
//  · rg -i "octane|cetane" src/data/content/chem-ch44.ts → the everyday-
//    chemistry chapter grades octane/cetane in ONE survey sentence. This
//    file owns the quantitative engineering treatment: rating methods,
//    cracking/reforming to raise octane, Dulong and HCV/LCV arithmetic.
//  · rg -i "thermoplastic|addition polym" src/data/content/chem-ch10.ts →
//    the organic volume owns the BASIC classification (addition versus
//    condensation, rubber, biodegradables). This file owns ENGINEERING
//    polymer materials: specific plastics, structure→property→service
//    triads, DP and number-average molar mass numericals; the
//    classification is bridged, not re-taught.
//  · rg -i "quantum dot|carbon nanotube|graphene"
//    src/data/knowledge/fields/*.ts → the nanotechnology book owns the
//    carbon family and nanoelectronics DEVICES. This file owns the chemical
//    SYNTHESIS routes (sol–gel, reduction, CVD), plasmonic colour,
//    photocatalysis and green chemistry; carbon allotropes and transistor
//    scaling are NOT re-taught.
//  · rg -i "corrosion" src/data/knowledge/fields/engineering.ts → the
//    engineering book owns structural/pipeline corrosion CONTEXT
//    (maintenance, failures, smart-pig inspection). This file owns the
//    electrochemical MECHANISM and protection chemistry.
// ============================================================================

export const chemEngineeringContent: SectionContent[] = [
  // ------------------------------------------ chem-engg-s1 · Water Treatment & Corrosion
  {
    sectionId: 'chem-engg-s1',
    readingTime: 9,
    prerequisites: [
      'Solubility product and precipitation (Chemical & Ionic Equilibrium)',
      'Galvanic cells, half-reactions and Faraday laws (Electrochemistry)',
      'Soaps, detergents and hard-water scum (Everyday & Industrial Chemistry)',
    ],
    intro: 'Engineering water chemistry begins with a single question: what is dissolved in the water, and what will it do to a boiler, a pipe or a cooling circuit? Hardness ions — calcium and magnesium — deposit scale, waste soap and cripple heat transfer, so every industrial feed water is analysed and softened before service. The treatment chemistry is precise: lime and soda precipitate the ions as removable solids, zeolites swap them for sodium, and ion-exchange resins strip the ions away to give demineralized water. Corrosion is the second enemy, and it is electrochemical — a metal dissolves at anodic spots while oxygen is reduced elsewhere, and the rust that appears is only the visible receipt of the metal lost. Protection therefore means breaking the cell: sacrificial coatings, cathodic polarization, barrier paints and inhibitors each attack one link in the anode–electrolyte–cathode chain. This section builds the reaction-level picture that the numerical workshop of Section 4 then turns into doses and rates.',
    objectives: [
      'Distinguish temporary from permanent hardness and convert any salt concentration into ppm as $\\text{CaCO}_3$',
      'Write the lime–soda, zeolite and ion-exchange softening reactions and match each process to a service',
      'Diagnose scale, sludge, priming, foaming and caustic embrittlement from boiler symptoms',
      'Explain wet corrosion through its half-reactions and choose protection — galvanizing, tinning, cathodic protection, inhibitors or alloying',
    ],
    concepts: [
      {
        term: 'Temporary vs permanent hardness',
        kind: 'definition',
        statement: '**Temporary (carbonate) hardness** comes from $\\text{Ca(HCO}_3)_2$ and $\\text{Mg(HCO}_3)_2$ and is removed by boiling — $\\text{Ca(HCO}_3)_2 \\xrightarrow{\\Delta} \\text{CaCO}_3\\downarrow + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$; **permanent hardness** comes from sulfates and chlorides ($\\text{CaSO}_4$, $\\text{CaCl}_2$, $\\text{MgSO}_4$, $\\text{MgCl}_2$) and survives any amount of boiling.',
        detail: 'Magnesium bicarbonate needs longer boiling because its first product, $\\text{MgCO}_3$, hydrolyses to $\\text{Mg(OH)}_2$ only at the hot surface. Temporary hardness is the fur that fills a kettle; permanent hardness needs chemical softening because heat alone precipitates neither a sulfate nor a chloride. The water’s alkalinity tracks the temporary part — an analytical clue the workshop of Section 4 exploits.',
      },
      {
        term: 'Hardness as CaCO₃',
        kind: 'notation',
        statement: 'Hardness is reported as **ppm of $\\text{CaCO}_3$ equivalent**: one mole of any salt carrying one mole of divalent cation matches one mole (100 g) of $\\text{CaCO}_3$, so $$\\text{hardness as CaCO}_3 = \\text{salt mg/L} \\times \\frac{100\\,n}{M_{\\text{salt}}}$$ with $n$ the number of divalent cations per formula unit (one for all the common hardness salts).',
        detail: 'For $\\text{MgSO}_4$ ($M = 120$) the factor is $\\frac{100}{120} = \\frac{5}{6}$; for $\\text{CaCl}_2$ ($M = 111$) it is $\\frac{100}{111}$. Equivalently, hardness = salt concentration × 50 ÷ equivalent weight of the salt — both forms agree that 24 mg/L of $\\text{MgSO}_4$ is 20 ppm, never 40: dividing by the equivalent weight ($M/2$) instead of the molar mass double-counts the valency. The CaCO₃ basis lets one number summarize a soup of many salts; degrees French (10 ppm per degree) and degrees Clarke (14.3 ppm per degree) are just other rulers for the same quantity.',
      },
      {
        term: 'Lime–soda softening',
        kind: 'method',
        statement: 'Cold lime–soda softening precipitates hardness with $\\text{Ca(OH)}_2$ and $\\text{Na}_2\\text{CO}_3$: $\\text{Ca(HCO}_3)_2 + \\text{Ca(OH)}_2 \\rightarrow 2\\text{CaCO}_3\\downarrow + 2\\text{H}_2\\text{O}$; $\\text{Mg(HCO}_3)_2 + 2\\text{Ca(OH)}_2 \\rightarrow \\text{Mg(OH)}_2\\downarrow + 2\\text{CaCO}_3\\downarrow + 2\\text{H}_2\\text{O}$; $\\text{MgCl}_2 + \\text{Ca(OH)}_2 \\rightarrow \\text{Mg(OH)}_2\\downarrow + \\text{CaCl}_2$; then $\\text{CaCl}_2$ or $\\text{CaSO}_4 + \\text{Na}_2\\text{CO}_3 \\rightarrow \\text{CaCO}_3\\downarrow +$ sodium salts.',
        detail: 'Read the stoichiometry as doses: temporary calcium costs one lime per equivalent; temporary magnesium costs two — one neutralizes the bicarbonate alkalinity, the second supplies the pH that pushes $\\text{Mg(OH)}_2$ past its solubility product. Soda serves only permanent calcium; permanent magnesium first converts to a calcium salt through lime and that calcium is then caught by soda, so magnesium permanence costs one lime AND one soda. The cold process leaves 50–60 ppm residual, hot lime–soda 15–30 ppm; the precipitate sludge is the process’s own waste stream, and the plant-train view of municipal treatment belongs to the civil-engineering water lesson.',
      },
      {
        term: 'Zeolite and resin softening',
        kind: 'method',
        statement: 'A zeolite (permutit, $\\text{Na}_2\\text{Z}$) swaps sodium for hardness — $\\text{Na}_2\\text{Z} + \\text{Ca}^{2+} \\rightarrow \\text{CaZ} + 2\\text{Na}^+$ — and an exhausted bed regenerates with brine: $\\text{CaZ} + 2\\text{NaCl} \\rightarrow \\text{Na}_2\\text{Z} + \\text{CaCl}_2$. Demineralizers go further: cation resin $2\\text{HR} + \\text{Ca}^{2+} \\rightarrow \\text{CaR}_2 + 2\\text{H}^+$ and anion resin $\\text{R}^{\\prime}\\text{OH} + \\text{Cl}^- \\rightarrow \\text{R}^{\\prime}\\text{Cl} + \\text{OH}^-$, the released $\\text{H}^+$ and $\\text{OH}^-$ neutralizing to water.',
        detail: 'Regeneration chemistry: hydrochloric acid restores the cation exchanger, sodium hydroxide the anion exchanger. Zeolite output still carries sodium salts — acceptable for low-pressure boilers and laundries — while demineralized water suits high-pressure boilers and process duty; neither bed tolerates turbidity, which fouls exchange sites. The exchange is equilibrium-driven, so excessive hardness in the feed leaks through: Section 4 sizes beds and regeneration schedules from exactly that arithmetic.',
      },
      {
        term: 'Boiler troubles',
        kind: 'insight',
        statement: 'Sludge settles loose; **scale** sticks hard. Scale — $\\text{CaSO}_4$ with its inverse solubility, $\\text{Mg(OH)}_2$, calcium silicate — grows on the hottest metal and throttles heat transfer; **priming** carries water droplets into the steam and **foaming** holds bubbles alive on dissolved solids and organics.',
        detail: 'Scale conducts heat tens of times worse than steel, so a millimetre or two means overheated metal, several percent extra fuel and, at the end of the escalation, burst tubes; blowdown removes sludge and holds dissolved solids down, and antifoams break the bubble films. **Caustic embrittlement** is the quiet killer of riveted boilers: sodium carbonate in the feed hydrolyses at temperature ($\\text{Na}_2\\text{CO}_3 + \\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH}$), the concentrated alkali creeps into riveted seams and dissolves the protective oxide as soluble sodium ferrate, so the steel cracks along grain boundaries under stress. Phosphate conditioning — $3\\text{CaSO}_4 + 2\\text{Na}_3\\text{PO}_4 \\rightarrow \\text{Ca}_3(\\text{PO}_4)_2\\downarrow + 3\\text{Na}_2\\text{SO}_4$ — ties hardness up as non-adherent sludge without leaving free alkali, tannin or lignin additives block the crack chemistry, and demineralized feed with welded seams is the modern answer.',
      },
      {
        term: 'Wet corrosion and protection',
        kind: 'insight',
        statement: 'Wet corrosion is a short-circuited galvanic cell on one metal surface: **anode** $\\text{Fe} \\rightarrow \\text{Fe}^{2+} + 2e^-$; **cathode in neutral or alkaline water** $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\rightarrow 4\\text{OH}^-$; the products meet and oxidize to rust $\\text{Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O}$. The oxygen-starved patch is the anode — hence waterline, crevice and pitting attack.',
        detail: 'Protection severs any link of the cell. Galvanizing coats iron with zinc: zinc is the sacrificial anode, so even a scratch keeps protecting. Tinning is the dangerous twin — tin is nobler, so a scratch makes the exposed iron a small anode against a large tin cathode and corrosion accelerates at the flaw. Cathodic protection ties the structure to sacrificial Mg or Zn blocks or to an impressed current so the structure is forced to be the cathode; paints and enamels block the electrolyte; scavenger inhibitors ($\\text{N}_2\\text{H}_4$, $\\text{Na}_2\\text{SO}_3$) remove dissolved oxygen while adsorption-type inhibitors (amines, thiourea) blanket the anode; alloying with about 18% chromium passivates steel under a self-healing $\\text{Cr}_2\\text{O}_3$ film. Dry corrosion at high temperature is oxide or sulfide scale growing directly from the metal–gas interface without liquid water, but the anode/cathode bookkeeping still applies at that boundary.',
      },
    ],
    figures: [
      {
        caption: 'Differential-aeration micro-cell: the oxygen-poor patch under a deposit is the anode ($\\text{Fe} \\rightarrow \\text{Fe}^{2+} + 2e^-$), electrons flow through the metal to oxygen-rich cathode zones ($\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\rightarrow 4\\text{OH}^-$), and rust $\\text{Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O}$ grows between them.',
        sketchImage: '/diagrams/water_corrosion_sketch.jpg',
        sketchCaption: 'Corrosion Notebook: iron strip at the waterline, anode under the deposit, cathode at oxygen-rich zones, electron path through the metal, rust band at the waterline.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Differential aeration corrosion cell on iron in water" font-family="sans-serif"><text x="360" y="22" text-anchor="middle" font-size="13" fill="currentColor" font-family="sans-serif">differential-aeration corrosion of iron</text><line x1="150" y1="38" x2="150" y2="104" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><polygon points="150,114 144,102 156,102" fill="currentColor"/><line x1="570" y1="38" x2="570" y2="104" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><polygon points="570,114 564,102 576,102" fill="currentColor"/><text x="360" y="44" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">O₂ enters solution at the open surface</text><rect x="90" y="120" width="540" height="70" fill="none" stroke="currentColor" stroke-width="2"/><line x1="90" y1="60" x2="630" y2="60" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="112" y="52" font-size="11" fill="currentColor" font-family="sans-serif">air</text><text x="112" y="78" font-size="11" fill="currentColor" font-family="sans-serif">water (electrolyte)</text><ellipse cx="255" cy="60" rx="26" ry="8" fill="none" stroke="currentColor" stroke-width="1.5"/><ellipse cx="465" cy="60" rx="26" ry="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="255" y="82" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">rust</text><text x="465" y="82" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">rust</text><rect x="90" y="190" width="540" height="55" fill="none" stroke="currentColor" stroke-width="2"/><rect x="120" y="186" width="100" height="5" fill="currentColor"/><rect x="500" y="186" width="100" height="5" fill="currentColor"/><rect x="330" y="186" width="60" height="5" fill="currentColor"/><ellipse cx="360" cy="182" rx="44" ry="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="170" y="166" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">cathode — O₂-rich</text><text x="550" y="166" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">cathode — O₂-rich</text><text x="360" y="156" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">anode — O₂-poor (under deposit)</text><line x1="360" y1="172" x2="360" y2="132" stroke="currentColor" stroke-width="1.5"/><polygon points="360,124 354,136 366,136" fill="currentColor"/><text x="384" y="144" font-size="11" fill="currentColor" font-family="sans-serif">Fe²⁺ enters water</text><line x1="352" y1="222" x2="182" y2="222" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><polygon points="174,222 186,216 186,228" fill="currentColor"/><line x1="368" y1="222" x2="538" y2="222" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><polygon points="546,222 534,216 534,228" fill="currentColor"/><text x="360" y="238" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">electrons flow through the iron</text><text x="360" y="268" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">anode: Fe → Fe²⁺ + 2e⁻ · cathode: O₂ + 2H₂O + 4e⁻ → 4OH⁻ · product: Fe₂O₃·xH₂O</text><text x="360" y="288" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">the O₂-poor zone is anodic — crevices, waterlines and pits corrode</text></svg>`,
        afterConcept: 6,
      },
    ],
    examples: [
      {
        title: 'Converting an analysis into CaCO₃ equivalents',
        problem: 'A raw-water sample carries calcium bicarbonate at 32.4 mg/L, magnesium sulfate at 24.0 mg/L and calcium chloride at 55.5 mg/L. Express the hardness in ppm as CaCO₃, split it into temporary and permanent parts, and give the degrees French (take $M$: $\\text{Ca(HCO}_3)_2 = 162$, $\\text{MgSO}_4 = 120$, $\\text{CaCl}_2 = 111$).',
        steps: [
          { label: 'Step 1', text: 'Each salt carries one divalent ion per formula unit, so every conversion factor is simply $\\frac{100}{M}$: bicarbonate $\\frac{100}{162}$, sulfate $\\frac{100}{120} = \\frac{5}{6}$, chloride $\\frac{100}{111}$.' },
          { label: 'Step 2', text: 'Convert: calcium bicarbonate $32.4 \\times \\frac{100}{162} = 20.0$ ppm (temporary); magnesium sulfate $24.0 \\times \\frac{5}{6} = 20.0$ ppm and calcium chloride $55.5 \\times \\frac{100}{111} = 50.0$ ppm — together 70.0 ppm permanent.' },
          { label: 'Step 3', text: 'Total hardness $= 20 + 70 = 90$ ppm as $\\text{CaCO}_3$; the check is the mole logic — one mole of each salt is equivalent to one mole (100 g) of $\\text{CaCO}_3$, so no valency factor is missing.' },
          { label: 'Step 4', text: 'Degrees French divide by 10 ppm per degree: $\\frac{90}{10} = 9\\ ^{\\circ}\\text{Fr}$; in degrees Clarke it would be $\\frac{90}{14.3} \\approx 6.3\\ ^{\\circ}\\text{Cl}$.' },
        ],
        result: 'Temporary 20 ppm, permanent 70 ppm, total 90 ppm as CaCO₃ (= 9 °Fr ≈ 6.3 °Cl).',
      },
      {
        title: 'Oxygen-absorption corrosion stoichiometry',
        problem: 'Aerated neutral water at 25 °C holds 8.0 mg/L of dissolved oxygen. Using the oxygen-absorption mechanism, what mass of iron can corrode per litre before the oxygen is exhausted, and what does the dissolved iron become?',
        steps: [
          { label: 'Step 1', text: 'Write both half-reactions: anode $\\text{Fe} \\rightarrow \\text{Fe}^{2+} + 2e^-$; cathode $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\rightarrow 4\\text{OH}^-$.' },
          { label: 'Step 2', text: 'Match electrons — double the anode — and add: $2\\text{Fe} + \\text{O}_2 + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{Fe(OH)}_2$.' },
          { label: 'Step 3', text: 'Stoichiometry: 32 g of $\\text{O}_2$ consumes $2 \\times 56 = 112$ g of Fe, so each mg of oxygen costs $\\frac{112}{32} = 3.5$ mg of iron.' },
          { label: 'Step 4', text: 'Scale to the water: $8.0 \\times 3.5 = 28$ mg/L of iron dissolves; the $\\text{Fe(OH)}_2$ then air-oxidizes to rust $\\text{Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O}$, which is why the stain shows even though the metal loss happened elsewhere.' },
        ],
        result: '28 mg of iron per litre; the Fe²⁺ ends as hydrated ferric oxide (rust).',
      },
      {
        title: 'Zeolite bed capacity',
        problem: 'A zeolite softener bed holds 50 g of CaCO₃-equivalent capacity per litre of bed. The feed hardness is 250 ppm as CaCO₃ and the plant draws 5,000 L per day. How many litres of feed does one litre of bed soften, what daily mass of hardness passes through, and how often must a 25 L bed regenerate?',
        steps: [
          { label: 'Step 1', text: 'Capacity per litre of bed $= 50$ g $= 50{,}000$ mg of $\\text{CaCO}_3$ equivalent; each litre of feed deposits 250 mg.' },
          { label: 'Step 2', text: 'Bed-volumes softened $= \\frac{50{,}000}{250} = 200$ L of feed per litre of bed.' },
          { label: 'Step 3', text: 'Daily load $= 5{,}000 \\times 250 = 1.25 \\times 10^{6}$ mg $= 1.25$ kg of $\\text{CaCO}_3$ equivalent per day.' },
          { label: 'Step 4', text: 'A 25 L bed holds $25 \\times 200 = 5{,}000$ L of capacity — exactly one day of service, so the regeneration schedule runs daily with brine ($\\text{CaZ} + 2\\text{NaCl} \\rightarrow \\text{Na}_2\\text{Z} + \\text{CaCl}_2$).' },
        ],
        result: '200 bed-volumes per cycle; 1.25 kg of hardness per day; a 25 L bed regenerates daily.',
      },
    ],
    keyTakeaways: [
      'Temporary hardness is bicarbonate hardness and leaves on boiling; sulfate and chloride hardness is permanent and needs lime–soda, zeolite or resin chemistry.',
      'Report hardness as CaCO₃ equivalents — mg/L of salt × 100/M of the salt — so a salt soup collapses to one number (24 mg/L MgSO₄ is 20 ppm, never 40).',
      'Scale, not sludge, is the boiler killer — CaSO₄ deposits inverse-solvably on the hottest metal — and caustic embrittlement is alkali-driven intergranular cracking answered by phosphate conditioning.',
      'Wet corrosion is a short-circuited cell: iron dissolves at the oxygen-poor anode while oxygen reduces at the cathode — protect with sacrificial zinc, cathodic polarization, barriers, scavengers or chromium passivation.',
    ],
    quiz: [
      {
        q: 'A water sample contains 12 mg/L of magnesium sulfate ($M = 120$). Its hardness expressed as CaCO₃ is:',
        options: ['6 ppm', '10 ppm', '20 ppm', '24 ppm'],
        answer: 1,
        explanation: 'Step 1: One mole of MgSO₄ (120 g) carries one mole of Mg²⁺, equivalent to one mole (100 g) of CaCO₃. Step 2: The conversion factor is $\\frac{100}{120} = \\frac{5}{6}$. Step 3: Hardness $= 12 \\times \\frac{5}{6} = 10$ ppm. Step 4: 20 ppm is the classic trap — it uses the equivalent weight $\\frac{120}{2} = 60$ instead of the molar mass, double-counting the valency that the CaCO₃ equivalence already prices in.',
      },
      {
        q: 'In cold lime–soda softening, which impurity is removed by soda (Na₂CO₃) alone with no lime demand of its own?',
        options: ['Calcium bicarbonate', 'Magnesium bicarbonate', 'Calcium sulfate', 'Magnesium sulfate'],
        answer: 2,
        explanation: 'Step 1: Lime handles all bicarbonate (temporary) hardness and converts magnesium permanent hardness into the corresponding calcium salt. Step 2: Soda then precipitates calcium: $\\text{CaSO}_4 + \\text{Na}_2\\text{CO}_3 \\rightarrow \\text{CaCO}_3\\downarrow + \\text{Na}_2\\text{SO}_4$. Step 3: Calcium bicarbonate is a lime-only customer ($\\text{Ca(HCO}_3)_2 + \\text{Ca(OH)}_2 \\rightarrow 2\\text{CaCO}_3\\downarrow + 2\\text{H}_2\\text{O}$), while both magnesium salts consume lime before soda ever sees them. Step 4: Only permanent calcium hardness is a pure soda customer.',
      },
      {
        q: 'A scratched tin coating on steel corrodes faster than bare steel at the scratch because:',
        options: ['Iron becomes the anode of an Fe–Sn couple', 'Tin becomes the anode and protects the iron', 'Tin oxidizes the steel through direct electron transfer in air', 'The scratch dissolves the passive chromium oxide film'],
        answer: 0,
        explanation: 'Step 1: Tin sits nobler than iron in the electrochemical series. Step 2: At a scratch, the exposed iron meets the electrolyte while the surrounding tin acts as cathode — the iron is the small anode and dissolves preferentially. Step 3: Zinc-coated steel behaves oppositely: zinc is less noble, so it sacrifices itself and the scratch stays protected. Step 4: Coating choice is electrochemistry — coat with the sacrificial metal, not the noble one.',
      },
      {
        q: 'Caustic embrittlement of riveted boilers is traced to:',
        options: ['Dissolved oxygen attacking the rivet heads', 'Concentrated NaOH in the seams dissolving the protective oxide along grain boundaries', 'Calcium sulfate scale depositing on the hottest tube metal', 'Foam carrying dissolved salts onto the superheater'],
        answer: 1,
        explanation: 'Step 1: Soda-softened feed carries $\\text{Na}_2\\text{CO}_3$, which hydrolyses at boiler temperature: $\\text{Na}_2\\text{CO}_3 + \\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH}$. Step 2: Evaporation concentrates the alkali inside riveted seams faster than the bulk water can dilute it. Step 3: The concentrated NaOH dissolves the protective iron oxide as soluble sodium ferrate, so cracks advance along grain boundaries under stress. Step 4: Phosphate conditioning, tannin additives and demineralized feed (or welded seams) are the standing defences.',
      },
    ],
  },

  // ------------------------------ chem-engg-s2 · Polymers, Fuels & Lubricants
  {
    sectionId: 'chem-engg-s2',
    readingTime: 10,
    prerequisites: [
      'Alkene addition and carbonyl condensation chemistry (Hydrocarbons, Haloalkanes & Oxygen Functional Groups)',
      'Addition-versus-condensation polymer basics (Amines, Biomolecules, Polymers & Practical Organic)',
      'Combustion energetics and calorimetry (Thermochemistry Depth Lab)',
    ],
    intro: 'Materials and energy are the two currencies of engineering, and this section handles the chemistry of both. Polymers are engineered one repeat unit at a time: chain length sets molar mass through $\\bar{M}_n = DP \\times M_0$, and microstructure — branching, crystallinity, aromatic rings, hydrogen bonds — decides whether a plastic is a cling film, a gas pipe or body armour. Fuels are graded by numbers an engineer can compute: gross and net calorific values from a hydrogen analysis, Dulong estimates from an ultimate analysis, octane and cetane ratings from knock behaviour. Lubricants translate molecular behaviour into machine life: viscosity thinning with temperature, wax crystallizing in the cold, vapours flashing at a measurable point. Every property here is quantitative, and every selection in Section 5 traces back to one of these numbers.',
    objectives: [
      'Compute number-average molar mass from a chain-length distribution and convert it to degree of polymerization',
      'Match engineering plastics — LDPE, HDPE, PVC, PP, PS, PMMA, PTFE, nylons, PET, aramid, polycarbonate, thermosets, silicones — to their structure–property–service triads',
      'Calculate HCV/LCV with the hydrogen correction and apply the Dulong formula to a coal ultimate analysis',
      'Explain octane versus cetane ratings, gaseous fuel choices, and viscosity-index, flash-point and pour-point logic for lubricants',
    ],
    concepts: [
      {
        term: 'DP and molar mass',
        kind: 'method',
        statement: 'The **degree of polymerization** DP counts repeat units per chain, and the **number-average molar mass** blends a chain population: $\\bar{M}_n = \\frac{\\sum N_i M_i}{\\sum N_i}$; for one monomer type $\\bar{M}_n = DP \\times M_0$, with $M_0$ the repeat mass (28 g/mol for polyethylene).',
        detail: 'Number-averaging counts every chain equally, so short chains drag the average down; the weight-average $\\bar{M}_w = \\frac{\\sum N_i M_i^2}{\\sum N_i M_i}$ favours heavy chains and always exceeds $\\bar{M}_n$, their ratio (polydispersity) measuring the spread. Tensile strength and melt viscosity climb with chain length until entanglement saturates the mechanical gain — processing wants shorter chains, service wants longer ones, and grade selection is exactly that trade. The chain-growth versus step-growth classification lives in the organic chemistry volume; here we buy chains by length and ask what they can carry.',
      },
      {
        term: 'Commodity thermoplastics',
        kind: 'insight',
        statement: '**LDPE** (high-pressure radical process, branched, ~0.92 g/cm³) makes flexible films; **HDPE** (Ziegler–Natta, linear, ~0.96 g/cm³) makes rigid pipes and crates; **PVC** is rigid for pipes and plasticized for cables; polypropylene adds stiffness, living hinges and sterilizable ware; polystyrene is glassy but brittle; **PMMA** passes about 92% of light as acrylic glazing; **PTFE** couples chemical inertness with among the lowest friction of any solid.',
        detail: 'Structure explains each service. Branching keeps LDPE chains from packing, so it stays soft and split-resistant for films and squeeze bottles; linearity lets HDPE pack into crystals that carry pressure, and a carbon-black skin screens UV for buried pipe. PVC’s stiff, polar C–Cl backbone gives cheap rigidity, but heat and UV split off HCl, so outdoor and hot-water grades carry stabilizers and titanium dioxide pigment. PTFE’s C–F sheath resists every solvent and sticks to nothing — gaskets, seals and non-stick linings — but it cannot melt-flow, so parts are sintered, not moulded.',
      },
      {
        term: 'Condensation polymers to silicones',
        kind: 'definition',
        statement: 'Nylon-6,6 condenses hexamethylenediamine with adipic acid ($M_{\\text{repeat}} = 226$) while nylon-6 opens the caprolactam ring; **PET** condenses ethylene glycol with terephthalic acid into fibre and bottle polyester; **para-aramid (Kevlar type)** stacks rigid aromatic polyamide rods on hydrogen bonds into a fibre of about five times steel’s strength-to-weight; polycarbonate (bisphenol A + phosgene) is the tough transparent one; **bakelite-type** phenol–formaldehyde cures into a rigid network; urea- and melamine-formaldehyde glue and table; polyurethane foams and elastomerizes; silicone replaces C–C with a Si–O backbone.',
        detail: 'The amide and ester links are polar and directional: nylon’s N–H···O=C hydrogen bonds bind chains into crystals, so gears and bearings run on their own self-lubricity — at the price of a few percent of water absorption and swelling. Bottle-grade PET is stretch-blown so chains orient around the vessel; crystallinity plus orientation give the CO₂ barrier of carbonated-drink bottles, and clean flakes recycle into fibre and food-grade rPET. Melamine tableware survives heat and dishwashing that would warp urea-formaldehyde mouldings; polyurethane’s $-\\text{NHCOO}-$ links are cast from two liquids, so one chemistry foams furniture, insulates refrigerators and wheels skateboards; silicone’s Si–O bond (about 450 kJ/mol against 347 for C–C) buys a $-60$ to $+200\\ ^{\\circ}\\text{C}$ service window and the biocompatibility that puts tubing and implants in the body for years.',
      },
      {
        term: 'Calorific value arithmetic',
        kind: 'law',
        statement: 'The **gross (higher) calorific value** includes the latent heat recovered when combustion water condenses: $HCV = LCV + \\frac{9H}{100} \\times 2442\\ \\text{kJ/kg}$ with $H$ the mass percent of hydrogen; Dulong prices a coal from its ultimate analysis, $HCV \\approx 338C + 1442\\left(H - \\frac{O}{8}\\right) + 93S$ kJ/kg.',
        detail: 'The 9 comes from stoichiometry — burning 1 kg of hydrogen yields 9 kg of water ($2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$) — and 2442 kJ/kg is its latent heat at 25 °C, exactly what condensing economizers chase. Dulong charges each element per kilogram (carbon 33.8 MJ/kg, hydrogen 144 MJ/kg, sulfur 9.3 MJ/kg) and debits the hydrogen tied up neutralizing the fuel’s own oxygen through the $O/8$ term; it lands within a few percent for coals. Fuels classify first — solid (wood, coal, coke), liquid (petroleum fractions, alcohols), gaseous (natural gas, LPG, manufactured gases), natural versus manufactured — but classification is cataloguing; proximate analysis (moisture, volatile matter, ash, fixed carbon by difference) ranks a coal for buying, ultimate analysis feeds the arithmetic.',
      },
      {
        term: 'Octane, cetane, gas fuels',
        kind: 'insight',
        statement: 'Octane number brackets petrol knock between iso-octane (100) and n-heptane (0); cetane number grades diesel ignition delay from n-hexadecane (100) — straight chains that auto-ignite willingly. Typical gases: water gas (CO + H₂) ~11 MJ/m³, producer gas (CO + N₂) ~5 MJ/m³, biogas (CH₄ + CO₂) ~22 MJ/m³, CNG ~37 MJ/m³, LPG (propane–butane) ~93 MJ/m³.',
        detail: 'Engineering moves these numbers: catalytic cracking cuts long chains into branched ones, reforming cyclizes and dehydrogenates chains into aromatics, isomerization rearranges straight paraffins into branched ones, alkylation bolts light olefins into iso-paraffins — every step trading hydrogen for octane. Diesel wants the reverse — readily auto-igniting straight chains — so cetane rises where octane falls; the two scales are near-complementary measures of molecular shape. Gaseous selection is a storage-versus-energy argument: methane tops 55 MJ/kg but carries usable energy per litre only under 200-plus bar of storage; LPG liquefies at modest pressure, which is why it owns the cylinder market; water gas and producer gas are cheap made-on-site fuels whose nitrogen dilution or water-gas shift sets their modest values.',
      },
      {
        term: 'Lubricant properties and VI',
        kind: 'method',
        statement: 'A lubricant must keep a film, flow when cold and refuse to burn: **viscosity** (kinematic, cSt) is the film-keeper; the **viscosity index** $VI = \\frac{L - U}{L - H} \\times 100$ scores thinning with temperature (L, U, H = 0-VI reference, sample and 100-VI reference viscosities at 40 °C); **flash and fire points** (closed-cup Pensky–Martens) price the fire hazard; **cloud and pour points** track wax crystallization for cold service; **acid and saponification numbers** monitor oxidation and ester content.',
        detail: 'High VI means small viscosity change — the Dean–Davis scale anchors it between a naphthenic 0-VI oil and a paraffinic 100-VI oil, and polymers extend it past 150. Mineral oils from petroleum dominate; fixed (vegetable, castor-type) and animal oils bring lubricity but oxidize; synthetics — poly-α-olefins, esters, silicones — buy temperature range; greases thicken mineral oil with a soap matrix. Additives finish the recipe: VI improvers (polymethacrylates), antioxidants, anti-wear and extreme-pressure agents (ZDDP, sulfurized fats), detergents, dispersants and antifoams — each blended to a machine, a climate and a duty cycle.',
      },
    ],
    figures: [
      {
        caption: 'Monomer to chain: $n$ ethylene units join into one polyethylene chain of degree of polymerization $n$; the number-average molar mass is $\\bar{M}_n = DP \\times M_0$ — here $786 \\times 28 \\approx 22{,}000$ g/mol.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Monomers joining into a polymer chain with degree of polymerization" font-family="sans-serif"><text x="360" y="22" text-anchor="middle" font-size="13" fill="currentColor" font-family="sans-serif">monomer to chain: counting by repeat units</text><circle cx="90" cy="95" r="18" fill="none" stroke="currentColor" stroke-width="2"/><text x="90" y="99" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">C₂H₄</text><circle cx="90" cy="150" r="18" fill="none" stroke="currentColor" stroke-width="2"/><text x="90" y="154" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">C₂H₄</text><circle cx="90" cy="205" r="18" fill="none" stroke="currentColor" stroke-width="2"/><text x="90" y="209" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">C₂H₄</text><text x="90" y="250" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">ethylene, M₀ = 28 g/mol</text><line x1="150" y1="150" x2="232" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="242,150 228,143 228,157" fill="currentColor"/><text x="196" y="136" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">polymerization</text><rect x="260" y="136" width="42" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><rect x="306" y="136" width="42" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><rect x="352" y="136" width="42" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><rect x="398" y="136" width="42" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><rect x="444" y="136" width="42" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><rect x="490" y="136" width="42" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><rect x="536" y="136" width="42" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><line x1="260" y1="178" x2="578" y2="178" stroke="currentColor" stroke-width="1.5"/><line x1="260" y1="172" x2="260" y2="184" stroke="currentColor" stroke-width="1.5"/><line x1="578" y1="172" x2="578" y2="184" stroke="currentColor" stroke-width="1.5"/><text x="419" y="200" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">n repeat units — the degree of polymerization</text><text x="419" y="66" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">one chain: number-average molar mass = DP × M₀</text><text x="419" y="86" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">786 × 28 ≈ 22,000 g/mol</text><text x="419" y="240" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">a population of chains averages to Mn = ΣNiMi / ΣNi</text><text x="419" y="262" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">polydispersity Mw / Mn ≥ 1 measures the spread</text></svg>`,
        afterConcept: 1,
      },
      {
        caption: 'Gross calorific values compared: wood ~16, coal ~30, petrol ~46, methane ~55.5 and hydrogen 142 MJ/kg — hydrogen wins per kilogram by three to one but stores badly per litre, the tension Section 5 must resolve.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of gross calorific values of fuels in MJ per kg" font-family="sans-serif"><text x="360" y="22" text-anchor="middle" font-size="13" fill="currentColor" font-family="sans-serif">gross calorific value, MJ per kg</text><line x1="90" y1="40" x2="90" y2="250" stroke="currentColor" stroke-width="2"/><line x1="90" y1="250" x2="690" y2="250" stroke="currentColor" stroke-width="2"/><line x1="90" y1="180" x2="690" y2="180" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><text x="80" y="184" text-anchor="end" font-size="11" fill="currentColor" font-family="sans-serif">50</text><line x1="90" y1="110" x2="690" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="6 4"/><text x="80" y="114" text-anchor="end" font-size="11" fill="currentColor" font-family="sans-serif">100</text><rect x="128" y="228" width="64" height="22" fill="none" stroke="currentColor" stroke-width="2"/><text x="160" y="222" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">16</text><rect x="238" y="208" width="64" height="42" fill="none" stroke="currentColor" stroke-width="2"/><text x="270" y="202" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">30</text><rect x="348" y="186" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2"/><text x="380" y="180" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">46</text><rect x="458" y="172" width="64" height="78" fill="none" stroke="currentColor" stroke-width="2"/><text x="490" y="166" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">55.5</text><rect x="568" y="51" width="64" height="199" fill="none" stroke="currentColor" stroke-width="2"/><text x="600" y="45" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">142</text><text x="160" y="270" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">wood</text><text x="270" y="270" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">coal</text><text x="380" y="270" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">petrol</text><text x="490" y="270" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">methane</text><text x="600" y="270" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">hydrogen</text><text x="360" y="292" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">hydrogen wins per kilogram — but carries that energy in an awkward volume</text></svg>`,
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: 'A chain-length distribution and its DP',
        problem: 'A polyethylene sample contains 2 mol of chains of molar mass 10,000 g/mol and 3 mol of chains of 30,000 g/mol. Find the number-average molar mass, the degree of polymerization (ethylene repeat $M_0 = 28$ g/mol) and the mass fraction of the long chains.',
        steps: [
          { label: 'Step 1', text: 'Number-average: $\\bar{M}_n = \\frac{\\sum N_i M_i}{\\sum N_i} = \\frac{2(10{,}000) + 3(30{,}000)}{2 + 3} = \\frac{20{,}000 + 90{,}000}{5} = \\frac{110{,}000}{5} = 22{,}000$ g/mol.' },
          { label: 'Step 2', text: 'Degree of polymerization: $DP = \\frac{\\bar{M}_n}{M_0} = \\frac{22{,}000}{28} \\approx 786$ repeat units per average chain.' },
          { label: 'Step 3', text: 'Masses: the short-chain batch contributes 20,000 g and the long-chain batch 90,000 g of the 110,000 g total, so long chains are $\\frac{90{,}000}{110{,}000} = 82\\%$ of the mass while being only 60% of the chains.' },
          { label: 'Step 4', text: 'That gap between 60% on a number basis and 82% on a mass basis is why $\\bar{M}_w$ would exceed $\\bar{M}_n$ here — the distribution is polydisperse, and its breadth is exactly what the ratio $\\bar{M}_w/\\bar{M}_n$ measures.' },
        ],
        result: 'M̄n = 22,000 g/mol; DP ≈ 786; the long chains carry 82% of the mass.',
      },
      {
        title: 'Coal analysis through Dulong to LCV',
        problem: 'The ultimate analysis of a bituminous coal gives C 82%, H 5%, O 8%, S 2%, N 1% and ash 2% by mass. Estimate the gross calorific value by Dulong and the net calorific value at 25 °C.',
        steps: [
          { label: 'Step 1', text: 'Available hydrogen: the fuel’s own oxygen consumes $\\frac{8}{8} = 1\\%$ of hydrogen, leaving $H - \\frac{O}{8} = 5 - 1 = 4\\%$.' },
          { label: 'Step 2', text: 'Dulong: $HCV = 338(82) + 1442(4) + 93(2) = 27{,}716 + 5{,}768 + 186 = 33{,}670$ kJ/kg.' },
          { label: 'Step 3', text: 'Combustion water: $\\frac{9H}{100} = \\frac{9 \\times 5}{100} = 0.45$ kg of steam per kg of coal from the hydrogen alone.' },
          { label: 'Step 4', text: 'Net value: $LCV = 33{,}670 - 0.45 \\times 2442 = 33{,}670 - 1{,}099 = 32{,}571$ kJ/kg — about 3.3% of the fuel’s energy leaves as latent heat unless a condensing economizer recovers it.' },
        ],
        result: 'HCV ≈ 33,670 kJ/kg (33.7 MJ/kg); LCV ≈ 32,570 kJ/kg (32.6 MJ/kg).',
      },
      {
        title: 'Viscosity index from reference oils',
        problem: 'An oil has kinematic viscosity 75 cSt at 40 °C. The 0-VI reference of matched 100 °C viscosity reads 130 cSt at 40 °C and the 100-VI reference reads 60 cSt. Compute the viscosity index and state what a VI improver would do for it.',
        steps: [
          { label: 'Step 1', text: 'The Dean–Davis definition: $VI = \\frac{L - U}{L - H} \\times 100$, with $U$ the sample and $L$, $H$ the 0-VI and 100-VI reference viscosities at 40 °C.' },
          { label: 'Step 2', text: 'Substitute: $VI = \\frac{130 - 75}{130 - 60} \\times 100 = \\frac{55}{70} \\times 100 = 78.6 \\approx 79$.' },
          { label: 'Step 3', text: 'Interpretation: the oil thins with temperature noticeably less than the poor naphthenic reference but far more than a paraffinic 100-VI one — 79 is a middling mineral oil.' },
          { label: 'Step 4', text: 'A polymethacrylate VI improver coils tight in the cold (adding little viscosity) and uncoils hot (adding thickening), pushing the blend past 130 — the chemistry behind the multigrade grades of Section 5.' },
        ],
        result: 'VI ≈ 79; VI improvers buy multigrade behaviour.',
      },
    ],
    keyTakeaways: [
      'Chain counting is cash counting: $\\bar{M}_n = \\sum N_iM_i/\\sum N_i$, $DP = \\bar{M}_n/M_0$, and the number-versus-mass gap is the polydispersity.',
      'Structure fixes service — branched LDPE films, linear HDPE pipes, hydrogen-bonded nylons for gears, oriented PET for bottles, aramid rods for armour, Si–O silicones for temperature span and tissue contact.',
      '$HCV = LCV + \\frac{9H}{100} \\times 2442$ kJ/kg, and Dulong’s $338C + 1442(H - O/8) + 93S$ prices a fuel straight from its ultimate analysis.',
      'Octane resists auto-ignition (cracking and reforming raise it), cetane rewards it; VI, flash, fire, cloud and pour points decide whether a lubricant survives its machine and its climate.',
    ],
    quiz: [
      {
        q: 'A polypropylene sample has number-average molar mass 42,000 g/mol (repeat unit $\\text{C}_3\\text{H}_6$, $M_0 = 42$ g/mol). Its degree of polymerization is:',
        options: ['1,000', '1,500', '2,000', '4,200'],
        answer: 0,
        explanation: 'Step 1: The repeat unit count is $DP = \\bar{M}_n / M_0$. Step 2: Substitute: $DP = \\frac{42{,}000}{42}$. Step 3: $DP = 1{,}000$ repeat units per average chain. Step 4: Restate the repeat formula before dividing — using 21 or 84 (half or double the true repeat mass) is how the neighbouring distractors are manufactured.',
      },
      {
        q: 'Which polymer is stretch-oriented around a bottle so that crystallinity and chain orientation supply the gas barrier?',
        options: ['LDPE cling film', 'Bottle-grade PET', 'Bakelite-type phenolic', 'Plasticized PVC'],
        answer: 1,
        explanation: 'Step 1: The service demands transparency plus CO₂ retention under pressure. Step 2: PET crystallizes slowly enough to be stretch-blown clear, and biaxial orientation packs chains into a dense barrier. Step 3: LDPE is too soft and permeable, a phenolic is a dark thermoset, and plasticized PVC risks leaching its plasticizer into the drink. Step 4: Orientation is also why bottle PET recycles so cleanly into fibre — the chains are already linear and uncoloured.',
      },
      {
        q: 'A diesel is rated poor because its cetane number is low. The molecular reason is:',
        options: ['Too many straight chains that auto-ignite too early', 'Too many branched and aromatic molecules that resist auto-ignition', 'Excess sulfur raising the cloud point', 'Water entrained in the fuel'],
        answer: 1,
        explanation: 'Step 1: Cetane grades ignition delay — n-hexadecane (100) lights almost on injection. Step 2: Branched and aromatic molecules resist compression-ignition, so they rate low on the cetane scale. Step 3: The fix is the opposite of petrol practice: more paraffinic straight-chain material, fewer aromatics. Step 4: Octane and cetane are near-complementary readings of the same molecular shape property.',
      },
      {
        q: 'The 2442 kJ/kg term in the HCV–LCV relation accounts for:',
        options: ['Heat carried out in flue gases by nitrogen', 'Latent heat of the steam formed from hydrogen combustion', 'Sensible heat of the fuel before firing', 'Vaporization of injected fuel droplets'],
        answer: 1,
        explanation: 'Step 1: Hydrogen burns to water, and 1 kg of hydrogen yields 9 kg of it. Step 2: If that water leaves the boiler as steam, its latent heat — 2442 kJ/kg at 25 °C — is lost with it. Step 3: The gross value assumes the water condenses and returns the heat: $HCV = LCV + \\frac{9H}{100} \\times 2442$. Step 4: Condensing economizers are installed to collect exactly this term.',
      },
    ],
  },

  // ------------------------------ chem-engg-s3 · Nanomaterials & Green Chemistry
  {
    sectionId: 'chem-engg-s3',
    readingTime: 9,
    prerequisites: [
      'Colloids, adsorption and catalysis (Chemical Kinetics & Surface Chemistry)',
      'Semiconductor band gaps and photon energies (the physics volume)',
      'Fuels, fertilizers and industrial processes (Everyday & Industrial Chemistry)',
    ],
    intro: 'Shrink a material to a few nanometres and its behaviour changes chemistry, not just scale: a gold colloid turns wine-red, a semiconductor dot glows with a colour set by its diameter, and titania begins to clean itself in sunlight. The reason is arithmetic as much as physics — at 3 nm roughly a third of all atoms sit on the surface, so surface chemistry dominates the thermodynamics. This section covers how such materials are made — carving bulk matter down (top-down) or assembling it from ions and molecules (bottom-up) — and what their electrons do: plasmon resonance, size-tuned band gaps and photocatalysis. It then turns to green chemistry, the design philosophy that asks every synthesis to waste less from the start: twelve principles, atom-economy arithmetic, safer solvents and catalytic routes. The synthesis chemistry here is ours; device-scale nanoelectronics and the carbon family belong to the nanotechnology shelf.',
    objectives: [
      'Quantify the surface-to-volume explosion at the nanoscale ($A/V = 3/r$) and classify 0D–3D nanomaterials',
      'Distinguish top-down from bottom-up synthesis and write the sol–gel, chemical-reduction and CVD chemistry',
      'Explain plasmonic gold colour, quantum-dot tuning, silver antibacterial action and TiO₂ photocatalysis',
      'Apply the twelve green-chemistry principles and compute atom economy for competing routes',
    ],
    concepts: [
      {
        term: 'Surface-to-volume explosion',
        kind: 'law',
        statement: 'For a sphere $\\frac{A}{V} = \\frac{3}{r}$, so specific surface scales inversely with size: a 3 nm particle exposes about **1,000 times** the surface per gram of a 3 µm one, and at 3 nm roughly a third of the atoms sit at the surface.',
        detail: 'The worked example below prices one gram of gold at 0.1 m² or 104 m² depending on particle size — that is the difference between a shiny bead and a workhorse catalyst support. Curvature adds a third effect: surface atoms are under-coordinated and carry excess energy, which lowers melting points by hundreds of degrees at a few nanometres and lets nano-gold, inert as jewellery, catalyse carbon monoxide oxidation near room temperature. Whenever a property lives at the surface — catalysis, dissolution, adsorption, toxicity — the nanoscale multiplies it.',
      },
      {
        term: 'Dimensionality classes 0D–3D',
        kind: 'definition',
        statement: '**0D**: nanoparticles and quantum dots, clamped in all three directions; **1D**: nanotubes, nanowires, nanorods, extended along one axis; **2D**: thin films, nanosheets, layered clays; **3D**: solids nanostructured throughout — nanocomposites and nanocrystalline ceramics.',
        detail: 'The class predicts which property becomes size-tunable: dots tune optical absorption and emission through confinement in all directions, wires carry current along one axis, films control transport across a thickness, and nanocomposites borrow stiffness or barrier behaviour from a dispersed phase. Device-scale nanoelectronics and the carbon family — graphene sheets and nanotubes — are treated in the nanotechnology volume; here we make such structures chemically and put their surfaces to work.',
      },
      {
        term: 'Top-down versus bottom-up',
        kind: 'method',
        statement: '**Top-down** carves nanostructure from bulk — high-energy ball milling, laser ablation of a target, lithographic patterning and etching — subtractive, scalable, but defect-rich and limited near 10 nm. **Bottom-up** builds from atoms, ions and molecules — sol–gel condensation, chemical reduction, chemical vapour deposition, self-assembly — additive and size-controlled by chemistry.',
        detail: 'Sol–gel is the archetype: an alkoxide such as tetraethyl orthosilicate hydrolyses, $\\text{Si(OR)}_4 + 4\\text{H}_2\\text{O} \\rightarrow \\text{Si(OH)}_4 + 4\\text{ROH}$, then condenses, $\\text{Si(OH)}_4 \\rightarrow \\text{SiO}_2 + 2\\text{H}_2\\text{O}$, growing an oxide network at room temperature into coatings, fibres and catalyst supports. Chemical reduction turns ions into metal colloids — citrate or borohydride reduces $\\text{AuCl}_4^-$ to gold nuclei that grow and are capped against aggregation, the ruby-colloid chemistry; silver nitrate reduces similarly, and Tollens reagent grows flat silver nanoplatelets. CVD delivers gaseous precursors that react on a hot substrate — $\\text{TiCl}_4 + \\text{CH}_4$ laying down titanium carbide — while self-assembly lets amphiphiles, block copolymers or functionalized particles find their own order. The choice is economics: milling wins on tonnes, bottom-up wins on monodispersity.',
      },
      {
        term: 'Plasmons and quantum dots',
        kind: 'insight',
        statement: 'A 20 nm gold sphere resonates with visible light near **520 nm** — localized surface plasmon resonance — so dilute gold colloids look red-purple while aggregation shifts the colour toward blue-violet. In semiconductor **quantum dots**, confining carriers in a box raises their energy as $1/r^2$: smaller dot, wider gap, bluer emission.',
        detail: 'The plasmon is the collective sloshing of conduction electrons against the restoring field of the lattice; its wavelength tracks particle size, shape and spacing, which is how one metal yields a palette of colours. In a dot, the band gap widens as the radius shrinks — a 2 nm cadmium-selenide-type dot glows blue-green while a 5 nm one glows orange-red, so composition stays fixed while colour becomes a size dial. Silver’s plasmon near 400 nm underlies its yellow colloids and its antibacterial action: released $\\text{Ag}^+$ and surface contact rupture bacterial membranes. Iron-oxide (magnetite) nanoparticles add remote steering — magnetic separation of labelled cells and guided drug delivery.',
      },
      {
        term: 'Photocatalysis on TiO₂',
        kind: 'method',
        statement: 'Anatase $\\text{TiO}_2$ ($E_g = 3.2$ eV) absorbs below about 388 nm; the photon splits the excitation into a conduction-band electron and a valence-band hole, the hole oxidizing surface water to hydroxyl radicals ($\\text{H}_2\\text{O} + h^{+} \\rightarrow {}^{\\bullet}\\text{OH} + \\text{H}^{+}$) while the electron reduces oxygen — together they mineralize organics.',
        detail: 'Hydroxyl radicals are near-indiscriminate oxidants, so nano-titania films degrade grease, dye and bacteria on self-cleaning glass and in water-treatment reactors using only the Sun’s ultraviolet edge. The band positions must cooperate: the hole oxidizing enough to make the radical, the electron reducing enough to activate oxygen; doping with nitrogen or coupling a visible absorber widens the working spectrum. Nanostructured films beat slurries because the catalyst stays put on the window instead of leaving with the water.',
      },
      {
        term: 'Twelve principles, atom economy',
        kind: 'law',
        statement: 'Green chemistry designs waste out at the drawing board — prevention, **atom economy**, less hazardous synthesis, benign solvents, energy efficiency, renewable feedstocks, reduced derivatives, catalysis, degradable design, real-time analysis and inherently safer chemistry (the twelve Anastas–Warner principles). Atom economy scores a route by mass: $$\\text{AE} = \\frac{\\text{molar mass of desired product}}{\\sum \\text{molar masses of all reactants}} \\times 100.$$',
        detail: 'Addition polymerization of ethylene is the perfect 100% — every atom charged becomes product; condensations pay the water toll; substitutions and stoichiometric oxidations can waste over half the charge. The ibuprofen story sets the bar: the classical six-step route ran near 40% atom economy with stoichiometric aluminium wastes, while a three-step catalytic route — acylation, hydrogenation, carbonylation — reaches about 77%, and near 99% counting recycled acetic acid. Solvents follow the same ledger: supercritical CO₂ (above 31 °C and 74 bar) replaces hexane and chlorinated solvents in extraction; ionic liquids barely evaporate and dissolve what water cannot; enzymes run chiral syntheses in water at room temperature.',
      },
    ],
    figures: [
      {
        caption: 'Two roads to the nanoscale: top-down routes carve bulk matter away (ball milling, laser ablation, lithography), while bottom-up routes grow particles from ions and molecules (sol–gel, chemical reduction, CVD, self-assembly).',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top-down and bottom-up synthesis routes to nanomaterials" font-family="sans-serif"><text x="360" y="22" text-anchor="middle" font-size="13" fill="currentColor" font-family="sans-serif">two routes to the nanoscale</text><text x="45" y="52" font-size="12" fill="currentColor" font-family="sans-serif">TOP-DOWN — carve bulk matter</text><rect x="40" y="60" width="150" height="50" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="115" y="80" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">bulk metal,</text><text x="115" y="96" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">ceramic or polymer</text><line x1="190" y1="85" x2="222" y2="85" stroke="currentColor" stroke-width="2"/><polygon points="230,85 218,79 218,91" fill="currentColor"/><rect x="232" y="60" width="184" height="50" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="324" y="80" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">ball milling · laser ablation</text><text x="324" y="96" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">lithography + etching</text><line x1="416" y1="85" x2="444" y2="85" stroke="currentColor" stroke-width="2"/><polygon points="452,85 440,79 440,91" fill="currentColor"/><circle cx="470" cy="78" r="6" fill="currentColor"/><circle cx="484" cy="88" r="5" fill="currentColor"/><circle cx="467" cy="93" r="4" fill="currentColor"/><line x1="505" y1="84" x2="550" y2="128" stroke="currentColor" stroke-width="2"/><polygon points="550,128 539,124 545,117" fill="currentColor"/><text x="45" y="192" font-size="12" fill="currentColor" font-family="sans-serif">BOTTOM-UP — grow from ions and molecules</text><rect x="40" y="200" width="150" height="50" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="115" y="220" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">atoms · ions ·</text><text x="115" y="236" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">molecules</text><line x1="190" y1="225" x2="222" y2="225" stroke="currentColor" stroke-width="2"/><polygon points="230,225 218,219 218,231" fill="currentColor"/><rect x="232" y="200" width="184" height="50" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="324" y="220" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">sol–gel · chemical reduction</text><text x="324" y="236" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">CVD · self-assembly</text><line x1="416" y1="225" x2="444" y2="225" stroke="currentColor" stroke-width="2"/><polygon points="452,225 440,219 440,231" fill="currentColor"/><circle cx="470" cy="212" r="6" fill="currentColor"/><circle cx="484" cy="222" r="5" fill="currentColor"/><circle cx="467" cy="227" r="4" fill="currentColor"/><line x1="505" y1="216" x2="550" y2="172" stroke="currentColor" stroke-width="2"/><polygon points="550,172 545,183 539,177" fill="currentColor"/><rect x="556" y="120" width="140" height="60" rx="6" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="626" y="146" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">1–100 nm</text><text x="626" y="164" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">materials</text><text x="360" y="284" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">top-down buys tonnage; bottom-up buys monodispersity — the choice is economics</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'The surface-area ledger',
        problem: 'Compare the total surface area of 1.0 g of gold ($\\rho = 19.3$ g/cm³) divided into (a) 3 µm-diameter and (b) 3 nm-diameter spheres, and state what the ratio means for catalysis.',
        steps: [
          { label: 'Step 1', text: 'Volume of gold: $V = \\frac{m}{\\rho} = \\frac{1.0}{19.3} = 0.0518\\ \\text{cm}^3 = 5.18 \\times 10^{-8}\\ \\text{m}^3$.' },
          { label: 'Step 2', text: 'Micron case: one sphere of $r = 1.5 \\times 10^{-6}$ m has $v_p = \\frac{4}{3}\\pi r^3 = 1.41 \\times 10^{-17}$ m³ and $a_p = 4\\pi r^2 = 2.83 \\times 10^{-11}$ m², so $N = \\frac{5.18 \\times 10^{-8}}{1.41 \\times 10^{-17}} = 3.7 \\times 10^{9}$ particles and total $A = Na_p \\approx 0.10$ m².' },
          { label: 'Step 3', text: 'Nano case: shrinking $r$ by $10^3$ multiplies the particle count by $10^9$ and divides each area by $10^6$, so the area gains $10^3$: $A \\approx 104$ m².' },
          { label: 'Step 4', text: 'Ratio $= \\frac{104}{0.10} \\approx 10^3$ — the same gram offers a thousand times the catalytic real estate, which is why supported-metal catalysts are prepared as few-nanometre particles and why sintering (particles merging and growing) is how a catalyst dies.' },
        ],
        result: '0.10 m² versus 104 m² per gram — a factor of about 1,000.',
      },
      {
        title: 'Atom economy of two polymerizations',
        problem: 'Score the routes: (a) ethylene polymerizes to polyethylene; (b) nylon-6,6 forms from hexamethylenediamine ($M = 116$) and adipic acid ($M = 146$), losing two waters per repeat of mass 226. Compute the atom economy of each.',
        steps: [
          { label: 'Step 1', text: 'Definition: $AE = \\frac{M_{\\text{desired}}}{\\sum M_{\\text{reactants}}} \\times 100$.' },
          { label: 'Step 2', text: '(a) $n\\ \\text{CH}_2\\text{=CH}_2 \\rightarrow$ a chain of $n$ repeats: mass $28n$ out of $28n$ charged, so $AE = 100\\%$ — addition polymerization wastes nothing by construction.' },
          { label: 'Step 3', text: '(b) Per repeat: reactants $116 + 146 = 262$; byproduct $2 \\times 18 = 36$; conservation check $226 + 36 = 262$ ✓.' },
          { label: 'Step 4', text: '$AE = \\frac{226}{262} \\times 100 = 86.3\\%$ — the missing 13.7% leaves as condensation water, the unavoidable tax of step-growth chemistry.' },
        ],
        result: 'Polyethylene 100%; nylon-6,6 86.3% — the water tax of condensation.',
      },
      {
        title: 'Photons available to a photocatalyst',
        problem: 'An anatase film ($E_g = 3.2$ eV) is lit by a 365 nm ultraviolet lamp delivering 1.0 W. (a) What energy does a 365 nm photon carry, and can it excite the catalyst? (b) How many photons arrive per second?',
        steps: [
          { label: 'Step 1', text: 'Photon energy: $E = \\frac{1240}{\\lambda\\ (\\text{nm})}\\ \\text{eV} = \\frac{1240}{365} = 3.40$ eV.' },
          { label: 'Step 2', text: 'Compare with the gap: $3.40 > 3.2$ eV, so each photon can promote an electron and leave a hole — the lamp sits just above threshold, while visible 450 nm light carries only 2.76 eV and cannot.' },
          { label: 'Step 3', text: 'Convert to joules: $3.40 \\times 1.602 \\times 10^{-19} = 5.45 \\times 10^{-19}$ J per photon.' },
          { label: 'Step 4', text: 'Photon flux: $\\frac{1.0}{5.45 \\times 10^{-19}} = 1.8 \\times 10^{18}$ photons per second — the ceiling on electron–hole pairs, of which recombination returns most before they can reach the surface.' },
        ],
        result: '3.40 eV, above the 3.2 eV gap; about 1.8 × 10¹⁸ photons per second per watt.',
      },
    ],
    keyTakeaways: [
      '$A/V = 3/r$: a 3 nm particle carries about 1,000 times the specific surface of a 3 µm one and puts a third of its atoms on the outside — chemistry becomes surface chemistry.',
      'Make nano by carving (milling, ablation, lithography) or by growing (sol–gel hydrolysis–condensation, ion reduction, CVD, self-assembly); the route trades tonnage against monodispersity.',
      'Confinement tunes colour two ways — metal plasmons (gold near 520 nm) and semiconductor band gaps (smaller dot, bluer light) — while TiO₂ turns ultraviolet photons into hydroxyl-radical cleaning.',
      'Green chemistry is arithmetic plus philosophy: $AE = \\frac{\\text{desired mass}}{\\text{reactant mass}} \\times 100$, twelve principles, catalytic routes and supercritical-CO₂, ionic-liquid and enzyme solvents replacing hazardous ones.',
    ],
    quiz: [
      {
        q: 'By what factor does the surface-to-volume ratio of a spherical particle increase when its radius shrinks from 2 µm to 2 nm?',
        options: ['10', '100', '1,000', '1,000,000'],
        answer: 2,
        explanation: 'Step 1: For a sphere, $A/V = 3/r$ — inversely proportional to the radius. Step 2: The radius falls by a factor $\\frac{2\\ \\mu\\text{m}}{2\\ \\text{nm}} = 1{,}000$. Step 3: The surface-to-volume ratio therefore rises by the same factor, 1,000. Step 4: Volume falls by $10^9$ while area falls by only $10^6$ — their ratio, and the area per gram, gains $10^3$.',
      },
      {
        q: 'A ruby-red gold colloid owes its colour to:',
        options: ['Iron impurity in the gold lattice', 'Localized surface plasmon resonance near 520 nm', 'A size-quantized band-gap emission', 'Rayleigh scattering from the glass vial'],
        answer: 1,
        explanation: 'Step 1: A 20 nm gold sphere sustains a collective oscillation of its conduction electrons — the localized surface plasmon. Step 2: The resonance absorbs and scatters light near 520 nm, removing the green from the transmitted beam. Step 3: The colloid therefore transmits red-purple, and aggregation couples the plasmons, shifting the colour toward blue-violet. Step 4: Band-gap emission is the quantum-dot mechanism; gold’s colour is an electronic resonance, not a quantized transition.',
      },
      {
        q: 'In the sol–gel route to silica, the step that actually builds the Si–O–Si network is:',
        options: ['Thermal decomposition of the alkoxide', 'Hydrolysis of Si–OR to Si–OH alone', 'Condensation of two silanols with loss of water', 'Reduction of the silicon centre'],
        answer: 2,
        explanation: 'Step 1: Hydrolysis replaces alkoxy groups with hydroxyl: $\\text{Si(OR)}_4 + 4\\text{H}_2\\text{O} \\rightarrow \\text{Si(OH)}_4 + 4\\text{ROH}$. Step 2: Condensation then joins the centres, releasing water and forming the siloxane bridge. Step 3: Repeated condensation grows the oxide network into a gel at near-ambient temperature. Step 4: Hydrolysis only prepares the monomer — network formation is the condensation step.',
      },
      {
        q: 'The catalytic three-step ibuprofen route is greener than the classical six-step route mainly because:',
        options: ['It runs at a higher temperature', 'Catalytic steps replace stoichiometric reagents, lifting atom economy from about 40% to 77%', 'It uses more solvent per kilogram of product', 'It converts a batch process into continuous flow'],
        answer: 1,
        explanation: 'Step 1: The classical route used stoichiometric aluminium-based reagents whose spent salts became waste. Step 2: The catalytic route — acylation, hydrogenation, carbonylation — builds the molecule without that by-product mass. Step 3: Atom economy rises from roughly 40% to about 77%, and near 99% counting the recycled acetic acid. Step 4: Solvent and energy matter too, but the headline saving is stoichiometric waste designed out at the reaction level.',
      },
    ],
  },

  // ------------------------------ chem-engg-s4 · Water & Corrosion Control (Workshop)
  {
    sectionId: 'chem-engg-s4',
    readingTime: 10,
    prerequisites: [
      'Water Treatment & Corrosion (Section 1 of this chapter)',
      'Stoichiometry: mole–mass and limiting-reagent bookkeeping',
      'Faraday laws of electrolysis (Electrochemistry)',
    ],
    intro: 'This is the workshop: every method of Section 1 returns as an arithmetic drill with full solutions. Hardness conversions collapse mixtures of salts into one CaCO₃ number; lime and soda doses fall out of a water analysis by stoichiometry, one mole of reagent per mole of equivalent hardness. Volumetric analysis arrives as the EDTA titration, in which each millilitre of 0.01 M reagent is exactly one milligram of CaCO₃. Boiler practice contributes the make-up and blowdown mass balance that keeps dissolved solids below their limit. Corrosion closes the set with weight-loss rates in mdd and mpy, and the Faraday arithmetic that sizes a sacrificial anode for a decade of service. Work each problem a second time with the book closed — these are the patterns engineering selection assessments and university papers actually ask.',
    objectives: [
      'Convert salt analyses and EDTA titres into ppm as CaCO₃, and move between ppm, °Fr and °Cl',
      'Size lime and soda doses from a full water analysis, including the double-lime demand of temporary magnesium',
      'Set boiler make-up and blowdown rates from a dissolved-solids mass balance',
      'Compute corrosion rates in mdd, mpy and mm/yr, and sacrificial-anode masses from the Faraday law',
    ],
    concepts: [
      {
        term: 'CaCO₃-equivalent ladder',
        kind: 'method',
        statement: 'Hardness as CaCO₃ = salt mg/L × $\\frac{100}{M}$ per divalent ion: $\\text{Ca(HCO}_3)_2 \\times \\frac{100}{162}$, $\\text{Mg(HCO}_3)_2 \\times \\frac{100}{146}$, $\\text{CaCl}_2 \\times \\frac{100}{111}$, $\\text{MgCl}_2 \\times \\frac{100}{95}$, $\\text{CaSO}_4 \\times \\frac{100}{136}$, $\\text{MgSO}_4 \\times \\frac{100}{120}$.',
        detail: 'Units of the same number: 1 °Fr = 10 ppm, 1 °Cl (Clarke) = 14.3 ppm, and 1 milliequivalent per litre = 50 ppm as CaCO₃. The mole logic guards the traps — one mole of each salt carries one mole of a divalent ion, equivalent to one mole (100 g) of CaCO₃, so dividing by the equivalent weight ($M/2$) instead of the molar mass doubles the answer. When an analysis quotes ion concentrations instead of salts, the factors become $\\frac{100}{40}$ for Ca²⁺ and $\\frac{100}{24.3}$ for Mg²⁺.',
      },
      {
        term: 'Lime and soda doses',
        kind: 'method',
        statement: 'From CaCO₃-equivalent ppm: $$\\text{lime as Ca(OH)}_2 = \\frac{74}{100}\\left(T_{\\text{Ca}} + 2T_{\\text{Mg}} + P_{\\text{Mg}}\\right), \\qquad \\text{soda as Na}_2\\text{CO}_3 = \\frac{106}{100}\\left(P_{\\text{Ca}} + P_{\\text{Mg}}\\right),$$ with $T$ and $P$ the temporary and permanent hardness of each metal.',
        detail: 'The 2 in front of temporary magnesium is the classic trap: $\\text{Mg(HCO}_3)_2 + 2\\text{Ca(OH)}_2 \\rightarrow \\text{Mg(OH)}_2\\downarrow + 2\\text{CaCO}_3\\downarrow + 2\\text{H}_2\\text{O}$ — one lime neutralizes the alkalinity, a second precipitates the magnesium. Permanent calcium needs no lime (soda precipitates it directly); permanent magnesium costs one lime to become a calcium salt plus one soda to catch that calcium. Quote the dose as CaO by swapping $\\frac{56}{100}$ for $\\frac{74}{100}$, and add extra lime for free carbon dioxide or mineral acidity when the analysis lists them.',
      },
      {
        term: 'EDTA titration arithmetic',
        kind: 'method',
        statement: 'EDTA complexes Ca²⁺ and Mg²⁺ one-to-one, so hardness $= \\frac{V_{\\text{EDTA}} \\times M_{\\text{EDTA}} \\times 100{,}000}{V_{\\text{sample}}}$ mg/L as CaCO₃, and **1 mL of 0.01 M EDTA ≡ 1 mg of CaCO₃** because $0.01\\ \\text{mmol} \\times 100\\ \\text{mg/mmol} = 1$ mg.',
        detail: 'The 100,000 folds in the molar mass of CaCO₃ (100 g/mol) and the mg-per-gram factor; with volumes in mL the units settle to mg/L. The Eriochrome Black-T endpoint turns wine-red to blue in an ammonia buffer at pH 10, and the sample must be filtered — precipitated carbonate does not complex. The older soap-solution method read a lather endpoint instead; less precise, but it reports the same hardness in the same CaCO₃ terms.',
      },
      {
        term: 'Boiler make-up, blowdown',
        kind: 'law',
        statement: 'Steam carries no salt, so dissolved solids balance as feed-in equals blowdown-out: $$F \\cdot X_F = B \\cdot X_B, \\qquad \\frac{B}{F} = \\frac{X_F}{X_B}, \\qquad \\text{make-up} = \\frac{S}{1 - B/F},$$ with $S$ the steam rate and $X$ the dissolved-solids concentrations.',
        detail: 'Feed at 400 ppm against a 2,000 ppm boiler limit forces $B/F = 0.2$ — blow down one litre for every four litres steamed, and buy 25 kg of extra feed per 100 kg of steam. Every blowdown litre leaves at boiler temperature and pressure, so the economics push feed quality up rather than blowdown up; external treatment or internal conditioning lowers $X_F$, and the balance rewards it directly.',
      },
      {
        term: 'Corrosion rate units',
        kind: 'notation',
        statement: 'Weight-loss rate: $\\text{mdd} = \\frac{\\Delta m\\ (\\text{mg})}{A\\ (\\text{dm}^2) \\times t\\ (\\text{days})}$. Depth rates: $\\text{mpy} = \\frac{\\text{mdd}}{0.696\\,\\rho}$ with $\\rho$ in g/cm³, and $\\text{mm/yr} = 0.0254 \\times \\text{mpy}$.',
        detail: 'The bridge is geometry: 1 mil is 25.4 µm, so 1 mil per year on steel means $25.4 \\times 10^{-4}$ cm of metal over 100 cm² (one dm²) per year — 0.254 cm³, times 7.86 g/cm³ is 2.0 g, and per day that is about 5.5 mg — so 1 mpy ≈ 5.5 mdd for steel, and a coupon reading 15 mdd is losing 2.7 mpy ≈ 0.07 mm/yr. Weight-loss coupons average away localized pits (report pit depth separately), and rates for different metals only compare after conversion to depth units.',
      },
      {
        term: 'Anode mass by Faraday',
        kind: 'law',
        statement: 'A sacrificial anode of molar mass $M$ losing $n$ electrons per ion supplies $$m = \\frac{I\\,t\\,M}{n\\,F}, \\qquad F = 96{,}485\\ \\text{C/mol},$$ and the purchased anode mass divides by the utilization efficiency — typically 0.4 to 0.6 for magnesium and zinc.',
        detail: 'Magnesium ($M = 24.3$, $n = 2$) dissolves at $\\frac{24.3}{2 \\times 96{,}485} = 1.26 \\times 10^{-4}$ g/C, about 4 kg per ampere-year, so a modest 0.25 A of protection eats roughly 1 kg of magnesium per year before efficiency losses. Sizing starts from the current density needed to hold the protective potential — of order tens of milliamperes per square metre for well-coated steel in soil or water. Impressed-current systems invert the bookkeeping: the structure receives electrons from a supply through a nearly inert anode, so anode consumption is small but the delivered current obeys the same Faraday arithmetic.',
      },
    ],
    figures: [
      {
        caption: 'From analysis to dose: split the CaCO₃-equivalent hardness into temporary and permanent calcium and magnesium, then combine them into the lime demand $\\frac{74}{100}(T_{\\text{Ca}} + 2T_{\\text{Mg}} + P_{\\text{Mg}})$ and the soda demand $\\frac{106}{100}(P_{\\text{Ca}} + P_{\\text{Mg}})$.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Water analysis converted to lime and soda doses" font-family="sans-serif"><text x="360" y="22" text-anchor="middle" font-size="13" fill="currentColor" font-family="sans-serif">from water analysis to softening doses</text><rect x="30" y="70" width="220" height="160" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="140" y="92" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">analysis, as CaCO₃</text><text x="45" y="118" font-size="11" fill="currentColor" font-family="sans-serif">temporary Ca</text><text x="240" y="118" text-anchor="end" font-size="11" fill="currentColor" font-family="sans-serif">10 ppm</text><text x="45" y="142" font-size="11" fill="currentColor" font-family="sans-serif">temporary Mg</text><text x="240" y="142" text-anchor="end" font-size="11" fill="currentColor" font-family="sans-serif">5 ppm</text><text x="45" y="166" font-size="11" fill="currentColor" font-family="sans-serif">permanent Ca</text><text x="240" y="166" text-anchor="end" font-size="11" fill="currentColor" font-family="sans-serif">10 ppm</text><text x="45" y="190" font-size="11" fill="currentColor" font-family="sans-serif">permanent Mg</text><text x="240" y="190" text-anchor="end" font-size="11" fill="currentColor" font-family="sans-serif">10 ppm</text><text x="45" y="214" font-size="11" fill="currentColor" font-family="sans-serif">total</text><text x="240" y="214" text-anchor="end" font-size="11" fill="currentColor" font-family="sans-serif">35 ppm</text><path d="M 250 130 C 320 110 370 80 428 80" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="436,80 424,74 424,86" fill="currentColor"/><text x="336" y="66" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">temp Ca + 2·temp Mg + perm Mg</text><path d="M 250 180 C 320 200 370 228 428 228" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="436,228 424,222 424,234" fill="currentColor"/><text x="330" y="254" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">perm Ca + perm Mg</text><rect x="444" y="48" width="246" height="66" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="567" y="70" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">lime as Ca(OH)₂</text><text x="567" y="88" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">(74/100) × (10 + 2×5 + 10)</text><text x="567" y="106" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">= 22.2 mg/L</text><rect x="444" y="194" width="246" height="66" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="567" y="216" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">soda as Na₂CO₃</text><text x="567" y="234" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">(106/100) × (10 + 10)</text><text x="567" y="252" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">= 21.2 mg/L</text><text x="360" y="288" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">temporary magnesium pays double lime — one for the alkalinity, one to precipitate Mg(OH)₂</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'A complete lime–soda dose',
        problem: 'A water analysis reports calcium bicarbonate 16.2 mg/L, magnesium bicarbonate 7.3 mg/L, magnesium chloride 9.5 mg/L and calcium sulfate 13.6 mg/L ($M$: 162, 146, 95, 136). Find the total hardness as CaCO₃ and the stoichiometric lime (as Ca(OH)₂) and soda (as Na₂CO₃) doses.',
        steps: [
          { label: 'Step 1', text: 'Convert to CaCO₃ equivalents: $\\text{Ca(HCO}_3)_2$: $16.2 \\times \\frac{100}{162} = 10$ ppm temporary Ca; $\\text{Mg(HCO}_3)_2$: $7.3 \\times \\frac{100}{146} = 5$ ppm temporary Mg; $\\text{MgCl}_2$: $9.5 \\times \\frac{100}{95} = 10$ ppm permanent Mg; $\\text{CaSO}_4$: $13.6 \\times \\frac{100}{136} = 10$ ppm permanent Ca.' },
          { label: 'Step 2', text: 'Total hardness $= 10 + 5 + 10 + 10 = 35$ ppm as CaCO₃ — of which 15 ppm is temporary and 20 ppm permanent.' },
          { label: 'Step 3', text: 'Lime $= \\frac{74}{100}(T_{\\text{Ca}} + 2T_{\\text{Mg}} + P_{\\text{Mg}}) = 0.74 \\times (10 + 10 + 10) = 0.74 \\times 30 = 22.2$ mg/L as $\\text{Ca(OH)}_2$.' },
          { label: 'Step 4', text: 'Soda $= \\frac{106}{100}(P_{\\text{Ca}} + P_{\\text{Mg}}) = 1.06 \\times (10 + 10) = 1.06 \\times 20 = 21.2$ mg/L as $\\text{Na}_2\\text{CO}_3$.' },
          { label: 'Step 5', text: 'Cross-check by reactions: the 10 ppm temporary Ca costs $0.74 \\times 10 = 7.4$ mg/L lime; the 5 ppm temporary Mg costs $2 \\times 0.74 \\times 5 = 7.4$; the 10 ppm permanent Mg costs $7.4$ lime plus $1.06 \\times 10 = 10.6$ soda; the 10 ppm permanent Ca costs $10.6$ soda — reassembling to $22.2$ mg/L lime and $21.2$ mg/L soda ✓.' },
        ],
        result: 'Total 35 ppm as CaCO₃; lime 22.2 mg/L as Ca(OH)₂; soda 21.2 mg/L as Na₂CO₃.',
      },
      {
        title: 'EDTA titration and degree conversions',
        problem: 'A 100 mL water sample consumes 12.0 mL of 0.01 M EDTA to the Eriochrome Black-T endpoint. Find the hardness in ppm as CaCO₃ and express it in degrees French and degrees Clarke.',
        steps: [
          { label: 'Step 1', text: 'EDTA complexes hardness ions one-to-one: moles of EDTA $= 0.0120\\ \\text{L} \\times 0.01\\ \\text{mol/L} = 1.2 \\times 10^{-4}$ mol $=$ moles of $\\text{Ca}^{2+} + \\text{Mg}^{2+}$.' },
          { label: 'Step 2', text: 'Equivalent CaCO₃ mass $= 1.2 \\times 10^{-4}\\ \\text{mol} \\times 100\\ \\text{g/mol} = 12$ mg in the 100 mL sample — the 1 mL of 0.01 M ≡ 1 mg rule in action.' },
          { label: 'Step 3', text: 'Hardness $= \\frac{12\\ \\text{mg}}{0.100\\ \\text{L}} = 120$ mg/L as CaCO₃.' },
          { label: 'Step 4', text: 'Degrees: $\\frac{120}{10} = 12\\ ^{\\circ}\\text{Fr}$ and $\\frac{120}{14.3} = 8.4\\ ^{\\circ}\\text{Cl}$ (Clarke).' },
        ],
        result: '120 ppm as CaCO₃ = 12 °Fr ≈ 8.4 °Cl.',
      },
      {
        title: 'Coupon rate and a decade-size anode',
        problem: 'A mild-steel coupon of exposed area 25 cm² loses 45.0 mg in 12.0 days in a cooling-water loop ($\\rho = 7.86$ g/cm³). (a) Find mdd, mpy and mm/yr. (b) If cathodic protection must supply 0.25 A to this circuit, what mass of magnesium anode ($M = 24.3$, $n = 2$, $F = 96{,}485$ C/mol, 50% utilization) serves a 10-year design life?',
        steps: [
          { label: 'Step 1', text: 'Area $= 25\\ \\text{cm}^2 = 0.25\\ \\text{dm}^2$, so $\\text{mdd} = \\frac{45.0}{0.25 \\times 12.0} = \\frac{45.0}{3.0} = 15$ mg per dm² per day.' },
          { label: 'Step 2', text: 'Depth rate: $\\text{mpy} = \\frac{\\text{mdd}}{0.696\\rho} = \\frac{15}{0.696 \\times 7.86} = \\frac{15}{5.47} = 2.7$ mils per year.' },
          { label: 'Step 3', text: 'Metric depth: $0.0254 \\times 2.7 = 0.069$ mm/yr — roughly 0.7 mm of wall per decade if the loss stays uniform (pits would run deeper).' },
          { label: 'Step 4', text: 'Faraday consumption: one year is $3.15 \\times 10^{7}$ s, so $m = \\frac{I\\,t\\,M}{nF} = \\frac{0.25 \\times 3.15 \\times 10^{7} \\times 24.3}{2 \\times 96{,}485} = 993$ g of magnesium per year.' },
          { label: 'Step 5', text: 'Utilization and life: at 50% efficiency the purchased metal is $\\frac{0.993}{0.50} \\approx 2.0$ kg/yr, so a 10-year design installs about $20$ kg of magnesium anode.' },
        ],
        result: '15 mdd ≈ 2.7 mpy ≈ 0.069 mm/yr; the anode dissolves ≈ 1 kg/yr and about 20 kg is installed for 10 years at 50% utilization.',
      },
    ],
    keyTakeaways: [
      'One mole of hardness salt ≡ one mole of CaCO₃: multiply mg/L by $\\frac{100}{M}$, never by $\\frac{100}{M/2}$; 1 meq/L = 50 ppm and 1 mL of 0.01 M EDTA ≡ 1 mg of CaCO₃.',
      'Lime $= \\frac{74}{100}(\\text{temp Ca} + 2 \\times \\text{temp Mg} + \\text{perm Mg})$ as Ca(OH)₂; soda $= \\frac{106}{100}(\\text{perm Ca} + \\text{perm Mg})$ as Na₂CO₃.',
      'Blowdown balance $B/F = X_F / X_B$ — cutting feed hardness, not raising blowdown, is the economic fix, because every blowdown litre leaves at boiler temperature.',
      '$\\text{mdd} = \\Delta m/(A\\,t)$; $\\text{mpy} = \\text{mdd}/(0.696\\rho)$ — about 5.5 mdd per mpy for steel — and anode mass $= \\frac{ItM}{nF}$ discounted by utilization.',
    ],
    quiz: [
      {
        q: 'A boiler makes 10,000 kg/h of steam from feed water of 400 ppm dissolved solids; the boiler-water limit is 2,000 ppm. The required blowdown rate is closest to:',
        options: ['1,000 kg/h', '1,600 kg/h', '2,500 kg/h', '4,000 kg/h'],
        answer: 2,
        explanation: 'Step 1: Steam leaves its salt behind, so the solids balance is feed-in equals blowdown-out: $F \\times 400 = B \\times 2{,}000$. Step 2: Hence $\\frac{B}{F} = \\frac{400}{2{,}000} = 0.20$ and steam $= 0.8F = 10{,}000$ kg/h. Step 3: $F = 12{,}500$ kg/h, so $B = 2{,}500$ kg/h. Step 4: Check: $12{,}500 \\times 400 = 5.0 \\times 10^{6} = 2{,}500 \\times 2{,}000$ ✓.',
      },
      {
        q: 'In lime–soda arithmetic, temporary magnesium hardness consumes two equivalents of lime per equivalent of hardness because:',
        options: ['Magnesium is divalent', 'One lime neutralizes the bicarbonate alkalinity and a second raises the pH to precipitate Mg(OH)₂', 'The evolved CO₂ must be scrubbed from the vessel', 'Soda ash cannot react with bicarbonates at all'],
        answer: 1,
        explanation: 'Step 1: The governing reaction is $\\text{Mg(HCO}_3)_2 + 2\\text{Ca(OH)}_2 \\rightarrow \\text{Mg(OH)}_2\\downarrow + 2\\text{CaCO}_3\\downarrow + 2\\text{H}_2\\text{O}$. Step 2: The first lime converts bicarbonate into insoluble calcium carbonate. Step 3: The second supplies the hydroxide concentration that pushes $\\text{Mg(OH)}_2$ past its solubility product. Step 4: Divalency is already priced into the CaCO₃ equivalence — it is not the reason for the factor of two.',
      },
      {
        q: 'A 200 mL water sample takes 25.0 mL of 0.01 M EDTA to the endpoint. The hardness as CaCO₃ is:',
        options: ['50 ppm', '125 ppm', '250 ppm', '500 ppm'],
        answer: 1,
        explanation: 'Step 1: Each millilitre of 0.01 M EDTA matches 1 mg of CaCO₃. Step 2: The 25.0 mL therefore represent 25 mg of hardness in the sample flask. Step 3: Per litre: $\\frac{25\\ \\text{mg}}{0.200\\ \\text{L}} = 125$ mg/L as CaCO₃. Step 4: 250 ppm forgets to divide by the 0.2 L sample volume — the most common EDTA slip.',
      },
      {
        q: 'A coupon test on steel ($\\rho = 7.86$ g/cm³) reports 5.5 mdd. The equivalent depth rate is closest to:',
        options: ['0.1 mpy', '0.5 mpy', '1 mpy', '10 mpy'],
        answer: 2,
        explanation: 'Step 1: Convert the weight-loss rate to a depth rate: $\\text{mpy} = \\frac{\\text{mdd}}{0.696\\rho}$. Step 2: For steel, $0.696 \\times 7.86 = 5.47$ mdd per mpy. Step 3: $\\frac{5.5}{5.47} \\approx 1.0$ mpy. Step 4: 10 mpy is the trap of using 0.0696 instead of 0.696 — a slipped decimal in the density chain.',
      },
    ],
  },

  // ------------------------------ chem-engg-s5 · Materials Chemistry (Case Studies)
  {
    sectionId: 'chem-engg-s5',
    readingTime: 9,
    prerequisites: [
      'Polymers, Fuels & Lubricants (Section 2 of this chapter)',
      'Nanomaterials & Green Chemistry (Section 3 of this chapter)',
      'Water Treatment & Corrosion (Section 1 of this chapter)',
    ],
    intro: 'Materials chemistry earns its keep at the moment of choice: a pipe must be bought, a fleet must pick its fuel, a lubricant grade must go on the requisition. This section runs those decisions as case studies, and every one follows the same discipline — name the service conditions, list the properties that matter, choose, then explain the choice in chemistry. The chemistry is all Section 1–3 stock: glass transitions and hydrogen bonds, calorific values and cetane, viscosity indices and pour points, plasmons and tortuous barrier paths, atom economies and catalytic routes. What is new is the synthesis: a material is never good, only good for a service, and the case method trains exactly that judgement. Read each case twice — once for the decision, once for the reasons that sank the alternatives.',
    objectives: [
      'Run polymer selections for pipes, gears, armour, medical tubing and packaging as property-matched decisions',
      'Compare fleet fuels — CNG, petrol, biodiesel, hydrogen — on emissions, storage and chemistry',
      'Match lubricant grades — SAE multigrades, greases, synthetic esters — to cold starts, sealed bearings and turbine heat',
      'Justify nanocomposite and green-chemistry substitutions — solvents, catalytic oxidants, renewable feedstocks — with numbers',
    ],
    concepts: [
      {
        term: 'The selection case method',
        kind: 'method',
        statement: 'Every materials decision runs the same loop: **situation → properties that matter → decision → the chemistry that explains it**. List the service conditions first — pressure, temperature span, ultraviolet exposure, joining method, food or body contact, design life — then the measurable properties that answer them, and only then consult the menu.',
        detail: 'The rejected alternatives matter as much as the winner: a case persuades only when it explains why the runner-up lost. Costs enter as installed cost per design life, not price per kilogram — a plastic pipe that fuses in seconds and never corrodes can beat cheaper steel on lifecycle arithmetic alone. That habit — service first, material second — is what separates the engineer from the catalogue reader.',
      },
      {
        term: 'Polymer service envelopes',
        kind: 'insight',
        statement: 'Pipe service: **uPVC** buys rigidity and solvent-cement joints but owes the run expansion accommodation ($\\alpha \\approx 8 \\times 10^{-5}$/K); **HDPE** buys ductility and fusion joints for trenchless burial ($\\alpha \\approx 2 \\times 10^{-4}$/K, absorbed by snaking); steel buys pressure and pays corrosion. Gears and bearings run on **nylon-6,6 or acetal** — self-lubricating and quiet, at the price of moisture swelling and creep; **para-aramid** stops bullets with hydrogen-bonded rods; **silicone** tubing sits in the body for years; stretch-oriented **PET** holds the fizz.',
        detail: 'The numbers behind the envelope: 40 K of sunshine swings a 12 m uPVC run by $12 \\times 8 \\times 10^{-5} \\times 40 \\approx 38$ mm (HDPE would move 96 mm, steel 5.8 mm), and outdoor uPVC needs titanium-dioxide pigment against ultraviolet chalking while buried HDPE wears carbon black. Nylon’s N–H···O=C hydrogen bonds buy dry-running self-lubricity and pay a few percent of water absorption — dimensional drift that acetal’s low polarity avoids. The aramid stacks rigid para-oriented rods on the same hydrogen bonds, five times steel’s strength-to-weight for vests and tyre cord; silicone’s Si–O backbone holds flexibility from −60 to +200 °C with no plasticizer to leach into a patient; and clean rPET loops close the bottle-to-bottle cycle that oriented PET opened.',
      },
      {
        term: 'Fleet fuel decisions',
        kind: 'insight',
        statement: 'Per megajoule, methane emits $\\frac{44/16}{55.5} \\approx 0.050$ kg of CO₂ against petrol-model-octane’s $\\frac{352/114}{48} \\approx 0.064$ kg — about 23% less — and methane’s octane rating above 120 permits lean burn. Biodiesel transesterifies triglyceride with methanol to cut vegetable-oil viscosity roughly tenfold; hydrogen’s 142 MJ/kg dwarfs petrol until per-litre storage is priced in.',
        detail: 'CNG pays for its clean burn with 200–250 bar cylinders and under a quarter of petrol’s energy per litre — hence its natural habitat, the return-to-base bus and taxi fleet. Biodiesel chemistry: one tonne of a triolein-type oil plus about 109 kg of methanol (sodium hydroxide catalyst) gives roughly 1,004 kg of methyl ester and 104 kg of glycerol at 90.6% atom economy; esters cloud in the cold (blend limits B5–B20 in temperate climates) but restore the lubricity that deep desulfurization took from diesel. Hydrogen stores as 700-bar gas — under 10 MJ/L — or as a cryogenic liquid at about 71 kg/m³ against petrol’s 34 MJ/L: the tank, not the fuel cell, is the bottleneck, though the cell converts the 142 MJ/kg to electricity at 50–60% efficiency with water as the only exhaust.',
      },
      {
        term: 'Lubricant grade selection',
        kind: 'method',
        statement: 'An **SAE 10W-40** passes two tests: the 10W low-temperature limit (cranking viscosity at −25 °C) and the 40 hot band (12.5–16.3 cSt at 100 °C) — one oil, two grades, courtesy of a viscosity-index improver. Greases stay where oils drain; synthetic esters survive turbine heat that mineral oil cannot.',
        detail: 'The polymer improver coils tight in a cold crankcase — so the oil pumps like a thin grade — and uncoils in hot bearings, thickening like a heavy grade; its weakness is shear breakdown over thousands of hours, which straight grades never suffer. Grease is 80–90% oil held in a lithium-soap matrix: choose it for sealed-for-life bearings and wet or dusty housings, and choose oil where the sump must also carry heat away or filter debris. Aviation turbines run neopentyl-polyol esters — thermally stable past 200 °C with low volatility — and food plants run white-mineral or natural-ester grades whose additive list is food-contact safe.',
      },
      {
        term: 'Nanocomposite reinforcement',
        kind: 'insight',
        statement: 'Dispersing nanoscale filler multiplies interfacial area: **carbon black** toughens tyre rubber against wear and tearing; exfoliated **clay platelets** cut polymer gas permeability by forcing diffusing molecules down tortuous detours; **nano-titania** screens ultraviolet light in clear films; nanoscale precious-metal catalysts spread their active surface across a converter brick.',
        detail: 'Reinforcement lives at the interface: rubber chains adsorb on carbon-black surfaces, so every advancing crack must peel chains off particles that anchor and deflect it — tensile strength and abrasion resistance climb with the surface area the filler brings, the Section 3 ledger spent on tyres. A few weight-percent of exfoliated clay can cut oxygen transmission several-fold because each impermeable platelet forces a detour; nano-titania absorbs the ultraviolet that would photolyze a film or its contents; and converter catalysts — platinum, palladium and rhodium on high-area oxide supports with ceria storing oxygen — do their work from atoms that are mostly surface. The standing risk is dispersion: agglomerates behave as flaws, not reinforcements.',
      },
      {
        term: 'Green substitution decisions',
        kind: 'method',
        statement: 'Substitute by function, with numbers: hexane extraction → **supercritical CO₂** (no solvent residue, no flammability); stoichiometric permanganate or chromate oxidations → **hydrogen peroxide with a tungsten catalyst** (water as the only by-product); petro-polyethylene → **poly(lactic acid) from fermented starch** where composting infrastructure exists.',
        detail: 'Every row of the substitution table needs a metric — solvent lost per tonne of product, salt waste per tonne, atom economy, renewability — because green claims trade against one another: supercritical equipment is capital-hungry, peroxide routes demand catalyst control, and PLA composts industrially only near 58 °C while PET outruns it on barrier and cost. Lactic acid ferments from starch, dimerizes to lactide and ring-opens into the polyester — a renewable feedstock turned into a hydrolysable polymer. The decision, not the label, is the engineering: sometimes the honest answer is the petro-material with a working recycling route.',
      },
    ],
    figures: [
      {
        caption: 'A material-selection map: the service condition on the left fixes the property that matters, which points to the material class on the right — pipe → uPVC/HDPE, dry gears → nylon-6,6/acetal, ballistic duty → para-aramid, body contact → silicone, pressurized clear bottles → oriented PET.',
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Material selection map from service conditions to material classes" font-family="sans-serif"><text x="360" y="22" text-anchor="middle" font-size="13" fill="currentColor" font-family="sans-serif">service condition → property that matters → material</text><rect x="30" y="41" width="205" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="132" y="63" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">pressurized water pipe</text><text x="324" y="53" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">stiffness · joints · UV</text><line x1="240" y1="58" x2="402" y2="58" stroke="currentColor" stroke-width="1.5"/><polygon points="410,58 398,52 398,64" fill="currentColor"/><rect x="470" y="41" width="220" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="580" y="63" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">uPVC / HDPE</text><rect x="30" y="87" width="205" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="132" y="109" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">gears, dry bearings</text><text x="324" y="99" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">self-lubricity · wear</text><line x1="240" y1="104" x2="402" y2="104" stroke="currentColor" stroke-width="1.5"/><polygon points="410,104 398,98 398,110" fill="currentColor"/><rect x="470" y="87" width="220" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="580" y="109" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">nylon-6,6 / acetal</text><rect x="30" y="133" width="205" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="132" y="155" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">ballistic protection</text><text x="324" y="145" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">strength-to-weight</text><line x1="240" y1="150" x2="402" y2="150" stroke="currentColor" stroke-width="1.5"/><polygon points="410,150 398,144 398,156" fill="currentColor"/><rect x="470" y="133" width="220" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="580" y="155" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">para-aramid fibre</text><rect x="30" y="179" width="205" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="132" y="201" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">implant tubing</text><text x="324" y="191" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">inertness · −60 to 200 °C</text><line x1="240" y1="196" x2="402" y2="196" stroke="currentColor" stroke-width="1.5"/><polygon points="410,196 398,190 398,202" fill="currentColor"/><rect x="470" y="179" width="220" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="580" y="201" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">silicone elastomer</text><rect x="30" y="225" width="205" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="132" y="247" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">carbonated bottles</text><text x="324" y="237" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">CO₂ barrier · clarity</text><line x1="240" y1="242" x2="402" y2="242" stroke="currentColor" stroke-width="1.5"/><polygon points="410,242 398,236 398,248" fill="currentColor"/><rect x="470" y="225" width="220" height="34" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="580" y="247" text-anchor="middle" font-size="12" fill="currentColor" font-family="sans-serif">oriented PET</text><text x="360" y="288" text-anchor="middle" font-size="11" fill="currentColor" font-family="sans-serif">a material is never good — only good for a service</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Case — an exposed pumping main',
        problem: 'A 12 m above-ground run must carry pressurized treated water, and summer sun swings the pipe wall through 40 K. Compare uPVC ($\\alpha \\approx 8 \\times 10^{-5}$/K), HDPE ($\\alpha \\approx 2 \\times 10^{-4}$/K) and steel ($\\alpha \\approx 1.2 \\times 10^{-5}$/K) on thermal movement and recommend a material for the exposed run and for the buried reaches of the same project.',
        steps: [
          { label: 'Step 1', text: 'Thermal movement $= L\\alpha\\Delta T$: uPVC $= 12 \\times 8 \\times 10^{-5} \\times 40 = 0.0384$ m ≈ 38 mm; HDPE $= 12 \\times 2 \\times 10^{-4} \\times 40 = 0.096$ m ≈ 96 mm; steel $= 12 \\times 1.2 \\times 10^{-5} \\times 40 = 0.0058$ m ≈ 5.8 mm.' },
          { label: 'Step 2', text: 'Service properties: uPVC is rigid, cheap and solvent-cements on site but goes brittle in hard frost and needs titanium-dioxide pigmentation against ultraviolet chalking; HDPE is ductile and fusion-welds into joints stronger than the pipe, but creeps visibly; steel holds pressure and shrugs at expansion, yet corrodes electrochemically (Section 1) and demands lining plus cathodic protection.' },
          { label: 'Step 3', text: 'Decision: the exposed run takes uPVC with rubber-gasketed joints and one expansion loop — 38 mm is cheaply accommodated; the buried reaches take HDPE, whose 96 mm of movement the trench and snaked laying absorb invisibly.' },
          { label: 'Step 4', text: 'The chemistry behind it: uPVC’s polar C–Cl backbone gives amorphous rigidity at zero corrosion cost, HDPE’s linear chains crystallize into a tough ductile solid, and steel is the only candidate that rusts — which is why lifecycle cost, not price per metre, decides.' },
        ],
        result: 'uPVC above ground with a 38 mm expansion allowance; HDPE below grade; steel only where pressure or code compels it.',
      },
      {
        title: 'Case — city fleet, CNG versus petrol',
        problem: 'A city bus fleet compares compressed natural gas (model as methane, HCV 55.5 MJ/kg) with petrol (model as octane $\\text{C}_8\\text{H}_{18}$, HCV 48 MJ/kg) on CO₂ per unit energy and on storage practicality. Recommend for a depot-based operation.',
        steps: [
          { label: 'Step 1', text: 'Stoichiometric CO₂: methane gives $\\frac{44}{16} = 2.75$ kg CO₂ per kg of fuel; octane gives $\\frac{8 \\times 44}{114} = 3.09$ kg per kg.' },
          { label: 'Step 2', text: 'Per megajoule: CNG $\\frac{2.75}{55.5} = 0.050$ kg/MJ against petrol $\\frac{3.09}{48} = 0.064$ kg/MJ — a 23% CO₂ advantage before any efficiency credit.' },
          { label: 'Step 3', text: 'Engine and storage chemistry: methane’s octane number above 120 allows lean, cool combustion with low CO and unburnt hydrocarbons, but as a gas it must ride at 200–250 bar and still carries under a quarter of petrol’s energy per litre of tank.' },
          { label: 'Step 4', text: 'Decision: for buses returning nightly to a depot with a fast-fill station, the cylinder penalty is absorbable and the 23% compounds across the fleet — CNG; anywhere that must refuel en route stays on liquid fuel.' },
        ],
        result: 'CNG cuts CO₂ by about 23% per MJ and fits depot-based fleets; the storage cylinder, not combustion, is the barrier.',
      },
      {
        title: 'Case — biodiesel mass balance and blend decision',
        problem: 'A cooperative transesterifies 1,000 kg of a triolein-type oil with methanol over sodium hydroxide. Using integer molar masses — triolein $\\text{C}_{57}\\text{H}_{104}\\text{O}_6 = 884$, methanol 32, methyl oleate $\\text{C}_{19}\\text{H}_{36}\\text{O}_2 = 296$, glycerol $\\text{C}_3\\text{H}_8\\text{O}_3 = 92$ — compute the product masses, the atom economy, and the reason straight vegetable oil is not simply poured into tanks.',
        steps: [
          { label: 'Step 1', text: 'The reaction: $\\text{triolein} + 3\\text{CH}_3\\text{OH} \\rightarrow 3\\ \\text{methyl oleate} + \\text{glycerol}$; conservation check $884 + 96 = 980 = 888 + 92$ ✓.' },
          { label: 'Step 2', text: 'Scale to 1,000 kg of oil: ester $= 1000 \\times \\frac{888}{884} = 1{,}004$ kg; glycerol $= 1000 \\times \\frac{92}{884} = 104$ kg; methanol consumed $= 1000 \\times \\frac{96}{884} = 109$ kg (practice charges an excess and recovers it by distillation).' },
          { label: 'Step 3', text: 'Atom economy on the ester: $\\frac{888}{980} = 90.6\\%$ — glycerol is the only stoichiometric by-product, and it is itself a saleable feedstock.' },
          { label: 'Step 4', text: 'Why transesterify at all: triglyceride oil runs 40–50 cSt at 40 °C against diesel’s 2–4 — about tenfold too viscous for pumps and injectors; the methyl ester lands near 4.5 cSt, restores the lubricity that deep desulfurization stripped from diesel, and asks only for cold-weather blending because its cloud point sits above diesel’s — hence B5–B20 blends in temperate fleets.' },
        ],
        result: '1,004 kg biodiesel + 104 kg glycerol from 1,000 kg oil + 109 kg methanol; 90.6% atom economy; viscosity is the reason.',
      },
    ],
    keyTakeaways: [
      'Selection is situation → properties → decision → chemistry: expansion (uPVC 38 mm versus steel 5.8 mm on a 12 m run), self-lubricity, ballistic strength-to-weight, biocompatible Si–O temperature span and oriented-PET barriers each decide a case.',
      'Fleet chemistry: methane ≈ 0.050 kg CO₂/MJ against petrol’s 0.064; biodiesel is a 90.6%-atom-economy transesterification that fixes viscosity, not energy; hydrogen wins per kilogram and loses per litre.',
      'Multigrades are VI-improver chemistry — 10W cranking at −25 °C, 40-grade film at 100 °C; greases hold oil in a soap matrix for sealed bearings; esters take the turbine heat mineral oil cannot.',
      'Nanofillers work through interfacial area — carbon-black toughening, clay-platelet tortuosity, titania UV screening — and green substitutions (supercritical CO₂, peroxide catalysis, PLA) stand or fall by their numbers.',
    ],
    quiz: [
      {
        q: 'Hydrogen has HCV 142 MJ/kg and petrol about 45 MJ/kg. The mass of hydrogen that delivers the energy of 1.0 kg of petrol is about:',
        options: ['0.032 kg', '0.32 kg', '3.2 kg', '14.2 kg'],
        answer: 1,
        explanation: 'Step 1: The energy to match is $1.0 \\times 45 = 45$ MJ. Step 2: The hydrogen mass is $\\frac{45}{142} = 0.317$ kg. Step 3: About 0.32 kg — a third of the mass for the same energy. Step 4: The catch is volumetric: even at 700 bar that hydrogen occupies far more space than the litre of petrol it replaces, which is why storage dominates hydrogen cases.',
      },
      {
        q: 'A sealed-for-life electric-motor bearing is best lubricated with:',
        options: ['A straight mineral-oil sump', 'A lithium-soap grease', 'Dry graphite powder alone', 'A recirculating 10W-40 line'],
        answer: 1,
        explanation: 'Step 1: A sealed bearing cannot be re-oiled, and free oil eventually weeps past the seals. Step 2: Grease — 80–90% oil held in a lithium-soap matrix — stays put for the bearing’s life and doubles as a barrier to contaminants. Step 3: A recirculating oil system buys cooling and filtration that a sealed design cannot use anyway. Step 4: Solid lubricants serve extreme temperatures, not the everyday rolling-element life cycle.',
      },
      {
        q: 'Exfoliated clay platelets raise a packaging film’s gas barrier mainly by:',
        options: ['Reacting chemically with the permeating oxygen', 'Forcing permeating molecules through a far longer, tortuous path', 'Permanently absorbing gases into the clay galleries', 'Cooling the film during service'],
        answer: 1,
        explanation: 'Step 1: The clay platelets are essentially impermeable to small gas molecules. Step 2: Dispersed parallel to the film plane, each platelet blocks its slice of the direct diffusion route. Step 3: A permeating molecule must detour around every platelet, multiplying the effective path length at only a few weight-percent of loading. Step 4: No reaction with the gas occurs — it is geometry from nanoscale dispersion, the Section 3 area argument wearing barrier clothing.',
      },
      {
        q: 'A city mandates compostable cups. The chemistry that qualifies poly(lactic acid) is:',
        options: ['Its ester links hydrolyse to lactic acid under industrial composting heat', 'It burns without releasing smoke', 'It is a silicon-backbone polymer', 'It dissolves instantly in cold water'],
        answer: 0,
        explanation: 'Step 1: PLA is a polyester built from lactic acid fermented out of starch. Step 2: In an industrial composter near 58 °C with controlled humidity, water hydrolyses the ester links back to lactic acid. Step 3: Microbes then metabolize the acid to biomass and carbon dioxide — but only at that temperature, which home heaps rarely reach. Step 4: The renewable feedstock plus the hydrolysable backbone earns the composting claim — and is exactly why the composting infrastructure belongs in the decision.',
      },
    ],
  },
]

import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 20
// Entropy and the Second Law of Thermodynamics
// Sections 20-1 … 20-4 (ids hall-ch20-s1 … hall-ch20-s4)
// Landmarks: ΔS = ∫dQ/T, e_C = 1 − T_C/T_H, K_C = T_C/(T_H−T_C), S = k_B ln Ω.
// ============================================================================

export const hallCh20Content: SectionContent[] = [
  // ------------------------------------------------------------------ 20-1
  {
    sectionId: 'hall-ch20-s1',
    readingTime: 7,
    intro: "The first law says energy is conserved — but it smiles equally on a cup of coffee warming up or cooling down, and only one of those ever happens. Entropy is the bookkeeping that breaks the tie: a state function that isolated systems can only increase, making the second law of thermodynamics the only fundamental law of physics with a direction of time built in.",
    objectives: [
      'Compute entropy changes with $\\Delta S = \\int dQ/T$ along a reversible path',
      'Apply the second law, $\\Delta S \\ge 0$ for isolated systems, to real (irreversible) processes',
      'Evaluate $\\Delta S$ for phase changes, temperature changes and heat exchange with reservoirs',
    ],
    concepts: [
      {
        term: 'Entropy change',
        kind: 'definition',
        statement: "**When a system absorbs heat $dQ$ reversibly at Kelvin temperature $T$, its entropy changes by $$dS = \\frac{dQ}{T},\\qquad \\Delta S = \\int_i^f \\frac{dQ}{T}.$$** The unit is J/K. For a reservoir — a body so large its temperature never budges — $\\Delta S = Q/T$ exactly, whatever the sign of $Q$.",
        detail: 'The division by $T$ is the whole idea: a jouole of heat is more "surprising" (more entropy) when delivered to a cold body than to a hot one.',
      },
      {
        term: 'Entropy is a state function',
        kind: 'insight',
        statement: "**$S$ depends only on the state of the system, not on how it got there.** To compute $\\Delta S$ for a messy real process, replace it in your imagination by any reversible path connecting the same endpoints and integrate $dQ/T$ along that instead.",
        detail: 'This is the same privilege internal energy enjoys in the first law — and it is why entropy can be tabulated in tables while heat and work cannot.',
      },
      {
        term: 'Recipes for common reversible paths',
        kind: 'method',
        statement: "**Isothermal phase change: $\\Delta S = Lm/T$. Temperature change at constant heat capacity: $\\Delta S = cm\\ln(T_f/T_i)$. Heat $Q$ into a reservoir at $T$: $\\Delta S = Q/T$.**",
        detail: 'Melting 1 kg of ice at 273.15 K: $\\Delta S = (3.33\\times10^{5})/273.15 = 1.22$ kJ/K — the latent heat enters the ledger divided by the melting temperature.',
      },
      {
        term: 'The second law of thermodynamics',
        kind: 'law',
        statement: "**If a process occurs in a closed (isolated) system, the entropy of the system increases: $$\\Delta S > 0$$ for irreversible processes, $$\\Delta S = 0$$ for reversible ones. Entropy never decreases in an isolated system.**",
        detail: 'Real processes are irreversible — friction, mixing, free expansion, heat flow across a finite temperature difference — so the total entropy of the universe grows with every event that happens in it. That asymmetry, not energy conservation, is why time has a direction.',
      },
      {
        term: "Entropy: solution protocol",
        kind: "method",
        statement: "**Solve Entropy problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is entropy and the Carnot bound; the working equation is $\\Delta S = \\int dQ_{\\text{rev}}/T$, $e_{\\text{Carnot}} = 1-T_L/T_H$, $S = k\\ln W$; every substitution must carry its units so the final unit ($\\text{J/K}$ and dimensionless $e$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $e_{\\text{Carnot}}\\sim 0.3$--$0.5$ for $T_H\\sim 500\\ \\text{K}$; reversible for the Carnot bound; $\\Delta S \\ge 0$ for isolated systems.",
      },
    ],
    examples: [
      {
        title: 'The entropy of melting ice',
        problem: 'One kilogram of ice melts reversibly at 0 °C. What is its entropy change?',
        steps: [
          { label: 'Reversible isothermal path', text: 'Melting at exactly 273.15 K with the surroundings at the same temperature is the reversible version of the process, so $\\Delta S = Q/T$ applies directly.' },
          { label: 'Heat absorbed', text: '$Q = L_F m = (333\\times10^{3}\\ \\mathrm{J/kg})(1.00\\ \\mathrm{kg}) = 3.33\\times10^{5}$ J.' },
          { label: 'Divide by T', text: '$\\Delta S = 3.33\\times10^{5}/273.15 = 1.22\\times10^{3}$ J/K.' },
        ],
        result: 'Melting a kilogram of ice raises its entropy by about $1.22$ kJ/K — disorder gained by freeing the molecules from the crystal.',
      },
      {
        title: 'Hot water dumped on a cold reservoir',
        problem: 'One kilogram of water at 100 °C is poured into a very large 0 °C reservoir. Show that the total entropy change is positive even though the water\'s own entropy decreases.',
        steps: [
          { label: "Water's entropy", text: 'Cooling 373.15 K → 273.15 K reversibly: $\\Delta S_w = cm\\ln(T_f/T_i) = (4187)(1.00)\\ln(273.15/373.15) = (4187)(-0.3119) = -1306$ J/K.' },
          { label: "Reservoir's entropy", text: 'It receives $Q = cm\\Delta T = (4187)(100) = 4.187\\times10^{5}$ J, all at 273.15 K: $\\Delta S_r = 4.187\\times10^{5}/273.15 = +1533$ J/K.' },
          { label: 'Total', text: '$\\Delta S_\\text{tot} = -1306 + 1533 = +227$ J/K.' },
        ],
        result: 'The water loses entropy while the reservoir gains more — the total rises by $+227$ J/K, so the process is allowed and, being spontaneous, irreversible.',
      },
    ],
    keyTakeaways: [
      '$\\Delta S = \\int dQ/T$ along any reversible path between the endpoints; for reservoirs $\\Delta S = Q/T$.',
      'Second law: $\\Delta S \\ge 0$ for isolated systems, with equality only for reversible processes.',
      'One system\'s entropy may fall — as long as some other system\'s rises by more.',
    ],
    quiz: [
      { q: 'A system absorbs 100 J of heat reversibly while held at a constant 200 K. Its entropy change is', options: ['$0.5$ J/K', '$2$ J/K', '$20{,}000$ J/K', '$-0.5$ J/K'], answer: 0, explanation: '$\\Delta S = Q/T = 100/200 = 0.5$ J/K.' },
      { q: 'Ice melts reversibly at 0 °C. The entropy of the ice', options: ['stays the same because the temperature is constant', 'increases, because it absorbs latent heat at constant T', 'decreases, because the crystal dissolves into liquid', 'is undefined during a phase change'], answer: 1, explanation: '$\\Delta S = L_F m/T > 0$: heat in at fixed temperature always raises entropy.' },
      { q: 'In the water-and-cold-reservoir example, the water\'s entropy fell by 1306 J/K. Why does this not violate the second law?', options: ['The process was reversible, so entropy rules do not apply', 'The reservoir gained 1533 J/K, so the total change is +227 J/K', 'Entropy only increases for gases', 'The internal energy also decreased, which compensates'], answer: 1, explanation: 'The second law governs the isolated total: the reservoir gains more than the water loses.' },
      { q: 'For any process taking place in an isolated system,', options: ['$\\Delta S \\ge 0$, with equality only for a reversible process', '$\\Delta S = 0$ always', '$\\Delta S < 0$ if the process is fast', '$\\Delta S$ can have either sign depending on the path'], answer: 0, explanation: 'That is the entropy statement of the second law — the direction-finder that the first law lacks.' },
    ],
  },

  // ------------------------------------------------------------------ 20-2
  {
    sectionId: 'hall-ch20-s2',
    readingTime: 8,
    intro: "A heat engine is any device that siphons energy from a hot reservoir, converts part of it to work, and dumps the rest into a cold reservoir — steam plants, car engines, jet turbines all share this skeleton. The second law caps how good any of them can be, and the cap belongs to Carnot's idealized reversible cycle, the efficiency yardstick no real engine beats.",
    objectives: [
      'Define engine efficiency $e = |W|/Q_H = 1 - |Q_C|/Q_H$ and apply the energy ledger',
      'Describe the four strokes of the Carnot cycle and why it is reversible',
      'Use the Carnot efficiency $e_C = 1 - T_C/T_H$ and state Carnot\'s theorem',
    ],
    concepts: [
      {
        term: 'Heat engine and efficiency',
        kind: 'definition',
        statement: "**A heat engine operates in a cycle: over each cycle it absorbs heat $Q_H$ from a hot reservoir, does work $W$, and ejects heat $|Q_C|$ to a cold reservoir. Energy conservation over a cycle ($\\Delta E_\\text{int} = 0$) gives $$Q_H = W + |Q_C|,$$ and the efficiency is $$e = \\frac{W}{Q_H} = 1 - \\frac{|Q_C|}{Q_H}.$$**",
        detail: 'The ejection is not an engineering flaw — it is the price the second law charges. A cycle that turned all of $Q_H$ into work would return the working gas to its start while destroying entropy, which the universe forbids.',
      },
      {
        term: 'The Carnot cycle',
        kind: 'method',
        statement: "**Carnot\'s ideal engine runs a gas through four reversible strokes between reservoirs at $T_H$ and $T_C$: (1) isothermal expansion at $T_H$, absorbing $Q_H$; (2) adiabatic expansion, cooling to $T_C$; (3) isothermal compression at $T_C$, ejecting $|Q_C|$; (4) adiabatic compression, heating back to $T_H$.**",
        detail: 'Every step is run so gently that the gas is never more than infinitesimally out of equilibrium — which is what makes the cycle reversible: run it backward and it is a perfect refrigerator. On a $pV$ diagram it is a closed loop of two isotherms joined by two (steeper) adiabats.',
      },
      {
        term: 'The Carnot efficiency',
        kind: 'theorem',
        statement: "**For any reversible engine operating between Kelvin temperatures $T_H$ and $T_C$, $$e_C = 1 - \\frac{T_C}{T_H}.$$** Nothing else about the engine — working substance, size, design — enters.",
        detail: 'The proof is one line of entropy bookkeeping: reversibility forces $Q_H/T_H = |Q_C|/T_C$, and substituting into $e = 1 - |Q_C|/Q_H$ gives the result. Raising the steam temperature is the whole game of power-plant engineering.',
      },
      {
        term: "Carnot's theorem",
        kind: 'law',
        statement: "**No real engine operating between two given reservoirs can be more efficient than a Carnot engine operating between the same two reservoirs; all reversible engines between them are equally (Carnot) efficient.**",
        detail: 'If a better engine existed, pairing it with a Carnot refrigerator would run a composite machine that transferred heat from cold to hot with no other effect — the Clausius violation of the second law.',
      },
      {
        term: "Entropy in the Real World: Engines: solution protocol",
        kind: "method",
        statement: "**Solve Entropy in the Real World: Engines problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is entropy and the Carnot bound; the working equation is $\\Delta S = \\int dQ_{\\text{rev}}/T$, $e_{\\text{Carnot}} = 1-T_L/T_H$, $S = k\\ln W$; every substitution must carry its units so the final unit ($\\text{J/K}$ and dimensionless $e$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $e_{\\text{Carnot}}\\sim 0.3$--$0.5$ for $T_H\\sim 500\\ \\text{K}$; reversible for the Carnot bound; $\\Delta S \\ge 0$ for isolated systems.",
      },
    ],
    figures: [
      {
        caption: "Energy ledger of a heat engine between a hot reservoir at $T_H = 800$ K and a cold reservoir at $T_C = 300$ K. Per cycle the engine absorbs $Q_H = 1000$ J, delivers $W = 625$ J of work and ejects $|Q_C| = 375$ J — the Carnot efficiency $e = 1 - T_C/T_H = 62.5\\%$ for these reservoirs.",
        svg: `<svg viewBox="0 0 720 410" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heat engine energy flow diagram"><defs><marker id="eAr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><rect x="200" y="26" width="320" height="58" rx="10" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="2"/><text x="360" y="61" text-anchor="middle" font-size="17" fill="currentColor">Hot reservoir at T<tspan dy="4" font-size="12">H</tspan><tspan dy="-4"> = 800 K</tspan></text><circle cx="360" cy="200" r="54" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2.5"/><text x="360" y="194" text-anchor="middle" font-size="17" fill="currentColor">Engine</text><text x="360" y="216" text-anchor="middle" font-size="14" fill="currentColor" opacity="0.85">(e = 62.5%)</text><line x1="360" y1="88" x2="360" y2="140" stroke="currentColor" stroke-width="4.5" marker-end="url(#eAr)"/><text x="374" y="110" text-anchor="start" font-size="15" fill="currentColor">Q<tspan dy="4" font-size="11">H</tspan><tspan dy="-4"> = 1000 J absorbed</tspan></text><line x1="414" y1="200" x2="588" y2="200" stroke="currentColor" stroke-width="4.5" marker-end="url(#eAr)"/><text x="501" y="184" text-anchor="middle" font-size="15" fill="currentColor">W = 625 J (work out)</text><line x1="360" y1="260" x2="360" y2="312" stroke="currentColor" stroke-width="4.5" marker-end="url(#eAr)"/><text x="374" y="294" text-anchor="start" font-size="15" fill="currentColor">Q<tspan dy="4" font-size="11">C</tspan><tspan dy="-4"> = 375 J rejected</tspan></text><rect x="200" y="318" width="320" height="58" rx="10" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="2"/><text x="360" y="353" text-anchor="middle" font-size="17" fill="currentColor">Cold reservoir at T<tspan dy="4" font-size="12">C</tspan><tspan dy="-4"> = 300 K</tspan></text><text x="360" y="398" text-anchor="middle" font-size="14" fill="currentColor" opacity="0.85">Energy ledger: Q<tspan dy="4" font-size="11">H</tspan><tspan dy="-4"> = W + |Q</tspan><tspan dy="4" font-size="11">C</tspan><tspan dy="-4">|,  e = W/Q</tspan><tspan dy="4" font-size="11">H</tspan><tspan dy="-4"> = 1 − T</tspan><tspan dy="4" font-size="11">C</tspan><tspan dy="-4">/T</tspan><tspan dy="4" font-size="11">H</tspan></text></svg>`,
        afterConcept: 1,
      },
      {
        caption: "The Carnot cycle on a pV diagram (monatomic gas, $\\gamma = 5/3$). Two isotherms ($T_H$ above, $T_C$ below) are joined by two steeper adiabats; traversed clockwise, a → b → c → d, the enclosed shaded area is the net work done by the gas per cycle.",
        svg: `<svg viewBox="0 0 720 440" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carnot cycle pV diagram"><defs><marker id="cAr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="60" y1="360" x2="700" y2="360" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="360" x2="60" y2="40" stroke="currentColor" stroke-width="1.5"/><text x="375" y="398" text-anchor="middle" font-size="15" fill="currentColor">volume V</text><text x="26" y="200" font-size="15" fill="currentColor" transform="rotate(-90 26 200)" text-anchor="middle">pressure p</text><path d="M78.0,45.0L84.0,55.2L90.0,64.7L96.0,73.6L102.0,82.1L108.0,90.0L114.0,97.5L120.0,104.6L126.0,111.3L132.0,117.7L138.0,123.8L144.0,129.5L150.0,135.0L156.0,140.2L162.0,145.2L168.0,150.0L174.0,154.6L180.0,158.9L186.0,163.1L192.0,167.1L198.0,171.0L204.0,174.7L210.0,178.3L216.0,181.7L222.0,185.0L228.0,188.2L234.0,191.3L240.0,194.2L246.0,197.1L252.0,199.8L258.0,202.5L271.2,211.7L284.4,220.0L297.6,227.6L310.8,234.6L324.0,241.0L337.2,246.9L350.4,252.4L363.6,257.4L376.8,262.1L390.0,266.4L403.2,270.5L416.4,274.2L429.6,277.7L442.8,281.0L456.0,284.1L469.2,287.0L482.4,289.8L495.6,292.3L508.8,294.7L522.0,297.0L535.2,299.2L548.4,301.2L561.6,303.2L574.8,305.0L588.0,306.7L601.2,308.4L614.4,310.0L627.6,311.5L640.8,312.9L654.0,314.3L641.4,313.5L628.8,312.7L616.2,311.9L603.6,311.0L591.0,310.1L578.4,309.2L565.8,308.2L553.2,307.2L540.6,306.2L528.0,305.1L515.4,304.0L502.8,302.8L490.2,301.6L477.6,300.3L465.0,299.0L452.4,297.6L439.8,296.2L427.2,294.7L414.6,293.1L402.0,291.4L389.4,289.6L376.8,287.8L364.2,285.8L351.6,283.8L339.0,281.6L326.4,279.3L313.8,276.8L301.2,274.2L288.6,271.5L276.0,268.5L269.4,265.8L262.8,262.9L256.2,259.9L249.6,256.8L243.0,253.5L236.4,250.0L229.8,246.3L223.2,242.5L216.6,238.4L210.0,234.1L203.4,229.5L196.8,224.6L190.2,219.5L183.6,214.1L177.0,208.3L170.4,202.1L163.8,195.5L157.2,188.5L150.6,180.9L144.0,172.8L137.4,164.2L130.8,154.8L124.2,144.7L117.6,133.9L111.0,122.1L104.4,109.2L97.8,95.3L91.2,80.0L84.6,63.3L78.0,45.0 Z" fill="currentColor" fill-opacity="0.08" stroke="none"/><path d="M78.0,45.0L84.0,55.2L90.0,64.7L96.0,73.6L102.0,82.1L108.0,90.0L114.0,97.5L120.0,104.6L126.0,111.3L132.0,117.7L138.0,123.8L144.0,129.5L150.0,135.0L156.0,140.2L162.0,145.2L168.0,150.0L174.0,154.6L180.0,158.9L186.0,163.1L192.0,167.1L198.0,171.0L204.0,174.7L210.0,178.3L216.0,181.7L222.0,185.0L228.0,188.2L234.0,191.3L240.0,194.2L246.0,197.1L252.0,199.8L258.0,202.5" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M258.0,202.5L271.2,211.7L284.4,220.0L297.6,227.6L310.8,234.6L324.0,241.0L337.2,246.9L350.4,252.4L363.6,257.4L376.8,262.1L390.0,266.4L403.2,270.5L416.4,274.2L429.6,277.7L442.8,281.0L456.0,284.1L469.2,287.0L482.4,289.8L495.6,292.3L508.8,294.7L522.0,297.0L535.2,299.2L548.4,301.2L561.6,303.2L574.8,305.0L588.0,306.7L601.2,308.4L614.4,310.0L627.6,311.5L640.8,312.9L654.0,314.3" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M654.0,314.3L641.4,313.5L628.8,312.7L616.2,311.9L603.6,311.0L591.0,310.1L578.4,309.2L565.8,308.2L553.2,307.2L540.6,306.2L528.0,305.1L515.4,304.0L502.8,302.8L490.2,301.6L477.6,300.3L465.0,299.0L452.4,297.6L439.8,296.2L427.2,294.7L414.6,293.1L402.0,291.4L389.4,289.6L376.8,287.8L364.2,285.8L351.6,283.8L339.0,281.6L326.4,279.3L313.8,276.8L301.2,274.2L288.6,271.5L276.0,268.5" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M276.0,268.5L269.4,265.8L262.8,262.9L256.2,259.9L249.6,256.8L243.0,253.5L236.4,250.0L229.8,246.3L223.2,242.5L216.6,238.4L210.0,234.1L203.4,229.5L196.8,224.6L190.2,219.5L183.6,214.1L177.0,208.3L170.4,202.1L163.8,195.5L157.2,188.5L150.6,180.9L144.0,172.8L137.4,164.2L130.8,154.8L124.2,144.7L117.6,133.9L111.0,122.1L104.4,109.2L97.8,95.3L91.2,80.0L84.6,63.3L78.0,45.0" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="161.7" y1="145.1" x2="174.3" y2="154.9" stroke="currentColor" stroke-width="2.5" marker-end="url(#cAr)"/><line x1="448.2" y1="282.4" x2="463.8" y2="285.9" stroke="currentColor" stroke-width="2.5" marker-end="url(#cAr)"/><line x1="473.0" y1="299.9" x2="457.0" y2="298.2" stroke="currentColor" stroke-width="2.5" marker-end="url(#cAr)"/><line x1="182.9" y1="213.6" x2="171.1" y2="202.9" stroke="currentColor" stroke-width="2.5" marker-end="url(#cAr)"/><text x="66" y="40" text-anchor="end" font-size="16" fill="currentColor">a</text><text x="246" y="230" text-anchor="end" font-size="16" fill="currentColor">b</text><text x="666" y="322" text-anchor="start" font-size="16" fill="currentColor">c</text><text x="264" y="292" text-anchor="end" font-size="16" fill="currentColor">d</text><text x="430" y="58" text-anchor="start" font-size="13" fill="currentColor">a → b: isothermal expansion at T<tspan dy="3" font-size="10">H</tspan></text><text x="430" y="80" text-anchor="start" font-size="13" fill="currentColor">b → c: adiabatic expansion (T falls to T<tspan dy="3" font-size="10">C</tspan><tspan dy="-3">)</tspan></text><text x="430" y="102" text-anchor="start" font-size="13" fill="currentColor">c → d: isothermal compression at T<tspan dy="3" font-size="10">C</tspan></text><text x="430" y="124" text-anchor="start" font-size="13" fill="currentColor">d → a: adiabatic compression (T rises)</text><text x="430" y="148" text-anchor="start" font-size="13" fill="currentColor" opacity="0.8">shaded area = net work W per cycle</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'A steam plant between 800 K and 300 K',
        problem: 'An ideal (Carnot) engine runs between a boiler at $T_H = 800$ K and a condenser at $T_C = 300$ K. What is its efficiency, and how much work does it deliver per 1000 J of absorbed heat?',
        steps: [
          { label: 'Carnot efficiency', text: '$e_C = 1 - T_C/T_H = 1 - 300/800 = 0.625 = 62.5\\%$.' },
          { label: 'Work', text: '$W = eQ_H = 0.625 \\times 1000 = 625$ J.' },
          { label: 'Rejected heat', text: '$|Q_C| = Q_H - W = 375$ J — the unavoidable toll of the second law.' },
        ],
        result: '$62.5\\%$ of the heat becomes work at best; real steam plants reach about $40\\%$, paying extra for irreversibility.',
      },
      {
        title: 'From efficiency to power',
        problem: 'A real engine absorbs $Q_H = 1000$ J per cycle with efficiency $e = 0.40$ and completes 50 cycles per second. What is its power output?',
        steps: [
          { label: 'Work per cycle', text: '$W = eQ_H = (0.40)(1000) = 400$ J.' },
          { label: 'Rate', text: '$P = W \\times (\\text{cycles/s}) = 400 \\times 50 = 2.0\\times10^{4}$ W.' },
          { label: 'Reject rate', text: 'It must also eject $600\\times50 = 3.0\\times10^{4}$ J/s — the radiator and exhaust exist to satisfy the second law.' },
        ],
        result: 'The engine delivers $20$ kW while dumping $30$ kW as waste heat.',
      },
    ],
    keyTakeaways: [
      'Engine ledger: $Q_H = W + |Q_C|$ over each cycle, $e = W/Q_H = 1 - |Q_C|/Q_H$.',
      'Carnot cycle = two isotherms + two adiabats, fully reversible; its area on a pV diagram is the work per cycle.',
      '$e_C = 1 - T_C/T_H$ is the ceiling for any engine between those reservoirs (Carnot\'s theorem); use kelvin.',
    ],
    quiz: [
      { q: 'An engine absorbs 800 J per cycle and ejects 600 J. Its efficiency is', options: ['25%', '40%', '75%', '80%'], answer: 0, explanation: '$e = 1 - 600/800 = 0.25$.' },
      { q: 'A Carnot engine runs between reservoirs at 500 K and 300 K. Its efficiency is', options: ['20%', '40%', '60%', '75%'], answer: 1, explanation: '$e_C = 1 - 300/500 = 0.40$.' },
      { q: "Carnot's theorem says no engine between two given reservoirs can beat the Carnot efficiency, because a better one would", options: ['violate energy conservation', 'violate the second law of thermodynamics', 'cool the hot reservoir below $T_C$', 'have to run slower than a Carnot engine'], answer: 1, explanation: 'Paired with a Carnot refrigerator it would move heat cold-to-hot with no other effect — a Clausius violation. Energy conservation would survive fine.' },
      { q: 'Over one complete Carnot cycle, the total entropy change of gas plus reservoirs is', options: ['zero, because every step is reversible', 'equal to $eQ_H$', 'equal to $|Q_C|/T_C$', 'positive, since the engine does work'], answer: 0, explanation: 'Reversible means no net entropy production: the gas returns to its state ($\\Delta S = 0$) and the two reservoirs exactly cancel.' },
    ],
  },

  // ------------------------------------------------------------------ 20-3
  {
    sectionId: 'hall-ch20-s3',
    readingTime: 7,
    intro: "Run a heat engine backward and it becomes a refrigerator: work in, heat pumped out of a cold space into a warm one. The same second law that caps engines caps refrigerators in reverse — no refrigerator can be perfect, but surprisingly their performance figures can far exceed 100%.",
    objectives: [
      'Define the coefficient of performance $K = |Q_C|/W$ for refrigerators and $K_\\text{hp} = |Q_H|/W$ for heat pumps',
      'Apply the Carnot limits $K_C = T_C/(T_H - T_C)$ and $K_\\text{hp} = T_H/(T_H - T_C)$',
      'State the Kelvin–Planck and Clausius forms of the second law and their equivalence',
    ],
    concepts: [
      {
        term: 'A refrigerator is a reversed engine',
        kind: 'definition',
        statement: "**A refrigerator extracts heat $|Q_C|$ from the cold interior by doing work $W$ on the working fluid, ejecting $|Q_H| = |Q_C| + W$ to the room. Its figure of merit is the coefficient of performance $$K = \\frac{|Q_C|}{W},$$** and $K$ can be — and usually is — larger than 1.",
        detail: '$K > 1$ is not perpetual motion: the machine does not create energy, it only relocates it. What the second law forbids is $W = 0$, i.e. heat flowing cold-to-hot unassisted.',
      },
      {
        term: 'Heat pumps and the $K + 1$ rule',
        kind: 'notation',
        statement: "**A heat pump is the same machine judged by what it delivers indoors: $|Q_H|$ per unit of work. Since $|Q_H| = |Q_C| + W$, $$K_\\text{hp} = \\frac{|Q_H|}{W} = K + 1.$$**",
        detail: 'Winter economics: a heat pump with $K_\\text{hp} = 4$ delivers four joules of heat per joule of electricity — three of them imported free (from the viewpoint of your bill) from the outside air.',
      },
      {
        term: 'The Carnot limit for refrigerators',
        kind: 'theorem',
        statement: "**A perfectly reversible (Carnot) refrigerator between Kelvin temperatures $T_C$ and $T_H$ achieves $$K_C = \\frac{T_C}{T_H - T_C},$$** the maximum possible. Real refrigerators fall below it, badly when the temperature gap is large.",
        detail: 'A kitchen fridge ($T_C \\approx 277$ K, $T_C \\approx$ room 300 K) could in principle reach $K_C = 277/23 \\approx 12$; a laboratory cryostat pumping from 1 K to 300 K manages at best $K_C = 1/299$, which is why liquid helium is expensive.',
      },
      {
        term: 'The second law, two ways',
        kind: 'law',
        statement: "**Kelvin–Planck: no cyclic device converts heat entirely into work — some $|Q_C|$ must always be ejected. Clausius: no process has as its sole result the transfer of heat from a colder to a hotter body.** The two statements are equivalent: violate either and, with a suitable engine or refrigerator, you can violate the other.",
        detail: 'Both are negative laws — they rule machines out. The entropy statement ($\\Delta S \\ge 0$) is their quantitative unification: it says exactly how much ejection is mandatory and how much pumping work is irreducible.',
      },
      {
        term: "Refrigerators and Real Engines: solution protocol",
        kind: "method",
        statement: "**Solve Refrigerators and Real Engines problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is entropy and the Carnot bound; the working equation is $\\Delta S = \\int dQ_{\\text{rev}}/T$, $e_{\\text{Carnot}} = 1-T_L/T_H$, $S = k\\ln W$; every substitution must carry its units so the final unit ($\\text{J/K}$ and dimensionless $e$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $e_{\\text{Carnot}}\\sim 0.3$--$0.5$ for $T_H\\sim 500\\ \\text{K}$; reversible for the Carnot bound; $\\Delta S \\ge 0$ for isolated systems.",
      },
    ],
    examples: [
      {
        title: 'The minimum work to freeze a tray of ice',
        problem: 'How much work must a perfectly reversible refrigerator, freezing water at 273.15 K in a kitchen at 300 K, do to remove the heat of fusion from 1.00 kg of water?',
        steps: [
          { label: 'Carnot COP', text: '$K_C = T_C/(T_H - T_C) = 273.15/26.85 = 10.2$.' },
          { label: 'Heat to extract', text: '$|Q_C| = L_F m = 3.33\\times10^{5}$ J.' },
          { label: 'Work', text: '$W = |Q_C|/K_C = 3.33\\times10^{5}/10.2 = 3.27\\times10^{4}$ J.' },
        ],
        result: 'At least $32.7$ kJ of work must be bought (and $366$ kJ delivered to the kitchen) — a real ice maker needs several times more.',
      },
      {
        title: 'A heat pump in winter',
        problem: 'An ideal heat pump maintains a house at 293 K while the outdoors sits at 273 K. If it draws 1.00 kW of electrical power, how much heat does it deliver?',
        steps: [
          { label: 'Ideal performance', text: '$K_\\text{hp} = T_H/(T_H - T_C) = 293/20 = 14.7$.' },
          { label: 'Heat delivered', text: '$|Q_H|/t = K_\\text{hp} \\times P = 14.7$ kW of heating from 1.00 kW of electricity.' },
          { label: 'Perspective', text: 'A resistive heater would give exactly 1.00 kW; the pump wins because it imports an extra 13.7 kW from the cold — but cold — outside air.' },
        ],
        result: 'Up to $14.7$ kW delivered; the advantage shrinks fast on bitter days, since $K_\\text{hp} \\propto 1/(T_H - T_C)$.',
      },
    ],
    keyTakeaways: [
      'Refrigerator: $K = |Q_C|/W$; heat pump: $K_\\text{hp} = |Q_H|/W = K + 1$ — both may exceed 1.',
      'Carnot ceilings: $K_C = T_C/(T_H - T_C)$, and $K_\\text{hp} = T_H/(T_H - T_C)$; small temperature gaps are cheap to bridge.',
      'Kelvin–Planck and Clausius statements are equivalent faces of the second law.',
    ],
    quiz: [
      { q: 'The coefficient of performance $K$ of a refrigerator is defined as', options: [`$W/|Q_C|$`, `$|Q_C|/W$`, `$|Q_H|/|Q_C|$`, `$W/|Q_H|$`], answer: 1, explanation: 'Benefit over cost: cold extracted per joule of work purchased. It routinely exceeds 1.' },
      { q: 'An ideal refrigerator keeps its interior at 277 K in a 300 K room. Its Carnot coefficient of performance is about', options: ['0.95', '1.08', '12', '23'], answer: 2, explanation: '$K_C = T_C/(T_H-T_C) = 277/23 \\approx 12$.' },
      { q: 'The Kelvin–Planck statement of the second law forbids', options: ['heat flowing from hot to cold', 'a cyclic engine that converts absorbed heat entirely into work', 'refrigerators with $K > 1$', 'isothermal processes'], answer: 1, explanation: 'The "single-reservoir engine" is forbidden; perfect heat-to-work conversion would shrink the entropy of the universe.' },
      { q: 'For the same machine running as a heat pump, $K_\\text{hp} = K + 1$ because', options: ['heat pumps are always reversible', 'the numerator changes from $|Q_C|$ to $|Q_H| = |Q_C| + W$ while the cost $W$ is the same', 'the work doubles in heating mode', 'the COP is defined with Fahrenheit temperatures'], answer: 1, explanation: 'Same ledger, different output side: adding the purchased work $W$ to the heat moved raises the numerator by exactly one $W$.' },
    ],
  },

  // ------------------------------------------------------------------ 20-4
  {
    sectionId: 'hall-ch20-s4',
    readingTime: 7,
    intro: "Why does entropy always grow? Boltzmann's answer: because the overwhelming majority of the microscopic arrangements consistent with the macroscopic facts are arrangements we would call disordered. Entropy is then just a count — and the second law becomes a statement of probability, near-certainty only because molecules come in moles.",
    objectives: [
      'Define microstates, macrostates and multiplicity $\\Omega$',
      'Compute entropy from Boltzmann\'s formula $S = k_B\\ln\\Omega$ and changes from $\\Delta S = k_B\\ln(\\Omega_f/\\Omega_i)$',
      'Explain why macroscopic violations of the second law are effectively impossible',
    ],
    concepts: [
      {
        term: 'Microstates and macrostates',
        kind: 'definition',
        statement: "**A microstate is one complete specification of the system at the molecular level (which molecule is where, with which velocity). A macrostate is the coarse description we actually observe. The multiplicity $\\Omega$ is the number of microstates consistent with a given macrostate.**",
        detail: 'Six atoms split between two chambers of a box: "3 on the left, 3 on the right" is one macrostate with $\\Omega = \\binom{6}{3} = 20$ microstates; "all on the left" has $\\Omega = 1$. Spread-out macrostates win the census by astronomical margins once $N \\sim N_A$.',
      },
      {
        term: "Boltzmann's entropy formula",
        kind: 'law',
        statement: "**The entropy of a macrostate is $$S = k_B\\ln\\Omega,$$ with $k_B$ the Boltzmann constant.** The logarithm makes entropies additive for independent systems (multiplicities multiply) and ties the microscopic count to the macroscopic $dQ/T$ definition of Section 20-1 — they are the same entropy.",
        detail: 'The formula is carved on Boltzmann\'s tombstone in Vienna. It converts the second law from a mystery into an audit: isolated systems evolve toward the macrostates with the most microstates because those are the ones you almost always find when you re-examine the dice.',
      },
      {
        term: 'Entropy change from multiplicities',
        kind: 'method',
        statement: "**For any process, $$\\Delta S = k_B\\ln\\frac{\\Omega_f}{\\Omega_i}.$$** Doubling the accessible volume of an ideal gas doubles each molecule\'s options, so $\\Omega_f/\\Omega_i = 2^N$ and $\\Delta S = Nk_B\\ln 2 = nR\\ln 2$ — the free-expansion result, recovered by pure counting.",
        detail: 'This is the bridge formula: it evaluates the entropy of irreversible endpoints (like free expansion) that no reversible intuition easily reaches.',
      },
      {
        term: 'The second law as statistics',
        kind: 'insight',
        statement: "**Nothing forbids a macroscopic system from sliding toward lower entropy — it is just mind-bendingly improbable.** For a mole of gas to spontaneously compress into half its volume, every one of $\\sim10^{23}$ molecules must choose the same half: probability $2^{-N_A} \\sim 10^{-180,000,000,000,000,000,000,000}$.",
        detail: 'Randomness never "wants" anything; it merely visits macrostates in proportion to their multiplicity, and the even-spread macrostates outnumber the ordered ones so overwhelmingly that the visit is for all practical purposes permanent. Irreversibility is big-number certainty, not mechanical law.',
      },
      {
        term: "A Statistical View of Entropy: solution protocol",
        kind: "method",
        statement: "**Solve A Statistical View of Entropy problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is entropy and the Carnot bound; the working equation is $\\Delta S = \\int dQ_{\\text{rev}}/T$, $e_{\\text{Carnot}} = 1-T_L/T_H$, $S = k\\ln W$; every substitution must carry its units so the final unit ($\\text{J/K}$ and dimensionless $e$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $e_{\\text{Carnot}}\\sim 0.3$--$0.5$ for $T_H\\sim 500\\ \\text{K}$; reversible for the Carnot bound; $\\Delta S \\ge 0$ for isolated systems.",
      },
    ],
    figures: [
      {
        caption: "Multiplicity $\\Omega$ of each macrostate for six atoms split between two chambers of a box ($2^6 = 64$ microstates total). The even 3–3 split owns 20 of them — 31% — while the fully ordered 6–0 split owns exactly 1. As $N$ grows toward $N_A$, the central bin dwarfs all others and the second law becomes a statistical certainty.",
        svg: `<svg viewBox="0 0 720 400" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Multiplicity bar chart for six atoms in two chambers"><text x="70" y="24" text-anchor="start" font-size="16" fill="currentColor">Six atoms, two chambers: multiplicity Ω of each macrostate</text><line x1="86" y1="330" x2="624" y2="330" stroke="currentColor" stroke-width="1.5"/><rect x="86" y="317" width="58" height="13" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-width="1.5"/><rect x="166" y="252" width="58" height="78" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-width="1.5"/><rect x="246" y="135" width="58" height="195" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-width="1.5"/><rect x="326" y="70" width="58" height="260" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/><rect x="406" y="135" width="58" height="195" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-width="1.5"/><rect x="486" y="252" width="58" height="78" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-width="1.5"/><rect x="566" y="317" width="58" height="13" fill="currentColor" fill-opacity="0.20" stroke="currentColor" stroke-width="1.5"/><text x="115" y="309" text-anchor="middle" font-size="13" fill="currentColor">1</text><text x="195" y="244" text-anchor="middle" font-size="13" fill="currentColor">6</text><text x="275" y="127" text-anchor="middle" font-size="13" fill="currentColor">15</text><text x="355" y="62" text-anchor="middle" font-size="13" fill="currentColor">20</text><text x="435" y="127" text-anchor="middle" font-size="13" fill="currentColor">15</text><text x="515" y="244" text-anchor="middle" font-size="13" fill="currentColor">6</text><text x="595" y="309" text-anchor="middle" font-size="13" fill="currentColor">1</text><text x="115" y="352" text-anchor="middle" font-size="13" fill="currentColor">0–6</text><text x="195" y="352" text-anchor="middle" font-size="13" fill="currentColor">1–5</text><text x="275" y="352" text-anchor="middle" font-size="13" fill="currentColor">2–4</text><text x="355" y="352" text-anchor="middle" font-size="13" fill="currentColor">3–3</text><text x="435" y="352" text-anchor="middle" font-size="13" fill="currentColor">4–2</text><text x="515" y="352" text-anchor="middle" font-size="13" fill="currentColor">5–1</text><text x="595" y="352" text-anchor="middle" font-size="13" fill="currentColor">6–0</text><text x="385" y="374" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.8">atoms on the left – atoms on the right</text><line x1="388" y1="78" x2="436" y2="94" stroke="currentColor" stroke-width="1.5" opacity="0.7"/><text x="442" y="96" text-anchor="start" font-size="13" fill="currentColor">most probable: 3–3, with Ω = 20</text><text x="442" y="114" text-anchor="start" font-size="13" fill="currentColor">out of 2⁶ = 64 microstates (31%)</text><text x="360" y="392" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.8">fully ordered 6–0: Ω = 1, one microstate in 64 — entropy S = k<tspan dy="4" font-size="10">B</tspan><tspan dy="-4"> ln Ω counts the ways</tspan></text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Free expansion by counting',
        problem: 'One mole of ideal gas doubles its volume freely (into an evacuated, insulated chamber). What is $\\Delta S$, and what is the probability that all the molecules spontaneously crowd back into the original half?',
        steps: [
          { label: 'Multiplicity ratio', text: 'Each molecule gains a factor of 2 in accessible positions, so $\\Omega_f/\\Omega_i = 2^N = 2^{N_A}$.' },
          { label: 'Entropy change', text: '$\\Delta S = k_B\\ln 2^{N_A} = N_Ak_B\\ln 2 = R\\ln 2 = (8.31)(0.693) = 5.76$ J/K.' },
          { label: 'The return probability', text: '$P = 2^{-N_A} = 10^{-N_A\\log 2} = 10^{-1.8\\times10^{23}}$ — a decimal point followed by $1.8\\times10^{23}$ zeros.' },
        ],
        result: '$\\Delta S = +5.76$ J/K — exactly what $dQ/T$ bookkeeping gives for the reversible path — and the un-expansion, though not impossible, is the most impossible number in physics.',
      },
      {
        title: 'How impossible is "all heads"?',
        problem: 'A fair coin is flipped 100 times. Compare the all-heads outcome with the roughly-even outcomes, and decide whether you would ever expect to see it.',
        steps: [
          { label: 'Probability', text: 'One specific sequence in $2^{100}$ equally likely ones: $P = 2^{-100} = 7.9\\times10^{-31}$.' },
          { label: 'Time scale', text: 'Flipping a billion times per second for the age of the universe ($4.4\\times10^{17}$ s) executes $4.4\\times10^{26}$ flips — giving a cumulative chance of $4.4\\times10^{26}\\times7.9\\times10^{-31} \\approx 3\\times10^{-4}$.' },
          { label: 'Scale to molecules', text: 'Now replace 100 coins with $10^{23}$ molecules: the exponent grows by 21 orders of magnitude, and the probability becomes the $10^{-1.8\\times10^{23}}$ of the previous example.' },
        ],
        result: 'You would need roughly 3000 universe-lifetimes of billion-per-second flipping to see 100 heads once — and a mole of coins would never, ever show all heads.',
      },
    ],
    keyTakeaways: [
      'Microstate vs macrostate: $\\Omega$ counts the microstates behind one macrostate; $S = k_B\\ln\\Omega$.',
      '$\\Delta S = k_B\\ln(\\Omega_f/\\Omega_i)$; free expansion gives $nR\\ln 2$ by pure counting.',
      'The second law is statistics: violations have probabilities like $2^{-N_A}$ — not forbidden, just unseeable.',
    ],
    quiz: [
      { q: 'If the multiplicity of a system doubles, $\\Omega_f/\\Omega_i = 2$, the entropy change is', options: [`$k_B\\ln 2$`, `$2k_B$`, `$k_B/2$`, 'zero'], answer: 0, explanation: '$\\Delta S = k_B\\ln(\\Omega_f/\\Omega_i) = k_B\\ln2$.' },
      { q: 'In the free expansion of an ideal gas, $Q = 0$ yet $\\Delta S > 0$. This is consistent because', options: ['the first law is violated', 'entropy is determined by the multiplicity of the endpoints, and $dQ/T$ only computes it along reversible paths', 'the temperature dropped', 'the gas did positive work'], answer: 1, explanation: 'Doubling the volume doubles each molecule\'s options: $\\Delta S = nR\\ln2$ by counting, no heat required.' },
      { q: 'The equilibrium macrostate of an isolated collection of atoms is the one', options: ['with the lowest energy', 'with the largest multiplicity $\\Omega$', 'that looks most ordered', 'with the fewest microstates'], answer: 1, explanation: 'Random reshuffling visits macrostates in proportion to their multiplicity, so the widest bin wins — and $S = k_B\\ln\\Omega$ is maximal.' },
      { q: 'Macroscopic violations of the second law (entropy decreasing in an isolated system) are never observed because', options: ['they are mechanically forbidden by Newton\'s laws', 'their probabilities scale like $2^{-N_A}$, which is indistinguishable from zero', 'energy conservation forbids them', 'the universe is not actually isolated'], answer: 1, explanation: 'Every molecular trajectory exists; it is the counting — $10^{23}$ coins — that makes the ordered outcome unseeable in any lifetime of the universe.' },
    ],
  },
]

import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// Hughes, Electrical & Electronic Technology, 12th Edition — Chapter 20
// (sections 20.7–20.28, print pp. 442–480) merged with the transistor chapters
// of Horowitz & Hill, The Art of Electronics, 3rd Edition, mapped to the
// Master Library chapters 13 (BJTs). All worked-example numbers are the
// books’ own: the 0.98/0.02 mA distribution (Fig. 20.15), α = 0.98 → β = 49
// (§20.12), the load line of Fig. 20.27, Example 20.3 (stage gains 20/17/340),
// Example 20.4 (46.3/−231.5/10 720), Example 20.9 (Ai = 2120, Ap = 9 080 000),
// Examples 20.6–20.7 (stabilized supplies) and the Ebers–Moll transconductance
// gm = IC/VT of AoE. Math is LaTeX, rendered by KaTeX via $...$ / $$...$$.
// ============================================================================

export const elecCh13Content: SectionContent[] = [
  // ------------------------------------------------------------------ 13.1
  {
    sectionId: 'elec-ch13-s1',
    readingTime: 8,
    intro: 'The semiconductor diode of Chapter 12 becomes enormously more powerful when two junctions share one very thin middle layer. That sandwich is the bipolar junction transistor — the device that made electronic amplification cheap, and the ancestor of every amplifier and switch we meet in the rest of this book. Hughes builds it as “a combination of two junction diodes”, then follows the electrons through the base to explain why a tiny base current commands a large collector current.',
    objectives: [
      'Describe the n–p–n and p–n–p layer structures, name the three terminals and state their doping roles',
      'Explain carrier action in normal operation — injection at the emitter junction, diffusion across the base, collection at the collector junction',
      'Apply Kirchhoff’s first law to the terminal currents and compute base current from a given collection fraction',
      'Distinguish the common-base, common-emitter and common-collector connections and explain why the common-emitter stage dominates',
    ],
    concepts: [
      {
        term: 'Bipolar junction transistor',
        kind: 'definition',
        statement: 'A **bipolar junction transistor (BJT)** is a combination of two junction diodes: either a thin layer of p-type semiconductor sandwiched between two n-type layers (an n–p–n transistor) or a thin layer of n-type sandwiched between two p-type layers (p–n–p). The thin central layer is the **base**; the outer layers are the **emitter** and the **collector**.',
        detail: 'The thickness of the base is of the order of $25\\,\\mu\\text{m}$ ($25\\times 10^{-6}\\,\\text{m}$) — a thousand times thinner than the transistor itself. The word “bipolar” records that both electrons and holes take part in the action, in contrast to the field-effect transistor of Chapter 14, whose current is carried by majority carriers alone. The junction between emitter and base is deliberately forward biased in normal operation; the junction between base and collector is reverse biased.',
      },
      {
        term: 'Emitter, base and collector',
        kind: 'definition',
        statement: 'In an n–p–n transistor the junction formed by $n_1$–p is forward biased by battery $B_1$, urging free electrons from $n_1$ towards p — hence $n_1$ is the **emitter**. The junction formed by $n_2$–p is reverse biased by $B_2$, and the electrons that diffuse through the base come within the influence of the positive terminal of $B_2$ and are swept into $n_2$ — hence $n_2$ is the **collector**.',
        detail: 'If $B_1$ were disconnected, zero emitter current would leave only the tiny thermally generated minority-carrier current of Chapter 12 flowing between $n_2$ and the base. With $B_1$ connected, electrons from the emitter enter the base and diffuse through it; those that reach $n_2$ are gathered by the metal electrode attached to it. The p–n–p transistor works exactly the same way with the movement of electrons replaced by the movement of holes — all voltages and currents simply reverse sign.',
      },
      {
        term: 'The 98 per cent collection rule',
        kind: 'insight',
        statement: 'By making the **base very thin** and the **impurity concentration in the base much less than in the emitter and collector**, the electrons emerging from the emitter have little opportunity of combining with holes — with the result that about **98 per cent** of them reach the collector.',
        detail: 'Some electrons, in passing through the base, combine with holes; others reach the base terminal. The electrons that do not reach the collector are exactly the current at the base terminal — this is the physical origin of $I_B$. The construction therefore sets the current gain: a thinner, lighter-doped base gives less recombination, a larger fraction collected, and a smaller base current for the same output.',
      },
      {
        term: 'Kirchhoff’s first law at the transistor',
        kind: 'law',
        statement: 'The terminal currents satisfy $$I_E = I_B + I_C,$$ so if $I_C = 0.98\\,I_E$ then $I_B = 0.02\\,I_E$. When $I_E = 1\\,\\text{mA}$, $I_C = 0.98\\,\\text{mA}$ and $I_B = 0.02\\,\\text{mA}$.',
        detail: 'This is the node equation of Fig. 20.15 in Hughes: conventional currents $I_E$, $I_B$ and $I_C$ are drawn with arrows in their true directions for an n–p–n device. The same relation holds for signal changes, $\\Delta I_E = \\Delta I_C + \\Delta I_B$, and it is the hinge on which the α–β relation of Section 13.2 turns.',
      },
      {
        term: 'Alloy-junction construction',
        kind: 'method',
        statement: 'A p–n–p germanium transistor is built by purifying the semiconductor to better than **1 part in $10^{10}$**, doping the base slice n-type with about **1 part in $10^{8}$** of antimony, slicing it to about **0.1 mm** thick, and alloying a pellet of p-type indium into each side — the collector pellet about **three times the size** of the emitter pellet.',
        detail: 'The assembly is heated in a hydrogen atmosphere until the pellets melt and dissolve some of the germanium, forming p-type alloy regions on either side of the n-type base. Leads soldered to the surplus pellet material make non-rectifying emitter and collector contacts; a nickel tab solders to the base. Finally the transistor is hermetically sealed in a metal or glass container, the glass being coated with opaque paint, protecting it from moisture and light.',
      },
      {
        term: 'Why the collector bead is larger',
        kind: 'insight',
        statement: 'The collector pellet is made about three times the emitter size for two reasons: the current carriers from the emitter **spread outwards** as they cross the base, so a larger area collects them more effectively, and the **larger area assists in dissipating the greater power loss** at the collector–base junction.',
        detail: 'The dissipation is greater at the collector because the potential difference between collector and base is much larger than that between emitter and base — the reverse-biased junction carries almost the whole supply voltage. The emitter and collector are physically and electrically different, which is why a transistor is not a symmetric device despite its two-junction appearance.',
      },
      {
        term: 'Common-base connection',
        kind: 'definition',
        statement: 'In the **common-base** circuit the base is connected directly to both the emitter (input) and collector (output) circuits. The arrowhead on the line joining the emitter terminal to the base indicates the conventional direction of the current in that part of the circuit.',
        detail: 'The arrow is the circuit-diagram signature of the device: it points in the direction of conventional emitter current — from base to emitter region for the n–p–n symbol, from emitter to base for p–n–p. The common-base connection gives near-unity current gain (Section 13.2) and is used where its low input impedance suits a current source.',
      },
      {
        term: 'Common-emitter connection',
        kind: 'definition',
        statement: 'In the **common-emitter** circuit the emitter is connected directly to both the base (input) and collector (output) circuits. This method is more commonly used than the common-base circuit owing to its **higher input resistance** and its **higher current and power gains**.',
        detail: 'The common-collector circuit is used only in special cases and is not treated further by Hughes. Almost every amplifier stage in Sections 13.3–13.4 — the load line, the quiescent point, the h-parameter equivalent circuit — is drawn in the common-emitter form for exactly these reasons. It is the workhorse configuration of analog electronics.',
      },
    ],
    examples: [
      {
        title: 'Currents in emitter, collector and base circuits',
        problem: 'An n–p–n transistor operates with $I_C = 0.98\\,I_E$. If the emitter current is $1\\,\\text{mA}$, find the collector and base currents, and verify the node equation (Hughes, Fig. 20.15).',
        steps: [
          { label: 'Step 1: State the current law', text: 'By Kirchhoff’s first law the three terminal currents satisfy $I_E = I_B + I_C$, so the base current is whatever the emitter injects and the collector fails to gather.' },
          { label: 'Step 2: Apply the collection fraction', text: 'With $I_C = 0.98\\,I_E$ and $I_E = 1\\,\\text{mA}$, the collector current is $I_C = 0.98\\,\\text{mA}$ — the 98 per cent of injected electrons that survive the crossing of the base.' },
          { label: 'Step 3: Find the base current', text: 'The remainder returns through the base terminal: $I_B = I_E - I_C = 1\\,\\text{mA} - 0.98\\,\\text{mA} = 0.02\\,\\text{mA}$, that is $20\\,\\mu\\text{A}$.' },
          { label: 'Step 4: Interpret the result', text: 'The ratio $I_C/I_B = 0.98/0.02 = 49$ is already the essence of transistor action: a $20\\,\\mu\\text{A}$ base current controls a $0.98\\,\\text{mA}$ collector current. Section 13.2 names this ratio $\\beta$.' },
        ],
        result: '$I_C = 0.98\\,\\text{mA}$, $I_B = 0.02\\,\\text{mA}$, and $I_E = I_B + I_C = 1\\,\\text{mA}$ exactly — one milliampere in, a 49-fold larger current out than the control current.',
      },
      {
        title: 'Building an alloy-junction p–n–p transistor',
        problem: 'Summarize the constructional numbers Hughes gives for an alloy-junction germanium transistor — purity, doping, geometry and packaging.',
        steps: [
          { label: 'Step 1: Purify', text: 'The silicon or germanium is purified until any impurity does not exceed about 1 part in $10^{10}$ — the exceptional degree of purity that Chapter 12 demanded of diode material.' },
          { label: 'Step 2: Form the base slice', text: 'While molten, an n-type impurity (antimony, for germanium) is added in the proportion of about 1 part in $10^{8}$; the solidified crystal is sawn into slices about $0.1\\,\\text{mm}$ thick, each forming the base region of a transistor.' },
          { label: 'Step 3: Alloy the junctions', text: 'A pellet of p-type indium is placed on each side — the collector pellet about three times the size of the emitter pellet — and the assembly is heated in a hydrogen atmosphere until the pellets melt and dissolve some of the germanium, forming the p-type alloy regions.' },
          { label: 'Step 4: Make the contacts and seal', text: 'Leads are soldered to the surplus pellet material for emitter and collector (non-rectifying contacts), a nickel tab solders to the base, and the assembly is hermetically sealed in metal or glass — the glass coated with opaque paint against moisture and light.' },
        ],
        result: 'A completed junction transistor: emitter and collector of p-type alloy, an n-type base about $0.1\\,\\text{mm}$ thick, and a collector junction three times the emitter area to catch the spreading carriers and dissipate the larger collector-junction power.',
      },
    ],
    keyTakeaways: [
      'A BJT is two junction diodes sharing one thin ($\\sim 25\\,\\mu\\text{m}$), lightly doped base — n–p–n or p–n–p.',
      'Normal operation forward biases the emitter junction and reverse biases the collector junction; electrons (or holes) are injected, diffuse across the base and are collected.',
      'Because the base is thin and lightly doped, about 98 per cent of the carriers reach the collector; the remainder is the base current.',
      'The terminal currents obey $I_E = I_B + I_C$ — at $1\\,\\text{mA}$ emitter current, $I_C = 0.98\\,\\text{mA}$ and $I_B = 0.02\\,\\text{mA}$.',
      'The common-emitter connection is preferred for its higher input resistance and higher current and power gains; common-base and common-collector serve special cases.',
      'Alloy-junction construction dopes the base 1 part in $10^{8}$ into $10^{10}$-pure material and makes the collector pellet three times the emitter — asymmetry is deliberate, for collection efficiency and heat dissipation.',
    ],
    quiz: [
      {
        q: 'In normal operation of an n–p–n transistor, the two junctions are biased as follows:',
        options: ['Emitter junction forward, collector junction reverse', 'Emitter junction reverse, collector junction forward', 'Both junctions forward biased', 'Both junctions reverse biased'],
        answer: 0,
        explanation: 'The emitter–base diode is forward biased by $B_1$ so electrons are urged towards the base; the collector–base diode is reverse biased by $B_2$ so its junction field sweeps up the diffusing electrons. Both-forward is saturation and both-reverse is cut-off — the switch states of Section 13.5.',
      },
      {
        q: 'The base region of a bipolar transistor is made very thin and lightly doped so that:',
        options: ['The base current is large and stable', 'Most injected carriers diffuse across to the collector instead of recombining', 'The collector junction can be forward biased', 'The device works equally well with emitter and collector interchanged'],
        answer: 1,
        explanation: 'A thin, lightly doped base gives the injected electrons little opportunity to combine with holes, so about 98 per cent reach the collector. That is what makes the base current — and therefore the control current — small.',
      },
      {
        q: 'A transistor has $I_C = 0.98\\,I_E$. If $I_E = 1\\,\\text{mA}$, the base current is:',
        options: [`$0.98\\,\\text{mA}$`, `$0.02\\,\\text{mA}$`, `$1.00\\,\\text{mA}$`, `$0.49\\,\\text{mA}$`],
        answer: 1,
        explanation: 'Kirchhoff’s first law gives $I_B = I_E - I_C = 1\\,\\text{mA} - 0.98\\,\\text{mA} = 0.02\\,\\text{mA}$. The collector takes 98 per cent of the emitter current; the base returns the missing 2 per cent.',
      },
      {
        q: 'Why is the collector pellet made about three times the size of the emitter pellet in alloy-junction construction?',
        options: ['To increase the emitter doping level', 'To collect carriers that spread outwards through the base and to dissipate the greater power loss at the collector junction', 'To reduce the base thickness', 'To make the transistor symmetric so either lead can serve as emitter'],
        answer: 1,
        explanation: 'Carriers from the emitter spread as they cross the base, so a larger collector area gathers them more effectively; and because the collector–base p.d. exceeds the emitter–base p.d., the larger area also helps dissipate the greater junction power.',
      },
      {
        q: 'The common-emitter connection is preferred over common-base because it offers:',
        options: ['Lower input resistance but more gain', 'Higher input resistance together with higher current and power gains', 'Near-unity current gain and the highest input impedance of the three connections', 'Immunity to leakage current'],
        answer: 1,
        explanation: 'Hughes states it plainly: the common-emitter method is more commonly used owing to its higher input resistance and the higher current and power gains. The common-base stage keeps near-unity current gain; the common-collector (emitter follower) appears only in special cases.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.2
  {
    sectionId: 'elec-ch13-s2',
    readingTime: 8,
    intro: 'Before a transistor can be biased or amplified into, its terminal behaviour must be measured. Hughes measures it twice — once holding the emitter current fixed (common-base) and once holding the base current fixed (common-emitter) — and the two experiments deliver two current amplification factors, α and β. One algebraic step links them, and one leakage current, I_CBO, sets the stability problem that Section 13.5 has to solve.',
    objectives: [
      'Describe the measurement and shape of common-base and common-emitter static characteristics',
      'Define α and β as ratios of current changes taken at constant output voltage',
      'Derive the relation between α and β and convert between them',
      'Account for the leakage current I_CBO and explain its effect on collector current and bias stability',
    ],
    concepts: [
      {
        term: 'Common-base output characteristics',
        kind: 'method',
        statement: 'To measure the **common-base characteristics**, the emitter current is held constant (say $1\\,\\text{mA}$) by a slider, and the collector current is noted for various collector–base voltages; repeating for several emitter currents gives a family of curves $I_C$ versus $V_{CB}$.',
        detail: 'For positive $V_{CB}$ the collector current remains almost constant — nearly all the electrons entering the base of an n–p–n transistor are attracted to the collector — and for a given collector–base voltage the collector current is practically proportional to the emitter current. The family (Hughes Fig. 20.20, $I_E$ from 1 to 5 mA) is almost flat: the collector behaves as a current source, not a resistor.',
      },
      {
        term: 'BS 3363 sign convention',
        kind: 'notation',
        statement: 'In accordance with **BS 3363**, a current is positive when its direction is from the external circuit towards the transistor terminal, and $V_{CB}$ is positive when the collector is positive relative to the base. For an n–p–n transistor $I_C$ and $V_{CB}$ are positive but $I_E$ is negative; for p–n–p, all signs reverse.',
        detail: 'The convention is what makes published characteristic sheets mutually consistent: the flat common-base curves of Fig. 20.20 are plotted with the emitter current shown negative (drawn downwards from zero) because the emitter current flows out of the terminal into the external circuit. Data-sheet readers must check which convention a manufacturer uses before comparing devices.',
      },
      {
        term: 'Current amplification factor α (common-base)',
        kind: 'law',
        statement: 'The ratio of the change $\\Delta I_C$ in collector current to the change $\\Delta I_E$ in emitter current, for a given collector–base voltage, is the **current amplification factor for a common-base circuit**: $$\\alpha = \\frac{\\Delta I_C}{\\Delta I_E} \\quad \\text{for a given } V_{CB}.$$',
        detail: 'It is the slope (neglecting signs) of the $I_C$–$I_E$ graph of Fig. 20.21, drawn at $V_{CB} = 4\\,\\text{V}$: an almost straight line through the origin. Because about 98 per cent of the emitter current is collected, α is just under unity — typically 0.95 to 0.998.',
      },
      {
        term: 'Common-emitter characteristics',
        kind: 'method',
        statement: 'For the **common-emitter characteristics** the base current is held constant (say $25\\,\\mu\\text{A}$) through a microammeter, and the collector current is noted for various collector–emitter voltages $V_{CE}$; the family is completed for several base currents.',
        detail: 'Hughes plots $I_B = 0, 25, 50, 75\\,\\mu\\text{A}$ (Fig. 20.23), the curves rising steeply near the origin and flattening above a volt or so — the familiar “fan” that reappears around every load line in Section 13.3. For a given voltage between collector and emitter, e.g. $V_{CE} = 4\\,\\text{V}$, the relationship between collector and base currents is practically linear (Fig. 20.24).',
      },
      {
        term: 'Current amplification factor β (common-emitter)',
        kind: 'law',
        statement: 'The ratio of the change $\\Delta I_C$ in collector current to the change $\\Delta I_B$ in base current, for a given collector–emitter voltage, is the **current amplification factor for a common-emitter circuit**: $$\\beta = \\frac{\\Delta I_C}{\\Delta I_B} \\quad \\text{for a given } V_{CE}.$$',
        detail: 'It is the slope of the $I_C$–$I_B$ graph of Fig. 20.24 at $V_{CE} = 4\\,\\text{V}$ — a straight line, which is why the common-emitter stage is a natural current amplifier. Because $I_B$ is the small residue of $I_E$, values of β from 20 to several hundred are routine; the same transistor measured in common-base gives α just below 1.',
      },
      {
        term: 'The α–β relation',
        kind: 'theorem',
        statement: 'Since $I_E = I_C + I_B$, we have $\\Delta I_E = \\Delta I_C + \\Delta I_B$. Dividing through by $\\Delta I_C$ gives $1/\\alpha = 1 + 1/\\beta$, hence $$\\alpha = \\frac{\\beta}{1 + \\beta} \\qquad \\text{and} \\qquad \\beta = \\frac{\\alpha}{1 - \\alpha}.$$',
        detail: 'Thus if $\\alpha = 0.98$ then $\\beta = 0.98/0.02 = 49$, and if $\\alpha = 0.99$ then $\\beta = 0.99/0.01 = 99$: a small variation in α corresponds to a large variation in β. It is therefore better to determine β experimentally and calculate from it the corresponding value of α — the sensitive number is measured directly, the insensitive one derived.',
      },
      {
        term: 'Leakage current I_CBO',
        kind: 'definition',
        statement: 'If the emitter is not connected ($I_E = 0$) a small collector current still flows — the **leakage current** crossing the reverse-biased collector–base junction. It is given the symbol $I_{CBO}$: the collector–base current with zero emitter current.',
        detail: 'This is the saturation current of the reverse-biased junction of Chapter 12, plus surface leakage — only microamperes, but it never disappears. When the emitter is reconnected the leakage is still present, so the total collector current is $I_C = \\alpha I_E + I_{CBO}$, and substituting $I_E = I_B + I_C$ collects it into the base-current form below.',
      },
      {
        term: 'Collector current with leakage',
        kind: 'law',
        statement: 'Substituting $I_E = I_B + I_C$ into $I_C = \\alpha I_E + I_{CBO}$ gives $I_C(1 - \\alpha) = \\alpha I_B + I_{CBO}$, so $$I_C = \\beta I_B + \\frac{I_{CBO}}{1 - \\alpha}.$$ If $I_{CBO}$ is very small the last term can be neglected and the relation reduces to $I_C = \\beta I_B$.',
        detail: 'The factor $1/(1-\\alpha)$ multiplying the leakage is large — 50 when α is 0.98 — so the leakage is amplified into the output along with the signal. Worse, the leakage current is temperature dependent: an increase in temperature causes it to rise, which increases the collector current and changes the bias conditions. Stabilizing the bias against this drift is the business of Section 13.5.',
      },
    ],
    examples: [
      {
        title: 'From α to β and back',
        problem: 'A datasheet quotes common-base current amplification factors α = 0.98 and α = 0.99. Find the corresponding β values, and comment on the sensitivity (Hughes, §20.12).',
        steps: [
          { label: 'Step 1: Write the relation', text: 'From $I_E = I_C + I_B$ we have $\\Delta I_E = \\Delta I_C + \\Delta I_B$, so $1/\\alpha = 1 + 1/\\beta$ and therefore $\\beta = \\alpha/(1 - \\alpha)$.' },
          { label: 'Step 2: First device', text: 'For $\\alpha = 0.98$: $\\beta = 0.98/(1 - 0.98) = 0.98/0.02 = 49$.' },
          { label: 'Step 3: Second device', text: 'For $\\alpha = 0.99$: $\\beta = 0.99/(1 - 0.99) = 0.99/0.01 = 99$.' },
          { label: 'Step 4: Interpret', text: 'A 1 per cent change in α — from 0.98 to 0.99 — doubled β from 49 to 99. A small variation in α therefore corresponds to a large variation in β, which is why β is the experimentally quoted parameter and α the derived one ($\\alpha = \\beta/(1+\\beta)$).' },
        ],
        result: '$\\alpha = 0.98 \\Rightarrow \\beta = 49$; $\\alpha = 0.99 \\Rightarrow \\beta = 99$. Measure β, calculate α — never the reverse.',
      },
      {
        title: 'Verifying β from the terminal currents',
        problem: 'Using the current distribution of Fig. 20.15 ($I_E = 1\\,\\text{mA}$, $I_C = 0.98\\,\\text{mA}$, $I_B = 0.02\\,\\text{mA}$), compute α and β directly and check that they satisfy the α–β relation.',
        steps: [
          { label: 'Step 1: Compute α from the currents', text: 'Treating the (almost) proportional relation between $I_C$ and $I_E$ as the slope of Fig. 20.21, $\\alpha = I_C/I_E = 0.98/1 = 0.98$.' },
          { label: 'Step 2: Compute β from the currents', text: 'Similarly from the common-emitter slope of Fig. 20.24, $\\beta = I_C/I_B = 0.98\\,\\text{mA}/0.02\\,\\text{mA} = 49$.' },
          { label: 'Step 3: Check the relation', text: 'Convert back: $\\alpha = \\beta/(1+\\beta) = 49/50 = 0.98$ — exactly the value from Step 1.' },
          { label: 'Step 4: Note the leakage caveat', text: 'These quotients ignore $I_{CBO}$; with leakage included the collector current is $I_C = \\beta I_B + I_{CBO}/(1-\\alpha)$, and the true $\\Delta$-ratio definitions of α and β apply only at constant $V_{CB}$ or $V_{CE}$ respectively.' },
        ],
        result: 'α = 0.98 and β = 49 — consistent, because a device that collects 98 per cent of a $1\\,\\text{mA}$ emitter current delivers a 49-fold base-to-collector current gain.',
      },
    ],
    keyTakeaways: [
      'Common-base curves are nearly flat: $I_C$ is almost independent of $V_{CB}$ and practically proportional to $I_E$.',
      'Common-emitter curves fan out from the origin: $I_C$ versus $I_B$ is practically linear at constant $V_{CE}$.',
      'α = ΔI_C/ΔI_E at constant $V_{CB}$ (just under 1); β = ΔI_C/ΔI_B at constant $V_{CE}$ (typically 20–300).',
      'The α–β relation $\\alpha = \\beta/(1+\\beta)$, $\\beta = \\alpha/(1-\\alpha)$: α = 0.98 gives β = 49, α = 0.99 gives β = 99 — measure β, derive α.',
      'With the emitter open a leakage current $I_{CBO}$ still flows; the full collector current is $I_C = \\beta I_B + I_{CBO}/(1-\\alpha)$.',
      'Leakage rises with temperature, dragging $I_C$ and the bias point with it — the instability that bias networks must suppress.',
    ],
    quiz: [
      {
        q: 'The current amplification factor α for a common-base circuit is defined as:',
        options: [`$\\Delta I_C/\\Delta I_B$ at constant $V_{CE}$`, `$\\Delta I_C/\\Delta I_E$ at constant $V_{CB}$`, `$\\Delta I_B/\\Delta I_C$ at constant $V_{CB}$`, `$\\Delta I_E/\\Delta I_C$ at constant $V_{CE}$`],
        answer: 1,
        explanation: 'α is the ratio of the change in collector current to the change in emitter current, taken for a given value of $V_{CB}$ — the slope of the $I_C$–$I_E$ graph. The $\\Delta I_C/\\Delta I_B$ ratio at constant $V_{CE}$ is β, the common-emitter factor.',
      },
      {
        q: 'A transistor has α = 0.99. Its β is:',
        options: ['About 1.01', '9.9', '99', '0.505'],
        answer: 2,
        explanation: '$\\beta = \\alpha/(1-\\alpha) = 0.99/0.01 = 99$. The tiny uncollected fraction 1 − α is the base current, so β blows up as α approaches unity.',
      },
      {
        q: 'The leakage current $I_{CBO}$ is measured with:',
        options: ['The collector junction forward biased', 'The base and emitter terminals shorted', 'The emitter open-circuited ($I_E = 0$)', 'Zero collector–base voltage'],
        answer: 2,
        explanation: '$I_{CBO}$ is the collector–base current with zero emitter current — the emitter disconnected. It is the reverse-biased junction’s leakage, and it flows whether or not the transistor is amplifying.',
      },
      {
        q: 'Including leakage, the collector current of a common-emitter stage is:',
        options: [`$I_C = \\alpha I_B + I_{CBO}$`, `$I_C = \\beta I_B + I_{CBO}/(1 - \\alpha)$`, `$I_C = \\beta I_B - I_{CBO}$`, `$I_C = \\alpha I_E - I_{CBO}$`],
        answer: 1,
        explanation: 'Substituting $I_E = I_B + I_C$ into $I_C = \\alpha I_E + I_{CBO}$ gives $I_C = \\beta I_B + I_{CBO}/(1-\\alpha)$. The leakage is amplified by the large factor $1/(1-\\alpha)$, which is why it matters even though it is only microamperes.',
      },
      {
        q: 'Why is β, rather than α, the parameter usually measured and quoted?',
        options: ['Because α cannot be measured at all', 'Because a small variation in α corresponds to a large variation in β, so α is best derived from β', 'Because β is dimensionless while α is not', 'Because α depends on temperature but β does not'],
        answer: 1,
        explanation: 'Between α = 0.98 and α = 0.99, β doubles from 49 to 99. The sensitive quantity is β; Hughes accordingly recommends determining β experimentally and calculating α from $\\alpha = \\beta/(1+\\beta)$. Both are dimensionless ratios.',
      },
      // PYQ-pattern: ISRO 2016 — alpha-beta interconversion (rephrased, values changed)
      {
        q: 'A bipolar transistor has common-base current gain $α = 0.985$ and emitter current 5.0 mA. Its base current is closest to:',
        options: ['25 μA', '75 μA', '250 μA', '750 μA'],
        answer: 1,
        explanation: 'Step 1 — Given: $α = 0.985$, $I_{E} = 5.0$ mA. Step 2 — Governing links: $β = \\frac{α}{1 - α}$, $I_{C} = α I_{E}$ and $I_{B} = \\frac{I_{C}}{β} = (1 - α)I_{E}$. Step 3 — Algebra: $β = \\frac{0.985}{0.015} \\approx 65.67$; $I_{C} = 0.985 \\times 5.0 = 4.925$ mA; $I_{B} = 0.015 \\times 5.0 = 0.075$ mA, that is $75$ μA. Step 4 — Sanity check: $I_{C} + I_{B} = 5.0$ mA closes KCL, $β$ in the tens suits a small-signal device, and base current is a small fraction of emitter current. Step 5 — Distractor analysis: 25 μA uses $1 - α = 0.005$, 250 μA slips a decade, and 750 μA compounds both slips. Step 6 — Conclude: the base draws about 75 μA.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.3
  {
    sectionId: 'elec-ch13-s3',
    readingTime: 10,
    intro: 'Characteristics describe the device; the load line describes the circuit around it. Supply voltage, collector resistance and the transistor family meet on one straight line, and where the bias current places the operating point on that line decides whether the stage amplifies cleanly or distorts. Hughes carries one common-emitter stage through the whole story — load line, quiescent point, gains, and finally the choice of every component value.',
    objectives: [
      'Draw the d.c. load line on a set of output characteristics from the supply voltage and load resistance',
      'Locate a quiescent point that allows symmetric, linear signal swing and read current and voltage excursions from it',
      'Compute current, voltage and power gains from graphical data, distinguishing the a.c. and d.c. load lines',
      'Select bias resistor, collector resistor and coupling capacitors for a given transistor family',
    ],
    concepts: [
      {
        term: 'The load line',
        kind: 'method',
        statement: 'The **load line** is the locus of the variation of the collector current for any variation in the emitter (or base) current; it is a straight line drawn between the quiescent operating point and the point where the whole supply appears across the load.',
        detail: 'In Hughes’s common-base example the collector–base voltage is to be $3\\,\\text{V}$ with no signal, and an emitter current of $3\\,\\text{mA}$ gives a collector current of $2.9\\,\\text{mA}$ — point D of Fig. 20.27. With a load of $R = 1000\\,\\Omega$ the p.d. across R is $0.0029 \\times 1000 = 2.9\\,\\text{V}$, so the total collector bias must be $3 + 2.9 = 5.9\\,\\text{V}$ — point P. The straight line PD is the load line, and the inverse of its slope is the resistance of the load: $HP/DH = 2.9/0.0029 = 1000\\,\\Omega$.',
      },
      {
        term: 'Graphical output determination',
        kind: 'insight',
        statement: 'Each value of emitter (or base) current intersects the load line at one point, so a sinusoidal input sweep maps directly into a sinusoidal collector current: if $I_E$ varies between 1 and 5 mA, the operating point slides along the line and the collector current follows.',
        detail: 'The output curve will be sinusoidal if the characteristics are linear and equally spaced over the working range. The function of the output capacitor C is to eliminate the d.c. component of the voltage across the load from the output. Hughes’s notation: a lower-case subscript indicates an r.m.s. value compared with a capital for the d.c. value — $I_c R$ is the r.m.s. alternating output voltage and $I_c^2 R$ the output power. The larger the load resistance, the greater the voltage and power gains, the maximum R for a given supply being limited by the maximum permissible distortion.',
      },
      {
        term: 'Why bias is necessary',
        kind: 'definition',
        statement: 'The transistor must operate in a **unidirectional mode**: without bias, the negative parts of an alternating input would reverse-bias the emitter–base junction and prevent normal transistor action. A practical stage therefore adds $R_B$ to provide the base bias current and $R_C$ to couple the collector to the positive supply.',
        detail: 'Coupling capacitors separate the direct currents of the transistor arrangement from the alternating signal entering and leaving the amplifier: $C_1$ prevents the signal source from affecting the steady component of base current, and $C_2$ prevents the load from affecting the steady conditions of the collector. Their capacitances are chosen so that the reactances are negligible at the operating frequencies — the amplifier of Chapter 11 reduced to four components and a transistor.',
      },
      {
        term: 'Bias resistor and the load-line equation',
        kind: 'law',
        statement: 'Writing $V_S = I_B R_B + V_{BE}$ for the quiescent base loop gives $$R_B = \\frac{V_S - V_{BE}}{I_B},$$ often approximated by $R_B \\approx V_S/I_B$ since $V_{BE}$ is small. On the output side, at any instant $v_{ce} = V_S - i_c R_C$, so $$i_c = -\\frac{1}{R_C}v_{ce} + \\frac{V_S}{R_C}$$ — the load line in equation form.',
        detail: 'These are Hughes relations [20.19]–[20.21]. The intercepts fall out immediately: if $i_c = 0$ then $v_{ce} = V_S$ (the whole supply across the transistor), and if $v_{ce} = 0$ then $i_c = V_S/R_C$ (the whole supply across the resistor). Every graphical construction of this section starts by plotting those two points on the output characteristics.',
      },
      {
        term: 'Quiescent point selection',
        kind: 'method',
        statement: 'For a linear response the stage must operate on that part of the load line which meets the family of characteristics at **regular intervals**; B is the lowest acceptable point, and **Q is more or less halfway between A and B** — the nearer exactly halfway, the better the linear amplification.',
        detail: 'Points A, Q and B correspond to the maximum, mean and minimum values of the base current, $I_B + I_{bm}$, $I_B$ and $I_B - I_{bm}$, with collector currents $I_{CA}$, $I_C$, $I_{CB}$ and collector–emitter voltages $V_{CEA}$, $V_{CE}$, $V_{CEB}$. A quiescent value above A would compress the spacing and distort the top of the waveform; below B the bottom is clipped. The total signal swing is read off as $I_{CA} - I_{CB}$ and $V_{CEB} - V_{CEA}$.',
      },
      {
        term: 'Current, voltage and power gains',
        kind: 'law',
        statement: 'The **current gain** is $G_i = \\Delta I_o/\\Delta I_i = (I_{CA} - I_{CB})/2I_{bm}$, the **voltage gain** is $G_v = \\Delta V_o/\\Delta V_i$, and the **power gain** is $G_p = P_o/P_i$, with $$G_p = G_v G_i.$$',
        detail: 'Care is needed with relation [20.24]: the powers $P_i$ and $P_o$ are those related to the signal frequency and exclude the quiescent powers — the signal power in the load is the product of the r.m.s. signal load voltage and the r.m.s. signal load current. The voltage gain needs the change in input voltage that produced the change in base current; little error results from assuming the collector–emitter voltage constant when finding the base–emitter voltage that produces a given base current.',
      },
      {
        term: 'Dynamic characteristic',
        kind: 'definition',
        statement: 'The **dynamic characteristic** is the relation between $i_c$ and $i_b$ derived from the load line for the given values of $R_C$ and $V_S$; provided it is linear over the operating range, the waveform of $i_c$ will be identical to that of $i_b$.',
        detail: 'A linear dynamic characteristic is usually a good indicator that the transistor amplifier will cause little distortion — but the input characteristics of the transistor are not themselves linear, so the signal base current is not an exact replica of the applied signal. The consequent distortion is generally small provided the source resistance is considerably larger than the input resistance of the transistor.',
      },
      {
        term: 'd.c. and a.c. load lines',
        kind: 'law',
        statement: 'When a load $R_L$ is coupled through $C_2$, the effective (a.c.) load on the transistor is $R_C$ and $R_L$ in parallel, $$R_p = \\frac{R_C R_L}{R_C + R_L},$$ and the **a.c. load line** of slope $-1/R_p$ is drawn through the same quiescent point Q. The line of slope $-1/R_C$ is the **d.c. load line**.',
        detail: 'The quiescent point is the same for both lines because it refers to the zero-signal condition, when no signal current flows through the coupling capacitor and $R_L$ carries nothing. Signal excursions then follow the steeper a.c. line — the swing available at the output is smaller than the d.c. line alone suggests, which is why the a.c. line must be the one used to read $I_{CA}$ and $I_{CB}$.',
      },
      {
        term: 'Component selection',
        kind: 'method',
        statement: 'Given the transistor characteristics, select a quiescent point **somewhere in the middle of the family** (Hughes picks the $i_b = 60\\,\\mu\\text{A}$ curve), take $R_B \\approx V_S/I_B$, set the quiescent $V_{CE}$ to about **half the supply voltage**, and choose $R_C = (V_S/2)/I_C$ for the resulting collector current.',
        detail: 'With $V_S = 12\\,\\text{V}$ and $I_B = 60\\,\\mu\\text{A}$: $R_B = 12/60\\times 10^{-6} = 200\\,\\text{k}\\Omega$ (about $183\\,\\text{k}\\Omega$ if a base–emitter drop of order $1\\,\\text{V}$ is allowed for). A quiescent $V_{CE}$ of $6\\,\\text{V}$ corresponds to $I_C = 2.9\\,\\text{mA}$ from the curves, giving $R_C = 6/2.9\\times 10^{-3} \\approx 2\\,\\text{k}\\Omega$. The approximations are acceptable because circuit components are manufactured to tolerances of $\\pm 10$ per cent — the $1.8\\,\\text{k}\\Omega$ and $2.2\\,\\text{k}\\Omega$ actually used in Example 20.3 are equally valid. Finally $C_1$ is chosen so that its reactance $1/2\\pi f C_1$ is about 10 per cent of the input resistance at the operating frequency; alternative bias schemes include a potential divider across the supply or a resistor between emitter and the 0 V line (Section 13.5).',
      },
    ],
    examples: [
      {
        title: 'Example 20.3 — gains of a common-emitter stage',
        problem: 'A bipolar transistor amplifier stage has $V_S = 12\\,\\text{V}$, $R_B = 200\\,\\text{k}\\Omega$ and $R_C = 1.8\\,\\text{k}\\Omega$; the transistor characteristics are linear over the working range. A $2.2\\,\\text{k}\\Omega$ load is connected across the output, and a sinusoidal source of $0.6\\,\\text{V}$ peak and internal resistance $10\\,\\text{k}\\Omega$ drives the input, whose input resistance is effectively constant at $2.7\\,\\text{k}\\Omega$. Determine the current, voltage and power gains of the stage.',
        steps: [
          { label: 'Step 1: d.c. load line extremities', text: 'If $i_c = 0$ then $v_{ce} = V_S = 12\\,\\text{V}$. If $v_{ce} = 0$ then $i_c = V_S/R_C = 12/(1.8\\times 10^{3}) \\approx 6.7\\,\\text{mA}$. These two points fix the d.c. load line on Fig. 20.33.' },
          { label: 'Step 2: a.c. load line through the quiescent point', text: 'The a.c. load is $R_p = (1.8 \\times 2.2)/(1.8 + 2.2) \\approx 1.0\\,\\text{k}\\Omega$, so the a.c. load line has slope $-1/1\\,\\text{k}\\Omega \\approx -1.0\\,\\text{mA/V}$. The quiescent base current is $I_{B0} = 12/(200\\times 10^{3}) \\approx 60\\,\\mu\\text{A}$, and the a.c. line is drawn through the intersection Q of the $60\\,\\mu\\text{A}$ characteristic with the d.c. line.' },
          { label: 'Step 3: input circuit and base-current swing', text: 'The $200\\,\\text{k}\\Omega$ bias resistor shunts the $2.7\\,\\text{k}\\Omega$ transistor input negligibly, so the signal sees $10\\,\\text{k}\\Omega + 2.7\\,\\text{k}\\Omega$. The peak signal base current is $0.6/((10 + 2.7)\\times 10^{3}) \\approx 47\\,\\mu\\text{A}$, so the base current swings between $60 + 47 = 107\\,\\mu\\text{A}$ and $60 - 47 = 13\\,\\mu\\text{A}$.' },
          { label: 'Step 4: collector-current swing and current gain', text: 'From the a.c. load line, the swing between the 13 and 107 $\\mu\\text{A}$ characteristics is $\\Delta i_c = 5.1 - 0.9 = 4.2\\,\\text{mA}$. The change in output current delivered to the $2.2\\,\\text{k}\\Omega$ load is $\\Delta i_o = 4.2\\times 10^{-3} \\times 1.8\\times 10^{3}/((1.8 + 2.2)\\times 10^{3}) = 1.9\\,\\text{mA}$, while $\\Delta i_i = 107 - 13 = 94\\,\\mu\\text{A}$. The stage current gain is therefore $G_i = 1.9\\times 10^{-3}/94\\times 10^{-6} = 20$ (the transistor alone gives $4.2\\times 10^{-3}/94\\times 10^{-6} \\approx 45$).' },
          { label: 'Step 5: voltage and power gains', text: 'From the a.c. load line, $\\Delta v_o = v_{ce} = 8.5 - 4.3 = 4.2\\,\\text{V}$ peak-to-peak. The input swing is $\\Delta v_i = \\Delta i_i \\times R_i = 94\\times 10^{-6} \\times 2.7\\times 10^{3} = 0.25\\,\\text{V}$ peak-to-peak. Hence $G_v = 4.2/0.25 \\approx 17$ and $G_p = G_v G_i = 17 \\times 20 = 340$.' },
          { label: 'Step 6: check through r.m.s. powers', text: 'R.m.s. output voltage $= 4.2/(2\\sqrt{2}) = 1.5\\,\\text{V}$; r.m.s. output current $= 1.5/(2.2\\times 10^{3}) = 0.68\\,\\text{mA}$; $P_o = (0.68\\times 10^{-3})^2 \\times 2.2\\times 10^{3} \\approx 1.0\\,\\text{mW}$. R.m.s. input voltage $= 0.25/(2\\sqrt{2}) \\approx 88\\,\\text{mV}$, r.m.s. input current $\\approx 33\\,\\mu\\text{A}$, so $P_i \\approx 2.9\\,\\mu\\text{W}$ and $G_p = 1.0\\times 10^{-3}/2.9\\times 10^{-6} \\approx 340$, as before.' },
        ],
        result: 'Stage gains: $G_i = 20$, $G_v \\approx 17$, $G_p = 340$. The transistor itself would give $G_i \\approx 45$ — the difference is the current shared between $R_C$ and the $2.2\\,\\text{k}\\Omega$ load.',
      },
      {
        title: 'Selecting the circuit components',
        problem: 'Using the characteristics of Fig. 20.33 ($V_S = 12\\,\\text{V}$), choose the quiescent point and calculate $R_B$ and $R_C$ for a single-stage amplifier (Hughes, §20.15).',
        steps: [
          { label: 'Step 1: Choose the quiescent base current', text: 'It is the practice first to select a quiescent point in the middle of the family of characteristics — here the curve for $i_b = 60\\,\\mu\\text{A}$ suggests itself immediately.' },
          { label: 'Step 2: Bias resistor', text: 'Neglecting the base–emitter voltage, $R_B = V_S/I_B = 12/(60\\times 10^{-6}) = 200\\,\\text{k}\\Omega$. The neglect is optimistic — $V_{BE}$ is of the order of $1\\,\\text{V}$ — leaving $11\\,\\text{V}$ across the resistor and $R_B \\approx 183\\,\\text{k}\\Omega$.' },
          { label: 'Step 3: Collector resistor', text: 'The quiescent point normally takes a value of about half the supply, $V_{CE} \\approx 6\\,\\text{V}$. From the characteristics the corresponding collector current is $2.9\\,\\text{mA}$, so with $6\\,\\text{V}$ across $R_C$: $R_C = 6/(2.9\\times 10^{-3}) \\approx 2\\,\\text{k}\\Omega$.' },
          { label: 'Step 4: Accept the tolerance', text: 'Example 20.3 actually used $R_C = 1.8\\,\\text{k}\\Omega$, and $2.2\\,\\text{k}\\Omega$ would be equally acceptable — circuit components are manufactured to $\\pm 10$ per cent tolerances, so all three values lie within the same practical band.' },
          { label: 'Step 5: Coupling capacitor', text: 'Choose $C_1$ so that its reactance $1/2\\pi f C_1$ is about 10 per cent of the transistor input resistance at the operating frequency — negligible to the signal, but a complete block to the bias current that must not be diverted through the source.' },
        ],
        result: '$I_B = 60\\,\\mu\\text{A}$, $R_B \\approx 200\\,\\text{k}\\Omega$ ($183\\,\\text{k}\\Omega$ allowing for $V_{BE}$), $R_C \\approx 2\\,\\text{k}\\Omega$ with $V_{CE} \\approx 6\\,\\text{V}$ — a design that centers the swing on the load line using the curves alone.',
      },
    ],
    keyTakeaways: [
      'The load line joins $v_{ce} = V_S$ at $i_c = 0$ to $i_c = V_S/R_C$ at $v_{ce} = 0$; its inverse slope is the load resistance ($2.9/0.0029 = 1000\\,\\Omega$ in Hughes’s construction).',
      'The quiescent point belongs halfway between the extreme usable points A and B on the load line; symmetric placement is what makes the amplification linear.',
      'Stage gains read graphically: $G_i = (I_{CA} - I_{CB})/2I_{bm}$, $G_v = \\Delta V_o/\\Delta V_i$, and $G_p = G_v G_i$ with signal powers only.',
      'Example 20.3: with $V_S = 12\\,\\text{V}$, $R_C = 1.8\\,\\text{k}\\Omega$, $R_L = 2.2\\,\\text{k}\\Omega$ and a $2.7\\,\\text{k}\\Omega$ input driven at $0.6\\,\\text{V}$ peak, the stage delivers $G_i = 20$, $G_v \\approx 17$, $G_p = 340$.',
      'An external load folds the load line: the a.c. line of slope $-1/R_p$ (with $R_p = R_C R_L/(R_C + R_L) \\approx 1.0\\,\\text{k}\\Omega$ here) passes through the same Q.',
      'Component selection is approximate by design: mid-family Q ($60\\,\\mu\\text{A}$), $R_B \\approx V_S/I_B = 200\\,\\text{k}\\Omega$, $R_C \\approx (V_S/2)/I_C \\approx 2\\,\\text{k}\\Omega$, within $\\pm 10$ per cent component tolerances.',
    ],
    quiz: [
      {
        q: 'A common-emitter stage runs from $V_S = 12\\,\\text{V}$ with $R_C = 1.8\\,\\text{k}\\Omega$. The d.c. load line runs between which two points?',
        options: [`$12\\,\\text{V}$ at $i_c = 0$ and $6.7\\,\\text{mA}$ at $v_{ce} = 0$`, `$12\\,\\text{V}$ at $i_c = 6.7\\,\\text{mA}$ and $0\\,\\text{V}$ at $i_c = 0$`, `$6\\,\\text{V}$ at $3\\,\\text{mA}$ and $0\\,\\text{V}$ at $6\\,\\text{mA}$`, `$12\\,\\text{V}$ at $i_c = 0$ and $12\\,\\text{mA}$ at $v_{ce} = 0$`],
        answer: 0,
        explanation: 'Setting $i_c = 0$ in $v_{ce} = V_S - i_c R_C$ leaves the whole supply across the transistor ($12\\,\\text{V}$); setting $v_{ce} = 0$ leaves it all across $R_C$, giving $i_c = 12/(1.8\\times 10^{3}) \\approx 6.7\\,\\text{mA}$. These are the two intercepts the load line joins.',
      },
      {
        q: 'Why is the quiescent point placed roughly halfway between points A and B on the load line?',
        options: ['To minimize the supply current drawn by the stage', 'So the signal can swing almost equally in both directions before hitting cut-off or saturation, keeping amplification linear', 'Because the transistor dissipates exactly half the supply power there', 'To make the d.c. and a.c. load lines coincide'],
        answer: 1,
        explanation: 'A is the top of the usable region, B the lowest acceptable point; operating between them at the middle lets $I_B \\pm I_{bm}$ produce nearly equal positive and negative excursions. The nearer Q is to exactly halfway, the better the linear amplification.',
      },
      {
        q: 'In Example 20.3 the stage current gain (20) is smaller than the transistor current gain (about 45) because:',
        options: ['The transistor’s β falls at low frequency', 'Part of the collector signal current is shared between $R_C$ and the $2.2\\,\\text{k}\\Omega$ external load', 'The bias resistor shunts the input signal', 'The coupling capacitors attenuate the signal'],
        answer: 1,
        explanation: 'Of the $\\Delta i_c = 4.2\\,\\text{mA}$ delivered by the transistor, only the fraction $1.8/(1.8 + 2.2) = 0.45$ flows into the external load — $\\Delta i_o = 1.9\\,\\text{mA}$. The rest flows through $R_C$, which is inside the transistor’s loop but outside the load’s.',
      },
      {
        q: 'A load $R_L = 2.2\\,\\text{k}\\Omega$ is capacitor-coupled to a stage with $R_C = 1.8\\,\\text{k}\\Omega$. The a.c. load the transistor actually drives is:',
        options: ['$4.0\\,\\text{k}\\Omega$ (the sum)', '$2.0\\,\\text{k}\\Omega$ (the average)', '$1.0\\,\\text{k}\\Omega$ (the parallel combination)', '$1.8\\,\\text{k}\\Omega$ (unchanged, because the capacitor blocks d.c.)'],
        answer: 2,
        explanation: 'To the signal, $R_C$ and $R_L$ are in parallel: $R_p = (1.8 \\times 2.2)/(1.8 + 2.2) \\approx 1.0\\,\\text{k}\\Omega$. The capacitor blocks d.c. (so Q is set by $R_C$ alone) but passes the signal (so the swing follows the steeper a.c. line of slope $-1.0\\,\\text{mA/V}$).',
      },
      {
        q: 'In Example 20.3 the r.m.s. output voltage is $1.5\\,\\text{V}$ and the r.m.s. output current $0.68\\,\\text{mA}$ into $2.2\\,\\text{k}\\Omega$. The signal power in the load is about:',
        options: [`$1.0\\,\\text{mW}$`, `$3.3\\,\\text{mW}$`, `$2.9\\,\\mu\\text{W}$`, `$340\\,\\text{mW}$`],
        answer: 0,
        explanation: '$P_o = I^2 R = (0.68\\times 10^{-3})^2 \\times 2.2\\times 10^{3} \\approx 1.0\\,\\text{mW}$ (equivalently $1.5\\,\\text{V} \\times 0.68\\,\\text{mA}$). With $P_i \\approx 2.9\\,\\mu\\text{W}$, the power gain is $1.0\\times 10^{-3}/2.9\\times 10^{-6} \\approx 340$ — the same figure as $G_v G_i$.',
      },
      // PYQ-pattern: GATE 2017 — common-emitter quiescent point (rephrased, values changed)
      {
        q: 'A common-emitter stage uses $V_{CC} = 12$ V, $R_{C} = 2.0$ kΩ and $R_{E} = 0.50$ kΩ, biased so $I_{C} = 3.0$ mA. The quiescent collector-emitter voltage is closest to:',
        options: ['2.5 V', '4.5 V', '6.0 V', '7.5 V'],
        answer: 1,
        explanation: 'Step 1 — Given: $V_{CC} = 12$ V, $R_{C} = 2.0$ kΩ, $R_{E} = 0.50$ kΩ, $I_{C} \\approx I_{E} = 3.0$ mA. Step 2 — Governing load line: $V_{CE} = V_{CC} - I_{C}R_{C} - I_{E}R_{E}$, the supply minus both resistive drops. Step 3 — Algebra: drops are $3.0 \\times 2.0 = 6.0$ V and $3.0 \\times 0.50 = 1.5$ V, so $V_{CE} = 12 - 6.0 - 1.5 = 4.5$ V. Step 4 — Sanity check: the point sits mid-supply with room for symmetric swing, saturation ($0.2$ V) and cutoff ($12$ V) are both distant, and units are consistent. Step 5 — Distractor analysis: 2.5 V doubles the emitter drop, 6.0 V omits it, and 7.5 V mistakes the collector drop. Step 6 — Conclude: the stage rests near 4.5 V.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.4
  {
    sectionId: 'elec-ch13-s4',
    readingTime: 9,
    intro: 'Graphical load lines become clumsy once several stages and source impedances interact, so the transistor is replaced by a small-signal equivalent circuit — a box whose h-parameters are measured once and then reused for every circuit. Hughes derives the current and voltage gains of the common-emitter stage in this language, shows why h_fe is just β wearing a new name, and then multiplies stages together in cascade. The section ends with the observation that pushes electronics toward the FET: the BJT’s input resistance is simply too low.',
    objectives: [
      'Replace a biased transistor by its small-signal h-parameter equivalent circuit and explain what each parameter represents',
      'Derive the current and voltage gains of a loaded common-emitter stage, including the $180\\degree$ phase shift',
      'State the full two-port h-parameter equations and justify neglecting the feedback parameter h_re',
      'Compute the overall gain of cascaded stages and quantify the input-resistance limitation of the BJT',
    ],
    concepts: [
      {
        term: 'The small-signal equivalent circuit',
        kind: 'definition',
        statement: 'So long as a transistor is operated over the **linear portions of its characteristics**, the actual values of the bias voltages are of no consequence — an equivalent circuit used to calculate gains carries only the **r.m.s. values of the alternating components** of the voltages and currents.',
        detail: 'The transistor is essentially a **current-operated device**: its action depends on the input current, so its equivalent circuit (in the form of Fig. 18.8, the amplifier equivalent networks of the systems chapters) uses a current generator at the output. In converting a real amplifier stage to the equivalent circuit, the capacitors are omitted (their reactances assumed negligible), the bias resistor is seen to shunt the transistor input, and the load becomes the collector resistor in parallel with the external load.',
      },
      {
        term: 'The h-parameters',
        kind: 'definition',
        statement: 'To indicate that the circuit components and gain ratios apply specifically to the transistor, the general amplifier parameters are renamed **h-parameters**: $h_i$ is the input resistance, $h_o$ the output conductance (in siemens, not ohms), and $h_f$ the current gain, with a second subscript letter indicating the connection mode — $h_{ie}$ for common-emitter, $h_{ib}$ for common-base.',
        detail: 'The basic model of Fig. 20.35 has $h_i$ in series with the input terminals, a current generator $h_f I_i$ in the output, and $h_o$ across the output. Typical magnitudes for a small-signal BJT in common-emitter: $h_{ie}$ of order $1\\,\\text{k}\\Omega$, $h_{fe}$ between 50 and several hundred, $h_{oe}$ of a few tens of microsiemens. The mode subscripts matter because the same physical device presents very different parameters in common-base versus common-emitter connection.',
      },
      {
        term: 'Current gain of transistor and stage',
        kind: 'law',
        statement: 'With the load $R_p = R_C R_L/(R_C + R_L)$, the transistor’s current gain is $$G_i = \\frac{h_{fe}}{1 + h_{oe}R_p},$$ and the gain of the whole stage multiplies this by the current divider $R_C/(R_C + R_L)$.',
        detail: 'The output current generator $h_{fe}I_b$ drives $1/h_{oe}$ in parallel with $R_p$: $I_c = (1/h_{oe})/((1/h_{oe}) + R_p) \\times h_{fe}I_b$, which rearranges to relation [20.26]. Only the fraction $R_C/(R_C + R_L)$ of $I_c$ reaches the external load, giving the stage gain [20.27]. The distinction matters — Example 20.3 found 45 for the transistor but 20 for the stage.',
      },
      {
        term: 'Voltage gain and the 180° phase shift',
        kind: 'law',
        statement: 'The voltage gain for the transistor is $G_v = V_{ce}/V_{be} = -I_c R_p/(I_b h_{ie})$, hence $$G_v = \\frac{-h_{fe}R_p}{h_{ie}\\left(1 + h_{oe}R_p\\right)}.$$ The minus sign records the $180\\degree$ phase shift between input and output of the common-emitter stage.',
        detail: 'Because the voltage across the transistor’s collector–emitter terminals is the same as that across the load, the expression applies both to the transistor and to the amplifier stage. The inversion is visible on an oscilloscope as the output sine dipping whenever the input rises — the property that makes the common-emitter stage an inverting amplifier (and the reason feedback loops must count their inversions, as Chapter 15 will exploit).',
      },
      {
        term: 'The full hybrid two-port',
        kind: 'law',
        statement: 'A common-emitter transistor has four signal quantities ($v_{be}$, $i_b$, $v_{ce}$, $i_c$) related by $$v_{be} = h_{ie}I_b + h_{re}V_{ce}, \\qquad i_c = h_{fe}I_b + h_{oe}V_{ce}.$$ Here $h_{ie}$ is the **short-circuit input resistance**, $h_{re}$ the **open-circuit reverse voltage ratio**, $h_{fe}$ the **short-circuit forward current ratio** and $h_{oe}$ the **open-circuit output conductance**.',
        detail: 'Six variables ($i_b$, $i_c$, $i_e$, $v_{be}$, $v_{ce}$, $v_{cb}$) reduce to four independent ones because $i_b + i_c = i_e$ and $v_{cb} + v_{be} = v_{ce}$. The voltage generator $h_{re}V_{ce}$ represents a feedback effect — the output signal voltage controlling, to a very limited extent, the input signal current. But $h_{re}$ is always very small (less than $1\\times 10^{-3}$), so the feedback generator can be omitted without introducing any important error, and the analyses of the simpler model stand.',
      },
      {
        term: 'h_fe and h_fb: β and α in disguise',
        kind: 'notation',
        statement: 'The short-circuit forward current ratio of the common-emitter model is exactly the current amplification factor of Section 13.2: $$h_{fe} = \\beta.$$ For the common-base model, $h_{fb}$ has a value just under unity and is negative — it is $-\\alpha$ in Hughes’s sign convention.',
        detail: 'The common-base gain expressions are identical in form to the common-emitter ones with the appropriate parameters substituted: $G_i = h_{fb}/(1 + h_{ob}R_p)$ and $G_v = -h_{fb}R_p/(h_{ib}(1 + h_{ob}R_p))$. Because $h_{fb} \\approx -1$, there is a $180\\degree$ phase shift between $I_e$ and $I_c$ but **no** phase shift between $V_{eb}$ and $V_{cb}$ — the common-base stage does not invert.',
      },
      {
        term: 'The input-resistance limitation',
        kind: 'insight',
        statement: 'For most bipolar transistors the input resistance $h_{ie}$ tends to be about $1\\,\\text{k}\\Omega$ — a rather small value for electronic circuits. There is always a significant input current, which both limits the achievable gain and increases the size and rating of the input-circuit components.',
        detail: 'Hughes’s illustration: an amplifier of gain 40 and input resistance $1\\,\\text{k}\\Omega$ driven by a $100\\,\\text{mV}$ source of $50\\,\\text{k}\\Omega$ internal resistance delivers only $V_i \\approx 2\\,\\text{mV}$ to the input, so $V_o = 40 \\times 2 = 80\\,\\text{mV}$ — **less than the source e.m.f.**. Had the input resistance been $1\\,\\text{M}\\Omega$, then $V_i = 95.2\\,\\text{mV}$ and $V_o = 3.8\\,\\text{V}$ — an improvement of more than 47 times, with much-reduced input current. In order to obtain that increase in input resistance we have to look for another type of transistor — the field effect transistor of Chapter 14.',
      },
      {
        term: 'Cascaded amplifiers',
        kind: 'definition',
        statement: '**Cascaded amplifiers** are connected so that the output of one stage is the input to a second, thus providing further gain; the coupling capacitor “conducts” the a.c. signal but “blocks” the d.c. component of the supply.',
        detail: 'The advantage of cascading is the increase of gain, offset by increased distortion due to the non-linearity of each stage. The analysis reuses the single-stage equivalent circuit twice, with current-divider factors threading the stages together (Example 20.9). Component counts quickly reach a hundred or more — the pressure that produced the integrated circuit (Section 14.4).',
      },
    ],
    examples: [
      {
        title: 'Example 20.4 — h-parameter gains of a stage',
        problem: 'A transistor amplifier stage has $h_{ie} = 800\\,\\Omega$, $h_{fe} = 50$ and $h_{oe} = 20\\,\\mu\\text{S}$, with bias components and coupling capacitors of negligible effect. The input signal is an e.m.f. of $60\\,\\text{mV}$ from a source of internal resistance $2.2\\,\\text{k}\\Omega$, and the total load on the stage output is $4\\,\\text{k}\\Omega$. Determine the current, voltage and power gains.',
        steps: [
          { label: 'Step 1: Draw the equivalent circuit', text: 'The source ($60\\,\\text{mV}$, $2.2\\,\\text{k}\\Omega$) drives $h_{ie} = 800\\,\\Omega$; the output is the current generator $h_{fe}I_b = 50I_b$ feeding $1/h_{oe}$ in parallel with the $4\\,\\text{k}\\Omega$ load.' },
          { label: 'Step 2: Base current', text: 'The input loop is a simple divider: $I_b = 60\\times 10^{-3}/(2200 + 800) = 20\\times 10^{-6}\\,\\text{A}$.' },
          { label: 'Step 3: Collector current', text: 'The output resistance of the model is $1/h_{oe} = 1/(20\\times 10^{-6}) \\approx 50\\,\\text{k}\\Omega$. The generated current $50 \\times 20\\,\\mu\\text{A} = 1000\\,\\mu\\text{A}$ splits between $50\\,\\text{k}\\Omega$ and $4\\,\\text{k}\\Omega$: $I_c = 50/(50+4) \\times 1000\\,\\mu\\text{A} = 926\\,\\mu\\text{A}$.' },
          { label: 'Step 4: Current gain', text: '$G_i = I_c/I_b = 926\\times 10^{-6}/20\\times 10^{-6} = 46.3$ — slightly less than $h_{fe} = 50$ because the finite $h_{oe}$ robs part of the generator current.' },
          { label: 'Step 5: Voltage gain', text: '$G_v = -I_c R_L/(I_b h_{ie}) = -(926\\times 10^{-6} \\times 4\\times 10^{3})/(20\\times 10^{-6} \\times 800) = -231.5$. The gain is negative — the stage inverts.' },
          { label: 'Step 6: Power gain', text: '$G_p = G_i \\times |G_v| = 46.3 \\times 231.5 = 10\\,720$ — five decades of power gain from one transistor.' },
        ],
        result: '$I_b = 20\\,\\mu\\text{A}$, $I_c = 926\\,\\mu\\text{A}$; $G_i = 46.3$, $G_v = -231.5$, $G_p = 10\\,720$.',
      },
      {
        title: 'Example 20.9 — overall gain of a two-stage cascade',
        problem: 'A two-stage amplifier has two identical transistors, each with input resistance $1\\,\\text{k}\\Omega$, short-circuit current gain 60 and output conductance $20\\,\\mu\\text{S}$. The source feeds the first stage through $100\\,\\text{k}\\Omega$; the first collector circuit presents $10\\,\\text{k}\\Omega$, $100\\,\\text{k}\\Omega$ (bias) and $25\\,\\text{k}\\Omega$ in parallel to the second stage; the second collector circuit presents $5\\,\\text{k}\\Omega$ and $100\\,\\text{k}\\Omega$; the final load is $2\\,\\text{k}\\Omega$. Determine the overall current and power gains.',
        steps: [
          { label: 'Step 1: Internal output resistance of each transistor', text: 'Each transistor’s model has $1/h_{oe} = 1/(20\\times 10^{-6}) \\approx 50\\,\\text{k}\\Omega$ in parallel with its collector components.' },
          { label: 'Step 2: Combine the first-stage output resistances', text: 'The $50\\,\\text{k}\\Omega$, $10\\,\\text{k}\\Omega$, $100\\,\\text{k}\\Omega$ and $25\\,\\text{k}\\Omega$ combine as $1/R^{\\prime} = 1/50 + 1/10 + 1/100 + 1/25 = 17/100$, so $R^{\\prime} = 100/17 = 5.88\\,\\text{k}\\Omega$ — the effective interstage load on the first transistor.' },
          { label: 'Step 3: Combine the second-stage output resistances', text: 'Similarly $1/R^{\\prime\\prime} = 1/50 + 1/5 = 11/50$, so $R^{\\prime\\prime} = 50/11 = 4.55\\,\\text{k}\\Omega$ — the effective load on the second transistor in parallel with the $2\\,\\text{k}\\Omega$ output load.' },
          { label: 'Step 4: Thread the current dividers', text: 'The first transistor receives $i_1 = (100/101)\\,i_i$ of the input current; its generator produces $i_2 = 60\\,i_1$. The fraction reaching the second transistor is $5.88/(5.88 + 1) = 5.88/6.88$, so $i_3 = (5.88/6.88) \\times 60 \\times (100/101)\\,i_i$. The second generator gives $i_4 = 60\\,i_3$, and the fraction delivered to the load is $4.55/(4.55 + 2) = 4.55/6.55$.' },
          { label: 'Step 5: Overall current gain', text: 'Multiplying: $A_i = (4.55/6.55) \\times 60 \\times (5.88/6.88) \\times 60 \\times (100/101) = 2120$.' },
          { label: 'Step 6: Power gain', text: 'The amplifier input resistance is $R_i = (100 \\times 1)/(100 + 1) \\approx 990\\,\\Omega$ while the output load is $2\\,\\text{k}\\Omega$, so $A_p = A_i^2 \\times R_o/R_i = 2120^2 \\times 2000/990 = 9\\,080\\,000$.' },
        ],
        result: '$A_i = 2120$ and $A_p = 9\\,080\\,000$ — cascading squares the current gain and nearly a million-fold power gain through two transistors.',
      },
    ],
    keyTakeaways: [
      'Over the linear part of its characteristics a transistor is replaced by an equivalent circuit carrying only r.m.s. signal quantities — the transistor is a current-operated device.',
      'h-parameters: $h_{ie}$ input resistance ($\\sim 1\\,\\text{k}\\Omega$), $h_{fe}$ current gain ($= \\beta$), $h_{oe}$ output conductance, $h_{re}$ reverse voltage ratio ($< 10^{-3}$, usually omitted).',
      'Loaded stage gains: $G_i = h_{fe}/(1 + h_{oe}R_p)$ (transistor) times $R_C/(R_C + R_L)$ (stage), and $G_v = -h_{fe}R_p/(h_{ie}(1 + h_{oe}R_p))$ with $R_p = R_C R_L/(R_C + R_L)$.',
      'The common-emitter stage inverts: the minus sign in $G_v$ is a real $180\\degree$ phase shift; the common-base stage ($h_{fb} \\approx -\\alpha$) does not invert voltages.',
      'Example 20.4 ($h_{ie} = 800\\,\\Omega$, $h_{fe} = 50$, $h_{oe} = 20\\,\\mu\\text{S}$, $4\\,\\text{k}\\Omega$ load): $G_i = 46.3$, $G_v = -231.5$, $G_p = 10\\,720$.',
      'Cascade gains multiply through current-divider chains — Example 20.9: $A_i = 2120$, $A_p = 9\\,080\\,000$ for two identical stages.',
      'The BJT’s $\\sim 1\\,\\text{k}\\Omega$ input resistance loses signal against realistic sources (80 mV out of a 100 mV source with $50\\,\\text{k}\\Omega$ source resistance) — the motivation for the FET.',
    ],
    quiz: [
      {
        q: 'In the h-parameter naming convention, the subscript letters indicate:',
        options: ['The transistor material (silicon or germanium)', 'The connection mode — e.g. $h_{ie}$ is common-emitter input resistance, $h_{ib}$ common-base', 'The units of the parameter', 'The manufacturer of the device'],
        answer: 1,
        explanation: 'The first subscript gives the parameter (input, reverse, forward, output) and the second the connection mode: e = common-emitter, b = common-base. The same transistor presents quite different h-parameters in the two connections.',
      },
      {
        q: 'A transistor has $h_{fe} = 50$ and $h_{oe} = 20\\,\\mu\\text{S}$, driving an effective load $R_p = 4\\,\\text{k}\\Omega$. The transistor current gain is closest to:',
        options: ['Exactly 50 — $h_{oe}$ affects only voltage gain', `$50/(1 + 0.08) \\approx 46.3$`, `$50 \\times 0.08 = 4$`, `$50/(1 - 0.08) \\approx 54.3$`],
        answer: 1,
        explanation: '$G_i = h_{fe}/(1 + h_{oe}R_p) = 50/(1 + 20\\times 10^{-6} \\times 4000) = 50/1.08 = 46.3$ — the finite output conductance diverts part of the generated current through the model’s own $1/h_{oe} = 50\\,\\text{k}\\Omega$.',
      },
      {
        q: 'Why can the feedback generator $h_{re}V_{ce}$ usually be omitted from the hybrid equivalent circuit?',
        options: ['Because $V_{ce}$ is always zero in small-signal operation', 'Because $h_{re}$ is always very small — less than $1 \\times 10^{-3}$ — so the feedback voltage is negligible', 'Because it only matters in common-base connection', 'Because it is cancelled exactly by $h_{oe}$'],
        answer: 1,
        explanation: 'Although a transistor’s voltage gain is large (which might suggest appreciable feedback), $h_{re}$ itself is always below $10^{-3}$, so the induced input voltage is negligible — and the omission lies well within component tolerances anyway.',
      },
      {
        q: 'A two-stage cascade of identical stages each with current gain 60 and interstage divider factors of about $5.88/6.88$ and $4.55/6.55$ has an overall current gain nearest to:',
        options: ['60', '120', '2120', '3600'],
        answer: 2,
        explanation: 'Example 20.9 threads the dividers: $A_i = (4.55/6.55) \\times 60 \\times (5.88/6.88) \\times 60 \\times (100/101) = 2120$. Two stages give roughly the product of their gains minus divider losses.',
      },
      {
        q: 'An amplifier of gain 40 and input resistance $1\\,\\text{k}\\Omega$ is driven by a $100\\,\\text{mV}$ source with $50\\,\\text{k}\\Omega$ internal resistance. The output voltage is approximately:',
        options: [`$4\\,\\text{V}$`, '$80\\,\\text{mV}$ — less than the source e.m.f.', `$100\\,\\text{mV}$`, `$2\\,\\text{mV}$`],
        answer: 1,
        explanation: 'The input divider leaves only $V_i = (1\\times 10^{3}/51\\times 10^{3}) \\times 100\\,\\text{mV} \\approx 2\\,\\text{mV}$ across the amplifier, so $V_o = 40 \\times 2 = 80\\,\\text{mV}$. With a $1\\,\\text{M}\\Omega$ input the same source would deliver $95.2\\,\\text{mV}$ and the output would be $3.8\\,\\text{V}$ — more than 47 times better.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.5
  {
    sectionId: 'elec-ch13-s5',
    readingTime: 9,
    intro: 'A transistor left with fixed bias will not stay where it was put: leakage current grows with temperature and drags the quiescent point along with it. Hughes answers with stabilized bias networks — potential divider, emitter resistor, and at the system level the Zener and series transistor regulators — and then embraces the drift by driving the transistor deliberately to the two ends of its load line, where it becomes a switch. The Ebers–Moll view closes the chapter by trading the current picture for a voltage one: the collector current is commanded by V_BE, and transconductance is simply IC over the thermal voltage.',
    objectives: [
      'Explain why leakage current and $V_{BE}$ drift make fixed bias unstable and how potential-divider bias with an emitter resistor stabilizes the operating point',
      'Analyze stabilized supplies using the stability factor S and the internal resistance of the supply',
      'Describe cut-off and saturation as the two states of the transistor switch and assess its quality',
      'Quantify BJT transconductance with the Ebers–Moll relation $g_m = I_C/V_T$',
    ],
    concepts: [
      {
        term: 'Thermal drift of the operating point',
        kind: 'insight',
        statement: 'The leakage current $I_{CBO}$ is temperature dependent: an increase in temperature causes it to rise, which increases the collector current (amplified by $1/(1-\\alpha)$) and **changes the bias conditions** of the stage.',
        detail: 'The collector current is $I_C = \\beta I_B + I_{CBO}/(1-\\alpha)$, so a doubling of leakage moves the quiescent point along the load line even with the signal at zero. The Art of Electronics adds the second, subtler drift: at constant collector current the base–emitter voltage falls by roughly $2\\,\\text{mV}$ per $\\degree\\text{C}$ of junction warming — a fixed $V_{BE}$ bias therefore also misbehaves with temperature. Between them, the two effects destroy an unstabilized stage’s operating point as it warms up.',
      },
      {
        term: 'Potential-divider bias stabilization',
        kind: 'method',
        statement: 'The change in bias conditions is stabilized by using a **potential divider**, which holds the base voltage almost constant, together with a **resistor in the emitter connection**.',
        detail: 'The divider fixes $V_B$; if the collector current then rises with temperature, the emitter current raises the voltage across the emitter resistor, which reduces the forward bias $V_{BE} = V_B - V_E$ and so cuts the base current back down — negative feedback on the quiescent point. This is the same self-correcting geometry Hughes uses for the base of the series regulator transistor below, and the same trick the MOSFET source resistor performs in Chapter 14.',
      },
      {
        term: 'The stability factor',
        kind: 'law',
        statement: 'The performance of a stabilization circuit is measured by the **stability factor** — the ratio of the change in stabilized voltage across the load to the change in unstabilized supply voltage: $$S = \\frac{\\text{change in stabilized voltage}}{\\text{change in unstabilized voltage}}.$$ For satisfactory stabilization, S should be small — effectively, the smaller the better.',
        detail: 'The stabilization circuit sits between the rectifier (with its smoothing circuits, Chapter 12) and the load, and must hold its output constant when the supply voltage varies, when the load current changes, or both. Example 20.6: an unstabilized supply that swings between 110 V and 80 V with constant load current, stabilized by a circuit of stability factor 0.06, sees its output change by only $0.06 \\times 30 = 1.8\\,\\text{V}$.',
      },
      {
        term: 'Zener shunt stabilizer',
        kind: 'definition',
        statement: 'One of the simplest stabilization circuits consists of a **resistor in series with the load and a Zener diode in parallel with the load**; the Zener holds the voltage nearly constant provided the load current and the unstabilized voltage each remain between set limits.',
        detail: 'This is the voltage-regulator diode of Chapter 12 doing its duty: its reverse breakdown voltage is nearly independent of the current through it, so the load sees that voltage whatever the raw supply does within limits. Such a simple circuit cannot handle wide variations of either variable — the set limits may not be acceptably far apart — which is why the series transistor regulator follows.',
      },
      {
        term: 'Internal resistance of a stabilized supply',
        kind: 'law',
        statement: 'The effectiveness of a stabilization circuit when the **load current** changes (with the unstabilized voltage held constant) is indicated by its effective internal resistance: $$R_o = \\frac{\\Delta V_s}{\\Delta I_L},$$ the change in output voltage divided by the change in output current over the range between the set limits.',
        detail: 'Example: a stabilization circuit whose load current ranges from 0 to 40 mA while the voltage applied to the load falls by 0.25 V has $R_o = 0.25/0.04 = 6.25\\,\\Omega$. As with the stability factor, the internal resistance should be as small as possible — it is the supply’s Thévenin impedance (Chapter 4) seen from the load.',
      },
      {
        term: 'Series stabilizer with comparator',
        kind: 'insight',
        statement: 'A better stabilizer places a **transistor in series with the load**, its current controlled by the base voltage; a **comparator network** compares a potentiometer fraction $V_2$ of the output against a Zener reference $V_Z$, amplifies the difference, and applies it to the base until $V_2 = V_Z$.',
        detail: 'If the comparison shows the voltages equal there is no amplifier output and the collector current stays put; any difference is amplified and changes the bias condition of the transistor, causing its emitter current to increase or decrease, changing the output voltage until $V_2$ equals $V_Z$ again. This arrangement can produce very low stability factors as well as low internal resistances — it is the discrete-transistor ancestor of the three-terminal regulator and, with the error amplifier opened out, of the feedback loops of Chapter 15.',
      },
      {
        term: 'The saturated transistor as a switch',
        kind: 'insight',
        statement: 'The two extreme conditions of the load line are: both junctions reverse biased — the **cut-off** condition (point A); and both junctions forward biased — the **saturation** condition (point B). In these extremes the transistor operates like a switch in which either the supply voltage appears at the output or it does not.',
        detail: 'The switch is not perfect: not all of the supply voltage is available to the load when switched on, and equally the load is not isolated in the OFF condition. For all its imperfections the transistor switch is useful because it operates effectively in the transmission of digital signals and has a quick switching time, responding to very high bit rates. The bipolar’s imperfections — significant input current when on, and a collector–emitter **offset voltage** — are precisely what the FET switch of Chapter 14 removes.',
      },
      {
        term: 'The Ebers–Moll view: transconductance',
        kind: 'law',
        statement: 'The Art of Electronics models the transistor not as a current amplifier but as a **transconductance device**: the collector current is set by the base–emitter voltage, $$I_C = I_S\\left(e^{V_{BE}/V_T} - 1\\right), \\qquad V_T = \\frac{kT}{q} \\approx 25\\,\\text{mV},$$ and differentiating gives the transconductance $$g_m = \\frac{I_C}{V_T}.$$',
        detail: 'At room temperature $V_T = kT/q \\approx 25\\,\\text{mV}$, so a transistor running at $I_C = 1\\,\\text{mA}$ has $g_m = 1\\,\\text{mA}/25\\,\\text{mV} = 40\\,\\text{mS}$, and the intrinsic emitter resistance seen from the emitter terminal is $r_e = 1/g_m = V_T/I_E = 25\\,\\Omega$. Doubling the collector current doubles the transconductance — gain in the Ebers–Moll picture is bought with current, not with β. The model also predicts the $2\\,\\text{mV}/\\degree\\text{C}$ drift of $V_{BE}$ and underlies the differential-pair and current-mirror circuits inside every op-amp of Chapter 15.',
      },
    ],
    examples: [
      {
        title: 'Example 20.6 — a stabilized supply’s range',
        problem: 'Without stabilization a supply voltage can change from 110 V to 80 V even though the load current remains constant. With stabilization by a circuit of stability factor 0.06, determine the change in the stabilized voltage.',
        steps: [
          { label: 'Step 1: State the definition', text: 'The stability factor is $S = \\Delta V_s/\\Delta V_u$ — the change in stabilized voltage divided by the change in unstabilized voltage, assuming constant load current.' },
          { label: 'Step 2: Compute the unstabilized swing', text: 'The raw supply moves by $110 - 80 = 30\\,\\text{V}$ while the load takes the same current throughout.' },
          { label: 'Step 3: Apply the factor', text: '$\\Delta V_s = S \\times \\Delta V_u = 0.06 \\times 30 = 1.8\\,\\text{V}$ — a decrease from the maximum value.' },
          { label: 'Step 4: Interpret', text: 'The stabilization circuit has compressed a 30 V supply sag into a 1.8 V output change — a 50:1 improvement, achieved without any moving parts.' },
        ],
        result: 'The stabilized voltage changes by only $1.8\\,\\text{V}$ despite the $30\\,\\text{V}$ swing in the unstabilized input.',
      },
      {
        title: 'Example 20.7 — worst-case load voltage',
        problem: 'A stabilization circuit has a stability factor of 0.04 and an internal resistance of $5\\,\\Omega$. The unstabilized voltage can vary between 75 and 100 V, and the load current from 40 to 80 mA. Determine the maximum and minimum stabilized load voltages.',
        steps: [
          { label: 'Step 1: Identify the extreme conditions', text: 'The worst cases are low unstabilized voltage with high load current, and high unstabilized voltage with low load current.' },
          { label: 'Step 2: Low input, high current', text: 'The load voltage is the lower limit of the unstabilized voltage minus the internal-resistance drop: $75 - (80\\times 10^{-3} \\times 5) = 75 - 0.4 = 74.6\\,\\text{V}$.' },
          { label: 'Step 3: High input — the allowed rise', text: 'The unstabilized voltage rises to 100 V, but the circuit allows only $S \\times (100 - 75) = 0.04 \\times 25 = 1.0\\,\\text{V}$ of increase in the stabilized output.' },
          { label: 'Step 4: High input, low current', text: 'The internal-resistance drop with $40\\,\\text{mA}$ of load is $40\\times 10^{-3} \\times 5 = 0.2\\,\\text{V}$, so the load voltage is $75 + 1.0 - 0.2 = 75.8\\,\\text{V}$.' },
          { label: 'Step 5: State the range', text: 'The stabilized voltage therefore varies only between 74.6 V and 75.8 V — a $1.2\\,\\text{V}$ band around 75 V while the raw supply moves through 25 V and the load current through a factor of two.' },
        ],
        result: 'The load voltage stays within $74.6\\,\\text{V}$ to $75.8\\,\\text{V}$ — regulation held by S and $R_o$ acting together.',
      },
      {
        title: 'Transconductance from Ebers–Moll',
        problem: 'Use the Ebers–Moll view to find the transconductance and intrinsic emitter resistance of a transistor biased at $I_C = 1\\,\\text{mA}$ at room temperature, and compare with a FET of the same current.',
        steps: [
          { label: 'Step 1: Thermal voltage', text: 'At room temperature $V_T = kT/q \\approx 25\\,\\text{mV}$ — the voltage across which the exponential collector-current law operates.' },
          { label: 'Step 2: Transconductance', text: '$g_m = I_C/V_T = 1\\times 10^{-3}/25\\times 10^{-3} = 0.04\\,\\text{S} = 40\\,\\text{mS}$.' },
          { label: 'Step 3: Intrinsic emitter resistance', text: 'Looking back into the emitter: $r_e = 1/g_m = V_T/I_E = 25\\,\\Omega$ at $1\\,\\text{mA}$ — the resistance the input signal effectively drives.' },
          { label: 'Step 4: Compare with the FET', text: 'A junction FET of the same $1\\,\\text{mA}$ drain current offers $g_m$ of only 1–10 mS (Chapter 14), so the BJT is the transconductance champion: its gain per milliamp of supply current is several times higher, while the FET repays with its insulated gate.' },
        ],
        result: '$g_m = 40\\,\\text{mS}$ and $r_e = 25\\,\\Omega$ at $1\\,\\text{mA}$ — both simply and inversely proportional to the collector current.',
      },
    ],
    keyTakeaways: [
      'Leakage $I_{CBO}$ rises with temperature and is amplified by $1/(1-\\alpha)$ into the collector current; $V_{BE}$ also drifts about $2\\,\\text{mV}/\\degree\\text{C}$ — fixed bias wanders.',
      'Potential-divider bias holds the base voltage nearly constant, and an emitter resistor feeds the drift back against itself — the standard stabilized bias.',
      'Stability factor $S = \\Delta V_{\\text{stabilized}}/\\Delta V_{\\text{unstabilized}}$ (smaller is better) and internal resistance $R_o = \\Delta V_s/\\Delta I_L$ (e.g. $0.25\\,\\text{V}/40\\,\\text{mA} = 6.25\\,\\Omega$) quantify a regulator.',
      'A Zener shunt stabilizer needs both supply and load within set limits; the series transistor with comparator and Zener reference achieves very low S and $R_o$.',
      'Both junctions reverse biased = cut-off; both forward biased = saturation: the transistor as an imperfect but very fast switch for digital signals and high bit rates.',
      'Ebers–Moll: $I_C = I_S(e^{V_{BE}/V_T} - 1)$ with $V_T \\approx 25\\,\\text{mV}$, so $g_m = I_C/V_T$ — $40\\,\\text{mS}$ at $1\\,\\text{mA}$, with $r_e = 25\\,\\Omega$.',
    ],
    quiz: [
      {
        q: 'Why does an increase in temperature shift the bias point of a common-emitter stage?',
        options: ['Because β falls with temperature, reducing the collector current', 'Because the leakage current rises with temperature, increasing the collector current through the amplified term $I_{CBO}/(1-\\alpha)$', 'Because the collector resistor warms and changes value', 'Because $V_T$ doubles, halving the transconductance'],
        answer: 1,
        explanation: 'The leakage current crossing the reverse-biased collector–base junction is temperature dependent; its effect on the collector current is multiplied by $1/(1-\\alpha)$ — fifty-fold for α = 0.98. The rising current drags the quiescent point along the load line.',
      },
      {
        q: 'A stabilization circuit holds the base voltage of the series transistor nearly constant by comparing it with a Zener reference. The load voltage changes when the unstabilized input swings from 75 V to 100 V by:',
        options: ['$25\\,\\text{V}$ — the full swing', `$S \\times 25\\,\\text{V}$ — e.g. $1.0\\,\\text{V}$ for $S = 0.04$`, 'Nothing at all — the output is perfectly constant', `$0.04\\,\\text{V}$`],
        answer: 1,
        explanation: 'The stability factor is the ratio of the change in stabilized output to the change in unstabilized input: $\\Delta V_s = S\\,\\Delta V_u = 0.04 \\times 25 = 1.0\\,\\text{V}$, as in Example 20.7. Regulation is good but never perfect.',
      },
      {
        q: 'A stabilized supply delivers 0 to 40 mA over its allowed load range while its output falls 0.25 V. Its internal resistance is:',
        options: [`$6.25\\,\\Omega$`, `$160\\,\\Omega$`, `$0.01\\,\\Omega$`, `$40\\,\\Omega$`],
        answer: 0,
        explanation: '$R_o = \\Delta V_s/\\Delta I_L = 0.25/0.04 = 6.25\\,\\Omega$. Like the stability factor, the internal resistance should be as small as possible — it is the output impedance of the Thévenin source the load actually sees.',
      },
      {
        q: 'In the transistor switch, the cut-off condition corresponds to:',
        options: ['Both junctions forward biased', 'The emitter junction forward biased and the collector junction reverse biased', 'Both junctions reverse biased — point A on the load line', 'The operating point at the middle of the load line'],
        answer: 2,
        explanation: 'Cut-off is both junctions reverse biased (point A — no output current); saturation is both forward biased (point B — output voltage nearly zero). Between them lies the amplifier region, whose middle the quiescent point of Section 13.3 occupies.',
      },
      {
        q: 'A transistor operates at $I_C = 1\\,\\text{mA}$ at room temperature. According to the Ebers–Moll view its transconductance is:',
        options: [`$25\\,\\text{mS}$`, `$40\\,\\text{mS}$`, `$1\\,\\text{mS}$`, 'It equals β and depends only on construction'],
        answer: 1,
        explanation: '$g_m = I_C/V_T = 1\\,\\text{mA}/25\\,\\text{mV} = 40\\,\\text{mS}$, independent of β. The corresponding intrinsic emitter resistance is $r_e = 1/g_m = 25\\,\\Omega$.',
      },
    ],
  },
]

// ============================================================================
// Formula sheet — Chapter 13 (BJTs). `section` is the platform section number.
// ============================================================================

export const elecCh13Formulas: FormulaEntry[] = [
  {
    chapterId: 'elec-ch13',
    section: '13.1',
    name: 'Terminal Currents (Kirchhoff)',
    formula: 'I_E = I_B + I_C',
    note: 'the node equation every BJT current calculation starts from',
    latex: 'I_E = I_B + I_C',
  },
  {
    chapterId: 'elec-ch13',
    section: '13.2',
    name: 'Common-Base Current Gain (α)',
    formula: 'α = ΔI_C/ΔI_E  (at constant V_CB)',
    note: 'slope of the I_C–I_E transfer graph; just under unity',
    latex: '\\alpha = \\frac{\\Delta I_C}{\\Delta I_E} \\quad (V_{CB}\\ \\text{fixed})',
  },
  {
    chapterId: 'elec-ch13',
    section: '13.2',
    name: 'Common-Emitter Current Gain (β)',
    formula: 'β = ΔI_C/ΔI_B  (at constant V_CE)',
    note: 'the datasheet gain figure; h_fe is the same quantity',
    latex: '\\beta = \\frac{\\Delta I_C}{\\Delta I_B} \\quad (V_{CE}\\ \\text{fixed})',
  },
  {
    chapterId: 'elec-ch13',
    section: '13.2',
    name: 'The α–β Relation',
    formula: 'α = β/(1 + β);  β = α/(1 − α)',
    note: 'α = 0.98 → β = 49; α = 0.99 → β = 99 — measure β, derive α',
    latex: '\\alpha = \\frac{\\beta}{1 + \\beta}; \\qquad \\beta = \\frac{\\alpha}{1 - \\alpha}',
  },
  {
    chapterId: 'elec-ch13',
    section: '13.2',
    name: 'Collector Current with Leakage',
    formula: 'I_C = β·I_B + I_CBO/(1 − α)',
    note: 'leakage enters amplified by 1/(1−α); rises with temperature',
    latex: 'I_C = \\beta I_B + \\frac{I_{CBO}}{1 - \\alpha}',
  },
  {
    chapterId: 'elec-ch13',
    section: '13.3',
    name: 'Load Line Equation',
    formula: 'i_c = −(1/R_C)·v_ce + V_S/R_C',
    note: 'intercepts at (V_S, 0) and (0, V_S/R_C); inverse slope is the load',
    latex: 'i_c = -\\frac{1}{R_C}v_{ce} + \\frac{V_S}{R_C}',
  },
  {
    chapterId: 'elec-ch13',
    section: '13.3',
    name: 'Bias Resistor (Fixed Bias)',
    formula: 'R_B = (V_S − V_BE)/I_B ≈ V_S/I_B',
    note: 'Hughes [20.19]–[20.20]; the quiescent base current sets the point',
    latex: 'R_B = \\frac{V_S - V_{BE}}{I_B} \\approx \\frac{V_S}{I_B}',
  },
  {
    chapterId: 'elec-ch13',
    section: '13.4',
    name: 'h-Parameter Voltage Gain (Common-Emitter)',
    formula: 'G_v = −h_fe·R_p / (h_ie·(1 + h_oe·R_p))',
    note: 'R_p = R_C·R_L/(R_C + R_L); minus sign = 180° phase shift',
    latex: 'G_v = \\frac{-h_{fe}R_p}{h_{ie}\\left(1 + h_{oe}R_p\\right)}',
  },
  {
    chapterId: 'elec-ch13',
    section: '13.5',
    name: 'Transconductance (Ebers–Moll)',
    formula: 'g_m = I_C/V_T,  V_T = kT/q ≈ 25 mV',
    note: '40 mS at 1 mA; r_e = 1/g_m = 25 Ω at 1 mA',
    latex: 'g_m = \\frac{I_C}{V_T}, \\quad V_T = \\frac{kT}{q} \\approx 25\\ \\text{mV}',
  },
]

import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Electronics Master Library — Chapter 3: Network Theorems & Analysis
// Hughes, "Electrical & Electronic Technology" 12e — Ch 4 (pp 82–116)
// Nilsson & Riedel, "Electric Circuits" 12e — Ch 4 (pp 118–175)
// Master study content. All worked-example numbers are the books’ own.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh3Content: SectionContent[] = [
  // ------------------------------------------------------------------ 3.1
  {
    sectionId: 'elec-ch3-s1',
    readingTime: 10,
    intro: 'Kirchhoff’s two laws are enough to solve any circuit — the problem is that a brute-force application produces too many simultaneous equations. This section builds the two systematic attacks that replace guesswork: the node-voltage method, which writes Kirchhoff’s current law at the essential nodes, and the mesh-current method, which writes Kirchhoff’s voltage law around the meshes. Hughes arrives at them through a ladder of Kirchhoff applications; Nilsson turns them into five-step procedures with precisely defined special cases for sources.',
    objectives: [
      'Define planar circuits, essential nodes, essential branches, loops and meshes, and state which methods apply to nonplanar circuits',
      'Count the independent equations a circuit needs using essential nodes and essential branches',
      'Apply the node-voltage method, including constraint equations for dependent sources, supernodes and known node voltages',
      'Apply the mesh-current method, including the supermesh and the known-mesh-current special case',
      'Choose between the two methods for a given circuit and justify the choice with equation counts',
    ],
    concepts: [
      {
        term: 'Planar circuits and the circuit vocabulary',
        kind: 'definition',
        statement: 'A **planar circuit** can be drawn on a plane with no crossing branches; a circuit that merely *is drawn* with crossings still counts as planar if it can be redrawn without them. The node-voltage method applies to both planar and nonplanar circuits, but the **mesh-current method is limited to planar circuits**.',
        detail: 'Nilsson’s vocabulary: a **node** is a point where two or more circuit elements join; an **essential node** joins three or more; a **path** traces adjoining elements with no element repeated; a **branch** connects two nodes; an **essential branch** connects two essential nodes without passing through a third; a **loop** starts and ends at the same node; a **mesh** is a loop that encloses no other loop.',
      },
      {
        term: 'How many simultaneous equations?',
        kind: 'method',
        statement: 'A circuit with $b$ unknown branch currents needs $b$ independent equations. Write $n_e - 1$ of them by KCL at essential nodes and the remaining $b_e - (n_e - 1)$ by KVL around loops or meshes, where $n_e$ and $b_e$ count essential nodes and essential branches.',
        detail: 'In Nilsson’s Fig. 4.3 circuit there are nine branches with unknown currents but only four essential nodes and six essential branches where the current is unknown — so the systematic method needs only 3 KCL + 3 KVL = 6 equations instead of nine.',
      },
      {
        term: 'Hughes’s graduated use of Kirchhoff’s laws',
        kind: 'method',
        statement: 'Hughes applies Kirchhoff’s laws in three escalating forms: **direct application** when component voltages or currents are given, **network reduction** when the supply data are given, and **simultaneous loop equations** only when resistors are neither in series nor in parallel.',
        detail: 'His Example 4.6 (a 40 V source driving 5 A into a bridge of 3 Ω, 28 Ω, 8 Ω, 14 Ω and 4 Ω resistors) needs the full treatment: with $I = 5$ A given, the loop equations $40 = 17I_1 - 14I_2$ and $140 = 31I_1 + 8I_2$ give $I_1 = 4$ A and $I_2 = 2$ A, so the 28 Ω resistor carries $5 - 4 = 1$ A, the 14 Ω carries $4 - 2 = 2$ A, and the 4 Ω carries $5 - 4 + 2 = 3$ A.',
      },
      {
        term: 'The node-voltage method',
        kind: 'method',
        statement: 'Choose a **reference node**, label the remaining essential nodes with voltages $v_1, v_2, \\ldots$ (each a voltage rise from the reference), write **KCL at every nonreference essential node** with branch currents expressed as $\\left(v_k - v_j\\right)/R$, and solve. A node voltage is the voltage rise from the reference node to a nonreference essential node.',
        detail: 'Nilsson’s introductory circuit (a 10 V source, 1 Ω and 5 Ω at node 1, a 2 Ω link, 10 Ω and a 2 A source at node 2) gives $\\left(v_1 - 10\\right)/1 + v_1/5 + \\left(v_1 - v_2\\right)/2 = 0$ and $\\left(v_2 - v_1\\right)/2 + v_2/10 - 2 = 0$, from which $v_1 = 100/11 = 9.09$ V and $v_2 = 120/11 = 10.91$ V.',
      },
      {
        term: 'Constraint equations for dependent sources',
        kind: 'method',
        statement: 'If the circuit contains dependent sources, the KCL equations must be **supplemented by one constraint equation per dependent source**, expressing the controlling voltage or current in terms of the node voltages.',
        detail: 'Nilsson’s Example 4.4: with a 20 V source and 2 Ω at node 1, a 20 Ω to the reference, a 5 Ω link carrying $i_\\phi$, a 10 Ω to the reference and a $8i_\\phi$ dependent current source in series with 2 Ω at node 2, the two node equations plus $i_\\phi = \\left(v_1 - v_2\\right)/5$ give $v_1 = 16$ V, $v_2 = 10$ V and $i_\\phi = 1.2$ A, so the 5 Ω resistor dissipates $5(1.2)^2 = 7.2$ W.',
      },
      {
        term: 'Voltage sources between essential nodes',
        kind: 'method',
        statement: 'If a voltage source is the only element between an essential node and the reference, **replace that node voltage with the source value** and write no KCL equation there. If it is the only element between two nonreference essential nodes, **combine the nodes and the source into a supernode**, write one KCL for the supernode, and add a **supernode constraint equation** setting the node-voltage difference equal to the source value.',
        detail: 'Nilsson’s Fig. 4.12 circuit: a 100 V source ties node 1 to the reference, so $v_1 = 100$ V is known and a single KCL at node 2, $\\left(v_2 - 100\\right)/10 + v_2/50 - 5 = 0$, yields $v_2 = 125$ V. In the Fig. 4.14 circuit a $10i_\\phi$ dependent source bridges nodes 2 and 3: the supernode KCL $\\left(v_2 - 50\\right)/5 + v_2/50 + v_3/100 - 4 = 0$ with $v_3 - v_2 = 10i_\\phi$ and $i_\\phi = \\left(v_2 - 50\\right)/5$ gives $v_2 = 60$ V, $v_3 = 80$ V and $i_\\phi = 2$ A.',
      },
      {
        term: 'The mesh-current method (Maxwell’s circulating currents)',
        kind: 'method',
        statement: 'Assign a circulating current to each mesh, write **KVL around every mesh** summing voltage drops in the direction of the mesh current, then recover branch currents as the algebraic sum of the mesh currents they share. With all mesh currents in the same direction the equations take the standard form $$E_1 = R_{11}I_1 - R_{12}I_2 - \\cdots - R_{1n}I_n,$$ where $R_{11}$ is the sum of resistances in mesh 1 and $R_{12}$ the resistance common to meshes 1 and 2.',
        detail: 'Only the own-mesh term is positive, and $R_{12} = R_{21}$, so the equations can be written down by inspection. In Hughes’s Example 4.10 the three loop equations read $80 = 140I_1 - 50I_2 - 30I_3$, $70 = -50I_1 + 100I_2 - 40I_3$ and $0 = -30I_1 - 40I_2 + 90I_3$, giving $I_1 = 1.65$ A, $I_2 = 2.16$ A and $I_3 = 1.50$ A; the shared branches then carry $I_1 - I_3 = 0.15$ A and $I_2 - I_3 = 0.66$ A.',
      },
      {
        term: 'Current sources in meshes',
        kind: 'method',
        statement: 'If a current source lies in a single mesh, **label that mesh current with the source value** (negated if opposed) and skip its KVL equation. If a current source is shared by two meshes, **erase it and merge the meshes into a supermesh**: write one KVL around the supermesh perimeter plus a **supermesh constraint equation** setting the difference of the two mesh currents equal to the source current.',
        detail: 'Nilsson’s Example 4.8: a 3 A source occupies the third mesh alone, so $i_3 = -3$ A; the remaining equations $-50 + 5i_1 + 10\\left(i_1 - i_2\\right) = 0$ and $10\\left(i_2 - i_1\\right) + 40\\left(i_2 + 3\\right) = 0$ give $i_1 = 2$ A, $i_2 = -2$ A. In the Fig. 4.27 supermesh circuit, $-50 + 9i_a - 5i_b + 6i_c = 0$, $-3i_a + 15i_b - 2i_c = 0$ and $i_c - i_a = 5$ give $i_a = 1.75$ A, $i_b = 1.25$ A, $i_c = 6.75$ A.',
      },
      {
        term: 'Choosing between the methods — and duality',
        kind: 'insight',
        statement: 'Ask four questions: does one method give **fewer simultaneous equations**? Is there a **voltage source between two essential nodes** (favors node-voltage with that node as reference)? Is there a **current source in a single mesh** (favors mesh-current)? Can part of the circuit be solved on its own? The two methods are **duals**: essential nodes ↔ meshes, KCL ↔ KVL, supernodes ↔ supermeshes, voltages ↔ currents.',
        detail: 'Nilsson’s Example 4.10 (find the power in a 300 Ω resistor): the mesh-current route needs five mesh equations plus a constraint (six total), while the node-voltage route needs four — both reference choices give the same 16.57 W. In Example 4.11 a circuit with two current sources shared between meshes collapses to one supermesh, but node-voltage still wins because the unknown $v_o$ is itself a node voltage; both give $v_o = 173$ V.',
      },
    ],
    examples: [
      {
        title: 'Node-voltage analysis with source powers (Nilsson Example 4.3)',
        problem: 'A 50 V source in series with 5 Ω feeds a node that also connects a 10 Ω resistor, a 40 Ω resistor and a 3 A current source to the reference node. Find the branch currents through the 5 Ω, 10 Ω and 40 Ω resistors, and the power associated with each source.',
        steps: [
          { label: 'Step 1: Set up', text: 'The circuit has two essential nodes, so a single KCL equation suffices. Take the lower node as reference and call the upper node voltage $v_1$.' },
          { label: 'Step 2: Write the node equation', text: 'Summing currents leaving node 1: $\\left(v_1 - 50\\right)/5 + v_1/10 + v_1/40 - 3 = 0$.' },
          { label: 'Step 3: Solve for the node voltage', text: 'Multiplying through by 40: $8\\left(v_1 - 50\\right) + 4v_1 + v_1 = 120$, so $13v_1 = 520$ and $v_1 = 40$ V.' },
          { label: 'Step 4: Recover the branch currents', text: '$i_a = \\left(50 - 40\\right)/5 = 2$ A, $i_b = 40/10 = 4$ A and $i_c = 40/40 = 1$ A.' },
          { label: 'Step 5: Check the power balance', text: 'The 50 V source delivers $p_{50V} = -50i_a = -100$ W and the 3 A source delivers $p_{3A} = -3v_1 = -120$ W, a total of 220 W. The resistors absorb $4(5) + 16(10) + 1(40) = 220$ W — the balance closes exactly.' },
        ],
        result: '$v_1 = 40$ V; $i_a = 2$ A, $i_b = 4$ A, $i_c = 1$ A; both sources deliver power (100 W and 120 W), all of it dissipated in the three resistors.',
      },
      {
        title: 'Mesh-current analysis with source powers (Nilsson Example 4.6)',
        problem: 'Three meshes share a ladder of resistors: a 40 V source with 2 Ω, an 8 Ω resistor (output voltage $v_o$ across it), then 6 Ω, 6 Ω and a 20 V source with 4 Ω. All mesh currents are clockwise. Find the power associated with each voltage source and the voltage $v_o$.',
        steps: [
          { label: 'Step 1: Write the mesh equations', text: 'For mesh $i_a$: $-40 + 2i_a + 8\\left(i_a - i_b\\right) = 0$. For mesh $i_b$: $8\\left(i_b - i_a\\right) + 6i_b + 6\\left(i_b - i_c\\right) = 0$. For mesh $i_c$: $6\\left(i_c - i_b\\right) + 4i_c + 20 = 0$.' },
          { label: 'Step 2: Solve the simultaneous equations', text: 'The three equations give $i_a = 5.6$ A, $i_b = 2.0$ A and $i_c = -0.80$ A.' },
          { label: 'Step 3: Verify one mesh', text: 'Check mesh $a$: $2(5.6) + 8(5.6 - 2.0) = 11.2 + 28.8 = 40$ V, matching the source exactly.' },
          { label: 'Step 4: Compute the source powers', text: 'The 40 V source carries $i_a$, so $p_{40V} = -40i_a = -224$ W (delivering). The 20 V source carries $i_c$, so $p_{20V} = 20i_c = -16$ W (also delivering, since $i_c$ flows through it against its rise).' },
          { label: 'Step 5: Find the branch voltage', text: 'The current through the 8 Ω resistor in the direction of $v_o$ is $i_a - i_b = 3.6$ A, so $v_o = 8(3.6) = 28.8$ V.' },
        ],
        result: '$i_a = 5.6$ A, $i_b = 2.0$ A, $i_c = -0.80$ A; the 40 V source delivers 224 W, the 20 V source delivers 16 W, and $v_o = 28.8$ V.',
      },
      {
        title: 'The current-source special case (Nilsson Example 4.8)',
        problem: 'Take the circuit of Example 4.3 above — 50 V source, 5 Ω, 10 Ω, 40 Ω, 3 A source — and solve it by the mesh-current method instead, using the special case that the 3 A source lies in a single mesh.',
        steps: [
          { label: 'Step 1: Label the special mesh', text: 'The 3 A source appears only in the right-hand mesh and opposes the clockwise direction chosen for $i_3$, so label $i_3 = -3$ A and write no KVL for that mesh.' },
          { label: 'Step 2: Write the two remaining mesh equations', text: '$-50 + 5i_1 + 10\\left(i_1 - i_2\\right) = 0$ and $10\\left(i_2 - i_1\\right) + 40\\left(i_2 - (-3)\\right) = 0$.' },
          { label: 'Step 3: Solve', text: 'The equations reduce to $15i_1 - 10i_2 = 50$ and $-10i_1 + 50i_2 = -120$, giving $i_1 = 2$ A and $i_2 = -2$ A.' },
          { label: 'Step 4: Recover the branch currents', text: '$i_a = i_1 = 2$ A, $i_b = i_1 - i_2 = 4$ A and $i_c = i_2 + 3 = 1$ A — identical to the node-voltage results of Example 4.3, as duality promises.' },
        ],
        result: 'The same branch currents emerge — $i_a = 2$ A, $i_b = 4$ A, $i_c = 1$ A — with two mesh equations instead of one node equation, illustrating how source placement dictates the cheaper method.',
      },
    ],
    keyTakeaways: [
      'The node-voltage method writes KCL at essential nodes; the mesh-current method writes KVL around meshes, and only the latter is restricted to planar circuits.',
      'Counting first saves work: $n_e - 1$ KCL equations plus $b_e - (n_e - 1)$ KVL equations are necessary and sufficient.',
      'Dependent sources never change the procedure — they add constraint equations tying the controlling quantity to node voltages or mesh currents.',
      'A voltage source between essential nodes becomes either a known node voltage (reference node) or a supernode with a constraint equation.',
      'A current source in a single mesh fixes that mesh current; one shared between meshes creates a supermesh with a constraint equation.',
      'The two methods are duals, and the cheapest choice is usually decided by counting equations before writing any.',
    ],
    quiz: [
      {
        q: 'A circuit is drawn with two crossing branches but can be redrawn with no branches crossing. Which statement is correct?',
        options: ['The circuit is nonplanar, so only node-voltage analysis applies', 'The circuit is planar, so both node-voltage and mesh-current methods apply', 'The circuit is planar, so only the mesh-current method applies', 'Neither method can be used until the crossing branches are removed'],
        answer: 1,
        explanation: 'Planarity is a property of the circuit, not the drawing: if it *can* be redrawn without crossings it is planar. The node-voltage method works for planar and nonplanar circuits alike; the mesh-current method requires planarity.',
      },
      {
        q: 'A circuit has $n_e = 4$ essential nodes and $b_e = 7$ essential branches with unknown currents. How many KCL equations does the systematic method write, and how many KVL equations complete the set?',
        options: ['4 KCL and 7 KVL', '3 KCL and 4 KVL', '4 KCL and 3 KVL', '3 KCL and 7 KVL'],
        answer: 1,
        explanation: 'Write $n_e - 1 = 3$ independent KCL equations at essential nodes, then the remaining $b_e - (n_e - 1) = 7 - 3 = 4$ equations come from KVL around meshes or loops.',
      },
      {
        q: 'A 5 A current source is the only element shared between two adjacent meshes. What is the correct handling?',
        options: ['Introduce the unknown voltage across it and solve for it anyway', 'Label both mesh currents as 5 A', 'Merge the two meshes into a supermesh and add the constraint that the difference of the mesh currents equals 5 A', 'Remove the branch containing the source entirely'],
        answer: 2,
        explanation: 'A shared current source creates a supermesh: write one KVL around the combined perimeter (avoiding the source branch) plus a supermesh constraint equation defining the difference between the two mesh currents as the value of the source.',
      },
      {
        q: 'In the node-voltage method, a node voltage is defined as:',
        options: ['The voltage drop from a nonreference node to the reference node', 'The voltage rise from the reference node to a nonreference essential node', 'The algebraic sum of all source voltages touching that node', 'The open-circuit voltage between two nonreference nodes'],
        answer: 1,
        explanation: 'Each node voltage is the voltage rise from the reference node to the nonreference essential node in question. Branch currents are then written as node-voltage differences divided by branch resistances.',
      },
      {
        q: 'Why does a voltage source connected between two nonreference essential nodes reduce rather than increase the node-voltage work?',
        options: ['Because the source can be replaced by its internal resistance', 'Because one node equation is replaced by a simple constraint on the node-voltage difference', 'Because both node voltages become immediately known', 'Because the source eliminates one essential node from the circuit'],
        answer: 1,
        explanation: 'The two nodes and the source form a supernode: one KCL equation is written for the combination instead of two, plus a trivial constraint equation setting the node-voltage difference equal to the source value — a net simplification.',
      },
      // PYQ-pattern: GATE 2022 — nodal analysis with two conductances (rephrased, values changed)
      {
        q: 'A 60 V source in series with 6 Ω feeds a node that also connects 12 Ω and 24 Ω branches to the reference node, while a 2 A current source enters the same node. The node voltage is closest to:',
        options: ['27.4 V', '33.0 V', '41.1 V', '48.6 V'],
        answer: 2,
        explanation: 'Step 1 — Given: source $60$ V through $6$ Ω into node 1, branches $12$ Ω and $24$ Ω to reference, plus $2$ A entering node 1. Step 2 — Governing method: one KCL equation at the single nonreference node with currents leaving written as voltage differences over resistance. Step 3 — Algebra: $\\frac{v_{1} - 60}{6} + \\frac{v_{1}}{12} + \\frac{v_{1}}{24} - 2 = 0$; multiply by $24$ to get $4(v_{1} - 60) + 2v_{1} + v_{1} = 48$, so $7v_{1} = 288$ and $v_{1} \\approx 41.14$ V. Step 4 — Sanity check: the result sits below the $60$ V source and above zero, branch currents $3.14$ A, $3.43$ A and $1.71$ A reconcile with the $2$ A injection within rounding. Step 5 — Distractor analysis: 27.4 V reverses the sign of the current source, 33.0 V omits one conductance, and 48.6 V drops the source resistance. Step 6 — Conclude: the node voltage is about 41.1 V.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.2
  {
    sectionId: 'elec-ch3-s2',
    readingTime: 8,
    intro: 'Linearity is the most exploitable property a circuit has. If a network is linear, the response to several sources acting together equals the sum of the responses to each source acting alone — that is the superposition theorem. Its everyday partner is the source transformation, which swaps a voltage source in series with a resistance for a current source in parallel with the same resistance, letting you massage a circuit into whatever shape is easiest to solve.',
    objectives: [
      'State the superposition theorem and the rules for deactivating ideal sources',
      'Solve multi-source circuits one source at a time and combine the partial responses',
      'Apply superposition correctly in circuits that also contain dependent sources',
      'Derive and apply the source transformation $i_s = v_s/R$ in both directions',
      'Recognize elements that can be removed without affecting terminal behaviour',
    ],
    concepts: [
      {
        term: 'The superposition theorem',
        kind: 'theorem',
        statement: 'In any linear network containing more than one independent source, the current in, or the p.d. across, any branch can be found by **considering each source separately and adding their effects**; omitted sources of e.m.f. are replaced by resistances equal to their internal resistances.',
        detail: 'Nilsson’s formulation: whenever a linear system is driven by more than one independent source, the total response is the sum of the individual responses, each obtained with one independent source acting alone. Superposition is required only when the independent sources are fundamentally different (for example different frequencies); with all-dc sources it is an optional — but often convenient — tool.',
      },
      {
        term: 'Deactivating the sources',
        kind: 'method',
        statement: 'To deactivate an ideal **voltage source, replace it with a short circuit**; to deactivate an ideal **current source, replace it with an open circuit**. **Dependent sources are never deactivated** — they stay in place, controlled as always.',
        detail: 'In Nilsson’s Example 4.22 the 12 A ideal current source becomes an open circuit while the 120 V source acts, and the 120 V ideal voltage source becomes a short circuit while the 12 A source acts.',
      },
      {
        term: 'Prime notation for partial responses',
        kind: 'notation',
        statement: 'Denote the response to one source with primes ($i_1^{\\prime}$) and the response to another with double primes ($i_1^{\\prime\\prime}$); the true branch current is the algebraic sum $i_1 = i_1^{\\prime} + i_1^{\\prime\\prime}$. Powers can never be superposed — only currents and voltages can.',
        detail: 'Power is quadratic in the responses, so $p \\neq p^{\\prime} + p^{\\prime\\prime}$; compute the total current or voltage first, then the power.',
      },
      {
        term: 'Superposition with dependent sources',
        kind: 'method',
        statement: 'When a circuit mixes independent and dependent sources, **deactivate only the independent sources one at a time**; the dependent sources and their controlling relationships remain active in every partial circuit.',
        detail: 'Nilsson’s Example 4.23: with only the 10 V source active, the controlling voltage $v_\\Delta^{\\prime}$ must be zero (it can only be produced by the deactivated 5 A source), so the dependent branch opens and $v_o^{\\prime} = \\left(20/25\\right)10 = 8$ V; with only the 5 A source active, node equations give $v_\\Delta^{\\prime \\prime} = 10$ V and $v_o^{\\prime \\prime} = 16$ V; the total is $v_o = 8 + 16 = 24$ V.',
      },
      {
        term: 'Source transformation',
        kind: 'theorem',
        statement: 'A voltage source $v_s$ in series with a resistor $R$ is equivalent, at terminals a–b, to a current source in parallel with the same resistor, provided $$i_s = \\frac{v_s}{R}.$$ The transformation is bilateral; reversing the polarity of $v_s$ requires reversing the orientation of $i_s$.',
        detail: 'Equivalence means any resistor $R_L$ connected between a and b carries the same current: from the series form $i_L = v_s/\\left(R + R_L\\right)$, and from the parallel form by current division $i_L = \\frac{R}{R + R_L}i_s$ — identical when $i_s = v_s/R$.',
      },
      {
        term: 'The two ideal generator models (Hughes)',
        kind: 'definition',
        statement: 'A practical source may be drawn either as a **constant-voltage generator** (e.m.f. $E$ in series with $R_s$) or as a **constant-current generator** ($I_s = E/R_s$ in parallel with $R_s$): $$I_L = \\frac{E}{R_s + R_L} = \\frac{R_s}{R_s + R_L} \\cdot I_s.$$ The ideal voltage generator has zero internal resistance; the ideal current generator has infinite internal resistance.',
        detail: 'Seen from the load, the series model behaves as a current $I_s$ dividing between $R_s$ and $R_L$ in parallel. Either representation may be used; Hughes notes the current form often gives the easier solution, and in Example 4.16 a 1 A source feeding 5 Ω and 15 Ω in series becomes a 15 V source with 20 Ω in series.',
      },
      {
        term: 'Elements that can be deleted for terminal behaviour',
        kind: 'insight',
        statement: 'A **resistor in parallel with an ideal voltage source** and a **resistor in series with an ideal current source** can be removed without affecting the terminal behaviour of the rest of the circuit — although both change the *power* the sources must supply.',
        detail: 'Nilsson’s Example 4.13 exploits this twice: a 125 Ω resistor across the 250 V source and a 10 Ω resistor in series with an 8 A source are deleted, the remaining 5 Ω and 15 Ω merge to 20 Ω, transformations reduce the network to 2 A in parallel with 10 Ω, and $v_o = 20$ V. But the source powers must be computed in the *original* circuit: the 250 V source supplies 11.2 A and develops 2800 W.',
      },
    ],
    examples: [
      {
        title: 'Superposition on Hughes’s two-battery network (Hughes Example 4.13)',
        problem: 'Two batteries — 10 V with 1 Ω internal resistance and 20 V with 2 Ω — are connected in parallel across an 18 Ω resistor. By superposition, find the current supplied by each battery and the current in the 18 Ω resistor.',
        steps: [
          { label: 'Step 1: Deactivate the 20 V source', text: 'Replace it with a short circuit (its internal resistance is taken as zero in the ideal part of the model, the 2 Ω remains in the branch). The 2 Ω and 18 Ω are then in parallel: $R = 1 + \\frac{2 \\times 18}{2 + 18} = 2.8$ Ω, so $I_1^{\\prime} = 10/2.8 = 3.57$ A and, by current division, $I_2^{\\prime} = -\\frac{18}{2 + 18}\\times 3.57 = -3.21$ A.' },
          { label: 'Step 2: Check the shared branch', text: 'The current through the 18 Ω resistor due to the 10 V source alone is $I_1^{\\prime} + I_2^{\\prime} = 3.57 - 3.21 = 0.36$ A.' },
          { label: 'Step 3: Deactivate the 10 V source', text: 'Now $R = 2 + \\frac{1 \\times 18}{1 + 18} = 2.95$ Ω, so $I_2^{\\prime \\prime} = 20/2.95 = 6.78$ A and $I_1^{\\prime \\prime} = -\\frac{18}{1 + 18} \\times 6.78 = -6.42$ A.' },
          { label: 'Step 4: Superpose', text: '$I_1 = I_1^{\\prime} + I_1^{\\prime \\prime} = 3.57 - 6.42 = -2.85$ A and $I_2 = I_2^{\\prime} + I_2^{\\prime \\prime} = -3.21 + 6.78 = 3.57$ A. The 18 Ω resistor carries $-2.85 + 3.57 = 0.72$ A.' },
          { label: 'Step 5: Cross-check', text: 'These are exactly the values Hughes obtained from simultaneous Kirchhoff equations in Example 4.7 — superposition reproduces the full solution one source at a time.' },
        ],
        result: '$I_1 = -2.85$ A (the 10 V battery is being charged), $I_2 = 3.57$ A, and the 18 Ω resistor carries 0.72 A.',
      },
      {
        title: 'Prime and double-prime bookkeeping (Nilsson Example 4.22)',
        problem: 'A 120 V source in series with 6 Ω connects through a 3 Ω resistor to a node; from that node a 2 Ω and a 4 Ω in series lead back to the reference, and a 12 A current source bridges the 3 Ω and 4 Ω branches. Use superposition to find the four branch currents.',
        steps: [
          { label: 'Step 1: Voltage source alone (12 A → open circuit)', text: 'One node equation, $\\left(v_1 - 120\\right)/6 + v_1/3 + v_1/\\left(2 + 4\\right) = 0$, gives $v_1 = 30$ V. Hence $i_1^{\\prime} = \\left(120 - 30\\right)/6 = 15$ A, $i_2^{\\prime} = 30/3 = 10$ A and $i_3^{\\prime} = i_4^{\\prime} = 30/6 = 5$ A.' },
          { label: 'Step 2: Current source alone (120 V → short circuit)', text: 'Solving the two node equations for the voltages across the 3 Ω and 4 Ω resistors gives $v_3 = -12$ V and $v_4 = -24$ V.' },
          { label: 'Step 3: Read off the double-primed currents', text: '$i_1^{\\prime \\prime} = -v_3/6 = 2$ A, $i_2^{\\prime \\prime} = v_3/3 = -4$ A, $i_3^{\\prime \\prime} = \\left(v_3 - v_4\\right)/2 = 6$ A and $i_4^{\\prime \\prime} = v_4/4 = -6$ A.' },
          { label: 'Step 4: Add the partial responses', text: '$i_1 = 15 + 2 = 17$ A, $i_2 = 10 - 4 = 6$ A, $i_3 = 5 + 6 = 11$ A and $i_4 = 5 - 6 = -1$ A.' },
        ],
        result: '$i_1 = 17$ A, $i_2 = 6$ A, $i_3 = 11$ A, $i_4 = -1$ A — each one the algebraic sum of its single-source components.',
      },
      {
        title: 'Solving by source transformations (Nilsson Example 4.12)',
        problem: 'A 6 V source connects through 4 Ω to a network of 30 Ω and 10 Ω resistors, then a 20 Ω resistor and a 40 V source in series with 5 Ω. Find the power associated with the 6 V source.',
        steps: [
          { label: 'Step 1: Transform the right-hand source', text: 'The 40 V source in series with 5 Ω becomes an 8 A source in parallel with 5 Ω.' },
          { label: 'Step 2: Merge the parallel resistances', text: 'The 20 Ω and 5 Ω in parallel give 4 Ω, which sits directly across the 8 A source; transform back to a 32 V source in series with 4 Ω.' },
          { label: 'Step 3: Transform the combined series branch', text: 'The 32 V source in series with 20 Ω becomes a 1.6 A source in parallel with 20 Ω. The 20 Ω and 30 Ω in parallel reduce to 12 Ω, and the 1.6 A source in parallel with 12 Ω transforms once more into a 19.2 V source in series with 12 Ω.' },
          { label: 'Step 4: Solve the single loop', text: 'The branch containing the 6 V source now sees $12 + 4 = 16$ Ω in series with a 19.2 V source, so the current in the direction of the voltage drop across the 6 V source is $\\left(19.2 - 6\\right)/16 = 0.825$ A.' },
          { label: 'Step 5: Compute the power', text: '$p_{6V} = \\left(6\\right)\\left(0.825\\right) = 4.95$ W, and because the current flows in the direction of the voltage drop, the 6 V source is absorbing power.' },
        ],
        result: 'The 6 V source absorbs 4.95 W. Every transformation preserved the branch containing it, so the terminal behaviour — and hence this power — is exact.',
      },
    ],
    keyTakeaways: [
      'Superposition applies to any linear circuit: total response = sum of one-source-at-a-time responses.',
      'Deactivate ideal voltage sources with shorts and ideal current sources with opens; dependent sources are never deactivated.',
      'Only currents and voltages superpose — compute powers from the summed quantities, never by adding partial powers.',
      'A voltage source $v_s$ in series with $R$ transforms into a current source $i_s = v_s/R$ in parallel with the same $R$, and back again.',
      'A resistor in parallel with an ideal voltage source, or in series with an ideal current source, is invisible to the terminal behaviour but not to the power budget.',
      'Superposition is only *required* when independent sources are fundamentally different (for instance at different frequencies); otherwise it is one tool among many.',
    ],
    quiz: [
      {
        q: 'While applying superposition, how do you deactivate an ideal 12 V voltage source and an ideal 3 A current source?',
        options: ['Short the voltage source; short the current source', 'Open the voltage source; open the current source', 'Short the voltage source; open the current source', 'Open the voltage source; short the current source'],
        answer: 2,
        explanation: 'A deactivated ideal voltage source has zero terminal voltage — a short circuit; a deactivated ideal current source has zero current — an open circuit. Practical sources keep their internal resistance in place.',
      },
      {
        q: 'A circuit contains two independent dc sources and one dependent source. Under superposition, the dependent source is:',
        options: ['Deactivated along with each independent source in turn', 'Replaced by its controlling variable', 'Left active in every partial circuit', 'Removed from the circuit entirely'],
        answer: 2,
        explanation: 'Dependent sources are never deactivated. Each partial circuit keeps the dependent source and its controlling relationship, which is what generates the constraint equations in the analysis.',
      },
      {
        q: 'A 45 V source in series with 9 Ω is to be replaced by an equivalent current source. What is the new source?',
        options: ['5 A in parallel with 9 Ω', '45 A in series with 9 Ω', '5 A in series with 9 Ω', '405 A in parallel with 1 Ω'],
        answer: 0,
        explanation: 'The source transformation gives $i_s = v_s/R = 45/9 = 5$ A in parallel with the *same* 9 Ω resistance, with the current arrow pointing from the terminal that was positive.',
      },
      {
        q: 'Why can the powers delivered by two sources not be found by adding the powers each source delivers when acting alone?',
        options: ['Because power is conserved and therefore ambiguous', 'Because the relation between voltage and current is quadratic, cross terms appear when responses are summed', 'Because sources deliver zero power when acting alone', 'Because power is a signed quantity and currents add instead'],
        answer: 1,
        explanation: 'Power depends on the square of the response: $\\left(i^{\\prime} + i^{\\prime \\prime}\\right)^2R = i^{\\prime 2}R + i^{\\prime \\prime 2}R + 2i^{\\prime}i^{\\prime \\prime}R$, and the cross term is missing from the naive sum. Sum currents or voltages first, then compute power.',
      },
      {
        q: 'A 25 Ω resistor sits directly in parallel with an ideal 250 V source. For the purpose of finding the voltage delivered to the rest of the network, the resistor can be:',
        options: ['Replaced by a short circuit', 'Deleted without any effect on the terminal behaviour', 'Replaced by a 10 A current source', 'Combined in series with the source resistance'],
        answer: 1,
        explanation: 'An ideal voltage source fixes the terminal voltage whatever the parallel resistor does, so deleting the resistor leaves every other current and voltage unchanged — but the source current and power budget change, so put it back before computing powers.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.3
  {
    sectionId: 'elec-ch3-s3',
    readingTime: 10,
    intro: 'Thévenin’s theorem is the working engineer’s favourite shortcut: any linear two-terminal network of sources and resistors behaves, at its terminals, like one voltage source in series with one resistance. Norton’s theorem is the same statement in dual form — one current source in parallel with the same resistance. Between them they turn “what happens when I connect this load to that network?” into a one-line calculation.',
    objectives: [
      'State Thévenin’s and Norton’s theorems and the meaning of each equivalent element',
      'Compute the Thévenin voltage as the open-circuit terminal voltage',
      'Find the Thévenin resistance by source deactivation, by the short-circuit ratio, or with a test source when dependent sources are present',
      'Derive Norton equivalents directly or by transforming a Thévenin equivalent',
      'Use a Thévenin equivalent to simplify a larger circuit before analysing it',
    ],
    concepts: [
      {
        term: 'Thévenin’s theorem',
        kind: 'theorem',
        statement: 'An active network having two terminals A and B can be replaced by a **constant-voltage source in series with an internal resistance**: the source e.m.f. $E$ equals the **open-circuit p.d. between A and B**, and the resistance $r$ is the resistance of the network measured between A and B **with the load disconnected and the sources of e.m.f. replaced by their internal resistances**.',
        detail: 'Hughes (sometimes calling it Helmholtz’s theorem) derives it as an application of superposition: inserting a source equal to the open-circuit p.d. in the load branch drives the load current to zero, so the network alone must be able to drive the same current the other way. Equivalence holds for *every* value of load resistance.',
      },
      {
        term: 'Thévenin voltage and the short-circuit ratio',
        kind: 'law',
        statement: 'The Thévenin voltage is the open-circuit voltage, $V_{\\mathrm{Th}} = v_{\\mathrm{oc}}$. Short-circuiting the terminals of the Thévenin equivalent gives $i_{\\mathrm{sc}} = V_{\\mathrm{Th}}/R_{\\mathrm{Th}}$, so $$R_{\\mathrm{Th}} = \\frac{v_{\\mathrm{oc}}}{i_{\\mathrm{sc}}}$$ — the ratio of open-circuit voltage to short-circuit current of the original network.',
        detail: 'A minus sign must be inserted in this ratio if the short-circuit current flows in the direction of the open-circuit voltage *rise* rather than the drop.',
      },
      {
        term: 'Finding R_Th by deactivation',
        kind: 'method',
        statement: 'If the network contains only **independent** sources and resistors, deactivate them all (voltage sources → shorts, current sources → opens) and compute the resistance $R_{\\mathrm{ab}}$ seen looking into the terminal pair.',
        detail: 'Nilsson’s Example 4.17 on the 25 V, 5 Ω, 20 Ω, 3 A, 4 Ω network: deactivating both independent sources leaves the 4 Ω in series with $5 \\parallel 20$, so $R_{\\mathrm{Th}} = 4 + \\frac{(5)(20)}{5 + 20} = 8$ Ω — far quicker than the ratio method.',
      },
      {
        term: 'The test-source method for dependent sources',
        kind: 'method',
        statement: 'When dependent sources are present, deactivate only the independent sources, apply a **test voltage or current source at the terminals**, and compute $$R_{\\mathrm{Th}} = \\frac{v_T}{i_T}.$$ If the network contains *only* dependent sources and resistors, then $V_{\\mathrm{Th}} = 0$ and $I_N = 0$, so the whole equivalent is a single resistance found this way.',
        detail: 'Nilsson’s Example 4.18: applying a test voltage gives $i_T = v_T/25 + 20i$ with $i = -3v_T/2000$, hence $i_T = v_T/25 - 60v_T/2000 = v_T/100$ and $R_{\\mathrm{Th}} = 100$ Ω — matching the ratio $-5\\,\\text{V}/-50\\,\\text{mA}$ found from the open- and short-circuit calculations of Example 4.16.',
      },
      {
        term: 'Norton’s theorem',
        kind: 'theorem',
        statement: 'The current in any branch equals the current that would flow if the branch were connected across a source whose **short-circuit current equals the current in a short-circuit across the branch**, and whose **internal resistance equals the resistance across the open-circuited branch terminals**: $I_N = i_{\\mathrm{sc}}$ and $R_N = R_{\\mathrm{Th}}$.',
        detail: 'Norton’s theorem is a restatement of Thévenin’s theorem using the equivalent current-generator form; the Norton equivalent is exactly the source transformation of the Thévenin equivalent. In Nilsson’s Example 4.15, transforming 25 V + 5 Ω into 5 A ∥ 5 Ω, merging sources to 8 A and resistances to 4 Ω, then transforming again produces first the Thévenin equivalent (32 V, 8 Ω) and finally the Norton equivalent (4 A ∥ 8 Ω).',
      },
      {
        term: 'Equivalence means terminal equivalence',
        kind: 'insight',
        statement: 'A Thévenin or Norton equivalent **retains no information about the internal behaviour** of the original circuit — it is equivalent only in the sense that any load sees the same voltage and current, for all load values.',
        detail: 'Nilsson verifies this for the 32 V, 8 Ω equivalent: connect a 24 Ω load and it drops 24 V at 1 A, exactly as in the original network. The equivalent is most valuable when one portion of a circuit is fixed and another (the load) keeps changing.',
      },
      {
        term: 'Thévenizing part of a circuit',
        kind: 'method',
        statement: 'Replace the fixed portion of a network by its Thévenin equivalent first, then solve the remainder — often collapsing a many-equation problem into one.',
        detail: 'Nilsson’s Example 4.20: the bias network $V_{CC}$, $R_1$, $R_2$ feeding a transistor amplifier becomes $V_{\\mathrm{Th}} = V_{CC}R_2/\\left(R_1 + R_2\\right)$ in series with $R_{\\mathrm{Th}} = R_1R_2/\\left(R_1 + R_2\\right)$; the base current then follows from a single mesh equation $V_{\\mathrm{Th}} = R_{\\mathrm{Th}}i_B + V_0 + R_E\\left(1 + \\beta\\right)i_B$ — three equations instead of the six of Chapter 2.',
      },
    ],
    examples: [
      {
        title: 'A two-source Thévenin equivalent (Hughes Example 4.14)',
        problem: 'Two batteries in parallel — $E_1 = 6$ V with $R_1 = 2$ Ω and $E_2 = 4$ V with $R_2 = 3$ Ω — supply a load $R_3 = 10$ Ω. Find the current through the load using Thévenin’s theorem.',
        steps: [
          { label: 'Step 1: Remove the load and find the open-circuit voltage', text: 'With $R_3$ disconnected the loop current is $I_1 = \\left(6 - 4\\right)/\\left(2 + 3\\right) = 0.4$ A, so the p.d. across the terminals is $E = 6 - 0.4 \\times 2 = 5.2$ V.' },
          { label: 'Step 2: Deactivate the sources and find the internal resistance', text: 'Replacing both e.m.f.s by their (zero) internal resistances leaves $R_1$ in parallel with $R_2$: $r = \\frac{2 \\times 3}{2 + 3} = 1.2$ Ω.' },
          { label: 'Step 3: Build the equivalent', text: 'The whole network seen by the load is a 5.2 V source in series with 1.2 Ω.' },
          { label: 'Step 4: Reconnect the load', text: '$I = \\frac{5.2}{1.2 + 10} = 0.46$ A flows through the 10 Ω resistor.' },
        ],
        result: '$I = 0.46$ A through the 10 Ω load, from a 5.2 V source with 1.2 Ω internal resistance.',
      },
      {
        title: 'Open-circuit voltage, short-circuit current (Nilsson Example 4.14)',
        problem: 'A 25 V source in series with 5 Ω connects to a node shared by a 20 Ω resistor and a 3 A current source; a 4 Ω resistor leads from the node to terminals a–b. Find the Thévenin equivalent seen at a–b.',
        steps: [
          { label: 'Step 1: Open-circuit voltage', text: 'With the terminals open no current flows in the 4 Ω resistor, so $v_{\\mathrm{ab}}$ equals the node voltage. KCL: $\\left(v_1 - 25\\right)/5 + v_1/20 - 3 = 0$, giving $v_1 = 32$ V. So $V_{\\mathrm{Th}} = 32$ V.' },
          { label: 'Step 2: Short-circuit current', text: 'Shorting a–b forces the 4 Ω branch into the node equation: $\\left(v_2 - 25\\right)/5 + v_2/20 - 3 + v_2/4 = 0$ gives $v_2 = 16$ V, and the short carries $i_{\\mathrm{sc}} = 16/4 = 4$ A.' },
          { label: 'Step 3: Thévenin resistance', text: '$R_{\\mathrm{Th}} = V_{\\mathrm{Th}}/i_{\\mathrm{sc}} = 32/4 = 8$ Ω (in agreement with the deactivation method of Example 4.17).' },
          { label: 'Step 4: Verify with a load', text: 'Connect 24 Ω across a–b: the equivalent predicts $v = 32 \\times 24/32 = 24$ V and $i = 32/32 = 1$ A — precisely what the original network delivers.' },
        ],
        result: '$V_{\\mathrm{Th}} = 32$ V, $R_{\\mathrm{Th}} = 8$ Ω; the Norton equivalent is 4 A in parallel with 8 Ω.',
      },
      {
        title: 'Thévenin on a bridge network (Hughes Example 4.15)',
        problem: 'In a Wheatstone-style bridge, arms AB = 10 Ω, BC = 30 Ω, AD = 20 Ω and DC = 15 Ω enclose a 40 Ω detector between B and D, and a 2.0 V battery of negligible internal resistance drives the bridge across A–C. Determine the current in the detector by Thévenin’s theorem.',
        steps: [
          { label: 'Step 1: Remove the detector and find the open-circuit voltage', text: 'With the 40 Ω branch removed, the p.d. from A to B is $2 \\times \\frac{10}{10 + 30} = 0.5$ V and from A to D is $2 \\times \\frac{20}{20 + 15} = 1.143$ V. Hence the p.d. between B and D is $1.143 - 0.5 = 0.643$ V, B positive — so the detector current will flow from B to D.' },
          { label: 'Step 2: Deactivate the battery', text: 'Its internal resistance is negligible, so A and C become shorted. The resistance from B is $10 \\parallel 30 = 7.5$ Ω and from D is $20 \\parallel 15 = 8.57$ Ω, giving $r = 7.5 + 8.57 = 16.07$ Ω between the detector terminals.' },
          { label: 'Step 3: Solve the equivalent circuit', text: 'The bridge seen by the detector is a 0.643 V source in series with 16.07 Ω and the 40 Ω detector: $I = \\frac{0.643}{16.07 + 40} = 0.0115$ A.' },
          { label: 'Step 4: Cross-check with Kirchhoff', text: 'Solving the same bridge by three simultaneous loop equations gives $I_3 = 11.5$ mA from B to D — the identical answer.' },
        ],
        result: '$I = 11.5$ mA flowing from B to D through the 40 Ω detector.',
      },
    ],
    keyTakeaways: [
      'Thévenin: any linear two-terminal network equals one voltage source $V_{\\mathrm{Th}} = v_{\\mathrm{oc}}$ in series with one resistance $R_{\\mathrm{Th}}$.',
      'With only independent sources, $R_{\\mathrm{Th}}$ is found by deactivating them (voltage → short, current → open) and looking into the terminals.',
      'With dependent sources present, use the test-source ratio $R_{\\mathrm{Th}} = v_T/i_T$ with independent sources deactivated; for networks with only dependent sources, $V_{\\mathrm{Th}} = I_N = 0$.',
      'Norton is the dual: $I_N = i_{\\mathrm{sc}}$ in parallel with $R_N = R_{\\mathrm{Th}}$, obtainable from Thévenin by a source transformation.',
      'Equivalence is terminal equivalence only — internal voltages, currents and powers of the original network are not preserved.',
      'Thévenizing the fixed part of a circuit before analysing the changing part can collapse a six-equation problem into one.',
    ],
    quiz: [
      {
        q: 'A network’s open-circuit terminal voltage is 32 V and a short across the same terminals carries 4 A. What is the Thévenin equivalent?',
        options: ['32 V in series with 4 Ω', '32 V in series with 8 Ω', '4 V in series with 128 Ω', '36 V in series with 8 Ω'],
        answer: 1,
        explanation: '$V_{\\mathrm{Th}} = v_{\\mathrm{oc}} = 32$ V and $R_{\\mathrm{Th}} = v_{\\mathrm{oc}}/i_{\\mathrm{sc}} = 32/4 = 8$ Ω. The Norton equivalent would be 4 A in parallel with the same 8 Ω.',
      },
      {
        q: 'Which procedure correctly finds $R_{\\mathrm{Th}}$ for a network containing dependent sources?',
        options: ['Deactivate all sources including the dependent ones, then compute the input resistance', 'Apply a short circuit at the terminals and measure the resistance', 'Deactivate the independent sources, apply a test source at the terminals and take the ratio of its voltage to its current', 'Divide the dependent source gain by the open-circuit voltage'],
        answer: 2,
        explanation: 'Dependent sources can never be deactivated, so plain resistance-looking-in fails. The test-source method — deactivate independent sources, drive the terminals with $v_T$ or $i_T$, and compute $R_{\\mathrm{Th}} = v_T/i_T$ — always works.',
      },
      {
        q: 'The Norton equivalent of a network is 4 A in parallel with 8 Ω. What is the corresponding Thévenin equivalent?',
        options: ['4 V in series with 8 Ω', '32 V in series with 8 Ω', '32 V in series with 2 Ω', '0.5 V in series with 4 Ω'],
        answer: 1,
        explanation: 'Transforming the current source gives $V_{\\mathrm{Th}} = I_N R_N = 4 \\times 8 = 32$ V in series with the same 8 Ω. The two equivalents are source transformations of one another.',
      },
      {
        q: 'A Thévenin equivalent has been computed for a network. Which quantity can *not* be read from the equivalent circuit?',
        options: ['The voltage across a 24 Ω load connected to the terminals', 'The current delivered to any load resistance', 'The power dissipated inside the original network’s internal resistors', 'The short-circuit current at the terminals'],
        answer: 2,
        explanation: 'The equivalent preserves only terminal behaviour. Load voltages, load currents and the terminal short-circuit current are all correct, but internal power dissipation of the original network is lost information.',
      },
      {
        q: 'Why is the Thévenin resistance of a network with no independent sources found only by the test-source method?',
        options: ['Because such networks are nonlinear', 'Because both $v_{\\mathrm{oc}}$ and $i_{\\mathrm{sc}}$ are zero, making their ratio indeterminate', 'Because dependent sources cannot be measured', 'Because the network has no terminals'],
        answer: 1,
        explanation: 'With no independent sources, $V_{\\mathrm{Th}} = v_{\\mathrm{oc}} = 0$ and $I_N = i_{\\mathrm{sc}} = 0$, so the ratio method gives $0/0$. Applying a test source — with the dependent sources still active — is the only route to the single equivalent resistance.',
      },
      // PYQ-pattern: GATE 2020 — Thevenin equivalent of parallel batteries (rephrased, values changed)
      {
        q: 'Two parallel branches feed a 15 Ω load: a 12 V source in series with 2 Ω, and a 9 V source in series with 3 Ω. The current through the load is closest to:',
        options: ['0.33 A', '0.67 A', '1.20 A', '2.00 A'],
        answer: 1,
        explanation: 'Step 1 — Given: $E_{1} = 12$ V with $R_{1} = 2$ Ω, $E_{2} = 9$ V with $R_{2} = 3$ Ω, load $R_{L} = 15$ Ω. Step 2 — Governing theorem: the network seen by the load equals $V_{Th} = v_{oc}$ in series with $R_{Th}$ found by deactivation, and $I_{L} = \\frac{V_{Th}}{R_{Th} + R_{L}}$. Step 3 — Algebra: with the load removed the loop current is $\\frac{12 - 9}{2 + 3} = 0.6$ A, so $V_{Th} = 12 - 0.6 \\times 2 = 10.8$ V; deactivation parallels the pair to $R_{Th} = \\frac{2 \\times 3}{2 + 3} = 1.2$ Ω; hence $I_{L} = \\frac{10.8}{1.2 + 15} \\approx 0.667$ A. Step 4 — Sanity check: load voltage $0.667 \\times 15 \\approx 10$ V lies between the two source values, current stays below either short-circuit value, and units are consistent. Step 5 — Distractor analysis: 0.33 A halves the open-circuit voltage, 1.20 A mistakes $R_{Th}$ for the load, and 2.00 A neglects the second battery. Step 6 — Conclude: the load carries about 0.67 A.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.4
  {
    sectionId: 'elec-ch3-s4',
    readingTime: 8,
    intro: 'Some networks — bridges, attenuators, matching pads — refuse to collapse into series and parallel combinations. The delta–star transformation is the tool that unlocks them: three resistors in a triangle and three resistors in a star can be made equivalent pair by pair, and the same algebra renames itself as the π-to-T transformation used throughout communications and power engineering.',
    objectives: [
      'Derive the delta-to-star transformation by equating terminal resistances',
      'Apply the star-to-delta inverse transformation',
      'Convert between π and T networks and explain their relation to delta and star',
      'Reduce bridge and ladder networks that are neither series nor parallel',
      'Use symmetry to shortcut balanced transformations',
    ],
    concepts: [
      {
        term: 'Delta and star connections',
        kind: 'definition',
        statement: 'Three resistors $R_1$, $R_2$, $R_3$ connected in a **closed mesh (delta)** between terminals A, B and C can be replaced by three resistors $R_a$, $R_b$, $R_c$ connected between those same terminals and a **common star point S** — the **star** connection. The numerical subscripts are opposite the corresponding terminals.',
        detail: 'The networks are equivalent when the resistance between *any* two terminals — measured with the third open — is the same in both arrangements.',
      },
      {
        term: 'Delta-to-star transformation',
        kind: 'law',
        statement: 'Equating the resistance between each terminal pair yields $$R_a = \\frac{R_2 R_3}{R_1 + R_2 + R_3}, \\qquad R_b = \\frac{R_3 R_1}{R_1 + R_2 + R_3}, \\qquad R_c = \\frac{R_1 R_2}{R_1 + R_2 + R_3}.$$ The equivalent star resistance connected to a given terminal equals the **product of the two delta resistances connected to that terminal divided by the sum of the delta resistances**.',
        detail: 'For terminals A and B the delta presents $R_3$ in parallel with $\\left(R_1 + R_2\\right)$: $R_{AB} = \\frac{R_3\\left(R_1 + R_2\\right)}{R_1 + R_2 + R_3}$, which must equal $R_a + R_b$. Writing the three such equations and combining them (subtracting one pair from another) isolates each star resistance.',
      },
      {
        term: 'Star-to-delta transformation',
        kind: 'law',
        statement: 'Inverting the relations gives $$R_1 = R_b + R_c + \\frac{R_b R_c}{R_a}, \\qquad R_2 = R_c + R_a + \\frac{R_c R_a}{R_b}, \\qquad R_3 = R_a + R_b + \\frac{R_a R_b}{R_c}.$$ The equivalent delta resistance between two terminals is the **sum of the two star resistances connected to those terminals plus their product divided by the third star resistance**.',
        detail: 'The derivation divides one star equation by another to get ratios such as $R_a/R_b = R_2/R_1$, then back-substitutes. Note that every delta resistance is *larger* than the sum of its two adjacent star resistances — the delta is the “spread out” of the two forms.',
      },
      {
        term: 'π and T networks',
        kind: 'definition',
        statement: 'The **π network is the delta circuit** and the **T network is the star circuit**; any π can be transformed to an equivalent T and vice versa by exactly the same algebra, which is the customary terminology in power systems and in attenuator design.',
        detail: 'A π drawn as input–output port with a shunt branch is just a delta with one terminal used as input, one as output and one as common; the T (or Y) likewise mirrors the star.',
      },
      {
        term: 'The balanced shortcut',
        kind: 'insight',
        statement: 'If all three delta resistances are equal to $R$, all three star resistances are equal to $R/3$ — symmetry propagates through the transformation.',
        detail: 'Hughes’s Example 4.20 uses this from first principles: in a π of three 6 Ω resistors, the resistance between A and B is $\\frac{6 \\times 12}{6 + 12} = 4$ Ω, which splits symmetrically into two 2 Ω T arms — each T element is $6/3 = 2$ Ω.',
      },
      {
        term: 'Where the transformation pays off',
        kind: 'insight',
        statement: 'The delta–star (π–T) machinery is reserved for networks whose elements are **neither in series nor in parallel** — bridge circuits, bridged-T attenuators and three-phase loads — where ordinary reduction stalls.',
        detail: 'The strategy: spot the buried delta or star, transform it, and watch the network fall back into series–parallel form. Hughes’s Examples 4.20 and 4.21 each reduce a five-resistor tangle to a single division after one transformation.',
      },
    ],
    examples: [
      {
        title: 'Reducing a network by π-to-T (Hughes Example 4.20)',
        problem: 'A 20 V source feeds two parallel 4 Ω resistors ($R_1$ to node C, $R_2$ to node B). A π network of three 6 Ω resistors — $R_3$ between C and B, $R_4$ between C and the return rail A, $R_5$ between B and A — bridges the two feeders. Find the source current $I_s$.',
        steps: [
          { label: 'Step 1: Identify the buried π', text: 'Resistors $R_3$, $R_4$ and $R_5$ (each 6 Ω) form a π between terminals C, B and the rail A — this is the part to convert to a T.' },
          { label: 'Step 2: Convert to the T', text: 'Because all three π elements are identical, symmetry applies: between C and B the π gives $R_{CB} = \\frac{6 \\times 12}{6 + 12} = 4$ Ω, which in the symmetric T splits into two 2 Ω arms (each element is $6/3 = 2$ Ω), with the third 2 Ω arm running from the star point to A.' },
          { label: 'Step 3: Reduce the transformed network', text: 'The left path is $4 + 2 = 6$ Ω (source through $R_1$ and its T arm) and the right path is $2 + 4 = 6$ Ω (T arm then $R_2$). These two 6 Ω paths are in parallel: $6 \\parallel 6 = 3$ Ω, in series with the 2 Ω arm to A.' },
          { label: 'Step 4: Compute the source current', text: 'Total resistance seen by the source is $3 + 2 = 5$ Ω, so $I_s = 20/5 = 4$ A.' },
        ],
        result: '$I_s = 4$ A from the 20 V source after one π-to-T conversion.',
      },
      {
        title: 'Reducing a network by T-to-π (Hughes Example 4.21)',
        problem: 'A 16 V source drives terminal C of a T network whose arms are $R_2 = 4$ Ω (toward B) and $R_4 = 2$ Ω (toward the return rail A); the arm toward B continues through 4 Ω, and terminals A and B are both tied to the return rail. The T measures $R_{AB} = R_{AC} = 6$ Ω and $R_{BC} = 8$ Ω between its terminals. Find the source current $I_s$ by converting the T to a π.',
        steps: [
          { label: 'Step 1: Verify the T resistances', text: 'Arms of 4 Ω, 4 Ω and 2 Ω give pairwise sums: $R_{BC} = 4 + 4 = 8$ Ω and $R_{AB} = R_{AC} = 4 + 2 = 6$ Ω, matching the stated terminal resistances.' },
          { label: 'Step 2: Convert to the π', text: 'With star arms $R_A = 2$ Ω, $R_B = 4$ Ω, $R_C = 4$ Ω: the π element between B and C is $4 + 4 + \\frac{4 \\times 4}{2} = 16$ Ω, and each of the other two π elements (A–B and A–C) is $2 + 4 + \\frac{2 \\times 4}{4} = 8$ Ω. So $R_1 = 16$ Ω and $R_2 = R_3 = 8$ Ω.' },
          { label: 'Step 3: Reduce the π network', text: 'With B and A both on the return rail, the source at C sees the 8 Ω (C–A) directly in parallel with the 16 Ω (C–B) path: $8 \\parallel 16 = \\frac{8 \\times 16}{24} = 16/3$ Ω.' },
          { label: 'Step 4: Compute the source current', text: '$I_s = 16 \\div \\left(16/3\\right) = 3$ A.' },
        ],
        result: '$I_s = 3$ A — and a direct check on the original T gives the same input resistance $4 + \\left(4 \\parallel 2\\right) = 16/3$ Ω.',
      },
    ],
    keyTakeaways: [
      'Delta-to-star: each star arm is the product of the two adjacent delta resistances over the sum of all three.',
      'Star-to-delta: each delta side is the sum of the two adjacent star arms plus their product over the third arm.',
      'The π and T networks are the same structures under communications terminology — identical formulas apply.',
      'A balanced delta of $R$ each becomes a star of $R/3$ each.',
      'The transformation is the standard first move on networks that are neither series nor parallel — bridges and attenuators.',
      'Always re-derive one terminal resistance as a check: equivalence must hold pairwise between all three terminal pairs.',
    ],
    quiz: [
      {
        q: 'A delta consists of $R_1 = 10$ Ω, $R_2 = 20$ Ω and $R_3 = 30$ Ω. What is the star resistance connected to the terminal between $R_2$ and $R_3$?',
        options: ['$\\frac{20 \\times 30}{60} = 10$ Ω', '$\\frac{10 \\times 20}{60} = 3.33$ Ω', '$20 + 30 = 50$ Ω', '$\\frac{60}{3} = 20$ Ω'],
        answer: 0,
        explanation: 'The star arm at a terminal is the product of the two delta resistances *connected to that terminal* divided by the delta sum: $\\left(20 \\times 30\\right)/60 = 10$ Ω.',
      },
      {
        q: 'Three 12 Ω resistors form a delta. The equivalent star uses:',
        options: ['Three 36 Ω resistors', 'Three 12 Ω resistors', 'Three 4 Ω resistors', 'One 4 Ω and two 12 Ω resistors'],
        answer: 2,
        explanation: 'For a balanced delta each star arm is $R^2/3R = R/3 = 12/3 = 4$ Ω — symmetry forces all three arms equal.',
      },
      {
        q: 'A star has arms 2 Ω, 4 Ω and 4 Ω. What is the delta resistance spanning the terminals of the two 4 Ω arms?',
        options: ['8 Ω', '$4 + 4 + \\frac{16}{2} = 16$ Ω', '$\\frac{16}{3}$ Ω', '2 Ω'],
        answer: 1,
        explanation: 'Star-to-delta: the side between those terminals is the sum of the two star arms plus their product over the third arm: $4 + 4 + \\left(4 \\times 4\\right)/2 = 16$ Ω.',
      },
      {
        q: 'In communications engineering the delta network is more commonly called:',
        options: ['The T network', 'The π network', 'The bridge network', 'The ladder network'],
        answer: 1,
        explanation: 'The π and the delta are the same three-terminal structure, just drawn for a port orientation; likewise the T is the star. Hughes uses π–T as the customary terms for attenuator work.',
      },
    ],
  },

  // ------------------------------------------------------------------ 3.5
  {
    sectionId: 'elec-ch3-s5',
    readingTime: 7,
    intro: 'Connect a variable load to any source and the delivered power peaks at exactly one value of load resistance — when the load equals the internal (Thévenin) resistance of the source. This single fact, the maximum-power-transfer theorem, shapes everything from RF amplifier design to the choice not to match a power grid to its generators.',
    objectives: [
      'Derive the matching condition $R_L = R_{\\mathrm{Th}}$ by differentiating the load power',
      'Compute the maximum deliverable power $P_{\\max} = V_{\\mathrm{Th}}^2/4R_{\\mathrm{Th}}$',
      'Explain why the efficiency at match is only 50 per cent',
      'Distinguish systems optimized for efficiency from systems optimized for power transfer',
      'Compute delivered power at loads other than the matched value',
    ],
    concepts: [
      {
        term: 'The maximum-power-transfer theorem',
        kind: 'theorem',
        statement: 'The power transferred from a source to a load is a maximum when the **load resistance equals the internal (Thévenin) resistance of the source**, $R_L = R_{\\mathrm{Th}}$. This condition is called **resistance matching**.',
        detail: 'Hughes derives it from $p = \\left(\\frac{E}{r + R}\\right)^2 R = \\frac{E^2}{r^2/R + 2r + R}$: the denominator is minimized when its derivative $-r^2/R^2 + 1$ vanishes, i.e. at $R = r$. Nilsson does the same with the Thévenin form $p = \\left(\\frac{V_{\\mathrm{Th}}}{R_{\\mathrm{Th}} + R_L}\\right)^2 R_L$.',
      },
      {
        term: 'The maximum power formula',
        kind: 'law',
        statement: 'Substituting $R_L = R_{\\mathrm{Th}}$ into the power expression gives $$p_{\\max} = \\frac{V_{\\mathrm{Th}}^2}{4R_{\\mathrm{Th}}} = \\frac{V_{\\mathrm{Th}}^2}{4R_L}.$$ Half the equivalent voltage appears across the load and half is dropped internally.',
        detail: 'At match the load voltage is $V_{\\mathrm{Th}}/2$, the current is $V_{\\mathrm{Th}}/\\left(2R_{\\mathrm{Th}}\\right)$, and the product is $V_{\\mathrm{Th}}^2/\\left(4R_{\\mathrm{Th}}\\right)$.',
      },
      {
        term: 'Efficiency at the match point',
        kind: 'insight',
        statement: 'At $R_L = R_{\\mathrm{Th}}$ exactly **50 per cent** of the power generated is dissipated inside the source resistance; in real networks the fraction of *source* power reaching the load can be even lower, since the source may feed other internal resistances too.',
        detail: 'Nilsson’s Example 4.21: a 360 V source with internal network delivers 2520 W, of which only 900 W — 35.71 per cent — reaches the matched load, the rest being lost in the source-side resistances. The general efficiency for the simple series case is $\\eta = R_L/\\left(R_L + R_{\\mathrm{Th}}\\right)$.',
      },
      {
        term: 'Two classes of power system',
        kind: 'definition',
        statement: '**Systems optimized for maximum efficiency** — power utilities — generate, transmit and distribute large quantities of power, so losses must be minimized. **Systems optimized for maximum power transfer** — communications and instrumentation — carry small powers where squeezing every watt to the load matters more than efficiency.',
        detail: 'In information-carrying systems the power available at the transmitter or detector is limited, so transferring as much as possible to the receiver is the priority and efficiency is not a primary concern.',
      },
      {
        term: 'Why practical systems deliberately mismatch',
        kind: 'insight',
        statement: 'Hughes: for generators and batteries the internal resistance is so **low** that matching would demand a near-short-circuit load, overloading the source; power engineers therefore run $R_L \\gg R_{\\mathrm{Th}}$ to keep efficiency high. Matching matters where the source resistance is relatively high — communications and electronics.',
        detail: 'Doubling the matched load also illustrates the flatness of the peak: Hughes’s exercise on a 12 V, 40 Ω generator asks for the power at twice the matched resistance, and $p = E^2R/\\left(r + R\\right)^2$ falls only from 0.9 W to 0.8 W when $R_L$ goes from 40 Ω to 80 Ω.',
      },
      {
        term: 'Loading a Thévenin equivalent',
        kind: 'method',
        statement: 'The standard recipe: reduce the source network to its Thévenin equivalent, set $R_L = R_{\\mathrm{Th}}$ for maximum power, and compute $p_{\\max} = V_{\\mathrm{Th}}^2/4R_{\\mathrm{Th}}$; for any other load use $p = \\left(\\frac{V_{\\mathrm{Th}}}{R_{\\mathrm{Th}} + R_L}\\right)^2 R_L$.',
        detail: 'Remember that the equivalent discards internal detail: to find the power *delivered by the original source*, go back to the original circuit, as Nilsson’s Example 4.21 does when computing the 360 V source’s 2520 W.',
      },
    ],
    examples: [
      {
        title: 'Matching a load through a Thévenin equivalent (Nilsson Example 4.21)',
        problem: 'A 360 V source in series with 30 Ω connects to a node; a 150 Ω resistor bridges from the node to the return rail, and the load $R_L$ connects across the same pair of terminals. Find the $R_L$ for maximum power, the maximum power, and the percentage of the 360 V source’s power that reaches the load.',
        steps: [
          { label: 'Step 1: Thévenize the source network', text: 'Open-circuit, the node voltage divides: $V_{\\mathrm{Th}} = \\frac{150}{180}\\left(360\\right) = 300$ V. With the source deactivated, $R_{\\mathrm{Th}} = \\frac{\\left(150\\right)\\left(30\\right)}{180} = 25$ Ω.' },
          { label: 'Step 2: Apply the matching condition', text: 'Maximum power occurs at $R_L = R_{\\mathrm{Th}} = 25$ Ω.' },
          { label: 'Step 3: Compute the maximum power', text: '$p_{\\max} = \\frac{V_{\\mathrm{Th}}^2}{4R_{\\mathrm{Th}}} = \\frac{300^2}{4 \\times 25} = 900$ W.' },
          { label: 'Step 4: Check the load voltage', text: 'At match, $v_{ab} = \\frac{300}{50}\\left(25\\right) = 150$ V — half the Thévenin voltage, as the 50 per cent efficiency rule predicts.' },
          { label: 'Step 5: Return to the original circuit for the source power', text: 'When $v_{ab} = 150$ V the source current is $i_s = \\frac{360 - 150}{30} = 7$ A, so the 360 V source delivers $p_s = 360 \\times 7 = 2520$ W.' },
          { label: 'Step 6: Efficiency of the transfer', text: 'The load receives $900/2520 \\times 100 = 35.71$ per cent of the source power — the 30 Ω and 150 Ω resistances absorb the rest.' },
        ],
        result: '$R_L = 25$ Ω, $p_{\\max} = 900$ W, and only 35.71 per cent of the source power reaches the matched load.',
      },
      {
        title: 'A matched generator and its doubled load (Hughes, Exercises 4)',
        problem: 'A generator has an open-circuit voltage of 12 V and an internal resistance of 40 Ω. Find the load resistance for maximum power transfer, the terminal voltage and power at match — and the power absorbed if the load is then increased to twice the matched value.',
        steps: [
          { label: 'Step 1: Matching condition', text: 'The Thévenin equivalent is 12 V in series with 40 Ω, so maximum power is delivered to $R_L = r = 40$ Ω.' },
          { label: 'Step 2: Terminal voltage at match', text: 'The load and internal resistance share the e.m.f. equally: $V = 12/2 = 6$ V across the load.' },
          { label: 'Step 3: Power at match', text: '$p = \\frac{E^2}{4r} = \\frac{12^2}{4 \\times 40} = 0.9$ W (equivalently $6^2/40 = 0.9$ W).' },
          { label: 'Step 4: Double the load', text: 'With $R_L = 80$ Ω: $p = \\frac{E^2 R}{\\left(r + R\\right)^2} = \\frac{144 \\times 80}{120^2} = 0.8$ W — the peak is broad, and a two-to-one mismatch costs only about 11 per cent of the power.' },
        ],
        result: '$R_L = 40$ Ω for match, terminal voltage 6 V, $p_{\\max} = 0.9$ W; at 80 Ω the load absorbs 0.8 W.',
      },
    ],
    keyTakeaways: [
      'Maximum power is transferred when $R_L = R_{\\mathrm{Th}}$ — the resistance-matching condition.',
      'The peak power is $p_{\\max} = V_{\\mathrm{Th}}^2/\\left(4R_{\\mathrm{Th}}\\right)$, with exactly half the Thévenin voltage across the load.',
      'Efficiency at match is only 50 per cent (and can be far less of the *source* power), because the internal resistance dissipates as much as the load.',
      'Power utilities deliberately mismatch, running $R_L \\gg R_{\\mathrm{Th}}$; communications and instrumentation systems match because signal power is scarce.',
      'The matched peak is broad — modest mismatches cost little power, which is why approximate matching is usually acceptable.',
      'Compute load quantities from the Thévenin equivalent, but return to the original circuit for source powers.',
    ],
    quiz: [
      {
        q: 'A source has $V_{\\mathrm{Th}} = 20$ V and $R_{\\mathrm{Th}} = 5$ Ω. What load resistance maximizes the transferred power, and what is that power?',
        options: ['$R_L = 5$ Ω and $p = 20$ W', '$R_L = 5$ Ω and $p = 80$ W', '$R_L = 20$ Ω and $p = 5$ W', '$R_L = 400$ Ω and $p = 0.25$ W'],
        answer: 0,
        explanation: 'Match requires $R_L = R_{\\mathrm{Th}} = 5$ Ω; then $p_{\\max} = V_{\\mathrm{Th}}^2/\\left(4R_{\\mathrm{Th}}\\right) = 400/20 = 20$ W.',
      },
      {
        q: 'At the matched condition, the efficiency of power transfer from the Thévenin equivalent to the load is:',
        options: ['100 per cent, because power is maximized', '75 per cent', '50 per cent', 'It depends on the load voltage'],
        answer: 2,
        explanation: 'At $R_L = R_{\\mathrm{Th}}$ the internal resistance and the load carry the same current and drop the same voltage, so each dissipates exactly half the generated power.',
      },
      {
        q: 'Why do electricity utilities deliberately *not* match their generators to the transmission network?',
        options: ['Matching would make the delivered power zero', 'Generator internal resistances are so low that a matched load would amount to a short circuit and overload the source', 'Utilities transmit information, not power', 'Matching is only possible with alternating current'],
        answer: 1,
        explanation: 'Hughes notes that for power sources the internal resistance is so low that satisfying $R_L = r$ is impossible without overloading the source — so utility systems are optimized for efficiency with $R_L$ far above the internal resistance.',
      },
      {
        q: 'A communications receiver input is driven from a source with $R_{\\mathrm{Th}} = 300$ Ω. Engineering practice in this setting is to:',
        options: ['Choose $R_L \\gg 300$ Ω for high efficiency', 'Choose $R_L \\ll 300$ Ω to maximize current', 'Choose $R_L = 300$ Ω to maximize signal power transfer', 'Leave the load open, since no power is needed'],
        answer: 2,
        explanation: 'In communications and instrumentation the available power is tiny, so the design maximizes *transfer*, not efficiency: the load is matched to the source resistance, accepting the 50 per cent internal loss.',
      },
    ],
  },
]

export const elecCh3Formulas: FormulaEntry[] = [
  {
    chapterId: 'elec-ch3',
    section: '3.1',
    name: 'Node-voltage KCL pattern',
    formula: '(v₁ − V_s)/R₁ + v₁/R₂ + (v₁ − v₂)/R₃ = 0',
    latex: '\\frac{v_1 - V_s}{R_1} + \\frac{v_1}{R_2} + \\frac{v_1 - v_2}{R_3} = 0',
    note: 'one KCL per nonreference essential node; currents written as node-voltage differences over R',
  },
  {
    chapterId: 'elec-ch3',
    section: '3.1',
    name: 'Mesh-current standard form',
    formula: 'E₁ = R₁₁I₁ − R₁₂I₂ − … − R₁ₙIₙ',
    latex: 'E_1 = R_{11}I_1 - R_{12}I_2 - \\cdots - R_{1n}I_n',
    note: 'own-mesh term positive; mutual terms negative when all mesh currents share one direction',
  },
  {
    chapterId: 'elec-ch3',
    section: '3.2',
    name: 'Superposition of responses',
    formula: 'i_k = i_k′ + i_k″ + … (one term per independent source)',
    latex: 'i_k = i_k^{\\prime} + i_k^{\\prime\\prime} + \\cdots',
    note: 'only currents and voltages add — never powers',
  },
  {
    chapterId: 'elec-ch3',
    section: '3.2',
    name: 'Source transformation',
    formula: 'I_s = V_s / R',
    latex: 'i_s = \\frac{v_s}{R}',
    note: 'voltage source in series with R ↔ current source in parallel with the same R',
  },
  {
    chapterId: 'elec-ch3',
    section: '3.3',
    name: 'Thévenin voltage',
    formula: 'V_th = V_oc',
    latex: 'V_{\\mathrm{Th}} = v_{\\mathrm{oc}}',
    note: 'the open-circuit terminal voltage of the network',
  },
  {
    chapterId: 'elec-ch3',
    section: '3.3',
    name: 'Thévenin / Norton resistance',
    formula: 'R_th = V_oc / I_sc = R_N,  I_N = I_sc',
    latex: 'R_{\\mathrm{Th}} = \\frac{v_{\\mathrm{oc}}}{i_{\\mathrm{sc}}} = R_N, \\quad I_N = i_{\\mathrm{sc}}',
    note: 'with dependent sources use the test-source ratio R = v_T/i_T instead',
  },
  {
    chapterId: 'elec-ch3',
    section: '3.4',
    name: 'Delta-to-star transformation',
    formula: 'R_a = R₂R₃/(R₁ + R₂ + R₃)',
    latex: 'R_a = \\frac{R_2 R_3}{R_1 + R_2 + R_3}',
    note: 'star arm = product of the two adjacent delta resistances over the delta sum',
  },
  {
    chapterId: 'elec-ch3',
    section: '3.4',
    name: 'Star-to-delta transformation',
    formula: 'R₁ = R_b + R_c + R_bR_c/R_a',
    latex: 'R_1 = R_b + R_c + \\frac{R_b R_c}{R_a}',
    note: 'delta side = sum of the two adjacent star arms plus their product over the third',
  },
  {
    chapterId: 'elec-ch3',
    section: '3.5',
    name: 'Maximum power transfer',
    formula: 'R_L = R_th,  P_max = V_th²/4R_th',
    latex: 'R_L = R_{\\mathrm{Th}}, \\quad p_{\\max} = \\frac{V_{\\mathrm{Th}}^2}{4R_{\\mathrm{Th}}}',
    note: 'match the load to the source resistance; efficiency is then only 50 per cent',
  },
]

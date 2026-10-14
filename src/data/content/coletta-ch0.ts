import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010), Chapter 0
// Master study content. Math is KaTeX $...$ rendered by the RichText pipeline.
// ============================================================================

export const colettaCh0Content: SectionContent[] = [
  {
    sectionId: "coletta-ch0-s1",
    readingTime: 4,
    intro: "Coletta opens by asking what physics studies and why its quantitative habits matter for technology and the other sciences. Mathematics is presented as the language in which derivations are written and checked. Coletta frames the chapter with applications so that abstraction never drifts far from instruments. This section treats Motion, Matter and Applications at exam depth.",
    objectives: [
      "State and apply the defining relation of Motion, Matter and Applications with correct SI units",
      "Solve a quantitative Motion, Matter and Applications problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Motion, Matter and Applications reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Physics as the study of motion and matter",
        kind: "definition",
        statement: "**Physics studies motion of matter and the interactions that cause it.** From atoms to galaxies the same quantitative habits apply, and the principles enable technologies from engines to electronics.",
        detail: "Coletta stresses applications in every chapter so that theory is never detached from devices and other sciences."
      },
      {
        term: "Derivation as connected reasoning",
        kind: "method",
        statement: "**A derivation is a chain of already-accepted relations leading to a new one.** Each step names its warrant, so the result can be checked line by line: $$\\text{premises} \\; \\Rightarrow \\; \\text{new relation}.$$",
        detail: "Reading with a pencil means verifying dimensions and limiting cases at every arrow."
      },
      {
        term: "SI units and conversion factors",
        kind: "notation",
        statement: "**Every quantity carries units, and conversion multiplies by one in disguise.** Since $1 \\, \\mathrm{in} = 2.54 \\, \\mathrm{cm}$, a length $L$ converts as $$L_{cm} = L_{in} \\times \\frac{2.54 \\, \\mathrm{cm}}{1 \\, \\mathrm{in}}.$$",
        detail: "Coletta works in SI throughout: meters, kilograms, seconds, with powers of ten for range."
      },
      {
        term: "Significant figures",
        kind: "method",
        statement: "**A reported digit must be honestly earned by the measurement.** For products the result keeps as many significant figures as the least-known input, so $3.2 \\times 4.15 = 13$ to two figures.",
        detail: "Zeros between digits count; leading zeros never do; trailing zeros count only with a decimal point shown."
      },
      {
        term: "Order of magnitude and Fermi estimates",
        kind: "insight",
        statement: "**An order of magnitude is the nearest power of ten, and a Fermi estimate chains rough factors to land within it.** If each factor is trusted within a factor of a few, the product lands within one power of ten.",
        detail: "Coletta uses the N-ray, polywater, and cold-fusion episodes to show why independent replication beats wishful estimation."
      },
    ],
    figures: [
      {
        caption: "Measurement scale with SI prefixes and $1 \\, \\mathrm{m} = 100 \\, \\mathrm{cm}$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="ruler showing SI length scale"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="40" y1="140" x2="360" y2="140" stroke="currentColor" stroke-width="2"/><line x1="40" y1="140" x2="40" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="56" y1="140" x2="56" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="72" y1="140" x2="72" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="88" y1="140" x2="88" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="104" y1="140" x2="104" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="120" y1="140" x2="120" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="136" y1="140" x2="136" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="152" y1="140" x2="152" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="168" y1="140" x2="168" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="184" y1="140" x2="184" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="200" y1="140" x2="200" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="216" y1="140" x2="216" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="232" y1="140" x2="232" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="248" y1="140" x2="248" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="264" y1="140" x2="264" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="280" y1="140" x2="280" y2="122" stroke="currentColor" stroke-width="1.5"/><line x1="296" y1="140" x2="296" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="312" y1="140" x2="312" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="328" y1="140" x2="328" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="344" y1="140" x2="344" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="360" y1="140" x2="360" y2="122" stroke="currentColor" stroke-width="1.5"/><text x="200" y="170" font-size="13" text-anchor="middle" fill="currentColor">meter stick — SI length in meters</text><text x="200" y="60" font-size="13" text-anchor="middle" fill="currentColor">1 m = 100 cm = 1000 mm</text><line x1="40" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4"/><polygon points="200,100 190,96 190,104" fill="currentColor"/></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "How many atoms in a density sample?",
        problem: "An aluminum cube of side $L = 2.0 \\, \\mathrm{cm}$ has density $\\rho = 2.70 \\, \\mathrm{g/cm^3}$. Estimate the number of atoms.",
        steps: [
          { label: "Step 1: Volume and mass", text: "Volume $V = L^3 = (2.0)^3 = 8.0 \\, \\mathrm{cm^3}$. Mass $M = \\rho V = 2.70 \\times 8.0 = 21.6 \\, \\mathrm{g}$." },
          { label: "Step 2: Moles and atoms", text: "Molar mass $27.0 \\, \\mathrm{g/mol}$ gives $n = 21.6/27.0 = 0.80 \\, \\mathrm{mol}$. Atoms $N = n N_A = 0.80 \\times 6.02 \\times 10^{23} = 4.8 \\times 10^{23}$." },
          { label: "Step 3: Sense check", text: "A mole of aluminum is $10 \\, \\mathrm{cm^3}$, so $8 \\, \\mathrm{cm^3}$ near one mole is consistent." },
        ],
        result: "About $4.8 \\times 10^{23}$ atoms, under one mole."
      },
      {
        title: "Converting highway speed to SI",
        problem: "Convert $65 \\, \\mathrm{mi/h}$ to meters per second.",
        steps: [
          { label: "Step 1: Factors", text: "Use $1 \\, \\mathrm{mi} = 1609 \\, \\mathrm{m}$ and $1 \\, \\mathrm{h} = 3600 \\, \\mathrm{s}$." },
          { label: "Step 2: Multiply by one", text: "$v = 65 \\times 1609/3600 = 104585/3600 = 29.05 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Significant figures", text: "Input $65$ has two figures, so report $29 \\, \\mathrm{m/s}$ roughly $30 \\, \\mathrm{m/s}$." },
        ],
        result: "$65 \\, \\mathrm{mi/h} = 29 \\, \\mathrm{m/s}$, the familiar highway scale in SI."
      },
    ],
    keyTakeaways: [
      "Motion, Matter and Applications is governed by $L = 1.5 \\times 10^{11} \\, \\mathrm{m}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $1 \\, \\mathrm{in} = 2.54 \\, \\mathrm{cm}$",
    ],
    quiz: [
      {
        q: "The SI base unit of mass is:",
        options: ["the gram", "the kilogram", "the pound", "the atomic mass unit"],
        answer: 1,
        explanation: "The kilogram is the SI base unit; the gram is a derived subunit."
      },
      {
        q: "A result reported as 13 cm from inputs 3.2 cm and 4.15 cm is limited by:",
        options: ["the least number of significant figures", "the metric prefix", "the order of magnitude", "addition rules"],
        answer: 0,
        explanation: "Products keep as many figures as the least-known input, here two from 3.2."
      },
      {
        q: "N-rays, polywater, and cold fusion are invoked to show:",
        options: ["theory beats experiment", "SI units are optional", "estimation always fails", "replication by independent labs is essential"],
        answer: 3,
        explanation: "Each episode collapsed when others could not reproduce the claimed effect."
      },
    ],
  },
  {
    sectionId: "coletta-ch0-s2",
    readingTime: 5,
    intro: "Coletta opens by asking what physics studies and why its quantitative habits matter for technology and the other sciences. Mathematics is presented as the language in which derivations are written and checked. Study objectives at each section opening tell you which derivations to reproduce. This section treats Mathematics and Study Objectives at exam depth.",
    objectives: [
      "State and apply the defining relation of Mathematics and Study Objectives with correct SI units",
      "Solve a quantitative Mathematics and Study Objectives problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Mathematics and Study Objectives reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "SI units and conversion factors",
        kind: "notation",
        statement: "**Every quantity carries units, and conversion multiplies by one in disguise.** Since $1 \\, \\mathrm{in} = 2.54 \\, \\mathrm{cm}$, a length $L$ converts as $$L_{cm} = L_{in} \\times \\frac{2.54 \\, \\mathrm{cm}}{1 \\, \\mathrm{in}}.$$",
        detail: "Coletta works in SI throughout: meters, kilograms, seconds, with powers of ten for range."
      },
      {
        term: "Significant figures",
        kind: "method",
        statement: "**A reported digit must be honestly earned by the measurement.** For products the result keeps as many significant figures as the least-known input, so $3.2 \\times 4.15 = 13$ to two figures.",
        detail: "Zeros between digits count; leading zeros never do; trailing zeros count only with a decimal point shown."
      },
      {
        term: "Order of magnitude and Fermi estimates",
        kind: "insight",
        statement: "**An order of magnitude is the nearest power of ten, and a Fermi estimate chains rough factors to land within it.** If each factor is trusted within a factor of a few, the product lands within one power of ten.",
        detail: "Coletta uses the N-ray, polywater, and cold-fusion episodes to show why independent replication beats wishful estimation."
      },
      {
        term: "Replication and the In Perspective lessons",
        kind: "insight",
        statement: "**Extraordinary claims require independent replication.** N-rays, polywater, and cold fusion each collapsed when other laboratories could not reproduce the effect despite intense interest.",
        detail: "The moral Coletta draws is procedural: control for bias, share apparatus details, and let strangers repeat the measurement."
      },
      {
        term: "Physics as the study of motion and matter",
        kind: "definition",
        statement: "**Physics studies motion of matter and the interactions that cause it.** From atoms to galaxies the same quantitative habits apply, and the principles enable technologies from engines to electronics.",
        detail: "Coletta stresses applications in every chapter so that theory is never detached from devices and other sciences."
      },
    ],
    examples: [
      {
        title: "Reading a derivation line by line",
        problem: "From $v = v_0 + at$ with $v_0 = 3.0 \\, \\mathrm{m/s}$, $a = 2.0 \\, \\mathrm{m/s^2}$, $t = 4.0 \\, \\mathrm{s}$, verify the stated $v = 11 \\, \\mathrm{m/s}$.",
        steps: [
          { label: "Step 1: Name the warrant", text: "Constant-acceleration definition $a = \\Delta v/\\Delta t$ rearranged gives $v = v_0 + at$." },
          { label: "Step 2: Substitute", text: "$v = 3.0 + (2.0)(4.0) = 3.0 + 8.0 = 11.0 \\, \\mathrm{m/s}$." },
          { label: "Step 3: Check units", text: "$at$ has $(\\mathrm{m/s^2})(\\mathrm{s}) = \\mathrm{m/s}$, matching velocity." },
        ],
        result: "$v = 11 \\, \\mathrm{m/s}$ verified; study objectives mark exactly this skill."
      },
      {
        title: "Using objectives as a checklist",
        problem: "A chapter lists three objectives; a student can do two confidently. What does Coletta advise?",
        steps: [
          { label: "Step 1: Diagnose", text: "Objectives name observable skills, so missing one locates the gap precisely." },
          { label: "Step 2: Target practice", text: "Work the derivation and two end-of-section problems tied to that objective." },
          { label: "Step 3: Re-test", text: "Close the book and reproduce the relation $x = x_0 + v_0 t + at^2/2$ from its definition." },
        ],
        result: "Study the one missing objective deliberately rather than rereading everything."
      },
    ],
    keyTakeaways: [
      "Mathematics and Study Objectives is governed by $L = 1.5 \\times 10^{11} \\, \\mathrm{m}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $1 \\, \\mathrm{in} = 2.54 \\, \\mathrm{cm}$",
    ],
    quiz: [
      {
        q: "A result reported as 13 cm from inputs 3.2 cm and 4.15 cm is limited by:",
        options: ["the least number of significant figures", "the metric prefix", "the order of magnitude", "addition rules"],
        answer: 0,
        explanation: "Products keep as many figures as the least-known input, here two from 3.2."
      },
      {
        q: "N-rays, polywater, and cold fusion are invoked to show:",
        options: ["theory beats experiment", "SI units are optional", "estimation always fails", "replication by independent labs is essential"],
        answer: 3,
        explanation: "Each episode collapsed when others could not reproduce the claimed effect."
      },
      {
        q: "The SI base unit of mass is:",
        options: ["the atomic mass unit", "the gram", "the kilogram", "the pound"],
        answer: 2,
        explanation: "The kilogram is the SI base unit; the gram is a derived subunit."
      },
    ],
  },
  {
    sectionId: "coletta-ch0-s3",
    readingTime: 6,
    intro: "Coletta opens by asking what physics studies and why its quantitative habits matter for technology and the other sciences. Mathematics is presented as the language in which derivations are written and checked. Significant figures keep every reported digit honest. This section treats Measurement, Units and Significant Figures at exam depth.",
    objectives: [
      "State and apply the defining relation of Measurement, Units and Significant Figures with correct SI units",
      "Solve a quantitative Measurement, Units and Significant Figures problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Measurement, Units and Significant Figures reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Order of magnitude and Fermi estimates",
        kind: "insight",
        statement: "**An order of magnitude is the nearest power of ten, and a Fermi estimate chains rough factors to land within it.** If each factor is trusted within a factor of a few, the product lands within one power of ten.",
        detail: "Coletta uses the N-ray, polywater, and cold-fusion episodes to show why independent replication beats wishful estimation."
      },
      {
        term: "Replication and the In Perspective lessons",
        kind: "insight",
        statement: "**Extraordinary claims require independent replication.** N-rays, polywater, and cold fusion each collapsed when other laboratories could not reproduce the effect despite intense interest.",
        detail: "The moral Coletta draws is procedural: control for bias, share apparatus details, and let strangers repeat the measurement."
      },
      {
        term: "Physics as the study of motion and matter",
        kind: "definition",
        statement: "**Physics studies motion of matter and the interactions that cause it.** From atoms to galaxies the same quantitative habits apply, and the principles enable technologies from engines to electronics.",
        detail: "Coletta stresses applications in every chapter so that theory is never detached from devices and other sciences."
      },
      {
        term: "Derivation as connected reasoning",
        kind: "method",
        statement: "**A derivation is a chain of already-accepted relations leading to a new one.** Each step names its warrant, so the result can be checked line by line: $$\\text{premises} \\; \\Rightarrow \\; \\text{new relation}.$$",
        detail: "Reading with a pencil means verifying dimensions and limiting cases at every arrow."
      },
      {
        term: "SI units and conversion factors",
        kind: "notation",
        statement: "**Every quantity carries units, and conversion multiplies by one in disguise.** Since $1 \\, \\mathrm{in} = 2.54 \\, \\mathrm{cm}$, a length $L$ converts as $$L_{cm} = L_{in} \\times \\frac{2.54 \\, \\mathrm{cm}}{1 \\, \\mathrm{in}}.$$",
        detail: "Coletta works in SI throughout: meters, kilograms, seconds, with powers of ten for range."
      },
    ],
    figures: [
      {
        caption: "Measurement scale with SI prefixes and $1 \\, \\mathrm{m} = 100 \\, \\mathrm{cm}$",
        svg: '<svg viewBox="0 0 400 200" width="100%" role="img" aria-label="velocity versus time graph with constant slope"><rect x="10" y="10" width="380" height="180" rx="10" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/><line x1="50" y1="20" x2="50" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="170" x2="370" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="170" x2="330" y2="50" stroke="currentColor" stroke-width="2.5"/><line x1="190" y1="170" x2="190" y2="110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="50" y1="110" x2="190" y2="110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4"/><text x="20" y="100" font-size="12" fill="currentColor">v</text><text x="200" y="188" font-size="12" fill="currentColor">t</text><text x="230" y="90" font-size="12" fill="currentColor">slope = a, area = displacement</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Significant figures in a product",
        problem: "A plate measures $3.2 \\, \\mathrm{cm}$ by $4.15 \\, \\mathrm{cm}$. Report the area honestly.",
        steps: [
          { label: "Step 1: Raw product", text: "$A = 3.2 \\times 4.15 = 13.28 \\, \\mathrm{cm^2}$ on the calculator." },
          { label: "Step 2: Apply the rule", text: "Least input has two figures ($3.2$), so keep two: $13 \\, \\mathrm{cm^2}$." },
          { label: "Step 3: Meaning", text: "The digits $28$ are computational noise beyond the measurement." },
        ],
        result: "$A = 13 \\, \\mathrm{cm^2}$ with honest precision."
      },
      {
        title: "Unit conversion with the factor method",
        problem: "Convert $2.50 \\, \\mathrm{km}$ to centimeters.",
        steps: [
          { label: "Step 1: Chain of ones", text: "$1 \\, \\mathrm{km} = 1000 \\, \\mathrm{m}$, $1 \\, \\mathrm{m} = 100 \\, \\mathrm{cm}$." },
          { label: "Step 2: Multiply", text: "$2.50 \\times 1000 \\times 100 = 250000 \\, \\mathrm{cm} = 2.50 \\times 10^5 \\, \\mathrm{cm}$." },
          { label: "Step 3: Check", text: "Kilometers to centimeters grows by $10^5$, as expected." },
        ],
        result: "$2.50 \\times 10^5 \\, \\mathrm{cm}$."
      },
    ],
    keyTakeaways: [
      "Measurement, Units and Significant Figures is governed by $L = 1.5 \\times 10^{11} \\, \\mathrm{m}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $1 \\, \\mathrm{in} = 2.54 \\, \\mathrm{cm}$",
    ],
    quiz: [
      {
        q: "N-rays, polywater, and cold fusion are invoked to show:",
        options: ["theory beats experiment", "SI units are optional", "estimation always fails", "replication by independent labs is essential"],
        answer: 3,
        explanation: "Each episode collapsed when others could not reproduce the claimed effect."
      },
      {
        q: "The SI base unit of mass is:",
        options: ["the atomic mass unit", "the gram", "the kilogram", "the pound"],
        answer: 2,
        explanation: "The kilogram is the SI base unit; the gram is a derived subunit."
      },
      {
        q: "A result reported as 13 cm from inputs 3.2 cm and 4.15 cm is limited by:",
        options: ["addition rules", "the least number of significant figures", "the metric prefix", "the order of magnitude"],
        answer: 1,
        explanation: "Products keep as many figures as the least-known input, here two from 3.2."
      },
    ],
  },
  {
    sectionId: "coletta-ch0-s4",
    readingTime: 7,
    intro: "Coletta opens by asking what physics studies and why its quantitative habits matter for technology and the other sciences. Mathematics is presented as the language in which derivations are written and checked. The In Perspective essays on N-rays, polywater, and cold fusion show what happens when replication is skipped. This section treats Order-of-Magnitude Estimates at exam depth.",
    objectives: [
      "State and apply the defining relation of Order-of-Magnitude Estimates with correct SI units",
      "Solve a quantitative Order-of-Magnitude Estimates problem by the Coletta strategy, checking dimensions and limits",
      "Explain the Order-of-Magnitude Estimates reasoning in words, including when the idealizations break",
    ],
    concepts: [
      {
        term: "Physics as the study of motion and matter",
        kind: "definition",
        statement: "**Physics studies motion of matter and the interactions that cause it.** From atoms to galaxies the same quantitative habits apply, and the principles enable technologies from engines to electronics.",
        detail: "Coletta stresses applications in every chapter so that theory is never detached from devices and other sciences."
      },
      {
        term: "Derivation as connected reasoning",
        kind: "method",
        statement: "**A derivation is a chain of already-accepted relations leading to a new one.** Each step names its warrant, so the result can be checked line by line: $$\\text{premises} \\; \\Rightarrow \\; \\text{new relation}.$$",
        detail: "Reading with a pencil means verifying dimensions and limiting cases at every arrow."
      },
      {
        term: "SI units and conversion factors",
        kind: "notation",
        statement: "**Every quantity carries units, and conversion multiplies by one in disguise.** Since $1 \\, \\mathrm{in} = 2.54 \\, \\mathrm{cm}$, a length $L$ converts as $$L_{cm} = L_{in} \\times \\frac{2.54 \\, \\mathrm{cm}}{1 \\, \\mathrm{in}}.$$",
        detail: "Coletta works in SI throughout: meters, kilograms, seconds, with powers of ten for range."
      },
      {
        term: "Significant figures",
        kind: "method",
        statement: "**A reported digit must be honestly earned by the measurement.** For products the result keeps as many significant figures as the least-known input, so $3.2 \\times 4.15 = 13$ to two figures.",
        detail: "Zeros between digits count; leading zeros never do; trailing zeros count only with a decimal point shown."
      },
      {
        term: "Order of magnitude and Fermi estimates",
        kind: "insight",
        statement: "**An order of magnitude is the nearest power of ten, and a Fermi estimate chains rough factors to land within it.** If each factor is trusted within a factor of a few, the product lands within one power of ten.",
        detail: "Coletta uses the N-ray, polywater, and cold-fusion episodes to show why independent replication beats wishful estimation."
      },
    ],
    examples: [
      {
        title: "Fermi estimate of lecture air molecules",
        problem: "Estimate the number of air molecules in a $10 \\, \\mathrm{m} \\times 8 \\, \\mathrm{m} \\times 3 \\, \\mathrm{m}$ lecture room.",
        steps: [
          { label: "Step 1: Volume", text: "$V = 10 \\times 8 \\times 3 = 240 \\, \\mathrm{m^3} \\approx 2 \\times 10^2 \\, \\mathrm{m^3}$." },
          { label: "Step 2: Moles per cubic meter", text: "At STP one mole occupies $22.4 \\, \\mathrm{L} = 2.24 \\times 10^{-2} \\, \\mathrm{m^3}$, so $1 \\, \\mathrm{m^3}$ holds about $45 \\, \\mathrm{mol}$." },
          { label: "Step 3: Multiply", text: "$N \\approx 240 \\times 45 \\times 6.02 \\times 10^{23} \\approx 6.5 \\times 10^{27}$ molecules." },
        ],
        result: "Order $10^{27}$ to $10^{28}$ molecules; the power of ten is the point, not the prefactor."
      },
      {
        title: "What N-rays teach about error",
        problem: "Blondlot saw N-rays where no one else could. What quantitative lesson does Coletta draw?",
        steps: [
          { label: "Step 1: The claim", text: "Small brightness changes judged by eye, with the expected answer known to the observer." },
          { label: "Step 2: The failure", text: "When American physicist Wood secretly removed the prism, Blondlot still reported N-ray spectra." },
          { label: "Step 3: The fix", text: "Blind the observer, fix the analysis in advance, and demand independent replication." },
        ],
        result: "Subjective judgment plus expectation produces false positives; blinded replication is the cure."
      },
    ],
    keyTakeaways: [
      "Order-of-Magnitude Estimates is governed by $L = 1.5 \\times 10^{11} \\, \\mathrm{m}$; write it first in every solution",
      "Dimensions, signs, and limiting cases catch most errors before numbers do",
      "The section method transfers: picture, principles, symbols, then substitution with $1 \\, \\mathrm{in} = 2.54 \\, \\mathrm{cm}$",
    ],
    quiz: [
      {
        q: "The SI base unit of mass is:",
        options: ["the atomic mass unit", "the gram", "the kilogram", "the pound"],
        answer: 2,
        explanation: "The kilogram is the SI base unit; the gram is a derived subunit."
      },
      {
        q: "A result reported as 13 cm from inputs 3.2 cm and 4.15 cm is limited by:",
        options: ["addition rules", "the least number of significant figures", "the metric prefix", "the order of magnitude"],
        answer: 1,
        explanation: "Products keep as many figures as the least-known input, here two from 3.2."
      },
      {
        q: "N-rays, polywater, and cold fusion are invoked to show:",
        options: ["replication by independent labs is essential", "theory beats experiment", "SI units are optional", "estimation always fails"],
        answer: 0,
        explanation: "Each episode collapsed when others could not reproduce the claimed effect."
      },
    ],
  },
]

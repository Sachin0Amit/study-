/**
 * Knowledge Universe — Naval Architecture & Marine Engineering — Chapter 01: Marine Engineering
 * 1 lesson · ~1,268 words
 * field: Naval Architecture
 * legacy sources: engineering.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Marine Engineering]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 eng-naval-architecture-ships — Naval Architecture: Why Ships Float and Stay Up
 */
import type { KnowledgeTopic } from '../../types'

export const navalArchitectureCh01: KnowledgeTopic[] = [
  {
    id: "eng-naval-architecture-ships",
    title: "Naval Architecture: Why Ships Float and Stay Up",
    domain: "Engineering",
    field: "Naval Architecture",
    branch: "Marine Engineering",
    tier: "intermediate",
    concepts: [
      "displacement and Archimedes' principle",
      "center of gravity versus center of buoyancy",
      "metacentric height GM",
      "free surface effect in tanks",
      "friction and wave-making resistance",
      "cavitation on propellers",
      "hogging, sagging and load lines",
    ],
    words: 1268,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A fully loaded supertanker weighs 400,000 tonnes — the mass of a small mountain — and floats. That fact summarizes two problems naval architects solve for every ship. Buoyancy explains why it floats at all: the hull pushes aside water whose weight equals its own. Stability explains why it stays upright in waves instead of rolling over — a subtler question answered by the geometry of one invisible point. This intermediate lesson follows those ideas from Archimedes to metacentric height, then adds the rest of the craft: hull resistance, propellers, and the bending loads that can break ships lengthwise when they are loaded badly.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "A ship must survive its cargo, the sea's motion and its own stability arithmetic simultaneously. Most ship losses in history trace to one of three failures covered here — instability, overloading or bad loading — all of them calculation errors, not bad luck.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Archimedes' principle — a floating body is pushed up by a force equal to the weight of the water it displaces — is the foundation, and the Physics subject's fluids chapter derives it from first principles; here we build on it. A hull sinks into the water exactly until the displaced water weighs as much as the ship itself, which fixes its draft. Displacement — not cargo tonnage — is the true measure of a ship: a 400,000-tonne tanker displaces 400,000 tonnes of seawater. The same principle in reverse punishes overloads: add weight and the hull sinks deeper, until the sea can climb over the deck edge.",
      },
      {
        kind: "para",
        text: "Staying upright is about two points. The center of gravity, G, is where the ship's weight acts — raised by deck cargo, cranes and masts. The center of buoyancy, B, is the centroid of the submerged hull, and it shifts toward whichever side sits deeper as the ship heels. If B moves outboard of G, the two forces form a couple that rights the ship; if not, the couple capsizes it. Naval architects compress this geometry into a single number, the metacentric height GM, and every vessel needs it positive.",
      },
      {
        kind: "para",
        text: "One enemy hides in the tanks. Liquid in a partly filled tank slides toward the low side as the ship heels, acting like a mass deliberately shifted to make things worse — the free surface effect, equivalent to a virtual rise of the center of gravity. The Herald of Free Enterprise capsized at Zeebrugge in 1987 with 193 dead after water flooded in and sloshed freely. The defenses are simple: subdivide tanks with baffles, and keep them either pressed full or empty — half-full is the dangerous middle.",
      },
      {
        kind: "para",
        text: "Moving through water costs two currencies. Frictional resistance grows with wetted surface area and with speed; wave-making resistance comes from the pattern of waves the hull itself creates, and it climbs steeply as speed approaches the limit set by hull length — the reason a 300-metre container ship can be fast while a 15-metre boat with the same power cannot. Designers fight back with slender hulls, bulbous bows that cancel the bow-wave system, and ruthless deletion of appendages.",
      },
      {
        kind: "para",
        text: "A propeller is a rotating wing working in water, and water has a weakness: it boils at room temperature if the pressure drops far enough. Fast-moving blade tips can create low-pressure zones that vaporize water into bubbles, which then collapse violently against the blade — cavitation. It erodes propellers into spongy metal, radiates noise and steals thrust, so designers keep blade loading moderate and give large ships slow-turning, large-diameter propellers, since efficiency rises with diameter.",
      },
      {
        kind: "para",
        text: "Finally, a hull is a beam. Among waves it bends: riding a crest, the middle is supported and the ends sag; suspended between crests, the ends are supported and the middle hogs. Naval architects calculate these longitudinal bending moments and size the hull girder for the worst loading condition, which depends on how the ship is loaded. Bulk carriers carrying dense iron ore must spread cargo across holds carefully — ore loaded in the wrong pattern can break a hull — and the load line painted on the side, the Plimsoll mark, fixes the legal draft for each water and season.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Displacement",
        latex: "\\Delta = \\rho\\,\\nabla",
        meaning: "A vessel's weight equals the water density times the volume of hull below the waterline.",
      },
      {
        kind: "formula",
        name: "Metacentric height",
        latex: "GM = KB + BM - KG",
        meaning: "Stability from the keel: metacenter height above the center of gravity. Positive GM rights the ship; negative capsizes it.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the initial stability of a cargo vessel with KB = 3.0 m, KG = 4.2 m and BM = 2.4 m, before and after a 0.25 m free-surface correction from half-filled tanks.",
          "Recall: GM = KB + BM − KG, and the free surface effect acts as a virtual rise of G.",
          "Apply: GM = 3.0 + 2.4 − 4.2 = 1.2 m. After the correction, GM = 1.2 − 0.25 = 0.95 m.",
          "State the result: both values are stable — cargo ships typically sail with GM between about 0.5 and 1.5 m. Too little and the ship is tender, rolling deeply and dangerously; too much and it is stiff, snapping upright so hard that cargo lashings and crew suffer.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Container-ship loading software checking stability and hull bending for every voyage plan",
          "IMO rules requiring every merchant ship to carry an approved stability booklet",
          "Bulk-carrier loading manuals that spread dense ore to keep hull bending within limits",
          "Cruise-ship design balancing heavy superstructures against stability and comfort",
          "Offshore platform tow-outs and heavy lifts planned around metacentric height",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Buoyancy is not stability: a ship can float perfectly and still capsize if G sits above M. Never treat tanks casually — free surface has finished off ships that passed inspection. And respect the hull-girder arithmetic: a vessel balanced empty can be overloaded in one wrong hold by a single careless loading program. The sea rarely forgives arithmetic errors.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Displacement", def: "The weight of water a hull pushes aside — equal to the ship's total weight when floating." },
          { term: "Draft", def: "Vertical distance from waterline to keel: how deep a ship sits." },
          { term: "Metacentric height", def: "GM, the stability margin between metacenter and center of gravity; positive means self-righting." },
          { term: "Free surface effect", def: "Virtual rise of G caused by liquid shifting in partly filled tanks." },
          { term: "Cavitation", def: "Vapor bubbles forming and collapsing on propeller blades where pressure falls low enough." },
          { term: "Hogging and sagging", def: "Hull bending with the middle arched up or down between wave crests." },
          { term: "Load line", def: "The Plimsoll mark fixing maximum legal draft for each season and water density." },
        ],
      },
      {
        kind: "quiz",
        items: [
          {
            q: "A ship floats because:",
            options: [
              "it is lighter than water",
              "the weight of water it displaces equals its own weight",
              "its engines push it upward",
              "water cannot enter the hull",
            ],
            answer: 1,
            explain: "Archimedes: the hull sinks until the displaced water weighs exactly as much as the ship.",
          },
          {
            q: "Positive metacentric height means:",
            options: [
              "the ship is fast",
              "the center of gravity sits below the metacenter, so the ship rights itself when heeled",
              "the ship cannot roll",
              "cargo is evenly loaded",
            ],
            answer: 1,
            explain: "As the ship heels, buoyancy shifts outboard of gravity and the resulting couple pushes her upright.",
          },
          {
            q: "The free surface effect is dangerous because:",
            options: [
              "it cools the cargo",
              "shifting liquid acts like a virtual rise of the center of gravity",
              "it increases buoyancy",
              "it improves trim",
            ],
            answer: 1,
            explain: "Liquid sliding to the low side worsens heel exactly when it matters — hence baffled tanks kept full or empty.",
          },
          {
            q: "Cavitation damages propellers because:",
            options: [
              "water boils at low pressure and the bubbles collapse violently on the blades",
              "salt corrodes the bronze",
              "propellers spin too slowly",
              "the rudder blocks the flow",
            ],
            answer: 1,
            explain: "Low-pressure zones vaporize water; the collapsing bubbles hammer metal away and steal thrust.",
          },
        ],
      },
    ],
  },
]

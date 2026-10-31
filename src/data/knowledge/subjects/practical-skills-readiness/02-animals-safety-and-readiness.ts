/**
 * Knowledge Universe — Practical Skills & Readiness — Chapter 02: Animals, Safety & Readiness
 * 2 lessons · ~3,407 words
 * field: Practical Skills
 * legacy sources: everyday-practical.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Animal Companions, Safety & Readiness]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 every-pet-care-essentials — Pet Care Essentials: Dogs, Cats and the Vet
 *   02.2 every-emergency-preparedness-home — Emergency Preparedness at Home: Kits, Plans and Shutoffs
 */
import type { KnowledgeTopic } from '../../types'

export const practicalSkillsReadinessCh02: KnowledgeTopic[] = [
  {
    id: "every-pet-care-essentials",
    title: "Pet Care Essentials: Dogs, Cats and the Vet",
    domain: "Everyday Knowledge",
    field: "Practical Skills",
    branch: "Animal Companions",
    tier: "core",
    concepts: [
      "Nutrition: complete diets, portions, toxic foods",
      "Cats are obligate carnivores; dogs are flexible omnivores",
      "The RER formula behind feeding guides",
      "Enrichment: exercise, play and problem behavior",
      "Litter boxes and the n+1 rule",
      "Preventive vet care and the annual exam",
      "Positive reinforcement training basics",
    ],
    words: 1160,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A pet is a decade-plus commitment to another species' biology, and most pet problems — obesity, destructive behavior, litter-box strikes, dental disease — trace back to a handful of preventable causes. Pet care, the branch of Practical Skills behind this Everyday Knowledge topic, covers the essentials for the two animals that share most homes, dogs and cats: what they should eat and how much, what their behavior is asking for, and which vet visits are non-negotiable. The evolutionary and zoological background lives in the Library's Zoology subject; this lesson is the owner's manual.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Obesity affects roughly half of pet dogs and cats and shortens their lives measurably, while parvovirus and other vaccine-preventable diseases remain lethal where boosters lapse. Meanwhile the cheapest behavior medicine ever discovered — daily structured play — costs nothing but twenty minutes. Pet care is a domain where an hour of knowledge buys years of a companion's life.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Feed a complete diet and measure the portions. 'Complete' is a legal term on pet food labels in many countries, meaning the food meets established nutrient profiles for a life stage; anything labeled complementary or 'for intermittent feeding' is a topper, not a meal. Dogs are flexible omnivores; cats are obligate carnivores who need animal-derived nutrients (taurine, arachidonic acid) and cannot thrive on dog food or poorly formulated plant diets. The feeding guide on the bag is a starting estimate for the target weight, not a commandment — and it is calculated for the weight your pet should be, which for an already-overweight animal is not the weight it is.",
      },
      {
        kind: "para",
        text: "The toxic-foods list is short and non-negotiable: chocolate (theobromine — darker is worse), grapes and raisins (sudden kidney failure in some dogs, no known safe dose), onions and garlic (destroy red blood cells), xylitol sweetener in sugar-free gum and peanut butter (catastrophic insulin release in dogs), alcohol and raw dough, macadamia nuts, and cooked bones (they splinter). Lilies are lethal to cats even from pollen groomed off fur. If a toxic item is eaten, the call to a vet or poison line happens immediately — inducing vomiting at home is vet-directed, not folklore.",
      },
      {
        kind: "para",
        text: "Enrichment is a need, not a luxury. A dog's walk is a sensory event first and an exercise event second — the sniffing is the point, and a 'slow sniffari' tires a dog more honestly than a brisk march. Physical plus mental outlets (puzzle feeders, scatter feeding, training sessions, rotation of toys) prevent the boredom that becomes barking, chewing and digging; in cats, the classic trio of under-stimulation, territory stress and litter-box mismanagement accounts for most 'behavior problems'. The fifteen-minute play session with a wand toy, ending with a meal, mirrors a cat's natural hunt-catch-eat cycle and is the single best daily habit for an indoor cat.",
      },
      {
        kind: "para",
        text: "Litter logistics follow the cat's priorities: clean, quiet, and enough of them. The rule of thumb is one box per cat plus one, in separate quiet locations, unscented clumping litter scooped daily and fully changed weekly to fortnightly — a box that smells like a subway restroom to a cat's nose is a box that will be bypassed. Box size matters more than hooded fancy: most cats want a box at least one-and-a-half times their body length. A cat suddenly avoiding the box is a medical symptom first (urinary blockage in male cats is an emergency measured in hours) and a behavioral statement second.",
      },
      {
        kind: "para",
        text: "Preventive veterinary care is the quiet bargain: puppy and kitten vaccine series, annual or biannual exams as pets age, parasite prevention regional to your area, dental care (most pets have periodontal disease by middle age — bad breath is a finding, not a personality), and spay/neuter timed with your vet's guidance. The annual exam matters because animals hide illness evolutionarily: a dog still wagging with kidney disease is a dog whose bloodwork caught it early. Pet insurance or a dedicated savings buffer converts the emergency surgery from a financial tragedy into a hard week.",
      },
      {
        kind: "para",
        text: "Training is communication, and the science is unambiguous: positive reinforcement — rewarding wanted behavior — outperforms punishment, which suppresses behavior while teaching fear and damaging the relationship. Timing is the whole skill: the reward must land within a second or two of the behavior, which is why a marker ('yes!' or a clicker) bridges the gap. Train in short sessions, set the animal up to succeed (ask for sits where sits are easy), and reward the calm and polite behaviors you want more of. For a rescue or a shy animal, the rule is decompression: days to weeks of calm routine before asking the world of them.",
      },
      {
        kind: "para",
        text: "Know the emergency signs that mean now, not tomorrow: straining to urinate or no urine (male cats), unproductive retching with a distended abdomen (bloat in deep-chested dogs), pale or blue gums, labored breathing, collapse, seizures, suspected toxin ingestion, and any major trauma. Keep the vet's after-hours number and the nearest emergency clinic saved before you need them. For the long goodbye, quality-of-life scales used with a vet bring honesty to the hardest decision a pet owner makes.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Resting energy requirement",
        latex: "RER = 70 \\times W^{0.75}",
        meaning: "Kilocalories per day for an animal at rest, with W the weight in kilograms — the base every feeding guide is built on; neutered adults typically eat about 1.2 to 1.6 times RER.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: a 10 kg neutered indoor dog gets 240 g of kibble daily per the bag's guide but is gaining weight — how much should it actually eat?",
          "Recall the governing idea: daily needs scale with RER times an activity factor, and the bag's guide is an estimate for typical dogs, not a specific one.",
          "Apply: RER = 70 × 10^0.75 ≈ 70 × 5.6 ≈ 394 kcal. For a neutered indoor adult, a factor near 1.4 gives roughly 550 kcal a day. If the kibble supplies about 3.6 kcal per gram, that is 550 ÷ 3.6 ≈ 150 g daily — meaningfully less than the 240 g scoop, and treats count inside the total.",
          "State the result: a measured portion of about 150 g, treats budgeted within it, weight re-checked monthly at the same scale — and the target is a visible waist and palpable ribs, adjusted by trend rather than by the bag.",
        ],
      },
      { kind: "heading", text: "How to Actually Do It" },
      {
        kind: "list",
        items: [
          "Choose a food labeled complete for the right life stage; weigh portions with a kitchen scale, not a scoop's guess.",
          "Memorize the toxic list (chocolate, grapes, xylitol, onions, lilies for cats) and call the vet immediately on any suspicion.",
          "Give the dog daily sniff-walks; give the cat daily hunt-play-feed sessions with a wand toy.",
          "Litter: n+1 boxes, unscented clumping litter, scooped daily, in quiet separate spots.",
          "Keep the preventive schedule — vaccines, parasite control, dental checks, annual exams — and pre-save the emergency clinic's number.",
          "Train with a marker and treats within two seconds of the behavior; ignore or redirect what you do not want rather than punishing it.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Free-feeding is the direct route to the half of pets that are overweight, and 'he's just big-boned' is the rationalization that keeps them there. Punishment-based training suppresses signals without fixing causes — and a punished growl becomes a bite without warning. Assuming a cat's litter-box strike is spite is the error that delays treatment of a medical emergency. Skipping dental care costs years later in organ stress. And the biggest pitfall of all is the unbudgeted emergency: a savings buffer or insurance decided before the 2 a.m. clinic visit, not during it.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Obligate carnivore", def: "An animal, like the cat, that requires animal-derived nutrients to survive." },
          { term: "Complete diet", def: "Food legally formulated to meet all nutrient needs for a stated life stage." },
          { term: "RER", def: "Resting energy requirement — the baseline kilocalories per day, from which portions are scaled." },
          { term: "Enrichment", def: "Structured outlets for natural behavior — sniffing, hunting, chewing, problem-solving." },
          { term: "Marker training", def: "Using a consistent signal to pinpoint the exact behavior a reward is paying for." },
          { term: "Decompression", def: "A quiet adjustment period for new or stressed animals before demands and introductions." },
          { term: "Quality-of-life scale", def: "A structured vet tool scoring eating, comfort and joy to guide end-of-life decisions." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Which pairing of species and diet requirement is correct?",
            options: ["Cats are omnivores; dogs are carnivores", "Cats are obligate carnivores; dogs are flexible omnivores", "Both are strict carnivores", "Both thrive on any grain-free food"],
            answer: 1,
            explain: "Cats require animal-derived nutrients like taurine; dogs evolved alongside humans as adaptable omnivores.",
          },
          {
            q: "A dog eats sugar-free gum from a coat pocket. The sweetener xylitol is dangerous because it:",
            options: ["Causes vomiting only", "Triggers a massive insulin release and hypoglycemia", "Is a slow toxin with no acute signs", "Only affects cats"],
            answer: 1,
            explain: "Xylitol is a veterinary emergency in dogs — call the vet or poison line immediately, before symptoms.",
          },
          {
            q: "For three cats, the litter-box guideline suggests at least:",
            options: ["One large shared box", "Two boxes", "Four boxes (n+1)", "Six boxes, one per room"],
            answer: 2,
            explain: "One box per cat plus one spare, in separate quiet locations, prevents the territorial standoffs that end in bypassed boxes.",
          },
          {
            q: "The mathematical core of pet feeding guides is:",
            options: ["Weight in kilograms divided by ten", "RER = 70 × W^0.75, scaled by an activity factor", "A fixed cup per breed", "Free-choice feeding"],
            answer: 1,
            explain: "Resting energy requirement is the veterinary baseline — portion math that explains why the bag's scoop often overfeeds.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "The Zoology subject covers the animal kingdom these companions belong to, and Nutrition in Health & Wellness covers the human side of feeding. In this field, the cleaning lesson matters for safe disinfection around pets (many products need rinsing), and the emergency-preparedness lesson covers planning for animals in a disaster.",
        tone: "path",
      },
    ],
  },
  {
    id: "every-emergency-preparedness-home",
    title: "Emergency Preparedness at Home: Kits, Plans and Shutoffs",
    domain: "Everyday Knowledge",
    field: "Practical Skills",
    branch: "Safety & Readiness",
    tier: "core",
    concepts: [
      "Plan for the disruptions your region actually produces",
      "The kit: water, food, meds, light, power, documents",
      "Water arithmetic: four litres per person per day",
      "The family plan: meeting points and an out-of-area contact",
      "Utility shutoffs: water, gas, main breaker",
      "The home hazard hunt and the drill habit",
      "Pets, neighbors and the go-bag",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Emergencies are not abstract: almost everyone will eventually live through a multi-day power outage, a burst pipe, a storm warning, or an evacuation order, and the difference between an inconvenience and a crisis is almost never heroics — it is preparation done in advance, calmly. Home preparedness, the branch of Practical Skills behind this Everyday Knowledge topic, covers the three pillars: a kit that lets a household shelter in place, a plan that reunites it if separated, and the hands-on knowledge of how to shut off the house's own utilities. The medical half of emergencies — bleeding, burns, choking — is covered by the First Aid & Emergency Care subject in the Library; this lesson is everything around the bandages.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "After nearly every disaster, the survivors' reports converge on the same short list: water they could not get, medications they could not reach, phones that died, and information they could not receive. Each of those is a shelf, a list and a battery away from solved. Preparedness is not doomsday culture — it is the difference between a household that waits for help and one that is briefly fine on its own while help sorts out who needs it most.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Begin with a local hazard list, because preparedness is regional. Is it earthquakes, hurricanes, flooding, wildfire, extreme cold, or — most universal — extended power outage? Every region's emergency-management agency publishes its likely scenarios and recommendations; five minutes on that site replaces an hour of generic prepping. The plan that matters in tornado country (a shelter room and shoes by the bed, because post-tornado debris is the injury mechanism) is different from wildfire country (a packed car and an evacuation map) — but water, food, light, power, documents and communication sit at the center of all of them.",
      },
      {
        kind: "para",
        text: "Water is the first priority because it is the first thing to fail and the hardest to improvise. Store at least four litres per person per day — two for drinking, two for hygiene and food — for a minimum of three days, two weeks where earthquakes or isolation make resupply slow. Tap water in sealed containers or purpose-bought bottles rotates on a six-to-twelve-month schedule; the fill line of a hot-water tank (30 to 200 litres, depending on the tank) is a built-in reserve everyone forgets they own, and knowing how to drain it (shut the inlet, open a downstream tap, drain from the tank's spigot) is a five-minute skill. A filter straw or purification tablets turn questionable water into drinking water and cost less than a pizza.",
      },
      {
        kind: "para",
        text: "The rest of the kit is a checklist, not a philosophy: food that needs no cooking and that the household will actually eat (canned goods with a manual can opener — electric openers die with the power — plus shelf-stable staples); a week of prescription medications and copies of prescriptions; flashlights or headlamps with spare batteries (candles are a fire risk in exactly the moments you'd use them); a battery or crank radio for official information when networks jam; power banks kept charged, plus cables for every phone in the house; a basic first aid kit plus a first aid lesson; hygiene supplies; cash in small bills for the day card readers are down; sturdy shoes, work gloves and dust masks near the bed (earthquake logic that serves any debris); pet food and a pet carrier; and a whistle, which shouts longer than a voice can.",
      },
      {
        kind: "para",
        text: "Documents survive or die by preparation: photocopies or encrypted scans of IDs, insurance policies, property deeds, prescriptions, and a page of key contacts, stored both physically (in the go-bag, in a zip bag) and in the cloud. After a house fire or flood, being able to prove who you are and what you insured is the difference between a claim process and a nightmare. Add a household inventory — a phone video walking each room, narrating valuables — refreshed annually; it takes ten minutes and doubles the value of an insurance claim.",
      },
      {
        kind: "para",
        text: "The plan answers three questions before they are urgent. Where do we meet if we cannot go home — one point near home, one outside the neighborhood? Who is the out-of-area contact every family member calls when local lines are jammed (long-distance routes often survive when local ones fail, and one relay person beats twenty failed direct calls)? Where are the shutoffs and who knows how to turn them? Write it on a card, put copies in wallets and backpacks, and — the step everyone skips — practice it twice a year, because a plan that exists only on paper is a rumor.",
      },
      {
        kind: "para",
        text: "Utility shutoffs are the hands-on exam. Water: the main valve where the supply enters (the plumbing lesson covers the details). Electricity: the main breaker in the panel — off if water is near outlets, before flooding touches appliances, and never standing in water while touching the panel. Gas: the valve on the meter, turned a quarter with a wrench kept zip-tied beside it — and the rule is strict: shut gas off when you smell it, hear hissing, or see a meter spinning after an earthquake, and only the utility turns it back on. If you do not know where your meter and valve are, that is tomorrow morning's five-minute errand.",
      },
      {
        kind: "para",
        text: "Two multipliers complete the system. Neighbors: in every disaster, the first responders are the people next door — a block that knows who has a generator, who is elderly, who has medical needs, outperforms any individual's stockpile; organizing a contact list over one shared meal is the highest-return preparedness hour there is. And the go-bag: a backpack per person with the 72-hour essentials (water, food, medications, documents, cash, clothes for the season, charger, flashlight, comfort item for children) staged where it can be grabbed in sixty seconds — because the evacuation order that arrives without warning is the scenario where minutes matter.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Water storage",
        latex: "W = n \\times r \\times d",
        meaning: "Litres needed equal people n times daily rate r (about 4 L each) times days d — a family of four needs 48 litres for three days, about 500 for two weeks.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: a family of four (one on daily medication, one cat) in an earthquake-prone region assembles a two-week shelter-in-place capability — how much water, and what are the first three purchases?",
          "Recall the governing idea: four litres per person per day, plus pets; two weeks of self-sufficiency where resupply may be slow; medications and documents are the irreplaceable items.",
          "Apply: water is 4 people × 4 L × 14 days = 224 litres, plus a few litres for the cat — a stack of 15-litre bottles plus the hot-water tank's reserve covers it. First purchases: a manual can opener and a fortnight of no-cook food; a 14-day buffer of the prescription with its pharmacy's refill plan; a crank radio plus two headlamps and batteries.",
          "State the result: about 240 litres of water, a food shelf that rotates through normal eating, a document zip-bag with cloud copies, and a practiced plan — the family rides out two weeks of disrupted infrastructure as a staycation with worse lighting, rather than as a crisis.",
        ],
      },
      { kind: "heading", text: "How to Actually Do It" },
      {
        kind: "list",
        items: [
          "Look up your region's top three hazards tonight and tailor the kit to them.",
          "Store four litres per person per day, minimum three days, two weeks in slow-resupply regions; note the hot-water tank as backup.",
          "Assemble the checklist: no-cook food, can opener, meds, flashlights, crank radio, power banks, cash in small bills, pet supplies.",
          "Write the plan card: two meeting points, one out-of-area contact, school and workplace numbers; copies in every wallet and go-bag.",
          "Locate and label the water main, gas valve and main breaker this week; zip-tie a gas wrench to the meter.",
          "Practice twice a year: a ten-minute drill, a water-rotation day, and a phone video of each room for insurance.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The kit that is never rotated quietly expires — medications lapse, batteries corrode, water goes stale, and the emergency reveals a museum. Candles cause fires in exactly the post-disaster conditions that make them tempting. Storing everything in one distant corner fails the evacuation scenario the go-bag exists for. Unpracticed plans dissolve under adrenaline — households that never walked the meeting-point route do not walk it at 3 a.m. And buying gear while skipping the neighbor relationship inverts the real order of help: in every disaster on record, the first rescuers live next door.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Shelter in place", def: "Staying safely at home through a disruption, supported by stored supplies." },
          { term: "Go-bag", def: "A packed 72-hour kit per person, staged for a sixty-second departure." },
          { term: "Out-of-area contact", def: "The distant relay person everyone calls when local lines are overloaded." },
          { term: "Water rotation", def: "Replacing stored water every six to twelve months to keep it fresh." },
          { term: "Gas shutoff valve", def: "The quarter-turn valve on the meter; closed on smell, hiss or post-quake leak, reopened only by the utility." },
          { term: "Hazard hunt", def: "A walkthrough securing water heaters, tall furniture and loose items against the region's likely shaking or wind." },
          { term: "Household inventory", def: "A narrated video of possessions that anchors an insurance claim after loss." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "For drinking and hygiene, emergency water storage is usually recommended at:",
            options: ["One litre per person per day", "Four litres per person per day", "Twenty litres per household", "Any amount, since rationing works"],
            answer: 1,
            explain: "About four litres per person per day — half for drinking, half for hygiene and food — for at least three days.",
          },
          {
            q: "When should a household shut off its gas at the meter?",
            options: ["After any earthquake, automatically", "When you smell gas, hear hissing, or suspect a leak — and the utility restores it", "Never; only the fire service may", "Only during evacuation"],
            answer: 1,
            explain: "The valve closes on evidence of a leak; blanket shutoffs strand households, and only the utility safely restores supply.",
          },
          {
            q: "A family of four preparing for three days needs about how much stored water?",
            options: ["12 litres", "24 litres", "48 litres", "400 litres"],
            answer: 2,
            explain: "4 people × 4 L × 3 days = 48 litres — the arithmetic that sizes the water shelf.",
          },
          {
            q: "The role of an out-of-area contact in the family plan is to:",
            options: ["Send supplies by post", "Act as a relay when local phone lines are jammed but long-distance routes work", "Replace emergency services", "Store your documents"],
            answer: 1,
            explain: "One working long-distance number reunites a scattered family when twenty local calls fail — which is why the number lives in every wallet.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "The First Aid & Emergency Care subject in Health & Wellness is the essential companion — bleeding, burns, choking and CPR. The home-electrical lesson here covers the panel in detail, the plumbing lesson the water main, and the pet-care lesson the animal side of every plan. For the science of the hazards themselves, Meteorology and Geology & Earth Science explain what your region is preparing for.",
        tone: "path",
      },
    ],
  },
]

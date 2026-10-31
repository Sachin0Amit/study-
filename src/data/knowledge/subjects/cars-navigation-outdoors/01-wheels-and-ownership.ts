/**
 * Knowledge Universe — Cars, Navigation & the Outdoors — Chapter 01: Wheels & Ownership
 * 2 lessons · ~3,085 words
 * field: Car & Driving
 * legacy sources: everyday-practical.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Car & Driving]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 every-car-maintenance-basics — Car Maintenance Basics: Oil, Tires, Brakes and Warning Lights
 *   01.2 every-buying-used-car — How to Buy a Used Car Without Getting Burned
 */
import type { KnowledgeTopic } from '../../types'

export const carsNavigationOutdoorsCh01: KnowledgeTopic[] = [
  {
    id: "every-car-maintenance-basics",
    title: "Car Maintenance Basics: Oil, Tires, Brakes and Warning Lights",
    domain: "Everyday Knowledge",
    field: "Car & Driving",
    branch: "Wheels & Ownership",
    tier: "core",
    concepts: [
      "The owner's manual schedule beats the shop's upsell",
      "Tire pressure: the door placard, checked cold and monthly",
      "Tread depth: 8 mm new, 3 mm wise, 1.6 mm illegal",
      "Oil: interval, level and color between changes",
      "Brake wear you can hear, feel and measure",
      "Warning-light triage: red means stop, amber means soon",
      "Cost per kilometre: what the car really costs to run",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A car is the second most expensive thing most people ever own, and it comes with a service manual that almost nobody opens. Preventive maintenance, the branch of Car & Driving behind this Everyday Knowledge topic, is not a mystery cult — it is a calendar, a ten-minute monthly walk-around, and the ability to read a handful of signals before they become invoices. The engineering of how the machine itself works lives in the Automobile Engineering subject; this lesson is about owning one.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Tires and brakes are the only four palm-sized patches connecting you to the road, and a skipped oil change can turn a cheap service into an engine. Meanwhile a maintained car with records sells for noticeably more than the identical neglected one. Ten minutes a month is the cheapest insurance you will ever buy.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The maintenance schedule printed in the owner's manual — not the sticker a shop puts on your windshield — is the authority. Manufacturers list intervals by time or distance, whichever comes first, because oil and coolant age even when the car sits. Check whether your driving counts as severe service: short trips under ten minutes, dusty roads, towing, or heavy stop-and-go traffic all shorten intervals, and most city driving qualifies.",
      },
      {
        kind: "para",
        text: "Oil is the engine's blood, and checking it takes a minute: park level, engine cold or rested, pull the dipstick, wipe, reinsert, read. The level should sit between the marks, and a top-up of half a litre at a time is fine — an engine that regularly needs a litre between changes is burning or leaking it, which is information worth having. Modern cars commonly run 8,000 to 16,000 km between changes (or 6 to 12 months); the ancient 5,000-km rule survives mostly because it sells oil changes.",
      },
      {
        kind: "para",
        text: "Tires carry the whole safety case. Correct pressure is printed on the placard stuck to the driver's door jamb — typically 220 to 240 kPa (32 to 35 PSI) — never on the tire's sidewall, which shows the maximum the tire can hold. Check cold, monthly, including the spare, because pressure falls about 3 to 4 kPa for every 5-6 °C drop in temperature — the reason the warning light appears at the first cold snap. Tread starts near 8 mm new; below about 3 mm wet braking deteriorates sharply, and 1.6 mm is the legal minimum in most countries. Slide a coin into the groove: if the outer band is fully visible, the tire is done.",
      },
      {
        kind: "para",
        text: "Brakes announce themselves. A high squeal from a wheel is the wear indicator — a small metal tab designed to sing when the pads approach their limit, giving you weeks of notice. A grinding sound is metal on metal: the friction material is gone and each drive is machining the rotors, so book the earliest appointment and take it gently. A pulsing brake pedal usually means warped or unevenly deposited rotors, and a pedal that sinks slowly to the floor under steady pressure is a hydraulic problem — that one is a stop-driving-now event.",
      },
      {
        kind: "para",
        text: "Fluids tell stories through color. Check the coolant overflow tank — bright green, pink or orange, with the level between the marks — and glance under the car after it has parked overnight. A clear puddle near the rear is normal air-conditioning condensation; a rainbow sheen means oil; a sweet-smelling green or pink puddle means coolant, and a brake-fluid leak feels oily and slides between fingers. Washer fluid is the only one you should ever top up without a second thought.",
      },
      {
        kind: "para",
        text: "Warning lights follow a traffic-light logic. Red — oil pressure, engine temperature, brake system, charging battery — means pull over safely and stop the engine; minutes of driving can cost an engine. Amber means soon: a steady check-engine light can be anything from a loose fuel cap to a misfire, and a $20 OBD-II reader plugged under the dash will read the code and tell you which. A flashing check engine light is a misfire active enough to destroy the catalytic converter, and it moves you to the red category. The tire-pressure light is amber but deserves same-day attention.",
      },
      {
        kind: "para",
        text: "Split the work honestly. Wiper blades (six to twelve months of life, longer if they streak), washer fluid, cabin and engine air filters, and most bulbs are ten-minute jobs with a video tutorial. Brake work, timing belts, suspension, and anything involving the fuel or safety systems belongs to a professional — not because the fasteners are secret, but because the failure mode of a mistake is severe. Keep every receipt either way: a service history is worth real money at resale.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Fuel cost per kilometre",
        latex: "c = \\frac{p}{e}",
        meaning: "Cost per km equals fuel price p per litre divided by efficiency e in km per litre — the number that makes commuting and road-trip budgets concrete.",
      },
      {
        kind: "formula",
        name: "Annual running cost",
        latex: "C_{yr} = \\frac{K}{e} \\cdot p + M",
        meaning: "Annual cost for K kilometres: fuel plus maintenance M (oil changes, tires amortized, consumables) — the honest line in a household budget.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: a driver covering 15,000 km a year in a car averaging 12 km/L, with fuel at 1.70 per litre, wants a realistic running-cost line for fuel and basic maintenance.",
          "Recall the governing idea: annual fuel spend is distance divided by efficiency times price, and maintenance is estimated from the schedule — two oil changes, tires amortized over their life.",
          "Apply: fuel is 15,000 ÷ 12 = 1,250 litres, costing 1,250 × 1.70 = 2,125 a year. Add two oil changes at 60, and a 640 tire set lasting 60,000 km, which amortizes to 160 a year: roughly 2,345 all-in.",
          "State the result: about 2,345 per year, or near 0.16 per kilometre before insurance and depreciation — a number that makes a 40-km round trip cost about 6.40 in true wear and fuel, and makes moving closer to work legible as money.",
        ],
      },
      { kind: "heading", text: "How to Actually Do It" },
      {
        kind: "list",
        items: [
          "Monthly, ten minutes: walk the car, check all lights and wipers, read tire pressures cold against the door placard, pull the oil dipstick, and glance at the coolant tank.",
          "Every oil change interval per the manual: rotate the tires (about every 10,000 km) so they wear evenly, and have the brakes inspected while the wheels are off.",
          "Seasonally: test the battery before winter (batteries live three to five years and cold exposes the weak), top up washer fluid rated for freezing, and re-check pressures after big temperature swings.",
          "When a warning appears: red — stop safely, engine off; amber steady — read the OBD code this week; amber flashing — treat as red.",
          "Keep a folder or app log of every service; hand it to the next buyer and watch their offer rise.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Inflating tires to the sidewall number makes them wear in the center and ride harshly — the placard is the answer. Overfilling oil is a real fault: the crankshaft whips it into foam and oil pressure drops, so never guess a whole litre in. Ignoring the tire-pressure light because the car feels fine misses the point — a slow leak is invisible until the sidewall overheats. And never trust a sticker from a shop over the manual: upselling intervals is a business model.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Preventive maintenance", def: "Servicing on a schedule before parts fail, rather than after." },
          { term: "Placard pressure", def: "The tire pressure printed on the driver's door jamb — the correct one, unlike the sidewall maximum." },
          { term: "Tread depth", def: "Remaining groove depth; 8 mm new, replace near 3 mm for wet grip, 1.6 mm legal floor." },
          { term: "Wear indicator", def: "A metal tab on brake pads that squeals when the friction material is nearly spent." },
          { term: "OBD-II", def: "The standard diagnostic port under the dash; a cheap reader retrieves fault codes." },
          { term: "Severe service schedule", def: "The shortened maintenance interval for short trips, dust, towing, or heavy city driving." },
          { term: "Cost per kilometre", def: "Fuel price divided by efficiency, plus amortized maintenance — the true price of driving." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "The correct tire pressure for your car is found:",
            options: ["On the tire sidewall", "On the driver's door jamb placard", "Painted inside the fuel door of every car", "Whatever the shop sets it to"],
            answer: 1,
            explain: "The sidewall shows the tire's maximum, not the car's recommendation — the placard is engineered for the vehicle's weight and handling.",
          },
          {
            q: "A red warning light (oil pressure, temperature, brake) means:",
            options: ["Continue driving but book a service this month", "Pull over safely and stop the engine", "It can be ignored until the next fuel stop", "Only matters on highways"],
            answer: 1,
            explain: "Red lights flag active damage: minutes of driving with no oil pressure or an overheating engine can end in a replacement engine.",
          },
          {
            q: "A high-pitched squeal from one wheel that stops when you brake lightly is most likely:",
            options: ["The wear indicator announcing thin pads", "A loose belt", "Normal tire noise", "The radio antenna"],
            answer: 0,
            explain: "The indicator tab rubs the rotor when pads near their limit — you have weeks, not months, to replace them.",
          },
          {
            q: "Driving 15,000 km a year at 12 km/L with fuel at 1.70 per litre, annual fuel spend is about:",
            options: ["900", "1,250", "2,125", "4,400"],
            answer: 2,
            explain: "15,000 ÷ 12 = 1,250 litres, and 1,250 × 1.70 = 2,125 — the arithmetic that makes car costs real.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Natural next step: the used-car buying lesson for the negotiation and inspection side of ownership, and the credit-score lesson if financing is involved. For how engines, transmissions and brakes are engineered, tour the Automobile Engineering subject.",
        tone: "path",
      },
    ],
  },
  {
    id: "every-buying-used-car",
    title: "How to Buy a Used Car Without Getting Burned",
    domain: "Everyday Knowledge",
    field: "Car & Driving",
    branch: "Wheels & Ownership",
    tier: "core",
    concepts: [
      "Depreciation: let the first owner pay the curve",
      "Total cost of ownership, not sticker price",
      "Paperwork first: title, VIN history, liens",
      "The cold-start inspection and the test drive",
      "The pre-purchase inspection is non-negotiable",
      "Negotiate the total, never the monthly payment",
      "Hidden costs: insurance, transfer, tires, first service",
    ],
    words: 1180,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A used-car sale is a meeting between someone who knows the car and someone who hopes to. Buying well, the practical half of Car & Driving covered in this Everyday Knowledge topic, is about flipping that information gap: verifying history before emotion, inspecting before negotiating, and pricing the next three years of the car rather than the sticker. Do those in order and the used market stops being a casino and becomes a bargain bin — because depreciation is a force working in your favor.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "A new car can lose 15 to 20 percent of its value the day it leaves the dealer and roughly 40 to 50 percent by year four — while modern vehicles routinely outlast 200,000 km. Buying at three to five years old means someone else paid the steep part of the curve for a machine with most of its life left. The entire skill is verification.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Start with model research, not listings. Reliability varies enormously between models, and owner-survey data surfaces the lemons years before any single seller will. Pick two or three candidate models with a known record, learn their common failure points and their service schedule, and only then start shopping — a buyer who asks about the timing-belt interval reads as a buyer who cannot be fed a story.",
      },
      {
        kind: "para",
        text: "Budget honestly using total cost of ownership, not price. Insurance, registration, fuel at the car's real consumption, tires, and a repair reserve all ride on top of the purchase. A rough guardrail keeps the full transport line — payment plus insurance plus fuel — under about 15 to 20 percent of take-home pay. The Personal Finance lessons in this domain cover the budgeting machinery; the car lesson is simply that the sticker is the entry fee, not the cost.",
      },
      {
        kind: "para",
        text: "Paper before feelings. Get the VIN (stamped on the dashboard corner and the door jamb) and buy a vehicle-history report: it lists accidents, title brands, service records, and — critically — whether a bank still holds a lien. The seller must have the title in their own name; a car being sold for a friend, or a title that arrives later, is a walk-away no matter how good the story. A salvage or rebuilt title means an insurer once declared the car economically dead — occasionally fine, never a beginner purchase.",
      },
      {
        kind: "para",
        text: "The inspection rewards patience. Arrive to a cold engine and watch the start: blue exhaust is burning oil, persistent white smoke is coolant intruding — often a head-gasket death sentence — and brief white vapor on a cold morning is normal. Then walk the body: paint overspray on rubber trim, uneven panel gaps, or misaligned hood and doors tell of crash repairs; mismatched bolts say something was replaced. Check the tire wear is even across each tire (feathered edges hint at alignment or suspension trouble), look under the mats and the car for rust, and switch on every single electrical thing.",
      },
      {
        kind: "para",
        text: "Drive it for at least thirty minutes, highway included. The test is not how it feels on the straight — every car feels fine there. Brake firmly from speed with hands light on the wheel: pulling means caliper or alignment trouble; a pulsing pedal means warped rotors. Listen over bumps for knocks, and note whether the steering wheel sits centered going straight. At the end, turn the engine off, restart it hot, and glance back under the car for fresh drips.",
      },
      {
        kind: "para",
        text: "The pre-purchase inspection — one to two hundred at an independent mechanic of your choosing — is the cheapest insurance in the whole transaction, and the seller's reaction to the request is itself data. A private seller or dealer who resists a PPI is telling you what the inspection would have found. Ask the shop to scan the OBD codes and put their findings in writing; on a negotiation, that paper is worth its weight in discount.",
      },
      {
        kind: "para",
        text: "Negotiate the total price, never the monthly payment — monthly numbers are where interest and fees hide. Anchor 10 to 20 percent under asking with reasons attached: worn tires at the limit are an 800-line item, the major service is due, the history has a gap. Present the number, then stop talking; silence does more work than persuasion. Have a maximum written down before you arrive, and mean it: the deal you walk away from is tuition, not a loss. Also get an insurance quote on the exact VIN before committing — the premium difference between two similar cars can be surprising.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Total cost of ownership",
        latex: "TCO = P + R + I + F - S",
        meaning: "Purchase price P, plus repairs R, insurance I and fuel F over the holding period, minus eventual resale S — the number the sticker hides.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: two identical-model listings — car A at 9,000 with full service records and new tires, car B at 7,500 with tires at 3 mm and no records. Which is cheaper over three years?",
          "Recall the governing idea: compare total cost of ownership over the holding period, including the work each car needs immediately and a risk premium for unknowns.",
          "Apply: car B needs 800 of tires now and a 600 major service, bringing it to 8,900 — nearly car A's price — before adding a repair reserve for the unknown history, which any prudent buyer sets at several hundred per year. Car A also carries records that support resale.",
          "State the result: the 1,500 discount shrinks to 100 of hard costs plus an unknown-risk premium, so car A wins. The general law: cheap examples of a model converge upward in cost; good ones do not.",
        ],
      },
      { kind: "heading", text: "How to Actually Do It" },
      {
        kind: "list",
        items: [
          "Shortlist reliable models, learn their weak points and service intervals, and set a written maximum before viewing anything.",
          "Verify paperwork: title in the seller's name, no liens, history report clean, odometer consistent with pedal and seat wear.",
          "Inspect cold: exhaust colors, panel gaps, even tire wear, rust, every switch and button — then a thirty-minute drive with a firm brake test.",
          "Book the pre-purchase inspection at your own mechanic and read the codes; treat refusal as an answer.",
          "Negotiate total price with comps printed out, anchor low with reasons, then let silence work; confirm insurance on the VIN before signing.",
          "Budget the first month: transfer and registration fees, an immediate fluid-and-filter service, and any tires the inspection flagged.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Falling in love before inspecting hands all negotiating power to the seller — decide you are buying a model, not a car, until the PPI clears. Buying at night or in the rain hides paint mismatches, dents and leaks. The monthly-payment question is a trap in any negotiation, and a long loan on an aging car builds negative equity. And an odometer reading far below the wear on the pedals, wheel and driver's seat is the classic rollback signature — walk.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Depreciation", def: "The fall in market value over time — steepest in the first three years, a gift to used buyers." },
          { term: "Vehicle history report", def: "A VIN-keyed record of accidents, title brands, liens and service; the first thing to buy." },
          { term: "Salvage title", def: "A brand marking a car an insurer wrote off; cheap for experts, hazardous for beginners." },
          { term: "Pre-purchase inspection", def: "An independent mechanic's assessment of a specific car before you commit — the best money in the deal." },
          { term: "Comps", def: "Comparable listings for the same model, trim, year and distance; the factual basis of your offer." },
          { term: "Total cost of ownership", def: "Purchase plus running costs minus resale, over the time you hold the car." },
          { term: "Negative equity", def: "Owing more on a loan than the car is worth — the standard result of long loans on fast-depreciating vehicles." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "The steepest part of a car's depreciation happens:",
            options: ["Between years five and eight", "In the first one to three years", "Evenly across its whole life", "Only above 150,000 km"],
            answer: 1,
            explain: "A new car can drop 15-20 percent immediately and around half by year four — which is why three-to-five-year-old used cars are the value zone.",
          },
          {
            q: "Persistent white smoke from a warm engine most often signals:",
            options: ["Burning oil", "Coolant entering the combustion chambers", "Too much fuel", "A clean, efficient engine"],
            answer: 1,
            explain: "Sweet-smelling persistent white smoke is the classic head-gasket symptom — one of the few instant walk-aways on an inspection.",
          },
          {
            q: "A private seller refuses a pre-purchase inspection at your mechanic. You should:",
            options: ["Accept — the car is probably fine", "Treat the refusal itself as the finding and walk", "Offer to split the cost", "Only proceed with a bigger discount"],
            answer: 1,
            explain: "The refusal tells you what the inspection would have found; the small discount is not worth the unknown.",
          },
          {
            q: "In any car-price negotiation you should focus on:",
            options: ["The monthly payment", "The total price of the car", "The trade-in value first", "The length of the loan"],
            answer: 1,
            explain: "Monthly numbers hide interest, fees and term length; negotiate one transparent total, then arrange financing separately.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Follow with the car-maintenance lesson to protect the purchase, and the credit-score topic before financing anything. The Personal Finance branch of this domain covers budgeting; Behavioral Economics in the Library explains why the walk-away is psychologically hard — and why writing your maximum down works.",
        tone: "path",
      },
    ],
  },
]

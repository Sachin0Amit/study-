/**
 * Knowledge Universe — Home Repair & Everyday Machines — Chapter 01: Around the House
 * 4 lessons · ~6,532 words
 * field: Home & Repair
 * legacy sources: everyday-practical.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Home & Repair]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 every-home-toolkit-basic-repairs — The Home Toolkit: Screws, Anchors and Your First Real Repairs
 *   01.2 every-home-plumbing-basics — Home Plumbing: Faucets, Toilets and Drains
 *   01.3 every-home-electrical-safety — Home Electrical Safety: Breakers, Outlets and Cords
 *   01.4 every-painting-walls — Painting Walls Like a Professional
 */
import type { KnowledgeTopic } from '../../types'

export const homeRepairMachinesCh01: KnowledgeTopic[] = [
  {
    id: "every-home-toolkit-basic-repairs",
    title: "The Home Toolkit: Screws, Anchors and Your First Real Repairs",
    domain: "Everyday Knowledge",
    field: "Home & Repair",
    branch: "Around the House",
    tier: "core",
    concepts: [
      "Ten hand tools cover most household jobs",
      "The cordless drill: one tool, half the tasks",
      "Drywall is weak; studs and anchors carry the load",
      "Anchor types matched to weight and wall",
      "Measure twice: the V-mark, the level, the story stick",
      "Loose hinges, squeaks and nail holes in minutes",
      "Knowing the limit: electricity, gas, heights, structure",
    ],
    words: 1160,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Most household repairs are five screw-turns and some confidence, separated from disaster only by owning the right ten tools and knowing which wall you are drilling into. Home repair, the branch of Home & Repair behind this Everyday Knowledge topic, starts with a modest toolkit and three habits: measure twice, match the fastener to the load, and know which jobs belong to a professional. This is the lesson that turns a wobbling shelf or a squeaking door from a landlord's problem into a Saturday morning.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "A basic toolkit costs about as much as one service-call visit and pays for itself the first time it is used. Every renter eventually hangs something heavy; every homeowner inherits a slow avalanche of small fixes. The people who handle them calmly are not handier by nature — they own a stud finder and a level, and they check before they drill.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The core hand tools: a 5-metre tape measure, a claw hammer, a set of slotted and Phillips screwdrivers (or one handle with interchangeable bits), an adjustable wrench, slip-joint pliers, needle-nose pliers, a utility knife with spare blades, a torpedo level, a magnetic stud finder, and a headlamp. Add duct tape and painter's tape, superglue, wood glue, a tube of spackle, an assortment of screws and wall anchors, and sandpaper from 120 to 220 grit. Mid-range brands from any hardware store last decades; buy the drill used before buying anything cheap twice.",
      },
      {
        kind: "para",
        text: "The single most transformative purchase is a cordless drill-driver. It drives screws, bores pilot holes, stirs paint, and with the right bit drills into wood, metal and masonry. A 12-volt model handles apartment life; an 18-to-20-volt one earns its keep for fences, decks and concrete. Learn the clutch: low numbered settings for small screws in soft material, higher for wood, and the drill setting only for making holes. Pilot holes slightly smaller than the screw's shaft stop wood from splitting and keep screws from wandering — and pressing firmly along the screw's axis stops the bit from camming out and stripping the head.",
      },
      {
        kind: "para",
        text: "Walls decide everything. Drywall (plasterboard) is soft gypsum that a fingernail can dent: fine for a picture nail, hopeless for a shelf. The wooden studs behind it — spaced every 40 to 60 cm (16 to 24 inches) — are the real structure, and a screw driven into a stud can carry tens of kilograms alone. Find them by knocking (a stud sounds dull and solid, the hollow wall rings), with a magnetic finder that snaps to the screws of previous drywall work, or with an electronic finder. Windows and doors are framed with doubled studs called kings and jacks; there is almost always solid wood within a hand's width of an opening.",
      },
      {
        kind: "para",
        text: "Between studs, anchors bridge the gap. Lightweight plastic expansion anchors hold a few kilograms in drywall and are what most picture-hanging kits include. Self-drilling threaded anchors bite into the wall like a screw and carry more. For serious weight — a wall-mounted TV, a full bookshelf bracket — toggle bolts fold flat to pass through the hole, then spring open inside the wall, clamping the drywall between wings and screw head. Choose an anchor rated at least three to four times the actual load, and in masonry or brick use proper plastic plugs with a hammer drill. Ceilings follow different physics: a heavy light or a fan must hang from the box or joist, never from drywall anchors.",
      },
      {
        kind: "para",
        text: "Measuring is a discipline, not a formality. Mark with a V instead of a dot so the point of the V is exactly where the line crosses; measure with the tape hook hooked on the edge, and burn an extra ten centimetres when measuring inside corners because the tape case lies. Check level on everything — a shelf 2 mm out reads crooked across a wall, and errors compound when pieces stack. For repeated measurements, transfer the dimension to a story stick (any offcut of wood marked once) so every instance shares the same error instead of inventing new ones.",
      },
      {
        kind: "para",
        text: "A dozen common repairs unlock immediately: tightening the screws on loose door hinges and cabinet pulls (the secret is removing one screw, packing the hole with a matchstick and glue, and reinserting), silencing squeaky hinges with a drop of oil or a rub of wax, patching nail holes with spackle and a swipe of sanding, re-securing a wobbling chair by gluing and clamping the loose joint, unsticking a sticky window by waxing its tracks, and replacing the washer in a dripping tap — the plumbing lesson in this branch covers that one in full.",
      },
      {
        kind: "para",
        text: "Respect four limits. Electricity: work on outlets or switches only with the breaker off and verified — and call an electrician for anything beyond swapping like-for-like. Gas lines: never a DIY job in any form. Heights: a ladder tied off, three points of contact, and no overreaching — roof work is a professional's game. Structure: anything touching load-bearing framing, main plumbing, or the service panel is a licensed trade's territory. Before drilling any wall, run the stud finder's AC-detection mode and remember where pipes and wires normally run: up from outlets, down to radiators, horizontally through stud bays at switch and outlet height.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: mount a 15-kilogram floating shelf of 120 cm on a plasterboard wall with studs hidden behind, so it safely holds books rather than decorations.",
          "Recall the governing idea: screws into studs carry the load alone; anchors between studs must be toggle-type and multiply-rated, and the bracket must sit level before anything is committed.",
          "Apply: find the studs with the finder and mark them; the shelf's 120 cm will span roughly two studs 40-60 cm apart — align the bracket so two screws land in studs, each with a pilot hole. Where a bracket hole falls between studs, drill and fit a toggle bolt rated 30 kg. Set the level on the bracket, adjust, then drive everything home snug without crushing the drywall.",
          "State the result: two stud screws carry the shelf and most of the books directly into framing, the toggle handles the off-center load, and the level guarantees it reads straight from across the room — a mount that holds for decades rather than a dramatic 2 a.m. wall failure.",
        ],
      },
      { kind: "heading", text: "How to Actually Do It" },
      {
        kind: "list",
        items: [
          "Assemble the core kit first and add specialty tools per project — never buy a 200-piece set to hang one shelf.",
          "Before drilling: identify the wall (knock test), find the studs, scan for wires and pipes, and know what is on the other side.",
          "Match fastener to load: picture nail for a poster, plastic anchor for a mirror, threaded anchor for a small shelf, toggle bolt or stud for anything with books on it.",
          "Pilot hole, drive with pressure, stop at snug — then stop again; overtightening strips heads and cracks anchors.",
          "Fix small things the week they appear: a loose screw today is a stripped hinge and a replaced door in a year.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The classic errors are all variations of skipping preparation: drilling blind into a wall and finding a pipe, trusting a plastic anchor with a television, or hanging a heavy mirror from picture wire that frays. Stripped screws come from wrong-size bits and no downward pressure, not bad luck. Duct tape is a temporary patch, never a repair. And the biggest own-goal in home repair is improvising on anything electrical, gas, or structural because it looked simple in a video — the limits in this lesson are cheap to respect.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Stud", def: "The vertical wooden framing member behind drywall, spaced 40-60 cm apart; the load-bearer of any wall." },
          { term: "Wall anchor", def: "A fitting that grips soft drywall so screws can carry load between studs." },
          { term: "Toggle bolt", def: "An anchor whose wings spring open inside the wall, clamping the drywall for heavy loads." },
          { term: "Pilot hole", def: "A small guide hole that prevents splitting and keeps screws on target." },
          { term: "Clutch", def: "The drill's torque limiter; set low for delicate screws, high for wood, off for drilling." },
          { term: "Spackle", def: "Soft filler paste for small holes, sanded flush and painted over." },
          { term: "Story stick", def: "A marked offcut used to repeat one measurement exactly, avoiding compounding error." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "You want to hang a 20 kg cabinet on a drywall wall. The best plan is:",
            options: ["Long screws straight into the drywall", "Several plastic picture hooks", "Screws into studs, with toggle bolts where brackets miss them", "Adhesive strips rated for outdoor use"],
            answer: 2,
            explain: "Drywall itself carries almost nothing; the studs or proper toggles carry everything, and heavy cabinets should land mostly on studs.",
          },
          {
            q: "A screw head keeps stripping as you drive it. The usual cause is:",
            options: ["Cheap screws only", "Wrong-size bit and too little forward pressure", "Drilling too slowly", "The pilot hole being too small"],
            answer: 1,
            explain: "Cam-out happens when the bit rides out of the head — fix it with the correct bit seated fully and firm axial pressure, or reverse a half-turn and retry.",
          },
          {
            q: "Before drilling into any wall you should:",
            options: ["Just start — plaster is soft", "Find studs and scan for wiring and pipes", "Turn off the whole house's electricity", "Drill a 10 mm test hole first"],
            answer: 1,
            explain: "A stud finder with AC-detection plus knowing that pipes and cables run up from outlets avoids the two expensive surprises inside walls.",
          },
          {
            q: "Which job is firmly in the call-a-professional category?",
            options: ["Replacing a tap washer", "Mounting a shelf on studs", "Work on the main electrical panel", "Patching a nail hole"],
            answer: 2,
            explain: "The service panel is the point where DIY electrical work becomes genuinely dangerous; the other three are core home-toolkit tasks.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "This is the entry point of the Around the House branch: continue with the plumbing, electrical-safety and painting lessons in Home & Repair. For how the building itself is put together — foundations to roof — the Construction & the Built Environment subject in the Library covers the engineering view.",
        tone: "path",
      },
    ],
  },
  {
    id: "every-home-plumbing-basics",
    title: "Home Plumbing: Faucets, Toilets and Drains",
    domain: "Everyday Knowledge",
    field: "Home & Repair",
    branch: "Around the House",
    tier: "core",
    concepts: [
      "Supply under pressure, drains by gravity",
      "The main shutoff: know it before you need it",
      "Dripping tap: washer or cartridge",
      "Running toilet: flapper, chain, fill valve",
      "Unclogging in order: plunger, then auger, then chemistry",
      "What never goes down a drain",
      "When to call a licensed plumber",
    ],
    words: 1180,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Plumbing looks intimidating because it hides inside walls, but a home water system is two simple ideas: clean water pushed in under pressure, and dirty water falling out by gravity. Home plumbing, the branch of Home & Repair behind this Everyday Knowledge topic, covers the handful of failures that account for most service calls — the dripping tap, the running toilet, the slow drain — and the one piece of knowledge every occupant should have on day one: where the main shutoff valve is. Respect the two rules of water (it flows downhill, and it will find the hole you missed) and most of this subject de-mystifies.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "A faucet dripping once per second wastes on the order of 11,000 litres a year — enough to fill hundreds of bathtubs, all quietly added to a metered bill. A running toilet can waste several times that. Meanwhile knowing the main shutoff turns a burst-pipe emergency from a flooded house into a contained ten-minute incident. This is the highest-leverage hour of home knowledge there is.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Find the shutoffs before anything breaks. The main valve sits where the water line enters the house — basement, crawlspace, utility closet or near the meter — and everyone in the home should know where it is and how to turn it (a quarter turn on a lever, several on a round handle). Under every sink and behind every toilet there is a smaller isolation valve for that fixture alone. Tag them, test them annually so they do not seize, and if a pipe bursts: main valve closed first, taps opened second to drain what is left.",
      },
      {
        kind: "para",
        text: "Diagnose by system. Supply-side problems leak under pressure — a dripping tap, a hissing fill valve, a wet patch that grows — and they stop when you close the fixture's isolation valve. Drain-side problems are slow, gurgling, or backing up, and they are immune to valve position. Pressure problems announce themselves with banging pipes (water hammer, fixable with a hammer arrestor or recharging air chambers) or a trickle shower (often a clogged showerhead — soak it in vinegar overnight).",
      },
      {
        kind: "para",
        text: "A dripping tap is a worn seal. Older compression faucets use a rubber washer at the end of the stem, and the fix is closing the valve, unscrewing the handle and stem, and swapping a washer that costs pocket change. Modern cartridge, ball and ceramic-disc faucets replace as a unit — take a photo, close the valve, pull the old cartridge, and take it to the hardware store to match, because 'universal' is a rumor in plumbing. While it is open, check the O-rings and the seat (the brass ring the washer presses against) for pitting that would eat a new washer.",
      },
      {
        kind: "para",
        text: "A running toilet is almost always the flapper — the rubber seal at the bottom of the tank that lifts when you flush. The ten-second diagnosis: drop a few drops of food coloring into the tank, wait fifteen minutes without flushing, and if color appears in the bowl the flapper is leaking. Chain tension is the other usual suspect: too tight and the flapper cannot seal; too loose or tangled and it cannot rise properly. A fill valve that runs constantly or the water level set above the overflow tube produce the same symptom; the water level should sit about a centimeter below the overflow pipe, set by bending the float arm or adjusting the float clip.",
      },
      {
        kind: "para",
        text: "Unclog in order of gentleness. First, the plunger — a flanged one for toilets, a cup one for sinks, with enough water in the bowl to cover the cup and a wet rag blocking the overflow so pressure goes down the pipe, not sideways. Second, pull the problem: remove the P-trap (the U under the sink — put a bucket under it) because hair and grease usually live right there; for tubs, a cheap plastic drain snake hooks the hair clog. Third, a closet auger for deep toilet blockages. Chemical drain cleaners are the last resort, not the first — caustic soda formulations generate heat, can damage older pipes, and seriously burn skin; enzymatic cleaners are slower but safe for recurring organic clogs.",
      },
      {
        kind: "para",
        text: "Prevention is mostly about what never goes down. Grease and oil congeal in pipes and bind sediment into wall-thickening sludge — wipe pans with paper first. Coffee grounds, eggshells, pasta and rice (they swell), flour dough, and 'flushable' wipes (they are not) are the recurring drain-killers; hair catchers in showers pay for themselves weekly. In cold climates, know which pipes run through exterior walls: a trickle of water on the coldest night and opened cabinet doors prevent the burst that follows a freeze.",
      },
      {
        kind: "para",
        text: "Call a licensed plumber for anything involving the main line, gas water heaters, sewer blockages beyond the fixture (all drains slow at once means the main), hidden leaks you cannot locate, re-piping, and permits-required work. The plumbing code exists for sanitation, and the boundary between DIY and licensed work is a health boundary, not a skill flex. For everything else: close the valve, take a photo before each disassembly, and lay parts out in order on a towel so reassembly is the steps in reverse.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Annual leak wastage",
        latex: "V = r \\times v_{drip} \\times T",
        meaning: "Volume wasted equals drip rate r times volume per drip (about 0.25 mL) times time — one drip per second is roughly 11,000 litres in a year.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: a toilet that runs intermittently, plus a utility charging about 2 per 1,000 litres for water and sewer together — what is it costing, and what is the fix?",
          "Recall the governing idea: a leaking flapper silently transfers tank water to the bowl, the fill valve tops the tank up, and every topped-up litre is billed twice — once in, once out as sewer.",
          "Apply: food coloring in the tank confirms the flapper. If the leak is a modest 200 litres a day, that is 73,000 litres a year × 0.002 per litre ≈ 146 of water plus sewer — often 250 to 300 all-in. A replacement flapper costs a few dollars and ten minutes: valve off, flush to empty, unhook the chain, seat the new flapper, adjust the chain to a slight slack, valve on.",
          "State the result: a repair with a payback measured in weeks, a quieter bathroom, and the diagnostic habit — dye test first, parts-matching second — that generalizes to every fixture in the house.",
        ],
      },
      { kind: "heading", text: "How to Actually Do It" },
      {
        kind: "list",
        items: [
          "Day one in any home: locate the main shutoff and each fixture's isolation valve; test them so they turn when it matters.",
          "Dripping tap: close the isolation valve, photograph the disassembly at every step, replace washer or matching cartridge, reassemble in reverse.",
          "Running toilet: dye-test for the flapper, check chain slack, set the water level a centimeter below the overflow tube.",
          "Slow drain: plunge with the overflow blocked, then pull and clean the P-trap, then auger — chemicals only as a last resort, never after other cleaners.",
          "Weekly habits: hair catchers in showers, grease into a can and the bin, not the sink.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Overtightening is the amateur signature: compression fittings and plastic trap threads need snug plus a fraction of a turn, and gorilla force cracks them into instant leaks. Mixing drain chemicals (an acidic cleaner after a caustic one) can generate enough heat and gas to damage pipes and lungs. Closing a stuck isolation valve with full force seizes it permanently — work it gently open-closed instead. And 'flushable' wipes have clogged more sewers than everything else combined; the bin is their home.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Main shutoff", def: "The valve that stops all water entering the house; the first thing to know, the first thing to close in a burst." },
          { term: "Isolation valve", def: "The small valve serving a single fixture, so one sink can be repaired without drowning the house." },
          { term: "Flapper", def: "The rubber seal at a toilet tank's bottom; the usual culprit in a running toilet." },
          { term: "P-trap", def: "The U-shaped pipe under a fixture that holds a water plug against sewer gas — and catches most clogs." },
          { term: "Fill valve", def: "The tower mechanism that refills the tank; its float sets the water level." },
          { term: "Closet auger", def: "A stiff, crank-fed snake designed to reach deep toilet blockages without scratching the bowl." },
          { term: "Water hammer", def: "Banging pipes caused by fast-closing valves stopping moving water abruptly." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "A pipe bursts in the wall. Your first move is:",
            options: ["Start mopping", "Close the main shutoff valve", "Call the plumber and wait", "Open every tap to full"],
            answer: 1,
            explain: "Stop the supply first; opening taps comes second, to drain what remains in the pipes after the pressure is gone.",
          },
          {
            q: "A toilet runs intermittently. The first diagnostic step is:",
            options: ["Replace the whole toilet", "Dye-test the tank for a leaking flapper", "Pour in a chemical cleaner", "Turn the water off permanently"],
            answer: 1,
            explain: "Food coloring in the tank appearing in the bowl without a flush proves the flapper is leaking — the fix in the vast majority of cases.",
          },
          {
            q: "The correct first tool for a blocked sink is:",
            options: ["Caustic chemical cleaner", "A plunger with the overflow blocked", "A garden hose down the vent", "A hammer and hope"],
            answer: 1,
            explain: "Mechanical first: pressure from a plunger (or removing the P-trap) resolves most clogs without heat, fumes or pipe damage.",
          },
          {
            q: "Why should kitchen grease never go down the drain?",
            options: ["It raises water bills directly", "It congeals in pipes and binds debris into growing blockages", "It corrodes copper quickly", "It is illegal everywhere"],
            answer: 1,
            explain: "Liquid grease solidifies as it cools, coating pipes and catching food particles until the drain chokes — the classic slow-sink story.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Pair this with the home-toolkit lesson for the tools and the electrical-safety lesson for the other hidden household system. The construction subject explains how the whole network of pipes is designed; the environment-domain lessons on water scarcity explain why the 11,000-litre drip matters beyond the bill.",
        tone: "path",
      },
    ],
  },
  {
    id: "every-home-electrical-safety",
    title: "Home Electrical Safety: Breakers, Outlets and Cords",
    domain: "Everyday Knowledge",
    field: "Home & Repair",
    branch: "Around the House",
    tier: "core",
    concepts: [
      "The breaker panel: map it and label it",
      "Why breakers trip — and why one reset is the limit",
      "GFCI protection where water lives",
      "Circuit capacity: add watts, keep headroom",
      "Cords, strips and daisy-chains",
      "Water, ladders and overhead lines",
      "The bright line: panel work is professional work",
    ],
    words: 1150,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Household electricity is the most dangerous thing most people treat casually, because it usually works and therefore feels safe. This Everyday Knowledge topic in Home & Repair covers the purely practical side — the breaker panel, the outlets in wet rooms, the extension cords under rugs, and the habits that keep a household safe — not circuit theory, which the Library's Electric Circuits subject covers in full. The practical rules are few, old, and written in investigations of house fires.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Electrical failures ignite a large share of home fires, and the common culprits are unglamorous: overloaded power strips, cords under carpets, and DIY wiring done confidently and wrongly. Meanwhile a GFCI outlet that trips is not broken — it just did its job of saving a life. Understanding ten mechanisms converts invisible risk into a short checklist.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The breaker panel is the map of the house's electrical system. Each switch controls one circuit — a loop feeding a zone of outlets and fixtures — and typical household circuits are rated 15 or 20 amperes. Spend twenty minutes once: flip each breaker, note what dies, and write it on the panel door in pencil. When a circuit trips at midnight, the difference between a labeled and an unlabeled panel is the difference between a ten-second reset and a flashlight safari. The main breaker at the top kills everything at once.",
      },
      {
        kind: "para",
        text: "A breaker trips because the current exceeded the wire's rating and an overload or a short circuit was building heat. The correct response: unplug what you just added, reset the breaker fully (off, then on), and replug one thing at a time. One trip is an event; repeated trips are a diagnosis. If a circuit trips the moment something specific is plugged in, that device or cord is the fault — stop using it. If a breaker trips instantly with nothing plugged in, or a breaker feels hot, or you smell burning plastic near the panel, that is an electrician today, not this weekend.",
      },
      {
        kind: "para",
        text: "GFCI — ground-fault circuit interrupter — is the outlet with TEST and RESET buttons, and it monitors the current going out versus coming back. If as little as 5 milliamperes goes missing (the missing current is leaking through a person or a wet path), it disconnects in a fraction of a second, faster than a heartbeat can be disturbed. Building codes require GFCI protection wherever water and electricity coexist: bathrooms, kitchens near sinks, garages, basements, outdoors. Monthly, press TEST — the outlet should die — then RESET. If it will not test or reset, replace it; they wear out over decades.",
      },
      {
        kind: "para",
        text: "Capacity is arithmetic, not theory. On a 120-volt circuit, a 15-amp breaker carries about 1,800 watts and a 20-amp about 2,400; the safe continuous practice is to stay near 80 percent of that. Space heaters are the classic overload: a single 1,500-watt heater eats most of a 15-amp circuit, and adding a kettle or hair dryer on the same loop finishes it. Any appliance that makes heat draws serious power — heaters, irons, dryers, toasters — and each wants a circuit mostly to itself. If breakers trip whenever the toaster and coffee maker run together, that is the wiring telling you they share a loop, not a defect to workaround.",
      },
      {
        kind: "para",
        text: "Cords and strips are where households cheat. Extension cords are temporary tools, not permanent wiring, and they are rated — check the tag — for the load they may carry. Never run them under rugs or through doorways where traffic grinds the insulation; never staple or nail them to walls; never daisy-chain power strips into each other. A power strip is a splitter, not a power source: plugging two heaters into one strip on one outlet still asks the wall's single circuit and the strip's thin wiring for everything. Warm plugs, warm cords, or scorch marks around an outlet are immediate retirement signals. Surge protectors (different job — they clamp voltage spikes) have a joule rating and a finite life; a protector that has absorbed a serious lightning strike has quietly spent itself.",
      },
      {
        kind: "para",
        text: "Water and height have their own rules. Never touch electrical anything with wet hands or standing on a wet floor; keep appliances away from sinks and tubs by real distance, not by careful balancing; a hair dryer near a full bath is a cliché of preventable tragedy. Outdoors, treat every overhead line as live forever: keep ladders, poles, kites and tree-trimming equipment at least several metres clear, and never stand a ladder where a fall would land it on the lines. Aluminum ladders are excellent conductors; fiberglass is the electrician's choice for a reason.",
      },
      {
        kind: "para",
        text: "The bright line: anything inside the panel, anything new-run wiring, and anything permanently installed belongs to a licensed electrician. Swapping a like-for-like outlet or switch with the breaker off and verified is the reasonable DIY ceiling — and in many jurisdictions even that requires a permit. Flickering lights across a room, outlets that only work intermittently, two-prong ungrounded outlets in an old house, aluminum branch wiring in 1960s-70s homes — these are inspection items, not projects. Electricity gives no second chances, and the fatal mistake looks exactly like the safe one until the moment it does not.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Circuit load",
        latex: "P = V \\times I",
        meaning: "Watts carried equal volts times amps: a 120 V, 15 A circuit tops out near 1,800 W — and should cruise below about 80 percent of that.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: every time a 1,500 W space heater runs in the bedroom, the circuit breaker trips when the desktop computer and monitor also start. Why, and what is the fix?",
          "Recall the governing idea: everything on one circuit shares its capacity, and a 15 A circuit at 120 V carries about 1,800 W — with 80 percent, about 1,440 W, as the sensible continuous ceiling.",
          "Apply: heater 1,500 W plus computer 200 W plus monitor 40 W is 1,740 W on a circuit whose safe ceiling is about 1,440 W — the breaker is doing precisely its job. Move the heater to an outlet on a different circuit (check the panel map), or run the heater without the office load.",
          "State the result: the trips stop without any repair, because the problem was never the wiring — it was an arithmetic violation. This is the general habit: when a breaker trips, add up the watts on the loop before touching anything.",
        ],
      },
      { kind: "heading", text: "How to Actually Do It" },
      {
        kind: "list",
        items: [
          "Map and label the panel once: one person flipping, one person noting what dies; pencil the results on the door.",
          "Test every GFCI monthly: TEST kills it, RESET restores it; replace any that will not play along.",
          "When a breaker trips: unplug recent additions, reset fully, replug one item at a time to find the offender.",
          "Audit cords seasonally: no cords under rugs, no strips chained into strips, no warm plugs — and replace, not tape, damaged insulation.",
          "Give heat-making appliances their own circuit: one heater per outlet loop, and never alongside the kettle.",
          "Before drilling any wall, run the stud finder's live-wire mode; remember that wires rise from outlets and switches.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Taping a tripping breaker 'on' is the single most dangerous act in a house — the breaker is the only automatic protection the wiring has. The second is the power strip feeding a space heater: strips are splitters, not sources, and heater-plus-strip is a fire drill. Resetting a breaker repeatedly without asking why converts a warning into a schedule. And water-plus-electricity improvisation — radios by the tub, charging phones on beds under pillows — packs real risk into innocent-looking scenes.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Circuit breaker", def: "The automatic switch that interrupts a circuit when current exceeds its rating; the wiring's heat protection." },
          { term: "GFCI outlet", def: "An outlet that compares outgoing and returning current and trips within milliseconds when about 5 mA leaks astray." },
          { term: "Circuit capacity", def: "Volts times amps — the wattage a circuit can carry, with 80 percent as the continuous-practice ceiling." },
          { term: "Daisy-chaining", def: "Plugging power strips into power strips; a classic overload and fire mechanism." },
          { term: "Surge protector", def: "A device that clamps voltage spikes; rated in joules and silently consumed by big strikes." },
          { term: "Main breaker", def: "The large switch that disconnects the whole panel at once." },
          { term: "Arc fault", def: "Electricity jumping a gap in damaged wiring — a fire cause that AFCI breakers are designed to catch." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "A breaker trips. After one reset it trips again with the same devices plugged in. You should:",
            options: ["Reset it again and again until it holds", "Tape it in the on position", "Unplug the load and investigate — repeated trips are a diagnosis", "Flip the main breaker instead"],
            answer: 2,
            explain: "Repeated trips mean a real overload or fault; forcing the breaker on removes the only protection the wiring has.",
          },
          {
            q: "GFCI outlets exist primarily to:",
            options: ["Protect appliances from surges", "Save people from ground-fault shocks, especially near water", "Reduce electricity bills", "Increase circuit capacity"],
            answer: 1,
            explain: "They trip on tiny current leaks — the signature of electricity exiting through a body — which is why codes demand them in wet locations.",
          },
          {
            q: "A 1,500 W heater and a 700 W microwave on one 120 V, 15 A circuit:",
            options: ["Are fine together", "Slightly exceed the circuit's 1,800 W rating and its safe 80 percent ceiling", "Are safe if plugged into different outlets on the same circuit", "Only trip the breaker in summer"],
            answer: 1,
            explain: "2,200 W exceeds even the raw 1,800 W rating, and moving to another outlet on the same loop changes nothing — circuits, not outlets, are the unit.",
          },
          {
            q: "Which of these is safely DIY?",
            options: ["Adding a new circuit to the panel", "Replacing a like-for-like outlet with the breaker off and verified", "Repairing the service-entrance cable", "Installing a subpanel"],
            answer: 1,
            explain: "Panel and new-wiring work is licensed-electrician territory everywhere; a verified-off, like-for-like swap is the reasonable ceiling.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "For what current, voltage and resistance actually are, start the Electric Circuits subject in the Library — the theory makes every rule here feel inevitable rather than arbitrary. Then finish the Around the House branch with the painting lesson, and read the emergency-preparedness topic for the utilities-shutoff drill that includes the panel's main breaker.",
        tone: "path",
      },
    ],
  },
  {
    id: "every-painting-walls",
    title: "Painting Walls Like a Professional",
    domain: "Everyday Knowledge",
    field: "Home & Repair",
    branch: "Around the House",
    tier: "core",
    concepts: [
      "Prep is most of the job",
      "Patch, sand and clean before anything opens",
      "Primer: when it is optional and when it is law",
      "Cutting in before rolling",
      "The W pattern and a loaded roller",
      "Paint order: ceiling, walls, trim",
      "Common mistakes: overworking, dust, cheap nap",
    ],
    words: 1120,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Nothing transforms a room for less money than paint, and nothing exposes the gap between amateur and professional faster. Painting, the branch of Home & Repair behind this Everyday Knowledge topic, is less about the brush than about the boring two-thirds that happen first: moving furniture, patching, sanding, cleaning, taping. Professionals are not faster painters — they are faster preparers, and their finish looks flat because the wall under it was made flat. This lesson is the full sequence, from bare patch to clean cut line.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "A painted room is a weekend's work at a tenth of a renovation's cost — but every skip shows forever under side light: ridges of dust in the finish, lap marks where a roller dried mid-wall, and jagged ceiling lines no amount of squinting forgives. The craft is learnable in one honest weekend, and it transfers directly to trim, cabinets and furniture.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Prepare the room like a hospital, not a crime scene. Furniture to the center under sheets, floor covered with rosin paper or drop cloths (canvas grips and does not slide; plastic does not absorb), switch plates and outlet covers off, hardware removed or taped. Then repair: fill nail holes and small cracks with spackle using a flexible putty knife, let it dry, sand flush with 120-to-220-grit paper, and shine a raking desk lamp across the wall — side light is the lie detector that reveals every bump the overhead light forgives. Glossy existing paint gets a light sanding or a deglosser so the new coat can grip. Finally, wash the wall: dust and kitchen grease films are why paint peels in sheets, and a damp sponge with mild detergent is cheaper than re-doing the room.",
      },
      {
        kind: "para",
        text: "Primer is not a marketing upsell — it is a uniform surface. Bare patches of spackle drink paint differently and will flash (show as dull spots) under the finish coat unless sealed. Prime when covering repairs, when painting new drywall, when going from dark to light colors, and always on water stains (use a stain-blocking primer or the brown ring bleeds back through within weeks). Repainting a similar color over a clean, sound wall is the one case where primer is genuinely optional.",
      },
      {
        kind: "para",
        text: "Buy paint by finish and quantity, not by brand loyalty. Sheens run from flat/matte (hides flaws, hard to clean) through eggshell and satin (the wall sweet spot) to semi-gloss and gloss (durable, scrubbable — the trim and door choice). A rough rule of coverage is 10 to 12 square metres per litre per coat, so measure the wall area and buy for two coats; a second coat is what makes color look intentional rather than inspired. Quality rollers and brushes matter as much as the paint: a cheap nap sheds fibers into the finish forever, and a good angled sash brush is the entire secret of the cut line.",
      },
      {
        kind: "para",
        text: "Cut in before you roll: with a 5-centimetre angled brush, paint a 5-to-8-centimetre band along ceilings, corners, trim and around outlets, working the bristles into the junction and feathering outward. Painter's tape helps at trim and baseboards — press it down with a putty knife edge for a sealed line, and remove it while the paint is barely dry, pulling at an angle — but a steady hand and a loaded brush beat tape at the ceiling line, and tape is a sharpness tool, not a skill substitute. One strip of tape reused twice is a smear waiting to happen.",
      },
      {
        kind: "para",
        text: "Roll with technique, not hope. Load the roller in the tray's ramp until the nap is evenly charged but not dripping, then paint a large W or M about a metre square, and fill it in with overlapping vertical strokes without lifting the roller. Work in sections while the edges stay wet — the 'wet edge' is the whole game: rolling into paint that has begun to set creates visible lap marks, so finish a full wall without a coffee break. Roll top to bottom on the final passes, end each wall at a corner, and resist going back to 'fix' a patch that is merely drying unevenly. Most amateur 'mistakes' are paint being watched too closely while it levels itself.",
      },
      {
        kind: "para",
        text: "Sequence the room: ceiling first (splatter insurance), then walls, then trim and baseboards last — so drips from above land on not-yet-finished surfaces and any trim slip-ups get touched up by the wall's own edge. Two thin coats beat one thick one; thick paint sags, curtains and dries into wrinkles. Between coats respect the recoat time on the can (commonly two to four hours), and keep the room ventilated — modern low-VOC paints are gentle, but airflow still speeds a proper cure. Wrap brushes and rollers in plastic wrap or foil between coats rather than washing them; a sealed roller tray overnight is fine.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Paint needed",
        latex: "L = \\frac{A \\times n}{c}",
        meaning: "Litres L equal wall area A times number of coats n, divided by coverage c per litre — about 10-12 square metres per litre per coat for typical wall paint.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: paint the walls of a 4-by-5-metre bedroom with a 2.4-m ceiling and one door and one window — how much paint, and in what order over a weekend?",
          "Recall the governing idea: coverage per litre per coat, two coats for a color change, and the room sequence ceiling-walls-trim.",
          "Apply: perimeter 18 m × 2.4 m ≈ 43 square metres, minus door (about 2) and window (about 2) ≈ 39 m². At 11 m² per litre and two coats: 39 × 2 ÷ 11 ≈ 7 litres — buy 7.5 to 8 to allow for a spare of the same batch, because color matching across batches is never perfect.",
          "State the result: Saturday is furniture, patching, sanding, washing, taping and cutting in; Sunday is two rolled coats with a lunch break at the recoat interval, trim last — and half a litre sealed in a jar for future touch-ups, labeled with the room and date.",
        ],
      },
      { kind: "heading", text: "How to Actually Do It" },
      {
        kind: "list",
        items: [
          "Prep day: move and cover, patch and sand everything, wash the walls, remove plates, tape and burnish the edges.",
          "Prime every repair and any stain or dramatic color change; skip primer only on clean, sound, similar-color walls.",
          "Cut in the perimeter with an angled brush first, keeping a wet edge band ahead of the roller.",
          "Roll in W-pattern sections a metre square, working wall by wall without pauses; final strokes top to bottom.",
          "Two thin coats at the can's recoat interval; remove tape while barely dry, pulling at an angle away from the fresh paint.",
          "Finish with the trim in semi-gloss, wrap tools in plastic between coats, and store labeled leftover paint for touch-ups.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Painting over dust and grease is the number-one cause of peeling — wash the wall even when it looks clean. Overworking drying paint (going back for 'one more pass') is the number-one cause of ugly. Painting out of sequence, trim before walls, guarantees repainting the trim. Cheap rollers shed and cheap tape bleeds; the tape must be pressed hard with a blade edge or paint wicks underneath. And never thin wall paint, never stretch a single coat over a color change, and never buy exactly the paint you need — buy a little more, because a half-full matching tin is the cheapest insurance in decorating.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Cutting in", def: "Brush-painting the perimeter band at ceilings, corners and trim before rolling." },
          { term: "Wet edge", def: "The boundary of still-liquid paint; rolling into a wet edge avoids visible lap marks." },
          { term: "Primer", def: "A sealing undercoat that equalizes porosity and blocks stains so the finish coat reads even." },
          { term: "Sheen", def: "The gloss level of paint, from flat (hides flaws) to gloss (scrubbable), chosen per surface." },
          { term: "Flashing", def: "Dull or shiny patches where paint dried differently over unsealed repairs." },
          { term: "Lap marks", def: "Ridges formed where a roller crossed paint that had already begun to set." },
          { term: "Nap", def: "The roller cover's fiber length; 10-13 mm suits smooth interior walls." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "The correct order for painting a whole room is:",
            options: ["Walls, ceiling, trim", "Ceiling, walls, trim", "Trim, walls, ceiling", "Ceiling and trim together, then walls"],
            answer: 1,
            explain: "Drips from above must land on unfinished surfaces: ceiling first, walls second, trim last — the sequence that minimizes rework.",
          },
          {
            q: "A wall of 40 square metres at 10 m² per litre and two coats needs about:",
            options: ["4 litres", "8 litres", "12 litres", "2 litres"],
            answer: 1,
            explain: "40 × 2 ÷ 10 = 8 litres — and buying a little extra keeps a labeled, matching tin for touch-ups.",
          },
          {
            q: "You see dull patches appearing over old nail-hole repairs. The cause is:",
            options: ["Cheap paint", "The porous spackle drinking paint differently — flashing that primer prevents", "Rolling too fast", "The room being too cold"],
            answer: 1,
            explain: "Unsealed repairs change how the finish dries and reflects light; spot-priming equalizes the surface.",
          },
          {
            q: "Roller lap marks appear when:",
            options: ["The roller is too full", "You roll into paint that has already started to dry", "The nap is 10 mm", "You use the W pattern"],
            answer: 1,
            explain: "The wet edge is everything: pause mid-wall and the boundary between set and fresh paint dries into a visible ridge.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "This completes the Around the House branch with the toolkit, plumbing and electrical-safety lessons. Natural extensions: caulk and trim carpentry, furniture refinishing, and color theory from the Visual Design subject for choosing schemes rather than applying them.",
        tone: "path",
      },
    ],
  },
]

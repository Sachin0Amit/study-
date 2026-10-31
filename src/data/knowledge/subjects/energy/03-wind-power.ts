/**
 * Knowledge Universe — Energy & Sustainability — Chapter 03: Wind Power
 * 1 lesson · ~1,279 words
 * field: Energy & Sustainability
 * legacy sources: environment.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Wind Power]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 env-wind-energy-turbines — Wind Energy: Turbines, Farms and the Physics of Harvesting Wind
 */
import type { KnowledgeTopic } from '../../types'

export const energyCh03: KnowledgeTopic[] = [
  {
    id: "env-wind-energy-turbines",
    title: "Wind Energy: Turbines, Farms and the Physics of Harvesting Wind",
    domain: "Environment & Sustainability",
    field: "Energy & Sustainability",
    branch: "Wind Power",
    tier: "intermediate",
    concepts: [
      "wind power scales with the cube of speed",
      "lift-driven blades on tall towers",
      "the Betz limit on rotor efficiency",
      "turbine anatomy: pitch, gearbox, yaw",
      "wake losses and farm siting",
      "offshore foundations and floating platforms",
    ],
    words: 1279,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Wind is second-hand sunlight: the sun heats land and sea unevenly, pressure differences try to even things out, and air rushes from one place to another. One to two percent of the solar energy reaching Earth becomes wind's kinetic energy, and modern turbines skim it back out of the sky — a single offshore unit now spans 230 metres of rotor and rates 15 megawatts. This lesson covers lift and the Betz ceiling, turbine anatomy, farm siting and wakes, and offshore versus onshore.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Together with solar, wind is decarbonizing electricity faster than any other technology. Its engineering story — cube laws, height and rotor scale — explains why turbines grew twenty-fold in thirty years, and why a farm is a puzzle of spacing, wakes and weather.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The power available in wind scales with the cube of its speed: double the wind and eight times the power flows through the same disc of air. It also scales with air density and with swept area, which is why rotors grow — doubling diameter quadruples the catch. Height matters nearly as much: surface friction slows the air, so wind speed rises roughly ten percent for each doubling of height over open terrain. The cube law turns that modest gain into a third more power — the arithmetic behind ever-taller towers.",
      },
      {
        kind: "para",
        text: "A turbine blade is a rotating wing. Rather than being pushed like a paddle, the blade is an airfoil that deflects the flow, creating lift roughly perpendicular to the oncoming air — the wing physics the aerodynamics lesson in Engineering develops in full. The geometry is surprising: tips travel at six to ten times wind speed, so each section meets air dominated by the blade's own motion — hence the twist that keeps every station at its best angle. Three blades have become standard — enough solidity to catch the energy without excess material or noise.",
      },
      {
        kind: "para",
        text: "No rotor can harvest all the wind's energy, and the reason is elegant: air that surrendered all its kinetic energy would stop dead and pile up behind the machine. In 1919 Albert Betz treated the rotor as a permeable disk and found extraction is maximized when air leaves at one third of its arrival speed — at most 16/27, or 59.3 percent, can ever be captured. Modern rotors reach power coefficients of 0.45 to 0.50, about three quarters of that ceiling; the rest is lost to the air's own rotation and blade-tip vortices.",
      },
      {
        kind: "para",
        text: "Inside the nacelle is a small power station. Pitch motors rotate each blade about its long axis — feathering them in storms, fine-tuning angles around the operating point. Most designs use a gearbox stepping the rotor's 10 to 15 revolutions per minute up to generator speed, though direct-drive machines couple a huge slow magnet generator straight to the hub. Yaw motors swing the nacelle to face the wind, and the controller starts production near 3 metres per second, reaches full rating around 12, and shuts down near 25.",
      },
      {
        kind: "para",
        text: "A wind farm is a study in interference. Every turbine extracts energy and leaves behind a slower, turbulent wake, so a machine downwind of a badly spaced neighbour loses 10 to 20 percent of its output — hence rows spaced five to ten rotor diameters apart, staggered across the prevailing wind. Siting begins with the resource: masts or lidar measure a site for a year or more, because a ten percent error in average wind speed becomes a thirty percent error in energy.",
      },
      {
        kind: "para",
        text: "Offshore is wind's frontier. Sea wind is stronger and steadier — capacity factors of 45 to 55 percent against 25 to 40 onshore — and there are no neighbours to object. The price is paid underwater: monopiles for shallow sites, steel jackets for deeper water, floating platforms tethered beyond about 60 metres. Integration remains the challenge: output follows weather, not demand, so operators lean on forecasting, curtailment and storage — the renewable-transition lesson's system-level story.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Power available in wind",
        latex: "P = \\tfrac{1}{2}\\,\\rho\\,A\\,v^{3}",
        meaning: "Kinetic power flowing through a rotor disc of area A; air density rho matters, but the cubed wind speed v dominates.",
      },
      {
        kind: "formula",
        name: "Betz limit",
        latex: "C_{p,\\max} = \\frac{16}{27} \\approx 0.593",
        meaning: "The maximum fraction of wind power any rotor can extract, reached when the flow slows to one third of its arrival speed.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the power a 236-metre-rotor turbine delivers in an 11-metre-per-second wind at power coefficient 0.42, plus its annual energy at 50 percent capacity factor.",
          "Recall: available power = 0.5 x rho x A x v-cubed, with A = pi x D-squared / 4; delivered = Cp x available.",
          "Apply: A = pi x 118 x 118 = 43,700 square metres. Available power = 0.5 x 1.225 x 43,700 x 1,331 = 35.7 MW. Delivered = 0.42 x 35.7 = 15 MW.",
          "State the result: the rating is the physics — 42 percent of a 36-megawatt wind, 71 percent of the Betz ceiling — and annual yield is 15 x 8,760 x 0.5 = 66 GWh.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "North Sea offshore farms powering coastal Europe",
          "Onshore wind belts of the American Great Plains and Inner Mongolia",
          "Repowering 1990s farms with fewer, taller, more productive turbines",
          "Wind-plus-storage hybrids bidding firmer power into markets",
          "Farmland lease income — crops growing beneath 150-metre rotors",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The cube law punishes sloppy comparison: a site averaging 6 rather than 7 metres per second loses a quarter of its energy. Turbines do kill birds and bats — far fewer than cats or buildings — but siting on migration corridors and bat activity needs real care. The claim that turbines never repay their embodied energy is a myth; payback takes six to twelve months. And never judge a fleet by one calm day — the grid sees thousands of machines averaged over a continent.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Power coefficient", def: "Fraction of available wind power a rotor captures; modern machines reach 0.45 to 0.50." },
          { term: "Tip-speed ratio", def: "Blade-tip speed divided by wind speed; efficient rotors run six to ten." },
          { term: "Wake effect", def: "Energy-depleted, turbulent zone downwind of a turbine." },
          { term: "Monopile", def: "Giant steel tube hammered into the seabed as a shallow-water foundation." },
          { term: "Gearbox", def: "Step-up transmission converting slow rotor turns to generator speed." },
          { term: "Pitch control", def: "Rotating blades about their long axis to trim power or shed storms." },
          { term: "Capacity factor", def: "Actual annual output over nameplate potential — offshore 45 to 55 percent." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Doubling wind speed, all else fixed, changes the available power by a factor of:",
            options: ["2", "4", "8", "no change"],
            answer: 2,
            explain: "Speed enters the power expression cubed — the most consequential fact in wind engineering.",
          },
          {
            q: "The Betz limit exists because:",
            options: [
              "blades are never perfectly shaped",
              "air that lost all its energy could not flow away to make room for more",
              "generators overheat at high output",
              "the tower blocks part of the wind",
            ],
            answer: 1,
            explain: "Air must keep moving to carry energy through; slowing it to a third of arrival speed is the optimum.",
          },
          {
            q: "Turbine blades are twisted and tapered mainly so that:",
            options: [
              "they look elegant from the ground",
              "each section meets the air at its best angle despite different speeds",
              "rainwater runs off cleanly",
              "they stack efficiently for shipping",
            ],
            answer: 1,
            explain: "Tips travel several times faster than roots; the twist keeps every station's angle of attack in the productive range.",
          },
          {
            q: "Offshore farms achieve higher capacity factors than onshore mainly because:",
            options: [
              "the sea is colder",
              "sea winds are stronger and steadier over the low-friction surface",
              "offshore turbines are physically larger",
              "salt air improves generator efficiency",
            ],
            answer: 1,
            explain: "Smooth open water means faster, less turbulent wind at hub height.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Pair with the solar lesson and the renewable-transition lesson for storage and grids. The aerodynamics lesson in Engineering develops the wing physics; the dams lesson covers hydropower, the firm counterpart.",
        tone: "path",
      },
    ],
  },
]

/**
 * Knowledge Universe — Visual Arts — Chapter 03: Sculpture & Craft
 * 3 lessons · ~4,348 words
 * field: Sculpture & Craft
 * legacy sources: arts-culture.ts, x38-arts-history-visual-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Sculpture & Craft]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 sculpture-fundamentals — Sculpture Fundamentals: Modeling, Carving and Casting
 *   03.2 craft-ceramics — Ceramics and Craft: Clay, Glaze and the Kiln
 *   03.3 art-sculpture-ceramics-craft — Sculpture and Ceramics: Carving, Modeling, Casting and the Kiln
 */
import type { KnowledgeTopic } from '../../types'

export const visualArtsCh03: KnowledgeTopic[] = [
  {
    id: 'sculpture-fundamentals',
    title: 'Sculpture Fundamentals: Modeling, Carving and Casting',
    domain: 'Arts & Culture',
    field: 'Sculpture & Craft',
    branch: 'Sculpture Fundamentals',
    tier: 'core',
    concepts: [
      'Four operations: carve, model, cast, construct',
      'Chisel sequence, general to specific',
      'The armature problem',
      'Lost-wax casting step by step',
      'Relief versus sculpture in the round',
      'Scale, pedestal and viewpoint',
    ],
    words: 1501,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'A drawing is a window: it constructs the illusion of depth on a flat plane. Sculpture is the thing itself — mass in your space, with a back, a bottom and a silhouette that changes every step you take. That difference drives everything in this lesson. The sculptor chooses among four operations: carving, which subtracts; modeling, which adds; casting, which multiplies; and constructing, which assembles. Each material and method wants different forms — stone rewards mass and closed silhouettes, clay rewards flow and change, bronze rewards the leaps that marble cannot risk, and welded steel rewards open drawing in space.',
      },
      {
        kind: 'para',
        text: 'The Ceramics and Craft lesson treats clay at full depth; this one surveys the fundamentals of all sculptural process — the logic of subtractive and additive thinking, the armature, the chisels, the mold and the casting chain, and the choice between relief and the round. Read it as a field guide to every sculpture you will ever stand in front of: once you can recognize tool marks and casting seams, you can see how the thing was made, and seeing how it was made is most of seeing what it is.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Sculpture is the most public and the most physical of the arts — temples, monuments, plazas and graves. It is also the most unforgiving in one direction: a drawing can be erased, but a chisel blow taken from marble cannot be given back. Understanding process turns a museum hall from a parade of objects into a visible record of decisions, risk and labor.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Subtractive and Additive: Carving and Modeling' },
      {
        kind: 'para',
        text: 'Carving is an argument with a block that the carver can only lose ground in, and the method is strict sequence, general to specific: the point chisel with mallet (or a pneumatic hammer) busts the block down toward the rough mass; the toothed claw chisel rakes the surfaces closer to the form; the flat chisel smooths and defines; rasps, rifflers and abrasives finish. Whether to polish or to leave the tool texture showing is a final aesthetic choice — the modern direct carvers, following Brancusi, kept their chisel marks as an honesty about process. Michelangelo\'s unfinished figures, half-emerged from their marble, show the method frozen in action: working from the front inward, releasing the form rather than building it.',
      },
      {
        kind: 'para',
        text: 'Stone and wood each discipline the hand. Softer stones — soapstone, alabaster — forgive learners; limestone sits in the middle; marble resists and rewards. Wood carves with the grain, never against it, and punishes ignorance with splits; the classic European carving woods are close-grained limes and basswoods (Tilman Riemenschneider\'s limewood altarpieces are the standard), large trunks are hollowed or laminated to prevent checking, and the wood\'s own figure — the grain pattern itself — is often allowed to speak in the finished surface.',
      },
      {
        kind: 'para',
        text: 'Modeling is the additive opposite: clay built up, pushed around, cut away and rebuilt — the most forgiving of all processes. Its structural problem is gravity. Any standing figure needs an armature: a wire, rod or pipe skeleton roughed to the pose and anchored to a stand, carrying weight that wet clay cannot. Clay meant for the kiln must be hollowed or vented so trapped air and moisture do not burst it; clay meant only as a model — like wax or oil-based plasteline, which never dries — is usually destined for casting, the next link in the chain.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Model a maquette: a small clay or wax study, at a scale you can hold and revise cheaply, fixing the pose, proportions and spirit of the piece.',
          'Mold the maquette — a flexible rubber skin backed by a rigid mother mold — and cast a wax positive from it; the wax can be cleaned, thinned and refined to become the true final surface.',
          'Sprue the wax: attach a network of wax rods that will become channels for metal and exits for air, then seal the whole tree inside an investment of plaster-and-silica or modern ceramic shell.',
          'Burn out: kiln the invested mold until the wax melts and runs out entirely — the wax is lost, leaving a negative void with its channel system intact.',
          'Pour molten bronze into the still-hot void, let it freeze solid, then break the investment away and cut off the sprues.',
          'Chase the casting — file, tool and blend the metal — then apply a chemical patina, accelerated with heat, and wax it: the colored skin that protects the bronze.',
        ],
      },
      { kind: 'heading', text: 'Molds, Relief and the Walking Eye' },
      {
        kind: 'para',
        text: 'Casting is multiplication. A single original yields a mold, and the mold yields any number of positives in plaster, cement, resin or metal — bronze above all, strong enough to be cast thin, which is why outflung arms and mid-air action belong to bronze and not to stone, and why numbered editions are legitimate. Lost-wax is ancient and nearly universal: Mesopotamia, Egypt, the Ife and Benin casters of West Africa (see World Art Traditions), and the Renaissance foundries all ran versions of the same chain. Before three-dimensional scanning, sculptors scaled maquettes up with the pointing machine and calipers — locating points in space on the small model and transferring them to the block, one measured point at a time.',
      },
      {
        kind: 'para',
        text: 'Relief is sculpture that stays a picture: form raised from, and attached to, a background plane. Low relief keeps the rise shallow and depends on subtle stepping, as on coins and the Parthenon frieze; high relief rounds far enough for deep undercutting; sunken relief, the Egyptian variant, cuts the image down into the surface so it lives by shadow; and Donatello\'s celebrated flattened relief compressed whole landscapes into barely an inch of stone using purely pictorial means. Relief fixes the viewpoint at one frontal station point. Sculpture in the round abandons that privilege: its silhouette rearranges every few steps, and its negative space — the hole an arm frames — becomes as active as the mass itself.',
      },
      {
        kind: 'para',
        text: 'Scale is meaning. A hand-held figure solicits intimacy; a colossus manufactures awe and, usually, civic power; and the pedestal is not furniture but a viewing instrument, deciding the height and distance of the eye. Rodin argued that his Burghers of Calais should stand at street level, on no pedestal at all, so that citizens could meet the condemned men eye to eye. The classic textbook pair is the two Davids: Michelangelo\'s marble, composed in the moment before action, frontal and ideal, rewards the single measured view; Bernini\'s, caught mid-swing with the body torqued, places the visitor roughly where Goliath stood and rewards the walk around. Construction — the fourth operation — joined the family with twentieth-century welding, when Julio Gonzalez and Picasso began drawing in forged space, and assemblage made the found object itself sculptural.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Armature', def: 'The internal skeleton of wire or rod that supports a modeled figure.' },
          { term: 'Maquette', def: 'A small preliminary model used to fix pose, proportion and idea before scaling up.' },
          { term: 'Lost-wax casting', def: 'Casting by investing a wax model, melting the wax out, and pouring metal into the void.' },
          { term: 'Relief', def: 'Sculpture raised from a background plane — low, high, or sunken — with a fixed viewpoint.' },
          { term: 'In the round', def: 'Freestanding sculpture meant to be walked around, with silhouettes that change with every step.' },
          { term: 'Patina', def: 'The chemical or natural surface coloration of a metal sculpture, protective as well as expressive.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'The quiz below tests the order of operations and the reasoning behind them — the two things a sculptor cannot fake.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The correct carving sequence, rough to fine, is:',
            options: ['Flat chisel, then point, then tooth chisel, then rasp', 'Point chisel, then tooth chisel, then flat chisel, then rasp', 'Rasp, then tooth chisel, then point chisel', 'Tooth chisel, then point chisel, then flat chisel'],
            answer: 1,
            explain: 'General to specific: the point roughs out mass, the claw rakes toward form, the flat defines, abrasives finish.',
          },
          {
            q: 'In lost-wax casting, the wax is:',
            options: ['The final core of the sculpture', 'A polishing agent applied at the end', 'The model and its channels, melted out and replaced by metal', 'The material of the outer mold'],
            answer: 2,
            explain: 'The wax — both model and sprue network — is burned out of the investment, leaving the void that bronze fills: hence lost.',
          },
          {
            q: 'Sunken relief, cutting the image into the surface itself, is especially associated with:',
            options: ['Baroque Italy', 'Gothic France', 'Benin brasswork', 'Ancient Egypt'],
            answer: 3,
            explain: 'Egyptian sculptors cut images down into walls so they registered by shadow under strong sun.',
          },
          {
            q: 'The lesson explains Bernini\'s David versus Michelangelo\'s chiefly as a difference of:',
            options: ['The monetary value of the materials', 'The moment chosen and the viewpoints demanded of the visitor', 'Their religious subject matter', 'Their scale'],
            answer: 1,
            explain: 'Michelangelo composes the moment before action for a frontal view; Bernini torques mid-action and makes the circling visitor part of the scene.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Continue into Ceramics and Craft for clay, kiln and glaze at full depth, and read World Art Traditions and From Caves to Cathedrals to watch these same processes carry meaning across history. Figure Drawing pairs naturally — the modeling eye and the constructing hand train each other.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'craft-ceramics',
    title: 'Ceramics and Craft: Clay, Glaze and the Kiln',
    domain: 'Arts & Culture',
    field: 'Sculpture & Craft',
    branch: 'Craft Traditions',
    tier: 'core',
    concepts: [
      'Earthenware, stoneware, porcelain',
      'Pinch, coil, slab and wheel',
      'Centering: the wheel\'s gate skill',
      'Bisque, then glaze fire',
      'Silica, flux and alumina',
      'Reduction firing and heat work',
    ],
    words: 1555,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Fired clay is one of humanity\'s oldest technologies — fired figurines survive from the last ice age, older than agriculture, metals or writing — and it is still the most democratic: the raw material is essentially mud. Ceramics is the craft of shaping that mud and then, in the kiln, changing its chemistry permanently: heat drives out water and, at higher temperatures, begins vitrification, the partial fusing of the body into something dense, hard and stone-like. No other art has a comparable moment of total commitment — once the kiln cools, what happened in the kiln happened.',
      },
      {
        kind: 'para',
        text: 'This lesson walks the potter\'s full chain — clay bodies, handbuilding and wheel, firing cycles and kiln atmospheres, and the three-ingredient logic of glaze — and then looks across cultures at what fired clay has meant. It follows directly on Sculpture Fundamentals, which introduced modeling and armatures; clay is that process, plus fire.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Ceramics sits exactly on the fault line between art and craft, and every culture has answered the question differently — Chinese imperial kilns, Greek vase painters, Japanese tea masters, the Arts and Crafts revival. Studying it means studying both chemistry and civilization at once, and the kiln, which no eye can see into, makes every firing a genuine experiment.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Bodies, Building and the Wheel' },
      {
        kind: 'para',
        text: 'The first decision is the clay body. Earthenware, fired low, remains porous and terra-cotta warm — humanity\'s default pottery. Stoneware, fired higher, vitrifies enough to ring when struck and to hold water even unglazed; it is the workhorse of durable ware. Porcelain, built on kaolin and fired highest of all, goes white and, thinned, translucent at the wall — demanding, unforgiving and, historically, guarded by China for centuries. Every body shrinks as it dries and shrinks again in firing, takes additions poorly unless they are scored and slipped into place, and rewards wedging — the spiral kneading that evens moisture and drives out the air bubbles that would otherwise burst as steam in the kiln.',
      },
      {
        kind: 'para',
        text: 'Humanity made pots for millennia before the wheel, with three techniques that still carry the field. Pinch: a thumb into a ball of clay, the wall rotated and thinned between the fingers — every potter\'s first pot. Coil: ropes of clay stacked, pressed and blended, stroke by stroke — the technique of Pueblo potters in the American Southwest, who build large jars with no wheel at all, and of village potters across West Africa. Slab: sheets rolled and joined — soft slabs draped over molds for curve, leather-hard slabs cut and assembled for architecture. All joining obeys one commandment: score both surfaces, wet them with slip, press. Drying passes through stages — plastic, then leather-hard, when a pot can be trimmed, carved and handle-attached, then bone-dry greenware, fragile as a cracker and ready for the kiln.',
      },
      {
        kind: 'para',
        text: 'The potter\'s wheel is a machine for making clay lie symmetrically about an axis, and centering is its gate skill — physics explains the difficulty, since any asymmetry in a spinning mass is amplified into wobble until the clay is pressed truly to the axis. Then the sequence: open the center, pull the walls in passes, collar the form inward where wanted, and dry the pot to leather-hard for trimming — cutting the foot ring and attaching a pulled handle. A wheel-thrown cylinder with even walls is the beginner\'s honest trophy; every round form descends from it.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Wedged clay weighed out — a few hundred grams for a mug — seated on the wheel head and centered under both hands until it runs dead true.',
          'Opened and pulled into a cylinder of even wall thickness; wire-cut free, dried under plastic to slow it, then air-dried to leather-hard.',
          'Trimmed: pot inverted on the wheel, the foot ring cut and the base cleaned; a handle pulled from a wedge of clay and attached at leather-hard with scored, slipped joints.',
          'Bone dry — a day or days, depending on the air — then bisque-fired: a first, lower firing that leaves the ware porous enough to drink glaze but strong enough to handle.',
          'Glaze applied — dipped or poured — after waxing the foot so it cannot weld itself to the kiln shelf; the porous bisque drinks the wet glaze into an even coat.',
          'Glaze-fired to the body\'s maturity; after cooling the foot is stoned smooth, and the mug is at last a functional object, glaze fused to clay permanently.',
        ],
      },
      { kind: 'heading', text: 'Fire, Chemistry and Tradition' },
      {
        kind: 'para',
        text: 'The kiln does not simply get hot; it does heat work — the combined effect of temperature and time — which is why potters read firing not by a thermometer alone but by pyrometric cones, slender clay pyramids formulated to bend when the work is done. The standard chain is bisque, then glaze fire at the body\'s maturity. Atmosphere matters as much as heat: an electric kiln fires in oxidation, while fuel kilns can fire in reduction — burners starved of air so the flame strips oxygen from the glaze\'s metal oxides — the trick behind copper reds and the jade green of celadon. Beyond the standard lie the firing cultures: raku, pulled glowing into combustibles (a Japanese tea-ware tradition the West turned into performance); wood firing, where flying ash melts into glaze over days; and pit firing, whose smoke-clouds are the oldest decoration there is.',
      },
      {
        kind: 'para',
        text: 'Glaze is a glass engineered to melt onto and grip a clay body, and its recipe logic is three ingredients. Silica is the glass itself, but it needs enormous heat to melt alone, so fluxes (feldspar, limestone, wood ash) lower the melting point and alumina stiffens the melt so it stays on the pot instead of running onto the shelf: too little and the glaze pours, too much and it goes matte. Colorants ride on this chassis — iron for celadons and honey browns, copper for green or, in reduction, red; cobalt for blue; chrome with tin for pinks. The classic faults are readable chemistry: crazing, a network of fine cracks, means glaze and body shrink at different rates; shivering, glaze chipping off, is the mismatch reversed; pinholes and crawling report trapped gases and surface tension. Every serious potter keeps test tiles — glaze is chemistry learned by fired example.',
      },
      {
        kind: 'para',
        text: 'The cultures, briefly, because they are the deepest lesson. China made porcelain an imperial industry at Jingdezhen, a city of kilns; Korea answered with the inlaid celadons of the Gory court. Japan let the tea ceremony overturn finish itself: rough, asymmetrical, wood-fired tea bowls became treasures — the aesthetic of the humble and incomplete — and the twentieth-century mingei movement led by Yanagi Soetsu made anonymous folk craft a subject of reverence. Greek black-figure and red-figure vases were painting in refined slip, fixed by a brilliant three-phase firing of oxidation, reduction and re-oxidation that turned one slip black and left the other red. The Islamic world invented lusterware, a metallic film refired over the glaze, and tiled its architecture (see World Art Traditions). In the American Southwest, Maria and Julian Martinez developed black-on-black ware, and the studio potter Bernard Leach, heir to William Morris\'s Arts and Crafts, carried hand-made ware back to the industrial kitchen. Fired clay is where civilizations leave their ordinary fingerprints — every one of these traditions is also a dinner service.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Clay body', def: 'A blend of clays and minerals — earthenware, stoneware or porcelain — with its own firing range.' },
          { term: 'Wedging', def: 'Spiral kneading that homogenizes clay and removes trapped air before working.' },
          { term: 'Bisque', def: 'The first, lower firing that leaves ware strong yet porous, ready to absorb glaze.' },
          { term: 'Pyrometric cone', def: 'A slender clay pyramid formulated to bend at a given heat work, used to read a kiln.' },
          { term: 'Reduction firing', def: 'A fuel-kiln atmosphere starved of oxygen, which strips oxygen from glaze colorants.' },
          { term: 'Vitrification', def: 'The partial fusing of a clay body into a dense, glassy, stone-like structure at high temperature.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'Answer from the chain of process — body, build, fire, glaze, fire again — and from the three-ingredient logic of the glaze itself.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which clay body fires highest and turns white and, when thin, translucent?',
            options: ['Earthenware', 'Stoneware', 'Terra cotta', 'Porcelain'],
            answer: 3,
            explain: 'Porcelain, built on kaolin, matures at the top of the firing range and transmits light through a thin wall.',
          },
          {
            q: 'Bisque firing, before glazing, exists mainly to:',
            options: ['Melt the glaze onto the pot', 'Give ware strength while leaving it porous enough to take glaze', 'Fully vitrify the body', 'Burn out the grog'],
            answer: 1,
            explain: 'After bisque, ware handles without breaking yet still drinks water — exactly what even glaze application needs.',
          },
          {
            q: 'In a reduction atmosphere, copper colorants in glaze characteristically turn:',
            options: ['Blue', 'Green', 'Red', 'Black'],
            answer: 2,
            explain: 'The starved flame pulls oxygen from the copper oxide, producing the celebrated reduction reds of Chinese and later traditions.',
          },
          {
            q: 'In glaze chemistry, alumina\'s job is to:',
            options: ['Form the glass itself', 'Lower silica\'s melting point', 'Supply the color', 'Stiffen the melt so the glaze stays on the pot'],
            answer: 3,
            explain: 'Silica is the glass, flux melts it, and alumina stabilizes — too little and the glaze runs, too much and it goes matte.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Return to Sculpture Fundamentals for form in the round, and to World Art Traditions for the cultures sampled in the last section. If you can get near a kiln at all, wedge real clay: the hands learn in one evening what reading takes a chapter to say.',
        tone: 'path',
      },
    ],
  },
  {
    id: "art-sculpture-ceramics-craft",
    title: "Sculpture and Ceramics: Carving, Modeling, Casting and the Kiln",
    domain: "Arts & Culture",
    field: "Sculpture & Craft",
    branch: "Three Dimensions",
    tier: "core",
    concepts: [
      "Four verbs: carve, model, cast, construct",
      "Carving: subtractive and unforgiving",
      "Modeling: additive clay and armatures",
      "Lost-wax casting: multiplying the form",
      "Clay bodies and the kiln's two firings",
      "Glaze: glass fused to clay",
    ],
    words: 1292,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Sculpture is the art you walk around — form in three dimensions, made by four basic verbs. Carving subtracts, modeling adds, casting multiplies and constructing assembles; ceramics adds a fifth dimension, fire, and with it transformation. This core Sculpture & Craft topic covers how each process actually works, from chisel to bronze pour to kiln, and the practical chemistry that turns soft clay into permanent glazed objects. The drawing lesson taught seeing; this teaches making.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Sculpture is the most physical of the arts and the least forgiving of error — you cannot add marble back. Ceramics, its most accessible branch, puts four thousand years of craft within reach of any beginner: a community studio, a bag of clay and a kiln.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Carving is subtraction: you start with more material than the finished form and remove everything that is not it — Michelangelo described liberating the figure already inside the stone. The method runs coarse to fine: a point chisel knocks out bulk, a toothed chisel shapes, rasps and files refine, abrasives polish. Each material imposes law. Stone is superb in compression and weak in tension, so unsupported limbs and wide cantilevers snap — the marble Pietà holds its dead Christ safely draped across a broad base. Wood carves along the grain and splits along it too; a carved bowl must respect the log's rings.",
      },
      {
        kind: "para",
        text: "Modeling is addition: building up malleable material — clay, wax, plasteline — with fingers and tools, and revising forever, which is why it is the sculptor's sketching. Anything with reach or thinness needs an armature: a wire or pipe skeleton that bears the weight while the material builds around it. Modeled originals in clay are fragile and rarely final — their job is to be molded and cast, or fired directly as ceramic sculpture. The freedom is the point; modeling forgives everything carving does not.",
      },
      {
        kind: "para",
        text: "Casting multiplies one modeled form into many. Lost-wax casting — cire perdue — has run on the same principle for five thousand years: model in wax, encase it in refractory mold material, burn the wax out in a kiln, pour molten bronze into the void, break the mold, then chase the surface until the seams vanish. Editions are numbered like prints, making each bronze an original multiple. Modern variants use silicone rubber molds for plaster and resin, and even 3D-printed resin burned out in place of wax; a foundry still pours at the end.",
      },
      {
        kind: "para",
        text: "The fourth verb arrived with welding in the twentieth century: constructed sculpture assembles parts — steel plate, rod, found objects — instead of extracting or replicating them. Julio González taught Picasso to weld; David Smith built in burnished steel; assemblage extended the idea to junk, and Duchamp's readymades asked whether making was even required. Construction inverts carving's logic: form is designed as joints and additions, with weight and balance engineered openly.",
      },
      {
        kind: "para",
        text: "Ceramics is the branch of sculpture that ends in fire. Clay bodies differ by mineral mix: earthenware fires low and stays porous, stoneware vitrifies dense and hard, porcelain fires white and glassy at the highest temperatures. The material passes named stages — slip (liquid), plastic (workable), leather-hard (carvable and joinable), bone-dry (fragile greenware) — then two firings. The bisque firing, near 1000 °C, drives out remaining water and makes the ware porous enough to accept glaze; the glaze firing, up to about 1200–1300 °C for stoneware, melts the glaze to glass and vitrifies the body itself. Fired clay is a new material, not dried clay.",
      },
      {
        kind: "para",
        text: "Glaze is a glass engineered to melt at kiln temperature and stick: silica forms the glass, flux lowers its melting point, alumina keeps it from sliding off. Chemistry plus atmosphere make the colors — the same copper carbonate turns green in an oxygen-rich firing and deep red in reduction, when the kiln starves of oxygen. Heat work, not temperature alone, does the maturing, which is why pyrometric cones bend inside the kiln as witnesses. Potters wax the foot ring bare, because melted glaze welds a pot to the shelf forever.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "Drying shrinkage",
        latex: "L_{fired} = L_{wet} \\times (1 - s)",
        meaning: "Clay shrinks as water leaves and the body vitrifies — typically 5 to 12 percent by body; a 20 cm wet pot at 10 percent finishes near 18 cm, which is why lids are fitted against their own shrinkage.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: plan a stoneware mug — thrown cylinder, pulled handle, fitted proportions — knowing the clay shrinks 12 percent.",
          "Recall the governing ideas: shrinkage applies to every dimension; handles join at leather-hard; the foot ring stays waxed bare for the glaze firing.",
          "Apply: to finish at 9.5 cm tall, throw the cylinder to about 10.8 cm (9.5 ÷ 0.88). Pull the handle from a separate lug, let both pieces reach matching leather-hard, then score, slip and join. After the bisque, dip the glaze and wax the foot so nothing welds to the shelf.",
          "State the result: the fired mug lands near the intended size, the handle survives the glaze firing, and the base comes off the shelf clean.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Community pottery studios make this the most hands-on art form available to beginners.",
          "Public monuments are still lost-wax bronze — foundries and 3D printing now share one pipeline.",
          "Restorers match clay bodies, slips and glazes to repair historic ceramics.",
          "Product designers prototype in clay and plaster long before CAD renders.",
          "Museum modelmakers and paleo-artists cast editions of reconstructions.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The kiln punishes shortcuts: thick or sealed-hollow forms explode when trapped steam has nowhere to go — vent hollow forms and dry slowly. Glaze applied too thick runs onto shelves and takes chunks of pot with it; two clays with different shrink rates crack where they meet. In carving the errors are subtraction-shaped: a chisel slip through a cheek cannot be apologized away. And beginners confuse bone-dry strength with fired strength — greenware is chalk until chemistry makes it stone.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Armature", def: "The internal skeleton — wire, pipe, mesh — that supports a modeled form." },
          { term: "Lost-wax casting", def: "Molding a wax model, burning it out, and pouring metal into the void it leaves." },
          { term: "Greenware", def: "Unfired, bone-dry clay — chalk-fragile and still soluble in water." },
          { term: "Bisque", def: "The first, lower firing that de-waters and stabilizes ware for glazing." },
          { term: "Vitrification", def: "The partial glassification of a clay body at high temperature, making it dense and strong." },
          { term: "Glaze", def: "A glass-forming coating — silica, flux, alumina — melted onto ware in the firing." },
          { term: "Leather-hard", def: "The clay stage firm enough to carve and join; the moment for handles and feet." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "In lost-wax casting, the wax is removed by:",
            options: ["Dissolving it in acid", "Burning it out of the mold before the pour", "Melting it into the bronze", "Hand carving"],
            answer: 1,
            explain: "The kiln burns the wax out of the refractory mold, leaving a void that receives the molten metal.",
          },
          {
            q: "Trapped air and steam in a thick, sealed clay form cause:",
            options: ["Better vitrification", "Explosions in the kiln", "Faster drying", "No effect at all"],
            answer: 1,
            explain: "Steam needs an exit — vent hollow forms and dry slowly, or the ware bursts in the firing.",
          },
          {
            q: "A wet pot 20 cm tall in a clay shrinking 10 percent finishes near:",
            options: ["20 cm", "19.5 cm", "18 cm", "16 cm"],
            answer: 2,
            explain: "20 × 0.90 = 18 cm — shrinkage applies to every dimension, so plan sizes before making.",
          },
          {
            q: "Handles are typically joined at the:",
            options: ["Slip stage", "Leather-hard stage", "Bone-dry stage", "Post-bisque stage"],
            answer: 1,
            explain: "Leather-hard is firm enough to carve and score but still moist enough to bond with slip.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Find a local clay studio, or start with a bar of carving soap and a spoon. Natural next steps: the drawing lesson's value training for your eye, the architecture topic for structural intuition, and the color theory lesson for glaze-adjacent palette thinking.",
        tone: "path",
      },
    ],
  },
]

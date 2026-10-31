/**
 * Knowledge Universe — Animation — Chapter 04: Digital & 3D Production
 * 1 lesson · ~1,366 words
 * field: Animation & Sequential Art
 * legacy sources: x40-arts-animation-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Digital & 3D]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 animation-digital-3d — The Digital Pipeline: Modeling, Rigging and Rendering
 */
import type { KnowledgeTopic } from '../../types'

export const animationCh04: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'animation-digital-3d',
    title: 'The Digital Pipeline: Modeling, Rigging and Rendering',
    domain: 'Arts & Culture',
    field: 'Animation & Sequential Art',
    branch: 'Digital & 3D',
    tier: 'intermediate',
    concepts: [
      'Polygon meshes: vertices, edges, faces',
      'Rigging and skinning: the digital skeleton',
      'Keyframes and animation curves',
      'Simulation for cloth, hair and crowds',
      'Shading, texturing and UV mapping',
      'Render passes and compositing',
    ],
    words: 1366,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Computer animation did not replace the animation craft; it re-housed it. A 3D production still designs characters, still blocks their performances, still lights and photographs them — but the drawing desk becomes a pipeline of specialised stages, each feeding the next. Modeling constructs the geometry, rigging equips it for motion, animation performs, simulation handles what refuses to be posed, lighting and shading dress the world, and rendering turns all of it into final images that compositing assembles.',
      },
      {
        kind: 'para',
        text: 'The stages exist because 3D data is expensive to produce and easy to ruin. A single character shot may involve a dozen specialists whose work must interlock, and the pipeline is the contract between them. Understanding the order — and why the order is the order — is the difference between a hobbyist making a clip and a studio shipping a film.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every stage of the 3D pipeline exists to defer commitment. Change a shader after lighting and the shot re-renders; change the rig before animation and everything downstream updates. Knowing what to lock, and when, is pipeline literacy.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Modeling builds form from polygons — flat shapes defined by vertices, edges and faces, welded into a mesh. Characters are usually built from four-sided polygons, called quads, because quad topology subdivides cleanly into smooth surfaces and, more importantly, deforms cleanly: joints like shoulders and knees need rings of edges — edge loops — running around them so the mesh has geometry to bend with. A model without loops at the knees cannot crease believably no matter how good its rig is. Sculpting and curve-based methods exist, but polygonal modeling remains the backbone of studio work.',
      },
      {
        kind: 'para',
        text: 'Rigging gives the mesh its machinery. A rigger builds a hierarchy of joints — the digital skeleton — plus control curves an animator can grab, and connects them with two kinds of mathematics: forward kinematics rotates each joint down the chain in order, while inverse kinematics takes a goal, such as a hand placed on a railing, and solves the chain backwards to reach it. The mesh is then bound to the skeleton by skinning, in which every vertex receives weights describing how much each joint pulls on it. Weight painting is the tedious, decisive art of this binding — a badly painted shoulder chews the armpit when the arm lifts.',
      },
      {
        kind: 'para',
        text: 'Animators work by setting keyframes: values for the controls at chosen frames, which the software interpolates between. The interpolation is visible in the graph editor as animation curves — splines whose handles encode acceleration. This is where slow-in and slow-out from the classical principles physically lives: a linear curve between keys produces robotically even speed, while easing the handle shapes produces the accelerate-and-settle of real motion. Curves are read like sheet music; experienced animators diagnose a shot from curve shape alone, spotting an unwanted overshoot as a bump in the translate channel.',
      },
      {
        kind: 'para',
        text: 'Some motion is not posed but computed. Cloth, hair and fur, fluids, destruction and crowds go to simulation departments, where artists set physical parameters — fabric stiffness, hair clumping, flocking behaviours — and constraints, then let solvers generate the motion frame by frame. Simulation is a partnership rather than an autopilot: results are shaped by nudging parameters, painting maps of stiffness across a coat, layering forces, and re-running takes like a director re-shooting until the performance is right.',
      },
      {
        kind: 'para',
        text: 'Shading defines how surfaces respond to light: a shader is a recipe describing roughness, metalness, transparency and subsurface scattering — the difference between wax skin, plastic skin and skin itself. Texturing supplies surface detail as painted images, placed on the model through UV mapping: the mesh is cut and unfolded flat, like a tailor\'s pattern, and the flat map is painted so it wraps back without visible seams. Lighting then places virtual sources — key, fill and rim, the same grammar as live-action cinematography — and computes how they interact with the shaded surfaces, whether by tracing actual light paths or by faster approximations.',
      },
      {
        kind: 'para',
        text: 'Rendering converts the lit scene into images, and it is measured in machine-hours; a single feature frame can take hours across a render farm. To keep that affordable, shots render in passes — separate layers for diffuse color, specular highlights, shadows, ambient occlusion and depth — which compositors recombine and grade in 2D. The payoff is control: a window glow that reads too weak is lifted in the composite in minutes instead of triggering another night of rendering.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Model check: the courtyard and hero are approved geometry, but walk-cycle tests reveal bad edge loops behind the knees — fix the topology now, before any performance exists.',
          'Rig: legs on inverse kinematics for planted feet, arms on forward kinematics for swinging; skin the shoulders with extra weight where the cloak will pull.',
          'Animate: block the walk pose-to-pose against the storyboard, then refine in the graph editor, easing every start and stop.',
          'Simulate: run the cloak and hair against the recorded wind curves; keep three takes and pick the one that reads at a glance.',
          'Light and surface: a cool morning key with a warm bounce card, and a UV-mapped paint pass for the flagstones.',
          'Render in passes and comp: performance, cloth and lit set combined, with the windows\' glow lifted and a soft fog card behind the wall — no re-render required.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'para',
        text: 'Feature animation and visual effects run the full pipeline, but its stages dominate wherever imagery is made. Game studios model, rig, animate and light in real-time engines, trading offline rendering for frame budgets measured in milliseconds; product visualisation lights virtual packaging; architects walk clients through rendered buildings. Because the stage names are shared, a rigger, a compositor and a lookdev artist can join the same project having never worked together before.',
      },
      {
        kind: 'para',
        text: 'For individuals the pipeline scales down but keeps its order — and the most common beginner mistake is decorating before performing: texturing a character whose topology cannot bend, or lighting a scene whose animation is still placeholder. The discipline is always the same: lock upstream, then commit downstream.',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Polygon mesh', def: 'A 3D form built from vertices, edges and faces; character work favours quads for clean deformation.' },
          { term: 'Rig', def: 'The skeleton of joints plus animator-facing controls that makes a mesh poseable.' },
          { term: 'Skinning', def: 'Binding mesh vertices to joints with weights that set how far each joint\'s influence reaches.' },
          { term: 'Inverse kinematics', def: 'Solving a joint chain backwards from a placed goal, such as a hand gripping a rail.' },
          { term: 'Animation curve', def: 'The interpolated spline between keyframes whose shape encodes acceleration — the graph-editor home of slow-in and slow-out.' },
          { term: 'Render pass', def: 'A separated layer of the final image — shadows, specular, depth — composited afterward for cheap adjustment.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'Quick checks on why the pipeline is ordered the way it is — the dependencies, not the software.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Why do modelers build characters from quads rather than triangles?',
            options: ['Quads render faster', 'Triangles cannot be lit', 'Quad topology subdivides and deforms cleanly, giving joints geometry to bend with', 'Quads are required by all software'],
            answer: 2,
            explain: 'Rings of quads flow around joints like fabric around an elbow; irregular triangles pinch and crease when the rig bends them.',
          },
          {
            q: 'In the graph editor, perfectly linear interpolation between two keys produces:',
            options: ['Natural easing', 'Robotically even speed', 'Automatic anticipation', 'Follow-through'],
            answer: 1,
            explain: 'Even spacing in time is the machine signature — which is why animators curve the handles and reintroduce slow-in and slow-out.',
          },
          {
            q: 'Skinning weights determine:',
            options: ['The color of the mesh', 'How much each joint pulls on each vertex as it moves', 'The render time of a shot', 'Which passes are rendered'],
            answer: 1,
            explain: 'Weights are the tug-of-war between joints over every point of the surface; bad weights are why meshes tear and chew.',
          },
          {
            q: 'The main reason shots are rendered in passes is:',
            options: ['Adjustments can be made in compositing without paying for re-renders', 'Passes look more artistic', 'The software cannot render whole images', 'It speeds up simulation'],
            answer: 0,
            explain: 'A tweak made in a 2D composite costs minutes; the same tweak made upstream costs another pass through the render farm.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Next, the comics-grammar lesson stays with sequential images but hands the timeline back to the reader, while the twelve principles lesson explains the perception this whole pipeline is engineered to serve.',
        tone: 'path',
      },
    ],
  },
]

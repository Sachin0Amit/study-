/**
 * Knowledge Universe — Human Anatomy & Physiology — Chapter 03: When Systems Fail
 * 1 lesson · ~1,728 words
 * field: Anatomy & Physiology
 * legacy sources: x35-nsw-hsc-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Disorder Technologies]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 bio-sensory-organ-technologies — When Organs Fail: Hearing, Vision and Kidney Technologies
 */
import type { KnowledgeTopic } from '../../types'

export const humanAnatomyPhysiologyCh03: KnowledgeTopic[] = [
  {
    id: 'bio-sensory-organ-technologies',
    title: 'When Organs Fail: Hearing, Vision and Kidney Technologies',
    domain: 'Life Sciences',
    field: 'Anatomy & Physiology',
    branch: 'Disorder Technologies',
    tier: 'intermediate',
    concepts: [
      'Failure modes: conductive versus sensorineural hearing loss',
      'Hearing aids versus cochlear implants',
      'Refractive errors, cataract and vision correction',
      'Kidney failure: dialysis versus transplantation',
      'Matching the device to the failure',
      'Evaluating technologies: effectiveness, access, ethics',
    ],
    words: 1728,
    readMins: 9,
    addedOn: '2026-10-25',
    blocks: [
      { kind: 'heading', text: 'Why replacement technologies matter' },
      {
        kind: 'para',
        text:
          "The body's sensory and filtering organs fail more often than any other systems, and modern medicine's answer is a family of devices that either assist the failing part or substitute for it outright. These technologies are examined not as engineering curiosities but as applied physiology: every device encodes a claim about how the organ worked before it failed, and the surest way to understand a device is to ask which part of the physiology it replaces. The physiology itself — hair cells, photoreceptors, nephrons — is taught in the body-systems lessons of this library; this lesson builds on that ground and focuses on the technology layer: what each device does, what kind of failure it answers, and what trade-offs come with it.",
      },
      {
        kind: 'para',
        text:
          "A recurring theme across all three organs is the division between assist and replace. Some failures leave tissue alive but underperforming — a lens that has lost focus, hair cells that need louder input — and the technology assists. Other failures leave tissue dead or absent — cataract behind an intact nerve, hair cells destroyed by noise or drugs, kidneys gone to chronic disease — and the technology must substitute, wholly or partly, for the lost function. Diagnostic questions at examination level almost always begin by asking you to classify the failure, because the classification determines the treatment: the wrong device for the failure does nothing, which is why the matching logic matters more than any specification sheet.",
      },
      { kind: 'heading', text: 'Hearing: from amplification to substitution' },
      {
        kind: 'para',
        text:
          "Hearing losses divide into two classes with different answers. Conductive loss means sound is not reaching the inner ear efficiently — outer or middle ear blockage, ossicle damage, fluid — and the cochlea itself is fine. Sensorineural loss means the cochlea's hair cells or the auditory nerve are damaged, so the signal either is never generated or never travels. The distinction is testable and decisive: pure-tone tests, tuning-fork comparisons between bone and air conduction, and tympanometry all exist to sort one from the other before any device is chosen.",
      },
      {
        kind: 'para',
        text:
          "The two main technologies map onto the two classes. A hearing aid is an amplifier: microphone, processor, and a speaker that delivers more sound energy to whatever pathway remains. It answers conductive and mild-to-moderate sensorineural losses, where enough hair cells survive to transmit an enlarged signal — but it cannot help where no working pathway exists, because amplifying sound that nothing can receive just delivers louder silence. A cochlear implant bypasses the hair cells altogether: an external processor converts sound to electrical patterns, and an array of electrodes threaded into the cochlea stimulates the auditory nerve directly. It answers severe-to-profound sensorineural loss, where hair cells are gone but the nerve lives — substitution, not amplification. The trade-offs follow: an implant gives electrical rather than natural hearing, requires surgery and long rehabilitation, and its outcomes depend heavily on age at implantation and duration of deafness, which is why candidate selection is a whole field of its own.",
      },
      {
        kind: 'callout',
        title: 'Match the device to the failure',
        tone: 'warn',
        text:
          "Amplification helps a weak signal; substitution helps a dead pathway. A hearing aid on a profound sensorineural loss delivers louder sound to nothing; an implant on a purely conductive loss is major surgery to bypass a problem a simpler device fixes. Every examination question about devices is secretly a question about the failure mode first.",
      },
      { kind: 'heading', text: 'Vision: optics you can wear or zap' },
      {
        kind: 'para',
        text:
          "Most vision problems are optical, not neural: the eye's focusing machinery puts the image in the wrong place. Myopia — too much focusing power or too long an eye — lands the image in front of the retina; hyperopia lands it behind; with age the lens stiffens and near focus fails. Because the retina and nerve are intact, the fixes are optical and range from trivial to surgical: external lenses (glasses, contact lenses) that add or subtract converging power, and refractive surgery that reshapes the cornea with a laser so the eye itself focuses correctly. These are pure assist technologies — they change the optics and leave the physiology untouched.",
      },
      {
        kind: 'para',
        text:
          "Cataract is the instructive contrast: the lens clouds, usually with age, and no amount of external optics can focus through a fogged window. The answer is substitution — remove the clouded lens surgically and implant a clear artificial intraocular lens in its place. The implanted lens restores the eye's optics with the retina still doing the real work, which is why cataract surgery is among the highest-success operations in medicine. At the other extreme, where the retina or nerve has failed, optical devices of any kind reach their limit — the signal has nowhere to land — and research-level substitutes (retinal implants) try to drive the remaining nerve directly, the visual analogue of the cochlear implant.",
      },
      {
        kind: 'example',
        title: 'Choosing the device: three cases',
        steps: [
          'Case one: a child with trouble hearing the teacher; tests show normal bone conduction but reduced air conduction, with fluid behind the eardrum — a conductive loss; the answer is treatment of the cause plus amplification if needed, not implantation.',
          'Case two: an adult who cannot read print without glasses after forty — the lens has stiffened (presbyopia); reading glasses add the lost converging power, an optical assist with no surgery.',
          'Case three: progressive clouding of the lens with glare and faded colours — cataract; optical aids only delay the decision, and the definitive answer is lens substitution.',
        ],
      },
      { kind: 'heading', text: 'Kidneys: filtering by machine or by graft' },
      {
        kind: 'para',
        text:
          "Kidney failure is different in kind: the organ does chemical work — filtering nitrogenous waste, balancing water and salts, contributing to blood pressure and red-cell production — and no wearable optical trick can do any of it. When kidneys fail chronically, the two real options are dialysis and transplantation. Haemodialysis pumps the patient's blood through an artificial membrane: waste diffuses out down a concentration gradient into dialysate fluid whose composition is engineered so that needed solutes stay and wastes leave. Peritoneal dialysis uses the patient's own abdominal membrane as the filter, with dialysate cycled through the body cavity. Both are substitution technologies, life-sustaining but intermittent — they clean the blood on a schedule rather than continuously, and the patient carries the burden of diet, time and access care.",
      },
      {
        kind: 'para',
        text:
          "Transplantation is the single technology that restores continuous, physiological kidney function — a working graft filters all day without appointments. Its costs are different: a lifetime of immunosuppressive drugs to stop rejection, surgical risk, and above all scarcity, because the waiting list depends on donors. The examination framing is evaluative, not just descriptive: effectiveness (dialysis sustains but does not cure; transplant restores), access (dialysis is available wherever machines and trained staff exist; transplants are rationed by supply), and the ethics that follow (allocation rules, living donation, equity). A complete answer names the trade-off rather than declaring a winner, because the ranking changes with the patient's circumstances — which is exactly the point of asking.",
      },
      { kind: 'heading', text: 'Evaluating a technology' },
      {
        kind: 'para',
        text:
          "Across all three organs, the same four questions evaluate any device well. Effectiveness: how completely does it restore function, and for whom? Invasiveness: what surgery, training or daily burden does it demand? Access: what does it cost, and who can get it — a device that works but is unavailable to most of the affected population has limited public-health value. Ethics: whose decisions count in choosing it, and what do allocation and consent look like? Strong examination answers move through all four rather than lingering on how the device works, because the syllabus context is health decision-making, not engineering.",
      },
      {
        kind: 'terms',
        items: [
          { term: 'conductive hearing loss', def: "Failure of sound transmission through the outer or middle ear, with the cochlea intact — amplification's territory." },
          { term: 'sensorineural hearing loss', def: "Damage to cochlear hair cells or the auditory nerve — the territory of cochlear implants once loss is severe." },
          { term: 'cochlear implant', def: "A device that converts sound to electrical stimulation of the auditory nerve, bypassing destroyed hair cells." },
          { term: 'intraocular lens', def: "The artificial lens implanted after cataract removal, substituting for the eye's clouded natural lens." },
          { term: 'dialysate', def: "The engineered fluid in dialysis whose gradient pulls wastes from the blood while preserving needed solutes." },
          { term: 'immunosuppression', def: "The drug regimen that prevents graft rejection after transplantation — the standing cost of a working transplant." },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Bone conduction is normal but air conduction is reduced, with fluid behind the eardrum. The failure class and the appropriate first response are:',
            options: [
              'sensorineural loss — refer for cochlear implant assessment',
              'conductive loss — treat the cause; amplify if needed',
              'central processing disorder — hearing aids in both ears',
              'sensorineural loss — hearing aid set to maximum gain',
            ],
            answer: 1,
            explain:
              'The inner-ear pathway is intact (normal bone conduction), so the loss is conductive: treat the middle-ear cause and amplify if needed — implantation bypasses a problem that is not the problem.',
          },
          {
            q: 'Why does a hearing aid not help profound sensorineural loss?',
            options: [
              'its speaker is not loud enough',
              'there are no working hair cells to receive and transmit the amplified signal',
              'it damages the auditory nerve further',
              'it only corrects conductive losses',
            ],
            answer: 1,
            explain:
              'Amplification delivers more energy to whatever pathway remains; where the pathway itself is destroyed, the answer is nerve-level substitution by implant.',
          },
          {
            q: 'Cataract is treated by lens substitution rather than stronger glasses because:',
            options: [
              'glasses cannot be made thick enough',
              'the clouded lens physically blocks light, so no external optics can focus through it',
              'surgery is always cheaper than glasses',
              'the retina has also failed',
            ],
            answer: 1,
            explain:
              'Cataract is an optical blockage inside the eye; the fix is removing the obstruction and substituting a clear intraocular lens, with the retina still doing the real work.',
          },
          {
            q: 'Which statement best captures the dialysis-versus-transplant trade-off?',
            options: [
              'dialysis restores full continuous function; transplant is temporary',
              'transplant restores continuous physiological function but requires immunosuppression and donor supply; dialysis sustains life intermittently',
              'dialysis is always the ethical choice',
              'transplantation requires no follow-up care',
            ],
            answer: 1,
            explain:
              'Dialysis substitutes on a schedule; transplant restores continuous function at the price of a lifetime of immunosuppression and rationing by donor availability — an evaluation, not a slogan.',
          },
        ],
      },
      { kind: 'heading', text: 'Key takeaways' },
      {
        kind: 'list',
        items: [
          'Classify the failure first — assist technologies answer weak pathways, substitution technologies answer dead ones.',
          'Hearing: aids amplify for conductive and mild sensorineural losses; implants substitute for destroyed hair cells when the nerve lives.',
          'Vision: most defects are optical and answer to external lenses or laser reshaping; cataract needs lens substitution.',
          'Kidneys: dialysis substitutes intermittently by diffusion; transplant restores continuous function at the cost of immunosuppression and scarcity.',
          'Evaluate any technology on effectiveness, invasiveness, access and ethics — the ranking changes with the patient.',
        ],
      },
    ],
  },
]

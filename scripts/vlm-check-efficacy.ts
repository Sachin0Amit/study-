/**
 * VLM legibility check for the study-self-efficacy-mindset notebook sketch.
 * Usage: bun scripts/vlm-check-efficacy.ts <image-path>
 */
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'

async function main() {
  const path = process.argv[2]
  if (!path) {
    console.error('usage: bun scripts/vlm-check-efficacy.ts <image-path>')
    process.exit(1)
  }
  const zai = await ZAI.create()
  const b64 = fs.readFileSync(path).toString('base64')
  const res = await zai.chat.completions.createVision({
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'This is supposed to be a hand-drawn notebook sketch of a diagram with a central box labeled SELF-EFFICACY and four feeder boxes connected by converging arrows, labeled: Mastery experience (bank a small win, strongest source), Vicarious models (a peer copes then succeeds), Social persuasion (specific feedback), Physiological state (readiness not threat). Briefly: (1) is it legible and coherent (labels readable, no mangled or garbled text, arrows sensible)? (2) does it read as an authentic hand-drawn pen notebook sketch? Answer with "LEGIBLE" or "GARBLED" plus one short line of reasoning.',
          },
          { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${b64}` } },
        ],
      },
    ],
  })
  console.log(res.choices[0]?.message?.content ?? 'NO RESPONSE')
}

main()

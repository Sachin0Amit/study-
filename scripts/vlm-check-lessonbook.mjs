// VLM check for LESSONBOOK generated sketches — usage:
//   node scripts/vlm-check-lessonbook.mjs ./public/diagrams/<file>.jpg "<expected content hint>"
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'

const [file, hint] = process.argv.slice(2)
if (!file) { console.error('usage: node scripts/vlm-check-lessonbook.mjs <image> [hint]'); process.exit(1) }

const b64 = fs.readFileSync(file).toString('base64')
const zai = await ZAI.create()
const res = await zai.chat.completions.createVision({
  messages: [{
    role: 'user',
    content: [
      { type: 'text', text: `You are QA-checking an AI-generated hand-drawn notebook sketch for a study book. Describe what the sketch shows (labels, diagrams). Then judge: is it a clean, legible hand-drawn notebook sketch suitable for a student textbook (PASS), or severely garbled/nonsensical text or structure (FAIL)? Hint of expected content: ${hint || 'a hand-drawn study diagram'}. End your reply with exactly PASS or FAIL.` },
      { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${b64}` } },
    ],
  }],
})
const text = res?.choices?.[0]?.message?.content ?? ''
console.log(text)
console.log('VERDICT:', /PASS\s*$/i.test(text.trim()) ? 'PASS' : 'FAIL')

import { KNOWLEDGE_DOMAIN_FILES, countTopicWords } from '../src/data/knowledge/index'
const out: Record<string, { words: number; readMins: number }> = {}
for (const f of KNOWLEDGE_DOMAIN_FILES)
  for (const t of f.topics) {
    const words = countTopicWords(t)
    out[t.id] = { words, readMins: Math.max(2, Math.round(words / 200)) }
  }
console.log(JSON.stringify(out))

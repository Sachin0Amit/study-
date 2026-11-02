#!/bin/bash
# Self-retrying browser QA: attempts until lesson body fully renders, then full QA.
cd /home/z/my-project
QA="attempts: "
for attempt in 1 2 3 4 5 6; do
  pkill -f "next-server" 2>/dev/null; pkill -f "bun run dev" 2>/dev/null; sleep 2
  nohup bun run dev > /tmp/devlog.txt 2>&1 &
  sleep 8
  ok=0
  for i in 1 2 3 4 5; do
    code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 60 "http://localhost:3000/?lesson=ku-math-quadratics-completing-square" 2>/dev/null)
    [ "$code" = "200" ] && ok=1 && break; sleep 5
  done
  [ "$ok" = "1" ] || { QA="$QA[$attempt:no-server] "; continue; }
  agent-browser close >/dev/null 2>&1
  if ! agent-browser open "http://127.0.0.1:3000/?lesson=ku-math-quadratics-completing-square" >/dev/null 2>&1; then
    QA="$QA[$attempt:open-fail] "; continue
  fi
  sleep 14
  body=$(agent-browser eval "(() => { const t = document.body.innerText; return JSON.stringify({ missouri: t.includes('BM 13901'), fig1: t.includes('Figure 1'), fig2: t.includes('Figure 2'), derive: t.includes('Quadratic Formula, Derived'), quiz: t.includes('Check Yourself'), balancer: t.includes('fastest door'), dmd: t.includes('reading-frame'), svgCount: document.querySelectorAll('svg').length, len: t.length }) })()" 2>/dev/null)
  echo "attempt $attempt body: $body"
  echo "$body" | rg -q 'missouri..:true' || { QA="$QA[$attempt:body-incomplete] "; agent-browser close >/dev/null 2>&1; continue; }
  echo "$body" | rg -q 'fig1..:true' || { QA="$QA[$attempt:no-figure] "; agent-browser close >/dev/null 2>&1; continue; }
  echo "=== FULL RENDER ATTEMPT $attempt — proceeding with QA ==="
  echo "=== QUIZ SECTION PRESENT ==="
  agent-browser eval "(() => { const t=document.body.innerText; return JSON.stringify({ checkSelf: /check yourself/i.test(t), q1opt: t.includes('x = ±7'), quizWords: (t.match(/Correct/g)||[]).length }) })()" 2>/dev/null
  echo "=== QUIZ Q1 ==="
  agent-browser eval "(() => { const btns=[...document.querySelectorAll('button')]; const b=btns.find(x=>x.innerText.includes('x = ±7')); if(!b) return 'Q1 option not found among ' + btns.length; b.click(); return 'clicked: ' + b.innerText.trim().slice(0,30); })()" 2>/dev/null
  sleep 3
  agent-browser eval "(() => { const t=document.body.innerText; const m=t.match(/Correct[^\n]{0,160}/); return m ? m[0] : 'no-correct-feedback'; })()" 2>/dev/null
  echo "=== CONSOLE ERRORS ==="
  agent-browser errors 2>&1 | tail -3
  echo "=== MOBILE 390 ==="
  agent-browser set viewport 390 844 >/dev/null 2>&1
  sleep 2
  agent-browser eval "JSON.stringify({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth })" 2>/dev/null
  agent-browser close >/dev/null 2>&1
  echo "=== QA COMPLETE (attempt $attempt) ==="
  exit 0
done
echo "=== QA FAILED AFTER RETRIES: $QA ==="
exit 1

#!/bin/bash
# One-shot QA for the rewritten calc-linearization-differentials lesson (queue #5).
cd /home/z/my-project
QA="attempts: "
for attempt in 1 2 3 4 5 6; do
  pkill -f "next-server" 2>/dev/null; pkill -f "bun run dev" 2>/dev/null; sleep 2
  nohup bun run dev > /tmp/devlog.txt 2>&1 &
  sleep 8
  ok=0
  for i in 1 2 3 4 5; do
    code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 60 "http://localhost:3000/?lesson=ku-calc-linearization-differentials" 2>/dev/null)
    [ "$code" = "200" ] && ok=1 && break; sleep 5
  done
  [ "$ok" = "1" ] || { QA="$QA[$attempt:no-server] "; continue; }
  agent-browser close >/dev/null 2>&1
  if ! agent-browser open "http://127.0.0.1:3000/?lesson=ku-calc-linearization-differentials" >/dev/null 2>&1; then
    QA="$QA[$attempt:open-fail] "; continue
  fi
  sleep 14
  body=$(agent-browser eval "(() => { const t = document.body.innerText; return JSON.stringify({ opening: t.includes('oldest computational idea in calculus'), fig1: t.includes('Figure 1'), deriv1: t.includes('How Fast the Gap Grows'), deriv2: t.includes('Why the Exponent Multiplies Relative Error'), we1: t.includes('sqrt{9.1}') || /\u221a9\.1/.test(t), quiz: /check yourself/i.test(t), matrixQ: /List-I/.test(t), assertQ: /Assertion \(A\)/.test(t), recap: t.includes('Five-Minute Recap'), dispCount: document.querySelectorAll('.katex-display').length, svgCount: document.querySelectorAll('svg').length, len: t.length }) })()" 2>/dev/null)
  echo "attempt $attempt body: $body"
  echo "$body" | rg -q 'opening..:true' || { QA="$QA[$attempt:body-incomplete] "; agent-browser close >/dev/null 2>&1; continue; }
  echo "$body" | rg -q 'dispCount..:12' || { QA="$QA[$attempt:display-count] "; agent-browser close >/dev/null 2>&1; continue; }
  echo "=== FULL RENDER ATTEMPT $attempt — proceeding with QA ==="
  echo "=== QUIZ Q1 (click correct: L(x) = f(a) + f'(a)(x - a)) ==="
  agent-browser eval "(() => { const btns=[...document.querySelectorAll('button')]; const b=btns.find(x=>/f\u2032\(a\)\(x\s*\u2212\s*a\)/.test(x.innerText)); if(!b) return 'Q1 option not found among ' + btns.length; b.click(); return 'clicked: ' + b.innerText.replace(/\s+/g,' ').trim().slice(0,40); })()" 2>/dev/null
  sleep 3
  agent-browser eval "(() => { const t=document.body.innerText; const m=t.match(/Correct[^\n]{0,200}/i); return m ? m[0].replace(/\s+/g,' ').slice(0,180) : 'no-correct-feedback'; })()" 2>/dev/null
  echo "=== WHY-WRONG PRESENT ==="
  agent-browser eval "(() => { const t=document.body.innerText; return JSON.stringify({ whyWrong: /drops the value|dimensionally incoherent/i.test(t), qCounter: (t.match(/QUESTION \d+ OF \d+/i)||[])[0]||'none' }) })()" 2>/dev/null
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

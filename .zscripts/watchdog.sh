#!/bin/bash
# StudyVerse dev watchdog — revives the Next dev server if it dies (OOM etc.)
# Runs forever; intended to be started detached: setsid nohup .zscripts/watchdog.sh &
LOG=/home/z/my-project/dev.log
cd /home/z/my-project
while true; do
  sleep 5
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 45 http://127.0.0.1:3000/ 2>/dev/null)
  if [ "$code" != "200" ]; then
    # confirm process really gone (avoid racing a slow compile)
    sleep 4
    code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 45 http://127.0.0.1:3000/ 2>/dev/null)
    if [ "$code" != "200" ]; then
      echo "[watchdog $(date '+%H:%M:%S')] dev server down (http:$code) — restarting" >> "$LOG"
      pkill -f "next dev" 2>/dev/null
      pkill -f "next-server" 2>/dev/null
      sleep 2
      (setsid nohup env NODE_OPTIONS="--max-old-space-size=1536" bun run dev >> "$LOG" 2>&1 < /dev/null &)
      sleep 60 # give it time to boot+compile before next check
    fi
  fi
done

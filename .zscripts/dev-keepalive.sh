#!/bin/bash
# Keepalive: restarts the Next.js dev server only if the PROCESS died.
# Never kills based on curl — compilation takes ~15s with no response.
cd /home/z/my-project
export NODE_OPTIONS="--max-old-space-size=1792"
while true; do
  if ! pgrep -f "next dev" > /dev/null 2>&1; then
    sleep 3
    if ! pgrep -f "next dev" > /dev/null 2>&1; then
      nohup bun run dev > /dev/null 2>&1 &
      echo "[$(date +%H:%M:%S)] restarted dev server" >> /tmp/keepalive.log
    fi
  fi
  sleep 8
done

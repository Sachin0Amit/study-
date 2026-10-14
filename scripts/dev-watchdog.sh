#!/bin/bash
# dev-server watchdog: restarts the Next.js dev server if the process dies (e.g. OOM kill).
# Checks the PROCESS, not the HTTP response, to avoid false restarts during slow compiles.
cd /home/z/my-project
while true; do
  if ! pgrep -f "next dev" > /dev/null 2>&1; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') [watchdog] dev server down — restarting" >> /home/z/my-project/watchdog.log
    (nohup bun run dev > /dev/null 2>&1 &)
    sleep 45
  fi
  sleep 15
done

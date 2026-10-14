#!/bin/bash
# dev-server watchdog: restarts the Next.js dev server if it dies (e.g. OOM kill).
# Checks the LISTENING PORT (ss), which is robust during slow compiles and immune
# to process-name races. Uses a lockfile to avoid double-start when the orchestrator
# also launches the server at the same moment.
cd /home/z/my-project
LOCK=/tmp/watchdog-start.lock
while true; do
  if ! ss -tln 2>/dev/null | grep -q ":3000 "; then
    # Only restart if no other start attempt is in flight (lock held for 60s)
    if mkdir "$LOCK" 2>/dev/null; then
      echo "$(date '+%Y-%m-%d %H:%M:%S') [watchdog] port 3000 not listening — restarting dev server" >> /home/z/my-project/watchdog.log
      (nohup bun run dev > /home/z/my-project/dev.log 2>&1 &)
      # Hold the lock for 60s while the server boots and binds the port
      (sleep 60; rmdir "$LOCK" 2>/dev/null) &
    fi
    sleep 30
  fi
  sleep 15
done

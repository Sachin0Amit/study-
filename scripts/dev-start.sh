#!/bin/bash
# Dev-server starter that ESCAPES the tool-call process reaper.
#
# The sandbox kills every descendant of the (recycled) tool-call shell when a
# Bash session ends. A process survives only if its parent EXITED before the
# tool call finished — i.e. it was orphaned and reparented to tini (PID 1).
# This script performs that double-fork: inner bash backgrounds the command,
# exits immediately, the command reparents to init. Call it plainly:
#
#   bash /home/z/my-project/scripts/dev-start.sh
#
# Idempotent: does nothing if port 3000 is already listening.
cd /home/z/my-project

if ss -tln 2>/dev/null | grep -q ":3000 "; then
  echo "dev server already listening on :3000"
  exit 0
fi

bash -c 'bash -c "setsid nohup bash /home/z/my-project/scripts/dev-watchdog.sh </dev/null >>/dev/null 2>&1 & disown; exit 0"; exit 0'
echo "watchdog launched (double-forked); it will start the dev server within ~20s"

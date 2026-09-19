---
description: Re-verify the mathematics in a lesson, a level, or everything
argument-hint: <lesson-id | level-number | all>
allowed-tools: Task, Read, Bash, Glob
---

Re-verify **$1**.

- A lesson id (`3.4`) — run `math-verifier` on that one lesson.
- A level number (`3`) — run `math-verifier` on every lesson in that level.
  These are independent files, so run up to four in parallel.
- `all` — every lesson in the repo, level by level, four at a time.

This is the check to run after editing the style guide, after changing the
manifest, or any time you doubt the answer keys. It is much cheaper than
rebuilding lessons and it is the thing that keeps the course trustworthy.

Report only the verdict lines, grouped by level, plus a count of lessons
whose status changed. Never paste lesson content.

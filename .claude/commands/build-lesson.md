---
description: Build one complete lesson end to end (author, problems, verify, audit)
argument-hint: <lesson-id>  e.g. 1.3
allowed-tools: Task, Read, Bash, Glob
---

Build lesson **$1** completely.

Run this as a four-stage pipeline, each stage a separate subagent. Wait for
each to finish before starting the next — they edit the same file.

1. `lesson-author` — write the teaching section for lesson $1
2. `problem-writer` — write the 12-question practice set and solutions
3. `math-verifier` — independently re-solve everything and fix errors
4. `sat-alignment` — structural and style audit

If `math-verifier` returns `needs-work`, send its open items back to
`problem-writer` once, then re-verify. If it still fails, stop and report the
open items to me rather than looping.

**Keep your own context small.** Do not read the lesson file yourself at any
point. The subagents read and write it; you only pass their short verdicts
along. Reading a 2,000-word lesson into this conversation on every stage is
exactly the waste this pipeline exists to avoid.

When done, run `python scripts/status.py --next` and tell me the file path,
the verifier's verdict, and what the next lesson is. Three lines, no summary
of the content.

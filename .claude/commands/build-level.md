---
description: Build every unwritten lesson in a level, in dependency order
argument-hint: <level-number>  e.g. 1
allowed-tools: Task, Read, Bash, Glob
---

Build all unwritten lessons in **Level $1**.

First run `python scripts/status.py` and list which lessons in Level $1 are
not yet `verified`.

Then build them **in manifest order**, because later lessons depend on the
notation and methods of earlier ones. For each, run the same four-stage
pipeline as `/build-lesson`.

You may run `lesson-author` for up to **three lessons in parallel** when those
lessons do not list each other as prerequisites — check the manifest before
doing so. Never parallelise `problem-writer` and `math-verifier` on the same
file.

Hard rules:

- Never read a lesson file into this conversation. Subagents only.
- Stop and report if two lessons in a row fail verification — something is
  wrong with the manifest or the style guide, and grinding through it will
  waste a lot of usage before anyone notices.
- After every third lesson, run `python scripts/status.py` and give me a
  one-line progress count so I can stop you if the budget is running down.

Finish with the status table and nothing else.

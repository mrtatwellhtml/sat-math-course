# SAT Math Course — working instructions

A complete SAT Math course, from arithmetic foundations to the hardest
Module 2 questions. Built for a tutor's own students; published as a static
site so students can work through it between sessions.

## The one rule that matters most

**Never read lesson content into the main conversation.**

Lessons run 2,000-3,000 words. Reading one costs real usage; reading ten
costs a session. Every piece of work that touches lesson text happens inside
a subagent, which reads the file, edits it, and reports back three lines.
The orchestrating conversation should stay small enough to run all day.

Concretely:

- Use `/build-lesson`, `/build-level` and `/verify` rather than doing the
  work yourself in the main thread.
- Never `Read` a file under `docs/` in the main conversation. If you need to
  know something about a lesson, `Grep` for the specific line.
- Subagents reply with paths and verdicts, never content.
- Never open a PDF. The textbooks total roughly 90 MB and are the *tutor's*
  reference, not the model's. `curriculum/reference-index.md` has their
  tables of contents, which is all any lesson needs.

## Start here

`HANDOVER.md` has the current build state, the next actions in order, the
decisions already made and the traps this build has hit. Read it before
starting work and update it before stopping.

## Repository map

```
curriculum/
  manifest.yml           # THE source of truth: all 48 lessons, objectives, prereqs
  style-guide.md         # voice, notation, question conventions, difficulty
  templates/             # the lesson template every page follows
  reference-index.md     # textbook chapter index (generated, do not edit)
docs/                    # the published site (MkDocs Material)
scripts/                 # deterministic bookkeeping - never delegate these to an agent
tutor/                   # tutor-only material, not published
.claude/agents/          # the five subagents
.claude/commands/        # the slash commands that orchestrate them
```

## How a lesson gets built

Four stages, always in this order, each a separate subagent:

| Stage | Agent | Writes |
|-------|-------|--------|
| 1 | `lesson-author` | Concept, three worked examples, common errors, tutor notes |
| 2 | `problem-writer` | 12 practice questions, answer key, full solutions |
| 3 | `math-verifier` | Nothing new — re-solves everything and fixes errors |
| 4 | `lint_lesson.py` | Nothing — mechanical audit, free, run it before stage 5 |
| 5 | `sat-alignment` | Nothing new — judgement-call style audit, only if stage 4 is clean |

Stages 1 and 2 are split because a model writing both tends to write
questions that match the examples it just produced, rather than questions
that test the objective. Stage 3 is split from both because a model checking
its own arithmetic confirms it rather than testing it.

A lesson is `drafted` until stage 3 passes, then `verified`. Only verified
lessons should be shown to a student.

## Guardrails

**Originality.** Every question in this course is written fresh. Never
reproduce a question from a textbook, from a College Board practice test, or
from any published source. Students sit the official practice tests
separately and those must stay unseen.

**Accuracy.** Use Python via Bash to check arithmetic. `sympy` for algebra,
`numpy` for statistics. A confident wrong answer key is worse than a missing
lesson.

**Scope.** The digital SAT does not test calculus, formal proof, matrices, or
logarithm rules beyond the trivial. If a question needs one of those, it is
out of scope regardless of how good a question it is.

**Student data never enters the repo.** `students/` and `*.private.md` are
gitignored. Score reports, names, and error logs stay off GitHub.

## Domain weighting — use it when prioritising

| Domain | Share of scored section | Levels |
|--------|------------------------|--------|
| Algebra | ~35% | Level 1 |
| Advanced Math | ~35% | Level 3 |
| Problem Solving and Data Analysis | ~15% | Level 2 |
| Geometry and Trigonometry | ~15% | Level 4 |

Build order by value: **Level 1, then Level 3, then Level 5, then Level 2,
then Level 4, then Level 0.** Level 0 is last because the students who need
it are the minority and it is the least SAT-specific material — but it must
exist before the course is offered to a general cohort.

## Routine commands

```bash
python scripts/status.py          # what is written, what is verified, what is next
python scripts/lint_lesson.py     # mechanical audit of every drafted lesson
python scripts/lint_lesson.py 1.3 # ...or of named lessons
python scripts/sync_nav.py        # after editing manifest.yml
mkdocs serve                      # preview at http://127.0.0.1:8000
mkdocs build --strict             # what CI runs; fails on broken links
```

## Conventions

- Commit one lesson per commit: `lesson(1.3): interpreting linear models`
- Never hand-edit `nav:` in `mkdocs.yml` — `sync_nav.py` regenerates it
- Never hand-edit `curriculum/reference-index.md` — it is generated
- A lesson that wants to run past 1,800 words should be two lessons; raise it
  rather than writing a chapter

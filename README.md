# SAT Math: Foundations to Mastery

A complete, self-paced digital SAT Math course — 48 lessons from arithmetic
foundations to the hardest Module 2 questions — published as a static site
for students to work through between tutoring sessions.

**Live site:** <https://mrtatwellhtml.github.io/sat-math-course/>

## What is here

| Path | What it is |
|------|------------|
| `curriculum/manifest.yml` | The source of truth: all 48 lessons, objectives, prerequisites |
| `curriculum/style-guide.md` | Voice, notation, question conventions, difficulty calibration |
| `docs/` | The published site (MkDocs Material) |
| `.claude/agents/` | Five subagents that write and verify lessons |
| `.claude/commands/` | Slash commands that orchestrate them |
| `scripts/` | Deterministic bookkeeping — nav sync, status, textbook index |
| `tutor/` | Tutor-only material, not published |

## Setup

```bash
python -m venv .venv
.venv\Scripts\activate          # Windows
pip install -r requirements-dev.txt   # site deps plus sympy/numpy for verification

python scripts/index_textbooks.py   # once, if you have the PDFs
python scripts/status.py            # see what is built
mkdocs serve                        # preview at http://127.0.0.1:8000
```

## Building lessons

In VS Code, with Claude Code open in this folder:

```
/status                 what is done, what is next
/build-lesson 1.3       build one lesson end to end
/build-level 1          build every unwritten lesson in a level
/verify 3               re-check the maths across a level
/publish                sync nav, build, commit, push
```

See `CLAUDE.md` for how the pipeline works and why it is split into four
stages. See `tutor/operating-guide.md` for running it without burning
through your usage limits.

## Two hard rules

**Originality.** Every question in this course is written fresh. Nothing is
copied from the textbooks in the parent folder, from College Board practice
tests, or from any published source. Students sit the official tests
separately and those must stay unseen.

**No student data in the repo.** `students/` and `*.private.md` are
gitignored. Score reports, names and error logs stay off GitHub.

## Licence

Course content © the author. The textbooks in the parent directory are
copyrighted by their publishers, are not part of this repository, and are
excluded by `.gitignore`.

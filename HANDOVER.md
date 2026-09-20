# Handover

State of the build, decisions already made, and what to do next. Update this
at the end of any working session. `CLAUDE.md` says how the pipeline is meant
to work; this file says where the work actually got to and what it ran into.

**Last updated:** 2026-09-20 (Levels 1 and 3 complete)

---

## Where the course stands

**19 of 48 lessons verified. 0 drafted. 29 not started.**

| Level | Domain | Share of test | State |
|-------|--------|---------------|-------|
| 1 — Algebra | ~35% | **Complete, all 8 verified** |
| 3 — Advanced Math | ~35% | **Complete, all 10 verified** |
| 5 — Test Craft | strategy | 5.2 verified; 5.1, 5.3–5.7 not started |
| 2 — Data | ~15% | not started |
| 4 — Geometry | ~15% | not started |
| 0 — Foundations | gated | not started |

Levels 1 and 3 together are roughly 70% of the scored section, and both are
done. Both placement instruments are usable.

Run `python scripts/status.py` for the live picture; do not trust this table
over the script.

The site is live and self-updating, and every written lesson also publishes a
printable worksheet and a separate answer key.

---

## Immediate next actions

Build order by exam value is **Level 5, then 2, then 4, then 0** — set out in
`CLAUDE.md`. Level 5 is next because it is strategy that lifts scores across
every domain, and 5.1, 5.3–5.7 are unwritten.

**The one piece of known outstanding work** is the grid-in cleanup. Ten
lessons still carry 5 or 6 student-produced responses against the corrected
band of 3–4: 1.1, 1.2, 1.3, 1.4, 1.7, 1.8, 3.4 and 5.2 at 5, and two others.
None is wrong — all were verified — so it is polish, and both checkers warn
rather than fail on it.

---

## Decisions made, and why

Things a fresh session would otherwise undo or re-litigate.

### Grid-in share is 3–4 of 12, not "at least 4"

`problem-writer.md` used to say *"at least 4 of the 12 … matching the real
test's roughly one-quarter share"*. Those clauses disagree — 4 of 12 is a
third. Treated as a floor it drifted further, and every lesson written before
this was caught sits at 5 or 6.

It is not only a realism problem. Over-weighting grid-ins costs the student
practice at eliminating distractors, which is scored and is the entire premise
of lesson 5.5, *Backsolving and Plugging In* — a strategy that needs answer
choices to exist.

Now stated as 3–4 in `problem-writer.md`, `sat-alignment.md` and the template.
Both checkers **error below 3 and warn above 4**, deliberately not failing, so
the lessons written under the old spec flag without blocking the build.

**Ten lessons are still over the band** and want a cleanup pass: 1.1, 1.2,
1.3, 1.4, 1.7, 1.8, 3.4, 5.2 at 5; 3.2 and 3.3 at 6. None is wrong — each was
verified — so this is a polish task, not a correctness one. It is the largest
piece of known outstanding work.

### The four-stage pipeline gained a free stage

`scripts/lint_lesson.py` now does mechanically what `sat-alignment` was doing
by eye. Run it before spending an agent call on a style audit; if it is clean,
only judgement calls remain. It also has `--require-verified`, which exists
for a specific reason — see *A verifier lied* below.

### Lessons publish without images

The site has no figures. A question that genuinely requires *seeing* a curve —
reading a value off a described graph, judging a shape, counting intersections
not fixed by the text — is unanswerable as published, not merely hard. Use
markdown tables, or define the function well enough that the prose suffices.

This bites hardest in **3.7** (end behaviour, multiplicity) and **3.10**
(transformations of graphs), neither of which is written yet. Brief their
authors on it explicitly.

---

## Traps this build has already fallen into

### Claude Code must be opened in `sat-math-course` itself

The agents and slash commands live in `.claude/` inside this folder, read once
at startup from the directory Claude Code was opened in. Open the parent
`SAT Math` folder and `/build-lesson` does not exist and `lesson-author` comes
back as an unknown agent type, with no hint why.

**Workaround when it happens:** spawn a `general-purpose` agent and tell it to
read `.claude/agents/<role>.md` first and follow it. Every lesson in this repo
so far was built that way. Pass `model: sonnet` to match the role files.

### A verifier reported `verified` and never touched the file

Lesson 1.8's verifier returned `VERDICT: verified, Checked: 12/12, nothing to
fix` while leaving `status: drafted` and `verified_by: ""`. It finished in 34
seconds where honest passes took 40–85. A commit went out claiming
verification before anyone checked the file; the message had to be amended.

**So: after every verification stage, run**

```bash
python scripts/lint_lesson.py <id> --require-verified
```

It exits 1 unless the file actually records the check. Never mark a lesson
done on an agent's summary alone.

### Two checkers reported confidently wrong things

Both now fixed, both worth knowing about because they cost real time:

- `check_site.py` counted the template's six `**n.**` placeholder markers as
  real questions, so an untouched lesson reported *"6 practice questions,
  expected 12"* — indistinguishable from a half-written one. This sent a
  session chasing a repair job on 1.2 and 1.4 that did not exist.
- Its decimal check was written `^\s*0?\.\d`. The optional zero meant it
  matched correctly-formatted decimals and fired on `0.4`.

### Currency dollar signs

`\$25`, never `$25`. Two unescaped signs pair up and MathJax renders the prose
between them as a formula. Lesson 1.7 shipped `verified` with 46 of them and
rendered wrong. The linter now catches it by looking for maths spans whose
contents read as English.

### Session limits kill agents mid-write

This has happened twice, once leaving two lessons as untouched placeholders
that looked half-finished, once killing three agents cleanly. **Commit after
each lesson completes**, not at the end of a batch, and check `git status`
before assuming the state you left.

---

## Things worth checking that no tool catches

The most serious defect found so far was not an arithmetic error and no linter
would have found it.

**Lesson 1.6, Worked Example 3** asked for the greatest `x + y` over a system
of inequalities *with `x` and `y` integers*, and asserted flatly that a linear
expression takes its extreme values at the corners of the feasible region.
That is a theorem about real-valued variables. With an integer restriction it
fails: a fractional optimal vertex means the best lattice point is elsewhere.
The stated answer was correct — but correct by coincidence, because all three
vertices happened to be lattice points.

The tell was internal: the same lesson's own Q11 solution stated the
real-valued condition correctly. The distinction was understood fifteen lines
away and not carried up.

**So when verifying, ask not only "is this answer right" but "would a student
following this method get the next one right".** Ask verifiers to read the
reasoning, not just re-derive the answer. Lesson 1.4 bounced for a related
reason — every answer correct, but a manifest objective that no question
tested.

---

## Environment

- **venv at `.venv`.** Use `./.venv/Scripts/python.exe` from Git Bash, or
  activate with `.venv\Scripts\activate` in PowerShell. Everything in
  `requirements-dev.txt` is installed: mkdocs 1.6.1, mkdocs-material 9.7.7,
  sympy 1.14, numpy 2.5.3, PyYAML 6.0.3.
- **Windows.** Tell agents to use `python`, not `python3`. The role files say
  `python3` and that is wrong here.
- **`gh` is not installed** and winget is unavailable. The GitHub repo was
  created through the browser and the remote wired by hand.
- **Remote:** `mrtatwellhtml/sat-math-course`, private, branch `main`.
  The branch was renamed from `master` because `deploy.yml` only triggers on
  `main` — on `master` it would have pushed successfully and never deployed.
- **One commit is unpushed** as of this writing (`9a503dd`, the grid-in spec
  change). `git push` may be refused by the sandbox classifier; if so, run it
  yourself in a terminal.
- **GitHub Pages is live** at <https://mrtatwellhtml.github.io/sat-math-course/>
  — 58 pages, deploying from `deploy.yml` on every push to `main`.
  Source must stay on **GitHub Actions**. Set to "Deploy from a branch"
  instead, GitHub silently runs its built-in Jekyll builder and serves
  `README.md` as the homepage; the tell is a page title ending
  `| sat-math-course` and a 404 on `/sitemap.xml`. Switching the source does
  not retroactively run the workflow — push, or dispatch it from Actions.

- **Maths rendering.** `pymdownx.arithmatex` converts `$...$` to
  `<span class="arithmatex">\(...\)</span>` **at build time**; MathJax then
  only touches those spans (`processHtmlClass: "arithmatex"`). So an
  unescaped currency `$` is swallowed by the Markdown extension, not by
  MathJax — which is why `\$` is the fix and why it cannot be worked around
  in the JavaScript config. Verified live: prices render as text.

---

## Routine

```bash
python scripts/status.py                        # progress, and what is next
python scripts/lint_lesson.py                   # audit every written lesson
python scripts/lint_lesson.py <id> --require-verified
python scripts/check_site.py                    # pre-publish structural audit
python -m mkdocs build --strict                 # what CI runs
python -m mkdocs serve                          # preview
```

Commit one lesson per commit. Record in the message what was checked and what
was deliberately left — several lessons carry known, accepted compromises and
the commit is where that reasoning lives.

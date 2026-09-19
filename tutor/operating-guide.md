# Operating guide

How to build this course in VS Code without burning through your usage limits,
and how to teach from it once it exists.

---

## Part 1 — First-time setup

**1. Install the tooling** (once, in a terminal in the repo folder):

```bat
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements-dev.txt
```

**2. Create the GitHub repo.** In VS Code's terminal:

```bat
git init
git add -A
git commit -m "Course scaffold: manifest, agents, three reference lessons"
gh repo create sat-math-course --private --source=. --push
```

Keep it **private** until you have looked over the generated lessons. You can
make it public later; students only need the Pages URL, not the repo.

**3. Turn on GitHub Pages.** Repo Settings → Pages → Source → **GitHub
Actions**. The workflow in `.github/workflows/deploy.yml` deploys on every
push to `main`. Your site appears at
`https://<your-username>.github.io/sat-math-course/`.

**4. Fix the three placeholders.** In `mkdocs.yml` and `README.md`, replace
`EXAMPLE` with your GitHub username. Until you do, the site works but the
GitHub link in the header points nowhere and the browser console logs a
harmless error.

**5. Check it renders.** Run `mkdocs serve` and open
<http://127.0.0.1:8000>. Go to lesson 3.4 and confirm the formulas appear as
real mathematics, not as `\(x = -\frac{b}{2a}\)`. If they look raw, the
MathJax CDN was blocked — check your network, not the config.

---

## Part 2 — Building the remaining 45 lessons

> **Open the course folder itself, not its parent.** The five agents and the
> slash commands live in `.claude/` *inside* `sat-math-course`. Claude Code
> reads that folder once, when it starts, and only from the directory it was
> opened in. Start it one level up in `SAT Math` and `/build-lesson` will not
> exist and `lesson-author` will come back as an unknown agent type — with no
> hint as to why. In VS Code: File → Open Folder → `sat-math-course`.

Three of the 48 lessons are written and verified (1.7, 3.4, 5.2), plus both
placement instruments. They exist to be pattern-matched: the agents read them
to learn the house style, so **do not delete them** and be cautious about
rewriting them.

### The commands

Open Claude Code in VS Code (`Ctrl+Esc`), in this folder. Then:

| Command | What it does |
|---------|--------------|
| `/status` | What is written, what is verified, what to build next |
| `/build-lesson 1.3` | One lesson, end to end, all four stages |
| `/build-level 1` | Every unwritten lesson in a level |
| `/verify 3` | Re-check the mathematics across a level |
| `/publish` | Sync nav, build, commit, push |

### Recommended order

Build by exam value, not by lesson number:

1. **Level 1** (8 lessons) — ~35% of the test
2. **Level 3** (10 lessons) — ~35% of the test
3. **Level 5** (6 remaining) — no new maths, but converts knowledge to score
4. **Level 2** (8 lessons) — ~15%
5. **Level 4** (7 lessons) — ~15%
6. **Level 0** (8 lessons) — needed before you offer this to a general cohort

After Levels 1 and 3, you have covered about 70% of the scored section. That
is a usable course on its own, and it is enough for your December student.

### What this costs, roughly

A full lesson runs four subagents over a 2,000-3,000 word file. Expect
**one lesson per sitting** on a tight budget, or **a level across a few
sessions**. The realistic shape of this project is a few lessons a week over
several weeks, not one heroic afternoon.

---

## Part 3 — Why the pipeline is built this way

This is the part that actually controls your bill.

### Subagents exist to keep context small

A Claude Code conversation re-sends its whole history with every turn. If you
read ten lessons into the main thread, every subsequent message carries all
ten. Costs compound quadratically and you hit a limit in an hour.

A subagent gets its own context. It reads the lesson, edits it, and returns
three lines. The main thread never holds the content at all, so it stays
small enough to run all day. **This single mechanism is the difference
between building the course in a week and running out of usage on day two.**

That is why `CLAUDE.md` says: never read a file under `docs/` in the main
conversation. It is the rule that matters most.

### Four stages instead of one

| Stage | Agent | Why it is separate |
|-------|-------|--------------------|
| 1 | `lesson-author` | — |
| 2 | `problem-writer` | A model that just wrote the examples writes questions that echo them, instead of questions that test the objective |
| 3 | `math-verifier` | A model checking its own arithmetic confirms it rather than testing it. This one must be a fresh context or it is worthless |
| 4 | `sat-alignment` | Mechanical checks, so it runs on the cheapest model |

Stage 3 is the one that earns its keep. A wrong answer key costs you a
session to untangle and costs the student their trust in the whole course.

### Models are assigned per agent

Look at the `model:` line in each file in `.claude/agents/`. Authoring and
verification run on Sonnet; the structural audit runs on Haiku because it is
pattern-matching, not reasoning. You can move any of them: edit the line. If
a level comes out weak, try `model: opus` on `lesson-author` for that level
only, then move it back.

### The textbooks are deliberately excluded

Your eight PDFs total about 90 MB. Putting one into a model's context would
consume an enormous share of your limit for very little benefit —
and the course must be original anyway.

`scripts/index_textbooks.py` extracted their tables of contents into
`curriculum/reference-index.md`, a small text file. Lessons point at it, so
you can find the right chapter for extra practice, while no model ever opens
a PDF. `.gitignore` also keeps the PDFs out of the repo, which is both a
copyright and a repo-size matter.

### Habits that save the most

- Use the slash commands rather than asking in free text. They carry the
  context-discipline instructions with them.
- **Run `/clear` between lessons.** The previous lesson's context has no
  value for the next one and you pay for it on every turn.
- Build one level at a time. `/build-level 1` then stop and look at the
  output before starting Level 3.
- Let `sat-alignment` do the style checks. Do not read lessons yourself to
  check formatting — `python scripts/check_site.py` does it free, with no
  model involved at all.
- Generate during off-hours if your limit resets on a window.

---

## Part 4 — Teaching from it

### With your December student

The eleven-session plan stands as written. The course changes what homework
looks like: instead of "do 20 Khan Academy questions", it becomes "work
lesson 1.7, then bring me your wrong answers".

Map the plan's sessions onto lessons:

| Session | Lesson to assign beforehand |
|---------|-----------------------------|
| 2 | 1.1, 1.2 |
| 3 | 1.4, 1.5 |
| 4 | **1.7** — already written |
| 5 | 3.2, 3.3 |
| 6 | 3.5, 3.6 |
| 8 | 2.1, 2.2, 2.3 |
| 9 | 2.4, 2.5, 2.6 |
| 10 | 4.3, 4.4, 4.6 |
| 11 | **5.2**, 5.3 — 5.2 already written |

Because 1.7 and 5.2 are already verified, sessions 4 and 11 are ready now.

### With a wider group

Point students at the site and have them take the placement checks. Everything
after that is self-directed: the diagnostic maps each wrong answer to a lesson
id, so a student can build their own study list without you.

Your hour then goes to what a website cannot do — watching them work, hearing
their reasoning, and catching the method errors they cannot see themselves.

### Keeping student data out

`students/` and `*.private.md` are gitignored. Keep score reports, names and
error logs there or outside the repo entirely. The moment this repo goes
public, anything committed to it is public — including its history.

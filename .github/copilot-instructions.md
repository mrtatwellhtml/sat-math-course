# Working on this repository

This is an SAT Math course: 48 lessons published as a static MkDocs site for a
tutor's students. Read `CLAUDE.md` for how the build pipeline works and
`HANDOVER.md` for where it currently stands and what to do next.

## The rule that matters most

**Never write and verify a lesson in the same conversation.**

A model that checks its own arithmetic confirms it rather than testing it.
This is not a style preference — it is why the pipeline exists, and it has
already caught a wrong factual claim, an unsound worked example and an
untested objective that the writing pass was confident about.

So: one chat writes the teaching section. A **separate** chat writes the
practice questions. A **third**, which has not seen the others, re-solves
everything from scratch before looking at the stated answers. If you are about
to verify something you wrote earlier in the same thread, start a new chat
instead.

## Before writing any lesson

Read, in this order:

1. `curriculum/manifest.yml` — find the lesson by id. Its `objectives` are
   contractual: every one must be taught, demonstrated in a worked example,
   and tested by at least one practice question.
2. `curriculum/style-guide.md` — voice, notation, difficulty calibration.
3. `curriculum/templates/lesson-template.md` — the exact structure.

Do not open the PDFs in the parent folder. They are the tutor's reference and
total ~90 MB. `curriculum/reference-index.md` has their tables of contents.

## Hard rules

**Originality.** Every question is written fresh. Never reproduce one from a
textbook, from a College Board practice test, or from any published source.
Students sit the official tests separately and those must stay unseen.

**Verify arithmetic computationally.** Use `sympy` — not mental arithmetic,
and not your own confidence. This machine is Windows: the command is `python`,
not `python3`. A confident wrong answer key is worse than a missing lesson.

**Scope.** The digital SAT does not test calculus, formal proof, matrices, or
logarithms beyond the trivial. A question needing one of those is out of scope
however good it is.

**No images.** The site publishes no figures. A question that requires *seeing*
a curve — reading a value off a described graph, judging a shape, counting
intersections the text does not fix — is unanswerable, not merely hard. Use
markdown tables, or specify the function fully in prose.

**Escape currency as `\$`.** Written `$25`, two dollar signs pair up and
MathJax renders the prose between them as a formula. One lesson shipped with
46 of these and rendered wrong.

## Practice set shape

Exactly twelve questions: 4 easy (Set A), 5 medium (Set B), 3 hard (Set C).

**3 or 4 of the twelve are student-produced response**, matching the real
test's roughly one-quarter grid-in share. Not more — over-weighting grid-ins
costs the student practice at eliminating distractors, which is scored and is
the whole premise of lesson 5.5.

Every multiple-choice distractor must come from a **nameable** error. If you
cannot say which mistake produces an option, rewrite it.

Grid-in answers must be genuinely enterable: a single value, not irrational,
short. A quadratic has two roots, so a grid-in asks for *the greater solution*
or *the sum*, never "the solution".

## Formatting the renderer is fussy about

- Number questions `**1.**` at line start, never a markdown ordered list — a
  list swallows the A–D options and breaks rendering.
- Options as four lines, `- A)` through `- D)`.
- Student-produced responses carry a trailing `*(student-produced response)*`
  and have no answer choices.
- Delete the template's instruction prose from sections you fill. Lines like
  "Number questions as **bold**…" are addressed to you, not to the student.

## Check your work before finishing

```bash
python scripts/lint_lesson.py <id>     # structure, format, currency, boilerplate
python scripts/check_site.py           # nav, links, structural audit
python -m mkdocs build --strict        # what CI runs
```

Fix everything the linter reports. Do not edit the linter to make it pass.

After a verification pass, confirm the file actually records it:

```bash
python scripts/lint_lesson.py <id> --require-verified
```

A previous verifier reported success without ever editing the file. Only set
`status: verified` and `verified_by` when all twelve questions genuinely pass.

## When verifying, read the reasoning

The worst defect found in this course so far was not an arithmetic error. A
worked example reached the right answer by a method that is wrong in general —
it applied a real-valued optimisation theorem to an integer-constrained
problem, and happened to be right because the numbers were kind.

So ask not only "is this answer correct" but "would a student following this
method get the *next* one right". Also check every manifest objective is
actually tested: one lesson had twelve correct answers and still failed
because it never tested the objective it promised.

Report ambiguous questions rather than rewriting them — the author's intent
may have been right, and a silent rewrite hides the problem.

## Commits

One lesson per commit: `lesson(1.3): interpreting linear models`. Say in the
message what was checked and what was deliberately left undone.

Never hand-edit `nav:` in `mkdocs.yml` (`sync_nav.py` regenerates it) or
`curriculum/reference-index.md` (generated).

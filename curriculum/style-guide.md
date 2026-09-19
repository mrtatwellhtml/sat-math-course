# Style Guide

Every agent writing content for this course follows this file. It exists so
that 48 lessons written across dozens of sessions read as one course.

## Voice

Write to the student, in second person, as a good tutor speaks: direct,
warm, unhurried, never patronising. Short sentences. Concrete nouns.

- Say "you multiply both sides by 3" not "one multiplies both sides by 3"
- Say "this is worth about two questions" not "this is an important topic"
- Never write "simply", "just", "obviously", "of course", or "easy". If it
  were easy the student would not be reading the lesson.
- No emoji. No exclamation marks.

## Mathematical notation

- Inline maths uses `$...$`, display maths uses `$$...$$` (KaTeX via MathJax).
- Write decimals with a leading zero: `0.5`, never `.5`.
- Use `\times` for multiplication in display maths, never `*` or `x`.
- Label every axis and every unit in a described graph or table.

## Question writing

Questions must be **original**. Never copy a question from a textbook in the
`textbooks/` folder, from an official College Board test, or from any other
published source. Write new questions in the same style. This is both a
copyright requirement and a pedagogical one: the student will sit the official
practice tests separately and those must stay unseen.

Match real digital SAT conventions:

- Multiple choice has exactly four options, labelled A) B) C) D).
- Distractors are built from real student errors — a sign slip, a reversed
  ratio, an un-finished final step — never from random wrong numbers.
- Student-produced responses have answers that are integers or simple
  decimals or fractions, and are never negative unless the lesson is
  specifically teaching that case.
- Contexts are ordinary and non-specialist: a delivery fee, a water tank, a
  bus timetable. No contexts requiring outside knowledge.
- Keep stems under about 60 words.

## Difficulty calibration

- **Easy** — one concept, one or two steps, numbers chosen to be clean.
- **Medium** — two concepts combined, or one concept wrapped in context.
  This is where most real SAT questions sit.
- **Hard** — three steps, an abstract parameter instead of a number, or a
  setup that has to be built before it can be solved. Roughly the level of
  the last four questions of a hard Module 2.

## Length discipline

A lesson is a 45-60 minute unit, not a chapter. Target 1,200-1,800 words
excluding the practice set and solutions. If a lesson runs longer, it should
have been two lessons — raise that rather than writing a 3,000-word page.

## Accuracy is non-negotiable

A wrong answer key destroys a student's trust in the whole course and costs
the tutor a session to untangle. Every question is independently re-solved by
the `math-verifier` agent before a lesson's status moves to `verified`. No
lesson ships on the author's own confidence.

## Practice-set formatting (house style)

Number practice questions in **bold** — `**1.**`, `**2.**` — never as a
markdown ordered list. An ordered list pulls the A-D options into the list
item and renders wrongly. Answer options are a bullet list directly beneath
the stem:

```
**3.** The function $h$ is defined by $h(x) = x^2 - 6x + 11$. What is the
equation of the axis of symmetry?

- A) $x = -6$
- B) $x = -3$
- C) $x = 3$
- D) $x = 6$
```

Mark every student-produced response with a trailing
`*(student-produced response)*`. `scripts/check_site.py` counts these, so the
marker is load-bearing, not decorative.

## Currency

Escape every dollar sign used as currency: write `\$25`, never `$25`.

An unescaped `$` can pair with a maths delimiter later on the same line and
silently swallow the text between them into a formula. It renders correctly
often enough that it is easy to miss and hard to debug. Escaping costs one
character and removes the failure mode entirely.

This is not machine-checked: a bare `$` opening a formula that starts with a
digit (`$2x + 3$`) is indistinguishable from currency by pattern alone, so an
automated check produces far more false alarms than findings. It is an
authoring habit, enforced at review. The three existing lessons were checked
by hand and render correctly as written.

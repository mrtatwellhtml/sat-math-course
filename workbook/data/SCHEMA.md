# Question bank schema

One JSON file per batch: `{ "questions": [ ... ] }`

Each question object:

```json
{
  "id": "1.5-m-03",
  "topic": "1.5",
  "topicTitle": "Systems of two linear equations",
  "difficulty": "easy",
  "type": "mc",
  "stem": "A line passes through $(3,-2)$ and $(7,6)$. What is its slope?",
  "choices": ["$1$", "$2$", "$4$", "$8$"],
  "answer": "B",
  "solution": "$\\dfrac{6-(-2)}{7-3}=\\dfrac{8}{4}=2$.",
  "distractors": { "A": "read 6-(-2) as 6-2", "C": "divided by 2 instead of 4", "D": "forgot to divide" },
  "tags": ["slope", "negative-coordinate"]
}
```

For a student-produced response:

```json
{
  "id": "1.1-e-02",
  "topic": "1.1",
  "topicTitle": "Linear equations in one variable",
  "difficulty": "easy",
  "type": "spr",
  "stem": "What value of $x$ satisfies $3(x-4)=x+2$?",
  "answer": "7",
  "accept": ["7", "7.0"],
  "solution": "$3x-12=x+2$, so $2x=14$ and $x=7$.",
  "tags": ["solve"]
}
```

## Rules
- `id`: `<topic>-<e|m|h>-<two digits>`, unique across the whole bank.
- `difficulty`: exactly `easy`, `medium` or `hard`.
- `type`: exactly `mc` or `spr`.
- `mc` has exactly 4 `choices` and `answer` is `"A"`, `"B"`, `"C"` or `"D"`.
- `mc` must have a `distractors` object naming the real student error behind each
  wrong option. Never a random wrong number.
- `spr` has `answer` (a string) and `accept` (every equivalent form a student might
  type, e.g. `["0.5", "1/2", ".5"]`). Answers must be enterable: integers or simple
  decimals/fractions, at most 5 characters, and not negative unless the topic is
  specifically about negatives.
- `solution` is a complete worked explanation, not just the value.
- Maths is LaTeX inside `$...$`. In JSON every backslash is doubled (`\\dfrac`).
- Currency inside maths: write `\\$` (so JSON holds `\\\\$`). Outside maths plain `$`
  is fine but prefer spelling it as "dollars" in a stem.
- Contexts must be ordinary and need no outside knowledge. Stems under 60 words.
- Every question ORIGINAL. Never copied from a textbook or a real College Board test.
- Banned words in stems and solutions: "simply", "just", "obviously", "of course", "easy".
- Decimals get a leading zero (0.5 not .5).
- Digital SAT scope only: no calculus, no proofs, no matrices, no log rules.

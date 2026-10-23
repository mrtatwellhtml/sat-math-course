# SAT Math Workbook — online version

A static workbook the student opens in a browser. 126 original digital-SAT questions
with instant marking, worked solutions, and a note on every wrong option saying which
mistake produced it. Progress is kept in the browser, so nothing needs a sign-in.

```
public/
  index.html        the whole app: HTML, CSS and JS in one file
  data/bank.json    the question bank
firebase.json       hosting config
.firebaserc.example rename to .firebaserc and put your project id in
```

## Deploy

```bash
npm install -g firebase-tools        # once
firebase login                       # once
cp .firebaserc.example .firebaserc   # then edit in your project id
firebase deploy --only hosting
```

Or run it locally first:

```bash
firebase emulators:start --only hosting
# or, with no Firebase installed at all:
cd public && python -m http.server 8080
```

It must be served over http, not opened as a `file://` page — the app fetches
`data/bank.json` and a browser blocks that on the file protocol.

## Adding questions

Everything lives in `public/data/bank.json`. Append to `questions` and bump the
matching topic's `count`. The schema, with the rules each field follows, is in
`data/SCHEMA.md`.

```json
{
  "id": "1.5-m-23",
  "topic": "1.5",
  "topicTitle": "Systems of two linear equations",
  "difficulty": "medium",
  "type": "mc",
  "stem": "If $2x+y=11$ and $x-y=1$, what is the value of $x$?",
  "choices": ["$3$", "$4$", "$5$", "$6$"],
  "answer": "B",
  "solution": "Adding the equations gives $3x=12$, so $x=4$.",
  "distractors": { "A": "solving for y instead", "C": "a sign slip when adding", "D": "dividing 12 by 2" }
}
```

A `spr` (student-produced response) question has no `choices`; it carries `answer`
plus an `accept` list of every equivalent form the student might type.

The marker already treats `0.75`, `.75` and `3/4` as the same value, so `accept`
only needs the forms that are genuinely different.

## If you extend it

The obvious next steps, roughly in order of value to the student:

1. **Firebase Auth plus Firestore** so progress follows him between phone and laptop.
   Swap the `localStorage` helpers at the top of the script (`load`, `save`, `mark`)
   for Firestore reads and writes — they are the only three functions that touch storage.
2. **A tutor view** reading the same Firestore collection, so you can see which topics
   he is actually practising before the session rather than asking.
3. **Timed mode** — 22 questions, 35 minutes, mirroring one real module.

## Content

Every question is original and written for this course. Nothing is reproduced from
a textbook or from a College Board practice test, so the official practice tests stay
unseen and usable as real measurements.

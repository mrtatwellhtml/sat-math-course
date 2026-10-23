# Deck content file format

A deck content file is a CommonJS module exporting an object (or a function
`({pick, BYID}) => object`). `pick(['3.2-e-01', ...])` pulls verified questions
out of the existing bank — only topics 0.2, 1.1–1.7, 3.2, 3.3 are in it.
For any other topic you write the questions yourself, inline.

```js
module.exports = {
  id: 'sat-slug',                 // becomes the filename and the localStorage key
  title: 'Short Title',           // appears in the header and the browser tab
  session: 'Session 6 · 1 November',
  slides: [ ... ]
};
```

Maths is written in LaTeX between single dollars: `$x^2-7x+12$`. MathJax renders
it. Escape a literal dollar sign as `\\$` in a JS string (i.e. `\$` in the output).
Keep `\dfrac`, `\sqrt`, `\pi`, `\le`, `\ge`, `\times`, `\cdot`, `\neq`, `\approx`
— all supported. Avoid `\square`, `\;`, environments, and anything multi-line.

## Slide types

```js
{ type:'title', eyebrow, title, sub, meta:[{v:'35%',k:'of the exam'}], notes }
{ type:'section', kicker, title, sub }
{ type:'idea', kicker, title, lead, points:[ '...' ], callout, notes }
{ type:'steps', kicker, title, lead, steps:[{label, body}], callout, notes }
{ type:'table', kicker, title, lead, cols:['a','b'],
  rows:[{cells:['..','..'], flag:'good'|'bad'|undefined}], callout, notes }
{ type:'compare', kicker, title, lead,
  left:{label:'What most students write', body:'line\nline'},
  right:{label:'What is actually true', body:'line\nline'}, callout, notes }
{ type:'worked', kicker, title, question, thinking, steps:['..','..'], answer, notes }
{ type:'practice', kicker, title, lead, questions:[Q], notes }
{ type:'recap', kicker, title, points:['..'], callout, notes }
{ type:'close', small, big, foot, notes }
```

`compare` bodies are rendered in a monospace font and `\n` breaks the line;
write those two bodies in plain unicode (−, ×, ², √), **not** LaTeX.

## A question object

```js
{ stem:'...$x$...',
  choices:['$1$','$2$','$4$','$8$'],   // omit entirely for write-your-answer
  answer:'B',                          // the LETTER for mc; the VALUE for write-in
  solution:'Two or three sentences. Show the actual steps, not a restatement.',
  trap:'A) is what you get if you ... ; C) is what you get if you ...',  // optional
  tag:'warm-up'|'medium'|'harder' }
```

## Rules

- 2 or 4 questions per practice slide (3 renders unevenly).
- Every stem must be answerable from the slide's own teaching. No outside knowledge.
- Distractors must each be a *real* mistake a student makes, and `trap` must name it.
- Keep `solution` under about 45 words and make it the method, not the answer.
- `notes` is what the tutor says — one or two sentences, practical, never a summary
  of the slide.
- Shape: roughly a third teaching slides, two thirds worked examples and practice.
- Voice: plain British English, second person, short sentences. The student scored
  5/22 on a diagnostic; assume he is capable but has gaps, and never talk down.

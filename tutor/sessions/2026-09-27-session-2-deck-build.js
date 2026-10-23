const pptxgen = require('pptxgenjs');
const p = new pptxgen();
p.layout = 'LAYOUT_WIDE';            // 13.3 x 7.5
p.author = 'SAT Math: Foundations to Mastery';
p.title  = 'The Sign Error - Session 2';

const NAVY = '1F4E79', DEEP = '14355A', INK = '22303C', MUTE = '6B7C8C';
const ICE = 'EAF0F6', PAPER = 'FFFFFF';
const RED = 'C0392B', GREEN = '1D7A4C', AMBER = 'C8862A';
const HEAD = 'Cambria', BODY = 'Calibri';
const W = 13.3, M = 0.7;

const t = (s, txt, o) => s.addText(txt, Object.assign({ isTextBox: true, fontFace: BODY, color: INK }, o));

function dark(title, sub) {
  const s = p.addSlide();
  s.background = { color: DEEP };
  t(s, title, { x: M, y: 2.5, w: W - 2 * M, h: 1.5, fontSize: 44, bold: true,
                fontFace: HEAD, color: 'FFFFFF', align: 'left', margin: 0 });
  if (sub) t(s, sub, { x: M, y: 4.0, w: W - 2 * M, h: 0.9, fontSize: 20,
                       color: 'CADCFC', align: 'left', margin: 0 });
  return s;
}
function light(title) {
  const s = p.addSlide();
  s.background = { color: PAPER };
  t(s, title, { x: M, y: 0.45, w: W - 2 * M, h: 0.8, fontSize: 32, bold: true,
                fontFace: HEAD, color: NAVY, margin: 0 });
  return s;
}
function badge(s, x, y, n, col) {
  s.addShape(p.ShapeType.ellipse, { x, y, w: 0.55, h: 0.55, fill: { color: col || NAVY } });
  t(s, String(n), { x, y: y + 0.03, w: 0.55, h: 0.48, fontSize: 20, bold: true,
                    color: 'FFFFFF', align: 'center', valign: 'middle', margin: 0 });
}
function card(s, x, y, w, h, fill) {
  s.addShape(p.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.1,
    fill: { color: fill || ICE }, line: { color: fill ? fill : 'D7E2EC', width: 1 } });
}

/* 1 ------------------------------------------------ title */
{
  const s = p.addSlide(); s.background = { color: DEEP };
  t(s, 'The Sign Error', { x: M, y: 2.2, w: 9.5, h: 1.3, fontSize: 60, bold: true,
                           fontFace: HEAD, color: 'FFFFFF', margin: 0 });
  t(s, 'One mistake. Seven questions.', { x: M, y: 3.5, w: 9.5, h: 0.7, fontSize: 26,
                           color: 'CADCFC', margin: 0 });
  t(s, 'SAT Math  ·  Session 2  ·  27 September',
    { x: M, y: 6.4, w: 9, h: 0.5, fontSize: 14, color: '8FA6C4', margin: 0 });
  s.addNotes('Do not hand back the marked paper yet. Keep it face down until slide 5.');
}

/* 2 ------------------------------------------------ hook */
{
  const s = dark('Before I give you the score,\nI want to show you something.');
  s.addNotes('Say it in these words. The reframe is the whole point of the first ten minutes.');
}

/* 3 ------------------------------------------------ the four questions */
{
  const s = light('What do these four have in common?');
  const qs = [
    ['Question 4',  'A line passes through (2, −1) and (6, 7).\nWhat is the slope?',        'You put 3.   The answer is 2.'],
    ['Question 6',  'f(x) = 3x² − x.\nWhat is f(−2)?',                                       'You put 12.   The answer is 14.'],
    ['Question 14', 'Which inequality gives all x\nfor which 5 − 2x ≥ 11?',                  'You put x ≥ 3.   The answer is x ≤ −3.'],
    ['Question 15', 'y = (x − 3)² − 4 crosses the\nx-axis at which two points?',             'You put −1 and 5.   The answer is 1 and 5.'],
  ];
  qs.forEach((q, i) => {
    const x = M + (i % 2) * 6.1, y = 1.5 + Math.floor(i / 2) * 2.72;
    card(s, x, y, 5.7, 2.5);
    t(s, q[0], { x: x + 0.3, y: y + 0.18, w: 5.1, h: 0.35, fontSize: 13, bold: true,
                 color: NAVY, charSpacing: 1, margin: 0 });
    t(s, q[1], { x: x + 0.3, y: y + 0.6, w: 5.1, h: 0.85, fontSize: 16, color: INK, margin: 0 });
    t(s, q[2], { x: x + 0.3, y: y + 1.75, w: 5.1, h: 0.5, fontSize: 13, italic: true,
                 color: MUTE, valign: 'bottom', margin: 0 });
  });
  s.addNotes('Let him work at it. Do not tell him. When he spots the negative numbers, that is the turn.');
}

/* 4 ------------------------------------------------ reveal */
{
  const s = p.addSlide(); s.background = { color: PAPER };
  t(s, 'Every one of them\nhas a negative number in it.', { x: M, y: 1.5, w: 11.9, h: 1.9,
    fontSize: 40, bold: true, fontFace: HEAD, color: NAVY, margin: 0 });
  card(s, M, 3.8, 11.9, 1.9, 'FBEEEC');
  t(s, 'That is not four mistakes. It is one mistake, four times.',
    { x: M + 0.5, y: 4.15, w: 10.9, h: 0.6, fontSize: 24, bold: true, color: RED, margin: 0 });
  t(s, 'Across the whole paper it happened seven times — questions 2, 4, 6, 11, 14, 15 and 19.',
    { x: M + 0.5, y: 4.85, w: 10.9, h: 0.6, fontSize: 17, color: INK, margin: 0 });
  s.addNotes('Pause here. Let it land before moving to the score.');
}

/* 5 ------------------------------------------------ the score, honestly */
{
  const s = light('Your diagnostic, in three numbers');
  const stats = [
    ['5',  'questions right',            'A real starting point, not a zero.',        GREEN],
    ['7',  'lost to this one thing',     'All fixable. Today.',                       RED],
    ['10', 'spread across everything else', 'We will work through these week by week.', NAVY],
  ];
  stats.forEach((st, i) => {
    const x = M + i * 4.05;
    card(s, x, 1.7, 3.75, 3.3);
    t(s, st[0], { x: x + 0.25, y: 2.0, w: 3.25, h: 1.5, fontSize: 72, bold: true,
                  fontFace: HEAD, color: st[3], margin: 0 });
    t(s, st[1], { x: x + 0.25, y: 3.55, w: 3.25, h: 0.7, fontSize: 17, bold: true,
                  color: INK, margin: 0 });
    t(s, st[2], { x: x + 0.25, y: 4.3, w: 3.25, h: 1.0, fontSize: 14, color: MUTE, valign: 'top', margin: 0 });
  });
  t(s, 'You are not seventeen problems away from a better score. You are closer to three — and one of them is much bigger than the others.',
    { x: M, y: 5.35, w: W - 2 * M, h: 0.9, fontSize: 18, italic: true, color: NAVY, margin: 0 });
  s.addNotes('Hand the marked paper back now.');
}

/* 6 ------------------------------------------------ section */
{ const s = dark('Four places a sign goes wrong', 'Ten minutes. Then you do them.'); }

/* 7 ------------------------------------------------ trap 1 */
{
  const s = p.addSlide(); s.background = { color: PAPER };
  badge(s, M, 0.5, 1);
  t(s, 'Subtracting a negative', { x: M + 0.75, y: 0.48, w: 11, h: 0.7, fontSize: 32,
      bold: true, fontFace: HEAD, color: NAVY, margin: 0 });
  t(s, 'Question 4 asked for the slope through (2, \u22121) and (6, 7).',
    { x: M, y: 1.4, w: 11.9, h: 0.4, fontSize: 17, color: INK, margin: 0 });

  // number line
  const y0 = 3.45, x0 = M + 0.4, len = 6.6;
  s.addShape(p.ShapeType.line, { x: x0, y: y0, w: len, h: 0, line: { color: MUTE, width: 1.5 } });
  for (let i = 0; i <= 8; i++) {
    const xx = x0 + (len / 8) * i;
    s.addShape(p.ShapeType.line, { x: xx, y: y0 - 0.08, w: 0, h: 0.16, line: { color: MUTE, width: 1 } });
    t(s, String(i - 1), { x: xx - 0.25, y: y0 + 0.12, w: 0.5, h: 0.3, fontSize: 12,
                          color: MUTE, align: 'center', margin: 0 });
  }
  s.addShape(p.ShapeType.line, { x: x0, y: y0 - 0.6, w: len, h: 0,
    line: { color: GREEN, width: 2.5, endArrowType: 'triangle' } });
  t(s, '8 steps', { x: x0 + len / 2 - 0.8, y: y0 - 1.12, w: 1.6, h: 0.35, fontSize: 15,
                    bold: true, color: GREEN, align: 'center', margin: 0 });

  card(s, 8.5, 1.95, 4.1, 2.9);
  t(s, '7 \u2212 (\u22121)', { x: 8.8, y: 2.2, w: 3.5, h: 0.6, fontSize: 30, bold: true,
                     fontFace: HEAD, color: NAVY, margin: 0 });
  t(s, 'is the distance from \u22121 up to 7.', { x: 8.8, y: 2.9, w: 3.5, h: 0.6, fontSize: 15,
                     color: INK, margin: 0 });
  t(s, '=  8,  not 6', { x: 8.8, y: 3.85, w: 3.5, h: 0.6, fontSize: 26, bold: true,
                     color: GREEN, margin: 0 });

  card(s, M, 5.25, 11.9, 1.4);
  t(s, 'Two minus signs meeting make a plus.',
    { x: M + 0.45, y: 5.45, w: 11.0, h: 0.5, fontSize: 22, bold: true, color: NAVY, margin: 0 });
  t(s, 'So the slope is 8 \u00f7 4 = 2.',
    { x: M + 0.45, y: 5.98, w: 11.0, h: 0.45, fontSize: 16, color: MUTE, margin: 0 });
  s.addNotes('Show the number line before you state the rule. The picture is what he will remember.');
}

/* 8 ------------------------------------------------ trap 2 */
{
  const s = p.addSlide(); s.background = { color: PAPER };
  badge(s, M, 0.5, 2);
  t(s, 'Distributing a negative', { x: M + 0.75, y: 0.48, w: 10, h: 0.7, fontSize: 32,
      bold: true, fontFace: HEAD, color: NAVY, margin: 0 });
  t(s, 'Question 2 asked for (x + 5)(x − 3).',
    { x: M, y: 1.4, w: 11.9, h: 0.4, fontSize: 17, color: INK, margin: 0 });

  card(s, M, 2.05, 5.8, 2.0, 'FBEEEC');
  t(s, 'What you did', { x: M + 0.35, y: 2.2, w: 5.1, h: 0.4, fontSize: 13, bold: true,
                         color: RED, charSpacing: 1, margin: 0 });
  t(s, 'x² − 3x + 5x − 15\n→  x² − 2x − 15', { x: M + 0.35, y: 2.72, w: 5.1, h: 1.2,
                         fontSize: 22, color: INK, valign: 'top', margin: 0 });

  card(s, M + 6.1, 2.05, 5.8, 2.0, 'EAF5EE');
  t(s, 'What it should be', { x: M + 6.45, y: 2.2, w: 5.1, h: 0.4, fontSize: 13, bold: true,
                         color: GREEN, charSpacing: 1, margin: 0 });
  t(s, '−3x + 5x  =  +2x\n→  x² + 2x − 15', { x: M + 6.45, y: 2.72, w: 5.1, h: 1.2,
                         fontSize: 22, bold: true, color: INK, valign: 'top', margin: 0 });

  t(s, 'Say the four products out loud before you write any of them.',
    { x: M, y: 4.95, w: 11.9, h: 0.5, fontSize: 22, bold: true, color: NAVY, margin: 0 });
  t(s, '−3 multiplies both terms. The error is applying it to one and forgetting the other.',
    { x: M, y: 5.52, w: 11.9, h: 0.5, fontSize: 16, color: MUTE, margin: 0 });
}

/* 9 ------------------------------------------------ trap 3 - brackets */
{
  const s = p.addSlide(); s.background = { color: PAPER };
  badge(s, M, 0.5, 3);
  t(s, 'Squaring and multiplying a negative', { x: M + 0.75, y: 0.48, w: 11, h: 0.7,
      fontSize: 32, bold: true, fontFace: HEAD, color: NAVY, margin: 0 });
  t(s, 'Question 6 asked for f(−2) when f(x) = 3x² − x.',
    { x: M, y: 1.4, w: 11.9, h: 0.4, fontSize: 17, color: INK, margin: 0 });

  const rows = [
    ['Substitute, in brackets', '3(−2)² − (−2)', NAVY],
    ['Then the powers',         '3(4) − (−2)',    NAVY],
    ['Then the signs',          '12 + 2  =  14',  GREEN],
  ];
  rows.forEach((r, i) => {
    const y = 1.95 + i * 1.22;
    card(s, M, y, 11.9, 1.02, i === 2 ? 'EAF5EE' : ICE);
    t(s, r[0], { x: M + 0.35, y: y + 0.25, w: 4.2, h: 0.45, fontSize: 15, color: MUTE, margin: 0 });
    t(s, r[1], { x: M + 4.8, y: y + 0.16, w: 6.8, h: 0.6, fontSize: 26, bold: true,
                 fontFace: HEAD, color: r[2], margin: 0 });
  });

  card(s, M, 5.7, 11.9, 1.2, '14355A');
  t(s, 'You lost the second minus sign because you skipped the first line.',
    { x: M + 0.45, y: 5.95, w: 11.0, h: 0.7, fontSize: 21, bold: true, color: 'FFFFFF', margin: 0 });
  s.addNotes('Insist on the bracket line for the rest of the course. This is the single highest-value habit.');
}

/* 10 ----------------------------------------------- trap 4 */
{
  const s = p.addSlide(); s.background = { color: PAPER };
  badge(s, M, 0.5, 4);
  t(s, 'Dividing an inequality by a negative', { x: M + 0.75, y: 0.48, w: 11, h: 0.7,
      fontSize: 32, bold: true, fontFace: HEAD, color: NAVY, margin: 0 });
  t(s, 'Why does the sign flip? Watch what happens to something you know is true.',
    { x: M, y: 1.4, w: 11.9, h: 0.4, fontSize: 17, color: INK, margin: 0 });

  const demo = [['2  <  4', 'true', GREEN], ['\u22122  <  \u22124', 'false', RED],
                ['\u22122  >  \u22124', 'true again', GREEN]];
  const ops = ['\u00d7 (\u22121)', 'so flip'];
  demo.forEach((d, i) => {
    const x = M + i * 4.3;
    card(s, x, 2.1, 3.3, 1.6);
    t(s, d[0], { x: x + 0.1, y: 2.4, w: 3.1, h: 0.6, fontSize: 28, bold: true,
                 fontFace: HEAD, color: INK, align: 'center', margin: 0 });
    t(s, d[1], { x: x + 0.1, y: 3.08, w: 3.1, h: 0.45, fontSize: 15, bold: true,
                 color: d[2], align: 'center', margin: 0 });
    if (i < 2) {
      const ax = x + 3.4;
      s.addShape(p.ShapeType.line, { x: ax + 0.05, y: 2.95, w: 0.8, h: 0,
        line: { color: MUTE, width: 1.5, endArrowType: 'triangle' } });
      t(s, ops[i], { x: ax - 0.1, y: 2.45, w: 1.1, h: 0.4, fontSize: 13, italic: true,
                     color: MUTE, align: 'center', margin: 0 });
    }
  });

  t(s, 'Multiplying or dividing by a negative turns the sign around.',
    { x: M, y: 4.0, w: 11.9, h: 0.5, fontSize: 22, bold: true, color: NAVY, margin: 0 });

  card(s, M, 4.75, 11.9, 1.9);
  t(s, 'Question 14:   5 − 2x ≥ 11   →   −2x ≥ 6   →   x ≤ −3',
    { x: M + 0.4, y: 5.0, w: 11.1, h: 0.55, fontSize: 21, bold: true, color: INK, margin: 0 });
  t(s, 'Check it: put x = 4 into 5 − 2x ≥ 11 and you get −3 ≥ 11, which is false. Your answer said x ≥ 3, so it refuted itself in one line.',
    { x: M + 0.4, y: 5.68, w: 11.1, h: 0.8, fontSize: 15, color: MUTE, margin: 0 });
}

/* 11 ----------------------------------------------- THE rule */
{
  const s = p.addSlide(); s.background = { color: DEEP };
  t(s, 'If you remember one thing:', { x: M, y: 2.0, w: 11.9, h: 0.6, fontSize: 22,
      color: 'CADCFC', margin: 0 });
  t(s, 'Every substitution\ngets brackets.', { x: M, y: 2.7, w: 11.9, h: 2.0, fontSize: 54,
      bold: true, fontFace: HEAD, color: 'FFFFFF', margin: 0 });
  t(s, 'f(−2)  =  3(−2)² − (−2)', { x: M, y: 4.9, w: 11.9, h: 0.7, fontSize: 30,
      fontFace: HEAD, color: 'CADCFC', margin: 0 });
}

/* 12 ----------------------------------------------- your turn */
{
  const s = light('Your turn — 20 minutes');
  t(s, 'Redo these six from your diagnostic. Brackets on every substitution.',
    { x: M, y: 1.35, w: 11.9, h: 0.45, fontSize: 18, color: INK, margin: 0 });
  const six = ['2', '4', '6', '11', '14', '15'];
  six.forEach((n, i) => {
    const x = M + i * 2.05;
    s.addShape(p.ShapeType.roundRect, { x, y: 2.25, w: 1.8, h: 1.8, rectRadius: 0.12,
      fill: { color: NAVY } });
    t(s, n, { x, y: 2.25, w: 1.8, h: 1.8, fontSize: 48, bold: true, fontFace: HEAD,
              color: 'FFFFFF', align: 'center', valign: 'middle', margin: 0 });
  });
  card(s, M, 4.75, 11.9, 1.85);
  t(s, 'If you think you have one right, do not ask me. Ask yourself how you could check it.',
    { x: M + 0.45, y: 5.05, w: 11.0, h: 0.6, fontSize: 20, bold: true, color: NAVY, margin: 0 });
  t(s, 'Finished early? Question 19 — the absolute value one. It is the hardest of the family.',
    { x: M + 0.45, y: 5.78, w: 11.0, h: 0.5, fontSize: 15, color: MUTE, margin: 0 });
  s.addNotes('Say nothing unless he has been stuck for ninety seconds. This is the most valuable block of the week.');
}

/* 13 ----------------------------------------------- section */
{ const s = dark('Checking', 'Five of your seventeen would not have survived thirty seconds of this.'); }

/* 14 ----------------------------------------------- check 1 */
{
  const s = p.addSlide(); s.background = { color: PAPER };
  badge(s, M, 0.5, 1);
  t(s, 'Put your answer back in', { x: M + 0.75, y: 0.48, w: 11, h: 0.7, fontSize: 32,
      bold: true, fontFace: HEAD, color: NAVY, margin: 0 });

  const steps = [
    ['Your answer', 'x ≥ 3', RED],
    ['Pick a value it allows', 'x = 4', NAVY],
    ['Put it in the question', '5 − 2(4)  =  −3', NAVY],
    ['Is −3 ≥ 11?', 'No. So the answer is wrong.', GREEN],
  ];
  steps.forEach((st, i) => {
    const y = 1.5 + i * 1.28;
    card(s, M, y, 11.9, 1.12, i === 3 ? 'EAF5EE' : ICE);
    t(s, st[0], { x: M + 0.35, y: y + 0.3, w: 4.4, h: 0.45, fontSize: 16, color: MUTE, margin: 0 });
    t(s, st[1], { x: M + 5.0, y: y + 0.22, w: 6.6, h: 0.6, fontSize: 24, bold: true,
                  fontFace: HEAD, color: st[2], margin: 0 });
  });
  t(s, 'Thirty seconds. No new mathematics.',
    { x: M, y: 6.55, w: 11.9, h: 0.45, fontSize: 17, italic: true, color: NAVY, margin: 0 });
}

/* 15 ----------------------------------------------- check 2 */
{
  const s = p.addSlide(); s.background = { color: PAPER };
  badge(s, M, 0.5, 2);
  t(s, 'Ask: could that be true?', { x: M + 0.75, y: 0.48, w: 11, h: 0.7, fontSize: 32,
      bold: true, fontFace: HEAD, color: NAVY, margin: 0 });
  t(s, 'Three of your answers could not possibly have been right, and you did not need to do any maths to see it.',
    { x: M, y: 1.4, w: 11.9, h: 0.45, fontSize: 17, color: INK, margin: 0 });

  const three = [
    ['Question 12', 'Legs of 9 and 12.\nYou put 0.013.',
      'The longest side cannot be smaller than the short one.'],
    ['Question 16', '26 of 45 walkers.\nYou put a probability of 1.',
      'A probability of 1 means all of them.'],
    ['Question 17', 'Radius 3, height 10.\nYou put 60π.',
      'The base alone is 9π, and it is 10 tall.'],
  ];
  three.forEach((q, i) => {
    const x = M + i * 4.05;
    card(s, x, 2.05, 3.75, 2.95);
    t(s, q[0], { x: x + 0.28, y: 2.25, w: 3.2, h: 0.35, fontSize: 13, bold: true,
                 color: NAVY, charSpacing: 1, margin: 0 });
    t(s, q[1], { x: x + 0.28, y: 2.68, w: 3.2, h: 1.0, fontSize: 17, color: INK, margin: 0 });
    t(s, q[2], { x: x + 0.28, y: 3.85, w: 3.2, h: 1.0, fontSize: 14, italic: true,
                 color: GREEN, valign: 'top', margin: 0 });
  });
  t(s, 'Before you move on, look at your answer and ask whether it is a sensible size.',
    { x: M, y: 5.45, w: 11.9, h: 0.55, fontSize: 20, bold: true, color: NAVY, margin: 0 });
}

/* 16 ----------------------------------------------- this week */
{
  const s = light('This week');
  t(s, 'Four short sittings. Not one long one.',
    { x: M, y: 1.3, w: 11.9, h: 0.45, fontSize: 18, color: MUTE, margin: 0 });
  const wk = [
    ['Sunday',   'Part A',    'Signed arithmetic. No calculator.', '25 min'],
    ['Tuesday',  'Parts B, C','Substitution, and the four traps.', '30 min'],
    ['Thursday', 'Part D',    '"Could that be true?"',             '20 min'],
    ['Saturday', 'Part E',    'Six mixed questions, timed.',       '25 min'],
  ];
  wk.forEach((r, i) => {
    const y = 1.95 + i * 0.95;
    card(s, M, y, 11.9, 0.8, i % 2 ? PAPER : ICE);
    t(s, r[0], { x: M + 0.35, y: y + 0.2, w: 1.9, h: 0.45, fontSize: 17, bold: true,
                 color: NAVY, margin: 0 });
    t(s, r[1], { x: M + 2.35, y: y + 0.2, w: 1.7, h: 0.45, fontSize: 16, color: MUTE, margin: 0 });
    t(s, r[2], { x: M + 4.2, y: y + 0.2, w: 6.0, h: 0.45, fontSize: 16, color: INK, margin: 0 });
    t(s, r[3], { x: M + 10.3, y: y + 0.2, w: 1.3, h: 0.45, fontSize: 16, bold: true,
                 color: NAVY, align: 'right', margin: 0 });
  });
  t(s, 'Bring the sheet and your error log next Sunday.',
    { x: M, y: 5.9, w: 11.9, h: 0.5, fontSize: 18, italic: true, color: NAVY, margin: 0 });
}

/* 17 ----------------------------------------------- close */
{
  const s = p.addSlide(); s.background = { color: DEEP };
  t(s, 'Seven of them were one mistake.', { x: M, y: 2.3, w: 11.9, h: 0.9, fontSize: 36,
      fontFace: HEAD, color: 'CADCFC', margin: 0 });
  t(s, 'You already know how to fix it.', { x: M, y: 3.2, w: 11.9, h: 1.2, fontSize: 48,
      bold: true, fontFace: HEAD, color: 'FFFFFF', margin: 0 });
  t(s, 'Every substitution gets brackets.', { x: M, y: 5.0, w: 11.9, h: 0.6, fontSize: 22,
      color: '8FA6C4', margin: 0 });
}

p.writeFile({ fileName: 'session-2-the-sign-error.pptx' }).then(f => console.log('WROTE', f));

/* build.js — assemble a deck artifact from content + shell + engine */
const fs = require('fs'), path = require('path');
const DIR = __dirname;
const BANK = JSON.parse(fs.readFileSync('/mnt/user-data/outputs/workbook/data/bank.json', 'utf8'));
const BYID = {}; BANK.questions.forEach(q => BYID[q.id] = q);

function pick(ids) {
  return ids.map(id => {
    const q = BYID[id];
    if (!q) throw new Error('No bank question ' + id);
    const out = {
      stem: q.stem, answer: q.answer, solution: q.solution,
      tag: q.difficulty === 'hard' ? 'harder' : (q.difficulty === 'medium' ? 'medium' : 'warm-up')
    };
    if (q.choices) out.choices = q.choices;
    if (q.distractors) {
      const wrong = Object.keys(q.distractors).filter(k => k !== q.answer);
      if (wrong.length) out.trap = wrong.map(k => k + ') is what you get if you ' + q.distractors[k]).join('; ') + '.';
    }
    return out;
  });
}
module.exports = { BANK, BYID, pick };

function build(contentFile) {
  const content = require(path.join(DIR, contentFile));
  const deck = typeof content === 'function' ? content({ pick, BYID }) : content;
  const shell = fs.readFileSync(path.join(DIR, 'shell.html'), 'utf8');
  const css = fs.readFileSync(path.join(DIR, 'shell.css'), 'utf8');
  const eng = fs.readFileSync(path.join(DIR, 'engine.js'), 'utf8');
  const html = shell
    .replace('__TITLE__', () => deck.title)
    .replace('__CSS__', () => css)
    .replace('__DECK__', () => JSON.stringify(deck))
    .replace('__ENGINE__', () => eng);
  const out = path.join('/mnt/user-data/outputs/decks', deck.id + '.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  // sanity
  const n = deck.slides.length;
  const prac = deck.slides.filter(s => s.type === 'practice');
  const qn = prac.reduce((a, s) => a + s.questions.length, 0);
  const worked = deck.slides.filter(s => s.type === 'worked').length;
  console.log(`${deck.id}: ${n} slides, ${worked} worked, ${prac.length} practice slides, ${qn} questions -> ${out} (${(html.length/1024).toFixed(0)} KB)`);
  return out;
}

if (require.main === module) {
  process.argv.slice(2).forEach(build);
}
module.exports.build = build;

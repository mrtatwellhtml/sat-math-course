# Session decks (HTML)

One self-contained HTML file per session. Open it in any browser — no server, no
internet needed except for the maths typesetting, which falls back to plain text
if it cannot load.

| File | Session | Date | Slides | Questions |
|---|---|---|---|---|
| `2026-10-25-session-5-quadratics.html` | 5 · Quadratics | 25 Oct | 27 | 28 |
| `2026-11-01-session-6-functions-and-growth.html` | 6 · Functions & Growth | 1 Nov | 30 | 28 |
| `2026-11-08-session-7-checkpoint.html` | 7 · Checkpoint | 8 Nov | 21 | 36 |
| `2026-11-15-session-8-ratios-rates-data.html` | 8 · Ratios, Rates & Data | 15 Nov | 32 | 28 |
| `2026-11-22-session-9-geometry-and-trig.html` | 9 · Geometry & Trig | 22 Nov | 34 | 28 |
| `2026-11-29-session-10-test-craft.html` | 10 · Test Craft | 29 Nov | 23 | 24 |

## Running one in a lesson

| Key | Does |
|---|---|
| `→` `←` `space` | Next / previous slide |
| `F` | Fullscreen |
| `O` | Contents — jump to any slide |
| `N` | Tutor notes for the current slide (yours, not his) |
| `Home` `End` | First / last slide |

Swipe works on a tablet. The deck remembers where you stopped, so closing the tab
mid-lesson and reopening it puts you back on the same slide.

Practice slides: he picks an option, then **Show answer** reveals the worked
solution and — for multiple choice — names the mistake behind each wrong option.
**Show every answer** opens all of them at once for a review pass.

## Rebuilding

Content lives in `src/dN-*.js`, one file per deck. Edit the content, then:

```
cd src
node build.js d1-quadratics.js            # or several at once
```

`pick([...])` pulls verified questions out of `workbook/data/bank.json` by id.
Topics in the bank: 0.2, 1.1–1.7, 3.2, 3.3. Everything else is written inline in
the content file. `DECK-SCHEMA.md` documents every slide type and the question
object.

Built files land in the build script's output folder — copy them up to this
directory, or change `out` in `build.js`.

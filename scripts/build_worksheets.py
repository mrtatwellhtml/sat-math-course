"""Generate printable worksheets and answer keys from the lesson pages.

Each written lesson produces two standalone pages:

    docs/worksheets/<id>-<slug>.md            the twelve questions, no answers
    docs/worksheets/<id>-<slug>-answers.md    the key and the full solutions

They are split so a worksheet can be handed to a student without the answers
on the back of it, and so the tutor can print the key separately.

These files are generated. They are gitignored and regenerated on every build
(see `hooks:` in mkdocs.yml), so editing one by hand achieves nothing - change
the lesson instead.

    python scripts/build_worksheets.py        # write them
    python scripts/build_worksheets.py --check  # fail if any lesson is unparseable
"""

from __future__ import annotations

import argparse
import re
import shutil
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "curriculum" / "manifest.yml"
DOCS = ROOT / "docs"
OUT = DOCS / "worksheets"

PRACTICE = "## Practice"
ANSWERS = "## Answers and solutions"
TUTOR = "## Tutor notes"


def slugify(title: str) -> str:
    s = title.lower().replace("&", "and")
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


def split_frontmatter(text: str):
    if not text.startswith("---"):
        return {}, text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return {}, text
    try:
        return yaml.safe_load(parts[1]) or {}, parts[2]
    except yaml.YAMLError:
        return {}, parts[2]


def section(body: str, start: str, end: str | None) -> str:
    i = body.find(start)
    if i < 0:
        return ""
    rest = body[i + len(start):]
    if end:
        j = rest.find(end)
        if j >= 0:
            rest = rest[:j]
    return rest.strip()


def strip_trailing_rule(text: str) -> str:
    return re.sub(r"\n-{3,}\s*$", "", text).rstrip()


def open_details(text: str) -> str:
    """`??? success` collapses; a printed key must already be open.

    A collapsed <details> prints as its summary line and nothing else, so an
    answer key built from the lesson verbatim comes out of the printer blank.
    `???+` renders the same block expanded.
    """
    return re.sub(r"^(\s*)\?\?\?(?!\+)", r"\1???+", text, flags=re.MULTILINE)


def question_count(practice: str) -> int:
    return len(re.findall(r"^\s*\*\*(\d{1,2})\.\*\*", practice, flags=re.MULTILINE))


def worksheet_page(lid: str, title: str, est: int, practice: str, key_link: str) -> str:
    return f"""---
title: "{lid} {title} - worksheet"
hide:
  - navigation
  - toc
---

# {lid} {title}

<div class="worksheet-meta" markdown>

**Name:** &nbsp;{"&nbsp;" * 40} **Date:** &nbsp;{"&nbsp;" * 12}

Twelve questions. Target time: **{est} minutes**. Show your working — the
method is what gets marked in a review, not the final value.

A calculator is allowed throughout, as on the digital SAT. Questions marked
*(student-produced response)* have no answer choices: you enter the value.

</div>

{strip_trailing_rule(practice)}

---

[Answer key and full solutions]({key_link})
"""


def answers_page(lid: str, title: str, answers: str, sheet_link: str) -> str:
    return f"""---
title: "{lid} {title} - answer key"
hide:
  - navigation
  - toc
---

# {lid} {title} — answer key

!!! warning "Tutor copy"
    This page contains the answers and the full solutions. Print the
    [worksheet]({sheet_link}) instead if you are handing something to a student.

{open_details(strip_trailing_rule(answers))}
"""


def index_page(rows: list[tuple[str, str, str, str, int]]) -> str:
    lines = [
        "---",
        'title: "Printable worksheets"',
        "---",
        "",
        "# Printable worksheets",
        "",
        "Every written lesson's practice set as a standalone sheet, with the",
        "answer key on a separate page so a worksheet can be handed over without",
        "it.",
        "",
        "!!! tip \"Saving as PDF\"",
        "    Use your browser's **Print** command and choose *Save as PDF* as the",
        "    destination. The page styling strips the site navigation, so what you",
        "    get is the questions alone. Set margins to Default and enable",
        "    *Background graphics* if you want the difficulty chips to show.",
        "",
        f"{len(rows)} worksheet{'s' if len(rows) != 1 else ''} available.",
        "",
        "| Lesson | Questions | Worksheet | Answer key |",
        "|--------|-----------|-----------|------------|",
    ]
    for lid, title, sheet, key, n in rows:
        lines.append(f"| {lid} {title} | {n} | [Worksheet]({sheet}) | [Key]({key}) |")
    lines.append("")
    return "\n".join(lines)


def build(verbose: bool = True) -> tuple[int, list[str]]:
    data = yaml.safe_load(MANIFEST.read_text(encoding="utf-8"))
    problems: list[str] = []
    rows = []

    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True, exist_ok=True)

    for level in data["levels"]:
        for lesson in level["lessons"]:
            lid = str(lesson["id"])
            stem = f"{lid.replace('.', '-')}-{slugify(lesson['title'])}"
            src = DOCS / level["slug"] / f"{stem}.md"
            if not src.exists():
                continue

            fm, body = split_frontmatter(src.read_text(encoding="utf-8"))
            if fm.get("status") in (None, "planned"):
                continue

            practice = section(body, PRACTICE, ANSWERS)
            answers = section(body, ANSWERS, TUTOR)
            n = question_count(practice)

            if not practice or not answers:
                problems.append(f"{lid}: no practice or answers section to extract")
                continue
            if n != 12:
                problems.append(f"{lid}: extracted {n} questions, expected 12")

            sheet_name = f"{stem}.md"
            key_name = f"{stem}-answers.md"
            (OUT / sheet_name).write_text(
                worksheet_page(lid, lesson["title"], lesson.get("est_minutes", 50),
                               practice, key_name),
                encoding="utf-8",
            )
            (OUT / key_name).write_text(
                answers_page(lid, lesson["title"], answers, sheet_name),
                encoding="utf-8",
            )
            rows.append((lid, lesson["title"], sheet_name, key_name, n))

    (OUT / "index.md").write_text(index_page(rows), encoding="utf-8")

    if verbose:
        print(f"worksheets: {len(rows)} lesson(s) -> {len(rows) * 2 + 1} pages")
        for p in problems:
            print(f"  WARN {p}")
    return len(rows), problems


# MkDocs calls this automatically before each build, so the worksheets can
# never drift from the lessons they come from.
def on_pre_build(config, **kwargs):
    build(verbose=False)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--check", action="store_true",
                    help="exit 1 if any written lesson could not be extracted cleanly")
    args = ap.parse_args()
    _, problems = build()
    return 1 if (args.check and problems) else 0


if __name__ == "__main__":
    raise SystemExit(main())

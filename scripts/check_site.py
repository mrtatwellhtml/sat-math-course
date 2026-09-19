#!/usr/bin/env python3
"""Pre-flight checks that catch what `mkdocs build --strict` would fail on,
plus a structural audit of each written lesson.

    python scripts/check_site.py

Run this before /publish. It needs no network and no mkdocs install.
"""
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

BANNED = ["simply", "obviously", "of course"]
errors: list[str] = []
warns: list[str] = []


def check_nav():
    cfg = yaml.safe_load((ROOT / "mkdocs.yml").read_text(encoding="utf-8"))

    def walk(node):
        if isinstance(node, str):
            if not (DOCS / node).exists():
                errors.append(f"nav points at missing page: {node}")
        elif isinstance(node, list):
            for i in node:
                walk(i)
        elif isinstance(node, dict):
            for v in node.values():
                walk(v)

    walk(cfg.get("nav", []))


LINK = re.compile(r"\[[^\]]*\]\(([^)#][^)]*?)\)")


def check_links():
    for md in DOCS.rglob("*.md"):
        for target in LINK.findall(md.read_text(encoding="utf-8")):
            if target.startswith(("http://", "https://", "mailto:")):
                continue
            dest = (md.parent / target.split("#")[0]).resolve()
            if not dest.exists():
                errors.append(f"{md.relative_to(ROOT)}: broken link -> {target}")


def audit_lessons():
    """Structural audit of every lesson that is past `planned`."""
    for md in DOCS.rglob("*.md"):
        text = md.read_text(encoding="utf-8")
        m = re.search(r"^status:\s*\"?(\w+)\"?", text, re.M)
        if not m or m.group(1) == "planned":
            continue
        rel = md.relative_to(ROOT)

        if text.count("$$") % 2:
            errors.append(f"{rel}: unbalanced $$ display maths")

        body = text.split("## Practice")[0]
        for w in BANNED:
            if re.search(rf"\b{w}\b", body, re.I):
                warns.append(f"{rel}: banned word '{w}' in teaching text")

        if "## Worked examples" in text:
            n = len(re.findall(r"^### Example \d", text, re.M))
            if n != 3:
                errors.append(f"{rel}: {n} worked examples, expected 3")
            think = text.count("**Thinking:**")
            if think < 3:
                errors.append(f"{rel}: {think} Thinking lines, expected 3")

        if "## Practice" in text:
            practice = text.split("## Practice")[1].split("## Answers")[0]
            # The template's own placeholder carries six `**n.**` markers and one
            # `*(student-produced response)*`. Counting those reports "6 practice
            # questions" for a lesson whose problem-writer never ran at all, which
            # reads as half-finished work rather than absent work. Say which it is.
            if "Question stem." in practice or "Number questions as" in practice:
                errors.append(
                    f"{rel}: Practice section is still the unfilled template "
                    f"placeholder - the problem-writer stage has not run"
                )
            else:
                qs = len(re.findall(r"^\s*\*\*(\d{1,2})\.\*\*\s", practice, re.M))
                if qs != 12:
                    errors.append(f"{rel}: {qs} practice questions, expected 12")
                # The real digital SAT is about one-quarter grid-in: 3 of 12.
                # Too few is a defect. Too many misrepresents the test and
                # starves the student of distractor-elimination practice, so it
                # warns rather than blocking - the lessons written before this
                # was noticed sit at 5.
                spr = len(re.findall(r"student-produced response", practice, re.I))
                if spr < 3:
                    errors.append(
                        f"{rel}: {spr} student-produced responses, expected 3 or 4"
                    )
                elif spr > 4:
                    warns.append(
                        f"{rel}: {spr} student-produced responses, expected 3 or 4 "
                        f"(the real test is about one-quarter grid-in)"
                    )

        # The point is to catch `.4`, not `0.4`. Written `0?\.\d` the leading
        # zero is optional, so the pattern matched correctly-formatted decimals
        # too and fired on any line starting with one.
        for n in re.findall(r"(?<![\d.\w])\.\d", text):
            warns.append(f"{rel}: decimal missing leading zero")
            break


def main() -> int:
    check_nav()
    check_links()
    audit_lessons()

    for w in warns:
        print(f"  warn   {w}")
    for e in errors:
        print(f"  ERROR  {e}")

    print(f"\n{len(errors)} errors, {len(warns)} warnings")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
